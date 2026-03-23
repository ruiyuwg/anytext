# AI tooling

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/ai-tooling.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# AI tooling

Use the following AI tools to get the most out of Cloudflare (and our docs).

## Docs in Markdown for LLMs

We have implemented `llms.txt` and `llms-full.txt` as follows:

- [llms.txt](https://developers.cloudflare.com/llms.txt) — A directory of all Cloudflare documentation products, grouped by category. Each entry links to that product's own `llms.txt` — for example, [/workers/llms.txt](https://developers.cloudflare.com/workers/llms.txt) — which lists every page for that product in Markdown format.
- [llms-full.txt](https://developers.cloudflare.com/llms-full.txt) — The full contents of all Cloudflare documentation in a single file, intended for offline indexing, bulk vectorization, or large-context models. We also provide a `llms-full.txt` file on a per-product basis — for example, [/workers/llms-full.txt](https://developers.cloudflare.com/workers/llms-full.txt).

To obtain a Markdown version of a single documentation page, you can:

- Send a request to any page with an `Accept: text/markdown` header — Uses [Markdown for Agents](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/) to convert the page to Markdown at the network layer. For example:\
  Terminal window

```
curl "https://developers.cloudflare.com/style-guide/ai-tooling/" \  
  --header "Accept: text/markdown"  
```

- Send a request to `/$page/index.md` — Add `/index.md` to the end of any page to get the Markdown version. For example, [/style-guide/ai-tooling/index.md](https://developers.cloudflare.com/style-guide/ai-tooling/index.md).

Both methods return the same Markdown output, powered by [Markdown for Agents](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/).

In the top right of this page, you will see a `Page options` button where you can copy the current page as Markdown that can be given to your LLM of choice.

![Page options
button](https://developers.cloudflare.com/_astro/page-options.T2MlgPLy_Z1s8r6.webp)

## Documentation MCP Server

Cloudflare runs a catalog of managed remote MCP Servers which you can connect to using OAuth on clients like [Claude ↗](https://modelcontextprotocol.io/quickstart/user), [Windsurf ↗](https://docs.windsurf.com/windsurf/cascade/mcp), our own [AI Playground ↗](https://playground.ai.cloudflare.com/) or any [SDK that supports MCP ↗](https://github.com/cloudflare/agents/tree/main/packages/agents/src/mcp).

One of the available MCP servers is the [Documentation MCP Server ↗](https://github.com/cloudflare/mcp-server-cloudflare/tree/main/apps/docs-vectorize), which you can use to get up-to-date reference information on Cloudflare.

- [ Cursor ](#tab-panel-7056)
- [ VSCode ](#tab-panel-7057)
- [ Manually ](#tab-panel-7058)

To install in Cursor, use this [Direct install link ↗](https://cursor.com/en-US/install-mcp?name=cloudflare\&config=eyJjb21tYW5kIjoibnB4IG1jcC1yZW1vdGUgaHR0cHM6Ly9kb2NzLm1jcC5jbG91ZGZsYXJlLmNvbS9zc2UifQ%3D%3D).

To install in VSCode, use this [Direct install link](vscode:mcp/install?%7B%22name%22%3A%22cloudflare%22%2C%22url%22%3A%22https%3A%2F%2Fdocs.mcp.cloudflare.com%2Fmcp%22%7D).

To install manually, add the following specification to your MCP config:

```

  {

    "mcpServers": {

        "cloudflare": {

        "command": "npx",

        "args": ["mcp-remote", "https://docs.mcp.cloudflare.com/mcp"]

      }

    }

  }


```

Note

For other MCP servers offered by Cloudflare, refer to [Cloudflare's MCP servers](https://developers.cloudflare.com/agents/model-context-protocol/mcp-servers-for-cloudflare/).

## Skills

Our docs site also supports [agent skills ↗](https://agentskills.io/home) that are defined in the [Cloudflare Skills repo ↗](https://github.com/cloudflare/skills).

To install them:

Terminal window

```

npx skills add https://developers.cloudflare.com


```

## AI resources for documentation contributors

The `cloudflare-docs` repository includes an [AGENTS.md ↗](https://github.com/cloudflare/cloudflare-docs/blob/production/AGENTS.md) file that helps AI agents understand the structure, tooling, and conventions of the repository so they can make correct, buildable changes.

AGENTS.md is a simple, open format for guiding coding agents — refer to the [AGENTS.md ↗](https://agents.md/) website for more information.

The documentation repository also includes specific configuration for the following AI tools:

- [OpenCode ↗](https://opencode.ai/)
- [Windsurf ↗](https://windsurf.com/)

We provide scripts to set up other AI tools (currently Claude Code, Cursor, and GitHub Copilot) via [rulesync ↗](https://github.com/dyoshikawa/rulesync), a tool for synchronizing AI tool configurations.

If you are a documentation contributor and you would like to use Claude Code, Cursor, or GitHub Copilot, use one of the following scripts:

Terminal window

```

# Configure Claude Code

npm run ai-setup:claudecode


# Configure Cursor

npm run ai-setup:cursor


# Configure GitHub Copilot

npm run ai-setup:copilot


```

Each script will import AI tool components (commands and subagents) from the OpenCode configuration committed to the repository and generate back specific configuration files in the expected locations for your selected AI tool.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/ai-tooling/","name":"AI tooling"}}]}
```
