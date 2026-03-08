JSX attributes

# @once

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/jsx-attributes/once.mdx)

Solid's compiler uses a heuristic for reactive wrapping and lazy evaluation of JSX expressions. Does it contain a function call, a property access, or JSX? If yes we wrap it in a getter when passed to components or in an effect if passed to native elements.

Knowing this heuristic and its limitations, we can reduce overhead of things we know will never change by accessing them outside of the JSX. A lone variable will never be wrapped. We can also tell the compiler not to wrap them by starting the expression with a comment decorator `/* @once */`.

```
<MyComponent static={/*@once*/ state.wontUpdate} />
```

This also works on children.

```
<MyComponent>{/*@once*/ state.wontUpdate}</MyComponent>
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/jsx-attributes/once.mdx\&page=https://docs.solidjs.com/reference/jsx-attributes/once)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/jsx-attributes/once.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/jsx-attributes/once.mdx\&page=https://docs.solidjs.com/reference/jsx-attributes/once)
