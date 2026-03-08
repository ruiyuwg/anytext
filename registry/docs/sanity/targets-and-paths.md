# Targets and paths

In addition to [document operations](https://www.sanity.io/docs/agent-actions/operations), many Agent Actions use `target` to identify specific parts of a document to interact with.

If you haven't already, complete one of the quick start guides. The examples in this document use a mix of Generate, Patch, Transform, and Translate code.

#### Quick starts

[Generate quick start](https://www.sanity.io/docs/agent-actions/generate-quickstart)

[Transform quick start](https://www.sanity.io/docs/agent-actions/transform-quickstart)

[Translate quick start](https://www.sanity.io/docs/agent-actions/translate-quickstart)

[Patch quick start](https://www.sanity.io/docs/agent-actions/patch-quickstart)

## Target

Agent Actions that create or modify documents include a `target` property that determines which sections of the document will be affected by the instruction.

In actions where the target is optional, omitting it will set the document root as the target.

Actions accept a single `target` object or an array of `target` objects to support editing multiple parts of the document.

### Path

A target can be as simple as providing an individual [JSONMatch-style](https://www.sanity.io/docs/content-lake/json-match) path to a field. For example:

```
await client.agent.action.generate({
  schemaId: "your-schema-id",
  documentId: "<document-id>",
  instruction: `Rewrite the title to something more catchy`,
  target: {
    path: "title",
  }
});
```

Or even multiple paths, for example:

```
await client.agent.action.generate({
  schemaId: "your-schema-id",
  documentId: "<document-id>",
  instruction: `Write an article about cats`,
  target: [
    { path: "title" }, // target title
    { path: ["body", "description"] } // target body.description
  ]
});
```

### `maxPathDepth`

By default, Agent Actions will traverse 4 levels deep, starting at the root of the document or the target you define, to mutate your data. Depth is calculated based on the path depth. For example:

- `title` has a depth of 1.
- `array[_key="no"].title` has depth of 3.

```
await client.agent.action.generate({
  schemaId: "your-schema-id",
  documentId: "<document-id>",
  instruction: `Write an article about cats`,
  target: [
    { path: "title" },
    { path: ["body", "description"], maxPathDepth: 2 }
  ]
});
```

### `include` and `exclude`

Targets also accept `include` and `exclude` arrays of paths or targets. By default, all children up to the maxPathDepth are included. Setting either `include` or `exclude` will invalidate the other. For example, if you set include to a field, all sibling fields will be excluded.

```
await client.agent.action.generate({
  schemaId: 'default-schema',
  targetDocument: { operation: 'create', _type: 'article'},
  instruction: 'Stuff about dogs',
  target: {include: ['title', 'description']},
  // target: {exclude: ['title', 'description']} // or exclude
});
```

You can also combine these with path to refine a target.

```
await client.agent.action.generate({
  schemaId: 'default-schema',
  targetDocument: { operation: 'create', _type: 'article'},
  instruction: 'Stuff about dogs',
  target: {path: ['objectField'], include: ['title', 'description']}
});
```

Include also accepts the same shape as `target`, so you can recursively nest target configurations if needed.

```
await client.agent.action.generate({
  schemaId: 'default-schema',
  targetDocument: { operation: 'create', _type: 'article'},
  instruction: 'Stuff about dogs',
  target: {
    path: 'objectField', 
    include: [
      {path: ['nestedObject', 'title']}, 
      {path: ['otherObject', 'deeplyNested']} 
    ]
  }
});
```

### `types`

The `types` property is an object that accepts either `include` or `exclude`. These are mutually exclusive, and let you define an array of types to include or exclude from the target.

```
await client.agent.action.generate({
  schemaId: 'default-schema',
  targetDocument: { operation: 'create', _type: 'article'},
  instruction: 'Stuff about dogs',
  target: {
    path: 'objectField', 
    types: {
      include: ['string', 'text']
    }
  }
});
```

### `operation`

Generate and Patch support the `operation` property to influence how they should affect the target field or fields.

- `set`: Overwrites and replaces the value of the field. For Patch, `set` will merge objects when targeting an object. Otherwise it will overwrite as expected.

- `append`:- Array fields: Appends new items to the end of the array.

- String fields: Adds the new content to the end of the existing content.

- Text fields: Adds the new content to a new line at the end of the existing content.

- Number fields: Adds (+) the new number to the existing number, resulting in the sum as the final value.

- All other fields will use `set` instead of append.

- `mixed`: (default) Applies `set` to non-array fields, and `append` to array fields.

- `unset`: (Patch only) Removes the value of the target field.

- `image-description`: (Transform only) Lets the transform action select an image asset, select a field, and describe the image in the field. You can also set an `imageUrl` to describe remote images. See usage below.

Nested fields inherit the operation from their parent. Use `include` to perform per-path overrides.

```
await client.agent.action.generate({
  schemaId: 'default-schema',
  targetDocument: { operation: 'create', _type: 'article'},
  instruction: 'Add more stuff about dogs',
  target: {path: ['title'], operation: 'append'}
});
```

#### Patch values

When using `operation` with patch, a `value` or array of values is required for each operation type except `unset`.

```
await client.agent.action.patch({
  schemaId: 'default-schema',
  documentId: 'docId',
  target: {
    path: ['object', 'title'],
    operation: 'set',
    value: 'New title'
  }
});
```

#### `image-description` usage

Unlike the other operations, `image-description` accepts an object instead of the operation type as a string. This feature works for any `text`, `string`, or Portable Text (`array` with `block`) field.

For adjacent sources, where the field you want Transform to write to sits alongside the asset—like in a parent wrapper—you only need to set the type. Transform will infer which image you want to describe.

For sources that aren't colocated with the field, use `sourcePath` as shown in the example below to set the path to the image asset.

**Adjacent source**

```
await client.agent.action.transform({
  schemaId: '_.schemas.default',
  documentId: 'document-id',
  instruction: 'Describe the image in one to two sentences.',
  target: [{
    path: ['image', 'alt'],
    operation: {
      type: 'image-description'
    }
  }]
});
```

**External sourcePath**

```
await client.agent.action.transform({
  schemaId: '_.schemas.default',
  documentId: 'document-id',
  instruction: 'Describe the image in one to two sentences.',
  target: [{
    path: ['content','description'],
    operation: {
      type: 'image-description',
      sourcePath: ['image', 'asset']
    }
  }]
});
```

**Remote image (URL)**

```
await client.agent.action.transform({
  schemaId: '_.schemas.default',
  documentId: 'document-id',
  instruction: 'Describe the image in one to two sentences.',
  target: [{
    path: ['content','description'],
    operation: {
      type: 'image-description',
      imageUrl: "https://www.sanity.io/static/images/favicons/android-icon-192x192.png?v=2"
    }
  }]
});
```

As with other Transform operations, you can apply target-level instructions to the  operation if you need to change the instruction on a per-path basis.

#### Additional target resources

[Agent Actions patterns](https://www.sanity.io/docs/agent-actions/agent-action-cheatsheet)

[Generate cheat sheet](https://www.sanity.io/docs/agent-actions/generate-cheatsheet)

### `instruction` / `styleGuide`

Some actions also allow target-level instructions. Transform uses `instruction` and Translate uses `styleGuide`. These operate the same way as their top-level counterparts, and have access to any `instructionParams` or `styleGuideParams` from the request.

**Translate**

```
await client.agent.action.translate({
  schemaId: 'default-schema',
  documentId: 'drafts.id', 
  
  fromLanguage: { id: 'en-GB',title: 'English' },
  toLanguage: { id: 'no-NB', title: 'Norwegian Bokmål' },
  
  languageFieldPath: ['language'],
  
  styleGuide: 'Follow the vibe when translating: $vibe',
  styleGuideParams: {
    vibe: { type: 'field', path: ['vibe']}
  },
  target: [
    {path: 'title'}, // Uses the default style guide
    {path: 'description', styleGuide: 'Only lowercase.' }, // Uses its own style guide
  ]
})
```

**Transform**

```
await client.agent.action.transform({
  schemaId: 'default-schema',
  documentId: 'drafts.id', 
  instruction: 'Make everything all-caps.',
  target: [
    {path: 'title'}, // Uses the default instruction
    {path: 'description', instruction: 'Use only lowercase' }, // Uses its own instruction
  ]
})
```
