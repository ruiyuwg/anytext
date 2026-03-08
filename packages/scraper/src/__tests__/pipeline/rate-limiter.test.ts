import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { RateLimiter, createHostLimiter } from "../../pipeline/rate-limiter.js";

describe("RateLimiter", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("resolves immediately on first acquire", async () => {
    const limiter = new RateLimiter(10);
    const resolved = vi.fn();

    limiter.acquire().then(resolved);
    await vi.advanceTimersByTimeAsync(0);

    expect(resolved).toHaveBeenCalled();
  });

  it("spaces sequential calls by the correct interval", async () => {
    const limiter = new RateLimiter(10); // 100ms interval
    const times: number[] = [];

    const p1 = limiter.acquire().then(() => times.push(Date.now()));
    await vi.advanceTimersByTimeAsync(0);

    const p2 = limiter.acquire().then(() => times.push(Date.now()));
    await vi.advanceTimersByTimeAsync(100);

    await Promise.all([p1, p2]);

    expect(times).toHaveLength(2);
    expect(times[1]! - times[0]!).toBeGreaterThanOrEqual(100);
  });

  it("queues concurrent calls and processes them sequentially", async () => {
    const limiter = new RateLimiter(10); // 100ms interval
    const order: number[] = [];

    const p1 = limiter.acquire().then(() => order.push(1));
    const p2 = limiter.acquire().then(() => order.push(2));
    const p3 = limiter.acquire().then(() => order.push(3));

    // First resolves immediately
    await vi.advanceTimersByTimeAsync(0);
    expect(order).toEqual([1]);

    // Second after 100ms
    await vi.advanceTimersByTimeAsync(100);
    expect(order).toEqual([1, 2]);

    // Third after another 100ms
    await vi.advanceTimersByTimeAsync(100);
    expect(order).toEqual([1, 2, 3]);

    await Promise.all([p1, p2, p3]);
  });

  it("uses correct interval for different rates", async () => {
    const limiter = new RateLimiter(5); // 200ms interval
    const times: number[] = [];

    const p1 = limiter.acquire().then(() => times.push(Date.now()));
    await vi.advanceTimersByTimeAsync(0);

    const p2 = limiter.acquire().then(() => times.push(Date.now()));
    await vi.advanceTimersByTimeAsync(200);

    await Promise.all([p1, p2]);

    expect(times[1]! - times[0]!).toBeGreaterThanOrEqual(200);
  });

  it("does not delay when enough time has elapsed between calls", async () => {
    const limiter = new RateLimiter(10); // 100ms interval
    const times: number[] = [];

    const p1 = limiter.acquire().then(() => times.push(Date.now()));
    await vi.advanceTimersByTimeAsync(0);

    // Wait longer than the interval
    await vi.advanceTimersByTimeAsync(500);

    const p2 = limiter.acquire().then(() => times.push(Date.now()));
    await vi.advanceTimersByTimeAsync(0);

    await Promise.all([p1, p2]);

    expect(times).toHaveLength(2);
    // Second call should resolve without additional delay since 500ms > 100ms interval
    expect(times[1]! - times[0]!).toBeGreaterThanOrEqual(500);
  });
});

describe("createHostLimiter", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("creates a RateLimiter with default 10 req/s", async () => {
    const limiter = createHostLimiter();
    const times: number[] = [];

    const p1 = limiter.acquire().then(() => times.push(Date.now()));
    await vi.advanceTimersByTimeAsync(0);

    const p2 = limiter.acquire().then(() => times.push(Date.now()));
    await vi.advanceTimersByTimeAsync(100);

    await Promise.all([p1, p2]);

    // 10 req/s = 100ms interval
    expect(times[1]! - times[0]!).toBeGreaterThanOrEqual(100);
  });

  it("creates a RateLimiter with custom rate", async () => {
    const limiter = createHostLimiter(2); // 500ms interval
    const times: number[] = [];

    const p1 = limiter.acquire().then(() => times.push(Date.now()));
    await vi.advanceTimersByTimeAsync(0);

    const p2 = limiter.acquire().then(() => times.push(Date.now()));
    await vi.advanceTimersByTimeAsync(500);

    await Promise.all([p1, p2]);

    expect(times[1]! - times[0]!).toBeGreaterThanOrEqual(500);
  });

  it("returns a RateLimiter instance", () => {
    const limiter = createHostLimiter();
    expect(limiter).toBeInstanceOf(RateLimiter);
  });
});
