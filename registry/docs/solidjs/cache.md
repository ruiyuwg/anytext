Data APIs

# cache

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/cache.mdx)

Deprecation Warning

This API is deprecated since `v0.15.0` of Solid Router. Use [query](/solid-router/reference/data-apis/query) instead. It will be removed in an upcoming release.

`cache` is a [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) designed to create a new function with the same signature as the function passed to it. When this newly created function is called for the first time with a specific set of arguments, the original function is run, and its return value is stored in a cache and returned to the caller of the created function. The next time the created function is called with the same arguments (as long as the cache is still valid), it will return the cached value instead of re-executing the original function.

note

`cache` can be defined anywhere and then used inside your components with [`createAsync`](/solid-router/reference/data-apis/create-async).

However, using `cache` directly in [`createResource`](/reference/basic-reactivity/create-resource) will not work since the fetcher is not reactive and will not invalidate properly.

***

## [Usage](/solid-router/reference/data-apis/cache#usage)

```
const getUser = query(  (id, options = {}) =>    fetch(`/api/users/${id}?summary=${options.summary || false}`).then((r) =>      r.json()    ),  "usersById");
getUser(123); // Causes a GET request to /api/users/123?summary=falsegetUser(123); // Does not cause a GET requestgetUser(123, { summary: true }); // Causes a GET request to /api/users/123?summary=truesetTimeout(() => getUser(123, { summary: true }), 999000); // Eventually causes another GET request to /api/users/123?summary=true
```

### [With preload functions](/solid-router/reference/data-apis/cache#with-preload-functions)

Using it with a [preload function](/solid-router/reference/preload-functions/preload):

```
import { lazy } from "solid-js";import { Route } from "@solidjs/router";import { getUser } from ... // the cache function
const User = lazy(() => import("./pages/users/[id].js"));
// preload functionfunction preloadUser({params, location}) {  void getUser(params.id)}
// Pass it in the route definition<Route path="/users/:id" component={User} preload={preloadUser} />;
```

### [Inside a route's component](/solid-router/reference/data-apis/cache#inside-a-routes-component)

Using it inside a route's component:

```
// pages/users/[id].jsimport { getUser } from ... // the cache function
export default function User(props) {  const user = createAsync(() => getUser(props.params.id));  return <h1>{user().name}</h1>;}
```

***

## [Cache function capabilities](/solid-router/reference/data-apis/cache#cache-function-capabilities)

`cache` accomplishes the following:

1. Deduping on the server for the lifetime of the request.
2. Preloading the cache in the browser - this lasts 5 seconds. When a route is preloaded on hover or when preload is called when entering a route it will make sure to dedupe calls.
3. A reactive refetch mechanism based on key. This prevents routes that are not new from retriggering on action revalidation.
4. Serve as a back/forward cache for browser navigation for up to 5 minutes. Any user based navigation or link click bypasses it. Upon revalidation or new fetch the cache is updated.

***

## [Cache keys](/solid-router/reference/data-apis/cache#cache-keys)

To ensure that the cache keys are consistent and unique, arguments are deterministically serialized using JSON.stringify. Before serialization, key/value pairs in objects are sorted so that the order of properties does not affect the serialization. For instance, both `{ name: 'Ryan', awesome: true }` and `{ awesome: true, name: 'Ryan' }` will serialize to the same string so that they produce the same cache key.

***

## [Return value](/solid-router/reference/data-apis/cache#return-value)

The return value is a `CachedFunction`, a function that has the same signature as the function you passed to `cache`. This cached function stores the return value using the cache key. Under most circumstances, this temporarily prevents the passed function from running with the same arguments, even if the created function is called repeatedly.

***

## [Arguments](/solid-router/reference/data-apis/cache#arguments)

argument

type

description

`fn`

`(...args: any) => any`

A function whose return value you'd like to be cached.

`name`\*

string

Any arbitrary string that you'd like to use as the rest of the cache key.

\*Since the internal cache is shared by all the functions using `cache`, the string should be unique for each function passed to `cache`. If the same key is used with multiple functions, one function might return the cached result of the other.

***

## [Methods](/solid-router/reference/data-apis/cache#methods)

### [`.key` and `.keyFor`](/solid-router/reference/data-apis/cache#key-and-keyfor)

Cached functions provide `.key` and `.keyFor`, are useful when retrieving the keys used in cases involving invalidation:

```
let id = 5;getUser.key; // returns "users"getUser.keyFor(id); // returns "users[5]"
```

### [`revalidate`](/solid-router/reference/data-apis/cache#revalidate)

The cache can be revalidated using the `revalidate` method or the `revalidate` keys that are set on the response from the actions. If the entire key is passed, it will invalidate all entries for the cache (ie. `users` in the example above). If only a single entry needs to be invalidated, `keyFor` is provided. To revalidate everything in the cache, pass `undefined` as the key.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/cache.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/cache)

On this page

1. [Overview](#_top)
2. [Usage](#usage)
   1. [With preload functions](#with-preload-functions)
   2. [Inside a route's component](#inside-a-routes-component)
3. [Cache function capabilities](#cache-function-capabilities)
4. [Cache keys](#cache-keys)
5. [Return value](#return-value)
6. [Arguments](#arguments)
7. [Methods](#methods)
   1. [.key and .keyFor](#key-and-keyfor)
   2. [revalidate](#revalidate)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/data-apis/cache.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/data-apis/cache.mdx\&page=https://docs.solidjs.com/solid-router/reference/data-apis/cache)
