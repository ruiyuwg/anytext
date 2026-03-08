## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| collection | undefined | `TreeCollection<T>` | The collection of tree nodes |
| expandOnClick | true | `boolean` | Whether clicking on a branch should open it or not |
| lazyMount | false | `boolean` | Whether to enable lazy mounting |
| selectionMode | "single" | `'multiple' \| 'single'` | Whether the tree supports multiple selection

- "single": only one node can be selected
- "multiple": multiple nodes can be selected |
  | typeahead | true | `boolean` | Whether the tree supports typeahead search |
  | unmountOnExit | false | `boolean` | Whether to unmount on exit. |
  | colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
  | size | md | `'md' \| 'sm' \| 'xs'` | The size of the component |
  | variant | subtle | `'subtle' \| 'solid'` | The variant of the component |
  | as | undefined | `React.ElementType` | The underlying element to render. |
  | asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
  | unstyled | undefined | `boolean` | Whether to remove the component's style. |
  | canRename | undefined | `(node: T, indexPath: IndexPath) => boolean` | Function to determine if a node can be renamed |
  | checkedValue | undefined | `string[]` | The controlled checked node value |
  | defaultCheckedValue | undefined | `string[]` | The initial checked node value when rendered.
  Use when you don't need to control the checked node value. |
  | defaultExpandedValue | undefined | `string[]` | The initial expanded node ids when rendered.
  Use when you don't need to control the expanded node value. |
  | defaultFocusedValue | undefined | `string` | The initial focused node value when rendered.
  Use when you don't need to control the focused node value. |
  | defaultSelectedValue | undefined | `string[]` | The initial selected node value when rendered.
  Use when you don't need to control the selected node value. |
  | expandedValue | undefined | `string[]` | The controlled expanded node ids |
  | focusedValue | undefined | `string` | The value of the focused node |
  | ids | undefined | `Partial<{ root: string; tree: string; label: string; node: (value: string) => string }>` | The ids of the tree elements. Useful for composition. |
  | loadChildren | undefined | `(details: LoadChildrenDetails<T>) => Promise<T[]>` | Function to load children for a node asynchronously.
  When provided, branches will wait for this promise to resolve before expanding. |
  | onBeforeRename | undefined | `(details: RenameCompleteDetails) => boolean` | Called before a rename is completed. Return false to prevent the rename. |
  | onCheckedChange | undefined | `(details: CheckedChangeDetails) => void` | Called when the checked value changes |
  | onExpandedChange | undefined | `(details: ExpandedChangeDetails<T>) => void` | Called when the tree is opened or closed |
  | onFocusChange | undefined | `(details: FocusChangeDetails<T>) => void` | Called when the focused node changes |
  | onLoadChildrenComplete | undefined | `(details: LoadChildrenCompleteDetails<T>) => void` | Called when a node finishes loading children |
  | onLoadChildrenError | undefined | `(details: LoadChildrenErrorDetails<T>) => void` | Called when loading children fails for one or more nodes |
  | onRenameComplete | undefined | `(details: RenameCompleteDetails) => void` | Called when a node label rename is completed |
  | onRenameStart | undefined | `(details: RenameStartDetails<T>) => void` | Called when a node starts being renamed |
  | onSelectionChange | undefined | `(details: SelectionChangeDetails<T>) => void` | Called when the selection changes |
  | selectedValue | undefined | `string[]` | The controlled selected node value |
  | animateContent | undefined | `'true' \| 'false'` | The animateContent of the component |

### Node

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| render | undefined | `(props` | undefined |
| indentGuide | undefined | `React.ReactElement` | undefined |
| renderBranch | undefined | `(props` | undefined |
| branchProps | undefined | `TreeViewBranchProps` | undefined |
| branchContentProps | undefined | `TreeViewBranchContentProps` | undefined |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

## Explorer

Explore the `TreeView` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

# Visually Hidden

```tsx
import { Button, VisuallyHidden } from "@chakra-ui/react"
import { LuBell } from "react-icons/lu"

export const VisuallyHiddenBasic = () => {
  return (
    <Button>
      <LuBell /> 3 <VisuallyHidden>Notifications</VisuallyHidden>
    </Button>
  )
}

```

## Usage

```jsx
import { VisuallyHidden } from "@chakra-ui/react"
```

```jsx
<VisuallyHidden>Hidden content</VisuallyHidden>
```

## Examples

### Input

Using the `asChild` prop, you can pass a child element to the `VisuallyHidden`
component.

```tsx
import { HStack, VisuallyHidden } from "@chakra-ui/react"

export const VisuallyHiddenWithInput = () => {
  return (
    <HStack>
      The input is hidden
      <VisuallyHidden asChild>
        <input type="text" placeholder="Search..." />
      </VisuallyHidden>
    </HStack>
  )
}

```
