# Google integrations

Source: https://docs.langchain.com/oss/javascript/integrations/providers/google

Integrate with Google using LangChain JavaScript.

LangChain provides integrations with [Google AI Studio](https://aistudio.google.com/) and [Google Cloud Vertex AI](https://cloud.google.com/vertex-ai) through the `@langchain/google` package.

Looking for the older `@langchain/google-genai` or `@langchain/google-vertexai` packages? They are maintained under [long-term support](#legacy-packages) but are no longer recommended for new projects.

## Chat models

The [`ChatGoogle`](/oss/javascript/integrations/chat/google) class is the recommended way to access Gemini models (such as `gemini-2.5-pro`, `gemini-2.5-flash`, and `gemini-3.1-pro-preview`) and open models like Gemma. It supports both Google AI Studio and Vertex AI in a single interface

See [this section for general instructions on installing LangChain packages](/oss/javascript/langchain/install).

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/google @langchain/core
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add @langchain/google @langchain/core
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add @langchain/google @langchain/core
```

Configure your API key:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export GOOGLE_API_KEY=your-api-key
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatGoogle } from "@langchain/google";

const model = new ChatGoogle("gemini-2.5-flash");

const res = await model.invoke([
  ["human", "What would be a good company name for a company that makes colorful socks?"],
]);
```

`ChatGoogle` supports tool calling, structured output, multimodal inputs (images, audio, video), reasoning/thinking, image generation, text-to-speech, and Gemini-specific native tools like Google Search grounding and code execution.

```
Full chat model documentation, including setup, invocation, streaming, structured output, and more.



Google Search, Code Execution, URL Context, Google Maps, File Search, Computer Use, and MCP servers.
```

### Third-party models on Vertex AI

[Anthropic](/oss/javascript/integrations/chat/anthropic) Claude models are also available through
the [Vertex AI](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-claude)
platform. See [here](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-claude)
for more information about enabling access to the models and the model names to use.

## Vector stores

### Vertex AI vector search

> [Vertex AI Vector Search](https://cloud.google.com/vertex-ai/docs/matching-engine/overview),
> formerly known as Vertex AI Matching Engine, provides the industry's leading high-scale
> low latency vector database. These vector databases are commonly
> referred to as vector similarity-matching or an approximate nearest neighbor (ANN) service.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { MatchingEngine } from "@langchain/community/vectorstores/googlevertexai";
```

### Postgres vector store

The [PostgresVectorStore](/oss/javascript/integrations/vectorstores/google_cloudsql_pg) module from the
[`@langchain/google-cloud-sql-pg`](https://www.npmjs.com/package/@langchain/google-cloud-sql-pg) package provides a way to use CloudSQL for PostgreSQL to store
vector embeddings.

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/google-cloud-sql-pg
```

## Community tools

Google-related community tools are available in the `@langchain/community` package:

- [Google Calendar](/oss/javascript/integrations/tools/google_calendar)
- [Gmail](/oss/javascript/integrations/tools/google_gmail)
- [Google Places](/oss/javascript/integrations/tools/google_places)
- [Google Routes](/oss/javascript/integrations/tools/google_routes)
- [Google Scholar](/oss/javascript/integrations/tools/google_scholar)
- [Google Trends](/oss/javascript/integrations/tools/google_trends)

## Legacy packages

The following packages are maintained under long-term support for existing users. New projects should use `@langchain/google` instead.

### `@langchain/google-genai`

The `@langchain/google-genai` package provides [`ChatGoogleGenerativeAI`](/oss/javascript/integrations/chat/google_generative_ai) for accessing Gemini models through Google AI Studio. This package is built on a deprecated Google SDK and will not receive new features.

### `@langchain/google-vertexai`

The `@langchain/google-vertexai` package provides [`ChatVertexAI`](/oss/javascript/integrations/chat/google_vertex_ai) for accessing Gemini models through Vertex AI. This package is superseded by the Vertex AI support built into `@langchain/google`.

### `@langchain/google-common`

The `@langchain/google-common` package contains shared abstractions used internally by the Google integration packages. It is not intended to be used directly.

To migrate from `@langchain/google-genai` or `@langchain/google-vertexai` to `@langchain/google`, see the [ChatGoogle](/oss/javascript/integrations/chat/google) page for setup instructions. The `ChatGoogle` class provides equivalent functionality with unified access to both Google AI Studio and Vertex AI.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/javascript/integrations/providers/google.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
