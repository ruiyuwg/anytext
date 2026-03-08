## 6. Advanced: Add constraints with custom state

You can add constraints to enforce that certain tools are only available after specific skills have been loaded. This requires tracking which skills have been loaded in custom agent state.

### Define custom state

First, extend the agent state to track loaded skills:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateSchema } from "@langchain/langgraph";
import { z } from "zod";

const CustomState = new StateSchema({
  skillsLoaded: z.array(z.string()).optional(),  // Track which skills have been loaded  // [!code highlight]
});
```

### Update load\_skill to modify state

Modify the `load_skill` tool to update state when a skill is loaded:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { tool, ToolMessage, type ToolRuntime } from "langchain";
import { Command } from "@langchain/langgraph";  // [!code highlight]
import { z } from "zod";

const loadSkill = tool(  // [!code highlight]
  async ({ skillName }, runtime: ToolRuntime) => {
    // Find and return the requested skill
    const skill = SKILLS.find((s) => s.name === skillName);

    if (skill) {
      const skillContent = `Loaded skill: ${skillName}\n\n${skill.content}`;

      // Update state to track loaded skill
      return new Command({  // [!code highlight]
        update: {  // [!code highlight]
          messages: [  // [!code highlight]
            new ToolMessage({  // [!code highlight]
              content: skillContent,  // [!code highlight]
              tool_call_id: runtime.toolCallId,  // [!code highlight]
            }),  // [!code highlight]
          ],  // [!code highlight]
          skillsLoaded: [skillName],  // [!code highlight]
        },  // [!code highlight]
      });  // [!code highlight]
    }

    // Skill not found
    const available = SKILLS.map((s) => s.name).join(", ");
    return new Command({
      update: {
        messages: [
          new ToolMessage({
            content: `Skill '${skillName}' not found. Available skills: ${available}`,
            tool_call_id: runtime.toolCallId,
          }),
        ],
      },
    });
  },
  {
    name: "load_skill",
    description: `Load the full content of a skill into the agent's context.`,
    schema: z.object({
      skillName: z.string().describe("The name of the skill to load"),
    }),
  }
);
```

### Create constrained tool

Create a tool that's only usable after a specific skill has been loaded:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const writeSqlQuery = tool(  // [!code highlight]
  async ({ query, vertical }, runtime: ToolRuntime) => {
    // Check if the required skill has been loaded
    const skillsLoaded = runtime.state.skillsLoaded ?? [];  // [!code highlight]

    if (!skillsLoaded.includes(vertical)) {  // [!code highlight]
      return (  // [!code highlight]
        `Error: You must load the '${vertical}' skill first ` +  // [!code highlight]
        `to understand the database schema before writing queries. ` +  // [!code highlight]
        `Use load_skill('${vertical}') to load the schema.`  // [!code highlight]
      );  // [!code highlight]
    }

    // Validate and format the query
    return (
      `SQL Query for ${vertical}:\n\n` +
      `\`\`\`sql\n${query}\n\`\`\`\n\n` +
      `✓ Query validated against ${vertical} schema\n` +
      `Ready to execute against the database.`
    );
  },
  {
    name: "write_sql_query",
    description: `Write and validate a SQL query for a specific business vertical.

This tool helps format and validate SQL queries. You must load the
appropriate skill first to understand the database schema.`,
    schema: z.object({
      query: z.string().describe("The SQL query to write"),
      vertical: z.string().describe("The business vertical (sales_analytics or inventory_management)"),
    }),
  }
);
```

### Update middleware and agent

Update the middleware to use the custom state schema:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const skillMiddleware = createMiddleware({  // [!code highlight]
  name: "skillMiddleware",
  stateSchema: CustomState,  // [!code highlight]
  tools: [loadSkill, writeSqlQuery],  // [!code highlight]
  // ... rest of the middleware implementation stays the same
});
```

Create the agent with the middleware that registers the constrained tool:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const agent = createAgent({
  model,
  systemPrompt:
    "You are a SQL query assistant that helps users " +
    "write queries against business databases.",
  middleware: [skillMiddleware],  // [!code highlight]
  checkpointer: new MemorySaver(),
});
```

Now if the agent tries to use `write_sql_query` before loading the required skill, it will receive an error message prompting it to load the appropriate skill (e.g., `sales_analytics` or `inventory_management`) first. This ensures the agent has the necessary schema knowledge before attempting to validate queries.
