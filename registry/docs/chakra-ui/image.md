# Image

```tsx
import { Image } from "@chakra-ui/react"

export const ImageBasic = () => (
  
)

```

## Usage

```js
import { Image } from "@chakra-ui/react"
```

```jsx
```

## Examples

### Height

Use the `height` prop to change the height of the image component.

```tsx
import { Image } from "@chakra-ui/react"

export const ImageWithHeight = () => {
  return (
    <Image
      height="200px"
      src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3"
    />
  )
}

```

### Circular

Here's an example of how to render a circular image.

```tsx
import { Image } from "@chakra-ui/react"

export const ImageCircular = () => (
  <Image
    src="https://bit.ly/naruto-sage"
    boxSize="150px"
    borderRadius="full"
    fit="cover"
    alt="Naruto Uzumaki"
  />
)

```

### Aspect Ratio

Use the `aspectRatio` prop to change the aspect ratio of the image component.

```tsx
import { Image } from "@chakra-ui/react"

export const ImageWithAspectRatio = () => {
  return (
    <Image
      src="https://wallpapercave.com/uwp/uwp4261619.png"
      alt="Naruto vs Sasuke"
      aspectRatio={4 / 3}
      width="300px"
    />
  )
}

```

### Fit

By default, the image applies `object-fit: cover`. Use the `fit` prop to change
the fit of the image component.

```tsx
import { Image } from "@chakra-ui/react"

export const ImageWithFit = () => (
  <Image
    border="1px solid red"
    rounded="md"
    h="200px"
    w="300px"
    fit="contain"
    src="https://i.pravatar.cc/300?img=2"
  />
)

```

### HTML Width and Height

Use the `htmlWidth` and `htmlHeight` props to set the native width and height of
the image component.

```tsx
import { Image } from "@chakra-ui/react"

export const ImageWithHtmlHeight = () => {
  return (
    <Image
      htmlWidth="400px"
      htmlHeight="400px"
      src="https://i.pravatar.cc/400?u=1"
    />
  )
}

```

### Next.js Image

Use the `asChild` prop to render the image as a child of the `Image` component.

```jsx
import { Image } from "@chakra-ui/react";
import NextImage from "next/image";

const Demo = () => {
  return (
    
      
    
  );
};
```

## Props

The `Image` component supports all native props for the `img` element.
