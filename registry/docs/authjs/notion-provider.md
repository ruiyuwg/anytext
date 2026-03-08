[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Notion

![](/img/providers/notion.svg)

# Notion Provider

## Resources[](#resources)

-   [Notion documentation](https://developers.notion.com/docs)
-   [Notion Authorization documentation](https://developers.notion.com/docs/authorization)
-   [Notion Integrations](https://www.notion.so/my-integrations)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/notion
```

```
https://example.com/auth/callback/notion
```

```
https://example.com/auth/callback/notion
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/notion.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_NOTION_ID
AUTH_NOTION_SECRET
AUTH_NOTION_REDIRECT_URI
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Notion from "next-auth/providers/notion"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Notion({
      clientId: process.env.AUTH_NOTION_ID,
      clientSecret: process.env.AUTH_NOTION_SECRET,
      redirectUri: process.env.AUTH_NOTION_REDIRECT_URI,
    }),
  ],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Notion from "@auth/qwik/providers/notion"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Notion({
        clientId: import.meta.env.AUTH_NOTION_ID,
        clientSecret: import.meta.env.AUTH_NOTION_SECRET,
        redirectUri: import.meta.env.AUTH_NOTION_REDIRECT_URI,
      }),
    ],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Notion from "@auth/sveltekit/providers/notion"
import {
  AUTH_NOTION_ID,
  AUTH_NOTION_SECRET,
  AUTH_NOTION_REDIRECT_URI,
} from "$env/static/private"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Notion({
      clientId: AUTH_NOTION_ID,
      clientSecret: AUTH_NOTION_SECRET,
      redirectUri: AUTH_NOTION_REDIRECT_URI,
    }),
  ],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Notion from "@auth/express/providers/notion"
 
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [
      Notion({
        clientId: process.env.AUTH_NOTION_ID,
        clientSecret: process.env.AUTH_NOTION_SECRET,
        redirectUri: process.env.AUTH_NOTION_REDIRECT_URI,
      }),
    ],
  })
)
```

## Notes[](#notes)

-   You need to select “Public Integration” on the configuration page to get an `oauth_id` and `oauth_secret`. Private integrations do not provide these details.
-   You must provide a `clientId` and `clientSecret` to use this provider, as-well as a redirect URI (due to this being required by Notion endpoint to fetch tokens).

[Nodemailer](/getting-started/providers/nodemailer "Nodemailer")[Okta](/getting-started/providers/okta "Okta")
