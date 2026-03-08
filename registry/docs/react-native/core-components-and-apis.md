# Core Components and APIs

React Native provides a number of built-in [Core Components](/docs/intro-react-native-components.md) ready for you to use in your app. You can find them all in the left sidebar (or menu above, if you are on a narrow screen). If you're not sure where to get started, take a look at the following categories:

- [Basic Components](/docs/components-and-apis.md#basic-components)
- [User Interface](/docs/components-and-apis.md#user-interface)
- [List Views](/docs/components-and-apis.md#list-views)
- [Android-specific](/docs/components-and-apis.md#android-components-and-apis)
- [iOS-specific](/docs/components-and-apis.md#ios-components-and-apis)
- [Others](/docs/components-and-apis.md#others)

You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If you're looking for a library that does something specific, please refer to [this guide about finding libraries](/docs/libraries.md#finding-libraries).

## Basic Components[​](#basic-components "Direct link to Basic Components")

Most apps will end up using one or more of these basic components.

### [View](./view)

[The most fundamental component for building a UI.](./view)

### [Text](./text)

[A component for displaying text.](./text)

### [Image](./image)

[A component for displaying images.](./image)

### [TextInput](./textinput)

[A component for inputting text into the app via a keyboard.](./textinput)

### [Pressable](./pressable)

[A wrapper component that can detect various stages of press interactions on any of its children.](./pressable)

### [ScrollView](./scrollview)

[Provides a scrolling container that can host multiple components and views.](./scrollview)

### [StyleSheet](./stylesheet)

[Provides an abstraction layer similar to CSS stylesheets.](./stylesheet)

## User Interface[​](#user-interface "Direct link to User Interface")

These common user interface controls will render on any platform.

### [Button](./button)

[A basic button component for handling touches that should render nicely on any platform.](./button)

### [Switch](./switch)

[Renders a boolean input.](./switch)

## List Views[​](#list-views "Direct link to List Views")

Unlike the more generic [`ScrollView`](/docs/scrollview.md), the following list view components only render elements that are currently showing on the screen. This makes them a performant choice for displaying long lists of data.

### [FlatList](./flatlist)

[A component for rendering performant scrollable lists.](./flatlist)

### [SectionList](./sectionlist)

[Like `FlatList`, but for sectioned lists.](./sectionlist)

## Android Components and APIs[​](#android-components-and-apis "Direct link to Android Components and APIs")

Many of the following components provide wrappers for commonly used Android classes.

### [BackHandler](./backhandler)

[Detect hardware button presses for back navigation.](./backhandler)

### [DrawerLayoutAndroid](./drawerlayoutandroid)

[Renders a `DrawerLayout` on Android.](./drawerlayoutandroid)

### [PermissionsAndroid](./permissionsandroid)

[Provides access to the permissions model introduced in Android M.](./permissionsandroid)

### [ToastAndroid](./toastandroid)

[Create an Android Toast alert.](./toastandroid)

## iOS Components and APIs[​](#ios-components-and-apis "Direct link to iOS Components and APIs")

Many of the following components provide wrappers for commonly used UIKit classes.

### [ActionSheetIOS](./actionsheetios)

[API to display an iOS action sheet or share sheet.](./actionsheetios)

## Others[​](#others "Direct link to Others")

These components may be useful for certain applications. For an exhaustive list of components and APIs, check out the sidebar to the left (or menu above, if you are on a narrow screen).

### [ActivityIndicator](./activityindicator)

[Displays a circular loading indicator.](./activityindicator)

### [Alert](./alert)

[Launches an alert dialog with the specified title and message.](./alert)

### [Animated](./animated)

[A library for creating fluid, powerful animations that are easy to build and maintain.](./animated)

### [Dimensions](./dimensions)

[Provides an interface for getting device dimensions.](./dimensions)

### [KeyboardAvoidingView](./keyboardavoidingview)

[Provides a view that moves out of the way of the virtual keyboard automatically.](./keyboardavoidingview)

### [Linking](./linking)

[Provides a general interface to interact with both incoming and outgoing app links.](./linking)

### [Modal](./modal)

[Provides a simple way to present content above an enclosing view.](./modal)

### [PixelRatio](./pixelratio)

[Provides access to the device pixel density.](./pixelratio)

### [RefreshControl](./refreshcontrol)

[This component is used inside a `ScrollView` to add pull to refresh functionality.](./refreshcontrol)

### [StatusBar](./statusbar)

[Component to control the app status bar.](./statusbar)

***

# ❌ DatePickerAndroid

Removed from React Native

Use one of the [community packages](https://reactnative.directory/?search=datepicker) instead.

***

# ❌ DatePickerIOS

Removed from React Native

Use one of the [community packages](https://reactnative.directory/?search=datepicker) instead.

***
