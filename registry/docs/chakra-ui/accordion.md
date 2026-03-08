# Accordion

```tsx
import { Accordion, Span } from "@chakra-ui/react"

export const AccordionBasic = () => {
  return (
    <Accordion.Root collapsible defaultValue={["b"]}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          <Accordion.ItemTrigger>
            <Span flex="1">{item.title}</Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3..." },
]

```

## Usage

```tsx
import { Accordion } from "@chakra-ui/react"
```

```tsx
<Accordion.Root>
  <Accordion.Item>
    <Accordion.ItemTrigger>
      <Accordion.ItemIndicator />
    </Accordion.ItemTrigger>
    <Accordion.ItemContent>
      <Accordion.ItemBody />
    </Accordion.ItemContent>
  </Accordion.Item>
</Accordion.Root>
```

## Examples

### Controlled

Set the accordion that shows up by default.

```tsx
"use client"

import { Accordion, Span, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"

export const AccordionControlled = () => {
  const [value, setValue] = useState(["second-item"])
  return (
    <Stack gap="4">
      <Text fontWeight="medium">Expanded: {value.join(", ")}</Text>
      <Accordion.Root value={value} onValueChange={(e) => setValue(e.value)}>
        {items.map((item, index) => (
          <Accordion.Item key={index} value={item.value}>
            <Accordion.ItemTrigger>
              <Span flex="1">{item.title}</Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Stack>
  )
}

const items = [
  { value: "first-item", title: "First Item", text: "Some value 1..." },
  { value: "second-item", title: "Second Item", text: "Some value 2..." },
  { value: "third-item", title: "Third Item", text: "Some value 3..." },
]

```

### With Icon

Here's an example of rendering a custom icon in each accordion item.

```tsx
import { Accordion, Heading, Icon, Stack } from "@chakra-ui/react"
import { LuChartBarStacked, LuTags } from "react-icons/lu"

export const AccordionWithIcon = () => {
  return (
    <Stack width="full" maxW="400px">
      <Heading size="md">Product details</Heading>
      <Accordion.Root collapsible defaultValue={["info"]}>
        {items.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.ItemTrigger>
              <Icon fontSize="lg" color="fg.subtle">
                {item.icon}
              </Icon>
              {item.title}
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Stack>
  )
}

const items = [
  {
    value: "info",
    icon: <LuTags />,
    title: "Product Info",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
  {
    value: "stats",
    icon: <LuChartBarStacked />,
    title: "Stats",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
]

```

### Expand Multiple Items

Use the `multiple` prop to allow multiple items to be expanded at once.

```tsx
import { Accordion, Span } from "@chakra-ui/react"

export const AccordionWithMultiple = () => {
  return (
    <Accordion.Root multiple defaultValue={["b"]}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          <Accordion.ItemTrigger>
            <Span flex="1">{item.title}</Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3..." },
]

```

### Sizes

Use the `size` prop to change the size of the accordion.

```tsx
import { Accordion, For, Span, Stack, Text } from "@chakra-ui/react"

export const AccordionSizes = () => {
  return (
    <Stack gap="8">
      <For each={["sm", "md", "lg"]}>
        {(size) => (
          <Stack gap="2" key={size}>
            <Text fontWeight="semibold">{size}</Text>
            <Accordion.Root size={size} collapsible defaultValue={["b"]}>
              {items.map((item, index) => (
                <Accordion.Item key={index} value={item.value}>
                  <Accordion.ItemTrigger>
                    <Span flex="1">{item.title}</Span>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Stack>
        )}
      </For>
    </Stack>
  )
}

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3..." },
]

```

### Variants

Use the `variant` prop to change the visual style of the accordion. Values can
be either `outline`, `subtle`, `enclosed` or `plain`.

```tsx
import { Accordion, For, Span, Stack, Text } from "@chakra-ui/react"

export const AccordionVariants = () => {
  return (
    <Stack gap="8">
      <For each={["outline", "subtle", "enclosed", "plain"]}>
        {(variant) => (
          <Stack gap="2" key={variant}>
            <Text fontWeight="semibold">{variant}</Text>
            <Accordion.Root variant={variant} collapsible defaultValue={["b"]}>
              {items.map((item, index) => (
                <Accordion.Item key={index} value={item.value}>
                  <Accordion.ItemTrigger>
                    <Span flex="1">{item.title}</Span>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Stack>
        )}
      </For>
    </Stack>
  )
}

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3..." },
]

```

### Disabled Item

Pass the `disabled` prop to any `Accordion.Item` to prevent it from being
expanded or collapsed.

```tsx
import { Accordion, Span } from "@chakra-ui/react"

export const AccordionWithDisabledItem = () => {
  return (
    <Accordion.Root collapsible defaultValue={["b"]}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value} disabled={item.disabled}>
          <Accordion.ItemTrigger>
            <Span flex="1">{item.title}</Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3...", disabled: true },
]

```

### With Avatar

Here's an example of composing an accordion with an avatar.

```tsx
import { Accordion, Avatar, Badge, HStack } from "@chakra-ui/react"
import { LuTrophy } from "react-icons/lu"
import { LoremIpsum } from "react-lorem-ipsum"

export const AccordionWithAvatar = () => {
  return (
    <Accordion.Root collapsible defaultValue={["b"]}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.name}>
          <Accordion.ItemTrigger>
            <Avatar.Root shape="rounded">
              <Avatar.Image src={item.image} />
              <Avatar.Fallback name={item.name} />
            </Avatar.Root>
            <HStack flex="1">
              {item.name}{" "}
              {item.topRated && (
                <Badge colorPalette="green">
                  <LuTrophy />
                  Top Rated
                </Badge>
              )}
            </HStack>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.bio}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const items = [
  {
    name: "Alex",
    bio: <LoremIpsum />,
    image: "https://i.pravatar.cc/150?u=a",
    topRated: false,
  },
  {
    name: "Benji",
    bio: <LoremIpsum />,
    image: "https://i.pravatar.cc/150?u=b",
    topRated: true,
  },
  {
    name: "Charlie",
    bio: <LoremIpsum />,
    image: "https://i.pravatar.cc/150?u=c",
    topRated: false,
  },
]

```

### With Subtext

Here's an example of adding a subtext to an accordion item.

```tsx
import { Accordion, Stack, Text } from "@chakra-ui/react"
import { LoremIpsum } from "react-lorem-ipsum"

const items = [
  { value: "a", title: "First Item", text: <LoremIpsum p={1} /> },
  { value: "b", title: "Second Item", text: <LoremIpsum p={1} /> },
  { value: "c", title: "Third Item", text: <LoremIpsum p={1} /> },
]

export const AccordionWithSubtext = () => {
  return (
    <Accordion.Root collapsible>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          <Accordion.ItemTrigger>
            <Stack gap="1">
              <Text>{item.title}</Text>
              <Text fontSize="sm" color="fg.muted">
                Click to expand
              </Text>
            </Stack>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

```

### With Actions

Here's an example of adding actions to an accordion item trigger.

```tsx
import { AbsoluteCenter, Accordion, Box, Button, Span } from "@chakra-ui/react"
import LoremIpsum from "react-lorem-ipsum"

export const AccordionWithActions = () => {
  return (
    <Accordion.Root spaceY="4" variant="plain" collapsible defaultValue={["b"]}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          <Box position="relative">
            <Accordion.ItemTrigger>
              <Span flex="1">{item.title}</Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <AbsoluteCenter axis="vertical" insetEnd="0">
              <Button variant="subtle" colorPalette="blue">
                Action
              </Button>
            </AbsoluteCenter>
          </Box>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const items = [
  { value: "a", title: "First Item", text: <LoremIpsum /> },
  { value: "b", title: "Second Item", text: <LoremIpsum /> },
  { value: "c", title: "Third Item", text: <LoremIpsum /> },
]

```

### Styling Expanded Style

Pass the `_open` pseudo selector to the `Accordion.ItemTrigger` or
`Accordion.Item` to attach styles to it when expanded.

```tsx
import { Accordion, Span } from "@chakra-ui/react"

export const AccordionWithExpandedStyle = () => {
  return (
    <Accordion.Root collapsible defaultValue={["b"]}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          <Accordion.ItemTrigger px="3" _open={{ bg: "gray.subtle" }}>
            <Span flex="1">{item.title}</Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const items = [
  {
    value: "a",
    title: "First Item",
    text: "Click the accordion button to see a different style when expanded.",
  },
  {
    value: "b",
    title: "Second Item",
    text: "The trigger background changes to teal with white text when expanded.",
  },
  {
    value: "c",
    title: "Third Item",
    text: "You can use any style props with the _open pseudo selector.",
  },
]

```

## Guides

### Accessing Root State

Use `useAccordionContext` to access the accordion state at the root level:

```tsx
import { useAccordionContext } from "@chakra-ui/react"

const AccordionValueText = () => {
  const accordion = useAccordionContext()
  return <Box>Opened: {accordion.value.join(", ")}</Box>
}

// Usage
const Demo = () => (
  <Accordion.Root>
    <AccordionValueText />
    {/* ... accordion items */}
  </Accordion.Root>
)
```

### Accessing Item State

Use `useAccordionItemContext` to access the state of a specific accordion item:

```tsx
import { useAccordionItemContext } from "@chakra-ui/react"

const AccordionItemStatus = () => {
  const item = useAccordionItemContext()
  return (
    <Box color={item.open ? "green.500" : "gray.500"}>
      {item.open ? "Expanded" : "Collapsed"}
    </Box>
  )
}

// Usage
const Demo = () => (
  <Accordion.Root>
    <Accordion.Item value="item-1">
      <Accordion.ItemTrigger>
        <AccordionItemStatus />
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        <Accordion.ItemBody>Content</Accordion.ItemBody>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
)
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| collapsible | false | `boolean` | Whether an accordion item can be closed after it has been expanded. |
| lazyMount | false | `boolean` | Whether to enable lazy mounting |
| multiple | false | `boolean` | Whether multiple accordion items can be expanded at the same time. |
| orientation | "vertical" | `'horizontal' \| 'vertical'` | The orientation of the accordion items. |
| unmountOnExit | false | `boolean` | Whether to unmount on exit. |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | outline | `'outline' \| 'subtle' \| 'enclosed' \| 'plain'` | The variant of the component |
| size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| defaultValue | undefined | `string[]` | The initial value of the expanded accordion items.
Use when you don't need to control the value of the accordion. |
| disabled | undefined | `boolean` | Whether the accordion items are disabled |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{\n  root: string\n  item: (value: string) => string\n  itemContent: (value: string) => string\n  itemTrigger: (value: string) => string\n}>` | The ids of the elements in the accordion. Useful for composition. |
| onFocusChange | undefined | `(details: FocusChangeDetails) => void` | The callback fired when the focused accordion item changes. |
| onValueChange | undefined | `(details: ValueChangeDetails) => void` | The callback fired when the state of expanded/collapsed accordion items changes. |
| value | undefined | `string[]` | The controlled value of the expanded accordion items. |

### Item

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | undefined | `string` | The value of the accordion item. |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| disabled | undefined | `boolean` | Whether the accordion item is disabled. |

## Explorer

Explore the `Accordion` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.
