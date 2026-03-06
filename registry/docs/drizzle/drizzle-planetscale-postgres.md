# Drizzle + PlanetScale Postgres

- Database [connection basics](/docs/connect-overview) with Drizzle
- PlanetScale Postgres database - [docs](https://planetscale.com/docs/postgres)
- Drizzle PostgreSQL drivers - [docs](/docs/get-started-postgresql)

PlanetScale offers both MySQL (Vitess) and PostgreSQL databases. This page covers connecting to PlanetScale Postgres.

For PlanetScale MySQL, see the [PlanetScale MySQL connection guide](/docs/connect-planetscale).

With Drizzle ORM you can connect to PlanetScale Postgres using:

- The standard `node-postgres` driver
- The `@neondatabase/serverless` driver for serverless environments

For detailed instructions on creating a PlanetScale Postgres database and obtaining credentials, see the [PlanetScale Postgres documentation](https://planetscale.com/docs/postgres/tutorials/planetscale-postgres-drizzle).

## node-postgres

#### Step 1 - Install packages

drizzle-orm pg -D drizzle-kit @types/pg

#### Step 2 - Initialize the driver and make a query

```typescript copy
import { drizzle } from "drizzle-orm/node-postgres";

const db = drizzle(process.env.DATABASE_URL);

const result = await db.execute("select 1");
```

```typescript copy
import { drizzle } from "drizzle-orm/node-postgres";

const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  },
});

const result = await db.execute("select 1");
```

```typescript copy
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle({ client: pool });

const result = await db.execute("select 1");
```

## Neon serverless driver

PlanetScale Postgres also supports connections via the [Neon serverless driver](https://planetscale.com/docs/postgres/connecting/neon-serverless-driver). This is a good option for serverless environments like Vercel Functions, Cloudflare Workers, or AWS Lambda.

The driver supports two modes:

- **HTTP mode** — Faster for single queries and non-interactive transactions
- **WebSocket mode** — Required for interactive transactions or session-based features

#### Step 1 - Install packages

drizzle-orm @neondatabase/serverless -D drizzle-kit

#### Step 2 - Initialize the driver and make a query

```typescript copy
import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// Required for PlanetScale Postgres connections
neonConfig.fetchEndpoint = (host) => `https://${host}/sql`;

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle({ client: sql });

const result = await db.execute("select 1");
```

```typescript copy
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

// Required for PlanetScale Postgres connections
neonConfig.pipelineConnect = false;
neonConfig.wsProxy = (host, port) => `${host}/v2?address=${host}:${port}`;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool });

const result = await db.execute("select 1");
```

```typescript copy
// For Node.js environments - install 'ws' package
import ws from "ws";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

neonConfig.webSocketConstructor = ws;
// Required for PlanetScale Postgres connections
neonConfig.pipelineConnect = false;
neonConfig.wsProxy = (host, port) => `${host}/v2?address=${host}:${port}`;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool });

const result = await db.execute("select 1");
```

{`postgresql://{username}:{password}@{host}:{port}/postgres?sslmode=verify-full`}

PlanetScale Postgres supports two connection ports:

`5432`: Direct connection to PostgreSQL. Total connections are limited by your cluster's `max_connections` setting.

`6432`: Connection via PgBouncer for connection pooling. Recommended when you have many simultaneous connections.

#### What's next?

Source: https://orm.drizzle.team/docs/connect-planetscale

import Npm from "@mdx/Npm.astro";
import Callout from "@mdx/Callout.astro";
import Tabs from "@mdx/Tabs.astro";
import Tab from "@mdx/Tab.astro";
import AnchorCards from "@mdx/AnchorCards.astro";
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
