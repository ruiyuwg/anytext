### SQLite

To set current timestamp as a default value in SQLite, you can use `sql` operator with `current_timestamp` constant which returns text representation of the current UTC date and time `(YYYY-MM-DD HH:MM:SS)`:

<Section>
```ts copy {8}
import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
id: integer('id').primaryKey(),
timestamp: text('timestamp')
.notNull()
.default(sql`(current_timestamp)`),
});

````

```sql
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`timestamp` text DEFAULT (current_timestamp) NOT NULL
);
````

```plaintext
// Data stored in the database
+----+---------------------+
| id | timestamp           |
+----+---------------------+
|  1 | 2024-04-11 15:40:43 |
+----+---------------------+
```

```ts
// Data returned by the application
[
  {
    id: 1,
    timestamp: "2024-04-11 15:40:43", // string
  },
];
```

</Section>

To set unix timestamp as a default value in SQLite, you can use the `sql` operator and `unixepoch()` function which returns the number of seconds since `1970-01-01 00:00:00 UTC`:

<Section>
```ts copy {8,11,14}
import { sql } from 'drizzle-orm';
import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
id: integer('id').primaryKey(),
timestamp1: integer('timestamp1', { mode: 'timestamp' })
.notNull()
.default(sql`(unixepoch())`),
timestamp2: integer('timestamp2', { mode: 'timestamp_ms' })
.notNull()
.default(sql`(unixepoch() * 1000)`),
timestamp3: integer('timestamp3', { mode: 'number' })
.notNull()
.default(sql`(unixepoch())`),
});

````

```sql
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`timestamp1` integer DEFAULT (unixepoch()) NOT NULL,
	`timestamp2` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`timestamp3` integer DEFAULT (unixepoch()) NOT NULL
);
````

</Section>

The `mode` option defines how values are handled in the application. In the application, values with `timestamp` and `timestamp_ms` modes are treated as `Date` objects, but stored as integers in the database.
The difference is that `timestamp` handles seconds, while `timestamp_ms` handles milliseconds.

<Section>
```plaintext
// Data stored in the database
+------------+------------+---------------+------------+
| id         | timestamp1 | timestamp2    | timestamp3 |
+------------+------------+---------------+------------+
| 1          | 1712835640 | 1712835640000 | 1712835640 |
+------------+------------+---------------+------------+
```

```ts
// Data returned by the application
[
  {
    id: 1,
    timestamp1: 2024-04-11T11:40:40.000Z, // Date object
    timestamp2: 2024-04-11T11:40:40.000Z, // Date object
    timestamp3: 1712835640 // number
  }
]
```

</Section>

Source: https://orm.drizzle.team/docs/toggling-a-boolean-field

import Section from "@mdx/Section.astro";
import IsSupportedChipGroup from "@mdx/IsSupportedChipGroup.astro";
import Prerequisites from "@mdx/Prerequisites.astro";

\<IsSupportedChipGroup chips={{PostgreSQL: true, MySQL: true, SQLite: true}}/>

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) and [SQLite](/docs/get-started-sqlite)
- [Update statement](/docs/update)
- [Filters](/docs/operators) and [not operator](/docs/operators#not)
- Boolean data type in [MySQL](/docs/column-types/mysql#boolean) and [SQLite](/docs/column-types/sqlite#boolean)
</Prerequisites>

To toggle a column value you can use `update().set()` method like below:

<Section>
```tsx copy {8}
import { eq, not } from 'drizzle-orm';

const db = drizzle(...);

await db
.update(table)
.set({
isActive: not(table.isActive),
})
.where(eq(table.id, 1));

````

```sql
update "table" set "is_active" = not "is_active" where "id" = 1;
````

</Section>

Please note that there is no boolean type in MySQL and SQLite.
MySQL uses tinyint(1).
SQLite uses integers 0 (false) and 1 (true).

Source: https://orm.drizzle.team/docs/unique-case-insensitive-email

import Section from "@mdx/Section.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';
import Callout from '@mdx/Callout.astro';

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) and [SQLite](/docs/get-started-sqlite)
- [Indexes](/docs/indexes-constraints#indexes)
- [Insert statement](/docs/insert) and [Select method](/docs/select)
- [sql operator](/docs/sql)
- You should have `drizzle-orm@0.31.0` and `drizzle-kit@0.22.0` or higher.
</Prerequisites>

### PostgreSQL

To implement a unique and case-insensitive `email` handling in PostgreSQL with Drizzle, you can create a unique index on the lowercased `email` column. This way, you can ensure that the `email` is unique regardless of the case.

Drizzle has simple and flexible API, which lets you easily create such an index using SQL-like syntax:
\<CodeTabs items={\["schema.ts", "migration.sql"]}> <CodeTab>

```ts copy {12,13}
import { SQL, sql } from "drizzle-orm";
import {
  AnyPgColumn,
  pgTable,
  serial,
  text,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
  },
  (table) => [
    // uniqueIndex('emailUniqueIndex').on(sql`lower(${table.email})`),
    uniqueIndex("emailUniqueIndex").on(lower(table.email)),
  ],
);

// custom lower function
export function lower(email: AnyPgColumn): SQL {
  return sql`lower(${email})`;
}
```

  </CodeTab>
  ```sql
  CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL
  );
  --> statement-breakpoint
  CREATE UNIQUE INDEX IF NOT EXISTS "emailUniqueIndex" ON "users" USING btree (lower("email"));
  ```
</CodeTabs>

This is how you can select user by `email` with `lower` function:

<Section>
```ts copy {10}
import { eq } from 'drizzle-orm';
import { lower, users } from './schema';

const db = drizzle(...);

const findUserByEmail = async (email: string) => {
return await db
.select()
.from(users)
.where(eq(lower(users.email), email.toLowerCase()));
};

````

```sql
select * from "users" where lower(email) = 'john@email.com';
````

</Section>
