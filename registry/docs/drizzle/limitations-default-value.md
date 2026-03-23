### Default value

The `DEFAULT` clause specifies a default value to use for the column if no value
is explicitly provided by the user when doing an `INSERT`.
If there is no explicit `DEFAULT` clause attached to a column definition,
then the default value of the column is `NULL`.

An explicit `DEFAULT` clause may specify that the default value is `NULL`,
a string constant, a blob constant, a signed-number, or any constant expression enclosed in parentheses.

```typescript
import { sql } from "drizzle-orm";
import { int, mssqlTable, text } from "drizzle-orm/mssql-core";

const table = mssqlTable('table', {
	integer: integer().default(42),
	text: text().default('text'),
});
```

```sql
CREATE TABLE [table] (
	[integer1] integer DEFAULT 42,
	[text] text DEFAULT 'text',
);
```

When using `$default()` or `$defaultFn()`, which are simply different aliases for the same function,
you can generate defaults at runtime and use these values in all insert queries.

```
Note: This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`
```

```ts
import { text, mssqlTable } from "drizzle-orm/mssql-core";
import { createId } from '@paralleldrive/cuid2';

const table = mssqlTable('table', {
	id: text().$defaultFn(() => createId()),
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
import { int, datetime2, text, mssqlTable } from "drizzle-orm/mssql-core";

const table = mssqlTable('table', {
	updateCounter: int().default(sql`1`).$onUpdateFn((): SQL => sql`${table.updateCounter} + 1`),
	updatedAt: datetime2({ mode: 'date', precision: 3 }).$onUpdate(() => new Date()),
	alwaysNull: text().$type<string | null>().$onUpdate(() => null),
});
```

### Not null

`NOT NULL` constraint dictates that the associated column may not contain a `NULL` value.

```typescript
import { int, mssqlTable } from "drizzle-orm/mssql-core";

const table = mssqlTable('table', {
	int: int().notNull(),
});
```

```sql
CREATE TABLE [table] (
	[int] int NOT NULL
);
```

### Primary key

A primary key constraint indicates that a column, or group of columns, can be used as a unique identifier for rows in the table.
This requires that the values be both unique and not null.

```typescript
import { int, mssqlTable } from "drizzle-orm/mssql-core";

const table = pgTable('table', {
	id: int().primaryKey(),
});
```

```sql
CREATE TABLE [table] (
	[id] int PRIMARY KEY
);
```

Source: https://orm.drizzle.team/docs/column-types/mysql

import Section from '@mdx/Section.astro';
import Callout from '@mdx/Callout.astro';

We have native support for all of them, yet if that's not enough for you, feel free to create **[custom types](/docs/custom-types)**.

All examples in this part of the documentation do not use database column name aliases, and column names are generated from TypeScript keys.

You can use database aliases in column names if you want, and you can also use the `casing` parameter to define a mapping strategy for Drizzle.

You can read more about it [here](/docs/sql-schema-declaration#shape-your-data-schema)

### integer

A signed integer, stored in `0`, `1`, `2`, `3`, `4`, `6`, or `8` bytes depending on the magnitude of the value.

```typescript
import { int, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	int: int()
});
```

```sql
CREATE TABLE `table` (
	`int` int
);
```

### tinyint

```typescript
import { tinyint, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	tinyint: tinyint()
});
```

```sql
CREATE TABLE `table` (
	`tinyint` tinyint
);
```

### smallint

```typescript
import { smallint, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	smallint: smallint()
});
```

```sql
CREATE TABLE `table` (
	`smallint` smallint
);
```

### mediumint

```typescript
import { mediumint, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	mediumint: mediumint()
});
```

```sql
CREATE TABLE `table` (
	`mediumint` mediumint
);
```

### bigint

```typescript
import { bigint, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	bigint: bigint({ mode: 'number' })
	bigintUnsigned: bigint({ mode: 'number', unsigned: true })
});

bigint('...', { mode: 'number' | 'bigint' });

// You can also specify unsigned option for bigint
bigint('...', { mode: 'number' | 'bigint', unsigned: true })
```

```sql
CREATE TABLE `table` (
	`bigint` bigint,
	`bigintUnsigned` bigint unsigned
);
```

We've omitted config of `M` in `bigint(M)`, since it indicates the display width of the numeric type

### real

```typescript
import { real, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	real: real()
});
```

```sql
CREATE TABLE `table` (
	`real` real
);
```

```typescript
import { real, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	realPrecision: real({ precision: 1,}),
	realPrecisionScale: real({ precision: 1, scale: 1,}),
});
```

```sql
CREATE TABLE `table` (
	`realPrecision` real(1),
	`realPrecisionScale` real(1, 1)
);
```

### decimal

```typescript
import { decimal, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	decimal: decimal(),
	decimalNum: decimal({ scale: 30, mode: 'number' }),
	decimalBig: decimal({ scale: 30, mode: 'bigint' }),
});
```

```sql
CREATE TABLE `table` (
	`decimal` decimal,
	`decimalNum` decimal(30),
	`decimalBig` decimal(30)
);
```

```typescript
import { decimal, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	decimalPrecision: decimal({ precision: 1,}),
	decimalPrecisionScale: decimal({ precision: 1, scale: 1,}),
});
```

```sql
CREATE TABLE `table` (
	`decimalPrecision` decimal(1),
	`decimalPrecisionScale` decimal(1, 1)
);
```

### double

```typescript
import { double, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	double: double('double')
});
```

```sql
CREATE TABLE `table` (
	`double` double
);
```

```typescript
import { double, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	doublePrecision: double({ precision: 1,}),
	doublePrecisionScale: double({ precision: 1, scale: 1,}),
});
```

```sql
CREATE TABLE `table` (
	`doublePrecision` double(1),
	`doublePrecisionScale` double(1, 1)
);
```

### float

```typescript
import { float, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	float: float()
});
```

```sql
CREATE TABLE `table` (
	`float` float
);
```

### serial

`SERIAL` is an alias for `BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE`.

```typescript
import { serial, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	serial: serial()
});
```

```sql
CREATE TABLE `table` (
	`serial` serial AUTO_INCREMENT
);
```

### binary

`BINARY(M)` stores a fixed-length byte string of exactly M bytes.\
On insert, shorter values are right-padded with `0x00` bytes to reach M bytes; on retrieval, no padding is stripped.
All bytes—including trailing `0x00`—are significant in comparisons, `ORDER BY`, and `DISTINCT`

```typescript
import { binary, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	binary: binary()
});
```

```sql
CREATE TABLE `table` (
	`binary` binary
);
```

### varbinary

`VARBINARY(M)` stores a variable-length byte string of exactly M bytes.\
On insert, shorter values are right-padded with `0x00` bytes to reach M bytes; on retrieval, no padding is stripped.
All bytes—including trailing `0x00`—are significant in comparisons, `ORDER BY`, and `DISTINCT`

```typescript
import { varbinary, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	varbinary: varbinary({ length: 2}),
});
```

```sql
CREATE TABLE `table` (
	`varbinary` varbinary(2)
);
```

### blob

Available starting from `drizzle-orm@1.0.0-beta.2`

A `BLOB` is a binary large object that can hold a variable amount of data.

```typescript
import { blob, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	blob: blob()
});
```

```sql
CREATE TABLE `table` (
	`blob` blob
);
```

### tinyblob

Available starting from `drizzle-orm@1.0.0-beta.2`

A `TINYBLOB` is a binary large object that can hold a variable amount of data.

```typescript
import { tinyblob, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	tinyblob: tinyblob()
});
```

```sql
CREATE TABLE `table` (
	`tinyblob` tinyblob
);
```

### mediumblob

Available starting from `drizzle-orm@1.0.0-beta.2`

A `MEDIUMBLOB` is a binary large object that can hold a variable amount of data.

```typescript
import { mediumblob, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	mediumblob: mediumblob()
});
```

```sql
CREATE TABLE `table` (
	`mediumblob` mediumblob
);
```

### longblob

Available starting from `drizzle-orm@1.0.0-beta.2`

A `LONGBLOB` is a binary large object that can hold a variable amount of data.

```typescript
import { longblob, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	longblob: longblob()
});
```

```sql
CREATE TABLE `table` (
	`longblob` longblob
);
```

### char

```typescript
import { char, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	char: char(),
});
```

```sql
CREATE TABLE `table` (
	`char` char
);
```

### varchar

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

```typescript
import { varchar, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	varchar: varchar({ length: 2 }),
});

// will be inferred as text: "value1" | "value2" | null
varchar: varchar({ length: 6, enum: ["value1", "value2"] })
```

```sql
CREATE TABLE `table` (
	`varchar` varchar(2)
);
```

### text

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

```typescript
import { text, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	text: text(),
});

// will be inferred as text: "value1" | "value2" | null
text: text({ enum: ["value1", "value2"] });
```

```sql
CREATE TABLE `table` (
	`text` text
);
```

### boolean

```typescript
import { boolean, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	boolean: boolean(),
});
```

```sql
CREATE TABLE `table` (
	`boolean` boolean
);
```

### date

```typescript
import { boolean, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	date: date(),
});
```

```sql
CREATE TABLE `table` (
	`date` date
);
```

### datetime

```typescript
import { datetime, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	datetime: datetime(),
});

datetime('...', { mode: 'date' | "string"}),
datetime('...', { fsp : 0..6}),
```

```sql
CREATE TABLE `table` (
	`datetime` datetime
);
```

```typescript
import { datetime, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	datetime: datetime({ mode: 'date', fsp: 6 }),
});
```

```sql
CREATE TABLE `table` (
	`datetime` datetime(6)
);
```

### time

```typescript
import { time, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	time: time(),
	timefsp: time({ fsp: 6 }),
});
	
time('...', { fsp: 0..6 }),
```

```sql
CREATE TABLE `table` (
	`time` time,
	`timefsp` time(6)
);
```

### year

```typescript
import { year, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	year: year(),
});
```

```sql
CREATE TABLE `table` (
	`year` year
);
```

### timestamp

```typescript
import { timestamp, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	timestamp: timestamp(),
});

timestamp('...', { mode: 'date' | "string"}),
timestamp('...', { fsp : 0..6}),
```

```sql
CREATE TABLE `table` (
	`timestamp` timestamp
);
```

```typescript
import { timestamp, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	timestamp: timestamp({ mode: 'date', fsp: 6 }),
});
```

```sql
CREATE TABLE `table` (
	`timestamp` timestamp(6)
);
```

```typescript
import { timestamp, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	timestamp: timestamp().defaultNow(),
});
```

```sql
CREATE TABLE `table` (
	`timestamp` timestamp DEFAULT (now())
);
```

### json

```typescript
import { json, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	json: json(),
});

```

```sql
CREATE TABLE `table` (
	`json` json
);
```

You can specify `.$type<..>()` for json object inference, it **won't** check runtime values.
It provides compile time protection for default values, insert and select schemas.

```typescript
// will be inferred as { foo: string }
json: json().$type<{ foo: string }>();

// will be inferred as string[]
json: json().$type<string[]>();

// won't compile
json: json().$type<string[]>().default({});
```

### enum

```typescript
import { mysqlEnum, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	popularity: mysqlEnum(['unknown', 'known', 'popular']),
});
```

```sql
CREATE TABLE `table` (
	`popularity` enum('unknown','known','popular')
);
```

### Customizing data type

Every column builder has a `.$type()` method, which allows you to customize the data type of the column. This is useful, for example, with unknown or branded types.

```ts
type UserId = number & { __brand: 'user_id' };
type Data = {
	foo: string;
	bar: number;
};

const users = mysqlTable('users', {
  id: int().$type<UserId>().primaryKey(),
  jsonField: json().$type<Data>(),
});
```

### Not null

`NOT NULL` constraint dictates that the associated column may not contain a `NULL` value.

```typescript
import { int, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	int: int().notNull(),
});
```

```sql
CREATE TABLE `table` (
	`int` int NOT NULL
);
```
