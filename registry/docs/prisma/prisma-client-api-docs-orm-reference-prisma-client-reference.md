# Prisma Client API (/docs/orm/reference/prisma-client-reference)

The Prisma Client API reference documentation is based on the following schema:

```prisma
model User {
  id           Int              @id @default(autoincrement())
  name         String?
  email        String           @unique
  profileViews Int              @default(0)
  role         Role             @default(USER)
  coinflips    Boolean[]
  posts        Post[]
  city         String
  country      String
  profile      ExtendedProfile?
  pets         Json
}

model ExtendedProfile {
  id     Int     @id @default(autoincrement())
  userId Int?    @unique
  bio    String?
  User   User?   @relation(fields: [userId], references: [id])
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  published Boolean @default(true)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
  comments  Json
  views     Int     @default(0)
  likes     Int     @default(0)
}

enum Role {
  USER
  ADMIN
}
```

All example generated types (such as `UserSelect` and `UserWhereUniqueInput`) are based on the `User` model.

PrismaClient \[#prismaclient]

This section describes the `PrismaClient` constructor and its parameters.

adapter \[#adapter]

Specifies a [driver adapter](/orm/core-concepts/supported-databases/database-drivers#driver-adapters) for database connections. Required unless using [`accelerateUrl`](#accelerateurl).

Example \[#example]

```ts
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../prisma/generated/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
```

accelerateUrl \[#accelerateurl]

Specifies a [Prisma Accelerate](https://www.prisma.io/accelerate) URL for remote query execution. Required unless using [`adapter`](#adapter).

Example \[#example-1]

```ts
import { PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient({
  accelerateUrl: process.env.ACCELERATE_URL,
});
```

log \[#log]

Determines the type and level of logging. See also: [Logging](/orm/prisma-client/observability-and-logging/logging)

Options \[#options]

| Option                   | Example                                                                  |
| ------------------------ | ------------------------------------------------------------------------ |
| Array of log levels      | `[ "info", "query" ]`                                                    |
| Array of log definitions | `[ { level: "info", emit: "event" }, { level: "warn", emit: "stdout" }]` |

Log levels \[#log-levels]

| Name    | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `query` | Logs all queries run by Prisma.  For relational databases this logs all SQL queries. Example: `prisma:query SELECT "public"."User"."id", "public"."User"."email" FROM "public"."User" WHERE ("public"."User"."id") IN (SELECT "t0"."id" FROM "public"."User" AS "t0" INNER JOIN "public"."Post" AS "j0" ON ("j0"."authorId") = ("t0"."id") WHERE ("j0"."views" > $1 AND "t0"."id" IS NOT NULL)) OFFSET $2`  For MongoDB this logs queries using the [`mongosh` shell](https://www.mongodb.com/docs/mongodb-shell/#mongodb-binary-bin.mongosh) format. Example:  `prisma:query db.User.deleteMany({ _id: ( $in: [ “6221ce49f756b0721fc00542”, ], }, })` |
| `info`  | Example: `prisma:info Started http server on http://127.0.0.1:58471`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `warn`  | Warnings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `error` | Errors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

Emit formats \[#emit-formats]

| Name     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| `stdout` | See: [stdout](https://en.wikipedia.org/wiki/Standard_streams) |
| `event`  | Raises an event that you can subscribe to.                    |

Event types \[#event-types]

The `query` event type:

```ts title="index.d.ts"
export type QueryEvent = {
  timestamp: Date;
  query: string; // Query sent to the database
  params: string; // Query parameters
  duration: number; // Time elapsed (in milliseconds) between client issuing query and database responding - not only time taken to run query
  target: string;
};
```

Note that for MongoDB, the `params` and `duration` fields will be undefined.

All other log level event types:

```ts title="index.d.ts"
export type LogEvent = {
  timestamp: Date;
  message: string;
  target: string;
};
```

Examples \[#examples]

Log query and info to stdout \[#log-query-and-info-to-stdout]

```ts highlight=3;normal;
import { PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient({ log: ["query", "info"] });

async function main() {
  const countUsers = await prisma.user.count({});
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

```bash
prisma:info  Starting a postgresql pool with 13 connections.
prisma:info  Started http server
prisma:query SELECT COUNT(*) FROM (SELECT "public"."User"."id" FROM "public"."User" WHERE 1=1 ORDER BY "public"."User"."coinflips" ASC OFFSET $1) AS "sub"
```

Log a query event to console \[#log-a-query-event-to-console]

```ts
import { PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient({
  log: [{ level: "query", emit: "event" }],
});

prisma.$on("query", (e) => {
  console.log(e);
});

async function main() {
  const countUsers = await prisma.user.count({});
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

```json
{
  timestamp: 2020-11-17T10:32:10.898Z,
  query: 'SELECT COUNT(*) FROM (SELECT "public"."User"."id" FROM "public"."User" WHERE 1=1 OFFSET $1) AS "sub"',
  params: '[0]',
  duration: 5,
  target: 'quaint::connector::metrics'
}
```

Log info, warn, and error events to console \[#log-info-warn-and-error-events-to-console]

```ts
import { PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient({
  log: [
    { level: "warn", emit: "event" },
    { level: "info", emit: "event" },
    { level: "error", emit: "event" },
  ],
});

prisma.$on("warn", (e) => {
  console.log(e);
});

prisma.$on("info", (e) => {
  console.log(e);
});

prisma.$on("error", (e) => {
  console.log(e);
});

async function main() {
  const countUsers = await prisma.user.count({});
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

```json
{
  timestamp: 2020-11-17T10:33:24.592Z,
  message: 'Starting a postgresql pool with 13 connections.',
  target: 'quaint::pooled'
}
{
  timestamp: 2020-11-17T10:33:24.637Z,
  message: 'Started http server',
  target: 'query_engine::server'
}
```

errorFormat \[#errorformat]

Determines the level and formatting of errors returned by Prisma Client.

Error formats \[#error-formats]

| Name                  | Description                                    |
| --------------------- | ---------------------------------------------- |
| `undefined`           | If it's not defined, the default is colorless. |
| `pretty`              | Enables pretty error formatting.               |
| `colorless` (default) | Enables colorless error formatting.            |
| `minimal`             | Enables minimal error formatting.              |

Examples \[#examples-1]

No error formatting \[#no-error-formatting]

```ts
const prisma = new PrismaClient({
  // Defaults to colorless
});
```

pretty error formatting \[#pretty-error-formatting]

```ts
const prisma = new PrismaClient({
  errorFormat: "pretty",
});
```

colorless error formatting \[#colorless-error-formatting]

```ts
const prisma = new PrismaClient({
  errorFormat: "colorless",
});
```

minimal error formatting \[#minimal-error-formatting]

```ts
const prisma = new PrismaClient({
  errorFormat: "minimal",
});
```

comments \[#comments]

Defines an array of [SQL commenter plugins](/orm/prisma-client/observability-and-logging/sql-comments) that add metadata to your SQL queries as comments. This is useful for observability, debugging, and correlating queries with application traces.

Options \[#options-1]

| Option                 | Description                                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| `SqlCommenterPlugin[]` | An array of SQL commenter plugin functions. Each plugin receives query context and returns key-value pairs. |

First-party plugins \[#first-party-plugins]

| Package                              | Description                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------- |
| `@prisma/sqlcommenter-query-tags`    | Adds arbitrary tags to queries within an async context using `AsyncLocalStorage` |
| `@prisma/sqlcommenter-trace-context` | Adds W3C Trace Context (`traceparent`) headers for distributed tracing           |

Examples \[#examples-2]

Using first-party plugins \[#using-first-party-plugins]

```ts
import { PrismaClient } from "../prisma/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { queryTags } from "@prisma/sqlcommenter-query-tags";
import { traceContext } from "@prisma/sqlcommenter-trace-context";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

const prisma = new PrismaClient({
  adapter,
  comments: [queryTags(), traceContext()],
});
```

Creating a custom plugin \[#creating-a-custom-plugin]

```ts
import { PrismaClient } from "../prisma/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import type { SqlCommenterPlugin } from "@prisma/sqlcommenter";

const appPlugin: SqlCommenterPlugin = (context) => ({
  application: "my-app",
  environment: process.env.NODE_ENV ?? "development",
  model: context.query.modelName,
  action: context.query.action,
});

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

const prisma = new PrismaClient({
  adapter,
  comments: [appPlugin],
});
```

This produces SQL queries with comments like:

```sql
SELECT "id", "name" FROM "User" /*action='findMany',application='my-app',environment='production',model='User'*/
```

For more details, see [SQL comments](/orm/prisma-client/observability-and-logging/sql-comments).

transactionOptions \[#transactionoptions]

Sets default [transaction options](/orm/prisma-client/queries/transactions#transaction-isolation-level) globally.

Remarks \[#remarks]

- The transaction levels can be overridden on a per-transaction level.

Options \[#options-2]

| Option           | Description                                                                                                                                                                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maxWait`        | The maximum amount of time Prisma Client will wait to acquire a transaction from the database. The default value is 2 seconds.                                                                                                                           |
| `timeout`        | The maximum amount of time the interactive transaction can run before being canceled and rolled back. The default value is 5 seconds.                                                                                                                    |
| `isolationLevel` | Sets the [transaction isolation level](/orm/prisma-client/queries/transactions#transaction-isolation-level). By default this is set to the value currently configured in your database. The available levels can vary depending on the database you use. |

Example \[#example-2]

```ts
const prisma = new PrismaClient({
  transactionOptions: {
    isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
    maxWait: 5000, // default: 2000
    timeout: 10000, // default: 5000
  },
});
```

Model queries \[#model-queries]

Use model queries to perform CRUD operations on your models. See also: [CRUD](/orm/prisma-client/queries/crud)

findUnique() \[#findunique]

`findUnique()` query lets you retrieve a single database record:

- By *ID*
- By a *unique* attribute

Remarks \[#remarks-1]

- Prisma Client's dataloader [automatically batches `findUnique()` queries](/orm/prisma-client/queries/advanced/query-optimization-performance#using-findunique-with-the-fluent-api) with the same `select` and `where` parameters.
- If you want the query to throw an error if the record is not found, then consider using [`findUniqueOrThrow`](#finduniqueorthrow) instead.
- You cannot use [filter conditions](#filter-conditions-and-operators) (e.g. `equals`, `contains`, `not`) to filter fields of the [JSON](/orm/reference/prisma-schema-reference#json) data type. Using filter conditions will likely result in a `null` response for that field.

Options \[#options-3]

| Name                   | Example type (`User`)    | Required | Description                                                                                                                                                                 |
| ---------------------- | ------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `where`                | `UserWhereUniqueInput`   | **Yes**  | Wraps all fields of a model so that a record can be selected ([learn more](#filter-on-non-unique-fields-with-userwhereuniqueinput)).                                        |
| `select`               | `XOR<UserSelect, null>`  | No       | [Specifies which properties to include](/v6/orm/prisma-client/queries/select-fields) on the returned object.                                                                |
| `include`              | `XOR<UserInclude, null>` | No       | [Specifies which relations should be eagerly loaded](/orm/prisma-client/queries/relation-queries) on the returned object.                                                   |
| `omit`                 | `XOR<UserOmit, null>`    | No       | Specifies which properties to exclude on the returned object. Excludes specified fields from the result                                                                     |
| `relationLoadStrategy` | `'join'` or `'query'`    | No       | **Default: `join`**. [Load strategy](/orm/prisma-client/queries/relation-queries#relation-load-strategies-preview) for relations. Requires `relationJoins` preview feature. |

Return type \[#return-type]

| Return type               | Example                    | Description                                                     |
| ------------------------- | -------------------------- | --------------------------------------------------------------- |
| JavaScript object (typed) | `User`                     |                                                                 |
| JavaScript object (plain) | `{ title: "Hello world" }` | Use `select` and `include` to determine which fields to return. |
| `null`                    | `null`                     | Record not found                                                |

Examples \[#examples-3]

Get the User record with an id of 42 \[#get-the-user-record-with-an-id-of-42]

```ts
const result = await prisma.user.findUnique({
  where: {
    id: 42,
  },
});
```

Get the User record with an email of alice@prisma.io \[#get-the-user-record-with-an-email-of-aliceprismaio]

```ts
const result = await prisma.user.findUnique({
  where: {
    email: "alice@prisma.io",
  },
});
```

Get the User record with firstName of Alice and lastName of Smith (@@unique) \[#get-the-user-record-with-firstname-of-alice-and-lastname-of-smith-unique]

```
Expand for example User model with a @@unique block
```

```prisma
model User {
  firstName String
  lastName  String

  @@unique(fields: [firstName, lastName], name: "fullname")
}
```

```ts
const result = await prisma.user.findUnique({
  where: {
    fullname: {
      // name property of @@unique attribute - default is firstname_lastname
      firstName: "Alice",
      lastName: "Smith",
    },
  },
});
```

Get the User record with firstName of Alice and lastName of Smith (@@id) \[#get-the-user-record-with-firstname-of-alice-and-lastname-of-smith-id]

```
Expand for example User model with an @@id block
```

```prisma
model User {
  firstName String
  lastName  String

  @@id([firstName, lastName])
}
```

```ts
const result = await prisma.user.findUnique({
  where: {
    firstName_lastName: {
      firstName: "Alice",
      lastName: "Smith",
    },
  },
});
```

findUniqueOrThrow() \[#finduniqueorthrow]

`findUniqueOrThrow()` retrieves a single record in the same way as [`findUnique()`](#findunique). However, if the query does not find the requested record, it throws a `PrismaClientKnownRequestError`.

Here's an example of its usage:

```ts
await prisma.user.findUniqueOrThrow({
  where: { id: 1 },
});
```

`findUniqueOrThrow()` differs from `findUnique()` as follows:

- Its return type is non-nullable. For example, `post.findUnique()` can return `post` or `null`, but `post.findUniqueOrThrow()` always returns `post`.
- It is not compatible with sequential operations in the [`$transaction` API](/orm/prisma-client/queries/transactions#the-transaction-api). If the query throws a `PrismaClientKnownRequestError`, then the API will not roll back any operations in the array of calls. As a workaround, you can use interactive transactions with the `$transaction` API, as follows:

  ```ts
   $transaction(async (prisma) => {
     await prisma.model.create({ data: { ... });
     await prisma.model.findUniqueOrThrow();
   })
  ```

findFirst() \[#findfirst]

`findFirst` returns the first record in a list that matches your criteria.

Remarks \[#remarks-2]

- If you want the query to throw an error if the record is not found, then consider using [`findFirstOrThrow`](#findfirstorthrow) instead.

Options \[#options-4]

| Name                   | Example type (`User`)                                 | Required | Description                                                                                                                                                                 |
| ---------------------- | ----------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `select`               | `XOR<UserSelect, null>`                               | No       | [Specifies which properties to include](/v6/orm/prisma-client/queries/select-fields) on the returned object.                                                                |
| `include`              | `XOR<UserInclude, null>`                              | No       | [Specifies which relations should be eagerly loaded](/orm/prisma-client/queries/relation-queries) on the returned object.                                                   |
| `omit`                 | `XOR<UserOmit, null>`                                 | No       | Specifies which properties to exclude on the returned object. Excludes specified fields from the result.                                                                    |
| `relationLoadStrategy` | `'join'` or `'query'`                                 | No       | **Default: `join`**. [Load strategy](/orm/prisma-client/queries/relation-queries#relation-load-strategies-preview) for relations. Requires `relationJoins` preview feature. |
| `where`                | `UserWhereInput`                                      | No       | Wraps *all* model fields in a type so that the list can be filtered by any property.                                                                                        |
| `orderBy`              | `XOR<Enumerable<UserOrderByInput>, UserOrderByInput>` | No       | Lets you order the returned list by any property.                                                                                                                           |

Return type \[#return-type-1]

| Return type               | Example                    | Description                                                     |
| ------------------------- | -------------------------- | --------------------------------------------------------------- |
| JavaScript object (typed) | `User`                     | Specifies which properties to include on the returned object.   |
| JavaScript object (plain) | `{ title: "Hello world" }` | Use `select` and `include` to determine which fields to return. |
| `null`                    | `null`                     | Record not found                                                |

Remarks \[#remarks-3]

- `findFirst` calls `findMany` behind the scenes and accepts the same query options.
- Passing in a negative `take` value when you use a `findFirst` query reverses the order of the list.

Examples \[#examples-4]

See [Filter conditions and operators](#filter-conditions-and-operators) for examples of how to filter results.

Get the first User record where the name is Alice \[#get-the-first-user-record-where-the-name-is-alice]

```ts
const user = await prisma.user.findFirst({
  where: { name: "Alice" },
});
```

Get the first Post record where the title starts with A test, reverse the list with take \[#get-the-first-post-record-where-the-title-starts-with-a-test-reverse-the-list-with-take]

```ts
import { PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient({});

async function main() {
  const a = await prisma.post.create({
    data: {
      title: "A test 1",
    },
  });

  const b = await prisma.post.create({
    data: {
      title: "A test 2",
    },
  });

  const c = await prisma.post.findFirst({
    where: {
      title: {
        startsWith: "A test",
      },
    },
    orderBy: {
      title: "asc",
    },
    take: -1, // Reverse the list
  });
}

main();
```

findFirstOrThrow() \[#findfirstorthrow]

`findFirstOrThrow()` retrieves a single data record in the same way as [`findFirst()`](#findfirst). However, if the query does not find a record, it throws a `PrismaClientKnownRequestError`.

`findFirstOrThrow()` differs from `findFirst()` as follows:

- Its return type is non-nullable. For example, `post.findFirst()` can return `post` or `null`, but `post.findFirstOrThrow` always returns `post`.
- It is not compatible with sequential operations in the [`$transaction` API](/orm/prisma-client/queries/transactions#the-transaction-api). If the query returns `PrismaClientKnownRequestError`, then the API will not roll back any operations in the array of calls. As a workaround, you can use interactive transactions with the `$transaction` API, as follows:

  ```ts
  prisma.$transaction(async (tx) => {
    await tx.model.create({ data: { ... });
    await tx.model.findFirstOrThrow();
  })
  ```

findMany() \[#findmany]

`findMany` returns a list of records.

Options \[#options-5]

| Name                   | Type                                                          | Required | Description                                                                                                                                                                                               |
| ---------------------- | ------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `select`               | `XOR<PostSelect, null>`                                       | No       | [Specifies which properties to include](/v6/orm/prisma-client/queries/select-fields) on the returned object.                                                                                              |
| `include`              | `XOR<PostInclude, null>`                                      | No       | [Specifies which relations should be eagerly loaded](/orm/prisma-client/queries/relation-queries) on the returned object.                                                                                 |
| `omit`                 | `XOR<PostOmit, null>`                                         | No       | Specifies which properties to exclude on the returned object. Excludes specified fields from the result                                                                                                   |
| `relationLoadStrategy` | `'join'` or `'query'`                                         | No       | **Default: `join`**. [Load strategy](/orm/prisma-client/queries/relation-queries#relation-load-strategies-preview) for relations. Requires `relationJoins` preview feature.                               |
| `where`                | `UserWhereInput`                                              | No       | Wraps *all* model fields in a type so that the list can be filtered by any property.                                                                                                                      |
| `orderBy`              | `XOR<Enumerable<PostOrder``ByInput>, PostOrderByInput>` | No       | Lets you order the returned list by any property.                                                                                                                                                         |
| `cursor`               | `UserWhereUniqueInput`                                        | No       | Specifies the position for the list (the value typically specifies an `id` or another unique value).                                                                                                      |
| `take`                 | `number`                                                      | No       | Specifies how many objects should be returned in the list (as seen from the *beginning* (positive value) or *end* (negative value) **either** of the list **or** from the `cursor` position if mentioned) |
| `skip`                 | `number`                                                      | No       | Specifies how many of the returned objects in the list should be skipped.                                                                                                                                 |
| `distinct`             | `Enumerable<UserDistinctFieldEnum>`                           | No       | Lets you filter out duplicate rows by a specific field - for example, return only distinct `Post` titles.                                                                                                 |

Return type \[#return-type-2]

| Return type                     | Example                      | Description                                                     |
| ------------------------------- | ---------------------------- | --------------------------------------------------------------- |
| JavaScript array object (typed) | `User[]`                     |                                                                 |
| JavaScript array object (plain) | `[{ title: "Hello world" }]` | Use `select` and `include` to determine which fields to return. |
| Empty array                     | `[]`                         | No matching records found.                                      |

Examples \[#examples-5]

See [Filter conditions and operators](#filter-conditions-and-operators) for examples of how to filter results.

Get all User records where the name is Alice \[#get-all-user-records-where-the-name-is-alice]

```ts
const user = await prisma.user.findMany({
  where: { name: "Alice" },
});
```

create() \[#create]

`create` creates a new database record.

Options \[#options-6]

| Name                   | Type                                                     | Required | Description                                                                                                                                                                                                                                                                   |
| ---------------------- | -------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                 | `XOR<UserCreateInput,` `UserUncheckedCreateInput>` | **Yes**  | Wraps all the model fields in a type so that they can be provided when creating new records. It also includes relation fields which lets you perform (transactional) nested inserts. Fields that are marked as optional or have default values in the datamodel are optional. |
| [`select`](#select)    | `XOR<UserSelect, null>`                                  | No       | [Specifies which properties to include](/v6/orm/prisma-client/queries/select-fields) on the returned object.                                                                                                                                                                  |
| [`include`](#include)  | `XOR<UserInclude, null>`                                 | No       | [Specifies which relations should be eagerly loaded](/orm/prisma-client/queries/relation-queries) on the returned object.                                                                                                                                                     |
| [`omit`](#omit)        | `XOR<UserOmit, null>`                                    | No       | Specifies which properties to exclude on the returned object. Excludes specified fields from the result                                                                                                                                                                       |
| `relationLoadStrategy` | `'join'` or `'query'`                                    | No       | **Default: `join`**. [Load strategy](/orm/prisma-client/queries/relation-queries#relation-load-strategies-preview) for relations. Requires `relationJoins` preview feature.                                                                                                   |

Return type \[#return-type-3]

| Return type               | Example                        | Description                                                     |
| ------------------------- | ------------------------------ | --------------------------------------------------------------- |
| JavaScript object (typed) | `User`                         |                                                                 |
| JavaScript object (plain) | `{ name: "Alice Wonderland" }` | Use `select` and `include` to determine which fields to return. |

Remarks \[#remarks-4]

- You can also perform a nested [`create`](#create) - for example, add a `User` and two `Post` records at the same time.

Examples \[#examples-6]

Create a single new record with the only required field email \[#create-a-single-new-record-with-the-only-required-field-email]

```ts
const user = await prisma.user.create({
  data: { email: "alice@prisma.io" },
});
```

Create multiple new records \[#create-multiple-new-records]

In most cases, you can carry out batch inserts with the [`createMany()`](#createmany) or [`createManyAndReturn()`](#createmanyandreturn) queries. However, [there are scenarios where `create()` is the best option to insert multiple records](#remarks-11).

The following example results in **two** `INSERT` statements:

```ts
import { Prisma, PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  let users: Prisma.UserCreateInput[] = [
    {
      email: "ariana@prisma.io",
      name: "Ari",
      profileViews: 20,
      coinflips: [true, false, false],
      role: "ADMIN",
    },
    {
      email: "elsa@prisma.io",
      name: "Elsa",
      profileViews: 20,
      coinflips: [true, false, false],
      role: "ADMIN",
    },
  ];

  await Promise.all(
    users.map(async (user) => {
      await prisma.user.create({
        data: user,
      });
    }),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

```sql
prisma:query BEGIN
prisma:query INSERT INTO "public"."User" ("name","email","profileViews","role","coinflips") VALUES ($1,$2,$3,$4,$5) RETURNING "public"."User"."id"
prisma:query SELECT "public"."User"."id", "public"."User"."name", "public"."User"."email", "public"."User"."profileViews", "public"."User"."role", "public"."User"."coinflips" FROM "public"."User" WHERE "public"."User"."id" = $1 LIMIT $2 OFFSET $3
prisma:query INSERT INTO "public"."User" ("name","email","profileViews","role","coinflips") VALUES ($1,$2,$3,$4,$5) RETURNING "public"."User"."id"
prisma:query COMMIT
prisma:query SELECT "public"."User"."id", "public"."User"."name", "public"."User"."email", "public"."User"."profileViews", "public"."User"."role", "public"."User"."coinflips" FROM "public"."User" WHERE "public"."User"."id" = $1 LIMIT $2 OFFSET $3
prisma:query COMMIT
```

update() \[#update]

`update` updates an existing database record.

Options \[#options-7]

| Name                   | Type                                                   | Required | Description                                                                                                                                                                               |
| ---------------------- | ------------------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                 | `XOR<UserUpdateInput``UserUncheckedUpdateInput>` | **Yes**  | Wraps all the fields of the model so that they can be provided when updating an existing record. Fields that are marked as optional or have default values in the datamodel are optional. |
| `where`                | `UserWhereUniqueInput`                                 | **Yes**  | Wraps all fields of a model so that a record can be selected ([learn more](#filter-on-non-unique-fields-with-userwhereuniqueinput)).                                                      |
| [`select`](#select)    | `XOR<UserSelect, null>`                                | No       | [Specifies which properties to include](/v6/orm/prisma-client/queries/select-fields) on the returned object.                                                                              |
| [`include`](#include)  | `XOR<UserInclude, null>`                               | No       | [Specifies which relations should be eagerly loaded](/orm/prisma-client/queries/relation-queries) on the returned object.                                                                 |
| [`omit`](#omit)        | `XOR<UserOmit, null>`                                  | No       | Specifies which properties to exclude on the returned object. Excludes specified fields from the result.                                                                                  |
| `relationLoadStrategy` | `'join'` or `'query'`                                  | No       | **Default: `join`**. [Load strategy](/orm/prisma-client/queries/relation-queries#relation-load-strategies-preview) for relations. Requires `relationJoins` preview feature.               |

Return type \[#return-type-4]

| Return type                                    | Example                        | Description                                                                                                |
| ---------------------------------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| JavaScript object (typed)                      | `User`                         |                                                                                                            |
| JavaScript object (plain)                      | `{ name: "Alice Wonderland" }` | Use `select` and `include` to determine which fields to return.                                            |
| `PrismaClientKnownRequestError` (code `P2025`) |                                | Thrown if the record to update does not exist. See [Error reference](/orm/reference/error-reference#p2025) |

Remarks \[#remarks-5]

- To perform arithmetic operations on update (add, subtract, multiply, divide), use [atomic updates](#atomic-number-operations) to prevent race conditions.
- You can also perform a nested [`update`](#update-1) - for example, update a user and that user's posts at the same time.

Examples \[#examples-7]

Update the email of the User record with id of 1 to alice@prisma.io \[#update-the-email-of-the-user-record-with-id-of-1-to-aliceprismaio]

```ts
const user = await prisma.user.update({
  where: { id: 1 },
  data: { email: "alice@prisma.io" },
});
```

upsert() \[#upsert]

```
This section covers the usage of the `upsert()` operation. To learn about using [nested upsert queries](#upsert-1) within `update()`, reference the linked documentation.
```

`upsert` does the following:

- If an existing database record satisfies the `where` condition, it updates that record
- If no database record satisfies the `where` condition, it creates a new database record

Options \[#options-8]

| Name                   | Type                                                    | Required | Description                                                                                                                                                                                                                                                                |
| ---------------------- | ------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`               | `XOR<UserCreateInput,``UserUncheckedCreateInput>` | **Yes**  | Wraps all the fields of the model so that they can be provided when creating new records. It also includes relation fields which lets you perform (transactional) nested inserts. Fields that are marked as optional or have default values in the datamodel are optional. |
| `update`               | `XOR<UserUpdateInput,``UserUncheckedUpdateInput>` | **Yes**  | Wraps all the fields of the model so that they can be provided when updating an existing record. Fields that are marked as optional or have default values in the datamodel are optional.                                                                                  |
| `where`                | `UserWhereUniqueInput`                                  | **Yes**  | Wraps all fields of a model so that a record can be selected ([learn more](#filter-on-non-unique-fields-with-userwhereuniqueinput)).                                                                                                                                       |
| [`select`](#select)    | `XOR<UserSelect, null>`                                 | No       | [Specifies which properties to include](/v6/orm/prisma-client/queries/select-fields) on the returned object.                                                                                                                                                               |
| [`include`](#include)  | `XOR<UserInclude, null>`                                | No       | [Specifies which relations should be eagerly loaded](/orm/prisma-client/queries/relation-queries) on the returned object.                                                                                                                                                  |
| [`omit`](#omit)        | `XOR<UserOmit, null>`                                   | No       | Specifies which properties to exclude on the returned object. Excludes specified fields from the result                                                                                                                                                                    |
| `relationLoadStrategy` | `'join'` or `'query'`                                   | No       | **Default: `join`**. [Load strategy](/orm/prisma-client/queries/relation-queries#relation-load-strategies-preview) for relations. Requires `relationJoins` preview feature.                                                                                                |

Return type \[#return-type-5]

| Return type               | Example                        | Description                                                     |
| ------------------------- | ------------------------------ | --------------------------------------------------------------- |
| JavaScript object (typed) | `User`                         |                                                                 |
| JavaScript object (plain) | `{ name: "Alice Wonderland" }` | Use `select` and `include` to determine which fields to return. |

Remarks \[#remarks-6]

- To perform arithmetic operations on update (add, subtract, multiply, divide), use [atomic updates](#atomic-number-operations) to prevent race conditions.
- If two or more upsert operations happen at the same time and the record doesn't already exist, then a race condition might happen. As a result, one or more of the upsert operations might throw a unique key constraint error. Your application code can catch this error and retry the operation. [Learn more](#unique-key-constraint-errors-on-upserts).
- Prisma ORM hands over upsert queries to the database where possible. [Learn more](#database-upserts).

Examples \[#examples-8]

Update (if exists) or create a new User record with an email of alice@prisma.io \[#update-if-exists-or-create-a-new-user-record-with-an-email-of-aliceprismaio]

```ts
const user = await prisma.user.upsert({
  where: { id: 1 },
  update: { email: "alice@prisma.io" },
  create: { email: "alice@prisma.io" },
});
```

Unique key constraint errors on upserts \[#unique-key-constraint-errors-on-upserts]

Problem \[#problem]

If multiple upsert operations happen at the same time and the record doesn't already exist, then one or more of the operations might return a [unique key constraint error](/orm/reference/error-reference#p2002).

Cause \[#cause]

When Prisma Client does an upsert, it first checks whether that record already exists in the database. To make this check, Prisma Client performs a read operation with the `where` clause from the upsert operation. This has two possible outcomes, as follows:

- If the record does not exist, then Prisma Client creates that record.
- If the record exists, then Prisma Client updates it.

When your application tries to perform two or more concurrent upsert operations, then a race condition might happen where two or more operations do not find the record and therefore try to create that record. In this situation, one of the operations successfully creates the new record but the other operations fail and return a unique key constraint error.

Solution \[#solution]

Handle the P2002 error in your application code. When it occurs, retry the upsert operation to update the row.

Database upserts \[#database-upserts]

Where possible, Prisma Client hands over an `upsert` query to the database. This is called a *database upsert*.

Database upserts have the following advantages:

- They are faster than upserts handled by Prisma Client
- [Unique key constraint errors](#unique-key-constraint-errors-on-upserts) cannot happen

Prisma Client uses a database upsert automatically when [specific criteria](#database-upsert-query-criteria) are met. When these criteria are not met, Prisma Client handles the `upsert`.

To use a database upsert, Prisma Client sends the SQL construction [`INSERT ... ON CONFLICT SET .. WHERE`](https://www.prisma.io/dataguide/postgresql/inserting-and-modifying-data/insert-on-conflict) to the database.

Database upsert prerequisites \[#database-upsert-prerequisites]

Prisma Client uses database upserts with CockroachDB, PostgreSQL, or SQLite data sources.

Database upsert query criteria \[#database-upsert-query-criteria]

Prisma Client uses a database upsert for an `upsert` query when the query meets the following criteria:

- There are no nested queries in the `upsert`'s `create` and `update` [options](#options-7)
- The query does *not* include a selection that uses a [nested read](/orm/prisma-client/queries/relation-queries#nested-reads)
- The query modifies only one model
- There is only one unique field in the `upsert`'s `where` option
- The unique field in the `where` option and the unique field in the `create` option have the same value

If your query does not meet these criteria, then Prisma Client handles the upsert itself.

Database upsert examples \[#database-upsert-examples]

The following examples use this schema:

```prisma
model User {
  id           Int    @id
  profileViews Int
  userName     String @unique
  email        String

  @@unique([id, profileViews])
}
```

The following `upsert` query meets all of the criteria, so Prisma Client uses a database upsert.

```ts
prisma.user.upsert({
  where: {
    userName: "Alice",
  },
  create: {
    id: 1,
    profileViews: 1,
    userName: "Alice",
    email: "alice@prisma.io",
  },
  update: {
    email: "updated@example.com",
  },
});
```

In this situation, Prisma uses the following SQL query:

```sql
INSERT INTO "public"."User" ("id","profileViews","userName","email") VALUES ($1,$2,$3,$4)
ON CONFLICT ("userName") DO UPDATE
SET "email" = $5 WHERE ("public"."User"."userName" = $6 AND 1=1) RETURNING "public"."User"."id", "public"."User"."profileViews", "public"."User"."userName", "public"."User"."email"
```

The following query has multiple unique values in the `where` clause, so Prisma Client does *not* use a database upsert:

```ts
prisma.User.upsert({
  where: {
    userName: "Alice",
    profileViews: 1,
    id: 1,
  },
  create: {
    id: 1,
    profileViews: 1,
    userName: "Alice",
    email: "alice@prisma.io",
  },
  update: {
    email: "updated@example.com",
  },
});
```

In the following query, the values for `userName` in the `where` and `create` options are different, so Prisma Client does *not* use a database upsert.

```ts
prisma.User.upsert({
  where: {
    userName: "Alice",
  },
  create: {
    id: 1,
    profileViews: 1,
    userName: "AliceS",
    email: "alice@prisma.io",
  },
  update: {
    email: "updated@example.com",
  },
});
```

In the following query, the selection on the `title` field in `posts` is a nested read, so Prisma Client does *not* use a database upsert.

```ts
prisma.user.upsert({
  select: {
    email: true,
    id: true,
    posts: {
      select: {
        title: true,
      },
    },
  },
  where: {
    userName: "Alice",
  },

  create: {
    id: 1,
    profileViews: 1,
    userName: "Alice",
    email: "alice@prisma.io",
  },
  update: {
    email: "updated@example.com",
  },
});
```

delete() \[#delete]

`delete` deletes an existing database record. You can delete a record:

- By *ID*
- By a *unique* attribute

To delete records that match a certain criteria, use [`deleteMany`](#deletemany) with a filter.

Options \[#options-9]

| Name                   | Type                     | Required | Description                                                                                                                                                                 |
| ---------------------- | ------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `where`                | `UserWhereUniqueInput`   | **Yes**  | Wraps all fields of a model so that a record can be selected ([learn more](#filter-on-non-unique-fields-with-userwhereuniqueinput)).                                        |
| [`select`](#select)    | `XOR<UserSelect, null>`  | No       | [Specifies which properties to include](/v6/orm/prisma-client/queries/select-fields) on the returned object.                                                                |
| [`include`](#include)  | `XOR<UserInclude, null>` | No       | [Specifies which relations should be eagerly loaded](/orm/prisma-client/queries/relation-queries) on the returned object.                                                   |
| [`omit`](#omit)        | `XOR<UserOmit, null>`    | No       | Specifies which properties to exclude on the returned object. Excludes specified fields from the result                                                                     |
| `relationLoadStrategy` | `'join'` or `'query'`    | No       | **Default: `join`**. [Load strategy](/orm/prisma-client/queries/relation-queries#relation-load-strategies-preview) for relations. Requires `relationJoins` preview feature. |

Return type \[#return-type-6]

| Return type                                    | Example                        | Description                                                                                                   |
| ---------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| JavaScript object (typed)                      | `User`                         | The `User` record that was deleted.                                                                           |
| JavaScript object (plain)                      | `{ name: "Alice Wonderland" }` | Data from the `User` record that was deleted. Use `select` and `include` to determine which fields to return. |
| `PrismaClientKnownRequestError` (code `P2025`) |                                | Thrown if the record to delete does not exist. See [Error reference](/orm/reference/error-reference#p2025)    |

Remarks \[#remarks-7]

- To delete multiple records based on some criteria (for example, all `User` records with a `prisma.io` email address, use `deleteMany`)

Examples \[#examples-9]

Delete the User record with an id of 1 \[#delete-the-user-record-with-an-id-of-1]

```ts
const user = await prisma.user.delete({
  where: { id: 1 },
});
```

Delete the User record where email equals elsa@prisma.io \[#delete-the-user-record-where-email-equals-elsaprismaio]

The following query deletes a specific user record and uses `select` to return the `name` and `email` of the deleted user:

```ts
const deleteUser = await prisma.user.delete({
  where: {
    email: "elsa@prisma.io",
  },
  select: {
    email: true,
    name: true,
  },
});
```

```json
{ "email": "elsa@prisma.io", "name": "Elsa" }
```

createMany() \[#createmany]

`createMany` creates multiple records in a transaction.

Options \[#options-10]

| Name              | Type                              | Required | Description                                                                                                                                                                                                                                             |
| ----------------- | --------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`            | `Enumerable<UserCreateManyInput>` | **Yes**  | Wraps all the model fields in a type so that they can be provided when creating new records. Fields that are marked as optional or have default values in the datamodel are optional.                                                                   |
| `skipDuplicates?` | `boolean`                         | No       | Do not insert records with unique fields or ID fields that already exist. Only supported by databases that support [`ON CONFLICT DO NOTHING`](https://www.postgresql.org/docs/9.5/sql-insert.html#SQL-ON-CONFLICT). This excludes MongoDB and SQLServer |

Return type \[#return-type-7]

| Return type    | Example        | Description                               |
| -------------- | -------------- | ----------------------------------------- |
| `BatchPayload` | `{ count: 3 }` | A count of the number of records created. |

Remarks \[#remarks-8]

- `createMany()` is supported by SQLite.
- The `skipDuplicates` option is not supported by MongoDB, SQLServer, or SQLite.
- You **cannot** create or connect relations by using nested `create`, `createMany`, `connect`, `connectOrCreate` queries inside a top-level `createMany()` query. See here for a [workaround](/orm/prisma-client/queries/relation-queries#using-nested-createmany).
- You can use a nested [`createMany`](#createmany-1) query inside an [`update()`](#update) or [`create()`](#create) query - for example, add a `User` and two `Post` records with a nested `createMany` at the same time.

Examples \[#examples-10]

Create several new users \[#create-several-new-users]

```ts
const users = await prisma.user.createMany({
  data: [
    { name: "Sonali", email: "sonali@prisma.io" },
    { name: "Alex", email: "alex@prisma.io" },
  ],
});
```

createManyAndReturn() \[#createmanyandreturn]

`createManyAndReturn` creates multiple records and returns the resulting objects. Supported for PostgreSQL, CockroachDB, and SQLite.

Options \[#options-11]

| Name                  | Type                              | Required | Description                                                                                                                                                                                                                                             |
| --------------------- | --------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                | `Enumerable<UserCreateManyInput>` | **Yes**  | Wraps all the model fields in a type so that they can be provided when creating new records. Fields that are marked as optional or have default values in the datamodel are optional.                                                                   |
| [`select`](#select)   | `XOR<UserSelect, null>`           | No       | [Specifies which properties to include](/v6/orm/prisma-client/queries/select-fields) on the returned objects.                                                                                                                                           |
| [`omit`](#omit)       | `XOR<UserOmit, null>`             | No       | Specifies which properties to exclude on the returned objects. Excludes specified fields from the result. Mutually exclusive with `select`.                                                                                                             |
| [`include`](#include) | `XOR<UserInclude, null>`          | No       | [Specifies which relations should be eagerly loaded](/orm/prisma-client/queries/relation-queries) on the returned objects.                                                                                                                              |
| `skipDuplicates?`     | `boolean`                         | No       | Do not insert records with unique fields or ID fields that already exist. Only supported by databases that support [`ON CONFLICT DO NOTHING`](https://www.postgresql.org/docs/9.5/sql-insert.html#SQL-ON-CONFLICT). This excludes MongoDB and SQLServer |

Remarks \[#remarks-9]

- The `skipDuplicates` option is not supported by SQLite.
- Note that the order of elements returned by `createManyAndReturn` is not guaranteed.
- You **cannot** create or connect relations by using nested `create`, `createMany`, `connect`, `connectOrCreate` queries inside a top-level `createManyAndReturn()` query. See here for a [workaround](/orm/prisma-client/queries/relation-queries#using-nested-createmany).
- When relations are included via `include`, a separate query is generated per relation.
- `relationLoadStrategy: join` is not supported.

Return type \[#return-type-8]

| Return type                     | Example                | Description                                                             |
| ------------------------------- | ---------------------- | ----------------------------------------------------------------------- |
| JavaScript array object (typed) | `User[]`               |                                                                         |
| JavaScript array object (plain) | `[{ name: "Sonali" }]` | Use `select`, `omit` and `include` to determine which fields to return. |

Examples \[#examples-11]

Create and return several new users \[#create-and-return-several-new-users]

```ts
const users = await prisma.user.createManyAndReturn({
  data: [
    { name: "Sonali", email: "sonali@prisma.io" },
    { name: "Alex", email: "alex@prisma.io" },
  ],
});
```

```json
[
  { "id": 0, "name": "Sonali", "email": "sonali@prisma.io", "profileViews": 0 },
  { "id": 1, "name": "Alex", "email": "alex@prisma.io", "profileViews": 0 }
]
```

updateMany() \[#updatemany]

`updateMany` updates a batch of existing database records in bulk and returns the number of updated records.

Options \[#options-12]

| Name    | Type                                                                    | Required | Description                                                                                                                                                                                         |
| ------- | ----------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`  | `XOR<UserUpdateManyMutationInput,``UserUncheckedUpdateManyInput>` | **Yes**  | Wraps all the fields of the model so that they can be provided when updating an existing record. Fields that are marked as optional or have default values in the datamodel are optional on `data`. |
| `where` | `UserWhereInput`                                                        | No       | Wraps *all* fields of a model so that the list can be filtered by any property. If you do not filter the list, all records will be updated.                                                         |
| `limit` | `number`                                                                | No       | Limits the number of records to update.                                                                                                                                                             |

Return type \[#return-type-9]

| Return type    | Example        | Description                   |
| -------------- | -------------- | ----------------------------- |
| `BatchPayload` | `{ count: 4 }` | The count of updated records. |

```ts
export type BatchPayload = {
  count: number;
};
```

Examples \[#examples-12]

Update all User records where the name is Alice to ALICE \[#update-all-user-records-where-the-name-is-alice-to-alice]

```ts
const updatedUserCount = await prisma.user.updateMany({
  where: { name: "Alice" },
  data: { name: "ALICE" },
});
```

Update all User records where the email contains prisma.io and at least one related Post has more than 10 likes \[#update-all-user-records-where-the-email-contains-prismaio-and-at-least-one-related-post-has-more-than-10-likes]

```ts
const updatedUserCount = await prisma.user.updateMany({
  where: {
    email: {
      contains: "prisma.io",
    },
    posts: {
      some: {
        likes: {
          gt: 10,
        },
      },
    },
  },
  data: {
    role: "USER",
  },
});
```

Update User records where the email contains prisma.io, but limit to 5 records updated. \[#update-user-records-where-the-email-contains-prismaio-but-limit-to-5-records-updated]

```ts
const updatedUserCount = await prisma.user.updateMany({
  where: {
    email: {
      contains: "prisma.io",
    },
  },
  data: {
    role: "USER",
  },
  limit: 5,
});
```

updateManyAndReturn() \[#updatemanyandreturn]

`updateManyAndReturn` updates multiple records and returns the resulting objects. Supported for PostgreSQL, CockroachDB, and SQLite.

Options \[#options-13]

| Name    | Type                                                                    | Required | Description                                                                                                                                                                                         |
| ------- | ----------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`  | `XOR<UserUpdateManyMutationInput,``UserUncheckedUpdateManyInput>` | **Yes**  | Wraps all the fields of the model so that they can be provided when updating an existing record. Fields that are marked as optional or have default values in the datamodel are optional on `data`. |
| `where` | `UserWhereInput`                                                        | No       | Wraps *all* fields of a model so that the list can be filtered by any property. If you do not filter the list, all records will be updated.                                                         |

Return type \[#return-type-10]

| Return type                     | Example                | Description                                                             |
| ------------------------------- | ---------------------- | ----------------------------------------------------------------------- |
| JavaScript array object (typed) | `User[]`               |                                                                         |
| JavaScript array object (plain) | `[{ name: "Sonali" }]` | Use `select`, `omit` and `include` to determine which fields to return. |

Examples \[#examples-13]

Update and return multiple users \[#update-and-return-multiple-users]

```ts
const users = await prisma.user.updateManyAndReturn({
  where: {
    email: {
      contains: "prisma.io",
    },
  },
  data: {
    role: "ADMIN",
  },
});
```

```json
[
  { "id": 0, "name": "Sonali", "email": "sonali@prisma.io", "role": "ADMIN", "profileViews": 0 },
  { "id": 1, "name": "Alex", "email": "alex@prisma.io", "role": "ADMIN", "profileViews": 0 }
]
```

deleteMany() \[#deletemany]

`deleteMany` deletes multiple records in a transaction.

Options \[#options-14]

| Name    | Type             | Required | Description                                                                  |
| ------- | ---------------- | -------- | ---------------------------------------------------------------------------- |
| `where` | `UserWhereInput` | No       | Wraps *all* fields of a model so that the list can be filtered by any field. |
| `limit` | `Int`            | No       | Limits the number of records deleted.                                        |

Return type \[#return-type-11]

| Return type    | Example        | Description                   |
| -------------- | -------------- | ----------------------------- |
| `BatchPayload` | `{ count: 4 }` | The count of deleted records. |

```ts
export type BatchPayload = {
  count: number;
};
```

Examples \[#examples-14]

Delete all User records \[#delete-all-user-records]

```ts
const deletedUserCount = await prisma.user.deleteMany({});
```

Delete all User records where the name is Alice \[#delete-all-user-records-where-the-name-is-alice]

```ts
const deletedUserCount = await prisma.user.deleteMany({
  where: { name: "Alice" },
});
```

Delete all User records where the email contains prisma.io, but limit to 5 records deleted. \[#delete-all-user-records-where-the-email-contains-prismaio-but-limit-to-5-records-deleted]

```ts
const deletedUserCount = await prisma.user.deleteMany({
  where: {
    email: {
      contains: "prisma.io",
    },
  },
  limit: 5,
});
```

See [Filter conditions and operators](#filter-conditions-and-operators) for examples of how to filter the records to delete.

count() \[#count]

Options \[#options-15]

| Name      | Type                                                          | Required | Description                                                                                                                                                                                               |
| --------- | ------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `where`   | `UserWhereInput`                                              | No       | Wraps *all* model fields in a type so that the list can be filtered by any property.                                                                                                                      |
| `orderBy` | `XOR<Enumerable<PostOrder``ByInput>, PostOrderByInput>` | No       | Lets you order the returned list by any property.                                                                                                                                                         |
| `cursor`  | `UserWhereUniqueInput`                                        | No       | Specifies the position for the list (the value typically specifies an `id` or another unique value).                                                                                                      |
| `take`    | `number`                                                      | No       | Specifies how many objects should be returned in the list (as seen from the *beginning* (positive value) or *end* (negative value) **either** of the list **or** from the `cursor` position if mentioned) |
| `skip`    | `number`                                                      | No       | Specifies how many of the returned objects in the list should be skipped.                                                                                                                                 |

Return type \[#return-type-12]

| Return type                    | Example                  | Description                   |
| ------------------------------ | ------------------------ | ----------------------------- |
| `number`                       | `29`                     | The count of records.         |
| `UserCountAggregateOutputType` | `{ _all: 27, name: 10 }` | Returned if `select` is used. |

Examples \[#examples-15]

Count all User records \[#count-all-user-records]

```ts
const result = await prisma.user.count();
```

Count all User records with at least one published Post \[#count-all-user-records-with-at-least-one-published-post]

```ts
const result = await prisma.user.count({
  where: {
    post: {
      some: {
        published: true,
      },
    },
  },
});
```

Use select to perform three separate counts \[#use-select-to-perform-three-separate-counts]

The following query returns:

- A count of all records (`_all`)
- A count of all records with non-`null` `name` fields
- A count of all records with non-`null` `city` fields

```ts
const c = await prisma.user.count({
  select: {
    _all: true,
    city: true,
    name: true,
  },
});
```

aggregate() \[#aggregate]

See also: [Aggregation, grouping, and summarizing](/orm/prisma-client/queries/aggregation-grouping-summarizing#aggregate)

Options \[#options-16]

| Name      | Type                                                         | Required | Description                                                                                                                                                                                               |
| --------- | ------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `where`   | `UserWhereInput`                                             | No       | Wraps *all* model fields in a type so that the list can be filtered by any property.                                                                                                                      |
| `orderBy` | `XOR<Enumerable<UserOrderByInput>,``UserOrderByInput>` | No       | Lets you order the returned list by any property.                                                                                                                                                         |
| `cursor`  | `UserWhereUniqueInput`                                       | No       | Specifies the position for the list (the value typically specifies an `id` or another unique value).                                                                                                      |
| `take`    | `number`                                                     | No       | Specifies how many objects should be returned in the list (as seen from the *beginning* (positive value) or *end* (negative value) **either** of the list **or** from the `cursor` position if mentioned) |
| `skip`    | `number`                                                     | No       | Specifies how many of the returned objects in the list should be skipped.                                                                                                                                 |
| `_count`  | `true`                                                       | No       | Returns a count of matching records or non-`null` fields.                                                                                                                                                 |
| `_avg`    | `UserAvgAggregateInputType`                                  | No       | Returns an average of all values of the specified field.                                                                                                                                                  |
| `_sum`    | `UserSumAggregateInputType`                                  | No       | Returns the sum of all values of the specified field.                                                                                                                                                     |
| `_min`    | `UserMinAggregateInputType`                                  | No       | Returns the smallest available value of the specified field.                                                                                                                                              |
| `_max`    | `UserMaxAggregateInputType`                                  | No       | Returns the largest available value of the specified field.                                                                                                                                               |

Examples \[#examples-16]

Return \_min, \_max, and \_count of profileViews of all User records \[#return-\_min-\_max-and-\_count-of-profileviews-of-all-user-records]

```ts
const minMaxAge = await prisma.user.aggregate({
  _count: {
    _all: true,
  },
  _max: {
    profileViews: true,
  },
  _min: {
    profileViews: true,
  },
});
```

```json
{
  _count: { _all: 29 },
  _max: { profileViews: 90 },
  _min: { profileViews: 0 }
}
```

Return \_sum of all profileViews for all User records \[#return-\_sum-of-all-profileviews-for-all-user-records]

```ts
const setValue = await prisma.user.aggregate({
  _sum: {
    profileViews: true,
  },
});
```

```json
{
  "_sum": {
    "profileViews": 9493
  }
}
```

groupBy() \[#groupby]

See also: [Aggregation, grouping, and summarizing](/orm/prisma-client/queries/aggregation-grouping-summarizing#group-by)

Options \[#options-17]

| Name      | Type                                                         | Required | Description                                                                                                                                                                                               |
| --------- | ------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `where`   | `UserWhereInput`                                             | No       | Wraps *all* model fields in a type so that the list can be filtered by any property.                                                                                                                      |
| `orderBy` | `XOR<Enumerable<UserOrderByInput>,``UserOrderByInput>` | No       | Lets you order the returned list by any property that is also present in `by`.                                                                                                                            |
| `by`      | `Array<UserScalarFieldEnum>` | `string`                     | No       | Specifies the field or combination of fields to group records by.                                                                                                                                         |
| `having`  | `UserScalarWhereWithAggregatesInput`                         | No       | Allows you to filter groups by an aggregate value - for example, only return groups *having* an average age less than 50.                                                                                 |
| `take`    | `number`                                                     | No       | Specifies how many objects should be returned in the list (as seen from the *beginning* (positive value) or *end* (negative value) **either** of the list **or** from the `cursor` position if mentioned) |
| `skip`    | `number`                                                     | No       | Specifies how many of the returned objects in the list should be skipped.                                                                                                                                 |
| `_count`  | `true` | `UserCountAggregateInputType`                      | No       | Returns a count of matching records or non-`null` fields.                                                                                                                                                 |
| `_avg`    | `UserAvgAggregateInputType`                                  | No       | Returns an average of all values of the specified field.                                                                                                                                                  |
| `_sum`    | `UserSumAggregateInputType`                                  | No       | Returns the sum of all values of the specified field.                                                                                                                                                     |
| `_min`    | `UserMinAggregateInputType`                                  | No       | Returns the smallest available value of the specified field.                                                                                                                                              |
| `_max`    | `UserMaxAggregateInputType`                                  | No       | Returns the largest available value of the specified field.                                                                                                                                               |

Examples \[#examples-17]

Group by country/city where the average profileViews is greater than 200, and return the \_sum of profileViews for each group \[#group-by-countrycity-where-the-average-profileviews-is-greater-than-200-and-return-the-\_sum-of-profileviews-for-each-group]

The query also returns a count of `_all` records in each group, and all records with non-`null` `city` field values in each group.

```ts
const groupUsers = await prisma.user.groupBy({
  by: ["country", "city"],
  _count: {
    _all: true,
    city: true,
  },
  _sum: {
    profileViews: true,
  },
  orderBy: {
    country: "desc",
  },
  having: {
    profileViews: {
      _avg: {
        gt: 200,
      },
    },
  },
});
```

```json
[
  {
    country: "Denmark",
    city: "Copenhagen",
    _sum: { profileViews: 490 },
    _count: {
      _all: 70,
      city: 8,
    },
  },
  {
    country: "Sweden",
    city: "Stockholm",
    _sum: { profileViews: 500 },
    _count: {
      _all: 50,
      city: 3,
    },
  },
];
```

findRaw() \[#findraw]

See: [Using Raw SQL (`findRaw()`)](/orm/prisma-client/using-raw-sql/raw-queries#findraw).

aggregateRaw() \[#aggregateraw]

See: [Using Raw SQL (`aggregateRaw()`)](/orm/prisma-client/using-raw-sql/raw-queries#aggregateraw).

Model query options \[#model-query-options]

select \[#select]

`select` defines which fields are included in the object that Prisma Client returns. See: [Select fields and include relations](/v6/orm/prisma-client/queries/select-fields) .

Remarks \[#remarks-10]

- You cannot combine `select` and `include` on the same level.
- You can [select a `_count` of relations](#select-a-_count-of-relations).

Examples \[#examples-18]

Select the name and profileViews fields of a single User record \[#select-the-name-and-profileviews-fields-of-a-single-user-record]

```ts
const result = await prisma.user.findUnique({
  where: { id: 1 },
  select: {
    name: true,
    profileViews: true,
  },
});
```

```json
{
  name: "Alice",
  profileViews: 0
}
```

Select the email and role fields of a multiple User records \[#select-the-email-and-role-fields-of-a-multiple-user-records]

```ts
const result = await prisma.user.findMany({
  select: {
    email: true,
    role: true,
  },
});
```

```json
[
  {
    email: "alice@prisma.io",
    role: "ADMIN",
  },
  {
    email: "bob@prisma.io",
    role: "USER",
  },
];
```

Select a \_count of relations \[#select-a-\_count-of-relations]

```ts
const usersWithCount = await prisma.user.findMany({
  select: {
    _count: {
      select: { posts: true },
    },
  },
});
```

```json
{
  _count: {
    posts: 3;
  }
}
```

Select the 'id' and 'title' fields of related Post records \[#select-the-id-and-title-fields-of-related-post-records]

```ts
const result = await prisma.user.findMany({
  select: {
    id: true,
    name: true,
    posts: {
      select: {
        id: true,
        title: true,
      },
    },
  },
});
```

```ts
[
  {
    id: 1,
    name: "Alice",
    posts: [
      { id: 1, title: "Hello World" },
      { id: 2, title: "Bye bye" },
    ],
  },
  {
    id: 2,
    name: "Bob",
    posts: [],
  },
];
```

include inside select \[#include-inside-select]

```ts
const result = await prisma.user.findMany({
  select: {
    id: true,
    name: true,
    posts: {
      include: {
        author: true,
      },
    },
  },
});
```

```json
[
  {
    id: 1,
    name: "Alice",
    posts: [
      {
        id: 1,
        title: "Hello World",
        published: true,
        author: {
          id: 1,
          name: "Alice",
          email: "alice@prisma.io",
          role: "ADMIN",
          coinflips: [true, false],
          profileViews: 0,
        },
      },
      {
        id: 2,
        title: "Bye bye",
        published: false,
        author: {
          id: 1,
          name: "Alice",
          email: "alice@prisma.io",
          role: "USER",
          coinflips: [],
          profileViews: 0,
        },
      },
    ],
  },
];
```

include \[#include]

`include` defines which relations are included in the result that Prisma Client returns. See: [Select fields and include relations](/v6/orm/prisma-client/queries/select-fields) .

Remarks \[#remarks-11]

- You can [`include` a `_count` of relations](#include-a-_count-of-relations).

Examples \[#examples-19]

Include the posts and profile relation when loading User records \[#include-the-posts-and-profile-relation-when-loading-user-records]

```ts
const users = await prisma.user.findMany({
  include: {
    posts: true, // Returns all fields for all posts
    profile: true, // Returns all Profile fields
  },
});
```

Include the posts relation on the returned objects when creating a new User record with two Post records \[#include-the-posts-relation-on-the-returned-objects-when-creating-a-new-user-record-with-two-post-records]

```ts
const user = await prisma.user.create({
  data: {
    email: "alice@prisma.io",
    posts: {
      create: [{ title: "This is my first post" }, { title: "Here comes a second post" }],
    },
  },
  include: { posts: true }, // Returns all fields for all posts
});
```

Generated types for include \[#generated-types-for-include]

The following example demonstrates how to use TypeScript's `satisfies` operator with `include`:

```ts
const includePosts = { posts: true } satisfies Prisma.UserInclude;
```

Include a \_count of relations \[#include-a-\_count-of-relations]

```ts
const usersWithCount = await prisma.user.findMany({
  include: {
    _count: {
      select: { posts: true },
    },
  },
});
```

```json
{ id: 1, name: "Bob", email: "bob@prisma.io", _count: { posts: 3 } },
{ id: 2,  name: "Enya", email: "enya@prisma.io", _count: { posts: 2 } }
```

omit \[#omit]

`omit` defines which fields are excluded in the object that Prisma Client returns.

Remarks \[#remarks-12]

- You cannot combine `omit` and `select` since they serve opposite purposes.

Examples \[#examples-20]

Omit the password field from all User records \[#omit-the-password-field-from-all-user-records]

```ts
const result = await prisma.user.findMany({
  omit: {
    password: true,
  },
});
```

```json
[
  {
    id: 1,
    email: "jenny@prisma.io",
    name: "Jenny",
  },
  {
    id: 2,
    email: "rose@prisma.io",
    name: "Rose",
  },
];
```

Omit the title fields from all User's posts relation \[#omit-the-title-fields-from-all-users-posts-relation]

```ts
const results = await prisma.user.findMany({
  omit: {
    password: true,
  },
  include: {
    posts: {
      omit: {
        title: true,
      },
    },
  },
});
```

```json
[
  {
    id: 1,
    email: "jenny@prisma.io",
    name: "Jenny",
    posts: [
      {
        id: 1,
        author: {
          id: 1,
          email: "jenny@prisma.io",
          name: "Jenny",
        },
        authorId: 1,
      },
    ],
  },
  {
    id: 2,
    email: "rose@prisma.io",
    name: "Rose",
    posts: [
      {
        id: 2,
        author: {
          id: 2,
          email: "rose@prisma.io",
          name: "Rose",
        },
        authorId: 2,
      },
    ],
  },
];
```

Generated types for omit \[#generated-types-for-omit]

The following example demonstrates how to use TypeScript's `satisfies` operator with `omit`:

```ts
const omitPassword = { password: true } satisfies Prisma.UserOmit;
```

relationLoadStrategy (Preview) \[#relationloadstrategy-preview]

`relationLoadStrategy` specifies how a relation should be loaded from the database. It has two possible values:

- `join` (default): Uses a database-level `LATERAL JOIN` (PostgreSQL) or correlated subqueries (MySQL) and fetches all data with a single query to the database.
- `query`: Sends multiple queries to the database (one per table) and joins them on the application level.

> **Note**: Once `relationLoadStrategy` moves from [Preview](/orm/more/releases#preview) into [General Availability](/orm/more/releases#generally-available-ga), `join` will universally become the default for all relation queries.

You can learn more about join strategies [here](/orm/prisma-client/queries/relation-queries#relation-load-strategies-preview).

Because the `relationLoadStrategy` option is currently in Preview, you need to enable it via the `relationJoins` preview feature flag in your Prisma schema file:

```prisma
generator client {
  provider        = "prisma-client"
  output          = "./generated"
  previewFeatures = ["relationJoins"]
}
```

After adding this flag, you need to run `prisma generate` again to re-generate Prisma Client. The `relationJoins` feature is currently available on PostgreSQL, CockroachDB and MySQL.

Remarks \[#remarks-13]

- In most situations, the default `join` strategy will be more effective. Use `query` if you want to save resources on your database server or if you profiling shows that the application-level join is more performant.
- You can only specify the `relationLoadStrategy` on the top-level in your query. The top-level choice will affect all nested sub-queries.

Examples \[#examples-21]

Load the posts relation via a database-level JOIN when using include \[#load-the-posts-relation-via-a-database-level-join-when-using-include]

```ts
const users = await prisma.user.findMany({
  relationLoadStrategy: "join",
  include: {
    posts: true,
  },
});
```

Load the posts relation via a database-level JOIN when using select \[#load-the-posts-relation-via-a-database-level-join-when-using-select]

```ts
const users = await prisma.user.findMany({
  relationLoadStrategy: "join",
  select: {
    posts: true,
  },
});
```

where \[#where]

`where` defines one or more [filters](#filter-conditions-and-operators), and can be used to filter on record properties (like a user's email address) or related record properties (like a user's top 10 most recent post titles).

Examples \[#examples-22]

```ts
const results = await prisma.user.findMany({
  where: {
    email: {
      endsWith: "prisma.io",
    },
  },
});
```

Generated types for where \[#generated-types-for-where]

The following examples demonstrate how to use TypeScript's `satisfies` operator with `where`:

- `UserWhereInput`

  ```ts
  // UserWhereInput
  const whereNameIs = { name: "Rich" } satisfies Prisma.UserWhereInput;

  // It can be combined with conditional operators too
  const whereNameIsWithAnd = {
    name: "Rich",
    AND: [
      {
        email: {
          contains: "rich@boop.com",
        },
      },
    ],
  } satisfies Prisma.UserWhereInput;
  ```

- `UserWhereUniqueInput` This type works by exposing any unique fields on the model. A field assigned `@id` is considered unique,
  as is one assigned `@unique`.

  This type exposes all fields on the model. This means that when you filter for a single record based on a unique field, you can check additional non-unique and unique fields at the same time. [Learn more](#filter-on-non-unique-fields-with-userwhereuniqueinput).

  ```ts
  // UserWhereUniqueInput
  const whereEmailIsUnique = { email: "rich@boop.com" } satisfies Prisma.UserWhereUniqueInput;
  ```

- `PostScalarWhereInput`

  ```ts
  const whereScalarTitleIs = { title: "boop" } satisfies Prisma.PostScalarWhereInput;
  ```

- `PostUpdateWithWhereUniqueWithoutAuthorInput` - This type accepts a unique `where` field (an `@id` or another assigned `@unique`)
  and updates any field on the `Post` model except the `Author`. The `Author` is the scalar field on the `Post` model.

  ```ts
  const updatePostByIdWithoutAuthor = {
    where: { id: 1 },
    data: {
      content: "This is some updated content",
      published: true,
      title: "This is a new title",
    },
  } satisfies Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput;
  ```

- `PostUpsertWithWhereUniqueWithoutAuthorInput` - This type will update the `Post` records title field where the id matches, if it doesn't exist it will create it instead.

  ```ts
  const updatePostTitleOrCreateIfNotExist = {
    where: { id: 1 },
    update: { title: "This is a new title" },
    create: {
      id: 1,
      title: "If the title doesn't exist, then create one with this text",
    },
  } satisfies Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput;
  ```

- `PostUpdateManyWithWhereWithoutAuthorInput` - This type will update all `Post` records where published is set to false.

  ```ts
  const publishAllPosts = {
    where: { published: { equals: false } },
    data: { published: true },
  } satisfies Prisma.PostUpdateManyWithWhereWithoutAuthorInput;
  ```

orderBy \[#orderby]

Sorts a list of records. See also: [Sorting](/v6/orm/prisma-client/queries/filtering-and-sorting)

Remarks \[#remarks-14]

- You can [order by relation fields](#sort-post-by-the-related-user-records-name) - for example, order posts by the author's name.
- In PostgreSQL you can [order by relevance](#sort-post-by-relevance-of-the-title). For details, see [Sort by relevance](/v6/orm/prisma-client/queries/filtering-and-sorting#sort-by-relevance-postgresql-and-mysql).
- You can [sort `null` records first or last](#sort-post-by-the-related-user-records-name-with-null-records-first). For details, see [Sort with nulls first or last](/v6/orm/prisma-client/queries/filtering-and-sorting#sort-with-null-records-first-or-last).

Inputs for sort argument \[#inputs-for-sort-argument]

| Name   | Description             |
| ------ | ----------------------- |
| `asc`  | Sort ascending (A → Z)  |
| `desc` | Sort descending (Z → A) |

Inputs for nulls argument \[#inputs-for-nulls-argument]

Note:

- This argument is optional.
- For use on optional [scalar](/orm/prisma-schema/data-model/models#scalar-fields) fields only. If you try to sort by nulls on a required or [relation](/orm/prisma-schema/data-model/models#relation-fields) field, Prisma Client throws a [P2009 error](/orm/reference/error-reference#p2009).

| Name    | Description                    |
| ------- | ------------------------------ |
| `first` | Sort with `null` values first. |
| `last`  | Sort with `null` values last.  |

Examples \[#examples-23]

Sort User by email field \[#sort-user-by-email-field]

The following example returns all `User` records sorted by `email` ascending:

```ts
const users = await prisma.user.findMany({
  orderBy: {
    email: "asc",
  },
});
```

The following example returns all `User` records sorted by `email` descending:

```ts
const users = await prisma.user.findMany({
  orderBy: {
    email: "desc",
  },
});
```

Sort Post by the related User record's name \[#sort-post-by-the-related-user-records-name]

The following query orders posts by user name:

```ts
const posts = await prisma.post.findMany({
  orderBy: {
    author: {
      name: "asc",
    },
  },
});
```

Sort Post by the related User record's name, with null records first \[#sort-post-by-the-related-user-records-name-with-null-records-first]

The following query orders posts by user name, with `null` records first:

```ts
const posts = await prisma.post.findMany({
  orderBy: {
    author: {
      name: { sort: "asc", nulls: "first" },
    },
  },
});
```

Sort Post by relevance of the title \[#sort-post-by-relevance-of-the-title]

```
For PostgreSQL, this feature is still in Preview. [Enable the `fullTextSearchPostgres` feature flag](/v6/orm/prisma-client/queries/full-text-search#enabling-full-text-search-for-postgresql) in order to use it.
```

The following query orders posts by relevance of the search term `'database'` to the title:

```ts
const posts = await prisma.post.findMany({
  orderBy: {
    _relevance: {
      fields: ['title'],
      search: 'database',
      sort: 'asc'
    },
})
```

Sort User by the posts count \[#sort-user-by-the-posts-count]

The following query orders users by post count:

```ts
const getActiveusers = await prisma.user.findMany({
  orderBy: {
    posts: {
      count: "desc",
    },
  },
});
```

Sort User by multiple fields - email and role \[#sort-user-by-multiple-fields---email-and-role]

The following example sorts users by two fields - first `email`, then `role`:

```ts
const users = await prisma.user.findMany({
  select: {
    email: true,
    role: true,
  },
  orderBy: [
    {
      email: "desc",
    },
    {
      role: "desc",
    },
  ],
});
```

```json
[
  {
    "email": "yuki@prisma.io",
    "role": "USER"
  },
  {
    "email": "nora@prisma.io",
    "role": "USER"
  },
  {
    "email": "mary@prisma.io",
    "role": "MODERATOR"
  },
  {
    "email": "elsa@prisma.io",
    "role": "MODERATOR"
  },
  {
    "email": "eloise@prisma.io",
    "role": "USER"
  },
  {
    "email": "coco@prisma.io",
    "role": "ADMIN"
  },
  {
    "email": "anna@prisma.io",
    "role": "USER"
  },
  {
    "email": "alice@prisma.io",
    "role": "USER"
  }
]
```

The order of sorting parameters matters - the following query sorts by `role`, then `email`. Note the difference in the results:

```ts
const users = await prisma.user.findMany({
  select: {
    email: true,
    role: true,
  },
  orderBy: [
    {
      role: "desc",
    },
    {
      email: "desc",
    },
  ],
});
```

```json
[
  {
    "email": "mary@prisma.io",
    "role": "MODERATOR"
  },
  {
    "email": "elsa@prisma.io",
    "role": "MODERATOR"
  },
  {
    "email": "yuki@prisma.io",
    "role": "USER"
  },
  {
    "email": "nora@prisma.io",
    "role": "USER"
  },
  {
    "email": "eloise@prisma.io",
    "role": "USER"
  },
  {
    "email": "anna@prisma.io",
    "role": "USER"
  },
  {
    "email": "alice@prisma.io",
    "role": "USER"
  },
  {
    "email": "coco@prisma.io",
    "role": "ADMIN"
  }
]
```

Sort User by email, select name and email \[#sort-user-by-email-select-name-and-email]

The following example returns all the `name` and `email` fields of all `User` records, sorted by `email`:

```ts
const users3 = await prisma.user.findMany({
  orderBy: {
    email: "asc",
  },
  select: {
    name: true,
    email: true,
  },
});
```

```json
[
  {
    name: "Alice",
    email: "alice@prisma.io",
  },
  {
    name: "Ariadne",
    email: "ariadne@prisma.io",
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
  },
];
```

Sort User records by email and sort nested Post records by title \[#sort-user-records-by-email-and-sort-nested-post-records-by-title]

The following example:

- Returns all `User` records sorted by `email`
- For each `User` record, returns the `title` field of all nested `Post` records sorted by `title`

```ts
const usersWithPosts = await prisma.user.findMany({
  orderBy: {
    email: "asc",
  },
  include: {
    posts: {
      select: {
        title: true,
      },
      orderBy: {
        title: "asc",
      },
    },
  },
});
```

```json
[
  {
    "id": 2,
    "email": "alice@prisma.io",
    "name": "Alice",
    "posts": [
      {
        "title": "Watch the talks from Prisma Day 2019"
      }
    ]
  },
  {
    "id": 3,
    "email": "ariadne@prisma.io",
    "name": "Ariadne",
    "posts": [
      {
        "title": "How to connect to a SQLite database"
      },
      {
        "title": "My first day at Prisma"
      }
    ]
  },
  {
    "id": 1,
    "email": "bob@prisma.io",
    "name": "Bob",
    "posts": [
      {
        "title": "Follow Prisma on Twitter"
      },
      {
        "title": "Subscribe to GraphQL Weekly for community news "
      }
    ]
  }
]
```

Sort one user's nested list of Post records \[#sort-one-users-nested-list-of-post-records]

The following example retrieves a single `User` record by ID, as well as a list of nested `Post` records sorted by `title`:

```ts
const userWithPosts = await prisma.user.findUnique({
  where: {
    id: 1,
  },
  include: {
    posts: {
      orderBy: {
        title: "desc",
      },
      select: {
        title: true,
        published: true,
      },
    },
  },
});
```

```json
{
  "email": "sarah@prisma.io",
  "id": 1,
  "name": "Sarah",
  "extendedProfile": null,
  "role": "USER",
  "posts": [
    {
      "title": "Prisma Day 2020",
      "published": false
    },
    {
      "title": "My first post",
      "published": false
    },
    {
      "title": "All about databases",
      "published": true
    }
  ]
}
```

Sort by enum \[#sort-by-enum]

The following sorts all `User` records by `role` (an `enum`):

```ts
const sort = await prisma.user.findMany({
  orderBy: {
    role: "desc",
  },
  select: {
    email: true,
    role: true,
  },
});
```

```json
[
  {
    "email": "emma@prisma.io",

    "role": "USER"
  },
  {
    "email": "suma@prisma.io",
    "role": "ADMIN"
  },
  {
    "email": "kwame@prisma.io",
    "role": "ADMIN"
  },
  {
    "email": "pearl@prisma.io",
    "role": "ADMIN"
  }
]
```

Generated types for orderBy \[#generated-types-for-orderby]

The following examples demonstrate how to use TypeScript's `satisfies` operator with `orderBy`:

- `UserOrderByInput`
  ```ts
  const orderEmailsByDescending = { email: "desc" } satisfies Prisma.UserOrderByInput;
  ```

distinct \[#distinct]

Deduplicate a list of records from [`findMany`](#findmany) or [`findFirst`](#findfirst). See also: [Aggregation, grouping, and summarizing](/orm/prisma-client/queries/aggregation-grouping-summarizing#select-distinct)

Examples \[#examples-24]

Select distinct on a single field \[#select-distinct-on-a-single-field]

The following example returns all distinct `city` fields, and selects only the `city` and `country` fields:

```ts
const distinctCities = await prisma.user.findMany({
  select: {
    city: true,
    country: true,
  },
  distinct: ["city"],
});
```

```json
[
  { city: "Paris", country: "France" },
  { city: "Lyon", country: "France" },
];
```

Select distinct on multiple fields \[#select-distinct-on-multiple-fields]

The following example returns all distinct `city` *and* `country` field combinations, and selects only the `city` and `country` fields:

```ts
const distinctCitiesAndCountries = await prisma.user.findMany({
  select: {
    city: true,
    country: true,
  },
  distinct: ["city", "country"],
});
```

```json
[
  { city: "Paris", country: "France" },
  { city: "Paris", country: "Denmark" },
  { city: "Lyon", country: "France" },
];
```

Note that there is now a "Paris, Denmark" in addition to "Paris, France":

Select distinct in combination with a filter \[#select-distinct-in-combination-with-a-filter]

The following example returns all distinct `city` *and* `country` field combinations where the user's email contains `"prisma.io"`, and selects only the `city` and `country` fields:

```ts
const distinctCitiesAndCountries = await prisma.user.findMany({
  where: {
    email: {
      contains: "prisma.io",
    },
  },
  select: {
    city: true,
    country: true,
  },
  distinct: ["city", "country"],
});
```

```json
[
  { city: "Paris", country: "Denmark" },
  { city: "Lyon", country: "France" },
];
```

nativeDistinct \[#nativedistinct]

Enabling `nativeDistinct` in your Prisma schema pushes the `distinct` operation to the database layer
(where supported). This can significantly improve performance. However, note that:

- Some databases may not fully support DISTINCT on certain field combinations.
- Behavior can differ among providers.

To enable `nativeDistinct`:

```prisma
generator client {
  provider        = "prisma-client"
  output          = "./generated"
  previewFeatures = ["nativeDistinct"]
}
```

See [Preview Features](/orm/reference/preview-features/client-preview-features#preview-features-promoted-to-general-availability) for more details.

Nested queries \[#nested-queries]

create \[#create-1]

A nested `create` query adds a new related record or set of records to a parent record. See: [Working with relations](/orm/prisma-client/queries/relation-queries)

Remarks \[#remarks-15]

- `create` is available as a nested query when you `create()` (`prisma.user.create(...)`) a new parent record or `update()` (`prisma.user.update(...)`) an existing parent record.
- You can use a nested `create` *or* a nested [`createMany`](#createmany-1) to create multiple related records. If you require the [`skipDuplicates` query option](#nested-createmany-options) you should use `createMany`.

Examples \[#examples-25]

Create a new User record with a new Profile record \[#create-a-new-user-record-with-a-new-profile-record]

```ts highlight=5;normal
const user = await prisma.user.create({
  data: {
    email: 'alice@prisma.io',
    profile: {
      create: { bio: 'Hello World' },
    },
  },
});
```

Create a new Profile record with a new User record \[#create-a-new-profile-record-with-a-new-user-record]

```ts
const user = await prisma.profile.create({
  data: {
    bio: "Hello World",
    user: {
      create: { email: "alice@prisma.io" }, // [!code highlight]
    },
  },
});
```

Create a new User record with a new Post record \[#create-a-new-user-record-with-a-new-post-record]

```ts highlight=5;normal
const user = await prisma.user.create({
  data: {
    email: "alice@prisma.io",
    posts: {
      create: { title: "Hello World" },
    },
  },
});
```

Create a new User record with two new Post records \[#create-a-new-user-record-with-two-new-post-records]

Because it's a one-to-many relation, you can also create multiple `Post` records at once by passing an array to `create`:

```ts highlight=5-12;normal
const user = await prisma.user.create({
  data: {
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "This is my first post",
        },
        {
          title: "Here comes a second post",
        },
      ],
    },
  },
});
```

Note: You can also use a nested [`createMany`](#createmany-1) to achieve the same result.

Update an existing User record by creating a new Profile record \[#update-an-existing-user-record-by-creating-a-new-profile-record]

```ts highlight=5;normal;
const user = await prisma.user.update({
  where: { email: "alice@prisma.io" },
  data: {
    profile: {
      create: { bio: "Hello World" },
    },
  },
});
```

Update an existing User record by creating a new Post record \[#update-an-existing-user-record-by-creating-a-new-post-record]

```ts
const user = await prisma.user.update({
  where: { email: "alice@prisma.io" },
  data: {
    posts: {
      create: { title: "Hello World" }, // [!code highlight]
    },
  },
});
```

createMany \[#createmany-1]

A nested `createMany` query adds a new set of records to a parent record. See: [Working with relations](/orm/prisma-client/queries/relation-queries)

Remarks \[#remarks-16]

- `createMany` is available as a nested query when you `create()` (`prisma.user.create(...)`) a new parent record or `update()` (`prisma.user.update(...)`) an existing parent record.
  - Available in the context of a one-to-many relation — for example, you can `prisma.user.create(...)` a user and use a nested `createMany` to create multiple posts (posts have one user).
  - **Not** available in the context of a many-to-many relation — for example, you **cannot** `prisma.post.create(...)` a post and use a nested `createMany` to create categories (many posts have many categories).
- You cannot nest an additional `create` or `createMany`.
- Allows setting foreign keys directly — for example, setting the `categoryId` on a post.
- Nested `createMany` is supported by SQLite.
- You can use a nested `create` *or* a nested `createMany` to create multiple related records - [if you do not need the `skipDuplicates` query option, you should probably use `create`](/orm/prisma-client/queries/relation-queries#create-a-single-record-and-multiple-related-records).

Options \[#nested-createmany-options]

| Name              | Type                              | Required | Description                                                                                                                                                                                                                                             |
| ----------------- | --------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`            | `Enumerable<UserCreateManyInput>` | **Yes**  | Wraps all the model fields in a type so that they can be provided when creating new records. Fields that are marked as optional or have default values in the datamodel are optional.                                                                   |
| `skipDuplicates?` | `boolean`                         | No       | Do not insert records with unique fields or ID fields that already exist. Only supported by databases that support [`ON CONFLICT DO NOTHING`](https://www.postgresql.org/docs/9.5/sql-insert.html#SQL-ON-CONFLICT). This excludes MongoDB and SQLServer |

Examples \[#examples-26]

Update a User and multiple new related Post records \[#update-a-user-and-multiple-new-related-post-records]

```ts
const user = await prisma.user.update({
  where: {
    id: 9,
  },
  data: {
    name: "Elliott",
    posts: {
      createMany: {
        data: [{ title: "My first post" }, { title: "My second post" }],
      },
    },
  },
});
```

set \[#set]

`set` overwrites the value of a relation - for example, replacing a list of `Post` records with a different list. See: [Working with relations](/orm/prisma-client/queries/relation-queries)

Examples \[#examples-27]

Update an existing User record by disconnecting any previous Post records and connecting two other existing ones \[#update-an-existing-user-record-by-disconnecting-any-previous-post-records-and-connecting-two-other-existing-ones]

```ts
const user = await prisma.user.update({
  where: { email: "alice@prisma.io" },
  data: {
    posts: {
      set: [{ id: 32 }, { id: 42 }],
    },
  },
});
```

connect \[#connect]

A nested `connect` query connects a record to an existing related record by specifying an ID or unique identifier. See: [Working with relations](/orm/prisma-client/queries/relation-queries)

Remarks \[#remarks-17]

- `connect` is available as a nested query when you create a new parent record or update an existing parent record.

- If the related record does not exist, Prisma Client throws an exception:

  ```
  The required connected records were not found. Expected 1 records to be connected, found 0.
  ```

- When using `set` and `connect` together, the order in which they are applied significantly impacts the result. If `set` is used before `connect`, the connected records will only reflect the final state established by the `connect` operation, as `set` clears all existing connections before `connect` establishes new ones. Conversely, if `connect` is applied before `set`, the `set` operation will override the `connect` action by clearing all connected records and replacing them with its own specified state.

Examples \[#examples-28]

Create a new Profile record and connect it to an existing User record via unique field \[#create-a-new-profile-record-and-connect-it-to-an-existing-user-record-via-unique-field]

```ts
const user = await prisma.profile.create({
  data: {
    bio: "Hello World",
    user: {
      connect: { email: "alice@prisma.io" },
    },
  },
});
```

Create a new Profile record and connect it to an existing User record via an ID field \[#create-a-new-profile-record-and-connect-it-to-an-existing-user-record-via-an-id-field]

```ts
const user = await prisma.profile.create({
  data: {
    bio: "Hello World",
    user: {
      connect: { id: 42 }, // sets userId of Profile record
    },
  },
});
```

You can also set the foreign key directly:

```ts
const user = await prisma.profile.create({
  data: {
    bio: "Hello World",
    userId: 42,
  },
});
```

However, you can't use both the direct approach and the `connect` approach in the same query. See [this issue comment](https://github.com/prisma/prisma/issues/4322#issuecomment-737976117) for details.

Create a new Post record and connect it to an existing User record \[#create-a-new-post-record-and-connect-it-to-an-existing-user-record]

```ts
const user = await prisma.post.create({
  data: {
    title: "Hello World",
    author: {
      connect: { email: "alice@prisma.io" },
    },
  },
});
```

Update an existing User record by connecting it to an existing Profile record \[#update-an-existing-user-record-by-connecting-it-to-an-existing-profile-record]

```ts
const user = await prisma.user.update({
  where: { email: "alice@prisma.io" },
  data: {
    profile: {
      connect: { id: 24 },
    },
  },
});
```

Update an existing User record by connecting it to two existing Post records \[#update-an-existing-user-record-by-connecting-it-to-two-existing-post-records]

```ts
const user = await prisma.user.update({
  where: { email: "alice@prisma.io" },
  data: {
    posts: {
      connect: [{ id: 24 }, { id: 42 }],
    },
  },
});
```

connectOrCreate \[#connectorcreate]

`connectOrCreate` *either* connects a record to an existing related record by ID or unique identifier *or* creates a new related record if the record does not exist. See: [Working with relations](/orm/prisma-client/queries/relation-queries)

Remarks \[#remarks-18]

Multiple `connectOrCreate` queries that run as concurrent transactions can result in a **race condition**. Consider the following example, where two queries attempt to `connectOrCreate` a blog post tag named `computing` at the same time (tag names must be unique):

````
  Query A



  Query B




```ts
const createPost = await prisma.post.create({
  data: {
    title: "How to create a compiler",
    content: "...",
    author: {
      connect: {
        id: 9,
      },
    },
    tags: {
      connectOrCreate: {
        create: {
          name: "computing",
        },
        where: {
          name: "computing",
        },
      },
    },
  },
});
```



```ts
const createPost = await prisma.post.create({
  data: {
    title: "How to handle schema drift in production",
    content: "...",
    author: {
      connect: {
        id: 15,
      },
    },
    tags: {
      connectOrCreate: {
        create: {
          name: "computing",
        },
        where: {
          name: "computing",
        },
      },
    },
  },
});
```
````

If query A and query B overlap in the following way, query A results in an exception:

| Query A (Fail ❌)                                                 | Query B (Success ✅)                                              |
| :--------------------------------------------------------------- | :--------------------------------------------------------------- |
| Query hits server, starts transaction A                          | Query hits server, starts transaction B                          |
|                                                                  | Find record where `tagName` equals `computing`, record not found |
| Find record where `tagName` equals `computing`, record not found |                                                                  |
|                                                                  | Create record where `tagName` equals `computing` and connect     |
| Create record where `tagName` equals `computing`                 |                                                                  |
| Unique violation, record already created by transaction B        |                                                                  |

To work around this scenario, we recommend catching the unique violation exception (`PrismaClientKnownRequestError`, error `P2002`) and retrying failed queries.

Examples \[#examples-29]

Create a new Profile record, then connect it to an existing User record or create a new User \[#create-a-new-profile-record-then-connect-it-to-an-existing-user-record-or-create-a-new-user]

The following example:

1. Creates a `Profile`
2. Attempts to connect the profile to a `User` where the email address is `alice@prisma.io`
3. Creates a new user if a matching user does not exist

```ts
const user = await prisma.profile.create({
  data: {
    bio: 'The coolest Alice on the planet',
    user: {
      connectOrCreate: {
        where:  { email: 'alice@prisma.io' },
        create: { email: 'alice@prisma.io'}
    },
  },
})
```

Create a new Post record and connect it to an existing User record, or create a new User \[#create-a-new-post-record-and-connect-it-to-an-existing-user-record-or-create-a-new-user]

```ts
const user = await prisma.post.create({
  data: {
    title: "Hello World",
    author: {
      connectOrCreate: {
        where: { email: "alice@prisma.io" },
        create: { email: "alice@prisma.io" },
      },
    },
  },
});
```

Update an existing User record by connecting it to an existing Profile record, or creating a new Profile record \[#update-an-existing-user-record-by-connecting-it-to-an-existing-profile-record-or-creating-a-new-profile-record]

The following example:

1. Attempts to connect the user to a `Profile` with an `id` of `20`
2. Creates a new profile if a matching profile does not exist

```ts
const updateUser = await prisma.user.update({
  where: { email: "alice@prisma.io" },
  data: {
    profile: {
      connectOrCreate: {
        where: { id: 20 },
        create: {
          bio: "The coolest Alice in town",
        },
      },
    },
  },
});
```

Update an existing User record by connect it to two existing Post records, or creating two new Post records \[#update-an-existing-user-record-by-connect-it-to-two-existing-post-records-or-creating-two-new-post-records]

```ts
const user = await prisma.user.update({
  where: { email: "alice@prisma.io" },
  data: {
    posts: {
      connectOrCreate: [
        {
          where: { id: 32 },
          create: { title: "This is my first post" },
        },
        {
          where: { id: 19 },
          create: { title: "This is my second post" },
        },
      ],
    },
  },
});
```

disconnect \[#disconnect]

A nested `disconnect` query breaks the connection between a parent record and a related record, but does not delete either record. See: [Working with relations](/orm/prisma-client/queries/relation-queries)

Remarks \[#remarks-19]

- `disconnect` is only available if the relation is optional.
- If the relationship you are attempting to disconnect does not exist, the operation does nothing.

Examples \[#examples-30]

Update an existing User record by disconnecting the Profile record it's connected to \[#update-an-existing-user-record-by-disconnecting-the-profile-record-its-connected-to]

```ts
const user = await prisma.user.update({
  where: { email: "bob@prisma.io" },
  data: {
    profile: {
      disconnect: true,
    },
  },
});
```

Update an existing User record by disconnecting two Post records it's connected to \[#update-an-existing-user-record-by-disconnecting-two-post-records-its-connected-to]

```ts
const user = await prisma.user.update({
  where: { email: "alice@prisma.io" },
  data: {
    posts: {
      disconnect: [{ id: 44 }, { id: 46 }],
    },
  },
});
```

update \[#update-1]

A nested `update` query updates one or more related records where the parent record's ID is `n`. See: [Working with relations](/orm/prisma-client/queries/relation-queries#update-a-specific-related-record)

Remarks \[#remarks-20]

- Nested `update` queries are only available in the context of a top-level `update` query (for example, `prisma.user.update(...)`).

- If the parent record does not exist, Prisma Client throws an exception:

  ```
  AssertionError("Expected a valid parent ID to be present for nested update to-one case.")
  ```

- If the related record that you want to update does not exist, Prisma Client throws an exception:

  ```
  AssertionError("Expected a valid parent ID to be present for nested update to-one case.")
  ```

Examples \[#examples-31]

Update an existing User record by updating the Profile record it's connected to \[#update-an-existing-user-record-by-updating-the-profile-record-its-connected-to]

```ts
const user = await prisma.user.update({
  where: { email: "alice@prisma.io" },
  data: {
    profile: {
      update: { bio: "Hello World" },
    },
  },
});
```

Update an existing User record by updating two Post records it's connected to \[#update-an-existing-user-record-by-updating-two-post-records-its-connected-to]

```ts
const user = await prisma.user.update({
  where: { email: "alice@prisma.io" },
  data: {
    posts: {
      update: [
        {
          data: { published: true },
          where: { id: 32 },
        },
        {
          data: { published: true },
          where: { id: 23 },
        },
      ],
    },
  },
});
```

upsert \[#upsert-1]

```
This section covers the usage of nested upsert within `update()`. To learn about the [`upsert()`](#upsert) operation, reference the linked documentation.
```

A nested `upsert` query updates a related record if it exists, or creates a new related record.

Examples \[#examples-32]

Update an existing User record by updating the Profile record it's connected to or creating a new one (upsert) \[#update-an-existing-user-record-by-updating-the-profile-record-its-connected-to-or-creating-a-new-one-upsert]

```ts
const user = await prisma.user.update({
  where: { email: "alice@prisma.io" },
  data: {
    profile: {
      upsert: {
        create: { bio: "Hello World" },
        update: { bio: "Hello World" },
      },
    },
  },
});
```

Update an existing User record by updating two Post record it's connected to or creating new ones (upsert) \[#update-an-existing-user-record-by-updating-two-post-record-its-connected-to-or-creating-new-ones-upsert]

```ts
const user = await prisma.user.update({
  where: { email: "alice@prisma.io" },
  data: {
    posts: {
      upsert: [
        {
          create: { title: "This is my first post" },
          update: { title: "This is my first post" },
          where: { id: 32 },
        },
        {
          create: { title: "This is my second post" },
          update: { title: "This is my second post" },
          where: { id: 23 },
        },
      ],
    },
  },
});
```

delete \[#delete-1]

A nested `delete` query deletes a related record. The parent record is not deleted.

Remarks \[#remarks-21]

- `delete` is only available if the relation is optional.

Examples \[#examples-33]

Update an existing User record by deleting the Profile record it's connected to \[#update-an-existing-user-record-by-deleting-the-profile-record-its-connected-to]

```ts
const user = await prisma.user.update({
  where: { email: "alice@prisma.io" },
  data: {
    profile: {
      delete: true,
    },
  },
});
```

Update an existing User record by deleting two Post records it's connected to \[#update-an-existing-user-record-by-deleting-two-post-records-its-connected-to]

```ts
const user = await prisma.user.update({
  where: { email: "alice@prisma.io" },
  data: {
    posts: {
      delete: [{ id: 34 }, { id: 36 }],
    },
  },
});
```

updateMany \[#updatemany-1]

A nested `updateMany` updates a list of related records and supports filtering - for example, you can update a user's unpublished posts.

Examples \[#examples-34]

Update all unpublished posts belonging to a specific user \[#update-all-unpublished-posts-belonging-to-a-specific-user]

```ts
const result = await prisma.user.update({
  where: {
    id: 2,
  },
  data: {
    posts: {
      updateMany: {
        where: {
          published: false,
        },
        data: {
          likes: 0,
        },
      },
    },
  },
});
```

deleteMany \[#deletemany-1]

A nested `deleteMany` deletes related records and supports filtering. For example, you can delete a user's posts while updating other properties of that user.

Examples \[#examples-35]

Delete all posts belonging to a specific user as part of an update \[#delete-all-posts-belonging-to-a-specific-user-as-part-of-an-update]

```ts
const result = await prisma.user.update({
  where: {
    id: 2,
  },
  data: {
    name: "Updated name",
    posts: {
      deleteMany: {},
    },
  },
});
```

Filter conditions and operators \[#filter-conditions-and-operators]

equals \[#equals]

Value equals `n`.

Examples \[#examples-36]

**Return all users where `name` equals `"Eleanor"`**

```ts
const result = await prisma.user.findMany({
  where: {
    name: {
      equals: "Eleanor",
    },
  },
});
```

You can also exclude the `equals`:

```ts
const result = await prisma.user.findMany({
  where: {
    name: "Eleanor",
  },
});
```

**Return all products with a quantity lower than the "warn quantity" threshold**

This example compares fields of the same model.

```ts
const productsWithLowQuantity = await prisma.product.findMany({
  where: {
    quantity: {
      lte: prisma.product.fields.warnQuantity,
    },
  },
});
```

**Return all users that have blue and green as their favorite colors**

This example finds users that have set their `favoriteColors` field to `['blue', 'green']`.

Note that when using `equals`, order of elements matters. That is to say `['blue', 'green']` is **not** equal to `['green', 'blue']`

```ts
const favoriteColorFriends = await prisma.user.findMany({
  where: {
    favoriteColors: {
      equals: ["blue", "green"],
    },
  },
});
```

not \[#not]

Value does not equal `n`.

Examples \[#examples-37]

Return all users where name does not equal "Eleanor" \[#return-all-users-where-name-does-not-equal-eleanor]

```ts
const result = await prisma.user.findMany({
  where: {
    name: {
      not: "Eleanor",
    },
  },
});
```

```
`not` will return all items that do not match a given value. However, if the column is nullable, `NULL` values will not be returned. If you require null values to be returned, use an [`OR`](#or) operator to include `NULL` values.
```

Return all users where name does not equal "Eleanor" including users where name is NULL \[#return-all-users-where-name-does-not-equal-eleanor-including-users-where-name-is-null]

```ts
await prisma.user.findMany({
  where: {
    OR: [{ name: { not: "Eleanor" } }, { name: null }],
  },
});
```

in \[#in]

Value `n` exists in list.

```
`null` values are not returned. For example, if you combine `in` and `NOT` to return a user whose name is *not* in the list, users with `null` value names are not returned.
```

Examples \[#examples-38]

Get User records where the id can be found in the following list: \[22, 91, 14, 2, 5] \[#get-user-records-where-the-id-can-be-found-in-the-following-list-22-91-14-2-5]

```ts
const getUser = await prisma.user.findMany({
  where: {
    id: { in: [22, 91, 14, 2, 5] },
  },
});
```

Get User records where the name can be found in the following list: \['Saqui', 'Clementine', 'Bob'] \[#get-user-records-where-the-name-can-be-found-in-the-following-list-saqui-clementine-bob]

```ts
const getUser = await prisma.user.findMany({
  where: {
    name: { in: ["Saqui", "Clementine", "Bob"] },
  },
});
```

Get User records where name is not present in the list \[#get-user-records-where-name-is-not-present-in-the-list]

The following example combines `in` and [`NOT`](#not). You can also use [`notIn`](#notin).

```ts
const getUser = await prisma.user.findMany({
  where: {
    NOT: {
      name: { in: ["Saqui", "Clementine", "Bob"] },
    },
  },
});
```

Get a User record where at least one Post has at least one specified Category \[#get-a-user-record-where-at-least-one-post-has-at-least-one-specified-category]

```ts
const getUser = await prisma.user.findMany({
  where: {
    // Find users where..
    posts: {
      some: {
        // ..at least one (some) posts..
        categories: {
          some: {
            // .. have at least one category ..
            name: {
              in: ["Food", "Introductions"], // .. with a name that matches one of the following.
            },
          },
        },
      },
    },
  },
});
```

notIn \[#notin]

Value `n` does not exist in list.

Remarks \[#remarks-22]

- `null` values are not returned.

Examples \[#examples-39]

Get User records where the id can not be found in the following list: \[22, 91, 14, 2, 5] \[#get-user-records-where-the-id-can-not-be-found-in-the-following-list-22-91-14-2-5]

```ts
const getUser = await prisma.user.findMany({
  where: {
    id: { notIn: [22, 91, 14, 2, 5] },
  },
});
```

lt \[#lt]

Value `n` is less than `x`.

Examples \[#examples-40]

Get all Post records where likes is less than 9 \[#get-all-post-records-where-likes-is-less-than-9]

```ts
const getPosts = await prisma.post.findMany({
  where: {
    likes: {
      lt: 9,
    },
  },
});
```

lte \[#lte]

Value `n` is less than *or* equal to `x`.

Examples \[#examples-41]

Get all Post records where likes is less or equal to 9 \[#get-all-post-records-where-likes-is-less-or-equal-to-9]

```ts
const getPosts = await prisma.post.findMany({
  where: {
    likes: {
      lte: 9,
    },
  },
});
```

gt \[#gt]

Value `n` is greater than `x`.

Examples \[#examples-42]

Get all Post records where likes is greater than 9 \[#get-all-post-records-where-likes-is-greater-than-9]

```ts
const getPosts = await prisma.post.findMany({
  where: {
    likes: {
      gt: 9,
    },
  },
});
```

gte \[#gte]

Value `n` is greater than *or* equal to `x`.

Examples \[#examples-43]

Get all Post records where likes is greater than or equal to 9 \[#get-all-post-records-where-likes-is-greater-than-or-equal-to-9]

```ts
const getPosts = await prisma.post.findMany({
  where: {
    likes: {
      gte: 9,
    },
  },
});
```

Examples \[#examples-44]

Get all Post records where date\_created is greater than March 19th, 2020 \[#get-all-post-records-where-date\_created-is-greater-than-march-19th-2020]

```js
const result = await prisma.post.findMany({
  where: {
    date_created: {
      gte: new Date("2020-03-19T14:21:00+0200") /* Includes time offset for UTC */,
    },
  },
});
```

contains \[#contains]

Value `n` contains `x`.

Examples \[#examples-45]

Count all Post records where content contains databases \[#count-all-post-records-where-content-contains-databases]

```js
const result = await prisma.post.count({
  where: {
    content: {
      contains: "databases",
    },
  },
});
```

Count all Post records where content does not contain databases \[#count-all-post-records-where-content-does-not-contain-databases]

```js
const result = await prisma.post.count({
  where: {
    NOT: {
      content: {
        contains: "databases",
      },
    },
  },
});
```

search \[#search]

Use [Full-Text Search](/v6/orm/prisma-client/queries/full-text-search) to search within a `String` field.

```
For PostgreSQL, this feature is still in Preview. [Enable the `fullTextSearchPostgres` feature flag](/v6/orm/prisma-client/queries/full-text-search#enabling-full-text-search-for-postgresql) in order to use it.
```

Examples \[#examples-46]

Find all posts with a title that contains cat or dog. \[#find-all-posts-with-a-title-that-contains-cat-or-dog]

```js
const result = await prisma.post.findMany({
  where: {
    title: {
      search: "cat | dog",
    },
  },
});
```

Find all posts with a title that contains cat and dog. \[#find-all-posts-with-a-title-that-contains-cat-and-dog]

```js
const result = await prisma.post.findMany({
  where: {
    title: {
      search: "cat & dog",
    },
  },
});
```

Find all posts with a title that doesn't contain cat. \[#find-all-posts-with-a-title-that-doesnt-contain-cat]

```js
const result = await prisma.post.findMany({
  where: {
    title: {
      search: "!cat",
    },
  },
});
```

mode \[#mode]

Remarks \[#remarks-23]

- Supported by the PostgreSQL and MongoDB connectors only

Examples \[#examples-47]

Get all Post records where title contains prisma, in a case insensitive way \[#get-all-post-records-where-title-contains-prisma-in-a-case-insensitive-way]

```js
const result = await prisma.post.findMany({
  where: {
    title: {
      contains: "prisma",
      mode: "insensitive",
    },
  },
});
```

startsWith \[#startswith]

Examples \[#examples-48]

Get all Post records where title starts with Pr (such as Prisma) \[#get-all-post-records-where-title-starts-with-pr-such-as-prisma]

```js
const result = await prisma.post.findMany({
  where: {
    title: {
      startsWith: "Pr",
    },
  },
});
```

endsWith \[#endswith]

Get all User records where email ends with prisma.io \[#get-all-user-records-where-email-ends-with-prismaio]

```js
const result = await prisma.user.findMany({
  where: {
    email: {
      endsWith: "prisma.io",
    },
  },
});
```

AND \[#and]

All conditions must return `true`. Alternatively, pass a list of objects into the `where` clause - the [`AND` operator is not required](#get-all-post-records-where-the-content-field-contains-prisma-and-published-is-false-no-and).

Examples \[#examples-49]

Get all Post records where the content field contains Prisma and published is false \[#get-all-post-records-where-the-content-field-contains-prisma-and-published-is-false]

```js
const result = await prisma.post.findMany({
  where: {
    AND: [
      {
        content: {
          contains: "Prisma",
        },
      },
      {
        published: {
          equals: false,
        },
      },
    ],
  },
});
```

Get all Post records where the content field contains Prisma and published is false (no AND) \[#get-all-post-records-where-the-content-field-contains-prisma-and-published-is-false-no-and]

The following format returns the same results as the previous example **without** the `AND` operator:

```js
const result = await prisma.post.findMany({
  where: {
    content: {
      contains: "Prisma",
    },
    published: {
      equals: false,
    },
  },
});
```

Get all Post records where the title field contains Prisma or databases, and published is false \[#get-all-post-records-where-the-title-field-contains-prisma-or-databases-and-published-is-false]

The following example combines `OR` and `AND`:

```js
const result = await prisma.post.findMany({
  where: {
    OR: [
      {
        title: {
          contains: "Prisma",
        },
      },
      {
        title: {
          contains: "databases",
        },
      },
    ],
    AND: {
      published: false,
    },
  },
});
```

OR \[#or]

One or more conditions must return `true`.

Examples \[#examples-50]

Get all Post records where the title field contains Prisma or databases \[#get-all-post-records-where-the-title-field-contains-prisma-or-databases]

```js
const result = await prisma.post.findMany({
  where: {
    OR: [
      {
        title: {
          contains: "Prisma",
        },
      },
      {
        title: {
          contains: "databases",
        },
      },
    ],
  },
});
```

Get all Post records where the title field contains Prisma or databases, but not SQL \[#get-all-post-records-where-the-title-field-contains-prisma-or-databases-but-not-sql]

The following example combines `OR` and `NOT`:

```js
const result = await prisma.post.findMany({
  where: {
    OR: [
      {
        title: {
          contains: "Prisma",
        },
      },
      {
        title: {
          contains: "databases",
        },
      },
    ],
    NOT: {
      title: {
        contains: "SQL",
      },
    },
  },
});
```

Get all Post records where the title field contains Prisma or databases, and published is false \[#get-all-post-records-where-the-title-field-contains-prisma-or-databases-and-published-is-false-1]

The following example combines `OR` and `AND`:

```js
const result = await prisma.post.findMany({
  where: {
    OR: [
      {
        title: {
          contains: "Prisma",
        },
      },
      {
        title: {
          contains: "databases",
        },
      },
    ],
    AND: {
      published: false,
    },
  },
});
```

NOT \[#not-1]

All conditions must return `false`.

Examples \[#examples-51]

Get all Post records where the title does not contain SQL \[#get-all-post-records-where-the-title-does-not-contain-sql]

```js
const result = await prisma.post.findMany({
  where: {
    NOT: {
      title: {
        contains: "SQL",
      },
    },
  },
});
```

Get all Post records where the title field contains Prisma or databases, but not SQL, and the related User record' email address does not contain sarah \[#get-all-post-records-where-the-title-field-contains-prisma-or-databases-but-not-sql-and-the-related-user-record-email-address-does-not-contain-sarah]

```js
const result = await prisma.post.findMany({
  where: {
    OR: [
      {
        title: {
          contains: "Prisma",
        },
      },
      {
        title: {
          contains: "databases",
        },
      },
    ],
    NOT: {
      title: {
        contains: "SQL",
      },
    },
    user: {
      NOT: {
        email: {
          contains: "sarah",
        },
      },
    },
  },
  include: {
    user: true,
  },
});
```

Relation filters \[#relation-filters]

some \[#some]

Returns all records where **one or more** ("some") *related* records match filtering criteria.

Remarks \[#remarks-24]

- You can use `some` without parameters to return all records with at least one relation

Examples \[#examples-52]

Get all User records where some posts mention Prisma \[#get-all-user-records-where-some-posts-mention-prisma]

```ts
const result = await prisma.user.findMany({
  where: {
    post: {
      some: {
        content: {
          contains: "Prisma"
        }
      }
    }
  }
}
```

every \[#every]

Returns all records where **all** ("every") *related* records match filtering criteria.

Examples \[#examples-53]

Get all User records where all posts are published \[#get-all-user-records-where-all-posts-are-published]

```ts
const result = await prisma.user.findMany({
  where: {
    post: {
      every: {
        published: true
      },
    }
  }
}
```

none \[#none]

Returns all records where **zero** *related* records match filtering criteria.

Remarks \[#remarks-25]

- You can use `none` without parameters to [return all records with no relations](#get-all-user-records-with-zero-posts)

Examples \[#examples-54]

Get all User records with zero posts \[#get-all-user-records-with-zero-posts]

```ts
const result = await prisma.user.findMany({
  where: {
    post: {
        none: {} // User has no posts
    }
  }
}
```

Get all User records with zero published posts \[#get-all-user-records-with-zero-published-posts]

```ts
const result = await prisma.user.findMany({
  where: {
    post: {
        none: {
          published: true
        }
    }
  }
}
```

is \[#is]

Returns all records where related record matches filtering criteria (for example, user's name `is` Bob).

Examples \[#examples-55]

Get all Post records where user's name is "Bob" \[#get-all-post-records-where-users-name-is-bob]

```ts
const result = await prisma.post.findMany({
  where: {
    user: {
        is: {
          name: "Bob"
        },
    }
  }
}
```

isNot \[#isnot]

Returns all records where the related record does not match the filtering criteria (for example, user's name `isNot` Bob).

Examples \[#examples-56]

Get all Post records where user's name is NOT "Bob" \[#get-all-post-records-where-users-name-is-not-bob]

```ts
const result = await prisma.post.findMany({
  where: {
    user: {
        isNot: {
          name: "Bob"
        },
    }
  }
}
```

Scalar list methods \[#scalar-list-methods]

set \[#set-1]

Use `set` to overwrite the value of a scalar list field.

Remarks \[#remarks-26]

- `set` is optional - you can set the value directly:

  ```ts
  tags: ["computers", "books"];
  ```

Examples \[#examples-57]

Set the value of tags to a list of string values \[#set-the-value-of-tags-to-a-list-of-string-values]

```ts
const setTags = await prisma.post.update({
  where: {
    id: 9,
  },
  data: {
    tags: {
      set: ["computing", "books"],
    },
  },
});
```

Set tags to a list of values without using the set keyword \[#set-tags-to-a-list-of-values-without-using-the-set-keyword]

```ts
const setTags = await prisma.post.update({
  where: {
    id: 9,
  },
  data: {
    tags: ["computing", "books"],
  },
});
```

Set the value of tags to a single string value \[#set-the-value-of-tags-to-a-single-string-value]

```ts
const setTags = await prisma.post.update({
  where: {
    id: 9,
  },
  data: {
    tags: {
      set: "computing",
    },
  },
});
```

push \[#push]

Use `push` to add *one* value or *multiple* values to a scalar list field.

Remarks \[#remarks-27]

- Available for PostgreSQL and MongoDB only.
- You can push a list of values or only a single value.

Examples \[#examples-58]

Add a computing item to the tags list \[#add-a-computing-item-to-the-tags-list]

```ts
const addTag = await prisma.post.update({
  where: {
    id: 9,
  },
  data: {
    tags: {
      push: "computing",
    },
  },
});
```

```ts
const addTag = await prisma.post.update({
  where: {
    id: 9,
  },
  data: {
    tags: {
      push: ["computing", "genetics"],
    },
  },
});
```

unset \[#unset]

Use `unset` to unset the value of a scalar list (MongoDB only). Unlike `set: null`, `unset` removes the list entirely.

Examples \[#examples-59]

Unset the value of tags \[#unset-the-value-of-tags]

```ts
const setTags = await prisma.post.update({
  where: {
    id: 9,
  },
  data: {
    tags: {
      unset: true,
    },
  },
});
```

Scalar list filters \[#scalar-list-filters]

Scalar list filters allow you to filter by the contents of a list / array field.

```
Available for PostgreSQL, CockroachDB, and MongoDB.
```

Remarks \[#remarks-28]

- Scalar list / array filters [ignore `NULL` values](/orm/prisma-client/special-fields-and-types/working-with-scalar-lists-arrays#null-values-in-arrays) . Using `isEmpty` or `NOT` does not return records with `NULL` value lists / arrays, and `{ equals: null }` results in an error.

has \[#has]

The given value exists in the list.

Examples \[#examples-60]

The following query returns all `Post` records where the `tags` list includes `"databases"`:

```ts
const posts = await client.post.findMany({
  where: {
    tags: {
      has: "databases",
    },
  },
});
```

The following query returns all `Post` records where the `tags` list **does not** include `"databases"`:

```ts
const posts = await client.post.findMany({
  where: {
    NOT: {
      tags: {
        has: "databases",
      },
    },
  },
});
```

hasEvery \[#hasevery]

Every value exists in the list.

Examples \[#examples-61]

The following query returns all `Post` records where the `tags` list includes *at least* `"databases"` *and* `"typescript"`:

```ts
const posts = await prisma.post.findMany({
  where: {
    tags: {
      hasEvery: ["databases", "typescript"],
    },
  },
});
```

hasSome \[#hassome]

At least one value exists in the list.

Examples \[#examples-62]

The following query returns all `Post` records where the `tags` list includes `"databases"` *or* `"typescript"`:

```ts
const posts = await prisma.post.findMany({
  where: {
    tags: {
      hasSome: ["databases", "typescript"],
    },
  },
});
```

isEmpty \[#isempty]

The list is empty.

Examples \[#examples-63]

The following query returns all `Post` records that have no tags:

```ts
const posts = await prisma.post.findMany({
  where: {
    tags: {
      isEmpty: true,
    },
  },
});
```

isSet \[#isset]

Filter lists to include only results that have been set (MongoDB only) (either set to a value, or explicitly set to `null`). Setting this filter to `true` will exclude undefined results that are not set at all.

Examples \[#examples-64]

The following query returns all `Post` records where the `tags` have been set to either `null` or a value:

```ts
const posts = await prisma.post.findMany({
  where: {
    tags: {
      isSet: true,
    },
  },
});
```

equals \[#equals-1]

The list matches the given value exactly.

Examples \[#examples-65]

The following query returns all `Post` records where the `tags` list includes `"databases"` and `"typescript"` only:

```ts
const posts = await prisma.post.findMany({
  where: {
    tags: {
      equals: ["databases", "typescript"],
    },
  },
});
```

Composite type methods \[#composite-type-methods]

Composite type methods allow you to create, update and delete [composite types](/orm/prisma-client/special-fields-and-types/composite-types) (MongoDB only).

set \[#set-2]

Use `set` to overwrite the value of a composite type.

Remarks \[#remarks-29]

- The `set` keyword is optional - you can set the value directly:
  ```ts
  photos: [
    { height: 100, width: 200, url: "1.jpg" },
    { height: 100, width: 200, url: "2.jpg" },
  ];
  ```

Examples \[#examples-66]

Set the shippingAddress composite type within a new order \[#set-the-shippingaddress-composite-type-within-a-new-order]

```ts
const order = await prisma.order.create({
  data: {
    // Normal relation
    product: { connect: { id: "some-object-id" } },
    color: "Red",
    size: "Large",
    // Composite type
    shippingAddress: {
      set: {
        street: "1084 Candycane Lane",
        city: "Silverlake",
        zip: "84323",
      },
    },
  },
});
```

Set an optional composite type to null \[#set-an-optional-composite-type-to-null]

```ts
const order = await prisma.order.create({
  data: {
    // Embedded optional type, set to null
    billingAddress: {
      set: null,
    },
  },
});
```

unset \[#unset-1]

Use `unset` to unset the value of a composite type. Unlike `set: null`, this removes the field entirely from the MongoDB document.

Examples \[#examples-67]

Remove the billingAddress from an order \[#remove-the-billingaddress-from-an-order]

```ts
const order = await prisma.order.update({
  where: {
    id: "some-object-id",
  },
  data: {
    billingAddress: {
      // Unset the billing address
      // Removes "billingAddress" field from order
      unset: true,
    },
  },
});
```

update \[#update-2]

Use `update` to update fields within a required composite type.

Remarks \[#remarks-30]

The `update` method cannot be used on optional types. Instead, use [upsert](#upsert-2)

Examples \[#examples-68]

Update the zip field of a shippingAddress composite type \[#update-the-zip-field-of-a-shippingaddress-composite-type]

```ts
const order = await prisma.order.update({
  where: {
    id: "some-object-id",
  },
  data: {
    shippingAddress: {
      // Update just the zip field
      update: {
        zip: "41232",
      },
    },
  },
});
```

upsert \[#upsert-2]

Use `upsert` to update an existing optional composite type if it exists, and otherwise set the composite type.

Remarks \[#remarks-31]

The `upsert` method cannot be used on required types. Instead, use [update](#update-2)

Examples \[#examples-69]

Create a new billingAddress if it doesn't exist, and otherwise update it \[#create-a-new-billingaddress-if-it-doesnt-exist-and-otherwise-update-it]

```ts
const order = await prisma.order.update({
  where: {
    id: "some-object-id",
  },
  data: {
    billingAddress: {
      // Create the address if it doesn't exist,
      // otherwise update it
      upsert: {
        set: {
          street: "1084 Candycane Lane",
          city: "Silverlake",
          zip: "84323",
        },
        update: {
          zip: "84323",
        },
      },
    },
  },
});
```

push \[#push-1]

Use `push` to push values to the end of a list of composite types.

Examples \[#examples-70]

Add a new photo to the photos list \[#add-a-new-photo-to-the-photos-list]

```ts
const product = prisma.product.update({
  where: {
    id: 10,
  },
  data: {
    photos: {
      // Push a photo to the end of the photos list
      push: [{ height: 100, width: 200, url: "1.jpg" }],
    },
  },
});
```

Composite type filters \[#composite-type-filters]

Composite type filters allow you to filter the contents of [composite types](/orm/prisma-client/special-fields-and-types/composite-types) (MongoDB only).

equals \[#equals-2]

Use `equals` to filter results by matching a composite type or a list of composite types. Requires all required fields of the composite type to match.

Remarks \[#remarks-32]

When matching optional fields, you need to distinguish between undefined (missing) fields of the document, and fields that have been explicitly set to `null`:

- If you omit an optional field, it will match undefined fields, but not fields that have been set to `null`
- If you filter for `null` values of an optional field with `equals: { ... exampleField: null ... }`, then it will match only documents where the field has been set to `null`, and not undefined fields

The ordering of fields and lists matters when using `equals`:

- For fields, `{ "a": "1", "b": "2" }` and `{ "b": "2", "a": "1" }` are not considered equal
- For lists, `[ { "a": 1 }, { "a": 2 } ]` and `[ { "a": 2 }, { "a": 1 } ]` are not considered equal

Examples \[#examples-71]

Find orders that exactly match the given shippingAddress \[#find-orders-that-exactly-match-the-given-shippingaddress]

```ts
const orders = await prisma.order.findMany({
  where: {
    shippingAddress: {
      equals: {
        street: "555 Candy Cane Lane",
        city: "Wonderland",
        zip: "52337",
      },
    },
  },
});
```

Find products with photos that match all of a list of urls \[#find-products-with-photos-that-match-all-of-a-list-of-urls]

```ts
const product = prisma.product.findMany({
  where: {
    equals: {
      photos: [{ url: "1.jpg" }, { url: "2.jpg" }],
    },
  },
});
```

is \[#is-1]

Use `is` to filter results by matching specific fields within composite types.

Examples \[#examples-72]

Find orders with a shippingAddress that matches the given street name \[#find-orders-with-a-shippingaddress-that-matches-the-given-street-name]

```ts
const orders = await prisma.order.findMany({
  where: {
    shippingAddress: {
      is: {
        street: "555 Candy Cane Lane",
      },
    },
  },
});
```

isNot \[#isnot-1]

Use `isNot` to filter results for composite type fields that do not match.

Examples \[#examples-73]

Find orders with a shippingAddress that does not match the given zip code \[#find-orders-with-a-shippingaddress-that-does-not-match-the-given-zip-code]

```ts
const orders = await prisma.order.findMany({
  where: {
    shippingAddress: {
      isNot: {
        zip: "52337",
      },
    },
  },
});
```

isEmpty \[#isempty-1]

Use `isEmpty` to filter results for an empty list of composite types.

Examples \[#examples-74]

Find products with no photos \[#find-products-with-no-photos]

```ts
const product = prisma.product.findMany({
  where: {
    photos: {
      isEmpty: true,
    },
  },
});
```

every \[#every-1]

Use `every` to filter for lists of composite types where every item in the list matches the condition

Examples \[#examples-75]

Find the first product where every photo has a height of 200 \[#find-the-first-product-where-every-photo-has-a-height-of-200]

```ts
const product = await prisma.product.findFirst({
  where: {
    photos: {
      every: {
        height: 200,
      },
    },
  },
});
```

some \[#some-1]

Use `some` to filter for lists of composite types where one or more items in the list match the condition.

Examples \[#examples-76]

Find the first product where one or more photos have a url of 2.jpg \[#find-the-first-product-where-one-or-more-photos-have-a-url-of-2jpg]

```ts
const product = await prisma.product.findFirst({
  where: {
    photos: {
      some: {
        url: "2.jpg",
      },
    },
  },
});
```

none \[#none-1]

Use `none` to filter for lists of composite types where no items in the list match the condition.

Examples \[#examples-77]

Find the first product where no photos have a url of 2.jpg \[#find-the-first-product-where-no-photos-have-a-url-of-2jpg]

```ts
const product = await prisma.product.findFirst({
  where: {
    photos: {
      none: {
        url: "2.jpg",
      },
    },
  },
});
```

Atomic number operations \[#atomic-number-operations]

Atomic operations on update is available for number field types (`Float` and `Int`). This feature allows you to update a field based on its **current** value (such as *subtracting* or *dividing*) without risking a race condition.

```
Overview: Race conditions
```

A race conditions occurs when two or more operations must be done in sequence in order to complete a task. In the following example, two clients try to increase the same field (`postCount`) by one:

| Client   | Operation           | Value  |
| :------- | :------------------ | :----- |
| Client 1 | **Get** field value | `21`   |
| Client 2 | **Get** field value | `21`   |
| Client 2 | **Set** field value | `22`   |
| Client 1 | **Set** field value | `22` ✘ |

The value *should* be `23`, but the two clients did not read and write to the `postCount` field in sequence. Atomic operations on update combine read and write into a single operation, which prevents a race condition:

| Client   | Operation                   | Value         |
| :------- | :-------------------------- | :------------ |
| Client 1 | **Get and set** field value | `21` → `22`   |
| Client 2 | **Get and set** field value | `22` → `23` ✔ |

Operators \[#operators]

| Option      | Description                                                   |
| :---------- | :------------------------------------------------------------ |
| `increment` | Adds `n` to the current value.                                |
| `decrement` | Subtacts `n` from the current value.                          |
| `multiply`  | Multiplies the current value by `n`.                          |
| `divide`    | Divides the current value by `n`.                             |
| `set`       | Sets the current field value. Identical to `{ myField : n }`. |

Remarks \[#remarks-33]

- You can only perform **one** atomic update per field, per query.
- If a field is `null`, it will not be updated by `increment`, `decrement`, `multiply`, or `divide`.

Examples \[#examples-78]

Increment all view and likes fields of all Post records by 1 \[#increment-all-view-and-likes-fields-of-all-post-records-by-1]

```ts
const updatePosts = await prisma.post.updateMany({
  data: {
    views: {
      increment: 1,
    },
    likes: {
      increment: 1,
    },
  },
});
```

Set all views fields of all Post records to 0 \[#set-all-views-fields-of-all-post-records-to-0]

```ts
const updatePosts = await prisma.post.updateMany({
  data: {
    views: {
      set: 0,
    },
  },
});
```

Can also be written as:

```ts
const updatePosts = await prisma.post.updateMany({
  data: {
    views: 0,
  },
});
```

Json filters \[#json-filters]

For use cases and advanced examples, see: [Working with `Json` fields](/orm/prisma-client/special-fields-and-types/working-with-json-fields).

```
Supported by [PostgreSQL](/orm/core-concepts/supported-databases/postgresql) and [MySQL](/orm/core-concepts/supported-databases/mysql) with different syntaxes for the `path` option. PostgreSQL does not support filtering on object key values in arrays.
```

The examples in this section assumes that the value of the `pet` field is:

```json
{
  "favorites": {
    "catBreed": "Turkish van",
    "dogBreed": "Rottweiler",
    "sanctuaries": ["RSPCA", "Alley Cat Allies"],
    "treats": [
      { "name": "Dreamies", "manufacturer": "Mars Inc" },
      { "name": "Treatos", "manufacturer": "The Dog People" }
    ]
  },
  "fostered": {
    "cats": ["Bob", "Alice", "Svetlana the Magnificent", "Queenie"]
  },
  "owned": {
    "cats": ["Elliott"]
  }
}
```

Remarks \[#remarks-34]

- The implementation of `Json` filtering [differs between database connectors](/orm/prisma-client/special-fields-and-types/working-with-json-fields)
- Filtering is case sensitive in PostgreSQL and does not yet support `mode`

path \[#path]

`path` represents the location of a specific key. The following query returns all users where the nested `favorites` > `dogBreed` key equals `"Rottweiler"`.

````
  PostgreSQL



  MySQL




```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: ["favorites", "dogBreed"],
      equals: "Rottweiler",
    },
  },
});
```



```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: "$.favorites.dogBreed",
      equals: "Rottweiler",
    },
  },
});
```
````

The following query returns all users where the nested `owned` > `cats` array contains `"Elliott"`.

````
  PostgreSQL



  MySQL




```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: ["owned", "cats"],
      array_contains: ["Elliott"],
    },
  },
});
```



```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: "$.owned.cats",
      array_contains: "Elliott",
    },
  },
});
```





Filtering by the key values of objects inside an array (below) is only supported by the MySQL connector.
````

The following query returns all users where the nested `favorites` > `treats` array contains an object where the `name` value is `"Dreamies"`:

```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: "$.favorites.treats[*].name",
      array_contains: "Dreamies",
    },
  },
});
```

string\_contains \[#string\_contains]

The following query returns all users where the nested `favorites` > `catBreed` key value contains `"Van"`:

````
  PostgreSQL



  MySQL




```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: ["favorites", "catBreed"],
      string_contains: "Van",
    },
  },
});
```



```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: "$.favorites.catBreed",
      string_contains: "Van",
    },
  },
});
```
````

string\_starts\_with \[#string\_starts\_with]

The following query returns all users where the nested `favorites` > `catBreed` key value starts with `"Turkish"`:

````
  PostgreSQL



  MySQL




```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: ["favorites", "catBreed"],
      string_starts_with: "Turkish",
    },
  },
});
```



```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: "$.favorites.catBreed",
      string_starts_with: "Turkish",
    },
  },
});
```
````

string\_ends\_with \[#string\_ends\_with]

The following query returns all users where the nested `favorites` > `catBreed` key value ends with `"Van"`:

````
  PostgreSQL



  MySQL




```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: ["favorites", "catBreed"],
      string_ends_with: "Van",
    },
  },
});
```



```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: "$.favorites.catBreed",
      string_ends_with: "Van",
    },
  },
});
```
````

mode \[#mode-1]

Specify whether the string filtering should be case sensitive (default) or case insensitive.

The following query returns all users where the nested `favorites` > `catBreed` key value contains `"Van"` or `"van"`:

````
  PostgreSQL



  MySQL




```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: ["favorites", "catBreed"],
      string_contains: "Van",
      mode: "insensitive",
    },
  },
});
```



```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: "$.favorites.catBreed",
      string_contains: "Van",
      mode: "insensitive",
    },
  },
});
```
````

array\_contains \[#array\_contains]

The following query returns all users where the `sanctuaries` array contains the value `"RSPCA"`:

````
  PostgreSQL



  MySQL




```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: ["sanctuaries"],
      array_contains: ["RSPCA"],
    },
  },
});
```



```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: "$.sanctuaries",
      array_contains: "RSPCA",
    },
  },
});
```





In PostgreSQL, the value of `array_contains` must be an array and not a string, even if the array only contains a single value.
````

The following query returns all users where the `sanctuaries` array contains *all* the values in the given array:

````
  PostgreSQL



  MySQL




```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: ["sanctuaries"],
      array_contains: ["RSPCA", "Alley Cat Allies"],
    },
  },
});
```



```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: "$.sanctuaries",
      array_contains: ["RSPCA", "Alley Cat Allies"],
    },
  },
});
```
````

array\_starts\_with \[#array\_starts\_with]

The following query returns all users where the `sanctuaries` array starts with the value `"RSPCA"`:

````
  PostgreSQL



  MySQL




```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: ["sanctuaries"],
      array_starts_with: "RSPCA",
    },
  },
});
```



```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: "$.sanctuaries",
      array_starts_with: "RSPCA",
    },
  },
});
```
````

array\_ends\_with \[#array\_ends\_with]

The following query returns all users where the `sanctuaries` array ends with the value `"Alley Cat Allies"`:

````
  PostgreSQL



  MySQL




```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: ["sanctuaries"],
      array_ends_with: "Alley Cat Allies",
    },
  },
});
```



```ts
const getUsers = await prisma.user.findMany({
  where: {
    pets: {
      path: "$.sanctuaries",
      array_ends_with: "Alley Cat Allies",
    },
  },
});
```
````

Client methods \[#client-methods]

**Note:** Client-level methods are prefixed by `$`.

Remarks \[#remarks-35]

- `$on` and `$use` client methods do not exist on extended client instances which are extended using [`$extends`](#extends)

  In [extended clients](/orm/prisma-client/client-extensions), Client methods do not necessarily exist. If you are extending your client, make sure to check for existence before using Client methods like `$transaction` or `$connect`.

  In addition, if you are using `$on` or `$use`, you will need to use these client methods before extending your client as these methods do not exist on extended clients. For `$use` specifically we recommend transitioning [to use query extensions](/orm/prisma-client/client-extensions/query).

$disconnect() \[#disconnect-1]

The `$disconnect()` method closes the database connections that were established when `$connect` was called and stops the process that was running Prisma ORM's query engine. See [Connection management](/orm/prisma-client/setup-and-configuration/databases-connections/connection-management) for an overview of `$connect()` and `$disconnect()`.

Remarks \[#remarks-36]

- `$disconnect()` returns a `Promise`, so you should call it inside an `async` function with the `await` keyword.

$connect() \[#connect-1]

The `$connect()` method establishes a physical connection to the database via Prisma ORM's query engine. See [Connection management](/orm/prisma-client/setup-and-configuration/databases-connections/connection-management) for an overview of `$connect()` and `$disconnect()`.

Remarks \[#remarks-37]

- `$connect()` returns a `Promise`, so you should call it inside an `async` function with the `await` keyword.

$on() \[#on]

```
`$on` is not available in [extended clients](/orm/prisma-client/client-extensions). Please either migrate to client extensions or use the `$on` method prior to extending your client.
```

The `$on()` method allows you to subscribe to [logging events](#log) or the [exit hook](/orm/prisma-client/setup-and-configuration/databases-connections/connection-management#exit-hooks).

$queryRawTyped \[#queryrawtyped]

See: [Using Raw SQL (`$queryRawTyped`)](/orm/prisma-client/using-raw-sql/typedsql).

$queryRaw \[#queryraw]

See: [Using Raw SQL (`$queryRaw`)](/orm/prisma-client/using-raw-sql/raw-queries#queryraw).

$queryRawUnsafe() \[#queryrawunsafe]

See: [Using Raw SQL (`$queryRawUnsafe()`)](/orm/prisma-client/using-raw-sql/raw-queries#queryrawunsafe).

$executeRaw \[#executeraw]

See: [Using Raw SQL (`$executeRaw`)](/orm/prisma-client/using-raw-sql/raw-queries#executeraw).

$executeRawUnsafe() \[#executerawunsafe]

See: [Using Raw SQL (`$executeRawUnsafe()`)](/orm/prisma-client/using-raw-sql/raw-queries#executerawunsafe).

$runCommandRaw() \[#runcommandraw]

See: [Using Raw SQL (`$runCommandRaw()`)](/orm/prisma-client/using-raw-sql/raw-queries#runcommandraw).

$transaction() \[#transaction]

See: [Transactions](/orm/prisma-client/queries/transactions).

$extends \[#extends]

With `$extends`, you can create and use Prisma Client extensions to add functionality to Prisma Client in the following ways:

- `model`: add custom methods to your models
- `client`: add custom methods to your client
- `query`: create custom Prisma Client queries
- `result`: add custom fields to your query results

Learn more: [Prisma Client extensions](/orm/prisma-client/client-extensions).

Utility types \[#utility-types]

Utility types are helper functions and types that live on the `Prisma` namespace. They are useful for keeping your application type safe.

Type-checking with satisfies \[#type-checking-with-satisfies]

You can use TypeScript's `satisfies` operator to create re-usable query parameters based on your schema models while ensuring that the objects you create are type-compatible with the generated Prisma Client types. See also: [Type safety with Prisma Client](/orm/prisma-client/type-safety).

Use the generated Prisma Client types with `satisfies` to get type checking and inference:

```ts
const args = { ... } satisfies Prisma.GeneratedType;
```

Example \[#example-3]

The following example shows how you can create type-checked input for the `create` operation that you can reuse within your app:

```ts
import { Prisma } from "../prisma/generated/client";

const createUserAndPostInput = (
  name: string,
  email: string,
  postTitle: string,
) =>
  ({
    name,
    email,
    posts: {
      create: {
        title: postTitle,
      },
    },
  }) satisfies Prisma.UserCreateInput;
```

Compare columns in the same table \[#compare-columns-in-the-same-table]

You can compare columns in the same table directly, for non-unique filters.

```
In the following situations, you must [use raw queries to compare columns in the same table](/orm/more/troubleshooting/raw-sql-comparisons):

* If you want to use a unique filter, such as [`findUnique`](#findunique) or [`findUniqueOrThrow`](#finduniqueorthrow)
* If you want to compare a field with a [unique constraint](/orm/prisma-schema/data-model/models#defining-a-unique-field)
* If you want to use one of the following operators to compare a [JSON field](/orm/prisma-client/special-fields-and-types/working-with-json-fields) in MySQL or MariaDB with another field: [`gt`](#gt), [`gte`](#gte), [`lt`](#lt), or [`lte`](#lte). Note that you can use these operators to compare the JSON field with a scalar value. This limitation applies only if you try to compare a JSON field with another field.
```

To compare columns in the same table, use the `<model>.fields` property. In the following example, the query returns all records where the value in the `prisma.product.quantity` field is less than or equal to the value in the `prisma.product.warnQuantity` field.

```ts
prisma.product.findMany({
  where: { quantity: { lte: prisma.product.fields.warnQuantity } },
});
```

```
`fields` is a special property of every model. It contains the list of fields for that model.
```

Considerations \[#considerations]

Fields must be of the same type \[#fields-must-be-of-the-same-type]

You can only make comparisons on fields of the same type. For example, the following causes an error:

```ts
await prisma.order.findMany({
  where: {
    id: { equals: prisma.order.fields.due },
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // Type error: id is a string, while amountDue is an integer
  },
});
```

Fields must be in the same model \[#fields-must-be-in-the-same-model]

You can only make comparisons with the `fields` property on fields in the same model. The following example does not work:

```ts
await prisma.order.findMany({
  where: {
    id: { equals: prisma.user.fields.name },
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // Type error: name is a field on the User model, not Order
  },
});
```

However, you can compare fields in separate models with [standard queries](#model-queries).

In groupBy model queries, put your referenced fields in the by argument \[#in-groupby-model-queries-put-your-referenced-fields-in-the-by-argument]

If you use the [groupBy](#groupby) model query with the `having` option, then you must put your referenced fields in the `by` argument.

The following example works:

```ts
prisma.user.groupBy({
  by: ["id", "name"],
  having: { id: { equals: prisma.user.fields.name } },
});
```

The following example does not work, because `name` is not in the `by` argument:

```ts
prisma.user.groupBy({
  by: ["id"],
  having: { id: { equals: prisma.user.fields.name } },
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // name is not in the 'by' argument
});
```

Search for fields in scalar lists \[#search-for-fields-in-scalar-lists]

If your data source supports scalar lists (for example in PostgreSQL), then you can search for all records where a specific field is in a list of fields. To do so, reference the scalar list with the [`in`](#in) and [`notIn`](#notin) filters. For example:

```ts
await prisma.user.findMany({
  where: {
    // find all users where 'name' is in a list of tags
    name: { in: prisma.user.fields.tags },
  },
});
```

Filter on non-unique fields with UserWhereUniqueInput \[#filter-on-non-unique-fields-with-userwhereuniqueinput]

The generated type `UserWhereUniqueInput` on [`where`](#where) exposes all fields on the model, not just unique fields.

You must specify at least one unique field in your `where` statement [outside of boolean operators](#boolean-operators-with-userwhereuniqueinput), and you can specify any number of additional unique and non-unique fields. You can use this to add filters to any operation that returns a single record. For example, you can use this feature for the following:

- [Optimistic concurrency control on updates](#optimistic-concurrency-control-on-updates)
- [Permission checks](#permission-checks)
- [Soft deletes](#soft-deletes)
- Filter on optional [one-to-one nested reads](/orm/prisma-client/queries/relation-queries#nested-reads)

Optimistic concurrency control on updates \[#optimistic-concurrency-control-on-updates]

You can filter on non-unique fields to perform [optimistic concurrency control](/orm/prisma-client/queries/transactions#optimistic-concurrency-control) on `update` operations.

To perform optimistic concurrency control, use a `version` field to check whether the data in a record or related record has changed while your code executes.

In the following example, `updateOne` and `updateTwo` first read the same record and then attempt to update it. The database only executes these updates if the value in `version` is the same as the value when it did the initial read. When the database executes the first of these updates (which might be `updateOne` or `updateTwo`, depending on timing), it increments the value in `version`. This means that the database does not execute the second update because the value in `version` has changed.

```prisma
model User {
  id      Int    @id @default(autoincrement())
  email   String @unique
  city    String
  version Int
}
```

```ts
function updateOne() {
  const user = await prisma.user.findUnique({ id: 1 });

  await prisma.user.update({
    where: { id: user.id, version: user.version },
    data: { city: "Berlin", version: { increment: 1 } },
  });
}

function updateTwo() {
  const user = await prisma.user.findUnique({ id: 1 });

  await prisma.user.update({
    where: { id: user.id, version: user.version },
    data: { city: "New York", version: { increment: 1 } },
  });
}

function main() {
  await Promise.allSettled([updateOne(), updateTwo()]);
}
```

Permission checks \[#permission-checks]

You can filter on non-unique fields to check permissions during an update.

In the following example, a user wants to update a post title. The `where` statement checks the value in `authorId` to confirm that the user is the author of the post. The application only updates the post title if the user is the post author.

```ts
await prisma.post.update({
  where: { id: 1, authorId: 1 },
  data: { title: "Updated post title" },
});
```

Soft deletes \[#soft-deletes]

You can filter on non-unique fields to handle soft deletes.

In the following example, we do not want to return a post if it is soft-deleted. The operation only returns the post if the value in `isDeleted` is `false`.

```ts
prisma.Post.findUnique({ where: { id: postId, isDeleted: false } });
```

UserWhereUniqueInput considerations \[#userwhereuniqueinput-considerations]

Boolean operators with UserWhereUniqueInput \[#boolean-operators-with-userwhereuniqueinput]

With `UserWhereUniqueInput`, you must specify at least one unique field outside of the boolean operators `AND`, `OR`, `NOT`. You can still use these boolean operators in conjunction with any other unique fields or non-unique fields in your filter.

In the following example, we test `id`, a unique field, in conjunction with `email`. This is valid.

```ts
await prisma.user.update({
  where: { id: 1, OR: [{ email: "bob@prisma.io" }, { email: "alice@prisma.io" }] },
        // ^^^ Valid: the expression specifies a unique field (`id`) outside of any boolean operators
  data: { ... }
})

// SQL equivalent:
// WHERE id = 1 AND (email = "bob@prisma.io" OR email = "alice@prisma.io")
```

The following example is not valid, because there is no unique field outside of any boolean operators:

```ts
await prisma.user.update({
  where: { OR: [{ email: "bob@prisma.io" }, { email: "alice@prisma.io" }] },
        // ^^^ Invalid: the expressions does not contain a unique field outside of boolean operators
  data: { ... }
})
```

One-to-one relations \[#one-to-one-relations]

You can filter on non-unique fields in the following operations on [one-to-one relations](/orm/prisma-schema/data-model/relations/one-to-one-relations):

- Nested update
- Nested upsert
- Nested disconnect
- Nested delete

Prisma Client automatically uses a unique filter to select the appropriate related record. As a result, you do not need to specify a unique filter in your `where` statement with a `WhereUniqueInput` [generated type](#generated-types-for-where). Instead, the `where` statement has a `WhereInput` generated type. You can use this to filter without the restrictions of `WhereUniqueInput`.

Nested update example \[#nested-update-example]

```ts
await prisma.user.update({
  where: { id: 1 },
  data: {
    to_one: {
      update: { where: { /* WhereInput */ }, data: { field: "updated" } }
    }
  }
})
```

Nested upsert example \[#nested-upsert-example]

```ts
await prisma.user.update({
  where: { id: 1 },
  data: {
    to_one: {
      upsert: {
        where: { /* WhereInput */ },
        create: { /* CreateInput */ },
        update: { /* UpdateInput */ },
      }
    }
  }
})
```

Nested disconnect example \[#nested-disconnect-example]

```ts
await prisma.user.update({
  where: { id: 1 },
  data: {
    to_one: {
      disconnect: { /* WhereInput */ }
    }
  }
})
```

Nested delete example \[#nested-delete-example]

```ts
await prisma.user.update({
  where: { id: 1 },
  data: {
    to_one: {
      delete: { /* WhereInput */ }
    }
  }
})
```

PrismaPromise behavior \[#prismapromise-behavior]

All Prisma Client queries return an instance of `PrismaPromise`. This is a ["thenable"](https://masteringjs.io/tutorials/fundamentals/thenable), meaning a `PrismaPromise` only executes when you call `await` or `.then()` or `.catch()`. This behavior is different from a regular JavaScript [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), which starts executing immediately.

For example:

```ts
const findPostOperation = prisma.post.findMany({}); // Query not yet executed

findPostOperation.then(); // Prisma Client now executes the query
// or
await findPostOperation; // Prisma Client now executes the query
```

When using the [`$transaction` API](/orm/prisma-client/queries/transactions#the-transaction-api), this behavior makes it possible for Prisma Client to pass all the queries on to the query engine as a single transaction.
