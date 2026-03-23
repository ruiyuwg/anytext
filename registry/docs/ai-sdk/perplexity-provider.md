# Perplexity Provider

The [Perplexity](https://sonar.perplexity.ai) provider offers access to Sonar API - a language model that uniquely combines real-time web search with natural language processing. Each response is grounded in current web data and includes detailed citations, making it ideal for research, fact-checking, and obtaining up-to-date information.

API keys can be obtained from the [Perplexity Platform](https://docs.perplexity.ai).

## Setup

The Perplexity provider is available via the `@ai-sdk/perplexity` module. You can install it with:

## Provider Instance

You can import the default provider instance `perplexity` from `@ai-sdk/perplexity`:

```ts
import { perplexity } from '@ai-sdk/perplexity';
```

For custom configuration, you can import `createPerplexity` and create a provider instance with your settings:

```ts
import { createPerplexity } from '@ai-sdk/perplexity';

const perplexity = createPerplexity({
  apiKey: process.env.PERPLEXITY_API_KEY ?? '',
});
```

You can use the following optional settings to customize the Perplexity provider instance:

- **baseURL** *string*

  Use a different URL prefix for API calls.
  The default prefix is `https://api.perplexity.ai`.

- **apiKey** *string*

  API key that is being sent using the `Authorization` header. It defaults to
  the `PERPLEXITY_API_KEY` environment variable.

- **headers** *Record\<string,string>*

  Custom headers to include in the requests.

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.

## Language Models

You can create Perplexity models using a provider instance:

```ts
import { perplexity } from '@ai-sdk/perplexity';
import { generateText } from 'ai';

const { text } = await generateText({
  model: perplexity('sonar-pro'),
  prompt: 'What are the latest developments in quantum computing?',
});
```

### Sources

Websites that have been used to generate the response are included in the `sources` property of the result:

```ts
import { perplexity } from '@ai-sdk/perplexity';
import { generateText } from 'ai';

const { text, sources } = await generateText({
  model: perplexity('sonar-pro'),
  prompt: 'What are the latest developments in quantum computing?',
});

console.log(sources);
```

### Provider Options & Metadata

The Perplexity provider includes additional metadata in the response through `providerMetadata`.
Additional configuration options are available through `providerOptions`.

```ts
const result = await generateText({
  model: perplexity('sonar-pro'),
  prompt: 'What are the latest developments in quantum computing?',
  providerOptions: {
    perplexity: {
      return_images: true, // Enable image responses (Tier-2 Perplexity users only)
    },
  },
});

console.log(result.providerMetadata);
// Example output:
// {
//   perplexity: {
//     usage: { citationTokens: 5286, numSearchQueries: 1 },
//     images: [
//       { imageUrl: "https://example.com/image1.jpg", originUrl: "https://elsewhere.com/page1", height: 1280, width: 720 },
//       { imageUrl: "https://example.com/image2.jpg", originUrl: "https://elsewhere.com/page2", height: 1280, width: 720 }
//     ]
//   },
// }
```

The metadata includes:

- `usage`: Object containing `citationTokens` and `numSearchQueries` metrics
- `images`: Array of image URLs when `return_images` is enabled (Tier-2 users only)

You can enable image responses by setting `return_images: true` in the provider options. This feature is only available to Perplexity Tier-2 users and above.

For more details about Perplexity's capabilities, see the [Perplexity chat
completion docs](https://docs.perplexity.ai/api-reference/chat-completions).

## Model Capabilities

| Model                 | Image Input         | Object Generation   | Tool Usage          | Tool Streaming      |
| --------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `sonar-pro`           |  |  |  |  |
| `sonar`               |  |  |  |  |
| `sonar-deep-research` |  |  |  |  |

Please see the [Perplexity docs](https://docs.perplexity.ai) for detailed API
documentation and the latest updates.

# Luma
