[Getting Started](/getting-started "Getting Started")Installation

### Installing Auth.js[](#installing-authjs)

Start by installing the appropriate package for your framework.

Next.jsQwikSvelteKitExpress

npmpnpmyarnbun

```
npm install next-auth@beta
```

```
pnpm add next-auth@beta
```

```
yarn add next-auth@beta
```

```
bun add next-auth@beta
```

npmpnpmyarnbun

```
npm run qwik add auth
```

```
pnpm run qwik add auth
```

```
yarn qwik add auth
```

```
bun run qwik add auth
```

npmpnpmyarnbun

```
npm install @auth/sveltekit
```

```
pnpm add @auth/sveltekit
```

```
yarn add @auth/sveltekit
```

```
bun add @auth/sveltekit
```

npmpnpmyarnbun

```
npm install @auth/express
```

```
pnpm add @auth/express
```

```
yarn add @auth/express
```

```
bun add @auth/express
```

Installing `@auth/core` is not necessary, as a user you should never have to interact with `@auth/core`.

### Setup Environment[](#setup-environment)

The only environment variable that is mandatory is the `AUTH_SECRET`. This is a random value used by the library to encrypt tokens and email verification hashes. (See [Deployment](/getting-started/deployment) to learn more). You can generate one via the official [Auth.js CLI](https://cli.authjs.dev) running:

```
npx auth secret
```

This will also add it to your `.env` file, respecting the framework conventions (eg.: Next.js’ `.env.local`).

### Configure[](#configure)

Next, create the Auth.js config file and object. This is where you can control the behaviour of the library and specify custom authentication logic, adapters, etc. We recommend all frameworks to create an `auth.ts` file in the project. In this file we’ll pass in all the options to the framework specific initialization function and then export the route handler(s), signin and signout methods, and more.

You can name this file whatever you want and place it wherever you like, these are just conventions we’ve come up with.

Next.jsQwikSvelteKitExpress

1.  Start by creating a new `auth.ts` file at the root of your app with the following content.

./auth.ts

```
import NextAuth from "next-auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
})
```

2.  Add a Route Handler under `/app/api/auth/[...nextauth]/route.ts`.

💡

This file must be an App Router Route Handler, however, the rest of your app can stay under `page/` if you’d like.

./app/api/auth/\[...nextauth\]/route.ts

```
import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers
```

3.  Add optional Proxy to keep the session alive, this will update the session expiry every time its called.

As of Next.js 16, `middleware.ts` has been renamed to `proxy.ts`. If you are using an older version of Next.js, use `middleware.ts` with `export { auth as middleware }` instead.

./proxy.ts

```
export { auth as proxy } from "@/auth"
```

1.  Start by creating a new `plugin@auth.ts` file in your `src/routes` directory with the following content.

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [...],
  })
)
```

1.  Start by creating a new `auth.ts` file in your `src/` directory with the following content.

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
 
export const { handle } = SvelteKitAuth({
  providers: [],
})
```

2.  Re-export the `handle` method in SvelteKit’s `src/hooks.server.ts` file.

./src/hooks.server.ts

```
export { handle } from "./auth"
```

3.  That handle function adds an `auth()` method onto our `event.locals`, which is available in any `+layout.server.ts` or `+page.server.ts` file. Therefore, we can access the session in our `load` function like this.

./src/routes/+layout.server.ts

```
import type { LayoutServerLoad } from "./$types"
 
export const load: LayoutServerLoad = async (event) => {
  const session = await event.locals.auth()
 
  return {
    session,
  }
}
```

1.  Start by importing `ExpressAuth` and adding the handler to the auth route.

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import express from "express"
 
const app = express()
 
// If your app is served through a proxy
// trust the proxy to allow us to read the `X-Forwarded-*` headers
app.set("trust proxy", true)
app.use("/auth/*", ExpressAuth({ providers: [] }))
```

Note this creates the Auth.js API, but does not yet protect resources. Continue on to [protecting resources](/getting-started/session-management/protecting) for more details.

### Setup Authentication Methods[](#setup-authentication-methods)

With that, the basic setup is complete! Next we’ll setup the first authentication methods and fill out that `providers` array.

[Migrate to Better Auth](/getting-started/migrate-to-better-auth "Migrate to Better Auth")[Authentication](/getting-started/authentication "Authentication")
