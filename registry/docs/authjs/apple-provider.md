[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Apple

![](/img/providers/apple.svg)

# Apple Provider

## Resources[](#resources)

-   Sign in with Apple [Overview](https://developer.apple.com/sign-in-with-apple/get-started/)
-   Sign in with Apple [REST API](https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_rest_api)
-   [How to retrieve](https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_rest_api/authenticating_users_with_sign_in_with_apple#3383773) the user’s information from Apple ID servers

> **_NOTE:_** Apple currently does not support [RedirectProxyUrl](https://github.com/nextauthjs/next-auth/blob/3ec06842682a31e53fceabca701a362abda1e7dd/packages/core/src/lib/utils/providers.ts#L48) usage.

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/apple
```

```
https://example.com/auth/callback/apple
```

```
https://example.com/auth/callback/apple
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/apple.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_APPLE_ID
AUTH_APPLE_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import Apple from "next-auth/providers/apple"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Apple],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Apple from "@auth/qwik/providers/apple"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Apple],
  })
)
```

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Apple from "@auth/sveltekit/providers/apple"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Apple],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Apple from "@auth/express/providers/apple"
 
app.use("/auth/*", ExpressAuth({ providers: [Apple] }))
```

[42 School](/getting-started/providers/42-school "42 School")[Asgardeo](/getting-started/providers/asgardeo "Asgardeo")
