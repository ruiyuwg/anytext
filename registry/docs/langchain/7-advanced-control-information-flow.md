## 7. Advanced: Control information flow

By default, sub-agents receive only the request string from the supervisor. You might want to pass additional context, such as conversation history or user preferences.

### Pass additional conversational context to sub-agents

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { getCurrentTaskInput } from "@langchain/langgraph";
import { type BuiltInState, HumanMessage } from "langchain";

const scheduleEvent = tool(
  async ({ request }, config) => {
    // Customize context received by sub-agent
    // Access full thread messages from the config
    const currentMessages = getCurrentTaskInput<BuiltInState>(config).messages;
    const originalUserMessage = currentMessages.find(HumanMessage.isInstance);
    const prompt = `
You are assisting with the following user inquiry:

${originalUserMessage?.content || "No context available"}

You are tasked with the following sub-request:

${request}
    `.trim();

    const result = await calendarAgent.invoke({
      messages: [{ role: "user", content: prompt }],
    });
    const lastMessage = result.messages[result.messages.length - 1];
    return lastMessage.text;
  },
  {
    name: "schedule_event",
    description: "Schedule calendar events using natural language.",
    schema: z.object({
      request: z.string().describe("Natural language scheduling request"),
    }),
  }
);
```

This allows sub-agents to see the full conversation context, which can be useful for resolving ambiguities like "schedule it for the same time tomorrow" (referencing a previous conversation).

You can see the full context received by the sub agent in the [chat model call](https://smith.langchain.com/public/c7d54882-afb8-4039-9c5a-4112d0f458b0/r/6803571e-af78-4c68-904a-ecf55771084d) of the LangSmith trace.

### Control what supervisor receives

You can also customize what information flows back to the supervisor:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const scheduleEvent = tool(
  async ({ request }) => {
    const result = await calendarAgent.invoke({
      messages: [{ role: "user", content: request }]
    });

    const lastMessage = result.messages[result.messages.length - 1];

    // Option 1: Return just the confirmation message
    return lastMessage.text;

    // Option 2: Return structured data
    // return JSON.stringify({
    //   status: "success",
    //   event_id: "evt_123",
    //   summary: lastMessage.text
    // });
  },
  {
    name: "schedule_event",
    description: "Schedule calendar events using natural language.",
    schema: z.object({
      request: z.string().describe("Natural language scheduling request"),
    }),
  }
);
```

**Important:** Make sure sub-agent prompts emphasize that their final message should contain all relevant information. A common failure mode is sub-agents that perform tool calls but don't include the results in their final response.

For a complete working example that demonstrates the full supervisor pattern with human-in-the-loop review and advanced information flow control, check out [`supervisor_complete.ts`](https://github.com/langchain-ai/langchainjs/blob/main/examples/src/createAgent/supervisor.ts) in the LangChain.js examples.

## 8. Key takeaways

The supervisor pattern creates layers of abstraction where each layer has a clear responsibility. When designing a supervisor system, start with clear domain boundaries and give each sub-agent focused tools and prompts. Write clear tool descriptions for the supervisor, test each layer independently before integration, and control information flow based on your specific needs.

**When to use the supervisor pattern**

Use the supervisor pattern when you have multiple distinct domains (calendar, email, CRM, database), each domain has multiple tools or complex logic, you want centralized workflow control, and sub-agents don't need to converse directly with users.

For simpler cases with just a few tools, use a single agent. When agents need to have conversations with users, use [handoffs](/oss/javascript/langchain/multi-agent/handoffs) instead. For peer-to-peer collaboration between agents, consider other multi-agent patterns.

## Next steps

Learn about [handoffs](/oss/javascript/langchain/multi-agent/handoffs) for agent-to-agent conversations, explore [context engineering](/oss/javascript/langchain/context-engineering) to fine-tune information flow, read the [multi-agent overview](/oss/javascript/langchain/multi-agent) to compare different patterns, and use [LangSmith](https://smith.langchain.com) to debug and monitor your multi-agent system.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/multi-agent/subagents-personal-assistant.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
