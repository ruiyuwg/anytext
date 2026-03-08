# Segmented Control

```tsx
import { SegmentGroup } from "@chakra-ui/react"

export const SegmentedControlBasic = () => {
  return (
    <SegmentGroup.Root defaultValue="React">
      <SegmentGroup.Indicator />
      <SegmentGroup.Items items={["React", "Vue", "Solid"]} />
    </SegmentGroup.Root>
  )
}

```

## Usage

```tsx
import { SegmentGroup } from "@chakra-ui/react"
```

```tsx
<SegmentGroup.Root>
  <SegmentGroup.Indicator />
  <SegmentGroup.Item>
    <SegmentGroup.ItemText />
    <SegmentGroup.ItemHiddenInput />
  </SegmentGroup.Item>
</SegmentGroup.Root>
```

## Shortcuts

The `SegmentGroup` component also provides a set of shortcuts for common use
cases.

### SegmentGroupItems

The `SegmentGroupItems` shortcut renders a list of items based on the `items`
prop.

This works:

```tsx
<>
  {items.map((item) => (
    <SegmentGroup.Item key={item.value} value={item.value}>
      <SegmentGroup.ItemText>{item.label}</SegmentGroup.ItemText>
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  ))}
</>
```

This might be more concise, if you don't need to customize the items:

```tsx
<SegmentGroup.Items items={items} />
```

## Examples

### Sizes

Use the `size` prop to change the size of the segmented control.

```tsx
import { For, SegmentGroup, Stack, Text, VStack } from "@chakra-ui/react"

export const SegmentedControlWithSizes = () => {
  return (
    <Stack gap="5" align="flex-start">
      <For each={["xs", "sm", "md", "lg"]}>
        {(size) => (
          <VStack key={size} align="flex-start">
            <SegmentGroup.Root size={size} defaultValue="React">
              <SegmentGroup.Indicator />
              <SegmentGroup.Items items={["React", "Vue", "Solid"]} />
            </SegmentGroup.Root>
            <Text>size = {size}</Text>
          </VStack>
        )}
      </For>
    </Stack>
  )
}

```

### Controlled

Use the `value` and `onValueChange` props to control the selected item.

```tsx
"use client"

import { SegmentGroup } from "@chakra-ui/react"
import { useState } from "react"

export const SegmentedControlControlled = () => {
  const [value, setValue] = useState<string | null>("React")
  return (
    <SegmentGroup.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <SegmentGroup.Indicator />
      <SegmentGroup.Items items={["React", "Vue", "Solid"]} />
    </SegmentGroup.Root>
  )
}

```

### Hook Form

Here's an example of how to use the `SegmentedControl` with `react-hook-form`.

```tsx
"use client"

import { Button, Field, SegmentGroup, Stack } from "@chakra-ui/react"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  fontSize: z.string({ message: "Font size is required" }),
})

type FormValues = z.infer<typeof formSchema>

export const SegmentedControlWithHookForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: { fontSize: "md" },
    resolver: standardSchemaResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4" align="flex-start">
        <Controller
          control={control}
          name="fontSize"
          render={({ field }) => (
            <Field.Root invalid={!!errors.fontSize}>
              <Field.Label>Font size</Field.Label>
              <SegmentGroup.Root
                size="sm"
                onBlur={field.onBlur}
                name={field.name}
                value={field.value}
                onValueChange={({ value }) => field.onChange(value)}
              >
                <SegmentGroup.Items items={["sm", "md", "lg"]} />
                <SegmentGroup.Indicator />
              </SegmentGroup.Root>
              <Field.ErrorText>{errors.fontSize?.message}</Field.ErrorText>
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

### Vertical

By default, the segmented control is horizontal. Set the `orientation` prop to
`vertical` to change the orientation of the segmented control.

```tsx
import { SegmentGroup } from "@chakra-ui/react"

export const SegmentedControlVertical = () => {
  return (
    <SegmentGroup.Root defaultValue="React" orientation="vertical">
      <SegmentGroup.Indicator />
      <SegmentGroup.Items items={["React", "Vue", "Solid"]} />
    </SegmentGroup.Root>
  )
}

```

### Disabled

Use the `disabled` prop to disable the segmented control.

```tsx
import { SegmentGroup } from "@chakra-ui/react"

export const SegmentedControlWithDisabled = () => {
  return (
    <SegmentGroup.Root disabled defaultValue="React">
      <SegmentGroup.Indicator />
      <SegmentGroup.Items items={["React", "Vue", "Solid"]} />
    </SegmentGroup.Root>
  )
}

```

### Disabled Item

Use the `disabled` prop on the item to disable it.

```tsx
import { SegmentGroup } from "@chakra-ui/react"

export const SegmentedControlWithDisabledItem = () => {
  return (
    <SegmentGroup.Root defaultValue="React">
      <SegmentGroup.Indicator />
      <SegmentGroup.Items
        items={[
          { label: "React", value: "React" },
          { label: "Vue", value: "Vue", disabled: true },
          { label: "Solid", value: "Solid" },
        ]}
      />
    </SegmentGroup.Root>
  )
}

```

### Custom Indicator

Customize the indicator appearance using CSS variables like
`--segment-indicator-bg` and `--segment-indicator-shadow`.

```tsx
import { SegmentGroup } from "@chakra-ui/react"

export const SegmentedControlWithCustomIndicator = () => {
  return (
    <SegmentGroup.Root
      defaultValue="react"
      css={{
        "--segment-indicator-bg": "colors.teal.500",
        "--segment-indicator-shadow": "shadows.md",
      }}
    >
      <SegmentGroup.Indicator />
      <SegmentGroup.Items
        items={[
          { value: "react", label: "React" },
          { value: "vue", label: "Vue" },
          { value: "solid", label: "Solid" },
        ]}
      />
    </SegmentGroup.Root>
  )
}

```

### Color Palette

By default, the segment control doesn't support changing the design via the
`colorPalette` prop. This example shows how to customize the segmented control
to make the `colorPalette` prop work.

```tsx
import { Center, For, SegmentGroup } from "@chakra-ui/react"

export const SegmentedControlWithColorPalette = () => {
  return (
    <Center minH="dvh">
      <SegmentGroup.Root
        bg="colorPalette.50"
        colorPalette="orange"
        defaultValue="Monthly"
      >
        <SegmentGroup.Indicator />
        <For each={["Monthly", "Yearly"]}>
          {(item) => (
            <SegmentGroup.Item key={item} value={item}>
              <SegmentGroup.ItemText
                _checked={{ color: "colorPalette.fg", fontWeight: "medium" }}
              >
                {item}
              </SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          )}
        </For>
      </SegmentGroup.Root>
    </Center>
  )
}

```

### Icon

Render the `label` as a `ReactNode` to render an icon.

```tsx
import { HStack, SegmentGroup } from "@chakra-ui/react"
import { LuGrid2X2, LuList, LuTable } from "react-icons/lu"

export const SegmentedControlWithIcon = () => {
  return (
    <SegmentGroup.Root defaultValue="table">
      <SegmentGroup.Indicator />
      <SegmentGroup.Items
        items={[
          {
            value: "table",
            label: (
              <HStack>
                <LuTable />
                Table
              </HStack>
            ),
          },
          {
            value: "board",
            label: (
              <HStack>
                <LuGrid2X2 />
                Board
              </HStack>
            ),
          },
          {
            value: "list",
            label: (
              <HStack>
                <LuList />
                List
              </HStack>
            ),
          },
        ]}
      />
    </SegmentGroup.Root>
  )
}

```

### Card

Here's an example of how to use the `SegmentedControl` within a `Card`.

```tsx
import { Button, Card, Field, Heading, SegmentGroup } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"

export const SegmentedControlInCard = () => {
  return (
    <Card.Root width="320px">
      <Card.Header>
        <Heading size="lg">Find your dream home</Heading>
      </Card.Header>
      <Card.Body gap="6">
        <Field.Root>
          <Field.Label>Bedrooms</Field.Label>
          <SegmentGroup.Root defaultValue="Any">
            <SegmentGroup.Indicator />
            <SegmentGroup.Items items={["Any", "1", "2", "3", "3+"]} />
          </SegmentGroup.Root>
        </Field.Root>
        <Field.Root>
          <Field.Label>Beds</Field.Label>
          <SegmentGroup.Root defaultValue="1">
            <SegmentGroup.Indicator />
            <SegmentGroup.Items items={["Any", "1", "2", "2+"]} />
          </SegmentGroup.Root>
        </Field.Root>
        <Field.Root>
          <Field.Label>Bathrooms</Field.Label>
          <SegmentGroup.Root defaultValue="3">
            <SegmentGroup.Indicator />
            <SegmentGroup.Items items={["Any", "1", "2", "3"]} />
          </SegmentGroup.Root>
        </Field.Root>
      </Card.Body>
      <Card.Footer justifyContent="space-between" mt="3">
        <Button variant="surface">Reset</Button>
        <Button>
          <LuSearch /> 20 results
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| defaultValue | undefined | `string` | The initial value of the checked radio when rendered.
Use when you don't need to control the value of the radio group. |
| disabled | undefined | `boolean` | If `true`, the radio group will be disabled |
| form | undefined | `string` | The associate form of the underlying input. |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{\n  root: string\n  label: string\n  indicator: string\n  item: (value: string) => string\n  itemLabel: (value: string) => string\n  itemControl: (value: string) => string\n  itemHiddenInput: (value: string) => string\n}>` | The ids of the elements in the radio. Useful for composition. |
| name | undefined | `string` | The name of the input fields in the radio
(Useful for form submission). |
| onValueChange | undefined | `(details: ValueChangeDetails) => void` | Function called once a radio is checked |
| orientation | undefined | `'horizontal' \| 'vertical'` | Orientation of the radio group |
| readOnly | undefined | `boolean` | Whether the checkbox is read-only |
| value | undefined | `string` | The controlled value of the radio group |

# Select

```tsx
"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"

export const SelectBasic = () => {
  return (
    <Select.Root collection={frameworks} size="sm" width="320px">
      <Select.HiddenSelect />
      <Select.Label>Select framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

```

## Usage

```jsx
import { Select } from "@chakra-ui/react"
```

```jsx
<Select.Root>
  <Select.HiddenSelect />
  <Select.Label />

  <Select.Control>
    <Select.Trigger>
      <Select.ValueText />
    </Select.Trigger>
    <Select.IndicatorGroup>
      <Select.Indicator />
      <Select.ClearTrigger />
    </Select.IndicatorGroup>
  </Select.Control>

  <Select.Positioner>
    <Select.Content>
      <Select.Item />

      <Select.ItemGroup>
        <Select.ItemGroupLabel />
        <Select.Item />
      </Select.ItemGroup>
    </Select.Content>
  </Select.Positioner>
</Select.Root>
```

To setup the select, use `useListCollection` to manage the
[list collection](https://ark-ui.com/docs/collections/list-collection).
