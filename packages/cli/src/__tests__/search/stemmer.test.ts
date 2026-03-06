import { describe, it, expect } from "vitest";
import { stem } from "../../search/stemmer.js";

describe("stem", () => {
  it("returns words <= 3 chars unchanged", () => {
    expect(stem("the")).toBe("the");
    expect(stem("is")).toBe("is");
    expect(stem("a")).toBe("a");
  });

  describe("inflectional rules", () => {
    it("sses → ss: processes → process", () => {
      expect(stem("processes")).toBe("process");
    });

    it("ies → i: queries → queri", () => {
      expect(stem("queries")).toBe("queri");
    });

    it("ating → at: creating → creat", () => {
      expect(stem("creating")).toBe("creat");
    });

    it("izing → iz: optimizing → optimiz", () => {
      expect(stem("optimizing")).toBe("optimiz");
    });

    it("tion → t: authentication → authenticat", () => {
      expect(stem("authentication")).toBe("authenticat");
    });

    it("sion → s: expression → express", () => {
      expect(stem("expression")).toBe("express");
    });

    it("ment → (empty): management → manage", () => {
      expect(stem("management")).toBe("manage");
    });

    it("ness → (empty): darkness → dark", () => {
      expect(stem("darkness")).toBe("dark");
    });

    it("ing → (empty): routing → rout", () => {
      expect(stem("routing")).toBe("rout");
    });

    it("ated → at: updated → updat", () => {
      expect(stem("updated")).toBe("updat");
    });

    it("ized → iz: optimized → optimiz", () => {
      expect(stem("optimized")).toBe("optimiz");
    });

    it("ed → (empty): fetched → fetch", () => {
      expect(stem("fetched")).toBe("fetch");
    });

    it("es → (empty): caches → cach", () => {
      expect(stem("caches")).toBe("cach");
    });
  });

  it("skips inflectional rule when stem would be < 3 chars", () => {
    // "bing" → "ing" rule would produce "b" (length 1), so skipped
    // no other inflectional or trailing-s rule matches, derivational: no match
    expect(stem("bing")).toBe("bing");
  });

  describe("trailing s removal", () => {
    it("removes trailing s: hooks → hook", () => {
      expect(stem("hooks")).toBe("hook");
    });

    it("does NOT remove trailing ss: access stays", () => {
      expect(stem("access")).toBe("access");
    });
  });

  describe("derivational rules", () => {
    it("able → (empty): readable → read", () => {
      expect(stem("readable")).toBe("read");
    });

    it("ible → (empty): compatible → compat", () => {
      expect(stem("compatible")).toBe("compat");
    });

    it("ful → (empty): powerful → power", () => {
      expect(stem("powerful")).toBe("power");
    });

    it("ous → (empty): only fires after inflectional (nervousness → nerv)", () => {
      // "nervousness" → inflectional "ness" → "nervous" → trailing-s skipped (result !== word) → derivational "ous" → "nerv"
      expect(stem("nervousness")).toBe("nerv");
    });

    it("ive → (empty): reactive → react", () => {
      expect(stem("reactive")).toBe("react");
    });

    it("ly → (empty): quickly → quick", () => {
      expect(stem("quickly")).toBe("quick");
    });

    it("er → (empty): router → rout", () => {
      expect(stem("router")).toBe("rout");
    });

    it("al → (empty): functional → function", () => {
      expect(stem("functional")).toBe("function");
    });
  });

  it("returns word unchanged when no rules match", () => {
    expect(stem("react")).toBe("react");
  });

  it("applies both inflectional then derivational rules", () => {
    // "manageable" → inflectional: no match → trailing s: no → derivational: "able" → "manage"
    expect(stem("manageable")).toBe("manage");
  });

  it("trailing s strips before derivational, blocking ous/ive/etc", () => {
    // "dangerous" → no inflectional → trailing s → "dangerou" → derivational "ous" doesn't match "rou"
    expect(stem("dangerous")).toBe("dangerou");
  });
});
