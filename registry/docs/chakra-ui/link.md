# Link

```tsx
import { Link } from "@chakra-ui/react"

export const LinkBasic = () => {
  return Visit Chakra UI
}

```

## Usage

```jsx
import { Link } from "@chakra-ui/react"
```

```jsx
Click here
```

## Examples

### Variants

Use the `variant` prop to change the appearance of the `Link` component

```tsx
import { Link, Stack } from "@chakra-ui/react"

export const LinkWithVariants = () => {
  return (
    
      
        Link (Underline)
      
      
        Link (Plain)
      
    
  )
}

```

### Within Text

Use `Link` within a text to create a hyperlink

```tsx
import { Link, Text } from "@chakra-ui/react"

export const LinkWithinText = () => {
  return (
    
      Visit the{" "}
      <Link
        variant="underline"
        href="https://chakra-ui.com"
        colorPalette="teal"
      >
        Chakra UI
      {" "}
      website
    
  )
}

```

### External

Add an external link icon to the `Link` component

```tsx
import { Link } from "@chakra-ui/react"
import { LuExternalLink } from "react-icons/lu"

export const LinkWithExternal = () => {
  return (
    
      Visit Chakra UI 
    
  )
}

```

## Guides

### Routing Library

Use the `asChild` prop to compose `Link` with framework links like (Next.js)

```jsx
import { Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"

const Demo = () => {
  return (
    
      Click here
    
  )
}
```

### Styling Active Links

Use the `_currentPage` condition to style active links when using
`aria-current="page"`.

```jsx
<Link
  href="/home"
  aria-current="page"
  _currentPage={{ color: "blue.500", fontWeight: "bold" }}
>
  Home

```

With routing libraries, set `aria-current` based on the current route:

```jsx
import { Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ href, children }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    
      <NextLink
        href={href}
        aria-current={isActive ? "page" : undefined}
        _currentPage={{ color: "blue.500", fontWeight: "bold" }}
      >
        {children}
      
    
  )
}
```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | plain | `'underline' \| 'plain'` | The variant of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
