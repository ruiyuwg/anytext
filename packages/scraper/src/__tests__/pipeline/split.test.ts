import { describe, it, expect } from "vitest";
import { splitIntoTopics } from "../../pipeline/split.js";

describe("splitIntoTopics", () => {
  it("uses H2 as primary when <= 1 H1", () => {
    const md = "# Title\n\n## Section A\n\nContent A\n\n## Section B\n\nContent B";
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 100000 });
    expect(topics.some((t) => t.title === "Section A")).toBe(true);
    expect(topics.some((t) => t.title === "Section B")).toBe(true);
  });

  it("uses H1 as primary when > 1 H1", () => {
    const md = "# Section A\n\nContent A\n\n# Section B\n\nContent B";
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 100000 });
    expect(topics.some((t) => t.title === "Section A")).toBe(true);
    expect(topics.some((t) => t.title === "Section B")).toBe(true);
  });

  it("creates Introduction section for pre-heading content", () => {
    const md = "Some intro text\n\n## Section A\n\nContent A";
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 100000 });
    expect(topics[0]!.title).toBe("Introduction");
  });

  it("returns single Introduction topic when no headings", () => {
    const md = "Just some plain text content without any headings at all.";
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 100000 });
    expect(topics).toHaveLength(1);
    expect(topics[0]!.title).toBe("Introduction");
  });

  it("sub-splits oversized sections by H3", () => {
    const longContent = "x ".repeat(25000); // ~12500 tokens, > 10000 max
    const md = `## Big Section\n\n### Sub A\n\n${longContent}\n\n### Sub B\n\n${longContent}`;
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 10000 });
    expect(topics.length).toBeGreaterThan(1);
  });

  it("keeps oversized section as-is when no sub-headings", () => {
    const longContent = "x ".repeat(25000);
    const md = `## Big Section\n\n${longContent}`;
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 10000 });
    expect(topics).toHaveLength(1);
    expect(topics[0]!.tokens).toBeGreaterThan(10000);
  });

  it("merges undersized adjacent sections", () => {
    const md = "## A\n\nTiny\n\n## B\n\nAlso tiny\n\n## C\n\n" + "x ".repeat(2500);
    const topics = splitIntoTopics(md, { minTokens: 500, maxTokens: 100000 });
    // A and B should be merged due to being undersized
    expect(topics.length).toBeLessThan(3);
  });

  it("does not merge single section", () => {
    const md = "## A\n\nContent";
    const topics = splitIntoTopics(md, { minTokens: 500, maxTokens: 100000 });
    expect(topics).toHaveLength(1);
  });

  it("deduplicates IDs with -2, -3 suffixes", () => {
    const md = "## Setup\n\nContent A\n\n## Setup\n\nContent B\n\n## Setup\n\nContent C";
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 100000 });
    const ids = topics.map((t) => t.id);
    expect(ids).toContain("setup");
    expect(ids).toContain("setup-2");
    expect(ids).toContain("setup-3");
  });

  it("respects custom config overrides", () => {
    const md = "## A\n\nShort\n\n## B\n\nAlso short";
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 100000 });
    // With minTokens=0, no merging happens
    expect(topics).toHaveLength(2);
  });

  it("extracts first paragraph as description", () => {
    const md = "## Section\n\nThis is a longer description paragraph.\n\nMore content.";
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 100000 });
    expect(topics[0]!.description).toContain("This is a longer description");
  });

  it("skips short paragraphs for description", () => {
    const md = "## Section\n\nShort\n\nThis is a much longer paragraph for description.";
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 100000 });
    expect(topics[0]!.description).toContain("longer paragraph");
  });

  it("extracts inline code spans as tags", () => {
    const md = "## Section\n\n`useState` and `useEffect` are hooks.";
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 100000 });
    expect(topics[0]!.tags).toContain("useState");
    expect(topics[0]!.tags).toContain("useEffect");
  });

  it("filters empty and overly long code spans", () => {
    const longCode = "a".repeat(50);
    const md = `## Section\n\n\`\` and \`valid\` and \`${longCode}\` here.`;
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 100000 });
    expect(topics[0]!.tags).toContain("valid");
    expect(topics[0]!.tags).not.toContain("");
    expect(topics[0]!.tags).not.toContain(longCode);
  });

  it("handles empty markdown", () => {
    const topics = splitIntoTopics("", { minTokens: 0, maxTokens: 100000 });
    expect(topics).toHaveLength(0);
  });

  it("uses default config when none provided", () => {
    const md = "## Section A\n\nContent A\n\n## Section B\n\nContent B";
    // No config param — uses DEFAULT_MIN_TOKENS (500) and DEFAULT_MAX_TOKENS (10000)
    const topics = splitIntoTopics(md);
    // Both sections are undersized (< 500 tokens), so they get merged
    expect(topics.length).toBeGreaterThanOrEqual(1);
  });

  it("progressively sub-splits to H4", () => {
    const longContent = "x ".repeat(25000);
    const md = [
      "## Big Section",
      "### Sub A",
      `${longContent}`,
      "#### Deep A1",
      `${longContent}`,
      "#### Deep A2",
      `${longContent}`,
      "### Sub B",
      "Content B",
    ].join("\n\n");
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 10000 });
    expect(topics.length).toBeGreaterThan(2);
  });

  it("extracts heading text with inline code", () => {
    const md = "## The `useState` Hook\n\nContent about useState.";
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 100000 });
    expect(topics[0]!.title).toBe("The useState Hook");
  });

  it("handles higher-level heading breaking into new section", () => {
    // H1 appearing mid-stream when primary depth is H2
    const md = "## Section A\n\nContent A\n\n# New Top\n\n## Section B\n\nContent B";
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 100000 });
    expect(topics.some((t) => t.title === "New Top")).toBe(true);
  });

  it("uses parent heading to disambiguate duplicate IDs during sub-split", () => {
    const longContent = "x ".repeat(25000);
    const md = [
      "# Anthropic Provider",
      "## Language Models",
      longContent,
      "# Google Provider",
      "## Language Models",
      longContent,
    ].join("\n\n");
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 10000 });
    const ids = topics.map((t) => t.id);
    expect(ids).toContain("language-models");
    expect(ids).toContain("google-provider-language-models");
    expect(ids).not.toContain("language-models-2");
  });

  it("falls back to numeric suffix when parent-prefixed ID also collides", () => {
    const longContent = "x ".repeat(25000);
    // 3 H1s → primaryDepth=1 → sub-split by H2
    // First "Parent" has H2 "Setup" → "setup"
    // "Parent Setup" → "parent-setup"
    // Second "Parent" has two H2 "Setup" → first tries "parent-setup" (collides) → "setup-2"
    // → second tries "parent-setup" (collides) → "setup-2" (collides) → "setup-3"
    const md = [
      "# Parent",
      "## Setup",
      longContent,
      "# Parent Setup",
      longContent,
      "# Parent",
      "## Setup",
      longContent,
      "## Setup",
      longContent,
    ].join("\n\n");
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 10000 });
    const ids = topics.map((t) => t.id);
    expect(ids).toContain("setup");
    expect(ids).toContain("parent-setup");
    expect(ids).toContain("setup-2");
    expect(ids).toContain("setup-3");
  });

  it("tracks higher-level heading as parent for subsequent sections", () => {
    const longContent = "x ".repeat(25000);
    // H1 mid-stream when grouping by H2 → subsequent H2 gets the H1 as parentHeading
    const md = [
      "# First",
      "## Usage",
      longContent,
      "# Second",
      "## Usage",
      longContent,
    ].join("\n\n");
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 10000 });
    const ids = topics.map((t) => t.id);
    expect(ids).toContain("usage");
    expect(ids).toContain("second-usage");
  });

  it("drops preamble section starting with 'Start of'", () => {
    const md = "# Start of Hono documentation\n\nPreamble text\n\n# Routing\n\nRouting content\n\n# Middleware\n\nMiddleware content";
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 100000 });
    expect(topics.every((t) => !t.title.toLowerCase().startsWith("start of"))).toBe(true);
    expect(topics.some((t) => t.title === "Routing")).toBe(true);
  });

  it("keeps preamble when it is the only section", () => {
    // Two H1s triggers primaryDepth=1, so single "Start of" H1 is the only section
    const md = "# Start of Docs\n\nSome content here.\n\n# Start of Docs";
    const topics = splitIntoTopics(md, { minTokens: 0, maxTokens: 100000 });
    // With only one section after merge, preamble is preserved
    expect(topics).toHaveLength(1);
    expect(topics[0]!.title).toBe("Start of Docs");
  });
});
