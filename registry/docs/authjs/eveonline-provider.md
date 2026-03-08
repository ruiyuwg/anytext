[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Eveonline

![](/img/providers/eveonline.svg)

# EVEOnline Provider

## Resources[](#resources)

-   [EveOnline OAuth documentation](https://developers.eveonline.com/blog/article/sso-to-authenticated-calls)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/eveonline
```

```
https://example.com/auth/callback/eveonline
```

```
https://example.com/auth/callback/eveonline
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/eveonline.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_EVEONLINE_ID
AUTH_EVEONLINE_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import EveOnline from "next-auth/providers/eve-online"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [EveOnline],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import EveOnline from "@auth/qwik/providers/eve-online"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [EveOnline],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import EveOnline from "@auth/sveltekit/providers/eve-online"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [EveOnline],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import EveOnline from "@auth/express/providers/eve-online"
 
app.use("/auth/*", ExpressAuth({ providers: [EveOnline] }))
```

### Notes[](#notes)

-   When creating your application, make sure to select `Authentication & API Access` as the connection type. Also ensure that the `publicData` scope is selected.
    
-   If using JWT for the session, you can add the `CharacterID` to the JWT and session. For example:
    

```
const AuthConfig = {
  callbacks: {
    jwt({ token, profile }) {
      if (profile) {
        token.characterId = profile.CharacterID
      }
      return token
    },
    session({ session, token }) {
      session.user.characterId = token.characterId
      return session
    },
  },
}
```

[Duende Identity Server6](/getting-started/providers/duende-identity-server6 "Duende Identity Server6")[Facebook](/getting-started/providers/facebook "Facebook")
