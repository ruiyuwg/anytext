### Default value

The `DEFAULT` clause specifies a default value to use for the column if no value
is explicitly provided by the user when doing an `INSERT`.
If there is no explicit `DEFAULT` clause attached to a column definition,
then the default value of the column is `NULL`.

An explicit `DEFAULT` clause may specify that the default value is `NULL`,
a string constant, a blob constant, a signed-number, or any constant expression enclosed in parentheses.

```typescript
import { sql } from "drizzle-orm";
import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

const table = sqliteTable("table", {
  int1: integer().default(42),
  int2: integer().default(sql`(abs(42))`),
});
```

```sql
CREATE TABLE `table` (
	`int1` integer DEFAULT 42,
	`int2` integer DEFAULT (abs(42))
);
```

A default value may also be one of the special case-independent keywords `CURRENT_TIME`, `CURRENT_DATE` or `CURRENT_TIMESTAMP`.

```typescript
import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

const table = sqliteTable("table", {
  time: text().default(sql`(CURRENT_TIME)`),
  date: text().default(sql`(CURRENT_DATE)`),
  timestamp: text().default(sql`(CURRENT_TIMESTAMP)`),
});
```

```sql
CREATE TABLE `table` (
	`time` text DEFAULT (CURRENT_TIME),
	`date` text DEFAULT (CURRENT_DATE),
	`timestamp` text DEFAULT (CURRENT_TIMESTAMP)
);
```

When using `$default()` or `$defaultFn()`, which are simply different aliases for the same function,
you can generate defaults at runtime and use these values in all insert queries.
These functions can assist you in utilizing various implementations such as `uuid`, `cuid`, `cuid2`, and many more.

```
Note: This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`
```

```ts
import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";

const table = sqliteTable("table", {
  id: text().$defaultFn(() => createId()),
});
```

When using `$onUpdate()` or `$onUpdateFn()`, which are simply different aliases for the same function,
you can generate defaults at runtime and use these values in all update queries.

Adds a dynamic update value to the column. The function will be called when the row is updated,
and the returned value will be used as the column value if none is provided.
If no default (or $defaultFn) value is provided, the function will be called
when the row is inserted as well, and the returned value will be used as the column value.

```
Note: This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`
```

```ts
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

const table = sqliteTable("table", {
  alwaysNull: text()
    .$type<string | null>()
    .$onUpdate(() => null),
});
```

Source: https://orm.drizzle.team/docs/connect-aws-data-api-mysql

import Callout from '@mdx/Callout.astro';

# Drizzle + AWS Data API MySQL

Currently AWS Data API for MySQL is not implemented in Drizzle ORM

Source: https://orm.drizzle.team/docs/connect-aws-data-api-pg

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";

# Drizzle + AWS Data API Postgres

- Database [connection basics](/docs/connect-overview) with Drizzle
- AWS Data API - [website](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html)
- AWS SDK - [website](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds-data/)

#### Step 1 - Install packages

drizzle-orm @aws-sdk/client-rds-data
-D drizzle-kit

#### Step 2 - Initialize the driver and make a query

```typescript copy
import { drizzle } from 'drizzle-orm/aws-data-api/pg';

// These three properties are required. You can also specify
// any property from the RDSDataClient type inside the connection object.
const db = drizzle({ connection: {
  database: process.env['DATABASE']!,
  secretArn: process.env['SECRET_ARN']!,
  resourceArn: process.env['RESOURCE_ARN']!,
}});

await db.select().from(...);
```

If you need to provide your existing driver:

```typescript copy
import { drizzle } from 'drizzle-orm/aws-data-api/pg';
import { RDSDataClient } from '@aws-sdk/client-rds-data';

const rdsClient = new RDSDataClient({ region: 'us-east-1' });

const db = drizzle(rdsClient, {
  database: process.env['DATABASE']!,
  secretArn: process.env['SECRET_ARN']!,
  resourceArn: process.env['RESOURCE_ARN']!,
});

await db.select().from(...);
```

#### What's next?

Source: https://orm.drizzle.team/docs/connect-bun-sql

import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Steps from '@mdx/Steps.astro';
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";

# Drizzle + Bun SQL

- Database [connection basics](/docs/connect-overview) with Drizzle
- Bun - [website](https://bun.sh/docs)
- Bun SQL - native bindings for working with PostgreSQL databases - [read here](https://bun.sh/docs/api/sql)

According to the **[official website](https://bun.sh/)**, Bun is a fast all-in-one JavaScript runtime.

Drizzle ORM natively supports **[`bun sql`](https://bun.sh/docs/api/sql)** module and it's crazy fast 🚀

#### Step 1 - Install packages

drizzle-orm
-D drizzle-kit

#### Step 2 - Initialize the driver and make a query

```typescript copy
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sql';

const db = drizzle(process.env.DATABASE_URL);

const result = await db.select().from(...);
```

If you need to provide your existing driver:

```typescript copy
import "dotenv/config";
import { drizzle } from "drizzle-orm/bun-sql";
import { SQL } from "bun";

const client = new SQL(process.env.DATABASE_URL!);
const db = drizzle({ client });
```

#### What's next?

Source: https://orm.drizzle.team/docs/connect-bun-sqlite

import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Steps from '@mdx/Steps.astro';
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
