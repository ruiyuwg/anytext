# LangChain

[LangChain](https://js.langchain.com) gives you tools
for every step of the agent development lifecycle.
This guide demonstrates how to integrate [Vercel AI Gateway](/docs/ai-gateway)
with LangChain to access various AI models and providers.

## Getting started

- ### Create a new project
  First, create a new directory for your project and initialize it:
  ```bash filename="terminal"
  mkdir langchain-ai-gateway
  cd langchain-ai-gateway
  pnpm dlx init -y
  ```

- ### Install dependencies

  Install the required LangChain packages along with the `dotenv` and `@types/node` packages:

  ````
  ```bash
  pnpm i langchain @langchain/core @langchain/openai dotenv @types/node
  ```


  ```bash
  yarn i langchain @langchain/core @langchain/openai dotenv @types/node
  ```


  ```bash
  npm i langchain @langchain/core @langchain/openai dotenv @types/node
  ```


  ```bash
  bun i langchain @langchain/core @langchain/openai dotenv @types/node
  ```
  ````

- ### Configure environment variables
  Create a `.env` file with your [Vercel AI Gateway API key](/docs/ai-gateway#using-the-ai-gateway-with-an-api-key):
  ```bash filename=".env"
  AI_GATEWAY_API_KEY=your-api-key-here
  ```
  > **💡 Note:** If you're using the [AI Gateway from within a Vercel
  > deployment](/docs/ai-gateway#using-the-ai-gateway-with-a-vercel-oidc-token),
  > you can also use the `VERCEL_OIDC_TOKEN` environment variable which will be
  > automatically provided.

- ### Create your LangChain application
  Create a new file called `index.ts` with the following code:
  ```typescript filename="index.ts" {9, 16}
  import 'dotenv/config';
  import { ChatOpenAI } from '@langchain/openai';
  import { HumanMessage } from '@langchain/core/messages';

  async function main() {
    console.log('=== LangChain Chat Completion with AI Gateway ===');

    const apiKey =
      process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN;

    const chat = new ChatOpenAI({
      apiKey: apiKey,
      modelName: 'openai/gpt-5.4',
      temperature: 0.7,
      configuration: {
        baseURL: 'https://ai-gateway.vercel.sh/v1',
      },
    });

    try {
      const response = await chat.invoke([
        new HumanMessage('Write a one-sentence bedtime story about a unicorn.'),
      ]);

      console.log('Response:', response.content);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  main().catch(console.error);
  ```
  The following code:
  - Initializes a `ChatOpenAI` instance configured to use the AI Gateway
  - Sets the model `temperature` to `0.7`
  - Makes a chat completion request
  - Handles any potential errors

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

title: "LangFuse"
description: "Learn how to integrate Vercel AI Gateway with LangFuse to access multiple AI models through a unified interface"
last\_updated: "2026-03-08T05:03:10.392Z"
source: "https://vercel.com/docs/ai-gateway/ecosystem/framework-integrations/langfuse"
