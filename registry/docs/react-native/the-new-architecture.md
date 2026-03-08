### the-new-architecture

#### advanced-topics-components

This document contains a set of advanced topics to implement more complex functionalities of Native Components. It is recommended to first read the Codegen section and the guides on Native Components.

- [Advanced Topics on Native Modules Development](/docs/the-new-architecture/advanced-topics-components.md): This document contains a set of advanced topics to implement more complex functionalities of Native Components. It is recommended to first read the Codegen section and the guides on Native Components.

#### advanced-topics-modules

This document contains a set of advanced topics to implement more complex functionalities of Native Modules. It is recommended to first read the Codegen section and the guides on Native Modules.

- [Advanced Topics on Native Modules Development](/docs/the-new-architecture/advanced-topics-modules.md): This document contains a set of advanced topics to implement more complex functionalities of Native Modules. It is recommended to first read the Codegen section and the guides on Native Modules.

#### codegen-cli

Calling Gradle or manually calling a script might be hard to remember and it requires a lot of ceremony.

- [The Codegen CLI](/docs/the-new-architecture/codegen-cli.md): Calling Gradle or manually calling a script might be hard to remember and it requires a lot of ceremony.

#### create-module-library

React Native has a rich ecosystem of libraries to solve common problems. We collect React Native libraries in the reactnative.directory website, and this is a great resource to bookmark for every React Native developer.

- [Create a Library for Your Module](/docs/the-new-architecture/create-module-library.md): React Native has a rich ecosystem of libraries to solve common problems. We collect React Native libraries in the reactnative.directory website, and this is a great resource to bookmark for every React Native developer.

#### custom-cxx-types

This guide assumes that you are familiar with the Pure C++ Turbo Native Modules guide. This will build on top of that guide.

- [Advanced: Custom C++ Types](/docs/the-new-architecture/custom-cxx-types.md): This guide assumes that you are familiar with the Pure C++ Turbo Native Modules guide. This will build on top of that guide.

#### direct-manipulation-new-architecture

It is sometimes necessary to make changes directly to a component without using state/props to trigger a re-render of the entire subtree. When using React in the browser for example, you sometimes need to directly modify a DOM node, and the same is true for views in mobile apps. setNativeProps is the React Native equivalent to setting properties directly on a DOM node.

- [Direct Manipulation](/docs/the-new-architecture/direct-manipulation-new-architecture.md): It is sometimes necessary to make changes directly to a component without using state/props to trigger a re-render of the entire subtree. When using React in the browser for example, you sometimes need to directly modify a DOM node, and the same is true for views in mobile apps. setNativeProps is the React Native equivalent to setting properties directly on a DOM node.

#### fabric-component-native-commands

In the base guide to write a new Native Component, you have explored how to create a new component, how to pass properties from the JS side to the native side, and how to emit events from native side to JS.

- [Invoking native functions on your native component](/docs/the-new-architecture/fabric-component-native-commands.md): In the base guide to write a new Native Component, you have explored how to create a new component, how to pass properties from the JS side to the native side, and how to emit events from native side to JS.

#### layout-measurements

Sometimes, you need to measure the current layout to apply some changes to the overall layout or to make decisions and call some specific logic.

- [Measuring the Layout](/docs/the-new-architecture/layout-measurements.md): Sometimes, you need to measure the current layout to apply some changes to the overall layout or to make decisions and call some specific logic.

#### native-modules-custom-events

In some circustamces, you may want to have a Native Module that listen to some events in the platform layer and then emit them to the JavaScript layer, to let you application react to such native events. In other cases, you might have long running operations that can emits events so that the UI can be updated when those happen.

- [Emitting Events in Native Modules](/docs/the-new-architecture/native-modules-custom-events.md): In some circustamces, you may want to have a Native Module that listen to some events in the platform layer and then emit them to the JavaScript layer, to let you application react to such native events. In other cases, you might have long running operations that can emits events so that the UI can be updated when those happen.

#### native-modules-lifecycle

In React Native, Native Modules are singleton. The Native Module infrastructure lazily creates a Native Module the first time it is accessed and it keeps it around whenever the app requires it. This is a performance optimization that allows us to avoid the overhead of creating Native Modules eagerly, at app start, and it ensure faster startup times.

- [Native Modules Lifecycle](/docs/the-new-architecture/native-modules-lifecycle.md): In React Native, Native Modules are singleton. The Native Module infrastructure lazily creates a Native Module the first time it is accessed and it keeps it around whenever the app requires it. This is a performance optimization that allows us to avoid the overhead of creating Native Modules eagerly, at app start, and it ensure faster startup times.

#### pure-cxx-modules

Writing a module in C++ is the best way to share platform-agnostic code between Android and iOS. With pure C++ modules, you can write your logic only once and reuse it right away from all the platforms, without the need of writing platform-specific code.

- [Cross-Platform Native Modules (C++)](/docs/the-new-architecture/pure-cxx-modules.md): Writing a module in C++ is the best way to share platform-agnostic code between Android and iOS. With pure C++ modules, you can write your logic only once and reuse it right away from all the platforms, without the need of writing platform-specific code.

#### turbo-modules-with-swift

Swift is the official and default language for developing native application on iOS.

- [iOS - Using Swift in Your Native Modules](/docs/the-new-architecture/turbo-modules-with-swift.md): Swift is the official and default language for developing native application on iOS.

#### using-codegen

This guide teaches how to:

- [Using Codegen](/docs/the-new-architecture/using-codegen.md): This guide teaches how to:

#### what-is-codegen

Codegen is a tool to avoid writing a lot of repetitive code. Using Codegen is not mandatory: you can write all the generated code manually. However, Codegen generates scaffolding code that could save you a lot of time.

- [What is Codegen?](/docs/the-new-architecture/what-is-codegen.md): Codegen is a tool to avoid writing a lot of repetitive code. Using Codegen is not mandatory: you can write all the generated code manually. However, Codegen generates scaffolding code that could save you a lot of time.

### timepickerandroid

Use one of the community packages instead.

- [❌ TimePickerAndroid](/docs/timepickerandroid.md): Use one of the community packages instead.

### timers

Timers are an important part of an application and React Native implements the browser timers.

- [Timers](/docs/timers.md): Timers are an important part of an application and React Native implements the browser timers.

### toastandroid

React Native's ToastAndroid API exposes the Android platform's ToastAndroid module as a JS module. It provides the method show(message, duration) which takes the following parameters:

- [ToastAndroid](/docs/toastandroid.md): React Native's ToastAndroid API exposes the Android platform's ToastAndroid module as a JS module. It provides the method show(message, duration) which takes the following parameters:

### touchablehighlight

If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.

- [TouchableHighlight](/docs/touchablehighlight.md): If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.

### touchablenativefeedback

If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.

- [TouchableNativeFeedback](/docs/touchablenativefeedback.md): If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.

### touchableopacity

If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.

- [TouchableOpacity](/docs/touchableopacity.md): If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.

### touchablewithoutfeedback

If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.

- [TouchableWithoutFeedback](/docs/touchablewithoutfeedback.md): If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.

### transforms

Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However, once you apply transforms, the layouts remain the same around the transformed component hence it might overlap with the nearby components. You can apply margin to the transformed component, the nearby components or padding to the container to prevent such overlaps.

- [Transforms](/docs/transforms.md): Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However, once you apply transforms, the layouts remain the same around the transformed component hence it might overlap with the nearby components. You can apply margin to the transformed component, the nearby components or padding to the container to prevent such overlaps.

### turbo-native-modules-android

Now it's time to write some Android platform code to make sure localStorage survives after the application is closed.

- [Turbo Native Modules: Android](/docs/turbo-native-modules-android.md): Now it's time to write some Android platform code to make sure localStorage survives after the application is closed.

### turbo-native-modules-introduction

Your React Native application code may need to interact with native platform APIs that aren't provided by React Native or an existing library. You can write the integration code yourself using a Turbo Native Module. This guide will show you how to write one.

- [Native Modules](/docs/turbo-native-modules-introduction.md): Your React Native application code may need to interact with native platform APIs that aren't provided by React Native or an existing library. You can write the integration code yourself using a Turbo Native Module. This guide will show you how to write one.

### turbo-native-modules-ios

Now it's time to write some iOS platform code to make sure localStorage survives after the application is closed.

- [Turbo Native Modules: iOS](/docs/turbo-native-modules-ios.md): Now it's time to write some iOS platform code to make sure localStorage survives after the application is closed.

### tutorial

React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React Native specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.

- [Learn the Basics](/docs/tutorial.md): React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React Native specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.

### typescript

TypeScript is a language which extends JavaScript by adding type definitions. New React Native projects target TypeScript by default, but also support JavaScript and Flow.

- [Using TypeScript](/docs/typescript.md): TypeScript is a language which extends JavaScript by adding type definitions. New React Native projects target TypeScript by default, but also support JavaScript and Flow.

### upgrading

Upgrading to new versions of React Native will give you access to more APIs, views, developer tools and other goodies. Upgrading requires a small amount of effort, but we try to make it straightforward for you.

- [Upgrading to new versions](/docs/upgrading.md): Upgrading to new versions of React Native will give you access to more APIs, views, developer tools and other goodies. Upgrading requires a small amount of effort, but we try to make it straightforward for you.

### usecolorscheme

The useColorScheme React hook provides and subscribes to color scheme updates from the Appearance module. The return value indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle).

- [useColorScheme](/docs/usecolorscheme.md): The useColorScheme React hook provides and subscribes to color scheme updates from the Appearance module. The return value indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle).

### usewindowdimensions

useWindowDimensions automatically updates all of its values when screen size or font scale changes. You can get your application window's width and height like so:

- [useWindowDimensions](/docs/usewindowdimensions.md): useWindowDimensions automatically updates all of its values when screen size or font scale changes. You can get your application window's width and height like so:

### vibration

Vibrates the device.

- [Vibration](/docs/vibration.md): Vibrates the device.

### view

The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, `, android.view`, etc.

- [View](/docs/view.md): The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, `, android.view`, etc.

### view-style-props

Example

- [View Style Props](/docs/view-style-props.md): Example

### viewtoken

ViewToken object is returned as one of the properties in the onViewableItemsChanged callback (for example, in the FlatList component). It is exported by ViewabilityHelper.js.

- [ViewToken Object Type](/docs/viewtoken.md): ViewToken object is returned as one of the properties in the onViewableItemsChanged callback (for example, in the FlatList component). It is exported by ViewabilityHelper.js.

### virtualizedlist

Base implementation for the more convenient ` and  components, which are also better documented. In general, this should only really be used if you need more flexibility than FlatList` provides, e.g. for use with immutable data instead of plain arrays.

- [VirtualizedList](/docs/virtualizedlist.md): Base implementation for the more convenient ` and  components, which are also better documented. In general, this should only really be used if you need more flexibility than FlatList` provides, e.g. for use with immutable data instead of plain arrays.

### virtualview

VirtualView is a core component that behaves similar to View.

- [VirtualView 🧪](/docs/virtualview.md): VirtualView is a core component that behaves similar to View.
