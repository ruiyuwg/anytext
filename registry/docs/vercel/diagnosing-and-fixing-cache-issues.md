# Diagnosing and fixing cache issues

Use this guide to diagnose and fix cache-related issues. You'll identify whether the problem is with the CDN cache, data cache, or build cache, and apply the right fix for each.

> **💡 Note:** This guide requires a [linked Vercel project](/docs/cli/project-linking). Run
> `vercel link` in your project directory if you haven't already.

## Quick reference

Use this block when you already know what you're doing and want the full command sequence. Use the steps below for context and checks.

```bash filename="terminal"
# 1. Check current response headers for cache status
vercel httpstat /path-with-stale-content

# 2. Search logs for cache-related issues
vercel logs --environment production --query "cache" --since 1h --expand

# 3. Identify the current deployment
vercel inspect <deployment-url>

# IF stale CDN content (HTML, assets, images):
vercel cache purge --type cdn --yes
vercel httpstat /path-with-stale-content    # verify content is fresh

# IF stale data cache (API responses, database queries):
vercel cache invalidate --tag my-cache-tag
# OR hard-delete if invalidation isn't enough:
vercel cache dangerously-delete --tag my-cache-tag --yes

# IF stale build cache (wrong build output):
vercel deploy --force --prod

# IF stale optimized images:
vercel cache invalidate --srcimg /images/hero.png
```

## 1. Check the response headers

Start by checking the current cache status for the affected route. `vercel httpstat` shows response timing and lets you verify whether responses are served from cache:

```bash filename="terminal"
vercel httpstat /path-with-stale-content
```

> **💡 Note:** `vercel httpstat` is a beta command (CLI v48.9.0+) that requires the
> [`httpstat`](https://github.com/reorx/httpstat) tool to be installed on your
> system.

Run this two or three times in a row. If responses are consistently fast with similar timing, they're likely being served from the CDN cache.

## 2. Search logs for cache-related issues

Check production logs for cache-related entries that might explain the stale content:

```bash filename="terminal"
vercel logs --environment production --query "cache" --since 1h --expand
```

Look for patterns like revalidation failures, cache key mismatches, or errors in your caching logic.

## 3. Identify the current deployment

Check which deployment is currently serving production traffic:

```bash filename="terminal"
vercel inspect <deployment-url>
```

Compare the deployment's Git commit with your latest code. If the deployment is older than expected, the issue might be that a recent deployment failed and an older cached version is serving traffic.

## Fix: stale CDN content

If the issue is stale HTML pages, static assets, or images being served from the CDN despite having new content deployed, purge the CDN cache:

```bash filename="terminal"
vercel cache purge --type cdn --yes
```

After purging, verify the content is fresh:

```bash filename="terminal"
vercel httpstat /path-with-stale-content
```

The first request after purging may be slower because it needs to regenerate the cache. Subsequent requests will be fast again.

## Fix: stale data cache

If you're using the data cache (via `fetch` with `next.revalidate` or similar caching APIs) and the cached data is stale, invalidate it by tag:

```bash filename="terminal"
vercel cache invalidate --tag my-cache-tag
```

You can invalidate multiple tags at once by separating them with commas:

```bash filename="terminal"
vercel cache invalidate --tag products,pricing
```

If invalidation isn't clearing the stale data, hard-delete the cached entries:

```bash filename="terminal"
vercel cache dangerously-delete --tag my-cache-tag --yes
```

> **💡 Note:** `dangerously-delete` immediately removes the cached entries. The next request
> triggers a fresh fetch, which may be slower until the cache is repopulated.

## Fix: stale build cache

If the deployed output seems wrong despite the latest code being committed, the build cache might contain stale artifacts. Force a fresh build without using the build cache:

```bash filename="terminal"
vercel deploy --force --prod
```

If you want to skip the deployment cache but keep the build cache:

```bash filename="terminal"
vercel deploy --force --with-cache --prod
```

## Fix: stale optimized images

If an optimized image is still showing an old version after you've replaced the source file, invalidate the image optimization cache:

```bash filename="terminal"
vercel cache invalidate --srcimg /images/hero.png
```

Or hard-delete it:

```bash filename="terminal"
vercel cache dangerously-delete --srcimg /images/hero.png --yes
```

## Related

- [vercel cache](/docs/cli/cache)
- [vercel httpstat](/docs/cli/httpstat)
- [vercel inspect](/docs/cli/inspect)
- [vercel logs](/docs/cli/logs)
- [CDN cache overview](/docs/cdn-cache)
- [Debugging production 500 errors](/docs/observability/debug-production-errors)

title: "Encryption and TLS"
description: "Learn how Vercel encrypts data in transit and at rest."
last\_updated: "2026-03-23T09:40:06.329Z"
source: "https://vercel.com/docs/cdn-security/encryption"
