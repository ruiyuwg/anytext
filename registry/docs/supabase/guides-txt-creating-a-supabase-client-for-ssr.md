# Creating a Supabase client for SSR

Configure your Supabase client to use cookies

To use Server-Side Rendering (SSR) with Supabase, you need to configure your Supabase client to use cookies. The `@supabase/ssr` package helps you do this for JavaScript/TypeScript applications.

## Install

Install the `@supabase/supabase-js` and `@supabase/ssr` helper packages:

````
```bash
npm install @supabase/supabase-js @supabase/ssr
```



```bash
yarn add @supabase/supabase-js @supabase/ssr
```



```bash
pnpm add @supabase/supabase-js @supabase/ssr
```
````

## Set environment variables

Create a `.env.local` file in the project root directory. In the file, set the project's Supabase URL and Key:

{/\* TODO: How to completely consolidate partials? \*/}

You can also get the Project URL and key from [the project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=nextjs).

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

In most cases, you can get the correct key from [the Project's **Connect** dialog](/dashboard/project/_?showConnect=true\&connectTab=frameworks\&framework=nextjs), but if you want a specific key, you can find all keys in [the API Keys section of a Project's Settings page](/dashboard/project/_/settings/api-keys/):

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

[Read the API keys docs](/docs/guides/api/api-keys) for a full explanation of all key types and their uses.

````
```bash .env.local
NEXT_PUBLIC_SUPABASE_URL=supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=supabase_publishable_key
```



```bash .env.local
PUBLIC_SUPABASE_URL=supabase_project_url
PUBLIC_SUPABASE_PUBLISHABLE_KEY=supabase_publishable_key
```



```bash .env
PUBLIC_SUPABASE_URL=supabase_project_url
PUBLIC_SUPABASE_PUBLISHABLE_KEY=supabase_publishable_key
```



```bash .env
SUPABASE_URL=supabase_project_url
SUPABASE_PUBLISHABLE_KEY=supabase_publishable_key
```



```bash .env
SUPABASE_URL=supabase_project_url
SUPABASE_PUBLISHABLE_KEY=supabase_publishable_key
```



```bash .env
SUPABASE_URL=supabase_project_url
SUPABASE_PUBLISHABLE_KEY=supabase_publishable_key
```

Install [dotenv](https://www.npmjs.com/package/dotenv):

```bash
npm i dotenv
```

And initialize it:


  
    ```bash
    npm install dotenv
    ```
  

  
    ```bash
    yarn add dotenv
    ```
  

  
    ```bash
    pnpm add dotenv
    ```
  




```bash .env
SUPABASE_URL=supabase_project_url
SUPABASE_PUBLISHABLE_KEY=supabase_publishable_key
```
````

## Create a client

{/\* TODO: Can this be consolidated? \*/}

You need setup code to configure a Supabase client to use cookies. Once you have the utility code, you can use the `createClient` utility functions to get a properly configured Supabase client.

Use the browser client in code that runs on the browser, and the server client in code that runs on the server.

````
### Write utility functions to create Supabase clients

To access Supabase from a Next.js app, you need 2 types of Supabase clients:

1.  **Client Component client** - To access Supabase from Client Components, which run in the browser.
2.  **Server Component client** - To access Supabase from Server Components, Server Actions, and Route Handlers, which run only on the server.

Since Next.js Server Components can't write cookies, you need a [Proxy](https://nextjs.org/docs/app/getting-started/proxy) to refresh expired Auth tokens and store them.

The Proxy is responsible for:

1.  Refreshing the Auth token by calling `supabase.auth.getClaims()`.
2.  Passing the refreshed Auth token to Server Components, so they don't attempt to refresh the same token themselves. This is accomplished with `request.cookies.set`.
3.  Passing the refreshed Auth token to the browser, so it replaces the old token. This is accomplished with `response.cookies.set`.


  What does the `cookies` object do?} id="utility-cookies">
    The cookies object lets the Supabase client know how to access the cookies, so it can read and write the user session data. To make `@supabase/ssr` framework-agnostic, the cookies methods aren't hard-coded. These utility functions adapt `@supabase/ssr`'s cookie handling for Next.js.

    The `set` and `remove` methods for the server client need error handlers, because Next.js throws an error if cookies are set from Server Components. You can safely ignore this error because you'll set up Proxy in the next step to write refreshed cookies to storage.

    The cookie is named `sb-<project_ref>-auth-token` by default.
  

  Do I need to create a new client for every route?} id="client-deduplication">
    Yes! Creating a Supabase client is lightweight.

    *   On the server, it basically configures a `fetch` call. You need to reconfigure the fetch call anew for every request to your server, because you need the cookies from the request.
    *   On the client, `createBrowserClient` already uses a singleton pattern, so you only ever create one instance, no matter how many times you call your `createClient` function.
  


Create a `lib/supabase` folder at the root of your project, or inside the `./src` folder if you are using one, with a file for each type of client. Then copy the lib utility functions for each client type.


  
    
      
        ```typescript name=lib/supabase/client.ts
        import { createBrowserClient } from '@supabase/ssr'

        export function createClient() {
          return createBrowserClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
          )
        }
        ```
      
    

    
      
        ```typescript name=lib/supabase/server.ts
        import { createServerClient } from '@supabase/ssr'
        import { cookies } from 'next/headers'

        export async function createClient() {
          const cookieStore = await cookies()

          return createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
            {
              cookies: {
                getAll() {
                  return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                  try {
                    cookiesToSet.forEach(({ name, value, options }) =>
                      cookieStore.set(name, value, options)
                    )
                  } catch {
                    // The `setAll` method was called from a Server Component.
                    // This can be ignored if you have middleware refreshing
                    // user sessions.
                  }
                },
              },
            }
          )
        }
        ```
      
    
  


### Hook up proxy

The code adds a [matcher](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher) so the Proxy doesn't run on routes that don't access Supabase.


  Be careful when protecting pages. The server gets the user session from the cookies, which can be spoofed by anyone.

  Always use `supabase.auth.getClaims()` to protect pages and user data.

  *Never* trust `supabase.auth.getSession()` inside server code such as Proxy. It isn't guaranteed to revalidate the Auth token.

  It's safe to trust `getClaims()` because it validates the JWT signature against the project's published public keys every time.



  
    
      
        ```typescript name=proxy.ts
        import { type NextRequest } from 'next/server'
        import { updateSession } from '@/lib/supabase/proxy'

        export async function proxy(request: NextRequest) {
          return await updateSession(request)
        }

        export const config = {
          matcher: [
            /*
             * Match all request paths except for the ones starting with:
             * - _next/static (static files)
             * - _next/image (image optimization files)
             * - favicon.ico (favicon file)
             * Feel free to modify this pattern to include more paths.
             */
            '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
          ],
        }
        ```
      
    

    
      
        ```typescript name=lib/supabase/proxy.ts
        import { createServerClient } from '@supabase/ssr'
        import { NextResponse, type NextRequest } from 'next/server'

        export async function updateSession(request: NextRequest) {
          let supabaseResponse = NextResponse.next({
            request,
          })

          // With Fluid compute, don't put this client in a global environment
          // variable. Always create a new one on each request.
          const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
            {
              cookies: {
                getAll() {
                  return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                  cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
                  supabaseResponse = NextResponse.next({
                    request,
                  })
                  cookiesToSet.forEach(({ name, value, options }) =>
                    supabaseResponse.cookies.set(name, value, options)
                  )
                },
              },
            }
          )

          // Do not run code between createServerClient and
          // supabase.auth.getClaims(). A simple mistake could make it very hard to debug
          // issues with users being randomly logged out.

          // IMPORTANT: If you remove getClaims() and you use server-side rendering
          // with the Supabase client, your users may be randomly logged out.
          const { data } = await supabase.auth.getClaims()

          const user = data?.claims

          if (
            !user &&
            !request.nextUrl.pathname.startsWith('/login') &&
            !request.nextUrl.pathname.startsWith('/auth')
          ) {
            // no user, potentially respond by redirecting the user to the login page
            const url = request.nextUrl.clone()
            url.pathname = '/login'
            return NextResponse.redirect(url)
          }

          // IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
          // creating a new response object with NextResponse.next() make sure to:
          // 1. Pass the request in it, like so:
          //    const myNewResponse = NextResponse.next({ request })
          // 2. Copy over the cookies, like so:
          //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
          // 3. Change the myNewResponse object to fit your needs, but avoid changing
          //    the cookies!
          // 4. Finally:
          //    return myNewResponse
          // If this is not done, you may be causing the browser and server to go out
          // of sync and terminate the user's session prematurely!

          return supabaseResponse
        }
        ```
      
    
  


## Congratulations

You're done! To recap, you've successfully:

*   Called Supabase from a Server Action.
*   Called Supabase from a Server Component.
*   Set up a Supabase client utility to call Supabase from a Client Component. You can use this if you need to call Supabase from a Client Component, for example to set up a realtime subscription.
*   Set up Proxy to automatically refresh the Supabase Auth session.

You can now use any Supabase features from your client or server code!



### Set up server-side hooks

Set up server-side hooks in `src/hooks.server.ts`. The hooks:

*   Create a request-specific Supabase client, using the user credentials from the request cookie. This client is used for server-only code.
*   Check user authentication.
*   Guard protected pages.


  
    ```typescript name=src/hooks.server.ts
    import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public'
    import { createServerClient } from '@supabase/ssr'
    import type { Handle } from '@sveltejs/kit'

    export const handle: Handle = async ({ event, resolve }) => {
      event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
        cookies: {
          getAll() {
            return event.cookies.getAll()
          },
          setAll(cookiesToSet) {
            /**
             * Note: You have to add the `path` variable to the
             * set and remove method due to sveltekit's cookie API
             * requiring this to be set, setting the path to an empty string
             * will replicate previous/standard behavior (https://kit.svelte.dev/docs/types#public-types-cookies)
             */
            cookiesToSet.forEach(({ name, value, options }) =>
              event.cookies.set(name, value, { ...options, path: '/' })
            )
          },
        },
      })

      /**
       * Unlike `supabase.auth.getSession()`, which returns the session _without_
       * validating the JWT, this function also calls `getUser()` to validate the
       * JWT before returning the session.
       */
      event.locals.safeGetSession = async () => {
        const {
          data: { session },
        } = await event.locals.supabase.auth.getSession()
        if (!session) {
          return { session: null, user: null }
        }

        const {
          data: { user },
          error,
        } = await event.locals.supabase.auth.getUser()
        if (error) {
          // JWT validation has failed
          return { session: null, user: null }
        }

        return { session, user }
      }

      return resolve(event, {
        filterSerializedResponseHeaders(name) {
          return name === 'content-range' || name === 'x-supabase-api-version'
        },
      })
    }
    ```
  


To prevent TypeScript errors, add type definitions for the new event.locals properties.


  
    ```typescript name=src/app.d.ts
    import type { Session, SupabaseClient, User } from '@supabase/supabase-js'
    import type { Database } from './database.types.ts' // import generated types

    declare global {
      namespace App {
        // interface Error {}
        interface Locals {
          supabase: SupabaseClient
          safeGetSession: () => Promise<{ session: Session | null; user: User | null }>
          session: Session | null
          user: User | null
        }
        interface PageData {
          session: Session | null
        }
        // interface PageState {}
        // interface Platform {}
      }
    }

    export {}
    ```
  


### Create a Supabase client in your root layout

Create a Supabase client in your root `+layout.ts`. This client can be used to access Supabase from the client or the server. In order to get access to the Auth token on the server, use a `+layout.server.ts` file to pass in the session from event.locals.

Page components can access the Supabase client from the `data` object using the `load` function.


  
    
      ```typescript name=src/routes/+layout.ts
      import { PUBLIC_SUPABASE_PUBLISHABLE_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
      import type { LayoutLoad } from './$types'
      import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr'

      export const load: LayoutLoad = async ({ fetch, data, depends }) => {
        depends('supabase:auth')

        const supabase = isBrowser()
          ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
              global: {
                fetch,
              },
            })
          : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
              global: {
                fetch,
              },
              cookies: {
                getAll() {
                  return data.cookies
                },
              },
            })

        /**
         * It's fine to use `getSession` here, because on the client, `getSession` is
         * safe, and on the server, it reads `session` from the `LayoutData`, which
         * safely checked the session using `safeGetSession`.
         */
        const {
          data: { session },
        } = await supabase.auth.getSession()

        return { supabase, session }
      }
      ```
    
  

  
    
      ```typescript name=src/routes/+layout.server.ts
      import type { LayoutServerLoad } from './$types'

      export const load: LayoutServerLoad = async ({ locals: { safeGetSession }, cookies }) => {
        const { session, user } = await safeGetSession()

        return {
          session,
          user,
          cookies: cookies.getAll(),
        }
      }
      ```
    
  


## Congratulations

You're done! To recap, you've successfully:

*   Set up server-side hooks to create a request-specific Supabase client and guard protected pages.
*   Created a Supabase client in your root layout to use on both the client and server.

You can now use any Supabase features from your client or server code!



By default, Astro apps are static. This means the requests for data happen at build time, rather than when the user requests a page. At build time, there is no user, session or cookies. Therefore, we need to configure Astro for Server-side Rendering (SSR) if you want data to be fetched dynamically per request.

```js astro.config.mjs
import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'server',
})
```


  
    ```ts index.astro
    ---
    import { createServerClient, parseCookieHeader } from "@supabase/ssr";

    const supabase = createServerClient(
      import.meta.env.PUBLIC_SUPABASE_URL,
      import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY,
      {
        cookies: {
          getAll() {
            return parseCookieHeader(Astro.request.headers.get('Cookie') ?? '')
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              Astro.cookies.set(name, value))
          },
        },
      }
    );
    ---
    ```
  

  
    ```html index.astro
    
      import { createBrowserClient } from "@supabase/ssr";

      const supabase = createBrowserClient(
        import.meta.env.PUBLIC_SUPABASE_URL,
        import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY
      );
    
    ```
  

  
    ```ts route.ts
    import { createServerClient, parseCookieHeader } from "@supabase/ssr";
    import type { APIContext } from "astro";

    export async function GET(context: APIContext) {
      const supabase = createServerClient(
        import.meta.env.PUBLIC_SUPABASE_URL,
        import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY,
        {
          cookies: {
            getAll() {
              return parseCookieHeader(context.request.headers.get('Cookie') ?? '')
            },
            setAll(cookiesToSet) {
              cookiesToSet.forEach(({ name, value }) =>
                context.cookies.set(name, value))
            },
          },
        }
      );

      return ...
    }
    ```
  

  
    ```ts middleware.ts
    import { createServerClient, parseCookieHeader } from '@supabase/ssr'
    import { defineMiddleware } from 'astro:middleware'

    export const onRequest = defineMiddleware(async (context, next) => {
      const supabase = createServerClient(
        import.meta.env.PUBLIC_SUPABASE_URL,
        import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY,
        {
          cookies: {
            getAll() {
              return parseCookieHeader(context.request.headers.get('Cookie') ?? '')
            },
            setAll(cookiesToSet) {
              cookiesToSet.forEach(({ name, value }) => context.cookies.set(name, value))
            },
          },
        }
      )

      return next()
    })
    ```
  


## Congratulations

You can now use any Supabase features from your client or server code!




  
    ```ts _index.tsx
    import { type LoaderFunctionArgs } from '@remix-run/node'
    import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr'

    export async function loader({ request }: LoaderFunctionArgs) {
      const headers = new Headers()

      const supabase = createServerClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_PUBLISHABLE_KEY!,
        {
          cookies: {
            getAll() {
              return parseCookieHeader(request.headers.get('Cookie') ?? '')
            },
            setAll(cookiesToSet) {
              cookiesToSet.forEach(({ name, value, options }) =>
                headers.append('Set-Cookie', serializeCookieHeader(name, value, options))
              )
            },
          },
        }
      )

      return new Response('...', {
        headers,
      })
    }
    ```
  

  
    ```ts _index.tsx
    import { type ActionFunctionArgs } from '@remix-run/node'
    import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr'

    export async function action({ request }: ActionFunctionArgs) {
      const headers = new Headers()

      const supabase = createServerClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_PUBLISHABLE_KEY!,
        {
          cookies: {
            getAll() {
              return parseCookieHeader(request.headers.get('Cookie') ?? '')
            },
            setAll(cookiesToSet) {
              cookiesToSet.forEach(({ name, value, options }) =>
                headers.append('Set-Cookie', serializeCookieHeader(name, value, options))
              )
            },
          },
        }
      )

      return new Response('...', {
        headers,
      })
    }
    ```
  

  
    ```ts _index.tsx
    import { type LoaderFunctionArgs } from "@remix-run/node";
    import { useLoaderData } from "@remix-run/react";
    import { createBrowserClient } from "@supabase/ssr";

    export async function loader({}: LoaderFunctionArgs) {
      return {
        env: {
          SUPABASE_URL: process.env.SUPABASE_URL!,
          SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY!,
        },
      };
    }

    export default function Index() {
      const { env } = useLoaderData();

      const supabase = createBrowserClient(env.SUPABASE_URL, env.SUPABASE_PUBLISHABLE_KEY);

      return ...
    }
    ```
  


## Congratulations

You can now use any Supabase features from your client or server code!




  
    ```ts _index.tsx
    import { LoaderFunctionArgs } from 'react-router'
    import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr'

    export async function loader({ request }: LoaderFunctionArgs) {
      const headers = new Headers()

      const supabase = createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
        cookies: {
          getAll() {
            return parseCookieHeader(request.headers.get('Cookie') ?? '')
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              headers.append('Set-Cookie', serializeCookieHeader(name, value))
            )
          },
        },
      })

      return new Response('...', {
        headers,
      })
    }
    ```
  

  
    ```ts _index.tsx
    import { type ActionFunctionArgs } from '@react-router'
    import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr'

    export async function action({ request }: ActionFunctionArgs) {
      const headers = new Headers()

      const supabase = createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
        cookies: {
          getAll() {
            return parseCookieHeader(request.headers.get('Cookie') ?? '')
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              headers.append('Set-Cookie', serializeCookieHeader(name, value))
            )
          },
        },
      })

      return new Response('...', {
        headers,
      })
    }
    ```
  

  
    ```ts _index.tsx
    import { type LoaderFunctionArgs } from "react-router";
    import { useLoaderData } from "react-router";
    import { createBrowserClient } from "@supabase/ssr";

    export async function loader({}: LoaderFunctionArgs) {
      return {
        env: {
          SUPABASE_URL: process.env.SUPABASE_URL!,
          SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
        },
      };
    }

    export default function Index() {
      const { env } = useLoaderData();

      const supabase = createBrowserClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);

      return ...
    }
    ```
  


## Congratulations

You can now use any Supabase features from your client or server code!




  
    ```ts lib/supabase.js
    const { createServerClient, parseCookieHeader, serializeCookieHeader } = require('@supabase/ssr')

    exports.createClient = (context) => {
      return createServerClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY, {
        cookies: {
          getAll() {
            return parseCookieHeader(context.req.headers.cookie ?? '')
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              context.res.appendHeader('Set-Cookie', serializeCookieHeader(name, value))
            )
          },
        },
      })
    }
    ```
  

  
    ```ts app.js
    const express = require("express")
    const dotenv = require("dotenv")

    const { createClient } = require("./lib/supabase")

    const app = express()

    app.post("/hello-world", async function (req, res, next) {
      const { email, emailConfirm } = req.body
      ...

      const supabase = createClient({ req, res })
    })
    ```
  


## Congratulations

You can now use any Supabase features from your client or server code!




  
    Create a Hono middleware that creates a Supabase client.

    
      
        ```typescript name=src/middleware/auth.middleware.ts
        import { createServerClient, parseCookieHeader } from '@supabase/ssr'
        import { SupabaseClient } from '@supabase/supabase-js'
        import type { Context, MiddlewareHandler } from 'hono'
        import { env } from 'hono/adapter'
        import { setCookie } from 'hono/cookie'

        declare module 'hono' {
          interface ContextVariableMap {
            supabase: SupabaseClient
          }
        }

        export const getSupabase = (c: Context) => {
          return c.get('supabase')
        }

        type SupabaseEnv = {
          SUPABASE_URL: string
          SUPABASE_PUBLISHABLE_KEY: string
        }

        export const supabaseMiddleware = (): MiddlewareHandler => {
          return async (c, next) => {
            const supabaseEnv = env(c)
            const supabaseUrl = supabaseEnv.SUPABASE_URL
            const supabaseAnonKey = supabaseEnv.SUPABASE_PUBLISHABLE_KEY

            if (!supabaseUrl) {
              throw new Error('SUPABASE_URL missing!')
            }

            if (!supabaseAnonKey) {
              throw new Error('SUPABASE_PUBLISHABLE_KEY missing!')
            }

            const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
              cookies: {
                getAll() {
                  return parseCookieHeader(c.req.header('Cookie') ?? '')
                },
                setAll(cookiesToSet) {
                  cookiesToSet.forEach(({ name, value, options }) => setCookie(c, name, value, options))
                },
              },
            })

            c.set('supabase', supabase)

            await next()
          }
        }
        ```
      
    
  

  
    You can now use this middleware in your Hono application to create a server Supabase client that can be used to make authenticated requests.

    
      
        ```tsx name=src/index.tsx
        import { Hono } from 'hono'
        import { getSupabase, supabaseMiddleware } from './middleware/auth.middleware'

        const app = new Hono()
        app.use('*', supabaseMiddleware())

        app.get('/api/user', async (c) => {
          const supabase = getSupabase(c)
          const { data, error } = await supabase.auth.getClaims()

          if (error) console.log('error', error)

          if (!data?.user) {
            return c.json({
              message: 'You are not logged in.',
            })
          }

          return c.json({
            message: 'You are logged in!',
            userId: data.user,
          })
        })

        app.get('/signout', async (c) => {
          const supabase = getSupabase(c)
          await supabase.auth.signOut()
          console.log('Signed out server-side!')
          return c.redirect('/')
        })

        // Retrieve data with RLS enabled. The signed in user's auth token is automatically sent.
        app.get('/countries', async (c) => {
          const supabase = getSupabase(c)
          const { data, error } = await supabase.from('countries').select('*')
          if (error) console.log(error)
          return c.json(data)
        })

        export default app
        ```
      
    
  
````

## Caching considerations

If your app uses ISR (Incremental Static Regeneration) or is deployed behind a CDN, caching of HTTP responses can cause users to receive another user's session. When a session is refreshed, the new token is written to the response via `Set-Cookie`. If that response is cached and served to a different user, that user will be signed in as the wrong person.

See the [advanced Auth server-side rendering guide](/docs/guides/auth/server-side/advanced-guide#can-i-use-server-side-rendering-with-a-cdn-or-cache) for details and framework-specific examples.

## Next steps

- Implement [Authentication using Email and Password](/docs/guides/auth/passwords)
- Implement [Authentication using OAuth](/docs/guides/auth/social-login)
- [Learn more about SSR](/docs/guides/auth/server-side/advanced-guide)

# Migrating to the SSR package from Auth Helpers

The new `ssr` package takes the core concepts of the Auth Helpers and makes them available to any server language or framework. This page will guide you through migrating from the Auth Helpers package to `ssr`.

## Replacing Supabase packages

````
```bash
npm uninstall @supabase/auth-helpers-nextjs
```



```bash
npm uninstall @supabase/auth-helpers-sveltekit
```



```bash
npm uninstall @supabase/auth-helpers-remix
```
````

```bash
npm install @supabase/ssr
```

## Creating a client

The new `ssr` package exports two functions for creating a Supabase client. The `createBrowserClient` function is used in the client, and the `createServerClient` function is used in the server.

Read the [Creating a client](/docs/guides/auth/server-side/creating-a-client) page for examples of creating a client in your framework [and our migration guide](/docs/guides/troubleshooting/how-to-migrate-from-supabase-auth-helpers-to-ssr-package-5NRunM).

## Next steps

- Implement [Authentication using Email and Password](/docs/guides/auth/passwords)
- Implement [Authentication using OAuth](/docs/guides/auth/social-login)
- [Learn more about SSR](/docs/guides/auth/server-side/advanced-guide)
