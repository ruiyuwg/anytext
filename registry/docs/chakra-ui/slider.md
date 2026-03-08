# Slider

```tsx
import { Slider } from "@chakra-ui/react"

export const SliderBasic = () => {
  return (
    <Slider.Root width="200px" defaultValue={[40]}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}

```

## Usage

```tsx
import { Slider } from "@chakra-ui/react"
```

```tsx
<Slider.Root>
  <Slider.Label />
  <Slider.ValueText />
  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb>
      <Slider.DraggingIndicator />
      <Slider.HiddenInput />
    </Slider.Thumb>
    <Slider.MarkerGroup>
      <Slider.Marker />
    </Slider.MarkerGroup>
  </Slider.Control>
</Slider.Root>
```

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

## Shortcuts

### `Slider.Thumbs`

This component renders the `Slider.Thumb` and `Slider.HiddenInput` components
for each value.

The code below works:

```tsx
<Slider.Thumb index={0}>
  <Slider.HiddenInput />
</Slider.Thumb>
```

but this might be better if you don't need to customize the thumb:

```tsx
<Slider.Thumbs />
```

### `Slider.Marks`

This component renders the `Slider.MarkerGroup` and `Slider.Marker` components
for each value.

The code below works:

```tsx
<Slider.MarkerGroup>
  <Slider.Marker value={0} />
  <Slider.Marker value={50} />
</Slider.MarkerGroup>
```

but this might be better if you don't need to customize the marker:

```tsx
<Slider.Marks marks={[0, 50]} />
```

## Examples

### Sizes

Use the `size` prop to change the size of the slider.

```tsx
import { For, Slider, Stack } from "@chakra-ui/react"

export const SliderWithSizes = () => {
  return (
    <Stack width="200px" gap="4">
      <For each={["sm", "md", "lg"]}>
        {(size) => (
          <Slider.Root defaultValue={[40]} size={size} key={size}>
            <Slider.Label>Slider - {size}</Slider.Label>
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumbs />
            </Slider.Control>
          </Slider.Root>
        )}
      </For>
    </Stack>
  )
}

```

### Variants

Use the `variant` prop to change the visual style of the slider.

```tsx
import { For, Slider, Stack } from "@chakra-ui/react"

export const SliderWithVariants = () => {
  return (
    <Stack width="200px" gap="4">
      <For each={["outline", "solid"]}>
        {(variant) => (
          <Slider.Root defaultValue={[40]} variant={variant} key={variant}>
            <Slider.Label>Slider - {variant}</Slider.Label>
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumbs />
            </Slider.Control>
          </Slider.Root>
        )}
      </For>
    </Stack>
  )
}

```

### Colors

Use the `colorPalette` prop to change the color of the slider.

```tsx
import { For, Slider, Stack } from "@chakra-ui/react"

const colors = ["gray", "blue", "red", "green", "pink"]

export const SliderWithColors = () => {
  return (
    <Stack gap="4" align="flex-start">
      <For each={colors}>
        {(color) => (
          <Slider.Root
            key={color}
            width="200px"
            colorPalette={color}
            defaultValue={[40]}
          >
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumbs />
            </Slider.Control>
          </Slider.Root>
        )}
      </For>
    </Stack>
  )
}

```

### Label

Use the `label` prop to add a label to the slider.

```tsx
import { Slider } from "@chakra-ui/react"

export const SliderWithLabel = () => {
  return (
    <Slider.Root width="200px" defaultValue={[40]}>
      <Slider.Label>Quantity</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}

```

### Range Slider

Set the `value` or `defaultValue` prop to an array to create a range slider.

```tsx
import { Slider } from "@chakra-ui/react"

export const SliderWithMultipleThumbs = () => {
  return (
    <Slider.Root width="200px" defaultValue={[30, 60]}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}

```

### Prevent Overlap

Use the `minStepsBetweenThumbs` prop to avoid thumbs with the same value.

```tsx
import { Slider } from "@chakra-ui/react"

export const SliderPreventOverlap = () => {
  return (
    <Slider.Root maxW="md" defaultValue={[20, 60]} minStepsBetweenThumbs={8}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}

```

### Collision Behavior

Use the `thumbCollisionBehavior` prop to control how thumbs interact when they
collide. Options are `"none"` (default), `"push"`, or `"swap"`.

```tsx
import { Slider, Stack, Text } from "@chakra-ui/react"

export const SliderWithCollisionBehavior = () => {
  return (
    <Stack gap="4" width="300px">
      <Slider.Root defaultValue={[30, 70]} thumbCollisionBehavior="push">
        <Slider.Label>Price Range</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
      <Text color="fg.muted" textStyle="sm">
        Try dragging the thumbs together to see them push each other
      </Text>
    </Stack>
  )
}

```

### Customization

Here's an example of customizing the thumb with custom icon and background.

```tsx
"use client"

import { Box, Slider } from "@chakra-ui/react"
import { MdGraphicEq } from "react-icons/md"

export const SliderCustomization = () => {
  return (
    <Slider.Root defaultValue={[30]}>
      <Slider.Control>
        <Slider.Track bg="red.100">
          <Slider.Range bg="tomato" />
        </Slider.Track>
        <Slider.Thumb index={0} boxSize={6} borderColor="tomato">
          <Box color="tomato" as={MdGraphicEq} />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}

```

### Value Text

Use the `Slider.ValueText` component to show the current value of the slider.

```tsx
import { HStack, Slider } from "@chakra-ui/react"

export const SliderWithValueText = () => {
  return (
    <Slider.Root maxW="sm" size="sm" defaultValue={[40]}>
      <HStack justify="space-between">
        <Slider.Label>Volume</Slider.Label>
        <Slider.ValueText />
      </HStack>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs rounded="l1" />
      </Slider.Control>
    </Slider.Root>
  )
}

```

### Controlled

Use the `value` and `onValueChange` props to control the value of the slider.

```tsx
"use client"

import { Slider } from "@chakra-ui/react"
import { useState } from "react"

export const SliderControlled = () => {
  const [value, setValue] = useState([40])
  return (
    <Slider.Root
      maxW="200px"
      value={value}
      onValueChange={(e) => setValue(e.value)}
    >
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}

```

### Store

An alternative way to control the slider is to use the `RootProvider` component
and the `useSlider` store hook.

This way you can access the slider state and methods from outside the slider.

```tsx
"use client"

import { Code, Slider, Stack, useSlider } from "@chakra-ui/react"

export const SliderWithStore = () => {
  const slider = useSlider({
    defaultValue: [40],
    thumbAlignment: "center",
  })

  return (
    <Stack align="flex-start">
      <Code>current: {slider.value}</Code>
      <Slider.RootProvider value={slider} width="200px">
        <Slider.Label>Slider</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.RootProvider>
    </Stack>
  )
}

```

### Hook Form

Here's an example of how to integrate a slider with `react-hook-form`.

```tsx
"use client"

import { Button, Field, Slider, Stack } from "@chakra-ui/react"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  value: z.array(
    z
      .number({ message: "Value is required" })
      .min(60, { message: "Value must be greater than 60" }),
  ),
})

type FormValues = z.infer<typeof formSchema>

export const SliderWithHookForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: standardSchemaResolver(formSchema),
    defaultValues: { value: [40] },
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <Stack align="flex-start" gap="4" maxW="300px">
        <Controller
          name="value"
          control={control}
          render={({ field }) => (
            <Field.Root invalid={!!errors.value?.length}>
              <Field.Label>Slider: {field.value[0]}</Field.Label>
              <Slider.Root
                width="full"
                name={field.name}
                value={field.value}
                onValueChange={({ value }) => {
                  field.onChange(value)
                }}
                onFocusChange={({ focusedIndex }) => {
                  if (focusedIndex !== -1) return
                  field.onBlur()
                }}
              >
                <Slider.Control>
                  <Slider.Track>
                    <Slider.Range />
                  </Slider.Track>
                  <Slider.Thumbs />
                </Slider.Control>
              </Slider.Root>
              <Field.ErrorText>{errors.value?.[0]?.message}</Field.ErrorText>
            </Field.Root>
          )}
        />

        <Button size="sm" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  )
}

```

### Disabled

Use the `disabled` prop to disable the slider.

```tsx
import { Slider } from "@chakra-ui/react"

export const SliderDisabled = () => {
  return (
    <Slider.Root width="200px" disabled defaultValue={[40]}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}

```

### Change End

Use the `onValueChangeEnd` prop to listen to the end of the slider change.

```tsx
"use client"

import { Box, Code, Slider, Stack } from "@chakra-ui/react"
import { useState } from "react"

const initialValue = [50]

export const SliderChangeEnd = () => {
  const [value, setValue] = useState(initialValue)
  const [endValue, setEndValue] = useState(initialValue)

  return (
    <Box maxW="240px">
      <Slider.Root
        value={value}
        onValueChange={(e) => setValue(e.value)}
        onValueChangeEnd={(e) => setEndValue(e.value)}
      >
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>

      <Stack mt="3" gap="1">
        <Code>
          onChange: <b>{value}</b>
        </Code>
        <Code>
          onChangeEnd: <b>{endValue}</b>
        </Code>
      </Stack>
    </Box>
  )
}

```

### Steps

Use the `step` prop to set the step value of the slider.

```tsx
import { Slider } from "@chakra-ui/react"

export const SliderWithStep = () => {
  return (
    <Slider.Root width="200px" defaultValue={[40]} step={10}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}

```

### Thumb Alignment

Use the `thumbAlignment` and `thumbSize` prop to align the thumb within the
track. By default, the thumb is aligned to the start of the track.

```tsx
import { Slider, Stack } from "@chakra-ui/react"

export const SliderWithThumbAlignment = () => {
  return (
    <Stack maxW="200px" gap="4">
      <Slider.Root
        thumbAlignment="contain"
        thumbSize={{ width: 16, height: 16 }}
        defaultValue={[40]}
      >
        <Slider.Label>Slider (contain)</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>

      <Slider.Root thumbAlignment="center" defaultValue={[40]}>
        <Slider.Label>Slider (center)</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
    </Stack>
  )
}

```

### Marks

Use the `marks` prop to display marks on the slider.

```tsx
import { For, Slider, Stack, Text, VStack } from "@chakra-ui/react"

export const SliderWithMarks = () => {
  return (
    <Stack gap="4">
      <For each={["sm", "md", "lg"]}>
        {(size) => (
          <VStack key={size} align="flex-start">
            <Slider.Root
              key={size}
              size={size}
              defaultValue={[40]}
              width="200px"
            >
              <Slider.Control>
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Thumbs />
                <Slider.Marks marks={[0, 50, 100]} />
              </Slider.Control>
            </Slider.Root>
            <Text>size = {size}</Text>
          </VStack>
        )}
      </For>
    </Stack>
  )
}

```

You can also add labels to the marks using the `marks` prop.

```tsx
import { Slider } from "@chakra-ui/react"

const marks = [
  { value: 0, label: "0%" },
  { value: 50, label: "50%" },
  { value: 100, label: "100%" },
]

export const SliderWithMarksAndLabel = () => {
  return (
    <Slider.Root width="200px" colorPalette="pink" defaultValue={[40]}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
        <Slider.Marks marks={marks} />
      </Slider.Control>
    </Slider.Root>
  )
}

```

### Vertical

Use the `orientation` prop to change the orientation of the slider.

```tsx
import { Slider } from "@chakra-ui/react"

export const SliderVertical = () => {
  return (
    <Slider.Root height="200px" orientation="vertical" defaultValue={[40]}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}

```

### Vertical with Marks

Here's an example of a vertical slider with marks.

```tsx
import { Slider } from "@chakra-ui/react"

const marks = [
  { value: 0, label: "0%" },
  { value: 50, label: "50%" },
  { value: 100, label: "100%" },
]

export const SliderWithMarksVertical = () => {
  return (
    <Slider.Root
      height="200px"
      orientation="vertical"
      colorPalette="pink"
      defaultValue={[40]}
    >
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
        <Slider.Marks marks={marks} />
      </Slider.Control>
    </Slider.Root>
  )
}

```

### Dragging Indicator

Render the `Slider.DraggingIndicator` component to show an indicator or tooltip
when dragging the thumb.

> Pro Tip: You can render the `Slider.ValueText` component inside the
> `Slider.DraggingIndicator` to show the current value.

```tsx
import { Slider } from "@chakra-ui/react"

export const SliderWithDraggingIndicator = () => {
  return (
    <Slider.Root maxW="200px" defaultValue={[40]}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.DraggingIndicator
            layerStyle="fill.solid"
            top="6"
            rounded="sm"
            px="1.5"
          >
            <Slider.ValueText />
          </Slider.DraggingIndicator>
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}

```

### Closed Component

If you prefer a closed component composition, check out the snippet below.

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add slider
```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| max | 100 | `number` | The maximum value of the slider |
| min | 0 | `number` | The minimum value of the slider |
| minStepsBetweenThumbs | 0 | `number` | The minimum permitted steps between multiple thumbs.

`minStepsBetweenThumbs` \* `step` should reflect the gap between the thumbs.

- `step: 1` and `minStepsBetweenThumbs: 10` => gap is `10`
- `step: 10` and `minStepsBetweenThumbs: 2` => gap is `20` |
  | orientation | horizontal | `'vertical' \| 'horizontal'` | The orientation of the component |
  | origin | "start" | `'center' \| 'start' \| 'end'` | The origin of the slider range. The track is filled from the origin
  to the thumb for single values.
- "start": Useful when the value represents an absolute value
- "center": Useful when the value represents an offset (relative)
- "end": Useful when the value represents an offset from the end |
  | step | 1 | `number` | The step value of the slider |
  | thumbAlignment | "contain" | `'center' \| 'contain'` | The alignment of the slider thumb relative to the track
- `center`: the thumb will extend beyond the bounds of the slider track.
- `contain`: the thumb will be contained within the bounds of the track. |
  | colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
  | size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
  | variant | outline | `'outline' \| 'solid'` | The variant of the component |
  | as | undefined | `React.ElementType` | The underlying element to render. |
  | asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
  | unstyled | undefined | `boolean` | Whether to remove the component's style. |
  | aria-label | undefined | `string[]` | The aria-label of each slider thumb. Useful for providing an accessible name to the slider |
  | aria-labelledby | undefined | `string[]` | The `id` of the elements that labels each slider thumb. Useful for providing an accessible name to the slider |
  | defaultValue | undefined | `number[]` | The initial value of the slider when rendered.
  Use when you don't need to control the value of the slider. |
  | disabled | undefined | `boolean` | Whether the slider is disabled |
  | form | undefined | `string` | The associate form of the underlying input element. |
  | getAriaValueText | undefined | `(details: ValueTextDetails) => string` | Function that returns a human readable value for the slider thumb |
  | id | undefined | `string` | The unique identifier of the machine. |
  | ids | undefined | `Partial<{\n  root: string\n  thumb: (index: number) => string\n  hiddenInput: (index: number) => string\n  control: string\n  track: string\n  range: string\n  label: string\n  valueText: string\n  marker: (index: number) => string\n}>` | The ids of the elements in the slider. Useful for composition. |
  | invalid | undefined | `boolean` | Whether the slider is invalid |
  | name | undefined | `string` | The name associated with each slider thumb (when used in a form) |
  | onFocusChange | undefined | `(details: FocusChangeDetails) => void` | Function invoked when the slider's focused index changes |
  | onValueChange | undefined | `(details: ValueChangeDetails) => void` | Function invoked when the value of the slider changes |
  | onValueChangeEnd | undefined | `(details: ValueChangeDetails) => void` | Function invoked when the slider value change is done |
  | readOnly | undefined | `boolean` | Whether the slider is read-only |
  | thumbSize | undefined | `{ width: number; height: number }` | The slider thumbs dimensions |
  | value | undefined | `number[]` | The controlled value of the slider |

## Explorer

Explore the `Slider` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.
