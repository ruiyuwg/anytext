# Focus and UI state in custom inputs

## Handling focus in primitive inputs

When creating a custom input for a number, string, or Boolean value in Sanity Studio, focus management is mostly taken care of. You only need to forward the received `elementProps` to the element that should receive focus. Typically, this is the element in the DOM that represents the input. For example, if you make a custom input that wraps a `<textarea>`, you need to forward the received `elementProps` to the corresponding element in the DOM:

```tsx
function MyCustomInput(props) {
  return (
    <div>
      /* Forward 'elementProps' here to handle focus correctly */
      <textarea {...props.elementProps} />
    </div>
  )
}

```

### Assigning a focusable element

If your custom input doesn’t have a corresponding element to receive focus, you can do one of the following:

- Assign the custom input a focusable element.
- Wrap your component in an element that accepts a `tabIndex` attribute to [make the element focusable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex).

The following example features a number input with two buttons: one to increase, the other to decrease a value. Since it’s not obvious which button should be the focusable element, a possible approach is to wrap them both inside a `div` element with a `tabIndex` attribute [set to zero](https://www.w3.org/WAI/GL/wiki/Creating_Logical_Tab_Order_with_the_Tabindex_Attribute).

In the example, `props.elementProps` includes `value`. Before forwarding `props.elementProps` to the `div` element, you may want to omit `value` since divs doesn’t have a `value` property

```tsx
function MyCustomInput(props) {
  return (
    <div tabIndex={0} {...props.elementProps}>
      <button onClick={() => {props.onChange(inc())}}>Increment</button>
      <button onClick={() => {props.onChange(inc())}}>Decrement</button>
    </div>
  )
}

```

## Handling focus in object and array inputs

Focus handling for `object` and `array` inputs works in the same way as for primitive inputs. However, when you implement a custom input you may need to programmatically assign focus in a different order than the default sequential keyboard navigation. For example, in the context of an object input you may want to assign focus to a specific field. Or if you’re making a custom array input, you may want to assign focus to a field that's nested inside an array value.

It can be a bit tricky to get this running right away, so here are some guidelines to help you get it right.

### Object inputs

Programmatically move focus to a field or nested value in an object input.

All object inputs receive three props related to focus:

- `elementProps.onFocus(event)`
- `elementProps.onBlur(event)`
- `onPathFocus(path)`

`elementProps.onFocus` and `elementProps.onBlur` are designed to be passed to the native DOM element that represents the input component, but you can also call them programmatically by passing a focus event as an argument.

[onPathFocus](https://reference.sanity.io/sanity/index/BlockProps/#onpathfocus) takes a relative node path as an argument, and it offers a way to programmatically move focus to a specific member or a nested member.

Example: when a user clicks a button, move the focus to the title field.

```tsx

function MyObjectInput(props) {
	return (
	  <>
			<Button text="Move focus to title" onClick={() =>	props.onPathFocus(['title'])}>
			{props.renderDefault(props)}
		</>
  )
}

```

> \[!NOTE]
> Currently, you can assign focus only to the inputs of the fields inside an object input. You cannot assign focus to an object input as a whole.
> This behavior may might change in the future.

## Handling focus and UI states

When you open or expand a node, Sanity Studio built-in form state manager automatically shifts focus to the open or expanded node.

- If the node you’re shifting focus to is inside a modal, the form state manager flags the node as open so that the parent modal opens to reveal the node.
- If the node is inside a fieldset, the form state manager flags the fieldset as expanded.
- If the node is inside a field group, the form state manager automatically selects the field group.

However, sometimes you may want to make sure that a form node is visible to the user, regardless of whether the specified node is inside a fieldset, a field group, or hidden behind a modal.
In this case, call `onPathFocus(nodePath)`. The `nodePath` argument that you pass corresponds to the path to the node, relative to the current array or object input.

## Best practices and common pitfalls

### Shifting focus

To shift focus to the desired position, pass a form path to `onFocusPath`: `onFocusPath(['path', 'to', 'node')`. Don’t call `.focus()` directly on DOM nodes.

### Opening and closing form nodes

Sometimes you may wish to put a field or a sub-field inside a modal that opens based on user interactions such as click to edit, or open an array item to edit it. To do so, object and array inputs receive a callback prop that defines whether a field or an array item should be open or not. If a form node is set to open, the corresponding field/item props have an `open` prop set to `true`, which allows toggling the element visibility when it’s rendered.

**Open and close an object field**

> \[!NOTE]
> It’s possible to have only one open node at a time; when you open an element, the action automatically closes any other currently open element. Closing an element opens the corresponding parent node.
> For example, closing a field inside an object input flags the object field as open. This behavior applies to the form as a whole.

An object input receives two props to control the open and closed state of its fields:

- `onFieldOpen(fieldName)`: flags the field as open. Upon the next rendering, the field member receives an `open` prop.
- `onFieldClose()`: closes a currently open field. Flags the current node (the object node managed by this object input) as open.

**Open and close an array item**

Studio renders object values and array values differently.

By default, object values are ordered by field, and each field input is rendered from top to bottom. If the type of an object field is another object, the child fields of the parent object are rendered the same way with some left margin to visualize the hierarchy.

By default, array items are rendered differently, because arrays have a different set of affordances, compared to objects:

- You can assign an array any number of items including zero (none); objects always have a fixed set of fields.
- You can reorder array items can be reordered; object fields have a predefined order defined in the object schema.
- You can insert and remove array items anywhere in the array; object fields are either set or empty (cleared).

Instead of laying out the input components for each array item, the studio renders a preview of the array item. This produces a more compact view that enables UI affordances for reordering, inserting, and removing items, and so on.

To support editing an array item, the array input takes a prop that you can call to flag that an item can be opened for editing: `onItemOpen`. To close the array item after applying the edits, use `onItemClose`:

- `onItemOpen(path)`: the prop is a function that takes as an argument the *relative path* of the item that you want to open.
- `onItemClose()`: the prop is a function that takes no arguments. Since it’s possible to have only one open item at a time, there’s no need to specify which item to close. The function flags the current node as open. The current node corresponds to the array node managed by this array input.

### Expanding and collapsing form nodes

Whereas open and close allow only one open node at a time, expanding supports multiple open nodes at once. Arrays and objects both support expanding their members.

**Expand and collapse an object field**

To expand a field in an object, pass the name of the field to `onFieldExpand`. To close an expanded field, pass the name of the field to `onFieldCollapse`.

- `onFieldExpand(fieldName)`: flags an object field as expanded.
- `onFieldCollapse(fieldName)`: flags an object field as collapsed.

**Expand and collapse an array item**

Expanding and collapsing array items is useful with arrays that can have multiple items open at once:

- `onItemExpand(itemKey)`: flags the item corresponding to the `itemKey` key as expanded. Upon the next rendering, the expanded item member receives an `expanded: true` prop.
- `onItemCollapse(itemKey)`: flags the item corresponding to the `itemKey` key as collapsed. Upon the next rendering, the expanded item member receives an `expanded: false` prop.

### **Expanding and collapsing fieldsets**

You can programmatically open and close fieldsets defined in the schema:

- `onFieldSetExpand(fieldsetName)`: flags the fieldset as expanded. Pass the name of the fieldset as an argument. The corresponding `FieldSetMember` receives an `expanded: true` prop.
- `onFieldSetCollapse(fieldsetName)`: flags the fieldset as collapsed. Pass the name of the fieldset as an argument. The corresponding `FieldSetMember` receives an `expanded: false` prop.

### **Selecting a field group**

You can define one or more field groups for object types. Field groups are filters for fields and fieldsets. To programmatically select a field group, call `onFieldGroupSelect(fieldGroupName)`, and pass the name of the field group that you want to select. It’s possible to reset and to reassign field group selection, but it’s not possible to deselect a selected field group. To reset field group state, set `onFieldGroupSelect` to `default`: `onFieldGroupSelect('default')`
