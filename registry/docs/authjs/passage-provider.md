[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Passage

![](/img/providers/passage.svg)

# Passage Provider

## Resources[](#resources)

-   [Passage OIDC documentation](https://docs.passage.id/hosted-login/oidc-client-configuration)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/passage
```

```
https://example.com/auth/callback/passage
```

```
https://example.com/auth/callback/passage
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/passage.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_PASSAGE_ID
AUTH_PASSAGE_SECRET
AUTH_PASSAGE_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Passage from "next-auth/providers/passage"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Passage],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Passage from "@auth/qwik/providers/passage"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Passage],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Passage from "@auth/sveltekit/providers/passage"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Passage],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Passage from "@auth/express/providers/passage"
 
app.use("/auth/*", ExpressAuth({ providers: [Passage] }))
```

[Osu](/getting-started/providers/osu "Osu")[Passkey](/getting-started/providers/passkey "Passkey")
