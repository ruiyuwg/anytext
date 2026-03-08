# iOS app

yarn example ios

```

When all steps above are done, you will be able to continue with [Android Native Modules](/docs/legacy/native-modules-android.md) or [iOS Native Modules](/docs/legacy/native-modules-ios.md) guides to add in some code.


---

# Using Libraries

React Native provides a set of built-in [Core Components and APIs](/docs/components-and-apis.md) ready to use in your app. You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If the Core Components and APIs don't have what you are looking for, you may be able to find and install a library from the community to add the functionality to your app.

## Selecting a Package Manager[​](#selecting-a-package-manager "Direct link to Selecting a Package Manager")

React Native libraries are typically installed from the [npm registry](https://www.npmjs.com/) using a Node.js package manager such as [npm CLI](https://docs.npmjs.com/cli/npm) or [Yarn Classic](https://classic.yarnpkg.com/en/).

If you have Node.js installed on your computer then you already have the npm CLI installed. Some developers prefer to use Yarn Classic for slightly faster install times and additional advanced features like Workspaces. Both tools work great with React Native. We will assume npm for the rest of this guide for simplicity of explanation.

note

The terms "library" and "package" are used interchangeably in the JavaScript community.

## Installing a Library[​](#installing-a-library "Direct link to Installing a Library")

To install a library in your project, navigate to your project directory in your terminal and run the installation command. Let's try this with `react-native-webview`:

* npm
* Yarn

shell

```

npm install react-native-webview

```

shell

```

yarn add react-native-webview

```

The library that we installed includes native code, and we need to link to our app before we use it.

## Linking Native Code on iOS[​](#linking-native-code-on-ios "Direct link to Linking Native Code on iOS")

React Native uses CocoaPods to manage iOS project dependencies and most React Native libraries follow this same convention. If a library you are using does not, then please refer to their README for additional instruction. In most cases, the following instructions will apply.

Run `pod install` in our `ios` directory in order to link it to our native iOS project. A shortcut for doing this without switching to the `ios` directory is to run `npx pod-install`.

bash

```

npx pod-install

```

Once this is complete, re-build the app binary to start using your new library:

* npm
* Yarn

shell

```

npm run ios

```

shell

```

yarn ios

```

## Linking Native Code on Android[​](#linking-native-code-on-android "Direct link to Linking Native Code on Android")

React Native uses Gradle to manage Android project dependencies. After you install a library with native dependencies, you will need to re-build the app binary to use your new library:

* npm
* Yarn

shell

```

npm run android

```

shell

```

yarn android

```

## Finding Libraries[​](#finding-libraries "Direct link to Finding Libraries")

[React Native Directory](https://reactnative.directory) is a searchable database of libraries built specifically for React Native. This is the first place to look for a library for your React Native app.

Many of the libraries you will find on the directory are from [React Native Community](https://github.com/react-native-community/) or [Expo](https://docs.expo.dev/versions/latest/).

Libraries built by the React Native Community are driven by volunteers and individuals at companies that depend on React Native. They often support iOS, tvOS, Android, Windows, but this varies across projects. Many of the libraries in this organization were once React Native Core Components and APIs.

Libraries built by Expo are all written in TypeScript and support iOS, Android, and `react-native-web` wherever possible.

After React Native Directory, the [npm registry](https://www.npmjs.com/) is the next best place if you can't find a library specifically for React Native on the directory. The npm registry is the definitive source for JavaScript libraries, but the libraries that it lists may not all be compatible with React Native. React Native is one of many JavaScript programming environments, including Node.js, web browsers, Electron, and more, and npm includes libraries that work for all of these environments.

## Determining Library Compatibility[​](#determining-library-compatibility "Direct link to Determining Library Compatibility")

### Does it work with React Native?[​](#does-it-work-with-react-native "Direct link to Does it work with React Native?")

Usually libraries built *specifically for other platforms* will not work with React Native. Examples include `react-select` which is built for the web and specifically targets `react-dom`, and `rimraf` which is built for Node.js and interacts with your computer file system. Other libraries like `lodash` use only JavaScript language features and work in any environment. You will gain a sense for this over time, but until then the easiest way to find out is to try it yourself. You can remove packages using `npm uninstall` if it turns out that it does not work in React Native.

### Does it work for the platforms that my app supports?[​](#does-it-work-for-the-platforms-that-my-app-supports "Direct link to Does it work for the platforms that my app supports?")

[React Native Directory](https://reactnative.directory) allows you to filter by platform compatibility, such as iOS, Android, Web, and Windows. If the library you would like to use is not currently listed there, refer to the README for the library to learn more.

### Does it work with my app version of React Native?[​](#does-it-work-with-my-app-version-of-react-native "Direct link to Does it work with my app version of React Native?")

The latest version of a library is typically compatible with the latest version of React Native. If you are using an older version, you should refer to the README to know which version of the library you should install. You can install a particular version of the library by running `npm install <library-name>@<version-number>`, for example: `npm install @react-native-community/netinfo@^2.0.0`.


---

# Linking

`Linking` gives you a general interface to interact with both incoming and outgoing app links.

Every Link (URL) has a URL Scheme, some websites are prefixed with `https://` or `http://` and the `http` is the URL Scheme. Let's call it scheme for short.

In addition to `https`, you're likely also familiar with the `mailto` scheme. When you open a link with the mailto scheme, your operating system will open an installed mail application. Similarly, there are schemes for making phone calls and sending SMS. Read more about [built-in URL](#built-in-url-schemes) schemes below.

Like using the mailto scheme, it's possible to link to other applications by using custom url schemes. For example, when you get a **Magic Link** email from Slack, the **Launch Slack** button is an anchor tag with an href that looks something like: `slack://secret/magic-login/other-secret`. Like with Slack, you can tell the operating system that you want to handle a custom scheme. When the Slack app opens, it receives the URL that was used to open it. This is often referred to as deep linking. Read more about how to [get the deep link](#get-the-deep-link) into your app.

A custom URL scheme isn't the only way to open your application on mobile. For example, if you want to email someone a link to be opened on mobile, using a custom URL scheme isn't ideal because the user might open the email on a desktop, where the link wouldn't work. Instead, you should use standard `https` links, such as `https://www.myapp.io/records/1234546`. On mobile, these links can be configured to open your app. On Android, this feature is called **Deep Links**, while on iOS, it is known as **Universal Links**.

### Built-in URL Schemes[​](#built-in-url-schemes "Direct link to Built-in URL Schemes")

As mentioned in the introduction, there are some URL schemes for core functionality that exist on every platform. The following is a non-exhaustive list, but covers the most commonly used schemes.

| Scheme           | Description                                  | iOS | Android |
| ---------------- | -------------------------------------------- | --- | ------- |
| `mailto`         | Open mail app, eg: mailto: <hello@world.dev> | ✅  | ✅      |
| `tel`            | Open phone app, eg: tel:+123456789           | ✅  | ✅      |
| `sms`            | Open SMS app, eg: sms:+123456789             | ✅  | ✅      |
| `https` / `http` | Open web browser app, eg: <https://expo.dev> | ✅  | ✅      |

### Enabling Deep Links[​](#enabling-deep-links "Direct link to Enabling Deep Links")

### Projects with Native Code Only

The following section only applies to projects with native code exposed. If you are using the managed Expo workflow, see the guide on [Linking](https://docs.expo.dev/guides/linking/) in the Expo documentation for the appropriate alternative.

If you want to enable deep links in your app, please read the below guide:

* Android
* iOS

info

For instructions on how to add support for deep linking on Android, refer to [Enabling Deep Links for App Content - Add Intent Filters for Your Deep Links](https://developer.android.com/training/app-indexing/deep-linking.html#adding-filters).

If you wish to receive the intent in an existing instance of MainActivity, you may set the `launchMode` of MainActivity to `singleTask` in `AndroidManifest.xml`. See [`<activity>`](https://developer.android.com/guide/topics/manifest/activity-element.html) documentation for more information.

xml

```

<activity
android:name=".MainActivity"
android:launchMode="singleTask">

```

note

On iOS, you'll need to add the `LinkingIOS` folder into your header search paths as described in step 3 [here](/docs/linking-libraries-ios.md#step-3). If you also want to listen to incoming app links during your app's execution, you'll need to add the following lines to your `*AppDelegate.m`:

* ObjectiveC
* Swift

AppDelegate.mm

```

// iOS 9.x or newer
\#import \<React/RCTLinkingManager.h>

- (BOOL)application:(UIApplication \*)application
  openURL:(NSURL \*)url
  options:(NSDictionary\<UIApplicationOpenURLOptionsKey,id> \*)options
  {
  return \[RCTLinkingManager application:application openURL:url options:options];
  }

```

If your app is using [Universal Links](https://developer.apple.com/ios/universal-links/), you'll need to add the following code as well:

AppDelegate.mm

```

- (BOOL)application:(UIApplication \*)application continueUserActivity:(nonnull NSUserActivity \*)userActivity
  restorationHandler:(nonnull void (^)(NSArray<id> \* \_Nullable))restorationHandler
  {
  return \[RCTLinkingManager application:application
  continueUserActivity:userActivity
  restorationHandler:restorationHandler];
  }

```

AppDelegate.swift

```

override func application(\_ app: UIApplication, open url: URL, options: \[UIApplication.OpenURLOptionsKey : Any] = \[:]) -> Bool {
return RCTLinkingManager.application(app, open: url, options: options)
}

```

If your app is using [Universal Links](https://developer.apple.com/ios/universal-links/), you'll need to add the following code as well:

AppDelegate.swift

```

override func application(
\_ application: UIApplication,
continue userActivity: NSUserActivity,
restorationHandler: @escaping (\[UIUserActivityRestoring]?) -> Void) -> Bool {
return RCTLinkingManager.application(
application,
continue: userActivity,
restorationHandler: restorationHandler
)
}

```

### Handling Deep Links[​](#handling-deep-links "Direct link to Handling Deep Links")

There are two ways to handle URLs that open your app.

#### 1. If the app is already open, the app is foregrounded and a Linking 'url' event is fired[​](#1-if-the-app-is-already-open-the-app-is-foregrounded-and-a-linking-url-event-is-fired "Direct link to 1. If the app is already open, the app is foregrounded and a Linking 'url' event is fired")

You can handle these events with `Linking.addEventListener('url', callback)` - it calls `callback({url})` with the linked URL

#### 2. If the app is not already open, it is opened and the url is passed in as the initialURL[​](#2-if-the-app-is-not-already-open-it-is-opened-and-the-url-is-passed-in-as-the-initialurl "Direct link to 2. If the app is not already open, it is opened and the url is passed in as the initialURL")

You can handle these events with `Linking.getInitialURL()` - it returns a Promise that resolves to the URL, if there is one.

***

## Example[​](#example "Direct link to Example")

### Open Links and Deep Links (Universal Links)[​](#open-links-and-deep-links-universal-links "Direct link to Open Links and Deep Links (Universal Links)")

* TypeScript
* JavaScript

### Open Custom Settings[​](#open-custom-settings "Direct link to Open Custom Settings")

* TypeScript
* JavaScript

### Get the Deep Link[​](#get-the-deep-link "Direct link to Get the Deep Link")

* TypeScript
* JavaScript

### Send Intents (Android)[​](#send-intents-android "Direct link to Send Intents (Android)")

* TypeScript
* JavaScript

# Reference

## Methods[​](#methods "Direct link to Methods")

### `addEventListener()`[​](#addeventlistener "Direct link to addeventlistener")

tsx

```

static addEventListener(
type: 'url',
handler: (event: {url: string}) => void,
): EmitterSubscription;

```

Add a handler to Linking changes by listening to the `url` event type and providing the handler.

***

### `canOpenURL()`[​](#canopenurl "Direct link to canopenurl")

tsx

```

static canOpenURL(url: string): Promise;

```

Determine whether or not an installed app can handle a given URL.

The method returns a `Promise` object. When it is determined whether or not the given URL can be handled, the promise is resolved and the first parameter is whether or not it can be opened.

The `Promise` will reject on Android if it was impossible to check if the URL can be opened or when targeting Android 11 (SDK 30) if you didn't specify the relevant intent queries in `AndroidManifest.xml`. Similarly on iOS, the promise will reject if you didn't add the specific scheme in the `LSApplicationQueriesSchemes` key inside `Info.plist` (see bellow).

**Parameters:**

| Name        | Type   | Description      |
| ----------- | ------ | ---------------- |
| urlRequired | string | The URL to open. |

note

For web URLs, the protocol (`"http://"`, `"https://"`) must be set accordingly!

warning

This method has limitations on iOS 9+. From [the official Apple documentation](https://developer.apple.com/documentation/uikit/uiapplication/1622952-canopenurl):

* If your app is linked against an earlier version of iOS but is running in iOS 9.0 or later, you can call this method up to 50 times. After reaching that limit, subsequent calls always resolve to `false`. If the user reinstalls or upgrades the app, iOS resets the limit.
* As of iOS 9, your app also needs to provide the `LSApplicationQueriesSchemes` key inside `Info.plist` or `canOpenURL()` will always resolve to `false`.

info

When targeting Android 11 (SDK 30) you must specify the intents for the schemes you want to handle in `AndroidManifest.xml`. A list of common intents can be found [here](https://developer.android.com/guide/components/intents-common).

For example to handle `https` schemes the following needs to be added to your manifest:

```

```

***

### `getInitialURL()`[​](#getinitialurl "Direct link to getinitialurl")

tsx

```

static getInitialURL(): Promise;

```

If the app launch was triggered by an app link, it will give the link url, otherwise it will give `null`.

info

To support deep linking on Android, refer <https://developer.android.com/training/app-indexing/deep-linking.html#handling-intents>.

tip

`getInitialURL` may return `null` when Remote JS Debugging is active. Disable the debugger to ensure it gets passed.

***

### `openSettings()`[​](#opensettings "Direct link to opensettings")

tsx

```

static openSettings(): Promise;

```

Open the Settings app and displays the app’s custom settings, if it has any.

***

### `openURL()`[​](#openurl "Direct link to openurl")

tsx

```

static openURL(url: string): Promise;

```

Try to open the given `url` with any of the installed apps.

You can use other URLs, like a location (e.g. "geo:37.484847,-122.148386" on Android or "<https://maps.apple.com/?ll=37.484847,-122.148386>" on iOS), a contact, or any other URL that can be opened with the installed apps.

The method returns a `Promise` object. If the user confirms the open dialog or the url automatically opens, the promise is resolved. If the user cancels the open dialog or there are no registered applications for the url, the promise is rejected.

**Parameters:**

| Name        | Type   | Description      |
| ----------- | ------ | ---------------- |
| urlRequired | string | The URL to open. |

note

This method will fail if the system doesn't know how to open the specified URL. If you're passing in a non-http(s) URL, it's best to check `canOpenURL()` first. For web URLs, the protocol (`"http://"`, `"https://"`) must be set accordingly!

warning

This method may behave differently in a simulator e.g. `"tel:"` links are not able to be handled in the iOS simulator as there's no access to the dialer app.

***

### `sendIntent()`Android[​](#sendintent-android "Direct link to sendintent-android")

tsx

```

static sendIntent(
action: string,
extras?: Array<{key: string; value: string | number | boolean}>,
): Promise;

```

Launch an Android intent with extras.

**Parameters:**

| Name           | Type                                                       |
| -------------- | ---------------------------------------------------------- |
| actionRequired | string                                                     |
| extras         | `Array<{key: string, value: string ｜ number ｜ boolean}>` |


---

# Linking Libraries

Not every app uses all the native capabilities, and including the code to support all those features would impact the binary size... But we still want to support adding these features whenever you need them.

With that in mind we exposed many of these features as independent static libraries.

For most of the libs it will be as quick as dragging two files, sometimes a third step will be necessary, but no more than that.

note

All the libraries we ship with React Native live in the `Libraries` folder in the root of the repository. Some of them are pure JavaScript, and you only need to `require` it. Other libraries also rely on some native code, in that case you'll have to add these files to your app, otherwise the app will throw an error as soon as you try to use the library.

## Here are the few steps to link your libraries that contain native code[​](#here-are-the-few-steps-to-link-your-libraries-that-contain-native-code "Direct link to Here are the few steps to link your libraries that contain native code")

### Automatic linking[​](#automatic-linking "Direct link to Automatic linking")

Install a library with native dependencies:

shell

```

npm install <library-with-native-dependencies> --save

```

info

`--save` or `--save-dev` flag is very important for this step. React Native will link your libs based on `dependencies` and `devDependencies` in your `package.json` file.

That's it! Next time you build your app the native code will be linked thanks to the [autolinking](https://github.com/react-native-community/cli/blob/main/docs/autolinking.md) mechanism.

### Manual linking[​](#manual-linking "Direct link to Manual linking")

#### Step 1[​](#step-1 "Direct link to Step 1")

If the library has native code, there must be an `.xcodeproj` file inside its folder. Drag this file to your project on Xcode (usually under the `Libraries` group on Xcode);

![](/assets/images/AddToLibraries-92a6a7f58c75a8344d9bbeeae4ac167b.png)

#### Step 2[​](#step-2 "Direct link to Step 2")

Click on your main project file (the one that represents the `.xcodeproj`) select `Build Phases` and drag the static library from the `Products` folder inside the Library you are importing to `Link Binary With Libraries`

![](/assets/images/AddToBuildPhases-3e79422ff24780db618eae2d7a5ea604.png)

#### Step 3[​](#step-3 "Direct link to Step 3")

Not every library will need this step, what you need to consider is:

*Do I need to know the contents of the library at compile time?*

What that means is, are you using this library on the native side or only in JavaScript? If you are only using it in JavaScript, you are good to go!

If you do need to call it from native, then we need to know the library's headers. To achieve that you have to go to your project's file, select `Build Settings` and search for `Header Search Paths`. There you should include the path to your library. (This documentation used to recommend using `recursive`, but this is no longer recommended, as it can cause subtle build failures, especially with CocoaPods.)

![](/assets/images/AddToSearchPaths-721692ba7f3a91a1f4e4f73e7d88f2ca.png)


---

# Metro

React Native uses [Metro](https://metrobundler.dev/) to build your JavaScript code and assets.

## Configuring Metro[​](#configuring-metro "Direct link to Configuring Metro")

Configuration options for Metro can be customized in your project's `metro.config.js` file. This can export either:

* **An object (recommended)** that will be merged on top of Metro's internal config defaults.
* [**A function**](#advanced-using-a-config-function) that will be called with Metro's internal config defaults and should return a final config object.

tip

Please see [**Configuring Metro**](https://metrobundler.dev/docs/configuration) on the Metro website for documentation on all available config options.

In React Native, your Metro config should extend either [`@react-native/metro-config`](https://www.npmjs.com/package/@react-native/metro-config) or [`@expo/metro-config`](https://www.npmjs.com/package/@expo/metro-config). These packages contain essential defaults necessary to build and run React Native apps.

Below is the default `metro.config.js` file in a React Native template project:

js

```

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/\*\*

- Metro configuration
- https://metrobundler.dev/docs/configuration
-
- @type {import('metro-config').MetroConfig}
  \*/
  const config = {};

module.exports = mergeConfig(getDefaultConfig(\_\_dirname), config);

```

Metro options you wish to customize can be done so within the `config` object.

### Advanced: Using a config function[​](#advanced-using-a-config-function "Direct link to Advanced: Using a config function")

Exporting a config function is an opt-in to managing the final config yourself — **Metro will not apply any internal defaults**. This pattern can be useful when needing to read the base default config object from Metro or to set options dynamically.

info

**From `@react-native/metro-config` 0.72.1**, it is no longer necessary to use a config function to access the complete default config. See the **Tip** section below.

js

```

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

module.exports = function (baseConfig) {
const defaultConfig = mergeConfig(baseConfig, getDefaultConfig(\_\_dirname));
const {resolver: {assetExts, sourceExts}} = defaultConfig;

return mergeConfig(
defaultConfig,
{
resolver: {
assetExts: assetExts.filter(ext => ext !== 'svg'),
sourceExts: \[...sourceExts, 'svg'],
},
},
);
};

```

tip

Using a config function is for advanced use cases. A simpler method than the above, e.g. for customising `sourceExts`, would be to read these defaults from `@react-native/metro-config`.

**Alternative**

js

```

const defaultConfig = getDefaultConfig(\_\_dirname);

const config = {
resolver: {
sourceExts: \[...defaultConfig.resolver.sourceExts, 'svg'],
},
};

module.exports = mergeConfig(defaultConfig, config);

```

**However!**, we recommend copying and editing when overriding these config values — placing the source of truth in your config file.

✅ **Recommended**

js

```

const config = {
resolver: {
sourceExts: \['js', 'ts', 'tsx', 'svg'],
},
};

```

## Learn more about Metro[​](#learn-more-about-metro "Direct link to Learn more about Metro")

* [Metro website](https://metrobundler.dev/)
* [Video: "Metro & React Native DevX" talk at App.js 2023](https://www.youtube.com/watch?v=c9D4pg0y9cI)


---

# Modal

The Modal component is a basic way to present content above an enclosing view.

## Example[​](#example "Direct link to Example")

***

# Reference

## Props[​](#props "Direct link to Props")

### [View Props](/docs/view.md#props)[​](#view-props "Direct link to view-props")

Inherits [View Props](/docs/view.md#props).

***

### 🗑️ `animated`[​](#️-animated "Direct link to ️-animated")

Deprecated

Use the [`animationType`](/docs/modal.md#animationtype) prop instead.

***

### `animationType`[​](#animationtype "Direct link to animationtype")

The `animationType` prop controls how the modal animates.

Possible values:

* `slide` slides in from the bottom
* `fade` fades into view
* `none` appears without an animation

| Type                                | Default |
| ----------------------------------- | ------- |
| enum(`'none'`, `'slide'`, `'fade'`) | `none`  |

***

### `backdropColor`[​](#backdropcolor "Direct link to backdropcolor")

The `backdropColor` of the modal (or background color of the modal's container.) Defaults to `white` if not provided and transparent is `false`. Ignored if `transparent` is `true`.

| Type                     | Default |
| ------------------------ | ------- |
| [color](/docs/colors.md) | white   |

***

### `hardwareAccelerated`Android[​](#hardwareaccelerated-android "Direct link to hardwareaccelerated-android")

The `hardwareAccelerated` prop controls whether to force hardware acceleration for the underlying window.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `navigationBarTranslucent`Android[​](#navigationbartranslucent-android "Direct link to navigationbartranslucent-android")

The `navigationBarTranslucent` prop determines whether your modal should go under the system navigation bar. However, `statusBarTranslucent` also needs to be set to `true` to make navigation bar translucent.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `onDismiss`iOS[​](#ondismiss-ios "Direct link to ondismiss-ios")

The `onDismiss` prop allows passing a function that will be called once the modal has been dismissed.

| Type     |
| -------- |
| function |

***

### `onOrientationChange`iOS[​](#onorientationchange-ios "Direct link to onorientationchange-ios")

The `onOrientationChange` callback is called when the orientation changes while the modal is being displayed. The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation.

| Type     |
| -------- |
| function |

***

### `allowSwipeDismissal`iOS[​](#allowswipedismissal-ios "Direct link to allowswipedismissal-ios")

Controls whether the modal can be dismissed by swiping down on iOS. This requires you to implement the `onRequestClose` prop to handle the dismissal.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `ref`[​](#ref "Direct link to ref")

A ref setter that will be assigned an [element node](/docs/element-nodes.md) when mounted.

***

### `onRequestClose`[​](#onrequestclose "Direct link to onrequestclose")

The `onRequestClose` callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that `BackHandler` events will not be emitted as long as the modal is open. On iOS, this callback is called when a Modal is being dismissed using a drag gesture when `presentationStyle` is `pageSheet or formSheet`. When `allowSwipeDismissal` is enabled this callback will be called after dismissing the modal.

| Type                                    |
| --------------------------------------- |
| functionRequiredAndroidTV***functioniOS |

***

### `onShow`[​](#onshow "Direct link to onshow")

The `onShow` prop allows passing a function that will be called once the modal has been shown.

| Type     |
| -------- |
| function |

***

### `presentationStyle`iOS[​](#presentationstyle-ios "Direct link to presentationstyle-ios")

The `presentationStyle` prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). See <https://developer.apple.com/reference/uikit/uimodalpresentationstyle> for details.

Possible values:

* `fullScreen` covers the screen completely
* `pageSheet` covers portrait-width view centered (only on larger devices)
* `formSheet` covers narrow-width view centered (only on larger devices)
* `overFullScreen` covers the screen completely, but allows transparency

| Type                                                                   | Default                                                                          |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| enum(`'fullScreen'`, `'pageSheet'`, `'formSheet'`, `'overFullScreen'`) | `fullScreen` if `transparent={false}`***`overFullScreen` if `transparent={true}` |

***

### `statusBarTranslucent`Android[​](#statusbartranslucent-android "Direct link to statusbartranslucent-android")

The `statusBarTranslucent` prop determines whether your modal should go under the system statusbar.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `supportedOrientations`iOS[​](#supportedorientations-ios "Direct link to supportedorientations-ios")

The `supportedOrientations` prop allows the modal to be rotated to any of the specified orientations. On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field.

note

When using `presentationStyle` of `pageSheet` or `formSheet`, this property will be ignored on iOS.

| Type                                                                                                           | Default        |
| -------------------------------------------------------------------------------------------------------------- | -------------- |
| array of enums(`'portrait'`, `'portrait-upside-down'`, `'landscape'`, `'landscape-left'`, `'landscape-right'`) | `['portrait']` |

***

### `transparent`[​](#transparent "Direct link to transparent")

The `transparent` prop determines whether your modal will fill the entire view. Setting this to `true` will render the modal over a transparent background.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `visible`[​](#visible "Direct link to visible")

The `visible` prop determines whether your modal is visible.

| Type | Default |
| ---- | ------- |
| bool | `true`  |


---

# More Resources

There’s always more to learn: developer workflows, shipping to app stores, internationalization, security and more.

## Where to go from here[​](#where-to-go-from-here "Direct link to Where to go from here")

* [Set up your environment](/docs/environment-setup.md)
* [Set up your development workflow](/docs/running-on-device.md)
* [Design and layout your app](/docs/flexbox.md)
* [Debug your app](/docs/debugging.md)
* [Make your app cross platform](/docs/platform-specific-code.md)
* [Get involved in the React Native community](/community/overview.md)

## Dive deep[​](#dive-deep "Direct link to Dive deep")

* [React’s Documentation](https://react.dev/learn)
* [MDN’s JavaScript tutorials, reference, and guides](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Android](https://developer.android.com/docs) and [iOS](https://developer.apple.com/documentation/uikit) platform docs

## IDEs[​](#ides "Direct link to IDEs")

We recommend using the [VS Code](https://code.visualstudio.com/) code editor and its handy [React Native tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native).

## Platforms to try[​](#platforms-to-try "Direct link to Platforms to try")

[Expo](https://docs.expo.dev/) is a framework of tools and services for React Native that focuses on helping you build, ship, and iterate on your app, to use preview deployment workflows that are popular with web development, and to automate your development workflows. Expo also makes it possible to build React Native apps without ever touching Xcode or Android Studio, and it doesn't get in the way if you want to use those tools.

[Ignite](https://github.com/infinitered/ignite) is a starter kit CLI with several React Native boilerplates. The latest, Ignite Maverick, uses MobX-State-Tree for state management, React Navigation, and other common libraries. It has generators for screens, models, and more, and supports Expo out of the box. Ignite also comes with a component library that is tuned for custom designs, theming support, and testing. If you are looking for a preconfigured tech stack, Ignite could be perfect for you.

## Example Apps[​](#example-apps "Direct link to Example Apps")

Try out apps from the [Showcase](https://reactnative.dev/showcase) to see what React Native is capable of! Looking for something more hands on? Check out this [set of example apps on GitHub](https://github.com/ReactNativeNews/React-Native-Apps). You can look at their source code—try running one on a simulator or device.

## Find, make, and share your own Native Components and TurboModules[​](#find-make-and-share-your-own-native-components-and-turbomodules "Direct link to Find, make, and share your own Native Components and TurboModules")

React Native has a community of thousands of developers like you making content, tools, tutorials—and Native Components!

Can’t find what you’re looking for in the Core Components? Visit [React Native Directory](https://reactnative.directory) to find what the community has been creating.

caution

This documentation references a legacy set of API and needs to be updated to reflect the New Architecture

Interested in making your own Native Component or Module? Making modules for your own use case and sharing them with others on NPM and GitHub helps grow the React Native ecosystem and community! Read the guides to making your own Native Modules ([Android](/docs/legacy/native-modules-android.md), [iOS](/docs/legacy/native-modules-ios.md)) and Native Components ([Android](/docs/legacy/native-components-android.md), [iOS](/docs/legacy/native-components-ios.md)).


---

# Native Platform

Your application may need access to platform features that aren’t directly available from react-native or one of the hundreds of [third-party libraries](https://reactnative.directory/) maintained by the community. Maybe you want to reuse some existing Objective-C, Swift, Java, Kotlin or C++ code from the JavaScript runtime. Whatever your reason, React Native exposes a powerful set of API to connect your native code to your JavaScript application code.

This guide introduces:

* **Native Modules:** native libraries that have no User Interface (UI) for the user. Examples would be persistent storage, notifications, network events. These are accessible to your user as JavaScript functions and objects.
* **Native Component:** native platform views, widgets and controllers that are available to your application's JavaScript code through React Components.

note

You might have previously been familiar with:

* [Legacy Native Modules](/docs/legacy/native-modules-intro.md);
* [Legacy Native Components](/docs/legacy/native-components-android.md);

These are our deprecated native module and component API. You can still use many of these legacy libraries with the New Architecture thanks to our interop layers. You should consider:

* using alternative libraries,
* upgrading to newer library versions that have first-class support for the New Architecture, or
* port these libraries yourself to Turbo Native Modules or Fabric Native Components.

1. Native Modules

   <!-- -->

   * [Android & iOS](/docs/turbo-native-modules-introduction.md)
   * [Cross-Platform with C++](/docs/the-new-architecture/pure-cxx-modules.md)
   * [Advanced: Custom C++ Types](/docs/the-new-architecture/custom-cxx-types.md)

2. Fabric Native Components
   <!-- -->
   * [Android & iOS](/docs/fabric-native-components-introduction.md)


---

# Navigating Between Screens

Mobile apps are rarely made up of a single screen. Managing the presentation of, and transition between, multiple screens is typically handled by what is known as a navigator.

This guide covers the various navigation components available in React Native. If you are getting started with navigation, you will probably want to use [React Navigation](/docs/navigation.md#react-navigation). React Navigation provides a straightforward navigation solution, with the ability to present common stack navigation and tabbed navigation patterns on both Android and iOS.

If you're integrating React Native into an app that already manages navigation natively, or looking for an alternative to React Navigation, the following library provides native navigation on both platforms: [react-native-navigation](https://github.com/wix/react-native-navigation).

## React Navigation[​](#react-navigation "Direct link to React Navigation")

The community solution to navigation is a standalone library that allows developers to set up the screens of an app with a few lines of code.

### Starter template[​](#starter-template "Direct link to Starter template")

If you're starting a new project, you can use the React Navigation template to quickly set up a new project with [Expo](https://expo.dev/):

shell

```

npx create-expo-app@latest --template react-navigation/template

```

See the project's `README.md` for more information on how to get started.

### Installation and setup[​](#installation-and-setup "Direct link to Installation and setup")

First, you need to install them in your project:

shell

```

npm install @react-navigation/native @react-navigation/native-stack

```

Next, install the required peer dependencies. You need to run different commands depending on whether your project is an Expo managed project or a bare React Native project.

* If you have an Expo managed project, install the dependencies with `expo`:

  shell

```

npx expo install react-native-screens react-native-safe-area-context

```

* If you have a bare React Native project, install the dependencies with `npm`:

shell

```

npm install react-native-screens react-native-safe-area-context

```

For iOS with bare React Native project, make sure you have [CocoaPods](https://cocoapods.org/) installed. Then install the pods to complete the installation:

shell

```

cd ios
pod install
cd ..

```

Once you've installed and configured the dependencies, you can move on to setting up your project to use React Navigation.

When using React Navigation, you configure [navigators](https://reactnavigation.org/docs/glossary-of-terms#navigator) in your app. Navigators handle the transition between screens in your app and provide UI such as header, tab bar etc.

Now you are ready to build and run your app on the device/simulator.

### Usage[​](#usage "Direct link to Usage")

Now you can create an app with a home screen and a profile screen:

tsx

```

import \* as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
screens: {
Home: {
screen: HomeScreen,
options: {title: 'Welcome'},
},
Profile: {
screen: ProfileScreen,
},
},
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
return ;
}

```

In this example, `RootStack` is a navigator with 2 screens (`Home` and `Profile`), defined in the `screens` property in `createNativeStackNavigator`. Similarly, you can define as many screens as you like.

You can specify options such as the screen title for each screen in the `options` property of each screen. Each screen definition also needs a `screen` property that is a React component or another navigator.

Inside each screen component, you can use the `useNavigation` hook to get the `navigation` object, which has various methods to link to other screens. For example, you can use `navigation.navigate` to go to the `Profile` screen:

tsx

```

import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
const navigation = useNavigation();

return (
\<Button
title="Go to Jane's profile"
onPress={() =>
navigation.navigate('Profile', {name: 'Jane'})
}
/>
);
}

function ProfileScreen({route}) {
return This is {route.params.name}'s profile;
}

```

This `native-stack` navigator uses the native APIs: `UINavigationController` on iOS and `Fragment` on Android so that navigation built with `createNativeStackNavigator` will behave the same and have the similar performance characteristics as apps built natively on top of those APIs.

React Navigation also has packages for different kind of navigators such as tabs and drawer. You can use them to implement various patterns in your app.

For a complete intro to React Navigation, follow the [React Navigation Getting Started Guide](https://reactnavigation.org/docs/getting-started).


---

# Networking

Many mobile apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server.

## Using Fetch[​](#using-fetch "Direct link to Using Fetch")

React Native provides the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for your networking needs. Fetch will seem familiar if you have used `XMLHttpRequest` or other networking APIs before. You may refer to MDN's guide on [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for additional information.

### Making requests[​](#making-requests "Direct link to Making requests")

In order to fetch content from an arbitrary URL, you can pass the URL to fetch:

tsx

```

fetch('https://mywebsite.com/mydata.json');

```

Fetch also takes an optional second argument that allows you to customize the HTTP request. You may want to specify additional headers, or make a POST request:

tsx

```

fetch('https://mywebsite.com/endpoint/', {
method: 'POST',
headers: {
Accept: 'application/json',
'Content-Type': 'application/json',
},
body: JSON.stringify({
firstParam: 'yourValue',
secondParam: 'yourOtherValue',
}),
});

```

Take a look at the [Fetch Request docs](https://developer.mozilla.org/en-US/docs/Web/API/Request) for a full list of properties.

### Handling the response[​](#handling-the-response "Direct link to Handling the response")

The above examples show how you can make a request. In many cases, you will want to do something with the response.

Networking is an inherently asynchronous operation. Fetch method will return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that makes it straightforward to write code that works in an asynchronous manner:

tsx

```

const getMoviesFromApi = () => {
return fetch('https://reactnative.dev/movies.json')
.then(response => response.json())
.then(json => {
return json.movies;
})
.catch(error => {
console.error(error);
});
};

```

You can also use the `async` / `await` syntax in a React Native app:

tsx

```

const getMoviesFromApiAsync = async () => {
try {
const response = await fetch(
'https://reactnative.dev/movies.json',
);
const json = await response.json();
return json.movies;
} catch (error) {
console.error(error);
}
};

```

Don't forget to catch any errors that may be thrown by `fetch`, otherwise they will be dropped silently.

* TypeScript
* JavaScript

info

By default, iOS 9.0 or later enforce App Transport Security (ATS). ATS requires any HTTP connection to use HTTPS. If you need to fetch from a cleartext URL (one that begins with `http`) you will first need to [add an ATS exception](/docs/integration-with-existing-apps.md#test-your-integration). If you know ahead of time what domains you will need access to, it is more secure to add exceptions only for those domains; if the domains are not known until runtime you can [disable ATS completely](/docs/publishing-to-app-store.md#1-enable-app-transport-security). Note however that from January 2017, [Apple's App Store review will require reasonable justification for disabling ATS](https://forums.developer.apple.com/thread/48979). See [Apple's documentation](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33) for more information.

tip

On Android, as of API Level 28, clear text traffic is also blocked by default. This behaviour can be overridden by setting [`android:usesCleartextTraffic`](https://developer.android.com/guide/topics/manifest/application-element#usesCleartextTraffic) in the app manifest file.

## Using Other Networking Libraries[​](#using-other-networking-libraries "Direct link to Using Other Networking Libraries")

The [XMLHttpRequest API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) is built into React Native. This means that you can use third party libraries such as [frisbee](https://github.com/niftylettuce/frisbee) or [axios](https://github.com/axios/axios) that depend on it, or you can use the XMLHttpRequest API directly if you prefer.

tsx

```

const request = new XMLHttpRequest();
request.onreadystatechange = e => {
if (request.readyState !== 4) {
return;
}

if (request.status === 200) {
console.log('success', request.responseText);
} else {
console.warn('error');
}
};

request.open('GET', 'https://mywebsite.com/endpoint/');
request.send();

```

Caution

The security model for XMLHttpRequest is different than on web as there is no concept of [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) in native apps.

## WebSocket Support[​](#websocket-support "Direct link to WebSocket Support")

React Native also supports [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket), a protocol which provides full-duplex communication channels over a single TCP connection.

tsx

```

const ws = new WebSocket('ws://host.com/path');

ws.onopen = () => {
// connection opened
ws.send('something'); // send a message
};

ws.onmessage = e => {
// a message was received
console.log(e.data);
};

ws.onerror = e => {
// an error occurred
console.log(e.message);
};

ws.onclose = e => {
// connection closed
console.log(e.code, e.reason);
};

```

## Known Issues with `fetch` and cookie based authentication[​](#known-issues-with-fetch-and-cookie-based-authentication "Direct link to known-issues-with-fetch-and-cookie-based-authentication")

The following options are currently not working with `fetch`

* `redirect:manual`
* `credentials:omit`

- Having same name headers on Android will result in only the latest one being present. A temporary solution can be found here: <https://github.com/facebook/react-native/issues/18837#issuecomment-398779994>.
- Cookie based authentication is currently unstable. You can view some of the issues raised here: <https://github.com/facebook/react-native/issues/23185>
- As a minimum on iOS, when redirected through a `302`, if a `Set-Cookie` header is present, the cookie is not set properly. Since the redirect cannot be handled manually this might cause a scenario where infinite requests occur if the redirect is the result of an expired session.

## Configuring NSURLSession on iOS[​](#configuring-nsurlsession-on-ios "Direct link to Configuring NSURLSession on iOS")

For some applications it may be appropriate to provide a custom `NSURLSessionConfiguration` for the underlying `NSURLSession` that is used for network requests in a React Native application running on iOS. For instance, one may need to set a custom user agent string for all network requests coming from the app or supply `NSURLSession` with an ephemeral `NSURLSessionConfiguration`. The function `RCTSetCustomNSURLSessionConfigurationProvider` allows for such customization. Remember to add the following import to the file in which `RCTSetCustomNSURLSessionConfigurationProvider` will be called:

objectivec

```

\#import \<React/RCTHTTPRequestHandler.h>

```

`RCTSetCustomNSURLSessionConfigurationProvider` should be called early in the application life cycle such that it is readily available when needed by React, for instance:

objectivec

```

-(void)application:(\_\_unused UIApplication \*)application didFinishLaunchingWithOptions:(NSDictionary \*)launchOptions {

// set RCTSetCustomNSURLSessionConfigurationProvider
RCTSetCustomNSURLSessionConfigurationProvider(^NSURLSessionConfiguration \*{
NSURLSessionConfiguration \*configuration = \[NSURLSessionConfiguration defaultSessionConfiguration];
// configure the session
return configuration;
});

// set up React
\_bridge = \[\[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
}

```


---

# Nodes from refs

React Native apps render a native view tree that represents the UI, similar to how React DOM does on Web (the DOM tree). React Native provides imperative access to this tree via [refs](https://react.dev/learn/manipulating-the-dom-with-refs), which are returned by all native components (including those rendered by built-in components like [`View`](/docs/next/view)).

React Native provides 3 types of nodes:

* [Elements](/docs/next/element-nodes): element nodes represent native components in the native view tree (similar to [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) nodes on Web). They are provided by all native components via refs.
* [Text](/docs/next/text-nodes): text nodes represent raw text content on the tree (similar to [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text) nodes on Web). They are not directly accessible via `refs`, but can be accessed using methods like [`childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes) on element refs.
* [Documents](/docs/next/document-nodes): document nodes represent a complete native view tree (similar to [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) nodes on Web). Like text nodes, they can only be accessed through other nodes, using properties like [`ownerDocument`](https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument).

As on Web, these nodes can be used to traverse the rendered UI tree, access layout information or execute imperative operations like `focus`.

info

**Unlike on Web, these nodes do not allow mutation** (e.g.: [`node.appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)), as the tree contents are fully managed by the React renderer.


---

# Optimizing FlatList Configuration

## Terms[​](#terms "Direct link to Terms")

* **VirtualizedList:** The component behind `FlatList` (React Native's implementation of the [`Virtual List`](https://bvaughn.github.io/react-virtualized/#/components/List) concept.)

* **Memory consumption:** How much information about your list is being stored in memory, which could lead to an app crash.

* **Responsiveness:** Application ability to respond to interactions. Low responsiveness, for instance, is when you touch on a component and it waits a bit to respond, instead of responding immediately as expected.

* **Blank areas:** When `VirtualizedList` can't render your items fast enough, you may enter a part of your list with non-rendered components that appear as blank space.

* **Viewport:** The visible area of content that is rendered to pixels.

* **Window:** The area in which items should be mounted, which is generally much larger than the viewport.

## Props[​](#props "Direct link to Props")

Here are a list of props that can help to improve `FlatList` performance:

### `removeClippedSubviews`[​](#removeclippedsubviews "Direct link to removeclippedsubviews")

| Type    | Default                              |
| ------- | ------------------------------------ |
| Boolean | `true` on Android, otherwise `false` |

If `true`, views that are outside of the viewport are automatically detached from the native view hierarchy.

**Pros:** This reduces time spent on the main thread, and thus reduces the risk of dropped frames, by excluding views outside of the viewport from the native rendering and drawing traversals.

**Cons:** Be aware that this implementation can have bugs, such as missing content (mainly observed on iOS), especially if you are doing complex things with transforms and/or absolute positioning. Also note this does not save significant memory because the views are not deallocated, only detached.

### `maxToRenderPerBatch`[​](#maxtorenderperbatch "Direct link to maxtorenderperbatch")

| Type   | Default |
| ------ | ------- |
| Number | 10      |

It is a `VirtualizedList` prop that can be passed through `FlatList`. This controls the amount of items rendered per batch, which is the next chunk of items rendered on every scroll.

**Pros:** Setting a bigger number means less visual blank areas when scrolling (increases the fill rate).

**Cons:** More items per batch means longer periods of JavaScript execution potentially blocking other event processing, like presses, hurting responsiveness.

### `updateCellsBatchingPeriod`[​](#updatecellsbatchingperiod "Direct link to updatecellsbatchingperiod")

| Type   | Default |
| ------ | ------- |
| Number | 50      |

While `maxToRenderPerBatch` tells the amount of items rendered per batch, setting `updateCellsBatchingPeriod` tells your `VirtualizedList` the delay in milliseconds between batch renders (how frequently your component will be rendering the windowed items).

**Pros:** Combining this prop with `maxToRenderPerBatch` gives you the power to, for example, render more items in a less frequent batch, or less items in a more frequent batch.

**Cons:** Less frequent batches may cause blank areas, More frequent batches may cause responsiveness issues.

### initialNumToRender[​](#initialnumtorender "Direct link to initialNumToRender")

| Type   | Default |
| ------ | ------- |
| Number | 10      |

The initial amount of items to render.

**Pros:** Define precise number of items that would cover the screen for every device. This can be a big performance boost for the initial render.

**Cons:** Setting a low `initialNumToRender` may cause blank areas, especially if it's too small to cover the viewport on initial render.

### `windowSize`[​](#windowsize "Direct link to windowsize")

| Type   | Default |
| ------ | ------- |
| Number | 21      |

The number passed here is a measurement unit where 1 is equivalent to your viewport height. The default value is 21 (10 viewports above, 10 below, and one in between).

**Pros:** Bigger `windowSize` will result in less chance of seeing blank space while scrolling. On the other hand, smaller `windowSize` will result in fewer items mounted simultaneously, saving memory.

**Cons:** For a bigger `windowSize`, you will have more memory consumption. For a lower `windowSize`, you will have a bigger chance of seeing blank areas.

## List items[​](#list-items "Direct link to List items")

Below are some tips about list item components. They are the core of your list, so they need to be fast.

### Use basic components[​](#use-basic-components "Direct link to Use basic components")

The more complex your components are, the slower they will render. Try to avoid a lot of logic and nesting in your list items. If you are reusing this list item component a lot in your app, create a component only for your big lists and make them with as little logic and nesting as possible.

### Use light components[​](#use-light-components "Direct link to Use light components")

The heavier your components are, the slower they render. Avoid heavy images (use a cropped version or thumbnail for list items, as small as possible). Talk to your design team, use as little effects and interactions and information as possible in your list. Show them in your item's detail.

### Use `memo()`[​](#use-memo "Direct link to use-memo")

`React.memo()` creates a memoized component that will be re-rendered only when the props passed to the component change. We can use this function to optimize the components in the FlatList.

tsx

```

import React, {memo} from 'react';
import {View, Text} from 'react-native';

const MyListItem = memo(
({title}: {title: string}) => (

```
  {title}
```

),
(prevProps, nextProps) => {
return prevProps.title === nextProps.title;
},
);

export default MyListItem;

```

In this example, we have determined that MyListItem should be re-rendered only when the title changes. We passed the comparison function as the second argument to React.memo() so that the component is re-rendered only when the specified prop is changed. If the comparison function returns true, the component will not be re-rendered.

### Use cached optimized images[​](#use-cached-optimized-images "Direct link to Use cached optimized images")

You can use the community packages (such as [@d11/react-native-fast-image](https://github.com/ds-horizon/react-native-fast-image) from [Dream11](https://github.com/ds-horizon)) for more performant images. Every image in your list is a `new Image()` instance. The faster it reaches the `loaded` hook, the faster your JavaScript thread will be free again.

### Use `getItemLayout`[​](#use-getitemlayout "Direct link to use-getitemlayout")

If all your list item components have the same height (or width, for a horizontal list), providing the [getItemLayout](/docs/flatlist.md#getitemlayout) prop removes the need for your `FlatList` to manage async layout calculations. This is a very desirable optimization technique.

If your components have dynamic size and you really need performance, consider asking your design team if they may think of a redesign in order to perform better.

### Use `keyExtractor` or `key`[​](#use-keyextractor-or-key "Direct link to use-keyextractor-or-key")

You can set the [`keyExtractor`](/docs/flatlist.md#keyextractor) to your `FlatList` component. This prop is used for caching and as the React `key` to track item re-ordering.

You can also use a `key` prop in your item component.

### Avoid anonymous function on `renderItem`[​](#avoid-anonymous-function-on-renderitem "Direct link to avoid-anonymous-function-on-renderitem")

For functional components, move the `renderItem` function outside of the returned JSX. Also, ensure that it is wrapped in a `useCallback` hook to prevent it from being recreated each render.

For class components, move the `renderItem` function outside of the render function, so it won't recreate itself each time the render function is called.

tsx

```

const renderItem = useCallback(({item}) => (

```
  {item.title}
```

), \[]);

return (
// ...
;
// ...
);

```


---

# Optimizing JavaScript loading

Parsing and running JavaScript code requires memory and time. Because of this, as your app grows, it's often useful to delay loading code until it's needed for the first time. React Native comes with some standard optimizations that are on by default, and there are techniques you can adopt in your own code to help React load your app more efficiently. There are also some advanced automatic optimizations (with their own tradeoffs) that are suitable for very large apps.

## Recommended: Use Hermes[​](#recommended-use-hermes "Direct link to Recommended: Use Hermes")

Hermes is the default engine for new React Native apps, and is highly optimized for efficient code loading. In release builds, JavaScript code is fully compiled to bytecode ahead of time. Bytecode is loaded to memory on-demand and does not need to be parsed like plain JavaScript does.

info

Read more about using Hermes in React Native [here](/docs/hermes.md).

## Recommended: Lazy-load large components[​](#recommended-lazy-load-large-components "Direct link to Recommended: Lazy-load large components")

If a component with a lot of code/dependencies is not likely to be used when initially rendering your app, you can use React's [`lazy`](https://react.dev/reference/react/lazy) API to defer loading its code until it's rendered for the first time. Typically, you should consider lazy-loading screen-level components in your app, so that adding new screens to your app does not increase its startup time.

info

Read more about [lazy-loading components with Suspense ](https://react.dev/reference/react/lazy#suspense-for-code-splitting), including code examples, in React's documentation.

### Tip: Avoid module side effects[​](#tip-avoid-module-side-effects "Direct link to Tip: Avoid module side effects")

Lazy-loading components can change the behavior of your app if your component modules (or their dependencies) have *side effects*, such as modifying global variables or subscribing to events outside of a component. Most modules in React apps should not have any side effects.

SideEffects.tsx

```

import Logger from './utils/Logger';

//  🚩 🚩 🚩 Side effect! This must be executed before React can even begin to
// render the SplashScreen component, and can unexpectedly break code elsewhere
// in your app if you later decide to lazy-load SplashScreen.
global.logger = new Logger();

export function SplashScreen() {
// ...
}

```

## Advanced: Call `require` inline[​](#advanced-call-require-inline "Direct link to advanced-call-require-inline")

Sometimes you may want to defer loading some code until you use it for the first time, without using `lazy` or an asynchronous `import()`. You can do this by using the [`require()`](https://metrobundler.dev/docs/module-api/#require) function where you would otherwise use a static `import` at the top of the file.

VeryExpensive.tsx

```

import {Component} from 'react';
import {Text} from 'react-native';
// ... import some very expensive modules

export default function VeryExpensive() {
// ... lots and lots of rendering logic
return Very Expensive Component;
}

```

Optimized.tsx

```

import {useCallback, useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
// Usually we would write a static import:
// import VeryExpensive from './VeryExpensive';

let VeryExpensive = null;

export default function Optimize() {
const \[needsExpensive, setNeedsExpensive] = useState(false);
const didPress = useCallback(() => {
if (VeryExpensive == null) {
VeryExpensive = require('./VeryExpensive').default;
}

```
setNeedsExpensive(true);
```

}, \[]);

return (

```
    Load
  
  {needsExpensive ?  : null}
```

);
}

```

## Advanced: Automatically inline `require` calls[​](#advanced-automatically-inline-require-calls "Direct link to advanced-automatically-inline-require-calls")

If you use the React Native CLI to build your app, `require` calls (but not `import`s) will automatically be inlined for you, both in your code and inside any third-party packages (`node_modules`) you use.

tsx

```

import {useCallback, useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

// This top-level require call will be evaluated lazily as part of the component below.
const VeryExpensive = require('./VeryExpensive').default;

export default function Optimize() {
const \[needsExpensive, setNeedsExpensive] = useState(false);
const didPress = useCallback(() => {
setNeedsExpensive(true);
}, \[]);

return (

```
    Load
  
  {needsExpensive ?  : null}
```

);
}

```

info

Some React Native frameworks disable this behavior. In particular, in Expo projects, `require` calls are not inlined by default. You can enable this optimization by editing your project's Metro config and setting `inlineRequires: true` in [`getTransformOptions`](https://metrobundler.dev/docs/configuration#gettransformoptions).

### Pitfalls of inline `require`s[​](#pitfalls-of-inline-requires "Direct link to pitfalls-of-inline-requires")

Inlining `require` calls changes the order in which modules are evaluated, and can even cause some modules to *never* be evaluated. This is usually safe to do automatically, because JavaScript modules are often written to be side-effect-free.

If one of your modules does have side effects - for example, if it initializes some logging mechanism, or patches a global API used by the rest of your code - then you might see unexpected behavior or even crashes. In those cases, you may want to exclude certain modules from this optimization, or disable it entirely.

To **disable all automatic inlining of `require` calls:**

Update your `metro.config.js` to set the `inlineRequires` transformer option to `false`:

metro.config.js

```

module.exports = {
transformer: {
async getTransformOptions() {
return {
transform: {
inlineRequires: false,
},
};
},
},
};

```

To only **exclude certain modules from `require` inlining:**

There are two relevant transformer options: `inlineRequires.blockList` and `nonInlinedRequires`. See the code snippet for examples of how to use each one.

metro.config.js

```

module.exports = {
transformer: {
async getTransformOptions() {
return {
transform: {
inlineRequires: {
blockList: {
// require() calls in `DoNotInlineHere.js` will not be inlined.
\[require.resolve('./src/DoNotInlineHere.js')]: true,

```
          // require() calls anywhere else will be inlined, unless they
          // match any entry nonInlinedRequires (see below).
        },
      },
      nonInlinedRequires: [
        // require('react') calls will not be inlined anywhere
        'react',
      ],
    },
  };
},
```

},
};

```

See the documentation for [`getTransformOptions` in Metro](https://metrobundler.dev/docs/configuration#gettransformoptions) for more details on setting up and fine-tuning your inline `require`s.

## Advanced: Use random access module bundles (non-Hermes)[​](#advanced-use-random-access-module-bundles-non-hermes "Direct link to Advanced: Use random access module bundles (non-Hermes)")

tip

**Not supported when [using Hermes](#use-hermes).** Hermes bytecode is not compatible with the RAM bundle format, and provides the same (or better) performance in all use cases.

Random access module bundles (also known as RAM bundles) work in conjunction with the techniques mentioned above to limit the amount of JavaScript code that needs to be parsed and loaded into memory. Each module is stored as a separate string (or file) which is only parsed when the module needs to be executed.

RAM bundles may be physically split into separate files, or they may use the *indexed* format, consisting of a lookup table of multiple modules in a single file.

* Android
* iOS

On Android enable the RAM format by editing your `android/app/build.gradle` file. Before the line `apply from: "../../node_modules/react-native/react.gradle"` add or amend the `project.ext.react` block:

```

project.ext.react = \[
bundleCommand: "ram-bundle",
]

```

Use the following lines on Android if you want to use a single indexed file:

```

project.ext.react = \[
bundleCommand: "ram-bundle",
extraPackagerArgs: \["--indexed-ram-bundle"]
]

```

On iOS, RAM bundles are always indexed ( = single file).

Enable the RAM format in Xcode by editing the build phase "Bundle React Native code and images". Before `../node_modules/react-native/scripts/react-native-xcode.sh` add `export BUNDLE_COMMAND="ram-bundle"`:

```

export BUNDLE\_COMMAND="ram-bundle"
export NODE\_BINARY=node
../node\_modules/react-native/scripts/react-native-xcode.sh

```

See the documentation for [`getTransformOptions` in Metro](https://metrobundler.dev/docs/configuration#gettransformoptions) for more details on setting up and fine-tuning your RAM bundle build.


---

# Other Debugging Methods

This page covers how to use legacy JavaScript debugging methods. If you are getting started with a new React Native or Expo app, we recommend using [React Native DevTools](/docs/react-native-devtools.md).

## Safari Developer Tools (direct JSC debugging)[​](#safari-developer-tools-direct-jsc-debugging "Direct link to Safari Developer Tools (direct JSC debugging)")

You can use Safari to debug the iOS version of your app when using [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore) (JSC) as your app's runtime.

1. **Physical devices only**: Open the Settings app, and navigate to Safari > Advanced, and make sure "Web Inspector" is turned on.
2. On your Mac, open Safari and enable the Develop menu. This can be found under Safari > Settings..., then the Advanced tab, then selecting "Show features for web developers".
3. Find your device under the Develop menu, and select the "JSContext" item from the submenu. This will open Safari's Web Inspector, which includes Console and Sources panels similar to Chrome DevTools.

![Opening Safari Web Inspector](/assets/images/debugging-safari-developer-tools-5aefdee28e230260908d691621c4fa63.jpg)

tip

While source maps may not be enabled by default, you can follow [this guide](https://blog.nparashuram.com/2019/10/debugging-react-native-ios-apps-with.html) or [video](https://www.youtube.com/watch?v=GrGqIIz51k4) to enable them and set break points at the right places in the source code.

tip

Every time the app is reloaded, a new JSContext is created. Choosing "Automatically Show Web Inspectors for JSContexts" saves you from having to select the latest JSContext manually.

## Remote JavaScript Debugging (removed)[​](#remote-javascript-debugging-removed "Direct link to Remote JavaScript Debugging (removed)")

Important

Remote JavaScript Debugging has been removed as of React Native 0.79. See the original [deprecation announcement](https://github.com/react-native-community/discussions-and-proposals/discussions/734).

If you are on an older version of React Native, please go to the docs [for your version](/versions.md).

![The remote debugger window in Chrome](/assets/images/debugging-chrome-remote-debugger-ddf0ea5593f18b93a26ed3a8ea44e42e.jpg)


---

# Out-of-Tree Platforms

React Native is not only for Android and iOS devices - our partners and the community maintain projects that bring React Native to other platforms, such as:

**From Partners**

* [React Native macOS](https://github.com/microsoft/react-native-macos) - React Native for macOS and Cocoa.
* [React Native Windows](https://github.com/microsoft/react-native-windows) - React Native for Microsoft's Universal Windows Platform (UWP).
* [React Native visionOS](https://github.com/callstack/react-native-visionos) - React Native for Apple's visionOS.

**From Community**

* [React Native tvOS](https://github.com/react-native-tvos/react-native-tvos) - React Native for Apple TV and Android TV devices.
* [React Native Web](https://github.com/necolas/react-native-web) - React Native on the web using React DOM.
* [React Native Skia](https://github.com/react-native-skia/react-native-skia) - React Native using [Skia](https://skia.org/) as a renderer. Currently supports Linux and macOS.

## Creating your own React Native platform[​](#creating-your-own-react-native-platform "Direct link to Creating your own React Native platform")

Right now the process of creating a React Native platform from scratch is not very well documented - one of the goals of the upcoming re-architecture ([Fabric](/blog/2018/06/14/state-of-react-native-2018)) is to make maintaining a platform easier.

### Bundling[​](#bundling "Direct link to Bundling")

As of React Native 0.57 you can now register your React Native platform with React Native's JavaScript bundler, [Metro](https://metrobundler.dev/). This means you can pass `--platform example` to `npx react-native bundle`, and it will look for JavaScript files with the `.example.js` suffix.

To register your platform with RNPM, your module's name must match one of these patterns:

* `react-native-example` - It will search all top-level modules that start with `react-native-`
* `@org/react-native-example` - It will search for modules that start with `react-native-` under any scope
* `@react-native-example/module` - It will search in all modules under scopes with names starting with `@react-native-`

You must also have an entry in your `package.json` like this:

json

```

{
"rnpm": {
"haste": {
"providesModuleNodeModules": \["react-native-example"],
"platforms": \["example"]
}
}
}

```

`"providesModuleNodeModules"` is an array of modules that will get added to the Haste module search path, and `"platforms"` is an array of platform suffixes that will be added as valid platforms.


---

# PanResponder

`PanResponder` reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches, and can be used to recognize basic multi-touch gestures.

By default, `PanResponder` holds an `InteractionManager` handle to block long-running JS events from interrupting active gestures.

It provides a predictable wrapper of the responder handlers provided by the [gesture responder system](/docs/gesture-responder-system.md). For each handler, it provides a new `gestureState` object alongside the native event object:

```

onPanResponderMove: (event, gestureState) => {}

```

A native event is a synthetic touch event with form of [PressEvent](/docs/pressevent.md).

A `gestureState` object has the following:

* `stateID` - ID of the gestureState- persisted as long as there's at least one touch on screen
* `moveX` - the latest screen coordinates of the recently-moved touch
* `moveY` - the latest screen coordinates of the recently-moved touch
* `x0` - the screen coordinates of the responder grant
* `y0` - the screen coordinates of the responder grant
* `dx` - accumulated distance of the gesture since the touch started
* `dy` - accumulated distance of the gesture since the touch started
* `vx` - current velocity of the gesture
* `vy` - current velocity of the gesture
* `numberActiveTouches` - Number of touches currently on screen

## Usage Pattern[​](#usage-pattern "Direct link to Usage Pattern")

tsx

```

const ExampleComponent = () => {
const panResponder = React.useRef(
PanResponder.create({
// Ask to be the responder:
onStartShouldSetPanResponder: (evt, gestureState) => true,
onStartShouldSetPanResponderCapture: (evt, gestureState) =>
true,
onMoveShouldSetPanResponder: (evt, gestureState) => true,
onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
true,

```
  onPanResponderGrant: (evt, gestureState) => {
    // The gesture has started. Show visual feedback so the user knows
    // what is happening!
    // gestureState.d{x,y} will be set to zero now
  },
  onPanResponderMove: (evt, gestureState) => {
    // The most recent move distance is gestureState.move{X,Y}
    // The accumulated gesture distance since becoming responder is
    // gestureState.d{x,y}
  },
  onPanResponderTerminationRequest: (evt, gestureState) =>
    true,
  onPanResponderRelease: (evt, gestureState) => {
    // The user has released all touches while this view is the
    // responder. This typically means a gesture has succeeded
  },
  onPanResponderTerminate: (evt, gestureState) => {
    // Another component has become the responder, so this gesture
    // should be cancelled
  },
  onShouldBlockNativeResponder: (evt, gestureState) => {
    // Returns whether this component should block native components from becoming the JS
    // responder. Returns true by default. Is currently only supported on android.
    return true;
  },
}),
```

).current;

return ;
};

```

## Example[​](#example "Direct link to Example")

`PanResponder` works with `Animated` API to help build complex gestures in the UI. The following example contains an animated `View` component which can be dragged freely across the screen

Try the [PanResponder example in RNTester](https://github.com/facebook/react-native/blob/main/packages/rn-tester/js/examples/PanResponder/PanResponderExample.js).

***

# Reference

## Methods[​](#methods "Direct link to Methods")

### `create()`[​](#create "Direct link to create")

tsx

```

static create(config: PanResponderCallbacks): PanResponderInstance;

```

**Parameters:**

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| configRequired | object | Refer below |

The `config` object provides enhanced versions of all of the responder callbacks that provide not only the [`PressEvent`](/docs/pressevent.md), but also the `PanResponder` gesture state, by replacing the word `Responder` with `PanResponder` in each of the typical `onResponder*` callbacks. For example, the `config` object would look like:

* `onMoveShouldSetPanResponder: (e, gestureState) => {...}`
* `onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}`
* `onStartShouldSetPanResponder: (e, gestureState) => {...}`
* `onStartShouldSetPanResponderCapture: (e, gestureState) => {...}`
* `onPanResponderReject: (e, gestureState) => {...}`
* `onPanResponderGrant: (e, gestureState) => {...}`
* `onPanResponderStart: (e, gestureState) => {...}`
* `onPanResponderEnd: (e, gestureState) => {...}`
* `onPanResponderRelease: (e, gestureState) => {...}`
* `onPanResponderMove: (e, gestureState) => {...}`
* `onPanResponderTerminate: (e, gestureState) => {...}`
* `onPanResponderTerminationRequest: (e, gestureState) => {...}`
* `onShouldBlockNativeResponder: (e, gestureState) => {...}`

In general, for events that have capture equivalents, we update the gestureState once in the capture phase and can use it in the bubble phase as well.

Be careful with `onStartShould*` callbacks. They only reflect updated `gestureState` for start/end events that bubble/capture to the Node. Once the node is the responder, you can rely on every start/end event being processed by the gesture and `gestureState` being updated accordingly. (numberActiveTouches) may not be totally accurate unless you are the responder.


---

# Performance Overview

A compelling reason to use React Native instead of WebView-based tools is to achieve at least 60 frames per second and provide a native look and feel to your apps. Whenever feasible, we aim for React Native to handle optimizations automatically, allowing you to focus on your app without worrying about performance. However, there are certain areas where we haven't quite reached that level yet, and others where React Native (similar to writing native code directly) cannot determine the best optimization approach for you. In such cases, manual intervention becomes necessary. We strive to deliver buttery-smooth UI performance by default, but there may be instances where that isn't possible.

This guide is intended to teach you some basics to help you to [troubleshoot performance issues](/docs/profiling.md), as well as discuss [common sources of problems and their suggested solutions](/docs/performance.md#common-sources-of-performance-problems).

## What you need to know about frames[​](#what-you-need-to-know-about-frames "Direct link to What you need to know about frames")

Your grandparents' generation called movies ["moving pictures"](https://www.youtube.com/watch?v=F1i40rnpOsA) for a reason: realistic motion in video is an illusion created by quickly changing static images at a consistent speed. We refer to each of these images as frames. The number of frames that is displayed each second has a direct impact on how smooth and ultimately life-like a video (or user interface) seems to be. iOS and Android devices display at least 60 frames per second, which gives you and the UI system at most 16.67ms to do all of the work needed to generate the static image (frame) that the user will see on the screen for that interval. If you are unable to do the work necessary to generate that frame within the allotted time slot, then you will "drop a frame" and the UI will appear unresponsive.

Now to confuse the matter a little bit, open up the [Dev Menu](/docs/debugging.md#opening-the-dev-menu) in your app and toggle `Show Perf Monitor`. You will notice that there are two different frame rates.

![Performance Monitor screenshot](/assets/images/PerfUtil-38a2ddbf1777887d70563a644c72aa64.png)

### JS frame rate (JavaScript thread)[​](#js-frame-rate-javascript-thread "Direct link to JS frame rate (JavaScript thread)")

For most React Native applications, your business logic will run on the JavaScript thread. This is where your React application lives, API calls are made, touch events are processed, and more. Updates to native-backed views are batched and sent over to the native side at the end of each iteration of the event loop, before the frame deadline (if all goes well). If the JavaScript thread is unresponsive for a frame, it will be considered a dropped frame. For example, if you were to set a new state on the root component of a complex application and it resulted in re-rendering computationally expensive component subtrees, it's conceivable that this might take 200ms and result in 12 frames being dropped. Any animations controlled by JavaScript would appear to freeze during that time. If enough frames are dropped, the user will feel it.

An example is responding to touches: if you are doing work across multiple frames on the JavaScript thread, you might notice a delay in responding to `TouchableOpacity`, for example. This is because the JavaScript thread is busy and cannot process the raw touch events sent over from the main thread. As a result, `TouchableOpacity` cannot react to the touch events and command the native view to adjust its opacity.

### UI frame rate (main thread)[​](#ui-frame-rate-main-thread "Direct link to UI frame rate (main thread)")

You may have noticed that performance of native stack navigators (such as the [@react-navigation/native-stack](https://reactnavigation.org/docs/native-stack-navigator) provided by React Navigation) is better out of the box than JavaScript-based stack navigators. This is because the transition animations are executed on the native main UI thread, so they are not interrupted by frame drops on the JavaScript thread.

Similarly, you can happily scroll up and down through a `ScrollView` when the JavaScript thread is locked up because the `ScrollView` lives on the main thread. The scroll events are dispatched to the JS thread, but their receipt is not necessary for the scroll to occur.

## Common sources of performance problems[​](#common-sources-of-performance-problems "Direct link to Common sources of performance problems")

### Running in development mode (`dev=true`)[​](#running-in-development-mode-devtrue "Direct link to running-in-development-mode-devtrue")

JavaScript thread performance suffers greatly when running in dev mode. This is unavoidable: a lot more work needs to be done at runtime to provide you with good warnings and error messages. Always make sure to test performance in [release builds](/docs/running-on-device.md#building-your-app-for-production).

### Using `console.log` statements[​](#using-consolelog-statements "Direct link to using-consolelog-statements")

When running a bundled app, these statements can cause a big bottleneck in the JavaScript thread. This includes calls from debugging libraries such as [redux-logger](https://github.com/evgenyrodionov/redux-logger), so make sure to remove them before bundling. You can also use this [babel plugin](https://babeljs.io/docs/plugins/transform-remove-console/) that removes all the `console.*` calls. You need to install it first with `npm i babel-plugin-transform-remove-console --save-dev`, and then edit the `.babelrc` file under your project directory like this:

json

```

{
"env": {
"production": {
"plugins": \["transform-remove-console"]
}
}
}

```

This will automatically remove all `console.*` calls in the release (production) versions of your project.

It is recommended to use the plugin even if no `console.*` calls are made in your project. A third party library could also call them.

### `FlatList` rendering is too slow or scroll performance is bad for large lists[​](#flatlist-rendering-is-too-slow-or-scroll-performance-is-bad-for-large-lists "Direct link to flatlist-rendering-is-too-slow-or-scroll-performance-is-bad-for-large-lists")

If your [`FlatList`](/docs/flatlist.md) is rendering slowly, be sure that you've implemented [`getItemLayout`](/docs/flatlist.md#getitemlayout) to optimize rendering speed by skipping measurement of the rendered items.

There are also other third-party list libraries that are optimized for performance, including [FlashList](https://github.com/shopify/flash-list) and [Legend List](https://github.com/legendapp/legend-list).

### Dropping JS thread FPS because of doing a lot of work on the JavaScript thread at the same time[​](#dropping-js-thread-fps-because-of-doing-a-lot-of-work-on-the-javascript-thread-at-the-same-time "Direct link to Dropping JS thread FPS because of doing a lot of work on the JavaScript thread at the same time")

"Slow Navigator transitions" is the most common manifestation of this, but there are other times this can happen. Using [`InteractionManager`](/docs/interactionmanager.md) can be a good approach, but if the user experience cost is too high to delay work during an animation, then you might want to consider [`LayoutAnimation`](/docs/layoutanimation.md).

The [`Animated API`](/docs/animated.md) currently calculates each keyframe on-demand on the JavaScript thread unless you [set `useNativeDriver: true`](/blog/2017/02/14/using-native-driver-for-animated#how-do-i-use-this-in-my-app), while [`LayoutAnimation`](/docs/layoutanimation.md) leverages Core Animation and is unaffected by JS thread and main thread frame drops.

One case for using this is animating in a modal (sliding down from top and fading in a translucent overlay) while initializing and perhaps receiving responses for several network requests, rendering the contents of the modal, and updating the view where the modal was opened from. See the [Animations guide](/docs/animations.md) for more information about how to use `LayoutAnimation`.

**Caveats:**

* `LayoutAnimation` only works for fire-and-forget animations ("static" animations) -- if it must be interruptible, you will need to use [`Animated`](/docs/animated.md).

### Moving a view on the screen (scrolling, translating, rotating) drops UI thread FPS[​](#moving-a-view-on-the-screen-scrolling-translating-rotating-drops-ui-thread-fps "Direct link to Moving a view on the screen (scrolling, translating, rotating) drops UI thread FPS")

This is especially true on Android when you have text with a transparent background positioned on top of an image, or any other situation where alpha compositing would be required to re-draw the view on each frame. You will find that enabling `renderToHardwareTextureAndroid` can help with this significantly. For iOS, `shouldRasterizeIOS` is already enabled by default.

Be careful not to overuse this or your memory usage could go through the roof. Profile your performance and memory usage when using these props. If you don't plan to move a view anymore, turn this property off.

### Animating the size of an image drops UI thread FPS[​](#animating-the-size-of-an-image-drops-ui-thread-fps "Direct link to Animating the size of an image drops UI thread FPS")

On iOS, each time you adjust the width or height of an [`Image` component](/docs/image.md) it is re-cropped and scaled from the original image. This can be very expensive, especially for large images. Instead, use the `transform: [{scale}]` style property to animate the size. An example of when you might do this is when you tap an image and zoom it in to full screen.

### My TouchableX view isn't very responsive[​](#my-touchablex-view-isnt-very-responsive "Direct link to My TouchableX view isn't very responsive")

Sometimes, if we do an action in the same frame that we are adjusting the opacity or highlight of a component that is responding to a touch, we won't see that effect until after the `onPress` function has returned. This may occur if `onPress` sets a state that results in a heavy re-render and a few frames are dropped as a result. A solution to this is to wrap any action inside of your `onPress` handler in `requestAnimationFrame`:

tsx

```

function handleOnPress() {
requestAnimationFrame(() => {
this.doExpensiveAction();
});
}

```


---

# PermissionsAndroid

### Project with Native Code Required

The following section only applies to projects with native code exposed. If you are using the managed Expo workflow, see the guide on [Permissions](https://docs.expo.dev/guides/permissions/) in the Expo documentation for the appropriate alternative.

`PermissionsAndroid` provides access to Android M's new permissions model. The so-called "normal" permissions are granted by default when the application is installed as long as they appear in `AndroidManifest.xml`. However, "dangerous" permissions require a dialog prompt. You should use this module for those permissions.

On devices before SDK version 23, the permissions are automatically granted if they appear in the manifest, so `check` should always result to `true` and `request` should always resolve to `PermissionsAndroid.RESULTS.GRANTED`.

If a user has previously turned off a permission that you prompt for, the OS will advise your app to show a rationale for needing the permission. The optional `rationale` argument will show a dialog prompt only if necessary - otherwise the normal permission prompt will appear.

### Example[​](#example "Direct link to Example")

### Permissions that require prompting the user[​](#permissions-that-require-prompting-the-user "Direct link to Permissions that require prompting the user")

Available as constants under `PermissionsAndroid.PERMISSIONS`:

* `READ_CALENDAR`: 'android.permission.READ\_CALENDAR'
* `WRITE_CALENDAR`: 'android.permission.WRITE\_CALENDAR'
* `CAMERA`: 'android.permission.CAMERA'
* `READ_CONTACTS`: 'android.permission.READ\_CONTACTS'
* `WRITE_CONTACTS`: 'android.permission.WRITE\_CONTACTS'
* `GET_ACCOUNTS`: 'android.permission.GET\_ACCOUNTS'
* `ACCESS_FINE_LOCATION`: 'android.permission.ACCESS\_FINE\_LOCATION'
* `ACCESS_COARSE_LOCATION`: 'android.permission.ACCESS\_COARSE\_LOCATION'
* `ACCESS_BACKGROUND_LOCATION`: 'android.permission.ACCESS\_BACKGROUND\_LOCATION'
* `RECORD_AUDIO`: 'android.permission.RECORD\_AUDIO'
* `READ_PHONE_STATE`: 'android.permission.READ\_PHONE\_STATE'
* `CALL_PHONE`: 'android.permission.CALL\_PHONE'
* `READ_CALL_LOG`: 'android.permission.READ\_CALL\_LOG'
* `WRITE_CALL_LOG`: 'android.permission.WRITE\_CALL\_LOG'
* `ADD_VOICEMAIL`: 'com.android.voicemail.permission.ADD\_VOICEMAIL'
* `USE_SIP`: 'android.permission.USE\_SIP'
* `PROCESS_OUTGOING_CALLS`: 'android.permission.PROCESS\_OUTGOING\_CALLS'
* `BODY_SENSORS`: 'android.permission.BODY\_SENSORS'
* `SEND_SMS`: 'android.permission.SEND\_SMS'
* `RECEIVE_SMS`: 'android.permission.RECEIVE\_SMS'
* `READ_SMS`: 'android.permission.READ\_SMS'
* `RECEIVE_WAP_PUSH`: 'android.permission.RECEIVE\_WAP\_PUSH'
* `RECEIVE_MMS`: 'android.permission.RECEIVE\_MMS'
* `READ_EXTERNAL_STORAGE`: 'android.permission.READ\_EXTERNAL\_STORAGE'
* `WRITE_EXTERNAL_STORAGE`: 'android.permission.WRITE\_EXTERNAL\_STORAGE'
* `BLUETOOTH_CONNECT`: 'android.permission.BLUETOOTH\_CONNECT'
* `BLUETOOTH_SCAN`: 'android.permission.BLUETOOTH\_SCAN'
* `BLUETOOTH_ADVERTISE`: 'android.permission.BLUETOOTH\_ADVERTISE'
* `ACCESS_MEDIA_LOCATION`: 'android.permission.ACCESS\_MEDIA\_LOCATION'
* `ACCEPT_HANDOVER`: 'android.permission.ACCEPT\_HANDOVER'
* `ACTIVITY_RECOGNITION`: 'android.permission.ACTIVITY\_RECOGNITION'
* `ANSWER_PHONE_CALLS`: 'android.permission.ANSWER\_PHONE\_CALLS'
* `READ_PHONE_NUMBERS`: 'android.permission.READ\_PHONE\_NUMBERS'
* `UWB_RANGING`: 'android.permission.UWB\_RANGING'
* `BODY_SENSORS_BACKGROUND`: 'android.permission.BODY\_SENSORS\_BACKGROUND'
* `READ_MEDIA_IMAGES`: 'android.permission.READ\_MEDIA\_IMAGES'
* `READ_MEDIA_VIDEO`: 'android.permission.READ\_MEDIA\_VIDEO'
* `READ_MEDIA_AUDIO`: 'android.permission.READ\_MEDIA\_AUDIO'
* `POST_NOTIFICATIONS`: 'android.permission.POST\_NOTIFICATIONS'
* `NEARBY_WIFI_DEVICES`: 'android.permission.NEARBY\_WIFI\_DEVICES'
* `READ_VOICEMAIL`: 'com.android.voicemail.permission.READ\_VOICEMAIL',
* `WRITE_VOICEMAIL`: 'com.android.voicemail.permission.WRITE\_VOICEMAIL',

### Result strings for requesting permissions[​](#result-strings-for-requesting-permissions "Direct link to Result strings for requesting permissions")

Available as constants under `PermissionsAndroid.RESULTS`:

* `GRANTED`: 'granted'
* `DENIED`: 'denied'
* `NEVER_ASK_AGAIN`: 'never\_ask\_again'

***

# Reference

## Methods[​](#methods "Direct link to Methods")

### `check()`[​](#check "Direct link to check")

tsx

```

static check(permission: Permission): Promise;

```

Returns a promise resolving to a boolean value as to whether the specified permissions has been granted.

**Parameters:**

| Name       | Type   | Required | Description                  |
| ---------- | ------ | -------- | ---------------------------- |
| permission | string | Yes      | The permission to check for. |

***

### `request()`[​](#request "Direct link to request")

tsx

```

static request(
permission: Permission,
rationale?: Rationale,
): Promise;

```

Prompts the user to enable a permission and returns a promise resolving to a string value (see result strings above) indicating whether the user allowed or denied the request or does not want to be asked again.

If `rationale` is provided, this function checks with the OS whether it is necessary to show a dialog explaining why the permission is needed (<https://developer.android.com/training/permissions/requesting.html#explain>) and then shows the system permission dialog.

**Parameters:**

| Name       | Type   | Required | Description                |
| ---------- | ------ | -------- | -------------------------- |
| permission | string | Yes      | The permission to request. |
| rationale  | object | No       | See `rationale` below.     |

**Rationale:**

| Name           | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| title          | string | Yes      | The title of the dialog.         |
| message        | string | Yes      | The message of the dialog.       |
| buttonPositive | string | Yes      | The text of the positive button. |
| buttonNegative | string | No       | The text of the negative button. |
| buttonNeutral  | string | No       | The text of the neutral button.  |

***

### `requestMultiple()`[​](#requestmultiple "Direct link to requestmultiple")

tsx

```

static requestMultiple(
permissions: Permission\[],
): Promise<{\[key in Permission]: PermissionStatus}>;

```

Prompts the user to enable multiple permissions in the same dialog and returns an object with the permissions as keys and strings as values (see result strings above) indicating whether the user allowed or denied the request or does not want to be asked again.

**Parameters:**

| Name        | Type  | Required | Description                      |
| ----------- | ----- | -------- | -------------------------------- |
| permissions | array | Yes      | Array of permissions to request. |


---

# PixelRatio

`PixelRatio` gives you access to the device's pixel density and font scale.

## Fetching a correctly sized image[​](#fetching-a-correctly-sized-image "Direct link to Fetching a correctly sized image")

You should get a higher resolution image if you are on a high pixel density device. A good rule of thumb is to multiply the size of the image you display by the pixel ratio.

tsx

```

const image = getImage({
width: PixelRatio.getPixelSizeForLayoutSize(200),
height: PixelRatio.getPixelSizeForLayoutSize(100),
});
;

```

## Pixel grid snapping[​](#pixel-grid-snapping "Direct link to Pixel grid snapping")

In iOS, you can specify positions and dimensions for elements with arbitrary precision, for example 29.674825. But, ultimately the physical display only have a fixed number of pixels, for example 640×1136 for iPhone SE (1st generation) or 828×1792 for iPhone 11. iOS tries to be as faithful as possible to the user value by spreading one original pixel into multiple ones to trick the eye. The downside of this technique is that it makes the resulting element look blurry.

In practice, we found out that developers do not want this feature and they have to work around it by doing manual rounding in order to avoid having blurry elements. In React Native, we are rounding all the pixels automatically.

We have to be careful when to do this rounding. You never want to work with rounded and unrounded values at the same time as you're going to accumulate rounding errors. Having even one rounding error is deadly because a one pixel border may vanish or be twice as big.

In React Native, everything in JavaScript and within the layout engine works with arbitrary precision numbers. It's only when we set the position and dimensions of the native element on the main thread that we round. Also, rounding is done relative to the root rather than the parent, again to avoid accumulating rounding errors.

## Example[​](#example "Direct link to Example")

***

# Reference

## Methods[​](#methods "Direct link to Methods")

### `get()`[​](#get "Direct link to get")

tsx

```

static get(): number;

```

Returns the device pixel density. Some examples:

* `PixelRatio.get() === 1`
  * [mdpi Android devices](https://material.io/tools/devices/)

* `PixelRatio.get() === 1.5`
  * [hdpi Android devices](https://material.io/tools/devices/)

* `PixelRatio.get() === 2`

  * iPhone SE, 6S, 7, 8
  * iPhone XR
  * iPhone 11
  * [xhdpi Android devices](https://material.io/tools/devices/)

* `PixelRatio.get() === 3`

  * iPhone 6S Plus, 7 Plus, 8 Plus
  * iPhone X, XS, XS Max
  * iPhone 11 Pro, 11 Pro Max
  * Pixel, Pixel 2
  * [xxhdpi Android devices](https://material.io/tools/devices/)

* `PixelRatio.get() === 3.5`

  * Nexus 6
  * Pixel XL, Pixel 2 XL
  * [xxxhdpi Android devices](https://material.io/tools/devices/)

***

### `getFontScale()`[​](#getfontscale "Direct link to getfontscale")

tsx

```

static getFontScale(): number;

```

Returns the scaling factor for font sizes. This is the ratio that is used to calculate the absolute font size, so any elements that heavily depend on that should use this to do calculations.

* on Android value reflects the user preference set in **Settings > Display > Font size**
* on iOS value reflects the user preference set in **Settings > Display & Brightness > Text Size**, value can also be updated in **Settings > Accessibility > Display & Text Size > Larger Text**

If a font scale is not set, this returns the device pixel ratio.

***

### `getPixelSizeForLayoutSize()`[​](#getpixelsizeforlayoutsize "Direct link to getpixelsizeforlayoutsize")

tsx

```

static getPixelSizeForLayoutSize(layoutSize: number): number;

```

Converts a layout size (dp) to pixel size (px).

Guaranteed to return an integer number.

***

### `roundToNearestPixel()`[​](#roundtonearestpixel "Direct link to roundtonearestpixel")

tsx

```

static roundToNearestPixel(layoutSize: number): number;

```

Rounds a layout size (dp) to the nearest layout size that corresponds to an integer number of pixels. For example, on a device with a PixelRatio of 3, `PixelRatio.roundToNearestPixel(8.4) = 8.33`, which corresponds to exactly (8.33 \* 3) = 25 pixels.


---

# Platform

## Example[​](#example "Direct link to Example")

***

# Reference

## Properties[​](#properties "Direct link to Properties")

### `constants`[​](#constants "Direct link to constants")

tsx

```

static constants: PlatformConstants;

```

Returns an object which contains all available common and specific constants related to the platform.

**Properties:**

| Name                   | Type    | Optional | Description                                                                                                                                                                                       |
| ---------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isTesting              | boolean | No       |                                                                                                                                                                                                   |
| reactNativeVersion     | object  | No       | Information about React Native version. Keys are `major`, `minor`, `patch` with optional `prerelease` and values are `number`s.                                                                   |
| VersionAndroid         | number  | No       | OS version constant specific to Android.                                                                                                                                                          |
| ReleaseAndroid         | string  | No       |                                                                                                                                                                                                   |
| SerialAndroid          | string  | No       | Hardware serial number of an Android device.                                                                                                                                                      |
| FingerprintAndroid     | string  | No       | A string that uniquely identifies the build.                                                                                                                                                      |
| ModelAndroid           | string  | No       | The end-user-visible name for the Android device.                                                                                                                                                 |
| BrandAndroid           | string  | No       | The consumer-visible brand with which the product/hardware will be associated.                                                                                                                    |
| ManufacturerAndroid    | string  | No       | The manufacturer of the Android device.                                                                                                                                                           |
| ServerHostAndroid      | string  | Yes      |                                                                                                                                                                                                   |
| uiModeAndroid          | string  | No       | Possible values are: `'car'`, `'desk'`, `'normal'`,`'tv'`, `'watch'` and `'unknown'`. Read more about [Android ModeType](https://developer.android.com/reference/android/app/UiModeManager.html). |
| forceTouchAvailableiOS | boolean | No       | Indicate the availability of 3D Touch on a device.                                                                                                                                                |
| interfaceIdiomiOS      | string  | No       | The interface type for the device. Read more about [UIUserInterfaceIdiom](https://developer.apple.com/documentation/uikit/uiuserinterfaceidiom).                                                  |
| osVersioniOS           | string  | No       | OS version constant specific to iOS.                                                                                                                                                              |
| systemNameiOS          | string  | No       | OS name constant specific to iOS.                                                                                                                                                                 |

***

### `isPad`iOS[​](#ispad-ios "Direct link to ispad-ios")

tsx

```

static isPad: boolean;

```

Returns a boolean which defines if device is an iPad.

| Type    |
| ------- |
| boolean |

***

### `isTV`[​](#istv "Direct link to istv")

tsx

```

static isTV: boolean;

```

Returns a boolean which defines if device is a TV.

| Type    |
| ------- |
| boolean |

***

### `isVision`[​](#isvision "Direct link to isvision")

tsx

```

static isVision: boolean;

```

Returns a boolean which defines if device is an Apple Vision. *If you are using [Apple Vision Pro (Designed for iPad)](https://developer.apple.com/documentation/visionos/determining-whether-to-bring-your-app-to-visionos) `isVision` will be `false` but `isPad` will be `true`*

| Type    |
| ------- |
| boolean |

***

### `isTesting`[​](#istesting "Direct link to istesting")

tsx

```

static isTesting: boolean;

```

Returns a boolean which defines if application is running in Developer Mode with testing flag set.

| Type    |
| ------- |
| boolean |

***

### `OS`[​](#os "Direct link to os")

tsx

```

static OS: 'android' | 'ios';

```

Returns string value representing the current OS.

| Type                       |
| -------------------------- |
| enum(`'android'`, `'ios'`) |

***

### `Version`[​](#version "Direct link to version")

tsx

```

static Version: 'number' | 'string';

```

Returns the version of the OS.

| Type                      |
| ------------------------- |
| numberAndroid***stringiOS |

## Methods[​](#methods "Direct link to Methods")

### `select()`[​](#select "Direct link to select")

tsx

```

static select(config: Record\<string, T>): T;

```

Returns the most fitting value for the platform you are currently running on.

#### Parameters:[​](#parameters "Direct link to Parameters:")

| Name   | Type   | Required | Description                   |
| ------ | ------ | -------- | ----------------------------- |
| config | object | Yes      | See config description below. |

Select method returns the most fitting value for the platform you are currently running on. That is, if you're running on a phone, `android` and `ios` keys will take preference. If those are not specified, `native` key will be used and then the `default` key.

The `config` parameter is an object with the following keys:

* `android` (any)
* `ios` (any)
* `native` (any)
* `default` (any)

**Example usage:**

tsx

```

import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container: {
flex: 1,
...Platform.select({
android: {
backgroundColor: 'green',
},
ios: {
backgroundColor: 'red',
},
default: {
// other platforms, web for example
backgroundColor: 'blue',
},
}),
},
});

```

This will result in a container having `flex: 1` on all platforms, a green background color on Android, a red background color on iOS, and a blue background color on other platforms.

Since the value of the corresponding platform key can be of type `any`, [`select`](/docs/platform.md#select) method can also be used to return platform-specific components, like below:

tsx

```

const Component = Platform.select({
ios: () => require('ComponentIOS'),
android: () => require('ComponentAndroid'),
})();

;

```

tsx

```

const Component = Platform.select({
native: () => require('ComponentForNative'),
default: () => require('ComponentForWeb'),
})();

;

```


---

# Platform-Specific Code

When building a cross-platform app, you'll want to re-use as much code as possible. Scenarios may arise where it makes sense for the code to be different, for example you may want to implement separate visual components for Android and iOS.

React Native provides two ways to organize your code and separate it by platform:

* Using the [`Platform` module](/docs/platform-specific-code.md#platform-module).
* Using [platform-specific file extensions](/docs/platform-specific-code.md#platform-specific-extensions).

Certain components may have properties that work on one platform only. All of these props are annotated with `@platform` and have a small badge next to them on the website.

## Platform module[​](#platform-module "Direct link to Platform module")

React Native provides a module that detects the platform in which the app is running. You can use the detection logic to implement platform-specific code. Use this option when only small parts of a component are platform-specific.

tsx

```

import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
height: Platform.OS === 'ios' ? 200 : 100,
});

```

`Platform.OS` will be `ios` when running on iOS and `android` when running on Android.

There is also a `Platform.select` method available that, given an object where keys can be one of `'ios' | 'android' | 'native' | 'default'`, returns the most fitting value for the platform you are currently running on. That is, if you're running on a phone, `ios` and `android` keys will take preference. If those are not specified, `native` key will be used and then the `default` key.

tsx

```

import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container: {
flex: 1,
...Platform.select({
ios: {
backgroundColor: 'red',
},
android: {
backgroundColor: 'green',
},
default: {
// other platforms, web for example
backgroundColor: 'blue',
},
}),
},
});

```

This will result in a container having `flex: 1` on all platforms, a red background color on iOS, a green background color on Android, and a blue background color on other platforms.

Since it accepts `any` value, you can also use it to return platform-specific components, like below:

tsx

```

const Component = Platform.select({
ios: () => require('ComponentIOS'),
android: () => require('ComponentAndroid'),
})();

;

```

tsx

```

const Component = Platform.select({
native: () => require('ComponentForNative'),
default: () => require('ComponentForWeb'),
})();

;

```

### Detecting the Android versionAndroid[​](#detecting-the-android-version-android "Direct link to detecting-the-android-version-android")

On Android, the `Platform` module can also be used to detect the version of the Android Platform in which the app is running:

tsx

```

import {Platform} from 'react-native';

if (Platform.Version === 25) {
console.log('Running on Nougat!');
}

```

**Note**: `Version` is set to the Android API version not the Android OS version. To find a mapping please refer to [Android Version History](https://en.wikipedia.org/wiki/Android_version_history#Overview).

### Detecting the iOS versioniOS[​](#detecting-the-ios-version-ios "Direct link to detecting-the-ios-version-ios")

On iOS, the `Version` is a result of `-[UIDevice systemVersion]`, which is a string with the current version of the operating system. An example of the system version is "10.3". For example, to detect the major version number on iOS:

tsx

```

import {Platform} from 'react-native';

const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
console.log('Work around a change in behavior');
}

```

## Platform-specific extensions[​](#platform-specific-extensions "Direct link to Platform-specific extensions")

When your platform-specific code is more complex, you should consider splitting the code out into separate files. React Native will detect when a file has a `.ios.` or `.android.` extension and load the relevant platform file when required from other components.

For example, say you have the following files in your project:

shell

```

BigButton.ios.js
BigButton.android.js

```

You can then import the component as follows:

tsx

```

import BigButton from './BigButton';

```

React Native will automatically pick up the right file based on the running platform.

## Native-specific extensions (i.e. sharing code with NodeJS and Web)[​](#native-specific-extensions-ie-sharing-code-with-nodejs-and-web "Direct link to Native-specific extensions (i.e. sharing code with NodeJS and Web)")

You can also use the `.native.js` extension when a module needs to be shared between NodeJS/Web and React Native but it has no Android/iOS differences. This is especially useful for projects that have common code shared among React Native and ReactJS.

For example, say you have the following files in your project:

shell

```

Container.js # picked up by webpack, Rollup or any other Web bundler
Container.native.js # picked up by the React Native bundler for both Android and iOS (Metro)

```

You can still import it without the `.native` extension, as follows:

tsx

```

import Container from './Container';

```

**Pro tip:** Configure your Web bundler to ignore `.native.js` extensions in order to avoid having unused code in your production bundle, thus reducing the final bundle size.


---

# PlatformColor

js

```

PlatformColor(color1, \[color2, ...colorN]);

```

You can use the `PlatformColor` function to access native colors on the target platform by supplying the native color’s corresponding string value. You pass a string to the `PlatformColor` function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application.

If you pass more than one string value to the `PlatformColor` function, it will treat the first value as the default and the rest as fallback.

js

```

PlatformColor('bogusName', 'linkColor');

```

Since native colors can be sensitive to themes and/or high contrast, this platform specific logic also translates inside your components.

### Supported colors[​](#supported-colors "Direct link to Supported colors")

For a full list of the types of system colors supported, see:

* Android:

  <!-- -->

  * [R.attr](https://developer.android.com/reference/android/R.attr) - `?attr` prefix
  * [R.color](https://developer.android.com/reference/android/R.color) - `@android:color` prefix

* iOS (Objective-C and Swift notations):

  <!-- -->

  * [UIColor Standard Colors](https://developer.apple.com/documentation/uikit/uicolor/standard_colors)
  * [UIColor UI Element Colors](https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors)

#### Developer notes[​](#developer-notes "Direct link to Developer notes")

* Web

info

If you’re familiar with design systems, another way of thinking about this is that `PlatformColor` lets you tap into the local design system's color tokens so your app can blend right in!

## Example[​](#example "Direct link to Example")

The string value provided to the `PlatformColor` function must match the string as it exists on the native platform where the app is running. In order to avoid runtime errors, the function should be wrapped in a platform check, either through a `Platform.OS === 'platform'` or a `Platform.select()`, as shown on the example above.

note

You can find a complete example that demonstrates proper, intended use of `PlatformColor` in [PlatformColorExample.js](https://github.com/facebook/react-native/blob/main/packages/rn-tester/js/examples/PlatformColor/PlatformColorExample.js).


---

# Pressable

Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.

tsx

```

I'm pressable!

```

## How it works[​](#how-it-works "Direct link to How it works")

On an element wrapped by `Pressable`:

* [`onPressIn`](#onpressin) is called when a press is activated.
* [`onPressOut`](#onpressout) is called when the press gesture is deactivated.

After pressing [`onPressIn`](#onpressin), one of two things will happen:

1. The person will remove their finger, triggering [`onPressOut`](#onpressout) followed by [`onPress`](#onpress).
2. If the person leaves their finger longer than 500 milliseconds before removing it, [`onLongPress`](#onlongpress) is triggered. ([`onPressOut`](#onpressout) will still fire when they remove their finger.)

![Diagram of the onPress events in sequence.](/docs/assets/d_pressable_pressing.svg)

Fingers are not the most precise instruments, and it is common for users to accidentally activate the wrong element or miss the activation area. To help, `Pressable` has an optional `HitRect` you can use to define how far a touch can register away from the wrapped element. Presses can start anywhere within a `HitRect`.

`PressRect` allows presses to move beyond the element and its `HitRect` while maintaining activation and being eligible for a "press"—think of sliding your finger slowly away from a button you're pressing down on.

note

The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.

![Diagram of HitRect and PressRect and how they work.](/docs/assets/d_pressable_anatomy.svg)

You can set `HitRect` with `hitSlop` and set `PressRect` with `pressRetentionOffset`.

info

`Pressable` uses React Native's `Pressability` API. For more information around the state machine flow of Pressability and how it works, check out the implementation for [Pressability](https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Pressability/Pressability.js#L350).

## Example[​](#example "Direct link to Example")

## Props[​](#props "Direct link to Props")

### `android_disableSound`Android[​](#android_disablesound-android "Direct link to android_disablesound-android")

If true, doesn't play Android system sound on press.

| Type    | Default |
| ------- | ------- |
| boolean | `false` |

### `android_ripple`Android[​](#android_ripple-android "Direct link to android_ripple-android")

Enables the Android ripple effect and configures its properties.

| Type                                            |
| ----------------------------------------------- |
| [RippleConfig](/docs/pressable.md#rippleconfig) |

### `children`[​](#children "Direct link to children")

Either children or a function that receives a boolean reflecting whether the component is currently pressed.

| Type                              |
| --------------------------------- |
| [React Node](/docs/react-node.md) |

### `unstable_pressDelay`[​](#unstable_pressdelay "Direct link to unstable_pressdelay")

Duration (in milliseconds) to wait after press down before calling `onPressIn`.

| Type   |
| ------ |
| number |

### `delayLongPress`[​](#delaylongpress "Direct link to delaylongpress")

Duration (in milliseconds) from `onPressIn` before `onLongPress` is called.

| Type   | Default |
| ------ | ------- |
| number | `500`   |

### `disabled`[​](#disabled "Direct link to disabled")

Whether the press behavior is disabled.

| Type    | Default |
| ------- | ------- |
| boolean | `false` |

### `hitSlop`[​](#hitslop "Direct link to hitslop")

Sets additional distance outside of element in which a press can be detected.

| Type                            |
| ------------------------------- |
| [Rect](/docs/rect.md) or number |

### `onHoverIn`[​](#onhoverin "Direct link to onhoverin")

Called when the hover is activated to provide visual feedback.

| Type                                    |
| --------------------------------------- |
| `({ nativeEvent: MouseEvent }) => void` |

### `onHoverOut`[​](#onhoverout "Direct link to onhoverout")

Called when the hover is deactivated to undo visual feedback.

| Type                                    |
| --------------------------------------- |
| `({ nativeEvent: MouseEvent }) => void` |

### `onLongPress`[​](#onlongpress "Direct link to onlongpress")

Called if the time after `onPressIn` lasts longer than 500 milliseconds. This time period can be customized with [`delayLongPress`](#delaylongpress).

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

### `onPress`[​](#onpress "Direct link to onpress")

Called after `onPressOut`.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

### `onPressIn`[​](#onpressin "Direct link to onpressin")

Called immediately when a touch is engaged, before `onPressOut` and `onPress`.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

### `onPressMove`[​](#onpressmove "Direct link to onpressmove")

Called when the press location moves.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

### `onPressOut`[​](#onpressout "Direct link to onpressout")

Called when a touch is released.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

### `pressRetentionOffset`[​](#pressretentionoffset "Direct link to pressretentionoffset")

Additional distance outside of this view in which a touch is considered a press before `onPressOut` is triggered.

| Type                            | Default                                      |
| ------------------------------- | -------------------------------------------- |
| [Rect](/docs/rect.md) or number | `{bottom: 30, left: 20, right: 20, top: 20}` |

### `style`[​](#style "Direct link to style")

Either view styles or a function that receives a boolean reflecting whether the component is currently pressed and returns view styles.

| Type                                                                              |
| --------------------------------------------------------------------------------- |
| [View Style](/docs/view-style-props.md) or `({ pressed: boolean }) => View Style` |

### `testOnly_pressed`[​](#testonly_pressed "Direct link to testonly_pressed")

Used only for documentation or testing (e.g. snapshot testing).

| Type    | Default |
| ------- | ------- |
| boolean | `false` |

## Type Definitions[​](#type-definitions "Direct link to Type Definitions")

### RippleConfig[​](#rippleconfig "Direct link to RippleConfig")

Ripple effect configuration for the `android_ripple` property.

| Type   |
| ------ |
| object |

**Properties:**

| Name       | Type                     | Required | Description                                                                                                                                                                                                                                                  |
| ---------- | ------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| color      | [color](/docs/colors.md) | No       | Defines the color of the ripple effect.                                                                                                                                                                                                                      |
| borderless | boolean                  | No       | Defines if ripple effect should not include border.                                                                                                                                                                                                          |
| radius     | number                   | No       | Defines the radius of the ripple effect.                                                                                                                                                                                                                     |
| foreground | boolean                  | No       | Set to true to add the ripple effect to the foreground of the view, instead of the background. This is useful if one of your child views has a background of its own, or you're e.g. displaying images, and you don't want the ripple to be covered by them. |


---

# PressEvent Object Type

`PressEvent` object is returned in the callback as a result of user press interaction, for example `onPress` in [Button](/docs/button.md) component.

## Example[​](#example "Direct link to Example")

js

```

{
changedTouches: \[PressEvent],
identifier: 1,
locationX: 8,
locationY: 4.5,
pageX: 24,
pageY: 49.5,
target: 1127,
timestamp: 85131876.58868201,
touches: \[]
}

```

## Keys and values[​](#keys-and-values "Direct link to Keys and values")

### `changedTouches`[​](#changedtouches "Direct link to changedtouches")

Array of all PressEvents that have changed since the last event.

| Type                 | Optional |
| -------------------- | -------- |
| array of PressEvents | No       |

### `force`iOS[​](#force-ios "Direct link to force-ios")

Amount of force used during the 3D Touch press. Returns the float value in range from `0.0` to `1.0`.

| Type   | Optional |
| ------ | -------- |
| number | Yes      |

### `identifier`[​](#identifier "Direct link to identifier")

Unique numeric identifier assigned to the event.

| Type   | Optional |
| ------ | -------- |
| number | No       |

### `locationX`[​](#locationx "Direct link to locationx")

Touch origin X coordinate inside touchable area (relative to the element).

| Type   | Optional |
| ------ | -------- |
| number | No       |

### `locationY`[​](#locationy "Direct link to locationy")

Touch origin Y coordinate inside touchable area (relative to the element).

| Type   | Optional |
| ------ | -------- |
| number | No       |

### `pageX`[​](#pagex "Direct link to pagex")

Touch origin X coordinate on the screen (relative to the root view).

| Type   | Optional |
| ------ | -------- |
| number | No       |

### `pageY`[​](#pagey "Direct link to pagey")

Touch origin Y coordinate on the screen (relative to the root view).

| Type   | Optional |
| ------ | -------- |
| number | No       |

### `target`[​](#target "Direct link to target")

The node id of the element receiving the PressEvent.

| Type                        | Optional |
| --------------------------- | -------- |
| number, `null`, `undefined` | No       |

### `timestamp`[​](#timestamp "Direct link to timestamp")

Timestamp value when a PressEvent occurred. Value is represented in milliseconds.

| Type   | Optional |
| ------ | -------- |
| number | No       |

### `touches`[​](#touches "Direct link to touches")

Array of all current PressEvents on the screen.

| Type                 | Optional |
| -------------------- | -------- |
| array of PressEvents | No       |

## Used by[​](#used-by "Direct link to Used by")

* [`Button`](/docs/button.md)
* [`PanResponder`](/docs/panresponder.md)
* [`Pressable`](/docs/pressable.md)
* [`ScrollView`](/docs/scrollview.md)
* [`Text`](/docs/text.md)
* [`TextInput`](/docs/textinput.md)
* [`TouchableHighlight`](/docs/touchablenativefeedback.md)
* [`TouchableOpacity`](/docs/touchablewithoutfeedback.md)
* [`TouchableNativeFeedback`](/docs/touchablenativefeedback.md)
* [`TouchableWithoutFeedback`](/docs/touchablewithoutfeedback.md)
* [`View`](/docs/view.md)


---

# Profiling

Profiling is the process of analyzing an app's performance, resource usage, and behavior to identify potential bottlenecks or inefficiencies. It's worth making use of profiling tools to ensure your app works smoothly across different devices and conditions.

For iOS, Instruments is an invaluable tool, and on Android you should learn to use the [Android Studio Profiler](/docs/profiling.md#profiling-android-ui-performance-with-system-tracing).

But first, [**make sure that Development Mode is OFF!**](/docs/performance.md#running-in-development-mode-devtrue).

## Profiling Android UI Performance with System Tracing[​](#profiling-android-ui-performance-with-system-tracing "Direct link to Profiling Android UI Performance with System Tracing")

Android supports 10k+ different phones and is generalized to support software rendering: the framework architecture and need to generalize across many hardware targets unfortunately means you get less for free relative to iOS. But sometimes, there are things you can improve -- and many times it's not native code's fault at all!

The first step for debugging this jank is to answer the fundamental question of where your time is being spent during each 16ms frame. For that, we'll be using the [built-in System Tracing profiler in the Android Studio](https://developer.android.com/studio/profile).

note

The standalone `systrace` tool has been removed from Android platform-tools. Use the Android Studio Profiler instead, which provides the same functionality with a better user interface.

### 1. Collecting a trace[​](#1-collecting-a-trace "Direct link to 1. Collecting a trace")

First, connect a device that exhibits the stuttering you want to investigate to your computer via USB. Open your project's `android` folder in Android Studio, select your device in the top right pane, and [run your project as profileable](https://developer.android.com/studio/profile#build-and-run).

When your app is built as profileable and is running on the device, get your app to the point right before the navigation/animation you want to profile and start the ["Capture System Activities" task](https://developer.android.com/studio/profile#start-profiling) in the Android Studio Profiler pane.

Once the trace starts collecting, perform the animation or interaction you care about. Then press "Stop recording". You can now [inspect the trace directly in the Android Studio](https://developer.android.com/studio/profile/jank-detection). Alternatively, you can select it in the "Past Recordings" pane, press "Export recording", and open it in a tool like [Perfetto](https://perfetto.dev/).

### 2. Reading the trace[​](#2-reading-the-trace "Direct link to 2. Reading the trace")

After opening the trace in Android Studio or Perfetto, you should see something like this:

![Example](/assets/images/SystraceExample-05b3ea44681d0291c1040e5f655fcd95.png)

Hint

Use the WASD keys to strafe and zoom.

The exact UI might be different but the instructions below will apply regardless of the tool you're using.

Enable VSync highlighting

Check this checkbox at the top right of the screen to highlight the 16ms frame boundaries:

![Enable VSync Highlighting](data:image/png;base64,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)

You should see zebra stripes as in the screenshot above. If you don't, try profiling on a different device: Samsung has been known to have issues displaying vsyncs while the Nexus series is generally pretty reliable.

### 3. Find your process[​](#3-find-your-process "Direct link to 3. Find your process")

Scroll until you see (part of) the name of your package. In this case, I was profiling `com.facebook.adsmanager`, which shows up as `book.adsmanager` because of silly thread name limits in the kernel.

On the left side, you'll see a set of threads which correspond to the timeline rows on the right. There are a few threads we care about for our purposes: the UI thread (which has your package name or the name UI Thread), `mqt_js`, and `mqt_native_modules`. If you're running on Android 5+, we also care about the Render Thread.

* **UI Thread.** This is where standard android measure/layout/draw happens. The thread name on the right will be your package name (in my case book.adsmanager) or UI Thread. The events that you see on this thread should look something like this and have to do with `Choreographer`, `traversals`, and `DispatchUI`:

  ![UI Thread Example](data:image/png;base64,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)

* **JS Thread.** This is where JavaScript is executed. The thread name will be either `mqt_js` or `<...>` depending on how cooperative the kernel on your device is being. To identify it if it doesn't have a name, look for things like `JSCall`, `Bridge.executeJSCall`, etc:

  ![JS Thread Example](data:image/png;base64,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)

* **Native Modules Thread.** This is where native module calls (e.g. the `UIManager`) are executed. The thread name will be either `mqt_native_modules` or `<...>`. To identify it in the latter case, look for things like `NativeCall`, `callJavaModuleMethod`, and `onBatchComplete`:

  ![Native Modules Thread Example](data:image/png;base64,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)

* **Bonus: Render Thread.** If you're using Android L (5.0) and up, you will also have a render thread in your application. This thread generates the actual OpenGL commands used to draw your UI. The thread name will be either `RenderThread` or `<...>`. To identify it in the latter case, look for things like `DrawFrame` and `queueBuffer`:

  ![Render Thread Example](data:image/png;base64,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)

## Identifying a culprit[​](#identifying-a-culprit "Direct link to Identifying a culprit")

A smooth animation should look something like the following:

![Smooth Animation](/assets/images/SystraceWellBehaved-82dfa037cb9e1d29d7daae2d6dba2ffc.png)

Each change in color is a frame -- remember that in order to display a frame, all our UI work needs to be done by the end of that 16ms period. Notice that no thread is working close to the frame boundary. An application rendering like this is rendering at 60 FPS.

If you noticed chop, however, you might see something like this:

![Choppy Animation from JS](/assets/images/SystraceBadJS-b8518ae5e520b074ccc7722fcf30b7ed.png)

Notice that the JS thread is executing almost all the time, and across frame boundaries! This app is not rendering at 60 FPS. In this case, **the problem lies in JS**.

You might also see something like this:

![Choppy Animation from UI](/assets/images/SystraceBadUI-cc4bb271e7a568efc7933d1c6f453d67.png)

In this case, the UI and render threads are the ones that have work crossing frame boundaries. The UI that we're trying to render on each frame is requiring too much work to be done. In this case, **the problem lies in the native views being rendered**.

At this point, you'll have some very helpful information to inform your next steps.

## Resolving JavaScript issues[​](#resolving-javascript-issues "Direct link to Resolving JavaScript issues")

If you identified a JS problem, look for clues in the specific JS that you're executing. In the scenario above, we see `RCTEventEmitter` being called multiple times per frame. Here's a zoom-in of the JS thread from the trace above:

![Too much JS](/assets/images/SystraceBadJS2-f454f409a22625f659d465abdab06ce0.png)

This doesn't seem right. Why is it being called so often? Are they actually different events? The answers to these questions will probably depend on your product code. And many times, you'll want to look into [shouldComponentUpdate](https://react.dev/reference/react/Component#shouldcomponentupdate).

## Resolving native UI Issues[​](#resolving-native-ui-issues "Direct link to Resolving native UI Issues")

If you identified a native UI problem, there are usually two scenarios:

1. the UI you're trying to draw each frame involves too much work on the GPU, or
2. You're constructing new UI during the animation/interaction (e.g. loading in new content during a scroll).

### Too much GPU work[​](#too-much-gpu-work "Direct link to Too much GPU work")

In the first scenario, you'll see a trace that has the UI thread and/or Render Thread looking like this:

![Overloaded GPU](/assets/images/SystraceBadUI-cc4bb271e7a568efc7933d1c6f453d67.png)

Notice the long amount of time spent in `DrawFrame` that crosses frame boundaries. This is time spent waiting for the GPU to drain its command buffer from the previous frame.

To mitigate this, you should:

* investigate using `renderToHardwareTextureAndroid` for complex, static content that is being animated/transformed (e.g. the `Navigator` slide/alpha animations)
* make sure that you are **not** using `needsOffscreenAlphaCompositing`, which is disabled by default, as it greatly increases the per-frame load on the GPU in most cases.

### Creating new views on the UI thread[​](#creating-new-views-on-the-ui-thread "Direct link to Creating new views on the UI thread")

In the second scenario, you'll see something more like this:

![Creating Views](/assets/images/SystraceBadCreateUI-fc9d228fc136be3574c0c5805ac0d7b5.png)

Notice that first the JS thread thinks for a bit, then you see some work done on the native modules thread, followed by an expensive traversal on the UI thread.

There isn't a quick way to mitigate this unless you're able to postpone creating new UI until after the interaction, or you are able to simplify the UI you're creating. The react native team is working on an infrastructure level solution for this that will allow new UI to be created and configured off the main thread, allowing the interaction to continue smoothly.

### Finding native CPU hotspots[​](#finding-native-cpu-hotspots "Direct link to Finding native CPU hotspots")

If the problem seems to be on the native side, you can use the [CPU hotspot profiler](https://developer.android.com/studio/profile/record-java-kotlin-methods) to get more details on what's happening. Open the Android Studio Profiler panel and select "Find CPU Hotspots (Java/Kotlin Method Recording)".

Choose the Java/Kotlin recording

Make sure you select "Find CPU Hotspots **(Java/Kotlin Recording)**" rather than "Find CPU Hotspots (Callstack Sample)". They have similar icons but do different things.

Perform the interactions and press "Stop recording". Recording is resource-intensive, so keep the interaction short. You can then either inspect the resulting trace in the Android Studio or export it and open it in an online tool like [Firefox Profiler](https://profiler.firefox.com/).

Unlike System Trace, CPU hotspot profiling is slow so it won't give you accurate measurements. However, it should give you an idea of what native methods are being called, and where the time is being spent proportionally during each frame.


---

# 🗑️ ProgressBarAndroid

Deprecated

Use one of the [community packages](https://reactnative.directory/?search=progressbar) instead.

Android-only React component used to indicate that the app is loading or there is some activity in the app.

### Example[​](#example "Direct link to Example")

***

# Reference

## Props[​](#props "Direct link to Props")

Inherits [View Props](/docs/view.md#props).

### `animating`[​](#animating "Direct link to animating")

Whether to show the ProgressBar (true, the default) or hide it (false).

| Type | Required |
| ---- | -------- |
| bool | No       |

***

### `color`[​](#color "Direct link to color")

Color of the progress bar.

| Type                     | Required |
| ------------------------ | -------- |
| [color](/docs/colors.md) | No       |

***

### `indeterminate`[​](#indeterminate "Direct link to indeterminate")

If the progress bar will show indeterminate progress. Note that this can only be false if styleAttr is Horizontal, and requires a `progress` value.

| Type              | Required |
| ----------------- | -------- |
| indeterminateType | No       |

***

### `progress`[​](#progress "Direct link to progress")

The progress value (between 0 and 1).

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `styleAttr`[​](#styleattr "Direct link to styleattr")

Style of the ProgressBar. One of:

* Horizontal
* Normal (default)
* Small
* Large
* Inverse
* SmallInverse
* LargeInverse

| Type                                                                                      | Required |
| ----------------------------------------------------------------------------------------- | -------- |
| enum('Horizontal', 'Normal', 'Small', 'Large', 'Inverse', 'SmallInverse', 'LargeInverse') | No       |

***

### `testID`[​](#testid "Direct link to testid")

Used to locate this view in end-to-end tests.

| Type   | Required |
| ------ | -------- |
| string | No       |


---

# Props

Most components can be customized when they are created, with different parameters. These created parameters are called `props`, short for properties.

For example, one basic React Native component is the `Image`. When you create an image, you can use a prop named `source` to control what image it shows.

Notice the braces surrounding `{pic}` - these embed the variable `pic` into JSX. You can put any JavaScript expression inside braces in JSX.

Your own components can also use `props`. This lets you make a single component that is used in many different places in your app, with slightly different properties in each place by referring to `props` in your `render` function. Here's an example:

* TypeScript
* JavaScript

Using `name` as a prop lets us customize the `Greeting` component, so we can reuse that component for each of our greetings. This example also uses the `Greeting` component in JSX, similar to the [Core Components](/docs/intro-react-native-components.md). The power to do this is what makes React so cool - if you find yourself wishing that you had a different set of UI primitives to work with, you can invent new ones.

The other new thing going on here is the [`View`](/docs/view.md) component. A [`View`](/docs/view.md) is useful as a container for other components, to help control style and layout.

With `props` and the basic [`Text`](/docs/text.md), [`Image`](/docs/image.md), and [`View`](/docs/view.md) components, you can build a wide variety of static screens. To learn how to make your app change over time, you need to [learn about State](/docs/state.md).


---

# Publishing to Apple App Store

The publishing process is the same as any other native iOS app, with some additional considerations to take into account.

info

If you are using Expo, read the Expo guide for [Deploying to App Stores](https://docs.expo.dev/distribution/app-stores/) to build and submit your app for the Apple App Store. This guide works with any React Native app to automate the deployment process.

### 1. Configure release scheme[​](#1-configure-release-scheme "Direct link to 1. Configure release scheme")

Building an app for distribution in the App Store requires using the `Release` scheme in Xcode. Apps built for `Release` will automatically disable the in-app Dev Menu, which will prevent your users from inadvertently accessing the menu in production. It will also bundle the JavaScript locally, so you can put the app on a device and test whilst not connected to the computer.

To configure your app to be built using the `Release` scheme, go to **Product** → **Scheme** → **Edit Scheme**. Select the **Run** tab in the sidebar, then set the Build Configuration dropdown to `Release`.

![](/assets/images/ConfigureReleaseScheme-68e17e8d9a2cf2b73adb47865b45399d.png)

#### Pro Tips[​](#pro-tips "Direct link to Pro Tips")

The static bundle is built every time you target a physical device, even in Debug. If you want to save time, turn off bundle generation in Debug by adding the following to your shell script in the Xcode Build Phase `Bundle React Native code and images`:

shell

```

if \[ "${CONFIGURATION}" == "Debug" ]; then
export SKIP\_BUNDLING=true
fi

```

### 2. Build app for release[​](#2-build-app-for-release "Direct link to 2. Build app for release")

You can now build your app for release by tapping `Cmd ⌘` + `B` or selecting **Product** → **Build** from the menu bar. Once built for release, you'll be able to distribute the app to beta testers and submit the app to the App Store.

info

You can also use the `React Native CLI` to perform this operation using the option `--mode` with the value `Release` (e.g. from the root of your project: `npm run ios -- --mode="Release"` or `yarn ios --mode Release`).

Once you are done with the testing and ready to publish to App Store, follow along with this guide.

* Launch your terminal, and navigate into the iOS folder of your app and type `open .`.
* Double click on YOUR\_APP\_NAME.xcworkspace. It should launch Xcode.
* Click on `Product` → `Archive`. Make sure to set the device to "Any iOS Device (arm64)".

note

Check your Bundle Identifier and make sure it is exactly same as the one you have created in the Identifiers in Apple Developer Dashboard.

* After the archive is completed, in the archive window, click on `Distribute App`.
* Click on `App Store Connect` now (if you want to publish in App Store).
* Click `Upload` → Make sure all the checkboxes are selected, hit `Next`.
* Choose between `Automatically manage signing` and `Manually manage signing` based on your needs.
* Click on `Upload`.
* Now you can find it in the App Store Connect under TestFlight.

Now fill up the necessary information and in the Build Section, select the build of the app and click on `Save` → `Submit For Review`.

### 3. Screenshots[​](#3-screenshots "Direct link to 3. Screenshots")

The Apple Store requires you have screenshots for the latest devices. The reference for such devices would be found [here](https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications/). Note that screenshots for some display sizes are not required if they are provided for other sizes.


---

# 🗑️ PushNotificationIOS

Deprecated

Use one of the [community packages](https://reactnative.directory/?search=notification) instead.

### Projects with Native Code Only

The following section only applies to projects with native code exposed. If you are using the managed Expo workflow, see the guide on [Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/) in the Expo documentation for the appropriate alternative.

Handle notifications for your app, including scheduling and permissions.

***

## Getting Started[​](#getting-started "Direct link to Getting Started")

To enable push notifications, [configure your notifications with Apple](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server) and your server-side system.

Then, [enable remote notifications](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app#2980038) in your project. This will automatically enable the required settings.

### Enable support for `register` events[​](#enable-support-for-register-events "Direct link to enable-support-for-register-events")

In your `AppDelegate.m`, add:

objectivec

```

\#import \<React/RCTPushNotificationManager.h>

```

Then implement the following in order to handle remote notification registration events:

objectivec

```

- (void)application:(UIApplication \*)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData \*)deviceToken
  {
  // This will trigger 'register' events on PushNotificationIOS
  \[RCTPushNotificationManager didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
  }
- (void)application:(UIApplication \*)application didFailToRegisterForRemoteNotificationsWithError:(NSError \*)error
  {
  // This will trigger 'registrationError' events on PushNotificationIOS
  \[RCTPushNotificationManager didFailToRegisterForRemoteNotificationsWithError:error];
  }

```

### Handle notifications[​](#handle-notifications "Direct link to Handle notifications")

You'll need to implement `UNUserNotificationCenterDelegate` in your `AppDelegate`:

objectivec

```

\#import \<UserNotifications/UserNotifications.h>

@interface YourAppDelegate ()
@end

```

Set the delegate on app launch:

objectivec

```

- (BOOL)application:(UIApplication \*)application didFinishLaunchingWithOptions:(NSDictionary \*)launchOptions
  {
  ...
  UNUserNotificationCenter \*center = \[UNUserNotificationCenter currentNotificationCenter];
  center.delegate = self;

  return YES;
  }

```

#### Foreground notifications[​](#foreground-notifications "Direct link to Foreground notifications")

Implement `userNotificationCenter:willPresentNotification:withCompletionHandler:` to handle notifications that arrive when the app is in the foreground. Use the completionHandler to determine if the notification will be shown to the user and notify `RCTPushNotificationManager` accordingly:

objectivec

```

// Called when a notification is delivered to a foreground app.

- (void)userNotificationCenter:(UNUserNotificationCenter \*)center
  willPresentNotification:(UNNotification \*)notification
  withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler
  {
  // This will trigger 'notification' and 'localNotification' events on PushNotificationIOS
  \[RCTPushNotificationManager didReceiveNotification:notification];
  // Decide if and how the notification will be shown to the user
  completionHandler(UNNotificationPresentationOptionNone);
  }

```

#### Background notifications[​](#background-notifications "Direct link to Background notifications")

Implement `userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:` to handle when a notification is tapped, typically called for background notifications which the user taps to open the app. However, if you had set foreground notifications to be shown in `userNotificationCenter:willPresentNotification:withCompletionHandler:`, this method will also be invoked on foreground notifications when tapped. In this case, you should only notify `RCTPushNotificationManager` in one of these callbacks.

If the tapped notification resulted in app launch, call `setInitialNotification:`. If the notification was not previously handled by `userNotificationCenter:willPresentNotification:withCompletionHandler:`, call `didReceiveNotification:` as well:

objectivec

```

- (void)  userNotificationCenter:(UNUserNotificationCenter \*)center
  didReceiveNotificationResponse:(UNNotificationResponse \*)response
  withCompletionHandler:(void (^)(void))completionHandler
  {
  // This condition passes if the notification was tapped to launch the app
  if (\[response.actionIdentifier isEqualToString:UNNotificationDefaultActionIdentifier]) {
  // Allow the notification to be retrieved on the JS side using getInitialNotification()
  \[RCTPushNotificationManager setInitialNotification:response.notification];
  }
  // This will trigger 'notification' and 'localNotification' events on PushNotificationIOS
  \[RCTPushNotificationManager didReceiveNotification:response.notification];
  completionHandler();
  }

```

***

# Reference

## Methods[​](#methods "Direct link to Methods")

### `presentLocalNotification()`[​](#presentlocalnotification "Direct link to presentlocalnotification")

tsx

```

static presentLocalNotification(details: PresentLocalNotificationDetails);

```

Schedules a local notification for immediate presentation.

**Parameters:**

| Name    | Type   | Required | Description |
| ------- | ------ | -------- | ----------- |
| details | object | Yes      | See below.  |

`details` is an object containing:

* `alertTitle` : The text displayed as the title of the notification alert.
* `alertBody` : The message displayed in the notification alert.
* `userInfo` : An object containing additional notification data (optional).
* `category` : The category of this notification, required for actionable notifications (optional). e.g. notifications with additional actions such as Reply or Like.
* `applicationIconBadgeNumber` The number to display as the app's icon badge. The default value of this property is 0, which means that no badge is displayed (optional).
* `isSilent` : If true, the notification will appear without sound (optional).
* `soundName` : The sound played when the notification is fired (optional).
* `alertAction` : DEPRECATED. This was used for iOS's legacy UILocalNotification.

***

### `scheduleLocalNotification()`[​](#schedulelocalnotification "Direct link to schedulelocalnotification")

tsx

```

static scheduleLocalNotification(details: ScheduleLocalNotificationDetails);

```

Schedules a local notification for future presentation.

**Parameters:**

| Name    | Type   | Required | Description |
| ------- | ------ | -------- | ----------- |
| details | object | Yes      | See below.  |

`details` is an object containing:

* `alertTitle` : The text displayed as the title of the notification alert.
* `alertBody` : The message displayed in the notification alert.
* `fireDate` : When the notification will be fired. Schedule notifications using either `fireDate` or `fireIntervalSeconds`, with `fireDate` taking precedence.
* `fireIntervalSeconds` : Seconds from now to display the notification.
* `userInfo` : An object containing additional notification data (optional).
* `category` : The category of this notification, required for actionable notifications (optional). e.g. notifications with additional actions such as Reply or Like.
* `applicationIconBadgeNumber` The number to display as the app's icon badge. The default value of this property is 0, which means that no badge is displayed (optional).
* `isSilent` : If true, the notification will appear without sound (optional).
* `soundName` : The sound played when the notification is fired (optional).
* `alertAction` : DEPRECATED. This was used for iOS's legacy UILocalNotification.
* `repeatInterval` : DEPRECATED. Use `fireDate` or `fireIntervalSeconds` instead.

***

### `cancelAllLocalNotifications()`[​](#cancelalllocalnotifications "Direct link to cancelalllocalnotifications")

tsx

```

static cancelAllLocalNotifications();

```

Cancels all scheduled local notifications.

***

### `removeAllDeliveredNotifications()`[​](#removealldeliverednotifications "Direct link to removealldeliverednotifications")

tsx

```

static removeAllDeliveredNotifications();

```

Removes all delivered notifications from Notification Center.

***

### `getDeliveredNotifications()`[​](#getdeliverednotifications "Direct link to getdeliverednotifications")

tsx

```

static getDeliveredNotifications(callback: (notifications: Object\[]) => void);

```

Provides a list of the app’s notifications that are currently displayed in Notification Center.

**Parameters:**

| Name     | Type     | Required | Description                                                  |
| -------- | -------- | -------- | ------------------------------------------------------------ |
| callback | function | Yes      | Function which receives an array of delivered notifications. |

A delivered notification is an object containing:

* `identifier` : The identifier of this notification.
* `title` : The title of this notification.
* `body` : The body of this notification.
* `category` : The category of this notification (optional).
* `userInfo` : An object containing additional notification data (optional).
* `thread-id` : The thread identifier of this notification, if it has one.

***

### `removeDeliveredNotifications()`[​](#removedeliverednotifications "Direct link to removedeliverednotifications")

tsx

```

static removeDeliveredNotifications(identifiers: string\[]);

```

Removes the specified notifications from Notification Center.

**Parameters:**

| Name        | Type  | Required | Description                        |
| ----------- | ----- | -------- | ---------------------------------- |
| identifiers | array | Yes      | Array of notification identifiers. |

***

### `setApplicationIconBadgeNumber()`[​](#setapplicationiconbadgenumber "Direct link to setapplicationiconbadgenumber")

tsx

```

static setApplicationIconBadgeNumber(num: number);

```

Sets the badge number for the app icon on the Home Screen.

**Parameters:**

| Name   | Type   | Required | Description                    |
| ------ | ------ | -------- | ------------------------------ |
| number | number | Yes      | Badge number for the app icon. |

***

### `getApplicationIconBadgeNumber()`[​](#getapplicationiconbadgenumber "Direct link to getapplicationiconbadgenumber")

tsx

```

static getApplicationIconBadgeNumber(callback: (num: number) => void);

```

Gets the current badge number for the app icon on the Home Screen.

**Parameters:**

| Name     | Type     | Required | Description                                        |
| -------- | -------- | -------- | -------------------------------------------------- |
| callback | function | Yes      | Function which processes the current badge number. |

***

### `cancelLocalNotifications()`[​](#cancellocalnotifications "Direct link to cancellocalnotifications")

tsx

```

static cancelLocalNotifications(userInfo: Object);

```

Cancels any scheduled local notifications which match the fields in the provided `userInfo`.

**Parameters:**

| Name     | Type   | Required | Description |
| -------- | ------ | -------- | ----------- |
| userInfo | object | No       |             |

***

### `getScheduledLocalNotifications()`[​](#getscheduledlocalnotifications "Direct link to getscheduledlocalnotifications")

tsx

```

static getScheduledLocalNotifications(
callback: (notifications: ScheduleLocalNotificationDetails\[]) => void,
);

```

Gets the list of local notifications that are currently scheduled.

**Parameters:**

| Name     | Type     | Required | Description                                                                  |
| -------- | -------- | -------- | ---------------------------------------------------------------------------- |
| callback | function | Yes      | Function which processes an array of objects describing local notifications. |

***

### `addEventListener()`[​](#addeventlistener "Direct link to addeventlistener")

tsx

```

static addEventListener(
type: PushNotificationEventName,
handler:
| ((notification: PushNotification) => void)
| ((deviceToken: string) => void)
| ((error: {message: string; code: number; details: any}) => void),
);

```

Attaches a listener to notification events including local notifications, remote notifications, and notification registration results.

**Parameters:**

| Name    | Type     | Required | Description                         |
| ------- | -------- | -------- | ----------------------------------- |
| type    | string   | Yes      | Event type to listen to. See below. |
| handler | function | Yes      | Listener.                           |

Valid events types include:

* `notification` : Fired when a remote notification is received. The handler will be invoked with an instance of `PushNotificationIOS`. This will handle notifications that arrive in the foreground or were tapped to open the app from the background.
* `localNotification` : Fired when a local notification is received. The handler will be invoked with an instance of `PushNotificationIOS`. This will handle notifications that arrive in the foreground or were tapped to open the app from the background.
* `register`: Fired when the user registers successfully for remote notifications. The handler will be invoked with a hex string representing the deviceToken.
* `registrationError`: Fired when the user fails to register for remote notifications. Typically occurs due to APNS issues or if the device is a simulator. The handler will be invoked with `{message: string, code: number, details: any}`.

***

### `removeEventListener()`[​](#removeeventlistener "Direct link to removeeventlistener")

tsx

```

static removeEventListener(
type: PushNotificationEventName,
);

```

Removes the event listener. Do this in `componentWillUnmount` to prevent memory leaks.

**Parameters:**

| Name | Type   | Required | Description                                       |
| ---- | ------ | -------- | ------------------------------------------------- |
| type | string | Yes      | Event type. See `addEventListener()` for options. |

***

### `requestPermissions()`[​](#requestpermissions "Direct link to requestpermissions")

tsx

```

static requestPermissions(permissions?: PushNotificationPermissions\[]);

```

Requests notification permissions from iOS, prompting the user with a dialog box. By default, this will request all notification permissions, but you can optionally specify which permissions to request. The following permissions are supported:

* `alert`
* `badge`
* `sound`

If a map is provided to the method, only the permissions with truthy values will be requested.

This method returns a promise that will resolve when the user accepts or rejects the request, or if the permissions were previously rejected. The promise resolves to the state of the permissions after the request has been completed.

**Parameters:**

| Name        | Type  | Required | Description            |
| ----------- | ----- | -------- | ---------------------- |
| permissions | array | No       | alert, badge, or sound |

***

### `abandonPermissions()`[​](#abandonpermissions "Direct link to abandonpermissions")

tsx

```

static abandonPermissions();

```

Unregister for all remote notifications received via Apple Push Notification service.

You should call this method in rare circumstances only, such as when a new version of the app removes support for all types of remote notifications. Users can temporarily prevent apps from receiving remote notifications through the Settings app. Apps unregistered through this method can always re-register.

***

### `checkPermissions()`[​](#checkpermissions "Direct link to checkpermissions")

tsx

```

static checkPermissions(
callback: (permissions: PushNotificationPermissions) => void,
);

```

Check which push permissions are currently enabled.

**Parameters:**

| Name     | Type     | Required | Description |
| -------- | -------- | -------- | ----------- |
| callback | function | Yes      | See below.  |

`callback` will be invoked with a `permissions` object:

* `alert: boolean`
* `badge: boolean`
* `sound: boolean`

***

### `getInitialNotification()`[​](#getinitialnotification "Direct link to getinitialnotification")

tsx

```

static getInitialNotification(): Promise;

```

This method returns a promise. If the app was launched by a push notification, this promise resolves to an object of type `PushNotificationIOS` for the notification that was tapped. Otherwise, it resolves to `null`.

***

### `getAuthorizationStatus()`[​](#getauthorizationstatus "Direct link to getauthorizationstatus")

tsx

```

static getAuthorizationStatus(): Promise;

```

This method returns a promise that resolves to the current notification authorization status. See [UNAuthorizationStatus](https://developer.apple.com/documentation/usernotifications/unauthorizationstatus?language=objc) for possible values.

***

### `finish()`[​](#finish "Direct link to finish")

tsx

```

finish(result: string);

```

This method is available for remote notifications that have been received via [`application:didReceiveRemoteNotification:fetchCompletionHandler:`](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application?language=objc). However, this is superseded by `UNUserNotificationCenterDelegate` and will no longer be invoked if both `application:didReceiveRemoteNotification:fetchCompletionHandler:` and the newer handlers from `UNUserNotificationCenterDelegate` are implemented.

If for some reason you're still relying on `application:didReceiveRemoteNotification:fetchCompletionHandler:`, you'll need to set up event handling on the iOS side:

objectivec

```

- (void)           application:(UIApplication \*)application
  didReceiveRemoteNotification:(NSDictionary \*)userInfo
  fetchCompletionHandler:(void (^)(UIBackgroundFetchResult result))handler
  {
  \[RCTPushNotificationManager didReceiveRemoteNotification:userInfo fetchCompletionHandler:handler];
  }

```

Call `finish()` to execute the native completion handlers once you're done handling the notification on the JS side. When calling this block, pass in the fetch result value that best describes the results of your operation. For a list of possible values, see `PushNotificationIOS.FetchResult`.

If you're using `application:didReceiveRemoteNotification:fetchCompletionHandler:`, you *must* call this handler and should do so as soon as possible. See the [official documentation](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application?language=objc) for more details.

***

### `getMessage()`[​](#getmessage "Direct link to getmessage")

tsx

```

getMessage(): string | Object;

```

An alias for `getAlert` to get the notification's main message string.

***

### `getSound()`[​](#getsound "Direct link to getsound")

tsx

```

getSound(): string;

```

Gets the sound string from the `aps` object. This will be `null` for local notifications.

***

### `getCategory()`[​](#getcategory "Direct link to getcategory")

tsx

```

getCategory(): string;

```

Gets the category string from the `aps` object.

***

### `getAlert()`[​](#getalert "Direct link to getalert")

tsx

```

getAlert(): string | Object;

```

Gets the notification's main message from the `aps` object. Also see the alias: `getMessage()`.

***

### `getContentAvailable()`[​](#getcontentavailable "Direct link to getcontentavailable")

tsx

```

getContentAvailable(): number;

```

Gets the content-available number from the `aps` object.

***

### `getBadgeCount()`[​](#getbadgecount "Direct link to getbadgecount")

tsx

```

getBadgeCount(): number;

```

Gets the badge count number from the `aps` object.

***

### `getData()`[​](#getdata "Direct link to getdata")

tsx

```

getData(): Object;

```

Gets the data object on the notification.

***

### `getThreadID()`[​](#getthreadid "Direct link to getthreadid")

tsx

```

getThreadID();

```

Gets the thread ID on the notification.


---

# React Native DevTools

React Native DevTools is our modern debugging experience for React Native. Purpose-built from the ground up, it aims to be fundamentally more integrated, correct, and reliable than previous debugging methods.

![React Native DevTools opened to the \&quot;Welcome\&quot; pane](/assets/images/debugging-rndt-welcome-083-9f56f0124de2d2607022330b0ce41d85.jpg)

React Native DevTools is designed for debugging React app concerns, and not to replace native tools. If you want to inspect React Native’s underlying platform layers (for example, while developing a Native Module), please use the debugging tools available in Android Studio and Xcode (see [Debugging Native Code](/docs/debugging-native-code.md)).

**💡 Compatibility** — released in 0.76

React Native DevTools supports all React Native apps running Hermes. It replaces the previous Flipper, Experimental Debugger, and Hermes debugger (Chrome) frontends.

It is not possible to set up React Native DevTools with any older versions of React Native.

* **Chrome Browser DevTools — unsupported**
  * Connecting to React Native via `chrome://inspect` is no longer supported. Features may not work correctly, as the latest versions of Chrome DevTools (which are built to match the latest browser capabilities and APIs) have not been tested, and this frontend lacks our customisations. Instead, we ship a supported version with React Native DevTools.
* **Visual Studio Code — unsupported** (pre-existing)
  <!-- -->
  * Third party extensions such as [Expo Tools](https://github.com/expo/vscode-expo) and [Radon IDE](https://ide.swmansion.com/) may have improved compatibility, but are not directly supported by the React team.

**💡 Feedback & FAQs**

We want the tooling you use to debug React across all platforms to be reliable, familiar, simple, and cohesive. All the features described on this page are built with these principles in mind, and we also want to offer more capabilities in future.

We are actively iterating on the future of React Native DevTools, and have created a centralized [GitHub discussion](https://github.com/react-native-community/discussions-and-proposals/discussions/819) to keep track of issues, frequently asked questions, and feedback.

## Core features[​](#core-features "Direct link to Core features")

React Native DevTools is based on the Chrome DevTools frontend. If you have a web development background, its features should be familiar. As a starting point, we recommend browsing the [Chrome DevTools docs](https://developer.chrome.com/docs/devtools) which contain full guides as well as video resources.

### Console[​](#console "Direct link to Console")

![A series of logs React Native DevTools Sources view, alongside a device](/assets/images/debugging-rndt-console-536fe8a6f470b09b93ace9b4f67b4612.jpg)

The Console panel allows you to view and filter messages, evaluate JavaScript, inspect object properties, and more.

[Console features reference | Chrome DevTools](https://developer.chrome.com/docs/devtools/console/reference)

#### Useful tips[​](#useful-tips "Direct link to Useful tips")

* If your app has a lot of logs, use the filter box or change the log levels that are shown.
* Watch values over time with [Live Expressions](https://developer.chrome.com/docs/devtools/console/live-expressions).
* Persist messages across reloads with [Preserve Logs](https://developer.chrome.com/docs/devtools/console/reference#persist).
* Use `Ctrl` + `L` to clear the console view.

### Sources & breakpoints[​](#sources--breakpoints "Direct link to Sources & breakpoints")

![A paused breakpoint in the React Native DevTools Sources view, alongside a device](/assets/images/debugging-rndt-sources-paused-with-device-c7585ed4a3ab596e32c2109efd9c22a0.jpg)

The Sources panel allows you to view the source files in your app and register breakpoints. Use a breakpoint to define a line of code where your app should pause — allowing you to inspect the live state of the program and incrementally step through code.

[Pause your code with breakpoints | Chrome DevTools](https://developer.chrome.com/docs/devtools/javascript/breakpoints)

tip

#### Mini-guide[​](#mini-guide "Direct link to Mini-guide")

Breakpoints are a fundamental tool in your debugging toolkit!

1. Navigate to a source file using the sidebar or `Cmd ⌘`+`P` / `Ctrl`+`P`.
2. Click in the line number column next to a line of code to add a breakpoint.
3. Use the navigation controls at the top right to [step through code](https://developer.chrome.com/docs/devtools/javascript/reference#stepping) when paused.

#### Useful tips[​](#useful-tips-1 "Direct link to Useful tips")

* A "Paused in Debugger" overlay appears when your app is paused. Tap it to resume.
* Pay attention to the right-hand panels when on a breakpoint, which allow you to inspect the current scope and call stack, and set watch expressions.
* Use a `debugger;` statement to quickly set a breakpoint from your text editor. This will reach the device immediately via Fast Refresh.
* There are multiple kinds of breakpoints! For example, [Conditional Breakpoints and Logpoints](https://developer.chrome.com/docs/devtools/javascript/breakpoints#overview).

### NetworkSince 0.83[​](#network-since-083 "Direct link to network-since-083")

![A network request in the React Native DevTools Network panel](/assets/images/debugging-rndt-network-462cd5e39a5525592501627bb0087747.jpg)

The Network panel allows you to view and inspect the network requests made by your app. Logged requests provide detailed metadata such as timings and headers sent/received, as well as response previews.

Network requests are recorded automatically when DevTools is open. We support most features from Chrome, with some exceptions. See more below.

**💡 Network event coverage, Expo support**

**Which network events are captured?**

Today, we record all network calls through `fetch()`, `XMLHttpRequest`, and `<Image>` — with support for custom networking libraries, such as Expo Fetch, coming later.

**Expo Network differences**

Because of this, apps using Expo will continue to see the "Expo Network" panel — a separate implementation by the Expo framework which will log these additional request sources but has slightly reduced features.

* Coverage for Expo-specific network events.
* No request initiator support.
* No Performance panel integration.

We're working with Expo to integrate Expo Fetch and third party networking libraries with our new Network inspection pipeline in future releases.

**Unimplemented features**

At launch, these are the features we don't yet support in React Native:

* WebSocket events
* Network response mocking
* Simulated network throttling

**💡 Response previews buffer size**

If you are inspecting a large volume of response data, please note that response previews are cached in an on-device buffer with a maximum size of 100MB. This means we may evict response previews (but not metadata) if the cache becomes too large, oldest request first.

#### Useful tips[​](#useful-tips-2 "Direct link to Useful tips")

* Use the Initiator tab to see the call stack of where a network request was initiated in your app.
* Network events will also be shown in the Network track in the Performance panel.

### PerformanceSince 0.83[​](#performance-since-083 "Direct link to performance-since-083")

![A performance trace in the React Native DevTools Performance panel](/assets/images/debugging-rndt-performance-084166527768b90dbb936b240707bdcb.jpg)

Performance tracing allows you to record a performance session within your app to understand how your JavaScript code is running and what operations took the most time. In React Native, we show JavaScript execution, React Performance tracks, Network events, and custom [User Timings](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/User_timing), rendered in a single performance timeline.

#### Useful tips[​](#useful-tips-3 "Direct link to Useful tips")

* Use [Annotations](https://developer.chrome.com/docs/devtools/performance/annotations) (shift-drag) to label and mark up a performance trace — useful before [downloading and sharing](https://developer.chrome.com/docs/devtools/performance/save-trace) a trace with a teammate. Annotations also provide a quick way to gauge time spans in **seconds**.
* Use the [`PerformanceObserver` API](/docs/global-PerformanceObserver.md) in your app to observe performance events at runtime — useful if you want to capture performance telemetry.

#### Learn more[​](#learn-more "Direct link to Learn more")

* [React Performance tracks](https://react.dev/reference/dev-tools/react-performance-tracks)
* [Performance APIs > User Timings | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/User_timing)
* ["Debug Like a Senior — React Native Performance Panel" | Software Mansion](https://blog.swmansion.com/react-native-debugging-new-performance-panel-in-react-native-0-83-21ca90871f6d)

### Memory[​](#memory "Direct link to Memory")

![Inspecting a heap snapshot in the Memory panel](/assets/images/debugging-rndt-memory-741d3be5a43f872d0d4485d9f71456c8.jpg)

The Memory panel allows you to take a heap snapshot and view the memory usage of your JavaScript code over time.

[Record heap snapshots | Chrome DevTools](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots)

#### Useful tips[​](#useful-tips-4 "Direct link to Useful tips")

* Use `Cmd ⌘`+`F` / `Ctrl`+`F` to filter for specific objects in the heap.
* Taking an [allocation timeline report](https://developer.chrome.com/docs/devtools/memory-problems/allocation-profiler) can be useful to see memory usage over time as a graph, to identify possible memory leaks.

## React DevTools features[​](#react-devtools-features "Direct link to React DevTools features")

In the integrated Components and Profiler panels, you'll find all the features of the [React DevTools](https://react.dev/learn/react-developer-tools) browser extension. These work seamlessly in React Native DevTools.

### React Components[​](#react-components "Direct link to React Components")

![Selecting and locating elements using the React Components panel](/assets/images/debugging-rndt-react-components-628d33c662dc37b0a7c3c21d840fc63c.gif)

The React Components panel allows you to inspect and update the rendered React component tree.

* Hover or select an element in DevTools to highlight it on the device.
* To locate an element in DevTools, click the top-left "Select element" button, then tap any element in the app.

#### Useful tips[​](#useful-tips-5 "Direct link to Useful tips")

* Props and state on a component can be viewed and modified at runtime using the right hand panel.
* Components optimized with [React Compiler](https://react.dev/learn/react-compiler) will be annotated with a "Memo ✨" badge.

tip

#### Protip: Highlight re-renders[​](#protip-highlight-re-renders "Direct link to Protip: Highlight re-renders")

Re-renders can be a significant contributor to performance issues in React apps. DevTools can highlight component re-renders as they happen.

* To enable, click the View Settings (`⚙︎`) icon and check "Highlight updates when components render".

![Location of the \&quot;highlight updates\&quot; setting, next to a recording of the live render overlay](/assets/images/debugging-rndt-highlight-renders-bc20258bbc79dba4fe1866c227943e37.gif)

### React Profiler[​](#react-profiler "Direct link to React Profiler")

![A profile rendered as a flame graph](/assets/images/debugging-rndt-react-profiler-df4337af110cbdc1da74837b2beacec2.jpg)

The React Profiler panel allows you to record performance profiles to understand the timing of component renders and React commits.

For more info, see the [original 2018 guide](https://legacy.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html#reading-performance-data) (note that parts of this may be outdated).

## Reconnecting DevTools[​](#reconnecting-devtools "Direct link to Reconnecting DevTools")

Occasionally, DevTools might disconnect from the target device. This can happen if:

* The app is closed.
* The app is rebuilt (a new native build is installed).
* The app crashes on the native side.
* The dev server (Metro) is quit.
* A physical device is disconnected.

On disconnect, a dialog will be shown with the message "Debugging connection was closed".

![A reconnect dialog shown when a device is disconnected](/assets/images/debugging-reconnect-menu-fc38b7d074e730cc41346286561f75b8.jpg)

From here, you can either:

* **Dismiss**: Select the close (`×`) icon or click outside the dialog to return to the DevTools UI in the last state before disconnection.
* **Reconnect**: Select "Reconnect DevTools", having addressed the reason for disconnection.


---

# React Native Gradle Plugin

This guide describes how to configure the **React Native Gradle Plugin** (often referred as RNGP), when building your React Native application for Android.

## Using the plugin[​](#using-the-plugin "Direct link to Using the plugin")

The React Native Gradle Plugin is distributed as a separate NPM package which is installed automatically with `react-native`.

The plugin is **already configured** for new projects created using `npx react-native init`. You don't need to do any extra steps to install it if you created your app with this command.

If you're integrating React Native into an existing project, please refer to [the corresponding page](/docs/next/integration-with-existing-apps#configuring-gradle): it contains specific instructions on how to install the plugin.

## Configuring the plugin[​](#configuring-the-plugin "Direct link to Configuring the plugin")

By default, the plugin will work **out of the box** with sensible defaults. You should refer to this guide and customize the behavior only if you need it.

To configure the plugin you can modify the `react` block, inside your `android/app/build.gradle`:

groovy

```

apply plugin: "com.facebook.react"

/\*\*

- This is the configuration block to customize your React Native Android app.
- By default you don't need to apply any configuration, just uncomment the lines you need.
  \*/
  react {
  // Custom configuration goes here.
  }

```

Each configuration key is described below:

### `root`[​](#root "Direct link to root")

This is the root folder of your React Native project, i.e. where the `package.json` file lives. Default is `..`. You can customize it as follows:

groovy

```

root = file("../")

```

### `reactNativeDir`[​](#reactnativedir "Direct link to reactnativedir")

This is the folder where the `react-native` package lives. Default is `../node_modules/react-native`. If you're in a monorepo or using a different package manager, you can use adjust `reactNativeDir` to your setup.

You can customize it as follows:

groovy

```

reactNativeDir = file("../node\_modules/react-native")

```

### `codegenDir`[​](#codegendir "Direct link to codegendir")

This is the folder where the `react-native-codegen` package lives. Default is `../node_modules/react-native-codegen`. If you're in a monorepo or using a different package manager, you can adjust `codegenDir` to your setup.

You can customize it as follows:

groovy

```

codegenDir = file("../node\_modules/@react-native/codegen")

```

### `cliFile`[​](#clifile "Direct link to clifile")

This is the entrypoint file for the React Native CLI. Default is `../node_modules/react-native/cli.js`. The entrypoint file is needed as the plugin needs to invoke the CLI for bundling and creating your app.

If you're in a monorepo or using a different package manager, you can adjust `cliFile` to your setup. You can customize it as follows:

groovy

```

cliFile = file("../node\_modules/react-native/cli.js")

```

### `debuggableVariants`[​](#debuggablevariants "Direct link to debuggablevariants")

This is the list of variants that are debuggable (see [using variants](#using-variants) for more context on variants).

By default the plugin is considering as `debuggableVariants` only `debug`, while `release` is not. If you have other variants (like `staging`, `lite`, etc.) you'll need to adjust this accordingly.

Variants that are listed as `debuggableVariants` will not come with a shipped bundle, so you'll need Metro to run them.

You can customize it as follows:

groovy

```

debuggableVariants = \["liteDebug", "prodDebug"]

```

### `nodeExecutableAndArgs`[​](#nodeexecutableandargs "Direct link to nodeexecutableandargs")

This is the list of node command and arguments that should be invoked for all the scripts. By default is `[node]` but can be customized to add extra flags as follows:

groovy

```

nodeExecutableAndArgs = \["node"]

```

### `bundleCommand`[​](#bundlecommand "Direct link to bundlecommand")

This is the name of the `bundle` command to be invoked when creating the bundle for your app. That's useful if you're using [RAM Bundles](https://reactnative.dev/docs/0.74/ram-bundles-inline-requires). By default is `bundle` but can be customized to add extra flags as follows:

groovy

```

bundleCommand = "ram-bundle"

```

### `bundleConfig`[​](#bundleconfig "Direct link to bundleconfig")

This is the path to a configuration file that will be passed to `bundle --config <file>` if provided. Default is empty (no config file will be probided). More information on bundling config files can be found [on the CLI documentation](https://github.com/react-native-community/cli/blob/main/docs/commands.md#bundle). Can be customized as follow:

groovy

```

bundleConfig = file(../rn-cli.config.js)

```

### `bundleAssetName`[​](#bundleassetname "Direct link to bundleassetname")

This is the name of the bundle file that should be generated. Default is `index.android.bundle`. Can be customized as follow:

groovy

```

bundleAssetName = "MyApplication.android.bundle"

```

### `entryFile`[​](#entryfile "Direct link to entryfile")

The entry file used for bundle generation. The default is to search for `index.android.js` or `index.js`. Can be customized as follow:

groovy

```

entryFile = file("../js/MyApplication.android.js")

```

### `extraPackagerArgs`[​](#extrapackagerargs "Direct link to extrapackagerargs")

A list of extra flags that will be passed to the `bundle` command. The list of available flags is in [the CLI documentation](https://github.com/react-native-community/cli/blob/main/docs/commands.md#bundle). Default is empty. Can be customized as follows:

groovy

```

extraPackagerArgs = \[]

```

### `hermesCommand`[​](#hermescommand "Direct link to hermescommand")

The path to the `hermesc` command (the Hermes Compiler). React Native comes with a version of the Hermes compiler bundled with it, so you generally won't be needing to customize this. The plugin will use the correct compiler for your system by default.

### `hermesFlags`[​](#hermesflags "Direct link to hermesflags")

The list of flags to pass to `hermesc`. By default is `["-O", "-output-source-map"]`. You can customize it as follows

groovy

```

hermesFlags = \["-O", "-output-source-map"]

```

### `enableBundleCompression`[​](#enablebundlecompression "Direct link to enablebundlecompression")

Whether the Bundle Asset should be compressed when packaged into a `.apk`, or not.

Disabling compression for the `.bundle` allows it to be directly memory-mapped to RAM, hence improving startup time - at the cost of a larger resulting app size on disk. Please note that the `.apk` download size will be mostly unaffected as the `.apk` files are compressed before downloading

By default this is disabled, and you should not turn it on, unless you're really concerned about disk space for your application.

## Using Flavors & Build Variants[​](#using-flavors--build-variants "Direct link to Using Flavors & Build Variants")

When building Android apps, you might want to use [custom flavors](https://developer.android.com/studio/build/build-variants#product-flavors) to have different versions of your app starting from the same project.

Please refer to the [official Android guide](https://developer.android.com/studio/build/build-variants) to configure custom build types (like `staging`) or custom flavors (like `full`, `lite`, etc.). By default new apps are created with two build types (`debug` and `release`) and no custom flavors.

The combination of all the build types and all the flavors generates a set of **build variants**. For instance for `debug`/`staging`/`release` build types and `full`/`lite` you will have 6 build variants: `fullDebug`, `fullStaging`, `fullRelease` and so on.

If you're using custom variants beyond `debug` and `release`, you need to instruct the React Native Gradle Plugin specifying which of your variants are **debuggable** using the [`debuggableVariants`](#debuggablevariants) configuration as follows:

diff

```

apply plugin: "com.facebook.react"

react {

- debuggableVariants = \["fullStaging", "fullDebug"]
  }

```

This is necessary because the plugin will skip the JS bundling for all the `debuggableVariants`: you'll need Metro to run them. For example, if you list `fullStaging` in the `debuggableVariants`, you won't be able to publish it to a store as it will be missing the bundle.

## What is the plugin doing under the hood?[​](#what-is-the-plugin-doing-under-the-hood "Direct link to What is the plugin doing under the hood?")

The React Native Gradle Plugin is responsible for configuring your Application build to ship React Native applications to production. The plugin is also used inside 3rd party libraries, to run the [Codegen](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/codegen.md) used for the New Architecture.

Here is a summary of the plugin responsibilities:

* Add a `createBundle<Variant>JsAndAssets` task for every non debuggable variant, that is responsible of invoking the `bundle`, `hermesc` and `compose-source-map` commands.
* Setting up the proper version of the `com.facebook.react:react-android` and `com.facebook.react:hermes-android` dependency, reading the React Native version from the `package.json` of `react-native`.
* Setting up the proper Maven repositories (Maven Central, Google Maven Repo, JSC local Maven repo, etc.) needed to consume all the necessary Maven Dependencies.
* Setting up the NDK to let you build apps that are using the New Architecture.
* Setting up the `buildConfigFields` so that you can know at runtime if Hermes or the New Architecture are enabled.
* Setting up the Metro DevServer Port as an Android resource so the app knows on which port to connect.
* Invoking the [React Native Codegen](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/codegen.md) if a library or app is using the Codegen for the New Architecture.


---

# React Node Object Type

A React Node is one of the following types:

* Boolean (which is ignored)
* `null` or `undefined` (which is ignored)
* Number
* String
* A React element (result of JSX)
* An array of any of the above, possibly a nested one


---

# Rect Object Type

`Rect` accepts numeric pixel values to describe how far to extend a rectangular area. These values are added to the original area's size to expand it.

## Example[​](#example "Direct link to Example")

js

```

{
bottom: 20,
left: null,
right: undefined,
top: 50
}

```

## Keys and values[​](#keys-and-values "Direct link to Keys and values")

### `bottom`[​](#bottom "Direct link to bottom")

| Type                        | Required |
| --------------------------- | -------- |
| number, `null`, `undefined` | No       |

### `left`[​](#left "Direct link to left")

| Type                        | Required |
| --------------------------- | -------- |
| number, `null`, `undefined` | No       |

### `right`[​](#right "Direct link to right")

| Type                        | Required |
| --------------------------- | -------- |
| number, `null`, `undefined` | No       |

### `top`[​](#top "Direct link to top")

| Type                        | Required |
| --------------------------- | -------- |
| number, `null`, `undefined` | No       |

## Used by[​](#used-by "Direct link to Used by")

* [`Image`](/docs/image.md)
* [`Pressable`](/docs/pressable.md)
* [`Text`](/docs/text.md)
* [`TouchableWithoutFeedback`](/docs/touchablewithoutfeedback.md)


---

# RefreshControl

This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at `scrollY: 0`, swiping down triggers an `onRefresh` event.

## Example[​](#example "Direct link to Example")

note

`refreshing` is a controlled prop, this is why it needs to be set to `true` in the `onRefresh` function otherwise the refresh indicator will stop immediately.

***

# Reference

## Props[​](#props "Direct link to Props")

### [View Props](/docs/view.md#props)[​](#view-props "Direct link to view-props")

Inherits [View Props](/docs/view.md#props).

***

### Require&#x64;**`refreshing`**[​](#requiredrefreshing "Direct link to requiredrefreshing")

Whether the view should be indicating an active refresh.

| Type    |
| ------- |
| boolean |

***

### `colors`Android[​](#colors-android "Direct link to colors-android")

The colors (at least one) that will be used to draw the refresh indicator.

| Type                               |
| ---------------------------------- |
| array of [colors](/docs/colors.md) |

***

### `enabled`Android[​](#enabled-android "Direct link to enabled-android")

Whether the pull to refresh functionality is enabled.

| Type    | Default |
| ------- | ------- |
| boolean | `true`  |

***

### `onRefresh`[​](#onrefresh "Direct link to onrefresh")

Called when the view starts refreshing.

| Type     |
| -------- |
| function |

***

### `progressBackgroundColor`Android[​](#progressbackgroundcolor-android "Direct link to progressbackgroundcolor-android")

The background color of the refresh indicator.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `progressViewOffset`[​](#progressviewoffset "Direct link to progressviewoffset")

Progress view top offset.

| Type   | Default |
| ------ | ------- |
| number | `0`     |

***

### `size`Android[​](#size-android "Direct link to size-android")

Size of the refresh indicator.

| Type                         | Default     |
| ---------------------------- | ----------- |
| enum(`'default'`, `'large'`) | `'default'` |

***

### `tintColor`iOS[​](#tintcolor-ios "Direct link to tintcolor-ios")

The color of the refresh indicator.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `title`iOS[​](#title-ios "Direct link to title-ios")

The title displayed under the refresh indicator.

| Type   |
| ------ |
| string |

***

### `titleColor`iOS[​](#titlecolor-ios "Direct link to titlecolor-ios")

The color of the refresh indicator title.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |


---

# Releases Overview

New React Native releases are shipped **every two months**, usually resulting in six (6) new minors per year.

Below is the schedule and current status of recent and upcoming React Native releases:

| Version  | Branch-cut Date | Release Date | Support      | Blogpost                                         |
| -------- | --------------- | ------------ | ------------ | ------------------------------------------------ |
| `0.89.x` | 2026-11-03      | 2026-12-07   | Future       |                                                  |
| `0.88.x` | 2026-09-07      | 2026-10-12   | Future       |                                                  |
| `0.87.x` | 2026-07-06      | 2026-08-10   | Future       |                                                  |
| `0.86.x` | 2026-05-04      | 2026-06-08   | Future       |                                                  |
| `0.85.x` | 2026-03-02      | 2026-04-06   | Future       |                                                  |
| `0.84.x` | 2026-01-05      | 2026-02-09   | Active       | [Details](/blog/2026/02/11/react-native-0.84.md) |
| `0.83.x` | 2025-11-03      | 2025-12-10   | Active       | [Details](/blog/2025/12/10/react-native-0.83.md) |
| `0.82.x` | 2025-09-01      | 2025-10-06   | End of Cycle | [Details](/blog/2025/10/08/react-native-0.82.md) |
| `0.81.x` | 2025-07-10      | 2025-08-12   | Unsupported  | [Details](/blog/2025/08/12/react-native-0.81.md) |
| `0.80.x` | 2025-05-07      | 2025-06-12   | Unsupported  | [Details](/blog/2025/06/12/react-native-0.80.md) |
| `0.79.x` | 2025-03-04      | 2025-04-08   | Unsupported  | [Details](/blog/2025/04/08/react-native-0.79.md) |
| `0.78.x` | 2025-01-15      | 2025-02-19   | Unsupported  | [Details](/blog/2025/02/19/react-native-0.78.md) |
| `0.77.x` | 2024-11-26      | 2025-01-21   | Unsupported  | [Details](/blog/2025/01/21/version-0.77.md)      |

The different support level presented in the table are defined as such:

* **Future**
  * After a new version branch gets cut, creating new Release Candidates to allow the community to test the upcoming version is very important. New RC releases are done at a high pace, as soon as viable.
* **Active**
  * Stable releases in active support receive frequent updates. Latest stable has the highest priority, and at the start of its stable cycle (right after .0 is released) multiple patches will be done as soon as possible to stabilize the version and ensure a good upgrade experience to the community.
* **End of Cycle**
  * A version in this support bracket will receive less patches, unless some important regressions need to be addressed. Once a next version becomes the new latest stable, before the version in EoC moves over into Unsupported one last patch released will be produced with the latest receive pick requests.
* **Unsupported**
  * When a version is in the unsupported stage, no new released are to be expected. Only very important regressions might create exceptions to this rule; it is recommended that codebases using an unsupported version upgrade as soon as possible.

## Commitment to Stability[​](#commitment-to-stability "Direct link to Commitment to Stability")

In order to support users upgrading React Native versions, we’re committed to maintain the **latest 3 minor series** (e.g. 0.78.x, 0.77.x and 0.76.x when 0.78 is the latest release).

For those releases we’ll be publishing regular updates and bug fixes.

You can read more about our support policy on [the react-native-releases working group](https://github.com/reactwg/react-native-releases/blob/main/docs/support.md).

More information on our versioning, and what we consider a breaking change is available in our [versioning policy](/docs/releases/versioning-policy.md) page.


---

# Release Levels

React Native provides the community with the ability to adopt individual new features as soon as their design and implementation are nearly complete, even before they are included in a stable release. This approach is known as **release levels**.

You can configure the release level of React Native so that your React Native instance will initialize with Feature Flags set to either `EXPERIMENTAL`, `CANARY`, or `STABLE` modes.

note

This approach is similar to [Canary and Experimental releases in React](https://react.dev/blog/2023/05/03/react-canaries), but with a key difference: regardless of the release level, the same version of React JS and React Native code is used.<br /><!-- -->React Native is also not using `@canary` or `@experimental` NPM tags, as release levels are available for both stable and nightly releases of React Native.

Moreover, setting the release level to `EXPERIMENTAL` or `CANARY` will **not** result in consuming `react@nightly` or `react@canary` due to how react-native is consuming the React version ([you can read more about it here](https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Renderer/README.md#react--react-native-versions)).

## When to Use Each Release Level[​](#when-to-use-each-release-level "Direct link to When to Use Each Release Level")

* **`STABLE`**:

  <!-- -->

  * Use for all production apps and libraries that do not need early access to unreleased features.
  * This is the default level for stable and nightly releases.

* **`CANARY`:**

  * Use if you are a framework author, advanced app developer, or need to test or adopt new features before they are released in stable.
  * Not recommended for production or user-facing applications.

* **`EXPERIMENTAL`:**

  * Use only for testing and providing feedback for new features in the early stages of development
  * Not recommended for production or user-facing applications.

## How to initialize React Native using Canary & Experimental[​](#how-to-initialize-react-native-using-canary--experimental "Direct link to How to initialize React Native using Canary & Experimental")

### Android[​](#android "Direct link to Android")

The `DefaultNewArchitectureEntryPoint` class now has a `releaseLevel` property (default: `STABLE`).<br /><!-- -->The feature flag system uses this property to select the appropriate set of feature flags for the chosen release level.

Example usage

```

DefaultNewArchitectureEntryPoint.releaseLevel = ReleaseLevel.CANARY
DefaultNewArchitectureEntryPoint.load()

```

The build system generates different feature flag override classes for each release level, ensuring the correct features are enabled for each stage.

### iOS[​](#ios "Direct link to iOS")

The `RCTReactNativeFactory` class now has an initializer that accepts a `releaseLevel` parameter. The feature flag setup uses this parameter to select the correct feature flag overrides.

* ObjectiveC
* Swift

AppDelegate.mm

```

\[\[RCTReactNativeFactory alloc] initWithDelegate:delegate releaseLevel:Canary];

```

AppDelegate.swift

```

let factory = RCTReactNativeFactory(delegate: delegate, releaseLevel: RCTReleaseLevel.Canary)

```

The system ensures that only one release level is active per app instance, and will crash if multiple factories are created with different release levels.


---

# Versioning Policy

This page describes the versioning policy we follow for the `react-native` package.

We test each version of React Native thoroughly, both with manual and automated tests, to ensure the quality doesn't regress.

The `stable` channel of React Native follows the 0.x.y release policy described below.

React Native also offers a `nightly` release channel to encourage early feedback on experimental features.

This page describes our approach to version numbers for `react-native` and for packages under the `@react-native` scope.

## Stable Release Versions[​](#stable-release-versions "Direct link to Stable Release Versions")

React Native releases stable versions at a regular cadence.

We follow the 0.x.y versioning schema:

* Breaking changes will be shipped in a new minor version, i.e. we increment the x number (e.g.: 0.78.0 to 0.79.0).
* New features and APIs will also be shipped in a new minor version, i.e. we increment the x number (e.g.: 0.78.0 to 0.79.0).
* Critical bug fixes will be shipped in a new patch version, i.e. we increment the y number (e.g.: 0.78.1 to 0.78.2).

Stable releases are shipped regularly, with the latest tagged as `latest` on NPM.

A series of releases under the same minor number is called a **minor series** (e.g. 0.76.x is the minor series for 0.76.0, 0.76.1, 0.76.2, etc.).

You can read more about our **commitment to stability** in [the releases page](/docs/releases.md).

### Breaking changes[​](#breaking-changes "Direct link to Breaking changes")

Breaking changes are inconvenient for everyone, and we’re trying to minimize them to the bare minimum. All the breaking changes we ship in each stable release will be highlighted in:

* The *Breaking* and the *Removed* section of [the React Native Changelog](https://github.com/facebook/react-native/blob/main/CHANGELOG.md)
* Each release blogpost in the *Breaking Changes* section

For each breaking change we’re committed to explaining the reasoning behind it, provide a replacement API if possible, and minimize the impact on final users.

### What is a breaking change?[​](#what-is-a-breaking-change "Direct link to What is a breaking change?")

We consider a breaking change for React Native:

* An incompatible API change (i.e. an API that is changed or removed so that your code won’t compile/run anymore due to that change). Examples:

  <!-- -->

  * Changes of any JS/Java/Kotlin/Obj-c/C++ APIs that would require your code to be changed in order to compile.
  * Changes inside `@react-native/codegen` that are not backward compatible.

* A significant behavior/runtime change. Example:
  <!-- -->
  * The layout logic of a prop is changed drastically.

* A significant change in the development experience. Example:
  <!-- -->
  * A debugging feature is entirely removed.

* A major bump of any of our transitive dependencies. Examples:

  <!-- -->

  * Bumping React from 18.x to 19.x
  * Bumping the Target SDK on Android from 34 to 35).

* A reduction of any of our supported platform versions. Examples:

  <!-- -->

  * Bumping min SDK on Android from 21 to 23
  * Bumping the min iOS version to 15.1.

We don’t consider those changes to be breaking:

* Modifying APIs starting with `unstable_` prefix: These APIs expose experimental features, and we are not confident on their final shape. By releasing these with an `unstable_` prefix, we can iterate faster and get to a stable API sooner.

* Changes to private or internal APIs: These APIs are often prefixed with either `internal_` , `private_` or living inside a `internal/` or `private/` folder/package. While some of those APIs might have public visibility due to tooling constraints, we don’t consider them part of our public API, so we’ll be changing them without previous notice.

  <!-- -->

  * Similarly, If you access internal property names like `__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED` or `__reactInternalInstance$uk43rzhitjg`, there are no guarantees. You are on your own.
  * Classes annotated with `@FrameworkAPI` are also considered internal

* Changes to tooling/development APIs: Some public APIs of React Native are reserved for integration with frameworks and other tools. For example, some of the Metro APIs or React Native DevTools APIs are supposed to be used only by other frameworks or tools. Changes to those APIs are discussed directly with the affected tools and are not considered breaking changes (we won’t be communicating them broadly in the release blogposts).

* Development warnings: Since warnings don’t affect runtime behavior, we may add new warnings or modify existing warnings in between any versions.

If we expect a change to cause broad problems in the community, we will still do our best to provide a gradual migration path for the ecosystem.

### Deprecation Cycles[​](#deprecation-cycles "Direct link to Deprecation Cycles")

As we keep on developing and evolving React Native, we write new APIs and sometimes we need to deprecate existing ones. Those APIs will go through a deprecation cycle.

Once an API is deprecated, it will remain available **also** for the **following** stable releases.

For example: if an API is deprecated in React Native 0.76.x, it will still be available in 0.77.x and won’t be removed sooner than React Native 0.78.x.

Sometimes we decide to keep a deprecated API for a longer time, if we feel that the ecosystem needs more time to migrate away from it. For those APIs we generally provide warnings to help users migrate away from them.

## Release channels[​](#release-channels "Direct link to Release channels")

React Native relies on a thriving open source community to file bug reports, open pull requests, and submit RFCs. To encourage feedback we do support several release channels.

note

This section will be most relevant to developers who work on frameworks, libraries, or developer tooling. Developers who use React Native primarily to build user-facing applications should not need to worry about release channels other than latest.

### latest[​](#latest "Direct link to latest")

`latest` is for stable, semver React Native releases. It’s what you get when you install React Native from npm. This is the channel you’re already using today. User-facing applications that consume React Native directly use this channel.

We publish a newer minor series of React Native regularly, and we update the `latest` tag to reflect the latest stable version.

### next[​](#next "Direct link to next")

Before we declare a new React Native release stable, we publish a series of **release candidate**, starting from RC0. Those versions are pre-release versions (following the versioning schema `0.79.0-rc.0`) and are tagged as `next` on NPM.

When a new branch cut happens, and RCs start to get published on NPM and GitHub, it’s a good idea to test your library/framework against a `next` version of React Native.

That will ensure that your project will keep on working well with the upcoming versions of React Native.

However, do not use prereleases/RCs in user-facing applications directly as they’re not considered production ready.

### nightly[​](#nightly "Direct link to nightly")

We also publish a `nightly` release channel. Nightlies are published every day starting from the `main` branch of [facebook/react-native](https://github.com/facebook/react-native). Nightlies are considered unstable versions of React Native and are not recommended for production use.

Nightlies follow the versioning schema as `0.80.0-nightly-<DATE>-<SHA>` where `<DATE>` is the date of the nightly and `<SHA>` is the SHA of the commit that was used to publish this nightly.

The nightly releases are provided for testing purposes only, and we provide no guarantees that behavior won’t change between nightlies. They do not follow the semver protocol that we use for releases from latest/next.

It is a good idea to set up a CI workflow to test your library against a react-native\@nightly version every day, to make sure your library will keep on working with future releases.


---

# RootTag

`RootTag` is an opaque identifier assigned to the native root view of your React Native surface — i.e. the `ReactRootView` or `RCTRootView` instance for Android or iOS respectively. In short, it is a surface identifier.

## When to use a RootTag?[​](#when-to-use-a-roottag "Direct link to When to use a RootTag?")

For most React Native developers, you likely won’t need to deal with `RootTag`s.

`RootTag`s are useful for when an app renders **multiple React Native root views** and you need to handle native API calls differently depending on the surface. An example of this is when an app is using native navigation and each screen is a separate React Native root view.

In native navigation, every React Native root view is rendered in a platform’s navigation view (e.g., `Activity` for Android, `UINavigationViewController` for iOS). By this, you are able to leverage the navigation paradigms of the platform such as native look and feel and navigation transitions. The functionality to interact with the native navigation APIs can be exposed to React Native via a [native module](https://reactnative.dev/docs/next/native-modules-intro).

For example, to update the title bar of a screen, you would call the navigation module’s API `setTitle("Updated Title")`, but it would need to know which screen in the stack to update. A `RootTag` is necessary here to identify the root view and its hosting container.

Another use case for `RootTag` is when your app needs to attribute a certain JavaScript call to native based on its originating root view. A `RootTag` is necessary to differentiate the source of the call from different surfaces.

## How to access the RootTag... if you need it[​](#how-to-access-the-roottag-if-you-need-it "Direct link to How to access the RootTag... if you need it")

In versions 0.65 and below, RootTag is accessed via a [legacy context](https://github.com/facebook/react-native/blob/v0.64.1/Libraries/ReactNative/AppContainer.js#L56). To prepare React Native for Concurrent features coming in React 18 and beyond, we are migrating to the latest [Context API](https://react.dev/reference/react/createContext) via `RootTagContext` in 0.66. Version 0.65 supports both the legacy context and the recommended `RootTagContext` to allow developers time to migrate their call-sites. See the breaking changes summary.

How to access `RootTag` via the `RootTagContext`.

js

```

import {RootTagContext} from 'react-native';
import NativeAnalytics from 'native-analytics';
import NativeNavigation from 'native-navigation';

function ScreenA() {
const rootTag = useContext(RootTagContext);

const updateTitle = title => {
NativeNavigation.setTitle(rootTag, title);
};

const handleOneEvent = () => {
NativeAnalytics.logEvent(rootTag, 'one\_event');
};

// ...
}

class ScreenB extends React.Component {
static contextType: typeof RootTagContext = RootTagContext;

updateTitle(title) {
NativeNavigation.setTitle(this.context, title);
}

handleOneEvent() {
NativeAnalytics.logEvent(this.context, 'one\_event');
}

// ...
}

```

Learn more about the Context API for [classes](https://react.dev/reference/react/Component#static-contexttype) and [hooks](https://react.dev/reference/react/useContext) from the React docs.

### Breaking Change in 0.65[​](#breaking-change-in-065 "Direct link to Breaking Change in 0.65")

`RootTagContext` was formerly named `unstable_RootTagContext` and changed to `RootTagContext` in 0.65. Please update any usages of `unstable_RootTagContext` in your codebase.

### Breaking Change in 0.66[​](#breaking-change-in-066 "Direct link to Breaking Change in 0.66")

The legacy context access to `RootTag` will be removed and replaced by `RootTagContext`. Beginning in 0.65, we encourage developers to proactively migrate `RootTag` accesses to `RootTagContext`.

## Future Plans[​](#future-plans "Direct link to Future Plans")

With the new React Native architecture progressing, there will be future iterations to `RootTag`, with the intention to keep the `RootTag` type opaque and prevent thrash in React Native codebases. Please do not rely on the fact that RootTag currently aliases to a number! If your app relies on RootTags, keep an eye on our version change logs, which you can find [here](https://github.com/facebook/react-native/blob/main/CHANGELOG.md).


---

# Running On Device

It's always a good idea to test your app on an actual device before releasing it to your users. This document will guide you through the necessary steps to run your React Native app on a device and to get it ready for production.

tip

If you used `create-expo-app` to set up your project, you can run your app on a device in Expo Go by scanning the QR code that is displayed when you run `npm start`. Refer to the Expo guide for [running your project on your device](https://docs.expo.dev/get-started/expo-go/) for more information.

* Android
* iOS

## Running your app on Android devices[​](#running-your-app-on-android-devices "Direct link to Running your app on Android devices")

#### Development OS[​](#development-os "Direct link to Development OS")

* macOS
* Windows
* Linux

### 1. Enable Debugging over USB[​](#1-enable-debugging-over-usb "Direct link to 1. Enable Debugging over USB")

Most Android devices can only install and run apps downloaded from Google Play, by default. You will need to enable USB Debugging on your device in order to install your app during development.

To enable USB debugging on your device, you will first need to enable the "Developer options" menu by going to **Settings** → **About phone** → **Software information** and then tapping the `Build number` row at the bottom seven times. You can then go back to **Settings** → **Developer options** to enable "USB debugging".

### 2. Plug in your device via USB[​](#2-plug-in-your-device-via-usb "Direct link to 2. Plug in your device via USB")

Let's now set up an Android device to run our React Native projects. Go ahead and plug in your device via USB to your development machine.

Now check that your device is properly connecting to ADB, the Android Debug Bridge, by running `adb devices`.

shell

```

$ adb devices
List of devices attached
emulator-5554 offline   # Google emulator
14ed2fcc device         # Physical device

```

Seeing `device` in the right column means the device is connected. You must have **only one device connected** at a time.

note

If you see `unauthorized` in the list you will need to run `adb reverse tcp:8081 tcp:8081` and press allow USB debugging on the device.

### 3. Run your app[​](#3-run-your-app "Direct link to 3. Run your app")

From the root of your project; type the following in your command prompt to install and launch your app on the device:

* npm
* Yarn

shell

```

npm run android

```

shell

```

yarn android

```

note

If you get a "bridge configuration isn't available" error, see [Using adb reverse](/docs/running-on-device.md#method-1-using-adb-reverse-recommended).

tip

You can also use the `React Native CLI` to generate and run a `release` build (e.g. from the root of your project: `yarn android --mode release`).

## Connecting to the development server

You can also iterate quickly on a device by connecting to the development server running on your development machine. There are several ways of accomplishing this, depending on whether you have access to a USB cable or a Wi-Fi network.

### Method 1: Using adb reverse (recommended)[​](#method-1-using-adb-reverse-recommended "Direct link to Method 1: Using adb reverse (recommended)")

You can use this method if your device is running Android 5.0 (Lollipop) or newer, it has USB debugging enabled, and it is connected via USB to your development machine.

Run the following in a command prompt:

shell

```

$ adb -s  reverse tcp:8081 tcp:8081

```

To find the device name, run the following adb command:

shell

```

$ adb devices

```

You can now enable Fast Refresh from the [Dev Menu](/docs/debugging.md#opening-the-dev-menu). Your app will reload whenever your JavaScript code has changed.

### Method 2: Connect via Wi-Fi[​](#method-2-connect-via-wi-fi "Direct link to Method 2: Connect via Wi-Fi")

You can also connect to the development server over Wi-Fi. You'll first need to install the app on your device using a USB cable, but once that has been done you can debug wirelessly by following these instructions. You'll need your development machine's current IP address before proceeding.

You can find the IP address in **System Settings (or System Preferences)** → **Network**.

1. Make sure your laptop and your phone are on the **same** Wi-Fi network.
2. Open your React Native app on your device.
3. You'll see a [red screen with an error](/docs/debugging.md#logbox). This is OK. The following steps will fix that.
4. Open the in-app [Dev Menu](/docs/debugging.md#opening-the-dev-menu).
5. Go to **Dev Settings** → **Debug server host & port for device**.
6. Type in your machine's IP address and the port of the local dev server (e.g. `10.0.1.1:8081`).
7. Go back to the **Dev Menu** and select **Reload JS**.

You can now enable Fast Refresh from the [Dev Menu](/docs/debugging.md#opening-the-dev-menu). Your app will reload whenever your JavaScript code has changed.

## Building your app for production[​](#building-your-app-for-production "Direct link to Building your app for production")

You have built a great app using React Native, and you are now itching to release it in the Play Store. The process is the same as any other native Android app, with some additional considerations to take into account. Follow the guide for [generating a signed APK](/docs/signed-apk-android.md) to learn more.

### 1. Enable Debugging over USB[​](#1-enable-debugging-over-usb-1 "Direct link to 1. Enable Debugging over USB")

Most Android devices can only install and run apps downloaded from Google Play, by default. You will need to enable USB Debugging on your device in order to install your app during development.

To enable USB debugging on your device, you will first need to enable the "Developer options" menu by going to **Settings** → **About phone** → **Software information** and then tapping the `Build number` row at the bottom seven times. You can then go back to **Settings** → **Developer options** to enable "USB debugging".

### 2. Plug in your device via USB[​](#2-plug-in-your-device-via-usb-1 "Direct link to 2. Plug in your device via USB")

Let's now set up an Android device to run our React Native projects. Go ahead and plug in your device via USB to your development machine.

Now check that your device is properly connecting to ADB, the Android Debug Bridge, by running `adb devices`.

shell

```

$ adb devices
List of devices attached
emulator-5554 offline   # Google emulator
14ed2fcc device         # Physical device

```

Seeing `device` in the right column means the device is connected. You must have **only one device connected** at a time.

### 3. Run your app[​](#3-run-your-app-1 "Direct link to 3. Run your app")

From the root of your project, run the following in your command prompt to install and launch your app on the device:

* npm
* Yarn

shell

```

npm run android

```

shell

```

yarn android

```

tip

You can also use the `React Native CLI` to generate and run a `release` build (e.g. from the root of your project: `yarn android --mode release`).

## Connecting to the development server

You can also iterate quickly on a device by connecting to the development server running on your development machine. There are several ways of accomplishing this, depending on whether you have access to a USB cable or a Wi-Fi network.

### Method 1: Using adb reverse (recommended)[​](#method-1-using-adb-reverse-recommended-1 "Direct link to Method 1: Using adb reverse (recommended)")

You can use this method if your device is running Android 5.0 (Lollipop) or newer, it has USB debugging enabled, and it is connected via USB to your development machine.

Run the following in a command prompt:

shell

```

$ adb -s  reverse tcp:8081 tcp:8081

```

To find the device name, run the following adb command:

shell

```

$ adb devices

```

You can now enable Fast Refresh from the [Dev Menu](/docs/debugging.md#opening-the-dev-menu). Your app will reload whenever your JavaScript code has changed.

### Method 2: Connect via Wi-Fi[​](#method-2-connect-via-wi-fi-1 "Direct link to Method 2: Connect via Wi-Fi")

You can also connect to the development server over Wi-Fi. You'll first need to install the app on your device using a USB cable, but once that has been done you can debug wirelessly by following these instructions. You'll need your development machine's current IP address before proceeding.

Open the command prompt and type `ipconfig` to find your machine's IP address ([more info](https://windows.microsoft.com/en-us/windows/using-command-line-tools-networking-information)).

1. Make sure your laptop and your phone are on the **same** Wi-Fi network.
2. Open your React Native app on your device.
3. You'll see a [red screen with an error](/docs/debugging.md#logbox). This is OK. The following steps will fix that.
4. Open the in-app [Dev Menu](/docs/debugging.md#opening-the-dev-menu).
5. Go to **Dev Settings** → **Debug server host & port for device**.
6. Type in your machine's IP address and the port of the local dev server (e.g. `10.0.1.1:8081`).
7. Go back to the **Dev Menu** and select **Reload JS**.

You can now enable Fast Refresh from the [Dev Menu](/docs/debugging.md#opening-the-dev-menu). Your app will reload whenever your JavaScript code has changed.

## Building your app for production[​](#building-your-app-for-production-1 "Direct link to Building your app for production")

You have built a great app using React Native, and you are now itching to release it in the Play Store. The process is the same as any other native Android app, with some additional considerations to take into account. Follow the guide for [generating a signed APK](/docs/signed-apk-android.md) to learn more.

### 1. Enable Debugging over USB[​](#1-enable-debugging-over-usb-2 "Direct link to 1. Enable Debugging over USB")

Most Android devices can only install and run apps downloaded from Google Play, by default. You will need to enable USB Debugging on your device in order to install your app during development.

To enable USB debugging on your device, you will first need to enable the "Developer options" menu by going to **Settings** → **About phone** → **Software information** and then tapping the `Build number` row at the bottom seven times. You can then go back to **Settings** → **Developer options** to enable "USB debugging".

### 2. Plug in your device via USB[​](#2-plug-in-your-device-via-usb-2 "Direct link to 2. Plug in your device via USB")

Let's now set up an Android device to run our React Native projects. Go ahead and plug in your device via USB to your development machine.

Next, check the manufacturer code by using `lsusb` (on mac, you must first [install lsusb](https://github.com/jlhonora/lsusb)). `lsusb` should output something like this:

bash

```

$ lsusb
Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 003: ID 22b8:2e76 Motorola PCS
Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub

```

These lines represent the USB devices currently connected to your machine.

You want the line that represents your phone. If you're in doubt, try unplugging your phone and running the command again:

bash

```

$ lsusb
Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub

```

You'll see that after removing the phone, the line which has the phone model ("Motorola PCS" in this case) disappeared from the list. This is the line that we care about.

`Bus 001 Device 003: ID 22b8:2e76 Motorola PCS`

From the above line, you want to grab the first four digits from the device ID:

`22b8:2e76`

In this case, it's `22b8`. That's the identifier for Motorola.

You'll need to input this into your udev rules in order to get up and running:

shell

```

echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="22b8", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules

```

Make sure that you replace `22b8` with the identifier you get in the above command.

Now check that your device is properly connecting to ADB, the Android Debug Bridge, by running `adb devices`.

shell

```

$ adb devices
List of devices attached
emulator-5554 offline   # Google emulator
14ed2fcc device         # Physical device

```

Seeing `device` in the right column means the device is connected. You must have **only one device connected** at a time.

### 3. Run your app[​](#3-run-your-app-2 "Direct link to 3. Run your app")

From the root of your project, type the following in your command prompt to install and launch your app on the device:

* npm
* Yarn

shell

```

npm run android

```

shell

```

yarn android

```

note

If you get a "bridge configuration isn't available" error, see [Using adb reverse](/docs/running-on-device.md#method-1-using-adb-reverse-recommended).

tip

You can also use the `React Native CLI` to generate and run a `release` build (e.g. from the root of your project: `yarn android --mode release`).

## Connecting to the development server

You can also iterate quickly on a device by connecting to the development server running on your development machine. There are several ways of accomplishing this, depending on whether you have access to a USB cable or a Wi-Fi network.

### Method 1: Using adb reverse (recommended)[​](#method-1-using-adb-reverse-recommended-2 "Direct link to Method 1: Using adb reverse (recommended)")

You can use this method if your device is running Android 5.0 (Lollipop) or newer, it has USB debugging enabled, and it is connected via USB to your development machine.

Run the following in a command prompt:

shell

```

$ adb -s  reverse tcp:8081 tcp:8081

```

To find the device name, run the following adb command:

shell

```

$ adb devices

```

You can now enable Fast Refresh from the [Dev Menu](/docs/debugging.md#opening-the-dev-menu). Your app will reload whenever your JavaScript code has changed.

### Method 2: Connect via Wi-Fi[​](#method-2-connect-via-wi-fi-2 "Direct link to Method 2: Connect via Wi-Fi")

You can also connect to the development server over Wi-Fi. You'll first need to install the app on your device using a USB cable, but once that has been done you can debug wirelessly by following these instructions. You'll need your development machine's current IP address before proceeding.

Open a terminal and type `/sbin/ifconfig` to find your machine's IP address.

1. Make sure your laptop and your phone are on the **same** Wi-Fi network.
2. Open your React Native app on your device.
3. You'll see a [red screen with an error](/docs/debugging.md#logbox). This is OK. The following steps will fix that.
4. Open the in-app [Dev Menu](/docs/debugging.md#opening-the-dev-menu).
5. Go to **Dev Settings** → **Debug server host & port for device**.
6. Type in your machine's IP address and the port of the local dev server (e.g. `10.0.1.1:8081`).
7. Go back to the **Dev Menu** and select **Reload JS**.

You can now enable Fast Refresh from the [Dev Menu](/docs/debugging.md#opening-the-dev-menu). Your app will reload whenever your JavaScript code has changed.

## Building your app for production[​](#building-your-app-for-production-2 "Direct link to Building your app for production")

You have built a great app using React Native, and you are now itching to release it in the Play Store. The process is the same as any other native Android app, with some additional considerations to take into account. Follow the guide for [generating a signed APK](/docs/signed-apk-android.md) to learn more.

## Running your app on iOS devices[​](#running-your-app-on-ios-devices "Direct link to Running your app on iOS devices")

#### Development OS[​](#development-os-1 "Direct link to Development OS")

* macOS
* Windows
* Linux

### 1. Plug in your device via USB[​](#1-plug-in-your-device-via-usb "Direct link to 1. Plug in your device via USB")

Connect your iOS device to your Mac using a USB to Lightning or USB-C cable. Navigate to the `ios` folder in your project, then open the `.xcodeproj` file, or if you are using CocoaPods open `.xcworkspace`, within it using Xcode.

If this is your first time running an app on your iOS device, you may need to register your device for development. Open the **Product** menu from Xcode's menubar, then go to **Destination**. Look for and select your device from the list. Xcode will then register your device for development.

### 2. Configure code signing[​](#2-configure-code-signing "Direct link to 2. Configure code signing")

Register for an [Apple Developer account](https://developer.apple.com/) if you don't have one yet.

Select your project in the Xcode Project Navigator, then select your main target (it should share the same name as your project). Look for the "General" tab. Go to "Signing" and make sure your Apple Developer account or team is selected under the Team dropdown. Do the same for the tests target (it ends with Tests, and is below your main target).

**Repeat** this step for the **Tests** target in your project.

![](/assets/images/RunningOnDeviceCodeSigning-daffe4c45a59c3f5031b35f6b24def1d.png)

### 3. Build and Run your app[​](#3-build-and-run-your-app "Direct link to 3. Build and Run your app")

If everything is set up correctly, your device will be listed as the build target in the Xcode toolbar, and it will also appear in the Devices pane (`Shift ⇧` + `Cmd ⌘` + `2`). You can now press the **Build and run** button (`Cmd ⌘` + `R`) or select **Run** from the **Product** menu. Your app will launch on your device shortly.

![](data:image/png;base64,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)

note

If you run into any issues, please take a look at Apple's [Launching Your App on a Device](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/LaunchingYourApponDevices/LaunchingYourApponDevices.html#//apple_ref/doc/uid/TP40012582-CH27-SW4) docs.

## Connecting to the development server

You can also iterate quickly on a device using the development server. You only have to be on the same Wi-Fi network as your computer. Shake your device to open the [Dev Menu](/docs/debugging.md#opening-the-dev-menu), then enable Fast Refresh. Your app will reload whenever your JavaScript code has changed.

![](/assets/images/debugging-dev-menu-083-70616da2986550a977feb0158f218bdd.jpg)

### Troubleshooting[​](#troubleshooting "Direct link to Troubleshooting")

tip

If you have any issues, ensure that your Mac and device are on the same network and can reach each other. Many open wireless networks with captive portals are configured to prevent devices from reaching other devices on the network. You may use your device's Personal Hotspot feature in this case. You may also share your internet (Wi-Fi/Ethernet) connection from your Mac to your device via USB and connect to the bundler through this tunnel for very high transfer speeds.

When trying to connect to the development server you might get a [red screen with an error](/docs/debugging.md#logbox) saying:

note

Connection to `http://localhost:8081/debugger-proxy?role=client` timed out. Are you running node proxy? If you are running on the device, check if you have the right IP address in `RCTWebSocketExecutor.m`.

To solve this issue check the following points.

#### 1. Wi-Fi network.[​](#1-wi-fi-network "Direct link to 1. Wi-Fi network.")

Make sure your laptop and your phone are on the **same** Wi-Fi network.

#### 2. IP address[​](#2-ip-address "Direct link to 2. IP address")

Make sure that the build script detected the IP address of your machine correctly (e.g. `10.0.1.123`).

![](/assets/images/XcodeBuildIP-dfc8243436f5436466109acb8f9e0502.png)

Open the **Report navigator** tab, select the last **Build** and search for `IP=` followed by an IP address. The IP address which gets embedded in the app should match your machines IP address.

## Building your app for production[​](#building-your-app-for-production-3 "Direct link to Building your app for production")

You have built a great app using React Native, and you are now itching to release it in the App Store. The process is the same as any other native iOS app, with some additional considerations to take into account. Follow the guide for [publishing to the Apple App Store](/docs/publishing-to-app-store.md) to learn more.

info

A Mac is required in order to build your app for iOS devices. Alternatively, you can refer to our [environment setup guide](/docs/environment-setup.md) to learn how to build your app using Expo CLI, which will allow you to run your app using the Expo client app.

info

A Mac is required in order to build your app for iOS devices. Alternatively, you can refer to our [environment setup guide](/docs/environment-setup.md) to learn how to build your app using Expo CLI, which will allow you to run your app using the Expo client app.


---

# Running On Simulator

## Starting the simulator[​](#starting-the-simulator "Direct link to Starting the simulator")

Once you have your React Native project initialized, you can run the following command inside the newly created project directory.

* npm
* Yarn

shell

```

npm run ios

```

shell

```

yarn ios

```

If everything is set up correctly, you should see your new app running in the iOS Simulator shortly.

## Specifying a device[​](#specifying-a-device "Direct link to Specifying a device")

You can specify the device the simulator should run with the `--simulator` flag, followed by the device name as a string. The default is `"iPhone 14"`. If you wish to run your app on an iPhone SE (3rd generation), run the following command:

* npm
* Yarn

shell

```

npm run ios -- --simulator="iPhone SE (3rd generation)"

```

shell

```

yarn ios --simulator "iPhone SE (3rd generation)"

```

The device names correspond to the list of devices available in Xcode. You can check your available devices by running `xcrun simctl list devices` from the console.

### Specifying a version of device[​](#specifying-a-version-of-device "Direct link to Specifying a version of device")

If you have multiple iOS versions installed, you also need to specify its appropriate version. E.g. To run your app on an iPhone 14 Pro (16.0) run the following command:

* npm
* Yarn

shell

```

npm run ios -- --simulator="iPhone 14 Pro (16.0)"

```

shell

```

yarn ios --simulator "iPhone 14 Pro (16.0)"

```

## Specifying an UDID[​](#specifying-an-udid "Direct link to Specifying an UDID")

You can specify the device UDID returned from `xcrun simctl list devices` command. E.g. To run your app with UDID `AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA` run the following command:

* npm
* Yarn

shell

```

npm run ios -- --udid="AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA"

```

shell

```

yarn ios --udid "AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA"

```


---

# 🗑️ SafeAreaView

Deprecated

Use [react-native-safe-area-context](https://github.com/AppAndFlow/react-native-safe-area-context) instead.

The purpose of `SafeAreaView` is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later.

`SafeAreaView` renders nested content and automatically applies padding to reflect the portion of the view that is not covered by navigation bars, tab bars, toolbars, and other ancestor views. Moreover, and most importantly, Safe Area's paddings reflect the physical limitation of the screen, such as rounded corners or camera notches (i.e. the sensor housing area on iPhone 13).

## Example[​](#example "Direct link to Example")

To use, wrap your top level view with a `SafeAreaView` with a `flex: 1` style applied to it. You may also want to use a background color that matches your application's design.

***

# Reference

## Props[​](#props "Direct link to Props")

### [View Props](/docs/view.md#props)[​](#view-props "Direct link to view-props")

Inherits [View Props](/docs/view.md#props).

note

As padding is used to implement the behavior of the component, padding rules in styles applied to a `SafeAreaView` will be ignored and can cause different results depending on the platform. See [#22211](https://github.com/facebook/react-native/issues/22211) for details.


---

# ScrollView

Component that wraps platform ScrollView while providing integration with touch locking "responder" system.

Keep in mind that ScrollViews must have a bounded height in order to work, since they contain unbounded-height children into a bounded container (via a scroll interaction). In order to bound the height of a ScrollView, either set the height of the view directly (discouraged) or make sure all parent views have bounded height. Forgetting to transfer `{flex: 1}` down the view stack can lead to errors here, which the element inspector makes quick to debug.

Doesn't yet support other contained responders from blocking this scroll view from becoming the responder.

`<ScrollView>` vs [`<FlatList>`](/docs/flatlist.md) - which one to use?

`ScrollView` renders all its react child components at once, but this has a performance downside.

Imagine you have a very long list of items you want to display, maybe several screens worth of content. Creating JS components and native views for everything all at once, much of which may not even be shown, will contribute to slow rendering and increased memory usage.

This is where `FlatList` comes into play. `FlatList` renders items lazily, when they are about to appear, and removes items that scroll way off screen to save memory and processing time.

`FlatList` is also handy if you want to render separators between your items, multiple columns, infinite scroll loading, or any number of other features it supports out of the box.

## Example[​](#example "Direct link to Example")

***

# Reference

## Props[​](#props "Direct link to Props")

### [View Props](/docs/view.md#props)[​](#view-props "Direct link to view-props")

Inherits [View Props](/docs/view.md#props).

***

### `StickyHeaderComponent`[​](#stickyheadercomponent "Direct link to stickyheadercomponent")

A React Component that will be used to render sticky headers, should be used together with `stickyHeaderIndices`. You may need to set this component if your sticky header uses custom transforms, for example, when you want your list to have an animated and hidable header. If a component has not been provided, the default [`ScrollViewStickyHeader`](https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Components/ScrollView/ScrollViewStickyHeader.js) component will be used.

| Type               |
| ------------------ |
| component, element |

***

### `alwaysBounceHorizontal`iOS[​](#alwaysbouncehorizontal-ios "Direct link to alwaysbouncehorizontal-ios")

When true, the scroll view bounces horizontally when it reaches the end even if the content is smaller than the scroll view itself.

| Type | Default                                             |
| ---- | --------------------------------------------------- |
| bool | `true` when `horizontal={true}`***`false` otherwise |

***

### `alwaysBounceVertical`iOS[​](#alwaysbouncevertical-ios "Direct link to alwaysbouncevertical-ios")

When true, the scroll view bounces vertically when it reaches the end even if the content is smaller than the scroll view itself.

| Type | Default                                             |
| ---- | --------------------------------------------------- |
| bool | `false` when `horizontal={true}`***`true` otherwise |

***

### `automaticallyAdjustContentInsets`iOS[​](#automaticallyadjustcontentinsets-ios "Direct link to automaticallyadjustcontentinsets-ios")

Controls whether iOS should automatically adjust the content inset for scroll views that are placed behind a navigation bar or tab bar/toolbar.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `automaticallyAdjustKeyboardInsets`iOS[​](#automaticallyadjustkeyboardinsets-ios "Direct link to automaticallyadjustkeyboardinsets-ios")

Controls whether the ScrollView should automatically adjust its `contentInset` and `scrollViewInsets` when the Keyboard changes its size.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `automaticallyAdjustsScrollIndicatorInsets`iOS[​](#automaticallyadjustsscrollindicatorinsets-ios "Direct link to automaticallyadjustsscrollindicatorinsets-ios")

Controls whether iOS should automatically adjust the scroll indicator insets. See Apple's [documentation on the property](https://developer.apple.com/documentation/uikit/uiscrollview/3198043-automaticallyadjustsscrollindica).

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `bounces`iOS[​](#bounces-ios "Direct link to bounces-ios")

When true, the scroll view bounces when it reaches the end of the content if the content is larger than the scroll view along the axis of the scroll direction. When `false`, it disables all bouncing even if the `alwaysBounce*` props are `true`.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `bouncesZoom`iOS[​](#bounceszoom-ios "Direct link to bounceszoom-ios")

When `true`, gestures can drive zoom past min/max and the zoom will animate to the min/max value at gesture end, otherwise the zoom will not exceed the limits.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `canCancelContentTouches`iOS[​](#cancancelcontenttouches-ios "Direct link to cancancelcontenttouches-ios")

When `false`, once tracking starts, won't try to drag if the touch moves.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `centerContent`iOS[​](#centercontent-ios "Direct link to centercontent-ios")

When `true`, the scroll view automatically centers the content when the content is smaller than the scroll view bounds; when the content is larger than the scroll view, this property has no effect.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `contentContainerStyle`[​](#contentcontainerstyle "Direct link to contentcontainerstyle")

These styles will be applied to the scroll view content container which wraps all of the child views. Example:

```

return (

);
...
const styles = StyleSheet.create({
contentContainer: {
paddingVertical: 20
}
});

```

| Type                                    |
| --------------------------------------- |
| [View Style](/docs/view-style-props.md) |

***

### `contentInset`iOS[​](#contentinset-ios "Direct link to contentinset-ios")

The amount by which the scroll view content is inset from the edges of the scroll view.

| Type                                                                 | Default                                  |
| -------------------------------------------------------------------- | ---------------------------------------- |
| object: `{top: number, left: number, bottom: number, right: number}` | `{top: 0, left: 0, bottom: 0, right: 0}` |

***

### `contentInsetAdjustmentBehavior`iOS[​](#contentinsetadjustmentbehavior-ios "Direct link to contentinsetadjustmentbehavior-ios")

This property specifies how the safe area insets are used to modify the content area of the scroll view. Available on iOS 11 and later.

| Type                                                           | Default   |
| -------------------------------------------------------------- | --------- |
| enum(`'automatic'`, `'scrollableAxes'`, `'never'`, `'always'`) | `'never'` |

***

### `contentOffset`[​](#contentoffset "Direct link to contentoffset")

Used to manually set the starting scroll offset.

| Type  | Default        |
| ----- | -------------- |
| Point | `{x: 0, y: 0}` |

***

### `decelerationRate`[​](#decelerationrate "Direct link to decelerationrate")

A floating-point number that determines how quickly the scroll view decelerates after the user lifts their finger. You may also use string shortcuts `"normal"` and `"fast"` which match the underlying iOS settings for `UIScrollViewDecelerationRateNormal` and `UIScrollViewDecelerationRateFast` respectively.

* `'normal'` 0.998 on iOS, 0.985 on Android.
* `'fast'`, 0.99 on iOS, 0.9 on Android.

| Type                               | Default    |
| ---------------------------------- | ---------- |
| enum(`'fast'`, `'normal'`), number | `'normal'` |

***

### `directionalLockEnabled`iOS[​](#directionallockenabled-ios "Direct link to directionallockenabled-ios")

When true, the ScrollView will try to lock to only vertical or horizontal scrolling while dragging.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `disableIntervalMomentum`[​](#disableintervalmomentum "Direct link to disableintervalmomentum")

When true, the scroll view stops on the next index (in relation to scroll position at release) regardless of how fast the gesture is. This can be used for pagination when the page is less than the width of the horizontal ScrollView or the height of the vertical ScrollView.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `disableScrollViewPanResponder`[​](#disablescrollviewpanresponder "Direct link to disablescrollviewpanresponder")

When true, the default JS pan responder on the ScrollView is disabled, and full control over touches inside the ScrollView is left to its child components. This is particularly useful if `snapToInterval` is enabled, since it does not follow typical touch patterns. Do not use this on regular ScrollView use cases without `snapToInterval` as it may cause unexpected touches to occur while scrolling.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `endFillColor`Android[​](#endfillcolor-android "Direct link to endfillcolor-android")

Sometimes a scrollview takes up more space than its content fills. When this is the case, this prop will fill the rest of the scrollview with a color to avoid setting a background and creating unnecessary overdraw. This is an advanced optimization that is not needed in the general case.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `fadingEdgeLength`Android[​](#fadingedgelength-android "Direct link to fadingedgelength-android")

Fades out the edges of the scroll content.

If the value is greater than `0`, the fading edges will be set accordingly to the current scroll direction and position, indicating if there is more content to show.

| Type                                            | Default |
| ----------------------------------------------- | ------- |
| number***object: `{start: number, end: number}` | `0`     |

***

### `horizontal`[​](#horizontal "Direct link to horizontal")

When `true`, the scroll view's children are arranged horizontally in a row instead of vertically in a column.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `indicatorStyle`iOS[​](#indicatorstyle-ios "Direct link to indicatorstyle-ios")

The style of the scroll indicators.

* `'default'` same as `black`.
* `'black'`, scroll indicator is `black`. This style is good against a light background.
* `'white'`, scroll indicator is `white`. This style is good against a dark background.

| Type                                    | Default     |
| --------------------------------------- | ----------- |
| enum(`'default'`, `'black'`, `'white'`) | `'default'` |

***

### `invertStickyHeaders`[​](#invertstickyheaders "Direct link to invertstickyheaders")

If sticky headers should stick at the bottom instead of the top of the ScrollView. This is usually used with inverted ScrollViews.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `keyboardDismissMode`[​](#keyboarddismissmode "Direct link to keyboarddismissmode")

Determines whether the keyboard gets dismissed in response to a drag.

* `'none'`, drags do not dismiss the keyboard.
* `'on-drag'`, the keyboard is dismissed when a drag begins.

**iOS Only**

* `'interactive'`, the keyboard is dismissed interactively with the drag and moves in synchrony with the touch, dragging upwards cancels the dismissal. On Android this is not supported and it will have the same behavior as `'none'`.

| Type                                                                                 | Default  |
| ------------------------------------------------------------------------------------ | -------- |
| enum(`'none'`, `'on-drag'`)Android***enum(`'none'`, `'on-drag'`, `'interactive'`)iOS | `'none'` |

***

### `keyboardShouldPersistTaps`[​](#keyboardshouldpersisttaps "Direct link to keyboardshouldpersisttaps")

Determines when the keyboard should stay visible after a tap.

* `'never'` tapping outside of the focused text input when the keyboard is up dismisses the keyboard. When this happens, children won't receive the tap.
* `'always'`, the keyboard will not dismiss automatically, and the scroll view will not catch taps, but children of the scroll view can catch taps.
* `'handled'`, the keyboard will not dismiss automatically when the tap was handled by children of the scroll view (or captured by an ancestor).
* `false`, ***deprecated***, use `'never'` instead
* `true`, ***deprecated***, use `'always'` instead

| Type                                                      | Default   |
| --------------------------------------------------------- | --------- |
| enum(`'always'`, `'never'`, `'handled'`, `false`, `true`) | `'never'` |

***

### `maintainVisibleContentPosition`[​](#maintainvisiblecontentposition "Direct link to maintainvisiblecontentposition")

When set, the scroll view will adjust the scroll position so that the first child that is currently visible and at or beyond `minIndexForVisible` will not change position. This is useful for lists that are loading content in both directions, e.g. a chat thread, where new messages coming in might otherwise cause the scroll position to jump. A value of 0 is common, but other values such as 1 can be used to skip loading spinners or other content that should not maintain position.

The optional `autoscrollToTopThreshold` can be used to make the content automatically scroll to the top after making the adjustment if the user was within the threshold of the top before the adjustment was made. This is also useful for chat-like applications where you want to see new messages scroll into place, but not if the user has scrolled up a ways and it would be disruptive to scroll a bunch.

Caveat 1: Reordering elements in the scrollview with this enabled will probably cause jumpiness and jank. It can be fixed, but there are currently no plans to do so. For now, don't re-order the content of any ScrollViews or Lists that use this feature.

Caveat 2: This uses `contentOffset` and `frame.origin` in native code to compute visibility. Occlusion, transforms, and other complexity won't be taken into account as to whether content is "visible" or not.

| Type                                                                     |
| ------------------------------------------------------------------------ |
| object: `{minIndexForVisible: number, autoscrollToTopThreshold: number}` |

***

### `maximumZoomScale`iOS[​](#maximumzoomscale-ios "Direct link to maximumzoomscale-ios")

The maximum allowed zoom scale.

| Type   | Default |
| ------ | ------- |
| number | `1.0`   |

***

### `minimumZoomScale`iOS[​](#minimumzoomscale-ios "Direct link to minimumzoomscale-ios")

The minimum allowed zoom scale.

| Type   | Default |
| ------ | ------- |
| number | `1.0`   |

***

### `nestedScrollEnabled`Android[​](#nestedscrollenabled-android "Direct link to nestedscrollenabled-android")

Enables nested scrolling for Android API level 21+.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `onContentSizeChange`[​](#oncontentsizechange "Direct link to oncontentsizechange")

Called when scrollable content view of the ScrollView changes.

The handler function will receive two parameters: the content width and content height `(contentWidth, contentHeight)`.

It's implemented using onLayout handler attached to the content container which this ScrollView renders.

| Type     |
| -------- |
| function |

***

### `onMomentumScrollBegin`[​](#onmomentumscrollbegin "Direct link to onmomentumscrollbegin")

Called when the momentum scroll starts (scroll which occurs as the ScrollView starts gliding).

| Type     |
| -------- |
| function |

***

### `onMomentumScrollEnd`[​](#onmomentumscrollend "Direct link to onmomentumscrollend")

Called when the momentum scroll ends (scroll which occurs as the ScrollView glides to a stop).

| Type     |
| -------- |
| function |

***

### `onScroll`[​](#onscroll "Direct link to onscroll")

Fires at most once per frame during scrolling. The event has the following shape (all values with unspecified type are numbers):

js

```

{
nativeEvent: {
contentInset: {bottom, left, right, top},
contentOffset: {x, y},
contentSize: {height, width},
layoutMeasurement: {height, width},
velocity: {x, y},
responderIgnoreScroll: boolean,
zoomScale,
// iOS only
targetContentOffset: {x, y}
}
}

```

| Type     |
| -------- |
| function |

***

### `onScrollBeginDrag`[​](#onscrollbegindrag "Direct link to onscrollbegindrag")

Called when the user begins to drag the scroll view.

| Type     |
| -------- |
| function |

***

### `onScrollEndDrag`[​](#onscrollenddrag "Direct link to onscrollenddrag")

Called when the user stops dragging the scroll view and it either stops or begins to glide.

| Type     |
| -------- |
| function |

***

### `onScrollToTop`iOS[​](#onscrolltotop-ios "Direct link to onscrolltotop-ios")

Fires when the scroll view scrolls to top after the status bar has been tapped.

| Type     |
| -------- |
| function |

***

### `overScrollMode`Android[​](#overscrollmode-android "Direct link to overscrollmode-android")

Used to override default value of overScroll mode.

Possible values:

* `'auto'` - Allow a user to over-scroll this view only if the content is large enough to meaningfully scroll.
* `'always'` - Always allow a user to over-scroll this view.
* `'never'` - Never allow a user to over-scroll this view.

| Type                                  | Default  |
| ------------------------------------- | -------- |
| enum(`'auto'`, `'always'`, `'never'`) | `'auto'` |

***

### `pagingEnabled`[​](#pagingenabled "Direct link to pagingenabled")

When true, the scroll view stops on multiples of the scroll view's size when scrolling. This can be used for horizontal pagination.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `persistentScrollbar`Android[​](#persistentscrollbar-android "Direct link to persistentscrollbar-android")

Causes the scrollbars not to turn transparent when they are not in use.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `pinchGestureEnabled`iOS[​](#pinchgestureenabled-ios "Direct link to pinchgestureenabled-ios")

When true, ScrollView allows use of pinch gestures to zoom in and out.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `refreshControl`[​](#refreshcontrol "Direct link to refreshcontrol")

A RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView. Only works for vertical ScrollViews (`horizontal` prop must be `false`).

See [RefreshControl](/docs/refreshcontrol.md).

| Type    |
| ------- |
| element |

***

### `removeClippedSubviews`[​](#removeclippedsubviews "Direct link to removeclippedsubviews")

warning

Using this property may lead to bugs (missing content) in some circumstances - use at your own risk.

When `true`, offscreen child views are removed from their native backing superview when offscreen. This may improve scroll performance for large lists. On Android the default value is `true`.

| Type    |
| ------- |
| boolean |

***

### `scrollEnabled`[​](#scrollenabled "Direct link to scrollenabled")

When false, the view cannot be scrolled via touch interaction.

Note that the view can always be scrolled by calling `scrollTo`.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `scrollEventThrottle`[​](#scrolleventthrottle "Direct link to scrolleventthrottle")

Limits how often scroll events will be fired while scrolling, specified as a time interval in ms. This may be useful when expensive work is performed in response to scrolling. Values ≤ `16` will disable throttling, regardless of the refresh rate of the device.

| Type   | Default |
| ------ | ------- |
| number | `0`     |

***

### `scrollIndicatorInsets`iOS[​](#scrollindicatorinsets-ios "Direct link to scrollindicatorinsets-ios")

The amount by which the scroll view indicators are inset from the edges of the scroll view. This should normally be set to the same value as the `contentInset`.

| Type                                                                 | Default                                  |
| -------------------------------------------------------------------- | ---------------------------------------- |
| object: `{top: number, left: number, bottom: number, right: number}` | `{top: 0, left: 0, bottom: 0, right: 0}` |

***

### `scrollPerfTag`Android[​](#scrollperftag-android "Direct link to scrollperftag-android")

Tag used to log scroll performance on this scroll view. Will force momentum events to be turned on (see sendMomentumEvents). This doesn't do anything out of the box and you need to implement a custom native FpsListener for it to be useful.

| Type   |
| ------ |
| string |

***

### `scrollToOverflowEnabled`iOS[​](#scrolltooverflowenabled-ios "Direct link to scrolltooverflowenabled-ios")

When `true`, the scroll view can be programmatically scrolled beyond its content size.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `scrollsToTop`iOS[​](#scrollstotop-ios "Direct link to scrollstotop-ios")

When `true`, the scroll view scrolls to top when the status bar is tapped.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `showsHorizontalScrollIndicator`[​](#showshorizontalscrollindicator "Direct link to showshorizontalscrollindicator")

When `true`, shows a horizontal scroll indicator.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `showsVerticalScrollIndicator`[​](#showsverticalscrollindicator "Direct link to showsverticalscrollindicator")

When `true`, shows a vertical scroll indicator.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `snapToAlignment`[​](#snaptoalignment "Direct link to snaptoalignment")

When `snapToInterval` is set, `snapToAlignment` will define the relationship of the snapping to the scroll view.

Possible values:

* `'start'` will align the snap at the left (horizontal) or top (vertical).
* `'center'` will align the snap in the center.
* `'end'` will align the snap at the right (horizontal) or bottom (vertical).

| Type                                 | Default   |
| ------------------------------------ | --------- |
| enum(`'start'`, `'center'`, `'end'`) | `'start'` |

***

### `snapToEnd`[​](#snaptoend "Direct link to snaptoend")

Use in conjunction with `snapToOffsets`. By default, the end of the list counts as a snap offset. Set `snapToEnd` to false to disable this behavior and allow the list to scroll freely between its end and the last `snapToOffsets` offset.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `snapToInterval`[​](#snaptointerval "Direct link to snaptointerval")

When set, causes the scroll view to stop at multiples of the value of `snapToInterval`. This can be used for paginating through children that have lengths smaller than the scroll view. Typically used in combination with `snapToAlignment` and `decelerationRate="fast"`. Overrides less configurable `pagingEnabled` prop.

| Type   |
| ------ |
| number |

***

### `snapToOffsets`[​](#snaptooffsets "Direct link to snaptooffsets")

When set, causes the scroll view to stop at the defined offsets. This can be used for paginating through variously sized children that have lengths smaller than the scroll view. Typically used in combination with `decelerationRate="fast"`. Overrides less configurable `pagingEnabled` and `snapToInterval` props.

| Type            |
| --------------- |
| array of number |

***

### `snapToStart`[​](#snaptostart "Direct link to snaptostart")

Use in conjunction with `snapToOffsets`. By default, the beginning of the list counts as a snap offset. Set `snapToStart` to `false` to disable this behavior and allow the list to scroll freely between its start and the first `snapToOffsets` offset.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `stickyHeaderHiddenOnScroll`[​](#stickyheaderhiddenonscroll "Direct link to stickyheaderhiddenonscroll")

When set to `true`, sticky header will be hidden when scrolling down the list, and it will dock at the top of the list when scrolling up.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `stickyHeaderIndices`[​](#stickyheaderindices "Direct link to stickyheaderindices")

An array of child indices determining which children get docked to the top of the screen when scrolling. For example, passing `stickyHeaderIndices={[0]}` will cause the first child to be fixed to the top of the scroll view. You can also use like \[x,y,z] to make multiple items sticky when they are at the top. This property is not supported in conjunction with `horizontal={true}`.

| Type            |
| --------------- |
| array of number |

***

### `zoomScale`iOS[​](#zoomscale-ios "Direct link to zoomscale-ios")

The current scale of the scroll view content.

| Type   | Default |
| ------ | ------- |
| number | `1.0`   |

***

## Methods[​](#methods "Direct link to Methods")

### `flashScrollIndicators()`[​](#flashscrollindicators "Direct link to flashscrollindicators")

tsx

```

flashScrollIndicators();

```

Displays the scroll indicators momentarily.

***

### `scrollTo()`[​](#scrollto "Direct link to scrollto")

tsx

```

scrollTo(
options?: {x?: number, y?: number, animated?: boolean} | number,
deprecatedX?: number,
deprecatedAnimated?: boolean,
);

```

Scrolls to a given x, y offset, either immediately, with a smooth animation.

**Example:**

`scrollTo({x: 0, y: 0, animated: true})`

note

The weird function signature is due to the fact that, for historical reasons, the function also accepts separate arguments as an alternative to the options object. This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.

***

### `scrollToEnd()`[​](#scrolltoend "Direct link to scrolltoend")

tsx

```

scrollToEnd(options?: {animated?: boolean});

```

If this is a vertical ScrollView scrolls to the bottom. If this is a horizontal ScrollView scrolls to the right.

Use `scrollToEnd({animated: true})` for smooth animated scrolling, `scrollToEnd({animated: false})` for immediate scrolling. If no options are passed, `animated` defaults to `true`.


---

# SectionList

A performant interface for rendering sectioned lists, supporting the most handy features:

* Fully cross-platform.
* Configurable viewability callbacks.
* List header support.
* List footer support.
* Item separator support.
* Section header support.
* Section separator support.
* Heterogeneous data and item rendering support.
* Pull to Refresh.
* Scroll loading.

If you don't need section support and want a simpler interface, use [`<FlatList>`](/docs/flatlist.md).

## Example[​](#example "Direct link to Example")

This is a convenience wrapper around [`<VirtualizedList>`](/docs/virtualizedlist.md), and thus inherits its props (as well as those of [`<ScrollView>`](/docs/scrollview.md)) that aren't explicitly listed here, along with the following caveats:

* Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.
* This is a `PureComponent` which means that it will not re-render if `props` remain shallow-equal. Make sure that everything your `renderItem` function depends on is passed as a prop (e.g. `extraData`) that is not `===` after updates, otherwise your UI may not update on changes. This includes the `data` prop and parent component state.
* In order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it's possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.
* By default, the list looks for a `key` prop on each item and uses that for the React key. Alternatively, you can provide a custom `keyExtractor` prop.

***

# Reference

## Props[​](#props "Direct link to Props")

### [VirtualizedList Props](/docs/virtualizedlist.md#props)[​](#virtualizedlist-props "Direct link to virtualizedlist-props")

Inherits [VirtualizedList Props](/docs/virtualizedlist.md#props).

***

### Require&#x64;**`renderItem`**[​](#requiredrenderitem "Direct link to requiredrenderitem")

Default renderer for every item in every section. Can be over-ridden on a per-section basis. Should return a React element.

| Type     |
| -------- |
| function |

The render function will be passed an object with the following keys:

* 'item' (object) - the item object as specified in this section's `data` key

* 'index' (number) - Item's index within the section.

* 'section' (object) - The full section object as specified in `sections`.

* 'separators' (object) - An object with the following keys:

  <!-- -->

  * 'highlight' (function) - `() => void`

  * 'unhighlight' (function) - `() => void`

  * 'updateProps' (function) - `(select, newProps) => void`

    * 'select' (enum) - possible values are 'leading', 'trailing'
    * 'newProps' (object)

***

### Require&#x64;**`sections`**[​](#requiredsections "Direct link to requiredsections")

The actual data to render, akin to the `data` prop in [`FlatList`](/docs/flatlist.md).

| Type                                              |
| ------------------------------------------------- |
| array of [Section](/docs/sectionlist.md#section)s |

***

### `extraData`[​](#extradata "Direct link to extradata")

A marker property for telling the list to re-render (since it implements `PureComponent`). If any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the `data` prop, stick it here and treat it immutably.

| Type |
| ---- |
| any  |

***

### `initialNumToRender`[​](#initialnumtorender "Direct link to initialnumtorender")

How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.

| Type   | Default |
| ------ | ------- |
| number | `10`    |

***

### `inverted`[​](#inverted "Direct link to inverted")

Reverses the direction of scroll. Uses scale transforms of -1.

| Type    | Default |
| ------- | ------- |
| boolean | `false` |

***

### `ItemSeparatorComponent`[​](#itemseparatorcomponent "Direct link to itemseparatorcomponent")

Rendered in between each item, but not at the top or bottom. By default, `highlighted`, `section`, and `[leading/trailing][Item/Section]` props are provided. `renderItem` provides `separators.highlight`/`unhighlight` which will update the `highlighted` prop, but you can also add custom props with `separators.updateProps`. Can be a React Component (e.g. `SomeComponent`), or a React element (e.g. `<SomeComponent />`).

| Type                         |
| ---------------------------- |
| component, function, element |

***

### `keyExtractor`[​](#keyextractor "Direct link to keyextractor")

Used to extract a unique key for a given item at the specified index. Key is used for caching and as the React key to track item re-ordering. The default extractor checks `item.key`, then `item.id`, and then falls back to using the index, like React does. Note that this sets keys for each item, but each overall section still needs its own key.

| Type                                    |
| --------------------------------------- |
| (item: object, index: number) => string |

***

### `ListEmptyComponent`[​](#listemptycomponent "Direct link to listemptycomponent")

Rendered when the list is empty. Can be a React Component (e.g. `SomeComponent`), or a React element (e.g. `<SomeComponent />`).

| Type               |
| ------------------ |
| component, element |

***

### `ListFooterComponent`[​](#listfootercomponent "Direct link to listfootercomponent")

Rendered at the very end of the list. Can be a React Component (e.g. `SomeComponent`), or a React element (e.g. `<SomeComponent />`).

| Type               |
| ------------------ |
| component, element |

***

### `ListHeaderComponent`[​](#listheadercomponent "Direct link to listheadercomponent")

Rendered at the very beginning of the list. Can be a React Component (e.g. `SomeComponent`), or a React element (e.g. `<SomeComponent />`).

| Type               |
| ------------------ |
| component, element |

***

### `onRefresh`[​](#onrefresh "Direct link to onrefresh")

If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the `refreshing` prop correctly. To offset the RefreshControl from the top (e.g. by 100 pts), use `progressViewOffset={100}`.

| Type     |
| -------- |
| function |

***

### `onViewableItemsChanged`[​](#onviewableitemschanged "Direct link to onviewableitemschanged")

Called when the viewability of rows changes, as defined by the `viewabilityConfig` prop.

| Type                                                                     |
| ------------------------------------------------------------------------ |
| `(callback: {changed: ViewToken[], viewableItems: ViewToken[]}) => void` |

***

### `refreshing`[​](#refreshing "Direct link to refreshing")

Set this true while waiting for new data from a refresh.

| Type    | Default |
| ------- | ------- |
| boolean | `false` |

***

### `removeClippedSubviews`[​](#removeclippedsubviews "Direct link to removeclippedsubviews")

warning

Using this property may lead to bugs (missing content) in some circumstances - use at your own risk.

When `true`, offscreen child views are removed from their native backing superview when offscreen. This may improve scroll performance for large lists. On Android the default value is `true`.

| Type    |
| ------- |
| boolean |

***

### `renderSectionFooter`[​](#rendersectionfooter "Direct link to rendersectionfooter")

Rendered at the bottom of each section.

| Type                                            |
| ----------------------------------------------- |
| `(info: {section: Section}) => element ｜ null` |

***

### `renderSectionHeader`[​](#rendersectionheader "Direct link to rendersectionheader")

Rendered at the top of each section. These stick to the top of the `ScrollView` by default on iOS. See `stickySectionHeadersEnabled`.

| Type                                            |
| ----------------------------------------------- |
| `(info: {section: Section}) => element ｜ null` |

***

### `SectionSeparatorComponent`[​](#sectionseparatorcomponent "Direct link to sectionseparatorcomponent")

Rendered at the top and bottom of each section (note this is different from `ItemSeparatorComponent` which is only rendered between items). These are intended to separate sections from the headers above and below and typically have the same highlight response as `ItemSeparatorComponent`. Also receives `highlighted`, `[leading/trailing][Item/Section]`, and any custom props from `separators.updateProps`.

| Type               |
| ------------------ |
| component, element |

***

### `stickySectionHeadersEnabled`[​](#stickysectionheadersenabled "Direct link to stickysectionheadersenabled")

Makes section headers stick to the top of the screen until the next one pushes it off. Only enabled by default on iOS because that is the platform standard there.

| Type    | Default                    |
| ------- | -------------------------- |
| boolean | `false`Android***`true`iOS |

## Methods[​](#methods "Direct link to Methods")

### `flashScrollIndicators()`iOS[​](#flashscrollindicators-ios "Direct link to flashscrollindicators-ios")

tsx

```

flashScrollIndicators();

```

Displays the scroll indicators momentarily.

***

### `recordInteraction()`[​](#recordinteraction "Direct link to recordinteraction")

tsx

```

recordInteraction();

```

Tells the list an interaction has occurred, which should trigger viewability calculations, e.g. if `waitForInteractions` is true and the user has not scrolled. This is typically called by taps on items or by navigation actions.

***

### `scrollToLocation()`[​](#scrolltolocation "Direct link to scrolltolocation")

tsx

```

scrollToLocation(params: SectionListScrollParams);

```

Scrolls to the item at the specified `sectionIndex` and `itemIndex` (within the section) positioned in the viewable area such that `viewPosition` set to `0` places it at the top (and may be covered by a sticky header), `1` at the bottom, and `0.5` centered in the middle.

note

You cannot scroll to locations outside the render window without specifying the `getItemLayout` or `onScrollToIndexFailed` prop.

**Parameters:**

| Name           | Type   |
| -------------- | ------ |
| paramsRequired | object |

Valid `params` keys are:

* 'animated' (boolean) - Whether the list should do an animation while scrolling. Defaults to `true`.
* 'itemIndex' (number) - Index within section for the item to scroll to. Required.
* 'sectionIndex' (number) - Index for section that contains the item to scroll to. Required.
* 'viewOffset' (number) - A fixed number of pixels to offset the final target position, e.g. to compensate for sticky headers.
* 'viewPosition' (number) - A value of `0` places the item specified by index at the top, `1` at the bottom, and `0.5` centered in the middle.

## Type Definitions[​](#type-definitions "Direct link to Type Definitions")

### Section[​](#section "Direct link to Section")

An object that identifies the data to be rendered for a given section.

| Type |
| ---- |
| any  |

**Properties:**

| Name                   | Type               | Description                                                                                                                                                                  |
| ---------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataRequired           | array              | The data for rendering items in this section. Array of objects, much like [`FlatList`'s data prop](/docs/flatlist.md#required-data).                                         |
| key                    | string             | Optional key to keep track of section re-ordering. If you don't plan on re-ordering sections, the array index will be used by default.                                       |
| renderItem             | function           | Optionally define an arbitrary item renderer for this section, overriding the default [`renderItem`](/docs/sectionlist.md#renderitem) for the list.                          |
| ItemSeparatorComponent | component, element | Optionally define an arbitrary item separator for this section, overriding the default [`ItemSeparatorComponent`](/docs/sectionlist.md#itemseparatorcomponent) for the list. |
| keyExtractor           | function           | Optionally define an arbitrary key extractor for this section, overriding the default [`keyExtractor`](/docs/sectionlist.md#keyextractor).                                   |


---

# Security

Security is often overlooked when building apps. It is true that it is impossible to build software that is completely impenetrable—we’ve yet to invent a completely impenetrable lock (bank vaults do, after all, still get broken into). However, the probability of falling victim to a malicious attack or being exposed for a security vulnerability is inversely proportional to the effort you’re willing to put in to protecting your application against any such eventuality. Although an ordinary padlock is pickable, it is still much harder to get past than a cabinet hook!

![ ](/docs/assets/d_security_chart.svg)

In this guide, you will learn about best practices for storing sensitive information, authentication, network security, and tools that will help you secure your app. This is not a preflight checklist—it is a catalogue of options, each of which will help further protect your app and users.

## Storing Sensitive Info[​](#storing-sensitive-info "Direct link to Storing Sensitive Info")

Never store sensitive API keys in your app code. Anything included in your code could be accessed in plain text by anyone inspecting the app bundle. Tools like [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv) and [react-native-config](https://github.com/luggit/react-native-config/) are great for adding environment-specific variables like API endpoints, but they should not be confused with server-side environment variables, which can often contain secrets and API keys.

If you must have an API key or a secret to access some resource from your app, the most secure way to handle this would be to build an orchestration layer between your app and the resource. This could be a serverless function (e.g. using AWS Lambda or Google Cloud Functions) which can forward the request with the required API key or secret. Secrets in server side code cannot be accessed by the API consumers the same way secrets in your app code can.

**For persisted user data, choose the right type of storage based on its sensitivity.** As your app is used, you’ll often find the need to save data on the device, whether to support your app being used offline, cut down on network requests or save your user’s access token between sessions so they wouldn’t have to re-authenticate each time they use the app.

info

**Persisted vs unpersisted** — persisted data is written to the device’s disk, which lets the data be read by your app across application launches without having to do another network request to fetch it or asking the user to re-enter it. But this also can make that data more vulnerable to being accessed by attackers. Unpersisted data is never written to disk—so there's no data to access!

### Async Storage[​](#async-storage "Direct link to Async Storage")

[Async Storage](https://github.com/react-native-async-storage/async-storage) is a community-maintained module for React Native that provides an asynchronous, unencrypted, key-value store. Async Storage is not shared between apps: every app has its own sandbox environment and has no access to data from other apps.

| **Do** use async storage when...              | **Don't** use async storage for... |
| --------------------------------------------- | ---------------------------------- |
| Persisting non-sensitive data across app runs | Token storage                      |
| Persisting Redux state                        | Secrets                            |
| Persisting GraphQL state                      |                                    |
| Storing global app-wide variables             |                                    |

#### Developer Notes[​](#developer-notes "Direct link to Developer Notes")

* Web

note

Async Storage is the React Native equivalent of Local Storage from the web

### Secure Storage[​](#secure-storage "Direct link to Secure Storage")

React Native does not come bundled with any way of storing sensitive data. However, there are pre-existing solutions for Android and iOS platforms.

#### iOS - Keychain Services[​](#ios---keychain-services "Direct link to iOS - Keychain Services")

[Keychain Services](https://developer.apple.com/documentation/security/keychain_services) allows you to securely store small chunks of sensitive info for the user. This is an ideal place to store certificates, tokens, passwords, and any other sensitive information that doesn’t belong in Async Storage.

#### Android - Secure Shared Preferences[​](#android---secure-shared-preferences "Direct link to Android - Secure Shared Preferences")

[Shared Preferences](https://developer.android.com/reference/android/content/SharedPreferences) is the Android equivalent for a persistent key-value data store. **Data in Shared Preferences is not encrypted by default**, but [Encrypted Shared Preferences](https://developer.android.com/topic/security/data) wraps the Shared Preferences class for Android, and automatically encrypts keys and values.

#### Android - Keystore[​](#android---keystore "Direct link to Android - Keystore")

The [Android Keystore](https://developer.android.com/training/articles/keystore) system lets you store cryptographic keys in a container to make it more difficult to extract from the device.

In order to use iOS Keychain services or Android Secure Shared Preferences, you can either write a bridge yourself or use a library which wraps them for you and provides a unified API at your own risk. Some libraries to consider:

* [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/)
* [react-native-keychain](https://github.com/oblador/react-native-keychain)

Caution

**Be mindful of unintentionally storing or exposing sensitive info.** This could happen accidentally, for example saving sensitive form data in redux state and persisting the whole state tree in Async Storage. Or sending user tokens and personal info to an application monitoring service such as Sentry or Crashlytics.

## Authentication and Deep Linking[​](#authentication-and-deep-linking "Direct link to Authentication and Deep Linking")

![ ](/docs/assets/d_security_deep-linking.svg)

Mobile apps have a unique vulnerability that is non-existent in the web: **deep linking**. Deep linking is a way of sending data directly to a native application from an outside source. A deep link looks like `app://` where `app` is your app scheme and anything following the // could be used internally to handle the request.

For example, if you were building an ecommerce app, you could use `app://products/1` to deep link to your app and open the product detail page for a product with id 1. You can think of these kind of like URLs on the web, but with one crucial distinction:

Deep links are not secure and you should never send any sensitive information in them.

The reason deep links are not secure is because there is no centralized method of registering URL schemes. As an application developer, you can use almost any url scheme you choose by [configuring it in Xcode](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app) for iOS or [adding an intent on Android](https://developer.android.com/training/app-links/deep-linking).

There is nothing stopping a malicious application from hijacking your deep link by also registering to the same scheme and then obtaining access to the data your link contains. Sending something like `app://products/1` is not harmful, but sending tokens is a security concern.

When the operating system has two or more applications to choose from when opening a link, Android will show the user a [Disambiguation dialog](https://developer.android.com/training/basics/intents/sending#disambiguation-dialog) and ask them to choose which application to use to open the link. On iOS however, the operating system will make the choice for you, so the user will be blissfully unaware. Apple has made steps to address this issue in later iOS versions (iOS 11) where they instituted a first-come-first-served principle, although this vulnerability could still be exploited in different ways which you can read more about [here](https://thehackernews.com/2019/07/ios-custom-url-scheme.html). Using [universal links](https://developer.apple.com/ios/universal-links/) will allow linking to content within your app securely in iOS.

### OAuth2 and Redirects[​](#oauth2-and-redirects "Direct link to OAuth2 and Redirects")

The OAuth2 authentication protocol is incredibly popular nowadays, prided as the most complete and secure protocol around. The OpenID Connect protocol is also based on this. In OAuth2, the user is asked to authenticate via a third party. On successful completion, this third party redirects back to the requesting application with a verification code which can be exchanged for a JWT — a [JSON Web Token](https://jwt.io/introduction/). JWT is an open standard for securely transmitting information between parties on the web.

On the web, this redirect step is secure, because URLs on the web are guaranteed to be unique. This is not true for apps because, as mentioned earlier, there is no centralized method of registering URL schemes! In order to address this security concern, an additional check must be added in the form of PKCE.

[PKCE](https://oauth.net/2/pkce/), pronounced “Pixy” stands for Proof of Key Code Exchange, and is an extension to the OAuth 2 spec. This involves adding an additional layer of security which verifies that the authentication and token exchange requests come from the same client. PKCE uses the [SHA 256](https://www.movable-type.co.uk/scripts/sha256.html) Cryptographic Hash Algorithm. SHA 256 creates a unique “signature” for a text or file of any size, but it is:

* Always the same length regardless of the input file
* Guaranteed to always produce the same result for the same input
* One way (that is, you can’t reverse engineer it to reveal the original input)

Now you have two values:

* **code\_verifier** - a large random string generated by the client
* **code\_challenge** - the SHA 256 of the code\_verifier

During the initial `/authorize` request, the client also sends the `code_challenge` for the `code_verifier` it keeps in memory. After the authorize request has returned correctly, the client also sends the `code_verifier` that was used to generate the `code_challenge`. The IDP will then calculate the `code_challenge`, see if it matches what was set on the very first `/authorize` request, and only send the access token if the values match.

This guarantees that only the application that triggered the initial authorization flow would be able to successfully exchange the verification code for a JWT. So even if a malicious application gets access to the verification code, it will be useless on its own. To see this in action, check out [this example](https://aaronparecki.com/oauth-2-simplified/#mobile-apps).

A library to consider for native OAuth is [react-native-app-auth](https://github.com/FormidableLabs/react-native-app-auth). React-native-app-auth is an SDK for communicating with OAuth2 providers. It wraps the native [AppAuth-iOS](https://github.com/openid/AppAuth-iOS) and [AppAuth-Android](https://github.com/openid/AppAuth-Android) libraries and can support PKCE.

note

`react-native-app-auth` can support PKCE only if your Identity Provider supports it.

![OAuth2 with PKCE](/assets/images/diagram_pkce-e0b4a829176ac05d07b0bcec73994985.svg)

## Network Security[​](#network-security "Direct link to Network Security")

Your APIs should always use [SSL encryption](https://www.ssl.com/faqs/faq-what-is-ssl/). SSL encryption protects against the requested data being read in plain text between when it leaves the server and before it reaches the client. You’ll know the endpoint is secure, because it starts with `https://` instead of `http://`.

### SSL Pinning[​](#ssl-pinning "Direct link to SSL Pinning")

Using https endpoints could still leave your data vulnerable to interception. With https, the client will only trust the server if it can provide a valid certificate that is signed by a trusted Certificate Authority that is pre-installed on the client. An attacker could take advantage of this by installing a malicious root CA certificate to the user’s device, so the client would trust all certificates that are signed by the attacker. Thus, relying on certificates alone could still leave you vulnerable to a [man-in-the-middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

**SSL pinning** is a technique that can be used on the client side to avoid this attack. It works by embedding (or pinning) a list of trusted certificates to the client during development, so that only the requests signed with one of the trusted certificates will be accepted, and any self-signed certificates will not be.

Caution

When using SSL pinning, you should be mindful of certificate expiry. Certificates expire every 1-2 years and when one does, it’ll need to be updated in the app as well as on the server. As soon as the certificate on the server has been updated, any apps with the old certificate embedded in them will cease to work.

## Summary[​](#summary "Direct link to Summary")

There is no bulletproof way to handle security, but with conscious effort and diligence, it is possible to significantly reduce the likelihood of a security breach in your application. Invest in security proportional to the sensitivity of the data stored in your application, the number of users, and the damage a hacker could do when gaining access to their account. And remember: it’s significantly harder to access information that was never requested in the first place.


---

# ❌ SegmentedControlIOS

Removed from React Native

Use one of the [community packages](https://reactnative.directory/?search=segmentedcontrol) instead.

***


---

# Set Up Your Environment

In this guide, you'll learn how to set up your environment, so that you can run your project with Android Studio and Xcode. This will allow you to develop with Android emulators and iOS simulators, build your app locally, and more.

info

This guide requires Android Studio or Xcode. If you already have one of these programs installed, you should be able to get up and running within a few minutes. If they are not installed, you should expect to spend about an hour installing and configuring them.

Is setting up my environment required?

Setting up your environment is not required if you're using a [Framework](/architecture/glossary.md#react-native-framework). With a React Native Framework, you don't need to set up Android Studio or Xcode as it will take care of building the native app for you

If you have constraints that prevent you from using a Framework, or you'd like to write your own Framework, then setting up your local environment is a requirement. After your environment is set up, learn how to [get started without a framework](/docs/getting-started-without-a-framework.md).

#### Development OS[​](#development-os "Direct link to Development OS")

* macOS
* Windows
* Linux

#### Target OS[​](#target-os "Direct link to Target OS")

* Android
* iOS

## Installing dependencies[​](#installing-dependencies "Direct link to Installing dependencies")

You will need Node, Watchman, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

### Node & Watchman

We recommend installing Node and Watchman using [Homebrew](https://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

shell

```

brew install node
brew install watchman

```

If you have already installed Node on your system, make sure it is Node 22.11.0 or newer.

[Watchman](https://facebook.github.io/watchman) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

### Java Development Kit

We recommend installing the OpenJDK distribution called Azul **Zulu** using [Homebrew](https://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

shell

```

brew install --cask zulu@17

# Get path to where cask was installed to find the JDK installer

brew info --cask zulu@17

# ==> zulu@17:

# https://www.azul.com/downloads/

# Installed

# /opt/homebrew/Caskroom/zulu@17/ (185.8MB) (note that the path is /usr/local/Caskroom on non-Apple Silicon Macs)

# Installed using the formulae.brew.sh API on 2024-06-06 at 10:00:00
