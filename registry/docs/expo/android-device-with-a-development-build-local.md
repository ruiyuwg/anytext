## Android device with a development build (local)

### Set up an Android device with a development build

### Install Watchman and JDK

##### macOS

##### Prerequisites

Use a package manager such as [Homebrew](https://brew.sh/) to install the following dependency.

##### Install dependencies

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

##### Windows

##### Prerequisites

Use a package manager such as [Chocolatey](https://chocolatey.org/) to install the following dependencies.

##### Install dependencies

Install [Java SE Development Kit (JDK)](https://openjdk.org/):

```sh
choco install -y microsoft-openjdk17
```

##### Linux

##### Install dependencies

Follow [instructions from the Watchman documentation](https://facebook.github.io/watchman/docs/install#linux) to compile and install it from the source.

Install [Java SE Development Kit (JDK)](https://openjdk.org/):

You can download and install [OpenJDK@17](http://openjdk.java.net/) from [AdoptOpenJDK](https://adoptopenjdk.net/) or your system packager.

### Set up Android Studio

##### macOS

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

**Troubleshooting: Android Studio not recognizing JDK**

If Android Studio doesn't recognize your homebrew installed JDK, you can create a Gradle configuration file to explicitly set the Java path:

1. Create a Gradle properties file in your home directory:

```sh
touch ~/.gradle/gradle.properties
```

2. Add the following line to the **gradle.properties** file, replacing the path with your actual Java installation path:

   ```bash gradle.properties
   java.home=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
   ```

3. If you have an existing `.gradle` folder in your project directory, delete it and reopen your project in Android Studio:

```sh
rm -rf .gradle
```

This should resolve issues with Android Studio not detecting your JDK installation.

##### Windows

Download [Android Studio](https://developer.android.com/studio).

Open **Android Studio Setup**. Under **Select components to install**, select Android Studio and Android Virtual Device. Then, click **Next**.

In the Android Studio Setup Wizard, under **Install Type**, select **Standard** and click **Next**.

The Android Studio Setup Wizard will ask you to verify the settings, such as the version of Android SDK, platform-tools, and so on. Click **Next** after you have verified.

In the next window, accept licenses for all available components.

By default, Android Studio will install the latest version of the Android SDK. However, Android 15 (`VanillaIceCream`) SDK is required to compile a React Native app.

Open Android Studio, go to **Settings** > **Languages & Frameworks** > **Android SDK**. From the **SDK Platforms** tab, and under **Android 15 (`VanillaIceCream`)**, select **Android SDK Platform 35** and **Sources for Android 35**.

Then, click on the **SDK Tools** tab and make sure you have at least one version of the **Android SDK Build-Tools** and **Android Emulator** installed.

After the tools installation is complete, configure the `ANDROID_HOME` environment variable. Go to **Windows Control Panel** > **User Accounts** > **User Accounts** (again) > **Change my environment variables** and click **New** to create a new `ANDROID_HOME` user variable. The value of this variable will point to the path to your Android SDK:

**How to find installed SDK location?**

By default, the Android SDK is installed at the following location:

```bash
%LOCALAPPDATA%\Android\Sdk
```

To find the location of the SDK in Android Studio manually, go to **Settings** > **Languages & Frameworks** > **Android SDK**. See the location next to **Android SDK Location**.

To verify that the new environment variable is loaded, open **PowerShell**, and copy and paste the following command:

```sh
Get-ChildItem -Path Env:
```

The command will output all user environment variables. In this list, see if `ANDROID_HOME` has been added.

To add platform-tools to the Path, go to **Windows Control Panel** > **User Accounts** > **User Accounts** (again) > **Change my environment variables** > **Path** > **Edit** > **New** and add the path to the platform-tools to the list as shown below:

**How to find installed platform-tools location**

By default, the platform-tools are installed at the following location:

```bash
%LOCALAPPDATA%\Android\Sdk\platform-tools
```

Finally, make sure that you can run `adb` from the PowerShell. For example, run the `adb --version` to see which version of the `adb` your system is running.

### Running your app on an Android device

#### Install expo-dev-client

Run the following command in your project's root directory:

```sh
npx expo install expo-dev-client
```

#### Enable debugging over USB

Most Android devices can only install and run apps downloaded from Google Play, by default. You will need to enable USB Debugging on your device to install your app during development.

To enable USB debugging on your device, you will first need to enable the "Developer options" menu by going to **Settings** > **About phone** > **Software information** and then tapping the `Build number` row at the bottom seven times. You can then go back to **Settings** > **Developer options** to enable "USB debugging".

#### Plug in your device via USB

Plug in your Android device via USB to your computer.

Check that your device is properly connecting to ADB, the Android Debug Bridge, by running `adb devices` in your terminal. You should see your device listed with `device` listed next to it. For example:

```sh
adb devices
List of devices attached
8AHX0T32K	device
```

#### Run your app

Run the following from your terminal:

```sh
npx expo run:android
```

> This command runs a development server after building your app. You can skip running `npx expo start` on the next page.

***
