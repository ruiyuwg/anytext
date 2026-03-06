### Default value

The `DEFAULT` clause specifies a default value to use for the column if no value
is explicitly provided by the user when doing an `INSERT`.
If there is no explicit `DEFAULT` clause attached to a column definition,
then the default value of the column is `NULL`.

An explicit `DEFAULT` clause may specify that the default value is `NULL`,
a string constant, a blob constant, a signed-number, or any constant expression enclosed in parentheses.

```typescript
import { int, singlestoreTable } from "drizzle-orm/singlestore-core";

const table = singlestoreTable("table", {
  int: int().default(3),
});
```

```sql
CREATE TABLE `table` (
	`int` int DEFAULT 3
);
```

When using `$default()` or `$defaultFn()`, which are simply different aliases for the same function,
you can generate defaults at runtime and use these values in all insert queries.
These functions can assist you in utilizing various implementations such as `uuid`, `cuid`, `cuid2`, and many more.

```
Note: This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`
```

```ts
import { varchar, singlestoreTable } from "drizzle-orm/singlestore-core";
import { createId } from "@paralleldrive/cuid2";

const table = singlestoreTable("table", {
  id: varchar({ length: 128 }).$defaultFn(() => createId()),
});
```

When using `$onUpdate()` or `$onUpdateFn()`, which are simply different aliases for the same function,
you can generate defaults at runtime and use these values in all update queries.

Adds a dynamic update value to the column. The function will be called when the row is updated,
and the returned value will be used as the column value if none is provided.
If no default (or $defaultFn) value is provided, the function will be called
when the row is inserted as well, and the returned value will be used as the column value.

```
Note: This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`
```

```ts
import { text, singlestoreTable } from "drizzle-orm/singlestore-core";

const table = singlestoreTable("table", {
  alwaysNull: text()
    .$type<string | null>()
    .$onUpdate(() => null),
});
```

### Primary key

```typescript
import { int, singlestoreTable } from "drizzle-orm/singlestore-core";

const table = singlestoreTable("table", {
  int: int().primaryKey(),
});
```

```sql
CREATE TABLE `table` (
	`int` int PRIMARY KEY NOT NULL
);
```

### Auto increment

```typescript
import { int, singlestoreTable } from "drizzle-orm/singlestore-core";

const table = singlestoreTable("table", {
  int: int().autoincrement(),
});
```

```sql
CREATE TABLE `table` (
	`int` int AUTO_INCREMENT
);
```

Source: https://orm.drizzle.team/docs/column-types/sqlite

import Section from '@mdx/Section.astro';
import Callout from '@mdx/Callout.astro';

Based on the official **[SQLite docs](https://www.sqlite.org/datatype3.html)**,
each value stored in an SQLite database (or manipulated by the database engine)
has one of the following storage classes `NULL`, `INTEGER`, `REAL`, `TEXT` and `BLOB`.

We have native support for all of them, yet if that's not enough for you, feel free to create **[custom types](/docs/custom-types)**.

All examples in this part of the documentation do not use database column name aliases, and column names are generated from TypeScript keys.

You can use database aliases in column names if you want, and you can also use the `casing` parameter to define a mapping strategy for Drizzle.

You can read more about it [here](/docs/sql-schema-declaration#shape-your-data-schema)

### Integer

A signed integer, stored in `0`, `1`, `2`, `3`, `4`, `6`, or `8` bytes depending on the magnitude of the value.

```typescript
import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

const table = sqliteTable("table", {
  id: integer(),
});

// you can customize integer mode to be number, boolean, timestamp, timestamp_ms
integer({ mode: "number" });
integer({ mode: "boolean" });
integer({ mode: "timestamp_ms" });
integer({ mode: "timestamp" }); // Date
```

```sql
CREATE TABLE `table` (
	`id` integer
);
```

```typescript
// to make integer primary key auto increment
integer({ mode: "number" }).primaryKey({ autoIncrement: true });
```

```sql
CREATE TABLE `table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL
);
```

### Real

A floating point value, stored as an `8-byte IEEE` floating point number.

```typescript
import { real, sqliteTable } from "drizzle-orm/sqlite-core";

const table = sqliteTable("table", {
  real: real(),
});
```

```sql
CREATE TABLE `table` (
	`real` real
);
```

### Text

A text string, stored using the database encoding (`UTF-8`, `UTF-16BE` or `UTF-16LE`).

```
You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.
```

```typescript
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

const table = sqliteTable("table", {
  text: text(),
});

// will be inferred as text: "value1" | "value2" | null
text({ enum: ["value1", "value2"] });
text({ mode: "json" });
text({ mode: "json" }).$type<{ foo: string }>();
```

```sql
CREATE TABLE `table` (
	`text` text
);
```

### Blob

A blob of data, stored exactly as it was input.

```
It's recommended to use `text('', { mode: 'json' })` instead of `blob('', { mode: 'json' })`,
because it supports JSON functions:

All JSON functions currently throw an error if any of their arguments are BLOBs because BLOBs
are reserved for a future enhancement in which BLOBs will store the binary encoding for JSON.

See **https://www.sqlite.org/json1.html**.
```

```typescript
import { blob, sqliteTable } from "drizzle-orm/sqlite-core";

const table = sqliteTable("table", {
  blob: blob(),
});

blob();
blob({ mode: "buffer" });
blob({ mode: "bigint" });

blob({ mode: "json" });
blob({ mode: "json" }).$type<{ foo: string }>();
```

```sql
CREATE TABLE `table` (
	`blob` blob
);
```

You can specify `.$type<..>()` for blob inference, it **won't** check runtime values.
It provides compile time protection for default values, insert and select schemas.

```typescript
// will be inferred as { foo: string }
json: blob({ mode: "json" }).$type<{ foo: string }>();

// will be inferred as string[]
json: blob({ mode: "json" }).$type<string[]>();

// won't compile
json: blob({ mode: "json" }).$type<string[]>().default({});
```

### Boolean

SQLite does not have native `boolean` data type, yet you can specify `integer` column to be in a `boolean` mode.
This allows you to operate boolean values in your code and Drizzle stores them as 0 and 1 integer
values in the database.

```typescript
import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

const table = sqliteTable("table", {
  id: integer({ mode: "boolean" }),
});
```

```sql
CREATE TABLE `table` (
	`id` integer
);
```

### Bigint

Since there is no `bigint` data type in SQLite, Drizzle offers a special `bigint` mode for `blob` columns.
This mode allows you to work with BigInt instances in your code, and Drizzle stores them as blob values in the database.

```typescript
import { blob, sqliteTable } from "drizzle-orm/sqlite-core";

const table = sqliteTable("table", {
  id: blob({ mode: "bigint" }),
});
```

```sql
CREATE TABLE `table` (
	`id` blob
);
```

### Numeric

```typescript
import { blob, sqliteTable } from "drizzle-orm/sqlite-core";

const table = sqliteTable("table", {
  numeric: numeric(),
  numericNum: numeric({ mode: "number" }),
  numericBig: numeric({ mode: "bigint" }),
});
```

```sql
CREATE TABLE `table` (
	`numeric` numeric,
	`numericNum` numeric,
	`numericBig` numeric
);
```

### Customizing data type

Every column builder has a `.$type()` method, which allows you to customize the data type of the column. This is useful, for example, with unknown or branded types.

```ts
type UserId = number & { __brand: "user_id" };
type Data = {
  foo: string;
  bar: number;
};

const users = sqliteTable("users", {
  id: integer().$type<UserId>().primaryKey(),
  jsonField: blob().$type<Data>(),
});
```

### Not null

`NOT NULL` constraint dictates that the associated column may not contain a `NULL` value.

```typescript
const table = sqliteTable("table", {
  numInt: integer().notNull(),
});
```

```sql
CREATE TABLE table (
	`numInt` integer NOT NULL
);
```
