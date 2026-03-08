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

### Choosing an Adapter

Pick the adapter that best fits the library's documentation source:

| Adapter | When to use | Required fields |
| --- | --- | --- |
| `llms-full` | Library publishes a single `llms-full.txt` file | `url` |
| `llms-txt` | Library publishes an `llms.txt` index linking to `.md` pages | `url` |
| `html` | Scrape HTML documentation pages (most libraries) | `url`, `crawl` |
| `github` | Fetch `.md` files directly from a GitHub repository | `github` |
| `sitemap` | Library has a `sitemap.xml` to discover all doc pages | `url` |

### Source Config Reference

```jsonc
{
  "id": "mylib",               // Unique identifier (used as directory name)
  "name": "My Library",        // Display name
  "description": "...",        // Short description
  "version": "1.0",            // Major version being documented
  "adapter": "html",           // One of the adapters above
  "url": "https://...",        // Entry URL (required for all except github)
  // Optional — adapter-specific:
  "crawl": {                   // For html/sitemap adapters
    "contentSelector": "main", // CSS selector for main content
    "removeSelectors": [".ad"],// CSS selectors to strip
    "startPaths": ["/docs/"],  // Starting paths (relative to url)
    "include": ["/docs/"],     // URL patterns to follow
    "exclude": ["changelog"]   // URL patterns to skip
  },
  "github": {                  // For github adapter
    "repo": "owner/repo",
    "branch": "main",          // Default: "main"
    "docsPath": "docs",        // Default: "docs"
    "include": ["guide"],      // File path patterns to include
    "exclude": ["changelog"]   // File path patterns to exclude
  },
  "preprocess": {              // Custom preprocessing rules
    "stripPatterns": ["^---$"],         // Regex: remove matching lines
    "replacePatterns": [                // Regex: find and replace
      { "match": "\\\\<\\\\>", "replace": " + ", "scope": "headings" }
    ],
    "stripHtml": true                   // Strip remaining HTML tags (default: true)
  },
  "splitConfig": {             // Control topic splitting (llms-full/llms-txt only)
    "minTokens": 200,
    "maxTokens": 10000,
    "splitDepth": 2            // Force split at this heading depth
  }
}
```

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
