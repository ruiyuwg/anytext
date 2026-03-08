# Checkmark

```tsx
import { Checkmark, Stack } from "@chakra-ui/react"

export const CheckmarkBasic = () => {
  return (
    
      
      
      
      
      
      
    
  )
}

```

## Usage

```tsx
import { Checkmark } from "@chakra-ui/react"
```

```tsx
```

## Examples

### Indeterminate

Use the `indeterminate` prop to show an indeterminate state.

```tsx
import { Checkmark, HStack } from "@chakra-ui/react"

export const CheckmarkIndeterminate = () => {
  return (
    
      
      
      
    
  )
}

```

### States

The Checkmark component supports three states: unchecked (default), checked, and
indeterminate.

```tsx
import { Checkmark, HStack } from "@chakra-ui/react"

export const CheckmarkStates = () => {
  return (
    
      
      
      
      
      
      
    
  )
}

```

### Variants

Use the `variant` prop to change the visual style of the checkmark.

```tsx
import { Checkmark, For, HStack } from "@chakra-ui/react"

export const CheckmarkWithVariants = () => {
  return (
    
      
        {(variant) => }
      
    
  )
}

```

### Sizes

Use the `size` prop to change the size of the checkmark.

```tsx
import { Checkmark, For, HStack } from "@chakra-ui/react"

export const CheckmarkWithSizes = () => {
  return (
    
      
        {(size) => }
      
    
  )
}

```

### Colors

Use the `colorPalette` prop to change the color scheme of the checkmark.

```tsx
import { Checkmark, For, HStack } from "@chakra-ui/react"

export const CheckmarkWithColors = () => {
  return (
    
      
        {(colorPalette) => (
          
        )}
      
    
  )
}

```

### Filled

Use the `filled` prop with the `outline` variant to add a background color to
the checkmark.

```tsx
import { Checkmark } from "@chakra-ui/react"

export const CheckmarkWithFilled = () => {
  return 
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
| variant | solid | `'solid' \| 'outline' \| 'subtle' \| 'plain' \| 'inverted'` | The variant of the component |
| checked | undefined | `boolean \| undefined` | Whether the checkmark is checked |
| indeterminate | undefined | `boolean \| undefined` | Whether the checkmark is indeterminate |
| disabled | undefined | `boolean \| undefined` | Whether the checkmark is disabled |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| filled | undefined | `'true' \| 'false'` | The filled of the component |

# Client Only

## Usage

```jsx
import { ClientOnly, Skeleton } from "@chakra-ui/react"
```

```jsx

  

```

## Examples

### Fallback

Use the `fallback` prop to render a loading state while the client-side content
is being prepared.

```jsx
}>
  

```

### Render Prop (Recommended)

When your component accesses browser-only APIs (like `window`, `document`, or
`localStorage`), use the render prop pattern to prevent server-side rendering
issues:

```jsx
}>
  {() => (
    
      Current URL: {window.location.href}
      Screen width: {window.innerWidth}px
    
  )}

```

This pattern ensures that components accessing browser APIs are only evaluated
on the client side, preventing hydration mismatches and server-side errors.

> It can also be used for rendering heavy components that are not needed on the
> server side.

### Direct Children (Use with Caution)

While you can pass components directly as children, be careful with components
that access browser APIs:

```tsx
/* ❌ This may cause server-side errors */
}>
  


/* ✅ This is safe */
}>
  {() => }

```

## Props

These props can be passed to the `ClientOnly` component.

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| fallback | undefined | `any` | The fallback content to render while the component is mounting on the client
side. |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
