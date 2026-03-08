[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Wikimedia

![](/img/providers/wikimedia.svg)

# Wikimedia Provider

## Resources[](#resources)

-   [Wikimedia OAuth documentation](https://www.mediawiki.org/wiki/Extension:OAuth)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/wikimedia
```

```
https://example.com/auth/callback/wikimedia
```

```
https://example.com/auth/callback/wikimedia
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/wikimedia.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_WIKIMEDIA_ID
AUTH_WIKIMEDIA_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Wikimedia from "next-auth/providers/wikimedia"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Wikimedia],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Wikimedia from "@auth/qwik/providers/wikimedia"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Wikimedia],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Wikimedia from "@auth/sveltekit/providers/wikimedia"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Wikimedia],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Wikimedia from "@auth/express/providers/wikimedia"
 
app.use("/auth/*", ExpressAuth({ providers: [Wikimedia] }))
```

-   Go to and accept the Consumer Registration doc: [https://meta.wikimedia.org/wiki/Special:OAuthConsumerRegistration](https://meta.wikimedia.org/wiki/Special:OAuthConsumerRegistration)
-   Request a new OAuth 2.0 consumer to get the `clientId` and `clientSecret`: [https://meta.wikimedia.org/wiki/Special:OAuthConsumerRegistration/propose/oauth2](https://meta.wikimedia.org/wiki/Special:OAuthConsumerRegistration/propose/oauth2)
    -   Add the following redirect URL into the console: `http://<your-next-app-url>/api/auth/callback/wikimedia`
    -   Do not check the box next to This consumer is only for **your username**
    -   Unless you explicitly need a larger scope, feel free to select the radio button labelled User identity verification only - no ability to read pages or act on the users behalf.

After registration, you can initially test your application only with your own Wikimedia account. You may have to wait several days for the application to be approved for it to be used by everyone.

### Notes[](#notes)

This provider also supports all Wikimedia projects:

-   Wikipedia
-   Wikidata
-   Wikibooks
-   Wiktionary
-   etc..

Please be aware that Wikimedia accounts do not have to have an associated email address. So you may want to add check if the user has an email address before allowing them to login.

[Webex](/getting-started/providers/webex "Webex")[WordPress](/getting-started/providers/wordpress "WordPress")
