# Drizzle + Turso Cloud

- Database [connection basics](/docs/connect-overview) with Drizzle
- Turso Cloud - [website](https://docs.turso.tech/turso-cloud)
- Turso Cloud driver - [website](https://docs.turso.tech/sdk/ts/reference) & [GitHub](https://github.com/tursodatabase/libsql-client-ts)

According to the **[official website](https://turso.tech/drizzle)**,
Turso is a **[libSQL](https://github.com/libsql/libsql)** powered edge SQLite database as a service.

Drizzle ORM natively supports libSQL driver.
We embrace SQL dialects and dialect specific drivers and syntax and mirror most popular
SQLite-like `all`, `get`, `values` and `run` query methods syntax.

#### Step 1 - Install packages

drizzle-orm @libsql/client
-D drizzle-kit

#### Step 2 - Initialize the driver

Drizzle has native support for all `@libsql/client` driver variations:

If you need to provide your existing driver:

```typescript copy
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({ 
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN
});

const db = drizzle({ client });

const result = await db.select().from(users).all()
```

```typescript copy
import { drizzle } from 'drizzle-orm/libsql/web';
import { createClient } from '@libsql/client/web';

const client = createClient({ 
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN
});

const db = drizzle({ client });

const result = await db.select().from(users).all()
```

#### Step 3 - make a query

```ts
import { drizzle } from 'drizzle-orm/libsql';
import * as s from 'drizzle-orm/sqlite-core';

const db = drizzle({ connection: {
  url: process.env.DATABASE_URL, 
  authToken: process.env.DATABASE_AUTH_TOKEN 
}});

const users = s.sqliteTable("users", {
  id: s.integer(),
  name: s.text(),
})

const result = await db.select().from(users);
```

#### What's next?

Source: https://orm.drizzle.team/docs/connect-vercel-postgres

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import Steps from '@mdx/Steps.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Prerequisites from "@mdx/Prerequisites.astro";
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
