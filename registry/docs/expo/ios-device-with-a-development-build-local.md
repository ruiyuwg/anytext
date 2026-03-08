## iOS device with a development build (local)

### Set up an iOS device with a development build

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

### Configure your project

#### Install expo-dev-client

Run the following command in your project's root directory:

```sh
npx expo install expo-dev-client
```

#### Plug in your device via USB and enable developer mode

1. Connect your iOS device to your Mac using a USB cable. Unlock the device and tap **Trust** if prompted.

2. Open Xcode. From the menu bar, select **Window** > **Devices and Simulators**. You will see a warning in Xcode to enable developer mode.

3. On your iOS device, open **Settings** > **Privacy & Security**, scroll down to the **Developer Mode** list item and navigate into it.

4. Tap the switch to enable **Developer Mode**. After you do so, Settings presents an alert to warn you that Developer Mode reduces your device's security. To continue enabling **Developer Mode**, tap the alert's **Restart** button.

5. After the device restarts and you unlock it, the device shows an alert confirming that you want to enable Developer Mode. Tap **Turn On**, and enter your device passcode when prompted.

#### Run the project on your device

1. Add the `ios.bundleIdentifier` in the **app.json** file in the root directory to a unique value so that Xcode generates the provisioning profile for the app signing step.

2. Run the following command in your project's root directory and select your plugged in device from the list:

```sh
npx expo run:ios --device
```

> This command runs a development server after building your app. You can skip running `npx expo start` on the next page.

***

## iOS Simulator with Expo Go

### Set up an iOS Simulator with Expo Go

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

### Install Expo Go

When you start a development server with `npx expo start` on the [start developing](/get-started/start-developing) page, press i to open the iOS Simulator. Expo CLI will install Expo Go automatically.

***
