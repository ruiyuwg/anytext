# Creating instructions

Instructions tell Agent Actions how to manipulate your data. Some actions, like Generate, rely almost entirely on your instructions and your schema. Others, like Translate use instructions to further refine their default behavior. If you've used other AI tools, instructions are like prompts.

There are two types of instructions:

- `instruction`: Used by Generate and Transform. This pairs with the `instructionParams` option to pass data into the instruction.
- `styleGuide`: Used by Translate. This pairs with the `styleGuideParams` option to pass data into the instruction`.`

Aside from the difference in syntax, the concepts are the same for both `instruction` and `styleGuide`.

> \[!TIP]
> Sanity Client
> The code examples on this page use `client` to refer to a configured `@sanity/client`. For details on configuring the client, refer to the [client documentation](https://reference.sanity.io/_sanity/client/) or one of the Agent Action guides, like the [Generate quick start](https://www.sanity.io/docs/agent-actions/generate-quickstart).

## Basic instructions

At their most basic, instructions are a string telling the Agent Action what you want it to do.

**Generate**

```
await client.agent.action.generate({
  // Replace with your schema ID
  schemaId: "your-schema-id",

  // Tell the client to create a new 'movie' document type.
  targetDocument: { operation: "create", _type: "movie" },

  // Provide an instruction, or prompt.
  instruction: "Create a movie about cats.",
});
```

**Transform**

```
await client.agent.action.transform({
  // Replace with your schema ID
  schemaId: "your-schema-id",

  // Tell the client the ID of the document to transform.
  documentId: "<document-id>",

  // Provide an instruction, or prompt.
  instruction: "Change all instances of 'Alien' to 'Lifeform from another planet'. Match the case of the existing text.",
});
```

**Translate**

```
await client.agent.action.translate({
  // Replace with your schema ID
  schemaId: "your-schema-id",

  // Tell the client the ID of the document to use as the source.
  documentId: "<document-id>",
  
  // Set the operation mode
  targetDocument: { operation: "create" },

  // Set the 'from' and 'to' language
  fromLanguage: {id: "en-US", title: "English"},
  toLanguage: {id: "el-GR", title: "Greek"},

  // Use `styleGuide` instead of instruction for Translate
  styleGuide: "Use a formal tone when translating.",
});
```

## Adding `instructionParams`

You can provide additional information to the instructions by defining and passing `instructionParams` (and `styleGuideParams` for Translate).

Here's an example that uses a basic constant value.

**Generate**

```
await client.agent.action.generate({
  // Replace with your schema ID
  schemaId: "your-schema-id",

  // Tell the client to create a new 'movie' document type.
  targetDocument: { operation: "create", _type: "movie" },

  // Provide an instruction, or prompt.
  instruction: "Create a movie about $topic.",

  instructionParams: {
    topic: 'cats'
  }
});
```

**Transform**

```
await client.agent.action.transform({
  // Replace with your schema ID
  schemaId: "your-schema-id",

  // Tell the client the ID of the document to transform.
  documentId: "<document-id>",

  // Provide an instruction, or prompt.
  instruction: "Change all instances of '$old' to '$new'. Match the case of the existing text.",

  instructionParams: {
    old: 'Alien',
    new: 'Lifeform from another planet'
  }
});
```

**Translate**

```
await client.agent.action.translate({
  // Replace with your schema ID
  schemaId: "your-schema-id",

  // Tell the client the ID of the document to use as the source.
  documentId: "<document-id>",
  
  // Set the operation mode
  targetDocument: { operation: "create" },

  // Set the 'from' and 'to' language
  fromLanguage: {id: "en-US", title: "English"},
  toLanguage: {id: "el-GR", title: "Greek"},

  // Use `styleGuide` instead of instruction for Translate
  styleGuide: "Use a $tone tone when translating.",
  styleGuideParams: {
    tone: 'formal'
  }
});
```

There are two essential things to note about this example:

- The parameter names (*topic*, *old*, *new*, and *tone*) can be any variable name.
- The parameter name is passed into the instruction by prepending `$`.

This example was a constant value, but there multiple types of parameters.

### Constant

You've already seen the shorthand version of the `constant` parameter type in the previous example. Here's the full version:

**Generate / Transform**

```
await client.agent.action.generate({
  // ...
  instruction: "Write the details for a movie about $topic",
  instructionParams: {
    topic: {
      type: "constant",
      value: "cats"
    }
  }
})
```

**Translate**

```
await client.agent.action.translate({
  // ...
  styleGuide: "Use a $tone tone when translating.",
  styleGuideParams: {
    tone: {
      type: "constant",
      value: "formal"
    }
  }
});
```

### Field

The field type parameter picks the value from a field in the source document (if one exists), then passes that to the instruction with the $-prefixed parameter syntax.

You can also provide an optional `documentId` along with the field path to pick a value from any document in your dataset.

**Generate / Transform**

```
await client.agent.action.generate({
  // ...
  instruction: "Write the details for a movie about $topic",
  instructionParams: {
    topic: {
      type: "field",
      path: "movie_idea",
      documentId: '123456' // optional. Otherwise, the source document set by the top level documentId or the ID in an edit operation is used.
    }
  }
})
```

**Translate**

```
await client.agent.action.translate({
  // ...
  styleGuide: "Use a $tone tone when translating.",
  styleGuideParams: {
    tone: {
      type: "field",
      path: "formality",
      documentId: '123456' // optional
    }
  }
});
```

The path should be a full path to the field in the document. For examples of paths, see the [common patterns guide](https://www.sanity.io/docs/agent-actions/agent-action-cheatsheet).

### Document

The document sets the parameter to the full contents of a document. For larger documents, this might become too large and cause issues with the accuracy of the instruction.

**Generate / Transform**

```
await client.agent.action.generate({
  // ...
  instruction: "Develop a new movie. Use these details to generate the concept: $background ",
  instructionParams: {
    background: {
      type: "document",
      documentId: '123456'
    }
  }
})
```

**Translate**

```
await client.agent.action.translate({
  // ...
  styleGuide: "Use the following company guidelines when translating: $guidelines",
  styleGuideParams: {
    guidelines: {
      type: "document",
      documentId: '123456'
    }
  }
});
```

This can be useful for passing in singleton-style documents, or using existing documents as background context.

### GROQ

If field and document aren't powerful enough, you can also write GROQ queries to populate the contents of your instruction parameters.

**Generate / Transform**

```
await client.agent.action.generate({
  // ...
  instruction: "Develop a new movie. Use these details to generate the concept: $background ",
  instructionParams: {
    background: {
      type: "groq",
      query: "*[_id=$id]",
      perspective: "drafts",
      params: {
        id: "123456"
      }
    }
  }
})
```

**Translate**

```
await client.agent.action.translate({
  // ...
  styleGuide: "Use the following company guidelines when translating: $guidelines",
  styleGuideParams: {
    guidelines: {
      type: "groq",
      query: "*[_id=$id]",
      perspective: "drafts",
      params: {
        id: "123456"
      }
    }
  }
});
```

GROQ queries accept filters, projections, perspective, and can receive their own parameters as seen in the example. The `perspective` option only accepts a single perspective.

## Multiple parameters

The examples so far have only been single parameter instructions, but you can mix any combination of parameter types to build your instruction.

**Generate / Transform**

```
await client.agent.action.generate({
  schemaId: "your-schema-id",
  targetDocument: { operation: "create", _type: "movie" },

  instruction: "Create a movie with the title: $title. Use the following details to come up with a synopsis and characters: $backgroundDetails",

  instructionParams: {
    title: {
      type: "constant",
      value: "Sanity: The Content Operating System"
    },
    backgroundDetails: {
      type: "document",
      documentId: "32156481"
    }
  },
});
```

## Per-path instructions

Some Agent Actions support per-patch instructions. For example, you can provide a top-level instruction for all fields, and then specific instructions for individual fields. Learn more about this approach in the [targets and paths documentation](https://www.sanity.io/docs/agent-actions/targets-paths).

## Instruction size considerations

These instruction settings are only part of what Agent Actions use when creating content. They also know about your schema and any document used as the source.

As instructions get larger, they can exceed the max size accepted by the large language models. If you're experiencing inconsistent or unexpected results, try reducing the information you pass in to the instructions.
