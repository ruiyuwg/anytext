[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")FaunaDB

![](/img/adapters/fauna.svg)

# Fauna Adapter

## Resources[](#resources)

-   [Fauna documentation](https://docs.fauna.com/fauna/current/)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/fauna-adapter fauna
```

```
pnpm add @auth/fauna-adapter fauna
```

```
yarn add @auth/fauna-adapter fauna
```

```
bun add @auth/fauna-adapter fauna
```

### Environment Variables[](#environment-variables)

```
AUTH_FAUNA_CLIENT=http://localhost:8443
AUTH_FAUNA_SECRET=abc123
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import { Client } from "fauna"
import { FaunaAdapter } from "@auth/fauna-adapter"
 
const client = new Client({
  secret: process.env.AUTH_FAUNA_SECRET,
  endpoint: new URL(process.env.AUTH_FAUNA_CLIENT)
})
 
export { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
  adapter: FaunaAdapter(client)
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import { Client } from "fauna"
import { FaunaAdapter } from "@auth/fauna-adapter"
 
const client = new Client({
  secret: import.meta.env.AUTH_FAUNA_SECRET,
  endpoint: new URL(import.meta.env.AUTH_FAUNA_CLIENT),
})
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: FaunaAdapter(client),
  })
)
```

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import { Client } from "fauna"
import { FaunaAdapter } from "@auth/fauna-adapter"
 
const client = new Client({
  secret: process.env.AUTH_FAUNA_SECRET,
  endpoint: new URL(process.env.AUTH_FAUNA_CLIENT)
})
 
export { handle, signIn, signOut } = SvelteKitAuth({
  providers: [],
  adapter: FaunaAdapter(client)
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import { Client } from "fauna"
import { FaunaAdapter } from "@auth/fauna-adapter"
 
const app = express()
 
const client = new Client({
  secret: process.env.AUTH_FAUNA_SECRET,
  endpoint: new URL(process.env.AUTH_FAUNA_CLIENT),
})
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: FaunaAdapter(client),
  })
)
```

### Migrating to v2[](#migrating-to-v2)

In `@auth/adapter-fauna@2.0.0`, we’ve renamed the collections to use an uppercase naming pattern in accordance with the Fauna best practices. If you’re migrating from v1, you’ll need to rename your collections to match the new naming scheme. Additionally, we’ve renamed the indexes to match the new method-like index names (i.e. `account_by_user_id` to `Account.byUserId`). For more information on migrating your Fauna schema, see their migration guide [here](https://docs.fauna.com/fauna/current/migration)

Migration Example

#### Schema[](#schema)

Run the following commands inside of the `Shell` tab in the Fauna dashboard to setup the appropriate collections and indexes.

authjs-fauna-adapter-schema.fql

```
Collection.create({
  name: "Account",
  indexes: {
    byUserId: {
      terms: [
        { field: "userId" }
      ]
    },
    byProviderAndProviderAccountId: {
      terms [
        { field: "provider" },
        { field: "providerAccountId" }
      ]
    },
  }
})
Collection.create({
  name: "Session",
  constraints: [
    {
      unique: ["sessionToken"],
      status: "active",
    }
  ],
  indexes: {
    bySessionToken: {
      terms: [
        { field: "sessionToken" }
      ]
    },
    byUserId: {
      terms [
        { field: "userId" }
      ]
    },
  }
})
Collection.create({
  name: "User",
  constraints: [
    {
      unique: ["email"],
      status: "active",
    }
  ],
  indexes: {
    byEmail: {
      terms [
        { field: "email" }
      ]
    },
  }
})
Collection.create({
  name: "VerificationToken",
  indexes: {
    byIdentifierAndToken: {
      terms [
        { field: "identifier" },
        { field: "token" }
      ]
    },
  }
})
```

#### Custom Collection Names[](#custom-collection-names)

If you want to use custom collection names, you can pass them as an option to the adapter, like this:

```
FaunaAdapter(client, {
  collectionNames: {
    user: "CustomUser",
    account: "CustomAccount",
    session: "CustomSession",
    verificationToken: "CustomVerificationToken",
  },
})
```

Make sure the collection names you pass to the provider match the collection names of your Fauna database.

[EdgeDB](/getting-started/adapters/edgedb "EdgeDB")[Firebase Firestore](/getting-started/adapters/firebase "Firebase Firestore")
