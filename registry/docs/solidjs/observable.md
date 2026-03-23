Reactive utilities

# observable

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/observable.mdx)

```
import { observable } from "solid-js";
function observable<T>(input: () => T): Observable<T>;
```

This method takes a signal and produces an Observable. You can consume it from another Observable library of your choice, typically with the `from` operator.

```
// How to integrate rxjs with a Solid signalimport { observable } from "solid-js";import { from } from "rxjs";
const [s, set] = createSignal(0);
const obsv$ = from(observable(s));
obsv$.subscribe((v) => console.log(v));
```

You can also use `from` without rxjs; check out this [page](/reference/reactive-utilities/from).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/observable.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/observable)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/observable.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/observable.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/observable)
