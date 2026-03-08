# AbsoluteCenter

```tsx
import { AbsoluteCenter, Box } from "@chakra-ui/react"

export const AbsoluteCenterBasic = () => {
  return (
    <Box position="relative" h="100px" bg="bg.muted" borderRadius="md">
      <AbsoluteCenter>
        <Box bg="bg.emphasized" px="4" py="2" borderRadius="md" color="fg">
          Centered Content
        </Box>
      </AbsoluteCenter>
    </Box>
  )
}

```

## Usage

The `AbsoluteCenter` component uses the `position: absolute` strategy to center
its child element relative to its parent.

> The parent element must have `position: relative` for proper positioning.

```jsx
import { AbsoluteCenter } from "@chakra-ui/react"
```

```jsx
<Box position="relative" h="100px">
  <AbsoluteCenter>Centered Content</AbsoluteCenter>
</Box>
```

## Examples

### Axis Control

Control which axis to center on using the `axis` prop. Options are `horizontal`,
`vertical`, or `both` (default).

```tsx
import { AbsoluteCenter, Box, For, Text, VStack } from "@chakra-ui/react"

export const AbsoluteCenterWithAxis = () => {
  return (
    <VStack gap="6" align="stretch">
      <For each={["horizontal", "vertical", "both"]}>
        {(axis) => (
          <VStack gap="2" key={axis}>
            <Text fontWeight="medium">{`<AbsoluteCenter axis="${axis}" />`}</Text>
            <Box position="relative" h="80px" outline="1px solid red">
              <AbsoluteCenter axis={axis}>
                <Box
                  bg="blue.solid"
                  px="3"
                  py="1"
                  borderRadius="sm"
                  color="white"
                >
                  {axis}
                </Box>
              </AbsoluteCenter>
            </Box>
          </VStack>
        )}
      </For>
    </VStack>
  )
}

```

### With Content

Use `AbsoluteCenter` with various content types like icons, badges, and status
indicators.

```tsx
import { AbsoluteCenter, Box } from "@chakra-ui/react"
import { LuHeart } from "react-icons/lu"

export const AbsoluteCenterWithContent = () => {
  return (
    <Box
      position="relative"
      w="100px"
      h="100px"
      bg="bg.muted"
      borderRadius="md"
    >
      <AbsoluteCenter>
        <Box
          bg="red.solid"
          color="white"
          p="3"
          borderRadius="full"
          fontSize="xl"
        >
          <LuHeart />
        </Box>
      </AbsoluteCenter>
    </Box>
  )
}

```

### Overlay Usage

Perfect for creating loading overlays or modal-like content that needs to be
centered over existing content.

```tsx
import { AbsoluteCenter, Box, HStack, Spinner, Text } from "@chakra-ui/react"

const Overlay = () => (
  <AbsoluteCenter bg="bg/80" backdropFilter="blur(2px)" rounded="md" p="4">
    <HStack gap="3">
      <Spinner size="sm" colorPalette="blue" />
      <Text fontSize="sm" color="fg.muted">
        Loading...
      </Text>
    </HStack>
  </AbsoluteCenter>
)

export const AbsoluteCenterWithOverlay = () => {
  return (
    <Box position="relative" h="120px" bg="bg.muted" rounded="md" p="10">
      <Box opacity="0.5" aria-busy="true">
        Some content that is being loaded...
      </Box>
      <Overlay />
    </Box>
  )
}

```

### RTL Support

`AbsoluteCenter` automatically handles right-to-left (RTL) layouts by adjusting
the horizontal positioning and transforms appropriately.

```tsx
import {
  AbsoluteCenter,
  Box,
  For,
  HStack,
  Span,
  Text,
  VStack,
} from "@chakra-ui/react"

export const AbsoluteCenterWithRtl = () => {
  return (
    <VStack gap="6" align="stretch">
      <For each={["horizontal", "vertical", "both"]}>
        {(axis) => (
          <VStack gap="2" dir="rtl" key={axis}>
            <Text fontWeight="medium">RTL ({axis})</Text>
            <Box
              position="relative"
              h="100px"
              bg="bg.muted"
              borderRadius="md"
              outline="1px solid red"
            >
              <AbsoluteCenter axis={axis}>
                <HStack
                  bg="green.solid"
                  color="white"
                  px="4"
                  py="2"
                  borderRadius="md"
                  gap="2"
                >
                  <Span>البداية</Span>
                </HStack>
              </AbsoluteCenter>
            </Box>
          </VStack>
        )}
      </For>
    </VStack>
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| axis | undefined | `'horizontal' \| 'vertical' \| 'both' \| undefined` | undefined |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
