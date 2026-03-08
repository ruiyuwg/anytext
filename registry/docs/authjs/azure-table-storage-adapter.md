[Getting Started](/getting-started "Getting Started")AdaptersAzure Tables

![](/img/adapters/azure-tables.svg)

# Azure Table Storage Adapter

## Resources[](#resources)

-   [Azure Tables documentation](https://azure.microsoft.com/en-us/products/storage/tables)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/azure-tables-adapter
```

```
pnpm add @auth/azure-tables-adapter
```

```
yarn add @auth/azure-tables-adapter
```

```
bun add @auth/azure-tables-adapter
```

### Environment Variables[](#environment-variables)

```
AUTH_AZURE_ACCOUNT=storageaccountname
AUTH_AZURE_ACCESS_KEY=longRandomKey
AUTH_AZURE_TABLES_ENDPOINT=https://$AZURE_ACCOUNT.table.core.windows.net
```

### Configuration[](#configuration)

1.  Create a table for authentication data, `auth` in the example below.

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth, { type AuthConfig } from "next-auth"
import { TableStorageAdapter } from "@auth/azure-tables-adapter"
import { AzureNamedKeyCredential, TableClient } from "@azure/data-tables"
 
const credential = new AzureNamedKeyCredential(
  process.env.AUTH_AZURE_ACCOUNT,
  process.env.AUTH_AZURE_ACCESS_KEY
)
const authClient = new TableClient(
  process.env.AUTH_AZURE_TABLES_ENDPOINT,
  "auth",
  credential
)
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
  adapter: TableStorageAdapter(authClient),
} satisfies AuthConfig)
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import { TableStorageAdapter } from "@auth/azure-tables-adapter"
import { AzureNamedKeyCredential, TableClient } from "@azure/data-tables"
 
const credential = new AzureNamedKeyCredential(
  import.meta.env.AUTH_AZURE_ACCOUNT,
  import.meta.env.AUTH_AZURE_ACCESS_KEY
)
const authClient = new TableClient(
  import.meta.env.AUTH_AZURE_TABLES_ENDPOINT,
  "auth",
  credential
)
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: TableStorageAdapter(authClient),
  })
)
```

./src/auth.ts

```
import SvelteKitAuth, { type AuthConfig } from "@auth/sveltekit"
import { TableStorageAdapter } from "@auth/azure-tables-adapter"
import { AzureNamedKeyCredential, TableClient } from "@azure/data-tables"
 
const credential = new AzureNamedKeyCredential(
  process.env.AUTH_AZURE_ACCOUNT,
  process.env.AUTH_AZURE_ACCESS_KEY
)
const authClient = new TableClient(
  process.env.AUTH_AZURE_TABLES_ENDPOINT,
  "auth",
  credential
)
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [],
  adapter: TableStorageAdapter(authClient),
} satisfies AuthConfig)
```

./src/routes/auth.route.ts

```
import express from "express"
import Google from "@auth/express/providers/google"
import ExpressAuth, { type AuthConfig } from "@auth/express"
import { TableStorageAdapter } from "@auth/azure-tables-adapter"
import { AzureNamedKeyCredential, TableClient } from "@azure/data-tables"
 
const app = express()
 
const credential = new AzureNamedKeyCredential(
  process.env.AUTH_AZURE_ACCOUNT,
  process.env.AUTH_AZURE_ACCESS_KEY
)
const authClient = new TableClient(
  process.env.AUTH_AZURE_TABLES_ENDPOINT,
  "auth",
  credential
)
 
// If app is served through a proxy, trust the proxy to allow HTTPS protocol to be detected
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [Google],
    adapter: TableStorageAdapter(authClient),
  })
)
```

[Zoom](/getting-started/providers/zoom "Zoom")[Cloudflare D1](/getting-started/adapters/d1 "Cloudflare D1")
