[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Click Up

![](/img/providers/clickup.svg)

# Click-Up Provider

## Resources[](#resources)

-   [ClickUp documentation: Authorizing OAuth Apps](https://clickup.com/api/developer-portal/authentication#oauth-flow)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/clickup
```

```
https://example.com/auth/callback/clickup
```

```
https://example.com/auth/callback/clickup
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/click-up.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_CLICKUP_ID
AUTH_CLICKUP_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import ClickUp from "next-auth/providers/click-up"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [ClickUp],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import ClickUp from "@auth/qwik/providers/click-up"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [ClickUp],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import ClickUp from "@auth/sveltekit/providers/click-up"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [ClickUp],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import ClickUp from "@auth/express/providers/click-up"
 
app.use("/auth/*", ExpressAuth({ providers: [ClickUp] }))
```

[Bungie](/getting-started/providers/bungie "Bungie")[Cognito](/getting-started/providers/cognito "Cognito")
