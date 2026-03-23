## Get started

### Basic usage

LangGraph graphs expose the [`stream`](https://reference.langchain.com/python/langgraph/pregel/#langgraph.pregel.Pregel.stream) (sync) and [`astream`](https://reference.langchain.com/python/langgraph/pregel/#langgraph.pregel.Pregel.astream) (async) methods to yield streamed outputs as iterators. Pass one or more [stream modes](#stream-modes) to control what data you receive.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
for chunk in graph.stream(
    {"topic": "ice cream"},
    stream_mode=["updates", "custom"],  # [!code highlight]
    version="v2",  # [!code highlight]
):
    if chunk["type"] == "updates":
        for node_name, state in chunk["data"].items():
            print(f"Node {node_name} updated: {state}")
    elif chunk["type"] == "custom":
        print(f"Status: {chunk['data']['status']}")
```

```shell title="Output" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Status: thinking of a joke...
Node generate_joke updated: {'joke': 'Why did the ice cream go to school? To get a sundae education!'}
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing import TypedDict
from langgraph.graph import StateGraph, START, END
from langgraph.config import get_stream_writer


class State(TypedDict):
    topic: str
    joke: str


def generate_joke(state: State):
    writer = get_stream_writer()
    writer({"status": "thinking of a joke..."})
    return {"joke": f"Why did the {state['topic']} go to school? To get a sundae education!"}

graph = (
    StateGraph(State)
    .add_node(generate_joke)
    .add_edge(START, "generate_joke")
    .add_edge("generate_joke", END)
    .compile()
)

for chunk in graph.stream(
    {"topic": "ice cream"},
    stream_mode=["updates", "custom"],
    version="v2",
):
    if chunk["type"] == "updates":
        for node_name, state in chunk["data"].items():
            print(f"Node {node_name} updated: {state}")
    elif chunk["type"] == "custom":
        print(f"Status: {chunk['data']['status']}")
```

```shell title="Output" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Status: thinking of a joke...
Node generate_joke updated: {'joke': 'Why did the ice cream go to school? To get a sundae education!'}
```

### Stream output format (v2)

Requires LangGraph >= 1.1. All examples on this page use `version="v2"`.

Pass `version="v2"` to `stream()` or `astream()` to get a unified output format. Every chunk is a `StreamPart` dict with a consistent shape — regardless of stream mode, number of modes, or subgraph settings:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
    "type": "values" | "updates" | "messages" | "custom" | "checkpoints" | "tasks" | "debug",
    "ns": (),           # namespace tuple, populated for subgraph events
    "data": ...,        # the actual payload (type varies by stream mode)
}
```

Each stream mode has a corresponding `TypedDict` containing [`ValuesStreamPart`](https://reference.langchain.com/python/langgraph/types/ValuesStreamPart), [`UpdatesStreamPart`](https://reference.langchain.com/python/langgraph/types/UpdatesStreamPart), [`MessagesStreamPart`](https://reference.langchain.com/python/langgraph/types/MessagesStreamPart), [`CustomStreamPart`](https://reference.langchain.com/python/langgraph/types/CustomStreamPart), [`CheckpointStreamPart`](https://reference.langchain.com/python/langgraph/types/CheckpointStreamPart), [`TasksStreamPart`](https://reference.langchain.com/python/langgraph/types/TasksStreamPart), [`DebugStreamPart`](https://reference.langchain.com/python/langgraph/types/DebugStreamPart). You can import these types from `langgraph.types`. The union type [`StreamPart`](https://reference.langchain.com/python/langgraph/types/StreamPart) is a disjoing union on `part["type"]`, enabling full type narrowing in editors and type checkers.

With v1 (default), the output format changes based on your streaming options (single mode returns raw data, multiple modes return `(mode, data)` tuples, subgraphs return `(namespace, data)` tuples). With v2, the format is always the same:

```python v2 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
for chunk in graph.stream(inputs, stream_mode="updates", version="v2"):
    print(chunk["type"])  # "updates"
    print(chunk["ns"])    # ()
    print(chunk["data"])  # {"node_name": {"key": "value"}}
```

```python v1 (current default) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
for chunk in graph.stream(inputs, stream_mode="updates"):
    print(chunk)  # {"node_name": {"key": "value"}}
```

The v2 format also enables type narrowing, which means you can filter chunks by `chunk["type"]` and get the correct payload type. Each branch narrows `part["data"]` to the specific type for that mode:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
for part in graph.stream(
    {"topic": "ice cream"},
    stream_mode=["values", "updates", "messages", "custom"],
    version="v2",
):
    if part["type"] == "values":
        # ValuesStreamPart — full state snapshot after each step
        print(f"State: topic={part['data']['topic']}")
    elif part["type"] == "updates":
        # UpdatesStreamPart — only the changed keys from each node
        for node_name, state in part["data"].items():
            print(f"Node `{node_name}` updated: {state}")
    elif part["type"] == "messages":
        # MessagesStreamPart — (message_chunk, metadata) from LLM calls
        msg, metadata = part["data"]
        print(msg.content, end="", flush=True)
    elif part["type"] == "custom":
        # CustomStreamPart — arbitrary data from get_stream_writer()
        print(f"Progress: {part['data']['progress']}%")
```
