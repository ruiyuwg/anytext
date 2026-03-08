[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Salesforce

![](/img/providers/salesforce.svg)

# Salesforce Provider

## Resources[](#resources)

-   [Salesforce OAuth documentation](https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm&type=5)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/salesforce
```

```
https://example.com/auth/callback/salesforce
```

```
https://example.com/auth/callback/salesforce
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/salesforce.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_SALESFORCE_ID
AUTH_SALESFORCE_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Salesforce from "next-auth/providers/salesforce"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Salesforce],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Salesforce from "@auth/qwik/providers/salesforce"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Salesforce],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Salesforce from "@auth/sveltekit/providers/salesforce"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Salesforce],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Salesforce from "@auth/express/providers/salesforce"
 
app.use("/auth/*", ExpressAuth({ providers: [Salesforce] }))
```

[Sailpoint](/getting-started/providers/sailpoint "Sailpoint")[Sendgrid](/getting-started/providers/sendgrid "Sendgrid")
