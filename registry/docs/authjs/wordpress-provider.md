[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")WordPress

![](/img/providers/wordpress.svg)

# WordPress Provider

## Resources[](#resources)

-   [WordPress OAuth documentation](https://developer.wordpress.com/docs/oauth2/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/wordpress
```

```
https://example.com/auth/callback/wordpress
```

```
https://example.com/auth/callback/wordpress
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/wordpress.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_WORDPRESS_ID
AUTH_WORDPRESS_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import WordPress from "next-auth/providers/wordpress"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [WordPress],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import WordPress from "@auth/qwik/providers/wordpress"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [WordPress],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import WordPress from "@auth/sveltekit/providers/wordpress"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [WordPress],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import WordPress from "@auth/express/providers/wordpress"
 
app.use("/auth/*", ExpressAuth({ providers: [WordPress] }))
```

[Wikimedia](/getting-started/providers/wikimedia "Wikimedia")[WorkOS](/getting-started/providers/workos "WorkOS")
