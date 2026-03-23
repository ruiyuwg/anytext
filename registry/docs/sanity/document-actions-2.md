# Document Actions

You can use the Document Actions API for Sanity Studio to customize and control operations that can be done to documents. When you create a custom action, it will be available in the actions menu in the document editor. You create custom actions by adding a [DocumentActionComponent](https://reference.sanity.io/sanity/index/DocumentActionComponent/) to the `document.actions` array of your workspace configuration.

[Learn how to create custom workflows with the Document Actions API](https://www.sanity.io/docs/studio/document-actions).

![The action bar with a badge, an action button, and the action menu](https://cdn.sanity.io/images/3do82whm/next/250a4fc9d947827de6e0e1c02777fdec2c2b6908-2304x1400.png)

`document.actions` accepts either a static array of document action components or a callback function returning the same. When supplied with a static array, Sanity Studio will append your actions to the list of already existing actions.

> \[!TIP]
> Protip
> Sanity Studio comes with a set of predefined document actions enabled that are helpful for manipulating documents. These are:
>
> - Publish
> - Unpublish
> - Delete
> - Duplicate
> - Discard changes
> - Restore to history state
>   You are free to swap any or all of these out with your own custom actions, or conditionally disable or enable them in your studio configuration.

```javascript
import {CustomAction} from './actions'

export default defineConfig({
  // ...rest of config
  document: {
    actions: [CustomAction],
  },
})
```

In contrast, when using the callback method, you will need to make sure you return the exact set of actions you want to register. Helpfully, the callback function receives the current array of registered action components as its first argument and a context object as its second and final argument.

```javascript
import {HelloWorldAction} from './actions'

export default defineConfig({
  // ... rest of config
  document: {
    actions: (prev, context) => {
      // Only add the action for documents of type "movie"
      // for other types return the current array of actions as is
      return context.schemaType === 'movie' ? [HelloWorldAction, ...prev] : prev;
    },
  },
})
```

## Callback context properties

#### Properties

| Property | Description |
| --- | --- |
| currentUser | An object containing information about the currently logged in user |
| schemaType | Schema type of the current document |
| dataset | Name of the dataset |
| projectId | Unique ID of the project |
| getClient | Returns a configured SanityClient |
| documentId | ID of the document |
| schema | The schema registry of your project. Use \`schema.get("schemaTypeName") to retrieve any schema by name. |

### Example

```javascript
document: {
    actions: function (prev, context) {
      console.log('context: ', context);
      return prev.map((originalAction) => (originalAction.action === 'publish' ? HelloWorldAction : originalAction));
    }
  },
```

## Document Action components

This table describes the values a document action component receives as properties ([DocumentActionProps](https://reference.sanity.io/sanity/index/DocumentActionProps/)):

### Properties

#### Properties

| Property | Description |
| --- | --- |
| id | The current document’s id. |
| type | The schema type of the current document. |
| draft | The draft document (e.g. unpublished changes) if any.

Returns null if there are no unpublished changes. |
| published | The version of the document that is currently published (if any).

Returns null if the document isn't published. |
| liveEdit | Whether the document is published continuously (live) or not. liveEdit-enabled documents skip the draft workflow. This is not to be confused with the Live Content API, which handles how published changes are handled by queries. |

### Identifying built-in actions

Built-in document action components have an optional `action` property that identifies which built-in action they represent. Use this to selectively replace or extend a specific action:

The `action` property uses values like `'publish'`, `'delete'`, `'duplicate'`, `'unpublish'`, `'discardChanges'`, and `'restore'`. Custom actions don't have this property unless you set it.

## Document Action description

Every Document Action component must return either `null` or an action description object ([DocumentActionDescription](https://reference.sanity.io/sanity/index/DocumentActionDescription/)). An action description describes the action state that can be used to render action components in different render contexts (e.g. in a toolbar, as a menu item, etc.). This table describes the different properties of an action description object.

#### Properties

| Property | Description |
| --- | --- |
| label \* | This is the action label. If the action is displayed as a button, this is typically what becomes the button label. |
| onHandle \* | This allows the action component to specify a function that gets called when the user wants the action to happen (e.g. the user clicked the button or pressed the keyboard shortcut combination). The implementation of the onHandle must either make sure to start the dialog flow or to execute the operation immediately. |
| icon | In render contexts where it makes sense to display an icon, this will appear as the icon for the action. Default is null |
| disabled | This tells the render context whether to disable this action. Default is false. |
| shortcut | A keyboard shortcut that should trigger the action. The keyboard shortcut must be compatible with the format supported by the is-hotkey-package. |
| title | A title for the action. Depending on the render context this will be used as tooltip title (e.g. for buttons it may be passed as the title attribute). Default is null. |
| dialog | If this is returned, its value will be turned into a dialog by the render context. More about dialog types below. Default is null. |
| group | Allow users to specify whether a specific document action should appear in the footer ("default")  or in the document's context menu ("paneActions"). |
| tone | Allows changing the tone of the action when displayed. |

## Document Action dialog types

Dialogs can notify and inform users about the outcome of an action, or they can collect confirmation before executing the action. You can define the following dialog types:

- [confirm](https://www.sanity.io#ef8f04ebc9f1)
- [popover](https://www.sanity.io#6f849687ff57)
- [dialog](https://www.sanity.io#037f877ad3f1)
- [custom](https://www.sanity.io#3d31280433b7)

![Screenshots of dialog types from Sanity Studio](https://cdn.sanity.io/images/3do82whm/next/4f7e7b70f92b7b39586c09cb9dea49301359cff9-2304x1400.png)

### `confirm`

This tells the render context to display a confirm dialog. See the [DocumentActionConfirmDialogProps](https://reference.sanity.io/sanity/index/DocumentActionConfirmDialogProps/) reference for the full type definition.

#### Properties

#### Properties

| Property | Description |
| --- | --- |
| type | Must be confirm. |
| color | Support the following values warning, success, danger, info. |
| message | The message that will be shown in the dialog. |
| onConfirm | A function to execute when the the user confirms the dialog. |
| onCancel | A function to execute when the user cancels the dialog. |

#### Example

```javascript
export function ConfirmDialogAction() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  return {
    label: 'Show confirm',
    onHandle: () => {
      setDialogOpen(true)
    },
    dialog: dialogOpen && {
      type: 'confirm',
      onCancel: () => {
        setDialogOpen(false)
      },
      onConfirm: () => {
        alert('You confirmed!')
        setDialogOpen(false)
      },
      message: 'Please confirm!'
    }
  }
}
```

### `popover`

This will display the value specified by the `content` property in a popover dialog ([DocumentActionPopoverDialogProps](https://reference.sanity.io/sanity/index/DocumentActionPopoverDialogProps/)). The `onClose` property is required, and will normally be triggered by click outside or closing the popover.

#### Properties

| Property | Description |
| --- | --- |
| onClose \* | A function to execute when the dialog is closed. |
| type | Must be popover. |
| content | The content to be shown in the popover dialog. |

#### Example

```javascript
export function PopoverDialogAction() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  return {
    label: 'Show popover',
    onHandle: () => {
      setDialogOpen(true)
    },
    dialog: dialogOpen && {
      type: 'popover',
      onClose: () => {
        setDialogOpen(false)
      },
      content: "👋 I'm a popover!"
    }
  }
}
```

### `dialog`

This will display the value specified by the `content` property in a dialog window ([DocumentActionModalDialogProps](https://reference.sanity.io/sanity/index/DocumentActionModalDialogProps/)). The `onClose` property is required.

#### Properties

| Property | Description |
| --- | --- |
| onClose \* | A function to execute when the user closes the dialog. |
| type | Must be dialog. |
| header | Text to show in the header field of the dialog. |
| content | The content to show in the dialog. |
| footer | Text to show in the footer field of the dialog. |

#### Example

```javascript
export function ConfirmDialogAction() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  return {
    label: 'Show confirm',
    onHandle: () => {
      setDialogOpen(true)
    },
    dialog: dialogOpen && {
      type: 'dialog',
      onClose:  () => {
        setDialogOpen(false)
      },
      content: <div>
        <h3>👋 ... and I'm a dialog</h3>
        <img src="https://source.unsplash.com/1600x900/?cat" style={{width: '100%'}}/>
        <p>
          I'm suitable for longer and more diverse forms of content.
        </p>
      </div>
    }
  }
}
```

### `custom`

This will display the value specified by the `component` property in a custom dialog window. The `onClose` property is required.

#### Properties

| Property | Description |
| --- | --- |
| onClose \* | A function to execute when the user closes the dialog. |
| type | Must be custom. |
| component | The content to show in the dialog. Pass a React component with the custom properties you want to render in the custom modal. |

#### Example

```javascript
import {Button, Card, Dialog, Stack, Text} from '@sanity/ui'

export function CustomDialogAction() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const toggleOpen = () => setDialogOpen(state => !state)
  return {
    label: 'Custom modal',
    tone: 'primary',
    onHandle: toggleOpen,
    dialog: {
      type: 'custom',
      component: open && (
        <Dialog
          header="Custom action component"
          id="custom-modal"
          onClickOutside={toggleOpen}
          onClose={toggleOpen}
          width={1}
          footer={
            <Stack padding={2}>
              <Button onClick={toggleOpen} text="Close" />
            </Stack>
          }
        >
          <Card padding={5}>
            <Text>This dialog is rendered using a custom dialog component.
            </Text>
          </Card>
        </Dialog>
      ),
    }
  }
}
```

# Form

#### Properties

| Property | Description |
| --- | --- |
| components | Accepts custom component overrides for the following form components: input, field, preview, and item. The components can be declared in the root studio configuration, in plugins, or directly in a schema definition.

Form components API -> |
| file | Accepts an object with the following properties: assetSources and directUploads.

assetSources accepts an array of valid asset source configuration objects, or a callback function resolving to the same. The callback function is called with the current list of registered asset sources as its first argument and a context object as the second.

directUploads accepts a boolean true or false. |
| image | Accepts an object with the following properties: assetSources and directUploads.

assetSources accepts an array of valid asset source configuration objects, or a callback function resolving to the same. The callback function is called with the current list of registered asset sources as its first argument and a context object as the second.

directUploads accepts a boolean true or false. |
