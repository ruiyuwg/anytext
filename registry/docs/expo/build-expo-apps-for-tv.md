# Build Expo apps for TV

A guide for building an Expo app for an Android TV or Apple TV target.

> Not all Expo features and SDK libraries are available on TV. For more details, check the [See which libraries are supported](/guides/building-for-tv#see-which-libraries-are-supported).

React Native is supported on Android TV and Apple TV through the [React Native TV project](https://github.com/react-native-tvos/react-native-tvos). This technology extends beyond TV, offering a comprehensive core repo fork with support for phone and TV targets, including Hermes and Fabric.

Using the React Native TV library as the `react-native` dependency in an Expo project, it becomes capable of targeting both mobile (Android, iOS) and TV (Android TV, Apple TV) devices.

## Prerequisites

The necessary changes to the native Android and iOS files are minimal and can be automated with a [config plugin](https://github.com/react-native-tvos/config-tv/tree/main/packages/config-tv) if you use [prebuild](/more/glossary-of-terms#prebuild). Below is a list of changes made by the config plugins, which you can alternatively apply manually:

### Android

- **AndroidManifest.xml** is modified:
  - The default phone portrait orientation is removed
  - The required intent for TV apps is added
- **MainApplication.kt** is modified to remove unsupported Flipper invocations

### iOS

- **ios/Podfile** is modified to target tvOS instead of iOS
- The Xcode project is modified to target tvOS instead of iOS
- The splash screen (**SplashScreen.storyboard**) is modified to work on tvOS

## System requirements for TV development

### Android TV

- [Node.js (LTS)](https://nodejs.org/en/) on macOS or Linux.
- Android Studio (Iguana or later).
- In the Android Studio SDK manager, select the dropdown for the Android SDK you are using (API version 31 or later), and make sure an Android TV system image is selected for installation. (For Apple silicon, choose the ARM 64 image. Otherwise, choose the Intel x86\_64 image).
- After installing the Android TV system image, create an Android TV emulator using that image (the process is the same as creating an Android phone emulator).

### Apple TV

- [Node.js (LTS)](https://nodejs.org/en/) on macOS.
- Xcode 16 or later.
- tvOS SDK 17 or later. (This is not installed automatically with Xcode. You can install it later with `xcodebuild -downloadAllPlatforms`).

## Quick start

The fastest way to generate a new project is described in the [TV example](https://github.com/expo/examples/tree/master/with-tv) within the Expo examples repository:

```sh
npx create-expo-app MyTVProject -e with-tv
```

You can start with the [TV Router example](https://github.com/expo/examples/tree/master/with-router-tv):

```sh
npx create-expo-app MyTVProject -e with-router-tv
```

This creates a new project that uses [Expo Router](/router/introduction) for file-based navigation, modeled after the [**create-expo-app** default template](/get-started/create-a-project).

See which libraries are supported

At this time, TV applications work with the following libraries and APIs listed below:

- [AppleAuthentication](/versions/latest/sdk/apple-authentication)
- [Application](/versions/latest/sdk/application)
- [Audio](/versions/latest/sdk/audio)
- [Asset](/versions/latest/sdk/asset)
- [AsyncStorage](/versions/latest/sdk/async-storage)
- [AV](/versions/latest/sdk/av)
- [BackgroundTask](/versions/latest/sdk/background-task)
- [BlurView](/versions/latest/sdk/blur-view)
- [BuildProperties](/versions/latest/sdk/build-properties)
- [Constants](/versions/latest/sdk/constants)
- [Crypto](/versions/latest/sdk/crypto)
- [DevClient](/versions/latest/sdk/dev-client)
- [Device](/versions/latest/sdk/device)
- [Expo UI](/versions/latest/sdk/ui)
- [FileSystem](/versions/latest/sdk/filesystem)
- [FlashList](/versions/latest/sdk/flash-list)
- [Font](/versions/latest/sdk/font)
- [GlassEffect](/versions/latest/sdk/glass-effect)
- [Image](/versions/latest/sdk/image)
- [ImageManipulator](/versions/latest/sdk/imagemanipulator)
- [KeepAwake](/versions/latest/sdk/keep-awake)
- [LinearGradient](/versions/latest/sdk/linear-gradient)
- [Localization](/versions/latest/sdk/localization)
- [Manifests](/versions/latest/sdk/manifests)
- [MediaLibrary](/versions/latest/sdk/media-library)
- [NetInfo](/versions/latest/sdk/netinfo)
- [Network](/versions/latest/sdk/network)
- [Reanimated](/versions/latest/sdk/reanimated)
- [SafeAreaContext](/versions/latest/sdk/safe-area-context)
- [SecureStore](/versions/latest/sdk/securestore)
- [Skia](/versions/latest/sdk/skia)
- [SplashScreen](/versions/latest/sdk/splash-screen)
- [SQLite](/versions/latest/sdk/sqlite)
- [Svg](/versions/latest/sdk/svg)
- [SystemUI](/versions/latest/sdk/system-ui)
- [TaskManager](/versions/latest/sdk/task-manager)
- [TrackingTransparency](/versions/latest/sdk/tracking-transparency)
- [Updates](/versions/latest/sdk/updates)
- [Video](/versions/latest/sdk/video)
- [VideoThumbnails](/versions/latest/sdk/video-thumbnails)

TV also works with [React Navigation](https://reactnavigation.org/), [React Native Skia](https://shopify.github.io/react-native-skia/), and many other commonly used third-party React Native libraries. See [React Native directory](https://reactnative.directory/?tvos=true) to learn more about supported third-party libraries.

#### Limitations

- The [Expo DevClient](/versions/latest/sdk/dev-client) library is only supported in SDK 54 and later:
  - **Android TV**: All operations are supported, similar to an Android phone.
  - **Apple TV**: Basic operations with a local or tunneled packager are supported. Authentication to EAS and listing of EAS builds and updates is not yet supported.

## Integration with an existing Expo project

The following walkthrough describes the steps required to modify an Expo project for TV.

### Modify dependencies for TV

In **package.json**, modify the `react-native` dependency to use the TV repo, and exclude this dependency from [`npx expo install` version validation](/more/expo-cli#configuring-dependency-validation).

> The `react-native-tvos` version should match the Expo SDK you are using. For example, Expo SDK 54 uses React Native 0.81, so you should use `react-native-tvos@0.81-stable` (the latest 0.81 version) as shown below. See the [SDK compatibility table](/versions/latest#each-expo-sdk-version-depends-on-a-react-native-version) for the correct version to use for older SDKs.

```json
{
  ... 
  "dependencies": {
    ... 
    "react-native": "npm:react-native-tvos@0.81-stable",
    ... 
  },
  "expo": {
    "install": {
      "exclude": [
        "react-native"
      ]
    }
  }
}
```

### Add the TV config plugin

```sh
npx expo install @react-native-tvos/config-tv -- --dev
```

When installed, the plugin will modify the project for TV when either:

- The environment variable `EXPO_TV` is set to `1`
- The plugin parameter `isTV` is set to `true`

Verify that this plugin appears in **app.json**:

```json
{
  "plugins": ["@react-native-tvos/config-tv"]
}
```

To see additional information on the plugin's actions during prebuild, you can set [debug environment variables](https://github.com/debug-js/debug#conventions) before running prebuild. (See also our documentation on [Expo CLI environment variables](/more/expo-cli#environment-variables).)

```sh
export DEBUG=expo:*
export DEBUG=expo:react-native-tvos:config-tv
```

### Run prebuild

Set the `EXPO_TV` environment variable, and run prebuild to make the TV modifications to the project.

```sh
export EXPO_TV=1
npx expo prebuild --clean
```

> **Note**: The `--clean` argument is recommended, and is required if you have existing Android and iOS directories in the project.

### Build for Android TV

Start an Android TV emulator and use the following command to start the app on the emulator:

```sh
npx expo run:android
```

### Build for Apple TV

Run the following command to build and run the app on an Apple TV simulator:

```sh
npx expo run:ios
```

### Revert TV changes and build for phone

You can revert the changes for TV and go back to phone development by unsetting `EXPO_TV` and running prebuild again:

```sh
unset EXPO_TV
npx expo prebuild --clean
```

### Create EAS Build profiles for both TV and phone

Since the TV build can be driven by the value of an environment variable, it is easy to set up EAS Build profiles that build from the same source but target TV instead of phone.

The following example **eas.json** shows how to extend existing profiles (`development` and `preview`) to create TV profiles (`development_tv` and `preview_tv`).

```json
{
  "cli": {
    "version": ">= 5.2.0"
  },
  "build": {
    "base": {
      "distribution": "internal",
      "ios": {
        "simulator": true
      },
      "android": {
        "buildType": "apk",
        "withoutCredentials": true
      },
      "channel": "base"
    },
    "development": {
      "extends": "base",
      "android": {
        "gradleCommand": ":app:assembleDebug"
      },
      "ios": {
        "buildConfiguration": "Debug"
      },
      "channel": "development"
    },
    "development_tv": {
      "extends": "development",
      "env": {
        "EXPO_TV": "1"
      },
      "channel": "development"
    },
    "preview": {
      "extends": "base",
      "channel": "preview"
    },
    "preview_tv": {
      "extends": "preview",
      "env": {
        "EXPO_TV": "1"
      },
      "channel": "preview"
    }
  },
  "submit": {}
}
```

## Examples and demonstration projects

[IgniteTV](https://github.com/react-native-tvos/IgniteTV) — A project generated with the Ignite CLI that can be built for mobile or TV.

[SkiaMultiplatform](https://github.com/react-native-tvos/SkiaMultiplatform) — Demonstrates React Native Skia on mobile, TV, and web.

[NativewindMultiplatform](https://github.com/react-native-tvos/NativewindMultiplatform) — Demonstrates using TailwindCSS styling on mobile, TV, and web.

***

# Using Next.js with Expo for Web
