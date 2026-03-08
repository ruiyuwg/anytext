[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")GitHub

![](/img/providers/github.svg)

# GitHub Provider

## Resources[](#resources)

-   [GitHub - Creating an OAuth App](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)
-   [GitHub - Authorizing OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)
-   [GitHub - Configure your GitHub OAuth Apps](https://github.com/settings/developers)
-   [Learn more about OAuth](https://authjs.dev/concepts/oauth)
-   [Source code](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/github.ts)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/github
```

```
https://example.com/auth/callback/github
```

```
https://example.com/auth/callback/github
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/github.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_GITHUB_ID
AUTH_GITHUB_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import GitHub from "@auth/qwik/providers/github"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [GitHub],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [GitHub],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import GitHub from "@auth/express/providers/github"
 
app.use("/auth/*", ExpressAuth({ providers: [GitHub] }))
```

[Fusionauth](/getting-started/providers/fusionauth "Fusionauth")[GitLab](/getting-started/providers/gitlab "GitLab")
