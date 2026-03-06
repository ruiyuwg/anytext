## Language Models

You can create models that call the [Google Generative AI API](https://ai.google.dev/api/rest) using the provider instance.
The first argument is the model id, e.g. `gemini-2.5-flash`.
The models support tool calls and some have multi-modal capabilities.

```ts
const model = google('gemini-2.5-flash');
```

You can use Google Generative AI language models to generate text with the `generateText` function:

```ts
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

const { text } = await generateText({
  model: google('gemini-2.5-flash'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});
```

Google Generative AI language models can also be used in the `streamText` function
and support structured data generation with [`Output`](/docs/reference/ai-sdk-core/output)
(see [AI SDK Core](/docs/ai-sdk-core)).

Google Generative AI also supports some model specific settings that are not part of the [standard call settings](/docs/ai-sdk-core/settings).
You can pass them as an options argument:

```ts
import { google, type GoogleLanguageModelOptions } from '@ai-sdk/google';

const model = google('gemini-2.5-flash');

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
    } satisfies GoogleLanguageModelOptions,
  },
});
```

The following optional provider options are available for Google Generative AI models:

- **cachedContent** *string*

  Optional. The name of the cached content used as context to serve the prediction.
  Format: cachedContents/{cachedContent}

- **structuredOutputs** *boolean*

  Optional. Enable structured output. Default is true.

  This is useful when the JSON Schema contains elements that are
  not supported by the OpenAPI schema version that
  Google Generative AI uses. You can use this to disable
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
    - `OFF`

- **responseModalities** *string\[]*
  The modalities to use for the response. The following modalities are supported: `TEXT`, `IMAGE`. When not defined or empty, the model defaults to returning only text.

- **thinkingConfig** *{ thinkingLevel?: 'minimal' | 'low' | 'medium' | 'high'; thinkingBudget?: number; includeThoughts?: boolean }*

  Optional. Configuration for the model's thinking process. Only supported by specific [Google Generative AI models](https://ai.google.dev/gemini-api/docs/thinking).

  - **thinkingLevel** *'minimal' | 'low' | 'medium' | 'high'*

    Optional. Controls the thinking depth for Gemini 3 models. Gemini 3.1 Pro supports 'low', 'medium', and 'high', Gemini 3 Pro supports 'low' and 'high', while Gemini 3 Flash supports all four levels: 'minimal', 'low', 'medium', and 'high'. Only supported by Gemini 3 models.

  - **thinkingBudget** *number*

    Optional. Gives the model guidance on the number of thinking tokens it can use when generating a response. Setting it to 0 disables thinking, if the model supports it.
    For more information about the possible value ranges for each model see [Google Generative AI thinking documentation](https://ai.google.dev/gemini-api/docs/thinking#set-budget).

    This option is for Gemini 2.5 models. Gemini 3 models should use
    `thinkingLevel` instead.

  - **includeThoughts** *boolean*

    Optional. If set to true, thought summaries are returned, which are synthesized versions of the model's raw thoughts and offer insights into the model's internal reasoning process.

- **imageConfig** *{ aspectRatio?: string, imageSize?: string }*

  Optional. Configuration for the models image generation. Only supported by specific [Google Generative AI models](https://ai.google.dev/gemini-api/docs/image-generation).

  - **aspectRatio** *string*

    Model defaults to generate 1:1 squares, or to matching the output image size to that of your input image. Can be one of the following:

    - 1:1
    - 2:3
    - 3:2
    - 3:4
    - 4:3
    - 4:5
    - 5:4
    - 9:16
    - 16:9
    - 21:9

  - **imageSize** *string*

    Controls the output image resolution. Defaults to 1K. Can be one of the following:

    - 1K
    - 2K
    - 4K

- **audioTimestamp** *boolean*

  Optional. Enables timestamp understanding for audio-only files.
  See [Google Cloud audio understanding documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/audio-understanding).

- **mediaResolution** *string*

  Optional. If specified, the media resolution specified will be used. Can be one of the following:

  - `MEDIA_RESOLUTION_UNSPECIFIED`
  - `MEDIA_RESOLUTION_LOW`
  - `MEDIA_RESOLUTION_MEDIUM`
  - `MEDIA_RESOLUTION_HIGH`

  See [Google API MediaResolution documentation](https://ai.google.dev/api/generate-content#MediaResolution).

- **labels** *Record\<string, string>*

  Optional. Defines labels used in billing reports. Available on Vertex AI only.
  See [Google Cloud labels documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/add-labels-to-api-calls).

- **threshold** *string*

  Optional. Standalone threshold setting that can be used independently of `safetySettings`.
  Uses the same values as the `safetySettings` threshold.

### Thinking

The Gemini 2.5 and Gemini 3 series models use an internal "thinking process" that significantly improves their reasoning and multi-step planning abilities, making them highly effective for complex tasks such as coding, advanced mathematics, and data analysis. For more information see [Google Generative AI thinking documentation](https://ai.google.dev/gemini-api/docs/thinking).

#### Gemini 3 Models

For Gemini 3 models, use the `thinkingLevel` parameter to control the depth of reasoning:

```ts
import { google, GoogleLanguageModelOptions } from '@ai-sdk/google';
import { generateText } from 'ai';

const model = google('gemini-3.1-pro-preview');

const { text, reasoning } = await generateText({
  model: model,
  prompt: 'What is the sum of the first 10 prime numbers?',
  providerOptions: {
    google: {
      thinkingConfig: {
        thinkingLevel: 'high',
        includeThoughts: true,
      },
    } satisfies GoogleLanguageModelOptions,
  },
});

console.log(text);

console.log(reasoning); // Reasoning summary
```

#### Gemini 2.5 Models

For Gemini 2.5 models, use the `thinkingBudget` parameter to control the number of thinking tokens:

```ts
import { google, GoogleLanguageModelOptions } from '@ai-sdk/google';
import { generateText } from 'ai';

const model = google('gemini-2.5-flash');

const { text, reasoning } = await generateText({
  model: model,
  prompt: 'What is the sum of the first 10 prime numbers?',
  providerOptions: {
    google: {
      thinkingConfig: {
        thinkingBudget: 8192,
        includeThoughts: true,
      },
    } satisfies GoogleLanguageModelOptions,
  },
});

console.log(text);

console.log(reasoning); // Reasoning summary
```

### File Inputs

The Google Generative AI provider supports file inputs, e.g. PDF files.

```ts
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

const result = await generateText({
  model: google('gemini-2.5-flash'),
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

You can also use YouTube URLs directly:

```ts
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

const result = await generateText({
  model: google('gemini-2.5-flash'),
  messages: [
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: 'Summarize this video',
        },
        {
          type: 'file',
          data: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          mediaType: 'video/mp4',
        },
      ],
    },
  ],
});
```

The AI SDK will automatically download URLs if you pass them as data, except
for `https://generativelanguage.googleapis.com/v1beta/files/` and YouTube
URLs. You can use the Google Generative AI Files API to upload larger files to
that location. YouTube URLs (public or unlisted videos) are supported directly

- you can specify one YouTube video URL per request.

See [File Parts](/docs/foundations/prompts#file-parts) for details on how to use files in prompts.

### Cached Content

Google Generative AI supports both explicit and implicit caching to help reduce costs on repetitive content.

#### Implicit Caching

Gemini 2.5 models automatically provide cache cost savings without needing to create an explicit cache. When you send requests that share common prefixes with previous requests, you'll receive a 75% token discount on cached content.

To maximize cache hits with implicit caching:

- Keep content at the beginning of requests consistent
- Add variable content (like user questions) at the end of prompts
- Ensure requests meet minimum token requirements:
  - Gemini 2.5 Flash: 1024 tokens minimum
  - Gemini 2.5 Pro: 2048 tokens minimum

```ts
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

// Structure prompts with consistent content at the beginning
const baseContext =
  'You are a cooking assistant with expertise in Italian cuisine. Here are 1000 lasagna recipes for reference...';

const { text: veggieLasagna } = await generateText({
  model: google('gemini-2.5-pro'),
  prompt: `${baseContext}\n\nWrite a vegetarian lasagna recipe for 4 people.`,
});

// Second request with same prefix - eligible for cache hit
const { text: meatLasagna, providerMetadata } = await generateText({
  model: google('gemini-2.5-pro'),
  prompt: `${baseContext}\n\nWrite a meat lasagna recipe for 12 people.`,
});

// Check cached token count in usage metadata
console.log('Cached tokens:', providerMetadata.google);
// e.g.
// {
//   groundingMetadata: null,
//   safetyRatings: null,
//   usageMetadata: {
//     cachedContentTokenCount: 2027,
//     thoughtsTokenCount: 702,
//     promptTokenCount: 2152,
//     candidatesTokenCount: 710,
//     totalTokenCount: 3564
//   }
// }
```

Usage metadata was added to `providerMetadata` in `@ai-sdk/google@1.2.23`. If
you are using an older version, usage metadata is available in the raw HTTP
`response` body returned as part of the return value from `generateText`.

#### Explicit Caching

For guaranteed cost savings, you can still use explicit caching with Gemini 2.5 and 2.0 models. See the [models page](https://ai.google.dev/gemini-api/docs/models) to check if caching is supported for the used model:

```ts
import { google, type GoogleLanguageModelOptions } from '@ai-sdk/google';
import { GoogleGenAI } from '@google/genai';
import { generateText } from 'ai';

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

const model = 'gemini-2.5-pro';

// Create a cache with the content you want to reuse
const cache = await ai.caches.create({
  model,
  config: {
    contents: [
      {
        role: 'user',
        parts: [{ text: '1000 Lasagna Recipes...' }],
      },
    ],
    ttl: '300s', // Cache expires after 5 minutes
  },
});

const { text: veggieLasagnaRecipe } = await generateText({
  model: google(model),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
  providerOptions: {
    google: {
      cachedContent: cache.name,
    } satisfies GoogleLanguageModelOptions,
  },
});

const { text: meatLasagnaRecipe } = await generateText({
  model: google(model),
  prompt: 'Write a meat lasagna recipe for 12 people.',
  providerOptions: {
    google: {
      cachedContent: cache.name,
    } satisfies GoogleLanguageModelOptions,
  },
});
```

### Code Execution

With [Code Execution](https://ai.google.dev/gemini-api/docs/code-execution), certain models can generate and execute Python code to perform calculations, solve problems, or provide more accurate information.

You can enable code execution by adding the `code_execution` tool to your request.

```ts
import { google } from '@ai-sdk/google';
import { googleTools } from '@ai-sdk/google/internal';
import { generateText } from 'ai';

const { text, toolCalls, toolResults } = await generateText({
  model: google('gemini-2.5-pro'),
  tools: { code_execution: google.tools.codeExecution({}) },
  prompt: 'Use python to calculate the 20th fibonacci number.',
});
```

The response will contain the tool calls and results from the code execution.

### Google Search

With [Google Search grounding](https://ai.google.dev/gemini-api/docs/google-search),
the model has access to the latest information using Google Search.

```ts highlight="8,17-20"
import { google } from '@ai-sdk/google';
import { GoogleGenerativeAIProviderMetadata } from '@ai-sdk/google';
import { generateText } from 'ai';

const { text, sources, providerMetadata } = await generateText({
  model: google('gemini-2.5-flash'),
  tools: {
    google_search: google.tools.googleSearch({}),
  },
  prompt:
    'List the top 5 San Francisco news from the past week.' +
    'You must include the date of each article.',
});

// access the grounding metadata. Casting to the provider metadata type
// is optional but provides autocomplete and type safety.
const metadata = providerMetadata?.google as
  | GoogleGenerativeAIProviderMetadata
  | undefined;
const groundingMetadata = metadata?.groundingMetadata;
const safetyRatings = metadata?.safetyRatings;
```

The `googleSearch` tool accepts the following optional configuration options:

- **searchTypes** *object*

  Enables specific search types. Both can be combined.

  - `webSearch`: Enable web search grounding (pass `{}` to enable). This is the default.
  - `imageSearch`: Enable [image search grounding](https://ai.google.dev/gemini-api/docs/image-generation#image-search) (pass `{}` to enable).

- **timeRangeFilter** *object*

  Restricts search results to a specific time range. Both `startTime` and `endTime` are required.

  - `startTime`: Start time in ISO 8601 format (e.g. `'2025-01-01T00:00:00Z'`).
  - `endTime`: End time in ISO 8601 format (e.g. `'2025-12-31T23:59:59Z'`).

```ts
google.tools.googleSearch({
  searchTypes: { webSearch: {} },
  timeRangeFilter: {
    startTime: '2025-01-01T00:00:00Z',
    endTime: '2025-12-31T23:59:59Z',
  },
});
```

When Google Search grounding is enabled, the model will include sources in the response.

Additionally, the grounding metadata includes detailed information about how search results were used to ground the model's response. Here are the available fields:

- **`webSearchQueries`** (`string[] | null`)

  - Array of search queries used to retrieve information
  - Example: `["What's the weather in Chicago this weekend?"]`

- **`searchEntryPoint`** (`{ renderedContent: string } | null`)

  - Contains the main search result content used as an entry point
  - The `renderedContent` field contains the formatted content

- **`groundingSupports`** (Array of support objects | null)
  - Contains details about how specific response parts are supported by search results
  - Each support object includes:
    - **`segment`**: Information about the grounded text segment
      - `text`: The actual text segment
      - `startIndex`: Starting position in the response
      - `endIndex`: Ending position in the response
    - **`groundingChunkIndices`**: References to supporting search result chunks
    - **`confidenceScores`**: Confidence scores (0-1) for each supporting chunk

Example response:

```json
{
  "groundingMetadata": {
    "webSearchQueries": ["What's the weather in Chicago this weekend?"],
    "searchEntryPoint": {
      "renderedContent": "..."
    },
    "groundingSupports": [
      {
        "segment": {
          "startIndex": 0,
          "endIndex": 65,
          "text": "Chicago weather changes rapidly, so layers let you adjust easily."
        },
        "groundingChunkIndices": [0],
        "confidenceScores": [0.99]
      }
    ]
  }
}
```

### Enterprise Web Search

With [Enterprise Web Search](https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise),
the model has access to a compliance-focused web index designed for highly-regulated industries such as finance, healthcare, and public sector.

Enterprise Web Search is only available on Vertex AI. You must use the Google
Vertex provider (`@ai-sdk/google-vertex`) instead of the standard Google
provider (`@ai-sdk/google`) to use this feature. Requires Gemini 2.0 or newer
models.

```ts
import { createVertex } from '@ai-sdk/google-vertex';
import { generateText } from 'ai';

const vertex = createVertex({
  project: 'my-project',
  location: 'us-central1',
});

const { text, sources, providerMetadata } = await generateText({
  model: vertex('gemini-2.5-flash'),
  tools: {
    enterprise_web_search: vertex.tools.enterpriseWebSearch({}),
  },
  prompt: 'What are the latest regulatory updates for financial services?',
});
```

Enterprise Web Search provides the following benefits:

- Does not log customer data
- Supports VPC service controls
- Compliance-focused web index for regulated industries

### File Search

The [File Search tool](https://ai.google.dev/gemini-api/docs/file-search) lets Gemini retrieve context from your own documents that you have indexed in File Search stores. Only Gemini 2.5 and Gemini 3 models support this feature.

```ts highlight="9-13"
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

const { text, sources } = await generateText({
  model: google('gemini-2.5-pro'),
  tools: {
    file_search: google.tools.fileSearch({
      fileSearchStoreNames: [
        'projects/my-project/locations/us/fileSearchStores/my-store',
      ],
      metadataFilter: 'author = "Robert Graves"',
      topK: 8,
    }),
  },
  prompt: "Summarise the key themes of 'I, Claudius'.",
});
```

File Search responses include citations via the normal `sources` field and expose raw [grounding metadata](#google-search) in `providerMetadata.google.groundingMetadata`.

### URL Context

Google provides a provider-defined URL context tool.

The URL context tool allows you to provide specific URLs that you want the model to analyze directly in from the prompt.

```ts highlight="9,13-17"
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

const { text, sources, providerMetadata } = await generateText({
  model: google('gemini-2.5-flash'),
  prompt: `Based on the document: https://ai.google.dev/gemini-api/docs/url-context.
          Answer this question: How many links we can consume in one request?`,
  tools: {
    url_context: google.tools.urlContext({}),
  },
});

const metadata = providerMetadata?.google as
  | GoogleGenerativeAIProviderMetadata
  | undefined;
const groundingMetadata = metadata?.groundingMetadata;
const urlContextMetadata = metadata?.urlContextMetadata;
```

The URL context metadata includes detailed information about how the model used the URL context to generate the response. Here are the available fields:

- **`urlMetadata`** (`{ retrievedUrl: string; urlRetrievalStatus: string; }[] | null`)

  - Array of URL context metadata
  - Each object includes:
    - **`retrievedUrl`**: The URL of the context
    - **`urlRetrievalStatus`**: The status of the URL retrieval

Example response:

```json
{
  "urlMetadata": [
    {
      "retrievedUrl": "https://ai-sdk.dev/providers/ai-sdk-providers/google-generative-ai",
      "urlRetrievalStatus": "URL_RETRIEVAL_STATUS_SUCCESS"
    }
  ]
}
```

With the URL context tool, you will also get the `groundingMetadata`.

```json
"groundingMetadata": {
    "groundingChunks": [
        {
            "web": {
                "uri": "https://ai-sdk.dev/providers/ai-sdk-providers/google-generative-ai",
                "title": "Google Generative AI - AI SDK Providers"
            }
        }
    ],
    "groundingSupports": [
        {
            "segment": {
                "startIndex": 67,
                "endIndex": 157,
                "text": "**Installation**: Install the `@ai-sdk/google` module using your preferred package manager"
            },
            "groundingChunkIndices": [
                0
            ]
        },
    ]
}
```

You can add up to 20 URLs per request.

The URL context tool is only supported for Gemini 2.0 Flash models and above.
Check the [supported models for URL context
tool](https://ai.google.dev/gemini-api/docs/url-context#supported-models).

#### Combine URL Context with Search Grounding

You can combine the URL context tool with search grounding to provide the model with the latest information from the web.

```ts highlight="9-10"
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

const { text, sources, providerMetadata } = await generateText({
  model: google('gemini-2.5-flash'),
  prompt: `Based on this context: https://ai-sdk.dev/providers/ai-sdk-providers/google-generative-ai, tell me how to use Gemini with AI SDK.
    Also, provide the latest news about AI SDK V5.`,
  tools: {
    google_search: google.tools.googleSearch({}),
    url_context: google.tools.urlContext({}),
  },
});

const metadata = providerMetadata?.google as
  | GoogleGenerativeAIProviderMetadata
  | undefined;
const groundingMetadata = metadata?.groundingMetadata;
const urlContextMetadata = metadata?.urlContextMetadata;
```

### Google Maps Grounding

With [Google Maps grounding](https://ai.google.dev/gemini-api/docs/maps-grounding),
the model has access to Google Maps data for location-aware responses. This enables providing local data and geospatial context, such as finding nearby restaurants.

```ts highlight="7-16"
import { google, type GoogleLanguageModelOptions } from '@ai-sdk/google';
import { GoogleGenerativeAIProviderMetadata } from '@ai-sdk/google';
import { generateText } from 'ai';

const { text, sources, providerMetadata } = await generateText({
  model: google('gemini-2.5-flash'),
  tools: {
    google_maps: google.tools.googleMaps({}),
  },
  providerOptions: {
    google: {
      retrievalConfig: {
        latLng: { latitude: 34.090199, longitude: -117.881081 },
      },
    } satisfies GoogleLanguageModelOptions,
  },
  prompt:
    'What are the best Italian restaurants within a 15-minute walk from here?',
});

const metadata = providerMetadata?.google as
  | GoogleGenerativeAIProviderMetadata
  | undefined;
const groundingMetadata = metadata?.groundingMetadata;
```

The optional `retrievalConfig.latLng` provider option provides location context for queries about nearby places. This configuration applies to any grounding tools that support location context, including Google Maps and Google Search.

When Google Maps grounding is enabled, the model's response will include sources pointing to Google Maps URLs. The grounding metadata includes `maps` chunks with place information:

```json
{
  "groundingMetadata": {
    "groundingChunks": [
      {
        "maps": {
          "uri": "https://maps.google.com/?cid=12345",
          "title": "Restaurant Name",
          "placeId": "places/ChIJ..."
        }
      }
    ]
  }
}
```

Google Maps grounding is supported on Gemini 2.0 and newer models.

### RAG Engine Grounding

With [RAG Engine Grounding](https://cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/use-vertexai-search#generate-content-using-gemini-api),
the model has access to your custom knowledge base using the Vertex RAG Engine.
This enables the model to provide answers based on your specific data sources and documents.

RAG Engine Grounding is only supported with Vertex Gemini models. You must use
the Google Vertex provider (`@ai-sdk/google-vertex`) instead of the standard
Google provider (`@ai-sdk/google`) to use this feature.

```ts highlight="8,17-20"
import { createVertex } from '@ai-sdk/google-vertex';
import { GoogleGenerativeAIProviderMetadata } from '@ai-sdk/google';
import { generateText } from 'ai';

const vertex = createVertex({
  project: 'my-project',
  location: 'us-central1',
});

const { text, sources, providerMetadata } = await generateText({
  model: vertex('gemini-2.5-flash'),
  tools: {
    vertex_rag_store: vertex.tools.vertexRagStore({
      ragCorpus:
        'projects/my-project/locations/us-central1/ragCorpora/my-rag-corpus',
      topK: 5,
    }),
  },
  prompt:
    'What are the key features of our product according to our documentation?',
});

// access the grounding metadata. Casting to the provider metadata type
// is optional but provides autocomplete and type safety.
const metadata = providerMetadata?.google as
  | GoogleGenerativeAIProviderMetadata
  | undefined;
const groundingMetadata = metadata?.groundingMetadata;
const safetyRatings = metadata?.safetyRatings;
```

When RAG Engine Grounding is enabled, the model will include sources from your RAG corpus in the response.

Additionally, the grounding metadata includes detailed information about how RAG results were used to ground the model's response. Here are the available fields:

- **`groundingChunks`** (Array of chunk objects | null)

  - Contains the retrieved context chunks from your RAG corpus
  - Each chunk includes:
    - **`retrievedContext`**: Information about the retrieved context
      - `uri`: The URI or identifier of the source document
      - `title`: The title of the source document (optional)
      - `text`: The actual text content of the chunk

- **`groundingSupports`** (Array of support objects | null)

  - Contains details about how specific response parts are supported by RAG results
  - Each support object includes:
    - **`segment`**: Information about the grounded text segment
      - `text`: The actual text segment
      - `startIndex`: Starting position in the response
      - `endIndex`: Ending position in the response
    - **`groundingChunkIndices`**: References to supporting RAG result chunks
    - **`confidenceScores`**: Confidence scores (0-1) for each supporting chunk

Example response:

```json
{
  "groundingMetadata": {
    "groundingChunks": [
      {
        "retrievedContext": {
          "uri": "gs://my-bucket/docs/product-guide.pdf",
          "title": "Product User Guide",
          "text": "Our product includes advanced AI capabilities, real-time processing, and enterprise-grade security features."
        }
      }
    ],
    "groundingSupports": [
      {
        "segment": {
          "startIndex": 0,
          "endIndex": 45,
          "text": "Our product includes advanced AI capabilities and real-time processing."
        },
        "groundingChunkIndices": [0],
        "confidenceScores": [0.95]
      }
    ]
  }
}
```

#### Configuration Options

The `vertexRagStore` tool accepts the following configuration options:

- **`ragCorpus`** (`string`, required)

  - The RagCorpus resource name in the format: `projects/{project}/locations/{location}/ragCorpora/{rag_corpus}`
  - This identifies your specific RAG corpus to search against

- **`topK`** (`number`, optional)

  - The number of top contexts to retrieve from your RAG corpus
  - Defaults to the corpus configuration if not specified

### Image Outputs

Gemini models with image generation capabilities (e.g. `gemini-2.5-flash-image`) support generating images as part of a multimodal response. Images are exposed as files in the response.

```ts
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

const result = await generateText({
  model: google('gemini-2.5-flash-image'),
  prompt:
    'Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme',
});

for (const file of result.files) {
  if (file.mediaType.startsWith('image/')) {
    console.log('Generated image:', file);
  }
}
```

If you primarily want to generate images without text output, you can also use
Gemini image models with the `generateImage()` function. See [Gemini Image
Models](#gemini-image-models) for details.

### Safety Ratings

The safety ratings provide insight into the safety of the model's response.
See [Google AI documentation on safety settings](https://ai.google.dev/gemini-api/docs/safety-settings).

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

### Troubleshooting

#### Schema Limitations

The Google Generative AI API uses a subset of the OpenAPI 3.0 schema,
which does not support features such as unions.
The errors that you get in this case look like this:

`GenerateContentRequest.generation_config.response_schema.properties[occupation].type: must be specified`

By default, structured outputs are enabled (and for tool calling they are required).
You can disable structured outputs for object generation as a workaround:

```ts highlight="3,8"
const { output } = await generateText({
  model: google('gemini-2.5-flash'),
  providerOptions: {
    google: {
      structuredOutputs: false,
    } satisfies GoogleLanguageModelOptions,
  },
  output: Output.object({
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
  }),
  prompt: 'Generate an example person for testing.',
});
```

The following Zod features are known to not work with Google Generative AI:

- `z.union`
- `z.record`

### Model Capabilities

| Model                                 | Image Input         | Object Generation   | Tool Usage          | Tool Streaming      | Google Search       | URL Context         |
| ------------------------------------- | ------------------- | ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `gemini-3.1-pro-preview`              |  |  |  |  |  |  |
| `gemini-3.1-flash-image-preview`      |  |  |  |  |  |  |
| `gemini-3.1-flash-lite-preview`       |  |  |  |  |  |  |
| `gemini-3-pro-preview`                |  |  |  |  |  |  |
| `gemini-3-pro-image-preview`          |  |  |  |  |  |  |
| `gemini-3-flash-preview`              |  |  |  |  |  |  |
| `gemini-2.5-pro`                      |  |  |  |  |  |  |
| `gemini-2.5-flash`                    |  |  |  |  |  |  |
| `gemini-2.5-flash-lite`               |  |  |  |  |  |  |
| `gemini-2.5-flash-lite-preview-06-17` |  |  |  |  |  |  |
| `gemini-2.0-flash`                    |  |  |  |  |  |  |

The table above lists popular models. Please see the [Google Generative AI
docs](https://ai.google.dev/gemini-api/docs/models/) for a full list of
available models. The table above lists popular models. You can also pass any
available provider model ID as a string if needed.

## Gemma Models

You can use [Gemma models](https://deepmind.google/models/gemma/) with the Google Generative AI API.
The following Gemma models are available:

- `gemma-3-27b-it`
- `gemma-3-12b-it`

Gemma models don't natively support the `systemInstruction` parameter, but the provider automatically handles system instructions by prepending them to the first user message. This allows you to use system instructions with Gemma models seamlessly:

```ts
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

const { text } = await generateText({
  model: google('gemma-3-27b-it'),
  system: 'You are a helpful assistant that responds concisely.',
  prompt: 'What is machine learning?',
});
```

The system instruction is automatically formatted and included in the conversation, so Gemma models can follow the guidance without any additional configuration.
