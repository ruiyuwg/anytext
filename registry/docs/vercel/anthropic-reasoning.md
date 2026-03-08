# Anthropic Reasoning

Anthropic Claude models support extended thinking, which lets the model reason through complex problems before producing a final answer. Claude 4.6 models introduce adaptive thinking, where Claude dynamically decides when and how much to think based on an effort level.

## Supported models

### Adaptive thinking (Claude 4.6)

These models use `thinking: { type: 'adaptive' }`. Claude dynamically decides when and how much to think.

| Model                         | Effort levels                  | Default |
| ----------------------------- | ------------------------------ | ------- |
| `anthropic/claude-opus-4.6`   | `low`, `medium`, `high`, `max` | `high`  |
| `anthropic/claude-sonnet-4.6` | `low`, `medium`, `high`        | `high`  |

> **💡 Note:** The `max` effort level is only available on Claude Opus 4.6. Requests using
> `max` on other models return an error.

### Extended thinking (Claude 4 and earlier)

These models use `thinking: { type: 'enabled', budgetTokens: N }` to set a fixed token budget for thinking.

- `anthropic/claude-opus-4.5`
- `anthropic/claude-opus-4.1`
- `anthropic/claude-opus-4`
- `anthropic/claude-sonnet-4.5`
- `anthropic/claude-sonnet-4`
- `anthropic/claude-haiku-4.5`

### Adaptive vs. manual thinking

- **Adaptive thinking** (Claude 4.6): Use `thinking: { type: 'adaptive' }`. Claude decides when and how much to think. At `high` effort (default), Claude almost always thinks. At lower effort levels, it may skip thinking for simpler problems.
- **Manual thinking** (Claude 4, Opus 4.5): Use `thinking: { type: 'enabled', budgetTokens: N }` to set a fixed token budget for thinking.

Manual thinking with `type: 'enabled'` and `budgetTokens` is deprecated on Claude 4.6 models. It still works but will be removed in a future release. Use adaptive thinking instead.

For more details, see the [Anthropic extended thinking docs](https://platform.claude.com/docs/en/build-with-claude/extended-thinking), [adaptive thinking docs](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking), and [effort parameter docs](https://platform.claude.com/docs/en/build-with-claude/effort).

## Getting started

### Adaptive thinking (Claude 4.6)

Configure adaptive thinking through `providerOptions`. Claude dynamically decides when and how much to think:

```typescript filename="adaptive-thinking.ts"
import { generateText } from 'ai';

const result = await generateText({
  model: 'anthropic/claude-sonnet-4.6',
  prompt: 'Explain quantum entanglement in simple terms.',
  providerOptions: {
    anthropic: {
      thinking: { type: 'adaptive' },
    },
  },
});

console.log('Thinking:', result.reasoningText);
console.log('Response:', result.text);
```

### Streaming with adaptive thinking

```typescript filename="stream-adaptive.ts"
import { streamText } from 'ai';

const result = streamText({
  model: 'anthropic/claude-opus-4.6',
  prompt: 'Explain quantum entanglement in simple terms.',
  providerOptions: {
    anthropic: {
      thinking: { type: 'adaptive' },
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

### Manual thinking (Claude 4, Opus 4.5)

For older models, use `type: 'enabled'` with a `budgetTokens` value:

```typescript filename="manual-thinking.ts"
import { generateText } from 'ai';

const result = await generateText({
  model: 'anthropic/claude-opus-4',
  prompt: 'Explain quantum entanglement in simple terms.',
  providerOptions: {
    anthropic: {
      thinking: {
        type: 'enabled',
        budgetTokens: 5000,
      },
    },
  },
});

console.log('Thinking:', result.reasoningText);
console.log('Response:', result.text);
```

## Parameters

### Adaptive thinking (Claude 4.6)

| Parameter | Type   | Description                               |
| --------- | ------ | ----------------------------------------- |
| `type`    | string | Set to `'adaptive'` for Claude 4.6 models |

### Manual thinking (Claude 4, Opus 4.5)

| Parameter      | Type   | Description                                       |
| -------------- | ------ | ------------------------------------------------- |
| `type`         | string | Set to `'enabled'` to enable extended thinking    |
| `budgetTokens` | number | Maximum number of tokens to allocate for thinking |

### Effort levels

| Level    | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| `max`    | Absolute maximum capability. Opus 4.6 only                                    |
| `high`   | High capability (default). Complex reasoning, difficult coding, agentic tasks |
| `medium` | Balanced speed, cost, and performance. Recommended default for Sonnet 4.6     |
| `low`    | Most efficient. Best for simpler tasks and latency-sensitive workloads        |

## Interleaved thinking

Interleaved thinking lets Claude think between tool calls, producing better reasoning in multi-step workflows.

- **Claude Opus 4.6**: Automatically enabled with adaptive thinking
- **Claude Sonnet 4.6, Opus 4.5, 4.1, 4, Sonnet 4.5, 4**: Pass the `interleaved-thinking-2025-05-14` beta header when extended thinking is enabled

```typescript filename="interleaved-thinking.ts"
import { generateText } from 'ai';

const result = await generateText({
  model: 'anthropic/claude-sonnet-4.6',
  prompt: 'Search for the weather and summarize it.',
  providerOptions: {
    anthropic: {
      thinking: { type: 'enabled', budgetTokens: 5000 },
      headers: {
        'anthropic-beta': 'interleaved-thinking-2025-05-14',
      },
    },
  },
  tools: {
    // your tools here
  },
});
```

With interleaved thinking, `budgetTokens` can exceed the model's max output tokens since it represents the total budget across all thinking blocks in a single turn.

For more details, see the [Anthropic extended thinking docs](https://platform.claude.com/docs/en/build-with-claude/extended-thinking#interleaved-thinking).

## Summarized vs. full thinking

Claude 4 models return **summarized** thinking output, not full thinking tokens. You're charged for the full thinking tokens, but the response contains a condensed summary. Claude Sonnet 3.7 returns full thinking output.

title: "Google and Vertex Reasoning"
description: "Configure thinking for Google Gemini models with the AI SDK and AI Gateway."
last\_updated: "2026-03-08T05:03:10.195Z"
source: "https://vercel.com/docs/ai-gateway/capabilities/reasoning/google"
