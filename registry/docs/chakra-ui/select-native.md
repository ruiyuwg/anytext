# Select (Native)

```tsx
import { NativeSelect } from "@chakra-ui/react"

export const NativeSelectBasic = () => {
  return (
    <NativeSelect.Root size="sm" width="240px">
      <NativeSelect.Field placeholder="Select option">
        React
        Vue
        Angular
        Svelte
      </NativeSelect.Field>
      
    </NativeSelect.Root>
  )
}

```

## Usage

```jsx
import { NativeSelect } from "@chakra-ui/react"
```

```jsx
<NativeSelect.Root>
  <NativeSelect.Field>
    Option 1
    Option 2
  </NativeSelect.Field>
  
</NativeSelect.Root>
```

:::info

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

:::

## Examples

### Sizes

Use the `size` prop to change the size of the select component.

```tsx
import { For, NativeSelect, Stack } from "@chakra-ui/react"

export const NativeSelectWithSizes = () => {
  return (
    
      
        {(size) => (
          <NativeSelect.Root key={size} size={size}>
            <NativeSelect.Field placeholder="Select option">
              React
              Vue
              Angular
              Svelte
            </NativeSelect.Field>
            
          </NativeSelect.Root>
        )}
      
    
  )
}

```

### Variants

Use the `variant` prop to change the appearance of the select component.

```tsx
import { For, NativeSelect, Stack } from "@chakra-ui/react"

export const NativeSelectWithVariants = () => {
  return (
    
      
        {(variant) => (
          <NativeSelect.Root key={variant} variant={variant}>
            <NativeSelect.Field placeholder={`variant (${variant})`}>
              React
              Vue
              Angular
              Svelte
            </NativeSelect.Field>
            
          </NativeSelect.Root>
        )}
      
    
  )
}

```

### Controlled

Use the `value` and `onChange` props to control the select component.

```tsx
"use client"

import { NativeSelect } from "@chakra-ui/react"
import { useState } from "react"

export const NativeSelectControlled = () => {
  const [value, setValue] = useState("")
  return (
    <NativeSelect.Root size="sm" width="240px">
      <NativeSelect.Field
        placeholder="Select option"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      >
        React
        Vue
        Angular
        Svelte
      </NativeSelect.Field>
      
    </NativeSelect.Root>
  )
}

```

### Disabled

Pass the `disabled` prop to the `NativeSelect.Root` component to disable the
select component.

```tsx
import { NativeSelect } from "@chakra-ui/react"

export const NativeSelectWithDisabled = () => (
  <NativeSelect.Root disabled>
    <NativeSelect.Field placeholder="Select option">
      React
      Vue
      Angular
      Svelte
    </NativeSelect.Field>
    
  </NativeSelect.Root>
)

```

### Invalid

Compose the native and `Field` component to set the invalid set and show the
error text.

```tsx
import { Field, NativeSelect } from "@chakra-ui/react"

export const NativeSelectWithInvalid = () => (
  <Field.Root invalid width="240px">
    <NativeSelect.Root>
      <NativeSelect.Field placeholder="Select option">
        Option 1
        Option 2
        Option 3
      </NativeSelect.Field>
      
    </NativeSelect.Root>
    <Field.ErrorText>This is an error</Field.ErrorText>
  </Field.Root>
)

```

Alternatively, you can use the `invalid` prop on the `NativeSelect.Root`
component as well.

```tsx
import { NativeSelect } from "@chakra-ui/react"

export const NativeSelectWithInvalidRoot = () => (
  <NativeSelect.Root invalid width="240px">
    <NativeSelect.Field placeholder="Select option">
      Option 1
      Option 2
      Option 3
    </NativeSelect.Field>
    
  </NativeSelect.Root>
)

```

### Hook Form

Here is an example of how to use the `NativeSelect` component with
`react-hook-form`.

```tsx
"use client"

import { Button, Field, NativeSelect } from "@chakra-ui/react"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  framework: z.string().min(1, { message: "Framework is required" }),
})

type FormValues = z.infer

export const NativeSelectWithHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: standardSchemaResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    
      <Field.Root invalid={!!errors.framework}>
        <Field.Label>Framework</Field.Label>
        <NativeSelect.Root size="sm" width="240px">
          <NativeSelect.Field
            placeholder="Select option"
            {...register("framework")}
          >
            React
            Vue
            Angular
            Svelte
          </NativeSelect.Field>
          
        </NativeSelect.Root>
        <Field.ErrorText>{errors.framework?.message}</Field.ErrorText>
      </Field.Root>

      
        Submit
      
    
  )
}

```

### Ref

Here's how to access the underlying element reference

```tsx
import { NativeSelect } from "@chakra-ui/react"

const Demo = () => {
  const ref = useRef(null)
  return (
    <NativeSelect.Root>
      <NativeSelect.Field ref={ref}>
        Option 1
        Option 2
      </NativeSelect.Field>
      
    </NativeSelect.Root>
  )
}
```

### Closed Component

Here's how to setup the Native Select for a closed component composition.

<ExampleCode name="native-select-closed-component" />

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add native-select
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | outline | `'outline' \| 'subtle' \| 'plain' \| 'ghost'` | The variant of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | The size of the component |
| disabled | undefined | `boolean \| undefined` | undefined |
| invalid | undefined | `boolean \| undefined` | undefined |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |

## Explorer

Explore the `Select (Native)` component parts interactively. Click on parts in
the sidebar to highlight them in the preview.

<Explorer name="native-select-basic" />
