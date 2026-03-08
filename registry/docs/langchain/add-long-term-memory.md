## Add long-term memory

Use long-term memory to store user-specific or application-specific data across conversations.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.store.memory import InMemoryStore  # [!code highlight]
from langgraph.graph import StateGraph

store = InMemoryStore()  # [!code highlight]

builder = StateGraph(...)
graph = builder.compile(store=store)  # [!code highlight]
```

### Access the store inside nodes

Once you compile a graph with a store, LangGraph automatically injects the store into your node functions. The recommended way to access the store is through the `Runtime` object.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from dataclasses import dataclass
from langgraph.runtime import Runtime
from langgraph.graph import StateGraph, MessagesState, START
import uuid

@dataclass
class Context:
    user_id: str

async def call_model(state: MessagesState, runtime: Runtime[Context]):  # [!code highlight]
    user_id = runtime.context.user_id  # [!code highlight]
    namespace = (user_id, "memories")

    # Search for relevant memories
    memories = await runtime.store.asearch(  # [!code highlight]
        namespace, query=state["messages"][-1].content, limit=3
    )
    info = "\n".join([d.value["data"] for d in memories])

    # ... Use memories in model call

    # Store a new memory
    await runtime.store.aput(  # [!code highlight]
        namespace, str(uuid.uuid4()), {"data": "User prefers dark mode"}
    )

builder = StateGraph(MessagesState, context_schema=Context)  # [!code highlight]
builder.add_node(call_model)
builder.add_edge(START, "call_model")
graph = builder.compile(store=store)

# Pass context at invocation time
graph.invoke(
    {"messages": [{"role": "user", "content": "hi"}]},
    {"configurable": {"thread_id": "1"}},
    context=Context(user_id="1"),  # [!code highlight]
)
```

### Use in production

In production, use a store backed by a database:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.store.postgres import PostgresStore

DB_URI = "postgresql://postgres:postgres@localhost:5442/postgres?sslmode=disable"
with PostgresStore.from_conn_string(DB_URI) as store:  # [!code highlight]
    builder = StateGraph(...)
    graph = builder.compile(store=store)  # [!code highlight]
```

```
pip install -U "psycopg[binary,pool]" langgraph langgraph-checkpoint-postgres
```

````
You need to call `store.setup()` the first time you're using Postgres store




  ```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from dataclasses import dataclass
  from langchain.chat_models import init_chat_model
  from langgraph.graph import StateGraph, MessagesState, START
  from langgraph.checkpoint.postgres.aio import AsyncPostgresSaver
  from langgraph.store.postgres.aio import AsyncPostgresStore  # [!code highlight]
  from langgraph.runtime import Runtime  # [!code highlight]
  import uuid

  model = init_chat_model(model="claude-haiku-4-5-20251001")

  @dataclass
  class Context:
      user_id: str

  async def call_model(  # [!code highlight]
      state: MessagesState,
      runtime: Runtime[Context],  # [!code highlight]
  ):
      user_id = runtime.context.user_id  # [!code highlight]
      namespace = ("memories", user_id)
      memories = await runtime.store.asearch(namespace, query=str(state["messages"][-1].content))  # [!code highlight]
      info = "\n".join([d.value["data"] for d in memories])
      system_msg = f"You are a helpful assistant talking to the user. User info: {info}"

      # Store new memories if the user asks the model to remember
      last_message = state["messages"][-1]
      if "remember" in last_message.content.lower():
          memory = "User name is Bob"
          await runtime.store.aput(namespace, str(uuid.uuid4()), {"data": memory})  # [!code highlight]

      response = await model.ainvoke(
          [{"role": "system", "content": system_msg}] + state["messages"]
      )
      return {"messages": response}

  DB_URI = "postgresql://postgres:postgres@localhost:5442/postgres?sslmode=disable"

  async with (
      AsyncPostgresStore.from_conn_string(DB_URI) as store,  # [!code highlight]
      AsyncPostgresSaver.from_conn_string(DB_URI) as checkpointer,
  ):
      # await store.setup()
      # await checkpointer.setup()

      builder = StateGraph(MessagesState, context_schema=Context)  # [!code highlight]
      builder.add_node(call_model)
      builder.add_edge(START, "call_model")

      graph = builder.compile(
          checkpointer=checkpointer,
          store=store,  # [!code highlight]
      )

      config = {"configurable": {"thread_id": "1"}}
      async for chunk in graph.astream(
          {"messages": [{"role": "user", "content": "Hi! Remember: my name is Bob"}]},
          config,
          stream_mode="values",
          context=Context(user_id="1"),  # [!code highlight]
      ):
          chunk["messages"][-1].pretty_print()

      config = {"configurable": {"thread_id": "2"}}
      async for chunk in graph.astream(
          {"messages": [{"role": "user", "content": "what is my name?"}]},
          config,
          stream_mode="values",
          context=Context(user_id="1"),  # [!code highlight]
      ):
          chunk["messages"][-1].pretty_print()
  ```



  ```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from dataclasses import dataclass
  from langchain.chat_models import init_chat_model
  from langgraph.graph import StateGraph, MessagesState, START
  from langgraph.checkpoint.postgres import PostgresSaver
  from langgraph.store.postgres import PostgresStore  # [!code highlight]
  from langgraph.runtime import Runtime  # [!code highlight]
  import uuid

  model = init_chat_model(model="claude-haiku-4-5-20251001")

  @dataclass
  class Context:
      user_id: str

  def call_model(  # [!code highlight]
      state: MessagesState,
      runtime: Runtime[Context],  # [!code highlight]
  ):
      user_id = runtime.context.user_id  # [!code highlight]
      namespace = ("memories", user_id)
      memories = runtime.store.search(namespace, query=str(state["messages"][-1].content))  # [!code highlight]
      info = "\n".join([d.value["data"] for d in memories])
      system_msg = f"You are a helpful assistant talking to the user. User info: {info}"

      # Store new memories if the user asks the model to remember
      last_message = state["messages"][-1]
      if "remember" in last_message.content.lower():
          memory = "User name is Bob"
          runtime.store.put(namespace, str(uuid.uuid4()), {"data": memory})  # [!code highlight]

      response = model.invoke(
          [{"role": "system", "content": system_msg}] + state["messages"]
      )
      return {"messages": response}

  DB_URI = "postgresql://postgres:postgres@localhost:5442/postgres?sslmode=disable"

  with (
      PostgresStore.from_conn_string(DB_URI) as store,  # [!code highlight]
      PostgresSaver.from_conn_string(DB_URI) as checkpointer,
  ):
      # store.setup()
      # checkpointer.setup()

      builder = StateGraph(MessagesState, context_schema=Context)  # [!code highlight]
      builder.add_node(call_model)
      builder.add_edge(START, "call_model")

      graph = builder.compile(
          checkpointer=checkpointer,
          store=store,  # [!code highlight]
      )

      config = {"configurable": {"thread_id": "1"}}
      for chunk in graph.stream(
          {"messages": [{"role": "user", "content": "Hi! Remember: my name is Bob"}]},
          config,
          stream_mode="values",
          context=Context(user_id="1"),  # [!code highlight]
      ):
          chunk["messages"][-1].pretty_print()

      config = {"configurable": {"thread_id": "2"}}
      for chunk in graph.stream(
          {"messages": [{"role": "user", "content": "what is my name?"}]},
          config,
          stream_mode="values",
          context=Context(user_id="1"),  # [!code highlight]
      ):
          chunk["messages"][-1].pretty_print()
  ```
````

```
pip install -U langgraph langgraph-checkpoint-redis
```

````
You need to call `store.setup()` the first time you're using [Redis store](https://pypi.org/project/langgraph-checkpoint-redis/).




  ```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from dataclasses import dataclass
  from langchain.chat_models import init_chat_model
  from langgraph.graph import StateGraph, MessagesState, START
  from langgraph.checkpoint.redis.aio import AsyncRedisSaver
  from langgraph.store.redis.aio import AsyncRedisStore  # [!code highlight]
  from langgraph.runtime import Runtime  # [!code highlight]
  import uuid

  model = init_chat_model(model="claude-haiku-4-5-20251001")

  @dataclass
  class Context:
      user_id: str

  async def call_model(  # [!code highlight]
      state: MessagesState,
      runtime: Runtime[Context],  # [!code highlight]
  ):
      user_id = runtime.context.user_id  # [!code highlight]
      namespace = ("memories", user_id)
      memories = await runtime.store.asearch(namespace, query=str(state["messages"][-1].content))  # [!code highlight]
      info = "\n".join([d.value["data"] for d in memories])
      system_msg = f"You are a helpful assistant talking to the user. User info: {info}"

      # Store new memories if the user asks the model to remember
      last_message = state["messages"][-1]
      if "remember" in last_message.content.lower():
          memory = "User name is Bob"
          await runtime.store.aput(namespace, str(uuid.uuid4()), {"data": memory})  # [!code highlight]

      response = await model.ainvoke(
          [{"role": "system", "content": system_msg}] + state["messages"]
      )
      return {"messages": response}

  DB_URI = "redis://localhost:6379"

  async with (
      AsyncRedisStore.from_conn_string(DB_URI) as store,  # [!code highlight]
      AsyncRedisSaver.from_conn_string(DB_URI) as checkpointer,
  ):
      # await store.setup()
      # await checkpointer.asetup()

      builder = StateGraph(MessagesState, context_schema=Context)  # [!code highlight]
      builder.add_node(call_model)
      builder.add_edge(START, "call_model")

      graph = builder.compile(
          checkpointer=checkpointer,
          store=store,  # [!code highlight]
      )

      config = {"configurable": {"thread_id": "1"}}
      async for chunk in graph.astream(
          {"messages": [{"role": "user", "content": "Hi! Remember: my name is Bob"}]},
          config,
          stream_mode="values",
          context=Context(user_id="1"),  # [!code highlight]
      ):
          chunk["messages"][-1].pretty_print()

      config = {"configurable": {"thread_id": "2"}}
      async for chunk in graph.astream(
          {"messages": [{"role": "user", "content": "what is my name?"}]},
          config,
          stream_mode="values",
          context=Context(user_id="1"),  # [!code highlight]
      ):
          chunk["messages"][-1].pretty_print()
  ```



  ```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from dataclasses import dataclass
  from langchain.chat_models import init_chat_model
  from langgraph.graph import StateGraph, MessagesState, START
  from langgraph.checkpoint.redis import RedisSaver
  from langgraph.store.redis import RedisStore  # [!code highlight]
  from langgraph.runtime import Runtime  # [!code highlight]
  import uuid

  model = init_chat_model(model="claude-haiku-4-5-20251001")

  @dataclass
  class Context:
      user_id: str

  def call_model(  # [!code highlight]
      state: MessagesState,
      runtime: Runtime[Context],  # [!code highlight]
  ):
      user_id = runtime.context.user_id  # [!code highlight]
      namespace = ("memories", user_id)
      memories = runtime.store.search(namespace, query=str(state["messages"][-1].content))  # [!code highlight]
      info = "\n".join([d.value["data"] for d in memories])
      system_msg = f"You are a helpful assistant talking to the user. User info: {info}"

      # Store new memories if the user asks the model to remember
      last_message = state["messages"][-1]
      if "remember" in last_message.content.lower():
          memory = "User name is Bob"
          runtime.store.put(namespace, str(uuid.uuid4()), {"data": memory})  # [!code highlight]

      response = model.invoke(
          [{"role": "system", "content": system_msg}] + state["messages"]
      )
      return {"messages": response}

  DB_URI = "redis://localhost:6379"

  with (
      RedisStore.from_conn_string(DB_URI) as store,  # [!code highlight]
      RedisSaver.from_conn_string(DB_URI) as checkpointer,
  ):
      store.setup()
      checkpointer.setup()

      builder = StateGraph(MessagesState, context_schema=Context)  # [!code highlight]
      builder.add_node(call_model)
      builder.add_edge(START, "call_model")

      graph = builder.compile(
          checkpointer=checkpointer,
          store=store,  # [!code highlight]
      )

      config = {"configurable": {"thread_id": "1"}}
      for chunk in graph.stream(
          {"messages": [{"role": "user", "content": "Hi! Remember: my name is Bob"}]},
          config,
          stream_mode="values",
          context=Context(user_id="1"),  # [!code highlight]
      ):
          chunk["messages"][-1].pretty_print()

      config = {"configurable": {"thread_id": "2"}}
      for chunk in graph.stream(
          {"messages": [{"role": "user", "content": "what is my name?"}]},
          config,
          stream_mode="values",
          context=Context(user_id="1"),  # [!code highlight]
      ):
          chunk["messages"][-1].pretty_print()
  ```
````

### Use semantic search

Enable semantic search in your graph's memory store to let graph agents search for items in the store by semantic similarity.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.embeddings import init_embeddings
from langgraph.store.memory import InMemoryStore

# Create store with semantic search enabled
embeddings = init_embeddings("openai:text-embedding-3-small")
store = InMemoryStore(
    index={
        "embed": embeddings,
        "dims": 1536,
    }
)

store.put(("user_123", "memories"), "1", {"text": "I love pizza"})
store.put(("user_123", "memories"), "2", {"text": "I am a plumber"})

items = store.search(
    ("user_123", "memories"), query="I'm hungry", limit=1
)
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}

from langchain.embeddings import init_embeddings
from langchain.chat_models import init_chat_model
from langgraph.store.memory import InMemoryStore
from langgraph.graph import START, MessagesState, StateGraph
from langgraph.runtime import Runtime  # [!code highlight]

model = init_chat_model("gpt-4.1-mini")

# Create store with semantic search enabled
embeddings = init_embeddings("openai:text-embedding-3-small")
store = InMemoryStore(
    index={
        "embed": embeddings,
        "dims": 1536,
    }
)

store.put(("user_123", "memories"), "1", {"text": "I love pizza"})
store.put(("user_123", "memories"), "2", {"text": "I am a plumber"})

async def chat(state: MessagesState, runtime: Runtime):  # [!code highlight]
    # Search based on user's last message
    items = await runtime.store.asearch(  # [!code highlight]
        ("user_123", "memories"), query=state["messages"][-1].content, limit=2
    )
    memories = "\n".join(item.value["text"] for item in items)
    memories = f"## Memories of user\n{memories}" if memories else ""
    response = await model.ainvoke(
        [
            {"role": "system", "content": f"You are a helpful assistant.\n{memories}"},
            *state["messages"],
        ]
    )
    return {"messages": [response]}


builder = StateGraph(MessagesState)
builder.add_node(chat)
builder.add_edge(START, "chat")
graph = builder.compile(store=store)

async for message, metadata in graph.astream(
    input={"messages": [{"role": "user", "content": "I'm hungry"}]},
    stream_mode="messages",
):
    print(message.content, end="")
```
