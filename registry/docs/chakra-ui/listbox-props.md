## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| collection | undefined | `ListCollection<T>` | The collection of items |
| defaultValue | \[] | `string[]` | The initial default value of the listbox when rendered.
Use when you don't need to control the value of the listbox. |
| loopFocus | false | `boolean` | Whether to loop the keyboard navigation through the options |
| orientation | "vertical" | `'horizontal' \| 'vertical'` | The orientation of the listbox. |
| selectionMode | "single" | `SelectionMode` | How multiple selection should behave in the listbox.

- `single`: The user can select a single item.
- `multiple`: The user can select multiple items without using modifier keys.
- `extended`: The user can select multiple items by using modifier keys. |
  | colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
  | variant | subtle | `'subtle' \| 'solid' \| 'plain'` | The variant of the component |
  | as | undefined | `React.ElementType` | The underlying element to render. |
  | asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
  | unstyled | undefined | `boolean` | Whether to remove the component's style. |
  | defaultHighlightedValue | undefined | `string` | The initial value of the highlighted item when opened.
  Use when you don't need to control the highlighted value of the listbox. |
  | deselectable | undefined | `boolean` | Whether to disallow empty selection |
  | disabled | undefined | `boolean` | Whether the listbox is disabled |
  | disallowSelectAll | undefined | `boolean` | Whether to disallow selecting all items when `meta+a` is pressed |
  | highlightedValue | undefined | `string` | The controlled key of the highlighted item |
  | id | undefined | `string` | The unique identifier of the machine. |
  | ids | undefined | `Partial<{\n  root: string\n  content: string\n  label: string\n  item: (id: string \| number) => string\n  itemGroup: (id: string \| number) => string\n  itemGroupLabel: (id: string \| number) => string\n}>` | The ids of the elements in the listbox. Useful for composition. |
  | onHighlightChange | undefined | `(details: HighlightChangeDetails<T>) => void` | The callback fired when the highlighted item changes. |
  | onSelect | undefined | `(details: SelectionDetails) => void` | Function called when an item is selected |
  | onValueChange | undefined | `(details: ValueChangeDetails<T>) => void` | The callback fired when the selected item changes. |
  | scrollToIndexFn | undefined | `(details: ScrollToIndexDetails) => void` | Function to scroll to a specific index |
  | selectOnHighlight | undefined | `boolean` | Whether to select the item when it is highlighted |
  | typeahead | undefined | `boolean` | Whether to enable typeahead on the listbox |
  | value | undefined | `string[]` | The controlled keys of the selected items |

### Label

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### Input

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| autoHighlight | false | `boolean` | Whether to automatically highlight the item when typing |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### Content

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### Item

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| highlightOnHover | undefined | `boolean` | Whether to highlight the item on hover |
| item | undefined | `any` | The item to render |

### ItemText

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### ItemIndicator

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### ItemGroup

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### ItemGroupLabel

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

## Explorer

Explore the `Listbox` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="listbox-explorer-demo" />

# Locale Provider

## Usage

The `LocaleProvider` component sets the locale for your app, formatting dates,
numbers, and other locale-specific data.

> Most Chakra UI components that read the locale set by the `LocaleProvider`.

```jsx
import { LocaleProvider, useLocaleContext } from "@chakra-ui/react"
```

```jsx
{/* Your App */}
```

## Examples

### Setting Locale

Set the `locale` prop to the locale you want to use.

```jsx

  

```

### Reading Locale

```jsx
export const Usage = () => {
  const { locale, dir } = useLocaleContext()
  return {JSON.stringify({ locale, dir }, null, 2)}
}
```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| locale | 'en-US' | `string` | The locale to use for the application. |

# Mark

```tsx
import { Mark, Text } from "@chakra-ui/react"

export const MarkBasic = () => {
  return (
    
      The design system is a collection of UI
      elements
    
  )
}

```

## Usage

```js
import { Mark } from "@chakra-ui/react"
```

```jsx

  The design system is a collection of UI elements

```

## Examples

### Variants

Use the `variant` prop to change the color of the mark.

<Example name="mark-with-variants" />

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| variant | undefined | `'subtle' \| 'solid' \| 'text' \| 'plain'` | The variant of the component |
