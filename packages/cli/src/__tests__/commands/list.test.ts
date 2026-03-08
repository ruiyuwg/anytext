import { describe, it, expect, vi, beforeEach } from "vitest";
import { list } from "../../commands/list.js";
import { makeManifest, makeTopic } from "../helpers/fixtures.js";
import type { Topic } from "../../types.js";

vi.mock("../../registry.js", () => ({
  getManifest: vi.fn(),
}));

vi.mock("../../format.js", async (importOriginal) => {
  const original = await importOriginal<typeof import("../../format.js")>();
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
      }),
    );
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await list(["lib"]);
    const output = logSpy.mock.calls[0]![0] as string;
    expect(output).not.toContain("useState");
  });

  it("shows message when no libraries available", async () => {
    const registry = await import("../../registry.js");
    vi.mocked(registry.getManifest).mockResolvedValue(
      makeManifest({ libraries: [] }),
    );
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await list([]);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("No libraries available"),
    );
  });

  it("shows message when library has no topics", async () => {
    const registry = await import("../../registry.js");
    vi.mocked(registry.getManifest).mockResolvedValue(
      makeManifest({
        libraries: [
          {
            id: "empty",
            name: "Empty",
            description: "No topics",
            version: "1.0",
            topics: [],
          },
        ],
      }),
    );
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await list(["empty"]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("0 topics"));
  });

  it("exits with error for unknown library", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const exitSpy = vi.spyOn(process, "exit").mockImplementation((() => {
      throw new Error("process.exit");
    }) as never);

    await expect(list(["unknown"])).rejects.toThrow("process.exit");
    expect(exitSpy).toHaveBeenCalledWith(1);
    expect(errorSpy).toHaveBeenCalledWith(
      expect.stringContaining("Unknown library"),
    );
  });

  it("shows grouped summary when library has > 100 topics", async () => {
    const topics: Topic[] = [];
    for (let i = 0; i < 50; i++) {
      topics.push(
        makeTopic({ id: `workers-topic-${i}`, title: `Workers Topic ${i}` }),
      );
    }
    for (let i = 0; i < 40; i++) {
      topics.push(
        makeTopic({ id: `pages-topic-${i}`, title: `Pages Topic ${i}` }),
      );
    }
    for (let i = 0; i < 15; i++) {
      topics.push(
        makeTopic({ id: `r2-topic-${i}`, title: `R2 Topic ${i}` }),
      );
    }
    const registry = await import("../../registry.js");
    vi.mocked(registry.getManifest).mockResolvedValue(
      makeManifest({
        libraries: [
          {
            id: "cloudflare",
            name: "Cloudflare",
            description: "Cloud platform",
            version: "2024",
            topics,
          },
        ],
      }),
    );
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await list(["cloudflare"]);
    const output = logSpy.mock.calls[0]![0] as string;
    expect(output).toContain("Cloudflare");
    expect(output).toContain("105 topics");
    expect(output).toContain("pages");
    expect(output).toContain("40 topics");
    expect(output).toContain("r2");
    expect(output).toContain("15 topics");
    expect(output).toContain("workers");
    expect(output).toContain("50 topics");
    expect(output).toContain("Total: 105 topics");
  });

  it("shows individual topics when library has <= 100 topics", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await list(["react"]);
    const output = logSpy.mock.calls[0]![0] as string;
    expect(output).toContain("hooks");
    expect(output).toContain("components");
    expect(output).not.toContain("Total:");
  });

  it("groups are sorted alphabetically", async () => {
    const topics: Topic[] = [];
    for (let i = 0; i < 60; i++) {
      topics.push(
        makeTopic({ id: `zebra-topic-${i}`, title: `Zebra Topic ${i}` }),
      );
    }
    for (let i = 0; i < 50; i++) {
      topics.push(
        makeTopic({ id: `alpha-topic-${i}`, title: `Alpha Topic ${i}` }),
      );
    }
    const registry = await import("../../registry.js");
    vi.mocked(registry.getManifest).mockResolvedValue(
      makeManifest({
        libraries: [
          {
            id: "large",
            name: "Large",
            description: "Large lib",
            version: "1.0",
            topics,
          },
        ],
      }),
    );
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await list(["large"]);
    const output = logSpy.mock.calls[0]![0] as string;
    const alphaIdx = output.indexOf("alpha");
    const zebraIdx = output.indexOf("zebra");
    expect(alphaIdx).toBeLessThan(zebraIdx);
  });

  it("shows total count at bottom for grouped view", async () => {
    const topics: Topic[] = [];
    for (let i = 0; i < 101; i++) {
      topics.push(
        makeTopic({ id: `svc-topic-${i}`, title: `Svc Topic ${i}` }),
      );
    }
    const registry = await import("../../registry.js");
    vi.mocked(registry.getManifest).mockResolvedValue(
      makeManifest({
        libraries: [
          {
            id: "big",
            name: "Big",
            description: "Big lib",
            version: "1.0",
            topics,
          },
        ],
      }),
    );
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await list(["big"]);
    const output = logSpy.mock.calls[0]![0] as string;
    expect(output).toContain("Total: 101 topics");
  });

  it("groups topics without hyphens by their full ID", async () => {
    const topics: Topic[] = [];
    for (let i = 0; i < 80; i++) {
      topics.push(
        makeTopic({ id: `svc-topic-${i}`, title: `Svc Topic ${i}` }),
      );
    }
    for (let i = 0; i < 25; i++) {
      topics.push(
        makeTopic({ id: `standalone${i}`, title: `Standalone ${i}` }),
      );
    }
    const registry = await import("../../registry.js");
    vi.mocked(registry.getManifest).mockResolvedValue(
      makeManifest({
        libraries: [
          {
            id: "mixed",
            name: "Mixed",
            description: "Mixed lib",
            version: "1.0",
            topics,
          },
        ],
      }),
    );
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    await list(["mixed"]);
    const output = logSpy.mock.calls[0]![0] as string;
    expect(output).toContain("svc");
    expect(output).toContain("80 topics");
    // Each standalone topic has unique full ID as its group
    expect(output).toContain("Total: 105 topics");
  });
});
