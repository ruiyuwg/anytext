# Amazon Bedrock Reasoning

Amazon Bedrock supports model creator-specific reasoning features for Anthropic models. Configuration depends on the model:

- **Claude 4.6** (e.g., `anthropic/claude-opus-4.6`): Use adaptive reasoning with `type: 'adaptive'` and `maxReasoningEffort`
- **Older models** (e.g., `anthropic/claude-sonnet-4.5`): Use manual reasoning with `type: 'enabled'` and `budgetTokens` (minimum: 1,024, maximum: 64,000)

## Supported models

- `anthropic/claude-opus-4.6`
- `anthropic/claude-sonnet-4.5`

## Getting started

### Adaptive reasoning (Claude 4.6)

For Claude 4.6 models on Bedrock, use `type: 'adaptive'` with a `maxReasoningEffort` level:

```typescript filename="bedrock-adaptive.ts"
import { generateText } from 'ai';

const result = await generateText({
  model: 'anthropic/claude-opus-4.6',
  prompt: 'How many "r"s are in the word "strawberry"?',
  providerOptions: {
    bedrock: {
      reasoningConfig: { type: 'adaptive', maxReasoningEffort: 'max' },
    },
  },
});

console.log(result.reasoning);
console.log(result.text);
```

### Manual reasoning (older models)

For older Anthropic models on Bedrock, use `type: 'enabled'` with a `budgetTokens` value:

```typescript filename="bedrock-manual.ts"
import { generateText } from 'ai';

const result = await generateText({
  model: 'anthropic/claude-sonnet-4.5',
  prompt: 'How many people will live in the world in 2040?',
  providerOptions: {
    bedrock: {
      reasoningConfig: { type: 'enabled', budgetTokens: 2048 },
    },
  },
});

console.log(result.reasoning);
console.log(result.text);
```

## Parameters

### Adaptive reasoning (Claude 4.6)

| Parameter            | Type   | Description                                             |
| -------------------- | ------ | ------------------------------------------------------- |
| `type`               | string | Set to `'adaptive'` for Claude 4.6 models               |
| `maxReasoningEffort` | string | Effort level: `'low'`, `'medium'`, `'high'`, or `'max'` |

### Manual reasoning (older models)

| Parameter      | Type   | Description                                                 |
| -------------- | ------ | ----------------------------------------------------------- |
| `type`         | string | Set to `'enabled'` to enable reasoning                      |
| `budgetTokens` | number | Token budget for reasoning. Minimum: 1,024. Maximum: 64,000 |

title: "Anthropic Reasoning"
description: "Configure extended thinking for Anthropic Claude models with the AI SDK and AI Gateway."
last\_updated: "2026-03-08T05:03:10.185Z"
source: "https://vercel.com/docs/ai-gateway/capabilities/reasoning/anthropic"
