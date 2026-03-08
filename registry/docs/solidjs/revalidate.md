Data APIs

# revalidate

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/revalidate.mdx)

The `revalidate` function triggers revalidation of [queries](/solid-router/data-fetching/queries) by their keys. Each query with active subscribers re-executes and updates its dependents; queries without subscribers are marked stale but don't execute until subscribed.

***

## [Import](/solid-router/reference/data-apis/revalidate#import)

```
import { revalidate } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/data-apis/revalidate#type)

```
function revalidate(  key?: string | string[] | void,  force?: boolean): Promise<void>;
```

***

## [Parameters](/solid-router/reference/data-apis/revalidate#parameters)

### [`key`](/solid-router/reference/data-apis/revalidate#key)

- **Type:** `string | string[] | void`
- **Required:** No

The query key or array of query keys to revalidate. If not provided, all queries on the current page are revalidated.

### [`force`](/solid-router/reference/data-apis/revalidate#force)

- **Type:** `boolean`
- **Required:** No
- **Default:** `true`

When `true`, clears the internal cache used for deduplication. When `false`, allows cached data to be reused if available.

***

## [Return value](/solid-router/reference/data-apis/revalidate#return-value)

`revalidate` returns a `Promise` that resolves when the revalidation transition completes.

***

## [Examples](/solid-router/reference/data-apis/revalidate#examples)

### [Basic usage](/solid-router/reference/data-apis/revalidate#basic-usage)

```
import { query, createAsync, revalidate } from "@solidjs/router";
const getUserQuery = query(async () => {  // ... Fetches user data.  return { name: "John" };}, "user");
function UserProfile() {  const user = createAsync(() => getUserQuery());
  function refreshUser() {    revalidate(getUserQuery.key);  }
  return (    <div>      <button onClick={refreshUser}>Refresh</button>      <p>{user()?.name}</p>    </div>  );}
```

### [Revalidating multiple queries](/solid-router/reference/data-apis/revalidate#revalidating-multiple-queries)

```
import { query, revalidate } from "@solidjs/router";
const getUsersQuery = query(async () => {  // ... Fetches users.}, "users");
const getPostsQuery = query(async () => {  // ... Fetches posts.}, "posts");
function refreshAll() {  revalidate([getUsersQuery.key, getPostsQuery.key]);}
```

***

## [Related](/solid-router/reference/data-apis/revalidate#related)

- [`query`](/solid-router/reference/data-apis/query)
- [`createAsync`](/solid-router/reference/data-apis/create-async)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/revalidate.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/revalidate)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [key](#key)
   2. [force](#force)
5. [Return value](#return-value)
6. [Examples](#examples)
   1. [Basic usage](#basic-usage)
   2. [Revalidating multiple queries](#revalidating-multiple-queries)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/revalidate.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/revalidate.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/revalidate)
