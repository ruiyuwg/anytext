## Custom cache

This example shows how to plug in a custom `cache` in Drizzle: you provide functions to fetch data from the cache, store results back into cache, and invalidate entries whenever a mutation runs.

Cache extension provides this set of config options

```ts
export type CacheConfig = {
  /** expire time, in seconds */
  ex?: number;
  /** expire time, in milliseconds */
  px?: number;
  /** Unix time (sec) at which the key will expire */
  exat?: number;
  /** Unix time (ms) at which the key will expire */
  pxat?: number;
  /** retain existing TTL when updating a key */
  keepTtl?: boolean;
  /** options for HEXPIRE (hash-field TTL) */
  hexOptions?: "NX" | "XX" | "GT" | "LT" | "nx" | "xx" | "gt" | "lt";
};
```

```ts
const db = drizzle(process.env.DB_URL!, { cache: new TestGlobalCache() });
```

```ts
import Keyv from "keyv";

export class TestGlobalCache extends Cache {
  private globalTtl: number = 1000;
  // This object will be used to store which query keys were used
  // for a specific table, so we can later use it for invalidation.
  private usedTablesPerKey: Record<string, string[]> = {};

  constructor(private kv: Keyv = new Keyv()) {
    super();
  }

  // For the strategy, we have two options:
  // - 'explicit': The cache is used only when .$withCache() is added to a query.
  // - 'all': All queries are cached globally.
  // The default behavior is 'explicit'.
  override strategy(): "explicit" | "all" {
    return "all";
  }

  // This function accepts query and parameters that cached into key param,
  // allowing you to retrieve response values for this query from the cache.
  override async get(key: string): Promise<any[] | undefined> {
    const res = (await this.kv.get(key)) ?? undefined;
    return res;
  }

  // This function accepts several options to define how cached data will be stored:
  // - 'key': A hashed query and parameters.
  // - 'response': An array of values returned by Drizzle from the database.
  // - 'tables': An array of tables involved in the select queries. This information is needed for cache invalidation.
  //
  // For example, if a query uses the "users" and "posts" tables, you can store this information. Later, when the app executes
  // any mutation statements on these tables, you can remove the corresponding key from the cache.
  // If you're okay with eventual consistency for your queries, you can skip this option.
  override async put(
    key: string,
    response: any,
    tables: string[],
    config?: CacheConfig,
  ): Promise<void> {
    const ttl = config?.px ?? (config?.ex ? config.ex * 1000 : this.globalTtl);

    await this.kv.set(key, response, ttl);

    for (const table of tables) {
      const keys = this.usedTablesPerKey[table];
      if (keys === undefined) {
        this.usedTablesPerKey[table] = [key];
      } else {
        keys.push(key);
      }
    }
  }

  // This function is called when insert, update, or delete statements are executed.
  // You can either skip this step or invalidate queries that used the affected tables.
  //
  // The function receives an object with two keys:
  // - 'tags': Used for queries labeled with a specific tag, allowing you to invalidate by that tag.
  // - 'tables': The actual tables affected by the insert, update, or delete statements,
  //   helping you track which tables have changed since the last cache update.
  override async onMutate(params: {
    tags: string | string[];
    tables: string | string[] | Table<any> | Table<any>[];
  }): Promise<void> {
    const tagsArray = params.tags
      ? Array.isArray(params.tags)
        ? params.tags
        : [params.tags]
      : [];
    const tablesArray = params.tables
      ? Array.isArray(params.tables)
        ? params.tables
        : [params.tables]
      : [];

    const keysToDelete = new Set<string>();

    for (const table of tablesArray) {
      const tableName = is(table, Table)
        ? getTableName(table)
        : (table as string);
      const keys = this.usedTablesPerKey[tableName] ?? [];
      for (const key of keys) keysToDelete.add(key);
    }

    if (keysToDelete.size > 0 || tagsArray.length > 0) {
      for (const tag of tagsArray) {
        await this.kv.delete(tag);
      }

      for (const key of keysToDelete) {
        await this.kv.delete(key);
        for (const table of tablesArray) {
          const tableName = is(table, Table)
            ? getTableName(table)
            : (table as string);
          this.usedTablesPerKey[tableName] = [];
        }
      }
    }
  }
}
```

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

This page explains concepts available on drizzle versions `1.0.0-beta.2` and higher.

drizzle-orm@beta
drizzle-kit@beta -D

We have native support for all of them, yet if that's not enough for you, feel free to create **[custom types](/docs/custom-types)**.

All examples in this part of the documentation do not use database column name aliases, and column names are generated from TypeScript keys.

You can use database aliases in column names if you want, and you can also use the `casing` parameter to define a mapping strategy for Drizzle.

You can read more about it [here](/docs/sql-schema-declaration#shape-your-data-schema)

### bigint

`int` `int8` `int64` `integer`

Signed 8-byte integer

If you're expecting values above 2^31 but below 2^53, you can utilize `mode: 'number'` and deal with javascript number as opposed to bigint.

```typescript
import { bigint, cockroachTable } from "drizzle-orm/cockroach-core";

export const table = cockroachTable("table", {
  bigint: bigint({ mode: "number" }),
});

// will be inferred as `number`
bigint: bigint({ mode: "number" });

// will be inferred as `bigint`
bigint: bigint({ mode: "bigint" });
```

```sql
CREATE TABLE "table" (
	"bigint" bigint
);
```

```typescript
import { sql } from "drizzle-orm";
import { bigint, cockroachTable } from "drizzle-orm/cockroach-core";

export const table = cockroachTable("table", {
  bigint1: bigint().default(10),
  bigint2: bigint().default(sql`'10'::bigint`),
});
```

```sql
CREATE TABLE "table" (
	"bigint1" bigint DEFAULT 10,
	"bigint2" bigint DEFAULT '10'::bigint
);
```

### smallint

`smallint` `int2`\
Small-range signed 2-byte integer

```typescript
import { smallint, cockroachTable } from "drizzle-orm/cockroach-core";

export const table = cockroachTable("table", {
  smallint: smallint(),
});
```

```sql
CREATE TABLE "table" (
	"smallint" smallint
);
```

```typescript
import { sql } from "drizzle-orm";
import { smallint, cockroachTable } from "drizzle-orm/cockroach-core";

export const table = cockroachTable("table", {
  smallint1: smallint().default(10),
  smallint2: smallint().default(sql`'10'::smallint`),
});
```

```sql
CREATE TABLE "table" (
	"smallint1" smallint DEFAULT 10,
	"smallint2" smallint DEFAULT '10'::smallint
);
```

### int4

Signed 4-byte integer

```typescript
import { int4, cockroachTable } from "drizzle-orm/cockroach-core";

export const table = cockroachTable("table", {
  int4: int4(),
});
```

```sql
CREATE TABLE "table" (
	"int4" int4
);
```

```typescript
import { sql } from "drizzle-orm";
import { int4, cockroachTable } from "drizzle-orm/cockroach-core";

export const table = cockroachTable("table", {
  int1: int4().default(10),
  int2: int4().default(sql`'10'::int4`),
});
```

```sql
CREATE TABLE "table" (
	"int1" int4 DEFAULT 10,
	"int2" int4 DEFAULT '10'::int4
);
```

### int8

An alias of **[bigint.](#bigint)**

### int2

An alias of **[smallint.](#smallint)**

### bool

Cockroach provides the standard SQL type bool.

For more info please refer to the official Cockroach **[docs.](https://www.cockroachlabs.com/docs/stable/bool)**

```typescript
import { bool, cockroachTable } from "drizzle-orm/cockroach-core";

export const table = cockroachTable("table", {
  boolean: bool(),
});
```

```sql
CREATE TABLE "table" (
	"boolean" bool
);
```

### string

`text` `varchar`, `char`

The `STRING` data type stores a string of Unicode characters.

For PostgreSQL compatibility, CockroachDB supports the following STRING-related types and their aliases:

`VARCHAR` (and alias `CHARACTER VARYING`)
`CHAR` (and alias `CHARACTER`)
`NAME`

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/string)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

```typescript
import { string, cockroachTable } from "drizzle-orm/cockroach-core";

export const table = cockroachTable("table", {
  stringColumn: string(), // equivalent to `text` PostgreSQL type
  stringColumn1: string({ length: 256 }), // equivalent to `varchar(256)` PostgreSQL type
});

// will be inferred as text: "value1" | "value2" | null
stringColumn: string({ enum: ["value1", "value2"] });
```

```sql
CREATE TABLE "table" (
	"stringColumn" string,
    "stringColumn1" string(256),
);
```

### text

CockroachDB alias for `STRING`:

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/string)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

```typescript
import { text, cockroachTable } from "drizzle-orm/cockroach-core";

export const table = cockroachTable("table", {
  text: text(),
});

// will be inferred as text: "value1" | "value2" | null
text: text({ enum: ["value1", "value2"] });
```

```sql
CREATE TABLE "table" (
	"text" text
);
```

### varchar

`character varying(n)` `varchar(n)`

`STRING` alias used to stay compatible with PostgreSQL

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/string)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to PostgreSQL docs.

```typescript
import { varchar, cockroachTable } from "drizzle-orm/cockroach-core";

export const table = cockroachTable('table', {
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

`character(n)` `char(n)`

`STRING` alias used to stay compatible with PostgreSQL

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/string)**

You can define `{ enum: ["value1", "value2"] }` config to infer `insert` and `select` types, it **won't** check runtime values.

The `length` parameter is optional according to PostgreSQL docs.

```typescript
import { char, cockroachTable } from "drizzle-orm/cockroach-core";

export const table = cockroachTable('table', {
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

https://www.cockroachlabs.com/docs/stable/float

### decimal

`numeric` `decimal` `dec`
The DECIMAL data type stores exact, fixed-point numbers. This type is used when it is important to preserve exact precision, for example, with monetary data.

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/decimal)**

```typescript
import { decimal, cockroachTable } from "drizzle-orm/cockroach-core";

export const table = cockroachTable("table", {
  decimal1: decimal(),
  decimal2: decimal({ precision: 100 }),
  decimal3: decimal({ precision: 100, scale: 20 }),
  decimalNum: decimal({ mode: "number" }),
  decimalBig: decimal({ mode: "bigint" }),
});
```

```sql
CREATE TABLE "table" (
	"decimal1" decimal,
	"decimal2" decimal(100),
	"decimal3" decimal(100, 20),
	"decimalNum" decimal,
	"decimalBig" decimal
);
```

### numeric

An alias of **[decimal.](#decimal)**

### float

`float` `float8` `double precision`

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/float)**

```typescript
import { sql } from "drizzle-orm";
import { float, cockroachTable } from "drizzle-orm/cockroach-core";

const table = cockroachTable("table", {
  float1: float(),
  float2: float().default(10.1),
  float3: float().default(sql`'10.10'::float`),
});
```

```sql
CREATE TABLE "table" (
	"float1" float,
	"float2" float default 10.10,
	"float3" float default '10.10'::float
);
```

### real

`real` `float4`\
Single precision floating-point number (4 bytes)

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/float)**

```typescript
import { sql } from "drizzle-orm";
import { real, cockroachTable } from "drizzle-orm/cockroach-core";

const table = cockroachTable("table", {
  real1: real(),
  real2: real().default(10.1),
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

An alias of **[float.](#float)**

### jsonb

`jsonb`

The JSONB data type stores JSON (JavaScript Object Notation) data as a binary representation of the JSONB value, which eliminates whitespace, duplicate keys, and key ordering

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/jsonb)**

```typescript
import { jsonb, cockroachTable } from "drizzle-orm/cockroach-core";

const table = cockroachTable("table", {
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

### bit

`bit`

The BIT data types store bit arrays. With BIT, the length is fixed.

**Size**

The number of bits in a BIT value is determined as follows:

| Type declaration | Logical size |
| :--------------- | :----------- |
| BIT              | 1 bit        |
| BIT(N)           | N bits       |

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/bit)**

```typescript
import { sql } from "drizzle-orm";
import { cockroachTable, bit } from "drizzle-orm/cockroach-core";

export const table = cockroachTable("table", {
  bit1: bit(),
  bit2: bit({ length: 15 }),
  bit3: bit({ length: 15 }).default("10011"),
  bit4: bit({ length: 15 }).default(sql`'10011'`),
});
```

```sql
CREATE TABLE "table" (
	"bit1" bit,
	"bit2" bit(15),
	"bit3" bit(15) DEFAULT '10011',
	"bit4" bit(15) DEFAULT '10011'
);

```

### varbit

`varbit`

The VARBIT data types store bit arrays. With VARBIT, the length can be variable.

**Size**

The number of bits in a VARBIT value is determined as follows:

| Type declaration | Logical size                      |
| :--------------- | :-------------------------------- |
| VARBIT           | variable with no maximum          |
| VARBIT(N)        | variable with a maximum of N bits |

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/bit)**

```typescript
import { sql } from "drizzle-orm";
import { cockroachTable, bit } from "drizzle-orm/cockroach-core";

export const table = cockroachTable("table", {
  varbit1: varbit(),
  varbit2: varbit({ length: 15 }),
  varbit3: varbit({ length: 15 }).default("10011"),
  varbit4: varbit({ length: 15 }).default(sql`'10011'`),
});
```

```sql
CREATE TABLE "table" (
	"varbit1" varbit,
	"varbit2" varbit(15),
	"varbit3" varbit(15) DEFAULT '10011',
	"varbit4" varbit(15) DEFAULT '10011'
);
```

### uuid

`uuid`

The UUID (Universally Unique Identifier) data type stores a 128-bit value that is unique across both space and time.

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/uuid)**

```ts
import { uuid, cockroachTable } from "drizzle-orm/cockroach-core";

const table = cockroachTable("table", {
  uuid1: uuid(),
  uuid2: uuid().defaultRandom(),
  uuid3: uuid().default("a0ee-bc99-9c0b-4ef8-bb6d-6bb9-bd38-0a11"),
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

```typescript
import { time, cockroachTable } from "drizzle-orm/cockroach-core";

const table = cockroachTable("table", {
  time1: time(),
  time2: time({ withTimezone: true }),
  time3: time({ precision: 6 }),
  time4: time({ precision: 6, withTimezone: true }),
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

### timestamp

`timestamp` `timestamptz` `timestamp with time zone` `timestamp without time zone`

The TIMESTAMP and TIMESTAMPTZ data types store a date and time pair in UTC.

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/timestamp)**

```typescript
import { sql } from "drizzle-orm";
import { timestamp, cockroachTable } from "drizzle-orm/cockroach-core";

const table = cockroachTable("table", {
  timestamp1: timestamp(),
  timestamp2: timestamp({ precision: 6, withTimezone: true }),
  timestamp3: timestamp().defaultNow(),
  timestamp4: timestamp().default(sql`now()`),
});
```

```sql
CREATE TABLE "table" (
	"timestamp1" timestamp,
	"timestamp2" timestamp (6) with time zone,
	"timestamp3" timestamp default now(),
	"timestamp4" timestamp default now()
);
```

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

```typescript
import { date, cockroachTable } from "drizzle-orm/cockroach-core";

const table = cockroachTable("table", {
  date: date(),
});
```

```sql
CREATE TABLE "table" (
	"date" date
);
```

You can specify either `date` or `string` infer modes:

```typescript
// will infer as date
date: date({ mode: "date" }),

// will infer as string
date: date({ mode: "string" }),
```

### interval

`interval`

Stores a value that represents a span of time.

For more info please refer to the official CockroachDB **[docs.](https://www.cockroachlabs.com/docs/stable/interval)**

```typescript
import { interval, cockroachTable } from "drizzle-orm/cockroach-core";

const table = cockroachTable("table", {
  interval1: interval(),
  interval2: interval({ fields: "day" }),
  interval3: interval({ fields: "month", precision: 6 }),
});
```

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

```typescript
import { cockroachEnum, cockroachTable } from "drizzle-orm/cockroach-core";

export const moodEnum = cockroachEnum("mood", ["sad", "ok", "happy"]);

export const table = cockroachTable("table", {
  mood: moodEnum(),
});
```

```sql
CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');

CREATE TABLE "table" (
	"mood" mood
);
```

### Customizing data type

Every column builder has a `.$type()` method, which allows you to customize the data type of the column.

This is useful, for example, with unknown or branded types:

```ts
type UserId = number & { __brand: "user_id" };
type Data = {
  foo: string;
  bar: number;
};

const users = cockroachTable("users", {
  id: int().$type<UserId>().primaryKey(),
  jsonField: json().$type<Data>(),
});
```

### Identity Columns

To use this feature you would need to have `drizzle-orm@0.32.0` or higher and `drizzle-kit@0.23.0` or higher

PostgreSQL and CockroachDB supports identity columns as a way to automatically generate unique integer values for a column. These values are generated using sequences and can be defined using the GENERATED AS IDENTITY clause.

**Types of Identity Columns**

- `GENERATED ALWAYS AS IDENTITY`: The database always generates a value for the column. Manual insertion or updates to this column are not allowed unless the OVERRIDING SYSTEM VALUE clause is used.
- `GENERATED BY DEFAULT AS IDENTITY`: The database generates a value by default, but manual values can also be inserted or updated. If a manual value is provided, it will be used instead of the system-generated value.

**Usage example**

```ts
import { pgTable, integer, text } from "drizzle-orm/pg-core";

export const ingredients = pgTable("ingredients", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
  name: text().notNull(),
  description: text(),
});
```

You can specify all properties available for sequences in the `.generatedAlwaysAsIdentity()` function. Additionally, you can specify custom names for these sequences

PostgreSQL docs [reference](https://www.postgresql.org/docs/current/sql-createtable.html#SQL-CREATETABLE-PARMS-GENERATED-IDENTITY).
