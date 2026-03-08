export class RateLimiter {
  private readonly intervalMs: number;
  private lastCallTime = 0;
  private queue: Array<() => void> = [];
  private processing = false;

  constructor(requestsPerSecond: number) {
    this.intervalMs = 1000 / requestsPerSecond;
  }

  async acquire(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.queue.push(resolve);
      this.processQueue();
    });
  }

  private processQueue(): void {
    if (this.processing || this.queue.length === 0) return;
    this.processing = true;

    const now = Date.now();
    const elapsed = now - this.lastCallTime;
    const delay = Math.max(0, this.intervalMs - elapsed);

    setTimeout(() => {
      this.lastCallTime = Date.now();
      const resolve = this.queue.shift()!;
      this.processing = false;
      resolve();
      this.processQueue();
    }, delay);
  }
}

export function createHostLimiter(rateLimit?: number): RateLimiter {
  return new RateLimiter(rateLimit ?? 10);
}
