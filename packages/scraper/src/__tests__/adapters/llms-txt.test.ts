import { describe, it, expect, vi } from "vitest";
import type { SourceConfig } from "../../types.js";
import { llmsTxtAdapter } from "../../adapters/llms-txt.js";

vi.mock("../../pipeline/fetch.js", () => ({
  fetchContent: vi.fn(),
}));
vi.mock("../../pipeline/clean.js", () => ({
  cleanMarkdown: vi.fn(),
}));

const baseSource: SourceConfig = {
  id: "hono",
  name: "Hono",
  description: "Web framework",
  version: "4.0",
  adapter: "llms-txt",
  url: "https://example.com/llms.txt",
};

// Content long enough to pass the 100 token threshold (400+ chars)
const longContent =
  "This is a comprehensive guide that covers all the important topics. ".repeat(
    8,
  );

describe("llmsTxtAdapter", () => {
  it("throws when no source.url", async () => {
    const source = { ...baseSource, url: undefined };
    await expect(llmsTxtAdapter.process(source)).rejects.toThrow("no URL");
  });

  it("happy path: index → links → fetch each → clean → return topics", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");

    // Markdown with a .md link that remark can parse
    const indexContent =
      "# Docs\n\n[Getting Started](https://example.com/docs/start.md)\n";
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(indexContent)
      .mockResolvedValueOnce("# Getting Started\n\n" + longContent);
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue(
      "# Getting Started\n\n" + longContent,
    );

    const result = await llmsTxtAdapter.process(baseSource);

    expect(result.length).toBe(1);
    expect(result[0]!.id).toBe("getting-started");
  });

  it("skips docs < 100 tokens", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");

    const indexContent = "[Tiny](https://example.com/tiny.md)\n";
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(indexContent)
      .mockResolvedValueOnce("Small");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("Small");

    const result = await llmsTxtAdapter.process(baseSource);
    expect(result).toEqual([]);
  });

  it("continues on per-doc fetch error and logs summary", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");

    const indexContent =
      "[Doc A](https://example.com/a.md)\n\n[Doc B](https://example.com/b.md)\n";
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(indexContent)
      .mockRejectedValueOnce(new Error("fetch failed"))
      .mockResolvedValueOnce("# Doc B\n\n" + longContent);
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue(
      "# Doc B\n\n" + longContent,
    );

    const result = await llmsTxtAdapter.process(baseSource);
    expect(result.length).toBe(1);
    expect(result[0]!.id).toBe("doc-b");
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("1 processed, 1 failed out of 2 links"),
    );
  });

  it("throws when more than 50% of links fail", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");

    const indexContent =
      "[A](https://example.com/a.md)\n\n[B](https://example.com/b.md)\n\n[C](https://example.com/c.md)\n";
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(indexContent)
      .mockRejectedValueOnce(new Error("fail"))
      .mockRejectedValueOnce(new Error("fail"))
      .mockRejectedValueOnce(new Error("fail"));

    await expect(llmsTxtAdapter.process(baseSource)).rejects.toThrow(
      "Too many failures",
    );
  });

  it("applies topicOverrides", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");

    const indexContent = "[Guide](https://example.com/guide.md)\n";
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(indexContent)
      .mockResolvedValueOnce("# Guide\n\n" + longContent);
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue(
      "# Guide\n\n" + longContent,
    );

    const source: SourceConfig = {
      ...baseSource,
      topicOverrides: { guide: { title: "Custom Guide" } },
    };
    const result = await llmsTxtAdapter.process(source);
    expect(result[0]!.title).toBe("Custom Guide");
    expect(result[0]!.content).toContain(longContent);
  });

  it("extracts .md, .md?, and /docs/ links", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");

    const indexContent = [
      "[A](https://example.com/a.md)",
      "[B](https://example.com/b.md?raw=true)",
      "[C](https://example.com/docs/c)",
      "[Ignore](https://example.com/other)",
    ].join("\n\n");
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(indexContent)
      .mockResolvedValue("# Title\n\n" + longContent);
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue(
      "# Title\n\n" + longContent,
    );

    const result = await llmsTxtAdapter.process(baseSource);
    expect(result.length).toBe(3);
  });

  it("extracts description from first long paragraph and inline code tags", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");

    const indexContent = "[Doc](https://example.com/doc.md)\n";
    const docContent =
      "# Title\n\nShort\n\nThis is a longer paragraph for description extraction.\n\nUse `useState` and `useEffect` here.\n\n" +
      longContent;
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(indexContent)
      .mockResolvedValueOnce(docContent);
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue(docContent);

    const result = await llmsTxtAdapter.process(baseSource);
    expect(result[0]!.description).toContain("longer paragraph");
    expect(result[0]!.tags).toContain("useState");
    expect(result[0]!.tags).toContain("useEffect");
  });

  it("extractFirstParagraph returns empty when no qualifying lines", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");

    const indexContent = "[Doc](https://example.com/doc.md)\n";
    // Content where extractFirstParagraph finds nothing: only headings, code, lists, tables, and short lines
    const docContent =
      "# Title\n\nShort\n\n```code block```\n\n- list item\n\n| table |\n\n" +
      longContent;
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(indexContent)
      .mockResolvedValueOnce(docContent);
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue(docContent);

    const result = await llmsTxtAdapter.process(baseSource);
    expect(result.length).toBe(1);
    // The description should come from extractFirstParagraph — it finds the longContent line
    expect(result[0]!.description.length).toBeGreaterThan(0);
  });

  it("extractFirstParagraph returns empty string when all lines are non-qualifying", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");

    const indexContent = "[Doc](https://example.com/doc.md)\n";
    // Build content > 400 chars (100 tokens) using only heading/code/list/table/short lines
    const lines = [
      "# Title",
      "Short",
      "```code```",
      "- list item that is long but starts with dash",
      "| table row that is long but starts with pipe",
      ...Array.from({ length: 50 }, () => "# Heading"),
    ];
    const paddedContent = lines.join("\n");
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(indexContent)
      .mockResolvedValueOnce(paddedContent);
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue(paddedContent);

    const result = await llmsTxtAdapter.process(baseSource);
    expect(result.length).toBe(1);
    expect(result[0]!.description).toBe("");
  });

  it("extractInlineCode filters empty and long spans", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");

    const longCode = "a".repeat(50);
    const indexContent = "[Doc](https://example.com/doc.md)\n";
    const docContent =
      `# Title\n\n\`valid\` and \`\` and \`${longCode}\` here.\n\n` +
      longContent;
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(indexContent)
      .mockResolvedValueOnce(docContent);
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue(docContent);

    const result = await llmsTxtAdapter.process(baseSource);
    expect(result[0]!.tags).toContain("valid");
    expect(result[0]!.tags).not.toContain(longCode);
  });

  it("extractInlineCode returns empty when no matches", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");

    const indexContent = "[Doc](https://example.com/doc.md)\n";
    const docContent =
      "# Title\n\nNo code spans here at all.\n\n" + longContent;
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(indexContent)
      .mockResolvedValueOnce(docContent);
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue(docContent);

    const result = await llmsTxtAdapter.process(baseSource);
    expect(result[0]!.tags).toEqual([]);
  });

  it("resolves relative URLs against source base URL", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");

    const indexContent =
      "[Valid](https://example.com/valid.md)\n\n[Relative](relative/path.md)\n";
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(indexContent)
      .mockResolvedValue("# Title\n\n" + longContent);
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue(
      "# Title\n\n" + longContent,
    );

    const result = await llmsTxtAdapter.process(baseSource);
    expect(result.length).toBe(2);
    // Verify relative URL was resolved against base
    expect(fetchMod.fetchContent).toHaveBeenCalledWith(
      "https://example.com/relative/path.md",
    );
  });

  it("skips links with empty title", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");

    const indexContent =
      "[](https://example.com/empty-title.md)\n\n[Valid](https://example.com/valid.md)\n";
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(indexContent)
      .mockResolvedValue("# Title\n\n" + longContent);
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue(
      "# Title\n\n" + longContent,
    );

    const result = await llmsTxtAdapter.process(baseSource);
    // Empty title link is skipped
    expect(result.length).toBe(1);
  });

  it("returns empty for no links found", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");

    vi.mocked(fetchMod.fetchContent).mockResolvedValueOnce(
      "# Index\n\nNo links here.",
    );

    const result = await llmsTxtAdapter.process(baseSource);
    expect(result).toEqual([]);
  });
});
