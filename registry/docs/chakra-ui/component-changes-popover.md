### Popover

Now uses compound components with an explicit `Popover.Positioner` wrapper
around content. `PopoverTrigger` now requires `asChild`.

**Component Renaming:**

- `Popover` → `Popover.Root`
- `PopoverTrigger` → `Popover.Trigger` (add `asChild`)
- `PopoverContent` → `Popover.Content` (wrap in `Popover.Positioner`)
- `PopoverHeader` → `Popover.Title`
- `PopoverBody` → `Popover.Body`
- `PopoverFooter` → `Popover.Footer`
- `PopoverArrow` → `Popover.Arrow`
- `PopoverCloseButton` → `Popover.CloseTrigger`
- `PopoverAnchor` → `Popover.Anchor`

**Prop Changes:**

- `isOpen` → `open`
- `defaultIsOpen` → `defaultOpen`
- `onClose` / `onOpen` → `onOpenChange` (receives `{ open }`)
- `closeOnBlur` → `closeOnInteractOutside`
- `closeOnEsc` → `closeOnEscape`
- `isLazy` → `lazyMount`
- `lazyBehavior="unmount"` → `unmountOnExit`
- `initialFocusRef` → `initialFocusEl={() => ref.current}`
- `trigger="hover"` → use `HoverCard` component instead
- Positioning props (`placement`, `gutter`, `flip`, `offset`, `matchWidth`,
  `strategy`) → grouped into `positioning` object
- `matchWidth` → `positioning.sameWidth`

**Removed Props:** `computePositionOnMount`, `returnFocusOnClose`,
`arrowShadowColor`, `modifiers`

Before:

```tsx
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react"

const Demo = () => (
  <Popover placement="bottom" closeOnBlur={false} isLazy>
    <PopoverTrigger>
      <Button>Trigger</Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverHeader>Title</PopoverHeader>
      <PopoverBody>Content here</PopoverBody>
    </PopoverContent>
  </Popover>
)
```

After:

```tsx
import { Popover } from "@chakra-ui/react"

const Demo = () => (
  <Popover.Root
    positioning={{ placement: "bottom" }}
    closeOnInteractOutside={false}
    lazyMount
  >
    <Popover.Trigger asChild>
      <Button>Trigger</Button>
    </Popover.Trigger>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Arrow />
        <Popover.CloseTrigger />
        <Popover.Title>Title</Popover.Title>
        <Popover.Body>Content here</Popover.Body>
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
)
```

**Hover Trigger → HoverCard:**

If you used `trigger="hover"`, migrate to the `HoverCard` component:

Before:

```tsx
<Popover trigger="hover" openDelay={500}>
  <PopoverTrigger>
    <Button>Hover me</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverBody>Tooltip-like content</PopoverBody>
  </PopoverContent>
</Popover>
```

After:

```tsx
import { HoverCard } from "@chakra-ui/react"

const Demo = () => (
  <HoverCard.Root openDelay={500}>
    <HoverCard.Trigger asChild>
      <Button>Hover me</Button>
    </HoverCard.Trigger>
    <HoverCard.Positioner>
      <HoverCard.Content>
        <HoverCard.Arrow />
        Content here
      </HoverCard.Content>
    </HoverCard.Positioner>
  </HoverCard.Root>
)
```

### NumberInput

**Component Renaming:**

- `NumberInput` → `NumberInput.Root`
- `NumberInputField` → `NumberInput.Input`
- `NumberInputStepper` → `NumberInput.Control`
- `NumberIncrementStepper` → `NumberInput.IncrementTrigger`
- `NumberDecrementStepper` → `NumberInput.DecrementTrigger`

**Prop Changes:**

- `isDisabled` → `disabled`
- `isInvalid` → `invalid`
- `isReadOnly` → `readOnly`
- `isRequired` → `required`
- `onChange` → `onValueChange` (receives `{ value, valueAsNumber }`)
- `onInvalid` → `onValueInvalid`
- `keepWithinRange` → `allowOverflow` (inverted: `false` → `true`)
- `focusBorderColor` / `errorBorderColor` → use `--focus-color` /
  `--error-color` CSS variables
- `parse` and `format` → removed, use `formatOptions` instead

Before:

```tsx
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react"

const Demo = () => (
  <NumberInput
    isDisabled
    onChange={(valStr, valNum) => {}}
    keepWithinRange={false}
  >
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
)
```

After:

```tsx
import { NumberInput } from "@chakra-ui/react"

const Demo = () => (
  <NumberInput.Root disabled onValueChange={(e) => {}} allowOverflow>
    <NumberInput.Input />
    <NumberInput.Control>
      <NumberInput.IncrementTrigger />
      <NumberInput.DecrementTrigger />
    </NumberInput.Control>
  </NumberInput.Root>
)
```

### Divider

Renamed to `Separator` to better align with semantic HTML and ARIA standards.
The component now uses a `div` element for better layout control.

- `Divider` → `Separator`
- Relies on `borderTopWidth` and `borderInlineStartWidth` for styling
- To change thickness, set the `--divider-border-width` CSS variable
- All props (`orientation`, `variant`, styling) remain the same

Before:

```tsx
import { Divider } from "@chakra-ui/react"

const Demo = () => (
  <>
    <Divider orientation="horizontal" />
    <Divider orientation="vertical" height="20px" />
  </>
)
```

After:

```tsx
import { Separator } from "@chakra-ui/react"

const Demo = () => (
  <>
    <Separator orientation="horizontal" />
    <Separator orientation="vertical" height="20px" />
  </>
)
```

### Card

Now uses compound components with dot notation. The migration is straightforward
— only component names change, all props remain the same.

**Component Renaming:**

- `Card` → `Card.Root`
- `CardHeader` → `Card.Header`
- `CardBody` → `Card.Body`
- `CardFooter` → `Card.Footer`

v3 also introduces `Card.Title` and `Card.Description` as new semantic
components for better structure.

Before:

```tsx
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react"

const Demo = () => (
  <Card maxW="sm">
    <CardHeader>
      <Heading size="md">Living room Sofa</Heading>
    </CardHeader>
    <CardBody>
      <Text>This sofa is perfect for modern tropical spaces.</Text>
      <Text color="blue.600" fontSize="2xl">
        $450
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant="solid" colorScheme="blue">
        Buy now
      </Button>
    </CardFooter>
  </Card>
)
```

After:

```tsx
import { Button, Card, Heading, Text } from "@chakra-ui/react"

const Demo = () => (
  <Card.Root maxW="sm">
    <Card.Header>
      <Heading size="md">Living room Sofa</Heading>
    </Card.Header>
    <Card.Body>
      <Text>This sofa is perfect for modern tropical spaces.</Text>
      <Text color="blue.600" fontSize="2xl">
        $450
      </Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="solid" colorPalette="blue">
        Buy now
      </Button>
    </Card.Footer>
  </Card.Root>
)
```

### Input, Select, Textarea

- Removed `invalid` prop in favor of wrapping the component in a `Field`
  component. This allows for adding a label, error text and asterisk easily.

Before

```tsx
<Input invalid />
```

After

```tsx
<Field.Root invalid>
  <Field.Label>Email</Field.Label>
  <Input />
  <Field.ErrorText>This field is required</Field.ErrorText>
</Field.Root>
```

### Link

- Removed `isExternal` prop in favor of explicitly setting the `target` and
  `rel` props

Before

```tsx
<Link isExternal>Click me</Link>
```

After

```tsx
<Link target="_blank" rel="noopener noreferrer">
  Click me
</Link>
```

### List

Now uses compound components with dot notation. `OrderedList` and
`UnorderedList` are no longer separate components — use `List.Root` with the
`as` prop instead.

**Component Renaming:**

- `List` → `List.Root`
- `OrderedList` → `List.Root as="ol"`
- `UnorderedList` → `List.Root as="ul"`
- `ListItem` → `List.Item`
- `ListIcon` → `List.Indicator`

**Prop Changes:**

- `spacing` → `gap`
- `styleType` → `listStyleType`
- `stylePosition` → `listStylePosition`

Before:

```tsx
import { ListIcon, ListItem, UnorderedList } from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"

const Demo = () => (
  <UnorderedList spacing={3}>
    <ListItem>
      <ListIcon as={MdCheckCircle} color="green.500" />
      Lorem ipsum dolor sit amet
    </ListItem>
    <ListItem>
      <ListIcon as={MdCheckCircle} color="green.500" />
      Consectetur adipiscing elit
    </ListItem>
  </UnorderedList>
)
```

After:

```tsx
import { List } from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"

const Demo = () => (
  <List.Root as="ul" gap={3}>
    <List.Item>
      <List.Indicator as={MdCheckCircle} color="green.500" />
      Lorem ipsum dolor sit amet
    </List.Item>
    <List.Item>
      <List.Indicator as={MdCheckCircle} color="green.500" />
      Consectetur adipiscing elit
    </List.Item>
  </List.Root>
)
```

For ordered lists:

Before:

```tsx
import { ListItem, OrderedList } from "@chakra-ui/react"

const Demo = () => (
  <OrderedList styleType="lower-roman" stylePosition="inside">
    <ListItem>First item</ListItem>
    <ListItem>Second item</ListItem>
  </OrderedList>
)
```

After:

```tsx
import { List } from "@chakra-ui/react"

const Demo = () => (
  <List.Root as="ol" listStyleType="lower-roman" listStylePosition="inside">
    <List.Item>First item</List.Item>
    <List.Item>Second item</List.Item>
  </List.Root>
)
```

### Button

**Prop Changes:**

- `isActive` → `data-active` attribute
- `isDisabled` → `disabled`
- `isLoading` → `loading`
- `colorScheme` → `colorPalette`
- `leftIcon` / `rightIcon` → render icons as children directly
- `iconSpacing` → `gap`
- `variant="unstyled"` → `unstyled` boolean prop
- `variant="link"` → `variant="plain"`

Before:

```tsx
<Button colorScheme="blue" isLoading leftIcon={<Download />} iconSpacing={2}>
  Download
</Button>
```

After:

```tsx
<Button colorPalette="blue" loading gap={2}>
  <Download />
  Download
</Button>
```

**ButtonGroup Changes:**

- `isAttached` → `attached`
- `isDisabled` → removed (propagate `disabled` to each child instead)

### IconButton

- `icon` → render as `children` directly
- `isRounded` → `borderRadius="full"`
- `isDisabled` → `disabled`

Before:

```tsx
<IconButton icon={<SearchIcon />} isRounded isDisabled aria-label="Search" />
```

After:

```tsx
<IconButton borderRadius="full" disabled aria-label="Search">
  <SearchIcon />
</IconButton>
```

### Spinner

- Change the `thickness` prop to `borderWidth`
- Change the `speed` prop to `animationDuration`

Before

```tsx
<Spinner thickness="2px" speed="0.5s" />
```

After

```tsx
<Spinner borderWidth="2px" animationDuration="0.5s" />
```
