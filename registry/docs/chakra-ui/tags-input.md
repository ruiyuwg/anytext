# Tags Input

```tsx
"use client"

import { Span, TagsInput } from "@chakra-ui/react"

export const TagsInputBasic = () => {
  return (
    <TagsInput.Root defaultValue={["React", "Chakra", "TypeScript"]}>
      <TagsInput.Label>Tags</TagsInput.Label>
      <TagsInput.Control>
        <TagsInput.Items />
        <TagsInput.Input placeholder="Add tag..." />
      </TagsInput.Control>
      <Span textStyle="xs" color="fg.muted" ms="auto">
        Press Enter or Return to add tag
      </Span>
    </TagsInput.Root>
  )
}

```

## Usage

```jsx
import { TagsInput } from "@chakra-ui/react"
```

```jsx
<TagsInput.Root>
  <TagsInput.Label />
  <TagsInput.Control>
    <TagsInput.Item>
      <TagsInput.ItemPreview>
        <TagsInput.ItemText />
        <TagsInput.ItemDeleteTrigger />
      </TagsInput.ItemPreview>
      <TagsInput.ItemInput />
    </TagsInput.Item>
    <TagsInput.Input />
  </TagsInput.Control>
</TagsInput.Root>
```

## Shortcuts

The `TagsInput` component also provides a set of shortcuts for common use cases.

### TagsInputItems

The `TagsInputItems` shortcut renders all tag items automatically based on the
current value.

This works:

```jsx
<TagsInput.Context>
  {({ value }) =>
    value.map((tag, index) => (
      <TagsInput.Item key={index} index={index} value={tag}>
        <TagsInput.ItemPreview>
          <TagsInput.ItemText>{tag}</TagsInput.ItemText>
          <TagsInput.ItemDeleteTrigger />
        </TagsInput.ItemPreview>
        <TagsInput.ItemInput />
      </TagsInput.Item>
    ))
  }
</TagsInput.Context>
```

This might be more concise, if you don't need to customize the items:

```jsx
<TagsInput.Items />
```

## Examples

### Sizes

Use the `size` prop to adjust the size of the tags input.

```tsx
"use client"

import { For, Span, Stack, TagsInput } from "@chakra-ui/react"

export const TagsInputWithSizes = () => {
  return (
    <Stack>
      <For each={["xs", "sm", "md", "lg"]}>
        {(size) => (
          <TagsInput.Root
            key={size}
            size={size}
            readOnly
            defaultValue={["React", "Chakra", "TypeScript"]}
          >
            <TagsInput.Label>Tags (size={size})</TagsInput.Label>
            <TagsInput.Control>
              <TagsInput.Items />
              <TagsInput.Input placeholder="Add tag..." />
            </TagsInput.Control>
            <Span textStyle="xs" color="fg.muted" ms="auto">
              Press Enter or Return to add tag
            </Span>
          </TagsInput.Root>
        )}
      </For>
    </Stack>
  )
}

```

### Variants

Use the `variant` prop to change the visual style of the tags input.

```tsx
"use client"

import { For, Span, Stack, TagsInput } from "@chakra-ui/react"

export const TagsInputWithVariants = () => {
  return (
    <Stack>
      <For each={["outline", "subtle", "flushed"]}>
        {(variant) => (
          <TagsInput.Root
            key={variant}
            variant={variant}
            readOnly
            defaultValue={["React", "Chakra", "TypeScript"]}
          >
            <TagsInput.Label>Tags (variant={variant})</TagsInput.Label>
            <TagsInput.Control>
              <TagsInput.Items />
              <TagsInput.Input placeholder="Add tag..." />
            </TagsInput.Control>
            <Span textStyle="xs" color="fg.muted" ms="auto">
              Press Enter or Return to add tag
            </Span>
          </TagsInput.Root>
        )}
      </For>
    </Stack>
  )
}

```

### Controlled

Use the `value` and `onValueChange` props to programmatically control the tags.

```tsx
"use client"

import { TagsInput } from "@chakra-ui/react"
import { useState } from "react"

export const TagsInputControlled = () => {
  const [tags, setTags] = useState<string[]>(["React", "Chakra"])

  return (
    <TagsInput.Root
      value={tags}
      onValueChange={(details) => setTags(details.value)}
    >
      <TagsInput.Label>Tags</TagsInput.Label>
      <TagsInput.Control>
        <TagsInput.Items />
        <TagsInput.Input placeholder="Add tag..." />
      </TagsInput.Control>
    </TagsInput.Root>
  )
}

```

### Store

An alternative way to control the tags input is to use the `RootProvider`
component and the `useTagsInput` store hook.

This way you can access the tags input state and methods from outside the
component.

> Use `RootProvider + useTagsInput` or `Root`, not both.

```tsx
"use client"

import { Button, Stack, TagsInput } from "@chakra-ui/react"
import { useTagsInput } from "@chakra-ui/react"

export const TagsInputWithStore = () => {
  const tags = useTagsInput()

  return (
    <Stack align="flex-start" gap="4">
      <TagsInput.RootProvider value={tags}>
        <TagsInput.Label>Tags: {JSON.stringify(tags.value)}</TagsInput.Label>
        <TagsInput.Control>
          <TagsInput.Items />
          <TagsInput.Input placeholder="Add tag..." />
        </TagsInput.Control>
      </TagsInput.RootProvider>

      <Button variant="outline" size="sm" onClick={() => tags.clearValue()}>
        Clear All
      </Button>
    </Stack>
  )
}

```

### Max Tags

Pass the `max` prop to the `TagsInput.Root` component to limit the number of
tags that can be added.

```tsx
"use client"

import { Badge, Button, HStack, Span, TagsInput } from "@chakra-ui/react"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isValidEmail = (value: string) => EMAIL_REGEX.test(value)

export const TagsInputWithMax = () => {
  return (
    <TagsInput.Root
      max={3}
      validate={(e) => isValidEmail(e.inputValue)}
      defaultValue={["sage@company.com"]}
    >
      <TagsInput.Label>Invite guests (max 3)</TagsInput.Label>

      <TagsInput.Control>
        <TagsInput.Items />

        <TagsInput.Input placeholder="Add guests" />
      </TagsInput.Control>

      <TagsInput.Context>
        {({ value }) => (
          <HStack justify="space-between" hidden={value.length === 0} mt="2.5">
            <Span>
              You've invited <Badge>{value.length} / 3 guests</Badge> to your
              event
            </Span>
            <Button size="sm">Invite</Button>
          </HStack>
        )}
      </TagsInput.Context>
    </TagsInput.Root>
  )
}

```

### Editable Tags

Use the `editable` prop to enable inline editing of existing tags by clicking on
them, allowing users to quickly update tag values.

```tsx
"use client"

import { Span, TagsInput } from "@chakra-ui/react"

export const TagsInputEditable = () => (
  <TagsInput.Root editable defaultValue={["React", "Chakra"]}>
    <TagsInput.Label>Edit Tags Inline</TagsInput.Label>
    <TagsInput.Control>
      <TagsInput.Items />

      <TagsInput.Input placeholder="Add or edit tags..." />
      <TagsInput.ClearTrigger />
    </TagsInput.Control>

    <TagsInput.HiddenInput />

    <Span textStyle="xs" color="fg.muted" ms="auto">
      Use the arrow keys to navigate and press Enter to edit
    </Span>
  </TagsInput.Root>
)

```

### Validate Tag

Use the `validate` prop to implement custom validation rules. Tags will be added
when the validation passes.

```tsx
"use client"

import { TagsInput } from "@chakra-ui/react"

export const TagsInputValidation = () => (
  <TagsInput.Root
    defaultValue={["React", "Chakra"]}
    validate={(e) => e.inputValue.length >= 3}
  >
    <TagsInput.Label>Tags (min 3 chars)</TagsInput.Label>

    <TagsInput.Control>
      <TagsInput.Items />

      <TagsInput.Input placeholder="Add a tag..." />
    </TagsInput.Control>

    <TagsInput.HiddenInput />
  </TagsInput.Root>
)

```

### Disabled

Use the `disabled` prop to disable the tags input to prevent user interaction.

```tsx
"use client"

import { TagsInput } from "@chakra-ui/react"

export const TagsInputDisabled = () => (
  <TagsInput.Root disabled defaultValue={["React", "Chakra"]}>
    <TagsInput.Label>Disabled Tags</TagsInput.Label>

    <TagsInput.Control>
      <TagsInput.Items />

      <TagsInput.Input placeholder="Can't type here" />
    </TagsInput.Control>

    <TagsInput.HiddenInput />
  </TagsInput.Root>
)

```

### Readonly

Use the `readOnly` prop to make the tags input read-only. Tags input can be
focused but can't be modified.

```tsx
"use client"

import { TagsInput } from "@chakra-ui/react"

export const TagsInputReadOnly = () => (
  <TagsInput.Root readOnly defaultValue={["React", "Chakra"]}>
    <TagsInput.Label>Read Only Tags</TagsInput.Label>
    <TagsInput.Control>
      <TagsInput.Items />

      <TagsInput.Input placeholder="Read-only..." />
    </TagsInput.Control>

    <TagsInput.HiddenInput />
  </TagsInput.Root>
)

```

### Invalid

Pass the `invalid` prop to the `TagsInput.Root` component to display the tags
input in an invalid state with error messages.

```tsx
"use client"

import { Field, TagsInput } from "@chakra-ui/react"

export const TagsInputInvalid = () => (
  <Field.Root invalid>
    <TagsInput.Root defaultValue={["React", "Chakra"]}>
      <TagsInput.Label>Invalid Tags</TagsInput.Label>
      <TagsInput.Control>
        <TagsInput.Items />

        <TagsInput.Input placeholder="Add tags..." />
      </TagsInput.Control>

      <TagsInput.HiddenInput />
    </TagsInput.Root>
    <Field.ErrorText>This is an error</Field.ErrorText>
  </Field.Root>
)

```

### Field

Here's an example that composes the `TagsInput.Root` with the `Field` component
to add labels, helper text, and error messages.

```tsx
"use client"

import { Field, TagsInput } from "@chakra-ui/react"

export const TagsInputWithField = () => {
  return (
    <Field.Root>
      <TagsInput.Root defaultValue={["React", "Chakra", "TypeScript"]}>
        <TagsInput.Label>Enter tags</TagsInput.Label>
        <TagsInput.Control>
          <TagsInput.Items />
          <TagsInput.Input placeholder="Add tag..." />
        </TagsInput.Control>
      </TagsInput.Root>
      <Field.HelperText>Add emails separated by commas</Field.HelperText>
    </Field.Root>
  )
}

```

### Form

Here's an example that composes the `TagsInput.Root` with a `form` to collect
structured data and handle submissions.

```tsx
"use client"

import { Button, Field, Input, Stack, TagsInput } from "@chakra-ui/react"

export const TagsInputWithForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const title = formData.get("title")
        const categories = formData.get("categories")
        console.log("Submitted formData:", { title, categories })
      }}
    >
      <Stack gap="4">
        <Field.Root>
          <Field.Label>Title</Field.Label>
          <Input name="title" />
        </Field.Root>

        <Field.Root>
          <TagsInput.Root name="categories">
            <TagsInput.Label>Categories</TagsInput.Label>
            <TagsInput.Control>
              <TagsInput.Items />
              <TagsInput.Input placeholder="Add tag..." />
            </TagsInput.Control>

            <TagsInput.HiddenInput />
          </TagsInput.Root>
          <Field.HelperText>
            Add frameworks and libraries you use
          </Field.HelperText>
        </Field.Root>

        <Button type="submit" variant="solid" mt="3">
          Submit
        </Button>
      </Stack>
    </form>
  )
}

```

### Paste

Pass the `addOnPaste` prop to the `TagsInput.Root` component to allow users to
paste multiple values at once, automatically splitting them into individual tags
based on a delimiter.

```tsx
"use client"

import { Box, Clipboard, IconButton, Stack, TagsInput } from "@chakra-ui/react"

export const TagsInputWithPaste = () => (
  <Stack gap="8">
    <SampleClipboard value="React,Chakra,TypeScript" />
    <TagsInput.Root addOnPaste delimiter=",">
      <TagsInput.Label>Paste Tags</TagsInput.Label>
      <TagsInput.Control>
        <TagsInput.Items />
        <TagsInput.Input placeholder="Paste" />
        <TagsInput.ClearTrigger />
      </TagsInput.Control>

      <TagsInput.HiddenInput />
    </TagsInput.Root>
  </Stack>
)

const SampleClipboard = (props: { value: string }) => (
  <Clipboard.Root value={props.value}>
    <Box textStyle="label" mb="2">
      Copy Tags
    </Box>
    <Clipboard.ValueText me="3" textStyle="sm" fontFamily="mono" />
    <Clipboard.Trigger asChild>
      <IconButton variant="surface" size="2xs">
        <Clipboard.Indicator />
      </IconButton>
    </Clipboard.Trigger>
  </Clipboard.Root>
)

```

### Blur Behavior

Use the `blurBehavior` prop to configure how the input behaves when it loses
focus, such as automatically creating a tag from the current input value.

```tsx
"use client"

import { TagsInput } from "@chakra-ui/react"

export const TagsInputWithBlurBehavior = () => (
  <TagsInput.Root blurBehavior="add">
    <TagsInput.Label>Create Tag on Blur</TagsInput.Label>
    <TagsInput.Control>
      <TagsInput.Items />

      <TagsInput.Input placeholder="Type and blur to create tag..." />
      <TagsInput.ClearTrigger />
    </TagsInput.Control>

    <TagsInput.HiddenInput />
  </TagsInput.Root>
)

```

### Custom Delimiter

Use the `delimiter` prop to use custom delimiters like commas, semicolons, or
spaces to create new tags as users type.

```tsx
"use client"

import { TagsInput } from "@chakra-ui/react"

const SPLIT_REGEX = /[;,]/

export const TagsInputWithDelimiter = () => (
  <TagsInput.Root delimiter={SPLIT_REGEX}>
    <TagsInput.Label>Custom Delimiters (; ,)</TagsInput.Label>
    <TagsInput.Control>
      <TagsInput.Items />

      <TagsInput.Input placeholder="Type and use ; or , to create tag..." />
      <TagsInput.ClearTrigger />
    </TagsInput.Control>

    <TagsInput.HiddenInput />
  </TagsInput.Root>
)

```

### Colors

Here's an example that assigns rather color scheme to the tags based on the tag
value.

```tsx
"use client"

import { TagsInput } from "@chakra-ui/react"

export const TagsInputWithColors = () => (
  <TagsInput.Root defaultValue={["React", "Chakra", "TypeScript"]}>
    <TagsInput.Label>Colored Tags</TagsInput.Label>
    <TagsInput.Control>
      <TagsInput.Context>
        {({ value }) =>
          value.map((tag, index) => (
            <TagsInput.Item key={index} index={index} value={tag}>
              <TagsInput.ItemPreview
                style={{ backgroundColor: randomColor(tag) }}
                _highlighted={{ filter: "brightness(0.9)" }}
              >
                <TagsInput.ItemText>{tag}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger />
              </TagsInput.ItemPreview>
              <TagsInput.ItemInput />
            </TagsInput.Item>
          ))
        }
      </TagsInput.Context>

      <TagsInput.Input placeholder="Add tag..." />
      <TagsInput.ClearTrigger />
    </TagsInput.Control>

    <TagsInput.HiddenInput />
  </TagsInput.Root>
)

const randomColor = (str: string) => {
  // Simple hash from string
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  // Generate light HSL color (H: 0-359, S: 60-80%, L: 85-94%)
  const h = Math.abs(hash) % 360
  const s = 60 + (Math.abs(hash) % 20) // 60% - 79%
  const l = 85 + (Math.abs(hash) % 10) // 85% - 94%

  return `hsl(${h},${s}%,${l}%)`
}

```

### Combobox

Here's an example that composes the `TagsInput` component with the `Combobox`
component to create a tags input that allows users to select from a list of
predefined tags.

```tsx
"use client"

import {
  Combobox,
  TagsInput,
  useCombobox,
  useFilter,
  useListCollection,
  useTagsInput,
} from "@chakra-ui/react"
import { useId, useRef } from "react"

export const TagsInputWithCombobox = () => {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: [
      "React",
      "Chakra",
      "TypeScript",
      "Next.js",
      "Ark UI",
      "Zag.js",
    ],
    filter: contains,
  })

  const uid = useId()
  const controlRef = useRef<HTMLDivElement | null>(null)

  const tags = useTagsInput({
    ids: { input: `input_${uid}`, control: `control_${uid}` },
  })

  const comobobox = useCombobox({
    ids: { input: `input_${uid}`, control: `control_${uid}` },
    collection,
    onInputValueChange(e) {
      filter(e.inputValue)
    },
    value: [],
    allowCustomValue: true,
    onValueChange: (e) => tags.addValue(e.value[0]),
    selectionBehavior: "clear",
  })

  return (
    <Combobox.RootProvider value={comobobox}>
      <TagsInput.RootProvider value={tags}>
        <TagsInput.Label>Tags</TagsInput.Label>

        <TagsInput.Control ref={controlRef}>
          {tags.value.map((tag, index) => (
            <TagsInput.Item key={index} index={index} value={tag}>
              <TagsInput.ItemPreview>
                <TagsInput.ItemText>{tag}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger />
              </TagsInput.ItemPreview>
            </TagsInput.Item>
          ))}

          <Combobox.Input unstyled asChild>
            <TagsInput.Input placeholder="Add tag..." />
          </Combobox.Input>
        </TagsInput.Control>

        <Combobox.Positioner>
          <Combobox.Content>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item}>
                <Combobox.ItemText>{item}</Combobox.ItemText>
                <Combobox.ItemIndicator />
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </TagsInput.RootProvider>
    </Combobox.RootProvider>
  )
}

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| addOnPaste | false | `boolean` | Whether to add a tag when you paste values into the tag input |
| delimiter | "," | `string \| RegExp` | The character that serves has:

- event key to trigger the addition of a new tag
- character used to split tags when pasting into the input |
  | editable | true | `boolean` | Whether a tag can be edited after creation, by pressing `Enter` or double clicking. |
  | max | Infinity | `number` | The max number of tags |
  | colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
  | size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
  | variant | outline | `'outline' \| 'subtle' \| 'flushed'` | The variant of the component |
  | as | undefined | `React.ElementType` | The underlying element to render. |
  | asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
  | unstyled | undefined | `boolean` | Whether to remove the component's style. |
  | allowOverflow | undefined | `boolean` | Whether to allow tags to exceed max. In this case,
  we'll attach `data-invalid` to the root |
  | autoFocus | undefined | `boolean` | Whether the input should be auto-focused |
  | blurBehavior | undefined | `'clear' \| 'add'` | The behavior of the tags input when the input is blurred
- `"add"`: add the input value as a new tag
- `"clear"`: clear the input value |
  | defaultInputValue | undefined | `string` | The initial tag input value when rendered.
  Use when you don't need to control the tag input value. |
  | defaultValue | undefined | `string[]` | The initial tag value when rendered.
  Use when you don't need to control the tag value. |
  | disabled | undefined | `boolean` | Whether the tags input should be disabled |
  | form | undefined | `string` | The associate form of the underlying input element. |
  | id | undefined | `string` | The unique identifier of the machine. |
  | ids | undefined | `Partial<{\n  root: string\n  input: string\n  hiddenInput: string\n  clearBtn: string\n  label: string\n  control: string\n  item: (opts: ItemProps) => string\n  itemDeleteTrigger: (opts: ItemProps) => string\n  itemInput: (opts: ItemProps) => string\n}>` | The ids of the elements in the tags input. Useful for composition. |
  | inputValue | undefined | `string` | The controlled tag input's value |
  | invalid | undefined | `boolean` | Whether the tags input is invalid |
  | maxLength | undefined | `number` | The max length of the input. |
  | name | undefined | `string` | The name attribute for the input. Useful for form submissions |
  | onFocusOutside | undefined | `(event: FocusOutsideEvent) => void` | Function called when the focus is moved outside the component |
  | onHighlightChange | undefined | `(details: HighlightChangeDetails) => void` | Callback fired when a tag is highlighted by pointer or keyboard navigation |
  | onInputValueChange | undefined | `(details: InputValueChangeDetails) => void` | Callback fired when the input value is updated |
  | onInteractOutside | undefined | `(event: InteractOutsideEvent) => void` | Function called when an interaction happens outside the component |
  | onPointerDownOutside | undefined | `(event: PointerDownOutsideEvent) => void` | Function called when the pointer is pressed down outside the component |
  | onValueChange | undefined | `(details: ValueChangeDetails) => void` | Callback fired when the tag values is updated |
  | onValueInvalid | undefined | `(details: ValidityChangeDetails) => void` | Callback fired when the max tag count is reached or the `validateTag` function returns `false` |
  | readOnly | undefined | `boolean` | Whether the tags input should be read-only |
  | required | undefined | `boolean` | Whether the tags input is required |
  | translations | undefined | `IntlTranslations` | Specifies the localized strings that identifies the accessibility elements and their states |
  | validate | undefined | `(details: ValidateArgs) => boolean` | Returns a boolean that determines whether a tag can be added.
  Useful for preventing duplicates or invalid tag values. |
  | value | undefined | `string[]` | The controlled tag value |

### Item

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| index | undefined | `string \| number` | undefined |
| value | undefined | `string` | undefined |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| disabled | undefined | `boolean` | undefined |

## Explorer

Explore the `TagsInput` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.
