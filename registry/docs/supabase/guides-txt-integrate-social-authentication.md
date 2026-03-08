## Integrate social authentication

Now integrate social authentication with Supabase Auth, starting with Apple authentication.
If you only need to implement Google authentication, you can skip to the [Google authentication](#google-authentication) section.

### Apple authentication

Start by adding the button inside the login screen:

````
```tsx name=app/login.tsx
…
import AppleSignInButton from '@/components/social-auth-buttons/apple/apple-sign-in-button';
…
export default function LoginScreen() {
  return (
    <>
      
      
        …
        
        …
      
    </>
  );
}
…
```
````

For Apple authentication, you can choose between:

- [Invertase's React Native Apple Authentication library](https://github.com/invertase/react-native-apple-authentication) - that supports iOS, Android
- [react-apple-signin-auth](https://react-apple-signin-auth.ahmedtokyo.com/) - that supports Web, also suggested by Invertase
- [Expo's AppleAuthentication library](https://docs.expo.dev/versions/latest/sdk/apple-authentication/) - that supports iOS only

For either option, you need to obtain a Service ID from the [Apple Developer Console](/docs/guides/auth/social-login/auth-apple?queryGroups=framework\&framework=nextjs\&queryGroups=platform\&platform=web#configuration-web).

To enable Apple sign-up on Android and Web, you also need to register the tunnelled URL (e.g., `https://arnrer1-anonymous-8081.exp.direct`) obtained by running:

```bash
npx expo start --tunnel
```

And add it to the **Redirect URLs** field in [your Supabase dashboard Authentication configuration](/dashboard/project/_/auth/url-configuration).

For more information, follow the [Supabase Login with Apple](/docs/guides/auth/social-login/auth-apple) guide.

````
#### Prerequisites

Before proceeding, ensure you have followed the Invertase prerequisites documented in the [Invertase Initial Setup Guide](https://github.com/invertase/react-native-apple-authentication/blob/main/docs/INITIAL_SETUP.md) and the [Invertase Android Setup Guide](https://github.com/invertase/react-native-apple-authentication/blob/main/docs/ANDROID_EXTRA.md).

You need to add two new environment variables to the `.env` file:

```bash
EXPO_PUBLIC_APPLE_AUTH_SERVICE_ID="YOUR_APPLE_AUTH_SERVICE_ID"
EXPO_PUBLIC_APPLE_AUTH_REDIRECT_URI="YOUR_APPLE_AUTH_REDIRECT_URI"
```

#### iOS

Install the `@invertase/react-native-apple-authentication` library:

```bash
npx expo install @invertase/react-native-apple-authentication
```

Then create the iOS specific button component `AppleSignInButton`:


  
    ```tsx name=components/social-auth-buttons/apple/apple-sign-in-button.ios.tsx
    import { supabase } from '@/lib/supabase';
    import { AppleButton, appleAuth } from '@invertase/react-native-apple-authentication';
    import type { SignInWithIdTokenCredentials } from '@supabase/supabase-js';
    import { router } from 'expo-router';
    import { Platform } from 'react-native';

    async function onAppleButtonPress() {
      // Performs login request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        // Note: it appears putting FULL_NAME first is important, see issue #293
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });

      // Get the current authentication state for user
      // Note: This method must be tested on a real device. On the iOS simulator it always throws an error.
      const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

      console.log('Apple sign in successful:', { credentialState, appleAuthRequestResponse });

      if (credentialState === appleAuth.State.AUTHORIZED && appleAuthRequestResponse.identityToken && appleAuthRequestResponse.authorizationCode) {
        const signInWithIdTokenCredentials: SignInWithIdTokenCredentials = {
          provider: 'apple',
          token: appleAuthRequestResponse.identityToken,
          nonce: appleAuthRequestResponse.nonce,
          access_token: appleAuthRequestResponse.authorizationCode,
        };

        const { data, error } = await supabase.auth.signInWithIdToken(signInWithIdTokenCredentials);

        if (error) {
          console.error('Error signing in with Apple:', error);
        }

        if (data) {
          console.log('Apple sign in successful:', data);
          router.navigate('/(tabs)');
        }
      }
    }

    export default function AppleSignInButton() {
      if (Platform.OS !== 'ios') { return <></>; }

      return <AppleButton
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        style={{ width: 160, height: 45 }}
        onPress={() => onAppleButtonPress()}
      />;
    }
    ```
  



  To test functionality on the simulator, remove the `getCredentialStateForUser` check:

  
    
      ```tsx name=components/social-auth-buttons/apple/apple-sign-in-button.ios.tsx
      …
      const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
      …
      ```
    
  


Enable the Apple authentication capability in iOS:


  
    ```json name=app.json
    {
      "expo": {
        …
        "ios": {
          …
          "usesAppleSignIn": true
          …
        },
        …
      }
    }
    ```
  


Add the capabilities to the `Info.plist` file by following the [Expo documentation](https://docs.expo.dev/build-reference/ios-capabilities/#xcode).


  Before testing the app, if you've already built the iOS app, clean the project artifacts:

  ```bash
  npx react-native-clean-project clean-project-auto
  ```

  If issues persist, try completely cleaning the cache, as reported by many users in this [closed issue](https://github.com/invertase/react-native-apple-authentication/issues/23).


Finally, update the iOS project by installing the Pod library and running the Expo prebuild command:

```bash
cd ios
pod install
cd ..
npx expo prebuild
```

Now test the application on a physical device:

```bash
npx expo run:ios --no-build-cache --device
```

You should see the login screen with the Apple authentication button.


  If you get stuck while working through this guide, refer to the [full Invertase example on GitHub](https://github.com/invertase/react-native-apple-authentication?tab=readme-ov-file#react-native-apple-authentication).


#### Android

Install the required libraries:

```bash
npx expo install @invertase/react-native-apple-authentication react-native-get-random-values uuid
```

Next, create the Android-specific `AppleSignInButton` component:


  
    ```tsx name=components/social-auth-buttons/apple/apple-sign-in-button.android.tsx
    import { supabase } from '@/lib/supabase';
    import { appleAuthAndroid, AppleButton } from '@invertase/react-native-apple-authentication';
    import { SignInWithIdTokenCredentials } from '@supabase/supabase-js';
    import { Platform } from 'react-native';
    import 'react-native-get-random-values';
    import { v4 as uuid } from 'uuid';

    async function onAppleButtonPress() {
      // Generate secure, random values for state and nonce
      const rawNonce = uuid();
      const state = uuid();

      // Configure the request
      appleAuthAndroid.configure({
        // The Service ID you registered with Apple
        clientId: process.env.EXPO_PUBLIC_APPLE_AUTH_SERVICE_ID ?? '',

        // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
        // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
        redirectUri: process.env.EXPO_PUBLIC_APPLE_AUTH_REDIRECT_URI ?? '',

        // The type of response requested - code, id_token, or both.
        responseType: appleAuthAndroid.ResponseType.ALL,

        // The amount of user information requested from Apple.
        scope: appleAuthAndroid.Scope.ALL,

        // Random nonce value that will be SHA256 hashed before sending to Apple.
        nonce: rawNonce,

        // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
        state,
      });

      // Open the browser window for user sign in
      const credentialState = await appleAuthAndroid.signIn();
      console.log('Apple sign in successful:', credentialState);

      if (credentialState.id_token && credentialState.code && credentialState.nonce) {
        const signInWithIdTokenCredentials: SignInWithIdTokenCredentials = {
          provider: 'apple',
          token: credentialState.id_token,
          nonce: credentialState.nonce,
          access_token: credentialState.code,
        };

        const { data, error } = await supabase.auth.signInWithIdToken(signInWithIdTokenCredentials);

        if (error) {
          console.error('Error signing in with Apple:', error);
        }

        if (data) {
          console.log('Apple sign in successful:', data);
        }
      }
    }

    export default function AppleSignInButton() {
      if (Platform.OS !== 'android' || appleAuthAndroid.isSupported !== true) { return <></> }

      return <AppleButton
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        onPress={() => onAppleButtonPress()}
      />;
    }
    ```
  


You should now be able to test the authentication by running it on a physical device or simulator:

```bash
npx expo run:android --no-build-cache
```



#### Prerequisites

Before proceeding, as per the mobile options you need an Apple Service ID. To obtain it you can follow the [Invertase Initial Setup Guide](https://github.com/invertase/react-native-apple-authentication/blob/main/docs/INITIAL_SETUP.md) and the [Invertase Android Setup Guide](https://github.com/invertase/react-native-apple-authentication/blob/main/docs/ANDROID_EXTRA.md) mentioned in the Invertase tab.

You also need to add two new environment variables to the `.env` file:

```bash
EXPO_PUBLIC_APPLE_AUTH_SERVICE_ID="YOUR_APPLE_AUTH_SERVICE_ID"
EXPO_PUBLIC_APPLE_AUTH_REDIRECT_URI="YOUR_APPLE_AUTH_REDIRECT_URI"
```

#### Web

Install the required libraries:

```bash
npx expo install react-apple-signin-auth
```

Next, create the Web-specific `AppleSignInButton` component:


  
    ```tsx name=components/social-auth-buttons/apple/apple-sign-in-button.web.tsx
    import { supabase } from '@/lib/supabase';
    import type { SignInWithIdTokenCredentials } from '@supabase/supabase-js';
    import { useEffect, useState } from 'react';
    import AppleSignin, { type AppleAuthResponse } from 'react-apple-signin-auth';
    import { Platform } from 'react-native';

    export default function AppleSignInButton() {
      const [nonce, setNonce] = useState('');
      const [sha256Nonce, setSha256Nonce] = useState('');

      async function onAppleButtonSuccess(appleAuthRequestResponse: AppleAuthResponse) {
        console.debug('Apple sign in successful:', { appleAuthRequestResponse });
        if (appleAuthRequestResponse.authorization && appleAuthRequestResponse.authorization.id_token && appleAuthRequestResponse.authorization.code) {
          const signInWithIdTokenCredentials: SignInWithIdTokenCredentials = {
            provider: 'apple',
            token: appleAuthRequestResponse.authorization.id_token,
            nonce,
            access_token: appleAuthRequestResponse.authorization.code,
          };

          const { data, error } = await supabase.auth.signInWithIdToken(signInWithIdTokenCredentials)

          if (error) {
            console.error('Error signing in with Apple:', error);
          }

          if (data) {
            console.log('Apple sign in successful:', data);
          }
        };
      }

      useEffect(() => {
        function generateNonce(): string {
          const array = new Uint32Array(1);
          window.crypto.getRandomValues(array);
          return array[0].toString();
        };

        async function generateSha256Nonce(nonce: string): Promise {
          const buffer = await window.crypto.subtle.digest('sha-256', new TextEncoder().encode(nonce));
          const array = Array.from(new Uint8Array(buffer));
          return array.map(b => b.toString(16).padStart(2, '0')).join('');
        }

        let nonce = generateNonce();
        setNonce(nonce);

        generateSha256Nonce(nonce)
          .then((sha256Nonce) => { setSha256Nonce(sha256Nonce) });
      }, []);

      if (Platform.OS !== 'web') { return <></>; }

      return <AppleSignin
        authOptions={{
          clientId: process.env.EXPO_PUBLIC_APPLE_AUTH_SERVICE_ID ?? '',
          redirectURI: process.env.EXPO_PUBLIC_APPLE_AUTH_REDIRECT_URI ?? '',
          scope: 'email name',
          state: 'state',
          nonce: sha256Nonce,
          usePopup: true,
        }}
        uiType="dark"
        onSuccess={onAppleButtonSuccess}
        onError={(error: any) => console.error('Apple sign in error:', error)}
      />;
    }
    ```
  


Test the authentication in your browser using the tunneled HTTPS URL:

```bash
npx expo start --tunnel
```



#### Prerequisites

Before proceeding, ensure you have followed the Expo prerequisites documented in the [Expo Setup Guide](https://docs.expo.dev/versions/latest/sdk/apple-authentication/).

#### iOS

Install the `expo-apple-authentication` library:

```bash
npx expo install expo-apple-authentication
```

Enable the Apple authentication capability in iOS and the plugin in `app.json`:


  
    ```json name=app.json
    {
      "expo": {
        …
        "ios": {
          …
          "usesAppleSignIn": true
          …
        },
        "plugins": ["expo-apple-authentication"]
        …
      }
    }
    ```
  


Then create the iOS specific button component `AppleSignInButton`:


  
    ```tsx name=components/social-auth-buttons/apple/apple-sign-in-button.tsx
    import { supabase } from '@/lib/supabase';
    import { AppleButton, appleAuth } from '@invertase/react-native-apple-authentication';
    import type { SignInWithIdTokenCredentials } from '@supabase/supabase-js';
    import { router } from 'expo-router';
    import { Platform } from 'react-native';

    async function onAppleButtonPress() {
      // Performs login request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        // Note: it appears putting FULL_NAME first is important, see issue #293
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });

      // Get the current authentication state for user
      // Note: This method must be tested on a real device. On the iOS simulator it always throws an error.
      const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

      console.log('Apple sign in successful:', { credentialState, appleAuthRequestResponse });

      if (credentialState === appleAuth.State.AUTHORIZED && appleAuthRequestResponse.identityToken && appleAuthRequestResponse.authorizationCode) {
        const signInWithIdTokenCredentials: SignInWithIdTokenCredentials = {
          provider: 'apple',
          token: appleAuthRequestResponse.identityToken,
          nonce: appleAuthRequestResponse.nonce,
          access_token: appleAuthRequestResponse.authorizationCode,
        };

        const { data, error } = await supabase.auth.signInWithIdToken(signInWithIdTokenCredentials);

        if (error) {
          console.error('Error signing in with Apple:', error);
        }

        if (data) {
          console.log('Apple sign in successful:', data);
          router.navigate('/(tabs)');
        }
      }
    }

    export default function AppleSignInButton() {
      if (Platform.OS !== 'ios') { return <></>; }

      return <AppleButton
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        style={{ width: 160, height: 45 }}
        onPress={() => onAppleButtonPress()}
      />;
    }
    ```
  



  The Expo Apple Sign In button does not support the Simulator, so you need to test it on a physical device.
````

### Google authentication

Start by adding the button to the login screen:

````
```tsx name=app/login.tsx
…
import GoogleSignInButton from '@/components/social-auth-buttons/google/google-sign-in-button';
…
export default function LoginScreen() {
  return (
    <>
      
      
        …
        
        …
      
    </>
  );
}
…
```
````

For Google authentication, you can choose between the following options:

- [GN Google Sign In Premium](https://react-native-google-signin.github.io/docs/install#sponsor-only-version) - that supports iOS, Android, and Web by using the latest Google's One Tap sign-in (but [it requires a subscription](https://universal-sign-in.com/))
- [@react-oauth/google](https://github.com/MomenSherif/react-oauth#googlelogin) - that supports Web (so it's not a good option for mobile, but it works)
- Relying on the [`signInWithOAuth`](/docs/reference/javascript/auth-signinwithoauth) function of the Supabase Auth - that also supports iOS, Android and Web (useful also to manage any other OAuth provider)

The [GN Google Sign In Free](https://react-native-google-signin.github.io/docs/install#public-version-free) doesn't support iOS or Android, as [it doesn't allow to pass a custom nonce](https://github.com/react-native-google-signin/google-signin/issues/1176) to the sign-in request.

For either option, you need to obtain a Web Client ID from the Google Cloud Engine, as explained in the [Google Sign In](/docs/guides/auth/social-login/auth-google?queryGroups=platform\&platform=react-native#react-native) guide.

This guide only uses the [@react-oauth/google@latest](https://github.com/MomenSherif/react-oauth#googlelogin) option for the Web, and the [`signInWithOAuth`](/docs/reference/javascript/auth-signinwithoauth) for the mobile platforms.

Before proceeding, add a new environment variable to the `.env` file:

```bash
EXPO_PUBLIC_GOOGLE_AUTH_WEB_CLIENT_ID="YOUR_GOOGLE_AUTH_WEB_CLIENT_ID"
```

````
Create the mobile generic button component `GoogleSignInButton`:


  
    ```tsx name=components/social-auth-buttons/google/google-sign-in-button.tsx
    import { supabase } from '@/lib/supabase';
    import { useEffect } from 'react';
    import { TouchableOpacity } from 'react-native';

    import { expo } from '@/app.json';
    import { Text } from '@react-navigation/elements';
    import { Image } from 'expo-image';
    import * as WebBrowser from "expo-web-browser";

    WebBrowser.maybeCompleteAuthSession();

    export default function GoogleSignInButton() {

      function extractParamsFromUrl(url: string) {
        const parsedUrl = new URL(url);
        const hash = parsedUrl.hash.substring(1); // Remove the leading '#'
        const params = new URLSearchParams(hash);

        return {
          access_token: params.get("access_token"),
          expires_in: parseInt(params.get("expires_in") || "0"),
          refresh_token: params.get("refresh_token"),
          token_type: params.get("token_type"),
          provider_token: params.get("provider_token"),
          code: params.get("code"),
        };
      };

      async function onSignInButtonPress() {
        console.debug('onSignInButtonPress - start');
        const res = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: `${expo.scheme}://google-auth`,
            queryParams: { prompt: "consent" },
            skipBrowserRedirect: true,
          },
        });

        const googleOAuthUrl = res.data.url;

        if (!googleOAuthUrl) {
          console.error("no oauth url found!");
          return;
        }

        const result = await WebBrowser.openAuthSessionAsync(
          googleOAuthUrl,
          `${expo.scheme}://google-auth`,
          { showInRecents: true },
        ).catch((err) => {
          console.error('onSignInButtonPress - openAuthSessionAsync - error', { err });
          console.log(err);
        });

        console.debug('onSignInButtonPress - openAuthSessionAsync - result', { result });

        if (result && result.type === "success") {
          console.debug('onSignInButtonPress - openAuthSessionAsync - success');
          const params = extractParamsFromUrl(result.url);
          console.debug('onSignInButtonPress - openAuthSessionAsync - success', { params });

          if (params.access_token && params.refresh_token) {
            console.debug('onSignInButtonPress - setSession');
            const { data, error } = await supabase.auth.setSession({
              access_token: params.access_token,
              refresh_token: params.refresh_token,
            });
            console.debug('onSignInButtonPress - setSession - success', { data, error });
            return;
          } else {
            console.error('onSignInButtonPress - setSession - failed');
            // sign in/up failed
          }
        } else {
          console.error('onSignInButtonPress - openAuthSessionAsync - failed');
        }
      }

      // to warm up the browser
      useEffect(() => {
        WebBrowser.warmUpAsync();

        return () => {
          WebBrowser.coolDownAsync();
        };
      }, []);

      return (
        <TouchableOpacity
          onPress={onSignInButtonPress}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#dbdbdb',
            borderRadius: 4,
            paddingVertical: 10,
            paddingHorizontal: 15,
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2, // For Android shadow
          }}
          activeOpacity={0.8}
        >
          <Image
            source={{ uri: 'https://developers.google.com/identity/images/g-logo.png' }}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#757575',
              fontFamily: 'Roboto-Regular', // Assuming Roboto is available; install via expo-google-fonts or similar if needed
              fontWeight: '500',
            }}
          >
            Sign in with Google
          
        
      );
    }
    ```
  


Finally, update the iOS and Android projects by running the Expo prebuild command:

```bash
npx expo prebuild --clean
```

Now test the application on both iOS and Android:

```bash
npx expo run:ios && npx expo run:android
```

You should see the login screen with the Google authentication button.

![Supabase Social Auth example](/docs/img/supabase-expo-social-auth-tabs.png)



Install the `@react-oauth/google` library:

```bash
npx expo install @react-oauth/google
```

Enable the `expo-web-browser` plugin in `app.json`:


  
    ```json name=app.json
    {
      "expo": {
        …
        "plugins": [
          …
          [
            "expo-web-browser",
            {
              "experimentalLauncherActivity": false
            }
          ]
          …
        ],
        …
      }
    }
    ```
  


Then create the iOS specific button component `GoogleSignInButton`:


  
    ```tsx name=components/social-auth-buttons/google/google-sign-in-button.web.tsx
    import { supabase } from '@/lib/supabase';
    import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
    import { SignInWithIdTokenCredentials } from '@supabase/supabase-js';
    import { useEffect, useState } from 'react';

    import 'react-native-get-random-values';

    export default function GoogleSignInButton() {

      // Generate secure, random values for state and nonce
      const [nonce, setNonce] = useState('');
      const [sha256Nonce, setSha256Nonce] = useState('');

      async function onGoogleButtonSuccess(authRequestResponse: CredentialResponse) {
        console.debug('Google sign in successful:', { authRequestResponse });
        if (authRequestResponse.clientId && authRequestResponse.credential) {
          const signInWithIdTokenCredentials: SignInWithIdTokenCredentials = {
            provider: 'google',
            token: authRequestResponse.credential,
            nonce: nonce,
          };

          const { data, error } = await supabase.auth.signInWithIdToken(signInWithIdTokenCredentials);

          if (error) {
            console.error('Error signing in with Google:', error);
          }

          if (data) {
            console.log('Google sign in successful:', data);
          }
        }
      }

      function onGoogleButtonFailure() {
        console.error('Error signing in with Google');
      }

      useEffect(() => {
        function generateNonce(): string {
          const array = new Uint32Array(1);
          window.crypto.getRandomValues(array);
          return array[0].toString();
        }

        async function generateSha256Nonce(nonce: string): Promise {
          const buffer = await window.crypto.subtle.digest('sha-256', new TextEncoder().encode(nonce));
          const array = Array.from(new Uint8Array(buffer));
          return array.map(b => b.toString(16).padStart(2, '0')).join('');
        }

        let nonce = generateNonce();
        setNonce(nonce);

        generateSha256Nonce(nonce)
          .then((sha256Nonce) => { setSha256Nonce(sha256Nonce) });
      }, []);

      return (
        <GoogleOAuthProvider
          clientId={process.env.EXPO_PUBLIC_GOOGLE_AUTH_WEB_CLIENT_ID ?? ''}
          nonce={sha256Nonce}
        >
          <GoogleLogin
            nonce={sha256Nonce}
            onSuccess={onGoogleButtonSuccess}
            onError={onGoogleButtonFailure}
            useOneTap={true}
            auto_select={true}
          />
        
      );
    }
    ```
  


Test the authentication in your browser using the tunnelled HTTPS URL:

```bash
npx expo start --tunnel
```


  To allow the Google Sign In to work, as you did before for Apple, you need to register the tunnelled URL (e.g., `https://arnrer1-anonymous-8081.exp.direct`) obtained to the Authorized JavaScript origins list of your [Google Cloud Console's OAuth 2.0 Client IDs](https://console.cloud.google.com/auth/clients/) configuration.
````
