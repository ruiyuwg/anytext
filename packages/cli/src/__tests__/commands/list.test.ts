import { describe, it, expect, vi, beforeEach } from "vitest";
import { list } from "../../commands/list.js";
import { makeManifest, makeTopic } from "../helpers/fixtures.js";

vi.mock("../../registry.js", () => ({
  getManifest: vi.fn(),
}));

vi.mock("../../format.js", async (importOriginal) => {
  const original =
    await importOriginal<typeof import("../../format.js")>();
  return { ...original };
});

beforeEach(async () => {
  const registry = await import("../../registry.js");
  vi.mocked(registry.getManifest).mockResolvedValue(makeManifest());
});

describe("list", () => {
  it("lists all libraries when no args", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await list([]);
    expect(logSpy).toHaveBeenCalledTimes(1);
    const output = logSpy.mock.calls[0]![0] as string;
    expect(output).toContain("Available Libraries");
    expect(output).toContain("react");
    expect(output).toContain("nextjs");
  });

  it("lists topics for valid library", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await list(["react"]);
    const output = logSpy.mock.calls[0]![0] as string;
    expect(output).toContain("React");
    expect(output).toContain("hooks");
    expect(output).toContain("components");
  });

  it("shows tags when topic has tags", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await list(["react"]);
    const output = logSpy.mock.calls[0]![0] as string;
    expect(output).toContain("useState");
  });

  it("does not show tags line for topic with no tags", async () => {
    const registry = await import("../../registry.js");
    vi.mocked(registry.getManifest).mockResolvedValue(
      makeManifest({
        libraries: [
          {
            id: "lib",
            name: "Lib",
            description: "test",
            version: "1.0",
            topics: [makeTopic({ tags: [] })],
          },
        ],
      })
    );
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await list(["lib"]);
    const output = logSpy.mock.calls[0]![0] as string;
    expect(output).not.toContain("useState");
  });

  it("exits with error for unknown library", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const exitSpy = vi
      .spyOn(process, "exit")
      .mockImplementation((() => {
        throw new Error("process.exit");
      }) as never);

    await expect(list(["unknown"])).rejects.toThrow("process.exit");
    expect(exitSpy).toHaveBeenCalledWith(1);
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining("Unknown library"));
  });
});
