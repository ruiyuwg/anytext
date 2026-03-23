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
