# Google integrations

Source: https://docs.langchain.com/oss/python/integrations/providers/google

Integrate with Google using LangChain Python.

This page covers all LangChain integrations with [Google Gemini](https://ai.google.dev/gemini-api/docs), [Google Cloud](https://cloud.google.com/), and other Google products (such as Google Maps, YouTube, and [more](#other-google-products)).

**Unified SDK & package consolidation**

As of `langchain-google-genai` 4.0.0, this package uses the consolidated [`google-genai`](https://googleapis.github.io/python-genai/) SDK and now supports **both the Gemini Developer API and Vertex AI** backends.

The `langchain-google-vertexai` package remains supported for Vertex AI platform-specific features (Model Garden, Vector Search, evaluation services, etc.).

Read the [full announcement and migration guide](https://github.com/langchain-ai/langchain-google/discussions/1422).

Not sure which package to use?

```
Access Google Gemini models via the **[Gemini Developer API](https://ai.google.dev/)** or **[Vertex AI](https://cloud.google.com/vertex-ai)**. The backend is selected automatically based on your configuration.

* **Gemini Developer API**: Quick setup with API key, ideal for individual developers and rapid prototyping
* **Vertex AI**: Enterprise features with Google Cloud integration (requires GCP project)

Use the `langchain-google-genai` package for chat models, LLMs, and embeddings.

[See integrations.](#google-generative-ai)



Access Vertex AI platform-specific services beyond Gemini models: Model Garden (Llama, Mistral, Anthropic), evaluation services, and specialized vision models.

Use the `langchain-google-vertexai` package for platform services and specific packages (e.g., `langchain-google-community`, `langchain-google-cloud-sql-pg`) for other cloud services like databases and storage.

[See integrations.](#google-cloud)
```

See Google's guide on [migrating from the Gemini API to Vertex AI](https://ai.google.dev/gemini-api/docs/migrate-to-cloud) for more details on the differences.

***

## Google Generative AI

Access Google Gemini models via the [Gemini Developer API](https://ai.google.dev/gemini-api/docs) or [Vertex AI](https://cloud.google.com/vertex-ai) using the unified `langchain-google-genai` package.

### Chat models

```
Google Gemini chat models via **Gemini Developer API** or **Vertex AI**.
```

### LLMs

```
Gemini models using the (legacy) LLM text completion interface.
```

### Embedding models

```
Gemini embedding models via **Gemini Developer API** or **Vertex AI**.
```

***

## Google Cloud

Access Vertex AI platform-specific services including Model Garden (Llama, Mistral, Anthropic), Vector Search, evaluation services, and specialized vision models.

**For Gemini models**, use [`ChatGoogleGenerativeAI`](/oss/python/integrations/chat/google_generative_ai) from `langchain-google-genai`. The classes below focus on **Vertex AI platform services** not available in the consolidated SDK.

### Chat models

````
Anthropic on Vertex AI Model Garden





**Deprecated**—Use [`ChatGoogleGenerativeAI`](/oss/python/integrations/chat/google_generative_ai) for Gemini models instead.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai import ChatVertexAI
```



Llama on Vertex AI Model Garden

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.model_garden_maas.llama import VertexModelGardenLlama
```



Mistral on Vertex AI Model Garden

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.model_garden_maas.mistral import VertexModelGardenMistral
```



Local Gemma model loaded from HuggingFace.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.gemma import GemmaChatLocalHF
```



Local Gemma model loaded from Kaggle.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.gemma import GemmaChatLocalKaggle
```



Gemma on Vertex AI Model Garden

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.gemma import GemmaChatVertexAIModelGarden
```



Image captioning model as a chat interface.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.vision_models import VertexAIImageCaptioningChat
```



Edit images given a prompt. Currently supports mask-free editing only.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.vision_models import VertexAIImageEditorChat
```



Generate images from a prompt.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.vision_models import VertexAIImageGeneratorChat
```



Visual question answering model as a chat interface.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.vision_models import VertexAIVisualQnAChat
```
````

### LLMs

(Legacy) string-in, string-out LLM interface.

````
Hundreds of OSS models via Vertex AI Model Garden.





**Deprecated**—Use [`GoogleGenerativeAI`](/oss/python/integrations/llms/google_generative_ai) for Gemini models instead.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai import VertexAI
```



Local Gemma model loaded from HuggingFace.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.gemma import GemmaLocalHF
```



Local Gemma model loaded from Kaggle.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.gemma import GemmaLocalKaggle
```



```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.gemma import GemmaVertexAIModelGarden
```



Image captioning model as an LLM interface.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.vision_models import VertexAIImageCaptioning
```
````

### Embedding models

````
**Deprecated**—Use [`GoogleGenerativeAIEmbeddings`](/oss/python/integrations/embeddings/google_generative_ai) instead.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai import VertexAIEmbeddings
```
````

### Document loaders

```
PostgreSQL-compatible database on Google Cloud.



Serverless data warehouse.



Key-value and wide-column store for structured and semi-structured data.



Managed MySQL database.



Managed SQL Server database.



Managed PostgreSQL database.



Load documents from a GCS bucket directory.



Load a single document from GCS.



Oracle databases on Kubernetes via El Carro.



NoSQL document database.



Firestore in Datastore mode.



Managed Redis service.



Globally distributed relational database.



Transcribe audio files.
```

Load data using Google Cloud Vision API.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_community.vision import CloudVisionLoader
```

### Document transformers

```
Extract structured data from unstructured documents.



Translate text and HTML via Cloud Translation API.
```

### Vector stores

Store and search vectors using Google Cloud databases and Vertex AI Vector Search.

```
PostgreSQL-compatible vector store on AlloyDB.



Semantic search using GoogleSQL with vector indexes.



Vector store on Memorystore for Redis.



Vector store on Cloud Spanner.



Vector store on Cloud Bigtable.



Vector store on Firestore.



Vector store on Cloud SQL for MySQL.



Vector store on Cloud SQL for PostgreSQL.



Formerly known as Vertex AI Matching Engine, provides a low latency vector database. These vector databases are commonly referred to as vector similarity-matching or an approximate nearest neighbor (ANN) service.



Vector search with Datastore for document storage.
```

### Retrievers

```
Generative AI powered search via Vertex AI Search.



Search, store, and manage documents using Document AI Warehouse.
```

```python Other retrievers theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_community import VertexAIMultiTurnSearchRetriever
from langchain_google_community import VertexAISearchRetriever
from langchain_google_community import VertexAISearchSummaryTool
```

### Tools

Integrate agents with various Google Cloud services.

```
Synthesize natural-sounding speech with 100+ voices.
```

### Callbacks

Track LLM/Chat model usage.

````
Track `VertexAI` usage info.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.callbacks import VertexAICallbackHandler
```



See the [documentation](/oss/python/integrations/callbacks/google_bigquery) for more details.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_community.callbacks.bigquery_callback import BigQueryCallbackHandler
```
````

### Evaluators

Evaluate model outputs using Vertex AI.

````
Pair-wise evaluation using Vertex AI models.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.evaluators.evaluation import VertexPairWiseStringEvaluator
```



Single prediction evaluation using Vertex AI models.

```python wrap theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai.evaluators.evaluation import VertexStringEvaluator
```
````

***

## Other Google products

Integrations with various Google services beyond the core Cloud Platform.

### Document loaders

```
Load files from Google Drive. Currently supports Google Docs.
```

### Vector stores

```
Efficient local vector similarity search at scale.
```

### Retrievers

```
Retrieve documents from Google Drive.
```

### Tools

```
Web search via Google Custom Search Engine (CSE).



Interact with Google Drive.



Query financial data.



Query job listings.



Visual searches.



Search for places.



Search academic papers.



Query Google Trends data.
```

### MCP

```
Connect to databases including Cloud SQL and AlloyDB.
```

### Toolkits

```
Create, search, and send emails via the Gmail API.
```

### Chat loaders

```
Load chat history from Gmail threads.
```

***

## 3rd party integrations

Access Google services via unofficial third-party APIs.

### Search

```
API access to Google search results, YouTube, and more.



API access to Google search results.



API access to Google search results.



Google Search results with AI Overview support.
```

### YouTube

```
Search YouTube videos without the official API.



Download audio from YouTube videos.



Load video transcripts.
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/python/integrations/providers/google.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Groq integrations

Source: https://docs.langchain.com/oss/python/integrations/providers/groq

Integrate with Groq using LangChain Python.

This page makes reference to [Groq](https://console.groq.com/docs/overview), an AI hardware and software company. For information on how to use Grok models (provided by [xAI](https://docs.x.ai/docs/overview)), see the [xAI provider page](/oss/python/integrations/providers/xai).

## Model interfaces

```
Interface to chat models hosted on the Groq platform.
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/python/integrations/providers/groq.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
