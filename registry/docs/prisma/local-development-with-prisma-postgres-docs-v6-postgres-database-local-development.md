# Local development with Prisma Postgres (/docs/v6/postgres/database/local-development)

[Prisma Postgres](/v6/postgres) is a production-grade, cloud-native database and is ideal for staging and production environments. For rapid iteration and isolated testing, you can run a *local* Prisma Postgres instance (powered by [PGlite](https://pglite.dev)) via the `prisma dev` command. This page explains how to install and launch a local Prisma Postgres database.

Local Prisma Postgres is in [Preview](/v6/orm/more/releases#preview) and is being actively developed.

Setting up local development for Prisma Postgres \[#setting-up-local-development-for-prisma-postgres]

Follow these steps to set up local Prisma Postgres for development.

Node.js v20 or later is required for local Prisma Postgres

1. Launching local Prisma Postgres \[#1-launching-local-prisma-postgres]

Navigate into your project and start the local Prisma Postgres server using the following command:

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
    npx prisma dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma dev
    ```
  </CodeBlockTab>
</CodeBlockTabs>

This starts a local Prisma Postgres server that you can connect to using Prisma ORM or another tool. The output of the command looks like this:

```text
$ npx prisma dev
✔  Great Success! 😉👍

   Your  prisma dev  server default is ready and listening on ports 63567-63569.

╭──────────────────────────────╮
│[q]uit  [h]ttp url  [t]cp urls│
╰──────────────────────────────╯
```

Now hit:

- <kbd>q</kbd> to quit
- <kbd>h</kbd> to view the connection URL enabling connections via **Prisma ORM**
- <kbd>t</kbd> to view the connection URL enabling connections via **any tool**

If you want to connect via Prisma ORM, hit <kbd>h</kbd> on your keyboard, copy the `DATABASE_URL` and store it in your `.env` file. This will be used to connect to the local Prisma Postgres server:

```bash title=".env"
DATABASE_URL="prisma+postgres://localhost:51213/?api_key=__API_KEY__"
```

Keep the local Prisma Postgres server running in the background while you work on your application.

2. Applying migrations and seeding data \[#2-applying-migrations-and-seeding-data]

Then in a separate terminal tab, run the `prisma migrate dev` command to create the database and run the migrations:

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
    npx prisma migrate dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma migrate dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma migrate dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma migrate dev
    ```
  </CodeBlockTab>
</CodeBlockTabs>

<CalloutContainer type="info">
  <CalloutDescription>
    Make sure the local Prisma Postgres server is running before running the `prisma migrate dev` command.

```
If you must use a different port, append [`--port <number>`](/v6/orm/reference/prisma-cli-reference#dev) (for example, `npx prisma migrate dev --port 5422`) and update your `DATABASE_URL` (or other connection settings) to match.
```

  </CalloutDescription>
</CalloutContainer>

This will create the database and run the migrations.

If you have a seeder script to seed the database, you should also run it in this step.

3. Running your application locally \[#3-running-your-application-locally]

Start your application's development server. You can now perform queries against the local Prisma Postgres instance using Prisma ORM.

To transition to production, you only need to update the database URL in the `.env` file with a Prisma Postgres connection url without additional application logic changes.

Using different local Prisma Postgres instances \[#using-different-local-prisma-postgres-instances]

You can target a specific, local Prisma Postgres instance via the `--name` (`-n`) option of the `prisma dev` command, for example:

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
    npx prisma dev --name="mydb1"
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma dev --name="mydb1"
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma dev --name="mydb1"
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma dev --name="mydb1"
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Whenever you pass the `--name="mydb1"` to `prisma dev`, the command will return the same connection string pointing to a local instance called `mydb1`. This creates a named instance that you can later manage using the instance management commands.

Starting existing Prisma Postgres instances in the background \[#starting-existing-prisma-postgres-instances-in-the-background]

You can start existing Prisma Postgres instances in the background using:

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
    npx prisma dev start <glob>
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma dev start <glob>
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma dev start <glob>
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma dev start <glob>
    ```
  </CodeBlockTab>
</CodeBlockTabs>

<CalloutContainer type="info">
  <CalloutDescription>
    The `dev start` command only works with instances that already exist.
  </CalloutDescription>
</CalloutContainer>

`<glob>` is a placeholder for a glob pattern to specify which local Prisma Postgres instances should be started, for example:

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
    npx prisma dev start mydb # starts a DB called `mydb` in the background (only if it already exists)
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma dev start mydb # starts a DB called `mydb` in the background (only if it already exists)
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma dev start mydb # starts a DB called `mydb` in the background (only if it already exists)
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma dev start mydb # starts a DB called `mydb` in the background (only if it already exists)
    ```
  </CodeBlockTab>
</CodeBlockTabs>

To start all databases that begin with `mydb` (e.g. `mydb-dev` and `mydb-prod`), you can use a glob:

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
    npx prisma dev start mydb* # starts all existing DBs starting with `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma dev start mydb* # starts all existing DBs starting with `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma dev start mydb* # starts all existing DBs starting with `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma dev start mydb* # starts all existing DBs starting with `mydb`
    ```
  </CodeBlockTab>
</CodeBlockTabs>

This command enables you to manage Prisma Postgres instances outside of the VS Code extension, allowing for background instance management in your development workflow.

Listing Prisma Postgres instances \[#listing-prisma-postgres-instances]

You can view all your local Prisma Postgres instances using:

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
    npx prisma dev ls
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma dev ls
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma dev ls
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma dev ls
    ```
  </CodeBlockTab>
</CodeBlockTabs>

This command lists all available instances on your system, showing their current status and configuration.

Stopping Prisma Postgres instances \[#stopping-prisma-postgres-instances]

You can stop a running Prisma Postgres instance with this command:

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
    npx prisma dev stop <glob>
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma dev stop <glob>
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma dev stop <glob>
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma dev stop <glob>
    ```
  </CodeBlockTab>
</CodeBlockTabs>

`<glob>` is a placeholder for a glob pattern to specify which local Prisma Postgres instances should be stopped, for example:

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
    npx prisma dev stop mydb # stops a DB called `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma dev stop mydb # stops a DB called `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma dev stop mydb # stops a DB called `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma dev stop mydb # stops a DB called `mydb`
    ```
  </CodeBlockTab>
</CodeBlockTabs>

To stop all databases that begin with `mydb` (e.g. `mydb-dev` and `mydb-prod`), you can use a glob:

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
    npx prisma dev stop mydb* # stops all DBs starting with `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma dev stop mydb* # stops all DBs starting with `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma dev stop mydb* # stops all DBs starting with `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma dev stop mydb* # stops all DBs starting with `mydb`
    ```
  </CodeBlockTab>
</CodeBlockTabs>

<CalloutContainer type="info">
  <CalloutDescription>
    The `stop` command is interactive and includes safety prompts to prevent accidental operations. You'll be asked to confirm the action by typing a confirmation phrase.
  </CalloutDescription>
</CalloutContainer>

Removing Prisma Postgres instances \[#removing-prisma-postgres-instances]

Prisma Postgres saves the information and data from your local Prisma Postgres instances on your file system. To remove any trace from a database that's not in use any more, you can run the following command:

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
    npx prisma dev rm <glob>
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma dev rm <glob>
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma dev rm <glob>
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma dev rm <glob>
    ```
  </CodeBlockTab>
</CodeBlockTabs>

`<glob>` is a placeholder for a glob pattern to specify which local Prisma Postgres instances should be removed, for example:

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
    npx prisma dev rm mydb # removes a DB called `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma dev rm mydb # removes a DB called `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma dev rm mydb # removes a DB called `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma dev rm mydb # removes a DB called `mydb`
    ```
  </CodeBlockTab>
</CodeBlockTabs>

To stop all databases that begin with `mydb` (e.g. `mydb-dev` and `mydb-prod`), you can use a glob:

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
    npx prisma dev rm mydb* # removes all DBs starting with `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma dev rm mydb* # removes all DBs starting with `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma dev rm mydb* # removes all DBs starting with `mydb`
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma dev rm mydb* # removes all DBs starting with `mydb`
    ```
  </CodeBlockTab>
</CodeBlockTabs>

<CalloutContainer type="info">
  <CalloutDescription>
    The `rm` command is interactive and includes safety prompts to prevent accidental data loss. You'll be asked to confirm the action by typing a confirmation phrase that hints at the risks involved.
  </CalloutDescription>
</CalloutContainer>

Using local Prisma Postgres with any ORM \[#using-local-prisma-postgres-with-any-orm]

Local Prisma Postgres supports [direct TCP connections](/v6/postgres/database/direct-connections), allowing you to connect to it via any tool.

In order to connect to your local Prisma Postgres instance, use the `postgres://` connection string that's returned by `prisma dev`.

Managing local Prisma Postgres instances via the Prisma VS Code extension \[#managing-local-prisma-postgres-instances-via-the-prisma-vs-code-extension]

The [Prisma VS Code extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) has a dedicated UI managing Prisma Postgres instances.

To use it, install the VS Code extension and find the **Prisma logo** in the activity bar of your VS Code editor. It enables the following workflows:

- creating and deleting databases
- starting and stopping the server for a particular database
- "push to cloud": move a database from local to remote

Manage local Prisma Postgres programmatically \[#manage-local-prisma-postgres-programmatically]

You can start and stop a local Prisma Postgres server from Node.js without invoking the CLI. This uses undocumented, unstable APIs from `@prisma/dev` and may change without notice. Use it at your own risk. It’s especially useful for integration tests that need an ephemeral local database per test or suite.

This is a complete runnable example that will print `[{abba: 1}]` when run:

```ts
import { Client } from "pg";
import { unstable_startServer } from "@prisma/dev";
import { getPort } from "get-port-please";

async function startLocalPrisma(name: string) {
  const port = await getPort();

  return await unstable_startServer({
    name, // required, use a unique name if running tests in parallel
    port, //optional, defaults to 51213
    databasePort: port + 1, // optional, defaults to 51214
    shadowDatabasePort: port + 2, // optional, defaults to 51215
    persistenceMode: "stateless", // optional, defaults to 'stateless'. Use 'stateful' to persist data between runs
  });
}

// Usage in tests
const server = await startLocalPrisma(`my-tests-${Date.now()}`);
try {
  const client = new Client({
    connectionString: server.database.connectionString,
  });
  await client.connect();

  const res = await client.query(`SELECT 1 as "abba"`);
  console.log(res.rows);

  client.end();
} finally {
  await server.close!();
}
```

API Arguments \[#api-arguments]

The `unstable_startServer()` function accepts the following options:

| **Argument**             | **Required** | **Description**                                                                                                                    | **Default**   |
| ------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| **`name`**               | ✅            | Unique identifier for the local Prisma Postgres instance. Use distinct names if running multiple servers in parallel.              | —             |
| **`port`**               | ❌            | Port for the Prisma engine server. Throws an error if the port is already in use.                                                  | `51213`       |
| **`databasePort`**       | ❌            | Port for the embedded PostgreSQL database. Used for all Prisma ORM connections.                                                    | `51214`       |
| **`shadowDatabasePort`** | ❌            | Port for the shadow database used during migrations.                                                                               | `51215`       |
| **`persistenceMode`**    | ❌            | Defines how data is persisted:<br />• `'stateless'` — no data is retained between runs<br />• `'stateful'` — data persists locally | `'stateless'` |

<CalloutContainer type="info">
  <CalloutDescription>
    You can dynamically choose available ports using libraries like [`get-port-please`](https://www.npmjs.com/package/get-port-please) to avoid conflicts when running multiple instances.
  </CalloutDescription>
</CalloutContainer>

Notes:

- Allocate unique ports and `name` values when running tests concurrently.
- Use `server.database.connectionString` to connect with Postgres clients or ORMs.
- This pattern is great for running tests that require a local database.

Known limitations \[#known-limitations]

Caching is mocked locally \[#caching-is-mocked-locally]

[Prisma Postgres caching](/v6/postgres/database/caching) is simulated locally. Queries always directly interact with the local Prisma Postgres instance, bypassing cache configurations:

```typescript
const users = await prisma.user.findMany({
  cache: { ttl: 60 },
});
```

Caching works normally when you're using Prisma Postgres in staging and production.

Single connection only \[#single-connection-only]

The local Prisma Postgres database server accepts one connection at a time. Additional connection attempts queue until the active connection closes. This constraint is sufficient for most local development and testing scenarios.

No HTTPS connections \[#no-https-connections]

The local Prisma Postgres server doesn't use HTTPS. We advise against self-hosting it.
