# Build a custom RAG agent with LangGraph

Source: https://docs.langchain.com/oss/javascript/langgraph/agentic-rag

## Overview

In this tutorial we will build a [retrieval](/oss/javascript/langchain/retrieval) agent using LangGraph.

LangChain offers built-in [agent](/oss/javascript/langchain/agents) implementations, implemented using [LangGraph](/oss/javascript/langgraph/overview) primitives. If deeper customization is required, agents can be implemented directly in LangGraph. This guide demonstrates an example implementation of a retrieval agent. [Retrieval](/oss/javascript/langchain/retrieval) agents are useful when you want an LLM to make a decision about whether to retrieve context from a vectorstore or respond to the user directly.

By the end of the tutorial we will have done the following:

1. Fetch and preprocess documents that will be used for retrieval.
2. Index those documents for semantic search and create a retriever tool for the agent.
3. Build an agentic RAG system that can decide when to use the retriever tool.

### Concepts

We will cover the following concepts:

- [Retrieval](/oss/javascript/langchain/retrieval) using [document loaders](/oss/javascript/integrations/document_loaders), [text splitters](/oss/javascript/integrations/splitters), [embeddings](/oss/javascript/integrations/text_embedding), and [vector stores](/oss/javascript/integrations/vectorstores)
- The LangGraph [Graph API](/oss/javascript/langgraph/graph-api), including state, nodes, edges, and conditional edges.

## Setup

Let's download the required packages and set our API keys:

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/langgraph @langchain/openai @langchain/community @langchain/textsplitters
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm install @langchain/langgraph @langchain/openai @langchain/community @langchain/textsplitters
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add @langchain/langgraph @langchain/openai @langchain/community @langchain/textsplitters
```

```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
bun add @langchain/langgraph @langchain/openai @langchain/community @langchain/textsplitters
```

Sign up for LangSmith to quickly spot issues and improve the performance of your LangGraph projects. [LangSmith](https://docs.smith.langchain.com) lets you use trace data to debug, test, and monitor your LLM apps built with LangGraph.

## 1. Preprocess documents

1. Fetch documents to use in our RAG system. We will use three of the most recent pages from [Lilian Weng's excellent blog](https://lilianweng.github.io/). We'll start by fetching the content of the pages using `CheerioWebBaseLoader`:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";

const urls = [
  "https://lilianweng.github.io/posts/2023-06-23-agent/",
  "https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/",
  "https://lilianweng.github.io/posts/2023-10-25-adv-attack-llm/",
];

const docs = await Promise.all(
  urls.map((url) => new CheerioWebBaseLoader(url).load()),
);
```

2. Split the fetched documents into smaller chunks for indexing into our vectorstore:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const docsList = docs.flat();

const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 50,
});
const docSplits = await textSplitter.splitDocuments(docsList);
```

## 2. Create a retriever tool

Now that we have our split documents, we can index them into a vector store that we'll use for semantic search.

1. Use an in-memory vector store and OpenAI embeddings:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";

const vectorStore = await MemoryVectorStore.fromDocuments(
  docSplits,
  new OpenAIEmbeddings(),
);

const retriever = vectorStore.asRetriever();
```

2. Create a retriever tool using LangChain's prebuilt `createRetrieverTool`:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createRetrieverTool } from "@langchain/classic/tools/retriever";

const tool = createRetrieverTool(
  retriever,
  {
    name: "retrieve_blog_posts",
    description:
      "Search and return information about Lilian Weng blog posts on LLM agents, prompt engineering, and adversarial attacks on LLMs.",
  },
);
const tools = [tool];
```

## 3. Generate query

Now we will start building components ([nodes](/oss/javascript/langgraph/graph-api#nodes) and [edges](/oss/javascript/langgraph/graph-api#edges)) for our agentic RAG graph.

1. Build a `generateQueryOrRespond` node. It will call an LLM to generate a response based on the current graph state (list of messages). Given the input messages, it will decide to retrieve using the retriever tool, or respond directly to the user. Note that we're giving the chat model access to the `tools` we created earlier via `.bindTools`:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";
import { GraphNode } from "@langchain/langgraph";

const generateQueryOrRespond: GraphNode<typeof State> = async (state) => {
  const model = new ChatOpenAI({
    model: "gpt-4.1",
    temperature: 0,
  }).bindTools(tools);  // [!code highlight]

  const response = await model.invoke(state.messages);
  return {
    messages: [response],
  };
}
```

2. Try it on a random input:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { HumanMessage } from "@langchain/core/messages";

const input = { messages: [new HumanMessage("hello!")] };
const result = await generateQueryOrRespond(input);
console.log(result.messages[0]);
```

**Output:**

```
AIMessage {
  content: "Hello! How can I help you today?",
  tool_calls: []
}
```

3. Ask a question that requires semantic search:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const input = {
  messages: [
    new HumanMessage("What does Lilian Weng say about types of reward hacking?")
  ]
};
const result = await generateQueryOrRespond(input);
console.log(result.messages[0]);
```

**Output:**

```
AIMessage {
  content: "",
  tool_calls: [
    {
      name: "retrieve_blog_posts",
      args: { query: "types of reward hacking" },
      id: "call_...",
      type: "tool_call"
    }
  ]
}
```

## 4. Grade documents

1. Add a node — `gradeDocuments` — to determine whether the retrieved documents are relevant to the question. We will use a model with structured output using Zod for document grading. We'll also add a [conditional edge](/oss/javascript/langgraph/graph-api#conditional-edges) — `checkRelevance` — that checks the grading result and returns the name of the node to go to (`generate` or `rewrite`):

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import * as z from "zod";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { GraphNode } from "@langchain/langgraph";
import { AIMessage } from "@langchain/core/messages";

const prompt = ChatPromptTemplate.fromTemplate(
  `You are a grader assessing relevance of retrieved docs to a user question.
  Here are the retrieved docs:
  \n ------- \n
  {context}
  \n ------- \n
  Here is the user question: {question}
  If the content of the docs are relevant to the users question, score them as relevant.
  Give a binary score 'yes' or 'no' score to indicate whether the docs are relevant to the question.
  Yes: The docs are relevant to the question.
  No: The docs are not relevant to the question.`,
);

const gradeDocumentsSchema = z.object({
  binaryScore: z.string().describe("Relevance score 'yes' or 'no'"),  // [!code highlight]
})

const gradeDocuments: GraphNode<typeof State> = async (state) => {
  const model = new ChatOpenAI({
    model: "gpt-4.1",
    temperature: 0,
  }).withStructuredOutput(gradeDocumentsSchema);

  const score = await prompt.pipe(model).invoke({
    question: state.messages.at(0)?.content,
    context: state.messages.at(-1)?.content,
  });

  if (score.binaryScore === "yes") {
    return "generate";
  }
  return "rewrite";
}
```

2. Run this with irrelevant documents in the tool response:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ToolMessage } from "@langchain/core/messages";

const input = {
  messages: [
    new HumanMessage("What does Lilian Weng say about types of reward hacking?"),
    new AIMessage({
      tool_calls: [
        {
          type: "tool_call",
          name: "retrieve_blog_posts",
          args: { query: "types of reward hacking" },
          id: "1",
        }
      ]
    }),
    new ToolMessage({
      content: "meow",
      tool_call_id: "1",
    })
  ]
}
const result = await gradeDocuments(input);
```

3. Confirm that the relevant documents are classified as such:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const input = {
  messages: [
    new HumanMessage("What does Lilian Weng say about types of reward hacking?"),
    new AIMessage({
      tool_calls: [
        {
          type: "tool_call",
          name: "retrieve_blog_posts",
          args: { query: "types of reward hacking" },
          id: "1",
        }
      ]
    }),
    new ToolMessage({
      content: "reward hacking can be categorized into two types: environment or goal misspecification, and reward tampering",
      tool_call_id: "1",
    })
  ]
}
const result = await gradeDocuments(input);
```

## 5. Rewrite question

1. Build the `rewrite` node. The retriever tool can return potentially irrelevant documents, which indicates a need to improve the original user question. To do so, we will call the `rewrite` node:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { GraphNode } from "@langchain/langgraph";

const rewritePrompt = ChatPromptTemplate.fromTemplate(
  `Look at the input and try to reason about the underlying semantic intent / meaning. \n
  Here is the initial question:
  \n ------- \n
  {question}
  \n ------- \n
  Formulate an improved question:`,
);

const rewrite: GraphNode<typeof State> = async (state) => {
  const question = state.messages.at(0)?.content;

  const model = new ChatOpenAI({
    model: "gpt-4.1",
    temperature: 0,
  });

  const response = await rewritePrompt.pipe(model).invoke({ question });
  return {
    messages: [response],
  };
}
```

2. Try it out:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { HumanMessage, AIMessage, ToolMessage } from "@langchain/core/messages";

const input = {
  messages: [
    new HumanMessage("What does Lilian Weng say about types of reward hacking?"),
    new AIMessage({
      content: "",
      tool_calls: [
        {
          id: "1",
          name: "retrieve_blog_posts",
          args: { query: "types of reward hacking" },
          type: "tool_call"
        }
      ]
    }),
    new ToolMessage({ content: "meow", tool_call_id: "1" })
  ]
};

const response = await rewrite(input);
console.log(response.messages[0].content);
```

**Output:**

```
What are the different types of reward hacking described by Lilian Weng, and how does she explain them?
```

## 6. Generate an answer

1. Build `generate` node: if we pass the grader checks, we can generate the final answer based on the original question and the retrieved context:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { GraphNode } from "@langchain/langgraph";

const generate: GraphNode<typeof State> = async (state) => {
  const question = state.messages.at(0)?.content;
  const context = state.messages.at(-1)?.content;

  const prompt = ChatPromptTemplate.fromTemplate(
  `You are an assistant for question-answering tasks.
      Use the following pieces of retrieved context to answer the question.
      If you don't know the answer, just say that you don't know.
      Use three sentences maximum and keep the answer concise.
      Question: {question}
      Context: {context}`
  );

  const llm = new ChatOpenAI({
    model: "gpt-4.1",
    temperature: 0,
  });

  const ragChain = prompt.pipe(llm);

  const response = await ragChain.invoke({
    context,
    question,
  });

  return {
    messages: [response],
  };
}
```

2. Try it:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { HumanMessage, AIMessage, ToolMessage } from "@langchain/core/messages";

const input = {
  messages: [
    new HumanMessage("What does Lilian Weng say about types of reward hacking?"),
    new AIMessage({
      content: "",
      tool_calls: [
        {
          id: "1",
          name: "retrieve_blog_posts",
          args: { query: "types of reward hacking" },
          type: "tool_call"
        }
      ]
    }),
    new ToolMessage({
      content: "reward hacking can be categorized into two types: environment or goal misspecification, and reward tampering",
      tool_call_id: "1"
    })
  ]
};

const response = await generate(input);
console.log(response.messages[0].content);
```

**Output:**

```
Lilian Weng categorizes reward hacking into two types: environment or goal misspecification, and reward tampering. She considers reward hacking as a broad concept that includes both of these categories. Reward hacking occurs when an agent exploits flaws or ambiguities in the reward function to achieve high rewards without performing the intended behaviors.
```

## 7. Assemble the graph

Now we'll assemble all the nodes and edges into a complete graph:

- Start with a `generateQueryOrRespond` and determine if we need to call the retriever tool
- Route to next step using a conditional edge:
  - If `generateQueryOrRespond` returned `tool_calls`, call the retriever tool to retrieve context
  - Otherwise, respond directly to the user
- Grade retrieved document content for relevance to the question (`gradeDocuments`) and route to next step:
  - If not relevant, rewrite the question using `rewrite` and then call `generateQueryOrRespond` again
  - If relevant, proceed to `generate` and generate final response using the [`ToolMessage`](https://reference.langchain.com/javascript/langchain-core/messages/ToolMessage) with the retrieved document context

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateGraph, START, END, ConditionalEdgeRouter } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { AIMessage } from "langchain";

// Create a ToolNode for the retriever
const toolNode = new ToolNode(tools);

// Helper function to determine if we should retrieve
const shouldRetrieve: ConditionalEdgeRouter<typeof State, "retrieve"> = (state) => {
  const lastMessage = state.messages.at(-1);
  if (AIMessage.isInstance(lastMessage) && lastMessage.tool_calls.length) {
    return "retrieve";
  }
  return END;
}

// Define the graph
const builder = new StateGraph(GraphState)
  .addNode("generateQueryOrRespond", generateQueryOrRespond)
  .addNode("retrieve", toolNode)
  .addNode("gradeDocuments", gradeDocuments)
  .addNode("rewrite", rewrite)
  .addNode("generate", generate)
  // Add edges
  .addEdge(START, "generateQueryOrRespond")
  // Decide whether to retrieve
  .addConditionalEdges("generateQueryOrRespond", shouldRetrieve)
  .addEdge("retrieve", "gradeDocuments")
  // Edges taken after grading documents
  .addConditionalEdges(
    "gradeDocuments",
    // Route based on grading decision
    (state) => {
      // The gradeDocuments function returns either "generate" or "rewrite"
      const lastMessage = state.messages.at(-1);
      return lastMessage.content === "generate" ? "generate" : "rewrite";
    }
  )
  .addEdge("generate", END)
  .addEdge("rewrite", "generateQueryOrRespond");

// Compile
const graph = builder.compile();
```

## 8. Run the agentic RAG

Now let's test the complete graph by running it with a question:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { HumanMessage } from "@langchain/core/messages";

const inputs = {
  messages: [
    new HumanMessage("What does Lilian Weng say about types of reward hacking?")
  ]
};

for await (const output of await graph.stream(inputs)) {
  for (const [key, value] of Object.entries(output)) {
    const lastMsg = output[key].messages[output[key].messages.length - 1];
    console.log(`Output from node: '${key}'`);
    console.log({
      type: lastMsg._getType(),
      content: lastMsg.content,
      tool_calls: lastMsg.tool_calls,
    });
    console.log("---\n");
  }
}
```

**Output:**

```
Output from node: 'generateQueryOrRespond'
{
  type: 'ai',
  content: '',
  tool_calls: [
    {
      name: 'retrieve_blog_posts',
      args: { query: 'types of reward hacking' },
      id: 'call_...',
      type: 'tool_call'
    }
  ]
}
---

Output from node: 'retrieve'
{
  type: 'tool',
  content: '(Note: Some work defines reward tampering as a distinct category...\n' +
    'At a high level, reward hacking can be categorized into two types: environment or goal misspecification, and reward tampering.\n' +
    '...',
  tool_calls: undefined
}
---

Output from node: 'generate'
{
  type: 'ai',
  content: 'Lilian Weng categorizes reward hacking into two types: environment or goal misspecification, and reward tampering. She considers reward hacking as a broad concept that includes both of these categories. Reward hacking occurs when an agent exploits flaws or ambiguities in the reward function to achieve high rewards without performing the intended behaviors.',
  tool_calls: []
}
---
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langgraph/agentic-rag.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
