## Custom transport

For custom API endpoints or non-standard deployments, use the `transport` option with `FetchStreamTransport` to connect to any streaming API.

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useMemo } from "react";
import { useStream, FetchStreamTransport } from "@langchain/langgraph-sdk/react";

function CustomAPIChat({ apiKey }: { apiKey: string }) {
  // Create transport with custom request handling
  const transport = useMemo(() => {
    return new FetchStreamTransport({
      apiUrl: "/api/my-agent",
      onRequest: async (url: string, init: RequestInit) => {
        // Inject API key or other custom data into requests
        const customBody = JSON.stringify({
          ...(JSON.parse(init.body as string) || {}),
          apiKey,
        });

        return {
          ...init,
          body: customBody,
          headers: {
            ...init.headers,
            "X-Custom-Header": "value",
          },
        };
      },
    });
  }, [apiKey]);

  const stream = useStream({
    transport,
  });

  // Use stream as normal
  return (
    <div>
      {stream.messages.map((message, idx) => (
        <MessageBubble key={message.id ?? idx} message={message} />
      ))}
    </div>
  );
}
```

### Example: Streaming from Next.js endpoints

You can host your agent in Next.js API routes instead of running a separate Agent Server. The `useStream` hook communicates via Server-Sent Events (SSE), so any endpoint that returns the correct event format works—including your own Next.js route.

**When to use your own API routes vs LangSmith**

For basic agent interaction (streaming, tool calls), rolling your own Next.js API routes works well. For persisting conversations, loading thread history, and conversation branching, consider [LangSmith deployments](/langsmith/deployments), which provide these features out of the box.

#### Server: Stream from an API route

In your Next.js API route, stream the agent's output by returning a `Response` with `text/event-stream` encoding:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
// app/api/agent/route.ts
import { NextRequest } from "next/server";
import { createAgent, tool } from "langchain";
import { ChatAnthropic } from "@langchain/anthropic";
import { MemorySaver } from "@langchain/langgraph";
import type { BaseMessage } from "@langchain/core/messages";

const checkpointer = new MemorySaver();

export async function POST(request: NextRequest) {
  const body = await request.json();

  const agent = createAgent({
    model: new ChatAnthropic({ model: "claude-sonnet-4-6" }),
    tools: [/* your tools */],
    checkpointer,
  });

  const stream = await agent.stream(
    { messages: body.messages },
    {
      encoding: "text/event-stream",
      streamMode: ["values", "updates", "messages"],
      configurable: body.config?.configurable,
      recursionLimit: 10,
    }
  );

  return new Response(stream, {
    headers: { "Content-Type": "text/event-stream" },
  });
}
```

#### Client: Connect with FetchStreamTransport

Use `FetchStreamTransport` to point `useStream` at your Next.js API route. Pass `transport` instead of `apiUrl` and `assistantId` when using a custom endpoint:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useMemo } from "react";
import { useStream, FetchStreamTransport } from "@langchain/langgraph-sdk/react";

function ChatInterface({ apiKey }: { apiKey: string }) {
  const transport = useMemo(() => {
    return new FetchStreamTransport({
      apiUrl: "/api/agent",
      onRequest: async (url: string, init: RequestInit) => {
        // Inject API key or other data into the request body
        const customBody = JSON.stringify({
          ...(JSON.parse(init.body as string) || {}),
          apiKey,
        });
        return { ...init, body: customBody };
      },
    });
  }, [apiKey]);

  const stream = useStream({
    transport,
  });

  return (
    <div>
      {stream.messages.map((message, idx) => (
        <div key={message.id ?? idx}>{/* render message */}</div>
      ))}
      {stream.isLoading && <div>Loading...</div>}
    </div>
  );
}
```

For thread history, pass `threadId` to `useStream` and include it in `configurable` when streaming from your API route. The agent's checkpointer will load and persist state per thread.

See a complete Next.js app with LangChain agents, streaming chat, and tool calling in the [langchain-nextjs](https://github.com/christian-bromann/langchain-nextjs) repository.

## Related

- [Streaming overview](/oss/javascript/langchain/streaming/overview) — Server-side streaming with LangChain agents
- [useStream API Reference](https://reference.langchain.com/javascript/functions/_langchain_langgraph-sdk.react.useStream.html) — Full API documentation
- [Agent Chat UI](/oss/javascript/langchain/ui) — Pre-built chat interface for LangGraph agents
- [Human-in-the-loop](/oss/javascript/langchain/human-in-the-loop) — Configuring interrupts for human review
- [Multi-agent systems](/oss/javascript/langchain/multi-agent) — Building agents with multiple LLMs

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/streaming/frontend.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
