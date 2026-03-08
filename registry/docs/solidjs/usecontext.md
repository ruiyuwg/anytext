Component APIs

# useContext

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/component-apis/use-context.mdx)

Used to grab context within a context provider scope to allow for deep passing of props without having to pass them through each Component function. It's therefore used in conjunction with [`createContext`](/reference/component-apis/create-context) to consume the data from a Provider scope and thus avoid passing data through intermediate components (prop drilling).

```
const [state, { increment, decrement }] = useContext(CounterContext)
```

***

## [Recommended usage](/reference/component-apis/use-context#recommended-usage)

It is often a good idea to wrap `useContext` in a function like so:

```
function useCounterContext() {  const context = useContext(CounterContext)
  if (!context) {    throw new Error("useCounterContext: cannot find a CounterContext")  }
  return context}
```

See the API reference of [createContext](/reference/component-apis/create-context) the API on how to generate a Provider scope. And check the [Context concepts](/concepts/context) for more information on how to architecture your contexts.

***

## [Type signature](/reference/component-apis/use-context#type-signature)

```
import { type Context } from "solid-js"
function useContext<T>(context: Context<T>): T
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/component-apis/use-context.mdx\&page=https://docs.solidjs.com/reference/component-apis/use-context)

On this page

1. [Overview](#_top)
2. [Recommended usage](#recommended-usage)
3. [Type signature](#type-signature)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/component-apis/use-context.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/component-apis/use-context.mdx\&page=https://docs.solidjs.com/reference/component-apis/use-context)
