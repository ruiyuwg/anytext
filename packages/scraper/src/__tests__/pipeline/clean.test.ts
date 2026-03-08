import { describe, it, expect } from "vitest";
import { cleanMarkdown } from "../../pipeline/clean.js";

describe("cleanMarkdown", () => {
  it("preserves HTML inside code fences", async () => {
    const input = "```html\n<div>hello</div>\n```";
    const result = await cleanMarkdown(input);
    expect(result).toContain("<div>hello</div>");
  });

  it("removes SYSTEM blocks", async () => {
    const input = "<SYSTEM>secret</SYSTEM>\n# Hello";
    const result = await cleanMarkdown(input);
    expect(result).not.toContain("SYSTEM");
    expect(result).toContain("Hello");
  });

  it("removes long dash separator lines", async () => {
    const input = "# Title\n\n----------\n\nContent";
    const result = await cleanMarkdown(input);
    expect(result).not.toContain("----------");
    expect(result).toContain("Content");
  });

  it("removes heading-style separators (## ---) via config stripPatterns", async () => {
    const input = "# Title\n\n## ---\n\nContent";
    const config = { stripPatterns: ["^#{1,6}\\s+-{3,}\\s*$"] };
    const result = await cleanMarkdown(input, config);
    expect(result).not.toContain("## ---");
  });

  it("removes admonition syntax (:::tip)", async () => {
    const input = ":::tip\nThis is a tip\n:::\n\nNormal text";
    const result = await cleanMarkdown(input);
    expect(result).not.toContain(":::");
    expect(result).toContain("Normal text");
  });

  it("removes self-closing JSX tags", async () => {
    const input = "Before <Component /> after";
    const result = await cleanMarkdown(input);
    expect(result).not.toContain("<Component />");
    expect(result).toContain("Before");
    expect(result).toContain("after");
  });

  it("removes opening/closing HTML tags", async () => {
    const input = 'Before <div className="x">content</div> after';
    const result = await cleanMarkdown(input);
    expect(result).not.toContain("<div");
    expect(result).not.toContain("</div>");
  });

  it("removes HTML comments", async () => {
    const input = "Before <!-- comment --> after";
    const result = await cleanMarkdown(input);
    expect(result).not.toContain("<!--");
    expect(result).not.toContain("-->");
  });

  it("strips heading ID attributes {#my-id}", async () => {
    const input = "## My Section {#my-section}";
    const result = await cleanMarkdown(input);
    expect(result).toContain("My Section");
    expect(result).not.toContain("{#my-section}");
  });

  it("normalizes escaped angle brackets in headings via config replacePatterns", async () => {
    const input = "## Select\\<\\>";
    const config = {
      replacePatterns: [
        { match: "\\\\<\\\\>", replace: " + ", scope: "headings" as const },
      ],
    };
    const result = await cleanMarkdown(input, config);
    expect(result).not.toContain("\\<\\>");
  });

  it("does not apply heading-scoped replacements to non-heading lines", async () => {
    const input = "## Heading\\<\\>\n\nNormal paragraph text";
    const config = {
      replacePatterns: [
        { match: "\\\\<\\\\>", replace: " + ", scope: "headings" as const },
      ],
    };
    const result = await cleanMarkdown(input, config);
    expect(result).not.toContain("\\<\\>");
    expect(result).toContain("Normal paragraph text");
  });

  it("removes YAML frontmatter", async () => {
    const input = "---\ntitle: Test\ndate: 2025-01-01\n---\n\n# Hello";
    const result = await cleanMarkdown(input);
    expect(result).not.toContain("title: Test");
    expect(result).toContain("Hello");
  });

  it("handles empty input", async () => {
    const result = await cleanMarkdown("");
    expect(result).toBe("");
  });

  it("preserves normal markdown (bold, lists, links, code)", async () => {
    const input =
      "**bold** and *italic*\n\n- list item\n\n[link](url)\n\n`code`";
    const result = await cleanMarkdown(input);
    expect(result).toContain("**bold**");
    expect(result).toContain("- list item");
    expect(result).toContain("[link](url)");
    expect(result).toContain("`code`");
  });

  it("removes opening and closing SYSTEM tag lines", async () => {
    // Only the lines containing <SYSTEM> and </SYSTEM> tags are removed; intermediate lines remain
    const input = "<SYSTEM>\n</SYSTEM>\n\n# Title";
    const result = await cleanMarkdown(input);
    expect(result).not.toContain("SYSTEM");
    expect(result).toContain("Title");
  });

  it("removes TOML frontmatter nodes", async () => {
    const input = "+++\ntitle = 'Test'\n+++\n\n# Hello";
    const result = await cleanMarkdown(input);
    expect(result).not.toContain("title = 'Test'");
    expect(result).toContain("Hello");
  });

  it("preserves JSX tags inside inline code spans", async () => {
    const input = "Use `<MyButton />` to render a button";
    const result = await cleanMarkdown(input);
    expect(result).toContain("`<MyButton />`");
  });

  it("preserves HTML tags inside inline code spans", async () => {
    const input = "The `<div>` element and `</div>` tag";
    const result = await cleanMarkdown(input);
    expect(result).toContain("`<div>`");
    expect(result).toContain("`</div>`");
  });

  it("removes extra YAML blocks in body (not first)", async () => {
    const input =
      "# Title\n\n---\ntitle: meta\ndate: 2025-01-01\n---\n\nContent";
    const result = await cleanMarkdown(input);
    expect(result).not.toContain("title: meta");
    expect(result).toContain("Content");
  });

  it("converts frontmatter title to H1 heading", async () => {
    const input = "---\ntitle: My Page\nslug: my-page\n---\n\n## Section";
    const result = await cleanMarkdown(input);
    expect(result).toContain("# My Page");
    expect(result).toContain("## Section");
  });

  it("strips frontmatter with no title field", async () => {
    const input = "---\nslug: my-page\ndate: 2025-01-01\n---\n\n## Section";
    const result = await cleanMarkdown(input);
    expect(result).not.toContain("slug:");
    expect(result).toContain("## Section");
  });

  it("applies custom stripPatterns from config", async () => {
    const input = "# Title\n\nREMOVE_ME line\n\nKeep this";
    const config = { stripPatterns: ["^REMOVE_ME"] };
    const result = await cleanMarkdown(input, config);
    expect(result).not.toContain("REMOVE_ME");
    expect(result).toContain("Keep this");
  });

  it("applies custom replacePatterns with scope all", async () => {
    const input = "Replace FOO here\n\n# Also FOO in heading";
    const config = {
      replacePatterns: [{ match: "FOO", replace: "BAR" }],
    };
    const result = await cleanMarkdown(input, config);
    expect(result).toContain("BAR");
    expect(result).not.toContain("FOO");
  });

  it("preserves HTML when stripHtml is false", async () => {
    const input = "Before <div>content</div> after";
    const config = { stripHtml: false };
    const result = await cleanMarkdown(input, config);
    expect(result).toContain("<div>");
  });

  it("strips HTML by default (no config)", async () => {
    const input = "Before <div>content</div> after";
    const result = await cleanMarkdown(input);
    expect(result).not.toContain("<div");
  });
});
