# Clipboard

```tsx
import { Clipboard, IconButton } from "@chakra-ui/react"

export const ClipboardBasic = () => {
  return (
    <Clipboard.Root value="https://chakra-ui.com">
      <Clipboard.Trigger asChild>
        
          
        
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}

```

## Usage

```tsx
import { Clipboard } from "@chakra-ui/react"
```

```tsx
<Clipboard.Root>
  <Clipboard.Trigger>
    
    
  </Clipboard.Trigger>
  
</Clipboard.Root>
```

## Examples

### Button

Use the `Clipboard.Trigger` component to create a copy button.

```tsx
import { Button, Clipboard } from "@chakra-ui/react"

export const ClipboardWithButton = () => {
  return (
    <Clipboard.Root value="https://chakra-ui.com">
      <Clipboard.Trigger asChild>
        
          
          
        
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}

```

### Input

Use the `Clipboard.Input` component to create a copy input.

```tsx
import { Clipboard, IconButton, Input, InputGroup } from "@chakra-ui/react"

export const ClipboardWithInput = () => {
  return (
    <Clipboard.Root maxW="300px" value="https://chakra-ui.com">
      <Clipboard.Label textStyle="label">Document Link</Clipboard.Label>
      }>
        <Clipboard.Input asChild>
          
        </Clipboard.Input>
      
    </Clipboard.Root>
  )
}

const ClipboardIconButton = () => {
  return (
    <Clipboard.Trigger asChild>
      
        
      
    </Clipboard.Trigger>
  )
}

```

### Timeout

Use the `timeout` prop to change the duration of the copy message.

```tsx
import { Button, Clipboard } from "@chakra-ui/react"

export const ClipboardWithTimeout = () => {
  return (
    <Clipboard.Root value="https://chakra-ui.com" timeout={1000}>
      <Clipboard.Trigger asChild>
        
          
          
        
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}

```

### Link Appearance

Here's an example that combines the `Clipboard.Trigger` and
`Clipboard.ValueText` components to create a link appearance.

```tsx
import { Clipboard, Link } from "@chakra-ui/react"

export const ClipboardWithLink = () => {
  return (
    <Clipboard.Root value="https://chakra-ui.com">
      <Clipboard.Trigger asChild>
        
          
          
        
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}

```

### Store

Alternatively, you can use the `useClipboard` hook to create a custom component.

```tsx
"use client"

import { Button, useClipboard } from "@chakra-ui/react"

export const ClipboardWithStore = () => {
  const clipboard = useClipboard({ value: "https://chakra-ui.com" })
  return (
    
      {clipboard.copied ? "Copied" : "Copy"}
    
  )
}

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| timeout | 3000 | `number` | The timeout for the copy operation |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| defaultValue | undefined | `string` | The initial value to be copied to the clipboard when rendered.
Use when you don't need to control the value of the clipboard. |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{ root: string; input: string; label: string }>` | The ids of the elements in the clipboard. Useful for composition. |
| onStatusChange | undefined | `(details: CopyStatusDetails) => void` | The function to be called when the value is copied to the clipboard |
| onValueChange | undefined | `(details: ValueChangeDetails) => void` | The function to be called when the value changes |
| value | undefined | `string` | The controlled value of the clipboard |

## Explorer

Explore the `Clipboard` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="clipboard-explorer-demo" />
