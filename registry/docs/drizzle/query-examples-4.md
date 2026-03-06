## Query examples

For instance, we create `src/db/queries` folder and separate files for each operation: insert, select, update, delete.

#### Insert data

Read more about insert query in the [documentation](/docs/insert).

```typescript copy filename="src/db/queries/insert.ts" {4, 8}
import { db } from "../index";
import { InsertPost, InsertUser, postsTable, usersTable } from "../schema";

export async function createUser(data: InsertUser) {
  await db.insert(usersTable).values(data);
}

export async function createPost(data: InsertPost) {
  await db.insert(postsTable).values(data);
}
```

#### Select data

Read more about select query in the [documentation](/docs/select).

<Callout type='warning'>
`getColumns` available starting from `drizzle-orm@1.0.0-beta.2`(read more [here](/docs/upgrade-v1))

If you are on pre-1 version(like `0.45.1`) then use `getTableColumns` </Callout>

```typescript copy filename="src/db/queries/select.ts" {5, 16, 41}
import { asc, between, count, eq, getColumns, sql } from "drizzle-orm";
import { db } from "../index";
import { SelectUser, postsTable, usersTable } from "../schema";

export async function getUserById(id: SelectUser["id"]): Promise<
  Array<{
    id: number;
    name: string;
    age: number;
    email: string;
  }>
> {
  return db.select().from(usersTable).where(eq(usersTable.id, id));
}

export async function getUsersWithPostsCount(
  page = 1,
  pageSize = 5,
): Promise<
  Array<{
    postsCount: number;
    id: number;
    name: string;
    age: number;
    email: string;
  }>
> {
  return db
    .select({
      ...getColumns(usersTable),
      postsCount: count(postsTable.id),
    })
    .from(usersTable)
    .leftJoin(postsTable, eq(usersTable.id, postsTable.userId))
    .groupBy(usersTable.id)
    .orderBy(asc(usersTable.id))
    .limit(pageSize)
    .offset((page - 1) * pageSize);
}

export async function getPostsForLast24Hours(
  page = 1,
  pageSize = 5,
): Promise<
  Array<{
    id: number;
    title: string;
  }>
> {
  return db
    .select({
      id: postsTable.id,
      title: postsTable.title,
    })
    .from(postsTable)
    .where(
      between(postsTable.createdAt, sql`now() - interval '1 day'`, sql`now()`),
    )
    .orderBy(asc(postsTable.title), asc(postsTable.id))
    .limit(pageSize)
    .offset((page - 1) * pageSize);
}
```

Alternatively, you can use [relational query syntax](/docs/rqb).

#### Update data

Read more about update query in the [documentation](/docs/update).

```typescript copy filename="src/db/queries/update.ts" {5}
import { eq } from "drizzle-orm";
import { db } from "../index";
import { SelectPost, postsTable } from "../schema";

export async function updatePost(
  id: SelectPost["id"],
  data: Partial<Omit<SelectPost, "id">>,
) {
  await db.update(postsTable).set(data).where(eq(postsTable.id, id));
}
```

#### Delete data

Read more about delete query in the [documentation](/docs/delete).

```typescript copy filename="src/db/queries/delete.ts" {5}
import { eq } from "drizzle-orm";
import { db } from "../index";
import { SelectUser, usersTable } from "../schema";

export async function deleteUser(id: SelectUser["id"]) {
  await db.delete(usersTable).where(eq(usersTable.id, id));
}
```

## Next Steps

Now that you have successfully set up Drizzle ORM with Xata, you can explore more advanced features:

- Learn about [Drizzle relations](/docs/rqb) for complex queries
- Explore [Xata's documentation](https://xata.io/documentation/)
- Implement [database migrations](/docs/migrations) for production deployments

Source: https://orm.drizzle.team/docs/tutorials/drizzle-nextjs-neon

import Steps from "@mdx/Steps.astro";
import Npm from "@mdx/Npm.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
import CodeTab from "@mdx/CodeTab.astro";
import Section from "@mdx/Section.astro";
import Tabs from "@mdx/Tabs.astro";
import Tab from "@mdx/Tab.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import Callout from "@mdx/Callout.astro";

This tutorial demonstrates how to build `Todo app` using **Drizzle ORM** with **Neon database** and **Next.js**.

<Prerequisites>  
  - You should have an existing Next.js project or create a new one using the following command:
  ```bash
  npx create-next-app@latest --typescript
  ```

- You should have installed Drizzle ORM and [Drizzle kit](/docs/kit-overview). You can do this by running the following command: <Npm>
  drizzle-orm
  -D drizzle-kit

  </Npm>

- You should have installed the [Neon serverless driver](https://neon.tech/docs/serverless/serverless-driver). <Npm>
  @neondatabase/serverless

  </Npm>

- You should have installed the `dotenv` package for managing environment variables. <Npm>
  dotenv

  </Npm>

</Prerequisites>

<Callout type="warning">
In case you face the issue with resolving dependencies during installation:

If you're not using React Native, forcing the installation with `--force` or `--legacy-peer-deps` should resolve the issue. If you are using React Native, then you need to use the exact version of React which is compatible with your React Native version. </Callout>
