# Message queues

Source: https://docs.langchain.com/oss/javascript/langchain/frontend/message-queues

Queue multiple messages and manage them while the agent processes sequentially

Message queuing lets users send multiple messages in rapid succession without waiting for the agent to finish processing the current one. Each message is enqueued server-side and processed sequentially, giving you full visibility and control over the pending queue.

This feature requires the [LangGraph Agent Server](/langsmith/local-server). Run your agent locally with `langgraph dev` or [deploy it to LangSmith](/langsmith/deployment) to use this pattern.

## Why message queues?

In a typical chat interface, users must wait for the agent to finish responding before sending another message. This creates friction in several scenarios:

- **Batch questions**: a user wants to ask five related questions at once rather than waiting for each answer
- **Follow-up chains**: submitting clarifications or additional context while the agent is still working
- **Automated testing sequences**: programmatically sending a series of prompts to validate agent behavior
- **Data entry workflows**: feeding structured inputs one after another for processing

Message queuing solves this by accepting all submissions immediately and processing them in order.

## How it works

Under the hood, LangGraph uses `multitaskStrategy: "enqueue"` to manage concurrent submissions. When a message is submitted while the agent is already processing, it gets added to a server-side queue. Once the current run completes, the next queued message is picked up automatically.

The `useStream` hook exposes a `queue` property that provides real-time visibility into pending messages:

| Property           | Type                            | Description                              |
| ------------------ | ------------------------------- | ---------------------------------------- |
| `queue.entries`    | `QueueEntry[]`                  | Array of all pending queue entries       |
| `queue.size`       | `number`                        | Number of entries currently in the queue |
| `queue.cancel(id)` | `(id: string) => Promise<void>` | Cancel a specific queued entry by ID     |
| `queue.clear()`    | `() => Promise<void>`           | Cancel all queued entries                |

Each `QueueEntry` object contains:

| Field       | Type     | Description                                               |
| ----------- | -------- | --------------------------------------------------------- |
| `id`        | `string` | Unique identifier for this queue entry                    |
| `values`    | `object` | The input values (including messages) that were submitted |
| `options`   | `object` | Any additional options passed with the submission         |
| `createdAt` | `string` | ISO timestamp of when the entry was created               |

## Setting up `useStream`

Import your agent and pass `typeof myAgent` as a type parameter to `useStream` for type-safe access to state values:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { myAgent } from "./agent";
```

```tsx React theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/react";

function Chat() {
  const stream = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "message_queue",
  });

  const handleSubmit = (text: string) => {
    stream.submit({
      messages: [{ type: "human", content: text }],
    });
  };

  // Access queue state
  const pendingCount = stream.queue.size;
  const entries = stream.queue.entries;

  return (
    
      
      {pendingCount > 0 && }
      
    
  );
}
```

```vue Vue theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}

import { useStream } from "@langchain/vue";

const stream = useStream({
  apiUrl: "http://localhost:2024",
  assistantId: "message_queue",
});

function handleSubmit(text: string) {
  stream.submit({
    messages: [{ type: "human", content: text }],
  });
}

// Access queue state via .value in script
const pendingCount = computed(() => stream.queue.value.size);
const entries = computed(() => stream.queue.value.entries);



  
    
     0" :entries="stream.queue.entries" :queue="stream.queue" />
    
  

```

```svelte Svelte theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}

  import { useStream } from "@langchain/svelte";

  const { messages, submit, queue } = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "message_queue",
  });

  function handleSubmit(text: string) {
    submit({
      messages: [{ type: "human", content: text }],
    });
  }



  

    
  {/if}
   handleSubmit(e.detail)} />

```

```ts Angular theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Component } from "@angular/core";
import { useStream } from "@langchain/angular";

@Component({
  selector: "app-chat",
  template: `
    
    @if (stream.queue().size > 0) {
      
    }
    
  `,
})
export class ChatComponent {
  stream = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "message_queue",
  });

  handleSubmit(text: string) {
    this.stream.submit({
      messages: [{ type: "human", content: text }],
    });
  }
}
```

## Displaying the queue

Build a `QueueList` component that shows each pending message with a cancel button. This gives users visibility into what's waiting and the ability to remove items they no longer need.

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function QueueList({ entries, queue }) {
  return (
    <div className="queue-panel">
      <div className="queue-header">
        <span>Queued messages ({entries.length})</span>
        <button onClick={() => queue.clear()}>Clear all</button>
      </div>
      <ul className="queue-entries">
        {entries.map((entry) => {
          const text = entry.values?.messages?.[0]?.content ?? "Unknown";
          return (
            <li key={entry.id} className="queue-entry">
              <span className="queue-text">{text}</span>
              <span className="queue-time">
                {new Date(entry.createdAt).toLocaleTimeString()}
              </span>
              <button
                className="queue-cancel"
                onClick={() => queue.cancel(entry.id)}
              >
                Cancel
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```

Display the first few characters of each queued message as a preview so users can quickly identify which items to cancel without reading full messages.

## Cancelling queued messages

You have two levels of cancellation:

### Cancel a single entry

Remove a specific message from the queue by its ID. The agent will skip it and move to the next entry.

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
await queue.cancel(entryId);
```

### Clear the entire queue

Remove all pending messages at once. Useful when the user changes context or wants to start over.

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
await queue.clear();
```

Cancelling a queue entry only affects messages that have **not yet started
processing**. If the agent is already working on a message, cancelling it from
the queue has no effect. Use `stream.stop()` to interrupt the current run.

## Chaining follow-up submissions with `onCreated`

The `onCreated` callback fires when a new run is created, giving you a hook to submit follow-up messages programmatically. This is useful for building multi-step workflows where the next question depends on the previous submission being accepted.

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
stream.submit(
  { messages: [{ type: "human", content: "What is quantum computing?" }] },
  {
    onCreated(run) {
      console.log("Run created:", run.run_id);
      // Chain a follow-up
      stream.submit({
        messages: [{ type: "human", content: "Give me a simple analogy." }],
      });
    },
  }
);
```

This pattern naturally fills the queue. The first message starts processing
immediately, and the follow-up is queued behind it.

## Starting a new thread

When a user wants to begin a fresh conversation, use `switchThread(null)` to create a new thread. This clears the current message history and queue.

```tsx React theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function NewThreadButton() {
  const stream = useStream({ /* ... */ });

  return (
     stream.switchThread(null)}>
      New conversation
    
  );
}
```

```vue Vue theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}

const stream = useStream({ /* ... */ });



  New conversation

```

```svelte Svelte theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}

  const { switchThread } = useStream({ /* ... */ });


 switchThread(null)}>New conversation
```

```ts Angular theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
stream = useStream({ /* ... */ });

// In template:
// New conversation
```

## Complete example

Putting it all together, here is a full chat component with queue management:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function QueueChat() {
  const stream = useStream<typeof myAgent>({
    apiUrl: "http://localhost:2024",
    assistantId: "message_queue",
  });

  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    stream.submit({
      messages: [{ type: "human", content: input.trim() }],
    });
    setInput("");
  };

  return (
    <div className="chat-container">
      <header>
        <h2>Queue Chat</h2>
        <button onClick={() => stream.switchThread(null)}>New thread</button>
      </header>

      <div className="messages">
        {stream.messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}
        {stream.isLoading && <TypingIndicator />}
      </div>

      {stream.queue.size > 0 && (
        <div className="queue-panel">
          <strong>Queued ({stream.queue.size})</strong>
          <button onClick={() => stream.queue.clear()}>Clear all</button>
          {stream.queue.entries.map((entry) => (
            <div key={entry.id} className="queue-item">
              <span>{entry.values?.messages?.[0]?.content}</span>
              <button onClick={() => stream.queue.cancel(entry.id)}>×</button>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message (you can send multiple!)"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
```

## Best practices

- **Limit queue size**: While there is no hard client-side limit on queue size,
  be mindful that very large queues can degrade user experience. Consider
  showing a warning when the queue exceeds a reasonable threshold (e.g., 10
  items).
- **Show queue position**: Number each queued item so users know the processing order.
- **Preserve input focus**: Keep the input field focused after submission so users can type the next message immediately.
- **Animate transitions**: Smoothly move items from the queue panel into the message list as they start processing.
- **Handle errors gracefully**: If a queued message fails, surface the error without blocking subsequent queue entries.
- **Debounce rapid submissions**: For automated or programmatic submissions, add a small delay between messages to avoid overwhelming the server.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/frontend/message-queues.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
