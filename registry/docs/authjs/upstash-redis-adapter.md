[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")Upstash Redis

![](/img/adapters/upstash-redis.svg)

# Upstash Redis Adapter

## Resources[](#resources)

-   [Upstash documentation](https://docs.upstash.com/redis)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install @upstash/redis @auth/upstash-redis-adapter
```

```
pnpm add @upstash/redis @auth/upstash-redis-adapter
```

```
yarn add @upstash/redis @auth/upstash-redis-adapter
```

```
bun add @upstash/redis @auth/upstash-redis-adapter
```

### Environment Variables[](#environment-variables)

```
UPSTASH_REDIS_URL,
UPSTASH_REDIS_TOKEN
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter"
import { Redis } from "@upstash/redis"
 
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: UpstashRedisAdapter(redis),
  providers: [],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter"
import { Redis } from "@upstash/redis"
 
const redis = new Redis({
  url: import.meta.env.UPSTASH_REDIS_URL!,
  token: import.meta.env.UPSTASH_REDIS_TOKEN!,
})
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: UpstashRedisAdapter(redis),
  })
)
```

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter"
import { Redis } from "@upstash/redis"
 
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: UpstashRedisAdapter(redis),
  providers: [],
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter"
import { Redis } from "@upstash/redis"
 
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})
 
const app = express()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: UpstashRedisAdapter(redis),
  })
)
```

### Advanced usage[](#advanced-usage)

#### Using multiple apps with a single Upstash Redis instance[](#using-multiple-apps-with-a-single-upstash-redis-instance)

The Upstash free-tier allows for only one Redis instance. If you have multiple Auth.js connected apps using this instance, you need different key prefixes for every app.

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
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: UpstashRedisAdapter(redis, { baseKeyPrefix: "app2:" }),
})
```

[Unstorage](/getting-started/adapters/unstorage "Unstorage")[Xata](/getting-started/adapters/xata "Xata")
