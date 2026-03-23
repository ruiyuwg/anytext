## `Command`

[`Command`](https://reference.langchain.com/javascript/langchain-langgraph/index/Command) is a versatile primitive for controlling graph execution. It accepts four parameters:

- `update`: Apply state updates (similar to returning updates from a node).
- `goto`: Navigate to specific nodes (similar to [conditional edges](#conditional-edges)).
- `graph`: Target a parent graph when navigating from [subgraphs](/oss/javascript/langgraph/use-subgraphs).
- `resume`: Provide a value to resume execution after an [interrupt](/oss/javascript/langgraph/interrupts).

`Command` is used in three contexts:

- **[Return from nodes](#return-from-nodes)**: Use `update`, `goto`, and `graph` to combine state updates with control flow.
- **[Input to `invoke`/`stream`](#input-to-invokestream)**: Use `resume` to continue execution after an interrupt.
- **[Return from tools](#return-from-tools)**: Similar to return from nodes, combine state updates and control flow from inside a tool.

### Return from nodes

#### `update` and `goto`

Return [`Command`](https://reference.langchain.com/javascript/langchain-langgraph/index/Command) from node functions to update state and route to the next node in a single step:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Command } from "@langchain/langgraph";

graph.addNode("myNode", (state) => {
  return new Command({
    update: { foo: "bar" },
    goto: "myOtherNode",
  });
});
```

With [`Command`](https://reference.langchain.com/javascript/langchain-langgraph/index/Command) you can also achieve dynamic control flow behavior (identical to [conditional edges](#conditional-edges)):

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Command } from "@langchain/langgraph";

graph.addNode("myNode", (state) => {
  if (state.foo === "bar") {
    return new Command({
      update: { foo: "baz" },
      goto: "myOtherNode",
    });
  }
});
```

Use [`Command`](https://reference.langchain.com/javascript/langchain-langgraph/index/Command) when you need to **both** update state **and** route to a different node. If you only need to route without updating state, use [conditional edges](#conditional-edges) instead.

When using [`Command`](https://reference.langchain.com/javascript/langchain-langgraph/index/Command) in your node functions, you must add the `ends` parameter when adding the node to specify which nodes it can route to:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
builder.addNode("myNode", myNode, {
  ends: ["myOtherNode", END],
});
```

[`Command`](https://reference.langchain.com/javascript/langchain-langgraph/index/Command) only adds dynamic edges—static edges defined with `add_edge` / `addEdge` still execute. For example, if `node_a` returns `Command(goto="my_other_node")` and you also have `graph.add_edge("node_a", "node_b")`, both `node_b` and `my_other_node` will run.

Check out this [how-to guide](/oss/javascript/langgraph/use-graph-api#combine-control-flow-and-state-updates-with-command) for an end-to-end example of how to use [`Command`](https://reference.langchain.com/javascript/langchain-langgraph/index/Command).

#### `graph`

If you are using [subgraphs](/oss/javascript/langgraph/use-subgraphs), you can navigate from a node within a subgraph to a different node in the parent graph by specifying `graph: Command.PARENT` in `Command`:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Command } from "@langchain/langgraph";

graph.addNode("myNode", (state) => {
  return new Command({
    update: { foo: "bar" },
    goto: "otherSubgraph", // where `otherSubgraph` is a node in the parent graph
    graph: Command.PARENT,
  });
});
```

Setting `graph` to `Command.PARENT` will navigate to the closest parent graph.

When you send updates from a subgraph node to a parent graph node for a key that's shared by both parent and subgraph [state schemas](#schema), you **must** define a [reducer](#reducers) for the key you're updating in the parent graph state.

This is particularly useful when implementing [multi-agent handoffs](/oss/javascript/langchain/multi-agent/handoffs). Check out [Navigate to a node in a parent graph](/oss/javascript/langgraph/use-graph-api#navigate-to-a-node-in-a-parent-graph) for detail.

### Input to `invoke`/`stream`

`new Command({ resume: ... })` is the **only** `Command` pattern intended as input to `invoke()`/`stream()`. Do not use `new Command({ update: ... })` as input to continue multi-turn conversations—because passing any `Command` as input resumes from the latest checkpoint (i.e. the last step that ran, not `__start__`), the graph will appear stuck if it already finished. To continue a conversation on an existing thread, pass a plain input object:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
// WRONG - graph resumes from the latest checkpoint
// (last step that ran), appears stuck
await graph.invoke(new Command({ update: { messages: [{ role: "user", content: "follow up" }] } }), config);  // [!code --]

// CORRECT - plain object restarts from __start__
await graph.invoke({ messages: [{ role: "user", content: "follow up" }] }, config);  // [!code ++]
```

#### `resume`

Use `new Command({ resume: ... })` to provide a value and resume graph execution after an [interrupt](/oss/javascript/langgraph/interrupts). The value passed to `resume` becomes the return value of the `interrupt()` call inside the paused node:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Command, interrupt } from "@langchain/langgraph";

const humanReview = async (state: typeof StateAnnotation.State) => {
  // Pauses the graph and waits for a value
  const answer = interrupt("Do you approve?");
  return { messages: [{ role: "user", content: answer }] };
};

// First invocation - hits the interrupt and pauses
const result = await graph.invoke({ messages: [...] }, config);

// Resume with a value - the interrupt() call returns "yes"
const resumed = await graph.invoke(new Command({ resume: "yes" }), config);
```

Check out the [interrupts conceptual guide](/oss/javascript/langgraph/interrupts) for full details on interrupt patterns, including multiple interrupts and validation loops.

### Return from tools

You can return [`Command`](https://reference.langchain.com/javascript/langchain-langgraph/index/Command) from tools to update graph state and control flow. Use `update` to modify state (e.g., saving customer information looked up during a conversation) and `goto` to route to a specific node after the tool completes.

When used inside tools, `goto` adds a dynamic edge—any static edges already defined on the node that called the tool will still execute.

Refer to [Use inside tools](/oss/javascript/langgraph/use-graph-api#use-inside-tools) for detail.

## Graph migrations

LangGraph can easily handle migrations of graph definitions (nodes, edges, and state) even when using a checkpointer to track state.

- For threads at the end of the graph (i.e. not interrupted) you can change the entire topology of the graph (i.e. all nodes and edges, remove, add, rename, etc)
- For threads currently interrupted, we support all topology changes other than renaming / removing nodes (as that thread could now be about to enter a node that no longer exists) -- if this is a blocker please reach out and we can prioritize a solution.
- For modifying state, we have full backwards and forwards compatibility for adding and removing keys
- State keys that are renamed lose their saved state in existing threads
- State keys whose types change in incompatible ways could currently cause issues in threads with state from before the change -- if this is a blocker please reach out and we can prioritize a solution.
