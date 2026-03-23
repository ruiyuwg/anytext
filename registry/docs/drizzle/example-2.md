## Example 2

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
userId: integer().references(() => users.id),
})

```
</CodeTab>
</CodeTabs>

By running the seeding script above you will see a warning
```

Column 'userId' in 'bloodPressure' table will be filled with Null values
because you specified neither a table for foreign key on column 'userId'
nor a function for 'userId' column in refinements.

````
<Callout title='What does it mean?'>
This means you neither provided the `users` table to the `seed` function schema nor refined the `userId` column generator. 
As a result, the `userId` column will be filled with Null values.
</Callout>
Then you will have two choices:
- If you're okay with filling the `userId` column with Null values, you can ignore the warning;

- Otherwise, you can [refine](/docs/guides/seeding-with-partially-exposed-tables#refining-the-userid-column-generator) the `userId` column generator. 

## Refining the `userId` column generator
Doing so requires the `users` table to already have IDs such as 1 and 2 in the database.
<CodeTabs items={["index.ts"]}>
<CodeTab>
```ts copy {8}
import { bloodPressure } from './schema.ts';

async function main() {
  const db = drizzle(...);
  await seed(db, { bloodPressure }).refine((funcs) => ({
    bloodPressure: {
      columns: {
        userId: funcs.valuesFromArray({ values: [1, 2] })
      }
    }
  }));
}
main();

````

</CodeTab>
</CodeTabs>

Source: https://orm.drizzle.team/docs/select-parent-rows-with-at-least-one-related-child-row

import Prerequisites from "@mdx/Prerequisites.astro";
import IsSupportedChipGroup from "@mdx/IsSupportedChipGroup.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';
import Section from "@mdx/Section.astro";

\<IsSupportedChipGroup chips={{PostgreSQL: true, MySQL: true, SQLite: true}}/>

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) and [SQLite](/docs/get-started-sqlite)
- [Select statement](/docs/select) and [select from subquery](/docs/select#select-from-subquery)
- [Inner join](/docs/joins#inner-join)
- [Filter operators](/docs/operators) and [exists function](/docs/operators#exists)
</Prerequisites>

This guide demonstrates how to select parent rows with the condition of having at least one related child row. Below, there are examples of schema definitions and the corresponding database data:

```ts copy
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  userId: integer('user_id').notNull().references(() => users.id),
});
```

\<CodeTabs items={\["users.db", "posts.db"]}> <CodeTab>
`plaintext
    +----+------------+----------------------+
    | id |    name    |        email         |
    +----+------------+----------------------+
    |  1 | John Doe   | john_doe@email.com   |
    +----+------------+----------------------+
    |  2 | Tom Brown  | tom_brown@email.com  |
    +----+------------+----------------------+
    |  3 | Nick Smith | nick_smith@email.com |
    +----+------------+----------------------+
    ` </CodeTab>

  <CodeTab>
    ```plaintext
    +----+--------+-----------------------------+---------+
    | id | title  |          content            | user_id |
    +----+--------+-----------------------------+---------+
    |  1 | Post 1 | This is the text of post 1  |       1 |
    +----+--------+-----------------------------+---------+
    |  2 | Post 2 | This is the text of post 2  |       1 |
    +----+--------+-----------------------------+---------+
    |  3 | Post 3 | This is the text of post 3  |       3 |
    +----+--------+-----------------------------+---------+
    ```
  </CodeTab>
</CodeTabs>

To select parent rows with at least one related child row and retrieve child data you can use `.innerJoin()` method:

<Section>
  ```ts copy {12}
  import { eq } from 'drizzle-orm';
  import { users, posts } from './schema';

const db = drizzle(...);

await db
.select({
user: users,
post: posts,
})
.from(users)
.innerJoin(posts, eq(users.id, posts.userId));
.orderBy(users.id);

````

```sql
select users.*, posts.* from users
  inner join posts on users.id = posts.user_id
  order by users.id;
````

```ts
// result data, there is no user with id 2 because he has no posts
[
  {
    user: { id: 1, name: 'John Doe', email: 'john_doe@email.com' },
    post: {
      id: 1,
      title: 'Post 1',
      content: 'This is the text of post 1',
      userId: 1
    }
  },
  {
    user: { id: 1, name: 'John Doe', email: 'john_doe@email.com' },
    post: {
      id: 2,
      title: 'Post 2',
      content: 'This is the text of post 2',
      userId: 1
    }
  },
  {
    user: { id: 3, name: 'Nick Smith', email: 'nick_smith@email.com' },
    post: {
      id: 3,
      title: 'Post 3',
      content: 'This is the text of post 3',
      userId: 3
    }
  }
]
```

</Section>

To only select parent rows with at least one related child row you can use subquery with `exists()` function like this:

<Section>
```ts copy {8}
import { eq, exists, sql } from 'drizzle-orm';

const sq = db
.select({ id: sql`1` })
.from(posts)
.where(eq(posts.userId, users.id));

await db.select().from(users).where(exists(sq));

````

```sql
select * from users where exists (select 1 from posts where posts.user_id = users.id);
````

```ts
// result data, there is no user with id 2 because he has no posts
[
  { id: 1, name: 'John Doe', email: 'john_doe@email.com' },
  { id: 3, name: 'Nick Smith', email: 'nick_smith@email.com' }
]
```

</Section>

Source: https://orm.drizzle.team/docs/timestamp-default-value

import Section from "@mdx/Section.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) and [SQLite](/docs/get-started-sqlite)
- Learn about column data types for [PostgreSQL](/docs/column-types/pg), [MySQL](/docs/column-types/mysql) and [SQLite](/docs/column-types/sqlite)
- [sql operator](/docs/sql)
</Prerequisites>
