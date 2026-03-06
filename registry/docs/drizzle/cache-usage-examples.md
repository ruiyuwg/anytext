## Cache usage examples

Once you've configured caching, here's how the cache behaves:

**Case 1: Drizzle with `global: false` (default, opt-in caching)**

```ts
import { upstashCache } from "drizzle-orm/cache/upstash";
import { drizzle } from "drizzle-orm/...";

const db = drizzle(process.env.DB_URL!, {
  // 👇 `global: true` is not passed, false by default
  cache: upstashCache({ url: "", token: "" }),
});
```

In this case, the following query won't read from cache

```ts
const res = await db.select().from(users);

// Any mutate operation will still trigger the cache's onMutate handler
// and attempt to invalidate any cached queries that involved the affected tables
await db.insert(users).value({ email: "cacheman@upstash.com" });
```

To make this query read from the cache, call `.$withCache()`

```ts
const res = await db.select().from(users).$withCache();
```

`.$withCache` has a set of options you can use to manage and configure this specific query strategy

```ts
// rewrite the config for this specific query
.$withCache({ config: {} })

// give this query a custom cache key (instead of hashing query+params under the hood)
.$withCache({ tag: 'custom_key' })

// turn off auto-invalidation for this query
// note: this leads to eventual consistency (explained below)
.$withCache({ autoInvalidate: false })
```

**Eventual consistency example**

This example is only relevant if you manually set `autoInvalidate: false`. By default, `autoInvalidate` is enabled.

You might want to turn off `autoInvalidate` if:

- your data doesn't change often, and slight staleness is acceptable (e.g. product listings, blog posts)
- you handle cache invalidation manually

In those cases, turning it off can reduce unnecessary cache invalidation. However, in most cases, we recommend keeping the default enabled.

Example: Imagine you cache the following query on `usersTable` with a 3-second TTL:

```ts
const recent = await db
  .select()
  .from(usersTable)
  .$withCache({ config: { ex: 3 }, autoInvalidate: false });
```

If someone runs `db.insert(usersTable)...` the cache won't be invalidated immediately. For up to 3 seconds, you'll keep seeing the old data until it eventually becomes consistent.

**Case 2: Drizzle with `global: true` option**

```ts
import { upstashCache } from "drizzle-orm/cache/upstash";
import { drizzle } from "drizzle-orm/...";

const db = drizzle(process.env.DB_URL!, {
  cache: upstashCache({ url: "", token: "", global: true }),
});
```

In this case, the following query will read from cache

```ts
const res = await db.select().from(users);
```

If you want to disable cache for this specific query, call `.$withCache(false)`

```ts
// disable cache for this query
const res = await db.select().from(users).$withCache(false);
```

You can also use cache instance from a `db` to invalidate specific tables or tags

```ts
// Invalidate all queries that use the `users` table. You can do this with the Drizzle instance.
await db.$cache.invalidate({ tables: users });
// or
await db.$cache.invalidate({ tables: [users, posts] });

// Invalidate all queries that use the `usersTable`. You can do this by using just the table name.
await db.$cache.invalidate({ tables: "usersTable" });
// or
await db.$cache.invalidate({ tables: ["usersTable", "postsTable"] });

// You can also invalidate custom tags defined in any previously executed select queries.
await db.$cache.invalidate({ tags: "custom_key" });
// or
await db.$cache.invalidate({ tags: ["custom_key", "custom_key1"] });
```
