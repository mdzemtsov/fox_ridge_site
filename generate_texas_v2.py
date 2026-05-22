"""
FoxRidge Texas Triangle 2026 — Premium Investor PDF v2
Full-bleed backgrounds, large numbers, dark design, institutional grade
"""
import os, io, math, qrcode
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

W, H = letter  # 612 x 792 pts

# ── Brand Colors ──────────────────────────────────────────────────────────────
NAVY      = colors.HexColor("#0D1F3C")
NAVY2     = colors.HexColor("#1E3A6E")
GOLD      = colors.HexColor("#B8942A")
GOLD2     = colors.HexColor("#D4A843")
WHITE     = colors.white
OFFWHITE  = colors.HexColor("#F5F3EE")
GRAY      = colors.HexColor("#8A9BB0")
DARKGRAY  = colors.HexColor("#1A2A3A")
ORANGE    = colors.HexColor("#C85A1A")
LIGHTNAVY = colors.HexColor("#2A4A7A")

# ── Asset Paths ───────────────────────────────────────────────────────────────
BASE = os.path.dirname(os.path.abspath(__file__))
IMG  = os.path.join(BASE, "client/public/images")
PDF_ASSETS = os.path.join(BASE, "pdf_assets")
OUT  = os.path.join(BASE, "client/public/FoxRidge_TexasTriangle_2026.pdf")

LOGO_PATH   = os.path.join(IMG, "logo-white-new.png")
MIKHAIL_IMG = os.path.join(IMG, "mikhail.jpg")
SLAVA_IMG   = os.path.join(IMG, "slava_new.webp")
BG_COVER    = os.path.join(PDF_ASSETS, "bg_cover.jpg")
BG_MARKET   = os.path.join(PDF_ASSETS, "bg_market.jpg")
BG_SUPPLY   = os.path.join(PDF_ASSETS, "bg_supply.jpg")
BG_RETURNS  = os.path.join(PDF_ASSETS, "bg_returns.jpg")

# ── Helper: PIL → ReportLab ImageReader ──────────────────────────────────────
def pil_to_rl(img: Image.Image, quality=82) -> "ImageReader":
    from reportlab.lib.utils import ImageReader
    buf = io.BytesIO()
    rgb = img.convert("RGB")
    rgb.save(buf, "JPEG", quality=quality)
    buf.seek(0)
    return ImageReader(buf)

def load_img(path):
    return Image.open(path).convert("RGB")

def dark_overlay(img: Image.Image, alpha=0.55) -> Image.Image:
    """Darken image with a semi-transparent black overlay."""
    overlay = Image.new("RGB", img.size, (0, 0, 0))
    return Image.blend(img, overlay, alpha)

def navy_overlay(img: Image.Image, alpha=0.65) -> Image.Image:
    """Apply navy tint overlay."""
    overlay = Image.new("RGB", img.size, (13, 31, 60))
    return Image.blend(img, overlay, alpha)

def portrait_crop(path, w_pts, h_pts, quality=85):
    """Crop image to portrait rectangle centered on face (top third)."""
    from reportlab.lib.utils import ImageReader
    img = Image.open(path).convert("RGB")
    iw, ih = img.size
    target_ratio = w_pts / h_pts
    if iw / ih > target_ratio:
        new_w = int(ih * target_ratio)
        left = (iw - new_w) // 2
        img = img.crop((left, 0, left + new_w, ih))
    else:
        new_h = int(iw / target_ratio)
        top = 0
        img = img.crop((0, top, iw, top + new_h))
    img = img.resize((int(w_pts * 2), int(h_pts * 2)), Image.LANCZOS)
    buf = io.BytesIO()
    img.save(buf, "JPEG", quality=quality)
    buf.seek(0)
    return ImageReader(buf)

def make_qr(url, size_pts):
    from reportlab.lib.utils import ImageReader
    qr = qrcode.QRCode(version=2, box_size=10, border=2,
                       error_correction=qrcode.constants.ERROR_CORRECT_H)
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#0D1F3C", back_color="white").convert("RGB")
    img = img.resize((int(size_pts * 3), int(size_pts * 3)), Image.LANCZOS)
    buf = io.BytesIO()
    img.save(buf, "JPEG", quality=95)
    buf.seek(0)
    return ImageReader(buf)

def draw_full_bg(c, img_path, overlay_alpha=0.55, overlay_color="navy"):
    """Draw a full-page background image with dark overlay."""
    img = load_img(img_path)
    # Resize to fill page
    iw, ih = img.size
    scale = max(W / iw, H / ih)
    new_w, new_h = int(iw * scale), int(ih * scale)
    img = img.resize((new_w, new_h), Image.LANCZOS)
    # Center crop
    left = (new_w - int(W)) // 2
    top = (new_h - int(H)) // 2
    img = img.crop((left, top, left + int(W), top + int(H)))
    if overlay_color == "navy":
        img = navy_overlay(img, overlay_alpha)
    else:
        img = dark_overlay(img, overlay_alpha)
    c.drawImage(pil_to_rl(img, 75), 0, 0, W, H)

def draw_logo(c, x, y, w=1.4*inch):
    """Draw the white logo."""
    try:
        from reportlab.lib.utils import ImageReader
        img = Image.open(LOGO_PATH).convert("RGBA")
        iw, ih = img.size
        h = w * ih / iw
        buf = io.BytesIO()
        img.save(buf, "PNG")
        buf.seek(0)
        c.drawImage(ImageReader(buf), x, y - h, w, h, mask="auto")
        return h
    except:
        c.setFont("Helvetica-Bold", 14)
        c.setFillColor(WHITE)
        c.drawString(x, y - 0.2*inch, "FOXRIDGE EQUITY")
        return 0.25*inch

def draw_text_shadow(c, text, x, y, font, size, color, shadow_offset=2):
    """Draw text with a subtle shadow for readability on photos."""
    c.setFont(font, size)
    c.setFillColor(colors.HexColor("#000000"))
    c.setFillAlpha(0.4)
    c.drawString(x + shadow_offset, y - shadow_offset, text)
    c.setFillAlpha(1.0)
    c.setFillColor(color)
    c.drawString(x, y, text)

def wrap_text(c, text, x, y, max_w, font, size, color, leading=None):
    """Draw wrapped text, return final y position."""
    if leading is None:
        leading = size * 1.4
    c.setFont(font, size)
    c.setFillColor(color)
    words = text.split()
    line = ""
    for word in words:
        test = (line + " " + word).strip()
        if c.stringWidth(test, font, size) <= max_w:
            line = test
        else:
            c.drawString(x, y, line)
            y -= leading
            line = word
    if line:
        c.drawString(x, y, line)
        y -= leading
    return y

def draw_gold_line(c, x, y, w, thickness=2):
    c.setStrokeColor(GOLD)
    c.setLineWidth(thickness)
    c.line(x, y, x + w, y)

def draw_stat_block(c, x, y, w, h, number, label, sublabel="", bg_color=None, num_color=GOLD2, label_color=WHITE):
    """Draw a large stat block with number and label."""
    if bg_color:
        c.setFillColor(bg_color)
        c.roundRect(x, y - h, w, h, 4, fill=1, stroke=0)
    # Number
    num_size = 36 if len(number) <= 5 else 28
    c.setFont("Helvetica-Bold", num_size)
    c.setFillColor(num_color)
    num_w = c.stringWidth(number, "Helvetica-Bold", num_size)
    c.drawString(x + (w - num_w) / 2, y - h * 0.38, number)
    # Label
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(label_color)
    lw = c.stringWidth(label, "Helvetica-Bold", 9)
    c.drawString(x + (w - lw) / 2, y - h * 0.62, label)
    # Sublabel
    if sublabel:
        c.setFont("Helvetica", 7)
        c.setFillColor(GRAY)
        sw = c.stringWidth(sublabel, "Helvetica", 7)
        c.drawString(x + (w - sw) / 2, y - h * 0.78, sublabel)

# ══════════════════════════════════════════════════════════════════════════════
# PAGE 1 — COVER
# ══════════════════════════════════════════════════════════════════════════════
def page_cover(c):
    # Full-bleed Texas Triangle aerial night photo
    draw_full_bg(c, BG_COVER, overlay_alpha=0.50, overlay_color="navy")

    # Top header bar
    c.setFillColor(colors.HexColor("#0D1F3C"))
    c.setFillAlpha(0.85)
    c.rect(0, H - 0.65*inch, W, 0.65*inch, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    draw_logo(c, 0.4*inch, H - 0.12*inch, w=1.3*inch)

    # Gold accent line
    c.setFillColor(GOLD)
    c.rect(0, H - 0.68*inch, W, 0.03*inch, fill=1, stroke=0)

    # Date tag top right
    c.setFont("Helvetica", 8)
    c.setFillColor(GOLD)
    date_str = "MAY 2026  |  CONFIDENTIAL"
    dw = c.stringWidth(date_str, "Helvetica", 8)
    c.drawString(W - dw - 0.4*inch, H - 0.38*inch, date_str)

    # ── Main headline (centered, large) ──
    c.setFont("Helvetica-Bold", 52)
    c.setFillColor(WHITE)
    title1 = "TEXAS TRIANGLE"
    t1w = c.stringWidth(title1, "Helvetica-Bold", 52)
    c.drawString((W - t1w) / 2, H * 0.72, title1)

    c.setFont("Helvetica-Bold", 28)
    c.setFillColor(GOLD2)
    title2 = "MULTIFAMILY OPPORTUNITY 2026"
    t2w = c.stringWidth(title2, "Helvetica-Bold", 28)
    c.drawString((W - t2w) / 2, H * 0.72 - 0.55*inch, title2)

    # Gold divider
    draw_gold_line(c, (W - 3*inch)/2, H * 0.72 - 0.75*inch, 3*inch, 2)

    # Subtitle
    c.setFont("Helvetica", 13)
    c.setFillColor(OFFWHITE)
    sub = "A Trough-Cycle Entry Into America's Fastest-Growing Megaregion"
    sw = c.stringWidth(sub, "Helvetica", 13)
    c.drawString((W - sw) / 2, H * 0.72 - 1.05*inch, sub)

    # ── 4-stat bar (bottom third) ──
    bar_y = H * 0.40
    bar_h = 1.15*inch
    c.setFillColor(NAVY)
    c.setFillAlpha(0.92)
    c.rect(0, bar_y - bar_h, W, bar_h, fill=1, stroke=0)
    c.setFillAlpha(1.0)

    # Gold top border
    c.setFillColor(GOLD)
    c.rect(0, bar_y, W, 0.03*inch, fill=1, stroke=0)

    stats = [
        ("47M+", "PEOPLE IN THE TRIANGLE", "Combined Metro Population"),
        ("$1.2T", "REGIONAL GDP", "3rd Largest Economy in U.S."),
        ("94%", "OCCUPANCY FLOOR", "2025 Stabilized Average"),
        ("2026", "SUPPLY CLIFF BEGINS", "Peak Deliveries Behind Us"),
    ]
    sw_each = W / 4
    for i, (num, lbl, sub) in enumerate(stats):
        bx = i * sw_each
        draw_stat_block(c, bx + 0.1*inch, bar_y, sw_each - 0.2*inch, bar_h,
                        num, lbl, sub, bg_color=None, num_color=GOLD2)
        if i > 0:
            c.setStrokeColor(GOLD)
            c.setLineWidth(0.5)
            c.setStrokeAlpha(0.3)
            c.line(bx, bar_y - bar_h + 0.15*inch, bx, bar_y - 0.15*inch)
            c.setStrokeAlpha(1.0)

    # ── Investment thesis quote ──
    thesis_y = bar_y - bar_h - 0.35*inch
    c.setFont("Helvetica-BoldOblique", 14)
    c.setFillColor(WHITE)
    quote = '"The supply wave has crested. Demand has not."'
    qw = c.stringWidth(quote, "Helvetica-BoldOblique", 14)
    c.drawString((W - qw) / 2, thesis_y, quote)

    c.setFont("Helvetica", 10)
    c.setFillColor(GOLD)
    attr = "— FoxRidge Equity  |  Texas Triangle Thesis, 2026"
    aw = c.stringWidth(attr, "Helvetica", 10)
    c.drawString((W - aw) / 2, thesis_y - 0.25*inch, attr)

    # ── 3-column key facts ──
    facts_y = thesis_y - 0.65*inch
    facts = [
        ("1,200+", "New residents/day\nacross the Triangle"),
        ("68,000", "Units delivering\nin 2024–25 (peak)"),
        ("~15,000", "Units projected\nfor 2026 (trough)"),
        ("No State\nIncome Tax", "Structural\nresident magnet"),
        ("Fortune 500", "HQ relocations\nto Texas: 50+ since 2020"),
        ("$180B+", "Infrastructure\nspending committed"),
    ]
    col_w = W / 3
    row_h = 0.80*inch
    for i, (num, desc) in enumerate(facts):
        col = i % 3
        row = i // 3
        fx = col * col_w + 0.25*inch
        fy = facts_y - row * row_h

        # Gold number
        c.setFont("Helvetica-Bold", 18)
        c.setFillColor(GOLD2)
        # Handle multi-line numbers
        num_lines = num.split("\n")
        ny = fy
        for nl in num_lines:
            c.drawString(fx, ny, nl)
            ny -= 0.22*inch

        # Description
        c.setFont("Helvetica", 9)
        c.setFillColor(OFFWHITE)
        desc_lines = desc.split("\n")
        dy = fy - 0.25*inch
        for dl in desc_lines:
            c.drawString(fx, dy, dl)
            dy -= 0.14*inch

    # ── Bottom footer ──
    c.setFillColor(NAVY)
    c.setFillAlpha(0.9)
    c.rect(0, 0, W, 0.38*inch, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    c.setFont("Helvetica", 7)
    c.setFillColor(GRAY)
    footer = "FoxRidge Equity  |  foxridgeequity.com  |  Confidential — For Qualified Investors Only"
    fw = c.stringWidth(footer, "Helvetica", 7)
    c.drawString((W - fw) / 2, 0.14*inch, footer)

# ══════════════════════════════════════════════════════════════════════════════
# PAGE 2 — WHY THE WINDOW IS OPEN (dark bg, 6 force cards)
# ══════════════════════════════════════════════════════════════════════════════
def page_forces(c):
    # Full-bleed background image
    if os.path.exists(BG_MARKET):
        draw_full_bg(c, BG_MARKET, overlay_alpha=0.82, overlay_color="navy")
    else:
        c.setFillColor(NAVY)
        c.rect(0, 0, W, H, fill=1, stroke=0)

    # Header
    c.setFillColor(GOLD)
    c.rect(0, H - 0.08*inch, W, 0.08*inch, fill=1, stroke=0)
    c.setFillColor(DARKGRAY)
    c.rect(0, H - 0.65*inch, W, 0.57*inch, fill=1, stroke=0)
    draw_logo(c, 0.4*inch, H - 0.12*inch, w=1.1*inch)

    c.setFont("Helvetica-Bold", 20)
    c.setFillColor(WHITE)
    c.drawString(0.4*inch, H - 0.48*inch, "WHY THE ENTRY WINDOW IS OPEN")
    c.setFont("Helvetica", 10)
    c.setFillColor(GOLD)
    c.drawString(0.4*inch, H - 0.62*inch, "Six converging forces creating a rare trough-cycle opportunity")

    # 6 force cards in 2×3 grid
    forces = [
        ("01", "SUPPLY CLIFF", "#B8942A",
         "Peak deliveries (68K units) hit in 2024–25.\nProjected 2026 completions drop to ~15K.\nThe pipeline has dried up."),
        ("02", "AGENCY DEBT WALL", "#C85A1A",
         "$1.5T in multifamily debt matures 2024–27.\nDistressed sellers need exits.\nFoxRidge targets these off-market deals."),
        ("03", "DEMAND ENGINE", "#1E6E3A",
         "1,200+ net new residents arrive daily.\nJob growth: 3.2% YoY vs. 1.1% national avg.\nHousehold formation accelerating."),
        ("04", "RENTER LOCK-IN", "#1E4A6E",
         "Median home price: $385K in DFW.\n30-yr mortgage at 7%+ = $2,800/mo.\nRenting is $800–1,200/mo cheaper."),
        ("05", "MATURITY WALL", "#6E1E6E",
         "2,847 loans totaling $67B mature by 2026.\nBorrowers face refinancing at 2× original rate.\nForced sales create acquisition opportunities."),
        ("06", "RATE ENVIRONMENT", "#1E5E6E",
         "Fed pivot expected H2 2025–2026.\nCap rate expansion already priced in.\nBuying at peak cap rates = built-in upside."),
    ]

    card_w = (W - 0.6*inch) / 3
    # Cards fill from header bottom (H-0.75) to footer top (0.48), minus gap between rows
    card_h = (H - 0.75*inch - 0.48*inch - 0.10*inch) / 2
    start_x = 0.3*inch
    start_y = H - 0.75*inch

    for i, (num, title, accent_hex, desc) in enumerate(forces):
        col = i % 3
        row = i // 3
        cx = start_x + col * (card_w + 0.1*inch)
        cy = start_y - row * (card_h + 0.10*inch)

        accent = colors.HexColor(accent_hex)

        # Card background - semi-transparent so background image shows through
        c.setFillColor(DARKGRAY)
        c.setFillAlpha(0.88)
        c.roundRect(cx, cy - card_h, card_w, card_h, 6, fill=1, stroke=0)
        c.setFillAlpha(1.0)
        # Accent stroke border
        c.setStrokeColor(accent)
        c.setLineWidth(1.5)
        c.roundRect(cx, cy - card_h, card_w, card_h, 6, fill=0, stroke=1)

        # Accent top border
        c.setFillColor(accent)
        c.roundRect(cx, cy - 0.06*inch, card_w, 0.06*inch, 3, fill=1, stroke=0)

        # Number badge
        badge_size = 0.38*inch
        c.setFillColor(accent)
        c.circle(cx + card_w - 0.35*inch, cy - 0.35*inch, badge_size/2, fill=1, stroke=0)
        c.setFont("Helvetica-Bold", 11)
        c.setFillColor(WHITE)
        nw = c.stringWidth(num, "Helvetica-Bold", 11)
        c.drawString(cx + card_w - 0.35*inch - nw/2, cy - 0.35*inch - 0.04*inch, num)

        # Title
        c.setFont("Helvetica-Bold", 14)
        c.setFillColor(WHITE)
        c.drawString(cx + 0.18*inch, cy - 0.38*inch, title)

        # Gold divider
        c.setStrokeColor(accent)
        c.setLineWidth(1)
        c.line(cx + 0.18*inch, cy - 0.50*inch, cx + card_w - 0.18*inch, cy - 0.50*inch)

        # Description lines
        c.setFont("Helvetica", 10.5)
        c.setFillColor(OFFWHITE)
        desc_lines = desc.split("\n")
        dy = cy - 0.66*inch
        for dl in desc_lines:
            c.drawString(cx + 0.18*inch, dy, dl)
            dy -= 0.185*inch

        # Additional context paragraph
        extra_texts = {
            "SUPPLY CLIFF": "Nationally, multifamily starts have fallen 40%+ from peak. The Texas Triangle is seeing the sharpest correction of any major metro cluster in the country.",
            "AGENCY DEBT WALL": "Agency lenders (Fannie/Freddie) are tightening. Floating-rate borrowers face 200–300bps higher debt service. Many are forced sellers — not willing sellers.",
            "DEMAND ENGINE": "Texas added 562,000 net new residents in 2024 alone — more than any other state. The Triangle absorbs 70%+ of that inflow.",
            "RENTER LOCK-IN": "The rent-vs-own gap is the widest in 30 years. Even with rent growth, multifamily remains the affordable choice for 60%+ of Triangle households.",
            "MATURITY WALL": "Unlike 2008, this is a liquidity crisis, not a demand crisis. Assets are performing — owners just cannot refinance. FoxRidge steps in with cash.",
            "RATE ENVIRONMENT": "CME FedWatch shows 2–3 cuts priced in for 2025–26. Each 25bps cut adds ~3–5% to multifamily valuations at current cap rates.",
        }
        extra = extra_texts.get(title, "")
        if extra:
            c.setFont("Helvetica", 8.5)
            c.setFillColor(GRAY)
            extra_words = extra.split()
            extra_line = ""
            ey = dy - 0.12*inch
            max_ew = card_w - 0.36*inch
            for word in extra_words:
                test = (extra_line + " " + word).strip()
                if c.stringWidth(test, "Helvetica", 8.5) <= max_ew:
                    extra_line = test
                else:
                    c.drawString(cx + 0.18*inch, ey, extra_line)
                    ey -= 0.14*inch
                    extra_line = word
            if extra_line:
                c.drawString(cx + 0.18*inch, ey, extra_line)

        # Key stat + implication
        key_stats = {
            "SUPPLY CLIFF": ("−78%", "Pipeline drop 2024\u21922026", "FoxRidge opportunity: Buy before occupancy tightens"),
            "AGENCY DEBT WALL": ("$67B", "Maturing TX multifamily debt", "FoxRidge opportunity: Cash buyers win at distressed pricing"),
            "DEMAND ENGINE": ("562K", "Net new TX residents in 2024", "FoxRidge opportunity: Demand floor is structural, not cyclical"),
            "RENTER LOCK-IN": ("$800+", "Monthly savings vs. owning", "FoxRidge opportunity: Renting is rational for 60%+ of households"),
            "MATURITY WALL": ("2,847", "Loans maturing by 2026", "FoxRidge opportunity: Off-market deals at 15\u201325% below replacement cost"),
            "RATE ENVIRONMENT": ("2\u20133", "Fed cuts priced in 2025\u201326", "FoxRidge opportunity: Buy at peak cap rates, exit at compressed rates"),
        }
        if title in key_stats:
            ksv, ksl, impl = key_stats[title]
            # Divider
            ks_y = ey - 0.18*inch
            c.setStrokeColor(accent)
            c.setLineWidth(0.5)
            c.setStrokeAlpha(0.4)
            c.line(cx + 0.18*inch, ks_y + 0.05*inch, cx + card_w - 0.18*inch, ks_y + 0.05*inch)
            c.setStrokeAlpha(1.0)
            # Big stat
            c.setFont("Helvetica-Bold", 32)
            c.setFillColor(accent)
            c.drawString(cx + 0.18*inch, ks_y - 0.34*inch, ksv)
            c.setFont("Helvetica", 8)
            c.setFillColor(GRAY)
            c.drawString(cx + 0.18*inch, ks_y - 0.52*inch, ksl)
            # Implication
            c.setFont("Helvetica-Bold", 7.5)
            c.setFillColor(GOLD)
            c.drawString(cx + 0.18*inch, ks_y - 0.68*inch, "FOXRIDGE ANGLE:")
            c.setFont("Helvetica", 8)
            c.setFillColor(OFFWHITE)
            impl_words = impl.split()
            impl_line = ""
            imy = ks_y - 0.82*inch
            for iw in impl_words:
                test_i = (impl_line + " " + iw).strip()
                if c.stringWidth(test_i, "Helvetica", 8) <= max_ew:
                    impl_line = test_i
                else:
                    c.drawString(cx + 0.18*inch, imy, impl_line)
                    imy -= 0.13*inch
                    impl_line = iw
            if impl_line:
                c.drawString(cx + 0.18*inch, imy, impl_line)

    # Bottom summary strip
    strip_y = 0.48*inch
    strip_h = strip_y - 0.38*inch
    # Available space between cards bottom and footer
    cards_bottom = start_y - 2 * (card_h + 0.10*inch) - card_h
    avail_bottom = cards_bottom - 0.48*inch
    if avail_bottom > 0.30*inch:
        sb_y = cards_bottom - 0.10*inch
        sb_h = avail_bottom - 0.05*inch
        c.setFillColor(NAVY2)
        c.setFillAlpha(0.90)
        c.roundRect(0.3*inch, 0.48*inch, W - 0.6*inch, sb_h, 6, fill=1, stroke=0)
        c.setFillAlpha(1.0)
        c.setFillColor(GOLD)
        c.roundRect(0.3*inch, 0.48*inch + sb_h - 0.04*inch, W - 0.6*inch, 0.04*inch, 3, fill=1, stroke=0)
        # Summary text
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(WHITE)
        c.drawString(0.5*inch, 0.48*inch + sb_h - 0.22*inch,
            "BOTTOM LINE: All six forces are converging simultaneously — a once-in-a-decade setup for multifamily value-add investors.")
        c.setFont("Helvetica", 8)
        c.setFillColor(GOLD)
        c.drawString(0.5*inch, 0.48*inch + sb_h - 0.38*inch,
            "FoxRidge is positioned to acquire $200M+ in Texas Triangle assets during this window.")

    # Footer
    c.setFillColor(DARKGRAY)
    c.setFillAlpha(0.9)
    c.rect(0, 0, W, 0.38*inch, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    c.setFont("Helvetica", 7)
    c.setFillColor(GRAY)
    footer = "FoxRidge Equity  |  foxridgeequity.com  |  Page 2 of 7"
    fw = c.stringWidth(footer, "Helvetica", 7)
    c.drawString((W - fw) / 2, 0.14*inch, footer)

# ══════════════════════════════════════════════════════════════════════════════
# PAGE 3 — SUPPLY CLIFF (construction bg, dark overlay, data-heavy)
# ══════════════════════════════════════════════════════════════════════════════
def page_supply(c):
    draw_full_bg(c, BG_SUPPLY, overlay_alpha=0.78, overlay_color="dark")

    # Header
    c.setFillColor(GOLD)
    c.rect(0, H - 0.08*inch, W, 0.08*inch, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#0D1F3C"))
    c.setFillAlpha(0.90)
    c.rect(0, H - 0.65*inch, W, 0.57*inch, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    draw_logo(c, 0.4*inch, H - 0.12*inch, w=1.1*inch)
    c.setFont("Helvetica-Bold", 20)
    c.setFillColor(WHITE)
    c.drawString(0.4*inch, H - 0.48*inch, "HOW OVERBUILDING BECOMES OPPORTUNITY")
    c.setFont("Helvetica", 10)
    c.setFillColor(GOLD)
    c.drawString(0.4*inch, H - 0.62*inch, "The supply cliff is already happening — and demand hasn't slowed")

    # ── Big visual bar chart (hand-drawn with ReportLab) ──
    chart_x = 0.4*inch
    chart_y = H - 0.85*inch
    chart_w = W - 0.8*inch
    chart_h = 2.8*inch

    # Chart background
    c.setFillColor(colors.HexColor("#0A1828"))
    c.setFillAlpha(0.85)
    c.roundRect(chart_x, chart_y - chart_h, chart_w, chart_h, 6, fill=1, stroke=0)
    c.setFillAlpha(1.0)

    # Chart title
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(WHITE)
    c.drawString(chart_x + 0.2*inch, chart_y - 0.22*inch, "Texas Triangle Multifamily Completions (Units, 000s)")

    # Data: year, units (thousands), is_peak
    data = [
        ("2020", 32, False), ("2021", 38, False), ("2022", 45, False),
        ("2023", 58, False), ("2024", 68, True),  ("2025", 62, True),
        ("2026", 15, False), ("2027", 12, False),
    ]
    max_val = 68
    bar_area_x = chart_x + 0.55*inch
    bar_area_y = chart_y - chart_h + 0.4*inch
    bar_area_w = chart_w - 0.75*inch
    bar_area_h = chart_h - 0.65*inch
    n = len(data)
    bar_w = bar_area_w / n * 0.65
    gap = bar_area_w / n

    for i, (year, val, is_peak) in enumerate(data):
        bx = bar_area_x + i * gap + (gap - bar_w) / 2
        bh = (val / max_val) * bar_area_h
        by = bar_area_y

        if is_peak:
            c.setFillColor(ORANGE)
        elif year in ("2026", "2027"):
            c.setFillColor(GOLD)
        else:
            c.setFillColor(LIGHTNAVY)

        c.roundRect(bx, by, bar_w, bh, 2, fill=1, stroke=0)

        # Value label on top
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(WHITE)
        vstr = f"{val}K"
        vw = c.stringWidth(vstr, "Helvetica-Bold", 9)
        c.drawString(bx + (bar_w - vw)/2, by + bh + 0.05*inch, vstr)

        # Year label below
        c.setFont("Helvetica", 8)
        c.setFillColor(GRAY)
        yw = c.stringWidth(year, "Helvetica", 8)
        c.drawString(bx + (bar_w - yw)/2, bar_area_y - 0.18*inch, year)

    # Legend
    legend_y = chart_y - chart_h + 0.22*inch
    items = [("PEAK SUPPLY", ORANGE), ("PROJECTED TROUGH", GOLD), ("HISTORICAL", LIGHTNAVY)]
    lx = bar_area_x
    for lbl, col in items:
        c.setFillColor(col)
        c.roundRect(lx, legend_y, 0.12*inch, 0.10*inch, 2, fill=1, stroke=0)
        c.setFont("Helvetica", 7)
        c.setFillColor(GRAY)
        c.drawString(lx + 0.16*inch, legend_y + 0.01*inch, lbl)
        lx += 1.5*inch

    # Arrow annotation for cliff
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.5)
    c.setDash([3, 3])
    cliff_x = bar_area_x + 5 * gap + gap/2
    c.line(cliff_x, bar_area_y + bar_area_h * 0.95, cliff_x + 0.8*inch, bar_area_y + bar_area_h * 0.95)
    c.setDash([])
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(GOLD)
    c.drawString(cliff_x + 0.85*inch, bar_area_y + bar_area_h * 0.93, "← SUPPLY CLIFF")

    # ── Metro table ──
    table_y = chart_y - chart_h - 0.25*inch
    table_w = W - 0.8*inch
    table_x = 0.4*inch

    headers = ["METRO", "2024 DELIVERIES", "2026 PROJECTED", "CHANGE", "VACANCY", "RENT GROWTH"]
    col_widths = [1.2*inch, 1.1*inch, 1.1*inch, 0.8*inch, 0.8*inch, 1.0*inch]
    row_h = 0.30*inch

    # Header row
    c.setFillColor(NAVY2)
    c.rect(table_x, table_y - row_h, table_w, row_h, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(GOLD)
    hx = table_x + 0.1*inch
    for h_txt, cw in zip(headers, col_widths):
        c.drawString(hx, table_y - row_h + 0.10*inch, h_txt)
        hx += cw

    rows = [
        ("Dallas–FW",  "24,200", "5,800",  "−76%", "6.8%", "+3.2%"),
        ("Houston",    "22,100", "4,200",  "−81%", "7.1%", "+2.8%"),
        ("San Antonio","12,400", "2,900",  "−77%", "6.2%", "+4.1%"),
        ("Austin",     " 9,300", "2,100",  "−77%", "8.4%", "+1.9%"),
    ]
    for r_idx, row in enumerate(rows):
        ry = table_y - row_h * (r_idx + 2)
        bg = colors.HexColor("#0A1828") if r_idx % 2 == 0 else colors.HexColor("#0D2035")
        c.setFillColor(bg)
        c.setFillAlpha(0.85)
        c.rect(table_x, ry, table_w, row_h, fill=1, stroke=0)
        c.setFillAlpha(1.0)
        rx = table_x + 0.1*inch
        for c_idx, (cell, cw) in enumerate(zip(row, col_widths)):
            c.setFont("Helvetica-Bold" if c_idx == 0 else "Helvetica", 9)
            if c_idx == 3:  # Change column — highlight in gold
                c.setFillColor(GOLD)
            elif c_idx == 0:
                c.setFillColor(WHITE)
            else:
                c.setFillColor(OFFWHITE)
            c.drawString(rx, ry + 0.09*inch, cell)
            rx += cw

    # ── Callout box ──
    callout_y = table_y - row_h * 5 - 0.2*inch
    callout_h = 0.85*inch
    c.setFillColor(GOLD)
    c.setFillAlpha(0.15)
    c.roundRect(table_x, callout_y - callout_h, table_w, callout_h, 6, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.5)
    c.roundRect(table_x, callout_y - callout_h, table_w, callout_h, 6, fill=0, stroke=1)
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(GOLD)
    c.drawString(table_x + 0.2*inch, callout_y - 0.20*inch, "THE WINDOW:")
    c.setFont("Helvetica", 10)
    c.setFillColor(WHITE)
    c.drawString(table_x + 0.2*inch, callout_y - 0.38*inch,
                 "2026\u20132027 represents the lowest new supply in 6 years \u2014 while 1,200 people move to Texas every single day.")
    c.drawString(table_x + 0.2*inch, callout_y - 0.54*inch,
                 "Occupancy will tighten. Rents will rise. Buyers who enter now capture the full recovery.")
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(GOLD2)
    c.drawString(table_x + 0.2*inch, callout_y - 0.70*inch,
                 "Historical precedent: After the 2010 supply trough, Triangle rents grew 18% in 24 months.")

    # ── 3-stat mini bar below callout ──
    mini_y = callout_y - callout_h - 0.20*inch
    mini_h = 0.90*inch
    mini_stats = [
        ("40%", "Drop in national\nmultifamily starts", "2023\u20132025"),
        ("91%", "Occupancy floor\nin 2009 recession", "Texas Triangle"),
        ("18%", "Rent growth after\n2010 supply trough", "24-month period"),
    ]
    mini_w = (table_w - 0.4*inch) / 3
    for m_idx, (mv, ml, ms) in enumerate(mini_stats):
        mx2 = table_x + 0.2*inch + m_idx * (mini_w + 0.1*inch)
        c.setFillColor(DARKGRAY)
        c.setFillAlpha(0.88)
        c.roundRect(mx2, mini_y - mini_h, mini_w, mini_h, 5, fill=1, stroke=0)
        c.setFillAlpha(1.0)
        c.setFillColor(GOLD)
        c.rect(mx2, mini_y, mini_w, 0.04*inch, fill=1, stroke=0)
        c.setFont("Helvetica-Bold", 28)
        c.setFillColor(GOLD2)
        mvw = c.stringWidth(mv, "Helvetica-Bold", 28)
        c.drawString(mx2 + (mini_w - mvw)/2, mini_y - mini_h * 0.42, mv)
        c.setFont("Helvetica-Bold", 7)
        c.setFillColor(WHITE)
        for l_idx, line in enumerate(ml.split("\n")):
            lw2 = c.stringWidth(line, "Helvetica-Bold", 7)
            c.drawString(mx2 + (mini_w - lw2)/2, mini_y - mini_h * 0.65 - l_idx * 0.12*inch, line)
        c.setFont("Helvetica", 6)
        c.setFillColor(GRAY)
        sw2 = c.stringWidth(ms, "Helvetica", 6)
        c.drawString(mx2 + (mini_w - sw2)/2, mini_y - mini_h * 0.88, ms)

    # Footer
    c.setFillColor(colors.HexColor("#0A1828"))
    c.setFillAlpha(0.9)
    c.rect(0, 0, W, 0.38*inch, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    c.setFont("Helvetica", 7)
    c.setFillColor(GRAY)
    footer = "FoxRidge Equity  |  foxridgeequity.com  |  Page 3 of 7  |  Sources: CoStar, CBRE, Marcus & Millichap 2025"
    fw = c.stringWidth(footer, "Helvetica", 7)
    c.drawString((W - fw) / 2, 0.14*inch, footer)

# ══════════════════════════════════════════════════════════════════════════════
# PAGE 4 — FOUR METRO MARKETS (property bg)
# ══════════════════════════════════════════════════════════════════════════════
def page_markets(c):
    draw_full_bg(c, BG_MARKET, overlay_alpha=0.82, overlay_color="navy")

    # Header
    c.setFillColor(GOLD)
    c.rect(0, H - 0.08*inch, W, 0.08*inch, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.setFillAlpha(0.92)
    c.rect(0, H - 0.65*inch, W, 0.57*inch, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    draw_logo(c, 0.4*inch, H - 0.12*inch, w=1.1*inch)
    c.setFont("Helvetica-Bold", 20)
    c.setFillColor(WHITE)
    c.drawString(0.4*inch, H - 0.48*inch, "FOUR ECOSYSTEMS, FOUR ENTRY POINTS")
    c.setFont("Helvetica", 10)
    c.setFillColor(GOLD)
    c.drawString(0.4*inch, H - 0.62*inch, "Each metro offers a distinct risk/return profile — FoxRidge is active in all four")

    metros = [
        {
            "city": "DALLAS–FORT WORTH",
            "tag": "HIGHEST VOLUME",
            "tag_color": "#C85A1A",
            "stats": [("24.2M sf", "2024 Deliveries"), ("5,800", "2026 Proj."), ("6.8%", "Vacancy"), ("+3.2%", "Rent Growth")],
            "verdict": "Largest pipeline absorption in the nation. Class B value-add in suburban submarkets.",
            "why": "Fortune 500 HQ magnet. 150K+ jobs added in 2024. DFW is the #1 relocation destination.",
        },
        {
            "city": "HOUSTON",
            "tag": "ENERGY ECONOMY",
            "tag_color": "#1E6E3A",
            "stats": [("22.1K", "2024 Deliveries"), ("4,200", "2026 Proj."), ("7.1%", "Vacancy"), ("+2.8%", "Rent Growth")],
            "verdict": "Energy sector driving white-collar demand. Medical Center expansion = 100K+ jobs.",
            "why": "Largest U.S. port. Diverse economy. Workforce housing demand structurally undersupplied.",
        },
        {
            "city": "SAN ANTONIO",
            "tag": "BEST ENTRY PRICE",
            "tag_color": "#B8942A",
            "stats": [("12.4K", "2024 Deliveries"), ("2,900", "2026 Proj."), ("6.2%", "Vacancy"), ("+4.1%", "Rent Growth")],
            "verdict": "Lowest acquisition cost per door in the Triangle. Military + healthcare = stable demand.",
            "why": "5 military bases. UT Health Science Center. Toyota, Valero HQs. Fastest rent growth in TX.",
        },
        {
            "city": "AUSTIN",
            "tag": "TECH CORRECTION PLAY",
            "tag_color": "#1E4A6E",
            "stats": [("9,300", "2024 Deliveries"), ("2,100", "2026 Proj."), ("8.4%", "Vacancy"), ("+1.9%", "Rent Growth")],
            "verdict": "Oversupplied now — but tech sector stabilizing. 2026–27 trough entry = maximum upside.",
            "why": "Tesla, Apple, Google, Meta all expanding. UT Austin = 50K students. Long-term demand intact.",
        },
    ]

    card_w = (W - 0.5*inch) / 2 - 0.05*inch
    # Cards fill from header bottom (H-0.75) to footer top (0.48), minus gap between rows
    card_h = (H - 0.75*inch - 0.48*inch - 0.10*inch) / 2
    positions = [
        (0.25*inch, H - 0.75*inch),
        (0.25*inch + card_w + 0.1*inch, H - 0.75*inch),
        (0.25*inch, H - 0.75*inch - card_h - 0.10*inch),
        (0.25*inch + card_w + 0.1*inch, H - 0.75*inch - card_h - 0.10*inch),
    ]

    for metro, (mx, my) in zip(metros, positions):
        # Card bg
        c.setFillColor(NAVY)
        c.setFillAlpha(0.90)
        c.roundRect(mx, my - card_h, card_w, card_h, 6, fill=1, stroke=0)
        c.setFillAlpha(1.0)

        # Tag badge
        tag_color = colors.HexColor(metro["tag_color"])
        c.setFillColor(tag_color)
        tag_w = c.stringWidth(metro["tag"], "Helvetica-Bold", 7) + 0.16*inch
        c.roundRect(mx + card_w - tag_w - 0.1*inch, my - 0.28*inch, tag_w, 0.20*inch, 3, fill=1, stroke=0)
        c.setFont("Helvetica-Bold", 7)
        c.setFillColor(WHITE)
        c.drawString(mx + card_w - tag_w - 0.02*inch, my - 0.22*inch, metro["tag"])

        # City name
        c.setFont("Helvetica-Bold", 14)
        c.setFillColor(WHITE)
        c.drawString(mx + 0.18*inch, my - 0.26*inch, metro["city"])

        # Gold line
        draw_gold_line(c, mx + 0.18*inch, my - 0.36*inch, card_w - 0.36*inch, 1.5)

        # Stats row (4 mini stats)
        stat_w = (card_w - 0.36*inch) / 4
        for s_idx, (val, lbl) in enumerate(metro["stats"]):
            sx = mx + 0.18*inch + s_idx * stat_w
            c.setFont("Helvetica-Bold", 14)
            c.setFillColor(GOLD2)
            c.drawString(sx, my - 0.58*inch, val)
            c.setFont("Helvetica", 7)
            c.setFillColor(GRAY)
            c.drawString(sx, my - 0.72*inch, lbl)

        # Divider
        c.setStrokeColor(LIGHTNAVY)
        c.setLineWidth(0.5)
        c.line(mx + 0.18*inch, my - 0.80*inch, mx + card_w - 0.18*inch, my - 0.80*inch)

        # Verdict
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(OFFWHITE)
        verdict_y = my - 0.94*inch
        verdict_lines = []
        words = metro["verdict"].split()
        line = ""
        max_w = card_w - 0.36*inch
        for word in words:
            test = (line + " " + word).strip()
            if c.stringWidth(test, "Helvetica-Bold", 8) <= max_w:
                line = test
            else:
                verdict_lines.append(line)
                line = word
        if line:
            verdict_lines.append(line)
        for vl in verdict_lines:
            c.drawString(mx + 0.18*inch, verdict_y, vl)
            verdict_y -= 0.14*inch

        # Why label
        c.setFont("Helvetica-Bold", 7)
        c.setFillColor(GOLD)
        c.drawString(mx + 0.18*inch, verdict_y - 0.05*inch, "WHY FOXRIDGE IS HERE:")
        why_y = verdict_y - 0.18*inch
        c.setFont("Helvetica", 8)
        c.setFillColor(OFFWHITE)
        why_lines = []
        words = metro["why"].split()
        line = ""
        for word in words:
            test = (line + " " + word).strip()
            if c.stringWidth(test, "Helvetica", 8) <= max_w:
                line = test
            else:
                why_lines.append(line)
                line = word
        if line:
            why_lines.append(line)
        for wl in why_lines[:3]:
            c.drawString(mx + 0.18*inch, why_y, wl)
            why_y -= 0.13*inch

        # Key data point
        key_data = {
            "DALLAS–FORT WORTH": (
                ("$145K", "Avg. cost/door"), ("+3.2%", "Rent growth YoY"), ("94%", "Avg. occupancy"),
                "Top Submarkets: Frisco, McKinney, Plano, Irving",
                "FoxRidge Focus: Class B garden-style, 150–300 units, 1990s–2005 vintage",
                [("2022", 3.8), ("2023", 2.1), ("2024", 3.2), ("2025E", 4.1), ("2026E", 5.2)]
            ),
            "HOUSTON": (
                ("$128K", "Avg. cost/door"), ("+2.8%", "Rent growth YoY"), ("93%", "Avg. occupancy"),
                "Top Submarkets: Katy, Sugar Land, The Woodlands, Pearland",
                "FoxRidge Focus: Energy corridor workforce housing, 200–400 units",
                [("2022", 4.2), ("2023", 1.8), ("2024", 2.8), ("2025E", 3.5), ("2026E", 4.8)]
            ),
            "SAN ANTONIO": (
                ("$112K", "Avg. cost/door"), ("+4.1%", "Rent growth YoY"), ("94%", "Avg. occupancy"),
                "Top Submarkets: Stone Oak, Alamo Ranch, Medical Center",
                "FoxRidge Focus: Military-adjacent workforce housing, 100–250 units",
                [("2022", 5.1), ("2023", 2.9), ("2024", 4.1), ("2025E", 5.0), ("2026E", 6.1)]
            ),
            "AUSTIN": (
                ("$165K", "Avg. cost/door"), ("+1.9%", "Rent growth YoY"), ("91%", "Avg. occupancy"),
                "Top Submarkets: Round Rock, Cedar Park, Pflugerville, Kyle",
                "FoxRidge Focus: Tech-adjacent Class B, buying at peak vacancy for max upside",
                [("2022", 8.1), ("2023", 0.5), ("2024", 1.9), ("2025E", 3.2), ("2026E", 5.5)]
            ),
        }
        city_key = metro["city"]
        if city_key in key_data:
            kd = key_data[city_key]
            k_stats, submarket_txt, focus_txt, rent_trend = kd[0], kd[3], kd[4], kd[5]

            # 3 mini stats in a row
            kdata_y = why_y - 0.15*inch
            mini_stat_w = (card_w - 0.36*inch) / 3
            for ks_idx, (ksv, ksl) in enumerate(kd[:3]):
                ksx = mx + 0.18*inch + ks_idx * mini_stat_w
                c.setFont("Helvetica-Bold", 14)
                c.setFillColor(GOLD2)
                c.drawString(ksx, kdata_y, ksv)
                c.setFont("Helvetica", 7)
                c.setFillColor(GRAY)
                c.drawString(ksx, kdata_y - 0.14*inch, ksl)

            # Submarket line
            sub_y = kdata_y - 0.32*inch
            c.setFont("Helvetica-Bold", 7)
            c.setFillColor(GOLD)
            c.drawString(mx + 0.18*inch, sub_y, "TOP SUBMARKETS:")
            c.setFont("Helvetica", 7.5)
            c.setFillColor(OFFWHITE)
            c.drawString(mx + 0.18*inch, sub_y - 0.13*inch, submarket_txt)

            # Focus line
            focus_y = sub_y - 0.30*inch
            c.setFont("Helvetica-Bold", 7)
            c.setFillColor(GOLD)
            c.drawString(mx + 0.18*inch, focus_y, "FOXRIDGE FOCUS:")
            c.setFont("Helvetica", 7.5)
            c.setFillColor(OFFWHITE)
            focus_words2 = focus_txt.split()
            focus_line2 = ""
            fy2 = focus_y - 0.13*inch
            for fw2 in focus_words2:
                test2 = (focus_line2 + " " + fw2).strip()
                if c.stringWidth(test2, "Helvetica", 7.5) <= card_w - 0.36*inch:
                    focus_line2 = test2
                else:
                    c.drawString(mx + 0.18*inch, fy2, focus_line2)
                    fy2 -= 0.12*inch
                    focus_line2 = fw2
            if focus_line2:
                c.drawString(mx + 0.18*inch, fy2, focus_line2)

            # Mini sparkline rent trend chart
            spark_y = fy2 - 0.20*inch
            spark_h = 0.55*inch
            spark_w = card_w - 0.36*inch
            c.setFillColor(colors.HexColor("#0A1828"))
            c.setFillAlpha(0.7)
            c.roundRect(mx + 0.18*inch, spark_y - spark_h, spark_w, spark_h, 3, fill=1, stroke=0)
            c.setFillAlpha(1.0)
            c.setFont("Helvetica-Bold", 6)
            c.setFillColor(GOLD)
            c.drawString(mx + 0.18*inch, spark_y - 0.10*inch, "RENT GROWTH TREND (%)")
            max_rv = max(v for _, v in rent_trend)
            bar_area_x2 = mx + 0.18*inch + 0.05*inch
            bar_area_w2 = spark_w - 0.10*inch
            bar_area_h2 = spark_h - 0.25*inch
            bar_area_y2 = spark_y - spark_h + 0.12*inch
            nb2 = len(rent_trend)
            bw2 = bar_area_w2 / nb2 * 0.65
            gp2 = bar_area_w2 / nb2
            for bi2, (yr2, rv2) in enumerate(rent_trend):
                bx2 = bar_area_x2 + bi2 * gp2 + (gp2 - bw2) / 2
                bh2 = max(0.02*inch, (rv2 / max_rv) * bar_area_h2)
                c.setFillColor(GOLD if yr2.endswith("E") else LIGHTNAVY)
                c.roundRect(bx2, bar_area_y2, bw2, bh2, 1, fill=1, stroke=0)
                c.setFont("Helvetica", 5)
                c.setFillColor(GRAY)
                yw2 = c.stringWidth(yr2, "Helvetica", 5)
                c.drawString(bx2 + (bw2 - yw2)/2, bar_area_y2 - 0.09*inch, yr2)

    # Footer
    c.setFillColor(NAVY)
    c.setFillAlpha(0.92)
    c.rect(0, 0, W, 0.38*inch, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    c.setFont("Helvetica", 7)
    c.setFillColor(GRAY)
    footer = "FoxRidge Equity  |  foxridgeequity.com  |  Page 4 of 7"
    fw = c.stringWidth(footer, "Helvetica", 7)
    c.drawString((W - fw) / 2, 0.14*inch, footer)

# ══════════════════════════════════════════════════════════════════════════════
# PAGE 5 — RETURNS & STRUCTURE (finance bg)
# ══════════════════════════════════════════════════════════════════════════════
def page_returns(c):
    draw_full_bg(c, BG_RETURNS, overlay_alpha=0.82, overlay_color="navy")

    # Header
    c.setFillColor(GOLD)
    c.rect(0, H - 0.08*inch, W, 0.08*inch, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.setFillAlpha(0.92)
    c.rect(0, H - 0.65*inch, W, 0.57*inch, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    draw_logo(c, 0.4*inch, H - 0.12*inch, w=1.1*inch)
    c.setFont("Helvetica-Bold", 20)
    c.setFillColor(WHITE)
    c.drawString(0.4*inch, H - 0.48*inch, "TROUGH-CYCLE ENTRY: THE MATH")
    c.setFont("Helvetica", 10)
    c.setFillColor(GOLD)
    c.drawString(0.4*inch, H - 0.62*inch, "Why buying at peak cap rates creates structural return advantage")

    # ── 3 big return stats ──
    stat_y = H - 0.85*inch
    stat_h = 1.10*inch
    stat_w = (W - 0.6*inch) / 3
    big_stats = [
        ("18–22%", "TARGET IRR", "Base Case"),
        ("1.7–2.1×", "EQUITY MULTIPLE", "5-Year Hold"),
        ("7–9%", "PREF. RETURN", "Annual Cash-on-Cash"),
    ]
    for i, (num, lbl, sub) in enumerate(big_stats):
        sx = 0.3*inch + i * stat_w
        c.setFillColor(DARKGRAY)
        c.setFillAlpha(0.90)
        c.roundRect(sx, stat_y - stat_h, stat_w - 0.1*inch, stat_h, 6, fill=1, stroke=0)
        c.setFillAlpha(1.0)
        c.setFillColor(GOLD)
        c.rect(sx, stat_y, stat_w - 0.1*inch, 0.05*inch, fill=1, stroke=0)
        draw_stat_block(c, sx, stat_y, stat_w - 0.1*inch, stat_h, num, lbl, sub)

    # ── Returns comparison table ──
    tbl_y = stat_y - stat_h - 0.25*inch
    tbl_x = 0.3*inch
    tbl_w = W - 0.6*inch
    row_h = 0.30*inch

    headers = ["SCENARIO", "ENTRY CAP RATE", "EXIT CAP RATE", "HOLD PERIOD", "IRR", "EQUITY MULT."]
    col_ws = [1.3*inch, 1.1*inch, 1.1*inch, 1.0*inch, 0.8*inch, 1.0*inch]

    c.setFillColor(NAVY2)
    c.rect(tbl_x, tbl_y - row_h, tbl_w, row_h, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(GOLD)
    hx = tbl_x + 0.1*inch
    for h_txt, cw in zip(headers, col_ws):
        c.drawString(hx, tbl_y - row_h + 0.10*inch, h_txt)
        hx += cw

    rows = [
        ("Base Case",     "6.5%", "5.8%", "5 years", "18.4%", "1.82×"),
        ("Upside Case",   "6.5%", "5.2%", "5 years", "22.1%", "2.10×"),
        ("Conservative",  "6.5%", "6.2%", "7 years", "14.8%", "1.68×"),
        ("Stress Test",   "6.5%", "6.8%", "7 years", "11.2%", "1.44×"),
    ]
    row_colors = [
        colors.HexColor("#0A1828"),
        colors.HexColor("#1A2A3A"),
        colors.HexColor("#0A1828"),
        colors.HexColor("#0D1F2E"),
    ]
    highlight_rows = {0, 1}  # Base and Upside highlighted

    for r_idx, (row, bg) in enumerate(zip(rows, row_colors)):
        ry = tbl_y - row_h * (r_idx + 2)
        c.setFillColor(bg)
        c.setFillAlpha(0.88)
        c.rect(tbl_x, ry, tbl_w, row_h, fill=1, stroke=0)
        c.setFillAlpha(1.0)
        if r_idx in highlight_rows:
            c.setStrokeColor(GOLD)
            c.setLineWidth(0.5)
            c.setStrokeAlpha(0.4)
            c.rect(tbl_x, ry, tbl_w, row_h, fill=0, stroke=1)
            c.setStrokeAlpha(1.0)
        rx = tbl_x + 0.1*inch
        for c_idx, (cell, cw) in enumerate(zip(row, col_ws)):
            if c_idx == 0:
                c.setFont("Helvetica-Bold", 9)
                c.setFillColor(WHITE)
            elif c_idx in (4, 5) and r_idx in highlight_rows:
                c.setFont("Helvetica-Bold", 9)
                c.setFillColor(GOLD)
            else:
                c.setFont("Helvetica", 9)
                c.setFillColor(OFFWHITE)
            c.drawString(rx, ry + 0.09*inch, cell)
            rx += cw

    # ── Investment terms grid ──
    terms_y = tbl_y - row_h * 6 - 0.25*inch
    terms_h = 1.60*inch
    c.setFillColor(DARKGRAY)
    c.setFillAlpha(0.88)
    c.roundRect(tbl_x, terms_y - terms_h, tbl_w, terms_h, 6, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    c.setFillColor(GOLD)
    c.roundRect(tbl_x, terms_y, tbl_w, 0.05*inch, 3, fill=1, stroke=0)

    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(WHITE)
    c.drawString(tbl_x + 0.2*inch, terms_y - 0.22*inch, "STANDARD INVESTMENT TERMS")

    terms = [
        ("Minimum Investment", "$100,000"),
        ("Preferred Return", "7% per annum"),
        ("Profit Split (after pref)", "70% LP / 30% GP"),
        ("Hold Period", "4–7 years"),
        ("Structure", "506(c) Reg D  |  Accredited Investors Only"),
        ("Distributions", "Quarterly (after stabilization)"),
    ]
    col1_x = tbl_x + 0.2*inch
    col2_x = tbl_x + tbl_w / 2 + 0.1*inch
    t_row_h = 0.22*inch
    ty = terms_y - 0.42*inch
    for t_idx, (lbl, val) in enumerate(terms):
        col_x = col1_x if t_idx % 2 == 0 else col2_x
        if t_idx % 2 == 0 and t_idx > 0:
            ty -= t_row_h
        c.setFont("Helvetica", 8)
        c.setFillColor(GRAY)
        c.drawString(col_x, ty, lbl + ":")
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(WHITE)
        c.drawString(col_x, ty - 0.14*inch, val)

    # ── Value creation strategy section ──
    strat_y = terms_y - terms_h - 0.20*inch
    strat_h = 1.30*inch
    strat_w = W - 0.6*inch
    strat_x = 0.3*inch

    c.setFillColor(NAVY2)
    c.setFillAlpha(0.85)
    c.roundRect(strat_x, strat_y - strat_h, strat_w, strat_h, 6, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    c.setFillColor(GOLD)
    c.roundRect(strat_x, strat_y, strat_w, 0.04*inch, 3, fill=1, stroke=0)

    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(WHITE)
    c.drawString(strat_x + 0.2*inch, strat_y - 0.22*inch, "THE FOXRIDGE VALUE CREATION PLAYBOOK")

    pillars = [
        ("ACQUIRE", "Off-market deals at\n6.0\u20136.5% cap rates", "#B8942A"),
        ("RENOVATE", "$8K\u201312K/unit\ninterior upgrades", "#C85A1A"),
        ("OPTIMIZE", "AI-driven PM\ncuts OpEx 12\u201318%", "#1E6E3A"),
        ("STABILIZE", "94%+ occupancy\nin 12\u201318 months", "#1E4A6E"),
        ("EXIT", "Institutional sale\nat 5.0\u20135.5% cap", "#6E1E6E"),
    ]
    p_w = (strat_w - 0.4*inch) / len(pillars)
    for p_idx, (pname, pdesc, pcolor) in enumerate(pillars):
        px2 = strat_x + 0.2*inch + p_idx * p_w
        pc = colors.HexColor(pcolor)
        # Arrow connector
        if p_idx > 0:
            c.setFillColor(GOLD)
            c.setFillAlpha(0.5)
            c.drawString(px2 - 0.12*inch, strat_y - 0.55*inch, "\u25b6")
            c.setFillAlpha(1.0)
        c.setFillColor(pc)
        c.setFillAlpha(0.20)
        c.roundRect(px2, strat_y - strat_h + 0.15*inch, p_w - 0.08*inch, strat_h - 0.45*inch, 4, fill=1, stroke=0)
        c.setFillAlpha(1.0)
        c.setStrokeColor(pc)
        c.setLineWidth(1)
        c.roundRect(px2, strat_y - strat_h + 0.15*inch, p_w - 0.08*inch, strat_h - 0.45*inch, 4, fill=0, stroke=1)
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(WHITE)
        pw2 = c.stringWidth(pname, "Helvetica-Bold", 9)
        c.drawString(px2 + (p_w - 0.08*inch - pw2)/2, strat_y - 0.48*inch, pname)
        c.setFont("Helvetica", 7)
        c.setFillColor(OFFWHITE)
        for dl_idx, dl in enumerate(pdesc.split("\n")):
            dlw = c.stringWidth(dl, "Helvetica", 7)
            c.drawString(px2 + (p_w - 0.08*inch - dlw)/2, strat_y - 0.66*inch - dl_idx * 0.12*inch, dl)

    # Footer
    c.setFillColor(NAVY)
    c.setFillAlpha(0.92)
    c.rect(0, 0, W, 0.38*inch, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    c.setFont("Helvetica", 7)
    c.setFillColor(GRAY)
    footer = "FoxRidge Equity  |  foxridgeequity.com  |  Page 5 of 7  |  Returns are projections, not guarantees."
    fw = c.stringWidth(footer, "Helvetica", 7)
    c.drawString((W - fw) / 2, 0.14*inch, footer)

# ══════════════════════════════════════════════════════════════════════════════
# PAGE 6 — RISK MITIGATION
# ══════════════════════════════════════════════════════════════════════════════
def page_risks(c):
    # Full-bleed background
    if os.path.exists(BG_RETURNS):
        draw_full_bg(c, BG_RETURNS, overlay_alpha=0.80, overlay_color="navy")
    else:
        c.setFillColor(DARKGRAY)
        c.rect(0, 0, W, H, fill=1, stroke=0)

    # Header
    c.setFillColor(GOLD)
    c.rect(0, H - 0.08*inch, W, 0.08*inch, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.rect(0, H - 0.65*inch, W, 0.57*inch, fill=1, stroke=0)
    draw_logo(c, 0.4*inch, H - 0.12*inch, w=1.1*inch)
    c.setFont("Helvetica-Bold", 20)
    c.setFillColor(WHITE)
    c.drawString(0.4*inch, H - 0.48*inch, "WHAT COULD GO WRONG — AND HOW WE MITIGATE IT")
    c.setFont("Helvetica", 10)
    c.setFillColor(GOLD)
    c.drawString(0.4*inch, H - 0.62*inch, "Every risk has a FoxRidge answer")

    risks = [
        ("HIGH", "#C85A1A", "EXTENDED RATE ENVIRONMENT",
         "Fed keeps rates elevated through 2027, compressing exit multiples.",
         "Conservative underwriting assumes 6.2–6.5% exit cap rates. Stress-tested at 7%+. Preferred return structure protects LP capital first."),
        ("HIGH", "#C85A1A", "DEMAND SOFTENING",
         "Recession or job losses reduce renter demand in Texas metros.",
         "Texas has no state income tax, diversified economy, and military/healthcare anchors. Historical occupancy floor: 91% even in 2009."),
        ("MED", "#B8942A", "ADDITIONAL SUPPLY SURPRISE",
         "Developers restart pipelines faster than expected, delaying rent recovery.",
         "Construction financing remains constrained. 24-month lead time means 2026–27 supply is already determined. We track 100% of permitted projects."),
        ("MED", "#B8942A", "EXECUTION RISK",
         "Value-add renovation takes longer or costs more than projected.",
         "FoxRidge has completed 7,000+ units of renovation. Fixed-price contracts, in-house PM, and 15% contingency reserves on every deal."),
        ("LOW", "#1E6E3A", "REGULATORY CHANGES",
         "Texas implements rent control or changes landlord-tenant laws.",
         "Texas is constitutionally prohibited from rent control. Landlord-friendly courts. No meaningful regulatory risk horizon."),
    ]

    card_w = W - 0.6*inch
    # 5 cards + callout fill from H-0.80 to 0.48 footer
    # Available height: H - 0.80 - 0.48 = H - 1.28
    # 5 cards + 1 callout + 6 gaps
    available_h = H - 0.80*inch - 0.48*inch
    callout_h_alloc = 0.90*inch
    gap = 0.08*inch
    card_h = (available_h - callout_h_alloc - 6 * gap) / 5
    start_y = H - 0.80*inch
    cx = 0.3*inch

    for i, (level, level_color, title, risk_desc, mitigation) in enumerate(risks):
        cy = start_y - i * (card_h + gap)
        lc = colors.HexColor(level_color)

        # Card bg
        c.setFillColor(NAVY)
        c.setFillAlpha(0.75)
        c.roundRect(cx, cy - card_h, card_w, card_h, 5, fill=1, stroke=0)
        c.setFillAlpha(1.0)

        # Left accent bar
        c.setFillColor(lc)
        c.roundRect(cx, cy - card_h, 0.06*inch, card_h, 3, fill=1, stroke=0)

        # Risk level badge
        badge_w = 0.55*inch
        c.setFillColor(lc)
        c.roundRect(cx + 0.12*inch, cy - 0.28*inch, badge_w, 0.20*inch, 3, fill=1, stroke=0)
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(WHITE)
        bw = c.stringWidth(level, "Helvetica-Bold", 8)
        c.drawString(cx + 0.12*inch + (badge_w - bw)/2, cy - 0.22*inch, level)

        # Title
        c.setFont("Helvetica-Bold", 12)
        c.setFillColor(WHITE)
        c.drawString(cx + 0.75*inch, cy - 0.24*inch, title)

        # Risk description
        c.setFont("Helvetica-Oblique", 8.5)
        c.setFillColor(GRAY)
        c.drawString(cx + 0.12*inch, cy - 0.46*inch, "RISK: " + risk_desc)

        # Mitigation
        c.setFont("Helvetica-Bold", 7)
        c.setFillColor(GOLD)
        c.drawString(cx + 0.12*inch, cy - 0.62*inch, "FOXRIDGE RESPONSE:")
        c.setFont("Helvetica", 9)
        c.setFillColor(OFFWHITE)
        # Wrap mitigation text
        words = mitigation.split()
        line = ""
        my = cy - 0.76*inch
        max_mw = card_w - 0.25*inch
        for word in words:
            test = (line + " " + word).strip()
            if c.stringWidth(test, "Helvetica", 9) <= max_mw:
                line = test
            else:
                c.drawString(cx + 0.12*inch, my, line)
                my -= 0.145*inch
                line = word
        if line:
            c.drawString(cx + 0.12*inch, my, line)

        # Key metric for each risk
        risk_metrics = {
            "EXTENDED RATE ENVIRONMENT": ("6.5%", "Entry cap rate", "7.0%+", "Stress test cap rate"),
            "DEMAND SOFTENING": ("91%", "Occupancy floor (2009)", "1,200+", "Daily new TX residents"),
            "ADDITIONAL SUPPLY SURPRISE": ("24mo", "Construction lead time", "100%", "Permitted projects tracked"),
            "EXECUTION RISK": ("7,000+", "Units renovated by FoxRidge", "15%", "Contingency reserve/deal"),
            "REGULATORY CHANGES": ("0", "TX rent control laws", "#1", "Landlord-friendly state"),
        }
        if title in risk_metrics:
            rm = risk_metrics[title]
            rm_y = my - 0.18*inch
            rm_w = (card_w - 0.25*inch) / 2
            for rm_idx in range(2):
                rmx = cx + 0.12*inch + rm_idx * rm_w
                c.setFont("Helvetica-Bold", 16)
                c.setFillColor(lc)
                c.drawString(rmx, rm_y, rm[rm_idx * 2])
                c.setFont("Helvetica", 7)
                c.setFillColor(GRAY)
                c.drawString(rmx, rm_y - 0.15*inch, rm[rm_idx * 2 + 1])

    # Underwriting philosophy callout
    phil_y = start_y - 5 * (card_h + gap) - gap
    phil_h = callout_h_alloc
    c.setFillColor(GOLD)
    c.setFillAlpha(0.12)
    c.roundRect(cx, phil_y - phil_h, card_w, phil_h, 6, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    c.setStrokeColor(GOLD)
    c.setLineWidth(1)
    c.roundRect(cx, phil_y - phil_h, card_w, phil_h, 6, fill=0, stroke=1)
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(GOLD)
    c.drawString(cx + 0.2*inch, phil_y - 0.22*inch, "UNDERWRITING PHILOSOPHY:")
    c.setFont("Helvetica", 9.5)
    c.setFillColor(WHITE)
    c.drawString(cx + 0.2*inch, phil_y - 0.40*inch,
                 "We underwrite to survive, not to win. Every deal must pencil at 7% cap rates, 90% occupancy, and 0% rent growth.")
    c.drawString(cx + 0.2*inch, phil_y - 0.56*inch,
                 "Upside is a bonus. Capital preservation is the mandate.")

    # Footer
    c.setFillColor(NAVY)
    c.rect(0, 0, W, 0.38*inch, fill=1, stroke=0)
    c.setFont("Helvetica", 7)
    c.setFillColor(GRAY)
    footer = "FoxRidge Equity  |  foxridgeequity.com  |  Page 6 of 7"
    fw = c.stringWidth(footer, "Helvetica", 7)
    c.drawString((W - fw) / 2, 0.14*inch, footer)

# ══════════════════════════════════════════════════════════════════════════════
# PAGE 7 — TEAM + CONTACT + QR CODE
# ══════════════════════════════════════════════════════════════════════════════
def page_team(c):
    # Full-bleed background
    if os.path.exists(BG_COVER):
        draw_full_bg(c, BG_COVER, overlay_alpha=0.85, overlay_color="navy")
    else:
        c.setFillColor(NAVY)
        c.rect(0, 0, W, H, fill=1, stroke=0)

    # Header
    c.setFillColor(GOLD)
    c.rect(0, H - 0.08*inch, W, 0.08*inch, fill=1, stroke=0)
    c.setFillColor(DARKGRAY)
    c.rect(0, H - 0.65*inch, W, 0.57*inch, fill=1, stroke=0)
    draw_logo(c, 0.4*inch, H - 0.12*inch, w=1.1*inch)
    c.setFont("Helvetica-Bold", 20)
    c.setFillColor(WHITE)
    c.drawString(0.4*inch, H - 0.48*inch, "TWO OPERATORS. ONE FOCUSED PLATFORM.")
    c.setFont("Helvetica", 10)
    c.setFillColor(GOLD)
    c.drawString(0.4*inch, H - 0.62*inch, "Deep Texas relationships. Institutional discipline. Proven execution.")

    # ── Team section ──
    team_y = H - 0.85*inch
    photo_w = 1.65*inch
    photo_h = 2.40*inch
    col_w = (W - 0.6*inch) / 2
    col_gap = 0.1*inch

    people = [
        {
            "img": MIKHAIL_IMG,
            "name": "MIKHAIL PRITSKER",
            "title": "Co-Founder & Managing Partner",
            "stats": [("25+", "Years in CRE"), ("7,000+", "Units Invested"), ("42%", "Best IRR")],
            "bio": "MBA Chicago Booth. CCIM. Former institutional asset manager with deep Texas operator relationships. Leads acquisitions, investor relations, and capital strategy.",
            "accent": "#B8942A",
        },
        {
            "img": SLAVA_IMG,
            "name": "SLAVA DAVIDENKO",
            "title": "Co-Founder & Managing Partner",
            "stats": [("20+", "Years in RE Tech"), ("$500M+", "Assets Managed"), ("AI-First", "Operations")],
            "bio": "Technology and operations leader. Built AI-driven property management systems deployed across 3,000+ units. Leads asset management, technology, and operational efficiency.",
            "accent": "#1E6E8E",
        },
    ]

    for p_idx, person in enumerate(people):
        px = 0.3*inch + p_idx * (col_w + col_gap)
        py = team_y
        accent = colors.HexColor(person["accent"])

        # Card bg
        c.setFillColor(DARKGRAY)
        c.roundRect(px, py - 3.80*inch, col_w, 3.80*inch, 6, fill=1, stroke=0)
        c.setFillColor(accent)
        c.roundRect(px, py, col_w, 0.05*inch, 3, fill=1, stroke=0)

        # Photo
        try:
            photo_rl = portrait_crop(person["img"], photo_w, photo_h)
            c.drawImage(photo_rl, px + 0.18*inch, py - photo_h - 0.18*inch, photo_w, photo_h)
            # Gold border
            c.setStrokeColor(accent)
            c.setLineWidth(2)
            c.rect(px + 0.18*inch, py - photo_h - 0.18*inch, photo_w, photo_h, fill=0, stroke=1)
        except:
            c.setFillColor(LIGHTNAVY)
            c.rect(px + 0.18*inch, py - photo_h - 0.18*inch, photo_w, photo_h, fill=1, stroke=0)

        # Name and title
        name_x = px + photo_w + 0.28*inch
        c.setFont("Helvetica-Bold", 13)
        c.setFillColor(WHITE)
        c.drawString(name_x, py - 0.30*inch, person["name"])
        c.setFont("Helvetica", 9)
        c.setFillColor(GOLD)
        c.drawString(name_x, py - 0.48*inch, person["title"])

        # Stats
        stat_y_pos = py - 0.72*inch
        for val, lbl in person["stats"]:
            c.setFont("Helvetica-Bold", 14)
            c.setFillColor(accent)
            c.drawString(name_x, stat_y_pos, val)
            c.setFont("Helvetica", 7)
            c.setFillColor(GRAY)
            c.drawString(name_x, stat_y_pos - 0.14*inch, lbl)
            stat_y_pos -= 0.34*inch

        # Bio (below photo)
        bio_y = py - photo_h - 0.38*inch
        c.setFont("Helvetica", 8)
        c.setFillColor(OFFWHITE)
        bio_words = person["bio"].split()
        bio_line = ""
        bio_max_w = col_w - 0.36*inch
        for word in bio_words:
            test = (bio_line + " " + word).strip()
            if c.stringWidth(test, "Helvetica", 8) <= bio_max_w:
                bio_line = test
            else:
                c.drawString(px + 0.18*inch, bio_y, bio_line)
                bio_y -= 0.135*inch
                bio_line = word
        if bio_line:
            c.drawString(px + 0.18*inch, bio_y, bio_line)

        # Expertise tags
        expertise = {
            0: ["Acquisitions", "Capital Markets", "Investor Relations", "Asset Strategy"],
            1: ["AI Operations", "PropTech", "Asset Management", "Data Analytics"],
        }
        tag_y = bio_y - 0.25*inch
        c.setFont("Helvetica-Bold", 7)
        c.setFillColor(GOLD)
        c.drawString(px + 0.18*inch, tag_y, "EXPERTISE:")
        tag_x = px + 0.18*inch
        tag_row_y = tag_y - 0.18*inch
        for tag in expertise.get(p_idx, []):
            tag_tw = c.stringWidth(tag, "Helvetica", 7) + 0.12*inch
            if tag_x + tag_tw > px + col_w - 0.18*inch:
                tag_x = px + 0.18*inch
                tag_row_y -= 0.22*inch
            c.setFillColor(accent)
            c.setFillAlpha(0.25)
            c.roundRect(tag_x, tag_row_y - 0.14*inch, tag_tw, 0.18*inch, 3, fill=1, stroke=0)
            c.setFillAlpha(1.0)
            c.setFont("Helvetica", 7)
            c.setFillColor(WHITE)
            c.drawString(tag_x + 0.06*inch, tag_row_y - 0.04*inch, tag)
            tag_x += tag_tw + 0.06*inch

    # ── Track record bar ──
    tr_y = team_y - 3.90*inch
    tr_h = 0.75*inch
    c.setFillColor(NAVY2)
    c.rect(0.3*inch, tr_y - tr_h, W - 0.6*inch, tr_h, fill=1, stroke=0)
    c.setFillColor(GOLD)
    c.rect(0.3*inch, tr_y, W - 0.6*inch, 0.04*inch, fill=1, stroke=0)

    tr_stats = [
        ("$1B+", "TOTAL DEAL VALUE"),
        ("7,000+", "UNITS INVESTED"),
        ("1.77×", "AVG EQUITY MULTIPLE"),
        ("26%", "AVG NET IRR"),
        ("2022–2025", "ACTIVE SUPPLY PIPELINE"),
    ]
    tr_w = (W - 0.6*inch) / len(tr_stats)
    for t_idx, (val, lbl) in enumerate(tr_stats):
        tx = 0.3*inch + t_idx * tr_w
        c.setFont("Helvetica-Bold", 16)
        c.setFillColor(GOLD2)
        vw = c.stringWidth(val, "Helvetica-Bold", 16)
        c.drawString(tx + (tr_w - vw)/2, tr_y - tr_h * 0.42, val)
        c.setFont("Helvetica-Bold", 7)
        c.setFillColor(WHITE)
        lw = c.stringWidth(lbl, "Helvetica-Bold", 7)
        c.drawString(tx + (tr_w - lw)/2, tr_y - tr_h * 0.72, lbl)
        if t_idx > 0:
            c.setStrokeColor(GOLD)
            c.setLineWidth(0.5)
            c.setStrokeAlpha(0.3)
            c.line(tx, tr_y - tr_h + 0.1*inch, tx, tr_y - 0.1*inch)
            c.setStrokeAlpha(1.0)

    # ── Next Steps section ──
    ns_y = tr_y - tr_h - 0.15*inch
    ns_h = 0.80*inch
    ns_w = W - 0.6*inch
    c.setFillColor(NAVY2)
    c.setFillAlpha(0.85)
    c.roundRect(0.3*inch, ns_y - ns_h, ns_w, ns_h, 6, fill=1, stroke=0)
    c.setFillAlpha(1.0)
    c.setFillColor(GOLD)
    c.roundRect(0.3*inch, ns_y, ns_w, 0.04*inch, 3, fill=1, stroke=0)
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(WHITE)
    c.drawString(0.5*inch, ns_y - 0.22*inch, "HOW TO INVEST WITH FOXRIDGE")
    steps = [
        ("01", "Schedule a call", "30-min intro call with Mikhail or Slava"),
        ("02", "Review PPM", "Receive Private Placement Memorandum"),
        ("03", "Sign & Fund", "Wire minimum $100K to secure allocation"),
        ("04", "Quarterly updates", "Receive reports + distributions"),
    ]
    step_w = (ns_w - 0.4*inch) / len(steps)
    for s_idx, (snum, stitle, sdesc) in enumerate(steps):
        sx2 = 0.5*inch + s_idx * step_w
        c.setFont("Helvetica-Bold", 18)
        c.setFillColor(GOLD)
        c.setFillAlpha(0.3)
        c.drawString(sx2, ns_y - 0.50*inch, snum)
        c.setFillAlpha(1.0)
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(WHITE)
        c.drawString(sx2 + 0.25*inch, ns_y - 0.44*inch, stitle)
        c.setFont("Helvetica", 7)
        c.setFillColor(GRAY)
        c.drawString(sx2 + 0.25*inch, ns_y - 0.57*inch, sdesc)

    # ── Contact + QR ──
    contact_y = ns_y - ns_h - 0.15*inch
    contact_h = 1.45*inch
    left_w = W * 0.65 - 0.3*inch
    right_w = W * 0.35 - 0.3*inch

    # Contact left
    c.setFillColor(DARKGRAY)
    c.roundRect(0.3*inch, contact_y - contact_h, left_w, contact_h, 6, fill=1, stroke=0)
    c.setFillColor(GOLD)
    c.roundRect(0.3*inch, contact_y, left_w, 0.04*inch, 3, fill=1, stroke=0)

    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(WHITE)
    c.drawString(0.5*inch, contact_y - 0.25*inch, "GET IN TOUCH")
    c.setFont("Helvetica", 9)
    c.setFillColor(OFFWHITE)
    contact_info = [
        ("Email:", "invest@foxridgeequity.com"),
        ("Phone:", "+1 (786) 828-9533  |  +1 (424) 206-8744"),
        ("Web:", "foxridgeequity.com"),
        ("Office:", "Miami, FL  |  Los Angeles, CA"),
    ]
    ci_y = contact_y - 0.48*inch
    for lbl, val in contact_info:
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(GOLD)
        c.drawString(0.5*inch, ci_y, lbl)
        c.setFont("Helvetica", 8)
        c.setFillColor(OFFWHITE)
        c.drawString(0.5*inch + 0.55*inch, ci_y, val)
        ci_y -= 0.20*inch

    # QR code right
    qr_x = 0.3*inch + left_w + 0.1*inch
    qr_size = 1.10*inch
    c.setFillColor(DARKGRAY)
    c.roundRect(qr_x, contact_y - contact_h, right_w, contact_h, 6, fill=1, stroke=0)
    c.setFillColor(GOLD)
    c.roundRect(qr_x, contact_y, right_w, 0.04*inch, 3, fill=1, stroke=0)

    qr_img = make_qr("https://foxridgeequity.com", qr_size)
    qr_draw_x = qr_x + (right_w - qr_size) / 2
    qr_draw_y = contact_y - 0.20*inch - qr_size
    c.drawImage(qr_img, qr_draw_x, qr_draw_y, qr_size, qr_size)

    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(WHITE)
    scan_text = "SCAN TO VISIT"
    sw = c.stringWidth(scan_text, "Helvetica-Bold", 8)
    c.drawString(qr_x + (right_w - sw)/2, qr_draw_y - 0.20*inch, scan_text)
    c.setFont("Helvetica", 7)
    c.setFillColor(GOLD)
    url_text = "foxridgeequity.com"
    uw = c.stringWidth(url_text, "Helvetica", 7)
    c.drawString(qr_x + (right_w - uw)/2, qr_draw_y - 0.32*inch, url_text)

    # Disclaimer
    disc_y = contact_y - contact_h - 0.18*inch
    c.setFont("Helvetica", 6.5)
    c.setFillColor(GRAY)
    disc = ("This document is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. "
            "Past performance is not indicative of future results. All projections are forward-looking and subject to change. "
            "Investments in private real estate involve significant risk, including possible loss of principal. For accredited investors only.")
    disc_words = disc.split()
    disc_line = ""
    disc_max_w = W - 0.6*inch
    dy = disc_y
    for word in disc_words:
        test = (disc_line + " " + word).strip()
        if c.stringWidth(test, "Helvetica", 6.5) <= disc_max_w:
            disc_line = test
        else:
            c.drawString(0.3*inch, dy, disc_line)
            dy -= 0.115*inch
            disc_line = word
    if disc_line:
        c.drawString(0.3*inch, dy, disc_line)

    # Footer
    c.setFillColor(DARKGRAY)
    c.rect(0, 0, W, 0.38*inch, fill=1, stroke=0)
    c.setFont("Helvetica", 7)
    c.setFillColor(GRAY)
    footer = "FoxRidge Equity  |  foxridgeequity.com  |  Page 7 of 7  |  © 2026 FoxRidge Equity. All Rights Reserved."
    fw = c.stringWidth(footer, "Helvetica", 7)
    c.drawString((W - fw) / 2, 0.14*inch, footer)

# ══════════════════════════════════════════════════════════════════════════════
# MAIN
# ══════════════════════════════════════════════════════════════════════════════
def main():
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    c = canvas.Canvas(OUT, pagesize=letter)
    c.setTitle("FoxRidge Equity — Texas Triangle Multifamily Opportunity 2026")
    c.setAuthor("FoxRidge Equity")

    page_cover(c);   c.showPage()
    page_forces(c);  c.showPage()
    page_supply(c);  c.showPage()
    page_markets(c); c.showPage()
    page_returns(c); c.showPage()
    page_risks(c);   c.showPage()
    page_team(c);    c.showPage()

    c.save()
    size = os.path.getsize(OUT) / 1024
    print(f"✅ Generated: {OUT}  ({size:.0f} KB)")

if __name__ == "__main__":
    main()
