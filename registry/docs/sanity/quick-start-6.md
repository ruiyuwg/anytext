# Quick start

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

Prompt is a Sanity Agent Action that lets you make large language model (LLM) requests without bringing in external AI tooling. You can run prompts from anywhere you can execute code, such as [Sanity Functions](https://www.sanity.io/docs/functions/functions-introduction), custom components, webhook listeners, CI/CD pipelines, migration scripts, and more.

In this guide, you'll first use Prompt to make a request to the LLM. You'll use `@sanity/client` to run the Prompt (you can also make requests using the [HTTP API](https://www.sanity.io/docs/http-reference/agent-actions) directly).

**Prerequisites**:

- `@sanity/client` v7.8.2 or higher and an environment to run client requests.
- API Version `vX` is required for any requests to the Agent Actions APIs.
- Optional: In Node.js v23.6 and above, you can run the TypeScript examples below without additional servers or build processes. Alternatively, you can use [earlier versions with an experimental flag](https://nodejs.org/en/learn/typescript/run-natively). Converting the examples to JavaScript is okay too.
- An API or personal token to make authenticated requests.

## Configure the client

Import and configure `@sanity/client` with the `projectId`, `dataset`, API `token`, and an `apiVersion` of vX.

**prompt.ts**

```typescript
import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: '<project-id>',
    dataset: '<dataset-name>',
    apiVersion: 'vX',
    token: '<editor-token>'
})
```

If you're already using the client elsewhere in an application, you can reuse its base configuration. If you need to adjust the token and/or API version, use the `withConfig` method to create a new client based on your existing one. For example:

```typescript
// ...
const promptClient = client.withConfig({
  token: '<your-token>',
})
```

## Prompt for ideas

Prompts don't edit or create documents. They return text, or json, so you can use it however you please.

```
const response = await client.agent.action.prompt({
  // write an instruction
  instruction: `Give me some ideas for a blog post 
    about using AI with structured content.`
});

console.log(response)
```

This prompt returns a text response that you can use. The examples on this page log the response to the console.

## Use parameters

You can further customize the instruction by passing in parameters. For example, if you want use a document as background information for the prompt, you use the `document` parameter type.

```
const response = await client.agent.action.prompt({
  // write an instruction
  instruction: `Give me some ideas for a blog post 
    about using AI with structured content. Use the following as context for the ideas: $background`,
  instructionParams: {
    background: {
      type: 'document',
      documentId: '<target-document-id>'
    }
  }
});
console.log(response)
```

You can learn more about parameters and the available types in the [creating instructions guide](https://www.sanity.io/docs/agent-actions/instructions).

## Change the output

Prompt will return a string response by default, but you can also tell it to return JSON. To do so, you must set the `format` to "json" and explicitly include the world "JSON" or "json" in the instruction. It also helps to provide an example shape in the instruction.

```
const response = await client.agent.action.prompt({
  // write an instruction
  instruction: `Give me some ideas for a blog post 
    about using AI with structured content. Respond in JSON with the following format: { "ideas": ['idea one', 'idea two', 'etc'] }`,
  format: 'json'
});
console.log(response)
```

## Add variety

You can tune the variance of responses by adjusting the `temperature` of the request.

```
const response = await client.agent.action.prompt({
  // write an instruction
  instruction: `Give me some ideas for a blog post 
    about using AI with structured content.`,
  temperature: '0.8' // Set between 0 and 1, inclusively. Default: 0.3
});
console.log(response)
```

Higher values result in more variety of responses, while lower values result in more predictable results when given the same instruction.

## Next steps

To learn more about what you can do with Translate, explore the other guides and resources available for [Agent Actions](https://www.sanity.io/docs/agent-actions).

#### Explore more

[Agent Actions patterns](https://www.sanity.io/docs/agent-actions/agent-action-cheatsheet)

[Agent Actions](https://www.sanity.io/docs/http-reference/agent-actions)
