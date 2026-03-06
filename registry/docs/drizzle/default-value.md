### Default value

The `DEFAULT` clause specifies a default value to use for the column if no value
is explicitly provided by the user when doing an `INSERT`.
If there is no explicit `DEFAULT` clause attached to a column definition,
then the default value of the column is `NULL`.

An explicit `DEFAULT` clause may specify that the default value is `NULL`,
a string constant, a blob constant, a signed-number, or any constant expression enclosed in parentheses.

```typescript
import { sql } from "drizzle-orm";
import { integer, pgTable, uuid } from "drizzle-orm/pg-core";

const table = pgTable('table', {
	integer1: integer().default(42),
	integer2: integer().default(sql`'42'::integer`),
	uuid1: uuid().defaultRandom(),
	uuid2: uuid().default(sql`gen_random_uuid()`),
});
```

```sql
CREATE TABLE IF NOT EXISTS "table" (
	"integer1" integer DEFAULT 42,
	"integer2" integer DEFAULT '42'::integer,
	"uuid1" uuid DEFAULT gen_random_uuid(),
	"uuid2" uuid DEFAULT gen_random_uuid()
);
```

When using `$default()` or `$defaultFn()`, which are simply different aliases for the same function,
you can generate defaults at runtime and use these values in all insert queries.

These functions can assist you in utilizing various implementations such as `uuid`, `cuid`, `cuid2`, and many more.

```
Note: This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`
```

```ts
import { text, pgTable } from "drizzle-orm/pg-core";
import { createId } from '@paralleldrive/cuid2';

const table = pgTable('table', {
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
import { integer, timestamp, text, pgTable } from "drizzle-orm/pg-core";

const table = pgTable('table', {
	updateCounter: integer().default(sql`1`).$onUpdateFn((): SQL => sql`${table.update_counter} + 1`),
	updatedAt: timestamp({ mode: 'date', precision: 3 }).$onUpdate(() => new Date()),
    	alwaysNull: text().$type<string | null>().$onUpdate(() => null),
});
```

### Not null

`NOT NULL` constraint dictates that the associated column may not contain a `NULL` value.

```typescript
import { integer, pgTable } from "drizzle-orm/pg-core";

const table = pgTable('table', {
	integer: integer().notNull(),
});
```

```sql
CREATE TABLE IF NOT EXISTS "table" (
	"integer" integer NOT NULL
);
```

### Primary key

A primary key constraint indicates that a column, or group of columns, can be used as a unique identifier for rows in the table.
This requires that the values be both unique and not null.

```typescript
import { serial, pgTable } from "drizzle-orm/pg-core";

const table = pgTable('table', {
	id: serial().primaryKey(),
});
```

```sql
CREATE TABLE IF NOT EXISTS "table" (
	"id" serial PRIMARY KEY NOT NULL
);
```

Source: https://orm.drizzle.team/docs/column-types/mssql

import Section from '@mdx/Section.astro';
import Callout from '@mdx/Callout.astro';
import Npm from '@mdx/Npm.astro';

This page explains concepts available on drizzle versions `1.0.0-beta.2` and higher.

drizzle-orm@beta
drizzle-kit@beta -D

We have native support for all of them, yet if that's not enough for you, feel free to create **[custom types](/docs/custom-types)**.

All examples in this part of the documentation do not use database column name aliases, and column names are generated from TypeScript keys.

You can use database aliases in column names if you want, and you can also use the `casing` parameter to define a mapping strategy for Drizzle.

You can read more about it [here](/docs/sql-schema-declaration#shape-your-data-schema)

### int

Signed 4-byte integer

```typescript
import { int, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
	int: int()
});

```

```sql
CREATE TABLE [table] (
	[int] int
);
```

```typescript
import { sql } from "drizzle-orm";
import { int, mssqlTable } from "drizzle-orm/mssql-core";

export const table = pgTable('table', {
	int1: int().default(10),
});

```

```sql
CREATE TABLE [table] (
	[int1] int DEFAULT 10
);
```

### smallint

`smallint`

Small-range signed 2-byte integer

```typescript
import { smallint, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
	smallint: smallint()
});
```

```sql
CREATE TABLE [table] (
	[smallint] smallint
);
```

```typescript
import { sql } from "drizzle-orm";
import { smallint, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
	smallint1: smallint().default(10),
});
```

```sql
CREATE TABLE [table] (
	[smallint1] smallint DEFAULT 10
);
```

### tinyint

`tinyint`

Small-range signed 1-byte integer

```typescript
import { tinyint, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
	tinyint: tinyint()
});
```

```sql
CREATE TABLE [table] (
	[tinyint] tinyint
);
```

```typescript
import { sql } from "drizzle-orm";
import { tinyint, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
	tinyint1: tinyint().default(10),
});
```

```sql
CREATE TABLE [table] (
	[tinyint1] tinyint DEFAULT 10
);
```

### bigint

`bigint`

Signed 8-byte integer

If you're expecting values above 2^31 but below 2^53, you can utilise `mode: 'number'` and deal with javascript number as opposed to bigint.

```typescript
import { bigint, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
	bigint: bigint({ mode: 'number' })
});

// will be inferred as `number`
bigint: bigint({ mode: 'number' })

// will be inferred as `bigint`
bigint: bigint({ mode: 'bigint' })

// will be inferred as `string`
bigint: bigint({ mode: 'string' })
```

```sql
CREATE TABLE [table] (
	[bigint] bigint
);
```

```typescript
import { sql } from "drizzle-orm";
import { bigint, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
	bigint1: bigint({ mode: 'number' }).default(10)
});
```

```sql
CREATE TABLE [table] (
	[bigint1] bigint DEFAULT 10
);
```

### bit

An integer data type that can take a value of `1`, `0`, or `NULL`

Drizzle will accept `true` or `false` as values instead of `1` and `0`

```typescript
import { bit, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
	bit: bit()
});

```

```sql
CREATE TABLE [table] (
	[bit] bit
);
```

### text

`text`\
Variable-length non-Unicode data in the code page of the server and with a maximum string length
of 2^31 - 1 (2,147,483,647)

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/ntext-text-and-image-transact-sql?view=sql-server-ver17#text)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

```typescript
import { text, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
  text: text()
});

// will be inferred as text: "value1" | "value2" | null
text: text({ enum: ["value1", "value2"] })
```

```sql
CREATE TABLE [table] (
	[text] text
);
```

### ntext

`text`\
Variable-length Unicode data with a maximum string length of 2^30 - 1 (1,073,741,823).

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/ntext-text-and-image-transact-sql?view=sql-server-ver17#text)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

```typescript
import { text, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
  ntext: ntext()
});

// will be inferred as text: "value1" | "value2" | null
ntext: ntext({ enum: ["value1", "value2"] })
```

```sql
CREATE TABLE [table] (
	[ntext] ntext
);
```

### varchar

`varchar(n|max)`\
Variable-size string data. Use n to define the string size in bytes and can be a value from 1 through 8,000

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/char-and-varchar-transact-sql?view=sql-server-ver17#varchar---n--max--)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to MSSQL docs.

```typescript
import { varchar, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
  varchar1: varchar(),
  varchar2: varchar({ length: 256 }),
  varchar3: varchar({ length: 'max' })
});

// will be inferred as text: "value1" | "value2" | null
varchar: varchar({ enum: ["value1", "value2"] }),
```

```sql
CREATE TABLE [table] (
	[varchar1] varchar,
	[varchar2] varchar(256),
	[varchar3] varchar(max)
);
```

### nvarchar

`nvarchar(n|max)`\
Variable-size string data. The value of n defines the string size in byte-pairs

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/nchar-and-nvarchar-transact-sql?view=sql-server-ver17#nvarchar---n--max--)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to MSSQL docs.

```typescript
import { nvarchar, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
  nvarchar1: nvarchar(),
  nvarchar2: nvarchar({ length: 256 }),
});

// will be inferred as text: "value1" | "value2" | null
nvarchar: nvarchar({ enum: ["value1", "value2"] }),

// will be inferred as `json`
nvarchar: nvarchar({ mode: 'json' })
```

```sql
CREATE TABLE [table] (
	[nvarchar1] nvarchar,
	[nvarchar2] nvarchar(256)
);
```

### char

`char(n)`

Fixed-size string data. n defines the string size in bytes and must be a value from 1 through 8,000

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/char-and-varchar-transact-sql?view=sql-server-ver17#char---n--)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to MSSQL docs.

```typescript
import { char, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
  char1: char(),
  char2: char({ length: 256 }),
});

// will be inferred as text: "value1" | "value2" | null
char: char({ enum: ["value1", "value2"] }),
```

```sql
CREATE TABLE [table] (
	[char1] char,
	[char2] char(256)
);
```

### nchar

`nchar(n)`

Fixed-size string data. n defines the string size in byte-pairs, and must be a value from 1 through 4,000

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/nchar-and-nvarchar-transact-sql?view=sql-server-ver17#nchar---n--)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to MSSQL docs.

```typescript
import { nchar, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
  nchar1: nchar(),
  nchar2: nchar({ length: 256 }),
});

// will be inferred as text: "value1" | "value2" | null
nchar: nchar({ enum: ["value1", "value2"] }),
```

```sql
CREATE TABLE [table] (
	[nchar1] nchar,
	[nchar2] nchar(256)
);
```

### binary

Fixed-length binary data with a length of n bytes, where n is a value from 1 through 8,000. The storage size is n bytes.

```typescript
import { binary, mssqlTable } from "drizzle-orm/mssql-core";

const table = mssqlTable('table', {
	binary: binary(),
	binary1: binary({ length: 256 })
});
```

```sql
CREATE TABLE [table] (
	[binary] binary,
	[binary1] binary(256)
);
```

### varbinary

Variable-length binary data. n can be a value from 1 through 8,000. max indicates that the maximum storage size is 2^31-1 bytes

```typescript
import { varbinary, mssqlTable } from "drizzle-orm/mssql-core";

const table = mssqlTable('table', {
	varbinary: varbinary(),
	varbinary1: varbinary({ length: 256 }),
	varbinary2: varbinary({ length: 'max' })
});
```

```sql
CREATE TABLE [table] (
	[varbinary] varbinary,
	[varbinary1] varbinary(256),
	[varbinary2] varbinary(max)
);
```

### numeric

`numeric`

Fixed precision and scale numbers. When maximum precision is used, valid values are from -10^38 + 1 through 10^38 - 1

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/decimal-and-numeric-transact-sql?view=sql-server-ver17#decimal---p---s----and-numeric---p---s---)**

```typescript
import { numeric, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
  numeric1: numeric(),
  numeric2: numeric({ precision: 100 }),
  numeric3: numeric({ precision: 100, scale: 20 })
//   numericNum: numeric({ mode: 'number' }),
//   numericBig: numeric({ mode: 'bigint' }),
});
```

```sql
CREATE TABLE [table] (
	[numeric1] numeric,
	[numeric2] numeric(100),
	[numeric3] numeric(100, 20)
);
```

### decimal

An alias of **[numeric.](#numeric)**

### real

The ISO synonym for real is float(24).

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/float-and-real-transact-sql?view=sql-server-ver17)**

```typescript
import { sql } from "drizzle-orm";
import { real, mssqlTable } from "drizzle-orm/mssql-core";  

const table = mssqlTable('table', {
	real1: real(),
	real2: real().default(10.10)
});
```

```sql
CREATE TABLE [table] (
	[real1] real,
	[real2] real default 10.10
);
```

### float

float \[ (n) ] Where n is the number of bits that are used to store the mantissa of the float number in scientific notation and, therefore, dictates the precision and storage size. If n is specified, it must be a value between 1 and 53. The default value of n is 53.

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/float-and-real-transact-sql?view=sql-server-ver17#syntax)**

```typescript
import { sql } from "drizzle-orm";
import { float, mssqlTable } from "drizzle-orm/mssql-core";

const table = mssqlTable('table', {
	float1: float(),
	float1: float({ precision: 16 })
});
```

```sql
CREATE TABLE [table] (
	[float1] float,
	[float2] float(16)
);
```

### time

`time`

Defines a time of a day. The time is without time zone awareness and is based on a 24-hour clock.

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/time-transact-sql?view=sql-server-ver17#time-description)**

```typescript
import { time, mssqlTable } from "drizzle-orm/mssql-core";

const table = mssqlTable('table', {
  time1: time(),
  time2: time({ mode: 'string' }),
  time3: time({ precision: 6 }),
  time4: time({ precision: 6, mode: 'date' })
});
```

```sql
CREATE TABLE [table] (
	[time1] time,
	[time2] time,
	[time3] time(6),
	[time4] time(6)
);
```

### date

`date`

Calendar date (year, month, day)

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/date-transact-sql?view=sql-server-ver17#date-description)**

```typescript
import { date, mssqlTable } from "drizzle-orm/mssql-core";

const table = mssqlTable('table', {
	date: date(),
});
```

```sql
CREATE TABLE [table] (
	[date] date
);
```

You can specify either `date` or `string` infer modes:

```typescript
// will infer as date
date: date({ mode: "date" }),

// will infer as string
date: date({ mode: "string" }),
```

### datetime

`datetime`

Defines a date that is combined with a time of day with fractional seconds that is based on a 24-hour clock.

Avoid using datetime for new work. Instead, use the time, date, datetime2, and datetimeoffset data types. These types align with the SQL Standard, and are more portable. time, datetime2 and datetimeoffset provide more seconds precision. datetimeoffset provides time zone support for globally deployed applications.

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/datetime-transact-sql?view=sql-server-ver17#description)**

```typescript
import { datetime, mssqlTable } from "drizzle-orm/mssql-core";

const table = mssqlTable('table', {
	datetime: datetime(),
});
```

```sql
CREATE TABLE [table] (
	[datetime] datetime
);
```

You can specify either `date` or `string` infer modes:

```typescript
// will infer as date
datetime: datetime({ mode: "date" }),

// will infer as string
datetime: datetime({ mode: "string" }),
```

### datetime2

`datetime2`

Defines a date that is combined with a time of day that is based on 24-hour clock. datetime2 can be considered as an extension of the existing datetime type that has a larger date range, a larger default fractional precision, and optional user-specified precision.

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/datetime2-transact-sql?view=sql-server-ver17#datetime2-description)**

```typescript
import { datetime2, mssqlTable } from "drizzle-orm/mssql-core";

const table = mssqlTable('table', {
	datetime2: datetime2(),
});
```

```sql
CREATE TABLE [table] (
	[datetime2] datetime2
);
```

You can specify either `date` or `string` infer modes:

```typescript
// will infer as date
datetime2: datetime2({ mode: "date" }),

// will infer as string
datetime2: datetime2({ mode: "string" }),
```

### datetimeoffset

`datetimeoffset`

Defines a date that is combined with a time of a day based on a 24-hour clock like datetime2, and adds time zone awareness based on Coordinated Universal Time (UTC).

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/datetimeoffset-transact-sql?view=sql-server-ver17#datetimeoffset-description)**

```typescript
import { datetimeoffset, mssqlTable } from "drizzle-orm/mssql-core";

const table = mssqlTable('table', {
	datetimeoffset: datetimeoffset(),
});
```

```sql
CREATE TABLE [table] (
	[datetimeoffset] datetimeoffset
);
```

You can specify either `date` or `string` infer modes:

```typescript
// will infer as date
datetimeoffset: datetimeoffset({ mode: "date" }),

// will infer as string
datetimeoffset: datetimeoffset({ mode: "string" }),
```

### Customizing data type

Every column builder has a `.$type()` method, which allows you to customize the data type of the column.

This is useful, for example, with unknown or branded types:

```ts
type UserId = number & { __brand: 'user_id' };
type Data = {
	foo: string;
	bar: number;
};

const users = mssqlTable('users', {
  id: int().$type<UserId>().primaryKey(),
  jsonField: json().$type<Data>(),
});
```
