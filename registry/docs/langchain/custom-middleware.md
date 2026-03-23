# Custom middleware

Source: https://docs.langchain.com/oss/javascript/langchain/middleware/custom

Build custom middleware by implementing hooks that run at specific points in the agent execution flow.

## Hooks

Middleware provides two styles of hooks to intercept agent execution:

```
Run sequentially at specific execution points.



Run around each model or tool call.
```

### Node-style hooks

Run sequentially at specific execution points. Use for logging, validation, and state updates.

**Available hooks:**

- `beforeAgent` - Before agent starts (once per invocation)
- `beforeModel` - Before each model call
- `afterModel` - After each model response
- `afterAgent` - After agent completes (once per invocation)

**Example:**

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createMiddleware, AIMessage } from "langchain";

const createMessageLimitMiddleware = (maxMessages: number = 50) => {
  return createMiddleware({
    name: "MessageLimitMiddleware",
    beforeModel: {
      canJumpTo: ["end"],
      hook: (state) => {
        if (state.messages.length === maxMessages) {
          return {
            messages: [new AIMessage("Conversation limit reached.")],
            jumpTo: "end",
          };
        }
        return;
      }
    },
    afterModel: (state) => {
      const lastMessage = state.messages[state.messages.length - 1];
      console.log(`Model returned: ${lastMessage.content}`);
      return;
    },
  });
};
```

### Wrap-style hooks

Intercept execution and control when the handler is called. Use for retries, caching, and transformation.

You decide if the handler is called zero times (short-circuit), once (normal flow), or multiple times (retry logic).

**Available hooks:**

- `wrapModelCall` - Around each model call
- `wrapToolCall` - Around each tool call

**Example:**

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createMiddleware } from "langchain";

const createRetryMiddleware = (maxRetries: number = 3) => {
  return createMiddleware({
    name: "RetryMiddleware",
    wrapModelCall: (request, handler) => {
      for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
          return handler(request);
        } catch (e) {
          if (attempt === maxRetries - 1) {
            throw e;
          }
          console.log(`Retry ${attempt + 1}/${maxRetries} after error: ${e}`);
        }
      }
      throw new Error("Unreachable");
    },
  });
};
```

## State updates

Both node-style and wrap-style hooks can update agent state. The mechanism differs:

- **Node-style hooks** (`beforeAgent`, `beforeModel`, `afterModel`, `afterAgent`): Return a dict directly. The dict is applied to the agent state using the graph's reducers.
- **Wrap-style hooks** (`wrapModelCall`, `wrapToolCall`): For model calls, return a [`Command`](https://reference.langchain.com/javascript/langchain-langgraph/index/Command) directly to inject state updates alongside the model response. For tool calls, return a [`Command`](https://reference.langchain.com/javascript/langchain-langgraph/index/Command) directly. Use these when you need to track or update state based on logic that runs during the model or tool call, such as summarization trigger points, usage metadata, or custom fields calculated from the request or response.

### Node-style hooks

Return a dict from a node-style hook to merge updates into agent state. The dict keys map to state fields.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createMiddleware } from "langchain";
import * as z from "zod";

const trackingStateSchema = z.object({
  modelCallCount: z.number().default(0),
});

const incrementAfterModel = createMiddleware({
  name: "incrementAfterModel",
  stateSchema: trackingStateSchema,
  afterModel: (state) => {
    return { modelCallCount: state.modelCallCount + 1 };
  },
});
```

### Wrap-style hooks

Return a [`Command`](https://reference.langchain.com/javascript/langchain-langgraph/index/Command) directly from `wrapModelCall` to inject state updates from the model call layer:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import * as z from "zod";
import { createMiddleware } from "langchain";
import { Command } from "@langchain/langgraph";

const usageTrackingStateSchema = z.object({
  lastModelCallTokens: z.number().optional(),
});

const trackUsage = createMiddleware({
  name: "trackUsage",
  stateSchema: usageTrackingStateSchema,
  wrapModelCall: async (request, handler) => {
    const response = await handler(request);
    return new Command({ update: { lastModelCallTokens: 150 } });
  },
});
```

The [`Command`](https://reference.langchain.com/javascript/langchain-langgraph/index/Command) flows through the graph's reducers, so updates are applied correctly and messages are additive rather than replacing existing state.

#### Composition with multiple middleware

When multiple middleware layers return responses, the framework passes on the last `AIMessage`s produced:

- **AIMessage flows through:** Each middleware's `handler()` receives the `AIMessage` from the previous layer. When a middleware returns an `AIMessage`, that becomes the input to the next middleware's handler.
- **Command without message updates is pass-through:** If a middleware returns a `Command` whose state update does not touch `messages`, the framework treats it as a no-op for message flow. The next middleware's handler receives the `AIMessage` from the middleware *before* the one that returned the Command.
- **Reducer behavior and retry-safety:** Commands still apply through reducers (messages additive, outer wins on conflicts). Retry logic discards commands from earlier calls.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import * as z from "zod";
import { createMiddleware } from "langchain";
import { Command, StateSchema, ReducedValue } from "@langchain/langgraph";
import { AIMessage, SystemMessage } from "@langchain/core/messages";

/** Last-wins reducer: when both middleware write, outer overwrites inner. */
const customMiddlewareStateSchema = new StateSchema({
  traceLayer: new ReducedValue(
    z.string().optional(),
    { reducer: (a, b) => b },
  ),
});

const outerMiddleware = createMiddleware({
  name: "OuterMiddleware",
  stateSchema: customMiddlewareStateSchema,
  wrapModelCall: async (_request, handler) => {
    await handler(_request);
    return new Command({
      update: {
        traceLayer: "outer",
        messages: [new SystemMessage({ content: "[Outer ran]" })],
      },
    });
  },
});

const innerMiddleware = createMiddleware({
  name: "InnerMiddleware",
  stateSchema: customMiddlewareStateSchema,
  wrapModelCall: async (_request, handler) => {
    await handler(_request);
    return new Command({
      update: {
        traceLayer: "inner",
        messages: [new SystemMessage({ content: "[Inner ran]" })],
      },
    });
  },
});
```

## Create middleware

Use the `createMiddleware` function to define custom middleware:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createMiddleware } from "langchain";

const loggingMiddleware = createMiddleware({
  name: "LoggingMiddleware",
  beforeModel: (state) => {
    console.log(`About to call model with ${state.messages.length} messages`);
    return;
  },
  afterModel: (state) => {
    const lastMessage = state.messages[state.messages.length - 1];
    console.log(`Model returned: ${lastMessage.content}`);
    return;
  },
});
```

## Custom state schema

Middleware can extend the agent's state with custom properties. This enables middleware to:

- **Track state across execution**: Maintain counters, flags, or other values that persist throughout the agent's execution lifecycle

- **Share data between hooks**: Pass information from `beforeModel` to `afterModel` or between different middleware instances

- **Implement cross-cutting concerns**: Add functionality like rate limiting, usage tracking, user context, or audit logging without modifying the core agent logic

- **Make conditional decisions**: Use accumulated state to determine whether to continue execution, jump to different nodes, or modify behavior dynamically

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createMiddleware, createAgent, HumanMessage } from "langchain";
import { StateSchema } from "@langchain/langgraph";
import * as z from "zod";

const CustomState = new StateSchema({
  modelCallCount: z.number().default(0),
  userId: z.string().optional(),
});

const callCounterMiddleware = createMiddleware({
  name: "CallCounterMiddleware",
  stateSchema: CustomState,
  beforeModel: {
    canJumpTo: ["end"],
    hook: (state) => {
      if (state.modelCallCount > 10) {
        return { jumpTo: "end" };
      }

      return;
    },
  },
  afterModel: (state) => {
    return { modelCallCount: state.modelCallCount + 1 };
  },
});

const agent = createAgent({
  model: "gpt-4.1",
  tools: [...],
  middleware: [callCounterMiddleware],
});

const result = await agent.invoke({
  messages: [new HumanMessage("Hello")],
  modelCallCount: 0,
  userId: "user-123",
});
```

State fields can be either public or private. Fields that start with an underscore (`_`) are considered private and will not be included in the agent's result. Only public fields (those without a leading underscore) are returned.

This is useful for storing internal middleware state that shouldn't be exposed to the caller, such as temporary tracking variables or internal flags:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateSchema } from "@langchain/langgraph";
import * as z from "zod";

const PrivateState = new StateSchema({
  // Public field - included in invoke result
  publicCounter: z.number().default(0),
  // Private field - excluded from invoke result
  _internalFlag: z.boolean().default(false),
});

const middleware = createMiddleware({
  name: "ExampleMiddleware",
  stateSchema: PrivateState,
  afterModel: (state) => {
    // Both fields are accessible during execution
    if (state._internalFlag) {
      return { publicCounter: state.publicCounter + 1 };
    }
    return { _internalFlag: true };
  },
});

const result = await agent.invoke({
  messages: [new HumanMessage("Hello")],
  publicCounter: 0
});

// result only contains publicCounter, not _internalFlag
console.log(result.publicCounter); // 1
console.log(result._internalFlag); // undefined
```

## Custom context

Middleware can define a custom context schema to access per-invocation metadata. Unlike state, context is read-only and not persisted between invocations. This makes it ideal for:

- **User information**: Pass user ID, roles, or preferences that don't change during execution
- **Configuration overrides**: Provide per-invocation settings like rate limits or feature flags
- **Tenant/workspace context**: Include organization-specific data for multi-tenant applications
- **Request metadata**: Pass request IDs, API keys, or other metadata needed by middleware

Define a context schema using Zod and access it via `runtime.context` in middleware hooks. Required fields in the context schema will be enforced at the TypeScript level, ensuring you must provide them when calling `agent.invoke()`.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, createMiddleware, HumanMessage } from "langchain";
import * as z from "zod";

const contextSchema = z.object({
  userId: z.string(),
  tenantId: z.string(),
  apiKey: z.string().optional(),
});

const userContextMiddleware = createMiddleware({
  name: "UserContextMiddleware",
  contextSchema,
  wrapModelCall: (request, handler) => {
    // Access context from runtime
    const { userId, tenantId } = request.runtime.context;

    // Add user context to system message
    const contextText = `User ID: ${userId}, Tenant: ${tenantId}`;
    const newSystemMessage = request.systemMessage.concat(contextText);

    return handler({
      ...request,
      systemMessage: newSystemMessage,
    });
  },
});

const agent = createAgent({
  model: "gpt-4.1",
  middleware: [userContextMiddleware],
  tools: [],
  contextSchema,
});

const result = await agent.invoke(
  { messages: [new HumanMessage("Hello")] },
  // Required fields (userId, tenantId) must be provided
  {
    context: {
      userId: "user-123",
      tenantId: "acme-corp",
    },
  }
);
```

**Required context fields**: When you define required fields in your `contextSchema` (fields without `.optional()` or `.default()`), TypeScript will enforce that these fields must be provided during `agent.invoke()` calls. This ensures type safety and prevents runtime errors from missing required context.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
// This will cause a TypeScript error if userId or tenantId are missing
const result = await agent.invoke(
  { messages: [new HumanMessage("Hello")] },
  { context: { userId: "user-123" } } // Error: tenantId is required
);
```

## Execution order

When using multiple middleware, understand how they execute:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const agent = createAgent({
  model: "gpt-4.1",
  middleware: [middleware1, middleware2, middleware3],
  tools: [...],
});
```

**Before hooks run in order:**

1. `middleware1.before_agent()`
2. `middleware2.before_agent()`
3. `middleware3.before_agent()`

**Agent loop starts**

4. `middleware1.before_model()`
5. `middleware2.before_model()`
6. `middleware3.before_model()`

**Wrap hooks nest like function calls:**

7. `middleware1.wrap_model_call()` → `middleware2.wrap_model_call()` → `middleware3.wrap_model_call()` → model

**After hooks run in reverse order:**

8. `middleware3.after_model()`
9. `middleware2.after_model()`
10. `middleware1.after_model()`

**Agent loop ends**

11. `middleware3.after_agent()`
12. `middleware2.after_agent()`
13. `middleware1.after_agent()`

**Key rules:**

- `before_*` hooks: First to last
- `after_*` hooks: Last to first (reverse)
- `wrap_*` hooks: Nested (first middleware wraps all others)

## Agent jumps

To exit early from middleware, return a dictionary with `jump_to`:

**Available jump targets:**

- `'end'`: Jump to the end of the agent execution (or the first `after_agent` hook)
- `'tools'`: Jump to the tools node
- `'model'`: Jump to the model node (or the first `before_model` hook)

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, createMiddleware, AIMessage } from "langchain";

const agent = createAgent({
  model: "gpt-4.1",
  middleware: [
    createMiddleware({
      name: "BlockedContentMiddleware",
      beforeModel: {
        canJumpTo: ["end"],
        hook: (state) => {
          if (state.messages.at(-1)?.content.includes("BLOCKED")) {
            return {
              messages: [new AIMessage("I cannot respond to that request.")],
              jumpTo: "end" as const,
            };
          }
          return;
        },
      },
    }),
  ],
});

const result = await agent.invoke({
    messages: "Hello, world! BLOCKED"
});

/**
 * Expected output:
 * I cannot respond to that request.
 */
console.log(result.messages.at(-1)?.content);
```

## Best practices

1. Keep middleware focused - each should do one thing well
2. Handle errors gracefully - don't let middleware errors crash the agent
3. **Use appropriate hook types**:
   - Node-style for sequential logic (logging, validation)
   - Wrap-style for control flow (retry, fallback, caching)
4. Clearly document any custom state properties
5. Unit test middleware independently before integrating
6. Consider execution order - place critical middleware first in the list
7. Use built-in middleware when possible

## Examples

### Dynamic model selection

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createMiddleware, initChatModel } from "langchain";

const dynamicModelMiddleware = createMiddleware({
  name: "DynamicModelMiddleware",
  wrapModelCall: (request, handler) => {
    const modifiedRequest = { ...request };
    if (request.messages.length > 10) {
      modifiedRequest.model = initChatModel("gpt-4.1");
    } else {
      modifiedRequest.model = initChatModel("gpt-4.1-mini");
    }
    return handler(modifiedRequest);
  },
});
```

### Tool call monitoring

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createMiddleware } from "langchain";

const toolMonitoringMiddleware = createMiddleware({
  name: "ToolMonitoringMiddleware",
  wrapToolCall: (request, handler) => {
    console.log(`Executing tool: ${request.toolCall.name}`);
    console.log(`Arguments: ${JSON.stringify(request.toolCall.args)}`);
    try {
      const result = handler(request);
      console.log("Tool completed successfully");
      return result;
    } catch (e) {
      console.log(`Tool failed: ${e}`);
      throw e;
    }
  },
});
```

### Dynamically selecting tools

Select relevant tools at runtime to improve performance and accuracy. This section covers filtering pre-registered tools. For registering tools that are discovered at runtime (e.g., from MCP servers), see [Runtime tool registration](/oss/javascript/langchain/agents#dynamic-tools).

**Benefits:**

- **Shorter prompts** - Reduce complexity by exposing only relevant tools
- **Better accuracy** - Models choose correctly from fewer options
- **Permission control** - Dynamically filter tools based on user access

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, createMiddleware } from "langchain";

const toolSelectorMiddleware = createMiddleware({
  name: "ToolSelector",
  wrapModelCall: (request, handler) => {
    // Select a small, relevant subset of tools based on state/context
    const relevantTools = selectRelevantTools(request.state, request.runtime);
    const modifiedRequest = { ...request, tools: relevantTools };
    return handler(modifiedRequest);
  },
});

const agent = createAgent({
  model: "gpt-4.1",
  tools: allTools,
  middleware: [toolSelectorMiddleware],
});
```

### Working with system messages

Modify system messages in middleware using the `systemMessage` field in `ModelRequest`. It contains a [`SystemMessage`](https://reference.langchain.com/javascript/langchain-core/messages/SystemMessage) object (even if the agent was created with a string [`systemPrompt`](https://reference.langchain.com/javascript/types/langchain.index.CreateAgentParams.html#systemprompt)).

**Example: Chaining middleware** - Different middleware can use different approaches:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createMiddleware, SystemMessage, createAgent } from "langchain";

// Middleware 1: Uses systemMessage with simple concatenation
const myMiddleware = createMiddleware({
  name: "MyMiddleware",
  wrapModelCall: async (request, handler) => {
    return handler({
      ...request,
      systemMessage: request.systemMessage.concat(`Additional context.`),
    });
  },
});

// Middleware 2: Uses systemMessage with structured content (preserves structure)
const myOtherMiddleware = createMiddleware({
  name: "MyOtherMiddleware",
  wrapModelCall: async (request, handler) => {
    return handler({
      ...request,
      systemMessage: request.systemMessage.concat(
        new SystemMessage({
          content: [
            {
              type: "text",
              text: " More additional context. This will be cached.",
              cache_control: { type: "ephemeral", ttl: "5m" },
            },
          ],
        })
      ),
    });
  },
});

const agent = createAgent({
  model: "anthropic:claude-3-5-sonnet",
  systemPrompt: "You are a helpful assistant.",
  middleware: [myMiddleware, myOtherMiddleware],
});
```

The resulting system message will be:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
new SystemMessage({
  content: [
    { type: "text", text: "You are a helpful assistant." },
    { type: "text", text: "Additional context." },
    {
        type: "text",
        text: " More additional context. This will be cached.",
        cache_control: { type: "ephemeral", ttl: "5m" },
    },
  ],
});
```

Use [`SystemMessage.concat`](https://reference.langchain.com/javascript/langchain-core/utils/stream/concat) to preserve cache control metadata or structured content blocks created by other middleware.

## Additional resources

- [Middleware API reference](https://reference.langchain.com/python/langchain/middleware/)
- [Built-in middleware](/oss/javascript/langchain/middleware/built-in)
- [Testing agents](/oss/javascript/langchain/test/)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/middleware/custom.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Overview

Source: https://docs.langchain.com/oss/javascript/langchain/middleware/overview

Control and customize agent execution at every step

Middleware provides a way to more tightly control what happens inside the agent. Middleware is useful for the following:

- Tracking agent behavior with logging, analytics, and debugging.
- Transforming prompts, [tool selection](/oss/javascript/langchain/middleware/built-in#llm-tool-selector), and output formatting.
- Adding [retries](/oss/javascript/langchain/middleware/built-in#tool-retry), [fallbacks](/oss/javascript/langchain/middleware/built-in#model-fallback), and early termination logic.
- Applying [rate limits](/oss/javascript/langchain/middleware/built-in#model-call-limit), guardrails, and [PII detection](/oss/javascript/langchain/middleware/built-in#pii-detection).

Add middleware by passing them to `createAgent`:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import {
  createAgent,
  summarizationMiddleware,
  humanInTheLoopMiddleware,
} from "langchain";

const agent = createAgent({
  model: "gpt-4.1",
  tools: [...],
  middleware: [summarizationMiddleware, humanInTheLoopMiddleware],
});
```

## The agent loop

The core agent loop involves calling a model, letting it choose tools to execute, and then finishing when it calls no more tools:

Middleware exposes hooks before and after each of those steps:

## Additional resources

```
Explore built-in middleware for common use cases.



Build your own middleware with hooks and decorators.



Complete API reference for middleware.



Test your agents with LangSmith.
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/middleware/overview.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Models

Source: https://docs.langchain.com/oss/javascript/langchain/models

[LLMs](https://en.wikipedia.org/wiki/Large_language_model) are powerful AI tools that can interpret and generate text like humans. They're versatile enough to write content, translate languages, summarize, and answer questions without needing specialized training for each task.

In addition to text generation, many models support:

- [Tool calling](#tool-calling) - calling external tools (like databases queries or API calls) and use results in their responses.
- [Structured output](#structured-output) - where the model's response is constrained to follow a defined format.
- [Multimodality](#multimodal) - process and return data other than text, such as images, audio, and video.
- [Reasoning](#reasoning) - models perform multi-step reasoning to arrive at a conclusion.

Models are the reasoning engine of [agents](/oss/javascript/langchain/agents). They drive the agent's decision-making process, determining which tools to call, how to interpret results, and when to provide a final answer.

The quality and capabilities of the model you choose directly impact your agent's baseline reliability and performance. Different models excel at different tasks - some are better at following complex instructions, others at structured reasoning, and some support larger context windows for handling more information.

LangChain's standard model interfaces give you access to many different provider integrations, which makes it easy to experiment with and switch between models to find the best fit for your use case.

For provider-specific integration information and capabilities, see the provider's [chat model page](/oss/javascript/integrations/chat).
