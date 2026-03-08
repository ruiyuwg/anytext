[Getting Started](/getting-started "Getting Started")[Session Management](/getting-started/session-management/login "Session Management")Custom Pages

# Custom Pages

To enable custom pages add the following to your Auth.js configuration. In the `pages` object, the key is the type of page and the value is the path/route at which the page is located. Please make sure you actually have a page at the specified route.

Next.jsQwikSvelteKitExpress

./auth.ts

```
import { NextAuth } from "next-auth"
import GitHub from "next-auth/providers/github"
 
// Define your configuration in a separate variable and pass it to NextAuth()
// This way we can also 'export const config' for use later
export const config = {
  providers: [GitHub],
  pages: {
    signIn: "/login",
  },
}
 
export const { signIn, signOut, handle } = NextAuth(config)
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import GitHub from "@auth/qwik/providers/github"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [GitHub],
    pages: {
      signIn: "/login",
    },
  })
)
```

src/auth.ts

```
import SvelteKitAuth from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
import type { Provider } from "@auth/sveltekit/providers"
 
const providers: Provider[] = [GitHub]
 
// Export this map of provider details to use in the sign-in page later
export const providerMap = providers.map((provider) => {
  return { id: provider.id, name: provider.name }
})
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers,
  pages: {
    signIn: "/signin",
  },
})
```

src/hooks.server.ts

```
export { handle } from "./auth"
```

src/routes/auth.route.ts

```
import express from "express"
import { ExpressAuth } from "@auth/express"
import GitHub from "@auth/express/providers/github"
 
const app = express()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [GitHub],
    pages: {
      signIn: "/signin",
    },
  })
)
```

To continue setting up the custom page, checkout our [guide on custom pages](/guides/pages/signin).

[Protecting Resources](/getting-started/session-management/protecting "Protecting Resources")[Deployment](/getting-started/deployment "Deployment")
