# Drizzle + Vercel Postgres

- Database [connection basics](/docs/connect-overview) with Drizzle
- Vercel Postgres database - [website](https://vercel.com/docs/storage/vercel-postgres)
- Vercel Postgres driver - [docs](https://vercel.com/docs/storage/vercel-postgres/sdk) & [GitHub](https://github.com/vercel/storage/tree/main/packages/postgres)
- Drizzle PostgreSQL drivers - [docs](/docs/get-started-postgresql)

According to their **[official website](https://vercel.com/docs/storage/vercel-postgres)**,
Vercel Postgres is a serverless SQL database designed to integrate with Vercel Functions.

Drizzle ORM natively supports both **[@vercel/postgres](https://vercel.com/docs/storage/vercel-postgres)** serverless
driver with `drizzle-orm/vercel-postgres` package and **[`postgres`](#postgresjs)** or **[`pg`](#node-postgres)**
drivers to access Vercel Postgres through `postgesql://`

Check out the official **[Vercel Postgres + Drizzle](https://vercel.com/docs/storage/vercel-postgres/using-an-orm#drizzle)** docs.

#### Step 1 - Install packages

drizzle-orm @vercel/postgres
-D drizzle-kit

#### Step 2 - Prepare Vercel Postgres

Setup a project according to the **[official docs.](https://vercel.com/docs/storage/vercel-postgres/quickstart)**

#### Step 3 - Initialize the driver and make a query

```typescript copy
import { drizzle } from 'drizzle-orm/vercel-postgres';

const db = drizzle();

const result = await db.execute('select 1');
```

If you need to provide your existing driver:

```typescript copy
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

const db = drizzle({ client: sql })

const result = await db.execute('select 1');
```

With **[@vercel/postgres](https://vercel.com/docs/storage/vercel-postgres)** severless package
you can access Vercel Postgres from either serverful or serverless environments with no TCP available,
like Cloudflare Workers, through websockets.

If you're about to use Vercel Postgres from a *serverfull* environment, you can do it
either with `@vercel/postgres` or directly access the DB through `postgesql://` with
either **[`postgres`](#postgresjs)** or **[`pg`](#node-postgres)**.

#### What's next?

Source: https://orm.drizzle.team/docs/connect-xata

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import Steps from '@mdx/Steps.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Prerequisites from "@mdx/Prerequisites.astro";
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import CodeTabs from "@mdx/CodeTabs.astro";

# Drizzle + Xata

- Database [connection basics](/docs/connect-overview) with Drizzle
- Drizzle PostgreSQL drivers - [docs](/docs/get-started-postgresql)

**[Xata](https://xata.io)** is a PostgreSQL database platform designed to help developers operate and scale databases with enhanced productivity and performance. Xata provides features like instant copy-on-write database branches, zero-downtime schema changes, data anonymization, AI-powered performance monitoring, and BYOC.

Checkout official **[Xata + Drizzle](https://xata.io/documentation/quickstarts/drizzle)** docs.

#### Step 1 - Install packages

drizzle-orm postgres
-D drizzle-kit

#### Step 2 - Initialize the driver and make a query

```typescript copy filename="index.ts"
import { drizzle } from 'drizzle-orm/postgres-js'

const db = drizzle(process.env.DATABASE_URL);

const allUsers = await db.select().from(...);
```

If you need to provide your existing driver:

```typescript copy filename="index.ts"
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const client = postgres(process.env.DATABASE_URL)
const db = drizzle({ client });

const allUsers = await db.select().from(...);
```

#### What's next?

Source: https://orm.drizzle.team/docs/custom-types

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Callout from '@mdx/Callout.astro'
