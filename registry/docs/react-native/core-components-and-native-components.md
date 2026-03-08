# Core Components and Native Components

React Native is an open source framework for building Android and iOS applications using [React](https://react.dev/) and the app platform’s native capabilities. With React Native, you use JavaScript to access your platform’s APIs as well as to describe the appearance and behavior of your UI using React components: bundles of reusable, nestable code. You can learn more about React in the next section. But first, let’s cover how components work in React Native.

## Views and mobile development[​](#views-and-mobile-development "Direct link to Views and mobile development")

In Android and iOS development, a **view** is the basic building block of UI: a small rectangular element on the screen which can be used to display text, images, or respond to user input. Even the smallest visual elements of an app, like a line of text or a button, are kinds of views. Some kinds of views can contain other views. It’s views all the way down!

![Diagram of Android and iOS app showing them both built on top of atomic elements called views.](/docs/assets/diagram_ios-android-views.svg)

Just a sampling of the many views used in Android and iOS apps.

## Native Components[​](#native-components "Direct link to Native Components")

In Android development, you write views in Kotlin or Java; in iOS development, you use Swift or Objective-C. With React Native, you can invoke these views with JavaScript using React components. At runtime, React Native creates the corresponding Android and iOS views for those components. Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. We call these platform-backed components **Native Components.**

React Native comes with a set of essential, ready-to-use Native Components you can use to start building your app today. These are React Native's **Core Components**.

caution

This documentation references a legacy set of API and needs to be updated to reflect the New Architecture

React Native also lets you build your own Native Components for [Android](/docs/legacy/native-components-android.md) and [iOS](/docs/legacy/native-components-ios.md) to suit your app’s unique needs. We also have a thriving ecosystem of these **community-contributed components.** Check out [Native Directory](https://reactnative.directory) to find what the community has been creating.

## Core Components[​](#core-components "Direct link to Core Components")

React Native has many Core Components for everything from controls to activity indicators. You can find them all [documented in the API section](/docs/components-and-apis.md). You will mostly work with the following Core Components:

| React Native UI Component | Android View   | iOS View         | Web Analog              | Description                                                                                           |
| ------------------------- | -------------- | ---------------- | ----------------------- | ----------------------------------------------------------------------------------------------------- |
| `<View>`                  | `<ViewGroup>`  | `<UIView>`       | A non-scrolling `<div>` | A container that supports layout with flexbox, style, some touch handling, and accessibility controls |
| `<Text>`                  | `<TextView>`   | `<UITextView>`   | `<p>`                   | Displays, styles, and nests strings of text and even handles touch events                             |
| `<Image>`                 | `<ImageView>`  | `<UIImageView>`  | `<img>`                 | Displays different types of images                                                                    |
| `<ScrollView>`            | `<ScrollView>` | `<UIScrollView>` | `<div>`                 | A generic scrolling container that can contain multiple components and views                          |
| `<TextInput>`             | `<EditText>`   | `<UITextField>`  | `<input type="text">`   | Allows the user to enter text                                                                         |

In the next section, you will start combining these Core Components to learn about how React works. Have a play with them here now!

***

Because React Native uses the same API structure as React components, you’ll need to understand React component APIs to get started. The [next section](/docs/intro-react.md) makes for a quick introduction or refresher on the topic. However, if you’re already familiar with React, feel free to [skip ahead](/docs/handling-text-input.md).

![A diagram showing React Native's Core Components are a subset of React Components that ship with React Native.](/docs/assets/diagram_react-native-components.svg)![A diagram showing React Native's Core Components are a subset of React Components that ship with React Native.](/docs/assets/diagram_react-native-components_dark.svg)

***

# JavaScript Environment

## JavaScript Runtime[​](#javascript-runtime "Direct link to JavaScript Runtime")

When using React Native, you're going to be running your JavaScript code in up to three environments:

- In most cases, React Native will use [Hermes](/docs/hermes.md), an open-source JavaScript engine optimized for React Native.
- If Hermes is disabled, React Native will use [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore), the JavaScript engine that powers Safari. Note that on iOS, JavaScriptCore does not use JIT due to the absence of writable executable memory in iOS apps.
- When using Chrome debugging, all JavaScript code runs within Chrome itself, communicating with native code via WebSockets. Chrome uses [V8](https://v8.dev/) as its JavaScript engine.

While these environments are very similar, you may end up hitting some inconsistencies. It is best to avoid relying on specifics of any runtime.
