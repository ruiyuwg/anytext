[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Line

![](/img/providers/line.svg)

# Line Provider

## Resources[](#resources)

-   [LINE Login documentation](https://developers.line.biz/en/docs/line-login/integrate-line-login/)
-   [LINE app console](https://developers.line.biz/console/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/line
```

```
https://example.com/auth/callback/line
```

```
https://example.com/auth/callback/line
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/line.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_LINE_ID
AUTH_LINE_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Line from "next-auth/providers/line"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Line],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Line from "@auth/qwik/providers/line"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Line],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Line from "@auth/sveltekit/providers/line"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Line],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Line from "@auth/express/providers/line"
 
app.use("/auth/*", ExpressAuth({ providers: [Line] }))
```

Create a provider and a LINE login channel at [https://developers.line.biz/console/](https://developers.line.biz/console/). In the settings of the channel under LINE Login, activate web app and configure your callback URL as defined above.

### Notes[](#notes)

-   To retrieve email address, you need to apply for Email address permission. Open [Line Developer Console](https://developers.line.biz/console/), go to your Login Channel. Scroll down bottom to find **OpenID Connect** -> **Email address permission**. Click **Apply** and follow the instruction.

[Keycloak](/getting-started/providers/keycloak "Keycloak")[Linkedin](/getting-started/providers/linkedin "Linkedin")
