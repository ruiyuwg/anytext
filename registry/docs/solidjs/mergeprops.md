Reactive utilities

# mergeProps

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/merge-props.mdx)

```
import { mergeProps } from "solid-js"
function mergeProps(...sources: any): any
```

A reactive object **merge** method. Useful for setting default props for components in case caller doesn't provide them. Or cloning the props object including reactive properties.

This method works by using a proxy and resolving properties in reverse order. This allows for dynamic tracking of properties that aren't present when the prop object is first merged.

```
// default propsprops = mergeProps({ name: "Smith" }, props)
// clone propsnewProps = mergeProps(props)
// merge propsprops = mergeProps(props, otherProps)
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/merge-props.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/merge-props)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/merge-props.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/merge-props.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/merge-props)
