# Content Patterns

Use these patterns when converting raw TXT into lecture notes.

## Common Source Markers

- Page markers: `페이지 1`, `1쪽`, `Page 1`, `Slide 1`, `---`, form feed.
- Heading markers: all-caps lines, numbered headings, short standalone lines followed by explanatory paragraphs.
- Example markers: `예:`, `예시`, `사례`, `Example`, quoted classroom dialogue.
- Warning markers: `주의`, `중요`, `반드시`, `오류`, `혼동`.

## Section Inference

If the TXT has weak structure:

1. Use repeated terms and transition phrases to infer topic groups.
2. Prefer fewer strong sections over many thin sections.
3. Keep definitions near the first use of the term.
4. Move procedural steps into numbered lists only when order matters.
5. Place caveats and common mistakes in callouts.

## HTML Mapping

- Main topic -> `h2`
- Subtopic -> `h3`
- Definition list -> table or bullet list
- Procedure -> ordered list
- Comparison -> table
- Important note -> `.note`
- Example -> `.example`
- Recap -> `.summary`

## Quality Bar

The final HTML should read like a polished lecture handout, not like raw transcript cleanup. Remove filler, duplicated phrases, and OCR noise, but preserve the meaning and terminology of the source.
