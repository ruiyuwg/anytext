## Project setup

To support Sign In with Google, you need to configure the Google provider for your Supabase project.

````
Regardless of whether you use application code or Google's pre-built solutions to implement the sign in flow, you need to configure your project by obtaining a Client ID and Client Secret in the [Clients](https://console.cloud.google.com/auth/clients) section of the Google Auth Platform console:

1.  [Create a new OAuth client ID](https://console.cloud.google.com/auth/clients/create) and choose **Web application** for the application type.
2.  Under **Authorized JavaScript origins** add your application's URL. These should also be configured as the [Site URL or redirect configuration in your project](/docs/guides/auth/redirect-urls).
    *   If your app is hosted on `https://example.com/app` add `https://example.com`.
    *   Add `http://localhost:<port>` while developing locally. Remember to remove this when your application [goes into production](/docs/guides/deployment/going-into-prod).
3.  Under **Authorized redirect URIs** add your Supabase project's callback URL.
    *   Access it from the [Google provider page on the Dashboard](/dashboard/project/_/auth/providers?provider=Google).
    *   For local development, use `http://127.0.0.1:54321/auth/v1/callback`.
4.  Click `Create` and make sure you save the Client ID and Client Secret.
    *   Add these values to the [Google provider page on the Dashboard](/dashboard/project/_/auth/providers?provider=Google).



1.  [Create a new OAuth client ID](https://console.cloud.google.com/auth/clients/create) and choose **Android** or **iOS** depending on the OS you're building the app for.
    *   For Android, use the instructions on screen to provide the SHA-1 certificate fingerprint used to sign your Android app.
    *   You will have a different set of SHA-1 certificate fingerprints for testing locally and going to production. Make sure to add both to the Google Cloud Console, and add all of the Client IDs to the Supabase dashboard.
    *   For iOS, use the instructions on screen to provide the app Bundle ID, and App Store ID and Team ID if the app is already published on the Apple App Store.
2.  Register the Client ID in the [Google provider page on the Dashboard](/dashboard/project/_/auth/providers?provider=Google).



1.  [Create a new OAuth client ID](https://console.cloud.google.com/auth/clients/create) and choose **Android** or **iOS** depending on the OS you're building the app for.
    *   For Android, use the instructions on screen to provide the SHA-1 certificate fingerprint used to sign your Android app.
    *   You will have a different set of SHA-1 certificate fingerprints for testing locally and going to production. Make sure to add both to the Google Cloud Console, and add all of the Client IDs to the Supabase dashboard.
    *   For iOS, use the instructions on screen to provide the app Bundle ID, and App Store ID and Team ID if the app is already published on the Apple App Store.
2.  Register the Client ID in the [Google provider page on the Dashboard](/dashboard/project/_/auth/providers?provider=Google).
    *   For iOS enable the `Skip nonce check` option.

For iOS add a `CFBundleURLTypes` key in the `<project>/ios/Runner/Info.plist` file:

```xml


CFBundleURLTypes

  
    CFBundleTypeRole
    Editor
    CFBundleURLSchemes
    
      
      
      com.googleusercontent.apps.861823949799-vc35cprkp249096uujjn0vvnmcvjppkn
    
  


```



Follow the same configuration guide as if your app was a Web application when building a desktop Flutter application.



Google sign-in with Supabase is done through the [`GoogleSignIn-iOS`](https://github.com/google/GoogleSignIn-iOS) package.

When the user provides consent, Google issues an identity token (commonly abbreviated as ID token) that is then sent to your project's Supabase Auth server. When valid, a new user session is started by issuing an access and refresh token from Supabase Auth.

Follow the code sample below to implement native Google sign-in with Supabase in your iOS app.

```swift
import GoogleSignIn

class GoogleSignInViewController: UIViewController {
  ...

  func googleSignIn() async throws {
    let result = try await GIDSignIn.sharedInstance.signIn(withPresenting: self)

    guard let idToken = result.user.idToken?.tokenString else {
      print("No idToken found.")
      return
    }

    let accessToken = result.user.accessToken.tokenString

    try await supabase.auth.signInWithIdToken(
      credentials: OpenIDConnectCredentials(
        provider: .google,
        idToken: idToken,
        accessToken: accessToken
      )
    )
  }
  ...

}
```

### Configuration \[#ios-configuration]

1.  Follow the integration instructions on the [get started with Google Sign-In](https://developers.google.com/identity/sign-in/ios/start-integrating) for the iOS guide.
2.  Configure the [OAuth Consent Screen](https://console.cloud.google.com/apis/credentials/consent). This information is shown to the user when giving consent to your app. In particular, make sure you have set up links to your app's privacy policy and terms of service.
3.  Add web client ID and iOS client ID from step 1 in the [Google provider on the Supabase Dashboard](/dashboard/project/_/auth/providers), under *Client IDs*, separated by a comma. Enable the `Skip nonce check` option.



1.  [Create a new OAuth client ID](https://console.cloud.google.com/auth/clients/create) and choose **Android** or **iOS** if also building an iOS app with Kotlin Multiplatform.
    *   For Android, use the instructions on screen to provide the SHA-1 certificate fingerprint used to sign your Android app.
    *   You will have a different set of SHA-1 certificate fingerprints for testing locally and going to production. Make sure to add both to the Google Cloud Console, and add all of the Client IDs to the Supabase dashboard.
    *   For iOS (with Kotlin Multiplatform), use the instructions on screen to provide the app Bundle ID, and App Store ID and Team ID if the app is already published on the Apple App Store.
2.  Register the Client ID in the [Google provider page on the Dashboard](/dashboard/project/_/auth/providers?provider=Google).



1.  [Create a new OAuth client ID](https://console.cloud.google.com/auth/clients/create) and choose **Chrome Extension** for application type.
    *   Enter your extension's Item ID and optionally verify app ownership.
2.  Register the Client ID in the [Google provider page on the Dashboard](/dashboard/project/_/auth/providers?provider=Google) under *Client IDs*.
````

### Local development

To use the Google provider in local development:

1. Add a new environment variable:
   ```env
   SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_SECRET="<client-secret>"
   ```
2. Configure the provider in `supabase/config.toml`:
   ```toml
   [auth.external.google]
   enabled = true
   client_id = "<client-id>"
   secret = "env(SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_SECRET)"
   skip_nonce_check = false
   ```

If you have multiple client IDs, such as one for Web, iOS and Android, concatenate all of the client IDs with a comma but make sure the web's client ID is first in the list.

### Using the management API

Use the [PATCH `/v1/projects/{ref}/config/auth` Management API endpoint](/docs/reference/api/v1-update-auth-service-config) to configure the project's Auth settings programmatically. For configuring the Google provider send these options:

```json
{
  "external_google_enabled": true,
  "external_google_client_id": "your-google-client-id",
  "external_google_secret": "your-google-client-secret"
}
```
