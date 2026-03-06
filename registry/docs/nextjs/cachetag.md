# cacheTag

The `cacheTag` function allows you to tag cached data for on-demand invalidation. By associating tags with cache entries, you can selectively purge or revalidate specific cache entries without affecting other cached data.

## Usage

To use `cacheTag`, enable the [`cacheComponents` flag](/docs/app/api-reference/config/next-config-js/cacheComponents) in your `next.config.js` file:

```ts filename="next.config.ts" switcher
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
};

export default nextConfig;
```

```js filename="next.config.js" switcher
const nextConfig = {
  cacheComponents: true,
};

export default nextConfig;
```

The `cacheTag` function takes one or more string values.

```tsx filename="app/data.ts" switcher
import { cacheTag } from "next/cache";

export async function getData() {
  "use cache";
  cacheTag("my-data");
  const data = await fetch("/api/data");
  return data;
}
```

```jsx filename="app/data.js" switcher
import { cacheTag } from "next/cache";

export async function getData() {
  "use cache";
  cacheTag("my-data");
  const data = await fetch("/api/data");
  return data;
}
```

You can then purge the cache on-demand using [`revalidateTag`](/docs/app/api-reference/functions/revalidateTag) API in another function, for example, a [route handler](/docs/app/api-reference/file-conventions/route) or [Server Action](/docs/app/getting-started/updating-data):

```tsx filename="app/action.ts" switcher
"use server";

import { revalidateTag } from "next/cache";

export default async function submit() {
  await addPost();
  revalidateTag("my-data");
}
```

```jsx filename="app/action.js" switcher
"use server";

import { revalidateTag } from "next/cache";

export default async function submit() {
  await addPost();
  revalidateTag("my-data");
}
```

## Good to know

- **Idempotent Tags**: Applying the same tag multiple times has no additional effect.
- **Multiple Tags**: You can assign multiple tags to a single cache entry by passing multiple string values to `cacheTag`.

```tsx
cacheTag("tag-one", "tag-two");
```

- **Limits**: The max length for a custom tag is 256 characters and the max tag items is 128.

## Examples

### Tagging components or functions

Tag your cached data by calling `cacheTag` within a cached function or component:

```tsx filename="app/components/bookings.tsx" switcher
import { cacheTag } from "next/cache";

interface BookingsProps {
  type: string;
}

export async function Bookings({ type = "haircut" }: BookingsProps) {
  "use cache";
  cacheTag("bookings-data");

  async function getBookingsData() {
    const data = await fetch(`/api/bookings?type=${encodeURIComponent(type)}`);
    return data;
  }

  return; //...
}
```

```jsx filename="app/components/bookings.js" switcher
import { cacheTag } from "next/cache";

export async function Bookings({ type = "haircut" }) {
  "use cache";
  cacheTag("bookings-data");

  async function getBookingsData() {
    const data = await fetch(`/api/bookings?type=${encodeURIComponent(type)}`);
    return data;
  }

  return; //...
}
```

### Creating tags from external data

You can use the data returned from an async function to tag the cache entry.

```tsx filename="app/components/bookings.tsx" switcher
import { cacheTag } from "next/cache";

interface BookingsProps {
  type: string;
}

export async function Bookings({ type = "haircut" }: BookingsProps) {
  async function getBookingsData() {
    "use cache";
    const data = await fetch(`/api/bookings?type=${encodeURIComponent(type)}`);
    cacheTag("bookings-data", data.id);
    return data;
  }
  return; //...
}
```

```jsx filename="app/components/bookings.js" switcher
import { cacheTag } from "next/cache";

export async function Bookings({ type = "haircut" }) {
  async function getBookingsData() {
    "use cache";
    const data = await fetch(`/api/bookings?type=${encodeURIComponent(type)}`);
    cacheTag("bookings-data", data.id);
    return data;
  }
  return; //...
}
```

### Invalidating tagged cache

Using [`revalidateTag`](/docs/app/api-reference/functions/revalidateTag), you can invalidate the cache for a specific tag when needed:

```tsx filename="app/actions.ts" switcher
"use server";

import { revalidateTag } from "next/cache";

export async function updateBookings() {
  await updateBookingData();
  revalidateTag("bookings-data");
}
```

```jsx filename="app/actions.js" switcher
"use server";

import { revalidateTag } from "next/cache";

export async function updateBookings() {
  await updateBookingData();
  revalidateTag("bookings-data");
}
```

## Related

View related API references.

- [cacheComponents](/docs/app/api-reference/config/next-config-js/cacheComponents)
  - Learn how to enable the cacheComponents flag in Next.js.
- [use cache](/docs/app/api-reference/directives/use-cache)
  - Learn how to use the "use cache" directive to cache data in your Next.js application.
- [revalidateTag](/docs/app/api-reference/functions/revalidateTag)
  - API Reference for the revalidateTag function.
- [cacheLife](/docs/app/api-reference/functions/cacheLife)
  - Learn how to use the cacheLife function to set the cache expiration time for a cached function or component.

# connection

# connection

The `connection()` function allows you to indicate rendering should wait for an incoming user request before continuing.

It's useful when a component doesn't use [Dynamic APIs](/docs/app/guides/caching#dynamic-rendering), but you want it to be dynamically rendered at runtime and not statically rendered at build time. This usually occurs when you access external information that you intentionally want to change the result of a render, such as `Math.random()` or `new Date()`.

```ts filename="app/page.tsx" switcher
import { connection } from 'next/server'

export default async function Page() {
  await connection()
  // Everything below will be excluded from prerendering
  const rand = Math.random()
  return <span>{rand}</span>
}
```

```jsx filename="app/page.js" switcher
import { connection } from "next/server";

export default async function Page() {
  await connection();
  // Everything below will be excluded from prerendering
  const rand = Math.random();
  return <span>{rand}</span>;
}
```

## Reference

### Type

```jsx
function connection(): Promise<void>
```

### Parameters

- The function does not accept any parameters.

### Returns

- The function returns a `void` Promise. It is not meant to be consumed.

## Good to know

- `connection` replaces [`unstable_noStore`](/docs/app/api-reference/functions/unstable_noStore) to better align with the future of Next.js.
- The function is only necessary when dynamic rendering is required and common Dynamic APIs are not used.

### Version History

| Version      | Changes                  |
| ------------ | ------------------------ |
| `v15.0.0`    | `connection` stabilized. |
| `v15.0.0-RC` | `connection` introduced. |

# cookies
