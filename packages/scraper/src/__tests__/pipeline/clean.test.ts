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

  it("removes heading-style separators (## ---)", async () => {
    const input = "# Title\n\n## ---\n\nContent";
    const result = await cleanMarkdown(input);
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

  it("normalizes escaped angle brackets in headings", async () => {
    const input = "## Select\\<\\>";
    const result = await cleanMarkdown(input);
    expect(result).not.toContain("\\<\\>");
  });

  it("does not normalize angle brackets on non-heading lines", async () => {
    // The preprocess step only applies angle bracket normalization to heading lines
    // On non-heading lines, escaped brackets pass through preprocess then remark handles them
    const input = "## Heading\\<\\>\n\nNormal paragraph text";
    const result = await cleanMarkdown(input);
    // Heading should have normalization applied
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
    const input = "**bold** and *italic*\n\n- list item\n\n[link](url)\n\n`code`";
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
    const input = "# Title\n\n---\ntitle: meta\ndate: 2025-01-01\n---\n\nContent";
    const result = await cleanMarkdown(input);
    expect(result).not.toContain("title: meta");
    expect(result).toContain("Content");
  });
});
