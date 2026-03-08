# Customize Deep Agents

Source: https://docs.langchain.com/oss/javascript/deepagents/customization

Learn how to customize deep agents with system prompts, tools, subagents, and more

`createDeepAgent` has the following configuration options:

- [Model](#model)
- [Tools](#tools)
- [System Prompt](#system-prompt)
- [Middleware](#middleware)
- [Subagents](#subagents)
- [Backends (virtual filesystems)](#backends)
- [Human-in-the-loop](#human-in-the-loop)
- [Skills](#skills)
- [Memory](#memory)

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const agent = createDeepAgent({
  name?: string,
  model?: BaseLanguageModel | string,
  tools?: TTools | StructuredTool[],
  systemPrompt?: string | SystemMessage,
});
```

For more information, see [Customizing Deep Agents](https://reference.langchain.com/javascript/modules/deepagents.html#customizing-deep-agents).

### Connection resilience

LangChain chat models automatically retry failed API requests with exponential backoff. By default, models retry up to **6 times** for network errors, rate limits (429), and server errors (5xx). Client errors like 401 (unauthorized) or 404 are not retried.

You can adjust the `maxRetries` parameter when creating a model to tune this behavior for your environment:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatAnthropic } from "@langchain/anthropic";
import { createDeepAgent } from "deepagents";

const agent = createDeepAgent({
    model: new ChatAnthropic({
        model: "claude-sonnet-4-6",
        maxRetries: 10, // Increase for unreliable networks (default: 6)
        timeout: 120_000, // Increase timeout for slow connections
    }),
});
```

For long-running agent tasks on unreliable networks, consider increasing `max_retries` to 10–15 and pairing it with a [checkpointer](/oss/javascript/langgraph/persistence) so that progress is preserved across failures.

## Model

By default, `deepagents` uses [`claude-sonnet-4-6`](https://platform.claude.com/docs/en/about-claude/models/overview). You can customize the model by passing any supported model identifier string or [LangChain model object](/oss/javascript/integrations/chat).

Use the `provider:model` format (for example `openai:gpt-5`) to quickly switch between models.

````
👉 Read the [OpenAI chat model integration docs](/oss/javascript/integrations/chat/openai/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/openai deepagents
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/openai deepagents
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/openai deepagents
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/openai deepagents
  ```



  ```typescript default parameters theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { createDeepAgent } from "deepagents";

  process.env.OPENAI_API_KEY = "your-api-key";

  const agent = createDeepAgent({ model: "gpt-5.2" });
  // this calls initChatModel for the specified model with default parameters
  // to use specific model parameters, use initChatModel directly
  ```

  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";
  import { createDeepAgent } from "deepagents";

  process.env.OPENAI_API_KEY = "your-api-key";

  const model = await initChatModel("gpt-5.2");
  const agent = createDeepAgent({
    model,
    temperature: 0,
  });
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatOpenAI } from "@langchain/openai";
  import { createDeepAgent } from "deepagents";

  const agent = createDeepAgent({
    model: new ChatOpenAI({
      model: "gpt-5.2",
      apiKey: "your-api-key",
      temperature: 0,
    }),
  });
  ```




👉 Read the [Anthropic chat model integration docs](/oss/javascript/integrations/chat/anthropic/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/anthropic deepagents
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/anthropic deepagents
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/anthropic deepagents
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/anthropic deepagents
  ```



  ```typescript default parameters theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { createDeepAgent } from "deepagents";

  process.env.ANTHROPIC_API_KEY = "your-api-key";

  const agent = createDeepAgent({ model: "claude-sonnet-4-6" });
  // this calls initChatModel for the specified model with default parameters
  // to use specific model parameters, use initChatModel directly
  ```

  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";
  import { createDeepAgent } from "deepagents";

  process.env.ANTHROPIC_API_KEY = "your-api-key";

  const model = await initChatModel("claude-sonnet-4-6");
  const agent = createDeepAgent({
    model,
    temperature: 0,
  });
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatAnthropic } from "@langchain/anthropic";
  import { createDeepAgent } from "deepagents";

  const agent = createDeepAgent({
    model: new ChatAnthropic({
      model: "claude-sonnet-4-6",
      apiKey: "your-api-key",
      temperature: 0,
    }),
  });
  ```




👉 Read the [Azure chat model integration docs](/oss/javascript/integrations/chat/azure/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/azure deepagents
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/azure deepagents
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/azure deepagents
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/azure deepagents
  ```



  ```typescript default parameters theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { createDeepAgent } from "deepagents";

  process.env.AZURE_OPENAI_API_KEY = "your-api-key";
  process.env.AZURE_OPENAI_ENDPOINT = "your-endpoint";
  process.env.OPENAI_API_VERSION = "your-api-version";

  const agent = createDeepAgent({ model: "azure_openai:gpt-5.2" });
  // this calls initChatModel for the specified model with default parameters
  // to use specific model parameters, use initChatModel directly
  ```

  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";
  import { createDeepAgent } from "deepagents";

  process.env.AZURE_OPENAI_API_KEY = "your-api-key";
  process.env.AZURE_OPENAI_ENDPOINT = "your-endpoint";
  process.env.OPENAI_API_VERSION = "your-api-version";

  const model = await initChatModel("azure_openai:gpt-5.2");
  const agent = createDeepAgent({
    model,
    temperature: 0,
  });
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { AzureChatOpenAI } from "@langchain/openai";
  import { createDeepAgent } from "deepagents";

  const agent = createDeepAgent({
    model: new AzureChatOpenAI({
      model: "gpt-5.2",
      azureOpenAIApiKey: "your-api-key",
      azureOpenAIApiEndpoint: "your-endpoint",
      azureOpenAIApiVersion: "your-api-version",
      temperature: 0,
    }),
  });
  ```




👉 Read the [Google GenAI chat model integration docs](/oss/javascript/integrations/chat/google_generative_ai/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/google-genai deepagents
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/google-genai deepagents
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/google-genai deepagents
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/google-genai deepagents
  ```



  ```typescript default parameters theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { createDeepAgent } from "deepagents";

  process.env.GOOGLE_API_KEY = "your-api-key";

  const agent = createDeepAgent({ model: "google-genai:gemini-2.5-flash-lite" });
  // this calls initChatModel for the specified model with default parameters
  // to use specific model parameters, use initChatModel directly
  ```

  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";
  import { createDeepAgent } from "deepagents";

  process.env.GOOGLE_API_KEY = "your-api-key";

  const model = await initChatModel("google-genai:gemini-2.5-flash-lite");
  const agent = createDeepAgent({
    model,
    temperature: 0,
  });
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
  import { createDeepAgent } from "deepagents";

  const agent = createDeepAgent({
    model: new ChatGoogleGenerativeAI({
      model: "gemini-2.5-flash-lite",
      apiKey: "your-api-key",
      temperature: 0,
    }),
  });
  ```




👉 Read the [AWS Bedrock chat model integration docs](/oss/javascript/integrations/chat/bedrock_converse/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/aws deepagents
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/aws deepagents
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/aws deepagents
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/aws deepagents
  ```



  ```typescript default parameters theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { createDeepAgent } from "deepagents";

  // Follow the steps here to configure your credentials:
  // https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html

  const agent = createDeepAgent({ model: "bedrock:gpt-5.2" });
  // this calls initChatModel for the specified model with default parameters
  // to use specific model parameters, use initChatModel directly
  ```

  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";
  import { createDeepAgent } from "deepagents";

  // Follow the steps here to configure your credentials:
  // https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html

  const model = await initChatModel("bedrock:gpt-5.2");
  const agent = createDeepAgent({
    model,
    temperature: 0,
  });
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatBedrockConverse } from "@langchain/aws";
  import { createDeepAgent } from "deepagents";

  // Follow the steps here to configure your credentials:
  // https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html

  const agent = createDeepAgent({
    model: new ChatBedrockConverse({
      model: "gpt-5.2",
      region: "us-east-2",
      temperature: 0,
    }),
  });
  ```
````

## Tools

In addition to [built-in tools](/oss/javascript/deepagents/overview#core-capabilities) for planning, file management, and subagent spawning, you can provide custom tools:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { tool } from "langchain";
import { TavilySearch } from "@langchain/tavily";
import { createDeepAgent } from "deepagents";
import { z } from "zod";

const internetSearch = tool(
  async ({
    query,
    maxResults = 5,
    topic = "general",
    includeRawContent = false,
  }: {
    query: string;
    maxResults?: number;
    topic?: "general" | "news" | "finance";
    includeRawContent?: boolean;
  }) => {
    const tavilySearch = new TavilySearch({
      maxResults,
      tavilyApiKey: process.env.TAVILY_API_KEY,
      includeRawContent,
      topic,
    });
    return await tavilySearch._call({ query });
  },
  {
    name: "internet_search",
    description: "Run a web search",
    schema: z.object({
      query: z.string().describe("The search query"),
      maxResults: z.number().optional().default(5),
      topic: z
        .enum(["general", "news", "finance"])
        .optional()
        .default("general"),
      includeRawContent: z.boolean().optional().default(false),
    }),
  },
);

const agent = createDeepAgent({
  tools: [internetSearch],
});
```

## System prompt

Deep agents come with a built-in system prompt. The default system prompt contains detailed instructions for using the built-in planning tool, file system tools, and subagents.
When middleware add special tools, like the filesystem tools, it appends them to the system prompt.

Each deep agent should also include a custom system prompt specific to its specific use case:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createDeepAgent } from "deepagents";

const researchInstructions = `You are an expert researcher. ` +
  `Your job is to conduct thorough research, and then ` +
  `write a polished report.`;

const agent = createDeepAgent({
  systemPrompt: researchInstructions,
});
```

## Middleware

By default, deep agents have access to the following [middleware](/oss/javascript/langchain/middleware/overview):

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

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { tool, createMiddleware } from "langchain";
import { createDeepAgent } from "deepagents";
import * as z from "zod";

const getWeather = tool(
  ({ city }: { city: string }) => {
    return `The weather in ${city} is sunny.`;
  },
  {
    name: "get_weather",
    description: "Get the weather in a city.",
    schema: z.object({
      city: z.string(),
    }),
  }
);

let callCount = 0;

const logToolCallsMiddleware = createMiddleware({
  name: "LogToolCallsMiddleware",
  wrapToolCall: async (request, handler) => {
    // Intercept and log every tool call - demonstrates cross-cutting concern
    callCount += 1;
    const toolName = request.toolCall.name;

    console.log(`[Middleware] Tool call #${callCount}: ${toolName}`);
    console.log(
      `[Middleware] Arguments: ${JSON.stringify(request.toolCall.args)}`
    );

    // Execute the tool call
    const result = await handler(request);

    // Log the result
    console.log(`[Middleware] Tool call #${callCount} completed`);

    return result;
  },
});

const agent = await createDeepAgent({
  model: "claude-sonnet-4-20250514",
  tools: [getWeather] as any,
  middleware: [logToolCallsMiddleware] as any,
});
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

For full details on extending state with custom properties, see [Custom middleware - Custom state schema](/oss/javascript/langchain/middleware/custom#custom-state-schema).
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

For more information, see [Subagents](/oss/javascript/deepagents/subagents).

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
  For more information, see [`FilesystemBackend`](/oss/javascript/deepagents/backends#filesystembackend-local-disk).


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from deepagents.backends import FilesystemBackend

agent = create_deep_agent(
    backend=FilesystemBackend(root_dir=".", virtual_mode=True)
)
```



A filesystem with shell execution directly on the host. Provides filesystem tools plus the `execute` tool for running commands.


  This backend grants agents direct filesystem read/write access **and** unrestricted shell execution on your host.
  Use with extreme caution and only in appropriate environments.
  For more information, see [`LocalShellBackend`](/oss/javascript/deepagents/backends#localshellbackend-local-shell).


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

For more information, see [Backends](/oss/javascript/deepagents/backends).

### Sandboxes

Sandboxes are specialized [backends](/oss/javascript/deepagents/backends) that run agent code in an isolated environment with their own filesystem and an `execute` tool for shell commands.
Use a sandbox backend when you want your deep agent to write files, install dependencies, and run commands without changing anything on your local machine.

You configure sandboxes by passing a sandbox backend to `backend` when creating your deep agent:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createDeepAgent } from "deepagents";
import { ChatAnthropic } from "@langchain/anthropic";
import { DenoSandbox } from "@langchain/deno";

// Create and initialize the sandbox
const sandbox = await DenoSandbox.create({
  memoryMb: 1024,
  lifetime: "10m",
});

try {
  const agent = createDeepAgent({
    model: new ChatAnthropic({ model: "claude-opus-4-6" }),
    systemPrompt: "You are a JavaScript coding assistant with sandbox access.",
    backend: sandbox,
  });

  const result = await agent.invoke({
    messages: [
      {
        role: "user",
        content:
          "Create a simple HTTP server using Deno.serve and test it with curl",
      },
    ],
  });
} finally {
  await sandbox.close();
}
```

For more information, see [Sandboxes](/oss/javascript/deepagents/sandboxes).

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
For more information, see [Human-in-the-loop](/oss/javascript/deepagents/human-in-the-loop).

## Skills

You can use [skills](/oss/javascript/deepagents/overview) to provide your deep agent with new capabilities and expertise.
While [tools](/oss/javascript/deepagents/customization#tools) tend to cover lower level functionality like native file system actions or planning, skills can contain detailed instructions on how to complete tasks, reference info, and other assets, such as templates.
These files are only loaded by the agent when the agent has determined that the skill is useful for the current prompt.
This progressive disclosure reduces the amount of tokens and context the agent has to consider upon startup.

For example skills, see [Deep Agent example skills](https://github.com/langchain-ai/deepagentsjs/tree/main/examples/skills).

To add skills to your deep agent, pass them as an argument to `create_deep_agent`:

````
```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createDeepAgent, type FileData } from "deepagents";
import { MemorySaver } from "@langchain/langgraph";

const checkpointer = new MemorySaver();

function createFileData(content: string): FileData {
  const now = new Date().toISOString();
  return {
    content: content.split("\n"),
    created_at: now,
    modified_at: now,
  };
}

const skillsFiles: Record<string, FileData> = {};

const skillUrl =
  "https://raw.githubusercontent.com/langchain-ai/deepagentsjs/refs/heads/main/examples/skills/langgraph-docs/SKILL.md";
const response = await fetch(skillUrl);
const skillContent = await response.text();

skillsFiles["/skills/langgraph-docs/SKILL.md"] = createFileData(skillContent);

const agent = await createDeepAgent({
  checkpointer,
  // IMPORTANT: deepagents skill source paths are virtual (POSIX) paths relative to the backend root.
  skills: ["/skills/"],
});

const config = {
  configurable: {
    thread_id: `thread-${Date.now()}`,
  },
};

const result = await agent.invoke(
  {
    messages: [
      {
        role: "user",
        content: "what is langraph? Use the langgraph-docs skill if available.",
      },
    ],
    files: skillsFiles,
  },
  config,
);
```



```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createDeepAgent, StoreBackend, type FileData } from "deepagents";
import {
  InMemoryStore,
  MemorySaver,
  type BaseStore,
} from "@langchain/langgraph";

const checkpointer = new MemorySaver();
const store = new InMemoryStore();

function createFileData(content: string): FileData {
  const now = new Date().toISOString();
  return {
    content: content.split("\n"),
    created_at: now,
    modified_at: now,
  };
}

const skillUrl =
  "https://raw.githubusercontent.com/langchain-ai/deepagentsjs/refs/heads/main/examples/skills/langgraph-docs/SKILL.md";

const response = await fetch(skillUrl);
const skillContent = await response.text();
const fileData = createFileData(skillContent);

await store.put(["filesystem"], "/skills/langgraph-docs/SKILL.md", fileData);

const backendFactory = (config: { state: unknown; store?: BaseStore }) => {
  return new StoreBackend({
    state: config.state,
    store: config.store ?? store,
  });
};

const agent = await createDeepAgent({
  backend: backendFactory,
  store: store,
  checkpointer,
  // IMPORTANT: deepagents skill source paths are virtual (POSIX) paths relative to the backend root.
  skills: ["/skills/"],
});

const config = {
  recursionLimit: 50,
  configurable: {
    thread_id: `thread-${Date.now()}`,
  },
};

const result = await agent.invoke(
  {
    messages: [
      {
        role: "user",
        content: "what is langraph? Use the langgraph-docs skill if available.",
      },
    ],
  },
  config,
);
```



```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createDeepAgent, FilesystemBackend } from "deepagents";
import { MemorySaver } from "@langchain/langgraph";

const checkpointer = new MemorySaver();
const backend = new FilesystemBackend({ rootDir: process.cwd() });

const agent = await createDeepAgent({
  backend,
  skills: ["./examples/skills/"],
  interruptOn: {
    read_file: true,
    write_file: true,
    delete_file: true,
  },
  checkpointer, // Required!
});

const config = {
  configurable: {
    thread_id: `thread-${Date.now()}`,
  },
};

const result = await agent.invoke(
  {
    messages: [
      {
        role: "user",
        content: "what is langraph? Use the langgraph-docs skill if available.",
      },
    ],
  },
  config,
);
```
````

## Memory

Use [`AGENTS.md` files](https://agents.md/) to provide extra context to your deep agent.

You can pass one or more file paths to the `memory` parameter when creating your deep agent:

````
```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createDeepAgent, type FileData } from "deepagents";
import { MemorySaver } from "@langchain/langgraph";

const AGENTS_MD_URL =
  "https://raw.githubusercontent.com/langchain-ai/deepagents/refs/heads/main/examples/text-to-sql-agent/AGENTS.md";

async function fetchText(url: string): Promise {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return await res.text();
}

const agentsMd = await fetchText(AGENTS_MD_URL);
const checkpointer = new MemorySaver();

function createFileData(content: string): FileData {
  const now = new Date().toISOString();
  return {
    content: content.split("\n"),
    created_at: now,
    modified_at: now,
  };
}

const agent = await createDeepAgent({
  memory: ["/AGENTS.md"],
  checkpointer: checkpointer,
});

const result = await agent.invoke(
  {
    messages: [
      {
        role: "user",
        content: "Please tell me what's in your memory files.",
      },
    ],
    // Seed the default StateBackend's in-state filesystem (virtual paths must start with "/").
    files: { "/AGENTS.md": createFileData(agentsMd) },
  },
  { configurable: { thread_id: "12345" } }
);
```



```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    import { createDeepAgent, StoreBackend, type FileData } from "deepagents";
    import {
      InMemoryStore,
      MemorySaver,
      type BaseStore,
    } from "@langchain/langgraph";

    const AGENTS_MD_URL =
      "https://raw.githubusercontent.com/langchain-ai/deepagents/refs/heads/main/examples/text-to-sql-agent/AGENTS.md";

    async function fetchText(url: string): Promise {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
      }
      return await res.text();
    }

    const agentsMd = await fetchText(AGENTS_MD_URL);

    function createFileData(content: string): FileData {
      const now = new Date().toISOString();
      return {
        content: content.split("\n"),
        created_at: now,
        modified_at: now,
      };
    }

    const store = new InMemoryStore();
    const fileData = createFileData(agentsMd);
    await store.put(["filesystem"], "/AGENTS.md", fileData);

    const checkpointer = new MemorySaver();

    const backendFactory = (config: { state: unknown; store?: BaseStore }) => {
      return new StoreBackend({
        state: config.state,
        store: config.store ?? store,
      });
    };

    const agent = await createDeepAgent({
      backend: backendFactory,
      store: store,
      checkpointer: checkpointer,
      memory: ["/AGENTS.md"],
    });

    const result = await agent.invoke(
      {
        messages: [
          {
            role: "user",
            content: "Please tell me what's in your memory files.",
          },
        ],
      },
      { configurable: { thread_id: "12345" } }
    );
```



```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createDeepAgent, FilesystemBackend } from "deepagents";
import { MemorySaver } from "@langchain/langgraph";

// Checkpointer is REQUIRED for human-in-the-loop
const checkpointer = new MemorySaver();

const agent = await createDeepAgent({
  backend: (config) =>
    new FilesystemBackend({ rootDir: "/Users/user/{project}" }),
  memory: ["./AGENTS.md", "./.deepagents/AGENTS.md"],
  interruptOn: {
    read_file: true,
    write_file: true,
    delete_file: true,
  },
  checkpointer, // Required!
});
```
````

## Structured ouput

Deep agents support [structured ouput](/oss/javascript/langchain/structured-output).

You can set a desired structured output schema by passing it as the `responseFormat` argument to the call to `createDeepAgent()`.
When the model generates the structured data, it's captured, validated, and returned in the 'structuredResponse' key of the agent's state.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { tool } from "langchain";
import { TavilySearch } from "@langchain/tavily";
import { createDeepAgent } from "deepagents";
import { z } from "zod";

const internetSearch = tool(
  async ({
    query,
    maxResults = 5,
    topic = "general",
    includeRawContent = false,
  }: {
    query: string;
    maxResults?: number;
    topic?: "general" | "news" | "finance";
    includeRawContent?: boolean;
  }) => {
    const tavilySearch = new TavilySearch({
      maxResults,
      tavilyApiKey: process.env.TAVILY_API_KEY,
      includeRawContent,
      topic,
    });
    return await tavilySearch._call({ query });
  },
  {
    name: "internet_search",
    description: "Run a web search",
    schema: z.object({
      query: z.string().describe("The search query"),
      maxResults: z.number().optional().default(5),
      topic: z
        .enum(["general", "news", "finance"])
        .optional()
        .default("general"),
      includeRawContent: z.boolean().optional().default(false),
    }),
  }
);

const weatherReportSchema = z.object({
  location: z.string().describe("The location for this weather report"),
  temperature: z.number().describe("Current temperature in Celsius"),
  condition: z
    .string()
    .describe("Current weather condition (e.g., sunny, cloudy, rainy)"),
  humidity: z.number().describe("Humidity percentage"),
  windSpeed: z.number().describe("Wind speed in km/h"),
  forecast: z.string().describe("Brief forecast for the next 24 hours"),
});

const agent = await createDeepAgent({
  responseFormat: weatherReportSchema,
  tools: [internetSearch],
});

const result = await agent.invoke({
  messages: [
    {
      role: "user",
      content: "What's the weather like in San Francisco?",
    },
  ],
});

console.log(result.structuredResponse);
// {
//   location: 'San Francisco, California',
//   temperature: 18.3,
//   condition: 'Sunny',
//   humidity: 48,
//   windSpeed: 7.6,
//   forecast: 'Clear skies with temperatures remaining mild. High of 18°C (64°F) during the day, dropping to around 11°C (52°F) at night.'
// }
```

For more information and examples, see [response format](/oss/javascript/langchain/structured-output#response-format).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/deepagents/customization.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
