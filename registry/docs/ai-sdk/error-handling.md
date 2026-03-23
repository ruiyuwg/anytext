# Error Handling

### Error Helper Object

Each AI SDK UI hook also returns an [error](/docs/reference/ai-sdk-ui/use-chat#error) object that you can use to render the error in your UI.
You can use the error object to show an error message, disable the submit button, or show a retry button.

We recommend showing a generic error message to the user, such as "Something
went wrong." This is a good practice to avoid leaking information from the
server.

```tsx file="app/page.tsx" highlight="7,17-24,30"
'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, error, reload } =
    useChat({});

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      {error && (
        <>
          <div>An error occurred.</div>
          <button type="button" onClick={() => reload()}>
            Retry
          </button>
        </>
      )}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          disabled={error != null}
        />
      </form>
    </div>
  );
}
```

#### Alternative: replace last message

Alternatively you can write a custom submit handler that replaces the last message when an error is present.

```tsx file="app/page.tsx" highlight="15-21,33"
'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const {
    handleInputChange,
    handleSubmit,
    error,
    input,
    messages,
    setMessages,
  } = useChat({});

  function customSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (error != null) {
      setMessages(messages.slice(0, -1)); // remove last message
    }

    handleSubmit(event);
  }

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      {error && <div>An error occurred.</div>}

      <form onSubmit={customSubmit}>
        <input value={input} onChange={handleInputChange} />
      </form>
    </div>
  );
}
```

### Error Handling Callback

Errors can be processed by passing an [`onError`](/docs/reference/ai-sdk-ui/use-chat#on-error) callback function as an option to the [`useChat`](/docs/reference/ai-sdk-ui/use-chat), [`useCompletion`](/docs/reference/ai-sdk-ui/use-completion) or [`useAssistant`](/docs/reference/ai-sdk-ui/use-assistant) hooks.
The callback function receives an error object as an argument.

```tsx file="app/page.tsx" highlight="8-11"
import { useChat } from '@ai-sdk/react';

export default function Page() {
  const {
    /* ... */
  } = useChat({
    // handle error:
    onError: error => {
      console.error(error);
    },
  });
}
```

### Injecting Errors for Testing

You might want to create errors for testing.
You can easily do so by throwing an error in your route handler:

```ts file="app/api/chat/route.ts"
export async function POST(req: Request) {
  throw new Error('This is a test error');
}
```

# Smooth streaming japanese text

# Smooth streaming japanese text

You can smooth stream japanese text by using the `smoothStream` function, and the following regex that splits either on words of japanese characters:

```tsx filename="page.tsx"
import { smoothStream } from 'ai';
import { useChat } from '@ai-sdk/react';

const { data } = useChat({
  experimental_transform: smoothStream({
    chunking: /[\u3040-\u309F\u30A0-\u30FF]|\S+\s+/,
  }),
});
```

# Smooth streaming chinese text

# Smooth streaming chinese text

You can smooth stream chinese text by using the `smoothStream` function, and the following regex that splits either on words of chinese characters:

```tsx filename="page.tsx"
import { smoothStream } from 'ai';
import { useChat } from '@ai-sdk/react';

const { data } = useChat({
  experimental_transform: smoothStream({
    chunking: /[\u4E00-\u9FFF]|\S+\s+/,
  }),
});
```

# AI\_APICallError

# AI\_APICallError

This error occurs when an API call fails.

## Properties

- `url`: The URL of the API request that failed
- `requestBodyValues`: The request body values sent to the API
- `statusCode`: The HTTP status code returned by the API
- `responseHeaders`: The response headers returned by the API
- `responseBody`: The response body returned by the API
- `isRetryable`: Whether the request can be retried based on the status code
- `data`: Any additional data associated with the error

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
- `statusCode`: The HTTP status code returned by the server
- `statusText`: The HTTP status text returned by the server
- `message`: The error message containing details about the download failure

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
- `message`: The error message describing the expected and received content types

## Checking for this Error

You can check if an error is an instance of `AI_InvalidDataContentError` using:

```typescript
import { InvalidDataContentError } from 'ai';

if (InvalidDataContentError.isInstance(error)) {
  // Handle the error
}
```

# AI\_InvalidDataContent

# AI\_InvalidDataContent

This error occurs when invalid data content is provided.

## Properties

- `content`: The invalid content value
- `message`: The error message
- `cause`: The cause of the error

## Checking for this Error

You can check if an error is an instance of `AI_InvalidDataContent` using:

```typescript
import { InvalidDataContent } from 'ai';

if (InvalidDataContent.isInstance(error)) {
  // Handle the error
}
```

# AI\_InvalidMessageRoleError

# AI\_InvalidMessageRoleError

This error occurs when an invalid message role is provided.

## Properties

- `role`: The invalid role value
- `message`: The error message

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

## Properties

- `prompt`: The invalid prompt value
- `message`: The error message
- `cause`: The cause of the error

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

# AI\_InvalidToolArgumentsError

# AI\_InvalidToolArgumentsError

This error occurs when invalid tool argument was provided.

## Properties

- `toolName`: The name of the tool with invalid arguments
- `toolArgs`: The invalid tool arguments
- `message`: The error message
- `cause`: The cause of the error

## Checking for this Error

You can check if an error is an instance of `AI_InvalidToolArgumentsError` using:

```typescript
import { InvalidToolArgumentsError } from 'ai';

if (InvalidToolArgumentsError.isInstance(error)) {
  // Handle the error
}
```

# AI\_JSONParseError

# AI\_JSONParseError

This error occurs when JSON fails to parse.

## Properties

- `text`: The text value that could not be parsed
- `message`: The error message including parse error details

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

# AI\_NoAudioGeneratedError

# AI\_NoAudioGeneratedError

This error occurs when no audio could be generated from the input.

## Properties

- `responses`: Array of responses
- `message`: The error message

## Checking for this Error

You can check if an error is an instance of `AI_NoAudioGeneratedError` using:

```typescript
import { NoAudioGeneratedError } from 'ai';

if (NoAudioGeneratedError.isInstance(error)) {
  // Handle the error
}
```

# AI\_NoContentGeneratedError

# AI\_NoContentGeneratedError

This error occurs when the AI provider fails to generate content.

## Properties

- `message`: The error message

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

- `message`: The error message.
- `responses`: Metadata about the image model responses, including timestamp, model, and headers.
- `cause`: The cause of the error. You can use this for more detailed error handling.

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

- `message`: The error message.
- `text`: The text that was generated by the model. This can be the raw text or the tool call text, depending on the object generation mode.
- `response`: Metadata about the language model response, including response id, timestamp, and model.
- `usage`: Request token usage.
- `finishReason`: Request finish reason. For example 'length' if model generated maximum number of tokens, this could result in a JSON parsing error.
- `cause`: The cause of the error (e.g. a JSON parsing error). You can use this for more detailed error handling.

## Checking for this Error

You can check if an error is an instance of `AI_NoObjectGeneratedError` using:

```typescript
import { generateObject, NoObjectGeneratedError } from 'ai';

try {
  await generateObject({ model, schema, prompt });
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

# AI\_NoOutputSpecifiedError

# AI\_NoOutputSpecifiedError

This error occurs when no output format was specified for the AI response, and output-related methods are called.

## Properties

- `message`: The error message (defaults to 'No output specified.')

## Checking for this Error

You can check if an error is an instance of `AI_NoOutputSpecifiedError` using:

```typescript
import { NoOutputSpecifiedError } from 'ai';

if (NoOutputSpecifiedError.isInstance(error)) {
  // Handle the error
}
```

# AI\_NoSuchModelError

# AI\_NoSuchModelError

This error occurs when a model ID is not found.

## Properties

- `modelId`: The ID of the model that was not found
- `modelType`: The type of model
- `message`: The error message

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
- `availableTools`: Array of available tool names
- `message`: The error message

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

- `responses`: Array of responses
- `message`: The error message

## Checking for this Error

You can check if an error is an instance of `AI_NoTranscriptGeneratedError` using:

```typescript
import { NoTranscriptGeneratedError } from 'ai';

if (NoTranscriptGeneratedError.isInstance(error)) {
  // Handle the error
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

# ToolCallRepairError

# ToolCallRepairError

This error occurs when there is a failure while attempting to repair an invalid tool call.
This typically happens when the AI attempts to fix either
a `NoSuchToolError` or `InvalidToolArgumentsError`.

## Properties

- `originalError`: The original error that triggered the repair attempt (either `NoSuchToolError` or `InvalidToolArgumentsError`)
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

# AI\_ToolExecutionError

# AI\_ToolExecutionError

This error occurs when there is a failure during the execution of a tool.

## Properties

- `toolName`: The name of the tool that failed
- `toolArgs`: The arguments passed to the tool
- `toolCallId`: The ID of the tool call that failed
- `message`: The error message
- `cause`: The underlying error that caused the tool execution to fail

## Checking for this Error

You can check if an error is an instance of `AI_ToolExecutionError` using:

```typescript
import { ToolExecutionError } from 'ai';

if (ToolExecutionError.isInstance(error)) {
  // Handle the error
}
```

# AI\_TypeValidationError

# AI\_TypeValidationError

This error occurs when type validation fails.

## Properties

- `value`: The value that failed validation
- `message`: The error message including validation details

## Checking for this Error

You can check if an error is an instance of `AI_TypeValidationError` using:

```typescript
import { TypeValidationError } from 'ai';

if (TypeValidationError.isInstance(error)) {
  // Handle the error
}
```

# AI\_UnsupportedFunctionalityError

# AI\_UnsupportedFunctionalityError

This error occurs when functionality is not unsupported.

## Properties

- `functionality`: The name of the unsupported functionality
- `message`: The error message

## Checking for this Error

You can check if an error is an instance of `AI_UnsupportedFunctionalityError` using:

```typescript
import { UnsupportedFunctionalityError } from 'ai';

if (UnsupportedFunctionalityError.isInstance(error)) {
  // Handle the error
}
```

# xAI Grok
