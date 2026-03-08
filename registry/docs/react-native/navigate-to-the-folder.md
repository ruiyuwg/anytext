# Navigate to the folder

open /opt/homebrew/Caskroom/zulu@17/ # or /usr/local/Caskroom/zulu@17/

```

After opening Finder, double click the `Double-Click to Install Azul Zulu JDK 17.pkg` package to install the JDK.

After the JDK installation, add or update your `JAVA_HOME` environment variable in `~/.zshrc` (or in `~/.bash_profile`).

If you used above steps, JDK will likely be located at `/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home`:

shell

```

export JAVA\_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home

```

The Zulu OpenJDK distribution offers JDKs for **both Intel and M1 Macs**. This will make sure your builds are faster on M1 Macs compared to using an Intel-based JDK.

If you have already installed JDK on your system, we recommend JDK 17. You may encounter problems using higher JDK versions.

### Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

#### 1. Install Android Studio

[Download and install Android Studio](https://developer.android.com/studio). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

* `Android SDK`
* `Android SDK Platform`
* `Android Virtual Device`

Then, click "Next" to install all of these components.

note

If the checkboxes are grayed out, you will have a chance to install these components later on.

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

#### 2. Install the Android SDK

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the `Android 15 (VanillaIceCream)` SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "More Actions" button and select "SDK Manager".

![Android Studio Welcome](/assets/images/GettingStartedAndroidStudioWelcomeMacOS-8af2dfd190d6acc795d58c7f89197dcd.png)

tip

The SDK Manager can also be found within the Android Studio "Settings" dialog, under **Languages & Frameworks** → **Android SDK**.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the `Android 15 (VanillaIceCream)` entry, then make sure the following items are checked:

* `Android SDK Platform 35`
* `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image` or (for Apple M1 Silicon) `Google APIs ARM 64 v8a System Image`

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that `36.0.0` and `Android SDK Command-line Tools (latest)` are selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

#### 3. Configure the ANDROID\_HOME environment variable

The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your `~/.zprofile` or `~/.zshrc` (if you are using `bash`, then `~/.bash_profile` or `~/.bashrc`) config file:

shell

```

export ANDROID\_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID\_HOME/emulator
export PATH=$PATH:$ANDROID\_HOME/platform-tools

```

Run `source ~/.zprofile` (or `source ~/.bash_profile` for `bash`) to load the config into your current shell. Verify that ANDROID\_HOME has been set by running `echo $ANDROID_HOME` and the appropriate directories have been added to your path by running `echo $PATH`.

note

Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Settings" dialog, under **Languages & Frameworks** → **Android SDK**.

## Preparing the Android device

You will need an Android device to run your React Native Android app. This can be either a physical Android device, or more commonly, you can use an Android Virtual Device which allows you to emulate an Android device on your computer.

Either way, you will need to prepare the device to run Android apps for development.

### Using a physical device

If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions [here](/docs/running-on-device.md).

### Using a virtual device

If you use Android Studio to open `./AwesomeProject/android`, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio. Look for an icon that looks like this:

![Android Studio AVD Manager](/docs/assets/GettingStartedAndroidStudioAVD.svg)

If you have recently installed Android Studio, you will likely need to [create a new AVD](https://developer.android.com/studio/run/managing-avds.html). Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the **VanillaIceCream** API Level 35 image.

Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it.

### That's it!

Congratulations! You successfully set up your development environment.

![](/docs/assets/GettingStartedCongratulations.png)

## Now what?

* If you want to add this new React Native code to an existing application, check out the [Integration guide](/docs/integration-with-existing-apps.md).
* If you're curious to learn more about React Native, check out the [Introduction to React Native](/docs/getting-started.md).

## Installing dependencies[​](#installing-dependencies "Direct link to Installing dependencies")

You will need Node, Watchman, the React Native command line interface, Xcode and CocoaPods.

While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your React Native app for iOS.

### Node & Watchman[​](#node--watchman "Direct link to Node & Watchman")

We recommend installing Node and Watchman using [Homebrew](https://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

shell

```

brew install node
brew install watchman

```

If you have already installed Node on your system, make sure it is Node 22.11.0 or newer.

[Watchman](https://facebook.github.io/watchman) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

### Xcode[​](#xcode "Direct link to Xcode")

Please use the **latest version** of Xcode.

The easiest way to install Xcode is via the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

#### Command Line Tools[​](#command-line-tools "Direct link to Command Line Tools")

You will also need to install the Xcode Command Line Tools. Open Xcode, then choose **Settings... (or Preferences...)** from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

![Xcode Command Line Tools](/assets/images/GettingStartedXcodeCommandLineTools-a319295928960a4458698528086e3230.png)

#### Installing an iOS Simulator in Xcode[​](#installing-an-ios-simulator-in-xcode "Direct link to Installing an iOS Simulator in Xcode")

To install a simulator, open **Xcode > Settings... (or Preferences...)** and select the **Platforms (or Components)** tab. Select a simulator with the corresponding version of iOS you wish to use.

If you are using Xcode version 14.0 or greater to install a simulator, open **Xcode > Settings > Platforms** tab, then click "+" icon and select **iOS…** option.

#### CocoaPods[​](#cocoapods "Direct link to CocoaPods")

[CocoaPods](https://cocoapods.org/) is one of the dependency management system available for iOS. CocoaPods is a Ruby [gem](https://en.wikipedia.org/wiki/RubyGems). You can install CocoaPods using the version of Ruby that ships with the latest version of macOS.

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

### \[Optional] Configuring your environment[​](#optional-configuring-your-environment "Direct link to \[Optional] Configuring your environment")

Starting from React Native version 0.69, it is possible to configure the Xcode environment using the `.xcode.env` file provided by the template.

The `.xcode.env` file contains an environment variable to export the path to the `node` executable in the `NODE_BINARY` variable. This is the **suggested approach** to decouple the build infrastructure from the system version of `node`. You should customize this variable with your own path or your own `node` version manager, if it differs from the default.

On top of this, it's possible to add any other environment variable and to source the `.xcode.env` file in your build script phases. If you need to run script that requires some specific environment, this is the **suggested approach**: it allows to decouple the build phases from a specific environment.

info

If you are already using [NVM](https://nvm.sh/) (a command which helps you install and switch between versions of Node.js) and [zsh](https://ohmyz.sh/), you might want to move the code that initialize NVM from your `~/.zshrc` into a `~/.zshenv` file to help Xcode find your Node executable:

zsh

```

export NVM\_DIR="$HOME/.nvm"
\[ -s "$NVM\_DIR/nvm.sh" ] && . "$NVM\_DIR/nvm.sh"  # This loads nvm

```

You might also want to ensure that all "shell script build phase" of your Xcode project, is using `/bin/zsh` as its shell.

### That's it!

Congratulations! You successfully set up your development environment.

![](/docs/assets/GettingStartedCongratulations.png)

## Now what?

* If you want to add this new React Native code to an existing application, check out the [Integration guide](/docs/integration-with-existing-apps.md).
* If you're curious to learn more about React Native, check out the [Introduction to React Native](/docs/getting-started.md).

#### Target OS[​](#target-os-1 "Direct link to Target OS")

* Android
* iOS

## Installing dependencies

You will need Node, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

### Node, JDK

We recommend installing Node via [Chocolatey](https://chocolatey.org/install), a popular package manager for Windows.

It is recommended to use an LTS version of Node. If you want to be able to switch between different versions, you might want to install Node via [nvm-windows](https://github.com/coreybutler/nvm-windows), a Node version manager for Windows.

React Native also requires [Java SE Development Kit (JDK)](https://openjdk.java.net/projects/jdk/17/), which can be installed using Chocolatey as well.

Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:

powershell

```

choco install -y nodejs-lts microsoft-openjdk17

```

If you have already installed Node on your system, make sure it is Node 22.11.0 or newer. If you already have a JDK on your system, we recommend JDK17. You may encounter problems using higher JDK versions.

note

You can find additional installation options on [Node's Downloads page](https://nodejs.org/en/download/).

info

If you're using the latest version of Java Development Kit, you'll need to change the Gradle version of your project so it can recognize the JDK. You can do that by going to `{project root folder}\android\gradle\wrapper\gradle-wrapper.properties` and changing the `distributionUrl` value to upgrade the Gradle version. You can check out [here the latest releases of Gradle](https://gradle.org/releases/).

### Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

#### 1. Install Android Studio

[Download and install Android Studio](https://developer.android.com/studio). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

* `Android SDK`
* `Android SDK Platform`
* `Android Virtual Device`
* If you are not already using Hyper-V: `Performance (Intel ® HAXM)` ([See here for AMD or Hyper-V](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html))

Then, click "Next" to install all of these components.

note

If the checkboxes are grayed out, you will have a chance to install these components later on.

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

#### 2. Install the Android SDK

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the `Android 15 (VanillaIceCream)` SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "More Actions" button and select "SDK Manager".

![Android Studio Welcome](/assets/images/GettingStartedAndroidStudioWelcomeWindows-8a34e703bcb79bb67f84764b04f3e05c.png)

tip

The SDK Manager can also be found within the Android Studio "Settings" dialog, under **Languages & Frameworks** → **Android SDK**.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the `Android 15 (VanillaIceCream)` entry, then make sure the following items are checked:

* `Android SDK Platform 35`
* `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image`

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the `Android SDK Build-Tools` entry, then make sure that `36.0.0` and `Android SDK Command-line Tools (latest)` are selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

#### 3. Configure the ANDROID\_HOME environment variable

The React Native tools require some environment variables to be set up in order to build apps with native code.

1. Open the **Windows Control Panel.**
2. Click on **User Accounts,** then click **User Accounts** again
3. Click on **Change my environment variables**
4. Click on **New\...** to create a new `ANDROID_HOME` user variable that points to the path to your Android SDK:

![ANDROID\_HOME Environment Variable](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAo0AAAClCAMAAAAOEzcNAAABwlBMVEVfosv///8AAADMzMz//7ZmAABmtv9mADqQ2///25A6ADq2ZgA6kNv/tmYAZrYFBwg6AGa2//9mAGY6AAA6kJCQ27b//9uQOgAAAGZmZjq2/7aQtpDbkDoAADoAOpDb//86OpDb/9uQOjoAOmZmOjrw8PB6enqrYAA2h87wq2AAYKvwzoc2ADaHzvDw8KtgADZgq/A6OmY6OgA6Ojo2AGCr8PBgAGAAZmbw8M6HNgBgYDYAAGCr8KuHq4c2AACHh2DOhzYANofO8PBgAADb/7Y2NofO8M6HNjYAADZmtrYANmBgNjaQOmYAeNczmf/MZgCg7v//7v9amf/B//9/mf+gq/9/3v//3v/hzv8zq//h//8zvP/BvP+gvP/h7v/B7v/h3v9azv/B3v+gzv9gNoc2NmBgNmClZgAAYGCtra3h4eHh4aBaAABaoOEzf8HhwX8zADN/weFaADPhoFrh4cF/MwAAWqAAM3/B4eEzAFqg4eEAADOgWgAzAAB/oOHBfzNaWjMAAFozWqBaoKAzMwB/MzN/f1ozMzMzM3+gWjN/oH/B4cFaAFpaM39/waB/M1qgwX9aWlozM1paMzMAM1q/v7+vTvonAAAKLUlEQVR4Aeyd17arNhBAo3EBAnZyesO39957r+n5/7/JDBouxrfiNLO89wNiNOPztJdG4jzouxUCIACsBtgI2AiAjYCNANgI/bYRABsBsBGwEUAGcRzIJ20cjkRkXL0lafZ9qi8e+GORvNDHZBpq/Dde7QPAJxn8MPDh0zYmLQHt+SUbXcR8HFpgYwfQ0R7/jI3ZjxthuLmBjcuCjibjF23MtmQ7SYfJzkhkOmfj7p7I2LL7G8PkYF8l3N0b2/qYW51NHWqlB0dbUtiPYn34JICOLuOn941m2mgcylmqJi2sjZNazUkxHBXBKIvYqK14FO3z4Nhx3UTqW6wP3QBsdJmyE8ft7WMbs62iWjhFpp7R2pOn1DaRyl4ragL1VIdYH7oCdOpP27irwlVbxFDKWEevjKmjE8d1SkvcxibQNh7jALDsKabdqY382PGQT4NSeo/2jPlZhEndlW3ag1Fh/noDB1jiC89IxOwS2Y4q5rHH2vFFhZzYrtJatXdqQ82z9OkztY11cCAy9lNMl04NfP0G4D+DAGtgI2AjADYCNgJgI2AjADYCNgJgI2DjWYDVABsBGwGwEbARABsBGwGwEbARABsBGwGwEbARABsBGwGwEQAbARsBsBGwEQAbARsB/jkbAbDxHKwpK2ljgLUEG/8+gI2AjdgI2AjYeP6CPi5e+hBfvnI1vly7ftWHf9PGeGfXcOQXbPp9Ss097hOPNzc8tXCDsVf4n1DKWeo/hr7Z6CKev9Gu+e9szG6eSU2rW+Noo/plXtk42d8Ik5ld3VWYjZ5asLGpSG5XUyO/grOPYOPlO3fPXrt39/+ysSzKwrTSyzRrG/3CQgvtPuwYq42eamxsVyQHha2l95P+2oiNDx7esPXxvMglNe/R4ydqnwdPn8mFysbLz+Tx3crM56JTc/kbL2wiFlx8+aqrjXbdaxY9zIvaRr/M1S7XjPJpkdtoqbaNTUWys7mhLzt9tREbjRcXYqNW7a69jvZ58PKVbiLtTacuXrDZ15fOXjQv6/xFuWATsWAZG1VFNck9nLdxJDKt0iHGizaOxJilTYUKPdYfvImbT+3yPQQbL799915lEvnJtDPPmkA91UFXPhHbXrbzHswXdLbR2nTp28RpbaP66atea2301GfXRjMzH/sf6SfY+OD907evdPf44H0tWBNoG49xLP0o30wstW/0JW5/I162/nNr32imdto3ptVV7v21ERuNF9ZurSvXgnmgbVs18wZe0co3NnpB905tW0Nvs2ba1szP1GPzrD5Xa+xn6phqbGxX2LvY2GcbsVHN0kVQfvm1FqwOHonc8FNMq1O3ipuCJWzMC3uW1qObT4Wz1G0r443tMg5mo6cWbfxQYcvrbxtzHy2hA/wvpucANg5HwokZG1kb1xpsBGzERsBGwEZsBGxcT2AlbQTARsBGAGwEbATARsBGgH/PRgBsBGwEwMbf1xRYSRvDWgLYCN8ANv6xjvwZ+gM2YiM2YiM2YuNf7JzNrtsgEIXF81Tqri/QVVcWdhyDAze37v/7P0HnZBgfW02EarE0qgLM+RhS+YiJ7wLvXD9Ifxk7fF7140kjUG0Ko03hiSYbx//MD+FVzv2a+YYZ+SS7jYaBPN3Y/m5bxBu4cb5leYBveMa54kYClUa4m+/ve95SXAJn9fwqvMgJ6TU/30b8/+jG042t7rZt70af1zPla8WNBCqNcLfEJT51I0zCWT0/hBc5Ib3mUz8wouTpxiZ327Z3o5kCz8xf6UbU7yyWQZG7fHMjpgV4u6HMIjg5FzSQF4cgeHE3Yfmc70NZxA6Szx3Wo2wHHfELWCZNpSqEfc7vtmcUCd9HFwEsQU0oEDH5F043NrnbFihuIoOMOKRVlvgBN96H1Y0p0o0pdDpJEY9Tpwr0Q3IjgkpoQBAEYeDrBpb0sAQYEawzN/K40hG/QMnUeUTI7XMG23NxokZbBFCDynceFjXs6vN5Nra52xauJavxVT7mRiuYaO/D6sb5Vo46FxDClIB5KImMkQUfyaa8gVFSlwANwraDobheR/wClgkd9/k356Uck1BtEYPKI1tesXs8K3Wju21R0T/++Gyy4pSP/27ka4S333SLMzPgsWKqAN0I2T9x4xZ2aCN07MQOi7leR8y/dyO5fc66GzFDWwLdGE43NrrbFueonKSrTPzwW0xyj3dqqdT6GjHJQP+CsqBGmxsxVYBuTFZ3GcywBGFkVf9FCKVTOnN9GTF/Z5lQqcntc3JPLcG2iEHlpfOR2BRPN7a42xbtw89fn8g+fnJ+KfKhSq3luB/KM8aTw1T/SAdNK7VOAdCNQPv3nRvBb+Ep6smEdwy43joHzNZPLuhI80OMJdMDzdxnm9P2TM5eT3QRg0wYug3m+9+nG5vcbSuYdGSlZP8x+aAbty1FjtnqQBXmm8pf9u3YBmAYBIDghBnETvavMwAFTRDEuqtdIPEdclQ3QHzvFuMyGGvsokY1qjGnxhxqVCNqRI1qRI3t8GcQ8hpBjagR1AhqRI2gRtQIakSNoEbUCGpEjaBG1Li6TRrlX64SxetIaty91qxR1Fi7jnNrVOP+nBrVGKlRjdOpUY1qVKMa1Xg/L3vmoSM5CINhicdlAtks9RLmtvdeHviMibcXVuftSJP2U2Lxf+M4ihBCVUyLHbWU/crwMTS+MTKIa7E6NBpNsSmvhXWeiUbrhAjxeQdWByYaYaL+z1jhOXRcdL4iGAYa3xoZnTQazZQp1LgWSTPlxn6pYPf3Y2iErdJzoONDaayOrNFISUxJtAnWYs2zPKlpUik/hkbj4bC+MfbL/GhMCsV+07p8CeLGWDpiXHCkzqDnPludEF6WwdA0bUPsJkQOGqsjwz38SPydNFK6sDuwFrshMtF4k4NSNhpmxlrgjgl8NHYCpoODhk3lqhAIMHtarmnjiQn9gMZOz7p11FQGY1MelxRL3VgRGRWYhUYSfy2N+1EWmzpAhYvG/Ruu0X2wYWO8td5oztyIFFGRlhTc++Bw/2hn6JdaYsoT/obGHbK86DhE3hmMYB6Pi5PIUzfWRka58UZsufFwZeDOjUaICQ2BLYtkAiuNJeOR53bn9OTo7Dz/H9aEQvFu3Ug0ov4kjXJNr2meurE+MqKRRNnqRkhgvHUjTGt3HtCIe/bcSA9bmH0tPw0vkKc1vehmsKjHTGPRb9I1DS7MXl5hwOX3PzRWR0Y0FvHm3r/wnRoQpEpqLUQWGqUR+E5tQpwNgQ2tnzFgrRsnnB7TLpxmBHAzWLeBKPxtR6Kx6KgqmcpbDM0jk5cMNNZGdpfGIv5iGvPaCDUvSgqRg8ZidojWiesronG2ntb7C3+LSap9i2nfYr4Ijf1+bDQ2Gr8EjdZNQ/tO/a+dO7YBAISBGMj+/e/LEki4uJvBShqCGr2aUKMa1ahGNapRjWp8x5XWby5YXbCCvyZAjagR1EjfpkbUCDY1UZvZiBpJs6kxGM1G1Ag2NXkHOi61IHl9uT0p7gAAAABJRU5ErkJggg==)

The SDK is installed, by default, at the following location:

powershell

```

%LOCALAPPDATA%\Android\Sdk

```

You can find the actual location of the SDK in the Android Studio "Settings" dialog, under **Languages & Frameworks** → **Android SDK**.

Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.

1. Open powershell
2. Copy and paste **Get-ChildItem -Path Env:\\** into powershell
3. Verify `ANDROID_HOME` has been added

#### 4. Add platform-tools to Path

1. Open the **Windows Control Panel.**
2. Click on **User Accounts,** then click **User Accounts** again
3. Click on **Change my environment variables**
4. Select the **Path** variable.
5. Click **Edit.**
6. Click **New** and add the path to platform-tools to the list.

The default location for this folder is:

powershell

```

%LOCALAPPDATA%\Android\Sdk\platform-tools

```

## Preparing the Android device

You will need an Android device to run your React Native Android app. This can be either a physical Android device, or more commonly, you can use an Android Virtual Device which allows you to emulate an Android device on your computer.

Either way, you will need to prepare the device to run Android apps for development.

### Using a physical device

If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions [here](/docs/running-on-device.md).

### Using a virtual device

If you use Android Studio to open `./AwesomeProject/android`, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio. Look for an icon that looks like this:

![Android Studio AVD Manager](/docs/assets/GettingStartedAndroidStudioAVD.svg)

If you have recently installed Android Studio, you will likely need to [create a new AVD](https://developer.android.com/studio/run/managing-avds.html). Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the **VanillaIceCream** API Level 35 image.

note

If you don't have HAXM installed, click on "Install HAXM" or follow [these instructions](https://github.com/intel/haxm/wiki/Installation-Instructions-on-Windows) to set it up, then go back to the AVD Manager.

Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it.

### That's it!

Congratulations! You successfully set up your development environment.

![](/docs/assets/GettingStartedCongratulations.png)

## Now what?

* If you want to add this new React Native code to an existing application, check out the [Integration guide](/docs/integration-with-existing-apps.md).
* If you're curious to learn more about React Native, check out the [Introduction to React Native](/docs/getting-started.md).

## Unsupported[​](#unsupported "Direct link to Unsupported")

info

A Mac is required to build projects with native code for iOS. You can use [Expo Go](https://expo.dev/go) from [Expo](/docs/environment-setup.md#start-a-new-react-native-project-with-expo) to develop your app on your iOS device.

#### Target OS[​](#target-os-2 "Direct link to Target OS")

* Android
* iOS

## Installing dependencies[​](#installing-dependencies "Direct link to Installing dependencies")

You will need Node, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

### Node

Follow the [installation instructions for your Linux distribution](https://nodejs.org/en/download/package-manager/) to install Node 22.11.0 or newer.

### Java Development Kit

React Native currently recommends version 17 of the Java SE Development Kit (JDK). You may encounter problems using higher JDK versions. You may download and install [OpenJDK](https://openjdk.java.net) from [AdoptOpenJDK](https://adoptopenjdk.net/) or your system packager.

### Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

#### 1. Install Android Studio

[Download and install Android Studio](https://developer.android.com/studio). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

* `Android SDK`
* `Android SDK Platform`
* `Android Virtual Device`

Then, click "Next" to install all of these components.

note

If the checkboxes are grayed out, you will have a chance to install these components later on.

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

#### 2. Install the Android SDK

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the `Android 15 (VanillaIceCream)` SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "Configure" button and select "SDK Manager".

tip

The SDK Manager can also be found within the Android Studio "Settings" dialog, under **Languages & Frameworks** → **Android SDK**.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the `Android 15 (VanillaIceCream)` entry, then make sure the following items are checked:

* `Android SDK Platform 35`
* `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image`

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that `36.0.0` and `Android SDK Command-line Tools (latest)` are selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

#### 3. Configure the ANDROID\_HOME environment variable

The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` (if you are using `zsh` then `~/.zprofile` or `~/.zshrc`) config file:

shell

```

export ANDROID\_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID\_HOME/emulator
export PATH=$PATH:$ANDROID\_HOME/platform-tools

```

note

`.bash_profile` is specific to `bash`. If you're using another shell, you will need to edit the appropriate shell-specific config file.

Type `source $HOME/.bash_profile` for `bash` or `source $HOME/.zprofile` to load the config into your current shell. Verify that ANDROID\_HOME has been set by running `echo $ANDROID_HOME` and the appropriate directories have been added to your path by running `echo $PATH`.

note

Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Settings" dialog, under **Languages & Frameworks** → **Android SDK**.

### Watchman

Follow the [Watchman installation guide](https://facebook.github.io/watchman/docs/install#buildinstall) to compile and install Watchman from source.

info

[Watchman](https://facebook.github.io/watchman/docs/install) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance and increased compatibility in certain edge cases (translation: you may be able to get by without installing this, but your mileage may vary; installing this now may save you from a headache later).

## Preparing the Android device

You will need an Android device to run your React Native Android app. This can be either a physical Android device, or more commonly, you can use an Android Virtual Device which allows you to emulate an Android device on your computer.

Either way, you will need to prepare the device to run Android apps for development.

### Using a physical device

If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions [here](/docs/running-on-device.md).

### Using a virtual device

If you use Android Studio to open `./AwesomeProject/android`, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio. Look for an icon that looks like this:

![Android Studio AVD Manager](/docs/assets/GettingStartedAndroidStudioAVD.svg)

If you have recently installed Android Studio, you will likely need to [create a new AVD](https://developer.android.com/studio/run/managing-avds.html). Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the **VanillaIceCream** API Level 35 image.

tip

We recommend configuring [VM acceleration](https://developer.android.com/studio/run/emulator-acceleration.html#vm-linux) on your system to improve performance. Once you've followed those instructions, go back to the AVD Manager.

Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it.

### That's it!

Congratulations! You successfully set up your development environment.

![](/docs/assets/GettingStartedCongratulations.png)

## Now what?

* If you want to add this new React Native code to an existing application, check out the [Integration guide](/docs/integration-with-existing-apps.md).
* If you're curious to learn more about React Native, check out the [Introduction to React Native](/docs/getting-started.md).

## Unsupported[​](#unsupported-1 "Direct link to Unsupported")

info

A Mac is required to build projects with native code for iOS. You can use [Expo Go](https://expo.dev/go) from [Expo](/docs/environment-setup.md#start-a-new-react-native-project-with-expo) to develop your app on your iOS device.


---

# Settings

`Settings` serves as a wrapper for [`NSUserDefaults`](https://developer.apple.com/documentation/foundation/nsuserdefaults), a persistent key-value store available only on iOS.

## Example[​](#example "Direct link to Example")

***

# Reference

## Methods[​](#methods "Direct link to Methods")

### `clearWatch()`[​](#clearwatch "Direct link to clearwatch")

tsx

```

static clearWatch(watchId: number);

```

`watchId` is the number returned by `watchKeys()` when the subscription was originally configured.

***

### `get()`[​](#get "Direct link to get")

tsx

```

static get(key: string): any;

```

Get the current value for a given `key` in `NSUserDefaults`.

***

### `set()`[​](#set "Direct link to set")

tsx

```

static set(settings: Record\<string, any>);

```

Set one or more values in `NSUserDefaults`.

***

### `watchKeys()`[​](#watchkeys "Direct link to watchkeys")

tsx

```

static watchKeys(keys: string | array, callback: () => void): number;

```

Subscribe to be notified when the value for any of the keys specified by the `keys` parameter has been changed in `NSUserDefaults`. Returns a `watchId` number that may be used with `clearWatch()` to unsubscribe.

note

`watchKeys()` by design ignores internal `set()` calls and fires callback only on changes preformed outside of React Native code.


---

# Shadow Props

* TypeScript
* JavaScript

***

# Reference

There are 3 sets of shadow APIs in React Native:

* `boxShadow`: A View style prop and a spec-compliant implementation of the [web style prop of the same name](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow).
* `dropShadow`: A specific filter function available as part of the [`filter`](/docs/view-style-props.md#filter) View style prop.
* Various `shadow` props (`shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius`): These map directly to their native counterparts exposed by the platform-level APIs.

The difference between `dropShadow` and `boxShadow` are as follows:

* `dropShadow` exists as part of `filter`, whereas `boxShadow` is a standalone style prop.
* `dropShadow` is an alpha mask, so only pixels with a positive alpha value will "cast" a shadow. `boxShadow` will cast around the border box of the element no matter it's contents (unless it is inset).
* `dropShadow` is only available on Android, `boxShadow` is available on iOS and Android.
* `dropShadow` cannot be inset like `boxShadow`.
* `dropShadow` does not have the `spreadDistance` argument like `boxShadow`.

Both `boxShadow` and `dropShadow` are generally more capable than the `shadow` props. The `shadow` props, however, map to native platform-level APIs, so if you only need a straightforward shadow these props are recommended. Note that only `shadowColor` works on both Android and iOS, all other `shadow` props only work on iOS.

## Props[​](#props "Direct link to Props")

### `boxShadow`[​](#boxshadow "Direct link to boxshadow")

See [View Style Props](/docs/view-style-props.md#boxshadow) for documentation.

### `dropShadow`Android[​](#dropshadow-android "Direct link to dropshadow-android")

See [View Style Props](/docs/view-style-props.md#filter) for documentation.

### `shadowColor`[​](#shadowcolor "Direct link to shadowcolor")

Sets the drop shadow color.

This property will only work on Android API 28 and above. For similar functionality on lower Android APIs, use the [`elevation` property](/docs/view-style-props.md#elevation-android).

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `shadowOffset`iOS[​](#shadowoffset-ios "Direct link to shadowoffset-ios")

Sets the drop shadow offset.

| Type                                     |
| ---------------------------------------- |
| object: `{width: number,height: number}` |

***

### `shadowOpacity`iOS[​](#shadowopacity-ios "Direct link to shadowopacity-ios")

Sets the drop shadow opacity (multiplied by the color's alpha component).

| Type   |
| ------ |
| number |

***

### `shadowRadius`iOS[​](#shadowradius-ios "Direct link to shadowradius-ios")

Sets the drop shadow blur radius.

| Type   |
| ------ |
| number |


---

# Share

## Example[​](#example "Direct link to Example")

* TypeScript
* JavaScript

# Reference

## Methods[​](#methods "Direct link to Methods")

### `share()`[​](#share "Direct link to share")

tsx

```

static share(content: ShareContent, options?: ShareOptions);

```

Open a dialog to share text content.

In iOS, returns a Promise which will be invoked with an object containing `action` and `activityType`. If the user dismissed the dialog, the Promise will still be resolved with action being `Share.dismissedAction` and all the other keys being undefined. Note that some share options will not appear or work on the iOS simulator.

In Android, returns a Promise which will always be resolved with action being `Share.sharedAction`.

**Properties:**

| Name            | Type   | Description                                                                                                                                                                                                        |
| --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| contentRequired | object | `message` - a message to share<br />`url` - a URL to shareiOS<br />`title` - title of the messageAndroid***At least one of `url` and `message` is required.                                                        |
| options         | object | `dialogTitle`Android<br />`excludedActivityTypes`iOS<br />`subject` - a subject to share via emailiOS<br />`tintColor`iOS<br />`anchor` - the node to which the action sheet should be anchored (used for iPad)iOS |

***

## Properties[​](#properties "Direct link to Properties")

### `sharedAction`[​](#sharedaction "Direct link to sharedaction")

tsx

```

static sharedAction: 'sharedAction';

```

The content was successfully shared.

***

### `dismissedAction`iOS[​](#dismissedaction-ios "Direct link to dismissedaction-ios")

tsx

```

static dismissedAction: 'dismissedAction';

```

The dialog has been dismissed.


---

# Publishing to Google Play Store

Android requires that all apps be digitally signed with a certificate before they can be installed. In order to distribute your Android application via [Google Play store](https://play.google.com/store) it needs to be signed with a release key that then needs to be used for all future updates. Since 2017 it is possible for Google Play to manage signing releases automatically thanks to [App Signing by Google Play](https://developer.android.com/studio/publish/app-signing#app-signing-google-play) functionality. However, before your application binary is uploaded to Google Play it needs to be signed with an upload key. The [Signing Your Applications](https://developer.android.com/tools/publishing/app-signing.html) page on Android Developers documentation describes the topic in detail. This guide covers the process in brief, as well as lists the steps required to package the JavaScript bundle.

info

If you are using Expo, read the Expo guide for [Deploying to App Stores](https://docs.expo.dev/distribution/app-stores/) to build and submit your app for the Google Play Store. This guide works with any React Native app to automate the deployment process.

## Generating an upload key[​](#generating-an-upload-key "Direct link to Generating an upload key")

You can generate a private signing key using `keytool`.

### Windows[​](#windows "Direct link to Windows")

On Windows `keytool` must be run from `C:\Program Files\Java\jdkx.x.x_x\bin`, as administrator.

shell

```

keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

```

This command prompts you for passwords for the keystore and key and for the Distinguished Name fields for your key. It then generates the keystore as a file called `my-upload-key.keystore`.

The keystore contains a single key, valid for 10000 days. The alias is a name that you will use later when signing your app, so remember to take note of the alias.

### macOS[​](#macos "Direct link to macOS")

On macOS, if you're not sure where your JDK bin folder is, then perform the following command to find it:

shell

```

/usr/libexec/java\_home

```

It will output the directory of the JDK, which will look something like this:

shell

```

/Library/Java/JavaVirtualMachines/jdkX.X.X\_XXX.jdk/Contents/Home

```

Navigate to that directory by using the command `cd /your/jdk/path` and use the keytool command with sudo permission as shown below.

shell

```

sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

```

caution

Remember to keep the keystore file private. In case you've lost upload key or it's been compromised you should [follow these instructions](https://support.google.com/googleplay/android-developer/answer/7384423#reset).

## Setting up Gradle variables[​](#setting-up-gradle-variables "Direct link to Setting up Gradle variables")

1. Place the `my-upload-key.keystore` file under the `android/app` directory in your project folder.
2. Edit the file `~/.gradle/gradle.properties` or `android/gradle.properties`, and add the following (replace `*****` with the correct keystore password, alias and key password),

```

MYAPP\_UPLOAD\_STORE\_FILE=my-upload-key.keystore
MYAPP\_UPLOAD\_KEY\_ALIAS=my-key-alias
MYAPP\_UPLOAD\_STORE\_PASSWORD=\*\*\*\*\*
MYAPP\_UPLOAD\_KEY\_PASSWORD=\*\*\*\*\*

```

These are going to be global Gradle variables, which we can later use in our Gradle config to sign our app.

Note about using git

Saving the above Gradle variables in `~/.gradle/gradle.properties` instead of `android/gradle.properties` prevents them from being checked in to git. You may have to create the `~/.gradle/gradle.properties` file in your user's home directory before you can add the variables.

Note about security

If you are not keen on storing your passwords in plaintext, and you are running macOS, you can also [store your credentials in the Keychain Access app](https://pilloxa.gitlab.io/posts/safer-passwords-in-gradle/). Then you can skip the two last rows in `~/.gradle/gradle.properties`.

## Adding signing config to your app's Gradle config[​](#adding-signing-config-to-your-apps-gradle-config "Direct link to Adding signing config to your app's Gradle config")

The last configuration step that needs to be done is to setup release builds to be signed using upload key. Edit the file `android/app/build.gradle` in your project folder, and add the signing config,

groovy

```

...
android {
...
defaultConfig { ... }
signingConfigs {
release {
if (project.hasProperty('MYAPP\_UPLOAD\_STORE\_FILE')) {
storeFile file(MYAPP\_UPLOAD\_STORE\_FILE)
storePassword MYAPP\_UPLOAD\_STORE\_PASSWORD
keyAlias MYAPP\_UPLOAD\_KEY\_ALIAS
keyPassword MYAPP\_UPLOAD\_KEY\_PASSWORD
}
}
}
buildTypes {
release {
...
signingConfig signingConfigs.release
}
}
}
...

```

## Generating the release AAB[​](#generating-the-release-aab "Direct link to Generating the release AAB")

Run the following command in a terminal:

shell

```

npx react-native build-android --mode=release

```

This command uses Gradle's `bundleRelease` under the hood that bundles all the JavaScript needed to run your app into the AAB ([Android App Bundle](https://developer.android.com/guide/app-bundle)). If you need to change the way the JavaScript bundle and/or drawable resources are bundled (e.g. if you changed the default file/folder names or the general structure of the project), have a look at `android/app/build.gradle` to see how you can update it to reflect these changes.

note

Make sure `gradle.properties` does not include `org.gradle.configureondemand=true` as that will make the release build skip bundling JS and assets into the app binary.

The generated AAB can be found under `android/app/build/outputs/bundle/release/app-release.aab`, and is ready to be uploaded to Google Play.

In order for Google Play to accept AAB format the App Signing by Google Play needs to be configured for your application on the Google Play Console. If you are updating an existing app that doesn't use App Signing by Google Play, please check our [migration section](#migrating-old-android-react-native-apps-to-use-app-signing-by-google-play) to learn how to perform that configuration change.

## Testing the release build of your app[​](#testing-the-release-build-of-your-app "Direct link to Testing the release build of your app")

Before uploading the release build to the Play Store, make sure you test it thoroughly. First uninstall any previous version of the app you already have installed. Install it on the device using the following command in the project root:

* npm
* Yarn

shell

```

npm run android -- --mode="release"

```

shell

```

yarn android --mode release

```

Note that `--mode release` is only available if you've set up signing as described above.

You can terminate any running bundler instances, since all your framework and JavaScript code is bundled in the APK's assets.

## Publishing to other stores[​](#publishing-to-other-stores "Direct link to Publishing to other stores")

By default, the generated APK has the native code for both `x86`, `x86_64`, `ARMv7a` and `ARM64-v8a` CPU architectures. This makes it easier to share APKs that run on almost all Android devices. However, this has the downside that there will be some unused native code on any device, leading to unnecessarily bigger APKs.

You can create an APK for each CPU by adding the following line in your `android/app/build.gradle` file:

diff

```

android {

```
splits {
    abi {
        reset()
        enable true
        universalApk false
        include "armeabi-v7a", "arm64-v8a", "x86", "x86_64"
    }
}
```

}

```

Upload these files to markets which support device targeting, such as [Amazon AppStore](https://developer.amazon.com/docs/app-submission/device-filtering-and-compatibility.html) or [F-Droid](https://f-droid.org/en/), and the users will automatically get the appropriate APK. If you want to upload to other markets, such as [APKFiles](https://www.apkfiles.com/), which do not support multiple APKs for a single app, change the `universalApk false` line to `true` to create the default universal APK with binaries for both CPUs.

Please note that you will also have to configure distinct version codes, as [suggested in this page](https://developer.android.com/studio/build/configure-apk-splits#configure-APK-versions) from the official Android documentation.

## Enabling Proguard to reduce the size of the APK (optional)[​](#enabling-proguard-to-reduce-the-size-of-the-apk-optional "Direct link to Enabling Proguard to reduce the size of the APK (optional)")

Proguard is a tool that can slightly reduce the size of the APK. It does this by stripping parts of the React Native Java bytecode (and its dependencies) that your app is not using.

Important

Make sure to thoroughly test your app if you've enabled Proguard. Proguard often requires configuration specific to each native library you're using. See `app/proguard-rules.pro`.

To enable Proguard, edit `android/app/build.gradle`:

groovy

```

/\*\*

- Run Proguard to shrink the Java bytecode in release builds.
  \*/
  def enableProguardInReleaseBuilds = true

```

## Migrating old Android React Native apps to use App Signing by Google Play[​](#migrating-old-android-react-native-apps-to-use-app-signing-by-google-play "Direct link to Migrating old Android React Native apps to use App Signing by Google Play")

If you are migrating from previous version of React Native chances are your app does not use App Signing by Google Play feature. We recommend you enable that in order to take advantage from things like automatic app splitting. In order to migrate from the old way of signing you need to start by [generating new upload key](#generating-an-upload-key) and then replacing release signing config in `android/app/build.gradle` to use the upload key instead of the release one (see section about [adding signing config to gradle](#adding-signing-config-to-your-apps-gradle-config)). Once that's done you should follow the [instructions from Google Play Help website](https://support.google.com/googleplay/android-developer/answer/7384423) in order to send your original release key to Google Play.

## Default Permissions[​](#default-permissions "Direct link to Default Permissions")

By default, `INTERNET` permission is added to your Android app as pretty much all apps use it. `SYSTEM_ALERT_WINDOW` permission is added to your Android APK in debug mode but it will be removed in production.


---

# State

There are two types of data that control a component: `props` and `state`. `props` are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use `state`.

In general, you should initialize `state` in the constructor, and then call `setState` when you want to change it.

For example, let's say we want to make text that blinks all the time. The text itself gets set once when the blinking component gets created, so the text itself is a `prop`. The "whether the text is currently on or off" changes over time, so that should be kept in `state`.

* TypeScript
* JavaScript

In a real application, you probably won't be setting state with a timer. You might set state when you have new data from the server, or from user input. You can also use a state container like [Redux](https://redux.js.org/) or [MobX](https://mobx.js.org/) to control your data flow. In that case you would use Redux or MobX to modify your state rather than calling `setState` directly.

When setState is called, BlinkApp will re-render its Component. By calling setState within the Timer, the component will re-render every time the Timer ticks.

State works the same way as it does in React, so for more details on handling state, you can look at the [React.Component API](https://react.dev/reference/react/Component#setstate). At this point, you may have noticed that most of our examples use the default text color. To customize the text color, you will have to [learn about Style](/docs/style.md).


---

# StatusBar

Component to control the app's status bar. The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons.

### Usage with Navigator[​](#usage-with-navigator "Direct link to Usage with Navigator")

It is possible to have multiple `StatusBar` components mounted at the same time. The props will be merged in the order the `StatusBar` components were mounted.

* TypeScript
* JavaScript

### Imperative API[​](#imperative-api "Direct link to Imperative API")

For cases where using a component is not ideal, there is also an imperative API exposed as static functions on the component. It is however not recommended to use the static API and the component for the same prop because any value set by the static API will get overridden by the one set by the component in the next render.

***

# Reference

## Constants[​](#constants "Direct link to Constants")

### `currentHeight`Android[​](#currentheight-android "Direct link to currentheight-android")

The height of the status bar, which includes the notch height, if present.

***

## Props[​](#props "Direct link to Props")

### `animated`[​](#animated "Direct link to animated")

If the transition between status bar property changes should be animated. Supported for `backgroundColor`, `barStyle` and `hidden` properties.

| Type    | Required | Default |
| ------- | -------- | ------- |
| boolean | No       | `false` |

***

### `backgroundColor`Android[​](#backgroundcolor-android "Direct link to backgroundcolor-android")

The background color of the status bar.

warning

Due to edge-to-edge enforcement introduced in Android 15, setting background color of the status bar is deprecated in API level 35 and setting it will have no effect. You can read more about our [edge-to-edge recommendations here](https://github.com/react-native-community/discussions-and-proposals/discussions/827).

| Type                     | Required | Default                                                                |
| ------------------------ | -------- | ---------------------------------------------------------------------- |
| [color](/docs/colors.md) | No       | default system StatusBar background color, or `'black'` if not defined |

***

### `barStyle`[​](#barstyle "Direct link to barstyle")

Sets the color of the status bar text.

On Android, this will only have an impact on API versions 23 and above.

| Type                                                | Required | Default     |
| --------------------------------------------------- | -------- | ----------- |
| [StatusBarStyle](/docs/statusbar.md#statusbarstyle) | No       | `'default'` |

***

### `hidden`[​](#hidden "Direct link to hidden")

If the status bar is hidden.

| Type    | Required | Default |
| ------- | -------- | ------- |
| boolean | No       | `false` |

***

### `networkActivityIndicatorVisible`iOS[​](#networkactivityindicatorvisible-ios "Direct link to networkactivityindicatorvisible-ios")

If the network activity indicator should be visible.

| Type    | Default |
| ------- | ------- |
| boolean | `false` |

***

### `showHideTransition`iOS[​](#showhidetransition-ios "Direct link to showhidetransition-ios")

The transition effect when showing and hiding the status bar using the `hidden` prop.

| Type                                                        | Default  |
| ----------------------------------------------------------- | -------- |
| [StatusBarAnimation](/docs/statusbar.md#statusbaranimation) | `'fade'` |

***

### `translucent`Android[​](#translucent-android "Direct link to translucent-android")

If the status bar is translucent. When translucent is set to `true`, the app will draw under the status bar. This is useful when using a semi transparent status bar color.

warning

Due to edge-to-edge enforcement introduced in Android 15, setting the status bar as translucent is deprecated in API level 35 and setting it will have no effect. You can read more about our [edge-to-edge recommendations here](https://github.com/react-native-community/discussions-and-proposals/discussions/827).

| Type    | Default |
| ------- | ------- |
| boolean | `false` |

## Methods[​](#methods "Direct link to Methods")

### `popStackEntry()`[​](#popstackentry "Direct link to popstackentry")

tsx

```

static popStackEntry(entry: StatusBarProps);

```

Get and remove the last StatusBar entry from the stack.

**Parameters:**

| Name          | Type | Description                           |
| ------------- | ---- | ------------------------------------- |
| entryRequired | any  | Entry returned from `pushStackEntry`. |

***

### `pushStackEntry()`[​](#pushstackentry "Direct link to pushstackentry")

tsx

```

static pushStackEntry(props: StatusBarProps): StatusBarProps;

```

Push a StatusBar entry onto the stack. The return value should be passed to `popStackEntry` when complete.

**Parameters:**

| Name          | Type | Description                                                      |
| ------------- | ---- | ---------------------------------------------------------------- |
| propsRequired | any  | Object containing the StatusBar props to use in the stack entry. |

***

### `replaceStackEntry()`[​](#replacestackentry "Direct link to replacestackentry")

tsx

```

static replaceStackEntry(
entry: StatusBarProps,
props: StatusBarProps
): StatusBarProps;

```

Replace an existing StatusBar stack entry with new props.

**Parameters:**

| Name          | Type | Description                                                                  |
| ------------- | ---- | ---------------------------------------------------------------------------- |
| entryRequired | any  | Entry returned from `pushStackEntry` to replace.                             |
| propsRequired | any  | Object containing the StatusBar props to use in the replacement stack entry. |

***

### `setBackgroundColor()`Android[​](#setbackgroundcolor-android "Direct link to setbackgroundcolor-android")

tsx

```

static setBackgroundColor(color: ColorValue, animated?: boolean);

```

Set the background color for the status bar.

warning

Due to edge-to-edge enforcement introduced in Android 15, setting background color of the status bar is deprecated in API level 35 and setting it will have no effect. You can read more about our [edge-to-edge recommendations here](https://github.com/react-native-community/discussions-and-proposals/discussions/827).

**Parameters:**

| Name          | Type    | Description               |
| ------------- | ------- | ------------------------- |
| colorRequired | string  | Background color.         |
| animated      | boolean | Animate the style change. |

***

### `setBarStyle()`[​](#setbarstyle "Direct link to setbarstyle")

tsx

```

static setBarStyle(style: StatusBarStyle, animated?: boolean);

```

Set the status bar style.

**Parameters:**

| Name          | Type                                                | Description               |
| ------------- | --------------------------------------------------- | ------------------------- |
| styleRequired | [StatusBarStyle](/docs/statusbar.md#statusbarstyle) | Status bar style to set.  |
| animated      | boolean                                             | Animate the style change. |

***

### `setHidden()`[​](#sethidden "Direct link to sethidden")

tsx

```

static setHidden(hidden: boolean, animation?: StatusBarAnimation);

```

Show or hide the status bar.

**Parameters:**

| Name           | Type                                                        | Description                                             |
| -------------- | ----------------------------------------------------------- | ------------------------------------------------------- |
| hiddenRequired | boolean                                                     | Hide the status bar.                                    |
| animationiOS   | [StatusBarAnimation](/docs/statusbar.md#statusbaranimation) | Animation when changing the status bar hidden property. |

***

### 🗑️ `setNetworkActivityIndicatorVisible()`iOS[​](#️-setnetworkactivityindicatorvisible-ios "Direct link to ️-setnetworkactivityindicatorvisible-ios")

Deprecated

The status bar network activity indicator is not supported in iOS 13 and later. This will be removed in a future release.

tsx

```

static setNetworkActivityIndicatorVisible(visible: boolean);

```

Control the visibility of the network activity indicator.

**Parameters:**

| Name            | Type    | Description         |
| --------------- | ------- | ------------------- |
| visibleRequired | boolean | Show the indicator. |

***

### `setTranslucent()`Android[​](#settranslucent-android "Direct link to settranslucent-android")

tsx

```

static setTranslucent(translucent: boolean);

```

Control the translucency of the status bar.

warning

Due to edge-to-edge enforcement introduced in Android 15, setting the status bar as translucent is deprecated in API level 35 and setting it will have no effect. You can read more about our [edge-to-edge recommendations here](https://github.com/react-native-community/discussions-and-proposals/discussions/827).

**Parameters:**

| Name                | Type    | Description         |
| ------------------- | ------- | ------------------- |
| translucentRequired | boolean | Set as translucent. |

## Type Definitions[​](#type-definitions "Direct link to Type Definitions")

### StatusBarAnimation[​](#statusbaranimation "Direct link to StatusBarAnimation")

Status bar animation type for transitions on the iOS.

| Type |
| ---- |
| enum |

**Constants:**

| Value     | Type   | Description     |
| --------- | ------ | --------------- |
| `'fade'`  | string | Fade animation  |
| `'slide'` | string | Slide animation |
| `'none'`  | string | No animation    |

***

### StatusBarStyle[​](#statusbarstyle "Direct link to StatusBarStyle")

Status bar style type.

| Type |
| ---- |
| enum |

**Constants:**

| Value             | Type   | Description                                                |
| ----------------- | ------ | ---------------------------------------------------------- |
| `'default'`       | string | Default status bar style (dark for iOS, light for Android) |
| `'light-content'` | string | White texts and icons                                      |
| `'dark-content'`  | string | Dark texts and icons (requires API>=23 on Android)         |


---

# ❌ StatusBarIOS

Removed from React Native

Use [`StatusBar`](/docs/statusbar.md) for mutating the status bar.

***


---

# Strict TypeScript API (opt in)

The Strict TypeScript API is a preview of our future, stable JavaScript API for React Native.

Specifically, this is a new set of TypeScript types for the `react-native` npm package, available from 0.80 onwards. These provide stronger and more futureproof type accuracy, and will allow us to confidently evolve React Native's API into a stable shape. Opting in to the Strict TypeScript API brings some structural type differences, and is therefore a one-time breaking change.

The new types are:

1. **Generated directly from our source code** — improving coverage and correctness, so you can expect stronger compatibility guarantees.
2. **Restricted to `react-native`'s index file** — more tightly defining our public API, and meaning we won't break the API when making internal file changes.

When the community is ready, the Strict TypeScript API will become our default API in future — synchronized with deep imports removal.

## Opting in[​](#opting-in "Direct link to Opting in")

We're shipping these new types alongside our existing types, meaning you can choose to migrate when ready. We encourage early adopters and newly created apps to opt in via your `tsconfig.json` file.

Opting in is a **breaking change**, since some of our new types have updated names and shapes, although many apps won't be affected. You can learn about each breaking change in the next section.

tsconfig.json

```

{
"extends": "@react-native/typescript-config",
"compilerOptions": {
...
"customConditions": \["react-native-strict-api"]
}
}

```

Under the hood

This will instruct TypeScript to resolve `react-native` types from our new [`types_generated/`](https://www.npmjs.com/package/react-native?activeTab=code) dir, instead of the previous [`types/`](https://www.npmjs.com/package/react-native?activeTab=code) dir (manually maintained). No restart of TypeScript or your editor is required.

The Strict TypeScript API follows our [RFC](https://github.com/react-native-community/discussions-and-proposals/pull/894) to remove deep imports from React Native. Therefore, some APIs are no longer exported at root. This is intentional, in order to reduce the overall surface area of React Native's API.

API feedback

**Sending feedback**: We will be working with the community to finalize which APIs we export over (at least) the next two React Native releases. Please share your feedback in our [feedback thread](https://github.com/react-native-community/discussions-and-proposals/discussions/893).

See also our [announcement blog post](/blog/2025/06/12/moving-towards-a-stable-javascript-api.md) for more info on our motivation and timelines.

## Migration guide[​](#migration-guide "Direct link to Migration guide")

### Codegen types should now be imported from the `react-native` package[​](#codegen-types-should-now-be-imported-from-the-react-native-package "Direct link to codegen-types-should-now-be-imported-from-the-react-native-package")

Types used for codegen, like `Int32`, `Double`, `WithDefault` etc. are now available under a single `CodegenTypes` namespace. Similarly, `codegenNativeComponent` and `codegenNativeCommands` are now available to import from the react-native package instead of using the deep import.

Namespaced `CodegenTypes` as well as `codegenNativeCommands` and `codegenNativeComponent` are also available from `react-native` package when the Strict API is not enabled to make the adoption easier for third-party libraries.

**Before**

```

import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type {
Int32,
WithDefault,
} from 'react-native/Libraries/Types/CodegenTypes';

interface NativeProps extends ViewProps {
enabled?: WithDefault\<boolean, true>;
size?: Int32;
}

export default codegenNativeComponent(
'RNCustomComponent',
);

```

**After**

```

import {CodegenTypes, codegenNativeComponent} from 'react-native';

interface NativeProps extends ViewProps {
enabled?: CodegenTypes.WithDefault\<boolean, true>;
size?: CodegenTypes.Int32;
}

export default codegenNativeComponent(
'RNCustomComponent',
);

```

### Removal of `*Static` types[​](#removal-of-static-types "Direct link to removal-of-static-types")

**Before**

```

import {Linking, LinkingStatic} from 'react-native';

function foo(linking: LinkingStatic) {}
foo(Linking);

```

**After**

```

import {Linking} from 'react-native';

function foo(linking: Linking) {}
foo(Linking);

```

The following APIs were previously named as `*Static` plus a variable declaration of said type. In most cases there was an alias so that value and the type were exported under the same identifier, but some were missing.

(For example there was an `AlertStatic` type, `Alert` variable of type `AlertStatic` and type `Alert` which was an alias for `AlertStatic`. But in the case of `PixelRatio` there was a `PixelRatioStatic` type and a `PixelRatio` variable of that type without additional type aliases.)

**Affected APIs**

* `AlertStatic`
* `ActionSheetIOSStatic`
* `ToastAndroidStatic`
* `InteractionManagerStatic` (In this case there was no relevant `InteractionManager` type alias)
* `UIManagerStatic`
* `PlatformStatic`
* `SectionListStatic`
* `PixelRatioStatic` (In this case there was no relevant `PixelRatio` type alias)
* `AppStateStatic`
* `AccessibilityInfoStatic`
* `ImageResizeModeStatic`
* `BackHandlerStatic`
* `DevMenuStatic` (In this case there was no relevant `DevMenu` type alias)
* `ClipboardStatic`
* `PermissionsAndroidStatic`
* `ShareStatic`
* `DeviceEventEmitterStatic`
* `LayoutAnimationStatic`
* `KeyboardStatic` (In this case there was no relevant `Keyboard` type alias)
* `DevSettingsStatic` (In this case there was no relevant `DevSettings` type alias)
* `I18nManagerStatic`
* `EasingStatic`
* `PanResponderStatic`
* `NativeModulesStatic` (In this case there was no relevant `NativeModules` type alias)
* `LogBoxStatic`
* `PushNotificationIOSStatic`
* `SettingsStatic`
* `VibrationStatic`

### Some core components are now function components instead of class components[​](#some-core-components-are-now-function-components-instead-of-class-components "Direct link to Some core components are now function components instead of class components")

* `View`
* `Image`
* `TextInput`
* `Modal`
* `Text`
* `TouchableWithoutFeedback`
* `Switch`
* `ActivityIndicator`
* `ProgressBarAndroid`
* `InputAccessoryView`
* `Button`
* `SafeAreaView`

Due to this change, accessing ref types of these views requires using `React.ComponentRef<typeof View>` pattern which works as expected for both class and function components, e.g.:

```

const ref = useRef\<React.ComponentRef>(null);

```

## Other breaking changes[​](#other-breaking-changes "Direct link to Other breaking changes")

### Changes to Animated types[​](#changes-to-animated-types "Direct link to Changes to Animated types")

Animated nodes were previously generic types based on their interpolation output. Now, they are non-generic types with a generic `interpolate` method.

`Animated.LegacyRef` is no longer available.

### Unified types for optional props[​](#unified-types-for-optional-props "Direct link to Unified types for optional props")

In the new types, every optional prop will be typed as `type | undefined`.

### Removal of some deprecated types[​](#removal-of-some-deprecated-types "Direct link to Removal of some deprecated types")

All types listed in [`DeprecatedPropertiesAlias.d.ts`](https://github.com/facebook/react-native/blob/0.84-stable/packages/react-native/types/public/DeprecatedPropertiesAlias.d.ts) are inaccessible under the Strict API.

### Removal of leftover component props[​](#removal-of-leftover-component-props "Direct link to Removal of leftover component props")

Some properties that were defined in type definitions but were not used by the component or were lacking a definition were removed (for example: `lineBreakMode` on `Text`, `scrollWithoutAnimationTo` on `ScrollView`, transform styles defined outside of transform array).

### Previously accessible private type helpers may now be removed[​](#previously-accessible-private-type-helpers-may-now-be-removed "Direct link to Previously accessible private type helpers may now be removed")

Due to the configuration of the previous type definitions, every defined type was accessible from the `react-native` package. This included types that were not explicitly exported and helper types that were only supposed to be used internally.

Notable examples of this are types related to StyleSheet (like `RecursiveArray`, `RegisteredStyle` and `Falsy`) and Animated (like `WithAnimatedArray` and `WithAnimatedObject`).


---

# Style

With React Native, you style your application using JavaScript. All of the core components accept a prop named `style`. The style names and [values](/docs/colors.md) usually match how CSS works on the web, except names are written using camel casing, e.g. `backgroundColor` rather than `background-color`.

The `style` prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.

As a component grows in complexity, it is often cleaner to use `StyleSheet.create` to define several styles in one place. Here's an example:

One common pattern is to make your component accept a `style` prop which in turn is used to style subcomponents. You can use this to make styles "cascade" the way they do in CSS.

There are a lot more ways to customize the text style. Check out the [Text component reference](/docs/text.md) for a complete list.

Now you can make your text beautiful. The next step in becoming a style expert is to [learn how to control component size](/docs/height-and-width.md).

## Known issues[​](#known-issues "Direct link to Known issues")

* [react-native#29308](https://github.com/facebook/react-native/issues/29308#issuecomment-792864162): In some cases React Native does not match how CSS works on the web, for example the touch area never extends past the parent view bounds and on Android negative margin is not supported.


---

# StyleSheet

A StyleSheet is an abstraction similar to CSS StyleSheets.

Code quality tips:

* By moving styles away from the render function, you're making the code easier to understand.
* Naming the styles is a good way to add meaning to the low level components in the render function, and encourage reuse.
* In most IDEs, using `StyleSheet.create()` will offer static type checking and suggestions to help you write valid styles.

***

# Reference

## Methods[​](#methods "Direct link to Methods")

### `compose()`[​](#compose "Direct link to compose")

tsx

```

static compose(style1: Object, style2: Object): Object | Object\[];

```

Combines two styles such that `style2` will override any styles in `style1`. If either style is falsy, the other one is returned without allocating an array, saving allocations and maintaining reference equality for PureComponent checks.

***

### `create()`[​](#create "Direct link to create")

tsx

```

static create(styles: Object extends Record\<string, ViewStyle | ImageStyle | TextStyle>): Object;

```

An identity function for creating styles. The main practical benefit of creating styles inside `StyleSheet.create()` is static type checking against native style properties.

***

### `flatten()`[​](#flatten "Direct link to flatten")

tsx

```

static flatten(style: Array>): Object;

```

Flattens an array of style objects, into one aggregated style object.

***

### `setStyleAttributePreprocessor()`[​](#setstyleattributepreprocessor "Direct link to setstyleattributepreprocessor")

Experimental

Breaking changes will probably happen a lot and will not be reliably announced. The whole thing might be deleted, who knows? Use at your own risk.

tsx

```

static setStyleAttributePreprocessor(
property: string,
process: (propValue: any) => any,
);

```

Sets a function to use to pre-process a style property value. This is used internally to process color and transform values. You should not use this unless you really know what you are doing and have exhausted other options.

## Properties[​](#properties "Direct link to Properties")

***

### `absoluteFill`[​](#absolutefill "Direct link to absolutefill")

A very common pattern is to create overlays with position absolute and zero positioning (`position: 'absolute', left: 0, right: 0, top: 0, bottom: 0`), so `absoluteFill` can be used for convenience and to reduce duplication of these repeated styles. If you want, absoluteFill can be used to create a customized entry in a StyleSheet, e.g.:

***

### `absoluteFillObject`[​](#absolutefillobject "Direct link to absolutefillobject")

Sometimes you may want `absoluteFill` but with a couple tweaks - `absoluteFillObject` can be used to create a customized entry in a `StyleSheet`, e.g.:

***

### `hairlineWidth`[​](#hairlinewidth "Direct link to hairlinewidth")

This is defined as the width of a thin line on the platform. It can be used as the thickness of a border or division between two elements. Example:

This constant will always be a round number of pixels (so a line defined by it can look crisp) and will try to match the standard width of a thin line on the underlying platform. However, you should not rely on it being a constant size, because on different platforms and screen densities its value may be calculated differently.

A line with hairline width may not be visible if your simulator is downscaled.


---

# Switch

Renders a boolean input.

This is a controlled component that requires an `onValueChange` callback that updates the `value` prop in order for the component to reflect user actions. If the `value` prop is not updated, the component will continue to render the supplied `value` prop instead of the expected result of any user actions.

## Example[​](#example "Direct link to Example")

***

# Reference

## Props[​](#props "Direct link to Props")

### [View Props](/docs/view.md#props)[​](#view-props "Direct link to view-props")

Inherits [View Props](/docs/view.md#props).

***

### `disabled`[​](#disabled "Direct link to disabled")

If true the user won't be able to toggle the switch.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `ios_backgroundColor`iOS[​](#ios_backgroundcolor-ios "Direct link to ios_backgroundcolor-ios")

On iOS, custom color for the background. This background color can be seen either when the switch value is `false` or when the switch is disabled (and the switch is translucent).

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `onChange`[​](#onchange "Direct link to onchange")

Invoked when the user tries to change the value of the switch. Receives the change event as an argument. If you want to only receive the new value, use `onValueChange` instead.

| Type     |
| -------- |
| function |

***

### `onValueChange`[​](#onvaluechange "Direct link to onvaluechange")

Invoked when the user tries to change the value of the switch. Receives the new value as an argument. If you want to instead receive an event, use `onChange`.

| Type     |
| -------- |
| function |

***

### `ref`[​](#ref "Direct link to ref")

A ref setter that will be assigned an [element node](/docs/element-nodes.md) when mounted.

***

### `thumbColor`[​](#thumbcolor "Direct link to thumbcolor")

Color of the foreground switch grip. If this is set on iOS, the switch grip will lose its drop shadow.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `trackColor`[​](#trackcolor "Direct link to trackcolor")

Custom colors for the switch track.

*iOS*: When the switch value is `false`, the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use [`ios_backgroundColor`](/docs/switch.md#ios_backgroundColor).

| Type                                  |
| ------------------------------------- |
| `object: {false: color, true: color}` |

***

### `value`[​](#value "Direct link to value")

The value of the switch. If true the switch will be turned on. Default value is false.

| Type |
| ---- |
| bool |


---

# Systrace

`Systrace` is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize.

## Example[​](#example "Direct link to Example")

`Systrace` allows you to mark JavaScript (JS) events with a tag and an integer value. Capture the non-Timed JS events in EasyProfiler.

***

# Reference

## Methods[​](#methods "Direct link to Methods")

### `isEnabled()`[​](#isenabled "Direct link to isenabled")

tsx

```

static isEnabled(): boolean;

```

***

### `beginEvent()`[​](#beginevent "Direct link to beginevent")

tsx

```

static beginEvent(eventName: string | (() => string), args?: EventArgs);

```

beginEvent/endEvent for starting and then ending a profile within the same call stack frame.

***

### `endEvent()`[​](#endevent "Direct link to endevent")

tsx

```

static endEvent(args?: EventArgs);

```

***

### `beginAsyncEvent()`[​](#beginasyncevent "Direct link to beginasyncevent")

tsx

```

static beginAsyncEvent(
eventName: string | (() => string),
args?: EventArgs,
): number;

```

beginAsyncEvent/endAsyncEvent for starting and then ending a profile where the end can either occur on another thread or out of the current stack frame, eg await the returned cookie variable should be used as input into the endAsyncEvent call to end the profile.

***

### `endAsyncEvent()`[​](#endasyncevent "Direct link to endasyncevent")

tsx

```

static endAsyncEvent(
eventName: EventName,
cookie: number,
args?: EventArgs,
);

```

***

### `counterEvent()`[​](#counterevent "Direct link to counterevent")

tsx

```

static counterEvent(eventName: string | (() => string), value: number);

```

Register the value to the profileName on the systrace timeline.


---

# TargetEvent Object Type

`TargetEvent` object is returned in the callback as a result of focus change, for example `onFocus` or `onBlur` in the [TextInput](/docs/textinput.md) component.

## Example[​](#example "Direct link to Example")

```

{
target: 1127
}

```

## Keys and values[​](#keys-and-values "Direct link to Keys and values")

### `target`[​](#target "Direct link to target")

The node id of the element receiving the TargetEvent.

| Type                        | Optional |
| --------------------------- | -------- |
| number, `null`, `undefined` | No       |

## Used by[​](#used-by "Direct link to Used by")

* [`TextInput`](/docs/textinput.md)
* [`TouchableWithoutFeedback`](/docs/touchablewithoutfeedback.md)


---

# Testing

As your codebase expands, small errors and edge cases you don’t expect can cascade into larger failures. Bugs lead to bad user experience and ultimately, business losses. One way to prevent fragile programming is to test your code before releasing it into the wild.

In this guide, we will cover different, automated ways to ensure your app works as expected, ranging from static analysis to end-to-end tests.

![Testing is a cycle of fixing, testing, and either passing to release or failing back into testing.](/docs/assets/diagram_testing.svg)

## Why Test[​](#why-test "Direct link to Why Test")

We're humans, and humans make mistakes. Testing is important because it helps you uncover these mistakes and verifies that your code is working. Perhaps even more importantly, testing ensures that your code continues to work in the future as you add new features, refactor the existing ones, or upgrade major dependencies of your project.

There is more value in testing than you might realize. One of the best ways to fix a bug in your code is to write a failing test that exposes it. Then when you fix the bug and re-run the test, if it passes it means the bug is fixed, never reintroduced into the code base.

Tests can also serve as documentation for new people joining your team. For people who have never seen a codebase before, reading tests can help them understand how the existing code works.

Last but not least, more automated testing means less time spent with manual QA, freeing up valuable time.

## Static Analysis[​](#static-analysis "Direct link to Static Analysis")

The first step to improve your code quality is to start using static analysis tools. Static analysis checks your code for errors as you write it, but without running any of that code.

* **Linters** analyze code to catch common errors such as unused code and to help avoid pitfalls, to flag style guide no-nos like using tabs instead of spaces (or vice versa, depending on your configuration).
* **Type checking** ensures that the construct you’re passing to a function matches what the function was designed to accept, preventing passing a string to a counting function that expects a number, for instance.

React Native comes with two such tools configured out of the box: [ESLint](https://eslint.org/) for linting and [TypeScript](/docs/typescript.md) for type checking.

## Writing Testable Code[​](#writing-testable-code "Direct link to Writing Testable Code")

To start with tests, you first need to write code that is testable. Consider an aircraft manufacturing process - before any model first takes off to show that all of its complex systems work well together, individual parts are tested to guarantee they are safe and function correctly. For example, wings are tested by bending them under extreme load; engine parts are tested for their durability; the windshield is tested against simulated bird impact.

Software is similar. Instead of writing your entire program in one huge file with many lines of code, you write your code in multiple small modules that you can test more thoroughly than if you tested the assembled whole. In this way, writing testable code is intertwined with writing clean, modular code.

To make your app more testable, start by separating the view part of your app—your React components—from your business logic and app state (regardless of whether you use Redux, MobX or other solutions). This way, you can keep your business logic testing—which shouldn’t rely on your React components—independent of the components themselves, whose job is primarily rendering your app’s UI!

Theoretically, you could go so far as to move all logic and data fetching out of your components. This way your components would be solely dedicated to rendering. Your state would be entirely independent of your components. Your app’s logic would work without any React components at all!

tip

We encourage you to further explore the topic of testable code in other learning resources.

## Writing Tests[​](#writing-tests "Direct link to Writing Tests")

After writing testable code, it’s time to write some actual tests! The default template of React Native ships with [Jest](https://jestjs.io) testing framework. It includes a preset that's tailored to this environment so you can get productive without tweaking the configuration and mocks straight away—[more on mocks](#mocking) shortly. You can use Jest to write all types of tests featured in this guide.

note

If you do test-driven development, you actually write tests first! That way, testability of your code is given.

### Structuring Tests[​](#structuring-tests "Direct link to Structuring Tests")

Your tests should be short and ideally test only one thing. Let's start with an example unit test written with Jest:

js

```

it('given a date in the past, colorForDueDate() returns red', () => {
expect(colorForDueDate('2000-10-20')).toBe('red');
});

```

The test is described by the string passed to the [`it`](https://jestjs.io/docs/en/api#testname-fn-timeout) function. Take good care writing the description so that it’s clear what is being tested. Do your best to cover the following:

1. **Given** - some precondition
2. **When** - some action executed by the function that you’re testing
3. **Then** - the expected outcome

This is also known as AAA (Arrange, Act, Assert).

Jest offers [`describe`](https://jestjs.io/docs/en/api#describename-fn) function to help structure your tests. Use `describe` to group together all tests that belong to one functionality. Describes can be nested, if you need that. Other functions you'll commonly use are [`beforeEach`](https://jestjs.io/docs/en/api#beforeeachfn-timeout) or [`beforeAll`](https://jestjs.io/docs/en/api#beforeallfn-timeout) that you can use for setting up the objects you're testing. Read more in the [Jest api reference](https://jestjs.io/docs/en/api).

If your test has many steps or many expectations, you probably want to split it into multiple smaller ones. Also, ensure that your tests are completely independent of one another. Each test in your suite must be executable on its own without first running some other test. Conversely, if you run all your tests together, the first test must not influence the output of the second one.

Lastly, as developers we like when our code works great and doesn't crash. With tests, this is often the opposite. Think of a failed test as of a *good thing!* When a test fails, it often means something is not right. This gives you an opportunity to fix the problem before it impacts the users.

## Unit Tests[​](#unit-tests "Direct link to Unit Tests")

Unit tests cover the smallest parts of code, like individual functions or classes.

When the object being tested has any dependencies, you’ll often need to mock them out, as described in the next paragraph.

The great thing about unit tests is that they are quick to write and run. Therefore, as you work, you get fast feedback about whether your tests are passing. Jest even has an option to continuously run tests that are related to code you’re editing: [Watch mode](https://jestjs.io/docs/en/cli#watch).

![ ](/docs/assets/p_tests-unit.svg)

### Mocking[​](#mocking "Direct link to Mocking")

Sometimes, when your tested objects have external dependencies, you’ll want to “mock them out.” “Mocking” is when you replace some dependency of your code with your own implementation.

info

Generally, using real objects in your tests is better than using mocks but there are situations where this is not possible. For example: when your JS unit test relies on a native module written in Java or Objective-C.

Imagine you’re writing an app that shows the current weather in your city and you’re using some external service or other dependency that provides you with the weather information. If the service tells you that it’s raining, you want to show an image with a rainy cloud. You don’t want to call that service in your tests, because:

* It could make the tests slow and unstable (because of the network requests involved)
* The service may return different data every time you run the test
* Third party services can go offline when you really need to run tests!

Therefore, you can provide a mock implementation of the service, effectively replacing thousands of lines of code and some internet-connected thermometers!

note

Jest comes with [support for mocking](https://jestjs.io/docs/en/mock-functions#mocking-modules) from function level all the way to module level mocking.

## Integration Tests[​](#integration-tests "Direct link to Integration Tests")

When writing larger software systems, individual pieces of it need to interact with each other. In unit testing, if your unit depends on another one, you’ll sometimes end up mocking the dependency, replacing it with a fake one.

In integration testing, real individual units are combined (same as in your app) and tested together to ensure that their cooperation works as expected. This is not to say that mocking does not happen here: you’ll still need mocks (for example, to mock communication with a weather service), but you'll need them much less than in unit testing.

info

Please note that the terminology around what integration testing means is not always consistent. Also, the line between what is a unit test and what is an integration test may not always be clear. For this guide, your test falls into "integration testing" if it:

* Combines several modules of your app as described above
* Uses an external system
* Makes a network call to other application (such as the weather service API)
* Does any kind of file or database I/O

![ ](/docs/assets/p_tests-integration.svg)

## Component Tests[​](#component-tests "Direct link to Component Tests")

React components are responsible for rendering your app, and users will directly interact with their output. Even if your app's business logic has high testing coverage and is correct, without component tests you may still deliver a broken UI to your users. Component tests could fall into both unit and integration testing, but because they are such a core part of React Native, we'll cover them separately.

For testing React components, there are two things you may want to test:

* Interaction: to ensure the component behaves correctly when interacted with by a user (eg. when user presses a button)
* Rendering: to ensure the component render output used by React is correct (eg. the button's appearance and placement in the UI)

For example, if you have a button that has an `onPress` listener, you want to test that the button both appears correctly and that tapping the button is correctly handled by the component.

There are several libraries that can help you testing these:

* [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) builds on top of React’s test renderer and adds `fireEvent` and `query` APIs described in the next paragraph.
* \[Deprecated] React’s [Test Renderer](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#deprecated-react-test-renderer), developed alongside its core, provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.

warning

Component tests are only JavaScript tests running in Node.js environment. They do *not* take into account any iOS, Android, or other platform code which is backing the React Native components. It follows that they cannot give you a 100% confidence that everything works for the user. If there is a bug in the iOS or Android code, they will not find it.

![ ](/docs/assets/p_tests-component.svg)

### Testing User Interactions[​](#testing-user-interactions "Direct link to Testing User Interactions")

Aside from rendering some UI, your components handle events like `onChangeText` for `TextInput` or `onPress` for `Button`. They may also contain other functions and event callbacks. Consider the following example:

tsx

```

function GroceryShoppingList() {
const \[groceryItem, setGroceryItem] = useState('');
const \[items, setItems] = useState\<string\[]>(\[]);

const addNewItemToShoppingList = useCallback(() => {
setItems(\[groceryItem, ...items]);
setGroceryItem('');
}, \[groceryItem, items]);

return (
<>
\<TextInput
value={groceryItem}
placeholder="Enter grocery item"
onChangeText={text => setGroceryItem(text)}
/> <Button
     title="Add the item to list"
     onPress={addNewItemToShoppingList}
   />
{items.map(item => (
{item}
))}
\</>
);
}

```

When testing user interactions, test the component from the user perspective—what's on the page? What changes when interacted with?

As a rule of thumb, prefer using things users can see or hear:

* make assertions using rendered text or [accessibility helpers](https://reactnative.dev/docs/accessibility#accessibility-properties)

Conversely, you should avoid:

* making assertions on component props or state
* testID queries

Avoid testing implementation details like props or state—while such tests work, they are not oriented toward how users will interact with the component and tend to break by refactoring (for example when you'd like to rename some things or rewrite class component using hooks).

info

React class components are especially prone to testing their implementation details such as internal state, props or event handlers. To avoid testing implementation details, prefer using function components with Hooks, which make relying on component internals *harder*.

Component testing libraries such as [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) facilitate writing user-centric tests by careful choice of provided APIs. The following example uses `fireEvent` methods `changeText` and `press` that simulate a user interacting with the component and a query function `getAllByText` that finds matching `Text` nodes in the rendered output.

tsx

```

test('given empty GroceryShoppingList, user can add an item to it', () => {
const {getByPlaceholderText, getByText, getAllByText} = render(
,
);

fireEvent.changeText(
getByPlaceholderText('Enter grocery item'),
'banana',
);
fireEvent.press(getByText('Add the item to list'));

const bananaElements = getAllByText('banana');
expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
});

```

This example is not testing how some state changes when you call a function. It tests what happens when a user changes text in the `TextInput` and presses the `Button`!

### Testing Rendered Output[​](#testing-rendered-output "Direct link to Testing Rendered Output")

[Snapshot testing](https://jestjs.io/docs/en/snapshot-testing) is an advanced kind of testing enabled by Jest. It is a very powerful and low-level tool, so extra attention is advised when using it.

A "component snapshot" is a JSX-like string created by a custom React serializer built into Jest. This serializer lets Jest translate React component trees to string that's human-readable. Put another way: a component snapshot is a textual representation of your component’s render output *generated* during a test run. It may look like this:

tsx

```

\<Text
style={
Object {
"fontSize": 20,
"textAlign": "center",
}
}>
Welcome to React Native!

```

With snapshot testing, you typically first implement your component and then run the snapshot test. The snapshot test then creates a snapshot and saves it to a file in your repo as a reference snapshot. **The file is then committed and checked during code review**. Any future changes to the component render output will change its snapshot, which will cause the test to fail. You then need to update the stored reference snapshot for the test to pass. That change again needs to be committed and reviewed.

Snapshots have several weak points:

* For you as a developer or reviewer, it can be hard to tell whether a change in snapshot is intended or whether it's evidence of a bug. Especially large snapshots can quickly become hard to understand and their added value becomes low.
* When snapshot is created, at that point it is considered to be correct-even in the case when the rendered output is actually wrong.
* When a snapshot fails, it's tempting to update it using the `--updateSnapshot` jest option without taking proper care to investigate whether the change is expected. Certain developer discipline is thus needed.

Snapshots themselves do not ensure that your component render logic is correct, they are merely good at guarding against unexpected changes and for checking that the components in the React tree under test receive the expected props (styles and etc.).

We recommend that you only use small snapshots (see [`no-large-snapshots` rule](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md)). If you want to test a *change* between two React component states, use [`snapshot-diff`](https://github.com/jest-community/snapshot-diff). When in doubt, prefer explicit expectations as described in the previous paragraph.

![ ](/docs/assets/p_tests-snapshot.svg)

## End-to-End Tests[​](#end-to-end-tests "Direct link to End-to-End Tests")

In end-to-end (E2E) tests, you verify your app is working as expected on a device (or a simulator / emulator) from the user perspective.

This is done by building your app in the release configuration and running the tests against it. In E2E tests, you no longer think about React components, React Native APIs, Redux stores or any business logic. That is not the purpose of E2E tests and those are not even accessible to you during E2E testing.

Instead, E2E testing libraries allow you to find and control elements in the screen of your app: for example, you can *actually* tap buttons or insert text into `TextInputs` the same way a real user would. Then you can make assertions about whether or not a certain element exists in the app’s screen, whether or not it’s visible, what text it contains, and so on.

E2E tests give you the highest possible confidence that part of your app is working. The tradeoffs include:

* writing them is more time consuming compared to the other types of tests
* they are slower to run
* they are more prone to flakiness (a "flaky" test is a test which randomly passes and fails without any change to code)

Try to cover the vital parts of your app with E2E tests: authentication flow, core functionalities, payments, etc. Use faster JS tests for the non-vital parts of your app. The more tests you add, the higher your confidence, but also, the more time you'll spend maintaining and running them. Consider the tradeoffs and decide what's best for you.

There are several E2E testing tools available: in the React Native community, [Detox](https://github.com/wix/detox/) is a popular framework because it’s tailored for React Native apps. Another popular library in the space of iOS and Android apps is [Appium](https://appium.io/) or [Maestro](https://maestro.mobile.dev/).

![ ](/docs/assets/p_tests-e2e.svg)

## Summary[​](#summary "Direct link to Summary")

We hope you enjoyed reading and learned something from this guide. There are many ways you can test your apps. It may be hard to decide what to use at first. However, we believe it all will make sense once you start adding tests to your awesome React Native app. So what are you waiting for? Get your coverage up!

### Links[​](#links "Direct link to Links")

* [React testing overview](https://react.dev/reference/react/act)
* [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
* [Jest docs](https://jestjs.io/docs/en/tutorial-react-native)
* [Detox](https://github.com/wix/detox/)
* [Appium](https://appium.io/)
* [Maestro](https://maestro.mobile.dev/)

***

*This guide originally authored and contributed in full by [Vojtech Novak](https://twitter.com/vonovak).*


---

# Text

A React component for displaying text.

`Text` supports nesting, styling, and touch handling.

In the following example, the nested title and body text will inherit the `fontFamily` from `styles.baseText`, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newlines:

## Nested text[​](#nested-text "Direct link to Nested text")

Both Android and iOS allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (`NSAttributedString` on iOS, `SpannableString` on Android). In practice, this is very tedious. For React Native, we decided to use the web paradigm for this, where you can nest text to achieve the same effect.

Behind the scenes, React Native converts this to a flat `NSAttributedString` or `SpannableString` that contains the following information:

```

"I am bold and red"
0-9: bold
9-17: bold, red

```

## Containers[​](#containers "Direct link to Containers")

The `<Text>` element is unique relative to layout: everything inside is no longer using the Flexbox layout but using text layout. This means that elements inside of a `<Text>` are no longer rectangles, but wrap when they see the end of the line.

tsx

```

First part and
second part

// Text container: the text will be inline, if the space allows it
// |First part and second part|

// otherwise, the text will flow as if it was one
// |First part |
// |and second |
// |part       |

First part and
second part

// View container: each text is its own block
// |First part and|
// |second part   |

// otherwise, the text will flow in its own block
// |First part |
// |and        |
// |second part|

```

## Limited Style Inheritance[​](#limited-style-inheritance "Direct link to Limited Style Inheritance")

On the web, the usual way to set a font family and size for the entire document is to take advantage of inherited CSS properties like so:

css

```

html {
font-family:
'lucida grande', tahoma, verdana, arial, sans-serif;
font-size: 11px;
color: #141823;
}

```

All elements in the document will inherit this font unless they or one of their parents specifies a new rule.

In React Native, we are more strict about it: **you must wrap all the text nodes inside of a `<Text>` component**. You cannot have a text node directly under a `<View>`.

tsx

```

// BAD: will raise exception, can't have a text node as child of a

Some text

// GOOD

```
Some text
```

```

You also lose the ability to set up a default font for an entire subtree. Meanwhile, `fontFamily` only accepts a single font name, which is different from `font-family` in CSS. The recommended way to use consistent fonts and sizes across your application is to create a component `MyAppText` that includes them and use this component across your app. You can also use this component to make more specific components like `MyAppHeaderText` for other kinds of text.

tsx

```

```
Text styled with the default font for the entire application
```

Text styled as a header

```

Assuming that `MyAppText` is a component that only renders out its children into a `Text` component with styling, then `MyAppHeaderText` can be defined as follows:

tsx

```

const MyAppHeaderText = ({children}) => {
return (

```
  {children}
```

);
};

```

Composing `MyAppText` in this way ensures that we get the styles from a top-level component, but leaves us the ability to add/override them in specific use cases.

React Native still has the concept of style inheritance, but limited to text subtrees. In this case, the second part will be both bold and red.

tsx

```

I am bold
and red

```

We believe that this more constrained way to style text will yield better apps:

* (Developer) React components are designed with strong isolation in mind: You should be able to drop a component anywhere in your application, trusting that as long as the props are the same, it will look and behave the same way. Text properties that could inherit from outside of the props would break this isolation.

* (Implementor) The implementation of React Native is also simplified. We do not need to have a `fontFamily` field on every single element, and we do not need to potentially traverse the tree up to the root every time we display a text node. The style inheritance is only encoded inside of the native Text component and doesn't leak to other components or the system itself.

***

# Reference

## Props[​](#props "Direct link to Props")

### `accessibilityHint`[​](#accessibilityhint "Direct link to accessibilityhint")

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label.

| Type   |
| ------ |
| string |

***

### `accessibilityLanguage`iOS[​](#accessibilitylanguage-ios "Direct link to accessibilitylanguage-ios")

A value indicating which language should be used by the screen reader when the user interacts with the element. It should follow the [BCP 47 specification](https://www.rfc-editor.org/info/bcp47).

See the [iOS `accessibilityLanguage` doc](https://developer.apple.com/documentation/objectivec/nsobject/1615192-accessibilitylanguage) for more information.

| Type   |
| ------ |
| string |

***

### `accessibilityLabel`[​](#accessibilitylabel "Direct link to accessibilitylabel")

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `Text` nodes separated by space.

| Type   |
| ------ |
| string |

***

### `accessibilityRole`[​](#accessibilityrole "Direct link to accessibilityrole")

Tells the screen reader to treat the currently focused on element as having a specific role.

On iOS, these roles map to corresponding Accessibility Traits. Image button has the same functionality as if the trait was set to both 'image' and 'button'. See the [Accessibility guide](/docs/accessibility.md#accessibilitytraits-ios) for more information.

On Android, these roles have similar functionality on TalkBack as adding Accessibility Traits does on Voiceover in iOS

| Type                                                          |
| ------------------------------------------------------------- |
| [AccessibilityRole](/docs/accessibility.md#accessibilityrole) |

***

### `accessibilityState`[​](#accessibilitystate "Direct link to accessibilitystate")

Tells the screen reader to treat the currently focused on element as being in a specific state.

You can provide one state, no state, or multiple states. The states must be passed in through an object, e.g. `{selected: true, disabled: true}`.

| Type                                                            |
| --------------------------------------------------------------- |
| [AccessibilityState](/docs/accessibility.md#accessibilitystate) |

***

### `accessibilityActions`[​](#accessibilityactions "Direct link to accessibilityactions")

Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. The `accessibilityActions` property should contain a list of action objects. Each action object should contain the field name and label.

See the [Accessibility guide](/docs/accessibility.md#accessibility-actions) for more information.

| Type  | Required |
| ----- | -------- |
| array | No       |

***

### `onAccessibilityAction`[​](#onaccessibilityaction "Direct link to onaccessibilityaction")

Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform.

See the [Accessibility guide](/docs/accessibility.md#accessibility-actions) for more information.

| Type     | Required |
| -------- | -------- |
| function | No       |

***

### `accessible`[​](#accessible "Direct link to accessible")

When set to `true`, indicates that the view is an accessibility element.

See the [Accessibility guide](/docs/accessibility.md#accessible-ios-android) for more information.

| Type    | Default |
| ------- | ------- |
| boolean | `true`  |

***

### `adjustsFontSizeToFit`[​](#adjustsfontsizetofit "Direct link to adjustsfontsizetofit")

Specifies whether fonts should be scaled down automatically to fit given style constraints.

| Type    | Default |
| ------- | ------- |
| boolean | `false` |

***

### `allowFontScaling`[​](#allowfontscaling "Direct link to allowfontscaling")

Specifies whether fonts should scale to respect Text Size accessibility settings.

| Type    | Default |
| ------- | ------- |
| boolean | `true`  |

***

### `android_hyphenationFrequency`Android[​](#android_hyphenationfrequency-android "Direct link to android_hyphenationfrequency-android")

Sets the frequency of automatic hyphenation to use when determining word breaks on Android API Level 23+.

| Type                                | Default  |
| ----------------------------------- | -------- |
| enum(`'none'`, `'normal'`,`'full'`) | `'none'` |

***

### `aria-busy`[​](#aria-busy "Direct link to aria-busy")

Indicates an element is being modified and that assistive technologies may want to wait until the changes are complete before informing the user about the update.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

***

### `aria-checked`[​](#aria-checked "Direct link to aria-checked")

Indicates the state of a checkable element. This field can either take a boolean or the "mixed" string to represent mixed checkboxes.

| Type             | Default |
| ---------------- | ------- |
| boolean, 'mixed' | false   |

***

### `aria-disabled`[​](#aria-disabled "Direct link to aria-disabled")

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

***

### `aria-expanded`[​](#aria-expanded "Direct link to aria-expanded")

Indicates whether an expandable element is currently expanded or collapsed.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

***

### `aria-label`[​](#aria-label "Direct link to aria-label")

Defines a string value that labels an interactive element.

| Type   |
| ------ |
| string |

***

### `aria-selected`[​](#aria-selected "Direct link to aria-selected")

Indicates whether a selectable element is currently selected or not.

| Type    |
| ------- |
| boolean |

### `dataDetectorType`Android[​](#datadetectortype-android "Direct link to datadetectortype-android")

Determines the types of data converted to clickable URLs in the text element. By default, no data types are detected.

You can provide only one type.

| Type                                                          | Default  |
| ------------------------------------------------------------- | -------- |
| enum(`'phoneNumber'`, `'link'`, `'email'`, `'none'`, `'all'`) | `'none'` |

***

### `disabled`Android[​](#disabled-android "Direct link to disabled-android")

Specifies the disabled state of the text view for testing purposes.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `dynamicTypeRamp`iOS[​](#dynamictyperamp-ios "Direct link to dynamictyperamp-ios")

The [Dynamic Type](https://developer.apple.com/documentation/uikit/uifont/scaling_fonts_automatically) ramp to apply to this element on iOS.

| Type                                                                                                                                                     | Default  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| enum(`'caption2'`, `'caption1'`, `'footnote'`, `'subheadline'`, `'callout'`, `'body'`, `'headline'`, `'title3'`, `'title2'`, `'title1'`, `'largeTitle'`) | `'body'` |

***

### `ellipsizeMode`[​](#ellipsizemode "Direct link to ellipsizemode")

When `numberOfLines` is set, this prop defines how the text will be truncated. `numberOfLines` must be set in conjunction with this prop.

This can be one of the following values:

* `head` - The line is displayed so that the end fits in the container and the missing text at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"
* `middle` - The line is displayed so that the beginning and end fit in the container and the missing text in the middle is indicated by an ellipsis glyph. "ab...yz"
* `tail` - The line is displayed so that the beginning fits in the container and the missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."
* `clip` - Lines are not drawn past the edge of the text container.

note

On Android, when `numberOfLines` is set to a value higher than `1`, only `tail` value will work correctly.

| Type                                           | Default |
| ---------------------------------------------- | ------- |
| enum(`'head'`, `'middle'`, `'tail'`, `'clip'`) | `tail`  |

***

### `id`[​](#id "Direct link to id")

Used to locate this view from native code. Has precedence over `nativeID` prop.

| Type   |
| ------ |
| string |

***

### `maxFontSizeMultiplier`[​](#maxfontsizemultiplier "Direct link to maxfontsizemultiplier")

Specifies the largest possible scale a font can reach when `allowFontScaling` is enabled. Possible values:

* `null/undefined`: inherit from the parent node or the global default (0)
* `0`: no max, ignore parent/global default
* `>= 1`: sets the `maxFontSizeMultiplier` of this node to this value

| Type   | Default     |
| ------ | ----------- |
| number | `undefined` |

***

### `minimumFontScale`[​](#minimumfontscale "Direct link to minimumfontscale")

Specifies the smallest possible scale a font can reach when `adjustsFontSizeToFit` is enabled. (values 0.01-1.0).

| Type   |
| ------ |
| number |

***

### `nativeID`[​](#nativeid "Direct link to nativeid")

Used to locate this view from native code.

| Type   |
| ------ |
| string |

***

### `numberOfLines`[​](#numberoflines "Direct link to numberoflines")

Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number. Setting this property to `0` will result in unsetting this value, which means that no lines restriction will be applied.

This prop is commonly used with `ellipsizeMode`.

| Type   | Default |
| ------ | ------- |
| number | `0`     |

***

### `onLayout`[​](#onlayout "Direct link to onlayout")

Invoked on mount and on layout changes.

| Type                                   |
| -------------------------------------- |
| `({nativeEvent: LayoutEvent}) => void` |

***

### `onLongPress`[​](#onlongpress "Direct link to onlongpress")

This function is called on long press.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

***

### `onMoveShouldSetResponder`[​](#onmoveshouldsetresponder "Direct link to onmoveshouldsetresponder")

Does this view want to "claim" touch responsiveness? This is called for every touch move on the `View` when it is not the responder.

| Type                                     |
| ---------------------------------------- |
| `({nativeEvent: PressEvent}) => boolean` |

***

### `onPress`[​](#onpress "Direct link to onpress")

Function called on user press, triggered after `onPressOut`.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

***

### `onPressIn`[​](#onpressin "Direct link to onpressin")

Called immediately when a touch is engaged, before `onPressOut` and `onPress`.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

***

### `onPressOut`[​](#onpressout "Direct link to onpressout")

Called when a touch is released.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

***

### `onResponderGrant`[​](#onrespondergrant "Direct link to onrespondergrant")

The View is now responding to touch events. This is the time to highlight and show the user what is happening.

On Android, return true from this callback to prevent any other native components from becoming responder until this responder terminates.

| Type                                             |
| ------------------------------------------------ |
| `({nativeEvent: PressEvent}) => void ｜ boolean` |

***

### `onResponderMove`[​](#onrespondermove "Direct link to onrespondermove")

The user is moving their finger.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

***

### `onResponderRelease`[​](#onresponderrelease "Direct link to onresponderrelease")

Fired at the end of the touch.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

***

### `onResponderTerminate`[​](#onresponderterminate "Direct link to onresponderterminate")

The responder has been taken from the `View`. Might be taken by other views after a call to `onResponderTerminationRequest`, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

***

### `onResponderTerminationRequest`[​](#onresponderterminationrequest "Direct link to onresponderterminationrequest")

Some other `View` wants to become a responder and is asking this `View` to release its responder. Returning `true` allows its release.

| Type                                     |
| ---------------------------------------- |
| `({nativeEvent: PressEvent}) => boolean` |

***

### `onStartShouldSetResponderCapture`[​](#onstartshouldsetrespondercapture "Direct link to onstartshouldsetrespondercapture")

If a parent `View` wants to prevent a child `View` from becoming a responder on a touch start, it should have this handler which returns `true`.

| Type                                     |
| ---------------------------------------- |
| `({nativeEvent: PressEvent}) => boolean` |

***

### `onTextLayout`[​](#ontextlayout "Direct link to ontextlayout")

Invoked on Text layout change.

| Type                                                          |
| ------------------------------------------------------------- |
| ([`TextLayoutEvent`](/docs/text.md#textlayoutevent)) => mixed |

***

### `pressRetentionOffset`[​](#pressretentionoffset "Direct link to pressretentionoffset")

When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button. Once deactivated, try moving it back and you'll see that the button is once again reactivated! Move it back and forth several times while the scroll view is disabled. Ensure you pass in a constant to reduce memory allocations.

| Type                          |
| ----------------------------- |
| [Rect](/docs/rect.md), number |

***

### `ref`[​](#ref "Direct link to ref")

A ref setter that will be assigned an [element node](/docs/element-nodes.md) when mounted.

Note that `Text` components don't provide text nodes, the same way that paragraph elements (`<p>`) on Web are element nodes instead of text nodes. Text nodes can be found as their child nodes instead.

***

### `role`[​](#role "Direct link to role")

`role` communicates the purpose of a component to the user of an assistive technology. Has precedence over the [`accessibilityRole`](/docs/text.md#accessibilityrole) prop.

| Type                                |
| ----------------------------------- |
| [Role](/docs/accessibility.md#role) |

***

### `selectable`[​](#selectable "Direct link to selectable")

Lets the user select text, to use the native copy and paste functionality.

| Type    | Default |
| ------- | ------- |
| boolean | `false` |

***

### `selectionColor`Android[​](#selectioncolor-android "Direct link to selectioncolor-android")

The highlight color of the text.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `style`[​](#style "Direct link to style")

| Type                                                                                   |
| -------------------------------------------------------------------------------------- |
| [Text Style](/docs/text-style-props.md), [View Style Props](/docs/view-style-props.md) |

***

### `suppressHighlighting`iOS[​](#suppresshighlighting-ios "Direct link to suppresshighlighting-ios")

When `true`, no visual change is made when text is pressed down. By default, a gray oval highlights the text on press down.

| Type    | Default |
| ------- | ------- |
| boolean | `false` |

***

### `testID`[​](#testid "Direct link to testid")

Used to locate this view in end-to-end tests.

| Type   |
| ------ |
| string |

***

### `textBreakStrategy`Android[​](#textbreakstrategy-android "Direct link to textbreakstrategy-android")

Set text break strategy on Android API Level 23+, possible values are `simple`, `highQuality`, `balanced`.

| Type                                            | Default       |
| ----------------------------------------------- | ------------- |
| enum(`'simple'`, `'highQuality'`, `'balanced'`) | `highQuality` |

***

### `lineBreakStrategyIOS`iOS[​](#linebreakstrategyios-ios "Direct link to linebreakstrategyios-ios")

Set line break strategy on iOS 14+. Possible values are `none`, `standard`, `hangul-word` and `push-out`.

| Type                                                        | Default  |
| ----------------------------------------------------------- | -------- |
| enum(`'none'`, `'standard'`, `'hangul-word'`, `'push-out'`) | `'none'` |

## Type Definitions[​](#type-definitions "Direct link to Type Definitions")

### TextLayout[​](#textlayout "Direct link to TextLayout")

`TextLayout` object is a part of [`TextLayoutEvent`](/docs/text.md#textlayoutevent) callback and contains the measurement data for `Text` line.

#### Example[​](#example "Direct link to Example")

js

```

{
capHeight: 10.496,
ascender: 14.624,
descender: 4,
width: 28.224,
height: 18.624,
xHeight: 6.048,
x: 0,
y: 0
}

```

#### Properties[​](#properties "Direct link to Properties")

| Name      | Type   | Optional | Description                                                         |
| --------- | ------ | -------- | ------------------------------------------------------------------- |
| ascender  | number | No       | The line ascender height after the text layout changes.             |
| capHeight | number | No       | Height of capital letter above the baseline.                        |
| descender | number | No       | The line descender height after the text layout changes.            |
| height    | number | No       | Height of the line after the text layout changes.                   |
| width     | number | No       | Width of the line after the text layout changes.                    |
| x         | number | No       | Line X coordinate inside the Text component.                        |
| xHeight   | number | No       | Distance between the baseline and median of the line (corpus size). |
| y         | number | No       | Line Y coordinate inside the Text component.                        |

### TextLayoutEvent[​](#textlayoutevent "Direct link to TextLayoutEvent")

`TextLayoutEvent` object is returned in the callback as a result of a component layout change. It contains a key called `lines` with a value which is an array containing [`TextLayout`](/docs/text.md#textlayout) object corresponded to every rendered text line.

#### Example[​](#example-1 "Direct link to Example")

js

```

{
lines: \[
TextLayout,
TextLayout,
// ...
];
target: 1127;
}

```

#### Properties[​](#properties-1 "Direct link to Properties")

| Name   | Type                                             | Optional | Description                                           |
| ------ | ------------------------------------------------ | -------- | ----------------------------------------------------- |
| lines  | array of [TextLayout](/docs/text.md#textlayout)s | No       | Provides the TextLayout data for every rendered line. |
| target | number                                           | No       | The node id of the element.                           |


---

# Text nodes

Text nodes represent raw text content on the tree (similar to [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text) nodes on Web). They are not directly accessible via `refs`, but can be accessed using methods like [`childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes) on element refs.

***

## Reference[​](#reference "Direct link to Reference")

### Web-compatible API[​](#web-compatible-api "Direct link to Web-compatible API")

From [`CharacterData`](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData):

* Properties

  <!-- -->

  * [`data`](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/data)
  * [`length`](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/length)
  * [`nextElementSibling`](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/nextElementSibling)
  * [`previousElementSibling`](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/previousElementSibling)

* Methods
  <!-- -->
  * [`substringData()`](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/substringData)

From [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node):

* Properties

  <!-- -->

  * [`childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes)
  * [`firstChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild)
  * [`isConnected`](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected)
  * [`lastChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild)
  * [`nextSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)
  * [`nodeName`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName)
  * [`nodeType`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
  * [`nodeValue`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue)
  * [`ownerDocument`](https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument)
    * ℹ️ Will return the [document instance](/docs/next/document-instances) where this component was rendered.
  * [`parentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
  * [`parentNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode)
  * [`previousSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling)
  * [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

* Methods

  <!-- -->

  * [`compareDocumentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition)
  * [`contains()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/contains)
  * [`getRootNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode)
    * ℹ️ Will return a reference to itself if the component is not mounted.
  * [`hasChildNodes()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes)


---

# Text Style Props

### Example[​](#example "Direct link to Example")

<!-- -->

* TypeScript
* JavaScript

# Reference

## Props[​](#props "Direct link to Props")

### `color`[​](#color "Direct link to color")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `fontFamily`[​](#fontfamily "Direct link to fontfamily")

| Type   |
| ------ |
| string |

The generic font families `system-ui`, `ui-sans-serif`, `ui-serif`, `ui-monospace`, and `ui-rounded` are supported on iOS.

***

### `fontSize`[​](#fontsize "Direct link to fontsize")

| Type   |
| ------ |
| number |

***

### `fontStyle`[​](#fontstyle "Direct link to fontstyle")

| Type                         |
| ---------------------------- |
| enum(`'normal'`, `'italic'`) |

***

### `fontWeight`[​](#fontweight "Direct link to fontweight")

Specifies font weight. The values `'normal'` and `'bold'` are supported for most fonts. Not all fonts have a variant for each of the numeric values, in that case the closest one is chosen.

| Type                                                                                                                  | Default    |
| --------------------------------------------------------------------------------------------------------------------- | ---------- |
| enum(`'normal'`, `'bold'`, `'100'`, `'200'`, `'300'`, `'400'`, `'500'`, `'600'`, `'700'`, `'800'`, `'900'`) or number | `'normal'` |

***

### `includeFontPadding`Android[​](#includefontpadding-android "Direct link to includefontpadding-android")

Set to `false` to remove extra font padding intended to make space for certain ascenders / descenders. With some fonts, this padding can make text look slightly misaligned when centered vertically. For best results also set `textAlignVertical` to `center`.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `fontVariant`[​](#fontvariant "Direct link to fontvariant")

Allows you to set all the font variants for a font. Can be set by using an array of enums or a space-separated string e.g. `'small-caps common-ligatures'`.

| Type                                                                                                                 | Default |
| -------------------------------------------------------------------------------------------------------------------- | ------- |
| array of enum(`'small-caps'`, `'oldstyle-nums'`, `'lining-nums'`, `'tabular-nums'`, `'proportional-nums'`) or string | `[]`    |

***

### `letterSpacing`[​](#letterspacing "Direct link to letterspacing")

Increase or decrease the spacing between characters. By default there is no extra letter spacing.

| Type   |
| ------ |
| number |

***

### `lineHeight`[​](#lineheight "Direct link to lineheight")

Numeric value that controls the vertical spacing between lines of text within a text element. It specifies the distance between the baselines of consecutive lines of text.

| Type   |
| ------ |
| number |

***

### `textAlign`[​](#textalign "Direct link to textalign")

Specifies text alignment. On Android, the value 'justify' is only supported on Oreo (8.0) or above (API level >= 26). The value will fallback to `left` on lower Android versions.

| Type                                                         | Default  |
| ------------------------------------------------------------ | -------- |
| enum(`'auto'`, `'left'`, `'right'`, `'center'`, `'justify'`) | `'auto'` |

***

### `textAlignVertical`Android[​](#textalignvertical-android "Direct link to textalignvertical-android")

| Type                                            | Default  |
| ----------------------------------------------- | -------- |
| enum(`'auto'`, `'top'`, `'bottom'`, `'center'`) | `'auto'` |

***

### `textDecorationColor`iOS[​](#textdecorationcolor-ios "Direct link to textdecorationcolor-ios")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `textDecorationLine`[​](#textdecorationline "Direct link to textdecorationline")

| Type                                                                        | Default  |
| --------------------------------------------------------------------------- | -------- |
| enum(`'none'`, `'underline'`, `'line-through'`, `'underline line-through'`) | `'none'` |

***

### `textDecorationStyle`iOS[​](#textdecorationstyle-ios "Direct link to textdecorationstyle-ios")

| Type                                                | Default   |
| --------------------------------------------------- | --------- |
| enum(`'solid'`, `'double'`, `'dotted'`, `'dashed'`) | `'solid'` |

***

### `textShadowColor`[​](#textshadowcolor "Direct link to textshadowcolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `textShadowOffset`[​](#textshadowoffset "Direct link to textshadowoffset")

| Type                                        |
| ------------------------------------------- |
| object: `{width?: number, height?: number}` |

***

### `textShadowRadius`[​](#textshadowradius "Direct link to textshadowradius")

| Type   |
| ------ |
| number |

***

### `textTransform`[​](#texttransform "Direct link to texttransform")

| Type                                                         | Default  |
| ------------------------------------------------------------ | -------- |
| enum(`'none'`, `'uppercase'`, `'lowercase'`, `'capitalize'`) | `'none'` |

***

### `verticalAlign`Android[​](#verticalalign-android "Direct link to verticalalign-android")

| Type                                            | Default  |
| ----------------------------------------------- | -------- |
| enum(`'auto'`, `'top'`, `'bottom'`, `'middle'`) | `'auto'` |

***

### `writingDirection`iOS[​](#writingdirection-ios "Direct link to writingdirection-ios")

| Type                             | Default  |
| -------------------------------- | -------- |
| enum(`'auto'`, `'ltr'`, `'rtl'`) | `'auto'` |

***

### `userSelect`[​](#userselect "Direct link to userselect")

It allows the user to select text and to use the native copy and paste functionality. Has precedence over the `selectable` prop.

| Type                                                     | Default |
| -------------------------------------------------------- | ------- |
| enum(`'auto'`, `'text'`, `'none'`, `'contain'`, `'all'`) | `none`  |


---

# TextInput

A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.

The most basic use case is to plop down a `TextInput` and subscribe to the `onChangeText` events to read the user input. There are also other events, such as `onSubmitEditing` and `onFocus` that can be subscribed to. A minimal example:

Two methods exposed via the native element are `.focus()` and `.blur()` that will focus or blur the TextInput programmatically.

Note that some props are only available with `multiline={true/false}`. Additionally, border styles that apply to only one side of the element (e.g., `borderBottomColor`, `borderLeftWidth`, etc.) will not be applied if `multiline=true`. To achieve the same effect, you can wrap your `TextInput` in a `View`:

`TextInput` has a border at the bottom of its view by default. This border has its padding set by the background image provided by the system, and it cannot be changed. Solutions to avoid this are to either not set height explicitly, in which case the system will take care of displaying the border in the correct position, or to not display the border by setting `underlineColorAndroid` to transparent.

Note that on Android performing text selection in an input can change the app's activity `windowSoftInputMode` param to `adjustResize`. This may cause issues with components that have position: 'absolute' while the keyboard is active. To avoid this behavior either specify `windowSoftInputMode` in AndroidManifest.xml ( <https://developer.android.com/guide/topics/manifest/activity-element.html> ) or control this param programmatically with native code.

***

# Reference

## Props[​](#props "Direct link to Props")

### [View Props](/docs/view.md#props)[​](#view-props "Direct link to view-props")

Inherits [View Props](/docs/view.md#props).

***

### `allowFontScaling`[​](#allowfontscaling "Direct link to allowfontscaling")

Specifies whether fonts should scale to respect Text Size accessibility settings. The default is `true`.

| Type |
| ---- |
| bool |

***

### `autoCapitalize`[​](#autocapitalize "Direct link to autocapitalize")

Tells `TextInput` to automatically capitalize certain characters. This property is not supported by some keyboard types such as `name-phone-pad`.

* `characters`: all characters.
* `words`: first letter of each word.
* `sentences`: first letter of each sentence (*default*).
* `none`: don't auto capitalize anything.

| Type                                             |
| ------------------------------------------------ |
| enum('none', 'sentences', 'words', 'characters') |

***

### `autoComplete`[​](#autocomplete "Direct link to autocomplete")

Specifies autocomplete hints for the system, so it can provide autofill. On Android, the system will always attempt to offer autofill by using heuristics to identify the type of content. To disable autocomplete, set `autoComplete` to `off`.

The following values work across platforms:

* `additional-name`
* `address-line1`
* `address-line2`
* `birthdate-day` (iOS 17+)
* `birthdate-full` (iOS 17+)
* `birthdate-month` (iOS 17+)
* `birthdate-year` (iOS 17+)
* `cc-csc` (iOS 17+)
* `cc-exp` (iOS 17+)
* `cc-exp-day` (iOS 17+)
* `cc-exp-month` (iOS 17+)
* `cc-exp-year` (iOS 17+)
* `cc-number`
* `country`
* `current-password`
* `email`
* `family-name`
* `given-name`
* `honorific-prefix`
* `honorific-suffix`
* `name`
* `new-password`
* `off`
* `one-time-code`
* `postal-code`
* `street-address`
* `tel`
* `username`

iOS

The following values work on iOS only:

* `cc-family-name` (iOS 17+)
* `cc-given-name` (iOS 17+)
* `cc-middle-name` (iOS 17+)
* `cc-name` (iOS 17+)
* `cc-type` (iOS 17+)
* `nickname`
* `organization`
* `organization-title`
* `url`

Android

The following values work on Android only:

* `gender`
* `name-family`
* `name-given`
* `name-middle`
* `name-middle-initial`
* `name-prefix`
* `name-suffix`
* `password`
* `password-new`
* `postal-address`
* `postal-address-country`
* `postal-address-extended`
* `postal-address-extended-postal-code`
* `postal-address-locality`
* `postal-address-region`
* `sms-otp`
* `tel-country-code`
* `tel-device`
* `tel-national`
* `username-new`

| Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enum('additional-name', 'address-line1', 'address-line2', 'birthdate-day', 'birthdate-full', 'birthdate-month', 'birthdate-year', 'cc-csc', 'cc-exp', 'cc-exp-day', 'cc-exp-month', 'cc-exp-year', 'cc-number', 'country', 'current-password', 'email', 'family-name', 'given-name', 'honorific-prefix', 'honorific-suffix', 'name', 'new-password', 'off', 'one-time-code', 'postal-code', 'street-address', 'tel', 'username', 'cc-family-name', 'cc-given-name', 'cc-middle-name', 'cc-name', 'cc-type', 'nickname', 'organization', 'organization-title', 'url', 'gender', 'name-family', 'name-given', 'name-middle', 'name-middle-initial', 'name-prefix', 'name-suffix', 'password', 'password-new', 'postal-address', 'postal-address-country', 'postal-address-extended', 'postal-address-extended-postal-code', 'postal-address-locality', 'postal-address-region', 'sms-otp', 'tel-country-code', 'tel-device', 'tel-national', 'username-new') |

***

### `autoCorrect`[​](#autocorrect "Direct link to autocorrect")

If `false`, disables auto-correct. The default value is `true`.

| Type |
| ---- |
| bool |

***

### `autoFocus`[​](#autofocus "Direct link to autofocus")

If `true`, focuses the input. The default value is `false`.

| Type |
| ---- |
| bool |

***

### 🗑️ `blurOnSubmit`[​](#️-bluronsubmit "Direct link to ️-bluronsubmit")

Deprecated

Note that `submitBehavior` now takes the place of `blurOnSubmit` and will override any behavior defined by `blurOnSubmit`. See [submitBehavior](/docs/textinput.md#submitbehavior).

If `true`, the text field will blur when submitted. The default value is true for single-line fields and false for multiline fields. Note that for multiline fields, setting `blurOnSubmit` to `true` means that pressing return will blur the field and trigger the `onSubmitEditing` event instead of inserting a newline into the field.

| Type |
| ---- |
| bool |

***

### `caretHidden`[​](#carethidden "Direct link to carethidden")

If `true`, caret is hidden. The default value is `false`.

| Type |
| ---- |
| bool |

***

### `clearButtonMode`iOS[​](#clearbuttonmode-ios "Direct link to clearbuttonmode-ios")

When the clear button should appear on the right side of the text view. This property is supported only for single-line TextInput component. The default value is `never`.

| Type                                                       |
| ---------------------------------------------------------- |
| enum('never', 'while-editing', 'unless-editing', 'always') |

***

### `clearTextOnFocus`iOS[​](#cleartextonfocus-ios "Direct link to cleartextonfocus-ios")

If `true`, clears the text field automatically when editing begins.

| Type |
| ---- |
| bool |

***

### `contextMenuHidden`[​](#contextmenuhidden "Direct link to contextmenuhidden")

If `true`, context menu is hidden. The default value is `false`.

| Type |
| ---- |
| bool |

***

### `dataDetectorTypes`iOS[​](#datadetectortypes-ios "Direct link to datadetectortypes-ios")

Determines the types of data converted to clickable URLs in the text input. Only valid if `multiline={true}` and `editable={false}`. By default no data types are detected.

You can provide one type or an array of many types.

Possible values for `dataDetectorTypes` are:

* `'phoneNumber'`
* `'link'`
* `'address'`
* `'calendarEvent'`
* `'none'`
* `'all'`

| Type                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enum('phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all'), ,array of enum('phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all') |

***

### `defaultValue`[​](#defaultvalue "Direct link to defaultvalue")

Provides an initial value that will change when the user starts typing. Useful for use-cases where you do not want to deal with listening to events and updating the value prop to keep the controlled state in sync.

| Type   |
| ------ |
| string |

***

### `disableKeyboardShortcuts`iOS[​](#disablekeyboardshortcuts-ios "Direct link to disablekeyboardshortcuts-ios")

If `true`, the keyboard shortcuts (undo/redo and copy buttons) are disabled.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `cursorColor`Android[​](#cursorcolor-android "Direct link to cursorcolor-android")

When provided it will set the color of the cursor (or "caret") in the component. Unlike the behavior of `selectionColor` the cursor color will be set independently from the color of the text selection box.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `disableFullscreenUI`Android[​](#disablefullscreenui-android "Direct link to disablefullscreenui-android")

When `false`, if there is a small amount of space available around a text input (e.g. landscape orientation on a phone), the OS may choose to have the user edit the text inside of a full screen text input mode. When `true`, this feature is disabled and users will always edit the text directly inside of the text input. Defaults to `false`.

| Type |
| ---- |
| bool |

***

### `editable`[​](#editable "Direct link to editable")

If `false`, text is not editable. The default value is `true`.

| Type |
| ---- |
| bool |

***

### `enablesReturnKeyAutomatically`iOS[​](#enablesreturnkeyautomatically-ios "Direct link to enablesreturnkeyautomatically-ios")

If `true`, the keyboard disables the return key when there is no text and automatically enables it when there is text. The default value is `false`.

| Type |
| ---- |
| bool |

***

### `enterKeyHint`[​](#enterkeyhint "Direct link to enterkeyhint")

Determines what text should be shown to the return key. Has precedence over the `returnKeyType` prop.

The following values work across platforms:

* `done`
* `next`
* `search`
* `send`
* `go`

*Android Only*

The following values work on Android only:

* `previous`

*iOS Only*

The following values work on iOS only:

* `enter`

| Type                                                              |
| ----------------------------------------------------------------- |
| enum('enter', 'done', 'next', 'previous', 'search', 'send', 'go') |

***

### `importantForAutofill`Android[​](#importantforautofill-android "Direct link to importantforautofill-android")

Tells the operating system whether the individual fields in your app should be included in a view structure for autofill purposes on Android API Level 26+. Possible values are `auto`, `no`, `noExcludeDescendants`, `yes`, and `yesExcludeDescendants`. The default value is `auto`.

* `auto`: Let the Android System use its heuristics to determine if the view is important for autofill.
* `no`: This view isn't important for autofill.
* `noExcludeDescendants`: This view and its children aren't important for autofill.
* `yes`: This view is important for autofill.
* `yesExcludeDescendants`: This view is important for autofill, but its children aren't important for autofill.

| Type                                                                       |
| -------------------------------------------------------------------------- |
| enum('auto', 'no', 'noExcludeDescendants', 'yes', 'yesExcludeDescendants') |

***

### `inlineImageLeft`Android[​](#inlineimageleft-android "Direct link to inlineimageleft-android")

If defined, the provided image resource will be rendered on the left. The image resource must be inside `/android/app/src/main/res/drawable` and referenced like

```

<TextInput
inlineImageLeft='search_icon'
/>

```

| Type   |
| ------ |
| string |

***

### `inlineImagePadding`Android[​](#inlineimagepadding-android "Direct link to inlineimagepadding-android")

Padding between the inline image, if any, and the text input itself.

| Type   |
| ------ |
| number |

***

### `inputAccessoryViewID`iOS[​](#inputaccessoryviewid-ios "Direct link to inputaccessoryviewid-ios")

An optional identifier which links a custom [InputAccessoryView](/docs/inputaccessoryview.md) to this text input. The InputAccessoryView is rendered above the keyboard when this text input is focused.

| Type   |
| ------ |
| string |

***

### `inputAccessoryViewButtonLabel`iOS[​](#inputaccessoryviewbuttonlabel-ios "Direct link to inputaccessoryviewbuttonlabel-ios")

An optional label that overrides the default [InputAccessoryView](/docs/inputaccessoryview.md) button label.

By default, the default button label is not localized. Use this property to provide a localized version.

| Type   |
| ------ |
| string |

***

### `inputMode`[​](#inputmode "Direct link to inputmode")

Works like the `inputmode` attribute in HTML, it determines which keyboard to open, e.g. `numeric` and has precedence over `keyboardType`.

Support the following values:

* `none`
* `text`
* `decimal`
* `numeric`
* `tel`
* `search`
* `email`
* `url`

| Type                                                                        |
| --------------------------------------------------------------------------- |
| enum('decimal', 'email', 'none', 'numeric', 'search', 'tel', 'text', 'url') |

***

### `keyboardAppearance`iOS[​](#keyboardappearance-ios "Direct link to keyboardappearance-ios")

Determines the color of the keyboard.

| Type                             |
| -------------------------------- |
| enum('default', 'light', 'dark') |

***

### `keyboardType`[​](#keyboardtype "Direct link to keyboardtype")

Determines which keyboard to open, e.g.`numeric`.

See screenshots of all the types [here](https://davidl.fr/blog/keyboard-react-native-ios-android#all-react-native-keyboard-type-examples-i-os-on-the-left-android-on-the-right).

The following values work across platforms:

* `default`
* `number-pad`
* `decimal-pad`
* `numeric`
* `email-address`
* `phone-pad`
* `url`

*iOS Only*

The following values work on iOS only:

* `ascii-capable`
* `numbers-and-punctuation`
* `name-phone-pad`
* `twitter`
* `web-search`

*Android Only*

The following values work on Android only:

* `visible-password`

| Type                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enum('default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search', 'visible-password') |

***

### `lineBreakStrategyIOS`iOS[​](#linebreakstrategyios-ios "Direct link to linebreakstrategyios-ios")

Set line break strategy on iOS 14+. Possible values are `none`, `standard`, `hangul-word` and `push-out`.

| Type                                                        | Default  |
| ----------------------------------------------------------- | -------- |
| enum(`'none'`, `'standard'`, `'hangul-word'`, `'push-out'`) | `'none'` |

***

### `lineBreakModeIOS`iOS[​](#linebreakmodeios-ios "Direct link to linebreakmodeios-ios")

Set line break mode on iOS. Possible values are `wordWrapping`, `char`, `clip`, `head`, `middle` and `tail`.

| Type                                                                       | Default          |
| -------------------------------------------------------------------------- | ---------------- |
| enum(`'wordWrapping'`, `'char'`, `'clip'`, `'head'`, `'middle'`, `'tail'`) | `'wordWrapping'` |

***

### `maxFontSizeMultiplier`[​](#maxfontsizemultiplier "Direct link to maxfontsizemultiplier")

Specifies largest possible scale a font can reach when `allowFontScaling` is enabled. Possible values:

* `null/undefined` (default): inherit from the parent node or the global default (0)
* `0`: no max, ignore parent/global default
* `>= 1`: sets the `maxFontSizeMultiplier` of this node to this value

| Type   |
| ------ |
| number |

***

### `maxLength`[​](#maxlength "Direct link to maxlength")

Limits the maximum number of characters that can be entered. Use this instead of implementing the logic in JS to avoid flicker.

| Type   |
| ------ |
| number |

***

### `multiline`[​](#multiline "Direct link to multiline")

If `true`, the text input can be multiple lines. The default value is `false`.

note

It is important to note that this aligns the text to the top on iOS, and centers it on Android. Use with `textAlignVertical` set to `top` for the same behavior in both platforms.

| Type |
| ---- |
| bool |

***

### `numberOfLines`[​](#numberoflines "Direct link to numberoflines")

note

`numberOfLines` on iOS is only available on the [New Architecture](/architecture/landing-page.md)

Sets the maximum number of lines for a `TextInput`. Use it with multiline set to `true` to be able to fill the lines.

| Type   |
| ------ |
| number |

***

### `onBlur`[​](#onblur "Direct link to onblur")

Callback that is called when the text input is blurred.

note

If you are attempting to access the `text` value from `nativeEvent` keep in mind that the resulting value you get can be `undefined` which can cause unintended errors. If you are trying to find the last value of TextInput, you can use the [`onEndEditing`](/docs/textinput.md#onendediting) event, which is fired upon completion of editing.

| Type                                   |
| -------------------------------------- |
| `({nativeEvent: TargetEvent}) => void` |

***

### `onChange`[​](#onchange "Direct link to onchange")

Callback that is called when the text input's text changes.

| Type                                                  |
| ----------------------------------------------------- |
| (`{nativeEvent: {eventCount, target, text}}`) => void |

***

### `onChangeText`[​](#onchangetext "Direct link to onchangetext")

Callback that is called when the text input's text changes. Changed text is passed as a single string argument to the callback handler.

| Type     |
| -------- |
| function |

***

### `onContentSizeChange`[​](#oncontentsizechange "Direct link to oncontentsizechange")

Callback that is called when the text input's content size changes.

Only called for multiline text inputs.

| Type                                                       |
| ---------------------------------------------------------- |
| (`{nativeEvent: {contentSize: {width, height} }}`) => void |

***

### `onEndEditing`[​](#onendediting "Direct link to onendediting")

Callback that is called when text input ends.

| Type     |
| -------- |
| function |

***

### `onPressIn`[​](#onpressin "Direct link to onpressin")

Callback that is called when a touch is engaged.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

***

### `onPressOut`[​](#onpressout "Direct link to onpressout")

Callback that is called when a touch is released.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

***

### `onFocus`[​](#onfocus "Direct link to onfocus")

Callback that is called when the text input is focused.

| Type                                   |
| -------------------------------------- |
| `({nativeEvent: TargetEvent}) => void` |

***

### `onKeyPress`[​](#onkeypress "Direct link to onkeypress")

Callback that is called when a key is pressed. This will be called with object where `keyValue` is `'Enter'` or `'Backspace'` for respective keys and the typed-in character otherwise including `' '` for space. Fires before `onChange` callbacks. Note: on Android only the inputs from soft keyboard are handled, not the hardware keyboard inputs.

| Type                                        |
| ------------------------------------------- |
| (`{nativeEvent: {key: keyValue} }`) => void |

***

### `onLayout`[​](#onlayout "Direct link to onlayout")

Invoked on mount and on layout changes.

| Type                                   |
| -------------------------------------- |
| `({nativeEvent: LayoutEvent}) => void` |

***

### `onScroll`[​](#onscroll "Direct link to onscroll")

Invoked on content scroll. May also contain other properties from `ScrollEvent` but on Android `contentSize` is not provided for performance reasons.

| Type                                                |
| --------------------------------------------------- |
| (`{nativeEvent: {contentOffset: {x, y} }}`) => void |

***

### `onSelectionChange`[​](#onselectionchange "Direct link to onselectionchange")

Callback that is called when the text input selection is changed.

| Type                                                  |
| ----------------------------------------------------- |
| (`{nativeEvent: {selection: {start, end} }}`) => void |

***

### `onSubmitEditing`[​](#onsubmitediting "Direct link to onsubmitediting")

Callback that is called when the text input's submit button is pressed.

| Type                                                  |
| ----------------------------------------------------- |
| (`{nativeEvent: {text, eventCount, target}}`) => void |

Note that on iOS this method isn't called when using `keyboardType="phone-pad"`.

***

### `placeholder`[​](#placeholder "Direct link to placeholder")

The string that will be rendered before text input has been entered.

| Type   |
| ------ |
| string |

***

### `placeholderTextColor`[​](#placeholdertextcolor "Direct link to placeholdertextcolor")

The text color of the placeholder string.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `readOnly`[​](#readonly "Direct link to readonly")

If `true`, text is not editable. The default value is `false`.

| Type |
| ---- |
| bool |

***

### `returnKeyLabel`Android[​](#returnkeylabel-android "Direct link to returnkeylabel-android")

Sets the return key to the label. Use it instead of `returnKeyType`.

| Type   |
| ------ |
| string |

***

### `returnKeyType`[​](#returnkeytype "Direct link to returnkeytype")

Determines how the return key should look. On Android you can also use `returnKeyLabel`.

*Cross platform*

The following values work across platforms:

* `done`
* `go`
* `next`
* `search`
* `send`

*Android Only*

The following values work on Android only:

* `none`
* `previous`

*iOS Only*

The following values work on iOS only:

* `default`
* `emergency-call`
* `google`
* `join`
* `route`
* `yahoo`

| Type                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------- |
| enum('done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo') |

### `rejectResponderTermination`iOS[​](#rejectrespondertermination-ios "Direct link to rejectrespondertermination-ios")

If `true`, allows TextInput to pass touch events to the parent component. This allows components such as SwipeableListView to be swipeable from the TextInput on iOS, as is the case on Android by default. If `false`, TextInput always asks to handle the input (except when disabled). The default value is `true`.

| Type |
| ---- |
| bool |

***

### `rows`Android[​](#rows-android "Direct link to rows-android")

Sets the number of lines for a `TextInput`. Use it with multiline set to `true` to be able to fill the lines.

| Type   |
| ------ |
| number |

***

### `scrollEnabled`iOS[​](#scrollenabled-ios "Direct link to scrollenabled-ios")

If `false`, scrolling of the text view will be disabled. The default value is `true`. Only works with `multiline={true}`.

| Type |
| ---- |
| bool |

***

### `secureTextEntry`[​](#securetextentry "Direct link to securetextentry")

If `true`, the text input obscures the text entered so that sensitive text like passwords stay secure. The default value is `false`. Does not work with `multiline={true}`.

| Type |
| ---- |
| bool |

***

### `selection`[​](#selection "Direct link to selection")

The start and end of the text input's selection. Set start and end to the same value to position the cursor.

| Type                                  |
| ------------------------------------- |
| object: `{start: number,end: number}` |

***

### `selectionColor`[​](#selectioncolor "Direct link to selectioncolor")

The highlight, selection handle and cursor color of the text input.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `selectionHandleColor`Android[​](#selectionhandlecolor-android "Direct link to selectionhandlecolor-android")

Sets the color of the selection handle. Unlike `selectionColor`, it allows the selection handle color to be customized independently of the selection's color.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `selectTextOnFocus`[​](#selecttextonfocus "Direct link to selecttextonfocus")

If `true`, all text will automatically be selected on focus.

| Type |
| ---- |
| bool |

***

### `showSoftInputOnFocus`[​](#showsoftinputonfocus "Direct link to showsoftinputonfocus")

When `false`, it will prevent the soft keyboard from showing when the field is focused. The default value is `true`.

| Type |
| ---- |
| bool |

***

### `smartInsertDelete`iOS[​](#smartinsertdelete-ios "Direct link to smartinsertdelete-ios")

If `false`, the iOS system will not insert an extra space after a paste operation neither delete one or two spaces after a cut or delete operation.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `spellCheck`iOS[​](#spellcheck-ios "Direct link to spellcheck-ios")

If `false`, disables spell-check style (i.e. red underlines). The default value is inherited from `autoCorrect`.

| Type |
| ---- |
| bool |

***

### `submitBehavior`[​](#submitbehavior "Direct link to submitbehavior")

When the return key is pressed,

For single line inputs:

* `'newline'` defaults to `'blurAndSubmit'`
* `undefined` defaults to `'blurAndSubmit'`

For multiline inputs:

* `'newline'` adds a newline
* `undefined` defaults to `'newline'`

For both single line and multiline inputs:

* `'submit'` will only send a submit event and not blur the input
* `'blurAndSubmit`' will both blur the input and send a submit event

| Type                                       |
| ------------------------------------------ |
| enum('submit', 'blurAndSubmit', 'newline') |

***

### `textAlign`[​](#textalign "Direct link to textalign")

Align the input text to the left, center, or right sides of the input field.

Possible values for `textAlign` are:

* `left`
* `center`
* `right`

| Type                            |
| ------------------------------- |
| enum('left', 'center', 'right') |

***

### `textContentType`iOS[​](#textcontenttype-ios "Direct link to textcontenttype-ios")

Give the keyboard and the system information about the expected semantic meaning for the content that users enter.

note

[`autoComplete`](#autocomplete), provides the same functionality and is available for all platforms. You can use [`Platform.select`](/docs/next/platform#select) for differing platform behaviors.

Avoid using both `textContentType` and `autoComplete`. For backwards compatibility, `textContentType` takes precedence when both properties are set.

You can set `textContentType` to `username` or `password` to enable autofill of login details from the device keychain.

`newPassword` can be used to indicate a new password input the user may want to save in the keychain, and `oneTimeCode` can be used to indicate that a field can be autofilled by a code arriving in an SMS.

To disable autofill, set `textContentType` to `none`.

Possible values for `textContentType` are:

* `none`
* `addressCity`
* `addressCityAndState`
* `addressState`
* `birthdate` (iOS 17+)
* `birthdateDay` (iOS 17+)
* `birthdateMonth` (iOS 17+)
* `birthdateYear` (iOS 17+)
* `countryName`
* `creditCardExpiration` (iOS 17+)
* `creditCardExpirationMonth` (iOS 17+)
* `creditCardExpirationYear` (iOS 17+)
* `creditCardFamilyName` (iOS 17+)
* `creditCardGivenName` (iOS 17+)
* `creditCardMiddleName` (iOS 17+)
* `creditCardName` (iOS 17+)
* `creditCardNumber`
* `creditCardSecurityCode` (iOS 17+)
* `creditCardType` (iOS 17+)
* `emailAddress`
* `familyName`
* `fullStreetAddress`
* `givenName`
* `jobTitle`
* `location`
* `middleName`
* `name`
* `namePrefix`
* `nameSuffix`
* `newPassword`
* `nickname`
* `oneTimeCode`
* `organizationName`
* `password`
* `postalCode`
* `streetAddressLine1`
* `streetAddressLine2`
* `sublocality`
* `telephoneNumber`
* `URL`
* `username`

| Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| enum('none', 'addressCity', 'addressCityAndState', 'addressState', 'birthdate', 'birthdateDay', 'birthdateMonth', 'birthdateYear', 'countryName', 'creditCardExpiration', 'creditCardExpirationMonth', 'creditCardExpirationYear', 'creditCardFamilyName', 'creditCardGivenName', 'creditCardMiddleName', 'creditCardName', 'creditCardNumber', 'creditCardSecurityCode', 'creditCardType', 'emailAddress', 'familyName', 'fullStreetAddress', 'givenName', 'jobTitle', 'location', 'middleName', 'name', 'namePrefix', 'nameSuffix', 'newPassword', 'nickname', 'oneTimeCode', 'organizationName', 'password', 'postalCode', 'streetAddressLine1', 'streetAddressLine2', 'sublocality', 'telephoneNumber', 'URL', 'username') |

***

### `passwordRules`iOS[​](#passwordrules-ios "Direct link to passwordrules-ios")

When using `textContentType` as `newPassword` on iOS we can let the OS know the minimum requirements of the password so that it can generate one that will satisfy them. In order to create a valid string for `PasswordRules` take a look to the [Apple Docs](https://developer.apple.com/password-rules/).

tip

If passwords generation dialog doesn't appear please make sure that:

* AutoFill is enabled: **Settings** → **Passwords & Accounts** → toggle "On" the **AutoFill Passwords**,
* iCloud Keychain is used: **Settings** → **Apple ID** → **iCloud** → **Keychain** → toggle "On" the **iCloud Keychain**.

| Type   |
| ------ |
| string |

***

### `style`[​](#style "Direct link to style")

Note that not all Text styles are supported, an incomplete list of what is not supported includes:

* `borderLeftWidth`
* `borderTopWidth`
* `borderRightWidth`
* `borderBottomWidth`
* `borderTopLeftRadius`
* `borderTopRightRadius`
* `borderBottomRightRadius`
* `borderBottomLeftRadius`

[Styles](/docs/style.md)

| Type                        |
| --------------------------- |
| [Text](/docs/text.md#style) |

***

### `textBreakStrategy`Android[​](#textbreakstrategy-android "Direct link to textbreakstrategy-android")

Set text break strategy on Android API Level 23+, possible values are `simple`, `highQuality`, `balanced` The default value is `highQuality`.

| Type                                      |
| ----------------------------------------- |
| enum('simple', 'highQuality', 'balanced') |

***

### `underlineColorAndroid`Android[​](#underlinecolorandroid-android "Direct link to underlinecolorandroid-android")

The color of the `TextInput` underline.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `value`[​](#value "Direct link to value")

The value to show for the text input. `TextInput` is a controlled component, which means the native value will be forced to match this value prop if provided. For most uses, this works great, but in some cases this may cause flickering - one common cause is preventing edits by keeping value the same. In addition to setting the same value, either set `editable={false}`, or set/update `maxLength` to prevent unwanted edits without flicker.

| Type   |
| ------ |
| string |

## Methods[​](#methods "Direct link to Methods")

### `.focus()`[​](#focus "Direct link to focus")

tsx

```

focus();

```

Makes the native input request focus.

### `.blur()`[​](#blur "Direct link to blur")

tsx

```

blur();

```

Makes the native input lose focus.

### `clear()`[​](#clear "Direct link to clear")

tsx

```

clear();

```

Removes all text from the `TextInput`.

***

### `isFocused()`[​](#isfocused "Direct link to isfocused")

tsx

```

isFocused(): boolean;

```

Returns `true` if the input is currently focused; `false` otherwise.

# Known issues

* [react-native#19096](https://github.com/facebook/react-native/issues/19096): Doesn't support Android's `onKeyPreIme`.
* [react-native#19366](https://github.com/facebook/react-native/issues/19366): Calling .focus() after closing Android's keyboard via back button doesn't bring keyboard up again.
* [react-native#26799](https://github.com/facebook/react-native/issues/26799): Doesn't support Android's `secureTextEntry` when `keyboardType="email-address"` or `keyboardType="phone-pad"`.


---

# Advanced Topics on Native Modules Development

This document contains a set of advanced topics to implement more complex functionalities of Native Components. It is recommended to first read the [Codegen](/docs/the-new-architecture/what-is-codegen.md) section and the guides on [Native Components](/docs/fabric-native-components-introduction.md).

This guide will cover the following topics:

* [Direct Manipulation](/docs/the-new-architecture/direct-manipulation-new-architecture.md)
* [Measuring the Layout](/docs/the-new-architecture/layout-measurements.md)
* [Invoking native functions on your native component](/docs/next/the-new-architecture/fabric-component-native-commands)


---

# Advanced Topics on Native Modules Development

This document contains a set of advanced topics to implement more complex functionalities of Native Modules. It is recommended to first read the [Codegen](/docs/the-new-architecture/what-is-codegen.md) section and the guides on [Native Modules](/docs/turbo-native-modules-introduction.md).

This guide will cover the following topics:

* [Add custom C++ types to your C++ modules](/docs/the-new-architecture/custom-cxx-types.md)
* [Use Swift in your Module](/docs/next/the-new-architecture/turbo-modules-with-swift)
* [Emit custom events from your Native Modules](/docs/next/the-new-architecture/native-modules-custom-events)
* [Native Modules Lifecycle](/docs/next/the-new-architecture/native-modules-lifecycle)


---

# The Codegen CLI

Calling Gradle or manually calling a script might be hard to remember and it requires a lot of ceremony.

To simplify it, we created a CLI tool that can help you running those tasks: the **Codegen** cli. This command runs [@react-native/codegen](https://www.npmjs.com/package/@react-native/codegen) for your project. The following options are available:

sh

```

npx @react-native-community/cli codegen --help
Usage: rnc-cli codegen \[options]

Options:
\--verbose            Increase logging verbosity
\--path         Path to the React Native project root. (default: "/Users/MyUsername/projects/my-app")
\--platform   Target platform. Supported values: "android", "ios", "all". (default: "all")
\--outputPath   Path where generated artifacts will be output to.
-h, --help           display help for command

```

## Examples[​](#examples "Direct link to Examples")

* Read `package.json` from the current working directory, generate code based on its codegenConfig.

shell

```

npx @react-native-community/cli codegen

```

* Read `package.json` from the current working directory, generate iOS code in the location defined in the codegenConfig.

shell

```

npx @react-native-community/cli codegen --platform ios

```

* Read `package.json` from `third-party/some-library`, generate Android code in `third-party/some-library/android/generated`.

shell

```

npx @react-native-community/cli codegen \
\--path third-party/some-library \
\--platform android \
\--outputPath third-party/some-library/android/generated

```

## Including Generated Code into Libraries[​](#including-generated-code-into-libraries "Direct link to Including Generated Code into Libraries")

The Codegen CLI is a great tool for library developers. It can be used to take a sneak-peek at the generated code to see which interfaces you need to implement.

Normally the generated code is not included in the library, and the app that uses the library is responsible for running the Codegen at build time. This is a good setup for most cases, but Codegen also offers a mechanism to include the generated code in the library itself via the `includesGeneratedCode` property.

It's important to understand what are the implications of using `includesGeneratedCode = true`. Including the generated code comes with several benefits such as:

* No need to rely on the app to run **Codegen** for you, the generated code is always there.
* The implementation files are always consistent with the generated interfaces (this makes your library code more resilient against API changes in codegen).
* No need to include two sets of files to support both architectures on Android. You can only keep the New Architecture one, and it is guaranteed to be backwards compatible.
* Since all native code is there, it is possible to ship the native part of the library as a prebuild.

On the other hand, you also need to be aware of one drawback:

* The generated code will use the React Native version defined inside your library. So if your library is shipping with React Native 0.76, the generated code will be based on that version. This could mean that the generated code is not compatible with apps using **previous** React Native version used by the app (e.g. an App running on React Native 0.75).

## Enabling `includesGeneratedCode`[​](#enabling-includesgeneratedcode "Direct link to enabling-includesgeneratedcode")

To enable this setup:

* Add the `includesGeneratedCode` property into your library's `codegenConfig` field in the `package.json` file. Set its value to `true`.
* Run **Codegen** locally with the codegen CLI.
* Update your `package.json` to include the generated code.
* Update your `podspec` to include the generated code.
* Update your `build.Gradle` file to include the generated code.
* Update `cmakeListsPath` in `react-native.config.js` so that Gradle doesn't look for CMakeLists file in the build directory but instead in your outputDir.


---

# Create a Library for Your Module

React Native has a rich ecosystem of libraries to solve common problems. We collect React Native libraries in the [reactnative.directory](https://reactnative.directory) website, and this is a great resource to bookmark for every React Native developer.

Sometimes, you might be working on a module that is worth extracting in a separate library for code reuse. This can be a library that you want to reuse in all your apps, a library that you want to distribute to the ecosystem as an open source component, or even a library you'd like to sell.

In this guide, you'll learn:

* how to extract a module into a library
* how to distribute the library using NPM

## Extract the Module into a Library[​](#extract-the-module-into-a-library "Direct link to Extract the Module into a Library")

You can use the [`create-react-native-library`](https://callstack.github.io/react-native-builder-bob/create) tool to create a new library. This tool sets up a new library with all the boilerplate code that is needed: all the configuration files and all files required by the various platforms. It also comes with a nice interactive menu to guide you through the creation of the library.

To extract a module into a separate library, you can follow these steps:

1. Create the new library
2. Move the code from the App to the Library
3. Update the code to reflect the new structure
4. Publish it.

### 1. Create a Library[​](#1-create-a-library "Direct link to 1. Create a Library")

1. Start the creation process by running the command:

sh

```

npx create-react-native-library@latest

```

2. Add a name for your module. It must be a valid npm name, so it should be all lowercase. You can use `-` to separate words.
3. Add a description for the package.
4. Continue filling the form until you reach the question *"What type of library do you want to develop?"* ![What type of Library](/assets/images/what-library-82a9a474327fd86f807a7eedf6cd29fc.png)
5. For the sake of this guide, select the *Turbo module* option. Notice that you can create libraries for both New Architecture and Legacy Architecture.
6. Then, you can choose whether you want a library that access the platform (Kotlin & Objective-C) or a shared C++ library (C++ for Android and iOS).
7. Finally, select the `Test App` as last option. This option creates the library with a separate app already configured within the library folder.

Once the interactive prompt is done, the tool creates a folder whose structure looks like this in Visual Studio Code:

![Folder structure after initializing a new library.](/docs/assets/turbo-native-modules/c++visualstudiocode.webp)

Feel free to explore the code that has been created for you. However, the most important parts:

* The `android` folder: this is where the Android code lives
* The `cpp` folder: this is where the c++ code lives
* The `ios` folder: this is where the iOS code lives
* The `src` folder: this is where the JS code lives.

The `package.json` is already configured with all the information that we provided to the `create-react-native-library` tool, including the name and the description of the package. Notice that the `package.json` is also already configured to run Codegen.

json

```

"codegenConfig": {
"name": "RNSpec",
"type": "all",
"jsSrcsDir": "src",
"outputDir": {
"ios": "ios/generated",
"android": "android/generated"
},
"android": {
"javaPackageName": "com.<name-of-the-module>"
}
},

```

Finally, the library contains already all the infrastructure to let the library be linked with iOS and Android.

### 2. Copy the Code over from Your App[​](#2-copy-the-code-over-from-your-app "Direct link to 2. Copy the Code over from Your App")

The rest of the guide assumes that you have a local Turbo Native Module in your app, created following the guidelines shown in the other guides in the website: platform specific Turbo Native Modules, or [cross-platform Turbo Native Modules](/docs/the-new-architecture/pure-cxx-modules.md). But it works also for Components and legacy architecture modules and components. You'll have to adapt the files you need to copy and update.

1. **\[Not required for legacy architecture modules and components]** Move the code you have in the `specs` folder in your app into the `src` folder created by the `create-react-native-library` folder.
2. Update the `index.ts` file to properly export the Turbo Native Module spec so that it is accessible from the library. For example:

ts

```

import NativeSampleModule from './NativeSampleModule';

export default NativeSampleModule;

```

3. Copy the native module over:

   * Replace the code in the `android/src/main/java/com/<name-of-the-module>` with the code you wrote in the app for your native module, if any.
   * Replace the code in the `ios` folder with the code you wrote in your app for your native module, if any.
   * Replace the code in the `cpp` folder with the code you wrote in your app for your native module, if any.

4. **\[Not required for legacy architecture modules and components]** Update all the references from the previous spec name to the new spec name, the one that is defined in the `codegenConfig` field of the library's `package.json`. For example, if in the app `package.json` you set `AppSpecs` as `codegenConfig.name` and in the library it is called `RNNativeSampleModuleSpec`, you have to replace every occurrence of `AppSpecs` with `RNNativeSampleModuleSpec`.

That's it! You have moved all the required code out of your app and in a separate library.

## Testing your Library[​](#testing-your-library "Direct link to Testing your Library")

The `create-react-native-library` comes with a useful example application that is already configured to work properly with the library. This is a great way to test it!

If you look at the `example` folder, you can find the same structure of a new React Native application that you can create from the [`react-native-community/template`](https://github.com/react-native-community/template).

To test your library:

1. Navigate to the `example` folder.
2. Run `yarn install` to install all the dependencies.
3. For iOS only, you need to install CocoaPods: `cd ios && pod install`.
4. Build and run Android with `yarn android` from the `example` folder.
5. Build and run iOS with `yarn ios` from the `example` folder.

## Use your library as a Local Module[​](#use-your-library-as-a-local-module "Direct link to Use your library as a Local Module")

There are some scenario where you might want to reuse your library as a local module for your applications, without publishing it to NPM.

In this case, you might end up in a scenario where you have your library sitting as a sibling of your apps.

shell

```

Development
├── App
└── Library

```

You can use the library created with `create-react-native-library` also in this case.

1. add you library to your app by navigating into the `App` folder and running `yarn add ../Library`.
2. For iOS only, navigate in the `App/ios` folder and run `bundle exec pod install` to install your dependencies.
3. Update the `App.tsx` code to import the code in your library. For example:

tsx

```

import NativeSampleModule from '../Library/src/index';

```

If you run your app right now, Metro would not find the JS files that it needs to serve to the app. That's because metro will be running starting from the `App` folder and it would not have access to the JS files located in the `Library` folder. To fix this, let's update the `metro.config.js` file as it follows

diff

```

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/\*\*

- Metro configuration
- https://reactnative.dev/docs/metro
-
- @type {import('metro-config').MetroConfig}
  \*/

* const path = require('path');

- const config = {}

* const config = {
* // Make Metro able to resolve required external dependencies
* watchFolders: \[
* path.resolve(\_\_dirname, '../Library'),
* ],
* resolver: {
* extraNodeModules: {
* ```
   'react-native': path.resolve(__dirname, 'node_modules/react-native'),
  ```
* },
* },
  +};

module.exports = mergeConfig(getDefaultConfig(\_\_dirname), config);

```

The `watchFolders` configs tells Metro to watch for files and changes in some additional paths, in this case to the `../Library` path, which contains the `src/index` file you need. The `resolver`property is required to feed to the library the React Native code used by the app. The library might refer and import code from React Native: without the additional resolver, the imports in the library will fail.

At this point, you can build and run your app as usual:

* Build and run Android with `yarn android` from the `example` folder.
* Build and run iOS with `yarn ios` from the `example` folder.

## Publish the Library on NPM[​](#publish-the-library-on-npm "Direct link to Publish the Library on NPM")

The setup to publish everything on NPM is already in place, thanks to `create-react-native-library`.

1. Install the dependencies in your module `yarn install`.
2. Build the library running `yarn prepare`.
3. Release it with `yarn release`.

After a while, you'll find your library on NPM. To verify that, run:

bash

```

npm view \<package.name>

```

where `package.name` is the `name` you set up in the `package.json` file during the initialization of the library.

Now, you can install the library in your application by running:

bash

```

yarn add \<package.name>

```

note

For iOS only, whenever you install a new module with some native code, you have to reinstall CocoaPods, by running `bundle exec pod install` (recommended) or `pod install` if you are not using Ruby's Bundler (not recommended).

Congratulations! You published your first React Native library.


---

# Advanced: Custom C++ Types

note

This guide assumes that you are familiar with the [**Pure C++ Turbo Native Modules**](/docs/the-new-architecture/pure-cxx-modules.md) guide. This will build on top of that guide.

C++ Turbo Native Modules support [bridging functionality](https://github.com/facebook/react-native/tree/main/packages/react-native/ReactCommon/react/bridging) for most `std::` standard types. You can use most of those types in your modules without any additional code required.

If you want to add support for new and custom types in your app or library, you need to provide the necessary `bridging` header file.

## Adding a New Custom: Int64[​](#adding-a-new-custom-int64 "Direct link to Adding a New Custom: Int64")

C++ Turbo Native Modules don't support `int64_t` numbers yet - because JavaScript doesn't support numbers greater 2^53. To represent numbers greater than 2^53, we can use a `string` type in JS and automatically convert it to `int64_t` in C++.

### 1. Create the Bridging Header file[​](#1-create-the-bridging-header-file "Direct link to 1. Create the Bridging Header file")

The first step to support a new custom type is to define the bridging header that takes care of converting the type **from** the JS representation to the C++ representation, and from the C++ representation **to** the JS one.

1. In the `shared` folder, add a new file called `Int64.h`
2. Add the following code to that file:

Int64.h

```

\#pragma once

\#include \<react/bridging/Bridging.h>

namespace facebook::react {

template <>
struct Bridging\<int64\_t> {
// Converts from the JS representation to the C++ representation
static int64\_t fromJs(jsi::Runtime \&rt, const jsi::String \&value) {
try {
size\_t pos;
auto str = value.utf8(rt);
auto num = std::stoll(str, \&pos);
if (pos != str.size()) {
throw std::invalid\_argument("Invalid number"); // don't support alphanumeric strings
}
return num;
} catch (const std::logic\_error \&e) {
throw jsi::JSError(rt, e.what());
}
}

// Converts from the C++ representation to the JS representation
static jsi::String toJs(jsi::Runtime \&rt, int64\_t value) {
return bridging::toJs(rt, std::to\_string(value));
}
};

}

```

The key components for your custom bridging header are:

* Explicit specialization of the `Bridging` struct for your custom type. In this case, the template specify the `int64_t` type.
* A `fromJs` function to convert from the JS representation to the C++ representation
* A `toJs` function to convert from the C++ representation to the JS representation

note

On iOS, remember to add the `Int64.h` file to the Xcode project.

### 2. Modify the JS Spec[​](#2-modify-the-js-spec "Direct link to 2. Modify the JS Spec")

Now, we can modify the JS spec to add a method that uses the new type. As usual, we can use either Flow or TypeScript for our specs.

1. Open the `specs/NativeSampleTurbomodule`
2. Modify the spec as follows:

* TypeScript
* Flow

NativeSampleModule.ts

```

import {TurboModule, TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
readonly reverseString: (input: string) => string;

- readonly cubicRoot: (input: string) => number;
  }

export default TurboModuleRegistry.getEnforcing(
'NativeSampleModule',
);

```

NativeSampleModule.js

```

// @flow
import type {TurboModule} from 'react-native';
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
+reverseString: (input: string) => string;

- +cubicRoot: (input: string) => number;
  }

export default (TurboModuleRegistry.getEnforcing(
"NativeSampleModule"
): Spec);

```

In this files, we are defining the function that needs to be implemented in C++.

### 3. Implement the Native Code[​](#3-implement-the-native-code "Direct link to 3. Implement the Native Code")

Now, we need to implement the function that we declared in the JS specification.

1. Open the `specs/NativeSampleModule.h` file and apply the following changes:

NativeSampleModule.h

```

\#pragma once

\#include \<AppSpecsJSI.h>
\#include
\#include

- \#include "Int64.h"

namespace facebook::react {

class NativeSampleModule : public NativeSampleModuleCxxSpec {
public:
NativeSampleModule(std::shared\_ptr jsInvoker);

std::string reverseString(jsi::Runtime& rt, std::string input);

- int32\_t cubicRoot(jsi::Runtime& rt, int64\_t input);
  };

} // namespace facebook::react

```

2. Open the `specs/NativeSampleModule.cpp` file and apply the implement the new function:

NativeSampleModule.cpp

```

\#include "NativeSampleModule.h"

- \#include

namespace facebook::react {

NativeSampleModule::NativeSampleModule(std::shared\_ptr jsInvoker)
: NativeSampleModuleCxxSpec(std::move(jsInvoker)) {}

std::string NativeSampleModule::reverseString(jsi::Runtime& rt, std::string input) {
return std::string(input.rbegin(), input.rend());
}

+int32\_t NativeSampleModule::cubicRoot(jsi::Runtime& rt, int64\_t input) {

- return std::cbrt(input);
  +}

} // namespace facebook::react

```

The implementation imports the `<cmath>` C++ library to perform mathematical operations, then it implements the `cubicRoot` function using the `cbrt` primitive from the `<cmath>` module.

### 4. Test your code in Your App[​](#4-test-your-code-in-your-app "Direct link to 4. Test your code in Your App")

Now, we can test the code in our app.

First, we need to update the `App.tsx` file to use the new method from the TurboModule. Then, we can build our apps in Android and iOS.

1. Open the `App.tsx` code apply the following changes:

App.tsx

```

// ...

- const \[cubicSource, setCubicSource] = React.useState('')
- const \[cubicRoot, setCubicRoot] = React.useState(0)
  return (

  ```
      Welcome to C++ Turbo Native Module Example
    
    Write down here the text you want to revert
    <TextInput
      style={styles.textInput}
      placeholder="Write your text here"
      onChangeText={setValue}
      value={value}
    />
    
    Reversed text: {reversedValue}
  ```
- ```
     For which number do you want to compute the Cubic Root?
  ```
- ```
     <TextInput
  ```
- ```
       style={styles.textInput}
  ```
- ```
       placeholder="Write your text here"
  ```
- ```
       onChangeText={setCubicSource}
  ```
- ```
       value={cubicSource}
  ```
- ```
     />
  ```
- ```
      setCubicRoot(SampleTurboModule.cubicRoot(cubicSource))} />
  ```
- ```
     The cubic root is: {cubicRoot}
  ```

  );
  }
  //...

```

2. To test the app on Android, run `yarn android` from the root folder of your project.
3. To test the app on iOS, run `yarn ios` from the root folder of your project.

## Adding a New Structured Custom Type: Address[​](#adding-a-new-structured-custom-type-address "Direct link to Adding a New Structured Custom Type: Address")

The approach above can be generalized to any kind of type. For structured types, React Native provides some helper functions that make it easier to bridge them from JS to C++ and vice versa.

Let's assume that we want to bridge a custom `Address` type with the following properties:

ts

```

interface Address {
street: string;
num: number;
isInUS: boolean;
}

```

### 1. Define the type in the specs[​](#1-define-the-type-in-the-specs "Direct link to 1. Define the type in the specs")

For the first step, let's define the new custom type in the JS specs, so that Codegen can output all the supporting code. In this way, we don't have to manually write the code.

1. Open the `specs/NativeSampleModule` file and add the following changes.

* TypeScript
* Flow

NativeSampleModule (Add Address type and validateAddress function)

```

import {TurboModule, TurboModuleRegistry} from 'react-native';

+export type Address = {

- street: string,
- num: number,
- isInUS: boolean,
  +};

export interface Spec extends TurboModule {
readonly reverseString: (input: string) => string;

- readonly validateAddress: (input: Address) => boolean;
  }

export default TurboModuleRegistry.getEnforcing(
'NativeSampleModule',
);

```

NativeSampleModule (Add Address type and validateAddress function)

```

// @flow
import type {TurboModule} from 'react-native';
import { TurboModuleRegistry } from "react-native";

+export type Address = {

- street: string,
- num: number,
- isInUS: boolean,
  +};

export interface Spec extends TurboModule {
+reverseString: (input: string) => string;

- +validateAddress: (input: Address) => boolean;
  }

export default (TurboModuleRegistry.getEnforcing(
"NativeSampleModule"
): Spec);

```

This code defines the new `Address` type and defines a new `validateAddress` function for the Turbo Native Module. Notice that the `validateFunction` requires an `Address` object as parameter.

It is also possible to have functions that return custom types.

### 2. Define the bridging code[​](#2-define-the-bridging-code "Direct link to 2. Define the bridging code")

From the `Address` type defined in the specs, Codegen will generate two helper types: `NativeSampleModuleAddress` and `NativeSampleModuleAddressBridging`.

The first type is the definition of the `Address`. The second type contains all the infrastructure to bridge the custom type from JS to C++ and vice versa. The only extra step we need to add is to define the `Bridging` structure that extends the `NativeSampleModuleAddressBridging` type.

1. Open the `shared/NativeSampleModule.h` file
2. Add the following code in the file:

NativeSampleModule.h (Bridging the Address type)

```

\#include "Int64.h"
\#include
\#include

namespace facebook::react {

- using Address = NativeSampleModuleAddress\<std::string, int32\_t, bool>;

- template <>

- struct Bridging

- ```
   : NativeSampleModuleAddressBridging {};
  ```
  // ...
  }

```

This code defines an `Address` typealias for the generic type `NativeSampleModuleAddress`. **The order of the generics matters**: the first template argument refers to the first data type of the struct, the second refers to the second, and so forth.

Then, the code adds the `Bridging` specialization for the new `Address` type, by extending `NativeSampleModuleAddressBridging` that is generated by Codegen.

note

There is a convention that is followed to generate this types:

* The first part of the name is always the type of the module. `NativeSampleModule`, in this example.
* The second part of the name is always the name of the JS type defined in the specs. `Address`, in this example.

### 3. Implement the Native Code[​](#3-implement-the-native-code-1 "Direct link to 3. Implement the Native Code")

Now, we need to implement the `validateAddress` function in C++. First, we need to add the function declaration into the `.h` file, and then we can implement it in the `.cpp` file.

1. Open the `shared/NativeSampleModule.h` file and add the function definition

NativeSampleModule.h (validateAddress function prototype)

```

std::string reverseString(jsi::Runtime& rt, std::string input);

- bool validateAddress(jsi::Runtime \&rt, jsi::Object input);
  };

} // namespace facebook::react

```

2. Open the `shared/NativeSampleModule.cpp` file and add the function implementation

NativeSampleModule.cpp (validateAddress implementation)

```

bool NativeSampleModule::validateAddress(jsi::Runtime \&rt, jsi::Object input) {
std::string street = input.getProperty(rt, "street").asString(rt).utf8(rt);
int32\_t number = input.getProperty(rt, "num").asNumber();

return !street.empty() && number > 0;
}

```

In the implementation, the object that represents the `Address` is a `jsi::Object`. To extract the values from this object, we need to use the accessors provided by `JSI`:

* `getProperty()` retrieves the property from and object by name.
* `asString()` converts the property to `jsi::String`.
* `utf8()` converts the `jsi::String` to a `std::string`.
* `asNumber()` converts the property to a `double`.

Once we manually parsed the object, we can implement the logic that we need.

note

If you want to learn more about `JSI` and how it works, have a look at this [great talk](https://youtu.be/oLmGInjKU2U?feature=shared) from App.JS 2024

### 4. Testing the code in the app[​](#4-testing-the-code-in-the-app "Direct link to 4. Testing the code in the app")

To test the code in the app, we have to modify the `App.tsx` file.

1. Open the `App.tsx` file. Remove the content of the `App()` function.
2. Replace the body of the `App()` function with the following code:

App.tsx (App function body replacement)

```

const \[street, setStreet] = React.useState('');
const \[num, setNum] = React.useState('');
const \[isValidAddress, setIsValidAddress] = React.useState<
boolean | null

> (null);

const onPress = () => {
let houseNum = parseInt(num, 10);
if (isNaN(houseNum)) {
houseNum = -1;
}
const address = {
street,
num: houseNum,
isInUS: false,
};
const result = SampleTurboModule.validateAddress(address);
setIsValidAddress(result);
};

return (

```
    Welcome to C Turbo Native Module Example
  
  Address:
  <TextInput
    style={styles.textInput}
    placeholder="Write your address here"
    onChangeText={setStreet}
    value={street}
  />
  Number:
  <TextInput
    style={styles.textInput}
    placeholder="Write your address here"
    onChangeText={setNum}
    value={num}
  />
  
  {isValidAddress != null && (
    
      Your address is {isValidAddress ? 'valid' : 'not valid'}
    
  )}
```

);

```

Congratulation! 🎉

You bridged your first types from JS to C++.


---

# Direct Manipulation

It is sometimes necessary to make changes directly to a component without using state/props to trigger a re-render of the entire subtree. When using React in the browser for example, you sometimes need to directly modify a DOM node, and the same is true for views in mobile apps. `setNativeProps` is the React Native equivalent to setting properties directly on a DOM node.

caution

Use `setNativeProps` when frequent re-rendering creates a performance bottleneck!

Direct manipulation will not be a tool that you reach for frequently. You will typically only be using it for creating continuous animations to avoid the overhead of rendering the component hierarchy and reconciling many views. `setNativeProps` is imperative and stores state in the native layer (DOM, UIView, etc.) and not within your React components, which makes your code more difficult to reason about.

Before you use it, try to solve your problem with `setState` and [`shouldComponentUpdate`](https://react.dev/reference/react/Component#shouldcomponentupdate).

## setNativeProps to edit TextInput value[​](#setnativeprops-to-edit-textinput-value "Direct link to setNativeProps to edit TextInput value")

Another very common use case of `setNativeProps` is to edit the value of the TextInput. The `controlled` prop of TextInput can sometimes drop characters when the `bufferDelay` is low and the user types very quickly. Some developers prefer to skip this prop entirely and instead use `setNativeProps` to directly manipulate the TextInput value when necessary.

For example, the following code demonstrates editing the input when you tap a button:

* TypeScript
* JavaScript

You can use the [`clear`](/docs/textinput.md#clear) method to clear the `TextInput` which clears the current input text using the same approach.

## Avoiding conflicts with the render function[​](#avoiding-conflicts-with-the-render-function "Direct link to Avoiding conflicts with the render function")

If you update a property that is also managed by the render function, you might end up with some unpredictable and confusing bugs because anytime the component re-renders and that property changes, whatever value was previously set from `setNativeProps` will be completely ignored and overridden.


---

# Invoking native functions on your native component

In the [base guide](/docs/fabric-native-components-introduction.md) to write a new Native Component, you have explored how to create a new component, how to pass properties from the JS side to the native side, and how to emit events from native side to JS.

Custom components can also call some of the functions implemented in the native code imperatively, to achieve some more advanced functionalities, such as programmatically reload a web page.

In this guide you'll learn how to achieve this, by using a new concept: Native Commands.

This guide starts from the [Native Components](/docs/fabric-native-components-introduction.md) guide and assumes that you are familiar with it and that you are familiar with [Codegen](/docs/next/the-new-architecture/what-is-codegen).

## 1. Update your component specs[​](#1-update-your-component-specs "Direct link to 1. Update your component specs")

The first step is to update the component spec to declare the `NativeCommand`.

* TypeScript
* Flow

Update the `WebViewNativeComponent.ts` as it follows:

Demo/specs/WebViewNativeComponent.ts

```

import type {HostComponent, ViewProps} from 'react-native';
import type {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
+import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';

type WebViewScriptLoadedEvent = {
result: 'success' | 'error';
};

export interface NativeProps extends ViewProps {
sourceURL?: string;
onScriptLoaded?: BubblingEventHandler | null;
}

+interface NativeCommands {

- reload: (viewRef: React.ElementRef<HostComponent>) => void;
  +}

+export const Commands: NativeCommands = codegenNativeCommands({

- supportedCommands: \['reload'],
  +});

export default codegenNativeComponent(
'CustomWebView',
) as HostComponent;

```

Update the `WebViewNativeComponent.js` as it follows:

Demo/specs/WebViewNativeComponent.js

```

// @flow strict-local

import type {HostComponent, ViewProps} from 'react-native';
import type {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
+import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';

type WebViewScriptLoadedEvent = $ReadOnly<{|
result: "success" | "error",
|}>;

type NativeProps = $ReadOnly<{|
...ViewProps,
sourceURL?: string;
onScriptLoaded?: BubblingEventHandler?;
|}>;

+interface NativeCommands {

- reload: (viewRef: React.ElementRef<HostComponent>) => void;
  +}

+export const Commands: NativeCommands = codegenNativeCommands({

- supportedCommands: \['reload'],
  +});

export default (codegenNativeComponent(
'CustomWebView',
): HostComponent);

```

These changes requires you to:

1. Import the `codegenNativeCommands` function from `react-native`. This instruct codegen that it has to generate the code for `NativeCommands`
2. Define an interface that contains the methods we want to invoke in native. All the Native Commands must have a first parameter of type `React.ElementRef`.
3. Export the `Commands` variable that is the result of the invocation of `codegenNativeCommands`, passing a list of the supported commands.

warning

In TypeScript, the `React.ElementRef` is deprecated. The correct type to use is actually `React.ComponentRef`. However, due to a bug in Codegen, using `ComponentRef` will crash the app. We have the fix already, but we need to release a new version of React Native to apply it.

## 2. Update the App code to use the new command[​](#2-update-the-app-code-to-use-the-new-command "Direct link to 2. Update the App code to use the new command")

Now you can use the command in the the app.

* TypeScript
* Flow

Open the `App.tsx` file and modify it as it follows:

App.tsx

```

import React from 'react';
-import {Alert, StyleSheet, View} from 'react-native';
-import WebView from '../specs/WebViewNativeComponent';
+import {Alert, StyleSheet, Pressable, Text, View} from 'react-native';
+import WebView, {Commands} from '../specs/WebViewNativeComponent';

function App(): React.JSX.Element {

- const webViewRef = React.useRef\<React.ElementRef | null>(null);
-
- const refresh = () => {
- ```
     if (webViewRef.current) {
  ```
- ```
         Commands.reload(webViewRef.current);
  ```
- ```
     }
  ```
- };

return (

```
  <WebView
```

- ```
    ref={webViewRef}
    sourceURL="https://react.dev/"
    style={styles.webview}
    onScriptLoaded={() => {
      Alert.alert('Page Loaded');
    }}
  />
  ```
-
-
- ```
         {({pressed}) => (
  ```
- ```
             !pressed ? Refresh : Refresh) }
  ```
-
-

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
alignContent: 'center',
},
webview: {
width: '100%',

- height: '100%',

* height: '90%',
  },
* tabbar: {
* flex: 1,
* backgroundColor: 'gray',
* width: '100%',
* alignItems: 'center',
* alignContent: 'center',
* },
* button: {
* margin: 10,
* },
* buttonText: {
* fontSize: 20,
* fontWeight: 'bold',
* color: '#00D6FF',
* width: '100%',
* },
* buttonTextPressed: {
* fontSize: 20,
* fontWeight: 'bold',
* color: '#00D6FF77',
* width: '100%',
* },
  });

export default App;

```

Open the `App.tsx` file and modify it as it follows:

App.jsx

```

import React from 'react';
-import {Alert, StyleSheet, View} from 'react-native';
-import WebView from '../specs/WebViewNativeComponent';
+import {Alert, StyleSheet, Pressable, Text, View} from 'react-native';
+import WebView, {Commands} from '../specs/WebViewNativeComponent';

function App(): React.JSX.Element {

- const webViewRef = React.useRef\<React.ElementRef | null>(null);
-
- const refresh = () => {
- ```
     if (webViewRef.current) {
  ```
- ```
         Commands.reload(webViewRef.current);
  ```
- ```
     }
  ```
- };

return (

```
  <WebView
```

- ```
    ref={webViewRef}
    sourceURL="https://react.dev/"
    style={styles.webview}
    onScriptLoaded={() => {
      Alert.alert('Page Loaded');
    }}
  />
  ```
-
-
- ```
         {({pressed}) => (
  ```
- ```
             !pressed ? Refresh : Refresh) }
  ```
-
-

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
alignContent: 'center',
},
webview: {
width: '100%',

- height: '100%',

* height: '90%',
  },
* tabbar: {
* flex: 1,
* backgroundColor: 'gray',
* width: '100%',
* alignItems: 'center',
* alignContent: 'center',
* },
* button: {
* margin: 10,
* },
* buttonText: {
* fontSize: 20,
* fontWeight: 'bold',
* color: '#00D6FF',
* width: '100%',
* },
* buttonTextPressed: {
* fontSize: 20,
* fontWeight: 'bold',
* color: '#00D6FF77',
* width: '100%',
* },
  });

export default App;

```

The relevant changes here are the following:

1. Import the `Commands` const from the spec file. The Command is an object that let us call the methods we have in native.
2. Declare a ref to the `WebView` custom native component using `useRef`. You need to pass this ref to the native command.
3. Implement the `refresh` function. This function checks that the WebView's ref is not null and if not, it calls the command.
4. Add a pressable to call the command when the user taps on the button.

The remaining changes are regular React changes to add a `Pressable` and to style the view so it looks nicer.

## 3. Rerun Codegen[​](#3-rerun-codegen "Direct link to 3. Rerun Codegen")

Now that the specs are updated and the code is ready to use the command, it is time to implement the Native code. However, before diving into writing native code, you have to rerun codegen, to let it generate the new types that are needed by the Native code.

* Android
* iOS

Codegen is executed through the `generateCodegenArtifactsFromSchema` Gradle task:

bash

```

cd android
./gradlew generateCodegenArtifactsFromSchema

BUILD SUCCESSFUL in 837ms
14 actionable tasks: 3 executed, 11 up-to-date

```

This is automatically run when you build your Android application.

Codegen is run as part of the script phases that's automatically added to the project generated by CocoaPods.

bash

```

cd ios
bundle install
bundle exec pod install

```

The output will look like this:

shell

```

...
Framework build type is static library
\[Codegen] Adding script\_phases to ReactCodegen.
\[Codegen] Generating ./build/generated/ios/ReactCodegen.podspec.json
\[Codegen] Analyzing /Users/me/src/TurboModuleExample/package.json
\[Codegen] Searching for codegen-enabled libraries in the app.
\[Codegen] Found TurboModuleExample
\[Codegen] Searching for codegen-enabled libraries in the project dependencies.
\[Codegen] Found react-native
...

```

## 4. Implement the Native Code[​](#4-implement-the-native-code "Direct link to 4. Implement the Native Code")

Now it's time to implement the native changes that will enable your JS to directly invoke methods on your native view.

* Android
* iOS

To let your view respond to the Native Command, you only have to modify the ReactWebViewManager.

If you try to build right now, the build will fail, because the current `ReactWebViewManager` does not implement the new `reload` method. To fix the build error, let's modify the `ReactWebViewManager` to implement it.

* Java
* Kotlin

ReactWebViewManager.java

```

//...
@ReactProp(name = "sourceUrl")
@Override
public void setSourceURL(ReactWebView view, String sourceURL) {
if (sourceURL == null) {
view.emitOnScriptLoaded(ReactWebView.OnScriptLoadedEventResult.error);
return;
}
view.loadUrl(sourceURL, new HashMap<>());
}

- @Override
- public void reload(ReactWebView view) {
- view.reload();
- }

public static final String REACT\_CLASS = "CustomWebView";
//...

```

ReactWebViewManager.kt

```

@ReactProp(name = "sourceUrl")
override fun setSourceURL(view: ReactWebView, sourceURL: String?) {
if (sourceURL == null) {
view.emitOnScriptLoaded(ReactWebView.OnScriptLoadedEventResult.error)
return;
}
view.loadUrl(sourceURL, emptyMap())
}

- override fun reload(view: ReactWebView) {
- view.reload()
- }

companion object {
const val REACT\_CLASS = "CustomWebView"
}

```

In this case, it's enough to call directly the `view.reload()` method because our ReactWebView inherits from the Android's `WebView` and it has a reload method directly available. If you are implementing a custom function, that is not available in your custom view, you might also have to implement the required method in the Android's View that is managed by the React Native's `ViewManager`.

To let your view respond to the Native Command, we need to implement a couple of methods on iOS.

Let's open the `RCTWebView.mm` file and let's modify it as it follows:

RCTWebView\.mm

```

// Event emitter convenience method

- (const CustomWebViewEventEmitter &)eventEmitter
  {
  return static\_cast(\*\_eventEmitter);
  }

* * (void)handleCommand:(const NSString \*)commandName args:(const NSArray \*)args

* {

* RCTCustomWebViewHandleCommand(self, commandName, args);

* }

*

* - (void)reload

* {

* \[\_webView reloadFromOrigin];

* }

* (ComponentDescriptorProvider)componentDescriptorProvider
  {
  return concreteComponentDescriptorProvider();
  }

```

To make your view respond to the Native Commands, you need to apply the following changes:

1. Add a `handleCommand:args` function. This function is invoked by the components infrastructure to handle the commands. The function implementation is similar for every component: you need to call an `RCT<componentNameInJS>HandleCommand` function that is generated by Codegen for you. The `RCT<componentNameInJS>HandleCommand` perform a bunch of validation, verifying that the command that we need to invoke is among the supported ones and that the parameters passed matches the one expected. If all the checks pass, the `RCT<componentNameInJS>HandleCommand` will then invoke the proper native method.
2. Implement the `reload` method. In this example, the `reload` method calls the `reloadFromOrigin` function of the WebKit's WebView.

## 5. Run your app[​](#5-run-your-app "Direct link to 5. Run your app")

Finally, you can run your app with the usual commands. Once the app is running, you can tap on the refresh button to see the page getting reloaded.

| Android                                       | iOS                                       |
| --------------------------------------------- | ----------------------------------------- |
| ![](/docs/assets/native-commands-android.gif) | ![](/docs/assets/native-commands-ios.gif) |


---

# Measuring the Layout

Sometimes, you need to measure the current layout to apply some changes to the overall layout or to make decisions and call some specific logic.

React Native provides some native methods to know what are the measurements of the views.

The best way to invoke those methods is in a `useLayoutEffect` hook: this will give you the most recent values for those measurements and it will let you apply changes in the same frame when the measurements are computed.

Typical code will look like this:

tsx

```

function AComponent(children) {
const targetRef = React.useRef(null)

useLayoutEffect(() => {
targetRef.current?.measure((x, y, width, height, pageX, pageY) => {
//do something with the measurements
});
}, \[ /\* add dependencies here \*/]);

return (

```
 {children}
```

);
}

```

note

The methods described here are available on most of the default components provided by React Native. However, they are *not* available on composite components that aren't directly backed by a native view. This will generally include most components that you define in your own app.

## measure(callback)[​](#measurecallback "Direct link to measure(callback)")

Determines the location on screen (`x` and `y`), `width`, and `height` in the viewport of the given view. Returns the values via an async callback. If successful, the callback will be called with the following arguments:

* `x`: the `x` coordinate of the origin (top-left corner) of the measured view in the viewport.
* `y`: the `y` coordinate of the origin (top-left corner) of the measured view in the viewport.
* `width`: the `width` of the view.
* `height`: the `height` of the view.
* `pageX`: the `x` coordinate of the view in the viewport (typically the whole screen).
* `pageY`: the `y` coordinate of the view in the viewport (typically the whole screen).

Also the `width` and `height` returned by `measure()` are the `width` and `height` of the component in the viewport.

## measureInWindow(callback)[​](#measureinwindowcallback "Direct link to measureInWindow(callback)")

Determines the location (`x` and `y`) of the given view in the window and returns the values via an async callback. If the React root view is embedded in another native view, this will give you the absolute coordinates. If successful, the callback will be called with the following arguments:

* `x`: the `x` coordinate of the view in the current window.
* `y`: the `y` coordinate of the view in the current window.
* `width`: the `width` of the view.
* `height`: the `height` of the view.


---

# Emitting Events in Native Modules

In some circustamces, you may want to have a Native Module that listen to some events in the platform layer and then emit them to the JavaScript layer, to let you application react to such native events. In other cases, you might have long running operations that can emits events so that the UI can be updated when those happen.

Both are good use cases for emitting events from a Native Modules. In this guide, you'll learn how to do that.

## Emitting an Event when a new key added to the storage[​](#emitting-an-event-when-a-new-key-added-to-the-storage "Direct link to Emitting an Event when a new key added to the storage")

In this example, you will learn how to emit an event when a new key is added to the storage. Changing the value of the key will not emit the event, but adding a new key will.

This guide starts from the [Native Module](/docs/next/turbo-native-modules-introduction) guide. Make sure to be familiar with that guide before diving into this one, potentially implementing the example in the guide.

## Step 1: Update the Specs of NativeLocalStorage[​](#step-1-update-the-specs-of-nativelocalstorage "Direct link to Step 1: Update the Specs of NativeLocalStorage")

The first step would be to update the specs of the `NativeLocalStorage` specs to let React Native aware that the module can emit events.

* TypeScript
* Flow

Open the `NativeLocalStorage.ts` file and update it as it follows:

NativeLocalStorage.ts

```

+import type {TurboModule, CodegenTypes} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

+export type KeyValuePair = {

- key: string,
- value: string,
  +}

export interface Spec extends TurboModule {
setItem(value: string, key: string): void;
getItem(key: string): string | null;
removeItem(key: string): void;
clear(): void;

- readonly onKeyAdded: CodegenTypes.EventEmitter;
  }

export default TurboModuleRegistry.getEnforcing(
'NativeLocalStorage',
);

```

Open the `NativeLocalStorage.js` file and update it as it follows:

NativeLocalStorage.js

```

// @flow
+import type {TurboModule, CodegenTypes} from 'react-native';
import {TurboModule, TurboModuleRegistry} from 'react-native';

+export type KeyValuePair = {

- key: string,
- value: string,
  +}

export interface Spec extends TurboModule {
setItem(value: string, key: string): void;
getItem(key: string): ?string;
removeItem(key: string): void;
clear(): void;

- onKeyAdded: CodegenTypes.EventEmitter
  }
  export default (TurboModuleRegistry.get(
  'NativeLocalStorage'
  ): ?Spec);

```

With the `import type` statement, you are importing the `CodegenTypes` from `react-native`, which includes the `EventEmitter` type. This allows you to define the `onKeyAdded` property using `CodegenTypes.EventEmitter<KeyValuePair>`, specifying that the event will emit a payload of type `KeyValuePair`.

When the event is emitted, you expect for it to receive a parameter of type `KeyValuePair`.

## Step 2: Generate Codegen[​](#step-2-generate-codegen "Direct link to Step 2: Generate Codegen")

Given that you have updated the specs for your Native Module, you now have to rerun Codegen to generate the artifacts in the native code.

This is the same process presented in the Native Modules guide.

* Android
* iOS

Codegen is executed through the `generateCodegenArtifactsFromSchema` Gradle task:

bash

```

cd android
./gradlew generateCodegenArtifactsFromSchema

BUILD SUCCESSFUL in 837ms
14 actionable tasks: 3 executed, 11 up-to-date

```

This is automatically run when you build your Android application.

Codegen is run as part of the script phases that's automatically added to the project generated by CocoaPods.

bash

```

cd ios
bundle install
bundle exec pod install

```

The output will look like this:

shell

```

...
Framework build type is static library
\[Codegen] Adding script\_phases to ReactCodegen.
\[Codegen] Generating ./build/generated/ios/ReactCodegen.podspec.json
\[Codegen] Analyzing /Users/me/src/TurboModuleExample/package.json
\[Codegen] Searching for Codegen-enabled libraries in the app.
\[Codegen] Found TurboModuleExample
\[Codegen] Searching for Codegen-enabled libraries in the project dependencies.
\[Codegen] Found react-native
...

```

## Step 3: Update the App code[​](#step-3-update-the-app-code "Direct link to Step 3: Update the App code")

Now, it's time to update the code of the App to handle the new event.

Open the `App.tsx` file and modify it as it follows:

App.tsx

```

import React from 'react';
import {

- Alert,
- EventSubscription,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  } from 'react-native';

import NativeLocalStorage from './specs/NativeLocalStorage';

const EMPTY = '';

function App(): React.JSX.Element {
const \[value, setValue] = React.useState(null);

- const \[key, setKey] = React.useState(null);

- const listenerSubscription = React.useRef(null);

- React.useEffect(() => {

- listenerSubscription.current = NativeLocalStorage?.onKeyAdded((pair) => Alert.alert(`New key added: ${pair.key} with value: ${pair.value}`));

- return  () => {

- ```
  listenerSubscription.current?.remove();
  ```

- ```
  listenerSubscription.current = null;
  ```

- }

- }, \[])

  const \[editingValue, setEditingValue] = React.useState<
  string | null

  > (null);

* React.useEffect(() => {
* const storedValue = NativeLocalStorage?.getItem('myKey');
* setValue(storedValue ?? '');
* }, \[]);

  function saveValue() {

- if (key == null) {
- ```
  Alert.alert('Please enter a key');
  ```
- ```
  return;
  ```
- }
  NativeLocalStorage?.setItem(editingValue ?? EMPTY, key);
  setValue(editingValue);
  }

function clearAll() {
NativeLocalStorage?.clear();
setValue('');
}

function deleteValue() {

- if (key == null) {

- ```
  Alert.alert('Please enter a key');
  ```

- ```
  return;
  ```

- }
  NativeLocalStorage?.removeItem(key);
  setValue('');
  }

- function retrieveValue() {

- if (key == null) {

- ```
  Alert.alert('Please enter a key');
  ```

- ```
  return;
  ```

- }

- const val = NativeLocalStorage?.getItem(key);

- setValue(val);

- }

  return (

  ```
    Current stored value is: {value ?? 'No Value'}
  ```

- ```
  Key:
  ```

- ```
   <TextInput
  ```

- ```
    placeholder="Enter the key you want to store"
  ```

- ```
    style={styles.textInput}
  ```

- ```
    onChangeText={setKey}
  ```

- ```
  />
  ```

- ```
  Value:
  <TextInput
    placeholder="Enter the text you want to store"
    style={styles.textInput}
    onChangeText={setEditingValue}
  />
  ```

-

);
}

const styles = StyleSheet.create({
text: {
margin: 10,
fontSize: 20,
},
textInput: {
margin: 10,
height: 40,
borderColor: 'black',
borderWidth: 1,
paddingLeft: 5,
paddingRight: 5,
borderRadius: 5,
},
});

export default App;

```

There are a few relevant changes to look at:

1. You need to import the `EventSubscription` type from `react-native` to handle the `EventSubscription`
2. You need to use a `useRef` to keep track of the `EventSubscription` reference
3. You register the listener using an `useEffect` hook. The `onKeyAdded` function takes a callback with an object of type `KeyValuePair` as a function parameter.
4. The callback added to `onKeyAdded` is executed every time the event is emitted from Native to JS.
5. In the `useEffect` cleanup function, you `remove` the event subscription and you set the ref to `null`.

The rest of the changes are regular React changes to improve the App for this new feature.

## Step 4: Write your Native Code[​](#step-4-write-your-native-code "Direct link to Step 4: Write your Native Code")

With everything prepared, let's start writing native platform code.

* Android
* iOS

Assuming you followed the guide for Android described in the [Native Modules guide](/docs/turbo-native-modules-introduction.md?platforms=android\&language=typescript#3-write-application-code-using-the-turbo-native-module), what's left to do is to plug the code that emit the events in your app.

To do so, you have to:

1. Open the `NativeLocalStorage.kt` file
2. Modify it as it follows:

NativeLocalStorage

```

package com.nativelocalstorage

import android.content.Context
import android.content.SharedPreferences
import com.nativelocalstorage.NativeLocalStorageSpec
+import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
+import com.facebook.react.bridge.WritableMap

class NativeLocalStorageModule(reactContext: ReactApplicationContext) : NativeLocalStorageSpec(reactContext) {

override fun getName() = NAME

override fun setItem(value: String, key: String) {

- var shouldEmit = false

- if (getItem(key) != null) {

- ```
    shouldEmit = true
  ```

- }
  val sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE)
  val editor = sharedPref.edit()
  editor.putString(key, value)
  editor.apply()

- if (shouldEmit == true) {

- ```
    val eventData = Arguments.createMap().apply {
  ```

- ```
        putString("key", key)
  ```

- ```
        putString("value", value)
  ```

- ```
    }
  ```

- ```
    emitOnKeyAdded(eventData)
  ```

- }
  }

override fun getItem(key: String): String? {
val sharedPref = getReactApplicationContext().getSharedPreferences("my\_prefs", Context.MODE\_PRIVATE)
val username = sharedPref.getString(key, null)
return username.toString()
}

```

First, you need to import a couple of types that you need to use to create the eventData that needs to be sent from Native to JS. These imports are:

* `import com.facebook.react.bridge.Arguments`
* `import com.facebook.react.bridge.WritableMap`

Secondly, you need to implement the logic that actually emits the event to JS. In case of complex types, like the `KeyValuePair` defined in the specs, Codegen will generate a function that expects a `ReadableMap` as a parameter. You can create the `ReadableMap` by using the `Arguments.createMap()` factory method, and use the `apply` function to populate the map. It's your responsibility to make sure that the the keys you are using in the map are the same properties that are defined in the spec type in JS.

Assuming you followed the guide for iOS described in the [Native Modules guide](/docs/turbo-native-modules-introduction.md?platforms=ios\&language=typescript#3-write-application-code-using-the-turbo-native-module), what's left to do is to plug the code that emit the events in your app.

To do so, you have to:

1. Open the `RCTNativeLocalStorage.h` file.
2. Change the base class from `NSObject` to `NativeLocalStorageSpecBase`

RCTNativeLocalStorage.h

```

\#import \<Foundation/Foundation.h>
\#import \<NativeLocalStorageSpec/NativeLocalStorageSpec.h>

NS\_ASSUME\_NONNULL\_BEGIN

-@interface RCTNativeLocalStorage : NSObject
+@interface RCTNativeLocalStorage : NativeLocalStorageSpecBase

@end

NS\_ASSUME\_NONNULL\_END

```

3. Open the `RCTNativeLocalStorage.mm` file.
4. Modify it to emit the events when needed, for example:

RCTNativeLocalStorage.mm

```

- (void)setItem:(NSString \*)value key:(NSString \*)key {

* BOOL shouldEmitEvent = NO;

* if (!\[self getItem:key]) {

* shouldEmitEvent = YES;

* }
  \[self.localStorage setObject:value forKey:key];

* if (shouldEmitEvent) {

* \[self emitOnKeyAdded:@{@"key": key, @"value": value}];

* }
  }

```

The `NativeLocalStorageSpecBase` is a base class that provides the `emitOnKeyAdded` method and its basic implementation and boilerplate. Thanks to this class, you don't have to handle all the conversion between Objective-C and JSI that is required to send the event to JS.

In case of complex types, like the `KeyValuePair` defined in the specs, Codegen will generate a generic dictionary that you can populate on the native side. It's your responsibility to make sure that the the keys you are using in the dictionary are the same properties that are defined in the spec type in JS.

## Step 5: Run Your App[​](#step-5-run-your-app "Direct link to Step 5: Run Your App")

If you now try to run your app, you should see this behavior.

| Android                                                   | iOS                                                   |
| --------------------------------------------------------- | ----------------------------------------------------- |
| ![](/docs/assets/turbo-native-modules-events-android.gif) | ![](/docs/assets/turbo-native-modules-events-ios.gif) |


---

# Native Modules Lifecycle

In React Native, Native Modules are singleton. The Native Module infrastructure lazily creates a Native Module the first time it is accessed and it keeps it around whenever the app requires it. This is a performance optimization that allows us to avoid the overhead of creating Native Modules eagerly, at app start, and it ensure faster startup times.

In a pure React Native app, the Native Modules are created once and they are never destroyed. However, in more complex apps, there might be use cases where the Native Modules are destroyed and recreated. Imagine, for example, a brownfield app that mixes some native views with some React Native surfaces, as presented in the [Integrating with Existing App guide](/docs/integration-with-existing-apps.md). In that case it might make sense to destroy a React Native instance when the user navigates away from a React Native surface and recreate it when the user navigates back to that surface.

When this happens, Native Modules that are stateless won't cause any issues. However, for stateful Native Modules it might be necessary to properly invalidate the Native Module to ensure that the state is reset and the resources released.

In this guide, you will explore how to initialize and invalidate a Native Module properly. This guide assumes that you are familiar with how to write a Native Modules and you are comfortable writing native code. If you are not familiar with Native Modules, please read the [Native Modules guide](/docs/next/turbo-native-modules-introduction) first.

## Android[​](#android "Direct link to Android")

When it comes to Android, all the Native Modules already implements a [TurboModule](https://github.com/facebook/react-native/blob/main/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/turbomodule/core/interfaces/TurboModule.kt) interface that defines two methods: `initialize()` and `invalidate()`.

The `initialize()` method is called by the Native Module infrastructure when the Native Module is created. This is the best place to put all the initialization code that needs access to the ReactApplicationContext, for example. These are some Native Modules from core that implements the `initialize()` method: [BlobModule](https://github.com/facebook/react-native/blob/0617accecdcb11159ba15c34885f294bc206aa89/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/modules/blob/BlobModule.java#L155-L157), [NetworkingModule](https://github.com/facebook/react-native/blob/0617accecdcb11159ba15c34885f294bc206aa89/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/modules/network/NetworkingModule.java#L193-L197).

The `invalidate()` method is called by the Native Module infrastructure when the Native Module is destroyed. This is the best place to put all the cleanup code, resetting the Native Module state and release resources that are no longer needed, such as memory and files. These are some Native Modules from core that implements the `invalidate()` method: [DeviceInfoModule](https://github.com/facebook/react-native/blob/0617accecdcb11159ba15c34885f294bc206aa89/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/modules/deviceinfo/DeviceInfoModule.kt#L72-L76), [NetworkModule](https://github.com/facebook/react-native/blob/0617accecdcb11159ba15c34885f294bc206aa89/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/modules/network/NetworkingModule.java#L200-L212)

## iOS[​](#ios "Direct link to iOS")

On iOS, Native Modules conforms to the [`RCTTurboModule`](https://github.com/facebook/react-native/blob/0617accecdcb11159ba15c34885f294bc206aa89/packages/react-native/ReactCommon/react/nativemodule/core/platform/ios/ReactCommon/RCTTurboModule.h#L196-L200) protocol. However, this protocol does not expose the `initialize` and `invalidate` method that are exposed by the Android's `TurboModule` class.

Instead, on iOS, there are two additional protocols: [`RCTInitializing`](https://github.com/facebook/react-native/blob/0617accecdcb11159ba15c34885f294bc206aa89/packages/react-native/React/Base/RCTInitializing.h) and [`RCTInvalidating`](https://github.com/facebook/react-native/blob/0617accecdcb11159ba15c34885f294bc206aa89/packages/react-native/React/Base/RCTInvalidating.h). These protocols are used to define the `initialize` and `invalidate` methods, respectively.

If your module needs to run some initialization code, then you can conform to the `RCTInitializing` protocol and implement the `initialize` method. To do so, you have to:

1. Modify the `NativeModule.h` file by adding the following lines:

NativeModule.h

```

- \#import \<React/RCTInitializing.h>

//...

- @interface NativeModule : NSObject

* @interface NativeModule : NSObject \<NativeModuleSpec, RCTInitializing>
  //...
  @end

```

2. Implement the `initialize` method in the `NativeModule.mm` file:

NativeModule.mm

```

// ...

@implementation NativeModule

+- (void)initialize {

- // add the initialization code here
  +}

@end

```

These are some Native Modules from core that implements the `initialize` method: [RCTBlobManager](https://github.com/facebook/react-native/blob/0617accecdcb11159ba15c34885f294bc206aa89/packages/react-native/Libraries/Blob/RCTBlobManager.mm#L58-L68), [RCTTiming](https://github.com/facebook/react-native/blob/0617accecdcb11159ba15c34885f294bc206aa89/packages/react-native/React/CoreModules/RCTTiming.mm#L121-L124).

If your module needs to run some cleanup code, then you can conform to the `RCTInvalidating` protocol and implement the `invalidate` method. To do so, you have to:

1. Moduify the `NativeModule.h` file by adding the following lines:

NativeModule.h

```

- \#import \<React/RCTInvalidating.h>

//...

- @interface NativeModule : NSObject

* @interface NativeModule : NSObject \<NativeModuleSpec, RCTInvalidating>

//...

@end

```

2. Implement the `invalidate` method in the `NativeModule.mm` file:

NativeModule.mm

```

// ...

@implementation NativeModule

+- (void)invalidate {

- // add the cleanup code here
  +}

@end

```

These are some Native Modules from core that implements the `invalidate` method: [RCTAppearance](https://github.com/facebook/react-native/blob/0617accecdcb11159ba15c34885f294bc206aa89/packages/react-native/React/CoreModules/RCTAppearance.mm#L151-L155), [RCTDeviceInfo](https://github.com/facebook/react-native/blob/0617accecdcb11159ba15c34885f294bc206aa89/packages/react-native/React/CoreModules/RCTDeviceInfo.mm#L127-L133).


---

# Cross-Platform Native Modules (C++)

<!-- -->

Writing a module in C++ is the best way to share platform-agnostic code between Android and iOS. With pure C++ modules, you can write your logic only once and reuse it right away from all the platforms, without the need of writing platform-specific code.

In this guide, we will go through the creation of a pure C++ Turbo Native Module:

1. Create the JS specs
2. Configure Codegen to generate the scaffolding
3. Implement the Native logic
4. Register the module in the Android and iOS application
5. Test your changes in JS

The rest of this guide assumes that you have created your application running the command:

shell

```

npx @react-native-community/cli@latest init SampleApp --version 0.84

```

## 1. Create the JS specs[​](#1-create-the-js-specs "Direct link to 1. Create the JS specs")

Pure C++ Turbo Native Modules are Turbo Native Modules. They need a specification file (also called spec file) so that Codegen can create the scaffolding code for us. The specification file is also what we use to access the Turbo Native Module in JS.

Spec files need to be written in a typed JS dialect. React Native currently supports Flow or TypeScript.

1. Inside the root folder of your app, create a new folder called `specs`.
2. Create a new file called `NativeSampleModule.ts` with the following code:

warning

All Native Turbo Module spec files must have the prefix `Native`, otherwise Codegen will ignore them.

* TypeScript
* Flow

specs/NativeSampleModule.ts

```

// @flow
import type {TurboModule} from 'react-native'
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
+reverseString: (input: string) => string;
}

export default (TurboModuleRegistry.getEnforcing(
"NativeSampleModule"
): Spec);

```

specs/NativeSampleModule.ts

```

import {TurboModule, TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
readonly reverseString: (input: string) => string;
}

export default TurboModuleRegistry.getEnforcing(
'NativeSampleModule',
);

```

## 2. Configure Codegen[​](#2-configure-codegen "Direct link to 2. Configure Codegen")

The next step is to configure [Codegen](/docs/the-new-architecture/what-is-codegen.md) in your `package.json`. Update the file to include:

package.json

```

```
 "start": "react-native start",
 "test": "jest"
```

},
"codegenConfig": {
"name": "AppSpecs",
"type": "modules",
"jsSrcsDir": "specs",
"android": {
"javaPackageName": "com.sampleapp.specs"
}
},
"dependencies": {

```

This configuration tells Codegen to look for spec files in the `specs` folder. It also instructs Codegen to only generate code for `modules` and to namespace the generated code as `AppSpecs`.

## 3. Write the Native Code[​](#3-write-the-native-code "Direct link to 3. Write the Native Code")

Writing a C++ Turbo Native Module allows you to share the code between Android and iOS. Therefore we will be writing the code once, and we will look into what changes we need to apply to the platforms so that the C++ code can be picked up.

1. Create a folder named `shared` at the same level as the `android` and `ios` folders.

2. Inside the `shared` folder, create a new file called `NativeSampleModule.h`.

   shared/NativeSampleModule.h

```

\#pragma once

\#include \<AppSpecsJSI.h>

\#include <memory>
\#include <string>

namespace facebook::react {

class NativeSampleModule : public NativeSampleModuleCxxSpec<NativeSampleModule> {
public:
NativeSampleModule(std::shared\_ptr<CallInvoker> jsInvoker);

```
 std::string reverseString(jsi::Runtime& rt, std::string input);
```

};

} // namespace facebook::react

```

3. Inside the `shared` folder, create a new file called `NativeSampleModule.cpp`.

shared/NativeSampleModule.cpp

```

\#include "NativeSampleModule.h"

namespace facebook::react {

NativeSampleModule::NativeSampleModule(std::shared\_ptr<CallInvoker> jsInvoker)
: NativeSampleModuleCxxSpec(std::move(jsInvoker)) {}

std::string NativeSampleModule::reverseString(jsi::Runtime& rt, std::string input) {
return std::string(input.rbegin(), input.rend());
}

} // namespace facebook::react

```

Let's have a look at the two files we created:

* The `NativeSampleModule.h` file is the header file for a Pure C++ TurboModule. The `include` statements make sure that we include the specs that will be created by Codegen and that contains the interface and the base class we need to implement.
* The module lives in the `facebook::react` namespace to have access to all the types that live in that namespace.
* The class `NativeSampleModule` is the actual Turbo Native Module class and it extends the `NativeSampleModuleCxxSpec` class which contains some glue code and boilerplate code to let this class behave as a Turbo Native Module.
* Finally, we have the constructor, that accepts a pointer to the `CallInvoker`, to communicate with JS if needed and the function's prototype we have to implement.

The `NativeSampleModule.cpp` file is the actual implementation of our Turbo Native Module and implements the constructor and the method that we declared in the specs.

## 4. Register the Module in the platform[​](#4-register-the-module-in-the-platform "Direct link to 4. Register the Module in the platform")

The next steps will let us register the module in the platform. This is the step that exposes the native code to JS so that the React Native application can finally call the native methods from the JS layer.

This is the only time when we will have to write some platform-specific code.

### Android[​](#android "Direct link to Android")

To make sure that the Android app can effectively build the C++ Turbo Native Module, we need to:

1. Create a `CMakeLists.txt` to access our C++ code.
2. Modify `build.gradle` to point to the newly created `CMakeLists.txt` file.
3. Create an `OnLoad.cpp` file in our Android app to register the new Turbo Native Module.

#### 1. Create the `CMakeLists.txt` file[​](#1-create-the-cmakeliststxt-file "Direct link to 1-create-the-cmakeliststxt-file")

Android uses CMake to build. CMake needs to access the files we defined in our shared folder to be able to build them.

1. Create a new folder `SampleApp/android/app/src/main/jni`. The `jni` folder is where the C++ side of Android lives.
2. Create a `CMakeLists.txt` file and add this context:

CMakeLists.txt

```

cmake\_minimum\_required(VERSION 3.13)

# Define the library name here.

project(appmodules)

# This file includes all the necessary to let you build your React Native application

include(${REACT\_ANDROID\_DIR}/cmake-utils/ReactNative-application.cmake)

# Define where the additional source code lives. We need to crawl back the jni, main, src, app, android folders

target\_sources(${CMAKE\_PROJECT\_NAME} PRIVATE ../../../../../shared/NativeSampleModule.cpp)
