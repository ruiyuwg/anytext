### SQLite

To implement a unique and case-insensitive `email` handling in SQLite with Drizzle, you can create a unique index on the lowercased `email` column. This way, you can ensure that the `email` is unique regardless of the case.

Drizzle has simple and flexible API, which lets you easily create such an index using SQL-like syntax:

\<CodeTabs items={\["schema.ts", "migration.sql"]}> <CodeTab>

```ts copy {12,13}
import { SQL, sql } from "drizzle-orm";
import {
  AnySQLiteColumn,
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable(
  "users",
  {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
  },
  (table) => [
    // uniqueIndex('emailUniqueIndex').on(sql`lower(${table.email})`),
    uniqueIndex("emailUniqueIndex").on(lower(table.email)),
  ],
);

// custom lower function
export function lower(email: AnySQLiteColumn): SQL {
  return sql`lower(${email})`;
}
```

  </CodeTab>
  ```sql
  CREATE TABLE `users` (
	  `id` integer PRIMARY KEY NOT NULL,
	  `name` text NOT NULL,
	  `email` text NOT NULL
  );
  --> statement-breakpoint
  CREATE UNIQUE INDEX `emailUniqueIndex` ON `users` (lower(`email`));
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

Source: https://orm.drizzle.team/docs/update-many-with-different-value

import Section from "@mdx/Section.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import IsSupportedChipGroup from "@mdx/IsSupportedChipGroup.astro";

\<IsSupportedChipGroup chips={{PostgreSQL: true, MySQL: true, SQLite: true}}/>

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) and [SQLite](/docs/get-started-sqlite)
- [Update statement](/docs/update)
- [Filters](/docs/operators) and [sql operator](/docs/sql)
</Prerequisites>

To implement update many with different values for each row within 1 request you can use `sql` operator with `case` statement and `.update().set()` methods like this:

<Section>
```ts {26, 29, 32, 36, 38, 40}
import { SQL, inArray, sql } from 'drizzle-orm';
import { users } from './schema';

const db = drizzle(...);

const inputs = \[
{
id: 1,
city: 'New York',
},
{
id: 2,
city: 'Los Angeles',
},
{
id: 3,
city: 'Chicago',
},
];

// You have to be sure that inputs array is not empty
if (inputs.length === 0) {
return;
}

const sqlChunks: SQL\[] = \[];
const ids: number\[] = \[];

sqlChunks.push(sql`(case`);

for (const input of inputs) {
sqlChunks.push(sql`when ${users.id} = ${input.id} then ${input.city}`);
ids.push(input.id);
}

sqlChunks.push(sql`end)`);

const finalSql: SQL = sql.join(sqlChunks, sql.raw(' '));

await db.update(users).set({ city: finalSql }).where(inArray(users.id, ids));

````

```sql
update users set "city" =
  (case when id = 1 then 'New York' when id = 2 then 'Los Angeles' when id = 3 then 'Chicago' end)
where id in (1, 2, 3)
````

</Section>

Source: https://orm.drizzle.team/docs/upsert

import Section from "@mdx/Section.astro";
import IsSupportedChipGroup from "@mdx/IsSupportedChipGroup.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import Callout from "@mdx/Callout.astro";
import CodeTab from '@mdx/CodeTab.astro';

\<IsSupportedChipGroup chips={{PostgreSQL: true, MySQL: true, SQLite: true}}/>

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) and [SQLite](/docs/get-started-sqlite)
- [Insert statement](/docs/insert), [onConflictDoUpdate method](/docs/insert#on-conflict-do-update) and [onDuplicateKeyUpdate method](/docs/insert#on-duplicate-key-update)
- [Composite primary key](/docs/indexes-constraints#composite-primary-key)
- [sql operator](/docs/sql)
</Prerequisites>
