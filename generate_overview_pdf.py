#!/usr/bin/env python3
"""
FoxRidge Equity Partners — Company Overview PDF (2-page, canvas-based)
"""
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.lib.utils import ImageReader
from reportlab.platypus import Paragraph, Frame, KeepInFrame
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from PIL import Image as PILImage
import io, os

W, H = letter  # 612 x 792

# Colors
NAVY      = colors.HexColor("#1E3A6E")
GOLD      = colors.HexColor("#B8942A")
GOLD_L    = colors.HexColor("#D4AF5A")
S50       = colors.HexColor("#FAFAF9")
S100      = colors.HexColor("#F5F5F4")
S200      = colors.HexColor("#E7E5E4")
S400      = colors.HexColor("#A8A29E")
S600      = colors.HexColor("#57534E")
S900      = colors.HexColor("#1C1917")
WHITE     = colors.white

BASE      = "/home/ubuntu/fox_ridge_site/client/public"
LOGO      = f"{BASE}/images/logo-white-new.jpeg"
MIKHAIL   = f"{BASE}/images/mikhail.jpg"
SLAVA     = f"{BASE}/images/slava.webp"
OUTPUT    = f"{BASE}/FoxRidge_Company_Overview.pdf"

def load_photo(path, tw, th):
    """Load, crop-center, and return an ImageReader at target aspect ratio."""
    img = PILImage.open(path)
    if img.mode in ('RGBA','LA','P'):
        bg = PILImage.new('RGB', img.size, (255,255,255))
        if img.mode == 'P': img = img.convert('RGBA')
        bg.paste(img, mask=img.split()[-1] if 'A' in img.mode else None)
        img = bg
    elif img.mode != 'RGB':
        img = img.convert('RGB')
    iw, ih = img.size
    tr = tw/th
    cr = iw/ih
    if cr > tr:
        nw = int(ih*tr); left=(iw-nw)//2
        img = img.crop((left,0,left+nw,ih))
    else:
        nh = int(iw/tr); top=0
        img = img.crop((0,top,iw,top+nh))
    buf = io.BytesIO()
    img.save(buf,'JPEG',quality=88)
    buf.seek(0)
    return ImageReader(buf)

def hline(c, x, y, w, thickness=0.4, color=None):
    c.setStrokeColor(color or S200)
    c.setLineWidth(thickness)
    c.line(x, y, x+w, y)

def rect_fill(c, x, y, w, h, color):
    c.setFillColor(color)
    c.rect(x, y, w, h, fill=1, stroke=0)

def label(c, text, x, y, size=6.5, color=None, bold=False):
    c.setFillColor(color or S400)
    c.setFont("Helvetica-Bold" if bold else "Helvetica", size)
    c.drawString(x, y, text)

def rlabel(c, text, x, y, size=6.5, color=None, bold=False):
    c.setFillColor(color or S400)
    c.setFont("Helvetica-Bold" if bold else "Helvetica", size)
    c.drawRightString(x, y, text)

def clabel(c, text, x, y, size=6.5, color=None, bold=False):
    c.setFillColor(color or S400)
    c.setFont("Helvetica-Bold" if bold else "Helvetica", size)
    c.drawCentredString(x, y, text)

def wrap_text(text, font, size, max_w):
    """Simple word-wrap returning list of lines."""
    import re
    # Strip basic HTML tags for plain rendering
    plain = re.sub(r'<[^>]+>', '', text)
    words = plain.split()
    lines = []
    current = ''
    from reportlab.pdfbase.pdfmetrics import stringWidth
    for word in words:
        test = (current + ' ' + word).strip()
        if stringWidth(test, font, size) <= max_w:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines

def para_block(c, text, x, y, w, h, size=8, color=None, bold=False, leading=None, align=TA_JUSTIFY):
    """Render a paragraph using direct canvas text drawing."""
    font = 'Helvetica-Bold' if bold else 'Helvetica'
    lead = leading or size * 1.45
    lines = wrap_text(text, font, size, w)
    c.setFillColor(color or S600)
    c.setFont(font, size)
    ty = y + h - size  # start from top of frame
    for line in lines:
        if ty < y:
            break
        c.drawString(x, ty, line)
        ty -= lead

def draw_header(c, full=True):
    """Navy header band."""
    hh = 1.4*inch if full else 0.5*inch
    rect_fill(c, 0, H-hh, W, hh, NAVY)
    rect_fill(c, 0, H-hh-2, W, 2, GOLD)
    if full:
        try:
            logo = ImageReader(LOGO)
            c.drawImage(logo, 0.45*inch, H-1.22*inch, width=1.0*inch, height=0.82*inch,
                        preserveAspectRatio=True, mask='auto')
        except: pass
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 15)
        c.drawString(1.65*inch, H-0.78*inch, "FOXRIDGE EQUITY PARTNERS")
        c.setFont("Helvetica", 8)
        c.setFillColor(GOLD_L)
        c.drawString(1.65*inch, H-1.0*inch, "INSTITUTIONAL DISCIPLINE.  ENTREPRENEURIAL EXECUTION.")
        c.setFillColor(WHITE)
        c.setFont("Helvetica", 7.5)
        c.drawRightString(W-0.45*inch, H-0.78*inch, "partners@foxridgeequity.com")
        c.drawRightString(W-0.45*inch, H-0.98*inch, "Austin, TX  |  Miami, FL")
    else:
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(0.45*inch, H-0.33*inch, "FOXRIDGE EQUITY PARTNERS")
        c.setFont("Helvetica", 7.5)
        c.drawRightString(W-0.45*inch, H-0.33*inch, "partners@foxridgeequity.com  |  foxridgeequity.com")

def draw_footer(c, page):
    rect_fill(c, 0, 0, W, 0.42*inch, NAVY)
    rect_fill(c, 0, 0.42*inch, W, 1.5, GOLD)
    c.setFillColor(WHITE)
    c.setFont("Helvetica", 6.2)
    c.drawString(0.45*inch, 0.16*inch,
        "This document is for informational purposes only and does not constitute an offer to sell or solicitation to buy any security. Past performance is not indicative of future results.")
    c.setFont("Helvetica-Bold", 6.5)
    c.drawRightString(W-0.45*inch, 0.16*inch, f"foxridgeequity.com  |  Page {page} of 2")

# ─────────────────────────────────────────────────────────────────────────────
# PAGE 1
# ─────────────────────────────────────────────────────────────────────────────
def page1(c):
    draw_header(c, full=True)
    draw_footer(c, 1)

    LM = 0.45*inch
    RM = W - 0.45*inch
    CW = RM - LM   # 5.55 inch
    y  = H - 1.55*inch  # start just below header+gold line

    # ── WHO WE ARE ────────────────────────────────────────────────────────────
    y -= 0.18*inch
    label(c, "WHO WE ARE", LM, y, size=6.5, color=GOLD, bold=True)
    y -= 0.22*inch
    c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 17)
    c.drawString(LM, y, "A Private Real Estate Investment Firm")
    y -= 0.14*inch
    hline(c, LM, y, CW, 0.5, S200)
    y -= 0.18*inch
    para_block(c,
        "Fox Ridge Equity Partners is a private real estate investment firm specializing in "
        "light value-add multifamily opportunities across high-growth Sun Belt markets. "
        "We operate on a <b>single-investor-per-deal model</b> — partnering with one ultra-high-net-worth "
        "individual, family office, or principal per acquisition. Typical check size: <b>$3–10M per deal</b>. "
        "We serve as the dedicated operational arm, delivering institutional-quality execution without "
        "requiring our partners to build an in-house team.",
        LM, y-0.55*inch, CW, 0.6*inch, size=8.5, color=S600, align=TA_JUSTIFY)
    y -= 0.72*inch

    # ── KEY STATS ─────────────────────────────────────────────────────────────
    y -= 0.08*inch
    stat_w = CW / 4
    stats = [("$1B+","Transaction Volume"),("7,000+","Units Invested"),("26%","Avg Project IRR"),("1.77x","Avg Equity Multiple")]
    for i,(val,lbl) in enumerate(stats):
        sx = LM + i*stat_w
        rect_fill(c, sx, y-0.62*inch, stat_w, 0.62*inch, S50)
        c.setStrokeColor(S200); c.setLineWidth(0.4)
        c.rect(sx, y-0.62*inch, stat_w, 0.62*inch, fill=0, stroke=1)
        rect_fill(c, sx, y, stat_w, 2, GOLD)
        c.setFillColor(GOLD); c.setFont("Helvetica-Bold", 18)
        c.drawCentredString(sx+stat_w/2, y-0.3*inch, val)
        c.setFillColor(S400); c.setFont("Helvetica", 7)
        c.drawCentredString(sx+stat_w/2, y-0.52*inch, lbl)
    y -= 0.72*inch

    # ── TWO COLUMNS ───────────────────────────────────────────────────────────
    y -= 0.18*inch
    col1_x = LM
    col2_x = LM + CW*0.5 + 0.1*inch
    col_w1 = CW*0.5 - 0.15*inch
    col_w2 = CW*0.5 - 0.05*inch
    col_top = y

    # Left: Investment Focus
    label(c, "INVESTMENT FOCUS", col1_x, y, size=6.5, color=GOLD, bold=True)
    y -= 0.2*inch
    c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 12)
    c.drawString(col1_x, y, "What We Do")
    y -= 0.14*inch
    para_block(c,
        "We acquire Class A and B multifamily assets built in 2000 or later, 100+ units, "
        "in high-growth Texas and Florida markets. Strategy: light value-add — targeted cosmetic "
        "improvements, operational repositioning, and AI-driven property management.",
        col1_x, y-0.42*inch, col_w1, 0.48*inch, size=8, color=S600, align=TA_JUSTIFY)
    y -= 0.56*inch

    label(c, "ACQUISITION CRITERIA", col1_x, y, size=6.5, color=GOLD, bold=True)
    y -= 0.17*inch
    criteria = ["Class A & B Multifamily","Vintage: 2000 and up","Size: 100+ units",
                "Markets: DFW · Houston · Austin · San Antonio · S. Florida","Strategy: Light Value-Add"]
    for item in criteria:
        c.setFillColor(GOLD); c.setFont("Helvetica-Bold", 8); c.drawString(col1_x, y, "•")
        c.setFillColor(S600); c.setFont("Helvetica", 8); c.drawString(col1_x+0.14*inch, y, item)
        y -= 0.155*inch

    y -= 0.06*inch
    label(c, "VALUE CREATION", col1_x, y, size=6.5, color=GOLD, bold=True)
    y -= 0.17*inch
    vc = ["Direct oversight of capital improvements","In-house property management control",
          "AI-driven operations & tenant management","Weekly KPI monitoring & transparent reporting"]
    for item in vc:
        c.setFillColor(GOLD); c.setFont("Helvetica-Bold", 8); c.drawString(col1_x, y, "•")
        c.setFillColor(S600); c.setFont("Helvetica", 8); c.drawString(col1_x+0.14*inch, y, item)
        y -= 0.155*inch

    # Vertical divider
    hline(c, col2_x-0.12*inch, col_top-2.4*inch, 0, 0.4, S200)
    c.setStrokeColor(S200); c.setLineWidth(0.4)
    c.line(col2_x-0.12*inch, col_top+0.05*inch, col2_x-0.12*inch, col_top-2.55*inch)

    # Right: How We Invest
    ry = col_top
    label(c, "OUR PROCESS", col2_x, ry, size=6.5, color=GOLD, bold=True)
    ry -= 0.2*inch
    c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 12)
    c.drawString(col2_x, ry, "How We Invest")
    ry -= 0.18*inch
    steps = [
        ("01  Source","Direct broker relationships — no listed deal flow."),
        ("02  Underwrite","Actual T-12 data only — never broker pro formas."),
        ("03  Diligence","Full physical, financial, and legal review."),
        ("04  Structure","Capital stacks tailored to each partner's profile."),
        ("05  Operate","Hands-on management from day one."),
        ("06  Exit","Timing-driven, multi-path, return-maximizing."),
    ]
    for num, desc in steps:
        hline(c, col2_x, ry+0.02*inch, col_w2, 0.3, S200)
        c.setFillColor(GOLD); c.setFont("Helvetica-Bold", 8); c.drawString(col2_x, ry-0.12*inch, num)
        c.setFillColor(S600); c.setFont("Helvetica", 8)
        c.drawString(col2_x+1.1*inch, ry-0.12*inch, desc)
        ry -= 0.32*inch

    # ── WHY SUN BELT BAND ─────────────────────────────────────────────────────
    band_y = 0.55*inch  # just above footer
    band_h = 0.72*inch
    rect_fill(c, 0, band_y, W, band_h, NAVY)
    rect_fill(c, 0, band_y+band_h, W, 2, GOLD)
    sb_stats = [("+8.8%","Population Growth","TX vs 3.1% national"),
                ("2.9%","DFW Job Growth","3rd among top 30 metros"),
                ("−50%","Supply Contraction","From 2022 peak"),
                ("+1.5%","Rent Re-Acceleration","Forecast 2027")]
    sw = W/4
    for i,(val,lbl,sub) in enumerate(sb_stats):
        sx = i*sw
        c.setFillColor(GOLD_L); c.setFont("Helvetica-Bold", 15)
        c.drawCentredString(sx+sw/2, band_y+0.42*inch, val)
        c.setFillColor(WHITE); c.setFont("Helvetica-Bold", 7)
        c.drawCentredString(sx+sw/2, band_y+0.24*inch, lbl)
        c.setFillColor(colors.HexColor("#6B7280")); c.setFont("Helvetica", 6.5)
        c.drawCentredString(sx+sw/2, band_y+0.1*inch, sub)
        if i > 0:
            c.setStrokeColor(colors.HexColor("#2D4F8A")); c.setLineWidth(0.4)
            c.line(sx, band_y+0.08*inch, sx, band_y+band_h-0.08*inch)

# ─────────────────────────────────────────────────────────────────────────────
# PAGE 2
# ─────────────────────────────────────────────────────────────────────────────
def page2(c):
    draw_header(c, full=False)
    draw_footer(c, 2)

    LM = 0.45*inch
    RM = W - 0.45*inch
    CW = RM - LM
    y  = H - 0.65*inch

    # ── THE TEAM ──────────────────────────────────────────────────────────────
    y -= 0.15*inch
    label(c, "THE TEAM", LM, y, size=6.5, color=GOLD, bold=True)
    y -= 0.22*inch
    c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 16)
    c.drawString(LM, y, "General Partners")
    y -= 0.13*inch
    hline(c, LM, y, CW, 0.5, S200)
    y -= 0.12*inch
    para_block(c,
        "Led by Mikhail Pritsker and Slava Davidenko, Fox Ridge Equity Partners brings over "
        "<b>$1 billion in combined transaction experience</b> and a hands-on approach to every asset.",
        LM, y-0.28*inch, CW, 0.32*inch, size=8.5, color=S600, align=TA_JUSTIFY)
    y -= 0.38*inch

    # ── PHOTO CARDS ───────────────────────────────────────────────────────────
    photo_w = 1.3*inch
    photo_h = 1.65*inch
    card_w  = CW/2 - 0.08*inch
    card_h  = 2.0*inch

    people = [
        (MIKHAIL, "Mikhail Pritsker", "CO-FOUNDER & MANAGING PARTNER",
         "Senior real estate investment executive with over <b>25 years of experience</b>. "
         "Overseen more than <b>$1B in real estate transactions</b> across multiple market cycles. "
         "Operates at the intersection of capital, operations, and trust.",
         "Asset & Portfolio Leadership · NOI Optimization · Investor Relations · Capital Strategy · AI & Analytics",
         "MBA, University of Chicago Booth  |  Engineering, MEPhI"),
        (SLAVA, "Slava Davidenko", "CO-FOUNDER & MANAGING PARTNER",
         "Serial entrepreneur and investor with over <b>25 years of experience</b>. "
         "Managed and invested more than <b>$600M across diversified projects</b>. "
         "Built a portfolio exceeding <b>7,000 units across 36 properties</b>.",
         "Institutional Wealth Mgmt · Real Estate at Scale · Entrepreneurship · AI & Modern Practices · Capital Raising",
         "8 full-cycle GP exits · Best deal: <b>42% IRR</b> · MD, Renaissance Capital ($500M AUM)"),
    ]

    for i,(photo_path,name,title,bio,strengths,extra) in enumerate(people):
        cx = LM + i*(card_w + 0.16*inch)
        # Card background
        rect_fill(c, cx, y-card_h, card_w, card_h, S50)
        c.setStrokeColor(S200); c.setLineWidth(0.4)
        c.rect(cx, y-card_h, card_w, card_h, fill=0, stroke=1)
        rect_fill(c, cx, y, card_w, 2, GOLD)
        # Photo
        try:
            ph = load_photo(photo_path, photo_w, photo_h)
            c.drawImage(ph, cx+0.1*inch, y-photo_h-0.1*inch, width=photo_w, height=photo_h)
        except Exception as e:
            print(f"Photo err: {e}")
        # Text next to photo
        tx = cx + photo_w + 0.2*inch
        tw = card_w - photo_w - 0.3*inch
        ty = y - 0.15*inch
        c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 11)
        c.drawString(tx, ty, name)
        ty -= 0.17*inch
        c.setFillColor(GOLD); c.setFont("Helvetica", 6.5)
        c.drawString(tx, ty, title)
        ty -= 0.16*inch
        para_block(c, bio, tx, ty-0.44*inch, tw, 0.5*inch, size=7.5, color=S600, align=TA_LEFT)
        ty -= 0.58*inch
        label(c, "STRENGTHS", tx, ty, size=6, color=GOLD, bold=True)
        ty -= 0.14*inch
        para_block(c, strengths, tx, ty-0.36*inch, tw, 0.42*inch, size=7, color=S600, align=TA_LEFT)
        ty -= 0.5*inch
        label(c, "EDUCATION / TRACK RECORD", tx, ty, size=6, color=GOLD, bold=True)
        ty -= 0.14*inch
        para_block(c, extra, tx, ty-0.36*inch, tw, 0.42*inch, size=7, color=S600, align=TA_LEFT)

    y -= card_h + 0.18*inch

    # ── TRACK RECORD TABLE ────────────────────────────────────────────────────
    hline(c, LM, y, CW, 0.5, S200)
    y -= 0.15*inch
    label(c, "TRACK RECORD — REALIZED INVESTMENTS", LM, y, size=6.5, color=GOLD, bold=True)
    y -= 0.2*inch
    c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 12)
    c.drawString(LM, y, "Selected Portfolio")
    y -= 0.18*inch

    # Table header
    cols = [1.35, 1.05, 0.38, 0.5, 0.5, 0.44, 0.5, 0.43]  # inches
    cols_pt = [v*inch for v in cols]
    headers = ["Deal","Location","Units","Buy","Sale","Value+","Equity","IRR"]
    row_h = 0.2*inch
    hdr_h = 0.22*inch

    # Header row
    rect_fill(c, LM, y-hdr_h, CW, hdr_h, NAVY)
    rect_fill(c, LM, y, CW, 2, GOLD)
    c.setFillColor(WHITE); c.setFont("Helvetica-Bold", 7)
    cx = LM
    for j,h in enumerate(headers):
        if j < 2:
            c.drawString(cx+3, y-hdr_h+0.07*inch, h)
        else:
            c.drawCentredString(cx+cols_pt[j]/2, y-hdr_h+0.07*inch, h)
        cx += cols_pt[j]
    y -= hdr_h

    # Data rows
    deals = [
        ("El Ranchito / Milagro","Fort Worth, TX","68","$2.5M","$3.8M","+52%","1.42x","42%"),
        ("Westcreek Townhomes","Fort Worth, TX","50","$6.7M","$10.0M","+49%","1.79x","26%"),
        ("Antigua Village","Fort Worth, TX","152","$8.8M","$13.7M","+55%","2.27x","23%"),
        ("Copper Creek Apts","Fort Worth, TX","274","$23.6M","$32.7M","+39%","1.66x","25%"),
        ("Crescent Village & Plaza","Wichita Falls, TX","88","$6.6M","$9.9M","+50%","1.87x","26%"),
        ("Village on West Irving","Irving, TX","91","$7.9M","$11.0M","+40%","1.59x","16%"),
    ]
    for ri, row in enumerate(deals):
        bg = WHITE if ri%2==0 else S50
        rect_fill(c, LM, y-row_h, CW, row_h, bg)
        c.setStrokeColor(S200); c.setLineWidth(0.3)
        c.line(LM, y-row_h, LM+CW, y-row_h)
        cx = LM
        for j,cell in enumerate(row):
            c.setFillColor(S600); c.setFont("Helvetica", 7.5)
            if j < 2:
                c.drawString(cx+3, y-row_h+0.06*inch, cell)
            else:
                c.drawCentredString(cx+cols_pt[j]/2, y-row_h+0.06*inch, cell)
            cx += cols_pt[j]
        y -= row_h

    # Portfolio total row
    rect_fill(c, LM, y-row_h, CW, row_h, NAVY)
    total = ("PORTFOLIO TOTAL","6 Exits","723","$56M","$81M","+44%","1.77x","26%")
    cx = LM
    for j,cell in enumerate(total):
        if j in (5,6,7):
            c.setFillColor(GOLD_L)
        else:
            c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 7.5)
        if j < 2:
            c.drawString(cx+3, y-row_h+0.06*inch, cell)
        else:
            c.drawCentredString(cx+cols_pt[j]/2, y-row_h+0.06*inch, cell)
        cx += cols_pt[j]
    y -= row_h + 0.12*inch

    # ── ACTIVE PORTFOLIO ──────────────────────────────────────────────────────
    ap_h = 0.52*inch
    rect_fill(c, LM, y-ap_h, CW, ap_h, S50)
    c.setStrokeColor(S200); c.setLineWidth(0.4)
    c.rect(LM, y-ap_h, CW, ap_h, fill=0, stroke=1)
    rect_fill(c, LM, y, CW, 2, GOLD)
    c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 7.5)
    c.drawString(LM+0.1*inch, y-0.18*inch, "ACTIVE PORTFOLIO — 1,347 UNITS UNDER MANAGEMENT")
    active = ["Royal Spring · Spring, TX · 351 units · Class A",
              "Royal Sienna · Missouri City, TX · 330 units · Class A",
              "The Sarah at Lake Houston · Humble, TX · 350 units · Class A+",
              "The Gallery at Katy · Katy, TX · 316 units · Class B"]
    aw = CW/4
    for i,prop in enumerate(active):
        ax = LM + i*aw
        # Use paragraph for wrapping
        para_block(c, prop, ax+0.05*inch, y-ap_h+0.06*inch, aw-0.1*inch, 0.3*inch, size=6.8, color=S600, align=TA_CENTER)
        if i>0:
            c.setStrokeColor(S200); c.setLineWidth(0.3)
            c.line(ax, y-ap_h+0.06*inch, ax, y-0.22*inch)
    y -= ap_h + 0.12*inch

    # ── CTA BOX ───────────────────────────────────────────────────────────────
    cta_h = 0.5*inch
    c.setStrokeColor(GOLD); c.setLineWidth(1.5)
    rect_fill(c, LM, y-cta_h, CW, cta_h, S50)
    c.rect(LM, y-cta_h, CW, cta_h, fill=0, stroke=1)
    c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 9)
    c.drawCentredString(W/2, y-0.2*inch, "Ready to explore a partnership?")
    c.setFillColor(GOLD); c.setFont("Helvetica", 8.5)
    c.drawCentredString(W/2, y-0.38*inch, "partners@foxridgeequity.com  |  foxridgeequity.com")


# ─────────────────────────────────────────────────────────────────────────────
# RENDER
# ─────────────────────────────────────────────────────────────────────────────
def build():
    c = canvas.Canvas(OUTPUT, pagesize=letter)
    c.setTitle("FoxRidge Equity Partners — Company Overview")
    c.setAuthor("FoxRidge Equity Partners")
    c.setSubject("Private Real Estate Investment — Sun Belt Multifamily")

    page1(c)
    c.showPage()
    page2(c)
    c.save()
    print(f"PDF saved: {OUTPUT}")

if __name__ == "__main__":
    build()
