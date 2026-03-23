## Embedding Models

You can create models that call the Bedrock API [Bedrock API](https://docs.aws.amazon.com/bedrock/latest/userguide/titan-embedding-models.html)
using the `.embedding()` factory method.

```ts
const model = bedrock.embedding('amazon.titan-embed-text-v1');
```

Bedrock Titan embedding model amazon.titan-embed-text-v2:0 supports several additional settings.
You can pass them as an options argument:

```ts
import { bedrock } from '@ai-sdk/amazon-bedrock';
import { type AmazonBedrockEmbeddingModelOptions } from '@ai-sdk/amazon-bedrock';
import { embed } from 'ai';

const model = bedrock.embedding('amazon.titan-embed-text-v2:0');

const { embedding } = await embed({
  model,
  value: 'sunny day at the beach',
  providerOptions: {
    bedrock: {
      dimensions: 512, // optional, number of dimensions for the embedding
      normalize: true, // optional, normalize the output embeddings
    } satisfies AmazonBedrockEmbeddingModelOptions,
  },
});
```

The following optional provider options are available for Bedrock Titan embedding models:

- **dimensions**: *number*

  The number of dimensions the output embeddings should have. The following values are accepted: 1024 (default), 512, 256.

- **normalize** *boolean*

  Flag indicating whether or not to normalize the output embeddings. Defaults to true.

### Nova Embedding Models

Amazon Nova embedding models support additional provider options:

```ts
import { bedrock } from '@ai-sdk/amazon-bedrock';
import { type AmazonBedrockEmbeddingModelOptions } from '@ai-sdk/amazon-bedrock';
import { embed } from 'ai';

const { embedding } = await embed({
  model: bedrock.embedding('amazon.nova-embed-text-v2:0'),
  value: 'sunny day at the beach',
  providerOptions: {
    bedrock: {
      embeddingDimension: 1024, // optional, number of dimensions
      embeddingPurpose: 'TEXT_RETRIEVAL', // optional, purpose of embedding
      truncate: 'END', // optional, truncation behavior
    } satisfies AmazonBedrockEmbeddingModelOptions,
  },
});
```

The following optional provider options are available for Nova embedding models:

- **embeddingDimension** *number*

  The number of dimensions for the output embeddings. Supported values: 256, 384, 1024 (default), 3072.

- **embeddingPurpose** *string*

  The purpose of the embedding. Accepts: `GENERIC_INDEX` (default), `TEXT_RETRIEVAL`, `IMAGE_RETRIEVAL`, `VIDEO_RETRIEVAL`, `DOCUMENT_RETRIEVAL`, `AUDIO_RETRIEVAL`, `GENERIC_RETRIEVAL`, `CLASSIFICATION`, `CLUSTERING`.

- **truncate** *string*

  Truncation behavior when input exceeds the model's context length. Accepts: `NONE`, `START`, `END` (default).

### Cohere Embedding Models

Cohere embedding models on Bedrock require an `inputType` and support truncation:

```ts
import { bedrock } from '@ai-sdk/amazon-bedrock';
import { type AmazonBedrockEmbeddingModelOptions } from '@ai-sdk/amazon-bedrock';
import { embed } from 'ai';

const { embedding } = await embed({
  model: bedrock.embedding('cohere.embed-english-v3'),
  value: 'sunny day at the beach',
  providerOptions: {
    bedrock: {
      inputType: 'search_document', // required for Cohere
      truncate: 'END', // optional, truncation behavior
    } satisfies AmazonBedrockEmbeddingModelOptions,
  },
});
```

The following provider options are available for Cohere embedding models:

- **inputType** *string*

  Input type for Cohere embedding models. Accepts: `search_document`, `search_query` (default), `classification`, `clustering`.

- **truncate** *string*

  Truncation behavior when input exceeds the model's context length. Accepts: `NONE`, `START`, `END`.

### Model Capabilities

| Model                          | Default Dimensions | Custom Dimensions   |
| ------------------------------ | ------------------ | ------------------- |
| `amazon.titan-embed-text-v1`   | 1536               |  |
| `amazon.titan-embed-text-v2:0` | 1024               |  |
| `amazon.nova-embed-text-v2:0`  | 1024               |  |
| `cohere.embed-english-v3`      | 1024               |  |
| `cohere.embed-multilingual-v3` | 1024               |  |

## Reranking Models

You can create models that call the [Bedrock Rerank API](https://docs.aws.amazon.com/bedrock/latest/userguide/rerank-api.html)
using the `.reranking()` factory method.

```ts
const model = bedrock.reranking('cohere.rerank-v3-5:0');
```

You can use Amazon Bedrock reranking models to rerank documents with the `rerank` function:

```ts
import { bedrock } from '@ai-sdk/amazon-bedrock';
import { rerank } from 'ai';

const documents = [
  'sunny day at the beach',
  'rainy afternoon in the city',
  'snowy night in the mountains',
];

const { ranking } = await rerank({
  model: bedrock.reranking('cohere.rerank-v3-5:0'),
  documents,
  query: 'talk about rain',
  topN: 2,
});

console.log(ranking);
// [
//   { originalIndex: 1, score: 0.9, document: 'rainy afternoon in the city' },
//   { originalIndex: 0, score: 0.3, document: 'sunny day at the beach' }
// ]
```

Amazon Bedrock reranking models support additional provider options that can be passed via `providerOptions.bedrock`:

```ts
import { bedrock } from '@ai-sdk/amazon-bedrock';
import { rerank } from 'ai';

const { ranking } = await rerank({
  model: bedrock.reranking('cohere.rerank-v3-5:0'),
  documents: ['sunny day at the beach', 'rainy afternoon in the city'],
  query: 'talk about rain',
  providerOptions: {
    bedrock: {
      nextToken: 'pagination_token_here',
    },
  },
});
```

The following provider options are available:

- **nextToken** *string*

  Token for pagination of results.

- **additionalModelRequestFields** *Record\<string, unknown>*

  Additional model-specific request fields.

### Model Capabilities

| Model                  |
| ---------------------- |
| `amazon.rerank-v1:0`   |
| `cohere.rerank-v3-5:0` |
