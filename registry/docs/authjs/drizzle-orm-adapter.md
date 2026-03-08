[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")Drizzle

[![](/img/adapters/drizzle.svg)](https://orm.drizzle.team)

# Drizzle ORM Adapter

## Resources[](#resources)

-   [Drizzle ORM documentation](https://orm.drizzle.team/docs/overview)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install drizzle-orm @auth/drizzle-adapter
npm install drizzle-kit --save-dev
```

```
pnpm add drizzle-orm @auth/drizzle-adapter
pnpm add drizzle-kit --save-dev
```

```
yarn add drizzle-orm @auth/drizzle-adapter
yarn add drizzle-kit --dev
```

```
bun add drizzle-orm @auth/drizzle-adapter
bun add drizzle-kit --dev
```

### Environment Variables[](#environment-variables)

```
AUTH_DRIZZLE_URL=postgres://postgres:postgres@127.0.0.1:5432/db
```

### Configuration[](#configuration)

To use this adapter, you must have setup Drizzle ORM and Drizzle Kit in your project. Drizzle provides a simple [quick start guide](https://orm.drizzle.team/kit-docs/quick). For more details, follow the Drizzle documentation for your respective database ([PostgreSQL](https://orm.drizzle.team/docs/get-started-postgresql), [MySQL](https://orm.drizzle.team/docs/get-started-mysql) or [SQLite](https://orm.drizzle.team/docs/get-started-sqlite)). In summary, that setup should look something like this.

1.  Create your schema file, based off of one of the ones below.
2.  Install a supported database driver to your project, like `@libsql/client`, `mysql2` or `postgres`.
3.  Create a `drizzle.config.ts` [file](https://orm.drizzle.team/kit-docs/conf).
4.  Generate the initial migration from your schema file with a command like, `drizzle-kit generate`.
5.  Apply migrations by using `migrate()` function or push changes directly to your database with a command like, `drizzle-kit push`.
6.  If your schemas differ from the default ones, pass them as the second parameter to the adapter.

#### Schemas[](#schemas)

PostgreSQL

MySQL

SQLite

### Adapter Setup[](#adapter-setup)

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./schema.ts"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./schema.ts"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: DrizzleAdapter(db),
  })
)
```

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./schema.ts"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: DrizzleAdapter(db),
  providers: [],
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./schema.ts"
 
const app = express()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: DrizzleAdapter(db),
  })
)
```

#### Passing your own Schemas[](#passing-your-own-schemas)

If you want to use your own tables, you can pass them as a second argument to `DrizzleAdapter`.

-   The `sessionsTable` is optional and only required if you’re using the database session strategy.
-   The `verificationTokensTable` is optional and only required if you’re using a Magic Link provider.

auth.ts

```
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db, accounts, sessions, users, verificationTokens } from "./schema"
 
export const { handlers, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [Google],
})
```

### Migrating your database[](#migrating-your-database)

With your schema now described in your code, you’ll need to migrate your database to your schema. An example `migrate.ts` file looks like this. For more information, check out Drizzle’s migration [quick start guide](https://orm.drizzle.team/docs/migrations).

migrate.ts

```
import "dotenv/config"
import { migrate } from "drizzle-orm/mysql2/migrator"
import { db, connection } from "./db"
 
// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: "./drizzle" })
 
// Don't forget to close the connection, otherwise the script will hang
await connection.end()
```

Full documentation on how to manage migrations with Drizzle can be found at the Drizzle Kit [Migrations page](https://orm.drizzle.team/kit-docs/overview#running-migrations).

[Dgraph](/getting-started/adapters/dgraph "Dgraph")[DynamoDB](/getting-started/adapters/dynamodb "DynamoDB")
