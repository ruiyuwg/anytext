# Join & rejoin streams

Source: https://docs.langchain.com/oss/javascript/langchain/frontend/join-rejoin

Disconnect from and reconnect to running agent streams

Join and rejoin lets you disconnect from a running agent stream without stopping the agent, then reconnect to it later. The agent continues executing server-side while the client is away, and you pick up the stream exactly where you left off.

This feature requires the [LangGraph Agent Server](/langsmith/local-server). Run your agent locally with `langgraph dev` or [deploy it to LangSmith](/langsmith/deployment) to use this pattern.

## Why join & rejoin?

Traditional streaming APIs tightly couple the client and server: if the client disconnects, the stream is lost. Join and rejoin breaks this coupling, enabling several important patterns:

- **Network interruptions**: mobile users moving between cell towers or Wi-Fi networks can seamlessly resume
- **Page navigation**: users navigating away from a chat page and returning later without losing progress
- **Mobile backgrounding**: apps suspended by the OS can rejoin the stream when foregrounded
- **Long-running tasks**: agents performing multi-minute operations (research, code generation, data analysis) where users don't need to keep the page open
- **Multi-device handoff**: start a conversation on your phone, rejoin on your desktop

## Core concepts

The join/rejoin pattern involves three key mechanisms:

| Method / Option            | Purpose                                                                      |
| -------------------------- | ---------------------------------------------------------------------------- |
| `stream.stop()`            | Disconnect the client from the stream without stopping the agent             |
| `stream.joinStream(runId)` | Reconnect to an existing stream by its run ID                                |
| `onDisconnect: "continue"` | Submit option that tells the server to keep running after client disconnects |
| `streamResumable: true`    | Submit option that enables the stream to be rejoined later                   |

`stream.stop()` is fundamentally different from cancelling a run. Stopping only disconnects the **client**. The agent continues processing server-side. To actually cancel the agent's execution, you would use interrupt or cancel mechanisms instead.

## Setting up `useStream`

The key setup step is capturing the `run_id` from the `onCreated` callback so you can rejoin later.

Import your agent and pass `typeof myAgent` as a type parameter to `useStream` for type-safe access to state values:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { myAgent } from "./agent";
```

```tsx React theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/react";
import { useState } from "react";

function Chat() {
  const [savedRunId, setSavedRunId] = useState(null);

  const stream = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "join_rejoin",
    onCreated(run) {
      setSavedRunId(run.run_id);
    },
  });

  const isConnected = stream.isLoading;

  return (
    
      
      
      <ChatControls
        stream={stream}
        savedRunId={savedRunId}
        isConnected={isConnected}
      />
    
  );
}
```

```vue Vue theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}

import { useStream } from "@langchain/vue";
import { ref, computed } from "vue";

const savedRunId = ref(null);

const stream = useStream({
  apiUrl: "http://localhost:2024",
  assistantId: "join_rejoin",
  onCreated(run) {
    savedRunId.value = run.run_id;
  },
});

const isConnected = computed(() => stream.isLoading.value);



  
    
    
    <ChatControls
      :stream="stream"
      :savedRunId="savedRunId"
      :isConnected="isConnected"
    />
  

```

```svelte Svelte theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}

  import { useStream } from "@langchain/svelte";

  let savedRunId: string | null = null;

  const { messages, isLoading, submit, stop, joinStream } = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "join_rejoin",
    onCreated(run) {
      savedRunId = run.run_id;
    },
  });



  
  
  <ChatControls
    {savedRunId}
    isConnected={$isLoading}
    on:disconnect={() => stop()}
    on:rejoin={() => joinStream(savedRunId)}
  />

```

```ts Angular theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Component, signal } from "@angular/core";
import { useStream } from "@langchain/angular";

@Component({
  selector: "app-chat",
  template: `
    
    
    <chat-controls
      [stream]="stream"
      [savedRunId]="savedRunId()"
      [isConnected]="stream.isLoading()"
    />
  `,
})
export class ChatComponent {
  savedRunId = signal(null);

  stream = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "join_rejoin",
    onCreated: (run) => {
      this.savedRunId.set(run.run_id);
    },
  });
}
```

## Submitting with resumable options

When you submit a message, pass `onDisconnect: "continue"` and `streamResumable: true` to enable the join/rejoin flow:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
stream.submit(
  { messages: [{ type: "human", content: text }] },
  {
    onDisconnect: "continue",
    streamResumable: true,
  }
);
```

| Option            | Default    | Description                                                                                          |
| ----------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| `onDisconnect`    | `"cancel"` | What happens when the client disconnects. `"continue"` keeps the agent running; `"cancel"` stops it. |
| `streamResumable` | `false`    | When `true`, the server retains the stream state so a client can rejoin later.                       |

Always use both options together. Setting `onDisconnect: "continue"` without `streamResumable: true` means the agent keeps running but you cannot rejoin the stream to see its output.

## Disconnecting from a stream

Call `stream.stop()` to disconnect the client. The agent continues processing server-side.

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
stream.stop();
```

After calling `stop()`:

- `stream.isLoading` becomes `false`
- The message list retains all messages received up to the disconnect point
- The agent continues running on the server
- No new messages are received until you rejoin

## Rejoining a stream

Call `stream.joinStream(runId)` with the saved run ID to reconnect:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
stream.joinStream(savedRunId);
```

After rejoining:

- `stream.isLoading` becomes `true` again
- Any messages generated while disconnected are delivered
- New streaming messages resume in real-time
- If the agent has already finished, you receive the final state immediately

## Building a connection status indicator

A visual indicator helps users understand whether they are actively receiving updates from the agent.

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function ConnectionStatus({ connected }: { connected: boolean }) {
  return (
    <div className="connection-status">
      <span
        className={`status-dot ${connected ? "connected" : "disconnected"}`}
      />
      <span className="status-text">
        {connected ? "Connected" : "Disconnected"}
      </span>
    </div>
  );
}
```

Style the indicator with a green/red dot:

```css theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 6px;
}

.status-dot.connected {
  background-color: #22c55e;
  box-shadow: 0 0 4px #22c55e;
}

.status-dot.disconnected {
  background-color: #ef4444;
  box-shadow: 0 0 4px #ef4444;
}
```

## Disconnect and rejoin controls

Provide explicit buttons for disconnecting and rejoining so users have full control:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function ChatControls({ stream, savedRunId, isConnected }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    stream.submit(
      { messages: [{ type: "human", content: input.trim() }] },
      { onDisconnect: "continue", streamResumable: true }
    );
    setInput("");
  };

  return (
    <div className="controls">
      <div className="input-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>

      <div className="stream-controls">
        {isConnected ? (
          <button onClick={() => stream.stop()} className="disconnect-btn">
            Disconnect
          </button>
        ) : (
          savedRunId && (
            <button
              onClick={() => stream.joinStream(savedRunId)}
              className="rejoin-btn"
            >
              Rejoin stream
            </button>
          )
        )}
      </div>
    </div>
  );
}
```

## Persisting the run ID

For cross-session rejoin (e.g., the user closes the browser and returns later), persist the run ID to storage:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const stream = useStream<typeof myAgent>({
  apiUrl: "http://localhost:2024",
  assistantId: "join_rejoin",
  onCreated(run) {
    localStorage.setItem("activeRunId", run.run_id);
  },
});

// On page load, check for an active run
const existingRunId = localStorage.getItem("activeRunId");
if (existingRunId) {
  stream.joinStream(existingRunId);
}
```

Persisted run IDs should be cleaned up when a run completes. Listen for the stream to finish and remove the stored ID to avoid attempting to rejoin completed runs.

## Error handling

Rejoining can fail if the run has expired, been deleted, or if the server has restarted. Handle these cases gracefully:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
try {
  stream.joinStream(savedRunId);
} catch (error) {
  console.error("Failed to rejoin stream:", error);
  // Clear stale run ID and inform the user
  setSavedRunId(null);
  localStorage.removeItem("activeRunId");
}
```

## Complete example

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function JoinRejoinChat() {
  const [savedRunId, setSavedRunId] = useState<string | null>(null);
  const [input, setInput] = useState("");

  const stream = useStream<typeof myAgent>({
    apiUrl: "http://localhost:2024",
    assistantId: "join_rejoin",
    onCreated(run) {
      setSavedRunId(run.run_id);
    },
  });

  const isConnected = stream.isLoading;

  const handleSend = () => {
    if (!input.trim()) return;
    stream.submit(
      { messages: [{ type: "human", content: input.trim() }] },
      { onDisconnect: "continue", streamResumable: true }
    );
    setInput("");
  };

  return (
    <div className="chat-container">
      <header>
        <h2>Join & Rejoin Demo</h2>
        <ConnectionStatus connected={isConnected} />
      </header>

      <div className="messages">
        {stream.messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}
      </div>

      <div className="controls">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button type="submit">Send</button>
        </form>

        <div className="stream-actions">
          {isConnected ? (
            <button onClick={() => stream.stop()}>
              Disconnect
            </button>
          ) : (
            savedRunId && (
              <button onClick={() => stream.joinStream(savedRunId)}>
                Rejoin stream
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
```

## Best practices

- **Always save the run ID**: without it, rejoining is impossible. Use both component state and persistent storage for resilience.
- **Show clear connection state**: users should always know whether they are receiving live updates or viewing a snapshot.
- **Auto-rejoin on visibility change**: use the Page Visibility API to automatically rejoin when the user returns to the tab.
- **Set reasonable timeouts**: if a rejoin attempt takes too long, fall back to fetching the thread history instead.
- **Clean up completed runs**: remove persisted run IDs when the agent finishes to avoid stale rejoin attempts.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/frontend/join-rejoin.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
