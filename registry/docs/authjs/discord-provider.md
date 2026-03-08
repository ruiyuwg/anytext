[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Discord

![](/img/providers/discord.svg)

# Discord Provider

## Resources[](#resources)

-   [Discord OAuth documentation](https://discord.com/developers/docs/topics/oauth2)
-   [Discord OAuth apps](https://discord.com/developers/applications)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/discord
```

```
https://example.com/auth/callback/discord
```

```
https://example.com/auth/callback/discord
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/discord.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_DISCORD_ID
AUTH_DISCORD_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Discord],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Discord from "@auth/qwik/providers/discord"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Discord],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Discord from "@auth/sveltekit/providers/discord"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Discord],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Discord from "@auth/express/providers/discord"
 
app.use("/auth/*", ExpressAuth({ providers: [Discord] }))
```

[Descope](/getting-started/providers/descope "Descope")[Dribbble](/getting-started/providers/dribbble "Dribbble")
