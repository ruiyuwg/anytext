## Prompt caching

**Compatibility**: This feature is currently in beta.

Anthropic supports [caching parts of your prompt](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) in order to reduce costs for use-cases that require long context. You can cache tools and both entire messages and individual blocks.

The initial request containing one or more blocks or tool definitions with a `"cache_control": { "type": "ephemeral" }` field will automatically cache that part of the prompt. This initial caching step will cost extra, but subsequent requests will be billed at a reduced rate. The cache has a lifetime of 5 minutes, but this is refreshed each time the cache is hit.

There is also currently a minimum cacheable prompt length, which varies according to model. For more information, see [prompt caching details](https://platform.claude.com/docs/en/build-with-claude/prompt-caching#structuring-your-prompt).

This currently requires you to initialize your model with a beta header. Here's an example of caching part of a system message that contains the LangChain [conceptual docs](/oss/javascript/concepts/):

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
let CACHED_TEXT = "...";
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
// @lc-docs-hide-cell

CACHED_TEXT = `## Components

LangChain provides standard, extendable interfaces and external integrations for various components useful for building with LLMs.
Some components LangChain implements, some components we rely on third-party integrations for, and others are a mix.

### Chat models

<span data-heading-keywords="chat model,chat models"></span>

Language models that use a sequence of messages as inputs and return chat messages as outputs (as opposed to using plain text).
These are generally newer models (older models are generally \`LLMs\`, see below).
Chat models support the assignment of distinct roles to conversation messages, helping to distinguish messages from the AI, users, and instructions such as system messages.

Although the underlying models are messages in, message out, the LangChain wrappers also allow these models to take a string as input.
This gives them the same interface as LLMs (and simpler to use).
When a string is passed in as input, it will be converted to a \`HumanMessage\` under the hood before being passed to the underlying model.

LangChain does not host any Chat Models, rather we rely on third party integrations.

We have some standardized parameters when constructing ChatModels:

- \`model\`: the name of the model

Chat Models also accept other parameters that are specific to that integration.

<Warning>
**Some chat models have been fine-tuned for **tool calling** and provide a dedicated API for it.**

Generally, such models are better at tool calling than non-fine-tuned models, and are recommended for use cases that require tool calling.
Please see the [tool calling section](/oss/javascript/langchain/tools) for more information.
</Warning>

For specifics on how to use chat models, see the [relevant how-to guides here](/oss/javascript/langchain/models).

#### Multimodality

Some chat models are multimodal, accepting images, audio and even video as inputs.
These are still less common, meaning model providers haven't standardized on the "best" way to define the API.
Multimodal outputs are even less common. As such, we've kept our multimodal abstractions fairly light weight
and plan to further solidify the multimodal APIs and interaction patterns as the field matures.

In LangChain, most chat models that support multimodal inputs also accept those values in OpenAI's content blocks format.
So far this is restricted to image inputs. For models like Gemini which support video and other bytes input, the APIs also support the native, model-specific representations.

For specifics on how to use multimodal models, see the [relevant how-to guides here](/oss/javascript/how-to/#multimodal).

### LLMs

<span data-heading-keywords="llm,llms"></span>

<Warning>
**Pure text-in/text-out LLMs tend to be older or lower-level. Many popular models are best used as [chat completion models](/oss/javascript/langchain/models),**

even for non-chat use cases.

You are probably looking for [the section above instead](/oss/javascript/langchain/models).
</Warning>

Language models that takes a string as input and returns a string.
These are traditionally older models (newer models generally are [Chat Models](/oss/javascript/langchain/models), see above).

Although the underlying models are string in, string out, the LangChain wrappers also allow these models to take messages as input.
This gives them the same interface as [Chat Models](/oss/javascript/langchain/models).
When messages are passed in as input, they will be formatted into a string under the hood before being passed to the underlying model.

LangChain does not host any LLMs, rather we rely on third party integrations.

For specifics on how to use LLMs, see the [relevant how-to guides here](/oss/javascript/langchain/models).

### Message types

Some language models take an array of messages as input and return a message.
There are a few different types of messages.
All messages have a \`role\`, \`content\`, and \`response_metadata\` property.

The \`role\` describes WHO is saying the message.
LangChain has different message classes for different roles.

The \`content\` property describes the content of the message.
This can be a few different things:

- A string (most models deal this type of content)
- A List of objects (this is used for multi-modal input, where the object contains information about that input type and that input location)

#### HumanMessage

This represents a message from the user.

#### AIMessage

This represents a message from the model. In addition to the \`content\` property, these messages also have:

**\`response_metadata\`**

The \`response_metadata\` property contains additional metadata about the response. The data here is often specific to each model provider.
This is where information like log-probs and token usage may be stored.

**\`tool_calls\`**

These represent a decision from an language model to call a tool. They are included as part of an \`AIMessage\` output.
They can be accessed from there with the \`.tool_calls\` property.

This property returns a list of \`ToolCall\`s. A \`ToolCall\` is an object with the following arguments:

- \`name\`: The name of the tool that should be called.
- \`args\`: The arguments to that tool.
- \`id\`: The id of that tool call.

#### SystemMessage

This represents a system message, which tells the model how to behave. Not every model provider supports this.

#### ToolMessage

This represents the result of a tool call. In addition to \`role\` and \`content\`, this message has:

- a \`tool_call_id\` field which conveys the id of the call to the tool that was called to produce this result.
- an \`artifact\` field which can be used to pass along arbitrary artifacts of the tool execution which are useful to track but which should not be sent to the model.

#### (Legacy) FunctionMessage

This is a legacy message type, corresponding to OpenAI's legacy function-calling API. \`ToolMessage\` should be used instead to correspond to the updated tool-calling API.

This represents the result of a function call. In addition to \`role\` and \`content\`, this message has a \`name\` parameter which conveys the name of the function that was called to produce this result.

### Prompt templates

<span data-heading-keywords="prompt,prompttemplate,chatprompttemplate"></span>

Prompt templates help to translate user input and parameters into instructions for a language model.
This can be used to guide a model's response, helping it understand the context and generate relevant and coherent language-based output.

Prompt Templates take as input an object, where each key represents a variable in the prompt template to fill in.

Prompt Templates output a PromptValue. This PromptValue can be passed to an LLM or a ChatModel, and can also be cast to a string or an array of messages.
The reason this PromptValue exists is to make it easy to switch between strings and messages.

There are a few different types of prompt templates:

#### String PromptTemplates

These prompt templates are used to format a single string, and generally are used for simpler inputs.
For example, a common way to construct and use a PromptTemplate is as follows:

\`\`\`typescript
import { PromptTemplate } from "@langchain/core/prompts";

const promptTemplate = PromptTemplate.fromTemplate(
  "Tell me a joke about {topic}"
);

await promptTemplate.invoke({ topic: "cats" });
\`\`\`

#### ChatPromptTemplates

These prompt templates are used to format an array of messages. These "templates" consist of an array of templates themselves.
For example, a common way to construct and use a ChatPromptTemplate is as follows:

\`\`\`typescript
import { ChatPromptTemplate } from "@langchain/core/prompts";

const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", "You are a helpful assistant"],
  ["user", "Tell me a joke about {topic}"],
]);

await promptTemplate.invoke({ topic: "cats" });
\`\`\`

In the above example, this ChatPromptTemplate will construct two messages when called.
The first is a system message, that has no variables to format.
The second is a HumanMessage, and will be formatted by the \`topic\` variable the user passes in.

#### MessagesPlaceholder

<span data-heading-keywords="messagesplaceholder"></span>

This prompt template is responsible for adding an array of messages in a particular place.
In the above ChatPromptTemplate, we saw how we could format two messages, each one a string.
But what if we wanted the user to pass in an array of messages that we would slot into a particular spot?
This is how you use MessagesPlaceholder.

\`\`\`typescript
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { HumanMessage } from "@langchain/core/messages";

const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", "You are a helpful assistant"],
  new MessagesPlaceholder("msgs"),
]);

promptTemplate.invoke({ msgs: [new HumanMessage({ content: "hi!" })] });
\`\`\`

This will produce an array of two messages, the first one being a system message, and the second one being the HumanMessage we passed in.
If we had passed in 5 messages, then it would have produced 6 messages in total (the system message plus the 5 passed in).
This is useful for letting an array of messages be slotted into a particular spot.

An alternative way to accomplish the same thing without using the \`MessagesPlaceholder\` class explicitly is:

\`\`\`typescript
const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", "You are a helpful assistant"],
  ["placeholder", "{msgs}"], // <-- This is the changed part
]);
\`\`\`

For specifics on how to use prompt templates, see the [relevant how-to guides here](/oss/javascript/how-to/#prompt-templates).

### Example Selectors

One common prompting technique for achieving better performance is to include examples as part of the prompt.
This gives the language model concrete examples of how it should behave.
Sometimes these examples are hardcoded into the prompt, but for more advanced situations it may be nice to dynamically select them.
Example Selectors are classes responsible for selecting and then formatting examples into prompts.

For specifics on how to use example selectors, see the [relevant how-to guides here](/oss/javascript/how-to/#example-selectors).

### Output parsers

<span data-heading-keywords="output parser"></span>

<Note>
**The information here refers to parsers that take a text output from a model try to parse it into a more structured representation.**

More and more models are supporting function (or tool) calling, which handles this automatically.
It is recommended to use function/tool calling rather than output parsing.
See the [LangChain tools documentation](/oss/javascript/langchain/tools).

</Note>

Responsible for taking the output of a model and transforming it to a more suitable format for downstream tasks.
Useful when you are using LLMs to generate structured data, or to normalize output from chat models and LLMs.

There are two main methods an output parser must implement:

- "Get format instructions": A method which returns a string containing instructions for how the output of a language model should be formatted.
- "Parse": A method which takes in a string (assumed to be the response from a language model) and parses it into some structure.

And then one optional one:

- "Parse with prompt": A method which takes in a string (assumed to be the response from a language model) and a prompt (assumed to be the prompt that generated such a response) and parses it into some structure. The prompt is largely provided in the event the OutputParser wants to retry or fix the output in some way, and needs information from the prompt to do so.

Output parsers accept a string or \`BaseMessage\` as input and can return an arbitrary type.

LangChain has many different types of output parsers. This is a list of output parsers LangChain supports. The table below has various pieces of information:

**Name**: The name of the output parser

**Supports Streaming**: Whether the output parser supports streaming.

**Input Type**: Expected input type. Most output parsers work on both strings and messages, but some (like OpenAI Functions) need a message with specific arguments.

**Output Type**: The output type of the object returned by the parser.

**Description**: Our commentary on this output parser and when to use it.

The current date is ${new Date().toISOString()}`;

// Noop statement to hide output
void 0;
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatAnthropic } from "@langchain/anthropic";

const modelWithCaching = new ChatAnthropic({
  model: "claude-haiku-4-5-20251001",
  clientOptions: {
    defaultHeaders: {
      "anthropic-beta": "prompt-caching-2024-07-31",
    },
  },
});

const LONG_TEXT = `You are a pirate. Always respond in pirate dialect.

Use the following as context when answering questions:

${CACHED_TEXT}`;

const messages = [
  {
    role: "system",
    content: [
      {
        type: "text",
        text: LONG_TEXT,
        // Tell Anthropic to cache this block
        cache_control: { type: "ephemeral" },
      },
    ],
  },
  {
    role: "user",
    content: "What types of messages are supported in LangChain?",
  },
];

const res = await modelWithCaching.invoke(messages);

console.log("USAGE:", res.response_metadata.usage);
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
USAGE: {
  input_tokens: 19,
  cache_creation_input_tokens: 2921,
  cache_read_input_tokens: 0,
  output_tokens: 355
}
```

We can see that there's a new field called `cache_creation_input_tokens` in the raw usage field returned from Anthropic.

If we use the same messages again, we can see that the long text's input tokens are read from the cache:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const res2 = await modelWithCaching.invoke(messages);

console.log("USAGE:", res2.response_metadata.usage);
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
USAGE: {
  input_tokens: 19,
  cache_creation_input_tokens: 0,
  cache_read_input_tokens: 2921,
  output_tokens: 357
}
```

### Tool caching

You can also cache tools by setting the same `"cache_control": { "type": "ephemeral" }` within a tool definition. This currently requires you to bind a tool in [Anthropic's raw tool format](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview) Here's an example:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const SOME_LONG_DESCRIPTION = "...";

// Tool in Anthropic format
const anthropicTools = [{
  name: "get_weather",
  description: SOME_LONG_DESCRIPTION,
  input_schema: {
    type: "object",
    properties: {
      location: {
        type: "string",
        description: "Location to get the weather for",
      },
      unit: {
        type: "string",
        description: "Temperature unit to return",
      },
    },
    required: ["location"],
  },
  // Tell Anthropic to cache this tool
  cache_control: { type: "ephemeral" },
}]

const modelWithCachedTools = modelWithCaching.bindTools(anthropicTools);

await modelWithCachedTools.invoke("what is the weather in SF?");
```

For more on how prompt caching works, see [Anthropic's docs](https://platform.claude.com/docs/en/build-with-claude/prompt-caching#how-prompt-caching-works).

## Custom clients

Anthropic models [may be hosted on cloud services such as Google Vertex](https://platform.claude.com/docs/en/build-with-claude/claude-on-vertex-ai) that rely on a different underlying client with the same interface as the primary Anthropic client. You can access these services by providing a `createClient` method that returns an initialized instance of an Anthropic client. Here's an example:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { AnthropicVertex } from "@anthropic-ai/vertex-sdk";

const customClient = new AnthropicVertex();

const modelWithCustomClient = new ChatAnthropic({
  modelName: "claude-3-sonnet@20240229",
  maxRetries: 0,
  createClient: () => customClient,
});

await modelWithCustomClient.invoke([{ role: "user", content: "Hello!" }]);
```
