## Add runtime configuration

Sometimes you want to be able to configure your graph when calling it. For example, you might want to be able to specify what LLM or system prompt to use at runtime, *without polluting the graph state with these parameters*.

To add runtime configuration:

1. Specify a schema for your configuration
2. Add the configuration to the function signature for nodes or conditional edges
3. Pass the configuration into the graph.

See below for a simple example:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.graph import END, StateGraph, START
from langgraph.runtime import Runtime
from typing_extensions import TypedDict

# 1. Specify config schema
class ContextSchema(TypedDict):
    my_runtime_value: str

# 2. Define a graph that accesses the config in a node
class State(TypedDict):
    my_state_value: str

def node(state: State, runtime: Runtime[ContextSchema]):  # [!code highlight]
    if runtime.context["my_runtime_value"] == "a":  # [!code highlight]
        return {"my_state_value": 1}
    elif runtime.context["my_runtime_value"] == "b":  # [!code highlight]
        return {"my_state_value": 2}
    else:
        raise ValueError("Unknown values.")

builder = StateGraph(State, context_schema=ContextSchema)  # [!code highlight]
builder.add_node(node)
builder.add_edge(START, "node")
builder.add_edge("node", END)

graph = builder.compile()

# 3. Pass in configuration at runtime:
print(graph.invoke({}, context={"my_runtime_value": "a"}))  # [!code highlight]
print(graph.invoke({}, context={"my_runtime_value": "b"}))  # [!code highlight]
```

```
{'my_state_value': 1}
{'my_state_value': 2}
```

Below we demonstrate a practical example in which we configure what LLM to use at runtime. We will use both OpenAI and Anthropic models.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from dataclasses import dataclass

from langchain.chat_models import init_chat_model
from langgraph.graph import MessagesState, END, StateGraph, START
from langgraph.runtime import Runtime
from typing_extensions import TypedDict

@dataclass
class ContextSchema:
    model_provider: str = "anthropic"

MODELS = {
    "anthropic": init_chat_model("claude-haiku-4-5-20251001"),
    "openai": init_chat_model("gpt-4.1-mini"),
}

def call_model(state: MessagesState, runtime: Runtime[ContextSchema]):
    model = MODELS[runtime.context.model_provider]
    response = model.invoke(state["messages"])
    return {"messages": [response]}

builder = StateGraph(MessagesState, context_schema=ContextSchema)
builder.add_node("model", call_model)
builder.add_edge(START, "model")
builder.add_edge("model", END)

graph = builder.compile()

# Usage
input_message = {"role": "user", "content": "hi"}
# With no configuration, uses default (Anthropic)
response_1 = graph.invoke({"messages": [input_message]}, context=ContextSchema())["messages"][-1]
# Or, can set OpenAI
response_2 = graph.invoke({"messages": [input_message]}, context={"model_provider": "openai"})["messages"][-1]

print(response_1.response_metadata["model_name"])
print(response_2.response_metadata["model_name"])
```

```
claude-haiku-4-5-20251001
gpt-4.1-mini-2025-04-14
```

Below we demonstrate a practical example in which we configure two parameters: the LLM and system message to use at runtime.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from dataclasses import dataclass
from langchain.chat_models import init_chat_model
from langchain.messages import SystemMessage
from langgraph.graph import END, MessagesState, StateGraph, START
from langgraph.runtime import Runtime
from typing_extensions import TypedDict

@dataclass
class ContextSchema:
    model_provider: str = "anthropic"
    system_message: str | None = None

MODELS = {
    "anthropic": init_chat_model("claude-haiku-4-5-20251001"),
    "openai": init_chat_model("gpt-4.1-mini"),
}

def call_model(state: MessagesState, runtime: Runtime[ContextSchema]):
    model = MODELS[runtime.context.model_provider]
    messages = state["messages"]
    if (system_message := runtime.context.system_message):
        messages = [SystemMessage(system_message)] + messages
    response = model.invoke(messages)
    return {"messages": [response]}

builder = StateGraph(MessagesState, context_schema=ContextSchema)
builder.add_node("model", call_model)
builder.add_edge(START, "model")
builder.add_edge("model", END)

graph = builder.compile()

# Usage
input_message = {"role": "user", "content": "hi"}
response = graph.invoke({"messages": [input_message]}, context={"model_provider": "openai", "system_message": "Respond in Italian."})
for message in response["messages"]:
    message.pretty_print()
```

```
================================ Human Message ================================

hi
================================== Ai Message ==================================

Ciao! Come posso aiutarti oggi?
```
