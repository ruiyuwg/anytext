## Example 3

\<CodeTabs items={\["index.ts", "schema.ts"]}> <CodeTab>

```ts copy{6-9}
import { users } from './schema.ts';

async function main() {
    const db = drizzle(...);
    await seed(db, { users }).refine(() => ({
        users: {
            count: 2,
            with: {
                users: 3,
            },
        },
    }));
}
main();

```

</CodeTab>

<CodeTab>
```ts
import { serial, pgTable, integer, text } from "drizzle-orm/pg-core";
import type { AnyPgColumn } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
id: serial('id').primaryKey(),
name: text('name'),
reportsTo: integer('reports\_to').references((): AnyPgColumn => users.id),
});

```
</CodeTab>
</CodeTabs>

Running the seeding script above will cause an error.

```

Error: "users" table has self reference.
You can't specify "users" as parameter in users.with object.

````

<Callout title='Why?'>
You have a `users` table referencing a `users` table in your schema, 
```ts copy{7}
.
.
.
export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: text('name'),
    reportsTo: integer('reports_to').references((): AnyPgColumn => users.id),
});
````

or in other words, you have one-to-one relation where `one` user can have only `one` user.

However, in your seeding script, you're attempting to generate 3 (`many`) users for `one` user, which is impossible.

```ts
users: {
    count: 2,
    with: {
        users: 3,
    },
},
```

</Callout>

Source: https://orm.drizzle.team/docs/seeding-with-partially-exposed-tables

import IsSupportedChipGroup from "@mdx/IsSupportedChipGroup.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';
import Callout from '@mdx/Callout.astro';

\<IsSupportedChipGroup chips={{PostgreSQL: true, MySQL: true, SQLite: true}}/>

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) or [SQLite](/docs/get-started-sqlite)
- Get familiar with [Drizzle Seed](/docs/seed-overview)
</Prerequisites>

## Example 1

Let's assume you are trying to seed your database using the seeding script and schema shown below.
\<CodeTabs items={\["index.ts", "schema.ts"]}> <CodeTab>

```ts
import { bloodPressure } from './schema.ts';

async function main() {
  const db = drizzle(...);
  await seed(db, { bloodPressure });
}
main();

```

</CodeTab>

<CodeTab>
```ts copy {10}
import { serial, pgTable, integer, doublePrecision } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
id: serial("id").primaryKey(),
});

export const bloodPressure = pgTable("bloodPressure", {
bloodPressureId: serial().primaryKey(),
pressure: doublePrecision(),
userId: integer().references(() => users.id).notNull(),
})

```
</CodeTab>
</CodeTabs>
If the `bloodPressure` table has a not-null constraint on the `userId` column, running the seeding script will cause an error.

```

Error: Column 'userId' has not null constraint,
and you didn't specify a table for foreign key on column 'userId' in 'bloodPressure' table.

````

<Callout title='What does it mean?'>
This means we can't fill the `userId` column with Null values due to the not-null constraint on that column. 
Additionally, you didn't expose the `users` table to the `seed` function schema, so we can't generate `users.id` to populate the `userId` column with these values.
</Callout>


At this point, you have several options to resolve the error:
- You can remove the not-null constraint from the `userId` column;
- You can expose `users` table to `seed` function schema
```ts 
await seed(db, { bloodPressure, users });
````

- You can [refine](/docs/guides/seeding-with-partially-exposed-tables#refining-the-userid-column-generator) the `userId` column generator;
