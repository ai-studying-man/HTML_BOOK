# Skill Portability Notes

This repository uses `SKILL.md` folders as the canonical format because it maps cleanly to modern agent-skill systems and remains readable by tools that only support project context files.

## Canonical Format

Each skill should be stored as:

```text
skills/<skill-name>/
├── SKILL.md
├── references/   # optional
├── scripts/      # optional
└── assets/       # optional
```

`SKILL.md` must start with YAML frontmatter:

```yaml
---
name: my-skill
description: Use when an agent needs to ...
---
```

## Codex

Codex skills use a directory with `SKILL.md`, optional `scripts/`, `references/`, `assets/`, and optional `agents/` metadata. Keep frontmatter minimal: `name` and `description`.

## Claude

Claude skills also center on folders of instructions, scripts, and resources. Keep the same canonical folder shape and avoid Codex-only assumptions inside reusable instructions.

## Gemini CLI

Gemini CLI project context is commonly supplied through `GEMINI.md`; custom commands can also package reusable prompts. For this repository, `GEMINI.md` imports `AGENTS.md`, and skill folders remain available as explicit context or future command wrappers.

## Authoring Guidance

- Write skills for the task, not for a specific model.
- Avoid model names in the body unless a platform-specific step is unavoidable.
- Prefer shell-neutral commands in instructions; when a command is OS-specific, label it.
- Keep generated adapters thin and disposable.
- Validate every skill with `npm run validate` before upload.
