# Context overview

Source: https://docs.langchain.com/oss/javascript/concepts/context

**Context engineering** is the practice of building dynamic systems that provide the right information and tools, in the right format, so that an AI application can accomplish a task. Context can be characterized along two key dimensions:

1. By **mutability**:

- **Static context**: Immutable data that doesn't change during execution (e.g., user metadata, database connections, tools)
- **Dynamic context**: Mutable data that evolves as the application runs (e.g., conversation history, intermediate results, tool call observations)

2. By **lifetime**:

- **Runtime context**: Data scoped to a single run or invocation
- **Cross-conversation context**: Data that persists across multiple conversations or sessions

  Runtime context refers to local context: data and dependencies your code needs to run. It does **not** refer to:

  - The LLM context, which is the data passed into the LLM's prompt.
  - The "context window", which is the maximum number of tokens that can be passed to the LLM.

  The runtime context is how you thread data through your agent. Rather than storing things in global state, you can attach values — like a database connection, user session, or configuration — to the context and access them inside tools and middleware. This keeps things stateless, testable, and reusable. For example, you can use user metadata in the runtime context to fetch user preferences and feed them into the context window.

LangGraph provides three ways to manage context, which combines the mutability and lifetime dimensions:

| Context type                                                                                | Description                                   | Mutability | Lifetime           |
| ------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------- | ------------------ |
| [**Config**](#config-static-context)                                                        | data passed at the start of a run             | Static     | Single run         |
| [**Dynamic runtime context (state)**](#dynamic-runtime-context-state)                       | Mutable data that evolves during a single run | Dynamic    | Single run         |
| [**Dynamic cross-conversation context (store)**](#dynamic-cross-conversation-context-store) | Persistent data shared across conversations   | Dynamic    | Cross-conversation |

## Config

Config is for immutable data like user metadata or API keys. Use this when you have values that don't change mid-run.

Specify configuration using a key called **"configurable"** which is reserved for this purpose.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
await graph.invoke(
  { messages: [{ role: "user", content: "hi!" }] },
  { configurable: { user_id: "user_123" } } // [!code highlight]
);
```

## Dynamic runtime context

**Dynamic runtime context** represents mutable data that can evolve during a single run and is managed through the LangGraph state object. This includes conversation history, intermediate results, and values derived from tools or LLM outputs. In LangGraph, the state object acts as [short-term memory](/oss/javascript/concepts/memory) during a run.

````
Example shows how to incorporate state into an agent **prompt**.

State can also be accessed by the agent's **tools**, which can read or update the state as needed. See [tool calling guide](/oss/javascript/langchain/tools#short-term-memory) for details.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, createMiddleware } from "langchain";
import type { AgentState } from "langchain";
import * as z from "zod";

const CustomState = z.object({ // [!code highlight]
  userName: z.string(),
});

const personalizedPrompt = createMiddleware({ // [!code highlight]
  name: "PersonalizedPrompt",
  stateSchema: CustomState,
  wrapModelCall: (request, handler) => {
    const userName = request.state.userName || "User";
    const systemPrompt = `You are a helpful assistant. User's name is ${userName}`;
    return handler({ ...request, systemPrompt });
  },
});

const agent = createAgent({  // [!code highlight]
  model: "claude-sonnet-4-6",
  tools: [/* your tools here */],
  middleware: [personalizedPrompt] as const, // [!code highlight]
});

await agent.invoke({
  messages: [{ role: "user", content: "hi!" }],
  userName: "John Smith",
});
```



```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { z } from "zod/v4";
import { StateGraph, StateSchema, MessagesValue, START } from "@langchain/langgraph";

const CustomState = new StateSchema({  // [!code highlight]
  messages: MessagesValue,
  extraField: z.number(),
});

const builder = new StateGraph(CustomState)
  .addNode("node", async (state) => {  // [!code highlight]
    const messages = state.messages;
    // ...
    return {  // [!code highlight]
      extraField: state.extraField + 1,
    };
  })
  .addEdge(START, "node");

const graph = builder.compile();
```
````

**Turning on memory**
Please see the [memory guide](/oss/javascript/langgraph/add-memory) for more details on how to enable memory. This is a powerful feature that allows you to persist the agent's state across multiple invocations. Otherwise, the state is scoped only to a single run.

## Dynamic cross-conversation context

**Dynamic cross-conversation context** represents persistent, mutable data that spans across multiple conversations or sessions and is managed through the LangGraph store. This includes user profiles, preferences, and historical interactions. The LangGraph store acts as [long-term memory](/oss/javascript/concepts/memory#long-term-memory) across multiple runs. This can be used to read or update persistent facts (e.g., user profiles, preferences, prior interactions).

## Learn more

- [Memory conceptual overview](/oss/javascript/concepts/memory)
- [Short-term memory in LangChain](/oss/javascript/langchain/short-term-memory)
- [Memory in LangGraph](/oss/javascript/langgraph/add-memory)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/concepts/context.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
