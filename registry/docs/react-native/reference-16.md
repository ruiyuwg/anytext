# Reference

## Properties[​](#properties "Direct link to Properties")

### `isRTL`[​](#isrtl "Direct link to isrtl")

typescript

```
static isRTL: boolean;
```

A boolean value indicating whether the app is currently in RTL layout mode.

The value of `isRTL` is determined by the following logic:

- If `forceRTL` is `true`, `isRTL` returns `true`

- If `allowRTL` is `false`, `isRTL` returns `false`

- Otherwise, `isRTL` will be `true` given the following:

  - **iOS:**

    - The user-preferred language on the device is an RTL language
    - The application-defined localizations include the user-chosen language (as defined in the Xcode project file (`knownRegions = (...)`)

  - **Android:**

    - The user-preferred language on the device is an RTL language
    - The application's `AndroidManifest.xml` defines `android:supportsRTL="true"` on the `<application>` element

### `doLeftAndRightSwapInRTL`[​](#doleftandrightswapinrtl "Direct link to doleftandrightswapinrtl")

typescript

```
static doLeftAndRightSwapInRTL: boolean;
```

A boolean value indicating whether left and right style properties should be automatically swapped when in RTL mode. When enabled, left becomes right and right becomes left in RTL layouts.

## Methods[​](#methods "Direct link to Methods")

### `allowRTL()`[​](#allowrtl "Direct link to allowrtl")

typescript

```
static allowRTL: (allowRTL: boolean) => void;
```

Enables or disables RTL layout support for the application.

**Parameters:**

- `allowRTL` (boolean): Whether to allow RTL layout

**Important Notes:**

- Changes take effect on the next application start, not immediately
- This setting is persisted across app restarts

### `forceRTL()`[​](#forcertl "Direct link to forcertl")

typescript

```
static forceRTL: (forced: boolean) => void;
```

Forces the app to use RTL layout regardless of the device language settings. This is primarily useful for testing RTL layouts during development.

Avoid forcing RTL in production apps as it requires a full app restart to take effect, which makes for a poor user-experience.

**Parameters:**

- `forced` (boolean): Whether to force RTL layout

**Important Notes:**

- Changes take full effect on the next application start, not immediately
- The setting is persisted across app restarts
- Only meant for development and testing. In production, you should either disallow RTL fully or handle it appropriately (see `isRTL`)

### `swapLeftAndRightInRTL()`[​](#swapleftandrightinrtl "Direct link to swapleftandrightinrtl")

typescript

```
static swapLeftAndRightInRTL: (swapLeftAndRight: boolean) => void;
```

Swap left and right style properties in RTL mode. When enabled, left becomes right and right becomes left in RTL layouts. Does not affect the value of `isRTL`.

***

# Image

A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.

This example shows fetching and displaying an image from local storage as well as one from network and even from data provided in the `'data:'` uri scheme.

note

For network and data images, you will need to manually specify the dimensions of your image!

## Examples[​](#examples "Direct link to Examples")

You can also add `style` to an image:

## GIF and WebP support on Android[​](#gif-and-webp-support-on-android "Direct link to GIF and WebP support on Android")

When building your own native code, GIF and WebP are not supported by default on Android.

You will need to add some optional modules in `android/app/build.gradle`, depending on the needs of your app.

groovy

```
dependencies {
  // If your app supports Android versions before Ice Cream Sandwich (API level 14)
  implementation 'com.facebook.fresco:animated-base-support:1.3.0'

  // For animated GIF support
  implementation 'com.facebook.fresco:animated-gif:3.6.0'

  // For WebP support, including animated WebP
  implementation 'com.facebook.fresco:animated-webp:3.6.0'
  implementation 'com.facebook.fresco:webpsupport:3.6.0'

  // For WebP support, without animations
  implementation 'com.facebook.fresco:webpsupport:3.6.0'
}
```

note

The version listed above may not be updated in time. Please check [`packages/react-native/gradle/libs.versions.toml`](https://github.com/facebook/react-native/blob/main/packages/react-native/gradle/libs.versions.toml) in the main repo to see which fresco version is being used in a specific tagged version.

***
