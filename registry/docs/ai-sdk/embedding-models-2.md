## Embedding Models

You can create models that call the [Google Generative AI embeddings API](https://ai.google.dev/gemini-api/docs/embeddings)
using the `.embedding()` factory method.

```ts
const model = google.embedding('gemini-embedding-001');
```

The Google Generative AI provider sends API calls to the right endpoint based on the type of embedding:

- **Single embeddings**: When embedding a single value with `embed()`, the provider uses the single `:embedContent` endpoint, which typically has higher rate limits compared to the batch endpoint.
- **Batch embeddings**: When embedding multiple values with `embedMany()` or multiple values in `embed()`, the provider uses the `:batchEmbedContents` endpoint.

Google Generative AI embedding models support additional settings. You can pass them as an options argument:

```ts
import { google, type GoogleEmbeddingModelOptions } from '@ai-sdk/google';
import { embed } from 'ai';

const model = google.embedding('gemini-embedding-001');

const { embedding } = await embed({
  model,
  value: 'sunny day at the beach',
  providerOptions: {
    google: {
      outputDimensionality: 512, // optional, number of dimensions for the embedding
      taskType: 'SEMANTIC_SIMILARITY', // optional, specifies the task type for generating embeddings
    } satisfies GoogleEmbeddingModelOptions,
  },
});
```

The following optional provider options are available for Google Generative AI embedding models:

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

### Model Capabilities

| Model                  | Default Dimensions | Custom Dimensions   |
| ---------------------- | ------------------ | ------------------- |
| `gemini-embedding-001` | 3072               |  |
