[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Mastodon

![](/img/providers/mastodon.svg)

# Mastodon Provider

## Resources[](#resources)

-   [Mastodon OAuth documentation](https://docs.joinmastodon.org/client/token/)
-   [Mastodon OAuth Configuration](https://mastodon.social/settings/applications)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/mastodon
```

```
https://example.com/auth/callback/mastodon
```

```
https://example.com/auth/callback/mastodon
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/mastodon.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_MASTODON_ID
AUTH_MASTODON_SECRET
AUTH_MASTODON_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Mastodon from "next-auth/providers/mastodon"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Mastodon],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Mastodon from "@auth/qwik/providers/mastodon"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Mastodon],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Mastodon from "@auth/sveltekit/providers/mastodon"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Mastodon],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Mastodon from "@auth/express/providers/mastodon"
 
app.use("/auth/*", ExpressAuth({ providers: [Mastodon] }))
```

### Notes[](#notes)

-   Due to the way Mastodon is architected, you have to define the `issuer` to be the instance URL against which you want to authenticate

[Mailru](/getting-started/providers/mailru "Mailru")[Mattermost](/getting-started/providers/mattermost "Mattermost")
