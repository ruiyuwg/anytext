## 3. Build skill middleware

Create custom middleware that injects skill descriptions into the system prompt. This middleware makes skills discoverable without loading their full content upfront.

This guide demonstrates creating custom middleware. For a comprehensive guide on middleware concepts and patterns, see the [custom middleware documentation](/oss/javascript/langchain/middleware/custom).

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createMiddleware } from "langchain";

// Build skills prompt from the SKILLS list
const skillsPrompt = SKILLS.map(
  (skill) => `- **${skill.name}**: ${skill.description}`
).join("\n");

const skillMiddleware = createMiddleware({  // [!code highlight]
  name: "skillMiddleware",
  tools: [loadSkill],  // [!code highlight]
  wrapModelCall: async (request, handler) => {
    // Build the skills addendum
    const skillsAddendum =  // [!code highlight]
      `\n\n## Available Skills\n\n${skillsPrompt}\n\n` +  // [!code highlight]
      "Use the load_skill tool when you need detailed information " +  // [!code highlight]
      "about handling a specific type of request.";  // [!code highlight]

    // Append to system prompt
    const newSystemPrompt = request.systemPrompt + skillsAddendum;

    return handler({
      ...request,
      systemPrompt: newSystemPrompt,
    });
  },
});
```

The middleware appends skill descriptions to the system prompt, making the agent aware of available skills without loading their full content. The `load_skill` tool is registered as a class variable, making it available to the agent.

**Production consideration**: This tutorial loads the skill list in `__init__` for simplicity. In a production system, you may want to load skills in the `before_agent` hook instead, allowing them to be refreshed periodically to reflect up-to-date changes (e.g., when new skills are added or existing ones are modified). See the [before\_agent hook documentation](/oss/javascript/langchain/middleware/custom#node-style-hooks) for details.

## 4. Create the agent with skill support

Now create the agent with the skill middleware and a checkpointer for state persistence:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent } from "langchain";
import { MemorySaver } from "@langchain/langgraph";

// Create the agent with skill support
const agent = createAgent({
  model,
  systemPrompt:
    "You are a SQL query assistant that helps users " +
    "write queries against business databases.",
  middleware: [skillMiddleware],  // [!code highlight]
  checkpointer: new MemorySaver(),
});
```

The agent now has access to skill descriptions in its system prompt and can call `load_skill` to retrieve full skill content when needed. The checkpointer maintains conversation history across turns.
