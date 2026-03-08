## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| collection | undefined | `ListCollection<T>` | The collection of items |
| alwaysSubmitOnEnter | false | `boolean` | Whether to always submit on Enter key press, even if popup is open.
Useful for single-field autocomplete forms where Enter should submit the form. |
| composite | true | `boolean` | Whether the combobox is a composed with other composite widgets like tabs |
| defaultInputValue | "" | `string` | The initial value of the combobox's input when rendered.
Use when you don't need to control the value of the combobox's input. |
| defaultValue | \[] | `string[]` | The initial value of the combobox's selected items when rendered.
Use when you don't need to control the value of the combobox's selected items. |
| inputBehavior | "none" | `'none' \| 'autohighlight' \| 'autocomplete'` | Defines the auto-completion behavior of the combobox.

- `autohighlight`: The first focused item is highlighted as the user types

- `autocomplete`: Navigating the listbox with the arrow keys selects the item and the input is updated |
  | lazyMount | false | `boolean` | Whether to enable lazy mounting |
  | loopFocus | true | `boolean` | Whether to loop the keyboard navigation through the items |
  | openOnChange | true | `boolean \| ((details: InputValueChangeDetails) => boolean)` | Whether to show the combobox when the input value changes |
  | openOnClick | false | `boolean` | Whether to open the combobox popup on initial click on the input |
  | openOnKeyPress | true | `boolean` | Whether to open the combobox on arrow key press |
  | positioning | { placement: "bottom-start" } | `PositioningOptions` | The positioning options to dynamically position the menu |
  | selectionBehavior | "replace" | `'clear' \| 'replace' \| 'preserve'` | The behavior of the combobox input when an item is selected

- `replace`: The selected item string is set as the input value

- `clear`: The input value is cleared

- `preserve`: The input value is preserved |
  | skipAnimationOnMount | false | `boolean` | Whether to allow the initial presence animation. |
  | unmountOnExit | false | `boolean` | Whether to unmount on exit. |
  | colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
  | variant | outline | `'outline' \| 'subtle' \| 'flushed'` | The variant of the component |
  | size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
  | as | undefined | `React.ElementType` | The underlying element to render. |
  | asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
  | unstyled | undefined | `boolean` | Whether to remove the component's style. |
  | allowCustomValue | undefined | `boolean` | Whether to allow typing custom values in the input |
  | autoFocus | undefined | `boolean` | Whether to autofocus the input on mount |
  | closeOnSelect | undefined | `boolean` | Whether to close the combobox when an item is selected. |
  | defaultHighlightedValue | undefined | `string` | The initial highlighted value of the combobox when rendered.
  Use when you don't need to control the highlighted value of the combobox. |
  | defaultOpen | undefined | `boolean` | The initial open state of the combobox when rendered.
  Use when you don't need to control the open state of the combobox. |
  | disabled | undefined | `boolean` | Whether the combobox is disabled |
  | disableLayer | undefined | `boolean` | Whether to disable registering this a dismissable layer |
  | form | undefined | `string` | The associate form of the combobox. |
  | highlightedValue | undefined | `string` | The controlled highlighted value of the combobox |
  | id | undefined | `string` | The unique identifier of the machine. |
  | ids | undefined | `Partial<{\n  root: string\n  label: string\n  control: string\n  input: string\n  content: string\n  trigger: string\n  clearTrigger: string\n  item: (id: string, index?: number \| undefined) => string\n  positioner: string\n  itemGroup: (id: string \| number) => string\n  itemGroupLabel: (id: string \| number) => string\n}>` | The ids of the elements in the combobox. Useful for composition. |
  | immediate | undefined | `boolean` | Whether to synchronize the present change immediately or defer it to the next frame |
  | inputValue | undefined | `string` | The controlled value of the combobox's input |
  | invalid | undefined | `boolean` | Whether the combobox is invalid |
  | multiple | undefined | `boolean` | Whether to allow multiple selection.

**Good to know:** When `multiple` is `true`, the `selectionBehavior` is automatically set to `clear`.
It is recommended to render the selected items in a separate container. |
| name | undefined | `string` | The `name` attribute of the combobox's input. Useful for form submission |
| navigate | undefined | `(details: NavigateDetails) => void` | Function to navigate to the selected item |
| onExitComplete | undefined | `VoidFunction` | Function called when the animation ends in the closed state |
| onFocusOutside | undefined | `(event: FocusOutsideEvent) => void` | Function called when the focus is moved outside the component |
| onHighlightChange | undefined | `(details: HighlightChangeDetails<T>) => void` | Function called when an item is highlighted using the pointer
or keyboard navigation. |
| onInputValueChange | undefined | `(details: InputValueChangeDetails) => void` | Function called when the input's value changes |
| onInteractOutside | undefined | `(event: InteractOutsideEvent) => void` | Function called when an interaction happens outside the component |
| onOpenChange | undefined | `(details: OpenChangeDetails) => void` | Function called when the popup is opened |
| onPointerDownOutside | undefined | `(event: PointerDownOutsideEvent) => void` | Function called when the pointer is pressed down outside the component |
| onSelect | undefined | `(details: SelectionDetails) => void` | Function called when an item is selected |
| onValueChange | undefined | `(details: ValueChangeDetails<T>) => void` | Function called when a new item is selected |
| open | undefined | `boolean` | The controlled open state of the combobox |
| placeholder | undefined | `string` | The placeholder text of the combobox's input |
| present | undefined | `boolean` | Whether the node is present (controlled by the user) |
| readOnly | undefined | `boolean` | Whether the combobox is readonly. This puts the combobox in a "non-editable" mode
but the user can still interact with it |
| required | undefined | `boolean` | Whether the combobox is required |
| scrollToIndexFn | undefined | `(details: ScrollToIndexDetails) => void` | Function to scroll to a specific index |
| translations | undefined | `IntlTranslations` | Specifies the localized strings that identifies the accessibility elements and their states |
| value | undefined | `string[]` | The controlled value of the combobox's selected items |

### Item

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| item | undefined | `any` | The item to render |
| persistFocus | undefined | `boolean` | Whether hovering outside should clear the highlighted state |

## Explorer

Explore the `Combobox` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="combobox-explorer-demo" />
