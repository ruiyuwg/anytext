[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")Unstorage

![](/img/adapters/unstorage.svg)

# Unstorage Adapter

## Resources[](#resources)

-   [Unstorage documentation](https://unstorage.unjs.io/)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install unstorage @auth/unstorage-adapter
```

```
pnpm add unstorage @auth/unstorage-adapter
```

```
yarn add unstorage @auth/unstorage-adapter
```

```
bun add unstorage @auth/unstorage-adapter
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import { UnstorageAdapter } from "@auth/unstorage-adapter"
import { createStorage } from "unstorage"
 
const storage = createStorage()
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: UnstorageAdapter(storage),
  providers: [],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import { UnstorageAdapter } from "@auth/unstorage-adapter"
import { createStorage } from "unstorage"
 
const storage = createStorage()
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: UnstorageAdapter(storage),
  })
)
```

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import { UnstorageAdapter } from "@auth/unstorage-adapter"
import { createStorage } from "unstorage"
 
const storage = createStorage()
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: UnstorageAdapter(storage),
  providers: [],
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import { UnstorageAdapter } from "@auth/unstorage-adapter"
import { createStorage } from "unstorage"
 
const storage = createStorage()
 
const app = express()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: UnstorageAdapter(storage),
  })
)
```

### Advanced usage[](#advanced-usage)

#### Using multiple apps with a single storage[](#using-multiple-apps-with-a-single-storage)

If you have multiple Auth.js connected apps using the same storage, you need different key prefixes for every app.

You can change the prefixes by passing an `options` object as the second argument to the adapter factory function.

The default values for this object are:

```
const defaultOptions = {
  baseKeyPrefix: "",
  accountKeyPrefix: "user:account:",
  accountByUserIdPrefix: "user:account:by-user-id:",
  emailKeyPrefix: "user:email:",
  sessionKeyPrefix: "user:session:",
  sessionByUserIdKeyPrefix: "user:session:by-user-id:",
  userKeyPrefix: "user:",
  verificationTokenKeyPrefix: "user:token:",
}
```

Usually changing the `baseKeyPrefix` should be enough for this scenario, but for more custom setups, you can also change the prefixes of every single key.

```
import NextAuth from "next-auth"
import { UnstorageAdapter } from "@auth/unstorage-adapter"
import { createStorage } from "unstorage"
 
const storage = createStorage()
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: UnstorageAdapter(storage, { baseKeyPrefix: "app2:" }),
})
```

#### Using `getItemRaw`/`setItemRaw` instead of `getItem`/`setItem`[](#using-getitemrawsetitemraw-instead-of-getitemsetitem)

If you are using storage that supports JSON, you can make it use `getItemRaw/setItemRaw` instead of `getItem/setItem`.

This is an experimental feature. Please check [unjs/unstorage#142](https://github.com/unjs/unstorage/issues/142) for more information.

You can enable this functionality by passing `useItemRaw: true` (default: false) in the `options` object as the second argument to the adapter factory function.

```
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: UnstorageAdapter(storage, { useItemRaw: true }),
})
```

[TypeORM](/getting-started/adapters/typeorm "TypeORM")[Upstash Redis](/getting-started/adapters/upstash-redis "Upstash Redis")
