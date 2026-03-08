## useField

The `useField` hook is used internally within all field components. It manages sending and receiving a field's state from its parent form. When you build a [Custom Field Component](../fields/overview#custom-components), you will be responsible for sending and receiving the field's `value` to and from the form yourself.

To do so, import the `useField` hook as follows:

```tsx
'use client'
import type { TextFieldClientComponent } from 'payload'
import { useField } from '@payloadcms/ui'

export const CustomTextField: TextFieldClientComponent = ({ path }) => {
  const { value, setValue } = useField({ path }) // highlight-line

  return (
    <div>
      <p>{path}</p>
      <input
        onChange={(e) => {
          setValue(e.target.value)
        }}
        value={value}
      />
    </div>
  )
}
```

The `useField` hook accepts the following arguments:

| Property          | Description                                                                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `path`            | If you do not provide a `path`, `name` will be used instead. This is the path to the field in the form data.                                                                                     |
| `validate`        | A validation function executed client-side *before* submitting the form to the server. Different than [Field-level Validation](../fields/overview#validation) which runs strictly on the server. |
| `disableFormData` | If `true`, the field will not be included in the form data when the form is submitted.                                                                                                           |
| `hasRows`         | If `true`, the field will be treated as a field with rows. This is useful for fields like `array` and `blocks`.                                                                                  |

The `useField` hook returns the following object:

```ts
type FieldType<T> = {
  errorMessage?: string
  errorPaths?: string[]
  filterOptions?: FilterOptionsResult
  formInitializing: boolean
  formProcessing: boolean
  formSubmitted: boolean
  initialValue?: T
  path: string
  permissions: FieldPermissions
  readOnly?: boolean
  rows?: Row[]
  schemaPath: string
  setValue: (val: unknown, disableModifyingForm?: boolean) => void
  showError: boolean
  valid?: boolean
  value: T
}
```

## useFormFields

There are times when a custom field component needs to have access to data from other fields, and you have a few options to do so. The `useFormFields` hook is a powerful and highly performant way to retrieve a form's field state, as well as to retrieve the `dispatchFields` method, which can be helpful for setting other fields form states.

**This hook is great for retrieving only certain fields from form state**
because it ensures that it will only cause a rerender when the items that you
ask for change.

Thanks to the awesome package [`use-context-selector`](https://github.com/dai-shi/use-context-selector), you can retrieve a specific field's state easily. This is ideal because you can ensure you have an up-to-date field state, and your component will only re-render when *that field's state* changes.

You can pass a Redux-like selector into the hook, which will ensure that you retrieve only the field that you want. The selector takes an argument with type of `[fields: Fields, dispatch: React.Dispatch<Action>]]`.

```tsx
'use client'
import { useFormFields } from '@payloadcms/ui'

const MyComponent: React.FC = () => {
  // Get only the `amount` field state, and only cause a rerender when that field changes
  const amount = useFormFields(([fields, dispatch]) => fields.amount)

  // Do the same thing as above, but to the `feePercentage` field
  const feePercentage = useFormFields(
    ([fields, dispatch]) => fields.feePercentage,
  )

  if (
    typeof amount?.value !== 'undefined' &&
    typeof feePercentage?.value !== 'undefined'
  ) {
    return <span>The fee is ${(amount.value * feePercentage.value) / 100}</span>
  }
}
```

Be aware: in the example above, `MyComponent` may re-render if an ancestor
component re-renders or if any of its props change (standard React behavior),
but not because any fields other than `amount` or `feePercentage` changed.
