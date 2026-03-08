[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")MongoDB

![](/img/adapters/mongodb.svg)

# MongoDB Adapter

## Resources[](#resources)

-   [MongoDB documentation](https://docs.mongodb.com/)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/mongodb-adapter mongodb
```

```
pnpm add @auth/mongodb-adapter mongodb
```

```
yarn add @auth/mongodb-adapter mongodb
```

```
bun add @auth/mongodb-adapter mongodb
```

### Environment Variables[](#environment-variables)

```
MONGODB_URI=
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./lib/db"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./lib/db"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: MongoDBAdapter(client),
  })
)
```

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./lib/db"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: MongoDBAdapter(client),
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./lib/db"
 
const app = express()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: MongoDBAdapter(client),
  })
)
```

The MongoDB adapter does not handle connections automatically, so you will have to make sure that you pass the Adapter a `MongoClient` that is connected already.

### Add the MongoDB client[](#add-the-mongodb-client)

lib/db.ts

```
// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient, ServerApiVersion } from "mongodb"
 
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}
 
const uri = process.env.MONGODB_URI
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}
 
let client: MongoClient
 
if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient
  }
 
  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options)
  }
  client = globalWithMongo._mongoClient
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
}
 
// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.
export default client
```

[MikroORM](/getting-started/adapters/mikro-orm "MikroORM")[Neo4j](/getting-started/adapters/neo4j "Neo4j")
