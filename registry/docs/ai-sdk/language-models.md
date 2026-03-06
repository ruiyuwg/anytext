## Language Models

You can create models that call the [Anthropic Messages API](https://docs.anthropic.com/claude/reference/messages_post) using the provider instance.
The first argument is the model id, e.g. `claude-3-haiku-20240307`.
Some models have multi-modal capabilities.

```ts
const model = anthropic("claude-3-haiku-20240307");
```

You can also use the following aliases for model creation:

- `anthropic.languageModel('claude-3-haiku-20240307')` - Creates a language model
- `anthropic.chat('claude-3-haiku-20240307')` - Alias for `languageModel`
- `anthropic.messages('claude-3-haiku-20240307')` - Alias for `languageModel`

You can use Anthropic language models to generate text with the `generateText` function:

```ts
import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";

const { text } = await generateText({
  model: anthropic("claude-3-haiku-20240307"),
  prompt: "Write a vegetarian lasagna recipe for 4 people.",
});
```

Anthropic language models can also be used in the `streamText` function
and support structured data generation with [`Output`](/docs/reference/ai-sdk-core/output)
(see [AI SDK Core](/docs/ai-sdk-core)).

The following optional provider options are available for Anthropic models:

- `disableParallelToolUse` _boolean_

  Optional. Disables the use of parallel tool calls. Defaults to `false`.

  When set to `true`, the model will only call one tool at a time instead of potentially calling multiple tools in parallel.

- `sendReasoning` _boolean_

  Optional. Include reasoning content in requests sent to the model. Defaults to `true`.

  If you are experiencing issues with the model handling requests involving
  reasoning content, you can set this to `false` to omit them from the request.

- `effort` _"high" | "medium" | "low"_

  Optional. See [Effort section](#effort) for more details.

- `speed` _"fast" | "standard"_

  Optional. See [Fast Mode section](#fast-mode) for more details.

- `thinking` _object_

  Optional. See [Reasoning section](#reasoning) for more details.

- `toolStreaming` _boolean_

  Whether to enable tool streaming (and structured output streaming). Default to `true`.

- `structuredOutputMode` _"outputFormat" | "jsonTool" | "auto"_

  Determines how structured outputs are generated. Optional.
  - `"outputFormat"`: Use the `output_format` parameter to specify the structured output format.
  - `"jsonTool"`: Use a special `"json"` tool to specify the structured output format.
  - `"auto"`: Use `"outputFormat"` when supported, otherwise fall back to `"jsonTool"` (default).

### Structured Outputs and Tool Input Streaming

Tool call streaming is enabled by default. You can opt out by setting the
`toolStreaming` provider option to `false`.

```ts
import { anthropic } from "@ai-sdk/anthropic";
import { streamText, tool } from "ai";
import { z } from "zod";

const result = streamText({
  model: anthropic("claude-sonnet-4-20250514"),
  tools: {
    writeFile: tool({
      description: "Write content to a file",
      inputSchema: z.object({
        path: z.string(),
        content: z.string(),
      }),
      execute: async ({ path, content }) => {
        // Implementation
        return { success: true };
      },
    }),
  },
  prompt: "Write a short story to story.txt",
});
```

### Effort

Anthropic introduced an `effort` option with `claude-opus-4-5` that affects thinking, text responses, and function calls. Effort defaults to `high` and you can set it to `medium` or `low` to save tokens and to lower time-to-last-token latency (TTLT).

```ts highlight="8-10"
import { anthropic, AnthropicLanguageModelOptions } from "@ai-sdk/anthropic";
import { generateText } from "ai";

const { text, usage } = await generateText({
  model: anthropic("claude-opus-4-20250514"),
  prompt: "How many people will live in the world in 2040?",
  providerOptions: {
    anthropic: {
      effort: "low",
    } satisfies AnthropicLanguageModelOptions,
  },
});

console.log(text); // resulting text
console.log(usage); // token usage
```

### Fast Mode

Anthropic supports a [`speed` option](https://code.claude.com/docs/en/fast-mode) for `claude-opus-4-6` that enables faster inference with approximately 2.5x faster output token speeds.

```ts highlight="8-10"
import { anthropic, AnthropicLanguageModelOptions } from "@ai-sdk/anthropic";
import { generateText } from "ai";

const { text } = await generateText({
  model: anthropic("claude-opus-4-6"),
  prompt: "Write a short poem about the sea.",
  providerOptions: {
    anthropic: {
      speed: "fast",
    } satisfies AnthropicLanguageModelOptions,
  },
});
```

The `speed` option accepts `'fast'` or `'standard'` (default behavior).

### Reasoning

Anthropic has reasoning support for `claude-opus-4-20250514`, `claude-sonnet-4-20250514`, and `claude-sonnet-4-5-20250929` models.

You can enable it using the `thinking` provider option
and specifying a thinking budget in tokens.

```ts highlight="4,8-10"
import { anthropic, AnthropicLanguageModelOptions } from "@ai-sdk/anthropic";
import { generateText } from "ai";

const { text, reasoningText, reasoning } = await generateText({
  model: anthropic("claude-opus-4-20250514"),
  prompt: "How many people will live in the world in 2040?",
  providerOptions: {
    anthropic: {
      thinking: { type: "enabled", budgetTokens: 12000 },
    } satisfies AnthropicLanguageModelOptions,
  },
});

console.log(reasoningText); // reasoning text
console.log(reasoning); // reasoning details including redacted reasoning
console.log(text); // text response
```

See [AI SDK UI: Chatbot](/docs/ai-sdk-ui/chatbot#reasoning) for more details
on how to integrate reasoning into your chatbot.

### Context Management

Anthropic's Context Management feature allows you to automatically manage conversation context by clearing tool uses or thinking content when certain conditions are met. This helps optimize token usage and manage long conversations more efficiently.

You can configure context management using the `contextManagement` provider option:

```ts highlight="7-20"
import { anthropic, AnthropicLanguageModelOptions } from "@ai-sdk/anthropic";
import { generateText } from "ai";

const result = await generateText({
  model: anthropic("claude-sonnet-4-5-20250929"),
  prompt: "Continue our conversation...",
  providerOptions: {
    anthropic: {
      contextManagement: {
        edits: [
          {
            type: "clear_tool_uses_20250919",
            trigger: { type: "input_tokens", value: 10000 },
            keep: { type: "tool_uses", value: 5 },
            clearAtLeast: { type: "input_tokens", value: 1000 },
            clearToolInputs: true,
            excludeTools: ["important_tool"],
          },
        ],
      },
    } satisfies AnthropicLanguageModelOptions,
  },
});

// Check what was cleared
console.log(result.providerMetadata?.anthropic?.contextManagement);
```

#### Context Editing

Context editing strategies selectively remove specific content types from earlier in the conversation to reduce token usage without losing the overall conversation flow.

##### Clear Tool Uses

The `clear_tool_uses_20250919` edit type removes old tool call/result pairs from the conversation history:

- **trigger** - Condition that triggers the clearing (e.g., `{ type: 'input_tokens', value: 10000 }` or `{ type: 'tool_uses', value: 10 }`)
- **keep** - How many recent tool uses to preserve (e.g., `{ type: 'tool_uses', value: 5 }`)
- **clearAtLeast** - Minimum amount to clear (e.g., `{ type: 'input_tokens', value: 1000 }`)
- **clearToolInputs** - Whether to clear tool input parameters (boolean)
- **excludeTools** - Array of tool names to never clear

##### Clear Thinking

The `clear_thinking_20251015` edit type removes thinking/reasoning blocks from earlier turns, keeping only the most recent ones:

- **keep** - How many recent thinking turns to preserve (e.g., `{ type: 'thinking_turns', value: 2 }`) or `'all'` to keep everything

```ts
const result = await generateText({
  model: anthropic("claude-opus-4-20250514"),
  prompt: "Continue reasoning...",
  providerOptions: {
    anthropic: {
      thinking: { type: "enabled", budgetTokens: 12000 },
      contextManagement: {
        edits: [
          {
            type: "clear_thinking_20251015",
            keep: { type: "thinking_turns", value: 2 },
          },
        ],
      },
    } satisfies AnthropicLanguageModelOptions,
  },
});
```

#### Compaction

The `compact_20260112` edit type automatically summarizes earlier conversation context when token limits are reached. This is useful for long-running conversations where you want to preserve the essence of earlier exchanges while staying within token limits.

```ts highlight="7-19"
import { anthropic, AnthropicLanguageModelOptions } from "@ai-sdk/anthropic";
import { streamText } from "ai";

const result = streamText({
  model: anthropic("claude-opus-4-6"),
  messages: conversationHistory,
  providerOptions: {
    anthropic: {
      contextManagement: {
        edits: [
          {
            type: "compact_20260112",
            trigger: {
              type: "input_tokens",
              value: 50000, // trigger compaction when input exceeds 50k tokens
            },
            instructions:
              "Summarize the conversation concisely, preserving key decisions and context.",
            pauseAfterCompaction: false,
          },
        ],
      },
    } satisfies AnthropicLanguageModelOptions,
  },
});
```

**Configuration:**

- **trigger** - Condition that triggers compaction (e.g., `{ type: 'input_tokens', value: 50000 }`)
- **instructions** - Custom instructions for how the model should summarize the conversation. Use this to guide the compaction summary towards specific aspects of the conversation you want to preserve.
- **pauseAfterCompaction** - When `true`, the model will pause after generating the compaction summary, allowing you to inspect or process it before continuing. Defaults to `false`.

When compaction occurs, the model generates a summary of the earlier context. This summary appears as a text block with special provider metadata.

##### Detecting Compaction in Streams

When using `streamText`, you can detect compaction summaries by checking the `providerMetadata` on `text-start` events:

```ts
for await (const part of result.fullStream) {
  switch (part.type) {
    case "text-start": {
      const isCompaction =
        part.providerMetadata?.anthropic?.type === "compaction";
      if (isCompaction) {
        console.log("[COMPACTION SUMMARY START]");
      }
      break;
    }
    case "text-delta": {
      process.stdout.write(part.text);
      break;
    }
  }
}
```

##### Compaction in UI Applications

When using `useChat` or other UI hooks, compaction summaries appear as regular text parts with `providerMetadata`. You can style them differently in your UI:

```tsx
{
  message.parts.map((part, index) => {
    if (part.type === "text") {
      const isCompaction =
        (part.providerMetadata?.anthropic as { type?: string } | undefined)
          ?.type === "compaction";

      if (isCompaction) {
        return (
          <div
            key={index}
            className="bg-yellow-100 border-l-4 border-yellow-500 p-2"
          >
            <span className="font-bold">[Compaction Summary]</span>
            <div>{part.text}</div>
          </div>
        );
      }
      return <div key={index}>{part.text}</div>;
    }
  });
}
```

#### Applied Edits Metadata

After generation, you can check which edits were applied in the provider metadata:

```ts
const metadata = result.providerMetadata?.anthropic?.contextManagement;

if (metadata?.appliedEdits) {
  metadata.appliedEdits.forEach((edit) => {
    if (edit.type === "clear_tool_uses_20250919") {
      console.log(`Cleared ${edit.clearedToolUses} tool uses`);
      console.log(`Freed ${edit.clearedInputTokens} tokens`);
    } else if (edit.type === "clear_thinking_20251015") {
      console.log(`Cleared ${edit.clearedThinkingTurns} thinking turns`);
      console.log(`Freed ${edit.clearedInputTokens} tokens`);
    } else if (edit.type === "compact_20260112") {
      console.log("Compaction was applied");
    }
  });
}
```

For more details, see [Anthropic's Context Management documentation](https://docs.anthropic.com/en/docs/build-with-claude/context-management).

### Cache Control

In the messages and message parts, you can use the `providerOptions` property to set cache control breakpoints.
You need to set the `anthropic` property in the `providerOptions` object to `{ cacheControl: { type: 'ephemeral' } }` to set a cache control breakpoint.

The cache creation input tokens are then returned in the `providerMetadata` object
for `generateText`, again under the `anthropic` property.
When you use `streamText`, the response contains a promise
that resolves to the metadata. Alternatively you can receive it in the
`onFinish` callback.

```ts highlight="8,18-20,29-30"
import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";

const errorMessage = "... long error message ...";

const result = await generateText({
  model: anthropic("claude-sonnet-4-5"),
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "You are a JavaScript expert." },
        {
          type: "text",
          text: `Error message: ${errorMessage}`,
          providerOptions: {
            anthropic: { cacheControl: { type: "ephemeral" } },
          },
        },
        { type: "text", text: "Explain the error message." },
      ],
    },
  ],
});

console.log(result.text);
console.log(result.providerMetadata?.anthropic);
// e.g. { cacheCreationInputTokens: 2118 }
```

You can also use cache control on system messages by providing multiple system messages at the head of your messages array:

```ts highlight="3,7-9"
const result = await generateText({
  model: anthropic("claude-sonnet-4-5"),
  messages: [
    {
      role: "system",
      content: "Cached system message part",
      providerOptions: {
        anthropic: { cacheControl: { type: "ephemeral" } },
      },
    },
    {
      role: "system",
      content: "Uncached system message part",
    },
    {
      role: "user",
      content: "User prompt",
    },
  ],
});
```

Cache control for tools:

```ts
const result = await generateText({
  model: anthropic("claude-haiku-4-5"),
  tools: {
    cityAttractions: tool({
      inputSchema: z.object({ city: z.string() }),
      providerOptions: {
        anthropic: {
          cacheControl: { type: "ephemeral" },
        },
      },
    }),
  },
  messages: [
    {
      role: "user",
      content: "User prompt",
    },
  ],
});
```

#### Longer cache TTL

Anthropic also supports a longer 1-hour cache duration.

Here's an example:

```ts
const result = await generateText({
  model: anthropic("claude-haiku-4-5"),
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "Long cached message",
          providerOptions: {
            anthropic: {
              cacheControl: { type: "ephemeral", ttl: "1h" },
            },
          },
        },
      ],
    },
  ],
});
```

#### Limitations

The minimum cacheable prompt length is:

- 4096 tokens for Claude Opus 4.5
- 1024 tokens for Claude Opus 4.1, Claude Opus 4, Claude Sonnet 4.5, Claude Sonnet 4, Claude Sonnet 3.7, and Claude Opus 3
- 4096 tokens for Claude Haiku 4.5
- 2048 tokens for Claude Haiku 3.5 and Claude Haiku 3

Shorter prompts cannot be cached, even if marked with `cacheControl`. Any requests to cache fewer than this number of tokens will be processed without caching.

For more on prompt caching with Anthropic, see [Anthropic's Cache Control documentation](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching).

Because the `UIMessage` type (used by AI SDK UI hooks like `useChat`) does not
support the `providerOptions` property, you can use `convertToModelMessages`
first before passing the messages to functions like `generateText` or
`streamText`. For more details on `providerOptions` usage, see
[here](/docs/foundations/prompts#provider-options).

### Bash Tool

The Bash Tool allows running bash commands. Here's how to create and use it:

```ts
const bashTool = anthropic.tools.bash_20250124({
  execute: async ({ command, restart }) => {
    // Implement your bash command execution logic here
    // Return the result of the command execution
  },
});
```

Parameters:

- `command` (string): The bash command to run. Required unless the tool is being restarted.
- `restart` (boolean, optional): Specifying true will restart this tool.

  Two versions are available: `bash_20250124` (recommended) and `bash_20241022`.
  Only certain Claude versions are supported.

### Memory Tool

The [Memory Tool](https://docs.claude.com/en/docs/agents-and-tools/tool-use/memory-tool) allows Claude to use a local memory, e.g. in the filesystem.
Here's how to create it:

```ts
const memory = anthropic.tools.memory_20250818({
  execute: async (action) => {
    // Implement your memory command execution logic here
    // Return the result of the command execution
  },
});
```

Only certain Claude versions are supported.

### Text Editor Tool

The Text Editor Tool provides functionality for viewing and editing text files.

```ts
const tools = {
  str_replace_based_edit_tool: anthropic.tools.textEditor_20250728({
    maxCharacters: 10000, // optional
    async execute({ command, path, old_str, new_str, insert_text }) {
      // ...
    },
  }),
} satisfies ToolSet;
```

Different models support different versions of the tool:

- `textEditor_20250728` - For Claude Sonnet 4, Opus 4, and Opus 4.1 (recommended)
- `textEditor_20250124` - For Claude Sonnet 3.7
- `textEditor_20241022` - For Claude Sonnet 3.5

Note: `textEditor_20250429` is deprecated. Use `textEditor_20250728` instead.

Parameters:

- `command` ('view' | 'create' | 'str_replace' | 'insert' | 'undo_edit'): The command to run. Note: `undo_edit` is only available in Claude 3.5 Sonnet and earlier models.
- `path` (string): Absolute path to file or directory, e.g. `/repo/file.py` or `/repo`.
- `file_text` (string, optional): Required for `create` command, with the content of the file to be created.
- `insert_line` (number, optional): Required for `insert` command. The line number after which to insert the new string.
- `new_str` (string, optional): New string for `str_replace` command.
- `insert_text` (string, optional): Required for `insert` command, containing the text to insert.
- `old_str` (string, optional): Required for `str_replace` command, containing the string to replace.
- `view_range` (number\[], optional): Optional for `view` command to specify line range to show.

### Computer Tool

The Computer Tool enables control of keyboard and mouse actions on a computer:

```ts
const computerTool = anthropic.tools.computer_20251124({
  displayWidthPx: 1920,
  displayHeightPx: 1080,
  displayNumber: 0, // Optional, for X11 environments
  enableZoom: true, // Optional, enables the zoom action

  execute: async ({ action, coordinate, text, region }) => {
    // Implement your computer control logic here
    // Return the result of the action

    // Example code:
    switch (action) {
      case "screenshot": {
        // multipart result:
        return {
          type: "image",
          data: fs
            .readFileSync("./data/screenshot-editor.png")
            .toString("base64"),
        };
      }
      case "zoom": {
        // region is [x1, y1, x2, y2] defining the area to zoom into
        return {
          type: "image",
          data: fs.readFileSync("./data/zoomed-region.png").toString("base64"),
        };
      }
      default: {
        console.log("Action:", action);
        console.log("Coordinate:", coordinate);
        console.log("Text:", text);
        return `executed ${action}`;
      }
    }
  },

  // map to tool result content for LLM consumption:
  toModelOutput({ output }) {
    return typeof output === "string"
      ? [{ type: "text", text: output }]
      : [{ type: "image", data: output.data, mediaType: "image/png" }];
  },
});
```

Use `computer_20251124` for Claude Opus 4.5 which supports the zoom action.
Use `computer_20250124` for Claude Sonnet 4.5, Haiku 4.5, Opus 4.1, Sonnet 4,
Opus 4, and Sonnet 3.7.

Parameters:

- `action` ('key' | 'type' | 'mouse_move' | 'left_click' | 'left_click_drag' | 'right_click' | 'middle_click' | 'double_click' | 'screenshot' | 'cursor_position' | 'zoom'): The action to perform. The `zoom` action is only available with `computer_20251124`.
- `coordinate` (number\[], optional): Required for `mouse_move` and `left_click_drag` actions. Specifies the (x, y) coordinates.
- `text` (string, optional): Required for `type` and `key` actions.
- `region` (number\[], optional): Required for `zoom` action. Specifies `[x1, y1, x2, y2]` coordinates for the area to inspect.
- `displayWidthPx` (number): The width of the display in pixels.
- `displayHeightPx` (number): The height of the display in pixels.
- `displayNumber` (number, optional): The display number for X11 environments.
- `enableZoom` (boolean, optional): Enable the zoom action. Only available with `computer_20251124`. Default: `false`.

### Web Search Tool

Anthropic provides a provider-defined web search tool that gives Claude direct access to real-time web content, allowing it to answer questions with up-to-date information beyond its knowledge cutoff.

You can enable web search using the provider-defined web search tool:

```ts
import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";

const webSearchTool = anthropic.tools.webSearch_20250305({
  maxUses: 5,
});

const result = await generateText({
  model: anthropic("claude-opus-4-20250514"),
  prompt: "What are the latest developments in AI?",
  tools: {
    web_search: webSearchTool,
  },
});
```

Web search must be enabled in your organization's [Console
settings](https://console.anthropic.com/settings/privacy).

#### Configuration Options

The web search tool supports several configuration options:

- **maxUses** _number_

  Maximum number of web searches Claude can perform during the conversation.

- **allowedDomains** _string\[]_

  Optional list of domains that Claude is allowed to search. If provided, searches will be restricted to these domains.

- **blockedDomains** _string\[]_

  Optional list of domains that Claude should avoid when searching.

- **userLocation** _object_

  Optional user location information to provide geographically relevant search results.

```ts
const webSearchTool = anthropic.tools.webSearch_20250305({
  maxUses: 3,
  allowedDomains: ["techcrunch.com", "wired.com"],
  blockedDomains: ["example-spam-site.com"],
  userLocation: {
    type: "approximate",
    country: "US",
    region: "California",
    city: "San Francisco",
    timezone: "America/Los_Angeles",
  },
});

const result = await generateText({
  model: anthropic("claude-opus-4-20250514"),
  prompt: "Find local news about technology",
  tools: {
    web_search: webSearchTool,
  },
});
```

### Web Fetch Tool

Anthropic provides a provider-defined web fetch tool that allows Claude to retrieve content from specific URLs. This is useful when you want Claude to analyze or reference content from a particular webpage or document.

You can enable web fetch using the provider-defined web fetch tool:

```ts
import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";

const result = await generateText({
  model: anthropic("claude-sonnet-4-0"),
  prompt:
    "What is this page about? https://en.wikipedia.org/wiki/Maglemosian_culture",
  tools: {
    web_fetch: anthropic.tools.webFetch_20250910({ maxUses: 1 }),
  },
});
```

### Tool Search

Anthropic provides provider-defined tool search tools that enable Claude to work with hundreds or thousands of tools by dynamically discovering and loading them on-demand. Instead of loading all tool definitions into the context window upfront, Claude searches your tool catalog and loads only the tools it needs.

There are two variants:

- **BM25 Search** - Uses natural language queries to find tools
- **Regex Search** - Uses regex patterns (Python `re.search()` syntax) to find tools

#### Basic Usage

```ts
import { anthropic } from "@ai-sdk/anthropic";
import { generateText, tool } from "ai";
import { z } from "zod";

const result = await generateText({
  model: anthropic("claude-sonnet-4-5"),
  prompt: "What is the weather in San Francisco?",
  tools: {
    toolSearch: anthropic.tools.toolSearchBm25_20251119(),

    get_weather: tool({
      description: "Get the current weather at a specific location",
      inputSchema: z.object({
        location: z.string().describe("The city and state"),
      }),
      execute: async ({ location }) => ({
        location,
        temperature: 72,
        condition: "Sunny",
      }),
      // Defer tool here - Claude discovers these via the tool search tool
      providerOptions: {
        anthropic: { deferLoading: true },
      },
    }),
  },
});
```

#### Using Regex Search

For more precise tool matching, you can use the regex variant:

```ts
const result = await generateText({
  model: anthropic("claude-sonnet-4-5"),
  prompt: "Get the weather data",
  tools: {
    toolSearch: anthropic.tools.toolSearchRegex_20251119(),
    // ... deferred tools
  },
});
```

Claude will construct regex patterns like `weather|temperature|forecast` to find matching tools.

#### Custom Tool Search

You can implement your own tool search logic (e.g., using embeddings or semantic search) by returning `tool-reference` content blocks via `toModelOutput`:

```ts
import { anthropic } from "@ai-sdk/anthropic";
import { generateText, tool } from "ai";
import { z } from "zod";

const result = await generateText({
  model: anthropic("claude-sonnet-4-5"),
  prompt: "What is the weather in San Francisco?",
  tools: {
    // Custom search tool
    searchTools: tool({
      description: "Search for tools by keyword",
      inputSchema: z.object({ query: z.string() }),
      execute: async ({ query }) => {
        // Your custom search logic (embeddings, fuzzy match, etc.)
        const allTools = ["get_weather", "get_forecast", "get_temperature"];
        return allTools.filter((name) => name.includes(query.toLowerCase()));
      },
      toModelOutput: ({ output }) => ({
        type: "content",
        value: (output as string[]).map((toolName) => ({
          type: "custom" as const,
          providerOptions: {
            anthropic: {
              type: "tool-reference",
              toolName,
            },
          },
        })),
      }),
    }),

    // Deferred tools
    get_weather: tool({
      description: "Get the current weather",
      inputSchema: z.object({ location: z.string() }),
      execute: async ({ location }) => ({ location, temperature: 72 }),
      providerOptions: {
        anthropic: { deferLoading: true },
      },
    }),
  },
});
```

This sends `tool_reference` blocks to Anthropic, which loads the corresponding deferred tool schemas into Claude's context.

### MCP Connectors

Anthropic supports connecting to [MCP servers](https://docs.claude.com/en/docs/agents-and-tools/mcp-connector) as part of their execution.

You can enable this feature with the `mcpServers` provider option:

```ts
import { anthropic, AnthropicLanguageModelOptions } from "@ai-sdk/anthropic";
import { generateText } from "ai";

const result = await generateText({
  model: anthropic("claude-sonnet-4-5"),
  prompt: `Call the echo tool with "hello world". what does it respond with back?`,
  providerOptions: {
    anthropic: {
      mcpServers: [
        {
          type: "url",
          name: "echo",
          url: "https://echo.mcp.inevitable.fyi/mcp",
          // optional: authorization token
          authorizationToken: mcpAuthToken,
          // optional: tool configuration
          toolConfiguration: {
            enabled: true,
            allowedTools: ["echo"],
          },
        },
      ],
    } satisfies AnthropicLanguageModelOptions,
  },
});
```

The tool calls and results are dynamic, i.e. the input and output schemas are not known.

#### Configuration Options

The web fetch tool supports several configuration options:

- **maxUses** _number_

  The maxUses parameter limits the number of web fetches performed.

- **allowedDomains** _string\[]_

  Only fetch from these domains.

- **blockedDomains** _string\[]_

  Never fetch from these domains.

- **citations** _object_

  Unlike web search where citations are always enabled, citations are optional for web fetch. Set `"citations": {"enabled": true}` to enable Claude to cite specific passages from fetched documents.

- **maxContentTokens** _number_

  The maxContentTokens parameter limits the amount of content that will be included in the context.

#### Error Handling

Web search errors are handled differently depending on whether you're using streaming or non-streaming:

**Non-streaming (`generateText`):**
Web search errors throw exceptions that you can catch:

```ts
try {
  const result = await generateText({
    model: anthropic("claude-opus-4-20250514"),
    prompt: "Search for something",
    tools: {
      web_search: webSearchTool,
    },
  });
} catch (error) {
  if (error.message.includes("Web search failed")) {
    console.log("Search error:", error.message);
    // Handle search error appropriately
  }
}
```

**Streaming (`streamText`):**
Web search errors are delivered as error parts in the stream:

```ts
const result = await streamText({
  model: anthropic("claude-opus-4-20250514"),
  prompt: "Search for something",
  tools: {
    web_search: webSearchTool,
  },
});

for await (const part of result.textStream) {
  if (part.type === "error") {
    console.log("Search error:", part.error);
    // Handle search error appropriately
  }
}
```
