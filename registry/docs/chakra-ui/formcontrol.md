### FormControl

Replaced by `Field` for standard form controls and `Fieldset` for grouped
controls (radio groups, checkbox groups). The `as='fieldset'` pattern is
replaced with a dedicated `Fieldset` component.

**Component Renaming:**

- `FormControl` → `Field.Root`
- `FormLabel` → `Field.Label`
- `FormHelperText` → `Field.HelperText`
- `FormErrorMessage` → `Field.ErrorText`

For fieldset usage:

- `FormControl as='fieldset'` → `Fieldset.Root`
- `FormLabel as='legend'` → `Fieldset.Legend`
- `FormHelperText` → `Fieldset.HelperText`
- `FormErrorMessage` → `Fieldset.ErrorText`

**Prop Changes:**

- `isInvalid` → `invalid`
- `isRequired` → `required`
- `isDisabled` → `disabled`
- `isReadOnly` → `readOnly`

Before:

```tsx
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react"

const Demo = () => (
  <FormControl isInvalid={isError}>
    <FormLabel>Email</FormLabel>
    <FormHelperText>We'll never share your email.</FormHelperText>
    <FormErrorMessage>Email is required.</FormErrorMessage>
  </FormControl>
)
```

After:

```tsx
import { Field } from "@chakra-ui/react"

const Demo = () => (
  <Field.Root invalid={isError}>
    <Field.Label>Email</Field.Label>
    <Field.HelperText>We'll never share your email.</Field.HelperText>
    <Field.ErrorText>Email is required.</Field.ErrorText>
  </Field.Root>
)
```

> `Field.ErrorText` only renders when `invalid` is `true`, so no conditional
> logic is needed.

**Fieldset Usage:**

Before:

```tsx
import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/react"

const Demo = () => (
  <FormControl as="fieldset">
    <FormLabel as="legend">Favorite Character</FormLabel>
    <FormHelperText>Select only if you're a fan.</FormHelperText>
  </FormControl>
)
```

After:

```tsx
import { Fieldset } from "@chakra-ui/react"

const Demo = () => (
  <Fieldset.Root>
    <Fieldset.Legend>Favorite Character</Fieldset.Legend>
    <Fieldset.HelperText>Select only if you're a fan.</Fieldset.HelperText>
  </Fieldset.Root>
)
```

### Collapse

Replace with the `Collapsible` component.

Before:

```tsx
<Collapse in={isOpen} animateOpacity>
  Some content
</Collapse>
```

After:

```tsx
<Collapsible.Root open={isOpen}>
  <Collapsible.Content>Some content</Collapsible.Content>
</Collapsible.Root>
```
