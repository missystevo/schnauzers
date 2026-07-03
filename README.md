# The Mini Schnauzer Guide

A seven-page informational website about the **Miniature Schnauzer**, built with plain
HTML5, one external CSS file, and vanilla JavaScript — ready to publish on GitHub Pages.
Created for SDEV153.

---

## File structure

```
schnauzer-site/
├── index.html              Home
├── breed-standards.html    History, size, coat (contains a data TABLE)
├── temperament.html        Personality & family life
├── health.html             Common conditions (contains a data TABLE)
├── training.html           Housebreaking, socialization, barking
├── grooming.html           Coat care & the schnauzer cut
├── resources.html          External links + CONTACT FORM (with validation)
├── css/
│   └── styles.css          Single external stylesheet for the whole site
├── js/
│   └── script.js           Mobile menu + contact-form processing
└── images/
    ├── miniature-schnauzer-logo.svg
    ├── miniature-schnauzer-hero.svg
    ├── miniature-schnauzer-salt-pepper.svg
    ├── miniature-schnauzer-black.svg
    ├── miniature-schnauzer-black-silver.svg
    ├── miniature-schnauzer-coat-colors.svg
    ├── miniature-schnauzer-grooming.svg
    └── favicon.svg
```

## View it locally

Just open `index.html` in any browser — no build step or server needed.

## Publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `mini-schnauzer-guide`).
2. Upload **everything inside** the `schnauzer-site` folder so that `index.html`
   sits at the top level of the repo (not inside a subfolder).
3. Go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Pick the `main` branch and the `/ (root)` folder, then **Save**.
6. Wait a minute; your site appears at
   `https://<your-username>.github.io/mini-schnauzer-guide/`.

> The illustrations are original SVG artwork so there are no copyright issues.
> If you'd rather use photographs, drop them into `/images` and update the
> `src` and `alt` on the `<img>` tags — keep the descriptive, keyword-rich alt text.

---

## How this site meets the self-audit checklist

**Required deliverables**
- 7 pages total (Home + 6 content pages) — exceeds the 5-page minimum.
- At least one HTML **list** — every page uses `ul`/`ol`, and the home page uses a `dl` (quick facts).
- At least one HTML **table** — Breed Standards ("at a glance") and Health ("common conditions").
- At least one HTML **form with a processing script** — the contact form on Resources, handled in `script.js`.
- At least three **external links** — AKC, AMSC, VCA, AVMA, plus footer social links.
- **8 image files** (logo + hero + 6 illustrations) — exceeds the 4-image minimum.
- A **single external CSS file** (`css/styles.css`) controls the whole site.

**Accessibility (WCAG)**
- Keyword ("Miniature Schnauzer") in every page's `H1` and `<title>`.
- Logical heading structure (one `H1`, then `H2`/`H3`), lists, and call-out text.
- Body text is 18px with 1.65 line-height (both above the minimums).
- All colors were checked to meet 4.5:1 contrast (3:1+ for large/UI text).
- Every image has descriptive `alt` text; decorative shapes are `aria-hidden`.
- Skip-to-content link, visible keyboard focus, and a keyboard-operable mobile menu.
- Descriptive page titles; identical navigation order on every page; no time limits.
- `prefers-reduced-motion` is respected.

**SEO principles (8 applied)**
1. Unique, descriptive `<title>` with the keyword on every page.
2. A unique `<meta name="description">` per page.
3. Semantic heading hierarchy with the keyword in `H1`/`H2`s.
4. Keyword-rich image **filenames** and `alt` text.
5. Descriptive, hyphenated page URLs (`breed-standards.html`).
6. Internal linking between related pages, plus breadcrumbs.
7. Open Graph tags for social previews.
8. Mobile-responsive, lightweight pages (viewport meta, small SVGs).

**Design / UX**
- Navigation contains every page and is identical across the site.
- Header logo links back to the home page.
- Fluid, responsive layout; mobile menu button is ≥46px.
- Form fields are clearly labeled, show errors **before** submit, and display a success message.
