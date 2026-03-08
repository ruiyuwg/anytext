# Bleed

```tsx
import { Bleed, Box, Heading, Stack, Text } from "@chakra-ui/react"

export const BleedBasic = () => {
  return (
    <Box padding="10" rounded="sm" borderWidth="1px">
      <Bleed inline="10">
        <Box height="20">Bleed</Box>
      </Bleed>

      <Stack mt="6">
        <Heading size="md">Some Heading</Heading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Stack>
    </Box>
  )
}

```

## Usage

```jsx
import { Bleed } from "@chakra-ui/react"
```

```jsx
<Bleed>
  <div />
</Bleed>
```

## Examples

### Vertical

Use the `block` prop to make the element bleed vertically.

```tsx
import { Bleed, Box } from "@chakra-ui/react"

export const BleedVertical = () => {
  return (
    <Box padding="10" rounded="sm" borderWidth="1px">
      <Bleed block="10">
        <Box height="20">Bleed</Box>
      </Bleed>
    </Box>
  )
}

```

### Specific Direction

Use the `inlineStart`, `inlineEnd`, `blockStart`, and `blockEnd` props to make
the element bleed in a specific direction.

```tsx
import { Bleed, Box, Stack } from "@chakra-ui/react"

export const BleedWithDirection = () => {
  return (
    <Stack gap="8">
      <Box padding="8" rounded="sm" borderWidth="1px">
        <Bleed inlineStart="8">
          <Box height="8">inlineStart</Box>
        </Bleed>
      </Box>

      <Box padding="8" rounded="sm" borderWidth="1px">
        <Bleed inlineEnd="8">
          <Box height="8">inlineEnd</Box>
        </Bleed>
      </Box>

      <Box padding="8" rounded="sm" borderWidth="1px">
        <Bleed blockStart="8">
          <Box height="8">blockStart</Box>
        </Bleed>
      </Box>

      <Box padding="8" rounded="sm" borderWidth="1px">
        <Bleed blockEnd="8">
          <Box height="8">blockEnd</Box>
        </Bleed>
      </Box>
    </Stack>
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| inline | undefined | `SystemStyleObject['marginInline'] \| undefined` | The negative margin on the x-axis |
| block | undefined | `SystemStyleObject['marginBlock'] \| undefined` | The negative margin on the y-axis |
| inlineStart | undefined | `SystemStyleObject['marginInlineStart'] \| undefined` | The negative margin on the inline-start axis |
| inlineEnd | undefined | `SystemStyleObject['marginInlineEnd'] \| undefined` | The negative margin on the inline-end axis |
| blockStart | undefined | `SystemStyleObject['marginBlockStart'] \| undefined` | The negative margin on the block-start axis |
| blockEnd | undefined | `SystemStyleObject['marginBlockEnd'] \| undefined` | The negative margin on the block-end axis |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
