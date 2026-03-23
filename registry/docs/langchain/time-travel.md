# Time travel

Source: https://docs.langchain.com/oss/javascript/langchain/frontend/time-travel

Inspect, navigate, and resume from any checkpoint in the conversation history

Every state change in a LangGraph agent creates a **checkpoint**, a complete
snapshot of the agent's state at that moment. Time travel lets you inspect any
checkpoint, view the exact state the agent held, and **resume execution from
that point** to explore alternative paths. It's a debugger, an undo button, and
an audit log all in one.

This feature requires the [LangGraph Agent Server](/langsmith/local-server). Run your agent locally with `langgraph dev` or [deploy it to LangSmith](/langsmith/deployment) to use this pattern.

## How checkpoints work

LangGraph persists agent state after every node execution. Each persisted state
is a `ThreadState` object that captures:

- **checkpoint**: metadata identifying this specific snapshot (ID, timestamp)
- **values**: the full agent state at this point (messages, custom keys)
- **tasks**: the graph nodes that were scheduled to run next
- **next**: the names of upcoming nodes in the execution plan

This creates a linear timeline of every decision the agent made, every tool it
called, and every response it produced. Your UI can render this timeline and let
users jump to any point.

## Setting up useStream

Enable checkpoint history by passing `fetchStateHistory: true` to `useStream`.
This tells the hook to load the full checkpoint timeline for the current thread.

Import your agent and pass `typeof myAgent` as a type parameter to `useStream` for type-safe access to state values:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { myAgent } from "./agent";
```

```tsx React theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/react";

const AGENT_URL = "http://localhost:2024";

export function TimeTravelChat() {
  const stream = useStream({
    apiUrl: AGENT_URL,
    assistantId: "time_travel",
    fetchStateHistory: true,
  });

  const history = stream.history ?? [];

  return (
    
      
      <TimelineSidebar
        history={history}
        onSelect={(cp) => stream.submit(null, { checkpoint: cp.checkpoint })}
      />
    
  );
}
```

```vue Vue theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}

import { useStream } from "@langchain/vue";
import { computed } from "vue";

const AGENT_URL = "http://localhost:2024";

const stream = useStream({
  apiUrl: AGENT_URL,
  assistantId: "time_travel",
  fetchStateHistory: true,
});

const history = computed(() => stream.history.value ?? []);

function resumeFrom(cp: ThreadState) {
  stream.submit(null, { checkpoint: cp.checkpoint });
}



  
    
    
  

```

```svelte Svelte theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}

  import { useStream } from "@langchain/svelte";

  const AGENT_URL = "http://localhost:2024";

  const { messages, history, submit } = useStream({
    apiUrl: AGENT_URL,
    assistantId: "time_travel",
    fetchStateHistory: true,
  });

  function resumeFrom(cp: ThreadState) {
    submit(null, { checkpoint: cp.checkpoint });
  }



  
  

```

```ts Angular theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Component, computed } from "@angular/core";
import { useStream } from "@langchain/angular";

const AGENT_URL = "http://localhost:2024";

@Component({
  selector: "app-time-travel-chat",
  template: `
    
      
      <app-timeline-sidebar
        [history]="history()"
        (select)="resumeFrom($event)"
      />
    
  `,
})
export class TimeTravelChatComponent {
  stream = useStream({
    apiUrl: AGENT_URL,
    assistantId: "time_travel",
    fetchStateHistory: true,
  });

  history = computed(() => this.stream.history() ?? []);

  resumeFrom(cp: ThreadState) {
    this.stream.submit(null, { checkpoint: cp.checkpoint });
  }
}
```

## The ThreadState object

Each entry in the `history` array is a `ThreadState` representing one checkpoint
in the timeline:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
interface ThreadState {
  checkpoint: {
    checkpoint_id: string;
    checkpoint_ns: string;
  };
  values: Record<string, unknown>;
  tasks: Array<{
    id: string;
    name: string;
    interrupts?: unknown[];
  }>;
  next: string[];
}
```

| Property     | Description                                                                            |
| ------------ | -------------------------------------------------------------------------------------- |
| `checkpoint` | Identifies this snapshot. Pass it to `submit` to resume from here                      |
| `values`     | The complete agent state at this point, including `messages` and any custom state keys |
| `tasks`      | The graph nodes that ran at this checkpoint, including their names and any interrupts  |
| `next`       | Names of nodes scheduled to execute after this checkpoint                              |

## Building a checkpoint timeline

The timeline sidebar shows every checkpoint as a clickable entry. Each entry
displays the node that ran and how many messages existed at that point:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function TimelineSidebar({
  history,
  onSelect,
}: {
  history: ThreadState[];
  onSelect: (cp: ThreadState) => void;
}) {
  return (
    <aside className="w-80 overflow-y-auto border-l bg-gray-50 p-4">
      <h2 className="mb-4 text-sm font-semibold uppercase text-gray-500">
        Checkpoint Timeline
      </h2>
      <div className="space-y-2">
        {history.map((cp, i) => {
          const taskName = cp.tasks?.[0]?.name ?? "unknown";
          const msgCount = (cp.values?.messages as unknown[])?.length ?? 0;

          return (
            <button
              key={cp.checkpoint.checkpoint_id}
              onClick={() => onSelect(cp)}
              className="w-full rounded-lg border bg-white p-3 text-left
                         hover:border-blue-400 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">#{i + 1}</span>
                <NodeBadge name={taskName} />
              </div>
              <p className="mt-1 text-sm font-medium">{taskName}</p>
              <p className="text-xs text-gray-500">
                {msgCount} message{msgCount !== 1 ? "s" : ""}
              </p>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
```

## Inspecting checkpoint state

Clicking a checkpoint should show the full state at that point. A JSON viewer
gives developers complete visibility into what the agent knew and decided:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function CheckpointInspector({ checkpoint }: { checkpoint: ThreadState }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-lg border bg-white p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          Checkpoint {checkpoint.checkpoint.checkpoint_id.slice(0, 8)}...
        </h3>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-blue-600 hover:underline"
        >
          {expanded ? "Collapse" : "Expand"} state
        </button>
      </div>

      <div className="mt-2 space-y-1 text-sm">
        <p>
          <strong>Node:</strong>{" "}
          {checkpoint.tasks?.[0]?.name ?? "—"}
        </p>
        <p>
          <strong>Next:</strong>{" "}
          {checkpoint.next?.join(", ") || "—"}
        </p>
        <p>
          <strong>Messages:</strong>{" "}
          {(checkpoint.values?.messages as unknown[])?.length ?? 0}
        </p>
      </div>

      {expanded && (
        <div className="mt-3 max-h-96 overflow-auto rounded bg-gray-900 p-3">
          <pre className="text-xs text-gray-200">
            {JSON.stringify(checkpoint.values, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
```

For production UIs, consider using a proper JSON viewer component with
collapsible nodes instead of raw `JSON.stringify`. Libraries like
`react-json-view` or `react-json-tree` give users a much better exploration
experience.

## Resuming from a checkpoint

The core of time travel is the ability to **resume execution from any prior
checkpoint**. When a user selects a checkpoint, call `submit` with `null` input
and pass the checkpoint reference:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
stream.submit(null, { checkpoint: selectedCheckpoint.checkpoint });
```

This tells LangGraph to:

1. Roll back to the selected checkpoint's state
2. Re-execute the graph from that point forward
3. Stream the new results to the client

The existing messages after the selected checkpoint are replaced by the new
execution path. This effectively creates a **branch** in the conversation
timeline.

Resuming from a checkpoint does not delete the original timeline. The previous
checkpoints remain available in the history. This means users can always go back
and try a different path without losing any prior work.

## The SplitView layout

Time travel works best with a split layout, with the main chat on the left and the
timeline on the right:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function TimeTravelLayout() {
  const stream = useStream<typeof myAgent>({
    apiUrl: AGENT_URL,
    assistantId: "time_travel",
    fetchStateHistory: true,
  });

  const [selectedCheckpoint, setSelectedCheckpoint] =
    useState<ThreadState | null>(null);

  const history = stream.history ?? [];

  return (
    <div className="flex h-screen">
      {/* Main chat area */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-2xl space-y-4">
          {stream.messages.map((msg) => (
            <Message key={msg.id} message={msg} />
          ))}
        </div>
        <ChatInput
          onSubmit={(text) =>
            stream.submit({ messages: [{ type: "human", content: text }] })
          }
          isLoading={stream.isLoading}
        />
      </main>

      {/* Timeline sidebar */}
      <aside className="w-96 overflow-y-auto border-l bg-gray-50">
        <TimelineSidebar
          history={history}
          selected={selectedCheckpoint}
          onSelect={setSelectedCheckpoint}
          onResume={(cp) =>
            stream.submit(null, { checkpoint: cp.checkpoint })
          }
        />
        {selectedCheckpoint && (
          <CheckpointInspector checkpoint={selectedCheckpoint} />
        )}
      </aside>
    </div>
  );
}
```

## Extracting checkpoint metadata

Transform raw checkpoint data into display-friendly entries for your timeline:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function formatCheckpoints(history: ThreadState[]) {
  return history.map((cp, index) => ({
    index,
    id: cp.checkpoint?.checkpoint_id,
    taskName: cp.tasks?.[0]?.name ?? "unknown",
    messageCount: (cp.values?.messages as unknown[])?.length ?? 0,
    hasInterrupts: cp.tasks?.some((t) => t.interrupts?.length) ?? false,
    nextNodes: cp.next ?? [],
  }));
}
```

This makes it easy to render timeline entries with meaningful labels instead of
raw IDs.

## Use cases

Time travel is invaluable across many scenarios:

- **Debugging agent behavior**: step through the agent's decisions to
  understand why it chose a particular path
- **Undoing actions**: if the agent took a wrong turn, resume from an earlier
  checkpoint and try again
- **Exploring alternatives**: fork from a mid-conversation checkpoint to see
  how different inputs change the outcome
- **Auditing**: review the complete history of an agent's actions for
  compliance, quality assurance, or post-incident analysis
- **Teaching**: walk through an agent's execution step by step to explain how
  multi-step reasoning works

  Time travel is especially powerful when combined with
  [human-in-the-loop](/oss/javascript/langchain/frontend/human-in-the-loop) patterns. If a human reviewer
  rejects an agent's action at an interrupt, they can resume from the checkpoint
  before the action was taken and provide corrective input.

## Handling interrupts in the timeline

Checkpoints that contain interrupts (human-in-the-loop pauses) deserve special
visual treatment. They represent moments where the agent stopped and waited for
human input:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function TimelineEntry({
  checkpoint,
  index,
}: {
  checkpoint: ThreadState;
  index: number;
}) {
  const hasInterrupt = checkpoint.tasks?.some(
    (t) => t.interrupts && t.interrupts.length > 0
  );

  return (
    <div
      className={`rounded-lg border p-3 ${
        hasInterrupt
          ? "border-amber-300 bg-amber-50"
          : "border-gray-200 bg-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400">#{index + 1}</span>
        {hasInterrupt && (
          <span className="rounded bg-amber-200 px-1.5 py-0.5 text-xs font-medium text-amber-800">
            Interrupt
          </span>
        )}
      </div>
      <p className="mt-1 text-sm font-medium">
        {checkpoint.tasks?.[0]?.name ?? "—"}
      </p>
    </div>
  );
}
```

## Best practices

- **Load history lazily**: for threads with hundreds of checkpoints, paginate
  or load only the most recent N entries to keep the UI responsive.
- **Show meaningful labels**: display node names and message counts instead of
  raw checkpoint IDs. Users need context, not UUIDs.
- **Confirm before resuming**: resuming from an old checkpoint replaces the
  current execution path. Show a confirmation dialog so users don't
  accidentally lose the current conversation state.
- **Highlight the current checkpoint**: make it visually obvious which
  checkpoint corresponds to the current state of the conversation.
- **Support keyboard navigation**: power users will want to step through
  checkpoints with arrow keys. Add keyboard handlers to the timeline for a
  smooth debugging experience.
- **Diff state between checkpoints**: for advanced users, showing what changed
  between two consecutive checkpoints can reveal exactly how the agent's state
  evolved at each step.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/frontend/time-travel.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
