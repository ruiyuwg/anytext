### Editable

Now uses compound components with dot notation. Custom controls use declarative
trigger components instead of the `useEditableControls` prop-getter pattern.

**Component Renaming:**

- `Editable` → `Editable.Root`
- `EditablePreview` → `Editable.Preview`
- `EditableInput` → `Editable.Input`
- `EditableTextarea` → `Editable.Textarea`
- `useEditableControls` → `useEditableContext`

**Prop Changes:**

- `isDisabled` → `disabled`
- `onChange` → `onValueChange` (receives `{ value }` object)
- `onSubmit` → `onValueCommit`
- `onCancel` → `onValueRevert`
- `startWithEditView` → `defaultEdit`
- `selectAllOnFocus` → `selectOnFocus`
- `submitOnBlur={false}` → `submitMode="enter"`
- `finalFocusRef` → `finalFocusEl` (function returning element)
- `isPreviewFocusable={false}` → add `tabIndex={undefined}` to
  `Editable.Preview`

Before:

```tsx
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react"

const Demo = () => (
  <Editable
    defaultValue="Hello"
    isDisabled
    onSubmit={handleSubmit}
    onChange={handleChange}
    submitOnBlur={false}
    startWithEditView
  >
    <EditablePreview />
    <EditableInput />
  </Editable>
)
```

After:

```tsx
import { Editable } from "@chakra-ui/react"

const Demo = () => (
  <Editable.Root
    defaultValue="Hello"
    disabled
    onValueCommit={handleSubmit}
    onValueChange={handleChange}
    submitMode="enter"
    defaultEdit
  >
    <Editable.Preview />
    <Editable.Input />
  </Editable.Root>
)
```

**Custom Controls:**

The `useEditableControls` prop-getter pattern is replaced by declarative trigger
components.

Before:

```tsx
function EditableControls() {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps } =
    useEditableControls()
  return isEditing ? (
    <ButtonGroup size="sm">
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : null
}
```

After:

```tsx
<Editable.Control>
  <Editable.EditTrigger asChild>
    <IconButton variant="ghost" size="xs">
      <LuPencilLine />
    </IconButton>
  </Editable.EditTrigger>
  <Editable.CancelTrigger asChild>
    <IconButton variant="outline" size="xs">
      <LuX />
    </IconButton>
  </Editable.CancelTrigger>
  <Editable.SubmitTrigger asChild>
    <IconButton variant="outline" size="xs">
      <LuCheck />
    </IconButton>
  </Editable.SubmitTrigger>
</Editable.Control>
```
