# Build a semantic search engine with LangChain

Source: https://docs.langchain.com/oss/python/langchain/knowledge-base

## Overview

This tutorial will familiarize you with LangChain's [document loader](/oss/python/integrations/document_loaders), [embedding](/oss/python/integrations/embeddings), and [vector store](/oss/python/integrations/vectorstores) abstractions. These abstractions are designed to support retrieval of data--  from (vector) databases and other sources -- for integration with LLM workflows. They are important for applications that fetch data to be reasoned over as part of model inference, as in the case of retrieval-augmented generation, or [RAG](/oss/python/langchain/retrieval).

Here we will build a search engine over a PDF document. This will allow us to retrieve passages in the PDF that are similar to an input query. The guide also includes a minimal RAG implementation on top of the search engine.

### Concepts

This guide focuses on retrieval of text data. We will cover the following concepts:

- [Documents and document loaders](/oss/python/integrations/document_loaders);
- [Text splitters](/oss/python/integrations/splitters);
- [Embeddings](/oss/python/integrations/embeddings);
- [Vector stores](/oss/python/integrations/vectorstores) and [retrievers](/oss/python/integrations/retrievers).

## Setup

### Installation

This tutorial requires the `langchain-community` and `pypdf` packages:

```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install langchain-community pypdf
```

```bash conda theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
conda install langchain-community pypdf -c conda-forge
```

```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
uv add langchain-community pypdf
```

For more details, see our [Installation guide](/oss/python/langchain/install).

### LangSmith

Many of the applications you build with LangChain will contain multiple steps with multiple invocations of LLM calls.
As these applications get more and more complex, it becomes crucial to be able to inspect what exactly is going on inside your chain or agent.
The best way to do this is with [LangSmith](https://smith.langchain.com).

After you sign up at the link above, make sure to set your environment variables to start logging traces:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGSMITH_TRACING="true"
export LANGSMITH_API_KEY="..."
```

Or, if in a notebook, you can set them with:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

os.environ["LANGSMITH_TRACING"] = "true"
os.environ["LANGSMITH_API_KEY"] = getpass.getpass()
```

## 1. Documents and document loaders

LangChain implements a [Document](https://reference.langchain.com/python/langchain-core/documents/base/Document) abstraction, which is intended to represent a unit of text and associated metadata. It has three attributes:

- `page_content`: a string representing the content;
- `metadata`: a dict containing arbitrary metadata;
- `id`: (optional) a string identifier for the document.

The `metadata` attribute can capture information about the source of the document, its relationship to other documents, and other information. Note that an individual [`Document`](https://reference.langchain.com/python/langchain-core/documents/base/Document) object often represents a chunk of a larger document.

We can generate sample documents when desired:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_core.documents import Document

documents = [
    Document(
        page_content="Dogs are great companions, known for their loyalty and friendliness.",
        metadata={"source": "mammal-pets-doc"},
    ),
    Document(
        page_content="Cats are independent pets that often enjoy their own space.",
        metadata={"source": "mammal-pets-doc"},
    ),
]
```

However, the LangChain ecosystem implements [document loaders](/oss/python/integrations/document_loaders) that integrate with hundreds of common sources. This makes it easy to incorporate data from these sources into your AI application.

### Loading documents

Let's load a PDF into a sequence of [`Document`](https://reference.langchain.com/python/langchain-core/documents/base/Document) objects. [Here is a sample PDF](https://github.com/langchain-ai/langchain/blob/v0.3/docs/docs/example_data/nke-10k-2023.pdf) -- a 10-k filing for Nike from 2023. We can consult the LangChain documentation for [available PDF document loaders](/oss/python/integrations/document_loaders/#pdfs).

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_community.document_loaders import PyPDFLoader

file_path = "../example_data/nke-10k-2023.pdf"
loader = PyPDFLoader(file_path)

docs = loader.load()

print(len(docs))
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
107
```

`PyPDFLoader` loads one [`Document`](https://reference.langchain.com/python/langchain-core/documents/base/Document) object per PDF page. For each, we can easily access:

- The string content of the page;
- Metadata containing the file name and page number.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
print(f"{docs[0].page_content[:200]}\n")
print(docs[0].metadata)
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Table of Contents
UNITED STATES
SECURITIES AND EXCHANGE COMMISSION
Washington, D.C. 20549
FORM 10-K
(Mark One)
☑ ANNUAL REPORT PURSUANT TO SECTION 13 OR 15(D) OF THE SECURITIES EXCHANGE ACT OF 1934
FO

{'source': '../example_data/nke-10k-2023.pdf', 'page': 0}
```

### Splitting

For both information retrieval and downstream question-answering purposes, a page may be too coarse a representation. Our goal in the end will be to retrieve [`Document`](https://reference.langchain.com/python/langchain-core/documents/base/Document) objects that answer an input query, and further splitting our PDF will help ensure that the meanings of relevant portions of the document are not "washed out" by surrounding text.

We can use [text splitters](/oss/python/integrations/splitters) for this purpose. Here we will use a simple text splitter that partitions based on characters. We will split our documents into chunks of 1000 characters
with 200 characters of overlap between chunks. The overlap helps
mitigate the possibility of separating a statement from important
context related to it. We use the
`RecursiveCharacterTextSplitter`,
which will recursively split the document using common separators like
new lines until each chunk is the appropriate size. This is the
recommended text splitter for generic text use cases.

We set `add_start_index=True` so that the character index where each
split Document starts within the initial Document is preserved as
metadata attribute “start\_index”.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_text_splitters import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000, chunk_overlap=200, add_start_index=True
)
all_splits = text_splitter.split_documents(docs)

print(len(all_splits))
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
514
```

## 2. Embeddings

Vector search is a common way to store and search over unstructured data (such as unstructured text). The idea is to store numeric vectors that are associated with the text. Given a query, we can [embed](/oss/python/integrations/embeddings) it as a vector of the same dimension and use vector similarity metrics (such as cosine similarity) to identify related text.

LangChain supports embeddings from [dozens of providers](/oss/python/integrations/embeddings/). These models specify how text should be converted into a numeric vector. Let's select a model:

````
```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain-openai"
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

if not os.environ.get("OPENAI_API_KEY"):
    os.environ["OPENAI_API_KEY"] = getpass.getpass("Enter API key for OpenAI: ")

from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(model="text-embedding-3-large")
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain-openai"
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

if not os.environ.get("AZURE_OPENAI_API_KEY"):
    os.environ["AZURE_OPENAI_API_KEY"] = getpass.getpass("Enter API key for Azure: ")

from langchain_openai import AzureOpenAIEmbeddings

embeddings = AzureOpenAIEmbeddings(
    azure_endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],
    azure_deployment=os.environ["AZURE_OPENAI_DEPLOYMENT_NAME"],
    openai_api_version=os.environ["AZURE_OPENAI_API_VERSION"],
)
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-google-genai
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

if not os.environ.get("GOOGLE_API_KEY"):
    os.environ["GOOGLE_API_KEY"] = getpass.getpass("Enter API key for Google Gemini: ")

from langchain_google_genai import GoogleGenerativeAIEmbeddings

embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001")
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-google-vertexai
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai import VertexAIEmbeddings

embeddings = VertexAIEmbeddings(model="text-embedding-005")
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-aws
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_aws import BedrockEmbeddings

embeddings = BedrockEmbeddings(model_id="amazon.titan-embed-text-v2:0")
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-huggingface
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_huggingface import HuggingFaceEmbeddings

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2")
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-ollama
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_ollama import OllamaEmbeddings

embeddings = OllamaEmbeddings(model="llama3")
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-cohere
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

if not os.environ.get("COHERE_API_KEY"):
    os.environ["COHERE_API_KEY"] = getpass.getpass("Enter API key for Cohere: ")

from langchain_cohere import CohereEmbeddings

embeddings = CohereEmbeddings(model="embed-english-v3.0")
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-mistralai
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

if not os.environ.get("MISTRALAI_API_KEY"):
    os.environ["MISTRALAI_API_KEY"] = getpass.getpass("Enter API key for MistralAI: ")

from langchain_mistralai import MistralAIEmbeddings

embeddings = MistralAIEmbeddings(model="mistral-embed")
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-nomic
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

if not os.environ.get("NOMIC_API_KEY"):
    os.environ["NOMIC_API_KEY"] = getpass.getpass("Enter API key for Nomic: ")

from langchain_nomic import NomicEmbeddings

embeddings = NomicEmbeddings(model="nomic-embed-text-v1.5")
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-nvidia-ai-endpoints
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

if not os.environ.get("NVIDIA_API_KEY"):
    os.environ["NVIDIA_API_KEY"] = getpass.getpass("Enter API key for NVIDIA: ")

from langchain_nvidia_ai_endpoints import NVIDIAEmbeddings

embeddings = NVIDIAEmbeddings(model="NV-Embed-QA")
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-voyageai
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

if not os.environ.get("VOYAGE_API_KEY"):
    os.environ["VOYAGE_API_KEY"] = getpass.getpass("Enter API key for Voyage AI: ")

from langchain-voyageai import VoyageAIEmbeddings

embeddings = VoyageAIEmbeddings(model="voyage-3")
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-ibm
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

if not os.environ.get("WATSONX_APIKEY"):
    os.environ["WATSONX_APIKEY"] = getpass.getpass("Enter API key for IBM watsonx: ")

from langchain_ibm import WatsonxEmbeddings

embeddings = WatsonxEmbeddings(
    model_id="ibm/slate-125m-english-rtrvr",
    url="https://us-south.ml.cloud.ibm.com",
    project_id="",
)
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-core
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_core.embeddings import DeterministicFakeEmbedding

embeddings = DeterministicFakeEmbedding(size=4096)
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-isaacus
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

if not os.environ.get("ISAACUS_API_KEY"):
os.environ["ISAACUS_API_KEY"] = getpass.getpass("Enter API key for Isaacus: ")

from langchain_isaacus import IsaacusEmbeddings

embeddings = IsaacusEmbeddings(model="kanon-2-embedder")
```
````

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
vector_1 = embeddings.embed_query(all_splits[0].page_content)
vector_2 = embeddings.embed_query(all_splits[1].page_content)

assert len(vector_1) == len(vector_2)
print(f"Generated vectors of length {len(vector_1)}\n")
print(vector_1[:10])
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Generated vectors of length 1536

[-0.008586574345827103, -0.03341241180896759, -0.008936782367527485, -0.0036674530711025, 0.010564599186182022, 0.009598285891115665, -0.028587326407432556, -0.015824200585484505, 0.0030416189692914486, -0.012899317778646946]
```

Armed with a model for generating text embeddings, we can next store them in a special data structure that supports efficient similarity search.

## 3. Vector stores

LangChain [VectorStore](https://reference.langchain.com/python/langchain-core/vectorstores/base/VectorStore) objects contain methods for adding text and [`Document`](https://reference.langchain.com/python/langchain-core/documents/base/Document) objects to the store, and querying them using various similarity metrics. They are often initialized with [embedding](/oss/python/integrations/embeddings) models, which determine how text data is translated to numeric vectors.

LangChain includes a suite of [integrations](/oss/python/integrations/vectorstores) with different vector store technologies. Some vector stores are hosted by a provider (e.g., various cloud providers) and require specific credentials to use; some (such as [Postgres](/oss/python/integrations/vectorstores/pgvector)) run in separate infrastructure that can be run locally or via a third-party; others can run in-memory for lightweight workloads. Let's select a vector store:

````
```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain-core"
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_core.vectorstores import InMemoryVectorStore

vector_store = InMemoryVectorStore(embeddings)
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU  boto3
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from opensearchpy import RequestsHttpConnection

service = "es"  # must set the service as 'es'
region = "us-east-2"
credentials = boto3.Session(
    aws_access_key_id="xxxxxx", aws_secret_access_key="xxxxx"
).get_credentials()
awsauth = AWS4Auth("xxxxx", "xxxxxx", region, service, session_token=credentials.token)

vector_store = OpenSearchVectorSearch.from_documents(
    docs,
    embeddings,
    opensearch_url="host url",
    http_auth=awsauth,
    timeout=300,
    use_ssl=True,
    verify_certs=True,
    connection_class=RequestsHttpConnection,
    index_name="test-index",
)
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langchain-astradb"
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_astradb import AstraDBVectorStore

vector_store = AstraDBVectorStore(
    embedding=embeddings,
    api_endpoint=ASTRA_DB_API_ENDPOINT,
    collection_name="astra_vector_langchain",
    token=ASTRA_DB_APPLICATION_TOKEN,
    namespace=ASTRA_DB_NAMESPACE,
)
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-chroma
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_chroma import Chroma

vector_store = Chroma(
    collection_name="example_collection",
    embedding_function=embeddings,
    persist_directory="./chroma_langchain_db",  # Where to save data locally, remove if not necessary
)
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-community faiss-cpu
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import faiss
from langchain_community.docstore.in_memory import InMemoryDocstore
from langchain_community.vectorstores import FAISS

embedding_dim = len(embeddings.embed_query("hello world"))
index = faiss.IndexFlatL2(embedding_dim)

vector_store = FAISS(
    embedding_function=embeddings,
    index=index,
    docstore=InMemoryDocstore(),
    index_to_docstore_id={},
)
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-milvus
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_milvus import Milvus

URI = "./milvus_example.db"

vector_store = Milvus(
    embedding_function=embeddings,
    connection_args={"uri": URI},
    index_params={"index_type": "FLAT", "metric_type": "L2"},
)
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-mongodb
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_mongodb import MongoDBAtlasVectorSearch

vector_store = MongoDBAtlasVectorSearch(
    embedding=embeddings,
    collection=MONGODB_COLLECTION,
    index_name=ATLAS_VECTOR_SEARCH_INDEX_NAME,
    relevance_score_fn="cosine",
)
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-postgres
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_postgres import PGVector

vector_store = PGVector(
    embeddings=embeddings,
    collection_name="my_docs",
    connection="postgresql+psycopg://...",
)
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-postgres
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_postgres import PGEngine, PGVectorStore

pg_engine = PGEngine.from_connection_string(
    url="postgresql+psycopg://..."
)

vector_store = PGVectorStore.create_sync(
    engine=pg_engine,
    table_name='test_table',
    embedding_service=embeddings
)
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-pinecone
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_pinecone import PineconeVectorStore
from pinecone import Pinecone

pc = Pinecone(api_key=...)
index = pc.Index(index_name)

vector_store = PineconeVectorStore(embedding=embeddings, index=index)
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-qdrant
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from qdrant_client.models import Distance, VectorParams
from langchain_qdrant import QdrantVectorStore
from qdrant_client import QdrantClient

client = QdrantClient(":memory:")

vector_size = len(embeddings.embed_query("sample text"))

if not client.collection_exists("test"):
    client.create_collection(
        collection_name="test",
        vectors_config=VectorParams(size=vector_size, distance=Distance.COSINE)
    )
vector_store = QdrantVectorStore(
    client=client,
    collection_name="test",
    embedding=embeddings,
)
```
````

Having instantiated our vector store, we can now index the documents.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
ids = vector_store.add_documents(documents=all_splits)
```

Note that most vector store implementations will allow you to connect to an existing vector store--  e.g., by providing a client, index name, or other information. See the documentation for a specific [integration](/oss/python/integrations/vectorstores) for more detail.

Once we've instantiated a [`VectorStore`](https://reference.langchain.com/python/langchain-core/vectorstores/base/VectorStore) that contains documents, we can query it. [VectorStore](https://reference.langchain.com/python/langchain-core/vectorstores/base/VectorStore) includes methods for querying:

- Synchronously and asynchronously;
- By string query and by vector;
- With and without returning similarity scores;
- By similarity and [maximum marginal relevance](https://reference.langchain.com/python/langchain-core/vectorstores/base/VectorStore/max_marginal_relevance_search) (to balance similarity with query to diversity in retrieved results).

The methods will generally include a list of [Document](https://reference.langchain.com/python/langchain-core/documents/base/Document) objects in their outputs.

**Usage**

Embeddings typically represent text as a "dense" vector such that texts with similar meanings are geometrically close. This lets us retrieve relevant information just by passing in a question, without knowledge of any specific key-terms used in the document.

Return documents based on similarity to a string query:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
results = vector_store.similarity_search(
    "How many distribution centers does Nike have in the US?"
)

print(results[0])
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
page_content='direct to consumer operations sell products through the following number of retail stores in the United States:
U.S. RETAIL STORES NUMBER
NIKE Brand factory stores 213
NIKE Brand in-line stores (including employee-only stores) 74
Converse stores (including factory stores) 82
TOTAL 369
In the United States, NIKE has eight significant distribution centers. Refer to Item 2. Properties for further information.
2023 FORM 10-K 2' metadata={'page': 4, 'source': '../example_data/nke-10k-2023.pdf', 'start_index': 3125}
```

Async query:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
results = await vector_store.asimilarity_search("When was Nike incorporated?")

print(results[0])
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
page_content='Table of Contents
PART I
ITEM 1. BUSINESS
GENERAL
NIKE, Inc. was incorporated in 1967 under the laws of the State of Oregon. As used in this Annual Report on Form 10-K (this "Annual Report"), the terms "we," "us," "our,"
"NIKE" and the "Company" refer to NIKE, Inc. and its predecessors, subsidiaries and affiliates, collectively, unless the context indicates otherwise.
Our principal business activity is the design, development and worldwide marketing and selling of athletic footwear, apparel, equipment, accessories and services. NIKE is
the largest seller of athletic footwear and apparel in the world. We sell our products through NIKE Direct operations, which are comprised of both NIKE-owned retail stores
and sales through our digital platforms (also referred to as "NIKE Brand Digital"), to retail accounts and to a mix of independent distributors, licensees and sales' metadata={'page': 3, 'source': '../example_data/nke-10k-2023.pdf', 'start_index': 0}
```

Return scores:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Note that providers implement different scores; the score here
# is a distance metric that varies inversely with similarity.

results = vector_store.similarity_search_with_score("What was Nike's revenue in 2023?")
doc, score = results[0]
print(f"Score: {score}\n")
print(doc)
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Score: 0.23699893057346344

page_content='Table of Contents
FISCAL 2023 NIKE BRAND REVENUE HIGHLIGHTS
The following tables present NIKE Brand revenues disaggregated by reportable operating segment, distribution channel and major product line:
FISCAL 2023 COMPARED TO FISCAL 2022
•NIKE, Inc. Revenues were $51.2 billion in fiscal 2023, which increased 10% and 16% compared to fiscal 2022 on a reported and currency-neutral basis, respectively.
The increase was due to higher revenues in North America, Europe, Middle East & Africa ("EMEA"), APLA and Greater China, which contributed approximately 7, 6,
2 and 1 percentage points to NIKE, Inc. Revenues, respectively.
•NIKE Brand revenues, which represented over 90% of NIKE, Inc. Revenues, increased 10% and 16% on a reported and currency-neutral basis, respectively. This
increase was primarily due to higher revenues in Men's, the Jordan Brand, Women's and Kids' which grew 17%, 35%,11% and 10%, respectively, on a wholesale
equivalent basis.' metadata={'page': 35, 'source': '../example_data/nke-10k-2023.pdf', 'start_index': 0}
```

Return documents based on similarity to an embedded query:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
embedding = embeddings.embed_query("How were Nike's margins impacted in 2023?")

results = vector_store.similarity_search_by_vector(embedding)
print(results[0])
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
page_content='Table of Contents
GROSS MARGIN
FISCAL 2023 COMPARED TO FISCAL 2022
For fiscal 2023, our consolidated gross profit increased 4% to $22,292 million compared to $21,479 million for fiscal 2022. Gross margin decreased 250 basis points to
43.5% for fiscal 2023 compared to 46.0% for fiscal 2022 due to the following:
*Wholesale equivalent
The decrease in gross margin for fiscal 2023 was primarily due to:
•Higher NIKE Brand product costs, on a wholesale equivalent basis, primarily due to higher input costs and elevated inbound freight and logistics costs as well as
product mix;
•Lower margin in our NIKE Direct business, driven by higher promotional activity to liquidate inventory in the current period compared to lower promotional activity in
the prior period resulting from lower available inventory supply;
•Unfavorable changes in net foreign currency exchange rates, including hedges; and
•Lower off-price margin, on a wholesale equivalent basis.
This was partially offset by:' metadata={'page': 36, 'source': '../example_data/nke-10k-2023.pdf', 'start_index': 0}
```

Learn more:

- [API Reference](https://reference.langchain.com/python/langchain-core/vectorstores/base/VectorStore)
- [Integration-specific docs](/oss/python/integrations/vectorstores)

## 4. Retrievers

LangChain [`VectorStore`](https://reference.langchain.com/python/langchain-core/vectorstores/base/VectorStore) objects do not subclass [Runnable](https://reference.langchain.com/python/langchain-core/runnables/base/Runnable). LangChain [Retrievers](https://reference.langchain.com/python/langchain-core/retrievers/BaseRetriever) are Runnables, so they implement a standard set of methods (e.g., synchronous and asynchronous `invoke` and `batch` operations). Although we can construct retrievers from vector stores, retrievers can interface with non-vector store sources of data, as well (such as external APIs).

We can create a simple version of this ourselves, without subclassing `Retriever`. If we choose what method we wish to use to retrieve documents, we can create a runnable easily. Below we will build one around the `similarity_search` method:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing import List

from langchain_core.documents import Document
from langchain_core.runnables import chain


@chain
def retriever(query: str) -> List[Document]:
    return vector_store.similarity_search(query, k=1)


retriever.batch(
    [
        "How many distribution centers does Nike have in the US?",
        "When was Nike incorporated?",
    ],
)
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
[[Document(metadata={'page': 4, 'source': '../example_data/nke-10k-2023.pdf', 'start_index': 3125}, page_content='direct to consumer operations sell products through the following number of retail stores in the United States:\nU.S. RETAIL STORES NUMBER\nNIKE Brand factory stores 213 \nNIKE Brand in-line stores (including employee-only stores) 74 \nConverse stores (including factory stores) 82 \nTOTAL 369 \nIn the United States, NIKE has eight significant distribution centers. Refer to Item 2. Properties for further information.\n2023 FORM 10-K 2')],
 [Document(metadata={'page': 3, 'source': '../example_data/nke-10k-2023.pdf', 'start_index': 0}, page_content='Table of Contents\nPART I\nITEM 1. BUSINESS\nGENERAL\nNIKE, Inc. was incorporated in 1967 under the laws of the State of Oregon. As used in this Annual Report on Form 10-K (this "Annual Report"), the terms "we," "us," "our,"\n"NIKE" and the "Company" refer to NIKE, Inc. and its predecessors, subsidiaries and affiliates, collectively, unless the context indicates otherwise.\nOur principal business activity is the design, development and worldwide marketing and selling of athletic footwear, apparel, equipment, accessories and services. NIKE is\nthe largest seller of athletic footwear and apparel in the world. We sell our products through NIKE Direct operations, which are comprised of both NIKE-owned retail stores\nand sales through our digital platforms (also referred to as "NIKE Brand Digital"), to retail accounts and to a mix of independent distributors, licensees and sales')]]
```

Vectorstores implement an `as_retriever` method that will generate a Retriever, specifically a [`VectorStoreRetriever`](https://python.langchain.com/api_reference/core/vectorstores/langchain_core.vectorstores.base.VectorStoreRetriever.html). These retrievers include specific `search_type` and `search_kwargs` attributes that identify what methods of the underlying vector store to call, and how to parameterize them. For instance, we can replicate the above with the following:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
retriever = vector_store.as_retriever(
    search_type="similarity",
    search_kwargs={"k": 1},
)

retriever.batch(
    [
        "How many distribution centers does Nike have in the US?",
        "When was Nike incorporated?",
    ],
)
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
[[Document(metadata={'page': 4, 'source': '../example_data/nke-10k-2023.pdf', 'start_index': 3125}, page_content='direct to consumer operations sell products through the following number of retail stores in the United States:\nU.S. RETAIL STORES NUMBER\nNIKE Brand factory stores 213 \nNIKE Brand in-line stores (including employee-only stores) 74 \nConverse stores (including factory stores) 82 \nTOTAL 369 \nIn the United States, NIKE has eight significant distribution centers. Refer to Item 2. Properties for further information.\n2023 FORM 10-K 2')],
 [Document(metadata={'page': 3, 'source': '../example_data/nke-10k-2023.pdf', 'start_index': 0}, page_content='Table of Contents\nPART I\nITEM 1. BUSINESS\nGENERAL\nNIKE, Inc. was incorporated in 1967 under the laws of the State of Oregon. As used in this Annual Report on Form 10-K (this "Annual Report"), the terms "we," "us," "our,"\n"NIKE" and the "Company" refer to NIKE, Inc. and its predecessors, subsidiaries and affiliates, collectively, unless the context indicates otherwise.\nOur principal business activity is the design, development and worldwide marketing and selling of athletic footwear, apparel, equipment, accessories and services. NIKE is\nthe largest seller of athletic footwear and apparel in the world. We sell our products through NIKE Direct operations, which are comprised of both NIKE-owned retail stores\nand sales through our digital platforms (also referred to as "NIKE Brand Digital"), to retail accounts and to a mix of independent distributors, licensees and sales')]]
```

`VectorStoreRetriever` supports search types of `"similarity"` (default), `"mmr"` (maximum marginal relevance, described above), and `"similarity_score_threshold"`. We can use the latter to threshold documents output by the retriever by similarity score.

Retrievers can easily be incorporated into more complex applications, such as [retrieval-augmented generation (RAG)](/oss/python/langchain/retrieval) applications that combine a given question with retrieved context into a prompt for a LLM. To learn more about building such an application, check out the [RAG tutorial](/oss/python/langchain/rag) tutorial.

## Next steps

You've now seen how to build a semantic search engine over a PDF document.

For more on document loaders:

- [Overview](/oss/python/langchain/retrieval)
- [Available integrations](/oss/python/integrations/document_loaders/)

For more on embeddings:

- [Overview](/oss/python/langchain/retrieval)
- [Available integrations](/oss/python/integrations/embeddings/)

For more on vector stores:

- [Overview](/oss/python/langchain/retrieval)
- [Available integrations](/oss/python/integrations/vectorstores/)

For more on RAG, see:

- [Build a Retrieval Augmented Generation (RAG) App](/oss/python/langchain/rag/)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/knowledge-base.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
