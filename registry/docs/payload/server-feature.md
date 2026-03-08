## Server Feature

Custom Blocks are not enough? To start building a custom feature, you should start with the server feature, which is the entry-point.

**Example myFeature/feature.server.ts:**

```ts
import { createServerFeature } from '@payloadcms/richtext-lexical'

export const MyFeature = createServerFeature({
  feature: {},
  key: 'myFeature',
})
```

`createServerFeature` is a helper function which lets you create new features without boilerplate code.

Now, the feature is ready to be used in the editor:

```ts
import { MyFeature } from './myFeature/feature.server';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

//...
 {
    name: 'richText',
    type: 'richText',
    editor: lexicalEditor({
      features: [
        MyFeature(),
      ],
    }),
 },
```

By default, this server feature does nothing - you haven't added any functionality yet. Depending on what you want your feature to do, the ServerFeature type exposes various properties you can set to inject custom functionality into the lexical editor.

### i18n

Each feature can register their own translations, which are automatically scoped to the feature key:

```ts
import { createServerFeature } from '@payloadcms/richtext-lexical'

export const MyFeature = createServerFeature({
  feature: {
    i18n: {
      en: {
        label: 'My Feature',
      },
      de: {
        label: 'Mein Feature',
      },
    },
  },
  key: 'myFeature',
})
```

This allows you to add i18n translations scoped to your feature. This specific example translation will be available under `lexical:myFeature:label` - `myFeature` being your feature key.

### Markdown Transformers#server-feature-markdown-transformers

The Server Feature, just like the Client Feature, allows you to add markdown transformers. Markdown transformers on the server are used when [converting the editor from or to markdown](../rich-text/converting-markdown).

```ts
import { createServerFeature } from '@payloadcms/richtext-lexical'
import type { ElementTransformer } from '@payloadcms/richtext-lexical/lexical/markdown'
import { $createMyNode, $isMyNode, MyNode } from './nodes/MyNode'

const MyMarkdownTransformer: ElementTransformer = {
  type: 'element',
  dependencies: [MyNode],
  export: (node, exportChildren) => {
    if (!$isMyNode(node)) {
      return null
    }
    return '+++'
  },
  // match ---
  regExp: /^+++\s*$/,
  replace: (parentNode) => {
    const node = $createMyNode()
    if (node) {
      parentNode.replace(node)
    }
  },
}

export const MyFeature = createServerFeature({
  feature: {
    markdownTransformers: [MyMarkdownTransformer],
  },
  key: 'myFeature',
})
```

In this example, the node will be outputted as `+++` in Markdown, and the markdown `+++` will be converted to a `MyNode` node in the editor.

### Nodes#server-feature-nodes

While nodes added to the server feature do not control how the node is rendered in the editor, they control other aspects of the node:

- HTML conversion
- Node Hooks
- Sub fields
- Behavior in a headless editor

The `createNode` helper function is used to create nodes with proper typing. It is recommended to use this function to create nodes.

```ts
import { createServerFeature, createNode } from '@payloadcms/richtext-lexical'
import { MyNode } from './nodes/MyNode'

export const MyFeature = createServerFeature({
  feature: {
    nodes: [
      // Use the createNode helper function to more easily create nodes with proper typing
      createNode({
        converters: {
          html: {
            converter: () => {
              return `<hr/>`
            },
            nodeTypes: [MyNode.getType()],
          },
        },
        // Here you can add your actual node. On the server, they will be
        // used to initialize a headless editor which can be used to perform
        // operations on the editor, like markdown / html conversion.
        node: MyNode,
      }),
    ],
  },
  key: 'myFeature',
})
```

While nodes in the client feature are added by themselves to the nodes array, nodes in the server feature can be added together with the following sibling options:

| Option                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`getSubFields`**              | If a node includes sub-fields (e.g. block and link nodes), passing the subFields schema here will make Payload automatically populate & run hooks for them.                                                                                                                                                                                                                                                                                                   |
| **`getSubFieldsData`**          | If a node includes sub-fields, the sub-fields data needs to be returned here, alongside `getSubFields` which returns their schema.                                                                                                                                                                                                                                                                                                                            |
| **`graphQLPopulationPromises`** | Allows you to run population logic when a node's data was requested from GraphQL. While `getSubFields` and `getSubFieldsData` automatically handle populating sub-fields (since they run hooks on them), those are only populated in the Rest API. This is because the Rest API hooks do not have access to the 'depth' property provided by GraphQL. In order for them to be populated correctly in GraphQL, the population logic needs to be provided here. |
| **`node`**                      | The actual lexical node needs to be provided here. This also supports [lexical node replacements](https://lexical.dev/docs/concepts/node-replacement).                                                                                                                                                                                                                                                                                                        |
| **`validations`**               | This allows you to provide node validations, which are run when your document is being validated, alongside other Payload fields. You can use it to throw a validation error for a specific node in case its data is incorrect.                                                                                                                                                                                                                               |
| **`converters`**                | Allows you to define how a node can be serialized into different formats. Currently, only supports HTML. Markdown converters are defined in `markdownTransformers` and not here.                                                                                                                                                                                                                                                                              |
| **`hooks`**                     | Just like Payload fields, you can provide hooks which are run for this specific node. These are called Node Hooks.                                                                                                                                                                                                                                                                                                                                            |

### Feature load order

Server features can also accept a function as the `feature` property (useful for sanitizing props, as mentioned below). This function will be called when the feature is loaded during the Payload sanitization process:

```ts
import { createServerFeature } from '@payloadcms/richtext-lexical'

createServerFeature({
  //...
  feature: async ({
    config,
    isRoot,
    props,
    resolvedFeatures,
    unSanitizedEditorConfig,
    featureProviderMap,
  }) => {
    return {
      //Actual server feature here...
    }
  },
})
```

"Loading" here means the process of calling this `feature` function. By default, features are called in the order in which they are added to the editor.
However, sometimes you might want to load a feature after another feature has been loaded, or require a different feature to be loaded, throwing an error if this is not the case.

Within lexical, one example where this is done are our list features. Both `UnorderedListFeature` and `OrderedListFeature` register the same `ListItem` node. Within `UnorderedListFeature` we register it normally, but within `OrderedListFeature` we want to only register the `ListItem` node if the `UnorderedListFeature` is not present - otherwise, we would have two features registering the same node.

Here is how we do it:

```ts
import { createServerFeature, createNode } from '@payloadcms/richtext-lexical'

export const OrderedListFeature = createServerFeature({
  feature: ({ featureProviderMap }) => {
    return {
      // ...
      nodes: featureProviderMap.has('unorderedList')
        ? []
        : [
            createNode({
              // ...
            }),
          ],
    }
  },
  key: 'orderedList',
})
```

`featureProviderMap` will always be available and contain all the features, even yet-to-be-loaded ones, so we can check if a feature is loaded by checking if its `key` present in the map.

If you wanted to make sure a feature is loaded before another feature, you can use the `dependenciesPriority` property:

```ts
import { createServerFeature } from '@payloadcms/richtext-lexical'

export const MyFeature = createServerFeature({
  feature: ({ featureProviderMap }) => {
    return {
      // ...
    }
  },
  key: 'myFeature',
  dependenciesPriority: ['otherFeature'],
})
```

| Option                     | Description                                                                                                                                                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`dependenciesSoft`**     | Keys of soft-dependencies needed for this feature. These are optional. Payload will attempt to load them before this feature, but doesn't throw an error if that's not possible.                          |
| **`dependencies`**         | Keys of dependencies needed for this feature. These dependencies do not have to be loaded first, but they have to exist, otherwise an error will be thrown.                                               |
| **`dependenciesPriority`** | Keys of priority dependencies needed for this feature. These dependencies have to be loaded first AND have to exist, otherwise an error will be thrown. They will be available in the `feature` property. |
