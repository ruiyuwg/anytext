# Text

```tsx
import { Text } from "@chakra-ui/react"

export const TextBasic = () => {
  return <Text>Sphinx of black quartz, judge my vow.</Text>
}

```

## Usage

```jsx
import { Text } from "@chakra-ui/react"
```

```jsx
<Text>This is the text component</Text>
```

## Examples

### Sizes

Use the `fontSize` or `textStyle` prop to change the size of the text.

```tsx
import { Stack, Text } from "@chakra-ui/react"

export const TextWithSizes = () => {
  return (
    <Stack>
      <Text textStyle="xs">Chakra</Text>
      <Text textStyle="sm">Chakra</Text>
      <Text textStyle="md">Chakra</Text>
      <Text textStyle="lg">Chakra</Text>
      <Text textStyle="xl">Chakra</Text>
      <Text textStyle="2xl">Chakra</Text>
      <Text textStyle="3xl">Chakra</Text>
      <Text textStyle="4xl">Chakra</Text>
      <Text textStyle="5xl">Chakra</Text>
      <Text textStyle="6xl">Chakra</Text>
      <Text textStyle="7xl">Chakra</Text>
    </Stack>
  )
}

```

### Weights

Use the `fontWeight` prop to change the weight of the text.

```tsx
import { Stack, Text } from "@chakra-ui/react"

export const TextWithWeights = () => {
  return (
    <Stack>
      <Text fontWeight="light">Sphinx of black quartz, judge my vow.</Text>
      <Text fontWeight="normal">Sphinx of black quartz, judge my vow.</Text>
      <Text fontWeight="medium">Sphinx of black quartz, judge my vow.</Text>
      <Text fontWeight="semibold">Sphinx of black quartz, judge my vow.</Text>
      <Text fontWeight="bold">Sphinx of black quartz, judge my vow.</Text>
    </Stack>
  )
}

```

### Truncation

Use the `truncate` prop to truncate the text after a single line.

```tsx
import { Flex, Text } from "@chakra-ui/react"

export const TextWithTruncate = () => {
  return (
    <Flex maxW="300px">
      <Text truncate>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </Flex>
  )
}

```

### Line Clamp

Use the `lineClamp` prop to truncate the text after a certain number of lines.

```tsx
import { Flex, Text } from "@chakra-ui/react"

export const TextWithLineClamp = () => {
  return (
    <Flex maxW="300px">
      <Text lineClamp="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </Flex>
  )
}

```

### Ref

Here's how to access the underlying element reference

```tsx
const Demo = () => {
  const ref = useRef<HTMLParagraphElement | null>(null)
  return <Text ref={ref}>This is the text component</Text>
}
```
