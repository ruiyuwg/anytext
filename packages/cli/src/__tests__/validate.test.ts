import { describe, it, expect } from "vitest";
import { validateManifest } from "../validate.js";

const validTopic = {
  id: "hooks",
  title: "Hooks",
  description: "React hooks",
  tags: ["useState"],
  path: "react/hooks.md",
  tokens: 2000,
};

const validLibrary = {
  id: "react",
  name: "React",
  description: "UI library",
  version: "19.0",
  topics: [validTopic],
};

const validManifest = {
  version: 1,
  updatedAt: "2025-01-01",
  libraries: [validLibrary],
};

describe("validateManifest", () => {
  it("accepts a valid manifest", () => {
    expect(validateManifest(validManifest)).toBe(true);
  });

  it("accepts manifest with empty libraries", () => {
    expect(validateManifest({ ...validManifest, libraries: [] })).toBe(true);
  });

  it("accepts library with empty topics", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [{ ...validLibrary, topics: [] }],
      })
    ).toBe(true);
  });

  it("accepts topic with empty tags", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [
          {
            ...validLibrary,
            topics: [{ ...validTopic, tags: [] }],
          },
        ],
      })
    ).toBe(true);
  });

  it("rejects null", () => {
    expect(validateManifest(null)).toBe(false);
  });

  it("rejects undefined", () => {
    expect(validateManifest(undefined)).toBe(false);
  });

  it("rejects a string", () => {
    expect(validateManifest("not a manifest")).toBe(false);
  });

  it("rejects an array", () => {
    expect(validateManifest([1, 2, 3])).toBe(false);
  });

  it("rejects missing version", () => {
    const { updatedAt, libraries } = validManifest;
    expect(validateManifest({ updatedAt, libraries })).toBe(false);
  });

  it("rejects non-number version", () => {
    expect(validateManifest({ ...validManifest, version: "1" })).toBe(false);
  });

  it("rejects non-string updatedAt", () => {
    expect(validateManifest({ ...validManifest, updatedAt: 123 })).toBe(false);
  });

  it("rejects non-array libraries", () => {
    expect(validateManifest({ ...validManifest, libraries: "not array" })).toBe(false);
  });

  it("rejects library with non-string id", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [{ ...validLibrary, id: 123 }],
      })
    ).toBe(false);
  });

  it("rejects library with non-string name", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [{ ...validLibrary, name: null }],
      })
    ).toBe(false);
  });

  it("rejects library with non-string description", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [{ ...validLibrary, description: 42 }],
      })
    ).toBe(false);
  });

  it("rejects library with non-string version", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [{ ...validLibrary, version: 1 }],
      })
    ).toBe(false);
  });

  it("rejects library with non-array topics", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [{ ...validLibrary, topics: "not array" }],
      })
    ).toBe(false);
  });

  it("rejects library that is not an object", () => {
    expect(
      validateManifest({ ...validManifest, libraries: ["not an object"] })
    ).toBe(false);
  });

  it("rejects topic with non-string id", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [
          { ...validLibrary, topics: [{ ...validTopic, id: 1 }] },
        ],
      })
    ).toBe(false);
  });

  it("rejects topic with non-string title", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [
          { ...validLibrary, topics: [{ ...validTopic, title: true }] },
        ],
      })
    ).toBe(false);
  });

  it("rejects topic with non-string description", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [
          { ...validLibrary, topics: [{ ...validTopic, description: [] }] },
        ],
      })
    ).toBe(false);
  });

  it("rejects topic with non-string path", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [
          { ...validLibrary, topics: [{ ...validTopic, path: 42 }] },
        ],
      })
    ).toBe(false);
  });

  it("rejects topic with non-number tokens", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [
          { ...validLibrary, topics: [{ ...validTopic, tokens: "many" }] },
        ],
      })
    ).toBe(false);
  });

  it("rejects topic with non-array tags", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [
          { ...validLibrary, topics: [{ ...validTopic, tags: "not array" }] },
        ],
      })
    ).toBe(false);
  });

  it("rejects topic with non-string tag values", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [
          { ...validLibrary, topics: [{ ...validTopic, tags: [123] }] },
        ],
      })
    ).toBe(false);
  });

  it("rejects topic that is not an object", () => {
    expect(
      validateManifest({
        ...validManifest,
        libraries: [{ ...validLibrary, topics: [42] }],
      })
    ).toBe(false);
  });
});
