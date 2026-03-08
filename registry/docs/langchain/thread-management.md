## Thread management

Keep track of conversations with built-in thread management. You can access the current thread ID and get notified when new threads are created:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useState } from "react";
import { useStream } from "@langchain/langgraph-sdk/react";

function Chat() {
  const [threadId, setThreadId] = useState<string | null>(null);

  const stream = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "agent",
    threadId: threadId,
    onThreadId: setThreadId,
  });

  // threadId is updated when a new thread is created
  // Store it in URL params or localStorage for persistence
}
```

We recommend storing the `threadId` to let users resume conversations after page refreshes.

### Resume after page refresh

The `useStream` hook can automatically resume an ongoing run upon mounting by setting `reconnectOnMount: true`. This is useful for continuing a stream after a page refresh, ensuring no messages and events generated during the downtime are lost.

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const stream = useStream({
  apiUrl: "http://localhost:2024",
  assistantId: "agent",
  reconnectOnMount: true,
});
```

By default the ID of the created run is stored in `window.sessionStorage`, which can be swapped by passing a custom storage function:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const stream = useStream({
  apiUrl: "http://localhost:2024",
  assistantId: "agent",
  reconnectOnMount: () => window.localStorage,
});
```

For manual control over the resumption process, use the run callbacks to persist metadata and `joinStream` to resume:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/langgraph-sdk/react";
import { useEffect, useRef } from "react";

function Chat({ threadId }: { threadId: string | null }) {
  const stream = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "agent",
    threadId,
    onCreated: (run) => {
      // Persist run ID when stream starts
      window.sessionStorage.setItem(`resume:${run.thread_id}`, run.run_id);
    },
    onFinish: (_, run) => {
      // Clean up when stream completes
      window.sessionStorage.removeItem(`resume:${run?.thread_id}`);
    },
  });

  // Resume stream on mount if there's a stored run ID
  const joinedThreadId = useRef<string | null>(null);
  useEffect(() => {
    if (!threadId) return;
    const runId = window.sessionStorage.getItem(`resume:${threadId}`);
    if (runId && joinedThreadId.current !== threadId) {
      stream.joinStream(runId);
      joinedThreadId.current = threadId;
    }
  }, [threadId]);

  const handleSubmit = (text: string) => {
    // Use streamResumable to ensure events aren't lost
    stream.submit(
      { messages: [{ type: "human", content: text }] },
      { streamResumable: true }
    );
  };
}
```

See a complete implementation of stream resumption with `reconnectOnMount` and thread persistence in the `session-persistence` example.
