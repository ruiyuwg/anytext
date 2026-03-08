[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Bitbucket

![](/img/providers/bitbucket.svg)

# Bitbucket Provider

## Resources[](#resources)

-   [Using OAuth on Bitbucket Cloud](https://support.atlassian.com/bitbucket-cloud/docs/use-oauth-on-bitbucket-cloud/)
-   [Bitbucket REST API Authentication](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication)
-   [Bitbucket REST API Users](https://developer.atlassian.com/cloud/bitbucket/rest/api-group-users/#api-group-users)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/bitbucket
```

```
https://example.com/auth/callback/bitbucket
```

```
https://example.com/auth/callback/bitbucket
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/bitbucket.mdx).

### Environment Variables[](#environment-variables)

Next.jsQwikSvelteKitExpress

.env.local

```
AUTH_BITBUCKET_ID
AUTH_BITBUCKET_SECRET
```

.env

```
AUTH_BITBUCKET_ID
AUTH_BITBUCKET_SECRET
```

.env

```
AUTH_BITBUCKET_ID
AUTH_BITBUCKET_SECRET
```

.env

```
AUTH_BITBUCKET_ID
AUTH_BITBUCKET_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

@/auth.ts

```
import NextAuth from "next-auth"
import Bitbucket from "next-auth/providers/bitbucket"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Bitbucket],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Bitbucket from "@auth/qwik/providers/bitbucket"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Bitbucket],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Bitbucket from "@auth/sveltekit/providers/bitbucket"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Bitbucket],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Bitbucket from "@auth/express/providers/bitbucket"
 
app.use("/auth/*", ExpressAuth({ providers: [Bitbucket] }))
```

[Beyondidentity](/getting-started/providers/beyondidentity "Beyondidentity")[Box](/getting-started/providers/box "Box")
