[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")GitLab

![](/img/providers/gitlab.svg)

# GitLab Provider

## Resources[](#resources)

-   [GitLab OAuth documentation](https://docs.gitlab.com/ee/api/oauth2.html)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/gitlab
```

```
https://example.com/auth/callback/gitlab
```

```
https://example.com/auth/callback/gitlab
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/gitlab.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_GITLAB_ID
AUTH_GITLAB_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import GitLab from "next-auth/providers/gitlab"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    // Default (gitlab.com)
    GitLab,
    // Self-hosted example
    GitLab({
      baseUrl: "https://gitlab.example.com",
    }),
  ],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import GitLab from "@auth/qwik/providers/gitlab"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      GitLab,
      GitLab({
        instance: {
          baseUrl: "https://gitlab.example.com"
        }
      })
    ],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import GitLab from "@auth/sveltekit/providers/gitlab"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    GitLab,
    GitLab({
      baseUrl: "https://gitlab.example.com",
    }),
  ],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import GitLab from "@auth/express/providers/gitlab"
 
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [
      GitLab,
      GitLab({
        baseUrl: "https://gitlab.example.com",
      }),
    ],
  })
)
```

### Notes[](#notes)

-   Enable the `read_user` option in scope if you want to save the users email address on sign up.

[GitHub](/getting-started/providers/github "GitHub")[Google](/getting-started/providers/google "Google")
