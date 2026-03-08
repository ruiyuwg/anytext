## Setup

### Installation

This tutorial requires the `langchain` package:

```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install langchain
```

```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
uv add langchain
```

```bash conda theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
conda install langchain -c conda-forge
```

For more details, see our [Installation guide](/oss/python/langchain/install).

### LangSmith

Set up [LangSmith](https://smith.langchain.com) to inspect what is happening inside your agent. Then set the following environment variables:

```bash bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGSMITH_TRACING="true"
export LANGSMITH_API_KEY="..."
```

```python python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

os.environ["LANGSMITH_TRACING"] = "true"
os.environ["LANGSMITH_API_KEY"] = getpass.getpass()
```

### Select an LLM

Select a chat model from LangChain's suite of integrations:

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
