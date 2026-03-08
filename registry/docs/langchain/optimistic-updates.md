## Optimistic updates

You can optimistically update the client state before performing a network request, providing immediate feedback to the user:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const stream = useStream({
  apiUrl: "http://localhost:2024",
  assistantId: "agent",
});

const handleSubmit = (text: string) => {
  const newMessage = { type: "human" as const, content: text };

  stream.submit(
    { messages: [newMessage] },
    {
      optimisticValues(prev) {
        const prevMessages = prev.messages ?? [];
        return { ...prev, messages: [...prevMessages, newMessage] };
      },
    }
  );
};
```

### Optimistic thread creation

Use the `threadId` option in `submit` to enable optimistic UI patterns where you need to know the thread ID before the thread is created:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useState } from "react";
import { useStream } from "@langchain/langgraph-sdk/react";

function Chat() {
  const [threadId, setThreadId] = useState<string | null>(null);
  const [optimisticThreadId] = useState(() => crypto.randomUUID());

  const stream = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "agent",
    threadId,
    onThreadId: setThreadId,
  });

  const handleSubmit = (text: string) => {
    // Navigate immediately without waiting for thread creation
    window.history.pushState({}, "", `/threads/${optimisticThreadId}`);

    // Create thread with the predetermined ID
    stream.submit(
      { messages: [{ type: "human", content: text }] },
      { threadId: optimisticThreadId }
    );
  };
}
```

### Cached thread display

Use the `initialValues` option to display cached thread data immediately while the history is being loaded from the server:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function Chat({ threadId, cachedData }) {
  const stream = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "agent",
    threadId,
    initialValues: cachedData?.values,
  });

  // Shows cached messages instantly, then updates when server responds
}
```
