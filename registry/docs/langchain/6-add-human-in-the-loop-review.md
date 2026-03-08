## 6. Add human-in-the-loop review

It can be prudent to incorporate [human-in-the-loop review](/oss/javascript/langchain/human-in-the-loop) of sensitive actions. LangChain includes [built-in middleware](/oss/javascript/langchain/human-in-the-loop#configuring-interrupts) to review tool calls, in this case the tools invoked by sub-agents.

Let's add human-in-the-loop review to both sub-agents:

- We configure the `create_calendar_event` and `send_email` tools to interrupt, permitting all [response types](/oss/javascript/langchain/human-in-the-loop) (`approve`, `edit`, `reject`)
- We add a [checkpointer](/oss/javascript/langchain/short-term-memory) **only to the top-level agent**. This is required to pause and resume execution.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, humanInTheLoopMiddleware } from "langchain"; // [!code highlight]
import { MemorySaver } from "@langchain/langgraph"; // [!code highlight]

const calendarAgent = createAgent({
  model: llm,
  tools: [createCalendarEvent, getAvailableTimeSlots],
  systemPrompt: CALENDAR_AGENT_PROMPT,
  middleware: [ // [!code highlight]
    humanInTheLoopMiddleware({ // [!code highlight]
      interruptOn: { create_calendar_event: true }, // [!code highlight]
      descriptionPrefix: "Calendar event pending approval", // [!code highlight]
    }), // [!code highlight]
  ], // [!code highlight]
});

const emailAgent = createAgent({
  model: llm,
  tools: [sendEmail],
  systemPrompt: EMAIL_AGENT_PROMPT,
  middleware: [ // [!code highlight]
    humanInTheLoopMiddleware({ // [!code highlight]
      interruptOn: { send_email: true }, // [!code highlight]
      descriptionPrefix: "Outbound email pending approval", // [!code highlight]
    }), // [!code highlight]
  ], // [!code highlight]
});

const supervisorAgent = createAgent({
  model: llm,
  tools: [scheduleEvent, manageEmail],
  systemPrompt: SUPERVISOR_PROMPT,
  checkpointer: new MemorySaver(), // [!code highlight]
});
```

Let's repeat the query. Note that we gather interrupt events into a list to access downstream:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const query =
  "Schedule a meeting with the design team next Tuesday at 2pm for 1 hour, " +
  "and send them an email reminder about reviewing the new mockups.";

const config = { configurable: { thread_id: "6" } };

const interrupts: any[] = [];
const stream = await supervisorAgent.stream(
  { messages: [{ role: "user", content: query }] },
  config
);

for await (const step of streamA) {
  for (const update of Object.values(step)) {
    for (const message of update.messages) {
      console.log(message.toFormattedString());
    }
    const interrupt = update.__interrupt__?.[0];
    interrupts.push(interrupt);
    console.log(`\nINTERRUPTED: ${interrupt?.id}`);
  }
}
```

```
================================== Ai Message ==================================
Tool Calls:
  schedule_event (call_t4Wyn32ohaShpEZKuzZbl83z)
 Call ID: call_t4Wyn32ohaShpEZKuzZbl83z
  Args:
    request: Schedule a meeting with the design team next Tuesday at 2pm for 1 hour.
  manage_email (call_JWj4vDJ5VMnvkySymhCBm4IR)
 Call ID: call_JWj4vDJ5VMnvkySymhCBm4IR
  Args:
    request: Send an email reminder to the design team about reviewing the new mockups before our meeting next Tuesday at 2pm.

INTERRUPTED: 4f994c9721682a292af303ec1a46abb7

INTERRUPTED: 2b56f299be313ad8bc689eff02973f16
```

This time we've interrupted execution. Let's inspect the interrupt events:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
for (const interrupt of interrupts) {
  for (const request of interrupt.value.actionRequests) {
    console.log(`INTERRUPTED: ${interrupt.id}`);
    console.log(`${request.description}\n`);
  }
}
```

```
INTERRUPTED: 4f994c9721682a292af303ec1a46abb7
Calendar event pending approval

Tool: create_calendar_event
Args: {'title': 'Meeting with the Design Team', 'start_time': '2024-06-18T14:00:00', 'end_time': '2024-06-18T15:00:00', 'attendees': ['design team']}

INTERRUPTED: 2b56f299be313ad8bc689eff02973f16
Outbound email pending approval

Tool: send_email
Args: {'to': ['designteam@example.com'], 'subject': 'Reminder: Review New Mockups Before Meeting Next Tuesday at 2pm', 'body': "Hello Team,\n\nThis is a reminder to review the new mockups ahead of our meeting scheduled for next Tuesday at 2pm. Your feedback and insights will be valuable for our discussion and next steps.\n\nPlease ensure you've gone through the designs and are ready to share your thoughts during the meeting.\n\nThank you!\n\nBest regards,\n[Your Name]"}
```

We can specify decisions for each interrupt by referring to its ID using a [`Command`](https://reference.langchain.com/javascript/langchain-langgraph/index/Command). Refer to the [human-in-the-loop guide](/oss/javascript/langchain/human-in-the-loop) for additional details. For demonstration purposes, here we will accept the calendar event, but edit the subject of the outbound email:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Command } from "@langchain/langgraph"; // [!code highlight]

const resume: Record<string, any> = {};
for (const interrupt of interrupts) {
  const actionRequest = interrupt.value.actionRequests[0];
  if (actionRequest.name === "send_email") {
    // Edit email
    const editedAction = { ...actionRequest };
    editedAction.args.subject = "Mockups reminder";
    resume[interrupt.id] = {
      decisions: [{ type: "edit", editedAction }]
    };
  } else {
    resume[interrupt.id] = { decisions: [{ type: "approve" }] };
  }
}

const resumeStream = await supervisorAgent.stream(
  new Command({ resume }), // [!code highlight]
  config
);

for await (const step of resumeStream) {
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
================================= Tool Message =================================
Name: schedule_event

Your meeting with the design team has been scheduled for next Tuesday, June 18th, from 2:00 pm to 3:00 pm.
================================= Tool Message =================================
Name: manage_email

Your email reminder to the design team has been sent. Here’s what was sent:

- Recipient: designteam@example.com
- Subject: Mockups reminder
- Body: A reminder to review the new mockups before the meeting next Tuesday at 2pm, with a request for feedback and readiness for discussion.

Let me know if you need any further assistance!
================================== Ai Message ==================================

- Your meeting with the design team has been scheduled for next Tuesday, June 18th, from 2:00 pm to 3:00 pm.
- An email reminder has been sent to the design team about reviewing the new mockups before the meeting.

Let me know if you need any further assistance!
```

The run proceeds with our input.
