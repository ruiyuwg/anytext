## Advanced

### Use with any LLM

You can use `stream_mode="custom"` to stream data from **any LLM API**—even if that API does **not** implement the LangChain chat model interface.

This lets you integrate raw LLM clients or external services that provide their own streaming interfaces, making LangGraph highly flexible for custom setups.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.config import get_stream_writer

def call_arbitrary_model(state):
    """Example node that calls an arbitrary model and streams the output"""
    # Get the stream writer to send custom data
    writer = get_stream_writer()  # [!code highlight]
    # Assume you have a streaming client that yields chunks
    # Generate LLM tokens using your custom streaming client
    for chunk in your_custom_streaming_client(state["topic"]):
        # Use the writer to send custom data to the stream
        writer({"custom_llm_chunk": chunk})  # [!code highlight]
    return {"result": "completed"}

graph = (
    StateGraph(State)
    .add_node(call_arbitrary_model)
    # Add other nodes and edges as needed
    .compile()
)
# Set stream_mode="custom" to receive the custom data in the stream
for chunk in graph.stream(
    {"topic": "cats"},
    stream_mode="custom",  # [!code highlight]
    version="v2",  # [!code highlight]
):
    if chunk["type"] == "custom":
        # The chunk data will contain the custom data streamed from the llm
        print(chunk["data"])
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import operator
import json

from typing import TypedDict
from typing_extensions import Annotated
from langgraph.graph import StateGraph, START

from openai import AsyncOpenAI

openai_client = AsyncOpenAI()
model_name = "gpt-4.1-mini"


async def stream_tokens(model_name: str, messages: list[dict]):
    response = await openai_client.chat.completions.create(
        messages=messages, model=model_name, stream=True
    )
    role = None
    async for chunk in response:
        delta = chunk.choices[0].delta

        if delta.role is not None:
            role = delta.role

        if delta.content:
            yield {"role": role, "content": delta.content}


# this is our tool
async def get_items(place: str) -> str:
    """Use this tool to list items one might find in a place you're asked about."""
    writer = get_stream_writer()
    response = ""
    async for msg_chunk in stream_tokens(
        model_name,
        [
            {
                "role": "user",
                "content": (
                    "Can you tell me what kind of items "
                    f"i might find in the following place: '{place}'. "
                    "List at least 3 such items separating them by a comma. "
                    "And include a brief description of each item."
                ),
            }
        ],
    ):
        response += msg_chunk["content"]
        writer(msg_chunk)

    return response


class State(TypedDict):
    messages: Annotated[list[dict], operator.add]


# this is the tool-calling graph node
async def call_tool(state: State):
    ai_message = state["messages"][-1]
    tool_call = ai_message["tool_calls"][-1]

    function_name = tool_call["function"]["name"]
    if function_name != "get_items":
        raise ValueError(f"Tool {function_name} not supported")

    function_arguments = tool_call["function"]["arguments"]
    arguments = json.loads(function_arguments)

    function_response = await get_items(**arguments)
    tool_message = {
        "tool_call_id": tool_call["id"],
        "role": "tool",
        "name": function_name,
        "content": function_response,
    }
    return {"messages": [tool_message]}


graph = (
    StateGraph(State)
    .add_node(call_tool)
    .add_edge(START, "call_tool")
    .compile()
)
```

Let's invoke the graph with an [`AIMessage`](https://reference.langchain.com/python/langchain-core/messages/ai/AIMessage) that includes a tool call:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
inputs = {
    "messages": [
        {
            "content": None,
            "role": "assistant",
            "tool_calls": [
                {
                    "id": "1",
                    "function": {
                        "arguments": '{"place":"bedroom"}',
                        "name": "get_items",
                    },
                    "type": "function",
                }
            ],
        }
    ]
}

async for chunk in graph.astream(
    inputs,
    stream_mode="custom",
    version="v2",
):
    if chunk["type"] == "custom":
        print(chunk["data"]["content"], end="|", flush=True)
```

### Disable streaming for specific chat models

If your application mixes models that support streaming with those that do not, you may need to explicitly disable streaming for
models that do not support it.

Set `streaming=False` when initializing the model.

````
```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.chat_models import init_chat_model

model = init_chat_model(
    "claude-sonnet-4-6",
    # Set streaming=False to disable streaming for the chat model
    streaming=False  # [!code highlight]
)
```



```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_openai import ChatOpenAI

# Set streaming=False to disable streaming for the chat model
model = ChatOpenAI(model="o1-preview", streaming=False)
```
````

Not all chat model integrations support the `streaming` parameter. If your model doesn't support it, use `disable_streaming=True` instead. This parameter is available on all chat models via the base class.

### Migrate to v2

The v2 streaming format (used throughout this page) provides a unified output format. Here's a summary of the key differences and how to migrate:

| Scenario                    | v1 (default)                       | v2 (`version="v2"`)                               |
| --------------------------- | ---------------------------------- | ------------------------------------------------- |
| Single stream mode          | Raw data (dict)                    | `StreamPart` dict with `type`, `ns`, `data`       |
| Multiple stream modes       | `(mode, data)` tuples              | Same `StreamPart` dict, filter on `chunk["type"]` |
| Subgraph streaming          | `(namespace, data)` tuples         | Same `StreamPart` dict, check `chunk["ns"]`       |
| Multiple modes + subgraphs  | `(namespace, mode, data)` triples  | Same `StreamPart` dict                            |
| `invoke()` return type      | Plain dict (state)                 | `GraphOutput` with `.value` and `.interrupts`     |
| Interrupt location (stream) | `__interrupt__` key in state dict  | `interrupts` field on `values` stream parts       |
| Interrupt location (invoke) | `__interrupt__` key in result dict | `.interrupts` attribute on `GraphOutput`          |
| Pydantic/dataclass output   | Returns plain dict                 | Coerces to model/dataclass instance               |

#### v2 invoke format

When you pass `version="v2"` to `invoke()` or `ainvoke()`, it returns a [`GraphOutput`](https://reference.langchain.com/python/langgraph/types/GraphOutput) object with `.value` and `.interrupts` attributes:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.types import GraphOutput

result = graph.invoke(inputs, version="v2")

assert isinstance(result, GraphOutput)
result.value       # your output — dict, Pydantic model, or dataclass
result.interrupts  # tuple[Interrupt, ...], empty if none occurred
```

With any stream mode other than the default `"values"`, `invoke(..., stream_mode="updates", version="v2")` returns `list[StreamPart]` instead of `list[tuple]`.

Dict-style access on `GraphOutput` (`result["key"]`, `"key" in result`, `result["__interrupt__"]`) still works for backwards compatibility but is **deprecated** and will be removed in a future version. Migrate to `result.value` and `result.interrupts`.

This separates state from interrupt metadata. With v1, interrupts are embedded in the returned dict under `__interrupt__`:

```python v2 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
config = {"configurable": {"thread_id": "thread-1"}}
result = graph.invoke(inputs, config=config, version="v2")

if result.interrupts:
    print(result.interrupts[0].value)
    graph.invoke(Command(resume=True), config=config, version="v2")
```

```python v1 (current default) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
config = {"configurable": {"thread_id": "thread-1"}}
result = graph.invoke(inputs, config=config)

if "__interrupt__" in result:
    print(result["__interrupt__"][0].value)
    graph.invoke(Command(resume=True), config=config)
```

#### Pydantic and dataclass state coercion

When your graph state is a Pydantic model or dataclass, v2 `values` mode automatically coerces output to the correct type:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from pydantic import BaseModel
from typing import Annotated
import operator

class MyState(BaseModel):
    value: str
    items: Annotated[list[str], operator.add]

# With version="v2", chunk["data"] is a MyState instance
for chunk in graph.stream(
    {"value": "x", "items": []}, stream_mode="values", version="v2"
):
    print(type(chunk["data"]))  # <class 'MyState'>
```

### Async with Python < 3.11

In Python versions < 3.11, [asyncio tasks](https://docs.python.org/3/library/asyncio-task.html#asyncio.create_task) do not support the `context` parameter.
This limits LangGraph ability to automatically propagate context, and affects LangGraph's streaming mechanisms in two key ways:

1. You **must** explicitly pass [`RunnableConfig`](https://python.langchain.com/docs/concepts/runnables/#runnableconfig) into async LLM calls (e.g., `ainvoke()`), as callbacks are not automatically propagated.
2. You **cannot** use [`get_stream_writer`](https://reference.langchain.com/python/langgraph/config/get_stream_writer) in async nodes or tools—you must pass a `writer` argument directly.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing import TypedDict
from langgraph.graph import START, StateGraph
from langchain.chat_models import init_chat_model

model = init_chat_model(model="gpt-4.1-mini")

class State(TypedDict):
    topic: str
    joke: str

# Accept config as an argument in the async node function
async def call_model(state, config):
    topic = state["topic"]
    print("Generating joke...")
    # Pass config to model.ainvoke() to ensure proper context propagation
    joke_response = await model.ainvoke(  # [!code highlight]
        [{"role": "user", "content": f"Write a joke about {topic}"}],
        config,
    )
    return {"joke": joke_response.content}

graph = (
    StateGraph(State)
    .add_node(call_model)
    .add_edge(START, "call_model")
    .compile()
)

# Set stream_mode="messages" to stream LLM tokens
async for chunk in graph.astream(
    {"topic": "ice cream"},
    stream_mode="messages",  # [!code highlight]
    version="v2",  # [!code highlight]
):
    if chunk["type"] == "messages":
        message_chunk, metadata = chunk["data"]
        if message_chunk.content:
            print(message_chunk.content, end="|", flush=True)
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing import TypedDict
from langgraph.types import StreamWriter

class State(TypedDict):
      topic: str
      joke: str

# Add writer as an argument in the function signature of the async node or tool
# LangGraph will automatically pass the stream writer to the function
async def generate_joke(state: State, writer: StreamWriter):  # [!code highlight]
      writer({"custom_key": "Streaming custom data while generating a joke"})
      return {"joke": f"This is a joke about {state['topic']}"}

graph = (
      StateGraph(State)
      .add_node(generate_joke)
      .add_edge(START, "generate_joke")
      .compile()
)

# Set stream_mode="custom" to receive the custom data in the stream  # [!code highlight]
async for chunk in graph.astream(
      {"topic": "ice cream"},
      stream_mode="custom",
      version="v2",
):
      if chunk["type"] == "custom":
          print(chunk["data"])
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langgraph/streaming.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
