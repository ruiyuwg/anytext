# LangFuse

[LangFuse](https://langfuse.com/) is an LLM engineering platform
that helps teams collaboratively develop, monitor, evaluate, and debug AI applications.
This guide demonstrates how to integrate [Vercel AI Gateway](/docs/ai-gateway)
with LangFuse to access various AI models and providers.

## Getting started

- ### Create a new project
  First, create a new directory for your project and initialize it:
  ```bash filename="terminal"
  mkdir langfuse-ai-gateway
  cd langfuse-ai-gateway
  pnpm dlx init -y
  ```

- ### Install dependencies

  Install the required LangFuse packages along with the `dotenv` and `@types/node` packages:

  ````
  ```bash
  pnpm i langfuse openai dotenv @types/node
  ```


  ```bash
  yarn i langfuse openai dotenv @types/node
  ```


  ```bash
  npm i langfuse openai dotenv @types/node
  ```


  ```bash
  bun i langfuse openai dotenv @types/node
  ```
  ````

- ### Configure environment variables
  Create a `.env` file with your [Vercel AI Gateway API key](/docs/ai-gateway#using-the-ai-gateway-with-an-api-key)
  and LangFuse API keys:
  ```bash filename=".env"
  AI_GATEWAY_API_KEY=your-api-key-here

  LANGFUSE_PUBLIC_KEY=your_langfuse_public_key
  LANGFUSE_SECRET_KEY=your_langfuse_secret_key
  LANGFUSE_HOST=https://cloud.langfuse.com
  ```
  > **💡 Note:** If you're using the [AI Gateway from within a Vercel
  > deployment](/docs/ai-gateway#using-the-ai-gateway-with-a-vercel-oidc-token),
  > you can also use the `VERCEL_OIDC_TOKEN` environment variable which will be
  > automatically provided.

- ### Create your LangFuse application
  Create a new file called `index.ts` with the following code:
  ```typescript filename="index.ts" {6, 14}
  import { observeOpenAI } from 'langfuse';
  import OpenAI from 'openai';

  const openaiClient = new OpenAI({
    apiKey: process.env.AI_GATEWAY_API_KEY,
    baseURL: 'https://ai-gateway.vercel.sh/v1',
  });

  const client = observeOpenAI(openaiClient, {
    generationName: 'fun-fact-request', // Optional: Name of the generation in Langfuse
  });

  const response = await client.chat.completions.create({
    model: 'moonshotai/kimi-k2',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Tell me about the food scene in San Francisco.' },
    ],
  });

  console.log(response.choices[0].message.content);
  ```
  The following code:
  - Creates an OpenAI client configured to use the Vercel AI Gateway
  - Uses `observeOpenAI` to wrap the client for automatic tracing and logging
  - Makes a chat completion request through the AI Gateway
  - Automatically captures request/response data, token usage, and metrics

- ### Running the application

  Run your application using Node.js:

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

  You should see a response from the AI model in your console.

title: "LiteLLM"
description: "Learn how to integrate Vercel AI Gateway with LiteLLM to access multiple AI models through a unified interface"
last\_updated: "2026-03-23T09:40:04.309Z"
source: "https://vercel.com/docs/ai-gateway/ecosystem/framework-integrations/litellm"
