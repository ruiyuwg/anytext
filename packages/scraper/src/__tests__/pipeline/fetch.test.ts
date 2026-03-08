import { describe, it, expect, vi } from "vitest";
import { fetchContent } from "../../pipeline/fetch.js";

describe("fetchContent", () => {
  it("returns text on OK response", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("hello content", { status: 200 }),
    );
    vi.spyOn(console, "log").mockImplementation(() => {});

    const result = await fetchContent("https://example.com/doc.txt", {
      retries: 0,
    });
    expect(result).toBe("hello content");
  });

  it("throws on non-OK response", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("", { status: 404, statusText: "Not Found" }),
    );
    vi.spyOn(console, "log").mockImplementation(() => {});

    await expect(
      fetchContent("https://example.com/missing", { retries: 0 }),
    ).rejects.toThrow("404");
  });

  it("propagates network errors", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(
      new Error("Network error"),
    );
    vi.spyOn(console, "log").mockImplementation(() => {});

    await expect(
      fetchContent("https://example.com/fail", { retries: 0 }),
    ).rejects.toThrow("Network error");
  });

  it("retries on 500 then succeeds", async () => {
    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(
        new Response("", { status: 500, statusText: "Server Error" }),
      )
      .mockResolvedValueOnce(new Response("success", { status: 200 }));
    vi.spyOn(console, "log").mockImplementation(() => {});

    const result = await fetchContent("https://example.com/retry", {
      retries: 1,
      retryDelayMs: 1,
    });
    expect(result).toBe("success");
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });

  it("exhausts retries then throws", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("", { status: 500, statusText: "Server Error" }),
    );
    vi.spyOn(console, "log").mockImplementation(() => {});

    await expect(
      fetchContent("https://example.com/always-fail", {
        retries: 1,
        retryDelayMs: 1,
      }),
    ).rejects.toThrow("500");
  });

  it("passes AbortSignal.timeout to fetch", async () => {
    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(new Response("ok", { status: 200 }));
    vi.spyOn(console, "log").mockImplementation(() => {});

    await fetchContent("https://example.com/timeout", {
      retries: 0,
      timeoutMs: 5000,
    });

    const callArgs = fetchSpy.mock.calls[0]!;
    expect(callArgs[1]).toHaveProperty("signal");
  });

  it("uses default options when none provided", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("ok", { status: 200 }),
    );
    vi.spyOn(console, "log").mockImplementation(() => {});

    const result = await fetchContent("https://example.com/defaults");
    expect(result).toBe("ok");
  });

  it("retries on network error then succeeds", async () => {
    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockRejectedValueOnce(new Error("Network error"))
      .mockResolvedValueOnce(new Response("recovered", { status: 200 }));
    vi.spyOn(console, "log").mockImplementation(() => {});

    const result = await fetchContent("https://example.com/net-retry", {
      retries: 1,
      retryDelayMs: 1,
    });
    expect(result).toBe("recovered");
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });

  it("retries on 429 with Retry-After header", async () => {
    const delays: number[] = [];
    const originalSetTimeout = globalThis.setTimeout;
    vi.spyOn(globalThis, "setTimeout").mockImplementation(
      ((fn: () => void, ms: number) => {
        delays.push(ms);
        return originalSetTimeout(fn, 0);
      }) as typeof setTimeout,
    );
    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(
        new Response("", {
          status: 429,
          statusText: "Too Many Requests",
          headers: { "Retry-After": "5" },
        }),
      )
      .mockResolvedValueOnce(new Response("success", { status: 200 }));
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});

    const result = await fetchContent("https://example.com/rate-limited", {
      retries: 1,
      retryDelayMs: 1,
    });
    expect(result).toBe("success");
    expect(fetchSpy).toHaveBeenCalledTimes(2);
    // Should wait Retry-After seconds (5s = 5000ms)
    expect(delays).toContain(5000);
  });

  it("retries on 429 with default 60s when no Retry-After header", async () => {
    const delays: number[] = [];
    const originalSetTimeout = globalThis.setTimeout;
    vi.spyOn(globalThis, "setTimeout").mockImplementation(
      ((fn: () => void, ms: number) => {
        delays.push(ms);
        return originalSetTimeout(fn, 0);
      }) as typeof setTimeout,
    );
    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(
        new Response("", { status: 429, statusText: "Too Many Requests" }),
      )
      .mockResolvedValueOnce(new Response("success", { status: 200 }));
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});

    const result = await fetchContent("https://example.com/rate-limited-no-header", {
      retries: 1,
      retryDelayMs: 1,
    });
    expect(result).toBe("success");
    // Default 60s = 60000ms
    expect(delays).toContain(60000);
  });

  it("429 on last attempt throws error", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("", { status: 429, statusText: "Too Many Requests" }),
    );
    vi.spyOn(console, "log").mockImplementation(() => {});

    await expect(
      fetchContent("https://example.com/always-429", { retries: 0 }),
    ).rejects.toThrow("429");
  });

  it("429 with invalid Retry-After uses 60s default", async () => {
    const delays: number[] = [];
    const originalSetTimeout = globalThis.setTimeout;
    vi.spyOn(globalThis, "setTimeout").mockImplementation(
      ((fn: () => void, ms: number) => {
        delays.push(ms);
        return originalSetTimeout(fn, 0);
      }) as typeof setTimeout,
    );
    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(
        new Response("", {
          status: 429,
          statusText: "Too Many Requests",
          headers: { "Retry-After": "invalid" },
        }),
      )
      .mockResolvedValueOnce(new Response("success", { status: 200 }));
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});

    const result = await fetchContent("https://example.com/rate-limited-bad-header", {
      retries: 1,
      retryDelayMs: 1,
    });
    expect(result).toBe("success");
    expect(delays).toContain(60000);
  });

  it("uses exponential backoff for retry delays", async () => {
    const delays: number[] = [];
    const originalSetTimeout = globalThis.setTimeout;
    vi.spyOn(globalThis, "setTimeout").mockImplementation(
      ((fn: () => void, ms: number) => {
        delays.push(ms);
        return originalSetTimeout(fn, 0);
      }) as typeof setTimeout,
    );
    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(
        new Response("", { status: 500, statusText: "Error" }),
      )
      .mockResolvedValueOnce(
        new Response("", { status: 500, statusText: "Error" }),
      )
      .mockResolvedValueOnce(new Response("ok", { status: 200 }));
    vi.spyOn(console, "log").mockImplementation(() => {});

    await fetchContent("https://example.com/backoff", {
      retries: 2,
      retryDelayMs: 100,
    });

    // First retry: 100 * 2^0 = 100, Second retry: 100 * 2^1 = 200
    expect(delays).toEqual([100, 200]);
  });
});
