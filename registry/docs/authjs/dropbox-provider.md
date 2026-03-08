[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Dropbox

![](/img/providers/dropbox.svg)

# Dropbox Provider

## Resources[](#resources)

-   [Dropbox OAuth documentation](https://developers.dropbox.com/oauth-guide)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/dropbox
```

```
https://example.com/auth/callback/dropbox
```

```
https://example.com/auth/callback/dropbox
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/dropbox.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_DROPBOX_ID
AUTH_DROPBOX_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Dropbox from "next-auth/providers/dropbox"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Dropbox],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Dropbox from "@auth/qwik/providers/dropbox"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Dropbox],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Dropbox from "@auth/sveltekit/providers/dropbox"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Dropbox],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Dropbox from "@auth/express/providers/dropbox"
 
app.use("/auth/*", ExpressAuth({ providers: [Dropbox] }))
```

[Dribbble](/getting-started/providers/dribbble "Dribbble")[Duende Identity Server6](/getting-started/providers/duende-identity-server6 "Duende Identity Server6")
