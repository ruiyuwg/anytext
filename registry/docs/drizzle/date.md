### date

`date`

Calendar date (year, month, day)

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/date-transact-sql?view=sql-server-ver17#date-description)**

const table = mssqlTable('table', {
date: date(),
});

````

```sql
CREATE TABLE [table] (
	[date] date
);
````

// will infer as string
date: date({ mode: "string" }),

````

### datetime
`datetime`  

Defines a date that is combined with a time of day with fractional seconds that is based on a 24-hour clock.

<Callout title='MSSQL docs'>
Avoid using datetime for new work. Instead, use the time, date, datetime2, and datetimeoffset data types. These types align with the SQL Standard, and are more portable. time, datetime2 and datetimeoffset provide more seconds precision. datetimeoffset provides time zone support for globally deployed applications.
</Callout>

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/datetime-transact-sql?view=sql-server-ver17#description)**
<Section>
```typescript
import { datetime, mssqlTable } from "drizzle-orm/mssql-core";

const table = mssqlTable('table', {
	datetime: datetime(),
});
````

```sql
CREATE TABLE [table] (
	[datetime] datetime
);
```

// will infer as string
datetime: datetime({ mode: "string" }),

````

### datetime2
`datetime2`  

Defines a date that is combined with a time of day that is based on 24-hour clock. datetime2 can be considered as an extension of the existing datetime type that has a larger date range, a larger default fractional precision, and optional user-specified precision.

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/datetime2-transact-sql?view=sql-server-ver17#datetime2-description)**
<Section>
```typescript
import { datetime2, mssqlTable } from "drizzle-orm/mssql-core";

const table = mssqlTable('table', {
	datetime2: datetime2(),
});
````

```sql
CREATE TABLE [table] (
	[datetime2] datetime2
);
```

// will infer as string
datetime2: datetime2({ mode: "string" }),

````

### datetimeoffset
`datetimeoffset`  

Defines a date that is combined with a time of a day based on a 24-hour clock like datetime2, and adds time zone awareness based on Coordinated Universal Time (UTC).

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/datetimeoffset-transact-sql?view=sql-server-ver17#datetimeoffset-description)**
<Section>
```typescript
import { datetimeoffset, mssqlTable } from "drizzle-orm/mssql-core";

const table = mssqlTable('table', {
	datetimeoffset: datetimeoffset(),
});
````

```sql
CREATE TABLE [table] (
	[datetimeoffset] datetimeoffset
);
```

// will infer as string
datetimeoffset: datetimeoffset({ mode: "string" }),

````


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
````

### Default value

The `DEFAULT` clause specifies a default value to use for the column if no value
is explicitly provided by the user when doing an `INSERT`.
If there is no explicit `DEFAULT` clause attached to a column definition,
then the default value of the column is `NULL`.

An explicit `DEFAULT` clause may specify that the default value is `NULL`,
a string constant, a blob constant, a signed-number, or any constant expression enclosed in parentheses.

const table = mssqlTable('table', {
integer: integer().default(42),
text: text().default('text'),
});

````

```sql
CREATE TABLE [table] (
	[integer1] integer DEFAULT 42,
	[text] text DEFAULT 'text',
);
````

When using `$default()` or `$defaultFn()`, which are simply different aliases for the same function,
you can generate defaults at runtime and use these values in all insert queries.

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

const table = mssqlTable('table', {
int: int().notNull(),
});

````

```sql
CREATE TABLE [table] (
	[int] int NOT NULL
);
````

### Primary key

A primary key constraint indicates that a column, or group of columns, can be used as a unique identifier for rows in the table.
This requires that the values be both unique and not null.

const table = pgTable('table', {
id: int().primaryKey(),
});

````

```sql
CREATE TABLE [table] (
	[id] int PRIMARY KEY
);
````

Source: https://orm.drizzle.team/docs/column-types/mysql

import Section from '@mdx/Section.astro';
import Callout from '@mdx/Callout.astro';

We have native support for all of them, yet if that's not enough for you, feel free to create **[custom types](/docs/custom-types)**.

You can use database aliases in column names if you want, and you can also use the `casing` parameter to define a mapping strategy for Drizzle.

You can read more about it [here](/docs/sql-schema-declaration#shape-your-data-schema)

### integer

A signed integer, stored in `0`, `1`, `2`, `3`, `4`, `6`, or `8` bytes depending on the magnitude of the value.

const table = mysqlTable('table', {
int: int()
});

````

```sql
CREATE TABLE `table` (
	`int` int
);
````

### tinyint

const table = mysqlTable('table', {
tinyint: tinyint()
});

````

```sql
CREATE TABLE `table` (
	`tinyint` tinyint
);
````

### smallint

const table = mysqlTable('table', {
smallint: smallint()
});

````

```sql
CREATE TABLE `table` (
	`smallint` smallint
);
````

### mediumint

const table = mysqlTable('table', {
mediumint: mediumint()
});

````

```sql
CREATE TABLE `table` (
	`mediumint` mediumint
);
````

### bigint

const table = mysqlTable('table', {
bigint: bigint({ mode: 'number' })
bigintUnsigned: bigint({ mode: 'number', unsigned: true })
});

bigint('...', { mode: 'number' | 'bigint' });

// You can also specify unsigned option for bigint
bigint('...', { mode: 'number' | 'bigint', unsigned: true })

````

```sql
CREATE TABLE `table` (
	`bigint` bigint,
	`bigintUnsigned` bigint unsigned
);
````

We've omitted config of `M` in `bigint(M)`, since it indicates the display width of the numeric type

### real

const table = mysqlTable('table', {
real: real()
});

````

```sql
CREATE TABLE `table` (
	`real` real
);
````

const table = mysqlTable('table', {
realPrecision: real({ precision: 1,}),
realPrecisionScale: real({ precision: 1, scale: 1,}),
});

````

```sql
CREATE TABLE `table` (
	`realPrecision` real(1),
	`realPrecisionScale` real(1, 1)
);
````

### decimal

const table = mysqlTable('table', {
decimal: decimal(),
decimalNum: decimal({ scale: 30, mode: 'number' }),
decimalBig: decimal({ scale: 30, mode: 'bigint' }),
});

````

```sql
CREATE TABLE `table` (
	`decimal` decimal,
	`decimalNum` decimal(30),
	`decimalBig` decimal(30)
);
````

const table = mysqlTable('table', {
decimalPrecision: decimal({ precision: 1,}),
decimalPrecisionScale: decimal({ precision: 1, scale: 1,}),
});

````

```sql
CREATE TABLE `table` (
	`decimalPrecision` decimal(1),
	`decimalPrecisionScale` decimal(1, 1)
);
````

### double

const table = mysqlTable('table', {
double: double('double')
});

````

```sql
CREATE TABLE `table` (
	`double` double
);
````

const table = mysqlTable('table', {
doublePrecision: double({ precision: 1,}),
doublePrecisionScale: double({ precision: 1, scale: 1,}),
});

````

```sql
CREATE TABLE `table` (
	`doublePrecision` double(1),
	`doublePrecisionScale` double(1, 1)
);
````

### float

const table = mysqlTable('table', {
float: float()
});

````

```sql
CREATE TABLE `table` (
	`float` float
);
````

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

const table = mysqlTable('table', {
binary: binary()
});

````

```sql
CREATE TABLE `table` (
	`binary` binary
);
````

### varbinary

`VARBINARY(M)` stores a variable-length byte string of exactly M bytes.\
On insert, shorter values are right-padded with `0x00` bytes to reach M bytes; on retrieval, no padding is stripped.
All bytes—including trailing `0x00`—are significant in comparisons, `ORDER BY`, and `DISTINCT`

const table = mysqlTable('table', {
varbinary: varbinary({ length: 2}),
});

````

```sql
CREATE TABLE `table` (
	`varbinary` varbinary(2)
);
````

### blob

A `BLOB` is a binary large object that can hold a variable amount of data.

const table = mysqlTable('table', {
blob: blob()
});

````

```sql
CREATE TABLE `table` (
	`blob` blob
);
````

### tinyblob

A `TINYBLOB` is a binary large object that can hold a variable amount of data.

const table = mysqlTable('table', {
tinyblob: tinyblob()
});

````

```sql
CREATE TABLE `table` (
	`tinyblob` tinyblob
);
````

### mediumblob

A `MEDIUMBLOB` is a binary large object that can hold a variable amount of data.

const table = mysqlTable('table', {
mediumblob: mediumblob()
});

````

```sql
CREATE TABLE `table` (
	`mediumblob` mediumblob
);
````

### longblob

A `LONGBLOB` is a binary large object that can hold a variable amount of data.

const table = mysqlTable('table', {
longblob: longblob()
});

````

```sql
CREATE TABLE `table` (
	`longblob` longblob
);
````

### char

const table = mysqlTable('table', {
char: char(),
});

````

```sql
CREATE TABLE `table` (
	`char` char
);
````

### varchar

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

const table = mysqlTable('table', {
varchar: varchar({ length: 2 }),
});

// will be inferred as text: "value1" | "value2" | null
varchar: varchar({ length: 6, enum: \["value1", "value2"] })

````

```sql
CREATE TABLE `table` (
	`varchar` varchar(2)
);
````

### text

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

const table = mysqlTable('table', {
text: text(),
});

// will be inferred as text: "value1" | "value2" | null
text: text({ enum: \["value1", "value2"] });

````

```sql
CREATE TABLE `table` (
	`text` text
);
````

### boolean

const table = mysqlTable('table', {
boolean: boolean(),
});

````

```sql
CREATE TABLE `table` (
	`boolean` boolean
);
````

### date

const table = mysqlTable('table', {
date: date(),
});

````

```sql
CREATE TABLE `table` (
	`date` date
);
````

### datetime

const table = mysqlTable('table', {
datetime: datetime(),
});

datetime('...', { mode: 'date' | "string"}),
datetime('...', { fsp : 0..6}),

````

```sql
CREATE TABLE `table` (
	`datetime` datetime
);
````

const table = mysqlTable('table', {
datetime: datetime({ mode: 'date', fsp: 6 }),
});

````

```sql
CREATE TABLE `table` (
	`datetime` datetime(6)
);
````

### time

const table = mysqlTable('table', {
time: time(),
timefsp: time({ fsp: 6 }),
});

time('...', { fsp: 0..6 }),

````

```sql
CREATE TABLE `table` (
	`time` time,
	`timefsp` time(6)
);
````

### year

const table = mysqlTable('table', {
year: year(),
});

````

```sql
CREATE TABLE `table` (
	`year` year
);
````

### timestamp

const table = mysqlTable('table', {
timestamp: timestamp(),
});

timestamp('...', { mode: 'date' | "string"}),
timestamp('...', { fsp : 0..6}),

````

```sql
CREATE TABLE `table` (
	`timestamp` timestamp
);
````

const table = mysqlTable('table', {
timestamp: timestamp({ mode: 'date', fsp: 6 }),
});

````

```sql
CREATE TABLE `table` (
	`timestamp` timestamp(6)
);
````

const table = mysqlTable('table', {
timestamp: timestamp().defaultNow(),
});

````

```sql
CREATE TABLE `table` (
	`timestamp` timestamp DEFAULT (now())
);
````

### json

const table = mysqlTable('table', {
json: json(),
});

````

```sql
CREATE TABLE `table` (
	`json` json
);
````

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

const table = mysqlTable('table', {
popularity: mysqlEnum(\['unknown', 'known', 'popular']),
});

````

```sql
CREATE TABLE `table` (
	`popularity` enum('unknown','known','popular')
);
````

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

const table = mysqlTable('table', {
int: int().notNull(),
});

````

```sql
CREATE TABLE `table` (
	`int` int NOT NULL
);
````

### Default value

The `DEFAULT` clause specifies a default value to use for the column if no value
is explicitly provided by the user when doing an `INSERT`.
If there is no explicit `DEFAULT` clause attached to a column definition,
then the default value of the column is `NULL`.

An explicit `DEFAULT` clause may specify that the default value is `NULL`,
a string constant, a blob constant, a signed-number, or any constant expression enclosed in parentheses.

const table = mysqlTable('table', {
int: int().default(3),
});

````

```sql
CREATE TABLE `table` (
	`int` int DEFAULT 3
);
````

When using `$default()` or `$defaultFn()`, which are simply different aliases for the same function,
you can generate defaults at runtime and use these values in all insert queries.
These functions can assist you in utilizing various implementations such as `uuid`, `cuid`, `cuid2`, and many more.

```ts
import { varchar, mysqlTable } from "drizzle-orm/mysql-core";
import { createId } from '@paralleldrive/cuid2';

const table = mysqlTable('table', {
	id: varchar({ length: 128 }).$defaultFn(() => createId()),
});
```

When using `$onUpdate()` or `$onUpdateFn()`, which are simply different aliases for the same function,
you can generate defaults at runtime and use these values in all update queries.

Adds a dynamic update value to the column. The function will be called when the row is updated,
and the returned value will be used as the column value if none is provided.
If no default (or $defaultFn) value is provided, the function will be called
when the row is inserted as well, and the returned value will be used as the column value.

```ts
import { text, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
    alwaysNull: text().$type<string | null>().$onUpdate(() => null),
});
```

### Primary key

const table = mysqlTable('table', {
int: int().primaryKey(),
});

````

```sql
CREATE TABLE `table` (
	`int` int PRIMARY KEY NOT NULL
);
````

### Auto increment

const table = mysqlTable('table', {
int: int().autoincrement(),
});

````

```sql
CREATE TABLE `table` (
	`int` int AUTO_INCREMENT
);
````

Source: https://orm.drizzle.team/docs/column-types/pg

import Section from '@mdx/Section.astro';
import Callout from '@mdx/Callout.astro';

We have native support for all of them, yet if that's not enough for you, feel free to create **[custom types](/docs/custom-types)**.

You can use database aliases in column names if you want, and you can also use the `casing` parameter to define a mapping strategy for Drizzle.

You can read more about it [here](/docs/sql-schema-declaration#shape-your-data-schema)

### integer

`integer` `int` `int4`\
Signed 4-byte integer

If you need `integer autoincrement` please refer to **[serial.](#serial)**

export const table = pgTable('table', {
int: integer()
});

````

```sql
CREATE TABLE "table" (
	"int" integer
);
````

export const table = pgTable('table', {
int1: integer().default(10),
int2: integer().default(sql`'10'::int`)
});

````

```sql
CREATE TABLE "table" (
	"int1" integer DEFAULT 10,
	"int2" integer DEFAULT '10'::int
);
````

### smallint

`smallint` `int2`\
Small-range signed 2-byte integer

If you need `smallint autoincrement` please refer to **[smallserial.](#smallserial)**

export const table = pgTable('table', {
smallint: smallint()
});

````

```sql
CREATE TABLE "table" (
	"smallint" smallint
);
````

export const table = pgTable('table', {
smallint1: smallint().default(10),
smallint2: smallint().default(sql`'10'::smallint`)
});

````

```sql
CREATE TABLE "table" (
	"smallint1" smallint DEFAULT 10,
	"smallint2" smallint DEFAULT '10'::smallint
);
````

### bigint

`bigint` `int8`\
Signed 8-byte integer

If you need `bigint autoincrement` please refer to **[bigserial.](#bigserial)**

If you're expecting values above 2^31 but below 2^53, you can utilise `mode: 'number'` and deal with javascript number as opposed to bigint.

export const table = pgTable('table', {
bigint: bigint({ mode: 'number' })
});

// will be inferred as `number`
bigint: bigint({ mode: 'number' })

// will be inferred as `bigint`
bigint: bigint({ mode: 'bigint' })

````

```sql
CREATE TABLE "table" (
	"bigint" bigint
);
````

export const table = pgTable('table', {
bigint1: bigint().default(10),
bigint2: bigint().default(sql`'10'::bigint`)
});

````

```sql
CREATE TABLE "table" (
	"bigint1" bigint DEFAULT 10,
	"bigint2" bigint DEFAULT '10'::bigint
);
````

### serial

`serial` `serial4`\
Auto incrementing 4-bytes integer, notational convenience for creating unique identifier columns (similar to the `AUTO_INCREMENT` property supported by some other databases).

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-numeric.html#DATATYPE-SERIAL)**

export const table = pgTable('table', {
serial: serial(),
});

````

```sql
CREATE TABLE "table" (
	"serial" serial NOT NULL
);
````

### smallserial

`smallserial` `serial2`\
Auto incrementing 2-bytes integer, notational convenience for creating unique identifier columns (similar to the `AUTO_INCREMENT` property supported by some other databases).

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-numeric.html#DATATYPE-SERIAL)**

export const table = pgTable('table', {
smallserial: smallserial(),
});

````

```sql
CREATE TABLE "table" (
	"smallserial" smallserial NOT NULL
);
````

### bigserial

`bigserial` `serial8`\
Auto incrementing 8-bytes integer, notational convenience for creating unique identifier columns (similar to the `AUTO_INCREMENT` property supported by some other databases).

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-numeric.html#DATATYPE-SERIAL)**

If you're expecting values above 2^31 but below 2^53, you can utilise `mode: 'number'` and deal with javascript number as opposed to bigint.

export const table = pgTable('table', {
bigserial: bigserial({ mode: 'number' }),
});

````

```sql
CREATE TABLE "table" (
	"bigserial" bigserial NOT NULL
);
````

### boolean

PostgreSQL provides the standard SQL type boolean.

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-boolean.html)**

export const table = pgTable('table', {
boolean: boolean()
});

````

```sql
CREATE TABLE "table" (
	"boolean" boolean
);
````

### bytea

PostgreSQL provides the standard SQL type bytea.

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-binary.html)**

export const table = pgTable('table', {
bytea: bytea()
});

````

```sql
CREATE TABLE IF NOT EXISTS "table" (
	"bytea" bytea,
);
````

### text

`text`\
Variable-length(unlimited) character string.

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-character.html)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

export const table = pgTable('table', {
text: text()
});

// will be inferred as text: "value1" | "value2" | null
text: text({ enum: \["value1", "value2"] })

````

```sql
CREATE TABLE "table" (
	"text" text
);
````

### varchar

`character varying(n)` `varchar(n)`\
Variable-length character string, can store strings up to **`n`** characters (not bytes).

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-character.html)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to PostgreSQL docs.

export const table = pgTable('table', {
varchar1: varchar(),
varchar2: varchar({ length: 256 }),
});

// will be inferred as text: "value1" | "value2" | null
varchar: varchar({ enum: \["value1", "value2"] }),

````

```sql
CREATE TABLE "table" (
	"varchar1" varchar,
	"varchar2" varchar(256)
);
````

### char

`character(n)` `char(n)`\
Fixed-length, blank padded character string, can store strings up to **`n`** characters(not bytes).

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-character.html)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to PostgreSQL docs.

export const table = pgTable('table', {
char1: char(),
char2: char({ length: 256 }),
});

// will be inferred as text: "value1" | "value2" | null
char: char({ enum: \["value1", "value2"] }),

````

```sql
CREATE TABLE "table" (
	"char1" char,
	"char2" char(256)
);
````

### numeric

`numeric` `decimal`\
Exact numeric of selectable precision. Can store numbers with a very large number of digits, up to 131072 digits before the decimal point and up to 16383 digits after the decimal point.

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-numeric.html#DATATYPE-NUMERIC-DECIMAL)**

export const table = pgTable('table', {
numeric1: numeric(),
numeric2: numeric({ precision: 100 }),
numeric3: numeric({ precision: 100, scale: 20 }),
numericNum: numeric({ mode: 'number' }),
numericBig: numeric({ mode: 'bigint' }),
});

````

```sql
CREATE TABLE "table" (
	"numeric1" numeric,
	"numeric2" numeric(100),
	"numeric3" numeric(100, 20),
	"numericNum" numeric,
	"numericBig" numeric
);
````

### decimal

An alias of **[numeric.](#numeric)**

### real

`real` `float4`\
Single precision floating-point number (4 bytes)

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-numeric.html)**

const table = pgTable('table', {
real1: real(),
real2: real().default(10.10),
real3: real().default(sql`'10.10'::real`),
});

````

```sql
CREATE TABLE "table" (
	"real1" real,
	"real2" real default 10.10,
	"real3" real default '10.10'::real
);
````

### double precision

`double precision` `float8`\
Double precision floating-point number (8 bytes)

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-numeric.html)**

const table = pgTable('table', {
double1: doublePrecision(),
double2: doublePrecision().default(10.10),
double3: doublePrecision().default(sql`'10.10'::double precision`),
});

````

```sql
CREATE TABLE "table" (
	"double1" double precision,
	"double2" double precision default 10.10,
	"double3" double precision default '10.10'::double precision
);
````

### json

`json`\
Textual JSON data, as specified in **[RFC 7159.](https://tools.ietf.org/html/rfc7159)**

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-json.html)**

const table = pgTable('table', {
json1: json(),
json2: json().default({ foo: "bar" }),
json3: json().default(sql`'{foo: "bar"}'::json`),
});

````

```sql
CREATE TABLE "table" (
	"json1" json,
	"json2" json default '{"foo": "bar"}'::json,
	"json3" json default '{"foo": "bar"}'::json
);
````

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

### jsonb

`jsonb`\
Binary JSON data, decomposed.

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-json.html)**

const table = pgTable('table', {
jsonb1: jsonb(),
jsonb2: jsonb().default({ foo: "bar" }),
jsonb3: jsonb().default(sql`'{foo: "bar"}'::jsonb`),
});

````
```sql
CREATE TABLE "table" (
	"jsonb1" jsonb,
	"jsonb2" jsonb default '{"foo": "bar"}'::jsonb,
	"jsonb3" jsonb default '{"foo": "bar"}'::jsonb
);
````

You can specify `.$type<..>()` for json object inference, it **won't** check runtime values.
It provides compile time protection for default values, insert and select schemas.

```typescript
// will be inferred as { foo: string }
jsonb: jsonb().$type<{ foo: string }>();

// will be inferred as string[]
jsonb: jsonb().$type<string[]>();

// won't compile
jsonb: jsonb().$type<string[]>().default({});
```

### uuid

`uuid`

The data type uuid stores Universally Unique Identifiers (UUID) as defined by RFC 4122, ISO/IEC 9834-8:2005, and related standards

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-uuid.html)**

```ts
import { uuid, pgTable } from "drizzle-orm/pg-core";

const table = pgTable('table', {
  uuid1: uuid(),
  uuid2: uuid().defaultRandom(),
  uuid3: uuid().default('a0ee-bc99-9c0b-4ef8-bb6d-6bb9-bd38-0a11')
});
```

```sql
CREATE TABLE "table" (
	"uuid1" uuid,
	"uuid2" uuid default gen_random_uuid(),
	"uuid3" uuid default 'a0ee-bc99-9c0b-4ef8-bb6d-6bb9-bd38-0a11'
);
```

### time

`time` `timetz` `time with timezone` `time without timezone`\
Time of day with or without time zone.

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-datetime.html)**

const table = pgTable('table', {
time1: time(),
time2: time({ withTimezone: true }),
time3: time({ precision: 6 }),
time4: time({ precision: 6, withTimezone: true })
});

````

```sql
CREATE TABLE "table" (
	"time1" time,
	"time2" time with timezone,
	"time3" time(6),
	"time4" time(6) with timezone
);
````
