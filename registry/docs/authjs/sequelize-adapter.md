[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")Sequelize

![](/img/adapters/sequelize.svg)

# Sequelize Adapter

## Resources[](#resources)

-   [Sequelize documentation](https://sequelize.org/docs/v6/getting-started/)
-   [Connecting to a Database](https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/sequelize-adapter sequelize
```

```
pnpm add @auth/sequelize-adapter sequelize
```

```
yarn add @auth/sequelize-adapter sequelize
```

```
bun add @auth/sequelize-adapter sequelize
```

### Environment Variables[](#environment-variables)

```
DATABASE_URL=postgres://postgres:adminadmin@0.0.0.0:5432/db
```

### Configuration[](#configuration)

⚠️

You’ll also have to manually install [the driver for your database](https://sequelize.org/master/manual/getting-started.html) of choice.

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import SequelizeAdapter from "@auth/sequelize-adapter"
import { Sequelize } from "sequelize"
 
const sequelize = new Sequelize(process.env.DATABASE_URL)
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
  adapter: SequelizeAdapter(sequelize),
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import SequelizeAdapter from "@auth/sequelize-adapter"
import { Sequelize } from "sequelize"
 
const sequelize = new Sequelize(import.meta.env.DATABASE_URL)
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: SequelizeAdapter(sequelize),
  })
)
```

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import SequelizeAdapter from "@auth/sequelize-adapter"
import { Sequelize } from "sequelize"
 
const sequelize = new Sequelize(process.env.DATABASE_URL)
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [],
  adapter: SequelizeAdapter(sequelize),
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import SequelizeAdapter from "@auth/sequelize-adapter"
import { Sequelize } from "sequelize"
 
const sequelize = new Sequelize(process.env.DATABASE_URL)
 
const app = express()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: SequelizeAdapter(sequelize),
  })
)
```

### Schema[](#schema)

By default, the sequelize adapter will not create tables in your database. In production, best practice is to create the [required tables](/concepts/database-models) in your database via [migrations](https://sequelize.org/master/manual/migrations.html). In development, you are able to call [`sequelize.sync()`](https://sequelize.org/master/manual/model-basics.html#model-synchronization) to have sequelize create the necessary tables, foreign keys and indexes:

> This schema is adapted for use in Sequelize and based upon our main [schema](/concepts/database-models)

./auth.ts

```
import NextAuth from "next-auth"
import SequelizeAdapter from "@auth/sequelize-adapter"
import Sequelize from "sequelize"
 
const sequelize = new Sequelize("sqlite::memory:")
const adapter = SequelizeAdapter(sequelize)
 
// Calling sync() is not recommended in production
sequelize.sync()
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter,
})
```

## Advanced usage[](#advanced-usage)

### Using custom models[](#using-custom-models)

Sequelize models are option to customization like so:

./auth.ts

```
import NextAuth from "next-auth"
import SequelizeAdapter, { models } from "@auth/sequelize-adapter"
import Sequelize, { DataTypes } from "sequelize"
 
const sequelize = new Sequelize("sqlite::memory:")
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  // https://authjs.dev/reference/providers/
  providers: [],
  adapter: SequelizeAdapter(sequelize, {
    models: {
      User: sequelize.define("user", {
        ...models.User,
        phoneNumber: DataTypes.STRING,
      }),
    },
  }),
})
```

[Prisma](/getting-started/adapters/prisma "Prisma")[Supabase](/getting-started/adapters/supabase "Supabase")
