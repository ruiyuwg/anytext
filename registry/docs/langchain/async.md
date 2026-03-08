## Async

Using the async programming paradigm can produce significant performance improvements when running [IO-bound](https://en.wikipedia.org/wiki/I/O_bound) code concurrently (e.g., making concurrent API requests to a chat model provider).

To convert a `sync` implementation of the graph to an `async` implementation, you will need to:

1. Update `nodes` use `async def` instead of `def`.
2. Update the code inside to use `await` appropriately.
3. Invoke the graph with `.ainvoke` or `.astream` as desired.

Because many LangChain objects implement the [Runnable Protocol](https://python.langchain.com/docs/expression_language/interface/) which has `async` variants of all the `sync` methods it's typically fairly quick to upgrade a `sync` graph to an `async` graph.

See example below. To demonstrate async invocations of underlying LLMs, we will include a chat model:

````
👉 Read the [OpenAI chat model integration docs](/oss/python/integrations/chat/openai/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[openai]"
```


  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model

  os.environ["OPENAI_API_KEY"] = "sk-..."

  model = init_chat_model("gpt-5.2")
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_openai import ChatOpenAI

  os.environ["OPENAI_API_KEY"] = "sk-..."

  model = ChatOpenAI(model="gpt-5.2")
  ```




👉 Read the [Anthropic chat model integration docs](/oss/python/integrations/chat/anthropic/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[anthropic]"
```


  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model

  os.environ["ANTHROPIC_API_KEY"] = "sk-..."

  model = init_chat_model("claude-sonnet-4-6")
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_anthropic import ChatAnthropic

  os.environ["ANTHROPIC_API_KEY"] = "sk-..."

  model = ChatAnthropic(model="claude-sonnet-4-6")
  ```




👉 Read the [Azure chat model integration docs](/oss/python/integrations/chat/azure_chat_openai/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[openai]"
```


  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model

  os.environ["AZURE_OPENAI_API_KEY"] = "..."
  os.environ["AZURE_OPENAI_ENDPOINT"] = "..."
  os.environ["OPENAI_API_VERSION"] = "2025-03-01-preview"

  model = init_chat_model(
      "azure_openai:gpt-5.2",
      azure_deployment=os.environ["AZURE_OPENAI_DEPLOYMENT_NAME"],
  )
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_openai import AzureChatOpenAI

  os.environ["AZURE_OPENAI_API_KEY"] = "..."
  os.environ["AZURE_OPENAI_ENDPOINT"] = "..."
  os.environ["OPENAI_API_VERSION"] = "2025-03-01-preview"

  model = AzureChatOpenAI(
      model="gpt-5.2",
      azure_deployment=os.environ["AZURE_OPENAI_DEPLOYMENT_NAME"]
  )
  ```




👉 Read the [Google GenAI chat model integration docs](/oss/python/integrations/chat/google_generative_ai/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[google-genai]"
```


  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model

  os.environ["GOOGLE_API_KEY"] = "..."

  model = init_chat_model("google_genai:gemini-2.5-flash-lite")
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_google_genai import ChatGoogleGenerativeAI

  os.environ["GOOGLE_API_KEY"] = "..."

  model = ChatGoogleGenerativeAI(model="gemini-2.5-flash-lite")
  ```




👉 Read the [AWS Bedrock chat model integration docs](/oss/python/integrations/chat/bedrock/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[aws]"
```


  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from langchain.chat_models import init_chat_model

  # Follow the steps here to configure your credentials:
  # https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html

  model = init_chat_model(
      "anthropic.claude-3-5-sonnet-20240620-v1:0",
      model_provider="bedrock_converse",
  )
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from langchain_aws import ChatBedrock

  model = ChatBedrock(model="anthropic.claude-3-5-sonnet-20240620-v1:0")
  ```




👉 Read the [HuggingFace chat model integration docs](/oss/python/integrations/chat/huggingface/)

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain[huggingface]"
```


  ```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain.chat_models import init_chat_model

  os.environ["HUGGINGFACEHUB_API_TOKEN"] = "hf_..."

  model = init_chat_model(
      "microsoft/Phi-3-mini-4k-instruct",
      model_provider="huggingface",
      temperature=0.7,
      max_tokens=1024,
  )
  ```

  ```python Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import os
  from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint

  os.environ["HUGGINGFACEHUB_API_TOKEN"] = "hf_..."

  llm = HuggingFaceEndpoint(
      repo_id="microsoft/Phi-3-mini-4k-instruct",
      temperature=0.7,
      max_length=1024,
  )
  model = ChatHuggingFace(llm=llm)
  ```
````

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.chat_models import init_chat_model
from langgraph.graph import MessagesState, StateGraph

async def node(state: MessagesState):  # [!code highlight]
    new_message = await llm.ainvoke(state["messages"])  # [!code highlight]
    return {"messages": [new_message]}

builder = StateGraph(MessagesState).add_node(node).set_entry_point("node")
graph = builder.compile()

input_message = {"role": "user", "content": "Hello"}
result = await graph.ainvoke({"messages": [input_message]})  # [!code highlight]
```

**Async streaming**
See the [streaming guide](/oss/python/langgraph/streaming) for examples of streaming with async.
