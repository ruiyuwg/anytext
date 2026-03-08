[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")United Effects

![](/img/providers/united-effects.svg)

# United Effects Provider

## Resources[](#resources)

-   [UnitedEffects Auth.js documentation](https://docs.unitedeffects.com/integrations/nextauthjs)”,

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/united-effects
```

```
https://example.com/auth/callback/united-effects
```

```
https://example.com/auth/callback/united-effects
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/united-effects.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_UNITEDEFFECTS_ID
AUTH_UNITEDEFFECTS_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import UnitedEffects from "next-auth/providers/united-effects"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [UnitedEffects],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import UnitedEffects from "@auth/qwik/providers/united-effects"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [UnitedEffects],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import UnitedEffects from "@auth/sveltekit/providers/united-effects"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [UnitedEffects],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import UnitedEffects from "@auth/express/providers/united-effects"
 
app.use("/auth/*", ExpressAuth({ providers: [UnitedEffects] }))
```

### Notes[](#notes)

-   `issuer` should be the fully qualified URL including your Auth Group ID – e.g. `https://auth.unitedeffects.com/YQpbQV5dbW-224dCovz-3`

[Twitter](/getting-started/providers/twitter "Twitter")[Vipps MobilePay](/getting-started/providers/vipps-mobilepay "Vipps MobilePay")
