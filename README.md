# anytext

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
npm install -g anytext
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

| Library | Version | Topics |
|---------|---------|--------|
| Hono | v4 | getting-started, routing, context, middleware |
| Zod | v3 | schemas, validation |

More libraries coming soon. Contributions welcome.

## Contributing

### Adding Documentation

1. Create markdown files in `registry/docs/{library}/`
2. Add entries to `registry/manifest.json`
3. Follow the doc quality guidelines:
   - Pure markdown — no MDX, no JSX, no HTML
   - Self-contained — understandable without other topics
   - Right-sized — 2K–10K tokens per topic
   - API-focused — signatures, parameters, examples
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
```

## License

MIT
