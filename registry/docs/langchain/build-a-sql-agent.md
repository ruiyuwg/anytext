# Build a SQL agent

Source: https://docs.langchain.com/oss/javascript/langchain/sql-agent

## Overview

In this tutorial, you will learn how to build an agent that can answer questions about a SQL database using LangChain [agents](/oss/javascript/langchain/agents).

At a high level, the agent will:

Building Q\&A systems of SQL databases requires executing model-generated SQL queries. There are inherent risks in doing this. Make sure that your database connection permissions are always scoped as narrowly as possible for your agent's needs. This will mitigate, though not eliminate, the risks of building a model-driven system.

### Concepts

We will cover the following concepts:

- [Tools](/oss/javascript/langchain/tools) for reading from SQL databases
- LangChain [agents](/oss/javascript/langchain/agents)
- [Human-in-the-loop](/oss/javascript/langchain/human-in-the-loop) processes

## Setup

### Installation

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm i langchain @langchain/core typeorm sqlite3 zod
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add langchain @langchain/core typeorm sqlite3 zod
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add langchain @langchain/core typeorm sqlite3 zod
```

### LangSmith

Set up [LangSmith](https://smith.langchain.com) to inspect what is happening inside your chain or agent. Then set the following environment variables:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGSMITH_TRACING="true"
export LANGSMITH_API_KEY="..."
```

## 1. Select an LLM

Select a model that supports [tool-calling](/oss/javascript/integrations/providers/overview):

````
👉 Read the [OpenAI chat model integration docs](/oss/javascript/integrations/chat/openai/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/openai
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/openai
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/openai
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/openai
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  process.env.OPENAI_API_KEY = "your-api-key";

  const model = await initChatModel("gpt-5.2");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatOpenAI } from "@langchain/openai";

  const model = new ChatOpenAI({
    model: "gpt-5.2",
    apiKey: "your-api-key"
  });
  ```




👉 Read the [Anthropic chat model integration docs](/oss/javascript/integrations/chat/anthropic/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/anthropic
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/anthropic
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/anthropic
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/anthropic
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  process.env.ANTHROPIC_API_KEY = "your-api-key";

  const model = await initChatModel("claude-sonnet-4-6");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatAnthropic } from "@langchain/anthropic";

  const model = new ChatAnthropic({
    model: "claude-sonnet-4-6",
    apiKey: "your-api-key"
  });
  ```




👉 Read the [Azure chat model integration docs](/oss/javascript/integrations/chat/azure/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/azure
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/azure
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/azure
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/azure
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  process.env.AZURE_OPENAI_API_KEY = "your-api-key";
  process.env.AZURE_OPENAI_ENDPOINT = "your-endpoint";
  process.env.OPENAI_API_VERSION = "your-api-version";

  const model = await initChatModel("azure_openai:gpt-5.2");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { AzureChatOpenAI } from "@langchain/openai";

  const model = new AzureChatOpenAI({
    model: "gpt-5.2",
    azureOpenAIApiKey: "your-api-key",
    azureOpenAIApiEndpoint: "your-endpoint",
    azureOpenAIApiVersion: "your-api-version"
  });
  ```




👉 Read the [Google GenAI chat model integration docs](/oss/javascript/integrations/chat/google_generative_ai/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/google-genai
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/google-genai
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/google-genai
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/google-genai
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  process.env.GOOGLE_API_KEY = "your-api-key";

  const model = await initChatModel("google-genai:gemini-2.5-flash-lite");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash-lite",
    apiKey: "your-api-key"
  });
  ```




👉 Read the [AWS Bedrock chat model integration docs](/oss/javascript/integrations/chat/bedrock_converse/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/aws
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/aws
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/aws
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/aws
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  // Follow the steps here to configure your credentials:
  // https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html

  const model = await initChatModel("bedrock:gpt-5.2");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatBedrockConverse } from "@langchain/aws";

  // Follow the steps here to configure your credentials:
  // https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html

  const model = new ChatBedrockConverse({
    model: "gpt-5.2",
    region: "us-east-2"
  });
  ```
````

The output shown in the examples below used OpenAI.

## 2. Configure the database

You will be creating a [SQLite database](https://www.sqlitetutorial.net/sqlite-sample-database/) for this tutorial. SQLite is a lightweight database that is easy to set up and use. We will be loading the `chinook` database, which is a sample database that represents a digital media store.

For convenience, we have hosted the database (`Chinook.db`) on a public GCS bucket.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import fs from "node:fs/promises";
import path from "node:path";

const url = "https://storage.googleapis.com/benchmarks-artifacts/chinook/Chinook.db";
const localPath = path.resolve("Chinook.db");

async function resolveDbPath() {
  if (await fs.exists(localPath)) {
    return localPath;
  }
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`Failed to download DB. Status code: ${resp.status}`);
  const buf = Buffer.from(await resp.arrayBuffer());
  await fs.writeFile(localPath, buf);
  return localPath;
}
```

## 3. Add tools for database interactions

Use the `SqlDatabase` wrapper available in the `langchain/sql_db` to interact with the database. The wrapper provides a simple interface to execute SQL queries and fetch results:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { SqlDatabase } from "@langchain/classic/sql_db";
import { DataSource } from "typeorm";

let db: SqlDatabase | undefined;
async function getDb() {
  if (!db) {
    const dbPath = await resolveDbFile();
    const datasource = new DataSource({ type: "sqlite", database: dbPath });
    db = await SqlDatabase.fromDataSourceParams({ appDataSource: datasource });
  }
  return db;
}

async function getSchema() {
  const db = await getDb();
  return await db.getTableInfo();
}
```

## 6. Implement human-in-the-loop review

It can be prudent to check the agent's SQL queries before they are executed for any unintended actions or inefficiencies.

LangChain agents feature support for built-in [human-in-the-loop middleware](/oss/javascript/langchain/human-in-the-loop) to add oversight to agent tool calls. Let's configure the agent to pause for human review on calling the `sql_db_query` tool:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent
from langchain.agents.middleware import HumanInTheLoopMiddleware # [!code highlight]
from langgraph.checkpoint.memory import InMemorySaver # [!code highlight]


agent = create_agent(
    model,
    tools,
    system_prompt=system_prompt,
    middleware=[ # [!code highlight]
        HumanInTheLoopMiddleware( # [!code highlight]
            interrupt_on={"sql_db_query": True}, # [!code highlight]
            description_prefix="Tool execution pending approval", # [!code highlight]
        ), # [!code highlight]
    ], # [!code highlight]
    checkpointer=InMemorySaver(), # [!code highlight]
)
```

We've added a [checkpointer](/oss/javascript/langchain/short-term-memory) to our agent to allow execution to be paused and resumed. See the [human-in-the-loop guide](/oss/javascript/langchain/human-in-the-loop) for detalis on this as well as available middleware configurations.

On running the agent, it will now pause for review before executing the `sql_db_query` tool:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
question = "Which genre on average has the longest tracks?"
config = {"configurable": {"thread_id": "1"}} # [!code highlight]

for step in agent.stream(
    {"messages": [{"role": "user", "content": question}]},
    config, # [!code highlight]
    stream_mode="values",
):
    if "__interrupt__" in step: # [!code highlight]
        print("INTERRUPTED:") # [!code highlight]
        interrupt = step["__interrupt__"][0] # [!code highlight]
        for request in interrupt.value["action_requests"]: # [!code highlight]
            print(request["description"]) # [!code highlight]
    elif "messages" in step:
        step["messages"][-1].pretty_print()
    else:
        pass
```

```
...

INTERRUPTED:
Tool execution pending approval

Tool: sql_db_query
Args: {'query': 'SELECT g.Name AS Genre, AVG(t.Milliseconds) AS AvgTrackLength FROM Track t JOIN Genre g ON t.GenreId = g.GenreId GROUP BY g.Name ORDER BY AvgTrackLength DESC LIMIT 1;'}
```

We can resume execution, in this case accepting the query, using [Command](/oss/javascript/langgraph/use-graph-api#combine-control-flow-and-state-updates-with-command):

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.types import Command # [!code highlight]

for step in agent.stream(
    Command(resume={"decisions": [{"type": "approve"}]}), # [!code highlight]
    config,
    stream_mode="values",
):
    if "messages" in step:
        step["messages"][-1].pretty_print()
    elif "__interrupt__" in step:
        print("INTERRUPTED:")
        interrupt = step["__interrupt__"][0]
        for request in interrupt.value["action_requests"]:
            print(request["description"])
    else:
        pass
```

```
================================== Ai Message ==================================
Tool Calls:
  sql_db_query (call_7oz86Epg7lYRqi9rQHbZPS1U)
 Call ID: call_7oz86Epg7lYRqi9rQHbZPS1U
  Args:
    query: SELECT Genre.Name, AVG(Track.Milliseconds) AS AvgDuration FROM Track JOIN Genre ON Track.GenreId = Genre.GenreId GROUP BY Genre.Name ORDER BY AvgDuration DESC LIMIT 5;
================================= Tool Message =================================
Name: sql_db_query

[('Sci Fi & Fantasy', 2911783.0384615385), ('Science Fiction', 2625549.076923077), ('Drama', 2575283.78125), ('TV Shows', 2145041.0215053763), ('Comedy', 1585263.705882353)]
================================== Ai Message ==================================

The genre with the longest average track length is "Sci Fi & Fantasy" with an average duration of about 2,911,783 milliseconds, followed by "Science Fiction" and "Drama."
```

Refer to the [human-in-the-loop guide](/oss/javascript/langchain/human-in-the-loop) for details.

## 4. Execute SQL queries

Before running the command, do a check to check the LLM generated command in ` _safe_sql`:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}

const DENY_RE = /\b(INSERT|UPDATE|DELETE|ALTER|DROP|CREATE|REPLACE|TRUNCATE)\b/i;
const HAS_LIMIT_TAIL_RE = /\blimit\b\s+\d+(\s*,\s*\d+)?\s*;?\s*$/i;

function sanitizeSqlQuery(q) {
  let query = String(q ?? "").trim();

  // block multiple statements (allow one optional trailing ;)
  const semis = [...query].filter((c) => c === ";").length;
  if (semis > 1 || (query.endsWith(";") && query.slice(0, -1).includes(";"))) {
    throw new Error("multiple statements are not allowed.")
  }
  query = query.replace(/;+\s*$/g, "").trim();

  // read-only gate
  if (!query.toLowerCase().startsWith("select")) {
    throw new Error("Only SELECT statements are allowed")
  }
  if (DENY_RE.test(query)) {
    throw new Error("DML/DDL detected. Only read-only queries are permitted.")
  }

  // append LIMIT only if not already present
  if (!HAS_LIMIT_TAIL_RE.test(query)) {
    query += " LIMIT 5";
  }
  return query;
}

```

Then, use `run` from `SQLDatabase` to execute commands with an `execute_sql` tool:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { tool } from "langchain"
import * as z from "zod";

const executeSql = tool(
  async ({ query }) => {
    const q = sanitizeSqlQuery(query);
    try {
      const result = await db.run(q);
      return typeof result === "string" ? result : JSON.stringify(result, null, 2);
    } catch (e) {
      throw new Error(e?.message ?? String(e))
    }
  },
  {
    name: "execute_sql",
    description: "Execute a READ-ONLY SQLite SELECT query and return results.",
    schema: z.object({
      query: z.string().describe("SQLite SELECT query to execute (read-only)."),
    }),
  }
);

```

## 5. Use `createAgent`

Use `createAgent` to build a [ReAct agent](https://arxiv.org/pdf/2210.03629) with minimal code. The agent will interpret the request and generate a SQL command. The tools will check the command for safety and then try to execute the command. If the command has an error, the error message is returned to the model. The model can then examine the original request and the new error message and generate a new command. This can continue until the LLM generates the command successfully or reaches an end count. This pattern of providing a model with feedback - error messages in this case - is very powerful.

Initialize the agent with a descriptive system prompt to customize its behavior:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { SystemMessage } from "langchain";

const getSystemPrompt = async () => new SystemMessage(`You are a careful SQLite analyst.

Authoritative schema (do not invent columns/tables):
${await getSchema()}

Rules:
- Think step-by-step.
- When you need data, call the tool \`execute_sql\` with ONE SELECT query.
- Read-only only; no INSERT/UPDATE/DELETE/ALTER/DROP/CREATE/REPLACE/TRUNCATE.
- Limit to 5 rows unless user explicitly asks otherwise.
- If the tool returns 'Error:', revise the SQL and try again.
- Limit the number of attempts to 5.
- If you are not successful after 5 attempts, return a note to the user.
- Prefer explicit column lists; avoid SELECT *.
`);
```

Now, create an agent with the model, tools, and prompt:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent } from "langchain";

const agent = createAgent({
  model: "gpt-5",
  tools: [executeSql],
  systemPrompt: getSystemPrompt,
});

```

## 6. Run the agent

Run the agent on a sample query and observe its behavior:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const question = "Which genre, on average, has the longest tracks?";
const stream = await agent.stream(
  { messages: [{ role: "user", content: question }] },
  { streamMode: "values" }
);
for await (const step of stream) {
  const message = step.messages.at(-1);
  console.log(`${message.role}: ${JSON.stringify(message.content, null, 2)}`);
}
```

```
human: Which genre, on average, has the longest tracks?
ai:
tool: [{"Genre":"Sci Fi & Fantasy","AvgMilliseconds":2911783.0384615385}]
ai: Sci Fi & Fantasy — average track length ≈ 48.5 minutes (about 2,911,783 ms).
```

The agent correctly wrote a query, checked the query, and ran it to inform its final response.

You can inspect all aspects of the above run, including steps taken, tools invoked, what prompts were seen by the LLM, and more in the [LangSmith trace](https://smith.langchain.com/public/653d218b-af67-4854-95ca-6abecb9b2520/r).

#### (Optional) Use Studio

[Studio](/langsmith/studio) provides a "client side" loop as well as memory so you can run this as a chat interface and query the database. You can ask questions like "Tell me the scheme of the database" or "Show me the invoices for the 5 top customers". You will see the SQL command that is generated and the resulting output. The details of how to get that started are below.

In addition to the previously mentioned packages, you will need to:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm i -g langgraph-cli@latest
```

In directory you will run in, you will need a `langgraph.json` file with the following contents:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "dependencies": ["."],
  "graphs": {
      "agent": "./sqlAgent.ts:agent",
      "graph": "./sqlAgentLanggraph.ts:graph"
  },
  "env": ".env"
}
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import fs from "node:fs/promises";
import path from "node:path";
import { SqlDatabase } from "@langchain/classic/sql_db";
import { DataSource } from "typeorm";
import { SystemMessage, createAgent, tool } from "langchain"
import * as z from "zod";

const url = "https://storage.googleapis.com/benchmarks-artifacts/chinook/Chinook.db";
const localPath = path.resolve("Chinook.db");

async function resolveDbPath() {
  if (await fs.exists(localPath)) {
    return localPath;
  }
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`Failed to download DB. Status code: ${resp.status}`);
  const buf = Buffer.from(await resp.arrayBuffer());
  await fs.writeFile(localPath, buf);
  return localPath;
}

let db: SqlDatabase | undefined;
async function getDb() {
  if (!db) {
    const dbPath = await resolveDbPath();
    const datasource = new DataSource({ type: "sqlite", database: dbPath });
    db = await SqlDatabase.fromDataSourceParams({ appDataSource: datasource });
  }
  return db;
}

async function getSchema() {
  const db = await getDb();
  return await db.getTableInfo();
}

const DENY_RE = /\b(INSERT|UPDATE|DELETE|ALTER|DROP|CREATE|REPLACE|TRUNCATE)\b/i;
const HAS_LIMIT_TAIL_RE = /\blimit\b\s+\d+(\s*,\s*\d+)?\s*;?\s*$/i;

function sanitizeSqlQuery(q) {
  let query = String(q ?? "").trim();

  // block multiple statements (allow one optional trailing ;)
  const semis = [...query].filter((c) => c === ";").length;
  if (semis > 1 || (query.endsWith(";") && query.slice(0, -1).includes(";"))) {
    throw new Error("multiple statements are not allowed.")
  }
  query = query.replace(/;+\s*$/g, "").trim();

  // read-only gate
  if (!query.toLowerCase().startsWith("select")) {
    throw new Error("Only SELECT statements are allowed")
  }
  if (DENY_RE.test(query)) {
    throw new Error("DML/DDL detected. Only read-only queries are permitted.")
  }

  // append LIMIT only if not already present
  if (!HAS_LIMIT_TAIL_RE.test(query)) {
    query += " LIMIT 5";
  }
  return query;
}

const executeSql = tool(
  async ({ query }) => {
    const q = sanitizeSqlQuery(query);
    try {
      const result = await db.run(q);
      return typeof result === "string" ? result : JSON.stringify(result, null, 2);
    } catch (e) {
      throw new Error(e?.message ?? String(e))
    }
  },
  {
    name: "execute_sql",
    description: "Execute a READ-ONLY SQLite SELECT query and return results.",
    schema: z.object({
      query: z.string().describe("SQLite SELECT query to execute (read-only)."),
    }),
  }
);

const getSystemPrompt = async () => new SystemMessage(`You are a careful SQLite analyst.

Authoritative schema (do not invent columns/tables):
${await getSchema()}

Rules:
- Think step-by-step.
- When you need data, call the tool \`execute_sql\` with ONE SELECT query.
- Read-only only; no INSERT/UPDATE/DELETE/ALTER/DROP/CREATE/REPLACE/TRUNCATE.
- Limit to 5 rows unless user explicitly asks otherwise.
- If the tool returns 'Error:', revise the SQL and try again.
- Limit the number of attempts to 5.
- If you are not successful after 5 attempts, return a note to the user.
- Prefer explicit column lists; avoid SELECT *.
`);

export const agent = createAgent({
  model: "gpt-5",
  tools: [executeSql],
  systemPrompt: getSystemPrompt,
});
```

## Next steps

For deeper customization, check out [this tutorial](/oss/javascript/langgraph/sql-agent) for implementing a SQL agent directly using LangGraph primitives.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/sql-agent.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Frontend

Source: https://docs.langchain.com/oss/javascript/langchain/streaming/frontend

Build generative UIs with real-time streaming from LangChain agents, LangGraph graphs, and custom APIs

The `useStream` React hook provides seamless integration with LangGraph streaming capabilities. It handles all the complexities of streaming, state management, and branching logic, letting you focus on building great generative UI experiences.

Key features:

- **Messages streaming** — Handle a stream of message chunks to form a complete message
- **Automatic state management** — for messages, interrupts, loading states, and errors
- **Conversation branching** — Create alternate conversation paths from any point in the chat history
- **UI-agnostic design** — Bring your own components and styling

## Installation

Install the LangGraph SDK to use the `useStream` hook in your React application:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/langgraph-sdk
```
