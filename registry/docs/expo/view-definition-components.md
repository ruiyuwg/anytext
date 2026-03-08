## View definition components

The view definition consists of the DSL components that describe the view's functionality and behavior. Those components can only be used within a [`View`](/modules/module-api#view) closure.

### `Name`

Sets the name of the view that JavaScript code will use to refer to the view. Takes a string as an argument. This can be inferred from the view's class name, but it's recommended to set it explicitly for clarity.

```swift
Name("MyViewName")
```

### `Prop`

Defines a setter for the view prop of given name.

#### Arguments

- **name**: `String` — Name of view prop that you want to define a setter.
- **defaultValue**: `ValueType` — Optional default value used when the setter is called with `null`.
- **setter**: `(view: ViewType, value: ValueType) -> ()` — Closure that is invoked when the view rerenders.

This property can only be used within a [`View`](/modules/module-api#view) closure.

```swift
Prop("background") { (view: UIView, color: UIColor) in
  view.backgroundColor = color
}
```

```kotlin
Prop("background") { view: View, @ColorInt color: Int ->
  view.setBackgroundColor(color)
}
```

Prop definition with default value.

```swift
Prop("background", UIColor.black) { (view: UIView, color: UIColor) in
  view.backgroundColor = color
}
```

```kotlin
Prop("background", Color.BLACK) { view: View, @ColorInt color: Int ->
  view.setBackgroundColor(color)
}
```

> **Note:** Props of function type (callbacks) are not supported yet.

### `PropGroup`

Supported platforms: Android.

Batch-registers multiple props that share a common setter pattern. Instead of defining each prop individually, you can register them all at once with a single handler.

Two overloads are available:

- **Pair-based**: Each prop is a `Pair<String, CustomValueType>`. The handler receives the view, the mapped custom value, and the prop value.
- **String-based**: Each prop is a name string. The handler receives the view, the positional index, and the prop value.

```kotlin
// Pair-based: map each prop name to a custom value
PropGroup(
  "borderTopColor" to LogicalEdge.TOP,
  "borderBottomColor" to LogicalEdge.BOTTOM,
  "borderLeftColor" to LogicalEdge.LEFT,
  "borderRightColor" to LogicalEdge.RIGHT
) { view: View, edge: LogicalEdge, color: Int? ->
  BackgroundStyleApplicator.setBorderColor(view, edge, color)
}

// String-based: use positional index
PropGroup(
  "borderWidth", "borderLeftWidth", "borderRightWidth",
  "borderTopWidth", "borderBottomWidth"
) { view: View, index: Int, width: Float? ->
  val edge = LogicalEdge.entries[index]
  BackgroundStyleApplicator.setBorderWidth(view, edge, width ?: Float.NaN)
}
```

> **Note:** `PropGroup` is used internally by the CSS prop decorators. Most modules should use individual `Prop` definitions unless they have many props with a shared setter pattern.

### Lifecycle

### `OnViewDidUpdateProps`

Defines the view lifecycle method that is called when the view finished updating all props.

```swift
OnViewDidUpdateProps { view: MyView in
  ... 
}
```

```kotlin
OnViewDidUpdateProps { view: MyView ->
  ... 
}
```

### `OnViewDestroys`

Supported platforms: Android.

Creates a view's lifecycle listener that is called right after the view is no longer used by React Native.

```kotlin
View(MyView::class) {
  OnViewDestroys { view: MyView ->
    ... 
  }
}
```

> **Note:** This function is not available on iOS. You may want to use the destructor of the native view to achieve similar results.

### `AsyncFunction`

Similarly to the [`AsyncFunction`](/modules/module-api#asyncfunction) inside the module definition, you can define functions attached to the view ref to allow direct modification of the native view.

View async functions will always be dispatched on the main queue and can receive the view instance as the first argument.

```swift
View(MyView.self) {
  AsyncFunction("myAsyncFunction") { (view: MyView, message: String) in
    view.displayMessage(message)
  }
}
```

```kotlin
View(MyView::class) {
  AsyncFunction("myAsyncFunction") { view: MyView, message: String ->
    view.displayMessage(message);
  }
}
```

```js
const MyNativeView = requireNativeViewManager('MyView');

function MyComponent() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current?.myAsyncFunction();
  }, [ref]);

  return <MyNativeView ref={ref} />;
}
```

### View groups

### `GroupView`

Supported platforms: Android.

Enables the view to be used as a view group. Definition components that are accepted as part of the group view definition: [`AddChildView`](/modules/module-api#addchildview), [`GetChildCount`](/modules/module-api#getchildcount), [`GetChildViewAt`](/modules/module-api#getchildviewat), [`RemoveChildView`](/modules/module-api#removechildview), [`RemoveChildViewAt`](/modules/module-api#removechildviewat).

#### Arguments

- **viewType** — The class of the native view. Note that the provided class must inherit from the Android `ViewGroup`.
- **definition**: `() -> ViewGroupDefinition` — A builder of the view group definition.

This property can only be used within a [`View`](/modules/module-api#view) closure.

```kotlin
GroupView<ViewGroup> {
  AddChildView { parent, child, index -> ... }
}
```

### `AddChildView`

Supported platforms: Android.

Defines action that adds a child view to the view group.

#### Arguments

- **action**: `(parent: ParentType, child: ChildType, index: Int) -> ()` — An action that adds a child view to the view group.

This property can only be used within a [`GroupView`](/modules/module-api#groupview) closure.

```kotlin
AddChildView { parent, child: View, index ->
  parent.addView(child, index)
}
```

### `GetChildCount`

Supported platforms: Android.

Defines action the retrieves the number of child views in the view group.

#### Arguments

- **action**: `(parent: ParentType) -> Int` — A function that returns number of child views.

This property can only be used within a [`GroupView`](/modules/module-api#groupview) closure.

```kotlin
GetChildCount { parent ->
  return@GetChildCount parent.childCount
}
```

### `GetChildViewAt`

Supported platforms: Android.

Defines action that retrieves a child view at a specific index from the view group.

#### Arguments

- **action**: `(parent: ParentType, index: Int) -> ChildType` — A function that retrieves a child view at a specific index from the view group.

This property can only be used within a [`GroupView`](/modules/module-api#groupview) closure.

```kotlin
GetChildViewAt { parent, index ->
  parent.getChildAt(index)
}
```

### `RemoveChildView`

Supported platforms: Android.

Defines action that removes a specific child view from the view group.

#### Arguments

- **action**: `(parent: ParentType, child: ChildType) -> ()` — A function that remove a specific child view from the view group.

This property can only be used within a [`GroupView`](/modules/module-api#groupview) closure.

```kotlin
RemoveChildView { parent, child: View ->
  parent.removeView(child)
}
```

### `RemoveChildViewAt`

Supported platforms: Android.

Defines action that removes a child view at a specific index from the view group.

#### Arguments

- **action**: `(parent: ParentType, child: ChildType) -> ()` — A function that removes a child view at a specific index from the view group.

This property can only be used within a [`GroupView`](/modules/module-api#groupview) closure.

```kotlin
RemoveChildViewAt { parent, index ->
  parent.removeViewAt(child)
}
```
