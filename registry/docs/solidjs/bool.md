JSX attributes

# bool:\*

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/jsx-attributes/bool.mdx)

`bool:*` controls the presence of an attribute in an element. When the value is `truthy` it adds the `attribute` to the element. Alternatively, when the value is `falsy` it removes the `attribute` from the element. This attribute is most useful for Web Components.

```
<my-element bool:status={prop.value} />
```

```
// Assuming `prop.value` is `truthy`, then it becomes<my-element status />
// And when `falsy`, then it becomes<my-element />
```

Strong-Typing Custom Boolean Attributes

Type definitions are required when using TypeScript. See the [TypeScript](/configuration/typescript#forcing-properties-and-custom-attributes) page for examples.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/jsx-attributes/bool.mdx\&page=https://docs.solidjs.com/reference/jsx-attributes/bool)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/jsx-attributes/bool.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/jsx-attributes/bool.mdx\&page=https://docs.solidjs.com/reference/jsx-attributes/bool)
