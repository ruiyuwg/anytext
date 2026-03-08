[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Linkedin

![](/img/providers/linkedin.svg)

# LinkedIn Provider

## Resources[](#resources)

-   [LinkedIn OAuth documentation](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow)
-   [LinkedIn app console](https://www.linkedin.com/developers/apps/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/linkedin
```

```
https://example.com/auth/callback/linkedin
```

```
https://example.com/auth/callback/linkedin
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/linkedin.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_LINKEDIN_ID
AUTH_LINKEDIN_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import LinkedIn from "next-auth/providers/linkedin"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [LinkedIn],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import LinkedIn from "@auth/qwik/providers/linkedin"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [LinkedIn],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import LinkedIn from "@auth/sveltekit/providers/linkedin"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [LinkedIn],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import LinkedIn from "@auth/express/providers/linkedin"
 
app.use("/auth/*", ExpressAuth({ providers: [LinkedIn] }))
```

[Line](/getting-started/providers/line "Line")[Logto](/getting-started/providers/logto "Logto")
