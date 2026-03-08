# Trace Google ADK applications

Source: https://docs.langchain.com/langsmith/trace-with-google-adk

This guide shows you how to trace [Google Agent Development Kit (ADK)](https://github.com/google/adk-python) agents in LangSmith. You'll configure automatic tracing for your ADK applications to capture agent invocations, tool calls, and LLM interactions.

## Installation

Install the required packages using your preferred package manager:

```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
uv add langsmith[google-adk]
```

```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install langsmith[google-adk]
```

## Setup

Set your [API keys](/langsmith/create-account-api-key):

```bash shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGSMITH_TRACING=true
export LANGSMITH_ENDPOINT=https://api.smith.langchain.com
export LANGSMITH_API_KEY=<your_langsmith_api_key>
export LANGSMITH_PROJECT=<your_langsmith_project>

export GOOGLE_API_KEY=<your_google_api_key>
```

```dotenv .env theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
LANGSMITH_TRACING=true
LANGSMITH_ENDPOINT=https://api.smith.langchain.com
LANGSMITH_API_KEY=<your_langsmith_api_key>
LANGSMITH_PROJECT=<your_langsmith_project>

GOOGLE_API_KEY=<your_google_api_key>
```

To create a Google API key, refer to [Google AI Studio](https://aistudio.google.com/api-keys).

## Configure tracing

To trace ADK agents, use `configure_google_adk()` from the LangSmith SDK. Call this function once at the start of your application before creating any ADK agents:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langsmith.integrations.google_adk import configure_google_adk

configure_google_adk(
    project_name="my-adk-project",  # Optional: defaults to LANGSMITH_PROJECT env var
)
```

The function accepts the following optional parameters:

- `project_name`: LangSmith project to send traces to. Defaults to the `LANGSMITH_PROJECT` environment variable.
- `name`: Name for the root trace. Defaults to `"google_adk.session"`.
- `metadata`: Dictionary of key-value pairs for additional context.
- `tags`: List of strings to categorize traces.

## Example

This example creates a weather agent with a tool, then runs it with tracing enabled:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import asyncio

from dotenv import load_dotenv  # Optional
from google.adk.agents import Agent
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types
from langsmith.integrations.google_adk import configure_google_adk

load_dotenv()  # Optional


async def main():
    # Configure LangSmith tracing
    configure_google_adk()

    # Define a tool
    def get_weather(city: str) -> dict:
        """Get weather for a city."""
        return {"city": city, "temperature": "72°F", "conditions": "Sunny"}

    # Create the agent
    agent = Agent(
        name="weather_agent",
        model="gemini-2.0-flash",
        description="Provides weather information.",
        instruction="Use the get_weather tool to answer weather questions.",
        tools=[get_weather],
    )

    # Set up session and runner
    session_service = InMemorySessionService()
    session = await session_service.create_session(
        app_name="weather_app",
        user_id="user_123",
        session_id="session_456",
    )

    runner = Runner(
        agent=agent,
        app_name="weather_app",
        session_service=session_service,
    )

    # Run the agent
    async for event in runner.run_async(
        user_id="user_123",
        session_id=session.id,
        new_message=types.Content(
            role="user",
            parts=[types.Part(text="What's the weather in San Francisco?")],
        ),
    ):
        if event.is_final_response():
            print(event.content.parts[0].text)


if __name__ == "__main__":
    asyncio.run(main())
```

## View traces in LangSmith

After running your application, you can view traces in the [LangSmith UI](https://smith.langchain.com) that include:

- **Agent invocations**: Complete flows through your ADK agents
- **Tool calls**: Individual function calls made by agents
- **LLM interactions**: Requests and responses from Gemini models
- **Multi-agent workflows**: Traces from sequential and parallel agent compositions

## Custom metadata and tags

Add metadata and tags when configuring tracing to categorize and filter traces:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langsmith.integrations.google_adk import configure_google_adk

configure_google_adk(
    project_name="production-agents",
    metadata={
        "environment": "production",
        "team": "ml-platform",
    },
    tags=["adk", "weather", "v2"],
)
```

## Multi-agent workflows

The integration automatically traces multi-agent workflows including sequential and parallel agent compositions:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import asyncio

from dotenv import load_dotenv  # Optional
from google.adk.agents import Agent, SequentialAgent
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types
from langsmith.integrations.google_adk import configure_google_adk

load_dotenv()  # Optional


async def main():
    # Configure LangSmith tracing
    # Traces go to LANGSMITH_PROJECT env var by default.
    # Pass project_name="my-project" to override.
    configure_google_adk()

    # Create sub-agents
    translator = Agent(
        name="translator",
        model="gemini-2.0-flash",
        description="Translates text to English.",
    )

    summarizer = Agent(
        name="summarizer",
        model="gemini-2.0-flash",
        description="Summarizes text concisely.",
    )

    # Create a sequential agent that runs sub-agents in order
    pipeline = SequentialAgent(
        name="translate_and_summarize",
        sub_agents=[translator, summarizer],
        description="Translates text then summarizes it.",
    )

    # Set up and run
    session_service = InMemorySessionService()
    session = await session_service.create_session(
        app_name="pipeline_app",
        user_id="user_123",
        session_id="session_456",
    )

    runner = Runner(
        agent=pipeline,
        app_name="pipeline_app",
        session_service=session_service,
    )

    events = runner.run_async(
        user_id="user_123",
        session_id=session.id,
        new_message=types.Content(
            role="user",
            parts=[types.Part(text="Quelle est la plus haute tour de Paris?")],
        ),
    )

    async for event in events:
        if event.is_final_response():
            print(event.content.parts[0].text)


if __name__ == "__main__":
    asyncio.run(main())
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/trace-with-google-adk.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
