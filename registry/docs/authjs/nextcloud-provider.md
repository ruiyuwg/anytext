[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Nextcloud

![](/img/providers/nextcloud.svg)

# Nextcloud Provider

## Resources[](#resources)

-   [Nextcloud Documentation](https://docs.nextcloud.com/)
-   [Nextcloud OAuth 2](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/oauth2.html)
-   [Nextcloud Clients and Client APIs](https://docs.nextcloud.com/server/latest/developer_manual/client_apis/index.html)
-   [Nextcloud User provisioning API](https://docs.nextcloud.com/server/latest/admin_manual/configuration_user/user_provisioning_api.html)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/nextcloud
```

```
https://example.com/auth/callback/nextcloud
```

```
https://example.com/auth/callback/nextcloud
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/nextcloud.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_NEXTCLOUD_ID
AUTH_NEXTCLOUD_SECRET
AUTH_NEXTCLOUD_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

```
import NextAuth from "next-auth"
import Nextcloud from "next-auth/providers/nextcloud"
 
const response = await NextAuth({
  providers: [
    Nextcloud({
      clientId: process.env.AUTH_NEXTCLOUD_ID,
      clientSecret: process.env.AUTH_NEXTCLOUD_SECRET,
      issuer: process.env.AUTH_NEXTCLOUD_ISSUER,
    }),
  ],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Nextcloud from "@auth/qwik/providers/nextcloud"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Nextcloud({
        clientId: process.env.AUTH_NEXTCLOUD_ID,
        clientSecret: process.env.AUTH_NEXTCLOUD_SECRET,
        issuer: process.env.AUTH_NEXTCLOUD_ISSUER,
      }),
    ],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Nextcloud from "@auth/sveltekit/providers/nextcloud"
import {
  AUTH_NEXTCLOUD_ID,
  AUTH_NEXTCLOUD_SECRET,
  AUTH_NEXTCLOUD_ISSUER,
} from "$env/static/private"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Nextcloud({
      clientId: AUTH_NEXTCLOUD_ID,
      clientSecret: AUTH_NEXTCLOUD_SECRET,
      issuer: AUTH_NEXTCLOUD_ISSUER,
    }),
  ],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Nextcloud from "@auth/express/providers/nextcloud"
 
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [
      Nextcloud({
        clientId: AUTH_NEXTCLOUD_ID,
        clientSecret: AUTH_NEXTCLOUD_SECRET,
        issuer: AUTH_NEXTCLOUD_ISSUER,
      }),
    ],
  })
)
```

[Netsuite](/getting-started/providers/netsuite "Netsuite")[Nodemailer](/getting-started/providers/nodemailer "Nodemailer")
