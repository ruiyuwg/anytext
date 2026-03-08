# AWS integrations

Source: https://docs.langchain.com/oss/javascript/integrations/providers/aws

Integrate with AWS using LangChain JavaScript.

All functionality related to the [Amazon AWS](https://aws.amazon.com/) platform.

## Chat models

### Bedrock

See a [usage example](/oss/javascript/integrations/chat/bedrock).

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { BedrockChat } from "@langchain/community/chat_models/bedrock";
```

## LLMs

### Bedrock

See a [usage example](/oss/javascript/integrations/llms/bedrock).

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Bedrock } from "@langchain/community/llms/bedrock";
```

### SageMaker endpoint

> [Amazon SageMaker](https://aws.amazon.com/sagemaker/) is a system that can build, train, and deploy machine learning (ML) models with fully managed infrastructure, tools, and workflows.

We use `SageMaker` to host our model and expose it as the `SageMaker Endpoint`.

See a [usage example](/oss/javascript/integrations/llms/aws_sagemaker).

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import {
  SagemakerEndpoint,
  SageMakerLLMContentHandler,
} from "@langchain/community/llms/sagemaker_endpoint";
```

## Text embedding models

### Bedrock

See a [usage example](/oss/javascript/integrations/text_embedding/bedrock).

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { BedrockEmbeddings } from "@langchain/aws";
```

## Document loaders

### AWS S3 directory and file

> [Amazon Simple Storage Service (Amazon S3)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-folders.html) is an object storage service.
> [AWS S3 Directory](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-folders.html) >[AWS S3 Buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingBucket.html)

See a [usage example for S3FileLoader](/oss/javascript/integrations/document_loaders/web_loaders/s3).

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @aws-sdk/client-s3
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { S3Loader } from "@langchain/community/document_loaders/web/s3";
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/javascript/integrations/providers/aws.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
