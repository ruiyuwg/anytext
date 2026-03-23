# Message Metadata

Message metadata allows you to attach custom information to messages at the message level. This is useful for tracking timestamps, model information, token usage, user context, and other message-level data.

## Overview

Message metadata differs from [data parts](/docs/ai-sdk-ui/streaming-data) in that it's attached at the message level rather than being part of the message content. While data parts are ideal for dynamic content that forms part of the message, metadata is perfect for information about the message itself.

## Getting Started

Here's a simple example of using message metadata to track timestamps and model information:

### Defining Metadata Types

First, define your metadata type for type safety:

```tsx filename="app/types.ts"
import { UIMessage } from 'ai';
import { z } from 'zod';

// Define your metadata schema
export const messageMetadataSchema = z.object({
  createdAt: z.number().optional(),
  model: z.string().optional(),
  totalTokens: z.number().optional(),
});

export type MessageMetadata = z.infer<typeof messageMetadataSchema>;

// Create a typed UIMessage
export type MyUIMessage = UIMessage<MessageMetadata>;
```

### Sending Metadata from the Server

Use the `messageMetadata` callback in `toUIMessageStreamResponse` to send metadata at different streaming stages:

```ts filename="app/api/chat/route.ts" highlight="11-20"
import { convertToModelMessages, streamText } from 'ai';
__PROVIDER_IMPORT__;
import type { MyUIMessage } from '@/types';

export async function POST(req: Request) {
  const { messages }: { messages: MyUIMessage[] } = await req.json();

  const result = streamText({
    model: __MODEL__,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse({
    originalMessages: messages, // pass this in for type-safe return objects
    messageMetadata: ({ part }) => {
      // Send metadata when streaming starts
      if (part.type === 'start') {
        return {
          createdAt: Date.now(),
          model: 'your-model-id',
        };
      }

      // Send additional metadata when streaming completes
      if (part.type === 'finish') {
        return {
          totalTokens: part.totalUsage.totalTokens,
        };
      }
    },
  });
}
```

To enable type-safe metadata return object in `messageMetadata`, pass in the
`originalMessages` parameter typed to your UIMessage type.

### Accessing Metadata on the Client

Access metadata through the `message.metadata` property:

```tsx filename="app/page.tsx" highlight="8,18-23"
'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import type { MyUIMessage } from '@/types';

export default function Chat() {
  const { messages } = useChat<MyUIMessage>({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  return (
    <div>
      {messages.map(message => (
        <div key={message.id}>
          <div>
            {message.role === 'user' ? 'User: ' : 'AI: '}
            {message.metadata?.createdAt && (
              <span className="text-sm text-gray-500">
                {new Date(message.metadata.createdAt).toLocaleTimeString()}
              </span>
            )}
          </div>

          {/* Render message content */}
          {message.parts.map((part, index) =>
            part.type === 'text' ? <div key={index}>{part.text}</div> : null,
          )}

          {/* Display additional metadata */}
          {message.metadata?.totalTokens && (
            <div className="text-xs text-gray-400">
              {message.metadata.totalTokens} tokens
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

For streaming arbitrary data that changes during generation, consider using
[data parts](/docs/ai-sdk-ui/streaming-data) instead.

## Common Use Cases

Message metadata is ideal for:

- **Timestamps**: When messages were created or completed
- **Model Information**: Which AI model was used
- **Token Usage**: Track costs and usage limits
- **User Context**: User IDs, session information
- **Performance Metrics**: Generation time, time to first token
- **Quality Indicators**: Finish reason, confidence scores

## See Also

- [Chatbot Guide](/docs/ai-sdk-ui/chatbot#message-metadata) - Message metadata in the context of building chatbots
- [Streaming Data](/docs/ai-sdk-ui/streaming-data#message-metadata-vs-data-parts) - Comparison with data parts
- [UIMessage Reference](/docs/reference/ai-sdk-core/ui-message) - Complete UIMessage type reference

# AI\_APICallError

# AI\_APICallError

This error occurs when an API call fails.

## Properties

- `url`: The URL of the API request that failed
- `requestBodyValues`: The request body values sent to the API
- `statusCode`: The HTTP status code returned by the API (optional)
- `responseHeaders`: The response headers returned by the API (optional)
- `responseBody`: The response body returned by the API (optional)
- `isRetryable`: Whether the request can be retried based on the status code
- `data`: Any additional data associated with the error (optional)
- `cause`: The underlying error that caused the API call to fail (optional)

## Checking for this Error

You can check if an error is an instance of `AI_APICallError` using:

```typescript
import { APICallError } from 'ai';

if (APICallError.isInstance(error)) {
  // Handle the error
}
```

# AI\_DownloadError

# AI\_DownloadError

This error occurs when a download fails.

## Properties

- `url`: The URL that failed to download
- `statusCode`: The HTTP status code returned by the server (optional)
- `statusText`: The HTTP status text returned by the server (optional)
- `cause`: The underlying error that caused the download to fail (optional)
- `message`: The error message containing details about the download failure (optional, auto-generated)

## Checking for this Error

You can check if an error is an instance of `AI_DownloadError` using:

```typescript
import { DownloadError } from 'ai';

if (DownloadError.isInstance(error)) {
  // Handle the error
}
```

# AI\_EmptyResponseBodyError

# AI\_EmptyResponseBodyError

This error occurs when the server returns an empty response body.

## Properties

- `message`: The error message

## Checking for this Error

You can check if an error is an instance of `AI_EmptyResponseBodyError` using:

```typescript
import { EmptyResponseBodyError } from 'ai';

if (EmptyResponseBodyError.isInstance(error)) {
  // Handle the error
}
```

# AI\_InvalidArgumentError

# AI\_InvalidArgumentError

This error occurs when an invalid argument was provided.

## Properties

- `parameter`: The name of the parameter that is invalid
- `value`: The invalid value
- `message`: The error message

## Checking for this Error

You can check if an error is an instance of `AI_InvalidArgumentError` using:

```typescript
import { InvalidArgumentError } from 'ai';

if (InvalidArgumentError.isInstance(error)) {
  // Handle the error
}
```

# AI\_InvalidDataContentError

# AI\_InvalidDataContentError

This error occurs when the data content provided in a multi-modal message part is invalid. Check out the [ prompt examples for multi-modal messages ](/docs/foundations/prompts#message-prompts).

## Properties

- `content`: The invalid content value
- `cause`: The underlying error that caused this error (optional)
- `message`: The error message describing the expected and received content types (optional, auto-generated)

## Checking for this Error

You can check if an error is an instance of `AI_InvalidDataContentError` using:

```typescript
import { InvalidDataContentError } from 'ai';

if (InvalidDataContentError.isInstance(error)) {
  // Handle the error
}
```

# AI\_InvalidMessageRoleError

# AI\_InvalidMessageRoleError

This error occurs when an invalid message role is provided.

## Properties

- `role`: The invalid role value
- `message`: The error message (optional, auto-generated from `role`)

## Checking for this Error

You can check if an error is an instance of `AI_InvalidMessageRoleError` using:

```typescript
import { InvalidMessageRoleError } from 'ai';

if (InvalidMessageRoleError.isInstance(error)) {
  // Handle the error
}
```

# AI\_InvalidPromptError

# AI\_InvalidPromptError

This error occurs when the prompt provided is invalid.

## Potential Causes

### UI Messages

You are passing a `UIMessage[]` as messages into e.g. `streamText`.

You need to first convert them to a `ModelMessage[]` using `convertToModelMessages()`.

```typescript
import { type UIMessage, generateText, convertToModelMessages } from 'ai';

const messages: UIMessage[] = [
  /* ... */
];

const result = await generateText({
  // ...
  messages: await convertToModelMessages(messages),
});
```

## Properties

- `prompt`: The invalid prompt value
- `message`: The error message (required in constructor)
- `cause`: The cause of the error (optional)

## Checking for this Error

You can check if an error is an instance of `AI_InvalidPromptError` using:

```typescript
import { InvalidPromptError } from 'ai';

if (InvalidPromptError.isInstance(error)) {
  // Handle the error
}
```

# AI\_InvalidResponseDataError

# AI\_InvalidResponseDataError

This error occurs when the server returns a response with invalid data content.

## Properties

- `data`: The invalid response data value
- `message`: The error message

## Checking for this Error

You can check if an error is an instance of `AI_InvalidResponseDataError` using:

```typescript
import { InvalidResponseDataError } from 'ai';

if (InvalidResponseDataError.isInstance(error)) {
  // Handle the error
}
```

# AI\_InvalidToolApprovalError

# AI\_InvalidToolApprovalError

This error occurs when a tool approval response references an unknown `approvalId`. No matching `tool-approval-request` was found in the message history.

## Properties

- `approvalId`: The approval ID that was not found

## Checking for this Error

You can check if an error is an instance of `AI_InvalidToolApprovalError` using:

```typescript
import { InvalidToolApprovalError } from 'ai';

if (InvalidToolApprovalError.isInstance(error)) {
  // Handle the error
}
```

# AI\_InvalidToolInputError

# AI\_InvalidToolInputError

This error occurs when invalid tool input was provided.

## Properties

- `toolName`: The name of the tool with invalid inputs
- `toolInput`: The invalid tool inputs
- `message`: The error message
- `cause`: The cause of the error

## Checking for this Error

You can check if an error is an instance of `AI_InvalidToolInputError` using:

```typescript
import { InvalidToolInputError } from 'ai';

if (InvalidToolInputError.isInstance(error)) {
  // Handle the error
}
```

# AI\_JSONParseError

# AI\_JSONParseError

This error occurs when JSON fails to parse.

## Properties

- `text`: The text value that could not be parsed
- `cause`: The underlying parsing error (required in constructor)

## Checking for this Error

You can check if an error is an instance of `AI_JSONParseError` using:

```typescript
import { JSONParseError } from 'ai';

if (JSONParseError.isInstance(error)) {
  // Handle the error
}
```

# AI\_LoadAPIKeyError

# AI\_LoadAPIKeyError

This error occurs when API key is not loaded successfully.

## Properties

- `message`: The error message

## Checking for this Error

You can check if an error is an instance of `AI_LoadAPIKeyError` using:

```typescript
import { LoadAPIKeyError } from 'ai';

if (LoadAPIKeyError.isInstance(error)) {
  // Handle the error
}
```

# AI\_LoadSettingError

# AI\_LoadSettingError

This error occurs when a setting is not loaded successfully.

## Properties

- `message`: The error message

## Checking for this Error

You can check if an error is an instance of `AI_LoadSettingError` using:

```typescript
import { LoadSettingError } from 'ai';

if (LoadSettingError.isInstance(error)) {
  // Handle the error
}
```

# AI\_MessageConversionError

# AI\_MessageConversionError

This error occurs when message conversion fails.

## Properties

- `originalMessage`: The original message that failed conversion
- `message`: The error message

## Checking for this Error

You can check if an error is an instance of `AI_MessageConversionError` using:

```typescript
import { MessageConversionError } from 'ai';

if (MessageConversionError.isInstance(error)) {
  // Handle the error
}
```

# AI\_NoContentGeneratedError

# AI\_NoContentGeneratedError

This error occurs when the AI provider fails to generate content.

## Properties

- `message`: The error message (optional, defaults to `'No content generated.'`)

## Checking for this Error

You can check if an error is an instance of `AI_NoContentGeneratedError` using:

```typescript
import { NoContentGeneratedError } from 'ai';

if (NoContentGeneratedError.isInstance(error)) {
  // Handle the error
}
```

# AI\_NoImageGeneratedError

# AI\_NoImageGeneratedError

This error occurs when the AI provider fails to generate an image.
It can arise due to the following reasons:

- The model failed to generate a response.
- The model generated an invalid response.

## Properties

- `message`: The error message (optional, defaults to `'No image generated.'`).
- `responses`: Metadata about the image model responses, including timestamp, model, and headers (optional).
- `cause`: The cause of the error. You can use this for more detailed error handling (optional).

## Checking for this Error

You can check if an error is an instance of `AI_NoImageGeneratedError` using:

```typescript
import { generateImage, NoImageGeneratedError } from 'ai';

try {
  await generateImage({ model, prompt });
} catch (error) {
  if (NoImageGeneratedError.isInstance(error)) {
    console.log('NoImageGeneratedError');
    console.log('Cause:', error.cause);
    console.log('Responses:', error.responses);
  }
}
```

# AI\_NoObjectGeneratedError

# AI\_NoObjectGeneratedError

This error occurs when the AI provider fails to generate a parsable object that conforms to the schema.
It can arise due to the following reasons:

- The model failed to generate a response.
- The model generated a response that could not be parsed.
- The model generated a response that could not be validated against the schema.

## Properties

- `message`: The error message (optional, defaults to `'No object generated.'`).
- `text`: The text that was generated by the model. This can be the raw text or the tool call text, depending on the object generation mode (optional).
- `response`: Metadata about the language model response, including response id, timestamp, and model (required in constructor).
- `usage`: Request token usage (required in constructor).
- `finishReason`: Request finish reason. For example 'length' if model generated maximum number of tokens, this could result in a JSON parsing error (required in constructor).
- `cause`: The cause of the error (e.g. a JSON parsing error). You can use this for more detailed error handling (optional).

## Checking for this Error

You can check if an error is an instance of `AI_NoObjectGeneratedError` using:

```typescript
import { generateText, NoObjectGeneratedError, Output } from 'ai';

try {
  await generateText({ model, output: Output.object({ schema }), prompt });
} catch (error) {
  if (NoObjectGeneratedError.isInstance(error)) {
    console.log('NoObjectGeneratedError');
    console.log('Cause:', error.cause);
    console.log('Text:', error.text);
    console.log('Response:', error.response);
    console.log('Usage:', error.usage);
    console.log('Finish Reason:', error.finishReason);
  }
}
```

# AI\_NoOutputGeneratedError

# AI\_NoOutputGeneratedError

This error is thrown when no LLM output was generated, e.g. because of errors.

## Properties

- `message`: The error message (optional, defaults to `'No output generated.'`)
- `cause`: The underlying error that caused no output to be generated (optional)

## Checking for this Error

You can check if an error is an instance of `AI_NoOutputGeneratedError` using:

```typescript
import { NoOutputGeneratedError } from 'ai';

if (NoOutputGeneratedError.isInstance(error)) {
  // Handle the error
}
```

# AI\_NoSpeechGeneratedError

# AI\_NoSpeechGeneratedError

This error occurs when no audio could be generated from the input.

## Properties

- `responses`: Array of speech model response metadata (required in constructor)

## Checking for this Error

You can check if an error is an instance of `AI_NoSpeechGeneratedError` using:

```typescript
import { NoSpeechGeneratedError } from 'ai';

if (NoSpeechGeneratedError.isInstance(error)) {
  // Handle the error
}
```

# AI\_NoSuchModelError

# AI\_NoSuchModelError

This error occurs when a model ID is not found.

## Properties

- `modelId`: The ID of the model that was not found
- `modelType`: The type of model (`'languageModel'`, `'embeddingModel'`, `'imageModel'`, `'transcriptionModel'`, `'speechModel'`, or `'rerankingModel'`)
- `message`: The error message (optional, auto-generated from `modelId` and `modelType`)

## Checking for this Error

You can check if an error is an instance of `AI_NoSuchModelError` using:

```typescript
import { NoSuchModelError } from 'ai';

if (NoSuchModelError.isInstance(error)) {
  // Handle the error
}
```

# AI\_NoSuchProviderError

# AI\_NoSuchProviderError

This error occurs when a provider ID is not found.

## Properties

- `providerId`: The ID of the provider that was not found
- `availableProviders`: Array of available provider IDs
- `modelId`: The ID of the model
- `modelType`: The type of model
- `message`: The error message

## Checking for this Error

You can check if an error is an instance of `AI_NoSuchProviderError` using:

```typescript
import { NoSuchProviderError } from 'ai';

if (NoSuchProviderError.isInstance(error)) {
  // Handle the error
}
```

# AI\_NoSuchToolError

# AI\_NoSuchToolError

This error occurs when a model tries to call an unavailable tool.

## Properties

- `toolName`: The name of the tool that was not found
- `availableTools`: Array of available tool names (optional)
- `message`: The error message (optional, auto-generated from `toolName` and `availableTools`)

## Checking for this Error

You can check if an error is an instance of `AI_NoSuchToolError` using:

```typescript
import { NoSuchToolError } from 'ai';

if (NoSuchToolError.isInstance(error)) {
  // Handle the error
}
```

# AI\_NoTranscriptGeneratedError

# AI\_NoTranscriptGeneratedError

This error occurs when no transcript could be generated from the input.

## Properties

- `responses`: Array of transcription model response metadata (required in constructor)

## Checking for this Error

You can check if an error is an instance of `AI_NoTranscriptGeneratedError` using:

```typescript
import { NoTranscriptGeneratedError } from 'ai';

if (NoTranscriptGeneratedError.isInstance(error)) {
  // Handle the error
}
```

# AI\_NoVideoGeneratedError

# AI\_NoVideoGeneratedError

This error occurs when the AI provider fails to generate a video.
It can arise due to the following reasons:

- The model failed to generate a response.
- The model generated an invalid response.

## Properties

- `message`: The error message (optional, defaults to `'No video generated.'`).
- `responses`: Metadata about the video model responses, including timestamp, model, and headers (optional).
- `cause`: The cause of the error. You can use this for more detailed error handling (optional).

## Checking for this Error

You can check if an error is an instance of `AI_NoVideoGeneratedError` using:

```typescript
import {
  experimental_generateVideo as generateVideo,
  NoVideoGeneratedError,
} from 'ai';

try {
  await generateVideo({ model, prompt });
} catch (error) {
  if (NoVideoGeneratedError.isInstance(error)) {
    console.log('NoVideoGeneratedError');
    console.log('Cause:', error.cause);
    console.log('Responses:', error.responses);
  }
}
```

# AI\_RetryError

# AI\_RetryError

This error occurs when a retry operation fails.

## Properties

- `reason`: The reason for the retry failure
- `lastError`: The most recent error that occurred during retries
- `errors`: Array of all errors that occurred during retry attempts
- `message`: The error message

## Checking for this Error

You can check if an error is an instance of `AI_RetryError` using:

```typescript
import { RetryError } from 'ai';

if (RetryError.isInstance(error)) {
  // Handle the error
}
```

# AI\_TooManyEmbeddingValuesForCallError

# AI\_TooManyEmbeddingValuesForCallError

This error occurs when too many values are provided in a single embedding call.

## Properties

- `provider`: The AI provider name
- `modelId`: The ID of the embedding model
- `maxEmbeddingsPerCall`: The maximum number of embeddings allowed per call
- `values`: The array of values that was provided

## Checking for this Error

You can check if an error is an instance of `AI_TooManyEmbeddingValuesForCallError` using:

```typescript
import { TooManyEmbeddingValuesForCallError } from 'ai';

if (TooManyEmbeddingValuesForCallError.isInstance(error)) {
  // Handle the error
}
```

# AI\_ToolCallNotFoundForApprovalError

# AI\_ToolCallNotFoundForApprovalError

This error occurs when a tool approval request references a tool call that was not found. This can happen when processing provider-emitted approval requests (e.g., MCP flows) where the referenced tool call ID does not exist.

## Properties

- `toolCallId`: The tool call ID that was not found
- `approvalId`: The approval request ID

## Checking for this Error

You can check if an error is an instance of `AI_ToolCallNotFoundForApprovalError` using:

```typescript
import { ToolCallNotFoundForApprovalError } from 'ai';

if (ToolCallNotFoundForApprovalError.isInstance(error)) {
  // Handle the error
}
```

# ToolCallRepairError

# ToolCallRepairError

This error occurs when there is a failure while attempting to repair an invalid tool call.
This typically happens when the AI attempts to fix either
a `NoSuchToolError` or `InvalidToolInputError`.

## Properties

- `originalError`: The original error that triggered the repair attempt (either `NoSuchToolError` or `InvalidToolInputError`)
- `message`: The error message
- `cause`: The underlying error that caused the repair to fail

## Checking for this Error

You can check if an error is an instance of `ToolCallRepairError` using:

```typescript
import { ToolCallRepairError } from 'ai';

if (ToolCallRepairError.isInstance(error)) {
  // Handle the error
}
```

# AI\_TypeValidationError

# AI\_TypeValidationError

This error occurs when type validation fails.

## Properties

- `value`: The value that failed validation
- `cause`: The underlying validation error (required in constructor)

## Checking for this Error

You can check if an error is an instance of `AI_TypeValidationError` using:

```typescript
import { TypeValidationError } from 'ai';

if (TypeValidationError.isInstance(error)) {
  // Handle the error
}
```

# AI\_UIMessageStreamError
