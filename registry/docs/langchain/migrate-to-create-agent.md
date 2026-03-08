## Migrate to `create_agent`

Prior to v1.0, we recommended using [`langgraph.prebuilt.create_react_agent`](https://reference.langchain.com/python/langchain-classic/agents/react/agent/create_react_agent) to build agents. Now, we recommend you use [`langchain.agents.create_agent`](https://reference.langchain.com/python/langchain/agents/factory/create_agent) to build agents.

The table below outlines what functionality has changed from [`create_react_agent`](https://reference.langchain.com/python/langchain-classic/agents/react/agent/create_react_agent) to [`create_agent`](https://reference.langchain.com/python/langchain/agents/factory/create_agent):

| Section                                            | TL;DR - What's changed                                                                                                                                                                     |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Import path](#import-path)                        | Package moved from `langgraph.prebuilt` to `langchain.agents`                                                                                                                              |
| [Prompts](#prompts)                                | Parameter renamed to [`system_prompt`](https://reference.langchain.com/python/langchain/agents/#langchain.agents.create_agent\(system_prompt\)), dynamic prompts use middleware            |
| [Pre-model hook](#pre-model-hook)                  | Replaced by middleware with `before_model` method                                                                                                                                          |
| [Post-model hook](#post-model-hook)                | Replaced by middleware with `after_model` method                                                                                                                                           |
| [Custom state](#custom-state)                      | `TypedDict` only, can be defined via [`state_schema`](https://reference.langchain.com/python/langchain/middleware/#langchain.agents.middleware.AgentMiddleware.state_schema) or middleware |
| [Model](#model)                                    | Dynamic selection via middleware, pre-bound models not supported                                                                                                                           |
| [Tools](#tools)                                    | Tool error handling moved to middleware with `wrap_tool_call`                                                                                                                              |
| [Structured output](#structured-output)            | prompted output removed, use `ToolStrategy`/`ProviderStrategy`                                                                                                                             |
| [Streaming node name](#streaming-node-name-rename) | Node name changed from `"agent"` to `"model"`                                                                                                                                              |
| [Runtime context](#runtime-context)                | Dependency injection via `context` argument instead of `config["configurable"]`                                                                                                            |
| [Namespace](#simplified-package)                   | Streamlined to focus on agent building blocks, legacy code moved to `langchain-classic`                                                                                                    |

### Import path

The import path for the agent prebuilt has changed from `langgraph.prebuilt` to `langchain.agents`.
The name of the function has changed from [`create_react_agent`](https://reference.langchain.com/python/langchain-classic/agents/react/agent/create_react_agent) to [`create_agent`](https://reference.langchain.com/python/langchain/agents/factory/create_agent):

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.prebuilt import create_react_agent # [!code --]
from langchain.agents import create_agent # [!code ++]
```

For more information, see [Agents](/oss/python/langchain/agents).

### Prompts

#### Static prompt rename

The `prompt` parameter has been renamed to [`system_prompt`](https://reference.langchain.com/python/langchain/agents/#langchain.agents.create_agent\(system_prompt\)):

```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent

agent = create_agent(
    model="claude-sonnet-4-6",
    tools=[check_weather],
    system_prompt="You are a helpful assistant"  # [!code highlight]
)
```

```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.prebuilt import create_react_agent

agent = create_react_agent(
    model="claude-sonnet-4-6",
    tools=[check_weather],
    prompt="You are a helpful assistant"  # [!code highlight]
)
```

#### `SystemMessage` to string

If using [`SystemMessage`](https://reference.langchain.com/python/langchain-core/messages/system/SystemMessage) objects in the system prompt, extract the string content:

```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent

agent = create_agent(
    model="claude-sonnet-4-6",
    tools=[check_weather],
    system_prompt="You are a helpful assistant"  # [!code highlight]
)
```

```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.messages import SystemMessage
from langgraph.prebuilt import create_react_agent

agent = create_react_agent(
    model="claude-sonnet-4-6",
    tools=[check_weather],
    prompt=SystemMessage(content="You are a helpful assistant")  # [!code highlight]
)
```

#### Dynamic prompts

Dynamic prompts are a core context engineering pattern— they adapt what you tell the model based on the current conversation state. To do this, use the [`@dynamic_prompt`](https://reference.langchain.com/python/langchain/agents/middleware/types/dynamic_prompt) decorator:

```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from dataclasses import dataclass

from langchain.agents import create_agent
from langchain.agents.middleware import dynamic_prompt, ModelRequest
from langgraph.runtime import Runtime


@dataclass
class Context:  # [!code highlight]
    user_role: str = "user"

@dynamic_prompt  # [!code highlight]
def dynamic_prompt(request: ModelRequest) -> str:  # [!code highlight]
    user_role = request.runtime.context.user_role
    base_prompt = "You are a helpful assistant."

    if user_role == "expert":
        prompt = (
            f"{base_prompt} Provide detailed technical responses."
        )
    elif user_role == "beginner":
        prompt = (
            f"{base_prompt} Explain concepts simply and avoid jargon."
        )
    else:
        prompt = base_prompt

    return prompt  # [!code highlight]

agent = create_agent(
    model="gpt-4.1",
    tools=tools,
    middleware=[dynamic_prompt],  # [!code highlight]
    context_schema=Context
)

# Use with context
agent.invoke(
    {"messages": [{"role": "user", "content": "Explain async programming"}]},
    context=Context(user_role="expert")
)
```

```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from dataclasses import dataclass

from langgraph.prebuilt import create_react_agent, AgentState
from langgraph.runtime import get_runtime

@dataclass
class Context:
    user_role: str

def dynamic_prompt(state: AgentState) -> str:
    runtime = get_runtime(Context)  # [!code highlight]
    user_role = runtime.context.user_role
    base_prompt = "You are a helpful assistant."

    if user_role == "expert":
        return f"{base_prompt} Provide detailed technical responses."
    elif user_role == "beginner":
        return f"{base_prompt} Explain concepts simply and avoid jargon."
    return base_prompt

agent = create_react_agent(
    model="gpt-4.1",
    tools=tools,
    prompt=dynamic_prompt,
    context_schema=Context
)

# Use with context
agent.invoke(
    {"messages": [{"role": "user", "content": "Explain async programming"}]},
    context=Context(user_role="expert")
)
```

### Pre-model hook

Pre-model hooks are now implemented as middleware with the `before_model` method.
This new pattern is more extensible--you can define multiple middlewares to run before the model is called,
reusing common patterns across different agents.

Common use cases include:

- Summarizing conversation history
- Trimming messages
- Input guardrails, like PII redaction

v1 now has summarization middleware as a built in option:

```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent
from langchain.agents.middleware import SummarizationMiddleware

agent = create_agent(
    model="claude-sonnet-4-6",
    tools=tools,
    middleware=[
        SummarizationMiddleware(  # [!code highlight]
            model="claude-sonnet-4-6",  # [!code highlight]
            trigger={"tokens": 1000}  # [!code highlight]
        )  # [!code highlight]
    ]  # [!code highlight]
)
```

```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.prebuilt import create_react_agent, AgentState

def custom_summarization_function(state: AgentState):
    """Custom logic for message summarization."""
    ...

agent = create_react_agent(
    model="claude-sonnet-4-6",
    tools=tools,
    pre_model_hook=custom_summarization_function
)
```

### Post-model hook

Post-model hooks are now implemented as middleware with the `after_model` method.
This new pattern is more extensible--you can define multiple middlewares to run after the model is called,
reusing common patterns across different agents.

Common use cases include:

- [Human in the loop](/oss/python/langchain/human-in-the-loop)
- Output guardrails

v1 has a built in middleware for human in the loop approval for tool calls:

```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent
from langchain.agents.middleware import HumanInTheLoopMiddleware

agent = create_agent(
    model="claude-sonnet-4-6",
    tools=[read_email, send_email],
    middleware=[
        HumanInTheLoopMiddleware(
            interrupt_on={
                "send_email": {
                    "description": "Please review this email before sending",
                    "allowed_decisions": ["approve", "reject"]
                }
            }
        )
    ]
)
```

```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.prebuilt import create_react_agent
from langgraph.prebuilt import AgentState

def custom_human_in_the_loop_hook(state: AgentState):
    """Custom logic for human in the loop approval."""
    ...

agent = create_react_agent(
    model="claude-sonnet-4-6",
    tools=[read_email, send_email],
    post_model_hook=custom_human_in_the_loop_hook
)
```

### Custom state

Custom state extends the default agent state with additional fields. You can define custom state in two ways:

1. **Via [`state_schema`](https://reference.langchain.com/python/langchain/middleware/#langchain.agents.middleware.AgentMiddleware.state_schema) on [`create_agent`](https://reference.langchain.com/python/langchain/agents/factory/create_agent)** - Best for state used in tools
2. **Via middleware** - Best for state managed by specific middleware hooks and tools attached to said middleware

Defining custom state via middleware is preferred over defining it via [`state_schema`](https://reference.langchain.com/python/langchain/middleware/#langchain.agents.middleware.AgentMiddleware.state_schema) on [`create_agent`](https://reference.langchain.com/python/langchain/agents/factory/create_agent) because it allows you to keep state extensions conceptually scoped to the relevant middleware and tools.

`state_schema` is still supported for backwards compatibility on `create_agent`.

#### Defining state via `state_schema`

Use the [`state_schema`](https://reference.langchain.com/python/langchain/middleware/#langchain.agents.middleware.AgentMiddleware.state_schema) parameter when your custom state needs to be accessed by tools:

```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.tools import tool, ToolRuntime
from langchain.agents import create_agent, AgentState  # [!code highlight]


# Define custom state extending AgentState
class CustomState(AgentState):
    user_name: str

@tool  # [!code highlight]
def greet(
    runtime: ToolRuntime[None, CustomState]
) -> str:
    """Use this to greet the user by name."""
    user_name = runtime.state.get("user_name", "Unknown")  # [!code highlight]
    return f"Hello {user_name}!"

agent = create_agent(  # [!code highlight]
    model="claude-sonnet-4-6",
    tools=[greet],
    state_schema=CustomState  # [!code highlight]
)
```

```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing import Annotated
from langgraph.prebuilt import InjectedState, create_react_agent
from langgraph.prebuilt.chat_agent_executor import AgentState

class CustomState(AgentState):
    user_name: str

def greet(
    state: Annotated[CustomState, InjectedState]
) -> str:
    """Use this to greet the user by name."""
    user_name = state["user_name"]
    return f"Hello {user_name}!"

agent = create_react_agent(
    model="claude-sonnet-4-6",
    tools=[greet],
    state_schema=CustomState
)
```

#### Defining state via middleware

Middleware can also define custom state by setting the [`state_schema`](https://reference.langchain.com/python/langchain/middleware/#langchain.agents.middleware.AgentMiddleware.state_schema) attribute.
This helps to keep state extensions conceptually scoped to the relevant middleware and tools.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents.middleware import AgentState, AgentMiddleware
from typing_extensions import NotRequired
from typing import Any

class CustomState(AgentState):
    model_call_count: NotRequired[int]

class CallCounterMiddleware(AgentMiddleware[CustomState]):
    state_schema = CustomState  # [!code highlight]

    def before_model(self, state: CustomState, runtime) -> dict[str, Any] | None:
        count = state.get("model_call_count", 0)
        if count > 10:
            return {"jump_to": "end"}
        return None

    def after_model(self, state: CustomState, runtime) -> dict[str, Any] | None:
        return {"model_call_count": state.get("model_call_count", 0) + 1}

agent = create_agent(
    model="claude-sonnet-4-6",
    tools=[...],
    middleware=[CallCounterMiddleware()]  # [!code highlight]
)
```

See the [middleware documentation](/oss/python/langchain/middleware#custom-state-schema) for more details on defining custom state via middleware.

#### State type restrictions

[`create_agent`](https://reference.langchain.com/python/langchain/agents/factory/create_agent) only supports `TypedDict` for state schemas. Pydantic models and dataclasses are no longer supported.

```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import AgentState, create_agent

# AgentState is a TypedDict
class CustomAgentState(AgentState):  # [!code highlight]
    user_id: str

agent = create_agent(
    model="claude-sonnet-4-6",
    tools=tools,
    state_schema=CustomAgentState  # [!code highlight]
)
```

```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing_extensions import Annotated

from pydantic import BaseModel
from langgraph.graph import StateGraph
from langgraph.graph.messages import add_messages
from langchain.messages import AnyMessage


class AgentState(BaseModel):  # [!code highlight]
    messages: Annotated[list[AnyMessage], add_messages]
    user_id: str

agent = create_react_agent(
    model="claude-sonnet-4-6",
    tools=tools,
    state_schema=AgentState
)
```

Simply inherit from `langchain.agents.AgentState` instead of `BaseModel` or decorating with `dataclass`.
If you need to perform validation, handle it in middleware hooks instead.

### Model

Dynamic model selection allows you to choose different models based on runtime context (e.g., task complexity, cost constraints, or user preferences). [`create_react_agent`](https://reference.langchain.com/python/langchain-classic/agents/react/agent/create_react_agent) released in v0.6 of [`langgraph-prebuilt`](https://pypi.org/project/langgraph-prebuilt) supported dynamic model and tool selection via a callable passed to the `model` parameter.

This functionality has been ported to the middleware interface in v1.

#### Dynamic model selection

```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent
from langchain.agents.middleware import (
    AgentMiddleware, ModelRequest
)
from langchain.agents.middleware.types import ModelResponse
from langchain_openai import ChatOpenAI
from typing import Callable

basic_model = ChatOpenAI(model="gpt-5-nano")
advanced_model = ChatOpenAI(model="gpt-5")

class DynamicModelMiddleware(AgentMiddleware):

    def wrap_model_call(self, request: ModelRequest, handler: Callable[[ModelRequest], ModelResponse]) -> ModelResponse:
        if len(request.state.messages) > self.messages_threshold:
            model = advanced_model
        else:
            model = basic_model
        return handler(request.override(model=model))

    def __init__(self, messages_threshold: int) -> None:
        self.messages_threshold = messages_threshold

agent = create_agent(
    model=basic_model,
    tools=tools,
    middleware=[DynamicModelMiddleware(messages_threshold=10)]
)
```

```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.prebuilt import create_react_agent, AgentState
from langchain_openai import ChatOpenAI

basic_model = ChatOpenAI(model="gpt-5-nano")
advanced_model = ChatOpenAI(model="gpt-5")

def select_model(state: AgentState) -> BaseChatModel:
    # use a more advanced model for longer conversations
    if len(state.messages) > 10:
        return advanced_model
    return basic_model

agent = create_react_agent(
    model=select_model,
    tools=tools,
)
```

#### Pre-bound models

To better support structured output, [`create_agent`](https://reference.langchain.com/python/langchain/agents/factory/create_agent) no longer accepts pre-bound models with tools or configuration:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# No longer supported
model_with_tools = ChatOpenAI().bind_tools([some_tool])
agent = create_agent(model_with_tools, tools=[])

# Use instead
agent = create_agent("gpt-4.1-mini", tools=[some_tool])
```

Dynamic model functions can return pre-bound models if structured output is *not* used.

### Tools

The [`tools`](https://reference.langchain.com/python/langchain/agents/factory/create_agent) argument to [`create_agent`](https://reference.langchain.com/python/langchain/agents/factory/create_agent) accepts a list of:

- LangChain [`BaseTool`](https://reference.langchain.com/python/langchain-core/tools/base/BaseTool) instances (functions decorated with [`@tool`](https://reference.langchain.com/python/langchain-core/tools/convert/tool))
- Callable objects (functions) with proper type hints and a docstring
- `dict` that represents a built-in provider tools

The argument will no longer accept [`ToolNode`](https://reference.langchain.com/python/langgraph/agents/#langgraph.prebuilt.tool_node.ToolNode) instances.

```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent

agent = create_agent(
    model="claude-sonnet-4-6",
    tools=[check_weather, search_web]
)
```

```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.prebuilt import create_react_agent, ToolNode


agent = create_react_agent(
    model="claude-sonnet-4-6",
    tools=ToolNode([check_weather, search_web]) # [!code highlight]
)
```

#### Handling tool errors

You can now configure the handling of tool errors with middleware implementing the `wrap_tool_call` method.

```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent
from langchain.agents.middleware import wrap_tool_call
from langchain.messages import ToolMessage


@wrap_tool_call
def handle_tool_errors(request, handler):
    """Handle tool execution errors with custom messages."""
    try:
        return handler(request)
    except Exception as e:
        # Only handle errors that occur during tool execution due to invalid inputs
        # that pass schema validation but fail at runtime (e.g., invalid SQL syntax).
        # Do NOT handle:
        # - Network failures (use tool retry middleware instead)
        # - Incorrect tool implementation errors (should bubble up)
        # - Schema mismatch errors (already auto-handled by the framework)
        #
        # Return a custom error message to the model
        return ToolMessage(
            content=f"Tool error: Please check your input and try again. ({str(e)})",
            tool_call_id=request.tool_call["id"]
        )

agent = create_agent(
    model="claude-sonnet-4-6",
    tools=[check_weather, search_web],
    middleware=[handle_tool_errors]
)
```

```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.prebuilt import create_react_agent, ToolNode
from langchain.messages import ToolMessage


def handle_tool_error(error: Exception) -> str:
    """Custom error handler function."""
    return f"Tool error: Please check your input and try again. ({str(error)})"

agent = create_react_agent(
    model="claude-sonnet-4-6",
    tools=ToolNode(
        [check_weather, search_web],
        handle_tool_errors=handle_tool_error  # [!code highlight]
    )
)
```

### Structured output

#### Node changes

Structured output used to be generated in a separate node from the main agent. This is no longer the case.
We generate structured output in the main loop, reducing cost and latency.

#### Tool and provider strategies

In v1, there are two new structured output strategies:

- `ToolStrategy` uses artificial tool calling to generate structured output
- `ProviderStrategy` uses provider-native structured output generation

  ```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from langchain.agents import create_agent
  from langchain.agents.structured_output import ToolStrategy, ProviderStrategy
  from pydantic import BaseModel


  class OutputSchema(BaseModel):
      summary: str
      sentiment: str

  # Using ToolStrategy
  agent = create_agent(
      model="gpt-4.1-mini",
      tools=tools,
      # explicitly using tool strategy
      response_format=ToolStrategy(OutputSchema)  # [!code highlight]
  )
  ```

  ```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from langgraph.prebuilt import create_react_agent
  from pydantic import BaseModel

  class OutputSchema(BaseModel):
      summary: str
      sentiment: str

  agent = create_react_agent(
      model="gpt-4.1-mini",
      tools=tools,
      # using tool strategy by default with no option for provider strategy
      response_format=OutputSchema  # [!code highlight]
  )

  # OR

  agent = create_react_agent(
      model="gpt-4.1-mini",
      tools=tools,
      # using a custom prompt to instruct the model to generate the output schema
      response_format=("please generate ...", OutputSchema)  # [!code highlight]
  )
  ```

#### Prompted output removed

**Prompted output** is no longer supported via the `response_format` argument. Compared to strategies
like artificial tool calling and provider native structured output, prompted output has not proven to be particularly reliable.

### Streaming node name rename

When streaming events from agents, the node name has changed from `"agent"` to `"model"` to better reflect the node's purpose.

### Runtime context

When you invoke an agent, it's often the case that you want to pass two types of data:

- Dynamic state that changes throughout the conversation (e.g., message history)
- Static context that doesn't change during the conversation (e.g., user metadata)

In v1, static context is supported by setting the `context` parameter to `invoke` and `stream`.

```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from dataclasses import dataclass

from langchain.agents import create_agent


@dataclass
class Context:
    user_id: str
    session_id: str

agent = create_agent(
    model=model,
    tools=tools,
    context_schema=Context  # [!code highlight]
)

result = agent.invoke(
    {"messages": [{"role": "user", "content": "Hello"}]},
    context=Context(user_id="123", session_id="abc")  # [!code highlight]
)
```

```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.prebuilt import create_react_agent


agent = create_react_agent(model, tools)

# Pass context via configurable
result = agent.invoke(
    {"messages": [{"role": "user", "content": "Hello"}]},
    config={  # [!code highlight]
        "configurable": {  # [!code highlight]
            "user_id": "123",  # [!code highlight]
            "session_id": "abc"  # [!code highlight]
        }  # [!code highlight]
    }  # [!code highlight]
)
```

The old `config["configurable"]` pattern still works for backward compatibility, but using the new `context` parameter is recommended for new applications or applications migrating to v1.

***
