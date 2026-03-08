## Prop Changes

### Boolean Props

Changed naming convention for boolean properties from `is<X>` to `<x>`

- `isOpen` -> `open`
- `defaultIsOpen` -> `defaultOpen`
- `isDisabled` -> `disabled`
- `isInvalid` -> `invalid`
- `isRequired` -> `required`

### ColorScheme Prop

The `colorScheme` prop has been changed to `colorPalette`

**Before**

- You could only use `colorScheme` in a component's theme
- `colorScheme` clashes with the native `colorScheme` prop in HTML elements

```tsx
<Button colorScheme="blue">Click me</Button>
```

**After**

- You can now use `colorPalette` anywhere

```tsx
<Button colorPalette="blue">Click me</Button>
```

Usage in any component, you can do something like:

```tsx
<Box colorPalette="red">
  <Box bg="colorPalette.400">Some box</Box>
  <Text color="colorPalette.600">Some text</Text>
</Box>
```

If you are using custom colors, you must define two things to make
`colorPalette` work:

- **tokens**: For the 50-950 color palette
- **semanticTokens**: For the `solid`, `contrast`, `fg`, `muted`, `subtle`,
  `emphasized`, and `focusRing` color keys

```tsx title="theme.ts" /brand: {/ /tokens: {/ /semanticTokens: {/
import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e6f2ff" },
          100: { value: "#e6f2ff" },
          200: { value: "#bfdeff" },
          300: { value: "#99caff" },
          // ...
          950: { value: "#001a33" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.100}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
})
```

> Read more about it [here](/guides/theming-custom-colors).

### Gradient Props

Gradient style prop simplified to `gradient` and `gradientFrom` and `gradientTo`
props. This reduces the runtime performance cost of parsing the gradient string,
and allows for better type inference.

**Before**

```tsx
<Box bgGradient="linear(to-r, red.200, pink.500)" />
```

**After**

```tsx
<Box bgGradient="to-r" gradientFrom="red.200" gradientTo="pink.500" />
```

### Color Palette

- Default color palette is now `gray` for all components but you can configure
  this in your theme.

- Default theme color palette size has been increased to 11 shades to allow more
  color variations.

  **Before**

  ```tsx
  const colors = {
    // ...
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
  }
  ```

  **After**

  ```tsx
  const colors = {
    // ...
    gray: {
      50: { value: "#fafafa" },
      100: { value: "#f4f4f5" },
      200: { value: "#e4e4e7" },
      300: { value: "#d4d4d8" },
      400: { value: "#a1a1aa" },
      500: { value: "#71717a" },
      600: { value: "#52525b" },
      700: { value: "#3f3f46" },
      800: { value: "#27272a" },
      900: { value: "#18181b" },
      950: { value: "#09090b" },
    },
  }
  ```

### Style Props

Changed the naming convention for some style props

- `noOfLines` -> `lineClamp`
- `truncated` -> `truncate`
- `_activeLink` -> `_currentPage`
- `_activeStep` -> `_currentStep`
- `_mediaDark` -> `_osDark`
- `_mediaLight` -> `_osLight`

**Examples:**

```tsx
// Before
<Text noOfLines={2}>
  Long text that will be clamped to 2 lines
</Text>

<Text truncated>
  This text will be truncated with ellipsis
</Text>

// After
<Text lineClamp={2}>
  Long text that will be clamped to 2 lines
</Text>

<Text truncate>
  This text will be truncated with ellipsis
</Text>
```

We removed the `apply` prop in favor of `textStyle` or `layerStyles`

### Nested Styles

We have changed the way you write nested styles in Chakra UI components.

**Before**

Write nested styles using the `sx` or `__css` prop, and you sometimes don't get
auto-completion for nested styles.

```tsx
<Box
  sx={{
    svg: { color: "red.500" },
  }}
/>
```

**After**

Write nested styles using the `css` prop. All nested selectors **require** the
use of the ampersand `&` prefix

```tsx
<Box
  css={{
    "& svg": { color: "red.500" },
  }}
/>
```

This was done for two reasons:

- **Faster style processing:** Before we had to check if a style key is a style
  prop or a selector which is quite expensive overall.
- **Better typings:** This makes it easier to type nested style props are
  strongly typed

## Component Changes

### ChakraProvider

- Removed `theme` prop in favor of passing the `system` prop instead. Import the
  `defaultSystem` module instead of `theme`

- Removed `resetCss` prop in favor of passing `preflight: false` to the
  `createSystem` function

Before

```tsx
<ChakraProvider resetCss={false}>
  <Component />
</ChakraProvider>
```

After

```tsx
const system = createSystem(defaultConfig, { preflight: false })

<Provider value={system}>
  <Component />
</Provider>
```

- Removed support for configuring toast options. Pass it to the `createToaster`
  function in `components/ui/toaster.tsx` file instead.

### Modal

Renamed to `Dialog` and uses compound components with an explicit
`Dialog.Positioner` and `Portal` wrapper.

**Component Renaming:**

- `Modal` → `Dialog.Root`
- `ModalOverlay` → `Dialog.Backdrop`
- `ModalContent` → `Dialog.Content` (wrap in `Dialog.Positioner`)
- `ModalHeader` → `Dialog.Header`
- `ModalBody` → `Dialog.Body`
- `ModalFooter` → `Dialog.Footer`
- `ModalCloseButton` → `Dialog.CloseTrigger`

**Prop Changes:**

- `isOpen` → `open`
- `onClose` → `onOpenChange` (receives `{ open }`)
- `isCentered` → `placement="center"`
- `closeOnOverlayClick` → `closeOnInteractOutside`
- `closeOnEsc` → `closeOnEscape`
- `blockScrollOnMount` → `preventScroll`
- `onOverlayClick` → `onInteractOutside`
- `onEsc` → `onEscapeKeyDown`
- `onCloseComplete` → `onExitComplete`
- `initialFocusRef` → `initialFocusEl={() => ref.current}`
- `finalFocusRef` → `finalFocusEl={() => ref.current}`

**Size Mapping:** Sizes `2xl` through `6xl` are mapped to `xl` in v3.

**Removed Props:** `allowPinchZoom`, `lockFocusAcrossFrames`,
`preserveScrollBarGap`, `returnFocusOnClose`, `useInert`, `portalProps`

### Avatar

Now uses a declarative composition pattern with separate `Avatar.Image` and
`Avatar.Fallback` parts.

**Component Renaming:**

- `Avatar` → `Avatar.Root`
- `AvatarBadge` → removed (use `Float` + `Circle` instead)
- `AvatarGroup` → `AvatarGroup` (unchanged, but `max` prop removed)

**Props moved to `Avatar.Image`:**

- `src`, `srcSet`, `sizes`, `loading`, `referrerPolicy`, `crossOrigin`

**Props moved to `Avatar.Fallback`:**

- `name` — generates initials automatically
- `icon` — render as children instead
- `iconLabel` → `aria-label`

**Props removed:**

- `ignoreFallback` — no longer needed
- `showBorder` — use `border` and `borderColor` style props instead
- `AvatarGroup` `max` — removed, handle in userland
- `AvatarGroup` `spacing` → `spaceX`

Before:

```tsx
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"

const Demo = () => (
  <>
    <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="md" />

    <Avatar bg="red.500" icon={<AiOutlineUser />} />

    <Avatar>
      <AvatarBadge boxSize="1.25em" bg="green.500" />
    </Avatar>
  </>
)
```

After:

```tsx
import { Avatar, AvatarGroup, Circle, Float } from "@chakra-ui/react"

const Demo = () => (
  <>
    <Avatar.Root size="md">
      <Avatar.Fallback name="Dan Abrahmov" />
      <Avatar.Image src="https://bit.ly/dan-abramov" />
    </Avatar.Root>

    <Avatar.Root bg="red.500">
      <Avatar.Fallback>
        <AiOutlineUser />
      </Avatar.Fallback>
    </Avatar.Root>

    <Avatar.Root>
      <Avatar.Image src="https://bit.ly/dan-abramov" />
      <Float placement="bottom-end" offsetX="1" offsetY="1">
        <Circle
          bg="green.500"
          size="8px"
          outline="0.2em solid"
          outlineColor="bg"
        />
      </Float>
    </Avatar.Root>
  </>
)
```

### Breadcrumb

Now uses compound components with explicit separators between items and a
required `Breadcrumb.List` wrapper.

**Component Renaming:**

- `Breadcrumb` → `Breadcrumb.Root`
- `BreadcrumbItem` → `Breadcrumb.Item`
- `BreadcrumbLink` → `Breadcrumb.Link`
- `BreadcrumbLink` with `isCurrentPage` → `Breadcrumb.CurrentLink`
- `BreadcrumbSeparator` → `Breadcrumb.Separator`

**Prop Changes:**

- `separator` prop → removed, use explicit `<Breadcrumb.Separator />` between
  items
- `spacing` → `gap` (moved to `Breadcrumb.List`)
- `isCurrentPage` on `BreadcrumbItem` → use `Breadcrumb.CurrentLink` instead
- `isLastChild` → removed (not needed with explicit separators)
- `listProps` → spread directly on `Breadcrumb.List`

Before:

```tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"

const Demo = () => (
  <Breadcrumb separator="-" spacing="8px">
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href="#">Current</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
)
```

After:

```tsx
import { Breadcrumb } from "@chakra-ui/react"

const Demo = () => (
  <Breadcrumb.Root>
    <Breadcrumb.List gap="8px">
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>-</Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.CurrentLink>Current</Breadcrumb.CurrentLink>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb.Root>
)
```

### Portal

- Remove `appendToParentPortal` prop in favor of using the `containerRef`
- Remove `PortalManager` component

### Progress

- Now uses compound components with `Progress.Root`, `Progress.Track`, and
  `Progress.Range`
- `hasStripe` prop renamed to `striped`
- `isAnimated` prop renamed to `animated`
- `colorScheme` prop renamed to `colorPalette`

Before:

```tsx
<Progress hasStripe isAnimated value={75} colorScheme="blue" />
```

After:

```tsx
<Progress.Root striped animated value={75} colorPalette="blue">
  <Progress.Track>
    <Progress.Range />
  </Progress.Track>
</Progress.Root>
```

### Stack

- Changed `spacing` to `gap`
- Removed `StackItem` in favor of using the `Box` component directly

### Select

Now called `NativeSelect` and exposes all parts now.

Before:

```tsx
<Select placeholder="Select option">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</Select>
```

After:

```tsx
<NativeSelect.Root size="sm" width="240px">
  <NativeSelect.Field placeholder="Select option">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </NativeSelect.Field>
  <NativeSelect.Indicator />
</NativeSelect.Root>
```

Changing the icon

Before:

```tsx
<Select icon={<MdArrowDropDown />} placeholder="Woohoo! A new icon" />
```

After:

```tsx
<NativeSelect.Indicator>
  <MdArrowDropDown />
</NativeSelect.Indicator>
```

### Collapse

- Rename `Collapse` to `Collapsible` namespace
- Rename `in` to `open`
- `animateOpacity` has been removed, use keyframes animations `expand-height`
  and `collapse-height` instead

Before

```tsx
<Collapse in={isOpen} animateOpacity>
  Some content
</Collapse>
```

After

```tsx
<Collapsible.Root open={isOpen}>
  <Collapsible.Content>Some content</Collapsible.Content>
</Collapsible.Root>
```

### Image

Now renders a native `img` without built-in fallback logic. `Img` has been
consolidated into `Image`.

- `Img` → `Image`
- `fit` → `objectFit`
- `align` → `objectPosition`
- `fallbackSrc`, `fallback`, `ignoreFallback`, `fallbackStrategy` → removed
- `useImage` hook → removed

Before:

```tsx
import { Img } from "@chakra-ui/react"

const Demo = () => (
  <Img
    src="photo.jpg"
    fit="cover"
    align="center"
    fallbackSrc="placeholder.jpg"
  />
)
```

After:

```tsx
import { Image } from "@chakra-ui/react"

const Demo = () => (
  <Image src="photo.jpg" objectFit="cover" objectPosition="center" />
)
```

> For fallback behavior, use the native `onError` event to swap the `src`.

### PinInput

Now uses compound components. Each input requires an `index` prop and must be
wrapped in `PinInput.Control`.

**Component Renaming:**

- `PinInput` → `PinInput.Root`
- `PinInputField` → `PinInput.Input` (requires `index` prop)

**Prop Changes:**

- `value` / `defaultValue` → now `string[]` instead of `string`
- `onChange` → `onValueChange` (receives `{ value, valueAsString }`)
- `onComplete` → `onValueComplete` (receives `{ value, valueAsString }`)
- `isDisabled` → `disabled`
- `isInvalid` → `invalid`
- `manageFocus` → removed

Before:

```tsx
import { PinInput, PinInputField } from "@chakra-ui/react"

const Demo = () => (
  <PinInput defaultValue="23" onChange={setValue} onComplete={handleComplete}>
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
)
```

After:

```tsx
import { PinInput } from "@chakra-ui/react"

const Demo = () => (
  <PinInput.Root
    defaultValue={["2", "3"]}
    onValueChange={(e) => setValue(e.value)}
    onValueComplete={(e) => handleComplete(e.value)}
  >
    <PinInput.HiddenInput />
    <PinInput.Control>
      <PinInput.Input index={0} />
      <PinInput.Input index={1} />
      <PinInput.Input index={2} />
    </PinInput.Control>
  </PinInput.Root>
)
```
