import { describe, it, expect, vi, beforeEach } from "vitest";
import type { SourceConfig } from "../types.js";

const mockLoadSources = vi.fn();
const mockProcessSource = vi.fn();
const mockProcessAll = vi.fn();

vi.mock("../scrape.js", () => ({
  loadSources: (...args: unknown[]) => mockLoadSources(...args),
  processSource: (...args: unknown[]) => mockProcessSource(...args),
  processAll: (...args: unknown[]) => mockProcessAll(...args),
}));

const testSource: SourceConfig = {
  id: "react",
  name: "React",
  description: "UI library",
  version: "19.0",
  adapter: "llms-full",
  url: "https://example.com/llms-full.txt",
};

beforeEach(() => {
  vi.resetModules();
  vi.spyOn(console, "log").mockImplementation(() => {});
  vi.spyOn(console, "error").mockImplementation(() => {});
  mockLoadSources.mockReset().mockReturnValue([testSource]);
  mockProcessSource.mockReset().mockResolvedValue([]);
  mockProcessAll.mockReset().mockResolvedValue({ total: 1, failed: 0 });
});

async function runScraper(args: string[]) {
  process.argv = ["node", "scraper", ...args];
  await import("../index.js");
  await new Promise((r) => setTimeout(r, 10));
}

describe("parseArgs", () => {
  it("--library flag sets library", async () => {
    await runScraper(["--library", "react"]);
    expect(mockProcessSource).toHaveBeenCalledWith(testSource, false);
  });

  it("--dry-run flag", async () => {
    await runScraper(["--dry-run"]);
    expect(mockProcessAll).toHaveBeenCalledWith([testSource], true);
  });

  it("--library at end without value falls through", async () => {
    await runScraper(["--library"]);
    expect(mockProcessAll).toHaveBeenCalled();
  });

  it("no args calls processAll", async () => {
    await runScraper([]);
    expect(mockProcessAll).toHaveBeenCalledWith([testSource], false);
  });
});

describe("main", () => {
  it("calls processAll when no --library", async () => {
    await runScraper([]);
    expect(mockProcessAll).toHaveBeenCalled();
  });

  it("calls processSource when --library matches", async () => {
    await runScraper(["--library", "react"]);
    expect(mockProcessSource).toHaveBeenCalledWith(testSource, false);
  });

  it("errors on unknown library", async () => {
    const exitSpy = vi
      .spyOn(process, "exit")
      .mockImplementation((() => {}) as never);

    process.argv = ["node", "scraper", "--library", "unknown"];
    await import("../index.js");
    await new Promise((r) => setTimeout(r, 10));

    expect(exitSpy).toHaveBeenCalledWith(1);
  });

  it("logs dry-run mode", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await runScraper(["--dry-run"]);
    expect(logSpy).toHaveBeenCalledWith("[dry-run mode]");
  });

  it("exits with code 1 when processAll reports failures", async () => {
    const exitSpy = vi
      .spyOn(process, "exit")
      .mockImplementation((() => {}) as never);

    mockProcessAll.mockResolvedValue({ total: 2, failed: 1 });

    await runScraper([]);

    expect(exitSpy).toHaveBeenCalledWith(1);
  });

  it("catches error in main and exits", async () => {
    const exitSpy = vi
      .spyOn(process, "exit")
      .mockImplementation((() => {}) as never);

    mockProcessAll.mockRejectedValue(new Error("test error"));

    await runScraper([]);

    expect(exitSpy).toHaveBeenCalledWith(1);
  });
});
