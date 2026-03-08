[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Keycloak

![](/img/providers/keycloak.svg)

# Keycloak Provider

## Resources[](#resources)

-   [Keycloak OIDC documentation](https://www.keycloak.org/docs/latest/server_admin/#_oidc_clients)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/keycloak
```

```
https://example.com/auth/callback/keycloak
```

```
https://example.com/auth/callback/keycloak
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/keycloak.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_KEYCLOAK_ID
AUTH_KEYCLOAK_SECRET
AUTH_KEYCLOAK_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Keycloak from "next-auth/providers/keycloak"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Keycloak],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Keycloak from "@auth/qwik/providers/keycloak"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Keycloak],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Keycloak from "@auth/sveltekit/providers/keycloak"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Keycloak],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Keycloak from "@auth/express/providers/keycloak"
 
app.use("/auth/*", ExpressAuth({ providers: [Keycloak] }))
```

Enable the “Client Authentication” option to retrieve your client secret in the Credentials tab.

Prior to v20, create an `openid-connect` client in Keycloak with “confidential” as the “Access Type”.

-   Issuer should include the realm – e.g. `https://my-keycloak-domain.com/realms/My_Realm`

[Kakao](/getting-started/providers/kakao "Kakao")[Line](/getting-started/providers/line "Line")
