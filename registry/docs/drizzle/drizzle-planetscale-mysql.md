# Drizzle + PlanetScale MySQL

- Database [connection basics](/docs/connect-overview) with Drizzle
- PlanetScale database - [website](https://planetscale.com/docs)
- PlanetScale http driver - [GitHub](https://github.com/planetscale/database-js)
- Drizzle MySQL drivers - [docs](/docs/get-started-mysql)

PlanetScale offers both MySQL (Vitess) and PostgreSQL databases. This page covers connecting to PlanetScale MySQL.

For PlanetScale Postgres, see the [PlanetScale Postgres connection guide](/docs/connect-planetscale-postgres).

With Drizzle ORM you can access PlanetScale MySQL over http
through their official **[`database-js`](https://github.com/planetscale/database-js)**
driver from serverless and serverfull environments with our `drizzle-orm/planetscale-serverless` package.

You can also access PlanetScale MySQL through TCP with `mysql2` driver — **[see here.](/docs/get-started-mysql)**

#### Step 1 - Install packages

drizzle-orm @planetscale/database -D drizzle-kit

#### Step 2 - Initialize the driver and make a query

```typescript copy"
import { drizzle } from "drizzle-orm/planetscale-serverless";

const db = drizzle({ connection: {
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
}});

const response = await db.select().from(...)
```

If you need to provide your existing driver

```typescript copy"
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { Client } from "@planetscale/database";

const client = new Client({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
});

const db = drizzle({ client });
```

Make sure to checkout the PlanetScale official **[MySQL courses](https://planetscale.com/courses/mysql-for-developers)**,
we think they're outstanding 🙌

#### What's next?

Source: https://orm.drizzle.team/docs/connect-prisma-postgres

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import Steps from '@mdx/Steps.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
import Section from "@mdx/Section.astro";
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";

# Drizzle + Prisma Postgres

- Database [connection basics](/docs/connect-overview) with Drizzle
- Prisma Postgres serverless database - [website](https://prisma.io/postgres)
- Prisma Postgres direct connections - [docs](https://www.prisma.io/docs/postgres/database/direct-connections)
- Drizzle PostgreSQL drivers - [docs](/docs/get-started-postgresql)

Prisma Postgres is a serverless database built on [unikernels](https://www.prisma.io/blog/announcing-prisma-postgres-early-access). It has a large free tier, [operation-based pricing](https://www.prisma.io/blog/operations-based-billing) and no cold starts.

You can connect to it using either the [`node-postgres`](https://node-postgres.com/) or [`postgres.js`](https://github.com/porsager/postgres) drivers for PostgreSQL.

Prisma Postgres also has a [serverless driver](https://www.prisma.io/docs/postgres/database/serverless-driver) that will be supported with Drizzle ORM in the future.

#### Step 1 - Install packages

drizzle-orm pg
-D drizzle-kit

drizzle-orm postres
-D drizzle-kit

#### Step 2 - Initialize the driver and make a query

```typescript
// Make sure to install the 'pg' package
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle({ client: pool });

const result = await db.execute("select 1");
```

```typescript
// Make sure to install the 'postgres' package
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const queryClient = postgres(process.env.DATABASE_URL);
const db = drizzle({ client: queryClient });

const result = await db.execute("select 1");
```

#### What's next?

Source: https://orm.drizzle.team/docs/connect-react-native-sqlite

import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Steps from '@mdx/Steps.astro';

# Drizzle + React Native SQLite

Please use [`Expo SQLite`](#expo-sqlite) to run Drizzle ORM with React Native apps.\
The only [popular library](https://github.com/andpor/react-native-sqlite-storage) we've found does not support new Hermes JavaScript runtime,
which is a standard out of the box runtime for React Native and Expo now.

Source: https://orm.drizzle.team/docs/connect-sqlite-cloud

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import Steps from '@mdx/Steps.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
import Section from "@mdx/Section.astro";
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";

# Drizzle + SQLite Cloud

- Database [connection basics](/docs/connect-overview) with Drizzle
- **SQLite Cloud database** - [docs](https://docs.sqlitecloud.io/docs/overview)
- **SQLite Cloud driver** - [docs](https://docs.sqlitecloud.io/docs/sdk-js-introduction) & [GitHub](https://github.com/sqlitecloud/sqlitecloud-js)

According to the **[official website](https://docs.sqlitecloud.io/docs/overview)**, SQLite Clouds is a managed, distributed relational database system built on top of the SQLite database engine.

#### Step 1 - Install packages

drizzle-orm@beta @sqlitecloud/drivers
-D drizzle-kit@beta

#### Step 2 - Initialize the driver and make a query

```typescript
import { drizzle } from "drizzle-orm/sqlite-cloud";

const db = drizzle(process.env.SQLITE_CLOUD_CONNECTION_STRING);

const result = await db.execute("select 1");
```

If you need to provide your existing drivers:

```typescript
import { Database } from "@sqlitecloud/drivers";
import { drizzle } from "drizzle-orm/sqlite-cloud";

const client = new Database(process.env.SQLITE_CLOUD_CONNECTION_STRING!);
const db = drizzle({ client });

const result = await db.execute("select 1");
```

#### What's next?

Source: https://orm.drizzle.team/docs/connect-supabase

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import Steps from '@mdx/Steps.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Prerequisites from "@mdx/Prerequisites.astro";
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
