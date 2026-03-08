# Google and Vertex Reasoning

The Gemini 2.5, 3, and 3.1 series models use an internal "thinking process" that improves their reasoning and multi-step planning abilities, making them effective for complex tasks like coding, advanced mathematics, and data analysis.

These models are available through both Google AI and Google Vertex AI providers. The thinking configuration is the same — the only difference is using `providerOptions.vertex` instead of `providerOptions.google`. To route through Vertex, configure [Vertex AI credentials](/docs/ai-gateway/authentication-and-byok/byok) and set the provider order to prefer `vertex`.

- **Gemini 3 and 3.1**: Use `thinkingLevel` to control the depth of reasoning
- **Gemini 2.5**: Use `thinkingBudget` to set a token limit for thinking

## Supported models

- `google/gemini-3.1-pro-preview`
- `google/gemini-3.1-flash-lite-preview`
- `google/gemini-3-flash`
- `google/gemini-2.5-pro`
- `google/gemini-2.5-flash`
- `google/gemini-2.5-flash-lite`

### Thinking levels (Gemini 3 and 3.1)

The `thinkingLevel` parameter controls reasoning behavior. Not all levels are available on every model:

| Thinking level | Gemini 3.1 Pro | Gemini 3.1 Flash-Lite | Gemini 3 Flash | Description                                                                                                                                 |
| -------------- | -------------- | --------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `minimal`      | Not supported  | Default               | Supported      | Matches "no thinking" for most queries. The model may still think minimally for complex coding tasks. Best for latency-sensitive workloads. |
| `low`          | Supported      | Supported             | Supported      | Minimizes latency and cost. Best for simple instruction following and chat.                                                                 |
| `medium`       | Supported      | Supported             | Supported      | Balanced thinking for most tasks.                                                                                                           |
| `high`         | Default        | Supported             | Default        | Maximizes reasoning depth. The model may take significantly longer to reach a first output token.                                           |

### Thinking budgets (Gemini 2.5)

The `thinkingBudget` parameter sets a specific number of thinking tokens. Set `thinkingBudget` to `0` to disable thinking, or `-1` to enable dynamic thinking (the model adjusts based on request complexity).

> **💡 Note:** Use `thinkingLevel` with Gemini 3 and 3.1 models. While `thinkingBudget` is accepted for backwards compatibility, using it with Gemini 3 models may result in unexpected performance.

| Model                 | Default | Range      | Disable thinking    | Dynamic thinking               |
| --------------------- | ------- | ---------- | ------------------- | ------------------------------ |
| Gemini 2.5 Pro        | Dynamic | 128–32,768 | Not supported       | `thinkingBudget: -1` (default) |
| Gemini 2.5 Flash      | Dynamic | 0–24,576   | `thinkingBudget: 0` | `thinkingBudget: -1` (default) |
| Gemini 2.5 Flash Lite | Off     | 512–24,576 | `thinkingBudget: 0` | `thinkingBudget: -1`           |

## Getting started

### Gemini 3 and 3.1 models

Use the `thinkingLevel` parameter to control the depth of reasoning:

```typescript filename="gemini-3-thinking.ts"
import { generateText } from 'ai';

const result = await generateText({
  model: 'google/gemini-3.1-pro-preview',
  prompt: 'What is the sum of the first 10 prime numbers?',
  providerOptions: {
    vertex: { // use vertex or google
      thinkingConfig: {
        thinkingLevel: 'high',
        includeThoughts: true,
      },
    },
  },
});

console.log(result.text);
console.log(result.reasoningText);
```

### Gemini 2.5 models

Use the `thinkingBudget` parameter to control the number of thinking tokens:

```typescript filename="gemini-25-thinking.ts"
import { generateText } from 'ai';

const result = await generateText({
  model: 'google/gemini-2.5-flash',
  prompt: 'What is the sum of the first 10 prime numbers?',
  providerOptions: {
    vertex: { // use vertex or google
      thinkingConfig: {
        thinkingBudget: 8192,
        includeThoughts: true,
      },
    },
  },
});

console.log(result.text);
console.log(result.reasoningText);
```

### Streaming

When streaming, thinking tokens are emitted as `reasoning-delta` stream parts:

```typescript filename="gemini-stream-thinking.ts"
import { streamText } from 'ai';

const result = streamText({
  model: 'google/gemini-2.5-flash',
  prompt: 'Explain quantum computing in simple terms.',
  providerOptions: {
    vertex: { // use vertex or google
      thinkingConfig: {
        thinkingBudget: 2048,
        includeThoughts: true,
      },
    },
  },
});

for await (const part of result.fullStream) {
  if (part.type === 'reasoning-delta') {
    process.stdout.write(part.text);
  } else if (part.type === 'text-delta') {
    process.stdout.write(part.text);
  }
}
```

## Parameters

### Gemini 3 and 3.1 thinking config

| Parameter         | Type    | Description                                                    |
| ----------------- | ------- | -------------------------------------------------------------- |
| `thinkingLevel`   | string  | Depth of reasoning: `'minimal'`, `'low'`, `'medium'`, `'high'` |
| `includeThoughts` | boolean | Include thinking content in the response                       |

### Gemini 2.5 thinking config

| Parameter         | Type    | Description                                       |
| ----------------- | ------- | ------------------------------------------------- |
| `thinkingBudget`  | number  | Maximum number of tokens to allocate for thinking |
| `includeThoughts` | boolean | Include thinking content in the response          |

For more details, see the [Google AI thinking docs](https://ai.google.dev/gemini-api/docs/thinking) and [Vertex AI thinking docs](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/thinking).

title: "OpenAI Reasoning"
description: "Configure reasoning and thinking for OpenAI models with the AI SDK and AI Gateway."
last\_updated: "2026-03-08T05:03:10.229Z"
source: "https://vercel.com/docs/ai-gateway/capabilities/reasoning/openai"
