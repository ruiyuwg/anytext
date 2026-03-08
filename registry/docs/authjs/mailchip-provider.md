[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Mailchimp

![](/img/providers/mailchimp.svg)

# Mailchip Provider

## Resources[](#resources)

-   [Mailchimp OAuth documentation](https://admin.mailchimp.com/account/oauth2/client/)
-   [Mailchimp documentation: Access user data](https://mailchimp.com/developer/marketing/guides/access-user-data-oauth-2/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/mailchimp
```

```
https://example.com/auth/callback/mailchimp
```

```
https://example.com/auth/callback/mailchimp
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/mailchimp.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_MAILCHIMP_ID
AUTH_MAILCHIMP_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import MailChimp from "next-auth/providers/mailchimp"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [MailChimp],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import MailChimp from "@auth/qwik/providers/mailchimp"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [MailChimp],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import MailChimp from "@auth/sveltekit/providers/mailchimp"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [MailChimp],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import MailChimp from "@auth/express/providers/mailchimp"
 
app.use("/auth/*", ExpressAuth({ providers: [MailChimp] }))
```

[Loops](/getting-started/providers/loops "Loops")[Mailgun](/getting-started/providers/mailgun "Mailgun")
