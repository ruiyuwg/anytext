Reactive utilities

# useTransition

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/use-transition.mdx)

```
import { useTransition } from "solid-js";
function useTransition(): [  pending: () => boolean,  startTransition: (fn: () => void) => Promise<void>,];
```

Used to batch async updates in a transaction deferring commit until all async processes are complete. This is tied into Suspense and only tracks resources read under Suspense boundaries.

```
const [isPending, start] = useTransition();
// check if transitioningisPending();
// wrap in transitionstart(() => setSignal(newValue), () => /* transition is done */)
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/use-transition.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/use-transition)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/use-transition.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/use-transition.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/use-transition)
