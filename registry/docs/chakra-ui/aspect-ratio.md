# Aspect Ratio

```tsx
import { AspectRatio, Center } from "@chakra-ui/react"

export const AspectRatioBasic = () => {
  return (
    <AspectRatio bg="bg.muted" ratio={16 / 9}>
      <Center fontSize="xl">16 / 9</Center>
    </AspectRatio>
  )
}

```

## Usage

The `ratio` prop overrides the original aspect ratios of `AspectRatio`'s child
content, accepting only numeric values, not strings.

```jsx
import { AspectRatio } from "@chakra-ui/react"
```

```jsx
<AspectRatio ratio={16 / 9}>
  <iframe
    title="naruto"
    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
    allowFullScreen
  />
</AspectRatio>
```

## Examples

### Image

Here's how to embed an image that has a 4 by 3 aspect ratio.

```tsx
import { AspectRatio, Image } from "@chakra-ui/react"

export const AspectRatioWithImage = () => {
  return (
    <AspectRatio maxW="400px" ratio={4 / 3}>
      <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
    </AspectRatio>
  )
}

```

### Video

Embed a video using an iframe, and use the `ratio` prop to override the video's
original aspect ratio.

```tsx
import { AspectRatio } from "@chakra-ui/react"

export const AspectRatioWithVideo = () => {
  return (
    <AspectRatio maxW="560px" ratio={1}>
      <iframe
        title="naruto"
        src="https://www.youtube.com/embed/QhBnZ6NPOY0"
        allowFullScreen
      />
    </AspectRatio>
  )
}

```

### Google Map

Here's how to embed a responsive Google map using `AspectRatio`.

```tsx
import { AspectRatio } from "@chakra-ui/react"

export const AspectRatioWithMap = () => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
    </AspectRatio>
  )
}

```

### Responsive

Here's an example of applying a responsive aspect ratio to a box.

```tsx
import { AspectRatio } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const AspectRatioResponsive = () => (
  <AspectRatio maxWidth="300px" ratio={{ base: 1, md: 16 / 9 }}>
    <Box>Box</Box>
  </AspectRatio>
)

```

## Guide

### Aspect Ratio Token

Chakra UI also provides
[predefined aspect ratio tokens](/docs/theming/aspect-ratios) out of the box,
including `square`, `landscape`, `portrait`, `wide`, `ultrawide`, and `golden`
that can only be used in the `aspectRatio` CSS prop.

They cannot be used with the `ratio` prop that `AspectRatio` accepts.

```tsx
<Box aspectRatio="square" />
```

## Props

These props can be passed to the `AspectRatio` component.

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| ratio | undefined | `ConditionalValue<number> \| undefined` | The aspect ratio of the Box. Common values are:

`21/9`, `16/9`, `9/16`, `4/3`, `1.85/1` |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
