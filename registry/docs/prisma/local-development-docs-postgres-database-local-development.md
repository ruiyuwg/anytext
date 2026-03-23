# Local development (/docs/postgres/database/local-development)

[Prisma Postgres](/postgres) is a production-grade, cloud-native database and is ideal for staging and production environments. For rapid iteration and isolated testing, you can run a *local* Prisma Postgres instance (powered by [PGlite](https://pglite.dev)) via the `prisma dev` command. This page explains how to install and launch a local Prisma Postgres database.

Setting up local development for Prisma Postgres \[#setting-up-local-development-for-prisma-postgres]

Follow these steps to set up local Prisma Postgres for development.

Node.js v20 or later is required for local Prisma Postgres

1. Launching local Prisma Postgres \[#1-launching-local-prisma-postgres]

Navigate into your project and start the local Prisma Postgres server using the following command:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev
```



```bash
pnpm dlx prisma dev
```



```bash
yarn dlx prisma dev
```



```bash
bunx --bun prisma dev
```
````

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

- q to quit
- h to view the connection URL enabling connections via **Prisma ORM**
- t to view the connection URL enabling connections via **any tool**

If you want to connect via Prisma ORM, hit h on your keyboard, copy the `DATABASE_URL` and store it in your `.env` file. This will be used to connect to the local Prisma Postgres server:

```text title=".env"
DATABASE_URL="prisma+postgres://localhost:51213/?api_key=__API_KEY__"
```

Keep the local Prisma Postgres server running in the background while you work on your application.

Alternatively, you can run the server in detached mode to free up your terminal:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev --detach
```



```bash
pnpm dlx prisma dev --detach
```



```bash
yarn dlx prisma dev --detach
```



```bash
bunx --bun prisma dev --detach
```
````

This starts the server in the background. Use `prisma dev ls` to see running servers and `prisma dev stop` to stop them.

2. Applying migrations and seeding data \[#2-applying-migrations-and-seeding-data]

Then in a separate terminal tab, run the `prisma migrate dev` command to create the database and run the migrations:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate dev
```



```bash
pnpm dlx prisma migrate dev
```



```bash
yarn dlx prisma migrate dev
```



```bash
bunx --bun prisma migrate dev
```





Make sure the local Prisma Postgres server is running before running the `prisma migrate dev` command.

If you must use a different port, append [`--port <number>`](/orm/reference/prisma-cli-reference#dev) (for example, `npx prisma migrate dev --port 5422`) and update your `DATABASE_URL` (or other connection settings) to match.
````

This will create the database and run the migrations.

If you have a seeder script to seed the database, you should also run it in this step.

3. Running your application locally \[#3-running-your-application-locally]

Start your application's development server. You can now perform queries against the local Prisma Postgres instance using Prisma ORM.

To transition to production, you only need to update the database URL in the `.env` file with a Prisma Postgres connection url without additional application logic changes.

Using different local Prisma Postgres instances \[#using-different-local-prisma-postgres-instances]

You can target a specific, local Prisma Postgres instance via the `--name` (`-n`) option of the `prisma dev` command, for example:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev --name="mydb1"
```



```bash
pnpm dlx prisma dev --name="mydb1"
```



```bash
yarn dlx prisma dev --name="mydb1"
```



```bash
bunx --bun prisma dev --name="mydb1"
```
````

Whenever you pass the `--name="mydb1"` to `prisma dev`, the command will return the same connection string pointing to a local instance called `mydb1`. This creates a named instance that you can later manage using the instance management commands.

Starting existing Prisma Postgres instances in the background \[#starting-existing-prisma-postgres-instances-in-the-background]

You can start existing Prisma Postgres instances in the background using:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev start 
```



```bash
pnpm dlx prisma dev start 
```



```bash
yarn dlx prisma dev start 
```



```bash
bunx --bun prisma dev start 
```





The `dev start` command only works with instances that already exist.
````

`<glob>` is a placeholder for a glob pattern to specify which local Prisma Postgres instances should be started, for example:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev start mydb # starts a DB called `mydb` in the background (only if it already exists)
```



```bash
pnpm dlx prisma dev start mydb # starts a DB called `mydb` in the background (only if it already exists)
```



```bash
yarn dlx prisma dev start mydb # starts a DB called `mydb` in the background (only if it already exists)
```



```bash
bunx --bun prisma dev start mydb # starts a DB called `mydb` in the background (only if it already exists)
```
````

To start all databases that begin with `mydb` (e.g. `mydb-dev` and `mydb-prod`), you can use a glob:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev start mydb* # starts all existing DBs starting with `mydb`
```



```bash
pnpm dlx prisma dev start mydb* # starts all existing DBs starting with `mydb`
```



```bash
yarn dlx prisma dev start mydb* # starts all existing DBs starting with `mydb`
```



```bash
bunx --bun prisma dev start mydb* # starts all existing DBs starting with `mydb`
```
````

This command enables you to manage Prisma Postgres instances outside of the VS Code extension, allowing for background instance management in your development workflow.

Listing Prisma Postgres instances \[#listing-prisma-postgres-instances]

You can view all your local Prisma Postgres instances using:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev ls
```



```bash
pnpm dlx prisma dev ls
```



```bash
yarn dlx prisma dev ls
```



```bash
bunx --bun prisma dev ls
```
````

This command lists all available instances on your system, showing their current status and configuration.

Stopping Prisma Postgres instances \[#stopping-prisma-postgres-instances]

You can stop a running Prisma Postgres instance with this command:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev stop 
```



```bash
pnpm dlx prisma dev stop 
```



```bash
yarn dlx prisma dev stop 
```



```bash
bunx --bun prisma dev stop 
```
````

`<glob>` is a placeholder for a glob pattern to specify which local Prisma Postgres instances should be stopped, for example:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev stop mydb # stops a DB called `mydb`
```



```bash
pnpm dlx prisma dev stop mydb # stops a DB called `mydb`
```



```bash
yarn dlx prisma dev stop mydb # stops a DB called `mydb`
```



```bash
bunx --bun prisma dev stop mydb # stops a DB called `mydb`
```
````

To stop all databases that begin with `mydb` (e.g. `mydb-dev` and `mydb-prod`), you can use a glob:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev stop mydb* # stops all DBs starting with `mydb`
```



```bash
pnpm dlx prisma dev stop mydb* # stops all DBs starting with `mydb`
```



```bash
yarn dlx prisma dev stop mydb* # stops all DBs starting with `mydb`
```



```bash
bunx --bun prisma dev stop mydb* # stops all DBs starting with `mydb`
```





The `stop` command is interactive and includes safety prompts to prevent accidental operations. You'll be asked to confirm the action by typing a confirmation phrase.
````

Removing Prisma Postgres instances \[#removing-prisma-postgres-instances]

Prisma Postgres saves the information and data from your local Prisma Postgres instances on your file system. To remove any trace from a database that's not in use any more, you can run the following command:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev rm 
```



```bash
pnpm dlx prisma dev rm 
```



```bash
yarn dlx prisma dev rm 
```



```bash
bunx --bun prisma dev rm 
```
````

`<glob>` is a placeholder for a glob pattern to specify which local Prisma Postgres instances should be removed, for example:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev rm mydb # removes a DB called `mydb`
```



```bash
pnpm dlx prisma dev rm mydb # removes a DB called `mydb`
```



```bash
yarn dlx prisma dev rm mydb # removes a DB called `mydb`
```



```bash
bunx --bun prisma dev rm mydb # removes a DB called `mydb`
```
````

To remove all databases that begin with `mydb` (e.g. `mydb-dev` and `mydb-prod`), you can use a glob:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev rm mydb* # removes all DBs starting with `mydb`
```



```bash
pnpm dlx prisma dev rm mydb* # removes all DBs starting with `mydb`
```



```bash
yarn dlx prisma dev rm mydb* # removes all DBs starting with `mydb`
```



```bash
bunx --bun prisma dev rm mydb* # removes all DBs starting with `mydb`
```
````

You can use the `--force` flag to stop any running servers before removing them:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev rm mydb --force
```



```bash
pnpm dlx prisma dev rm mydb --force
```



```bash
yarn dlx prisma dev rm mydb --force
```



```bash
bunx --bun prisma dev rm mydb --force
```
````

Without `--force`, the command will fail if any server is still running.

```
The `rm` command is interactive and includes safety prompts to prevent accidental data loss. You'll be asked to confirm the action by typing a confirmation phrase that hints at the risks involved.
```

Using local Prisma Postgres with any ORM \[#using-local-prisma-postgres-with-any-orm]

Local Prisma Postgres supports [direct PostgreSQL connections](/postgres/database/connecting-to-your-database), allowing you to connect to it via any tool.

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
import { startPrismaDevServer } from "@prisma/dev";

async function startLocalPrisma(name: string) {
  return await startPrismaDevServer({
    name, // required, use a unique name if running tests in parallel
    port: 51213, // optional, defaults to 51213
    databasePort: 51214, // optional, defaults to 51214
    shadowDatabasePort: 51215, // optional, defaults to 51215
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

The `startPrismaDevServer()` function accepts the following options:

| **Argument**                             | **Required** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                            | **Default**                                |
| ---------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| **`name`**                               | ❌            | Unique identifier for the local Prisma Postgres instance. Use distinct names if running multiple servers in parallel.                                                                                                                                                                                                                                                                                                                      | `'default'`                                |
| **`port`**                               | ❌            | Port for the Prisma engine server. Throws an error if the port is already in use.                                                                                                                                                                                                                                                                                                                                                          | `51213`                                    |
| **`databasePort`**                       | ❌            | Port for the embedded PostgreSQL database. Used for all Prisma ORM connections.                                                                                                                                                                                                                                                                                                                                                            | `51214`                                    |
| **`shadowDatabasePort`**                 | ❌            | Port for the shadow database used during migrations.                                                                                                                                                                                                                                                                                                                                                                                       | `51215`                                    |
| **`persistenceMode`**                    | ❌            | Defines how data is persisted:• `'stateless'` — no data is retained between runs• `'stateful'` — data persists locally                                                                                                                                                                                                                                                                                                         | `'stateless'`                              |
| **`debug`**                              | ❌            | Whether to enable debug logging.                                                                                                                                                                                                                                                                                                                                                                                                           | `false`                                    |
| **`dryRun`**                             | ❌            | Whether to run the server in dry run mode.                                                                                                                                                                                                                                                                                                                                                                                                 | `false`                                    |
| **`databaseConnectTimeoutMillis`**       | ❌            | Connection timeout in milliseconds for pending database connections. Starts ticking for every new client that attempts to connect. When exceeded, the pending client connection is evicted and closed. Use with caution, as it may lead to unexpected behavior. Best used with a pool client that retries connections.                                                                                                                     | `60000` (1 minute)                         |
| **`databaseIdleTimeoutMillis`**          | ❌            | Idle timeout in milliseconds for active database connections. Re-starts ticking after each message received on the active connection. When exceeded, the active client connection is closed, and a pending connection is promoted to active. Use with caution, as it may lead to unexpected disconnections. Best used with a pool client that can handle disconnections gracefully. Set it if you suffer from client hanging indefinitely. | Not applied by default                     |
| **`shadowDatabaseConnectTimeoutMillis`** | ❌            | Connection timeout in milliseconds for pending shadow database connections.                                                                                                                                                                                                                                                                                                                                                                | Defaults to `databaseConnectTimeoutMillis` |
| **`shadowDatabaseIdleTimeoutMillis`**    | ❌            | Idle timeout in milliseconds for active shadow database connections.                                                                                                                                                                                                                                                                                                                                                                       | Defaults to `databaseIdleTimeoutMillis`    |

````
You can import the type definition for better TypeScript support:

```ts
import { type ServerOptions } from "@prisma/dev";
```
````

Notes:

- Allocate unique ports and `name` values when running tests concurrently.
- Use `server.database.connectionString` to connect with Postgres clients or ORMs.
- This pattern is great for running tests that require a local database.

Known limitations \[#known-limitations]

Single connection only \[#single-connection-only]

The local Prisma Postgres database server accepts one connection at a time. Additional connection attempts queue until the active connection closes. This constraint is sufficient for most local development and testing scenarios.

No HTTPS connections \[#no-https-connections]

The local Prisma Postgres server doesn't use HTTPS. We advise against self-hosting it.
