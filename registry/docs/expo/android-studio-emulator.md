# Android Studio Emulator

Learn how to set up the Android Emulator to test your app on a virtual Android device.

If you don't have an Android device available to test with, we recommend using the default emulator that comes with Android Studio. If you run into any problems setting it up, follow the steps in this guide.

## Install Watchman and JDK

#### Prerequisites

Use a package manager such as [Homebrew](https://brew.sh/) to install the following dependency.

#### Install dependencies

[Install Watchman](https://facebook.github.io/watchman/docs/install#macos) using a tool such as Homebrew:

```sh
brew install watchman
```

Install OpenJDK distribution called Azul Zulu using Homebrew. This distribution offers JDKs for both Apple Silicon and Intel Macs.

Run the following commands in a terminal:

```sh
brew install --cask zulu@17
```

After you install the JDK, add the `JAVA_HOME` environment variable in **~/.bash\_profile** (or **~/.zshrc** if you use Zsh):

```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
```

## Set up Android Studio

Download and install [Android Studio](https://developer.android.com/studio).

Open the **Android Studio** app, you will see the **SDK Components setup** screen. Click **Next** to continue to install the Android SDK and Android SDK Platform. Click **Next** again to verify the settings and install.

By default, Android Studio will install the latest version of the Android SDK. However, Android 15 (`VanillaIceCream`) SDK is required to compile a React Native app.

Open Android Studio, go to **Settings** > **Languages & Frameworks** > **Android SDK**. From the **SDK Platforms** tab, and under **Android 15 (`VanillaIceCream`)**, select **Android SDK Platform 35** and **Sources for Android 35**.

Then, click on the **SDK Tools** tab and make sure you have at least one version of the **Android SDK Build-Tools** and **Android Emulator** installed.

Copy or remember the path listed in the box that says **Android SDK Location**.

Add the following lines to your **/.zprofile** or **~/.zshrc** (if you are using bash, then **~/.bash\_profile** or **~/.bashrc**) config file:

```sh
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Reload the path environment variables in your current shell:

```sh
source $HOME/.zshrc
source $HOME/.bashrc
```

Finally, make sure that you can run `adb` from your terminal.

Troubleshooting: Android Studio not recognizing JDK

If Android Studio doesn't recognize your homebrew installed JDK, you can create a Gradle configuration file to explicitly set the Java path:

1. Create a Gradle properties file in your home directory:

   ```sh
   touch ~/.gradle/gradle.properties
   ```

2. Add the following line to the **gradle.properties** file, replacing the path with your actual Java installation path:

   ```bash
   java.home=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
   ```

3. If you have an existing `.gradle` folder in your project directory, delete it and reopen your project in Android Studio:

   ```sh
   rm -rf .gradle
   ```

This should resolve issues with Android Studio not detecting your JDK installation.

## Set up an emulator

On the Android Studio main screen, click **More Actions**, then **Virtual Device Manager** in the dropdown.

Click the **Create device** button.

Under **Add device**, choose the type of hardware you'd like to emulate. We recommend testing against a variety of devices, but if you're unsure where to start, the newest device in the Pixel line could be a good choice.

Select an OS version to load on the emulator (probably one of the system images), and download the image (if required).

Change any other settings you'd like, and press **Finish** to create the emulator. You can now run this emulator anytime by pressing the Play button in the AVD Manager window.

## Troubleshooting

### Multiple `adb` versions

Having multiple `adb` versions on your system can result in the following error:

```sh
adb server version (xx) doesn't match this client (xx); killing...
```

This is because the `adb` version on your system is different from the `adb` version on the Android SDK platform-tools.

Open the terminal and check the `adb` version on the system:

```sh
adb version
```

And from the Android SDK platform-tool directory:

```sh
cd ~/Library/Android/sdk/platform-tools
./adb version
```

Copy `adb` from Android SDK directory to `usr/bin` directory:

```sh
sudo cp ~/Library/Android/sdk/platform-tools/adb /usr/bin
```

***

# iOS Simulator
