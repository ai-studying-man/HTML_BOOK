# HTML Book Skills

Reusable agent skills for turning text-based class material into static HTML lecture books. This repository keeps each skill in the common `SKILL.md` folder format, then adds lightweight guidance so the same content can be used from Codex, Claude, and Gemini CLI workflows.

## Repository Layout

```text
.
├── AGENTS.md                  # Shared repository instructions for agent CLIs
├── CLAUDE.md                  # Claude entrypoint shim
├── GEMINI.md                  # Gemini entrypoint shim
├── docs/
│   └── PORTABILITY.md         # Cross-agent compatibility notes
├── scripts/
│   └── validate-skills.mjs    # Local validation for skill folders
├── skills/
│   ├── txt-to-html-lecture-notes/
│   └── example-dapa-skill/    # Replace or copy when creating real skills
└── templates/
    └── skill/                 # Starter template for new skills
```

## Skill Rules

- Put one skill per folder under `skills/<skill-name>/`.
- Use lowercase hyphenated folder names: `dapa-news-brief`, not `DAPA News Brief`.
- Make `SKILL.md` the canonical source of truth.
- Keep `SKILL.md` concise and move long domain material into `references/`.
- Use `scripts/` only for repeatable deterministic work.
- Do not include secrets, tokens, private data dumps, or generated caches.

## Create A New Skill

Copy the template:

```bash
cp -R templates/skill skills/my-new-skill
```

Then update:

- `skills/my-new-skill/SKILL.md`
- optional `skills/my-new-skill/references/`
- optional `skills/my-new-skill/scripts/`
- optional `skills/my-new-skill/assets/`

Run validation:

```bash
npm run validate
```

## GitHub Remote

This workspace is intended to publish to:

https://github.com/ai-studying-man/HTML_BOOK.git

Commit and push only after reviewing the generated scaffold and replacing the example skill with your first real skill.
