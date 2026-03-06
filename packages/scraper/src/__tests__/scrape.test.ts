import { describe, it, expect, vi, beforeEach } from "vitest";
import type { SourceConfig, ProcessedTopic } from "../types.js";

const mockLlmsFullProcess = vi.fn();
const mockLlmsTxtProcess = vi.fn();
const mockManualProcess = vi.fn();
const mockReadManifest = vi.fn();
const mockWriteManifest = vi.fn();
const mockMergeLibrary = vi.fn();
const mockReadFileSync = vi.fn();

vi.mock("node:fs", () => ({
  readFileSync: (...args: unknown[]) => mockReadFileSync(...args),
}));
vi.mock("../adapters/llms-full.js", () => ({
  llmsFullAdapter: { process: (...args: unknown[]) => mockLlmsFullProcess(...args) },
}));
vi.mock("../adapters/llms-txt.js", () => ({
  llmsTxtAdapter: { process: (...args: unknown[]) => mockLlmsTxtProcess(...args) },
}));
vi.mock("../adapters/manual.js", () => ({
  manualAdapter: { process: (...args: unknown[]) => mockManualProcess(...args) },
}));
vi.mock("../pipeline/manifest.js", () => ({
  readManifest: (...args: unknown[]) => mockReadManifest(...args),
  writeManifest: (...args: unknown[]) => mockWriteManifest(...args),
  mergeLibrary: (...args: unknown[]) => mockMergeLibrary(...args),
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
  mockManualProcess.mockReset();
  mockReadManifest.mockReset();
  mockWriteManifest.mockReset();
  mockMergeLibrary.mockReset();
  mockReadFileSync.mockReset();
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
    mockReadManifest.mockReturnValue({ version: 1, updatedAt: "2025-01-01", libraries: [] });
    mockMergeLibrary.mockReturnValue({ version: 2, updatedAt: "2025-01-01", libraries: [] });

    const { processSource } = await import("../scrape.js");
    await processSource(baseSource, false);
    expect(mockLlmsFullProcess).toHaveBeenCalledWith(baseSource);
  });

  it("selects llms-txt adapter", async () => {
    mockLlmsTxtProcess.mockResolvedValue([topic]);
    mockReadManifest.mockReturnValue({ version: 1, updatedAt: "2025-01-01", libraries: [] });
    mockMergeLibrary.mockReturnValue({ version: 2, updatedAt: "2025-01-01", libraries: [] });

    const { processSource } = await import("../scrape.js");
    const source = { ...baseSource, adapter: "llms-txt" as const };
    await processSource(source, false);
    expect(mockLlmsTxtProcess).toHaveBeenCalled();
  });

  it("selects manual adapter", async () => {
    mockManualProcess.mockResolvedValue([topic]);
    mockReadManifest.mockReturnValue({ version: 1, updatedAt: "2025-01-01", libraries: [] });
    mockMergeLibrary.mockReturnValue({ version: 2, updatedAt: "2025-01-01", libraries: [] });

    const { processSource } = await import("../scrape.js");
    const source = { ...baseSource, adapter: "manual" as const };
    await processSource(source, false);
    expect(mockManualProcess).toHaveBeenCalled();
  });

  it("throws on unknown adapter", async () => {
    const { processSource } = await import("../scrape.js");
    const source = { ...baseSource, adapter: "unknown" as "llms-full" };
    await expect(processSource(source, false)).rejects.toThrow("Unknown adapter");
  });

  it("returns early with empty topics", async () => {
    mockLlmsFullProcess.mockResolvedValue([]);

    const { processSource } = await import("../scrape.js");
    const result = await processSource(baseSource, false);

    expect(result).toEqual([]);
    expect(mockWriteManifest).not.toHaveBeenCalled();
  });

  it("updates manifest when not dry-run", async () => {
    mockLlmsFullProcess.mockResolvedValue([topic]);
    mockReadManifest.mockReturnValue({ version: 1, updatedAt: "2025-01-01", libraries: [] });
    const updatedManifest = { version: 2, updatedAt: "2025-01-01", libraries: [] };
    mockMergeLibrary.mockReturnValue(updatedManifest);

    const { processSource } = await import("../scrape.js");
    await processSource(baseSource, false);

    expect(mockWriteManifest).toHaveBeenCalledWith(updatedManifest);
  });

  it("does not write manifest in dry-run mode", async () => {
    mockLlmsFullProcess.mockResolvedValue([topic]);

    const { processSource } = await import("../scrape.js");
    await processSource(baseSource, true);

    expect(mockWriteManifest).not.toHaveBeenCalled();
  });
});

describe("processAll", () => {
  it("continues on per-source error", async () => {
    mockLlmsFullProcess
      .mockRejectedValueOnce(new Error("source1 fail"))
      .mockResolvedValueOnce([topic]);
    mockReadManifest.mockReturnValue({ version: 1, updatedAt: "2025-01-01", libraries: [] });
    mockMergeLibrary.mockReturnValue({ version: 2, updatedAt: "2025-01-01", libraries: [] });

    const { processAll } = await import("../scrape.js");
    const sources = [baseSource, { ...baseSource, id: "react2" }];

    await processAll(sources, false);
    expect(mockLlmsFullProcess).toHaveBeenCalledTimes(2);
  });
});
