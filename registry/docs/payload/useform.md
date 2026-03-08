## useForm

The `useForm` hook can be used to interact with the form itself, and sends back many methods that can be used to reactively fetch form state without causing rerenders within your components each time a field is changed. This is useful if you have action-based callbacks that your components fire, and need to interact with form state *based on a user action*.

**Warning:**

This hook is optimized to avoid causing rerenders when fields change, and as such, its `fields`
property will be out of date. You should only leverage this hook if you need to perform actions
against the form in response to your users' actions. Do not rely on its returned "fields" as being
up-to-date. They will be removed from this hook's response in an upcoming version.

The `useForm` hook returns an object with the following properties:

\<TableWithDrawers
columns={\[
'Action',
'Description',
'Example',
]}
rows={\[
\[
{
value: "**`fields`**",
},
{
value: "Deprecated. This property cannot be relied on as up-to-date.",
},
{
value: ''
}
],
\[
{
value: "**`submit`**",
},
{
value: "Method to trigger the form to submit",
},
{
value: ''
}
],
\[
{
value: "**`dispatchFields`**",
},
{
value: "Dispatch actions to the form field state",
},
{
value: ''
}
],
\[
{
value: "**`validateForm`**",
},
{
value: "Trigger a validation of the form state",
},
{
value: ''
}
],
\[
{
value: "**`createFormData`**",
},
{
value: "Create a `multipart/form-data` object from the current form's state",
},
{
value: ''
}
],
\[
{
value: "**`disabled`**",
},
{
value: "Boolean denoting whether or not the form is disabled",
},
{
value: ''
}
],
\[
{
value: "**`getFields`**",
},
{
value: 'Gets all fields from state',
},
{
value: '',
}
],
\[
{
value: "**`getField`**",
},
{
value: 'Gets a single field from state by path',
},
{
value: '',
},
],
\[
{
value: "**`getData`**",
},
{
value: 'Returns the data stored in the form',
},
{
value: '',
},
],
\[
{
value: "**`getSiblingData`**",
},
{
value: 'Returns form sibling data for the given field path',
},
{
value: '',
},
],
\[
{
value: "**`setModified`**",
},
{
value: "Set the form's `modified` state",
},
{
value: '',
},
],
\[
{
value: "**`setProcessing`**",
},
{
value: "Set the form's `processing` state",
},
{
value: '',
},
],
\[
{
value: "**`setSubmitted`**",
},
{
value: "Set the form's `submitted` state",
},
{
value: '',
},
],
\[
{
value: "**`formRef`**",
},
{
value: 'The ref from the form HTML element',
},
{
value: '',
},
],
\[
{
value: "**`reset`**",
},
{
value: 'Method to reset the form to its initial state',
},
{
value: '',
},
],
\[
{
value: "**`addFieldRow`**",
},
{
value: "Method to add a row on an array or block field",
},
{
drawerTitle: 'addFieldRow',
drawerDescription: 'A useful method to programmatically add a row to an array or block field.',
drawerSlug: 'addFieldRow',
drawerContent: `   <TableWithDrawers
    columns={[
      'Prop',
      'Description',
    ]}
    rows={[       [
        {
          value: "**\\\`path\\\`**",
},
{
value: "The path to the array or block field",
},
],
\[
{
value: "**\\\`rowIndex\\\`**",
},
{
value: "The index of the row to add. If omitted, the row will be added to the end of the array.",
},
],
\[
{
value: "**\\\`data\\\`\*\*",
},
{
value: "The data to add to the row",
},
],
]}
/>

\`\`\`tsx
import { useForm } from "@payloadcms/ui"

export const CustomArrayManager = () => {
const { addFieldRow } = useForm()

return (

\<button
type="button"
onClick={() => {
addFieldRow({
path: 'arrayField',
schemaPath: 'arrayField',
rowIndex: 0, // optionally specify the index to add the row at
subFieldState: {
textField: {
initialValue: 'New row text',
valid: true,
value: 'New row text',
},
},
// blockType: "yourBlockSlug",
// ^ if managing a block array, you need to specify the block type
})
}}

>

Add Row

) } \`\`\`

An example config to go along with the Custom Component

\`\`\`tsx
const ExampleCollection = {
slug: "example-collection",
fields: \[
{
name: "arrayField",
type: "array",
fields: \[
{
name: "textField",
type: "text",
},
],
},
{
type: "ui",
name: "customArrayManager",
admin: {
components: {
Field: '/path/to/CustomArrayManagerField',
},
},
},
],
}
\`\`\`
`
      }
    ],     [
      {
        value: "**`removeFieldRow`**",
      },
      {
        value: "Method to remove a row from an array or block field",
      },
      {
        drawerTitle: 'removeFieldRow',
        drawerDescription: 'A useful method to programmatically remove a row from an array or block field.',
        drawerSlug: 'removeFieldRow',
        drawerContent:  `

\<TableWithDrawers
columns={\['Prop', 'Description']}
rows={\[
\[
{
value: '**\\\`path\\\`**',
},
{
value: 'The path to the array or block field',
},
],
\[
{
value: '**\\\`rowIndex\\\`**',
},
{
value: 'The index of the row to remove',
},
],
]}
/>

\`\`\`tsx
import { useForm } from "@payloadcms/ui"

export const CustomArrayManager = () => {
const { removeFieldRow } = useForm()

return (

\<button
type="button"
onClick={() => {
removeFieldRow({
path: 'arrayField',
rowIndex: 0,
})
}}

>

Remove Row

) } \`\`\`

An example config to go along with the Custom Component

\`\`\`tsx
const ExampleCollection = {
slug: "example-collection",
fields: \[
{
name: "arrayField",
type: "array",
fields: \[
{
name: "textField",
type: "text",
},
],
},
{
type: "ui",
name: "customArrayManager",
admin: {
components: {
Field: '/path/to/CustomArrayManagerField',
},
},
},
],
}
\`\`\`
`
      }
    ],     [
      {
        value: "**`replaceFieldRow`**",
      },
      {
        value: "Method to replace a row from an array or block field",
      },
      {
        drawerTitle: 'replaceFieldRow',
        drawerDescription: 'A useful method to programmatically replace a row from an array or block field.',
        drawerSlug: 'replaceFieldRow',
        drawerContent:  `

\<TableWithDrawers
columns={\['Prop', 'Description']}
rows={\[
\[
{
value: '**\\\`path\\\`**',
},
{
value: 'The path to the array or block field',
},
],
\[
{
value: '**\\\`rowIndex\\\`**',
},
{
value: 'The index of the row to replace',
},
],
\[
{
value: '**\\\`data\\\`**',
},
{
value: 'The data to replace within the row',
},
],
]}
/>

\`\`\`tsx
import { useForm } from "@payloadcms/ui"

export const CustomArrayManager = () => {
const { replaceFieldRow } = useForm()

return (

\<button
type="button"
onClick={() => {
replaceFieldRow({
path: 'arrayField',
schemaPath: 'arrayField',
rowIndex: 0, // optionally specify the index to add the row at
subFieldState: {
textField: {
initialValue: 'Updated text',
valid: true,
value: 'Updated text',
},
},
// blockType: "yourBlockSlug",
// ^ if managing a block array, you need to specify the block type
})
}}

>

Replace Row

) } \`\`\`

An example config to go along with the Custom Component

\`\`\`tsx
const ExampleCollection = {
slug: "example-collection",
fields: \[
{
name: "arrayField",
type: "array",
fields: \[
{
name: "textField",
type: "text",
},
],
},
{
type: "ui",
name: "customArrayManager",
admin: {
components: {
Field: '/path/to/CustomArrayManagerField',
},
},
},
],
}
\`\`\`
\`
}
],
]}
/>

## useDocumentForm

The `useDocumentForm` hook works the same way as the [useForm](#useform) hook, but it always gives you access to the top-level `Form` of a document. This is useful if you need to access the document's `Form` context from within a child `Form`.

An example where this could happen would be custom components within lexical blocks, as lexical blocks initialize their own child `Form`.

```tsx
'use client'

import { useDocumentForm } from '@payloadcms/ui'

const MyComponent: React.FC = () => {
  const { fields: parentDocumentFields } = useDocumentForm()

  return (
    <p>
      The document's Form has ${Object.keys(parentDocumentFields).length} fields
    </p>
  )
}
```

## useCollapsible

The `useCollapsible` hook allows you to control parent collapsibles:

| Property                  | Description                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **`isCollapsed`**         | State of the collapsible. `true` if open, `false` if collapsed.                                               |
| **`isVisible`**           | If nested, determine if the nearest collapsible is visible. `true` if no parent is closed, `false` otherwise. |
| **`toggle`**              | Toggles the state of the nearest collapsible.                                                                 |
| **`isWithinCollapsible`** | Determine when you are within another collapsible.                                                            |

**Example:**

```tsx
'use client'
import React from 'react'

import { useCollapsible } from '@payloadcms/ui'

const CustomComponent: React.FC = () => {
  const { isCollapsed, toggle } = useCollapsible()

  return (
    <div>
      <p className="field-type">I am {isCollapsed ? 'closed' : 'open'}</p>
      <button onClick={toggle} type="button">
        Toggle
      </button>
    </div>
  )
}
```
