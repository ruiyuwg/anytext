# Native project upgrade helper

View file-by-file diffs of all the changes you need to make to your native projects to upgrade them to the next Expo SDK version.

If you manage your native projects (previously known as bare workflow), to [upgrade to the latest Expo SDK](/workflow/upgrading-expo-sdk-walkthrough), you have to make changes to your native projects. It can be a complex process to find which native file changes and what to update in which file.

The following guide provides diffs to compare native project files between your project's current SDK version and the target SDK version you want to upgrade. You can use them to make changes to your project depending on the `expo` package version your project uses. The tools on this page are similar to [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/). However, they are oriented around projects that use Expo modules and related tooling.

> Interested in avoiding upgrading native code altogether? See [Continuous Native Generation (CNG)](/workflow/continuous-native-generation) to learn how Expo Prebuild can generate your native projects before a build.

## Upgrade native project files

Once you have [upgraded your Expo SDK version and related dependencies](/workflow/upgrading-expo-sdk-walkthrough#how-to-upgrade-to-the-latest-sdk-version), use the diff tool below to learn about changes you need to make to your native project and bring them up to date with the current Expo SDK version.

Choose your **from SDK version** and **to SDK version** to see the generated diff. Then, apply those changes to your native projects by copying and pasting or manually making changes to the project files.

#### From SDK version:

#### To SDK version:

### Native code changes from SDK 54 to 55

[android/app/build.gradleMODIFIED](#androidappbuildgradle)

```diff
react {
  entryFile = file(["node", "-e", "require('expo/scripts/resolveAppEntry')", projectRoot, "android", "absolute"].execute(null, rootDir).text.trim())
  reactNativeDir = new File(["node", "--print", "require.resolve('react-native/package.json')"].execute(null, rootDir).text.trim()).getParentFile().getAbsoluteFile()
- hermesCommand = new File(["node", "--print", "require.resolve('react-native/package.json')"].execute(null, rootDir).text.trim()).getParentFile().getAbsolutePath() + "/sdks/hermesc/%OS-BIN%/hermesc"
+ hermesCommand = new File(["node", "--print", "require.resolve('hermes-compiler/package.json', { paths: [require.resolve('react-native/package.json')] })"].execute(null, rootDir).text.trim()).getParentFile().getAbsolutePath() + "/hermesc/%OS-BIN%/hermesc"
  codegenDir = new File(["node", "--print", "require.resolve('@react-native/codegen/package.json', { paths: [require.resolve('react-native/package.json')] })"].execute(null, rootDir).text.trim()).getParentFile().getAbsoluteFile()
  enableBundleCompression = (findProperty('android.enableBundleCompression') ?: false).toBoolean()
```

[android/app/src/main/AndroidManifest.xmlMODIFIED](#androidappsrcmainandroidmanifestxml)

```diff
- 
- 
+ 
+ 
  
  
  
  
- 
+
```

[android/app/src/main/java/com/helloworld/MainApplication.ktMODIFIED](#androidappsrcmainjavacomhelloworldmainapplicationkt)

```diff
import com.facebook.react.PackageList
  import com.facebook.react.ReactApplication
  import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
- import com.facebook.react.ReactNativeHost
  import com.facebook.react.ReactPackage
  import com.facebook.react.ReactHost
  import com.facebook.react.common.ReleaseLevel
  import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint
- import com.facebook.react.defaults.DefaultReactNativeHost
  import expo.modules.ApplicationLifecycleDispatcher
- import expo.modules.ReactNativeHostWrapper
+ import expo.modules.ExpoReactHostFactory
  class MainApplication : Application(), ReactApplication {
- override val reactNativeHost: ReactNativeHost = ReactNativeHostWrapper(
- this,
- object : DefaultReactNativeHost(this) {
- override fun getPackages(): List =
- PackageList(this).packages.apply {
- // Packages that cannot be autolinked yet can be added manually here, for example:
- // add(MyReactNativePackage())
- }
- override fun getJSMainModuleName(): String = ".expo/.virtual-metro-entry"
- override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG
- override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
- }
- )
- override val reactHost: ReactHost
- get() = ReactNativeHostWrapper.createReactHost(applicationContext, reactNativeHost)
+ override val reactHost: ReactHost by lazy {
+ ExpoReactHostFactory.getDefaultReactHost(
+ context = applicationContext,
+ packageList =
+ PackageList(this).packages.apply {
+ // Packages that cannot be autolinked yet can be added manually here, for example:
+ // add(MyReactNativePackage())
+ }
+ )
+ }
  override fun onCreate() {
  super.onCreate()
```

[android/gradle/wrapper/gradle-wrapper.propertiesMODIFIED](#androidgradlewrappergradle-wrapperproperties)

```diff
distributionBase=GRADLE_USER_HOME
  distributionPath=wrapper/dists
- distributionUrl=https\://services.gradle.org/distributions/gradle-8.14.3-bin.zip
+ distributionUrl=https\://services.gradle.org/distributions/gradle-9.0.0-bin.zip
  networkTimeout=10000
  validateDistributionUrl=true
  zipStoreBase=GRADLE_USER_HOME
```

[android/gradlewMODIFIED](#androidgradlew)

```diff
#!/bin/sh
  #
- # Copyright © 2015-2021 the original authors.
+ # Copyright © 2015 the original authors.
  #
  # Licensed under the Apache License, Version 2.0 (the "License");
  # you may not use this file except in compliance with the License.
```

[ios/HelloWorld/AppDelegate.swiftMODIFIED](#ioshelloworldappdelegateswift)

```diff
- import Expo
+ internal import Expo
  import React
  import ReactAppDependencyProvider
- @UIApplicationMain
- public class AppDelegate: ExpoAppDelegate {
+ @main
+ class AppDelegate: ExpoAppDelegate {
  var window: UIWindow?
  var reactNativeDelegate: ExpoReactNativeFactoryDelegate?
  reactNativeDelegate = delegate
  reactNativeFactory = factory
- bindReactNativeFactory(factory)
  #if os(iOS) || os(tvOS)
  window = UIWindow(frame: UIScreen.main.bounds)
```

[ios/PodfileMODIFIED](#iospodfile)

```diff
def ccache_enabled?(podfile_properties)
  # Environment variable takes precedence
  return ENV['USE_CCACHE'] == '1' if ENV['USE_CCACHE']
  # Fall back to Podfile properties
  podfile_properties['apple.ccacheEnabled'] == 'true'
  end
- ENV['RCT_NEW_ARCH_ENABLED'] ||= '0' if podfile_properties['newArchEnabled'] == 'false'
  ENV['EX_DEV_CLIENT_NETWORK_INSPECTOR'] ||= podfile_properties['EX_DEV_CLIENT_NETWORK_INSPECTOR']
- ENV['RCT_USE_RN_DEP'] ||= '1' if podfile_properties['ios.buildReactNativeFromSource'] != 'true' && podfile_properties['newArchEnabled'] != 'false'
- ENV['RCT_USE_PREBUILT_RNCORE'] ||= '1' if podfile_properties['ios.buildReactNativeFromSource'] != 'true' && podfile_properties['newArchEnabled'] != 'false'
+ ENV['RCT_USE_RN_DEP'] ||= '1' if podfile_properties['ios.buildReactNativeFromSource'] != 'true'
+ ENV['RCT_USE_PREBUILT_RNCORE'] ||= '1' if podfile_properties['ios.buildReactNativeFromSource'] != 'true'
+ ENV['RCT_HERMES_V1_ENABLED'] ||= '1' if podfile_properties['expo.useHermesV1'] == 'true'
  platform :ios, podfile_properties['ios.deploymentTarget'] || '15.1'
  prepare_react_native_project!
```

[package.jsonMODIFIED](#packagejson)

```diff
"name": "expo-template-bare-minimum",
  "description": "This bare project template includes a minimal setup for using unimodules with React Native.",
  "license": "0BSD",
- "version": "54.0.50",
+ "version": "55.0.8",
  "main": "index.js",
  "scripts": {
  "start": "expo start --dev-client",
  "web": "expo start --web"
  },
  "dependencies": {
- "expo": "~54.0.33",
- "expo-status-bar": "~3.0.9",
- "react": "19.1.0",
- "react-native": "0.81.5"
+ "expo": "~55.0.0-preview.9",
+ "expo-status-bar": "~55.0.2",
+ "react": "19.2.0",
+ "react-native": "0.83.1"
  }
  }
```

***

# Integrating Expo tools into existing native apps
