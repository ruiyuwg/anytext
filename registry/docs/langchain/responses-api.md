## Responses API

**Compatibility**

The below points apply to `@langchain/openai>=0.4.5-rc.0`.

OpenAI supports a [Responses](https://platform.openai.com/docs/guides/responses-vs-chat-completions) API that is oriented toward building [agentic](/oss/javascript/langchain/agents) applications. It includes a suite of [built-in tools](https://platform.openai.com/docs/guides/tools?api-mode=responses), including web and file search. It also supports management of [conversation state](https://platform.openai.com/docs/guides/conversation-state?api-mode=responses), allowing you to continue a conversational thread without explicitly passing in previous messages.

`ChatOpenAI` will route to the Responses API if one of these features is used. You can also specify `useResponsesApi: true` when instantiating `ChatOpenAI`.

### Built-in tools

Equipping [`ChatOpenAI`](https://reference.langchain.com/javascript/langchain-openai/ChatOpenAI) with built-in tools will ground its responses with outside information, such as via context in files or the web. The [AIMessage](/oss/javascript/langchain/messages/#aimessage) generated from the model will include information about the built-in tool invocation.

#### Web search

To trigger a web search, pass `{"type": "web_search_preview"}` to the model as you would another tool.

**You can also pass built-in tools as invocation params:**

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
llm.invoke("...", { tools: [{ type: "web_search_preview" }] });
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({ model: "gpt-4.1-mini" }).bindTools([
  { type: "web_search_preview" },
]);

await llm.invoke("What was a positive news story from today?");

```

Note that the response includes structured [content blocks](/oss/javascript/langchain/messages/#message-content) that include both the text of the response and OpenAI [annotations](https://platform.openai.com/docs/guides/tools-web-search?api-mode=responses#output-and-citations) citing its sources. The output message will also contain information from any tool invocations.

#### File search

To trigger a file search, pass a [file search tool](https://platform.openai.com/docs/guides/tools-file-search) to the model as you would another tool. You will need to populate an OpenAI-managed vector store and include the vector store ID in the tool definition. See [OpenAI documentation](https://platform.openai.com/docs/guides/tools-file-search) for more details.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({ model: "gpt-4.1-mini" }).bindTools([
  { type: "file_search", vector_store_ids: ["vs..."] },
]);

await llm.invoke("Is deep research by OpenAI?");

```

As with [web search](#web-search), the response will include content blocks with citations. It will also include information from the built-in tool invocations.

#### Computer use

ChatOpenAI supports the `computer-use-preview` model, which is a specialized model for the built-in computer use tool. To enable, pass a [computer use tool](https://platform.openai.com/docs/guides/tools-computer-use) as you would pass another tool.

Currently tool outputs for computer use are present in `AIMessage.additional_kwargs.tool_outputs`. To reply to the computer use tool call, you need to set `additional_kwargs.type: "computer_call_output"` while creating a corresponding `ToolMessage`.

See [OpenAI documentation](https://platform.openai.com/docs/guides/tools-computer-use) for more details.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { AIMessage, ToolMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import * as fs from "node:fs/promises";

const findComputerCall = (message: AIMessage) => {
  const toolOutputs = message.additional_kwargs.tool_outputs as
    | { type: "computer_call"; call_id: string; action: { type: string } }[]
    | undefined;

  return toolOutputs?.find((toolOutput) => toolOutput.type === "computer_call");
};

const llm = new ChatOpenAI({ model: "computer-use-preview" })
  .bindTools([
    {
      type: "computer-preview",
      display_width: 1024,
      display_height: 768,
      environment: "browser",
    },
  ])
  .bind({ truncation: "auto" });

let message = await llm.invoke("Check the latest OpenAI news on bing.com.");
const computerCall = findComputerCall(message);

if (computerCall) {
  // Act on a computer call action
  const screenshot = await fs.readFile("./screenshot.png", {
    encoding: "base64",
  });

  message = await llm.invoke(
    [
      new ToolMessage({
        additional_kwargs: { type: "computer_call_output" },
        tool_call_id: computerCall.call_id,
        content: [
          {
            type: "computer_screenshot",
            image_url: `data:image/png;base64,${screenshot}`,
          },
        ],
      }),
    ],
    { previous_response_id: message.response_metadata["id"] }
  );
}

```

#### Code interpreter

ChatOpenAI allows you to use the built-in [code interpreter tool](https://platform.openai.com/docs/guides/tools-code-interpreter) to support the sandboxed generation and execution of code.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({
  model: "o4-mini",
  useResponsesApi: true,
});

const llmWithTools = llm.bindToools([
  {
    type: "code_interpreter",
    // Creates a new container
    container: { type: "auto" }
  },
]);

const response = await llmWithTools.invoke(
  "Write and run code to answer the question: what is 3^3?"
);
```

Note that the above command creates a new [container](https://platform.openai.com/docs/guides/tools-code-interpreter#containers). We can reuse containers across calls by specifying an existing container ID.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const tool_outputs: Record<string, any>[] = response.additional_kwargs.tool_outputs
const container_id = tool_outputs[0].container_id

const llmWithTools = llm.bindTools([
  {
    type: "code_interpreter",
    // Reuses container from the last call
    container: container_id,
  },
]);
```

#### Remote MCP

ChatOpenAI supports the built-in [remote MCP tool](https://platform.openai.com/docs/guides/tools-remote-mcp) that allows for model-generated calls to MCP servers to happen on OpenAI servers.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({
    model: "o4-mini",
    useResponsesApi: true,
});

const llmWithMcp = llm.bindTools([
    {
        type: "mcp",
        server_label: "deepwiki",
        server_url: "https://mcp.deepwiki.com/mcp",
        require_approval: "never"
    }
]);

const response = await llmWithMcp.invoke(
    "What transport protocols does the 2025-03-26 version of the MCP spec (modelcontextprotocol/modelcontextprotocol) support?"
);
```

**MCP Approvals**

When instructed, OpenAI will request approval before making calls to a remote MCP server.

In the above command, we instructed the model to never require approval. We can also configure the model to always request approval, or to always request approval for specific tools:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
...
const llmWithMcp = llm.bindTools([
  {
    type: "mcp",
    server_label: "deepwiki",
    server_url: "https://mcp.deepwiki.com/mcp",
    require_approval: {
      always: {
        tool_names: ["read_wiki_structure"],
      },
    },
  },
]);
const response = await llmWithMcp.invoke(
    "What transport protocols does the 2025-03-26 version of the MCP spec (modelcontextprotocol/modelcontextprotocol) support?"
);
```

With this configuration, responses can contain tool outputs typed as `mcp_approval_request`. To submit approvals for an approval request, you can structure it into a content block in a followup message:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const approvals = [];
if (Array.isArray(response.additional_kwargs.tool_outputs)) {
  for (const content of response.additional_kwargs.tool_outputs) {
    if (content.type === "mcp_approval_request") {
      approvals.push({
        type: "mcp_approval_response",
        approval_request_id: content.id,
        approve: true,
      });
    }
  }
}

const nextResponse = await model.invoke(
  [
    response,
    new HumanMessage({ content: approvals }),
  ],
);
```

#### Image generation

ChatOpenAI allows you to bring the built-in [image generation tool](https://platform.openai.com/docs/guides/tools-image-generation) to create images as apart of multi-turn conversations through the responses API.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({
  model: "gpt-4.1",
  useResponsesApi: true,
});

const llmWithImageGeneration = llm.bindTools([
  {
    type: "image_generation",
    quality: "low",
  }
]);

const response = await llmWithImageGeneration.invoke(
  "Draw a random short word in green font."
)
```

### Reasoning models

**Compatibility**: The below points apply to `@langchain/openai>=0.4.0`.

When using reasoning models like `o1`, the default method for `withStructuredOutput` is OpenAI's built-in method for structured output (equivalent to passing `method: "jsonSchema"` as an option into `withStructuredOutput`). JSON schema mostly works the same as other models, but with one important caveat: when defining schema, `z.optional()` is not respected, and you should instead use `z.nullable()`.

Here's an example:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import * as z from "zod";
import { ChatOpenAI } from "@langchain/openai";

// Will not work
const reasoningModelSchemaOptional = z.object({
  color: z.optional(z.string()).describe("A color mentioned in the input"),
});

const reasoningModelOptionalSchema = new ChatOpenAI({
  model: "o1",
}).withStructuredOutput(reasoningModelSchemaOptional, {
  name: "extract_color",
});

await reasoningModelOptionalSchema.invoke([{
  role: "user",
  content: `I am 6'5" tall and love fruit.`
}]);
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{ color: 'No color mentioned' }
```

And here's an example with `z.nullable()`:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import * as z from "zod";
import { ChatOpenAI } from "@langchain/openai";

// Will not work
const reasoningModelSchemaNullable = z.object({
  color: z.nullable(z.string()).describe("A color mentioned in the input"),
});

const reasoningModelNullableSchema = new ChatOpenAI({
  model: "o1",
}).withStructuredOutput(reasoningModelSchemaNullable, {
  name: "extract_color",
});

await reasoningModelNullableSchema.invoke([{
  role: "user",
  content: `I am 6'5" tall and love fruit.`
}]);
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{ color: null }
```
