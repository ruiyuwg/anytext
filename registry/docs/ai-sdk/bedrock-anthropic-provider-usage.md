## Bedrock Anthropic Provider Usage

The Bedrock Anthropic provider offers support for Anthropic's Claude models through Amazon Bedrock's native InvokeModel API. This provides full feature parity with the [Anthropic API](https://platform.claude.com/docs/en/build-with-claude/overview), including features that may not be available through the Converse API (such as `stop_sequence` in streaming responses).

For more information on Claude models available on Amazon Bedrock, see [Claude on Amazon Bedrock](https://platform.claude.com/docs/en/build-with-claude/claude-on-amazon-bedrock).

### Provider Instance

You can import the default provider instance `bedrockAnthropic` from `@ai-sdk/amazon-bedrock/anthropic`:

```typescript
import { bedrockAnthropic } from '@ai-sdk/amazon-bedrock/anthropic';
```

If you need a customized setup, you can import `createBedrockAnthropic` from `@ai-sdk/amazon-bedrock/anthropic` and create a provider instance with your settings:

```typescript
import { createBedrockAnthropic } from '@ai-sdk/amazon-bedrock/anthropic';

const bedrockAnthropic = createBedrockAnthropic({
  region: 'us-east-1', // optional
  accessKeyId: 'xxxxxxxxx', // optional
  secretAccessKey: 'xxxxxxxxx', // optional
  sessionToken: 'xxxxxxxxx', // optional
});
```

#### Provider Settings

You can use the following optional settings to customize the Bedrock Anthropic provider instance:

- **region** *string*

  The AWS region that you want to use for the API calls.
  It uses the `AWS_REGION` environment variable by default.

- **accessKeyId** *string*

  The AWS access key ID that you want to use for the API calls.
  It uses the `AWS_ACCESS_KEY_ID` environment variable by default.

- **secretAccessKey** *string*

  The AWS secret access key that you want to use for the API calls.
  It uses the `AWS_SECRET_ACCESS_KEY` environment variable by default.

- **sessionToken** *string*

  Optional. The AWS session token that you want to use for the API calls.
  It uses the `AWS_SESSION_TOKEN` environment variable by default.

- **apiKey** *string*

  API key for authenticating requests using Bearer token authentication.
  When provided, this will be used instead of AWS SigV4 authentication.
  It uses the `AWS_BEARER_TOKEN_BEDROCK` environment variable by default.

- **baseURL** *string*

  Base URL for the Bedrock API calls.
  Useful for custom endpoints or proxy configurations.

- **headers** *Resolvable\<Record\<string, string | undefined>>*

  Headers to include in the requests.

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

- **credentialProvider** *() => PromiseLike\<BedrockCredentials>*

  The AWS credential provider to use for the Bedrock provider to get dynamic
  credentials similar to the AWS SDK. Setting a provider here will cause its
  credential values to be used instead of the `accessKeyId`, `secretAccessKey`,
  and `sessionToken` settings.

### Language Models

You can create models that call the [Anthropic Messages API](https://docs.anthropic.com/claude/reference/messages_post) using the provider instance.
The first argument is the model id, e.g. `us.anthropic.claude-3-5-sonnet-20241022-v2:0`.

```ts
const model = bedrockAnthropic('us.anthropic.claude-3-5-sonnet-20241022-v2:0');
```

You can use Bedrock Anthropic language models to generate text with the `generateText` function:

```ts
import { bedrockAnthropic } from '@ai-sdk/amazon-bedrock/anthropic';
import { generateText } from 'ai';

const { text } = await generateText({
  model: bedrockAnthropic('us.anthropic.claude-3-5-sonnet-20241022-v2:0'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});
```

### Cache Control

In the messages and message parts, you can use the `providerOptions` property to set cache control breakpoints.
You need to set the `anthropic` property in the `providerOptions` object to `{ cacheControl: { type: 'ephemeral' } }` to set a cache control breakpoint.

```ts
import { bedrockAnthropic } from '@ai-sdk/amazon-bedrock/anthropic';
import { generateText } from 'ai';

const result = await generateText({
  model: bedrockAnthropic('us.anthropic.claude-sonnet-4-5-20250929-v1:0'),
  messages: [
    {
      role: 'system',
      content: 'You are an expert assistant.',
      providerOptions: {
        anthropic: { cacheControl: { type: 'ephemeral' } },
      },
    },
    {
      role: 'user',
      content: 'Explain quantum computing.',
    },
  ],
});
```

Cache control requires a minimum of 1024 tokens before the cache checkpoint.
See the [Amazon Bedrock prompt caching
documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html)
for details on supported models and limits.

### Computer Use

The Bedrock Anthropic provider supports Anthropic's computer use tools:

1. **Bash Tool**: Allows running bash commands.
2. **Text Editor Tool**: Provides functionality for viewing and editing text files.
3. **Computer Tool**: Enables control of keyboard and mouse actions on a computer.

They are available via the `tools` property of the provider instance.

Computer use tools require Claude 3.7 Sonnet or newer models. Claude 3.5
Sonnet v2 does not support these tools.

#### Bash Tool

```ts
import { bedrockAnthropic } from '@ai-sdk/amazon-bedrock/anthropic';
import { generateText, stepCountIs } from 'ai';

const result = await generateText({
  model: bedrockAnthropic('us.anthropic.claude-sonnet-4-5-20250929-v1:0'),
  tools: {
    bash: bedrockAnthropic.tools.bash_20241022({
      execute: async ({ command }) => {
        // Implement your bash command execution logic here
        return [{ type: 'text', text: `Executed: ${command}` }];
      },
    }),
  },
  prompt: 'List the files in my directory.',
  stopWhen: stepCountIs(2),
});
```

#### Text Editor Tool

```ts
import { bedrockAnthropic } from '@ai-sdk/amazon-bedrock/anthropic';
import { generateText, stepCountIs } from 'ai';

const result = await generateText({
  model: bedrockAnthropic('us.anthropic.claude-sonnet-4-5-20250929-v1:0'),
  tools: {
    str_replace_editor: bedrockAnthropic.tools.textEditor_20241022({
      execute: async ({ command, path, old_str, new_str, insert_text }) => {
        // Implement your text editing logic here
        return 'File updated successfully';
      },
    }),
  },
  prompt: 'Update my README file.',
  stopWhen: stepCountIs(5),
});
```

#### Computer Tool

```ts
import { bedrockAnthropic } from '@ai-sdk/amazon-bedrock/anthropic';
import { generateText, stepCountIs } from 'ai';
import fs from 'fs';

const result = await generateText({
  model: bedrockAnthropic('us.anthropic.claude-sonnet-4-5-20250929-v1:0'),
  tools: {
    computer: bedrockAnthropic.tools.computer_20241022({
      displayWidthPx: 1024,
      displayHeightPx: 768,
      execute: async ({ action, coordinate, text }) => {
        if (action === 'screenshot') {
          return {
            type: 'image',
            data: fs.readFileSync('./screenshot.png').toString('base64'),
          };
        }
        return `executed ${action}`;
      },
      toModelOutput({ output }) {
        return {
          type: 'content',
          value: [
            typeof output === 'string'
              ? { type: 'text', text: output }
              : {
                  type: 'image-data',
                  data: output.data,
                  mediaType: 'image/png',
                },
          ],
        };
      },
    }),
  },
  prompt: 'Take a screenshot.',
  stopWhen: stepCountIs(3),
});
```

### Reasoning

Anthropic has reasoning support for Claude 3.7 and Claude 4 models on Bedrock, including:

- `us.anthropic.claude-opus-4-6-v1`
- `us.anthropic.claude-opus-4-5-20251101-v1:0`
- `us.anthropic.claude-sonnet-4-5-20250929-v1:0`
- `us.anthropic.claude-opus-4-20250514-v1:0`
- `us.anthropic.claude-sonnet-4-20250514-v1:0`
- `us.anthropic.claude-opus-4-1-20250805-v1:0`
- `us.anthropic.claude-haiku-4-5-20251001-v1:0`

You can enable it using the `thinking` provider option and specifying a thinking budget in tokens.

```ts
import { bedrockAnthropic } from '@ai-sdk/amazon-bedrock/anthropic';
import { generateText } from 'ai';

const { text, reasoningText, reasoning } = await generateText({
  model: bedrockAnthropic('us.anthropic.claude-sonnet-4-5-20250929-v1:0'),
  prompt: 'How many people will live in the world in 2040?',
  providerOptions: {
    anthropic: {
      thinking: { type: 'enabled', budgetTokens: 12000 },
    },
  },
});

console.log(reasoningText); // reasoning text
console.log(reasoning); // reasoning details including redacted reasoning
console.log(text); // text response
```

See [AI SDK UI: Chatbot](/docs/ai-sdk-ui/chatbot#reasoning) for more details
on how to integrate reasoning into your chatbot.

### Model Capabilities

| Model                                          | Image Input         | Object Generation   | Tool Usage          | Computer Use        | Reasoning           |
| ---------------------------------------------- | ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `us.anthropic.claude-opus-4-6-v1`              |  |  |  |  |  |
| `us.anthropic.claude-opus-4-5-20251101-v1:0`   |  |  |  |  |  |
| `us.anthropic.claude-sonnet-4-5-20250929-v1:0` |  |  |  |  |  |
| `us.anthropic.claude-opus-4-20250514-v1:0`     |  |  |  |  |  |
| `us.anthropic.claude-sonnet-4-20250514-v1:0`   |  |  |  |  |  |
| `us.anthropic.claude-opus-4-1-20250805-v1:0`   |  |  |  |  |  |
| `us.anthropic.claude-haiku-4-5-20251001-v1:0`  |  |  |  |  |  |
| `us.anthropic.claude-3-5-sonnet-20241022-v2:0` |  |  |  |  |  |

The Bedrock Anthropic provider uses the native InvokeModel API and supports
all features available in the Anthropic API, except for the Files API and MCP
Connector which are not supported on Bedrock.

## Migrating to `@ai-sdk/amazon-bedrock` 2.x

The Amazon Bedrock provider was rewritten in version 2.x to remove the
dependency on the `@aws-sdk/client-bedrock-runtime` package.

The `bedrockOptions` provider setting previously available has been removed. If
you were using the `bedrockOptions` object, you should now use the `region`,
`accessKeyId`, `secretAccessKey`, and `sessionToken` settings directly instead.

Note that you may need to set all of these explicitly, e.g. even if you're not
using `sessionToken`, set it to `undefined`. If you're running in a serverless
environment, there may be default environment variables set by your containing
environment that the Amazon Bedrock provider will then pick up and could
conflict with the ones you're intending to use.
