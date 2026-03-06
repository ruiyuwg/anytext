### Responses Models

You can use the OpenAI responses API with the `openai(modelId)` or `openai.responses(modelId)` factory methods. It is the default API that is used by the OpenAI provider (since AI SDK 5).

```ts
const model = openai("gpt-5");
```

Further configuration can be done using OpenAI provider options.
You can validate the provider options using the `OpenAILanguageModelResponsesOptions` type.

```ts
import { openai, OpenAILanguageModelResponsesOptions } from "@ai-sdk/openai";
import { generateText } from "ai";

const result = await generateText({
  model: openai("gpt-5"), // or openai.responses('gpt-5')
  providerOptions: {
    openai: {
      parallelToolCalls: false,
      store: false,
      user: "user_123",
      // ...
    } satisfies OpenAILanguageModelResponsesOptions,
  },
  // ...
});
```

The following provider options are available:

- **parallelToolCalls** _boolean_
  Whether to use parallel tool calls. Defaults to `true`.

- **store** _boolean_

  Whether to store the generation. Defaults to `true`.

- **maxToolCalls** _integer_
  The maximum number of total calls to built-in tools that can be processed in a response.
  This maximum number applies across all built-in tool calls, not per individual tool.
  Any further attempts to call a tool by the model will be ignored.

- **metadata** _Record\<string, string>_
  Additional metadata to store with the generation.

- **conversation** _string_
  The ID of the OpenAI Conversation to continue.
  You must create a conversation first via the [OpenAI API](https://platform.openai.com/docs/api-reference/conversations/create).
  Cannot be used in conjunction with `previousResponseId`.
  Defaults to `undefined`.

- **previousResponseId** _string_
  The ID of the previous response. You can use it to continue a conversation. Defaults to `undefined`.

- **instructions** _string_
  Instructions for the model.
  They can be used to change the system or developer message when continuing a conversation using the `previousResponseId` option.
  Defaults to `undefined`.

- **logprobs** _boolean | number_
  Return the log probabilities of the tokens. Including logprobs will increase the response size and can slow down response times. However, it can be useful to better understand how the model is behaving. Setting to `true` returns the log probabilities of the tokens that were generated. Setting to a number (1-20) returns the log probabilities of the top n tokens that were generated.

- **user** _string_
  A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. Defaults to `undefined`.

- **reasoningEffort** _'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh'_
  Reasoning effort for reasoning models. Defaults to `medium`. If you use `providerOptions` to set the `reasoningEffort` option, this model setting will be ignored.

  The 'none' type for `reasoningEffort` is only available for OpenAI's GPT-5.1
  models. Also, the 'xhigh' type for `reasoningEffort` is only available for
  OpenAI's GPT-5.1-Codex-Max model. Setting `reasoningEffort` to 'none' or
  'xhigh' with unsupported models will result in an error.

- **reasoningSummary** _'auto' | 'detailed'_
  Controls whether the model returns its reasoning process. Set to `'auto'` for a condensed summary, `'detailed'` for more comprehensive reasoning. Defaults to `undefined` (no reasoning summaries). When enabled, reasoning summaries appear in the stream as events with type `'reasoning'` and in non-streaming responses within the `reasoning` field.

- **strictJsonSchema** _boolean_
  Whether to use strict JSON schema validation. Defaults to `true`.

  OpenAI structured outputs have several
  [limitations](https://openai.com/index/introducing-structured-outputs-in-the-api),
  in particular around the [supported
  schemas](https://platform.openai.com/docs/guides/structured-outputs/supported-schemas),
  and are therefore opt-in. For example, optional schema properties are not
  supported. You need to change Zod `.nullish()` and `.optional()` to
  `.nullable()`.

- **serviceTier** _'auto' | 'flex' | 'priority' | 'default'_
  Service tier for the request. Set to 'flex' for 50% cheaper processing
  at the cost of increased latency (available for o3, o4-mini, and gpt-5 models).
  Set to 'priority' for faster processing with Enterprise access (available for gpt-4, gpt-5, gpt-5-mini, o3, o4-mini; gpt-5-nano is not supported).

  Defaults to 'auto'.

- **textVerbosity** _'low' | 'medium' | 'high'_
  Controls the verbosity of the model's response. Lower values result in more concise responses,
  while higher values result in more verbose responses. Defaults to `'medium'`.

- **include** _Array\<string>_
  Specifies additional content to include in the response. Supported values:
  `['file_search_call.results']` for including file search results in responses.
  `['message.output_text.logprobs']` for logprobs.
  Defaults to `undefined`.

- **truncation** _string_
  The truncation strategy to use for the model response.
  - Auto: If the input to this Response exceeds the model's context window size, the model will truncate the response to fit the context window by dropping items from the beginning of the conversation.
  - disabled (default): If the input size will exceed the context window size for a model, the request will fail with a 400 error.

- **promptCacheKey** _string_
  A cache key for manual prompt caching control. Used by OpenAI to cache responses for similar requests to optimize your cache hit rates.

- **promptCacheRetention** _'in_memory' | '24h'_
  The retention policy for the prompt cache. Set to `'24h'` to enable extended prompt caching, which keeps cached prefixes active for up to 24 hours. Defaults to `'in_memory'` for standard prompt caching. Note: `'24h'` is currently only available for the 5.1 series of models.

- **safetyIdentifier** _string_
  A stable identifier used to help detect users of your application that may be violating OpenAI's usage policies. The IDs should be a string that uniquely identifies each user.

- **systemMessageMode** _'system' | 'developer' | 'remove'_
  Controls the role of the system message when making requests. By default (when omitted), for models that support reasoning the `system` message is automatically converted to a `developer` message. Setting `systemMessageMode` to `system` passes the system message as a system-level instruction; `developer` passes it as a developer message; `remove` omits the system message from the request.

- **forceReasoning** _boolean_
  Force treating this model as a reasoning model. This is useful for "stealth" reasoning models (e.g. via a custom baseURL) where the model ID is not recognized by the SDK's allowlist. When enabled, the SDK applies reasoning-model parameter compatibility rules and defaults `systemMessageMode` to `developer` unless overridden.

The OpenAI responses provider also returns provider-specific metadata:

For Responses models, you can type this metadata using `OpenaiResponsesProviderMetadata`:

```ts
import { openai, type OpenaiResponsesProviderMetadata } from "@ai-sdk/openai";
import { generateText } from "ai";

const result = await generateText({
  model: openai("gpt-5"),
});

const providerMetadata = result.providerMetadata as
  | OpenaiResponsesProviderMetadata
  | undefined;

const { responseId, logprobs, serviceTier } = providerMetadata?.openai ?? {};

// responseId can be used to continue a conversation (previousResponseId).
console.log(responseId);
```

The following OpenAI-specific metadata may be returned:

- **responseId** _string | null | undefined_
  The ID of the response. Can be used to continue a conversation.
- **logprobs** _(optional)_
  Log probabilities of output tokens (when enabled).
- **serviceTier** _(optional)_
  Service tier information returned by the API.

#### Reasoning Output

For reasoning models like `gpt-5`, you can enable reasoning summaries to see the model's thought process. Different models support different summarizers—for example, `o4-mini` supports detailed summaries. Set `reasoningSummary: "auto"` to automatically receive the richest level available.

```ts highlight="8-9,16"
import {
  openai,
  type OpenAILanguageModelResponsesOptions,
} from "@ai-sdk/openai";
import { streamText } from "ai";

const result = streamText({
  model: openai("gpt-5"),
  prompt: "Tell me about the Mission burrito debate in San Francisco.",
  providerOptions: {
    openai: {
      reasoningSummary: "detailed", // 'auto' for condensed or 'detailed' for comprehensive
    } satisfies OpenAILanguageModelResponsesOptions,
  },
});

for await (const part of result.fullStream) {
  if (part.type === "reasoning") {
    console.log(`Reasoning: ${part.textDelta}`);
  } else if (part.type === "text-delta") {
    process.stdout.write(part.textDelta);
  }
}
```

For non-streaming calls with `generateText`, the reasoning summaries are available in the `reasoning` field of the response:

```ts highlight="8-9,13"
import {
  openai,
  type OpenAILanguageModelResponsesOptions,
} from "@ai-sdk/openai";
import { generateText } from "ai";

const result = await generateText({
  model: openai("gpt-5"),
  prompt: "Tell me about the Mission burrito debate in San Francisco.",
  providerOptions: {
    openai: {
      reasoningSummary: "auto",
    } satisfies OpenAILanguageModelResponsesOptions,
  },
});
console.log("Reasoning:", result.reasoning);
```

Learn more about reasoning summaries in the [OpenAI documentation](https://platform.openai.com/docs/guides/reasoning?api-mode=responses#reasoning-summaries).

#### WebSocket Transport

OpenAI's [WebSocket API](https://developers.openai.com/api/docs/guides/websocket-mode) keeps a persistent connection open, which can significantly
reduce Time-to-First-Byte (TTFB) in agentic workflows with many tool calls.
After the initial connection, subsequent requests skip TCP/TLS/HTTP negotiation entirely.

The [`ai-sdk-openai-websocket-fetch`](https://www.npmjs.com/package/ai-sdk-openai-websocket-fetch)
package provides a drop-in `fetch` replacement that routes streaming requests
through a persistent WebSocket connection.

Pass the WebSocket fetch to `createOpenAI` via the `fetch` option:

```ts highlight="2,6-7,15"
import { createOpenAI } from "@ai-sdk/openai";
import { createWebSocketFetch } from "ai-sdk-openai-websocket-fetch";
import { streamText } from "ai";

// Create a WebSocket-backed fetch instance
const wsFetch = createWebSocketFetch();
const openai = createOpenAI({ fetch: wsFetch });

const result = streamText({
  model: openai("gpt-4.1-mini"),
  prompt: "Hello!",
  tools: {
    // ...
  },
  onFinish: () => wsFetch.close(), // close the WebSocket when done
});
```

The first request will be slower because it must establish the WebSocket connection
(DNS + TCP + TLS + WebSocket upgrade). After that, subsequent steps in a
multi-step tool-calling loop reuse the open connection, resulting in lower TTFB
per step.

The WebSocket transport only routes streaming requests to the OpenAI Responses
API (`POST /responses` with `stream: true`) through the WebSocket. All other
requests (non-streaming, embeddings, etc.) fall through to the standard
`fetch` implementation.

You can see a live side-by-side comparison of HTTP vs WebSocket streaming performance
in the [demo app](https://github.com/vercel-labs/ai-sdk-openai-websocket).

#### Verbosity Control

You can control the length and detail of model responses using the `textVerbosity` parameter:

```ts
import {
  openai,
  type OpenAILanguageModelResponsesOptions,
} from "@ai-sdk/openai";
import { generateText } from "ai";

const result = await generateText({
  model: openai("gpt-5-mini"),
  prompt: "Write a poem about a boy and his first pet dog.",
  providerOptions: {
    openai: {
      textVerbosity: "low", // 'low' for concise, 'medium' (default), or 'high' for verbose
    } satisfies OpenAILanguageModelResponsesOptions,
  },
});
```

The `textVerbosity` parameter scales output length without changing the underlying prompt:

- `'low'`: Produces terse, minimal responses
- `'medium'`: Balanced detail (default)
- `'high'`: Verbose responses with comprehensive detail

#### Web Search Tool

The OpenAI responses API supports web search through the `openai.tools.webSearch` tool.

```ts
const result = await generateText({
  model: openai("gpt-5"),
  prompt: "What happened in San Francisco last week?",
  tools: {
    web_search: openai.tools.webSearch({
      // optional configuration:
      externalWebAccess: true,
      searchContextSize: "high",
      userLocation: {
        type: "approximate",
        city: "San Francisco",
        region: "California",
      },
      filters: {
        allowedDomains: ["sfchronicle.com", "sfgate.com"],
      },
    }),
  },
  // Force web search tool (optional):
  toolChoice: { type: "tool", toolName: "web_search" },
});

// URL sources directly from `results`
const sources = result.sources;

// Or access sources from tool results
for (const toolResult of result.toolResults) {
  if (toolResult.toolName === "web_search") {
    console.log("Query:", toolResult.output.action.query);
    console.log("Sources:", toolResult.output.sources);
    // `sources` is an array of object: { type: 'url', url: string }
  }
}
```

The web search tool supports the following configuration options:

- **externalWebAccess** _boolean_ - Whether to use external web access for fetching live content. Defaults to `true`.
- **searchContextSize** _'low' | 'medium' | 'high'_ - Controls the amount of context used for the search. Higher values provide more comprehensive results but may have higher latency and cost.
- **userLocation** - Optional location information to provide geographically relevant results. Includes `type` (always `'approximate'`), `country`, `city`, `region`, and `timezone`.
- **filters** - Optional filter configuration to restrict search results.
  - **allowedDomains** _string\[]_ - Array of allowed domains for the search. Subdomains of the provided domains are automatically included.

For detailed information on configuration options see the [OpenAI Web Search Tool documentation](https://platform.openai.com/docs/guides/tools-web-search?api-mode=responses).

#### File Search Tool

The OpenAI responses API supports file search through the `openai.tools.fileSearch` tool.

You can force the use of the file search tool by setting the `toolChoice` parameter to `{ type: 'tool', toolName: 'file_search' }`.

```ts
const result = await generateText({
  model: openai("gpt-5"),
  prompt: "What does the document say about user authentication?",
  tools: {
    file_search: openai.tools.fileSearch({
      vectorStoreIds: ["vs_123"],
      // configuration below is optional:
      maxNumResults: 5,
      filters: {
        key: "author",
        type: "eq",
        value: "Jane Smith",
      },
      ranking: {
        ranker: "auto",
        scoreThreshold: 0.5,
      },
    }),
  },
  providerOptions: {
    openai: {
      // optional: include results
      include: ["file_search_call.results"],
    } satisfies OpenAILanguageModelResponsesOptions,
  },
});
```

The file search tool supports filtering with both comparison and compound filters:

**Comparison filters** - Filter by a single attribute:

- `eq` - Equal to
- `ne` - Not equal to
- `gt` - Greater than
- `gte` - Greater than or equal to
- `lt` - Less than
- `lte` - Less than or equal to
- `in` - Value is in array
- `nin` - Value is not in array

```ts
// Single comparison filter
filters: { key: 'year', type: 'gte', value: 2023 }

// Filter with array values
filters: { key: 'status', type: 'in', value: ['published', 'reviewed'] }
```

**Compound filters** - Combine multiple filters with `and` or `or`:

```ts
// Compound filter with AND
filters: {
  type: 'and',
  filters: [
    { key: 'author', type: 'eq', value: 'Jane Smith' },
    { key: 'year', type: 'gte', value: 2023 },
  ],
}

// Compound filter with OR
filters: {
  type: 'or',
  filters: [
    { key: 'department', type: 'eq', value: 'Engineering' },
    { key: 'department', type: 'eq', value: 'Research' },
  ],
}
```

#### Image Generation Tool

OpenAI's Responses API supports multi-modal image generation as a provider-defined tool.
Availability is restricted to specific models (for example, `gpt-5` variants).

You can use the image tool with either `generateText` or `streamText`:

```ts
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

const result = await generateText({
  model: openai("gpt-5"),
  prompt:
    "Generate an image of an echidna swimming across the Mozambique channel.",
  tools: {
    image_generation: openai.tools.imageGeneration({ outputFormat: "webp" }),
  },
});

for (const toolResult of result.staticToolResults) {
  if (toolResult.toolName === "image_generation") {
    const base64Image = toolResult.output.result;
  }
}
```

```ts
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

const result = streamText({
  model: openai("gpt-5"),
  prompt:
    "Generate an image of an echidna swimming across the Mozambique channel.",
  tools: {
    image_generation: openai.tools.imageGeneration({
      outputFormat: "webp",
      quality: "low",
    }),
  },
});

for await (const part of result.fullStream) {
  if (part.type == "tool-result" && !part.dynamic) {
    const base64Image = part.output.result;
  }
}
```

When you set `store: false`, then previously generated images will not be
accessible by the model. We recommend using the image generation tool without
setting `store: false`.

For complete details on model availability, image quality controls, supported sizes, and tool-specific parameters,
refer to the OpenAI documentation:

- Image generation overview and models: [OpenAI Image Generation](https://platform.openai.com/docs/guides/image-generation)
- Image generation tool parameters (background, size, quality, format, etc.): [Image Generation Tool Options](https://platform.openai.com/docs/guides/tools-image-generation#tool-options)

#### Code Interpreter Tool

The OpenAI responses API supports the code interpreter tool through the `openai.tools.codeInterpreter` tool.
This allows models to write and execute Python code.

```ts
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

const result = await generateText({
  model: openai("gpt-5"),
  prompt: "Write and run Python code to calculate the factorial of 10",
  tools: {
    code_interpreter: openai.tools.codeInterpreter({
      // optional configuration:
      container: {
        fileIds: ["file-123", "file-456"], // optional file IDs to make available
      },
    }),
  },
});
```

The code interpreter tool can be configured with:

- **container**: Either a container ID string or an object with `fileIds` to specify uploaded files that should be available to the code interpreter

  When working with files generated by the Code Interpreter, reference
  information can be obtained from both [annotations in Text
  Parts](#typed-providermetadata-in-text-parts) and [`providerMetadata` in
  Source Document Parts](#typed-providermetadata-in-source-document-parts).

#### MCP Tool

The OpenAI responses API supports connecting to [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) servers through the `openai.tools.mcp` tool. This allows models to call tools exposed by remote MCP servers or service connectors.

```ts
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

const result = await generateText({
  model: openai("gpt-5"),
  prompt: "Search the web for the latest news about AI developments",
  tools: {
    mcp: openai.tools.mcp({
      serverLabel: "web-search",
      serverUrl: "https://mcp.exa.ai/mcp",
      serverDescription: "A web-search API for AI agents",
    }),
  },
});
```

The MCP tool can be configured with:

- **serverLabel** _string_ (required)

  A label to identify the MCP server. This label is used in tool calls to distinguish between multiple MCP servers.

- **serverUrl** _string_ (required if `connectorId` is not provided)

  The URL for the MCP server. Either `serverUrl` or `connectorId` must be provided.

- **connectorId** _string_ (required if `serverUrl` is not provided)

  Identifier for a service connector. Either `serverUrl` or `connectorId` must be provided.

- **serverDescription** _string_ (optional)

  Optional description of the MCP server that helps the model understand its purpose.

- **allowedTools** _string\[] | object_ (optional)

  Controls which tools from the MCP server are available. Can be:
  - An array of tool names: `['tool1', 'tool2']`
  - An object with filters:
    ```ts
    {
      readOnly: true, // Only allow read-only tools
      toolNames: ['tool1', 'tool2'] // Specific tool names
    }
    ```

- **authorization** _string_ (optional)

  OAuth access token for authenticating with the MCP server or connector.

- **headers** _Record\<string, string>_ (optional)

  Optional HTTP headers to include in requests to the MCP server.

- **requireApproval** _'always' | 'never' | object_ (optional)

  Controls which MCP tool calls require user approval before execution. Can be:
  - `'always'`: All MCP tool calls require approval
  - `'never'`: No MCP tool calls require approval (default)
  - An object with filters:
    ```ts
    {
      never: {
        toolNames: ["safe_tool", "another_safe_tool"]; // Skip approval for these tools
      }
    }
    ```

  When approval is required, the model will return a `tool-approval-request` content part that you can use to prompt the user for approval. See [Human in the Loop](/cookbook/next/human-in-the-loop) for more details on implementing approval workflows.

  When `requireApproval` is not set, tool calls are approved by default. Be sure
  to connect to only trusted MCP servers, who you trust to share your data with.

  The OpenAI MCP tool is different from the general MCP client approach
  documented in [MCP Tools](/docs/ai-sdk-core/mcp-tools). The OpenAI MCP tool is
  a built-in provider-defined tool that allows OpenAI models to directly connect
  to MCP servers, while the general MCP client requires you to convert MCP tools
  to AI SDK tools first.

#### Local Shell Tool

The OpenAI responses API support the local shell tool for Codex models through the `openai.tools.localShell` tool.
Local shell is a tool that allows agents to run shell commands locally on a machine you or the user provides.

```ts
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

const result = await generateText({
  model: openai.responses("gpt-5-codex"),
  tools: {
    local_shell: openai.tools.localShell({
      execute: async ({ action }) => {
        // ... your implementation, e.g. sandbox access ...
        return { output: stdout };
      },
    }),
  },
  prompt: "List the files in my home directory.",
  stopWhen: stepCountIs(2),
});
```

#### Shell Tool

The OpenAI Responses API supports the shell tool through the `openai.tools.shell` tool.
The shell tool allows running bash commands and interacting with a command line.
The model proposes shell commands; your integration executes them and returns the outputs.

Running arbitrary shell commands can be dangerous. Always sandbox execution or
add strict allow-/deny-lists before forwarding a command to the system shell.

The shell tool supports three environment modes that control where commands are executed:

##### Local Execution (default)

When no `environment` is specified (or `type: 'local'` is used), commands are executed locally via your `execute` callback:

```ts
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

const result = await generateText({
  model: openai("gpt-5.2"),
  tools: {
    shell: openai.tools.shell({
      execute: async ({ action }) => {
        // ... your implementation, e.g. sandbox access ...
        return { output: results };
      },
    }),
  },
  prompt: "List the files in the current directory and show disk usage.",
});
```

##### Hosted Container (auto)

Set `environment.type` to `'containerAuto'` to run commands in an OpenAI-hosted container. No `execute` callback is needed — OpenAI handles execution server-side:

```ts
const result = await generateText({
  model: openai("gpt-5.2"),
  tools: {
    shell: openai.tools.shell({
      environment: {
        type: "containerAuto",
        // optional configuration:
        memoryLimit: "4g",
        fileIds: ["file-abc123"],
        networkPolicy: {
          type: "allowlist",
          allowedDomains: ["example.com"],
        },
      },
    }),
  },
  prompt: "Install numpy and compute the eigenvalues of a 3x3 matrix.",
});
```

The `containerAuto` environment supports:

- **fileIds** _string\[]_ - File IDs to make available in the container
- **memoryLimit** _'1g' | '4g' | '16g' | '64g'_ - Memory limit for the container
- **networkPolicy** - Network access policy:
  - `{ type: 'disabled' }` — no network access
  - `{ type: 'allowlist', allowedDomains: string[], domainSecrets?: Array<{ domain, name, value }> }` — allow specific domains with optional secrets

##### Existing Container Reference

Set `environment.type` to `'containerReference'` to use an existing container by ID:

```ts
const result = await generateText({
  model: openai("gpt-5.2"),
  tools: {
    shell: openai.tools.shell({
      environment: {
        type: "containerReference",
        containerId: "cntr_abc123",
      },
    }),
  },
  prompt: "Check the status of running processes.",
});
```

##### Execute Callback

For local execution (default or `type: 'local'`), your execute function must return an output array with results for each command:

- **stdout** _string_ - Standard output from the command
- **stderr** _string_ - Standard error from the command
- **outcome** - Either `{ type: 'timeout' }` or `{ type: 'exit', exitCode: number }`

##### Skills

[Skills](https://platform.openai.com/docs/guides/tools-skills) are versioned bundles of files with a `SKILL.md` manifest that extend the shell tool's capabilities. They can be attached to both `containerAuto` and `local` environments.

**Container skills** support two formats — by reference (for skills uploaded to OpenAI) or inline (as a base64-encoded zip):

```ts
const result = await generateText({
  model: openai("gpt-5.2"),
  tools: {
    shell: openai.tools.shell({
      environment: {
        type: "containerAuto",
        skills: [
          // By reference:
          { type: "skillReference", skillId: "skill_abc123" },
          // Or inline:
          {
            type: "inline",
            name: "my-skill",
            description: "What this skill does",
            source: {
              type: "base64",
              mediaType: "application/zip",
              data: readFileSync("./my-skill.zip").toString("base64"),
            },
          },
        ],
      },
    }),
  },
  prompt: "Use the skill to solve this problem.",
});
```

**Local skills** point to a directory on disk containing a `SKILL.md` file:

```ts
const result = await generateText({
  model: openai("gpt-5.2"),
  tools: {
    shell: openai.tools.shell({
      execute: async ({ action }) => {
        // ... your local execution implementation ...
        return { output: results };
      },
      environment: {
        type: "local",
        skills: [
          {
            name: "my-skill",
            description: "What this skill does",
            path: resolve("path/to/skill-directory"),
          },
        ],
      },
    }),
  },
  prompt: "Use the skill to solve this problem.",
  stopWhen: stepCountIs(5),
});
```

For more details on creating skills, see the [OpenAI Skills documentation](https://platform.openai.com/docs/guides/tools-skills).

#### Apply Patch Tool

The OpenAI Responses API supports the apply patch tool for GPT-5.1 models through the `openai.tools.applyPatch` tool.
The apply patch tool lets the model create, update, and delete files in your codebase using structured diffs.
Instead of just suggesting edits, the model emits patch operations that your application applies and reports back on,
enabling iterative, multi-step code editing workflows.

```ts
import { openai } from "@ai-sdk/openai";
import { generateText, stepCountIs } from "ai";

const result = await generateText({
  model: openai("gpt-5.1"),
  tools: {
    apply_patch: openai.tools.applyPatch({
      execute: async ({ callId, operation }) => {
        // ... your implementation for applying the diffs.
      },
    }),
  },
  prompt: "Create a python file that calculates the factorial of a number",
  stopWhen: stepCountIs(5),
});
```

Your execute function must return:

- **status** _'completed' | 'failed'_ - Whether the patch was applied successfully
- **output** _string_ (optional) - Human-readable log text (e.g., results or error messages)

#### Custom Tool

The OpenAI Responses API supports
[custom tools](https://developers.openai.com/api/docs/guides/function-calling/#custom-tools)
through the `openai.tools.customTool` tool.
Custom tools return a raw string instead of JSON, optionally constrained to a grammar
(regex or Lark syntax). This makes them useful for generating structured text like
SQL queries, code snippets, or any output that must match a specific pattern.

```ts
import { openai } from "@ai-sdk/openai";
import { generateText, stepCountIs } from "ai";

const result = await generateText({
  model: openai.responses("gpt-5.2-codex"),
  tools: {
    write_sql: openai.tools.customTool({
      name: "write_sql",
      description: "Write a SQL SELECT query to answer the user question.",
      format: {
        type: "grammar",
        syntax: "regex",
        definition: "SELECT .+",
      },
      execute: async (input) => {
        // input is a raw string matching the grammar, e.g. "SELECT * FROM users WHERE age > 25"
        const rows = await db.query(input);
        return JSON.stringify(rows);
      },
    }),
  },
  toolChoice: "required",
  prompt: "Write a SQL query to get all users older than 25.",
  stopWhen: stepCountIs(3),
});
```

Custom tools also work with `streamText`:

```ts
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

const result = streamText({
  model: openai.responses("gpt-5.2-codex"),
  tools: {
    write_sql: openai.tools.customTool({
      name: "write_sql",
      description: "Write a SQL SELECT query to answer the user question.",
      format: {
        type: "grammar",
        syntax: "regex",
        definition: "SELECT .+",
      },
    }),
  },
  toolChoice: "required",
  prompt: "Write a SQL query to get all users older than 25.",
});

for await (const chunk of result.fullStream) {
  if (chunk.type === "tool-call") {
    console.log(`Tool: ${chunk.toolName}`);
    console.log(`Input: ${chunk.input}`);
  }
}
```

The custom tool can be configured with:

- **name** _string_ (required) - The name of the custom tool. Used to identify the tool in tool calls.
- **description** _string_ (optional) - A description of what the tool does, to help the model understand when to use it.
- **format** _object_ (optional) - The output format constraint. Omit for unconstrained text output.
  - **type** _'grammar' | 'text'_ - The format type. Use `'grammar'` for constrained output or `'text'` for explicit unconstrained text.
  - **syntax** _'regex' | 'lark'_ - (grammar only) The grammar syntax. Use `'regex'` for regular expression patterns or `'lark'` for [Lark parser grammar](https://lark-parser.readthedocs.io/).
  - **definition** _string_ - (grammar only) The grammar definition string (a regex pattern or Lark grammar).
- **execute** _function_ (optional) - An async function that receives the raw string input and returns a string result. Enables multi-turn tool calling.

#### Image Inputs

The OpenAI Responses API supports Image inputs for appropriate models.
You can pass Image files as part of the message content using the 'image' type:

```ts
const result = await generateText({
  model: openai("gpt-5"),
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "Please describe the image.",
        },
        {
          type: "image",
          image: readFileSync("./data/image.png"),
        },
      ],
    },
  ],
});
```

The model will have access to the image and will respond to questions about it.
The image should be passed using the `image` field.

You can also pass a file-id from the OpenAI Files API.

```ts
{
  type: 'image',
  image: 'file-8EFBcWHsQxZV7YGezBC1fq'
}
```

You can also pass the URL of an image.

```ts
{
  type: 'image',
  image: 'https://sample.edu/image.png',
}
```

#### PDF Inputs

The OpenAI Responses API supports reading PDF files.
You can pass PDF files as part of the message content using the `file` type:

```ts
const result = await generateText({
  model: openai("gpt-5"),
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "What is an embedding model?",
        },
        {
          type: "file",
          data: readFileSync("./data/ai.pdf"),
          mediaType: "application/pdf",
          filename: "ai.pdf", // optional
        },
      ],
    },
  ],
});
```

You can also pass a file-id from the OpenAI Files API.

```ts
{
  type: 'file',
  data: 'file-8EFBcWHsQxZV7YGezBC1fq',
  mediaType: 'application/pdf',
}
```

You can also pass the URL of a pdf.

```ts
{
  type: 'file',
  data: 'https://sample.edu/example.pdf',
  mediaType: 'application/pdf',
  filename: 'ai.pdf', // optional
}
```

The model will have access to the contents of the PDF file and
respond to questions about it.
The PDF file should be passed using the `data` field,
and the `mediaType` should be set to `'application/pdf'`.

#### Structured Outputs

The OpenAI Responses API supports structured outputs. You can use `generateText` or `streamText` with [`Output`](/docs/reference/ai-sdk-core/output) to enforce structured outputs.

```ts
const result = await generateText({
  model: openai("gpt-4.1"),
  output: Output.object({
    schema: z.object({
      recipe: z.object({
        name: z.string(),
        ingredients: z.array(
          z.object({
            name: z.string(),
            amount: z.string(),
          }),
        ),
        steps: z.array(z.string()),
      }),
    }),
  }),
  prompt: "Generate a lasagna recipe.",
});
```

#### Typed providerMetadata in Text Parts

When using the OpenAI Responses API, the SDK attaches OpenAI-specific metadata to output parts via `providerMetadata`.

This metadata can be used on the client side for tasks such as rendering citations or downloading files generated by the Code Interpreter.
To enable type-safe handling of this metadata, the AI SDK exports dedicated TypeScript types.

For text parts, when `part.type === 'text'`, the `providerMetadata` is provided in the form of `OpenaiResponsesTextProviderMetadata`.

This metadata includes the following fields:

- `itemId`
  The ID of the output item in the Responses API.
- `annotations` (optional)
  An array of annotation objects generated by the model.
  If no annotations are present, this property itself may be omitted (`undefined`).

  Each element in `annotations` is a discriminated union with a required `type` field. Supported types include, for example:
  - `url_citation`
  - `file_citation`
  - `container_file_citation`
  - `file_path`

  These annotations directly correspond to the annotation objects defined by the Responses API and can be used for inline reference rendering or output analysis.
  For details, see the official OpenAI documentation:
  [Responses API – output text annotations](https://platform.openai.com/docs/api-reference/responses/object?lang=javascript#responses-object-output-output_message-content-output_text-annotations).

```ts
import {
  openai,
  type OpenaiResponsesTextProviderMetadata,
} from "@ai-sdk/openai";
import { generateText } from "ai";

const result = await generateText({
  model: openai("gpt-4.1-mini"),
  prompt:
    "Create a program that generates five random numbers between 1 and 100 with two decimal places, and show me the execution results. Also save the result to a file.",
  tools: {
    code_interpreter: openai.tools.codeInterpreter(),
    web_search: openai.tools.webSearch(),
    file_search: openai.tools.fileSearch({ vectorStoreIds: ["vs_1234"] }), // requires a configured vector store
  },
});

for (const part of result.content) {
  if (part.type === "text") {
    const providerMetadata = part.providerMetadata as
      | OpenaiResponsesTextProviderMetadata
      | undefined;
    if (!providerMetadata) continue;
    const { itemId: _itemId, annotations } = providerMetadata.openai;

    if (!annotations) continue;
    for (const annotation of annotations) {
      switch (annotation.type) {
        case "url_citation":
          // url_citation is returned from web_search and provides:
          // properties: type, url, title, start_index and end_index
          break;
        case "file_citation":
          // file_citation is returned from file_search and provides:
          // properties: type, file_id, filename and index
          break;
        case "container_file_citation":
          // container_file_citation is returned from code_interpreter and provides:
          // properties: type, container_id, file_id, filename, start_index and end_index
          break;
        case "file_path":
          // file_path provides:
          // properties: type, file_id and index
          break;
        default: {
          const _exhaustiveCheck: never = annotation;
          throw new Error(
            `Unhandled annotation: ${JSON.stringify(_exhaustiveCheck)}`,
          );
        }
      }
    }
  }
}
```

When implementing file downloads for files generated by the Code Interpreter,
the `container_id` and `file_id` available in `providerMetadata` can be used
to retrieve the file content. For details, see the [Retrieve container file
content](https://platform.openai.com/docs/api-reference/container-files/retrieveContainerFileContent)
API.

#### Typed providerMetadata in Reasoning Parts

When using the OpenAI Responses API, reasoning output parts can include provider metadata.
To handle this metadata in a type-safe way, use `OpenaiResponsesReasoningProviderMetadata`.

For reasoning parts, when `part.type === 'reasoning'`, the `providerMetadata` is provided in the form of `OpenaiResponsesReasoningProviderMetadata`.

This metadata includes the following fields:

- `itemId`\
  The ID of the reasoning item in the Responses API.
- `reasoningEncryptedContent` (optional)\
  Encrypted reasoning content (only returned when requested via `include: ['reasoning.encrypted_content']`).

```ts
import {
  openai,
  type OpenaiResponsesReasoningProviderMetadata,
  type OpenAILanguageModelResponsesOptions,
} from "@ai-sdk/openai";
import { generateText } from "ai";

const result = await generateText({
  model: openai("gpt-5"),
  prompt: 'How many "r"s are in the word "strawberry"?',
  providerOptions: {
    openai: {
      store: false,
      include: ["reasoning.encrypted_content"],
    } satisfies OpenAILanguageModelResponsesOptions,
  },
});

for (const part of result.content) {
  if (part.type === "reasoning") {
    const providerMetadata = part.providerMetadata as
      | OpenaiResponsesReasoningProviderMetadata
      | undefined;

    const { itemId, reasoningEncryptedContent } =
      providerMetadata?.openai ?? {};
    console.log(itemId, reasoningEncryptedContent);
  }
}
```

#### Typed providerMetadata in Source Document Parts

For source document parts, when `part.type === 'source'` and `sourceType === 'document'`, the `providerMetadata` is provided as `OpenaiResponsesSourceDocumentProviderMetadata`.

This metadata is also a discriminated union with a required `type` field. Supported types include:

- `file_citation`
- `container_file_citation`
- `file_path`

Each type includes the identifiers required to work with the referenced resource, such as `fileId` and `containerId`.

```ts
import {
  openai,
  type OpenaiResponsesSourceDocumentProviderMetadata,
} from "@ai-sdk/openai";
import { generateText } from "ai";

const result = await generateText({
  model: openai("gpt-4.1-mini"),
  prompt:
    "Create a program that generates five random numbers between 1 and 100 with two decimal places, and show me the execution results. Also save the result to a file.",
  tools: {
    code_interpreter: openai.tools.codeInterpreter(),
    web_search: openai.tools.webSearch(),
    file_search: openai.tools.fileSearch({ vectorStoreIds: ["vs_1234"] }), // requires a configured vector store
  },
});

for (const part of result.content) {
  if (part.type === "source") {
    if (part.sourceType === "document") {
      const providerMetadata = part.providerMetadata as
        | OpenaiResponsesSourceDocumentProviderMetadata
        | undefined;
      if (!providerMetadata) continue;
      const annotation = providerMetadata.openai;
      switch (annotation.type) {
        case "file_citation":
          // file_citation is returned from file_search and provides:
          // properties: type, fileId and index
          // The filename can be accessed via part.filename.
          break;
        case "container_file_citation":
          // container_file_citation is returned from code_interpreter and provides:
          // properties: type, containerId and fileId
          // The filename can be accessed via part.filename.
          break;
        case "file_path":
          // file_path provides:
          // properties: type, fileId and index
          break;
        default: {
          const _exhaustiveCheck: never = annotation;
          throw new Error(
            `Unhandled annotation: ${JSON.stringify(_exhaustiveCheck)}`,
          );
        }
      }
    }
  }
}
```

Annotations in text parts follow the OpenAI Responses API specification and
therefore use snake_case properties (e.g. `file_id`, `container_id`). In
contrast, `providerMetadata` for source document parts is normalized by the
SDK to camelCase (e.g. `fileId`, `containerId`). Fields that depend on the
original text content, such as `start_index` and `end_index`, are omitted, as
are fields like `filename` that are directly available on the source object.
