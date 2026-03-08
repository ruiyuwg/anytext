# Field

```tsx
import { Field, Input } from "@chakra-ui/react"

export const FieldBasic = () => {
  return (
    <Field.Root>
      <Field.Label>Email</Field.Label>
      
    </Field.Root>
  )
}

```

## Usage

```tsx
import { Field } from "@chakra-ui/react"
```

```tsx
<Field.Root>
  <Field.Label>
    
  </Field.Label>
  
  
  
</Field.Root>
```

:::info

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

:::

## Examples

### Error Text

Pass the `invalid` prop to `Field.Root` and use the `Field.ErrorText` to
indicate that the field is invalid.

```tsx
import { Field, Input } from "@chakra-ui/react"

export const FieldWithErrorText = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Email</Field.Label>
      
      <Field.ErrorText>This is an error text</Field.ErrorText>
    </Field.Root>
  )
}

```

### Error Icon

`Field.ErrorIcon` inherits the surrounding text color and defaults to `1em`,
keeping its size consistent even when `Field.ErrorText` stretches full width.

```tsx
import { Field, Input } from "@chakra-ui/react"

export const FieldWithErrorIcon = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Email</Field.Label>
      
      <Field.ErrorText width="full">
        
        This is an error text
      </Field.ErrorText>
    </Field.Root>
  )
}

```

### Helper Text

Use the `Field.HelperText` to add helper text to the field.

```tsx
import { Field, Input } from "@chakra-ui/react"

export const FieldWithHelperText = () => {
  return (
    <Field.Root>
      <Field.Label>Email</Field.Label>
      
      <Field.HelperText>This is a helper text</Field.HelperText>
    </Field.Root>
  )
}

```

### Horizontal

Use the `orientation="horizontal"` prop to align the label and input
horizontally.

```tsx
import { Field, Input, Stack, Switch } from "@chakra-ui/react"

export const FieldHorizontal = () => {
  return (
    
      <Field.Root orientation="horizontal">
        <Field.Label>Name</Field.Label>
        
      </Field.Root>

      <Field.Root orientation="horizontal">
        <Field.Label>Email</Field.Label>
        
      </Field.Root>

      <Field.Root orientation="horizontal">
        <Field.Label>Hide email</Field.Label>
        <Switch.Root>
          
          
        </Switch.Root>
      </Field.Root>
    
  )
}

```

### Disabled

Use the `disabled` prop to disable the field.

```tsx
import { Field, Input } from "@chakra-ui/react"

export const FieldWithDisabled = () => {
  return (
    <Field.Root disabled>
      <Field.Label>Email</Field.Label>
      
    </Field.Root>
  )
}

```

### Textarea

Here's how to use the field component with a textarea.

```tsx
import { Field, Textarea } from "@chakra-ui/react"

export const FieldWithTextarea = () => {
  return (
    <Field.Root>
      <Field.Label>Email</Field.Label>
      
    </Field.Root>
  )
}

```

### Native Select

Here's how to use the field component with a native select.

```tsx
import { Field, NativeSelect } from "@chakra-ui/react"

export const FieldWithNativeSelect = () => {
  return (
    <Field.Root>
      <Field.Label>Email</Field.Label>
      <NativeSelect.Root>
        <NativeSelect.Field>
          Option 1
          Option 2
          Option 3
        </NativeSelect.Field>
        
      </NativeSelect.Root>
    </Field.Root>
  )
}

```

### Required

Pass the `required` prop to `Field.Root` and use the `Field.RequiredIndicator`
to indicate that the field is required.

```tsx
import { Field, Input } from "@chakra-ui/react"

export const FieldWithRequired = () => {
  return (
    <Field.Root required>
      <Field.Label>
        Email
        
      </Field.Label>
      
    </Field.Root>
  )
}

```

### Optional

Pass the `fallback` prop to the `Field.RequiredIndicator` to add optional text.

```tsx
import { Badge, Field, Input } from "@chakra-ui/react"

export const FieldWithOptional = () => {
  return (
    <Field.Root>
      <Field.Label>
        Email
        <Field.RequiredIndicator
          fallback={
            
              Optional
            
          }
        />
      </Field.Label>
      
    </Field.Root>
  )
}

```

### Closed Component

Here's how to setup the Field for a closed component composition.

<ExampleCode name="field-closed-component" />

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add field
```

## Customization

### Customizing slots

The Field component has multiple slots that can be customized. Use the
[Explorer](#explorer) below to see all available slots.

```tsx title="theme.ts"
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { fieldSlotRecipe } from "@chakra-ui/react/recipes"

const customFieldRecipe = fieldSlotRecipe.extend({
  base: {
    label: {
      color: "blue.600",
      fontWeight: "bold",
    },
    errorText: {
      bg: "red.50",
      p: "2",
      borderRadius: "md",
    },
    helperText: {
      fontStyle: "italic",
    },
    requiredIndicator: {
      color: "orange.500",
    },
  },
})

const config = defineConfig({
  theme: {
    slotRecipes: {
      field: customFieldRecipe,
    },
  },
})

export const system = createSystem(defaultConfig, config)
```

### Adding new variants

Extend the Field recipe to add new layout or style variants:

```tsx title="theme.ts"
const customFieldRecipe = fieldSlotRecipe.extend({
  variants: {
    variant: {
      // Add a new style variant
      outlined: {
        root: {
          border: "1px solid",
          borderColor: "border",
          borderRadius: "md",
          p: "3",
        },
        label: {
          bg: "bg",
          px: "2",
          position: "absolute",
          top: "-2",
          left: "3",
        },
      },
    },
    size: {
      // Add a new size variant
      lg: {
        root: {
          gap: "3",
        },
        label: {
          textStyle: "md",
        },
      },
    },
  },
})
```

After customizing, run the typegen command to regenerate the types. See the
[CLI docs](/docs/get-started/cli#chakra-typegen) for how to run typegen in
postinstall, CI, and monorepos.

```bash
npx @chakra-ui/cli typegen ./theme.ts
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| orientation | vertical | `'vertical' \| 'horizontal'` | The orientation of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| disabled | undefined | `boolean` | Indicates whether the field is disabled. |
| ids | undefined | `ElementIds` | The ids of the field parts. |
| invalid | undefined | `boolean` | Indicates whether the field is invalid. |
| readOnly | undefined | `boolean` | Indicates whether the field is read-only. |
| required | undefined | `boolean` | Indicates whether the field is required. |

## Explorer

Explore the `Field` component parts interactively. Click on parts in the sidebar
to highlight them in the preview.

<Explorer name="field-explorer-demo" />
