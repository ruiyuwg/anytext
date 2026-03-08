# Textarea

```tsx
import { Textarea } from "@chakra-ui/react"

export const TextareaBasic = () => {
  return <Textarea placeholder="Comment..." />
}

```

## Usage

```jsx
import { Textarea } from "@chakra-ui/react"
```

```jsx
<Textarea placeholder="..." />
```

## Examples

### Variants

Use the `variant` prop to change the appearance of the textarea.

```tsx
import { Stack, Textarea } from "@chakra-ui/react"

export const TextareaWithVariants = () => {
  return (
    <Stack gap="4">
      <Textarea variant="outline" placeholder="outline" />
      <Textarea variant="subtle" placeholder="subtle" />
      <Textarea variant="flushed" placeholder="flushed" />
    </Stack>
  )
}

```

### Sizes

Use the `size` prop to change the size of the textarea.

```tsx
import { Stack, Textarea } from "@chakra-ui/react"

export const TextareaWithSizes = () => {
  return (
    <Stack gap="4">
      <Textarea size="xs" placeholder="XSmall size" />
      <Textarea size="sm" placeholder="Small size" />
      <Textarea size="md" placeholder="Medium size" />
      <Textarea size="lg" placeholder="Large size" />
      <Textarea size="xl" placeholder="XLarge size" />
    </Stack>
  )
}

```

### Helper Text

Pair the textarea with the `Field` component to add helper text.

```tsx
import { Field, HStack, Textarea } from "@chakra-ui/react"

export const TextareaWithHelperText = () => {
  return (
    <HStack gap="10" width="full">
      <Field.Root required>
        <Field.Label>
          Comment <Field.RequiredIndicator />
        </Field.Label>
        <Textarea placeholder="Start typing..." variant="subtle" />
        <Field.HelperText>Max 500 characters.</Field.HelperText>
      </Field.Root>
      <Field.Root required>
        <Field.Label>
          Comment <Field.RequiredIndicator />
        </Field.Label>
        <Textarea placeholder="Start typing..." variant="outline" />
        <Field.HelperText>Max 500 characters.</Field.HelperText>
      </Field.Root>
    </HStack>
  )
}

```

### Error Text

Pair the textarea with the `Field` component to add error text.

```tsx
import { Field, HStack, Textarea } from "@chakra-ui/react"

export const TextareaWithErrorText = () => {
  return (
    <HStack gap="10" width="full">
      <Field.Root invalid>
        <Field.Label>
          Comment <Field.RequiredIndicator />
        </Field.Label>
        <Textarea placeholder="Start typing..." variant="subtle" />
        <Field.ErrorText>Field is required</Field.ErrorText>
      </Field.Root>
      <Field.Root invalid>
        <Field.Label>
          Comment <Field.RequiredIndicator />
        </Field.Label>
        <Textarea placeholder="Start typing..." variant="outline" />
        <Field.ErrorText>Field is required</Field.ErrorText>
      </Field.Root>
    </HStack>
  )
}

```

### Field

Compose the textarea with the `Field` component to add a label, helper text, and
error text.

```tsx
import { Field, HStack, Input } from "@chakra-ui/react"

export const InputWithField = () => {
  return (
    <HStack gap="10" width="full">
      <Field.Root required>
        <Field.Label>
          Email <Field.RequiredIndicator />
        </Field.Label>
        <Input placeholder="me@example.com" variant="subtle" />
      </Field.Root>
      <Field.Root required>
        <Field.Label>
          Email <Field.RequiredIndicator />
        </Field.Label>
        <Input placeholder="me@example.com" variant="outline" />
      </Field.Root>
    </HStack>
  )
}

```

### Hook Form

Here's an example of how to integrate the textarea with `react-hook-form`.

```tsx
"use client"

import { Button, Field, Input, Stack, Textarea } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

interface FormValues {
  username: string
  bio: string
}

export const TextareaWithHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field.Root invalid={!!errors.username}>
          <Field.Label>Username</Field.Label>
          <Input
            placeholder="@username"
            {...register("username", { required: "Username is required" })}
          />
          <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.bio}>
          <Field.Label>Profile bio</Field.Label>
          <Textarea
            placeholder="I am ..."
            {...register("bio", { required: "Bio is required" })}
          />
          <Field.HelperText>A short description of yourself</Field.HelperText>
          <Field.ErrorText>{errors.bio?.message}</Field.ErrorText>
        </Field.Root>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  )
}

```

### Resize

Use the `resize` prop to control the resize behavior of the textarea.

```tsx
import { Stack, Textarea } from "@chakra-ui/react"

export const TextareaWithResize = () => {
  return (
    <Stack gap="4" maxWidth="250px">
      <Textarea resize="none" placeholder="Search the docs…" />
      <Textarea resize="vertical" placeholder="Search the docs…" />
      <Textarea resize="horizontal" placeholder="Search the docs…" />
      <Textarea resize="both" placeholder="Search the docs…" />
    </Stack>
  )
}

```

To limit the maximum height (or rows) of the textarea, we recommend using the
`maxHeight` prop and setting the value to a `lh` unit.

```tsx
<Textarea autoresize maxH="5lh" />
```

### Autoresize

Use the `autoresize` prop to make the textarea autoresize vertically as you
type.

```tsx
import { Textarea } from "@chakra-ui/react"

export const TextareaWithAutoresize = () => {
  return <Textarea autoresize />
}

```

### Ref

Here's how to access the underlying element reference

```tsx
const Demo = () => {
  const ref = useRef<HTMLTextAreaElement | null>(null)
  return <Textarea ref={ref} />
}
```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | The size of the component |
| variant | outline | `'outline' \| 'subtle' \| 'flushed'` | The variant of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
