# unstable\_cache

> **Note:**
> This API has been replaced by [`use cache`](/docs/app/api-reference/directives/use-cache) in Next.js 16.
> We recommend opting into [Cache Components](/docs/app/getting-started/cache-components) and replacing `unstable_cache` with the `use cache` directive.

`unstable_cache` allows you to cache the results of expensive operations, like database queries, and reuse them across multiple requests.

```jsx
import { getUser } from './data';
import { unstable_cache } from 'next/cache';

const getCachedUser = unstable_cache(
  async (id) => getUser(id),
  ['my-app-user']
);

export default async function Component({ userID }) {
  const user = await getCachedUser(userID);
  ...
}
```

> **Good to know**:
>
> - Accessing dynamic data sources such as `headers` or `cookies` inside a cache scope is not supported. If you need this data inside a cached function use `headers` outside of the cached function and pass the required dynamic data in as an argument.
> - This API uses Next.js' built-in [Data Cache](/docs/app/guides/caching#data-cache) to persist the result across requests and deployments.

## Parameters

```jsx
const data = unstable_cache(fetchData, keyParts, options)()
```

- `fetchData`: This is an asynchronous function that fetches the data you want to cache. It must be a function that returns a `Promise`.
- `keyParts`: This is an extra array of keys that further adds identification to the cache. By default, `unstable_cache` already uses the arguments and the stringified version of your function as the cache key. It is optional in most cases; the only time you need to use it is when you use external variables without passing them as parameters. However, it is important to add closures used within the function if you do not pass them as parameters.
- `options`: This is an object that controls how the cache behaves. It can contain the following properties:
  - `tags`: An array of tags that can be used to control cache invalidation. Next.js will not use this to uniquely identify the function.
  - `revalidate`: The number of seconds after which the cache should be revalidated. Omit or pass `false` to cache indefinitely or until matching `revalidateTag()` or `revalidatePath()` methods are called.

## Returns

`unstable_cache` returns a function that when invoked, returns a Promise that resolves to the cached data. If the data is not in the cache, the provided function will be invoked, and its result will be cached and returned.

## Example

```tsx filename="app/page.tsx" switcher
import { unstable_cache } from 'next/cache'

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>
}) {
  const { userId } = await params
  const getCachedUser = unstable_cache(
    async () => {
      return { id: userId }
    },
    [userId], // add the user ID to the cache key
    {
      tags: ['users'],
      revalidate: 60,
    }
  )

  //...
}
```

```jsx filename="app/page.jsx" switcher
import { unstable_cache } from 'next/cache';

export default async function Page({ params } }) {
  const { userId } = await params
  const getCachedUser = unstable_cache(
    async () => {
      return { id: userId };
    },
    [userId], // add the user ID to the cache key
    {
      tags: ["users"],
      revalidate: 60,
    }
  );

  //...
}
```

## Version History

| Version   | Changes                      |
| --------- | ---------------------------- |
| `v14.0.0` | `unstable_cache` introduced. |

# unstable\_noStore

# unstable\_noStore

> This is a legacy API and no longer recommended. It is still supported for backward compatibility.

**In version 15, we recommend using [`connection`](/docs/app/api-reference/functions/connection) instead of `unstable_noStore`.**

`unstable_noStore` can be used to declaratively opt out of static rendering and indicate a particular component should not be cached.

```jsx
import { unstable_noStore as noStore } from 'next/cache';

export default async function ServerComponent() {
  noStore();
  const result = await db.query(...);
  ...
}
```

> **Good to know**:
>
> - `unstable_noStore` is equivalent to `cache: 'no-store'` on a `fetch`
> - `unstable_noStore` is preferred over `export const dynamic = 'force-dynamic'` as it is more granular and can be used on a per-component basis

- Using `unstable_noStore` inside [`unstable_cache`](/docs/app/api-reference/functions/unstable_cache) will not opt out of static generation. Instead, it will defer to the cache configuration to determine whether to cache the result or not.

## Usage

If you prefer not to pass additional options to `fetch`, like `cache: 'no-store'`, `next: { revalidate: 0 }` or in cases where `fetch` is not available, you can use `noStore()` as a replacement for all of these use cases.

```jsx
import { unstable_noStore as noStore } from 'next/cache';

export default async function ServerComponent() {
  noStore();
  const result = await db.query(...);
  ...
}
```

## Version History

| Version   | Changes                                         |
| --------- | ----------------------------------------------- |
| `v15.0.0` | `unstable_noStore` deprecated for `connection`. |
| `v14.0.0` | `unstable_noStore` introduced.                  |

# unstable\_rethrow
