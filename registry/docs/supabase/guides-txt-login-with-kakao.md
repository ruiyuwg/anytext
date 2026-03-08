# Login with Kakao

To enable Kakao Auth for your project, you need to set up a Kakao OAuth application and add the application credentials to your Supabase Dashboard.

## Overview

Kakao OAuth consists of six broad steps:

- Create and configure your app in the [Kakao Developers Portal](https://developers.kakao.com/changeLang?lang=en).
- Obtain a `REST API key` - this serves as the `client_id`.
- Obtain a `Kakao Login Client Secret code` - this serves as the `client_secret`.
- Configure additional settings in the Kakao Developers Portal.
- Add your `client id` and `client secret` keys to your [Supabase Project](/dashboard).
- Add the login code to your [Supabase JS Client App](https://github.com/supabase/supabase-js).

## Access your Kakao Developer account

- Go to [Kakao Developers Portal](https://developers.kakao.com/changeLang?lang=en).
- Click on **Login** at the top right to log in.

![Kakao Developers Portal](/docs/img/guides/auth-kakao/kakao-developers-page.png)

## Create and configure your app

- Go to **App**.
- Click on **Create app** at the top.
- Fill out your app information:
  - App icon.
  - App name.
  - Company name.
  - Category.
  - App primary domain.
- Click **Save** at the bottom right.

## Obtain a REST API key

This serves as the `client_id` when you make API calls to authenticate the user.

- Go to **App**.
- Click on your app.
- Go to **App Settings** > **App** > **Platform Key**.
- In the **Platform Key** section is `REST API key`. This will become your `client_id` later.

## Find your callback URL

The next step requires a callback URL, which looks like this: `https://<project-ref>.supabase.co/auth/v1/callback`

- Go to your [Supabase Project Dashboard](/dashboard)
- Click on the `Authentication` icon in the left sidebar
- Click on [`Sign In / Providers`](/dashboard/project/_/auth/providers) under the Configuration section
- Click on **Kakao** from the accordion list to expand and you'll find your **Callback URL**, you can click `Copy` to copy it to the clipboard

#### Local development

When testing OAuth locally with the Supabase CLI, ensure your OAuth provider
is configured with the local Supabase Auth callback URL:

<http://localhost:54321/auth/v1/callback>

If this callback URL is missing or misconfigured, OAuth sign-in may fail or not redirect correctly during local development.

See the [local development docs](/docs/guides/local-development) for more details.

For testing OAuth locally with the Supabase CLI see the [local development docs](/docs/guides/local-development).

- To add a callback URL on Kakao, go to **App Settings** > **App** > **Platform Key**.
- Click on the REST API key you want to use.
- In the edit page, enter your callback URL in the **Kakao Login Redirect URI** field.
- Click **Save** in the bottom right.

## Obtain a client secret

- Go to **App Settings** > **App** > **Platform Key**.
- Click on the REST API key you want to use.
- Note the **Kakao Login Client Secret code**. This serves as a `client_secret` for your Supabase project.
- Make sure you activate **Kakao Login Client Secret**.

## Additional configurations on Kakao Developers portal

- Go to **Product Settings** > **Kakao Login** > **General**.
- Set **State** to "ON" in the **Usage settings** section to enable Kakao Login.
- Go to **Product Settings** > **Kakao Login** > **Consent Items**.
- Set the following scopes under the **Consent Items**:
  - account\_email (optional)
  - profile\_image
  - profile\_nickname

If you don't need an email address (or `account_email` isn't available for your app), you can omit `account_email` and enable **Allow users without an email** in the Supabase Kakao provider settings.

![Kakao consent items configuration](/docs/img/guides/auth-kakao/kakao-developers-consent-items-set.png)

In the Kakao Developers Portal, the "account\_email" consent item is only available for apps that are registered as "Biz App". To convert your app to a "Biz App", go to **App Settings** > **App** > **General**, and complete the required fields in the **Business Information** section.

## Add your OAuth credentials to Supabase

- Go to your [Supabase Project Dashboard](/dashboard)
- In the left sidebar, click the `Authentication` icon (near the top)
- Click on [`Providers`](/dashboard/project/_/auth/providers) under the Configuration section
- Click on **Kakao** from the accordion list to expand and turn **Kakao Enabled** to ON
- Enter your **Kakao Client ID** and **Kakao Client Secret** saved in the previous step
- Click `Save`

If you did not request `account_email` in Kakao, enable **Allow users without an email** in the Kakao provider settings.

## Add login code to your client app

````
  Make sure you're using the right `supabase` client in the following code.

  If you're not using Server-Side Rendering or cookie-based Auth, you can directly use the `createClient` from `@supabase/supabase-js`. If you're using Server-Side Rendering, see the [Server-Side Auth guide](/docs/guides/auth/server-side/creating-a-client) for instructions on creating your Supabase client.


When your user signs in, call [`signInWithOAuth()`](/docs/reference/javascript/auth-signinwithoauth) with `kakao` as the `provider`:

```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('<your-project-url>', '<sb_publishable_... or anon key>')

// ---cut---
async function signInWithKakao() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
  })
}
```



When your user signs in, call [`signInWithOAuth()`](/docs/reference/dart/auth-signinwithoauth) with `kakao` as the `provider`:

```dart
Future signInWithKakao() async {
  await supabase.auth.signInWithOAuth(
    OAuthProvider.kakao,
    redirectTo: kIsWeb ? null : 'my.scheme://my-host', // Optionally set the redirect link to bring back the user via deeplink.
    authScreenLaunchMode:
        kIsWeb ? LaunchMode.platformDefault : LaunchMode.externalApplication, // Launch the auth screen in a new webview on mobile.
  );
}
```



When your user signs in, call [signInWith(Provider)](/docs/reference/kotlin/auth-signinwithoauth) with `Kakao` as the `Provider`:

```kotlin
suspend fun signInWithKakao() {
	supabase.auth.signInWith(Kakao)
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
suspend fun signOut() {
	supabase.auth.signOut()
}
```
````

## Using Kakao Login JS SDK

[Kakao Login JS SDK](https://developers.kakao.com/docs/latest/en/kakaologin/js) is an official Kakao SDK for authenticating Kakao users on websites.

Exchange the [authorization code returned by Kakao API](https://developers.kakao.com/docs/latest/en/kakaologin/rest-api#request-code) for an [ID Token](https://developers.kakao.com/docs/latest/en/kakaologin/common#login-with-oidc).

For example, this code shows a how to get ID Token:

```
const requestUrl = new URL(request.url);
const code = requestUrl.searchParams.get('code');

if (code) {
  const res = await fetch('https://kauth.kakao.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: '<CLIENT_ID>',
      redirect_uri: '<url>/api/auth/kakao/oidc',
      code,
      client_secret: '<CLIENT_SECRET>',
    }),
  });

  const {id_token} = await res.json();
}
```

Use the ID Token to sign in:

```
const res = await auth.signInWithIdToken({
  provider: 'kakao',
  token: id_token,
});
```

### Configuration

1. Set **State** to "ON" under [OpenID Connect Activation](https://developers.kakao.com/docs/latest/en/kakaologin/prerequisite#kakao-login-oidc) on the Kakao Developers portal.
2. Add `openid` to [scope](https://developers.kakao.com/docs/latest/en/kakaologin/prerequisite#scope) along with the scope values you wish to obtain consent for.

## Resources

- [Kakao Developers Portal](https://developers.kakao.com/changeLang?lang=en).
