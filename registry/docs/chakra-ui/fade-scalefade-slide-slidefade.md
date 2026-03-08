### Fade, ScaleFade, Slide, SlideFade

All transition components have been replaced by a unified `Presence` component
that uses CSS-based animations instead of JavaScript-based transitions.

**Component Mapping:**

- `Fade` → `Presence` with
  `animationName={{ _open: "fade-in", _closed: "fade-out" }}`
- `ScaleFade` → `Presence` with
  `animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}`
- `SlideFade` → `Presence` with
  `animationName={{ _open: "slide-from-bottom, fade-in", _closed: "slide-to-bottom, fade-out" }}`
- `Slide` → `Presence` with direction-specific positioning and animation

**Prop Changes:**

- `in` → `present`
- `initialScale` → removed (scale is fixed in CSS keyframes)
- `offsetX` / `offsetY` → removed (offset is fixed in CSS keyframes)
- `direction` → replaced by positioning props and direction-specific animation
  names

Before:

```tsx
import { Fade, Slide } from "@chakra-ui/react"

const Demo = () => (
  <>
    <Fade in={isOpen}>
      <Box>Fading content</Box>
    </Fade>

    <Slide direction="bottom" in={isOpen}>
      <Box>Sliding content</Box>
    </Slide>
  </>
)
```

After:

```tsx
import { Presence } from "@chakra-ui/react"

const Demo = () => (
  <>
    <Presence
      present={isOpen}
      animationName={{ _open: "fade-in", _closed: "fade-out" }}
      animationDuration="moderate"
    >
      <Box>Fading content</Box>
    </Presence>

    <Presence
      present={isOpen}
      position="fixed"
      bottom="0"
      insetX="0"
      animationName={{
        _open: "slide-from-bottom-full",
        _closed: "slide-to-bottom-full",
      }}
      animationDuration="moderate"
    >
      <Box>Sliding content</Box>
    </Presence>
  </>
)
```

**Slide Direction Mapping:**

| Direction | Positioning                                  | Open Animation           | Close Animation        |
| --------- | -------------------------------------------- | ------------------------ | ---------------------- |
| `top`     | `position="fixed"` `top="0"` `insetX="0"`    | `slide-from-top-full`    | `slide-to-top-full`    |
| `bottom`  | `position="fixed"` `bottom="0"` `insetX="0"` | `slide-from-bottom-full` | `slide-to-bottom-full` |
| `left`    | `position="fixed"` `left="0"` `insetY="0"`   | `slide-from-left-full`   | `slide-to-left-full`   |
| `right`   | `position="fixed"` `right="0"` `insetY="0"`  | `slide-from-right-full`  | `slide-to-right-full`  |

### Slider / RangeSlider

`RangeSlider` has been unified with `Slider` — pass an array value for range
mode. Both now require a `Slider.Control` wrapper and `Slider.HiddenInput`
inside each thumb.

**Component Renaming:**

- `Slider` / `RangeSlider` → `Slider.Root`
- `SliderTrack` / `RangeSliderTrack` → `Slider.Track`
- `SliderFilledTrack` / `RangeSliderFilledTrack` → `Slider.Range`
- `SliderThumb` / `RangeSliderThumb` → `Slider.Thumb`

**Prop Changes:**

- `onChange` → `onValueChange` (receives `{ value }`)
- `onChangeEnd` → `onValueChangeEnd` (receives `{ value }`)
- `onChangeStart` → removed
- `colorScheme` → `colorPalette`
- `isReversed` / `reversed` → removed (use `dir="rtl"`)
- `focusThumbOnChange` → removed

Before:

```tsx
import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react"

const Demo = () => (
  <RangeSlider defaultValue={[10, 30]} onChange={(val) => console.log(val)}>
    <RangeSliderTrack>
      <RangeSliderFilledTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
  </RangeSlider>
)
```

After:

```tsx
import { Slider } from "@chakra-ui/react"

const Demo = () => (
  <Slider.Root
    defaultValue={[10, 30]}
    onValueChange={(e) => console.log(e.value)}
  >
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumb index={0}>
        <Slider.HiddenInput />
      </Slider.Thumb>
      <Slider.Thumb index={1}>
        <Slider.HiddenInput />
      </Slider.Thumb>
    </Slider.Control>
  </Slider.Root>
)
```

### Table

- `TableContainer` is now `Table.ScrollArea`
- `Td`(now called `Table.ColumnHeader`) `isNumeric` is now `textAlign="end"`

The compound component have been renamed slightly.

Before:

```tsx
<Table variant="simple">
  <TableCaption>Imperial to metric conversion factors</TableCaption>
  <Thead>
    <Tr>
      <Th>Product</Th>
      <Th>Category</Th>
      <Th isNumeric>Price</Th>
    </Tr>
  </Thead>
  <Tbody>
    {items.map((item) => (
      <Tr key={item.id}>
        <Td>{item.name}</Td>
        <Td>{item.category}</Td>
        <Td isNumeric>{item.price}</Td>
      </Tr>
    ))}
  </Tbody>
  <Tfoot>
    <Tr>
      <Th>Product</Th>
      <Th>Category</Th>
      <Th isNumeric>Price</Th>
    </Tr>
  </Tfoot>
</Table>
```

After:

```tsx
<Table.Root size="sm">
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeader>Product</Table.ColumnHeader>
      <Table.ColumnHeader>Category</Table.ColumnHeader>
      <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {items.map((item) => (
      <Table.Row key={item.id}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.category}</Table.Cell>
        <Table.Cell textAlign="end">{item.price}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table.Root>
```

### Tag

`TagLeftIcon` and `TagRightIcon` are now `Tag.StartElement` and `Tag.EndElement`

Before:

```tsx
<Tag>
  <TagLeftIcon boxSize="12px" as={AddIcon} />
  <TagLabel>Cyan</TagLabel>
  <TagRightIcon boxSize="12px" as={AddIcon} />
</Tag>
```

After:

```tsx
<Tag.Root>
  <Tag.StartElement>
    <AddIcon />
  </Tag.StartElement>
  <Tag.Label>Cyan</Tag.Label>
  <Tag.EndElement>
    <AddIcon />
  </Tag.EndElement>
</Tag.Root>
```

- `TagCloseButton` is now `Tag.CloseTrigger`

Before:

```tsx
<Tag>
  <TagLabel>Green</TagLabel>
  <TagCloseButton />
</Tag>
```

After:

```tsx
<Tag.Root>
  <Tag.Label>Green</Tag.Label>
  <Tag.CloseTrigger />
</Tag.Root>
```

### Alert

Now uses compound components with dot notation. v3 also introduces
`Alert.Content` as a wrapper for title and description.

**Component Renaming:**

- `Alert` → `Alert.Root`
- `AlertIcon` → `Alert.Indicator`
- `AlertTitle` → `Alert.Title`
- `AlertDescription` → `Alert.Description`

**Prop Changes:**

- Removed `addRole` prop (role is handled automatically in v3)

Before:

```tsx
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react"

const Demo = () => (
  <Alert status="error">
    <AlertIcon />
    <AlertTitle>Your browser is outdated!</AlertTitle>
    <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
  </Alert>
)
```

After:

```tsx
import { Alert } from "@chakra-ui/react"

const Demo = () => (
  <Alert.Root status="error">
    <Alert.Indicator />
    <Alert.Content>
      <Alert.Title>Your browser is outdated!</Alert.Title>
      <Alert.Description>
        Your Chakra experience may be degraded.
      </Alert.Description>
    </Alert.Content>
  </Alert.Root>
)
```

**Variant Changes:**

The `left-accent` and `top-accent` variants have been removed. Replicate them
using border style props on `Alert.Root`:

- `left-accent` → `variant="subtle"` + `borderStartWidth="3px"` +
  `borderStartColor="colorPalette.solid"`
- `top-accent` → `variant="subtle"` + `borderTopWidth="3px"` +
  `borderTopColor="colorPalette.solid"`

New variants `surface` and `outline` have been added.

Before:

```tsx
<Alert status="success" variant="left-accent">
  <AlertIcon />
  Data uploaded to the server. Fire on!
</Alert>
```

After:

```tsx
<Alert.Root
  status="success"
  variant="subtle"
  borderStartWidth="3px"
  borderStartColor="colorPalette.solid"
>
  <Alert.Indicator />
  Data uploaded to the server. Fire on!
</Alert.Root>
```

### Skeleton

- `startColor` and `endColor` props now use CSS variables

Before:

```tsx
<Skeleton startColor="pink.500" endColor="orange.500" />
```

After:

```tsx
<Skeleton
  css={{
    "--start-color": "colors.pink.500",
    "--end-color": "colors.orange.500",
  }}
/>
```

- `isLoaded` prop is now `loading`

Before:

```tsx
<Skeleton isLoaded>
  <span>Chakra ui is cool</span>
</Skeleton>
```

After:

```tsx
<Skeleton loading={false}>
  <span>Chakra ui is cool</span>
</Skeleton>
```

### Stepper

Renamed to `Steps` with compound component pattern. The `useSteps` hook is still
available but with updated API.

**Component Renaming:**

- `Stepper` → `Steps.Root`
- `Step` → `Steps.Item`
- `StepIndicator` → `Steps.Indicator`
- `StepStatus` → `Steps.Status`
- `StepTitle` → `Steps.Title`
- `StepDescription` → `Steps.Description`
- `StepSeparator` → `Steps.Separator`

**Prop Changes:**

- `index` → `step`
- Children must be wrapped in `Steps.List`

**Hook Changes:**

- `useSteps({ index })` → `useSteps({ defaultStep })`
- When using `useSteps`, use `Steps.RootProvider` with `value={stepsApi}`
  instead of `Steps.Root`

Before:

```tsx
import {
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from "@chakra-ui/react"

const Demo = () => (
  <Stepper index={1}>
    {steps.map((step, index) => (
      <Step key={index}>
        <StepIndicator>
          <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} />
        </StepIndicator>
        <StepTitle>{step.title}</StepTitle>
        <StepSeparator />
      </Step>
    ))}
  </Stepper>
)
```

After:

```tsx
import { Steps } from "@chakra-ui/react"

const Demo = () => (
  <Steps.Root step={1}>
    <Steps.List>
      {steps.map((step, index) => (
        <Steps.Item key={index}>
          <Steps.Indicator>
            <Steps.Status complete={<StepIcon />} incomplete={<StepNumber />} />
          </Steps.Indicator>
          <Steps.Title>{step.title}</Steps.Title>
          <Steps.Separator />
        </Steps.Item>
      ))}
    </Steps.List>
  </Steps.Root>
)
```

### Stat

Now uses compound components with dot notation.

**Component Renaming:**

- `Stat` → `Stat.Root`
- `StatLabel` → `Stat.Label`
- `StatNumber` → `Stat.ValueText`
- `StatHelpText` → `Stat.HelpText`
- `StatArrow type="increase"` → `Stat.UpIndicator`
- `StatArrow type="decrease"` → `Stat.DownIndicator`
- `StatGroup` → `Stat.Root` (nest `Stat.Root` children inside)

Before:

```tsx
import {
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react"

const Demo = () => (
  <Stat>
    <StatLabel>Revenue</StatLabel>
    <StatNumber>$45,670</StatNumber>
    <StatHelpText>
      <StatArrow type="increase" />
      12.5%
    </StatHelpText>
  </Stat>
)
```

After:

```tsx
import { Stat } from "@chakra-ui/react"

const Demo = () => (
  <Stat.Root>
    <Stat.Label>Revenue</Stat.Label>
    <Stat.ValueText>$45,670</Stat.ValueText>
    <Stat.HelpText>
      <Stat.UpIndicator />
      12.5%
    </Stat.HelpText>
  </Stat.Root>
)
```
