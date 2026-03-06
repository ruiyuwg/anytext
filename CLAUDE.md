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
node dist/index.js                    # Process all libraries
node dist/index.js --library hono     # Process single library
node dist/index.js --dry-run          # Preview without writing manifest
```

- **Config:** `packages/scraper/sources.json` — add new libraries here
- **Adapters:** `llms-full` (fetch llms-full.txt, split), `llms-txt` (follow .md links), `manual` (read existing docs)
- **Pipeline:** fetch → preprocess (strip frontmatter, HTML, MDX) → parse → split by headings → write to `registry/docs/`
- **CI:** `.github/workflows/update-docs.yml` runs weekly, creates a PR with updated docs

## Registry Format

Each doc file is pure markdown — no MDX, no JSX, no HTML. Self-contained, 2K–10K tokens per topic. API-focused: function signatures, parameters, return types, code examples.

Manifest schema: see `packages/cli/src/types.ts` for `Manifest`, `Library`, `Topic` interfaces.

## Conventions

- TypeScript strict mode, ESM modules (`"type": "module"`)
- No runtime dependencies in the CLI package
- Module resolution: NodeNext
- Turborepo for build orchestration
- pnpm for package management
