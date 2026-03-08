## Setup

### Environment

First, let's set our environment variables:

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import os
os.environ["LANGSMITH_TRACING"] = "true"
os.environ["LANGSMITH_API_KEY"] = "YOUR LANGSMITH API KEY"
os.environ["OPENAI_API_KEY"] = "YOUR OPENAI API KEY"
```

```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
process.env.LANGSMITH_TRACING = "true";
process.env.LANGSMITH_API_KEY = "YOUR LANGSMITH API KEY";
process.env.OPENAI_API_KEY = "YOUR OPENAI API KEY";
```

And install the dependencies we'll need:

```bash Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U langsmith langchain[openai] langchain-community
```

```bash TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add langsmith langchain @langchain/community @langchain/openai
```

### Application

While this tutorial uses LangChain, the evaluation techniques and LangSmith functionality demonstrated here work with any framework. Feel free to use your preferred tools and libraries.

In this section, we'll build a basic Retrieval-Augmented Generation (RAG) application.

We'll stick to a simple implementation that:

- Indexing: chunks and indexes a few of Lilian Weng's blogs in a vector store
- Retrieval: retrieves those chunks based on the user question
- Generation: passes the question and retrieved docs to an LLM.

#### Indexing and retrieval

First, lets load the blog posts we want to build a chatbot for and index them.

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_community.document_loaders import WebBaseLoader
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_openai import OpenAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

# List of URLs to load documents from
urls = [
    "https://lilianweng.github.io/posts/2023-06-23-agent/",
    "https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/",
    "https://lilianweng.github.io/posts/2023-10-25-adv-attack-llm/",
]

# Load documents from the URLs
docs = [WebBaseLoader(url).load() for url in urls]
docs_list = [item for sublist in docs for item in sublist]

# Initialize a text splitter with specified chunk size and overlap
text_splitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(
    chunk_size=250, chunk_overlap=0
)

# Split the documents into chunks
doc_splits = text_splitter.split_documents(docs_list)

# Add the document chunks to the "vector store" using OpenAIEmbeddings
vectorstore = InMemoryVectorStore.from_documents(
    documents=doc_splits,
    embedding=OpenAIEmbeddings(),
)

# With langchain we can easily turn any vector store into a retrieval component:
retriever = vectorstore.as_retriever(k=6)
```

```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";
import { BrowserbaseLoader } from "@langchain/community/document_loaders/web/browserbase";
import { RecursiveCharacterTextSplitter } from "@langchain/text_splitters";

// List of URLs to load documents from
const urls = [
    "https://lilianweng.github.io/posts/2023-06-23-agent/",
    "https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/",
    "https://lilianweng.github.io/posts/2023-10-25-adv-attack-llm/",
]

const loader = new BrowserbaseLoader(urls, {
    textContent: true,
});

const docs = await loader.load();

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000, chunkOverlap: 200
});

const allSplits = await splitter.splitDocuments(docs);

const embeddings = new OpenAIEmbeddings({
    model: "text-embedding-3-large"
});

const vectorStore = new MemoryVectorStore(embeddings);  // Index chunks
await vectorStore.addDocuments(allSplits)
```

#### Generation

We can now define the generative pipeline.

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_openai import ChatOpenAI
from langsmith import traceable

llm = ChatOpenAI(model="gpt-4.1", temperature=1)

# Add decorator so this function is traced in LangSmith
@traceable()
def rag_bot(question: str) -> dict:
    # LangChain retriever will be automatically traced
    docs = retriever.invoke(question)
    docs_string = "".join(doc.page_content for doc in docs)
    instructions = f"""You are a helpful assistant who is good at analyzing source information and answering questions.
       Use the following source documents to answer the user's questions.
       If you don't know the answer, just say that you don't know.
       Use three sentences maximum and keep the answer concise.

Documents:
{docs_string}"""
    # langchain ChatModel will be automatically traced
    ai_msg = llm.invoke([
            {"role": "system", "content": instructions},
            {"role": "user", "content": question},
        ],
    )
    return {"answer": ai_msg.content, "documents": docs}
```

```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";
import { traceable } from "langsmith/traceable";

const llm = new ChatOpenAI({
  model: "gpt-4.1",
  temperature: 1,
})

// Add decorator so this function is traced in LangSmith
const ragBot = traceable(
    async (question: string) => {
        // LangChain retriever will be automatically traced
        const retrievedDocs = await vectorStore.similaritySearch(question);
        const docsContent = retrievedDocs.map((doc) => doc.pageContent).join("");

        const instructions = `You are a helpful assistant who is good at analyzing source information and answering questions
        Use the following source documents to answer the user's questions.
        If you don't know the answer, just say that you don't know.
        Use three sentences maximum and keep the answer concise.
        Documents:
        ${docsContent}`;

        const aiMsg = await llm.invoke([
            {
                role: "system",
                content: instructions
            },
            {
                role: "user",
                content: question
            }
        ])

        return {"answer": aiMsg.content, "documents": retrievedDocs}
    }
)
```
