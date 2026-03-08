# Overlay Manager

## Usage

The `createOverlay` function creates a new overlay component that can be
programmatically controlled.

```tsx
import { createOverlay } from "@chakra-ui/react"

const dialog = createOverlay((props) => {
  const { title, description, content, ...rest } = props
  return (
    <Dialog.Root {...rest}>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            {title && (
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>
            )}
            <Dialog.Body spaceY="4">
              {description && (
                <Dialog.Description>{description}</Dialog.Description>
              )}
              {content}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
})
```

Then render the `Viewport` component to see the overlay.

```tsx
```

## Examples

### Dialog

Here's an example of a dialog component that can be programmatically controlled.

```tsx
"use client"

import { Button, Dialog, Portal, createOverlay } from "@chakra-ui/react"

interface DialogProps {
  title: string
  description?: string
  content?: React.ReactNode
}

const dialog = createOverlay((props) => {
  const { title, description, content, ...rest } = props
  return (
    <Dialog.Root {...rest}>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            {title && (
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>
            )}
            <Dialog.Body spaceY="4">
              {description && (
                <Dialog.Description>{description}</Dialog.Description>
              )}
              {content}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
})

export const OverlayBasic = () => {
  return (
    <>
      <Button
        onClick={() => {
          dialog.open("a", {
            title: "Dialog Title",
            description: "Dialog Description",
          })
        }}
      >
        Open Modal
      
      
    </>
  )
}

```

### Drawer

Here's an example of a drawer component that can be programmatically controlled.

```tsx
"use client"

import { Button, Drawer, Portal, createOverlay } from "@chakra-ui/react"

interface DialogProps {
  title: string
  description?: string
  content?: React.ReactNode
  placement?: Drawer.RootProps["placement"]
}

const drawer = createOverlay((props) => {
  const { title, description, content, ...rest } = props
  return (
    <Drawer.Root {...rest}>
      
        
        <Drawer.Positioner>
          <Drawer.Content>
            {title && (
              <Drawer.Header>
                <Drawer.Title>{title}</Drawer.Title>
              </Drawer.Header>
            )}
            <Drawer.Body spaceY="4">
              {description && (
                <Drawer.Description>{description}</Drawer.Description>
              )}
              {content}
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      
    </Drawer.Root>
  )
})

export const OverlayWithDrawer = () => {
  return (
    <>
      <Button
        onClick={() => {
          drawer.open("a", {
            title: "Drawer Title",
            description: "Drawer Description",
            placement: "end",
          })
        }}
      >
        Open Drawer
      
      
    </>
  )
}

```

### Update

Use the `.update` method to update the props of an overlay.

```tsx
"use client"

import { Box, Button, Dialog, Portal } from "@chakra-ui/react"
import { createOverlay } from "@chakra-ui/react"

interface DialogProps {
  title: string
  description?: string
  content?: React.ReactNode
}

const dialog = createOverlay((props) => {
  const { title, description, content, ...rest } = props
  return (
    <Dialog.Root {...rest}>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            {title && (
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>
            )}
            <Dialog.Body spaceY="4">
              {description && (
                <Dialog.Description>{description}</Dialog.Description>
              )}
              {content}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
})

export const OverlayWithUpdate = () => {
  return (
    <>
      <Button
        onClick={async () => {
          dialog.open("a", {
            title: "Initial Modal Title",
            content: (
              This text will update in 2 seconds.
            ),
          })

          setTimeout(() => {
            dialog.update("a", {
              title: "Updated Modal Title",
              content: (
                
                  This is the updated content of the modal.
                
              ),
            })
          }, 2000)
        }}
      >
        Open Modal
      
      
    </>
  )
}

```

### Return Value

Awaiting the result of the `.open()` method returns the value passed to the
`.close()` method.

:::info

**Bonus:** You can also use the `.waitForExit()` method to wait for the exit
animation to complete before opening a new overlay.

:::

```tsx
"use client"

import { Button, Dialog, Portal } from "@chakra-ui/react"
import { createOverlay } from "@chakra-ui/react"

interface DialogProps {
  title: string
  description: string
  content?: React.ReactNode
}

const dialog = createOverlay((props) => {
  const { title, description, content, ...rest } = props
  return (
    <Dialog.Root {...rest}>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            {title && (
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>
            )}
            <Dialog.Body spaceY="4">
              {description && (
                <Dialog.Description>{description}</Dialog.Description>
              )}
              {content}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
})

export const OverlayWithReturnValue = () => {
  return (
    <>
      <Button
        onClick={async () => {
          const returnValue = await dialog.open("a", {
            title: "Dialog Title",
            description: "Dialog Description",
            content: (
              <Button
                onClick={() => {
                  const returnValue = { message: "Welcome" }
                  dialog.close("a", returnValue)
                }}
              >
                Close
              
            ),
          })

          await dialog.waitForExit("a")

          dialog.open("b", {
            title: returnValue.message,
            description: "Next Dialog Description",
          })
        }}
      >
        Open Modal
      
      
    </>
  )
}

```

### Open Dialog from Menu Item

Use the overlay manager to manage dialogs that can be opened from menu items.
The `.open()` method can be called to open the dialog.

> This approach avoids unexpected close behavior caused by event bubbling and
> portals.

```tsx
"use client"

import { Button, Dialog, Menu, Portal, createOverlay } from "@chakra-ui/react"

interface DialogProps {
  title: string
  description?: string
  content?: React.ReactNode
}

const dialog = createOverlay((props) => {
  const { title, description, content, ...rest } = props
  return (
    <Dialog.Root {...rest}>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            {title && (
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>
            )}
            <Dialog.Body spaceY="4">
              {description && (
                <Dialog.Description>{description}</Dialog.Description>
              )}
              {content}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
})

export const OverlayWithMenuItem = () => {
  return (
    <>
      
      <Menu.Root>
        <Menu.Trigger asChild>
          
            Menu
          
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item
              value="more"
              onClick={() =>
                dialog.open("more", {
                  title: "Welcome",
                  description: "Choose an action from the menu below.",
                  content: ,
                })
              }
            >
              Show More
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </>
  )
}

const ActionsMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        
          More Actions
        
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="new-txt">New Text File</Menu.Item>
          <Menu.Item value="new-file">New File...</Menu.Item>
          <Menu.Item value="new-win">New Window</Menu.Item>
          <Menu.Item value="open-file">Open File...</Menu.Item>
          <Menu.Item value="export">Export</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

```

### Programmatic Closing

You can close an overlay from within the component itself by calling the
injected `onOpenChange` prop with `{ open: false }`.

This is useful for scenarios like form submissions or user interactions that
should close the overlay.

```tsx
const dialog = createOverlay((props) => {
  const { onOpenChange, ...rest } = props

  const handleSubmit = () => {
    // Close the overlay after successful action
    onOpenChange?.({ open: false })
  }

  return <Dialog.Root {...rest}>{/* ... */}</Dialog.Root>
})
```

```tsx
"use client"

import {
  Button,
  Dialog,
  Input,
  Portal,
  Stack,
  createOverlay,
} from "@chakra-ui/react"
import { useState } from "react"

interface ContactFormProps {
  title?: string
}

const contactDialog = createOverlay((props) => {
  const { title, ...rest } = props
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    alert(`Hello ${name}!`)

    // Close dialog using injected `onOpenChange` prop
    props.onOpenChange?.({ open: false })

    setName("")
  }

  return (
    <Dialog.Root {...rest}>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            {title && (
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>
            )}
            <Dialog.Body>
              
                
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                  Submit
                
              
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
})

export const OverlayWithForm = () => {
  return (
    <>
      <Button
        onClick={() => {
          contactDialog.open("form", { title: "Simple Form" })
        }}
      >
        Open Form
      
      
    </>
  )
}

```

## API

### Props

Props that are injected into the overlay component by the `createOverlay`
function:

- `open`: Whether the overlay is currently open
- `onOpenChange`: Callback fired when the overlay's open state changes
- `onExitComplete`: Callback fired when the overlay's exit animation completes

### Methods

### `Viewport`

The root component that renders all active overlays.

### `open(id, props)`

Opens a new overlay with the given id and props. Returns a promise that resolves
with any value.

### `close(id, value)`

Closes the overlay with the given id and returns a promise that resolves when
closed.

### `update(id, props)`

Updates the props of the overlay with the given id.

### `remove(id)`

Removes the overlay with the given id.

### `removeAll()`

Removes all overlays.

### `get(id)`

Gets the props of the overlay with the given id.

### `getSnapshot()`

Gets the current snapshot of the overlays.

### `waitForExit(id)`

Waits for the exit animation to complete for the overlay with the given id.
