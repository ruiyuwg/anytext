# Embedding model integrations

Source: https://docs.langchain.com/oss/python/integrations/embeddings/index

Integrate with embedding models using LangChain Python.

## Overview

This overview covers **text-based embedding models**. LangChain does not currently support multimodal embeddings.

See [top embedding models](#top-integrations).

Embedding models transform raw text—such as a sentence, paragraph, or tweet—into a fixed-length vector of numbers that captures its **semantic meaning**. These vectors allow machines to compare and search text based on meaning rather than exact words.

In practice, this means that texts with similar ideas are placed close together in the vector space. For example, instead of matching only the phrase *"machine learning"*, embeddings can surface documents that discuss related concepts even when different wording is used.

### How it works

1. **Vectorization** — The model encodes each input string as a high-dimensional vector.
2. **Similarity scoring** — Vectors are compared using mathematical metrics to measure how closely related the underlying texts are.

### Similarity metrics

Several metrics are commonly used to compare embeddings:

- **Cosine similarity** — measures the angle between two vectors.
- **Euclidean distance** — measures the straight-line distance between points.
- **Dot product** — measures how much one vector projects onto another.

Here's an example of computing cosine similarity between two vectors:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import numpy as np

def cosine_similarity(vec1, vec2):
    dot = np.dot(vec1, vec2)
    return dot / (np.linalg.norm(vec1) * np.linalg.norm(vec2))

similarity = cosine_similarity(query_embedding, document_embedding)
print("Cosine Similarity:", similarity)
```

## Interface

LangChain provides a standard interface for text embedding models (e.g., OpenAI, Cohere, Hugging Face) via the [Embeddings](https://reference.langchain.com/python/langchain-core/embeddings/embeddings/Embeddings) interface.

Two main methods are available:

- `embed_documents(texts: List[str]) → List[List[float]]`: Embeds a list of documents.
- `embed_query(text: str) → List[float]`: Embeds a single query.

  The interface allows queries and documents to be embedded with different strategies, though most providers handle them the same way in practice.

## Top integrations

| Model                                                                                      | Package                                                                                                                                                            |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`OpenAIEmbeddings`](/oss/python/integrations/embeddings/openai)                           | [`langchain-openai`](https://python.langchain.com/api_reference/openai/chat_models/langchain_openai.chat_models.base.ChatOpenAI.html)                              |
| [`AzureOpenAIEmbeddings`](/oss/python/integrations/embeddings/azure_openai)                | [`langchain-openai`](https://python.langchain.com/api_reference/openai/embeddings/langchain_openai.embeddings.azure.AzureOpenAIEmbeddings.html)                    |
| [`GoogleGenerativeAIEmbeddings`](/oss/python/integrations/embeddings/google_generative_ai) | [`langchain-google-genai`](https://python.langchain.com/api_reference/google_genai/embeddings/langchain_google_genai.embeddings.GoogleGenerativeAIEmbeddings.html) |
| [`OllamaEmbeddings`](/oss/python/integrations/embeddings/ollama)                           | [`langchain-ollama`](https://python.langchain.com/api_reference/ollama/embeddings/langchain_ollama.embeddings.OllamaEmbeddings.html)                               |
| [`TogetherEmbeddings`](/oss/python/integrations/embeddings/together)                       | [`langchain-together`](https://python.langchain.com/api_reference/together/embeddings/langchain_together.embeddings.TogetherEmbeddings.html)                       |
| [`FireworksEmbeddings`](/oss/python/integrations/embeddings/fireworks)                     | [`langchain-fireworks`](https://python.langchain.com/api_reference/fireworks/embeddings/langchain_fireworks.embeddings.FireworksEmbeddings.html)                   |
| [`MistralAIEmbeddings`](/oss/python/integrations/embeddings/mistralai)                     | [`langchain-mistralai`](https://python.langchain.com/api_reference/mistralai/embeddings/langchain_mistralai.embeddings.MistralAIEmbeddings.html)                   |
| [`VoyageAIEmbeddings`](/oss/python/integrations/embeddings/voyageai)                       | [`langchain-voyageai`](https://python.langchain.com/api_reference/voyageai/embeddings/langchain_voyageai.embeddings.VoyageAIEmbeddings.html)                       |
| [`CohereEmbeddings`](/oss/python/integrations/embeddings/cohere)                           | [`langchain-cohere`](https://python.langchain.com/api_reference/community/llms/langchain_community.llms.cohere.Cohere.html)                                        |
| [`NomicEmbeddings`](/oss/python/integrations/embeddings/nomic)                             | [`langchain-nomic`](https://python.langchain.com/api_reference/nomic/embeddings/langchain_nomic.embeddings.NomicEmbeddings.html)                                   |
| [`FakeEmbeddings`](/oss/python/integrations/embeddings/fake)                               | [`langchain-core`](https://python.langchain.com/api_reference/core/embeddings/langchain_core.embeddings.fake.FakeEmbeddings.html)                                  |
| [`DatabricksEmbeddings`](/oss/python/integrations/embeddings/databricks)                   | [`databricks-langchain`](https://api-docs.databricks.com/python/databricks-ai-bridge/latest/databricks_langchain.html#databricks_langchain.DatabricksEmbeddings)   |
| [`WatsonxEmbeddings`](/oss/python/integrations/embeddings/ibm_watsonx)                     | [`langchain-ibm`](https://python.langchain.com/api_reference/ibm/embeddings/langchain_ibm.embeddings.WatsonxEmbeddings.html)                                       |
| [`NVIDIAEmbeddings`](/oss/python/integrations/embeddings/nvidia_ai_endpoints)              | [`langchain-nvidia`](https://python.langchain.com/api_reference/nvidia_ai_endpoints/embeddings/langchain_nvidia_ai_endpoints.embeddings.NVIDIAEmbeddings.html)     |
| [`AIMLAPIEmbeddings`](/oss/python/integrations/embeddings/aimlapi)                         | [`langchain-aimlapi`](https://python.langchain.com/api_reference/aimlapi/embeddings/langchain_aimlapi.embeddings.AIMLAPIEmbeddings.html)                           |

## Caching

Embeddings can be stored or temporarily cached to avoid needing to recompute them.

Caching embeddings can be done using a `CacheBackedEmbeddings`. This wrapper stores embeddings in a key-value store, where the text is hashed and the hash is used as the key in the cache.

The main supported way to initialize a `CacheBackedEmbeddings` is `from_bytes_store`. It takes the following parameters:

- **`underlying_embedder`**: The embedder to use for embedding.
- **`document_embedding_cache`**: Any [`ByteStore`](/oss/python/integrations/stores/) for caching document embeddings.
- **`batch_size`**: (optional, defaults to `None`) The number of documents to embed between store updates.
- **`namespace`**: (optional, defaults to `""`) The namespace to use for the document cache. Helps avoid collisions (e.g., set it to the embedding model name).
- **`query_embedding_cache`**: (optional, defaults to `None`) A [`ByteStore`](/oss/python/integrations/stores/) for caching query embeddings, or `True` to reuse the same store as `document_embedding_cache`.

  - Always set the `namespace` parameter to avoid collisions when using different embedding models.
  - `CacheBackedEmbeddings` does not cache query embeddings by default. To enable this, specify a `query_embedding_cache`.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import time
from langchain_classic.embeddings import CacheBackedEmbeddings  # [!code highlight]
from langchain_classic.storage import LocalFileStore # [!code highlight]
from langchain_core.vectorstores import InMemoryVectorStore

# Create your underlying embeddings model
underlying_embeddings = ... # e.g., OpenAIEmbeddings(), HuggingFaceEmbeddings(), etc.

# Store persists embeddings to the local filesystem
# This isn't for production use, but is useful for local
store = LocalFileStore("./cache/") # [!code highlight]

cached_embedder = CacheBackedEmbeddings.from_bytes_store(
    underlying_embeddings,
    store,
    namespace=underlying_embeddings.model
)

# Example: caching a query embedding
tic = time.time()
print(cached_embedder.embed_query("Hello, world!"))
print(f"First call took: {time.time() - tic:.2f} seconds")

# Subsequent calls use the cache
tic = time.time()
print(cached_embedder.embed_query("Hello, world!"))
print(f"Second call took: {time.time() - tic:.2f} seconds")
```

In production, you would typically use a more robust persistent store, such as a database or cloud storage. Please see [stores integrations](/oss/python/integrations/stores/) for options.

## All embedding models

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/python/integrations/embeddings/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Middleware integrations

Source: https://docs.langchain.com/oss/python/integrations/middleware/index

Integrate with middleware using LangChain Python.

Middleware designed for specific providers. Learn more about [middleware](/oss/python/langchain/middleware/overview).

| Provider                                                   | Middleware available                                            |
| ---------------------------------------------------------- | --------------------------------------------------------------- |
| [Anthropic](/oss/python/integrations/middleware/anthropic) | Prompt caching, bash tool, text editor, memory, and file search |
| [AWS](/oss/python/integrations/middleware/aws)             | Prompt caching                                                  |
| [OpenAI](/oss/python/integrations/middleware/openai)       | Content moderation                                              |

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/python/integrations/middleware/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
