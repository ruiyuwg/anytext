# Spinner

```tsx
import { Spinner } from "@chakra-ui/react"

export const SpinnerBasic = () => {
  return <Spinner size="sm" />
}

```

## Usage

```jsx
import { Spinner } from "@chakra-ui/react"
```

```jsx
<Spinner />
```

## Examples

### Sizes

Use the `size` prop to change the size of the spinner.

```tsx
import { HStack, Spinner } from "@chakra-ui/react"

export const SpinnerWithSizes = () => {
  return (
    <HStack gap="5">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </HStack>
  )
}

```

### Colors

Use the `colorPalette` prop to change the color scheme of the spinner.

```tsx
import { Spinner, Stack } from "@chakra-ui/react"

export const SpinnerWithColors = () => {
  return (
    <Stack gap="2" align="flex-start">
      {["gray","red","green","blue","teal","pink","purple","cyan","orange","yellow"].map((colorPalette) => (
        <Stack
          align="center"
          key={colorPalette}
          direction="row"
          gap="10"
          px="4"
        >
          <Spinner
            size="sm"
            color="colorPalette.600"
            colorPalette={colorPalette}
          />
          <Spinner
            size="md"
            color="colorPalette.600"
            colorPalette={colorPalette}
          />
          <Spinner
            size="lg"
            color="colorPalette.600"
            colorPalette={colorPalette}
          />
        </Stack>
      ))}
    </Stack>
  )
}

```

### Custom Color

Use the `color` prop to pass a custom color to the spinner.

```tsx
import { Spinner } from "@chakra-ui/react"

export const SpinnerCustomColor = () => {
  return <Spinner color="teal.500" size="lg" />
}

```

### Track Color

Use the `--spinner-track-color` variable to change the color of the spinner's
track.

```tsx
import { Spinner } from "@chakra-ui/react"

export const SpinnerWithTrackColor = () => (
  <Spinner
    color="red.500"
    css={{ "--spinner-track-color": "colors.gray.200" }}
  />
)

```

### Custom Speed

Use the `animationDuration` prop to change the speed of the spinner.

```tsx
import { Spinner } from "@chakra-ui/react"

export const SpinnerWithCustomSpeed = () => (
  <Spinner color="blue.500" animationDuration="0.8s" />
)

```

### Thickness

Use the `borderWidth` prop to change the thickness of the spinner.

```tsx
import { Spinner } from "@chakra-ui/react"

export const SpinnerWithCustomThickness = () => (
  <Spinner color="blue.500" borderWidth="4px" />
)

```

### Label

Compose the spinner with a label to provide additional context.

```tsx
import { Spinner, Text, VStack } from "@chakra-ui/react"

export const SpinnerWithLabel = () => {
  return (
    <VStack colorPalette="teal">
      <Spinner color="colorPalette.600" />
      <Text color="colorPalette.600">Loading...</Text>
    </VStack>
  )
}

```

### Overlay

Compose spinner with the `AbsoluteCenter` component to overlay the spinner on
top of another component.

```tsx
import { Box, Center, Heading, Spinner, Text } from "@chakra-ui/react"

export const SpinnerWithOverlay = () => {
  return (
    <Box position="relative" aria-busy="true" userSelect="none">
      <Heading>Some heading text</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
        consectetur libero, id ultricies urna. Sed ac consectetur libero, id
        fames ac ante ipsum primis in faucibus.
      </Text>
      <Box pos="absolute" inset="0" bg="bg/80">
        <Center h="full">
          <Spinner color="teal.500" />
        </Center>
      </Box>
    </Box>
  )
}

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'inherit' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

# Splitter

```tsx
import { Center, Splitter } from "@chakra-ui/react"

export const SplitterBasic = () => {
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

## Usage

```jsx
import { Splitter } from "@chakra-ui/react"
```

```jsx
<Splitter.Root>
  <Splitter.Panel />
  <Splitter.ResizeTrigger>
    <Splitter.ResizeTriggerSeparator />
    <Splitter.ResizeTriggerIndicator />
  </Splitter.ResizeTrigger>
  <Splitter.Panel />
</Splitter.Root>
```

## Shortcuts

The `Splitter` component provides shortcuts for common use cases.

### SplitterResizeTrigger

The `Splitter.ResizeTrigger` renders the `Splitter.ResizeTriggerSeparator` and
`Splitter.ResizeTriggerIndicator` within it by default.

Explicitly writing this:

```jsx
<Splitter.ResizeTrigger id="a:b" />
```

is shorthand for the following if you don't need to customize the separator or
indicator:

```jsx
<Splitter.ResizeTrigger id="a:b">
  <Splitter.ResizeTriggerSeparator />
  <Splitter.ResizeTriggerIndicator />
</Splitter.ResizeTrigger>
```
