## iOS device with a development build (EAS)

### Set up an iOS device with a development build

#### Enroll in the Apple Developer Program

To install a development build on your iOS device, you will need an active subscription to the Apple Developer Program. Sign up for the [Apple Developer Program here](https://developer.apple.com/programs/).

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

#### Create an ad hoc provisioning profile

To install a development build on your iOS device, you will need to create an ad hoc provisioning profile. Create one by running the following command in your terminal:

```sh
eas device:create
```

#### Create a development build

Run the following command to create a development build:

```sh
eas build --platform ios --profile development
```

#### Install the development build on your device

After the build is complete, scan the QR code in your terminal and tap **Open with iTunes** when it appears inside the Camera app. Alternatively, open the link displayed in the terminal on your device.

After confirming the installation, the app will appear in your device's app library.

#### Turn on developer mode

1. Open **Settings** > **Privacy & Security**, scroll down to the **Developer Mode** list item and navigate into it.
2. Tap the switch to enable **Developer Mode**. After you do so, Settings presents an alert to warn you that Developer Mode reduces your device's security. To continue enabling **Developer Mode**, tap the alert's **Restart** button.
3. After the device restarts and you unlock it, the device shows an alert confirming that you want to enable Developer Mode. Tap **Turn On**, and enter your device passcode when prompted.

> Alternatively, if you have Xcode installed on your Mac, you can use it to [enable iOS developer mode](/guides/ios-developer-mode/#connect-an-ios-device-with-a-mac).

***
