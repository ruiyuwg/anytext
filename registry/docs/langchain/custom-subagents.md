## Custom subagents

Define custom [subagents](/oss/javascript/deepagents/subagents) as markdown files so the CLI agent can delegate specialized tasks to them. Each subagent lives in its own folder with an `AGENTS.md` file:

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
.deepagents/agents/{subagent-name}/AGENTS.md   # Project-level
~/.deepagents/{agent}/agents/{subagent-name}/AGENTS.md  # User-level
```

Project subagents override user subagents with the same name (see [precedence rules](/oss/javascript/deepagents/data-locations#subagents)).

The frontmatter requires `name` and `description` (same as the [SubAgent dictionary spec](/oss/javascript/deepagents/subagents#subagent-dictionary-based)). The markdown body becomes the subagent's `system_prompt`. In addition to the base spec, `AGENTS.md` files support an optional `model` frontmatter field that overrides the main agent's model for this subagent. Uses the `provider:model-name` format (e.g., `anthropic:claude-haiku-4-5-20251001`, `openai:gpt-4o`). Omit to inherit the main agent's model.

Other SubAgent fields (`tools`, `middleware`, `interrupt_on`, `skills`) are not configurable via `AGENTS.md` frontmatter — custom subagents defined this way inherit the main agent's tools. Use the SDK directly for full control.

````
Subagent `AGENTS.md` files use YAML frontmatter followed by a markdown body:

```markdown theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
---
name: researcher
description: Research topics on the web before writing content
model: anthropic:claude-haiku-4-5-20251001
---

You are a research assistant with access to web search.

## Your Process
1. Search for relevant information
2. Summarize findings clearly
```



Use a cheaper, faster model for simple delegation tasks while keeping the main agent on a more capable model:

```markdown theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
---
name: general-purpose
description: General-purpose agent for research and multi-step tasks
model: anthropic:claude-haiku-4-5-20251001
---

You are a general-purpose assistant. Complete the task efficiently and return a concise summary.
```

This overrides the built-in general-purpose subagent, routing all delegated tasks to a cheaper model. See [Override the general-purpose subagent](/oss/javascript/deepagents/subagents#override-the-general-purpose-subagent) for more.
````

## Use MCP tools

Extend the CLI with tools from external [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) servers. Place a `.mcp.json` at your project root and the CLI discovers it automatically. See the [MCP tools guide](/oss/javascript/deepagents/cli/mcp-tools) for configuration format, auto-discovery, and troubleshooting.
