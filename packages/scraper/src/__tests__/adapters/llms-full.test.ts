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
vi.mock("../../pipeline/manifest.js", () => ({
  getRegistryDir: vi.fn(() => "/mock/registry"),
}));
vi.mock("node:fs");

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

  it("happy path: fetch → clean → split → write files", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fs = await import("node:fs");
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
    expect(fs.rmSync).toHaveBeenCalledWith("/mock/registry/docs/react", {
      recursive: true,
      force: true,
    });
    expect(fs.mkdirSync).toHaveBeenCalledWith("/mock/registry/docs/react", {
      recursive: true,
    });
    // rmSync must be called before mkdirSync
    const rmOrder = vi.mocked(fs.rmSync).mock.invocationCallOrder[0]!;
    const mkdirOrder = vi.mocked(fs.mkdirSync).mock.invocationCallOrder[0]!;
    expect(rmOrder).toBeLessThan(mkdirOrder);
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      "/mock/registry/docs/react/hooks.md",
      "# Hooks\n",
      "utf-8",
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

  it("handles empty topics — no doc files written", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fs = await import("node:fs");
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");

    vi.mocked(fetchMod.fetchContent).mockResolvedValue("raw");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([]);

    // Reset writeFileSync before this test to isolate
    vi.mocked(fs.writeFileSync).mockClear();

    const result = await llmsFullAdapter.process(baseSource);

    expect(result).toEqual([]);
    expect(fs.rmSync).toHaveBeenCalled();
    expect(fs.mkdirSync).toHaveBeenCalled();
    // writeFileSync not called for individual doc files (only rmSync + mkdirSync run)
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });
});
