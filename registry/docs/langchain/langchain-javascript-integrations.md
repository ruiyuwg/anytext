# LangChain JavaScript integrations

Source: https://docs.langchain.com/oss/javascript/integrations/providers/overview

Integrate with providers using LangChain JavaScript/TypeScript.

LangChain integrates with a wide variety of chat & embedding models, tools & toolkits, document loaders, vector stores, and more.

A **provider** is a third-party service or platform that LangChain integrates with to access AI capabilities like chat models, embeddings, and vector stores. These providers have standalone `langchain-provider` packages for improved versioning, dependency management, and testing.

## Popular providers

| Provider                                                                         | Package                                                                                | Downloads                                                             | Latest                                                         |
| :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- | :------------------------------------------------------------- |
| [Anthropic](/oss/javascript/integrations/providers/anthropic)                    | [`@langchain/anthropic`](https://www.npmjs.com/package/@langchain/anthropic)           | ![Downloads](https://img.shields.io/npm/dm/@langchain/anthropic)      | ![NPM](https://img.shields.io/npm/v/@langchain/anthropic)      |
| [Azure CosmosDB](/oss/javascript/integrations/vectorstores/azure_cosmosdb_nosql) | [`@langchain/azure-cosmosdb`](https://www.npmjs.com/package/@langchain/azure-cosmosdb) | ![Downloads](https://img.shields.io/npm/dm/@langchain/azure-cosmosdb) | ![NPM](https://img.shields.io/npm/v/@langchain/azure-cosmosdb) |
| [Cerebras](/oss/javascript/integrations/chat/cerebras)                           | [`@langchain/cerebras`](https://www.npmjs.com/package/@langchain/cerebras)             | ![Downloads](https://img.shields.io/npm/dm/@langchain/cerebras)       | ![NPM](https://img.shields.io/npm/v/@langchain/cerebras)       |
| Cloudflare                                                                       | [`@langchain/cloudflare`](https://www.npmjs.com/package/@langchain/cloudflare)         | ![Downloads](https://img.shields.io/npm/dm/@langchain/cloudflare)     | ![NPM](https://img.shields.io/npm/v/@langchain/cloudflare)     |
| [Cohere](/oss/javascript/integrations/chat/cohere)                               | [`@langchain/cohere`](https://www.npmjs.com/package/@langchain/cohere)                 | ![Downloads](https://img.shields.io/npm/dm/@langchain/cohere)         | ![NPM](https://img.shields.io/npm/v/@langchain/cohere)         |
| [Exa](/oss/javascript/integrations/retrievers/exa)                               | [`langchain-exa`](https://www.npmjs.com/package/@langchain/exa)                        | ![Downloads](https://img.shields.io/npm/dm/@langchain/exa)            | ![NPM](https://img.shields.io/npm/v/@langchain/exa)            |
| [Google](/oss/javascript/integrations/providers/google)                          | [`@langchain/google`](https://www.npmjs.com/package/@langchain/google)                 | ![Downloads](https://img.shields.io/npm/dm/@langchain/google)         | ![NPM](https://img.shields.io/npm/v/@langchain/google)         |
| [Groq](/oss/javascript/integrations/chat/groq)                                   | [`@langchain/groq`](https://www.npmjs.com/package/@langchain/groq)                     | ![Downloads](https://img.shields.io/npm/dm/@langchain/groq)           | ![NPM](https://img.shields.io/npm/v/@langchain/groq)           |
| [MistralAI](/oss/javascript/integrations/chat/mistral)                           | [`@langchain/mistralai`](https://www.npmjs.com/package/@langchain/mistralai)           | ![Downloads](https://img.shields.io/npm/dm/@langchain/mistralai)      | ![NPM](https://img.shields.io/npm/v/@langchain/mistralai)      |
| [MongoDB](/oss/javascript/integrations/vectorstores/mongodb_atlas)               | [`@langchain/mongodb`](https://www.npmjs.com/package/@langchain/mongodb)               | ![Downloads](https://img.shields.io/npm/dm/@langchain/mongodb)        | ![NPM](https://img.shields.io/npm/v/@langchain/mongodb)        |
| [Nomic](/oss/javascript/integrations/text_embedding/nomic)                       | [`@langchain/nomic`](https://www.npmjs.com/package/@langchain/nomic)                   | ![Downloads](https://img.shields.io/npm/dm/@langchain/nomic)          | ![NPM](https://img.shields.io/npm/v/@langchain/nomic)          |
| [OpenAI](/oss/javascript/integrations/providers/openai)                          | [`@langchain/openai`](https://www.npmjs.com/package/@langchain/openai)                 | ![Downloads](https://img.shields.io/npm/dm/@langchain/openai)         | ![NPM](https://img.shields.io/npm/v/@langchain/openai)         |
| [Pinecone](/oss/javascript/integrations/vectorstores/pinecone)                   | [`@langchain/pinecone`](https://www.npmjs.com/package/@langchain/pinecone)             | ![Downloads](https://img.shields.io/npm/dm/@langchain/pinecone)       | ![NPM](https://img.shields.io/npm/v/@langchain/pinecone)       |
| [Qdrant](/oss/javascript/integrations/vectorstores/qdrant)                       | [`@langchain/qdrant`](https://www.npmjs.com/package/@langchain/qdrant)                 | ![Downloads](https://img.shields.io/npm/dm/@langchain/qdrant)         | ![NPM](https://img.shields.io/npm/v/@langchain/qdrant)         |
| [Tavily](/oss/javascript/integrations/retrievers/tavily)                         | [`@langchain/tavily`](https://www.npmjs.com/package/@langchain/tavily)                 | ![Downloads](https://img.shields.io/npm/dm/@langchain/tavily)         | ![NPM](https://img.shields.io/npm/v/@langchain/tavily)         |
| [Weaviate](/oss/javascript/integrations/vectorstores/weaviate)                   | [`@langchain/weaviate`](https://www.npmjs.com/package/@langchain/weaviate)             | ![Downloads](https://img.shields.io/npm/dm/@langchain/weaviate)       | ![NPM](https://img.shields.io/npm/v/@langchain/weaviate)       |
| [xAI](/oss/javascript/integrations/chat/xai)                                     | [`@langchain/xai`](https://www.npmjs.com/package/@langchain/xai)                       | ![Downloads](https://img.shields.io/npm/dm/@langchain/xai)            | ![NPM](https://img.shields.io/npm/v/@langchain/xai)            |
| [Yandex](/oss/javascript/integrations/chat/yandex)                               | [`@langchain/yandex`](https://www.npmjs.com/package/@langchain/yandex)                 | ![Downloads](https://img.shields.io/npm/dm/@langchain/yandex)         | ![NPM](https://img.shields.io/npm/v/@langchain/yandex)         |

## All providers

[See all providers](/oss/javascript/integrations/providers/all_providers) or search for a provider using the search field.

If you'd like to contribute an integration, see [Contributing integrations](/oss/javascript/contributing#add-a-new-integration).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/javascript/integrations/providers/overview.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Retriever integrations

Source: https://docs.langchain.com/oss/javascript/integrations/retrievers/index

Integrate with retrievers using LangChain JavaScript.

A [retriever](/oss/javascript/langchain/retrieval) is an interface that returns documents given an unstructured query.
It is more general than a vector store.
A retriever does not need to be able to store documents, only to return (or retrieve) them.

Retrievers accept a string query as input and return a list of `Document` objects.

For specifics on how to use retrievers, see the [relevant how-to guides here](/oss/javascript/langchain/retrieval).

Note that all [vector stores](/oss/javascript/integrations/vectorstores) can be [cast to retrievers](/oss/javascript/langchain/retrieval).
Refer to the vector store [integration docs](/oss/javascript/integrations/vectorstores/) for available vector store retrievers.

## All retrievers

If you'd like to contribute an integration, see [Contributing integrations](/oss/javascript/contributing#add-a-new-integration).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/javascript/integrations/retrievers/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
