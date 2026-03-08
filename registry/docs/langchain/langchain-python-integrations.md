# LangChain Python integrations

Source: https://docs.langchain.com/oss/python/integrations/providers/overview

Integrate with providers using LangChain Python.

LangChain offers an extensive ecosystem with 1000+ integrations across chat & embedding models, tools & toolkits, document loaders, vector stores, and more.

A **provider** is a third-party service or platform that LangChain integrates with to access AI capabilities like chat models, embeddings, and vector stores. These providers have standalone `langchain-provider` packages for improved versioning, dependency management, and testing.

To see a full list of integrations by component type, refer to the categories in the sidebar.

## Popular providers

| Provider                                                            | Package                                                                                                               | Downloads                                                                                               | Latest version                                                                                            | JS/TS support                              |
| :------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| [OpenAI](/oss/python/integrations/providers/openai/)                | [`langchain-openai`](https://reference.langchain.com/python/integrations/langchain_openai/)                           |               |               | [✅](https://www.npmjs.com/package/@langchain/openai)          |
| [Google (Vertex AI)](/oss/python/integrations/providers/google)     | [`langchain-google-vertexai`](https://reference.langchain.com/python/integrations/langchain_google_vertexai/)         |      |      | [✅](https://www.npmjs.com/package/@langchain/google-vertexai) |
| [Anthropic (Claude)](/oss/python/integrations/providers/anthropic/) | [`langchain-anthropic`](https://reference.langchain.com/python/integrations/langchain_anthropic/)                     |            |            | [✅](https://www.npmjs.com/package/@langchain/anthropic)       |
| [AWS](/oss/python/integrations/providers/aws/)                      | [`langchain-aws`](https://reference.langchain.com/python/integrations/langchain_aws/)                                 |                  |                  | [✅](https://www.npmjs.com/package/@langchain/aws)             |
| [Google (GenAI)](/oss/python/integrations/providers/google)         | [`langchain-google-genai`](https://reference.langchain.com/python/integrations/langchain_google_genai/)               |         |         | [✅](https://www.npmjs.com/package/@langchain/google-genai)    |
| [Ollama](/oss/python/integrations/providers/ollama/)                | [`langchain-ollama`](https://reference.langchain.com/python/integrations/langchain_ollama/)                           |               |               | [✅](https://www.npmjs.com/package/@langchain/ollama)          |
| [Groq](/oss/python/integrations/providers/groq/)                    | [`langchain-groq`](https://reference.langchain.com/python/integrations/langchain_groq/)                               |                 |                 | [✅](https://www.npmjs.com/package/@langchain/groq)            |
| [Huggingface](/oss/python/integrations/providers/huggingface/)      | [`langchain-huggingface`](https://reference.langchain.com/python/integrations/langchain_huggingface/)                 |          |          | [✅](https://www.npmjs.com/package/@langchain/community)       |
| [Databricks](/oss/python/integrations/providers/databricks/)        | [`databricks-langchain`](https://pypi.org/project/databricks-langchain/)                                              |           |           | [✅](https://www.npmjs.com/package/@langchain/community)       |
| [Chroma](/oss/python/integrations/providers/chroma/)                | [`langchain-chroma`](https://reference.langchain.com/python/integrations/langchain_chroma/)                           |               |               | [✅](https://www.npmjs.com/package/@langchain/community)       |
| [Postgres](/oss/python/integrations/providers/pgvector)             | [`langchain-postgres`](https://reference.langchain.com/python/integrations/langchain_postgres/)                       |             |             | [✅](https://www.npmjs.com/package/@langchain/community)       |
| [Pinecone](/oss/python/integrations/providers/pinecone/)            | [`langchain-pinecone`](https://reference.langchain.com/python/integrations/langchain_pinecone/)                       |             |             | [✅](https://www.npmjs.com/package/@langchain/pinecone)        |
| [MistralAI](/oss/python/integrations/providers/mistralai/)          | [`langchain-mistralai`](https://reference.langchain.com/python/integrations/langchain_mistralai/)                     |            |            | [✅](https://www.npmjs.com/package/@langchain/mistralai)       |
| [Cohere](/oss/python/integrations/providers/cohere/)                | [`langchain-cohere`](https://reference.langchain.com/python/integrations/langchain_cohere/)                           |               |               | [✅](https://www.npmjs.com/package/@langchain/cohere)          |
| [Fireworks](/oss/python/integrations/providers/fireworks/)          | [`langchain-fireworks`](https://reference.langchain.com/python/integrations/langchain_fireworks/)                     |            |            | [✅](https://www.npmjs.com/package/@langchain/community)       |
| [MongoDB](/oss/python/integrations/providers/mongodb_atlas)         | [`langchain-mongodb`](https://reference.langchain.com/python/integrations/langchain_mongodb/)                         |              |              | [✅](https://www.npmjs.com/package/@langchain/mongodb)         |
| [xAI (Grok)](/oss/python/integrations/providers/xai/)               | [`langchain-xai`](https://reference.langchain.com/python/integrations/langchain_xai/)                                 |                  |                  | [✅](https://www.npmjs.com/package/@langchain/xai)             |
| [DeepSeek](/oss/python/integrations/providers/deepseek/)            | [`langchain-deepseek`](https://reference.langchain.com/python/integrations/langchain_deepseek/)                       |             |             | [✅](https://www.npmjs.com/package/@langchain/deepseek)        |
| [Perplexity](/oss/python/integrations/providers/perplexity/)        | [`langchain-perplexity`](https://reference.langchain.com/python/integrations/langchain_perplexity/)                   |           |           | [✅](https://www.npmjs.com/package/@langchain/community)       |
| [Azure AI](/oss/python/integrations/providers/azure_ai)             | [`langchain-azure-ai`](https://reference.langchain.com/python/integrations/langchain_azure_ai/)                       |             |             | [✅](https://www.npmjs.com/package/@langchain/openai)          |
| [Nvidia AI Endpoints](/oss/python/integrations/providers/nvidia)    | [`langchain-nvidia-ai-endpoints`](https://reference.langchain.com/python/integrations/langchain_nvidia_ai_endpoints/) |  |  | ❌                                                             |
| [IBM](/oss/python/integrations/providers/ibm/)                      | [`langchain-ibm`](https://reference.langchain.com/python/integrations/langchain_ibm/)                                 |                  |                  | [✅](https://www.npmjs.com/package/@langchain/ibm)             |
| [Tavily](/oss/python/integrations/providers/tavily/)                | [`langchain-tavily`](https://reference.langchain.com/python/integrations/langchain_tavily/)                           |               |               | [✅](https://www.npmjs.com/package/@langchain/tavily)          |
| [Qdrant](/oss/python/integrations/providers/qdrant/)                | [`langchain-qdrant`](https://reference.langchain.com/python/integrations/langchain_qdrant/)                           |               |               | [✅](https://www.npmjs.com/package/@langchain/qdrant)          |
| [Milvus](/oss/python/integrations/providers/milvus/)                | [`langchain-milvus`](https://reference.langchain.com/python/integrations/langchain_milvus/)                           |               |               | [✅](https://www.npmjs.com/package/@langchain/community)       |
| [Elasticsearch](/oss/python/integrations/providers/elasticsearch/)  | [`langchain-elasticsearch`](https://reference.langchain.com/python/integrations/langchain_elasticsearch/)             |        |        | [✅](https://www.npmjs.com/package/@langchain/community)       |
| [LiteLLM](/oss/python/integrations/providers/litellm/)              | [`langchain-litellm`](https://pypi.org/project/langchain-litellm/)                                                    |              |              | N/A                                                           |
| [DataStax Astra DB](/oss/python/integrations/providers/astradb/)    | [`langchain-astradb`](https://reference.langchain.com/python/integrations/langchain_astradb/)                         |              |              | [✅](https://www.npmjs.com/package/@langchain/community)       |
| [Redis](/oss/python/integrations/providers/redis/)                  | [`langchain-redis`](https://reference.langchain.com/python/integrations/langchain_redis/)                             |                |                | [✅](https://www.npmjs.com/package/@langchain/redis)           |
| [Together](/oss/python/integrations/providers/together/)            | [`langchain-together`](https://reference.langchain.com/python/integrations/langchain_together/)                       |             |             | [✅](https://www.npmjs.com/package/@langchain/community)       |
| [MCP Toolbox (Google)](/oss/python/integrations/providers/toolbox/) | [`toolbox-langchain`](https://pypi.org/project/toolbox-langchain/)                                                    |              |              | ❌                                                             |
| [OpenRouter](/oss/python/integrations/providers/openrouter/)        | [`langchain-openrouter`](https://reference.langchain.com/python/integrations/langchain_openrouter/)                   |           |           | ❌                                                             |
| [Google (Community)](/oss/python/integrations/providers/google)     | [`langchain-google-community`](https://reference.langchain.com/python/integrations/langchain_google_community/)       |     |     | ❌                                                             |
| [Unstructured](/oss/python/integrations/providers/unstructured/)    | [`langchain-unstructured`](https://reference.langchain.com/python/integrations/langchain_unstructured/)               |         |         | [✅](https://www.npmjs.com/package/@langchain/community)       |
| [Neo4J](/oss/python/integrations/providers/neo4j/)                  | [`langchain-neo4j`](https://reference.langchain.com/python/integrations/langchain_neo4j/)                             |                |                | [✅](https://www.npmjs.com/package/@langchain/community)       |
| [Graph RAG](/oss/python/integrations/providers/graph_rag)           | [`langchain-graph-retriever`](https://pypi.org/project/langchain-graph-retriever/)                                    |      |      | ❌                                                             |

## All providers

[See all providers](/oss/python/integrations/providers/all_providers) or search for a provider using the search field.

Community integrations can be found in [`langchain-community`](https://github.com/langchain-ai/langchain-community).

If you'd like to contribute an integration, see the [contributing guide](/oss/python/contributing).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/python/integrations/providers/overview.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
