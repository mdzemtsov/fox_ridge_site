#!/usr/bin/env python3
"""
FoxRidge Equity Partners — Texas Triangle Multifamily 2026
7-page premium PDF document
"""

import io, os, qrcode
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from PIL import Image, ImageDraw, ImageFilter

W, H = letter  # 612 x 792 pts

# ── Brand Colors ──────────────────────────────────────────────────────────────
NAVY   = (0.118, 0.227, 0.431)   # #1E3A6E
GOLD   = (0.722, 0.580, 0.165)   # #B8942A
WHITE  = (1, 1, 1)
LGRAY  = (0.961, 0.957, 0.941)   # #F5F4F0
MGRAY  = (0.85, 0.85, 0.85)
DGRAY  = (0.30, 0.30, 0.30)
DKTEXT = (0.102, 0.102, 0.102)   # #1A1A1A
RED    = (0.75, 0.15, 0.15)
AMBER  = (0.85, 0.55, 0.10)

IMGS = "/home/ubuntu/fox_ridge_site/client/public/images"
OUT  = "/home/ubuntu/fox_ridge_site/client/public/FoxRidge_TexasTriangle_2026.pdf"

# ── Helper: PIL → ReportLab ImageReader ───────────────────────────────────────
def pil_to_rl(img: Image.Image, quality=82) -> ImageReader:
    buf = io.BytesIO()
    rgb = img.convert("RGB")
    rgb.save(buf, format="JPEG", quality=quality, optimize=True)
    buf.seek(0)
    return ImageReader(buf)

def load_img(path):
    return Image.open(path)

def portrait_crop(img: Image.Image, w_pts: float, h_pts: float) -> Image.Image:
    """Crop image to target aspect ratio, top-biased for portraits."""
    iw, ih = img.size
    target_ratio = w_pts / h_pts
    current_ratio = iw / ih
    if current_ratio > target_ratio:
        new_w = int(ih * target_ratio)
        left = (iw - new_w) // 2
        img = img.crop((left, 0, left + new_w, ih))
    else:
        new_h = int(iw / target_ratio)
        top = int(ih * 0.05)
        top = min(top, ih - new_h)
        img = img.crop((0, top, iw, top + new_h))
    return img

# ── Helper: draw text with auto-wrap ──────────────────────────────────────────
def draw_wrapped(c, text, x, y, max_w, font_name, font_size, color=None, line_gap=2):
    if color:
        c.setFillColorRGB(*color)
    c.setFont(font_name, font_size)
    words = text.split()
    line = ""
    cy = y
    for word in words:
        test = (line + " " + word).strip()
        if c.stringWidth(test, font_name, font_size) <= max_w:
            line = test
        else:
            if line:
                c.drawString(x, cy, line)
                cy -= (font_size + line_gap)
            line = word
    if line:
        c.drawString(x, cy, line)
        cy -= (font_size + line_gap)
    return cy

# ── Helper: section label ─────────────────────────────────────────────────────
def section_label(c, text, x, y):
    c.setFillColorRGB(*GOLD)
    c.setFont("Helvetica-Bold", 7)
    c.drawString(x, y, text)
    c.setStrokeColorRGB(*GOLD)
    c.setLineWidth(0.5)
    c.line(x, y - 3, x + c.stringWidth(text, "Helvetica-Bold", 7) + 60, y - 3)

# ── Helper: stat block ────────────────────────────────────────────────────────
def stat_block(c, value, label, x, y, val_size=22, lbl_size=7, val_color=GOLD, lbl_color=MGRAY):
    c.setFillColorRGB(*val_color)
    c.setFont("Helvetica-Bold", val_size)
    c.drawString(x, y, value)
    c.setFillColorRGB(*lbl_color)
    c.setFont("Helvetica", lbl_size)
    c.drawString(x, y - lbl_size - 2, label)

# ── Helper: footer ────────────────────────────────────────────────────────────
def draw_footer(c, page_num, content_bottom=None):
    # Navy fill from content_bottom down to footer (fills white gap)
    band_top = content_bottom if content_bottom is not None else 0.38*inch
    if band_top > 0.38*inch:
        c.setFillColorRGB(*NAVY)
        c.rect(0, 0.38*inch, W, band_top - 0.38*inch, fill=1, stroke=0)
    c.setFillColorRGB(*NAVY)
    c.rect(0, 0, W, 0.38*inch, fill=1, stroke=0)
    c.setFillColorRGB(*WHITE)
    c.setFont("Helvetica", 7)
    c.drawString(0.4*inch, 0.14*inch, "FoxRidge Equity Partners  ·  foxridgeequity.com  ·  partners@foxridgeequity.com")
    c.setFont("Helvetica", 7)
    c.drawRightString(W - 0.4*inch, 0.14*inch, f"Q2 2026  ·  Page {page_num}")
    # Gold line above footer
    c.setStrokeColorRGB(*GOLD)
    c.setLineWidth(1.0)
    c.line(0, 0.38*inch, W, 0.38*inch)

# ── Helper: navy bottom band (fills gap between content and footer) ─────────────
def draw_bottom_band(c, content_bottom):
    """Fill navy from content_bottom down to the gold line at 0.38*inch."""
    if content_bottom > 0.50*inch:  # only if there's a meaningful gap
        c.setFillColorRGB(*NAVY)
        c.rect(0, 0.38*inch, W, content_bottom - 0.38*inch, fill=1, stroke=0)

# ── Helper: page header strip ─────────────────────────────────────────────────
def draw_header(c, label=""):
    c.setFillColorRGB(*NAVY)
    c.rect(0, H - 0.38*inch, W, 0.38*inch, fill=1, stroke=0)
    c.setFillColorRGB(*WHITE)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(0.4*inch, H - 0.24*inch, "FOXRIDGE EQUITY PARTNERS")
    if label:
        c.setFillColorRGB(*GOLD)
        c.setFont("Helvetica", 8)
        c.drawRightString(W - 0.4*inch, H - 0.24*inch, label)

# ── Helper: QR code ───────────────────────────────────────────────────────────
def make_qr(url, size_pts):
    qr = qrcode.QRCode(version=2, box_size=10, border=2,
                       error_correction=qrcode.constants.ERROR_CORRECT_M)
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="#1E3A6E", back_color="white")
    img = img.resize((int(size_pts * 3), int(size_pts * 3)), Image.LANCZOS)
    return pil_to_rl(img)

# ── Helper: horizontal bar chart ─────────────────────────────────────────────
def bar_chart(c, data, x, y, chart_w, bar_h, gap, max_val, bar_color=NAVY, label_color=DKTEXT):
    """data = list of (label, value, annotation)"""
    for label, val, annot in data:
        fill_w = (val / max_val) * chart_w
        c.setFillColorRGB(*bar_color)
        c.rect(x, y, fill_w, bar_h, fill=1, stroke=0)
        c.setFillColorRGB(*label_color)
        c.setFont("Helvetica", 7)
        c.drawString(x - 0.05*inch - c.stringWidth(label, "Helvetica", 7), y + 2, label)
        if annot:
            c.setFillColorRGB(*GOLD)
            c.setFont("Helvetica-Bold", 7)
            c.drawString(x + fill_w + 4, y + 2, annot)
        y -= (bar_h + gap)

# ═══════════════════════════════════════════════════════════════════════════════
# PAGE 1 — COVER
# ═══════════════════════════════════════════════════════════════════════════════
def page_cover(c):
    # Background: dark navy
    c.setFillColorRGB(*NAVY)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # Property photo (hero) with dark overlay — top 40% of page
    hero_h = H * 0.40
    try:
        hero = load_img(f"{IMGS}/hero-strategy-garden.jpg")
        hero_crop = hero.crop((0, 0, hero.width, int(hero.height * 0.7)))
        hero_crop = hero_crop.resize((int(W * 3), int(hero_h * 3)), Image.LANCZOS)
        # Dark overlay
        overlay = Image.new("RGBA", hero_crop.size, (10, 25, 55, 185))
        hero_rgba = hero_crop.convert("RGBA")
        blended = Image.alpha_composite(hero_rgba, overlay).convert("RGB")
        c.drawImage(pil_to_rl(blended), 0, H - hero_h, W, hero_h)
    except:
        pass

    # Gold accent line
    c.setStrokeColorRGB(*GOLD)
    c.setLineWidth(2)
    c.line(0.4*inch, H - hero_h, W - 0.4*inch, H - hero_h)

    # Logo area
    try:
        logo = load_img(f"{IMGS}/logo-white-new.png")
        lw, lh = 1.1*inch, 0.38*inch
        logo_crop = logo.convert("RGBA")
        c.drawImage(pil_to_rl(logo_crop), 0.4*inch, H - 0.75*inch, lw, lh, mask='auto')
    except:
        c.setFillColorRGB(*WHITE)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(0.4*inch, H - 0.62*inch, "FOXRIDGE EQUITY PARTNERS")

    # Tag line
    c.setFillColorRGB(*GOLD)
    c.setFont("Helvetica", 8)
    c.drawRightString(W - 0.4*inch, H - 0.58*inch, "Q2 2026  ·  FOR INTERESTED INVESTORS")

    # Main headline
    c.setFillColorRGB(*WHITE)
    c.setFont("Helvetica-Bold", 46)
    c.drawString(0.4*inch, H - hero_h + 2.5*inch, "Texas Triangle")
    c.setFillColorRGB(*GOLD)
    c.setFont("Helvetica-BoldOblique", 46)
    c.drawString(0.4*inch, H - hero_h + 1.85*inch, "Multifamily")
    c.setFillColorRGB(*WHITE)
    c.setFont("Helvetica-Bold", 46)
    c.drawString(0.4*inch + c.stringWidth("Multifamily ", "Helvetica-BoldOblique", 46), H - hero_h + 1.85*inch, "2026")

    # Subhead
    c.setFillColorRGB(0.85, 0.85, 0.85)
    c.setFont("Helvetica", 13)
    c.drawString(0.4*inch, H - hero_h + 1.35*inch, "Why the entry window is open — and why now is the time to pay attention")

    # 4-stat bar
    bar_y = H - hero_h + 0.55*inch
    bar_h_px = 0.75*inch
    c.setFillColorRGB(0.08, 0.16, 0.32)
    c.rect(0, bar_y, W, bar_h_px, fill=1, stroke=0)
    c.setStrokeColorRGB(*GOLD)
    c.setLineWidth(0.5)
    c.line(0, bar_y + bar_h_px, W, bar_y + bar_h_px)

    stats = [
        ("−56%", "U.S. STARTS FROM PEAK"),
        ("$162B", "MATURITY WALL 2026"),
        ("391K", "NEW TEXAS RESIDENTS 2025"),
        ("15–18%", "TARGET LP IRR"),
    ]
    col_w = W / 4
    for i, (val, lbl) in enumerate(stats):
        cx = i * col_w + col_w / 2
        c.setFillColorRGB(*GOLD)
        c.setFont("Helvetica-Bold", 20)
        c.drawCentredString(cx, bar_y + 0.38*inch, val)
        c.setFillColorRGB(0.70, 0.70, 0.70)
        c.setFont("Helvetica", 6.5)
        c.drawCentredString(cx, bar_y + 0.16*inch, lbl)
        if i < 3:
            c.setStrokeColorRGB(0.25, 0.35, 0.55)
            c.setLineWidth(0.5)
            c.line((i+1)*col_w, bar_y + 0.12*inch, (i+1)*col_w, bar_y + 0.60*inch)

    # Content section — below hero
    content_y = H - hero_h - 0.05*inch  # just below the gold line
    content_h = bar_y - content_y  # space between hero bottom and stats bar

    # Investment Thesis label
    c.setFillColorRGB(*GOLD)
    c.setFont("Helvetica-Bold", 7)
    label = "INVESTMENT THESIS  ·  MAY 2026"
    lw = c.stringWidth(label, "Helvetica-Bold", 7)
    c.drawString(0.4*inch, content_y - 0.30*inch, label)
    c.setStrokeColorRGB(*GOLD)
    c.setLineWidth(0.5)
    c.line(0.4*inch + lw + 6, content_y - 0.27*inch, 0.4*inch + lw + 60, content_y - 0.27*inch)

    # Thesis quote
    quote = ('"The thesis is not \'buy Texas because Texas is great.\' The thesis is: '
             'in a market where supply has collapsed, demand has held, capital is dislocated, '
             'and motivated sellers are emerging, the next 6–12 months represent the '
             'highest-probability entry window in the Texas Triangle since 2010."')
    c.setFillColorRGB(*WHITE)
    q_end = draw_wrapped(c, quote, 0.4*inch, content_y - 0.55*inch, W - 0.8*inch,
                 "Helvetica-Oblique", 9.5, WHITE, line_gap=3)

    # Key facts grid below the quote
    facts = [
        ("−56%", "U.S. multifamily starts from 2022 peak — supply drought locked in through 2028"),
        ("391K", "Net new Texas residents in 2025 — #1 state nationally for in-migration"),
        ("$162B", "Multifamily loans maturing in 2026 — motivated sellers entering the market"),
        ("6.5%+", "Mortgage rates keeping for-sale market closed — renters are captive"),
        ("1.6%", "Houston vacancy rate — tightest major market in the U.S."),
        ("$1,220", "Own-vs-rent gap per month in Texas — up from $300 in 2020"),
    ]
    fact_y = q_end - 0.35*inch
    fact_col_w = (W - 0.8*inch) / 3
    for i, (val, desc) in enumerate(facts):
        col = i % 3
        row = i // 3
        fx = 0.4*inch + col * fact_col_w
        fy = fact_y - row * 1.60*inch
        # Gold accent line
        c.setStrokeColorRGB(*GOLD)
        c.setLineWidth(1.5)
        c.line(fx, fy, fx + 0.35*inch, fy)
        # Value
        c.setFillColorRGB(*GOLD)
        c.setFont("Helvetica-Bold", 16)
        c.drawString(fx, fy - 0.22*inch, val)
        # Description
        c.setFillColorRGB(0.80, 0.80, 0.80)
        c.setFont("Helvetica", 7)
        draw_wrapped(c, desc, fx, fy - 0.38*inch, fact_col_w - 0.10*inch, "Helvetica", 7, (0.80, 0.80, 0.80), 1.5)

    # Footer
    c.setFillColorRGB(*NAVY)
    c.rect(0, 0, W, 0.38*inch, fill=1, stroke=0)
    c.setFillColorRGB(*WHITE)
    c.setFont("Helvetica", 7)
    c.drawCentredString(W/2, 0.14*inch, "foxridgeequity.com  ·  partners@foxridgeequity.com  ·  Austin, TX  ·  Miami, FL")
    c.setStrokeColorRGB(*GOLD)
    c.setLineWidth(1.0)
    c.line(0, 0.38*inch, W, 0.38*inch)


# ═══════════════════════════════════════════════════════════════════════════════
# PAGE 2 — THE THESIS (Why Now — 5 Pillars)
# ═══════════════════════════════════════════════════════════════════════════════
def page_thesis(c):
    c.setFillColorRGB(*LGRAY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    draw_header(c, "01 · THE THESIS")
    draw_footer(c, 2)

    y = H - 0.75*inch
    section_label(c, "01 · THE INVESTMENT THESIS", 0.4*inch, y)
    y -= 0.32*inch

    c.setFillColorRGB(*NAVY)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(0.4*inch, y, "Why the Entry Window Is Open")
    y -= 0.22*inch
    c.setFillColorRGB(*DGRAY)
    c.setFont("Helvetica", 10)
    c.drawString(0.4*inch, y, "Five independent forces converging simultaneously in Q2–Q3 2026")
    y -= 0.40*inch

    # 6 pillars — 2 columns, 3 rows
    pillars = [
        ("SUPPLY CLIFF", NAVY,
         "U.S. multifamily starts collapsed 56% from the 2022 peak of 708K to just 311K in 2025 — "
         "the lowest level since 2010. Texas pipeline down 45–80% across all four metros. "
         "The supply drought extending into 2028 is mathematically locked in."),
        ("AGENCY DEBT OPEN", NAVY,
         "Fannie Mae and Freddie Mac both set $88B multifamily purchase caps for 2026 — "
         "fully open to qualified sponsors. Multifamily CMBS delinquency rate remains just 0.5%, "
         "demonstrating asset-class stability. Financing is available for disciplined buyers."),
        ("DEMAND ENGINE", NAVY,
         "Texas added 391K net new residents in 2025 — #1 state nationally. Houston is the "
         "#1 fastest-growing top-20 metro at +1.6%. AT&T is relocating its global HQ to Plano "
         "with 10,000 jobs. 3 of the top 5 corporate HQ relocation destinations are Texas Triangle metros."),
        ("RENTER LOCK-IN", NAVY,
         "Mortgage rates at 6.5%+ keep the for-sale market structurally closed. The own-vs-rent "
         "gap in Texas has reached $1,220/month in 2026E — up from just $300/month in 2020. "
         "Renters are captive. Demand is durable."),
        ("MATURITY WALL", NAVY,
         "$162B in multifamily loans mature in 2026 — up 56% YoY from $104B in 2025. "
         "$168B more in 2027. Sponsors who cannot refinance must sell at market-clearing prices, "
         "creating a wave of motivated deal flow unavailable at any other point in the cycle."),
        ("RATE ENVIRONMENT", NAVY,
         "The Fed’s rate pause has stabilized cap rates. Agency debt at 5.5–6.0% is available "
         "for qualified sponsors. Bridge lenders are actively competing. The cost of capital is "
         "predictable for the first time since 2021 — underwriting is executable."),
    ]

    col_w = (W - 0.9*inch) / 2
    card_h = 1.80*inch
    gap = 0.16*inch
    pad = 0.15*inch

    positions = [
        (0.4*inch, y),
        (0.4*inch + col_w + 0.1*inch, y),
        (0.4*inch, y - card_h - gap),
        (0.4*inch + col_w + 0.1*inch, y - card_h - gap),
        (0.4*inch, y - 2*(card_h + gap)),
        (0.4*inch + col_w + 0.1*inch, y - 2*(card_h + gap)),
    ]

    for i, (title, color, desc) in enumerate(pillars):
        px, py = positions[i]
        # Card background
        c.setFillColorRGB(*WHITE)
        c.roundRect(px, py - card_h, col_w, card_h, 4, fill=1, stroke=0)
        # Gold top accent
        c.setFillColorRGB(*GOLD)
        c.roundRect(px, py - 0.06*inch, col_w, 0.06*inch, 2, fill=1, stroke=0)
        # Number
        c.setFillColorRGB(*GOLD)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(px + pad, py - 0.28*inch, f"0{i+1}")
        # Title
        c.setFillColorRGB(*NAVY)
        c.setFont("Helvetica-Bold", 10)
        c.drawString(px + pad + 0.28*inch, py - 0.28*inch, title)
        # Description
        draw_wrapped(c, desc, px + pad, py - 0.52*inch, col_w - 2*pad,
                     "Helvetica", 7.5, DGRAY, line_gap=2)

    # Pull quote at bottom
    quote_y = y - 2*(card_h + gap) - card_h - 0.25*inch
    c.setFillColorRGB(*NAVY)
    c.rect(0.4*inch, quote_y - 0.60*inch, W - 0.8*inch, 0.60*inch, fill=1, stroke=0)
    c.setFillColorRGB(*GOLD)
    c.setFont("Helvetica-BoldOblique", 8.5)
    c.drawString(0.55*inch, quote_y - 0.20*inch,
                 '"The next 6–12 months represent the highest-probability entry window in the Texas Triangle since 2010."')
    c.setFillColorRGB(0.70, 0.70, 0.70)
    c.setFont("Helvetica", 7)
    c.drawString(0.55*inch, quote_y - 0.38*inch, "FOXRIDGE HOUSE VIEW — Q2 2026")
    draw_bottom_band(c, quote_y - 0.65*inch)


# ═══════════════════════════════════════════════════════════════════════════════
# PAGE 3 — THE SUPPLY CLIFF
# ═══════════════════════════════════════════════════════════════════════════════
def page_supply(c):
    c.setFillColorRGB(*WHITE)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    draw_header(c, "02 · THE SUPPLY CLIFF")
    draw_footer(c, 3)

    y = H - 0.75*inch
    section_label(c, "02 · THE SUPPLY CLIFF", 0.4*inch, y)
    y -= 0.32*inch

    c.setFillColorRGB(*NAVY)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(0.4*inch, y, "How Overbuilding Becomes Opportunity")
    y -= 0.20*inch
    c.setFillColorRGB(*DGRAY)
    c.setFont("Helvetica", 9.5)
    draw_wrapped(c, ("From 2021–2024, developers responded to post-pandemic rent surges with the largest "
                     "construction cycle in 44 years — 595,000 units delivered in 2024 alone. "
                     "That wave is now collapsing. The mathematics of this reversal are locked in."),
                 0.4*inch, y, W - 0.8*inch, "Helvetica", 9.5, DGRAY, line_gap=2)
    y -= 0.55*inch

    # 4 key stats in a row
    stats = [
        ("−56%", "U.S. STARTS DECLINE", "From 708K peak (2022) to 311K in 2025"),
        ("280K", "2027E DELIVERIES", "Down 53% from 2024 peak of 595K"),
        ("+$10,900", "ADDED PER UNIT", "Steel/aluminium tariffs (Jan 2026)"),
        ("7%+", "C&D LENDING RATES", "50–60% LTC — economically unworkable"),
    ]
    col_w = (W - 0.8*inch) / 4
    sx = 0.4*inch
    for val, lbl, note in stats:
        c.setFillColorRGB(*LGRAY)
        c.roundRect(sx, y - 0.80*inch, col_w - 0.08*inch, 0.80*inch, 3, fill=1, stroke=0)
        c.setFillColorRGB(*GOLD)
        c.setFont("Helvetica-Bold", 18)
        c.drawCentredString(sx + (col_w - 0.08*inch)/2, y - 0.32*inch, val)
        c.setFillColorRGB(*NAVY)
        c.setFont("Helvetica-Bold", 6.5)
        c.drawCentredString(sx + (col_w - 0.08*inch)/2, y - 0.50*inch, lbl)
        c.setFillColorRGB(*DGRAY)
        c.setFont("Helvetica", 6)
        draw_wrapped(c, note, sx + 0.06*inch, y - 0.62*inch, col_w - 0.20*inch, "Helvetica", 6, DGRAY, 1)
        sx += col_w

    y -= 1.0*inch

    # Bar chart: U.S. Deliveries
    c.setFillColorRGB(*NAVY)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(0.4*inch, y, "U.S. Multifamily Deliveries — The Supply Cliff")
    c.setFillColorRGB(*DGRAY)
    c.setFont("Helvetica", 7.5)
    c.drawString(0.4*inch, y - 0.16*inch, "Thousands of units delivered annually  ·  2026–2027 = forecast")
    y -= 0.35*inch

    deliveries = [
        ("2021", 330, "330K"),
        ("2022", 420, "420K"),
        ("2023", 500, "500K"),
        ("2024", 595, "595K  ← PEAK"),
        ("2025", 430, "430K"),
        ("2026E", 340, "340K"),
        ("2027E", 280, "280K  ← TROUGH"),
    ]
    chart_x = 0.85*inch
    chart_w = W - 1.4*inch
    bh = 0.175*inch
    bg = 0.055*inch
    max_v = 650
    cy = y
    for yr, val, annot in deliveries:
        is_forecast = "E" in yr
        bar_color = (0.60, 0.70, 0.85) if is_forecast else NAVY
        fill_w = (val / max_v) * chart_w
        c.setFillColorRGB(*bar_color)
        c.rect(chart_x, cy, fill_w, bh, fill=1, stroke=0)
        c.setFillColorRGB(*DGRAY)
        c.setFont("Helvetica", 7)
        c.drawRightString(chart_x - 4, cy + 2, yr)
        c.setFillColorRGB(*GOLD if "PEAK" in annot or "TROUGH" in annot else DGRAY)
        c.setFont("Helvetica-Bold" if "PEAK" in annot or "TROUGH" in annot else "Helvetica", 7)
        c.drawString(chart_x + fill_w + 4, cy + 2, annot)
        cy -= (bh + bg)

    c.setFillColorRGB(0.75, 0.75, 0.75)
    c.setFont("Helvetica", 6)
    c.drawString(0.4*inch, cy - 0.05*inch, "Sources: Yardi Matrix Winter 2026 · Freddie Mac 2025 Multifamily Outlook · CBRE")

    y = cy - 0.25*inch

    # Texas pipeline table
    c.setFillColorRGB(*NAVY)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(0.4*inch, y, "Texas Triangle — Supply Collapse from Peak")
    y -= 0.22*inch

    headers = ["Metro", "Units UC (Q1 2026)", "Decline from Peak", "Status"]
    col_ws = [1.3*inch, 1.5*inch, 1.5*inch, 2.5*inch]
    tx = 0.4*inch
    c.setFillColorRGB(*NAVY)
    c.rect(tx, y - 0.20*inch, sum(col_ws), 0.22*inch, fill=1, stroke=0)
    c.setFillColorRGB(*WHITE)
    c.setFont("Helvetica-Bold", 7.5)
    for i, h in enumerate(headers):
        c.drawString(tx + sum(col_ws[:i]) + 0.06*inch, y - 0.13*inch, h)

    rows = [
        ("Houston",     "~11,000",  "−45% from peak", "GO NOW — GSE buy signal"),
        ("San Antonio", "~4,800",   "−76% from peak", "GO NOW — lowest entry pricing"),
        ("Dallas–FW",   "48,859",   "−45% from peak", "GO SOON — AT&T HQ catalyst"),
        ("Austin",      "25,931",   "−65% from peak", "WATCH — deploy H1 2027"),
    ]
    row_colors = [WHITE, LGRAY, WHITE, LGRAY]
    status_colors = [
        (0.05, 0.45, 0.15),  # green
        (0.05, 0.45, 0.15),  # green
        AMBER,
        (0.55, 0.55, 0.55),  # gray
    ]
    ry = y - 0.20*inch
    for j, (metro, units, decline, status) in enumerate(rows):
        c.setFillColorRGB(*row_colors[j])
        c.rect(tx, ry - 0.20*inch, sum(col_ws), 0.20*inch, fill=1, stroke=0)
        vals = [metro, units, decline, status]
        for i, v in enumerate(vals):
            if i == 3:
                c.setFillColorRGB(*status_colors[j])
                c.setFont("Helvetica-Bold", 7.5)
            else:
                c.setFillColorRGB(*DKTEXT)
                c.setFont("Helvetica", 7.5)
            c.drawString(tx + sum(col_ws[:i]) + 0.06*inch, ry - 0.13*inch, v)
        ry -= 0.20*inch

    c.setFillColorRGB(0.75, 0.75, 0.75)
    c.setFont("Helvetica", 6)
    c.drawString(0.4*inch, ry - 0.08*inch, "Sources: IPA Research Services · RealPage Q1 2026 · Newmark · Cushman & Wakefield Jan 2026")

    # Asset class callout
    y = ry - 0.28*inch
    c.setFillColorRGB(*NAVY)
    c.rect(0.4*inch, y - 0.45*inch, W - 0.8*inch, 0.45*inch, fill=1, stroke=0)
    c.setFillColorRGB(*GOLD)
    c.setFont("Helvetica-Bold", 9)
    c.drawCentredString(W/2, y - 0.18*inch, "THE ASSET CLASS  ·  Class A Garden-Style Multifamily  ·  Sun Belt  ·  Value-Add  ·  200+ Units")
    c.setFillColorRGB(0.75, 0.75, 0.75)
    c.setFont("Helvetica", 7.5)
    c.drawCentredString(W/2, y - 0.33*inch, "Low-rise garden communities acquired below replacement cost during the supply trough")
    draw_bottom_band(c, y - 0.50*inch)


# ═══════════════════════════════════════════════════════════════════════════════
# PAGE 4 — MARKET VERDICTS (4 metros)
# ═══════════════════════════════════════════════════════════════════════════════
def page_markets(c):
    c.setFillColorRGB(*LGRAY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    draw_header(c, "03 · MARKET VERDICTS")
    draw_footer(c, 4)

    y = H - 0.75*inch
    section_label(c, "03 · MARKET VERDICTS", 0.4*inch, y)
    y -= 0.32*inch

    c.setFillColorRGB(*NAVY)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(0.4*inch, y, "Four Ecosystems, Four Entry Points")
    y -= 0.20*inch
    c.setFillColorRGB(*DGRAY)
    c.setFont("Helvetica", 9)
    c.drawString(0.4*inch, y, "The Texas Triangle is not a single market. Each metro is at a distinct point in its recovery cycle as of Q1 2026.")
    y -= 0.35*inch

    metros = [
        {
            "name": "Houston, TX",
            "sub": "Energy Corridor · Medical Center · Katy / Pearland",
            "status": "GO NOW",
            "status_color": (0.05, 0.45, 0.15),
            "stats": [
                ("Q1 2026 Vacancy", "11.6%"),
                ("YE 2027 Target", "8–9%"),
                ("2026E Rent Growth", "+3.0–4.9%"),
                ("B+ Value-Add Cap", "6.0–6.5%"),
                ("Population Growth", "+1.6% (#1 top-20)"),
            ],
            "note": "Freddie + Fannie both project Houston flips from 6,000-unit surplus to 5,800-unit deficit in 2026 — the GSE institutional buy signal.",
        },
        {
            "name": "San Antonio, TX",
            "sub": "JBSA Military · Stone Oak · NE Loop 1604",
            "status": "GO NOW",
            "status_color": (0.05, 0.45, 0.15),
            "stats": [
                ("Q1 2026 Vacancy", "~12.0%"),
                ("Class A Vacancy", "6.7% (tightest in TX)"),
                ("Class A Rent Growth", "+2.8% YoY"),
                ("Units Under Construction", "~4,800 (−76% from peak)"),
                ("Entry Pricing", "$150–170K/unit"),
            ],
            "note": "Most undervalued risk-adjusted return profile in the Texas Triangle today. Military anchor: 38,000 active duty at JBSA.",
        },
        {
            "name": "Dallas–Fort Worth",
            "sub": "Plano / Frisco · Garland · Arlington",
            "status": "GO SOON",
            "status_color": AMBER,
            "stats": [
                ("Q1 2026 Vacancy", "12.5%"),
                ("YE 2027 Target", "9–10%"),
                ("2026E Rent Growth", "+1.5%"),
                ("B+ Value-Add Cap", "5.7–6.5%"),
                ("Best Entry Window", "H2 2026 – mid 2027"),
            ],
            "note": "AT&T $1.35B HQ relocation to Plano announced Jan 2026 — 10,000 jobs over the next decade. Plano/Frisco corridor is highest-conviction suburban submarket.",
        },
        {
            "name": "Austin, TX",
            "sub": "Tech + University — Recovery 2027–2028",
            "status": "WATCH",
            "status_color": (0.55, 0.55, 0.55),
            "stats": [
                ("Q1 2026 Vacancy", "14.5%"),
                ("YE 2027 Target", "10–12%"),
                ("Current Concessions", "8–12 weeks free rent"),
                ("2026E Rent Growth", "−0.7% to flat"),
                ("FoxRidge Deployment", "PAUSED — monitor H1 2027"),
            ],
            "note": "Strongest long-term tech and university fundamentals. Concession burn-off must complete before FoxRidge deploys primary capital. Full recovery: 2028.",
        },
    ]

    col_w = (W - 0.9*inch) / 2
    card_h = 3.00*inch
    gap = 0.12*inch

    for i, m in enumerate(metros):
        col = i % 2
        row = i // 2
        px = 0.4*inch + col * (col_w + 0.1*inch)
        py = y - row * (card_h + gap)

        # Card
        c.setFillColorRGB(*WHITE)
        c.roundRect(px, py - card_h, col_w, card_h, 4, fill=1, stroke=0)

        # Status badge
        c.setFillColorRGB(*m["status_color"])
        badge_w = c.stringWidth(m["status"], "Helvetica-Bold", 8) + 12
        c.roundRect(px + col_w - badge_w - 0.10*inch, py - 0.32*inch, badge_w, 0.20*inch, 3, fill=1, stroke=0)
        c.setFillColorRGB(*WHITE)
        c.setFont("Helvetica-Bold", 8)
        c.drawCentredString(px + col_w - badge_w/2 - 0.10*inch, py - 0.24*inch, m["status"])

        # Metro name
        c.setFillColorRGB(*NAVY)
        c.setFont("Helvetica-Bold", 12)
        c.drawString(px + 0.12*inch, py - 0.26*inch, m["name"])
        c.setFillColorRGB(*DGRAY)
        c.setFont("Helvetica", 7)
        c.drawString(px + 0.12*inch, py - 0.40*inch, m["sub"])

        # Divider
        c.setStrokeColorRGB(*GOLD)
        c.setLineWidth(0.5)
        c.line(px + 0.12*inch, py - 0.48*inch, px + col_w - 0.12*inch, py - 0.48*inch)

        # Stats
        sy = py - 0.62*inch
        for stat_lbl, stat_val in m["stats"]:
            c.setFillColorRGB(*DGRAY)
            c.setFont("Helvetica", 7.5)
            c.drawString(px + 0.12*inch, sy, stat_lbl)
            c.setFillColorRGB(*NAVY)
            c.setFont("Helvetica-Bold", 7.5)
            c.drawRightString(px + col_w - 0.12*inch, sy, stat_val)
            sy -= 0.185*inch

        # Note
        draw_wrapped(c, m["note"], px + 0.12*inch, sy - 0.05*inch,
                     col_w - 0.24*inch, "Helvetica-Oblique", 7, DGRAY, 2)

    # Source line
    src_y = y - 2*(card_h + gap) + 0.05*inch
    c.setFillColorRGB(0.65, 0.65, 0.65)
    c.setFont("Helvetica", 6)
    c.drawString(0.4*inch, src_y, "Sources: Yardi Matrix · RealPage Q1 2026 · Newmark · Lumicre · Northmarq · Dallas Fed (March 2026) · FoxRidge House View")
    draw_bottom_band(c, src_y - 0.12*inch)


# ═══════════════════════════════════════════════════════════════════════════════
# PAGE 5 — RETURN MECHANICS
# ═══════════════════════════════════════════════════════════════════════════════
def page_returns(c):
    c.setFillColorRGB(*WHITE)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    draw_header(c, "04 · RETURN MECHANICS")
    draw_footer(c, 5)

    y = H - 0.75*inch
    section_label(c, "04 · RETURN MECHANICS", 0.4*inch, y)
    y -= 0.32*inch

    c.setFillColorRGB(*NAVY)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(0.4*inch, y, "Why Trough-Cycle Entry Is a Mathematical Edge")
    y -= 0.20*inch
    c.setFillColorRGB(*DGRAY)
    c.setFont("Helvetica", 9)
    draw_wrapped(c, ("Three effects compound simultaneously for investors who deploy capital at the cycle trough. "
                     "Each is independent — together they produce return profiles unavailable at any other point in the cycle. "
                     "Illustrative model: $30M acquisition, 200 units, 65% LTV."),
                 0.4*inch, y, W - 0.8*inch, "Helvetica", 9, DGRAY, 2)
    y -= 0.55*inch

    # Return scenarios table
    col_w_main = 2.4*inch
    col_w_base = 1.5*inch
    col_w_up   = 1.5*inch
    table_w = col_w_main + col_w_base + col_w_up
    tx = (W - table_w) / 2

    # Header
    c.setFillColorRGB(*NAVY)
    c.rect(tx, y - 0.22*inch, table_w, 0.22*inch, fill=1, stroke=0)
    c.setFillColorRGB(*WHITE)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(tx + 0.08*inch, y - 0.14*inch, "METRIC")
    c.drawCentredString(tx + col_w_main + col_w_base/2, y - 0.14*inch, "BASE CASE")
    c.setFillColorRGB(*GOLD)
    c.drawCentredString(tx + col_w_main + col_w_base + col_w_up/2, y - 0.14*inch, "UPSIDE CASE")

    rows_ret = [
        ("Going-In Cap Rate",       "6.25%",    "6.50%"),
        ("Year 1 Rent Growth",      "0.0%",     "1.5%"),
        ("Year 2–5 Avg Rent Growth","3.0%",     "4.5%"),
        ("Exit Cap Rate (Year 5)",  "5.75%",    "5.25%"),
        ("LP IRR (5-year)",         "15–17%",   "19–22%"),
        ("LP Equity Multiple",      "1.9x",     "2.2x"),
        ("LP Avg Cash-on-Cash",     "6.5%",     "7.5%"),
    ]
    highlight_rows = {4, 5}  # LP IRR and Multiple
    ry = y - 0.22*inch
    for j, (metric, base, upside) in enumerate(rows_ret):
        bg = LGRAY if j % 2 == 0 else WHITE
        c.setFillColorRGB(*bg)
        c.rect(tx, ry - 0.20*inch, table_w, 0.20*inch, fill=1, stroke=0)
        c.setFillColorRGB(*NAVY if j in highlight_rows else DKTEXT)
        c.setFont("Helvetica-Bold" if j in highlight_rows else "Helvetica", 8)
        c.drawString(tx + 0.08*inch, ry - 0.13*inch, metric)
        c.setFillColorRGB(*NAVY if j in highlight_rows else DGRAY)
        c.setFont("Helvetica-Bold" if j in highlight_rows else "Helvetica", 8)
        c.drawCentredString(tx + col_w_main + col_w_base/2, ry - 0.13*inch, base)
        c.setFillColorRGB(*GOLD if j in highlight_rows else DGRAY)
        c.setFont("Helvetica-Bold" if j in highlight_rows else "Helvetica", 8)
        c.drawCentredString(tx + col_w_main + col_w_base + col_w_up/2, ry - 0.13*inch, upside)
        ry -= 0.20*inch

    c.setFillColorRGB(0.70, 0.70, 0.70)
    c.setFont("Helvetica", 6)
    c.drawCentredString(W/2, ry - 0.06*inch, "These are illustrative — every deal is underwritten independently. Past performance is not indicative of future results.")

    y = ry - 0.30*inch

    # Standard terms
    c.setFillColorRGB(*NAVY)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(0.4*inch, y, "Standard Investment Terms")
    y -= 0.22*inch

    terms = [
        ("Structure",          "506(c) single-asset syndications — accredited investors only"),
        ("Minimum Investment", "$50,000 (anchor: $1M+)"),
        ("Hold Period",        "5 years (flexible to refi / extend)"),
        ("Target LP IRR",      "15–18%"),
        ("Target Equity Multiple", "1.9–2.1x"),
        ("Preferred Return",   "7–9% (deal-dependent)"),
        ("Profit Split",       "70% LP / 30% GP (typical)"),
        ("Distributions",      "Quarterly after stabilisation"),
        ("Tax Benefits",       "Cost segregation + bonus depreciation"),
        ("Reporting",          "Quarterly LP reports + K-1 by March"),
    ]

    col_w_t = (W - 0.8*inch) / 2
    for i, (lbl, val) in enumerate(terms):
        col = i % 2
        row = i // 2
        tx2 = 0.4*inch + col * col_w_t
        ty = y - row * 0.22*inch
        c.setFillColorRGB(*LGRAY if (row % 2 == 0) else WHITE)
        c.rect(tx2, ty - 0.18*inch, col_w_t - 0.05*inch, 0.18*inch, fill=1, stroke=0)
        c.setFillColorRGB(*DGRAY)
        c.setFont("Helvetica", 7.5)
        c.drawString(tx2 + 0.06*inch, ty - 0.12*inch, lbl)
        c.setFillColorRGB(*NAVY)
        c.setFont("Helvetica-Bold", 7.5)
        c.drawRightString(tx2 + col_w_t - 0.10*inch, ty - 0.12*inch, val)

    y -= (5 * 0.22*inch + 0.25*inch)

    # Strategy statement
    c.setFillColorRGB(*NAVY)
    c.rect(0.4*inch, y - 0.70*inch, W - 0.8*inch, 0.70*inch, fill=1, stroke=0)
    c.setFillColorRGB(*GOLD)
    c.setFont("Helvetica-Bold", 16)
    c.drawCentredString(W/2, y - 0.28*inch, "Buy at Trough.  Hold Through Recovery.  Exit at the Peak.")
    c.setFillColorRGB(0.70, 0.70, 0.70)
    c.setFont("Helvetica", 8)
    c.drawCentredString(W/2, y - 0.48*inch, "Entry at 6.25%+ going-in cap  ·  5-year hold  ·  Exit at 5.75% base / 5.25% upside  ·  15–18% LP IRR target")
    draw_bottom_band(c, y - 0.75*inch)


# ═══════════════════════════════════════════════════════════════════════════════
# PAGE 6 — RISKS
# ═══════════════════════════════════════════════════════════════════════════════
def page_risks(c):
    c.setFillColorRGB(*LGRAY)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    draw_header(c, "05 · RISKS — HONESTLY ASSESSED")
    draw_footer(c, 6)

    y = H - 0.75*inch
    section_label(c, "05 · RISKS — HONESTLY ASSESSED", 0.4*inch, y)
    y -= 0.32*inch

    c.setFillColorRGB(*NAVY)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(0.4*inch, y, "What Could Go Wrong, and How We Mitigate It")
    y -= 0.20*inch
    c.setFillColorRGB(*DGRAY)
    c.setFont("Helvetica-Oblique", 9)
    c.drawString(0.4*inch, y, '"Any sponsor who tells you there are no risks in Texas multifamily in 2026 is not worth your capital."')
    y -= 0.35*inch

    risks = [
        ("HIGH", "Texas Property Tax Reassessment",
         "When a Texas multifamily property changes hands, the appraisal district resets assessed value to transaction basis. "
         "A $30M acquisition previously assessed at $18M can trigger ~$200K/year of incremental tax expense.",
         "FoxRidge underwrites property taxes at 2.0–2.5% of purchase price annually in Year 1 — never at T-12 actuals. "
         "The single most common underwriting error in Texas acquisitions."),
        ("HIGH", "Insurance Cost Escalation",
         "Texas multifamily insurance has risen 60–120% since 2020, driven by Gulf hurricane exposure, hailstorm losses, "
         "and reinsurance dislocation. Annual premiums in coastal Houston now exceed $1,200/unit.",
         "FoxRidge maintains direct broker relationships and rebids insurance at acquisition. Deductible structures and "
         "roof/exterior upgrade capex programmes reduce loss frequency and premium exposure."),
        ("MEDIUM", "Concession Burn-Off Takes Time",
         "Dallas Fed (March 2026) confirmed concessions of 6–8 weeks of free rent remain widespread across Texas markets, "
         "with Austin and Dallas leading at 10–12 weeks in some submarkets.",
         "FoxRidge models Year 1 effective rent at face rate minus 6–8 weeks of concessions regardless of broker pro forma. "
         "Year 1 free cash flow is realistic, not optimistic."),
        ("MEDIUM", "Immigration Enforcement Impact",
         "Federal immigration enforcement reduced 2025 population growth in Texas and Florida, impacting Class B/C "
         "workforce housing renter demand and paradoxically reducing future supply via construction labour shortages.",
         "FoxRidge focuses on Class B+/A with employed, school-district-anchored renter cohorts — meaningfully less "
         "exposed than Class C workforce housing."),
        ("MEDIUM", "Interest Rate Path Uncertainty",
         "Fed Funds at 3.50% as of April 2026. JPMorgan and others now project zero cuts in 2026. MBA forecasts "
         "potential 2027 rate hike. Agency debt at 6.0–6.5% may persist longer than expected.",
         "FoxRidge stress-tests every deal at exit refinance rates of 5.75% (not 5.0%) and underwrites positive "
         "leverage at acquisition. We do not depend on rate cuts to make a deal work."),
    ]

    impact_colors = {
        "HIGH": (0.75, 0.15, 0.15),
        "MEDIUM": AMBER,
    }

    card_h = 1.45*inch
    gap = 0.10*inch
    for i, (impact, title, risk_desc, mitigation) in enumerate(risks):
        cy = y - i * (card_h + gap)
        c.setFillColorRGB(*WHITE)
        c.roundRect(0.4*inch, cy - card_h, W - 0.8*inch, card_h, 3, fill=1, stroke=0)

        # Impact badge
        ic = impact_colors[impact]
        c.setFillColorRGB(*ic)
        c.roundRect(0.52*inch, cy - 0.28*inch, 0.55*inch, 0.18*inch, 2, fill=1, stroke=0)
        c.setFillColorRGB(*WHITE)
        c.setFont("Helvetica-Bold", 7)
        c.drawCentredString(0.52*inch + 0.275*inch, cy - 0.21*inch, impact)

        # Title
        c.setFillColorRGB(*NAVY)
        c.setFont("Helvetica-Bold", 9.5)
        c.drawString(1.15*inch, cy - 0.22*inch, title)

        # Two columns: Risk | Mitigation
        col_w = (W - 1.0*inch) / 2
        # Risk column
        c.setFillColorRGB(*DGRAY)
        c.setFont("Helvetica-Bold", 7)
        c.drawString(0.52*inch, cy - 0.42*inch, "RISK")
        draw_wrapped(c, risk_desc, 0.52*inch, cy - 0.55*inch, col_w - 0.15*inch, "Helvetica", 7, DGRAY, 2)
        # Mitigation column
        mx = 0.52*inch + col_w
        c.setFillColorRGB(*NAVY)
        c.setFont("Helvetica-Bold", 7)
        c.drawString(mx, cy - 0.42*inch, "FOXRIDGE MITIGATION")
        draw_wrapped(c, mitigation, mx, cy - 0.55*inch, col_w - 0.15*inch, "Helvetica", 7, DGRAY, 2)

    # Underwriting philosophy
    phi_y = y - 5*(card_h + gap) - 0.05*inch
    c.setFillColorRGB(*NAVY)
    c.rect(0.4*inch, phi_y - 0.55*inch, W - 0.8*inch, 0.55*inch, fill=1, stroke=0)
    c.setFillColorRGB(*GOLD)
    c.setFont("Helvetica-BoldOblique", 8.5)
    c.drawCentredString(W/2, phi_y - 0.22*inch,
        '"A disciplined sponsor is identified by what they underwrite out of, not what they underwrite in."')
    c.setFillColorRGB(0.70, 0.70, 0.70)
    c.setFont("Helvetica", 7)
    c.drawCentredString(W/2, phi_y - 0.38*inch, "FOXRIDGE UNDERWRITING PHILOSOPHY")
    draw_bottom_band(c, phi_y - 0.60*inch)


# ═══════════════════════════════════════════════════════════════════════════════
# PAGE 7 — THE TEAM + CONTACT + QR CODE
# ═══════════════════════════════════════════════════════════════════════════════
def page_team(c):
    c.setFillColorRGB(*WHITE)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    draw_header(c, "06 · THE TEAM")
    draw_footer(c, 7)

    y = H - 0.75*inch
    section_label(c, "06 · THE TEAM", 0.4*inch, y)
    y -= 0.32*inch

    c.setFillColorRGB(*NAVY)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(0.4*inch, y, "Two Operators, One Focused Platform")
    y -= 0.20*inch
    c.setFillColorRGB(*DGRAY)
    c.setFont("Helvetica", 9)
    draw_wrapped(c, ("FoxRidge Equity Partners is a multifamily syndication platform built on two principals with "
                     "complementary backgrounds in Texas operations and capital markets. Single-asset deal structure — "
                     "LPs see every deal and elect individually. Principals co-invest personally on every deal."),
                 0.4*inch, y, W - 0.8*inch, "Helvetica", 9, DGRAY, 2)
    y -= 0.55*inch

    # Two portrait photos
    photo_w = 1.55*inch
    photo_h = 1.95*inch
    gap_between = 0.18*inch

    # Left: Mikhail
    mx = 0.4*inch
    try:
        mik = load_img(f"{IMGS}/mikhail.jpg")
        mik_crop = portrait_crop(mik, photo_w, photo_h)
        mik_crop = mik_crop.resize((int(photo_w*3), int(photo_h*3)), Image.LANCZOS)
        c.drawImage(pil_to_rl(mik_crop), mx, y - photo_h, photo_w, photo_h)
        c.setStrokeColorRGB(*GOLD)
        c.setLineWidth(1.5)
        c.rect(mx, y - photo_h, photo_w, photo_h, fill=0, stroke=1)
    except:
        c.setFillColorRGB(*LGRAY)
        c.rect(mx, y - photo_h, photo_w, photo_h, fill=1, stroke=0)

    # Right: Slava
    sx = mx + photo_w + gap_between
    try:
        slava = load_img(f"{IMGS}/slava_new.webp")
        slava_crop = portrait_crop(slava, photo_w, photo_h)
        slava_crop = slava_crop.resize((int(photo_w*3), int(photo_h*3)), Image.LANCZOS)
        c.drawImage(pil_to_rl(slava_crop), sx, y - photo_h, photo_w, photo_h)
        c.setStrokeColorRGB(*GOLD)
        c.setLineWidth(1.5)
        c.rect(sx, y - photo_h, photo_w, photo_h, fill=0, stroke=1)
    except:
        c.setFillColorRGB(*LGRAY)
        c.rect(sx, y - photo_h, photo_w, photo_h, fill=1, stroke=0)

    # Bio text column (right of photos)
    bio_x = sx + photo_w + 0.22*inch
    bio_w = W - bio_x - 0.4*inch
    bio_y = y

    # Mikhail bio
    c.setFillColorRGB(*NAVY)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(bio_x, bio_y, "Mikhail Pritsker")
    c.setFillColorRGB(*GOLD)
    c.setFont("Helvetica", 7.5)
    c.drawString(bio_x, bio_y - 0.16*inch, "MANAGING PARTNER  ·  MIAMI, FL")
    bio_y -= 0.35*inch
    draw_wrapped(c, ("MBA, Chicago Booth. CCIM. Capital markets, investor relations, multifamily and mixed-use "
                     "across multiple cycles. Leads LP relationships, debt placement via Newmark, and investor reporting."),
                 bio_x, bio_y, bio_w, "Helvetica", 8, DGRAY, 2)
    bio_y -= 0.60*inch

    # Slava bio
    c.setFillColorRGB(*NAVY)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(bio_x, bio_y, "Slava Davidenko")
    c.setFillColorRGB(*GOLD)
    c.setFont("Helvetica", 7.5)
    c.drawString(bio_x, bio_y - 0.16*inch, "MANAGING PARTNER  ·  AUSTIN, TX")
    bio_y -= 0.35*inch
    draw_wrapped(c, ("MBA, Chicago Booth. Texas multifamily operator with a portfolio spanning 5,000+ units across "
                     "acquisitions, asset management, and capital partnerships. Leads deal origination and operational "
                     "execution across Houston, DFW, and San Antonio."),
                 bio_x, bio_y, bio_w, "Helvetica", 8, DGRAY, 2)

    # Combined stats below photos
    stat_y = y - photo_h - 0.22*inch
    team_stats = [
        ("$1B+", "COMBINED TRANSACTION EXPERIENCE"),
        ("8", "FULL-CYCLE LP EXITS"),
        ("42%", "BEST DEAL LP IRR"),
        ("Deal-by-Deal", "NOT A BLIND POOL"),
    ]
    stat_col_w = (photo_w * 2 + gap_between) / 4
    for i, (val, lbl) in enumerate(team_stats):
        stx = 0.4*inch + i * stat_col_w
        c.setFillColorRGB(*LGRAY)
        c.rect(stx, stat_y - 0.55*inch, stat_col_w - 0.04*inch, 0.55*inch, fill=1, stroke=0)
        c.setFillColorRGB(*GOLD)
        c.setFont("Helvetica-Bold", 13)
        c.drawCentredString(stx + (stat_col_w - 0.04*inch)/2, stat_y - 0.25*inch, val)
        c.setFillColorRGB(*NAVY)
        c.setFont("Helvetica", 5.5)
        draw_wrapped(c, lbl, stx + 0.04*inch, stat_y - 0.38*inch,
                     stat_col_w - 0.10*inch, "Helvetica", 5.5, NAVY, 1)

    # Contact + QR code section
    contact_y = stat_y - 0.55*inch - 0.22*inch

    # Left: contact info
    c.setFillColorRGB(*NAVY)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(0.4*inch, contact_y, "Get in Touch")
    contact_y -= 0.22*inch

    contact_items = [
        ("Email",   "partners@foxridgeequity.com"),
        ("Web",     "foxridgeequity.com"),
        ("Offices", "Austin, TX  ·  Miami, FL"),
    ]
    for lbl, val in contact_items:
        c.setFillColorRGB(*DGRAY)
        c.setFont("Helvetica", 8)
        c.drawString(0.4*inch, contact_y, f"{lbl}:")
        c.setFillColorRGB(*NAVY)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(0.9*inch, contact_y, val)
        contact_y -= 0.20*inch

    # QR code (right side)
    qr_size = 1.10*inch
    qr_x = W - 0.4*inch - qr_size
    qr_y = stat_y - 0.55*inch - 0.20*inch
    qr_img = make_qr("https://foxridgeequity.com", qr_size)
    c.drawImage(qr_img, qr_x, qr_y - qr_size, qr_size, qr_size)
    c.setStrokeColorRGB(*GOLD)
    c.setLineWidth(1.0)
    c.rect(qr_x, qr_y - qr_size, qr_size, qr_size, fill=0, stroke=1)
    c.setFillColorRGB(*NAVY)
    c.setFont("Helvetica-Bold", 7)
    c.drawCentredString(qr_x + qr_size/2, qr_y - qr_size - 0.14*inch, "Scan to visit")
    c.setFillColorRGB(*GOLD)
    c.setFont("Helvetica-Bold", 7)
    c.drawCentredString(qr_x + qr_size/2, qr_y - qr_size - 0.25*inch, "foxridgeequity.com")

    # Disclaimer — anchor below BOTH contact column and QR code
    qr_bottom = qr_y - qr_size - 0.32*inch  # bottom of QR + captions
    disc_y = min(contact_y - 0.18*inch, qr_bottom - 0.10*inch)
    c.setStrokeColorRGB(*MGRAY)
    c.setLineWidth(0.5)
    c.line(0.4*inch, disc_y, W - 0.4*inch, disc_y)
    disc_y -= 0.12*inch
    disclaimer = ("This document is for informational purposes only and does not constitute an offer to sell or "
                  "solicitation to buy any security. FoxRidge Equity Partners offers securities only through Rule 506(c) "
                  "private placements to verified accredited investors. Investments in real estate are speculative and "
                  "involve substantial risk, including potential loss of principal. Past performance is not indicative of "
                  "future results. Prospective investors should consult their own legal, tax, and financial advisors. "
                  "© 2026 FoxRidge Equity Partners. All rights reserved.")
    disc_end = draw_wrapped(c, disclaimer, 0.4*inch, disc_y, W - 0.8*inch, "Helvetica", 6, (0.55, 0.55, 0.55), 1.5)
    draw_bottom_band(c, disc_end - 0.15*inch)


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN — Build PDF
# ═══════════════════════════════════════════════════════════════════════════════
def main():
    c = canvas.Canvas(OUT, pagesize=letter)
    c.setTitle("FoxRidge Equity Partners — Texas Triangle Multifamily 2026")
    c.setAuthor("FoxRidge Equity Partners")
    c.setSubject("Texas Triangle Multifamily Investment Thesis Q2 2026")

    page_cover(c);   c.showPage()
    page_thesis(c);  c.showPage()
    page_supply(c);  c.showPage()
    page_markets(c); c.showPage()
    page_returns(c); c.showPage()
    page_risks(c);   c.showPage()
    page_team(c);    c.showPage()

    c.save()
    size = os.path.getsize(OUT) / 1024
    print(f"✅ PDF saved: {OUT}  ({size:.0f} KB)")

if __name__ == "__main__":
    main()
