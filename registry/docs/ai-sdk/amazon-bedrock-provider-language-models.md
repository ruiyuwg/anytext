## Language Models

You can create models that call the Bedrock API using the provider instance.
The first argument is the model id, e.g. `meta.llama3-70b-instruct-v1:0`.

```ts
const model = bedrock("meta.llama3-70b-instruct-v1:0");
```

Amazon Bedrock models also support some model specific provider options that are not part of the [standard call settings](/docs/ai-sdk-core/settings).
You can pass them in the `providerOptions` argument:

```ts
const model = bedrock("anthropic.claude-3-sonnet-20240229-v1:0");

await generateText({
  model,
  providerOptions: {
    anthropic: {
      additionalModelRequestFields: { top_k: 350 },
    },
  },
});
```

Documentation for additional settings based on the selected model can be found within the [Amazon Bedrock Inference Parameter Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).

You can use Amazon Bedrock language models to generate text with the `generateText` function:

```ts
import { bedrock } from "@ai-sdk/amazon-bedrock";
import { generateText } from "ai";

const { text } = await generateText({
  model: bedrock("meta.llama3-70b-instruct-v1:0"),
  prompt: "Write a vegetarian lasagna recipe for 4 people.",
});
```

Amazon Bedrock language models can also be used in the `streamText` function
(see [AI SDK Core](/docs/ai-sdk-core)).

### File Inputs

Amazon Bedrock supports file inputs in combination with specific models, e.g.
`anthropic.claude-3-haiku-20240307-v1:0`.

The Amazon Bedrock provider supports file inputs, e.g. PDF files.

```ts
import { bedrock } from "@ai-sdk/amazon-bedrock";
import { generateText } from "ai";

const result = await generateText({
  model: bedrock("anthropic.claude-3-haiku-20240307-v1:0"),
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "Describe the pdf in detail." },
        {
          type: "file",
          data: readFileSync("./data/ai.pdf"),
          mediaType: "application/pdf",
        },
      ],
    },
  ],
});
```

### Guardrails

You can use the `bedrock` provider options to utilize [Amazon Bedrock Guardrails](https://aws.amazon.com/bedrock/guardrails/):

```ts
import { type AmazonBedrockLanguageModelOptions } from "@ai-sdk/amazon-bedrock";

const result = await generateText({
  model: bedrock("anthropic.claude-3-sonnet-20240229-v1:0"),
  prompt: "Write a story about space exploration.",
  providerOptions: {
    bedrock: {
      guardrailConfig: {
        guardrailIdentifier: "1abcd2ef34gh",
        guardrailVersion: "1",
        trace: "enabled" as const,
        streamProcessingMode: "async",
      },
    } satisfies AmazonBedrockLanguageModelOptions,
  },
});
```

Tracing information will be returned in the provider metadata if you have tracing enabled.

```ts
if (result.providerMetadata?.bedrock.trace) {
  // ...
}
```

See the [Amazon Bedrock Guardrails documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html) for more information.

### Citations

Amazon Bedrock supports citations for document-based inputs across compatible models. When enabled:

- Some models can read documents with visual understanding, not just extracting text
- Models can cite specific parts of documents you provide, making it easier to trace information back to its source (Not Supported Yet)

```ts
import { bedrock } from "@ai-sdk/amazon-bedrock";
import { generateText, Output } from "ai";
import { z } from "zod";
import fs from "fs";

const result = await generateText({
  model: bedrock("apac.anthropic.claude-sonnet-4-20250514-v1:0"),
  output: Output.object({
    schema: z.object({
      summary: z.string().describe("Summary of the PDF document"),
      keyPoints: z.array(z.string()).describe("Key points from the PDF"),
    }),
  }),
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "Summarize this PDF and provide key points.",
        },
        {
          type: "file",
          data: readFileSync("./document.pdf"),
          mediaType: "application/pdf",
          providerOptions: {
            bedrock: {
              citations: { enabled: true },
            },
          },
        },
      ],
    },
  ],
});

console.log("Response:", result.output);
```

### Cache Points

Amazon Bedrock prompt caching is currently in preview release. To request
access, visit the [Amazon Bedrock prompt caching
page](https://aws.amazon.com/bedrock/prompt-caching/).

In messages, you can use the `providerOptions` property to set cache points. Set the `bedrock` property in the `providerOptions` object to `{ cachePoint: { type: 'default' } }` to create a cache point.

You can also specify a TTL (time-to-live) for cache points using the `ttl` property. Supported values are `'5m'` (5 minutes, default) and `'1h'` (1 hour). The 1-hour TTL is only supported by Claude Opus 4.5, Claude Haiku 4.5, and Claude Sonnet 4.5.

```ts
providerOptions: {
  bedrock: { cachePoint: { type: 'default', ttl: '1h' } },
}
```

When using multiple cache points with different TTLs, cache entries with
longer TTL must appear before shorter TTLs (i.e., 1-hour cache entries must
come before 5-minute cache entries).

Cache usage information is returned in the `providerMetadata` object. See examples below.

Cache points have model-specific token minimums and limits. For example,
Claude 3.5 Sonnet v2 requires at least 1,024 tokens for a cache point and
allows up to 4 cache points. See the [Amazon Bedrock prompt caching
documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html)
for details on supported models, regions, and limits.

```ts
import { bedrock } from "@ai-sdk/amazon-bedrock";
import { generateText } from "ai";

const cyberpunkAnalysis =
  "... literary analysis of cyberpunk themes and concepts ...";

const result = await generateText({
  model: bedrock("anthropic.claude-3-5-sonnet-20241022-v2:0"),
  messages: [
    {
      role: "system",
      content: `You are an expert on William Gibson's cyberpunk literature and themes. You have access to the following academic analysis: ${cyberpunkAnalysis}`,
      providerOptions: {
        bedrock: { cachePoint: { type: "default" } },
      },
    },
    {
      role: "user",
      content:
        "What are the key cyberpunk themes that Gibson explores in Neuromancer?",
    },
  ],
});

console.log(result.text);
console.log(result.providerMetadata?.bedrock?.usage);
// Shows cache read/write token usage, e.g.:
// {
//   cacheReadInputTokens: 1337,
//   cacheWriteInputTokens: 42,
// }
```

Cache points also work with streaming responses:

```ts
import { bedrock } from "@ai-sdk/amazon-bedrock";
import { streamText } from "ai";

const cyberpunkAnalysis =
  "... literary analysis of cyberpunk themes and concepts ...";

const result = streamText({
  model: bedrock("anthropic.claude-3-5-sonnet-20241022-v2:0"),
  messages: [
    {
      role: "assistant",
      content: [
        { type: "text", text: "You are an expert on cyberpunk literature." },
        { type: "text", text: `Academic analysis: ${cyberpunkAnalysis}` },
      ],
      providerOptions: { bedrock: { cachePoint: { type: "default" } } },
    },
    {
      role: "user",
      content:
        "How does Gibson explore the relationship between humanity and technology?",
    },
  ],
});

for await (const textPart of result.textStream) {
  process.stdout.write(textPart);
}

console.log(
  "Cache token usage:",
  (await result.providerMetadata)?.bedrock?.usage,
);
// Shows cache read/write token usage, e.g.:
// {
//   cacheReadInputTokens: 1337,
//   cacheWriteInputTokens: 42,
// }
```

### Provider Metadata

The following Bedrock-specific metadata may be returned in `providerMetadata.bedrock`:

- **trace** _(optional)_
  Guardrail tracing information (when tracing is enabled).
- **performanceConfig** _(optional)_
  Performance configuration, e.g. `{ latency: 'optimized' }`.
- **serviceTier** _(optional)_
  Service tier information, e.g. `{ type: 'on-demand' }`.
- **usage** _(optional)_
  Cache token usage details including `cacheWriteInputTokens` and `cacheDetails`.
- **stopSequence** _string | null_
  The stop sequence that triggered the stop, if any.

## Reasoning

Amazon Bedrock supports model creator-specific reasoning features:

- Anthropic (e.g. `claude-sonnet-4-5-20250929`): enable via the `reasoningConfig` provider option and specifying a thinking budget in tokens (minimum: `1024`, maximum: `64000`).
- Amazon (e.g. `us.amazon.nova-2-lite-v1:0`): enable via the `reasoningConfig` provider option and specifying a maximum reasoning effort level (`'low' | 'medium' | 'high'`).

```ts
import {
  bedrock,
  type AmazonBedrockLanguageModelOptions,
} from "@ai-sdk/amazon-bedrock";
import { generateText } from "ai";

// Anthropic example
const anthropicResult = await generateText({
  model: bedrock("us.anthropic.claude-sonnet-4-5-20250929-v1:0"),
  prompt: "How many people will live in the world in 2040?",
  providerOptions: {
    bedrock: {
      reasoningConfig: { type: "enabled", budgetTokens: 1024 },
    } satisfies AmazonBedrockLanguageModelOptions,
  },
});

console.log(anthropicResult.reasoningText); // reasoning text
console.log(anthropicResult.text); // text response

// Nova 2 example
const amazonResult = await generateText({
  model: bedrock("us.amazon.nova-2-lite-v1:0"),
  prompt: "How many people will live in the world in 2040?",
  providerOptions: {
    bedrock: {
      reasoningConfig: { type: "enabled", maxReasoningEffort: "medium" },
    } satisfies AmazonBedrockLanguageModelOptions,
  },
});

console.log(amazonResult.reasoningText); // reasoning text
console.log(amazonResult.text); // text response
```

See [AI SDK UI: Chatbot](/docs/ai-sdk-ui/chatbot#reasoning) for more details
on how to integrate reasoning into your chatbot.

## Extended Context Window

Claude Sonnet 4 models on Amazon Bedrock support an extended context window of up to 1 million tokens when using the `context-1m-2025-08-07` beta feature.

```ts
import {
  bedrock,
  type AmazonBedrockLanguageModelOptions,
} from "@ai-sdk/amazon-bedrock";
import { generateText } from "ai";

const result = await generateText({
  model: bedrock("us.anthropic.claude-sonnet-4-20250514-v1:0"),
  prompt: "analyze this large document...",
  providerOptions: {
    bedrock: {
      anthropicBeta: ["context-1m-2025-08-07"],
    } satisfies AmazonBedrockLanguageModelOptions,
  },
});
```
