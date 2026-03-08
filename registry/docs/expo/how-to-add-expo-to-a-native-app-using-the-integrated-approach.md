# How to add Expo to a native app using the integrated approach

A guide for adding Expo and React Native to existing native (brownfield) apps using the integrated approach.

React Native and Expo are flexible and can be adopted incrementally, one screen (or even one view) at a time. You might even find that using Expo in this way is the best fit for your particular application, or you may end up slowly adopting it across more surfaces in your app. Either way, this flexibility allows enables developers to adopt modern, cross-platform tools in their native apps immediately instead of risking a complete rewrite.

This guide will walk you through the steps to add a React Native view into an existing native app. The approach covered here is what we call the "integrated" approach, because React Native and Expo are integrated in the same way that you would any other library.

> Another popular technique is what we call the "isolated" approach, where your Expo app is packaged as a library and treated as a black box by the main existing application. See the [isolated approach guide](/brownfield/isolated-approach) for details.

## Prerequisites

To integrate React Native into your existing application, you'll need to set up a JavaScript development environment. This includes installing Node.js to run Expo CLI and Yarn to manage the project's JavaScript dependencies.

- [Node.js (LTS)](https://nodejs.org/en/): The runtime to execute JavaScript code and Expo CLI.
- [Yarn](https://yarnpkg.com/): A package manager for installing and managing JavaScript dependencies.
- iOS [CocoaPods](https://cocoapods.org/): one of the dependency management system available for iOS. CocoaPods is a Ruby [gem](https://en.wikipedia.org/wiki/RubyGems). You can install CocoaPods using the version of Ruby that ships with the latest version of macOS.

Learn more from the [Set up environment guide](/get-started/set-up-your-environment).

## Create an Expo project

First, create an Expo project inside your existing native project's root directory.

```sh
npx create-expo-app@latest my-project --template default@sdk-55
```

This command creates a new directory named **my-project** that contains your new Expo project. While you can name the project anything, this guide uses **my-project** for consistency. The new project includes an example TypeScript application to help you get started.

## Set up your project structure

A standard React Native project places native code in **android** and **ios** directories. The specifics of how to do this depend on your project, but it could be as simple as creating the directories and moving your projects there. For example:

```sh
mkdir my-project/android
mv /path/to/your/android-project my-project/android/
```

Can't move your native projects to android and ios directories?

### Set up a monorepo

Monorepos, or "monolithic repositories", are single repositories containing multiple apps or packages. [Learn more](/guides/monorepos).

Setting up a monorepo will ensure that Android and iOS scripts will be able to invoke commands from Node libraries even with a custom folder structure. To set up a Yarn monorepo, create a **package.json** file at the root of your project and add the following content:

```json
{
  "version": "1.0.0",
  "private": true,
  "workspaces": ["my-project"]
}
```

Then run `yarn install` to install the dependencies. This will ensure **node\_modules** are installed at the root of your project, and that native scripts can interact with React Native code. Make sure to change `["my-project"]` to the name of the Expo project you created in the previous step.

> Opting for a monorepo requires you to configure a custom project root, in Gradle/CocoaPods. This will be covered in the next sections.

## Configuring your native project

To integrate React Native on Android, you need to configure the native project by modifying the following files:

- **Gradle files**: **settings.gradle**, top-level **build.gradle**, **app/build.gradle**, and **gradle.properties** to add the React Native Gradle Plugin (RNGP) and other properties.
- **AndroidManifest.xml**: To add necessary permissions. ([Learn more](/brownfield/integrated-approach#configuring-your-manifest))
- **MainActivity**: To load your React Native application.

### Configuring Gradle

Start by editing your **settings.gradle** file and add the following lines (Use the [bare minimum template](https://github.com/expo/expo/blob/main/templates/expo-template-bare-minimum/android/settings.gradle) as a reference):

```groovy
// Configures the React Native Gradle Settings plugin used for autolinking
pluginManagement {
  def reactNativeGradlePlugin = new File(
    providers.exec {
      workingDir(rootDir)
      commandLine("node", "--print", "require.resolve('@react-native/gradle-plugin/package.json', { paths: [require.resolve('react-native/package.json')] })")
    }.standardOutput.asText.get().trim()
  ).getParentFile().absolutePath
  includeBuild(reactNativeGradlePlugin)

  def expoPluginsPath = new File(
    providers.exec {
      workingDir(rootDir)
      commandLine("node", "--print", "require.resolve('expo-modules-autolinking/package.json', { paths: [require.resolve('expo/package.json')] })")
    }.standardOutput.asText.get().trim(),
    "../android/expo-gradle-plugin"
  ).absolutePath
  includeBuild(expoPluginsPath)
}

plugins {
  id("com.facebook.react.settings")
  id("expo-autolinking-settings")
}

extensions.configure(com.facebook.react.ReactSettingsExtension) { ex ->
  ex.autolinkLibrariesFromCommand(expoAutolinking.rnConfigCommand)
}
expoAutolinking.useExpoModules()

// rootProject.name = 'HelloWorld'

expoAutolinking.useExpoVersionCatalog()

includeBuild(expoAutolinking.reactNativeGradlePlugin)
// Include your existing Gradle modules here.
// include(":app")
```

Using a custom folder structure?

If you're using a custom folder structure, you need to explicitly set your project root in **settings.gradle** for autolinking to work. Modify the following lines:

Then open your top-level **build.gradle** and include this line (as suggested from the [bare minimum template](https://github.com/expo/expo/blob/main/templates/expo-template-bare-minimum/android/build.gradle)):

This makes sure the React Native Gradle and the Expo plugins are available and applied inside your project.

Add the following lines inside your app's **build.gradle** file (usually **app/build.gradle** — you can use the [bare minimum template file as reference](https://github.com/expo/expo/blob/main/templates/expo-template-bare-minimum/android/app/build.gradle)):

Using a custom folder structure?

If you're using a custom folder structure, you need to adjust the `projectRoot` value to point to root of your Expo project in **app/build.gradle**. Modify the following lines:

Finally, open your app's **gradle.properties** file and add the following lines (use the [bare minimum template file as reference](https://github.com/expo/expo/blob/main/templates/expo-template-bare-minimum/android/gradle.properties)):

```properties
reactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64
newArchEnabled=true
hermesEnabled=true
```

### Configuring your manifest

First, make sure you have the `INTERNET` permission in your **AndroidManifest.xml**:

Now in your **debug** **AndroidManifest.xml**, enable [cleartext traffic](https://developer.android.com/training/articles/security-config#CleartextTrafficPermitted):

This is necessary for your app to communicate with your local [Metro bundler](https://metrobundler.dev/) via HTTP. You can use the **AndroidManifest.xml** files from the bare minimum template as a reference: [main](https://github.com/expo/expo/blob/main/templates/expo-template-bare-minimum/android/app/src/main/AndroidManifest.xml) and [debug](https://github.com/expo/expo/blob/main/templates/expo-template-bare-minimum/android/app/src/debug/AndroidManifest.xml)

### Integrating with your code

Now, you need to add some native code to start the React Native runtime and tell it to render your React components.

#### Updating your `Application` class

Start by updating your `Application` class to initialize React Native. You can use **MainApplication.kt** from the [bare minimum template](https://github.com/expo/expo/blob/main/templates/expo-template-bare-minimum/android/app/src/main/java/com/helloworld/MainApplication.kt) as a reference:

#### Creating a `ReactActivity`

Create a new `Activity` that will extend `ReactActivity` and host the React Native code. This activity will be responsible for starting the React Native runtime and rendering the React component. You can use the [**MainActivity.kt** from bare minimum template file](https://github.com/expo/expo/blob/main/templates/expo-template-bare-minimum/android/app/src/main/java/com/helloworld/MainActivity.kt) as a reference:

```kotlin
// package <your-package-here>

import android.os.Build

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

import expo.modules.ReactActivityDelegateWrapper

class MyReactActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "main"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate {
    return ReactActivityDelegateWrapper(
          this,
          BuildConfig.IS_NEW_ARCHITECTURE_ENABLED,
          object : DefaultReactActivityDelegate(
              this,
              mainComponentName,
              fabricEnabled
          ){})
  }
}
```

Add the new Activity to your **AndroidManifest.xml** file, make sure to set the theme of `MyReactActivity` to `Theme.AppCompat.Light.NoActionBar` (or to any non-ActionBar theme) to avoid your application rendering an `ActionBar` on top of the React Native screen:

Now your activity is ready to run some JavaScript code.

## Test your integration

You have completed all the basic steps to integrate React Native with your application. Now run the following command in the React Native directory to start the [Metro bundler](https://metrobundler.dev/)

```sh
yarn start
```

Metro builds your TypeScript application code into a bundle, serves it through its HTTP server, and shares the bundle from `localhost` on your developer environment to a simulator or device, allowing for [hot reloading](https://reactnative.dev/blog/2016/03/24/introducing-hot-reloading). Now you can build and run your app as normal. Once you reach your React-powered Activity inside the app, it should load the JavaScript code from the development server.

***

# Configuring lifecycle listeners
