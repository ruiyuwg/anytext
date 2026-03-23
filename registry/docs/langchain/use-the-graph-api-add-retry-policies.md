## Add retry policies

There are many use cases where you may wish for your node to have a custom retry policy, for example if you are calling an API, querying a database, or calling an LLM, etc. LangGraph lets you add retry policies to nodes.

To configure a retry policy, pass the `retry_policy` parameter to the [`add_node`](https://reference.langchain.com/python/langgraph/graph/state/StateGraph/add_node). The `retry_policy` parameter takes in a `RetryPolicy` named tuple object. Below we instantiate a `RetryPolicy` object with the default parameters and associate it with a node:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.types import RetryPolicy

builder.add_node(
    "node_name",
    node_function,
    retry_policy=RetryPolicy(),
)
```

By default, the `retry_on` parameter uses the `default_retry_on` function, which retries on any exception except for the following:

- `ValueError`
- `TypeError`
- `ArithmeticError`
- `ImportError`
- `LookupError`
- `NameError`
- `SyntaxError`
- `RuntimeError`
- `ReferenceError`
- `StopIteration`
- `StopAsyncIteration`
- `OSError`

In addition, for exceptions from popular http request libraries such as `requests` and `httpx` it only retries on 5xx status codes.

Consider an example in which we are reading from a SQL database. Below we pass two different retry policies to nodes:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import sqlite3
from typing_extensions import TypedDict
from langchain.chat_models import init_chat_model
from langgraph.graph import END, MessagesState, StateGraph, START
from langgraph.types import RetryPolicy
from langchain_community.utilities import SQLDatabase
from langchain.messages import AIMessage

db = SQLDatabase.from_uri("sqlite:///:memory:")
model = init_chat_model("claude-haiku-4-5-20251001")

def query_database(state: MessagesState):
    query_result = db.run("SELECT * FROM Artist LIMIT 10;")
    return {"messages": [AIMessage(content=query_result)]}

def call_model(state: MessagesState):
    response = model.invoke(state["messages"])
    return {"messages": [response]}

# Define a new graph
builder = StateGraph(MessagesState)
builder.add_node(
    "query_database",
    query_database,
    retry_policy=RetryPolicy(retry_on=sqlite3.OperationalError),
)
builder.add_node("model", call_model, retry_policy=RetryPolicy(max_attempts=5))
builder.add_edge(START, "model")
builder.add_edge("model", "query_database")
builder.add_edge("query_database", END)
graph = builder.compile()
```

### Access execution info inside a node

Requires `langgraph>=1.1.3`. When a node has a retry policy, you can inspect the current attempt number and the time of the first attempt via `runtime.execution_info`. This is useful for adjusting behavior based on retry state (e.g., switching to a fallback provider after the first attempt fails).

| Attribute                 | Description                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------ |
| `node_attempt`            | Current execution attempt number (1-indexed). `1` on the first try, `2` on the first retry, etc. |
| `node_first_attempt_time` | Unix timestamp (seconds) of when the first attempt started. Stays the same across retries.       |

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.graph import StateGraph, START, END
from langgraph.runtime import Runtime
from langgraph.types import RetryPolicy
from typing_extensions import TypedDict

class State(TypedDict):
    result: str

def my_node(state: State, runtime: Runtime):
    info = runtime.execution_info
    if info.node_attempt > 1:  # [!code highlight]
        # use a fallback on retries
        return {"result": call_fallback_api()}
    return {"result": call_primary_api()}

builder = StateGraph(State)
builder.add_node("my_node", my_node, retry_policy=RetryPolicy(max_attempts=3))
builder.add_edge(START, "my_node")
builder.add_edge("my_node", END)
graph = builder.compile()
```

`execution_info` is available on the `Runtime` object even without a retry policy — `node_attempt` defaults to `1` and `node_first_attempt_time` is set to the time the node starts executing.

## Add node caching

Node caching is useful in cases where you want to avoid repeating operations, like when doing something expensive (either in terms of time or cost). LangGraph lets you add individualized caching policies to nodes in a graph.

To configure a cache policy, pass the `cache_policy` parameter to the [`add_node`](https://reference.langchain.com/python/langgraph/graph/state/StateGraph/add_node) function. In the following example, a [`CachePolicy`](https://reference.langchain.com/python/langgraph/types/CachePolicy) object is instantiated with a time to live of 120 seconds and the default `key_func` generator. Then it is associated with a node:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.types import CachePolicy

builder.add_node(
    "node_name",
    node_function,
    cache_policy=CachePolicy(ttl=120),
)
```

Then, to enable node-level caching for a graph, set the `cache` argument when compiling the graph. The example below uses `InMemoryCache` to set up a graph with in-memory cache, but `SqliteCache` is also available.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.cache.memory import InMemoryCache

graph = builder.compile(cache=InMemoryCache())
```
