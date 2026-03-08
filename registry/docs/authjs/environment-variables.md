[Guides](/guides/debugging "Guides")Environment Variables

# Environment variables

## Auth secret[](#auth-secret)

Next.jsQwikSvelteKitExpress

.env.local

```
AUTH_SECRET="This is an example"
```

.env

```
AUTH_SECRET="This is an example"
```

.env

```
AUTH_SECRET="This is an example"
```

.env

```
AUTH_SECRET="This is an example"
```

`AUTH_SECRET` is a random token used by the library to encrypt tokens and email verification hashes, and it’s mandatory to keep things secure (See [Deployment](/getting-started/deployment) to learn more). You can use the CLI to generate an auth secret:

npmpnpmyarnbun

```
npm exec auth secret
```

```
pnpm exec auth secret
```

```
yarn auth secret
```

```
bunx auth secret
```

## Environment Variable Inference[](#environment-variable-inference)

Auth.js is automatically configured to pick the right environment variables for `clientId` and `clientSecret` when using an [official OAuth provider](/getting-started/authentication/oauth).

The shape of these variables in your `.env` files should always follow the same pattern:

```
AUTH_[PROVIDER]_ID=
AUTH_[PROVIDER]_SECRET=
```

For example if we’re using the Google, Twitter and GitHub providers, your `.env` file would look something like this.

```
# Google
AUTH_GOOGLE_ID=123
AUTH_GOOGLE_SECRET=123
 
# Twitter
AUTH_TWITTER_ID=123
AUTH_TWITTER_SECRET=123
 
# GitHub
AUTH_GITHUB_ID=123
AUTH_GITHUB_SECRET=123
```

Then in your Auth.js configuration file, the `provider` array is simplified to this.

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Twitter from "next-auth/providers/twitter"
import GitHub from "next-auth/providers/github"
 
export const { handlers, auth } = NextAuth({
  providers: [Google, Twitter, GitHub],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Google from "@auth/qwik/providers/google"
import Twitter from "@auth/qwik/providers/twitter"
import GitHub from "@auth/qwik/providers/github"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Google, Twitter, GitHub],
  })
)
```

./auth.ts

```
import SvelteKitAuth from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"
import Twitter from "@auth/sveltekit/providers/twitter"
import GitHub from "@auth/sveltekit/providers/github"
 
export const { handle } = SvelteKitAuth({
  providers: [Google, Twitter, GitHub],
})
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/guides/environment-variables.mdx).

If for some reason you want to name the variables differently:

```
# Google
AUTH_WEBAPP_GOOGLE_CLIENT_ID=123
AUTH_WEBAPP_GOOGLE_CLIENT_SECRET=123
```

Then you will need to manually reference them in the config:

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_WEBAPP_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_WEBAPP_GOOGLE_CLIENT_SECRET,
    }),
  ],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Google from "@auth/qwik/providers/google"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Google({
        clientId: import.meta.env.AUTH_WEBAPP_GOOGLE_CLIENT_ID,
        clientSecret: import.meta.env.AUTH_WEBAPP_GOOGLE_CLIENT_SECRET,
      }),
    ],
  })
)
```

./src/auth.ts

```
import SvelteKitAuth from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"
import { env } from "$env/dynamic/private"
 
export const { handle } = SvelteKitAuth({
  providers: [
    Google({
      clientId: env.AUTH_WEBAPP_GOOGLE_CLIENT_ID,
      clientSecret: env.AUTH_WEBAPP_GOOGLE_CLIENT_SECRET,
    }),
  ],
})
```

src/hooks.server.ts

```
export { handle } from "./auth"
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/guides/environment-variables.mdx).

[Custom Error](/guides/pages/error "Custom Error")[Extending the Session](/guides/extending-the-session "Extending the Session")
