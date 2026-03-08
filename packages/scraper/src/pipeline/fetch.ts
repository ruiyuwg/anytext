export interface FetchOptions {
  retries?: number;
  timeoutMs?: number;
  retryDelayMs?: number;
}

export async function fetchContent(
  url: string,
  options?: FetchOptions,
): Promise<string> {
  const retries = options?.retries ?? 2;
  const timeoutMs = options?.timeoutMs ?? 30000;
  const retryDelayMs = options?.retryDelayMs ?? 1000;

  console.log(`  Fetching ${url}`);

  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(timeoutMs),
      });
      if (response.status === 429 && attempt < retries) {
        const retryAfter = parseRetryAfter(response.headers.get("Retry-After"));
        console.warn(`  Rate limited (429) on ${url}, retrying after ${retryAfter}s`);
        await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
        continue;
      }
      if (!response.ok) {
        throw new Error(
          `Failed to fetch ${url}: ${response.status} ${response.statusText}`,
        );
      }
      return response.text();
    } catch (err) {
      lastError = err as Error;
      if (attempt < retries) {
        const delay = retryDelayMs * Math.pow(2, attempt);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError!;
}

function parseRetryAfter(header: string | null): number {
  if (!header) return 60;
  const seconds = Number(header);
  if (!Number.isNaN(seconds) && seconds > 0) return seconds;
  return 60;
}
