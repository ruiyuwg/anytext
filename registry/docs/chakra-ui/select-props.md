## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| collection | undefined | `ListCollection<T>` | The collection of items |
| closeOnSelect | true | `boolean` | Whether the select should close after an item is selected |
| composite | true | `boolean` | Whether the select is a composed with other composite widgets like tabs or combobox |
| lazyMount | false | `boolean` | Whether to enable lazy mounting |
| loopFocus | false | `boolean` | Whether to loop the keyboard navigation through the options |
| skipAnimationOnMount | false | `boolean` | Whether to allow the initial presence animation. |
| unmountOnExit | false | `boolean` | Whether to unmount on exit. |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | outline | `'outline' \| 'subtle' \| 'ghost'` | The variant of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| defaultHighlightedValue | undefined | `string` | The initial value of the highlighted item when opened.
Use when you don't need to control the highlighted value of the select. |
| defaultOpen | undefined | `boolean` | Whether the select's open state is controlled by the user |
| defaultValue | undefined | `string[]` | The initial default value of the select when rendered.
Use when you don't need to control the value of the select. |
| deselectable | undefined | `boolean` | Whether the value can be cleared by clicking the selected item.

**Note:** this is only applicable for single selection |
| disabled | undefined | `boolean` | Whether the select is disabled |
| form | undefined | `string` | The associate form of the underlying select. |
| highlightedValue | undefined | `string` | The controlled key of the highlighted item |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{\n  root: string\n  content: string\n  control: string\n  trigger: string\n  clearTrigger: string\n  label: string\n  hiddenSelect: string\n  positioner: string\n  item: (id: string \| number) => string\n  itemGroup: (id: string \| number) => string\n  itemGroupLabel: (id: string \| number) => string\n}>` | The ids of the elements in the select. Useful for composition. |
| immediate | undefined | `boolean` | Whether to synchronize the present change immediately or defer it to the next frame |
| invalid | undefined | `boolean` | Whether the select is invalid |
| multiple | undefined | `boolean` | Whether to allow multiple selection |
| name | undefined | `string` | The `name` attribute of the underlying select. |
| onExitComplete | undefined | `VoidFunction` | Function called when the animation ends in the closed state |
| onFocusOutside | undefined | `(event: FocusOutsideEvent) => void` | Function called when the focus is moved outside the component |
| onHighlightChange | undefined | `(details: HighlightChangeDetails<T>) => void` | The callback fired when the highlighted item changes. |
| onInteractOutside | undefined | `(event: InteractOutsideEvent) => void` | Function called when an interaction happens outside the component |
| onOpenChange | undefined | `(details: OpenChangeDetails) => void` | Function called when the popup is opened |
| onPointerDownOutside | undefined | `(event: PointerDownOutsideEvent) => void` | Function called when the pointer is pressed down outside the component |
| onSelect | undefined | `(details: SelectionDetails) => void` | Function called when an item is selected |
| onValueChange | undefined | `(details: ValueChangeDetails<T>) => void` | The callback fired when the selected item changes. |
| open | undefined | `boolean` | Whether the select menu is open |
| positioning | undefined | `PositioningOptions` | The positioning options of the menu. |
| present | undefined | `boolean` | Whether the node is present (controlled by the user) |
| readOnly | undefined | `boolean` | Whether the select is read-only |
| required | undefined | `boolean` | Whether the select is required |
| scrollToIndexFn | undefined | `(details: ScrollToIndexDetails) => void` | Function to scroll to a specific index |
| value | undefined | `string[]` | The controlled keys of the selected items |

## Explorer

Explore the `Select` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.
