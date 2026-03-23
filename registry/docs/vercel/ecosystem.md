# Ecosystem

AI Gateway integrates with the AI development ecosystem you use. Whether you're building with LangChain, LlamaIndex, or other popular frameworks, connect through compatible APIs and get unified billing, observability, and model access.

## Framework integrations

These popular frameworks work through Chat Completions endpoints or native integrations:

| Framework                                                                    | Language   | Integration type | Use case                             |
| ---------------------------------------------------------------------------- | ---------- | ---------------- | ------------------------------------ |
| [LangChain](/docs/ai-gateway/ecosystem/framework-integrations/langchain)     | Python/JS  | Chat Completions | Chains, agents, RAG pipelines        |
| [LlamaIndex](/docs/ai-gateway/ecosystem/framework-integrations/llamaindex)   | Python     | Native package   | Knowledge assistants, document Q\&A   |
| [Mastra](/docs/ai-gateway/ecosystem/framework-integrations/mastra)           | TypeScript | Native           | AI workflows and agents              |
| [Pydantic AI](/docs/ai-gateway/ecosystem/framework-integrations/pydantic-ai) | Python     | Native           | Type-safe agents, structured outputs |
| [LiteLLM](/docs/ai-gateway/ecosystem/framework-integrations/litellm)         | Python     | Native prefix    | Unified LLM interface                |
| [Langfuse](/docs/ai-gateway/ecosystem/framework-integrations/langfuse)       | Any        | Observability    | LLM analytics and tracing            |

### LangChain

Connect LangChain through the Chat Completions endpoint:

```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model="anthropic/claude-sonnet-4.6",
    api_key=os.getenv("AI_GATEWAY_API_KEY"),
    base_url="https://ai-gateway.vercel.sh/v1"
)

response = llm.invoke("Explain RAG in one sentence")
```

### LlamaIndex

Use the dedicated `llama-index-llms-vercel-ai-gateway` package:

```bash
pip install llama-index-llms-vercel-ai-gateway
```

```python
from llama_index.llms.vercel_ai_gateway import VercelAIGateway

llm = VercelAIGateway(
    model="anthropic/claude-sonnet-4.6",
    api_key=os.getenv("AI_GATEWAY_API_KEY")
)
```

### Pydantic AI

Pydantic AI has a native `VercelProvider` for type-safe AI agents:

```python
from pydantic_ai import Agent
from pydantic_ai.providers.vercel import VercelProvider

agent = Agent(
    VercelProvider(model="anthropic/claude-sonnet-4.6"),
    system_prompt="You are a helpful assistant"
)

result = agent.run_sync("What is the capital of France?")
```

See the [Framework Integrations documentation](/docs/ai-gateway/ecosystem/framework-integrations) for complete setup guides.

## Stripe billing

[Stripe Billing](/docs/ai-gateway/ecosystem/stripe-billing) integrates Stripe's metered billing with AI Gateway. Add two headers to your requests and the gateway automatically emits meter events for input and output tokens on every successful response.

```typescript
const gateway = createGateway({
  headers: {
    'stripe-customer-id': process.env.STRIPE_CUSTOMER_ID,
    'stripe-restricted-access-key': process.env.STRIPE_RESTRICTED_ACCESS_KEY,
  },
});
```

Works with the AI SDK, OpenAI Chat Completions API, and Anthropic Messages API. See the [Stripe Billing guide](/docs/ai-gateway/ecosystem/stripe-billing) for full setup instructions.

## App attribution

[App Attribution](/docs/ai-gateway/ecosystem/app-attribution) lets you identify your application in requests. When you include attribution headers, Vercel can feature your app—increasing visibility for your project.

Add attribution to your requests:

```typescript
const response = await fetch('https://ai-gateway.vercel.sh/v1/chat/completions', {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'X-Vercel-AI-App-Name': 'My AI App',
    'X-Vercel-AI-App-Url': 'https://myaiapp.com',
  },
  // ... request body
});
```

Attribution is optional—your requests work normally without these headers.

## Next steps

- [Set up LangChain](/docs/ai-gateway/ecosystem/framework-integrations/langchain)
- [Install the LlamaIndex package](/docs/ai-gateway/ecosystem/framework-integrations/llamaindex) for knowledge apps
- [Add app attribution](/docs/ai-gateway/ecosystem/app-attribution) to showcase your project
- [Set up Stripe billing](/docs/ai-gateway/ecosystem/stripe-billing) for usage-based pricing

title: "Stripe Billing"
description: "Add usage-based billing to your AI application with Stripe and AI Gateway."
last\_updated: "2026-03-23T09:40:04.373Z"
source: "https://vercel.com/docs/ai-gateway/ecosystem/stripe-billing"
