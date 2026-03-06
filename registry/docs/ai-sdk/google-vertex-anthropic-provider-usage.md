## Google Vertex Anthropic Provider Usage

The Google Vertex Anthropic provider for the [AI SDK](/docs) offers support for Anthropic's Claude models through the Google Vertex AI APIs. This section provides details on how to set up and use the Google Vertex Anthropic provider.

### Provider Instance

You can import the default provider instance `vertexAnthropic` from `@ai-sdk/google-vertex/anthropic`:

```typescript
import { vertexAnthropic } from "@ai-sdk/google-vertex/anthropic";
```

If you need a customized setup, you can import `createVertexAnthropic` from `@ai-sdk/google-vertex/anthropic` and create a provider instance with your settings:

```typescript
import { createVertexAnthropic } from "@ai-sdk/google-vertex/anthropic";

const vertexAnthropic = createVertexAnthropic({
  project: "my-project", // optional
  location: "us-central1", // optional
});
```

#### Node.js Runtime

For Node.js environments, the Google Vertex Anthropic provider supports all standard Google Cloud authentication options through the `google-auth-library`. You can customize the authentication options by passing them to the `createVertexAnthropic` function:

```typescript
import { createVertexAnthropic } from "@ai-sdk/google-vertex/anthropic";

const vertexAnthropic = createVertexAnthropic({
  googleAuthOptions: {
    credentials: {
      client_email: "my-email",
      private_key: "my-private-key",
    },
  },
});
```

##### Optional Provider Settings

You can use the following optional settings to customize the Google Vertex Anthropic provider instance:

- **project** _string_

  The Google Cloud project ID that you want to use for the API calls.
  It uses the `GOOGLE_VERTEX_PROJECT` environment variable by default.

- **location** _string_

  The Google Cloud location that you want to use for the API calls, e.g. `us-central1`.
  It uses the `GOOGLE_VERTEX_LOCATION` environment variable by default.

- **googleAuthOptions** _object_

  Optional. The Authentication options used by the [Google Auth Library](https://github.com/googleapis/google-auth-library-nodejs/). See also the [GoogleAuthOptions](https://github.com/googleapis/google-auth-library-nodejs/blob/08978822e1b7b5961f0e355df51d738e012be392/src/auth/googleauth.ts#L87C18-L87C35) interface.
  - **authClient** _object_
    An `AuthClient` to use.

  - **keyFilename** _string_
    Path to a .json, .pem, or .p12 key file.

  - **keyFile** _string_
    Path to a .json, .pem, or .p12 key file.

  - **credentials** _object_
    Object containing client_email and private_key properties, or the external account client options.

  - **clientOptions** _object_
    Options object passed to the constructor of the client.

  - **scopes** _string | string\[]_
    Required scopes for the desired API request.

  - **projectId** _string_
    Your project ID.

  - **universeDomain** _string_
    The default service domain for a given Cloud universe.

- **headers** _Resolvable\<Record\<string, string | undefined>>_

  Headers to include in the requests. Can be provided in multiple formats:
  - A record of header key-value pairs: `Record<string, string | undefined>`
  - A function that returns headers: `() => Record<string, string | undefined>`
  - An async function that returns headers: `async () => Record<string, string | undefined>`
  - A promise that resolves to headers: `Promise<Record<string, string | undefined>>`

- **fetch** _(input: RequestInfo, init?: RequestInit) => Promise\<Response>_

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

#### Edge Runtime

Edge runtimes (like Vercel Edge Functions and Cloudflare Workers) are lightweight JavaScript environments that run closer to users at the network edge.
They only provide a subset of the standard Node.js APIs.
For example, direct file system access is not available, and many Node.js-specific libraries
(including the standard Google Auth library) are not compatible.

The Edge runtime version of the Google Vertex Anthropic provider supports Google's [Application Default Credentials](https://github.com/googleapis/google-auth-library-nodejs?tab=readme-ov-file#application-default-credentials) through environment variables. The values can be obtained from a json credentials file from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).

For Edge runtimes, you can import the provider instance from `@ai-sdk/google-vertex/anthropic/edge`:

```typescript
import { vertexAnthropic } from "@ai-sdk/google-vertex/anthropic/edge";
```

To customize the setup, use `createVertexAnthropic` from the same module:

```typescript
import { createVertexAnthropic } from "@ai-sdk/google-vertex/anthropic/edge";

const vertexAnthropic = createVertexAnthropic({
  project: "my-project", // optional
  location: "us-central1", // optional
});
```

For Edge runtime authentication, set these environment variables from your Google Default Application Credentials JSON file:

- `GOOGLE_CLIENT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_PRIVATE_KEY_ID` (optional)

##### Optional Provider Settings

You can use the following optional settings to customize the provider instance:

- **project** _string_

  The Google Cloud project ID that you want to use for the API calls.
  It uses the `GOOGLE_VERTEX_PROJECT` environment variable by default.

- **location** _string_

  The Google Cloud location that you want to use for the API calls, e.g. `us-central1`.
  It uses the `GOOGLE_VERTEX_LOCATION` environment variable by default.

- **googleCredentials** _object_

  Optional. The credentials used by the Edge provider for authentication. These credentials are typically set through environment variables and are derived from a service account JSON file.
  - **clientEmail** _string_
    The client email from the service account JSON file. Defaults to the contents of the `GOOGLE_CLIENT_EMAIL` environment variable.

  - **privateKey** _string_
    The private key from the service account JSON file. Defaults to the contents of the `GOOGLE_PRIVATE_KEY` environment variable.

  - **privateKeyId** _string_
    The private key ID from the service account JSON file (optional). Defaults to the contents of the `GOOGLE_PRIVATE_KEY_ID` environment variable.

- **headers** _Resolvable\<Record\<string, string | undefined>>_

  Headers to include in the requests. Can be provided in multiple formats:
  - A record of header key-value pairs: `Record<string, string | undefined>`
  - A function that returns headers: `() => Record<string, string | undefined>`
  - An async function that returns headers: `async () => Record<string, string | undefined>`
  - A promise that resolves to headers: `Promise<Record<string, string | undefined>>`

- **fetch** _(input: RequestInfo, init?: RequestInit) => Promise\<Response>_

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

### Language Models

You can create models that call the [Anthropic Messages API](https://docs.anthropic.com/claude/reference/messages_post) using the provider instance.
The first argument is the model id, e.g. `claude-3-haiku-20240307`.
Some models have multi-modal capabilities.

```ts
const model = anthropic("claude-3-haiku-20240307");
```

You can use Anthropic language models to generate text with the `generateText` function:

```ts
import { vertexAnthropic } from "@ai-sdk/google-vertex/anthropic";
import { generateText } from "ai";

const { text } = await generateText({
  model: vertexAnthropic("claude-3-haiku-20240307"),
  prompt: "Write a vegetarian lasagna recipe for 4 people.",
});
```

Anthropic language models can also be used in the `streamText` function
and support structured data generation with [`Output`](/docs/reference/ai-sdk-core/output)
(see [AI SDK Core](/docs/ai-sdk-core)).

The Anthropic API returns streaming tool calls all at once after a delay. This
causes structured output generation to complete fully after a delay instead of
streaming incrementally.

The following optional provider options are available for Anthropic models:

- `sendReasoning` _boolean_

  Optional. Include reasoning content in requests sent to the model. Defaults to `true`.

  If you are experiencing issues with the model handling requests involving
  reasoning content, you can set this to `false` to omit them from the request.

- `thinking` _object_

  Optional. See [Reasoning section](#reasoning) for more details.

### Reasoning

Anthropic has reasoning support for the `claude-3-7-sonnet@20250219` model.

You can enable it using the `thinking` provider option
and specifying a thinking budget in tokens.

```ts
import { vertexAnthropic } from "@ai-sdk/google-vertex/anthropic";
import { generateText } from "ai";

const { text, reasoningText, reasoning } = await generateText({
  model: vertexAnthropic("claude-3-7-sonnet@20250219"),
  prompt: "How many people will live in the world in 2040?",
  providerOptions: {
    anthropic: {
      thinking: { type: "enabled", budgetTokens: 12000 },
    },
  },
});

console.log(reasoningText); // reasoning text
console.log(reasoning); // reasoning details including redacted reasoning
console.log(text); // text response
```

See [AI SDK UI: Chatbot](/docs/ai-sdk-ui/chatbot#reasoning) for more details
on how to integrate reasoning into your chatbot.

#### Cache Control

Anthropic cache control is in a Pre-Generally Available (GA) state on Google
Vertex. For more see [Google Vertex Anthropic cache control
documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude-prompt-caching).

In the messages and message parts, you can use the `providerOptions` property to set cache control breakpoints.
You need to set the `anthropic` property in the `providerOptions` object to `{ cacheControl: { type: 'ephemeral' } }` to set a cache control breakpoint.

The cache creation input tokens are then returned in the `providerMetadata` object
for `generateText`, again under the `anthropic` property.
When you use `streamText`, the response contains a promise
that resolves to the metadata. Alternatively you can receive it in the
`onFinish` callback.

```ts highlight="8,18-20,29-30"
import { vertexAnthropic } from "@ai-sdk/google-vertex/anthropic";
import { generateText } from "ai";

const errorMessage = "... long error message ...";

const result = await generateText({
  model: vertexAnthropic("claude-3-5-sonnet-20240620"),
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "You are a JavaScript expert." },
        {
          type: "text",
          text: `Error message: ${errorMessage}`,
          providerOptions: {
            anthropic: { cacheControl: { type: "ephemeral" } },
          },
        },
        { type: "text", text: "Explain the error message." },
      ],
    },
  ],
});

console.log(result.text);
console.log(result.providerMetadata?.anthropic);
// e.g. { cacheCreationInputTokens: 2118, cacheReadInputTokens: 0 }
```

You can also use cache control on system messages by providing multiple system messages at the head of your messages array:

```ts highlight="3,9-11"
const result = await generateText({
  model: vertexAnthropic("claude-3-5-sonnet-20240620"),
  messages: [
    {
      role: "system",
      content: "Cached system message part",
      providerOptions: {
        anthropic: { cacheControl: { type: "ephemeral" } },
      },
    },
    {
      role: "system",
      content: "Uncached system message part",
    },
    {
      role: "user",
      content: "User prompt",
    },
  ],
});
```

For more on prompt caching with Anthropic, see [Google Vertex AI's Claude prompt caching documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude-prompt-caching) and [Anthropic's Cache Control documentation](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching).

### Tools

Google Vertex Anthropic supports a subset of Anthropic's built-in tools. The following tools are available via the `tools` property of the provider instance:

1. **Bash Tool**: Allows running bash commands.
2. **Text Editor Tool**: Provides functionality for viewing and editing text files.
3. **Computer Tool**: Enables control of keyboard and mouse actions on a computer.
4. **Web Search Tool**: Provides access to real-time web content.

Only a subset of Anthropic tools are supported on Google Vertex. Tools like
Code Execution, Memory, and Web Fetch are not available. Use the regular
`@ai-sdk/anthropic` provider if you need access to all Anthropic tools.

For more background on Anthropic tools, see [Anthropic's documentation](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview).

#### Bash Tool

The Bash Tool allows running bash commands. Here's how to create and use it:

```ts
const bashTool = vertexAnthropic.tools.bash_20250124({
  execute: async ({ command, restart }) => {
    // Implement your bash command execution logic here
    // Return the result of the command execution
  },
});
```

Parameters:

- `command` (string): The bash command to run. Required unless the tool is being restarted.
- `restart` (boolean, optional): Specifying true will restart this tool.

#### Text Editor Tool

The Text Editor Tool provides functionality for viewing and editing text files:

```ts
const textEditorTool = vertexAnthropic.tools.textEditor_20250124({
  execute: async ({
    command,
    path,
    file_text,
    insert_line,
    new_str,
    insert_text,
    old_str,
    view_range,
  }) => {
    // Implement your text editing logic here
    // Return the result of the text editing operation
  },
});
```

Parameters:

- `command` ('view' | 'create' | 'str_replace' | 'insert' | 'undo_edit'): The command to run. Note: `undo_edit` is not supported in `textEditor_20250429` and `textEditor_20250728`.
- `path` (string): Absolute path to file or directory, e.g. `/repo/file.py` or `/repo`.
- `file_text` (string, optional): Required for `create` command, with the content of the file to be created.
- `insert_line` (number, optional): Required for `insert` command. The line number after which to insert the new string.
- `new_str` (string, optional): New string for `str_replace` command.
- `insert_text` (string, optional): Required for `insert` command, containing the text to insert.
- `old_str` (string, optional): Required for `str_replace` command, containing the string to replace.
- `view_range` (number\[], optional): Optional for `view` command to specify line range to show.
- `max_characters` (number, optional): Optional maximum number of characters to view in the file (only available in `textEditor_20250728`).

#### Computer Tool

The Computer Tool enables control of keyboard and mouse actions on a computer:

```ts
const computerTool = vertexAnthropic.tools.computer_20241022({
  displayWidthPx: 1920,
  displayHeightPx: 1080,
  displayNumber: 0, // Optional, for X11 environments

  execute: async ({ action, coordinate, text }) => {
    // Implement your computer control logic here
    // Return the result of the action

    // Example code:
    switch (action) {
      case "screenshot": {
        // multipart result:
        return {
          type: "image",
          data: fs
            .readFileSync("./data/screenshot-editor.png")
            .toString("base64"),
        };
      }
      default: {
        console.log("Action:", action);
        console.log("Coordinate:", coordinate);
        console.log("Text:", text);
        return `executed ${action}`;
      }
    }
  },

  // map to tool result content for LLM consumption:
  toModelOutput({ output }) {
    return typeof output === "string"
      ? [{ type: "text", text: output }]
      : [{ type: "image", data: output.data, mediaType: "image/png" }];
  },
});
```

Parameters:

- `action` ('key' | 'type' | 'mouse_move' | 'left_click' | 'left_click_drag' | 'right_click' | 'middle_click' | 'double_click' | 'screenshot' | 'cursor_position'): The action to perform.
- `coordinate` (number\[], optional): Required for `mouse_move` and `left_click_drag` actions. Specifies the (x, y) coordinates.
- `text` (string, optional): Required for `type` and `key` actions.

#### Web Search Tool

The Web Search Tool provides Claude with direct access to real-time web content:

```ts
const webSearchTool = vertexAnthropic.tools.webSearch_20250305({
  maxUses: 5, // Optional: Maximum number of web searches Claude can perform
  allowedDomains: ["example.com"], // Optional: Only search these domains
  blockedDomains: ["spam.com"], // Optional: Never search these domains
  userLocation: {
    // Optional: Provide location for geographically relevant results
    type: "approximate",
    city: "San Francisco",
    region: "CA",
    country: "US",
    timezone: "America/Los_Angeles",
  },
});
```

Parameters:

- `maxUses` (number, optional): Maximum number of web searches Claude can perform during the conversation.
- `allowedDomains` (string\[], optional): Optional list of domains that Claude is allowed to search.
- `blockedDomains` (string\[], optional): Optional list of domains that Claude should avoid when searching.
- `userLocation` (object, optional): Optional user location information to provide geographically relevant search results.
  - `type` ('approximate'): The type of location (must be approximate).
  - `city` (string, optional): The city name.
  - `region` (string, optional): The region or state.
  - `country` (string, optional): The country.
  - `timezone` (string, optional): The IANA timezone ID.

These tools can be used in conjunction with supported Claude models to enable more complex interactions and tasks.

### Model Capabilities

The latest Anthropic model list on Vertex AI is available [here](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-claude#model-list).
See also [Anthropic Model Comparison](https://docs.anthropic.com/en/docs/about-claude/models#model-comparison).

| Model                           | Image Input | Object Generation | Tool Usage | Tool Streaming | Computer Use |
| ------------------------------- | ----------- | ----------------- | ---------- | -------------- | ------------ |
| `claude-3-7-sonnet@20250219`    |             |                   |            |                |              |
| `claude-3-5-sonnet-v2@20241022` |             |                   |            |                |              |
| `claude-3-5-sonnet@20240620`    |             |                   |            |                |              |
| `claude-3-5-haiku@20241022`     |             |                   |            |                |              |
| `claude-3-sonnet@20240229`      |             |                   |            |                |              |
| `claude-3-haiku@20240307`       |             |                   |            |                |              |
| `claude-3-opus@20240229`        |             |                   |            |                |              |

The table above lists popular models. You can also pass any available provider
model ID as a string if needed.

# Rev.ai
