# If you are running the app on a physical device

add-dsym <path-to-your-app>/ios/Pods/React-Core-prebuilt/React.xcframework/ios-arm64/React.framework/dSYMs/React.framework.dSYM

```

Now you can step into the React Native code.

## Breaking Changes[​](#breaking-changes "Direct link to Breaking Changes")

We're working hard to make React Native releases more predictable and easier to upgrade. React Native 0.83 is the first release with **no user facing breaking changes**.

If you are on React Native 0.82, you should be able to upgrade your app to React Native 0.83 without any changes to your app code.

To learn more about what we consider a breaking change, have a look at [this article](/docs/releases/versioning-policy.md#what-is-a-breaking-change).

## Deprecations[​](#deprecations "Direct link to Deprecations")

This release ships two deprecations that are Android specific:

* **Networking**: The `sendRequestInternal` method is being phased out and it is now deprecated.
* **Animation**: `startOperationBatch` and `finishOperationBatch` are now deprecated.

## Acknowledgements[​](#acknowledgements "Direct link to Acknowledgements")

React Native 0.83 contains over 594 commits from 56 contributors. Thanks for all your hard work!

We want to send a special thank you to those community members that shipped significant contributions in this release:

* [Ruslan Lesiutin](https://github.com/hoxyq), [Moti Zilberman](https://github.com/motiz88), and [Alex Hunt](https://x.com/huntie) for the React Native DevTools Performance and Network features.
* [Moti Zilberman](https://github.com/motiz88) for the React Native DevTools desktop app.
* [Luna Wei](https://github.com/lunaleaps) for Intersection Observers.
* [Rubén Norte](https://github.com/rubennorte) for the Web Performance APIs.
* [Dawid Małecki](https://github.com/coado) and [Jakub Piasecki](https://github.com/j-piasecki) for the rollout of Hermes V1.
* [Ramanpreet Nara](https://github.com/rsnara) for the `RCT_REMOVE_LEGACY_ARCH` flag.
* [Christian Falch](https://github.com/chrfalch) for precompiled iOS binary debugging.

## Upgrade to 0.83[​](#upgrade-to-083 "Direct link to Upgrade to 0.83")

Please use the [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) to view code changes between React Native versions for existing projects, in addition to the [Upgrading docs](/docs/upgrading.md).

To create a new project:

```

npx @react-native-community/cli@latest init MyProject --version latest

```

If you use Expo, React Native 0.83 will be available in SDK 55, which will be released in January 2026.

### Supported versions[​](#supported-versions "Direct link to Supported versions")

0.83 is now the latest stable version of React Native and 0.80.x moves to unsupported. For more information see [React Native's support policy](https://github.com/reactwg/react-native-releases/blob/main/docs/support.md).

**Tags:**

* [announcement](/blog/tags/announcement)
* [release](/blog/tags/release)


---

# React Native 0.84 - Hermes V1 by Default

February 11, 2026 ·



7 min read

![Alex Hunt](https://github.com/huntie.png)

Alex Hunt

Software Engineer @ Meta

[](https://x.com/huntie "X")[](https://github.com/huntie "GitHub")

![Alan Lee](https://github.com/alanleedev.png)

Alan Lee

Software Engineer @ Meta

[](https://github.com/alanleedev "GitHub")

![Christian Falch](https://github.com/chrfalch.png)

Christian Falch

Software Engineer @ Expo

[](https://x.com/chrfalch "X")[](https://github.com/chrfalch "GitHub")

![Gabriel Donadel Dall'Agnol](https://github.com/gabrieldonadel.png)

Gabriel Donadel Dall'Agnol

Software Engineer @ Expo

[](https://x.com/donadeldev "X")[](https://github.com/gabrieldonadel "GitHub")

Today we're excited to release React Native 0.84!

This release makes Hermes V1 the default JavaScript engine, bringing significant performance improvements to all React Native apps. We've also continued removing the Legacy Architecture on both iOS and Android, and are shipping precompiled iOS binaries by default.

### Highlights[​](#highlights "Direct link to Highlights")

* [Hermes V1 as Default](/blog/2026/02/11/react-native-0.84.md#hermes-v1-as-default)
* [Precompiled Binaries on iOS by Default](/blog/2026/02/11/react-native-0.84.md#precompiled-binaries-on-ios-by-default)
* [Legacy Architecture Components Removed](/blog/2026/02/11/react-native-0.84.md#legacy-architecture-components-removed)
* [Node.js 22 Minimum](/blog/2026/02/11/react-native-0.84.md#nodejs-22-minimum)

## Hermes V1 as Default[​](#hermes-v1-as-default "Direct link to Hermes V1 as Default")

**Hermes V1 is now the default JavaScript engine for React Native on both iOS and Android**, following the initial experimental opt-in in React Native 0.82.

Hermes V1 represents the next evolution of the Hermes engine, with significant improvements to both the compiler and VM that deliver measurably better JavaScript performance.

**What This Means for Your App**

* **Automatic performance gains**: All apps will use Hermes V1 by default, bringing improved execution speed and reduced memory usage.
* **No migration required**: If you're already using Hermes (the default since 0.70), you'll automatically get Hermes V1. No configuration changes needed.

**Opting out from Hermes V1**

**Package manager override**

Force the installation of the legacy `hermes-compiler` package in your `package.json`:

* npm
* yarn
* pnpm

package.json

```

"overrides": { "hermes-compiler": "0.15.0" }

```

package.json

```

"resolutions": { "hermes-compiler": "0.15.0" }

```

package.json

```

"pnpm": { "overrides": { "hermes-compiler": "0.15.0" } }

```

**iOS**

When installing CocoaPods dependencies, pass the `RCT_HERMES_V1_ENABLED=0` and `RCT_USE_PREBUILT_RNCORE=0` environment variables.

**Android**

Add `hermesV1Enabled=false` inside the `android/gradle.properties` file, and configure the application to [build React Native from source](/contributing/how-to-build-from-source.md#update-your-project-to-build-from-source).

## Precompiled Binaries on iOS by Default[​](#precompiled-binaries-on-ios-by-default "Direct link to Precompiled Binaries on iOS by Default")

React Native 0.84 now ships precompiled binaries on iOS by default. Previously introduced as an opt-in, precompiled binaries are now enabled out of the box, significantly reducing build times for iOS apps.

This means you no longer need to compile React Native core from source every time you do a clean build. The precompiled `.xcframework` binaries are automatically downloaded and used during `pod install`.

info

If you need to build React Native from source (for example, to opt out of Hermes V1), you can disable precompiled binaries by setting `RCT_USE_PREBUILT_RNCORE=0` when installing pods.

## Legacy Architecture Components Removed[​](#legacy-architecture-components-removed "Direct link to Legacy Architecture Components Removed")

Building on the work started in 0.82 (which made the New Architecture the only runtime option), React Native 0.84 continues removing Legacy Architecture code from both iOS and Android. As described in the [RFC](https://github.com/react-native-community/discussions-and-proposals/pull/929), we're removing several Legacy Architecture classes in each release.

#### iOS[​](#ios "Direct link to iOS")

In 0.83, we introduced the experimental `RCT_REMOVE_LEGACY_ARCH` flag to compile out Legacy Architecture code. In 0.84, this is now the default behaviour — Legacy Architecture code is no longer included in your iOS builds, reducing both build time and app size.

No breakages are expected for apps already on the New Architecture — the Interop Layer code required for compatibility remains in place.

**Re-enabling Legacy Architecture code on iOS**

If you need to re-enable Legacy Architecture code in your iOS builds, you'll need to build from source. Install CocoaPods dependencies with the following flags:

```

RCT\_USE\_PREBUILT\_RNCORE=0 RCT\_REMOVE\_LEGACY\_ARCH=0 bundle exec pod install

```

#### Android[​](#android "Direct link to Android")

**Removed Legacy Architecture classes**

The following classes have been removed in this release:

```

com.facebook.react.LazyReactPackage
com.facebook.react.bridge.CxxModuleWrapper
com.facebook.react.bridge.CxxModuleWrapperBase
com.facebook.react.bridge.CallbackImpl
com.facebook.react.bridge.NotThreadSafeBridgeIdleDebugListener
com.facebook.react.bridge.OnBatchCompleteListener
com.facebook.react.bridge.ReactCxxErrorHandler
com.facebook.react.bridge.ReactInstanceManagerInspectorTarget
com.facebook.react.modules.debug.DidJSUpdateUiDuringFrameDetector
com.facebook.react.devsupport.BridgeDevSupportManager
com.facebook.react.uimanager.NativeKind
com.facebook.react.uimanager.debug.NotThreadSafeViewHierarchyUpdateDebugListener
com.facebook.react.uimanager.layoutanimation.LayoutAnimationController
com.facebook.react.uimanager.layoutanimation.LayoutAnimationListener

```

## Node.js 22 Minimum[​](#nodejs-22-minimum "Direct link to Node.js 22 Minimum")

React Native 0.84 requires **Node.js v22.11 or later**. This bump improves the availability of modern JavaScript features across the ecosystem of React Native tooling.

Make sure to update your Node.js version before upgrading. We recommend using a Node version manager like [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) to manage Node versions.

## Other Changes[​](#other-changes "Direct link to Other Changes")

### React 19.2.3[​](#react-1923 "Direct link to React 19.2.3")

This release syncs React 19.2.3 into React Native, including the latest fixes and improvements from the React team.

### ESLint v9 Flat Config[​](#eslint-v9-flat-config "Direct link to ESLint v9 Flat Config")

React Native's ESLint config now supports [ESLint v9 Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files), making it easier to adopt the latest ESLint tooling in your project.

### Platform Support[​](#platform-support "Direct link to Platform Support")

* **Image formats**: React Native 0.84 includes support for additional image formats (HEIC and HEIF), making it easier to work with modern camera outputs and image libraries.
* **PlatformColor**: Enhanced testing and support for `PlatformColor` in animated interpolations and output ranges.
* **Keyboard events on Android**: Added `onKeyDown`/`onKeyUp` support on Android, enabling keyboard event handling for hardware keyboards and TV remotes.

### Accessibility[​](#accessibility "Direct link to Accessibility")

Text components with `onPress` or `onLongPress` handlers now automatically receive `accessibilityRole="link"` for improved accessibility support, ensuring screen readers properly announce interactive text elements.

On Android, significant work has been done to fix accessibility state issues with recycled views — ensuring that `isClickable` and `OnClickListener` states are properly reset when views are recycled, preventing screen readers from announcing incorrect states.

### URL API Improvements[​](#url-api-improvements "Direct link to URL API Improvements")

Added missing standard properties to `URL` (`hash`, `host`, `pathname`, etc.) and methods to `URLSearchParams` (`get`, `set`, `delete`, etc.), bringing React Native's URL implementation closer to the web standard. Also fixed a `URLSearchParams` duplicate entry issue.

### Other Breaking Changes[​](#other-breaking-changes "Direct link to Other Breaking Changes")

#### iOS[​](#ios-1 "Direct link to iOS")

* Fixed a rare `EXC_BAD_ACCESS` crash in `ImageResponseObserverCoordinator` by wrapping observers in reference-counted pointers. This changes the object declarations in the `RCTImage` observer API, which may affect dependent libraries such as `react-native-svg`.

#### Android[​](#android-1 "Direct link to Android")

* Removed `BridgeDevSupportManager`.

#### C++[​](#c "Direct link to C++")

* `JSBigString` now implements `jsi::Buffer` directly. The `BigStringBuffer` indirection has been removed (deprecated for now). Code directly subclassing or depending on `BigStringBuffer` may need updating.

#### JS[​](#js "Direct link to JS")

* The legacy Perf and Network tabs have been removed from the in-app Element Inspector, as these features are now available in [React Native DevTools](/docs/react-native-devtools.md).

Read the full list of breaking changes in the [CHANGELOG for 0.84](https://github.com/facebook/react-native/blob/main/CHANGELOG.md#v0840).

## Deprecations[​](#deprecations "Direct link to Deprecations")

This release ships two deprecations:

* **Networking:** The `XHRInterceptor` and `WebSocketInterceptor` APIs are deprecated. Developer tools should use the Chrome DevTools Protocol (CDP) `Network` domain instead.
* **TurboModules**: `TurboModuleProviderFunctionType` is deprecated.

## Acknowledgements[​](#acknowledgements "Direct link to Acknowledgements")

React Native 0.84 contains over 650 commits from 95 contributors. Thank you for all your hard work!

We want to send a special thank you to those who shipped significant contributions in this release:

* [Riccardo Cipolleschi](https://github.com/cipolleschi) for precompiled iOS binaries by default and removing the Legacy Architecture on iOS.
* [Rob Hogan](https://github.com/robhogan) for the Node.js 22 version bump.
* [Fabrizio Cucci](https://github.com/fabriziocucci) for accessibility improvements on Android.
* [@pipopotamasu](https://github.com/pipopotamasu) for ESLint v9 Flat Config support.

## Upgrade to 0.84[​](#upgrade-to-084 "Direct link to Upgrade to 0.84")

info

0.84 is now the latest stable version of React Native and 0.81.x moves to unsupported. For more information see [React Native's support policy](https://github.com/reactwg/react-native-releases/blob/main/docs/support.md).

#### Upgrading[​](#upgrading "Direct link to Upgrading")

Please use the [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) to view code changes between React Native versions for existing projects, in addition to the [Upgrading docs](/docs/upgrading.md).

> **💡 New**: Try the experimental [`upgrade-react-native` AI skill for Community CLI Projects](https://skills.sh/react-native-community/skills/upgrade-react-native).

#### Create a new project[​](#create-a-new-project "Direct link to Create a new project")

```

npx @react-native-community/cli@latest init MyProject --version latest

```

#### Expo[​](#expo "Direct link to Expo")

For Expo projects, React Native 0.84 will be available as part of the `expo@canary` releases. The next SDK, SDK 56, will be shipped with the next stable release of React Native: 0.85.

**Tags:**

* [announcement](/blog/tags/announcement)
* [release](/blog/tags/release)


---

# React Native Comes to Meta Quest

February 24, 2026 ·



9 min read

![Łukasz Chludziński](https://github.com/lukasz-app.png)

Łukasz Chludziński

Engineering Manager @ Callstack

[](https://x.com/lukasz_app "X")[](https://github.com/lukasz-app "GitHub")

![Jan Jaworski](https://github.com/jaworek.png)

Jan Jaworski

Software Engineer @ Callstack

[](https://x.com/jaworek3211 "X")[](https://github.com/jaworek "GitHub")

![Markus Leyendecker](https://github.com/mliond.png)

Markus Leyendecker

Product Manager @ Meta

[](https://github.com/mliond "GitHub")

React Native has always focused on helping developers reuse knowledge across platforms. What started with Android and iOS has steadily expanded to Apple TV, Windows, macOS, and even the web with react-strict-dom. In 2021, the [Many Platform Vision post](/blog/2021/08/26/many-platform-vision) outlined a future where React Native could adapt to new devices and form factors without fragmenting the ecosystem.

At React Conf 2025, we took another step toward that vision by [announcing official React Native support for Meta Quest devices](https://youtu.be/NiYwlvXsBKw?si=IGl4MiF6QtywVFGL\&t=1075). This post focuses on how to get started with React Native on Meta Quest, what works today, and how developers can build and ship VR apps using familiar tools and patterns.

## Highlights[​](#highlights "Direct link to Highlights")

* [React Native on Meta Quest](#react-native-on-meta-quest)
* [Getting started on Meta Quest](#getting-started-on-meta-quest)
* [Development builds and native features](#development-builds-and-native-features)
* [Platform-specific setup and differences from mobile](#platform-specific-setup-and-differences-from-mobile)
* [Design and UX considerations for VR](#design-and-ux-considerations-for-vr)

## React Native on Meta Quest[​](#react-native-on-meta-quest "Direct link to React Native on Meta Quest")

![React Native app running on Meta Quest headset](/blog/assets/meta-quest-react-native.jpg)

React Native apps running on Meta Quest.

Meta Quest devices run Meta Horizon OS, an Android-based operating system. From a React Native perspective, this means all of the existing Android tooling, build systems, and debugging workflows work with minimal changes. For developers already building React Native apps on Android, much of existing development model carries over.

This aligns with how React Native has expanded to other Android-based environments over time. Rather than introducing a new runtime or development model, Meta Quest builds on the same Android foundation and integrates with React Native's existing abstractions. This allows platform-specific capabilities to be added without fragmenting the framework or requiring a separate approach to development.

## Getting started on Meta Quest[​](#getting-started-on-meta-quest "Direct link to Getting started on Meta Quest")

This section walks through the basic development workflow on Meta Quest, starting with Expo Go and moving toward development builds and platform-specific configuration.

### Step-by-step: Run an Expo app on Meta Quest[​](#step-by-step-run-an-expo-app-on-meta-quest "Direct link to Step-by-step: Run an Expo app on Meta Quest")

To run an Expo app on Meta Quest, start a standard Expo project, launch the dev server, and open the app through Expo Go on the headset. Beyond a few Meta Horizon OS-specific requirements, the workflow is the same as on Android.

1. **Install Expo Go on the headset**

   [Expo Go is available on the Meta Horizon Store](https://www.meta.com/en-gb/experiences/expo-go/25322546364000780/) and can be installed directly on Meta Quest devices. It is used for rapid iteration during development.

2. **Create (or use) an Expo project**

   If you're starting fresh, create a standard Expo app. No special template is required.

```

npx create-expo-app@latest my-quest-app
cd my-quest-app

```

3. **Start the dev server**

```

npx expo start

```

4. **Connect with Quest using Expo Go**

Open Expo Go on the headset and scan the QR code displayed by the Expo CLI with the headset camera. The application launches in a new window on the device, allowing live reloading and fast iteration.

5. **Iterate as usual**

Code changes are reflected immediately on the device, following the same edit-refresh cycle used on Android and iOS.

## Development builds and native features[​](#development-builds-and-native-features "Direct link to Development builds and native features")

Expo Go is sufficient for early development and UI work. When access to native modules or deeper platform integration is required, development builds are used instead. These builds follow the standard Expo development build workflow and run directly on the Quest device.

## Platform-specific setup and differences from mobile[​](#platform-specific-setup-and-differences-from-mobile "Direct link to Platform-specific setup and differences from mobile")

While the overall workflow remains the same, Meta Quest requires a small set of platform-specific adjustments.

### Project configuration for Meta Horizon OS[​](#project-configuration-for-meta-horizon-os "Direct link to Project configuration for Meta Horizon OS")

Meta Quest applications must meet specific requirements to run correctly and to be eligible for store submission. These include platform-specific Android configuration, product flavors, and application metadata.

Expo provides a plugin for Meta Horizon OS that applies these requirements at build time. Using this plugin ensures the project configuration aligns with Meta Quest expectations without manual modification of native files.

Install `expo-horizon-core` and add it to `app.json` or `app.config.js`:

```

{
"expo": {
"plugins": \[
\[
"expo-horizon-core",
{
"horizonAppId": "your-horizon-app-id",
"defaultHeight": "640dp",
"defaultWidth": "1024dp",
"supportedDevices": "quest2|quest3|quest3s",
"disableVrHeadtracking": false,
"allowBackup": false
}
]
]
}
}

```

Also, change the orientation value:

```

{
...
"orientation": "default",
...
}

```

Update `package.json` with Quest-specific scripts:

```

{
"scripts": {
"android": "expo run:android --variant mobileDebug",
"quest": "expo run:android --variant questDebug",
"android:release": "expo run:android --variant mobileRelease",
"quest:release": "expo run:android --variant questRelease"
}
}

```

### Using React Native without Expo[​](#using-react-native-without-expo "Direct link to Using React Native without Expo")

Expo provides the easiest way to get started with React Native on Meta Quest. If you prefer to build without a framework, you can also apply the required Meta Horizon OS configuration directly in your Android project.

At a minimum, this includes:

* Creating a Meta Quest-specific build flavor in `android/app/build.gradle`
* Setting the `horizonAppId`
* Defining a default panel size in the Android manifest
* Declaring supported devices (for example: `quest2|quest3|quest3s`)
* Removing prohibited permissions
* Adjusting the minimum supported Android SDK version
* Adding runtime checks such as `isHorizonDevice()` and `isHorizonBuild()`

To understand the full set of changes, you can inspect the `expo-horizon-core` plugin implementation and replicate the same configuration manually.

### Android without Google Play Services[​](#android-without-google-play-services "Direct link to Android without Google Play Services")

Meta Horizon OS is built on Android Open Source Project (AOSP), which provides the core Android platform without Google's proprietary services. From a development perspective, this means applications run on standard Android APIs but do not have access to Google Mobile Services such as Play Services or Play Store–specific integrations.

When targeting Meta Quest, applications should be designed to avoid direct dependencies on Google services or to provide platform-specific alternatives where needed.

A list of unsupported dependencies is available in the [Meta Horizon OS documentation](https://developers.meta.com/horizon/documentation/android-apps/unsupported-dependencies).

### Permissions and device capabilities[​](#permissions-and-device-capabilities "Direct link to Permissions and device capabilities")

Some Android permissions and hardware assumptions common on mobile devices do not apply to VR headsets. Cellular features (e.g. SMS), certain sensors (like GPS), and [restricted permissions](https://developers.meta.com/horizon/documentation/android-apps/unsupported-permissions/) are either unavailable or prohibited. Projects must explicitly account for these differences during setup.

### Evaluating library compatibility[​](#evaluating-library-compatibility "Direct link to Evaluating library compatibility")

Most React Native libraries work on Meta Quest, but compatibility depends on the assumptions a library makes about the underlying platform. In particular, libraries may rely on mobile-only hardware, touch input, or [services that are not available on Horizon OS](https://developers.meta.com/horizon/documentation/android-apps/unsupported-dependencies).

As a general guideline:

* Libraries that are self-contained and rely only on standard React Native and Android APIs typically work without changes.
* Libraries that assume touch-only input, mobile-only hardware, or Google Mobile Services require adaptation or conditional usage.
* Libraries that depend on restricted permissions or unavailable device capabilities are not supported.

For some common use cases, such as [location](https://github.com/software-mansion-labs/expo-horizon/blob/main/expo-horizon-location/README.md) and [notifications](https://github.com/software-mansion-labs/expo-horizon/blob/main/expo-horizon-notifications/README.md), Expo provides drop-in replacements for Meta Horizon OS. Other libraries may work as-is or require platform-specific handling depending on their dependencies.

### Platform-aware code paths[​](#platform-aware-code-paths "Direct link to Platform-aware code paths")

Applications targeting both Meta Quest and other platforms should guard platform-specific behavior. Meta Horizon OS provides runtime utilities to detect whether the app is running on a Quest device, allowing unsupported features to be disabled or replaced when necessary.

```

import ExpoHorizon from 'expo-horizon-core';

// Check if running on a Horizon device
if (ExpoHorizon.isHorizonDevice) {
console.log('Running on Meta Horizon OS!');
}

// Check if this is a Horizon build
if (ExpoHorizon.isHorizonBuild) {
console.log('This is a Horizon build variant');
}

// Access the Horizon App ID
const appId = ExpoHorizon.horizonAppId;
console.log('Horizon App ID:', appId ?? 'Not configured');

```

## Design and UX considerations for VR[​](#design-and-ux-considerations-for-vr "Direct link to Design and UX considerations for VR")

Designing for a head-mounted display introduces constraints that differ from touch-based mobile devices. Interfaces are viewed at a distance, rendered in space, and interacted with using a wider range of input methods.

UI elements generally require larger hit targets, increased spacing, and typography that remains readable across varying distances. These challenges are similar to those encountered on desktop, tablets, and foldable devices, where applications run in resizable windows and layouts must adapt dynamically.

One of the main differences between Meta Quest and Android mobile is input. Instead of relying primarily on touch, Meta Quest applications are commonly controlled through controllers, hand tracking, and optionally mouse and keyboard. Controllers behave more like a pointer device, which introduces interaction patterns that are closer to web and desktop UIs, including hover and focus-based navigation.

React Native's event system and component model can support these interaction patterns, but applications should avoid touch-only assumptions and ensure that UI elements provide clear focus states and predictable navigation when controlled through pointing devices.

Together, these considerations favor responsive layouts and input-agnostic interactions. React Native's layout system and component model provide a solid foundation for building comfortable and usable VR interfaces.

note

For more details, check out the [official design guidelines](https://developers.meta.com/horizon/documentation/android-apps/design-requirements).

## Examples and references[​](#examples-and-references "Direct link to Examples and references")

### Reference project[​](#reference-project "Direct link to Reference project")

* [Reference project with all the setup used in this article](https://github.com/callstackincubator/expo-meta-horizon-os-demo)
* [Callstack Meta Horizon OS showcase app from React Conf](https://github.com/callstack/react-native-horizonos-example)

## Learn more[​](#learn-more "Direct link to Learn more")

* [Official Meta Quest documentation](https://oss.callstack.com/react-native-meta-horizon-os/)
* [React Native Developer's Guide to Meta Horizon OS (ebook)](https://www.callstack.com/ebooks/react-native-developers-guide-to-meta-horizon-os)
* [How to Add Meta Quest Support to Your Expo Development Builds (article)](https://blog.swmansion.com/how-to-add-meta-quest-support-to-your-expo-app-68c52778b1fe)
* [Bringing React Native to VR on Meta Quest (podcast)](https://www.callstack.com/podcasts/bringing-react-native-to-vr-on-meta-quest)
* [React Native on Meta Quest: What We Learned About Building for VR (live stream)](https://www.youtube.com/watch?v=r-QL2EuqbdA)
* [Getting started with Meta Horizon Development using Expo](https://www.youtube.com/watch?v=24G2tui0Ts8)
* [Feedback channel for platform evolution](https://developers.meta.com/horizon/documentation/android-apps/bugs-requests)

## Acknowledgements[​](#acknowledgements "Direct link to Acknowledgements")

Bringing React Native to new platforms takes more than code. We're grateful to everyone who contributed their time, feedback, and support along the way.

**Tags:**

* [announcement](/blog/tags/announcement)


---

[Skip to main content](#__docusaurus_skipToContent_fallback)

Re-watch the latest [React Native Keynote](https://www.youtube.com/watch?v=NiYwlvXsBKw) from React Conf 2025

[![](/img/header_logo.svg)![](/img/header_logo.svg)](/index.md)

[**React Native**](/index.md)

[Development](#)

* [Guides](/docs/getting-started.md)
* [Components](/docs/components-and-apis.md)
* [APIs](/docs/accessibilityinfo.md)
* [Architecture](/architecture/overview.md)

[Contributing](/contributing/overview.md)[Community](/community/overview.md)[Showcase](/showcase.md)[Blog](/blog.md)[](https://github.com/facebook/react-native)

Search

# Who is using React Native?

Thousands of apps are using React Native, from established Fortune 500 companies to hot new startups. If you are curious to see what can be accomplished with React Native, check out these apps!

## ![Meta logo](/img/showcase/meta_positive_primary.svg)![Meta logo](/img/showcase/meta_negative_primary.svg)

React Native is shaping mobile, web, and desktop experiences within Meta’s product ecosystem, from Facebook Marketplace, Messenger Desktop, Ads Manager to the Meta Quest app and many more.

![Facebook](/img/showcase/facebook.webp)![Facebook](/img/showcase/facebook.webp)

### Facebook

[iOS](https://apps.apple.com/app/facebook/id284882215) • [Android](https://play.google.com/store/apps/details?id=com.facebook.katana) • [Meta Quest](https://www.meta.com/experiences/facebook/7495711360547796/)

![Instagram](/img/showcase/instagram.png)![Instagram](/img/showcase/instagram.png)

### Instagram

[Meta Quest](https://www.meta.com/experiences/instagram/6894135610696226/)

![Facebook Ads Manager](/img/showcase/adsmanager.png)![Facebook Ads Manager](/img/showcase/adsmanager.png)

### Facebook Ads Manager

[iOS](https://apps.apple.com/us/app/facebook-ads-manager/id964397083) • [Android](https://play.google.com/store/apps/details?id=com.facebook.adsmanager)

![Meta Horizon](/img/showcase/metahorizon.webp)![Meta Horizon](/img/showcase/metahorizon.webp)

### Meta Horizon

[iOS](https://apps.apple.com/us/app/oculus/id1366478176) • [Android](https://play.google.com/store/apps/details?id=com.oculus.twilight\&hl=en_US)

![Messenger Desktop](/img/showcase/messengerdesktop.png)![Messenger Desktop](/img/showcase/messengerdesktop.png)

### Messenger Desktop

[Desktop](https://www.messenger.com/desktop)

## ![Microsoft logo](/img/showcase/microsoft-logo-gray.png)![Microsoft logo](/img/showcase/microsoft-logo-white.png)

Microsoft leverages the power of React Native to deliver excellent customer experiences in some of its most well known apps.Microsoft doesn't stop at mobile platforms either -- Microsoft leverages React Native to target desktop too! Find out more in the [dedicated showcase](https://microsoft.github.io/react-native-windows/resources-showcase) for React Native Windows and macOS.

![Microsoft Office](/img/showcase/officemobile.png)![Microsoft Office](/img/showcase/officemobile.png)

### Microsoft Office

[iOS](https://apps.apple.com/gb/app/microsoft-office/id541164041) • [Android](https://play.google.com/store/apps/details?id=com.microsoft.office.officehubrow)

![Microsoft Outlook](/img/showcase/outlookmobile.png)![Microsoft Outlook](/img/showcase/outlookmobile.png)

### Microsoft Outlook

[iOS](https://apps.apple.com/us/app/microsoft-outlook/id951937596) • [Android](https://play.google.com/store/apps/details?id=com.microsoft.office.outlook)

![Microsoft Teams](/img/showcase/teamsmobile.png)![Microsoft Teams](/img/showcase/teamsmobile.png)

### Microsoft Teams

[iOS](https://apps.apple.com/gb/app/microsoft-teams/id1113153706) • [Android](https://play.google.com/store/apps/details?id=com.microsoft.teams)

![Xbox Game Pass](/img/showcase/xboxgamepass.png)![Xbox Game Pass](/img/showcase/xboxgamepass.png)

### Xbox Game Pass

[iOS](https://apps.apple.com/gb/app/xbox-game-pass/id1374542474) • [Android](https://play.google.com/store/apps/details?id=com.gamepass)

## ![Amazon logo](/img/showcase/amazon_logo_lightbg.png)![Amazon logo](/img/showcase/amazon_logo_darkbg.png)

Amazon has used React Native to rapidly deliver new customer-facing features in some of its most popular mobile applications as early as 2016. Amazon also uses React Native to support customer-favorite devices such as the Kindle E-readers.

![Amazon Shopping](/img/showcase/amazon-shopping.png)![Amazon Shopping](/img/showcase/amazon-shopping.png)

### Amazon Shopping

[iOS](https://apps.apple.com/us/app/amazon-shopping/id297606951) • [Android](https://play.google.com/store/apps/details?id=com.amazon.mShop.android.shopping)

![Amazon Alexa](/img/showcase/amazon-alexa.webp)![Amazon Alexa](/img/showcase/amazon-alexa.webp)

### Amazon Alexa

[iOS](https://apps.apple.com/us/app/amazon-alexa/id944011620) • [Android](https://play.google.com/store/apps/details?id=com.amazon.dee.app\&hl=en_US\&gl=US)

![Amazon Photos](/img/showcase/amazon-photos.webp)![Amazon Photos](/img/showcase/amazon-photos.webp)

### Amazon Photos

[iOS](https://apps.apple.com/us/app/amazon-photos-photo-video/id621574163) • [Android](<https://play.google.com/store/apps/details?id=com.amazon.clouddrive.photos\&hl=en_US\&gl=US >)

![Amazon Kindle](/img/showcase/amazon-kindle.png)![Amazon Kindle](/img/showcase/amazon-kindle.png)

### Amazon Kindle

[Learn more](https://www.amazon.com/b/?node=6669702011 "Purpose-built for reading, Kindle e-readers let you take your stories wherever you go")



[ ](https://www.amazon.com/b/?node=6669702011 "Purpose-built for reading, Kindle e-readers let you take your stories wherever you go")

## ![Shopify logo](/img/showcase/shopify_logo_whitebg.svg)![Shopify logo](/img/showcase/shopify_logo_darkbg.svg)

All mobile apps at Shopify are built using React Native. You can read more about React Native development at Shopify on our [blog](https://shopify.engineering/topics/mobile).

![Shopify](/img/showcase/shopify.png)![Shopify](/img/showcase/shopify.png)

### Shopify

[iOS](https://apps.apple.com/us/app/shopify-your-ecommerce-store/id371294472) • [Android](https://play.google.com/store/apps/details?id=com.shopify.mobile\&hl=en_US\&gl=US)

![Shop: All your favorite brands](/img/showcase/shop.webp)![Shop: All your favorite brands](/img/showcase/shop.webp)

### Shop: All your favorite brands

[iOS](https://apps.apple.com/ca/app/shop-package-order-tracker/id1223471316) • [Android](https://play.google.com/store/apps/details?id=com.shopify.arrive\&hl=en_US\&gl=US)

![Shopify Inbox](/img/showcase/shopify-inbox.webp)![Shopify Inbox](/img/showcase/shopify-inbox.webp)

### Shopify Inbox

[iOS](https://apps.apple.com/us/app/shopify-inbox/id1301681854) • [Android](https://play.google.com/store/apps/details?id=com.shopify.ping\&gl=US)

![Shopify Point of Sale](/img/showcase/pos.webp)![Shopify Point of Sale](/img/showcase/pos.webp)

### Shopify Point of Sale

[iOS](https://apps.apple.com/us/app/shopify-point-of-sale-pos/id686830644) • [Android](https://play.google.com/store/apps/details?id=com.shopify.pos\&gl=US)

## ![Wix logo](/img/showcase/wix_logo_lightbg.svg)![Wix logo](/img/showcase/wix_logo_darkbg.svg)

With one of the largest React Native code bases in the world, Wix has a long history with the development community and maintains a variety of open source projects. Wix is an early adopter of React Native and uses it for its entire suite of applications.

![Spaces: Follow Businesses](/img/showcase/spaces.webp)![Spaces: Follow Businesses](/img/showcase/spaces.webp)

### Spaces: Follow Businesses

[iOS](https://itunes.apple.com/us/app/wix-com/id1099748482) • [Android](https://play.google.com/store/apps/details?id=com.wix.android)

![Dine by Wix](/img/showcase/dine.webp)![Dine by Wix](/img/showcase/dine.webp)

### Dine by Wix

[iOS](https://apps.apple.com/us/app/dine-by-wix/id1561524113) • [Android](https://play.google.com/store/apps/details?id=com.wix.restaurants)

![Fit by Wix](/img/showcase/fit.webp)![Fit by Wix](/img/showcase/fit.webp)

### Fit by Wix

[iOS](https://apps.apple.com/us/developer/wix-com-inc/id407141669) • [Android](https://play.google.com/store/apps/details?id=com.wix.fitness)

![Wix Owner - Website Builder](/img/showcase/owner.webp)![Wix Owner - Website Builder](/img/showcase/owner.webp)

### Wix Owner - Website Builder

[iOS](https://apps.apple.com/us/app/wix-owner-website-builder/id1545924344) • [Android](https://play.google.com/store/apps/details?id=com.wix.admin)

## Users Showcase

[Apply to the Showcase by filling out this form](https://forms.gle/BdNf3v5hemV9D5c86)

For a curated list of open source React Native apps, check out [this list](https://github.com/ReactNativeNews/React-Native-Apps) maintained by [Infinite Red](https://infinite.red).

Develop

* [Guides](/docs/getting-started.md)
* [Components](/docs/components-and-apis.md)
* [APIs](/docs/accessibilityinfo.md)
* [Architecture](/architecture/overview.md)

Participate

* [Showcase](/showcase.md)
* [Contributing](/contributing/overview.md)
* [Community](/community/overview.md)
* [Directory](https://reactnative.directory/)
* [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)

Find us

* [Blog](/blog.md)
* [X](https://x.com/reactnative)
* [Bluesky](https://bsky.app/profile/reactnative.dev)
* [GitHub](https://github.com/facebook/react-native)

Explore More

* [ReactJS](https://react.dev/)
* [Privacy Policy](https://opensource.fb.com/legal/privacy/)
* [Terms of Service](https://opensource.fb.com/legal/terms/)

[![Meta Open Source Logo](/img/oss_logo.svg)![Meta Open Source Logo](/img/oss_logo.svg)](https://opensource.fb.com/)

Copyright © 2026 Meta Platforms, Inc.


---

[Skip to main content](#__docusaurus_skipToContent_fallback)

Re-watch the latest [React Native Keynote](https://www.youtube.com/watch?v=NiYwlvXsBKw) from React Conf 2025

[![](/img/header_logo.svg)![](/img/header_logo.svg)](/index.md)

[**React Native**](/index.md)

[Development](#)

* [Guides](/docs/getting-started.md)
* [Components](/docs/components-and-apis.md)
* [APIs](/docs/accessibilityinfo.md)
* [Architecture](/architecture/overview.md)

[Contributing](/contributing/overview.md)[Community](/community/overview.md)[Showcase](/showcase.md)[Blog](/blog.md)[](https://github.com/facebook/react-native)

Search

# React Native versions

Open source React Native releases follow a release train that is coordinated on GitHub through the [`react-native-releases`](https://github.com/reactwg/react-native-releases/discussions) repository. New releases are created off the `main` branch of [`facebook/react-native`](https://github.com/facebook/react-native). They will follow a Release Candidate process to allow contributors like yourself to [verify the changes](/docs/upgrading.md) and to identify any issues by [writing clear, actionable bug reports](https://github.com/facebook/react-native/issues). Eventually, the release candidate will be promoted to stable.

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

You can read more details about release schedule and the meaning of statuses on the [Releases Overview](/releases.md) page.

## Next version (Unreleased)

| main | [Documentation](/docs/next/getting-started) | [Commits since 0.84](https://github.com/facebook/react-native/compare/0.84-stable...main) |
| ---- | ------------------------------------------- | ----------------------------------------------------------------------------------------- |

note

To see what changes are coming and provide better feedback to React Native contributors, use the latest release candidate when possible. Changes introduced in a release candidate will have been shipped to production Facebook apps for over two weeks by the time the release candidate is cut.

## Latest version

The most recent stable version will be used automatically whenever a new project is created using the `npx react-native init` command.

| 0.84 | [Documentation](/docs/getting-started.md) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.84.0) |
| ---- | ----------------------------------------- | -------------------------------------------------------------------------- |

## Previous versions

| 0.83 | [Documentation](/docs/0.83/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.83.0) |
| ---- | ------------------------------------------- | -------------------------------------------------------------------------- |
| 0.82 | [Documentation](/docs/0.82/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.82.0) |
| 0.81 | [Documentation](/docs/0.81/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.81.0) |
| 0.80 | [Documentation](/docs/0.80/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.80.0) |
| 0.79 | [Documentation](/docs/0.79/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.79.0) |
| 0.78 | [Documentation](/docs/0.78/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.78.0) |
| 0.77 | [Documentation](/docs/0.77/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.77.0) |

### Archived versions

The documentation for unmaintained versions can be found on website archive snapshots, hosted as separate sites.

| 0.76 | [Documentation](https://reactnative-archive-august-2025.netlify.app/docs/0.76/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.76.0) |
| ---- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 0.75 | [Documentation](https://reactnative-archive-august-2025.netlify.app/docs/0.75/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.75.0) |
| 0.74 | [Documentation](https://reactnative-archive-august-2025.netlify.app/docs/0.74/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.74.0) |
| 0.73 | [Documentation](https://reactnative-archive-august-2025.netlify.app/docs/0.73/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.73.0) |
| 0.72 | [Documentation](https://reactnative-archive-august-2023.netlify.app/docs/0.72/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.72.0) |
| 0.71 | [Documentation](https://reactnative-archive-august-2023.netlify.app/docs/0.71/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.71.0) |
| 0.70 | [Documentation](https://reactnative-archive-august-2023.netlify.app/docs/0.70/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.70.0) |
| 0.69 | [Documentation](https://reactnative-archive-august-2023.netlify.app/docs/0.69/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.69.0) |
| 0.68 | [Documentation](https://reactnative-archive-august-2023.netlify.app/docs/0.68/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.68.0) |
| 0.67 | [Documentation](https://reactnative-archive-august-2023.netlify.app/docs/0.67/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.67.0) |
| 0.66 | [Documentation](https://reactnative-archive-august-2023.netlify.app/docs/0.66/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.66.0) |
| 0.65 | [Documentation](https://reactnative-archive-august-2023.netlify.app/docs/0.65/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.65.0) |
| 0.64 | [Documentation](https://reactnative-archive-august-2023.netlify.app/docs/0.64/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.64.0) |
| 0.63 | [Documentation](https://reactnative-archive-august-2023.netlify.app/docs/0.63/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.63.0) |
| 0.62 | [Documentation](https://reactnative-archive-august-2023.netlify.app/docs/0.62/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.62.0) |
| 0.61 | [Documentation](https://reactnative-archive-august-2023.netlify.app/docs/0.61/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.61.0) |
| 0.60 | [Documentation](https://reactnative-archive-august-2023.netlify.app/docs/0.60/getting-started) | [Changelog](https://github.com/facebook/react-native/releases/tag/v0.60.0) |

The documentation for versions below `0.60` can be found on the separate website called [React Native Archive](https://archive.reactnative.dev/versions).

Develop

* [Guides](/docs/getting-started.md)
* [Components](/docs/components-and-apis.md)
* [APIs](/docs/accessibilityinfo.md)
* [Architecture](/architecture/overview.md)

Participate

* [Showcase](/showcase.md)
* [Contributing](/contributing/overview.md)
* [Community](/community/overview.md)
* [Directory](https://reactnative.directory/)
* [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)

Find us

* [Blog](/blog.md)
* [X](https://x.com/reactnative)
* [Bluesky](https://bsky.app/profile/reactnative.dev)
* [GitHub](https://github.com/facebook/react-native)

Explore More

* [ReactJS](https://react.dev/)
* [Privacy Policy](https://opensource.fb.com/legal/privacy/)
* [Terms of Service](https://opensource.fb.com/legal/terms/)

[![Meta Open Source Logo](/img/oss_logo.svg)![Meta Open Source Logo](/img/oss_logo.svg)](https://opensource.fb.com/)

Copyright © 2026 Meta Platforms, Inc.


---

# Bundled Hermes

This page gives an overview of **how** Hermes and React Native **are built**.

If you're looking into instructions on how to use Hermes in your app, you can find instructions on this other page: [using Hermes](/docs/hermes.md)

caution

Please note that this page serves as a technical deep dive and is targeted for users which are building extensions on top of Hermes or React Native. General users of React Native should not need to know in-depth information on how React Native and Hermes interact.

## What is 'Bundled Hermes'[​](#what-is-bundled-hermes "Direct link to What is 'Bundled Hermes'")

Starting with React Native 0.69.0, every version of React Native will be **built alongside** to a Hermes version. We call this distribution model **Bundled Hermes**.

From 0.69 on, you will always have a JS engine that has been built and tested alongside each React Native version that you can use.

## Why we moved to 'Bundled Hermes'[​](#why-we-moved-to-bundled-hermes "Direct link to Why we moved to 'Bundled Hermes'")

Historically, React Native and Hermes followed two **distinct release processes** with distinct versioning. Having distinct releases with distinct numbers created confusion in the OSS ecosystem, where it was not clear if a specific version of Hermes was compatible with a specific version of React Native (i.e. you needed to know that Hermes 0.11.0 was compatible only with React Native 0.68.0, etc.)

Both Hermes and React Native, share the JSI code ([Hermes here](https://github.com/facebook/hermes/tree/main/API/jsi/jsi) and [React Native here](https://github.com/facebook/react-native/tree/main/packages/react-native/ReactCommon/jsi/jsi)). If the two JSI copies of JSI get out of sync, a build of Hermes won't be compatible with a build of React Native. You can read more about this [ABI incompatibility problem here](https://github.com/react-native-community/discussions-and-proposals/issues/257).

To overcome this problem, we've extended the React Native release process to download and build Hermes and made sure only one copy of JSI is used when building Hermes.

Thanks to this, we can release a version of Hermes whenever we release a version of React Native, and be sure that the Hermes engine we built is **fully compatible** with the React Native version we're releasing. We're shipping this version of Hermes alongside the React Native version we're doing, hence the name *Bundled Hermes*.

## How this will impact app developers[​](#how-this-will-impact-app-developers "Direct link to How this will impact app developers")

As mentioned in the introduction, if you're an app developer, this change **should not affect** you directly.

The following paragraphs describe which changes we did under the hood and explains some of the rationales, for the sake of transparency.

### iOS Users[​](#ios-users "Direct link to iOS Users")

On iOS, we've moved the `hermes-engine` you're using.

Prior to React Native 0.69, users would download a pod (here you can find the [podspec](https://github.com/CocoaPods/Specs/blob/master/Specs/5/d/0/hermes-engine/0.11.0/hermes-engine.podspec.json)).

On React Native 0.69, users would instead use a podspec that is defined inside the `sdks/hermes-engine/hermes-engine.podspec` file in the `react-native` NPM package. That podspec relies on a pre-built tarball of Hermes that we upload to Maven and to the React Native GitHub Release, as part of the React Native release process (i.e. [see the assets of this release](https://github.com/facebook/react-native/releases/tag/v0.70.4)).

### Android Users[​](#android-users "Direct link to Android Users")

On Android, we're going to update the [`android/app/build.gradle`](https://github.com/facebook/react-native/blob/main/template/android/app/build.gradle) file in the default template the following way:

diff

```

dependencies {
// ...

```
if (enableHermes) {
```

- ```
    implementation("com.facebook.react:hermes-engine:+") {
  ```
- ```
        exclude group:'com.facebook.fbjni'
  ```
- ```
    }
  ```

* ```
    def hermesPath = "../../node_modules/hermes-engine/android/";
  ```
* ```
    debugImplementation files(hermesPath + "hermes-debug.aar")
  ```
* ```
    releaseImplementation files(hermesPath + "hermes-release.aar")
  ```
  } else {
  implementation jscFlavor
  }
  }

```

Prior to React Native 0.69, users will be consuming `hermes-debug.aar` and `hermes-release.aar` from the `hermes-engine` NPM package.

On React Native 0.69, users will be consuming the Android multi-variant artifacts available inside the `android/com/facebook/react/hermes-engine/` folder in the `react-native` NPM package. Please also note that we're going to [remove the dependency](https://github.com/facebook/react-native/blob/c418bf4c8fe8bf97273e3a64211eaa38d836e0a0/package.json#L105) on `hermes-engine` entirely in one of the future version of React Native.

#### Android Users on New Architecture[​](#android-users-on-new-architecture "Direct link to Android Users on New Architecture")

Due to the nature of our native code build setup (i.e. how we use the NDK), users on the New Architecture will be **building Hermes from source**.

This aligns the build mechanism of React Native and Hermes for users on the New Architecture (they will build both framework from source). This means that such Android users might experience a performance hit at build time on their first build.

You can find instructions to optimize your build time and reduce the impact on your build on this page: [Speeding up your Build phase](/docs/next/build-speed).

#### Android Users on New Architecture building on Windows[​](#android-users-on-new-architecture-building-on-windows "Direct link to Android Users on New Architecture building on Windows")

Users building React Native App, with the New Architecture, on Windows machines need to follow those extra steps to let the build work correctly:

* Make sure the [environment is configured properly](https://reactnative.dev/docs/environment-setup), with Android SDK & node.

* Install [cmake](https://community.chocolatey.org/packages/cmake) with Chocolatey

* Install either:

  

  * [Build Tools for Visual Studio 2022](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022).
  * [Visual Studio 22 Community Edition](https://visualstudio.microsoft.com/vs/community/) - Picking only the C++ desktop development is sufficient.

* Make sure the [Visual Studio Command Prompt](https://docs.microsoft.com/en-us/visualstudio/ide/reference/command-prompt-powershell?view=vs-2022) is configured correctly. This is required as the proper C++ compiler environment variable is configured in those command prompt.

* Run the app with `npx react-native run-android` inside a Visual Studio Command Prompt.

### Can users still use another engine?[​](#can-users-still-use-another-engine "Direct link to Can users still use another engine?")

Yes, users are free to enable/disable Hermes (with the `enableHermes` variable on Android, `hermes_enabled` on iOS). The 'Bundled Hermes' change will impact only **how Hermes is built and bundled** for you.

Starting with React Native 0.70, the default for `enableHermes`/`hermes_enabled` is `true`.

## How this will impact contributor and extension developers[​](#how-this-will-impact-contributor-and-extension-developers "Direct link to How this will impact contributor and extension developers")

If you're a React Native contributor or you're building an extension on top of React Native or Hermes, please read further as we explain how Bundled Hermes works.

### How is Bundled Hermes working under the hood?[​](#how-is-bundled-hermes-working-under-the-hood "Direct link to How is Bundled Hermes working under the hood?")

This mechanism relies on **downloading a tarball** with the Hermes source code from the `facebook/hermes` repository inside the `facebook/react-native` repository. We have a similar mechanism in place for other native dependencies (Folly, Glog, etc.) and we aligned Hermes to follow the same setup.

When building React Native from `main`, we will be fetching a tarball of `main` of facebook/hermes and building it as part of the build process of React Native.

When building React Native from a release branch (say `0.69-stable`), we will instead use a **tag** on the Hermes repo to **synchronize the code** between the two repos. The specific tag name used will then be stored inside the `sdks/.hermesversion` file inside React Native in the release branch (e.g. [this is the file](https://github.com/facebook/react-native/blob/0.69-stable/sdks/.hermesversion) on the 0.69 release branch).

In a sense, you can think of this approach similarly to a **git submodule**.

If you're building on top of Hermes, you can rely on those tags to understand which version of Hermes was used when building React Native, as the version of React Native is specified in the tag name (e.g. `hermes-2022-05-20-RNv0.69.0-ee8941b8874132b8f83e4486b63ed5c19fc3f111`).

#### Android implementation details[​](#android-implementation-details "Direct link to Android implementation details")

To implement this on Android, we've added a new build inside the `/ReactAndroid/hermes-engine` of React Native that will take care of building Hermes and packaging for consumption ([See here for more context](https://github.com/facebook/react-native/pull/33396)).

You can now trigger a build of Hermes engine by invoking:

bash

```

// Build a debug version of Hermes
./gradlew :ReactAndroid:hermes-engine:assembleDebug
// Build a release version of Hermes
./gradlew :ReactAndroid:hermes-engine:assembleRelease

```

from the React Native `main` branch.

You won't need to install extra tools (such as `cmake`, `ninja` or `python3`) in your machine as we configured the build to use the NDK versions of those tools.

On the Gradle consumer side, we also shipped a small improvement on the consumer side: we moved from `releaseImplementation` & `debugImplementation` to `implementation`. This is possible because the newer `hermes-engine` Android artifact is **variant aware** and will properly match a debug build of the engine with a debug build of your app. You don't need any custom configuration here (even if you use `staging` or other build types/flavors).

However, this made this line necessary in the template:

```

exclude group:'com.facebook.fbjni'

```

This is needed as React Native is consuming `fbjni` using the non-prefab approach (i.e. unzipping the `.aar` and extracting `.so` files). Hermes-engine, and other libraries, are using prefab instead to consume fbjni. We're looking into [addressing this issue](https://github.com/facebook/react-native/pull/33397) in the future so the Hermes import will be a oneliner.

#### iOS implementation details[​](#ios-implementation-details "Direct link to iOS implementation details")

The iOS implementation relies on a series of scripts that lives in the following locations:

* [`/scripts/hermes`](https://github.com/facebook/react-native/tree/main/scripts/hermes). Those scripts contain logic to download the Hermes tarball, unzip it, and configure the iOS build. They're invoked at `pod install` time if you have the `hermes_enabled` field set to `true`.
* [`/sdks/hermes-engine`](https://github.com/facebook/react-native/tree/main/sdks/hermes-engine). Those scripts contain the build logic that is effectively building Hermes. They were copied and adapted from the `facebook/hermes` repo to properly work within React Native. Specifically, the scripts inside the `utils` folder are responsible of building Hermes for all the Mac platforms.

Hermes is built as part of the `build_hermes_macos` Job on CircleCI. The job will produce as artifact a tarball which will be downloaded by the `hermes-engine` podspec when using a published React Native release ([here is an example of the artifacts created for React Native 0.69 in `build_hermes_macos`](https://app.circleci.com/pipelines/github/facebook/react-native/13679/workflows/5172f8e4-6b02-4ccb-ab97-7cb954911fae/jobs/258701/artifacts)).

##### Prebuilt Hermes[​](#prebuilt-hermes "Direct link to Prebuilt Hermes")

If there are no prebuilt artifacts for the React Native version that is being used (i.e. you may be working with React Native from the `main` branch), then Hermes will need to be built from source. First, the Hermes compiler, `hermesc`, will be built for macOS during `pod install`, then Hermes itself will be built as part of the Xcode build pipeline using the `build-hermes-xcode.sh` script.

##### Building Hermes from source[​](#building-hermes-from-source "Direct link to Building Hermes from source")

Hermes is always built from source when using React Native from the `main` branch. If you are using a stable React Native version, you can force Hermes to be built from source by setting the `CI` envvar to `true` when using CocoaPods: `CI=true pod install`.

##### Debug symbols[​](#debug-symbols "Direct link to Debug symbols")

The prebuilt artifacts for Hermes do not contain debug symbols (dSYMs) by default. We're planning on distributing these debug symbols for each release in the future. Until then, if you need the debug symbols for Hermes, you will need to build Hermes from source. A `hermes.framework.dSYM` will be created in the build directory alongside each of the Hermes frameworks.

### I'm afraid this change is impacting me[​](#im-afraid-this-change-is-impacting-me "Direct link to I'm afraid this change is impacting me")

We'd like to stress that this is essentially an organizational change on *where* Hermes is built and *how* the code is synchronized between the two repositories. The change should be fully transparent to our users.

Historically, we used to cut a release of Hermes for a specific version of React Native (e.g. [`v0.11.0 for RN0.68.x`](https://github.com/facebook/hermes/releases/tag/v0.11.0)).

With 'Bundled Hermes', you can instead rely on a tag that will represent the version used when a specific version of React Native was cut.


---

# Fabric

Fabric is React Native's new rendering system, a conceptual evolution of the legacy render system. The core principles are to unify more render logic in C++, improve interoperability with [host platforms](/architecture/glossary.md#host-platform), and to unlock new capabilities for React Native. Development began in 2018 and in 2021, React Native in the Facebook app is backed by the new renderer.

This documentation provides an overview of the [new renderer](/architecture/glossary.md#fabric-render) and its concepts. It avoids platform specifics and doesn’t contain any code snippets or pointers. This documentation covers key concepts, motivation, benefits, and an overview of the render pipeline in different scenarios.

## Motivations and Benefits of the new renderer[​](#motivations-and-benefits-of-the-new-renderer "Direct link to Motivations and Benefits of the new renderer")

The render architecture was created to unlock better user experiences that weren’t possible with the legacy architecture. Some examples include:

* With improved interoperability between [host views](/architecture/glossary.md#host-view-tree-and-host-view) and React views, the renderer is able to measure and render React surfaces synchronously. In the legacy architecture, React Native layout was asynchronous which led to a layout “jump” issue when embedding a React Native rendered view in a *host view*.
* With support of multi-priority and synchronous events, the renderer can prioritize certain user interactions to ensure they are handled in a timely manner.
* [Integration with React Suspense](https://reactjs.org/blog/2019/11/06/building-great-user-experiences-with-concurrent-mode-and-suspense.html) which allows for more intuitive design of data fetching in React apps.
* Enable React [Concurrent Features](https://github.com/reactwg/react-18/discussions/4) on React Native.
* Easier to implement server side rendering for React Native.

The new architecture also provides benefits in code quality, performance, and extensibility:

* **Type safety:** code generation to ensure type safety across the JS and [host platforms](/architecture/glossary.md#host-platform). The code generation uses JavaScript component declarations as source of truth to generate C++ structs to hold the props. Mismatch between JavaScript and host component props triggers a build error.
* **Shared C++ core**: the renderer is implemented in C++ and the core is shared among platforms. This increases consistency and makes it easier to adopt React Native on new platforms.
* **Better Host Platform Interoperability**: Synchronous and thread-safe layout calculation improves user experiences when embedding host components into React Native, which means easier integration with host platform frameworks that require synchronous APIs.
* **Improved Performance**: With the new cross-platform implementation of the renderer system, every platform benefits from performance improvements that may have been motivated by limitations of one platform. For example, view flattening was originally a performance solution for Android and is now provided by default on both Android and iOS.
* **Consistency**: The new render system is cross-platform, it is easier to keep consistency among different platforms.
* **Faster Startup**: Host components are lazily initialized by default.
* **Less serialization of data between JS and host platform**: React used to transfer data between JavaScript and *host platform* as serialized JSON. The new renderer improves the transfer of data by accessing JavaScript values directly using [JavaScript Interfaces (JSI)](/architecture/glossary.md#javascript-interfaces-jsi).


---

# Glossary

## Dev Menu[​](#dev-menu "Direct link to Dev Menu")

The in-app developer menu (available in development builds) that offers access to various development and debugging actions. [Learn more about the Dev Menu in the docs](/docs/debugging.md).

## Fabric Renderer[​](#fabric-renderer "Direct link to Fabric Renderer")

React Native executes the same React framework code as React for the web. However, React Native renders to general platform views (host views) instead of DOM nodes (which can be considered web’s host views). Rendering to host views is made possible by the Fabric Renderer. Fabric lets React talk to each platform and manage its host view instances. The Fabric Renderer exists in JavaScript and targets interfaces made available by C++ code. [Read more about React renderers in this blog post.](https://overreacted.io/react-as-a-ui-runtime/#renderers)

## Host platform[​](#host-platform "Direct link to Host platform")

The platform embedding React Native (e.g., Android, iOS, macOS, Windows).

## Host View Tree (and Host View)[​](#host-view-tree-and-host-view "Direct link to Host View Tree (and Host View)")

Tree representation of views in the host platform (e.g. Android, iOS). On Android, the host views are instances of `android.view.ViewGroup`, `android.widget.TextView`, etc. which are the building blocks of the host view tree. The size and location of each host view are based on `LayoutMetrics` calculated with Yoga, and the style and content of each host view are based on information from the React Shadow Tree.

## JavaScript Interfaces (JSI)[​](#javascript-interfaces-jsi "Direct link to JavaScript Interfaces (JSI)")

A lightweight API to embed a JavaScript engine in a C++ application. Fabric uses it to communicate between Fabric’s C++ core and React.

## Java Native Interface (JNI)[​](#java-native-interface-jni "Direct link to Java Native Interface (JNI)")

An [API to write Java native methods](https://docs.oracle.com/javase/8/docs/technotes/guides/jni/) used to communicate between Fabric’s C++ core and Android, written in Java.

## React Component[​](#react-component "Direct link to React Component")

A JavaScript function or class that instructs how to create a React Element. [Read more about React components, elements in this blog post.](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)

## React Composite Components[​](#react-composite-components "Direct link to React Composite Components")

React Components with `render` implementations that reduce to other React Composite Components or React Host Components.

## React Host Components or Host Components[​](#react-host-components-or-host-components "Direct link to React Host Components or Host Components")

React Components whose view implementation is provided by a host view (e.g., `<View>, <Text>` ). On the Web, ReactDOM's Host components would be components like `<p>` and `<div>`.

## React Element Tree (and React Element)[​](#react-element-tree-and-react-element "Direct link to React Element Tree (and React Element)")

A *React Element Tree* is created by React in JavaScript and consists of React Elements. A *React Element* is a plain JavaScript object that describes what should appear on the screen. It includes props, styles, and children. React Elements only exist in JavaScript and can represent instantiations of either React Composite Components or React Host Components. [Read more about React components and elements in this blog post.](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)

## React Native Framework[​](#react-native-framework "Direct link to React Native Framework")

React Native allows developers to use the [React programming paradigm](https://react.dev/learn/thinking-in-react) to ship applications to native targets. The React Native team is focused on creating **core APIs** and **functionalities** that fit the most general use case when developing native apps.

Shipping native apps to production usually requires a set of tools and libraries that are not provided by default as part of React Native, but are still crucial to ship an app to production. Examples of such tools are: support for publishing applications to a dedicated store or support for routing and navigation mechanisms.

When those tools and libraries are collected to form a cohesive framework built on top of React Native, we define it as a **React Native Framework**.

An example of Open Source React Native Framework is [Expo](https://expo.dev/).

## React Shadow Tree (and React Shadow Node)[​](#react-shadow-tree-and-react-shadow-node "Direct link to React Shadow Tree (and React Shadow Node)")

A *React Shadow Tree* is created by the Fabric Renderer and consists of React Shadow Nodes. A React Shadow Node is an object that represents a React Host Component to be mounted, and contains props that originate from JavaScript. They also contain layout information (x, y, width, height). In Fabric, React Shadow Node objects exist in C++. Before Fabric, these existed in the mobile runtime heap (e.g. Android JVM).

## Yoga Tree (and Yoga Node)[​](#yoga-tree-and-yoga-node "Direct link to Yoga Tree (and Yoga Node)")

The *Yoga Tree* is used by [Yoga](https://www.yogalayout.dev/) to calculate layout information for a React Shadow Tree. Each React Shadow Node typically creates a *Yoga Node* because React Native employs Yoga to calculate layout. However, this is not a hard requirement. Fabric can also create React Shadow Nodes that do not use Yoga; the implementation of each React Shadow Node determines how to calculate layout.


---

# About the New Architecture

Since 2018, the React Native team has been redesigning the core internals of React Native to enable developers to create higher-quality experiences. As of 2024, this version of React Native has been proven at scale and powers production apps by Meta.

The term *New Architecture* refers to both the new framework architecture and the work to bring it to open source.

The New Architecture has been available for experimental opt-in as of [React Native 0.68](/blog/2022/03/30/version-068#opting-in-to-the-new-architecture) with continued improvements in every subsequent release. The team is now working to make this the default experience for the React Native open source ecosystem.

## Why a New Architecture?[​](#why-a-new-architecture "Direct link to Why a New Architecture?")

After many years of building with React Native, the team identified a set of limitations that prevented developers from crafting certain experiences with a high polish. These limitations were fundamental to the existing design of the framework, so the New Architecture started as an investment in the future of React Native.

The New Architecture unlocks capabilities and improvements that were impossible in the legacy architecture.

### Synchronous Layout and Effects[​](#synchronous-layout-and-effects "Direct link to Synchronous Layout and Effects")

Building adaptive UI experiences often requires measuring the size and position of your views and adjusting layout.

Today, you would use the [`onLayout`](/docs/view.md#onlayout) event to get the layout information of a view and make any adjustments. However, state updates within the `onLayout` callback may apply after painting the previous render. This means that users may see intermediate states or visual jumps between rendering the initial layout and responding to layout measurements.

With the New Architecture, we can avoid this issue entirely with synchronous access to layout information and properly scheduled updates such that no intermediate state is visible to users.

Example: Rendering a Tooltip

Measuring and placing a tooltip above a view allows us to showcase what synchronous rendering unlocks. The tooltip needs to know the position of its target view to determine where it should render.

In the current architecture, we use `onLayout` to get the measurements of the view and then update the positioning of the tooltip based on where the view is.

jsx

```

function ViewWithTooltip() {
// ...

// We get the layout information and pass to ToolTip to position itself
const onLayout = React.useCallback(event => {
targetRef.current?.measureInWindow((x, y, width, height) => {
// This state update is not guaranteed to run in the same commit
// This results in a visual "jump" as the ToolTip repositions itself
setTargetRect({x, y, width, height});
});
}, \[]);

return (
<> <View ref={targetRef} onLayout={onLayout}> <Text>Some content that renders a tooltip above</Text> </View> <Tooltip targetRect={targetRect} />
\</>
);
}

```

With the New Architecture, we can use [`useLayoutEffect`](https://react.dev/reference/react/useLayoutEffect) to synchronously measure and apply layout updates in a single commit, avoiding the visual "jump".

jsx

```

function ViewWithTooltip() {
// ...

useLayoutEffect(() => {
// The measurement and state update for `targetRect` happens in a single commit
// allowing ToolTip to position itself without intermediate paints
targetRef.current?.measureInWindow((x, y, width, height) => {
setTargetRect({x, y, width, height});
});
}, \[setTargetRect]);

return (
<> <View ref={targetRef}> <Text>Some content that renders a tooltip above</Text> </View> <Tooltip targetRect={targetRect} />
\</>
);
}

```

![A view that is moving to the corners of the viewport and center with a tooltip rendered either above or below it. The tooltip is rendered after a short delay after the view moves](/img/new-architecture/async-on-layout.gif)

Asynchronous measurement and render of the ToolTip. [See code](https://gist.github.com/lunaleaps/eabd653d9864082ac1d3772dac217ab9).

![A view that is moving to the corners of the viewport and center with a tooltip rendered either above or below it. The view and tooltip move in unison.](/img/new-architecture/sync-use-layout-effect.gif)

Synchronous measurement and render of the ToolTip. [See code](https://gist.github.com/lunaleaps/148756563999c83220887757f2e549a3).

### Support for Concurrent Renderer and Features[​](#support-for-concurrent-renderer-and-features "Direct link to Support for Concurrent Renderer and Features")

The New Architecture supports concurrent rendering and features that have shipped in [React 18](https://react.dev/blog/2022/03/29/react-v18) and beyond. You can now use features like Suspense for data-fetching, Transitions, and other new React APIs in your React Native code, further conforming codebases and concepts between web and native React development.

The concurrent renderer also brings out-of-the-box improvements like automatic batching, which reduces re-renders in React.

Example: Automatic Batching

With the New Architecture, you'll get automatic batching with the React 18 renderer.

In this example, a slider specifies how many tiles to render. Dragging the slider from 0 to 1000 will fire off a quick succession of state updates and re-renders.

In comparing the renderers for the [same code](https://gist.github.com/lunaleaps/79bb6f263404b12ba57db78e5f6f28b2), you can visually notice the renderer provides a smoother UI, with less intermediate UI updates. State updates from native event handlers, like this native Slider component, are now batched.

![A video demonstrating an app rendering many views according to a slider input. The slider value is adjusted from 0 to 1000 and the UI slowly catches up to rendering 1000 views.](/img/new-architecture/legacy-renderer.gif)

Rendering frequent state updates with legacy renderer.

![A video demonstrating an app rendering many views according to a slider input. The slider value is adjusted from 0 to 1000 and the UI resolves to 1000 views faster than the previous example, without as many intermediate states.](/img/new-architecture/react18-renderer.gif)

Rendering frequent state updates with React 18 renderer.

New concurrent features, like [Transitions](https://react.dev/reference/react/useTransition), give you the power to express the priority of UI updates. Marking an update as lower priority tells React it can "interrupt" rendering the update to handle higher priority updates to ensure a responsive user experience where it matters.

Example: Using `startTransition`

We can build on the previous example to showcase how transitions can interrupt in-progress rendering to handle a newer state update.

We wrap the tile number state update with `startTransition` to indicate that rendering the tiles can be interrupted. `startTransition` also provides a `isPending` flag to tell us when the transition is complete.

jsx

```

function TileSlider({value, onValueChange}) {
const \[isPending, startTransition] = useTransition();

return (
<> <View> <Text>
Render {value} Tiles </Text> <ActivityIndicator animating={isPending} /> </View>
\<Slider
value={1}
minimumValue={1}
maximumValue={1000}
step={1}
onValueChange={newValue => {
startTransition(() => {
onValueChange(newValue);
});
}}
/>
\</>
);
}

function ManyTiles() {
const \[value, setValue] = useState(1);
const tiles = generateTileViews(value);
return ( <TileSlider onValueChange={setValue} value={value} /> <View>
{tiles} </View>
)
}

```

You'll notice that with the frequent updates in a transition, React renders fewer intermediate states because it bails out of rendering the state as soon as it becomes stale. In comparison, without transitions, more intermediate states are rendered. Both examples still use automatic batching. Still, transitions give even more power to developers to batch in-progress renders.

![A video demonstrating an app rendering many views (tiles) according to a slider input. The views are rendered in batches as the slider is quickly adjusted from 0 to 1000. There are less batch renders in comparison to the next video.](/img/new-architecture/with-transitions.gif)

Rendering tiles with transitions to interrupt in-progress renders of stale state. [See code](https://gist.github.com/lunaleaps/eac391bf3fe4c85953cefeb74031bab0/revisions).

![A video demonstrating an app rendering many views (tiles) according to a slider input. The views are rendered in batches as the slider is quickly adjusted from 0 to 1000.](/img/new-architecture/without-transitions.gif)

Rendering tiles without marking it as a transition. [See code](https://gist.github.com/lunaleaps/eac391bf3fe4c85953cefeb74031bab0/revisions).

### Fast JavaScript/Native Interfacing[​](#fast-javascriptnative-interfacing "Direct link to Fast JavaScript/Native Interfacing")

The New Architecture removes the [asynchronous bridge](https://reactnative.dev/blog/2018/06/14/state-of-react-native-2018#architecture) between JavaScript and native and replaces it with JavaScript Interface (JSI). JSI is an interface that allows JavaScript to hold a reference to a C++ object and vice-versa. With a memory reference, you can directly invoke methods without serialization costs.

JSI enables [VisionCamera](https://github.com/mrousavy/react-native-vision-camera), a popular camera library for React Native, to process frames in real time. Typical frame buffers are \~30 MB, which amounts to roughly 2 GB of data per second, depending on the frame rate. In comparison with the serialization costs of the bridge, JSI handles that amount of interfacing data with ease. JSI can expose other complex instance-based types such as databases, images, audio samples, etc.

JSI adoption in the New Architecture removes this class of serialization work from all native-JavaScript interop. This includes initializing and re-rendering native core components like `View` and `Text`. You can read more about our [investigation in rendering performance](https://github.com/reactwg/react-native-new-architecture/discussions/123) in the New Architecture and the improved benchmarks we measured.

## What can I expect from enabling the New Architecture?[​](#what-can-i-expect-from-enabling-the-new-architecture "Direct link to What can I expect from enabling the New Architecture?")

While the New Architecture enables these features and improvements, enabling the New Architecture for your app or library may not immediately improve the performance or user experience.

For example, your code may need refactoring to leverage new capabilities like synchronous layout effects or concurrent features. Although JSI will minimize the overhead between JavaScript and native memory, data serialization may not have been a bottleneck for your app's performance.

Enabling the New Architecture in your app or library is opting into the future of React Native.

The team is actively researching and developing new capabilities the New Architecture unlocks. For example, web alignment is an active area of exploration at Meta that will ship to the React Native open source ecosystem.

* [Updates to the event loop model](https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0744-well-defined-event-loop.md)
* [Node and layout APIs](https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0607-dom-traversal-and-layout-apis.md)
* [Styling and layout conformance](https://github.com/facebook/yoga/releases/tag/v2.0.0)

You can follow along and contribute in our dedicated [discussions & proposals](https://github.com/react-native-community/discussions-and-proposals/discussions/651) repository.

## Should I use the New Architecture today?[​](#should-i-use-the-new-architecture-today "Direct link to Should I use the New Architecture today?")

With 0.76, The New Architecture is enabled by default in all the React Native projects.

If you find anything that is not working well, please open an issue using [this template](https://github.com/facebook/react-native/issues/new?assignees=\&labels=Needs%3A+Triage+%3Amag%3A%2CType%3A+New+Architecture\&projects=\&template=new_architecture_bug_report.yml).

If, for any reasons, you can't use the New Architecture, you can still opt-out from it:

### Android[​](#android "Direct link to Android")

1. Open the `android/gradle.properties` file
2. Toggle the `newArchEnabled` flag from `true` to `false`

gradle.properties

```

# Use this property to enable support to the new architecture.

# This will allow you to use TurboModules and the Fabric render in

# your application. You should enable this flag either if you want

# to write custom TurboModules/Fabric components OR use libraries that

# are providing them.

-newArchEnabled=true
+newArchEnabled=false

```

### iOS[​](#ios "Direct link to iOS")

1. Open the `ios/Podfile` file
2. Add `ENV['RCT_NEW_ARCH_ENABLED'] = '0'` in the main scope of the Podfile ([reference Podfile](https://github.com/react-native-community/template/blob/0.76-stable/template/ios/Podfile) in the template)

diff

```

- ENV\['RCT\_NEW\_ARCH\_ENABLED'] = '0'
