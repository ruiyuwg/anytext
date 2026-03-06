import { describe, it, expect, vi, beforeEach } from "vitest";
import { read } from "../../commands/read.js";
import { makeManifest } from "../helpers/fixtures.js";

vi.mock("../../registry.js", () => ({
  getManifest: vi.fn(),
  getDoc: vi.fn(),
}));

vi.mock("../../format.js", async (importOriginal) => {
  const original = await importOriginal<typeof import("../../format.js")>();
  return { ...original };
});

beforeEach(async () => {
  const registry = await import("../../registry.js");
  vi.mocked(registry.getManifest).mockResolvedValue(makeManifest());
  vi.mocked(registry.getDoc).mockResolvedValue("# Hooks content");
});

describe("read", () => {
  it("errors when no args provided", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const exitSpy = vi.spyOn(process, "exit").mockImplementation((() => {
      throw new Error("process.exit");
    }) as never);

    await expect(read([])).rejects.toThrow("process.exit");
    expect(exitSpy).toHaveBeenCalledWith(1);
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining("Usage"));
  });

  it("errors when only library provided (no topic)", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const exitSpy = vi.spyOn(process, "exit").mockImplementation((() => {
      throw new Error("process.exit");
    }) as never);

    await expect(read(["react"])).rejects.toThrow("process.exit");
    expect(exitSpy).toHaveBeenCalledWith(1);
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining("Usage"));
  });

  it("errors for unknown library", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const exitSpy = vi.spyOn(process, "exit").mockImplementation((() => {
      throw new Error("process.exit");
    }) as never);

    await expect(read(["unknown", "hooks"])).rejects.toThrow("process.exit");
    expect(exitSpy).toHaveBeenCalledWith(1);
    expect(errorSpy).toHaveBeenCalledWith(
      expect.stringContaining("Unknown library"),
    );
  });

  it("errors for unknown topic", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const exitSpy = vi.spyOn(process, "exit").mockImplementation((() => {
      throw new Error("process.exit");
    }) as never);

    await expect(read(["react", "unknown-topic"])).rejects.toThrow(
      "process.exit",
    );
    expect(exitSpy).toHaveBeenCalledWith(1);
    expect(errorSpy).toHaveBeenCalledWith(
      expect.stringContaining("Unknown topic"),
    );
  });

  it("prints doc content for valid lib + topic", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await read(["react", "hooks"]);
    expect(logSpy).toHaveBeenCalledWith("# Hooks content");
  });
});
