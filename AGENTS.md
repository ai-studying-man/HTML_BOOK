# Repository Instructions

Use this repository as a portable agent-skill catalog.

## Compatibility Target

- Prefer the `SKILL.md` directory format for reusable skills.
- Treat `SKILL.md` as the canonical skill artifact.
- Keep root-level agent files (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`) as repository guidance, not as replacements for individual skills.
- When a platform has a richer native packaging format, generate adapters from the canonical skill instead of duplicating behavior manually.

## Skill Authoring

- Create each skill under `skills/<lowercase-hyphen-name>/`.
- Include exactly one required `SKILL.md` per skill folder.
- Frontmatter must contain only `name` and `description`.
- Match the `name` value to the folder name.
- Write the `description` so an agent can decide when to load the skill from metadata alone.
- Keep the body action-oriented and concise.
- Move detailed policies, schemas, examples, and long domain notes to `references/`.
- Put deterministic helper programs in `scripts/` and test them before publishing.
- Put output templates and static resources in `assets/`.

## Safety

- Never commit credentials, access tokens, API keys, private documents, generated caches, or local logs.
- Prefer source links or short excerpts over copied proprietary material.
- Mark any dependency, external API, or legal/regulatory assumption with its source and last-checked date.

## Validation

Run `npm run validate` before committing. Fix validation failures rather than documenting around them.
