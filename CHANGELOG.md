# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
