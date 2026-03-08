# Login with Keycloak

To enable Keycloak Auth for your project, you need to set up an Keycloak OAuth application and add the application credentials to your Supabase Dashboard.

## Overview

To get started with Keycloak, you can run it in a docker container with: `docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:latest start-dev`

This guide will be assuming that you are running Keycloak in a docker container as described in the command above.

Keycloak OAuth consists of five broad steps:

- Create a new client in your specified Keycloak realm.
- Obtain the `issuer` from the "OpenID Endpoint Configuration". This will be used as the `Keycloak URL`.
- Ensure that the new client has the "Client Protocol" set to `openid-connect` and the "Access Type" is set to "confidential".
- The `Client ID` of the client created will be used as the `client id`.
- Obtain the `Secret` from the credentials tab which will be used as the `client secret`.
- Add the callback URL of your application to your allowlist.

## Access your Keycloak admin console

- Login by visiting [`http://localhost:8080`](http://localhost:8080) and clicking on "Administration Console".

## Create a Keycloak realm

- Once you've logged in to the Keycloak console, you can add a realm from the side panel. The default realm should be named "Master".
- After you've added a new realm, you can retrieve the `issuer` from the "OpenID Endpoint Configuration" endpoint. The `issuer` will be used as the `Keycloak URL`.
- You can find this endpoint from the realm settings under the "General Tab" or visit [`http://localhost:8080/realms/my_realm_name/.well-known/openid-configuration`](http://localhost:8080/realms/my_realm_name/.well-known/openid-configuration)

![Add a Keycloak Realm.](/docs/img/guides/auth-keycloak/keycloak-create-realm.png)

## Create a Keycloak client

The "Client ID" of the created client will serve as the `client_id` when you make API calls to authenticate the user.

![Add a Keycloak client](/docs/img/guides/auth-keycloak/keycloak-add-client.png)

## Client settings

After you've created the client successfully, ensure that you set the following settings:

1. The "Client Protocol" should be set to `openid-connect`.
2. The "Access Type" should be set to "confidential".
3. The "Valid Redirect URIs" should be set to: `https://<project-ref>.supabase.co/auth/v1/callback`.

![Obtain the client id, set the client protocol and access type](/docs/img/guides/auth-keycloak/keycloak-client-id.png)
![Set redirect uri](/docs/img/guides/auth-keycloak/keycloak-redirect-uri.png)

## Obtain the client secret

This will serve as the `client_secret` when you make API calls to authenticate the user.
Under the "Credentials" tab, the `Secret` value will be used as the `client secret`.

![Obtain the client secret](/docs/img/guides/auth-keycloak/keycloak-client-secret.png)

## Add login code to your client app

Since Keycloak version 22, the `openid` scope must be passed. Add this to the [`supabase.auth.signInWithOAuth()`](/docs/reference/javascript/auth-signinwithoauth) method.

````
  Make sure you're using the right `supabase` client in the following code.

  If you're not using Server-Side Rendering or cookie-based Auth, you can directly use the `createClient` from `@supabase/supabase-js`. If you're using Server-Side Rendering, see the [Server-Side Auth guide](/docs/guides/auth/server-side/creating-a-client) for instructions on creating your Supabase client.


When your user signs in, call [`signInWithOAuth()`](/docs/reference/javascript/auth-signinwithoauth) with `keycloak` as the `provider`:

```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('<your-project-url>', '<sb_publishable_... or anon key>')

// ---cut---
async function signInWithKeycloak() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'keycloak',
    options: {
      scopes: 'openid',
    },
  })
}
```



When your user signs in, call [`signInWithOAuth()`](/docs/reference/dart/auth-signinwithoauth) with `keycloak` as the `provider`:

```dart
Future signInWithKeycloak() async {
  await supabase.auth.signInWithOAuth(
    OAuthProvider.keycloak,
    redirectTo: kIsWeb ? null : 'my.scheme://my-host', // Optionally set the redirect link to bring back the user via deeplink.
    authScreenLaunchMode:
        kIsWeb ? LaunchMode.platformDefault : LaunchMode.externalApplication, // Launch the auth screen in a new webview on mobile.
  );
}
```



When your user signs in, call [signInWith(Provider)](/docs/reference/kotlin/auth-signinwithoauth) with `Keycloak` as the `Provider`:

```kotlin
suspend fun signInWithKeycloak() {
	supabase.auth.signInWith(Keycloak) {
		scopes.add("openid")
	}
}
```
````

For a PKCE flow, for example in Server-Side Auth, you need an extra step to handle the code exchange. When calling `signInWithOAuth`, provide a `redirectTo` URL which points to a callback route. This redirect URL should be added to your [redirect allow list](/docs/guides/auth/redirect-urls).

````
In the browser, `signInWithOAuth` automatically redirects to the OAuth provider's authentication endpoint, which then redirects to your endpoint.

```js
import { createClient, type Provider } from '@supabase/supabase-js';
const supabase = createClient('url', 'anonKey')
const provider = 'provider' as Provider

// ---cut---
await supabase.auth.signInWithOAuth({
  provider,
  options: {
    redirectTo: `http://example.com/auth/callback`,
  },
})
```



In the server, you need to handle the redirect to the OAuth provider's authentication endpoint. The `signInWithOAuth` method returns the endpoint URL, which you can redirect to.

```js
import { createClient, type Provider } from '@supabase/supabase-js'
const supabase = createClient('url', 'anonKey')
const provider = 'provider' as Provider
const redirect = (url: string) => {}

// ---cut---
const { data, error } = await supabase.auth.signInWithOAuth({
  provider,
  options: {
    redirectTo: 'http://example.com/auth/callback',
  },
})

if (data.url) {
  redirect(data.url) // use the redirect API for your server framework
}
```
````

At the callback endpoint, handle the code exchange to save the user session.

````
Create a new file at `app/auth/callback/route.ts` and populate with the following:


  ```ts name=app/auth/callback/route.ts
  import { NextResponse } from 'next/server'
  // The client you created from the Server-Side Auth instructions
  import { createClient } from '@/utils/supabase/server'

  export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    // if "next" is in param, use it as the redirect URL
    let next = searchParams.get('next') ?? '/'
    if (!next.startsWith('/')) {
      // if "next" is not a relative URL, use the default
      next = '/'
    }

    if (code) {
      const supabase = await createClient()
      const { error } = await supabase.auth.exchangeCodeForSession(code)
      if (!error) {
        const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
        const isLocalEnv = process.env.NODE_ENV === 'development'
        if (isLocalEnv) {
          // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
          return NextResponse.redirect(`${origin}${next}`)
        } else if (forwardedHost) {
          return NextResponse.redirect(`https://${forwardedHost}${next}`)
        } else {
          return NextResponse.redirect(`${origin}${next}`)
        }
      }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
  }
  ```




Create a new file at `src/routes/auth/callback/+server.js` and populate with the following:


  ```js name=src/routes/auth/callback/+server.js
  import { redirect } from '@sveltejs/kit';

  export const GET = async (event) => {
  	const {
  		url,
  		locals: { supabase }
  	} = event;
  	const code = url.searchParams.get('code') as string;
  	const next = url.searchParams.get('next') ?? '/';

    if (code) {
      const { error } = await supabase.auth.exchangeCodeForSession(code)
      if (!error) {
        redirect(303, `/${next.slice(1)}`);
      }
    }

    // return the user to an error page with instructions
    redirect(303, '/auth/auth-code-error');
  };
  ```




Create a new file at `src/pages/auth/callback.ts` and populate with the following:


  ```ts name=src/pages/auth/callback.ts
  import { createServerClient, parseCookieHeader } from '@supabase/ssr'
  import { type APIRoute } from 'astro'

  export const GET: APIRoute = async ({ request, cookies, redirect }) => {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')
    const next = requestUrl.searchParams.get('next') || '/'

    if (code) {
      const supabase = createServerClient(
        import.meta.env.PUBLIC_SUPABASE_URL,
        import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY,
        {
          cookies: {
            getAll() {
              return parseCookieHeader(Astro.request.headers.get('Cookie') ?? '')
            },
            setAll(cookiesToSet) {
              cookiesToSet.forEach(({ name, value, options }) =>
                Astro.cookies.set(name, value, options)
              )
            },
          },
        }
      )

      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (!error) {
        return redirect(next)
      }
    }

    // return the user to an error page with instructions
    return redirect('/auth/auth-code-error')
  }
  ```




Create a new file at `app/routes/auth.callback.tsx` and populate with the following:


  ```ts name=app/routes/auth.callback.tsx
  import { redirect, type LoaderFunctionArgs } from '@remix-run/node'
  import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr'

  export async function loader({ request }: LoaderFunctionArgs) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')
    const next = requestUrl.searchParams.get('next') || '/'
    const headers = new Headers()

    if (code) {
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

      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (!error) {
        return redirect(next, { headers })
      }
    }

    // return the user to an error page with instructions
    return redirect('/auth/auth-code-error', { headers })
  }
  ```




Create a new route in your express app and populate with the following:


  ```js name=app.js
  ...
  app.get("/auth/callback", async function (req, res) {
    const code = req.query.code
    const next = req.query.next ?? "/"

    if (code) {
      const supabase = createServerClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_PUBLISHABLE_KEY, {
      cookies: {
        getAll() {
          return parseCookieHeader(context.req.headers.cookie ?? '')
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            context.res.appendHeader('Set-Cookie', serializeCookieHeader(name, value, options))
          )
        },
      },
    })
      await supabase.auth.exchangeCodeForSession(code)
    }

    res.redirect(303, `/${next.slice(1)}`)
  })
  ```






When your user signs out, call [signOut()](/docs/reference/javascript/auth-signout) to remove them from the browser session and any objects from localStorage:

```js
async function signOut() {
  const { error } = await supabase.auth.signOut()
}
```



When your user signs out, call [signOut()](/docs/reference/dart/auth-signout) to remove them from the browser session and any objects from localStorage:

```dart
Future signOut() async {
  await supabase.auth.signOut();
}
```



When your user signs out, call [signOut()](/docs/reference/kotlin/auth-signout) to remove them from the browser session and any objects from localStorage:

```kotlin
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('<your-project-url>', '<sb_publishable_... or anon key>');

// ---cut---
suspend fun signOut() {
	supabase.auth.signOut()
}
```
````

## Resources

- You can find the Keycloak OpenID endpoint configuration under the realm settings.
  ![Keycloak OpenID Endpoint Configuration](/docs/img/guides/auth-keycloak/keycloak-openid-endpoint-config.png)
