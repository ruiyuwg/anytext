# Batch API

**LibSQL Batch API explanation**:
*[source](https://docs.turso.tech/sdk/ts/reference#batch-transactions)*

> With the libSQL client library, a batch is one or more SQL statements executed in order in an implicit transaction.
> The transaction is controlled by the libSQL backend. If all of the statements are successful,
> the transaction is committed. If any of the statements fail, the entire transaction is rolled back and no changes are made.

**D1 Batch API explanation**:
*[source](https://developers.cloudflare.com/d1/worker-api/d1-database/#batch)*

> Batching sends multiple SQL statements inside a single call to the database.
> This can have a huge performance impact as it reduces latency from network round trips to D1.
> D1 operates in auto-commit. Our implementation guarantees that each statement in the list will execute and commit,
> sequentially, non-concurrently.
> Batched statements are SQL transactions. If a statement in the sequence fails,
> then an error is returned for that specific statement, and it aborts or rolls back the entire sequence.

Drizzle ORM provides APIs to run SQL statements in batch for `LibSQL`, `Neon` and `D1`:

```ts
const batchResponse: BatchResponse = await db.batch([
	db.insert(usersTable).values({ id: 1, name: 'John' }).returning({ id: usersTable.id }),
	db.update(usersTable).set({ name: 'Dan' }).where(eq(usersTable.id, 1)),
	db.query.usersTable.findMany({}),
	db.select().from(usersTable).where(eq(usersTable.id, 1)),
	db.select({ id: usersTable.id, invitedBy: usersTable.invitedBy }).from(usersTable),
]);
```

Type for `batchResponse` in this example would be:

```ts
type BatchResponse = [
	{
		id: number;
	}[],
	ResultSet,
	{
		id: number;
		name: string;
		verified: number;
		invitedBy: number | null;
	}[],
	{
		id: number;
		name: string;
		verified: number;
		invitedBy: number | null;
	}[],
	{
		id: number;
		invitedBy: number | null;
	}[],
]
```

```ts
type BatchResponse = [
	{
		id: number;
	}[],
	NeonHttpQueryResult,
	{
		id: number;
		name: string;
		verified: number;
		invitedBy: number | null;
	}[],
	{
		id: number;
		name: string;
		verified: number;
		invitedBy: number | null;
	}[],
	{
		id: number;
		invitedBy: number | null;
	}[],
]
```

```ts
type BatchResponse = [
  {
    id: number;
  }[],
  D1Result,
  {
    id: number;
    name: string;
    verified: number;
    invitedBy: number | null;
  }[],
  {
    id: number;
    name: string;
    verified: number;
    invitedBy: number | null;
  }[],
  {
    id: number;
    invitedBy: number | null;
  }[],
]
```

All possible builders that can be used inside `db.batch`:

```ts
db.all(),
db.get(),
db.values(),
db.run(),
db.execute(),
db.query.<table>.findMany(),
db.query.<table>.findFirst(),
db.select()...,
db.update()...,
db.delete()...,
db.insert()...,
```

Source: https://orm.drizzle.team/docs/cache

import Callout from '@mdx/Callout.astro';
import Npm from '@mdx/Npm.astro';

# Cache

Drizzle sends every query straight to your database by default. There are no hidden actions, no automatic caching
or invalidation - you'll always see exactly what runs. If you want caching, you must opt in.

By default, Drizzle uses a `explicit` caching strategy (i.e. `global: false`), so nothing is ever cached unless you ask.
This prevents surprises or hidden performance traps in your application.
Alternatively, you can flip on `all` caching (`global: true`) so that every select will look in cache first.

## Quickstart

### Upstash integration

Drizzle provides an `upstashCache()` helper out of the box. By default, this uses Upstash Redis with automatic configuration if environment variables are set.

```ts
import { upstashCache } from "drizzle-orm/cache/upstash";
import { drizzle } from "drizzle-orm/...";

const db = drizzle(process.env.DB_URL!, {
  cache: upstashCache(),
});
```

You can also explicitly define your Upstash credentials, enable global caching for all queries by default or pass custom caching options:

```ts
import { upstashCache } from "drizzle-orm/cache/upstash";
import { drizzle } from "drizzle-orm/...";

const db = drizzle(process.env.DB_URL!, {
  cache: upstashCache({
    // 👇 Redis credentials (optional — can also be pulled from env vars)
    url: '<UPSTASH_URL>',
    token: '<UPSTASH_TOKEN>',

    // 👇 Enable caching for all queries by default (optional)
    global: true,

    // 👇 Default cache behavior (optional)
    config: { ex: 60 }
  })
});
```

## Cache config reference

Drizzle supports the following cache config options for Upstash:

```ts
export type CacheConfig = {
  /**
   * Expiration in seconds (positive integer)
   */
  ex?: number;
  /**
   * Set an expiration (TTL or time to live) on one or more fields of a given hash key.
   * Used for HEXPIRE command
   */
  hexOptions?: "NX" | "nx" | "XX" | "xx" | "GT" | "gt" | "LT" | "lt";
};
```
