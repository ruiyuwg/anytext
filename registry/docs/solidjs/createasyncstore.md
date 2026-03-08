Data APIs

# createAsyncStore

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/create-async-store.mdx)

The `createAsyncStore` primitive manages asynchronous data fetching by tracking the result of a promise-returning function in a [store](/concepts/stores).

The main difference from [createAsync](/solid-router/reference/data-apis/create-async) is its use of reconciliation: when new data arrives, it intelligently merges with the existing store, updating only changed fields while preserving unchanged state.

***

## [Import](/solid-router/reference/data-apis/create-async-store#import)

```
import { createAsyncStore } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/data-apis/create-async-store#type)

```
function createAsyncStore<T>(  fn: (prev: T) => Promise<T>,  options: {    name?: string;    initialValue: T;    deferStream?: boolean;    reconcile?: ReconcileOptions;  }): AccessorWithLatest<T>;
function createAsyncStore<T>(  fn: (prev: T | undefined) => Promise<T>,  options?: {    name?: string;    initialValue?: T;    deferStream?: boolean;    reconcile?: ReconcileOptions;  }): AccessorWithLatest<T | undefined>;
```

***

## [Parameters](/solid-router/reference/data-apis/create-async-store#parameters)

### [`fetcher`](/solid-router/reference/data-apis/create-async-store#fetcher)

- **Type:** `(prev: T | undefined) => Promise<T>`
- **Required:** Yes

An asynchronous function or a function that returns a `Promise`. The resolved value of this `Promise` is what `createAsyncStore` tracks. This function is reactive and will automatically re-execute if any of its dependencies change.

### [`options`](/solid-router/reference/data-apis/create-async-store#options)

- **Type:** `{ name?: string; initialValue?: T; deferStream?: boolean; reconcile?: ReconcileOptions; }`
- **Required:** No

An object for configuring the primitive. It has the following properties.

#### [`name`](/solid-router/reference/data-apis/create-async-store#name)

- **Type:** `string`
- **Required:** No

A name for the resource, used for identification in debugging tools like [Solid Debugger](https://github.com/thetarnav/solid-devtools).

#### [`initialValue`](/solid-router/reference/data-apis/create-async-store#initialvalue)

- **Type:** `T`
- **Required:** No

The initial value of the returned store before the fetcher resolves.

#### [`deferStream`](/solid-router/reference/data-apis/create-async-store#deferstream)

- **Type:** `boolean`
- **Required:** No

If `true`, [streaming](/solid-router/data-fetching/streaming) will be deferred until the resource has resolved.

#### [`reconcile`](/solid-router/reference/data-apis/create-async-store#reconcile)

- **Type:** `ReconcileOptions`
- **Required:** No

[Options](/reference/store-utilities/reconcile#options) passed directly to the `reconcile` function. It controls how new data is merged with the existing store.

***

## [Return value](/solid-router/reference/data-apis/create-async-store#return-value)

`createAsyncStore` returns a derived signal that contains the resolved value of the fetcher as a store.

While the fetcher is executing for the first time, unless an `initialValue` is specified, the store's value is `undefined`.

***

## [Examples](/solid-router/reference/data-apis/create-async-store#examples)

### [Basic usage](/solid-router/reference/data-apis/create-async-store#basic-usage)

```
import { For, createSignal } from "solid-js";import { createAsyncStore, query } from "@solidjs/router";
const getNotificationsQuery = query(async (unreadOnly: boolean) => {  // ... Fetches the list of notifications from the server.}, "notifications");
function Notifications() {  const [unreadOnly, setUnreadOnly] = createSignal(false);  const notifications = createAsyncStore(() =>    getNotificationsQuery(unreadOnly())  );
  return (    <div>      <button onClick={() => setUnreadOnly(!unreadOnly())}>        Toggle unread      </button>      <ul>        <For each={notifications()}>          {(notification) => (            <li>              <div>{notification.message}</div>              <div>{notification.user.name}</div>            </li>          )}        </For>      </ul>    </div>  );}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/create-async-store.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/create-async-store)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [fetcher](#fetcher)
   2. [options](#options)
5. [Return value](#return-value)
6. [Examples](#examples)
   1. [Basic usage](#basic-usage)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/create-async-store.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/create-async-store.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/create-async-store)
