# Login with Azure (Microsoft)

To enable Azure (Microsoft) Auth for your project, you need to set up an Azure OAuth application and add the application credentials to your Supabase Dashboard.

## Overview

Setting up OAuth with Azure consists of four broad steps:

- Create an OAuth application under Azure Entra ID.
- Add a secret to the application.
- Add the Supabase Auth callback URL to the allowlist in the OAuth application in Azure.
- Configure the client ID and secret of the OAuth application within the Supabase Auth dashboard.

## Access your Azure Developer account

- Go to [portal.azure.com](https://portal.azure.com/#home).
- Login and select Microsoft Entra ID under the list of Azure Services.

## Register an application

- Under Microsoft Entra ID, select *App registrations* in the side panel and select *New registration.*
- Choose a name and select your preferred option for the supported account types.
- Specify a *Web* *Redirect URI*. It should look like this: `https://<project-ref>.supabase.co/auth/v1/callback`
- Finally, select *Register* at the bottom of the screen.

![Register an application.](/docs/img/guides/auth-azure/azure-register-app.png)

## Obtain a client ID and secret

### Local development with Azure OAuth

Azure does not allow `127.0.0.1` as a redirect URI hostname and requires
the use of `localhost`.

To enable Azure OAuth during local Supabase development, configure the
Supabase API external URL in your `config.toml`:

```toml
[api]
external_url = "http://localhost:54321"
```

- Once your app has been registered, the client ID can be found under the [list of app registrations](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps) under the column titled *Application (client) ID*.
- You can also find it in the app overview screen.
- Place the Client ID in the Azure configuration screen in the Supabase Auth dashboard.

![Obtain the client ID](/docs/img/guides/auth-azure/azure-client-id.png)

- Select *Add a certificate or secret* in the app overview screen and open the *Client secrets* tab.
- Select *New client secret* to create a new client secret.
- Choose a preferred expiry time of the secret. Make sure you record this in your calendar days in advance so you have enough time to create a new one without suffering from any downtime.
- Once the secret is generated place the *Value* column (not *Secret ID*) in the Azure configuration screen in the Supabase Auth dashboard.

![Obtain the client secret](/docs/img/guides/auth-azure/azure-client-secret.png)

You can also configure the Azure auth provider using the Management API:

```bash
# Get your access token from https://supabase.com/dashboard/account/tokens
export SUPABASE_ACCESS_TOKEN="your-access-token"
export PROJECT_REF="your-project-ref"

# Configure Azure auth provider
curl -X PATCH "https://api.supabase.com/v1/projects/$PROJECT_REF/config/auth" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "external_azure_enabled": true,
    "external_azure_client_id": "your-azure-client-id",
    "external_azure_secret": "your-azure-client-secret",
    "external_azure_url": "your-azure-url"
  }'
```

## Guarding against unverified email domains

Microsoft Entra ID can send out unverified email domains in certain cases. This may open up your project to a vulnerability where a malicious user can impersonate already existing accounts on your project.

This only applies in at least one of these cases:

- You have configured the `authenticationBehaviors` setting of your OAuth application to allow unverified email domains
- You are using an OAuth app configured as single-tenant in the supported account types
- Your OAuth app was created before June 20th 2023 after Microsoft announced this vulnerability, and the app had used unverified emails prior

This means that most OAuth apps *are not susceptible* to this vulnerability.

Despite this, we recommend configuring the [optional `xms_edov` claim](https://learn.microsoft.com/en-us/azure/active-directory/develop/migrate-off-email-claim-authorization#using-the-xms_edov-optional-claim-to-determine-email-verification-status-and-migrate-users) on the OAuth app. This claim allows Supabase Auth to identify with certainty whether the email address sent over by Microsoft Entra ID is verified or not.

Configure this in the following way:

- Select the *App registrations* menu in Microsoft Entra ID on the Azure portal.
- Select the OAuth app.
- Select the *Manifest* menu in the sidebar.
- Make a backup of the JSON just in case.
- Identify the `optionalClaims` key.
- Edit it by specifying the following object:
  ```json
    "optionalClaims": {
        "idToken": [
            {
                "name": "xms_edov",
                "source": null,
                "essential": false,
                "additionalProperties": []
            },
            {
                "name": "email",
                "source": null,
                "essential": false,
                "additionalProperties": []
            }
        ],
        "accessToken": [
            {
                "name": "xms_edov",
                "source": null,
                "essential": false,
                "additionalProperties": []
            }
        ],
        "saml2Token": []
    },
  ```
- Select *Save* to apply the new configuration.

## Configure a tenant URL (optional)

A Microsoft Entra tenant is the directory of users who are allowed to access your project. This section depends on what your OAuth registration uses for *Supported account types.*

By default, Supabase Auth uses the *common* Microsoft tenant (`https://login.microsoftonline.com/common`) which generally allows any Microsoft account to sign in to your project. Microsoft Entra further limits what accounts can access your project depending on the type of OAuth application you registered.

If your app is registered as *Personal Microsoft accounts only* for the *Supported account types* set Microsoft tenant to *consumers* (`https://login.microsoftonline.com/consumers`).

{/\* supa-mdx-lint-disable-next-line Rule004ExcludeWords \*/}

If your app is registered as *My organization only* for the *Supported account types* you may want to configure Supabase Auth with the organization's tenant URL. This will use the tenant's authorization flows instead, and will limit access at the Supabase Auth level to Microsoft accounts arising from only the specified tenant.

Configure this by storing a value under *Azure Tenant URL* in the Supabase Auth provider configuration page for Azure that has the following format `https://login.microsoftonline.com/<tenant-id>`.

## Add login code to your client app

Supabase Auth requires that Azure returns a valid email address. Therefore you must request the `email` scope in the `signInWithOAuth` method.

````
  Make sure you're using the right `supabase` client in the following code.

  If you're not using Server-Side Rendering or cookie-based Auth, you can directly use the `createClient` from `@supabase/supabase-js`. If you're using Server-Side Rendering, see the [Server-Side Auth guide](/docs/guides/auth/server-side/creating-a-client) for instructions on creating your Supabase client.


When your user signs in, call [`signInWithOAuth()`](/docs/reference/javascript/auth-signinwithoauth) with `azure` as the `provider`:

```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project.supabase.co', 'sb_publishable_... or anon key')

// ---cut---
async function signInWithAzure() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'azure',
    options: {
      scopes: 'email',
    },
  })
}
```



When your user signs in, call [`signInWithOAuth()`](/docs/reference/dart/auth-signinwithoauth) with `azure` as the `provider`:

```dart
Future signInWithAzure() async {
  await supabase.auth.signInWithOAuth(
    OAuthProvider.azure,
    redirectTo: kIsWeb ? null : 'my.scheme://my-host', // Optionally set the redirect link to bring back the user via deeplink.
    authScreenLaunchMode:
        kIsWeb ? LaunchMode.platformDefault : LaunchMode.externalApplication, // Launch the auth screen in a new webview on mobile.
  );
}
```



When your user signs in, call [signInWith(Provider)](/docs/reference/kotlin/auth-signinwithoauth) with `Azure` as the `Provider`:

```kotlin
suspend fun signInWithAzure() {
    supabase.auth.signInWith(Azure) {
        scopes.add("email")
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
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project.supabase.co', 'sb_publishable_... or anon key')

// ---cut---
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

## Obtain the provider refresh token

Azure OAuth2.0 doesn't return the `provider_refresh_token` by default. If you need the `provider_refresh_token` returned, you will need to include the following scope:

````
```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project.supabase.co', 'sb_publishable_... or anon key')

// ---cut---
async function signInWithAzure() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'azure',
    options: {
      scopes: 'offline_access',
    },
  })
}
```



```dart
Future signInWithAzure() async {
  await supabase.auth.signInWithOAuth(
    OAuthProvider.azure,
    scopes: 'offline_access',
  );
}
```



```kotlin
suspend fun signInWithAzure() {
    supabase.auth.signInWith(Azure) {
        scopes.add("offline_access")
    }
}
```
````

## Resources

- [Azure Developer Account](https://portal.azure.com)
- [GitHub Discussion](https://github.com/supabase/gotrue/pull/54#issuecomment-757043573)
- [Potential Risk of Privilege Escalation in Azure AD Applications](https://msrc.microsoft.com/blog/2023/06/potential-risk-of-privilege-escalation-in-azure-ad-applications/)
