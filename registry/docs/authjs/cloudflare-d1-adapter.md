[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")Cloudflare D1

![](/img/adapters/d1.svg)

# Cloudflare D1 Adapter

## Resources[](#resources)

-   [Cloudflare D1 documentation](https://developers.cloudflare.com/d1/)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install next-auth @auth/d1-adapter
```

```
pnpm add next-auth @auth/d1-adapter
```

```
yarn add next-auth @auth/d1-adapter
```

```
bun add next-auth @auth/d1-adapter
```

### Environment Variables[](#environment-variables)

Environment variables in Cloudflare’s platform are set either via a [`wrangler.toml`](https://developers.cloudflare.com/workers/wrangler/configuration/#environment-variables) configuration file, or in the [admin dashboard](https://dash.cloudflare.com/?to=/:account/pages/view/:pages-project/settings/environment-variables).

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import { D1Adapter } from "@auth/d1-adapter"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
  adapter: D1Adapter(env.db),
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import { D1Adapter } from "@auth/d1-adapter"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: D1Adapter(env.db),
  })
)
```

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import { D1Adapter } from "@auth/d1-adapter"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [],
  adapter: D1Adapter(env.db),
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import { D1Adapter } from "@auth/d1-adapter"
 
const app = express()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: D1Adapter(env.db),
  })
)
```

### Migrations[](#migrations)

Somewhere in the initialization of your application you need to run the `up(env.db)` function to create the tables in D1. It will create 4 tables if they don’t already exist: `accounts`, `sessions`, `users`, `verification_tokens`.

The table prefix `""` is not configurable at this time.

You can use something like the following to attempt the migration once each time your worker starts up. Running migrations more than once will not erase your existing tables.

```
import { up } from "@auth/d1-adapter"
 
let migrated = false
async function migrationHandle({ event, resolve }) {
  if (!migrated) {
    try {
      await up(event.platform.env.db)
      migrated = true
    } catch (e) {
      console.log(e.cause.message, e.message)
    }
  }
  return resolve(event)
}
```

-   You can also initialize your tables manually. Look in [migrations.ts](https://github.com/nextauthjs/next-auth/blob/main/packages/adapter-d1/src/migrations.ts) for the relevant SQL as well as an example of the `up()` function from above.
-   Paste and execute the SQL from within your D1 database’s console in the [Cloudflare dashboard](https://dash.cloudflare.com/?to=/:account/workers/d1).

[Azure Tables](/getting-started/adapters/azure-tables "Azure Tables")[Dgraph](/getting-started/adapters/dgraph "Dgraph")
