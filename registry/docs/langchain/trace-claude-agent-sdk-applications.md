# Trace Claude Agent SDK applications

Source: https://docs.langchain.com/langsmith/trace-claude-agent-sdk

The [Claude Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview) is an SDK for building agentic applications with Claude. LangSmith provides native integration with the Claude Agent SDK to automatically trace your agent executions, tool calls, and interactions with Claude models.

## Installation

Install the LangSmith integration for Claude Agent SDK

```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
uv add langsmith[claude-agent-sdk]
```

```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install langsmith[claude-agent-sdk]
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add @anthropic-ai/claude-agent-sdk langsmith zod
```

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @anthropic-ai/claude-agent-sdk langsmith zod
```

## Setup

Set your [API keys](/langsmith/create-account-api-key):

```bash shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGSMITH_TRACING=true
export LANGSMITH_ENDPOINT=https://api.smith.langchain.com
export LANGSMITH_API_KEY=<your_langsmith_api_key>
export LANGSMITH_PROJECT=<your_langsmith_project>

export ANTHROPIC_API_KEY=<your_anthropic_api_key>
```

```dotenv .env theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
LANGSMITH_TRACING=true
LANGSMITH_ENDPOINT=https://api.smith.langchain.com
LANGSMITH_API_KEY=<your_langsmith_api_key>
LANGSMITH_PROJECT=<your_langsmith_project>

ANTHROPIC_API_KEY=<your_anthropic_api_key>
```

You can find your LangSmith API key and project name in the [LangSmith UI](https://smith.langchain.com) under **Settings**.

For an Anthropic API key, refer to the [Claude console](https://claude.ai/login).

## Quickstart

To enable LangSmith tracing for your Claude Agent SDK application, call `configure_claude_agent_sdk()` at the start of your application:

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import asyncio
from typing import Any

from claude_agent_sdk import (
    ClaudeAgentOptions,
    ClaudeSDKClient,
    create_sdk_mcp_server,
    tool,
)
from langsmith.integrations.claude_agent_sdk import configure_claude_agent_sdk

configure_claude_agent_sdk()


@tool(
    "get_weather",
    "Gets the current weather for a given city",
    {"city": str},
)
async def get_weather(args: dict[str, Any]) -> dict[str, Any]:
    city = args["city"]
    weather_data = {
        "San Francisco": "Foggy, 62°F",
        "New York": "Sunny, 75°F",
        "London": "Rainy, 55°F",
        "Tokyo": "Clear, 68°F",
    }
    weather = weather_data.get(city, "Weather data not available")
    return {"content": [{"type": "text", "text": f"Weather in {city}: {weather}"}]}


async def main() -> None:
    weather_server = create_sdk_mcp_server(
        name="weather",
        version="1.0.0",
        tools=[get_weather],
    )

    options = ClaudeAgentOptions(
        model="claude-sonnet-4-5-20250929",
        system_prompt="You are a friendly travel assistant who helps with weather information.",
        mcp_servers={"weather": weather_server},
        allowed_tools=["mcp__weather__get_weather"],
    )

    async with ClaudeSDKClient(options=options) as client:
        await client.query("What's the weather like in San Francisco and Tokyo?")

        async for message in client.receive_response():
            print(message)


if __name__ == "__main__":
    asyncio.run(main())
```

```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import * as originalSdk from '@anthropic-ai/claude-agent-sdk';

import { wrapClaudeAgentSDK } from 'langsmith/experimental/anthropic';
import { z } from 'zod/v4';

const sdk = wrapClaudeAgentSDK(originalSdk);

const getWeather = sdk.tool(
  'get_weather',
  'Gets the current weather for a given city',
  {
    city: z.string(),
  },
  async ({ city }) => {
    const weatherData: Record<string, string> = {
      'San Francisco': 'Foggy, 62°F',
      'New York': 'Sunny, 75°F',
      London: 'Rainy, 55°F',
      Tokyo: 'Clear, 68°F',
    };
    const weather = weatherData[city] ?? 'Weather data not available';
    return {
      content: [{ type: 'text' as const, text: weather }],
    };
  }
);

const weatherServer = sdk.createSdkMcpServer({
  name: 'weather',
  version: '1.0.0',
  tools: [getWeather],
});

const query = sdk.query({
  prompt: "What's the weather like in San Francisco and Tokyo?",
  options: {
    model: 'claude-sonnet-4-5-20250929',
    systemPrompt:
      'You are a friendly travel assistant who helps with weather information.',
    mcpServers: { weather: weatherServer },
    allowedTools: ['mcp__weather__get_weather'],
  },
});

for await (const chunk of query) {
  console.log(chunk);
}
```

Once configured, all Claude Agent SDK operations will be automatically traced to LangSmith, including:

- Agent queries and responses
- Tool invocations and results
- Claude model interactions
- MCP server operations

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/trace-claude-agent-sdk.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
