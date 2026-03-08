### LLM tool emulator

Emulate tool execution using an LLM for testing purposes, replacing actual tool calls with AI-generated responses. LLM tool emulators are useful for the following:

- Testing agent behavior without executing real tools.
- Developing agents when external tools are unavailable or expensive.
- Prototyping agent workflows before implementing actual tools.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, toolEmulatorMiddleware } from "langchain";

const agent = createAgent({
  model: "gpt-4.1",
  tools: [getWeather, searchDatabase, sendEmail],
  middleware: [
    toolEmulatorMiddleware(), // Emulate all tools
  ],
});
```

```
List of tool names (string) or tool instances to emulate. If `undefined` (default), ALL tools will be emulated. If empty array `[]`, no tools will be emulated. If array with tool names/instances, only those tools will be emulated.



Model to use for generating emulated tool responses. Can be a model identifier string (e.g., `'anthropic:claude-sonnet-4-6'`) or a `BaseChatModel` instance. Defaults to the agent's model if not specified.
```

The middleware uses an LLM to generate plausible responses for tool calls instead of executing the actual tools.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, toolEmulatorMiddleware, tool } from "langchain";
import * as z from "zod";

const getWeather = tool(
  async ({ location }) => `Weather in ${location}`,
  {
    name: "get_weather",
    description: "Get the current weather for a location",
    schema: z.object({ location: z.string() }),
  }
);

const sendEmail = tool(
  async ({ to, subject, body }) => "Email sent",
  {
    name: "send_email",
    description: "Send an email",
    schema: z.object({
      to: z.string(),
      subject: z.string(),
      body: z.string(),
    }),
  }
);

// Emulate all tools (default behavior)
const agent = createAgent({
  model: "gpt-4.1",
  tools: [getWeather, sendEmail],
  middleware: [toolEmulatorMiddleware()],
});

// Emulate specific tools by name
const agent2 = createAgent({
  model: "gpt-4.1",
  tools: [getWeather, sendEmail],
  middleware: [
    toolEmulatorMiddleware({
      tools: ["get_weather"],
    }),
  ],
});

// Emulate specific tools by passing tool instances
const agent3 = createAgent({
  model: "gpt-4.1",
  tools: [getWeather, sendEmail],
  middleware: [
    toolEmulatorMiddleware({
      tools: [getWeather],
    }),
  ],
});

// Use custom model for emulation
const agent5 = createAgent({
  model: "gpt-4.1",
  tools: [getWeather, sendEmail],
  middleware: [
    toolEmulatorMiddleware({
      model: "claude-sonnet-4-6",
    }),
  ],
});
```
