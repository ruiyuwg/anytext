[Getting Started](/getting-started "Getting Started")[Session Management](/getting-started/session-management/login "Session Management")Get Session

# Get Session

Once a user is logged in, you often want to get the session object in order to use the data in some way. A common use-case is to show their profile picture or display some other user information.

Next.jsNext.js (Client)QwikSvelteKitExpress

./components/UserAvatar.tsx

```
import { auth } from "../auth"
 
export default async function UserAvatar() {
  const session = await auth()
 
  if (!session?.user) return null
 
  return (
    <div>
      <img src={session.user.image} alt="User Avatar" />
    </div>
  )
}
```

Although `next-auth` supports client-side data retrieval using `useSession` and `SessionProvider` for both the App Router and Pages Router, in real-world scenarios, these are used less frequently. Typically, you’ll want to take full advantage of server-side rendering to optimize performance and security.

### App Router[](#app-router)

app/admin/dashboard.tsx

```
"use client"
import { useSession } from "next-auth/react"
 
export default function Dashboard() {
  const { data: session } = useSession()
 
  if (session?.user?.role === "admin") {
    return <p>You are an admin, welcome!</p>
  }
 
  return <p>You are not authorized to view this page!</p>
}
```

app/admin/page.tsx

```
import { SessionProvider } from "next-auth/react"
import { Dashboard } from "./Dashboard"
 
export default function Administrator() {
  return (
    <SessionProvider>
      <Dashboard />
    </SessionProvider>
  )
}
```

### Page Server Side[](#page-server-side)

In the pages router, to access a session in a component, you’ll first need to get the `session` object in a page and then pass it down to the component.

./pages/dashboard.tsx

```
import { auth } from "@/auth.ts"
import { UserAvatar } from "@/components/UserAvatar"
 
export default function Dashboard({ session }) {
  return (
    <nav>
      <UserAvatar session={session} />
    </nav>
  )
}
 
export async function getServerSideProps(ctx) {
  const session = await auth(ctx)
 
  return {
    props: {
      session,
    },
  }
}
```

### Page Client Side[](#page-client-side)

When accessing the session client-side using `useSession()`, make sure an Auth.js `<SessionProvider />` is wrapping your page.

pages/\_app.tsx

```
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
 
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />;
    </SessionProvider>
  )
}
```

pages/dashboard.tsx

```
import { useSession } from "next-auth/react"
import { UserAvatar } from "@/components/UserAvatar"
 
export default function Dashboard() {
  const { data: session } = useSession()
 
  return (
    <nav>
      <UserAvatar session={session} />
    </nav>
  )
}
```

Finally, we can use it in the component.

./components/UserAvatar.tsx

```
import type { Session } from "next-auth"
 
export function UserAvatar({ session }: { session: Session | null }) {
  return (
    <div>
      <img
        src={session?.user?.image ?? "https://i.pravatar.cc/300"}
        alt="User Avatar"
      />
    </div>
  )
}
```

Under the hood Qwik is preparing automatically the session for you so you don’t have to implement custom logic for that. You can read the sesion on the server with `event.sharedMap.get("session")` and on the client with the `useSession()` action.

With SvelteKit, you have to return the `session` object from the load function in your `+page.server.ts` or `+layout.server.ts` files.

src/routes/+page.server.ts

```
import type { PageServerLoad } from "./$types"
 
export const load: PageServerLoad = async ({ params, locals }) => {
  const session = await locals.auth()
 
  if (!session?.user?.userId) {
    redirect(303, `/login`)
  }
 
  return {
    session,
  }
}
```

Then you can access the `session` on the `$page.data` object in your page.

src/routes/+page.svelte

```
<script lang="ts">
  const { data } = $props()
</script>
 
<nav>
  <img
    src={data.session?.user?.image ?? "https://i.pravatar.cc/300"}
    alt="User Avatar"
  />
</nav>
```

app.ts

```
import { getSession } from "@auth/express"
 
export function authSession(req: Request, res: Response, next: NextFunction) {
  res.locals.session = await getSession(req)
  next()
}
 
app.use(authSession)
 
// Now in your route
app.get("/", (req, res) => {
  const { session } = res.locals
  res.render("index", { user: session?.user })
})
```

If you’d like to extend your session with more fields from your OAuth provider, for example, please check out our [“extending the session” guide](/guides/extending-the-session).

💡

By default, GET requests to the session endpoint will automatically return the headers to prevent caching.

[Signin and Signout](/getting-started/session-management/login "Signin and Signout")[Protecting Resources](/getting-started/session-management/protecting "Protecting Resources")
