# Build a SQL agent

Source: https://docs.langchain.com/oss/python/langchain/sql-agent

## Overview

In this tutorial, you will learn how to build an agent that can answer questions about a SQL database using LangChain [agents](/oss/python/langchain/agents).

At a high level, the agent will:

Building Q\&A systems of SQL databases requires executing model-generated SQL queries. There are inherent risks in doing this. Make sure that your database connection permissions are always scoped as narrowly as possible for your agent's needs. This will mitigate, though not eliminate, the risks of building a model-driven system.

### Concepts

We will cover the following concepts:

- [Tools](/oss/python/langchain/tools) for reading from SQL databases
- LangChain [agents](/oss/python/langchain/agents)
- [Human-in-the-loop](/oss/python/langchain/human-in-the-loop) processes

## Setup

### Installation

```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install langchain  langgraph  langchain-community
```

### LangSmith

Set up [LangSmith](https://smith.langchain.com) to inspect what is happening inside your chain or agent. Then set the following environment variables:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGSMITH_TRACING="true"
export LANGSMITH_API_KEY="..."
```

## 1. Select an LLM

Select a model that supports [tool-calling](/oss/python/integrations/providers/overview):

````
👉 Read the [OpenAI chat model integration docs](/oss/python/integrations/chat/openai/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[openai]"
```


  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model

  os.environ["OPENAI_API_KEY"] = "sk-..."

  model = init_chat_model("gpt-5.2")
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_openai import ChatOpenAI

  os.environ["OPENAI_API_KEY"] = "sk-..."

  model = ChatOpenAI(model="gpt-5.2")
  ```




👉 Read the [Anthropic chat model integration docs](/oss/python/integrations/chat/anthropic/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[anthropic]"
```


  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model

  os.environ["ANTHROPIC_API_KEY"] = "sk-..."

  model = init_chat_model("claude-sonnet-4-6")
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_anthropic import ChatAnthropic

  os.environ["ANTHROPIC_API_KEY"] = "sk-..."

  model = ChatAnthropic(model="claude-sonnet-4-6")
  ```




👉 Read the [Azure chat model integration docs](/oss/python/integrations/chat/azure_chat_openai/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[openai]"
```


  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model

  os.environ["AZURE_OPENAI_API_KEY"] = "..."
  os.environ["AZURE_OPENAI_ENDPOINT"] = "..."
  os.environ["OPENAI_API_VERSION"] = "2025-03-01-preview"

  model = init_chat_model(
      "azure_openai:gpt-5.2",
      azure_deployment=os.environ["AZURE_OPENAI_DEPLOYMENT_NAME"],
  )
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_openai import AzureChatOpenAI

  os.environ["AZURE_OPENAI_API_KEY"] = "..."
  os.environ["AZURE_OPENAI_ENDPOINT"] = "..."
  os.environ["OPENAI_API_VERSION"] = "2025-03-01-preview"

  model = AzureChatOpenAI(
      model="gpt-5.2",
      azure_deployment=os.environ["AZURE_OPENAI_DEPLOYMENT_NAME"]
  )
  ```




👉 Read the [Google GenAI chat model integration docs](/oss/python/integrations/chat/google_generative_ai/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[google-genai]"
```


  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model

  os.environ["GOOGLE_API_KEY"] = "..."

  model = init_chat_model("google_genai:gemini-2.5-flash-lite")
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_google_genai import ChatGoogleGenerativeAI

  os.environ["GOOGLE_API_KEY"] = "..."

  model = ChatGoogleGenerativeAI(model="gemini-2.5-flash-lite")
  ```




👉 Read the [AWS Bedrock chat model integration docs](/oss/python/integrations/chat/bedrock/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[aws]"
```


  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from langchain.chat_models import init_chat_model

  # Follow the steps here to configure your credentials:
  # https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html

  model = init_chat_model(
      "anthropic.claude-3-5-sonnet-20240620-v1:0",
      model_provider="bedrock_converse",
  )
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from langchain_aws import ChatBedrock

  model = ChatBedrock(model="anthropic.claude-3-5-sonnet-20240620-v1:0")
  ```




👉 Read the [HuggingFace chat model integration docs](/oss/python/integrations/chat/huggingface/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[huggingface]"
```


  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model

  os.environ["HUGGINGFACEHUB_API_TOKEN"] = "hf_..."

  model = init_chat_model(
      "microsoft/Phi-3-mini-4k-instruct",
      model_provider="huggingface",
      temperature=0.7,
      max_tokens=1024,
  )
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint

  os.environ["HUGGINGFACEHUB_API_TOKEN"] = "hf_..."

  llm = HuggingFaceEndpoint(
      repo_id="microsoft/Phi-3-mini-4k-instruct",
      temperature=0.7,
      max_length=1024,
  )
  model = ChatHuggingFace(llm=llm)
  ```
````

The output shown in the examples below used OpenAI.

## 2. Configure the database

You will be creating a [SQLite database](https://www.sqlitetutorial.net/sqlite-sample-database/) for this tutorial. SQLite is a lightweight database that is easy to set up and use. We will be loading the `chinook` database, which is a sample database that represents a digital media store.

For convenience, we have hosted the database (`Chinook.db`) on a public GCS bucket.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import requests, pathlib

url = "https://storage.googleapis.com/benchmarks-artifacts/chinook/Chinook.db"
local_path = pathlib.Path("Chinook.db")

if local_path.exists():
    print(f"{local_path} already exists, skipping download.")
else:
    response = requests.get(url)
    if response.status_code == 200:
        local_path.write_bytes(response.content)
        print(f"File downloaded and saved as {local_path}")
    else:
        print(f"Failed to download the file. Status code: {response.status_code}")
```

We will use a handy SQL database wrapper available in the `langchain_community` package to interact with the database. The wrapper provides a simple interface to execute SQL queries and fetch results:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_community.utilities import SQLDatabase

db = SQLDatabase.from_uri("sqlite:///Chinook.db")

print(f"Dialect: {db.dialect}")
print(f"Available tables: {db.get_usable_table_names()}")
print(f'Sample output: {db.run("SELECT * FROM Artist LIMIT 5;")}')
```

```
Dialect: sqlite
Available tables: ['Album', 'Artist', 'Customer', 'Employee', 'Genre', 'Invoice', 'InvoiceLine', 'MediaType', 'Playlist', 'PlaylistTrack', 'Track']
Sample output: [(1, 'AC/DC'), (2, 'Accept'), (3, 'Aerosmith'), (4, 'Alanis Morissette'), (5, 'Alice In Chains')]
```

## 3. Add tools for database interactions

Use the `SQLDatabase` wrapper available in the `langchain_community` package to interact with the database. The wrapper provides a simple interface to execute SQL queries and fetch results:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_community.agent_toolkits import SQLDatabaseToolkit

toolkit = SQLDatabaseToolkit(db=db, llm=model)

tools = toolkit.get_tools()

for tool in tools:
    print(f"{tool.name}: {tool.description}\n")
```

```
sql_db_query: Input to this tool is a detailed and correct SQL query, output is a result from the database. If the query is not correct, an error message will be returned. If an error is returned, rewrite the query, check the query, and try again. If you encounter an issue with Unknown column 'xxxx' in 'field list', use sql_db_schema to query the correct table fields.

sql_db_schema: Input to this tool is a comma-separated list of tables, output is the schema and sample rows for those tables. Be sure that the tables actually exist by calling sql_db_list_tables first! Example Input: table1, table2, table3

sql_db_list_tables: Input is an empty string, output is a comma-separated list of tables in the database.

sql_db_query_checker: Use this tool to double check if your query is correct before executing it. Always use this tool before executing a query with sql_db_query!
```

## 4. Use `create_agent`

Use [`create_agent`](https://reference.langchain.com/python/langchain/agents/factory/create_agent) to build a [ReAct agent](https://arxiv.org/pdf/2210.03629) with minimal code. The agent will interpret the request and generate a SQL command, which the tools will execute. If the command has an error, the error message is returned to the model. The model can then examine the original request and the new error message and generate a new command. This can continue until the LLM generates the command successfully or reaches an end count. This pattern of providing a model with feedback - error messages in this case - is very powerful.

Initialize the agent with a descriptive system prompt to customize its behavior:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
system_prompt = """
You are an agent designed to interact with a SQL database.
Given an input question, create a syntactically correct {dialect} query to run,
then look at the results of the query and return the answer. Unless the user
specifies a specific number of examples they wish to obtain, always limit your
query to at most {top_k} results.

You can order the results by a relevant column to return the most interesting
examples in the database. Never query for all the columns from a specific table,
only ask for the relevant columns given the question.

You MUST double check your query before executing it. If you get an error while
executing a query, rewrite the query and try again.

DO NOT make any DML statements (INSERT, UPDATE, DELETE, DROP etc.) to the
database.

To start you should ALWAYS look at the tables in the database to see what you
can query. Do NOT skip this step.

Then you should query the schema of the most relevant tables.
""".format(
    dialect=db.dialect,
    top_k=5,
)
```

Now, create an agent with the model, tools, and prompt:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent


agent = create_agent(
    model,
    tools,
    system_prompt=system_prompt,
)
```

## 5. Run the agent

Run the agent on a sample query and observe its behavior:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
question = "Which genre on average has the longest tracks?"

for step in agent.stream(
    {"messages": [{"role": "user", "content": question}]},
    stream_mode="values",
):
    step["messages"][-1].pretty_print()
```

```
================================ Human Message =================================

Which genre on average has the longest tracks?
================================== Ai Message ==================================
Tool Calls:
  sql_db_list_tables (call_BQsWg8P65apHc8BTJ1NPDvnM)
 Call ID: call_BQsWg8P65apHc8BTJ1NPDvnM
  Args:
================================= Tool Message =================================
Name: sql_db_list_tables

Album, Artist, Customer, Employee, Genre, Invoice, InvoiceLine, MediaType, Playlist, PlaylistTrack, Track
================================== Ai Message ==================================
Tool Calls:
  sql_db_schema (call_i89tjKECFSeERbuACYm4w0cU)
 Call ID: call_i89tjKECFSeERbuACYm4w0cU
  Args:
    table_names: Track, Genre
================================= Tool Message =================================
Name: sql_db_schema


CREATE TABLE "Genre" (
	"GenreId" INTEGER NOT NULL,
	"Name" NVARCHAR(120),
	PRIMARY KEY ("GenreId")
)

/*
3 rows from Genre table:
GenreId	Name
1	Rock
2	Jazz
3	Metal
*/


CREATE TABLE "Track" (
	"TrackId" INTEGER NOT NULL,
	"Name" NVARCHAR(200) NOT NULL,
	"AlbumId" INTEGER,
	"MediaTypeId" INTEGER NOT NULL,
	"GenreId" INTEGER,
	"Composer" NVARCHAR(220),
	"Milliseconds" INTEGER NOT NULL,
	"Bytes" INTEGER,
	"UnitPrice" NUMERIC(10, 2) NOT NULL,
	PRIMARY KEY ("TrackId"),
	FOREIGN KEY("MediaTypeId") REFERENCES "MediaType" ("MediaTypeId"),
	FOREIGN KEY("GenreId") REFERENCES "Genre" ("GenreId"),
	FOREIGN KEY("AlbumId") REFERENCES "Album" ("AlbumId")
)

/*
3 rows from Track table:
TrackId	Name	AlbumId	MediaTypeId	GenreId	Composer	Milliseconds	Bytes	UnitPrice
1	For Those About To Rock (We Salute You)	1	1	1	Angus Young, Malcolm Young, Brian Johnson	343719	11170334	0.99
2	Balls to the Wall	2	2	1	U. Dirkschneider, W. Hoffmann, H. Frank, P. Baltes, S. Kaufmann, G. Hoffmann	342562	5510424	0.99
3	Fast As a Shark	3	2	1	F. Baltes, S. Kaufman, U. Dirkscneider & W. Hoffman	230619	3990994	0.99
*/
================================== Ai Message ==================================
Tool Calls:
  sql_db_query_checker (call_G64yYm6R6UauiVPCXJZMA49b)
 Call ID: call_G64yYm6R6UauiVPCXJZMA49b
  Args:
    query: SELECT Genre.Name, AVG(Track.Milliseconds) AS AverageLength FROM Track INNER JOIN Genre ON Track.GenreId = Genre.GenreId GROUP BY Genre.Name ORDER BY AverageLength DESC LIMIT 5;
================================= Tool Message =================================
Name: sql_db_query_checker

SELECT Genre.Name, AVG(Track.Milliseconds) AS AverageLength FROM Track INNER JOIN Genre ON Track.GenreId = Genre.GenreId GROUP BY Genre.Name ORDER BY AverageLength DESC LIMIT 5;
================================== Ai Message ==================================
Tool Calls:
  sql_db_query (call_AnO3SrhD0ODJBxh6dHMwvHwZ)
 Call ID: call_AnO3SrhD0ODJBxh6dHMwvHwZ
  Args:
    query: SELECT Genre.Name, AVG(Track.Milliseconds) AS AverageLength FROM Track INNER JOIN Genre ON Track.GenreId = Genre.GenreId GROUP BY Genre.Name ORDER BY AverageLength DESC LIMIT 5;
================================= Tool Message =================================
Name: sql_db_query

[('Sci Fi & Fantasy', 2911783.0384615385), ('Science Fiction', 2625549.076923077), ('Drama', 2575283.78125), ('TV Shows', 2145041.0215053763), ('Comedy', 1585263.705882353)]
================================== Ai Message ==================================

On average, the genre with the longest tracks is "Sci Fi & Fantasy" with an average track length of approximately 2,911,783 milliseconds. This is followed by "Science Fiction," "Drama," "TV Shows," and "Comedy."
```

The agent correctly wrote a query, checked the query, and ran it to inform its final response.

You can inspect all aspects of the above run, including steps taken, tools invoked, what prompts were seen by the LLM, and more in the [LangSmith trace](https://smith.langchain.com/public/cd2ce887-388a-4bb1-a29d-48208ce50d15/r).

### (Optional) Use Studio

[Studio](/langsmith/studio) provides a "client side" loop as well as memory so you can run this as a chat interface and query the database. You can ask questions like "Tell me the scheme of the database" or "Show me the invoices for the 5 top customers". You will see the SQL command that is generated and the resulting output. The details of how to get that started are below.

In addition to the previously mentioned packages, you will need to:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U langgraph-cli[inmem]>=0.4.0
```

In directory you will run in, you will need a `langgraph.json` file with the following contents:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "dependencies": ["."],
  "graphs": {
      "agent": "./sql_agent.py:agent",
      "graph": "./sql_agent_langgraph.py:graph"
  },
  "env": ".env"
}
```

Create a file `sql_agent.py` and insert this:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
#sql_agent.py for studio
import pathlib

from langchain.agents import create_agent
from langchain.chat_models import init_chat_model
from langchain_community.agent_toolkits import SQLDatabaseToolkit
from langchain_community.utilities import SQLDatabase
import requests


# Initialize an LLM
model = init_chat_model("gpt-4.1")

# Get the database, store it locally
url = "https://storage.googleapis.com/benchmarks-artifacts/chinook/Chinook.db"
local_path = pathlib.Path("Chinook.db")

if local_path.exists():
    print(f"{local_path} already exists, skipping download.")
else:
    response = requests.get(url)
    if response.status_code == 200:
        local_path.write_bytes(response.content)
        print(f"File downloaded and saved as {local_path}")
    else:
        print(f"Failed to download the file. Status code: {response.status_code}")

db = SQLDatabase.from_uri("sqlite:///Chinook.db")

# Create the tools
toolkit = SQLDatabaseToolkit(db=db, llm=model)

tools = toolkit.get_tools()

for tool in tools:
    print(f"{tool.name}: {tool.description}\n")

# Use create_agent
system_prompt = """
You are an agent designed to interact with a SQL database.
Given an input question, create a syntactically correct {dialect} query to run,
then look at the results of the query and return the answer. Unless the user
specifies a specific number of examples they wish to obtain, always limit your
query to at most {top_k} results.

You can order the results by a relevant column to return the most interesting
examples in the database. Never query for all the columns from a specific table,
only ask for the relevant columns given the question.

You MUST double check your query before executing it. If you get an error while
executing a query, rewrite the query and try again.

DO NOT make any DML statements (INSERT, UPDATE, DELETE, DROP etc.) to the
database.

To start you should ALWAYS look at the tables in the database to see what you
can query. Do NOT skip this step.

Then you should query the schema of the most relevant tables.
""".format(
    dialect=db.dialect,
    top_k=5,
)

agent = create_agent(
    model,
    tools,
    system_prompt=system_prompt,
)
```

## 6. Implement human-in-the-loop review

It can be prudent to check the agent's SQL queries before they are executed for any unintended actions or inefficiencies.

LangChain agents feature support for built-in [human-in-the-loop middleware](/oss/python/langchain/human-in-the-loop) to add oversight to agent tool calls. Let's configure the agent to pause for human review on calling the `sql_db_query` tool:

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

We've added a [checkpointer](/oss/python/langchain/short-term-memory) to our agent to allow execution to be paused and resumed. See the [human-in-the-loop guide](/oss/python/langchain/human-in-the-loop) for detalis on this as well as available middleware configurations.

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

We can resume execution, in this case accepting the query, using [Command](/oss/python/langgraph/use-graph-api#combine-control-flow-and-state-updates-with-command):

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

Refer to the [human-in-the-loop guide](/oss/python/langchain/human-in-the-loop) for details.

## Next steps

For deeper customization, check out [this tutorial](/oss/python/langgraph/sql-agent) for implementing a SQL agent directly using LangGraph primitives.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/sql-agent.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Streaming

Source: https://docs.langchain.com/oss/python/langchain/streaming

Stream real-time updates from agent runs

LangChain implements a streaming system to surface real-time updates.

Streaming is crucial for enhancing the responsiveness of applications built on LLMs. By displaying output progressively, even before a complete response is ready, streaming significantly improves user experience (UX), particularly when dealing with the latency of LLMs.

## Overview

LangChain's streaming system lets you surface live feedback from agent runs to your application.

What's possible with LangChain streaming:

- [**Stream agent progress**](#agent-progress)—get state updates after each agent step.
- [**Stream LLM tokens**](#llm-tokens)—stream language model tokens as they're generated.
- [**Stream thinking / reasoning tokens**](#streaming-thinking-/-reasoning-tokens)—surface model reasoning as it's generated.
- [**Stream custom updates**](#custom-updates)—emit user-defined signals (e.g., `"Fetched 10/100 records"`).
- [**Stream multiple modes**](#stream-multiple-modes)—choose from `updates` (agent progress), `messages` (LLM tokens + metadata), or `custom` (arbitrary user data).

See the [common patterns](#common-patterns) section below for additional end-to-end examples.

## Supported stream modes

Pass one or more of the following stream modes as a list to the [`stream`](https://reference.langchain.com/python/langgraph/graphs/#langgraph.graph.state.CompiledStateGraph.stream) or [`astream`](https://reference.langchain.com/python/langgraph/graphs/#langgraph.graph.state.CompiledStateGraph.astream) methods:

| Mode       | Description                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `updates`  | Streams state updates after each agent step. If multiple updates are made in the same step (e.g., multiple nodes are run), those updates are streamed separately. |
| `messages` | Streams tuples of `(token, metadata)` from any graph nodes where an LLM is invoked.                                                                               |
| `custom`   | Streams custom data from inside your graph nodes using the stream writer.                                                                                         |

## Agent progress

To stream agent progress, use the [`stream`](https://reference.langchain.com/python/langgraph/graphs/#langgraph.graph.state.CompiledStateGraph.stream) or [`astream`](https://reference.langchain.com/python/langgraph/graphs/#langgraph.graph.state.CompiledStateGraph.astream) methods with `stream_mode="updates"`. This emits an event after every agent step.

For example, if you have an agent that calls a tool once, you should see the following updates:

- **LLM node**: [`AIMessage`](https://reference.langchain.com/python/langchain-core/messages/ai/AIMessage) with tool call requests
- **Tool node**: [`ToolMessage`](https://reference.langchain.com/python/langchain-core/messages/tool/ToolMessage) with execution result
- **LLM node**: Final AI response

```python title="Streaming agent progress" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent


def get_weather(city: str) -> str:
    """Get weather for a given city."""

    return f"It's always sunny in {city}!"

agent = create_agent(
    model="gpt-5-nano",
    tools=[get_weather],
)
for chunk in agent.stream(  # [!code highlight]
    {"messages": [{"role": "user", "content": "What is the weather in SF?"}]},
    stream_mode="updates",
    version="v2",  # [!code highlight]
):
    if chunk["type"] == "updates":  # [!code highlight]
        for step, data in chunk["data"].items():  # [!code highlight]
            print(f"step: {step}")
            print(f"content: {data['messages'][-1].content_blocks}")
```

```shell title="Output" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
step: model
content: [{'type': 'tool_call', 'name': 'get_weather', 'args': {'city': 'San Francisco'}, 'id': 'call_OW2NYNsNSKhRZpjW0wm2Aszd'}]

step: tools
content: [{'type': 'text', 'text': "It's always sunny in San Francisco!"}]

step: model
content: [{'type': 'text', 'text': 'It's always sunny in San Francisco!'}]
```
