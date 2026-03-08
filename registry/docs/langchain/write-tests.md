## Write tests

Now that we have defined our agent, let's write a few tests to ensure basic functionality. In this tutorial we are going to test whether the agent's tool calling abilities are working, whether the agent knows to ignore irrelevant questions, and whether it is able to answer complex questions that involve using all of the tools.

We need to first set up a test file and add the imports needed at the top of the file.

```python Pytest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Create a `tests/test_agent.py` file.

from app import agent, polygon_aggregates, search_tool # import from wherever your agent is defined
import pytest
from langsmith import testing as t
```

```typescript Vitest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Name your test file `agent.vitest.eval.ts`

import { expect } from "vitest";
import * as ls from "langsmith/vitest";
import agent from "../agent"; // import from wherever your agent is defined

// Optional, but recommended to group tests together
ls.describe("Agent Tests", () => {
  // PLACE TESTS Here
});
```

```typescript Jest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Name your test file `agent.jest.eval.ts`

import { expect } from "@jest/globals";
import * as ls from "langsmith/jest";
import agent from "../agent"; // import from wherever your agent is defined

// Optional, but recommended to group tests together
ls.describe("Agent Tests", () => {
  // PLACE TESTS Here
});
```

### Test 1: Handle off-topic questions

The first test will be a simple check that the agent does not use tools on irrelevant queries.

```python Pytest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
@pytest.mark.langsmith
@pytest.mark.parametrize(
  # <-- Can still use all normal pytest markers
  "query",
  ["Hello!", "How are you doing?"],
)
def test_no_tools_on_offtopic_query(query: str) -> None:
  """Test that the agent does not use tools on offtopic queries."""
  # Log the test example
  t.log_inputs({"query": query})
  expected = []
  t.log_reference_outputs({"tool_calls": expected})
  # Call the agent's model node directly instead of running the ReACT loop.
  result = agent.nodes["agent"].invoke(
      {"messages": [{"role": "user", "content": query}]}
  )
  actual = result["messages"][0].tool_calls
  t.log_outputs({"tool_calls": actual})
  # Check that no tool calls were made.
  assert actual == expected
```

```typescript Vitest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
ls.test.each([
  { inputs: { query: "Hello!" }, expected: { numMessages: 2 } },
  { inputs: { query: "How are you doing?" }, expected: { numMessages: 2 } },
])(
  "should not use tools on offtopic query: %s",
  async ({ inputs: { query }, expected: { numMessages } }) => {
    const result = await agent.invoke({ messages: [{ role: "user", content: query }] });
    ls.logOutputs(result);

    // Check that the flow was HUMAN -> AI FINAL RESPONSE (no tools called)
    expect(result.messages).toHaveLength(numMessages);
  }
);
```

```typescript Jest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
ls.test.each([
  { inputs: { query: "Hello!" }, expected: { numMessages: 2 } },
  { inputs: { query: "How are you doing?" }, expected: { numMessages: 2 } },
])(
  "should not use tools on offtopic query: %s",
  async ({ inputs: { query }, expected: { numMessages } }) => {
    const result = await agent.invoke({ messages: [{ role: "user", content: query }] });
    ls.logOutputs(result);

    // Check that the flow was HUMAN -> AI FINAL RESPONSE (no tools called)
    expect(result.messages).toHaveLength(numMessages);
  }
);
```

### Test 2: Simple tool calling

For tool calling, we are going to verify that the agent calls the correct tool with the correct parameters.

```python Pytest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
@pytest.mark.langsmith
def test_searches_for_correct_ticker() -> None:
  """Test that the model looks up the correct ticker on simple query."""
  # Log the test example
  query = "What is the price of Apple?"
  t.log_inputs({"query": query})
  expected = "AAPL"
  t.log_reference_outputs({"ticker": expected})
  # Call the agent's model node directly instead of running the full ReACT loop.
  result = agent.nodes["agent"].invoke(
      {"messages": [{"role": "user", "content": query}]}
  )
  tool_calls = result["messages"][0].tool_calls
  if tool_calls[0]["name"] == polygon_aggregates.name:
      actual = tool_calls[0]["args"]["ticker"]
  else:
      actual = None
  t.log_outputs({"ticker": actual})
  # Check that the right ticker was queried
  assert actual == expected
```

```typescript Vitest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
ls.test(
  "should search for correct ticker",
  {
    inputs: { query: "What is the price of Apple?" },
    expected: { numMessages: 4 },
  },
  async ({ inputs: { query }, expected: { numMessages } }) => {
    const result = await agent.invoke({
      messages: [{ role: "user", content: query }],
    });

    ls.logOutputs(result);

    // The agent should have made a single tool call to the ticker tool
    const toolCalls = (result.messages[1] as AIMessage).tool_calls || [];
    const tickerQuery = JSON.parse(toolCalls[0].function.arguments).query.ticker;
    // Check that the right ticker was queried
    expect(tickerQuery).toBe("AAPL");

    // Check that the flow was HUMAN -> AI -> TOOL -> AI FINAL RESPONSE
    expect(result.messages).toHaveLength(numMessages);
  }
);
```

```typescript Jest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
ls.test(
  "should search for correct ticker",
  {
    inputs: { query: "What is the price of Apple?" },
    expected: { numMessages: 4 },
  },
  async ({ inputs: { query }, expected: { numMessages } }) => {
    const result = await agent.invoke({
      messages: [{ role: "user", content: query }],
    });

    ls.logOutputs(result);

    // The agent should have made a single tool call to the ticker tool
    const toolCalls = (result.messages[1] as AIMessage).tool_calls || [];
    const tickerQuery = JSON.parse(toolCalls[0].function.arguments).query.ticker;
    // Check that the right ticker was queried
    expect(tickerQuery).toBe("AAPL");

    // Check that the flow was HUMAN -> AI -> TOOL -> AI FINAL RESPONSE
    expect(result.messages).toHaveLength(numMessages);
  }
);
```

### Test 3: Complex tool calling

Some tool calls are easier to test than others. With the ticker lookup, we can assert that the correct ticker is searched. With the coding tool, the inputs and outputs of the tool are much less constrained, and there are lots of ways to get to the right answer. In this case, it's simpler to test that the tool is used correctly by running the full agent and asserting that it both calls the coding tool and that it ends up with the right answer.

```python Pytest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
@pytest.mark.langsmith
def test_executes_code_when_needed() -> None:
  query = (
      "In the past year Facebook stock went up by 66.76%, "
      "Apple by 25.24%, Google by 37.11%, Amazon by 47.52%, "
      "Netflix by 78.31%. Whats the avg return in the past "
      "year of the FAANG stocks, expressed as a percentage?"
  )
  t.log_inputs({"query": query})
  expected = 50.988
  t.log_reference_outputs({"response": expected})
  # Test that the agent executes code when needed
  result = agent.invoke({"messages": [{"role": "user", "content": query}]})
  t.log_outputs({"result": result["structured_response"].get("numeric_answer")})
  # Grab all the tool calls made by the LLM
  tool_calls = [
      tc["name"]
      for msg in result["messages"]
      for tc in getattr(msg, "tool_calls", [])
  ]
  # This will log the number of steps taken by the agent, which is useful for
  # determining how efficiently the agent gets to an answer.
  t.log_feedback(key="num_steps", score=len(result["messages"]) - 1)
  # Assert that the code tool was used
  assert "code_tool" in tool_calls
  # Assert that a numeric answer was provided:
  assert result["structured_response"].get("numeric_answer") is not None
  # Assert that the answer is correct
  assert abs(result["structured_response"]["numeric_answer"] - expected) <= 0.01
```

```typescript Vitest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
ls.test(
  "should execute code when needed",
  {
    inputs: { query: "What was the average return rate for FAANG stock in 2024?" },
    expected: { answer: 53 },
  },
  async ({ inputs: { query }, expected: { answer } }) => {
    const result = await agent.invoke({
      messages: [{ role: "user", content: query }],
    });

    ls.logOutputs(result);

    // Grab all the tool calls made by the LLM
    const toolCalls = result.messages
      .filter(m => (m as AIMessage).tool_calls)
      .flatMap(m => (m as AIMessage).tool_calls?.map(tc => tc.name));
    // This will log the number of steps taken by the LLM, which we can track over time to measure performance
    ls.logFeedback({
      key: "num_steps",
      score: result.messages.length - 1, // The first message is the user message
    });
    // Assert that the tool calls include the "code_tool" function
    expect(toolCalls).toContain("code_tool");
    // Assert that the answer is within 1 of the expected answer
    expect(Math.abs(result.structured_response.numeric_answer - answer)).toBeLessThanOrEqual(1);
  }
);
```

```typescript Jest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
ls.test(
  "should execute code when needed",
  {
    inputs: { query: "What was the average return rate for FAANG stock in 2024?" },
    expected: { answer: 53 },
  },
  async ({ inputs: { query }, expected: { answer } }) => {
    const result = await agent.invoke({
      messages: [{ role: "user", content: query }],
    });

    ls.logOutputs(result);
    // Grab all the tool calls made by the LLM
    const toolCalls = result.messages
      .filter(m => (m as AIMessage).tool_calls)
      .flatMap(m => (m as AIMessage).tool_calls?.map(tc => tc.name));
    // This will log the number of steps taken by the LLM, which we can track over time to measure performance
    ls.logFeedback({
      key: "num_steps",
      score: result.messages.length - 1, // The first message is the user message
    });
    // Assert that the tool calls include the "code_tool" function
    expect(toolCalls).toContain("code_tool");
    // Assert that the answer is within 1 of the expected answer
    expect(Math.abs(result.structured_response.numeric_answer - answer)).toBeLessThanOrEqual(1);
  }
);
```

### Test 4: LLM-as-a-judge

We are going to ensure that the agent's answer is grounded in the search results by running an LLM-as-a-judge evaluation. In order to trace the LLM as a judge call separately from our agent, we will use the LangSmith provided `trace_feedback` context manager in Python and `wrapEvaluator` function in JS/TS.

```python Pytest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing_extensions import Annotated, TypedDict
from langchain.chat_models import init_chat_model

class Grade(TypedDict):
  """Evaluate the groundedness of an answer in source documents."""
  score: Annotated[
      bool,
      ...,
      "Return True if the answer is fully grounded in the source documents, otherwise False.",
  ]

judge_llm = init_chat_model("gpt-4.1").with_structured_output(Grade)

@pytest.mark.langsmith
def test_grounded_in_source_info() -> None:
  """Test that response is grounded in the tool outputs."""
  query = "How did Nvidia stock do in 2024 according to analysts?"
  t.log_inputs({"query": query})
  result = agent.invoke({"messages": [{"role": "user", "content": query}]})
  # Grab all the search calls made by the LLM
  search_results = "\n\n".join(
      msg.content
      for msg in result["messages"]
      if msg.type == "tool" and msg.name == search_tool.name
  )
  t.log_outputs(
      {
          "response": result["structured_response"].get("text_answer"),
          "search_results": search_results,
      }
  )
  # Trace the feedback LLM run separately from the deployment run.
  with t.trace_feedback():
      # Instructions for the LLM judge
      instructions = (
          "Grade the following ANSWER. "
          "The ANSWER should be fully grounded in (i.e. supported by) the source DOCUMENTS. "
          "Return True if the ANSWER is fully grounded in the DOCUMENTS. "
          "Return False if the ANSWER is not grounded in the DOCUMENTS."
      )
      answer_and_docs = (
          f"ANSWER: {result['structured_response'].get('text_answer', '')}\n"
          f"DOCUMENTS:\n{search_results}"
      )
      # Run the judge LLM
      grade = judge_llm.invoke(
          [
              {"role": "system", "content": instructions},
              {"role": "user", "content": answer_and_docs},
          ]
      )
      t.log_feedback(key="groundedness", score=grade["score"])
  assert grade['score']
```

```typescript Vitest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
// THIS CODE GOES OUTSIDE THE TEST - IT IS JUST A HELPER FUNCTION
const judgeLLM = new ChatOpenAI({ model: "gpt-4.1" });
const groundedEvaluator = async (params: {
  answer: string;
  referenceDocuments: string,
}) => {
  // Instructions for the LLM judge
  const instructions = [
    "Return 1 if the ANSWER is grounded in the DOCUMENTS",
    "Return 0 if the ANSWER is not grounded in the DOCUMENTS",
  ].join("\n");

  // Run the judge LLM
  const grade = await judgeLLM.invoke([
    { role: "system", content: instructions },
    { role: "user", content: `ANSWER: ${params.answer}\nDOCUMENTS: ${params.referenceDocuments}` },
  ]);
  const score = parseInt(grade.content.toString());
  return { key: "groundedness", score };
};

// THIS CODE GOES INSIDE THE TEST
ls.test(
  "grounded in the source",
  {
    inputs: { query: "How did Nvidia stock do in 2024 according to analysts?" },
  },
  async ({ inputs: { query } }) => {
    const result = await agent.invoke({
      messages: [{ role: "user", content: query }],
    });
    const wrappedEvaluator = ls.wrapEvaluator(groundedEvaluator);
    await wrappedEvaluator({
      answer: result.structuredResponse.text_answer ?? "",
      referenceDocuments: result.structuredResponse.reasoning,
    })
    ls.logOutputs(result);
  }
);
```

```typescript Jest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
// THIS CODE GOES OUTSIDE THE TEST - IT IS JUST A HELPER FUNCTION
const judgeLLM = new ChatOpenAI({ model: "gpt-4.1" });
const groundedEvaluator = async (params: {
  answer: string;
  referenceDocuments: string,
}) => {
  // Instructions for the LLM judge
  const instructions = [
    "Return 1 if the ANSWER is grounded in the DOCUMENTS",
    "Return 0 if the ANSWER is not grounded in the DOCUMENTS",
  ].join("\n");

  // Run the judge LLM
  const grade = await judgeLLM.invoke([
    { role: "system", content: instructions },
    { role: "user", content: `ANSWER: ${params.answer}\nDOCUMENTS: ${params.referenceDocuments}` },
  ]);
  const score = parseInt(grade.content.toString());
  return { key: "groundedness", score };
};

// THIS CODE GOES INSIDE THE TEST
ls.test(
  "grounded in the source",
  {
    inputs: { query: "How did Nvidia stock do in 2024 according to analysts?" },
  },
  async ({ inputs: { query } }) => {
    const result = await agent.invoke({
      messages: [{ role: "user", content: query }],
    });
    const wrappedEvaluator = ls.wrapEvaluator(groundedEvaluator);
    await wrappedEvaluator({
      answer: result.structuredResponse.text_answer ?? "",
      referenceDocuments: result.structuredResponse.reasoning,
    })
    ls.logOutputs(result);
  }
);
```

## Run tests

Once you have setup your config files (if you are using Vitest or Jest), you can run your tests using the following commands:

````
```typescript Vitest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Create a `ls.vitest.config.ts` file:

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.eval.?(c|m)[jt]s"],
    reporters: ["langsmith/vitest/reporter"],
    setupFiles: ["dotenv/config"],
    testTimeout: 30000,
  },
});
```

```javascript Jest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Create a `ls.jest.config.ts` file:

require('dotenv').config();

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '/tests/jest/**/*.jest.eval.ts'
  ],
  testPathIgnorePatterns: [
    '/tests/vitest/.*.vitest.eval.ts$'
  ],
  reporters: ["langsmith/jest/reporter"],
  testTimeout: 30000,
};
```
````

```bash Pytest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pytest --langsmith-output tests
```

```bash Vitest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn vitest --config ls.vitest.config.ts
```

```bash Jest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn jest --config ls.jest.config.ts
```
