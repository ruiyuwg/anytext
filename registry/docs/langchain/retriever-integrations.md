# Retriever integrations

Source: https://docs.langchain.com/oss/python/integrations/retrievers/index

Integrate with retrievers using LangChain Python.

A [retriever](/oss/python/langchain/retrieval#building-blocks) is an interface that returns documents given an unstructured query.
It is more general than a vector store.
A retriever does not need to be able to store documents, only to return (or retrieve) them.
Retrievers can be created from vector stores, but are also broad enough to include [Wikipedia search](/oss/python/integrations/retrievers/wikipedia/) and [Amazon Kendra](/oss/python/integrations/retrievers/amazon_kendra_retriever/).

Retrievers accept a string query as input and return a list of [`Document`](https://reference.langchain.com/python/langchain-core/documents/base/Document) objects as output.

Note that all [vector stores](/oss/python/integrations/vectorstores) can be cast to retrievers. Refer to the vector store [integration docs](/oss/python/integrations/vectorstores/) for available vector stores.
This page lists custom retrievers, implemented via subclassing BaseRetriever.

## Bring-your-own documents

The below retrievers allow you to index and search a custom corpus of documents.

| Retriever                                                                                | Self-host | Cloud offering | Package                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------- | --------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`AmazonKnowledgeBasesRetriever`](/oss/python/integrations/retrievers/bedrock)           | ❌         | ✅              | [`langchain-aws`](https://python.langchain.com/api_reference/aws/retrievers/langchain_aws.retrievers.bedrock.AmazonKnowledgeBasesRetriever.html)                                      |
| [`AzureAISearchRetriever`](/oss/python/integrations/retrievers/azure_ai_search)          | ❌         | ✅              | [`langchain-community`](https://python.langchain.com/api_reference/community/retrievers/langchain_community.retrievers.azure_ai_search.AzureAISearchRetriever.html)                   |
| [`ElasticsearchRetriever`](/oss/python/integrations/retrievers/elasticsearch_retriever)  | ✅         | ✅              | [`langchain-elasticsearch`](https://python.langchain.com/api_reference/elasticsearch/retrievers/langchain_elasticsearch.retrievers.ElasticsearchRetriever.html)                       |
| [`NVIDIARAGRetriever`](/oss/python/integrations/retrievers/nvidia)                       | ✅         | ❌              | [`langchain-nvidia-ai-endpoints`](https://python.langchain.com/api_reference/nvidia_ai_endpoints/retrievers/langchain_nvidia_ai_endpoints.retrievers.NVIDIARAGRetriever.html)         |
| [`VertexAISearchRetriever`](/oss/python/integrations/retrievers/google_vertex_ai_search) | ❌         | ✅              | [`langchain-google-community`](https://python.langchain.com/api_reference/google_community/vertex_ai_search/langchain_google_community.vertex_ai_search.VertexAISearchRetriever.html) |

## External index

The below retrievers will search over an external index (e.g., constructed from Internet data or similar).

| Retriever                                                                | Source                                                | Package                                                                                                                                                                 |
| ------------------------------------------------------------------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`ArxivRetriever`](/oss/python/integrations/retrievers/arxiv)            | Scholarly articles on [arxiv.org](https://arxiv.org/) | [`langchain-community`](https://python.langchain.com/api_reference/community/retrievers/langchain_community.retrievers.arxiv.ArxivRetriever.html)                       |
| [`TavilySearchAPIRetriever`](/oss/python/integrations/retrievers/tavily) | Internet search                                       | [`langchain-community`](https://python.langchain.com/api_reference/community/retrievers/langchain_community.retrievers.tavily_search_api.TavilySearchAPIRetriever.html) |
| [`WikipediaRetriever`](/oss/python/integrations/retrievers/wikipedia)    | [Wikipedia](https://www.wikipedia.org/) articles      | [`langchain-community`](https://python.langchain.com/api_reference/community/retrievers/langchain_community.retrievers.wikipedia.WikipediaRetriever.html)               |

## All retrievers

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/python/integrations/retrievers/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Sandbox integrations

Source: https://docs.langchain.com/oss/python/integrations/sandboxes/index

Integrate with sandbox providers using LangChain Python.

Sandboxes provide isolated execution environments for running agent-generated code safely. Learn more about [sandboxes](/oss/python/deepagents/sandboxes).

| Provider                                              | Package                                                            |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [Daytona](/oss/python/integrations/providers/daytona) | [`langchain-daytona`](https://pypi.org/project/langchain-daytona/) |
| [Modal](/oss/python/integrations/providers/modal)     | [`langchain-modal`](https://pypi.org/project/langchain-modal/)     |
| [Runloop](/oss/python/integrations/providers/runloop) | [`langchain-runloop`](https://pypi.org/project/langchain-runloop/) |

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/python/integrations/sandboxes/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
