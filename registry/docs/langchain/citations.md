## Citations

Anthropic supports a [citations](https://platform.claude.com/docs/en/build-with-claude/citations) feature that lets Claude attach context to its answers based on source material supplied by the user. This source material can be provided either as [document content blocks](https://platform.claude.com/docs/en/build-with-claude/citations#document-types), which describe full documents, or as [search results](https://platform.claude.com/docs/en/build-with-claude/search-results), which describe relevant passages or snippets returned from a retrieval system. When `"citations": { "enabled": true }` is included in a query, Claude may generate direct citations to the provided material in its response.

### Document example

In this example we pass a [plain text document](https://platform.claude.com/docs/en/build-with-claude/citations#plain-text-documents). In the background, Claude [automatically chunks](https://platform.claude.com/docs/en/build-with-claude/citations#plain-text-documents) the input text into sentences, which are used when generating citations.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatAnthropic } from "@langchain/anthropic";

const citationsModel = new ChatAnthropic({
  model: "claude-haiku-4-5-20251001",
});

const messagesWithCitations = [
  {
    role: "user",
    content: [
      {
        type: "document",
        source: {
          type: "text",
          media_type: "text/plain",
          data: "The grass is green. The sky is blue.",
        },
        title: "My Document",
        context: "This is a trustworthy document.",
        citations: {
          enabled: true,
        },
      },
      {
        type: "text",
        text: "What color is the grass and sky?",
      },
    ],
  }
];

const responseWithCitations = await citationsModel.invoke(messagesWithCitations);

console.log(JSON.stringify(responseWithCitations.content, null, 2));
```

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
[
  {
    "type": "text",
    "text": "Based on the document, I can tell you that:\n\n- "
  },
  {
    "type": "text",
    "text": "The grass is green",
    "citations": [
      {
        "type": "char_location",
        "cited_text": "The grass is green. ",
        "document_index": 0,
        "document_title": "My Document",
        "start_char_index": 0,
        "end_char_index": 20
      }
    ]
  },
  {
    "type": "text",
    "text": "\n- "
  },
  {
    "type": "text",
    "text": "The sky is blue",
    "citations": [
      {
        "type": "char_location",
        "cited_text": "The sky is blue.",
        "document_index": 0,
        "document_title": "My Document",
        "start_char_index": 20,
        "end_char_index": 36
      }
    ]
  }
]
```

### Search results example

In this example, we pass in [search results](https://platform.claude.com/docs/en/build-with-claude/search-results) as part of our message content. This allows Claude to cite specific passages or snippets from your own retrieval system in its response.

This approach is helpful when you want Claude to cite information from a specific set of knowledge, but you want to bring your own pre-fetched/cached content directly rather than having the model search or retrieve them automatically.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatAnthropic } from "@langchain/anthropic";

const citationsModel = new ChatAnthropic({
  model: "claude-haiku-4-5-20251001",
});

const messagesWithCitations = [
  {
    type: "user",
    content: [
      {
        type: "search_result",
        title: "History of France",
        source: "https://some-uri.com",
        citations: { enabled: true },
        content: [
          {
            type: "text",
            text: "The capital of France is Paris.",
          },
          {
            type: "text",
            text: "The old capital of France was Lyon.",
          },
        ],
      },
      {
        type: "text",
        text: "What is the capital of France?",
      },
    ],
  },
];

const responseWithCitations = await citationsModel.invoke(messagesWithCitations);

console.log(JSON.stringify(responseWithCitations.content, null, 2));
```

#### Search results from a tool

You can also use a tool to provide search results that the model can cite in its responses. This is well suited for RAG (or [Retrieval-Augmented Generation](https://en.wikipedia.org/wiki/Retrieval-augmented_generation)) workflows where Claude can decide when and where to retrieve information from. When returning this information as [search results](https://platform.claude.com/docs/en/build-with-claude/search-results), it gives Claude the ability to create citations from the material returned from the tool.

Here's how you can create a tool that returns search results in the format expected by Anthropic's citations API:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatAnthropic } from "@langchain/anthropic";
import { tool } from "@langchain/core/tools";

// Create a tool that returns search results
const ragTool = tool(
  () => [
    {
      type: "search_result",
      title: "History of France",
      source: "https://some-uri.com",
      citations: { enabled: true },
      content: [
        {
          type: "text",
          text: "The capital of France is Paris.",
        },
        {
          type: "text",
          text: "The old capital of France was Lyon.",
        },
      ],
    },
    {
      type: "search_result",
      title: "Geography of France",
      source: "https://some-uri.com",
      citations: { enabled: true },
      content: [
        {
          type: "text",
          text: "France is a country in Europe.",
        },
        {
          type: "text",
          text: "The capital of France is Paris.",
        },
      ],
    },
  ],
  {
    name: "my_rag_tool",
    description: "Retrieval system that accesses my knowledge base.",
    schema: z.object({
      query: z.string().describe("query to search in the knowledge base"),
    }),
  }
);

// Create model with search results beta header
const model = new ChatAnthropic({
  model: "claude-haiku-4-5-20251001",
}).bindTools([ragTool]);

const result = await model.invoke([
  {
    role: "user",
    content: "What is the capital of France?",
  },
]);

console.log(JSON.stringify(result.content, null, 2));

```

Learn more about how RAG works in LangChain [here](https://js.langchain.com/docs/concepts/rag/)

[Learn more about tool calling](/oss/javascript/langchain/tools)

### Using with text splitters

Anthropic also lets you specify your own splits using [custom document](https://platform.claude.com/docs/en/build-with-claude/citations#custom-content-documents) types. LangChain text splitters can be used to generate meaningful splits for this purpose. See the below example, where we split the LangChain.js README (a markdown document) and pass it to Claude as context:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatAnthropic } from "@langchain/anthropic";
import { MarkdownTextSplitter } from "@langchain/classic/text_splitter";

function formatToAnthropicDocuments(documents: string[]) {
  return {
    type: "document",
    source: {
      type: "content",
      content: documents.map((document) => ({ type: "text", text: document })),
    },
    citations: { enabled: true },
  };
}

// Pull readme
const readmeResponse = await fetch(
  "https://raw.githubusercontent.com/langchain-ai/langchainjs/master/README.md"
);

const readme = await readmeResponse.text();

// Split into chunks
const splitter = new MarkdownTextSplitter({
  chunkOverlap: 0,
  chunkSize: 50,
});
const documents = await splitter.splitText(readme);

// Construct message
const messageWithSplitDocuments = {
  role: "user",
  content: [
    formatToAnthropicDocuments(documents),
    { type: "text", text: "Give me a link to LangChain's tutorials. Cite your sources" },
  ],
};

// Query LLM
const citationsModelWithSplits = new ChatAnthropic({
  model: "claude-sonnet-4-6",
});
const resWithSplits = await citationsModelWithSplits.invoke([messageWithSplitDocuments]);

console.log(JSON.stringify(resWithSplits.content, null, 2));
```

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
[
  {
    "type": "text",
    "text": "Based on the documentation, I can provide you with a link to LangChain's tutorials:\n\n"
  },
  {
    "type": "text",
    "text": "The tutorials can be found at: https://js.langchain.com/docs/tutorials/",
    "citations": [
      {
        "type": "content_block_location",
        "cited_text": "[Tutorial](https://js.langchain.com/docs/tutorials/) walkthroughs",
        "document_index": 0,
        "document_title": null,
        "start_block_index": 191,
        "end_block_index": 194
      }
    ]
  }
]
```

## Context management

Anthropic supports a context editing feature that will automatically manage the model's context window (e.g., by clearing tool results).

See [Anthropic documentation](https://platform.claude.com/docs/en/build-with-claude/context-editing) for details and configuration options.

**Context management is supported since `@langchain/anthropic@0.3.29`**

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatAnthropic } from "@langchain/anthropic";

const llm = new ChatAnthropic({
  model: "claude-sonnet-4-6",
  clientOptions: {
    defaultHeaders: {
      "anthropic-beta": "context-management-2025-06-27",
    },
  },
  contextManagement: { edits: [{ type: "clear_tool_uses_20250919" }] },
)
const llmWithTools = llm.bindTools([{ type: "web_search_20250305", name: "web_search" }]);
const response = await llmWithTools.invoke("Search for recent developments in AI");
```

***

## API reference

For detailed documentation of all ChatAnthropic features and configurations head to the [API reference](https://api.js.langchain.com/classes/langchain_anthropic.ChatAnthropic.html).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/javascript/integrations/chat/anthropic.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
