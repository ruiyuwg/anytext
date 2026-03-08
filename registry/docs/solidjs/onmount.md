Lifecycle

# onMount

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/lifecycle/on-mount.mdx)

Registers a method that runs after initial rendering is done and the elements are mounted to the page. Ideal for using [refs](/reference/jsx-attributes/ref) and managing other one-time setup.

```
import { onMount } from "solid-js"
function onMount(fn: () => void): void
```

This is an alias for an effect that is non-tracking, meaning that it is equivalent to a [`createEffect`](/reference/basic-reactivity/create-effect) with no dependencies.

```
// example that shows how to use onMount to get a reference to an elementimport { onMount } from "solid-js"
function MyComponent() {  let ref: HTMLButtonElement
  // when the component is mounted, the button will be disabled  onMount(() => {    ref.disabled = true  })  return <button ref={ref}>Focus me!</button>}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/lifecycle/on-mount.mdx\&page=https://docs.solidjs.com/reference/lifecycle/on-mount)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/lifecycle/on-mount.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/lifecycle/on-mount.mdx\&page=https://docs.solidjs.com/reference/lifecycle/on-mount)
