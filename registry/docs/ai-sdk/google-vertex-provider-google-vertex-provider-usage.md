## Google Vertex Provider Usage

The Google Vertex provider instance is used to create model instances that call the Vertex AI API. The models available with this provider include [Google's Gemini models](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models). If you're looking to use [Anthropic's Claude models](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-claude), see the [Google Vertex Anthropic Provider](#google-vertex-anthropic-provider-usage) section below.

### Provider Instance

You can import the default provider instance `vertex` from `@ai-sdk/google-vertex`:

```ts
import { vertex } from '@ai-sdk/google-vertex';
```

If you need a customized setup, you can import `createVertex` from `@ai-sdk/google-vertex` and create a provider instance with your settings:

```ts
import { createVertex } from '@ai-sdk/google-vertex';

const vertex = createVertex({
  project: 'my-project', // optional
  location: 'us-central1', // optional
});
```

Google Vertex supports two different authentication implementations depending on your runtime environment.

#### Node.js Runtime

The Node.js runtime is the default runtime supported by the AI SDK. It supports all standard Google Cloud authentication options through the [`google-auth-library`](https://github.com/googleapis/google-auth-library-nodejs?tab=readme-ov-file#ways-to-authenticate). Typical use involves setting a path to a json credentials file in the `GOOGLE_APPLICATION_CREDENTIALS` environment variable. The credentials file can be obtained from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).

If you want to customize the Google authentication options you can pass them as options to the `createVertex` function, for example:

```ts
import { createVertex } from '@ai-sdk/google-vertex';

const vertex = createVertex({
  googleAuthOptions: {
    credentials: {
      client_email: 'my-email',
      private_key: 'my-private-key',
    },
  },
});
```

##### Optional Provider Settings

You can use the following optional settings to customize the provider instance:

- **project** *string*

  The Google Cloud project ID that you want to use for the API calls.
  It uses the `GOOGLE_VERTEX_PROJECT` environment variable by default.

- **location** *string*

  The Google Cloud location that you want to use for the API calls, e.g. `us-central1`.
  It uses the `GOOGLE_VERTEX_LOCATION` environment variable by default.

- **googleAuthOptions** *object*

  Optional. The Authentication options used by the [Google Auth Library](https://github.com/googleapis/google-auth-library-nodejs/). See also the [GoogleAuthOptions](https://github.com/googleapis/google-auth-library-nodejs/blob/08978822e1b7b5961f0e355df51d738e012be392/src/auth/googleauth.ts#L87C18-L87C35) interface.

  - **authClient** *object*
    An `AuthClient` to use.

  - **keyFilename** *string*
    Path to a .json, .pem, or .p12 key file.

  - **keyFile** *string*
    Path to a .json, .pem, or .p12 key file.

  - **credentials** *object*
    Object containing client\_email and private\_key properties, or the external account client options.

  - **clientOptions** *object*
    Options object passed to the constructor of the client.

  - **scopes** *string | string\[]*
    Required scopes for the desired API request.

  - **projectId** *string*
    Your project ID.

  - **universeDomain** *string*
    The default service domain for a given Cloud universe.

- **headers** *Resolvable\<Record\<string, string | undefined>>*

  Headers to include in the requests. Can be provided in multiple formats:

  - A record of header key-value pairs: `Record<string, string | undefined>`
  - A function that returns headers: `() => Record<string, string | undefined>`
  - An async function that returns headers: `async () => Record<string, string | undefined>`
  - A promise that resolves to headers: `Promise<Record<string, string | undefined>>`

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

- **baseURL** *string*

  Optional. Base URL for the Google Vertex API calls e.g. to use proxy servers. By default, it is constructed using the location and project:
  `https://${location}-aiplatform.googleapis.com/v1/projects/${project}/locations/${location}/publishers/google`

#### Edge Runtime

Edge runtimes (like Vercel Edge Functions and Cloudflare Workers) are lightweight JavaScript environments that run closer to users at the network edge.
They only provide a subset of the standard Node.js APIs.
For example, direct file system access is not available, and many Node.js-specific libraries
(including the standard Google Auth library) are not compatible.

The Edge runtime version of the Google Vertex provider supports Google's [Application Default Credentials](https://github.com/googleapis/google-auth-library-nodejs?tab=readme-ov-file#application-default-credentials) through environment variables. The values can be obtained from a json credentials file from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).

You can import the default provider instance `vertex` from `@ai-sdk/google-vertex/edge`:

```ts
import { vertex } from '@ai-sdk/google-vertex/edge';
```

The `/edge` sub-module is included in the `@ai-sdk/google-vertex` package, so
you don't need to install it separately. You must import from
`@ai-sdk/google-vertex/edge` to differentiate it from the Node.js provider.

If you need a customized setup, you can import `createVertex` from `@ai-sdk/google-vertex/edge` and create a provider instance with your settings:

```ts
import { createVertex } from '@ai-sdk/google-vertex/edge';

const vertex = createVertex({
  project: 'my-project', // optional
  location: 'us-central1', // optional
});
```

For Edge runtime authentication, you'll need to set these environment variables from your Google Default Application Credentials JSON file:

- `GOOGLE_CLIENT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_PRIVATE_KEY_ID` (optional)

These values can be obtained from a service account JSON file from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).

##### Optional Provider Settings

You can use the following optional settings to customize the provider instance:

- **project** *string*

  The Google Cloud project ID that you want to use for the API calls.
  It uses the `GOOGLE_VERTEX_PROJECT` environment variable by default.

- **location** *string*

  The Google Cloud location that you want to use for the API calls, e.g. `us-central1`.
  It uses the `GOOGLE_VERTEX_LOCATION` environment variable by default.

- **googleCredentials** *object*

  Optional. The credentials used by the Edge provider for authentication. These credentials are typically set through environment variables and are derived from a service account JSON file.

  - **clientEmail** *string*
    The client email from the service account JSON file. Defaults to the contents of the `GOOGLE_CLIENT_EMAIL` environment variable.

  - **privateKey** *string*
    The private key from the service account JSON file. Defaults to the contents of the `GOOGLE_PRIVATE_KEY` environment variable.

  - **privateKeyId** *string*
    The private key ID from the service account JSON file (optional). Defaults to the contents of the `GOOGLE_PRIVATE_KEY_ID` environment variable.

- **headers** *Resolvable\<Record\<string, string | undefined>>*

  Headers to include in the requests. Can be provided in multiple formats:

  - A record of header key-value pairs: `Record<string, string | undefined>`
  - A function that returns headers: `() => Record<string, string | undefined>`
  - An async function that returns headers: `async () => Record<string, string | undefined>`
  - A promise that resolves to headers: `Promise<Record<string, string | undefined>>`

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

### Language Models

You can create models that call the Vertex API using the provider instance.
The first argument is the model id, e.g. `gemini-1.5-pro`.

```ts
const model = vertex('gemini-1.5-pro');
```

If you are using [your own
models](https://cloud.google.com/vertex-ai/docs/training-overview), the name
of your model needs to start with `projects/`.

Google Vertex models support also some model specific settings that are not part
of the [standard call settings](/docs/ai-sdk-core/settings). You can pass them as
an options argument:

```ts
const model = vertex('gemini-1.5-pro');

await generateText({
  model,
  providerOptions: {
    google: {
      safetySettings: [
        {
          category: 'HARM_CATEGORY_UNSPECIFIED',
          threshold: 'BLOCK_LOW_AND_ABOVE',
        },
      ],
    },
  },
});
```

The following optional provider options are available for Google Vertex models:

- **structuredOutputs** *boolean*

  Optional. Enable structured output. Default is true.

  This is useful when the JSON Schema contains elements that are
  not supported by the OpenAPI schema version that
  Google Vertex uses. You can use this to disable
  structured outputs if you need to.

  See [Troubleshooting: Schema Limitations](#schema-limitations) for more details.

- **safetySettings** *Array<{ category: string; threshold: string }>*

  Optional. Safety settings for the model.

  - **category** *string*

    The category of the safety setting. Can be one of the following:

    - `HARM_CATEGORY_UNSPECIFIED`
    - `HARM_CATEGORY_HATE_SPEECH`
    - `HARM_CATEGORY_DANGEROUS_CONTENT`
    - `HARM_CATEGORY_HARASSMENT`
    - `HARM_CATEGORY_SEXUALLY_EXPLICIT`
    - `HARM_CATEGORY_CIVIC_INTEGRITY`

  - **threshold** *string*

    The threshold of the safety setting. Can be one of the following:

    - `HARM_BLOCK_THRESHOLD_UNSPECIFIED`
    - `BLOCK_LOW_AND_ABOVE`
    - `BLOCK_MEDIUM_AND_ABOVE`
    - `BLOCK_ONLY_HIGH`
    - `BLOCK_NONE`

- **audioTimestamp** *boolean*

  Optional. Enables timestamp understanding for audio files. Defaults to false.

  This is useful for generating transcripts with accurate timestamps.
  Consult [Google's Documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/audio-understanding) for usage details.

- **labels** *object*

  Optional. Defines labels used in billing reports.

  Consult [Google's Documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/add-labels-to-api-calls) for usage details.

You can use Google Vertex language models to generate text with the `generateText` function:

```ts highlight="1,4"
import { vertex } from '@ai-sdk/google-vertex';
import { generateText } from 'ai';

const { text } = await generateText({
  model: vertex('gemini-1.5-pro'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});
```

Google Vertex language models can also be used in the `streamText` function
(see [AI SDK Core](/docs/ai-sdk-core)).

#### Code Execution

With [Code Execution](https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/code-execution), certain Gemini models on Vertex AI can generate and execute Python code. This allows the model to perform calculations, data manipulation, and other programmatic tasks to enhance its responses.

You can enable code execution by adding the `code_execution` tool to your request.

```ts
import { vertex } from '@ai-sdk/google-vertex';
import { generateText } from 'ai';

const result = await generateText({
  model: vertex('gemini-2.5-pro'),
  tools: { code_execution: vertex.tools.codeExecution({}) },
  prompt:
    'Use python to calculate 20th fibonacci number. Then find the nearest palindrome to it.',
});
```

The response will contain `tool-call` and `tool-result` parts for the executed code.

#### URL Context

URL Context allows Gemini models to retrieve and analyze content from URLs. Supported models: Gemini 2.5 Flash-Lite, 2.5 Pro, 2.5 Flash, 2.0 Flash.

```ts
import { vertex } from '@ai-sdk/google-vertex';
import { generateText } from 'ai';

const result = await generateText({
  model: vertex('gemini-2.5-pro'),
  tools: { url_context: vertex.tools.urlContext({}) },
  prompt: 'What are the key points from https://example.com/article?',
});
```

#### Google Search

Google Search enables Gemini models to access real-time web information. Supported models: Gemini 2.5 Flash-Lite, 2.5 Flash, 2.0 Flash, 2.5 Pro.

```ts
import { vertex } from '@ai-sdk/google-vertex';
import { generateText } from 'ai';

const result = await generateText({
  model: vertex('gemini-2.5-pro'),
  tools: { google_search: vertex.tools.googleSearch({}) },
  prompt: 'What are the latest developments in AI?',
});
```

#### Enterprise Web Search

[Enterprise Web Search](https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise) provides grounding using a compliance-focused web index designed for highly-regulated industries such as finance, healthcare, and the public sector. Unlike standard Google Search grounding, Enterprise Web Search does not log customer data and supports VPC service controls. Supported models: Gemini 2.0 and newer.

```ts
import { vertex } from '@ai-sdk/google-vertex';
import { generateText } from 'ai';

const result = await generateText({
  model: vertex('gemini-2.5-flash'),
  tools: {
    enterprise_web_search: vertex.tools.enterpriseWebSearch({}),
  },
  prompt: 'What are the latest FDA regulations for clinical trials?',
});
```

#### Google Maps

Google Maps grounding enables Gemini models to access Google Maps data for location-aware responses. Supported models: Gemini 2.5 Flash-Lite, 2.5 Flash, 2.0 Flash, 2.5 Pro, 3.0 Pro.

```ts
import { vertex } from '@ai-sdk/google-vertex';
import { generateText } from 'ai';

const result = await generateText({
  model: vertex('gemini-2.5-flash'),
  tools: {
    google_maps: vertex.tools.googleMaps({}),
  },
  providerOptions: {
    google: {
      retrievalConfig: {
        latLng: { latitude: 34.090199, longitude: -117.881081 },
      },
    },
  },
  prompt: 'What are the best Italian restaurants nearby?',
});
```

The optional `retrievalConfig.latLng` provider option provides location context for queries about nearby places. This configuration applies to any grounding tools that support location context.

#### Reasoning (Thinking Tokens)

Google Vertex AI, through its support for Gemini models, can also emit "thinking" tokens, representing the model's reasoning process. The AI SDK exposes these as reasoning information.

To enable thinking tokens for compatible Gemini models via Vertex, set `includeThoughts: true` in the `thinkingConfig` provider option. Since the Vertex provider uses the Google provider's underlying language model, these options are passed through `providerOptions.google`:

```ts
import { vertex } from '@ai-sdk/google-vertex';
import { GoogleGenerativeAIProviderOptions } from '@ai-sdk/google'; // Note: importing from @ai-sdk/google
import { generateText, streamText } from 'ai';

// For generateText:
const { text, reasoning, reasoningDetails } = await generateText({
  model: vertex('gemini-2.0-flash-001'), // Or other supported model via Vertex
  providerOptions: {
    google: {
      // Options are nested under 'google' for Vertex provider
      thinkingConfig: {
        includeThoughts: true,
        // thinkingBudget: 2048, // Optional
      },
    } satisfies GoogleGenerativeAIProviderOptions,
  },
  prompt: 'Explain quantum computing in simple terms.',
});

console.log('Reasoning:', reasoning);
console.log('Reasoning Details:', reasoningDetails);
console.log('Final Text:', text);

// For streamText:
const result = streamText({
  model: vertex('gemini-2.0-flash-001'), // Or other supported model via Vertex
  providerOptions: {
    google: {
      // Options are nested under 'google' for Vertex provider
      thinkingConfig: {
        includeThoughts: true,
        // thinkingBudget: 2048, // Optional
      },
    } satisfies GoogleGenerativeAIProviderOptions,
  },
  prompt: 'Explain quantum computing in simple terms.',
});

for await (const part of result.fullStream) {
  if (part.type === 'reasoning') {
    process.stdout.write(`THOUGHT: ${part.textDelta}\n`);
  } else if (part.type === 'text-delta') {
    process.stdout.write(part.textDelta);
  }
}
```

When `includeThoughts` is true, parts of the API response marked with `thought: true` will be processed as reasoning.

- In `generateText`, these contribute to the `reasoning` (string) and `reasoningDetails` (array) fields.
- In `streamText`, these are emitted as `reasoning` stream parts.

  Refer to the [Google Vertex AI documentation on
  "thinking"](https://cloud.google.com/vertex-ai/generative-ai/docs/thinking)
  for model compatibility and further details.

#### File Inputs

The Google Vertex provider supports file inputs, e.g. PDF files.

```ts
import { vertex } from '@ai-sdk/google-vertex';
import { generateText } from 'ai';

const { text } = await generateText({
  model: vertex('gemini-1.5-pro'),
  messages: [
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: 'What is an embedding model according to this document?',
        },
        {
          type: 'file',
          data: fs.readFileSync('./data/ai.pdf'),
          mediaType: 'application/pdf',
        },
      ],
    },
  ],
});
```

The AI SDK will automatically download URLs if you pass them as data, except
for `gs://` URLs. You can use the Google Cloud Storage API to upload larger
files to that location.

See [File Parts](/docs/foundations/prompts#file-parts) for details on how to use files in prompts.

### Safety Ratings

The safety ratings provide insight into the safety of the model's response.
See [Google Vertex AI documentation on configuring safety filters](https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/configure-safety-filters).

Example response excerpt:

```json
{
  "safetyRatings": [
    {
      "category": "HARM_CATEGORY_HATE_SPEECH",
      "probability": "NEGLIGIBLE",
      "probabilityScore": 0.11027937,
      "severity": "HARM_SEVERITY_LOW",
      "severityScore": 0.28487435
    },
    {
      "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
      "probability": "HIGH",
      "blocked": true,
      "probabilityScore": 0.95422274,
      "severity": "HARM_SEVERITY_MEDIUM",
      "severityScore": 0.43398145
    },
    {
      "category": "HARM_CATEGORY_HARASSMENT",
      "probability": "NEGLIGIBLE",
      "probabilityScore": 0.11085559,
      "severity": "HARM_SEVERITY_NEGLIGIBLE",
      "severityScore": 0.19027223
    },
    {
      "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      "probability": "NEGLIGIBLE",
      "probabilityScore": 0.22901751,
      "severity": "HARM_SEVERITY_NEGLIGIBLE",
      "severityScore": 0.09089675
    }
  ]
}
```

For more details, see the [Google Vertex AI documentation on grounding with Google Search](https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/ground-gemini#ground-to-search).

### Troubleshooting

#### Schema Limitations

The Google Vertex API uses a subset of the OpenAPI 3.0 schema,
which does not support features such as unions.
The errors that you get in this case look like this:

`GenerateContentRequest.generation_config.response_schema.properties[occupation].type: must be specified`

By default, structured outputs are enabled (and for tool calling they are required).
You can disable structured outputs for object generation as a workaround:

```ts highlight="3,8"
const result = await generateObject({
  model: vertex('gemini-1.5-pro'),
  providerOptions: {
    google: {
      structuredOutputs: false,
    },
  },
  schema: z.object({
    name: z.string(),
    age: z.number(),
    contact: z.union([
      z.object({
        type: z.literal('email'),
        value: z.string(),
      }),
      z.object({
        type: z.literal('phone'),
        value: z.string(),
      }),
    ]),
  }),
  prompt: 'Generate an example person for testing.',
});
```

The following Zod features are known to not work with Google Vertex:

- `z.union`
- `z.record`

### Model Capabilities

| Model                  | Image Input         | Object Generation   | Tool Usage          | Tool Streaming      |
| ---------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `gemini-2.0-flash-001` |  |  |  |  |
| `gemini-2.0-flash-exp` |  |  |  |  |
| `gemini-1.5-flash`     |  |  |  |  |
| `gemini-1.5-pro`       |  |  |  |  |

The table above lists popular models. Please see the [Google Vertex AI
docs](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/inference#supported-models)
for a full list of available models. The table above lists popular models. You
can also pass any available provider model ID as a string if needed.

### Embedding Models

You can create models that call the Google Vertex AI embeddings API using the `.textEmbeddingModel()` factory method:

```ts
const model = vertex.textEmbeddingModel('text-embedding-004');
```

Google Vertex AI embedding models support additional settings. You can pass them as an options argument:

```ts
import { vertex } from '@ai-sdk/google-vertex';
import { embed } from 'ai';

const model = vertex.textEmbeddingModel('text-embedding-004');

const { embedding } = await embed({
  model,
  value: 'sunny day at the beach',
  providerOptions: {
    google: {
      outputDimensionality: 512, // optional, number of dimensions for the embedding
      taskType: 'SEMANTIC_SIMILARITY', // optional, specifies the task type for generating embeddings
      autoTruncate: false, // optional
    },
  },
});
```

The following optional provider options are available for Google Vertex AI embedding models:

- **outputDimensionality**: *number*

  Optional reduced dimension for the output embedding. If set, excessive values in the output embedding are truncated from the end.

- **taskType**: *string*

  Optional. Specifies the task type for generating embeddings. Supported task types include:

  - `SEMANTIC_SIMILARITY`: Optimized for text similarity.
  - `CLASSIFICATION`: Optimized for text classification.
  - `CLUSTERING`: Optimized for clustering texts based on similarity.
  - `RETRIEVAL_DOCUMENT`: Optimized for document retrieval.
  - `RETRIEVAL_QUERY`: Optimized for query-based retrieval.
  - `QUESTION_ANSWERING`: Optimized for answering questions.
  - `FACT_VERIFICATION`: Optimized for verifying factual information.
  - `CODE_RETRIEVAL_QUERY`: Optimized for retrieving code blocks based on natural language queries.

- **title**: *string*

  Optional. The title of the document being embedded. This helps the model produce better embeddings by providing additional context. Only valid when `taskType` is set to `'RETRIEVAL_DOCUMENT'`.

- **autoTruncate**: *boolean*

  Optional. When set to `true`, input text will be truncated if it exceeds the maximum length. When set to `false`, an error is returned if the input text is too long. Defaults to `true`.

#### Model Capabilities

| Model                        | Max Values Per Call | Parallel Calls      | Multimodal          |
| ---------------------------- | ------------------- | ------------------- | ------------------- |
| `text-embedding-005`         | 2048                |  |  |
| `gemini-embedding-2-preview` | 2048                |  |  |

The table above lists popular models. You can also pass any available provider
model ID as a string if needed.

### Image Models

You can create [Imagen](https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview) models that call the [Imagen on Vertex AI API](https://cloud.google.com/vertex-ai/generative-ai/docs/image/generate-images)
using the `.image()` factory method. For more on image generation with the AI SDK see [generateImage()](/docs/reference/ai-sdk-core/generate-image).

```ts
import { vertex } from '@ai-sdk/google-vertex';
import { experimental_generateImage as generateImage } from 'ai';

const { image } = await generateImage({
  model: vertex.image('imagen-4.0-generate-001'),
  prompt: 'A futuristic cityscape at sunset',
  aspectRatio: '16:9',
});
```

Further configuration can be done using Google Vertex provider options. You can validate the provider options using the `GoogleVertexImageProviderOptions` type.

```ts
import { vertex } from '@ai-sdk/google-vertex';
import { GoogleVertexImageProviderOptions } from '@ai-sdk/google-vertex';
import { experimental_generateImage as generateImage } from 'ai';

const { image } = await generateImage({
  model: vertex.image('imagen-4.0-generate-001'),
  providerOptions: {
    vertex: {
      negativePrompt: 'pixelated, blurry, low-quality',
    } satisfies GoogleVertexImageProviderOptions,
  },
  // ...
});
```

The following provider options are available:

- **negativePrompt** *string*
  A description of what to discourage in the generated images.

- **personGeneration** `allow_adult` | `allow_all` | `dont_allow`
  Whether to allow person generation. Defaults to `allow_adult`.

- **safetySetting** `block_low_and_above` | `block_medium_and_above` | `block_only_high` | `block_none`
  Whether to block unsafe content. Defaults to `block_medium_and_above`.

- **addWatermark** *boolean*
  Whether to add an invisible watermark to the generated images. Defaults to `true`.

- **storageUri** *string*
  Cloud Storage URI to store the generated images.

  Imagen models do not support the `size` parameter. Use the `aspectRatio`
  parameter instead.

Additional information about the images can be retrieved using Google Vertex meta data.

```ts
import { vertex } from '@ai-sdk/google-vertex';
import { GoogleVertexImageProviderOptions } from '@ai-sdk/google-vertex';
import { experimental_generateImage as generateImage } from 'ai';

const { image, providerMetadata } = await generateImage({
  model: vertex.image('imagen-4.0-generate-001'),
  prompt: 'A futuristic cityscape at sunset',
  aspectRatio: '16:9',
});

console.log(
  `Revised prompt: ${providerMetadata.vertex.images[0].revisedPrompt}`,
);
```

#### Model Capabilities

| Model                           | Aspect Ratios             |
| ------------------------------- | ------------------------- |
| `imagen-3.0-generate-001`       | 1:1, 3:4, 4:3, 9:16, 16:9 |
| `imagen-3.0-generate-002`       | 1:1, 3:4, 4:3, 9:16, 16:9 |
| `imagen-3.0-fast-generate-001`  | 1:1, 3:4, 4:3, 9:16, 16:9 |
| `imagen-4.0-generate-001`       | 1:1, 3:4, 4:3, 9:16, 16:9 |
| `imagen-4.0-fast-generate-001`  | 1:1, 3:4, 4:3, 9:16, 16:9 |
| `imagen-4.0-ultra-generate-001` | 1:1, 3:4, 4:3, 9:16, 16:9 |
