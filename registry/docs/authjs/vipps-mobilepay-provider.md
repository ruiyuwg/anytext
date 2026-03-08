[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Vipps MobilePay

![](/img/providers/vipps-mobilepay.svg)

# Vipps MobilePay Provider

[Vipps MobilePay](https://vippsmobilepay.com/) is a widespread mobile payment application for mobile in Norway, Sweden, Denmark and Finland. The brand is split, where you have Vipps in Norway and Sweden, and MobilePay in Denmark and Finland, but both brands/apps are using the same API.

## Resources[](#resources)

-   [Vipps MobilePay login documentation](https://developer.vippsmobilepay.com/docs/APIs/login-api/)
-   [Official Vipps MobilePay Buttons](https://developer.vippsmobilepay.com/docs/knowledge-base/design-guidelines/buttons/)
-   [Vipps MobilePay Public Testing discovery endpoint](https://apitest.vipps.no/access-management-1.0/access/.well-known/openid-configuration)
-   [Vipps MobilePay Public Production discovery endpoint](https://api.vipps.no/access-management-1.0/access/.well-known/openid-configuration)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/vipps
```

```
https://example.com/auth/callback/vipps
```

```
https://example.com/auth/callback/vipps
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/vipps-mobilepay.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_VIPPS_ID
AUTH_VIPPS_SECRET
```

### Test API[](#test-api)

To use the test mode, you need to override the issuer with the test API endpoint.

```
Vipps({ issuer: "https://apitest.vipps.no/access-management-1.0/access/" })
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Vipps from "next-auth/providers/vipps"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Vipps],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Vipps from "@auth/qwik/providers/vipps"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Vipps],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Vipps from "@auth/sveltekit/providers/vipps"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Vipps],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Vipps from "@auth/express/providers/vipps"
 
app.use("/auth/*", ExpressAuth({ providers: [Vipps] }))
```

[United Effects](/getting-started/providers/united-effects "United Effects")[Vk](/getting-started/providers/vk "Vk")
