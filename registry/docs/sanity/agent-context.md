# Agent Context

> \[!NOTE]
> Agent Context vs MCP server
> Sanity offers two MCP servers for different use cases. The [Sanity MCP server](https://www.sanity.io/docs/ai/mcp-server) is a tool that gives AI agents in tools like Cursor, Claude Code and v0 full access to your Sanity workspace: querying content, managing releases, deploying schemas, and more.
> **Agent Context** is for production agents that serve your users. It provides read-only, scoped access to a single dataset, controlled by an Agent Context document you configure in Studio. You use it to power search, support bots, and other content-driven features in your application.

## Quick start

- Install the skill:

**TERMINAL**

```sh
npx skills add sanity-io/agent-context --all
```

- Prompt your AI assistant to use the skill based on what you want to build:- Adding an agent to an existing application

- Building a new application with agent capabilities

- Setting up Agent Context for a specific use case

- Follow the guided setup to achieve your desired configuration.

For more detail, see [Using the skill](https://www.sanity.io/docs/ai/agent-context). For manual setup without the skill, see [Manual setup](https://www.sanity.io/docs/ai/agent-context).

## What's included?

### Agent Context MCP

The Agent Context MCP is a hosted MCP server that lets AI agents read and query a Sanity dataset in a structured, schema-aware way.

It provides:

- Tools that let an agent understand your schema and query content
- Optional content filtering to limit what the agent can access
- Optional semantic search (when [embeddings](https://www.sanity.io/docs/content-lake/dataset-embeddings) are enabled)

Agent Context is configured by an Agent Context document in your dataset, which defines what the MCP can access. To learn how to configure your Studio to create Agent Context documents, see [Studio plugin](https://www.sanity.io/docs/ai/agent-context) below.

The Agent Context document has the following fields:

- `name`: human-readable name
- `slug`: identifier used when connecting to the MCP
- `instructions`: custom instructions for how AI agents should work with your content, for example, "Always respond in Spanish" or "Focus on product documentation only."
- `groqFilter`: optional filter that limits what content the agent can access. This should be a GROQ *filter* (e.g., `_type == "product"`), not a full GROQ query (e.g., `*[_type == "product"]`). The filter supports standard GROQ expressions including comparisons (`==`, `!=`, `>`, `<`), logical operators (`&&`, `||`), the `in` operator, and `defined()`. Sub-queries, projections, and ordering are not supported.

![Flowchart showing an Agent interacting with Context MCP, which loads config and queries content from Sanity Dataset.](https://cdn.sanity.io/images/3do82whm/next/73caf2dbec8d723e5ea46e311d4c52e833c065e6-1040x219.png)

#### Available Tools

Agent Context exposes three tools. These are discovered automatically when you connect an MCP client.

##### Agent Context Tools

| Tool | Purpose |
| --- | --- |
| initial\_context | Get compressed schema overview (types, fields, document counts) |
| groq\_query | Execute GROQ queries against the dataset |
| schema\_explorer | Inspect detailed schema for a specific type |

#### MCP endpoint

The Agent Context MCP server is hosted at `https://api.sanity.io/:apiVersion/agent-context/:projectId/:dataset/:slug`, where:

- `apiVersion`: API version in the format `vYYYY-MM-DD` (e.g., `v2024-01-01`)
- `projectId`: the ID of the project
- `dataset`: the name of the dataset
- `slug`: the slug of an Agent Context document which configures the MCP

The MCP URL also accepts query parameters to customize the request. These are runtime options and are not stored in the Agent Context document:

##### Agent URL Params

| Parameter | Description |
| --- | --- |
| instructions | Custom instructions. Overrides instructions from the Agent Context document for this request. |
| perspective | Content perspective for GROQ queries. Defaults to published. |
| groqFilter | Overrides groqFilter from the Agent Context document for this request. |

### Studio plugin

The `agentContextPlugin` from the `@sanity/agent-context` package is a Studio plugin that helps you configure Agent Context. It registers the Agent Context document type and adds a custom input for selecting which document types the agent can access.

### Skills

> \[!NOTE]
> Skills
> Skills are modular instructions that expand capabilities for AI agents.
> [Read more about skills in the Anthropic docs](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview).

Three skills are available to help you build and refine agents using Agent Context:

**create-agent-with-sanity-context** The primary skill. It walks you through connecting an existing agent to Agent Context MCP, building a new project from scratch with a frontend and Studio, or adding an agent to an existing project. This includes installing and configuring the `@sanity/agent-context` Studio plugin, creating an Agent Context document, generating a reference agent implementation, and adding a basic chat UI.

**shape-your-agent** An optional interactive session that helps you craft a system prompt for your agent. It guides you through defining your agent's audience, tone, boundaries, and fallback behavior, then produces a focused prompt (typically 200-400 words) tuned for use with Agent Context MCP.

**dial-your-context** An interactive session that helps you write the Instructions field for an Agent Context document. The Instructions field provides information the agent can't determine from the schema alone, such as misleading field names, required filters, non-obvious relationships between types, and useful query patterns.

## Prerequisites

Before you begin, ensure you have:

- **A Sanity project** with content you want the agent to access
- **Sanity Studio v5.1.0+** - required for server-side schema, which Agent Context depends on
- **Schema deployment** - Deploy your Studio and open it in a browser to trigger schema deployment. Running on localhost is not sufficient.
- **A Sanity API read token** - create one at [sanity.io/manage](https://sanity.io/manage) > Project > API > Tokens
- **An LLM API key** - from Anthropic, OpenAI, or another provider
- **A frontend application** (optional) - where your agent will live (Next.js, Remix, etc.). The skill can help set this up if needed.

## Get started

There are two paths to get started:

- **Using the skill** - guided setup that helps you build an agent from scratch
- **Manual setup** - do the setup yourself without the skill

### Using the skill

Best for building a new agent from scratch. The skill guides you through Studio setup, agent implementation, and frontend UI.

- Install the skill:

**TERMINAL**

```sh
npx skills add sanity-io/agent-context --all
```

- Prompt your AI assistant:

```text
Use the create-agent-with-sanity-context skill to help me build an agent in this project.

```

The skill guides you through:

- **Studio setup**: install and configure `@sanity/agent-context`, then create Agent Context documents and get an MCP URL.
- **Agent implementation**: generate a reference agent implementation (for example Next.js + Vercel AI SDK) that you can adapt to other stacks.
- **Frontend UI**: if applicable, add a basic UI for interacting with the agent (for example a chat interface).

## Manual setup

Full setup if you're building from scratch without the skill.

- Ensure you're running **Sanity Studio v5.1.0+**. Agent Context requires server-side schema, which is only available in v5.1.0+.
- Install the `@sanity/agent-context` Studio plugin and add it to your Studio config:

**sanity.config.ts**

```
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {agentContextPlugin} from '@sanity/agent-context/studio'

export default defineConfig({
  // ...
  plugins: [structureTool(), agentContextPlugin()],
})
```

Optionally, you can customize where the document type appears in the Studio structure using `AGENT_CONTEXT_SCHEMA_TYPE_NAME`:

**sanity.config.ts**

```
// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {agentContextPlugin, AGENT_CONTEXT_SCHEMA_TYPE_NAME} from '@sanity/agent-context/studio'

export default defineConfig({
	// ...
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Filter out agent context document from the default list
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== AGENT_CONTEXT_SCHEMA_TYPE_NAME,
            ),
            // Add it elsewhere, e.g. after a divider
            S.divider(),
            S.documentTypeListItem(AGENT_CONTEXT_SCHEMA_TYPE_NAME),
          ]),
    }),
    agentContextPlugin(),
  ],
})
```

- Create a new Agent Context document in your Studio and configure it:

- Fill in the document fields:- **Name**: a label for this context (for example, "Product support agent" or "Docs search").

- **Slug**: the identifier used in the MCP URL. Choose something short and descriptive (for example, `product-support`).

- **Instructions** (optional): guidance for how agents should work with your content. Use this for information the agent can't determine from the schema alone, such as which fields to prioritize, how to interpret ambiguous field names, or required filters for your data.

- **Content Filter** (optional): a filter that limits what content the agent can access. Can either be set by searching for types and selecting them, or by setting a GROQ filter, e.g., `_type == "product"`.

- Publish the document, then copy the MCP URL shown at the top of the form.

- Connect to the MCP URL using any MCP-compatible client, authenticated with your Sanity read token (see [Prerequisites](https://www.sanity.io/docs/ai/agent-context)). Here's an example using Vercel AI SDK:

```
 import {createMCPClient} from '@ai-sdk/mcp'

 const mcpClient = await createMCPClient({
   transport: {
     type: 'http',
     url: '<CONTEXT_MCP_URL>',
     headers: {
       Authorization: `Bearer <SANITY_API_READ_TOKEN>`,
     },
   },
 })
```

- Verify it works by listing the available tools:

```
 const tools = await mcpClient.tools()
 console.log(tools)
```

## Next steps

Once your agent is connected and returning tools, you can integrate it into your application.

- [Build an AI shopping assistant](https://www.sanity.io/agent-context-ecommerce) - a walkthrough covering architecture, GROQ-based product search, and content-driven agent configuration.
- [AI shopping assistant starter](https://github.com/sanity-labs/starters/tree/main/ai-shopping-assistant) - the complete source code for the above. Next.js, Sanity Studio, Claude, and Vercel AI SDK.

For a guided setup that handles Studio configuration, agent implementation, and frontend UI, see [Using the skill](https://www.sanity.io/docs/ai/agent-context).

## Security and access

### Authentication

Agent Context MCP uses Sanity API tokens for authentication.

- Tokens are passed as Bearer tokens in the Authorization header
- Use a **read token** - agents only need read access
- Keep tokens server-side in your agent implementation – never expose them client-side

### Data access

Agent Context MCP is **read-only**. Agents can query and retrieve content, but cannot create, update, or delete documents. What agents can access:

- **Schema** - document types, field definitions, and structure
- **Content** - published documents in the dataset
- **References** - agents can follow references between documents

By default, agents only see published documents. Set `perspective` to `drafts` to include draft content. The `groqFilter` field in the Agent Context document controls what content is visible. For example:

- `_type == "product"` - only product documents
- `_type in ["article", "author"]` - only articles and authors
- `_type == "product" && public == true` - only public products

If no filter is set, the agent can access all published documents the token has permission to read.

> \[!TIP]
> Agent Context documents are regular Sanity documents, queryable like any other in your dataset.

## Troubleshooting

### 401 Unauthorized

Your Sanity API token is missing or invalid. Ensure:

- The token has read access to the project
- You're passing it as a Bearer token in the Authorization header

### No schema or empty results

Agent Context requires your schema to be available server-side. This happens automatically when your Studio runs, but if it's not working:

1. Ensure you're on Sanity Studio `v5.1.0+`.
2. Open your Studio in a browser - this triggers schema deployment
3. Retry the MCP connection

### Tools not appearing

- Check that the MCP URL is correct (project ID, dataset, slug)
- Verify the Agent Context document exists and is published
- Try calling `tools()` on your MCP client and log the result

### Semantic search not working

Semantic search requires [embeddings](https://www.sanity.io/docs/content-lake/dataset-embeddings) to be enabled for your dataset. If queries using `text::semanticSimilarity` aren't returning ranked results:

- Verify embeddings are enabled for your dataset
- Try explicitly adding `?embeddings=true` to the MCP URL to rule out auto-detection issues
