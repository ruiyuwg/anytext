[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Dribbble

![](/img/providers/dribbble.svg)

# Dribbble Provider

## Resources[](#resources)

-   [Dribbble API](https://developer.dribbble.com)
-   [Dribbble OAuth](https://developer.dribbble.com/v2/oauth/)
-   [Dribbble Applications](https://dribbble.com/account/applications/new)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/dribbble
```

```
https://example.com/auth/callback/dribbble
```

```
https://example.com/auth/callback/dribbble
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/dribbble.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_DRIBBBLE_ID
AUTH_DRIBBBLE_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Dribbble from "next-auth/providers/dribbble"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Dribbble],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Dribbble from "@auth/qwik/providers/dribbble"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Dribbble],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Dribbble from "@auth/sveltekit/providers/dribbble"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Dribbble],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Dribbble from "@auth/express/providers/dribbble"
 
app.use("/auth/*", ExpressAuth({ providers: [Dribbble] }))
```

### Notes[](#notes)

-   You can optionally set the scope to `public upload` for more advanced scenarios. If omitted, the default `public` scope will be used for authentication purposes.

[Discord](/getting-started/providers/discord "Discord")[Dropbox](/getting-started/providers/dropbox "Dropbox")
