import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import { remove } from "unist-util-remove";
import type { Node } from "unist";
import type { PreprocessConfig } from "../types.js";

const stringifyOptions = {
  bullet: "-" as const,
  emphasis: "*" as const,
  strong: "*" as const,
  listItemIndent: "one" as const,
};

export async function cleanMarkdown(
  raw: string,
  config?: PreprocessConfig,
): Promise<string> {
  // Phase 1: Text-level preprocessing to strip non-markdown syntax
  const stripped = preprocess(raw, config);

  // Phase 2: Parse as standard markdown, remove remaining HTML/YAML nodes
  const processor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ["yaml", "toml"])
    .use(remarkStringify, stringifyOptions);

  const tree = processor.parse(stripped);
  remove(tree, (node: Node) => node.type === "yaml" || node.type === "toml");
  return String(processor.stringify(tree)).trim();
}

function preprocess(raw: string, config?: PreprocessConfig): string {
  const stripHtml = config?.stripHtml !== false;

  // Work line by line to respect code fences
  const lines = raw.split("\n");
  const result: string[] = [];
  let inCodeBlock = false;

  for (const line of lines) {
    // Track code fences
    if (/^```/.test(line)) {
      inCodeBlock = !inCodeBlock;
      result.push(line);
      continue;
    }

    // Inside code blocks, keep everything as-is
    if (inCodeBlock) {
      result.push(line);
      continue;
    }

    // Skip <SYSTEM> blocks (single line)
    if (/<SYSTEM>/.test(line)) continue;
    if (/<\/SYSTEM>/.test(line)) continue;

    // Skip section separator lines (long dashes)
    if (/^-{10,}$/.test(line)) continue;

    // Skip admonition syntax (:::tip, :::info, etc.)
    if (/^:::\w*/.test(line)) continue;

    // Apply custom strip patterns from config
    if (config?.stripPatterns) {
      let skip = false;
      for (const pattern of config.stripPatterns) {
        if (new RegExp(pattern).test(line)) {
          skip = true;
          break;
        }
      }
      if (skip) continue;
    }

    let cleaned = line;

    // Apply custom replace patterns from config
    if (config?.replacePatterns) {
      for (const { match, replace, scope } of config.replacePatterns) {
        if (scope === "headings") {
          if (/^#{1,6}\s/.test(cleaned)) {
            cleaned = cleaned.replace(new RegExp(match, "g"), replace);
          }
        } else {
          cleaned = cleaned.replace(new RegExp(match, "g"), replace);
        }
      }
    }

    // Strip HTML tags (but not inside code blocks or inline code spans)
    if (stripHtml) {
      // Protect inline code spans: replace with placeholders, strip HTML, restore
      const inlineCodeSpans: string[] = [];
      cleaned = cleaned.replace(/`[^`]+`/g, (match) => {
        inlineCodeSpans.push(match);
        return `\x00IC${inlineCodeSpans.length - 1}\x00`;
      });

      // Remove self-closing HTML/JSX tags: <Component />, <br/>, etc.
      cleaned = cleaned.replace(/<[A-Za-z][^>]*\/>/g, "");

      // Remove opening HTML/JSX tags: <Component prop="value">
      cleaned = cleaned.replace(
        /<[A-Za-z][A-Za-z0-9]*(?:\s[^>]*)?>(?!`)/g,
        "",
      );

      // Remove closing HTML/JSX tags: </Component>
      cleaned = cleaned.replace(/<\/[A-Za-z][A-Za-z0-9]*\s*>/g, "");

      // Restore inline code spans
      // eslint-disable-next-line no-control-regex
      cleaned = cleaned.replace(
        /\x00IC(\d+)\x00/g,
        (_, idx) => inlineCodeSpans[Number(idx)]!,
      );

      // Remove HTML comments: <!-- ... -->
      cleaned = cleaned.replace(/<!--[\s\S]*?-->/g, "");
    }

    // Strip heading ID attributes: {#tracked}
    cleaned = cleaned.replace(/\s*\{#[^}]+\}\s*$/, "");

    result.push(cleaned);
  }

  // Now strip all remaining YAML frontmatter blocks (not just the first)
  const joined = result.join("\n");
  return joined.replace(
    /^---\n((?:[a-zA-Z_][a-zA-Z0-9_]*:.*\n)+)---$/gm,
    (_match, body: string) => {
      const titleMatch = body.match(/^title:\s*(.+)$/m);
      return titleMatch ? `# ${titleMatch[1]!.trim()}` : "";
    },
  );
}
