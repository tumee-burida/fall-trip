---
name: Autumn Companions
colors:
  surface: '#fef9f1'
  surface-dim: '#ded9d2'
  surface-bright: '#fef9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3eb'
  surface-container: '#f2ede5'
  surface-container-high: '#ece8e0'
  surface-container-highest: '#e7e2da'
  on-surface: '#1d1c17'
  on-surface-variant: '#56423b'
  inverse-surface: '#32302b'
  inverse-on-surface: '#f5f0e8'
  outline: '#89726a'
  outline-variant: '#ddc1b7'
  surface-tint: '#9e421a'
  primary: '#943c14'
  on-primary: '#ffffff'
  primary-container: '#b4532a'
  on-primary-container: '#fff2ee'
  inverse-primary: '#ffb599'
  secondary: '#845400'
  on-secondary: '#ffffff'
  secondary-container: '#ffb54d'
  on-secondary-container: '#714800'
  tertiary: '#61564c'
  on-tertiary: '#ffffff'
  tertiary-container: '#7a6e64'
  on-tertiary-container: '#fff3ea'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb599'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#7e2c03'
  secondary-fixed: '#ffddb6'
  secondary-fixed-dim: '#ffb959'
  on-secondary-fixed: '#2a1800'
  on-secondary-fixed-variant: '#643f00'
  tertiary-fixed: '#f0e0d3'
  tertiary-fixed-dim: '#d3c4b8'
  on-tertiary-fixed: '#221a13'
  on-tertiary-fixed-variant: '#4f453c'
  background: '#fef9f1'
  on-background: '#1d1c17'
  surface-variant: '#e7e2da'
typography:
  display:
    fontFamily: Noto Serif
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 72px
  display-mobile:
    fontFamily: Noto Serif
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 54px
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 38px
  headline-md:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Noto Serif
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

The design system embodies the serene, nostalgic, and deeply connected atmosphere of curated autumn travel. It evokes the quiet luxury of crisp air, fallen leaves, warm beverage steam, and shared human presence. Designed for individuals seeking contemplative escapes, boutique group tours, and cultural immersion, the tone strikes a balance between editorial literary warmth and approachable hospitality.

The visual style combines **Editorial Warm Minimalism** with **Tactile Softness**. The experience prioritizes generous margins, poetic typographic composition, gentle physical rounding, and earthy ambient lighting. It rejects aggressive marketing urgency, opting instead for a deliberate, chapter-like storytelling flow reminiscent of a high-end travel monograph or an intimate essay collection.

## Colors

The palette is rooted in seasonal organic tones, replacing stark digital primaries with earth pigments:

- **Primary (`#B4532A` — Maple Brick):** Used for focal calls to action, brand marks, key title accents, and active state highlights. Brings deliberate emotional grounding.
- **Secondary / Accent (`#E9A23B` — Ginkgo Mustard):** Reserved for badges, seasonal perks, highlights, subtle indicator dots, and micro-interactions.
- **Tertiary / Muted (`#7A6E64` — Muted Warm Gray):** Applied to captions, metadata, borders, secondary labels, and structural dividers. Ensures softness without sacrificing legibility.
- **Surface & Canvas (`#FBF6EE` — Cream Ivory):** The core background tone. Replaces cold digital whites with a warm, unbleached cotton paper quality.
- **Secondary Surface (`#F3E9DA` — Warm Beige):** Utilized for nested cards, secondary groupings, modal backgrounds, and interactive hover planes.
- **Text Base (`#2F2A26` — Deep Roasted Brown):** Used across body and headline typography instead of pure `#000000` to prevent harsh visual contrast against cream surfaces.

## Typography

The type system balances literary sentiment with modern reading clarity:

- **Headlines & Editorial Callouts:** Rendered in an expressive literary serif (mapped via Noto Serif to Gowun Batang / emotional Korean serif principles). Emphasizes vertical cadence, generous leading, and human craftsmanship.
- **Body & Structural Information:** Set in an open, highly legible contemporary sans-serif (Be Vietnam Pro / Pretendard). Generous line height (`1.6` to `1.7`) guarantees effortless scanning across itineraries, club guidelines, and narrative journals.
- **Letter Spacing:** Headlines utilize slightly loose tracking (`-0.01em` to `0.02em`) to cultivate calm, while metadata and badges leverage deliberate letter spacing (`0.04em`) to establish crisp visual hierarchy.

## Layout & Spacing

The layout philosophy operates on an asymmetrical editorial grid that invites wandering rather than strict transactional density.

- **Desktop (1024px+):** 12-column layout with a max container width of 1240px. Gutters set at `1.5rem` (24px) with expansive outer canvas margins of `3rem` to `5rem`. Generous vertical section padding (`space-xl` scaled dynamically up to `6rem`) frames every destination like an exhibition piece.
- **Tablet (768px - 1023px):** 8-column layout with `1.25rem` gutters and `2rem` outer margins. Multi-column cards compress into harmonious double-column pairs.
- **Mobile (< 768px):** 4-column layout with `1rem` gutters and `1.25rem` outer margins. Large display headings gracefully downscale to mobile variants to preserve balanced negative space.

## Elevation & Depth

Visual depth is achieved through gentle tonal shifts and diffused, warm-tinted ambient shadows rather than cold grayscale drops:

- **Tonal Layers:** Elevation begins with the canvas (`#FBF6EE`), followed by elevated panels (`#F3E9DA`), and top-level floating cards (`#FFFFFF` with warm opacity).
- **Ambient Shadow Character:** Shadows employ a burnt umber tint (`rgba(47, 42, 38, 0.06)`) rather than synthetic gray. 
  - *Resting Surface:* `0 2px 12px -2px rgba(47, 42, 38, 0.05)`
  - *Floating / Hover:* `0 12px 32px -6px rgba(47, 42, 38, 0.09), 0 4px 12px -2px rgba(180, 83, 42, 0.04)`
- **Borders & Dividers:** Thin, whisper-soft boundaries using `#7A6E64` at 18% opacity (`rgba(122, 110, 100, 0.18)`), avoiding hard graphical boundaries.

## Shapes

The geometric personality is organic, tactile, and pill-softened:

- **Containers & Cards:** Utilize `rounded-2xl` (1rem to 1.5rem) to evoke pebble-like, approachable edges.
- **Interactive Controls (Buttons, Chips, Badges):** Prefer fully rounded pill silhouettes (`rounded-full`) to complement the warmth and provide welcoming touch targets.
- **Imagery:** Image viewports sport softened corners (`rounded-2xl` or `rounded-3xl`) occasionally paired with subtle organic arch crops for curated hero assets.

## Components

- **Buttons:**
  - *Primary:* Maple Brick (`#B4532A`) solid fill, cream text, fully rounded (`rounded-full`), padded generously (`px-7 py-3.5`). Subtle warm glow on hover.
  - *Secondary / Ghost:* Transparent fill with 1.5px border in `#B4532A` or deep brown, transitioning to a soft `#F3E9DA` fill on hover.
  - *Text Action:* Deep brown with Ginkgo Mustard underline accent and gentle arrow glide interaction.
- **Cards:**
  - *Itinerary Card:* Built on warm secondary surface `#F3E9DA` with soft border overlay, featuring rounded image masks, editorial serif titles, and pill badges denoting group size and autumn foliage status.
  - *Host / Essay Card:* Parchment-like background with delicate serif quotes and generous internal padding (`space-lg`).
- **Chips & Badges:**
  - Fully rounded pill shapes. Ginkgo Mustard surface (`#E9A23B` at 15% opacity with dark amber text) for highlights; Muted Warm Gray tint for logistical specs (e.g., "12명 소규모", "단풍 절정기").
- **Form Inputs:**
  - Cream-filled text boxes with subtle inset warm beige tone, bordered by muted gray outline. Active focus reveals a clean Maple Brick ring (`2px`) with zero harshness.
- **Checkboxes & Radios:**
  - Custom rounded circular radios and softly rounded square checkboxes filled with Maple Brick on selection, marked with natural cream checks.
- **Lists & Timeline:**
  - Vertical travel timelines linked via a subtle warm dotted border line, with small Ginkgo Mustard leaf-inspired nodes marking journey checkpoints.