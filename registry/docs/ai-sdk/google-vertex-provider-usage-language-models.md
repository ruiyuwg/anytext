### Language Models

You can create models that call the Vertex API using the provider instance.
The first argument is the model id, e.g. `gemini-2.5-pro`.

```ts
const model = vertex("gemini-2.5-pro");
```

If you are using [your own
models](https://cloud.google.com/vertex-ai/docs/training-overview), the name
of your model needs to start with `projects/`.

Google Vertex models support also some model specific settings that are not part
of the [standard call settings](/docs/ai-sdk-core/settings). You can pass them as
an options argument:

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { type GoogleLanguageModelOptions } from "@ai-sdk/google";

const model = vertex("gemini-2.5-pro");

await generateText({
  model,
  providerOptions: {
    vertex: {
      safetySettings: [
        {
          category: "HARM_CATEGORY_UNSPECIFIED",
          threshold: "BLOCK_LOW_AND_ABOVE",
        },
      ],
    } satisfies GoogleLanguageModelOptions,
  },
});
```

The following optional provider options are available for Google Vertex models:

- **cachedContent** _string_

  Optional. The name of the cached content used as context to serve the prediction.
  Format: projects/{project}/locations/{location}/cachedContents/{cachedContent}

- **structuredOutputs** _boolean_

  Optional. Enable structured output. Default is true.

  This is useful when the JSON Schema contains elements that are
  not supported by the OpenAPI schema version that
  Google Vertex uses. You can use this to disable
  structured outputs if you need to.

  See [Troubleshooting: Schema Limitations](#schema-limitations) for more details.

- **safetySettings** _Array<{ category: string; threshold: string }>_

  Optional. Safety settings for the model.
  - **category** _string_

    The category of the safety setting. Can be one of the following:
    - `HARM_CATEGORY_UNSPECIFIED`
    - `HARM_CATEGORY_HATE_SPEECH`
    - `HARM_CATEGORY_DANGEROUS_CONTENT`
    - `HARM_CATEGORY_HARASSMENT`
    - `HARM_CATEGORY_SEXUALLY_EXPLICIT`
    - `HARM_CATEGORY_CIVIC_INTEGRITY`

  - **threshold** _string_

    The threshold of the safety setting. Can be one of the following:
    - `HARM_BLOCK_THRESHOLD_UNSPECIFIED`
    - `BLOCK_LOW_AND_ABOVE`
    - `BLOCK_MEDIUM_AND_ABOVE`
    - `BLOCK_ONLY_HIGH`
    - `BLOCK_NONE`

- **audioTimestamp** _boolean_

  Optional. Enables timestamp understanding for audio files. Defaults to false.

  This is useful for generating transcripts with accurate timestamps.
  Consult [Google's Documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/audio-understanding) for usage details.

- **labels** _object_

  Optional. Defines labels used in billing reports.

  Consult [Google's Documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/add-labels-to-api-calls) for usage details.

You can use Google Vertex language models to generate text with the `generateText` function:

```ts highlight="1,4"
import { vertex } from "@ai-sdk/google-vertex";
import { generateText } from "ai";

const { text } = await generateText({
  model: vertex("gemini-2.5-pro"),
  prompt: "Write a vegetarian lasagna recipe for 4 people.",
});
```

Google Vertex language models can also be used in the `streamText` function
(see [AI SDK Core](/docs/ai-sdk-core)).

#### Code Execution

With [Code Execution](https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/code-execution), certain Gemini models on Vertex AI can generate and execute Python code. This allows the model to perform calculations, data manipulation, and other programmatic tasks to enhance its responses.

You can enable code execution by adding the `code_execution` tool to your request.

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { generateText } from "ai";

const result = await generateText({
  model: vertex("gemini-2.5-pro"),
  tools: { code_execution: vertex.tools.codeExecution({}) },
  prompt:
    "Use python to calculate 20th fibonacci number. Then find the nearest palindrome to it.",
});
```

The response will contain `tool-call` and `tool-result` parts for the executed code.

#### URL Context

URL Context allows Gemini models to retrieve and analyze content from URLs. Supported models: Gemini 2.5 Flash-Lite, 2.5 Pro, 2.5 Flash, 2.0 Flash.

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { generateText } from "ai";

const result = await generateText({
  model: vertex("gemini-2.5-pro"),
  tools: { url_context: vertex.tools.urlContext({}) },
  prompt: "What are the key points from https://example.com/article?",
});
```

#### Google Search

Google Search enables Gemini models to access real-time web information. Supported models: Gemini 2.5 Flash-Lite, 2.5 Flash, 2.0 Flash, 2.5 Pro.

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { generateText } from "ai";

const result = await generateText({
  model: vertex("gemini-2.5-pro"),
  tools: { google_search: vertex.tools.googleSearch({}) },
  prompt: "What are the latest developments in AI?",
});
```

#### Enterprise Web Search

[Enterprise Web Search](https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise) provides grounding using a compliance-focused web index designed for highly-regulated industries such as finance, healthcare, and the public sector. Unlike standard Google Search grounding, Enterprise Web Search does not log customer data and supports VPC service controls. Supported models: Gemini 2.0 and newer.

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { generateText } from "ai";

const result = await generateText({
  model: vertex("gemini-2.5-flash"),
  tools: {
    enterprise_web_search: vertex.tools.enterpriseWebSearch({}),
  },
  prompt: "What are the latest FDA regulations for clinical trials?",
});
```

#### Google Maps

Google Maps grounding enables Gemini models to access Google Maps data for location-aware responses. Supported models: Gemini 2.5 Flash-Lite, 2.5 Flash, 2.0 Flash, 2.5 Pro, 3.0 Pro.

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { type GoogleLanguageModelOptions } from "@ai-sdk/google";
import { generateText } from "ai";

const result = await generateText({
  model: vertex("gemini-2.5-flash"),
  tools: {
    google_maps: vertex.tools.googleMaps({}),
  },
  providerOptions: {
    vertex: {
      retrievalConfig: {
        latLng: { latitude: 34.090199, longitude: -117.881081 },
      },
    } satisfies GoogleLanguageModelOptions,
  },
  prompt: "What are the best Italian restaurants nearby?",
});
```

The optional `retrievalConfig.latLng` provider option provides location context for queries about nearby places. This configuration applies to any grounding tools that support location context.

#### Reasoning (Thinking Tokens)

Google Vertex AI, through its support for Gemini models, can also emit "thinking" tokens, representing the model's reasoning process. The AI SDK exposes these as reasoning information.

To enable thinking tokens for compatible Gemini models via Vertex, set `includeThoughts: true` in the `thinkingConfig` provider option. These options are passed through `providerOptions.vertex`:

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { type GoogleLanguageModelOptions } from "@ai-sdk/google";
import { generateText, streamText } from "ai";

// For generateText:
const { text, reasoningText, reasoning } = await generateText({
  model: vertex("gemini-2.0-flash-001"), // Or other supported model via Vertex
  providerOptions: {
    vertex: {
      thinkingConfig: {
        includeThoughts: true,
        // thinkingBudget: 2048, // Optional
      },
    } satisfies GoogleLanguageModelOptions,
  },
  prompt: "Explain quantum computing in simple terms.",
});

console.log("Reasoning:", reasoningText);
console.log("Reasoning Details:", reasoning);
console.log("Final Text:", text);

// For streamText:
const result = streamText({
  model: vertex("gemini-2.0-flash-001"), // Or other supported model via Vertex
  providerOptions: {
    vertex: {
      thinkingConfig: {
        includeThoughts: true,
        // thinkingBudget: 2048, // Optional
      },
    } satisfies GoogleLanguageModelOptions,
  },
  prompt: "Explain quantum computing in simple terms.",
});

for await (const part of result.fullStream) {
  if (part.type === "reasoning") {
    process.stdout.write(`THOUGHT: ${part.textDelta}\n`);
  } else if (part.type === "text-delta") {
    process.stdout.write(part.textDelta);
  }
}
```

When `includeThoughts` is true, parts of the API response marked with `thought: true` will be processed as reasoning.

- In `generateText`, these contribute to the `reasoningText` (string) and `reasoning` (array) fields.
- In `streamText`, these are emitted as `reasoning` stream parts.

  Refer to the [Google Vertex AI documentation on
  "thinking"](https://cloud.google.com/vertex-ai/generative-ai/docs/thinking)
  for model compatibility and further details.

#### File Inputs

The Google Vertex provider supports file inputs, e.g. PDF files.

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { generateText } from "ai";

const { text } = await generateText({
  model: vertex("gemini-2.5-pro"),
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "What is an embedding model according to this document?",
        },
        {
          type: "file",
          data: fs.readFileSync("./data/ai.pdf"),
          mediaType: "application/pdf",
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
