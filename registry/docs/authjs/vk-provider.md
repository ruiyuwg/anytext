[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Vk

![](/img/providers/vk.svg)

# VK Provider

## Resources[](#resources)

-   [VK API documentation](https://vk.com/dev/first_guide)
-   [VK App configuration](https://vk.com/apps?act=manage)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/vk
```

```
https://example.com/auth/callback/vk
```

```
https://example.com/auth/callback/vk
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/vk.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_VK_ID
AUTH_VK_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Vk from "next-auth/providers/vk"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Vk],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Vk from "@auth/qwik/providers/vk"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Vk],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Vk from "@auth/sveltekit/providers/vk"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Vk],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Vk from "@auth/express/providers/vk"
 
app.use("/auth/*", ExpressAuth({ providers: [Vk] }))
```

### Notes[](#notes)

-   By default the provider uses 5.126 version of the API. See [https://vk.com/dev/versions](https://vk.com/dev/versions) for more info. If you want to use a different version, you can pass it to provider’s options object:

./auth.ts

```
const apiVersion = "5.126"
 
export const { handlers, auth, signin, signout } = NextAuth({
  providers: [
    Vk({
      accessTokenUrl: `https://oauth.vk.com/access_token?v=${apiVersion}`,
      requestTokenUrl: `https://oauth.vk.com/access_token?v=${apiVersion}`,
      authorizationUrl: `https://oauth.vk.com/authorize?response_type=code&v=${apiVersion}`,
      profileUrl: `https://api.vk.com/method/users.get?fields=photo_100&v=${apiVersion}`,
    }),
  ],
})
```

[Vipps MobilePay](/getting-started/providers/vipps-mobilepay "Vipps MobilePay")[Webex](/getting-started/providers/webex "Webex")
