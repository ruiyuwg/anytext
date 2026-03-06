### timestamp

`timestamp` `timestamptz` `timestamp with time zone` `timestamp without time zone`\
Date and time with or without time zone.

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-datetime.html)**

```typescript
import { sql } from "drizzle-orm";
import { timestamp, pgTable } from "drizzle-orm/pg-core";

const table = pgTable("table", {
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

How mapping works for `timestamp` and `timestamp with timezone`:

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

```typescript
import { date, pgTable } from "drizzle-orm/pg-core";

const table = pgTable("table", {
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

`interval`\
Time span

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-datetime.html)**

```typescript
import { interval, pgTable } from "drizzle-orm/pg-core";

const table = pgTable("table", {
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

### point

`point`\
Geometric point type

For more info please refer to the official PostgreSQL **[docs.](https://www.postgresql.org/docs/current/datatype-geometric.html#DATATYPE-GEOMETRIC-POINTS)**

Type `point` has 2 modes for mappings from the database: `tuple` and `xy`.

- `tuple` will be accepted for insert and mapped on select to a tuple. So, the database Point(1,2) will be typed as \[1,2] with drizzle.

- `xy` will be accepted for insert and mapped on select to an object with x, y coordinates. So, the database Point(1,2) will be typed as `{ x: 1, y: 2 }` with drizzle

```typescript
const items = pgTable("items", {
  point: point(),
  pointObj: point({ mode: "xy" }),
});
```

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

```typescript
const items = pgTable("items", {
  line: line(),
  lineObj: line({ mode: "abc" }),
});
```

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

```typescript
import { pgEnum, pgTable } from "drizzle-orm/pg-core";

export const moodEnum = pgEnum("mood", ["sad", "ok", "happy"]);

export const table = pgTable("table", {
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

const users = pgTable("users", {
  id: serial().$type<UserId>().primaryKey(),
  jsonField: json().$type<Data>(),
});
```

### Identity Columns

To use this feature you would need to have `drizzle-orm@0.32.0` or higher and `drizzle-kit@0.23.0` or higher

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
import { pgTable, integer, text } from "drizzle-orm/pg-core";

export const ingredients = pgTable("ingredients", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
  name: text().notNull(),
  description: text(),
});
```

You can specify all properties available for sequences in the `.generatedAlwaysAsIdentity()` function. Additionally, you can specify custom names for these sequences

PostgreSQL docs [reference](https://www.postgresql.org/docs/current/sql-createtable.html#SQL-CREATETABLE-PARMS-GENERATED-IDENTITY).
