### Apollo Server

<Npm>drizzle-graphql @apollo/server graphql</Npm>

\<CodeTabs items={\['server.ts', 'schema.ts']}> <CodeTab>

```ts copy {1, 10}
import { buildSchema } from 'drizzle-graphql';
import { drizzle } from 'drizzle-orm/...';
import client from './db';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import * as dbSchema from './schema';

const db = drizzle({ client, schema: dbSchema });

const { schema } = buildSchema(db);

const server = new ApolloServer({ schema });
const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);
```

</CodeTab>
<CodeTab>
```typescript copy
import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
id: serial('id').primaryKey(),
name: text('name').notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
posts: many(posts),
}));

export const posts = pgTable('posts', {
id: serial('id').primaryKey(),
content: text('content').notNull(),
authorId: integer('author\_id').notNull(),
});

export const postsRelations = relations(posts, ({ one }) => ({
author: one(users, { fields: \[posts.authorId], references: \[users.id] }),
}));

````
</CodeTab>
</CodeTabs>

### GraphQL Yoga

<Npm>drizzle-graphql graphql-yoga graphql</Npm>

<CodeTabs items={['server.ts', 'schema.ts']}>
<CodeTab>
```ts copy {1, 10}
import { buildSchema } from 'drizzle-graphql';
import { drizzle } from 'drizzle-orm/...';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';

import * as dbSchema from './schema';

const db = drizzle({ schema: dbSchema });

const { schema } = buildSchema(db);

const yoga = createYoga({ schema });
const server = createServer(yoga);

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql');
});
````

</CodeTab>
<CodeTab>
```typescript copy
import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
id: serial('id').primaryKey(),
name: text('name').notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
posts: many(posts),
}));

export const posts = pgTable('posts', {
id: serial('id').primaryKey(),
content: text('content').notNull(),
authorId: integer('author\_id').notNull(),
});

export const postsRelations = relations(posts, ({ one }) => ({
author: one(users, { fields: \[posts.authorId], references: \[users.id] }),
}));

````
</CodeTab>
</CodeTabs>

## Customizing schema

<Callout type='info' emoji='ℹ️'>
`buildSchema()` produces schema and types using standard `graphql` SDK, so its output is compatible with any library that supports it.
</Callout>

If you want to customize your schema, you can use `entities` object to build your own new schema:

<CodeTabs items={['server.ts', 'schema.ts']}>
<CodeTab>
```ts {1, 11}
import { buildSchema } from 'drizzle-graphql';
import { drizzle } from 'drizzle-orm/...';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema } from 'graphql';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';

import * as dbSchema from './schema';

const db = drizzle({ schema: dbSchema });

const { entities } = buildSchema(db);

// You can customize which parts of queries or mutations you want
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      // Select only wanted queries out of all generated
      users: entities.queries.users,
      customer: entities.queries.customersSingle,

      // Create a custom one
      customUsers: {
        // You can reuse and customize types from original schema
        type: new GraphQLList(new GraphQLNonNull(entities.types.UsersItem)),
        args: {
          // You can reuse inputs as well
          where: {
            type: entities.inputs.UsersFilters
          },
        },
        resolve: async (source, args, context, info) => {
          // Your custom logic goes here...
          const result = await db.select(schema.users).where()...

          return result;
        },
      },
    },
  }),
  // Same rules apply to mutations
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: entities.mutations,
  }),
  // In case you need types inside your schema
  types: [...Object.values(entities.types), ...Object.values(entities.inputs)],
});

const yoga = createYoga({
  schema,
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql');
})
````

</CodeTab>
<CodeTab>
```typescript copy
import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
id: serial('id').primaryKey(),
name: text('name').notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
posts: many(posts),
}));

export const posts = pgTable('posts', {
id: serial('id').primaryKey(),
content: text('content').notNull(),
authorId: integer('author\_id').notNull(),
});

export const postsRelations = relations(posts, ({ one }) => ({
author: one(users, { fields: \[posts.authorId], references: \[users.id] }),
}));

````
</CodeTab>
</CodeTabs>


Source: https://orm.drizzle.team/docs/guides

import Guides from "@components/Guides.astro";

<Guides/>

Source: https://orm.drizzle.team/docs/conditional-filters-in-query

import Section from "@mdx/Section.astro";
import IsSupportedChipGroup from "@mdx/IsSupportedChipGroup.astro";
import Prerequisites from "@mdx/Prerequisites.astro";

<IsSupportedChipGroup chips={{PostgreSQL: true, MySQL: true, SQLite: true}}/>

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) and [SQLite](/docs/get-started-sqlite);
- [Select statement](/docs/select);
- [Filtering](/docs/select#filtering) and [Filter operators](/docs/operators);
</Prerequisites>

To pass a conditional filter in query you can use `.where()` method and logical operator like below:

<Section>
```ts copy {9}
import { ilike } from 'drizzle-orm';

const db = drizzle(...)

const searchPosts = async (term?: string) => {
  await db
    .select()
    .from(posts)
    .where(term ? ilike(posts.title, term) : undefined);
};

await searchPosts();
await searchPosts('AI');
````

```sql
select * from posts;
select * from posts where title ilike 'AI';
```

</Section>

To combine conditional filters you can use `and()` or `or()` operators like below:

<Section>
```ts copy {7,8,9,10,11,12,13}
import { and, gt, ilike, inArray } from 'drizzle-orm';

const searchPosts = async (term?: string, categories: string\[] = \[], views = 0) => {
await db
.select()
.from(posts)
.where(
and(
term ? ilike(posts.title, term) : undefined,
categories.length > 0 ? inArray(posts.category, categories) : undefined,
views > 100 ? gt(posts.views, views) : undefined,
),
);
};

await searchPosts();
await searchPosts('AI', \['Tech', 'Art', 'Science'], 200);

````

```sql
select * from posts;
select * from posts
  where (
    title ilike 'AI'
    and category in ('Tech', 'Science', 'Art')
    and views > 200
  );
````

</Section>

If you need to combine conditional filters in different part of the project you can create a variable, push filters and then use it in `.where()` method with `and()` or `or()` operators like below:

```ts copy {7,10}
import { SQL, ... } from 'drizzle-orm';

const searchPosts = async (filters: SQL[]) => {
  await db
    .select()
    .from(posts)
    .where(and(...filters));
};

const filters: SQL[] = [];
filters.push(ilike(posts.title, 'AI'));
filters.push(inArray(posts.category, ['Tech', 'Art', 'Science']));
filters.push(gt(posts.views, 200));

await searchPosts(filters);
```

Drizzle has useful and flexible API, which lets you create your custom solutions. This is how you can create a custom filter operator:

<Section>

```ts copy {5,14}
import { AnyColumn, ... } from 'drizzle-orm';

// length less than
const lenlt = (column: AnyColumn, value: number) => {
  return sql`length(${column}) < ${value}`;
};

const searchPosts = async (maxLen = 0, views = 0) => {
  await db
    .select()
    .from(posts)
    .where(
      and(
        maxLen ? lenlt(posts.title, maxLen) : undefined,
        views > 100 ? gt(posts.views, views) : undefined,
      ),
    );
};

await searchPosts(8);
await searchPosts(8, 200);
```

```sql
select * from posts where length(title) < 8;
select * from posts where (length(title) < 8 and views > 200);
```

</Section>

Drizzle filter operators are just SQL expressions under the hood. This is example of how `lt` operator is implemented in Drizzle:

```js
const lt = (left, right) => {
  return sql`${left} < ${bindIfParam(right, left)}`; // bindIfParam is internal magic function
};
```

Source: https://orm.drizzle.team/docs/count-rows

import Section from "@mdx/Section.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import IsSupportedChipGroup from "@mdx/IsSupportedChipGroup.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';
import Callout from '@mdx/Callout.astro';

\<IsSupportedChipGroup chips={{PostgreSQL: true, MySQL: true, SQLite: true}}/>

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) and [SQLite](/docs/get-started-sqlite)
- [Select statement](/docs/select)
- [Filters](/docs/operators) and [sql operator](/docs/sql)
- [Aggregations](/docs/select#aggregations) and [Aggregation helpers](/docs/select#aggregations-helpers)
- [Joins](/docs/joins)
</Prerequisites>

To count all rows in table you can use `count()` function or `sql` operator like below:

\<CodeTabs items={\["index.ts", "schema.ts"]}> <CodeTab>
\`\`\`ts copy {6,9}
import { count, sql } from 'drizzle-orm';
import { products } from './schema';

````
const db = drizzle(...);

await db.select({ count: count() }).from(products);

// Under the hood, the count() function casts its result to a number at runtime.
await db.select({ count: sql`count(*)`.mapWith(Number) }).from(products);
```

```ts
// result type
type Result = {
  count: number;
}[];
```

```sql
select count(*) from products;
```
````

  </CodeTab>
  ```ts
  import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
id: serial('id').primaryKey(),
name: text('name').notNull(),
discount: integer('discount'),
price: integer('price').notNull(),
});

````
</CodeTabs>

To count rows where the specified column contains non-NULL values you can use `count()` function with a column:

<Section>
```ts copy {1}
await db.select({ count: count(products.discount) }).from(products);
````

```ts
// result type
type Result = {
  count: number;
}[];
```

```sql
select count("discount") from products;
```

</Section>

Drizzle has simple and flexible API, which lets you create your custom solutions. In PostgreSQL and MySQL `count()` function returns bigint, which is interpreted as string by their drivers, so it should be casted to integer:

<Section>
```ts copy {5,7,11,12}
import { AnyColumn, sql } from 'drizzle-orm';

const customCount = (column?: AnyColumn) => {
if (column) {
return sql`cast(count(${column}) as integer)`; // In MySQL cast to unsigned integer
} else {
return sql`cast(count(*) as integer)`; // In MySQL cast to unsigned integer
}
};

await db.select({ count: customCount() }).from(products);
await db.select({ count: customCount(products.discount) }).from(products);

````

```sql
select cast(count(*) as integer) from products;
select cast(count("discount") as integer) from products;
````

</Section>

In SQLite, `count()` result returns as integer.

<Section>
```ts copy {3,4}
import { sql } from 'drizzle-orm';

await db.select({ count: sql`count(*)` }).from(products);
await db.select({ count: sql`count(${products.discount})` }).from(products);

````

```sql
select count(*) from products;
select count("discount") from products;
````

</Section>

<Callout type="warning">
By specifying `sql<number>`, you are telling Drizzle that the **expected** type of the field is `number`.<br />
If you specify it incorrectly (e.g. use `sql<string>` for a field that will be returned as a number), the runtime value won't match the expected type.
Drizzle cannot perform any type casts based on the provided type generic, because that information is not available at runtime.

If you need to apply runtime transformations to the returned value, you can use the [`.mapWith()`](/docs/sql#sqlmapwith) method. </Callout>

To count rows that match a condition you can use `.where()` method:

<Section>
```ts copy {4,6}
import { count, gt } from 'drizzle-orm';

await db
.select({ count: count() })
.from(products)
.where(gt(products.price, 100));

````

```sql
select count(*) from products where price > 100
````

</Section>

This is how you can use `count()` function with joins and aggregations:

\<CodeTabs items={\["index.ts", "schema.ts"]}> <CodeTab>
\`\`\`ts copy {8,11,12,13}
import { count, eq } from 'drizzle-orm';
import { countries, cities } from './schema';

````
// Count cities in each country
await db
  .select({
    country: countries.name,
    citiesCount: count(cities.id),
  })
  .from(countries)
  .leftJoin(cities, eq(countries.id, cities.countryId))
  .groupBy(countries.id)
  .orderBy(countries.name);
```

```sql
select countries.name, count("cities"."id") from countries
  left join cities on countries.id = cities.country_id
  group by countries.id
  order by countries.name;
```
````

  </CodeTab>
  ```ts
  import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const countries = pgTable('countries', {
id: serial('id').primaryKey(),
name: text('name').notNull(),
});

export const cities = pgTable('cities', {
id: serial('id').primaryKey(),
name: text('name').notNull(),
countryId: integer('country\_id').notNull().references(() => countries.id),
});

````
</CodeTabs>


Source: https://orm.drizzle.team/docs/cursor-based-pagination


import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';
import IsSupportedChipGroup from "@mdx/IsSupportedChipGroup.astro";
import Section from "@mdx/Section.astro";
import Prerequisites from "@mdx/Prerequisites.astro";

<IsSupportedChipGroup chips={{PostgreSQL: true, MySQL: true, SQLite: true}}/>

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) and [SQLite](/docs/get-started-sqlite)
- [Select statement](/docs/select) with [order by clause](/docs/select#order-by)
- [Relational queries](/docs/rqb) with [order by clause](/docs/rqb#order-by)
- [Indices](/docs/indexes-constraints)
</Prerequisites>

This guide demonstrates how to implement `cursor-based` pagination in Drizzle:

<CodeTabs items={["index.ts", "schema.ts"]}>
<CodeTab>
```ts copy {10,11,12}
import { asc, gt } from 'drizzle-orm';
import { users } from './schema';

const db = drizzle(...);

const nextUserPage = async (cursor?: number, pageSize = 3) => {
  await db
    .select()
    .from(users)
    .where(cursor ? gt(users.id, cursor) : undefined) // if cursor is provided, get rows after it
    .limit(pageSize) // the number of rows to return
    .orderBy(asc(users.id)); // ordering
};

// pass the cursor of the last row of the previous page (id)
await nextUserPage(3);
````

```sql
select * from users order by id asc limit 3;
```

```ts
// next page, 4-6 rows returned
[
  {
    id: 4,
    firstName: 'Brian',
    lastName: 'Brown',
    createdAt: 2024-03-08T12:34:55.182Z
  },
  {
    id: 5,
    firstName: 'Beth',
    lastName: 'Davis',
    createdAt: 2024-03-08T12:40:55.182Z
  },
  {
    id: 6,
    firstName: 'Charlie',
    lastName: 'Miller',
    createdAt: 2024-03-08T13:04:55.182Z
  }
]
```

  </CodeTab>
  <CodeTab>
  ```ts copy
  import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
id: serial('id').primaryKey(),
firstName: text('first\_name').notNull(),
lastName: text('last\_name').notNull(),
createdAt: timestamp('created\_at').notNull().defaultNow(),
});

````

```plaintext
+----+------------+------------+----------------------------+
| id | first_name | last_name  |         created_at         |
+----+------------+------------+----------------------------+
|  1 | Alice      | Johnson    | 2024-03-08 12:23:55.251797 |
+----+------------+------------+----------------------------+
|  2 | Alex       | Smith      | 2024-03-08 12:25:55.182    |
+----+------------+------------+----------------------------+
|  3 | Aaron      | Williams   | 2024-03-08 12:28:55.182    |
+----+------------+------------+----------------------------+
|  4 | Brian      | Brown      | 2024-03-08 12:34:55.182    |
+----+------------+------------+----------------------------+
|  5 | Beth       | Davis      | 2024-03-08 12:40:55.182    |
+----+------------+------------+----------------------------+
|  6 | Charlie    | Miller     | 2024-03-08 13:04:55.182    |
+----+------------+------------+----------------------------+
|  7 | Clara      | Wilson     | 2024-03-08 13:22:55.182    |
+----+------------+------------+----------------------------+
|  8 | David      | Moore      | 2024-03-08 13:34:55.182    |
+----+------------+------------+----------------------------+
|  9 | Aaron      | Anderson   | 2024-03-08 12:40:33.677235 |
+----+------------+------------+----------------------------+
````

  </CodeTab>

</CodeTabs>

If you need dynamic order by you can do like below:

```ts copy {6,8}
const nextUserPage = async (order: 'asc' | 'desc' = 'asc', cursor?: number, pageSize = 3) => {
  await db
    .select()
    .from(users)
    // cursor comparison
    .where(cursor ? (order === 'asc' ? gt(users.id, cursor) : lt(users.id, cursor)) : undefined)
    .limit(pageSize)
    .orderBy(order === 'asc' ? asc(users.id) : desc(users.id));
};

await nextUserPage();
await nextUserPage('asc', 3);
// descending order
await nextUserPage('desc');
await nextUserPage('desc', 7);
```

The main idea of this pagination is to use cursor as a pointer to a specific row in a dataset, indicating the end of the previous page. For correct ordering and cursor comparison, cursor should be unique and sequential.

If you need to order by a non-unique and non-sequential column, you can use multiple columns for cursor. This is how you can do it:

<Section>
```ts copy {14,15,16,17,18,19,22}
import { and, asc, eq, gt, or } from 'drizzle-orm';

const nextUserPage = async (
cursor?: {
id: number;
firstName: string;
},
pageSize = 3,
) => {
await db
.select()
.from(users)
.where(
cursor
? or(
gt(users.firstName, cursor.firstName),
and(eq(users.firstName, cursor.firstName), gt(users.id, cursor.id)),
)
: undefined,
)
.limit(pageSize)
.orderBy(asc(users.firstName), asc(users.id));
};

// pass the cursor from previous page (id & firstName)
await nextUserPage({
id: 2,
firstName: 'Alex',
});

````

```sql
select * from users
  where (first_name > 'Alex' or (first_name = 'Alex' and id > 2))
  order by first_name asc, id asc limit 3;
````

```ts
// next page, 4-6 rows returned
[
  {
    id: 1,
    firstName: 'Alice',
    lastName: 'Johnson',
    createdAt: 2024-03-08T12:23:55.251Z
  },
  {
    id: 5,
    firstName: 'Beth',
    lastName: 'Davis',
    createdAt: 2024-03-08T12:40:55.182Z
  },
  {
    id: 4,
    firstName: 'Brian',
    lastName: 'Brown',
    createdAt: 2024-03-08T12:34:55.182Z
  }
]
```

</Section>

Make sure to create indices for the columns that you use for cursor to make query efficient.

<Section>
```ts copy {7,8}
import { index, ...imports } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
// columns declaration
},
(t) => \[
index('first\_name\_index').on(t.firstName).asc(),
index('first\_name\_and\_id\_index').on(t.firstName, t.id).asc(),
]);

````

```sql
-- As of now drizzle-kit only supports index name and on() param, so you have to add order manually
CREATE INDEX IF NOT EXISTS "first_name_index" ON "users" ("first_name" ASC);
CREATE INDEX IF NOT EXISTS "first_name_and_id_index" ON "users" ("first_name" ASC,"id" ASC);
````

</Section>

If you are using primary key which is not sequential (e.g. `UUIDv4`), you should add sequential column (e.g. `created_at` column) and use multiple cursor.
This is how you can do it:

<Section>
```ts copy {12,13,14,15,16,17,18,21}

const nextUserPage = async (
cursor?: {
id: string;
createdAt: Date;
},
pageSize = 3,
) => {
await db
.select()
.from(users)
.where(
// make sure to add indices for the columns that you use for cursor
cursor
? or(
gt(users.createdAt, cursor.createdAt),
and(eq(users.createdAt, cursor.createdAt), gt(users.id, cursor.id)),
)
: undefined,
)
.limit(pageSize)
.orderBy(asc(users.createdAt), asc(users.id));
};

// pass the cursor from previous page (id & createdAt)
await nextUserPage({
id: '66ed00a4-c020-4dfd-a1ca-5d2e4e54d174',
createdAt: new Date('2024-03-09T17:59:36.406Z'),
});

````
</Section>

Drizzle has useful relational queries API, that lets you easily implement `cursor-based` pagination:

```ts copy {7,8,9}
import * as schema from './db/schema';

const db = drizzle(..., { schema });

const nextUserPage = async (cursor?: number, pageSize = 3) => {
  await db.query.users.findMany({
    where: (users, { gt }) => (cursor ? gt(users.id, cursor) : undefined),
    orderBy: (users, { asc }) => asc(users.id),
    limit: pageSize,
  });
};

// next page, cursor of last row of the first page (id = 3)
await nextUserPage(3);
````

**Benefits** of `cursor-based` pagination: consistent query results, with no skipped or duplicated rows due to insert or delete operations, and greater efficiency compared to `limit/offset` pagination because it does not need to scan and skip previous rows to access the next page.

**Drawbacks** of `cursor-based` pagination: the inability to directly navigate to a specific page and complexity of implementation. Since you add more columns to the sort order, you'll need to add more filters to the `where` clause for the cursor comparison to ensure consistent pagination.

So, if you need to directly navigate to a specific page or you need simpler implementation of pagination, you should consider using [offset/limit](/docs/guides/limit-offset-pagination) pagination instead.

Source: https://orm.drizzle.team/docs/d1-http-with-drizzle-kit

import Prerequisites from "@mdx/Prerequisites.astro";

<Prerequisites>
- [Drizzle Kit](/docs/kit-overview)
- [Drizzle Studio](/docs/kit-overview#drizzle-studio)
- [Drizzle Chrome Extension](https://chromewebstore.google.com/detail/drizzle-studio/mjkojjodijpaneehkgmeckeljgkimnmd)
- You should have installed `drizzle-kit@0.21.3` or higher
- You should have [Cloudflare account](https://dash.cloudflare.com/login), deployed [D1 database](https://developers.cloudflare.com/d1/) and token with D1 edit permissions
</Prerequisites>

To use Drizzle kit with Cloudflare D1 HTTP API, you need to configure the `drizzle.config.ts` file like this:

```ts copy filename="drizzle.config.ts" {7, 9-11}
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/schema.ts',
  out: './migrations',
  dialect: 'sqlite',
  driver: 'd1-http',
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
    token: process.env.CLOUDFLARE_D1_TOKEN!,
  },
});
```

You can find `accountId`, `databaseId` and `token` in [Cloudflare dashboard](https://dash.cloudflare.com/login?).

1. To get `accountId` go to **Workers & Pages** -> **Overview** -> copy **Account ID** from the right sidebar.
2. To get `databaseId` open D1 database you want to connect to and copy **Database ID**.
3. To get `token` go to **My profile** -> **API Tokens** and create token with D1 edit permissions.

After you have configured `drizzle.config.ts` file, Drizzle Kit lets you run `migrate`, `push`, `introspect` and `studio` commands using Cloudflare D1 HTTP API.

You can also use [Drizzle Chrome Extension](https://chromewebstore.google.com/detail/drizzle-studio/mjkojjodijpaneehkgmeckeljgkimnmd) to browse Cloudflare D1 database directly in their admin panel.

Source: https://orm.drizzle.team/docs/decrementing-a-value

import Section from "@mdx/Section.astro";
import IsSupportedChipGroup from "@mdx/IsSupportedChipGroup.astro";
import Prerequisites from "@mdx/Prerequisites.astro";

\<IsSupportedChipGroup chips={{PostgreSQL: true, MySQL: true, SQLite: true}}/>

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) and [SQLite](/docs/get-started-sqlite)
- [Update statement](/docs/update)
- [Filters](/docs/operators) and [sql operator](/docs/sql)
</Prerequisites>

To decrement a column value you can use `update().set()` method like below:

<Section>
```ts copy {8}
import { eq, sql } from 'drizzle-orm';

const db = drizzle(...)

await db
.update(table)
.set({
counter: sql`${table.counter} - 1`,
})
.where(eq(table.id, 1));

````

```sql
update "table" set "counter" = "counter" - 1 where "id" = 1;
````

</Section>

Drizzle has simple and flexible API, which lets you easily create custom solutions. This is how you do custom decrement function:

```ts copy {4,10,11}
import { AnyColumn } from 'drizzle-orm';

const decrement = (column: AnyColumn, value = 1) => {
  return sql`${column} - ${value}`;
};

await db
  .update(table)
  .set({
    counter1: decrement(table.counter1),
    counter2: decrement(table.counter2, 10),
  })
  .where(eq(table.id, 1));
```

Source: https://orm.drizzle.team/docs/empty-array-default-value

import Section from "@mdx/Section.astro";
import Prerequisites from "@mdx/Prerequisites.astro";

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql) and [SQLite](/docs/get-started-sqlite)
- Learn about column data types for [PostgreSQL](/docs/column-types/pg), [MySQL](/docs/column-types/mysql) and [SQLite](/docs/column-types/sqlite)
- [sql operator](/docs/sql)
</Prerequisites>

### PostgreSQL

To set an empty array as a default value in PostgreSQL, you can use `sql` operator with `'{}'` or `ARRAY[]` syntax:

<Section>
```ts copy {10,14}
import { sql } from 'drizzle-orm';
import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
id: serial('id').primaryKey(),
name: text('name').notNull(),
tags1: text('tags1')
.array()
.notNull()
.default(sql`'{}'::text[]`),
tags2: text('tags2')
.array()
.notNull()
.default(sql`ARRAY[]::text[]`),
});

````

```sql
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"tags1" text[] DEFAULT '{}'::text[] NOT NULL,
	"tags2" text[] DEFAULT ARRAY[]::text[] NOT NULL
);
````

</Section>

### MySQL

MySQL doesn't have an array data type, but you can use `json` data type for the same purpose. To set an empty array as a default value in MySQL, you can use `JSON_ARRAY()` function or `sql` operator with `('[]')` syntax:

<Section>
```ts copy {7,11,15}
import { sql } from 'drizzle-orm';
import { json, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
id: serial('id').primaryKey(),
name: varchar('name', { length: 255 }).notNull(),
tags1: json('tags1').$type\<string\[]>().notNull().default(\[]),
tags2: json('tags2')
.$type\<string\[]>()
.notNull()
.default(sql`('[]')`), // the same as default(\[])
tags3: json('tags3')
.$type\<string\[]>()
.notNull()
.default(sql`(JSON_ARRAY())`),
});

````

```sql
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`tags1` json NOT NULL DEFAULT ('[]'),
	`tags2` json NOT NULL DEFAULT ('[]'),
	`tags3` json NOT NULL DEFAULT (JSON_ARRAY()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
````

</Section>

The `mode` option defines how values are handled in the application. With `json` mode, values are treated as JSON object literal.

You can specify `.$type<..>()` for json object inference, it will not check runtime values. It provides compile time protection for default values, insert and select schemas.
