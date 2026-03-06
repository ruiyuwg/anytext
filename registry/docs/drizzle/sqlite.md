### SQLite

SQLite doesn't have an array data type, but you can use `text` data type for the same purpose. To set an empty array as a default value in SQLite, you can use `json_array()` function or `sql` operator with `'[]'` syntax:

<Section>
```ts copy {9,13}
import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
id: integer('id').primaryKey(),
tags1: text('tags1', { mode: 'json' })
.notNull()
.$type\<string\[]>()
.default(sql`(json_array())`),
tags2: text('tags2', { mode: 'json' })
.notNull()
.$type\<string\[]>()
.default(sql`'[]'`),
});

````

```sql
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`tags1` text DEFAULT (json_array()) NOT NULL,
	`tags2` text DEFAULT '[]' NOT NULL
);
````

</Section>

The `mode` option defines how values are handled in the application. With `json` mode, values are treated as JSON object literal.

You can specify `.$type<..>()` for json object inference, it will not check runtime values. It provides compile time protection for default values, insert and select schemas.

Source: https://orm.drizzle.team/docs/full-text-search-with-generated-columns

import Section from "@mdx/Section.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql)
- [Select statement](/docs/select)
- [Indexes](/docs/indexes-constraints#indexes)
- [sql operator](/docs/sql) 
- [Full-text search](/learn/guides/postgresql-full-text-search)
- [Generated columns](/docs/generated-columns)
</Prerequisites>

This guide demonstrates how to implement full-text search in PostgreSQL with Drizzle and generated columns. A generated column is a special column that is always computed from other columns. It is useful because you don't have to compute the value of the column every time you query the table:

\<CodeTabs items={\["schema.ts", "migration.sql"]}> <CodeTab>

```ts copy {18,19,20,23}
import { SQL, sql } from "drizzle-orm";
import { index, pgTable, serial, text, customType } from "drizzle-orm/pg-core";

export const tsvector = customType<{
  data: string;
}>({
  dataType() {
    return `tsvector`;
  },
});

export const posts = pgTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    body: text("body").notNull(),
    bodySearch: tsvector("body_search")
      .notNull()
      .generatedAlwaysAs((): SQL => sql`to_tsvector('english', ${posts.body})`),
  },
  (t) => [index("idx_body_search").using("gin", t.bodySearch)],
);
```

  </CodeTab>
  ```sql
CREATE TABLE "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"body" text NOT NULL,
	"body_search" "tsvector" GENERATED ALWAYS AS (to_tsvector('english', "posts"."body")) STORED NOT NULL
);
--> statement-breakpoint
CREATE INDEX "idx_body_search" ON "posts" USING gin ("body_search");
  ```
</CodeTabs>

When you insert a row into a table, the value of a generated column is computed from an expression that you provide when you create the column:

<Section>
```ts 
import { posts } from './schema';

const db = drizzle(...);

const body = "Golden leaves cover the quiet streets as a crisp breeze fills the air, bringing the scent of rain and the promise of change"

await db.insert(posts).values({
body,
title: "The Beauty of Autumn",
}
).returning();

````

```json
[
  {
    id: 1,
    title: 'The Beauty of Autumn',
    body: 'Golden leaves cover the quiet streets as a crisp breeze fills the air, bringing the scent of rain and the promise of change',
    bodySearch: "'air':13 'breez':10 'bring':14 'chang':23 'cover':3 'crisp':9 'fill':11 'golden':1 'leav':2 'promis':21 'quiet':5 'rain':18 'scent':16 'street':6"
  }
]
````

</Section>

This is how you can implement full-text search with generated columns in PostgreSQL with Drizzle ORM. The `@@` operator is used for direct matches:

<Section>
```ts copy {6}
const searchParam = "bring";

await db
.select()
.from(posts)
.where(sql`${posts.bodySearch} @@ to_tsquery('english', ${searchParam})`);

````

```sql
select * from posts where body_search @@ to_tsquery('english', 'bring');
````

</Section>

This is more advanced schema with a generated column. The `search` column is generated from the `title` and `body` columns and `setweight()` function is used to assign different weights to the columns for full-text search.
This is typically used to mark entries coming from different parts of a document, such as title versus body.

\<CodeTabs items={\["schema.ts", "migration.sql"]}> <CodeTab>

```ts copy {18,19,20,21,22,23,24,28}
import { SQL, sql } from "drizzle-orm";
import { index, pgTable, serial, text, customType } from "drizzle-orm/pg-core";

export const tsvector = customType<{
  data: string;
}>({
  dataType() {
    return `tsvector`;
  },
});

export const posts = pgTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    body: text("body").notNull(),
    search: tsvector("search")
      .notNull()
      .generatedAlwaysAs(
        (): SQL =>
          sql`setweight(to_tsvector('english', ${posts.title}), 'A')
        ||
        setweight(to_tsvector('english', ${posts.body}), 'B')`,
      ),
  },
  (t) => [index("idx_search").using("gin", t.search)],
);
```

  </CodeTab>
  ```sql
CREATE TABLE "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"body" text NOT NULL,
	"search" "tsvector" GENERATED ALWAYS AS (setweight(to_tsvector('english', "posts"."title"), 'A')
          ||
          setweight(to_tsvector('english', "posts"."body"), 'B')) STORED NOT NULL
);
--> statement-breakpoint
CREATE INDEX "idx_search" ON "posts" USING gin ("search");
  ```
</CodeTabs>

This is how you can query the table with full-text search:

<Section>
```ts copy {6}
const search = 'travel';

await db
.select()
.from(posts)
.where(sql`${posts.search} @@ to_tsquery('english', ${search})`);

````

```sql
select * from posts where search @@ to_tsquery('english', 'travel');
````

</Section>

Source: https://orm.drizzle.team/docs/gel-ext-auth

import Prerequisites from "@mdx/Prerequisites.astro";
import Callout from "@mdx/Callout.astro";
import Npx from "@mdx/Npx.astro";

<Prerequisites>
- Get started with [Gel](/docs/get-started-gel)
- Using [drizzle-kit pull](/docs/drizzle-kit-pull)
</Prerequisites>

#### Step 1 - Define Gel auth schema

In `dbschema/default.esdl` file add a Gel schema with an auth extension

```esdl
using extension auth;

module default {
  global current_user := (
    assert_single((
      select User { id, username, email }
      filter .identity = global ext::auth::ClientTokenIdentity
    ))
  );

  type User {
    required identity: ext::auth::Identity;
    required username: str;
    required email: str;
  }
}
```

#### Step 2 - Push Gel schema to the database

Generate Gel migration file:

```bash
gel migration create
```

Apply Gel migrations to the database

```bash
gel migration apply
```

#### Step 3 - Setup Drizzle config file

**Drizzle config** - a configuration file that is used by [Drizzle Kit](/docs/kit-overview) and contains all the information about your database connection, migration folder and schema files.

Create a `drizzle.config.ts` file in the root of your project and add the following content:

```typescript copy filename="drizzle.config.ts"
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "gel",
  // Enable auth schema for drizzle-kit
  schemaFilter: ["ext::auth", "public"],
});
```

#### Step 4 - Pull Gel types to Drizzle schema

Pull your database schema: <Npx>
drizzle-kit pull </Npx>

Here is an example of the generated schema.ts file:

<Callout type="warning">
You'll get more than just the `Identity` table from `ext::auth`. Drizzle will pull in all the 
`auth` tables you can use. The example below showcases just one of them.
</Callout>

```ts
import {
  gelTable,
  uniqueIndex,
  uuid,
  text,
  gelSchema,
  timestamptz,
  foreignKey,
} from "drizzle-orm/gel-core";
import { sql } from "drizzle-orm";

export const extauth = gelSchema("ext::auth");

export const identityInExtauth = extauth.table(
  "Identity",
  {
    id: uuid()
      .default(sql`uuid_generate_v4()`)
      .primaryKey()
      .notNull(),
    createdAt: timestamptz("created_at")
      .default(sql`(clock_timestamp())`)
      .notNull(),
    issuer: text().notNull(),
    modifiedAt: timestamptz("modified_at").notNull(),
    subject: text().notNull(),
  },
  (table) => [
    uniqueIndex("6bc2dd19-bce4-5810-bb1b-7007afe97a11;schemaconstr").using(
      "btree",
      table.id.asc().nullsLast().op("uuid_ops"),
    ),
  ],
);

export const user = gelTable(
  "User",
  {
    id: uuid()
      .default(sql`uuid_generate_v4()`)
      .primaryKey()
      .notNull(),
    email: text().notNull(),
    identityId: uuid("identity_id").notNull(),
    username: text().notNull(),
  },
  (table) => [
    uniqueIndex("d504514c-26a7-11f0-b836-81aa188c0abe;schemaconstr").using(
      "btree",
      table.id.asc().nullsLast().op("uuid_ops"),
    ),
    foreignKey({
      columns: [table.identityId],
      foreignColumns: [identityInExtauth.id],
      name: "User_fk_identity",
    }),
  ],
);
```

🎉 Now you can use the `auth` tables in your queries!

Source: https://orm.drizzle.team/docs/include-or-exclude-columns

import Section from "@mdx/Section.astro";
import IsSupportedChipGroup from "@mdx/IsSupportedChipGroup.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';
import Callout from "@mdx/Callout.astro";

\<IsSupportedChipGroup chips={{PostgreSQL: true, MySQL: true, SQLite: true}}/>

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) and [SQLite](/docs/get-started-sqlite)
- [Select statement](/docs/select)
- [Get typed table columns](/docs/goodies#get-typed-table-columns)
- [Joins](/docs/joins)
- [Relational queries](/docs/rqb)
- [Partial select with relational queries](/docs/rqb#partial-fields-select)
</Prerequisites>

Drizzle has flexible API for including or excluding columns in queries. To include all columns you can use `.select()` method like this:

\<CodeTabs items={\["index.ts", "schema.ts"]}> <CodeTab>
\`\`\`ts copy {5}
import { posts } from './schema';

````
const db = drizzle(...);

await db.select().from(posts);
```

```ts
// result type
type Result = {
  id: number;
  title: string;
  content: string;
  views: number;
}[];
```
````

  </CodeTab>

````ts copy
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  views: integer('views').notNull().default(0),
});
  ```
</CodeTabs>

To include specific columns you can use `.select()` method like this:

<Section>
```ts copy {1}
await db.select({ title: posts.title }).from(posts);
````

```ts
// result type
type Result = {
  title: string;
}[];
```

</Section>

To include all columns with extra columns you can use `getColumns()` utility function like this:

<Callout type='warning'>
`getColumns` available starting from `drizzle-orm@1.0.0-beta.2`(read more [here](/docs/upgrade-v1))

If you are on pre-1 version(like `0.45.1`) then use `getTableColumns` </Callout>

<Section>
  ```ts copy {5,6}
  import { getColumns, sql } from 'drizzle-orm';

await db
.select({
...getColumns(posts),
titleLength: sql<number>`length(${posts.title})`,
})
.from(posts);

````

```ts
// result type
type Result = {
  id: number;
  title: string;
  content: string;
  views: number;
  titleLength: number;
}[];
````

</Section>

To exclude columns you can use `getColumns()` utility function like this:

<Callout type='warning'>
`getColumns` available starting from `drizzle-orm@1.0.0-beta.2`(read more [here](/docs/upgrade-v1))

If you are on pre-1 version(like `0.45.1`) then use `getTableColumns` </Callout>

<Section>
  ```ts copy {3,5}
  import { getColumns } from 'drizzle-orm';

const { content, ...rest } = getColumns(posts); // exclude "content" column

await db.select({ ...rest }).from(posts); // select all other columns

````

```ts
// result type
type Result = {
  id: number;
  title: string;
  views: number;
}[];
````

</Section>

This is how you can include or exclude columns with joins:

\<CodeTabs items={\["index.ts", "schema.ts"]}> <CodeTab>
\`\`\`ts copy {5,9,10,11}
import { eq, getColumns } from 'drizzle-orm';
import { comments, posts, users } from './db/schema';

````
// exclude "userId" and "postId" columns from "comments"
const { userId, postId, ...rest } = getColumns(comments);

await db
  .select({
    postId: posts.id, // include "id" column from "posts"
    comment: { ...rest }, // include all other columns
    user: users, // equivalent to getColumns(users)
  })
  .from(posts)
  .leftJoin(comments, eq(posts.id, comments.postId))
  .leftJoin(users, eq(users.id, posts.userId));
```

```ts
// result type
type Result = {
  postId: number;
  comment: {
    id: number;
    content: string;
    createdAt: Date;
  } | null;
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
}[];
```
````

  </CodeTab>

```ts copy
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  views: integer("views").notNull().default(0),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  postId: integer("post_id")
    .notNull()
    .references(() => posts.id),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
```

</CodeTabs>

Drizzle has useful relational queries API, that lets you easily include or exclude columns in queries. This is how you can include all columns:

\<CodeTabs items={\["index.ts", "schema.ts"]}> <CodeTab>
\`\`\`ts copy {5,7,8,9,12,13,14,17,18,19,20,21,22}
import \* as schema from './schema';

````
const db = drizzle(..., { schema });

await db.query.posts.findMany();
```

```ts
// result type
type Result = {
  id: number;
  title: string;
  content: string;
  views: number;
}[]
```
````

  </CodeTab>

````ts copy
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  views: integer('views').notNull().default(0),
});
  ```
</CodeTabs>

This is how you can include specific columns using relational queries:

<Section>
```ts copy {2,3,4}
await db.query.posts.findMany({
  columns: {
    title: true,
  },
});
````

```ts
// result type
type Result = {
  title: string;
}[];
```

</Section>

This is how you can include all columns with extra columns using relational queries:

<Section>
  ```ts copy {4,5,6}
  import { sql } from 'drizzle-orm';

await db.query.posts.findMany({
extras: {
titleLength: sql<number>`length(${posts.title})`.as('title_length'),
},
});

````

```ts
// result type
type Result = {
  id: number;
  title: string;
  content: string;
  views: number;
  titleLength: number;
}[];
````

</Section>

This is how you can exclude columns using relational queries:

<Section>
  ```ts copy {2,3,4}
  await db.query.posts.findMany({
    columns: {
      content: false,
    },
  });
  ```

```ts
// result type
type Result = {
  id: number;
  title: string;
  views: number;
}[];
```

</Section>

This is how you can include or exclude columns with relations using relational queries:

\<CodeTabs items={\["index.ts", "schema.ts"]}> <CodeTab>

```ts copy {7,12,13,16}
import * as schema from './schema';

const db = drizzle(..., { schema });

await db.query.posts.findMany({
  columns: {
    id: true, // include "id" column
  },
  with: {
    comments: {
      columns: {
        userId: false, // exclude "userId" column
        postId: false, // exclude "postId" column
      },
    },
    user: true, // include all columns from "users" table
  },
});
```

```ts
// result type
type Result = {
  id: number;
  user: {
    id: number;
    name: string;
    email: string;
  };
  comments: {
    id: number;
    content: string;
    createdAt: Date;
  }[];
}[];
```

  </CodeTab>

```ts copy
import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  views: integer("views").notNull().default(0),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  postId: integer("post_id")
    .notNull()
    .references(() => posts.id),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
  comments: many(comments),
}));

export const postsRelations = relations(posts, ({ many, one }) => ({
  comments: many(comments),
  user: one(users, { fields: [posts.userId], references: [users.id] }),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  post: one(posts, { fields: [comments.postId], references: [posts.id] }),
  user: one(users, { fields: [comments.userId], references: [users.id] }),
}));
```

</CodeTabs>

This is how you can create custom solution for conditional select:

\<CodeTabs items={\["index.ts", "schema.ts"]}> <CodeTab>
\`\`\`ts copy {7}
import { posts } from './schema';

````
const searchPosts = async (withTitle = false) => {
  await db
    .select({
      id: posts.id,
      ...(withTitle && { title: posts.title }),
    })
    .from(posts);
};

await searchPosts();
await searchPosts(true);
```

```ts
// result type
type Result = {
  id: number;
  title?: string | undefined;
}[];
```
````

  </CodeTab>

````ts copy
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  views: integer('views').notNull().default(0),
});
  ```
</CodeTabs>


Source: https://orm.drizzle.team/docs/incrementing-a-value

import Section from "@mdx/Section.astro";
import IsSupportedChipGroup from "@mdx/IsSupportedChipGroup.astro";
import Prerequisites from "@mdx/Prerequisites.astro";

<IsSupportedChipGroup chips={{PostgreSQL: true, MySQL: true, SQLite: true}}/>

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) and [SQLite](/docs/get-started-sqlite)
- [Update statement](/docs/update)
- [Filters](/docs/operators) and [sql operator](/docs/sql)
</Prerequisites>

To increment a column value you can use `update().set()` method like below:

<Section>
```ts copy {8}
import { eq, sql } from 'drizzle-orm';

const db = drizzle(...)

await db
.update(table)
.set({
  counter: sql`${table.counter} + 1`,
})
.where(eq(table.id, 1));
````

```sql
update "table" set "counter" = "counter" + 1 where "id" = 1;
```

</Section>

Drizzle has simple and flexible API, which lets you easily create custom solutions. This is how you do custom increment function:

```ts copy {4,10,11}
import { AnyColumn } from "drizzle-orm";

const increment = (column: AnyColumn, value = 1) => {
  return sql`${column} + ${value}`;
};

await db
  .update(table)
  .set({
    counter1: increment(table.counter1),
    counter2: increment(table.counter2, 10),
  })
  .where(eq(table.id, 1));
```

Source: https://orm.drizzle.team/docs/limit-offset-pagination

import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';
import Section from "@mdx/Section.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import IsSupportedChipGroup from "@mdx/IsSupportedChipGroup.astro";

\<IsSupportedChipGroup chips={{PostgreSQL: true, MySQL: true, SQLite: true}}/>

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) and [SQLite](/docs/get-started-sqlite)
- [Select statement](/docs/select) with [order by clause](/docs/select#order-by) and [limit & offset clauses](/docs/select#limit--offset)
- [Relational queries](/docs/rqb) with [order by clause](/docs/rqb#order-by) and [limit & offset clauses](/docs/rqb#limit--offset)
- [Dynamic query building](/docs/dynamic-query-building)
</Prerequisites>

This guide demonstrates how to implement `limit/offset` pagination in Drizzle:

\<CodeTabs items={\["index.ts", "schema.ts"]}> <CodeTab>
\`\`\`ts copy {9,10,11}
import { asc } from 'drizzle-orm';
import { users } from './schema';

````
const db = drizzle(...);

await db
  .select()
  .from(users)
  .orderBy(asc(users.id)) // order by is mandatory
  .limit(4) // the number of rows to return
  .offset(4); // the number of rows to skip
```

```sql
select * from users order by id asc limit 4 offset 4;
```

```ts
// 5-8 rows returned
[
  {
    id: 5,
    firstName: 'Beth',
    lastName: 'Davis',
    createdAt: 2024-03-11T20:51:46.787Z
  },
  {
    id: 6,
    firstName: 'Charlie',
    lastName: 'Miller',
    createdAt: 2024-03-11T21:15:46.787Z
  },
  {
    id: 7,
    firstName: 'Clara',
    lastName: 'Wilson',
    createdAt: 2024-03-11T21:33:46.787Z
  },
  {
    id: 8,
    firstName: 'David',
    lastName: 'Moore',
    createdAt: 2024-03-11T21:45:46.787Z
  }
]
```
````

  </CodeTab>
  <CodeTab>
    ```ts copy
    import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

````
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
```

```plaintext
+----+------------+-----------+----------------------------+
| id | first_name | last_name |         created_at         |
+----+------------+-----------+----------------------------+
|  1 | Alice      | Johnson   | 2024-03-08 12:23:55.251797 |
+----+------------+-----------+----------------------------+
|  2 | Alex       | Smith     | 2024-03-08 12:25:55.182    |
+----+------------+-----------+----------------------------+
|  3 | Aaron      | Williams  | 2024-03-08 12:28:55.182    |
+----+------------+-----------+----------------------------+
|  4 | Brian      | Brown     | 2024-03-08 12:34:55.182    |
+----+------------+-----------+----------------------------+
|  5 | Beth       | Davis     | 2024-03-08 12:40:55.182    |
+----+------------+-----------+----------------------------+
|  6 | Charlie    | Miller    | 2024-03-08 13:04:55.182    |
+----+------------+-----------+----------------------------+
|  7 | Clara      | Wilson    | 2024-03-08 13:22:55.182    |
+----+------------+-----------+----------------------------+
|  8 | David      | Moore     | 2024-03-08 13:34:55.182    |
+----+------------+-----------+----------------------------+
```
````

  </CodeTab>
</CodeTabs>

Limit is the number of rows to return `(page size)` and offset is the number of rows to skip `((page number - 1) * page size)`.
For consistent pagination, ensure ordering by a unique column. Otherwise, the results can be inconsistent.

If you need to order by a non-unique column, you should also append a unique column to the ordering.

This is how you can implement `limit/offset` pagination with 2 columns:

<Section>
```ts copy {5}
const getUsers = async (page = 1, pageSize = 3) => {
  await db
    .select()
    .from(users)
    .orderBy(asc(users.firstName), asc(users.id)) // order by first_name (non-unique), id (pk)
    .limit(pageSize) 
    .offset((page - 1) * pageSize);
}

await getUsers();

````
</Section>

Drizzle has useful relational queries API, that lets you easily implement `limit/offset` pagination:

<Section>
```ts copy {7,8,9}
import * as schema from './db/schema';

const db = drizzle({ schema });

const getUsers = async (page = 1, pageSize = 3) => {
  await db.query.users.findMany({
    orderBy: (users, { asc }) => asc(users.id),
    limit: pageSize,
    offset: (page - 1) * pageSize,
  });
};

await getUsers();
````

</Section>

Drizzle has simple and flexible API, which lets you easily create custom solutions. This is how you can create custom function for pagination using `.$dynamic()` function:

<Section>
```ts copy {11,12,13,16}
import { SQL, asc } from 'drizzle-orm';
import { PgColumn, PgSelect } from 'drizzle-orm/pg-core';

function withPagination(
qb: T,
orderByColumn: PgColumn | SQL | SQL.Aliased,
page = 1,
pageSize = 3,
) {
return qb
.orderBy(orderByColumn)
.limit(pageSize)
.offset((page - 1) \* pageSize);
}

const query = db.select().from(users); // query that you want to execute with pagination

await withPagination(query.$dynamic(), asc(users.id));

````

</Section>

You can improve performance of `limit/offset` pagination by using `deferred join` technique. This method performs the pagination on a subset of the data instead of the entire table.

To implement it you can do like this:

```ts copy {10}
const getUsers = async (page = 1, pageSize = 10) => {
   const sq = db
    .select({ id: users.id })
    .from(users)
    .orderBy(users.id)
    .limit(pageSize)
    .offset((page - 1) * pageSize)
    .as('subquery');

   await db.select().from(users).innerJoin(sq, eq(users.id, sq.id)).orderBy(users.id);
};
````

**Benefits** of `limit/offset` pagination: it's simple to implement and pages are easily reachable, which means that you can navigate to any page without having to save the state of the previous pages.

**Drawbacks** of `limit/offset` pagination: degradation in query performance with increasing offset because database has to scan all rows before the offset to skip them, and inconsistency due to data shifts, which can lead to the same row being returned on different pages or rows being skipped.

This is how it works:

<Section>
```ts copy
const getUsers = async (page = 1, pageSize = 3) => {
  await db
    .select()
    .from(users)
    .orderBy(asc(users.id))
    .limit(pageSize)
    .offset((page - 1) * pageSize);
};

// user is browsing the first page
await getUsers();

````

```ts
// results for the first page
[
  {
    id: 1,
    firstName: 'Alice',
    lastName: 'Johnson',
    createdAt: 2024-03-10T17:17:06.148Z
  },
  {
    id: 2,
    firstName: 'Alex',
    lastName: 'Smith',
    createdAt: 2024-03-10T17:19:06.147Z
  },
  {
    id: 3,
    firstName: 'Aaron',
    lastName: 'Williams',
    createdAt: 2024-03-10T17:22:06.147Z
  }
]
````

```ts
// while user is browsing the first page, a row with id 2 is deleted
await db.delete(users).where(eq(users.id, 2));

// user navigates to the second page
await getUsers(2);
```

```ts
// second page, row with id 3 was skipped
[
  {
    id: 5,
    firstName: 'Beth',
    lastName: 'Davis',
    createdAt: 2024-03-10T17:34:06.147Z
  },
  {
    id: 6,
    firstName: 'Charlie',
    lastName: 'Miller',
    createdAt: 2024-03-10T17:58:06.147Z
  },
  {
    id: 7,
    firstName: 'Clara',
    lastName: 'Wilson',
    createdAt: 2024-03-10T18:16:06.147Z
  }
]
```

</Section>

So, if your database experiences frequently insert and delete operations in real time or you need high performance to paginate large tables, you should consider using [cursor-based](/docs/guides/cursor-based-pagination) pagination instead.

To learn more about `deferred join` technique you should follow these guides: [Planetscale Pagination Guide](https://planetscale.com/blog/mysql-pagination) and [Efficient Pagination Guide by Aaron Francis](https://aaronfrancis.com/2022/efficient-pagination-using-deferred-joins).

Source: https://orm.drizzle.team/docs/mysql-local-setup

import Section from "@mdx/Section.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';
import Steps from '@mdx/Steps.astro';

<Prerequisites>
- Install latest [Docker Desktop](https://www.docker.com/products/docker-desktop/). Follow the instructions for your operating system.
</Prerequisites>

<Steps>

#### Pull the MySQL image

Pull the latest MySQL image from Docker Hub. In your terminal, run `docker pull mysql` to pull the latest MySQL version from Docker Hub:

```bash copy
docker pull mysql
```

Alternatively, you can pull preferred version with a specific tag:

```bash copy
docker pull mysql:8.2
```

When MySQL image is downloaded, you can check it in `Images` tab in Docker Desktop or by running `docker images`:

<Section>
```bash copy
docker images
```

```plaintext
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
mysql        latest    4e8a34aea708   2 months ago   609MB
```

</Section>

#### Start a MySQL instance

To start a new MySQL container, run the following command:

```bash copy
docker run --name drizzle-mysql -e MYSQL_ROOT_PASSWORD=mypassword -d -p 3306:3306 mysql
```

1. The `--name` option assigns the container the name `drizzle-mysql`.
2. The `-e MYSQL_ROOT_PASSWORD=` option sets the `MYSQL_ROOT_PASSWORD` environment variable with the specified value. This is password for the root user.
3. The `-d` flag runs the container in detached mode (in the background).
4. The `-p` option maps port `3306` on the container to port `3306` on your host machine, allowing MySQL to be accessed from your host system through this port.
5. The `mysql` argument specifies the image to use for the container. You can also specify other versions like `mysql:8.2`.

You can also specify other parameters like:

1. `-e MYSQL_DATABASE=` to create a new database when the container is created. Default is `mysql`.
2. `-e MYSQL_USER=` and `-e MYSQL_PASSWORD=` to create a new user with a password when the container is created. But you still need to specify `MYSQL_ROOT_PASSWORD` for `root` user.

To check if the container is running, check `Containers` tab in Docker Desktop or use the `docker ps` command:

```plaintext
CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS          PORTS                               NAMES
19506a8dc12b   mysql         "docker-entrypoint.s…"   4 seconds ago    Up 3 seconds    33060/tcp, 0.0.0.0:3306->3306/tcp   drizzle-mysql
```

#### Configure database url

To connect to the MySQL database, you need to provide the database URL. The URL format is:

```plaintext
mysql://:@:/
```

You should replace placeholders with your actual values. For example, for created container the url will be:

```plaintext
mysql://root:mypassword@localhost:3306/mysql
```

Now you can connect to the database using the URL in your application. </Steps>

Source: https://orm.drizzle.team/docs/point-datatype-psql

import Section from "@mdx/Section.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';
import Callout from '@mdx/Callout.astro';

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql)
- [Point datatype](/docs/column-types/pg#point)
- [Filtering in select statement](/docs/select#filtering)
- [sql operator](/docs/sql)
</Prerequisites>

PostgreSQL has a special datatype to store geometric data called `point`. It is used to represent a point in a two-dimensional space. The point datatype is represented as a pair of `(x, y)` coordinates.
The point expects to receive longitude first, followed by latitude.

<Section>
```ts copy {6}
import { sql } from 'drizzle-orm';

const db = drizzle(...);

await db.execute(
sql`select point(-90.9, 18.7)`,
);

````

```json
[
  {
    point: '(-90.9,18.7)'
  }
]
````

</Section>

This is how you can create table with `point` datatype in Drizzle:

```ts {6}
import { pgTable, point, serial, text } from "drizzle-orm/pg-core";

export const stores = pgTable("stores", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  location: point("location", { mode: "xy" }).notNull(),
});
```

This is how you can insert point data into the table in Drizzle:

```ts {4, 10, 16}
// mode: 'xy'
await db.insert(stores).values({
  name: "Test",
  location: { x: -90.9, y: 18.7 },
});

// mode: 'tuple'
await db.insert(stores).values({
  name: "Test",
  location: [-90.9, 18.7],
});

// sql raw
await db.insert(stores).values({
  name: "Test",
  location: sql`point(-90.9, 18.7)`,
});
```

To compute the distance between the objects you can use `<->` operator. This is how you can query for the nearest location by coordinates in Drizzle:

<Callout type='warning'>
`getColumns` available starting from `drizzle-orm@1.0.0-beta.2`(read more [here](/docs/upgrade-v1))

If you are on pre-1 version(like `0.45.1`) then use `getTableColumns` </Callout>

<Section>
```ts {9, 14, 17}
import { getColumns, sql } from 'drizzle-orm';
import { stores } from './schema';

const point = {
x: -73.935_242,
y: 40.730_61,
};

const sqlDistance = sql`location <-> point(${point.x}, ${point.y})`;

await db
.select({
...getColumns(stores),
distance: sql`round((${sqlDistance})::numeric, 2)`,
})
.from(stores)
.orderBy(sqlDistance)
.limit(1);

````

```sql
select *, round((location <-> point(-73.935242, 40.73061))::numeric, 2)
from stores order by location <-> point(-73.935242, 40.73061)
limit 1;
````

</Section>

To filter rows to include only those where a `point` type `location` falls within a specified rectangular boundary defined by two diagonal points you can user `<@` operator. It checks if the first object is contained in or on the second object:

<Section>
```ts {12}
const point = {
  x1: -88,
  x2: -73,
  y1: 40,
  y2: 43,
};

await db
.select()
.from(stores)
.where(
sql`${stores.location} <@ box(point(${point.x1}, ${point.y1}), point(${point.x2}, ${point.y2}))`
);

````

```sql
select * from stores where location <@ box(point(-88, 40), point(-73, 43));
````

</Section>

Source: https://orm.drizzle.team/docs/postgis-geometry-point

import Section from "@mdx/Section.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import Callout from "@mdx/Callout.astro";
import CodeTab from '@mdx/CodeTab.astro';

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql)
- [Postgis extension](/docs/extensions/pg#postgis)
- [Indexes](/docs/indexes-constraints#indexes)
- [Filtering in select statement](/docs/select#filtering)
- [sql operator](/docs/sql)
</Prerequisites>

`PostGIS` extends the capabilities of the PostgreSQL relational database by adding support for storing, indexing, and querying geospatial data.

As for now, Drizzle doesn't create extension automatically, so you need to create it manually. Create an empty migration file and add SQL query:

<Section>
```bash
npx drizzle-kit generate --custom
```

```sql
CREATE EXTENSION postgis;
```

</Section>

This is how you can create table with `geometry` datatype and spatial index in Drizzle:

\<CodeTabs items={\["schema.ts", "migration.sql"]}> <CodeTab>

```ts copy {8, 11}
import { geometry, index, pgTable, serial, text } from "drizzle-orm/pg-core";

export const stores = pgTable(
  "stores",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    location: geometry("location", {
      type: "point",
      mode: "xy",
      srid: 4326,
    }).notNull(),
  },
  (t) => [index("spatial_index").using("gist", t.location)],
);
```

  </CodeTab>
  ```sql
  CREATE TABLE IF NOT EXISTS "stores" (
	  "id" serial PRIMARY KEY NOT NULL,
	  "name" text NOT NULL,
	  "location" geometry(point) NOT NULL
  );
  --> statement-breakpoint
  CREATE INDEX IF NOT EXISTS "spatial_index" ON "stores" USING gist ("location");
  ```
</CodeTabs>

This is how you can insert `geometry` data into the table in Drizzle. `ST_MakePoint()` in PostGIS creates a geometric object of type `point` using the specified coordinates.
`ST_SetSRID()` sets the `SRID` (unique identifier associated with a specific coordinate system, tolerance, and resolution) on a geometry to a particular integer value:

```ts {4, 10, 16}
// mode: 'xy'
await db.insert(stores).values({
  name: "Test",
  location: { x: -90.9, y: 18.7 },
});

// mode: 'tuple'
await db.insert(stores).values({
  name: "Test",
  location: [-90.9, 18.7],
});

// sql raw
await db.insert(stores).values({
  name: "Test",
  location: sql`ST_SetSRID(ST_MakePoint(-90.9, 18.7), 4326)`,
});
```

To compute the distance between the objects you can use `<->` operator and `ST_Distance()` function, which for `geometry types` returns the minimum planar distance between two geometries. This is how you can query for the nearest location by coordinates in Drizzle with PostGIS:

<Callout type='warning'>
`getColumns` available starting from `drizzle-orm@1.0.0-beta.2`(read more [here](/docs/upgrade-v1))

If you are on pre-1 version(like `0.45.1`) then use `getTableColumns` </Callout>

<Section>
```ts copy {9, 14, 17}
import { getColumns, sql } from 'drizzle-orm';
import { stores } from './schema';

const point = {
x: -73.935_242,
y: 40.730_61,
};

const sqlPoint = sql`ST_SetSRID(ST_MakePoint(${point.x}, ${point.y}), 4326)`;

await db
.select({
...getColumns(stores),
distance: sql`ST_Distance(${stores.location}, ${sqlPoint})`,
})
.from(stores)
.orderBy(sql`${stores.location} <-> ${sqlPoint}`)
.limit(1);

````

```sql
select *, ST_Distance(location, ST_SetSRID(ST_MakePoint(-73.935_242, 40.730_61), 4326))
from stores order by location <-> ST_SetSRID(ST_MakePoint(-73.935_242, 40.730_61), 4326)
limit 1;
````

</Section>

To filter stores located within a specified rectangular area, you can use `ST_MakeEnvelope()` and `ST_Within()` functions. `ST_MakeEnvelope()` creates a rectangular Polygon from the minimum and maximum values for X and Y. `ST_Within()` Returns TRUE if geometry A is within geometry B.

<Section>
```ts copy {13}
const point = {
  x1: -88,
  x2: -73,
  y1: 40,
  y2: 43,
};

await db
.select()
.from(stores)
.where(
sql`ST_Within(
      ${stores.location}, ST_MakeEnvelope(${point.x1}, ${point.y1}, ${point.x2}, ${point.y2}, 4326)
    )`,
);

````

```sql
select * from stores where ST_Within(location, ST_MakeEnvelope(-88, 40, -73, 43, 4326));
````

</Section>

Source: https://orm.drizzle.team/docs/postgresql-full-text-search

import Section from "@mdx/Section.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';
import Callout from '@mdx/Callout.astro';

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql)
- [Select statement](/docs/select)
- [Indexes](/docs/indexes-constraints#indexes)
- [sql operator](/docs/sql)
- You should have `drizzle-orm@0.31.0` and `drizzle-kit@0.22.0` or higher.  
</Prerequisites>

This guide demonstrates how to implement full-text search in PostgreSQL with Drizzle ORM. Full-text search is a technique used to search for text within a document or a set of documents. A document is the unit of searching in a full text search system. PostgreSQL provides a set of functions to work with full-text search, such as `to_tsvector` and `to_tsquery`:

The `to_tsvector` function parses a textual document into tokens, reduces the tokens to lexemes, and returns a `tsvector` which lists the lexemes together with their positions in the document:

<Section>
```ts copy {6}
import { sql } from 'drizzle-orm';

const db = drizzle(...);

await db.execute(
sql`select to_tsvector('english', 'Guide to PostgreSQL full-text search with Drizzle ORM')`,
);

````

```json
[
  {
    to_tsvector: "'drizzl':9 'full':5 'full-text':4
    'guid':1 'orm':10 'postgresql':3 'search':7 'text':6"
  }
]
````

</Section>

The `to_tsquery` function converts a keyword to normalized tokens and returns a `tsquery` that matches the lexemes in a `tsvector`. The `@@` operator is used for direct matches:

<Section>
```ts copy {2, 3}
await db.execute(
  sql`select to_tsvector('english', 'Guide to PostgreSQL full-text search with Drizzle ORM')
    @@ to_tsquery('english', 'Drizzle') as match`,
);
```

```json
[{ "match": true }]
```

</Section>

As for now, Drizzle doesn't support `tsvector` type natively, so you need to convert your data in the `text` column on the fly. To enhance the performance, you can create a `GIN` index on your column like this:

\<CodeTabs items={\["schema.ts", "migration.sql", "db_data"]}> <CodeTab>

```ts copy {10, 11}
import { index, pgTable, serial, text } from "drizzle-orm/pg-core";

export const posts = pgTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
  },
  (table) => [
    index("title_search_index").using(
      "gin",
      sql`to_tsvector('english', ${table.title})`,
    ),
  ],
);
```

  </CodeTab>
  <CodeTab>
  ```sql
  CREATE TABLE IF NOT EXISTS "posts" (
          "id" serial PRIMARY KEY NOT NULL,
          "title" text NOT NULL
  );

CREATE INDEX IF NOT EXISTS "title_search_index" ON "posts"
USING gin (to_tsvector('english', "title"));

````
</CodeTab>
```json
[
  { id: 1, title: 'Planning Your First Trip to Europe' },
  { id: 2, title: "Cultural Insights: Exploring Asia's Heritage" },
  { id: 3, title: 'Top 5 Destinations for a Family Trip' },
  { id: 4, title: 'Essential Hiking Gear for Mountain Enthusiasts' },
  { id: 5, title: 'Trip Planning: Choosing Your Next Destination' },
  { id: 6, title: 'Discovering Hidden Culinary Gems in Italy' },
  { id: 7, title: 'The Ultimate Road Trip Guide for Explorers' },
];
````

</CodeTabs>

To implement full-text search in PostgreSQL with Drizzle ORM, you can use the `to_tsvector` and `to_tsquery` functions with `sql` operator:

<Section>
```ts copy {9}
import { sql } from 'drizzle-orm';
import { posts } from './schema';

const title = 'trip';

await db
.select()
.from(posts)
.where(sql`to_tsvector('english', ${posts.title}) @@ to_tsquery('english', ${title})`);

````

```json
[
  { id: 1, title: 'Planning Your First Trip to Europe' },
  { id: 3, title: 'Top 5 Destinations for a Family Trip' },
  { id: 5, title: 'Trip Planning: Choosing Your Next Destination' },
  { id: 7, title: 'The Ultimate Road Trip Guide for Explorers' }
]
````

</Section>

To match by any of the keywords, you can use the `|` operator:

<Section>
```ts copy {6}
const title = 'Europe | Asia';

await db
.select()
.from(posts)
.where(sql`to_tsvector('english', ${posts.title}) @@ to_tsquery('english', ${title})`);

````

```json
[
  { id: 1, title: 'Planning Your First Trip to Europe' },
  { id: 2, title: "Cultural Insights: Exploring Asia's Heritage" }
]
````

</Section>

To match multiple keywords, you can use the `plainto_tsquery` function:

<Section>
```ts copy {7}
// 'discover & Italy'
const title = 'discover Italy';

await db
.select()
.from(posts)
.where(sql`to_tsvector('english', ${posts.title}) @@ plainto_tsquery('english', ${title})`);

````

```sql
select * from posts
  where to_tsvector('english', title) @@ plainto_tsquery('english', 'discover Italy');
````

```json
[{ "id": 6, "title": "Discovering Hidden Culinary Gems in Italy" }]
```

</Section>

To match a phrase, you can use the `phraseto_tsquery` function:

<Section>
```ts copy {8}
// if you query by "trip family", it will not return any result
// 'family <-> trip'
const title = 'family trip';

await db
.select()
.from(posts)
.where(sql`to_tsvector('english', ${posts.title}) @@ phraseto_tsquery('english', ${title})`);

````

```sql
select * from posts
  where to_tsvector('english', title) @@ phraseto_tsquery('english', 'family trip');
````

```json
[{ "id": 3, "title": "Top 5 Destinations for a Family Trip" }]
```

</Section>

You can also use `websearch_to_tsquery` function which is a simplified version of `to_tsquery` with an alternative syntax, similar to the one used by web search engines:

<Section>
```ts copy {7}
// 'family | first & trip & europ | asia'
const title = 'family or first trip Europe or Asia';

await db
.select()
.from(posts)
.where(sql`to_tsvector('english', ${posts.title}) @@ websearch_to_tsquery('english', ${title})`);

````

```sql
select * from posts
  where to_tsvector('english', title)
  @@ websearch_to_tsquery('english', 'family or first trip Europe or Asia');
````

```json
[
  { "id": 1, "title": "Planning Your First Trip to Europe" },
  { "id": 2, "title": "Cultural Insights: Exploring Asia's Heritage" },
  { "id": 3, "title": "Top 5 Destinations for a Family Trip" }
]
```

</Section>

To implement full-text search on multiple columns, you can create index on multiple columns and concatenate the columns with `to_tsvector` function:

\<CodeTabs items={\["schema.ts", "migration.sql", "db_data"]}> <CodeTab>

```ts copy {12-17}
import { sql } from "drizzle-orm";
import { index, pgTable, serial, text } from "drizzle-orm/pg-core";

export const posts = pgTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
  },
  (table) => [
    index("search_index").using(
      "gin",
      sql`(
          setweight(to_tsvector('english', ${table.title}), 'A') ||
          setweight(to_tsvector('english', ${table.description}), 'B')
      )`,
    ),
  ],
);
```

  </CodeTab>
  <CodeTab>
  ```sql
  CREATE TABLE IF NOT EXISTS "posts" (
        "id" serial PRIMARY KEY NOT NULL,
        "title" text NOT NULL,
        "description" text NOT NULL
  );

CREATE INDEX IF NOT EXISTS "search_index" ON "posts"
USING gin ((setweight(to_tsvector('english', "title"), 'A') ||
setweight(to_tsvector('english', "description"), 'B')));

````
</CodeTab>
```json
[
  {
    id: 1,
    title: 'Planning Your First Trip to Europe',
    description:
      'Get essential tips on budgeting, sightseeing, and cultural etiquette for your inaugural European adventure.',
  },
  {
    id: 2,
    title: "Cultural Insights: Exploring Asia's Heritage",
    description:
      'Dive deep into the rich history and traditions of Asia through immersive experiences and local interactions.',
  },
  {
    id: 3,
    title: 'Top 5 Destinations for a Family Trip',
    description:
      'Discover family-friendly destinations that offer fun, education, and relaxation for all ages.',
  },
  {
    id: 4,
    title: 'Essential Hiking Gear for Mountain Enthusiasts',
    description:
      'Equip yourself with the latest and most reliable gear for your next mountain hiking expedition.',
  },
  {
    id: 5,
    title: 'Trip Planning: Choosing Your Next Destination',
    description:
      'Learn how to select destinations that align with your travel goals, whether for leisure, adventure, or cultural exploration.',
  },
  {
    id: 6,
    title: 'Discovering Hidden Culinary Gems in Italy',
    description:
      "Unearth Italy's lesser-known eateries and food markets that offer authentic and traditional flavors.",
  },
  {
    id: 7,
    title: 'The Ultimate Road Trip Guide for Explorers',
    description:
      'Plan your next great road trip with tips on route planning, packing, and discovering off-the-beaten-path attractions.',
  },
];
````

</CodeTabs>

The `setweight` function is used to label the entries of a tsvector with a given weight, where a weight is one of the letters A, B, C, or D. This is typically used to mark entries coming from different parts of a document, such as title versus body.

This is how you can query on multiple columns:

<Section>
```ts copy {5-7}
const title = 'plan';

await db.select().from(posts)
.where(sql`(
      setweight(to_tsvector('english', ${posts.title}), 'A') ||
      setweight(to_tsvector('english', ${posts.description}), 'B'))
      @@ to_tsquery('english', ${title}
    )`
);

````

```json
[
  {
    id: 1,
    title: 'Planning Your First Trip to Europe',
    description: 'Get essential tips on budgeting, sightseeing, and cultural etiquette for your inaugural European adventure.'
  },
  {
    id: 5,
    title: 'Trip Planning: Choosing Your Next Destination',
    description: 'Learn how to select destinations that align with your travel goals, whether for leisure, adventure, or cultural exploration.'
  },
  {
    id: 7,
    title: 'The Ultimate Road Trip Guide for Explorers',
    description: 'Plan your next great road trip with tips on route planning, packing, and discovering off-the-beaten-path attractions.'
  }
]
````

</Section>

To rank the search results, you can use the `ts_rank` or `ts_rank_cd` functions and `orderBy` method:

<Callout type='warning'>
`getColumns` available starting from `drizzle-orm@1.0.0-beta.2`(read more [here](/docs/upgrade-v1))

If you are on pre-1 version(like `0.45.1`) then use `getTableColumns` </Callout>

<Section>
```ts copy {6,7,12,13,18-20}
import { desc, getColumns, sql } from 'drizzle-orm';

const search = 'culture | Europe | Italy | adventure';

const matchQuery = sql`(
  setweight(to_tsvector('english', ${posts.title}), 'A') ||
  setweight(to_tsvector('english', ${posts.description}), 'B')), to_tsquery('english', ${search})`;

await db
.select({
...getColumns(posts),
rank: sql`ts_rank(${matchQuery})`,
rankCd: sql`ts_rank_cd(${matchQuery})`,
})
.from(posts)
.where(
sql`(
      setweight(to_tsvector('english', ${posts.title}), 'A') ||
      setweight(to_tsvector('english', ${posts.description}), 'B')
      ) @@ to_tsquery('english', ${search})`,
)
.orderBy((t) => desc(t.rank));

````

```json
[
  {
    id: 1,
    title: 'Planning Your First Trip to Europe',
    description: 'Get essential tips on budgeting, sightseeing, and cultural etiquette for your inaugural European adventure.',
    rank: 0.2735672,
    rankCd: 1.8
  },
  {
    id: 6,
    title: 'Discovering Hidden Culinary Gems in Italy',
    description: "Unearth Italy's lesser-known eateries and food markets that offer authentic and traditional flavors.",
    rank: 0.16717994,
    rankCd: 1.4
  },
  {
    id: 2,
    title: "Cultural Insights: Exploring Asia's Heritage",
    description: 'Dive deep into the rich history and traditions of Asia through immersive experiences and local interactions.',
    rank: 0.15198177,
    rankCd: 1
  },
  {
    id: 5,
    title: 'Trip Planning: Choosing Your Next Destination',
    description: 'Learn how to select destinations that align with your travel goals, whether for leisure, adventure, or cultural exploration.',
    rank: 0.12158542,
    rankCd: 0.8
  }
]
````

</Section>

The `ts_rank` function focuses on the frequency of query terms throughout the document. The `ts_rank_cd` function focuses on the proximity of query terms within the document.

Source: https://orm.drizzle.team/docs/postgresql-local-setup

import Section from "@mdx/Section.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';
import Steps from '@mdx/Steps.astro';

<Prerequisites>
- Install latest [Docker Desktop](https://www.docker.com/products/docker-desktop/). Follow the instructions for your operating system.
</Prerequisites>

<Steps>

#### Pull the PostgreSQL image

Pull the latest PostgreSQL image from Docker Hub. In your terminal, run `docker pull postgres` to pull the latest Postgres version from Docker Hub:

```bash copy
docker pull postgres
```

Alternatively, you can pull preferred version with a specific tag:

```bash copy
docker pull postgres:15
```

When postgres image is downloaded, you can check it in `Images` tab in Docker Desktop or by running `docker images`:

<Section>
```bash copy
docker images
```

```plaintext
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
postgres     latest    75282fa229a1   6 weeks ago     453MB
```

</Section>

#### Start a Postgres instance

To start a new PostgreSQL container, run the following command:

```bash copy
docker run --name drizzle-postgres -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
```

1. The `--name` option assigns the container the name `drizzle-postgres`.
2. The `-e POSTGRES_PASSWORD=` option sets the `POSTGRES_PASSWORD` environment variable with the specified value.
3. The `-d` flag runs the container in detached mode (in the background).
4. The `-p` option maps port `5432` on the container to port `5432` on your host machine, allowing PostgreSQL to be accessed from your host system through this port.
5. The `postgres` argument specifies the image to use for the container. You can also specify other versions like `postgres:15`.

You can also specify other parameters like:

1. The `-e POSTGRES_USER=` option sets the `POSTGRES_USER` environment variable with the specified value. Postgres uses the default user when this is empty. Most of the time, it is `postgres` and you can check it in the container logs in Docker Desktop or by running `docker logs <container_name>`.
2. The `-e POSTGRES_DB=` option sets the `POSTGRES_DB` environment variable with the specified value. Defaults to the `POSTGRES_USER` value when is empty.

To check if the container is running, check `Containers` tab in Docker Desktop or use the `docker ps` command:

```plaintext
CONTAINER ID   IMAGE      COMMAND                  CREATED         STATUS         PORTS                    NAMES
df957c58a6a3   postgres   "docker-entrypoint.s…"   4 seconds ago   Up 3 seconds   0.0.0.0:5432->5432/tcp   drizzle-postgres
```

#### Configure database url

To connect to the PostgreSQL database, you need to provide the database URL. The URL format is:

```plaintext
postgres://:@:/
```

You should replace placeholders with your actual values. For example, for created container the url will be:

```plaintext
postgres://postgres:mypassword@localhost:5432/postgres
```

Now you can connect to the database using the URL in your application. </Steps>

Source: https://orm.drizzle.team/docs/seeding-using-with-option

import IsSupportedChipGroup from "@mdx/IsSupportedChipGroup.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';
import Callout from '@mdx/Callout.astro';
import Section from "@mdx/Section.astro";

\<IsSupportedChipGroup chips={{PostgreSQL: true, MySQL: true, SQLite: true}}/>

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) or [SQLite](/docs/get-started-sqlite)
- Get familiar with [One-to-many Relation](/docs/relations#one-to-many)
- Get familiar with [Drizzle Seed](/docs/seed-overview)
</Prerequisites>

<Callout title='Warning'>
Using `with` implies tables to have a one-to-many relationship.

Therefore, if `one` user has `many` posts, you can use `with` as follows:

```ts
users: {
    count: 2,
    with: {
        posts: 3,
    },
},
```

</Callout>
