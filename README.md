<p align="center">
  <img src="banner.png" alt="anytext" width="600" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/anytext-cli"><img src="https://img.shields.io/npm/v/anytext-cli" alt="npm version" /></a>
  <a href="https://github.com/ruiyuwg/anytext/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/ruiyuwg/anytext/ci.yml?branch=main&label=CI" alt="CI" /></a>
  <a href="https://codecov.io/gh/ruiyuwg/anytext"><img src="https://codecov.io/gh/ruiyuwg/anytext/graph/badge.svg" alt="codecov" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" /></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D18-brightgreen" alt="Node.js" /></a>
</p>

Instant, clean documentation for coding agents.

**anytext** is a CLI tool that gives coding agents (Claude Code, Cursor, etc.) fast access to clean, LLM-ready documentation for any library or framework. No MCP servers, no per-library setup, no protocol overhead — just plain markdown to stdout.

## Why

Coding agents need to read library docs to avoid hallucinating outdated APIs. Existing solutions are all suboptimal:

- **MCP servers** have protocol overhead and per-library setup friction
- **llms.txt** requires developers to manually add each source
- **Context7** has rate limits, cloud dependency, and opaque quality

anytext is different:

- Single install, single skill — access to all libraries
- Output is plain markdown — zero token overhead, trivially pipeable
- Local cache makes repeat calls sub-50ms
- Registry is transparent and auditable — every doc is in this repo
- Offline-capable after first cache population

## Install

```bash
npm install -g anytext-cli
```

Add the skill to your coding agent:

```bash
npx skills add ruiyuwg/anytext
```

## Usage

```bash
anytext list                         # List all available libraries
anytext list react                   # List topics for React
anytext search "server components"   # Search across all docs
anytext read react hooks             # Read a specific topic
anytext cache clear                  # Clear local cache
```

## How It Works

```
Agent calls `anytext read react hooks`
  → CLI checks ~/.anytext/ cache (hit? → return instantly)
  → Fetches clean markdown from the registry on GitHub
  → Caches locally → returns to stdout
```

The registry is a collection of pre-processed markdown files committed to this repo. No scraping, no parsing, no external API calls happen at runtime — just static file fetches.

## Supported Libraries

| Library      | Version | Topics | Source        |
| ------------ | ------- | ------ | ------------- |
| AI SDK       | v4      | 128    | llms.txt      |
| Astro        | v5      | 235    | llms-full.txt |
| Bun          | v1      | 197    | llms-full.txt |
| Deno         | v2      | 228    | llms-full.txt |
| Drizzle ORM  | v0.36   | 161    | llms-full.txt |
| Hono         | v4      | 62     | llms-full.txt |
| Next.js      | v15     | 287    | llms-full.txt |
| Nuxt         | v3      | 506    | llms-full.txt |
| Payload CMS  | v3      | 154    | llms-full.txt |
| React        | v19     | 161    | llms.txt      |
| Svelte       | v5      | 116    | llms-full.txt |
| Tailwind CSS | v4      | 186    | github        |
| TanStack     | v5      | 24     | llms.txt      |
| tRPC         | v11     | 59     | llms-full.txt |
| Valibot      | v1      | 84     | llms-full.txt |
| Vite         | v6      | 38     | llms-full.txt |
| Vitest       | v3      | 86     | llms-full.txt |
| Zod          | v3      | 28     | llms-full.txt |

Docs are automatically updated weekly via GitHub Actions. Contributions welcome.

## Contributing

### Adding a New Library

1. Add an entry to `packages/scraper/sources.json` — pick the right adapter for the docs source (`llms-full`, `llms-txt`, `html`, `github`, or `sitemap`). See [CONTRIBUTING.md](CONTRIBUTING.md) for full config reference.
2. Run the scraper: `cd packages/scraper && pnpm build && node dist/index.js --library <id>`
3. Verify the output in `registry/docs/<id>/` and `registry/manifest.json`
4. Submit a PR

### Development

```bash
git clone https://github.com/ruiyuwg/anytext.git
cd anytext
pnpm install
pnpm build

# Test the CLI locally
cd packages/cli
node dist/index.js list
node dist/index.js read hono routing

# Run the scraper
cd packages/scraper
node dist/index.js --library hono     # Single library
node dist/index.js                    # All libraries
node dist/index.js --dry-run          # Preview without writing
```

## License

MIT
