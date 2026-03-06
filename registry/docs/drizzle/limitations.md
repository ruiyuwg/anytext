## Limitations

#### Queries that won't be handled by the `cache` extension:

- Using cache with raw queries, such as:

```ts
db.execute(sql`select 1`);
```

- Using cache with `batch` feature in `d1` and `libsql`

```ts
db.batch([
    db.insert(users).values(...),
    db.update(users).set(...).where()
])
```

- Using cache in transactions

```ts
await db.transaction(async (tx) => {
  await tx.update(accounts).set(...).where(...);
  await tx.update...
});
```

#### Limitations that are temporary and will be handled soon:

- Using cache with Drizzle Relational Queries

```ts
await db.query.users.findMany();
```

- Using cache with `better-sqlite3`, `Durable Objects`, `expo sqlite`
- Using cache with AWS Data API drivers
- Using cache with views

Source: https://orm.drizzle.team/docs/column-types/cockroach

import Section from '@mdx/Section.astro';
import Callout from '@mdx/Callout.astro';
import Npm from '@mdx/Npm.astro';

We have native support for all of them, yet if that's not enough for you, feel free to create **[custom types](/docs/custom-types)**.

You can use database aliases in column names if you want, and you can also use the `casing` parameter to define a mapping strategy for Drizzle.

You can read more about it [here](/docs/sql-schema-declaration#shape-your-data-schema)

### bigint

`int` `int8` `int64` `integer`

Signed 8-byte integer

If you're expecting values above 2^31 but below 2^53, you can utilize `mode: 'number'` and deal with javascript number as opposed to bigint.

export const table = cockroachTable('table', {
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

export const table = cockroachTable('table', {
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

### smallint

`smallint` `int2`\
Small-range signed 2-byte integer

export const table = cockroachTable('table', {
smallint: smallint()
});

````

```sql
CREATE TABLE "table" (
	"smallint" smallint
);
````

export const table = cockroachTable('table', {
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

### int4

Signed 4-byte integer

export const table = cockroachTable('table', {
int4: int4()
});

````

```sql
CREATE TABLE "table" (
	"int4" int4
);
````

export const table = cockroachTable('table', {
int1: int4().default(10),
int2: int4().default(sql`'10'::int4`)
});

````

```sql
CREATE TABLE "table" (
	"int1" int4 DEFAULT 10,
	"int2" int4 DEFAULT '10'::int4
);
````

### int8

An alias of **[bigint.](#bigint)**

### int2

An alias of **[smallint.](#smallint)**

### bool

Cockroach provides the standard SQL type bool.

For more info please refer to the official Cockroach **[docs.](https://www.cockroachlabs.com/docs/stable/bool)**

export const table = cockroachTable('table', {
boolean: bool()
});

````

```sql
CREATE TABLE "table" (
	"boolean" bool
);
````

### string

`text` `varchar`, `char`

The `STRING` data type stores a string of Unicode characters.

`VARCHAR` (and alias `CHARACTER VARYING`)
`CHAR` (and alias `CHARACTER`)
`NAME`

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/string)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

export const table = cockroachTable('table', {
stringColumn: string(), // equivalent to `text` PostgreSQL type
stringColumn1: string({ length: 256 }), // equivalent to `varchar(256)` PostgreSQL type
});

// will be inferred as text: "value1" | "value2" | null
stringColumn: string({ enum: \["value1", "value2"] })

````

```sql
CREATE TABLE "table" (
	"stringColumn" string,
    "stringColumn1" string(256),
);
````

### text

CockroachDB alias for `STRING`:

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/string)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

export const table = cockroachTable('table', {
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

`character varying(n)` `varchar(n)`

`STRING` alias used to stay compatible with PostgreSQL

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/string)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to PostgreSQL docs.

export const table = cockroachTable('table', {
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

`character(n)` `char(n)`

`STRING` alias used to stay compatible with PostgreSQL

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/string)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to PostgreSQL docs.

export const table = cockroachTable('table', {
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

https://www.cockroachlabs.com/docs/stable/float

### decimal

`numeric` `decimal` `dec`
The DECIMAL data type stores exact, fixed-point numbers. This type is used when it is important to preserve exact precision, for example, with monetary data.

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/decimal)**

export const table = cockroachTable('table', {
decimal1: decimal(),
decimal2: decimal({ precision: 100 }),
decimal3: decimal({ precision: 100, scale: 20 }),
decimalNum: decimal({ mode: 'number' }),
decimalBig: decimal({ mode: 'bigint' }),
});

````

```sql
CREATE TABLE "table" (
	"decimal1" decimal,
	"decimal2" decimal(100),
	"decimal3" decimal(100, 20),
	"decimalNum" decimal,
	"decimalBig" decimal
);
````

### numeric

An alias of **[decimal.](#decimal)**

### float

`float` `float8` `double precision`

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/float)**

const table = cockroachTable('table', {
float1: float(),
float2: float().default(10.10),
float3: float().default(sql`'10.10'::float`),
});

````

```sql
CREATE TABLE "table" (
	"float1" float,
	"float2" float default 10.10,
	"float3" float default '10.10'::float
);
````

### real

`real` `float4`\
Single precision floating-point number (4 bytes)

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/float)**

const table = cockroachTable('table', {
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

An alias of **[float.](#float)**

### jsonb

`jsonb`

The JSONB data type stores JSON (JavaScript Object Notation) data as a binary representation of the JSONB value, which eliminates whitespace, duplicate keys, and key ordering

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/jsonb)**

const table = cockroachTable('table', {
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

### bit

`bit`

The BIT data types store bit arrays. With BIT, the length is fixed.

**Size**

The number of bits in a BIT value is determined as follows:

| Type declaration		| Logical size	|
|:------------------		|:--------------	|
| BIT						| 1 bit				|
| BIT(N)					| N bits			|

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/bit)**

export const table = cockroachTable('table', {
bit1: bit(),
bit2: bit({ length: 15 }),
bit3: bit({ length: 15 }).default('10011'),
bit4: bit({ length: 15 }).default(sql`'10011'`)
});

````
```sql
CREATE TABLE "table" (
	"bit1" bit,
	"bit2" bit(15),
	"bit3" bit(15) DEFAULT '10011',
	"bit4" bit(15) DEFAULT '10011'
);

````

### varbit

`varbit`

The VARBIT data types store bit arrays. With VARBIT, the length can be variable.

**Size**

The number of bits in a VARBIT value is determined as follows:

| Type declaration		| Logical size													|
|:------------------		|:--------------													|
| VARBIT					| variable with no maximum							|
| VARBIT(N)					| variable with a maximum of N bits	|

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/bit)**

export const table = cockroachTable('table', {
varbit1: varbit(),
varbit2: varbit({ length: 15 }),
varbit3: varbit({ length: 15 }).default('10011'),
varbit4: varbit({ length: 15 }).default(sql`'10011'`)
});

````
```sql
CREATE TABLE "table" (
	"varbit1" varbit,
	"varbit2" varbit(15),
	"varbit3" varbit(15) DEFAULT '10011',
	"varbit4" varbit(15) DEFAULT '10011'
);
````

### uuid

`uuid`

The UUID (Universally Unique Identifier) data type stores a 128-bit value that is unique across both space and time.

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/uuid)**

```ts
import { uuid, cockroachTable } from "drizzle-orm/cockroach-core";

const table = cockroachTable('table', {
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

`time` `timetz` `time with timezone` `time without timezone`

The `TIME` data type stores the time of day in UTC.
The `TIMETZ` data type stores a time of day with a time zone offset from UTC.

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/time)**

const table = cockroachTable('table', {
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

### timestamp

`timestamp` `timestamptz` `timestamp with time zone` `timestamp without time zone`

The TIMESTAMP and TIMESTAMPTZ data types store a date and time pair in UTC.

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/timestamp)**

const table = cockroachTable('table', {
timestamp1: timestamp(),
timestamp2: timestamp({ precision: 6, withTimezone: true }),
timestamp3: timestamp().defaultNow(),
timestamp4: timestamp().default(sql`now()`),
});

````
```sql
CREATE TABLE "table" (
	"timestamp1" timestamp,
	"timestamp2" timestamp (6) with time zone,
	"timestamp3" timestamp default now(),
	"timestamp4" timestamp default now()
);
````

You can specify either `date` or `string` infer modes:

```typescript
// will infer as date
timestamp: timestamp({ mode: "date" }),

// will infer as string
timestamp: timestamp({ mode: "string" }),
```

> The `string` mode does not perform any mappings for you. This mode was added to Drizzle ORM to provide developers
> with the possibility to handle dates and date mappings themselves, depending on their needs.
> Drizzle will pass raw dates as strings `to` and `from` the database, so the behavior should be as predictable as possible
> and aligned 100% with the database behavior

> The `date` mode is the regular way to work with dates. Drizzle will take care of all mappings between the database and the JS Date object

### date

`date`

The DATE data type stores a year, month, and day.

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/date)**

const table = cockroachTable('table', {
date: date(),
});

````

```sql
CREATE TABLE "table" (
	"date" date
);
````

// will infer as string
date: date({ mode: "string" }),

````
### interval
`interval`  

Stores a value that represents a span of time.

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/interval)** 

<Section>
```typescript
import { interval, cockroachTable } from "drizzle-orm/cockroach-core";

const table = cockroachTable('table', {
	interval1: interval(),
  interval2: interval({ fields: 'day' }),
  interval3: interval({ fields: 'month' , precision: 6 }),
});

````

```sql
CREATE TABLE "table" (
	"interval1" interval,
	"interval2" interval day,
	"interval3" interval(6) month
);
```

### enum

`enum` `enumerated types`\
Enumerated (enum) types are data types that comprise a static, ordered set of values.
They are equivalent to the enum types supported in a number of programming languages.
An example of an enum type might be the days of the week, or a set of status values for a piece of data.

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/enum)**

export const moodEnum = cockroachEnum('mood', \['sad', 'ok', 'happy']);

export const table = cockroachTable('table', {
mood: moodEnum(),
});

````

```sql
CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');

CREATE TABLE "table" (
	"mood" mood
);
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

const users = cockroachTable('users', {
  id: int().$type<UserId>().primaryKey(),
  jsonField: json().$type<Data>(),
});
```

### Identity Columns

PostgreSQL and CockroachDB supports identity columns as a way to automatically generate unique integer values for a column. These values are generated using sequences and can be defined using the GENERATED AS IDENTITY clause.

**Types of Identity Columns**

- `GENERATED ALWAYS AS IDENTITY`: The database always generates a value for the column. Manual insertion or updates to this column are not allowed unless the OVERRIDING SYSTEM VALUE clause is used.
- `GENERATED BY DEFAULT AS IDENTITY`: The database generates a value by default, but manual values can also be inserted or updated. If a manual value is provided, it will be used instead of the system-generated value.

**Usage example**

```ts
import { pgTable, integer, text } from 'drizzle-orm/pg-core' 

export const ingredients = pgTable("ingredients", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
  name: text().notNull(),
  description: text(),
});
```

You can specify all properties available for sequences in the `.generatedAlwaysAsIdentity()` function. Additionally, you can specify custom names for these sequences

PostgreSQL docs [reference](https://www.postgresql.org/docs/current/sql-createtable.html#SQL-CREATETABLE-PARMS-GENERATED-IDENTITY).

### Default value

The `DEFAULT` clause specifies a default value to use for the column if no value
is explicitly provided by the user when doing an `INSERT`.
If there is no explicit `DEFAULT` clause attached to a column definition,
then the default value of the column is `NULL`.

An explicit `DEFAULT` clause may specify that the default value is `NULL`,
a string constant, a blob constant, a signed-number, or any constant expression enclosed in parentheses.

const table = pgTable('table', {
integer1: integer().default(42),
integer2: integer().default(sql`'42'::integer`),
uuid1: uuid().defaultRandom(),
uuid2: uuid().default(sql`gen_random_uuid()`),
});

````

```sql
CREATE TABLE IF NOT EXISTS "table" (
	"integer1" integer DEFAULT 42,
	"integer2" integer DEFAULT '42'::integer,
	"uuid1" uuid DEFAULT gen_random_uuid(),
	"uuid2" uuid DEFAULT gen_random_uuid()
);
````

When using `$default()` or `$defaultFn()`, which are simply different aliases for the same function,
you can generate defaults at runtime and use these values in all insert queries.

These functions can assist you in utilizing various implementations such as `uuid`, `cuid`, `cuid2`, and many more.

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

const table = pgTable('table', {
integer: integer().notNull(),
});

````

```sql
CREATE TABLE IF NOT EXISTS "table" (
	"integer" integer NOT NULL
);
````

### Primary key

A primary key constraint indicates that a column, or group of columns, can be used as a unique identifier for rows in the table.
This requires that the values be both unique and not null.

const table = pgTable('table', {
id: serial().primaryKey(),
});

````

```sql
CREATE TABLE IF NOT EXISTS "table" (
	"id" serial PRIMARY KEY NOT NULL
);
````

Source: https://orm.drizzle.team/docs/column-types/mssql

import Section from '@mdx/Section.astro';
import Callout from '@mdx/Callout.astro';
import Npm from '@mdx/Npm.astro';

We have native support for all of them, yet if that's not enough for you, feel free to create **[custom types](/docs/custom-types)**.

You can use database aliases in column names if you want, and you can also use the `casing` parameter to define a mapping strategy for Drizzle.

You can read more about it [here](/docs/sql-schema-declaration#shape-your-data-schema)

### int

Signed 4-byte integer

export const table = mssqlTable('table', {
int: int()
});

````

```sql
CREATE TABLE [table] (
	[int] int
);
````

export const table = pgTable('table', {
int1: int().default(10),
});

````

```sql
CREATE TABLE [table] (
	[int1] int DEFAULT 10
);
````

### smallint

`smallint`

Small-range signed 2-byte integer

export const table = mssqlTable('table', {
smallint: smallint()
});

````

```sql
CREATE TABLE [table] (
	[smallint] smallint
);
````

export const table = mssqlTable('table', {
smallint1: smallint().default(10),
});

````

```sql
CREATE TABLE [table] (
	[smallint1] smallint DEFAULT 10
);
````

### tinyint

`tinyint`

Small-range signed 1-byte integer

export const table = mssqlTable('table', {
tinyint: tinyint()
});

````

```sql
CREATE TABLE [table] (
	[tinyint] tinyint
);
````

export const table = mssqlTable('table', {
tinyint1: tinyint().default(10),
});

````

```sql
CREATE TABLE [table] (
	[tinyint1] tinyint DEFAULT 10
);
````

### bigint

`bigint`

Signed 8-byte integer

If you're expecting values above 2^31 but below 2^53, you can utilise `mode: 'number'` and deal with javascript number as opposed to bigint.

export const table = mssqlTable('table', {
bigint: bigint({ mode: 'number' })
});

// will be inferred as `number`
bigint: bigint({ mode: 'number' })

// will be inferred as `bigint`
bigint: bigint({ mode: 'bigint' })

// will be inferred as `string`
bigint: bigint({ mode: 'string' })

````

```sql
CREATE TABLE [table] (
	[bigint] bigint
);
````

export const table = mssqlTable('table', {
bigint1: bigint({ mode: 'number' }).default(10)
});

````

```sql
CREATE TABLE [table] (
	[bigint1] bigint DEFAULT 10
);
````

### bit

An integer data type that can take a value of `1`, `0`, or `NULL`

Drizzle will accept `true` or `false` as values instead of `1` and `0`

export const table = mssqlTable('table', {
bit: bit()
});

````

```sql
CREATE TABLE [table] (
	[bit] bit
);
````

### text

`text`\
Variable-length non-Unicode data in the code page of the server and with a maximum string length
of 2^31 - 1 (2,147,483,647)

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/ntext-text-and-image-transact-sql?view=sql-server-ver17#text)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

export const table = mssqlTable('table', {
text: text()
});

// will be inferred as text: "value1" | "value2" | null
text: text({ enum: \["value1", "value2"] })

````

```sql
CREATE TABLE [table] (
	[text] text
);
````

### ntext

`text`\
Variable-length Unicode data with a maximum string length of 2^30 - 1 (1,073,741,823).

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/ntext-text-and-image-transact-sql?view=sql-server-ver17#text)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

export const table = mssqlTable('table', {
ntext: ntext()
});

// will be inferred as text: "value1" | "value2" | null
ntext: ntext({ enum: \["value1", "value2"] })

````

```sql
CREATE TABLE [table] (
	[ntext] ntext
);
````

### varchar

`varchar(n|max)`\
Variable-size string data. Use n to define the string size in bytes and can be a value from 1 through 8,000

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/char-and-varchar-transact-sql?view=sql-server-ver17#varchar---n--max--)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to MSSQL docs.

export const table = mssqlTable('table', {
varchar1: varchar(),
varchar2: varchar({ length: 256 }),
varchar3: varchar({ length: 'max' })
});

// will be inferred as text: "value1" | "value2" | null
varchar: varchar({ enum: \["value1", "value2"] }),

````

```sql
CREATE TABLE [table] (
	[varchar1] varchar,
	[varchar2] varchar(256),
	[varchar3] varchar(max)
);
````

### nvarchar

`nvarchar(n|max)`\
Variable-size string data. The value of n defines the string size in byte-pairs

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/nchar-and-nvarchar-transact-sql?view=sql-server-ver17#nvarchar---n--max--)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to MSSQL docs.

export const table = mssqlTable('table', {
nvarchar1: nvarchar(),
nvarchar2: nvarchar({ length: 256 }),
});

// will be inferred as text: "value1" | "value2" | null
nvarchar: nvarchar({ enum: \["value1", "value2"] }),

// will be inferred as `json`
nvarchar: nvarchar({ mode: 'json' })

````

```sql
CREATE TABLE [table] (
	[nvarchar1] nvarchar,
	[nvarchar2] nvarchar(256)
);
````

### char

`char(n)`

Fixed-size string data. n defines the string size in bytes and must be a value from 1 through 8,000

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/char-and-varchar-transact-sql?view=sql-server-ver17#char---n--)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to MSSQL docs.

export const table = mssqlTable('table', {
char1: char(),
char2: char({ length: 256 }),
});

// will be inferred as text: "value1" | "value2" | null
char: char({ enum: \["value1", "value2"] }),

````

```sql
CREATE TABLE [table] (
	[char1] char,
	[char2] char(256)
);
````

### nchar

`nchar(n)`

Fixed-size string data. n defines the string size in byte-pairs, and must be a value from 1 through 4,000

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/nchar-and-nvarchar-transact-sql?view=sql-server-ver17#nchar---n--)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to MSSQL docs.

export const table = mssqlTable('table', {
nchar1: nchar(),
nchar2: nchar({ length: 256 }),
});

// will be inferred as text: "value1" | "value2" | null
nchar: nchar({ enum: \["value1", "value2"] }),

````

```sql
CREATE TABLE [table] (
	[nchar1] nchar,
	[nchar2] nchar(256)
);
````

### binary

Fixed-length binary data with a length of n bytes, where n is a value from 1 through 8,000. The storage size is n bytes.

const table = mssqlTable('table', {
binary: binary(),
binary1: binary({ length: 256 })
});

````

```sql
CREATE TABLE [table] (
	[binary] binary,
	[binary1] binary(256)
);
````

### varbinary

Variable-length binary data. n can be a value from 1 through 8,000. max indicates that the maximum storage size is 2^31-1 bytes

const table = mssqlTable('table', {
varbinary: varbinary(),
varbinary1: varbinary({ length: 256 }),
varbinary2: varbinary({ length: 'max' })
});

````

```sql
CREATE TABLE [table] (
	[varbinary] varbinary,
	[varbinary1] varbinary(256),
	[varbinary2] varbinary(max)
);
````

### numeric

`numeric`

Fixed precision and scale numbers. When maximum precision is used, valid values are from -10^38 + 1 through 10^38 - 1

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/decimal-and-numeric-transact-sql?view=sql-server-ver17#decimal---p---s----and-numeric---p---s---)**

export const table = mssqlTable('table', {
numeric1: numeric(),
numeric2: numeric({ precision: 100 }),
numeric3: numeric({ precision: 100, scale: 20 })
//   numericNum: numeric({ mode: 'number' }),
//   numericBig: numeric({ mode: 'bigint' }),
});

````

```sql
CREATE TABLE [table] (
	[numeric1] numeric,
	[numeric2] numeric(100),
	[numeric3] numeric(100, 20)
);
````

### decimal

An alias of **[numeric.](#numeric)**

### real

The ISO synonym for real is float(24).

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/float-and-real-transact-sql?view=sql-server-ver17)**

const table = mssqlTable('table', {
real1: real(),
real2: real().default(10.10)
});

````

```sql
CREATE TABLE [table] (
	[real1] real,
	[real2] real default 10.10
);
````

### float

float \[ (n) ] Where n is the number of bits that are used to store the mantissa of the float number in scientific notation and, therefore, dictates the precision and storage size. If n is specified, it must be a value between 1 and 53. The default value of n is 53.

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/float-and-real-transact-sql?view=sql-server-ver17#syntax)**

const table = mssqlTable('table', {
float1: float(),
float1: float({ precision: 16 })
});

````

```sql
CREATE TABLE [table] (
	[float1] float,
	[float2] float(16)
);
````

### time

`time`

Defines a time of a day. The time is without time zone awareness and is based on a 24-hour clock.

For more info please refer to the official MSSQL **[docs.](https://learn.microsoft.com/en-us/sql/t-sql/data-types/time-transact-sql?view=sql-server-ver17#time-description)**

const table = mssqlTable('table', {
time1: time(),
time2: time({ mode: 'string' }),
time3: time({ precision: 6 }),
time4: time({ precision: 6, mode: 'date' })
});

````

```sql
CREATE TABLE [table] (
	[time1] time,
	[time2] time,
	[time3] time(6),
	[time4] time(6)
);
````

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

### timestamp

`timestamp` `timestamptz` `timestamp with time zone` `timestamp without time zone`\
Date and time with or without time zone.

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-datetime.html)**

const table = pgTable('table', {
timestamp1: timestamp(),
timestamp2: timestamp({ precision: 6, withTimezone: true }),
timestamp3: timestamp().defaultNow(),
timestamp4: timestamp().default(sql`now()`),
});

````
```sql
CREATE TABLE "table" (
	"timestamp1" timestamp,
	"timestamp2" timestamp (6) with time zone,
	"timestamp3" timestamp default now(),
	"timestamp4" timestamp default now()
);
````

You can specify either `date` or `string` infer modes:

```typescript
// will infer as date
timestamp: timestamp({ mode: "date" }),

// will infer as string
timestamp: timestamp({ mode: "string" }),
```

> The `string` mode does not perform any mappings for you. This mode was added to Drizzle ORM to provide developers
> with the possibility to handle dates and date mappings themselves, depending on their needs.
> Drizzle will pass raw dates as strings `to` and `from` the database, so the behavior should be as predictable as possible
> and aligned 100% with the database behavior

> The `date` mode is the regular way to work with dates. Drizzle will take care of all mappings between the database and the JS Date object

As PostgreSQL docs stated:

> In a literal that has been determined to be timestamp without time zone, PostgreSQL will silently ignore any time zone indication.
> That is, the resulting value is derived from the date/time fields in the input value, and is not adjusted for time zone.
>
> For timestamp with time zone, the internally stored value is always in UTC (Universal Coordinated Time, traditionally known as Greenwich Mean Time, GMT).
> An input value that has an explicit time zone specified is converted to UTC using the appropriate offset for that time zone.
> If no time zone is stated in the input string, then it is assumed to be in the time zone indicated by the system's TimeZone parameter,
> and is converted to UTC using the offset for the timezone zone.

So for `timestamp with timezone` you will get back string converted to a timezone set in your Postgres instance.
You can check timezone using this sql query:

```sql
show timezone;
```

### date

`date`\
Calendar date (year, month, day)

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-datetime.html)**

const table = pgTable('table', {
date: date(),
});

````

```sql
CREATE TABLE "table" (
	"date" date
);
````

// will infer as string
date: date({ mode: "string" }),

````
### interval
`interval`  
Time span

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-datetime.html)** 

<Section>
```typescript
import { interval, pgTable } from "drizzle-orm/pg-core";

const table = pgTable('table', {
	interval1: interval(),
  interval2: interval({ fields: 'day' }),
  interval3: interval({ fields: 'month' , precision: 6 }),
});

````

```sql
CREATE TABLE "table" (
	"interval1" interval,
	"interval2" interval day,
	"interval3" interval(6) month
);
```

### point

`point`\
Geometric point type

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-geometric.html#DATATYPE-GEOMETRIC-POINTS)**

Type `point` has 2 modes for mappings from the database: `tuple` and `xy`.

- `tuple` will be accepted for insert and mapped on select to a tuple. So, the database Point(1,2) will be typed as \[1,2] with drizzle.

- `xy` will be accepted for insert and mapped on select to an object with x, y coordinates. So, the database Point(1,2) will be typed as `{ x: 1, y: 2 }` with drizzle

```sql
CREATE TABLE "items" (
	"point" point,
	"pointObj" point
);
```

### line

`line`\
Geometric line type

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-geometric.html#DATATYPE-LINE)**

Type `line` has 2 modes for mappings from the database: `tuple` and `abc`.

- `tuple` will be accepted for insert and mapped on select to a tuple. So, the database Line{1,2,3} will be typed as \[1,2,3] with drizzle.

- `abc` will be accepted for insert and mapped on select to an object with a, b, and c constants from the equation `Ax + By + C = 0`. So, the database Line{1,2,3} will be typed as `{ a: 1, b: 2, c: 3 }` with drizzle.

```sql
CREATE TABLE "items" (
	"line" line,
	"lineObj" line
);
```

### enum

`enum` `enumerated types`\
Enumerated (enum) types are data types that comprise a static, ordered set of values.
They are equivalent to the enum types supported in a number of programming languages.
An example of an enum type might be the days of the week, or a set of status values for a piece of data.

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-enum.html)**

export const moodEnum = pgEnum('mood', \['sad', 'ok', 'happy']);

export const table = pgTable('table', {
mood: moodEnum(),
});

````

```sql
CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');

CREATE TABLE "table" (
	"mood" mood
);
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

const users = pgTable('users', {
  id: serial().$type<UserId>().primaryKey(),
  jsonField: json().$type<Data>(),
});
```

### Identity Columns

PostgreSQL supports identity columns as a way to automatically generate unique integer values for a column. These values are generated using sequences and can be defined using the GENERATED AS IDENTITY clause.

**Types of Identity Columns**

- `GENERATED ALWAYS AS IDENTITY`: The database always generates a value for the column. Manual insertion or updates to this column are not allowed unless the OVERRIDING SYSTEM VALUE clause is used.
- `GENERATED BY DEFAULT AS IDENTITY`: The database generates a value by default, but manual values can also be inserted or updated. If a manual value is provided, it will be used instead of the system-generated value.

**Key Features**

- Automatic Value Generation: Utilizes sequences to generate unique values for each new row.
- Customizable Sequence Options: You can define starting values, increments, and other sequence options.
- Support for Multiple Identity Columns: PostgreSQL allows more than one identity column per table.

**Limitations**

- Manual Insertion Restrictions: For columns defined with GENERATED ALWAYS AS IDENTITY, manual insertion or updates require the OVERRIDING SYSTEM VALUE clause.
- Sequence Constraints: Identity columns depend on sequences, which must be managed correctly to avoid conflicts or gaps.

**Usage example**

```ts
import { pgTable, integer, text } from 'drizzle-orm/pg-core' 

export const ingredients = pgTable("ingredients", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
  name: text().notNull(),
  description: text(),
});
```

You can specify all properties available for sequences in the `.generatedAlwaysAsIdentity()` function. Additionally, you can specify custom names for these sequences

PostgreSQL docs [reference](https://www.postgresql.org/docs/current/sql-createtable.html#SQL-CREATETABLE-PARMS-GENERATED-IDENTITY).

### Default value

The `DEFAULT` clause specifies a default value to use for the column if no value
is explicitly provided by the user when doing an `INSERT`.
If there is no explicit `DEFAULT` clause attached to a column definition,
then the default value of the column is `NULL`.

An explicit `DEFAULT` clause may specify that the default value is `NULL`,
a string constant, a blob constant, a signed-number, or any constant expression enclosed in parentheses.

const table = pgTable('table', {
integer1: integer().default(42),
integer2: integer().default(sql`'42'::integer`),
uuid1: uuid().defaultRandom(),
uuid2: uuid().default(sql`gen_random_uuid()`),
});

````

```sql
CREATE TABLE "table" (
	"integer1" integer DEFAULT 42,
	"integer2" integer DEFAULT '42'::integer,
	"uuid1" uuid DEFAULT gen_random_uuid(),
	"uuid2" uuid DEFAULT gen_random_uuid()
);
````

When using `$default()` or `$defaultFn()`, which are simply different aliases for the same function,
you can generate defaults at runtime and use these values in all insert queries.

These functions can assist you in utilizing various implementations such as `uuid`, `cuid`, `cuid2`, and many more.

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

const table = pgTable('table', {
integer: integer().notNull(),
});

````

```sql
CREATE TABLE "table" (
	"integer" integer NOT NULL
);
````

### Primary key

A primary key constraint indicates that a column, or group of columns, can be used as a unique identifier for rows in the table.
This requires that the values be both unique and not null.

const table = pgTable('table', {
id: serial().primaryKey(),
});

````

```sql
CREATE TABLE "table" (
	"id" serial PRIMARY KEY NOT NULL
);
````

Source: https://orm.drizzle.team/docs/column-types/singlestore

import Section from '@mdx/Section.astro';
import Callout from '@mdx/Callout.astro';

We have native support for all of them, yet if that's not enough for you, feel free to create **[custom types](/docs/custom-types)**.

You can use database aliases in column names if you want, and you can also use the `casing` parameter to define a mapping strategy for Drizzle.

You can read more about it [here](/docs/sql-schema-declaration#shape-your-data-schema)

### integer

A signed integer, stored in `0`, `1`, `2`, `3`, `4`, `6`, or `8` bytes depending on the magnitude of the value.

const table = singlestoreTable('table', {
int: int()
});

````

```sql
CREATE TABLE `table` (
	`int` int
);
````

### tinyint

const table = singlestoreTable('table', {
tinyint: tinyint()
});

````

```sql
CREATE TABLE `table` (
	`tinyint` tinyint
);
````

### smallint

const table = singlestoreTable('table', {
smallint: smallint()
});

````

```sql
CREATE TABLE `table` (
	`smallint` smallint
);
````

### mediumint

const table = singlestoreTable('table', {
mediumint: mediumint()
});

````

```sql
CREATE TABLE `table` (
	`mediumint` mediumint
);
````

### bigint

const table = singlestoreTable('table', {
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

const table = singlestoreTable('table', {
real: real()
});

````

```sql
CREATE TABLE `table` (
	`real` real
);
````

const table = singlestoreTable('table', {
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

const table = singlestoreTable('table', {
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

const table = singlestoreTable('table', {
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

const table = singlestoreTable('table', {
double: double('double')
});

````

```sql
CREATE TABLE `table` (
	`double` double
);
````

const table = singlestoreTable('table', {
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

const table = singlestoreTable('table', {
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
import { serial, singlestoreTable } from "drizzle-orm/singlestore-core";

const table = singlestoreTable('table', {
	serial: serial()
});
```

```sql
CREATE TABLE `table` (
	`serial` serial AUTO_INCREMENT
);
```

### binary

const table = singlestoreTable('table', {
binary: binary()
});

````

```sql
CREATE TABLE `table` (
	`binary` binary
);
````

### varbinary

const table = singlestoreTable('table', {
varbinary: varbinary({ length: 2}),
});

````

```sql
CREATE TABLE `table` (
	`varbinary` varbinary(2)
);
````

### char

const table = singlestoreTable('table', {
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

const table = singlestoreTable('table', {
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

const table = singlestoreTable('table', {
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

const table = singlestoreTable('table', {
boolean: boolean(),
});

````

```sql
CREATE TABLE `table` (
	`boolean` boolean
);
````

### date

const table = singlestoreTable('table', {
date: date(),
});

````

```sql
CREATE TABLE `table` (
	`date` date
);
````

### datetime

const table = singlestoreTable('table', {
datetime: datetime(),
});

datetime('...', { mode: 'date' | "string"}),

````

```sql
CREATE TABLE `table` (
	`datetime` datetime
);
````

### time

const table = singlestoreTable('table', {
time: time(),
});

````

```sql
CREATE TABLE `table` (
	`time` time
);
````

### year

const table = singlestoreTable('table', {
year: year(),
});

````

```sql
CREATE TABLE `table` (
	`year` year
);
````

### timestamp

const table = singlestoreTable('table', {
timestamp: timestamp(),
});

timestamp('...', { mode: 'date' | "string"}),

````

```sql
CREATE TABLE `table` (
	`timestamp` timestamp
);
````

const table = singlestoreTable('table', {
timestamp: timestamp().defaultNow(),
});

````

```sql
CREATE TABLE `table` (
	`timestamp` timestamp DEFAULT (now())
);
````

### json

const table = singlestoreTable('table', {
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

const table = singlestoreTable('table', {
popularity: singlestoreEnum(\['unknown', 'known', 'popular']),
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

const users = singlestoreTable('users', {
  id: int().$type<UserId>().primaryKey(),
  jsonField: json().$type<Data>(),
});
```

### Not null

`NOT NULL` constraint dictates that the associated column may not contain a `NULL` value.

const table = singlestoreTable('table', {
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

const table = singlestoreTable('table', {
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
import { varchar, singlestoreTable } from "drizzle-orm/singlestore-core";
import { createId } from '@paralleldrive/cuid2';

const table = singlestoreTable('table', {
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
import { text, singlestoreTable } from "drizzle-orm/singlestore-core";

const table = singlestoreTable('table', {
    alwaysNull: text().$type<string | null>().$onUpdate(() => null),
});
```

### Primary key

const table = singlestoreTable('table', {
int: int().primaryKey(),
});

````

```sql
CREATE TABLE `table` (
	`int` int PRIMARY KEY NOT NULL
);
````

### Auto increment

const table = singlestoreTable('table', {
int: int().autoincrement(),
});

````

```sql
CREATE TABLE `table` (
	`int` int AUTO_INCREMENT
);
````

Source: https://orm.drizzle.team/docs/column-types/sqlite

import Section from '@mdx/Section.astro';
import Callout from '@mdx/Callout.astro';

Based on the official **[SQLite docs](https://www.sqlite.org/datatype3.html)**,
each value stored in an SQLite database (or manipulated by the database engine)
has one of the following storage classes `NULL`, `INTEGER`, `REAL`, `TEXT` and `BLOB`.

We have native support for all of them, yet if that's not enough for you, feel free to create **[custom types](/docs/custom-types)**.

You can use database aliases in column names if you want, and you can also use the `casing` parameter to define a mapping strategy for Drizzle.

You can read more about it [here](/docs/sql-schema-declaration#shape-your-data-schema)

### Integer

A signed integer, stored in `0`, `1`, `2`, `3`, `4`, `6`, or `8` bytes depending on the magnitude of the value.

const table = sqliteTable('table', {
id: integer()
});

// you can customize integer mode to be number, boolean, timestamp, timestamp\_ms
integer({ mode: 'number' })
integer({ mode: 'boolean' })
integer({ mode: 'timestamp\_ms' })
integer({ mode: 'timestamp' }) // Date

````

```sql
CREATE TABLE `table` (
	`id` integer
);
````

### Real

A floating point value, stored as an `8-byte IEEE` floating point number.

const table = sqliteTable('table', {
real: real()
});

````

```sql
CREATE TABLE `table` (
	`real` real
);
````

### Text

A text string, stored using the database encoding (`UTF-8`, `UTF-16BE` or `UTF-16LE`).

const table = sqliteTable('table', {
text: text()
});

// will be inferred as text: "value1" | "value2" | null
text({ enum: \["value1", "value2"] })
text({ mode: 'json' })
text({ mode: 'json' }).$type<{ foo: string }>()

````

```sql
CREATE TABLE `table` (
	`text` text
);
````

### Blob

A blob of data, stored exactly as it was input.

```
All JSON functions currently throw an error if any of their arguments are BLOBs because BLOBs 
are reserved for a future enhancement in which BLOBs will store the binary encoding for JSON.

See **https://www.sqlite.org/json1.html**.
```

const table = sqliteTable('table', {
blob: blob()
});

blob()
blob({ mode: 'buffer' })
blob({ mode: 'bigint' })

blob({ mode: 'json' })
blob({ mode: 'json' }).$type<{ foo: string }>()

````

```sql
CREATE TABLE `table` (
	`blob` blob
);
````

You can specify `.$type<..>()` for blob inference, it **won't** check runtime values.
It provides compile time protection for default values, insert and select schemas.

```typescript
// will be inferred as { foo: string }
json: blob({ mode: 'json' }).$type<{ foo: string }>();

// will be inferred as string[]
json: blob({ mode: 'json' }).$type<string[]>();

// won't compile
json: blob({ mode: 'json' }).$type<string[]>().default({});
```

### Boolean

SQLite does not have native `boolean` data type, yet you can specify `integer` column to be in a `boolean` mode.
This allows you to operate boolean values in your code and Drizzle stores them as 0 and 1 integer
values in the database.

const table = sqliteTable('table', {
id: integer({ mode: 'boolean' })
});

````

```sql
CREATE TABLE `table` (
	`id` integer
);
````

### Bigint

Since there is no `bigint` data type in SQLite, Drizzle offers a special `bigint` mode for `blob` columns.
This mode allows you to work with BigInt instances in your code, and Drizzle stores them as blob values in the database.

const table = sqliteTable('table', {
id: blob({ mode: 'bigint' })
});

````

```sql
CREATE TABLE `table` (
	`id` blob
);
````

### Numeric

const table = sqliteTable('table', {
numeric: numeric(),
numericNum: numeric({ mode: 'number' }),
numericBig: numeric({ mode: 'bigint' }),
});

````

```sql
CREATE TABLE `table` (
	`numeric` numeric,
	`numericNum` numeric,
	`numericBig` numeric
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

const users = sqliteTable('users', {
  id: integer().$type<UserId>().primaryKey(),
  jsonField: blob().$type<Data>(),
});
```

### Not null

`NOT NULL` constraint dictates that the associated column may not contain a `NULL` value.

```sql
CREATE TABLE table (
	`numInt` integer NOT NULL
);
```

### Default value

The `DEFAULT` clause specifies a default value to use for the column if no value
is explicitly provided by the user when doing an `INSERT`.
If there is no explicit `DEFAULT` clause attached to a column definition,
then the default value of the column is `NULL`.

An explicit `DEFAULT` clause may specify that the default value is `NULL`,
a string constant, a blob constant, a signed-number, or any constant expression enclosed in parentheses.

const table = sqliteTable('table', {
int1: integer().default(42),
int2: integer().default(sql`(abs(42))`)
});

````
```sql
CREATE TABLE `table` (
	`int1` integer DEFAULT 42,
	`int2` integer DEFAULT (abs(42))
);
````

A default value may also be one of the special case-independent keywords `CURRENT_TIME`, `CURRENT_DATE` or `CURRENT_TIMESTAMP`.

const table = sqliteTable("table", {
time: text().default(sql`(CURRENT_TIME)`),
date: text().default(sql`(CURRENT_DATE)`),
timestamp: text().default(sql`(CURRENT_TIMESTAMP)`),
});

````

```sql
CREATE TABLE `table` (
	`time` text DEFAULT (CURRENT_TIME),
	`date` text DEFAULT (CURRENT_DATE),
	`timestamp` text DEFAULT (CURRENT_TIMESTAMP)
);
````

When using `$default()` or `$defaultFn()`, which are simply different aliases for the same function,
you can generate defaults at runtime and use these values in all insert queries.
These functions can assist you in utilizing various implementations such as `uuid`, `cuid`, `cuid2`, and many more.

```ts
import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { createId } from '@paralleldrive/cuid2';

const table = sqliteTable('table', {
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
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

const table = sqliteTable('table', {
    alwaysNull: text().$type<string | null>().$onUpdate(() => null),
});
```

Source: https://orm.drizzle.team/docs/connect-aws-data-api-mysql

import Callout from '@mdx/Callout.astro';

# Drizzle <> AWS Data API MySQL

Source: https://orm.drizzle.team/docs/connect-aws-data-api-pg

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";

# Drizzle <> AWS Data API Postgres

#### Step 1 - Install packages

#### Step 2 - Initialize the driver and make a query

```typescript copy
import { drizzle } from 'drizzle-orm/aws-data-api/pg';

// These three properties are required. You can also specify
// any property from the RDSDataClient type inside the connection object.
const db = drizzle({ connection: {
  database: process.env['DATABASE']!,
  secretArn: process.env['SECRET_ARN']!,
  resourceArn: process.env['RESOURCE_ARN']!,
}});

await db.select().from(...);
```

If you need to provide your existing driver:

```typescript copy
import { drizzle } from 'drizzle-orm/aws-data-api/pg';
import { RDSDataClient } from '@aws-sdk/client-rds-data';

const rdsClient = new RDSDataClient({ region: 'us-east-1' });

const db = drizzle(rdsClient, {
  database: process.env['DATABASE']!,
  secretArn: process.env['SECRET_ARN']!,
  resourceArn: process.env['RESOURCE_ARN']!,
});

await db.select().from(...);
```

#### What's next?

Source: https://orm.drizzle.team/docs/connect-bun-sql

import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Steps from '@mdx/Steps.astro';
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";

# Drizzle <> Bun SQL

According to the **[official website](https://bun.sh/)**, Bun is a fast all-in-one JavaScript runtime.

Drizzle ORM natively supports **[`bun sql`](https://bun.sh/docs/api/sql)** module and it's crazy fast 🚀

#### Step 1 - Install packages

#### Step 2 - Initialize the driver and make a query

```typescript copy
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sql';

const db = drizzle(process.env.DATABASE_URL);

const result = await db.select().from(...);
```

If you need to provide your existing driver:

```typescript copy
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sql';
import { SQL } from 'bun';

const client = new SQL(process.env.DATABASE_URL!);
const db = drizzle({ client });
```

#### What's next?

Source: https://orm.drizzle.team/docs/connect-bun-sqlite

import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Steps from '@mdx/Steps.astro';
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";

# Drizzle <> Bun SQLite

According to the **[official website](https://bun.sh/)**, Bun is a fast all-in-one JavaScript runtime.

Drizzle ORM natively supports **[`bun:sqlite`](https://bun.sh/docs/api/sqlite)** module and it's crazy fast 🚀

We embrace SQL dialects and dialect specific drivers and syntax and unlike any other ORM,
for synchronous drivers like `bun:sqlite` we have both **async** and **sync** APIs and we mirror most popular
SQLite-like `all`, `get`, `values` and `run` query methods syntax.

#### Step 1 - Install packages

#### Step 2 - Initialize the driver and make a query

```typescript copy
import { drizzle } from 'drizzle-orm/bun-sqlite';

const db = drizzle();

const result = await db.select().from(...);
```

If you need to provide your existing driver:

```typescript copy
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database('sqlite.db');
const db = drizzle({ client: sqlite });

const result = await db.select().from(...);
```

If you want to use **sync** APIs:

```typescript copy
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database('sqlite.db');
const db = drizzle({ client: sqlite });

const result = db.select().from(users).all();
const result = db.select().from(users).get();
const result = db.select().from(users).values();
const result = db.select().from(users).run();
```

#### What's next?

Source: https://orm.drizzle.team/docs/connect-cloudflare-d1

import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Steps from '@mdx/Steps.astro';
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
