# Heading

```tsx
import { Heading } from "@chakra-ui/react"

export const HeadingBasic = () => {
  return The quick brown fox jumps over the lazy dog
}

```

## Usage

```js
import { Heading } from "@chakra-ui/react"
```

```jsx
I'm a Heading
```

## Examples

### Sizes

Use the `size` prop to change the size of the heading component.

```tsx
import { Heading, Stack } from "@chakra-ui/react"

export const HeadingWithSizes = () => {
  return (
    
      Heading (sm)
      Heading (md)
      Heading (lg)
      Heading (xl)
      Heading (2xl)
      Heading (3xl)
      Heading (4xl)
      Heading (5xl)
      Heading (6xl)
    
  )
}

```

### Highlight

Compose the `Heading` component with the `Highlight` component to highlight
text.

```tsx
import { Heading, Highlight, Stack, Text } from "@chakra-ui/react"

export const HeadingWithHighlight = () => {
  return (
    
      
        
          Create accessible React apps with speed
        
      
      
        Chakra UI is a simple, modular and accessible component library that
        gives you the building blocks you need.
      
    
  )
}

```

### As another element

Use the `as` prop to render the heading as another HTML element.

```tsx
import { Heading, Stack } from "@chakra-ui/react"

export const HeadingWithAsProp = () => {
  return (
    
      Level 1
      Level 2
      Level 3
    
  )
}

```

### Weights

Use the `fontWeight` prop to change the weight of the heading component.

```tsx
import { Heading, Stack } from "@chakra-ui/react"

export const HeadingWithWeights = () => {
  return (
    
      Normal
      Medium
      Semibold
      Bold
    
  )
}

```

### Composition

Use the `Heading` component to compose other components.

```tsx
import { Button, Heading, Stack, Text } from "@chakra-ui/react"
import { LuArrowRight } from "react-icons/lu"

export const HeadingWithComposition = () => {
  return (
    
      Modern payments for Stores
      
        PayMe helps startups get paid by anyone, anywhere in the world
      
      
        Create account 
      
    
  )
}

```

## Customization

:::info

After customizing the recipe, run the CLI typegen command to regenerate the
types. See the [CLI docs](/docs/get-started/cli#chakra-typegen) for how to run
typegen in postinstall, CI, and monorepos.

```bash
npx @chakra-ui/cli typegen
```

:::

To override the `fontSize`, we recommend using the `textStyle` prop since it
considers the line height and letter spacing as well.

### Changing default styles

Here's an example of customizing the `Heading` component.

```tsx title="components/ui/provider.tsx"
import { createSystem, defaultConfig, defineRecipe } from "@chakra-ui/react"

const headingRecipe = defineRecipe({
  base: {
    fontWeight: "normal",
    textStyle: "4xl",
  },
})

const system = createSystem(defaultConfig, {
  theme: {
    recipes: { heading: headingRecipe },
  },
})
```

### Changing heading font globally

To change the default heading font, set the `fonts.heading` token in your theme.

```tsx title="components/ui/provider.tsx"
import { createSystem, defaultConfig } from "@chakra-ui/react"

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Playfair Display, serif" },
      },
    },
  },
})
```

### Adding a new size

Update the `variants.size` property to create a custom size.

```tsx title="components/ui/provider.tsx"
import { createSystem, defaultConfig, defineRecipe } from "@chakra-ui/react"

const headingRecipe = defineRecipe({
  variants: {
    size: {
      custom: {
        fontSize: "100px",
        lineHeight: "100px",
        letterSpacing: "-2px",
      },
    },
  },
})

const system = createSystem(defaultConfig, {
  theme: {
    recipes: { heading: headingRecipe },
  },
})
```

Then, use the `custom` variant to create a custom size.

```tsx
I'm a custom size
```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | xl | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl' \| '5xl' \| '6xl' \| '7xl'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
