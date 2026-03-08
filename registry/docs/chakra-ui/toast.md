# Toast

```tsx
"use client"

import { Button } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"

export const ToasterBasic = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toaster.create({
          description: "File saved successfully",
          type: "info",
        })
      }
    >
      Show Toast
    </Button>
  )
}

```

## Setup

If you don't already have the snippet, run the following command to add the
`toaster` snippet

```sh
npx @chakra-ui/cli snippet add toaster
```

The snippet includes a closed component composition for the `Toast` component.

## Usage

```jsx
import { Toaster, toaster } from "@/components/ui/toaster"
```

First, render the `Toaster` component in your app.

```jsx
<Toaster />
```

Then, create a toast by calling the `toaster` function.

```jsx
toaster.create({
  title: "Toast Title",
  description: "Toast Description",
})
```

## Examples

### Closable Toast

Set the `closable` prop to `true` to create a closable toast.

```tsx
"use client"

import { Button } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"

export const ToasterClosable = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toaster.create({
          description: "File saved successfully",
          type: "info",
          closable: true,
        })
      }
    >
      Show Toast
    </Button>
  )
}

```

### External Close

Use the `toaster.dismiss` method to close a toast.

- `toaster.dismiss(id)`: Dismiss a toast by its id.
- `toaster.dismiss()`: Dismiss all toasts.

```tsx
"use client"

import { Button, HStack } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"

export const ToasterWithExternalClose = () => {
  return (
    <HStack>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          toaster.create({
            description: "File saved successfully",
            type: "info",
          })
        }
      >
        Show Toast
      </Button>

      <Button variant="outline" size="sm" onClick={() => toaster.dismiss()}>
        Close Toasts
      </Button>
    </HStack>
  )
}

```

### Types

Here's an example of each type of toast.

```tsx
"use client"

import { Button, For, HStack } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"

export const ToasterWithStatus = () => {
  return (
    <HStack>
      <For each={["success", "error", "warning", "info"]}>
        {(type) => (
          <Button
            size="sm"
            variant="outline"
            key={type}
            onClick={() =>
              toaster.create({
                title: `Toast status is ${type}`,
                type: type,
              })
            }
          >
            {type}
          </Button>
        )}
      </For>
    </HStack>
  )
}

```

### With Action

Use the `action` and `actionLabel` prop to add an action to the toast.

> When the action trigger is clicked, the toast will be closed.

```tsx
"use client"

import { Button } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"

export const ToasterWithAction = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toaster.success({
          title: "Update successful",
          description: "File saved successfully to the server",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Click me
    </Button>
  )
}

```

### Persistent Toast

Set the `type` prop to `"loading"` to create a persistent toast.

```tsx
"use client"

import { Button } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"

export const ToasterPersistent = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toaster.create({
          description: "File saved successfully",
          type: "loading",
        })
      }
    >
      Show Toast
    </Button>
  )
}

```

### Promise

Use the `toaster.promise` to create a toast that resolves when the promise is
resolved.

Next, you can define the toast options (title, description, etc.) for each state
of the promise.

```tsx
"use client"

import { Button } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"

export const ToasterWithPromise = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        const promise = new Promise<void>((resolve) => {
          setTimeout(() => resolve(), 5000)
        })

        toaster.promise(promise, {
          success: {
            title: "Successfully uploaded!",
            description: "Looks great",
          },
          error: {
            title: "Upload failed",
            description: "Something wrong with the upload",
          },
          loading: { title: "Uploading...", description: "Please wait" },
        })
      }}
    >
      Show Toast
    </Button>
  )
}

```

### Update

Use `toaster.update(...)` to modify a visible toast.

```tsx
"use client"

import { Button, HStack } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"

export const ToasterWithUpdate = () => {
  const id = "login-error-toast"

  const show = () => {
    if (toaster.isVisible(id)) return
    toaster.loading({
      id,
      title: "Error Connecting...",
      description: "You do not have permissions to perform this action.",
    })
  }

  const update = () => {
    toaster.update(id, {
      title: "Hooray 🥳🥳🥳!!!",
      description: "You now have permissions to perform this action.",
      type: "success",
      duration: 3000,
    })
  }

  return (
    <HStack>
      <Button variant="outline" size="sm" onClick={show}>
        Show Toast
      </Button>
      <Button variant="outline" size="sm" onClick={update}>
        Update Toast
      </Button>
    </HStack>
  )
}

```

### Custom Duration

Use the `duration` prop to set the duration of the toast.

```tsx
"use client"

import { Button } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"

export const ToasterWithDuration = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toaster.create({
          description: "File saved successfully",
          duration: 6000,
        })
      }
    >
      Show Toast
    </Button>
  )
}

```

### Pause and Play

Use the `pause` and `resume` methods on the `toaster` object to pause and play
the toast.

Pausing a toast prevents it from timing out, while resuming it will reenable the
timeout using the remaining duration.

```tsx
"use client"

import { Button, HStack } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"
import { useId, useState } from "react"
import { HiPause, HiPlay } from "react-icons/hi"

export const ToasterPauseAndPlay = () => {
  const id = useId()
  const [paused, setPaused] = useState(false)
  const [shown, setShown] = useState(false)

  const show = () => {
    toaster.success({
      id,
      title: "This is a success toast",
      onStatusChange: (details) => {
        if (details.status === "visible") {
          setShown(true)
        } else if (details.status === "dismissing") {
          setShown(false)
        }
      },
    })
  }

  const pause = () => {
    toaster.pause(id)
    setPaused(true)
  }

  const play = () => {
    toaster.resume(id)
    setPaused(false)
  }

  return (
    <HStack>
      <Button variant="outline" size="sm" onClick={show} disabled={shown}>
        Show Toast
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={pause}
        disabled={!shown || paused}
      >
        <HiPause />
        Pause Toast
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={play}
        disabled={!shown || !paused}
      >
        <HiPlay />
        Play Toast
      </Button>
    </HStack>
  )
}

```

### Lifecycle

Use the `onStatusChange` prop on the `toaster` function to listen for changes to
the toast's status.

```tsx
"use client"

import { Button, HStack, Stack, Text } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"
import { useState } from "react"

export const ToasterLifecycle = () => {
  const [statusLog, setStatusLog] = useState<[number, string][]>([])
  const [dismissed, setDismissed] = useState(true)

  return (
    <Stack align="flex-start">
      <Button
        disabled={!dismissed}
        variant="outline"
        size="sm"
        onClick={() =>
          toaster.create({
            description: "This is a toast",
            type: "info",
            onStatusChange({ status }) {
              setDismissed(status === "unmounted")
              setStatusLog((prev) => [[Date.now(), status], ...prev])
            },
          })
        }
      >
        Show Toast
      </Button>

      <Stack padding="2" width="full" role="log" borderWidth="1px" minH="100px">
        {statusLog.map(([time, toastStatus], i) => {
          const date = new Date(time)
          return (
            <HStack as="pre" fontFamily="mono" textStyle="sm" key={i}>
              {date.toLocaleTimeString()}{" "}
              <Text fontWeight="bold">{toastStatus}</Text>
            </HStack>
          )
        })}
      </Stack>
    </Stack>
  )
}

```

### Maximum Visible Toasts

Set the `max` prop on the `createToaster` function to define the maximum number
of toasts that can be rendered at any one time. Any extra toasts will be queued
and rendered when a toast has been dismissed.

```jsx title="@/components/ui/toaster.tsx"
const toaster = createToaster({
  max: 3,
})
```

### Placement

Toasts can be displayed on all four corners of a page. We recommend picking one
desired position and configure it in the `createToaster` function.

```jsx title="@/components/ui/toaster.tsx"
const toaster = createToaster({
  placement: "top-end",
})
```

### Overlapping Toasts

By default, toasts are stacked on top of each other. To make the toasts overlap
each other, set the `overlap` prop to `true` in the `createToaster` function.

```jsx title="@/components/ui/toaster.tsx"
const toaster = createToaster({
  placement: "top-end",
  overlap: true,
})
```

### Page Idle Behavior

Pause toast timers when the page is idle/hidden.

```tsx title="@/components/ui/toaster.tsx"
const toaster = createToaster({
  pauseOnPageIdle: true,
})
```

### Offset

Set the `offsets` prop in the `createToaster` function to offset the toasts from
the edges of the screen.

```jsx title="@/components/ui/toaster.tsx"
const toaster = createToaster({
  offsets: "20px",
})
```

Alternatively, you can use the `offsets` prop to set the offset for each edge of
the screen.

```jsx title="@/components/ui/toaster.tsx"
const toaster = createToaster({
  offsets: { left: "20px", top: "20px", right: "20px", bottom: "20px" },
})
```

## Props

### Toaster

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |

### Title

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### Description

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### ActionTrigger

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### CloseTrigger

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
