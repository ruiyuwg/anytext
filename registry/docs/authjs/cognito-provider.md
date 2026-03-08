[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Cognito

![](/img/providers/cognito.svg)

# Cognito Provider

## Resources[](#resources)

-   [Cognito Portal](https://console.aws.amazon.com/cognito/v2/home)
-   [Cognito OAuth documentation](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-userpools-server-contract-reference.html)
-   [Cognito Hosted Domain](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-assign-domain.html)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/cognito
```

```
https://example.com/auth/callback/cognito
```

```
https://example.com/auth/callback/cognito
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/cognito.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_COGNITO_ID
AUTH_COGNITO_SECRET
AUTH_COGNITO_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Cognito from "next-auth/providers/cognito"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Cognito],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Cognito from "@auth/qwik/providers/cognito"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Cognito],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Cognito from "@auth/sveltekit/providers/cognito"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Cognito],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Cognito from "@auth/express/providers/cognito"
 
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [Cognito],
  })
)
```

### Notes[](#notes)

You need to select your AWS region to go the the Cognito dashboard.

The issuer is a URL, that looks like this: `https://cognito-idp.{region} .amazonaws.com/{PoolId}`, where `PoolId` is from General Settings in Cognito, not to be confused with the App Client ID.

Before you can set these settings, you must set up an Amazon Cognito hosted domain. The setting can be found in `App Client/Edit Hosted UI`.

⚠️

Make sure you select all the appropriate client settings or the OAuth flow will not work.

[Click Up](/getting-started/providers/click-up "Click Up")[Coinbase](/getting-started/providers/coinbase "Coinbase")
