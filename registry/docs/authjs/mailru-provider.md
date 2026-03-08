[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Mailru

![](/img/providers/mailru.svg)

# Mailru Provider

## Resources[](#resources)

-   [Mailru OAuth documentation](https://o2.mail.ru/docs)
-   [Mailru app console](https://o2.mail.ru/app/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/mailru
```

```
https://example.com/auth/callback/mailru
```

```
https://example.com/auth/callback/mailru
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/mailru.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_MAILRU_ID
AUTH_MAILRU_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import MailRu from "next-auth/providers/mailru"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [MailRu],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import MailRu from "@auth/qwik/providers/mailru"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [MailRu],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import MailRu from "@auth/sveltekit/providers/mailru"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [MailRu],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import MailRu from "@auth/express/providers/mailru"
 
app.use("/auth/*", ExpressAuth({ providers: [MailRu] }))
```

[Mailgun](/getting-started/providers/mailgun "Mailgun")[Mastodon](/getting-started/providers/mastodon "Mastodon")
