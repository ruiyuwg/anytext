import { describe, it, expect, vi } from "vitest";
import { cacheCommand } from "../../commands/cache.js";

vi.mock("../../cache.js", () => ({
  clearCache: vi.fn(),
  getCacheStatus: vi.fn(),
}));

vi.mock("../../format.js", async (importOriginal) => {
  const original = await importOriginal<typeof import("../../format.js")>();
  return { ...original };
});

describe("cacheCommand", () => {
  it("clears cache and prints message", async () => {
    const cache = await import("../../cache.js");
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    cacheCommand(["clear"]);
    expect(cache.clearCache).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("Cache cleared."),
    );
  });

  it("shows status when cache exists", async () => {
    const cache = await import("../../cache.js");
    vi.mocked(cache.getCacheStatus).mockReturnValue({
      exists: true,
      dir: "/home/.anytext",
      manifestAge: "5m ago",
    });

    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    cacheCommand(["status"]);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("/home/.anytext"),
    );
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("5m ago"));
  });

  it("shows no cache message when cache does not exist", async () => {
    const cache = await import("../../cache.js");
    vi.mocked(cache.getCacheStatus).mockReturnValue({
      exists: false,
      dir: "/home/.anytext",
      manifestAge: null,
    });

    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    cacheCommand(["status"]);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("No cache found."),
    );
  });

  it("errors on invalid subcommand", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const exitSpy = vi.spyOn(process, "exit").mockImplementation((() => {
      throw new Error("process.exit");
    }) as never);

    expect(() => cacheCommand(["invalid"])).toThrow("process.exit");
    expect(exitSpy).toHaveBeenCalledWith(1);
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining("Usage"));
  });

  it("errors on missing subcommand", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const exitSpy = vi.spyOn(process, "exit").mockImplementation((() => {
      throw new Error("process.exit");
    }) as never);

    expect(() => cacheCommand([])).toThrow("process.exit");
    expect(exitSpy).toHaveBeenCalledWith(1);
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining("Usage"));
  });
});
