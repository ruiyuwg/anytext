# Expo Documentation

Expo is an open-source React Native framework for apps that run natively on Android, iOS, and the web. Expo brings together the best of mobile and the web and enables many important features for building and scaling an app such as live updates, instantly sharing your app, and web support. The company behind Expo also offers Expo Application Services (EAS), which are deeply integrated cloud services for Expo and React Native apps.

# Introduction

# Introduction

Get started creating apps with Expo.

Expo is a framework that makes developing Android and iOS apps easier. Our framework provides file-based routing, a standard library of native modules, and much more. Expo is open source with an active community on [GitHub](https://github.com/expo/expo) and [Discord](https://chat.expo.dev).

We also make [Expo Application Services (EAS)](https://expo.dev/eas), a set of services that complement the Expo framework in each step of the development process.

To get started visit:

[Quick start docs](/get-started/create-a-project) — Create a project, set up your development environment, and start developing.

***

# Create a project

# Create a project

Learn how to create a new Expo project.

System requirements:

- [Node.js (LTS)](https://nodejs.org/en/).
- macOS, Windows (Powershell and [WSL 2](https://expo.fyi/wsl)), and Linux are supported.

We recommend starting with the default project created by `create-expo-app`. The default project includes example code to help you get started.

To create a new project, run the following command:

```sh
npx create-expo-app@latest --template default@sdk-55
```

> **Note:** During the SDK 55 transition period, `create-expo-app@latest` without the `--template` flag creates an SDK 54 project. If you plan to use Expo Go on a physical device, use an SDK 54 project. Otherwise, use `--template default@sdk-55` to create an SDK 55 project. You can also choose a different template by adding the [`--template` option](/more/create-expo#--template).

## Next step

You have a project. Now it's time to set up your development environment so that you can start developing.

***

# Set up your environment

# Set up your environment

Learn how to set up your development environment to start building with Expo.

Let's set up a local development environment for running your project on Android and iOS.

## Where would you like to develop?

We recommend using a real device to develop, since you'll get to see exactly what your users will see.

## How would you like to develop?

Expo Go is a playground for students and learners to try Expo quickly. A development build is a build of your own app that includes Expo's developer tools.

## Android device with Expo Go

### Set up an Android device with Expo Go

Scan the QR code to download the app from the Google Play Store, or visit the Expo Go page on the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent\&referrer=docs).

Download link: <https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=docs>

***

## Android device with a development build (EAS)

### Set up an Android device with a development build

#### Install EAS CLI

To build your app, you will need to install EAS CLI. You can do this by running the following command in your terminal:

```sh
npm install -g eas-cli
```

#### Create an Expo account and login

To build your app, you will need to create an Expo account and login to the EAS CLI.

1. [Sign up](https://expo.dev/signup) for an Expo account.
2. Run the following command in your terminal to log in to the EAS CLI:

```sh
eas login
```

#### Configure your project

Run the following command to create an EAS config in your project:

```sh
eas build:configure
```

#### Create a build

Run the following command to create a development build:

```sh
eas build --platform android --profile development
```

#### Install the development build on your device

After the build is complete, scan the QR code in your terminal or open the link on your device. Tap **Install** to download the build on your device, then tap **Open** to install it.

***
