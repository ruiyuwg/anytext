# Mastra

[Mastra](https://mastra.ai) is a framework for building and deploying AI-powered features
using a modern JavaScript stack powered by the [Vercel AI SDK](/docs/ai-sdk).
Integrating with AI Gateway provides unified model management and routing capabilities.

## Getting started

- ### Create a new Mastra project
  First, create a new Mastra project using the CLI:
  ```bash filename="terminal"
  pnpm dlx create-mastra@latest
  ```
  During the setup, the system prompts you to name your project, choose a default provider, and more.
  and more. Feel free to use the default settings.

- ### Install dependencies

  To use the AI Gateway provider, install the `@ai-sdk/gateway` package along with Mastra:

  ````
  ```bash
  pnpm i @ai-sdk/gateway mastra @mastra/core @mastra/memory
  ```


  ```bash
  yarn i @ai-sdk/gateway mastra @mastra/core @mastra/memory
  ```


  ```bash
  npm i @ai-sdk/gateway mastra @mastra/core @mastra/memory
  ```


  ```bash
  bun i @ai-sdk/gateway mastra @mastra/core @mastra/memory
  ```
  ````

- ### Configure environment variables
  Create or update your `.env` file with
  your [Vercel AI Gateway API key](/docs/ai-gateway#using-the-ai-gateway-with-an-api-key):
  ```bash filename=".env"
  AI_GATEWAY_API_KEY=your-api-key-here
  ```

- ### Configure your agent to use AI Gateway

  Now, swap out the `@ai-sdk/openai` package (or your existing model provider)
  for the `@ai-sdk/gateway` package.

  Update your agent configuration file, typically `src/mastra/agents/weather-agent.ts` to the following code:

  ```typescript filename="src/mastra/agents/weather-agent.ts" {2, 24}
  import 'dotenv/config';
  import { gateway } from '@ai-sdk/gateway';
  import { Agent } from '@mastra/core/agent';
  import { Memory } from '@mastra/memory';
  import { LibSQLStore } from '@mastra/libsql';
  import { weatherTool } from '../tools/weather-tool';

  export const weatherAgent = new Agent({
    name: 'Weather Agent',
    instructions: `
        You are a helpful weather assistant that provides accurate weather information and can help planning activities based on the weather.

        Your primary function is to help users get weather details for specific locations. When responding:
        - Always ask for a location if none is provided
        - If the location name isn't in English, please translate it
        - If giving a location with multiple parts (e.g. "New York, NY"), use the most relevant part (e.g. "New York")
        - Include relevant details like humidity, wind conditions, and precipitation
        - Keep responses concise but informative
        - If the user asks for activities and provides the weather forecast, suggest activities based on the weather forecast.
        - If the user asks for activities, respond in the format they request.

        Use the weatherTool to fetch current weather data.
  `,
    model: gateway('google/gemini-2.5-flash'),
    tools: { weatherTool },
    memory: new Memory({
      storage: new LibSQLStore({
        url: 'file:../mastra.db', // path is relative to the .mastra/output directory
      }),
    }),
  });

  (async () => {
    try {
      const response = await weatherAgent.generate(
        "What's the weather in San Francisco today?",
      );
      console.log('Weather Agent Response:', response.text);
    } catch (error) {
      console.error('Error invoking weather agent:', error);
    }
  })();
  ```

- ### Running the application

  Since your agent is now configured to use AI Gateway,
  run the Mastra development server:

  ````
  ```bash
  pnpm i 
  ```


  ```bash
  yarn i 
  ```


  ```bash
  npm i 
  ```


  ```bash
  bun i 
  ```
  ````

  Open the [Mastra Playground and Mastra API](https://mastra.ai/en/docs/server-db/local-dev-playground) to test your agents, workflows, and tools.

title: "Framework Integrations"
description: "Explore available community framework integrations with Vercel AI Gateway"
last\_updated: "2026-03-23T09:40:04.329Z"
source: "https://vercel.com/docs/ai-gateway/ecosystem/framework-integrations"

# Framework Integrations

The Vercel [AI Gateway](/docs/ai-gateway) integrates with popular community AI frameworks and tools,
enabling you to build powerful AI applications while
using the Gateway's features like [cost tracking](/docs/ai-gateway/capabilities/observability) and [unified API access](/docs/ai-gateway/models-and-providers).

### Integration overview

You can integrate the AI Gateway with popular frameworks in several ways:

- **OpenAI Chat Completions**: Use the AI Gateway's [Chat Completions API](/docs/ai-gateway/sdks-and-apis/openai-chat-completions)
- **Native Support**: Direct integration through plugins or official support
- **AI SDK Integration**: Leverage the [AI SDK](/docs/ai-sdk) to access [AI Gateway](/docs/ai-gateway) capabilities directly

### Supported frameworks

The following below list is a non-exhaustive list of frameworks that currently support AI Gateway integration:

- [LangChain](/docs/ai-gateway/ecosystem/framework-integrations/langchain)
- [LangFuse](/docs/ai-gateway/ecosystem/framework-integrations/langfuse)
- [LiteLLM](/docs/ai-gateway/ecosystem/framework-integrations/litellm)
- [LlamaIndex](/docs/ai-gateway/ecosystem/framework-integrations/llamaindex)
- [Mastra](/docs/ai-gateway/ecosystem/framework-integrations/mastra)
- [Pydantic AI](/docs/ai-gateway/ecosystem/framework-integrations/pydantic-ai)

title: "Pydantic AI"
description: "Learn how to integrate Vercel AI Gateway with Pydantic AI to access multiple AI models through a unified interface"
last\_updated: "2026-03-23T09:40:04.341Z"
source: "https://vercel.com/docs/ai-gateway/ecosystem/framework-integrations/pydantic-ai"
