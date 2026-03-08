[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Frontegg

![](/img/providers/frontegg.svg)

# Frontegg Provider

## Resources[](#resources)

-   [Frontegg documentation](https://docs.frontegg.com/docs/how-to-use-our-docs)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/frontegg
```

Qwik not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/frontegg.mdx).

```
https://example.com/auth/callback/frontegg
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/frontegg.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_FRONTEGG_ID
AUTH_FRONTEGG_SECRET
AUTH_FRONTEGG_ISSUER
```

### Configuration[](#configuration)

Follow these steps:

Log into the [Frontegg portal](https://portal.frontegg.com)

Add the required environment variables to your `.env.local` file.

```
# Environments > Your environment > Env settings
AUTH_FRONTEGG_ID="<Client ID>"
# Environments > Your environment > Env settings
AUTH_FRONTEGG_SECRET="<API KEY>"
# Environments > Your environment > Env settings > Domains > Domain name
AUTH_FRONTEGG_ISSUER="<https://[YOUR_SUBDOMAIN].frontegg.com>"
```

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Frontegg from "next-auth/providers/frontegg"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Frontegg],
})
```

Qwik not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/frontegg.mdx).

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Frontegg from "@auth/sveltekit/providers/frontegg"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Frontegg],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Frontegg from "@auth/express/providers/frontegg"
 
app.use("/auth/*", ExpressAuth({ providers: [Frontegg] }))
```

[Freshbooks](/getting-started/providers/freshbooks "Freshbooks")[Fusionauth](/getting-started/providers/fusionauth "Fusionauth")
