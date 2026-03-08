import { describe, it, expect, vi } from "vitest";
import type { SourceConfig, ProcessedTopic } from "../../types.js";
import { llmsFullAdapter } from "../../adapters/llms-full.js";

vi.mock("../../pipeline/fetch.js", () => ({
  fetchContent: vi.fn(),
}));
vi.mock("../../pipeline/clean.js", () => ({
  cleanMarkdown: vi.fn(),
}));
vi.mock("../../pipeline/split.js", () => ({
  splitIntoTopics: vi.fn(),
}));
vi.mock("../../pipeline/validate-completeness.js", () => ({
  validateCompleteness: vi.fn(() => ({ valid: true, lostChars: 0 })),
}));

const baseSource: SourceConfig = {
  id: "react",
  name: "React",
  description: "UI library",
  version: "19.0",
  adapter: "llms-full",
  url: "https://example.com/llms-full.txt",
};

describe("llmsFullAdapter", () => {
  it("throws when no source.url", async () => {
    const source = { ...baseSource, url: undefined };
    await expect(llmsFullAdapter.process(source)).rejects.toThrow("no URL");
  });

  it("happy path: fetch → clean → split → return topics", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");

    vi.mocked(fetchMod.fetchContent).mockResolvedValue("raw content");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("clean content");
    const topic: ProcessedTopic = {
      id: "hooks",
      title: "Hooks",
      description: "React hooks",
      tags: ["useState"],
      tokens: 2000,
      content: "# Hooks",
    };
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([topic]);

    const result = await llmsFullAdapter.process(baseSource);

    expect(result).toEqual([topic]);
    expect(fetchMod.fetchContent).toHaveBeenCalledWith(baseSource.url);
    expect(cleanMod.cleanMarkdown).toHaveBeenCalledWith(
      "raw content",
      undefined,
    );
    expect(splitMod.splitIntoTopics).toHaveBeenCalledWith(
      "clean content",
      undefined,
    );
  });

  it("applies topicOverrides preserving content", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");

    vi.mocked(fetchMod.fetchContent).mockResolvedValue("raw");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("clean");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      {
        id: "hooks",
        title: "Hooks",
        description: "desc",
        tags: [],
        tokens: 100,
        content: "original",
      },
    ]);

    const source: SourceConfig = {
      ...baseSource,
      topicOverrides: { hooks: { title: "Custom Hooks" } },
    };
    const result = await llmsFullAdapter.process(source);

    expect(result[0]!.title).toBe("Custom Hooks");
    expect(result[0]!.content).toBe("original");
  });

  it("applies topicOverrides skipping topics without overrides", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");

    vi.mocked(fetchMod.fetchContent).mockResolvedValue("raw");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("clean");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      {
        id: "hooks",
        title: "Hooks",
        description: "desc",
        tags: [],
        tokens: 100,
        content: "original",
      },
      {
        id: "state",
        title: "State",
        description: "desc",
        tags: [],
        tokens: 100,
        content: "state content",
      },
    ]);

    const source: SourceConfig = {
      ...baseSource,
      topicOverrides: { hooks: { title: "Custom Hooks" } },
    };
    const result = await llmsFullAdapter.process(source);

    expect(result[0]!.title).toBe("Custom Hooks");
    // "state" topic has no override, so it passes through unchanged
    expect(result[1]!.title).toBe("State");
  });

  it("no overrides when topicOverrides undefined", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");

    vi.mocked(fetchMod.fetchContent).mockResolvedValue("raw");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("clean");
    const topic: ProcessedTopic = {
      id: "hooks",
      title: "Hooks",
      description: "desc",
      tags: [],
      tokens: 100,
      content: "content",
    };
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([topic]);

    const result = await llmsFullAdapter.process(baseSource);
    expect(result[0]!.title).toBe("Hooks");
  });

  it("logs warning when content validation fails", async () => {
    const warnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {});
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const validateMod = await import(
      "../../pipeline/validate-completeness.js"
    );

    vi.mocked(fetchMod.fetchContent).mockResolvedValue("raw");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("clean");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      {
        id: "hooks",
        title: "Hooks",
        description: "desc",
        tags: [],
        tokens: 100,
        content: "content",
      },
    ]);
    vi.mocked(validateMod.validateCompleteness).mockReturnValue({
      valid: false,
      lostChars: 42,
    });

    await llmsFullAdapter.process(baseSource);

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("42 chars lost"),
    );
  });

  it("returns empty topics when split produces none", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");

    vi.mocked(fetchMod.fetchContent).mockResolvedValue("raw");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([]);

    const result = await llmsFullAdapter.process(baseSource);

    expect(result).toEqual([]);
  });
});
