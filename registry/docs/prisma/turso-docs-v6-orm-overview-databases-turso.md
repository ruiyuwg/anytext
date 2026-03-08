# Turso (/docs/v6/orm/overview/databases/turso)

This guide discusses the concepts behind using Prisma ORM and Turso, explains the commonalities and differences between Turso and other database providers, and leads you through the process for configuring your application to integrate with Turso.

<CalloutContainer type="info">
  <CalloutTitle>
    Preview feature
  </CalloutTitle>

  <CalloutDescription>
    There's a Turso preview feature that integrates with Prisma CLI workflows. See the [GitHub discussion](https://github.com/prisma/prisma/discussions/21345) and share feedback there.
  </CalloutDescription>
</CalloutContainer>

What is Turso? \[#what-is-turso]

[Turso](https://turso.tech/) is an edge-hosted, distributed database that's based on [libSQL](https://turso.tech/libsql), an open-source and open-contribution fork of [SQLite](https://sqlite.org/), enabling you to bring data closer to your application and minimize query latency. Turso can also be hosted on a remote server.

Commonalities with other database providers \[#commonalities-with-other-database-providers]

libSQL is 100% compatible with SQLite. libSQL extends SQLite and adds the following features and capabilities:

- Support for replication
- Support for automated backups
- Ability to embed Turso as part of other programs such as the Linux kernel
- Supports user-defined functions
- Support for asynchronous I/O

> To learn more about the differences between libSQL and how it is different from SQLite, see [libSQL Manifesto](https://turso.tech/libsql-manifesto).

Many aspects of using Prisma ORM with Turso are just like using Prisma ORM with any other relational database. You can still:

- model your database with the [Prisma Schema Language](/v6/orm/prisma-schema/overview)
- use Prisma ORM's existing [`sqlite` database connector](/v6/orm/overview/databases/sqlite) in your schema
- use [Prisma Client](/v6/orm/prisma-client/setup-and-configuration/introduction) in your application to talk to the database server at Turso

Differences to consider \[#differences-to-consider]

There are a number of differences between Turso and SQLite to consider. You should be aware of the following when deciding to use Turso and Prisma ORM:

- **Remote and embedded SQLite databases**. libSQL uses HTTP to connect to the remote SQLite database. libSQL also supports remote database replicas and embedded replicas. Embedded replicas enable you to replicate your primary database inside your application.
- **Making schema changes**. Since libSQL uses HTTP to connect to the remote database, this makes it incompatible with Prisma Migrate. However, you can use [`prisma migrate diff`](/v6/orm/reference/prisma-cli-reference#migrate-diff) to create a schema migration and then apply the changes to your database using [Turso's CLI](https://docs.turso.tech/reference/turso-cli).

How to connect and query a Turso database \[#how-to-connect-and-query-a-turso-database]

The subsequent section covers how you can create a Turso database, retrieve your database credentials and connect to your database.

How to provision a database and retrieve database credentials \[#how-to-provision-a-database-and-retrieve-database-credentials]

<CalloutContainer type="info">
  <CalloutDescription>
    Ensure that you have the [Turso CLI](https://docs.turso.tech/reference/turso-cli) installed to manage your databases.
  </CalloutDescription>
</CalloutContainer>

If you don't have an existing database, you can provision a database by running the following command:

```bash
turso db create turso-prisma-db
```

The above command will create a database in the closest region to your location.

Run the following command to retrieve your database's connection string:

```bash
turso db show turso-prisma-db
```

Next, create an authentication token that will allow you to connect to the database:

```bash
turso db tokens create turso-prisma-db
```

Update your `.env` file with the authentication token and connection string:

```bash title=".env"
TURSO_AUTH_TOKEN="eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9..."
TURSO_DATABASE_URL="libsql://turso-prisma-db-user.turso.io"
```

How to connect to a Turso database \[#how-to-connect-to-a-turso-database]

To get started, install the Prisma ORM driver adapter for libSQL packages:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install @prisma/adapter-libsql
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/adapter-libsql
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/adapter-libsql
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/adapter-libsql
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Update your Prisma Client instance:

```ts
import { PrismaClient } from "../prisma/generated/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSQL({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
});
const prisma = new PrismaClient({ adapter });
```

You can use Prisma Client as you normally would with full type-safety in your project.

Manage schema changes with Turso \[#manage-schema-changes-with-turso]

Prisma CLI commands such as `prisma migrate dev` or `prisma db push` require a local SQLite connection. To roll out schema changes to Turso, use this workflow:

1. **Configure Prisma CLI to target a local SQLite file.**\
   Update `.env` and `prisma.config.ts` so Prisma CLI commands write to the local file instead of your remote Turso database:

```bash title=".env" showLineNumbers
LOCAL_DATABASE_URL="file:./dev.db"
```

```ts title="prisma.config.ts" showLineNumbers
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("LOCAL_DATABASE_URL"),
  },
});
```

2. **Generate migrations locally.**\
   Run `prisma migrate dev --name <migration-name>` to update the local SQLite database and produce SQL files in `prisma/migrations`.

3. **Apply the generated SQL using the Turso CLI.**\
   Use the [`turso db shell` command](https://docs.turso.tech/cli/introduction) to run the SQL against your remote database (replace `test` with your database name):

```bash showLineNumbers
turso db shell test < ./prisma/migrations/20251118131940_init/migration.sql
```

Replace the database name (`test`) and migration folder (`20251118131940_init`) with the values produced by `prisma migrate dev`.

Embedded Turso database replicas \[#embedded-turso-database-replicas]

Turso supports [embedded replicas](https://turso.tech/blog/introducing-embedded-replicas-deploy-turso-anywhere-2085aa0dc242). Turso's embedded replicas enable you to have a copy of your primary, remote database *inside* your application. Embedded replicas behave similarly to a local SQLite database. Database queries are faster because your database is inside your application.

How embedded database replicas work \[#how-embedded-database-replicas-work]

When your app initially establishes a connection to your database, the primary database will fulfill the query:

<img alt="Embedded Replica: First remote read" src="/img/v6/orm/overview/databases/images/embedded-replica-remote-read.png" width="1280" height="600" />

Turso will (1) create an embedded replica inside your application and (2) copy data from your primary database to the replica so it is locally available:

<img alt="Embedded Replica: Remote DB Copy" src="/img/v6/orm/overview/databases/images/embedded-replica-create-replica.png" width="1280" height="600" />

The embedded replica will fulfill subsequent read queries. The libSQL client provides a [`sync()`](https://docs.turso.tech/sdk/ts/reference#manual-sync) method which you can invoke to ensure the embedded replica's data remains fresh.

<img alt="Embedded Replica: Local DB reads" src="/img/v6/orm/overview/databases/images/embedded-replica-read.png" width="1280" height="600" />

With embedded replicas, this setup guarantees a responsive application, because the data will be readily available locally and faster to access.

Like a read replica setup you may be familiar with, write operations are forwarded to the primary remote database and executed before being propagated to all embedded replicas.

<img alt="Embedded Replica: Write operation propagation" src="/img/v6/orm/overview/databases/images/embedded-replica-write-propagation.png" width="1280" height="600" />

1. Write operations propagation are forwarded to the database.
2. Database responds to the server with the updates from 1.
3. Write operations are propagated to the database replica.

Your application's data needs will determine how often you should synchronize data between your remote database and embedded database replica. For example, you can use either middleware functions (e.g. Express and Fastify) or a cron job to synchronize the data.

How to synchronize data between your remote database and embedded replica \[#how-to-synchronize-data-between-your-remote-database-and-embedded-replica]

To get started using embedded replicas with Prisma ORM, add the `sync()` method from libSQL in your application. The example below shows how you can synchronize data using Express middleware.

```ts highlight=5-8;add;
import express from "express";
const app = express();

// ... the rest of your application code
app.use(async (req, res, next) => {
  // [!code ++]
  await libsql.sync(); // [!code ++]
  next(); // [!code ++]
}); // [!code ++]

app.listen(3000, () => console.log(`Server ready at http://localhost:3000`));
```

It could be also implemented as a [Prisma Client extension](/v6/orm/prisma-client/client-extensions). The below example shows auto-syncing after create, update or delete operation is performed.

```ts highlight=5-8
const prisma = new PrismaClient().$extends({
  query: {
    $allModels: {
      async $allOperations({ operation, model, args, query }) {
        const result = await query(args);

        // Synchronize the embedded replica after any write operation
        if (["create", "update", "delete"].includes(operation)) {
          await libsql.sync();
        }

        return result;
      },
    },
  },
});
```
