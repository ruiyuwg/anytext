# Sanity Skills

Agent skills are folders of instructions, scripts, and resources that AI agents can discover and use to complete tasks more accurately and efficiently. They follow the open [Agent Skills](https://agentskills.io/) format, supported by tools like Cursor, Claude Code, VS Code, GitHub Copilot, OpenCode, and others.

Think of skills as giving your agent the same context an expert would have. Best practices, architectural patterns, and domain-specific knowledge, loaded on demand instead of explained from scratch every conversation.

## Why skills matter for Sanity development

AI coding tools are good at generating code, but without guidance they produce generic output that misses what makes Sanity different.

Sanity skills give agents the context to write performant GROQ queries, design solid schemas, and integrate correctly with your framework of choice. When an agent encounters one of these tasks it loads the relevant skill and applies the same patterns our engineers recommend.

- **Better code on the first pass.** Agents follow Sanity conventions instead of guessing.
- **Fewer iterations.** The right patterns are loaded before generation, not corrected after.
- **Consistent quality.** Everyone on your team gets the same best practices, whether they’re a Sanity veteran or just getting started.

## Where to find Sanity skills

Sanity publishes skills in a few different places, depending on what they cover.

### Agent Toolkit

The [Sanity Agent Toolkit](https://github.com/sanity-io/agent-toolkit) is the main home for Sanity skills. It includes skills covering Sanity development best practices, content modeling, SEO/AEO, and content experimentation. These are general-purpose, useful for any project that uses Sanity regardless of which products or frameworks you’re working with.

The fastest way to install these Sanity skills is with the `skills` CLI:

```sh
npx skills add sanity-io/agent-toolkit
```

The toolkit also bundles the MCP server configuration and plugins with slash commands for Claude Code and Cursor. See the [Agent Toolkit repository](https://github.com/sanity-io/agent-toolkit) for the full list of what’s included and what each skill covers.

### Product-specific skills

Some Sanity products ship their own skills alongside the product, covering workflows and patterns specific to that product.

Agent Context includes skills that walk you through setting up the Agent Context Studio plugin, building AI agents that can query and reason over your Sanity content, writing effective system prompts, and tuning your agent’s instructions.

You can install the Agent Context skills directly:

```sh
npx skills add sanity-io/agent-context
```

### Community and custom skills

The Agent Skills format is open, so anyone can create and share skills. If your team has Sanity patterns specific to your project (custom schema conventions, deployment workflows, content modeling standards) we recommend you package them as skills and share them across your team. See the [Agent Skills specification](https://agentskills.io/specification) for how skills are structured.

## How skills work with the MCP server

Skills and the [Sanity MCP server](https://www.sanity.io/docs/ai/mcp-server) complement each other:

- **The MCP server** gives agents access to your Sanity content. It can query content, manage documents and deploy schemas.
- **Skills** give agents knowledge to work effectively with Sanity. Best practices, patterns, and guides to help agents.

You don’t need to choose between them. Most setups benefit from both. The MCP server for project interaction and skills for reliable baseline knowledge.

For a full walkthrough of setting up both, see the [AI-powered development quickstart](https://www.sanity.io/docs/ai/ai-quickstart).
