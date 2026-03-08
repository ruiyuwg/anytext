[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")BankID Norge

![](/img/providers/bankid-no.svg)

# BankID Norway Provider

[BankID Norge](https://bankid.no) is a widespread login method in Norway, used by banks, government agencies, and other organizations. This provider allows users to sign in with BankID Norway.

## Resources[](#resources)

-   [BankID Norway documentation](https://confluence.bankidnorge.no/confluence/pdoidcl)
-   [BankID Testing](https://developer.bankid.no/bankid-with-biometrics/testing)
-   [BankID Public Testing discovery endpoint](https://auth.current.bankid.no/auth/realms/current/.well-known/openid-configuration)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/bankid-no
```

```
https://example.com/auth/callback/bankid-no
```

```
https://example.com/auth/callback/bankid-no
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/bankid-no.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_BANKID_NO_ID
AUTH_BANKID_NO_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import BankIDNorway from "next-auth/providers/bankid-no"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [BankIDNorway],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import BankIDNorway from "@auth/qwik/providers/bankid-no"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [BankIDNorway],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import BankIDNorway from "@auth/sveltekit/providers/bankid-no"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [BankIDNorway],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import BankIDNorway from "@auth/express/providers/bankid-no"
 
app.use("/auth/*", ExpressAuth({ providers: [BankIDNorway] }))
```

[Azure Devops](/getting-started/providers/azure-devops "Azure Devops")[Battlenet](/getting-started/providers/battlenet "Battlenet")
