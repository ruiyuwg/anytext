Store utilities

# createStore

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/store-utilities/create-store.mdx)

Stores were intentionally designed to manage data structures like objects and arrays but are capable of handling other data types, such as strings and numbers.

***

## [Types Signature](/reference/store-utilities/create-store#types-signature)

```
import { createStore } from "solid-js/store"import type { StoreNode, Store, SetStoreFunction } from "solid-js/store"
function createStore<T extends StoreNode>(  state: T | Store<T>): [get: Store<T>, set: SetStoreFunction<T>];
type Store<T> = T; // conceptually readonly, but not typed as such
```

***

## [Usage](/reference/store-utilities/create-store#usage)

```
import { createStore } from "solid-js/store";
// Initialize storeconst [store, setStore] = createStore({  userCount: 3,  users: [    {      id: 0,      username: "felix909",      location: "England",      loggedIn: false,    },    {      id: 1,      username: "tracy634",      location: "Canada",      loggedIn: true,    },    {      id: 1,      username: "johny123",      location: "India",      loggedIn: true,    },  ],});
```

***

## [Getter](/reference/store-utilities/create-store#getter)

Store objects support the use of getters to store derived values.

```
const [state, setState] = createStore({  user: {    firstName: "John",    lastName: "Smith",    get fullName() {      return `${this.firstName} ${this.lastName}`;    },  },});
```

***

## [Setter](/reference/store-utilities/create-store#setter)

Changes can take the form of function that passes previous state and returns new state or a value. Objects are always shallowly merged. Set values to undefined to delete them from the Store. In TypeScript, you can delete a value by using a non-null assertion, like `undefined!`.

```
const [state, setState] = createStore({  firstName: "John",  lastName: "Miller",});
setState({ firstName: "Johnny", middleName: "Lee" });// ({ firstName: 'Johnny', middleName: 'Lee', lastName: 'Miller' })
setState((state) => ({ preferredName: state.firstName, lastName: "Milner" }));// ({ firstName: 'Johnny', preferredName: 'Johnny', middleName: 'Lee', lastName: 'Milner' })
```

***

To learn more about using stores check the [Stores Guide](/concepts/stores), and the **Store utilities** section for more advanced APIs.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/store-utilities/create-store.mdx\&page=https://docs.solidjs.com/reference/store-utilities/create-store)

On this page

1. [Overview](#_top)
2. [Types Signature](#types-signature)
3. [Usage](#usage)
4. [Getter](#getter)
5. [Setter](#setter)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/store-utilities/create-store.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/store-utilities/create-store.mdx\&page=https://docs.solidjs.com/reference/store-utilities/create-store)
