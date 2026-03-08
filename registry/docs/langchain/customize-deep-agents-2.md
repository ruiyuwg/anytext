# Customize Deep Agents

Source: https://docs.langchain.com/oss/python/deepagents/customization

Learn how to customize deep agents with system prompts, tools, subagents, and more

`create_deep_agent` has the following core configuration options:

- [Model](#model)
- [Tools](#tools)
- [System Prompt](#system-prompt)
- [Middleware](#middleware)
- [Subagents](#subagents)
- [Backends (virtual filesystems)](#backends)
- [Human-in-the-loop](#human-in-the-loop)
- [Skills](#skills)
- [Memory](#memory)

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
create_deep_agent(
    name: str | None = None,
    model: str | BaseChatModel | None = None,
    tools: Sequence[BaseTool | Callable | dict[str, Any]] | None = None,
    *,
    system_prompt: str | SystemMessage | None = None
) -> CompiledStateGraph
```

For more information, see [`create_deep_agent`](https://reference.langchain.com/python/deepagents/graph/).

### Connection resilience

LangChain chat models automatically retry failed API requests with exponential backoff. By default, models retry up to **6 times** for network errors, rate limits (429), and server errors (5xx). Client errors like 401 (unauthorized) or 404 are not retried.

You can adjust the `max_retries` parameter when creating a model to tune this behavior for your environment:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.chat_models import init_chat_model
from deepagents import create_deep_agent

agent = create_deep_agent(
    model=init_chat_model(
        model="claude-sonnet-4-6",
        max_retries=10,  # Increase for unreliable networks (default: 6)
        timeout=120,     # Increase timeout for slow connections
    ),
)
```

For long-running agent tasks on unreliable networks, consider increasing `max_retries` to 10–15 and pairing it with a [checkpointer](/oss/python/langgraph/persistence) so that progress is preserved across failures.

## Model

By default, `deepagents` uses [`claude-sonnet-4-6`](https://platform.claude.com/docs/en/about-claude/models/overview). You can customize the model by passing any supported model identifier string or [LangChain model object](/oss/python/integrations/chat).

Use the `provider:model` format (for example `openai:gpt-5`) to quickly switch between models.

````
👉 Read the [OpenAI chat model integration docs](/oss/python/integrations/chat/openai/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[openai]"
```


  ```python default parameters theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from deepagents import create_deep_agent

  os.environ["OPENAI_API_KEY"] = "sk-..."

  agent = create_deep_agent(model="openai:gpt-5.2")
  # this calls init_chat_model for the specified model with default parameters
  # to use specific modele parameters, use init_chat_model directly
  ```

  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model
  from deepagents import create_deep_agent

  os.environ["OPENAI_API_KEY"] = "sk-..."

  model = init_chat_model(model="openai:gpt-5.2")
  agent = create_deep_agent(model=model)
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_openai import ChatOpenAI
  from deepagents import create_deep_agent

  os.environ["OPENAI_API_KEY"] = "sk-..."

  model = ChatOpenAI(model="gpt-5.2")
  agent = create_deep_agent(model=model)
  ```




👉 Read the [Anthropic chat model integration docs](/oss/python/integrations/chat/anthropic/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[anthropic]"
```


  ```python default parameters theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from deepagents import create_deep_agent

  os.environ["ANTHROPIC_API_KEY"] = "sk-..."

  agent = create_deep_agent(model="claude-sonnet-4-6")
  # this calls init_chat_model for the specified model with default parameters
  # to use specific modele parameters, use init_chat_model directly
  ```

  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model
  from deepagents import create_deep_agent

  os.environ["ANTHROPIC_API_KEY"] = "sk-..."

  model = init_chat_model(model="claude-sonnet-4-6")
  agent = create_deep_agent(model=model)
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_anthropic import ChatAnthropic
  from deepagents import create_deep_agent

  os.environ["ANTHROPIC_API_KEY"] = "sk-..."

  model = ChatAnthropic(model="claude-sonnet-4-6")
  agent = create_deep_agent(model=model)
  ```




👉 Read the [Azure chat model integration docs](/oss/python/integrations/chat/azure_chat_openai/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[openai]"
```


  ```python default parameters theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from deepagents import create_deep_agent

  os.environ["AZURE_OPENAI_API_KEY"] = "..."
  os.environ["AZURE_OPENAI_ENDPOINT"] = "..."
  os.environ["OPENAI_API_VERSION"] = "2025-03-01-preview"

  agent = create_deep_agent(model="azure_openai:gpt-5.2")
  # this calls init_chat_model for the specified model with default parameters
  # to use specific modele parameters, use init_chat_model directly
  ```

  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model
  from deepagents import create_deep_agent

  os.environ["AZURE_OPENAI_API_KEY"] = "..."
  os.environ["AZURE_OPENAI_ENDPOINT"] = "..."
  os.environ["OPENAI_API_VERSION"] = "2025-03-01-preview"

  model = init_chat_model(
      model="azure_openai:gpt-5.2",
      azure_deployment=os.environ["AZURE_OPENAI_DEPLOYMENT_NAME"],
  )
  agent = create_deep_agent(model=model)
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_openai import AzureChatOpenAI
  from deepagents import create_deep_agent

  os.environ["AZURE_OPENAI_API_KEY"] = "..."
  os.environ["AZURE_OPENAI_ENDPOINT"] = "..."
  os.environ["OPENAI_API_VERSION"] = "2025-03-01-preview"

  model = AzureChatOpenAI(
      model="gpt-5.2",
      azure_deployment=os.environ["AZURE_OPENAI_DEPLOYMENT_NAME"],
  )
  agent = create_deep_agent(model=model)
  ```




👉 Read the [Google GenAI chat model integration docs](/oss/python/integrations/chat/google_generative_ai/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[google-genai]"
```


  ```python default parameters theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from deepagents import create_deep_agent

  os.environ["GOOGLE_API_KEY"] = "..."

  agent = create_deep_agent(model="google_genai:gemini-2.5-flash-lite")
  # this calls init_chat_model for the specified model with default parameters
  # to use specific modele parameters, use init_chat_model directly
  ```

  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model
  from deepagents import create_deep_agent

  os.environ["GOOGLE_API_KEY"] = "..."

  model = init_chat_model(model="google_genai:gemini-2.5-flash-lite")
  agent = create_deep_agent(model=model)
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_google_genai import ChatGoogleGenerativeAI
  from deepagents import create_deep_agent

  os.environ["GOOGLE_API_KEY"] = "..."

  model = ChatGoogleGenerativeAI(model="gemini-2.5-flash-lite")
  agent = create_deep_agent(model=model)
  ```




👉 Read the [AWS Bedrock chat model integration docs](/oss/python/integrations/chat/bedrock/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[aws]"
```


  ```python default parameters theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from deepagents import create_deep_agent

  # Follow the steps here to configure your credentials:
  # https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html

  agent = create_deep_agent(
      model="anthropic.claude-3-5-sonnet-20240620-v1:0",
      model_provider="bedrock_converse",
  )
  # this calls init_chat_model for the specified model with default parameters
  # to use specific modele parameters, use init_chat_model directly
  ```

  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from langchain.chat_models import init_chat_model
  from deepagents import create_deep_agent

  # Follow the steps here to configure your credentials:
  # https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html

  model = init_chat_model(
      model="anthropic.claude-3-5-sonnet-20240620-v1:0",
      model_provider="bedrock_converse",
  )
  agent = create_deep_agent(model=model)
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from langchain_aws import ChatBedrock
  from deepagents import create_deep_agent

  # Follow the steps here to configure your credentials:
  # https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html

  model = ChatBedrock(model="anthropic.claude-3-5-sonnet-20240620-v1:0")
  agent = create_deep_agent(model=model)
  ```




👉 Read the [HuggingFace chat model integration docs](/oss/python/integrations/chat/huggingface/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[huggingface]"
```


  ```python default parameters theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from deepagents import create_deep_agent

  os.environ["HUGGINGFACEHUB_API_TOKEN"] = "hf_..."

  agent = create_deep_agent(
      model="microsoft/Phi-3-mini-4k-instruct",
      model_provider="huggingface",
      temperature=0.7,
      max_tokens=1024,
  )
  # this calls init_chat_model for the specified model with default parameters
  # to use specific modele parameters, use init_chat_model directly
  ```

  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model
  from deepagents import create_deep_agent

  os.environ["HUGGINGFACEHUB_API_TOKEN"] = "hf_..."

  model = init_chat_model(
      model="microsoft/Phi-3-mini-4k-instruct",
      model_provider="huggingface",
      temperature=0.7,
      max_tokens=1024,
  )
  agent = create_deep_agent(model=model)
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint
  from deepagents import create_deep_agent

  os.environ["HUGGINGFACEHUB_API_TOKEN"] = "hf_..."

  llm = HuggingFaceEndpoint(
      repo_id="microsoft/Phi-3-mini-4k-instruct",
      temperature=0.7,
      max_length=1024,
  )
  model = ChatHuggingFace(llm=llm)
  agent = create_deep_agent(model=model)
  ```
````

## Tools

In addition to [built-in tools](/oss/python/deepagents/overview#core-capabilities) for planning, file management, and subagent spawning, you can provide custom tools:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import os
from typing import Literal
from tavily import TavilyClient
from deepagents import create_deep_agent

tavily_client = TavilyClient(api_key=os.environ["TAVILY_API_KEY"])

def internet_search(
    query: str,
    max_results: int = 5,
    topic: Literal["general", "news", "finance"] = "general",
    include_raw_content: bool = False,
):
    """Run a web search"""
    return tavily_client.search(
        query,
        max_results=max_results,
        include_raw_content=include_raw_content,
        topic=topic,
    )

agent = create_deep_agent(
    tools=[internet_search]
)
```

## System prompt

Deep agents come with a built-in system prompt. The default system prompt contains detailed instructions for using the built-in planning tool, file system tools, and subagents.
When middleware add special tools, like the filesystem tools, it appends them to the system prompt.

Each deep agent should also include a custom system prompt specific to its specific use case:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from deepagents import create_deep_agent

research_instructions = """\
You are an expert researcher. Your job is to conduct \
thorough research, and then write a polished report. \
"""

agent = create_deep_agent(
    system_prompt=research_instructions,
)
```

## Middleware

By default, deep agents have access to the following [middleware](/oss/python/langchain/middleware/overview):

- `TodoListMiddleware`: Tracks and manages todo lists for organizing agent tasks and work
- `FilesystemMiddleware`: Handles file system operations such as reading, writing, and navigating directories
- `SubAgentMiddleware`: Spawns and coordinates subagents for delegating tasks to specialized agents
- `SummarizationMiddleware`: Condenses message history to stay within context limits when conversations grow long
- `AnthropicPromptCachingMiddleware`: Automatic reduction of redundant token processing when using Anthropic models
- `PatchToolCallsMiddleware`: Automatic message history fixes when tool calls are interrupted or cancelled before receiving results

If you are using memory, skills, or human-in-the-loop, the following middleware is also included:

- `MemoryMiddleware`: Persists and retrieves conversation context across sessions when the `memory` argument is provided
- `SkillsMiddleware`: Enables custom skills when the `skills` argument is provided
- `HumanInTheLoopMiddleware`: Pauses for human approval or input at specified points when the `interrupt_on` argument is provided

You can provide additional middleware to extend functionality, add tools, or implement custom hooks:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.tools import tool
from langchain.agents.middleware import wrap_tool_call
from deepagents import create_deep_agent


@tool
def get_weather(city: str) -> str:
    """Get the weather in a city."""
    return f"The weather in {city} is sunny."


call_count = [0]  # Use list to allow modification in nested function

@wrap_tool_call
def log_tool_calls(request, handler):
    """Intercept and log every tool call - demonstrates cross-cutting concern."""
    call_count[0] += 1
    tool_name = request.name if hasattr(request, 'name') else str(request)

    print(f"[Middleware] Tool call #{call_count[0]}: {tool_name}")
    print(f"[Middleware] Arguments: {request.args if hasattr(request, 'args') else 'N/A'}")

    # Execute the tool call
    result = handler(request)

    # Log the result
    print(f"[Middleware] Tool call #{call_count[0]} completed")

    return result


agent = create_deep_agent(
    tools=[get_weather],
    middleware=[log_tool_calls],
)
```

**Do not mutate attributes after initialization**

If you need to track values across hook invocations (for example, counters or accumulated data), use graph state.
Graph state is scoped to a thread by design, so updates are safe under concurrency.

**Do this:**

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
class CustomMiddleware(AgentMiddleware):
    def __init__(self):
        pass

    def before_agent(self, state, runtime):
        return {"x": state.get("x", 0) + 1}  # Update graph state instead
```

Do **not** do this:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
class CustomMiddleware(AgentMiddleware):
    def __init__(self):
        self.x = 1

    def before_agent(self, state, runtime):
        self.x += 1  # Mutation causes race conditions
```

Mutation in place—such as modifying `self.x` in `before_agent` or other hooks—can lead to subtle bugs and race conditions, because many operations run concurrently (subagents, parallel tools, and parallel invocations on different threads).

For full details on extending state with custom properties, see [Custom middleware - Custom state schema](/oss/python/langchain/middleware/custom#custom-state-schema).
If you must use mutation in custom middleware, consider what happens when subagents, parallel tools, or concurrent agent invocations run at the same time.

## Subagents

To isolate detailed work and avoid context bloat, use subagents:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import os
from typing import Literal
from tavily import TavilyClient
from deepagents import create_deep_agent

tavily_client = TavilyClient(api_key=os.environ["TAVILY_API_KEY"])

def internet_search(
    query: str,
    max_results: int = 5,
    topic: Literal["general", "news", "finance"] = "general",
    include_raw_content: bool = False,
):
    """Run a web search"""
    return tavily_client.search(
        query,
        max_results=max_results,
        include_raw_content=include_raw_content,
        topic=topic,
    )

research_subagent = {
    "name": "research-agent",
    "description": "Used to research more in depth questions",
    "system_prompt": "You are a great researcher",
    "tools": [internet_search],
    "model": "openai:gpt-5.2",  # Optional override, defaults to main agent model
}
subagents = [research_subagent]

agent = create_deep_agent(
    model="claude-sonnet-4-6",
    subagents=subagents
)
```

For more information, see [Subagents](/oss/python/deepagents/subagents).

## Backends

Deep agent tools can make use of virtual file systems to store, access, and edit files. By default, deep agents use a `StateBackend`.

If you are using [skills](#skills) or [memory](#memory), you must add the expected skill or memory files to the backend before creating the agent.

````
An ephemeral filesystem backend stored in `langgraph` state.

This filesystem only persists *for a single thread*.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# By default we provide a StateBackend
agent = create_deep_agent()

# Under the hood, it looks like
from deepagents.backends import StateBackend

agent = create_deep_agent(
    backend=(lambda rt: StateBackend(rt))   # Note that the tools access State through the runtime.state
)
```



The local machine's filesystem.


  This backend grants agents direct filesystem read/write access.
  Use with caution and only in appropriate environments.
  For more information, see [`FilesystemBackend`](/oss/python/deepagents/backends#filesystembackend-local-disk).


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from deepagents.backends import FilesystemBackend

agent = create_deep_agent(
    backend=FilesystemBackend(root_dir=".", virtual_mode=True)
)
```



A filesystem with shell execution directly on the host. Provides filesystem tools plus the `execute` tool for running commands.


  This backend grants agents direct filesystem read/write access **and** unrestricted shell execution on your host.
  Use with extreme caution and only in appropriate environments.
  For more information, see [`LocalShellBackend`](/oss/python/deepagents/backends#localshellbackend-local-shell).


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from deepagents.backends import LocalShellBackend

agent = create_deep_agent(
    backend=LocalShellBackend(root_dir=".", env={"PATH": "/usr/bin:/bin"})
)
```



A filesystem that provides long-term storage that is *persisted across threads*.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.store.memory import InMemoryStore
from deepagents.backends import StoreBackend

agent = create_deep_agent(
    backend=(lambda rt: StoreBackend(rt)),
    store=InMemoryStore()  # Good for local dev; omit for LangSmith Deployment
)
```


  When deploying to [LangSmith Deployment](/langsmith/deployments), omit the `store` parameter. The platform automatically provisions a store for your agent.




A flexible backend where you can specify different routes in the filesystem to point towards different backends.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from deepagents import create_deep_agent
from deepagents.backends import CompositeBackend, StateBackend, StoreBackend
from langgraph.store.memory import InMemoryStore

composite_backend = lambda rt: CompositeBackend(
    default=StateBackend(rt),
    routes={
        "/memories/": StoreBackend(rt),
    }
)

agent = create_deep_agent(
    backend=composite_backend,
    store=InMemoryStore()  # Store passed to create_deep_agent, not backend
)
```
````

For more information, see [Backends](/oss/python/deepagents/backends).

### Sandboxes

Sandboxes are specialized [backends](/oss/python/deepagents/backends) that run agent code in an isolated environment with their own filesystem and an `execute` tool for shell commands.
Use a sandbox backend when you want your deep agent to write files, install dependencies, and run commands without changing anything on your local machine.

You configure sandboxes by passing a sandbox backend to `backend` when creating your deep agent:

````
  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install langchain-modal
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-modal
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import modal
from langchain_anthropic import ChatAnthropic

from deepagents import create_deep_agent
from langchain_modal import ModalSandbox

app = modal.App.lookup("your-app")
modal_sandbox = modal.Sandbox.create(app=app)
backend = ModalSandbox(sandbox=modal_sandbox)

agent = create_deep_agent(
    model=ChatAnthropic(model="claude-sonnet-4-20250514"),
    system_prompt="You are a Python coding assistant with sandbox access.",
    backend=backend,
)
try:
    result = agent.invoke(
        {
            "messages": [
                {
                    "role": "user",
                    "content": "Create a small Python package and run pytest",
                }
            ]
        }
    )
finally:
    modal_sandbox.terminate()
```




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install langchain-runloop
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-runloop
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import os

from runloop_api_client import RunloopSDK
from langchain_anthropic import ChatAnthropic

from deepagents import create_deep_agent
from langchain_runloop import RunloopSandbox

client = RunloopSDK(bearer_token=os.environ["RUNLOOP_API_KEY"])

devbox = client.devbox.create()
backend = RunloopSandbox(devbox=devbox)

agent = create_deep_agent(
    model=ChatAnthropic(model="claude-sonnet-4-20250514"),
    system_prompt="You are a Python coding assistant with sandbox access.",
    backend=backend,
)

try:
    result = agent.invoke(
        {
            "messages": [
                {
                    "role": "user",
                    "content": "Create a small Python package and run pytest",
                }
            ]
        }
    )
finally:
    devbox.shutdown()
```




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install langchain-daytona
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-daytona
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from daytona import Daytona
from langchain_anthropic import ChatAnthropic

from deepagents import create_deep_agent
from langchain_daytona import DaytonaSandbox

sandbox = Daytona().create()
backend = DaytonaSandbox(sandbox=sandbox)

agent = create_deep_agent(
    model=ChatAnthropic(model="claude-sonnet-4-20250514"),
    system_prompt="You are a Python coding assistant with sandbox access.",
    backend=backend,
)

try:
    result = agent.invoke(
        {
            "messages": [
                {
                    "role": "user",
                    "content": "Create a small Python package and run pytest",
                }
            ]
        }
    )
finally:
    sandbox.stop()
```
````

For more information, see [Sandboxes](/oss/python/deepagents/sandboxes).

## Human-in-the-loop

Some tool operations may be sensitive and require human approval before execution.
You can configure the approval for each tool:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.tools import tool
from deepagents import create_deep_agent
from langgraph.checkpoint.memory import MemorySaver

@tool
def delete_file(path: str) -> str:
    """Delete a file from the filesystem."""
    return f"Deleted {path}"

@tool
def read_file(path: str) -> str:
    """Read a file from the filesystem."""
    return f"Contents of {path}"

@tool
def send_email(to: str, subject: str, body: str) -> str:
    """Send an email."""
    return f"Sent email to {to}"

# Checkpointer is REQUIRED for human-in-the-loop
checkpointer = MemorySaver()

agent = create_deep_agent(
    model="claude-sonnet-4-6",
    tools=[delete_file, read_file, send_email],
    interrupt_on={
        "delete_file": True,  # Default: approve, edit, reject
        "read_file": False,   # No interrupts needed
        "send_email": {"allowed_decisions": ["approve", "reject"]},  # No editing
    },
    checkpointer=checkpointer  # Required!
)
```

You can configure interrupt for agents and subagents on tool call as well as from within tool calls.
For more information, see [Human-in-the-loop](/oss/python/deepagents/human-in-the-loop).

## Skills

You can use [skills](/oss/python/deepagents/overview) to provide your deep agent with new capabilities and expertise.
While [tools](/oss/python/deepagents/customization#tools) tend to cover lower level functionality like native file system actions or planning, skills can contain detailed instructions on how to complete tasks, reference info, and other assets, such as templates.
These files are only loaded by the agent when the agent has determined that the skill is useful for the current prompt.
This progressive disclosure reduces the amount of tokens and context the agent has to consider upon startup.

For example skills, see [Deep Agent example skills](https://github.com/langchain-ai/deepagentsjs/tree/main/examples/skills).

To add skills to your deep agent, pass them as an argument to `create_deep_agent`:

````
```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from urllib.request import urlopen
from deepagents import create_deep_agent
from deepagents.backends.utils import create_file_data
from langgraph.checkpoint.memory import MemorySaver

checkpointer = MemorySaver()

skill_url = "https://raw.githubusercontent.com/langchain-ai/deepagents/refs/heads/main/libs/cli/examples/skills/langgraph-docs/SKILL.md"
with urlopen(skill_url) as response:
    skill_content = response.read().decode('utf-8')

skills_files = {
    "/skills/langgraph-docs/SKILL.md": create_file_data(skill_content)
}

agent = create_deep_agent(
    skills=["/skills/"],
    checkpointer=checkpointer,
)

result = agent.invoke(
    {
        "messages": [
            {
                "role": "user",
                "content": "What is langgraph?",
            }
        ],
        # Seed the default StateBackend's in-state filesystem (virtual paths must start with "/").
        "files": skills_files
    },
    config={"configurable": {"thread_id": "12345"}},
)
```



```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from urllib.request import urlopen
from deepagents import create_deep_agent
from deepagents.backends import StoreBackend
from deepagents.backends.utils import create_file_data
from langgraph.store.memory import InMemoryStore


store = InMemoryStore()

skill_url = "https://raw.githubusercontent.com/langchain-ai/deepagents/refs/heads/main/libs/cli/examples/skills/langgraph-docs/SKILL.md"
with urlopen(skill_url) as response:
    skill_content = response.read().decode('utf-8')

store.put(
    namespace=("filesystem",),
    key="/skills/langgraph-docs/SKILL.md",
    value=create_file_data(skill_content)
)

agent = create_deep_agent(
    backend=(lambda rt: StoreBackend(rt)),
    store=store,
    skills=["/skills/"]
)

result = agent.invoke(
    {
        "messages": [
            {
                "role": "user",
                "content": "What is langgraph?",
            }
        ]
    },
    config={"configurable": {"thread_id": "12345"}},
)
```



```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from deepagents import create_deep_agent
from langgraph.checkpoint.memory import MemorySaver
from deepagents.backends.filesystem import FilesystemBackend

# Checkpointer is REQUIRED for human-in-the-loop
checkpointer = MemorySaver()

agent = create_deep_agent(
    backend=FilesystemBackend(root_dir="/Users/user/{project}"),
    skills=["/Users/user/{project}/skills/"],
    interrupt_on={
        "write_file": True,  # Default: approve, edit, reject
        "read_file": False,  # No interrupts needed
        "edit_file": True    # Default: approve, edit, reject
    },
    checkpointer=checkpointer,  # Required!
)

result = agent.invoke(
    {
        "messages": [
            {
                "role": "user",
                "content": "What is langgraph?",
            }
        ]
    },
    config={"configurable": {"thread_id": "12345"}},
)
```
````

## Memory

Use [`AGENTS.md` files](https://agents.md/) to provide extra context to your deep agent.

You can pass one or more file paths to the `memory` parameter when creating your deep agent:

````
```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from urllib.request import urlopen

from deepagents import create_deep_agent
from deepagents.backends.utils import create_file_data
from langgraph.checkpoint.memory import MemorySaver

with urlopen("https://raw.githubusercontent.com/langchain-ai/deepagents/refs/heads/main/examples/text-to-sql-agent/AGENTS.md") as response:
    agents_md = response.read().decode("utf-8")
checkpointer = MemorySaver()

agent = create_deep_agent(
    memory=[
        "/AGENTS.md"
    ],
    checkpointer=checkpointer,
)

result = agent.invoke(
    {
        "messages": [
            {
                "role": "user",
                "content": "Please tell me what's in your memory files.",
            }
        ],
        # Seed the default StateBackend's in-state filesystem (virtual paths must start with "/").
        "files": {"/AGENTS.md": create_file_data(agents_md)},
    },
    config={"configurable": {"thread_id": "123456"}},
)
```



```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from urllib.request import urlopen

from deepagents import create_deep_agent
from deepagents.backends import StoreBackend
from deepagents.backends.utils import create_file_data
from langgraph.store.memory import InMemoryStore

with urlopen("https://raw.githubusercontent.com/langchain-ai/deepagents/refs/heads/main/examples/text-to-sql-agent/AGENTS.md") as response:
    agents_md = response.read().decode("utf-8")

# Create the store and add the file to it
store = InMemoryStore()
file_data = create_file_data(agents_md)
store.put(
    namespace=("filesystem",),
    key="/AGENTS.md",
    value=file_data
)

agent = create_deep_agent(
    backend=(lambda rt: StoreBackend(rt)),
    store=store,
    memory=[
        "/AGENTS.md"
    ]
)

result = agent.invoke(
    {
        "messages": [
            {
                "role": "user",
                "content": "Please tell me what's in your memory files.",
            }
        ],
        "files": {"/AGENTS.md": create_file_data(agents_md)},
    },
    config={"configurable": {"thread_id": "12345"}},
)
```



```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from deepagents import create_deep_agent
from langgraph.checkpoint.memory import MemorySaver
from deepagents.backends import FilesystemBackend

# Checkpointer is REQUIRED for human-in-the-loop
checkpointer = MemorySaver()

agent = create_deep_agent(
    backend=FilesystemBackend(root_dir="/Users/user/{project}"),
    memory=[
        "./AGENTS.md"
    ],
    interrupt_on={
        "write_file": True,  # Default: approve, edit, reject
        "read_file": False,  # No interrupts needed
        "edit_file": True    # Default: approve, edit, reject
    },
    checkpointer=checkpointer,  # Required!
)
```
````

## Structured ouput

Deep agents support [structured ouput](/oss/python/langchain/structured-output).
You can set a desired structured output schema by passing it as the `response_format` argument to the call to `create_deep_agent()`.
When the model generates the structured data, it’s captured, validated, and returned in the 'structured\_response' key of the deep agent’s state.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import os
from typing import Literal
from pydantic import BaseModel, Field
from tavily import TavilyClient
from deepagents import create_deep_agent

tavily_client = TavilyClient(api_key=os.environ["TAVILY_API_KEY"])

def internet_search(
    query: str,
    max_results: int = 5,
    topic: Literal["general", "news", "finance"] = "general",
    include_raw_content: bool = False,
):
    """Run a web search"""
    return tavily_client.search(
        query,
        max_results=max_results,
        include_raw_content=include_raw_content,
        topic=topic,
    )

class WeatherReport(BaseModel):
    """A structured weather report with current conditions and forecast."""
    location: str = Field(description="The location for this weather report")
    temperature: float = Field(description="Current temperature in Celsius")
    condition: str = Field(description="Current weather condition (e.g., sunny, cloudy, rainy)")
    humidity: int = Field(description="Humidity percentage")
    wind_speed: float = Field(description="Wind speed in km/h")
    forecast: str = Field(description="Brief forecast for the next 24 hours")


agent = create_deep_agent(
    response_format=WeatherReport,
    tools=[internet_search]
)

result = agent.invoke({
    "messages": [{
        "role": "user",
        "content": "What's the weather like in San Francisco?"
    }]
})

print(result["structured_response"])
# location='San Francisco, California' temperature=18.3 condition='Sunny' humidity=48 wind_speed=7.6 forecast='Pleasant sunny conditions expected to continue with temperatures around 64°F (18°C) during the day, dropping to around 52°F (11°C) at night. Clear skies with minimal precipitation expected.'
```

For more information and examples, see [response format](/oss/python/langchain/structured-output#response-format).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/deepagents/customization.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
