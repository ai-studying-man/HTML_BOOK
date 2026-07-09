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

## Install With NPM

Install the HTML lecture-note viewer skill with the Skills CLI:

```bash
npx skills add https://github.com/ai-studying-man/HTML_BOOK.git --skill txt-to-html-lecture-notes -g -y
```

Install it globally for every global-capable agent target detected by the Skills CLI, including agents such as Claude Code, Codex, Gemini CLI, Antigravity, Cursor, and others:

```bash
npx skills add https://github.com/ai-studying-man/HTML_BOOK.git --skill txt-to-html-lecture-notes --agent "*" -g -y
```

Some agents do not support global skill installation. If the CLI reports those as skipped or failed while also saying `Installed 1 skill`, the reusable skill was still installed for the supported global targets.

Install it for selected agents only:

```bash
npx skills add https://github.com/ai-studying-man/HTML_BOOK.git --skill txt-to-html-lecture-notes --agent claude-code codex gemini-cli antigravity -g -y
```

Check what is installed:

```bash
npx skills list -g --json
```

Use the skill by asking an agent for work such as:

```text
Use txt-to-html-lecture-notes to convert this TXT lecture material into a static HTML lecture viewer.
```

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
