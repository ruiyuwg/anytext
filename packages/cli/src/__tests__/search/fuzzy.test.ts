import { describe, it, expect } from "vitest";
import { editDistance, fuzzyMatch } from "../../search/fuzzy.js";

describe("editDistance", () => {
  it("returns 0 for two empty strings", () => {
    expect(editDistance("", "")).toBe(0);
  });

  it("returns length of second when first is empty", () => {
    expect(editDistance("", "abc")).toBe(3);
  });

  it("returns length of first when second is empty", () => {
    expect(editDistance("abc", "")).toBe(3);
  });

  it("returns 0 for identical strings", () => {
    expect(editDistance("hello", "hello")).toBe(0);
  });

  it("handles single substitution", () => {
    expect(editDistance("cat", "bat")).toBe(1);
  });

  it("handles single insertion", () => {
    expect(editDistance("cat", "cats")).toBe(1);
  });

  it("handles single deletion", () => {
    expect(editDistance("cats", "cat")).toBe(1);
  });

  it("kitten vs sitting → 3", () => {
    expect(editDistance("kitten", "sitting")).toBe(3);
  });
});

describe("fuzzyMatch", () => {
  it("returns false for token length <= 3 (maxDistance = 0)", () => {
    expect(fuzzyMatch("the", "the")).toBe(false);
    expect(fuzzyMatch("abc", "abd")).toBe(false);
  });

  it("token length 4: tolerance 1", () => {
    expect(fuzzyMatch("hook", "hoak")).toBe(true);
    expect(fuzzyMatch("hook", "haak")).toBe(false);
  });

  it("token length 5: tolerance 1", () => {
    expect(fuzzyMatch("react", "reakt")).toBe(true);
    expect(fuzzyMatch("react", "rekkt")).toBe(false);
  });

  it("token length 6: tolerance 2", () => {
    expect(fuzzyMatch("router", "routar")).toBe(true);
    expect(fuzzyMatch("routed", "rauted")).toBe(true);
  });

  it("token length 8: tolerance 2", () => {
    expect(fuzzyMatch("fetching", "fetchnig")).toBe(true);
  });

  it("token length 9+: tolerance 3", () => {
    expect(fuzzyMatch("component", "componant")).toBe(true);
    expect(fuzzyMatch("component", "componxyz")).toBe(true);
  });

  it("matches against individual words in target", () => {
    // "routr" vs "app-router": split into ["app", "router"]. "routr" vs "router": len diff 1 <= 1, editDist=1. Match.
    expect(fuzzyMatch("routr", "app-router")).toBe(true);
  });

  it("skips words where length difference > max", () => {
    // "hook" (len 4, tolerance 1) vs "middleware" (len 10, diff 6 > 1)
    expect(fuzzyMatch("hook", "middleware")).toBe(false);
  });

  it("returns false when no words match", () => {
    expect(fuzzyMatch("zzzzz", "hello world")).toBe(false);
  });
});
