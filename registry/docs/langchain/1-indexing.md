## 1. Indexing

**This section is an abbreviated version of the content in the [semantic search tutorial](/oss/javascript/langchain/knowledge-base).**

If your data is already indexed and available for search (i.e., you have a function to execute a search), or if you're comfortable with [document loaders](/oss/javascript/integrations/document_loaders), [embeddings](/oss/javascript/integrations/embeddings), and [vector stores](/oss/javascript/integrations/vectorstores), feel free to skip to the next section on [retrieval and generation](/oss/javascript/langchain/rag#2-retrieval-and-generation).

Indexing commonly works as follows:

1. **Load**: First we need to load our data. This is done with [Document Loaders](/oss/javascript/integrations/document_loaders).
2. **Split**: [Text splitters](/oss/javascript/integrations/splitters) break large `Documents` into smaller chunks. This is useful both for indexing data and passing it into a model, as large chunks are harder to search over and won't fit in a model's finite context window.
3. **Store**: We need somewhere to store and index our splits, so that they can be searched over later. This is often done using a [VectorStore](/oss/javascript/integrations/vectorstores) and [Embeddings](/oss/javascript/integrations/embeddings) model.

### Loading documents

We need to first load the blog post contents. We can use [DocumentLoaders](/oss/javascript/integrations/document_loaders) for this, which are objects that load in data from a source and return a list of [Document](https://reference.langchain.com/javascript/langchain-core/documents/Document) objects.

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

Now we need to index our 66 text chunks so that we can search over them at runtime. Following the [semantic search tutorial](/oss/javascript/langchain/knowledge-base), our approach is to [embed](/oss/javascript/integrations/embeddings) the contents of each document split and insert these embeddings into a [vector store](/oss/javascript/integrations/vectorstores). Given an input query, we can then use vector search to retrieve relevant documents.

We can embed and store all of our document splits in a single command using the vector store and embeddings model selected at the [start of the tutorial](/oss/javascript/langchain/rag#components).

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
await vectorStore.addDocuments(allSplits);
```

**Go deeper**

`Embeddings`: Wrapper around a text embedding model, used for converting text to embeddings.

- [Integrations](/oss/javascript/integrations/embeddings/): 30+ integrations to choose from.
- [Interface](https://reference.langchain.com/javascript/langchain-core/embeddings/Embeddings): API reference for the base interface.

`VectorStore`: Wrapper around a vector database, used for storing and querying embeddings.

- [Integrations](/oss/javascript/integrations/vectorstores/): 40+ integrations to choose from.
- [Interface](https://python.langchain.com/api_reference/core/vectorstores/langchain_core.vectorstores.base.VectorStore.html): API reference for the base interface.

This completes the **Indexing** portion of the pipeline. At this point we have a query-able vector store containing the chunked contents of our blog post. Given a user question, we should ideally be able to return the snippets of the blog post that answer the question.
