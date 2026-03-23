Store utilities

# produce

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/store-utilities/produce.mdx)

`produce` is an [Immer](https://immerjs.github.io/immer/) inspired API for Solid's Store objects that allows the store to be mutated inside the `produce` function.

```
import { produce } from "solid-js/store";import type { NotWrappable, Store } from "solid-js/store";
function produce<T>(  fn: (state: T) => void): (  state: T extends NotWrappable ? T : Store<T>) => T extends NotWrappable ? T : Store<T>;
```

For use with `createStore`:

```
import { produce } from "solid-js/store";
const [state, setState] = createStore({  user: {    name: "John",    age: 30,  },  list: ["book", "pen"],});
setState(  produce((state) => {    state.user.name = "Jane";    state.list.push("pencil");  }));
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/store-utilities/produce.mdx\&page=https://docs.solidjs.com/reference/store-utilities/produce)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/store-utilities/produce.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/store-utilities/produce.mdx\&page=https://docs.solidjs.com/reference/store-utilities/produce)
