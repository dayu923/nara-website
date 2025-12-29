import fs from "fs";
import path from "path";

function replaceBrand(text) {
  return (
    text
      // Solana → Nara Solana
      .replace(/\bSolana\b/g, "Nara Solana")
      // SOL → NSO（必须是完整 token）
      .replace(/\bSOL\b/g, "NSO")
  );
}

function processFile(file) {
  const raw = fs.readFileSync(file, "utf8");

  const parts = raw.split(/^---$/m);

  let frontmatter = "";
  let body = raw;

  if (parts.length >= 3) {
    const fmContent = parts[1]
      .split("\n")
      .map((line) => {
        // 只处理 key: value
        const match = line.match(/^(\s*\w+:\s*)(.+)$/);
        if (!match) return line;

        const [, key, value] = match;
        return key + replaceBrand(value);
      })
      .join("\n");

    frontmatter = `---\n${fmContent}\n---`;
    body = parts.slice(2).join("---");
  }

  let inCode = false;

  const lines = body.split("\n").map((line) => {
    if (line.trim().startsWith("```")) {
      inCode = !inCode;
      return line;
    }

    if (inCode) return line;

    // 跳过 MDX / JSX / import / export
    if (
      line.trim().startsWith("<") ||
      line.trim().startsWith("import ") ||
      line.trim().startsWith("export ")
    ) {
      return line;
    }

    return replaceBrand(line);
  });

  fs.writeFileSync(
    file,
    frontmatter ? frontmatter + "\n" + lines.join("\n") : lines.join("\n"),
  );
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) walk(full);
    else if (full.endsWith(".mdx")) processFile(full);
  }
}

walk("apps/web/content");
