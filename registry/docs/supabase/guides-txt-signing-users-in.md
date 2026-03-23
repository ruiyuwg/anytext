## Signing users in

````
### Application code

To use your own application code for the signin button, call the `signInWithOAuth` method (or the equivalent for your language).


  Make sure you're using the right `supabase` client in the following code.

  If you're not using Server-Side Rendering or cookie-based Auth, you can directly use the `createClient` from `@supabase/supabase-js`. If you're using Server-Side Rendering, see the [Server-Side Auth guide](/docs/guides/auth/server-side/creating-a-client) for instructions on creating your Supabase client.


```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('url', 'anonKey')

// ---cut---
supabase.auth.signInWithOAuth({
  provider: 'google',
})
```

For an implicit flow, that's all you need to do. The user will be taken to Google's consent screen, and finally redirected to your app with an access and refresh token pair representing their session.

For a PKCE flow, for example in Server-Side Auth, you need an extra step to handle the code exchange. When calling `signInWithOAuth`, provide a `redirectTo` URL which points to a callback route. This redirect URL should be added to your [redirect allow list](/docs/guides/auth/redirect-urls).


  
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
  


At the callback endpoint, handle the code exchange to save the user session.


  
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
    
  


After a successful code exchange, the user's session will be saved to cookies.

### Saving Google tokens

The tokens saved by your application are the Supabase Auth tokens. Your app might additionally need the Google OAuth 2.0 tokens to access Google services on the user's behalf.

On initial login, you can extract the `provider_token` from the session and store it in a secure storage medium. The session is available in the returned data from `signInWithOAuth` (implicit flow) and `exchangeCodeForSession` (PKCE flow).

Google does not send out a refresh token by default, so you will need to pass parameters like these to `signInWithOAuth()` in order to extract the `provider_refresh_token`:

```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project.supabase.co', 'sb_publishable_... or anon key')

// ---cut---
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    queryParams: {
      access_type: 'offline',
      prompt: 'consent',
    },
  },
})
```

### Google pre-built \[#google-pre-built]

Most web apps and websites can utilize Google's [personalized sign-in buttons](https://developers.google.com/identity/gsi/web/guides/personalized-button), [One Tap](https://developers.google.com/identity/gsi/web/guides/features) or [automatic sign-in](https://developers.google.com/identity/gsi/web/guides/automatic-sign-in-sign-out) for the best user experience.

1.  Load the Google client library in your app by including the third-party script:

    ```html
    
    ```

2.  Use the [HTML Code Generator](https://developers.google.com/identity/gsi/web/tools/configurator) to customize the look, feel, features and behavior of the Sign in with Google button.

3.  Pick the *Swap to JavaScript callback* option, and input the name of your callback function. This function will receive a [`CredentialResponse`](https://developers.google.com/identity/gsi/web/reference/js-reference#CredentialResponse) when sign in completes.

    To make your app compatible with Chrome's third-party-cookie phase-out, make sure to set `data-use_fedcm_for_prompt` to `true`.

    Your final HTML code might look something like this:

    ```html
    <div
      id="g_id_onload"
      data-client_id=""
      data-context="signin"
      data-ux_mode="popup"
      data-callback="handleSignInWithGoogle"
      data-nonce=""
      data-auto_select="true"
      data-itp_support="true"
      data-use_fedcm_for_prompt="true"
    >

    <div
      class="g_id_signin"
      data-type="standard"
      data-shape="pill"
      data-theme="outline"
      data-text="signin_with"
      data-size="large"
      data-logo_alignment="left"
    >
    ```

4.  Create a `handleSignInWithGoogle` function that takes the `CredentialResponse` and passes the included token to Supabase. The function needs to be available in the global scope for Google's code to find it.

    ```ts
    async function handleSignInWithGoogle(response) {
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: response.credential,
      })
    }
    ```

5.  *(Optional)* Configure a nonce. The use of a nonce is recommended for extra security, but optional. The nonce should be generated randomly each time, and it must be provided in both the `data-nonce` attribute of the HTML code and the options of the callback function.

    ```ts
    async function handleSignInWithGoogle(response) {
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: response.credential,
        nonce: '',
      })
    }
    ```

    Note that the nonce should be the same in both places, but because Supabase Auth expects the provider to hash it (SHA-256, hexadecimal representation), you need to provide a hashed version to Google and a non-hashed version to `signInWithIdToken`.

    You can get both versions by using the in-built `crypto` library:

    ```js
    // Adapted from https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#converting_a_digest_to_a_hex_string

    const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))))
    const encoder = new TextEncoder()
    const encodedNonce = encoder.encode(nonce)
    crypto.subtle.digest('SHA-256', encodedNonce).then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer))
      const hashedNonce = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
    })

    // Use 'hashedNonce' when making the authentication request to Google
    // Use 'nonce' when invoking the supabase.auth.signInWithIdToken() method
    ```

### One-tap with Next.js

If you're integrating Google One-Tap with your Next.js application, you can refer to the example below to get started:

```tsx
'use client'

import Script from 'next/script'
import { createClient } from '@/utils/supabase/client'
import type { accounts, CredentialResponse } from 'google-one-tap'
import { useRouter } from 'next/navigation'

declare const google: { accounts: accounts }

// generate nonce to use for google id token sign-in
const generateNonce = async (): Promise<string[]> => {
  const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))))
  const encoder = new TextEncoder()
  const encodedNonce = encoder.encode(nonce)
  const hashBuffer = await crypto.subtle.digest('SHA-256', encodedNonce)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashedNonce = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')

  return [nonce, hashedNonce]
}

const OneTapComponent = () => {
  const supabase = createClient()
  const router = useRouter()

  const initializeGoogleOneTap = async () => {
    console.log('Initializing Google One Tap')
    const [nonce, hashedNonce] = await generateNonce()
    console.log('Nonce: ', nonce, hashedNonce)

    // check if there's already an existing session before initializing the one-tap UI
    const {
      data: { claims },
      error,
    } = await supabase.auth.getClaims()
    if (error) {
      console.error('Error getting claims', error)
    }
    if (claims) {
      router.push('/')
      return
    }

    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: async (response: CredentialResponse) => {
        try {
          // send id token returned in response.credential to supabase
          const { data, error } = await supabase.auth.signInWithIdToken({
            provider: 'google',
            token: response.credential,
            nonce,
          })

          if (error) throw error
          console.log('Session data: ', data)
          console.log('Successfully logged in with Google One Tap')

          // redirect to protected page
          router.push('/')
        } catch (error) {
          console.error('Error logging in with Google One Tap', error)
        }
      },
      nonce: hashedNonce,
      // with chrome's removal of third-party cookies, we need to use FedCM instead (https://developers.google.com/identity/gsi/web/guides/fedcm-migration)
      use_fedcm_for_prompt: true,
    })
    google.accounts.id.prompt() // Display the One Tap UI
  }

  return 
}

export default OneTapComponent
```



Unlike the OAuth flow which requires the use of a web browser, the native Sign in with Google flow on Android uses the [Credential Manager library](https://developer.android.com/identity/sign-in/credential-manager-siwg) to prompt the user for consent.

When the user provides consent, Google issues an identity token (commonly abbreviated as ID token) that you then send to your project's Supabase Auth server. When valid, a new user session is started by issuing an access and refresh token from Supabase Auth.

By default, Supabase Auth implements nonce validation during the authentication flow. This can be disabled in production under `Authentication > Providers > Google > Skip Nonce Check` in the Dashboard, or when developing locally by setting `auth.external.<provider>.skip_nonce_check`. Only disable this if your client libraries cannot properly handle nonce verification.

When working with Expo, you can use the [`@react-native-google-signin/google-signin` library](https://github.com/react-native-google-signin/google-signin#expo-installation) to obtain an ID token that you can pass to supabase-js [`signInWithIdToken` method](/docs/reference/javascript/auth-signinwithidtoken).

Follow the [Expo installation docs](https://react-native-google-signin.github.io/docs/setting-up/expo) for installation and configuration instructions. See the [supabase-js reference](/docs/reference/javascript/initializing?example=react-native-options-async-storage) for instructions on initializing the supabase-js client in React Native.

```tsx ./components/Auth.native.tsx
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import { supabase } from '../utils/supabase'

export default function () {
  GoogleSignin.configure({
    webClientId: 'YOUR CLIENT ID FROM GOOGLE CONSOLE',
  })

  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={async () => {
        try {
          await GoogleSignin.hasPlayServices()
          const response = await GoogleSignin.signIn()
          if (isSuccessResponse(response)) {
            const { data, error } = await supabase.auth.signInWithIdToken({
              provider: 'google',
              token: response.data.idToken,
            })
            console.log(error, data)
          }
        } catch (error: any) {
          if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      }}
    />
  )
}
```



Google sign-in with Supabase is done through the [google\_sign\_in](https://pub.dev/packages/google_sign_in) package for iOS and Android.

When the user provides consent, Google issues an identity token (commonly abbreviated as ID token) that is then sent to your project's Supabase Auth server. When valid, a new user session is started by issuing an access and refresh token from Supabase Auth.

Follow the code sample below to implement native Google sign-in with Supabase in your Flutter iOS and Android app.

```dart
import 'package:google_sign_in/google_sign_in.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

...
Future _nativeGoogleSignIn() async {
  /// TODO: update the Web client ID with your own.
  ///
  /// Web Client ID that you registered with Google Cloud.
  const webClientId = 'my-web.apps.googleusercontent.com';

  /// TODO: update the iOS client ID with your own.
  ///
  /// iOS Client ID that you registered with Google Cloud.
  const iosClientId = 'my-ios.apps.googleusercontent.com';

  final scopes = ['email', 'profile'];
  final googleSignIn = GoogleSignIn.instance;

  await googleSignIn.initialize(
    serverClientId: webClientId,
    clientId: iosClientId,
  );

  final googleUser = await googleSignIn.attemptLightweightAuthentication();
  // or await googleSignIn.authenticate(); which will return a GoogleSignInAccount or throw an exception

  if (googleUser == null) {
    throw AuthException('Failed to sign in with Google.');
  }

  /// Authorization is required to obtain the access token with the appropriate scopes for Supabase authentication,
  /// while also granting permission to access user information.
  final authorization =
      await googleUser.authorizationClient.authorizationForScopes(scopes) ??
      await googleUser.authorizationClient.authorizeScopes(scopes);

  final idToken = googleUser.authentication.idToken;

  if (idToken == null) {
    throw AuthException('No ID Token found.');
  }

  await supabase.auth.signInWithIdToken(
    provider: OAuthProvider.google,
    idToken: idToken,
    accessToken: authorization.accessToken,
  );
}
...
```


  




Google sign-in with Supabase on Web, macOS, Windows, and Linux is done through the [`signInWithOAuth`](/docs/reference/dart/auth-signinwithoauth) method.

This method of signing in is web based, and will open a browser window to perform the sign in. For non-web platforms, the user is brought back to the app via [deep linking](/docs/guides/auth/native-mobile-deep-linking?platform=flutter).

```dart
await supabase.auth.signInWithOAuth(
  OAuthProvider.google,
  redirectTo: kIsWeb ? null : 'my.scheme://my-host', // Optionally set the redirect link to bring back the user via deeplink.
  authScreenLaunchMode:
      kIsWeb ? LaunchMode.platformDefault : LaunchMode.externalApplication, // Launch the auth screen in a new webview on mobile.
);
```

This call takes the user to Google's consent screen. Once the flow ends, the user's profile information is exchanged and validated with Supabase Auth before it redirects back to your Flutter application with an access and refresh token representing the user's session.


  




### Using Google sign-in on Android

The Sign in with Google flow on Android uses the [operating system's built-in functionalities](https://developer.android.com/training/sign-in/credential-manager) to prompt the user for consent.

When the user provides consent, Google issues an identity token (commonly abbreviated as ID token) that is then sent to your project's Supabase Auth server. When valid, a new user session is started by issuing an access and refresh token from Supabase Auth.

**Note:** You have to create OAuth client IDs for both a Web and Android application. The Web client ID is the one used in your Android app.

Add the following dependencies to your app. You can find the latest version of `credentials` [here](https://developer.android.com/jetpack/androidx/releases/credentials) and `googleid` [here](https://developers.google.com/identity/android-credential-manager/releases).

```kotlin
implementation("androidx.credentials:credentials:")
implementation ("com.google.android.libraries.identity.googleid:googleid:")

// optional - needed for credentials support from play services, for devices running
// Android 13 and below.
implementation("androidx.credentials:credentials-play-services-auth:")
```

Add the following ProGuard rules to your `proguard-rules.pro` file:

```proguard
-if class androidx.credentials.CredentialManager
-keep class androidx.credentials.playservices.** {
  *;
}
```

Follow the code sample below to implement native Google sign-in with Supabase using Credential Manager in your Android app.

```kotlin
@Composable
fun GoogleSignInButton() {
    val coroutineScope = rememberCoroutineScope()
    val context = LocalContext.current

    val onClick: () -> Unit = {
        val credentialManager = CredentialManager.create(context)

        // Generate a nonce and hash it with sha-256
        // Providing a nonce is optional but recommended
        val rawNonce = UUID.randomUUID().toString() // Generate a random String. UUID should be sufficient, but can also be any other random string.
        val bytes = rawNonce.toString().toByteArray()
        val md = MessageDigest.getInstance("SHA-256")
        val digest = md.digest(bytes)
        val hashedNonce = digest.fold("") { str, it -> str + "%02x".format(it) } // Hashed nonce to be passed to Google sign-in


        val googleIdOption: GetGoogleIdOption = GetGoogleIdOption.Builder()
            .setFilterByAuthorizedAccounts(false)
            .setServerClientId("WEB_GOOGLE_CLIENT_ID")
            .setNonce(hashedNonce) // Provide the nonce if you have one
            .build()

        val request: GetCredentialRequest = GetCredentialRequest.Builder()
            .addCredentialOption(googleIdOption)
            .build()

        coroutineScope.launch {
            try {
                val result = credentialManager.getCredential(
                    request = request,
                    context = context,
                )

                val googleIdTokenCredential = GoogleIdTokenCredential
                    .createFrom(result.credential.data)

                val googleIdToken = googleIdTokenCredential.idToken

                supabase.auth.signInWith(IDToken) {
                    idToken = googleIdToken
                    provider = Google
                    nonce = rawNonce
                }

                // Handle successful sign-in
            } catch (e: GetCredentialException) {
                // Handle GetCredentialException thrown by `credentialManager.getCredential()`
            } catch (e: GoogleIdTokenParsingException) {
                // Handle GoogleIdTokenParsingException thrown by `GoogleIdTokenCredential.createFrom()`
            } catch (e: RestException) {
                // Handle RestException thrown by Supabase
            } catch (e: Exception) {
                // Handle unknown exceptions
            }
        }
    }

    Button(
        onClick = onClick,
    ) {
        Text("Sign in with Google")
    }
}
```

### Using Google sign-in with Kotlin Multiplatform

When using [Compose Multiplatform](https://www.jetbrains.com/lp/compose-multiplatform/), you can use the [compose-auth](/docs/reference/kotlin/installing) plugin. On Android it uses the Credential Manager automatically and on other platforms it uses `auth.signInWith(Google)`.

**Initialize the Supabase Client**

**Note:** You have to create OAuth credentials for both a Web and Android application. [Learn more](https://developer.android.com/identity/legacy/one-tap/legacy-get-started)

```kotlin
val supabaseClient = createSupabaseClient(
    supabaseUrl = "SUPABASE_URL",
    supabaseKey = "SUPABASE_KEY"
) {
    install(Auth)
    install(ComposeAuth) {
        googleNativeLogin("WEB_GOOGLE_CLIENT_ID") //Use the Web Client ID, not the Android one!
    }
}
```

**Use the Compose Auth plugin in your Auth Screen**

```kotlin
val authState = supabaseClient.composeAuth.rememberSignInWithGoogle(
    onResult = {
        when(it) { //handle errors
            NativeSignInResult.ClosedByUser -> TODO()
            is NativeSignInResult.Error -> TODO()
            is NativeSignInResult.NetworkError -> TODO()
            NativeSignInResult.Success -> TODO()
        }
    }
)

Button(onClick = { authState.startFlow() }) {
    Text("Sign in with Google")
}
```


  




### Using native sign in for Chrome extensions

Similar to the native sign in for Android, you can use the Chrome browser's [identity APIs](https://developer.chrome.com/docs/extensions/reference/identity/) to launch an authentication flow.

First, you need to configure your `manifest.json` file like so:

```json
{
  "permissions": ["identity"],
  "oauth2": {
    "client_id": "",
    "scopes": ["openid", "email", "profile"]
  }
}
```

Then you should call the [`chrome.identity.launchWebAuthFlow()`](https://developer.chrome.com/docs/extensions/reference/identity/#method-launchWebAuthFlow) function to trigger the sign in flow. On success, call the `supabase.auth.signInWithIdToken()` function to complete sign in with your Supabase project.

```ts
const manifest = chrome.runtime.getManifest()

const url = new URL('https://accounts.google.com/o/oauth2/auth')

url.searchParams.set('client_id', manifest.oauth2.client_id)
url.searchParams.set('response_type', 'id_token')
url.searchParams.set('access_type', 'offline')
url.searchParams.set('redirect_uri', `https://${chrome.runtime.id}.chromiumapp.org`)
url.searchParams.set('scope', manifest.oauth2.scopes.join(' '))

chrome.identity.launchWebAuthFlow(
  {
    url: url.href,
    interactive: true,
  },
  async (redirectedTo) => {
    if (chrome.runtime.lastError) {
      // auth was not successful
    } else {
      // auth was successful, extract the ID token from the redirectedTo URL
      const url = new URL(redirectedTo)
      const params = new URLSearchParams(url.hash)

      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: params.get('id_token'),
      })
    }
  }
)
```
````
