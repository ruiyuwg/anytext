# Reference

## Methods[​](#methods "Direct link to Methods")

### `showActionSheetWithOptions()`[​](#showactionsheetwithoptions "Direct link to showactionsheetwithoptions")

tsx

```
static showActionSheetWithOptions: (
  options: ActionSheetIOSOptions,
  callback: (buttonIndex: number) => void,
);
```

Display an iOS action sheet. The `options` object must contain one or more of:

- `options` (array of strings) - a list of button titles (required)
- `cancelButtonIndex` (int) - index of cancel button in `options`
- `cancelButtonTintColor` (string) - the [color](/docs/colors.md) used for the change the text color of the cancel button
- `destructiveButtonIndex` (int or array of ints) - indices of destructive buttons in `options`
- `title` (string) - a title to show above the action sheet
- `message` (string) - a message to show below the title
- `anchor` (number) - the node to which the action sheet should be anchored (used for iPad)
- `tintColor` (string) - the [color](/docs/colors.md) used for non-destructive button titles
- `disabledButtonIndices` (array of numbers) - a list of button indices which should be disabled
- `userInterfaceStyle` (string) - the interface style used for the action sheet, can be set to `light` or `dark`, otherwise the default system style will be used

The 'callback' function takes one parameter, the zero-based index of the selected item.

Minimal example:

tsx

```
ActionSheetIOS.showActionSheetWithOptions(
  {
    options: ['Cancel', 'Remove'],
    destructiveButtonIndex: 1,
    cancelButtonIndex: 0,
  },
  buttonIndex => {
    if (buttonIndex === 1) {
      /* destructive action */
    }
  },
);
```

***

### `dismissActionSheet()`[​](#dismissactionsheet "Direct link to dismissactionsheet")

tsx

```
static dismissActionSheet();
```

Dismisses the most upper iOS action sheet presented, if no action sheet is present a warning is displayed.

***

### `showShareActionSheetWithOptions()`[​](#showshareactionsheetwithoptions "Direct link to showshareactionsheetwithoptions")

tsx

```
static showShareActionSheetWithOptions: (
  options: ShareActionSheetIOSOptions,
  failureCallback: (error: Error) => void,
  successCallback: (success: boolean, method: string) => void,
);
```

Display the iOS share sheet. The `options` object should contain one or both of `message` and `url` and can additionally have a `subject` or `excludedActivityTypes`:

- `url` (string) - a URL to share
- `message` (string) - a message to share
- `subject` (string) - a subject for the message
- `excludedActivityTypes` (array) - the activities to exclude from the ActionSheet

note

If `url` points to a local file, or is a base64-encoded uri, the file it points to will be loaded and shared directly. In this way, you can share images, videos, PDF files, etc. If `url` points to a remote file or address it must conform to URL format as described in [RFC 2396](https://www.ietf.org/rfc/rfc2396.txt). For example, a web URL without a proper protocol (HTTP/HTTPS) will not be shared.

The 'failureCallback' function takes one parameter, an error object. The only property defined on this object is an optional `stack` property of type `string`.

The 'successCallback' function takes two parameters:

- a boolean value signifying success or failure
- a string that, in the case of success, indicates the method of sharing

***

# ActivityIndicator

Displays a circular loading indicator.

## Example[​](#example "Direct link to Example")

# Reference

## Props[​](#props "Direct link to Props")

### [View Props](/docs/view.md#props)[​](#view-props "Direct link to view-props")

Inherits [View Props](/docs/view.md#props).

***

### `animating`[​](#animating "Direct link to animating")

Whether to show the indicator (`true`) or hide it (`false`).

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `color`[​](#color "Direct link to color")

The foreground color of the spinner.

| Type                     | Default                                                      |
| ------------------------ | ------------------------------------------------------------ |
| [color](/docs/colors.md) | `null` (system accent default color)Android\*\*\*`'#999999'`iOS |

***

### `hidesWhenStopped`iOS[​](#hideswhenstopped-ios "Direct link to hideswhenstopped-ios")

Whether the indicator should hide when not animating.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

***

### `ref`[​](#ref "Direct link to ref")

A ref setter that will be assigned an [element node](/docs/element-nodes.md) when mounted.

***

### `size`[​](#size "Direct link to size")

Size of the indicator.

| Type                                       | Default   |
| ------------------------------------------ | --------- |
| enum(`'small'`, `'large'`)\*\*\*numberAndroid | `'small'` |

***

# Alert

Launches an alert dialog with the specified title and message.

Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button.

This is an API that works both on Android and iOS and can show static alerts. Alert that prompts the user to enter some information is available on iOS only.

## Example[​](#example "Direct link to Example")

## iOS[​](#ios "Direct link to iOS")

On iOS you can specify any number of buttons. Each button can optionally specify a style or be emphasized, available options are represented by the [AlertButtonStyle](#alertbuttonstyle-ios) enum and the `isPreferred` field on [AlertButton](/docs/alert.md#alertbutton).

## Android[​](#android "Direct link to Android")

On Android at most three buttons can be specified. Android has a concept of a neutral, negative and a positive button:

- If you specify one button, it will be the 'positive' one (such as 'OK')
- Two buttons mean 'negative', 'positive' (such as 'Cancel', 'OK')
- Three buttons mean 'neutral', 'negative', 'positive' (such as 'Later', 'Cancel', 'OK')

Alerts on Android can be dismissed by tapping outside of the alert box. It is disabled by default and can be enabled by providing an optional [AlertOptions](/docs/alert.md#alertoptions) parameter with the cancelable property set to `true` i.e.`{cancelable: true}`.

The cancel event can be handled by providing an `onDismiss` callback property inside the `options` parameter.

### ExampleAndroid[​](#example-android "Direct link to example-android")

***
