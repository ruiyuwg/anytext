[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")EdgeDB

![](/img/adapters/edgedb.svg)

# EdgeDB Adapter

## Resources[](#resources)

-   [EdgeDB documentation](https://www.edgedb.com/docs/)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install edgedb @auth/edgedb-adapter
npm install @edgedb/generate --save-dev
```

```
pnpm add edgedb @auth/edgedb-adapter
pnpm add @edgedb/generate --save-dev
```

```
yarn add edgedb @auth/edgedb-adapter
yarn add @edgedb/generate --dev
```

```
bun add edgedb @auth/edgedb-adapter
bun add @edgedb/generate --dev
```

Ensure you have the EdgeDB CLI installed. Follow the instructions below, or read the [EdgeDB quickstart](https://www.edgedb.com/docs/intro/quickstart) to install the EdgeDB CLI and initialize a project

### Environment Variables[](#environment-variables)

```
AUTH_EDGEDB_DSN="edgedb://edgedb:p4ssw0rd@10.0.0.1"
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import { EdgeDBAdapter } from "@auth/edgedb-adapter"
import { createClient } from "edgedb"
 
const client = createClient({ dsn: process.env.AUTH_EDGEDB_DSN })
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: EdgeDBAdapter(client),
  providers: [],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import { EdgeDBAdapter } from "@auth/edgedb-adapter"
import { createClient } from "edgedb"
 
const client = createClient({ dsn: import.meta.env.AUTH_EDGEDB_DSN })
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: EdgeDBAdapter(client),
  })
)
```

./auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import { EdgeDBAdapter } from "@auth/edgedb-adapter"
import { createClient } from "edgedb"
 
const client = createClient({ dsn: process.env.AUTH_EDGEDB_DSN })
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: EdgeDBAdapter(client),
  providers: [],
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import { EdgeDBAdapter } from "@auth/edgedb-adapter"
import { createClient } from "edgedb"
 
const app = express()
 
const client = createClient({ dsn: process.env.AUTH_EDGEDB_DSN })
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: EdgeDBAdapter(client),
  })
)
```

### EdgeDB CLI[](#edgedb-cli)

#### Linux or macOS[](#linux-or-macos)

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh
```

#### Windows[](#windows)

```
iwr https://ps1.edgedb.com -useb | iex
```

Check that the CLI is available with the `edgedb --version` command. If you get a `Command not found` error, you may need to open a new terminal window before the `edgedb` command is available.

Once the CLI is installed, initialize a project from the application’s root directory. You’ll be presented with a series of prompts.

```
edgedb project init
```

This process will spin up an EdgeDB instance and [“link”](https://www.edgedb.com/docs/cli/edgedb_instance/edgedb_instance_link#edgedb-instance-link) it with your current directory. As long as you’re inside that directory, CLI commands and client libraries will be able to connect to the linked instance automatically, without additional configuration.

### Schema[](#schema)

Replace the contents of the auto-generated file in `dbschema/default.esdl` with the following:

default.esdl

```
module default {
    type User {
        property name -> str;
        required property email -> str {
            constraint exclusive;
        }
        property emailVerified -> datetime;
        property image -> str;
        multi link accounts := .<user[is Account];
        multi link sessions := .<user[is Session];
        property createdAt -> datetime {
            default := datetime_current();
        };
    }
 
    type Account {
       required property userId := .user.id;
       required property type -> str;
       required property provider -> str;
       required property providerAccountId -> str {
        constraint exclusive;
       };
       property refresh_token -> str;
       property access_token -> str;
       property expires_at -> int64;
       property token_type -> str;
       property scope -> str;
       property id_token -> str;
       property session_state -> str;
       required link user -> User {
            on target delete delete source;
       };
       property createdAt -> datetime {
            default := datetime_current();
        };
 
       constraint exclusive on ((.provider, .providerAccountId))
    }
 
    type Session {
        required property sessionToken -> str {
            constraint exclusive;
        }
        required property userId := .user.id;
        required property expires -> datetime;
        required link user -> User {
            on target delete delete source;
        };
        property createdAt -> datetime {
            default := datetime_current();
        };
    }
 
    type VerificationToken {
        required property identifier -> str;
        required property token -> str {
            constraint exclusive;
        }
        required property expires -> datetime;
        property createdAt -> datetime {
            default := datetime_current();
        };
 
        constraint exclusive on ((.identifier, .token))
    }
}
 
# Disable the application of access policies within access policies
# themselves. This behavior will become the default in EdgeDB 3.0.
# See: https://www.edgedb.com/docs/reference/ddl/access_policies#nonrecursive
using future nonrecursive_access_policies;
```

### Migration[](#migration)

1.  Create a migration

```
edgedb migration create
```

2.  Apply the migration

```
edgedb migrate
```

To learn more about [EdgeDB migrations](https://www.edgedb.com/docs/intro/migrations#generate-a-migration) check out the [Migrations docs](https://www.edgedb.com/docs/intro/migrations).

### Generate[](#generate)

```
npx @edgedb/generate edgeql-js
```

This will generate the [query builder](https://www.edgedb.com/docs/clients/js/querybuilder) so that you can write fully typed EdgeQL queries with TypeScript in a code-first way.

```
const query = e.select(e.User, () => ({
  id: true,
  email: true,
  emailVerified: true,
  name: true,
  image: true,
  filter_single: { email: "johndoe@example.com" },
}))
 
return await query.run(client)
```

## Deploying[](#deploying)

### Deploy EdgeDB[](#deploy-edgedb)

First deploy an EdgeDB instance on your preferred cloud provider:

-   [AWS](https://www.edgedb.com/docs/guides/deployment/aws_aurora_ecs)
-   [Google Cloud](https://www.edgedb.com/docs/guides/deployment/gcp)
-   [Azure](https://www.edgedb.com/docs/guides/deployment/azure_flexibleserver)
-   [DigitalOcean](https://www.edgedb.com/docs/guides/deployment/digitalocean)
-   [Fly.io](https://www.edgedb.com/docs/guides/deployment/fly_io)
-   [Docker](https://www.edgedb.com/docs/guides/deployment/docker) (cloud-agnostic)

### Find your instance’s DSN[](#find-your-instances-dsn)

The DSN is also known as a connection string. It will have the format `edgedb://username:password@hostname:port`. The exact instructions for this depend on which cloud provider you’re deploying to.

### Set an environment variable[](#set-an-environment-variable)

.env

```
AUTH_EDGEDB_DSN=edgedb://johndoe:supersecure@myhost.com:420
```

### Apply migrations[](#apply-migrations)

Use the DSN to apply migrations against your remote instance.

```
edgedb migrate --dsn <your-instance-dsn>
```

### Set up a `prebuild` script[](#set-up-a-prebuild-script)

Add the following `prebuild` script to your `package.json`. When your hosting provider initializes the build, it will trigger this script which will generate the query builder. The `npx @edgedb/generate edgeql-js` command will read the value of the `EDGEDB_DSN` environment variable, connect to the database, and generate the query builder before your hosting provider starts building the project.

package.json

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
+  "prebuild": "npx @edgedb/generate edgeql-js"
},
```

[DynamoDB](/getting-started/adapters/dynamodb "DynamoDB")[FaunaDB](/getting-started/adapters/fauna "FaunaDB")
