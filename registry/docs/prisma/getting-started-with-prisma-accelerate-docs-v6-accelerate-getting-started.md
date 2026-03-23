# Getting started with Prisma Accelerate (/docs/v6/accelerate/getting-started)

Prerequisites \[#prerequisites]

To get started with Accelerate, you will need the following:

- A [Prisma Data Platform account](https://console.prisma.io)
- A project that uses [Prisma Client](/v6/orm/prisma-client/setup-and-configuration/introduction) `4.16.1` or higher. If your project is using interactive transactions, you need to use `5.1.1` or higher. (We always recommend using the latest version of Prisma.)
- A hosted PostgreSQL, MySQL/MariaDB, PlanetScale, CockroachDB, or MongoDB database

1. Enable Accelerate \[#1-enable-accelerate]

Navigate to your Prisma Data Platform project, choose an environment, and enable Accelerate by providing your database connection string and selecting the region nearest your database.

```
If you require IP allowlisting or firewall configurations with trusted IP addresses, enable Static IP for enhanced security. Learn more on [how to enable static IP for Accelerate in the Platform Console](/v6/accelerate/static-ip).
```

2\. Add Accelerate to your application \[#2-add-accelerate-to-your-application]

2.1. Update your database connection string \[#21-update-your-database-connection-string]

Once enabled, you'll be prompted to generate a connection string that you'll use to authenticate requests.

Replace your direct database url with your new Accelerate connection string.

```bash title=".env"
# New Accelerate connection string
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=__API_KEY__"

# Previous (direct) database connection string
# DATABASE_URL="postgresql://user:password@host:port/db_name?schema=public"
```

Prisma Client reads the `prisma://` URL from `DATABASE_URL` at runtime, while Prisma CLI commands use the connection string defined in `prisma.config.ts`.

Prisma Migrate and Introspection do not work with a `prisma://` connection string. In order to continue using these features add a new variable to the `.env` file named `DIRECT_DATABASE_URL` whose value is the direct database connection string:

```bash title=".env"
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=__API_KEY__"
DIRECT_DATABASE_URL="postgresql://user:password@host:port/db_name?schema=public" # [!code ++]
```

Then point `prisma.config.ts` to the direct connection string:

```ts title="prisma.config.ts" showLineNumbers
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DIRECT_DATABASE_URL"),
  },
});
```

Migrations and introspections will use the `directUrl` connection string rather than the one defined in `url` when this configuration is provided.

> `directUrl` is useful for you to carry out migrations and introspections. However, you don't need `directUrl` to use Accelerate in your application.

```
If you are using Prisma with PostgreSQL, there is no need for `directUrl`, as Prisma Migrate and Introspection work with the `prisma+postgres://` connection string.
```

2.2. Install the Accelerate Prisma Client extension \[#22-install-the-accelerate-prisma-client-extension]

```
💡 Accelerate requires [Prisma Client](/v6/orm/prisma-client/setup-and-configuration/introduction) version `4.16.1` or higher and [`@prisma/extension-accelerate`](https://www.npmjs.com/package/@prisma/extension-accelerate) version `1.0.0` or higher.

💡 Accelerate extension [`@prisma/extension-accelerate`](https://www.npmjs.com/package/@prisma/extension-accelerate) version `2.0.0` and above requires Node.js version `18` or higher.
```

Install the latest version of Prisma Client and Accelerate Prisma Client extension

````
  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/client@latest @prisma/extension-accelerate
```



```bash
pnpm add @prisma/client@latest @prisma/extension-accelerate
```



```bash
yarn add @prisma/client@latest @prisma/extension-accelerate
```



```bash
bun add @prisma/client@latest @prisma/extension-accelerate
```
````

2.3. Generate Prisma Client for Accelerate \[#23-generate-prisma-client-for-accelerate]

If you're using Prisma version `5.2.0` or greater, Prisma Client will automatically determine how it should connect to the database depending on the protocol in the database connection string. If the connection string in the `DATABASE_URL` starts with `prisma://`, Prisma Client will try to connect to your database using Prisma Accelerate.

When using Prisma Accelerate in long-running application servers, such as a server deployed on AWS EC2, you can generate the Prisma Client by executing the following command:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma generate
```



```bash
pnpm dlx prisma generate
```



```bash
yarn dlx prisma generate
```



```bash
bunx --bun prisma generate
```
````

When using Prisma Accelerate in a Serverless or an Edge application, we recommend you to run the following command to generate Prisma Client:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma generate --no-engine
```



```bash
pnpm dlx prisma generate --no-engine
```



```bash
yarn dlx prisma generate --no-engine
```



```bash
bunx --bun prisma generate --no-engine
```
````

The `--no-engine` flag prevents a Query Engine file from being included in the generated Prisma Client, this ensures the bundle size of your application remains small.

````
If your Prisma version is below `5.2.0`, generate Prisma Client with the `--accelerate` option:


  
    
      npm
    

    
      pnpm
    

    
      yarn
    

    
      bun
    
  

  
    ```bash
    npx prisma generate --accelerate
    ```
  

  
    ```bash
    pnpm dlx prisma generate --accelerate
    ```
  

  
    ```bash
    yarn dlx prisma generate --accelerate
    ```
  

  
    ```bash
    bunx --bun prisma generate --accelerate
    ```
  


If your Prisma version is below `5.0.0`, generate Prisma Client with the `--data-proxy` option:


  
    
      npm
    

    
      pnpm
    

    
      yarn
    

    
      bun
    
  

  
    ```bash
    npx prisma generate --data-proxy
    ```
  

  
    ```bash
    pnpm dlx prisma generate --data-proxy
    ```
  

  
    ```bash
    yarn dlx prisma generate --data-proxy
    ```
  

  
    ```bash
    bunx --bun prisma generate --data-proxy
    ```
  
````

2.4. Extend your Prisma Client instance with the Accelerate extension \[#24-extend-your-prisma-client-instance-with-the-accelerate-extension]

Add the following to extend your existing Prisma Client instance with the Accelerate extension:

```ts
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL,
}).$extends(withAccelerate());
```

If you are going to deploy to an edge runtime (like Cloudflare Workers, Vercel Edge Functions, Deno Deploy, or Supabase Edge Functions), use our edge client instead:

```ts
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL,
}).$extends(withAccelerate());
```

If VS Code does not recognize the `$extends` method, refer to [this section](/v6/accelerate/faq#vs-code-does-not-recognize-the-extends-method) on how to resolve the issue.

Using the Accelerate extension with other extensions \[#using-the-accelerate-extension-with-other-extensions]

Since [extensions are applied one after another](/v6/orm/prisma-client/client-extensions#conflicts-in-combined-extensions), make sure you apply them in the correct order. Extensions cannot share behavior and the last extension applied takes precedence.

If you are using [Query Insights](/query-insights) in your application, make sure you apply it *before* the Accelerate extension. For example:

```ts
const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL,
})
  .$extends(withOptimize())
  .$extends(withAccelerate());
```

2.5. Use Accelerate in your database queries \[#25-use-accelerate-in-your-database-queries]

The `withAccelerate` extension primarily does two things:

- Gives you access to the `cacheStrategy` field within each applicable model method that allows you to define a cache strategy per-query.
- Routes all of your queries through a connection pooler.

No cache strategy to only use connection pool \[#no-cache-strategy-to-only-use-connection-pool]

If you simply want to take advantage of Accelerate's connection pooling feature without applying a cache strategy, you may run your query the same way you would have without Accelerate.

By enabling Accelerate and supplying the Accelerate connection string, your queries now use the connection pooler by default.

Define a cache strategy \[#define-a-cache-strategy]

Update a query with the new `cacheStrategy` property which allows you to define a cache strategy for that specific query:

```ts
const user = await prisma.user.findMany({
  where: {
    email: {
      contains: "alice@prisma.io",
    },
  },
  cacheStrategy: { swr: 60, ttl: 60 },
});
```

In the example above, `swr: 60` and `ttl: 60` means Accelerate will serve cached data for 60 seconds and then another 60 seconds while Accelerate fetches fresh data in the background.

You should now see improved performance for your cached queries.

For information about which strategy best serves your application, see [Select a cache strategy](/v6/postgres/database/caching#selecting-a-cache-strategy).

```
As of Prisma version `5.2.0` you can use Prisma Studio with the Accelerate connection string.
```

Invalidate the cache and keep your cached query results up-to-date \[#invalidate-the-cache-and-keep-your-cached-query-results-up-to-date]

If your application requires real-time or near-real-time data, cache invalidation ensures that users see the most current data, even when using a large `ttl` (Time-To-Live) or `swr` (Stale-While-Revalidate) [cache strategy](/v6/postgres/database/caching#cache-strategies). By invalidating your cache, you can bypass extended caching periods to show live data whenever it's needed.

For example, if a dashboard displays customer information and a customer’s contact details change, cache invalidation allows you to refresh only that data instantly, ensuring support staff always see the latest information without waiting for the cache to expire.

To invalidate a cached query result, you can add tags and then use the `$accelerate.invalidate` API.

```
On-demand cache invalidation is available with our paid plans. For more details, please see our [pricing](https://www.prisma.io/pricing#accelerate).
```

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
      console.log("You've reached the cache invalidation rate limit. Please try again shortly.");
    }
  }
  throw e;
}
```

# Prisma Accelerate (/docs/v6/accelerate)

[Prisma Accelerate](https://www.prisma.io/accelerate) is a fully managed global connection pool and caching layer for your existing database, enabling query-level cache policies directly from the Prisma ORM.

With 15+ global regions, the connection pool scales your app for a global audience, particularly for serverless deployments that risk connection timeouts during peak times.

Accelerate's global cache, hosted in 300+ locations, ensures a fast experience for users, regardless of your database's location.

You can configure query-level caching strategies directly in your code with Prisma ORM, making setup and tuning easy.

Together, the connection pool and cache allow you to scale effortlessly and handle traffic spikes without infrastructure concerns.

Supported databases \[#supported-databases]

Accelerate works with the database you already have, whether it is publicly accessible, or via an IP allowlist.

- PostgreSQL
- MySQL
- MariaDB
- PlanetScale
- CockroachDB
- MongoDB

Getting started \[#getting-started]

- [Getting started](/v6/accelerate/getting-started) - Set up connection pooling and global caching
- [Connection pooling](/v6/accelerate/connection-pooling) - Scale your database connections
- [Caching](/v6/accelerate/caching) - Global database cache with TTL and SWR
