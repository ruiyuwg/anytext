# Agent Client Protocol (ACP)

Source: https://docs.langchain.com/oss/javascript/deepagents/acp

Expose Deep Agents over the Agent Client Protocol (ACP) to integrate with code editors and IDEs.

[Agent Client Protocol (ACP)](https://agentclientprotocol.com/get-started/introduction) standardizes communication between coding agents and code editors or IDEs.
With the ACP protocol, you can make use of your custom deep agents with any ACP-compatible client, allowing your code editor to provide project context and receive rich updates.

ACP is designed for agent-editor integrations. If you want your agent to call tools hosted by external servers, see [Model Context Protocol (MCP)](/oss/javascript/langchain/mcp/).

## Quickstart

Install the ACP integration package:

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install deepagents-acp
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add deepagents-acp
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add deepagents-acp
```

Then expose a Deep Agent over ACP.

This starts an ACP server in stdio mode (it reads requests from stdin and writes responses to stdout). In practice, you usually run this as a command launched by an ACP client (for example, your editor), which then communicates with the server over stdio.

```typescript icon="server" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { startServer } from "deepagents-acp";

await startServer({
  agents: {
    name: "coding-assistant",
    description: "AI coding assistant with filesystem access",
  },
  workspaceRoot: process.cwd(),
});
```

You can also use the CLI without writing any code:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npx deepagents-acp
```

The `deepagents-acp` package provides both a CLI and a programmatic API for exposing deep agents over ACP.

## Clients

Deep Agents works anywhere you can run an ACP agent server. Some notable ACP clients include:

- [Zed](https://zed.dev/docs/ai/external-agents)
- [JetBrains IDEs](https://www.jetbrains.com/help/ai-assistant/acp.html)
- Visual Studio Code (via [vscode-acp](https://github.com/formulahendry/vscode-acp))
- Neovim (via ACP-compatible plugins)

### Zed

Register your deep agent with [Zed](https://zed.dev/docs/ai/external-agents) by adding it to your Zed settings (`~/.config/zed/settings.json` on Linux, `~/Library/Application Support/Zed/settings.json` on macOS):

**Simple setup (no code required):**

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "agent": {
    "profiles": {
      "deepagents": {
        "name": "DeepAgents",
        "command": "npx",
        "args": ["deepagents-acp"],
        "env": {
          "ANTHROPIC_API_KEY": "sk-ant-..."
        }
      }
    }
  }
}
```

**With CLI options:**

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "agent": {
    "profiles": {
      "deepagents": {
        "name": "DeepAgents",
        "command": "npx",
        "args": [
          "deepagents-acp",
          "--name", "my-assistant",
          "--skills", "./skills",
          "--debug"
        ],
        "env": {
          "ANTHROPIC_API_KEY": "sk-ant-..."
        }
      }
    }
  }
}
```

**Custom server script:**

For more control, create a TypeScript server script:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
// server.ts
import { startServer } from "deepagents-acp";

await startServer({
  agents: {
    name: "my-agent",
    description: "My custom coding agent",
    skills: ["./skills/"],
  },
});
```

Then point Zed at it:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "agent": {
    "profiles": {
      "my-agent": {
        "name": "My Agent",
        "command": "npx",
        "args": ["tsx", "./server.ts"]
      }
    }
  }
}
```

Open Zed's Agents panel and start a DeepAgents thread.

### ACP Registry

DeepAgents is available in the [ACP Agent Registry](https://agentclientprotocol.com/registry/index) for one-click installation in Zed and JetBrains IDEs. When an ACP client supports the registry, users can discover and install Deep Agents without any manual configuration.

## CLI reference

The CLI is the fastest way to start an ACP server. It requires no code — just run `npx deepagents-acp` and connect your editor.

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npx deepagents-acp [options]
```

| Option                 | Short | Description                                         |
| ---------------------- | ----- | --------------------------------------------------- |
| `--name <name>`        | `-n`  | Agent name (default: `"deepagents"`)                |
| `--description <desc>` | `-d`  | Agent description                                   |
| `--model <model>`      | `-m`  | LLM model (default: `"claude-sonnet-4-5-20250929"`) |
| `--workspace <path>`   | `-w`  | Workspace root directory (default: cwd)             |
| `--skills <paths>`     | `-s`  | Comma-separated skill paths                         |
| `--memory <paths>`     |       | Comma-separated AGENTS.md paths                     |
| `--debug`              |       | Enable debug logging to stderr                      |
| `--help`               | `-h`  | Show help message                                   |
| `--version`            | `-v`  | Show version                                        |

### Environment variables

| Variable            | Description                                    |
| ------------------- | ---------------------------------------------- |
| `ANTHROPIC_API_KEY` | API key for Anthropic/Claude models (required) |
| `OPENAI_API_KEY`    | API key for OpenAI models                      |
| `DEBUG`             | Set to `"true"` to enable debug logging        |
| `WORKSPACE_ROOT`    | Alternative to `--workspace` flag              |

## Programmatic API

### `startServer`

Convenience function to create and start a server in one call:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { startServer } from "deepagents-acp";

const server = await startServer({
  agents: {
    name: "coding-assistant",
    description: "AI coding assistant with filesystem access",
  },
  workspaceRoot: process.cwd(),
});
```

### `DeepAgentsServer`

For full control, use the `DeepAgentsServer` class directly:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { DeepAgentsServer } from "deepagents-acp";

const server = new DeepAgentsServer({
  agents: [
    {
      name: "code-agent",
      description: "Full-featured coding assistant",
      model: "claude-sonnet-4-5-20250929",
      skills: ["./skills/"],
      memory: ["./.deepagents/AGENTS.md"],
    },
    {
      name: "reviewer",
      description: "Code review specialist",
      systemPrompt: "You are a code review expert...",
    },
  ],
  serverName: "my-deepagents-acp",
  serverVersion: "1.0.0",
  workspaceRoot: process.cwd(),
  debug: true,
});

await server.start();
```

#### Server options

| Option          | Type                                   | Default            | Description              |
| --------------- | -------------------------------------- | ------------------ | ------------------------ |
| `agents`        | `DeepAgentConfig \| DeepAgentConfig[]` | required           | Agent configuration(s)   |
| `serverName`    | `string`                               | `"deepagents-acp"` | Server name for ACP      |
| `serverVersion` | `string`                               | `"0.0.1"`          | Server version           |
| `workspaceRoot` | `string`                               | `process.cwd()`    | Workspace root directory |
| `debug`         | `boolean`                              | `false`            | Enable debug logging     |

#### Agent configuration

| Option         | Type                                           | Description                                         |
| -------------- | ---------------------------------------------- | --------------------------------------------------- |
| `name`         | `string`                                       | Unique agent name (required)                        |
| `description`  | `string`                                       | Agent description                                   |
| `model`        | `string`                                       | LLM model (default: `"claude-sonnet-4-5-20250929"`) |
| `tools`        | `StructuredTool[]`                             | Custom LangChain tools                              |
| `systemPrompt` | `string`                                       | Custom system prompt                                |
| `middleware`   | `AgentMiddleware[]`                            | Custom middleware                                   |
| `backend`      | `BackendProtocol \| BackendFactory`            | Filesystem backend                                  |
| `skills`       | `string[]`                                     | Skill source paths                                  |
| `memory`       | `string[]`                                     | Memory source paths (AGENTS.md)                     |
| `interruptOn`  | `Record<string, boolean \| InterruptOnConfig>` | Tools requiring user approval (HITL)                |
| `commands`     | `Array<{ name, description, input? }>`         | Custom slash commands                               |

## Customization

### Multiple agents

You can expose multiple agents from a single server. The ACP client selects which agent to use when creating a session:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const server = new DeepAgentsServer({
  agents: [
    { name: "code-agent", description: "General coding" },
    { name: "reviewer", description: "Code reviews" },
  ],
});
```

Some ACP clients (like Zed) don't currently expose a UI for selecting between agents. In that case, consider running separate server instances with a single agent each.

### Slash commands

The server registers built-in slash commands with the IDE: `/plan`, `/agent`, `/ask`, `/clear`, and `/status`. You can also define custom commands per agent:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const server = new DeepAgentsServer({
  agents: {
    name: "my-agent",
    commands: [
      { name: "test", description: "Run the project's test suite" },
      { name: "lint", description: "Run linter and fix issues" },
      {
        name: "deploy",
        description: "Deploy to staging",
        input: { hint: "environment (staging or production)" },
      },
    ],
  },
});
```

### Human-in-the-loop

Use `interruptOn` to require user approval in the IDE before the agent runs sensitive tools:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const server = new DeepAgentsServer({
  agents: {
    name: "careful-agent",
    interruptOn: {
      execute: { allowedDecisions: ["approve", "edit", "reject"] },
      write_file: true,
    },
  },
});
```

When the agent calls a protected tool, the IDE prompts the user to allow or reject the operation, with options to remember the decision for the session.

### Custom tools

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { DeepAgentsServer } from "deepagents-acp";
import { tool } from "@langchain/core/tools";
import { z } from "zod";

const searchTool = tool(
  async ({ query }) => {
    return `Results for: ${query}`;
  },
  {
    name: "search",
    description: "Search the codebase",
    schema: z.object({ query: z.string() }),
  },
);

const server = new DeepAgentsServer({
  agents: {
    name: "search-agent",
    tools: [searchTool],
  },
});

await server.start();
```

### Custom backend

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { DeepAgentsServer } from "deepagents-acp";
import { CompositeBackend, FilesystemBackend, StateBackend } from "deepagents";

const server = new DeepAgentsServer({
  agents: {
    name: "custom-agent",
    backend: new CompositeBackend({
      routes: [
        {
          prefix: "/workspace",
          backend: new FilesystemBackend({ rootDir: "./workspace" }),
        },
        { prefix: "/", backend: (config) => new StateBackend(config) },
      ],
    }),
  },
});

await server.start();
```

### Skills and memory

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { startServer } from "deepagents-acp";

await startServer({
  agents: {
    name: "project-agent",
    description: "Agent with project-specific knowledge",
    skills: ["./skills/", "~/.deepagents/skills/"],
    memory: ["./.deepagents/AGENTS.md"],
  },
  workspaceRoot: process.cwd(),
});
```

See the upstream ACP docs for protocol details and editor support:

- Introduction: <https://agentclientprotocol.com/get-started/introduction>
- Clients/editors: <https://agentclientprotocol.com/get-started/clients>

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/deepagents/acp.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
