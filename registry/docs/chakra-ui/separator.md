# Separator

```tsx
import { Separator, Stack, Text } from "@chakra-ui/react"

export const SeparatorBasic = () => {
  return (
    <Stack>
      <Text>First</Text>
      <Separator />
      <Text>Second</Text>
      <Separator />
      <Text>Third</Text>
    </Stack>
  )
}

```

## Usage

```jsx
import { Separator } from "@chakra-ui/react"
```

```jsx
<Separator />
```

## Examples

### Variants

Use the `variant` prop to change the appearance of the separator.

```tsx
import { Separator, Stack } from "@chakra-ui/react"

export const SeparatorWithVariants = () => {
  return (
    <Stack>
      <Separator variant="solid" />
      <Separator variant="dashed" />
      <Separator variant="dotted" />
    </Stack>
  )
}

```

### Sizes

Use the `size` prop to change the size of the separator.

```tsx
import { Separator, Stack } from "@chakra-ui/react"

export const SeparatorWithSizes = () => {
  return (
    <Stack gap="4">
      <Separator size="xs" />
      <Separator size="sm" />
      <Separator size="md" />
      <Separator size="lg" />
    </Stack>
  )
}

```

### Label

Use the `label` prop to add a label to the separator.

```tsx
import { HStack, Separator, Stack, Text } from "@chakra-ui/react"

export const SeparatorWithLabel = () => {
  return (
    <Stack>
      <HStack>
        <Text flexShrink="0">Label (start)</Text>
        <Separator flex="1" />
      </HStack>

      <HStack>
        <Separator flex="1" />
        <Text flexShrink="0">Label (end)</Text>
      </HStack>

      <HStack>
        <Separator flex="1" />
        <Text flexShrink="0">Label (center)</Text>
        <Separator flex="1" />
      </HStack>
    </Stack>
  )
}

```

### Vertical

Use the `orientation` prop to change the orientation of the separator.

```tsx
import { HStack, Separator, Text } from "@chakra-ui/react"

export const SeparatorVertical = () => {
  return (
    <HStack gap="4">
      <Text>First</Text>
      <Separator orientation="vertical" height="4" />
      <Text>Second</Text>
    </HStack>
  )
}

```

### Responsive Orientation

Here's an example of how to change the `orientation` property based on the
screen size.

```tsx
import { Separator, Stack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const SeparatorWithResponsiveOrientation = () => {
  return (
    <Stack direction={{ base: "row", md: "column" }} align="stretch">
      <Box>First</Box>
      <Separator orientation={{ base: "vertical", sm: "horizontal" }} />
      <Box>Second</Box>
    </Stack>
  )
}

```

When the `orientation` prop is a responsive value, the separator will be
rendered without `aria-orientation` and the role is set to `presentation`.

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | solid | `'solid' \| 'dashed' \| 'dotted'` | The variant of the component |
| orientation | horizontal | `'vertical' \| 'horizontal'` | The orientation of the component |
| size | sm | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
