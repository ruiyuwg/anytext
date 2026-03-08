[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Yandex

![](/img/providers/yandex.svg)

# Yandex Provider

## Resources[](#resources)

-   [Yandex - Creating an OAuth app](https://yandex.com/dev/id/doc/en/register-client#create)
-   [Yandex - Manage OAuth apps](https://oauth.yandex.com/)
-   [Yandex - OAuth documentation](https://yandex.com/dev/id/doc/en/)
-   [Learn more about OAuth](https://authjs.dev/concepts/oauth)
-   [Source code](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/yandex.ts)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/yandex
```

```
https://example.com/auth/callback/yandex
```

```
https://example.com/auth/callback/yandex
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/yandex.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_YANDEX_ID
AUTH_YANDEX_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Yandex from "next-auth/providers/yandex"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Yandex],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Yandex from "@auth/qwik/providers/yandex"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Yandex],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Yandex from "@auth/sveltekit/providers/yandex"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Yandex],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Yandex from "@auth/express/providers/yandex"
 
app.use("/auth/*", ExpressAuth({ providers: [Yandex] }))
```

[WorkOS](/getting-started/providers/workos "WorkOS")[Zitadel](/getting-started/providers/zitadel "Zitadel")
