[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")WorkOS

![](/img/providers/workos.svg)

# WorkOS Provider

## Resources[](#resources)

-   [WorkOS SSO OAuth documentation](https://workos.com/docs/reference/sso)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/workos
```

```
https://example.com/auth/callback/workos
```

```
https://example.com/auth/callback/workos
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/workos.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_WORKOS_ID
AUTH_WORKOS_SECRET
```

WorkOS also requires you to pass in your `connection` ID to the provider.

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import WorkOS from "next-auth/providers/workos"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [WorkOS({ connection: "conn_abc123" })],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import WorkOS from "@auth/qwik/providers/workos"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [WorkOS({ connection: "conn_abc123" })],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import WorkOS from "@auth/sveltekit/providers/workos"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [WorkOS({ connection: "conn_abc123" })],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import WorkOS from "@auth/express/providers/workos"
 
app.use(
  "/auth/*",
  ExpressAuth({ providers: [WorkOS({ connection: "conn_abc123" })] })
)
```

[WordPress](/getting-started/providers/wordpress "WordPress")[Yandex](/getting-started/providers/yandex "Yandex")
