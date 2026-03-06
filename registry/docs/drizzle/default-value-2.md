### Default value

The `DEFAULT` clause specifies a default value to use for the column if no value
is explicitly provided by the user when doing an `INSERT`.
If there is no explicit `DEFAULT` clause attached to a column definition,
then the default value of the column is `NULL`.

An explicit `DEFAULT` clause may specify that the default value is `NULL`,
a string constant, a blob constant, a signed-number, or any constant expression enclosed in parentheses.

```typescript
import { int, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
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

```
Note: This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`
```

```ts
import { text, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
    alwaysNull: text().$type<string | null>().$onUpdate(() => null),
});
```

### Primary key

```typescript
import { int, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
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
import { int, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable('table', {
	int: int().autoincrement(),
});
```

```sql
CREATE TABLE `table` (
	`int` int AUTO_INCREMENT
);
```

Source: https://orm.drizzle.team/docs/column-types/pg

import Section from '@mdx/Section.astro';
import Callout from '@mdx/Callout.astro';

We have native support for all of them, yet if that's not enough for you, feel free to create **[custom types](/docs/custom-types)**.

All examples in this part of the documentation do not use database column name aliases, and column names are generated from TypeScript keys.

You can use database aliases in column names if you want, and you can also use the `casing` parameter to define a mapping strategy for Drizzle.

You can read more about it [here](/docs/sql-schema-declaration#shape-your-data-schema)

### integer

`integer` `int` `int4`\
Signed 4-byte integer

If you need `integer autoincrement` please refer to **[serial.](#serial)**

```typescript
import { integer, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
	int: integer()
});

```

```sql
CREATE TABLE "table" (
	"int" integer
);
```

```typescript
import { sql } from "drizzle-orm";
import { integer, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
	int1: integer().default(10),
	int2: integer().default(sql`'10'::int`)
});

```

```sql
CREATE TABLE "table" (
	"int1" integer DEFAULT 10,
	"int2" integer DEFAULT '10'::int
);
```

### smallint

`smallint` `int2`\
Small-range signed 2-byte integer

If you need `smallint autoincrement` please refer to **[smallserial.](#smallserial)**

```typescript
import { smallint, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
	smallint: smallint()
});
```

```sql
CREATE TABLE "table" (
	"smallint" smallint
);
```

```typescript
import { sql } from "drizzle-orm";
import { smallint, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
	smallint1: smallint().default(10),
	smallint2: smallint().default(sql`'10'::smallint`)
});
```

```sql
CREATE TABLE "table" (
	"smallint1" smallint DEFAULT 10,
	"smallint2" smallint DEFAULT '10'::smallint
);
```

### bigint

`bigint` `int8`\
Signed 8-byte integer

If you need `bigint autoincrement` please refer to **[bigserial.](#bigserial)**

If you're expecting values above 2^31 but below 2^53, you can utilise `mode: 'number'` and deal with javascript number as opposed to bigint.

```typescript
import { bigint, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
	bigint: bigint({ mode: 'number' })
});

// will be inferred as `number`
bigint: bigint({ mode: 'number' })

// will be inferred as `bigint`
bigint: bigint({ mode: 'bigint' })
```

```sql
CREATE TABLE "table" (
	"bigint" bigint
);
```

```typescript
import { sql } from "drizzle-orm";
import { bigint, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
	bigint1: bigint().default(10),
	bigint2: bigint().default(sql`'10'::bigint`)
});
```

```sql
CREATE TABLE "table" (
	"bigint1" bigint DEFAULT 10,
	"bigint2" bigint DEFAULT '10'::bigint
);
```

### serial

`serial` `serial4`\
Auto incrementing 4-bytes integer, notational convenience for creating unique identifier columns (similar to the `AUTO_INCREMENT` property supported by some other databases).

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-numeric.html#DATATYPE-SERIAL)**

```typescript
import { serial, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
  serial: serial(),
});
```

```sql
CREATE TABLE "table" (
	"serial" serial NOT NULL
);
```

### smallserial

`smallserial` `serial2`\
Auto incrementing 2-bytes integer, notational convenience for creating unique identifier columns (similar to the `AUTO_INCREMENT` property supported by some other databases).

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-numeric.html#DATATYPE-SERIAL)**

```typescript
import { smallserial, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
  smallserial: smallserial(),
});
```

```sql
CREATE TABLE "table" (
	"smallserial" smallserial NOT NULL
);
```

### bigserial

`bigserial` `serial8`\
Auto incrementing 8-bytes integer, notational convenience for creating unique identifier columns (similar to the `AUTO_INCREMENT` property supported by some other databases).

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-numeric.html#DATATYPE-SERIAL)**

If you're expecting values above 2^31 but below 2^53, you can utilise `mode: 'number'` and deal with javascript number as opposed to bigint.

```typescript
import { bigserial, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
  bigserial: bigserial({ mode: 'number' }),
});
```

```sql
CREATE TABLE "table" (
	"bigserial" bigserial NOT NULL
);
```

### boolean

PostgreSQL provides the standard SQL type boolean.

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-boolean.html)**

```typescript
import { boolean, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
	boolean: boolean()
});

```

```sql
CREATE TABLE "table" (
	"boolean" boolean
);
```

### bytea

PostgreSQL provides the standard SQL type bytea.

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-binary.html)**

```typescript
import { bytea, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
	bytea: bytea()
});

```

```sql
CREATE TABLE IF NOT EXISTS "table" (
	"bytea" bytea,
);
```

### text

`text`\
Variable-length(unlimited) character string.

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-character.html)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

```typescript
import { text, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
  text: text()
});

// will be inferred as text: "value1" | "value2" | null
text: text({ enum: ["value1", "value2"] })
```

```sql
CREATE TABLE "table" (
	"text" text
);
```

### varchar

`character varying(n)` `varchar(n)`\
Variable-length character string, can store strings up to **`n`** characters (not bytes).

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-character.html)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to PostgreSQL docs.

```typescript
import { varchar, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
  varchar1: varchar(),
  varchar2: varchar({ length: 256 }),
});

// will be inferred as text: "value1" | "value2" | null
varchar: varchar({ enum: ["value1", "value2"] }),
```

```sql
CREATE TABLE "table" (
	"varchar1" varchar,
	"varchar2" varchar(256)
);
```

### char

`character(n)` `char(n)`\
Fixed-length, blank padded character string, can store strings up to **`n`** characters(not bytes).

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-character.html)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to PostgreSQL docs.

```typescript
import { char, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
  char1: char(),
  char2: char({ length: 256 }),
});

// will be inferred as text: "value1" | "value2" | null
char: char({ enum: ["value1", "value2"] }),
```

```sql
CREATE TABLE "table" (
	"char1" char,
	"char2" char(256)
);
```

### numeric

`numeric` `decimal`\
Exact numeric of selectable precision. Can store numbers with a very large number of digits, up to 131072 digits before the decimal point and up to 16383 digits after the decimal point.

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-numeric.html#DATATYPE-NUMERIC-DECIMAL)**

```typescript
import { numeric, pgTable } from "drizzle-orm/pg-core";

export const table = pgTable('table', {
  numeric1: numeric(),
  numeric2: numeric({ precision: 100 }),
  numeric3: numeric({ precision: 100, scale: 20 }),
  numericNum: numeric({ mode: 'number' }),
  numericBig: numeric({ mode: 'bigint' }),
});
```

```sql
CREATE TABLE "table" (
	"numeric1" numeric,
	"numeric2" numeric(100),
	"numeric3" numeric(100, 20),
	"numericNum" numeric,
	"numericBig" numeric
);
```

### decimal

An alias of **[numeric.](#numeric)**

### real

`real` `float4`\
Single precision floating-point number (4 bytes)

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-numeric.html)**

```typescript
import { sql } from "drizzle-orm";
import { real, pgTable } from "drizzle-orm/pg-core";  

const table = pgTable('table', {
	real1: real(),
	real2: real().default(10.10),
	real3: real().default(sql`'10.10'::real`),
});
```

```sql
CREATE TABLE "table" (
	"real1" real,
	"real2" real default 10.10,
	"real3" real default '10.10'::real
);
```

### double precision

`double precision` `float8`\
Double precision floating-point number (8 bytes)

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-numeric.html)**

```typescript
import { sql } from "drizzle-orm";
import { doublePrecision, pgTable } from "drizzle-orm/pg-core";

const table = pgTable('table', {
	double1: doublePrecision(),
	double2: doublePrecision().default(10.10),
	double3: doublePrecision().default(sql`'10.10'::double precision`),
});
```

```sql
CREATE TABLE "table" (
	"double1" double precision,
	"double2" double precision default 10.10,
	"double3" double precision default '10.10'::double precision
);
```

### json

`json`\
Textual JSON data, as specified in **[RFC 7159.](https://tools.ietf.org/html/rfc7159)**

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-json.html)**

```typescript
import { sql } from "drizzle-orm";
import { json, pgTable } from "drizzle-orm/pg-core";

const table = pgTable('table', {
	json1: json(),
	json2: json().default({ foo: "bar" }),
	json3: json().default(sql`'{foo: "bar"}'::json`),
});
```

```sql
CREATE TABLE "table" (
	"json1" json,
	"json2" json default '{"foo": "bar"}'::json,
	"json3" json default '{"foo": "bar"}'::json
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

### jsonb

`jsonb`\
Binary JSON data, decomposed.

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-json.html)**

```typescript
import { jsonb, pgTable } from "drizzle-orm/pg-core";

const table = pgTable('table', {
	jsonb1: jsonb(),
	jsonb2: jsonb().default({ foo: "bar" }),
	jsonb3: jsonb().default(sql`'{foo: "bar"}'::jsonb`),
});
```

```sql
CREATE TABLE "table" (
	"jsonb1" jsonb,
	"jsonb2" jsonb default '{"foo": "bar"}'::jsonb,
	"jsonb3" jsonb default '{"foo": "bar"}'::jsonb
);
```

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

```typescript
import { time, pgTable } from "drizzle-orm/pg-core";

const table = pgTable('table', {
  time1: time(),
  time2: time({ withTimezone: true }),
  time3: time({ precision: 6 }),
  time4: time({ precision: 6, withTimezone: true })
});
```

```sql
CREATE TABLE "table" (
	"time1" time,
	"time2" time with timezone,
	"time3" time(6),
	"time4" time(6) with timezone
);
```
