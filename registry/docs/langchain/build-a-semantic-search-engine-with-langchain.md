# Build a semantic search engine with LangChain

Source: https://docs.langchain.com/oss/javascript/langchain/knowledge-base

## Overview

This tutorial will familiarize you with LangChain's [document loader](/oss/javascript/integrations/document_loaders), [embedding](/oss/javascript/integrations/embeddings), and [vector store](/oss/javascript/integrations/vectorstores) abstractions. These abstractions are designed to support retrieval of data--  from (vector) databases and other sources -- for integration with LLM workflows. They are important for applications that fetch data to be reasoned over as part of model inference, as in the case of retrieval-augmented generation, or [RAG](/oss/javascript/langchain/retrieval).

Here we will build a search engine over a PDF document. This will allow us to retrieve passages in the PDF that are similar to an input query. The guide also includes a minimal RAG implementation on top of the search engine.

### Concepts

This guide focuses on retrieval of text data. We will cover the following concepts:

- [Documents and document loaders](/oss/javascript/integrations/document_loaders);
- [Text splitters](/oss/javascript/integrations/splitters);
- [Embeddings](/oss/javascript/integrations/embeddings);
- [Vector stores](/oss/javascript/integrations/vectorstores) and [retrievers](/oss/javascript/integrations/retrievers).

## Setup

### Installation

This guide requires `@langchain/community` and `pdf-parse`:

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm i @langchain/community pdf-parse
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add @langchain/community pdf-parse
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add @langchain/community pdf-parse
```

For more details, see our [Installation guide](/oss/javascript/langchain/install).

### LangSmith

Many of the applications you build with LangChain will contain multiple steps with multiple invocations of LLM calls.
As these applications get more and more complex, it becomes crucial to be able to inspect what exactly is going on inside your chain or agent.
The best way to do this is with [LangSmith](https://smith.langchain.com).

After you sign up at the link above, make sure to set your environment variables to start logging traces:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGSMITH_TRACING="true"
export LANGSMITH_API_KEY="..."
```

## 1. Documents and document loaders

LangChain implements a [Document](https://reference.langchain.com/javascript/langchain-core/documents/Document) abstraction, which is intended to represent a unit of text and associated metadata. It has three attributes:

- `pageContent`: a string representing the content;
- `metadata`: a dict containing arbitrary metadata;
- `id`: (optional) a string identifier for the document.

The `metadata` attribute can capture information about the source of the document, its relationship to other documents, and other information. Note that an individual [`Document`](https://reference.langchain.com/javascript/langchain-core/documents/Document) object often represents a chunk of a larger document.

We can generate sample documents when desired:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Document } from "@langchain/core/documents";

const documents = [
  new Document({
    pageContent:
      "Dogs are great companions, known for their loyalty and friendliness.",
    metadata: { source: "mammal-pets-doc" },
  }),
  new Document({
    pageContent: "Cats are independent pets that often enjoy their own space.",
    metadata: { source: "mammal-pets-doc" },
  }),
];
```

However, the LangChain ecosystem implements [document loaders](/oss/javascript/integrations/document_loaders) that integrate with hundreds of common sources. This makes it easy to incorporate data from these sources into your AI application.

### Loading documents

Let's load a PDF into a sequence of [`Document`](https://reference.langchain.com/javascript/langchain-core/documents/Document) objects. [Here is a sample PDF](https://github.com/langchain-ai/langchain/blob/v0.3/docs/docs/example_data/nke-10k-2023.pdf) -- a 10-k filing for Nike from 2023. We can consult the LangChain documentation for [available PDF document loaders](/oss/javascript/integrations/document_loaders/#pdfs).

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

const loader = new PDFLoader("../../data/nke-10k-2023.pdf");

const docs = await loader.load();
console.log(docs.length);
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
107
```

`PDFLoader` loads one [`Document`](https://reference.langchain.com/javascript/langchain-core/documents/Document) object per PDF page. For each, we can easily access:

- The string content of the page;
- Metadata containing the file name and page number.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
console.log(docs[0].pageContent.slice(0, 200));
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Table of Contents
UNITED STATES
SECURITIES AND EXCHANGE COMMISSION
Washington, D.C. 20549
FORM 10-K
(Mark One)
☑ ANNUAL REPORT PURSUANT TO SECTION 13 OR 15(D) OF THE SECURITIES EXCHANGE ACT OF 1934
FO
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
console.log(docs[0].metadata);
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  source: '../../data/nke-10k-2023.pdf',
  pdf: {
    version: '1.10.100',
    info: {
      PDFFormatVersion: '1.4',
      IsAcroFormPresent: false,
      IsXFAPresent: false,
      Title: '0000320187-23-000039',
      Author: 'EDGAR Online, a division of Donnelley Financial Solutions',
      Subject: 'Form 10-K filed on 2023-07-20 for the period ending 2023-05-31',
      Keywords: '0000320187-23-000039; ; 10-K',
      Creator: 'EDGAR Filing HTML Converter',
      Producer: 'EDGRpdf Service w/ EO.Pdf 22.0.40.0',
      CreationDate: "D:20230720162200-04'00'",
      ModDate: "D:20230720162208-04'00'"
    },
    metadata: null,
    totalPages: 107
  },
  loc: { pageNumber: 1 }
}
```

### Splitting

For both information retrieval and downstream question-answering purposes, a page may be too coarse a representation. Our goal in the end will be to retrieve [`Document`](https://reference.langchain.com/javascript/langchain-core/documents/Document) objects that answer an input query, and further splitting our PDF will help ensure that the meanings of relevant portions of the document are not "washed out" by surrounding text.

We can use [text splitters](/oss/javascript/integrations/splitters) for this purpose. Here we will use a simple text splitter that partitions based on characters. We will split our documents into chunks of 1000 characters
with 200 characters of overlap between chunks. The overlap helps
mitigate the possibility of separating a statement from important
context related to it. We use the
`RecursiveCharacterTextSplitter`,
which will recursively split the document using common separators like
new lines until each chunk is the appropriate size. This is the
recommended text splitter for generic text use cases.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});

const allSplits = await textSplitter.splitDocuments(docs);

console.log(allSplits.length);
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
514
```

## 2. Embeddings

Vector search is a common way to store and search over unstructured data (such as unstructured text). The idea is to store numeric vectors that are associated with the text. Given a query, we can [embed](/oss/javascript/integrations/embeddings) it as a vector of the same dimension and use vector similarity metrics (such as cosine similarity) to identify related text.

LangChain supports embeddings from [dozens of providers](/oss/javascript/integrations/embeddings/). These models specify how text should be converted into a numeric vector. Let's select a model:

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

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const vector1 = await embeddings.embedQuery(allSplits[0].pageContent);
const vector2 = await embeddings.embedQuery(allSplits[1].pageContent);

assert vector1.length === vector2.length;
console.log(`Generated vectors of length ${vector1.length}\n`);
console.log(vector1.slice(0, 10));
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Generated vectors of length 1536

[-0.008586574345827103, -0.03341241180896759, -0.008936782367527485, -0.0036674530711025, 0.010564599186182022, 0.009598285891115665, -0.028587326407432556, -0.015824200585484505, 0.0030416189692914486, -0.012899317778646946]
```

Armed with a model for generating text embeddings, we can next store them in a special data structure that supports efficient similarity search.

## 3. Vector stores

LangChain [VectorStore](https://reference.langchain.com/javascript/langchain-core/vectorstores/VectorStore) objects contain methods for adding text and [`Document`](https://reference.langchain.com/javascript/langchain-core/documents/Document) objects to the store, and querying them using various similarity metrics. They are often initialized with [embedding](/oss/javascript/integrations/embeddings) models, which determine how text data is translated to numeric vectors.

LangChain includes a suite of [integrations](/oss/javascript/integrations/vectorstores) with different vector store technologies. Some vector stores are hosted by a provider (e.g., various cloud providers) and require specific credentials to use; some (such as [Postgres](/oss/javascript/integrations/vectorstores/pgvector)) run in separate infrastructure that can be run locally or via a third-party; others can run in-memory for lightweight workloads. Let's select a vector store:

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

Having instantiated our vector store, we can now index the documents.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
await vectorStore.addDocuments(allSplits);
```

Note that most vector store implementations will allow you to connect to an existing vector store--  e.g., by providing a client, index name, or other information. See the documentation for a specific [integration](/oss/javascript/integrations/vectorstores) for more detail.

Once we've instantiated a [`VectorStore`](https://reference.langchain.com/javascript/langchain-core/vectorstores/VectorStore) that contains documents, we can query it. [VectorStore](https://reference.langchain.com/javascript/langchain-core/vectorstores/VectorStore) includes methods for querying:

- Synchronously and asynchronously;
- By string query and by vector;
- With and without returning similarity scores;
- By similarity and [maximum marginal relevance](https://reference.langchain.com/javascript/classes/_langchain_core.vectorstores.VectorStore.html#maxMarginalRelevanceSearch) (to balance similarity with query to diversity in retrieved results).

The methods will generally include a list of [Document](https://reference.langchain.com/javascript/langchain-core/documents/Document) objects in their outputs.

**Usage**

Embeddings typically represent text as a "dense" vector such that texts with similar meanings are geometrically close. This lets us retrieve relevant information just by passing in a question, without knowledge of any specific key-terms used in the document.

Return documents based on similarity to a string query:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const results1 = await vectorStore.similaritySearch(
  "When was Nike incorporated?"
);

console.log(results1[0]);
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Document {
    pageContent: 'direct to consumer operations sell products...',
    metadata: {'page': 4, 'source': '../example_data/nke-10k-2023.pdf', 'start_index': 3125}
}
```

Return scores:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const results2 = await vectorStore.similaritySearchWithScore(
  "What was Nike's revenue in 2023?"
);

console.log(results2[0]);
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Score: 0.23699893057346344

Document {
    pageContent: 'Table of Contents...',
    metadata: {'page': 35, 'source': '../example_data/nke-10k-2023.pdf', 'start_index': 0}
}
```

Return documents based on similarity to an embedded query:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const embedding = await embeddings.embedQuery(
  "How were Nike's margins impacted in 2023?"
);

const results3 = await vectorStore.similaritySearchVectorWithScore(
  embedding,
  1
);

console.log(results3[0]);
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Document {
    pageContent: 'FISCAL 2023 COMPARED TO FISCAL 2022...',
    metadata: {
        'page': 36,
        'source': '../example_data/nke-10k-2023.pdf',
        'start_index': 0
    }
}
```

Learn more:

- [API Reference](https://reference.langchain.com/javascript/langchain-core/vectorstores/VectorStore)
- [Integration-specific docs](/oss/javascript/integrations/vectorstores)

## 4. Retrievers

LangChain [`VectorStore`](https://reference.langchain.com/javascript/langchain-core/vectorstores/VectorStore) objects do not subclass [Runnable](https://reference.langchain.com/javascript/langchain-core/runnables/Runnable). LangChain [Retrievers](https://reference.langchain.com/javascript/interfaces/_langchain_core.retrievers.BaseRetriever.html) are Runnables, so they implement a standard set of methods (e.g., synchronous and asynchronous `invoke` and `batch` operations). Although we can construct retrievers from vector stores, retrievers can interface with non-vector store sources of data, as well (such as external APIs).

Vectorstores implement an `as_retriever` method that will generate a Retriever, specifically a [`VectorStoreRetriever`](https://python.langchain.com/api_reference/core/vectorstores/langchain_core.vectorstores.base.VectorStoreRetriever.html). These retrievers include specific `search_type` and `search_kwargs` attributes that identify what methods of the underlying vector store to call, and how to parameterize them. For instance, we can replicate the above with the following:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const retriever = vectorStore.asRetriever({
  searchType: "mmr",
  searchKwargs: {
    fetchK: 1,
  },
});

await retriever.batch([
  "When was Nike incorporated?",
  "What was Nike's revenue in 2023?",
]);
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
[
    [Document {
        metadata: {'page': 4, 'source': '../example_data/nke-10k-2023.pdf', 'start_index': 3125},
        pageContent: 'direct to consumer operations sell products...',
    }],
    [Document {
        metadata: {'page': 3, 'source': '../example_data/nke-10k-2023.pdf', 'start_index': 0},
        pageContent: 'Table of Contents...',
    }],
]
```

Retrievers can easily be incorporated into more complex applications, such as [retrieval-augmented generation (RAG)](/oss/javascript/langchain/retrieval) applications that combine a given question with retrieved context into a prompt for a LLM. To learn more about building such an application, check out the [RAG tutorial](/oss/javascript/langchain/rag) tutorial.

## Next steps

You've now seen how to build a semantic search engine over a PDF document.

For more on document loaders:

- [Overview](/oss/javascript/langchain/retrieval)
- [Available integrations](/oss/javascript/integrations/document_loaders/)

For more on embeddings:

- [Overview](/oss/javascript/langchain/retrieval)
- [Available integrations](/oss/javascript/integrations/embeddings/)

For more on vector stores:

- [Overview](/oss/javascript/langchain/retrieval)
- [Available integrations](/oss/javascript/integrations/vectorstores/)

For more on RAG, see:

- [Build a Retrieval Augmented Generation (RAG) App](/oss/javascript/langchain/rag/)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/knowledge-base.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
