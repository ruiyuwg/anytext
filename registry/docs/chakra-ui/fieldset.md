# Fieldset

```tsx
import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
  Stack,
} from "@chakra-ui/react"

export const FieldsetBasic = () => {
  return (
    <Fieldset.Root size="lg" maxW="md">
      
        <Fieldset.Legend>Contact details</Fieldset.Legend>
        <Fieldset.HelperText>
          Please provide your contact details below.
        </Fieldset.HelperText>
      

      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Name</Field.Label>
          
        </Field.Root>

        <Field.Root>
          <Field.Label>Email address</Field.Label>
          
        </Field.Root>

        <Field.Root>
          <Field.Label>Country</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field name="country">
              
                {(item) => (
                  
                    {item}
                  
                )}
              
            </NativeSelect.Field>
            
          </NativeSelect.Root>
        </Field.Root>
      </Fieldset.Content>

      
        Submit
      
    </Fieldset.Root>
  )
}

```

## Usage

```jsx
import { Fieldset } from "@chakra-ui/react"
```

```jsx
<Fieldset.Root>
  
  
</Fieldset.Root>
```

## Examples

### Disabled

Use the `disabled` prop to disable the fieldset to disable all input elements
within the fieldset.

```tsx
import {
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
  Textarea,
} from "@chakra-ui/react"

export const FieldsetWithDisabled = () => {
  return (
    <Fieldset.Root size="lg" disabled>
      <Fieldset.Legend>Shipping details</Fieldset.Legend>
      <Field.Root>
        <Field.Label>Street address</Field.Label>
        
      </Field.Root>
      <Field.Root>
        <Field.Label>Country</Field.Label>
        <NativeSelect.Root>
          <NativeSelect.Field name="country">
            
              {(item) => (
                
                  {item}
                
              )}
            
          </NativeSelect.Field>
          
        </NativeSelect.Root>
      </Field.Root>
      <Field.Root>
        <Field.Label>Delivery notes</Field.Label>
        
      </Field.Root>
    </Fieldset.Root>
  )
}

```

### Invalid

Use the `invalid` prop to mark the fieldset as invalid. This will show the error
text.

> Note: You need to pass the `invalid` prop to the `Field` component within the
> fieldset to make each input element invalid.

```tsx
import {
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
  Textarea,
} from "@chakra-ui/react"

export const FieldsetWithInvalid = () => {
  return (
    <Fieldset.Root size="lg" invalid>
      <Fieldset.Legend>Shipping details</Fieldset.Legend>
      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Street address</Field.Label>
          
        </Field.Root>
        <Field.Root invalid>
          <Field.Label>Country</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field name="country">
              
                {(item) => (
                  
                    {item}
                  
                )}
              
            </NativeSelect.Field>
            
          </NativeSelect.Root>
        </Field.Root>
        <Field.Root invalid>
          <Field.Label>Notes</Field.Label>
          
        </Field.Root>
      </Fieldset.Content>
      <Fieldset.ErrorText>
        Some fields are invalid. Please check them.
      </Fieldset.ErrorText>
    </Fieldset.Root>
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| invalid | undefined | `boolean` | Indicates whether the fieldset is invalid. |

## Explorer

Explore the `Fieldset` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="fieldset-explorer-demo" />
