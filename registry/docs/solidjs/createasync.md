Data APIs

# createAsync

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/create-async.mdx)

The `createAsync` primitive manages asynchronous data fetching by tracking the result of a promise-returning function.

note

`createAsync` is currently a thin wrapper over `createResource`. While `createResource` offers similar functionality, **`createAsync` is the recommended primitive for most asynchronous data fetching**. It is intended to be the standard async primitive in a future Solid 2.0 release.

***

## [Import](/solid-router/reference/data-apis/create-async#import)

```
import { createAsync } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/data-apis/create-async#type)

```
function createAsync<T>(  fn: (prev: T) => Promise<T>,  options: {    name?: string;    initialValue: T;    deferStream?: boolean;  }): AccessorWithLatest<T>;
function createAsync<T>(  fn: (prev: T | undefined) => Promise<T>,  options?: {    name?: string;    initialValue?: T;    deferStream?: boolean;  }): AccessorWithLatest<T | undefined>;
```

***

## [Parameters](/solid-router/reference/data-apis/create-async#parameters)

### [`fetcher`](/solid-router/reference/data-apis/create-async#fetcher)

- **Type:** `(prev: T | undefined) => Promise<T>`
- **Required:** Yes

An asynchronous function or a function that returns a `Promise`. The resolved value of this `Promise` is what `createAsync` tracks. This function is reactive and will automatically re-execute if any of its dependencies change.

### [`options`](/solid-router/reference/data-apis/create-async#options)

- **Type:** `{ name?: string; initialValue?: T; deferStream?: boolean; }`
- **Required:** No

An object for configuring the primitive. It has the following properties:

#### [`name`](/solid-router/reference/data-apis/create-async#name)

- **Type:** `string`
- **Required:** No

A name for the resource, used for identification in debugging tools like [Solid Debugger](https://github.com/thetarnav/solid-devtools).

#### [`initialValue`](/solid-router/reference/data-apis/create-async#initialvalue)

- **Type:** `T`
- **Required:** No

The initial value of the returned signal before the fetcher finishes executing.

#### [`deferStream`](/solid-router/reference/data-apis/create-async#deferstream)

- **Type:** `boolean`
- **Required:** No

If `true`, [streaming](/solid-router/data-fetching/streaming) will be deferred until the fetcher finishes executing.

***

## [Return value](/solid-router/reference/data-apis/create-async#return-value)

`createAsync` returns a derived signal that contains the resolved value of the fetcher.

While the fetcher is executing for the first time, unless an `initialValue` is specified, the signal's value is `undefined`.

***

## [Examples](/solid-router/reference/data-apis/create-async#examples)

### [Basic usage](/solid-router/reference/data-apis/create-async#basic-usage)

```
import { createAsync, query } from "@solidjs/router";
const getCurrentUser = query(async () => {  // ... Fetches the current authenticated user from the server.}, "currentUser");
function UserProfile() {  const user = createAsync(() => getCurrentUser());
  return <div>{user()?.name}</div>;}
```

### [With parameter](/solid-router/reference/data-apis/create-async#with-parameter)

```
import { createAsync, query } from "@solidjs/router";
const getInvoiceQuery = query(async (invoiceId: string) => {  // ... Fetches the invoice details from the server.}, "invoice");
function InvoiceDetails(props: { invoiceId: string }) {  const invoice = createAsync(() => getInvoiceQuery(props.invoiceId));
  return (    <div>      <h2>Invoice #{invoice()?.number}</h2>      <p>Total: ${invoice()?.total}</p>    </div>  );}
```

### [With error handling and pending state](/solid-router/reference/data-apis/create-async#with-error-handling-and-pending-state)

```
import { createAsync, query } from "@solidjs/router";import { Suspense, ErrorBoundary, For } from "solid-js";
const getAllRecipesQuery = query(async () => {  // ... Fetches the recipes from the server and throws an error if an issue occurred.}, "recipes");
function Recipes() {  const recipes = createAsync(() => getAllRecipesQuery());
  return (    <ErrorBoundary fallback={<p>Couldn't fetch any recipes!</p>}>      <Suspense fallback={<p>Fetching recipes...</p>}>        <For each={recipes()}>          {(recipe) => (            <div>              <h3>{recipe.name}</h3>              <p>Cook time: {recipe.time}</p>            </div>          )}        </For>      </Suspense>    </ErrorBoundary>  );}
```

***

## [Related](/solid-router/reference/data-apis/create-async#related)

- [`query`](/solid-router/reference/data-apis/query)
- [`<Suspense>`](/reference/components/suspense)
- [`<ErrorBoundary>`](/reference/components/error-boundary)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/create-async.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/create-async)

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
   2. [With parameter](#with-parameter)
   3. [With error handling and pending state](#with-error-handling-and-pending-state)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/create-async.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/create-async.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/create-async)
