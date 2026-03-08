Reactive utilities

# untrack

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/untrack.mdx)

Ignores tracking any of the dependencies in the executing code block and returns the value. This helper is useful when a certain `prop` will never update and thus it is ok to use it outside of the tracking scope.

```
import { untrack } from "solid-js"
export function Component(props) {    const value = untrack(() => props.value)
    return <div>{value}</div>    }}
```

***

## [Initial and Default Values](/reference/reactive-utilities/untrack#initial-and-default-values)

It is not necessary to manually untrack values that are suppose to serve as a default or initial value to a signal. Even with the linter configured to enforce tracking, the linter will accept it when a `prop` is prefixed with `default` or `initial` as it is a common pattern to use them as such.

initialValuedefaultValue

```
// component.tsximport { createSignal } from "solid-js"
export function Component(props) {    const [name, setName] = createSignal(props.initialName)
    return <div>{name()}</div>    }}
```

```
// component.tsximport { createSignal } from "solid-js"
export function Component(props) {    const [name, setName] = createSignal(props.defaultName)
    return <div>{name()}</div>    }}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/untrack.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/untrack)

On this page

1. [Overview](#_top)
2. [Initial and Default Values](#initial-and-default-values)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/untrack.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/untrack.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/untrack)
