# Use the functional API

Source: https://docs.langchain.com/oss/javascript/langgraph/use-functional-api

The [**Functional API**](/oss/javascript/langgraph/functional-api) allows you to add LangGraph's key features — [persistence](/oss/javascript/langgraph/persistence), [memory](/oss/javascript/langgraph/add-memory), [human-in-the-loop](/oss/javascript/langgraph/interrupts), and [streaming](/oss/javascript/langgraph/streaming) — to your applications with minimal changes to your existing code.

For conceptual information on the functional API, see [Functional API](/oss/javascript/langgraph/functional-api).

## Creating a simple workflow

When defining an `entrypoint`, input is restricted to the first argument of the function. To pass multiple inputs, you can use a dictionary.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const checkpointer = new MemorySaver();

const myWorkflow = entrypoint(
  { checkpointer, name: "myWorkflow" },
  async (inputs: { value: number; anotherValue: number }) => {
    const value = inputs.value;
    const anotherValue = inputs.anotherValue;
    // ...
  }
);

await myWorkflow.invoke({ value: 1, anotherValue: 2 });
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { v4 as uuidv4 } from "uuid";
import { entrypoint, task, MemorySaver } from "@langchain/langgraph";

// Task that checks if a number is even
const isEven = task("isEven", async (number: number) => {
  return number % 2 === 0;
});

// Task that formats a message
const formatMessage = task("formatMessage", async (isEven: boolean) => {
  return isEven ? "The number is even." : "The number is odd.";
});

// Create a checkpointer for persistence
const checkpointer = new MemorySaver();

const workflow = entrypoint(
  { checkpointer, name: "workflow" },
  async (inputs: { number: number }) => {
    // Simple workflow to classify a number
    const even = await isEven(inputs.number);
    return await formatMessage(even);
  }
);

// Run the workflow with a unique thread ID
const config = { configurable: { thread_id: uuidv4() } };
const result = await workflow.invoke({ number: 7 }, config);
console.log(result);
```

This example demonstrates how to use the `@task` and `@entrypoint` decorators
syntactically. Given that a checkpointer is provided, the workflow results will
be persisted in the checkpointer.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { v4 as uuidv4 } from "uuid";
import { ChatOpenAI } from "@langchain/openai";
import { entrypoint, task, MemorySaver } from "@langchain/langgraph";

const model = new ChatOpenAI({ model: "gpt-3.5-turbo" });

// Task: generate essay using an LLM
const composeEssay = task("composeEssay", async (topic: string) => {
  // Generate an essay about the given topic
  const response = await model.invoke([
    { role: "system", content: "You are a helpful assistant that writes essays." },
    { role: "user", content: `Write an essay about ${topic}.` }
  ]);
  return response.content as string;
});

// Create a checkpointer for persistence
const checkpointer = new MemorySaver();

const workflow = entrypoint(
  { checkpointer, name: "workflow" },
  async (topic: string) => {
    // Simple workflow that generates an essay with an LLM
    return await composeEssay(topic);
  }
);

// Execute the workflow
const config = { configurable: { thread_id: uuidv4() } };
const result = await workflow.invoke("the history of flight", config);
console.log(result);
```

## Parallel execution

Tasks can be executed in parallel by invoking them concurrently and waiting for the results. This is useful for improving performance in IO bound tasks (e.g., calling APIs for LLMs).

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const addOne = task("addOne", async (number: number) => {
  return number + 1;
});

const graph = entrypoint(
  { checkpointer, name: "graph" },
  async (numbers: number[]) => {
    return await Promise.all(numbers.map(addOne));
  }
);
```

This example demonstrates how to run multiple LLM calls in parallel using `@task`. Each call generates a paragraph on a different topic, and results are joined into a single text output.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { v4 as uuidv4 } from "uuid";
import { ChatOpenAI } from "@langchain/openai";
import { entrypoint, task, MemorySaver } from "@langchain/langgraph";

// Initialize the LLM model
const model = new ChatOpenAI({ model: "gpt-3.5-turbo" });

// Task that generates a paragraph about a given topic
const generateParagraph = task("generateParagraph", async (topic: string) => {
  const response = await model.invoke([
    { role: "system", content: "You are a helpful assistant that writes educational paragraphs." },
    { role: "user", content: `Write a paragraph about ${topic}.` }
  ]);
  return response.content as string;
});

// Create a checkpointer for persistence
const checkpointer = new MemorySaver();

const workflow = entrypoint(
  { checkpointer, name: "workflow" },
  async (topics: string[]) => {
    // Generates multiple paragraphs in parallel and combines them
    const paragraphs = await Promise.all(topics.map(generateParagraph));
    return paragraphs.join("\n\n");
  }
);

// Run the workflow
const config = { configurable: { thread_id: uuidv4() } };
const result = await workflow.invoke(["quantum computing", "climate change", "history of aviation"], config);
console.log(result);
```

This example uses LangGraph's concurrency model to improve execution time, especially when tasks involve I/O like LLM completions.

## Calling graphs

The **Functional API** and the [**Graph API**](/oss/javascript/langgraph/graph-api) can be used together in the same application as they share the same underlying runtime.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { entrypoint } from "@langchain/langgraph";
import { StateGraph } from "@langchain/langgraph";

const builder = new StateGraph(/* ... */);
// ...
const someGraph = builder.compile();

const someWorkflow = entrypoint(
  { name: "someWorkflow" },
  async (someInput: Record<string, any>) => {
    // Call a graph defined using the graph API
    const result1 = await someGraph.invoke(/* ... */);
    // Call another graph defined using the graph API
    const result2 = await anotherGraph.invoke(/* ... */);
    return {
      result1,
      result2,
    };
  }
);
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { v4 as uuidv4 } from "uuid";
import { entrypoint, MemorySaver, StateGraph, StateSchema } from "@langchain/langgraph";
import * as z from "zod";

// Define the shared state type
const State = new StateSchema({
  foo: z.number(),
});

// Build the graph using the Graph API
const builder = new StateGraph(State)
  .addNode("double", (state) => {
    return { foo: state.foo * 2 };
  })
  .addEdge("__start__", "double");
const graph = builder.compile();

// Define the functional API workflow
const checkpointer = new MemorySaver();

const workflow = entrypoint(
  { checkpointer, name: "workflow" },
  async (x: number) => {
    const result = await graph.invoke({ foo: x });
    return { bar: result.foo };
  }
);

// Execute the workflow
const config = { configurable: { thread_id: uuidv4() } };
console.log(await workflow.invoke(5, config)); // Output: { bar: 10 }
```

## Call other entrypoints

You can call other **entrypoints** from within an **entrypoint** or a **task**.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
// Will automatically use the checkpointer from the parent entrypoint
const someOtherWorkflow = entrypoint(
  { name: "someOtherWorkflow" },
  async (inputs: { value: number }) => {
    return inputs.value;
  }
);

const myWorkflow = entrypoint(
  { checkpointer, name: "myWorkflow" },
  async (inputs: { value: number }) => {
    const value = await someOtherWorkflow.invoke({ value: 1 });
    return value;
  }
);
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { v4 as uuidv4 } from "uuid";
import { entrypoint, MemorySaver } from "@langchain/langgraph";

// Initialize a checkpointer
const checkpointer = new MemorySaver();

// A reusable sub-workflow that multiplies a number
const multiply = entrypoint(
  { name: "multiply" },
  async (inputs: { a: number; b: number }) => {
    return inputs.a * inputs.b;
  }
);

// Main workflow that invokes the sub-workflow
const main = entrypoint(
  { checkpointer, name: "main" },
  async (inputs: { x: number; y: number }) => {
    const result = await multiply.invoke({ a: inputs.x, b: inputs.y });
    return { product: result };
  }
);

// Execute the main workflow
const config = { configurable: { thread_id: uuidv4() } };
console.log(await main.invoke({ x: 6, y: 7 }, config)); // Output: { product: 42 }
```

## Streaming

The **Functional API** uses the same streaming mechanism as the **Graph API**. Please
read the [**streaming guide**](/oss/javascript/langgraph/streaming) section for more details.

Example of using the streaming API to stream both updates and custom data.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import {
  entrypoint,
  MemorySaver,
  LangGraphRunnableConfig,
} from "@langchain/langgraph";

const checkpointer = new MemorySaver();

const main = entrypoint(
  { checkpointer, name: "main" },
  async (
    inputs: { x: number },
    config: LangGraphRunnableConfig
  ): Promise<number> => {
    config.writer?.("Started processing");   // [!code highlight]
    const result = inputs.x * 2;
    config.writer?.(`Result is ${result}`);   // [!code highlight]
    return result;
  }
);

const config = { configurable: { thread_id: "abc" } };

  // [!code highlight]
for await (const [mode, chunk] of await main.stream(
  { x: 5 },
  { streamMode: ["custom", "updates"], ...config }   // [!code highlight]
)) {
  console.log(`${mode}: ${JSON.stringify(chunk)}`);
}
```

1. Emit custom data before computation begins.
2. Emit another custom message after computing the result.
3. Use `.stream()` to process streamed output.
4. Specify which streaming modes to use.

```
updates: {"addOne": 2}
updates: {"addTwo": 3}
custom: "hello"
custom: "world"
updates: {"main": 5}
```

## Retry policy

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import {
  MemorySaver,
  entrypoint,
  task,
  RetryPolicy,
} from "@langchain/langgraph";

// This variable is just used for demonstration purposes to simulate a network failure.
// It's not something you will have in your actual code.
let attempts = 0;

// Let's configure the RetryPolicy to retry on ValueError.
// The default RetryPolicy is optimized for retrying specific network errors.
const retryPolicy: RetryPolicy = { retryOn: (error) => error instanceof Error };

const getInfo = task(
  {
    name: "getInfo",
    retry: retryPolicy,
  },
  () => {
    attempts += 1;

    if (attempts < 2) {
      throw new Error("Failure");
    }
    return "OK";
  }
);

const checkpointer = new MemorySaver();

const main = entrypoint(
  { checkpointer, name: "main" },
  async (inputs: Record<string, any>) => {
    return await getInfo();
  }
);

const config = {
  configurable: {
    thread_id: "1",
  },
};

await main.invoke({ any_input: "foobar" }, config);
```

```
'OK'
```

## Caching tasks

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import {
  InMemoryCache,
  entrypoint,
  task,
  CachePolicy,
} from "@langchain/langgraph";

const slowAdd = task(
  {
    name: "slowAdd",
    cache: { ttl: 120 },   // [!code highlight]
  },
  async (x: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return x * 2;
  }
);

const main = entrypoint(
  { cache: new InMemoryCache(), name: "main" },
  async (inputs: { x: number }) => {
    const result1 = await slowAdd(inputs.x);
    const result2 = await slowAdd(inputs.x);
    return { result1, result2 };
  }
);

for await (const chunk of await main.stream(
  { x: 5 },
  { streamMode: "updates" }
)) {
  console.log(chunk);
}

//> { slowAdd: 10 }
//> { slowAdd: 10, '__metadata__': { cached: true } }
//> { main: { result1: 10, result2: 10 } }
```

1. `ttl` is specified in seconds. The cache will be invalidated after this time.

## Resuming after an error

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { entrypoint, task, MemorySaver } from "@langchain/langgraph";

// This variable is just used for demonstration purposes to simulate a network failure.
// It's not something you will have in your actual code.
let attempts = 0;

const getInfo = task("getInfo", async () => {
  /**
   * Simulates a task that fails once before succeeding.
   * Throws an exception on the first attempt, then returns "OK" on subsequent tries.
   */
  attempts += 1;

  if (attempts < 2) {
    throw new Error("Failure"); // Simulate a failure on the first attempt
  }
  return "OK";
});

// Initialize an in-memory checkpointer for persistence
const checkpointer = new MemorySaver();

const slowTask = task("slowTask", async () => {
  /**
   * Simulates a slow-running task by introducing a 1-second delay.
   */
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Ran slow task.";
});

const main = entrypoint(
  { checkpointer, name: "main" },
  async (inputs: Record<string, any>) => {
    /**
     * Main workflow function that runs the slowTask and getInfo tasks sequentially.
     *
     * Parameters:
     * - inputs: Record<string, any> containing workflow input values.
     *
     * The workflow first executes `slowTask` and then attempts to execute `getInfo`,
     * which will fail on the first invocation.
     */
    const slowTaskResult = await slowTask(); // Blocking call to slowTask
    await getInfo(); // Exception will be raised here on the first attempt
    return slowTaskResult;
  }
);

// Workflow execution configuration with a unique thread identifier
const config = {
  configurable: {
    thread_id: "1", // Unique identifier to track workflow execution
  },
};

// This invocation will take ~1 second due to the slowTask execution
try {
  // First invocation will raise an exception due to the `getInfo` task failing
  await main.invoke({ any_input: "foobar" }, config);
} catch (err) {
  // Handle the failure gracefully
}
```

When we resume execution, we won't need to re-run the `slowTask` as its result is already saved in the checkpoint.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
await main.invoke(null, config);
```

```
'Ran slow task.'
```

## Human-in-the-loop

The functional API supports [human-in-the-loop](/oss/javascript/langgraph/interrupts) workflows using the [`interrupt`](https://reference.langchain.com/javascript/langchain-langgraph/index/interrupt) function and the `Command` primitive.

### Basic human-in-the-loop workflow

We will create three [tasks](/oss/javascript/langgraph/functional-api#task):

1. Append `"bar"`.
2. Pause for human input. When resuming, append human input.
3. Append `"qux"`.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { entrypoint, task, interrupt, Command } from "@langchain/langgraph";

const step1 = task("step1", async (inputQuery: string) => {
  // Append bar
  return `${inputQuery} bar`;
});

const humanFeedback = task("humanFeedback", async (inputQuery: string) => {
  // Append user input
  const feedback = interrupt(`Please provide feedback: ${inputQuery}`);
  return `${inputQuery} ${feedback}`;
});

const step3 = task("step3", async (inputQuery: string) => {
  // Append qux
  return `${inputQuery} qux`;
});
```

We can now compose these tasks in an [entrypoint](/oss/javascript/langgraph/functional-api#entrypoint):

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { MemorySaver } from "@langchain/langgraph";

const checkpointer = new MemorySaver();

const graph = entrypoint(
  { checkpointer, name: "graph" },
  async (inputQuery: string) => {
    const result1 = await step1(inputQuery);
    const result2 = await humanFeedback(result1);
    const result3 = await step3(result2);

    return result3;
  }
);
```

[interrupt()](/oss/javascript/langgraph/interrupts#pause-using-interrupt) is called inside a task, enabling a human to review and edit the output of the previous task. The results of prior tasks-- in this case `step_1`-- are persisted, so that they are not run again following the [`interrupt`](https://reference.langchain.com/javascript/langchain-langgraph/index/interrupt).

Let's send in a query string:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const config = { configurable: { thread_id: "1" } };

for await (const event of await graph.stream("foo", config)) {
  console.log(event);
  console.log("\n");
}
```

Note that we've paused with an [`interrupt`](https://reference.langchain.com/javascript/langchain-langgraph/index/interrupt) after `step_1`. The interrupt provides instructions to resume the run. To resume, we issue a [`Command`](/oss/javascript/langgraph/interrupts#resuming-interrupts) containing the data expected by the `human_feedback` task.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
// Continue execution
for await (const event of await graph.stream(
  new Command({ resume: "baz" }),
  config
)) {
  console.log(event);
  console.log("\n");
}
```

After resuming, the run proceeds through the remaining step and terminates as expected.

### Review tool calls

To review tool calls before execution, we add a `review_tool_call` function that calls [`interrupt`](/oss/javascript/langgraph/interrupts#pause-using-interrupt). When this function is called, execution will be paused until we issue a command to resume it.

Given a tool call, our function will [`interrupt`](https://reference.langchain.com/javascript/langchain-langgraph/index/interrupt) for human review. At that point we can either:

- Accept the tool call
- Revise the tool call and continue
- Generate a custom tool message (e.g., instructing the model to re-format its tool call)

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ToolCall } from "@langchain/core/messages/tool";
import { ToolMessage } from "@langchain/core/messages";

function reviewToolCall(toolCall: ToolCall): ToolCall | ToolMessage {
  // Review a tool call, returning a validated version
  const humanReview = interrupt({
    question: "Is this correct?",
    tool_call: toolCall,
  });

  const reviewAction = humanReview.action;
  const reviewData = humanReview.data;

  if (reviewAction === "continue") {
    return toolCall;
  } else if (reviewAction === "update") {
    const updatedToolCall = { ...toolCall, args: reviewData };
    return updatedToolCall;
  } else if (reviewAction === "feedback") {
    return new ToolMessage({
      content: reviewData,
      name: toolCall.name,
      tool_call_id: toolCall.id,
    });
  }

  throw new Error(`Unknown review action: ${reviewAction}`);
}
```

We can now update our [entrypoint](/oss/javascript/langgraph/functional-api#entrypoint) to review the generated tool calls. If a tool call is accepted or revised, we execute in the same way as before. Otherwise, we just append the [`ToolMessage`](https://reference.langchain.com/javascript/langchain-core/messages/ToolMessage) supplied by the human. The results of prior tasks — in this case the initial model call — are persisted, so that they are not run again following the [`interrupt`](https://reference.langchain.com/javascript/langchain-langgraph/index/interrupt).

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import {
  MemorySaver,
  entrypoint,
  interrupt,
  Command,
  addMessages,
} from "@langchain/langgraph";
import { ToolMessage, AIMessage, BaseMessage } from "@langchain/core/messages";

const checkpointer = new MemorySaver();

const agent = entrypoint(
  { checkpointer, name: "agent" },
  async (
    messages: BaseMessage[],
    previous?: BaseMessage[]
  ): Promise<BaseMessage> => {
    if (previous !== undefined) {
      messages = addMessages(previous, messages);
    }

    let modelResponse = await callModel(messages);
    while (true) {
      if (!modelResponse.tool_calls?.length) {
        break;
      }

      // Review tool calls
      const toolResults: ToolMessage[] = [];
      const toolCalls: ToolCall[] = [];

      for (let i = 0; i < modelResponse.tool_calls.length; i++) {
        const review = reviewToolCall(modelResponse.tool_calls[i]);
        if (review instanceof ToolMessage) {
          toolResults.push(review);
        } else {
          // is a validated tool call
          toolCalls.push(review);
          if (review !== modelResponse.tool_calls[i]) {
            modelResponse.tool_calls[i] = review; // update message
          }
        }
      }

      // Execute remaining tool calls
      const remainingToolResults = await Promise.all(
        toolCalls.map((toolCall) => callTool(toolCall))
      );

      // Append to message list
      messages = addMessages(messages, [
        modelResponse,
        ...toolResults,
        ...remainingToolResults,
      ]);

      // Call model again
      modelResponse = await callModel(messages);
    }

    // Generate final response
    messages = addMessages(messages, modelResponse);
    return entrypoint.final({ value: modelResponse, save: messages });
  }
);
```

## Short-term memory

Short-term memory allows storing information across different **invocations** of the same **thread id**. See [short-term memory](/oss/javascript/langgraph/functional-api#short-term-memory) for more details.

### Manage checkpoints

You can view and delete the information stored by the checkpointer.

#### View thread state

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const config = {
  configurable: {
    thread_id: "1",  // [!code highlight]
    // optionally provide an ID for a specific checkpoint,
    // otherwise the latest checkpoint is shown
    // checkpoint_id: "1f029ca3-1f5b-6704-8004-820c16b69a5a" [!code highlight]
  },
};
await graph.getState(config);  // [!code highlight]
```

```
StateSnapshot {
  values: {
    messages: [
      HumanMessage { content: "hi! I'm bob" },
      AIMessage { content: "Hi Bob! How are you doing today?" },
      HumanMessage { content: "what's my name?" },
      AIMessage { content: "Your name is Bob." }
    ]
  },
  next: [],
  config: { configurable: { thread_id: '1', checkpoint_ns: '', checkpoint_id: '1f029ca3-1f5b-6704-8004-820c16b69a5a' } },
  metadata: {
    source: 'loop',
    writes: { call_model: { messages: AIMessage { content: "Your name is Bob." } } },
    step: 4,
    parents: {},
    thread_id: '1'
  },
  createdAt: '2025-05-05T16:01:24.680462+00:00',
  parentConfig: { configurable: { thread_id: '1', checkpoint_ns: '', checkpoint_id: '1f029ca3-1790-6b0a-8003-baf965b6a38f' } },
  tasks: [],
  interrupts: []
}
```

#### View the history of the thread

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const config = {
  configurable: {
    thread_id: "1",  // [!code highlight]
  },
};
const history = [];  // [!code highlight]
for await (const state of graph.getStateHistory(config)) {
  history.push(state);
}
```

```
[
  StateSnapshot {
    values: {
      messages: [
        HumanMessage { content: "hi! I'm bob" },
        AIMessage { content: "Hi Bob! How are you doing today? Is there anything I can help you with?" },
        HumanMessage { content: "what's my name?" },
        AIMessage { content: "Your name is Bob." }
      ]
    },
    next: [],
    config: { configurable: { thread_id: '1', checkpoint_ns: '', checkpoint_id: '1f029ca3-1f5b-6704-8004-820c16b69a5a' } },
    metadata: { source: 'loop', writes: { call_model: { messages: AIMessage { content: "Your name is Bob." } } }, step: 4, parents: {}, thread_id: '1' },
    createdAt: '2025-05-05T16:01:24.680462+00:00',
    parentConfig: { configurable: { thread_id: '1', checkpoint_ns: '', checkpoint_id: '1f029ca3-1790-6b0a-8003-baf965b6a38f' } },
    tasks: [],
    interrupts: []
  },
  // ... more state snapshots
]
```

### Decouple return value from saved value

Use `entrypoint.final` to decouple what is returned to the caller from what is persisted in the checkpoint. This is useful when:

- You want to return a computed result (e.g., a summary or status), but save a different internal value for use on the next invocation.
- You need to control what gets passed to the previous parameter on the next run.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { entrypoint, MemorySaver } from "@langchain/langgraph";

const checkpointer = new MemorySaver();

const accumulate = entrypoint(
  { checkpointer, name: "accumulate" },
  async (n: number, previous?: number) => {
    const prev = previous || 0;
    const total = prev + n;
    // Return the *previous* value to the caller but save the *new* total to the checkpoint.
    return entrypoint.final({ value: prev, save: total });
  }
);

const config = { configurable: { thread_id: "my-thread" } };

console.log(await accumulate.invoke(1, config)); // 0
console.log(await accumulate.invoke(2, config)); // 1
console.log(await accumulate.invoke(3, config)); // 3
```

### Chatbot example

An example of a simple chatbot using the functional API and the [`InMemorySaver`](https://reference.langchain.com/javascript/classes/_langchain_langgraph-checkpoint.MemorySaver.html) checkpointer.

The bot is able to remember the previous conversation and continue from where it left off.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { BaseMessage } from "@langchain/core/messages";
import {
  addMessages,
  entrypoint,
  task,
  MemorySaver,
} from "@langchain/langgraph";
import { ChatAnthropic } from "@langchain/anthropic";

const model = new ChatAnthropic({ model: "claude-sonnet-4-6" });

const callModel = task(
  "callModel",
  async (messages: BaseMessage[]): Promise<BaseMessage> => {
    const response = await model.invoke(messages);
    return response;
  }
);

const checkpointer = new MemorySaver();

const workflow = entrypoint(
  { checkpointer, name: "workflow" },
  async (
    inputs: BaseMessage[],
    previous?: BaseMessage[]
  ): Promise<BaseMessage> => {
    let messages = inputs;
    if (previous) {
      messages = addMessages(previous, inputs);
    }

    const response = await callModel(messages);
    return entrypoint.final({
      value: response,
      save: addMessages(messages, response),
    });
  }
);

const config = { configurable: { thread_id: "1" } };
const inputMessage = { role: "user", content: "hi! I'm bob" };

for await (const chunk of await workflow.stream([inputMessage], {
  ...config,
  streamMode: "values",
})) {
  console.log(chunk.content);
}

const inputMessage2 = { role: "user", content: "what's my name?" };
for await (const chunk of await workflow.stream([inputMessage2], {
  ...config,
  streamMode: "values",
})) {
  console.log(chunk.content);
}
```

## Long-term memory

[long-term memory](/oss/javascript/concepts/memory#long-term-memory) allows storing information across different **thread ids**. This could be useful for learning information about a given user in one conversation and using it in another.

## Workflows

- [Workflows and agent](/oss/javascript/langgraph/workflows-agents) guide for more examples of how to build workflows using the Functional API.

## Integrate with other libraries

- [Add LangGraph's features to other frameworks using the functional API](/langsmith/deploy-other-frameworks): Add LangGraph features like persistence, memory and streaming to other agent frameworks that do not provide them out of the box.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langgraph/use-functional-api.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Use the graph API

Source: https://docs.langchain.com/oss/javascript/langgraph/use-graph-api

This guide demonstrates the basics of LangGraph's Graph API. It walks through [state](#define-and-update-state), as well as composing common graph structures such as [sequences](#create-a-sequence-of-steps), [branches](#create-branches), and [loops](#create-and-control-loops). It also covers LangGraph's control features, including the [Send API](#map-reduce-and-the-send-api) for map-reduce workflows and the [Command API](#combine-control-flow-and-state-updates-with-command) for combining state updates with "hops" across nodes.

## Setup

Install `langgraph`:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/langgraph
```

**Set up LangSmith for better debugging**

Sign up for [LangSmith](https://smith.langchain.com) to quickly spot issues and improve the performance of your LangGraph projects. LangSmith lets you use trace data to debug, test, and monitor your LLM apps built with LangGraph — read more about how to get started in the [docs](/langsmith/observability).
