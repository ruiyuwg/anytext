import { describe, it, expect, vi } from "vitest";
import type { ProcessedTopic } from "../../types.js";
import {
  writeTopics,
  commitStaged,
  cleanupStaging,
} from "../../pipeline/write.js";

vi.mock("node:fs");
vi.mock("../../pipeline/manifest.js", () => ({
  getRegistryDir: vi.fn(() => "/mock/registry"),
}));

const topic: ProcessedTopic = {
  id: "hooks",
  title: "Hooks",
  description: "React hooks",
  tags: ["useState"],
  tokens: 2000,
  content: "# Hooks",
};

describe("writeTopics", () => {
  it("skips write entirely when topics is empty", async () => {
    const fs = await import("node:fs");

    writeTopics("react", []);

    expect(fs.mkdirSync).not.toHaveBeenCalled();
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });

  it("writes topics to staging directory", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fs = await import("node:fs");

    writeTopics("react", [topic]);

    expect(fs.mkdirSync).toHaveBeenCalledWith(
      "/mock/registry/docs/.staging/react",
      { recursive: true },
    );
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      "/mock/registry/docs/.staging/react/hooks.md",
      "# Hooks\n",
      "utf-8",
    );
  });

  it("writes multiple topics to staging", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fs = await import("node:fs");
    vi.mocked(fs.writeFileSync).mockClear();

    const topics: ProcessedTopic[] = [
      topic,
      { ...topic, id: "state", title: "State", content: "# State" },
    ];
    writeTopics("react", topics);

    expect(fs.writeFileSync).toHaveBeenCalledTimes(2);
  });
});

describe("commitStaged", () => {
  it("removes live dir and renames staging to live", async () => {
    const fs = await import("node:fs");

    commitStaged("react");

    expect(fs.rmSync).toHaveBeenCalledWith("/mock/registry/docs/react", {
      recursive: true,
      force: true,
    });
    expect(fs.renameSync).toHaveBeenCalledWith(
      "/mock/registry/docs/.staging/react",
      "/mock/registry/docs/react",
    );

    // rmSync before renameSync
    const rmOrder = vi.mocked(fs.rmSync).mock.invocationCallOrder[0]!;
    const renameOrder = vi.mocked(fs.renameSync).mock.invocationCallOrder[0]!;
    expect(rmOrder).toBeLessThan(renameOrder);
  });
});

describe("cleanupStaging", () => {
  it("removes the staging base directory", async () => {
    const fs = await import("node:fs");

    cleanupStaging();

    expect(fs.rmSync).toHaveBeenCalledWith(
      "/mock/registry/docs/.staging",
      { recursive: true, force: true },
    );
  });
});
