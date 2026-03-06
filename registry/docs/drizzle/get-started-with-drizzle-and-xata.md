# Get Started with Drizzle and Xata

<Prerequisites>
  - **dotenv** - package for managing environment variables - [read here](https://www.npmjs.com/package/dotenv)
  - **tsx** - package for running TypeScript files - [read here](https://tsx.is/)
  - **Xata Postgres database** - [read here](https://xata.io/documentation)
</Prerequisites>

<FileStructure/>

#### Step 1 - Install **postgres** package

<InstallPackages lib='postgres'/>

#### Step 2 - Setup connection variables

<SetupEnv env_variable='DATABASE_URL' />

You can obtain a connection string by following the [Xata documentation](https://xata.io/documentation/getting-started).

#### Step 3 - Connect Drizzle ORM to the database

<ConnectXata/>

#### Step 4 - Create a table

<CreateTable />

#### Step 5 - Setup Drizzle config file

<SetupConfig dialect='postgresql' env_variable='DATABASE_URL'/>

#### Step 6 - Applying changes to the database

<ApplyChanges />

#### Step 7 - Seed and Query the database

<QueryDatabase dialect='postgres-js' env_variable='DATABASE_URL'/>

#### Step 8 - Run index.ts file

<RunFile/>

Source: https://orm.drizzle.team/docs/goodies

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Callout from '@mdx/Callout.astro';
import Section from '@mdx/Section.astro';
import CodeTabs from '@mdx/CodeTabs.astro';

## Type API

To retrieve a type from your table schema for `select` and `insert` queries, you can make use of our type helpers.

\<Tabs items={\["PostgreSQL", "MySQL", "SQLite", "SingleStore", "MSSQL", "CockroachDB"]}> <Tab>

```ts
import { serial, text, pgTable } from "drizzle-orm/pg-core";
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

type SelectUser = typeof users.$inferSelect;
type InsertUser = typeof users.$inferInsert;
// or
type SelectUser = typeof users._.$inferSelect;
type InsertUser = typeof users._.$inferInsert;
// or
type SelectUser = InferSelectModel;
type InsertUser = InferInsertModel;
```

</Tab>
<Tab>
```ts
import { int, text, mysqlTable } from 'drizzle-orm/mysql-core';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm'

const users = mysqlTable('users', {
id: int('id').primaryKey(),
name: text('name').notNull(),
});

type SelectUser = typeof users.$inferSelect;
type InsertUser = typeof users.$inferInsert;
// or
type SelectUser = typeof users._.$inferSelect;
type InsertUser = typeof users._.$inferInsert;
// or
type SelectUser = InferSelectModel;
type InsertUser = InferInsertModel;

````
</Tab>
<Tab>
```ts
import { int, text, sqliteTable } from 'drizzle-orm/sqlite-core';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm'

const users = sqliteTable('users', {
  id: int('id').primaryKey(),
  name: text('name').notNull(),
});

type SelectUser = typeof users.$inferSelect;
type InsertUser = typeof users.$inferInsert;
// or
type SelectUser = typeof users._.$inferSelect;
type InsertUser = typeof users._.$inferInsert;
// or
type SelectUser = InferSelectModel;
type InsertUser = InferInsertModel;
````

</Tab>
<Tab>
```ts
import { int, text, singlestoreTable } from 'drizzle-orm/singlestore-core';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm'

const users = singlestoreTable('users', {
id: int('id').primaryKey(),
name: text('name').notNull(),
});

type SelectUser = typeof users.$inferSelect;
type InsertUser = typeof users.$inferInsert;
// or
type SelectUser = typeof users._.$inferSelect;
type InsertUser = typeof users._.$inferInsert;
// or
type SelectUser = InferSelectModel;
type InsertUser = InferInsertModel;

````
</Tab>
<Tab>
```ts
import { int, text, mssqlTable } from 'drizzle-orm/mssql-core';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm'

const users = mssqlTable('users', {
  id: int().primaryKey(),
  name: text().notNull(),
});

type SelectUser = typeof users.$inferSelect;
type InsertUser = typeof users.$inferInsert;
// or
type SelectUser = typeof users._.$inferSelect;
type InsertUser = typeof users._.$inferInsert;
// or
type SelectUser = InferSelectModel;
type InsertUser = InferInsertModel;
````

</Tab>
<Tab>
```ts
import { int4, text, cockroachTable } from 'drizzle-orm/cockroach-core';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm'

const users = cockroachTable('users', {
id: int4().primaryKey(),
name: text().notNull(),
});

type SelectUser = typeof users.$inferSelect;
type InsertUser = typeof users.$inferInsert;
// or
type SelectUser = typeof users._.$inferSelect;
type InsertUser = typeof users._.$inferInsert;
// or
type SelectUser = InferSelectModel;
type InsertUser = InferInsertModel;

````
</Tab>
</Tabs>


## Logging
To enable default query logging, just pass `{ logger: true }` to the `drizzle` initialization function:
```typescript copy
import { drizzle } from 'drizzle-orm/...'; // driver specific

const db = drizzle({ logger: true });
````

You can change the logs destination by creating a `DefaultLogger` instance and providing a custom `writer` to it:

```typescript copy
import { DefaultLogger, LogWriter } from "drizzle-orm/logger";
import { drizzle } from "drizzle-orm/..."; // driver specific

class MyLogWriter implements LogWriter {
  write(message: string) {
    // Write to file, stdout, etc.
  }
}

const logger = new DefaultLogger({ writer: new MyLogWriter() });
const db = drizzle({ logger });
```

You can also create a custom logger:

```typescript copy
import { Logger } from "drizzle-orm/logger";
import { drizzle } from "drizzle-orm/..."; // driver specific

class MyLogger implements Logger {
  logQuery(query: string, params: unknown[]): void {
    console.log({ query, params });
  }
}

const db = drizzle({ logger: new MyLogger() });
```

## Multi-project schema

**Table creator** API lets you define customize table names.\
It's very useful when you need to keep schemas of different projects in one database.

\<CodeTabs items={\["PostgreSQL", "MySQL", "SQLite", "SingleStore", "MSSQL", "CockroachDB"]}>

```ts {3}
import { serial, text, pgTableCreator } from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `project1_${name}`);

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});
```

```ts {3}
import { int, text, mysqlTableCreator } from "drizzle-orm/mysql-core";

const mysqlTable = mysqlTableCreator((name) => `project1_${name}`);

const users = mysqlTable("users", {
  id: int("id").primaryKey(),
  name: text("name").notNull(),
});
```

```ts {3}
import { int, text, sqliteTableCreator } from "drizzle-orm/sqlite-core";

const sqliteTable = sqliteTableCreator((name) => `project1_${name}`);

const users = sqliteTable("users", {
  id: int("id").primaryKey(),
  name: text("name").notNull(),
});
```

```ts {3}
import {
  int,
  text,
  singlestoreTableCreator,
} from "drizzle-orm/singlestore-core";

const singlestoreTable = singlestoreTableCreator((name) => `project1_${name}`);

const users = singlestoreTable("users", {
  id: int("id").primaryKey(),
  name: text("name").notNull(),
});
```

```ts {3}
import { int, text, mssqlTableCreator } from "drizzle-orm/mssql-core";

const mssqlTable = mssqlTableCreator((name) => `project1_${name}`);

const users = mssqlTable("users", {
  id: int().primaryKey(),
  name: text().notNull(),
});
```

```ts {3}
import { int4, text, cockroachTableCreator } from "drizzle-orm/cockroach-core";

const pgTable = cockroachTableCreator((name) => `project1_${name}`);

const users = pgTable("users", {
  id: int4().primaryKey(),
  name: text().notNull(),
});
```

</CodeTabs>
```ts {10}
import { defineConfig } from "drizzle-kit";

export default defineConfig({
schema: "./src/schema/_",
out: "./drizzle",
dialect: "mysql",
dbCredentials: {
url: process.env.DATABASE_URL,
}
tablesFilter: \["project1\__"],
});

````

You can apply multiple `or` filters:
```ts
tablesFilter: ["project1_*", "project2_*"]
````

## Printing SQL query

You can print SQL queries with `db` instance or by using **[`standalone query builder`](#standalone-query-builder)**.

```typescript copy
const query = db
  .select({ id: users.id, name: users.name })
  .from(users)
  .groupBy(users.id)
  .toSQL();
// query:
{
  sql: 'select 'id', 'name' from 'users' group by 'users'.'id'',
  params: [],
}
```

## Raw SQL queries execution

If you have some complex queries to execute and `drizzle-orm` can't handle them yet,
you can use the `db.execute` method to execute raw `parametrized` queries.

\<Tabs items={\['PostgreSQL', 'MySQL', 'SQLite', 'SingleStore', 'MSSQL', 'CockroachDB']}> <Tab>
``ts
    const statement = sql`select * from ${users} where ${users.id} = ${userId}`;
    const res: postgres.RowList<Record<string, unknown>[]> = await db.execute(statement)
    `` </Tab> <Tab>
\`\`\`typescript copy
import { ..., MySqlQueryResult } from "drizzle-orm/mysql2";

````
const statement = sql`select * from ${users} where ${users.id} = ${userId}`;
const res: MySqlRawQueryResult = await db.execute(statement);
```
</Tab>
<Tab>
```ts
const statement = sql`select * from ${users} where ${users.id} = ${userId}`;

const res: unknown[] = db.all(statement)
const res: unknown = db.get(statement)
const res: unknown[][] = db.values(statement)
const res: Database.RunResult = db.run(statement)
```
</Tab>
<Tab>
```typescript copy
import { ..., SingleStoreQueryResult } from "drizzle-orm/singlestore";

const statement = sql`select * from ${users} where ${users.id} = ${userId}`;
const res: SingleStoreRawQueryResult = await db.execute(statement);
```
</Tab>
    <Tab>
```typescript copy
import { sql } from "drizzle-orm";

const statement = sql`select * from ${users} where ${users.id} = ${userId}`;
const res = await db.execute(statement);
```
</Tab>
<Tab>
```ts
const statement = sql`select * from ${users} where ${users.id} = ${userId}`;
const res = await db.execute(statement)
```
</Tab>
````

</Tabs>

## Standalone query builder

Drizzle ORM provides a standalone query builder that allows you to build queries
without creating a database instance and get generated SQL.
\<Tabs items={\['PostgreSQL', 'MySQL', 'SQLite', "SingleStore", "MSSQL", "CockroachDB"]}> <Tab>
\`\`\`typescript copy
import { QueryBuilder } from 'drizzle-orm/pg-core';

````
    const qb = new QueryBuilder();

    const query = qb.select().from(users).where(eq(users.name, 'Dan'));
    const { sql, params } = query.toSQL();
    ```
</Tab>
<Tab>
    ```typescript copy
    import { QueryBuilder } from 'drizzle-orm/mysql-core';

    const qb = new QueryBuilder();

    const query = qb.select().from(users).where(eq(users.name, 'Dan'));
    const { sql, params } = query.toSQL();
    ```
</Tab>
<Tab>
    ```typescript copy
    import { QueryBuilder } from 'drizzle-orm/sqlite-core';

    const qb = new QueryBuilder();

    const query = qb.select().from(users).where(eq(users.name, 'Dan'));
    const { sql, params } = query.toSQL();
    ```
</Tab>
<Tab>
    ```typescript copy
    import { QueryBuilder } from 'drizzle-orm/singlestore-core';

    const qb = new QueryBuilder();

    const query = qb.select().from(users).where(eq(users.name, 'Dan'));
    const { sql, params } = query.toSQL();
    ```
</Tab>
<Tab>
    ```typescript copy
    import { QueryBuilder } from 'drizzle-orm/mssql-core';

    const qb = new QueryBuilder();

    const query = qb.select().from(users).where(eq(users.name, 'Dan'));
    const { sql, params } = query.toSQL();
    ```
</Tab>
<Tab>
    ```typescript copy
    import { QueryBuilder } from 'drizzle-orm/cockroach-core';

    const qb = new QueryBuilder();

    const query = qb.select().from(users).where(eq(users.name, 'Dan'));
    const { sql, params } = query.toSQL();
    ```
</Tab>
````

</Tabs>

## Get typed columns

You can get a typed columns map,
very useful when you need to omit certain columns upon selection.

<Callout type='warning'>
`getColumns` available starting from `drizzle-orm@1.0.0-beta.2`(read more [here](/docs/upgrade-v1))

If you are on pre-1 version(like `0.45.1`) then use `getTableColumns` </Callout>

<br/>

\<Tabs items={\['PostgreSQL', 'MySQL', 'SQLite', "SingleStore", "MSSQL", "CockroachDB"]}> <Tab>
\<CodeTabs items={\["index.ts", "schema.ts"]}>
\`\`\`ts
import { getColumns } from "drizzle-orm";
import { user } from "./schema";

````
    const { password, role, ...rest } = getColumns(user);

    await db.select({ ...rest }).from(users);
    ```
    ```ts
    import { serial, text, pgTable } from "drizzle-orm/pg-core";

    export const user = pgTable("user", {
      id: serial("id").primaryKey(),
      name: text("name"),
      email: text("email"),
      password: text("password"),
      role: text("role").$type<"admin" | "customer">(),
    });
    ```
  </CodeTabs>
````

  </Tab>
  <Tab>
      <CodeTabs items={["index.ts", "schema.ts"]}>
        ```ts
        import { getColumns } from "drizzle-orm";
        import { user } from "./schema";

````
    const { password, role, ...rest } = getColumns(user);

    await db.select({ ...rest }).from(users);
    ```
    ```ts
    import { int, text, mysqlTable } from "drizzle-orm/mysql-core";

    export const user = mysqlTable("user", {
      id: int("id").primaryKey().autoincrement(),
      name: text("name"),
      email: text("email"),
      password: text("password"),
      role: text("role").$type<"admin" | "customer">(),
    });
    ```
  </CodeTabs>
````

  </Tab>
  <Tab>
      <CodeTabs items={["index.ts", "schema.ts"]}>
        ```ts
        import { getColumns } from "drizzle-orm";
        import { user } from "./schema";

````
    const { password, role, ...rest } = getColumns(user);

    await db.select({ ...rest }).from(users);
    ```
    ```ts
    import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

    export const user = sqliteTable("user", {
      id: integer("id").primaryKey({ autoIncrement: true }),
      name: text("name"),
      email: text("email"),
      password: text("password"),
      role: text("role").$type<"admin" | "customer">(),
    });
    ```
  </CodeTabs>
````

  </Tab>
  <Tab>
      <CodeTabs items={["index.ts", "schema.ts"]}>
        ```ts
        import { getColumns } from "drizzle-orm";
        import { user } from "./schema";

````
    const { password, role, ...rest } = getColumns(user);

    await db.select({ ...rest }).from(users);
    ```
    ```ts
    import { int, text, singlestoreTable } from "drizzle-orm/singlestore-core";

    export const user = singlestoreTable("user", {
      id: int("id").primaryKey().autoincrement(),
      name: text("name"),
      email: text("email"),
      password: text("password"),
      role: text("role").$type<"admin" | "customer">(),
    });
    ```
  </CodeTabs>
````

  </Tab>
  <Tab>
      <CodeTabs items={["index.ts", "schema.ts"]}>
        ```ts
        import { getColumns } from "drizzle-orm";
        import { user } from "./schema";

````
    const { password, role, ...rest } = getColumns(user);

    await db.select({ ...rest }).from(users);
    ```
    ```ts
    import { int, text, mssqlTable } from "drizzle-orm/mssql-core";

    export const user = mssqlTable("user", {
      id: int().primaryKey(),
      name: text(),
      email: text(),
      password: text(),
      role: text().$type<"admin" | "customer">(),
    });
    ```
  </CodeTabs>
````

  </Tab>
  <Tab>
      <CodeTabs items={["index.ts", "schema.ts"]}>
        ```ts
        import { getColumns } from "drizzle-orm";
        import { user } from "./schema";

````
    const { password, role, ...rest } = getColumns(user);

    await db.select({ ...rest }).from(users);
    ```
    ```ts
    import { int4, text, pgTable } from "drizzle-orm/cockroach-core";

    export const user = pgTable("user", {
      id: int4().primaryKey(),
      name: text(),
      email: text(),
      password: text(),
      role: text().$type<"admin" | "customer">(),
    });
    ```
  </CodeTabs>
````

  </Tab>
</Tabs>

## Get table information

\<Tabs items={\['PostgreSQL', 'MySQL', 'SQLite', "SingleStore", "MSSQL", "CockroachDB"]}> <Tab>
\`\`\`ts copy
import { getTableConfig, pgTable } from 'drizzle-orm/pg-core';

````
export const table = pgTable(...);

const {
  columns,
  indexes,
  foreignKeys,
  checks,
  primaryKeys,
  name,
  schema,
} = getTableConfig(table);
```
````

  </Tab>
  <Tab>
  ```ts copy
  import { getTableConfig, mysqlTable } from 'drizzle-orm/mysql-core';

export const table = mysqlTable(...);

const {
columns,
indexes,
foreignKeys,
checks,
primaryKeys,
name,
schema,
} = getTableConfig(table);

````
</Tab>
<Tab>
```ts copy
import { getTableConfig, sqliteTable } from 'drizzle-orm/sqlite-core';

export const table = sqliteTable(...);

const {
  columns,
  indexes,
  foreignKeys,
  checks,
  primaryKeys,
  name,
  schema,
} = getTableConfig(table);
````

  </Tab>
  <Tab>
  ```ts copy
  import { getTableConfig, mysqlTable } from 'drizzle-orm/singlestore-core';

export const table = singlestoreTable(...);

const {
columns,
indexes,
checks,
primaryKeys,
name,
schema,
} = getTableConfig(table);

````
</Tab>
<Tab>
```ts copy
import { getTableConfig, mssqlTable } from 'drizzle-orm/mssql-core';

export const table = mssqlTable(...);

const {
  columns,
  indexes,
  checks,
  primaryKeys,
  name,
  schema,
} = getTableConfig(table);
````

  </Tab>
  <Tab>
    ```ts copy
    import { getTableConfig, cockroachTable } from 'drizzle-orm/cockroach-core';

````
export const table = cockroachTable(...);

const {
  columns,
  indexes,
  foreignKeys,
  checks,
  primaryKeys,
  name,
  schema,
} = getTableConfig(table);
```
````

  </Tab>
</Tabs>

## Compare objects types (instanceof alternative)

You can check if an object is of a specific Drizzle type using the `is()` function.
You can use it with any available type in Drizzle.

<Callout type="warning" emoji="⭐️">
  You should always use `is()` instead of `instanceof`
</Callout>

**Few examples**

```ts
import { Column, is } from "drizzle-orm";

if (is(value, Column)) {
  // value's type is narrowed to Column
}
```

### Mock Driver

This API is a successor to an undefined `drizzle({} as any)` API which we've used internally in Drizzle tests and rarely recommended to external developers.

We decided to build and expose a proper API, every `drizzle` driver now has `drizzle.mock()`:

```ts
import { drizzle } from "drizzle-orm/...";

const db = drizzle.mock();
```

you can provide schema if necessary for types

```ts
import { drizzle } from "drizzle-orm/...";
import * as schema from "./schema";

const db = drizzle.mock({ schema });
```

Source: https://orm.drizzle.team/docs/gotchas

import CodeTab from "@mdx/CodeTab.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
import Section from "@mdx/Section.astro";
import Tab from "@mdx/Tab.astro";
import Tabs from "@mdx/Tabs.astro";
import Callout from "@mdx/Callout.astro";

# Drizzle gotchas

This will be a library of `gotchas` with Drizzle use cases

Source: https://orm.drizzle.team/docs/graphql

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Callout from '@mdx/Callout.astro';
import CodeTab from '@mdx/CodeTab.astro';
import CodeTabs from '@mdx/CodeTabs.astro';
import Npm from '@mdx/Npm.astro';

# drizzle-graphql

Create a GraphQL server from a Drizzle schema in one line, and easily enhance it with custom queries and mutations.

## Quick start

Make sure your `drizzle-orm` version is at least `0.30.9`, and update if needed: <Npm>drizzle-orm@latest</Npm>
