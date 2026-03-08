# Submit to app stores

Learn how to submit your app to Google Play Store and Apple App Store from the command line with EAS Submit.

**EAS Submit** is a hosted service that allows uploading and submitting app binaries to the app stores using EAS CLI. This guide describes how to submit your app to the Google Play Store and Apple App Store using EAS Submit.

[How to quickly publish to the App Store & Play Store with EAS Submit](https://www.youtube.com/watch?v=-KZjr576tuE) — EAS Submit makes it easy to publish your apps to the App Store and Play Store with a simple command.

## Apple App Store

Prerequisites

4 requirements

1.

Sign up for an Apple Developer account

An Apple Developer account is required to submit your app to the Apple App Store. You can sign up for an Apple Developer account on the [Apple Developer Portal](https://developer.apple.com/account/).

2.

Include a bundle identifier in app.json

Include your app's bundle identifier in **app.json**:

```json
{
  "ios": {
    "bundleIdentifier": "com.yourcompany.yourapp"
  }
}
```

3.

Install EAS CLI and authenticate with your Expo account

Install EAS CLI and login with your Expo account:

```sh
npm install -g eas-cli && eas login
```

4.

Build a production app

You'll need a production build ready for store submission. You can create one using [EAS Build](/build/introduction):

```sh
eas build --platform ios --profile production
```

Alternatively, you can build the app on your own computer with `eas build --platform ios --profile production --local` or with Xcode.

Once you have completed all the prerequisites, you can start the submission process.

Run the following command to submit a build to the Apple App Store:

```sh
eas submit --platform ios
```

The command will lead you step by step through the process of submitting the app.

## Google Play Store

Prerequisites

7 requirements

1.

Sign up for a Google Play Developer account

A Google Play Developer account is required to submit your app to the Google Play Store. You can sign up for a Google Play Developer account on the [Google Play Console sign-up page](https://play.google.com/apps/publish/signup/).

2.

Create a Google Service Account

EAS requires you to upload and configure a Google Service Account Key to submit your Android app to the Google Play Store. You can create one with the [uploading a Google Service Account Key for Play Store submissions with EAS](https://github.com/expo/fyi/blob/main/creating-google-service-account.md) guide.

3.

Create an app on Google Play Console

Create an app by clicking **Create app** in the [Google Play Console](https://play.google.com/apps/publish/).

4.

Install EAS CLI and authenticate with your Expo account

Install EAS CLI and login with your Expo account:

```sh
npm install -g eas-cli && eas login
```

5.

Include a package name in app.json

Include your app's package name in **app.json**:

```json
{
  "android": {
    "package": "com.yourcompany.yourapp"
  }
}
```

6.

Build a production app

You'll need a production build ready for store submission. You can create one using [EAS Build](/build/introduction):

```sh
eas build --platform android --profile production
```

Alternatively, you can build the app on your own computer with `eas build --platform android --profile production --local` or with Android Studio.

7.

Upload your app manually at least once

You have to upload your app manually at least once. This is a limitation of the Google Play Store API.

Learn how with the [first submission of an Android app](https://expo.fyi/first-android-submission) guide.

Once you have completed all the prerequisites, you can start the submission process.

Run the following command to submit a build to the Google Play Store:

```sh
eas submit --platform android
```

The command will lead you step by step through the process of submitting the app.

## Build and submit automatically

You can automatically create builds and submit them to the app stores with [EAS Workflows](/eas/workflows/introduction). First, you'll need to [configure your project](/eas/workflows/get-started), add a file named **.eas/workflows/build-and-submit.yml** at the root of your project, then add the following workflow configuration:

```yaml
name: Build and submit

on:
  push:
    branches: ['main']

jobs:
  build_android:
    name: Build Android app
    type: build
    params:
      platform: android
      profile: production
  build_ios:
    name: Build iOS app
    type: build
    params:
      platform: ios
      profile: production
  submit_android:
    name: Submit Android
    type: submit
    needs: [build_android]
    params:
      build_id: ${{ needs.build_android.outputs.build_id }}
  submit_ios:
    name: Submit iOS
    type: submit
    needs: [build_ios]
    params:
      build_id: ${{ needs.build_ios.outputs.build_id }}
```

The workflow above will create Android and iOS builds on every commit to your project's `main` branch, then submit them to the Google Play and Apple App Store respectively. You can also run this workflow manually with the following EAS CLI command:

```sh
eas workflow:run build-and-submit.yml
```

Learn more about common patterns with the [workflows examples guide](/eas/workflows/examples/introduction).

## Manual submission to app stores

You can also submit your app manually to the Google Play Store and Apple App Store.

[Manual Apple App Store submission](/guides/local-app-production#app-submission-using-app-store-connect) — Learn how to submit your app manually to Apple App Store.

[Manual Google Play Store submission](https://expo.fyi/first-android-submission) — Follow the steps on manually submitting your app to Google Play Store.

## Next step

[Configure EAS Submit with eas.json](/submit/eas-json) — Learn how to pre-configure your project using eas.json file with EAS Submit and more about Android or iOS specific options.

***

# App stores metadata
