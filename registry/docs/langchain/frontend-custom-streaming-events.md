## Custom streaming events

Stream custom data from your agent using the `writer` in your tools or nodes. Handle these events in the UI with the `onCustomEvent` callback.

```python agent.py theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import asyncio
import time
from langchain import create_agent, tool
from langchain.types import ToolRuntime

@tool
async def analyze_data(data_source: str, *, config: ToolRuntime) -> str:
    """Analyze data with progress updates."""
    steps = ["Connecting...", "Fetching...", "Processing...", "Done!"]

    for i, step in enumerate(steps):
        # Emit progress events during execution
        if config.writer:
            config.writer({
                "type": "progress",
                "id": f"analysis-{int(time.time() * 1000)}",
                "message": step,
                "progress": ((i + 1) / len(steps)) * 100,
            })
        await asyncio.sleep(0.5)

    return '{"result": "Analysis complete"}'

agent = create_agent(
    model="openai:gpt-4.1-mini",
    tools=[analyze_data],
)
```

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useState, useCallback } from "react";
import { useStream } from "@langchain/langgraph-sdk/react";
import type { AgentState } from "./types";

interface ProgressData {
  type: "progress";
  id: string;
  message: string;
  progress: number;
}

function isProgressData(data: unknown): data is ProgressData {
  return (
    typeof data === "object" &&
    data !== null &&
    "type" in data &&
    (data as ProgressData).type === "progress"
  );
}

function CustomStreamingUI() {
  const [progressData, setProgressData] = useState<Map<string, ProgressData>>(
    new Map()
  );

  const handleCustomEvent = useCallback((data: unknown) => {
    if (isProgressData(data)) {
      setProgressData((prev) => {
        const updated = new Map(prev);
        updated.set(data.id, data);
        return updated;
      });
    }
  }, []);

  const stream = useStream({
    assistantId: "custom-streaming",
    apiUrl: "http://localhost:2024",
    onCustomEvent: handleCustomEvent,
  });

  return (
    
      {Array.from(progressData.values()).map((data) => (
        
          
            {data.message}
            {data.progress}%
          
          
            <div
              className="bg-blue-500 h-2 rounded-full transition-all"
              style={{ width: `${data.progress}%` }}
            />
          
        
      ))}
    
  );
}
```

```typescript types.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { Message } from "@langchain/langgraph-sdk";

// Define tool calls to match your Python agent
export type AnalyzeDataToolCall = {
  name: "analyze_data";
  args: { data_source: string };
  id?: string;
};

export type AgentToolCalls = AnalyzeDataToolCall;

export interface AgentState {
  messages: Message[];
}
```

See a complete implementation of custom events with progress bars, status badges, and file operation cards in the `custom-streaming` example.

## Event handling

The `useStream` hook provides callback options that give you access to different types of streaming events. You don't need to explicitly configure stream modes—just pass callbacks for the event types you want to handle:

### Available callbacks

| Callback          | Description                                                  | Stream mode |
| ----------------- | ------------------------------------------------------------ | ----------- |
| `onUpdateEvent`   | Called when a state update is received after each graph step | `updates`   |
| `onCustomEvent`   | Called when a custom event is received from your graph       | `custom`    |
| `onMetadataEvent` | Called with run and thread metadata                          | `metadata`  |
| `onError`         | Called when an error occurs                                  | -           |
| `onFinish`        | Called when the stream completes                             | -           |
