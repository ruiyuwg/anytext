# Kbd

```tsx
import { Kbd } from "@chakra-ui/react"

export const KbdBasic = () => {
  return Shift + Tab
}

```

## Usage

```jsx
import { Kbd } from "@chakra-ui/react"
```

```jsx
F12
```

## Examples

### Combinations

Render `Kbd` to showcase key combinations

```tsx
import { HStack, Kbd } from "@chakra-ui/react"

export const KbdWithCombinations = () => {
  return (
    
      ctrl+shift+del
    
  )
}

```

### Function Keys

Here's an example of using `Kbd` to showcase function keys

```tsx
import { HStack, Kbd } from "@chakra-ui/react"

export const KbdFunctionKeys = () => {
  return (
    
      ⌘
      ⌥
      ⇧
      ⌃
    
  )
}

```

### Variants

Use the `variant` prop to change the appearance of the `Kbd` component

```tsx
import { HStack, Kbd } from "@chakra-ui/react"

export const KbdWithVariants = () => {
  return (
    
      Shift + Tab
      Shift + Tab
      Shift + Tab
      Shift + Tab
    
  )
}

```

### Sizes

Use the `size` prop to change the size of the `Kbd` component

```tsx
import { HStack, Kbd } from "@chakra-ui/react"

export const KbdWithSizes = () => {
  return (
    
      Shift + Tab
      Shift + Tab
      Shift + Tab
    
  )
}

```

### Within Text

Use `Kbd` within text to highlight key combinations

```tsx
import { Kbd, Text } from "@chakra-ui/react"

export const KbdWithinText = () => {
  return (
    
      Press F12 to open DevTools
    
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | raised | `'raised' \| 'outline' \| 'subtle' \| 'plain'` | The variant of the component |
| size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

# Link Overlay

```tsx
import { Heading, Link, LinkOverlay, Stack, Text } from "@chakra-ui/react"

export const LinkOverlayBasic = () => {
  return (
    
      Wanna try it out?
      
        This entire area is a link. Click it to see the effect.
      
      
        Click me
      
    
  )
}

```

## Usage

The `LinkOverlay` component provides a semantic way to link an entire component
or card.

```jsx
import { LinkBox, LinkOverlay } from "@chakra-ui/react"
```

```jsx

  

```

## Examples

### Article

Here's an example of using `LinkOverlay` to link an entire article.

```tsx
import {
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Span,
  Text,
} from "@chakra-ui/react"

export const LinkOverlayArticle = () => {
  return (
    
      
        13 days ago
      
      
        Chakra V3 Workshop
      
      
        Catch up on whats been cooking at Chakra UI and explore some of the
        popular community resources.
      
      
        Inner Link
      
    
  )
}

```

### Custom Link

Use the `asChild` prop to add support for custom Link component like `next/link`
or react router's `Link`

```jsx
import { LinkBox, LinkOverlay } from "@chakra-ui/react"
import NextLink from "next/link"

function Example() {
  return (
    
      
        
          Blog Post Title
        
      
      Some blog post content
      Some inner link
    
  )
}
```

## Caveat

One of the side-effects of this technique is that the content can't be
"selectable" (i.e. with a pointing device), however, this seems to be pretty
uncommon in web design.
