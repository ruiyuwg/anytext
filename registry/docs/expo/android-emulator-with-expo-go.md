## Android Emulator with Expo Go

### Set up an Android Emulator with Expo Go

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

### Set up an emulator

On the Android Studio main screen, click **More Actions**, then **Virtual Device Manager** in the dropdown.

Click the **Create device** button.

Under **Add device**, choose the type of hardware you'd like to emulate. We recommend testing against a variety of devices, but if you're unsure where to start, the newest device in the Pixel line could be a good choice.

Select an OS version to load on the emulator (probably one of the system images), and download the image (if required).

Change any other settings you'd like, and press **Finish** to create the emulator. You can now run this emulator anytime by pressing the Play button in the AVD Manager window.

### Install Expo Go

When you start a development server with `npx expo start` on the [start developing](/get-started/start-developing) page, press a to open the Android Emulator. Expo CLI will install Expo Go automatically.

***
