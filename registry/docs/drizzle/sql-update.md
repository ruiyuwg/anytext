# SQL Update

```typescript copy
await db.update(users).set({ name: "Mr. Dan" }).where(eq(users.name, "Dan"));
```

The object that you pass to `update` should have keys that match column names in your database schema.
Values of `undefined` are ignored in the object: to set a column to `null`, pass `null`.
You can pass SQL as a value to be used in the update object, like this:

```typescript copy
await db
  .update(users)
  .set({ updatedAt: sql`NOW()` })
  .where(eq(users.name, "Dan"));
```

### Limit

\<IsSupportedChipGroup chips={{ 'PostgreSQL': false, 'MySQL': true, 'SQLite': true, 'SingleStore': true, 'MSSQL': false, 'CockroachDB': false }} />

Use `.limit()` to add `limit` clause to the query - for example:

<Section>
```typescript
await db.update(usersTable).set({ verified: true }).limit(2);
```
```sql
update "users" set "verified" = $1 limit $2;
```
</Section>

### Order By

Use `.orderBy()` to add `order by` clause to the query, sorting the results by the specified fields:

<Section>
```typescript
import { asc, desc } from 'drizzle-orm';

await db.update(usersTable).set({ verified: true }).orderBy(usersTable.name);
await db.update(usersTable).set({ verified: true }).orderBy(desc(usersTable.name));

// order by multiple fields
await db.update(usersTable).set({ verified: true }).orderBy(usersTable.name, usersTable.name2);
await db.update(usersTable).set({ verified: true }).orderBy(asc(usersTable.name), desc(usersTable.name2));

````
```sql
update "users" set "verified" = $1 order by "name";
update "users" set "verified" = $1 order by "name" desc;

update "users" set "verified" = $1 order by "name", "name2";
update "users" set "verified" = $1 order by "name" asc, "name2" desc;
````

</Section>

### Returning

\<IsSupportedChipGroup chips={{ 'PostgreSQL': true, 'SQLite': true, 'MySQL': false , 'SingleStore': false, 'MSSQL': false, 'CockroachDB': true }} />
You can update a row and get it back in PostgreSQL and SQLite:

```typescript copy
const updatedUserId: { updatedId: number }[] = await db
  .update(users)
  .set({ name: "Mr. Dan" })
  .where(eq(users.name, "Dan"))
  .returning({ updatedId: users.id });
```

### Output

\<IsSupportedChipGroup chips={{ 'MSSQL': true }} />
You can update a row and get back the row before updated and after:

```typescript copy
type User = typeof users.$inferSelect;

const updatedUserId: User[] = await db
  .update(users)
  .set({ name: "Mr. Dan" })
  .where(eq(users.name, "Dan"))
  .output();
```

To return partial users after update:

```ts
const updatedUserId: { inserted: { updatedId: number } }[] = await db
  .update(users)
  .set({ name: "Mr. Dan" })
  .where(eq(users.name, "Dan"))
  .output({ inserted: { updatedId: users.id } });
```

To return rows that were in database before update:

```ts
type User = typeof users.$inferSelect;

const updatedUserId: { deleted: User }[] = await db
  .update(users)
  .set({ name: "Mr. Dan" })
  .where(eq(users.name, "Dan"))
  .output({ deleted: true });
```

To return both previous and new version on a row:

```ts
type User = typeof users.$inferSelect;

const updatedUserId: { deleted: User; inserted: User }[] = await db
  .update(users)
  .set({ name: "Mr. Dan" })
  .where(eq(users.name, "Dan"))
  .output({ deleted: true, inserted: true });
```

## `with update` clause

<Callout>
  Check how to use WITH statement with [select](/docs/select#with-clause), [insert](/docs/insert#with-insert-clause), [delete](/docs/delete#with-delete-clause)
</Callout>

Using the `with` clause can help you simplify complex queries by splitting them into smaller subqueries called common table expressions (CTEs):

<Section>
```typescript copy
const averagePrice = db.$with('average_price').as(
        db.select({ value: sql`avg(${products.price})`.as('value') }).from(products)
);

const result = await db.with(averagePrice)
.update(products)
.set({
cheap: true
})
.where(lt(products.price, sql`(select * from ${averagePrice})`))
.returning({
id: products.id
});

````
```sql
with "average_price" as (select avg("price") as "value" from "products")
update "products" set "cheap" = $1
where "products"."price" < (select * from "average_price")
returning "id"
````

</Section>

## Update ... from

\<IsSupportedChipGroup chips={{ 'PostgreSQL': true, 'MySQL': false, 'SQLite': true, 'SingleStore': false, 'MSSQL': false, 'CockroachDB': true }} />

As the SQLite documentation mentions:

> The UPDATE-FROM idea is an extension to SQL that allows an UPDATE statement to be driven by other tables in the database.
> The "target" table is the specific table that is being updated. With UPDATE-FROM you can join the target table
> against other tables in the database in order to help compute which rows need updating and what
> the new values should be on those rows

Similarly, the PostgreSQL documentation states:

> A table expression allowing columns from other tables to appear in the WHERE condition and update expressions

Drizzle also supports this feature starting from version `drizzle-orm@0.36.3`

<Section>
```ts
await db
  .update(users)
  .set({ cityId: cities.id })
  .from(cities)
  .where(and(eq(cities.name, 'Seattle'), eq(users.name, 'John')))
```
```sql
update "users" set "city_id" = "cities"."id" 
from "cities" 
where ("cities"."name" = $1 and "users"."name" = $2)

\-- params: \[ 'Seattle', 'John' ]

````
</Section>

You can also alias tables that are joined (in PG, you can also alias the updating table too).
<Section>
```ts
const c = alias(cities, 'c');
await db
  .update(users)
  .set({ cityId: c.id })
  .from(c);
````

```sql
update "users" set "city_id" = "c"."id"
from "cities" "c"
```

</Section>

\<IsSupportedChipGroup chips={{ 'PostgreSQL': true, 'MySQL': false, 'SQLite': false, 'SingleStore': false, 'MSSQL': false, 'CockroachDB': true }} />

In Postgres, you can also return columns from the joined tables.

<Section>
```ts
const updatedUsers = await db
  .update(users)
  .set({ cityId: cities.id })
  .from(cities)
  .returning({ id: users.id, cityName: cities.name });
```
```sql
update "users" set "city_id" = "cities"."id" 
from "cities" 
returning "users"."id", "cities"."name"
```
</Section>

Source: https://orm.drizzle.team/docs/upgrade-21

import Callout from '@mdx/Callout.astro';

## How to migrate to `0.21.0`

#### 1. Remove all `:dialect` prefixes from your drizzle-kit commands.

Example: Change `drizzle-kit push:mysql` to `drizzle-kit push`.

#### 2. Update your `drizzle.config.ts` file:

- Add `dialect` to `drizzle.config.ts`. It is now mandatory and can be `postgresql`, `mysql`, or `sqlite`.
- Add `driver` to `drizzle.config.ts` ONLY if you are using `aws-data-api`, `turso`, `d1-http`(WIP), or `expo`. Otherwise, you can remove the `driver` from `drizzle.config.ts`.
- If you were using `connectionString` or `uri` in `dbCredentials`, you should now use `url`.

```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite", // "postgresql" | "mysql"
  driver: "turso", // optional and used only if `aws-data-api`, `turso`, `d1-http`(WIP) or `expo` are used
  dbCredentials: {
    url: "",
  },
});
```

#### 3. If you are using PostgreSQL or SQLite and had migrations generated in your project, please run `drizzle-kit up` so Drizzle can upgrade all the snapshots to version 6.

<Callout>
  You can check everything that was changed in `0.21.0` in details here
</Callout>

## Changelog

**❗ Snapshots Upgrade**

All PostgreSQL and SQLite-generated snapshots will be upgraded to version 6. You will be prompted to upgrade them by running `drizzle-kit up`

**❗ Removing :dialect from `drizzle-kit` cli commands**

You can now just use commands, like:

- `drizzle-kit generate`
- `drizzle-kit push`
- etc.

without specifying dialect. This param is moved to `drizzle.config.ts`

**❗ `drizzle.config` update**

- `dialect` is now mandatory; specify which database dialect you are connecting to. Options include `mysql`, `postgresql`, or `sqlite`.
- `driver` has become optional and will have a specific driver, each with a different configuration of `dbCredentials`. Available drivers are:
  - `aws-data-api`
  - `turso`
  - `d1-http` - currently WIP
  - `expo`
- `url` - a unified parameter for the previously existing `connectionString` and `uri`.
- `migrations` - a new object parameter to specify a custom table and schema for the migrate command:
  - `table` - the custom table where drizzle will store migrations.
  - `schema` - the custom schema where drizzle will store migrations (Postgres only).

Usage examples for all new and updated commands

```ts
import { defineConfig } from "drizzle-kit"

export default defineConfig({
    dialect: "sqlite", // "postgresql" | "mysql"
    driver: "turso"
    dbCredentials: {
        url: ""
    },
    migration: {
        table: "migrations",
        schema: "public"
    }
})
```

Drizzle driver selection follows the current strategy:

If a `driver` is specified, use this driver for querying.

If no driver is specified:

- For `postgresql` dialect, Drizzle will:
  - Check if the `pg` driver is installed and use it.
  - If not, try to find the `postgres` driver and use it.
  - If still not found, try to find `@vercel/postgres`.
  - Then try `@neondatabase/serverless`.
  - If nothing is found, an error will be thrown.

- For `mysql` dialect, Drizzle will:
  - Check if the `mysql2` driver is installed and use it.
  - If not, try to find `@planetscale/database` and use it.
  - If nothing is found, an error will be thrown.

- For `sqlite` dialect, Drizzle will:
  - Check if the `@libsql/client` driver is installed and use it.
  - If not, try to find `better-sqlite3` and use it.
  - If nothing is found, an error will be thrown

**❗ MySQL schemas/database are no longer supported by drizzle-kit**

Drizzle Kit won't handle any schema changes for additional schemas/databases in your drizzle schema file

# New Features

**🎉 Pull relations**

Drizzle will now pull `relations` from the database by extracting foreign key information and translating it into a `relations` object. You can view the `relations.ts` file in the `out` folder after introspection is complete

For more info about relations, please check [the docs](/docs/rqb#declaring-relations)

**🎉 Custom name for generated migrations**

To specify a name for your migration you should use `--name <name>`

Usage

```
drizzle-kit generate --name init_db
```

**🎉 New command `migrate`**

You can now apply generated migrations to your database directly from `drizzle-kit`

Usage

```
drizzle-kit migrate
```

By default, drizzle-kit will store migration data entries in the `__drizzle_migrations` table and, in the case of PostgreSQL, in a `drizzle` schema. If you want to change this, you will need to specify the modifications in `drizzle.config.ts`.

```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  migrations: {
    table: "migrations",
    schema: "public",
  },
});
```

Source: https://orm.drizzle.team/docs/upgrade-v1

import Npm from "@mdx/Npm.astro";
import Npx from "@mdx/Npx.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
