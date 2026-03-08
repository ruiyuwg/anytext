## 3. Adding React Native to your app[​](#3-adding-react-native-to-your-app "Direct link to 3. Adding React Native to your app")

### Configuring Gradle[​](#configuring-gradle "Direct link to Configuring Gradle")

React Native uses the React Native Gradle Plugin to configure your dependencies and project setup.

First, let's edit your `settings.gradle` file by adding those lines (as suggested from the [Community template](https://github.com/react-native-community/template/blob/0.84-stable/template/android/settings.gradle)):

groovy

```
// Configures the React Native Gradle Settings plugin used for autolinking
pluginManagement { includeBuild("../node_modules/@react-native/gradle-plugin") }
plugins { id("com.facebook.react.settings") }
extensions.configure(com.facebook.react.ReactSettingsExtension){ ex -> ex.autolinkLibrariesFromCommand() }
// If using .gradle.kts files:
// extensions.configure<com.facebook.react.ReactSettingsExtension> { autolinkLibrariesFromCommand() }
includeBuild("../node_modules/@react-native/gradle-plugin")

// Include your existing Gradle modules here.
// include(":app")
```

Then you need to open your top level `build.gradle` and include this line (as suggested from the [Community template](https://github.com/react-native-community/template/blob/0.84-stable/template/android/build.gradle)):

diff

```
buildscript {
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:7.3.1")
+       classpath("com.facebook.react:react-native-gradle-plugin")
    }
}
```

This makes sure the React Native Gradle Plugin (RNGP) is available inside your project. Finally, add those lines inside your Applications's `build.gradle` file (it's a different `build.gradle` file usually inside your `app` folder - you can use the [Community template file as reference](https://github.com/react-native-community/template/blob/0.84-stable/template/android/build.gradle)):

diff

```
apply plugin: "com.android.application"
+apply plugin: "com.facebook.react"

repositories {
    mavenCentral()
}

dependencies {
    // Other dependencies here
+   // Note: we intentionally don't specify the version number here as RNGP will take care of it.
+   // If you don't use the RNGP, you'll have to specify version manually.
+   implementation("com.facebook.react:react-android")
+   implementation("com.facebook.react:hermes-android")
}

+react {
+   // Needed to enable Autolinking - https://github.com/react-native-community/cli/blob/master/docs/autolinking.md
+   autolinkLibrariesWithApp()
+}
```

Finally, open your application `gradle.properties` files and add the following line (here the [Community template file as reference](https://github.com/react-native-community/template/blob/0.84-stable/template/android/gradle.properties)):

diff

```
+reactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64
+newArchEnabled=true
+hermesEnabled=true
```

### Configuring your manifest[​](#configuring-your-manifest "Direct link to Configuring your manifest")

First, make sure you have the Internet permission in your `AndroidManifest.xml`:

diff

```
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

+   <uses-permission android:name="android.permission.INTERNET" />

    <application
      android:name=".MainApplication">
    </application>
</manifest>
```

Then you need to enable [cleartext traffic](https://developer.android.com/training/articles/security-config#CleartextTrafficPermitted) in your **debug** `AndroidManifest.xml`:

diff

```
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <application
+       android:usesCleartextTraffic="true"
+       tools:targetApi="28"
    />
</manifest>
```

As usual, here the AndroidManifest.xml file from the Community template to use as a reference: [main](https://github.com/react-native-community/template/blob/0.84-stable/template/android/app/src/main/AndroidManifest.xml) and [debug](https://github.com/react-native-community/template/blob/0.84-stable/template/android/app/src/debug/AndroidManifest.xml).

This is needed as your application will communicate with your local bundler, [Metro](https://metrobundler.dev/), via HTTP.

Make sure you add this only to your **debug** manifest.
