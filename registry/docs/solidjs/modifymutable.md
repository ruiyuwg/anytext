Store utilities

# modifyMutable

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/store-utilities/modify-mutable.mdx)

`modifyMutable` streamlines the process of making multiple changes to a mutable Store, as obtained through the use of [`createMutable`](/reference/store-utilities/create-mutable).

It operates within a single [`batch`](/reference/reactive-utilities/batch), ensuring that dependent computations are updated just once, rather than triggering updates for each individual change.

```
import { modifyMutable } from "solid-js/store"
function modifyMutable<T>(mutable: T, modifier: (state: T) => T): void
```

The function takes two arguments:

1. The first argument is the mutable Store that needs modification.
2. The second argument is a Store modifier, which could be one of those returned by [`reconcile`](/reference/store-utilities/reconcile).

caution

When passing in your own modifier function, it's important to be aware that its argument is an unwrapped version of the store.

For example, if the UI depends on multiple fields of a mutable:

```
import { createMutable } from "solid-js/store"
const state = createMutable({  user: {    firstName: "John",    lastName: "Smith",  },});
<h1>Hello {state.user.firstName + " " + state.user.lastName}</h1>;
```

Modifying n fields in sequence will cause the UI to update n times:

```
state.user.firstName = "Jane";state.user.lastName = "Doe";
```

To trigger just a single update, the fields can be modified using a `batch`:

```
import { batch } from "solid-js"
batch(() => {  state.user.firstName = "Jane";  state.user.lastName = "Doe";});
```

`modifyMutable` combined with [`reconcile`](/reference/store-utilities/reconcile) or [`produce`](/reference/store-utilities/produce) provides two alternate ways to do similar things:

```
import { modifyMutable, reconcile } from "solid-js/store"
// Replace state.user with the specified object (deleting any other fields)modifyMutable(  state.user,  reconcile({    firstName: "Jane",    lastName: "Doe",  }));
```

```
import { modifyMutable, produce } from "solid-js/store"
// Modify two fields in a batch, triggering just one updatemodifyMutable(  state,  produce((state) => {    state.user.firstName = "Jane";    state.user.lastName = "Doe";  }));
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/store-utilities/modify-mutable.mdx\&page=https://docs.solidjs.com/reference/store-utilities/modify-mutable)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/store-utilities/modify-mutable.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/store-utilities/modify-mutable.mdx\&page=https://docs.solidjs.com/reference/store-utilities/modify-mutable)
