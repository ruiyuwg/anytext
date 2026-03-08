# AI Rules

Configure your AI coding assistants (like Cursor, GitHub Copilot, or Claude) by
adding these rules to your project's `.cursorrules`,
`.github/copilot-instructions.md`, or AI configuration file.

## Configuration File

Create a file with the following rules in your project root:

```yaml
```

## Rules

### Core Migration

```md
## Core Migration Rules

### Package Changes

# Removed Packages

- Remove @emotion/styled and framer-motion dependencies
- Icons: Use lucide-react or react-icons instead of @chakra-ui/icons
- Hooks: Use react-use or usehooks-ts instead of @chakra-ui/hooks
- Next.js: Use asChild prop instead of @chakra-ui/next-js package

### Import Sources

Always use correct import sources:

# From @chakra-ui/react:

Alert, Avatar, Button, Card, Field, Table, Input, NativeSelect, Tabs, Textarea,
Separator, useDisclosure, Box, Flex, Stack, HStack, VStack, Text, Heading, Icon

# From components/ui (relative imports):

Provider, Toaster, ColorModeProvider, Tooltip, PasswordInput
```

### Component

````mdx
### Toast System

```tsx
// ✅ New v3 way
import { toaster } from "./components/ui/toaster"

// ❌ Old v2 way
const toast = useToast()
toast({
  title: "Title",
  status: "error",
  isClosable: true,
  position: "top-right",
})

toaster.create({
  title: "Title",
  type: "error", // status → type
  meta: {
    closable: true, // isClosable → meta.closable
  },
  placement: "top-end", // top-right → top-end
})
```

### Dialog (formerly Modal)

```tsx
// ❌ Old v2

  
  
    Title
    Content
  


// ✅ New v3
<Dialog.Root open={isOpen} onOpenChange={onOpenChange} placement="center">
  
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Title</Dialog.Title>
    </Dialog.Header>
    <Dialog.Body>Content</Dialog.Body>
  </Dialog.Content>
</Dialog.Root>
```

### Button Icons

```tsx
// ❌ Old v2
} rightIcon={}>
  Email


// ✅ New v3

   Email 

```

### Alert Structure

```tsx
// ❌ Old v2

  
  Title
  Description


// ✅ New v3
<Alert.Root borderStartWidth="4px" borderStartColor="colorPalette.solid">
  
  <Alert.Content>
    <Alert.Title>Title</Alert.Title>
    <Alert.Description>Description</Alert.Description>
  </Alert.Content>
</Alert.Root>
```

### Tooltip

```tsx
// ❌ Old v2

  Hover me


// ✅ New v3
import { Tooltip } from "./components/ui/tooltip"


  Hover me

```

### Input with Validation

```tsx
// ❌ Old v2


// ✅ New v3
<Field.Root invalid>
  <Field.Label>Email</Field.Label>
  
  <Field.ErrorText>This field is required</Field.ErrorText>
</Field.Root>
```

### Table Structure

```tsx
// ❌ Old v2

  
    
      Header
    
  
  
    
      Cell
    
  


// ✅ New v3
<Table.Root variant="line">
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeader>Header</Table.ColumnHeader>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Cell</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
```

### Tabs

```tsx
// ❌ Old v2

  
    One
  
  
    Content
  


// ✅ New v3
<Tabs.Root defaultValue="one" colorPalette="orange">
  <Tabs.List>
    <Tabs.Trigger value="one">One</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="one">Content</Tabs.Content>
</Tabs.Root>
```

### Menu

```tsx
// ❌ Old v2

  Actions
  
    Download
  


// ✅ New v3
<Menu.Root>
  <Menu.Trigger asChild>
    Actions
  </Menu.Trigger>
  <Menu.Content>
    <Menu.Item value="download">Download</Menu.Item>
  </Menu.Content>
</Menu.Root>
```

### Popover

```tsx
// ❌ Old v2

  
    Click
  
  
    
    Content
  


// ✅ New v3
<Popover.Root positioning={{ placement: "bottom-end" }}>
  <Popover.Trigger asChild>
    Click
  </Popover.Trigger>
  <Popover.Content>
    
    <Popover.Body>Content</Popover.Body>
  </Popover.Content>
</Popover.Root>
```

### Select/NativeSelect

```tsx
// ❌ Old v2

  Option 1


// ✅ New v3
<NativeSelect.Root size="sm">
  <NativeSelect.Field placeholder="Select option">
    Option 1
  </NativeSelect.Field>
  
</NativeSelect.Root>
```
````

### Prop Name

```md
## Prop Name Rules

### Boolean Props

- `isOpen` → `open`
- `isDisabled` → `disabled`
- `isInvalid` → `invalid`
- `isRequired` → `required`
- `isActive` → `data-active`
- `isLoading` → `loading`
- `isChecked` → `checked`
- `isIndeterminate` → `indeterminate`

### Style Props

- `colorScheme` → `colorPalette`
- `spacing` → `gap`
- `noOfLines` → `lineClamp`
- `truncated` → `truncate`
- `thickness` → `borderWidth`
- `speed` → `animationDuration`

### Component-Specific

- Divider → Separator
- Modal → Dialog
- Collapse → Collapsible
- Tags → Badge
- useToast → toaster.create()
```

### Style System

````md
## Style System Rules

### Nested Styles

```tsx
// ❌ Old v2


// ✅ New v3 (the & is required)

```

### Gradients

```tsx
// ❌ Old v2


// ✅ New v3

```

### Theme Access

```tsx
// ❌ Old v2
const theme = useTheme()
const gray400 = theme.colors.gray["400"]

// ✅ New v3
const system = useChakra()
const gray400 = system.token("colors.gray.400")
```
````

## Example .cursorrules File

Create a `.cursorrules` file in your project root. Then feel free to copy and
paste the rules above.

Here's an example:

```mdx


# Chakra UI v3 Rules

This project uses Chakra UI v3. Follow these rules:

1. Import from @chakra-ui/react: Alert, Avatar, Button, Card, Field, Table, etc.
2. Import from components/ui: Checkbox, Drawer, Radio, Menu, Dialog, Tooltip,
   etc.
3. Use toaster.create() instead of useToast()
4. Modal is now Dialog with different props
5. Boolean props changed: isOpen → open, isDisabled → disabled
6. colorScheme → colorPalette
7. Button icons are children, not props
8. Always use VStack/HStack, not Stack
9. Use compound components for complex components
10. Check migration guide for component-specific changes
```

## Resources

- [Full Migration Guide](/docs/get-started/migration)
- [Component Documentation](/docs/components)
- [Theming Guide](/docs/theming)
