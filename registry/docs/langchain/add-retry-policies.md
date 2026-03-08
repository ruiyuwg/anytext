## Add retry policies

There are many use cases where you may wish for your node to have a custom retry policy, for example if you are calling an API, querying a database, or calling an LLM, etc. LangGraph lets you add retry policies to nodes.

To configure a retry policy, pass the `retryPolicy` parameter to the [`addNode`](https://reference.langchain.com/javascript/classes/_langchain_langgraph.index.Graph.html#addnode). The `retryPolicy` parameter takes in a `RetryPolicy` object. Below we instantiate a `RetryPolicy` object with the default parameters and associate it with a node:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { RetryPolicy } from "@langchain/langgraph";

const graph = new StateGraph(State)
  .addNode("nodeName", nodeFunction, { retryPolicy: {} })
  .compile();
```

By default, the retry policy retries on any exception except for the following:

- `TypeError`
- `SyntaxError`
- `ReferenceError`

  Consider an example in which we are reading from a SQL database. Below we pass two different retry policies to nodes:

  ```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import Database from "better-sqlite3";
  import { ChatAnthropic } from "@langchain/anthropic";
  import { StateGraph, StateSchema, MessagesValue, GraphNode, START, END } from "@langchain/langgraph";
  import { AIMessage } from "@langchain/core/messages";

  const State = new StateSchema({
    messages: MessagesValue,
  });

  // Create an in-memory database
  const db: typeof Database.prototype = new Database(":memory:");

  const model = new ChatAnthropic({ model: "claude-3-5-sonnet-20240620" });

  const callModel: GraphNode = async (state) => {
    const response = await model.invoke(state.messages);
    return { messages: [response] };
  };

  const queryDatabase: GraphNode = async (state) => {
    const queryResult: string = JSON.stringify(
      db.prepare("SELECT * FROM Artist LIMIT 10;").all(),
    );

    return { messages: [new AIMessage({ content: "queryResult" })] };
  };

  const workflow = new StateGraph(State)
    // Define the two nodes we will cycle between
    .addNode("call_model", callModel, { retryPolicy: { maxAttempts: 5 } })
    .addNode("query_database", queryDatabase, {
      retryPolicy: {
        retryOn: (e: any): boolean => {
          if (e instanceof Database.SqliteError) {
            // Retry on "SQLITE_BUSY" error
            return e.code === "SQLITE_BUSY";
          }
          return false; // Don't retry on other errors
        },
      },
    })
    .addEdge(START, "call_model")
    .addEdge("call_model", "query_database")
    .addEdge("query_database", END);

  const graph = workflow.compile();
  ```
