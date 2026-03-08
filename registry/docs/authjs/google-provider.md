[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Google

![](/img/providers/google.svg)

# Google Provider

## Resources[](#resources)

-   [Google OAuth documentation](https://developers.google.com/identity/protocols/oauth2)
-   [Google OAuth Configuration](https://console.developers.google.com/apis/credentials)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/google
```

```
https://example.com/auth/callback/google
```

```
https://example.com/auth/callback/google
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/google.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_GOOGLE_ID
AUTH_GOOGLE_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

@/auth.ts

```
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Google from "@auth/qwik/providers/google"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Google],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Google],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Google from "@auth/express/providers/google"
 
app.use("/auth/*", ExpressAuth({ providers: [Google] }))
```

## Notes[](#notes)

### Refresh Token[](#refresh-token)

Google only provides Refresh Token to an application the first time a user signs in.

To force Google to re-issue a Refresh Token, the user needs to remove the application from their account and sign in again: [https://myaccount.google.com/permissions](https://myaccount.google.com/permissions)

Alternatively, you can also pass options in the `params` object of `authorization` which will force the Refresh Token to always be provided on sign in, however this will ask all users to confirm if they wish to grant your application access every time they sign in.

If you need access to the RefreshToken or AccessToken for a Google account and you are not using a database to persist user accounts, this may be something you need to do.

./auth.ts

```
import Google from "next-auth/providers/google"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
})
```

For more information on exchanging a code for an access token and refresh token see the [Google OAuth documentation](https://developers.google.com/identity/openid-connect/openid-connect#exchangecode).

### Email Verified[](#email-verified)

Google also returns a `email_verified` boolean property in the OAuth profile.

You can use this property to restrict access to people with verified accounts at a particular domain.

@/auth.ts

```
export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@example.com")
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },
})
```

[GitLab](/getting-started/providers/gitlab "GitLab")[Hubspot](/getting-started/providers/hubspot "Hubspot")
