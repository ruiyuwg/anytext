## Removed Features

### Color Mode

- `ColorModeProvider` and `useColorMode` have been removed in favor of
  `next-themes`
- `LightMode`, `DarkMode` and `ColorModeScript` components have been removed.
  You now have to use `className="light"` or `className="dark"` to force themes.
- `useColorModeValue` has been removed in favor of `useTheme` from `next-themes`

We provide snippets for color mode via the CLI to help you set up color mode
quickly using `next-themes`

### Hooks

We removed the hooks package in favor of using dedicated, robust libraries like
`react-use` and `usehooks-ts`

The only hooks we ship now are `useBreakpointValue`, `useCallbackRef`,
`useDisclosure`, `useControllableState` and `useMediaQuery`.

### Style Config

We removed the `styleConfig` and `multiStyleConfig` concept in favor of recipes
and slot recipes. This pattern was inspired by Panda CSS.

### Next.js package

We've removed the `@chakra-ui/next-js` package in favor of using the `asChild`
prop for better flexibility.

To style the Next.js image component, use the `asChild` prop on the `Box`
component.

```jsx
<Box asChild>
  <NextImage />
</Box>
```

To style the Next.js link component, use the `asChild` prop on the `Link`
component

```jsx
<Link isExternal asChild>
  <NextLink />
</Link>
```

### Theme Tools

We've removed this package in favor using CSS color mix.

**Before**

We used JS to resolve the colors and then apply the transparency

```jsx
defineStyle({
  bg: transparentize("blue.200", 0.16)(theme),
  // -> rgba(0, 0, 255, 0.16)
})
```

**After**

We now use CSS color-mix

```jsx
defineStyle({
  bg: "blue.200/16",
  // -> color-mix(in srgb, var(--chakra-colors-200), transparent 16%)
})
```

### forwardRef

Due to the simplification of the `as` prop, we no longer provide a custom
`forwardRef`. Prefer to use `forwardRef` from React directly.

Before:

```tsx {3}
import { Button as ChakraButton, forwardRef } from "@chakra-ui/react"

const Button = forwardRef<ButtonProps, "button">(function Button(props, ref) {
  return <ChakraButton ref={ref} {...props} />
})
```

After:

```tsx {2, 4}
import { Button as ChakraButton } from "@chakra-ui/react"
import { forwardRef } from "react"

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    return <ChakraButton ref={ref} {...props} />
  },
)
```

### Icons

Removed `@chakra-ui/icons` package. Use `react-icons` (Lucide icons recommended)
or `lucide-react` instead. Install with `npm install react-icons`.

- **Icons without props** → use the react-icon directly
- **Icons with Chakra style props** → wrap in `Icon` from `@chakra-ui/react`

Before:

```tsx
import { AddIcon, CheckIcon } from "@chakra-ui/icons"

<AddIcon />
<CheckIcon boxSize={6} color="green.500" />
```

After:

```tsx
import { Icon } from "@chakra-ui/react"
import { LuCheck, LuPlus } from "react-icons/lu"

<LuPlus />
<Icon as={LuCheck} boxSize={6} color="green.500" />
```

Common icon mappings: `AddIcon` → `LuPlus`, `CloseIcon` → `LuX`, `CheckIcon` →
`LuCheck`, `EditIcon` → `LuPencil`, `DeleteIcon` → `LuTrash2`, `SearchIcon` →
`LuSearch`, `ChevronDownIcon` → `LuChevronDown`, `ArrowForwardIcon` →
`LuArrowRight`, `HamburgerIcon` → `LuMenu`, `WarningIcon` → `LuAlertTriangle`,
`InfoIcon` → `LuInfo`, `ExternalLinkIcon` → `LuExternalLink`, `StarIcon` →
`LuStar`

### Custom SVG Icons

In v2, `<Icon>` rendered an `<svg>` wrapper and you passed SVG children (like
`<path>`) directly. In v3, when using custom SVGs, use the `asChild` prop so the
`Icon` merges its styles onto your `<svg>` element.

Before:

```tsx
import { Icon } from "@chakra-ui/react"

;<Icon viewBox="0 0 24 24" color="red.500" boxSize={6}>
  <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
</Icon>
```

After:

```tsx
import { Icon } from "@chakra-ui/react"

;<Icon color="red.500" size="md" asChild>
  <svg viewBox="0 0 24 24">
    <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
  </svg>
</Icon>
```

Alternatively, use `createIcon` to define reusable custom icons:

```tsx
import { createIcon } from "@chakra-ui/react"

const TriangleIcon = createIcon({
  displayName: "TriangleIcon",
  viewBox: "0 0 24 24",
  path: <path d="M12 2L2 22h20L12 2z" fill="currentColor" />,
})

// Usage
<TriangleIcon size="lg" color="red.500" />
```

### Storybook Addon

We're removed the storybook addon in favor of using `@storybook/addon-themes`
and `withThemeByClassName` helper.

```tsx
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { withThemeByClassName } from "@storybook/addon-themes"
import type { Preview, ReactRenderer } from "@storybook/react"

const preview: Preview = {
  decorators: [
    withThemeByClassName<ReactRenderer>({
      defaultTheme: "light",
      themes: {
        light: "",
        dark: "dark",
      },
    }),
    (Story) => (
      <ChakraProvider value={defaultSystem}>
        <Story />
      </ChakraProvider>
    ),
  ],
}

export default preview
```

### Removed Components

- **StackItem**: You don't need this anymore. Use `Box` instead.
- **FocusLock**: We no longer ship a focus lock component. Install and use
  `react-focus-lock` directly.
- **AlertDialog**
  - Replace with the `Dialog` component and set `role=alertdialog`
  - Set `leastDestructiveRef` prop to the `initialFocusEl` to the `Dialog.Root`
    component

### CircularProgress

- Renamed to `ProgressCircle` and now uses compound components
- `isIndeterminate` becomes `value={null}`
- `thickness` prop becomes `--thickness` CSS variable
- `color` prop becomes `stroke` prop on `ProgressCircle.Range`

Before:

```tsx
<CircularProgress
  value={75}
  thickness="4px"
  color="blue.500"
  isIndeterminate={false}
/>
```

After:

```tsx
<ProgressCircle.Root value={75}>
  <ProgressCircle.Circle css={{ "--thickness": "4px" }}>
    <ProgressCircle.Track />
    <ProgressCircle.Range stroke="blue.500" />
  </ProgressCircle.Circle>
</ProgressCircle.Root>
```

For indeterminate progress:

```tsx
<ProgressCircle.Root value={null}>
  <ProgressCircle.Circle>
    <ProgressCircle.Track />
    <ProgressCircle.Range />
  </ProgressCircle.Circle>
</ProgressCircle.Root>
```

### StackDivider

- No longer available as a separate component
- Use explicit `Stack.Separator` components between stack items

Before:

```tsx
<VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</VStack>
```

After:

```tsx
<VStack gap={4}>
  <Box>Item 1</Box>
  <Stack.Separator borderColor="gray.200" />
  <Box>Item 2</Box>
  <Stack.Separator borderColor="gray.200" />
  <Box>Item 3</Box>
</VStack>
```
