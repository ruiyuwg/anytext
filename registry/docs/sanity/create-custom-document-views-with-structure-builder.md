# Create custom document views with Structure Builder

![A screenshot illustrating a standard document pane and a custom document pane side by side](https://cdn.sanity.io/images/3do82whm/next/3256c9d6b38c4ade83e2524891c280eb5d2694f8-2482x1378.png)

The Structure Builder API gives you control over how a document node is presented within a collapsable pane. Specifically, it allows you to set up one or more views that either return the default form or a custom React component. Each view receives a collection of props that include the document's values in different states: `draft`, `published`, `historical`, and the currently `displayed` version (for when you have selected a previous revision to a document).

This article will use the Structure Builder API to display the JSON data for a specific document. If you're unfamiliar with setting up a custom structure, [read this article on setting up the basics](https://www.sanity.io/docs/studio/set-up-structure-builder-to-override-the-default-list-view).

> \[!NOTE]
> Learning the Structure Builder API
> This collection of articles will walk you through all the basics of using Structure Builder to create custom editing experiences.
>
> - [Introduction to concepts](https://www.sanity.io/docs/studio/structure-builder-introduction)
> - [Set up structure builder in your project](https://www.sanity.io/docs/studio/set-up-structure-builder-to-override-the-default-list-view)
> - [Create a link to a single edit page in your main document type list](https://www.sanity.io/docs/studio/create-a-link-to-a-single-edit-page-in-your-main-document-type-list)
> - [Manually group items in your main document type list](https://www.sanity.io/docs/studio/manually-group-items-in-a-pane)
> - [Dynamically group documents in a document list](https://www.sanity.io/docs/studio/dynamically-group-list-items-with-a-groq-filter)
> - **Create custom document pane**

## Set up `structure.ts` to create a new default document node structure

If you've been following the earlier articles in this series, we've set our `structure.ts` file to export a named function that contains our new structure. Alongside this, we'll now export another named function.

Update `structure.ts` with the following code:

**structure.ts**

```typescript
import type {DefaultDocumentNodeResolver, StructureBuilder, DefaultDocumentNodeContext, StructureResolver} from 'sanity/structure'

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (S: StructureBuilder, options: DefaultDocumentNodeContext) => {
  return S.document().views([
    S.view.form()
  ])
}
// ...rest of structure from previous steps
```

Then, in `sanity.config.ts`, import this function and add it to the `structureTool` configuration object under the key `defaultDocumentNode`.

**sanity.config.ts**

```typescript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {structure, getDefaultDocumentNode} from './structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  projectId: '<projectId>',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: deskStructure,
      defaultDocumentNode: getDefaultDocumentNode,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})

```

In our `getDefaultDocumentNode` function, we return an array of views for all the documents. To start us off, we're only returning the default form view. Let's look at the structure builder methods in more detail.

### `S.document()`

The `.document()` method creates the way the Structure tool displays documents. In this example, it changes how all documents are rendered.

### `.views()`

The `.views()` method accepts an array of view elements which can be created using either `S.view.form()` or `S.view.component()`. The view elements define the items that show up in the document’s tab list.

## Adding a second view to all documents

To add a second view, we'll add a second item to the array inside the `.views()` method. For this, we'll use the `.view.component()` method to use a custom component.

**structure.ts**

```
import type {DefaultDocumentNodeResolver, StructureBuilder, DefaultDocumentNodeContext, StructureResolver} from 'sanity/structure'
import {JsonPreview} from './components'

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (S: StructureBuilder, options: DefaultDocumentNodeContext) => {
  return S.document().views([
    S.view.form()
    S.view.component(JsonPreview).title('JSON')
  ])
}
// ...rest of structure from previous steps
```

**components.tsx**

```tsx
import {type UserViewComponent} from 'sanity/structure'

export const JsonPreview: UserViewComponent = (props) => (
  <>
    <h1>JSON Preview</h1>
  </>
)

```

### `.view.component()`

The `.view.component` method takes a custom React component as an argument.  The component can be chained with other methods such as `.title()` to provide a title for the new view.

### .defaultPanes()

Allows configuring documents to open with multiple views displayed as split panes by default.

**structure.ts**

```


// In defaultDocumentNode resolver
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (schemaType === 'article') {
    return S.document()
      .views([
        S.view.form().id('editor'),
        S.view.component(LivePreview).id('preview').title('Preview'),
        S.view.component(JSONView).id('json').title('JSON')
      ])
      .defaultPanes(['editor', 'preview'])  // Form + Preview side-by-side
  }
  return S.document()
}
```

**components.tsx**

```tsx
import {type UserViewComponent} from 'sanity/structure'

export const JsonPreview: UserViewComponent = (props) => (
  <>
    <h1>JSON Preview</h1>
  </>
)

export const LivePreview: UserviewComponent = (props) => (
  <>
    <h1>JSON Preview</h1>
  </>
)
```

### Custom component: `JsonPreview()`

Our custom React component is called `JsonPreview`. Custom components have the following props:

- `document` – an object containing the various document states and their data
- `documentId` – the ID of the current document
- `schemaType` – the schema type of the current document

In this example, we'll only need the `document` object, but to start, let's render an `h1` with the string `JSON Data`. We now have two tabs across the top of our documents.

## Displaying dynamic data from the document

To pull data into our component, we'll need to select which version of the document we want to use. Luckily, the `document` prop contains the various states of the current document. For our uses, we want to show the JSON data for the currently selected version of the document, so we'll choose the `displayed` data.

**components.tsx**

```tsx
import {type UserViewComponent} from 'sanity/structure'

export const JsonPreview: UserViewComponent = (props) => (
  <>
    <h1>JSON Preview</h1>
    <pre>{JSON.stringify(props.document.displayed, null, 2)}</pre>
  </>
)
```

## Define views for specific schemas or documents

Sometimes you only want certain tabs to display for certain document types – or even individual documents. For this, the `getDefaultDocumentNode()` method comes with two options passed in: `schemaType` and `documentId`. We can use these with a JavaScript conditional to only build our JSON preview for certain documents.

**structure.ts**

```
import type {DefaultDocumentNodeResolver, StructureBuilder, DefaultDocumentNodeContext, StructureResolver} from 'sanity/structure'
import {JsonPreview} from './components'

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (S: StructureBuilder, options: DefaultDocumentNodeContext) => {
  if (options.schemaType === "post" || options.documentId === "siteSettings") {
    return S.document().views([
      S.view.form()
      S.view.component(JsonPreview).title('JSON')
    ])
  }
}
// ...rest of structure from previous steps
```

**components.tsx**

```tsx
import {type UserViewComponent} from 'sanity/structure'

export const JsonPreview: UserViewComponent = (props) => (
  <>
    <h1>JSON Preview</h1>
  </>
)
```

The default document node resolver will resolve the `S.view.form()` for any document types that haven’t been explicitly overridden.

## Next steps

With all the data available to you in each of your documents, you can put together powerful previews, contextual images, or even custom editor flows for each document or document type.

From here, take a look at the [full reference documentation](https://www.sanity.io/docs/studio/structure-builder-reference) for everything you can do with the Structure Builder API, and build something useful to you or your editors.
