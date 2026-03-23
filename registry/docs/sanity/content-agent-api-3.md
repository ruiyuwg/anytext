# Content Agent API

Build chat interfaces, automate content workflows, and create custom tools that read and write Sanity content through natural language. The [content-agent npm package](https://npmx.dev/package/content-agent) is a [Vercel AI SDK](https://sdk.vercel.ai/) provider that handles streaming, authentication, and thread management.

The package supports two interaction modes: **threads** for stateful, multi-turn conversations (`.agent()`) and **one-shot prompts** for stateless single-turn tasks (`.prompt()`). Both work with the standard Vercel AI SDK functions like `generateText` and `streamText`.

For the full API reference, see the [content-agent](https://reference.sanity.io/content-agent/) [reference docs](https://reference.sanity.io/content-agent/).

#### Related

[Content Agent](https://www.sanity.io/docs/content-agent)

[Build with AI](https://www.sanity.io/docs/ai)

## Prerequisites

Before you start, you need:

- A Sanity project with a [deployed schema](https://www.sanity.io/docs/apis-and-sdks/schema-deployment)
- A project-level API token with **Editor** role or above. Create one in [sanity.io/manage](https://sanity.io/manage) under Your Project → API → Tokens.
- Your organization ID (visible in your project settings)
- Node.js 18+
- A Sanity Studio (v5.1.0+) opened at least once after deployment. This registers the Studio with the Content Agent service.

> \[!NOTE]
> Content Agent calls consume AI credits
> Every Content Agent API call uses [AI credits](https://www.sanity.io/docs/platform-management/how-ai-credits-work). Costs vary by operation: read-only queries cost less than write operations. Monitor your usage in your project settings.

## Quick start

First, install the packages:

**TERMINAL**

```sh
npm install content-agent ai
```

### Generating text

This example sends a single prompt to the Content Agent and prints the response. It uses `generateText` from the Vercel AI SDK.

**quick-start.ts**

```
import { createContentAgent } from 'content-agent'
import { generateText } from 'ai'

const contentAgent = createContentAgent({
  organizationId: '<your-org-id>',
  token: '<your-sanity-token>',
})

const model = contentAgent.agent('my-thread')

const result = await generateText({
  model,
  prompt: 'What blog posts do I have?',
})

console.log(result.text)
```

### Streaming

Use `streamText` to display results as they arrive.

**quick-start-stream.ts**

```
import { createContentAgent } from 'content-agent'
import { streamText } from 'ai'

const contentAgent = createContentAgent({
  organizationId: '<your-org-id>',
  token: '<your-sanity-token>',
})

const { textStream } = streamText({
  model: contentAgent.agent('my-thread'),
  prompt: 'Summarize my latest content',
})

for await (const text of textStream) {
  process.stdout.write(text)
}
```

## Installation and setup

### Install the packages

The [content-agent](https://npmx.dev/package/content-agent) package is available on npm.

**TERMINAL**

```sh
npm install content-agent ai
```

The `content-agent` package is a [Vercel AI SDK](https://sdk.vercel.ai/) provider. The `ai` package is a peer dependency required for `generateText`, `streamText`, and other Vercel AI SDK functions.

### Create the provider

**provider.ts**

```
import { createContentAgent } from 'content-agent'

const contentAgent = createContentAgent({
  organizationId: '<your-org-id>',
  token: '<your-sanity-token>',
})
```

For all provider options, see the [createContentAgent](https://reference.sanity.io/content-agent/createContentAgent/) [reference](https://reference.sanity.io/content-agent/createContentAgent/).

### Authentication

All API requests require a **project-level** API token with the **Editor** role or above. Create one from sanity.io/manage → Your Project → API → Tokens. Organization-level tokens and viewer tokens will not work.

> \[!WARNING]
> Keep tokens secure
> Don't expose authentication tokens in client-side code. For browser-based apps, proxy requests through your own backend.

> \[!WARNING]
> Common authentication errors
>
> - `SIO-401-ANF` ("Session not found"): You are likely using an organization token or a robot token instead of a project-level API token.
> - `projectUserNotFoundError`: The token does not belong to the target project. Verify you created the token under the correct project in sanity.io/manage.
> - `NO_COMPATIBLE_APPLICATIONS`: No registered Studio found. Open your Sanity Studio in a browser at least once to connect it to the Content Agent service.

## Applications

Each application key uniquely identifies a deployed Sanity Studio workspace. Since multiple studios can share the same project ID and dataset, the application key targets the right one.

Use `.applications()` to list available studios for the authenticated user, then pass the key to `.agent()` or `.prompt()`:

**list-apps.ts**

```
const apps = await contentAgent.applications()

const app = apps.find((a) => a.title === 'My Studio')

const model = contentAgent.agent('my-thread', {
  application: { key: app.key },
})
```

## Configuration

The `config` object controls agent behavior. Pass it as part of the options to `.agent()` or `.prompt()`. For the full type definition, see the [Config](https://reference.sanity.io/content-agent/Config/) [reference](https://reference.sanity.io/content-agent/Config/).

**config.ts**

```
const model = contentAgent.agent('my-thread', {
  config: {
    capabilities: { read: true, write: false },
  },
})
```

Here are three common patterns:

**config-patterns.ts**

```
// Read-only: the agent can query but not modify content
config: { capabilities: { read: true, write: false } }

// Scoped: limit to specific document types
config: {
  capabilities: { read: true, write: false },
  filter: { read: '_type in ["post", "author"]' },
}

// Release-scoped: read and write within a specific release
config: {
  capabilities: { read: true, write: true },
  perspectives: { read: ['myRelease'], write: 'myRelease' },
}

```

For full details on each option, see the subsections below.

### Capabilities

Capabilities control what the agent can do. Configure `read` and `write` independently. Each accepts `true` (standard preset), `false` (no access), or an object with a preset name. For the full type definition, see the [Capabilities](https://reference.sanity.io/content-agent/Capabilities/) [reference](https://reference.sanity.io/content-agent/Capabilities/).

| Preset | Read features | Write features |
| --- | --- | --- |
| false | No access | No access |
| { preset: 'minimal' } | Document queries, web search | Simple mutations |
| true or { preset: 'standard' } | Document queries, sets (bulk analysis), web search | Simple and bulk mutations |

> \[!NOTE]
> Drafts only
> The agent can't write to published documents directly. It can only create or update draft and versioned documents.

**capabilities.ts**

```
// Read-only with all read tools
const readOnly = {
  capabilities: { read: true, write: false },
}

// Minimal read (basic queries, no bulk analysis)
const minimalRead = {
  capabilities: { read: { preset: 'minimal' }, write: false },
}

// Full read, minimal write
const readWriteMinimal = {
  capabilities: { read: true, write: { preset: 'minimal' } },
}
```

Use `capabilities.features` to toggle individual features on or off, overriding the preset defaults:

**no-web-search.ts**

```
// Standard read but disable web search
const noWebSearch = {
  capabilities: {
    read: true,
    write: false,
    features: { webSearch: false },
  },
}

```

### Filters

Use GROQ boolean expressions to control which documents the agent can see and modify. For the full type definition, see the [Filter](https://reference.sanity.io/content-agent/Filter/) [reference](https://reference.sanity.io/content-agent/Filter/).

**filters.ts**

```
const model = contentAgent.agent('my-thread', {
  config: {
    filter: {
      // Only these document types are visible
      read: '_type in ["post", "author", "category"]',
      // Only posts can be modified
      write: '_type == "post"',
    },
  },
})

```

### Perspectives

Perspectives control which document versions the agent reads from and writes to. Values are Sanity perspective IDs: `"drafts"`, `"published"`, `"raw"`, or a release ID.

**perspectives.ts**

```
// Only read published documents
const publishedOnly = {
  perspectives: { read: ['published'] },
}

// Lock to a specific release for both reading and writing
const releaseScoped = {
  perspectives: { read: ['myRelease'], write: 'myRelease' },
}
```

When you set `read`, the agent's query tools are restricted to the listed perspectives. When you set `write`, new documents are created in the specified perspective (for example, `"drafts"` creates `drafts.*` IDs).

### User message context

The `userMessageContext` field passes contextual information that the agent appends to each user message. Each key becomes an XML tag with the value as content.

**msg-context.ts**

```
const config = {
  userMessageContext: {
    'slack-channel': '#marketing',
    'slack-user': '@john.doe',
  },
}
// Renders as: <slack-channel>#marketing</slack-channel>

```

### Custom instructions

The `instruction` field adds custom instructions to the agent's system prompt.

**instruction.ts**

```
const config = {
  instruction:
    'You are a Slack bot helping users manage blog content. Always respond in a friendly, concise tone.',
}
```

## Custom tools

You can extend the agent with your own tools using the [Vercel AI SDK tool pattern](https://sdk.vercel.ai/). Pass custom tools when calling `generateText` or `streamText`. The package forwards tool schemas to the agent and runs execution locally on your server.

**tool.ts**

```
import { generateText, tool } from 'ai'
import { z } from 'zod'

const model = contentAgent.agent('my-thread', {
  application: { key: '<your-application-key>' },
  config: { capabilities: { read: true, write: false } },
})

const { text } = await generateText({
  model,
  prompt: 'What is the weather in San Francisco?',
  tools: {
    getWeather: tool({
      description: 'Get the current weather for a location',
      parameters: z.object({
        location: z.string().describe('City name'),
      }),
      execute: async ({ location }) => {
        return { temperature: 72, condition: 'sunny' }
      },
    }),
  },
})

```

Custom tools run alongside the agent's built-in tools. The agent decides when to call them based on the message and the tool descriptions you provide.

## Examples

### Read-only document explorer

Restrict the agent to querying documents without making changes.

**read-only-explorer.ts**

```
import { createContentAgent } from 'content-agent'
import { generateText } from 'ai'

const contentAgent = createContentAgent({
  organizationId: '<your-org-id>',
  token: '<your-sanity-token>',
})

const model = contentAgent.agent('explorer-thread', {
  application: { key: '<your-application-key>' },
  config: {
    capabilities: {
      read: { preset: 'standard' },
      write: false,
    },
    filter: {
      read: '_type in ["post", "author", "page"]',
    },
  },
})

const { text } = await generateText({
  model,
  prompt: 'Show me all posts published this month',
})

console.log(text)

```

### Chat with user context

Pass contextual information about the current environment or workflow to the agent.

**chat.ts**

```
import { createContentAgent } from 'content-agent'
import { streamText } from 'ai'

const contentAgent = createContentAgent({
  organizationId: '<your-org-id>',
  token: '<your-sanity-token>',
})

const model = contentAgent.agent('slack-bot-thread', {
  application: { key: '<your-application-key>' },
  config: {
    instruction: 'You are a Slack bot helping users manage content.',
    userMessageContext: {
      'slack-channel': '#content-team',
      'slack-user': '@john.doe',
    },
    capabilities: {
      read: true,
      write: false,
    },
  },
})

const { textStream } = streamText({
  model,
  prompt: 'What content needs review this week?',
})

for await (const chunk of textStream) {
  process.stdout.write(chunk)
}

```

## Error handling

The package throws API errors as exceptions. Wrap your calls in try/catch blocks. For the full list of error types and status codes, see the [ErrorResponse](https://reference.sanity.io/content-agent/ErrorResponse/) [reference](https://reference.sanity.io/content-agent/ErrorResponse/).

**try-catch.ts**

```
try {
  const { text } = await generateText({ model, prompt: 'List all posts' })
  console.log(text)
} catch (error) {
  console.error('Content Agent error:', error.message)
}

```

## Limitations

- The agent can only write to draft and versioned documents.
- The prompt endpoint has a 10,000 character limit for the message field.
- The API version is currently `vX` (preview). Endpoints and behavior may change.
- The API manages thread history server-side. You cannot retrieve or modify past messages through the API.

#### Related

[Content Agent](https://www.sanity.io/docs/content-agent)

[Build with AI](https://www.sanity.io/docs/ai)

# Build custom applications on Sanity

#### Get started

[App SDK Quickstart Guide](https://www.sanity.io/docs/app-sdk/sdk-quickstart)

[Conceptual Walkthrough](https://www.sanity.io/docs/app-sdk/sdk-introduction)

#### Concepts

[Document Handles](https://www.sanity.io/docs/app-sdk/document-handles)

[React Hooks](https://www.sanity.io/docs/app-sdk/sdk-react-hooks)

[React Suspense](https://www.sanity.io/docs/app-sdk/react-suspense-sdk)

#### Headless UI

[Sanity UI](https://www.sanity.io/docs/app-sdk/sanity-ui-sdk)

[Tailwind CSS](https://www.sanity.io/docs/app-sdk/tailwind-sdk)

#### Reference and examples

[App SDK – Reference](https://reference.sanity.io/_sanity/sdk-react/)

[App SDK Explorer](https://sdk-explorer.sanity.io)
