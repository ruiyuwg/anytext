## 6. Test your integration[​](#6-test-your-integration "Direct link to 6. Test your integration")

You have completed all the basic steps to integrate React Native with your application. Now we will start the [Metro bundler](https://metrobundler.dev/) to build your TypeScript application code into a bundle. Metro's HTTP server shares the bundle from `localhost` on your developer environment to a simulator or device. This allows for [hot reloading](https://reactnative.dev/blog/2016/03/24/introducing-hot-reloading).

First, you need to create a `metro.config.js` file in the root of your project as follows:

js

```
const {getDefaultConfig} = require('@react-native/metro-config');
module.exports = getDefaultConfig(__dirname);
```

You can checkout the [`metro.config.js` file](https://github.com/react-native-community/template/blob/0.84-stable/template/metro.config.js) from the Community template file as reference.

Once you have the configuration file in place, you can run the bundler. Run the following command in the root directory of your project:

- npm
- Yarn

shell

```
npm start
```

shell

```
yarn start
```

Now build and run your Android app as normal.

Once you reach your React-powered Activity inside the app, it should load the JavaScript code from the development server and display:

![](/docs/assets/EmbeddedAppAndroidVideo.gif)

### Creating a release build in Android Studio[​](#creating-a-release-build-in-android-studio "Direct link to Creating a release build in Android Studio")

You can use Android Studio to create your release builds too! It’s as quick as creating release builds of your previously-existing native Android app.

The React Native Gradle Plugin will take care of bundling the JS code inside your APK/App Bundle.

If you're not using Android Studio, you can create a release build with:

```
cd android
# For a Release APK
./gradlew :app:assembleRelease
# For a Release AAB
./gradlew :app:bundleRelease
```

### Now what?[​](#now-what "Direct link to Now what?")

At this point you can continue developing your app as usual. Refer to our [debugging](/docs/debugging.md) and [deployment](/docs/running-on-device.md) docs to learn more about working with React Native.

## Key Concepts[​](#key-concepts "Direct link to Key Concepts")

The keys to integrating React Native components into your iOS application are to:

1. Set up the correct directory structure.
2. Install the necessary NPM dependencies.
3. Adding React Native to your Podfile configuration.
4. Writing the TypeScript code for your first React Native screen.
5. Integrate React Native with your iOS code using a `RCTRootView`.
6. Testing your integration by running the bundler and seeing your app in action.

## Using the Community Template[​](#using-the-community-template "Direct link to Using the Community Template")

While you follow this guide, we suggest you to use the [React Native Community Template](https://github.com/react-native-community/template/) as reference. The template contains a **minimal iOS app** and will help you understanding how to integrate React Native into an existing iOS app.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

Follow the guide on [setting up your development environment](/docs/set-up-your-environment.md) and using [React Native without a framework](/docs/getting-started-without-a-framework.md) to configure your development environment for building React Native apps for iOS. This guide also assumes you're familiar with the basics of iOS development such as creating a `UIViewController` and editing the `Podfile` file.

### 1. Set up directory structure[​](#1-set-up-directory-structure "Direct link to 1. Set up directory structure")

To ensure a smooth experience, create a new folder for your integrated React Native project, then **move your existing iOS project** to the `/ios` subfolder.

## 2. Install NPM dependencies[​](#2-install-npm-dependencies "Direct link to 2. Install NPM dependencies")

Go to the root directory and run the following command:

shell

```
curl -O https://raw.githubusercontent.com/react-native-community/template/refs/heads/0.84-stable/template/package.json
```

This will copy the `package.json` [file from the Community template](https://github.com/react-native-community/template/blob/0.84-stable/template/package.json) to your project.

Next, install the NPM packages by running:

- npm
- Yarn

shell

```
npm install
```

shell

```
yarn install
```

Installation process has created a new `node_modules` folder. This folder stores all the JavaScript dependencies required to build your project.

Add `node_modules/` to your `.gitignore` file (here the [Community default one](https://github.com/react-native-community/template/blob/0.84-stable/template/_gitignore)).

### 3. Install Development tools[​](#3-install-development-tools "Direct link to 3. Install Development tools")

### Command Line Tools for Xcode[​](#command-line-tools-for-xcode "Direct link to Command Line Tools for Xcode")

Install the Command Line Tools. Choose **Settings... (or Preferences...)** in the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

![Xcode Command Line Tools](/assets/images/GettingStartedXcodeCommandLineTools-a319295928960a4458698528086e3230.png)

### CocoaPods[​](#cocoapods "Direct link to CocoaPods")

[CocoaPods](https://cocoapods.org) is a package management tool for iOS and macOS development. We use it to add the actual React Native framework code locally into your current project.

We recommend installing CocoaPods using [Homebrew](https://brew.sh/):

shell

```
brew install cocoapods
```
