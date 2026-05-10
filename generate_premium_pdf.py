#!/usr/bin/env python3
"""
FoxRidge Equity Partners — Premium Company Overview PDF
Graphic-forward, minimal text density, institutional quality
"""

import os
import math
from PIL import Image, ImageDraw, ImageFilter
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
import io

# ── Brand Colors ────────────────────────────────────────────────────────────
NAVY       = HexColor('#1E3A6E')
NAVY_DARK  = HexColor('#0F1F3D')
GOLD       = HexColor('#B8942A')
GOLD_LIGHT = HexColor('#D4AF50')
WHITE      = HexColor('#FFFFFF')
STONE      = HexColor('#F5F2EE')
STONE_MID  = HexColor('#E8E3DC')
TEXT_DARK  = HexColor('#1A1A1A')
TEXT_MID   = HexColor('#4A4A4A')
TEXT_LIGHT = HexColor('#7A7A7A')

# ── Paths ────────────────────────────────────────────────────────────────────
BASE = '/home/ubuntu/fox_ridge_site/client/public'
IMG  = os.path.join(BASE, 'images')
OUT  = os.path.join(BASE, 'FoxRidge_Company_Overview.pdf')

GARDEN_IMG  = os.path.join(IMG, 'hero-strategy-garden.jpg')
MIKHAIL_IMG = os.path.join(IMG, 'mikhail.jpg')
SLAVA_IMG   = os.path.join(IMG, 'slava.webp')
LOGO_WHITE  = os.path.join(IMG, 'logo-white-new.jpeg')

W, H = letter  # 612 x 792 pts

# ── Helper: PIL → ReportLab ImageReader ─────────────────────────────────────────────────────
def pil_to_rl(pil_img, fmt='JPEG', quality=72):
    buf = io.BytesIO()
    if pil_img.mode in ('RGBA', 'LA') and fmt == 'JPEG':
        pil_img = pil_img.convert('RGB')
    if fmt == 'JPEG':
        pil_img.save(buf, format=fmt, quality=quality, optimize=True)
    else:
        pil_img.save(buf, format=fmt)
    buf.seek(0)
    from reportlab.lib.utils import ImageReader
    return ImageReader(buf)

# ── Helper: circular crop ────────────────────────────────────────────────────
def portrait_crop(path, w, h):
    """Crop image to w x h portrait rectangle, centered horizontally, top-aligned vertically."""
    img = Image.open(path).convert('RGB')
    iw, ih = img.size
    # Scale so width fills w, then crop height
    scale = w / iw
    new_w = w
    new_h = int(ih * scale)
    if new_h < h:
        # Scale by height instead
        scale = h / ih
        new_w = int(iw * scale)
        new_h = h
    img_scaled = img.resize((new_w, new_h), Image.LANCZOS)
    # Crop: center horizontally, top-align vertically
    left = (new_w - w) // 2
    top = 0
    return img_scaled.crop((left, top, left + w, top + h))

def circle_crop(path, size, face_y_pct=0.28):
    """Legacy — kept for compatibility but not used for leadership photos."""
    return portrait_crop(path, size, size)

# ── Helper: gold rule + section label ───────────────────────────────────────
def section_label(c, x, y, text):
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.5)
    c.line(x, y + 4, x + 0.32*inch, y + 4)
    c.setFont('Helvetica-Bold', 6.5)
    c.setFillColor(GOLD)
    c.drawString(x + 0.38*inch, y, text.upper())

# ── Helper: wrap text, return new y ─────────────────────────────────────────
def draw_wrapped(c, x, y, text, font, size, color, max_width, line_height=12):
    c.setFont(font, size)
    c.setFillColor(color)
    words = text.split()
    line = ''
    lines = []
    for word in words:
        test = (line + ' ' + word).strip()
        if c.stringWidth(test, font, size) <= max_width:
            line = test
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    for i, ln in enumerate(lines):
        c.drawString(x, y - i * line_height, ln)
    return y - len(lines) * line_height

# ── Helper: stat block ───────────────────────────────────────────────────────
def stat_block(c, x, y, w, h, value, label, bg=NAVY):
    c.setFillColor(bg)
    c.rect(x, y, w, h, fill=1, stroke=0)
    c.setFont('Helvetica-Bold', 20)
    c.setFillColor(GOLD_LIGHT)
    c.drawCentredString(x + w/2, y + h/2 + 3, value)
    c.setFont('Helvetica', 7)
    c.setFillColor(HexColor('#A0B0CC'))
    c.drawCentredString(x + w/2, y + h/2 - 11, label.upper())

# ── Helper: step row ─────────────────────────────────────────────────────────
def step_row(c, x, y, w, h, num, title, desc):
    c.setFillColor(STONE)
    c.rect(x, y, w, h, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.rect(x, y, 0.035*inch, h, fill=1, stroke=0)
    # Circle
    c.setFillColor(NAVY)
    c.circle(x + 0.27*inch, y + h/2, 0.14*inch, fill=1, stroke=0)
    c.setFont('Helvetica-Bold', 7)
    c.setFillColor(WHITE)
    c.drawCentredString(x + 0.27*inch, y + h/2 - 2.5, num)
    # Title
    c.setFont('Helvetica-Bold', 8)
    c.setFillColor(NAVY)
    c.drawString(x + 0.5*inch, y + h/2 + 3, title)
    # Desc
    c.setFont('Helvetica', 7)
    c.setFillColor(TEXT_MID)
    c.drawString(x + 0.5*inch, y + h/2 - 8, desc)

# ── Helper: pillar block ─────────────────────────────────────────────────────
# y = TOP of block (PDF y-coordinate). Draws downward. Returns bottom y.
def pillar_block(c, x, y_top, w, num, title, desc):
    # Estimate height needed
    words = desc.split()
    line = ''
    lines = []
    for word in words:
        test = (line + ' ' + word).strip()
        if c.stringWidth(test, 'Helvetica', 7.5) <= w - 0.5*inch:
            line = test
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    h = 0.38*inch + len(lines) * 10 + 6
    y_bot = y_top - h  # bottom of block in PDF coords
    c.setFillColor(STONE)
    c.rect(x, y_bot, w, h, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.circle(x + 0.24*inch, y_top - 0.18*inch, 0.14*inch, fill=1, stroke=0)
    c.setFont('Helvetica-Bold', 7)
    c.setFillColor(WHITE)
    c.drawCentredString(x + 0.24*inch, y_top - 0.185*inch - 2.5, num)
    c.setFont('Helvetica-Bold', 8.5)
    c.setFillColor(NAVY)
    c.drawString(x + 0.45*inch, y_top - 0.16*inch, title)
    dy = y_top - 0.34*inch
    for ln in lines:
        c.setFont('Helvetica', 7.5)
        c.setFillColor(TEXT_MID)
        c.drawString(x + 0.1*inch, dy, ln)
        dy -= 10
    return y_bot  # return bottom y coordinate


# ════════════════════════════════════════════════════════════════════════════
#  PAGE 1
# ════════════════════════════════════════════════════════════════════════════
def draw_page1(c):
    # ── Full-bleed cover photo (top 40%) ─────────────────────────────────────
    cover_h = H * 0.40
    garden = Image.open(GARDEN_IMG).convert('RGB')
    gw, gh = garden.size
    target_aspect = W / cover_h
    src_aspect = gw / gh
    if src_aspect > target_aspect:
        new_w = int(gh * target_aspect)
        offset = (gw - new_w) // 2
        garden = garden.crop((offset, 0, offset + new_w, gh))
    else:
        new_h = int(gw / target_aspect)
        garden = garden.crop((0, 0, gw, new_h))
    garden = garden.resize((int(W * 2.5), int(cover_h * 2.5)), Image.LANCZOS)
    overlay = Image.new('RGBA', garden.size, (0, 0, 0, 0))
    draw_ov = ImageDraw.Draw(overlay)
    ow, oh = garden.size
    for i in range(oh):
        alpha = int(160 * (i / oh) ** 0.6)
        draw_ov.line([(0, i), (ow, i)], fill=(15, 30, 60, alpha))
    composite = Image.alpha_composite(garden.convert('RGBA'), overlay).convert('RGB')
    c.drawImage(pil_to_rl(composite), 0, H - cover_h, W, cover_h)

    # ── Logo top-left ─────────────────────────────────────────────────────────
    logo = Image.open(LOGO_WHITE).convert('RGB')
    logo_h = 0.6*inch
    logo_w = logo_h * (logo.width / logo.height)
    c.drawImage(pil_to_rl(logo), 0.42*inch, H - 0.52*inch - logo_h, logo_w, logo_h)

    # ── Contact top-right ─────────────────────────────────────────────────────
    c.setFont('Helvetica', 7.5)
    c.setFillColor(WHITE)
    c.drawRightString(W - 0.42*inch, H - 0.50*inch, 'partners@foxridgeequity.com')
    c.drawRightString(W - 0.42*inch, H - 0.65*inch, 'foxridgeequity.com')
    bw, bh = 1.1*inch, 0.21*inch
    bx = W - 0.42*inch - bw
    by = H - 0.88*inch
    c.setFillColor(GOLD)
    c.rect(bx, by, bw, bh, fill=1, stroke=0)
    c.setFont('Helvetica-Bold', 6.5)
    c.setFillColor(WHITE)
    c.drawCentredString(bx + bw/2, by + 5, 'FIRM OVERVIEW 2025')

    # ── Hero text ─────────────────────────────────────────────────────────────
    text_y = H - cover_h + 1.05*inch
    c.setFont('Helvetica-Bold', 32)
    c.setFillColor(WHITE)
    c.drawString(0.42*inch, text_y, 'FOXRIDGE EQUITY PARTNERS')
    c.setFont('Helvetica', 11)
    c.setFillColor(HexColor('#D4C8A8'))
    c.drawString(0.42*inch, text_y - 0.26*inch, 'Sun Belt Multifamily Private Equity  ·  Austin, TX  &  Miami, FL')
    c.setStrokeColor(GOLD)
    c.setLineWidth(2)
    c.line(0.42*inch, text_y - 0.36*inch, 4.6*inch, text_y - 0.36*inch)

    # ── Stats bar ─────────────────────────────────────────────────────────────
    stats_y = H - cover_h - 0.65*inch
    sw = (W - 0.84*inch) / 4
    sh = 0.55*inch
    stats = [
        ('$1B+',   'Transaction Volume'),
        ('7,000+', 'Units Invested'),
        ('26%',    'Avg Project IRR'),
        ('1.77x',  'Avg Equity Multiple'),
    ]
    for i, (val, lbl) in enumerate(stats):
        sx = 0.42*inch + i * sw
        bg = NAVY if i % 2 == 0 else NAVY_DARK
        stat_block(c, sx, stats_y, sw, sh, val, lbl, bg)
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.5)
    c.line(0.42*inch, stats_y, W - 0.42*inch, stats_y)

    # ── Two-column content ────────────────────────────────────────────────────
    col1_x = 0.42*inch
    col2_x = W/2 + 0.12*inch
    col_w  = W/2 - 0.54*inch
    cy = stats_y - 0.35*inch

    # LEFT: WHO WE ARE
    section_label(c, col1_x, cy, 'Who We Are')
    y = cy - 0.20*inch
    y = draw_wrapped(c, col1_x, y,
        'FoxRidge Equity Partners is a private real estate investment firm specializing '
        'in light value-add multifamily assets across high-growth Sun Belt markets. '
        'We operate on a single-investor-per-deal model — partnering with one UHNW '
        'individual, family office, or principal per acquisition. Typical check size: '
        '$3–10M per deal.',
        'Helvetica', 8.5, TEXT_MID, col_w, 12)

    # LEFT: INVESTMENT FOCUS
    y -= 0.22*inch
    section_label(c, col1_x, y, 'Investment Focus')
    y -= 0.20*inch
    focus = [
        ('Asset Class',  'Class A & B Multifamily'),
        ('Vintage',      '2000 and newer'),
        ('Size',         '100+ units per asset'),
        ('Strategy',     'Light Value-Add'),
        ('Markets',      'Texas · Florida · Sun Belt'),
        ('Hold Period',  '3–7 years'),
    ]
    for lbl, val in focus:
        c.setFont('Helvetica-Bold', 8.5)
        c.setFillColor(NAVY)
        c.drawString(col1_x, y, lbl + ':')
        c.setFont('Helvetica', 8.5)
        c.setFillColor(TEXT_MID)
        c.drawString(col1_x + 0.82*inch, y, val)
        y -= 0.165*inch

    # LEFT: VALUE CREATION
    y -= 0.18*inch
    section_label(c, col1_x, y, 'Value Creation Approach')
    y -= 0.20*inch
    bullets = [
        'Direct oversight of capital improvements',
        'In-house property management control',
        'AI-driven operations & tenant management',
        'Weekly KPI monitoring & transparent reporting',
    ]
    for b in bullets:
        c.setFillColor(GOLD)
        c.circle(col1_x + 4, y + 3.5, 2.5, fill=1, stroke=0)
        c.setFont('Helvetica', 8.5)
        c.setFillColor(TEXT_DARK)
        c.drawString(col1_x + 12, y, b)
        y -= 0.165*inch

    # RIGHT: INVESTMENT STRATEGY
    section_label(c, col2_x, cy, 'Investment Strategy')
    y2 = cy - 0.20*inch
    y2 = draw_wrapped(c, col2_x, y2,
        'We acquire underperforming or lightly distressed Class A and B multifamily '
        'properties in high-growth Sun Belt markets. Our approach combines targeted '
        'capital improvements with in-house property management and AI-driven '
        'operational tools to drive NOI growth and position assets for a premium exit. '
        'Every deal is a direct partnership with a single committed capital partner.',
        'Helvetica', 8.5, TEXT_MID, col_w, 12)

    # RIGHT: 6-STEP PROCESS
    y2 -= 0.22*inch
    section_label(c, col2_x, y2, 'Our 6-Step Investment Process')
    y2 -= 0.20*inch
    steps = [
        ('01', 'SOURCE',     'Off-market deal flow through broker relationships'),
        ('02', 'UNDERWRITE', 'T-12 analysis, stress testing, exit scenarios'),
        ('03', 'STRUCTURE',  'Bespoke LP/GP structure tailored to investor profile'),
        ('04', 'ACQUIRE',    'Decisive execution — single investor, no delays'),
        ('05', 'OPERATE',    'In-house PM, AI tools, direct capital oversight'),
        ('06', 'EXIT',       'Strategic disposition — sale, refinance, or 1031'),
    ]
    sh2 = 0.46*inch
    for num, title, desc in steps:
        step_row(c, col2_x, y2, col_w, sh2, num, title, desc)
        y2 -= (sh2 + 0.035*inch)

    # ── Why Sun Belt band ─────────────────────────────────────────────────────
    band_h = 0.78*inch
    band_y = 0.52*inch
    c.setFillColor(NAVY_DARK)
    c.rect(0, band_y, W, band_h, fill=1, stroke=0)
    c.setFont('Helvetica-Bold', 7)
    c.setFillColor(GOLD)
    c.drawString(0.42*inch, band_y + band_h - 0.18*inch, 'WHY SUN BELT. WHY NOW.')
    sun_stats = [
        ('+8.8%', 'TX Population Growth 2020–25'),
        ('+2.9%', 'DFW Job Growth Rate'),
        ('−50%',  'New Supply Contraction'),
        ('+1.5%', 'Rent Re-Acceleration Forecast'),
    ]
    sw3 = (W - 0.84*inch) / 4
    for i, (val, lbl) in enumerate(sun_stats):
        sx = 0.42*inch + i * sw3
        c.setFont('Helvetica-Bold', 15)
        c.setFillColor(GOLD_LIGHT)
        c.drawString(sx, band_y + 0.28*inch, val)
        c.setFont('Helvetica', 6.5)
        c.setFillColor(HexColor('#8899BB'))
        c.drawString(sx, band_y + 0.13*inch, lbl)

    # ── Footer ────────────────────────────────────────────────────────────────
    c.setFillColor(NAVY)
    c.rect(0, 0, W, 0.48*inch, fill=1, stroke=0)
    c.setFont('Helvetica', 6.5)
    c.setFillColor(HexColor('#8899BB'))
    c.drawString(0.42*inch, 0.18*inch,
                 'FoxRidge Equity Partners  ·  partners@foxridgeequity.com  ·  foxridgeequity.com')
    c.drawRightString(W - 0.42*inch, 0.18*inch,
                      'Page 1 of 2  ·  Confidential — For Qualified Investors Only')


# ════════════════════════════════════════════════════════════════════════════
#  PAGE 2
# ════════════════════════════════════════════════════════════════════════════
def draw_page2(c):
    # ── Header bar ───────────────────────────────────────────────────────────
    hdr_h = 0.72*inch
    c.setFillColor(NAVY)
    c.rect(0, H - hdr_h, W, hdr_h, fill=1, stroke=0)
    logo = Image.open(LOGO_WHITE).convert('RGB')
    logo_h = 0.42*inch
    logo_w = logo_h * (logo.width / logo.height)
    c.drawImage(pil_to_rl(logo), 0.42*inch, H - hdr_h + (hdr_h - logo_h)/2, logo_w, logo_h)
    c.setFont('Helvetica-Bold', 10.5)
    c.setFillColor(WHITE)
    c.drawString(0.42*inch + logo_w + 0.16*inch, H - 0.30*inch, 'FOXRIDGE EQUITY PARTNERS')
    c.setFont('Helvetica', 7.5)
    c.setFillColor(HexColor('#A0B0CC'))
    c.drawString(0.42*inch + logo_w + 0.16*inch, H - 0.50*inch, 'Firm Overview 2025  ·  Continued')
    c.setFont('Helvetica', 7.5)
    c.setFillColor(HexColor('#A0B0CC'))
    c.drawRightString(W - 0.42*inch, H - 0.30*inch, 'partners@foxridgeequity.com')
    c.drawRightString(W - 0.42*inch, H - 0.50*inch, 'foxridgeequity.com')
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.5)
    c.line(0, H - hdr_h, W, H - hdr_h)

    # ── Two-column layout ─────────────────────────────────────────────────────
    col1_x = 0.42*inch
    col2_x = W/2 + 0.12*inch
    col_w  = W/2 - 0.54*inch
    cy = H - hdr_h - 0.35*inch

    # LEFT: WHO IS OUR INVESTOR
    section_label(c, col1_x, cy, 'Who Is Our Investor')
    y = cy - 0.20*inch
    y = draw_wrapped(c, col1_x, y,
        'FoxRidge operates on a single-investor-per-deal model. We partner with one '
        'ultra-high-net-worth individual, family office, or principal per acquisition — '
        'typical check size $3–10M. We are not in a fundraising process; we deploy '
        'alongside committed capital partners who want institutional-quality execution '
        'without building an in-house team.',
        'Helvetica', 8.5, TEXT_MID, col_w, 12)

    # Investor type tags
    y -= 0.18*inch
    tags = ['UHNW Individuals', 'Family Offices', 'Post-Exit Founders', 'International Principals']
    tx = col1_x
    row_y = y
    for tag in tags:
        tw = c.stringWidth(tag, 'Helvetica-Bold', 7) + 14
        if tx + tw > col1_x + col_w + 0.05*inch:
            tx = col1_x
            row_y -= 0.20*inch
        c.setStrokeColor(NAVY)
        c.setFillColor(STONE)
        c.setLineWidth(0.8)
        c.roundRect(tx, row_y - 3, tw, 15, 3, fill=1, stroke=1)
        c.setFont('Helvetica-Bold', 7)
        c.setFillColor(NAVY)
        c.drawString(tx + 7, row_y + 1, tag)
        tx += tw + 5
    y = row_y - 0.24*inch

    # WHAT WE OFFER
    section_label(c, col1_x, y, 'What We Offer Our Investor')
    y -= 0.20*inch
    offers = [
        ('Full Governance Rights',
         'Major decisions, refinance timing, disposition windows, and capex approvals.'),
        ('Bespoke Deal Structuring',
         'Every partnership is structured around the investor\'s profile and jurisdiction.'),
        ('Capital Certainty & Speed',
         'Single-investor model eliminates syndication delays. We move fast.'),
        ('Confidentiality & Discretion',
         'No public offering. No fund marketing. Every relationship is private.'),
        ('The Family Office You Don\'t Need to Build',
         'Institutional-grade reporting, asset management, and investor communication.'),
    ]
    for title, desc in offers:
        c.setFillColor(GOLD)
        c.rect(col1_x, y - 2, 0.03*inch, 0.24*inch, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 8.5)
        c.setFillColor(NAVY)
        c.drawString(col1_x + 0.1*inch, y + 7, title)
        c.setFont('Helvetica', 7.5)
        c.setFillColor(TEXT_MID)
        # single-line desc
        c.drawString(col1_x + 0.1*inch, y - 3, desc)
        y -= 0.26*inch

    # TRACK RECORD HIGHLIGHTS (left column, below offers)
    y -= 0.10*inch
    section_label(c, col1_x, y, 'Track Record Highlights')
    y -= 0.20*inch
    track_items = [
        ('$1B+',     'Total transaction volume across realized and active deals'),
        ('7,000+',   'Multifamily units invested across Texas, Florida, and Sun Belt'),
        ('26%',      'Average project IRR across realized investments'),
        ('1.77x',    'Average equity multiple on realized projects'),
        ('42%',      'Best single-project IRR achieved'),
        ('2022–2025', 'Active supply pipeline — 3 assets under management'),
    ]
    for val, desc in track_items:
        c.setFillColor(NAVY)
        c.setFont('Helvetica-Bold', 9)
        c.drawString(col1_x, y, val)
        vw = c.stringWidth(val, 'Helvetica-Bold', 9)
        c.setFont('Helvetica', 7.5)
        c.setFillColor(TEXT_MID)
        c.drawString(col1_x + vw + 6, y, desc)
        y -= 0.18*inch

    # RIGHT: HOW WE MANAGE
    section_label(c, col2_x, cy, 'How We Manage — Operational Model')
    y2 = cy - 0.20*inch
    y2 = draw_wrapped(c, col2_x, y2,
        'Once acquired, every asset is managed directly by FoxRidge. We do not '
        'outsource property management. Our in-house team, combined with AI-driven '
        'tools, delivers institutional-grade operations at the asset level, '
        'driving NOI and positioning for a premium exit.',
        'Helvetica', 8.5, TEXT_MID, col_w, 12)

    # THREE PILLARS
    y2 -= 0.22*inch
    section_label(c, col2_x, y2, 'Three Pillars of Value Creation')
    y2 -= 0.20*inch
    pillars = [
        ('01', 'Operational Repositioning',
         'Revenue optimization, lease-up velocity, and expense ratio discipline '
         'through in-house property management. We tighten operations, reduce '
         'vacancy, and improve NOI — not construction.'),
        ('02', 'Direct Oversight of Capital Improvements',
         'Light, targeted unit upgrades and common area enhancements — cosmetic '
         'improvements that drive rent premiums without heavy construction risk.'),
        ('03', 'AI-Driven Property Management',
         'AI-powered tools for tenant communication, maintenance coordination, '
         'predictive analytics, and on-site operational efficiency.'),
    ]
    for num, title, desc in pillars:
        y2 = pillar_block(c, col2_x, y2, col_w, num, title, desc)
        y2 -= 0.06*inch

    # TARGET RETURNS
    y2 -= 0.08*inch
    section_label(c, col2_x, y2, 'Target Returns')
    y2 -= 0.20*inch
    returns = [
        ('1.6x – 2.2x', 'Equity Multiple'),
        ('18% – 28%',   'Project IRR'),
        ('8% – 12%',    'Cash-on-Cash Yr 1'),
        ('3 – 7 Yrs',   'Hold Period'),
    ]
    rw = col_w / 4
    rh = 0.52*inch
    for i, (val, lbl) in enumerate(returns):
        rx = col2_x + i * rw
        bg = NAVY if i % 2 == 0 else NAVY_DARK
        c.setFillColor(bg)
        c.rect(rx, y2, rw, rh, fill=1, stroke=0)
        c.setFont('Helvetica-Bold', 9)
        c.setFillColor(GOLD_LIGHT)
        c.drawCentredString(rx + rw/2, y2 + rh/2 + 3, val)
        c.setFont('Helvetica', 6)
        c.setFillColor(HexColor('#A0B0CC'))
        c.drawCentredString(rx + rw/2, y2 + rh/2 - 10, lbl.upper())

    # ── LEADERSHIP (full width) ───────────────────────────────────────────────
    # Place leadership right below the lower of the two columns
    # Contact band is fixed at bottom, leadership floats with content
    contact_y_fixed = 0.48*inch + 0.18*inch + 0.38*inch + 0.18*inch  # above footer+disclaimer
    # Leadership: place right below columns (y2 = bottom of returns bar, y = bottom of left col)
    lead_y = min(y, y2) - 0.28*inch
    section_label(c, col1_x, lead_y, 'Leadership')
    lead_y -= 0.22*inch

    # Portrait dimensions: 0.75" wide x 1.00" tall (3:4 ratio)
    photo_w = 0.75*inch
    photo_h = 1.00*inch
    photo_px_w = int(photo_w / inch * 150)
    photo_px_h = int(photo_h / inch * 150)

    mikhail_img = portrait_crop(MIKHAIL_IMG, photo_px_w, photo_px_h)
    slava_img   = portrait_crop(SLAVA_IMG,   photo_px_w, photo_px_h)

    # Mikhail
    mx = col1_x
    my = lead_y - photo_h
    c.drawImage(pil_to_rl(mikhail_img), mx, my, photo_w, photo_h)
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.5)
    c.rect(mx, my, photo_w, photo_h, fill=0, stroke=1)
    tx_m = mx + photo_w + 0.14*inch
    c.setFont('Helvetica-Bold', 10)
    c.setFillColor(NAVY)
    c.drawString(tx_m, my + photo_h - 0.14*inch, 'Mikhail Pritsker')
    c.setFont('Helvetica', 8)
    c.setFillColor(GOLD)
    c.drawString(tx_m, my + photo_h - 0.30*inch, 'Co-Founder & Managing Partner')
    c.setFont('Helvetica', 8)
    c.setFillColor(TEXT_MID)
    c.drawString(tx_m, my + photo_h - 0.46*inch, '25+ yrs  ·  $1B+ transactions')
    c.drawString(tx_m, my + photo_h - 0.58*inch, 'MBA Chicago Booth  ·  CCIM')

    # Slava
    sx = col2_x
    sy = lead_y - photo_h
    c.drawImage(pil_to_rl(slava_img), sx, sy, photo_w, photo_h)
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.5)
    c.rect(sx, sy, photo_w, photo_h, fill=0, stroke=1)
    tx_s = sx + photo_w + 0.14*inch
    c.setFont('Helvetica-Bold', 10)
    c.setFillColor(NAVY)
    c.drawString(tx_s, sy + photo_h - 0.14*inch, 'Slava Davidenko')
    c.setFont('Helvetica', 8)
    c.setFillColor(GOLD)
    c.drawString(tx_s, sy + photo_h - 0.30*inch, 'Co-Founder & Managing Partner')
    c.setFont('Helvetica', 8)
    c.setFillColor(TEXT_MID)
    c.drawString(tx_s, sy + photo_h - 0.46*inch, '25+ yrs  ·  $600M+ managed')
    c.drawString(tx_s, sy + photo_h - 0.58*inch, '7,000+ units  ·  42% best IRR')

    # ── Contact & Offices (follows leadership section) ──────────────────────
    # my/sy are the BOTTOM of the photos; contact band must start below the band top
    # contact band is 0.58" tall, so its top = contact_y + 0.58"
    # we need contact_y + 0.58" < my  =>  contact_y < my - 0.58"
    # use my - 0.70" to give 0.12" breathing room below the photo
    contact_y = min(my, sy) - 0.70*inch
    c.setFillColor(STONE)
    c.rect(0, contact_y, W, 0.58*inch, fill=1, stroke=0)
    c.setStrokeColor(STONE_MID)
    c.setLineWidth(0.5)
    c.line(0, contact_y + 0.58*inch, W, contact_y + 0.58*inch)
    c.setFont('Helvetica-Bold', 7.5)
    c.setFillColor(NAVY)
    c.drawString(col1_x, contact_y + 0.40*inch, 'CONTACT US')
    c.setFont('Helvetica', 8)
    c.setFillColor(TEXT_MID)
    c.drawString(col1_x, contact_y + 0.25*inch, 'partners@foxridgeequity.com')
    c.drawString(col1_x, contact_y + 0.12*inch, 'foxridgeequity.com')
    c.setFont('Helvetica-Bold', 7.5)
    c.setFillColor(NAVY)
    c.drawString(col2_x, contact_y + 0.40*inch, 'OFFICES')
    c.setFont('Helvetica', 8)
    c.setFillColor(TEXT_MID)
    c.drawString(col2_x, contact_y + 0.25*inch, 'Austin, Texas')
    c.drawString(col2_x, contact_y + 0.12*inch, 'Miami, Florida')

    # ── Disclaimer (follows contact band) ─────────────────────────────────
    disc_y = contact_y - 0.10*inch  # just below contact band
    disc_bottom = draw_wrapped(c, col1_x, disc_y,
        'This document is for informational purposes only and does not constitute an offer to sell or a solicitation '
        'to buy any security. Past performance is not indicative of future results. All investments involve risk, '
        'including the possible loss of principal. Prospective investors should consult with their own legal, tax, '
        'and financial advisors before making any investment decision.',
        'Helvetica', 5.8, TEXT_LIGHT, W - 0.84*inch, 8.5)

    # ── Property image strip (fills gap between disclaimer and footer) ───────────
    # disc_bottom is the bottom of the disclaimer text
    # strip fills from footer top (0.48") to disc_bottom - 0.12"
    strip_y = 0.48*inch  # sits right above footer
    strip_h = disc_bottom - 0.12*inch - strip_y  # dynamic height
    if strip_h < 0.3*inch:
        strip_h = 0  # no strip if gap is too small
    strip_imgs = [
        '/home/ubuntu/fox_ridge_site/client/public/images/hero-luxury-apartment.jpg',
        '/home/ubuntu/fox_ridge_site/client/public/images/hero-strategy-garden.jpg',
        '/home/ubuntu/fox_ridge_site/client/public/images/investor-boardroom.jpg',
    ]
    sw = W / len(strip_imgs)
    if strip_h > 0:
        for i, img_path in enumerate(strip_imgs):
            try:
                from PIL import Image as PILImage
                img = PILImage.open(img_path)
                iw, ih = img.size
                target_ratio = sw / strip_h
                img_ratio = iw / ih
                if img_ratio > target_ratio:
                    new_w = int(ih * target_ratio)
                    left = (iw - new_w) // 2
                    img = img.crop((left, 0, left + new_w, ih))
                else:
                    new_h = int(iw / target_ratio)
                    top = int(ih * 0.15)
                    img = img.crop((0, top, iw, top + new_h))
                from PIL import ImageEnhance
                img = ImageEnhance.Brightness(img).enhance(0.75)
                c.drawImage(pil_to_rl(img, 'JPEG'), i * sw, strip_y, sw, strip_h)
            except Exception:
                c.setFillColor(NAVY_DARK)
                c.rect(i * sw, strip_y, sw, strip_h, fill=1, stroke=0)
        # Overlay dark tint
        c.setFillColor(HexColor('#0D1E3A'))
        c.setFillAlpha(0.35)
        c.rect(0, strip_y, W, strip_h, fill=1, stroke=0)
        c.setFillAlpha(1.0)

    # ── Footer (fixed at very bottom of page) ──────────────────────────────
    c.setFillColor(NAVY)
    c.rect(0, 0, W, 0.48*inch, fill=1, stroke=0)
    c.setFont('Helvetica', 6.5)
    c.setFillColor(HexColor('#8899BB'))
    c.drawString(0.42*inch, 0.18*inch,
                 'FoxRidge Equity Partners  ·  partners@foxridgeequity.com  ·  foxridgeequity.com')
    c.drawRightString(W - 0.42*inch, 0.18*inch,
                      'Page 2 of 2  ·  Confidential — For Qualified Investors Only')


# ════════════════════════════════════════════════════════════════════════════
#  MAIN
# ════════════════════════════════════════════════════════════════════════════
def main():
    c = canvas.Canvas(OUT, pagesize=letter)
    c.setTitle('FoxRidge Equity Partners — Firm Overview 2025')
    c.setAuthor('FoxRidge Equity Partners')
    c.setSubject('Sun Belt Multifamily Private Equity')

    draw_page1(c)
    c.showPage()
    draw_page2(c)
    c.save()
    print(f'PDF saved to: {OUT}')
    size = os.path.getsize(OUT)
    print(f'File size: {size:,} bytes ({size/1024:.1f} KB)')

if __name__ == '__main__':
    main()
