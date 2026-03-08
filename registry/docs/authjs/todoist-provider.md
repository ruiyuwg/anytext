[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Todoist

![](/img/providers/todoist.svg)

# Todoist Provider

## Resources[](#resources)

-   [Todoist OAuth documentation](https://developer.todoist.com/guides/#oauth)
-   [Todoist configuration](https://developer.todoist.com/appconsole.html)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/todoist
```

```
https://example.com/auth/callback/todoist
```

```
https://example.com/auth/callback/todoist
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/todoist.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_TODOIST_ID
AUTH_TODOIST_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Todoist from "next-auth/providers/todoist"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Todoist],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Todoist from "@auth/qwik/providers/todoist"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Todoist],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Todoist from "@auth/sveltekit/providers/todoist"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Todoist],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Todoist from "@auth/express/providers/todoist"
 
app.use("/auth/*", ExpressAuth({ providers: [Todoist] }))
```

[Tiktok](/getting-started/providers/tiktok "Tiktok")[Trakt](/getting-started/providers/trakt "Trakt")
