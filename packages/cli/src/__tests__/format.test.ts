import { describe, it, expect, vi, beforeEach } from "vitest";

// Default test environment: no TTY, no env overrides → COLOR = false
// All style functions return plain strings in this environment.

beforeEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

async function importFormat() {
  return import("../format.js");
}

describe("useColor detection", () => {
  it("returns false when NO_COLOR is set", async () => {
    vi.stubEnv("NO_COLOR", "1");
    Object.defineProperty(process.stdout, "isTTY", {
      value: true,
      configurable: true,
    });
    const fmt = await importFormat();
    // bold should return plain string when color is off
    expect(fmt.bold("test")).toBe("test");
    Object.defineProperty(process.stdout, "isTTY", {
      value: undefined,
      configurable: true,
    });
  });

  it("returns true when FORCE_COLOR is set", async () => {
    vi.stubEnv("FORCE_COLOR", "1");
    const fmt = await importFormat();
    expect(fmt.bold("test")).toBe("\x1b[1mtest\x1b[0m");
  });

  it("returns true when stdout is a TTY", async () => {
    Object.defineProperty(process.stdout, "isTTY", {
      value: true,
      configurable: true,
    });
    const fmt = await importFormat();
    expect(fmt.bold("test")).toBe("\x1b[1mtest\x1b[0m");
    Object.defineProperty(process.stdout, "isTTY", {
      value: undefined,
      configurable: true,
    });
  });

  it("returns false when stdout is not a TTY", async () => {
    Object.defineProperty(process.stdout, "isTTY", {
      value: false,
      configurable: true,
    });
    const fmt = await importFormat();
    expect(fmt.bold("test")).toBe("test");
    Object.defineProperty(process.stdout, "isTTY", {
      value: undefined,
      configurable: true,
    });
  });

  it("NO_COLOR takes precedence over FORCE_COLOR", async () => {
    vi.stubEnv("NO_COLOR", "1");
    vi.stubEnv("FORCE_COLOR", "1");
    const fmt = await importFormat();
    expect(fmt.bold("test")).toBe("test");
  });
});

describe("style functions (color disabled)", () => {
  it("bold returns plain string", async () => {
    const { bold } = await importFormat();
    expect(bold("hello")).toBe("hello");
  });

  it("dim returns plain string", async () => {
    const { dim } = await importFormat();
    expect(dim("hello")).toBe("hello");
  });

  it("cyan returns plain string", async () => {
    const { cyan } = await importFormat();
    expect(cyan("hello")).toBe("hello");
  });

  it("green returns plain string", async () => {
    const { green } = await importFormat();
    expect(green("hello")).toBe("hello");
  });

  it("red returns plain string", async () => {
    const { red } = await importFormat();
    expect(red("hello")).toBe("hello");
  });

  it("heading returns plain string", async () => {
    const { heading } = await importFormat();
    expect(heading("Title")).toBe("Title");
  });

  it("hint returns plain string", async () => {
    const { hint } = await importFormat();
    expect(hint("tip")).toBe("tip");
  });
});

describe("style functions (color enabled)", () => {
  beforeEach(() => {
    vi.stubEnv("FORCE_COLOR", "1");
  });

  it("bold wraps with ANSI bold", async () => {
    const { bold } = await importFormat();
    expect(bold("x")).toBe("\x1b[1mx\x1b[0m");
  });

  it("dim wraps with ANSI dim", async () => {
    const { dim } = await importFormat();
    expect(dim("x")).toBe("\x1b[2mx\x1b[0m");
  });

  it("cyan wraps with ANSI cyan", async () => {
    const { cyan } = await importFormat();
    expect(cyan("x")).toBe("\x1b[36mx\x1b[0m");
  });

  it("green wraps with ANSI green", async () => {
    const { green } = await importFormat();
    expect(green("x")).toBe("\x1b[32mx\x1b[0m");
  });

  it("red wraps with ANSI red", async () => {
    const { red } = await importFormat();
    expect(red("x")).toBe("\x1b[31mx\x1b[0m");
  });

  it("heading wraps with bold+cyan", async () => {
    const { heading } = await importFormat();
    expect(heading("x")).toBe("\x1b[1;36mx\x1b[0m");
  });

  it("hint wraps with dim+italic", async () => {
    const { hint } = await importFormat();
    expect(hint("x")).toBe("\x1b[2;3mx\x1b[0m");
  });
});

describe("padEnd", () => {
  it("pads plain string to width", async () => {
    const { padEnd } = await importFormat();
    expect(padEnd("ab", 5)).toBe("ab   ");
  });

  it("does not pad when string is already at width", async () => {
    const { padEnd } = await importFormat();
    expect(padEnd("abc", 3)).toBe("abc");
  });

  it("does not pad when string exceeds width", async () => {
    const { padEnd } = await importFormat();
    expect(padEnd("abcde", 3)).toBe("abcde");
  });

  it("ignores ANSI codes in width calculation", async () => {
    vi.stubEnv("FORCE_COLOR", "1");
    const { bold, padEnd } = await importFormat();
    const styled = bold("ab"); // \x1b[1mab\x1b[0m — visual length 2
    const padded = padEnd(styled, 5);
    // Should add 3 spaces based on visual length of 2
    expect(padded).toBe(styled + "   ");
  });
});

describe("printError", () => {
  it("prints error message to stderr (no color)", async () => {
    const { printError } = await importFormat();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    printError("something broke");
    expect(errorSpy).toHaveBeenCalledWith("error: something broke");
  });

  it("prints suggestion as second line (no color)", async () => {
    const { printError } = await importFormat();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    printError("not found", "try again");
    expect(errorSpy).toHaveBeenCalledTimes(2);
    expect(errorSpy).toHaveBeenNthCalledWith(1, "error: not found");
    expect(errorSpy).toHaveBeenNthCalledWith(2, "try again");
  });

  it("prints colored error when color enabled", async () => {
    vi.stubEnv("FORCE_COLOR", "1");
    const { printError } = await importFormat();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    printError("fail");
    expect(errorSpy).toHaveBeenCalledWith("\x1b[1;31merror:\x1b[0m fail");
  });

  it("prints colored suggestion when color enabled", async () => {
    vi.stubEnv("FORCE_COLOR", "1");
    const { printError } = await importFormat();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    printError("fail", "hint");
    expect(errorSpy).toHaveBeenNthCalledWith(2, "\x1b[2;3mhint\x1b[0m");
  });

  it("does not print suggestion when not provided", async () => {
    const { printError } = await importFormat();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    printError("msg");
    expect(errorSpy).toHaveBeenCalledTimes(1);
  });
});
