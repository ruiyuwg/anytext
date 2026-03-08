# Stack

```tsx
import { Stack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const StackBasic = () => {
  return (
    <Stack>
      <Box h="20" />
      <Box h="20" />
      <Box h="20" />
    </Stack>
  )
}

```

## Usage

By default, Stack applies `flex-direction: column` and `gap: 8px` to its
children.

```jsx
import { HStack, Stack, VStack } from "@chakra-ui/react"
```

```jsx
<Stack>
  <div />
  <div />
</Stack>
```

## Examples

### Horizontal

Use the `direction` prop to change the direction of the stack.

```tsx
import { Stack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const StackHorizontal = () => {
  return (
    <Stack direction="row" h="20">
      <Box />
      <Box />
      <Box />
    </Stack>
  )
}

```

### HStack

Alternatively, you can use the `HStack` to create a horizontal stack and align
its children horizontally.

```tsx
import { HStack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const StackWithHstack = () => {
  return (
    <HStack>
      <Box h="10" />
      <Box h="5" />
      <Box h="20" />
    </HStack>
  )
}

```

### VStack

Use the `VStack` to create a vertical stack and align its children vertically.

```tsx
import { VStack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const StackWithVstack = () => {
  return (
    <VStack>
      <Box w="50%" h="20" />
      <Box w="25%" h="20" />
      <Box w="100%" h="20" />
    </VStack>
  )
}

```

### Separator

Use the `separator` prop to add a separator between the stack items.

```tsx
import { Stack, StackSeparator } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const StackWithSeparator = () => {
  return (
    <Stack separator={<StackSeparator />}>
      <Box h="20" />
      <Box h="20" />
      <Box h="20" />
    </Stack>
  )
}

```

### Responsive Direction

Use the `direction` prop to change the direction of the stack responsively.

```tsx
import { Stack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const StackWithResponsiveDirection = () => {
  return (
    <Stack direction={{ base: "column", md: "row" }} gap="10">
      <Box boxSize="20" />
      <Box boxSize="20" />
      <Box boxSize="20" />
    </Stack>
  )
}

```
