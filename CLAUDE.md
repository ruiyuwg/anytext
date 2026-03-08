# anytext

Open-source CLI that gives coding agents instant access to clean, LLM-ready documentation for any library or framework.

## Project Structure

```
anytext/
├── packages/cli/           # The `anytext` npm package (CLI)
├── packages/scraper/       # Doc scraping & processing pipeline
├── registry/               # Static doc registry
│   ├── manifest.json       # Index of all libraries and topics
│   └── docs/               # Clean markdown files per library/topic
├── skills/anytext/         # Skill definition for coding agents
├── .github/workflows/      # CI: weekly doc update PR
├── packages/eslint-config/ # Shared ESLint config
└── packages/typescript-config/ # Shared TypeScript config
```

## Key Architecture Decisions

- **No runtime dependencies.** CLI uses only Node.js built-ins (fs, path, os, fetch).
- **Output is always plain markdown to stdout.** No JSON wrapping, no protocol overhead.
- **Registry is static files on GitHub.** Fetched via raw.githubusercontent.com. All complexity is at build time.
- **Local cache at ~/.anytext/.** Manifest cached for 24h, docs cached until manifest version changes.
- **Registry URL is configurable** via `ANYTEXT_REGISTRY_URL` env var for development.

## Commands

```sh
pnpm install              # Install dependencies
pnpm build                # Build all packages
pnpm dev                  # Watch mode

# CLI development
cd packages/cli
pnpm build                # Compile TypeScript
node dist/index.js list   # Test locally
```

## Development Workflow

1. Edit CLI source in `packages/cli/src/`
2. Add/edit docs in `registry/docs/{library}/{topic}.md`
3. Update `registry/manifest.json` when adding new libraries or topics
4. Build and test: `cd packages/cli && pnpm build && node dist/index.js`

## Scraper Workflow

The scraper (`packages/scraper/`) auto-generates registry docs from upstream sources.

```sh
cd packages/scraper
pnpm build
node dist/index.js                        # Process all libraries
node dist/index.js --library hono         # Process single library
node dist/index.js --dry-run              # Preview without writing
node dist/index.js --force                # Skip incremental hash check
node dist/index.js --concurrency 8        # Parallel source processing (default: 4)
```

- **Config:** `packages/scraper/sources.json` — add new libraries here
- **Adapters:**
  - `llms-full` — fetch a single llms-full.txt file, clean, and split by headings
  - `llms-txt` — parse an llms.txt index, follow linked .md pages, clean each
  - `llms-index` — follow a root llms.txt index to per-service llms.txt or llms-full.txt files (used for cloud providers like AWS, Cloudflare)
  - `html` — crawl HTML pages from a URL, extract content via CSS selectors (cheerio + turndown)
  - `github` — fetch .md files from a GitHub repo via the API (tree listing + raw content); supports `subDirs` scoping, `maxFiles` limit, and truncated-tree fallback to Contents API
  - `sitemap` — parse a sitemap.xml (or sitemap index), fetch and extract each listed page; supports `maxPages` limit
- **Pipeline:** fetch (with retries, HTTP 429 retry support) → configurable preprocess → remark parse → offset-based split → staging write → atomic commit → manifest update
- **Source config fields:** `topicPrefix` ('none' | 'directory' | 'auto') for namespacing topics by service, `rateLimit` (requests/sec) for throttling, `llmsIndex` config for the llms-index adapter
- **Crawl config fields:** `maxPages` (sitemap safety limit), `maxFiles` (GitHub safety limit), `subDirs` (GitHub subdirectory scoping)
- **Incremental updates:** Content is hashed per-source; unchanged sources are skipped automatically. Use `--force` to re-process regardless.
- **Staging writes:** Topics are written to `registry/docs/.staging/{sourceId}/` first, then atomically renamed to the live directory on success.
- **CI:** `.github/workflows/update-docs.yml` runs weekly, creates a PR with updated docs

## Registry Format

Each doc file is pure markdown — no MDX, no JSX, no HTML. Self-contained, 2K–10K tokens per topic. API-focused: function signatures, parameters, return types, code examples.

Manifest schema: see `packages/cli/src/types.ts` for `Manifest`, `Library`, `Topic` interfaces.

## Testing

Tests use [vitest](https://vitest.dev/) with `@vitest/coverage-v8`. Both packages enforce 100% coverage thresholds (statements, branches, functions, lines).

```sh
pnpm test                 # Run all tests via turbo
pnpm test:coverage        # Run with coverage (per-package)

# Per-package
cd packages/cli && pnpm test
cd packages/scraper && pnpm test
```

### Test structure

Tests live alongside source in `src/__tests__/`, mirroring the source layout:

```
packages/cli/src/__tests__/
├── helpers/fixtures.ts        # Factory functions: makeManifest(), makeLibrary(), makeTopic()
├── search/                    # Pure function tests (no mocking)
│   ├── tokenizer.test.ts
│   ├── stemmer.test.ts
│   ├── aliases.test.ts
│   ├── fuzzy.test.ts
│   └── scorer.test.ts
├── cache.test.ts              # Mocks: node:fs, node:os, fake timers
├── registry.test.ts           # Mocks: cache module, fetch, node:fs; uses vi.resetModules() for env vars
├── commands/                  # Mocks: registry, scorer
│   ├── list.test.ts
│   ├── read.test.ts
│   ├── search.test.ts
│   └── cache.test.ts
└── index.test.ts              # IIFE entry point: vi.resetModules() + dynamic import per test

packages/scraper/src/__tests__/
├── utils.test.ts              # Pure functions (no mocking)
├── pipeline/
│   ├── fetch.test.ts          # Mocks: globalThis.fetch
│   ├── clean.test.ts          # Uses real remark (no mocking)
│   ├── split.test.ts          # Uses real remark (no mocking)
│   ├── manifest.test.ts       # Mocks: node:fs, fake timers
│   ├── write.test.ts          # Mocks: node:fs, manifest
│   ├── hashes.test.ts         # Mocks: node:fs, manifest
│   ├── extract.test.ts        # Uses real cheerio/turndown (no mocking)
│   ├── rate-limiter.test.ts   # Uses vi.useFakeTimers()
│   └── validate-completeness.test.ts  # Pure functions
├── adapters/
│   ├── llms-full.test.ts      # Mocks: fetch, clean, split, validate-completeness
│   ├── llms-txt.test.ts       # Mocks: fetch, clean
│   ├── html.test.ts           # Mocks: fetch, extract
│   ├── github.test.ts         # Mocks: globalThis.fetch
│   ├── llms-index.test.ts     # Mocks: globalThis.fetch
│   └── sitemap.test.ts        # Mocks: fetch, extract
├── scrape.test.ts             # Mocks: adapters, manifest, write, hashes, node:fs
└── index.test.ts              # IIFE entry point: vi.resetModules() + dynamic import
```

### Patterns

- **`process.exit` mocking:** Cast mock to `never` type, use `(() => {}) as never` or throw to prevent execution past exit.
- **IIFE entry points:** `vi.resetModules()` + set `process.argv` + dynamic `import()` per test, with `setTimeout` for microtask settlement.
- **Module-level constants** (e.g., `REGISTRY_BASE_URL`): `vi.stubEnv()` + `vi.resetModules()` + dynamic import.
- **Remark/unified in scraper:** Use real remark (fast, deterministic). Only mock I/O boundaries.
- **Console spying:** `vi.spyOn(console, "log").mockImplementation(() => {})` to suppress output.

### Config

Both `packages/cli/vitest.config.ts` and `packages/scraper/vitest.config.ts`:

- `test.include`: `["src/**/*.test.ts"]`
- `test.coverage.exclude`: `["src/types.ts"]` (pure type defs)
- `test.restoreMocks`: `true`

## Conventions

- TypeScript strict mode, ESM modules (`"type": "module"`)
- No runtime dependencies in the CLI package
- Module resolution: NodeNext
- Turborepo for build orchestration
- pnpm for package management
