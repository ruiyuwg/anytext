## Agent Skills

[Anthropic Agent Skills](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) enable Claude to perform specialized tasks like document processing (PPTX, DOCX, PDF, XLSX) and data analysis. Skills run in a sandboxed container and require the code execution tool to be enabled.

### Using Built-in Skills

Anthropic provides several built-in skills:

- **pptx** - Create and edit PowerPoint presentations
- **docx** - Create and edit Word documents
- **pdf** - Process and analyze PDF files
- **xlsx** - Work with Excel spreadsheets

To use skills, you need to:

1. Enable the code execution tool
2. Specify the container with skills in `providerOptions`

```ts highlight="4,9-17,19-23"
import { anthropic, AnthropicLanguageModelOptions } from '@ai-sdk/anthropic';
import { generateText } from 'ai';

const result = await generateText({
  model: anthropic('claude-sonnet-4-5'),
  tools: {
    code_execution: anthropic.tools.codeExecution_20260120(),
  },
  prompt: 'Create a presentation about renewable energy with 5 slides',
  providerOptions: {
    anthropic: {
      container: {
        skills: [
          {
            type: 'anthropic',
            skillId: 'pptx',
            version: 'latest', // optional
          },
        ],
      },
    } satisfies AnthropicLanguageModelOptions,
  },
});
```

### Custom Skills

You can also use custom skills by specifying `type: 'custom'`:

```ts highlight="9-11"
const result = await generateText({
  model: anthropic('claude-sonnet-4-5'),
  tools: {
    code_execution: anthropic.tools.codeExecution_20260120(),
  },
  prompt: 'Use my custom skill to process this data',
  providerOptions: {
    anthropic: {
      container: {
        skills: [
          {
            type: 'custom',
            skillId: 'my-custom-skill-id',
            version: '1.0', // optional
          },
        ],
      },
    } satisfies AnthropicLanguageModelOptions,
  },
});
```

Skills use progressive context loading and execute within a sandboxed
container with code execution capabilities.

### PDF support

Anthropic Claude models support reading PDF files.
You can pass PDF files as part of the message content using the `file` type:

Option 1: URL-based PDF document

```ts
const result = await generateText({
  model: anthropic('claude-sonnet-4-5'),
  messages: [
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: 'What is an embedding model according to this document?',
        },
        {
          type: 'file',
          data: new URL(
            'https://github.com/vercel/ai/blob/main/examples/ai-functions/data/ai.pdf?raw=true',
          ),
          mimeType: 'application/pdf',
        },
      ],
    },
  ],
});
```

Option 2: Base64-encoded PDF document

```ts
const result = await generateText({
  model: anthropic('claude-sonnet-4-5'),
  messages: [
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: 'What is an embedding model according to this document?',
        },
        {
          type: 'file',
          data: fs.readFileSync('./data/ai.pdf'),
          mediaType: 'application/pdf',
        },
      ],
    },
  ],
});
```

The model will have access to the contents of the PDF file and
respond to questions about it.
The PDF file should be passed using the `data` field,
and the `mediaType` should be set to `'application/pdf'`.

### Model Capabilities

| Model               | Image Input         | Object Generation   | Tool Usage          | Computer Use        | Web Search          | Tool Search         | Compaction          |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `claude-opus-4-6`   |  |  |  |  |  |  |  |
| `claude-sonnet-4-6` |  |  |  |  |  |  |                     |
| `claude-opus-4-5`   |  |  |  |  |  |  |                     |
| `claude-haiku-4-5`  |  |  |  |  |  |                     |                     |
| `claude-sonnet-4-5` |  |  |  |  |  |  |                     |
| `claude-opus-4-1`   |  |  |  |  |  |                     |                     |
| `claude-opus-4-0`   |  |  |  |  |  |                     |                     |
| `claude-sonnet-4-0` |  |  |  |  |  |                     |                     |

The table above lists popular models. Please see the [Anthropic
docs](https://docs.anthropic.com/en/docs/about-claude/models) for a full list
of available models. The table above lists popular models. You can also pass
any available provider model ID as a string if needed.

# Open Responses
