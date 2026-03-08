[Getting Started](/getting-started "Getting Started")Migrate to Better Auth

## Introduction[](#introduction)

In this guide, we’ll walk through the steps to migrate a project from Auth.js to [Better Auth](https://www.better-auth.com). Since these projects have different design philosophies, the migration requires careful planning and work. If your current setup is working well, there’s no urgent need to migrate. Better Auth team continues to handle security patches and critical issues for Auth.js.

However, if you’re starting a new project or facing challenges with your current setup, we strongly recommend using Better Auth. Our roadmap includes features previously exclusive to Auth.js, and we hope this will unite the ecosystem more strongly without causing fragmentation.

## 1\. Create Better Auth Instance[](#1-create-better-auth-instance)

Before starting the migration process, set up Better Auth in your project. Follow the [installation guide](https://www.better-auth.com/docs/installation) to get started.

For example, if you use the GitHub OAuth provider, here is a comparison of the `auth.ts` file.

Auth.jsBetter Auth

```
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
  
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
})
```

```
import { betterAuth } from "better-auth";
 
export const auth = betterAuth({
  socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID!, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET!, 
    }, 
  }, 
})
```

Now Better Auth supports stateless session management without any database. If you were using a Database adapter in Auth.js, you can refer to the [Database models](#6-database-models) below to check the differences with Better Auth’s core schema.

## 2\. Create Client Instance[](#2-create-client-instance)

This client instance includes a set of functions for interacting with the Better Auth server instance. For more information, see [here](https://www.better-auth.com/docs/concepts/client).

auth-client.ts

```
import { createAuthClient } from "better-auth/react"
 
export const authClient = createAuthClient()
```

## 3\. Update the Route Handler[](#3-update-the-route-handler)

Rename the `/app/api/auth/[...nextauth]` folder to `/app/api/auth/[...all]` to avoid confusion. Then, update the `route.ts` file as follows:

Auth.jsBetter Auth

```
import { handlers } from "@/lib/auth"
 
export const { GET, POST } = handlers
```

```
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
 
export const { POST, GET } = toNextJsHandler(auth)
```

## 4\. Session Management[](#4-session-management)

In this section, we’ll look at how to manage sessions in Better Auth compared to Auth.js. For more information, see [here](https://www.better-auth.com/docs/concepts/session-management).

### Client-side[](#client-side)

#### Sign In[](#sign-in)

Here are the differences between Auth.js and Better Auth for signing in users. For example, with the GitHub OAuth provider:

Auth.jsBetter Auth

```
"use client"
 
import { signIn } from "next-auth/react"
 
signIn("github")
 
```

```
"use client"
 
import { authClient } from "@/lib/auth-client";
 
const { data, error } = await authClient.signIn.social({
  provider: "github",
})
```

#### Sign Out[](#sign-out)

Here are the differences between Auth.js and Better Auth when signing out users.

Auth.jsBetter Auth

```
"use client"
 
import { signOut } from "next-auth/react"
 
signOut()
 
```

```
"use client"
 
import { authClient } from "@/lib/auth-client";
 
const { data, error } = await authClient.signOut()
```

#### Get Session[](#get-session)

Here are the differences between Auth.js and Better Auth for getting the current active session.

Auth.jsBetter Auth

```
"use client"
 
import { useSession } from "next-auth/react"
 
const { data, status, update } = useSession()
 
```

```
"use client"
 
import { authClient } from "@/lib/auth-client";
 
const { data, error, refetch, isPending, isRefetching } = authClient.useSession()
```

### Server-side[](#server-side)

#### Sign In[](#sign-in-1)

Here are the differences between Auth.js and Better Auth for signing in users. For example, with the GitHub OAuth provider:

Auth.jsBetter Auth

```
import { signIn } from "@/lib/auth"
 
await signIn("github")
 
```

```
import { auth } from "@/lib/auth";
 
const { redirect, url } = await auth.api.signInSocial({
  body: {
    provider: "github",
  },
})
```

#### Sign Out[](#sign-out-1)

Here are the differences between Auth.js and Better Auth when signing out users.

Auth.jsBetter Auth

```
import { signOut } from "@/lib/auth"
 
await signOut()
 
```

```
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
 
const { success } = await auth.api.signOut({
  headers: await headers(),
})
```

#### Get Session[](#get-session-1)

Here are the differences between Auth.js and Better Auth for getting the current active session.

Auth.jsBetter Auth

```
import { auth } from "@/lib/auth";
 
const session = await auth()
 
```

```
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
 
const session = await auth.api.getSession({
  headers: await headers(),
})
```

## 5\. Protecting Resources[](#5-protecting-resources)

> Proxy (Middleware) is not intended for slow data fetching. While Proxy can be helpful for optimistic checks such as permission-based redirects, it should not be used as a full session management or authorization solution. - [Next.js docs](https://nextjs.org/docs/app/getting-started/proxy#use-cases)

Auth.js offers approaches using Proxy (Middleware), but Better Auth recommend handling auth checks on each page or route rather than in a Proxy or Layout. Here is a basic example of protecting resources with Better Auth.

Client-sideServer-side

app/dashboard/page.tsx

```
"use client";
 
import { authClient } from "@/lib/auth-client"
import { redirect } from "next/navigation"
 
const DashboardPage = () => {
const { data, error, isPending } = authClient.useSession();
 
if (isPending) {
return <div>Pending</div>;
}
if (!data || error) {
redirect("/sign-in");
}
 
return (
 
<div>
  <h1>Welcome {data.user.name}</h1>
</div>
); };
 
export default DashboardPage;
```

app/dashboard/page.tsx

```
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
 
const DashboardPage = async () => {
const session = await auth.api.getSession({
headers: await headers(),
});
 
if (!session) {
redirect("/sign-in");
}
 
return (
 
<div>
  <h1>Welcome {session.user.name}</h1>
</div>
); };
 
export default DashboardPage
```

## 6\. Database models[](#6-database-models)

Both Auth.js and Better Auth provide stateless (JWT) and database session strategies. If you were using the database session strategy in Auth.js and plan to continue using it in Better Auth, you will also need to migrate your database.

Just like Auth.js has database models, Better Auth also has a core schema. In this section, we’ll compare the two and explore the differences between them.

Auth.jsBetter Auth

### Comparison[](#comparison)

Table: **User**

-   `name`, `email`, and `emailVerified` are required in Better Auth, while optional in Auth.js
-   `emailVerified` uses a boolean in Better Auth, while Auth.js uses a timestamp
-   Better Auth includes `createdAt` and `updatedAt` timestamps

Table: **Session**

-   Better Auth uses `token` instead of `sessionToken`
-   Better Auth uses `expiresAt` instead of `expires`
-   Better Auth includes `ipAddress` and `userAgent` fields
-   Better Auth includes `createdAt` and `updatedAt` timestamps

Table: **Account**

-   Better Auth uses camelCase naming (e.g. `refreshToken` vs `refresh_token`)
-   Better Auth includes `accountId` to distinguish between the account ID and internal ID
-   Better Auth uses `providerId` instead of `provider`
-   Better Auth includes `accessTokenExpiresAt` and `refreshTokenExpiresAt` for token management
-   Better Auth includes `password` field to support built-in credential authentication
-   Better Auth does not have a `type` field as it’s determined by the `providerId`
-   Better Auth removes `token_type` and `session_state` fields
-   Better Auth includes `createdAt` and `updatedAt` timestamps

Table: **VerificationToken -> Verification**

-   Better Auth uses `Verification` table instead of `VerificationToken`
-   Better Auth uses a single `id` primary key instead of composite primary key
-   Better Auth uses `value` instead of `token` to support various verification types
-   Better Auth uses `expiresAt` instead of `expires`
-   Better Auth includes `createdAt` and `updatedAt` timestamps

If you were using Auth.js v4, note that v5 does not introduce any breaking changes to the database schema. Optional fields like `oauth_token_secret` and `oauth_token` can be removed if you are not using them. Rarely used fields like `refresh_token_expires_in` can also be removed.

### Customization[](#customization)

You may have extended the database models or implemented additional logic in Auth.js. Better Auth allows you to customize the core schema in a type-safe way. You can also define custom logic during the lifecycle of database operations. For more details, see [Concepts - Database](https://www.better-auth.com/docs/concepts/database).

## Wrapping Up[](#wrapping-up)

Now you’re ready to migrate from Auth.js to Better Auth. For a complete implementation with multiple authentication methods, check out the [Next.js Demo App](https://github.com/better-auth/better-auth/tree/canary/demo/nextjs). Better Auth offers greater flexibility and more features, so be sure to explore the [documentation](https://www.better-auth.com/docs) to unlock its full potential.

If you need help with migration, join our [community](https://www.better-auth.com/community) or reach out to [contact@better-auth.com](mailto:contact@better-auth.com).

[Introduction](/getting-started "Introduction")[Installation](/getting-started/installation "Installation")
