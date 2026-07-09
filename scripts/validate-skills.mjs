import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const skillsDir = path.join(root, "skills");
const namePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

async function existsDirectory(dir) {
  try {
    return (await stat(dir)).isDirectory();
  } catch {
    return false;
  }
}

function parseFrontmatter(markdown) {
  if (!markdown.startsWith("---\n")) {
    return null;
  }

  const end = markdown.indexOf("\n---\n", 4);
  if (end === -1) {
    return null;
  }

  const raw = markdown.slice(4, end).trim();
  const fields = {};

  for (const line of raw.split(/\r?\n/)) {
    const match = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
    if (!match) {
      return null;
    }

    fields[match[1]] = match[2].replace(/^"(.*)"$/, "$1").trim();
  }

  return fields;
}

async function validateSkill(skillName) {
  const errors = [];
  const skillPath = path.join(skillsDir, skillName);
  const skillStat = await stat(skillPath);

  if (!skillStat.isDirectory()) {
    return errors;
  }

  if (!namePattern.test(skillName)) {
    errors.push(`${skillName}: folder name must be lowercase hyphen-case`);
  }

  const skillFile = path.join(skillPath, "SKILL.md");
  let markdown = "";

  try {
    markdown = await readFile(skillFile, "utf8");
  } catch {
    errors.push(`${skillName}: missing SKILL.md`);
    return errors;
  }

  const frontmatter = parseFrontmatter(markdown);
  if (!frontmatter) {
    errors.push(`${skillName}: SKILL.md must start with YAML frontmatter`);
    return errors;
  }

  const keys = Object.keys(frontmatter).sort();
  if (keys.join(",") !== "description,name") {
    errors.push(`${skillName}: frontmatter must contain only name and description`);
  }

  if (frontmatter.name !== skillName) {
    errors.push(`${skillName}: frontmatter name must match folder name`);
  }

  if (!frontmatter.description || frontmatter.description.length < 40) {
    errors.push(`${skillName}: description must be specific enough to trigger the skill`);
  }

  return errors;
}

if (!(await existsDirectory(skillsDir))) {
  console.error("Missing skills/ directory.");
  process.exit(1);
}

const entries = await readdir(skillsDir);
const allErrors = [];

for (const entry of entries.sort()) {
  allErrors.push(...(await validateSkill(entry)));
}

if (allErrors.length > 0) {
  console.error("Skill validation failed:");
  for (const error of allErrors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Validated ${entries.length} skill folder(s).`);
