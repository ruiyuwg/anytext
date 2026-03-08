Component APIs

# children

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/component-apis/children.mdx)

`children` normalizes a component's `children` prop into a stable accessor that returns resolved JSX elements. It accepts functions, arrays, fragments, and nested structures.

***

## [Import](/reference/component-apis/children#import)

```
import { children } from "solid-js";
```

***

## [Type](/reference/component-apis/children#type)

```
function children(fn: Accessor<JSX.Element>): ChildrenReturn;
type ChildrenReturn = Accessor<ResolvedChildren> & {  toArray: () => ResolvedChildren[];};
```

***

## [Parameters](/reference/component-apis/children#parameters)

### [`fn`](/reference/component-apis/children#fn)

- **Type:** `() => JSX.Element`
- **Required:** Yes

An accessor that returns the `children` value (typically `props.children`).

***

## [Return value](/reference/component-apis/children#return-value)

- **Type:** `ChildrenReturn`

The function returns a callable accessor. Calling it yields the resolved children, either a single element or an array.

***

## [Helpers](/reference/component-apis/children#helpers)

### [`toArray()`](/reference/component-apis/children#toarray)

- **Type:** `() => ResolvedChildren[]`

- **Description:** Returns a flattened array of resolved child elements.

This method is exposed on the returned accessor and is useful for iteration or index-based logic.

***

## [Examples](/reference/component-apis/children#examples)

### [Basic usage](/reference/component-apis/children#basic-usage)

```
function Wrapper(props) {  const resolved = children(() => props.children);
  return <div>{resolved()}</div>;}
// Usage<Wrapper>  <span>one</span>  <span>two</span></Wrapper>;
```

### [`.toArray()` example](/reference/component-apis/children#toarray-example)

```
function List(props) {  const resolved = children(() => props.children);  const items = resolved.toArray();
  return (    <ul>      {items.map((child) => (        <li>{child}</li>      ))}    </ul>  );}
// Usage<List>  <span>one</span>  <span>two</span></List>;
```

note

`children` resolves the current value of `props.children`. If `props.children` is reactive, the resolved accessor reflects updates.

### [Working with function-as-children](/reference/component-apis/children#working-with-function-as-children)

If `children` is a function, the helper evaluates it and returns its rendered result.

```
function Slot(props) {  const resolved = children(() => props.children);  return <div>{resolved()}</div>;}
// Usage<Slot>{() => <span>dynamic</span>}</Slot>;
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/component-apis/children.mdx\&page=https://docs.solidjs.com/reference/component-apis/children)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [fn](#fn)
5. [Return value](#return-value)
6. [Helpers](#helpers)
   1. [toArray()](#toarray)
7. [Examples](#examples)
   1. [Basic usage](#basic-usage)
   2. [.toArray() example](#toarray-example)
   3. [Working with function-as-children](#working-with-function-as-children)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/component-apis/children.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/component-apis/children.mdx\&page=https://docs.solidjs.com/reference/component-apis/children)
