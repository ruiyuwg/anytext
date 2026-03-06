import { describe, it, expect } from "vitest";
import { scoreTopics } from "../../search/scorer.js";
import { makeManifest, makeTopic, makeLibrary } from "../helpers/fixtures.js";

describe("scoreTopics", () => {
  it("returns empty array for empty manifest", () => {
    const manifest = makeManifest({ libraries: [] });
    expect(scoreTopics(manifest, "react")).toEqual([]);
  });

  it("returns empty array for no-match query", () => {
    const manifest = makeManifest();
    expect(scoreTopics(manifest, "xyznonexistent")).toEqual([]);
  });

  it("exact match on topic.id scores highest tier", () => {
    const manifest = makeManifest();
    const results = scoreTopics(manifest, "hooks");
    expect(results.length).toBeGreaterThan(0);
    expect(results[0]!.topic.id).toBe("hooks");
  });

  it("substring match works", () => {
    const manifest = makeManifest();
    const results = scoreTopics(manifest, "rout");
    expect(results.some((r) => r.topic.id === "routing")).toBe(true);
  });

  it("stem match works (routing matches rout stemmed forms)", () => {
    const manifest = makeManifest();
    // "routed" stems to "rout", "routing" stems to "rout" — should match
    const results = scoreTopics(manifest, "routed");
    expect(results.some((r) => r.topic.id === "routing")).toBe(true);
  });

  it("fuzzy match works", () => {
    const manifest = makeManifest();
    // "compnents" is a typo for "components"
    const results = scoreTopics(manifest, "compnents");
    expect(results.some((r) => r.topic.id === "components")).toBe(true);
  });

  it("results are sorted descending by score", () => {
    const manifest = makeManifest();
    const results = scoreTopics(manifest, "react");
    for (let i = 1; i < results.length; i++) {
      expect(results[i]!.score).toBeLessThanOrEqual(results[i - 1]!.score);
    }
  });

  it("returns max 10 results", () => {
    const topics = Array.from({ length: 15 }, (_, i) =>
      makeTopic({
        id: `topic-${i}`,
        title: `React Topic ${i}`,
        description: `About react topic ${i}`,
        path: `react/topic-${i}.md`,
      }),
    );
    const manifest = makeManifest({
      libraries: [makeLibrary({ topics })],
    });
    const results = scoreTopics(manifest, "react");
    expect(results.length).toBeLessThanOrEqual(10);
  });

  it("handles topic with empty tags array", () => {
    const manifest = makeManifest({
      libraries: [
        makeLibrary({
          topics: [makeTopic({ tags: [] })],
        }),
      ],
    });
    const results = scoreTopics(manifest, "hooks");
    expect(results.length).toBeGreaterThan(0);
  });

  it("alias expansion: 'next' finds nextjs library", () => {
    const manifest = makeManifest();
    const results = scoreTopics(manifest, "next");
    expect(results.some((r) => r.library.id === "nextjs")).toBe(true);
  });

  it("multi-word query scores all tokens", () => {
    const manifest = makeManifest();
    const results = scoreTopics(manifest, "react hooks");
    expect(results.length).toBeGreaterThan(0);
    expect(results[0]!.topic.id).toBe("hooks");
  });
});
