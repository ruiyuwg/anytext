## 2. Retrieval and generation

RAG applications commonly work as follows:

1. **Retrieve**: Given a user input, relevant splits are retrieved from storage using a [Retriever](/oss/python/langchain/retrieval#retrievers).
2. **Generate**: A [model](/oss/python/langchain/models) produces an answer using a prompt that includes both the question with the retrieved data

Now let's write the actual application logic. We want to create a simple application that takes a user question, searches for documents relevant to that question, passes the retrieved documents and initial question to a model, and returns an answer.

We will demonstrate:

1. A RAG [agent](#rag-agents) that executes searches with a simple tool. This is a good general-purpose implementation.
2. A two-step RAG [chain](#rag-chains) that uses just a single LLM call per query. This is a fast and effective method for simple queries.

### RAG agents

One formulation of a RAG application is as a simple [agent](/oss/python/langchain/agents) with a tool that retrieves information. We can assemble a minimal RAG agent by implementing a [tool](/oss/python/langchain/tools) that wraps our vector store:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.tools import tool

@tool(response_format="content_and_artifact")
def retrieve_context(query: str):
    """Retrieve information to help answer a query."""
    retrieved_docs = vector_store.similarity_search(query, k=2)
    serialized = "\n\n".join(
        (f"Source: {doc.metadata}\nContent: {doc.page_content}")
        for doc in retrieved_docs
    )
    return serialized, retrieved_docs
```

Here we use the [tool decorator](https://reference.langchain.com/python/langchain-core/tools/convert/tool) to configure the tool to attach raw documents as [artifacts](/oss/python/langchain/messages#param-artifact) to each [ToolMessage](/oss/python/langchain/messages#tool-message). This will let us access document metadata in our application, separate from the stringified representation that is sent to the model.

Retrieval tools are not limited to a single string `query` argument, as in the above example. You can
force the LLM to specify additional search parameters by adding arguments— for example, a category:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing import Literal

def retrieve_context(query: str, section: Literal["beginning", "middle", "end"]):
```

Given our tool, we can construct the agent:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent


tools = [retrieve_context]
# If desired, specify custom instructions
prompt = (
    "You have access to a tool that retrieves context from a blog post. "
    "Use the tool to help answer user queries."
)
agent = create_agent(model, tools, system_prompt=prompt)
```

Let's test this out. We construct a question that would typically require an iterative sequence of retrieval steps to answer:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
query = (
    "What is the standard method for Task Decomposition?\n\n"
    "Once you get the answer, look up common extensions of that method."
)

for event in agent.stream(
    {"messages": [{"role": "user", "content": query}]},
    stream_mode="values",
):
    event["messages"][-1].pretty_print()
```

```
================================ Human Message =================================

What is the standard method for Task Decomposition?

Once you get the answer, look up common extensions of that method.
================================== Ai Message ==================================
Tool Calls:
  retrieve_context (call_d6AVxICMPQYwAKj9lgH4E337)
 Call ID: call_d6AVxICMPQYwAKj9lgH4E337
  Args:
    query: standard method for Task Decomposition
================================= Tool Message =================================
Name: retrieve_context

Source: {'source': 'https://lilianweng.github.io/posts/2023-06-23-agent/'}
Content: Task decomposition can be done...

Source: {'source': 'https://lilianweng.github.io/posts/2023-06-23-agent/'}
Content: Component One: Planning...
================================== Ai Message ==================================
Tool Calls:
  retrieve_context (call_0dbMOw7266jvETbXWn4JqWpR)
 Call ID: call_0dbMOw7266jvETbXWn4JqWpR
  Args:
    query: common extensions of the standard method for Task Decomposition
================================= Tool Message =================================
Name: retrieve_context

Source: {'source': 'https://lilianweng.github.io/posts/2023-06-23-agent/'}
Content: Task decomposition can be done...

Source: {'source': 'https://lilianweng.github.io/posts/2023-06-23-agent/'}
Content: Component One: Planning...
================================== Ai Message ==================================

The standard method for Task Decomposition often used is the Chain of Thought (CoT)...
```

Note that the agent:

1. Generates a query to search for a standard method for task decomposition;
2. Receiving the answer, generates a second query to search for common extensions of it;
3. Having received all necessary context, answers the question.

We can see the full sequence of steps, along with latency and other metadata, in the [LangSmith trace](https://smith.langchain.com/public/7b42d478-33d2-4631-90a4-7cb731681e88/r).

You can add a deeper level of control and customization using the [LangGraph](/oss/python/langgraph/overview) framework directly— for example, you can add steps to grade document relevance and rewrite search queries. Check out LangGraph's [Agentic RAG tutorial](/oss/python/langgraph/agentic-rag) for more advanced formulations.

### RAG chains

In the above [agentic RAG](#rag-agents) formulation we allow the LLM to use its discretion in generating a [tool call](/oss/python/langchain/models#tool-calling) to help answer user queries. This is a good general-purpose solution, but comes with some trade-offs:

| ✅ Benefits                                                                                                                                                 | ⚠️ Drawbacks                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Search only when needed** – The LLM can handle greetings, follow-ups, and simple queries without triggering unnecessary searches.                        | **Two inference calls** – When a search is performed, it requires one call to generate the query and another to produce the final response. |
| **Contextual search queries** – By treating search as a tool with a `query` input, the LLM crafts its own queries that incorporate conversational context. | **Reduced control** – The LLM may skip searches when they are actually needed, or issue extra searches when unnecessary.                    |
| **Multiple searches allowed** – The LLM can execute several searches in support of a single user query.                                                    |                                                                                                                                             |

Another common approach is a two-step chain, in which we always run a search (potentially using the raw user query) and incorporate the result as context for a single LLM query. This results in a single inference call per query, buying reduced latency at the expense of flexibility.

In this approach we no longer call the model in a loop, but instead make a single pass.

We can implement this chain by removing tools from the agent and instead incorporating the retrieval step into a custom prompt:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents.middleware import dynamic_prompt, ModelRequest

@dynamic_prompt
def prompt_with_context(request: ModelRequest) -> str:
    """Inject context into state messages."""
    last_query = request.state["messages"][-1].text
    retrieved_docs = vector_store.similarity_search(last_query)

    docs_content = "\n\n".join(doc.page_content for doc in retrieved_docs)

    system_message = (
        "You are a helpful assistant. Use the following context in your response:"
        f"\n\n{docs_content}"
    )

    return system_message


agent = create_agent(model, tools=[], middleware=[prompt_with_context])
```

Let's try this out:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
query = "What is task decomposition?"
for step in agent.stream(
    {"messages": [{"role": "user", "content": query}]},
    stream_mode="values",
):
    step["messages"][-1].pretty_print()
```

```
================================ Human Message =================================

What is task decomposition?
================================== Ai Message ==================================

Task decomposition is...
```

In the [LangSmith trace](https://smith.langchain.com/public/0322904b-bc4c-4433-a568-54c6b31bbef4/r/9ef1c23e-380e-46bf-94b3-d8bb33df440c) we can see the retrieved context incorporated into the model prompt.

This is a fast and effective method for simple queries in constrained settings, when we typically do want to run user queries through semantic search to pull additional context.

The above [RAG chain](#rag-chains) incorporates retrieved context into a single system message for that run.

As in the [agentic RAG](#rag-agents) formulation, we sometimes want to include raw source documents in the application state to have access to document metadata. We can do this for the two-step chain case by:

1. Adding a key to the state to store the retrieved documents
2. Adding a new node via a [pre-model hook](/oss/python/langchain/agents#pre-model-hook) to populate that key (as well as inject the context).

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing import Any
from langchain_core.documents import Document
from langchain.agents.middleware import AgentMiddleware, AgentState


class State(AgentState):
    context: list[Document]


class RetrieveDocumentsMiddleware(AgentMiddleware[State]):
    state_schema = State

    def before_model(self, state: AgentState) -> dict[str, Any] | None:
        last_message = state["messages"][-1]
        retrieved_docs = vector_store.similarity_search(last_message.text)

        docs_content = "\n\n".join(doc.page_content for doc in retrieved_docs)

        augmented_message_content = (
            f"{last_message.text}\n\n"
            "Use the following context to answer the query:\n"
            f"{docs_content}"
        )
        return {
            "messages": [last_message.model_copy(update={"content": augmented_message_content})],
            "context": retrieved_docs,
        }


agent = create_agent(
    model,
    tools=[],
    middleware=[RetrieveDocumentsMiddleware()],
)
```

## Next steps

Now that we've implemented a simple RAG application via [`create_agent`](https://reference.langchain.com/python/langchain/agents/factory/create_agent), we can easily incorporate new features and go deeper:

- [Stream](/oss/python/langchain/streaming) tokens and other information for responsive user experiences
- Add [conversational memory](/oss/python/langchain/short-term-memory) to support multi-turn interactions
- Add [long-term memory](/oss/python/langchain/long-term-memory) to support memory across conversational threads
- Add [structured responses](/oss/python/langchain/structured-output)
- Deploy your application with [LangSmith Deployment](/langsmith/deployments)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/rag.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
