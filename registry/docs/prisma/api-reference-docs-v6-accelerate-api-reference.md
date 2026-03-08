# API Reference (/docs/v6/accelerate/api-reference)

The Accelerate API reference documentation is based on the following schema:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String?
  email String  @unique
}
```

All example are based on the `User` model.

cacheStrategy \[#cachestrategy]

With the Accelerate extension for Prisma Client, you can use the `cacheStrategy` parameter for model queries and use the [`ttl`](/v6/postgres/database/caching#time-to-live-ttl) and [`swr`](/v6/postgres/database/caching#stale-while-revalidate-swr) parameters to define a cache strategy for Accelerate. The Accelerate extension requires that you install Prisma Client version `4.10.0`.

Options \[#options]

The `cacheStrategy` parameter takes an option with the following keys:

| Option | Example    | Type       | Required | Description                                                                                                                                                                                                                                                                                                                            |
| ------ | ---------- | ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `swr`  | `60`       | `Int`      | No       | The stale-while-revalidate time in seconds.                                                                                                                                                                                                                                                                                            |
| `ttl`  | `60`       | `Int`      | No       | The time-to-live time in seconds.                                                                                                                                                                                                                                                                                                      |
| `tags` | `["user"]` | `String[]` | No       | The `tag` serves as a variable to control the invalidation of specific queries within your application. It is an optional array of strings to [invalidate](/v6/accelerate/api-reference#accelerateinvalidate) the cache, with each tag containing only alphanumeric characters and underscores, and a maximum length of 64 characters. |

|

Examples \[#examples]

Add a caching strategy to the query, defining a 60-second stale-while-revalidate (SWR) value, a 60-second time-to-live (TTL) value, and a cache tag of `"emails_with_alice"`:

```ts highlight=7:11;normal
await prisma.user.findMany({
  where: {
    email: {
      contains: "alice@prisma.io",
    },
  },
  cacheStrategy: {
    // [!code highlight]
    swr: 60, // [!code highlight]
    ttl: 60, // [!code highlight]
    tags: ["emails_with_alice"], // [!code highlight]
  }, // [!code highlight]
});
```

Supported Prisma Client operations \[#supported-prisma-client-operations]

The following is a list of all read query operations that support `cacheStrategy`:

- [`findUnique()`](/v6/orm/reference/prisma-client-reference#findunique)
- [`findUniqueOrThrow()`](/v6/orm/reference/prisma-client-reference#finduniqueorthrow)
- [`findFirst()`](/v6/orm/reference/prisma-client-reference#findfirst)
- [`findFirstOrThrow()`](/v6/orm/reference/prisma-client-reference#findfirstorthrow)
- [`findMany()`](/v6/orm/reference/prisma-client-reference#findmany)
- [`count()`](/v6/orm/reference/prisma-client-reference#count)
- [`aggregate()`](/v6/orm/reference/prisma-client-reference#aggregate)
- [`groupBy()`](/v6/orm/reference/prisma-client-reference#groupby)

The `cacheStrategy` parameter is not supported on any write operations, such as `create()`.

withAccelerateInfo \[#withaccelerateinfo]

Any query that supports the `cacheStrategy` can append `withAccelerateInfo()` to wrap the response data and include additional information about the Accelerate response.

To retrieve the status of the response, use:

```ts
const { data, info } = await prisma.user
  .count({
    cacheStrategy: { ttl: 60, swr: 600 },
    where: { myField: "value" },
  })
  .withAccelerateInfo();

console.dir(info);
```

Notice the `info` property of the response object. This is where the request information is stored.

Return type \[#return-type]

The `info` object is of type `AccelerateInfo` and follows the interface below:

```ts
interface AccelerateInfo {
  cacheStatus: "ttl" | "swr" | "miss" | "none";
  lastModified: Date;
  region: string;
  requestId: string;
  signature: string;
}
```

| Property       | Type                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cacheStatus`  | `"ttl" \| "swr" \| "miss" \| "none" ` | The cache status of the response.`ttl` indicates a cache hit within the `ttl` duration and no database query was executed`swr` indicates a cache hit within the `swr` duration and the data is being refreshed by Accelerate in the background `miss` indicates that both `ttl` and `swr` have expired and the database query was executed by the request  `none` indicates that no cache strategy was specified and the database query was executed by the request |
| `lastModified` | `Date`                                | The date the response was last refreshed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `region`       | `String`                              | The data center region that received the request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `requestId`    | `String`                              | Unique identifier of the request. Useful for troubleshooting.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `signature`    | `String`                              | The unique signature of the Prisma operation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

$accelerate.invalidate \[#accelerateinvalidate]

You can invalidate the cache using the [`$accelerate.invalidate` API](/v6/accelerate).

```
To invalidate cached query results on-demand, a paid plan is required. Each plan has specific limits on the number of cache tag-based invalidations allowed per day, though there are no limits on calling the `$accelerate.invalidate` API itself. See our [pricing for more details](https://www.prisma.io/pricing#accelerate).
```

Example \[#example]

To invalidate the query below:

```ts
await prisma.user.findMany({
  where: {
    email: {
      contains: "alice@prisma.io",
    },
  },
  cacheStrategy: {
    swr: 60,
    ttl: 60,
    tags: ["emails_with_alice"], // [!code highlight]
  },
});
```

You need to provide the cache tag in the `$accelerate.invalidate` API:

```ts
try {
  await prisma.$accelerate.invalidate({
    // [!code highlight]
    tags: ["emails_with_alice"], // [!code highlight]
  }); // [!code highlight]
} catch (e) {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    // The .code property can be accessed in a type-safe manner
    if (e.code === "P6003") {
      console.log("The cache invalidation rate limit has been reached. Please try again later.");
    }
  }
  throw e;
}
```

```
You can invalidate up to 5 tags per call.
```

$accelerate.invalidateAll \[#accelerateinvalidateall]

You can invalidate the entire cache using the `$accelerate.invalidateAll` API.

Example \[#example-1]

To invalidate the query below:

```ts
await prisma.user.findMany({
  where: {
    email: {
      contains: "alice@prisma.io",
    },
  },
  cacheStrategy: {
    swr: 60,
    ttl: 60,
    tags: ["emails_with_alice"], // [!code highlight]
  },
});
```

Just call the `$accelerate.invalidateAll` API:

```ts
try {
  await prisma.$accelerate.invalidateAll(); // [!code highlight]
} catch (e) {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    if (e.code === "P6003") {
      console.log("The cache invalidation rate limit has been reached. Please try again later.");
    }
  }
  throw e;
}
```

Why use $accelerate.invalidateAll? \[#why-use-accelerateinvalidateall]

This method offers better editor support (e.g. IntelliSense) than alternatives like `invalidate("all")`.

```
This clears cache for the entire environment—use with care.
```

Providing a Custom Fetch Implementation \[#providing-a-custom-fetch-implementation]

Starting from Accelerate version `2.0.0`, you can provide a custom implementation of the fetch function when extending the Prisma Client with Accelerate. This allows you greater flexibility and control over how HTTP requests are handled within your application.

To pass a custom fetch implementation, you can use the following pattern:

```ts
const myFetch = (input: URL, init?: RequestInit): Promise<Response> => {
  // Your custom fetch logic here
  return fetch(input, init);
};

const prisma = new PrismaClient().$extends(withAccelerate({ fetch: myFetch }));
```

Errors \[#errors]

Prisma Accelerate-related errors start with `P6xxx`.

You can find the full error code reference for Prisma Accelerate [here](/v6/orm/reference/error-reference#prisma-accelerate).

# Caching queries in Prisma Accelerate (/docs/v6/accelerate/caching)

Prisma Accelerate provides global caching for read queries using TTL, Stale-While-Revalidate (SWR), or a combination of both. It's included as part of Prisma Postgres, but can also be used with your own database by enabling Accelerate in the [Prisma Data Platform](https://console.prisma.io?utm_source=docs) and [configuring it with your database](/v6/accelerate/getting-started).

This content has moved — learn more on the updated [Caching in Accelerate](/v6/postgres/database/caching) page.
