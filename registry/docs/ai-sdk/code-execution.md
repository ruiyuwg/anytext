## Code Execution

Anthropic provides a provider-defined code execution tool that gives Claude direct access to a real Python environment allowing it to execute code to inform its responses.

You can enable code execution using the provider-defined code execution tool:

```ts
import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";

const codeExecutionTool = anthropic.tools.codeExecution_20260120();

const result = await generateText({
  model: anthropic("claude-opus-4-20250514"),
  prompt:
    "Calculate the mean and standard deviation of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
  tools: {
    code_execution: codeExecutionTool,
  },
});
```

Three versions are available: `codeExecution_20260120` (recommended, does not
require a beta header, supports Claude Opus 4.6, Sonnet 4.6, Sonnet 4.5, and
Opus 4.5), `codeExecution_20250825` (supports Python and Bash with enhanced
file operations), and `codeExecution_20250522` (supports Bash only).

#### Error Handling

Code execution errors are handled differently depending on whether you're using streaming or non-streaming:

**Non-streaming (`generateText`):**
Code execution errors are delivered as tool result parts in the response:

```ts
const result = await generateText({
  model: anthropic("claude-opus-4-20250514"),
  prompt: "Execute some Python script",
  tools: {
    code_execution: codeExecutionTool,
  },
});

const toolErrors = result.content?.filter(
  (content) => content.type === "tool-error",
);

toolErrors?.forEach((error) => {
  console.error("Tool execution error:", {
    toolName: error.toolName,
    toolCallId: error.toolCallId,
    error: error.error,
  });
});
```

**Streaming (`streamText`):**
Code execution errors are delivered as error parts in the stream:

```ts
const result = await streamText({
  model: anthropic("claude-opus-4-20250514"),
  prompt: "Execute some Python script",
  tools: {
    code_execution: codeExecutionTool,
  },
});
for await (const part of result.textStream) {
  if (part.type === "error") {
    console.log("Code execution error:", part.error);
    // Handle code execution error appropriately
  }
}
```

### Programmatic Tool Calling

[Programmatic Tool Calling](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/programmatic-tool-calling) allows Claude to write code that calls your tools programmatically within a code execution container, rather than requiring round trips through the model for each tool invocation. This reduces latency for multi-tool workflows and decreases token consumption.

To enable programmatic tool calling, use the `allowedCallers` provider option on tools that you want to be callable from within code execution:

```ts highlight="13-17"
import {
  anthropic,
  forwardAnthropicContainerIdFromLastStep,
} from "@ai-sdk/anthropic";
import { generateText, tool, stepCountIs } from "ai";
import { z } from "zod";

const result = await generateText({
  model: anthropic("claude-sonnet-4-5"),
  stopWhen: stepCountIs(10),
  prompt:
    "Get the weather for Tokyo, Sydney, and London, then calculate the average temperature.",
  tools: {
    code_execution: anthropic.tools.codeExecution_20260120(),

    getWeather: tool({
      description: "Get current weather data for a city.",
      inputSchema: z.object({
        city: z.string().describe("Name of the city"),
      }),
      execute: async ({ city }) => {
        // Your weather API implementation
        return { temp: 22, condition: "Sunny" };
      },
      // Enable this tool to be called from within code execution
      providerOptions: {
        anthropic: {
          allowedCallers: ["code_execution_20260120"],
        },
      },
    }),
  },

  // Propagate container ID between steps for code execution continuity
  prepareStep: forwardAnthropicContainerIdFromLastStep,
});
```

In this flow:

1. Claude writes Python code that calls your `getWeather` tool multiple times in parallel
2. The SDK automatically executes your tool and returns results to the code execution container
3. Claude processes the results in code and generates the final response

Programmatic tool calling requires `claude-sonnet-4-6`, `claude-sonnet-4-5`,
`claude-opus-4-6`, or `claude-opus-4-5` models and uses the
`code_execution_20260120` or `code_execution_20250825` tool.

#### Container Persistence

When using programmatic tool calling across multiple steps, you need to preserve the container ID between steps using `prepareStep`. You can use the `forwardAnthropicContainerIdFromLastStep` helper function to do this automatically. The container ID is available in `providerMetadata.anthropic.container.id` after each step completes.
