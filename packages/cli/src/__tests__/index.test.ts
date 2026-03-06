import { describe, it, expect, vi, beforeEach } from "vitest";

const mockList = vi.fn().mockResolvedValue(undefined);
const mockSearch = vi.fn().mockResolvedValue(undefined);
const mockRead = vi.fn().mockResolvedValue(undefined);
const mockCacheCommand = vi.fn();

vi.mock("../commands/list.js", () => ({
  list: mockList,
}));
vi.mock("../commands/search.js", () => ({
  search: mockSearch,
}));
vi.mock("../commands/read.js", () => ({
  read: mockRead,
}));
vi.mock("../commands/cache.js", () => ({
  cacheCommand: mockCacheCommand,
}));

beforeEach(() => {
  vi.resetModules();
  mockList.mockResolvedValue(undefined);
  mockSearch.mockResolvedValue(undefined);
  mockRead.mockResolvedValue(undefined);
  mockCacheCommand.mockReturnValue(undefined);
  vi.spyOn(console, "log").mockImplementation(() => {});
  vi.spyOn(console, "error").mockImplementation(() => {});
});

async function runCLI(args: string[]) {
  process.argv = ["node", "anytext", ...args];
  await import("../index.js");
  await new Promise((r) => setTimeout(r, 10));
}

describe("CLI entry point", () => {
  it("calls list command", async () => {
    await runCLI(["list", "react"]);
    expect(mockList).toHaveBeenCalledWith(["react"]);
  });

  it("calls search command", async () => {
    await runCLI(["search", "hooks"]);
    expect(mockSearch).toHaveBeenCalledWith(["hooks"]);
  });

  it("calls read command", async () => {
    await runCLI(["read", "react", "hooks"]);
    expect(mockRead).toHaveBeenCalledWith(["react", "hooks"]);
  });

  it("calls cache command", async () => {
    await runCLI(["cache", "clear"]);
    expect(mockCacheCommand).toHaveBeenCalledWith(["clear"]);
  });

  it("prints help for --help", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await runCLI(["--help"]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("anytext"));
  });

  it("prints help for -h", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await runCLI(["-h"]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("anytext"));
  });

  it("prints help for no command", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await runCLI([]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("anytext"));
  });

  it("errors on unknown command", async () => {
    const exitSpy = vi
      .spyOn(process, "exit")
      .mockImplementation((() => {}) as never);

    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    await runCLI(["unknown-cmd"]);

    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining("Unknown command"));
    expect(logSpy).toHaveBeenCalled();
    expect(exitSpy).toHaveBeenCalledWith(1);
  });

  it("catches command errors and exits", async () => {
    mockList.mockRejectedValue(new Error("test error"));

    const exitSpy = vi
      .spyOn(process, "exit")
      .mockImplementation((() => {}) as never);

    await runCLI(["list"]);

    expect(exitSpy).toHaveBeenCalledWith(1);
  });
});
