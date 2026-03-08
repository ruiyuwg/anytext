# Scroll Area

```tsx
import { ScrollArea } from "@chakra-ui/react"
import LoremIpsum from "react-lorem-ipsum"

export const ScrollAreaBasic = () => (
  <ScrollArea.Root height="8.5rem" maxW="lg">
    <ScrollArea.Viewport>
      <ScrollArea.Content spaceY="4" textStyle="sm">
        <LoremIpsum p={3} />
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar>
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
)

```

## Usage

```tsx
import { ScrollArea } from "@chakra-ui/react"
```

```tsx
<ScrollArea.Root>
  <ScrollArea.Viewport>
    <ScrollArea.Content />
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar>
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
  <ScrollArea.Corner />
</ScrollArea.Root>
```

## Examples

### Variants

Use the `variant` prop to change the scrollbar visibility behavior. Values can
be either `hover` (default) or `always`.

```tsx
import { For, ScrollArea, Stack, Text } from "@chakra-ui/react"
import Lorem from "react-lorem-ipsum"

export const ScrollAreaWithVariants = () => (
  <Stack gap="8" maxW="lg">
    <For each={["hover", "always"]}>
      {(variant) => (
        <Stack gap="2" key={variant}>
          <Text fontWeight="medium">variant="{variant}"</Text>
          <ScrollArea.Root height="8rem" variant={variant}>
            <ScrollArea.Viewport>
              <ScrollArea.Content paddingEnd="3" textStyle="sm">
                <Lorem p={4} />
              </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar />
          </ScrollArea.Root>
        </Stack>
      )}
    </For>
  </Stack>
)

```

### Sizes

Use the `size` prop to change the size of the scroll area. This affects the
scrollbar thickness and content padding.

```tsx
import { For, ScrollArea, Stack, Text } from "@chakra-ui/react"
import LoremIpsum from "react-lorem-ipsum"

export const ScrollAreaWithSizes = () => (
  <Stack gap="8" maxW="lg">
    <For each={["xs", "sm", "md", "lg"]}>
      {(size) => (
        <Stack gap="2" key={size}>
          <Text fontWeight="medium">size="{size}"</Text>
          <ScrollArea.Root size={size} height="8rem" variant="always">
            <ScrollArea.Viewport>
              <ScrollArea.Content paddingEnd="5" textStyle="sm">
                <LoremIpsum p={2} />
              </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar />
          </ScrollArea.Root>
        </Stack>
      )}
    </For>
  </Stack>
)

```

### Horizontal Scrolling

The scroll area automatically supports horizontal scrolling when content
overflows horizontally.

```tsx
import { Flex, ScrollArea } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const ScrollAreaHorizontal = () => (
  <ScrollArea.Root width="24rem" size="xs">
    <ScrollArea.Viewport>
      <ScrollArea.Content py="4">
        <Flex gap="4" flexWrap="nowrap">
          {Array.from({ length: 12 }, (_, i) => (
            <Box rounded="sm" key={i} h="20" w="40" flexShrink="0">
              Item {i + 1}
            </Box>
          ))}
        </Flex>
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="horizontal" />
    <ScrollArea.Corner />
  </ScrollArea.Root>
)

```

### Both Directions

When content overflows in both directions, both scrollbars will appear.

```tsx
import { ScrollArea } from "@chakra-ui/react"
import LoremIpsum from "react-lorem-ipsum"

export const ScrollAreaBothDirections = () => (
  <ScrollArea.Root height="12rem" width="lg" size="xs" p="2">
    <ScrollArea.Viewport>
      <ScrollArea.Content spaceY="4" w="40rem" textStyle="sm">
        <LoremIpsum p={3} />
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="horizontal" />
    <ScrollArea.Scrollbar orientation="vertical" />
    <ScrollArea.Corner bg="bg" />
  </ScrollArea.Root>
)

```

You can render the `ScrollArea.Corner` component to show a corner indicator to
fill the intersection of the two scrollbars for a seamless, styled appearance.

### Scroll Shadow

Add visual feedback when content is scrollable by implementing scroll shadows
that appear at the edges using `mask-image`.

Use the `data-overflow-y` attribute to only show shadows when content actually
overflows—this prevents shadows from appearing when there's a single item or no
scrollable content.

```tsx
import { ScrollArea } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const ScrollAreaWithScrollShadow = () => {
  return (
    <ScrollArea.Root height="20rem" maxW="lg">
      <ScrollArea.Viewport
        css={{
          "--scroll-shadow-size": "4rem",
          maskImage: "linear-gradient(#000, #000)",
          "&[data-overflow-y]": {
            maskImage:
              "linear-gradient(#000,#000,transparent 0,#000 var(--scroll-shadow-size),#000 calc(100% - var(--scroll-shadow-size)),transparent)",
            "&[data-at-top]": {
              maskImage:
                "linear-gradient(180deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
            },
            "&[data-at-bottom]": {
              maskImage:
                "linear-gradient(0deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
            },
          },
        }}
      >
        <ScrollArea.Content spaceY="4">
          {Array.from({ length: 10 }, (_, i) => (
            <Box key={i} h="20">
              Item {i + 1}
            </Box>
          ))}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
    </ScrollArea.Root>
  )
}

```

### Thumb Styling

Customize the appearance of the scrollbar thumb with different styles and
colors.

```tsx
import { ScrollArea } from "@chakra-ui/react"
import LoremIpsum from "react-lorem-ipsum"

export const ScrollAreaWithThumbStyling = () => (
  <ScrollArea.Root height="8rem" maxW="2xl" variant="always">
    <ScrollArea.Viewport>
      <ScrollArea.Content spaceY="4" pe="2">
        <LoremIpsum p={2} />
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar bg="red.subtle">
      <ScrollArea.Thumb bg="red.solid" />
    </ScrollArea.Scrollbar>
  </ScrollArea.Root>
)

```

### Stick to Bottom

Implement chat-like behavior where new content automatically scrolls to the
bottom, but allows manual scrolling.

> This example uses `use-stick-to-bottom` to scroll pinning.

```tsx
"use client"

import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  ScrollArea,
  VStack,
} from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { useState } from "react"
import { LuArrowDown } from "react-icons/lu"
import { useStickToBottom } from "use-stick-to-bottom"

export const ScrollAreaStickToBottom = () => {
  const sticky = useStickToBottom()

  const [messages, setMessages] = useState<string[]>([
    "Message 1 - 10:00:00",
    "Message 2 - 10:00:01",
    "Message 3 - 10:00:02",
    "Message 4 - 10:00:03",
    "Message 5 - 10:00:04",
    "Message 6 - 10:00:05",
    "Message 7 - 10:00:06",
    "Message 8 - 10:00:07",
    "Message 9 - 10:00:08",
    "Message 10 - 10:00:09",
  ])

  const addMessage = () => {
    const newMessage = `Message ${messages.length + 1} - ${new Date().toLocaleTimeString()}`
    setMessages((prev) => [...prev, newMessage])
  }

  const addMultipleMessages = () => {
    const newMessages = Array.from(
      { length: 5 },
      (_, i) =>
        `Batch message ${messages.length + i + 1} - ${new Date().toLocaleTimeString()}`,
    )
    setMessages((prev) => [...prev, ...newMessages])
  }

  const removeMessage = () => {
    setMessages((prev) => prev.slice(0, -1))
  }

  return (
    <VStack gap="4" align="stretch" width="20rem">
      <ButtonGroup gap="2" size="sm" variant="outline">
        <Button onClick={addMessage}>Add Message</Button>
        <Button onClick={addMultipleMessages}>Add 5 Messages</Button>
        <Button onClick={removeMessage}>Remove Message</Button>
      </ButtonGroup>

      <ScrollArea.Root
        maxHeight="20rem"
        width="full"
        borderWidth="1px"
        rounded="l2"
        size="xs"
      >
        <ScrollArea.Viewport ref={sticky.scrollRef}>
          <ScrollArea.Content ref={sticky.contentRef}>
            <VStack gap="2" p="3" align="stretch">
              {messages.map((message, index) => (
                <Box key={index} h="12">
                  {message}
                </Box>
              ))}
            </VStack>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar />

        {!sticky.isAtBottom && (
          <Box position="absolute" bottom="4" right="4" zIndex="10">
            <IconButton
              size="sm"
              onClick={() => {
                sticky.scrollToBottom()
              }}
              colorScheme="blue"
              variant="solid"
            >
              <LuArrowDown />
            </IconButton>
          </Box>
        )}
      </ScrollArea.Root>
    </VStack>
  )
}

```

### Virtualization

Handle large datasets efficiently by rendering only visible items using
`@tanstack/react-virtual`.

```tsx
"use client"

import { ScrollArea } from "@chakra-ui/react"
import { type VirtualItem, useVirtualizer } from "@tanstack/react-virtual"
import { Box } from "@chakra-ui/react"
import React, { useCallback, useMemo, useRef } from "react"

export const ScrollAreaVirtualization = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const items = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        name: `Item ${i + 1}`,
      })),
    [],
  )

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 80,
    overscan: 5,
  })

  const contentProps = useMemo(
    (): React.ComponentProps<"div"> => ({
      style: {
        height: `${virtualizer.getTotalSize()}px`,
        width: "full",
        position: "relative",
      },
    }),
    [virtualizer],
  )

  const getItemProps = useCallback(
    (item: VirtualItem): React.ComponentProps<"div"> => ({
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        paddingBottom: 4,
        height: `${item.size}px`,
        transform: `translateY(${item.start}px)`,
      },
    }),
    [],
  )

  return (
    <ScrollArea.Root height="20rem" maxWidth="xl">
      <ScrollArea.Viewport ref={scrollRef}>
        <ScrollArea.Content {...contentProps}>
          {virtualizer.getVirtualItems().map((virtualItem) => {
            const item = items[virtualItem.index]
            return (
              <div key={virtualItem.key} {...getItemProps(virtualItem)}>
                <Box w="full">{item.name}</Box>
              </div>
            )
          })}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar bg="transparent" />
    </ScrollArea.Root>
  )
}

```

### Store

Use the scroll area with external state management and programmatic control.

```tsx
"use client"

import { ScrollArea, useScrollArea } from "@chakra-ui/react"
import LoremIpsum from "react-lorem-ipsum"

export const ScrollAreaWithStore = () => {
  const scrollArea = useScrollArea()
  return (
    <ScrollArea.RootProvider value={scrollArea} height="8.5rem">
      <ScrollArea.Viewport>
        <ScrollArea.Content spaceY="4">
          <LoremIpsum p={3} />
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar>
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.RootProvider>
  )
}

```

### Scroll to Side

Programmatically navigate through content by scrolling to different sides and
directions.

```tsx
"use client"

import {
  Button,
  ButtonGroup,
  ScrollArea,
  Stack,
  useScrollArea,
} from "@chakra-ui/react"
import LoremIpsum from "react-lorem-ipsum"

export const ScrollAreaScrollToSide = () => {
  const scrollArea = useScrollArea()
  return (
    <Stack gap="8" align="flex-start" maxW="xl">
      <ButtonGroup variant="outline" justify="center" size="sm">
        <Button
          onClick={() =>
            scrollArea.scrollToEdge({ edge: "bottom", behavior: "smooth" })
          }
        >
          Scroll to bottom
        </Button>
        <Button
          onClick={() =>
            scrollArea.scrollToEdge({ edge: "top", behavior: "smooth" })
          }
        >
          Scroll to top
        </Button>
      </ButtonGroup>

      <ScrollArea.RootProvider value={scrollArea} height="8rem" width="24rem">
        <ScrollArea.Viewport>
          <ScrollArea.Content>
            <LoremIpsum p={3} />
          </ScrollArea.Content>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar />
      </ScrollArea.RootProvider>
    </Stack>
  )
}

```

### Scroll to Position

Jump to specific positions or items within the scrollable area with smooth
animations.

```tsx
"use client"

import { Button, ScrollArea, Stack, useScrollArea } from "@chakra-ui/react"
import LoremIpsum from "react-lorem-ipsum"

export const ScrollAreaScrollToPosition = () => {
  const scrollArea = useScrollArea()
  return (
    <Stack gap="8" align="flex-start" maxW="xl">
      <Button
        variant="outline"
        size="sm"
        onClick={() => scrollArea.scrollTo({ top: 200, behavior: "smooth" })}
      >
        Scroll to 100px
      </Button>
      <ScrollArea.RootProvider value={scrollArea} height="8rem" width="24rem">
        <ScrollArea.Viewport>
          <ScrollArea.Content>
            <LoremIpsum p={3} />
          </ScrollArea.Content>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar />
      </ScrollArea.RootProvider>
    </Stack>
  )
}

```

### RTL Support

The scroll area component fully supports Right-to-Left (RTL) languages like
Arabic and Hebrew.

```tsx
import { LocaleProvider, ScrollArea } from "@chakra-ui/react"

const arabicText = [
  "مرحباً بكم في نظام التمرير المخصص",
  "هذا مثال على النص العربي في منطقة التمرير",
  "يدعم النظام اللغات التي تُكتب من اليمين إلى اليسار",
  "التمرير الأفقي يعمل بشكل صحيح مع النصوص العربية",
  "يمكنك رؤية كيف تتكيف أشرطة التمرير مع اتجاه النص",
  "النظام يدعم التمرير العمودي والأفقي في نفس الوقت",
  "يمكن تخصيص مظهر أشرطة التمرير حسب التصميم المطلوب",
  "التفاعل مع أشرطة التمرير سهل ومريح للمستخدم",
  "يعمل النظام بسلاسة على جميع المتصفحات الحديثة",
  "يمكن دمج هذا المكون مع مكونات أخرى بسهولة",
  "الأداء محسّن للتعامل مع كميات كبيرة من المحتوى",
]

export const ScrollAreaWithRtl = () => {
  return (
    <LocaleProvider locale="ar-AE">
      <ScrollArea.Root height="8rem" width="24rem" size="sm">
        <ScrollArea.Viewport>
          <ScrollArea.Content p="2">
            {arabicText.map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar />
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </LocaleProvider>
  )
}

```

### With Menu

Combine scroll area with other components like menus to handle overflowing
content. This example shows how to create a scrollable menu with many items.

```tsx
import { Button, Menu, Portal, ScrollArea } from "@chakra-ui/react"
import { useId } from "react"

export const ScrollAreaWithMenu = () => {
  const contentId = useId()
  return (
    <Menu.Root ids={{ content: contentId }}>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Menu with Scroll
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <MenuContent maxH="80" w="64" id={contentId}>
            {menuItems.map((item) => (
              <Menu.Item key={item.value} value={item.value}>
                {item.label}
              </Menu.Item>
            ))}
          </MenuContent>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

function MenuContent(props: Menu.ContentProps) {
  const { id, children, ...rest } = props
  return (
    <ScrollArea.Root overflow="visible" ids={{ viewport: id }}>
      <ScrollArea.Viewport asChild>
        <Menu.Content {...rest}>
          {children}
          <ScrollArea.Scrollbar bg="transparent">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </Menu.Content>
      </ScrollArea.Viewport>
    </ScrollArea.Root>
  )
}

const menuItems = [
  { value: "profile", label: "Profile" },
  { value: "settings", label: "Settings" },
  { value: "notifications", label: "Notifications" },
  { value: "messages", label: "Messages" },
  { value: "documents", label: "Documents" },
  { value: "files", label: "Files" },
  { value: "images", label: "Images" },
  { value: "videos", label: "Videos" },
  { value: "music", label: "Music" },
  { value: "downloads", label: "Downloads" },
  { value: "share", label: "Share" },
  { value: "copy", label: "Copy" },
  { value: "edit", label: "Edit" },
  { value: "favorites", label: "Favorites" },
  { value: "liked", label: "Liked Items" },
  { value: "bookmarks", label: "Bookmarks" },
  { value: "flagged", label: "Flagged Items" },
  { value: "help", label: "Help & Support" },
  { value: "trash", label: "Trash" },
  { value: "logout", label: "Logout" },
]

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | hover | `'hover' \| 'always'` | The variant of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| ids | undefined | `Partial<{ root: string; viewport: string; content: string; scrollbar: string; thumb: string }>` | The ids of the scroll area elements |

### Viewport

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### Content

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### Scrollbar

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| orientation | undefined | `Orientation` | undefined |

### Thumb

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### Corner

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

## Explorer

Explore the `Scroll Area` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.
