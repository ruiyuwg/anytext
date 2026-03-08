### legacy

#### direct-manipulation

It is sometimes necessary to make changes directly to a component without using state/props to trigger a re-render of the entire subtree. When using React in the browser for example, you sometimes need to directly modify a DOM node, and the same is true for views in mobile apps. setNativeProps is the React Native equivalent to setting properties directly on a DOM node.

- [Direct Manipulation](/docs/legacy/direct-manipulation.md): It is sometimes necessary to make changes directly to a component without using state/props to trigger a re-render of the entire subtree. When using React in the browser for example, you sometimes need to directly modify a DOM node, and the same is true for views in mobile apps. setNativeProps is the React Native equivalent to setting properties directly on a DOM node.

#### local-library-setup

A local library is a library containing views or modules that's local to your app and not published to a registry. This is different from the traditional setup for view and modules in the sense that a local library is decoupled from your app's native code.

- [Local libraries setup](/docs/legacy/local-library-setup.md): A local library is a library containing views or modules that's local to your app and not published to a registry. This is different from the traditional setup for view and modules in the sense that a local library is decoupled from your app's native code.

#### native-components-android

There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ScrollView and TextInput, but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application.

- [Android Native UI Components](/docs/legacy/native-components-android.md): There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ScrollView and TextInput, but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application.

#### native-components-ios

There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ScrollView and TextInput, but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application.

- [iOS Native UI Components](/docs/legacy/native-components-ios.md): There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ScrollView and TextInput, but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application.

#### native-modules-android

Welcome to Native Modules for Android. Please start by reading the Native Modules Intro for an intro to what native modules are.

- [Android Native Modules](/docs/legacy/native-modules-android.md): Welcome to Native Modules for Android. Please start by reading the Native Modules Intro for an intro to what native modules are.

#### native-modules-intro

Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Google Pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing.

- [Native Modules Intro](/docs/legacy/native-modules-intro.md): Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Google Pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing.

#### native-modules-ios

Welcome to Native Modules for iOS. Please start by reading the Native Modules Intro for an intro to what native modules are.

- [iOS Native Modules](/docs/legacy/native-modules-ios.md): Welcome to Native Modules for iOS. Please start by reading the Native Modules Intro for an intro to what native modules are.

#### native-modules-setup

Native modules are usually distributed as npm packages, except that on top of the usual JavaScript they will include some native code per platform. To understand more about npm packages you may find this guide useful.

- [Native Modules NPM Package Setup](/docs/legacy/native-modules-setup.md): Native modules are usually distributed as npm packages, except that on top of the usual JavaScript they will include some native code per platform. To understand more about npm packages you may find this guide useful.

### libraries

This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps.

- [Using Libraries](/docs/libraries.md): This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps.

### linking

Linking gives you a general interface to interact with both incoming and outgoing app links.

- [Linking](/docs/linking.md): Linking gives you a general interface to interact with both incoming and outgoing app links.

### linking-libraries-ios

Not every app uses all the native capabilities, and including the code to support all those features would impact the binary size... But we still want to support adding these features whenever you need them.

- [Linking Libraries](/docs/linking-libraries-ios.md): Not every app uses all the native capabilities, and including the code to support all those features would impact the binary size... But we still want to support adding these features whenever you need them.

### metro

React Native uses Metro to build your JavaScript code and assets.

- [Metro](/docs/metro.md): React Native uses Metro to build your JavaScript code and assets.

### modal

The Modal component is a basic way to present content above an enclosing view.

- [Modal](/docs/modal.md): The Modal component is a basic way to present content above an enclosing view.

### native-platform

Your application may need access to platform features that aren’t directly available from react-native or one of the hundreds of third-party libraries maintained by the community. Maybe you want to reuse some existing Objective-C, Swift, Java, Kotlin or C++ code from the JavaScript runtime. Whatever your reason, React Native exposes a powerful set of API to connect your native code to your JavaScript application code.

- [Native Platform](/docs/native-platform.md): Your application may need access to platform features that aren’t directly available from react-native or one of the hundreds of third-party libraries maintained by the community. Maybe you want to reuse some existing Objective-C, Swift, Java, Kotlin or C++ code from the JavaScript runtime. Whatever your reason, React Native exposes a powerful set of API to connect your native code to your JavaScript application code.

### navigation

Mobile apps are rarely made up of a single screen. Managing the presentation of, and transition between, multiple screens is typically handled by what is known as a navigator.

- [Navigating Between Screens](/docs/navigation.md): Mobile apps are rarely made up of a single screen. Managing the presentation of, and transition between, multiple screens is typically handled by what is known as a navigator.

### network

Many mobile apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server.

- [Networking](/docs/network.md): Many mobile apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server.

### nodes

React Native apps render a native view tree that represents the UI, similar to how React DOM does on Web (the DOM tree). React Native provides imperative access to this tree via refs, which are returned by all native components (including those rendered by built-in components like View).

- [Nodes from refs](/docs/nodes.md): React Native apps render a native view tree that represents the UI, similar to how React DOM does on Web (the DOM tree). React Native provides imperative access to this tree via refs, which are returned by all native components (including those rendered by built-in components like View).

### optimizing-flatlist-configuration

Terms

- [Optimizing FlatList Configuration](/docs/optimizing-flatlist-configuration.md): Terms

### optimizing-javascript-loading

Parsing and running JavaScript code requires memory and time. Because of this, as your app grows, it's often useful to delay loading code until it's needed for the first time. React Native comes with some standard optimizations that are on by default, and there are techniques you can adopt in your own code to help React load your app more efficiently. There are also some advanced automatic optimizations (with their own tradeoffs) that are suitable for very large apps.

- [Optimizing JavaScript loading](/docs/optimizing-javascript-loading.md): Parsing and running JavaScript code requires memory and time. Because of this, as your app grows, it's often useful to delay loading code until it's needed for the first time. React Native comes with some standard optimizations that are on by default, and there are techniques you can adopt in your own code to help React load your app more efficiently. There are also some advanced automatic optimizations (with their own tradeoffs) that are suitable for very large apps.

### other-debugging-methods

This page covers how to use legacy JavaScript debugging methods. If you are getting started with a new React Native or Expo app, we recommend using React Native DevTools.

- [Other Debugging Methods](/docs/other-debugging-methods.md): This page covers how to use legacy JavaScript debugging methods. If you are getting started with a new React Native or Expo app, we recommend using React Native DevTools.

### panresponder

PanResponder reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches, and can be used to recognize basic multi-touch gestures.

- [PanResponder](/docs/panresponder.md): PanResponder reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches, and can be used to recognize basic multi-touch gestures.

### performance

A compelling reason to use React Native instead of WebView-based tools is to achieve at least 60 frames per second and provide a native look and feel to your apps. Whenever feasible, we aim for React Native to handle optimizations automatically, allowing you to focus on your app without worrying about performance. However, there are certain areas where we haven't quite reached that level yet, and others where React Native (similar to writing native code directly) cannot determine the best optimization approach for you. In such cases, manual intervention becomes necessary. We strive to deliver buttery-smooth UI performance by default, but there may be instances where that isn't possible.

- [Performance Overview](/docs/performance.md): A compelling reason to use React Native instead of WebView-based tools is to achieve at least 60 frames per second and provide a native look and feel to your apps. Whenever feasible, we aim for React Native to handle optimizations automatically, allowing you to focus on your app without worrying about performance. However, there are certain areas where we haven't quite reached that level yet, and others where React Native (similar to writing native code directly) cannot determine the best optimization approach for you. In such cases, manual intervention becomes necessary. We strive to deliver buttery-smooth UI performance by default, but there may be instances where that isn't possible.

### permissionsandroid

Project with Native Code Required

- [PermissionsAndroid](/docs/permissionsandroid.md): Project with Native Code Required

### pixelratio

PixelRatio gives you access to the device's pixel density and font scale.

- [PixelRatio](/docs/pixelratio.md): PixelRatio gives you access to the device's pixel density and font scale.

### platform

Example

- [Platform](/docs/platform.md): Example

### platformcolor

You can use the PlatformColor function to access native colors on the target platform by supplying the native color’s corresponding string value. You pass a string to the PlatformColor function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application.

- [PlatformColor](/docs/platformcolor.md): You can use the PlatformColor function to access native colors on the target platform by supplying the native color’s corresponding string value. You pass a string to the PlatformColor function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application.

### pressable

Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.

- [Pressable](/docs/pressable.md): Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.

### pressevent

PressEvent object is returned in the callback as a result of user press interaction, for example onPress in Button component.

- [PressEvent Object Type](/docs/pressevent.md): PressEvent object is returned in the callback as a result of user press interaction, for example onPress in Button component.

### profiling

Profiling is the process of analyzing an app's performance, resource usage, and behavior to identify potential bottlenecks or inefficiencies. It's worth making use of profiling tools to ensure your app works smoothly across different devices and conditions.

- [Profiling](/docs/profiling.md): Profiling is the process of analyzing an app's performance, resource usage, and behavior to identify potential bottlenecks or inefficiencies. It's worth making use of profiling tools to ensure your app works smoothly across different devices and conditions.

### progressbarandroid

Use one of the community packages instead.

- [🗑️ ProgressBarAndroid](/docs/progressbarandroid.md): Use one of the community packages instead.

### props

Most components can be customized when they are created, with different parameters. These created parameters are called props, short for properties.

- [Props](/docs/props.md): Most components can be customized when they are created, with different parameters. These created parameters are called props, short for properties.

### publishing-to-app-store

The publishing process is the same as any other native iOS app, with some additional considerations to take into account.

- [Publishing to Apple App Store](/docs/publishing-to-app-store.md): The publishing process is the same as any other native iOS app, with some additional considerations to take into account.

### pushnotificationios

Use one of the community packages instead.

- [🗑️ PushNotificationIOS](/docs/pushnotificationios.md): Use one of the community packages instead.

### react-native-devtools

React Native DevTools is our modern debugging experience for React Native. Purpose-built from the ground up, it aims to be fundamentally more integrated, correct, and reliable than previous debugging methods.

- [React Native DevTools](/docs/react-native-devtools.md): React Native DevTools is our modern debugging experience for React Native. Purpose-built from the ground up, it aims to be fundamentally more integrated, correct, and reliable than previous debugging methods.

### react-native-gradle-plugin

This guide describes how to configure the React Native Gradle Plugin (often referred as RNGP), when building your React Native application for Android.

- [React Native Gradle Plugin](/docs/react-native-gradle-plugin.md): This guide describes how to configure the React Native Gradle Plugin (often referred as RNGP), when building your React Native application for Android.

### react-node

A React Node is one of the following types:

- [React Node Object Type](/docs/react-node.md): A React Node is one of the following types:

### rect

Rect accepts numeric pixel values to describe how far to extend a rectangular area. These values are added to the original area's size to expand it.

- [Rect Object Type](/docs/rect.md): Rect accepts numeric pixel values to describe how far to extend a rectangular area. These values are added to the original area's size to expand it.

### refreshcontrol

This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.

- [RefreshControl](/docs/refreshcontrol.md): This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.

### releases

New React Native releases are shipped every two months, usually resulting in six (6) new minors per year.

- [Releases Overview](/docs/releases.md): New React Native releases are shipped every two months, usually resulting in six (6) new minors per year.

#### release-levels

React Native provides the community with the ability to adopt individual new features as soon as their design and implementation are nearly complete, even before they are included in a stable release. This approach is known as release levels.

- [Release Levels](/docs/releases/release-levels.md): React Native provides the community with the ability to adopt individual new features as soon as their design and implementation are nearly complete, even before they are included in a stable release. This approach is known as release levels.

#### versioning-policy

This page describes the versioning policy we follow for the react-native package.

- [Versioning Policy](/docs/releases/versioning-policy.md): This page describes the versioning policy we follow for the react-native package.

### roottag

RootTag is an opaque identifier assigned to the native root view of your React Native surface — i.e. the ReactRootView or RCTRootView instance for Android or iOS respectively. In short, it is a surface identifier.

- [RootTag](/docs/roottag.md): RootTag is an opaque identifier assigned to the native root view of your React Native surface — i.e. the ReactRootView or RCTRootView instance for Android or iOS respectively. In short, it is a surface identifier.

### running-on-device

It's always a good idea to test your app on an actual device before releasing it to your users. This document will guide you through the necessary steps to run your React Native app on a device and to get it ready for production.

- [Running On Device](/docs/running-on-device.md): It's always a good idea to test your app on an actual device before releasing it to your users. This document will guide you through the necessary steps to run your React Native app on a device and to get it ready for production.

### running-on-simulator-ios

Starting the simulator

- [Running On Simulator](/docs/running-on-simulator-ios.md): Starting the simulator

### safeareaview

Use react-native-safe-area-context instead.

- [🗑️ SafeAreaView](/docs/safeareaview.md): Use react-native-safe-area-context instead.

### scrollview

Component that wraps platform ScrollView while providing integration with touch locking "responder" system.

- [ScrollView](/docs/scrollview.md): Component that wraps platform ScrollView while providing integration with touch locking "responder" system.

### sectionlist

A performant interface for rendering sectioned lists, supporting the most handy features:

- [SectionList](/docs/sectionlist.md): A performant interface for rendering sectioned lists, supporting the most handy features:

### security

Security is often overlooked when building apps. It is true that it is impossible to build software that is completely impenetrable—we’ve yet to invent a completely impenetrable lock (bank vaults do, after all, still get broken into). However, the probability of falling victim to a malicious attack or being exposed for a security vulnerability is inversely proportional to the effort you’re willing to put in to protecting your application against any such eventuality. Although an ordinary padlock is pickable, it is still much harder to get past than a cabinet hook!

- [Security](/docs/security.md): Security is often overlooked when building apps. It is true that it is impossible to build software that is completely impenetrable—we’ve yet to invent a completely impenetrable lock (bank vaults do, after all, still get broken into). However, the probability of falling victim to a malicious attack or being exposed for a security vulnerability is inversely proportional to the effort you’re willing to put in to protecting your application against any such eventuality. Although an ordinary padlock is pickable, it is still much harder to get past than a cabinet hook!

### segmentedcontrolios

Use one of the community packages instead.

- [❌ SegmentedControlIOS](/docs/segmentedcontrolios.md): Use one of the community packages instead.

### settings

Settings serves as a wrapper for NSUserDefaults, a persistent key-value store available only on iOS.

- [Settings](/docs/settings.md): Settings serves as a wrapper for NSUserDefaults, a persistent key-value store available only on iOS.

### shadow-props

***

- [Shadow Props](/docs/shadow-props.md): ---

### share

Example

- [Share](/docs/share.md): Example

### signed-apk-android

Android requires that all apps be digitally signed with a certificate before they can be installed. In order to distribute your Android application via Google Play store it needs to be signed with a release key that then needs to be used for all future updates. Since 2017 it is possible for Google Play to manage signing releases automatically thanks to App Signing by Google Play functionality. However, before your application binary is uploaded to Google Play it needs to be signed with an upload key. The Signing Your Applications page on Android Developers documentation describes the topic in detail. This guide covers the process in brief, as well as lists the steps required to package the JavaScript bundle.

- [Publishing to Google Play Store](/docs/signed-apk-android.md): Android requires that all apps be digitally signed with a certificate before they can be installed. In order to distribute your Android application via Google Play store it needs to be signed with a release key that then needs to be used for all future updates. Since 2017 it is possible for Google Play to manage signing releases automatically thanks to App Signing by Google Play functionality. However, before your application binary is uploaded to Google Play it needs to be signed with an upload key. The Signing Your Applications page on Android Developers documentation describes the topic in detail. This guide covers the process in brief, as well as lists the steps required to package the JavaScript bundle.

### state

There are two types of data that control a component: props and state. props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.

- [State](/docs/state.md): There are two types of data that control a component: props and state. props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.

### statusbar

Component to control the app's status bar. The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons.

- [StatusBar](/docs/statusbar.md): Component to control the app's status bar. The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons.

### statusbarios

Use StatusBar for mutating the status bar.

- [❌ StatusBarIOS](/docs/statusbarios.md): Use StatusBar for mutating the status bar.

### strict-typescript-api

The Strict TypeScript API is a preview of our future, stable JavaScript API for React Native.

- [Strict TypeScript API (opt in)](/docs/strict-typescript-api.md): The Strict TypeScript API is a preview of our future, stable JavaScript API for React Native.

### style

With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the web, except names are written using camel casing, e.g. backgroundColor rather than background-color.

- [Style](/docs/style.md): With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the web, except names are written using camel casing, e.g. backgroundColor rather than background-color.

### stylesheet

A StyleSheet is an abstraction similar to CSS StyleSheets.

- [StyleSheet](/docs/stylesheet.md): A StyleSheet is an abstraction similar to CSS StyleSheets.

### switch

Renders a boolean input.

- [Switch](/docs/switch.md): Renders a boolean input.

### systrace

Systrace is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize.

- [Systrace](/docs/systrace.md): Systrace is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize.

### targetevent

TargetEvent object is returned in the callback as a result of focus change, for example onFocus or onBlur in the TextInput component.

- [TargetEvent Object Type](/docs/targetevent.md): TargetEvent object is returned in the callback as a result of focus change, for example onFocus or onBlur in the TextInput component.

### testing-overview

This guide introduces React Native developers to the key concepts behind testing, how to write good tests, and what kinds of tests you can incorporate into your workflow.

- [Testing](/docs/testing-overview.md): This guide introduces React Native developers to the key concepts behind testing, how to write good tests, and what kinds of tests you can incorporate into your workflow.

### text

A React component for displaying text.

- [Text](/docs/text.md): A React component for displaying text.

### text-nodes

Text nodes represent raw text content on the tree (similar to Text nodes on Web). They are not directly accessible via refs, but can be accessed using methods like childNodes on element refs.

- [Text nodes](/docs/text-nodes.md): Text nodes represent raw text content on the tree (similar to Text nodes on Web). They are not directly accessible via refs, but can be accessed using methods like childNodes on element refs.

### text-style-props

Example

- [Text Style Props](/docs/text-style-props.md): Example

### textinput

A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.

- [TextInput](/docs/textinput.md): A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.
