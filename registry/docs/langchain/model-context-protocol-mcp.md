# Model Context Protocol (MCP)

Source: https://docs.langchain.com/oss/javascript/langchain/mcp

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) is an open protocol that standardizes how applications provide tools and context to LLMs. LangChain agents can use tools defined on MCP servers using the [`@langchain/mcp-adapters`](https://github.com/langchain-ai/langchainjs/tree/main/libs/langchain-mcp-adapters) library.

## Quickstart

Install the `@langchain/mcp-adapters` library:

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/mcp-adapters
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add @langchain/mcp-adapters
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add @langchain/mcp-adapters
```

```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
bun add @langchain/mcp-adapters
```

`@langchain/mcp-adapters` enables agents to use tools defined across one or more MCP servers.

`MultiServerMCPClient` is **stateless by default**. Each tool invocation creates a fresh MCP `ClientSession`, executes the tool, and then cleans up. See the [stateful sessions](#stateful-sessions) section for more details.

```ts Accessing multiple MCP servers icon="server" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { MultiServerMCPClient } from "@langchain/mcp-adapters";  // [!code highlight]
import { ChatAnthropic } from "@langchain/anthropic";
import { createAgent } from "langchain";

const client = new MultiServerMCPClient({  // [!code highlight]
    math: {
        transport: "stdio",  // Local subprocess communication
        command: "node",
        // Replace with absolute path to your math_server.js file
        args: ["/path/to/math_server.js"],
    },
    weather: {
        transport: "http",  // HTTP-based remote server
        // Ensure you start your weather server on port 8000
        url: "http://localhost:8000/mcp",
    },
});

const tools = await client.getTools();  // [!code highlight]
const agent = createAgent({
    model: "claude-sonnet-4-6",
    tools,  // [!code highlight]
});

const mathResponse = await agent.invoke({
    messages: [{ role: "user", content: "what's (3 + 5) x 12?" }],
});

const weatherResponse = await agent.invoke({
    messages: [{ role: "user", content: "what is the weather in nyc?" }],
});
```

## Custom servers

To create your own MCP servers, you can use the `@modelcontextprotocol/sdk` library. This library provides a simple way to define [tools](https://modelcontextprotocol.io/docs/learn/server-concepts#tools-ai-actions) and run them as servers.

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @modelcontextprotocol/sdk
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add @modelcontextprotocol/sdk
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add @modelcontextprotocol/sdk
```

```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
bun add @modelcontextprotocol/sdk
```

To test your agent with MCP tool servers, use the following examples:

```typescript title="Math server (stdio transport)" icon="device-floppy" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
    {
        name: "math-server",
        version: "0.1.0",
    },
    {
        capabilities: {
            tools: {},
        },
    }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
        {
            name: "add",
            description: "Add two numbers",
            inputSchema: {
                type: "object",
                properties: {
                    a: {
                        type: "number",
                        description: "First number",
                    },
                    b: {
                        type: "number",
                        description: "Second number",
                    },
                },
                required: ["a", "b"],
            },
        },
        {
            name: "multiply",
            description: "Multiply two numbers",
            inputSchema: {
                type: "object",
                properties: {
                    a: {
                        type: "number",
                        description: "First number",
                    },
                    b: {
                        type: "number",
                        description: "Second number",
                    },
                },
                required: ["a", "b"],
            },
        },
        ],
    };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
    switch (request.params.name) {
        case "add": {
            const { a, b } = request.params.arguments as { a: number; b: number };
            return {
                content: [
                {
                    type: "text",
                    text: String(a + b),
                },
                ],
            };
        }
        case "multiply": {
            const { a, b } = request.params.arguments as { a: number; b: number };
            return {
                content: [
                {
                    type: "text",
                    text: String(a * b),
                },
                ],
            };
        }
        default:
            throw new Error(`Unknown tool: ${request.params.name}`);
    }
});

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Math MCP server running on stdio");
}

main();
```

```typescript title="Weather server (SSE transport)" icon="wifi" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import express from "express";

const app = express();
app.use(express.json());

const server = new Server(
    {
        name: "weather-server",
        version: "0.1.0",
    },
    {
        capabilities: {
            tools: {},
        },
    }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
        {
            name: "get_weather",
            description: "Get weather for location",
            inputSchema: {
            type: "object",
            properties: {
                location: {
                type: "string",
                description: "Location to get weather for",
                },
            },
            required: ["location"],
            },
        },
        ],
    };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
    switch (request.params.name) {
        case "get_weather": {
            const { location } = request.params.arguments as { location: string };
            return {
                content: [
                    {
                        type: "text",
                        text: `It's always sunny in ${location}`,
                    },
                ],
            };
        }
        default:
            throw new Error(`Unknown tool: ${request.params.name}`);
    }
});

app.post("/mcp", async (req, res) => {
    const transport = new SSEServerTransport("/mcp", res);
    await server.connect(transport);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Weather MCP server running on port ${PORT}`);
});
```

## Transports

MCP supports different transport mechanisms for client-server communication.

### HTTP

The `http` transport (also referred to as `streamable-http`) uses HTTP requests for client-server communication. See the [MCP HTTP transport specification](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http) for more details.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const client = new MultiServerMCPClient({
    weather: {
        transport: "sse",
        url: "http://localhost:8000/mcp",
    },
});
```

#### Passing headers

#### Authentication

### stdio

Client launches server as a subprocess and communicates via standard input/output. Best for local tools and simple setups.

Unlike HTTP transports, `stdio` connections are inherently **stateful**: the subprocess persists for the lifetime of the client connection. However, when using `MultiServerMCPClient` without explicit session management, each tool call still creates a new session. See [stateful sessions](#stateful-sessions) for managing persistent connections.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const client = new MultiServerMCPClient({
    math: {
        transport: "stdio",
        command: "node",
        args: ["/path/to/math_server.js"],
    },
});
```

## Core features

### Tools

[Tools](https://modelcontextprotocol.io/docs/concepts/tools) allow MCP servers to expose executable functions that LLMs can invoke to perform actions—such as querying databases, calling APIs, or interacting with external systems. LangChain converts MCP tools into LangChain [tools](/oss/javascript/langchain/tools), making them directly usable in any LangChain agent or workflow.

#### Loading tools

Use `client.get_tools()` to retrieve tools from MCP servers and pass them to your agent:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { MultiServerMCPClient } from "@langchain/mcp-adapters";
import { createAgent } from "langchain";

const client = new MultiServerMCPClient({...});
const tools = await client.getTools();  // [!code highlight]
const agent = createAgent({ model: "claude-sonnet-4-6", tools });
```

## Additional resources

- [MCP documentation](https://modelcontextprotocol.io/introduction)

- [MCP Transport documentation](https://modelcontextprotocol.io/docs/concepts/transports)

- [`@langchain/mcp-adapters`](https://github.com/langchain-ai/langchainjs/tree/main/libs/langchain-mcp-adapters/)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/mcp.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
