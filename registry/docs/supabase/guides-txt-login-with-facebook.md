# Login with Facebook

To enable Facebook Auth for your project, you need to set up a Facebook OAuth application and add the application credentials to your Supabase Dashboard.

## Overview

Setting up Facebook logins for your application consists of 4 parts:

- Create and configure a Facebook Application on the [Facebook Developers Site](https://developers.facebook.com)
- **Configure email permissions** in your Facebook app (required for Supabase Auth)
- Add your Facebook keys to your [Supabase Project](/dashboard)
- Add the login code to your [Supabase JS Client App](https://github.com/supabase/supabase-js)

## Access your Facebook Developer account

- Go to [developers.facebook.com](https://developers.facebook.com).
- Click on `Log In` at the top right to log in.

![Facebook Developer Portal.](/docs/img/guides/auth-facebook/facebook-portal.png)

## Create a Facebook app

- Click on `My Apps` at the top right.
- Click `Create App` near the top right.
- Select your app type and click `Continue`.
- Fill in your app information, then click `Create App`.
- This should bring you to the screen: `Add Products to Your App`. (Alternatively you can click on `Add Product` in the left sidebar to get to this screen.)

The next step requires a callback URL, which looks like this: `https://<project-ref>.supabase.co/auth/v1/callback`

- Go to your [Supabase Project Dashboard](/dashboard)
- Click on the `Authentication` icon in the left sidebar
- Click on [`Sign In / Providers`](/dashboard/project/_/auth/providers) under the Configuration section
- Click on **Facebook** from the accordion list to expand and you'll find your **Callback URL**, you can click `Copy` to copy it to the clipboard

#### Local development

When testing OAuth locally with the Supabase CLI, ensure your OAuth provider
is configured with the local Supabase Auth callback URL:

<http://localhost:54321/auth/v1/callback>

If this callback URL is missing or misconfigured, OAuth sign-in may fail or not redirect correctly during local development.

See the [local development docs](/docs/guides/local-development) for more details.

For testing OAuth locally with the Supabase CLI see the [local development docs](/docs/guides/local-development).

## Set up Facebook login for your Facebook app

From the `Add Products to your App` screen:

- Click **Setup** under **Facebook Login**
- Skip the Quickstart screen. Instead, in the left sidebar, click **Settings** under **Facebook Login**
- Enter your callback URI under **Valid OAuth Redirect URIs** on the **Facebook Login Settings** page
- Click **Save Changes** at the bottom right

Your callback URI follows this pattern: `https://<project-ref>.supabase.co/auth/v1/callback`

You can find your project's callback URI in the [Supabase Dashboard](/dashboard/project/_/auth/providers) under **Authentication > Providers > Facebook**.

## Configure email permissions (required)

This step is **required** for Supabase Auth to work correctly. Without email permissions, Facebook will not return the user's email address, which may cause authentication failures or incomplete user profiles.

You must configure the email permission in your Facebook app's Use Cases:

1. In your Facebook app dashboard, click **Use Cases** under `Build Your App`
2. Find **Authentication and Account Creation** and click the **Edit** button on the right
3. Verify that both `public_profile` and `email` show status **Ready for testing**
4. If `email` is not listed, click the **Add** button next to it

You can verify the permissions are set correctly by checking that both `public_profile` and `email` appear with a green check mark or "Ready for testing" status.

## Copy your Facebook app ID and secret

- Click `Settings / Basic` in the left sidebar
- Copy your App ID from the top of the `Basic Settings` page
- Under `App Secret` click `Show` then copy your secret
- Make sure all required fields are completed on this screen.

## Enter your Facebook app ID and secret into your Supabase project

- Go to your [Supabase Project Dashboard](/dashboard)
- In the left sidebar, click the `Authentication` icon (near the top)
- Click on [`Providers`](/dashboard/project/_/auth/providers) under the Configuration section
- Click on **Facebook** from the accordion list to expand and turn **Facebook Enabled** to ON
- Enter your **Facebook Client ID** and **Facebook Client Secret** saved in the previous step
- Click `Save`

You can also configure the Facebook auth provider using the Management API:

```bash
# Get your access token from https://supabase.com/dashboard/account/tokens
export SUPABASE_ACCESS_TOKEN="your-access-token"
export PROJECT_REF="your-project-ref"

# Configure Facebook auth provider
curl -X PATCH "https://api.supabase.com/v1/projects/$PROJECT_REF/config/auth" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "external_facebook_enabled": true,
    "external_facebook_client_id": "your-facebook-app-id",
    "external_facebook_secret": "your-facebook-app-secret"
  }'
```

## Add login code to your client app

````
  Make sure you're using the right `supabase` client in the following code.

  If you're not using Server-Side Rendering or cookie-based Auth, you can directly use the `createClient` from `@supabase/supabase-js`. If you're using Server-Side Rendering, see the [Server-Side Auth guide](/docs/guides/auth/server-side/creating-a-client) for instructions on creating your Supabase client.


When your user signs in, call [`signInWithOAuth()`](/docs/reference/javascript/auth-signinwithoauth) with `facebook` as the `provider`:

```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project.supabase.co', 'sb_publishable_... or anon key')

// ---cut---
async function signInWithFacebook() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
  })

  if (error) {
    console.error('Error signing in with Facebook:', error.message)
    return
  }

  // The user will be redirected to Facebook for authentication
}
```



When your user signs in, call [`signInWithOAuth()`](/docs/reference/dart/auth-signinwithoauth) with `facebook` as the `provider`:

```dart
Future signInWithFacebook() async {
  await supabase.auth.signInWithOAuth(
    OAuthProvider.facebook,
    redirectTo: kIsWeb ? null : 'my.scheme://my-host', // Optionally set the redirect link to bring back the user via deeplink.
    authScreenLaunchMode:
        kIsWeb ? LaunchMode.platformDefault : LaunchMode.externalApplication, // Launch the auth screen in a new webview on mobile.
  );
}
```

### Alternative: Using Facebook SDK with signInWithIdToken

For more control over the Facebook authentication flow, you can use the Facebook SDK directly and then authenticate with Supabase using [`signInWithIdToken()`](/docs/reference/dart/auth-signinwithidtoken):

First, add the Facebook SDK dependency to your `pubspec.yaml`:

```yaml
dependencies:
  flutter_facebook_auth: ^7.0.0
```


  Check [pub.dev](https://pub.dev/packages/flutter_facebook_auth) for the latest version of `flutter_facebook_auth`.


Then implement the Facebook authentication:

```dart
import 'package:flutter_facebook_auth/flutter_facebook_auth.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

Future signInWithFacebook() async {
  try {
    final LoginResult result = await FacebookAuth.instance.login(
      permissions: ['public_profile', 'email'],
    );

    if (result.status == LoginStatus.success) {
      final accessToken = result.accessToken!.tokenString;

      await Supabase.instance.client.auth.signInWithIdToken(
        provider: OAuthProvider.facebook,
        idToken: accessToken,
      );

      // Authentication successful
    } else {
      // Handle login cancellation or failure
      throw Exception('Facebook login failed: ${result.status}');
    }
  } catch (e) {
    // Handle errors
    throw Exception('Facebook authentication error: ${e.toString()}');
  }
}
```


  Make sure to configure your Facebook app properly and add the required permissions in the Facebook Developer Console. The `signInWithIdToken` method requires the Facebook access token to be valid and properly scoped.




When your user signs in, call [`signInWithOAuth()`](/docs/reference/swift/auth-signinwithoauth) with `facebook` as the `provider`:

```swift
import SwiftUI

struct SignInWithFacebook: View {
  @Environment(\.webAuthenticationSession) var webAuthenticationSession

  var body: some View {
    Button("Sign in with Facebook") {
      Task {
        do {
          try await supabase.auth.signInWithOAuth(
            provider: .facebook,
            redirectTo: URL(string: "my.scheme://my-host")!,
            launchFlow: { @MainActor url in
              try await webAuthenticationSession.authenticate(
                using: url,
                callbackURLScheme: "my.scheme"
              )
            }
          )
        } catch {
          print("Failed to sign in with Facebook: \(error)")
        }
      }
    }
  }
}
```


  Make sure to configure your app's URL scheme in Xcode under **Target > Info > URL Types**. The callback URL scheme should match the scheme used in `redirectTo` (e.g., `my.scheme`).




When your user signs in, call [signInWith(Provider)](/docs/reference/kotlin/auth-signinwithoauth) with `Facebook` as the `Provider`:

```kotlin
suspend fun signInWithFacebook() {
	supabase.auth.signInWith(Facebook)
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

  if (error) {
    console.error('Error signing out:', error.message)
    return
  }

  // User has been signed out
}
```



When your user signs out, call [signOut()](/docs/reference/dart/auth-signout) to remove them from the browser session and any objects from localStorage:

```dart
Future signOut() async {
  await supabase.auth.signOut();
}
```



When your user signs out, call [signOut()](/docs/reference/swift/auth-signout) to remove them from the browser session and any objects from localStorage:

```swift
func signOut() async throws {
  try await supabase.auth.signOut()
}
```



When your user signs out, call [signOut()](/docs/reference/kotlin/auth-signout) to remove them from the browser session and any objects from localStorage:

```kotlin
suspend fun signOut() {
	supabase.auth.signOut()
}
```
````

## Testing your integration

Facebook apps start in **Development** mode, which has the following limitations:

- Only users with a role on the app (administrators, developers, testers) can authenticate
- Other users will see an "App Not Setup" error when trying to log in

To add test users:

1. Go to [developers.facebook.com](https://developers.facebook.com) and select your app
2. Navigate to **App Roles > Roles**
3. Add users as Testers, Developers, or Administrators
4. Users must accept the invitation from their Facebook notification settings

Development mode is sufficient for local development and testing. You only need to submit for App Review when you're ready to allow any Facebook user to authenticate with your app.

## Going live with app review

Before your app can be used by the general public, you need to complete Facebook's App Review process:

1. **Complete App Settings**: In your Facebook app's **Settings > Basic**, fill in all required fields including:

   - App Icon
   - Privacy Policy URL
   - Terms of Service URL (if applicable)
   - App Domain

2. **Request Permissions**: Navigate to **App Review > Permissions and Features** and request the permissions you need:

   - `public_profile` - Usually pre-approved
   - `email` - Requires verification that your app needs email access

3. **Submit for Review**: Click **Submit for Review** and provide:

   - Detailed instructions for how Facebook reviewers should test your login flow
   - A screencast video demonstrating the Facebook Login feature
   - Explanation of how user data will be used

4. **Wait for Approval**: Facebook typically reviews apps within 1-5 business days

If you only need basic authentication (name and profile picture), you may not need full App Review. Apps requesting only `public_profile` and `email` with the "Authenticate and request data from users with Facebook Login" use case can often go live without a detailed review.

For more details, see the [Facebook App Review documentation](https://developers.facebook.com/docs/app-review/).

## Troubleshooting

### "App not setup" error

This error occurs when a user without a role on your app tries to log in while the app is in Development mode.

**Solution**: Either add the user as a tester in your Facebook app settings, or complete the App Review process to make your app available to all users.

### User's email not returned

Facebook only returns the email address if:

- The user has a confirmed email on their Facebook account
- Your app has been granted the `email` permission
- The `email` permission is marked as "Ready for testing" in **Use Cases > Authentication and Account Creation**

**Solution**: Check that the `email` permission is properly configured in your Facebook app's Use Cases settings.

### "Redirect URI mismatch" error

This error indicates the callback URL configured in Facebook doesn't match the one used during authentication.

**Solution**: Verify that the **Valid OAuth Redirect URIs** in your Facebook app settings exactly matches `https://<project-ref>.supabase.co/auth/v1/callback`. Make sure there are no trailing slashes or typos.

### Login works in development but not production

If login works locally but fails in production, check:

- Your production URL is added to **Valid OAuth Redirect URIs** in Facebook
- The App ID and Secret in your Supabase dashboard match your Facebook app
- Your Facebook app is in **Live** mode (not Development mode)

## Resources

- [Supabase - Get started for free](https://supabase.com)
- [Supabase JS Client](https://github.com/supabase/supabase-js)
- [Facebook Developers Dashboard](https://developers.facebook.com/)
