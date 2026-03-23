## Stream modes

Pass one or more of the following stream modes as a list to the [`stream`](https://reference.langchain.com/python/langgraph/graphs/#langgraph.graph.state.CompiledStateGraph.stream) or [`astream`](https://reference.langchain.com/python/langgraph/graphs/#langgraph.graph.state.CompiledStateGraph.astream) methods:

| Mode                        | Type                                                                                                  | Description                                                                                                                          |
| :-------------------------- | :---------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [values](#graph-state)      | [`ValuesStreamPart`](https://reference.langchain.com/python/langgraph/types/ValuesStreamPart)         | Full state after each step.                                                                                                          |
| [updates](#graph-state)     | [`UpdatesStreamPart`](https://reference.langchain.com/python/langgraph/types/UpdatesStreamPart)       | State updates after each step. Multiple updates in the same step are streamed separately.                                            |
| [messages](#llm-tokens)     | [`MessagesStreamPart`](https://reference.langchain.com/python/langgraph/types/MessagesStreamPart)     | 2-tuples of (LLM token, metadata) from LLM calls.                                                                                    |
| [custom](#custom-data)      | [`CustomStreamPart`](https://reference.langchain.com/python/langgraph/types/CustomStreamPart)         | Custom data emitted from nodes via [`get_stream_writer`](https://reference.langchain.com/python/langgraph/config/get_stream_writer). |
| [checkpoints](#checkpoints) | [`CheckpointStreamPart`](https://reference.langchain.com/python/langgraph/types/CheckpointStreamPart) | Checkpoint events (same format as `get_state()`). Requires a checkpointer.                                                           |
| [tasks](#tasks)             | [`TasksStreamPart`](https://reference.langchain.com/python/langgraph/types/TasksStreamPart)           | Task start/finish events with results and errors. Requires a checkpointer.                                                           |
| [debug](#debug)             | [`DebugStreamPart`](https://reference.langchain.com/python/langgraph/types/DebugStreamPart)           | All available info — combines `checkpoints` and `tasks` with extra metadata.                                                         |

### Graph state

Use the stream modes `updates` and `values` to stream the state of the graph as it executes.

- `updates` streams the **updates** to the state after each step of the graph.
- `values` streams the **full value** of the state after each step of the graph.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing import TypedDict
from langgraph.graph import StateGraph, START, END


class State(TypedDict):
  topic: str
  joke: str


def refine_topic(state: State):
    return {"topic": state["topic"] + " and cats"}


def generate_joke(state: State):
    return {"joke": f"This is a joke about {state['topic']}"}

graph = (
  StateGraph(State)
  .add_node(refine_topic)
  .add_node(generate_joke)
  .add_edge(START, "refine_topic")
  .add_edge("refine_topic", "generate_joke")
  .add_edge("generate_joke", END)
  .compile()
)
```

````
Use this to stream only the **state updates** returned by the nodes after each step. The streamed outputs include the name of the node as well as the update.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
for chunk in graph.stream(
    {"topic": "ice cream"},
    stream_mode="updates",  # [!code highlight]
    version="v2",  # [!code highlight]
):
    if chunk["type"] == "updates":
        for node_name, state in chunk["data"].items():
            print(f"Node `{node_name}` updated: {state}")
```

```shell title="Output" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Node `refine_topic` updated: {'topic': 'ice cream and cats'}
Node `generate_joke` updated: {'joke': 'This is a joke about ice cream and cats'}
```



Use this to stream the **full state** of the graph after each step.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
for chunk in graph.stream(
    {"topic": "ice cream"},
    stream_mode="values",  # [!code highlight]
    version="v2",  # [!code highlight]
):
    if chunk["type"] == "values":
        print(f"topic: {chunk['data']['topic']}, joke: {chunk['data']['joke']}")
```

```shell title="Output" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
topic: ice cream, joke:
topic: ice cream and cats, joke:
topic: ice cream and cats, joke: This is a joke about ice cream and cats
```
````

### LLM tokens

Use the `messages` streaming mode to stream Large Language Model (LLM) outputs **token by token** from any part of your graph, including nodes, tools, subgraphs, or tasks.

The streamed output from [`messages` mode](#stream-modes) is a tuple `(message_chunk, metadata)` where:

- `message_chunk`: the token or message segment from the LLM.
- `metadata`: a dictionary containing details about the graph node and LLM invocation.

> If your LLM is not available as a LangChain integration, you can stream its outputs using `custom` mode instead. See [use with any LLM](#use-with-any-llm) for details.

**Manual config required for async in Python < 3.11**
When using Python < 3.11 with async code, you must explicitly pass [`RunnableConfig`](https://reference.langchain.com/python/langchain-core/runnables/config/RunnableConfig) to `ainvoke()` to enable proper streaming. See [Async with Python < 3.11](#async) for details or upgrade to Python 3.11+.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from dataclasses import dataclass

from langchain.chat_models import init_chat_model
from langgraph.graph import StateGraph, START


@dataclass
class MyState:
    topic: str
    joke: str = ""


model = init_chat_model(model="gpt-4.1-mini")

def call_model(state: MyState):
    """Call the LLM to generate a joke about a topic"""
    # Note that message events are emitted even when the LLM is run using .invoke rather than .stream
    model_response = model.invoke(  # [!code highlight]
        [
            {"role": "user", "content": f"Generate a joke about {state.topic}"}
        ]
    )
    return {"joke": model_response.content}

graph = (
    StateGraph(MyState)
    .add_node(call_model)
    .add_edge(START, "call_model")
    .compile()
)

# The "messages" stream mode streams LLM tokens with metadata
# Use version="v2" for a unified StreamPart format
for chunk in graph.stream(
    {"topic": "ice cream"},
    stream_mode="messages",  # [!code highlight]
    version="v2",  # [!code highlight]
):
    if chunk["type"] == "messages":
        message_chunk, metadata = chunk["data"]
        if message_chunk.content:
            print(message_chunk.content, end="|", flush=True)
```

#### Filter by LLM invocation

You can associate `tags` with LLM invocations to filter the streamed tokens by LLM invocation.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.chat_models import init_chat_model

# model_1 is tagged with "joke"
model_1 = init_chat_model(model="gpt-4.1-mini", tags=['joke'])
# model_2 is tagged with "poem"
model_2 = init_chat_model(model="gpt-4.1-mini", tags=['poem'])

graph = ... # define a graph that uses these LLMs

# The stream_mode is set to "messages" to stream LLM tokens
# The metadata contains information about the LLM invocation, including the tags
async for chunk in graph.astream(
    {"topic": "cats"},
    stream_mode="messages",  # [!code highlight]
    version="v2",  # [!code highlight]
):
    if chunk["type"] == "messages":
        msg, metadata = chunk["data"]
        # Filter the streamed tokens by the tags field in the metadata to only include
        # the tokens from the LLM invocation with the "joke" tag
        if metadata["tags"] == ["joke"]:
            print(msg.content, end="|", flush=True)
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing import TypedDict

from langchain.chat_models import init_chat_model
from langgraph.graph import START, StateGraph

# The joke_model is tagged with "joke"
joke_model = init_chat_model(model="gpt-4.1-mini", tags=["joke"])
# The poem_model is tagged with "poem"
poem_model = init_chat_model(model="gpt-4.1-mini", tags=["poem"])


class State(TypedDict):
      topic: str
      joke: str
      poem: str


async def call_model(state, config):
      topic = state["topic"]
      print("Writing joke...")
      # Note: Passing the config through explicitly is required for python < 3.11
      # Since context var support wasn't added before then: https://docs.python.org/3/library/asyncio-task.html#creating-tasks
      # The config is passed through explicitly to ensure the context vars are propagated correctly
      # This is required for Python < 3.11 when using async code. Please see the async section for more details
      joke_response = await joke_model.ainvoke(
            [{"role": "user", "content": f"Write a joke about {topic}"}],
            config,
      )
      print("\n\nWriting poem...")
      poem_response = await poem_model.ainvoke(
            [{"role": "user", "content": f"Write a short poem about {topic}"}],
            config,
      )
      return {"joke": joke_response.content, "poem": poem_response.content}


graph = (
      StateGraph(State)
      .add_node(call_model)
      .add_edge(START, "call_model")
      .compile()
)

# The stream_mode is set to "messages" to stream LLM tokens
# The metadata contains information about the LLM invocation, including the tags
async for chunk in graph.astream(
      {"topic": "cats"},
      stream_mode="messages",
      version="v2",
):
    if chunk["type"] == "messages":
        msg, metadata = chunk["data"]
        if metadata["tags"] == ["joke"]:
            print(msg.content, end="|", flush=True)
```

#### Filter by node

To stream tokens only from specific nodes, use `stream_mode="messages"` and filter the outputs by the `langgraph_node` field in the streamed metadata:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# The "messages" stream mode streams LLM tokens with metadata
# Use version="v2" for a unified StreamPart format
for chunk in graph.stream(
    inputs,
    stream_mode="messages",  # [!code highlight]
    version="v2",  # [!code highlight]
):
    if chunk["type"] == "messages":
        msg, metadata = chunk["data"]
        # Filter the streamed tokens by the langgraph_node field in the metadata
        # to only include the tokens from the specified node
        if msg.content and metadata["langgraph_node"] == "some_node_name":
            ...
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing import TypedDict
from langgraph.graph import START, StateGraph
from langchain_openai import ChatOpenAI

model = ChatOpenAI(model="gpt-4.1-mini")


class State(TypedDict):
      topic: str
      joke: str
      poem: str


def write_joke(state: State):
      topic = state["topic"]
      joke_response = model.invoke(
            [{"role": "user", "content": f"Write a joke about {topic}"}]
      )
      return {"joke": joke_response.content}


def write_poem(state: State):
      topic = state["topic"]
      poem_response = model.invoke(
            [{"role": "user", "content": f"Write a short poem about {topic}"}]
      )
      return {"poem": poem_response.content}


graph = (
      StateGraph(State)
      .add_node(write_joke)
      .add_node(write_poem)
      # write both the joke and the poem concurrently
      .add_edge(START, "write_joke")
      .add_edge(START, "write_poem")
      .compile()
)

# The "messages" stream mode streams LLM tokens with metadata
# Use version="v2" for a unified StreamPart format
for chunk in graph.stream(
    {"topic": "cats"},
    stream_mode="messages",  # [!code highlight]
    version="v2",  # [!code highlight]
):
    if chunk["type"] == "messages":
        msg, metadata = chunk["data"]
        # Filter the streamed tokens by the langgraph_node field in the metadata
        # to only include the tokens from the write_poem node
        if msg.content and metadata["langgraph_node"] == "write_poem":
            print(msg.content, end="|", flush=True)
```

### Custom data

To send **custom user-defined data** from inside a LangGraph node or tool, follow these steps:

1. Use [`get_stream_writer`](https://reference.langchain.com/python/langgraph/config/get_stream_writer) to access the stream writer and emit custom data.
2. Set `stream_mode="custom"` when calling `.stream()` or `.astream()` to get the custom data in the stream. You can combine multiple modes (e.g., `["updates", "custom"]`), but at least one must be `"custom"`.

**No [`get_stream_writer`](https://reference.langchain.com/python/langgraph/config/get_stream_writer) in async for Python < 3.11**
In async code running on Python < 3.11, [`get_stream_writer`](https://reference.langchain.com/python/langgraph/config/get_stream_writer) will not work.
Instead, add a `writer` parameter to your node or tool and pass it manually.
See [Async with Python < 3.11](#async) for usage examples.

````
```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing import TypedDict
from langgraph.config import get_stream_writer
from langgraph.graph import StateGraph, START

class State(TypedDict):
    query: str
    answer: str

def node(state: State):
    # Get the stream writer to send custom data
    writer = get_stream_writer()
    # Emit a custom key-value pair (e.g., progress update)
    writer({"custom_key": "Generating custom data inside node"})
    return {"answer": "some data"}

graph = (
    StateGraph(State)
    .add_node(node)
    .add_edge(START, "node")
    .compile()
)

inputs = {"query": "example"}

# Set stream_mode="custom" to receive the custom data in the stream
for chunk in graph.stream(inputs, stream_mode="custom", version="v2"):
    if chunk["type"] == "custom":
        print(f"Custom event: {chunk['data']['custom_key']}")
```



```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.tools import tool
from langgraph.config import get_stream_writer

@tool
def query_database(query: str) -> str:
    """Query the database."""
    # Access the stream writer to send custom data
    writer = get_stream_writer()  # [!code highlight]
    # Emit a custom key-value pair (e.g., progress update)
    writer({"data": "Retrieved 0/100 records", "type": "progress"})  # [!code highlight]
    # perform query
    # Emit another custom key-value pair
    writer({"data": "Retrieved 100/100 records", "type": "progress"})
    return "some-answer"


graph = ... # define a graph that uses this tool

# Set stream_mode="custom" to receive the custom data in the stream
for chunk in graph.stream(inputs, stream_mode="custom", version="v2"):
    if chunk["type"] == "custom":
        print(f"{chunk['data']['type']}: {chunk['data']['data']}")
```
````

### Subgraph outputs

To include outputs from [subgraphs](/oss/python/langgraph/use-subgraphs) in the streamed outputs, you can set `subgraphs=True` in the `.stream()` method of the parent graph. This will stream outputs from both the parent graph and any subgraphs.

The outputs will be streamed as tuples `(namespace, data)`, where `namespace` is a tuple with the path to the node where a subgraph is invoked, e.g. `("parent_node:<task_id>", "child_node:<task_id>")`.

\= 1.1)">
With `version="v2"`, subgraph events use the same `StreamPart` format. The `ns` field identifies the source:

````
```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
for chunk in graph.stream(
    {"foo": "foo"},
    subgraphs=True,  # [!code highlight]
    stream_mode="updates",
    version="v2", # [!code highlight]
):
    print(chunk["type"])  # "updates"
    print(chunk["ns"])    # () for root, ("node_name:<task_id>",) for subgraph
    print(chunk["data"])  # {"node_name": {"key": "value"}}
```



```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
for chunk in graph.stream(
    {"foo": "foo"},
    # Set subgraphs=True to stream outputs from subgraphs
    subgraphs=True,  # [!code highlight]
    stream_mode="updates",
):
    print(chunk)
```
````

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.graph import START, StateGraph
from typing import TypedDict

# Define subgraph
class SubgraphState(TypedDict):
    foo: str  # note that this key is shared with the parent graph state
    bar: str

def subgraph_node_1(state: SubgraphState):
    return {"bar": "bar"}

def subgraph_node_2(state: SubgraphState):
    return {"foo": state["foo"] + state["bar"]}

subgraph_builder = StateGraph(SubgraphState)
subgraph_builder.add_node(subgraph_node_1)
subgraph_builder.add_node(subgraph_node_2)
subgraph_builder.add_edge(START, "subgraph_node_1")
subgraph_builder.add_edge("subgraph_node_1", "subgraph_node_2")
subgraph = subgraph_builder.compile()

# Define parent graph
class ParentState(TypedDict):
    foo: str

def node_1(state: ParentState):
    return {"foo": "hi! " + state["foo"]}

builder = StateGraph(ParentState)
builder.add_node("node_1", node_1)
builder.add_node("node_2", subgraph)
builder.add_edge(START, "node_1")
builder.add_edge("node_1", "node_2")
graph = builder.compile()

for chunk in graph.stream(
    {"foo": "foo"},
    stream_mode="updates",
    # Set subgraphs=True to stream outputs from subgraphs
    subgraphs=True,  # [!code highlight]
    version="v2",  # [!code highlight]
):
    if chunk["type"] == "updates":
        if chunk["ns"]:
            print(f"Subgraph {chunk['ns']}: {chunk['data']}")
        else:
            print(f"Root: {chunk['data']}")
```

```
Root: {'node_1': {'foo': 'hi! foo'}}
Subgraph ('node_2:dfddc4ba-c3c5-6887-5012-a243b5b377c2',): {'subgraph_node_1': {'bar': 'bar'}}
Subgraph ('node_2:dfddc4ba-c3c5-6887-5012-a243b5b377c2',): {'subgraph_node_2': {'foo': 'hi! foobar'}}
Root: {'node_2': {'foo': 'hi! foobar'}}
```

**Note** that we are receiving not just the node updates, but we also the namespaces which tell us what graph (or subgraph) we are streaming from.

### Checkpoints

Use the `checkpoints` streaming mode to receive checkpoint events as the graph executes. Each checkpoint event has the same format as the output of `get_state()`. Requires a [checkpointer](/oss/python/langgraph/persistence).

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.checkpoint.memory import MemorySaver

graph = (
    StateGraph(State)
    .add_node(refine_topic)
    .add_node(generate_joke)
    .add_edge(START, "refine_topic")
    .add_edge("refine_topic", "generate_joke")
    .add_edge("generate_joke", END)
    .compile(checkpointer=MemorySaver())
)

config = {"configurable": {"thread_id": "1"}}

for chunk in graph.stream(
    {"topic": "ice cream"},
    config=config,
    stream_mode="checkpoints",  # [!code highlight]
    version="v2",  # [!code highlight]
):
    if chunk["type"] == "checkpoints":
        print(chunk["data"])
```

### Tasks

Use the `tasks` streaming mode to receive task start and finish events as the graph executes. Task events include information about which node is running, its results, and any errors. Requires a [checkpointer](/oss/python/langgraph/persistence).

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.checkpoint.memory import MemorySaver

graph = (
    StateGraph(State)
    .add_node(refine_topic)
    .add_node(generate_joke)
    .add_edge(START, "refine_topic")
    .add_edge("refine_topic", "generate_joke")
    .add_edge("generate_joke", END)
    .compile(checkpointer=MemorySaver())
)

config = {"configurable": {"thread_id": "1"}}

for chunk in graph.stream(
    {"topic": "ice cream"},
    config=config,
    stream_mode="tasks",  # [!code highlight]
    version="v2",  # [!code highlight]
):
    if chunk["type"] == "tasks":
        print(chunk["data"])
```

### Debug

Use the `debug` streaming mode to stream as much information as possible throughout the execution of the graph. The streamed outputs include the name of the node as well as the full state.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
for chunk in graph.stream(
    {"topic": "ice cream"},
    stream_mode="debug",  # [!code highlight]
    version="v2",  # [!code highlight]
):
    if chunk["type"] == "debug":
        print(chunk["data"])
```

The `debug` mode combines `checkpoints` and `tasks` events with additional metadata. Use `checkpoints` or `tasks` directly if you only need a subset of the debug information.

### Multiple modes at once

You can pass a list as the `stream_mode` parameter to stream multiple modes at once.

With `version="v2"`, every chunk is a `StreamPart` dict. Use `chunk["type"]` to distinguish between modes:

```python v2 theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
for chunk in graph.stream(inputs, stream_mode=["updates", "custom"], version="v2"):
    if chunk["type"] == "updates":
        for node_name, state in chunk["data"].items():
            print(f"Node `{node_name}` updated: {state}")
    elif chunk["type"] == "custom":
        print(f"Custom event: {chunk['data']}")
```

```python v1 theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
for mode, chunk in graph.stream(inputs, stream_mode=["updates", "custom"]):
    print(chunk)
```
