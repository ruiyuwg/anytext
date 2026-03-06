## Authorization

Once a user is authenticated and a session is created, you can implement authorization to control what the user can access and do within your application.

There are two main types of authorization checks:

1. **Optimistic**: Checks if the user is authorized to access a route or perform an action using the session data stored in the cookie. These checks are useful for quick operations, such as showing/hiding UI elements or redirecting users based on permissions or roles.
2. **Secure**: Checks if the user is authorized to access a route or perform an action using the session data stored in the database. These checks are more secure and are used for operations that require access to sensitive data or actions.

For both cases, we recommend:

- Creating a [Data Access Layer](#creating-a-data-access-layer-dal) to centralize your authorization logic
- Using [Data Transfer Objects (DTO)](#using-data-transfer-objects-dto) to only return the necessary data
- Optionally use [Proxy](#optimistic-checks-with-proxy-optional) to perform optimistic checks.

### Optimistic checks with Proxy (Optional)

There are some cases where you may want to use [Proxy](/docs/app/api-reference/file-conventions/proxy) and redirect users based on permissions:

- To perform optimistic checks. Since Proxy runs on every route, it's a good way to centralize redirect logic and pre-filter unauthorized users.
- To protect static routes that share data between users (e.g. content behind a paywall).

However, since Proxy runs on every route, including [prefetched](/docs/app/getting-started/linking-and-navigating#prefetching) routes, it's important to only read the session from the cookie (optimistic checks), and avoid database checks to prevent performance issues.

For example:

```tsx filename="proxy.ts" switcher
import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/app/lib/session'
import { cookies } from 'next/headers'

// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/signup', '/']

export default async function proxy(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }

  return NextResponse.next()
}

// Routes Proxy should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
```

```js filename="proxy.js" switcher
import { NextResponse } from 'next/server'
import { decrypt } from '@/app/lib/session'
import { cookies } from 'next/headers'

// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login', '/signup', '/']

export default async function proxy(req) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)

  // 5. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  // 6. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }

  return NextResponse.next()
}

// Routes Proxy should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
```

While Proxy can be useful for initial checks, it should not be your only line of defense in protecting your data. The majority of security checks should be performed as close as possible to your data source, see [Data Access Layer](#creating-a-data-access-layer-dal) for more information.

> **Tips**:
>
> - In Proxy, you can also read cookies using `req.cookies.get('session').value`.
> - Proxy uses the Node.js runtime, check if your Auth library and session management library are compatible. You may need to use [Middleware](https://github.com/vercel/next.js/blob/v15.5.6/docs/01-app/03-api-reference/03-file-conventions/middleware.mdx) if your Auth library only supports [Edge Runtime](/docs/app/api-reference/edge)
> - You can use the `matcher` property in the Proxy to specify which routes Proxy should run on. Although, for auth, it's recommended Proxy runs on all routes.

### Creating a Data Access Layer (DAL)

We recommend creating a DAL to centralize your data requests and authorization logic.

The DAL should include a function that verifies the user's session as they interact with your application. At the very least, the function should check if the session is valid, then redirect or return the user information needed to make further requests.

For example, create a separate file for your DAL that includes a `verifySession()` function. Then use React's [cache](https://react.dev/reference/react/cache) API to memoize the return value of the function during a React render pass:

```tsx filename="app/lib/dal.ts" switcher
import 'server-only'

import { cookies } from 'next/headers'
import { decrypt } from '@/app/lib/session'

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)

  if (!session?.userId) {
    redirect('/login')
  }

  return { isAuth: true, userId: session.userId }
})
```

```js filename="app/lib/dal.js" switcher
import 'server-only'

import { cookies } from 'next/headers'
import { decrypt } from '@/app/lib/session'

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)

  if (!session.userId) {
    redirect('/login')
  }

  return { isAuth: true, userId: session.userId }
})
```

You can then invoke the `verifySession()` function in your data requests, Server Actions, Route Handlers:

```tsx filename="app/lib/dal.ts" switcher
export const getUser = cache(async () => {
  const session = await verifySession()
  if (!session) return null

  try {
    const data = await db.query.users.findMany({
      where: eq(users.id, session.userId),
      // Explicitly return the columns you need rather than the whole user object
      columns: {
        id: true,
        name: true,
        email: true,
      },
    })

    const user = data[0]

    return user
  } catch (error) {
    console.log('Failed to fetch user')
    return null
  }
})
```

```jsx filename="app/lib/dal.js" switcher
export const getUser = cache(async () => {
  const session = await verifySession()
  if (!session) return null

  try {
    const data = await db.query.users.findMany({
      where: eq(users.id, session.userId),
      // Explicitly return the columns you need rather than the whole user object
      columns: {
        id: true,
        name: true,
        email: true,
      },
    })

    const user = data[0]

    return user
  } catch (error) {
    console.log('Failed to fetch user')
    return null
  }
})
```

> **Tip**:
>
> - A DAL can be used to protect data fetched at request time. However, for static routes that share data between users, data will be fetched at build time and not at request time. Use [Proxy](#optimistic-checks-with-proxy-optional) to protect static routes.
> - For secure checks, you can check if the session is valid by comparing the session ID with your database. Use React's [cache](https://react.dev/reference/react/cache) function to avoid unnecessary duplicate requests to the database during a render pass.
> - You may wish to consolidate related data requests in a JavaScript class that runs `verifySession()` before any methods.

### Using Data Transfer Objects (DTO)

When retrieving data, it's recommended you return only the necessary data that will be used in your application, and not entire objects. For example, if you're fetching user data, you might only return the user's ID and name, rather than the entire user object which could contain passwords, phone numbers, etc.

However, if you have no control over the returned data structure, or are working in a team where you want to avoid whole objects being passed to the client, you can use strategies such as specifying what fields are safe to be exposed to the client.

```tsx filename="app/lib/dto.ts" switcher
import 'server-only'
import { getUser } from '@/app/lib/dal'

function canSeeUsername(viewer: User) {
  return true
}

function canSeePhoneNumber(viewer: User, team: string) {
  return viewer.isAdmin || team === viewer.team
}

export async function getProfileDTO(slug: string) {
  const data = await db.query.users.findMany({
    where: eq(users.slug, slug),
    // Return specific columns here
  })
  const user = data[0]

  const currentUser = await getUser(user.id)

  // Or return only what's specific to the query here
  return {
    username: canSeeUsername(currentUser) ? user.username : null,
    phonenumber: canSeePhoneNumber(currentUser, user.team)
      ? user.phonenumber
      : null,
  }
}
```

```js filename="app/lib/dto.js" switcher
import 'server-only'
import { getUser } from '@/app/lib/dal'

function canSeeUsername(viewer) {
  return true
}

function canSeePhoneNumber(viewer, team) {
  return viewer.isAdmin || team === viewer.team
}

export async function getProfileDTO(slug) {
  const data = await db.query.users.findMany({
    where: eq(users.slug, slug),
    // Return specific columns here
  })
  const user = data[0]

  const currentUser = await getUser(user.id)

  // Or return only what's specific to the query here
  return {
    username: canSeeUsername(currentUser) ? user.username : null,
    phonenumber: canSeePhoneNumber(currentUser, user.team)
      ? user.phonenumber
      : null,
  }
}
```

By centralizing your data requests and authorization logic in a DAL and using DTOs, you can ensure that all data requests are secure and consistent, making it easier to maintain, audit, and debug as your application scales.

> **Good to know**:
>
> - There are a couple of different ways you can define a DTO, from using `toJSON()`, to individual functions like the example above, or JS classes. Since these are JavaScript patterns and not a React or Next.js feature, we recommend doing some research to find the best pattern for your application.
> - Learn more about security best practices in our [Security in Next.js article](/blog/security-nextjs-server-components-actions).

### Server Components

Auth check in [Server Components](/docs/app/getting-started/server-and-client-components) are useful for role-based access. For example, to conditionally render components based on the user's role:

```tsx filename="app/dashboard/page.tsx" switcher
import { verifySession } from '@/app/lib/dal'

export default async function Dashboard() {
  const session = await verifySession()
  const userRole = session?.user?.role // Assuming 'role' is part of the session object

  if (userRole === 'admin') {
    return <AdminDashboard />
  } else if (userRole === 'user') {
    return <UserDashboard />
  } else {
    redirect('/login')
  }
}
```

```jsx filename="app/dashboard/page.jsx" switcher
import { verifySession } from '@/app/lib/dal'

export default async function Dashboard() {
  const session = await verifySession()
  const userRole = session?.user?.role // Assuming 'role' is part of the session object

  if (userRole === 'admin') {
    return <AdminDashboard />
  } else if (userRole === 'user') {
    return <UserDashboard />
  } else {
    redirect('/login')
  }
}
```

In the example, we use the `verifySession()` function from our DAL to check for 'admin', 'user', and unauthorized roles. This pattern ensures that each user interacts only with components appropriate to their role.

### Layouts and auth checks

Due to [Partial Rendering](/docs/app/getting-started/linking-and-navigating#client-side-transitions), be cautious when doing checks in [Layouts](/docs/app/api-reference/file-conventions/layout) as these don't re-render on navigation, meaning the user session won't be checked on every route change.

Instead, you should do the checks close to your data source or the component that'll be conditionally rendered.

For example, consider a shared layout that fetches the user data and displays the user image in a nav. Instead of doing the auth check in the layout, you should fetch the user data (`getUser()`) in the layout and do the auth check in your DAL.

This guarantees that wherever `getUser()` is called within your application, the auth check is performed, and prevents developers forgetting to check the user is authorized to access the data.

#### Auth checks in page components

For example, in a dashboard page, you can verify the user session and fetch the user data:

```tsx filename="app/dashboard/page.tsx" switcher
import { verifySession } from '@/app/lib/dal'

export default async function DashboardPage() {
  const session = await verifySession()

  // Fetch user-specific data from your database or data source
  const user = await getUserData(session.userId)

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      {/* Dashboard content */}
    </div>
  )
}
```

```jsx filename="app/dashboard/page.jsx" switcher
import { verifySession } from '@/app/lib/dal'

export default async function DashboardPage() {
  const session = await verifySession()

  // Fetch user-specific data from your database or data source
  const user = await getUserData(session.userId)

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      {/* Dashboard content */}
    </div>
  )
}
```

#### Auth checks in leaf components

You can also perform auth checks in leaf components that conditionally render UI elements based on user permissions. For example, a component that displays admin-only actions:

```tsx filename="app/ui/admin-actions.tsx" switcher
import { verifySession } from '@/app/lib/dal'

export default async function AdminActions() {
  const session = await verifySession()
  const userRole = session?.user?.role

  if (userRole !== 'admin') {
    return null
  }

  return (
    <div>
      <button>Delete User</button>
      <button>Edit Settings</button>
    </div>
  )
}
```

```jsx filename="app/ui/admin-actions.jsx" switcher
import { verifySession } from '@/app/lib/dal'

export default async function AdminActions() {
  const session = await verifySession()
  const userRole = session?.user?.role

  if (userRole !== 'admin') {
    return null
  }

  return (
    <div>
      <button>Delete User</button>
      <button>Edit Settings</button>
    </div>
  )
}
```

This pattern allows you to show or hide UI elements based on user permissions while ensuring the auth check happens at render time in each component.

> **Good to know:**
>
> - A common pattern in SPAs is to `return null` in a layout or a top-level component if a user is not authorized. This pattern is **not recommended** since Next.js applications have multiple entry points, which will not prevent nested route segments and Server Actions from being accessed.
> - Ensure that any Server Actions called from these components also perform their own authorization checks, as client-side UI restrictions alone are not sufficient for security.

### Server Actions

Treat [Server Actions](/docs/app/getting-started/updating-data) with the same security considerations as public-facing API endpoints, and verify if the user is allowed to perform a mutation.

In the example below, we check the user's role before allowing the action to proceed:

```ts filename="app/lib/actions.ts" switcher
'use server'
import { verifySession } from '@/app/lib/dal'

export async function serverAction(formData: FormData) {
  const session = await verifySession()
  const userRole = session?.user?.role

  // Return early if user is not authorized to perform the action
  if (userRole !== 'admin') {
    return null
  }

  // Proceed with the action for authorized users
}
```

```js filename="app/lib/actions.js" switcher
'use server'
import { verifySession } from '@/app/lib/dal'

export async function serverAction() {
  const session = await verifySession()
  const userRole = session.user.role

  // Return early if user is not authorized to perform the action
  if (userRole !== 'admin') {
    return null
  }

  // Proceed with the action for authorized users
}
```

### Route Handlers

Treat [Route Handlers](/docs/app/api-reference/file-conventions/route) with the same security considerations as public-facing API endpoints, and verify if the user is allowed to access the Route Handler.

For example:

```ts filename="app/api/route.ts" switcher
import { verifySession } from '@/app/lib/dal'

export async function GET() {
  // User authentication and role verification
  const session = await verifySession()

  // Check if the user is authenticated
  if (!session) {
    // User is not authenticated
    return new Response(null, { status: 401 })
  }

  // Check if the user has the 'admin' role
  if (session.user.role !== 'admin') {
    // User is authenticated but does not have the right permissions
    return new Response(null, { status: 403 })
  }

  // Continue for authorized users
}
```

```js filename="app/api/route.js" switcher
import { verifySession } from '@/app/lib/dal'

export async function GET() {
  // User authentication and role verification
  const session = await verifySession()

  // Check if the user is authenticated
  if (!session) {
    // User is not authenticated
    return new Response(null, { status: 401 })
  }

  // Check if the user has the 'admin' role
  if (session.user.role !== 'admin') {
    // User is authenticated but does not have the right permissions
    return new Response(null, { status: 403 })
  }

  // Continue for authorized users
}
```

The example above demonstrates a Route Handler with a two-tier security check. It first checks for an active session, and then verifies if the logged-in user is an 'admin'.

## Context Providers

Using context providers for auth works due to [interleaving](/docs/app/getting-started/server-and-client-components#examples#interleaving-server-and-client-components). However, React `context` is not supported in Server Components, making them only applicable to Client Components.

This works, but any child Server Components will be rendered on the server first, and will not have access to the context provider’s session data:

```tsx filename="app/layout.ts" switcher
import { ContextProvider } from 'auth-lib'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  )
}
```

```tsx filename="app/ui/profile.ts switcher
'use client';

import { useSession } from "auth-lib";

export default function Profile() {
  const { userId } = useSession();
  const { data } = useSWR(`/api/user/${userId}`, fetcher)

  return (
    // ...
  );
}
```

```jsx filename="app/ui/profile.js switcher
'use client';

import { useSession } from "auth-lib";

export default function Profile() {
  const { userId } = useSession();
  const { data } = useSWR(`/api/user/${userId}`, fetcher)

  return (
    // ...
  );
}
```

If session data is needed in Client Components (e.g. for client-side data fetching), use React’s [`taintUniqueValue`](https://react.dev/reference/react/experimental_taintUniqueValue) API to prevent sensitive session data from being exposed to the client.

## Resources

Now that you've learned about authentication in Next.js, here are Next.js-compatible libraries and resources to help you implement secure authentication and session management:

### Auth Libraries

- [Auth0](https://auth0.com/docs/quickstart/webapp/nextjs)
- [Better Auth](https://www.better-auth.com/docs/integrations/next)
- [Clerk](https://clerk.com/docs/quickstarts/nextjs)
- [Descope](https://docs.descope.com/getting-started/nextjs)
- [Kinde](https://kinde.com/docs/developer-tools/nextjs-sdk)
- [Logto](https://docs.logto.io/quick-starts/next-app-router)
- [NextAuth.js](https://authjs.dev/getting-started/installation?framework=next.js)
- [Ory](https://www.ory.sh/docs/getting-started/integrate-auth/nextjs)
- [Stack Auth](https://docs.stack-auth.com/getting-started/setup)
- [Supabase](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Stytch](https://stytch.com/docs/guides/quickstarts/nextjs)
- [WorkOS](https://workos.com/docs/user-management/nextjs)

### Session Management Libraries

- [Iron Session](https://github.com/vvo/iron-session)
- [Jose](https://github.com/panva/jose)

## Further Reading

To continue learning about authentication and security, check out the following resources:

- [How to think about security in Next.js](/blog/security-nextjs-server-components-actions)
- [Understanding XSS Attacks](https://vercel.com/guides/understanding-xss-attacks)
- [Understanding CSRF Attacks](https://vercel.com/guides/understanding-csrf-attacks)
- [The Copenhagen Book](https://thecopenhagenbook.com/)

# Backend for Frontend
