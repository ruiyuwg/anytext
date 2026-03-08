# Improving User Experience

## Configure text inputs[​](#configure-text-inputs "Direct link to Configure text inputs")

Entering text on touch phone is a challenge - small screen, software keyboard. But based on what kind of data you need, you can make it easier by properly configuring the text inputs:

- Focus the first field automatically
- Use placeholder text as an example of expected data format
- Enable or disable autocapitalization and autocorrect
- Choose keyboard type (e.g. email, numeric)
- Make sure the return button focuses the next field or submits the form

Check out [`TextInput` docs](/docs/textinput.md) for more configuration options.

- TypeScript
- JavaScript

## Manage layout when keyboard is visible[​](#manage-layout-when-keyboard-is-visible "Direct link to Manage layout when keyboard is visible")

Software keyboard takes almost half of the screen. If you have interactive elements that can get covered by the keyboard, make sure they are still accessible by using the [`KeyboardAvoidingView` component](/docs/keyboardavoidingview.md).

- TypeScript
- JavaScript

## Make tappable areas larger[​](#make-tappable-areas-larger "Direct link to Make tappable areas larger")

On mobile phones it's hard to be very precise when pressing buttons. Make sure all interactive elements are 44x44 or larger. One way to do this is to leave enough space for the element, `padding`, `minWidth` and `minHeight` style values can be useful for that. Alternatively, you can use [`hitSlop` prop](/docs/touchablewithoutfeedback.md#hitslop) to increase interactive area without affecting the layout. Here's a demo:

## Use Android Ripple[​](#use-android-ripple "Direct link to Use Android Ripple")

Android API 21+ uses the material design ripple to provide user with feedback when they touch an interactable area on the screen. React Native exposes this through the [`TouchableNativeFeedback` component](/docs/touchablenativefeedback.md). Using this touchable effect instead of opacity or highlight will often make your app feel much more fitting on the platform. That said, you need to be careful when using it because it doesn't work on iOS or on Android API < 21, so you will need to fallback to using one of the other Touchable components on iOS. You can use a library like [react-native-platform-touchable](https://github.com/react-community/react-native-platform-touchable) to handle the platform differences for you.

## Screen orientation lock[​](#screen-orientation-lock "Direct link to Screen orientation lock")

Multiple screen orientations should work fine by default unless you're using `Dimensions` API and don't handle orientation changes. If you don't want to support multiple screen orientations, you can lock the screen orientation to either portrait or landscape.

On iOS, in the General tab and Deployment Info section of Xcode enable the Device Orientation you want to support (ensure you have selected iPhone from the Devices menu when making the changes). For Android, open the AndroidManifest.xml file and within the activity element add `'android:screenOrientation="portrait"'` to lock to portrait or `'android:screenOrientation="landscape"'` to lock to landscape.

# Learn more

[Material Design](https://material.io/) and [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines) are great resources for learning more about designing for mobile platforms.

***

# InputAccessoryView

A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a `TextInput` has focus. This component can be used to create custom toolbars.

To use this component wrap your custom toolbar with the InputAccessoryView component, and set a `nativeID`. Then, pass that `nativeID` as the `inputAccessoryViewID` of whatever `TextInput` you desire. A basic example:

This component can also be used to create sticky text inputs (text inputs which are anchored to the top of the keyboard). To do this, wrap a `TextInput` with the `InputAccessoryView` component, and don't set a `nativeID`. For an example, look at [InputAccessoryViewExample.js](https://github.com/facebook/react-native/blob/main/packages/rn-tester/js/examples/InputAccessoryView/InputAccessoryViewExample.js).

***

# Reference

## Props[​](#props "Direct link to Props")

### `backgroundColor`[​](#backgroundcolor "Direct link to backgroundcolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `nativeID`[​](#nativeid "Direct link to nativeid")

An ID which is used to associate this `InputAccessoryView` to specified TextInput(s).

| Type   |
| ------ |
| string |

***

### `style`[​](#style "Direct link to style")

| Type                                    |
| --------------------------------------- |
| [View Style](/docs/view-style-props.md) |

# Known issues

- [react-native#18997](https://github.com/facebook/react-native/issues/18997): Doesn't support multiline `TextInput`
- [react-native#20157](https://github.com/facebook/react-native/issues/20157): Can't use with a bottom tab bar

***
