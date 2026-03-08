# Test

Source: https://docs.langchain.com/oss/javascript/langchain/test

Agentic applications let an LLM decide its own next steps to solve a problem. That flexibility is powerful, but the model's black-box nature makes it hard to predict how a tweak in one part of your agent will affect the rest. To build production-ready agents, thorough testing is essential.

There are a few approaches to testing your agents:

- Unit tests exercise small, deterministic pieces of your agent in isolation using in-memory fakes so you can assert exact behavior quickly and deterministically.

- [Integration tests](#integration-testing) test the agent using real network calls to confirm that components work together, credentials and schemas line up, and latency is acceptable.

Agentic applications tend to lean more on integration because they chain multiple components together and must deal with flakiness due to the nondeterministic nature of LLMs.

## Integration testing

Many agent behaviors only emerge when using a real LLM, such as which tool the agent decides to call, how it formats responses, or whether a prompt modification affects the entire execution trajectory. LangChain's [`agentevals`](https://github.com/langchain-ai/agentevals) package provides evaluators specifically designed for testing agent trajectories with live models.

AgentEvals lets you easily evaluate the trajectory of your agent (the exact sequence of messages, including tool calls) by performing a **trajectory match** or by using an **LLM judge**:

Hard-code a reference trajectory for a given input and validate the run via a step-by-step comparison.

Ideal for testing well-defined workflows where you know the expected behavior. Use when you have specific expectations about which tools should be called and in what order. This approach is deterministic, fast, and cost-effective since it doesn't require additional LLM calls.

Use a LLM to qualitatively validate your agent's execution trajectory. The "judge" LLM reviews the agent's decisions against a prompt rubric (which can include a reference trajectory).

More flexible and can assess nuanced aspects like efficiency and appropriateness, but requires an LLM call and is less deterministic. Use when you want to evaluate the overall quality and reasonableness of the agent's trajectory without strict tool call or ordering requirements.

### Installing AgentEvals

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install agentevals @langchain/core
```

Or, clone the [AgentEvals repository](https://github.com/langchain-ai/agentevals) directly.

### Trajectory match evaluator

AgentEvals offers the `createTrajectoryMatchEvaluator` function to match your agent's trajectory against a reference trajectory. There are four modes to choose from:

| Mode        | Description                                               | Use Case                                                              |
| ----------- | --------------------------------------------------------- | --------------------------------------------------------------------- |
| `strict`    | Exact match of messages and tool calls in the same order  | Testing specific sequences (e.g., policy lookup before authorization) |
| `unordered` | Same tool calls allowed in any order                      | Verifying information retrieval when order doesn't matter             |
| `subset`    | Agent calls only tools from reference (no extras)         | Ensuring agent doesn't exceed expected scope                          |
| `superset`  | Agent calls at least the reference tools (extras allowed) | Verifying minimum required actions are taken                          |

The `strict` mode ensures trajectories contain identical messages in the same order with the same tool calls, though it allows for differences in message content. This is useful when you need to enforce a specific sequence of operations, such as requiring a policy lookup before authorizing an action.

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, tool, HumanMessage, AIMessage, ToolMessage } from "langchain"
import { createTrajectoryMatchEvaluator } from "agentevals";
import * as z from "zod";

const getWeather = tool(
  async ({ city }: { city: string }) => {
    return `It's 75 degrees and sunny in ${city}.`;
  },
  {
    name: "get_weather",
    description: "Get weather information for a city.",
    schema: z.object({
      city: z.string(),
    }),
  }
);

const agent = createAgent({
  model: "gpt-4.1",
  tools: [getWeather]
});

const evaluator = createTrajectoryMatchEvaluator({  // [!code highlight]
  trajectoryMatchMode: "strict",  // [!code highlight]
});  // [!code highlight]

async function testWeatherToolCalledStrict() {
  const result = await agent.invoke({
    messages: [new HumanMessage("What's the weather in San Francisco?")]
  });

  const referenceTrajectory = [
    new HumanMessage("What's the weather in San Francisco?"),
    new AIMessage({
      content: "",
      tool_calls: [
        { id: "call_1", name: "get_weather", args: { city: "San Francisco" } }
      ]
    }),
    new ToolMessage({
      content: "It's 75 degrees and sunny in San Francisco.",
      tool_call_id: "call_1"
    }),
    new AIMessage("The weather in San Francisco is 75 degrees and sunny."),
  ];

  const evaluation = await evaluator({
    outputs: result.messages,
    referenceOutputs: referenceTrajectory
  });
  // {
  //     'key': 'trajectory_strict_match',
  //     'score': true,
  //     'comment': null,
  // }
  expect(evaluation.score).toBe(true);
}
```

The `unordered` mode allows the same tool calls in any order, which is helpful when you want to verify that specific information was retrieved but don't care about the sequence. For example, an agent might need to check both weather and events for a city, but the order doesn't matter.

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, tool, HumanMessage, AIMessage, ToolMessage } from "langchain"
import { createTrajectoryMatchEvaluator } from "agentevals";
import * as z from "zod";

const getWeather = tool(
  async ({ city }: { city: string }) => {
    return `It's 75 degrees and sunny in ${city}.`;
  },
  {
    name: "get_weather",
    description: "Get weather information for a city.",
    schema: z.object({ city: z.string() }),
  }
);

const getEvents = tool(
  async ({ city }: { city: string }) => {
    return `Concert at the park in ${city} tonight.`;
  },
  {
    name: "get_events",
    description: "Get events happening in a city.",
    schema: z.object({ city: z.string() }),
  }
);

const agent = createAgent({
  model: "gpt-4.1",
  tools: [getWeather, getEvents]
});

const evaluator = createTrajectoryMatchEvaluator({  // [!code highlight]
  trajectoryMatchMode: "unordered",  // [!code highlight]
});  // [!code highlight]

async function testMultipleToolsAnyOrder() {
  const result = await agent.invoke({
    messages: [new HumanMessage("What's happening in SF today?")]
  });

  // Reference shows tools called in different order than actual execution
  const referenceTrajectory = [
    new HumanMessage("What's happening in SF today?"),
    new AIMessage({
      content: "",
      tool_calls: [
        { id: "call_1", name: "get_events", args: { city: "SF" } },
        { id: "call_2", name: "get_weather", args: { city: "SF" } },
      ]
    }),
    new ToolMessage({
      content: "Concert at the park in SF tonight.",
      tool_call_id: "call_1"
    }),
    new ToolMessage({
      content: "It's 75 degrees and sunny in SF.",
      tool_call_id: "call_2"
    }),
    new AIMessage("Today in SF: 75 degrees and sunny with a concert at the park tonight."),
  ];

  const evaluation = await evaluator({
    outputs: result.messages,
    referenceOutputs: referenceTrajectory,
  });
  // {
  //     'key': 'trajectory_unordered_match',
  //     'score': true,
  // }
  expect(evaluation.score).toBe(true);
}
```

The `superset` and `subset` modes match partial trajectories. The `superset` mode verifies that the agent called at least the tools in the reference trajectory, allowing additional tool calls. The `subset` mode ensures the agent did not call any tools beyond those in the reference.

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent } from "langchain"
import { tool } from "@langchain/core/tools";
import { HumanMessage, AIMessage, ToolMessage } from "@langchain/core/messages";
import { createTrajectoryMatchEvaluator } from "agentevals";
import * as z from "zod";

const getWeather = tool(
  async ({ city }: { city: string }) => {
    return `It's 75 degrees and sunny in ${city}.`;
  },
  {
    name: "get_weather",
    description: "Get weather information for a city.",
    schema: z.object({ city: z.string() }),
  }
);

const getDetailedForecast = tool(
  async ({ city }: { city: string }) => {
    return `Detailed forecast for ${city}: sunny all week.`;
  },
  {
    name: "get_detailed_forecast",
    description: "Get detailed weather forecast for a city.",
    schema: z.object({ city: z.string() }),
  }
);

const agent = createAgent({
  model: "gpt-4.1",
  tools: [getWeather, getDetailedForecast]
});

const evaluator = createTrajectoryMatchEvaluator({  // [!code highlight]
  trajectoryMatchMode: "superset",  // [!code highlight]
});  // [!code highlight]

async function testAgentCallsRequiredToolsPlusExtra() {
  const result = await agent.invoke({
    messages: [new HumanMessage("What's the weather in Boston?")]
  });

  // Reference only requires getWeather, but agent may call additional tools
  const referenceTrajectory = [
    new HumanMessage("What's the weather in Boston?"),
    new AIMessage({
      content: "",
      tool_calls: [
        { id: "call_1", name: "get_weather", args: { city: "Boston" } },
      ]
    }),
    new ToolMessage({
      content: "It's 75 degrees and sunny in Boston.",
      tool_call_id: "call_1"
    }),
    new AIMessage("The weather in Boston is 75 degrees and sunny."),
  ];

  const evaluation = await evaluator({
    outputs: result.messages,
    referenceOutputs: referenceTrajectory,
  });
  // {
  //     'key': 'trajectory_superset_match',
  //     'score': true,
  //     'comment': null,
  // }
  expect(evaluation.score).toBe(true);
}
```

You can also set the `toolArgsMatchMode` property and/or `toolArgsMatchOverrides` to customize how the evaluator considers equality between tool calls in the actual trajectory vs. the reference. By default, only tool calls with the same arguments to the same tool are considered equal. Visit the [repository](https://github.com/langchain-ai/agentevals?tab=readme-ov-file#tool-args-match-modes) for more details.

### LLM-as-Judge evaluator

You can also use an LLM to evaluate the agent's execution path with the `createTrajectoryLLMAsJudge` function. Unlike the trajectory match evaluators, it doesn't require a reference trajectory, but one can be provided if available.

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent } from "langchain"
import { tool } from "@langchain/core/tools";
import { HumanMessage, AIMessage, ToolMessage } from "@langchain/core/messages";
import { createTrajectoryLLMAsJudge, TRAJECTORY_ACCURACY_PROMPT } from "agentevals";
import * as z from "zod";

const getWeather = tool(
  async ({ city }: { city: string }) => {
    return `It's 75 degrees and sunny in ${city}.`;
  },
  {
    name: "get_weather",
    description: "Get weather information for a city.",
    schema: z.object({ city: z.string() }),
  }
);

const agent = createAgent({
  model: "gpt-4.1",
  tools: [getWeather]
});

const evaluator = createTrajectoryLLMAsJudge({  // [!code highlight]
  model: "openai:o3-mini",  // [!code highlight]
  prompt: TRAJECTORY_ACCURACY_PROMPT,  // [!code highlight]
});  // [!code highlight]

async function testTrajectoryQuality() {
  const result = await agent.invoke({
    messages: [new HumanMessage("What's the weather in Seattle?")]
  });

  const evaluation = await evaluator({
    outputs: result.messages,
  });
  // {
  //     'key': 'trajectory_accuracy',
  //     'score': true,
  //     'comment': 'The provided agent trajectory is reasonable...'
  // }
  expect(evaluation.score).toBe(true);
}
```

If you have a reference trajectory, you can add an extra variable to your prompt and pass in the reference trajectory. Below, we use the prebuilt `TRAJECTORY_ACCURACY_PROMPT_WITH_REFERENCE` prompt and configure the `reference_outputs` variable:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { TRAJECTORY_ACCURACY_PROMPT_WITH_REFERENCE } from "agentevals";

const evaluator = createTrajectoryLLMAsJudge({
  model: "openai:o3-mini",
  prompt: TRAJECTORY_ACCURACY_PROMPT_WITH_REFERENCE,
});

const evaluation = await evaluator({
  outputs: result.messages,
  referenceOutputs: referenceTrajectory,
});
```

For more configurability over how the LLM evaluates the trajectory, visit the [repository](https://github.com/langchain-ai/agentevals?tab=readme-ov-file#trajectory-llm-as-judge).

## LangSmith integration

For tracking experiments over time, you can log evaluator results to [LangSmith](https://smith.langchain.com/), a platform for building production-grade LLM applications that includes tracing, evaluation, and experimentation tools.

First, set up LangSmith by setting the required environment variables:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGSMITH_API_KEY="your_langsmith_api_key"
export LANGSMITH_TRACING="true"
```

LangSmith offers two main approaches for running evaluations: [Vitest/Jest](/langsmith/vitest-jest) integration and the `evaluate` function.

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import * as ls from "langsmith/vitest";
// import * as ls from "langsmith/jest";

import { createTrajectoryLLMAsJudge, TRAJECTORY_ACCURACY_PROMPT } from "agentevals";

const trajectoryEvaluator = createTrajectoryLLMAsJudge({
  model: "openai:o3-mini",
  prompt: TRAJECTORY_ACCURACY_PROMPT,
});

ls.describe("trajectory accuracy", () => {
  ls.test("accurate trajectory", {
    inputs: {
      messages: [
        {
          role: "user",
          content: "What is the weather in SF?"
        }
      ]
    },
    referenceOutputs: {
      messages: [
        new HumanMessage("What is the weather in SF?"),
        new AIMessage({
          content: "",
          tool_calls: [
            { id: "call_1", name: "get_weather", args: { city: "SF" } }
          ]
        }),
        new ToolMessage({
          content: "It's 75 degrees and sunny in SF.",
          tool_call_id: "call_1"
        }),
        new AIMessage("The weather in SF is 75 degrees and sunny."),
      ],
    },
  }, async ({ inputs, referenceOutputs }) => {
    const result = await agent.invoke({
      messages: [new HumanMessage("What is the weather in SF?")]
    });

    ls.logOutputs({ messages: result.messages });

    await trajectoryEvaluator({
      inputs,
      outputs: result.messages,
      referenceOutputs,
    });
  });
});
```

Run the evaluation with your test runner:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
vitest run test_trajectory.eval.ts
# or
jest test_trajectory.eval.ts
```

Alternatively, you can create a dataset in LangSmith and use the `evaluate` function:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { evaluate } from "langsmith/evaluation";
import { createTrajectoryLLMAsJudge, TRAJECTORY_ACCURACY_PROMPT } from "agentevals";

const trajectoryEvaluator = createTrajectoryLLMAsJudge({
  model: "openai:o3-mini",
  prompt: TRAJECTORY_ACCURACY_PROMPT,
});

async function runAgent(inputs: any) {
  const result = await agent.invoke(inputs);
  return result.messages;
}

await evaluate(
  runAgent,
  {
    data: "your_dataset_name",
    evaluators: [trajectoryEvaluator],
  }
);
```

Results will be automatically logged to LangSmith.

To learn more about evaluating your agent, see the [LangSmith docs](/langsmith/vitest-jest).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/test.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
