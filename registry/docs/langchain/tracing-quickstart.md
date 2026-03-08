# Tracing quickstart

Source: https://docs.langchain.com/langsmith/observability-quickstart

[*Observability*](/langsmith/observability-concepts) is a critical requirement for applications built with Large Language Models (LLMs). LLMs are non-deterministic, which means that the same prompt can produce different responses. This behavior makes debugging and monitoring more challenging than with traditional software.

LangSmith addresses this by providing end-to-end visibility into how your application handles a request. Each request generates a [*trace*](/langsmith/observability-concepts#traces), which captures the full record of what happened. Within a trace are individual [*runs*](/langsmith/observability-concepts#runs), the specific operations your application performed, such as an LLM call or a retrieval step. Tracing runs allows you to inspect, debug, and validate your application’s behavior.

In this quickstart, you will set up a minimal [*Retrieval Augmented Generation (RAG)*](https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-retrieval-augmented-generation-rag) application and add tracing with LangSmith. You will:

1. Configure your environment.
2. Create an application that retrieves context and calls an LLM.
3. Enable tracing to capture both the retrieval step and the LLM call.
4. View the resulting traces in the LangSmith UI.

## Prerequisites

Before you begin, make sure you have:

- **A LangSmith account**: Sign up or log in at [smith.langchain.com](https://smith.langchain.com).
- **A LangSmith API key**: Follow the [Create an API key](/langsmith/create-account-api-key#create-an-api-key) guide.
- **An OpenAI API key**: Generate this from the [OpenAI dashboard](https://platform.openai.com/account/api-keys).

The example app in this quickstart will use OpenAI as the LLM provider. You can adapt the example for your app's LLM provider.

If you're building an application with [LangChain](https://docs.langchain.com/oss/python/langchain/overview) or [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview), you can enable LangSmith tracing with a single environment variable. Get started by reading the guides for tracing with [LangChain](/langsmith/trace-with-langchain) or tracing with [LangGraph](/langsmith/trace-with-langgraph).

## 1. Create a directory and install dependencies

In your terminal, create a directory for your project and install the dependencies in your environment:

```bash Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
mkdir ls-observability-quickstart && cd ls-observability-quickstart
python -m venv .venv && source .venv/bin/activate
python -m pip install --upgrade pip
pip install -U langsmith openai
```

```bash TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
mkdir ls-observability-quickstart-ts && cd ls-observability-quickstart-ts
npm init -y
npm install langsmith openai typescript ts-node
npx tsc --init
```

## 2. Set up environment variables

Set the following environment variables:

- `LANGSMITH_TRACING`
- `LANGSMITH_API_KEY`
- `OPENAI_API_KEY` (or your LLM provider's API key)
- (optional) `LANGSMITH_WORKSPACE_ID`: If your LangSmith API key is linked to multiple workspaces, set this variable to specify which workspace to use.

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGSMITH_TRACING=true
export LANGSMITH_API_KEY="<your-langsmith-api-key>"
export OPENAI_API_KEY="<your-openai-api-key>"
export LANGSMITH_WORKSPACE_ID="<your-workspace-id>"
```

If you're using Anthropic, use the [Anthropic wrapper](/langsmith/trace-anthropic) to trace your calls. For other providers, use [the traceable wrapper](/langsmith/annotate-code#use-%40traceable-%2F-traceable).

To send traces to a specific project, use the [`LANGSMITH_PROJECT` environment variable](/langsmith/log-traces-to-project). If this is not set, LangSmith will create a default tracing project automatically on trace ingestion.

## 3. Define your application

You can use the example app code outlined in this step to instrument a RAG application. Or, you can use your own application code that includes an LLM call.

This is a minimal RAG app that uses the OpenAI SDK directly without any LangSmith tracing added yet. It has three main parts:

- **Retriever function**: Simulates document retrieval that always returns the same string.
- **OpenAI client**: Instantiates a plain OpenAI client to send a chat completion request.
- **RAG function**: Combines the retrieved documents with the user’s question to form a system prompt, calls the `chat.completions.create()` endpoint with `gpt-4.1-mini`, and returns the assistant’s response.

Add the following code into your app file (e.g., `app.py` or `app.ts`):

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from openai import OpenAI

def retriever(query: str):
    # Minimal example retriever
    return ["Harrison worked at Kensho"]

# OpenAI client call (no wrapping yet)
client = OpenAI()

def rag(question: str) -> str:
    docs = retriever(question)
    system_message = (
        "Answer the user's question using only the provided information below:\n"
        + "\n".join(docs)
    )

    # This call is not traced yet
    resp = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {"role": "system", "content": system_message},
            {"role": "user", "content": question},
        ],
    )
    return resp.choices[0].message.content

if __name__ == "__main__":
    print(rag("Where did Harrison work?"))
```

```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import "dotenv/config";
import OpenAI from "openai";

// Minimal example retriever
function retriever(query: string): string[] {
    return ["Harrison worked at Kensho"];
}

// OpenAI client call (no wrapping yet)
const client = new OpenAI();

async function rag(question: string) {
    const docs = retriever(question);
    const systemMessage =
        "Answer the user's question using only the provided information below:\n" +
        docs.join("\n");

    // This call is not traced yet
    const resp = await client.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
            { role: "system", content: systemMessage },
            { role: "user", content: question },
        ],
    });

    return resp.choices[0].message?.content;
}

(async () => {
  console.log(await rag("Where did Harrison work?"));
})();
```

## 4. Trace LLM calls

To start, you’ll trace all your OpenAI calls. LangSmith provides wrappers:

- Python: [`wrap_openai`](https://docs.smith.langchain.com/reference/python/wrappers/langsmith.wrappers._openai.wrap_openai)
- TypeScript: [`wrapOpenAI`](https://docs.smith.langchain.com/reference/js/functions/wrappers_openai.wrapOpenAI)

This snippet wraps the OpenAI client so that every subsequent model call is logged automatically as a traced child run in LangSmith.

1. Include the highlighted lines in your app file:

   ```python Python highlight={2,7} theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   from openai import OpenAI
   from langsmith.wrappers import wrap_openai  # traces openai calls

   def retriever(query: str):
       return ["Harrison worked at Kensho"]

   client = wrap_openai(OpenAI())  # log traces by wrapping the model calls

   def rag(question: str) -> str:
       docs = retriever(question)
       system_message = (
           "Answer the user's question using only the provided information below:\n"
           + "\n".join(docs)
       )
       resp = client.chat.completions.create(
           model="gpt-4.1-mini",
           messages=[
               {"role": "system", "content": system_message},
               {"role": "user", "content": question},
           ],
       )
       return resp.choices[0].message.content

   if __name__ == "__main__":
       print(rag("Where did Harrison work?"))
   ```

   ```typescript TypeScript highlight={3,9} theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   import "dotenv/config";
   import OpenAI from "openai";
   import { wrapOpenAI } from "langsmith/wrappers"; // traces openai calls

   function retriever(query: string): string[] {
       return ["Harrison worked at Kensho"];
   }

   const client = wrapOpenAI(new OpenAI()); // log traces by wrapping the model calls

   async function rag(question: string) {
       const docs = retriever(question);
       const systemMessage =
           "Answer the user's question using only the provided information below:\n" +
           docs.join("\n");

       const resp = await client.chat.completions.create({
           model: "gpt-4.1-mini",
           messages: [
               { role: "system", content: systemMessage },
               { role: "user", content: question },
           ],
       });

       return resp.choices[0].message?.content;
   }

   (async () => {
       console.log(await rag("Where did Harrison work?"));
   })();
   ```

2. Call your application:

   ```bash Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   python app.py
   ```

   ```bash TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   npx ts-node app.ts
   ```

   You'll receive the following output:

   ```
   Harrison worked at Kensho.
   ```

3. In the [LangSmith UI](https://smith.langchain.com), navigate to the **default** Tracing Project for your workspace (or the workspace you specified in [Step 2](#2-set-up-environment-variables)). You'll see the OpenAI call you just instrumented.

## 5. Trace an entire application

You can also use the `traceable` decorator for [Python](https://docs.smith.langchain.com/reference/python/run_helpers/langsmith.run_helpers.traceable) or [TypeScript](https://langsmith-docs-bdk0fivr6-langchain.vercel.app/reference/js/functions/traceable.traceable) to trace your entire application instead of just the LLM calls.

1. Include the highlighted code in your app file:

   ```python Python highlight={3,10} theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   from openai import OpenAI
   from langsmith.wrappers import wrap_openai
   from langsmith import traceable

   def retriever(query: str):
       return ["Harrison worked at Kensho"]

   client = wrap_openai(OpenAI())  # keep this to capture the prompt and response from the LLM

   @traceable
   def rag(question: str) -> str:
       docs = retriever(question)
       system_message = (
           "Answer the user's question using only the provided information below:\n"
           + "\n".join(docs)
       )
       resp = client.chat.completions.create(
           model="gpt-4.1-mini",
           messages=[
               {"role": "system", "content": system_message},
               {"role": "user", "content": question},
           ],
       )
       return resp.choices[0].message.content

   if __name__ == "__main__":
       print(rag("Where did Harrison work?"))
   ```

   ```typescript TypeScript highlight={3,11} theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   import "dotenv/config";
   import OpenAI from "openai";
   import { wrapOpenAI, traceable } from "langsmith/wrappers";

   function retriever(query: string): string[] {
       return ["Harrison worked at Kensho"];
   }

   const client = wrapOpenAI(new OpenAI()); // keep this to capture the prompt and response from the LLM

   const rag = traceable(async (question: string) => {
       const docs = retriever(question);
       const systemMessage =
           "Answer the user's question using only the provided information below:\n" +
           docs.join("\n");

       const resp = await client.chat.completions.create({
           model: "gpt-4.1-mini",
           messages: [
               { role: "system", content: systemMessage },
               { role: "user", content: question },
           ],
       });

       return resp.choices[0].message?.content;
   });

   (async () => {
       console.log(await rag("Where did Harrison work?"));
   })();
   ```

2. Call the application again to create a run:

   ```bash Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   python app.py
   ```

   ```bash TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   npx ts-node app.ts
   ```

3. Return to the [LangSmith UI](https://smith.langchain.com), navigate to the **default** Tracing Project for your workspace (or the workspace you specified in [Step 2](#2-set-up-environment-variables)). You'll find a trace of the entire app pipeline with the **rag** step and the **ChatOpenAI** LLM call.

## Next steps

Here are some topics you might want to explore next:

- [Tracing integrations](/langsmith/trace-with-langchain) provide support for various LLM providers and agent frameworks.
- [Filtering traces](/langsmith/filter-traces-in-application) can help you effectively navigate and analyze data in tracing projects that contain a significant amount of data.
- [Trace a RAG application](/langsmith/observability-llm-tutorial) is a full tutorial, which adds observability to an application from development through to production.
- [Sending traces to a specific project](/langsmith/log-traces-to-project) changes the destination project of your traces.

  After logging traces, use **[Polly](/langsmith/polly)** to analyze them and get AI-powered insights into your application's performance.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/observability-quickstart.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Deploy an observability stack for your LangSmith deployment

Source: https://docs.langchain.com/langsmith/observability-stack

**This section is only applicable for Kubernetes deployments.**

LangSmith applications expose telemetry data that can be sent to the backend of your choice. If you don’t already have an observability stack, or prefer to keep LangSmith telemetry separate from your main application, you can use the LangSmith Observability Helm chart to deploy a basic observability stack.
