Store utilities

# reconcile

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/store-utilities/reconcile.mdx)

`reconcile` is designed for diffing data changes in situations where granular updates cannot be applied. This is useful when dealing with immutable data from stores or handling large API responses.

```
import { reconcile } from "solid-js/store";import type { NotWrappable, Store } from "solid-js/store";
function reconcile<T>(  value: T | Store<T>,  options?: {    key?: string | null;    merge?: boolean;  } = { key: "id" }): (  state: T extends NotWrappable ? T : Store<T>) => T extends NotWrappable ? T : Store<T>;
```

`reconcile` has a `key` option that can be used when available to match items. The `value` accepts either a value of type `T` or a Store containing values of type `T`. This represents the data to be reconciled.

The `reconcile` function helps manage data changes by performing a diffing process, making it particularly handy in scenarios where applying granular updates is challenging or inefficient.

The `key` and `merge` options provide flexibility to customize the reconciliation process based on specific needs.

```
// subscribing to an observableconst unsubscribe = store.subscribe(({ todos }) => (  setState('todos', reconcile(todos)););onCleanup(() => unsubscribe());
```

##### [Options](/reference/store-utilities/reconcile#options)

Option

Type

Default

Description

key

string

"id"

Specifies the key to be used for matching items during reconciliation

merge

boolean

false

When merge is false, referential checks are performed where possible to determine equality, and items that are not referentially equal are replaced. When merge is true, all diffing is pushed to the leaves, effectively morphing the previous data to the new value.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/store-utilities/reconcile.mdx\&page=https://docs.solidjs.com/reference/store-utilities/reconcile)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/store-utilities/reconcile.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/store-utilities/reconcile.mdx\&page=https://docs.solidjs.com/reference/store-utilities/reconcile)
