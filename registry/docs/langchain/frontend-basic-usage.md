## Basic usage

The `useStream` hook connects to any LangGraph graph, whether that's running on from your own endpoint, or deployed using [LangSmith deployments](/langsmith/deployments).

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/langgraph-sdk/react";

function Chat() {
  const stream = useStream({
    assistantId: "agent",
    // Local development
    apiUrl: "http://localhost:2024",
    // Production deployment (LangSmith hosted)
    // apiUrl: "https://your-deployment.us.langgraph.app"
  });

  const handleSubmit = (message: string) => {
    stream.submit({
      messages: [
        { content: message, type: "human" }
      ],
    });
  };

  return (
    <div>
      {stream.messages.map((message, idx) => (
        <div key={message.id ?? idx}>
          {message.type}: {message.content}
        </div>
      ))}

      {stream.isLoading && <div>Loading...</div>}
      {stream.error && <div>Error: {stream.error.message}</div>}
    </div>
  );
}
```

Learn how to [deploy your agents to LangSmith](/oss/javascript/langchain/deploy) for production-ready hosting with built-in observability, authentication, and scaling.

```
The ID of the agent to connect to. When using LangSmith deployments, this must match the agent ID shown in your deployment dashboard. For custom API deployments or local development, this can be any string that your server uses to identify the agent.



The URL of the Agent Server. Defaults to `http://localhost:2024` for local development.



API key for authentication. Required when connecting to deployed agents on LangSmith.



Connect to an existing thread instead of creating a new one. Useful for resuming conversations.
```

void">
Callback invoked when a new thread is created. Use this to persist the thread ID for later use.

Storage)">
Automatically resume an ongoing run when the component mounts. Set to `true` to use session storage, or provide a custom storage function.

void">
Callback invoked when a new run is created. Useful for persisting run metadata for resumption.

void">
Callback invoked when an error occurs during streaming.

void">
Callback invoked when the stream completes successfully with the final state.

void">
Handle custom events emitted from your agent using the `writer`. See [Custom streaming events](#custom-streaming-events).

void">
Handle state update events after each graph step.

void">
Handle metadata events with run and thread information.

```
The key in the graph state that contains the messages array.



Batch state updates for better rendering performance. Disable for immediate updates.



Initial state values to display while the first stream is loading. Useful for showing cached thread data immediately.





All messages in the current thread, including both human and AI messages.



The current graph state values. Type is inferred from the agent or graph type parameter.



Whether a stream is currently in progress. Use this to show loading indicators.



Any error that occurred during streaming. `null` when no error.



Current interrupt requiring user input, such as human-in-the-loop approval requests.



All tool calls across all messages, with their results and state (`pending`, `completed`, or `error`).
```

Promise">
Submit new input to the agent. Pass `null` as input when resuming from an interrupt with a command. Options include `checkpoint` for branching, `optimisticValues` for optimistic updates, and `threadId` for optimistic thread creation.

void">
Stop the current stream immediately.

void">
Resume an existing stream by run ID. Use with `onCreated` for manual stream resumption.

void">
Switch to a different branch in the conversation history.

ToolCall\[]">
Get all tool calls for a specific AI message.

MessageMetadata">
Get metadata for a message, including streaming info like `langgraph_node` for identifying the source node, and `firstSeenState` for branching.

```
Tree representation of the thread for advanced branching controls in non-message based graphs.
```
