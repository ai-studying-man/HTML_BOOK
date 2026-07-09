# Static Lecture Viewer Pattern

Use this pattern when the user wants to distribute lecture notes as a static web viewer instead of plain article pages.

## Reference Structure

Model the public behavior of page-flip viewers without copying proprietary code:

- Full-viewport app shell.
- Dark workspace around a centered document page.
- Document page rendered from structured data.
- Side previous/next controls.
- Bottom toolbar with first/previous/page input/next/last controls.
- Progress bar tied to current page.
- Off-canvas drawers for table of contents, thumbnails, and search.
- URL hash state such as `#p=5`.
- Keyboard navigation with left/right arrows and Escape to close drawers.

## File Shape

Prefer a single self-contained `index.html`:

```text
index.html
├── <style> viewer CSS
├── <script type="application/json" id="lecture-data"> page data
└── <script> small viewer runtime
```

Use separate `style.css` and `viewer.js` only when the user explicitly wants split files or the generated HTML becomes too large to maintain.

## Data Shape

Use this JSON shape inside `#lecture-data`:

```json
{
  "courseTitle": "강의명",
  "description": "짧은 설명",
  "pages": [
    {
      "label": "1강 / 기본 개념",
      "title": "페이지 제목",
      "summary": "목차와 검색 결과에 표시할 요약",
      "sections": [
        {
          "heading": "섹션 제목",
          "html": "<p>본문 HTML</p>"
        }
      ]
    }
  ]
}
```

## Generation Rules

- Generate page data first, then render it through the template.
- Keep page titles short enough for toolbar, thumbnail, and search result contexts.
- Ensure every section is valid HTML and does not include unescaped user-provided scripts.
- Keep the runtime dependency-free.
- Keep generated pages printable: hide toolbar and drawers in print CSS.
- Do not include external tracking, analytics, password checks, or remote viewer scripts.

## QA Checklist

- Open `index.html` through a browser.
- Confirm `#p=<number>` opens the expected page.
- Click next, previous, first, last, TOC item, thumbnail, and search result.
- Type a page number and confirm navigation clamps to valid pages.
- Search Korean terms and confirm results navigate to matching pages.
- Test mobile width and confirm no horizontal overflow.
