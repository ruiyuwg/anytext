### Summarization

Automatically summarize conversation history when approaching token limits, preserving recent messages while compressing older context. Summarization is useful for the following:

- Long-running conversations that exceed context windows.
- Multi-turn dialogues with extensive history.
- Applications where preserving full conversation context matters.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, summarizationMiddleware } from "langchain";

const agent = createAgent({
  model: "gpt-4.1",
  tools: [weatherTool, calculatorTool],
  middleware: [
    summarizationMiddleware({
      model: "gpt-4.1-mini",
      trigger: { tokens: 4000 },
      keep: { messages: 20 },
    }),
  ],
});
```

````
The `fraction` conditions for `trigger` and `keep` (shown below) rely on a chat model's [profile data](/oss/javascript/langchain/models#model-profiles) if using `langchain@1.1.0`. If data are not available, use another condition or specify manually:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const customProfile: ModelProfile = {
    maxInputTokens: 100_000,
    // ...
}
model = await initChatModel("...", {
    profile: customProfile,
});
```



Model for generating summaries. Can be a model identifier string (e.g., `'openai:gpt-4.1-mini'`) or a `BaseChatModel` instance.



Conditions for triggering summarization. Can be:

* A single condition object (all properties must be met - AND logic)
* An array of condition objects (any condition must be met - OR logic)

Each condition can include:

* `fraction` (number): Fraction of model's context size (0-1)
* `tokens` (number): Absolute token count
* `messages` (number): Message count

At least one property must be specified per condition. If not provided, summarization will not trigger automatically.



How much context to preserve after summarization. Specify exactly one of:

* `fraction` (number): Fraction of model's context size to keep (0-1)
* `tokens` (number): Absolute token count to keep
* `messages` (number): Number of recent messages to keep



Custom token counting function. Defaults to character-based counting.



Custom prompt template for summarization. Uses built-in template if not specified. The template should include `{messages}` placeholder where conversation history will be inserted.



Maximum number of tokens to include when generating the summary. Messages will be trimmed to fit this limit before summarization.



Prefix to add to the summary message. If not provided, a default prefix is used.



**Deprecated:** Use `trigger: { tokens: value }` instead. Token threshold for triggering summarization.



**Deprecated:** Use `keep: { messages: value }` instead. Recent messages to preserve.
````

The summarization middleware monitors message token counts and automatically summarizes older messages when thresholds are reached.

**Trigger conditions** control when summarization runs:

- Single condition object (specified must be met)
- Array of conditions (any condition must be met - OR logic)
- Each condition can use `fraction` (of model's context size), `tokens` (absolute count), or `messages` (message count)

**Keep condition** control how much context to preserve (specify exactly one):

- `fraction` - Fraction of model's context size to keep
- `tokens` - Absolute token count to keep
- `messages` - Number of recent messages to keep

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, summarizationMiddleware } from "langchain";

// Single condition
const agent = createAgent({
  model: "gpt-4.1",
  tools: [weatherTool, calculatorTool],
  middleware: [
    summarizationMiddleware({
      model: "gpt-4.1-mini",
      trigger: { tokens: 4000, messages: 10 },
      keep: { messages: 20 },
    }),
  ],
});

// Multiple conditions
const agent2 = createAgent({
  model: "gpt-4.1",
  tools: [weatherTool, calculatorTool],
  middleware: [
    summarizationMiddleware({
      model: "gpt-4.1-mini",
      trigger: [
        { tokens: 3000, messages: 6 },
      ],
      keep: { messages: 20 },
    }),
  ],
});

// Using fractional limits
const agent3 = createAgent({
  model: "gpt-4.1",
  tools: [weatherTool, calculatorTool],
  middleware: [
    summarizationMiddleware({
      model: "gpt-4.1-mini",
      trigger: { fraction: 0.8 },
      keep: { fraction: 0.3 },
    }),
  ],
});
```

### Human-in-the-loop

Pause agent execution for human approval, editing, or rejection of tool calls before they execute. [Human-in-the-loop](/oss/javascript/langchain/human-in-the-loop) is useful for the following:

- High-stakes operations requiring human approval (e.g. database writes, financial transactions).
- Compliance workflows where human oversight is mandatory.
- Long-running conversations where human feedback guides the agent.

  Human-in-the-loop middleware requires a [checkpointer](/oss/javascript/langgraph/persistence#checkpoints) to maintain state across interruptions.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, humanInTheLoopMiddleware } from "langchain";

function readEmailTool(emailId: string): string {
  /** Mock function to read an email by its ID. */
  return `Email content for ID: ${emailId}`;
}

function sendEmailTool(recipient: string, subject: string, body: string): string {
  /** Mock function to send an email. */
  return `Email sent to ${recipient} with subject '${subject}'`;
}

const agent = createAgent({
  model: "gpt-4.1",
  tools: [readEmailTool, sendEmailTool],
  middleware: [
    humanInTheLoopMiddleware({
      interruptOn: {
        sendEmailTool: {
          allowedDecisions: ["approve", "edit", "reject"],
        },
        readEmailTool: false,
      }
    })
  ]
});
```

For complete examples, configuration options, and integration patterns, see the [Human-in-the-loop documentation](/oss/javascript/langchain/human-in-the-loop).

Watch this [video guide](https://www.youtube.com/watch?v=tdOeUVERukA) demonstrating Human-in-the-loop middleware behavior.

### Model call limit

Limit the number of model calls to prevent infinite loops or excessive costs. Model call limit is useful for the following:

- Preventing runaway agents from making too many API calls.
- Enforcing cost controls on production deployments.
- Testing agent behavior within specific call budgets.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, modelCallLimitMiddleware } from "langchain";
import { MemorySaver } from "@langchain/langgraph";

const agent = createAgent({
  model: "gpt-4.1",
  checkpointer: new MemorySaver(), // Required for thread limiting
  tools: [],
  middleware: [
    modelCallLimitMiddleware({
      threadLimit: 10,
      runLimit: 5,
      exitBehavior: "end",
    }),
  ],
});
```

Watch this [video guide](https://www.youtube.com/watch?v=x5jLQTFXR0Y) demonstrating Model Call Limit middleware behavior.

```
Maximum model calls across all runs in a thread. Defaults to no limit.



Maximum model calls per single invocation. Defaults to no limit.



Behavior when limit is reached. Options: `'end'` (graceful termination) or `'error'` (throw exception)
```
