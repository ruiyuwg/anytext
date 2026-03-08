import { describe, it, expect, vi, beforeEach } from "vitest";
import type { SourceConfig, ProcessedTopic } from "../types.js";

const mockLlmsFullProcess = vi.fn();
const mockLlmsTxtProcess = vi.fn();
const mockHtmlProcess = vi.fn();
const mockGithubProcess = vi.fn();
const mockSitemapProcess = vi.fn();
const mockReadManifest = vi.fn();
const mockWriteManifest = vi.fn();
const mockMergeLibrary = vi.fn();
const mockReadFileSync = vi.fn();
const mockWriteTopics = vi.fn();
const mockCommitStaged = vi.fn();
const mockCleanupStaging = vi.fn();
const mockFetchContent = vi.fn();
const mockReadHashes = vi.fn();
const mockWriteHashes = vi.fn();
const mockHasChanged = vi.fn();
const mockHashContent = vi.fn();

vi.mock("node:fs", () => ({
  readFileSync: (...args: unknown[]) => mockReadFileSync(...args),
}));
vi.mock("../adapters/llms-full.js", () => ({
  llmsFullAdapter: {
    process: (...args: unknown[]) => mockLlmsFullProcess(...args),
  },
}));
vi.mock("../adapters/llms-txt.js", () => ({
  llmsTxtAdapter: {
    process: (...args: unknown[]) => mockLlmsTxtProcess(...args),
  },
}));
vi.mock("../adapters/html.js", () => ({
  htmlAdapter: {
    process: (...args: unknown[]) => mockHtmlProcess(...args),
  },
}));
vi.mock("../adapters/github.js", () => ({
  githubAdapter: {
    process: (...args: unknown[]) => mockGithubProcess(...args),
  },
}));
vi.mock("../adapters/sitemap.js", () => ({
  sitemapAdapter: {
    process: (...args: unknown[]) => mockSitemapProcess(...args),
  },
}));
vi.mock("../pipeline/manifest.js", () => ({
  readManifest: (...args: unknown[]) => mockReadManifest(...args),
  writeManifest: (...args: unknown[]) => mockWriteManifest(...args),
  mergeLibrary: (...args: unknown[]) => mockMergeLibrary(...args),
}));
vi.mock("../pipeline/write.js", () => ({
  writeTopics: (...args: unknown[]) => mockWriteTopics(...args),
  commitStaged: (...args: unknown[]) => mockCommitStaged(...args),
  cleanupStaging: (...args: unknown[]) => mockCleanupStaging(...args),
}));
vi.mock("../pipeline/fetch.js", () => ({
  fetchContent: (...args: unknown[]) => mockFetchContent(...args),
}));
vi.mock("../pipeline/hashes.js", () => ({
  readHashes: (...args: unknown[]) => mockReadHashes(...args),
  writeHashes: (...args: unknown[]) => mockWriteHashes(...args),
  hasChanged: (...args: unknown[]) => mockHasChanged(...args),
}));
vi.mock("../utils.js", () => ({
  hashContent: (...args: unknown[]) => mockHashContent(...args),
}));

const topic: ProcessedTopic = {
  id: "hooks",
  title: "Hooks",
  description: "desc",
  tags: [],
  tokens: 2000,
  content: "# Hooks",
};

const baseSource: SourceConfig = {
  id: "react",
  name: "React",
  description: "UI library",
  version: "19.0",
  adapter: "llms-full",
  url: "https://example.com/llms-full.txt",
};

beforeEach(() => {
  vi.spyOn(console, "log").mockImplementation(() => {});
  vi.spyOn(console, "error").mockImplementation(() => {});
  mockLlmsFullProcess.mockReset();
  mockLlmsTxtProcess.mockReset();
  mockHtmlProcess.mockReset();
  mockGithubProcess.mockReset();
  mockSitemapProcess.mockReset();
  mockReadManifest.mockReset();
  mockWriteManifest.mockReset();
  mockMergeLibrary.mockReset();
  mockReadFileSync.mockReset();
  mockWriteTopics.mockReset();
  mockCommitStaged.mockReset();
  mockCleanupStaging.mockReset();
  mockFetchContent.mockReset();
  mockReadHashes.mockReset().mockReturnValue({});
  mockWriteHashes.mockReset();
  mockHasChanged.mockReset().mockReturnValue(true);
  mockHashContent.mockReset().mockReturnValue("fakehash");
});

describe("loadSources", () => {
  it("reads and parses sources.json", async () => {
    mockReadFileSync.mockReturnValue(JSON.stringify({ sources: [baseSource] }));

    const { loadSources } = await import("../scrape.js");
    const sources = loadSources();
    expect(sources).toHaveLength(1);
    expect(sources[0]!.id).toBe("react");
  });
});

describe("processSource", () => {
  it("selects llms-full adapter", async () => {
    mockLlmsFullProcess.mockResolvedValue([topic]);
    mockReadManifest.mockReturnValue({
      version: 1,
      updatedAt: "2025-01-01",
      libraries: [],
    });
    mockMergeLibrary.mockReturnValue({
      version: 2,
      updatedAt: "2025-01-01",
      libraries: [],
    });

    const { processSource } = await import("../scrape.js");
    await processSource(baseSource, false);
    expect(mockLlmsFullProcess).toHaveBeenCalled();
  });

  it("selects llms-txt adapter", async () => {
    mockLlmsTxtProcess.mockResolvedValue([topic]);
    mockReadManifest.mockReturnValue({
      version: 1,
      updatedAt: "2025-01-01",
      libraries: [],
    });
    mockMergeLibrary.mockReturnValue({
      version: 2,
      updatedAt: "2025-01-01",
      libraries: [],
    });

    const { processSource } = await import("../scrape.js");
    const source = { ...baseSource, adapter: "llms-txt" as const };
    await processSource(source, false);
    expect(mockLlmsTxtProcess).toHaveBeenCalled();
  });

  it("throws on unknown adapter", async () => {
    const { processSource } = await import("../scrape.js");
    const source = { ...baseSource, adapter: "unknown" as "llms-full" };
    await expect(processSource(source, false)).rejects.toThrow(
      "Unknown adapter",
    );
  });

  it("returns early with empty topics", async () => {
    mockLlmsFullProcess.mockResolvedValue([]);

    const { processSource } = await import("../scrape.js");
    const result = await processSource(baseSource, false);

    expect(result).toEqual([]);
    expect(mockWriteManifest).not.toHaveBeenCalled();
    expect(mockWriteTopics).not.toHaveBeenCalled();
  });

  it("calls writeTopics, commitStaged, and updates manifest when not dry-run", async () => {
    mockLlmsFullProcess.mockResolvedValue([topic]);
    mockReadManifest.mockReturnValue({
      version: 1,
      updatedAt: "2025-01-01",
      libraries: [],
    });
    const updatedManifest = {
      version: 2,
      updatedAt: "2025-01-01",
      libraries: [],
    };
    mockMergeLibrary.mockReturnValue(updatedManifest);

    const { processSource } = await import("../scrape.js");
    await processSource(baseSource, false);

    expect(mockWriteTopics).toHaveBeenCalledWith("react", [topic]);
    expect(mockCommitStaged).toHaveBeenCalledWith("react");
    expect(mockWriteManifest).toHaveBeenCalledWith(updatedManifest);

    // writeTopics before commitStaged
    const writeOrder = mockWriteTopics.mock.invocationCallOrder[0]!;
    const commitOrder = mockCommitStaged.mock.invocationCallOrder[0]!;
    expect(writeOrder).toBeLessThan(commitOrder);
  });

  it("does not write manifest or topics in dry-run mode", async () => {
    mockLlmsFullProcess.mockResolvedValue([topic]);

    const { processSource } = await import("../scrape.js");
    await processSource(baseSource, true);

    expect(mockWriteManifest).not.toHaveBeenCalled();
    expect(mockWriteTopics).not.toHaveBeenCalled();
    expect(mockCommitStaged).not.toHaveBeenCalled();
  });

  it("skips processing when content unchanged", async () => {
    mockFetchContent.mockResolvedValue("raw content");
    mockHasChanged.mockReturnValue(false);

    const { processSource } = await import("../scrape.js");
    const hashes = { react: "oldhash" };
    const result = await processSource(baseSource, false, { hashes });

    expect(result).toEqual([]);
    expect(mockLlmsFullProcess).not.toHaveBeenCalled();
  });

  it("processes when content changed", async () => {
    mockFetchContent.mockResolvedValue("raw content");
    mockHasChanged.mockReturnValue(true);
    mockLlmsFullProcess.mockResolvedValue([topic]);
    mockReadManifest.mockReturnValue({
      version: 1,
      updatedAt: "2025-01-01",
      libraries: [],
    });
    mockMergeLibrary.mockReturnValue({
      version: 2,
      updatedAt: "2025-01-01",
      libraries: [],
    });

    const { processSource } = await import("../scrape.js");
    const hashes = { react: "oldhash" };
    const result = await processSource(baseSource, false, { hashes });

    expect(result).toEqual([topic]);
    expect(mockLlmsFullProcess).toHaveBeenCalledWith(
      baseSource,
      "raw content",
    );
  });

  it("skips hash check with --force", async () => {
    mockLlmsFullProcess.mockResolvedValue([topic]);
    mockReadManifest.mockReturnValue({
      version: 1,
      updatedAt: "2025-01-01",
      libraries: [],
    });
    mockMergeLibrary.mockReturnValue({
      version: 2,
      updatedAt: "2025-01-01",
      libraries: [],
    });

    const { processSource } = await import("../scrape.js");
    const hashes = { react: "oldhash" };
    await processSource(baseSource, false, { force: true, hashes });

    expect(mockFetchContent).not.toHaveBeenCalled();
    expect(mockLlmsFullProcess).toHaveBeenCalled();
  });
});

describe("processAll", () => {
  it("continues on per-source error and returns failure count", async () => {
    mockLlmsFullProcess
      .mockRejectedValueOnce(new Error("source1 fail"))
      .mockResolvedValueOnce([topic]);
    mockReadManifest.mockReturnValue({
      version: 1,
      updatedAt: "2025-01-01",
      libraries: [],
    });
    mockMergeLibrary.mockReturnValue({
      version: 2,
      updatedAt: "2025-01-01",
      libraries: [],
    });

    const { processAll } = await import("../scrape.js");
    const sources = [baseSource, { ...baseSource, id: "react2" }];

    const result = await processAll(sources, false);
    expect(mockLlmsFullProcess).toHaveBeenCalledTimes(2);
    expect(result).toEqual({ total: 2, failed: 1 });
  });

  it("returns zero failures when all succeed", async () => {
    mockLlmsFullProcess.mockResolvedValue([topic]);
    mockReadManifest.mockReturnValue({
      version: 1,
      updatedAt: "2025-01-01",
      libraries: [],
    });
    mockMergeLibrary.mockReturnValue({
      version: 2,
      updatedAt: "2025-01-01",
      libraries: [],
    });

    const { processAll } = await import("../scrape.js");
    const result = await processAll([baseSource], false);
    expect(result).toEqual({ total: 1, failed: 0 });
  });

  it("logs summary line", async () => {
    mockLlmsFullProcess.mockResolvedValue([topic]);
    mockReadManifest.mockReturnValue({
      version: 1,
      updatedAt: "2025-01-01",
      libraries: [],
    });
    mockMergeLibrary.mockReturnValue({
      version: 2,
      updatedAt: "2025-01-01",
      libraries: [],
    });

    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const { processAll } = await import("../scrape.js");
    await processAll([baseSource], false);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("1/1 sources processed successfully"),
    );
  });

  it("calls cleanupStaging in finally block", async () => {
    mockLlmsFullProcess.mockResolvedValue([topic]);
    mockReadManifest.mockReturnValue({
      version: 1,
      updatedAt: "2025-01-01",
      libraries: [],
    });
    mockMergeLibrary.mockReturnValue({
      version: 2,
      updatedAt: "2025-01-01",
      libraries: [],
    });

    const { processAll } = await import("../scrape.js");
    await processAll([baseSource], false);
    expect(mockCleanupStaging).toHaveBeenCalled();
  });

  it("calls cleanupStaging even on error", async () => {
    mockLlmsFullProcess.mockRejectedValue(new Error("fail"));

    const { processAll } = await import("../scrape.js");
    await processAll([baseSource], false);
    expect(mockCleanupStaging).toHaveBeenCalled();
  });

  it("does not cleanup staging in dry-run mode", async () => {
    mockLlmsFullProcess.mockResolvedValue([topic]);

    const { processAll } = await import("../scrape.js");
    await processAll([baseSource], true);
    expect(mockCleanupStaging).not.toHaveBeenCalled();
  });

  it("reads and writes hashes around processing", async () => {
    mockLlmsFullProcess.mockResolvedValue([topic]);
    mockReadManifest.mockReturnValue({
      version: 1,
      updatedAt: "2025-01-01",
      libraries: [],
    });
    mockMergeLibrary.mockReturnValue({
      version: 2,
      updatedAt: "2025-01-01",
      libraries: [],
    });

    const { processAll } = await import("../scrape.js");
    await processAll([baseSource], false);

    expect(mockReadHashes).toHaveBeenCalled();
    expect(mockWriteHashes).toHaveBeenCalled();
  });

  it("does not write hashes in dry-run mode", async () => {
    mockLlmsFullProcess.mockResolvedValue([topic]);

    const { processAll } = await import("../scrape.js");
    await processAll([baseSource], true);

    expect(mockWriteHashes).not.toHaveBeenCalled();
  });
});
