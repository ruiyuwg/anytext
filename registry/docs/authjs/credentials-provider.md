[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Credentials

# Credentials Provider

The Credentials provider allows you to handle signing in with arbitrary credentials, such as a username and password, domain, two factor authentication or hardware device (e.g. YubiKey U2F / FIDO).

It is intended to support use cases where you have an existing system you need to authenticate users against, and therefore users authenticated in this manner are not persisted in the database.

## Resources[](#resources)

-   [Client-side Input Validation Example](/getting-started/authentication/credentials#verifying-data-with-zod)

## Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ request }) {
        const response = await fetch(request)
        if (!response.ok) return null
        return (await response.json()) ?? null
      },
    }),
  ],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Credentials from "@auth/qwik/providers/credentials"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Credentials({
        credentials: {
          username: { label: "Username" },
          password: { label: "Password", type: "password" },
        },
        async authorize({ request }) {
          const response = await fetch(request)
          if (!response.ok) return null
          return (await response.json()) ?? null
        },
      }),
    ],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Credentials from "@auth/sveltekit/providers/credentials"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ request }) {
        const response = await fetch(request)
        if (!response.ok) return null
        return (await response.json()) ?? null
      },
    }),
  ],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express";
import Credentials from "@auth/express/providers/credentials";
 
app.use("/auth/*", ExpressAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ request }) {
        const response = await fetch(request);
        if (!response.ok) return null;
        return (await response.json()) ?? null;
      },
    }),
  ],
});
```

### Custom Error Messages[](#custom-error-messages)

You can throw a custom error in the `authorize` function to return a custom error message to the user.

@/auth.ts

```
import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password"
}
 
export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        throw new InvalidLoginError()
      },
    }),
  ],
})
```

You will then receive that custom error code in the query parameters of the signin page your user returns to after a failed login attempt, for example `https://app.company.com/auth/signin?error=CredentialsSignin&code=Invalid+identifier+or+password`.

⚠️

OAuth providers spend significant amounts of money, time, and engineering effort to build:

-   abuse detection (bot-protection, rate-limiting)
-   password management (password reset, credential stuffing, rotation)
-   data security (encryption/salting, strength validation)

and much more for authentication solutions. It is likely that your application would benefit from leveraging these battle-tested solutions rather than try to rebuild them from scratch.

If you’d still like to build password-based authentication for your application despite these risks, Auth.js gives you full control to do so.

[Coinbase](/getting-started/providers/coinbase "Coinbase")[Descope](/getting-started/providers/descope "Descope")
