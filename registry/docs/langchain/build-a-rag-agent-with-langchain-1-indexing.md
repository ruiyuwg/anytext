## 1. Indexing

**This section is an abbreviated version of the content in the [semantic search tutorial](/oss/python/langchain/knowledge-base).**

If your data is already indexed and available for search (i.e., you have a function to execute a search), or if you're comfortable with [document loaders](/oss/python/integrations/document_loaders), [embeddings](/oss/python/integrations/embeddings), and [vector stores](/oss/python/integrations/vectorstores), feel free to skip to the next section on [retrieval and generation](/oss/python/langchain/rag#2-retrieval-and-generation).

Indexing commonly works as follows:

1. **Load**: First we need to load our data. This is done with [Document Loaders](/oss/python/integrations/document_loaders).
2. **Split**: [Text splitters](/oss/python/integrations/splitters) break large `Documents` into smaller chunks. This is useful both for indexing data and passing it into a model, as large chunks are harder to search over and won't fit in a model's finite context window.
3. **Store**: We need somewhere to store and index our splits, so that they can be searched over later. This is often done using a [VectorStore](/oss/python/integrations/vectorstores) and [Embeddings](/oss/python/integrations/embeddings) model.

### Loading documents

We need to first load the blog post contents. We can use [DocumentLoaders](/oss/python/integrations/document_loaders) for this, which are objects that load in data from a source and return a list of [Document](https://reference.langchain.com/python/langchain-core/documents/base/Document) objects.

In this case we'll use the [`WebBaseLoader`](/oss/python/integrations/document_loaders/web_base), which uses `urllib` to load HTML from web URLs and `BeautifulSoup` to parse it to text. We can customize the HTML -> text parsing by passing in parameters into the `BeautifulSoup` parser via `bs_kwargs` (see [BeautifulSoup docs](https://beautiful-soup-4.readthedocs.io/en/latest/#beautifulsoup)). In this case only HTML tags with class “post-content”, “post-title”, or “post-header” are relevant, so we'll remove all others.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import bs4
from langchain_community.document_loaders import WebBaseLoader

# Only keep post title, headers, and content from the full HTML.
bs4_strainer = bs4.SoupStrainer(class_=("post-title", "post-header", "post-content"))
loader = WebBaseLoader(
    web_paths=("https://lilianweng.github.io/posts/2023-06-23-agent/",),
    bs_kwargs={"parse_only": bs4_strainer},
)
docs = loader.load()

assert len(docs) == 1
print(f"Total characters: {len(docs[0].page_content)}")
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Total characters: 43131
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
print(docs[0].page_content[:500])
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
      LLM Powered Autonomous Agents

Date: June 23, 2023  |  Estimated Reading Time: 31 min  |  Author: Lilian Weng


Building agents with LLM (large language model) as its core controller is a cool concept. Several proof-of-concepts demos, such as AutoGPT, GPT-Engineer and BabyAGI, serve as inspiring examples. The potentiality of LLM extends beyond generating well-written copies, stories, essays and programs; it can be framed as a powerful general problem solver.
Agent System Overview#
In
```

**Go deeper**

`DocumentLoader`: Object that loads data from a source as list of `Documents`.

- [Integrations](/oss/python/integrations/document_loaders/): 160+ integrations to choose from.
- [`BaseLoader`](https://reference.langchain.com/python/langchain-core/document_loaders/base/BaseLoader): API reference for the base interface.

### Splitting documents

Our loaded document is over 42k characters which is too long to fit into the context window of many models. Even for those models that could fit the full post in their context window, models can struggle to find information in very long inputs.

To handle this we'll split the [`Document`](https://reference.langchain.com/python/langchain-core/documents/base/Document) into chunks for embedding and vector storage. This should help us retrieve only the most relevant parts of the blog post at run time.

As in the [semantic search tutorial](/oss/python/langchain/knowledge-base), we use a `RecursiveCharacterTextSplitter`, which will recursively split the document using common separators like new lines until each chunk is the appropriate size. This is the recommended text splitter for generic text use cases.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_text_splitters import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,  # chunk size (characters)
    chunk_overlap=200,  # chunk overlap (characters)
    add_start_index=True,  # track index in original document
)
all_splits = text_splitter.split_documents(docs)

print(f"Split blog post into {len(all_splits)} sub-documents.")
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Split blog post into 66 sub-documents.
```

**Go deeper**

`TextSplitter`: Object that splits a list of [`Document`](https://reference.langchain.com/python/langchain-core/documents/base/Document) objects into smaller
chunks for storage and retrieval.

- [Integrations](/oss/python/integrations/splitters/)
- [Interface](https://python.langchain.com/api_reference/text_splitters/base/langchain_text_splitters.base.TextSplitter.html): API reference for the base interface.

### Storing documents

Now we need to index our 66 text chunks so that we can search over them at runtime. Following the [semantic search tutorial](/oss/python/langchain/knowledge-base), our approach is to [embed](/oss/python/integrations/embeddings) the contents of each document split and insert these embeddings into a [vector store](/oss/python/integrations/vectorstores). Given an input query, we can then use vector search to retrieve relevant documents.

We can embed and store all of our document splits in a single command using the vector store and embeddings model selected at the [start of the tutorial](/oss/python/langchain/rag#components).

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
document_ids = vector_store.add_documents(documents=all_splits)

print(document_ids[:3])
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
['07c18af6-ad58-479a-bfb1-d508033f9c64', '9000bf8e-1993-446f-8d4d-f4e507ba4b8f', 'ba3b5d14-bed9-4f5f-88be-44c88aedc2e6']
```

**Go deeper**

`Embeddings`: Wrapper around a text embedding model, used for converting text to embeddings.

- [Integrations](/oss/python/integrations/embeddings/): 30+ integrations to choose from.
- [Interface](https://reference.langchain.com/python/langchain-core/embeddings/embeddings/Embeddings): API reference for the base interface.

`VectorStore`: Wrapper around a vector database, used for storing and querying embeddings.

- [Integrations](/oss/python/integrations/vectorstores/): 40+ integrations to choose from.
- [Interface](https://python.langchain.com/api_reference/core/vectorstores/langchain_core.vectorstores.base.VectorStore.html): API reference for the base interface.

This completes the **Indexing** portion of the pipeline. At this point we have a query-able vector store containing the chunked contents of our blog post. Given a user question, we should ideally be able to return the snippets of the blog post that answer the question.
