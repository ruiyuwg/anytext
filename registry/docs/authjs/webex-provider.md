[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Webex

![](/img/providers/webex.svg)

# Webex Provider

## Resources[](#resources)

-   [Webex OAuth 2.0 Integration Guide](https://developer.webex.com/docs/integrations)
-   [Login with Webex](https://developer.webex.com/docs/login-with-webex)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/webex
```

```
https://example.com/auth/callback/webex
```

```
https://example.com/auth/callback/webex
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/webex.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_WEBEX_ID
AUTH_WEBEX_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Webex from "next-auth/providers/webex"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Webex],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Webex from "@auth/qwik/providers/webex"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Webex],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Webex from "@auth/sveltekit/providers/webex"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Webex],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Webex from "@auth/express/providers/webex"
 
app.use("/auth/*", ExpressAuth({ providers: [Webex] }))
```

### Notes[](#notes)

-   The returned user profile from Webex when using the profile callback. Please refer to [People - Get My Own Details](https://developer.webex.com/docs/api/v1/people/get-my-own-details) on Webex Developer portal for additional fields. Returned fields may vary depending on the user’s role, the OAuth integration’s scope, and the organization the OAuth integration belongs to.

[Vk](/getting-started/providers/vk "Vk")[Wikimedia](/getting-started/providers/wikimedia "Wikimedia")
