# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- `html` adapter — crawl HTML documentation sites using cheerio + turndown
- `github` adapter — fetch markdown files from GitHub repos via the API
- `sitemap` adapter — parse sitemap.xml and extract documentation pages
- Incremental updates — content hashing skips unchanged sources (`--force` to override)
- Concurrent processing with configurable `--concurrency` flag (default: 4)
- Atomic staging writes — topics written to `.staging/` dir, then renamed on success
- Fetch retries with exponential backoff and configurable timeout
- Configurable preprocessing rules in `sources.json` (`preprocess` field)
- Configurable `splitDepth` for explicit heading-level control
- Content completeness validation after splitting (advisory warning)

### Changed

- Splitting engine rewritten to use offset-based string slicing instead of remark round-trip (preserves original formatting)
- Preprocessing rules (e.g., Drizzle-specific patterns) moved from hardcoded logic to `sources.json` config
- Tailwind CSS migrated from `manual` to `html` adapter
- File writes centralized in `pipeline/write.ts` (removed from individual adapters)
- Relative URL resolution fixed in `llms-txt` adapter

### Removed

- `manual` adapter — all libraries now use automated adapters

## [0.1.0] - 2026-03-07

### Added

- `list` command to browse available libraries and topics
- `search` command with fuzzy matching, stemming, and alias support
- `read` command to fetch clean, LLM-ready documentation
- `cache` command to inspect and clear the local cache
- Local cache at `~/.anytext/` with 24-hour manifest expiry
- Support for `ANYTEXT_REGISTRY_URL` environment variable
- Doc scraper with `llms-full`, `llms-txt`, and `manual` adapters
- Registry with 8 libraries: ai-sdk, drizzle, hono, nextjs, react, tailwindcss, trpc, zod
