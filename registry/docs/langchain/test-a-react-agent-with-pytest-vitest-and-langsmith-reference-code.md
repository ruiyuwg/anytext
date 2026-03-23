## Reference code

Remember to also add the config files for Vitest and Jest to your project.

### Agent

````
```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from e2b_code_interpreter import Sandbox
from langchain_community.tools import PolygonAggregates, TavilySearchResults
from langchain_community.utilities.polygon import PolygonAPIWrapper
from langchain.agents import create_agent
from typing_extensions import Annotated, TypedDict


search_tool = TavilySearchResults(
    max_results=5,
    include_raw_content=True,
)

def code_tool(code: str) -> str:
    """Execute python code and return the result."""
    sbx = Sandbox()
    execution = sbx.run_code(code)

    if execution.error:
        return f"Error: {execution.error}"
    return f"Results: {execution.results}, Logs: {execution.logs}"

polygon_aggregates = PolygonAggregates(api_wrapper=PolygonAPIWrapper())

class AgentOutputFormat(TypedDict):
    numeric_answer: Annotated[
        float | None, ..., "The numeric answer, if the user asked for one"
    ]
    text_answer: Annotated[
        str | None, ..., "The text answer, if the user asked for one"
    ]
    reasoning: Annotated[str, ..., "The reasoning behind the answer"]

agent = create_agent(
    model="gpt-4.1-mini",
    tools=[code_tool, search_tool, polygon_aggregates],
    response_format=AgentOutputFormat,
    system_prompt="You are a financial expert. Respond to the users query accurately",
)
```

```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { Sandbox } from '@e2b/code-interpreter'
import { restClient } from '@polygon.io/client-js';
import { tool } from "@langchain/core/tools";
import { z } from "zod";

const codeTool = tool(async (input) => {
    const sbx = await Sandbox.create();
    const execution = await sbx.runCode(input.code);
    if (execution.error) {
    return `Error: ${execution.error}`;
    }
    return `Results: ${execution.results}, Logs: ${execution.logs}`;
}, {
    name: "code",
    description: "Execute python code and return the result.",
    schema: z.object({
    code: z.string().describe("The python code to execute"),
    }),
});

const TickerToolInputSchema = z.object({
    ticker: z.string().describe("The ticker symbol of the stock"),
    timespan: z.enum(["minute", "hour", "day", "week", "month", "quarter", "year"]).describe("The size of the time window."),
    timespan_multiplier: z.number().describe("The multiplier for the time window"),
    from_date: z
    .string()
    .describe("The date to start pulling data from, YYYY-MM-DD format - ONLY include the year, month, and day"),
    to_date: z
    .string()
    .describe("The date to stop pulling data, YYYY-MM-DD format - ONLY include the year, month, and day"),
});

const rest = restClient(process.env.POLYGON_API_KEY);

const tickerTool = tool(async (query) => {
    const parsed = TickerToolInputSchema.parse(query);
    const result = await rest.stocks.aggregates(
    parsed.ticker,
    parsed.timespan_multiplier,
    parsed.timespan,
    parsed.from_date,
    parsed.to_date
    );
    return JSON.stringify(result);
}, {
    name: "ticker",
    description: "Pull data for the ticker",
    schema: TickerToolInputSchema,
});

const searchTool = new TavilySearchResults({
    maxResults: 5,
});

const AgentOutputFormatSchema = z.object({
    numeric_answer: z.number().optional().describe("The numeric answer, if the user asked for one"),
    text_answer: z.string().optional().describe("The text answer, if the user asked for one"),
    reasoning: z.string().describe("The reasoning behind the answer"),
})

const tools = [codeTool, searchTool, tickerTool];

const agent = createReactAgent({
    llm: new ChatOpenAI({ model: "gpt-4.1" }),
    tools: tools,
    responseFormat: AgentOutputFormatSchema,
    stateModifier: "You are a financial expert. Respond to the users query accurately",
});

export default agent;
```
````

### Tests

````
```python Pytest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# from app import agent, polygon_aggregates, search_tool # import from wherever your agent is defined
import pytest
from langchain.chat_models import init_chat_model
from langsmith import testing as t
from typing_extensions import Annotated, TypedDict

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
  assert grade["score"]
```

```typescript Vitest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { expect } from "vitest";
import * as ls from "langsmith/vitest";
import agent from "../agent";
import { AIMessage, ToolMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";

const judgeLLM = new ChatOpenAI({ model: "gpt-4.1" });

const groundedEvaluator = async (params: {
  answer: string;
  referenceDocuments: string,
}) => {
  const instructions = [
    "Return 1 if the ANSWER is grounded in the DOCUMENTS",
    "Return 0 if the ANSWER is not grounded in the DOCUMENTS",
  ].join("\n");

  const grade = await judgeLLM.invoke([
    { role: "system", content: instructions },
    { role: "user", content: `ANSWER: ${params.answer}\nDOCUMENTS: ${params.referenceDocuments}` },
  ]);
  const score = parseInt(grade.content.toString());
  return { key: "groundedness", score };
};

ls.describe("Agent Tests", () => {
  ls.test.each([
    { inputs: { query: "Hello!" }, referenceOutputs: { numMessages: 2 } },
    { inputs: { query: "How are you doing?" }, referenceOutputs: { numMessages: 2 } },
  ])(
    "should not use tools on offtopic query: %s",
    async ({ inputs: { query }, referenceOutputs: { numMessages } }) => {
      const result = await agent.invoke({
        messages: [{ role: "user", content: query }],
      });
      ls.logOutputs(result);
      expect(result.messages).toHaveLength(numMessages);
    }
  );

  ls.test(
    "should search for correct ticker",
    {
      inputs: { query: "What is the price of Apple?" },
      referenceOutputs: { numMessages: 4 },
    },
    async ({ inputs: { query }, referenceOutputs: { numMessages } }) => {
      const result = await agent.invoke({
        messages: [{ role: "user", content: query }],
      });
      const toolCalls = (result.messages[1] as AIMessage).tool_calls || [];
      const tickerQuery = toolCalls[0].args.ticker;
      ls.logOutputs(result);
      expect(tickerQuery).toBe("AAPL");
      expect(result.messages).toHaveLength(numMessages);
    }
  );

  ls.test(
    "should execute code when needed",
    {
      inputs: { query: "What was the average return rate for FAANG stock in 2024?" },
      referenceOutputs: { answer: 53 },
    },
    async ({ inputs: { query }, referenceOutputs: { answer } }) => {
      const result = await agent.invoke({
        messages: [{ role: "user", content: query }],
      });

      const toolCalls = result.messages
        .filter(m => (m as AIMessage).tool_calls)
        .flatMap(m => (m as AIMessage).tool_calls?.map(tc => tc.name));
      ls.logFeedback({
        key: "num_steps",
        score: result.messages.length - 1,
      });
      ls.logOutputs(result);
      expect(toolCalls).toContain("code_tool");
      expect(Math.abs((result.structuredResponse.numeric_answer ?? 0) - answer)).toBeLessThanOrEqual(1);
    }
  );

  ls.test(
    "grounded in the source",
    {
      inputs: { query: "How did Nvidia stock do in 2024?" },
      referenceOutputs: {},
    },
    async ({ inputs: { query }, referenceOutputs: {} }) => {
      const result = await agent.invoke({
        messages: [{ role: "user", content: query }],
      });
      const referenceDocuments = result.messages
        .filter((m): m is ToolMessage => m.name?.includes('tavily_search_results_json') ?? false)
        .map(m => m.content)
        .join('\n');
      const wrappedEvaluator = ls.wrapEvaluator(groundedEvaluator);
      await wrappedEvaluator({
        answer: result.structuredResponse.text_answer ?? "",
        referenceDocuments: referenceDocuments,
      })
      ls.logOutputs(result);
    }
  );
});
```

```typescript Jest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { expect } from "@jest/globals";
import * as ls from "langsmith/jest";
import agent from "../agent";
import { AIMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";

const judgeLLM = new ChatOpenAI({ model: "gpt-4.1" });

const groundedEvaluator = async (params: {
  answer: string;
  referenceDocuments: string,
}) => {
  const instructions = [
    "Return 1 if the ANSWER is grounded in the DOCUMENTS",
    "Return 0 if the ANSWER is not grounded in the DOCUMENTS",
  ].join("\n");

  const grade = await judgeLLM.invoke([
    { role: "system", content: instructions },
    { role: "user", content: `ANSWER: ${params.answer}\nDOCUMENTS: ${params.referenceDocuments}` },
  ]);
  const score = parseInt(grade.content.toString());
  return { key: "groundedness", score };
};

ls.describe("Agent Tests", () => {
  ls.test.each([
    { inputs: { query: "Hello!" }, referenceOutputs: { numMessages: 2 } },
    { inputs: { query: "How are you doing?" }, referenceOutputs: { numMessages: 2 } },
  ])(
    "should not use tools on offtopic query: %s",
    async ({ inputs: { query }, referenceOutputs: { numMessages } }) => {
      const result = await agent.invoke({
        messages: [{ role: "user", content: query }],
      });
      ls.logOutputs(result);
      expect(result.messages).toHaveLength(numMessages);
    }
  );

  ls.test(
    "should search for correct ticker",
    {
      inputs: { query: "What is the price of Apple?" },
      referenceOutputs: { numMessages: 4 },
    },
    async ({ inputs: { query }, referenceOutputs: { numMessages } }) => {
      const result = await agent.invoke({
        messages: [{ role: "user", content: query }],
      });
      const toolCalls = (result.messages[1] as AIMessage).tool_calls || [];
      const tickerQuery = toolCalls[0].args.ticker;
      ls.logOutputs(result);
      expect(tickerQuery).toBe("AAPL");
      expect(result.messages).toHaveLength(numMessages);
    }
  );

  ls.test(
    "should execute code when needed",
    {
      inputs: { query: "What was the average return rate for FAANG stock in 2024?" },
      referenceOutputs: { answer: 53 },
    },
    async ({ inputs: { query }, referenceOutputs: { answer } }) => {
      const result = await agent.invoke({
        messages: [{ role: "user", content: query }],
      });
      const toolCalls = result.messages
        .filter(m => (m as AIMessage).tool_calls)
        .flatMap(m => (m as AIMessage).tool_calls?.map(tc => tc.name));
      ls.logFeedback({
        key: "num_steps",
        score: result.messages.length - 1,
      });
      ls.logOutputs(result);
      expect(toolCalls).toContain("code_tool");
      expect(Math.abs((result.structuredResponse.numeric_answer ?? 0) - answer)).toBeLessThanOrEqual(1);
    }
  );

  ls.test(
    "grounded in the source",
    {
      inputs: { query: "How did Nvidia stock do in 2024 according to analysts?" },
      referenceOutputs: {},
    },
    async ({ inputs: { query }, referenceOutputs: {} }) => {
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
});
```
````

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/test-react-agent-pytest.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
