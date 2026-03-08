## Custom streaming events

Stream custom data from your agent using the `writer` in your tools or nodes. Handle these events in the UI with the `onCustomEvent` callback.

```typescript agent.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { tool, type ToolRuntime } from "langchain";
import { z } from "zod";

// Define your custom event types
interface ProgressData {
  type: "progress";
  id: string;
  message: string;
  progress: number;
}

const analyzeDataTool = tool(
  async ({ dataSource }, config: ToolRuntime) => {
    const steps = ["Connecting...", "Fetching...", "Processing...", "Done!"];

    for (let i = 0; i < steps.length; i++) {
      // Emit progress events during execution
      config.writer?.({
        type: "progress",
        id: `analysis-${Date.now()}`,
        message: steps[i],
        progress: ((i + 1) / steps.length) * 100,
      } satisfies ProgressData);

      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    return JSON.stringify({ result: "Analysis complete" });
  },
  {
    name: "analyze_data",
    description: "Analyze data with progress updates",
    schema: z.object({
      dataSource: z.string().describe("Data source to analyze"),
    }),
  }
);
```

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useState, useCallback } from "react";
import { useStream } from "@langchain/langgraph-sdk/react";
import type { agent } from "./agent";

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
    
      {/* Render progress cards */}
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

See a complete implementation of custom events with progress bars, status badges, and file operation cards in the `custom-streaming` example.

## Event handling

The `useStream` hook provides callback options that give you access to different types of streaming events. You don't need to explicitly configure stream modes—just pass callbacks for the event types you want to handle:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const stream = useStream({
  apiUrl: "http://localhost:2024",
  assistantId: "agent",

  // Handle state updates after each graph step
  onUpdateEvent: (update, options) => {
    console.log("Graph update:", update);
  },

  // Handle custom events streamed from your graph
  onCustomEvent: (event, options) => {
    console.log("Custom event:", event);
  },

  // Handle metadata events with run/thread info
  onMetadataEvent: (metadata) => {
    console.log("Run ID:", metadata.run_id);
    console.log("Thread ID:", metadata.thread_id);
  },

  onError: (error) => {
    console.error("Stream error:", error);
  },

  onFinish: (state, options) => {
    console.log("Stream finished with final state:", state);
  },
});
```

### Available callbacks

| Callback          | Description                                                  | Stream mode |
| ----------------- | ------------------------------------------------------------ | ----------- |
| `onUpdateEvent`   | Called when a state update is received after each graph step | `updates`   |
| `onCustomEvent`   | Called when a custom event is received from your graph       | `custom`    |
| `onMetadataEvent` | Called with run and thread metadata                          | `metadata`  |
| `onError`         | Called when an error occurs                                  | -           |
| `onFinish`        | Called when the stream completes                             | -           |
