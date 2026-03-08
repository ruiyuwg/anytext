# Quickstart

Source: https://docs.langchain.com/oss/javascript/langchain/quickstart

This quickstart takes you from a simple setup to a fully functional AI agent in just a few minutes.

**LangChain Docs MCP server**

If you're using an AI coding assistant or IDE (e.g. Claude Code or Cursor), you should install the [LangChain Docs MCP server](/use-these-docs) to get the most out of it. This ensures your agent has access to up-to-date LangChain documentation and examples.

## Requirements

For these examples, you will need to:

- [Install](/oss/javascript/langchain/install) the LangChain package
- Set up a [Claude (Anthropic)](https://www.anthropic.com/) account and get an API key
- Set the `ANTHROPIC_API_KEY` environment variable in your terminal

Although these examples use Claude, you can use [any supported model](/oss/javascript/integrations/providers/overview) by changing the model name in the code and setting up the appropriate API key.

## Build a basic agent

Start by creating a simple agent that can answer questions and call tools. The agent will use Claude Sonnet 4.5 as its language model, a basic weather function as a tool, and a simple prompt to guide its behavior.

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, tool } from "langchain";
import * as z from "zod";

const getWeather = tool(
  (input) => `It's always sunny in ${input.city}!`,
  {
    name: "get_weather",
    description: "Get the weather for a given city",
    schema: z.object({
      city: z.string().describe("The city to get the weather for"),
    }),
  }
);

const agent = createAgent({
  model: "claude-sonnet-4-6",
  tools: [getWeather],
});

console.log(
  await agent.invoke({
    messages: [{ role: "user", content: "What's the weather in Tokyo?" }],
  })
);
```

To learn how to trace your agent with LangSmith, see the [LangSmith documentation](/langsmith/trace-with-langchain).

## Build a real-world agent

Next, build a practical weather forecasting agent that demonstrates key production concepts:

1. **Detailed system prompts** for better agent behavior
2. **Create tools** that integrate with external data
3. **Model configuration** for consistent responses
4. **Structured output** for predictable results
5. **Conversational memory** for chat-like interactions
6. **Create and run the agent** to test the fully functional agent

Let's walk through each step:

````
The system prompt defines your agent’s role and behavior. Keep it specific and actionable:

```ts wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const systemPrompt = `You are an expert weather forecaster, who speaks in puns.

You have access to two tools:

- get_weather_for_location: use this to get the weather for a specific location
- get_user_location: use this to get the user's location

If a user asks you for the weather, make sure you know the location. If you can tell from the question that they mean wherever they are, use the get_user_location tool to find their location.`;
```



[Tools](/oss/javascript/langchain/tools) are functions your agent can call. Oftentimes tools will want to connect to external systems, and will rely on runtime configuration to do so. Notice here how the `getUserLocation` tool does exactly that:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { tool, type ToolRuntime } from "langchain";
import * as z from "zod";

const getWeather = tool(
  (input) => `It's always sunny in ${input.city}!`,
  {
    name: "get_weather_for_location",
    description: "Get the weather for a given city",
    schema: z.object({
      city: z.string().describe("The city to get the weather for"),
    }),
  }
);

type AgentRuntime = ToolRuntime<unknown, { user_id: string }>;

const getUserLocation = tool(
  (_, config: AgentRuntime) => {
    const { user_id } = config.context;
    return user_id === "1" ? "Florida" : "SF";
  },
  {
    name: "get_user_location",
    description: "Retrieve user information based on user ID",
  }
);
```


  [Zod](https://zod.dev/) is a library for validating and parsing pre-defined schemas. You can use it to define the input schema for your tools to make sure the agent only calls the tool with the correct arguments.

  Alternatively, you can define the `schema` property as a [JSON schema](https://json-schema.org/overview/what-is-jsonschema) object. Keep in mind that JSON schemas **won't** be validated at runtime.

  
    ```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    const getWeather = tool(
      ({ city }) => `It's always sunny in ${city}!`,
      {
        name: "get_weather_for_location",
        description: "Get the weather for a given city",
        schema: {
          type: "object",
          properties: {
            city: {
              type: "string",
              description: "The city to get the weather for"
            }
          },
          required: ["city"]
        },
      }
    );
    ```
  




Set up your [language model](/oss/javascript/langchain/models) with the right parameters for your use case:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { initChatModel } from "langchain";

const model = await initChatModel(
  "claude-sonnet-4-6",
  { temperature: 0.5, timeout: 10, maxTokens: 1000 }
);
```

Depending on the model and provider chosen, initialization parameters may vary; refer to their reference pages for details.



Optionally, define a structured response format if you need the agent responses to match
a specific schema.

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const responseFormat = z.object({
  punny_response: z.string(),
  weather_conditions: z.string().optional(),
});
```



Add [memory](/oss/javascript/langchain/short-term-memory) to your agent to maintain state across interactions. This allows
the agent to remember previous conversations and context.

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { MemorySaver } from "@langchain/langgraph";

const checkpointer = new MemorySaver();
```


  In production, use a persistent checkpointer that saves message history to a database.
  See [Add and manage memory](/oss/javascript/langgraph/add-memory#manage-short-term-memory) for more details.




Now assemble your agent with all the components and run it!

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent } from "langchain";

const agent = createAgent({
  model: "claude-sonnet-4-6",
  systemPrompt: systemPrompt,
  tools: [getUserLocation, getWeather],
  responseFormat,
  checkpointer,
});

// `thread_id` is a unique identifier for a given conversation.
const config = {
  configurable: { thread_id: "1" },
  context: { user_id: "1" },
};

const response = await agent.invoke(
  { messages: [{ role: "user", content: "what is the weather outside?" }] },
  config
);
console.log(response.structuredResponse);
// {
//   punny_response: "Florida is still having a 'sun-derful' day ...",
//   weather_conditions: "It's always sunny in Florida!"
// }

// Note that we can continue the conversation using the same `thread_id`.
const thankYouResponse = await agent.invoke(
  { messages: [{ role: "user", content: "thank you!" }] },
  config
);
console.log(thankYouResponse.structuredResponse);
// {
//   punny_response: "You're 'thund-erfully' welcome! ...",
//   weather_conditions: undefined
// }
```
````

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, tool, initChatModel, type ToolRuntime } from "langchain";
import { MemorySaver } from "@langchain/langgraph";
import * as z from "zod";

// Define system prompt
const systemPrompt = `You are an expert weather forecaster, who speaks in puns.

You have access to two tools:

- get_weather_for_location: use this to get the weather for a specific location
- get_user_location: use this to get the user's location

If a user asks you for the weather, make sure you know the location. If you can tell from the question that they mean wherever they are, use the get_user_location tool to find their location.`;

// Define tools
const getWeather = tool(
  ({ city }) => `It's always sunny in ${city}!`,
  {
    name: "get_weather_for_location",
    description: "Get the weather for a given city",
    schema: z.object({
      city: z.string(),
    }),
  }
);

type AgentRuntime = ToolRuntime<unknown, { user_id: string }>;

const getUserLocation = tool(
  (_, config: AgentRuntime) => {
    const { user_id } = config.context;
    return user_id === "1" ? "Florida" : "SF";
  },
  {
    name: "get_user_location",
    description: "Retrieve user information based on user ID",
    schema: z.object({}),
  }
);

// Configure model
const model = await initChatModel(
  "claude-sonnet-4-6",
  { temperature: 0 }
);

// Define response format
const responseFormat = z.object({
  punny_response: z.string(),
  weather_conditions: z.string().optional(),
});

// Set up memory
const checkpointer = new MemorySaver();

// Create agent
const agent = createAgent({
  model,
  systemPrompt,
  responseFormat,
  checkpointer,
  tools: [getUserLocation, getWeather],
});

// Run agent
// `thread_id` is a unique identifier for a given conversation.
const config = {
  configurable: { thread_id: "1" },
  context: { user_id: "1" },
};

const response = await agent.invoke(
  { messages: [{ role: "user", content: "what is the weather outside?" }] },
  config
);
console.log(response.structuredResponse);
// {
//   punny_response: "Florida is still having a 'sun-derful' day! The sunshine is playing 'ray-dio' hits all day long! I'd say it's the perfect weather for some 'solar-bration'! If you were hoping for rain, I'm afraid that idea is all 'washed up' - the forecast remains 'clear-ly' brilliant!",
//   weather_conditions: "It's always sunny in Florida!"
// }

// Note that we can continue the conversation using the same `thread_id`.
const thankYouResponse = await agent.invoke(
  { messages: [{ role: "user", content: "thank you!" }] },
  config
);
console.log(thankYouResponse.structuredResponse);
// {
//   punny_response: "You're 'thund-erfully' welcome! It's always a 'breeze' to help you stay 'current' with the weather. I'm just 'cloud'-ing around waiting to 'shower' you with more forecasts whenever you need them. Have a 'sun-sational' day in the Florida sunshine!",
//   weather_conditions: undefined
// }
```

To learn how to trace your agent with LangSmith, see the [LangSmith documentation](/langsmith/trace-with-langchain).

Congratulations! You now have an AI agent that can:

- **Understand context** and remember conversations
- **Use multiple tools** intelligently
- **Provide structured responses** in a consistent format
- **Handle user-specific information** through context
- **Maintain conversation state** across interactions

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/quickstart.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
