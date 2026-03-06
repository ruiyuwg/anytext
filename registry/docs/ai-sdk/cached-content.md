### Cached Content

Google Vertex AI supports both explicit and implicit caching to help reduce costs on repetitive content.

#### Implicit Caching

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { generateText } from "ai";

// Structure prompts with consistent content at the beginning
const baseContext =
  "You are a cooking assistant with expertise in Italian cuisine. Here are 1000 lasagna recipes for reference...";

const { text: veggieLasagna } = await generateText({
  model: vertex("gemini-2.5-pro"),
  prompt: `${baseContext}\n\nWrite a vegetarian lasagna recipe for 4 people.`,
});

// Second request with same prefix - eligible for cache hit
const { text: meatLasagna, providerMetadata } = await generateText({
  model: vertex("gemini-2.5-pro"),
  prompt: `${baseContext}\n\nWrite a meat lasagna recipe for 12 people.`,
});

// Check cached token count in usage metadata
console.log("Cached tokens:", providerMetadata.vertex);
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

#### Explicit Caching

You can use explicit caching with Gemini models. See the [Vertex AI context caching documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview) to check if caching is supported for your model.

First, create a cache using the Google GenAI SDK with Vertex mode enabled:

```ts
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  vertexai: true,
  project: process.env.GOOGLE_VERTEX_PROJECT,
  location: process.env.GOOGLE_VERTEX_LOCATION,
});

const model = "gemini-2.5-pro";

// Create a cache with the content you want to reuse
const cache = await ai.caches.create({
  model,
  config: {
    contents: [
      {
        role: "user",
        parts: [{ text: "1000 Lasagna Recipes..." }],
      },
    ],
    ttl: "300s", // Cache expires after 5 minutes
  },
});

console.log("Cache created:", cache.name);
// e.g. projects/my-project/locations/us-central1/cachedContents/abc123
```

Then use the cache with the AI SDK:

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { type GoogleLanguageModelOptions } from "@ai-sdk/google";
import { generateText } from "ai";

const { text: veggieLasagnaRecipe } = await generateText({
  model: vertex("gemini-2.5-pro"),
  prompt: "Write a vegetarian lasagna recipe for 4 people.",
  providerOptions: {
    vertex: {
      cachedContent: cache.name,
    } satisfies GoogleLanguageModelOptions,
  },
});

const { text: meatLasagnaRecipe } = await generateText({
  model: vertex("gemini-2.5-pro"),
  prompt: "Write a meat lasagna recipe for 12 people.",
  providerOptions: {
    vertex: {
      cachedContent: cache.name,
    } satisfies GoogleLanguageModelOptions,
  },
});
```

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

```ts highlight="7,12"
import { vertex } from "@ai-sdk/google-vertex";
import { type GoogleLanguageModelOptions } from "@ai-sdk/google";
import { generateText, Output } from "ai";

const result = await generateText({
  model: vertex("gemini-2.5-pro"),
  providerOptions: {
    vertex: {
      structuredOutputs: false,
    } satisfies GoogleLanguageModelOptions,
  },
  output: Output.object({
    schema: z.object({
      name: z.string(),
      age: z.number(),
      contact: z.union([
        z.object({
          type: z.literal("email"),
          value: z.string(),
        }),
        z.object({
          type: z.literal("phone"),
          value: z.string(),
        }),
      ]),
    }),
  }),
  prompt: "Generate an example person for testing.",
});
```

The following Zod features are known to not work with Google Vertex:

- `z.union`
- `z.record`

### Model Capabilities

| Model                  | Image Input | Object Generation | Tool Usage | Tool Streaming |
| ---------------------- | ----------- | ----------------- | ---------- | -------------- |
| `gemini-3-pro-preview` |             |                   |            |                |
| `gemini-2.5-pro`       |             |                   |            |                |
| `gemini-2.5-flash`     |             |                   |            |                |
| `gemini-2.0-flash-001` |             |                   |            |                |

The table above lists popular models. Please see the [Google Vertex AI
docs](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/inference#supported-models)
for a full list of available models. The table above lists popular models. You
can also pass any available provider model ID as a string if needed.
