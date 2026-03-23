Reactive utilities

# splitProps

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/split-props.mdx)

```
import { splitProps } from "solid-js";
function splitProps<T>(  props: T,  ...keys: Array<(keyof T)[]>): [...parts: Partial<T>];
```

Splits a reactive object by keys.

It takes a reactive object and any number of arrays of keys; for each array of keys, it will return a reactive object with just those properties of the original object. The last reactive object in the returned array will have any leftover properties of the original object.

This can be useful if you want to consume a subset of props and pass the rest to a child.

```
function MyComponent(props) {  const [local, others] = splitProps(props, ["children"]);
  return (    <>      <div>{local.children}</div>      <Child {...others} />    </>  );}
```

Because `splitProps` takes any number of arrays, we can split a props object as much as we wish (if, for example, we had multiple child components that each required a subset of the props).

Let's say a component was passed six props:

```
<MyComponent a={1} b={2} c={3} d={4} e={5} foo="bar" />;// ...
function MyComponent(props) {  console.log(props); // {a: 1, b: 2, c: 3, d: 4, e: 5, foo: "bar"}  const [vowels, consonants, leftovers] = splitProps(    props,    ["a", "e"],    ["b", "c", "d"]  );  console.log(vowels); // {a: 1, e: 5}  console.log(consonants); // {b: 2, c: 3, d: 4}  console.log(leftovers.foo); // bar}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/split-props.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/split-props)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/split-props.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/split-props.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/split-props)
