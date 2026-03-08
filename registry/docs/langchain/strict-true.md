## `strict: true`

As of Aug 6, 2024, OpenAI supports a `strict` argument when calling tools that will enforce that the tool argument schema is respected by the model. [See more](https://platform.openai.com/docs/guides/function-calling).

Requires `@langchain/openai >= 0.2.6`

If `strict: true` the tool definition will also be validated, and a subset of JSON schema are accepted. Crucially, schema cannot have optional args (those with default values). Read [the full docs](https://platform.openai.com/docs/guides/structured-outputs/supported-schemas) on what types of schema are supported.

Here's an example with tool calling. Passing an extra `strict: true` argument to `.bindTools` will pass the param through to all tool definitions:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";
import { tool } from "@langchain/core/tools";
import * as z from "zod";

const weatherTool = tool((_) => "no-op", {
  name: "get_current_weather",
  description: "Get the current weather",
  schema: z.object({
    location: z.string(),
  }),
})

const llmWithStrictTrue = new ChatOpenAI({
  model: "gpt-4.1",
}).bindTools([weatherTool], {
  strict: true,
  tool_choice: weatherTool.name,
});

// Although the question is not about the weather, it will call the tool with the correct arguments
// because we passed `tool_choice` and `strict: true`.
const strictTrueResult = await llmWithStrictTrue.invoke("What is 127862 times 12898 divided by 2?");

console.dir(strictTrueResult.tool_calls, { depth: null });
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
[
  {
    name: 'get_current_weather',
    args: { location: 'current' },
    type: 'tool_call',
    id: 'call_hVFyYNRwc6CoTgr9AQFQVjm9'
  }
]
```

If you only want to apply this parameter to a select number of tools, you can also pass OpenAI formatted tool schemas directly:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { zodToJsonSchema } from "zod-to-json-schema";

const toolSchema = {
  type: "function",
  function: {
    name: "get_current_weather",
    description: "Get the current weather",
    strict: true,
    parameters: zodToJsonSchema(
      z.object({
        location: z.string(),
      })
    ),
  },
};

const llmWithStrictTrueTools = new ChatOpenAI({
  model: "gpt-4.1",
}).bindTools([toolSchema], {
  strict: true,
});

const weatherToolResult = await llmWithStrictTrueTools.invoke([{
  role: "user",
  content: "What is the current weather in London?"
}])

weatherToolResult.tool_calls;
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
[
  {
    name: 'get_current_weather',
    args: { location: 'London' },
    type: 'tool_call',
    id: 'call_EOSejtax8aYtqpchY8n8O82l'
  }
]
```

## Structured output

We can also pass `strict: true` to the [`.withStructuredOutput()`](https://js.langchain.com/docs/how_to/structured_output/#the-.withstructuredoutput-method). Here's an example:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const traitSchema = z.object({
  traits: z.array(z.string()).describe("A list of traits contained in the input"),
});

const structuredLlm = new ChatOpenAI({
  model: "gpt-4.1-mini",
}).withStructuredOutput(traitSchema, {
  name: "extract_traits",
  strict: true,
});

await structuredLlm.invoke([{
  role: "user",
  content: `I am 6'5" tall and love fruit.`
}]);
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{ traits: [ `6'5" tall`, 'love fruit' ] }
```
