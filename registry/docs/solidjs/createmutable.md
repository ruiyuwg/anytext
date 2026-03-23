Store utilities

# createMutable

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/store-utilities/create-mutable.mdx)

`createMutable` creates a new mutable Store proxy object that provides a way to selectively trigger updates only when values change.

By intercepting property access, it allows automatic tracking of deep nesting via proxy making it useful for integrating external systems or serving as a compatibility layer with frameworks like MobX or Vue.

```
import { createMutable } from "solid-js/store";import type { Store, StoreNode } from "solid-js/store";
function createMutable<T extends StoreNode>(state: T | Store<T>): Store<T>;
```

note

It's important to recognize that a mutable state, which can be passed around and modified anywhere, may complicate the code structure and increase the risk of breaking unidirectional flow.

For a more robust alternative, it is generally recommended to use `createStore` instead. Additionally, the [`produce`](/reference/store-utilities/produce) utility can provide many of these same benefits without the associated downsides.

```
import { createMutable } from "solid-js/store";
const state = createMutable({  someValue: 0,  list: [],});
// read valuestate.someValue;
// set valuestate.someValue = 5;
state.list.push(anotherValue);
```

Mutables support setters along with getters.

```
const user = createMutable({  firstName: "John",  lastName: "Smith",  get fullName() {    return `${this.firstName} ${this.lastName}`;  },  set setFullName(value) {    [this.firstName, this.lastName] = value.split(" ");  },});
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/store-utilities/create-mutable.mdx\&page=https://docs.solidjs.com/reference/store-utilities/create-mutable)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/store-utilities/create-mutable.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/store-utilities/create-mutable.mdx\&page=https://docs.solidjs.com/reference/store-utilities/create-mutable)
