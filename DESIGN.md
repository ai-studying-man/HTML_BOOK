# HTML Book Skills Design System

## 1. Product

This repository ships portable agent skills. Its visual assets are static educational templates, especially browser-based lecture-note and HTML book viewers.

## 2. Principles

- Study-first: prioritize reading, page navigation, and orientation over decoration.
- Static-host friendly: no build pipeline, no remote runtime dependency, no framework lock-in.
- Korean-safe typography: prevent clipping and preserve natural Korean line breaks.
- Viewer clarity: pages should feel like documents inside a controlled reading surface.

## 3. Color Tokens

- `--color-workspace`: `#20242b` for the full-screen viewer background.
- `--color-workspace-soft`: `#2d333d` for toolbar and panel surfaces.
- `--color-page`: `#fbfaf7` for lecture pages.
- `--color-ink`: `#1f2328` for body text.
- `--color-muted`: `#667085` for secondary labels.
- `--color-line`: `#d8dee4` for document dividers.
- `--color-accent`: `#315f72` for active controls and section emphasis.
- `--color-accent-soft`: `#e7f0f3` for selected thumbnails and callouts.

## 4. Type And Spacing

- Body font: `"Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, sans-serif`.
- Utility font: `ui-monospace, "SFMono-Regular", Consolas, monospace`.
- Body size: `16px` to `17px`.
- Page title: `28px` to `40px`, responsive with `clamp`.
- Line height: `1.65` to `1.75` for reading text.
- Spacing unit: `4px`; major gaps use `16px`, `24px`, `32px`, `48px`.

## 5. Components

- `viewer-shell`: fixed-height app surface with dark workspace, document stage, side navigation, and bottom toolbar.
- `lecture-page`: aspect-ratio controlled article page with document-like padding and paper background.
- `tool-button`: square icon/text control with visible focus state and accessible label.
- `drawer-panel`: off-canvas panel for table of contents, thumbnails, or search.
- `lecture-callout`: bordered block for examples, warnings, and summaries.

## 6. Interaction

- Navigate pages with toolbar buttons, side buttons, thumbnail clicks, page input, and left/right keyboard arrows.
- Store the current page in the URL hash as `#p=<number>`.
- Keep search client-side and scoped to page title/body text.
- Honor `prefers-reduced-motion` by removing page transition transforms.

## 7. Do Not

- Do not clone proprietary FlipHTML5 code, assets, icons, tracking, analytics, or encrypted runtime behavior.
- Do not ship remote CSS or JS dependencies in generated lecture viewers.
- Do not use gradient blobs, marketing hero layouts, or decorative cards for the document surface.
