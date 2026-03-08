# Editing documents

The Sanity App SDK ships with everything you need to build powerful document editing interfaces. The variety of options available, however, might make you wonder which is best suited for your use case.

This guide is designed to inform your decision making by showcasing in detail the different React hooks, components, and patterns that can be used in the course of building document editing interfaces with the App SDK. After reading this guide, you’ll be equipped to build a variety of document editing workflows. All that will be left for you to do is evaluate which of these options best matches the needs of your application.

## Prerequisites:

- Basic familiarity with content operations
- A project with at least one document
- A custom app built with the Sanity App SDK
- Basic familiarity with Document Handles

[Content operations](https://www.sanity.io/docs/user-guides/content-operations-cheatsheet)

[Documents overview](https://www.sanity.io/docs/content-lake/documents)

[App SDK introduction](https://www.sanity.io/docs/app-sdk/sdk-introduction)

[Document Handles](https://www.sanity.io/docs/app-sdk/document-handles)

## Basic document editing with `useEditDocument`

The `useEditDocument` hook is the first hook you should look to for editing document content. This hook can be used to edit an entire document, or a single field within a document.

> \[!NOTE]
> Further reading
> You can find the complete reference documentation for the `useEditDocument` hook on [the Sanity Library Reference Docs](https://reference.sanity.io/_sanity/sdk-react/exports/useEditDocument/)

Additionally, this hook can be used for functional updates based on the document or document field’s current state.

> \[!TIP]
> Functional updates
> Functional state updates are performed via callbacks, with the current state provided as a parameter of the callback, and the new state returned at the end of the callback.
> For example:
>
> - `setState((count) => count + 1)`
> - `setState((state) => ({…state, butAlso: 'I’m new!'})`

### Edit a document field

In the example below, we export a component that implements editing of a single document field. The component accepts a [Document Handle](https://www.sanity.io/docs/app-sdk/document-handles) as a prop, and renders a text input for displaying and editing the ‘SKU’ field in the document referenced by the Document Handle.

**SkuEditor.tsx**

```tsx
import {useDocument, useEditDocument, type DocumentHandle} from '@sanity/sdk-react'
 
interface SkuEditorProps {
  productHandle: DocumentHandle
}
 
export function SkuEditor({productHandle}: SkuEditorProps) {
  // Get the value for the product’s SKU field;
  // this can be used in place of useState to populate the input value
  const {data: currentSku} = useDocument<string>({
    ...productHandle,
    path: 'sku'
  })
  
  // Create a function to edit the product’s SKU field
  const editSku = useEditDocument<string>({
    ...productHandle,
    path: 'sku'
  })
  
  return (
    <form>
      <label>
        SKU
        <input
          type="text"
          value={currentSku}
          onChange={(e) => editSku(e.currentTarget.value)}
        />
      </label>
    </form>
  )
}
```

### Edit multiple document fields (multiple getters & setters)

In the example below, we enable editing of multiple document fields by defining multiple ‘getters’ (with the `useDocument` hook) and multiple ‘setters’ (with the `useEditDocument` hook). This also demonstrates the use of dot notation to access nested paths, i.e. `price.standard` and `price.sale`.

**ProductPricesEditor.tsx**

```tsx
import {useDocument, useEditDocument, type DocumentHandle} from '@sanity/sdk-react'
 
interface ProductPricesEditorProps {
  productHandle: DocumentHandle
}
  
export function ProductPricesEditor({productHandle}: ProductPricesEditorProps) {
  // Get the current standard price
  // (presuming price is an object with 'standard' and 'sale' fields)
  const {data: standardPrice} = useDocument<string>({
    ...productHandle,
    path: 'price.standard'
  })
  
  // Get the current sale price
  const {data: salePrice} = useDocument<string>({
    ...productHandle,
    path: 'price.sale'
  })
  
  // Create a function to edit the standard price
  const editStandardPrice = useEditDocument<string>({
    ...productHandle,
    path: 'price.standard'
  })
  
  // Create a function to edit the sale price
  const editSalePrice = useEditDocument<string>({
    ...productHandle,
    path: 'price.sale'
  })

  
  return (
    <form>
      <label>
        Standard price
        <input
          type="number"
          value={standardPrice}
          onChange={(e) => editStandardPrice(e.currentTarget.value)}
        />
      </label>

      <label>
        Sale price
        <input
          type="number"
          value={salePrice}
          onChange={(e) => editSalePrice(e.currentTarget.value)}
        />
      </label>
    </form>
  )
}
```

### Edit one or more document fields (functional updates)

The `useEditDocument` hook can be used *without* a `path` parameter to return the data for an entire document. When combined with a functional update, this enables editing one or more fields on a document in a single operation.

In the example below, we demonstrate this pattern for a single, dynamic field edit:

**EditDocumentTextFields.tsx**

```tsx
import {useDocument, useEditDocument, type DocumentHandle} from '@sanity/sdk-react'
 
interface EditDocumentTextFieldsProps {
  documentHandle: DocumentHandle
  paths: Array<string>
}
 
export function EditDocumentTextFields({documentHandle, paths}: EditDocumentTextFieldsProps) {
  // Get the current document content
  const {data: document} = useDocument(documentHandle)
  
  // Define a function to update the entire document
  const editDocument = useEditDocument(documentHandle)
  
  // Define a function to handle an update on any of the text fields rendered via `paths`
  function handleFieldChange(event) {
    // Get the path that was edited via the event target's ID (see render method below)
    const {id: editedPath} = event.currentTarget
  
    // The value of the edited field
    const {value} = event.currentTarget
  
    // Edit the document with a functional update, applying only the changes to the edited path
    editDocument(current => ({
      ...current,
      [editedPath]: value
    }))
  }
  
  // Render a label and text input for all of the provided `paths`;
  // set the inputs’ ID and value using the `path`
  return (
    <form>
      {paths.map(path => (
        <label key={path}>
          {path}
          <input
            id={path}
            type="text"
            value={document[path]}
            onChange={handleFieldChange}
          />
        </label>
      ))}
    </form>
  )
}
```

The functional update pattern can also be used to edit multiple fields at once, as in the example below:

**EditBasicFields.tsx**

```tsx
import {useDocument, useEditDocument, type DocumentHandle} from '@sanity/sdk-react'
 
interface EditBasicFieldsProps {
  documentHandle: DocumentHandle
}
 
export function EditBasicFields({documentHandle}: EditBasicFieldsProps) {
  // Get document content
  const {data: document} = useDocument(documentHandle)
  
  // Define a function to edit the entire document
  const editDocument = useEditDocument(documentHandle)
  
  // Update the document when the form is submitted
  function handleSubmit(event) {
    // Prevent page reload
    event.preventDefault()
  
    // Get the form data
    const formData = new FormData(event.target)
  
    // Convert the form data into an object;
    // keys will be input names, and values will be input values
    const updates = Object.fromEntries(formData)
  
    // Edit the document with a functional update;
    // spread the current values, followed by the updated field paths and their values
    editDocument(current => ({
      ...current,
      ...updates,
    }))
  }

  // Render a form with a text input for the document title
  // and a textarea for the document description.
  // Use the input & textarea name attributes to track document path names.
  // Update both fields at once when the form is submitted.
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          name="title"
          type="text"
          defaultValue={document?.title || ''}
        />
      </label>
      <label>
        Description
        <textarea
          name="description"
          defaultValue={document?.description || ''}
        ></textarea>
      </label>
      <button type="submit">Submit edits</button>
    </form>
  )
}
```

### Edit published documents with `liveEdit`

The `useEditDocument` hook is designed to apply edits to draft documents by default, in order to avoid pushing changes to published documents unexpectedly.

Depending on the document referenced by the document handle passed to `useEditDocument`, the invocation of the returned edit function will either:

- apply edits to the current draft if one already exists, or
- create a new draft (copying from the published version) and apply edits to this new draft.

If you instead want to *apply edits directly to a published document*, this draft creation can be bypassed by setting the `liveEdit` field on the document handle to `true`, as in the example below.

> \[!NOTE]
> Publish first
> Your document must already be published to use `liveEdit` — using this hook with `liveEdit: true` will not convert a draft document to a published document.

**SaleToggle.tsx**

```tsx
import {useDocument, useEditDocument, type DocumentHandle} from '@sanity/sdk-react'
  
export function SaleToggle() {
  // Mark `liveEdit: true` to enable edits directly
  // to the published document
  const salesConfig: DocumentHandle = {
    documentId: 'sale-config-document',
    documentType: 'settings',
    liveEdit: true,
  }
  
  // Get the current value of the sale’s `active` field
  const {data: active} = useDocument({
    ...salesConfig,
    path: 'active',
  })
  
  // Define a function to edit the `active` field
  const editSaleActive = useEditDocument({
    ...salesConfig,
    path: 'active',
  })
  
  // Render a checkbox that will edit the `active` field
  return (
    <form>
      <label>
        <input
          type="checkbox"
          checked={active}
          onChange={() => editSaleActive(current => !current)}
        />
        Enable sale
      </label>
    </form>
  )
}
```

## Compose editing workflows with `useApplyDocumentActions`

Under the hood, the `useEditDocument` hook uses the lower level `useApplyDocumentActions` hook to apply edits to documents. If your use case goes beyond what’s available with the `useEditDocument` hook as demonstrated above, you can opt to leverage the `useApplyDocumentActions` hook and the associated document action functions to get things done.

> \[!NOTE]
> Further reading
> You can find the complete reference documentation for the `useApplyDocumentActions` hook on the [Sanity Library Reference Docs](https://reference.sanity.io/_sanity/sdk-react/exports/useApplyDocumentActions/)

Below, you’ll find two examples of workflows that can be created this way.

### Create a document with initial field values

By default, [the createDocument document action function ](https://reference.sanity.io/_sanity/sdk/index/createDocument/)simply creates a new document with nothing more than the basic fields required by its Document Handle (document ID and type). However, an object of field values can be passed as an optional second parameter, enabling the document to be created with some initial field values.

This is demonstrated in the example below:

**CreateArticleButton.tsx**

```tsx
import {createDocument, createDocumentHandle, useApplyDocumentActions} from '@sanity/sdk-react' 

function CreateArticleButton() {
  // Get a function to apply document actions
  const apply = useApplyDocumentActions()

  function handleCreateArticle() {
    // Create a new document handle for an article
    const newArticleHandle = createDocumentHandle({
      documentId: crypto.randomUUID(),
      documentType: 'article'
    })
    
    // Use the `apply` function to apply document action functions' results
    apply(
      // Use the `createDocument` function’s optional second
      // parameter to populate the new document’s fields
      createDocument(newArticleHandle, {
        title: 'Life Is Like the Arisu River',
        author: 'Katagiri San',
      })
    )
  }

  return (
    <button onClick={handleCreateArticle}>New Article</button>
  )
}
```

### Create and publish a new document

Multiple document actions can be combined in a single call to the `apply` function returned by `useApplyDocumentActions`. This enables the creation of multistep workflows within a single transaction.

For example, you might want to create a new document, populate it with some initial values, and then publish the new document immediately. This is demonstrated below:

**PublishNewArticle.ts**

```tsx
import {
  createDocument,
  createDocumentHandle,
  publishDocument,
  useApplyDocumentActions
} from '@sanity/sdk-react'

function PublishNewArticle() {
  // Get a function to apply document actions
  const apply = useApplyDocumentActions()

  function createAndPublish() {
    // Create a new document handle
    const newHandle = createDocumentHandle({
      documentId: crypto.randomUUID(),
      documentType: 'article',
    })

    // Prepare some initial content
    const titleOptions = ['Ume', 'Sake', 'Tarako']
    const randomTitle = titleOptions[Math.floor(Math.random() * titleOptions.length)]

    // Pass multiple document action functions to the `apply` function;
    // actions will be dispatched as a single transaction.
    apply([
      createDocument(newHandle, {
        author: 'The Ochazuke Sisters',
        title: randomTitle,
      }),
      publishDocument(newHandle)
    ])
  }

  return (
    <button onClick={createAndPublish}>
      Create and Publish New Article
    </button>
  )
}
```

## Edit rich text fields with Portable Text

Another way to edit fields on a document with the App SDK is with the SDK Value Plugin for the [Portable Text Editor](https://www.npmjs.com/package/@portabletext/editor). This plugin provides two way sync between your application and your document, real-time updates from edits made by other users, and optimistic updates for a smooth user experience.

To make use of this, you’ll need to install the relevant Portable Text dependencies:

**TERMINAL**

```sh
npm install @portabletext/editor @portabletext/plugin-sdk-value
```

You can then use these in your application, as demonstrated in the example below:

**MyEditor.tsx**

```tsx
import {
  EditorProvider,
  PortableTextEditable,
  defineSchema
} from '@portabletext/editor'
import {SDKValuePlugin} from '@portabletext/plugin-sdk-value'

interface MyEditorProps {
  // The ID of the document to be edited
  documentId: string
  // The document type for the provided document ID
  documentType: string
  // The path to the document field to be edited
  path: string
}

export function MyEditor({ documentId, documentType, path }: MyEditorProps) {
  const schemaDefinition = defineSchema({
    // Your Portable Text Editor schema here…
  })

  return (
    <EditorProvider initialConfig={{schemaDefinition}}>
      <PortableTextEditable />
      <SDKValuePlugin documentId={documentId} documentType={documentType} path={path} />
    </EditorProvider>
  )
}
```

The above component could then be used to render a Portable Text Editor in your custom Sanity application, allowing editing of document fields which are configured with [the block type](https://www.sanity.io/docs/studio/block-type) in the document’s schema.

## Edit documents with Agent Actions

> \[!WARNING]
> Experimental feature
> This section describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

Documents can be edited (or ‘patched’) using a hook that leverages [the Agent Actions API](https://www.sanity.io/agent-actions) — `useAgentPatch`. This hook applies patches to your document in the same manner as [the Patch Agent Action](https://www.sanity.io/docs/agent-actions/patch-quickstart), meaning it validates paths and ensures that the provided values are compatible with the target schema.

A basic example of this is shown below:

**ResetTitle.tsx**

```tsx
import {useAgentPatch} from '@sanity/sdk-react'

export function ResetTitle({documentId}: {documentId: string}) {
  const patch = useAgentPatch()

  async function handleReset() {
    const result = await patch({
      documentId,
      schemaId: '_schemas.default',
      target: [
        {
          path: 'title',
          operation: 'set',
          value: 'Untitled document',
        },
        {
          path: 'lastModified',
          operation: 'set',
          value: new Date().toISOString(),
        }
      ]
    })
    console.log('Patch result: ', result)
  } 

  return (
    <button onClick={handleReset}>
      Reset Title
    </button>
  )
}
```

> \[!TIP]
> Further reading
> More examples uses of the `useAgentPatch` hook can be found on [the Sanity Library Reference Docs](https://reference.sanity.io/_sanity/sdk-react/exports/useAgentPatch/)

## Summary

In this guide, we’ve demonstrated editing single document fields, multiple document fields, using functional updates, editing published documents live, composing editing and publishing workflows, using Portable Text to edit block fields, and the experimental `useAgentPatch` to apply edits via the Agent Actions API.

With such a variety of ways to handle document editing, the Sanity App SDK is well equipped to power both traditional and unique editing use cases.

If, however, you have a custom application interface or use case that the App SDK doesn’t seem equipped to handle, we’d love to hear from you! Feel free to [drop into our Discord community](https://snty.link/community), and find us in the #app-sdk channel to let us know.
