## Create your app

To define our React agent, we will use LangGraph/LangGraph.js for the orchestation and LangChain for the LLM and tools.

### Define tools

First we are going to define the tools we are going to use in our agent. There are going to be 3 tools:

- A search tool using Tavily
- A code interpreter tool using E2B
- A stock information tool using Polygon

  ```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from langchain_community.tools import TavilySearchResults
  from e2b_code_interpreter import Sandbox
  from langchain_community.tools.polygon.aggregates import PolygonAggregates
  from langchain_community.utilities.polygon import PolygonAPIWrapper
  from typing_extensions import Annotated, TypedDict, Optional, Literal

  # Define search tool
  search_tool = TavilySearchResults(
    max_results=5,
    include_raw_content=True,
  )

  # Define code tool
  def code_tool(code: str) -> str:
    """Execute python code and return the result."""
    sbx = Sandbox()
    execution = sbx.run_code(code)

    if execution.error:
        return f"Error: {execution.error}"
    return f"Results: {execution.results}, Logs: {execution.logs}"

  # Define input schema for stock ticker tool
  class TickerToolInput(TypedDict):
    """Input format for the ticker tool.
      The tool will pull data in aggregate blocks (timespan_multiplier * timespan) from the from_date to the to_date
    """
    ticker: Annotated[str, ..., "The ticker symbol of the stock"]
    timespan: Annotated[Literal["minute", "hour", "day", "week", "month", "quarter", "year"], ..., "The size of the time window."]
    timespan_multiplier: Annotated[int, ..., "The multiplier for the time window"]
    from_date: Annotated[str, ..., "The date to start pulling data from, YYYY-MM-DD format - ONLY include the year month and day"]
    to_date: Annotated[str, ..., "The date to stop pulling data, YYYY-MM-DD format - ONLY include the year month and day"]

  api_wrapper = PolygonAPIWrapper()
  polygon_aggregate = PolygonAggregates(api_wrapper=api_wrapper)

  # Define stock ticker tool
  def ticker_tool(query: TickerToolInput) -> str:
    """Pull data for the ticker."""
    return polygon_aggregate.invoke(query)
  ```

  ```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
  import { Sandbox } from "@e2b/code-interpreter";
  import { tool } from "@langchain/core/tools";
  import { z } from "zod";
  import { restClient } from "@polygon.io/client-js";

  // Define search tool
  const searchTool = new TavilySearchResults({
    maxResults: 5,
  });

  // Define code tool
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

  // Define input schema for stock ticker tool
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

  // Define stock ticker tool
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
  ```

### Define agent

Now that we have defined all of our tools, we can use [`create_agent`](https://reference.langchain.com/python/langchain/agents/factory/create_agent) to create our agent.

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing_extensions import Annotated, TypedDict
from langchain.agents import create_agent


class AgentOutputFormat(TypedDict):
    numeric_answer: Annotated[float | None, ..., "The numeric answer, if the user asked for one"]
    text_answer: Annotated[str | None, ..., "The text answer, if the user asked for one"]
    reasoning: Annotated[str, ..., "The reasoning behind the answer"]

agent = create_agent(
    model="gpt-4.1-mini",
    tools=[code_tool, search_tool, polygon_aggregates],
    response_format=AgentOutputFormat,
    system_prompt="You are a financial expert. Respond to the users query accurately",
)
```

```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { z } from "zod";
import { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";

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
