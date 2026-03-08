## Add runtime configuration

Sometimes you want to be able to configure your graph when calling it. For example, you might want to be able to specify what LLM or system prompt to use at runtime, *without polluting the graph state with these parameters*.

To add runtime configuration:

1. Specify a schema for your configuration
2. Add the configuration to the function signature for nodes or conditional edges
3. Pass the configuration into the graph.

See below for a simple example:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateGraph, StateSchema, GraphNode, END, START } from "@langchain/langgraph";
import * as z from "zod";

// 1. Specify config schema
const ContextSchema = z.object({
  myRuntimeValue: z.string(),
});

// 2. Define a graph that accesses the config in a node
const State = new StateSchema({
  myStateValue: z.number(),
});

const node: GraphNode<typeof State> = (state, runtime) => {
  if (runtime?.context?.myRuntimeValue === "a") {  // [!code highlight]
    return { myStateValue: 1 };
  } else if (runtime?.context?.myRuntimeValue === "b") {  // [!code highlight]
    return { myStateValue: 2 };
  } else {
    throw new Error("Unknown values.");
  }
};

const graph = new StateGraph(State, ContextSchema)
  .addNode("node", node)
  .addEdge(START, "node")
  .addEdge("node", END)
  .compile();

// 3. Pass in configuration at runtime:
console.log(await graph.invoke({}, { context: { myRuntimeValue: "a" } }));  // [!code highlight]
console.log(await graph.invoke({}, { context: { myRuntimeValue: "b" } }));  // [!code highlight]
```

```
{ myStateValue: 1 }
{ myStateValue: 2 }
```

Below we demonstrate a practical example in which we configure what LLM to use at runtime. We will use both OpenAI and Anthropic models.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";
import { ChatAnthropic } from "@langchain/anthropic";
import { StateGraph, StateSchema, MessagesValue, GraphNode, START, END } from "@langchain/langgraph";
import * as z from "zod";

const ConfigSchema = z.object({
  modelProvider: z.string().default("anthropic"),
});

const State = new StateSchema({
  messages: MessagesValue,
});

const MODELS = {
  anthropic: new ChatAnthropic({ model: "claude-haiku-4-5-20251001" }),
  openai: new ChatOpenAI({ model: "gpt-4.1-mini" }),
};

const callModel: GraphNode = async (state, config) => {
  const modelProvider = config?.configurable?.modelProvider || "anthropic";
  const model = MODELS[modelProvider as keyof typeof MODELS];
  const response = await model.invoke(state.messages);
  return { messages: [response] };
};

const graph = new StateGraph(State, ConfigSchema)
  .addNode("model", callModel)
  .addEdge(START, "model")
  .addEdge("model", END)
  .compile();

// Usage
const inputMessage = { role: "user", content: "hi" };
// With no configuration, uses default (Anthropic)
const response1 = await graph.invoke({ messages: [inputMessage] });
// Or, can set OpenAI
const response2 = await graph.invoke(
  { messages: [inputMessage] },
  { configurable: { modelProvider: "openai" } },
);

console.log(response1.messages.at(-1)?.response_metadata?.model);
console.log(response2.messages.at(-1)?.response_metadata?.model);
```

```
claude-haiku-4-5-20251001
gpt-4.1-mini-2025-04-14
```

Below we demonstrate a practical example in which we configure two parameters: the LLM and system message to use at runtime.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";
import { ChatAnthropic } from "@langchain/anthropic";
import { SystemMessage } from "@langchain/core/messages";
import { StateGraph, StateSchema, MessagesValue, GraphNode, START, END } from "@langchain/langgraph";
import * as z from "zod";

const ConfigSchema = z.object({
  modelProvider: z.string().default("anthropic"),
  systemMessage: z.string().optional(),
});

const State = new StateSchema({
  messages: MessagesValue,
});

const MODELS = {
  anthropic: new ChatAnthropic({ model: "claude-haiku-4-5-20251001" }),
  openai: new ChatOpenAI({ model: "gpt-4.1-mini" }),
};

const callModel: GraphNode = async (state, config) => {
  const modelProvider = config?.configurable?.modelProvider || "anthropic";
  const systemMessage = config?.configurable?.systemMessage;

  const model = MODELS[modelProvider as keyof typeof MODELS];
  let messages = state.messages;

  if (systemMessage) {
    messages = [new SystemMessage(systemMessage), ...messages];
  }

  const response = await model.invoke(messages);
  return { messages: [response] };
};

const graph = new StateGraph(State, ConfigSchema)
  .addNode("model", callModel)
  .addEdge(START, "model")
  .addEdge("model", END)
  .compile();

// Usage
const inputMessage = { role: "user", content: "hi" };
const response = await graph.invoke(
  { messages: [inputMessage] },
  {
    configurable: {
      modelProvider: "openai",
      systemMessage: "Respond in Italian."
    }
  }
);

for (const message of response.messages) {
  console.log(`${message.getType()}: ${message.content}`);
}
```

```
human: hi
ai: Ciao! Come posso aiutarti oggi?
```
