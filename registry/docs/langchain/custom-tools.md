## Custom tools

[Custom tools](https://platform.openai.com/docs/guides/function-calling#custom-tools) support tools with arbitrary string inputs. They can be particularly useful when you expect your string arguments to be long or complex.

If you use a model that supports custom tools, you can use the [`ChatOpenAI`](https://reference.langchain.com/javascript/langchain-openai/ChatOpenAI) class and the `customTool` function to create a custom tool.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI, customTool } from "@langchain/openai";
import { createAgent, HumanMessage } from "langchain";

const codeTool = customTool(
  async () => {
    // ... Add code to execute the input
    return "Code executed successfully";
  },
  {
    name: "execute_code",
    description: "Execute a code snippet",
    format: { type: "text" },
  }
);

const model = new ChatOpenAI({ model: "gpt-5" });

const agent = createAgent({
  model,
  tools: [codeTool],
});

const result = await agent.invoke({
  messages: [new HumanMessage("Use the tool to execute the code")],
});
console.log(result);
```

Context-free grammars

OpenAI supports the specification of a [context-free grammar](https://platform.openai.com/docs/guides/function-calling#context-free-grammars) for custom tool inputs in `lark` or `regex` format. See [OpenAI docs](https://platform.openai.com/docs/guides/function-calling#context-free-grammars) for details. The `format` parameter can be passed into `customTool` as shown below:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI, customTool } from "@langchain/openai";
import { createAgent, HumanMessage } from "langchain";

const MATH_GRAMMAR = `
start: expr
expr: term (SP ADD SP term)* -> add
| term
term: factor (SP MUL SP factor)* -> mul
| factor
factor: INT
SP: \" \"
ADD: \"+\"
MUL: \"*\"
%import common.INT
`;

const doMath = customTool(
  async () => {
    // ... Add code to parse and execute the input
    return "27";
  },
  {
    name: "do_math",
    description: "Evaluate a math expression",
    format: { type: "grammar", definition: MATH_GRAMMAR, syntax: "lark" },
  }
);

const model = new ChatOpenAI({ model: "gpt-5" });

const agent = createAgent({
  model,
  tools: [doMath],
});

const result = await agent.invoke({
  messages: [new HumanMessage("Use the tool to calculate 3^3")],
});
console.log(result);
```
