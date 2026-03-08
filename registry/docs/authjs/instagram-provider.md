[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Instagram

![](/img/providers/instagram.svg)

# Instagram Provider

## Resources[](#resources)

-   [Instagram OAuth documentation](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started)
-   [Instagram OAuth apps](https://developers.facebook.com/apps/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/instagram
```

```
https://example.com/auth/callback/instagram
```

```
https://example.com/auth/callback/instagram
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/instagram.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_INSTAGRAM_ID
AUTH_INSTAGRAM_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Instagram from "next-auth/providers/instagram"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Instagram],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Instagram from "@auth/qwik/providers/instagram"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Instagram],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Instagram from "@auth/sveltekit/providers/instagram"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Instagram],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Instagram from "@auth/express/providers/instagram"
 
app.use("/auth/*", ExpressAuth({ providers: [Instagram] }))
```

### Notes[](#notes)

-   Email address is not returned by the Instagram API.
-   Instagram requires a callback URL to be configured in your Facebook app and Facebook requires you to use **https** even for localhost. In order to do that, you either need to [add an SSL to your localhost](https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/) or use a proxy such as [ngrok](https://ngrok.com/docs).

[Identity Server4](/getting-started/providers/identity-server4 "Identity Server4")[Kakao](/getting-started/providers/kakao "Kakao")
