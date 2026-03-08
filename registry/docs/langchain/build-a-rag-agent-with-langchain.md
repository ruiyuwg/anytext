# Build a RAG agent with LangChain

Source: https://docs.langchain.com/oss/javascript/langchain/rag

## Overview

One of the most powerful applications enabled by LLMs is sophisticated question-answering (Q\&A) chatbots. These are applications that can answer questions about specific source information. These applications use a technique known as Retrieval Augmented Generation, or [RAG](/oss/javascript/langchain/retrieval/).

This tutorial will show how to build a simple Q\&A application over an unstructured text data source. We will demonstrate:

1. A RAG [agent](#rag-agents) that executes searches with a simple tool. This is a good general-purpose implementation.
2. A two-step RAG [chain](#rag-chains) that uses just a single LLM call per query. This is a fast and effective method for simple queries.

### Concepts

We will cover the following concepts:

- **Indexing**: a pipeline for ingesting data from a source and indexing it. *This usually happens in a separate process.*

- **Retrieval and generation**: the actual RAG process, which takes the user query at run time and retrieves the relevant data from the index, then passes that to the model.

Once we've indexed our data, we will use an [agent](/oss/javascript/langchain/agents) as our orchestration framework to implement the retrieval and generation steps.

The indexing portion of this tutorial will largely follow the [semantic search tutorial](/oss/javascript/langchain/knowledge-base).

If your data is already available for search (i.e., you have a function to execute a search), or you're comfortable with the content from that tutorial, feel free to skip to the section on [retrieval and generation](#2-retrieval-and-generation)

### Preview

In this guide we'll build an app that answers questions about the website's content. The specific website we will use is the [LLM Powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/) blog post by Lilian Weng, which allows us to ask questions about the contents of the post.

We can create a simple indexing pipeline and RAG chain to do this in ~40 lines of code. See below for the full code snippet:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import "cheerio";
import { createAgent, tool } from "langchain";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import * as z from "zod";

// Load and chunk contents of blog
const pTagSelector = "p";
const cheerioLoader = new CheerioWebBaseLoader(
  "https://lilianweng.github.io/posts/2023-06-23-agent/",
  {
    selector: pTagSelector
  }
);

const docs = await cheerioLoader.load();

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200
});
const allSplits = await splitter.splitDocuments(docs);

// Index chunks
await vectorStore.addDocuments(allSplits)

// Construct a tool for retrieving context
const retrieveSchema = z.object({ query: z.string() });

const retrieve = tool(
  async ({ query }) => {
    const retrievedDocs = await vectorStore.similaritySearch(query, 2);
    const serialized = retrievedDocs
      .map(
        (doc) => `Source: ${doc.metadata.source}\nContent: ${doc.pageContent}`
      )
      .join("\n");
    return [serialized, retrievedDocs];
  },
  {
    name: "retrieve",
    description: "Retrieve information related to a query.",
    schema: retrieveSchema,
    responseFormat: "content_and_artifact",
  }
);

const agent = createAgent({ model: "gpt-5", tools: [retrieve] });
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
let inputMessage = `What is Task Decomposition?`;

let agentInputs = { messages: [{ role: "user", content: inputMessage }] };

for await (const step of await agent.stream(agentInputs, {
  streamMode: "values",
})) {
  const lastMessage = step.messages[step.messages.length - 1];
  prettyPrint(lastMessage);
  console.log("-----\n");
}
```

Check out the [LangSmith trace](https://smith.langchain.com/public/a117a1f8-c96c-4c16-a285-00b85646118e/r).

## Setup

### Installation

This tutorial requires these langchain dependencies:

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm i langchain @langchain/community @langchain/textsplitters
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add langchain @langchain/community @langchain/textsplitters
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add langchain @langchain/community @langchain/textsplitters
```

For more details, see our [Installation guide](/oss/javascript/langchain/install).

### LangSmith

Many of the applications you build with LangChain will contain multiple steps with multiple invocations of LLM calls. As these applications get more complex, it becomes crucial to be able to inspect what exactly is going on inside your chain or agent. The best way to do this is with [LangSmith](https://smith.langchain.com).

After you sign up at the link above, make sure to set your environment variables to start logging traces:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGSMITH_TRACING="true"
export LANGSMITH_API_KEY="..."
```

### Components

We will need to select three components from LangChain's suite of integrations.

Select a chat model:

````
👉 Read the [OpenAI chat model integration docs](/oss/javascript/integrations/chat/openai/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/openai
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/openai
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/openai
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/openai
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  process.env.OPENAI_API_KEY = "your-api-key";

  const model = await initChatModel("gpt-5.2");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatOpenAI } from "@langchain/openai";

  const model = new ChatOpenAI({
    model: "gpt-5.2",
    apiKey: "your-api-key"
  });
  ```




👉 Read the [Anthropic chat model integration docs](/oss/javascript/integrations/chat/anthropic/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/anthropic
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/anthropic
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/anthropic
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/anthropic
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  process.env.ANTHROPIC_API_KEY = "your-api-key";

  const model = await initChatModel("claude-sonnet-4-6");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatAnthropic } from "@langchain/anthropic";

  const model = new ChatAnthropic({
    model: "claude-sonnet-4-6",
    apiKey: "your-api-key"
  });
  ```




👉 Read the [Azure chat model integration docs](/oss/javascript/integrations/chat/azure/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/azure
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/azure
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/azure
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/azure
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  process.env.AZURE_OPENAI_API_KEY = "your-api-key";
  process.env.AZURE_OPENAI_ENDPOINT = "your-endpoint";
  process.env.OPENAI_API_VERSION = "your-api-version";

  const model = await initChatModel("azure_openai:gpt-5.2");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { AzureChatOpenAI } from "@langchain/openai";

  const model = new AzureChatOpenAI({
    model: "gpt-5.2",
    azureOpenAIApiKey: "your-api-key",
    azureOpenAIApiEndpoint: "your-endpoint",
    azureOpenAIApiVersion: "your-api-version"
  });
  ```




👉 Read the [Google GenAI chat model integration docs](/oss/javascript/integrations/chat/google_generative_ai/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/google-genai
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/google-genai
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/google-genai
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/google-genai
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  process.env.GOOGLE_API_KEY = "your-api-key";

  const model = await initChatModel("google-genai:gemini-2.5-flash-lite");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash-lite",
    apiKey: "your-api-key"
  });
  ```




👉 Read the [AWS Bedrock chat model integration docs](/oss/javascript/integrations/chat/bedrock_converse/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/aws
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/aws
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/aws
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/aws
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  // Follow the steps here to configure your credentials:
  // https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html

  const model = await initChatModel("bedrock:gpt-5.2");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatBedrockConverse } from "@langchain/aws";

  // Follow the steps here to configure your credentials:
  // https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html

  const model = new ChatBedrockConverse({
    model: "gpt-5.2",
    region: "us-east-2"
  });
  ```
````

Select an embeddings model:

````
  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/openai
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/openai
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/openai
  ```


```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { OpenAIEmbeddings } from "@langchain/openai";

const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-large"
});
```




  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/openai
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/openai
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/openai
  ```


```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
AZURE_OPENAI_API_INSTANCE_NAME=<YOUR_INSTANCE_NAME>
AZURE_OPENAI_API_KEY=<YOUR_KEY>
AZURE_OPENAI_API_VERSION="2024-02-01"
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { AzureOpenAIEmbeddings } from "@langchain/openai";

const embeddings = new AzureOpenAIEmbeddings({
  azureOpenAIApiEmbeddingsDeploymentName: "text-embedding-ada-002"
});
```




  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/aws
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/aws
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/aws
  ```


```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
BEDROCK_AWS_REGION=your-region
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { BedrockEmbeddings } from "@langchain/aws";

const embeddings = new BedrockEmbeddings({
  model: "amazon.titan-embed-text-v1"
});
```




  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/google-vertexai
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/google-vertexai
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/google-vertexai
  ```


```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
GOOGLE_APPLICATION_CREDENTIALS=credentials.json
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { VertexAIEmbeddings } from "@langchain/google-vertexai";

const embeddings = new VertexAIEmbeddings({
  model: "gemini-embedding-001"
});
```




  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/mistralai
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/mistralai
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/mistralai
  ```


```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
MISTRAL_API_KEY=your-api-key
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { MistralAIEmbeddings } from "@langchain/mistralai";

const embeddings = new MistralAIEmbeddings({
  model: "mistral-embed"
});
```




  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/cohere
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/cohere
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/cohere
  ```


```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
COHERE_API_KEY=your-api-key
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { CohereEmbeddings } from "@langchain/cohere";

const embeddings = new CohereEmbeddings({
  model: "embed-english-v3.0"
});
```
````

Select a vector store:

````
  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/classic
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/classic
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/classic
  ```


```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";

const vectorStore = new MemoryVectorStore(embeddings);
```




  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/community
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/community
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/community
  ```


```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Chroma } from "@langchain/community/vectorstores/chroma";

const vectorStore = new Chroma(embeddings, {
  collectionName: "a-test-collection",
});
```




  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/community
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/community
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/community
  ```


```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { FaissStore } from "@langchain/community/vectorstores/faiss";

const vectorStore = new FaissStore(embeddings, {});
```




  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/mongodb
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/mongodb
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/mongodb
  ```


```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb"
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_ATLAS_URI || "");
const collection = client
  .db(process.env.MONGODB_ATLAS_DB_NAME)
  .collection(process.env.MONGODB_ATLAS_COLLECTION_NAME);

const vectorStore = new MongoDBAtlasVectorSearch(embeddings, {
  collection: collection,
  indexName: "vector_index",
  textKey: "text",
  embeddingKey: "embedding",
});
```




  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/community
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/community
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/community
  ```


```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";

const vectorStore = await PGVectorStore.initialize(embeddings, {})
```




  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/pinecone
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/pinecone
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/pinecone
  ```


```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone as PineconeClient } from "@pinecone-database/pinecone";

const pinecone = new PineconeClient({
  apiKey: process.env.PINECONE_API_KEY,
});
const pineconeIndex = pinecone.Index("your-index-name");

const vectorStore = new PineconeStore(embeddings, {
  pineconeIndex,
  maxConcurrency: 5,
});
```




  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/qdrant
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/qdrant
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/qdrant
  ```


```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { QdrantVectorStore } from "@langchain/qdrant";

const vectorStore = await QdrantVectorStore.fromExistingCollection(embeddings, {
  url: process.env.QDRANT_URL,
  collectionName: "langchainjs-testing",
});
```




  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/redis
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/redis
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/redis
  ```


```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { RedisVectorStore } from "@langchain/redis";

const vectorStore = new RedisVectorStore(embeddings, {
  redisClient: client,
  indexName: "langchainjs-testing",
});
```
````

## 1. Indexing

**This section is an abbreviated version of the content in the [semantic search tutorial](/oss/javascript/langchain/knowledge-base).**

If your data is already indexed and available for search (i.e., you have a function to execute a search), or if you're comfortable with [document loaders](/oss/javascript/langchain/retrieval#document_loaders), [embeddings](/oss/javascript/langchain/retrieval#embedding_models), and [vector stores](/oss/javascript/langchain/retrieval#vectorstores), feel free to skip to the next section on [retrieval and generation](/oss/javascript/langchain/rag#2-retrieval-and-generation).

Indexing commonly works as follows:

1. **Load**: First we need to load our data. This is done with [Document Loaders](/oss/javascript/langchain/retrieval#document_loaders).
2. **Split**: [Text splitters](/oss/javascript/langchain/retrieval#text_splitters) break large `Documents` into smaller chunks. This is useful both for indexing data and passing it into a model, as large chunks are harder to search over and won't fit in a model's finite context window.
3. **Store**: We need somewhere to store and index our splits, so that they can be searched over later. This is often done using a [VectorStore](/oss/javascript/langchain/retrieval#vectorstores) and [Embeddings](/oss/javascript/langchain/retrieval#embedding_models) model.

### Loading documents

We need to first load the blog post contents. We can use [DocumentLoaders](/oss/javascript/langchain/retrieval#document_loaders) for this, which are objects that load in data from a source and return a list of [Document](https://reference.langchain.com/javascript/langchain-core/documents/Document) objects.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import "cheerio";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";

const pTagSelector = "p";
const cheerioLoader = new CheerioWebBaseLoader(
  "https://lilianweng.github.io/posts/2023-06-23-agent/",
  {
    selector: pTagSelector,
  }
);

const docs = await cheerioLoader.load();

console.assert(docs.length === 1);
console.log(`Total characters: ${docs[0].pageContent.length}`);
```

```
Total characters: 22360
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
console.log(docs[0].pageContent.slice(0, 500));
```

```
Building agents with LLM (large language model) as its core controller is...
```

**Go deeper**

`DocumentLoader`: Object that loads data from a source as list of `Documents`.

- [Integrations](/oss/javascript/integrations/document_loaders/): 160+ integrations to choose from.
- [`BaseLoader`](https://reference.langchain.com/javascript/classes/_langchain_core.document_loaders_base.BaseDocumentLoader.html): API reference for the base interface.

### Splitting documents

Our loaded document is over 42k characters which is too long to fit into the context window of many models. Even for those models that could fit the full post in their context window, models can struggle to find information in very long inputs.

To handle this we'll split the [`Document`](https://reference.langchain.com/javascript/langchain-core/documents/Document) into chunks for embedding and vector storage. This should help us retrieve only the most relevant parts of the blog post at run time.

As in the [semantic search tutorial](/oss/javascript/langchain/knowledge-base), we use a `RecursiveCharacterTextSplitter`, which will recursively split the document using common separators like new lines until each chunk is the appropriate size. This is the recommended text splitter for generic text use cases.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});
const allSplits = await splitter.splitDocuments(docs);
console.log(`Split blog post into ${allSplits.length} sub-documents.`);
```

```
Split blog post into 29 sub-documents.
```

### Storing documents

Now we need to index our 66 text chunks so that we can search over them at runtime. Following the [semantic search tutorial](/oss/javascript/langchain/knowledge-base), our approach is to [embed](/oss/javascript/langchain/retrieval#embedding_models/) the contents of each document split and insert these embeddings into a [vector store](/oss/javascript/langchain/retrieval#vectorstores/). Given an input query, we can then use vector search to retrieve relevant documents.

We can embed and store all of our document splits in a single command using the vector store and embeddings model selected at the [start of the tutorial](/oss/javascript/langchain/rag#components).

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
await vectorStore.addDocuments(allSplits);
```

**Go deeper**

`Embeddings`: Wrapper around a text embedding model, used for converting text to embeddings.

- [Integrations](/oss/javascript/integrations/text_embedding/): 30+ integrations to choose from.
- [Interface](https://reference.langchain.com/javascript/langchain-core/embeddings/Embeddings): API reference for the base interface.

`VectorStore`: Wrapper around a vector database, used for storing and querying embeddings.

- [Integrations](/oss/javascript/integrations/vectorstores/): 40+ integrations to choose from.
- [Interface](https://python.langchain.com/api_reference/core/vectorstores/langchain_core.vectorstores.base.VectorStore.html): API reference for the base interface.

This completes the **Indexing** portion of the pipeline. At this point we have a query-able vector store containing the chunked contents of our blog post. Given a user question, we should ideally be able to return the snippets of the blog post that answer the question.

## 2. Retrieval and generation

RAG applications commonly work as follows:

1. **Retrieve**: Given a user input, relevant splits are retrieved from storage using a [Retriever](/oss/javascript/langchain/retrieval#retrievers).
2. **Generate**: A [model](/oss/javascript/langchain/models) produces an answer using a prompt that includes both the question with the retrieved data

Now let's write the actual application logic. We want to create a simple application that takes a user question, searches for documents relevant to that question, passes the retrieved documents and initial question to a model, and returns an answer.

We will demonstrate:

1. A RAG [agent](#rag-agents) that executes searches with a simple tool. This is a good general-purpose implementation.
2. A two-step RAG [chain](#rag-chains) that uses just a single LLM call per query. This is a fast and effective method for simple queries.

### RAG agents

One formulation of a RAG application is as a simple [agent](/oss/javascript/langchain/agents) with a tool that retrieves information. We can assemble a minimal RAG agent by implementing a [tool](/oss/javascript/langchain/tools) that wraps our vector store:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import * as z from "zod";
import { tool } from "@langchain/core/tools";

const retrieveSchema = z.object({ query: z.string() });

const retrieve = tool(
  async ({ query }) => {
    const retrievedDocs = await vectorStore.similaritySearch(query, 2);
    const serialized = retrievedDocs
      .map(
        (doc) => `Source: ${doc.metadata.source}\nContent: ${doc.pageContent}`
      )
      .join("\n");
    return [serialized, retrievedDocs];
  },
  {
    name: "retrieve",
    description: "Retrieve information related to a query.",
    schema: retrieveSchema,
    responseFormat: "content_and_artifact",
  }
);
```

Here we specify the `responseFormat` to `content_and_artifact` to confiugre the tool to attach raw documents as [artifacts](/oss/javascript/langchain/messages#param-artifact) to each [ToolMessage](/oss/javascript/langchain/messages#tool-message). This will let us access document metadata in our application, separate from the stringified representation that is sent to the model.

Given our tool, we can construct the agent:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent } from "langchain";

const tools = [retrieve];
const systemPrompt = new SystemMessage(
    "You have access to a tool that retrieves context from a blog post. " +
    "Use the tool to help answer user queries."
)

const agent = createAgent({ model: "gpt-5", tools, systemPrompt });
```

Let's test this out. We construct a question that would typically require an iterative sequence of retrieval steps to answer:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
let inputMessage = `What is the standard method for Task Decomposition?
Once you get the answer, look up common extensions of that method.`;

let agentInputs = { messages: [{ role: "user", content: inputMessage }] };

const stream = await agent.stream(agentInputs, {
  streamMode: "values",
});
for await (const step of stream) {
  const lastMessage = step.messages[step.messages.length - 1];
  console.log(`[${lastMessage.role}]: ${lastMessage.content}`);
  console.log("-----\n");
}
```

```
[human]: What is the standard method for Task Decomposition?
Once you get the answer, look up common extensions of that method.
-----

[ai]:
Tools:
- retrieve({"query":"standard method for Task Decomposition"})
-----

[tool]: Source: https://lilianweng.github.io/posts/2023-06-23-agent/
Content: hard tasks into smaller and simpler steps...
Source: https://lilianweng.github.io/posts/2023-06-23-agent/
Content: System message:Think step by step and reason yourself...
-----

[ai]:
Tools:
- retrieve({"query":"common extensions of Task Decomposition method"})
-----

[tool]: Source: https://lilianweng.github.io/posts/2023-06-23-agent/
Content: hard tasks into smaller and simpler steps...
Source: https://lilianweng.github.io/posts/2023-06-23-agent/
Content: be provided by other developers (as in Plugins) or self-defined...
-----

[ai]: ### Standard Method for Task Decomposition

The standard method for task decomposition involves...
-----
```

Note that the agent:

1. Generates a query to search for a standard method for task decomposition;
2. Receiving the answer, generates a second query to search for common extensions of it;
3. Having received all necessary context, answers the question.

We can see the full sequence of steps, along with latency and other metadata, in the [LangSmith trace](https://smith.langchain.com/public/7b42d478-33d2-4631-90a4-7cb731681e88/r).

You can add a deeper level of control and customization using the [LangGraph](/oss/javascript/langgraph/overview) framework directly— for example, you can add steps to grade document relevance and rewrite search queries. Check out LangGraph's [Agentic RAG tutorial](/oss/javascript/langgraph/agentic-rag) for more advanced formulations.

### RAG chains

In the above [agentic RAG](#rag-agents) formulation we allow the LLM to use its discretion in generating a [tool call](/oss/javascript/langchain/models#tool-calling) to help answer user queries. This is a good general-purpose solution, but comes with some trade-offs:

| ✅ Benefits                                                                                                                                                 | ⚠️ Drawbacks                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Search only when needed** – The LLM can handle greetings, follow-ups, and simple queries without triggering unnecessary searches.                        | **Two inference calls** – When a search is performed, it requires one call to generate the query and another to produce the final response. |
| **Contextual search queries** – By treating search as a tool with a `query` input, the LLM crafts its own queries that incorporate conversational context. | **Reduced control** – The LLM may skip searches when they are actually needed, or issue extra searches when unnecessary.                    |
| **Multiple searches allowed** – The LLM can execute several searches in support of a single user query.                                                    |                                                                                                                                             |

Another common approach is a two-step chain, in which we always run a search (potentially using the raw user query) and incorporate the result as context for a single LLM query. This results in a single inference call per query, buying reduced latency at the expense of flexibility.

In this approach we no longer call the model in a loop, but instead make a single pass.

We can implement this chain by removing tools from the agent and instead incorporating the retrieval step into a custom prompt:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, dynamicSystemPromptMiddleware } from "langchain";
import { SystemMessage } from "@langchain/core/messages";

const agent = createAgent({
  model,
  tools: [],
  middleware: [
    dynamicSystemPromptMiddleware(async (state) => {
        const lastQuery = state.messages[state.messages.length - 1].content;

        const retrievedDocs = await vectorStore.similaritySearch(lastQuery, 2);

        const docsContent = retrievedDocs
        .map((doc) => doc.pageContent)
        .join("\n\n");

        // Build system message
        const systemMessage = new SystemMessage(
        `You are a helpful assistant. Use the following context in your response:\n\n${docsContent}`
        );

        // Return system + existing messages
        return [systemMessage, ...state.messages];
    })
  ]
});
```

Let's try this out:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
let inputMessage = `What is Task Decomposition?`;

let chainInputs = { messages: [{ role: "user", content: inputMessage }] };

const stream = await agent.stream(chainInputs, {
  streamMode: "values",
})
for await (const step of stream) {
  const lastMessage = step.messages[step.messages.length - 1];
  prettyPrint(lastMessage);
  console.log("-----\n");
}
```

In the [LangSmith trace](https://smith.langchain.com/public/0322904b-bc4c-4433-a568-54c6b31bbef4/r/9ef1c23e-380e-46bf-94b3-d8bb33df440c) we can see the retrieved context incorporated into the model prompt.

This is a fast and effective method for simple queries in constrained settings, when we typically do want to run user queries through semantic search to pull additional context.

The above [RAG chain](#rag-chains) incorporates retrieved context into a single system message for that run.

As in the [agentic RAG](#rag-agents) formulation, we sometimes want to include raw source documents in the application state to have access to document metadata. We can do this for the two-step chain case by:

1. Adding a key to the state to store the retrieved documents
2. Adding a new node via a [pre-model hook](/oss/javascript/langchain/agents#pre-model-hook) to populate that key (as well as inject the context).

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createMiddleware, Document, createAgent } from "langchain";
import { StateSchema, MessagesValue } from "@langchain/langgraph";
import { z } from "zod";

const CustomState = new StateSchema({
  messages: MessagesValue,
  context: z.array(z.custom()),
});

const retrieveDocumentsMiddleware = createMiddleware({
  stateSchema: CustomState,
  beforeModel: async (state) => {
    const lastMessage = state.messages[state.messages.length - 1].content;
    const retrievedDocs = await vectorStore.similaritySearch(lastMessage, 2);

    const docsContent = retrievedDocs
      .map((doc) => doc.pageContent)
      .join("\n\n");

    const augmentedMessageContent = [
        ...lastMessage.content,
        { type: "text", text: `Use the following context to answer the query:\n\n${docsContent}` }
    ]

    // Below we augment each input message with context, but we could also
    // modify just the system message, as before.
    return {
      messages: [{
        ...lastMessage,
        content: augmentedMessageContent,
      }]
      context: retrievedDocs,
    }
  },
});

const agent = createAgent({
  model,
  tools: [],
  middleware: [retrieveDocumentsMiddleware],
});
```

## Next steps

Now that we've implemented a simple RAG application via [`createAgent`](https://reference.langchain.com/javascript/langchain/index/createAgent), we can easily incorporate new features and go deeper:

- [Stream](/oss/javascript/langchain/streaming) tokens and other information for responsive user experiences
- Add [conversational memory](/oss/javascript/langchain/short-term-memory) to support multi-turn interactions
- Add [long-term memory](/oss/javascript/langchain/long-term-memory) to support memory across conversational threads
- Add [structured responses](/oss/javascript/langchain/structured-output)
- Deploy your application with [LangSmith Deployment](/langsmith/deployments)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/rag.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
