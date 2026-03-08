[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")PouchDB

![](/img/adapters/pouchdb.svg)

# PouchDB Adapter

## Resources[](#resources)

-   [PouchDB documentation](https://pouchdb.com/api.html)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install pouchdb pouchdb-find @auth/pouchdb-adapter
```

```
pnpm add pouchdb pouchdb-find @auth/pouchdb-adapter
```

```
yarn add pouchdb pouchdb-find @auth/pouchdb-adapter
```

```
bun add pouchdb pouchdb-find @auth/pouchdb-adapter
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import { PouchDBAdapter } from "@auth/pouchdb-adapter"
import PouchDB from "pouchdb"
 
// Setup your PouchDB instance and database
PouchDB.plugin(require("pouchdb-adapter-leveldb")) // Or any other adapter
  .plugin(require("pouchdb-find")) // Don't forget the `pouchdb-find` plugin
 
const pouchdb = new PouchDB("auth_db", { adapter: "leveldb" })
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
  adapter: PouchDBAdapter(pouchdb),
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import { PouchDBAdapter } from "@auth/pouchdb-adapter"
import PouchDB from "pouchdb"
 
// Setup your PouchDB instance and database
PouchDB.plugin(require("pouchdb-adapter-leveldb")) // Or any other adapter
  .plugin(require("pouchdb-find")) // Don't forget the `pouchdb-find` plugin
 
const pouchdb = new PouchDB("auth_db", { adapter: "leveldb" })
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: PouchDBAdapter(pouchdb),
  })
)
```

./auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import { PouchDBAdapter } from "@auth/pouchdb-adapter"
import PouchDB from "pouchdb"
 
// Setup your PouchDB instance and database
PouchDB.plugin(require("pouchdb-adapter-leveldb")) // Or any other adapter
  .plugin(require("pouchdb-find")) // Don't forget the `pouchdb-find` plugin
 
const pouchdb = new PouchDB("auth_db", { adapter: "leveldb" })
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [],
  adapter: PouchDBAdapter(pouchdb),
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import { PouchDBAdapter } from "@auth/pouchdb-adapter"
import PouchDB from "pouchdb"
 
// Setup your PouchDB instance and database
PouchDB.plugin(require("pouchdb-adapter-leveldb")) // Or any other adapter
  .plugin(require("pouchdb-find")) // Don't forget the `pouchdb-find` plugin
 
const pouchdb = new PouchDB("auth_db", { adapter: "leveldb" })
 
const app = express()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: PouchDBAdapter(pouchdb),
  })
)
```

💡

Depending on your architecture you can use PouchDB’s http adapter to reach any database compliant with the CouchDB protocol (CouchDB, Cloudant, etc.) or use any other PouchDB compatible adapter (leveldb, in-memory, etc.)

Your PouchDB instance MUST provide the `pouchdb-find` plugin since it is used internally by the adapter to build and manage indexes

### Advanced usage[](#advanced-usage)

#### Memory-First Caching Strategy[](#memory-first-caching-strategy)

If you need to boost your authentication layer performance, you may use PouchDB’s powerful sync features and various adapters, to build a memory-first caching strategy.

Use an in-memory PouchDB as your main authentication database, and synchronize it with any other persisted PouchDB. You may do a one way, one-off replication at startup from the persisted PouchDB into the in-memory PouchDB, then two-way, continuous sync.

This will most likely not increase performance much in a serverless environment due to various reasons such as concurrency, function startup time increases, etc.

For more details, please see [https://pouchdb.com/api.html#sync](https://pouchdb.com/api.html#sync)

[PostgreSQL](/getting-started/adapters/pg "PostgreSQL")[Prisma](/getting-started/adapters/prisma "Prisma")
