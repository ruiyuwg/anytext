# Document actions

Document Actions lets you customize and control operations users can perform on a document. When you create a custom action it will be available in the actions menu in the document editor. See the [DocumentActionComponent](https://reference.sanity.io/sanity/index/DocumentActionComponent/) reference for the full type definition.

![Screenshot of document actions in Sanity Studio](https://cdn.sanity.io/images/3do82whm/next/331e0dc1664ce52e79447e409b33a48cd3f0b07d-2304x1400.png)

> \[!NOTE]
> Unpublish action is now only available from the published perspective
> To unpublish a document, editors must select the `published` perspective (on the Studio or document header level) and can then access the unpublish action from the actions document footer as before.
> This change ensures editors are working with the published version when making `unpublish` decisions, providing better context and reducing potential confusion between draft and published states.

## Get started

To set up a new custom action component you need to complete the following steps:

1. Define an action component
2. Register the action component to the `document.actions` array in your workspace configuration

In this first example we'll make an action component that will display an alert window when clicked.

### 1. Define a document action component

First, create a file in your local Studio for your action.  Let's call the component `HelloWorldAction` and put it in a file called `actions.js`.

[Learn about the complete Document Actions API](https://www.sanity.io/docs/studio/document-actions-api)

**hello-action.ts**

```typescript
export function HelloWorldAction(props) { 
  return {
    label: 'Hello world',
    onHandle: () => {
      // Here you can perform your actions
      window.alert('👋 Hello from custom action')
    }    
  } 
}
```

### 2. Register and resolve document actions

Now that you have defined a document action, it can be registered by adding it to `document.actions` in your studio configuration via [defineConfig](https://reference.sanity.io/sanity/index/defineConfig/).

**sanity.config.ts**

```typescript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {HelloWorldAction} from './actions'

export default defineConfig({
  name: 'default',
  projectId: '<project-id>',
  dataset: '<your-dataset>',

  plugins: [
    deskTool(),
  ],
  document: {
    actions: [HelloWorldAction],
  },
  schema: {
    types: schemaTypes,
  },
})

```

When supplying `document.actions` with a static array of custom actions, the studio will append your customizations to the list of actions provided by plugins and / or the studio defaults.

![Shows the document actions popup menu with our custom action added to the standard list of available actions](https://cdn.sanity.io/images/3do82whm/next/206d8763a36dd1ffaf94d57744f8b1ea2ea9fc3b-557x284.png)

If you want more control over what shows up in the actions menu, you can instead provide a callback function to `document.actions` which should return an array of document action components. The callback will receive as arguments an array of already existing actions, and a context object containing useful info.

**sanity.config.ts**

```typescript
import {HelloWorldAction} from './hello-action'

export default defineConfig({
  // ... rest of config
  document: {
    actions: (prev, context) => {
      // Only add the action for documents of type "movie"
      return context.schemaType === 'movie' ? [HelloWorldAction, ...prev] : prev;
    },
  },
})
```

![Document actions menu in Sanity Studio](https://cdn.sanity.io/images/3do82whm/next/2659ee6276a078696c06612d03a6a98f63a7cc63-557x276.png)

[Document API reference](https://www.sanity.io/docs/studio/document-actions-api)

## Typical use cases

### Showing actions conditionally

In some situations, a document action may not be relevant, and instead of making it *disabled,* you rather want it to not appear at all. For example, some document actions may only be relevant for certain types. In these cases, check the condition and return `null` from the action component if you want to hide the action.

Here's an example of an imaginary "spellcheck" action that will only appear in menus for documents of type `article`:

**spelling-action.ts**

```typescript
export function SpellCheckArticleAction(props) {
  if (props.type === 'article') {
	return {
		label: 'Spellcheck article'
    //...
  }
    return null
  }
}
```

### Update a value then publish document

Usually a document action provides a way for the user to manipulate the document. To get access to operations that can be done on a document, you can use the `useDocumentOperation` hook from the `sanity` package.

`import {useDocumentOperation} from 'sanity'`

This will give you access to a set of operations that the current document supports. Each operation comes with a `disabled` prop and an `execute` method.

In this example we update the `publishedAt` value of a document before we publish it. We also provide feedback to the user about the progress of the operation.

Note: Due to current technical limitations, the only way to check whether the publish action has completed is to check for the draft being `null` after the publish action was invoked (i.e., the code in `useEffect()`). We are working on improving this in the future.

**set-publish-action.tsx**

```tsx
import {useState, useEffect} from 'react'
import {useDocumentOperation} from 'sanity'


export function SetAndPublishAction(props) {
  const {patch, publish} = useDocumentOperation(props.id, props.type)
  const [isPublishing, setIsPublishing] = useState(false)

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false)
    }
  }, [props.draft])

  return {
    disabled: publish.disabled,
    label: isPublishing ? 'Publishing…' : 'Publish & Update',
    onHandle: () => {
      // This will update the button text
      setIsPublishing(true)

      // Set publishedAt to current date and time
      patch.execute([{set: {publishedAt: new Date().toISOString()}}])

      // Perform the publish
      publish.execute()

      // Signal that the action is completed
      props.onComplete()
    },
  }
}
```

### Duplicate a document with changes to selected fields

To create a duplicate document with modifications to specific fields, use the `mapDocument` option. This function receives the duplicated document and returns a modified version. The following example returns a duplicate of the original document with the `slug` field omitted.

```
import {type DuplicateDocumentActionComponent} from 'sanity'

export function createCustomDuplicateAction(
  originalAction: DuplicateDocumentActionComponent,
): DuplicateDocumentActionComponent {
  return function CustomDuplicateAction(props) {
    return originalAction({
      ...props,
      mapDocument: ({slug, ...document}) => document,
    })
  }
}
```

### Selectively replacing built-in actions

Sometimes you may want to replace just one or a few of the default document actions (publish, duplicate, delete) in your Studio instance. Here's an example of how to replace the built-in publish action with your own:

**sanity.config.ts**

```typescript
export default defineConfig({
  // ...rest of config
  document: {
    actions: (prev) =>
      prev.map((originalAction) =>
        originalAction.action === 'publish' ? CustomPublishAction : originalAction
      ),
  },
})
```

### Extending built-in actions

You may want to extend a built-in action while retaining its look and functionality, but don't want to re-construct the entire component. After all, that would require constantly monitoring the built-in action for code changes and updating your custom action.

The following is the most basic implementation, and simply logs to the console while retaining all the functionality of the default Publish action (permissions checking, sync state, validation, etc.).

**better-publish-action.ts**

```typescript
export function createImprovedAction(originalPublishAction) {
  const BetterAction = (props) => {
    const originalResult = originalPublishAction(props)
    return {
      ...originalResult,
      onHandle: () => {
        // Add our custom functionality
        console.log('Hello world!')
        // then delegate to original handler
        originalResult.onHandle()
      },
    }
  }
  return BetterAction
}

```

This method requires you to call the function with the original action as the only argument.

**sanity.config.ts**

```typescript
import {createImprovedAction} from './actions'

export default defineConfig({
  // ...rest of config
  document: {
    actions: (prev) =>
        prev.map((originalAction) =>
          originalAction.action === 'publish'
            ? createImprovedAction(originalAction)
            : originalAction
        ),
  },
})
```

In this next contrived example, we will extend the Publish action by incrementing a counter on an existing document (`_id: 'publish-counter'`) and then logging the updated counter value to the console:

**custom-dupe-action.ts**

```typescript
export function createAsyncPublishAction(originalAction, context) {
  const client = context.getClient({ apiVersion: '2022-11-29'})
  const AsyncPublishAction = (props) => {
    const originalResult = originalAction(props)
    return {
      ...originalResult,
      onHandle: async () => {
        await client.patch('publish-counter').setIfMissing({counter: 0}).inc({counter: 1}).commit()
        await client
          .fetch("*[_id == 'publish-counter'][0]{counter}")
          .then((res) => console.log(res))
        originalResult.onHandle()
      },
    }
  }
  return AsyncPublishAction
}
```

In order to make the client available, this function expects the `context` object to be forwarded along with the original action.

**sanity.config.ts**

```typescript
export default defineConfig({
  // ...rest of config
  document: {
    actions: (prev, context) =>
      prev.map((originalAction) => (originalAction.action === 'publish' ? createAsyncPublishAction(originalAction, context) : originalAction)),
  },
})
```

You can extend more than just the default behavior. This same approach can be used to add a modal, change the button color or icons, and so on. Let's change the default publish button from this:

![Revised publish buttons: enabled on the left (green) and disabled on the right (grey).](https://cdn.sanity.io/images/3do82whm/next/2fc0ddbe5a0df0d8eed298115ee20d3adf867b08-400x34.png)

to this:

![Revised publish buttons: enabled on the left (red with an open eye icon) and disabled on the right (grey with a closed eye icon).](https://cdn.sanity.io/images/3do82whm/next/41d8b5300f540822b3c9cac48207e2f6334ea8c0-400x34.png)

> \[!WARNING]
> Gotcha
> Although you can override anything returned from the default actions, the internals of the component are not accessible. This means you can't access component state, internal functions and variables, etc.

**vis-action.tsx**

```tsx
import {EyeOpenIcon, EyeClosedIcon} from '@sanity/icons'

export function createVisualAction(originalAction) {
  const BetterButtonAction = (props) => {
    const originalResult = originalAction(props)
    return {
      ...originalResult,
      tone: 'critical',
      icon: originalResult.disabled ? EyeClosedIcon : EyeOpenIcon,
    }
  }
  return BetterButtonAction
}

```

### Stateful action components and dialog flows

You can think about the action component as a functional React component and you can use React hooks to give it internal state. This means an action can support all sorts of user interaction, including dialogs. Here's an example of an action that lets the user edit the title from the document actions dropdown:

You can learn more and read about the different kinds of dialogs supported in the [Document Actions API documentation](https://www.sanity.io/docs/studio/document-actions-api).

**dialog-action.tsx**

```tsx
import React from 'react'
import {useDocumentOperation} from 'sanity'

export function DialogAction({id, type, published, draft}) {
  const doc = draft || published

  const [isDialogOpen, setDialogOpen] = React.useState(false)
  const [documentTitle, setDocumentTitle] = React.useState(doc?.title)

  const {patch} = useDocumentOperation(id, type)

  const patchField = (field) => {
    patch.execute([{set: {title: field}}])
  }

  return {
    label: `Edit title`,
    onHandle: () => {
      setDocumentTitle(doc?.title)
      setDialogOpen(true)
    },
    dialog: isDialogOpen && {
      type: 'dialog',
      onClose: () => {
        setDocumentTitle(doc?.title)
        setDialogOpen(false)
      },
      header: 'Edit title field',
      content: (
        <>
          <input
            type="text"
            value={documentTitle}
            onChange={(event) => setDocumentTitle(event.currentTarget.value)}
          />
          <button
            onClick={() => {
              patchField(documentTitle)
              setDialogOpen(false)
            }}
          >
            Update
          </button>
        </>
      ),
    },
  }
}

```
