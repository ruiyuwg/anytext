## Indexes

Drizzle ORM provides API for both `index` and `unique index` declaration:

\<Tabs items={\['PostgreSQL', 'MySQL', 'SQLite', 'SingleStore', 'MSSQL', 'CockroachDB']}> <Tab> <Section>
\`\`\`typescript copy {9-10}
import { serial, text, index, uniqueIndex, pgTable } from "drizzle-orm/pg-core";

````
export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
}, (table) => [
  index("name_idx").on(table.name),
  uniqueIndex("email_idx").on(table.email)
]);
```
```sql {5-6}
CREATE TABLE "user" (
  ...
);

CREATE INDEX "name_idx" ON "user" ("name");
CREATE UNIQUE INDEX "email_idx" ON "user" ("email");
```
</Section>
<Callout type="warning" emoji="⚠️">
  For versions before `drizzle-kit@0.22.0` and `drizzle-orm@0.31.0` `drizzle-kit` only supports index `name` and `on()` param.

  After versions `drizzle-kit@0.22.0` and `drizzle-orm@0.31.0` all fields are supported in drizzle-kit!
</Callout>


Starting from 0.31.0 a new index api for Drizzle ORM provides set of all params for index creation:
````

```ts
// First example, with `.on()`
index('name')
  .on(table.column1.asc(), table.column2.nullsFirst(), ...) or .onOnly(table.column1.desc().nullsLast(), table.column2, ...)
  .concurrently()
  .where(sql``)
  .with({ fillfactor: '70' })

// Second Example, with `.using()`
index('name')
  .using('btree', table.column1.asc(), sql`lower(${table.column2})`, table.column1.op('text_ops'))
  .where(sql``) // sql expression
  .with({ fillfactor: '70' })
```

  </Tab>
  <Tab>
    <Section>
    ```typescript copy {9-10}
    import { int, text, index, uniqueIndex, mysqlTable } from "drizzle-orm/mysql-core";

````
export const user = mysqlTable("user", {
  id: int("id").primaryKey().autoincrement(),
  name: text("name"),
  email: text("email"),
}, (table) => [
  index("name_idx").on(table.name),
  uniqueIndex("email_idx").on(table.email),
]);
```
```sql {5-6}
CREATE TABLE `user` (
  ...
);

CREATE INDEX `name_idx` ON `user` (`name`);
CREATE UNIQUE INDEX `email_idx` ON `user` (`email`);
```
</Section>
<Callout type="warning" emoji="⚠️">
  As of now `drizzle-kit` only supports index `name` and `on()` param.
</Callout>

 Drizzle ORM provides set of all params for index creation:

```typescript
// Index declaration reference
index("name")
  .on(table.name)
  .algorythm("default") // "default" | "copy" | "inplace"
  .using("btree") // "btree" | "hash"
  .lock("default") // "none" | "default" | "exclusive" | "shared"
```
````

  </Tab>
  <Tab>
    <Section>
    ```typescript {9-10}
    import { integer, text, index, uniqueIndex, sqliteTable } from "drizzle-orm/sqlite-core";

````
export const user = sqliteTable("user", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  email: text("email"),
}, (table) => [
  index("name_idx").on(table.name),
  uniqueIndex("email_idx").on(table.email),
]);
```
```sql {5-6}
CREATE TABLE `user` (
  ...
);

CREATE INDEX `name_idx` ON `user` (`name`);
CREATE UNIQUE INDEX `email_idx` ON `user` (`email`);
```
</Section>

 Drizzle ORM provides set of all params for index creation:

```typescript
// Index declaration reference
index("name")
  .on(table.name)
  .where(sql`...`)
```
````

  </Tab>
  <Tab>
    <Section>
    ```typescript copy {9-10}
    import { int, text, index, uniqueIndex, singlestoreTable } from "drizzle-orm/singlestore-core";

````
export const user = singlestoreTable("user", {
  id: int("id").primaryKey().autoincrement(),
  name: text("name"),
  email: text("email"),
}, (table) => [
  index("name_idx").on(table.name),
  uniqueIndex("email_idx").on(table.email),
]);
```
```sql {5-6}
CREATE TABLE `user` (
  ...
);

CREATE INDEX `name_idx` ON `user` (`name`);
CREATE UNIQUE INDEX `email_idx` ON `user` (`email`);
```
</Section>
````

  </Tab>
  <Tab>
    <Section>
    ```typescript copy {8-9}
    import { int, text, index, uniqueIndex, mssqlTable } from "drizzle-orm/mssql-core";

````
export const user = mysqlTable("user", {
  id: int().primaryKey(),
  name: text(),
  email: text(),
}, (table) => [
  index("name_idx").on(table.name),
  uniqueIndex("email_idx").on(table.email),
]);
```
```sql {5-6}
CREATE TABLE [user] (
  ...
);

CREATE INDEX [name_idx] ON [user] ([name]);
CREATE UNIQUE INDEX [email_idx] ON [user] ([email]);
```
</Section>

<Callout type='warning'>
With MSSQL you can't create unique index on `text`, `ntext`, `varchar(max)`, `nvarchar(max)`
</Callout>

Drizzle ORM provides set of params for index creation:

```typescript
// Index declaration reference
index("name")
  .on(table.name)
  .where(sql``)
```
````

  </Tab>
    <Tab>
    <Section>
    ```typescript copy {9-10}
    import { int4, text, index, uniqueIndex, cockroachTable } from "drizzle-orm/cockroach-core";

````
export const user = cockroachTable("user", {
  id: int4().primaryKey(),
  name: text(),
  email: text(),
}, (table) => [
  index("name_idx").on(table.name),
  uniqueIndex("email_idx").on(table.email)
]);
```
```sql {5-6}
CREATE TABLE "user" (
  ...
);

CREATE INDEX "name_idx" ON "user" ("name");
CREATE UNIQUE INDEX "email_idx" ON "user" ("email");
```
</Section>
```ts
// First example, with `.on()`
index('name')
  .on(table.column1.asc(), table.column2) or .onOnly(table.column1.desc(), table.column2, ...)
  .where(sql``)

// Second Example, with `.using()`
index('name')
  .using('btree', table.column1.asc(), sql`lower(${table.column2})`)
  .where(sql``) // sql expression
```
````

  </Tab>
</Tabs>

Source: https://orm.drizzle.team/docs/insert

import IsSupportedChipGroup from '@mdx/IsSupportedChipGroup.astro';
import Section from '@mdx/Section.astro';
import Callout from '@mdx/Callout.astro';
import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
