# How to add Expo to a native app using the isolated approach

A guide for adding Expo and React Native as a native library and integrating it into an existing (brownfield) native app using the isolated approach.

In the isolated approach, your React Native code is developed and maintained separately from your native project. You package it as a native library, using an AAR for Android or XCFramework for iOS, and integrate it into your native app like any other dependency.

This approach is ideal when you want to minimize the impact of React Native on your existing native build process, or when you have separate teams for native and React Native development. Using this approach, native developers don't need Node.js, Yarn, or any React Native build tooling, and they can just consume pre-built artifacts.

> For an alternative approach where React Native is integrated directly into your native project, see the [integrated approach guide](/brownfield/integrated-approach).

## Prerequisites

To integrate React Native into your existing application, you'll need to set up a JavaScript development environment. This includes installing Node.js to run Expo CLI and Yarn to manage the project's JavaScript dependencies.

- [Node.js (LTS)](https://nodejs.org/en/): The runtime to execute JavaScript code and Expo CLI.
- [Yarn](https://yarnpkg.com/): A package manager for installing and managing JavaScript dependencies.

Learn more from the [Set up environment guide](/get-started/set-up-your-environment).

## Set up an Expo project

### Create a new Expo project

Run the following command to create a new directory named **my-project** that contains your new Expo project. While you can name the project anything, this guide uses **my-project** for consistency.

```sh
npx create-expo-app@latest my-project --template default@sdk-55
```

The **my-project** does not need to live inside your existing native app and can be created in a separate repository or a monorepo. The new project includes an example TypeScript application to help you get started.

### Install expo-brownfield

Navigate to your new Expo project and install the `expo-brownfield` library, which provides the tools to build your React Native code as native libraries and integrate them into your existing native app.

```sh
npx expo install expo-brownfield
```

### Adjust the config plugin (optional)

`expo-brownfield` should automatically add an entry to the `plugins` array in your **app.json**, using the default configuration, which is sufficient for most projects.

```json
{
  "expo": {
    "plugins": ["expo-brownfield"]
  }
}
```

The defaults are derived from your app config (for example, target names are based on your app's scheme or slug). You can also pass options to customize the target names, bundle identifiers, and publishing configuration.

Custom expo-brownfield configuration

```json
{
  "expo": {
    "plugins": [
      [
        "expo-brownfield",
        {
          "ios": {
            "targetName": "MyBrownfield",
            "bundleIdentifier": "com.example.mybrownfield"
          },
          "android": {
            "libraryName": "mybrownfield",
            "group": "com.example",
            "package": "com.example.mybrownfield",
            "version": "1.0.0"
          }
        }
      ]
    ]
  }
}
```

See the [`expo-brownfield` API reference](/versions/v55.0.0/sdk/brownfield) for details on all available options.

## Export your Expo project as a native library

Once you have your Expo project set up, use the `expo-brownfield` CLI to build your React Native code as AARs for Android and XCFrameworks for iOS.

From your Expo project directory, run:

```sh
npx expo-brownfield build:android
```

This will build the AAR and publish it to a Maven repository. By default, it publishes to your local Maven repository (`~/.m2`), but it can also be configured to publish to a remote repository. The produced artifact name will be determined by your config plugin settings, in this case `com.username.myproject:brownfield:1.0.0`.

See the [API reference](/versions/v55.0.0/sdk/brownfield) for more details on build options, such as building only debug or release, specifying a custom output directory, and more.

Debugging native targets

If you need to debug native code of the Expo project targets, you can run `npx expo prebuild` to generate the native projects with the brownfield library targets, inside the **android** and **ios\`** directories.

```sh
npx expo prebuild
```

The above command generates the following:

- **Android**: A separate library module containing `ReactNativeHostManager`, `BrownfieldActivity`, `ReactNativeFragment`, `ReactNativeViewFactory`, and `BrownfieldMessaging`.
- **iOS**: A separate Xcode framework target containing `ReactNativeHostManager`, `ReactNativeViewController`, `ReactNativeView` (SwiftUI), `BrownfieldMessaging`, and `ReactNativeDelegate`.

## Integrate into your native app

With the artifacts built, you can now integrate them into your existing native app. The exact steps will depend on your project structure and build system, but the general process involves adding the pre-built artifacts as dependencies and initializing the React Native host.

#### Add the Maven dependency

Start by adding the dependency to your app's **build.gradle.kts**. The group, artifact name, and version should match your config plugin settings:

```kotlin
dependencies {
  implementation("com.username.myproject:brownfield:1.0.0")
}
```

If the library was published to local Maven, make sure to add `mavenLocal()` to your repository configuration:

```kotlin
dependencyResolutionManagement {
  repositories {
    google()
    mavenCentral()
    mavenLocal()
  }
}
```

#### Show a React Native screen

Create an activity that extends `BrownfieldActivity` and use the `showReactNativeFragment()` extension:

```kotlin
import android.os.Bundle
import com.example.brownfield.BrownfieldActivity
import com.example.brownfield.showReactNativeFragment

class ExpoActivity : BrownfieldActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    showReactNativeFragment()
  }
}
```

Add the activity to your **AndroidManifest.xml** with a non-ActionBar theme:

```xml
<activity
  android:name=".ExpoActivity"
  android:theme="@style/Theme.AppCompat.Light.NoActionBar"
  android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
/>
```

Then launch it from anywhere in your app:

```kotlin
startActivity(Intent(this, ExpoActivity::class.java))
```

`BrownfieldActivity` extends `AppCompatActivity` and handles forwarding configuration changes to Expo modules. The `showReactNativeFragment()` extension also sets up native back button handling automatically.

## Test your integration

You have completed all the basic steps to integrate React Native with your application. Now it's time to test it out. The exact process will depend on whether you're running a debug or release build.

### Development (debug builds)

Now run the following command in the React Native directory to start the [Metro bundler](https://metrobundler.dev/)

```sh
npx expo start
```

Then, build and run the native app from Android Studio or Xcode. When you navigate to the React Native screen, it will load from the Metro dev server with hot reloading support.

### Production (release builds)

In release builds, the JavaScript bundle is embedded in the artifact (AAR or XCFramework), so the Metro server is not needed. Build the native app in Release configuration and verify the React Native screen loads correctly.

## Next steps

[Lifecycle listeners](/brownfield/lifecycle-listeners) — Configure application lifecycle listeners for deeper integration with Expo modules.

[expo-brownfield API reference](/versions/v55.0.0/sdk/brownfield) — Explore the full JavaScript API for communication, navigation, and more.

***

# How to add Expo to a native app using the integrated approach
