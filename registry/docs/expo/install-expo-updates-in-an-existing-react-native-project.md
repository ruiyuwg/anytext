# Install expo-updates in an existing React Native project

Learn how to install and configure expo-updates in your existing React Native project.

`expo-updates` is a library that enables your app to manage remote updates to your application code. It communicates with the configured remote update service to get information about available updates. This guide explains how to set up a bare React Native project for use with [EAS Update](/eas-update/introduction), a hosted remote update service that includes tools to simplify installation and configuration of the `expo-updates` library.

Do you use Continuous Native Generation (CNG) in your project?

You may be reading the wrong guide. To use `expo-updates` in a project that uses [CNG](/workflow/continuous-native-generation), see [EAS Update "Get started"](/eas-update/getting-started).

## Prerequisites

**The `expo` package must be installed and configured.** If you created your project with `npx @react-native-community/cli@latest init` and do not have any other Expo libraries installed, you will need to [install Expo modules](/bare/installing-expo-modules) before proceeding.

## Installation

To get started, install `expo-updates`:

```sh
npx expo install expo-updates
```

Then, install pods for iOS:

```sh
npx pod-install
```

## Configuring expo-updates library

Apply the changes from the diffs from the following sections to configure `expo-updates` in your project.

### JavaScript and JSON

Run `eas update:configure` to set the `updates` URL and `projectId` in **app.json**.

```sh
eas update:configure
```

Modify the `expo` section of **app.json**. If you created your project using `npx @react-native-community/cli@latest init`, you will need to add the following changes including the [`updates` URL](/versions/latest/config/app#url).

> The example `updates` URL and `projectId` shown below are used with EAS Update. The EAS CLI sets this URL correctly for the EAS Update service when running `eas update:configure`.

If you want to set up a [custom `expo-updates` server](https://github.com/expo/custom-expo-updates-server) instead, add your URL to `updates.url` in **app.json**.

```diff
"expo": {
  "name": "MyApp",
- "updates": {
- "url": "https://u.expo.dev/[your-project-id]"
- }
+ "updates": {
+ "url": "http://localhost:3000/api/manifest"
+ }
  }
  }
```

### Android

Modify **android/app/build.gradle** to check for the JS engine configuration (JSC or Hermes) in Expo files:

Modify **android/app/src/main/AndroidManifest.xml** to add the `expo-updates` configuration XML so that it matches the contents of **app.json**:

If using the updates server URL (a custom non-HTTPS update server running on the same machine), you will need to modify **android/app/src/main/AndroidManifest.xml** to add the update server URL and enable `usesCleartextTraffic`:

Add the Expo runtime version string key to **android/app/src/main/res/values/strings.xml**:

### iOS

Add the file **Podfile.properties.json** to the **ios** directory:

```json
{
  "expo.jsEngine": "hermes"
}
```

Modify **ios/Podfile** to check for the JS engine configuration (JSC or Hermes) in Expo files:

Using Xcode, add **Expo.plist** file to **ios/your-project/Supporting** with the following content to match the contents of **app.json**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>EXUpdatesCheckOnLaunch</key>
    <string>ALWAYS</string>
    <key>EXUpdatesEnabled</key>
    <true/>
    <key>EXUpdatesLaunchWaitMs</key>
    <integer>0</integer>
    <key>EXUpdatesRuntimeVersion</key>
    <string>1.0.0</string>
    <key>EXUpdatesURL</key>
    <string>http://localhost:3000/api/manifest</string>
  </dict>
</plist>
```

## Next steps

- To start using EAS Update with EAS Build, see the EAS Update [Get started](/eas-update/getting-started).
- See [`expo-updates` API reference](/versions/latest/sdk/updates) for more information on how to use the library.
- See how to use [EAS Update with a local build directly](/eas-update/standalone-service).
- It is also possible to use `expo-updates` with a custom server that implements the [Expo Updates protocol](/technical-specs/expo-updates-1). See [`custom-expo-updates-server` README](https://github.com/expo/custom-expo-updates-server#readme).

***

# Install expo-dev-client in an existing React Native project
