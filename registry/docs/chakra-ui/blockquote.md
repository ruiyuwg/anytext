# Blockquote

```tsx
import { Blockquote } from "@chakra-ui/react"

export const BlockquoteBasic = () => {
  return (
    <Blockquote.Root>
      <Blockquote.Content>
        If anyone thinks he is something when he is nothing, he deceives
        himself. Each one should test his own actions. Then he can take pride in
        himself, without comparing himself to anyone else.
      </Blockquote.Content>
    </Blockquote.Root>
  )
}

```

## Usage

```jsx
import { Blockquote } from "@chakra-ui/react"
```

```tsx
<Blockquote.Root>
  <Blockquote.Content cite="https://" />
  <Blockquote.Caption>
    <cite>Uzumaki Naruto</cite>
  </Blockquote.Caption>
</Blockquote.Root>
```

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

## Examples

### With Cite

To provide reference about the blockquote:

- pass the `cite` prop to `Blockquote.Content` pointing to the quote url
- render the `Blockquote.Caption` component to display name of quote author

```tsx
import { Blockquote } from "@chakra-ui/react"

export const BlockquoteWithCite = () => {
  return (
    <Blockquote.Root>
      <Blockquote.Content cite="Uzumaki Naruto">
        If anyone thinks he is something when he is nothing, he deceives
        himself. Each one should test his own actions. Then he can take pride in
        himself, without comparing himself to anyone else.
      </Blockquote.Content>
      <Blockquote.Caption>
        — <cite>Uzumaki Naruto</cite>
      </Blockquote.Caption>
    </Blockquote.Root>
  )
}

```

### Colors

Use the `colorPalette` prop to change the color of the blockquote.

```tsx
import { Blockquote, Stack, Text } from "@chakra-ui/react"

export const BlockquoteWithColors = () => {
  return (
    <Stack gap="5" align="flex-start">
      {["gray","red","green","blue","teal","pink","purple","cyan","orange","yellow"].map((colorPalette) => (
        <Stack
          align="center"
          key={colorPalette}
          direction="row"
          gap="10"
          px="4"
          width="full"
        >
          <Text minW="8ch">{colorPalette}</Text>
          <Blockquote.Root colorPalette={colorPalette}>
            <Blockquote.Content cite="Uzumaki Naruto">
              If anyone thinks he is something when he is nothing, he deceives
              himself. Each one should test his own actions. Then he can take
              pride in himself, without comparing himself to anyone else.
            </Blockquote.Content>
            <Blockquote.Caption>
              — <cite>Uzumaki Naruto</cite>
            </Blockquote.Caption>
          </Blockquote.Root>
        </Stack>
      ))}
    </Stack>
  )
}

```

### Variants

Use the `variant` prop to change the visual style of the blockquote.

```tsx
import { Blockquote, Stack } from "@chakra-ui/react"

export const BlockquoteWithVariants = () => {
  return (
    <Stack gap="8">
      <Blockquote.Root variant="subtle">
        <Blockquote.Content>
          If anyone thinks he is something when he is nothing, he deceives
          himself. Each one should test his own actions. Then he can take pride
          in himself, without comparing himself to anyone else.
        </Blockquote.Content>
      </Blockquote.Root>
      <Blockquote.Root variant="solid">
        <Blockquote.Content>
          If anyone thinks he is something when he is nothing, he deceives
          himself. Each one should test his own actions. Then he can take pride
          in himself, without comparing himself to anyone else.
        </Blockquote.Content>
      </Blockquote.Root>
    </Stack>
  )
}

```

### Icon

Here's an example of how to compose the `Float` and `BlockquoteIcon` to show an
icon on the blockquote. The default icon is a double quote.

```tsx
import { Blockquote, Float } from "@chakra-ui/react"

export const BlockquoteWithIcon = () => {
  return (
    <Blockquote.Root variant="plain" colorPalette="teal">
      <Float placement="top-start" offsetY="2">
        <Blockquote.Icon />
      </Float>
      <Blockquote.Content cite="Uzumaki Naruto">
        If anyone thinks he is something when he is nothing, he deceives
        himself. Each one should test his own actions. Then he can take pride in
        himself, without comparing himself to anyone else.
      </Blockquote.Content>
      <Blockquote.Caption>
        — <cite>Uzumaki Naruto</cite>
      </Blockquote.Caption>
    </Blockquote.Root>
  )
}

```

Alternatively, you can render a custom icon.

```tsx
import { Blockquote, Circle, Float } from "@chakra-ui/react"
import { LuQuote } from "react-icons/lu"

export const BlockquoteWithCustomIcon = () => {
  return (
    <Blockquote.Root colorPalette="blue" ps="8">
      <Float placement="middle-start">
        <Circle bg="blue.600" size="8" color="white">
          <LuQuote />
        </Circle>
      </Float>
      <Blockquote.Content cite="Uzumaki Naruto">
        If anyone thinks he is something when he is nothing, he deceives
        himself. Each one should test his own actions. Then he can take pride in
        himself, without comparing himself to anyone else.
      </Blockquote.Content>
      <Blockquote.Caption>
        — <cite>Uzumaki Naruto</cite>
      </Blockquote.Caption>
    </Blockquote.Root>
  )
}

```

### Justify

Use the `justify` prop to change the alignment of the blockquote.

```tsx
import { Blockquote, For, HStack, Stack, Text } from "@chakra-ui/react"

export const BlockquoteWithJustify = () => {
  return (
    <Stack gap="20">
      <For each={["start", "center", "end"]}>
        {(justify) => (
          <HStack key={justify} maxW="xl">
            <Text color="fg.muted" minW="6rem">
              {justify}
            </Text>
            <Blockquote.Root variant="plain" justify={justify}>
              <Blockquote.Content cite="Uzumaki Naruto">
                If anyone thinks he is something when he is nothing, he deceives
                himself. Each one should test his own actions. Then he can take
                pride in himself, without comparing himself to anyone else.
              </Blockquote.Content>
              <Blockquote.Caption>
                — <cite>Uzumaki Naruto</cite>
              </Blockquote.Caption>
            </Blockquote.Root>
          </HStack>
        )}
      </For>
    </Stack>
  )
}

```

### With Avatar

Here's an example of how to compose the `Blockquote`, `Avatar` and `Float`
components to create a stunning testimonial component.

```tsx
import { Avatar, Blockquote, Float, HStack, Span } from "@chakra-ui/react"

export const BlockquoteWithAvatar = () => {
  return (
    <Blockquote.Root bg="bg.subtle" padding="8">
      <Float placement="bottom-end" offset="10">
        <Blockquote.Icon opacity="0.4" boxSize="10" rotate="180deg" />
      </Float>
      <Blockquote.Content cite="Uzumaki Naruto">
        If anyone thinks he is something when he is nothing, he deceives
        himself. Each one should test his own actions. Then he can take pride in
        himself, without comparing himself to anyone else.
      </Blockquote.Content>
      <Blockquote.Caption>
        <cite>
          <HStack mt="2" gap="3">
            <Avatar.Root size="sm">
              <Avatar.Fallback name="Emily Jones" />
              <Avatar.Image src="https://i.pravatar.cc/150?u=re" />
            </Avatar.Root>
            <Span fontWeight="medium">Emily Jones</Span>
          </HStack>
        </cite>
      </Blockquote.Caption>
    </Blockquote.Root>
  )
}

```

### Closed Component

Here's an example of how to create a closed component composition

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add blockquote
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| justify | start | `'start' \| 'center' \| 'end'` | The justify of the component |
| variant | subtle | `'subtle' \| 'solid' \| 'plain'` | The variant of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |

## Explorer

Explore the `Blockquote` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.
