---
name: txt-to-html-lecture-notes
description: Convert class materials, lesson notes, transcripts, or TXT-form lecture content into self-contained HTML lecture notes or static web lecture viewers with page navigation, table of contents, thumbnails, search, and section-matched instructional content. Use when the user provides 수업 자료, 강의 내용, TXT notes, page text, or asks for HTML 강의록, static lecture pages, FlipHTML-style viewers, or CSS/JS-enhanced course handouts.
---

# TXT To HTML Lecture Notes

## Goal

Create readable HTML lecture-note pages from TXT-form class material. Preserve the source's teaching intent, improve structure where needed, and make the result usable as either a standalone study handout or a static web lecture viewer.

## Input Handling

1. Accept pasted text, `.txt` files, Markdown-like plain text, OCR text, or extracted lesson material.
2. Preserve explicit page boundaries when the source has markers such as `페이지 1`, `Page 1`, slide numbers, form feeds, or repeated lesson headers.
3. If page boundaries are absent, split by major lesson sections. Use a single page when forced splitting would damage the lesson flow.
4. Keep Korean terminology intact. Translate only when the user explicitly requests translation.
5. Do not invent facts that are not supported by the source. When the source is thin, expand only with neutral connective explanation and mark assumptions briefly in the working notes, not in the final HTML unless useful to learners.

## Output Contract

Produce an output folder with one of these shapes:

- Static viewer mode, preferred when the user asks for FlipHTML-style, page viewer, web distribution, CSS/JS-enhanced lecture notes, or 정적 웹페이지 배포:
  - `index.html` as a self-contained viewer with embedded CSS, page data, and dependency-free JavaScript.
  - Optional `assets/` only when the user provides local images or downloadable material.
- Article page mode, for simple handouts:
  - `index.html` when the lesson fits one page, or as a landing page when multiple pages are produced.
  - `page-001.html`, `page-002.html`, etc. when the source has multiple pages or lessons.

All outputs must be static-host friendly: no build step, no remote CSS, no required third-party JavaScript.

Each HTML page must include:

- A table of contents or drawer navigation whose labels match page/section headings.
- Content sections whose headings match generated navigation.
- A responsive mobile layout with no horizontal overflow.
- Semantic HTML: `main`, `nav`, `section`, heading hierarchy, lists, tables when useful.
- Clear lecture-note writing: overview, key concepts, explanations, examples, cautions, and short recap where appropriate.
- Accessible contrast, visible focus styles, and printable layout.

## Workflow

1. Inspect the source material and identify:
   - lesson title
   - page or section boundaries
   - major concepts
   - examples, definitions, procedures, and warnings
2. Read `references/content-patterns.md` when the TXT is messy, lacks headings, has OCR noise, or needs inferred structure.
3. Read `references/static-viewer-pattern.md` when the user asks for static web distribution, a FlipHTML-style viewer, page-flip-like navigation, toolbar controls, thumbnails, search, or CSS/JS-enhanced lecture notes.
4. Create a concise outline first. Use the outline to drive navigation, page data, and content sections.
5. Generate the HTML using `assets/lecture-page-template.html` as the layout base when static viewer mode fits the request.
6. Replace placeholder labels and JSON page data with real lesson content. Remove any unused placeholder blocks.
7. Keep the design quiet and study-focused: strong reading rhythm, stable page canvas, clear navigation, restrained accents.
8. Verify the generated HTML by opening it locally or inspecting it for:
   - matching TOC anchors and section IDs
   - working next/previous/page input controls when using viewer mode
   - working search and thumbnail navigation when using viewer mode
   - no placeholder text left behind
   - no horizontal overflow on mobile-width layouts
   - readable print output

## Page Structure

Use this section order unless the source strongly suggests a better structure:

1. `개요` - what the page teaches and why it matters.
2. `핵심 개념` - definitions and main ideas.
3. `강의 내용` - the main explanation, grouped under meaningful subsections.
4. `예시` - source examples or practical examples when supported.
5. `정리` - compact recap and learner checkpoints.

## Writing Rules

- Write in Korean when the input is Korean.
- Prefer precise instructional prose over decorative copy.
- Keep headings short enough for sidebar navigation.
- Use bullet lists for grouped facts and numbered lists only for real sequences.
- Preserve original quotations only when they are short and necessary.
- Convert dense paragraphs into sections, callouts, or tables only when it improves study value.

## Design Rules

- Use a dark workspace around a light academic paper surface when generating static viewer mode.
- Use a light academic paper surface with a darker ink tone and one restrained accent color for article mode.
- Use cards only for callouts, examples, and summaries.
- Avoid marketing-page hero sections, gradients, decorative blobs, and oversized display text.
- Keep drawer/sidebar width stable between 280px and 360px.
- Set body text between 16px and 18px with comfortable line height.
- Ensure printed pages hide navigation and keep content readable.

## Safety And Originality

- Do not copy proprietary FlipHTML5 JavaScript, CSS, icons, encrypted config, analytics, tracking, or course assets.
- Recreate only the general static viewer pattern: page canvas, toolbar, drawers, thumbnails, search, and hash navigation.
- Use the user's own lesson content and locally generated HTML.
