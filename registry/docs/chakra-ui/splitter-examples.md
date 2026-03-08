## Examples

### Controlled

Use `onResize` and `size` props to manage panel sizes programmatically.

```tsx
<Splitter.Root
  panels={[{ id: "a" }, { id: "b" }]}
  size={sizes}
  onResize={(details) => setSizes(details.size)}
>
  {/* ... */}
</Splitter.Root>
```

```tsx
"use client"

import { Center, Code, HStack, Span, Splitter, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { LuMouse, LuMoveHorizontal } from "react-icons/lu"

export const SplitterControlled = () => {
  const [sizes, setSizes] = useState([50, 50])

  return (
    <Stack gap="4" align="start">
      <HStack textStyle="sm" gap={2}>
        <LuMouse />
        <LuMoveHorizontal />
        <Span>Drag the handle to resize panels</Span>
      </HStack>

      <Splitter.Root
        panels={[{ id: "a" }, { id: "b" }]}
        size={sizes}
        onResize={(details) => setSizes(details.size)}
        borderWidth="1px"
        minH="60"
      >
        <Splitter.Panel id="a">
          <Center boxSize="full" textStyle="2xl">
            A
          </Center>
        </Splitter.Panel>

        <Splitter.ResizeTrigger id="a:b" />

        <Splitter.Panel id="b">
          <Center boxSize="full" textStyle="2xl">
            B
          </Center>
        </Splitter.Panel>
      </Splitter.Root>

      <Code color="fg.muted">
        Panel A: {sizes[0].toFixed(1)}% | Panel B: {sizes[1].toFixed(1)}%
      </Code>
    </Stack>
  )
}

```

### Store

An alternative way to control the splitter is to use the `RootProvider`
component and the `useSplitter` store hook.

This way you can access the splitter state and methods from outside the
splitter.

```tsx
"use client"

import { Center, Code, Splitter, Stack, useSplitter } from "@chakra-ui/react"

export const SplitterWithStore = () => {
  const splitter = useSplitter({
    defaultSize: [50, 50],
    panels: [{ id: "a" }, { id: "b", minSize: 20 }],
  })

  const sizes = splitter
    .getSizes()
    .map((size) => size.toFixed(1))
    .join("%, ")

  return (
    <Stack gap="4" align="start">
      <Splitter.RootProvider value={splitter} borderWidth="1px" minH="60">
        <Splitter.Panel id="a">
          <Center boxSize="full" textStyle="2xl">
            A
          </Center>
        </Splitter.Panel>

        <Splitter.ResizeTrigger id="a:b" />

        <Splitter.Panel id="b">
          <Center boxSize="full" textStyle="2xl">
            B
          </Center>
        </Splitter.Panel>
      </Splitter.RootProvider>

      <Code>Size: {JSON.stringify(sizes, null, 2)}</Code>
    </Stack>
  )
}

```

### Vertical

Pass the `orientation="vertical"` prop to the `Splitter.Root` component for
stacked panels that resize vertically.

```tsx
import { Center, Splitter } from "@chakra-ui/react"

export const SplitterVertical = () => {
  return (
    <Splitter.Root
      panels={[{ id: "a" }, { id: "b" }]}
      orientation="vertical"
      borderWidth="1px"
      minH="60"
    >
      <Splitter.Panel id="a">
        <Center boxSize="full" textStyle="2xl">
          A
        </Center>
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" />
      <Splitter.Panel id="b">
        <Center boxSize="full" textStyle="2xl">
          B
        </Center>
      </Splitter.Panel>
    </Splitter.Root>
  )
}

```

### Responsive Orientation

Use the `useBreakpointValue` hook to change the splitter orientation based on
screen size. This example shows a vertical splitter on mobile devices and a
horizontal splitter on larger screens.

```tsx
"use client"

import { Center, Splitter, useBreakpointValue } from "@chakra-ui/react"

export const SplitterResponsiveOrientation = () => {
  const orientation = useBreakpointValue<"horizontal" | "vertical">({
    base: "vertical",
    md: "horizontal",
  })

  return (
    <Splitter.Root
      panels={[{ id: "a" }, { id: "b" }]}
      orientation={orientation}
      borderWidth="1px"
      minH="60"
    >
      <Splitter.Panel id="a">
        <Center boxSize="full" textStyle="2xl">
          A
        </Center>
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" />
      <Splitter.Panel id="b">
        <Center boxSize="full" textStyle="2xl">
          B
        </Center>
      </Splitter.Panel>
    </Splitter.Root>
  )
}

```

### Multiple Panels

Create layouts with more than two resizable panels by passing an array of panels
to the `panels` prop of the `Splitter.Root` component.

```tsx
import { Center, Splitter } from "@chakra-ui/react"

export const SplitterMultiplePanels = () => {
  return (
    <Splitter.Root
      panels={[{ id: "a" }, { id: "b" }, { id: "c" }]}
      borderWidth="1px"
      minH="60"
    >
      <Splitter.Panel id="a">
        <Center boxSize="full" textStyle="2xl">
          A
        </Center>
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />
      <Splitter.Panel id="b">
        <Center boxSize="full" textStyle="2xl">
          B
        </Center>
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="b:c" aria-label="Resize" />
      <Splitter.Panel id="c">
        <Center boxSize="full" textStyle="2xl">
          C
        </Center>
      </Splitter.Panel>
    </Splitter.Root>
  )
}

```

### Collapsible Panels

Make the panels collapsible and snapped to a specific size by setting the
`collapsible` and `collapsedSize` properties on a panel in the `panels` array.

This allows users to snap panels to a defined minimum size.

```tsx
<Splitter.Root
  defaultSize={[40, 60]}
  panels={[
    { id: "a", collapsible: true, collapsedSize: 5, minSize: 25 },
    { id: "b", minSize: 50 },
  ]}
>
  {/* ... */}
</Splitter.Root>
```

```tsx
import { Box, Center, HStack, Splitter } from "@chakra-ui/react"
import { LuMouse, LuMoveHorizontal } from "react-icons/lu"

export const SplitterCollapsible = () => {
  return (
    <Box>
      <HStack textStyle="sm" mb={4}>
        <LuMouse />
        <LuMoveHorizontal />
        Drag the resizer to collapse or expand Panel A
      </HStack>

      <Splitter.Root
        defaultSize={[40, 60]}
        panels={[
          { id: "a", collapsible: true, collapsedSize: 5, minSize: 25 },
          { id: "b", minSize: 50 },
        ]}
        borderWidth="1px"
        minH="60"
      >
        <Splitter.Panel id="a">
          <Center boxSize="full" textStyle="2xl">
            A
          </Center>
        </Splitter.Panel>

        <Splitter.ResizeTrigger id="a:b" />

        <Splitter.Panel id="b">
          <Center boxSize="full" textStyle="2xl">
            B
          </Center>
        </Splitter.Panel>
      </Splitter.Root>
    </Box>
  )
}

```

### Min/Max Constraints

Set `minSize` and `maxSize` on panels to constrain their resizable range and
prevent resizing beyond these boundaries.

```tsx
"use client"

import { Center, Code, HStack, Span, Splitter, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { LuMouse, LuMoveHorizontal } from "react-icons/lu"

export const SplitterMinMaxConstraints = () => {
  const [sizes, setSizes] = useState([30, 70])

  return (
    <Stack gap="4" align="start">
      <HStack textStyle="sm" gap={2}>
        <LuMouse />
        <LuMoveHorizontal />
        <Span>Drag to resize - Panel A: 20-60%, Panel B: min 40%</Span>
      </HStack>

      <Splitter.Root
        panels={[
          { id: "a", minSize: 20, maxSize: 60 },
          { id: "b", minSize: 40 },
        ]}
        defaultSize={[30, 70]}
        borderWidth="1px"
        size={sizes}
        onResize={(details) => setSizes(details.size)}
        minH="60"
      >
        <Splitter.Panel id="a">
          <Stack boxSize="full" align="center" justify="center" gap="2">
            <Center textStyle="2xl">A</Center>
            <Code size="sm" color="fg.muted">
              {sizes[0].toFixed(1)}% (min: 20%, max: 60%)
            </Code>
          </Stack>
        </Splitter.Panel>

        <Splitter.ResizeTrigger id="a:b" />

        <Splitter.Panel id="b">
          <Stack boxSize="full" align="center" justify="center" gap="2">
            <Center textStyle="2xl">B</Center>
            <Code size="sm" color="fg.muted">
              {sizes[1].toFixed(1)}% (min: 40%)
            </Code>
          </Stack>
        </Splitter.Panel>
      </Splitter.Root>
    </Stack>
  )
}

```

### Nested Panels

Here's an example of how to nest splitters inside panels to create more complex
layouts. Each nested splitter can have its own orientation, sizes, and behaviors
independent of the parent splitter.

```tsx
import { Center, Splitter } from "@chakra-ui/react"

export const SplitterNested = () => {
  return (
    <Splitter.Root panels={[{ id: "a" }, { id: "b" }]} borderWidth="1px">
      <Splitter.Panel id="a">
        <Center boxSize="full" textStyle="2xl">
          A
        </Center>
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" aria-label="Resize" />

      <Splitter.Panel id="b">
        <Splitter.Root
          panels={[{ id: "b1" }, { id: "b2" }]}
          orientation="vertical"
          minH="80"
        >
          <Splitter.Panel id="b1">
            <Center boxSize="full" textStyle="2xl">
              B1
            </Center>
          </Splitter.Panel>

          <Splitter.ResizeTrigger
            id="b1:b2"
            aria-label="Resize nested panels"
          />

          <Splitter.Panel id="b2">
            <Center boxSize="full" textStyle="2xl">
              B2
            </Center>
          </Splitter.Panel>
        </Splitter.Root>
      </Splitter.Panel>
    </Splitter.Root>
  )
}

```

### Storage

Set a `defaultSize` and pair it with a storage solution, such as
`useLocalStorage`, to save users’ panel size preferences. This ensures that
panel layouts persist across sessions. Alternatively, you can use cookies or
other storage mechanisms depending on your needs.

```tsx
"use client"

import {
  Badge,
  Button,
  Center,
  HStack,
  Span,
  Splitter,
  Stack,
} from "@chakra-ui/react"
import { LuBox, LuMouse, LuMoveHorizontal, LuTrash2 } from "react-icons/lu"
import { useLocalStorage } from "react-use"

export const SplitterWithStorage = () => {
  const [sizes, setSizes] = useLocalStorage("splitter-sizes", [70, 50])
  const formattedSizes = sizes?.map((size) => size.toFixed(1)).join(", ")
  const hasSavedState = sizes && sizes.length > 0

  const clearStorage = () => {
    setSizes(undefined)
  }

  return (
    <Stack gap="4" align="start">
      <HStack textStyle="sm" alignSelf="stretch" justify="space-between">
        <HStack>
          <LuMouse />
          <LuMoveHorizontal />
          <Span>Drag to resize panels</Span>
        </HStack>
        {hasSavedState && (
          <Button size="xs" variant="ghost" onClick={clearStorage}>
            <LuTrash2 /> Clear Storage
          </Button>
        )}
      </HStack>

      <Splitter.Root
        panels={[{ id: "a" }, { id: "b" }]}
        defaultSize={sizes}
        onResizeEnd={(e) => setSizes(e.size)}
        borderWidth="1px"
        minH="60"
      >
        <Splitter.Panel id="a">
          <Center boxSize="full" textStyle="2xl">
            A
          </Center>
        </Splitter.Panel>

        <Splitter.ResizeTrigger id="a:b" />

        <Splitter.Panel id="b">
          <Center boxSize="full" textStyle="2xl">
            B
          </Center>
        </Splitter.Panel>
      </Splitter.Root>

      <Badge>
        <LuBox /> LocalStorage{" "}
        {hasSavedState ? `[${formattedSizes}]` : "[Not saved]"}
      </Badge>
    </Stack>
  )
}

```

### Disabled Resize

Pass the `disabled` prop to the `Splitter.ResizeTrigger` to disable resize on a
panel. This is useful if you want certain panels to remain fixed while allowing
others to resize.

```tsx
<Splitter.ResizeTrigger disabled id="a:b" />
```

```tsx
import { Center, Splitter } from "@chakra-ui/react"

export const SplitterDisabled = () => {
  return (
    <Splitter.Root
      panels={[{ id: "a" }, { id: "b" }]}
      borderWidth="1px"
      minH="60"
    >
      <Splitter.Panel id="a">
        <Center boxSize="full" textStyle="2xl">
          A
        </Center>
      </Splitter.Panel>
      <Splitter.ResizeTrigger disabled id="a:b" />
      <Splitter.Panel id="b">
        <Center boxSize="full" textStyle="2xl">
          B
        </Center>
      </Splitter.Panel>
    </Splitter.Root>
  )
}

```

### Separator Only

Customize the resize trigger to show only the separator without the indicator.
This creates a minimal, clean appearance while maintaining full resize
functionality.

```tsx
<Splitter.ResizeTrigger id="a:b">
  <Splitter.ResizeTriggerSeparator />
</Splitter.ResizeTrigger>
```

```tsx
import { Center, Splitter } from "@chakra-ui/react"

export const SplitterSeparatorOnly = () => {
  return (
    <Splitter.Root
      panels={[{ id: "a" }, { id: "b" }]}
      borderWidth="1px"
      minH="60"
    >
      <Splitter.Panel id="a">
        <Center boxSize="full" textStyle="2xl">
          A
        </Center>
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b">
        <Splitter.ResizeTriggerSeparator />
      </Splitter.ResizeTrigger>
      <Splitter.Panel id="b">
        <Center boxSize="full" textStyle="2xl">
          B
        </Center>
      </Splitter.Panel>
    </Splitter.Root>
  )
}

```

### Reset on Double Click

Use `Splitter.Context` to access the splitter context and add a double-click
handler to the resize trigger. This example resets panel sizes to their default
values when the resize handle is double-clicked.

```tsx
"use client"

import { Center, Splitter } from "@chakra-ui/react"

export const SplitterResetOnDoubleClick = () => {
  return (
    <Splitter.Root
      defaultSize={[50, 50]}
      panels={[{ id: "a" }, { id: "b" }]}
      borderWidth="1px"
      minH="60"
    >
      <Splitter.Panel id="a">
        <Center boxSize="full" textStyle="2xl">
          A
        </Center>
      </Splitter.Panel>

      <Splitter.Context>
        {(context) => (
          <Splitter.ResizeTrigger
            id="a:b"
            onDoubleClick={() => {
              context.resetSizes()
            }}
          />
        )}
      </Splitter.Context>

      <Splitter.Panel id="b">
        <Center boxSize="full" textStyle="2xl">
          B
        </Center>
      </Splitter.Panel>
    </Splitter.Root>
  )
}

```

### Resize Events

Track resize events using `onResizeStart`, `onResize`, and `onResizeEnd` props.
This example logs all resize events with timestamps and panel sizes, useful for
debugging or implementing custom resize behavior.

```tsx
"use client"

import { Center, HStack, Span, Splitter, Stack } from "@chakra-ui/react"
import { useCallback, useEffect, useRef } from "react"
import { useState } from "react"
import { LuMouse, LuMoveHorizontal } from "react-icons/lu"

type EventLog = [number, string, string]

export const SplitterResizeEvents = () => {
  const [eventLog, setEventLog] = useState<EventLog[]>([])

  const logEvent = useCallback(
    (eventName: string, details?: { size?: number[] }) => {
      const timestamp = Date.now()
      const sizeInfo = details?.size
        ? `[${details.size.map((s) => s.toFixed(1)).join(", ")}]`
        : ""
      setEventLog((prev) => [[timestamp, eventName, sizeInfo], ...prev])
    },
    [],
  )

  const throttledLogEvent = useThrottle(logEvent, 100)

  return (
    <Stack gap="4" align="start">
      <HStack textStyle="sm" gap={2}>
        <LuMouse />
        <LuMoveHorizontal />
        <Span>Drag the handle to resize panels</Span>
      </HStack>

      <Splitter.Root
        panels={[{ id: "a" }, { id: "b" }]}
        defaultSize={[50, 50]}
        borderWidth="1px"
        minH="60"
        onResizeStart={() => logEvent("onResizeStart")}
        onResize={(details) => throttledLogEvent("onResize", details)}
        onResizeEnd={(details) => logEvent("onResizeEnd", details)}
      >
        <Splitter.Panel id="a">
          <Center boxSize="full" textStyle="2xl">
            A
          </Center>
        </Splitter.Panel>

        <Splitter.ResizeTrigger id="a:b" />

        <Splitter.Panel id="b">
          <Center boxSize="full" textStyle="2xl">
            B
          </Center>
        </Splitter.Panel>
      </Splitter.Root>

      <Stack
        p="2"
        gap="1"
        width="full"
        role="log"
        borderWidth="1px"
        minH="100px"
        maxH="200px"
        overflowY="auto"
      >
        {eventLog.length === 0 ? (
          <Span textStyle="sm" color="fg.muted">
            Resize events will appear here...
          </Span>
        ) : (
          eventLog.map(([time, eventName, sizeInfo], i) => {
            const date = new Date(time)
            return (
              <HStack as="pre" fontFamily="mono" textStyle="sm" key={i}>
                <Span color="fg.muted">{date.toLocaleTimeString()}</Span>
                <Span fontWeight="bold">{eventName}</Span>
                {sizeInfo && <Span color="fg.muted">{sizeInfo}</Span>}
              </HStack>
            )
          })
        )}
      </Stack>
    </Stack>
  )
}

function useThrottle<T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
): T {
  const lastRunRef = useRef<number>(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return useCallback(
    ((...args: Parameters<T>) => {
      const now = Date.now()
      const timeSinceLastRun = now - lastRunRef.current

      if (timeSinceLastRun >= delay) {
        lastRunRef.current = now
        fn(...args)
      } else {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
          lastRunRef.current = Date.now()
          fn(...args)
        }, delay - timeSinceLastRun)
      }
    }) as T,
    [fn, delay],
  )
}

```

### Keyboard Resize

The `Splitter` supports keyboard-based resizing for accessibility and precise
control:

- Press Tab until the resize handle is focused.
- Use Arrow keys to resize panels.
- Hold Shift for larger steps.
- Press Home / End to jump to minimum or maximum sizes.
- Control the step size using the `keyboardResizeBy` prop.

```tsx
import { Box, Center, HStack, Span, Splitter } from "@chakra-ui/react"
import { LuKeyboard, LuMoveLeft, LuMoveRight } from "react-icons/lu"

export const SplitterKeyboardResize = () => {
  return (
    <Box>
      <HStack textStyle="sm" mb={4} gap={2} wrap="wrap">
        <LuKeyboard />
        <Span>Focus the resize handle and use arrow keys</Span>
        <LuMoveLeft />
        <LuMoveRight />
      </HStack>

      <Splitter.Root
        panels={[{ id: "a" }, { id: "b" }]}
        borderWidth="1px"
        keyboardResizeBy={5}
        minH="60"
      >
        <Splitter.Panel id="a">
          <Center boxSize="full" textStyle="2xl">
            A
          </Center>
        </Splitter.Panel>

        <Splitter.ResizeTrigger id="a:b" />

        <Splitter.Panel id="b">
          <Center boxSize="full" textStyle="2xl">
            B
          </Center>
        </Splitter.Panel>
      </Splitter.Root>
    </Box>
  )
}

```

### Conditional Rendering

This example shows a horizontal splitter where panels can be shown or hidden
dynamically. Use the buttons above the splitter to toggle the left and right
panels - perfect for layouts where certain sections may not always be needed.

The splitter automatically adjusts the remaining panels when one is hidden,
keeping everything responsive. Initial panel sizes are set with `defaultSize`,
and `minSize` ensures panels never shrink too small.

```tsx
"use client"

import {
  Button,
  Center,
  HStack,
  Splitter,
  Stack,
  useSplitter,
} from "@chakra-ui/react"
import { Fragment, useRef, useState } from "react"

const initialPanels: Splitter.PanelData[] = [
  { id: "left", order: 0 },
  { id: "center", order: 1 },
  { id: "right", order: 2 },
]

const getLayoutKey = (panels: Array<{ id: string }>): string => {
  return panels.map((p) => p.id).join(":")
}

const distributeSizes = (count: number): number[] =>
  Array(count).fill(100 / count)

export const SplitterConditionalRendering = () => {
  const [panels, setPanels] = useState(initialPanels)
  const [sizes, setSizes] = useState<number[]>([])

  const initialLayout = getLayoutKey(initialPanels)

  const layoutCache = useRef<Record<string, number[]>>({
    [initialLayout]: [],
  })

  const splitter = useSplitter({
    panels: panels.map((p) => ({ id: p.id, minSize: 20 })),
    size: sizes,
    orientation: "horizontal",
    onResize: ({ size, layout }) => {
      setSizes(size)
      layoutCache.current[layout] = size
    },
  })

  const items = splitter.getItems()

  const hidePanel = (id: string) => {
    const currentLayout = getLayoutKey(panels)
    layoutCache.current[currentLayout] = sizes

    const index = panels.findIndex((panel) => panel.id === id)
    const newPanels = panels.filter((panel) => panel.id !== id)
    const newSizes = sizes.filter((_, i) => i !== index)

    setPanels(newPanels)
    setSizes(newSizes)
  }

  const showPanel = (id: string) => {
    const panel = initialPanels.find((panel) => panel.id === id)
    if (!panel) return

    const nextPanels = [...panels, panel].sort(
      (a, b) => (a.order ?? 0) - (b.order ?? 0),
    )
    const nextLayout = getLayoutKey(nextPanels)
    const cachedSizes = layoutCache.current[nextLayout]

    setPanels(nextPanels)
    setSizes(cachedSizes || distributeSizes(nextPanels.length))
  }

  const isPanelVisible = (id: string) => {
    return panels.some((p) => p.id === id)
  }

  const togglePanel = (id: string) => {
    if (isPanelVisible(id)) {
      hidePanel(id)
    } else {
      showPanel(id)
    }
  }

  return (
    <Stack gap="4">
      <HStack gap="2" justify="space-between">
        <Button size="sm" variant="outline" onClick={() => togglePanel("left")}>
          {isPanelVisible("left") ? "Hide Left" : "Show Left"}
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => togglePanel("right")}
        >
          {isPanelVisible("right") ? "Hide Right" : "Show Right"}
        </Button>
      </HStack>

      <Splitter.RootProvider value={splitter} borderWidth="1px" minH="60">
        {items.map((item) => (
          <Fragment key={item.id}>
            {item.type === "panel" && (
              <Splitter.Panel id={item.id}>
                <Center boxSize="full" textStyle="lg">
                  {item.id}
                </Center>
              </Splitter.Panel>
            )}
            {item.type === "handle" && <Splitter.ResizeTrigger id={item.id} />}
          </Fragment>
        ))}
      </Splitter.RootProvider>
    </Stack>
  )
}

```

### Dynamic Panels

Add or remove panels dynamically while maintaining relative proportions. This
example demonstrates how to manage panel state and redistribute sizes when
panels are added or removed.

```tsx
"use client"

import {
  Button,
  Center,
  HStack,
  IconButton,
  Splitter,
  Stack,
  useSplitter,
} from "@chakra-ui/react"
import { Fragment, useState } from "react"
import { LuMinus, LuPlus } from "react-icons/lu"

const MAX_PANELS = 5

export const SplitterDynamicPanel = () => {
  const [panelIds, setPanelIds] = useState<string[]>(["a", "b"])
  const [sizes, setSizes] = useState<number[]>(distributeSizes(2))

  const splitter = useSplitter({
    size: sizes,
    panels: panelIds.map((id: string) => ({ id, minSize: 15 })),
    onResize: (details) => setSizes(details.size),
  })

  const items = splitter.getItems()
  const panelCount = items.filter((item) => item.type === "panel").length

  const addPanel = () => {
    if (panelIds.length >= MAX_PANELS) return // Prevent adding more than MAX_PANELS
    const newId = uuid()
    const newSizes = redistributeSizesForNewPanel(sizes, panelIds.length + 1)
    setSizes(newSizes)
    setPanelIds([...panelIds, newId])
  }

  const removePanel = (id: string) => {
    if (panelIds.length <= 1) return

    const indexToRemove = panelIds.indexOf(id)
    const newSizes = redistributeSizesAfterRemoval(sizes, indexToRemove)
    setSizes(newSizes)
    setPanelIds(panelIds.filter((panelId: string) => panelId !== id))
  }

  return (
    <Stack gap="4">
      <HStack gap="2" justify="space-between">
        <Button
          size="sm"
          variant="outline"
          onClick={addPanel}
          disabled={panelIds.length >= MAX_PANELS}
        >
          <LuPlus /> Add Panel
        </Button>
        <HStack gap="1" textStyle="sm" color="fg.muted">
          <span>
            {panelCount} panel{panelCount !== 1 ? "s" : ""}
          </span>
        </HStack>
      </HStack>

      <Splitter.RootProvider value={splitter} borderWidth="1px" minH="60">
        {items.map((item) => (
          <Fragment key={item.id}>
            {item.type === "panel" && (
              <Splitter.Panel id={item.id}>
                <Center boxSize="full" textStyle="2xl" position="relative">
                  {item.id}
                  <IconButton
                    size="xs"
                    variant="ghost"
                    position="absolute"
                    top="2"
                    right="2"
                    onClick={() => removePanel(item.id)}
                    disabled={panelCount === 1}
                  >
                    <LuMinus />
                  </IconButton>
                </Center>
              </Splitter.Panel>
            )}
            {item.type === "handle" && <Splitter.ResizeTrigger id={item.id} />}
          </Fragment>
        ))}
      </Splitter.RootProvider>
    </Stack>
  )
}

const uuid = () => {
  // Generate a single random lowercase letter
  const letters = "cdefghijklmnopqrstuvwxyz"
  return letters[Math.floor(Math.random() * letters.length)]
}

const distributeSizes = (count: number): number[] =>
  Array(count).fill(100 / count)

const calculateTotalSize = (sizes: number[]): number =>
  sizes.reduce((sum, size) => sum + size, 0)

const redistributeSizesForNewPanel = (
  currentSizes: number[],
  newPanelCount: number,
): number[] => {
  const totalSize = calculateTotalSize(currentSizes)
  const newPanelSize = totalSize / newPanelCount

  // Reduce existing panels proportionally to make room for the new panel
  const adjustedSizes = currentSizes.map((size) => {
    const proportion = size / totalSize
    return size - newPanelSize * proportion
  })

  adjustedSizes.push(newPanelSize)
  return adjustedSizes
}

const redistributeSizesAfterRemoval = (
  currentSizes: number[],
  indexToRemove: number,
): number[] => {
  const removedSize = currentSizes[indexToRemove] || 0
  const remainingSizes = currentSizes.filter((_, i) => i !== indexToRemove)
  const totalRemainingSize = calculateTotalSize(remainingSizes)

  // Distribute removed panel's size proportionally to remaining panels
  return remainingSizes.map(
    (size) => size + (removedSize * size) / totalRemainingSize,
  )
}

```

### Composition

A real-world VS Code-like layout demonstrating nested splitters with different
orientations, collapsible panels, and integrated code editing.

```tsx
"use client"

import {
  CodeBlock,
  HStack,
  Span,
  Splitter,
  Stack,
  createShikiAdapter,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { LuFile, LuFolder } from "react-icons/lu"
import type { HighlighterGeneric } from "shiki"

type FileNode = {
  name: string
  type: "file" | "folder"
  id?: string
  children?: FileNode[]
}

const fileTree: FileNode[] = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "App.tsx", type: "file", id: "app" },
      { name: "index.tsx", type: "file", id: "index" },
    ],
  },
  { name: "package.json", type: "file", id: "package" },
]

export const SplitterIdeLayout = () => {
  const [activeFileId, setActiveFileId] = useState<string>("app")
  const activeFile = fileContents[activeFileId] || fileContents.app

  return (
    <CodeBlockAdapter>
      <Splitter.Root
        defaultSize={[20, 80]}
        panels={[
          { id: "explorer", collapsible: true, collapsedSize: 0, minSize: 10 },
          { id: "editor-terminal", minSize: 50 },
        ]}
        borderWidth="1px"
        minH="600px"
        className="dark"
        colorPalette="gray"
      >
        {/* File Explorer */}
        <Splitter.Panel id="explorer" bg="bg" color="fg">
          <Stack
            gap="1"
            p="2"
            h="full"
            width="full"
            overflowY="auto"
            overflowX="hidden"
          >
            <FileTree
              nodes={fileTree}
              activeFileId={activeFileId}
              onFileClick={setActiveFileId}
            />
          </Stack>
        </Splitter.Panel>

        <Splitter.ResizeTrigger id="explorer:editor-terminal" />

        {/* Editor + Terminal Container */}
        <Splitter.Panel id="editor-terminal">
          <Splitter.Root
            defaultSize={[70, 30]}
            panels={[
              { id: "editor", minSize: 30 },
              {
                id: "terminal",
                collapsible: true,
                collapsedSize: 5,
                minSize: 15,
              },
            ]}
            orientation="vertical"
            h="full"
          >
            {/* Editor */}
            <Splitter.Panel id="editor">
              <Editor
                activeFileId={activeFileId}
                activeFile={activeFile}
                fileTree={fileTree}
              />
            </Splitter.Panel>

            <Splitter.ResizeTrigger id="editor:terminal" />

            {/* Terminal */}
            <Splitter.Panel id="terminal">
              <Terminal output={terminalOutput} />
            </Splitter.Panel>
          </Splitter.Root>
        </Splitter.Panel>
      </Splitter.Root>
    </CodeBlockAdapter>
  )
}

////////////////////////////////////////////////////////////////////////////////

type FileTreeProps = {
  nodes: FileNode[]
  activeFileId: string
  onFileClick: (fileId: string) => void
}

const FileTree = ({ nodes, activeFileId, onFileClick }: FileTreeProps) => {
  const renderFileTree = (fileNodes: FileNode[], level = 0) => {
    return fileNodes.map((node) => {
      if (node.type === "folder") {
        return (
          <Stack
            key={node.name}
            gap="0.5"
            ps={level > 0 ? "4" : "0"}
            width="full"
          >
            <HStack gap="2" px="2" py="1" textStyle="sm" flexShrink="0">
              <LuFolder style={{ flexShrink: 0 }} />
              <Span truncate>{node.name}</Span>
            </HStack>
            {node.children && (
              <Stack gap="0.5">
                {renderFileTree(node.children, level + 1)}
              </Stack>
            )}
          </Stack>
        )
      }

      const isActive = node.id === activeFileId
      return (
        <HStack
          width="full"
          key={node.id}
          gap="2"
          pe="2"
          ps={level * 4 + 2}
          py="1"
          rounded="l2"
          textStyle="sm"
          cursor="pointer"
          data-current={isActive || undefined}
          flexShrink="0"
          _current={{ bg: "bg.emphasized", color: "yellow.solid" }}
          onClick={() => node.id && onFileClick(node.id)}
        >
          <LuFile style={{ flexShrink: 0 }} />
          <Span truncate>{node.name}</Span>
        </HStack>
      )
    })
  }

  return (
    <Stack gap="0.5" width="full">
      {renderFileTree(nodes)}
    </Stack>
  )
}

////////////////////////////////////////////////////////////////////////////////

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "ts", "js", "json", "bash"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

const CodeBlockAdapter = (props: React.PropsWithChildren) => (
  <CodeBlock.AdapterProvider value={shikiAdapter}>
    {props.children}
  </CodeBlock.AdapterProvider>
)

type EditorProps = {
  activeFileId: string
  activeFile: { code: string; language: string }
  fileTree: FileNode[]
}

const Editor = ({ activeFileId, activeFile, fileTree }: EditorProps) => {
  const fileName =
    fileTree
      .flatMap((node) =>
        node.type === "folder" ? node.children || [] : [node],
      )
      .find((node) => node.id === activeFileId)?.name || "App.tsx"

  return (
    <CodeBlock.Root
      code={activeFile.code}
      language={activeFile.language}
      h="full"
      rounded="none"
      size="sm"
    >
      <CodeBlock.Header>
        <CodeBlock.Title>{fileName}</CodeBlock.Title>
      </CodeBlock.Header>
      <CodeBlock.Content>
        <CodeBlock.Code>
          <CodeBlock.CodeText />
        </CodeBlock.Code>
      </CodeBlock.Content>
    </CodeBlock.Root>
  )
}

////////////////////////////////////////////////////////////////////////////////

type TerminalProps = {
  output: string
}

const Terminal = ({ output }: TerminalProps) => {
  return (
    <CodeBlock.Root
      code={output}
      language="bash"
      h="full"
      rounded="none"
      size="sm"
    >
      <CodeBlock.Header>
        <CodeBlock.Title>Terminal</CodeBlock.Title>
      </CodeBlock.Header>
      <CodeBlock.Content>
        <CodeBlock.Code>
          <CodeBlock.CodeText />
        </CodeBlock.Code>
      </CodeBlock.Content>
    </CodeBlock.Root>
  )
}

////////////////////////////////////////////////////////////////////////////////

const fileContents: Record<string, { code: string; language: string }> = {
  app: {
    code: `import { useState } from "react"
  
  export const Counter = () => {
    const [count, setCount] = useState(0)
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    )
  }`,
    language: "tsx",
  },
  index: {
    code: `import React from "react"
  import ReactDOM from "react-dom/client"
  import App from "./App"
  
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )`,
    language: "tsx",
  },
  package: {
    code: `{
    "name": "my-app",
    "version": "1.0.0",
    "scripts": {
      "dev": "vite",
      "build": "vite build"
    },
    "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
    }
  }`,
    language: "json",
  },
}

const terminalOutput = `$ npm run dev
  
  > dev@1.0.0 dev
  > vite
  
    VITE v5.0.0  ready in 234 ms
  
    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help`

```

## Guides

### Splitter Context

When you need to programmatically control the splitter, you can access the
splitter context and its methods in two ways:

- using the `Splitter.Context` render prop
- using the `useSplitterContext` hook

#### Splitter.Context Render Prop

Use `Splitter.Context` as a render prop to access the context within the
component tree:

```tsx
<Splitter.Root defaultSize={[50, 50]} panels={[{ id: "a" }, { id: "b" }]}>
  <Splitter.Panel id="a">Panel A</Splitter.Panel>

  <Splitter.Context>
    {(context) => (
      <Splitter.ResizeTrigger
        id="a:b"
        onDoubleClick={() => {
          context.resetSizes()
        }}
      />
    )}
  </Splitter.Context>

  <Splitter.Panel id="b">Panel B</Splitter.Panel>
</Splitter.Root>
```

#### useSplitterContext Hook

Alternatively, use the `useSplitterContext` hook in a child component:

```tsx
import { useSplitterContext } from "@chakra-ui/react"

const ResetButton = () => {
  const splitter = useSplitterContext()
  return <button onClick={() => splitter.resetSizes()}>Reset Sizes</button>
}

const Demo = () => (
  <Splitter.Root defaultSize={[50, 50]} panels={[{ id: "a" }, { id: "b" }]}>
    <Splitter.Panel id="a">Panel A</Splitter.Panel>
    <Splitter.ResizeTrigger id="a:b" />
    <Splitter.Panel id="b">
      <ResetButton />
    </Splitter.Panel>
  </Splitter.Root>
)
```

The context object (from either method) includes:

- **`resetSizes()`**: Reset all panels to their default sizes
- **`setSize(sizes)`**: Set panel sizes programmatically
- **`collapsePanel(id)`**: Collapse a specific panel
- **`expandPanel(id)`**: Expand a collapsed panel
- **`isPanelCollapsed(id)`**: Check if a panel is collapsed
- **`getItems()`**: Get the current items (panels and handles)
- **`size`**: Current panel sizes array
