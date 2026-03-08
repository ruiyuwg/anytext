## iOS Simulator with a development build (EAS)

### Set up an iOS Simulator with a development build

### Set up Xcode

#### Install Xcode

Open up the Mac App Store, search for [Xcode](https://apps.apple.com/us/app/xcode/id497799835), and click **Install** (or **Update** if you have it already).

#### Install Xcode Command Line Tools

Open Xcode, choose **Settings...** from the Xcode menu (or press cmd ⌘ + ,). Go to the **Locations** and install the tools by selecting the most recent version in the **Command Line Tools** dropdown.

#### Install an iOS Simulator in Xcode

To install an iOS Simulator, open **Xcode > Settings... > Components**, and under **Platform Support > iOS ...**, click **Get**.

#### Install Watchman

[Watchman](https://facebook.github.io/watchman/docs/install#macos) is a tool for watching changes in the filesystem. Installing it will result in better performance. You can install it with:

```sh
brew update
brew install watchman
```

### Create a development build

#### Install EAS CLI

To build your app, you will need to install EAS CLI. You can do this by running the following command in your terminal:

```sh
npm install -g eas-cli
```

#### Create an Expo account and login

Next, you will need to create an Expo account and login to the EAS CLI.

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

#### Adjust your build profile

To create a simulator-compatible development build, you'll need to update your build profile in **eas.json** to set the `ios.simulator` property to `true`:

```json eas.json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      /* @info */
      "ios": {
        "simulator": true
      }
      /* @end */
    }
  }
}
```

#### Create a development build

Run the following command to create a development build:

```sh
eas build --platform ios --profile development
```

#### Install the development build on your simulator

After the build is complete, the CLI will prompt you to automatically download and install it on the iOS Simulator. When prompted, press Y to directly install it on the simulator.

If you miss this prompt, you can download the build from the link provided in the terminal and drag and drop it onto the iOS Simulator to install it.

***

## iOS Simulator with a development build (local)

### Set up an iOS Simulator with a development build

### Set up Xcode and Watchman

#### Install Xcode

Open up the Mac App Store, search for [Xcode](https://apps.apple.com/us/app/xcode/id497799835), and click **Install** (or **Update** if you have it already).

#### Install Xcode Command Line Tools

Open Xcode, choose **Settings...** from the Xcode menu (or press cmd ⌘ + ,). Go to the **Locations** and install the tools by selecting the most recent version in the **Command Line Tools** dropdown.

#### Install an iOS Simulator in Xcode

To install an iOS Simulator, open **Xcode > Settings... > Components**, and under **Platform Support > iOS ...**, click **Get**.

#### Install Watchman

[Watchman](https://facebook.github.io/watchman/docs/install#macos) is a tool for watching changes in the filesystem. Installing it will result in better performance. You can install it with:

```sh
brew update
brew install watchman
```

### Running your app on an iOS Simulator

#### Install expo-dev-client

Run the following command in your project's root directory:

```sh
npx expo install expo-dev-client
```

Run the following from your terminal:

```sh
npx expo run:ios
```

> This command runs a development server after building your app. You can skip running `npx expo start` on the next page.

## Next step

You have a project and a development environment. Now it's time to start developing.

***

# Start developing
