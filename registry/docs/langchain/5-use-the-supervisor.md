## 5. Use the supervisor

Now test your complete system with complex requests that require coordination across multiple domains:

### Example 1: Simple single-domain request

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const query = "Schedule a team standup for tomorrow at 9am";

const stream = await supervisorAgent.stream({
  messages: [{ role: "user", content: query }]
});

for await (const step of stream) {
  for (const update of Object.values(step)) {
    if (update && typeof update === "object" && "messages" in update) {
      for (const message of update.messages) {
        console.log(message.toFormattedString());
      }
    }
  }
}
```

```
================================== Ai Message ==================================
Tool Calls:
  schedule_event (call_mXFJJDU8bKZadNUZPaag8Lct)
 Call ID: call_mXFJJDU8bKZadNUZPaag8Lct
  Args:
    request: Schedule a team standup for tomorrow at 9am with Alice and Bob.
================================= Tool Message =================================
Name: schedule_event

The team standup has been scheduled for tomorrow at 9:00 AM with Alice and Bob. If you need to make any changes or add more details, just let me know!
================================== Ai Message ==================================

The team standup with Alice and Bob is scheduled for tomorrow at 9:00 AM. If you need any further arrangements or adjustments, please let me know!
```

The supervisor identifies this as a calendar task, calls `schedule_event`, and the calendar agent handles date parsing and event creation.

For full transparency into the information flow, including prompts and responses for each chat model call, check out the [LangSmith trace](https://smith.langchain.com/public/91a9a95f-fba9-4e84-aff0-371861ad2f4a/r) for the above run.

### Example 2: Complex multi-domain request

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const query =
  "Schedule a meeting with the design team next Tuesday at 2pm for 1 hour, " +
  "and send them an email reminder about reviewing the new mockups.";

const stream = await supervisorAgent.stream({
  messages: [{ role: "user", content: query }]
});

for await (const step of stream) {
  for (const update of Object.values(step)) {
    if (update && typeof update === "object" && "messages" in update) {
      for (const message of update.messages) {
        console.log(message.toFormattedString());
      }
    }
  }
}
```

```
================================== Ai Message ==================================
Tool Calls:
  schedule_event (call_YA68mqF0koZItCFPx0kGQfZi)
 Call ID: call_YA68mqF0koZItCFPx0kGQfZi
  Args:
    request: meeting with the design team next Tuesday at 2pm for 1 hour
  manage_email (call_XxqcJBvVIuKuRK794ZIzlLxx)
 Call ID: call_XxqcJBvVIuKuRK794ZIzlLxx
  Args:
    request: send the design team an email reminder about reviewing the new mockups
================================= Tool Message =================================
Name: schedule_event

Your meeting with the design team is scheduled for next Tuesday, June 18th, from 2:00pm to 3:00pm. Let me know if you need to add more details or make any changes!
================================= Tool Message =================================
Name: manage_email

I've sent an email reminder to the design team requesting them to review the new mockups. If you need to include more information or recipients, just let me know!
================================== Ai Message ==================================

Your meeting with the design team is scheduled for next Tuesday, June 18th, from 2:00pm to 3:00pm.

I've also sent an email reminder to the design team, asking them to review the new mockups.

Let me know if you'd like to add more details to the meeting or include additional information in the email!
```

The supervisor recognizes this requires both calendar and email actions, calls `schedule_event` for the meeting, then calls `manage_email` for the reminder. Each sub-agent completes its task, and the supervisor synthesizes both results into a coherent response.

Refer to the [LangSmith trace](https://smith.langchain.com/public/95cd00a3-d1f9-4dba-9731-7bf733fb6a3c/r) to see the detailed information flow for the above run, including individual chat model prompts and responses.

### Complete working example

Here's everything together in a runnable script:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
/**
 * Personal Assistant Supervisor Example
 *
 * This example demonstrates the tool calling pattern for multi-agent systems.
 * A supervisor agent coordinates specialized sub-agents (calendar and email)
 * that are wrapped as tools.
 */

import { tool, createAgent } from "langchain";
import { ChatAnthropic } from "@langchain/anthropic";
import { z } from "zod";

// ============================================================================
// Step 1: Define low-level API tools (stubbed)
// ============================================================================

const createCalendarEvent = tool(
  async ({ title, startTime, endTime, attendees, location }) => {
    // Stub: In practice, this would call Google Calendar API, Outlook API, etc.
    return `Event created: ${title} from ${startTime} to ${endTime} with ${attendees.length} attendees`;
  },
  {
    name: "create_calendar_event",
    description: "Create a calendar event. Requires exact ISO datetime format.",
    schema: z.object({
      title: z.string(),
      startTime: z.string().describe("ISO format: '2024-01-15T14:00:00'"),
      endTime: z.string().describe("ISO format: '2024-01-15T15:00:00'"),
      attendees: z.array(z.string()).describe("email addresses"),
      location: z.string().optional().default(""),
    }),
  }
);

const sendEmail = tool(
  async ({ to, subject, body, cc }) => {
    // Stub: In practice, this would call SendGrid, Gmail API, etc.
    return `Email sent to ${to.join(", ")} - Subject: ${subject}`;
  },
  {
    name: "send_email",
    description:
      "Send an email via email API. Requires properly formatted addresses.",
    schema: z.object({
      to: z.array(z.string()).describe("email addresses"),
      subject: z.string(),
      body: z.string(),
      cc: z.array(z.string()).optional().default([]),
    }),
  }
);

const getAvailableTimeSlots = tool(
  async ({ attendees, date, durationMinutes }) => {
    // Stub: In practice, this would query calendar APIs
    return ["09:00", "14:00", "16:00"];
  },
  {
    name: "get_available_time_slots",
    description:
      "Check calendar availability for given attendees on a specific date.",
    schema: z.object({
      attendees: z.array(z.string()),
      date: z.string().describe("ISO format: '2024-01-15'"),
      durationMinutes: z.number(),
    }),
  }
);

// ============================================================================
// Step 2: Create specialized sub-agents
// ============================================================================

const llm = new ChatAnthropic({
  model: "gpt-5.4",
});

const calendarAgent = createAgent({
  model: llm,
  tools: [createCalendarEvent, getAvailableTimeSlots],
  systemPrompt: `
You are a calendar scheduling assistant.
Parse natural language scheduling requests (e.g., 'next Tuesday at 2pm')
into proper ISO datetime formats.
Use get_available_time_slots to check availability when needed.
If there is no suitable time slot, stop and confirm unavailability in your response.
Use create_calendar_event to schedule events.
Always confirm what was scheduled in your final response.
  `.trim(),
});

const emailAgent = createAgent({
  model: llm,
  tools: [sendEmail],
  systemPrompt: `
You are an email assistant.
Compose professional emails based on natural language requests.
Extract recipient information and craft appropriate subject lines and body text.
Use send_email to send the message.
Always confirm what was sent in your final response.
  `.trim(),
});

// ============================================================================
// Step 3: Wrap sub-agents as tools for the supervisor
// ============================================================================

const scheduleEvent = tool(
  async ({ request }) => {
    const result = await calendarAgent.invoke({
      messages: [{ role: "user", content: request }],
    });
    const lastMessage = result.messages[result.messages.length - 1];
    return lastMessage.text;
  },
  {
    name: "schedule_event",
    description: `
Schedule calendar events using natural language.

Use this when the user wants to create, modify, or check calendar appointments.
Handles date/time parsing, availability checking, and event creation.

Input: Natural language scheduling request (e.g., 'meeting with design team next Tuesday at 2pm')
    `.trim(),
    schema: z.object({
      request: z.string().describe("Natural language scheduling request"),
    }),
  }
);

const manageEmail = tool(
  async ({ request }) => {
    const result = await emailAgent.invoke({
      messages: [{ role: "user", content: request }],
    });
    const lastMessage = result.messages[result.messages.length - 1];
    return lastMessage.text;
  },
  {
    name: "manage_email",
    description: `
Send emails using natural language.

Use this when the user wants to send notifications, reminders, or any email communication.
Handles recipient extraction, subject generation, and email composition.

Input: Natural language email request (e.g., 'send them a reminder about the meeting')
    `.trim(),
    schema: z.object({
      request: z.string().describe("Natural language email request"),
    }),
  }
);

// ============================================================================
// Step 4: Create the supervisor agent
// ============================================================================

const supervisorAgent = createAgent({
  model: llm,
  tools: [scheduleEvent, manageEmail],
  systemPrompt: `
You are a helpful personal assistant.
You can schedule calendar events and send emails.
Break down user requests into appropriate tool calls and coordinate the results.
When a request involves multiple actions, use multiple tools in sequence.
  `.trim(),
});

// ============================================================================
// Step 5: Use the supervisor
// ============================================================================

// Example: User request requiring both calendar and email coordination
const userRequest =
  "Schedule a meeting with the design team next Tuesday at 2pm for 1 hour, " +
  "and send them an email reminder about reviewing the new mockups.";

console.log("User Request:", userRequest);
console.log(`\n${"=".repeat(80)}\n`);

const stream = await supervisorAgent.stream({
  messages: [{ role: "user", content: userRequest }],
});

for await (const step of stream) {
  for (const update of Object.values(step)) {
    if (update && typeof update === "object" && "messages" in update) {
      for (const message of update.messages) {
        console.log(message.toFormattedString());
      }
    }
  }
}
```

### Understanding the architecture

Your system has three layers. The bottom layer contains rigid API tools that require exact formats. The middle layer contains sub-agents that accept natural language, translate it to structured API calls, and return natural language confirmations. The top layer contains the supervisor that routes to high-level capabilities and synthesizes results.

This separation of concerns provides several benefits: each layer has a focused responsibility, you can add new domains without affecting existing ones, and you can test and iterate on each layer independently.
