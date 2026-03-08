# Switch

```tsx
import { Switch } from "@chakra-ui/react"

export const SwitchBasic = () => {
  return (
    <Switch.Root>
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>Activate Chakra</Switch.Label>
    </Switch.Root>
  )
}

```

## Usage

```tsx
import { Switch } from "@chakra-ui/react"
```

```tsx
<Switch.Root>
  <Switch.HiddenInput />
  <Switch.Control>
    <Switch.Thumb />
  </Switch.Control>
  <Switch.Label />
</Switch.Root>
```

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

## Shortcuts

The `Switch` component also provides a set of shortcuts for common use cases.

### SwitchControl

The `Switch.Control` renders the `Switch.Thumb` within it by default.

This works:

```tsx
<Switch.Control>
  <Switch.Thumb />
</Switch.Control>
```

This might be more concise, if you don't need to customize the thumb:

```tsx
<Switch.Control />
```

## Examples

### Sizes

Pass the `size` prop to the `Switch.Root` component to change the size of the
switch component.

```tsx
import { For, HStack, Switch } from "@chakra-ui/react"

export const SwitchWithSizes = () => {
  return (
    <HStack gap="8">
      <For each={["xs", "sm", "md", "lg"]}>
        {(size) => (
          <Switch.Root key={size} size={size}>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label />
          </Switch.Root>
        )}
      </For>
    </HStack>
  )
}

```

### Variants

Pass the `variant` prop to the `Switch.Root` component to change the visual
style of the switch.

```tsx
import { For, HStack, Switch } from "@chakra-ui/react"

export const SwitchWithVariants = () => {
  return (
    <HStack gap="8">
      <For each={["raised", "solid"]}>
        {(variant) => (
          <Switch.Root key={variant} variant={variant}>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label />
          </Switch.Root>
        )}
      </For>
    </HStack>
  )
}

```

### Colors

Pass the `colorPalette` prop to the `Switch.Root` component to change the color
scheme of the component.

```tsx
import { Stack, Switch, Text } from "@chakra-ui/react"

export const SwitchWithColors = () => {
  return (
    <Stack gap="2" align="flex-start">
      {["gray","red","green","blue","teal","pink","purple","cyan","orange","yellow"].map((colorPalette) => (
        <Stack
          align="center"
          key={colorPalette}
          direction="row"
          gap="10"
          px="4"
        >
          <Text minW="8ch">{colorPalette}</Text>

          <Switch.Root colorPalette={colorPalette}>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label />
          </Switch.Root>

          <Switch.Root colorPalette={colorPalette} defaultChecked>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label />
          </Switch.Root>
        </Stack>
      ))}
    </Stack>
  )
}

```

### Controlled

Use the `checked` and `onCheckedChange` prop to control the state of the switch.

```tsx
"use client"

import { Switch } from "@chakra-ui/react"
import { useState } from "react"

export const SwitchControlled = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label />
    </Switch.Root>
  )
}

```

### Hook Form

Here's an example of integrating the switch with `react-hook-form`.

```tsx
"use client"

import { Button, Field, Stack, Switch } from "@chakra-ui/react"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  active: z.boolean({ message: "Active is required" }),
})

type FormData = z.infer<typeof formSchema>

export const SwitchWithHookForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: standardSchemaResolver(formSchema),
  })

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Stack align="flex-start">
        <Controller
          name="active"
          control={control}
          render={({ field }) => (
            <Field.Root invalid={!!errors.active}>
              <Switch.Root
                name={field.name}
                checked={field.value}
                onCheckedChange={({ checked }) => field.onChange(checked)}
              >
                <Switch.HiddenInput onBlur={field.onBlur} />
                <Switch.Control />
                <Switch.Label>Activate Chakra</Switch.Label>
              </Switch.Root>
              <Field.ErrorText>{errors.active?.message}</Field.ErrorText>
            </Field.Root>
          )}
        />
        <Button size="sm" type="submit" mt="4">
          Submit
        </Button>
      </Stack>
    </form>
  )
}

```

### Disabled

Pass the `disabled` prop to the `Switch.Root` component to disable the switch.

```tsx
import { Switch } from "@chakra-ui/react"

export const SwitchWithDisabled = () => {
  return (
    <Switch.Root disabled>
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>Activate Chakra</Switch.Label>
    </Switch.Root>
  )
}

```

### Invalid

Pass the `invalid` prop to the `Switch.Root` component to indicate an error
state for the switch.

```tsx
import { Switch } from "@chakra-ui/react"

export const SwitchWithInvalid = () => {
  return (
    <Switch.Root invalid>
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>Activate Chakra</Switch.Label>
    </Switch.Root>
  )
}

```

### Tooltip

Here's an example of how to compose a switch with a tooltip.

```tsx
import { Switch } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"
import { useId } from "react"

export const SwitchWithTooltip = () => {
  const id = useId()
  return (
    <Tooltip ids={{ trigger: id }} content="This is a tooltip">
      <Switch.Root ids={{ root: id }}>
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>Switch with tooltip</Switch.Label>
      </Switch.Root>
    </Tooltip>
  )
}

```

### Track Indicator

Use the `Switch.Indicator` component to display different indicators based on
the checked state.

```tsx
"use client"

import { Icon, Switch } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

export const SwitchWithTrackIndicator = () => {
  return (
    <Switch.Root colorPalette="blue" size="lg">
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
        <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
          <Icon as={FaSun} color="yellow.400" />
        </Switch.Indicator>
      </Switch.Control>
      <Switch.Label>Switch me</Switch.Label>
    </Switch.Root>
  )
}

```

### Thumb Indicator

Use the `Switch.ThumbIndicator` component to add an icon to the switch thumb.

```tsx
import { Switch } from "@chakra-ui/react"
import { HiCheck, HiX } from "react-icons/hi"

export const SwitchWithThumbIndicator = () => {
  return (
    <Switch.Root size="lg">
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb>
          <Switch.ThumbIndicator fallback={<HiX color="black" />}>
            <HiCheck />
          </Switch.ThumbIndicator>
        </Switch.Thumb>
      </Switch.Control>
      <Switch.Label>Switch me</Switch.Label>
    </Switch.Root>
  )
}

```

### Closed Component

Here's how to setup the Switch for a closed component composition.

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add switch
```

Here's how to use the it

```tsx
<Switch>Activate Chakra</Switch>
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | "on" | `string \| number` | The value of switch input. Useful for form submission. |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | solid | `'solid' \| 'raised'` | The variant of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| checked | undefined | `boolean` | The controlled checked state of the switch |
| disabled | undefined | `boolean` | Whether the switch is disabled. |
| ids | undefined | `Partial<{ root: string; hiddenInput: string; control: string; label: string; thumb: string }>` | The ids of the elements in the switch. Useful for composition. |
| invalid | undefined | `boolean` | If `true`, the switch is marked as invalid. |
| label | undefined | `string` | Specifies the localized strings that identifies the accessibility elements and their states |
| name | undefined | `string` | The name of the input field in a switch
(Useful for form submission). |
| onCheckedChange | undefined | `(details: CheckedChangeDetails) => void` | Function to call when the switch is clicked. |
| readOnly | undefined | `boolean` | Whether the switch is read-only |
| required | undefined | `boolean` | If `true`, the switch input is marked as required, |

## Explorer

Explore the `Switch` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.
