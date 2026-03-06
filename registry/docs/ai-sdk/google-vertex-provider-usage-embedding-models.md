### Embedding Models

You can create models that call the Google Vertex AI embeddings API using the `.embeddingModel()` factory method:

```ts
const model = vertex.embeddingModel("text-embedding-005");
```

Google Vertex AI embedding models support additional settings. You can pass them as an options argument:

```ts
import {
  vertex,
  type GoogleVertexEmbeddingModelOptions,
} from "@ai-sdk/google-vertex";
import { embed } from "ai";

const model = vertex.embeddingModel("text-embedding-005");

const { embedding } = await embed({
  model,
  value: "sunny day at the beach",
  providerOptions: {
    vertex: {
      outputDimensionality: 512, // optional, number of dimensions for the embedding
      taskType: "SEMANTIC_SIMILARITY", // optional, specifies the task type for generating embeddings
      autoTruncate: false, // optional
    } satisfies GoogleVertexEmbeddingModelOptions,
  },
});
```

The following optional provider options are available for Google Vertex AI embedding models:

- **outputDimensionality**: _number_

  Optional reduced dimension for the output embedding. If set, excessive values in the output embedding are truncated from the end.

- **taskType**: _string_

  Optional. Specifies the task type for generating embeddings. Supported task types include:
  - `SEMANTIC_SIMILARITY`: Optimized for text similarity.
  - `CLASSIFICATION`: Optimized for text classification.
  - `CLUSTERING`: Optimized for clustering texts based on similarity.
  - `RETRIEVAL_DOCUMENT`: Optimized for document retrieval.
  - `RETRIEVAL_QUERY`: Optimized for query-based retrieval.
  - `QUESTION_ANSWERING`: Optimized for answering questions.
  - `FACT_VERIFICATION`: Optimized for verifying factual information.
  - `CODE_RETRIEVAL_QUERY`: Optimized for retrieving code blocks based on natural language queries.

- **title**: _string_

  Optional. The title of the document being embedded. This helps the model produce better embeddings by providing additional context. Only valid when `taskType` is set to `'RETRIEVAL_DOCUMENT'`.

- **autoTruncate**: _boolean_

  Optional. When set to `true`, input text will be truncated if it exceeds the maximum length. When set to `false`, an error is returned if the input text is too long. Defaults to `true`.

#### Model Capabilities

| Model                | Max Values Per Call | Parallel Calls |
| -------------------- | ------------------- | -------------- |
| `text-embedding-005` | 2048                |                |

The table above lists popular models. You can also pass any available provider
model ID as a string if needed.
