# Vector store integrations

Source: https://docs.langchain.com/oss/python/integrations/vectorstores/index

Integrate with vector stores using LangChain Python.

## Overview

A vector stores [embedded](/oss/python/integrations/embeddings) data and performs similarity search.

```mermaid theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
flowchart LR

    subgraph "📥 Indexing phase (store)"
        A[📄 Documents] --> B[🔢 Embedding model]
        B --> C[🔘 Embedding vectors]
        C --> D[(Vector store)]
    end

    subgraph "📤 Query phase (retrieval)"
        E[❓ Query text] --> F[🔢 Embedding model]
        F --> G[🔘 Query vector]
        G --> H[🔍 Similarity search]
        H --> D
        D --> I[📄 Top-k results]
    end

    classDef process fill:#DBEAFE,stroke:#2563EB,stroke-width:2px,color:#1E3A8A
    class A,B,C,D,E,F,G,H,I process
```

### Interface

LangChain provides a unified interface for vector stores, allowing you to:

- `add_documents` - Add documents to the store.
- `delete` - Remove stored documents by ID.
- `similarity_search` - Query for semantically similar documents.

This abstraction lets you switch between different implementations without altering your application logic.

### Initialization

To initialize a vector store, provide it with an embedding model:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_core.vectorstores import InMemoryVectorStore
vector_store = InMemoryVectorStore(embedding=SomeEmbeddingModel())
```

### Adding documents

Add [`Document`](https://reference.langchain.com/python/langchain-core/documents/base/Document) objects (holding `page_content` and optional metadata) like so:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
vector_store.add_documents(documents=[doc1, doc2], ids=["id1", "id2"])
```

### Deleting documents

Delete by specifying IDs:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
vector_store.delete(ids=["id1"])
```

### Similarity search

Issue a semantic query using `similarity_search`, which returns the closest embedded documents:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
similar_docs = vector_store.similarity_search("your query here")
```

Many vector stores support parameters like:

- `k` — number of results to return
- `filter` — conditional filtering based on metadata

### Similarity metrics & indexing

Embedding similarity may be computed using:

- **Cosine similarity**
- **Euclidean distance**
- **Dot product**

Efficient search often employs indexing methods such as HNSW (Hierarchical Navigable Small World), though specifics depend on the vector store.

### Metadata filtering

Filtering by metadata (e.g., source, date) can refine search results:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
vector_store.similarity_search(
  "query",
  k=3,
  filter={"source": "tweets"}
)
```

Support for metadata-based filtering varies between implementations.
Check the documentation of your chosen vector store for details.

## Top integrations

**Select embedding model:**

````
  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU langchain-openai
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-openai
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

if not os.environ.get("OPENAI_API_KEY"):
  os.environ["OPENAI_API_KEY"] = getpass.getpass("Enter API key for OpenAI: ")

from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(model="text-embedding-3-large")
```



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-azure-ai
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



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
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



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-google-vertexai
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_google_vertexai import VertexAIEmbeddings

embeddings = VertexAIEmbeddings(model="text-embedding-005")
```



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-aws
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_aws import BedrockEmbeddings

embeddings = BedrockEmbeddings(model_id="amazon.titan-embed-text-v2:0")
```



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-huggingface
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_huggingface import HuggingFaceEmbeddings

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2")
```



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-ollama
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_ollama import OllamaEmbeddings

embeddings = OllamaEmbeddings(model="llama3")
```



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
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



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
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



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
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



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
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



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
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



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
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



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-core
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_core.embeddings import DeterministicFakeEmbedding

embeddings = DeterministicFakeEmbedding(size=4096)
```



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-xai
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

if not os.environ.get("XAI_API_KEY"):
  os.environ["XAI_API_KEY"] = getpass.getpass("Enter API key for xAI: ")

from langchain.chat_models import init_chat_model

model = init_chat_model("grok-2", model_provider="xai")
```



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-perplexity
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

if not os.environ.get("PPLX_API_KEY"):
  os.environ["PPLX_API_KEY"] = getpass.getpass("Enter API key for Perplexity: ")

from langchain.chat_models import init_chat_model

model = init_chat_model("llama-3.1-sonar-small-128k-online", model_provider="perplexity")
```



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-deepseek
```

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import getpass
import os

if not os.environ.get("DEEPSEEK_API_KEY"):
  os.environ["DEEPSEEK_API_KEY"] = getpass.getpass("Enter API key for DeepSeek: ")

from langchain.chat_models import init_chat_model

model = init_chat_model("deepseek-chat", model_provider="deepseek")
```
````

**Select vector store:**

````
  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU langchain-core
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-core
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_core.vectorstores import InMemoryVectorStore

vector_store = InMemoryVectorStore(embeddings)
```



```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU boto3
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




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU langchain-astradb
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-astradb
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




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU langchain-azure-ai azure-cosmos
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-azure-ai
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_azure_ai.vectorstores.azure_cosmos_db_no_sql import (
    AzureCosmosDBNoSqlVectorSearch,
)
vector_search = AzureCosmosDBNoSqlVectorSearch.from_documents(
    documents=docs,
    embedding=openai_embeddings,
    cosmos_client=cosmos_client,
    database_name=database_name,
    container_name=container_name,
    vector_embedding_policy=vector_embedding_policy,
    full_text_policy=full_text_policy,
    indexing_policy=indexing_policy,
    cosmos_container_properties=cosmos_container_properties,
    cosmos_database_properties={},
    full_text_search_enabled=True,
)
```




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU langchain-azure-ai pymongo
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add pymongo
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_azure_ai.vectorstores.azure_cosmos_db_mongo_vcore import (
    AzureCosmosDBMongoVCoreVectorSearch,
)

vectorstore = AzureCosmosDBMongoVCoreVectorSearch.from_documents(
    docs,
    openai_embeddings,
    collection=collection,
    index_name=INDEX_NAME,
)
```




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU langchain-chroma
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-chroma
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_chroma import Chroma

vector_store = Chroma(
    collection_name="example_collection",
    embedding_function=embeddings,
    persist_directory="./chroma_langchain_db",  # Where to save data locally, remove if not necessary
)
```




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU langchain-cockroachdb
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-cockroachdb
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_cockroachdb import AsyncCockroachDBVectorStore, CockroachDBEngine

CONNECTION_STRING = "cockroachdb://user:pass@host:26257/db?sslmode=verify-full"

engine = CockroachDBEngine.from_connection_string(CONNECTION_STRING)
await engine.ainit_vectorstore_table(
    table_name="vectors",
    vector_dimension=1536,
)

vector_store = AsyncCockroachDBVectorStore(
    engine=engine,
    embeddings=embeddings,
    collection_name="vectors",
)
```



Install the package and start Elasticsearch locally using the [start-local](https://github.com/elastic/start-local) script:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-elasticsearch
curl -fsSL https://elastic.co/start-local | sh
```

This creates an `elastic-start-local` folder. To start Elasticsearch:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
cd elastic-start-local
./start.sh
```

Elasticsearch will be available at `http://localhost:9200`. The password for the `elastic` user and API key are stored in the `.env` file in the `elastic-start-local` folder.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_elasticsearch import ElasticsearchStore

vector_store = ElasticsearchStore(
    index_name="langchain-demo",
    embedding=embeddings,
    es_url="http://localhost:9200",
)
```



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -qU langchain-community
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




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU langchain-milvus
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-milvus
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



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
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




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU langchain-postgres
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-postgres
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_postgres import PGVector

vector_store = PGVector(
    embeddings=embeddings,
    collection_name="my_docs",
    connection="postgresql+psycopg://..."
)
```




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU langchain-postgres
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-postgres
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_postgres import PGEngine, PGVectorStore

$engine = PGEngine.from_connection_string(
    url="postgresql+psycopg://..."
)

vector_store = PGVectorStore.create_sync(
    engine=pg_engine,
    table_name='test_table',
    embedding_service=embedding
)
```




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU langchain-pinecone
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-pinecone
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_pinecone import PineconeVectorStore
from pinecone import Pinecone

pc = Pinecone(api_key=...)
index = pc.Index(index_name)

vector_store = PineconeVectorStore(embedding=embeddings, index=index)
```




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU langchain-qdrant
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-qdrant
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




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU langchain-oracledb
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-oracledb
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import oracledb
from langchain_oracledb.vectorstores import OracleVS
from langchain_oracledb.vectorstores.oraclevs import create_index
from langchain_community.vectorstores.utils import DistanceStrategy

username = ""
password = ""
dsn = ":/<service_name>"

connection = oracledb.connect(user=username, password=password, dsn=dsn)

vector_store = OracleVS(
    client=connection,
    embedding_function=embedding_model,
    table_name="VECTOR_SEARCH_DEMO",
    distance_strategy=DistanceStrategy.EUCLIDEAN_DISTANCE
)
```




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU langchain-turbopuffer
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-turbopuffer
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_turbopuffer import TurbopufferVectorStore
from turbopuffer import Turbopuffer

tpuf = Turbopuffer(region="gcp-us-central1")
ns = tpuf.namespace("langchain-test")

vector_store = TurbopufferVectorStore(embedding=embeddings, namespace=ns)
```




  ```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pip install -qU "langchain-aws[valkey]"
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv add langchain-aws --extra valkey
  ```


```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_aws.vectorstores import ValkeyVectorStore

vector_store = ValkeyVectorStore(
    embedding=embeddings,
    valkey_url="valkey://localhost:6379",
    index_name="my_index"
)
```
````

| Vectorstore                                                                                                                                          | Delete by ID | Filtering | Search by Vector | Search with score | Async | Passes Standard Tests | Multi Tenancy | IDs in add Documents |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------- | ---------------- | ----------------- | ----- | --------------------- | ------------- | -------------------- |
| [`AstraDBVectorStore`](/oss/python/integrations/vectorstores/astradb)                                                                                | ✅            | ✅         | ✅                | ✅                 | ✅     | ✅                     | ✅             | ✅                    |
| [`AzureCosmosDBNoSqlVectorStore`](/oss/python/integrations/vectorstores/azure_cosmos_db_no_sql)                                                      | ✅            | ✅         | ✅                | ✅                 | ❌     | ✅                     | ✅             | ✅                    |
| [`AzureCosmosDBMongoVCoreVectorStore`](/oss/python/integrations/vectorstores/azure_cosmos_db_mongo_vcore)                                            | ✅            | ✅         | ✅                | ✅                 | ❌     | ✅                     | ✅             | ✅                    |
| [`Chroma`](/oss/python/integrations/vectorstores/chroma)                                                                                             | ✅            | ✅         | ✅                | ✅                 | ✅     | ✅                     | ✅             | ✅                    |
| [`Clickhouse`](/oss/python/integrations/vectorstores/clickhouse)                                                                                     | ✅            | ✅         | ❌                | ✅                 | ❌     | ❌                     | ❌             | ✅                    |
| [`AsyncCockroachDBVectorStore`](/oss/python/integrations/vectorstores/cockroachdb)                                                                   | ✅            | ✅         | ✅                | ✅                 | ✅     | ✅                     | ✅             | ✅                    |
| [`CouchbaseSearchVectorStore`](/oss/python/integrations/vectorstores/couchbase)                                                                      | ✅            | ✅         | ✅                | ✅                 | ✅     | ❌                     | ✅             | ✅                    |
| [`DatabricksVectorSearch`](/oss/python/integrations/vectorstores/databricks_vector_search)                                                           | ✅            | ✅         | ✅                | ✅                 | ✅     | ❌                     | ❌             | ✅                    |
| [`ElasticsearchStore`](/oss/python/integrations/vectorstores/elasticsearch)                                                                          | ✅            | ✅         | ✅                | ✅                 | ✅     | ❌                     | ❌             | ✅                    |
| [`FAISS`](/oss/python/integrations/vectorstores/faiss)                                                                                               | ✅            | ✅         | ✅                | ✅                 | ✅     | ❌                     | ❌             | ✅                    |
| [`InMemoryVectorStore`](https://python.langchain.com/api_reference/core/vectorstores/langchain_core.vectorstores.in_memory.InMemoryVectorStore.html) | ✅            | ✅         | ❌                | ✅                 | ✅     | ❌                     | ❌             | ✅                    |
| [`LambdaDB`](/oss/python/integrations/vectorstores/lambdadb)                                                                                         | ✅            | ✅         | ✅                | ✅                 | ✅     | ✅                     | ❌             | ✅                    |
| [`Milvus`](/oss/python/integrations/vectorstores/milvus)                                                                                             | ✅            | ✅         | ✅                | ✅                 | ✅     | ✅                     | ✅             | ✅                    |
| [`Moorcheh`](/oss/python/integrations/vectorstores/moorcheh)                                                                                         | ✅            | ✅         | ✅                | ✅                 | ✅     | ✅                     | ✅             | ✅                    |
| [`MongoDBAtlasVectorSearch`](/oss/python/integrations/vectorstores/mongodb_atlas)                                                                    | ✅            | ✅         | ✅                | ✅                 | ✅     | ✅                     | ✅             | ✅                    |
| [`openGauss`](/oss/python/integrations/vectorstores/opengauss)                                                                                       | ✅            | ✅         | ✅                | ✅                 | ❌     | ✅                     | ❌             | ✅                    |
| [`PGVector`](/oss/python/integrations/vectorstores/pgvector)                                                                                         | ✅            | ✅         | ✅                | ✅                 | ✅     | ❌                     | ❌             | ✅                    |
| [`PGVectorStore`](/oss/python/integrations/vectorstores/pgvectorstore)                                                                               | ✅            | ✅         | ✅                | ✅                 | ✅     | ✅                     | ❌             | ✅                    |
| [`PineconeVectorStore`](/oss/python/integrations/vectorstores/pinecone)                                                                              | ✅            | ✅         | ✅                | ❌                 | ✅     | ❌                     | ❌             | ✅                    |
| [`QdrantVectorStore`](/oss/python/integrations/vectorstores/qdrant)                                                                                  | ✅            | ✅         | ✅                | ✅                 | ✅     | ❌                     | ✅             | ✅                    |
| [`Weaviate`](/oss/python/integrations/vectorstores/weaviate)                                                                                         | ✅            | ✅         | ✅                | ✅                 | ✅     | ❌                     | ✅             | ✅                    |
| [`SQLServer`](/oss/python/integrations/vectorstores/sqlserver)                                                                                       | ✅            | ✅         | ✅                | ✅                 | ❌     | ❌                     | ❌             | ✅                    |
| [`TurbopufferVectorStore`](/oss/python/integrations/vectorstores/turbopuffer)                                                                        | ✅            | ✅         | ✅                | ✅                 | ❌     | ✅                     | ✅             | ✅                    |
| [`ValkeyVectorStore`](/oss/python/integrations/vectorstores/valkey)                                                                                  | ✅            | ✅         | ✅                | ✅                 | ❌     | ❌                     | ❌             | ✅                    |
| [`ZeusDB`](/oss/python/integrations/vectorstores/zeusdb)                                                                                             | ✅            | ✅         | ✅                | ✅                 | ✅     | ✅                     | ❌             | ✅                    |
| [`Oracle AI Database`](/oss/python/integrations/vectorstores/oracle)                                                                                 | ✅            | ✅         | ✅                | ✅                 | ✅     | ✅                     | ❌             | ✅                    |

## All vector stores

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/python/integrations/vectorstores/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# LangChain Academy

Source: https://docs.langchain.com/oss/python/langchain/academy

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/academy.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
