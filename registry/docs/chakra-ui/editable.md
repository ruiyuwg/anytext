# Editable

```tsx
import { Editable } from "@chakra-ui/react"

export const EditableBasic = () => (
  <Editable.Root textAlign="start" defaultValue="Click to edit">
    
    
  </Editable.Root>
)

```

## Usage

```jsx
import { Editable } from "@chakra-ui/react"
```

```jsx
<Editable.Root>
  
  
</Editable.Root>
```

## Examples

### Double Click

Use the `activationMode` prop to make the content editable when users double
click.

```tsx
import { Editable } from "@chakra-ui/react"

export const EditableWithDoubleClick = () => (
  <Editable.Root defaultValue="Double click to edit" activationMode="dblclick">
    
    
  </Editable.Root>
)

```

### Disabled

Use the `disabled` prop to disable the editable component.

```tsx
import { Editable } from "@chakra-ui/react"

export const EditableDisabled = () => {
  return (
    <Editable.Root disabled defaultValue="Click to edit">
      
      
    </Editable.Root>
  )
}

```

### Textarea

You can make a text area editable.

```tsx
import { Editable } from "@chakra-ui/react"

export const EditableWithTextarea = () => {
  return (
    <Editable.Root defaultValue="Click to edit">
      
      
    </Editable.Root>
  )
}

```

### With Controls

Add controls such as "edit", "cancel" and "submit" to `Editable` for better user
experience.

```tsx
import { Editable, IconButton } from "@chakra-ui/react"
import { LuCheck, LuPencilLine, LuX } from "react-icons/lu"

export const EditableWithControls = () => {
  return (
    <Editable.Root defaultValue="Click to edit">
      
      
      <Editable.Control>
        <Editable.EditTrigger asChild>
          
            
          
        </Editable.EditTrigger>
        <Editable.CancelTrigger asChild>
          
            
          
        </Editable.CancelTrigger>
        <Editable.SubmitTrigger asChild>
          
            
          
        </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable.Root>
  )
}

```

### Controlled

Use the `value` and `onValueChange` props to control the editable component.

```tsx
"use client"

import { Editable } from "@chakra-ui/react"
import { useState } from "react"

export const EditableControlled = () => {
  const [name, setName] = useState("")
  return (
    <Editable.Root
      value={name}
      onValueChange={(e) => setName(e.value)}
      placeholder="Click to edit"
    >
      
      
    </Editable.Root>
  )
}

```

### Store

An alternative way to control the editable component is to use the
`RootProvider` component and the `useEditable` store hook.

This way you can access the editable state and methods from outside the
editable.

```tsx
"use client"

import { Code, Editable, Stack, useEditable } from "@chakra-ui/react"

export const EditableWithStore = () => {
  const editable = useEditable({
    defaultValue: "Click to edit",
  })

  return (
    
      <Editable.RootProvider value={editable}>
        
        
      </Editable.RootProvider>
      {editable.editing ? "editing" : "not editing"}
    
  )
}

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| activationMode | "focus" | `ActivationMode` | The activation mode for the preview element.

- "focus" - Enter edit mode when the preview is focused

- "dblclick" - Enter edit mode when the preview is double-clicked

- "click" - Enter edit mode when the preview is clicked

- "none" - Edit can be triggered programmatically only |
  | selectOnFocus | true | `boolean` | Whether to select the text in the input when it is focused. |
  | submitMode | "both" | `SubmitMode` | The action that triggers submit in the edit mode:

- "enter" - Trigger submit when the enter key is pressed

- "blur" - Trigger submit when the editable is blurred

- "none" - No action will trigger submit. You need to use the submit button

- "both" - Pressing `Enter` and blurring the input will trigger submit |
  | colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
  | size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
  | as | undefined | `React.ElementType` | The underlying element to render. |
  | asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
  | unstyled | undefined | `boolean` | Whether to remove the component's style. |
  | autoResize | undefined | `boolean` | Whether the editable should auto-resize to fit the content. |
  | defaultEdit | undefined | `boolean` | Whether the editable is in edit mode by default. |
  | defaultValue | undefined | `string` | The initial value of the editable when rendered.
  Use when you don't need to control the value of the editable. |
  | disabled | undefined | `boolean` | Whether the editable is disabled. |
  | edit | undefined | `boolean` | Whether the editable is in edit mode. |
  | finalFocusEl | undefined | `() => HTMLElement \| null` | The element to receive focus when the editable is closed. |
  | form | undefined | `string` | The associate form of the underlying input. |
  | id | undefined | `string` | The unique identifier of the machine. |
  | ids | undefined | `Partial<{\n  root: string\n  area: string\n  label: string\n  preview: string\n  input: string\n  control: string\n  submitTrigger: string\n  cancelTrigger: string\n  editTrigger: string\n}>` | The ids of the elements in the editable. Useful for composition. |
  | invalid | undefined | `boolean` | Whether the input's value is invalid. |
  | maxLength | undefined | `number` | The maximum number of characters allowed in the editable |
  | name | undefined | `string` | The name attribute of the editable component. Used for form submission. |
  | onEditChange | undefined | `(details: EditChangeDetails) => void` | Function to call when the edit mode changes. |
  | onFocusOutside | undefined | `(event: FocusOutsideEvent) => void` | Function called when the focus is moved outside the component |
  | onInteractOutside | undefined | `(event: InteractOutsideEvent) => void` | Function called when an interaction happens outside the component |
  | onPointerDownOutside | undefined | `(event: PointerDownOutsideEvent) => void` | Function called when the pointer is pressed down outside the component |
  | onValueChange | undefined | `(details: ValueChangeDetails) => void` | Function to call when the value changes. |
  | onValueCommit | undefined | `(details: ValueChangeDetails) => void` | Function to call when the value is committed. |
  | onValueRevert | undefined | `(details: ValueChangeDetails) => void` | Function to call when the value is reverted. |
  | placeholder | undefined | `string \| { edit: string; preview: string }` | The placeholder text for the editable. |
  | readOnly | undefined | `boolean` | Whether the editable is read-only. |
  | required | undefined | `boolean` | Whether the editable is required. |
  | translations | undefined | `IntlTranslations` | The translations for the editable. |
  | value | undefined | `string` | The controlled value of the editable. |

## Explorer

Explore the `Editable` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="editable-explorer-demo" />

# Em

```tsx
import { Em, Text } from "@chakra-ui/react"

export const EmBasic = () => {
  return (
    
      The design system is a collection of UI elements
    
  )
}

```

## Usage

```js
import { Em } from "@chakra-ui/react"
```

```jsx

  The design system is a collection of UI elements

```
