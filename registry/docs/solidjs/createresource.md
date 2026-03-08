Basic reactivity

# createResource

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/basic-reactivity/create-resource.mdx)

Creates a reactive resource that manages asynchronous data fetching and loading states, automatically tracking dependencies and providing a simple interface for reading, refreshing, and error handling. It integrates with Solid's reactivity system and Suspense boundaries.

***

## [Import](/reference/basic-reactivity/create-resource#import)

```
import { createResource } from "solid-js";
```

***

## [Type](/reference/basic-reactivity/create-resource#type)

```
// Without sourcefunction createResource<T, R = unknown>(  fetcher: ResourceFetcher<true, T, R>,  options?: ResourceOptions<T>): ResourceReturn<T, R>;
// With sourcefunction createResource<T, S, R = unknown>(  source: ResourceSource<S>,  fetcher: ResourceFetcher<S, T, R>,  options?: ResourceOptions<T, S>): ResourceReturn<T, R>;
```

### [Related types](/reference/basic-reactivity/create-resource#related-types)

```
type ResourceReturn<T, R = unknown> = [Resource<T>, ResourceActions<T, R>];
type Resource<T> = {  (): T | undefined;  state: "unresolved" | "pending" | "ready" | "refreshing" | "errored";  loading: boolean;  error: any;  latest: T | undefined;};
type ResourceActions<T, R = unknown> = {  mutate: (value: T | undefined) => T | undefined;  refetch: (info?: R) => Promise<T> | T | undefined;};
type ResourceSource<S> =  | S  | false  | null  | undefined  | (() => S | false | null | undefined);
type ResourceFetcher<S, T, R = unknown> = (  source: S,  info: { value: T | undefined; refetching: R | boolean }) => T | Promise<T>;
interface ResourceOptions<T, S = unknown> {  initialValue?: T;  name?: string;  deferStream?: boolean;  ssrLoadFrom?: "initial" | "server";  storage?: (    init: T | undefined  ) => [Accessor<T | undefined>, Setter<T | undefined>];  onHydrated?: (k: S | undefined, info: { value: T | undefined }) => void;}
```

***

## [Parameters](/reference/basic-reactivity/create-resource#parameters)

### [`source`](/reference/basic-reactivity/create-resource#source)

- **Type:** `ResourceSource<S>`
- **Default:** `undefined`

Reactive data source evaluated before the fetcher runs. When the value is `undefined`, `null`, or `false`, the fetcher is not called. Otherwise the current value is passed as the first fetcher argument. Each change triggers the fetcher again.

### [`fetcher`](/reference/basic-reactivity/create-resource#fetcher)

- **Type:** `ResourceFetcher<S, T, R>`

Function that receives the source value (or `true` if no source), the current resource info, and returns a value or Promise.

### [`options`](/reference/basic-reactivity/create-resource#options)

- **Type:** `ResourceOptions<T, S>`
- **Default:** `{}`

Configuration options for the resource.

#### [`initialValue`](/reference/basic-reactivity/create-resource#initialvalue)

- **Type:** `T`
- **Default:** `undefined`

Initial value for the resource. When provided, the resource starts in "ready" state and the type excludes `undefined`.

#### [`name`](/reference/basic-reactivity/create-resource#name)

- **Type:** `string`
- **Default:** `undefined`

A name for debugging purposes in development mode.

#### [`deferStream`](/reference/basic-reactivity/create-resource#deferstream)

- **Type:** `boolean`
- **Default:** `false`

Controls streaming behavior during server-side rendering.

#### [`ssrLoadFrom`](/reference/basic-reactivity/create-resource#ssrloadfrom)

- **Type:** `"initial" | "server"`
- **Default:** `"server"`

Determines how the resource loads during SSR hydration.

- "server": Uses the server-fetched value during hydration.
- "initial": Re-fetches on the client after hydration.

#### [`storage`](/reference/basic-reactivity/create-resource#storage)

- **Type:** `(init: T | undefined) => [Accessor<T | undefined>, Setter<T | undefined>]`
- **Default:** `createSignal`

Custom storage function for the resource value, useful for persistence or custom state management.

#### [`onHydrated`](/reference/basic-reactivity/create-resource#onhydrated)

- **Type:** `(k: S | undefined, info: { value: T | undefined }) => void`
- **Default:** `undefined`

Callback fired when the resource hydrates on the client side.

***

## [Return value](/reference/basic-reactivity/create-resource#return-value)

- **Type:** `[Resource<T>, ResourceActions<T, R>]`

Returns a tuple containing the resource accessor and resource actions.

### [`Resource`](/reference/basic-reactivity/create-resource#resource)

```
type Resource<T> = {  (): T | undefined;  state: "unresolved" | "pending" | "ready" | "refreshing" | "errored";  loading: boolean;  error: any;  latest: T | undefined;};
```

- `state`: Current state of the resource. See the table below for state descriptions.
- `loading`: Indicates if the resource is currently loading.
- `error`: Error information if the resource failed to load.
- `latest`: The latest value of the resource.

State

Description

Loading

Error

Latest

`unresolved`

Initial state, not yet fetched

`false`

`undefined`

`undefined`

`pending`

Fetching in progress

`true`

`undefined`

`undefined`

`ready`

Successfully fetched

`false`

`undefined`

`T`

`refreshing`

Refetching while keeping previous value

`true`

`undefined`

`T`

`errored`

Fetching failed

`false`

`any`

`undefined`

### [`ResourceActions`](/reference/basic-reactivity/create-resource#resourceactions)

```
type ResourceActions<T, R = unknown> = {  mutate: (value: T | undefined) => T | undefined;  refetch: (info?: R) => Promise<T> | T | undefined;};
```

- `mutate`: Function to manually overwrite the resource value without calling the fetcher. Allows you to optimistically update the resource value locally, without making a network request.
- `refetch`: Function to re-run the fetcher without changing the source. If a parameter is provided to `refetch`, it will be passed to the fetcher's `refetching` property.

***

## [Examples](/reference/basic-reactivity/create-resource#examples)

### [Basic usage](/reference/basic-reactivity/create-resource#basic-usage)

```
const [data] = createResource(async () => {  const response = await fetch("/api/data");  return response.json();});
// Access dataconsole.log(data()); // undefined initially, then fetched dataconsole.log(data.loading); // true during fetchconsole.log(data.state); // "pending" → "ready"
```

### [With source](/reference/basic-reactivity/create-resource#with-source)

```
const [userId, setUserId] = createSignal(1);
const [user] = createResource(userId, async (id) => {  const response = await fetch(`/api/users/${id}`);  return response.json();});
// Automatically refetches when userId changessetUserId(2);
```

### [With actions](/reference/basic-reactivity/create-resource#with-actions)

```
const [posts, { refetch, mutate }] = createResource(fetchPosts);
// Manual refetchawait refetch();
// Optimistic updatemutate((posts) => [...posts, newPost]);
```

### [Error handling](/reference/basic-reactivity/create-resource#error-handling)

```
const [data] = createResource(async () => {  const response = await fetch('/api/data');  if (!response.ok) throw new Error('Failed to fetch');  return response.json();});
// In JSX<ErrorBoundary fallback={<div>Error loading data</div>}>  <div>{data()?.title}</div></ErrorBoundary>
```

### [With initial value](/reference/basic-reactivity/create-resource#with-initial-value)

```
const [user] = createResource(() => fetchUser(), {  initialValue: { name: "Loading...", id: 0 },});
// user() is never undefinedconsole.log(user().name); // "Loading..." initially
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/basic-reactivity/create-resource.mdx\&page=https://docs.solidjs.com/reference/basic-reactivity/create-resource)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
   1. [Related types](#related-types)
4. [Parameters](#parameters)
   1. [source](#source)
   2. [fetcher](#fetcher)
   3. [options](#options)
5. [Return value](#return-value)
   1. [Resource](#resource)
   2. [ResourceActions](#resourceactions)
6. [Examples](#examples)
   1. [Basic usage](#basic-usage)
   2. [With source](#with-source)
   3. [With actions](#with-actions)
   4. [Error handling](#error-handling)
   5. [With initial value](#with-initial-value)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/basic-reactivity/create-resource.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/basic-reactivity/create-resource.mdx\&page=https://docs.solidjs.com/reference/basic-reactivity/create-resource)
