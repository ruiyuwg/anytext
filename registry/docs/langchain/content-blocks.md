## Content blocks

One key difference to note between Anthropic models and most others is that the contents of a single Anthropic [`AIMessage`](https://reference.langchain.com/javascript/langchain-core/messages/AIMessage) can either be a single string or a **list of content blocks**. For example when an Anthropic model [calls a tool](/oss/javascript/langchain/tools), the tool invocation is part of the message content (as well as being exposed in the standardized `AIMessage.tool_calls` field):

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatAnthropic } from "@langchain/anthropic";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import * as z from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const calculatorSchema = z.object({
  operation: z
    .enum(["add", "subtract", "multiply", "divide"])
    .describe("The type of operation to execute."),
  number1: z.number().describe("The first number to operate on."),
  number2: z.number().describe("The second number to operate on."),
});

const calculatorTool = {
  name: "calculator",
  description: "A simple calculator tool",
  input_schema: zodToJsonSchema(calculatorSchema),
};

const toolCallingLlm = new ChatAnthropic({
  model: "claude-haiku-4-5-20251001",
}).bindTools([calculatorTool]);

const toolPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are a helpful assistant who always needs to use a calculator.",
  ],
  ["human", "{input}"],
]);

// Chain your prompt and model together
const toolCallChain = toolPrompt.pipe(toolCallingLlm);

await toolCallChain.invoke({
  input: "What is 2 + 2?",
});
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
AIMessage {
  "id": "msg_01DZGs9DyuashaYxJ4WWpWUP",
  "content": [
    {
      "type": "text",
      "text": "Here is the calculation for 2 + 2:"
    },
    {
      "type": "tool_use",
      "id": "toolu_01SQXBamkBr6K6NdHE7GWwF8",
      "name": "calculator",
      "input": {
        "number1": 2,
        "number2": 2,
        "operation": "add"
      }
    }
  ],
  "additional_kwargs": {
    "id": "msg_01DZGs9DyuashaYxJ4WWpWUP",
    "type": "message",
    "role": "assistant",
    "model": "claude-haiku-4-5-20251001",
    "stop_reason": "tool_use",
    "stop_sequence": null,
    "usage": {
      "input_tokens": 449,
      "output_tokens": 100
    }
  },
  "response_metadata": {
    "id": "msg_01DZGs9DyuashaYxJ4WWpWUP",
    "model": "claude-haiku-4-5-20251001",
    "stop_reason": "tool_use",
    "stop_sequence": null,
    "usage": {
      "input_tokens": 449,
      "output_tokens": 100
    },
    "type": "message",
    "role": "assistant"
  },
  "tool_calls": [
    {
      "name": "calculator",
      "args": {
        "number1": 2,
        "number2": 2,
        "operation": "add"
      },
      "id": "toolu_01SQXBamkBr6K6NdHE7GWwF8",
      "type": "tool_call"
    }
  ],
  "invalid_tool_calls": [],
  "usage_metadata": {
    "input_tokens": 449,
    "output_tokens": 100,
    "total_tokens": 549
  }
}
```
