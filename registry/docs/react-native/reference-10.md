# Reference

## Props[​](#props "Direct link to Props")

### [View Props](/docs/view.md#props)[​](#view-props "Direct link to view-props")

Inherits [View Props](/docs/view.md#props).

***

### `drawerBackgroundColor`[​](#drawerbackgroundcolor "Direct link to drawerbackgroundcolor")

Specifies the background color of the drawer. The default value is `white`. If you want to set the opacity of the drawer, use rgba. Example:

tsx

```
return (
  <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)" />
);
```

| Type                     | Required |
| ------------------------ | -------- |
| [color](/docs/colors.md) | No       |

***

### `drawerLockMode`[​](#drawerlockmode "Direct link to drawerlockmode")

Specifies the lock mode of the drawer. The drawer can be locked in 3 states:

- unlocked (default), meaning that the drawer will respond (open/close) to touch gestures.
- locked-closed, meaning that the drawer will stay closed and not respond to gestures.
- locked-open, meaning that the drawer will stay opened and not respond to gestures. The drawer may still be opened and closed programmatically (`openDrawer`/`closeDrawer`).

| Type                                             | Required |
| ------------------------------------------------ | -------- |
| enum('unlocked', 'locked-closed', 'locked-open') | No       |

***

### `drawerPosition`[​](#drawerposition "Direct link to drawerposition")

Specifies the side of the screen from which the drawer will slide in. By default it is set to `left`.

| Type                  | Required |
| --------------------- | -------- |
| enum('left', 'right') | No       |

***

### `drawerWidth`[​](#drawerwidth "Direct link to drawerwidth")

Specifies the width of the drawer, more precisely the width of the view that be pulled in from the edge of the window.

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `keyboardDismissMode`[​](#keyboarddismissmode "Direct link to keyboarddismissmode")

Determines whether the keyboard gets dismissed in response to a drag.

- 'none' (the default), drags do not dismiss the keyboard.
- 'on-drag', the keyboard is dismissed when a drag begins.

| Type                    | Required |
| ----------------------- | -------- |
| enum('none', 'on-drag') | No       |

***

### `onDrawerClose`[​](#ondrawerclose "Direct link to ondrawerclose")

Function called whenever the navigation view has been closed.

| Type     | Required |
| -------- | -------- |
| function | No       |

***

### `onDrawerOpen`[​](#ondraweropen "Direct link to ondraweropen")

Function called whenever the navigation view has been opened.

| Type     | Required |
| -------- | -------- |
| function | No       |

***

### `onDrawerSlide`[​](#ondrawerslide "Direct link to ondrawerslide")

Function called whenever there is an interaction with the navigation view.

| Type     | Required |
| -------- | -------- |
| function | No       |

***

### `onDrawerStateChanged`[​](#ondrawerstatechanged "Direct link to ondrawerstatechanged")

Function called when the drawer state has changed. The drawer can be in 3 states:

- idle, meaning there is no interaction with the navigation view happening at the time
- dragging, meaning there is currently an interaction with the navigation view
- settling, meaning that there was an interaction with the navigation view, and the navigation view is now finishing its closing or opening animation

| Type     | Required |
| -------- | -------- |
| function | No       |

***

### `renderNavigationView`[​](#rendernavigationview "Direct link to rendernavigationview")

The navigation view that will be rendered to the side of the screen and can be pulled in.

| Type     | Required |
| -------- | -------- |
| function | Yes      |

***

### `statusBarBackgroundColor`[​](#statusbarbackgroundcolor "Direct link to statusbarbackgroundcolor")

Make the drawer take the entire screen and draw the background of the status bar to allow it to open over the status bar. It will only have an effect on API 21+.

| Type                     | Required |
| ------------------------ | -------- |
| [color](/docs/colors.md) | No       |

## Methods[​](#methods "Direct link to Methods")

### `closeDrawer()`[​](#closedrawer "Direct link to closedrawer")

tsx

```
closeDrawer();
```

Closes the drawer.

***

### `openDrawer()`[​](#opendrawer "Direct link to opendrawer")

tsx

```
openDrawer();
```

Opens the drawer.

***

# DropShadowValue Object Type

The `DropShadowValue` object is taken by the [`filter`](/docs/view-style-props.md#filter) style prop for the `dropShadow` function. It is comprised of 2 or 3 lengths and an optional color. These values collectively define the drop shadow's color, position, and blurriness.

## Example[​](#example "Direct link to Example")

js

```
{
  offsetX: 10,
  offsetY: -3,
  standardDeviation: '15px',
  color: 'blue',
}
```

## Keys and values[​](#keys-and-values "Direct link to Keys and values")

### `offsetX`[​](#offsetx "Direct link to offsetx")

The offset on the x-axis. This can be positive or negative. A positive value indicates right and negative indicates left.

| Type             | Optional |
| ---------------- | -------- |
| number | string | No       |

### `offsetY`[​](#offsety "Direct link to offsety")

The offset on the y-axis. This can be positive or negative. A positive value indicates up and negative indicates down.

| Type             | Optional |
| ---------------- | -------- |
| number | string | No       |

### `standardDeviation`[​](#standarddeviation "Direct link to standarddeviation")

Represents the standard deviation used in the [Gaussian blur](https://en.wikipedia.org/wiki/Gaussian_blur) algorithm. The larger the value the blurrier the shadow is. Only non-negative values are valid. The default is 0.

| Type             | Optional |
| ---------------- | -------- |
| number | string | Yes      |

### `color`[​](#color "Direct link to color")

The color of the shadow. The default is `black`.

| Type                     | Optional |
| ------------------------ | -------- |
| [color](/docs/colors.md) | Yes      |

## Used by[​](#used-by "Direct link to Used by")

- [`filter`](/docs/view-style-props.md#filter)

***

# DynamicColorIOS

The `DynamicColorIOS` function is a platform color type specific to iOS.

tsx

```
DynamicColorIOS({
  light: color,
  dark: color,
  highContrastLight: color, // (optional) will fallback to "light" if not provided
  highContrastDark: color, // (optional) will fallback to "dark" if not provided
});
```

`DynamicColorIOS` takes a single argument as an object with two mandatory keys: `dark` and `light`, and two optional keys `highContrastLight` and `highContrastDark`. These correspond to the colors you want to use for "light mode" and "dark mode" on iOS, and when high contrast accessibility mode is enabled, high contrast version of them.

At runtime, the system will choose which of the colors to display depending on the current system appearance and accessibility settings. Dynamic colors are useful for branding colors or other app specific colors that still respond automatically to system setting changes.

#### Developer notes[​](#developer-notes "Direct link to Developer notes")

- iOS
- Web

info

If you’re familiar with `@media (prefers-color-scheme: dark)` in CSS, this is similar! Only instead of defining all the colors in a media query, you define which color to use under what circumstances right there where you're using it. Neat!

info

The `DynamicColorIOS` function is similar to the iOS native methods [`UIColor colorWithDynamicProvider:`](https://developer.apple.com/documentation/uikit/uicolor/3238040-colorwithdynamicprovider).

## Example[​](#example "Direct link to Example")

tsx

```
import {DynamicColorIOS} from 'react-native';

const customDynamicTextColor = DynamicColorIOS({
  dark: 'lightskyblue',
  light: 'midnightblue',
});

const customContrastDynamicTextColor = DynamicColorIOS({
  dark: 'darkgray',
  light: 'lightgray',
  highContrastDark: 'black',
  highContrastLight: 'white',
});
```

***

# Easing

The `Easing` module implements common easing functions. This module is used by [`Animated.timing()`](/docs/animated.md#timing) to convey physically believable motion in animations.

You can find a visualization of some common easing functions at

### Predefined animations[​](#predefined-animations "Direct link to Predefined animations")

The `Easing` module provides several predefined animations through the following methods:

- [`back`](/docs/easing.md#back) provides a basic animation where the object goes slightly back before moving forward
- [`bounce`](/docs/easing.md#bounce) provides a bouncing animation
- [`ease`](/docs/easing.md#ease) provides a basic inertial animation
- [`elastic`](/docs/easing.md#elastic) provides a basic spring interaction

### Standard functions[​](#standard-functions "Direct link to Standard functions")

Three standard easing functions are provided:

- [`linear`](/docs/easing.md#linear)
- [`quad`](/docs/easing.md#quad)
- [`cubic`](/docs/easing.md#cubic)

The [`poly`](/docs/easing.md#poly) function can be used to implement quartic, quintic, and other higher power functions.

### Additional functions[​](#additional-functions "Direct link to Additional functions")

Additional mathematical functions are provided by the following methods:

- [`bezier`](/docs/easing.md#bezier) provides a cubic bezier curve
- [`circle`](/docs/easing.md#circle) provides a circular function
- [`sin`](/docs/easing.md#sin) provides a sinusoidal function
- [`exp`](/docs/easing.md#exp) provides an exponential function

The following helpers are used to modify other easing functions.

- [`in`](/docs/easing.md#in) runs an easing function forwards
- [`inOut`](/docs/easing.md#inout) makes any easing function symmetrical
- [`out`](/docs/easing.md#out) runs an easing function backwards

## Example[​](#example "Direct link to Example")

- TypeScript
- JavaScript

***
