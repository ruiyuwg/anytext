# Contributing to anytext

Thanks for your interest in contributing!

## Development Setup

```sh
git clone https://github.com/ruiyuwg/anytext.git
cd anytext
pnpm install
pnpm build
```

## Running the CLI Locally

```sh
cd packages/cli
pnpm build
node dist/index.js list
```

## Adding a New Library

1. Add an entry to `packages/scraper/sources.json` with the library's metadata and adapter type.
2. Run the scraper: `cd packages/scraper && pnpm build && node dist/index.js --library <id>`
3. Verify the generated docs in `registry/docs/<id>/`.
4. Check the updated `registry/manifest.json`.

## Running Tests

Both packages require 100% code coverage.

```sh
pnpm test                  # Run all tests
cd packages/cli && pnpm test:coverage    # CLI with coverage
cd packages/scraper && pnpm test:coverage  # Scraper with coverage
```

## Code Style

- TypeScript strict mode, ESM modules
- No runtime dependencies in the CLI package
- Conventional commit messages (e.g., `fix(cli): ...`, `feat(scraper): ...`)

## Pull Requests

1. Create a branch from `main`.
2. Make your changes with tests.
3. Ensure `pnpm check-types && pnpm lint && pnpm test` passes.
4. Open a PR with a clear description.
