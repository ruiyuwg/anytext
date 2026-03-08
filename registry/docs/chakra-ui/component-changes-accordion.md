### Accordion

Now uses compound components with dot notation. All sub-components are
namespaced under `Accordion`.

**Component Renaming:**

- `Accordion` → `Accordion.Root`
- `AccordionItem` → `Accordion.Item` (now **requires** a `value` prop)
- `AccordionButton` → `Accordion.ItemTrigger`
- `AccordionIcon` → `Accordion.ItemIndicator`
- `AccordionPanel` → `Accordion.ItemContent` + `Accordion.ItemBody`

**Prop Changes:**

- `allowMultiple` → `multiple`
- `allowToggle` → `collapsible`
- `defaultIndex` → `defaultValue` (now an array of strings)
- `index` → `value` (now an array of strings)
- `onChange` → `onValueChange`

Before:

```tsx
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react"

const Demo = () => (
  <Accordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            Section 1 title
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>Lorem ipsum dolor sit amet.</AccordionPanel>
    </AccordionItem>
  </Accordion>
)
```

After:

```tsx
import { Accordion, Box } from "@chakra-ui/react"

const Demo = () => (
  <Accordion.Root collapsible>
    <Accordion.Item value="section-1">
      <h2>
        <Accordion.ItemTrigger>
          <Box as="span" flex="1" textAlign="left">
            Section 1 title
          </Box>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
      </h2>
      <Accordion.ItemContent>
        <Accordion.ItemBody pb={4}>
          Lorem ipsum dolor sit amet.
        </Accordion.ItemBody>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
)
```

**Render Props → Context:**

The `AccordionItem` render prop pattern (`{({ isExpanded }) => ...}`) has been
replaced. Use the `Accordion.ItemContext` component or the
`useAccordionItemContext` hook instead. The `isExpanded` property is now
`expanded`.

Before:

```tsx
<AccordionItem>
  {({ isExpanded }) => (
    <>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Section title
        </Box>
        {isExpanded ? <MinusIcon /> : <AddIcon />}
      </AccordionButton>
      <AccordionPanel>Content</AccordionPanel>
    </>
  )}
</AccordionItem>
```

After:

```tsx
<Accordion.Item value="section-1">
  <Accordion.ItemContext>
    {({ expanded }) => (
      <>
        <Accordion.ItemTrigger>
          <Box flex="1" textAlign="left">
            Section title
          </Box>
          {expanded ? <LuMinus /> : <LuPlus />}
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>Content</Accordion.ItemBody>
        </Accordion.ItemContent>
      </>
    )}
  </Accordion.ItemContext>
</Accordion.Item>
```

### Tabs

- Component structure has changed and `value` prop is now required on list and
  panels.

Before:

```tsx
<Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>one!</TabPanel>
    <TabPanel>two!</TabPanel>
    <TabPanel>three!</TabPanel>
  </TabPanels>
</Tabs>
```

After:

```tsx
<Tabs.Root>
  <Tabs.List>
    <Tabs.Trigger value="one">One</Tabs.Trigger>
    <Tabs.Trigger value="two">Two</Tabs.Trigger>
    <Tabs.Trigger value="three">Three</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="one">one!</Tabs.Content>
  <Tabs.Content value="two">two!</Tabs.Content>
  <Tabs.Content value="three">three!</Tabs.Content>
</Tabs.Root>
```

- `defaultIndex`, `index` and `onChange` is now `defaultValue`, `value` and
  `onValueChange` respectively

Before:

```tsx
<Tabs defaultIndex={0} index={0} onChange={(index) => {}} />
```

After:

```tsx
<Tabs defaultValue={0} value={0} onValueChange={({ value }) => {}} />
```

- `isLazy` prop on `Tabs` is now `lazyMount` and `unmountOnExit` on `Tabs.Root`

Before:

```tsx
<Tabs isLazy />
```

After:

```tsx
<Tabs.Root lazyMount unmountOnExit />
```

### Show and Hide

- `Show` and `Hide` components are removed in favor of `hideFrom` and
  `hideBelow`

Before:

```tsx
<Show below="md">
  This text appears only on screens md and smaller.
</Show>

<Hide below="md">
  This text hides at the "md" value screen width and smaller.
</Hide>
```

After:

```tsx
<Box hideBelow="md">
  This text hides at the "md" value screen width and smaller.
</Box>

<Box hideFrom="md">
  This text appears only on screens md and larger.
</Box>
```

### Checkbox

Refactored to use compound components. The single `<Checkbox>` is now split into
explicit parts for full control over structure and styling.

**Prop Changes:**

- `isChecked` → `checked`
- `isDisabled` → `disabled`
- `isInvalid` → `invalid`
- `isReadOnly` → `readOnly`
- `isIndeterminate` → `checked="indeterminate"`
- `onChange` → `onCheckedChange`
- `colorScheme` → `colorPalette`
- `icon` → render as children of `Checkbox.Control`
- `iconColor` → `color` on `Checkbox.Indicator`
- `iconSize` → `boxSize` on `Checkbox.Indicator`
- `isFocusable` → removed

**CheckboxGroup:**

- `isDisabled` → `disabled`
- `onChange` → `onValueChange`
- `isNative` → removed

Before:

```tsx
import { Checkbox } from "@chakra-ui/react"

const Demo = () => (
  <Checkbox
    isChecked={checked}
    isIndeterminate={indeterminate}
    onChange={(e) => setChecked(e.target.checked)}
    colorScheme="blue"
  >
    Accept terms
  </Checkbox>
)
```

After:

```tsx
import { Checkbox } from "@chakra-ui/react"

const Demo = () => (
  <Checkbox.Root
    checked={indeterminate ? "indeterminate" : checked}
    onCheckedChange={(e) => setChecked(!!e.checked)}
    colorPalette="blue"
  >
    <Checkbox.HiddenInput />
    <Checkbox.Control>
      <Checkbox.Indicator />
    </Checkbox.Control>
    <Checkbox.Label>Accept terms</Checkbox.Label>
  </Checkbox.Root>
)
```

### Radio Group

Refactored to use compound components. `Radio` is now `RadioGroup.Item` with
explicit sub-components: `ItemHiddenInput`, `ItemIndicator`, `ItemText`.

**Component Renaming:**

- `RadioGroup` → `RadioGroup.Root`
- `Radio` → `RadioGroup.Item` (with required sub-components)

**RadioGroup Prop Changes:**

- `onChange` → `onValueChange` (receives `{ value }` object)
- `colorScheme` → `colorPalette`

**Radio Prop Changes:**

- `isDisabled` → `disabled`
- `isInvalid`, `isChecked`, `defaultChecked` → removed (controlled from Root)
- `colorScheme` → removed from items (set `colorPalette` on Root instead)
- `inputProps` → spread into `RadioGroup.ItemHiddenInput`

Before:

```tsx
import { Radio, RadioGroup } from "@chakra-ui/react"

const Demo = () => (
  <RadioGroup defaultValue="2" onChange={(val) => setValue(val)}>
    <Radio value="1">Option 1</Radio>
    <Radio value="2">Option 2</Radio>
  </RadioGroup>
)
```

After:

```tsx
import { RadioGroup } from "@chakra-ui/react"

const Demo = () => (
  <RadioGroup.Root defaultValue="2" onValueChange={(e) => setValue(e.value)}>
    <RadioGroup.Item value="1">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemIndicator />
      <RadioGroup.ItemText>Option 1</RadioGroup.ItemText>
    </RadioGroup.Item>
    <RadioGroup.Item value="2">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemIndicator />
      <RadioGroup.ItemText>Option 2</RadioGroup.ItemText>
    </RadioGroup.Item>
  </RadioGroup.Root>
)
```

### Button Props

- `isActive` → `data-active` attribute
- `isDisabled` → `disabled`
- `isLoading` → `loading`
- `leftIcon` and `rightIcon` → passed as children
- `iconSpacing` → removed (use gap in flex layout)
- `colorScheme` → `colorPalette`

**Example:**

```tsx
// Before
<Button
  isActive={true}
  isDisabled={false}
  isLoading={true}
  leftIcon={<Icon />}
  rightIcon={<Icon />}
  colorScheme="blue"
>
  Submit
</Button>

// After
<Button
  data-active=""
  disabled={false}
  loading={true}
  colorPalette="blue"
>
  <LeftIcon />
  Submit
  <RightIcon />
</Button>
```

### Input Props

- `isDisabled` → `disabled`
- `isInvalid` → `invalid`
- `isReadOnly` → `readOnly`
- `isRequired` → `required`
- `colorScheme` → `colorPalette`
- `focusBorderColor` → use CSS variables
- `errorBorderColor` → use CSS variables

**Example:**

```tsx
// Before
<Input
  isDisabled={false}
  isInvalid={true}
  isReadOnly={false}
  isRequired={true}
  colorScheme="blue"
  focusBorderColor="blue.500"
  errorBorderColor="red.500"
/>

// After
<Input
  disabled={false}
  invalid={true}
  readOnly={false}
  required={true}
  colorPalette="blue"
  style={{
    "--focus-color": "blue.500",
    "--error-color": "red.500"
  }}
/>
```

### Checkbox Props

- `isChecked` → `checked`
- `isDisabled` → `disabled`
- `isInvalid` → `invalid`
- `isIndeterminate` → `checked="indeterminate"`
- `onChange` → `onCheckedChange`
- `colorScheme` → `colorPalette`
- `iconColor` → `color` on `Checkbox.Indicator`
- `iconSize` → `boxSize` on `Checkbox.Indicator`
- `isFocusable` → removed

### Modal to Dialog Props

- `isOpen` → `open`
- `onClose` → `onOpenChange` (receives `{ open }`)
- `isCentered` → `placement="center"`
- `closeOnOverlayClick` → `closeOnInteractOutside`
- `closeOnEsc` → `closeOnEscape`
- `blockScrollOnMount` → `preventScroll`
- `onOverlayClick` → `onInteractOutside`
- `onEsc` → `onEscapeKeyDown`
- `onCloseComplete` → `onExitComplete`
- `initialFocusRef` → `initialFocusEl` (function returning element)
- `finalFocusRef` → `finalFocusEl` (function returning element)
- `scrollBehavior` → unchanged
- `motionPreset` → unchanged
- `trapFocus` → unchanged
- Sizes `2xl`–`6xl` → mapped to `xl`
- Removed: `allowPinchZoom`, `lockFocusAcrossFrames`, `preserveScrollBarGap`,
  `returnFocusOnClose`, `useInert`, `portalProps`

### Stack Props

- `spacing` → `gap`
- `divider` → `separator`
- Other props remain the same

**Example:**

```tsx
// Before
<Stack
  spacing="4"
  divider={<StackDivider />}
>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Stack>

// After
<Stack
  gap="4"
  separator={<Stack.Separator />}
>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Stack>
```

# Animation Styles

## Overview

Animation styles allow you to define reusable animation properties. The goal is
to reduce the amount of code needed to animate components.

The supported animation styles are:

- **Animation**: animation composition, delay, direction, duration, fill mode,
  iteration count, name, play state, timing function

- **Animation range**: animation range, start, end, timeline

- **Transform origin**: transform origin

## Defining animation styles

Animation styles are defined using the `defineAnimationStyles` function.

Here's an example of an animation style:

```js
import { defineAnimationStyles } from "@chakra-ui/react"

const animationStyles = defineAnimationStyles({
  bounceFadeIn: {
    value: {
      animationName: "bounce, fade-in",
      animationDuration: "1s",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
    },
  },
})
```

## Built-in animation styles

Chakra UI provides a set of built-in animation styles that you can use.

## Update the theme

To use the animation styles, update the `theme` object with the
`animationStyles` property.

```js filename="theme.ts"
import { createSystem, defineConfig } from "@chakra-ui/react"
import { animationStyles } from "./animation-styles"

const config = defineConfig({
  theme: {
    animationStyles,
  },
})

export default createSystem(defaultConfig, config)
```

After updating the theme, run the `typegen` command to generate the animation
types. See the [CLI docs](/docs/get-started/cli#chakra-typegen) for how to run
typegen in postinstall, CI, and monorepos.

```bash
npx @chakra-ui/cli typegen ./theme.ts
```

These animation styles can be composed with other styles like `_open` and
`_closed` which map to the `data-state=open|closed` attribute.

```jsx
<Box
  data-state="open"
  animationDuration="slow"
  animationStyle={{ _open: "slide-fade-in", _closed: "slide-fade-out" }}
>
  This content will fade in
</Box>
```

# Cascade Layers

Chakra UI relies on CSS cascade layers to provide a predictable, performant way
to override components. The layers are defined to match that of
[Panda CSS](https://panda-css.com).

> **Good to know**: This plays a major role in the faster reconciliation times
> in v3.x

## Layer Types

Chakra supports these cascade layer types:

- `@layer reset`: Where the preflight or css resets styles are defined.

- `@layer base`: Where global styles are placed when defined in `globalCss`
  config property.

- `@layer recipes`: Where styles for recipes are placed when defined in
  `theme.recipes` or `theme.slotRecipes`

- `@layer tokens`: Where styles for design tokens are placed when defined in
  `theme.tokens` or `theme.semanticTokens`

## Layer Order

Chakra appends the following layers to the top of the generated emotion
stylesheet:

```css
@layer reset, base, tokens, recipes;
```

This structure allows for smoother experience when combining Chakra and Panda
CSS in the same project.

## Disabling Layers

Cascade layers are enabled by default. If you want to disable them, you can do
so by setting the `disableLayers` option to `true`

```js title="theme.ts"
export const system = createSystem(defaultConfig, {
  disableLayers: true,
})
```

Next, edit the `components/ui/provider` file to use the new system

```tsx title="provider.tsx" {3} /value={system}/
import { ColorModeProvider } from "@/components/ui/color-mode"
import { ChakraProvider } from "@chakra-ui/react"
import { system } from "./theme"

export function Provider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>{props.children}</ColorModeProvider>
    </ChakraProvider>
  )
}
```
