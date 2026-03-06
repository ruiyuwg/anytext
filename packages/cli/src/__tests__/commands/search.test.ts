import { describe, it, expect, vi, beforeEach } from "vitest";
import { search } from "../../commands/search.js";
import { makeManifest, makeLibrary, makeTopic } from "../helpers/fixtures.js";

vi.mock("../../registry.js", () => ({
  getManifest: vi.fn(),
}));

vi.mock("../../search/scorer.js", () => ({
  scoreTopics: vi.fn(),
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

describe("search", () => {
  it("errors with empty args", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const exitSpy = vi
      .spyOn(process, "exit")
      .mockImplementation((() => {
        throw new Error("process.exit");
      }) as never);

    await expect(search([])).rejects.toThrow("process.exit");
    expect(exitSpy).toHaveBeenCalledWith(1);
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining("Usage"));
  });

  it("shows no results message when nothing found", async () => {
    const scorer = await import("../../search/scorer.js");
    vi.mocked(scorer.scoreTopics).mockReturnValue([]);

    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await search(["nonexistent"]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("No results found"));
  });

  it("shows formatted results when found", async () => {
    const scorer = await import("../../search/scorer.js");
    const lib = makeLibrary();
    const topic = makeTopic();
    vi.mocked(scorer.scoreTopics).mockReturnValue([
      { library: lib, topic, score: 10 },
    ]);

    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await search(["hooks"]);
    const output = logSpy.mock.calls[0]![0] as string;
    expect(output).toContain("react/hooks");
    expect(output).toContain("1");
  });

  it("joins multi-word args into query", async () => {
    const scorer = await import("../../search/scorer.js");
    vi.mocked(scorer.scoreTopics).mockReturnValue([]);

    vi.spyOn(console, "log").mockImplementation(() => {});
    await search(["server", "components"]);
    expect(scorer.scoreTopics).toHaveBeenCalledWith(
      expect.anything(),
      "server components"
    );
  });
});
