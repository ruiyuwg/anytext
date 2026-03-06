# Drizzle + Supabase

- Database [connection basics](/docs/connect-overview) with Drizzle
- Drizzle PostgreSQL drivers - [docs](/docs/get-started-postgresql)

According to the **[official website](https://supabase.com/docs)**, Supabase is an open source Firebase alternative for building secure and performant Postgres backends with minimal configuration.

Checkout official **[Supabase + Drizzle](https://supabase.com/docs/guides/database/connecting-to-postgres#connecting-with-drizzle)** docs.

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

If you decide to use connection pooling via Supabase (described [here](https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pooler)), and have "Transaction" pool mode enabled, then ensure to turn off prepare, as prepared statements are not supported.

```typescript copy filename="index.ts"
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(process.env.DATABASE_URL, { prepare: false })
const db = drizzle({ client });

const allUsers = await db.select().from(...);
```

Connect to your database using the Connection Pooler for **serverless environments**, and the Direct Connection for **long-running servers**.

#### What's next?

Source: https://orm.drizzle.team/docs/connect-tidb

import Npm from '@mdx/Npm.astro';
import Callout from '@mdx/Callout.astro';
import Tabs from '@mdx/Tabs.astro';
import Tab from '@mdx/Tab.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";

# Drizzle + TiDB Serverless

- Database [connection basics](/docs/connect-overview) with Drizzle
- TiDB database - [website](https://docs.pingcap.com/)
- TiDB HTTP Driver - [website](https://docs.pingcap.com/tidbcloud/serverless-driver)
- Drizzle MySQL drivers - [docs](/docs/get-started-mysql)

According to the **[official website](https://www.pingcap.com/tidb-serverless/)**,
TiDB Serverless is a fully-managed, autonomous DBaaS with split-second cluster provisioning and consumption-based pricing.

TiDB Serverless is compatible with MySQL, so you can use [MySQL connection guide](/docs/get-started-mysql) to connect to it.

TiDB Serverless provides an [HTTP driver](https://docs.pingcap.com/tidbcloud/serverless-driver) for edge environments. It is natively supported by Drizzle ORM via `drizzle-orm/tidb-serverless` package.

#### Step 1 - Install packages

drizzle-orm @tidbcloud/serverless
-D drizzle-kit

#### Step 2 - Initialize the driver and make a query

```typescript copy filename="index.ts"
import { drizzle } from 'drizzle-orm/tidb-serverless';

const db = drizzle({ connection: { url: process.env.TIDB_URL }});

const response = await db.select().from(...)
```

If you need to provide your existing driver:

```typescript copy"
import { connect } from "@tidbcloud/serverless";
import { drizzle } from "drizzle-orm/tidb-serverless";

const client = connect({ url: process.env.TIDB_URL });
const db = drizzle({ client });
```

#### What's next?

Source: https://orm.drizzle.team/docs/connect-turso-database

import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Steps from '@mdx/Steps.astro';
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
import LibsqlTable from "@mdx/LibsqlTable.mdx";
import LibsqlTabs from "@mdx/LibsqlTabs.mdx";

# Drizzle + Turso Database

- Database [connection basics](/docs/connect-overview) with Drizzle
- Turso Database - [website](https://docs.turso.tech/introduction)
- Turso Database driver - [website](https://docs.turso.tech/connect/javascript) & [GitHub](https://github.com/tursodatabase/turso/tree/main/bindings/javascript)

According to the **[official website](https://docs.turso.tech/introduction)**,
Turso is the small database to power your big dreams in the age of AI.

#### Step 1 - Install packages

drizzle-orm@beta @tursodatabase/database
-D drizzle-kit@beta

#### Step 2 - Initialize the driver and make a query

```typescript
import { drizzle } from "drizzle-orm/tursodatabase/database";

const db = drizzle("sqlite.db");

const result = await db.execute("select 1");
```

If you need to provide your existing drivers:

```typescript
import { Database } from "@tursodatabase/drivers";
import { drizzle } from "drizzle-orm/tursodatabase/database";

const client = new Database("sqlite.db");
const db = drizzle({ client });

const result = await db.execute("select 1");
```

#### What's next?

Source: https://orm.drizzle.team/docs/connect-turso

import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Steps from '@mdx/Steps.astro';
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
import LibsqlTable from "@mdx/LibsqlTable.mdx";
import LibsqlTabs from "@mdx/LibsqlTabs.mdx";
