# Drizzle <> PostgreSQL

<Callout type='error'>
This page explains concepts available on drizzle versions `1.0.0-beta.2` and higher.
</Callout>

<br/>

<Prerequisites>
- Database [connection basics](/docs/connect-overview) with Drizzle
- node-postgres [basics](https://node-postgres.com/)
</Prerequisites>

Drizzle has native support for PostgreSQL connections with the `node-postgres` driver.

#### Step 1 - Install packages

<Npm>
drizzle-orm@beta pg
-D drizzle-kit@beta @types/pg
</Npm>

#### Step 2 - Initialize the driver and make a query

\<CodeTabs items={\["node-postgres", "node-postgres with config"]}>

```typescript copy
// Make sure to install the 'pg' package
import { drizzle } from "drizzle-orm/cockroach";

const db = drizzle(process.env.DATABASE_URL);

const result = await db.execute("select 1");
```

```typescript copy
// Make sure to install the 'pg' package
import { drizzle } from "drizzle-orm/cockroach";

// You can specify any property from the node-postgres connection options
const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  },
});

const result = await db.execute("select 1");
```

</CodeTabs>

If you need to provide your existing driver:

```typescript copy
// Make sure to install the 'pg' package
import { drizzle } from "drizzle-orm/cockroach";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle({ client: pool });

const result = await db.execute("select 1");
```

#### What's next?

<WhatsNextPostgres/>

Source: https://orm.drizzle.team/docs/get-started-gel

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import Steps from '@mdx/Steps.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";

# Drizzle <> Gel

<Prerequisites>
- Database [connection basics](/docs/connect-overview) with Drizzle
- gel-js [basics](https://github.com/geldata/gel-js)
</Prerequisites>

Drizzle has native support for Gel connections with the `gel-js` client.

#### Step 1 - Install packages

<Npm>
drizzle-orm gel
-D drizzle-kit
</Npm>

#### Step 2 - Initialize the driver and make a query

\<CodeTabs items={\["gel", "gel with config"]}>

```typescript copy
// Make sure to install the 'gel' package
import { drizzle } from "drizzle-orm/gel";

const db = drizzle(process.env.DATABASE_URL);

const result = await db.execute("select 1");
```

```typescript copy
// Make sure to install the 'gel' package
import { drizzle } from "drizzle-orm/gel";

// You can specify any property from the gel connection options
const db = drizzle({
  connection: {
    dsn: process.env.DATABASE_URL,
    tlsSecurity: "default",
  },
});

const result = await db.execute("select 1");
```

</CodeTabs>

If you need to provide your existing driver:

```typescript copy
// Make sure to install the 'gel' package
import { drizzle } from "drizzle-orm/gel";
import { createClient } from "gel";

const gelClient = createClient();
const db = drizzle({ client: gelClient });

const result = await db.execute("select 1");
```

#### What's next?

<WhatsNextPostgres/>

Source: https://orm.drizzle.team/docs/get-started-mssql

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import Steps from '@mdx/Steps.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
import WhatsNextMSSQL from "@mdx/WhatsNextMSSQL.astro";
