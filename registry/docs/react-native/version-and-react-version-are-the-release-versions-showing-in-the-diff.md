# {{VERSION}} and {{REACT\_VERSION}} are the release versions showing in the diff

yarn add react-native@{{VERSION}}
yarn add react@{{REACT\_VERSION}}

```

### 3. Upgrade your project files[​](#3-upgrade-your-project-files "Direct link to 3. Upgrade your project files")

The new release may contain updates to other files that are generated when you run `npx react-native init`, those files are listed after the `package.json` in the [Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) page. If there aren't other changes then you only need to rebuild the project to continue developing. In case there are changes you need to manually apply them into your project.

### Troubleshooting[​](#troubleshooting "Direct link to Troubleshooting")

#### I have done all the changes but my app is still using an old version[​](#i-have-done-all-the-changes-but-my-app-is-still-using-an-old-version "Direct link to I have done all the changes but my app is still using an old version")

These sort of errors are usually related to caching, it's recommended to install [react-native-clean-project](https://github.com/pmadruga/react-native-clean-project) to clear all your project's cache and then you can run it again.


---

# useColorScheme

tsx

```

import {useColorScheme} from 'react-native';

```

The `useColorScheme` React hook provides and subscribes to color scheme updates from the [`Appearance`](/docs/appearance.md) module. The return value indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle).

### Supported color schemes[​](#supported-color-schemes "Direct link to Supported color schemes")

* `"light"`: The user prefers a light color theme.
* `"dark"`: The user prefers a dark color theme.
* `null`: The user has not indicated a preferred color theme.

***

## Example[​](#example "Direct link to Example")

You can find a complete example that demonstrates the use of this hook alongside a React context to add support for light and dark themes to your application in [`AppearanceExample.js`](https://github.com/facebook/react-native/blob/main/packages/rn-tester/js/examples/Appearance/AppearanceExample.js).


---

# useWindowDimensions

tsx

```

import {useWindowDimensions} from 'react-native';

```

`useWindowDimensions` automatically updates all of its values when screen size or font scale changes. You can get your application window's width and height like so:

tsx

```

const {height, width} = useWindowDimensions();

```

## Example[​](#example "Direct link to Example")

## Properties[​](#properties "Direct link to Properties")

### `fontScale`[​](#fontscale "Direct link to fontscale")

tsx

```

useWindowDimensions().fontScale;

```

The scale of the font currently used. Some operating systems allow users to scale their font sizes larger or smaller for reading comfort. This property will let you know what is in effect.

***

### `height`[​](#height "Direct link to height")

tsx

```

useWindowDimensions().height;

```

The height in pixels of the window or screen your app occupies.

***

### `scale`[​](#scale "Direct link to scale")

tsx

```

useWindowDimensions().scale;

```

The pixel ratio of the device your app is running on. The values can be:

* `1` which indicates that one point equals one pixel (usually PPI/DPI of 96, 76 on some platforms).
* `2` or `3` which indicates a Retina or high DPI display.

***

### `width`[​](#width "Direct link to width")

tsx

```

useWindowDimensions().width;

```

The width in pixels of the window or screen your app occupies.


---

# Using List Views

React Native provides a suite of components for presenting lists of data. Generally, you'll want to use either [FlatList](/docs/flatlist.md) or [SectionList](/docs/sectionlist.md).

The `FlatList` component displays a scrolling list of changing, but similarly structured, data. `FlatList` works well for long lists of data, where the number of items might change over time. Unlike the more generic [`ScrollView`](/docs/using-a-scrollview.md), the `FlatList` only renders elements that are currently showing on the screen, not all the elements at once.

The `FlatList` component requires two props: `data` and `renderItem`. `data` is the source of information for the list. `renderItem` takes one item from the source and returns a formatted component to render.

This example creates a basic `FlatList` of hardcoded data. Each item in the `data` props is rendered as a `Text` component. The `FlatListBasics` component then renders the `FlatList` and all `Text` components.

If you want to render a set of data broken into logical sections, maybe with section headers, similar to `UITableView` on iOS, then a [SectionList](/docs/sectionlist.md) is the way to go.

One of the most common uses for a list view is displaying data that you fetch from a server. To do that, you will need to [learn about networking in React Native](/docs/network.md).


---

# Using a ScrollView

The [ScrollView](/docs/scrollview.md) is a generic scrolling container that can contain multiple components and views. The scrollable items can be heterogeneous, and you can scroll both vertically and horizontally (by setting the `horizontal` property).

This example creates a vertical `ScrollView` with both images and text mixed together.

ScrollViews can be configured to allow paging through views using swiping gestures by using the `pagingEnabled` props. Swiping horizontally between views can also be implemented on Android using the [ViewPager](https://github.com/react-native-community/react-native-viewpager) component.

On iOS a ScrollView with a single item can be used to allow the user to zoom content. Set up the `maximumZoomScale` and `minimumZoomScale` props and your user will be able to use pinch and expand gestures to zoom in and out.

The ScrollView works best to present a small number of things of a limited size. All the elements and views of a `ScrollView` are rendered, even if they are not currently shown on the screen. If you have a long list of items which cannot fit on the screen, you should use a `FlatList` instead. So let's [learn about list views](/docs/using-a-listview.md) next.


---

# Vibration

Vibrates the device.

## Example[​](#example "Direct link to Example")

info

Android apps should request the `android.permission.VIBRATE` permission by adding `<uses-permission android:name="android.permission.VIBRATE"/>` to `AndroidManifest.xml`.

note

The Vibration API is implemented as a `AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)` call on iOS.

***

# Reference

## Methods[​](#methods "Direct link to Methods")

### `cancel()`[​](#cancel "Direct link to cancel")

tsx

```

static cancel();

```

Call this to stop vibrating after having invoked `vibrate()` with repetition enabled.

***

### `vibrate()`[​](#vibrate "Direct link to vibrate")

tsx

```

static vibrate(
pattern?: number | number\[],
repeat?: boolean
);

```

Triggers a vibration with a fixed duration.

**On Android,** the vibration duration defaults to 400 milliseconds, and an arbitrary vibration duration can be specified by passing a number as the value for the `pattern` argument. **On iOS,** the vibration duration is fixed at roughly 400 milliseconds.

The `vibrate()` method can take a `pattern` argument with an array of numbers that represent time in milliseconds. You may set `repeat` to true to run through the vibration pattern in a loop until `cancel()` is called.

**On Android,** the odd indices of the `pattern` array represent the vibration duration, while the even ones represent the separation time. **On iOS,** the numbers in the `pattern` array represent the separation time, as the vibration duration is fixed.

**Parameters:**

| Name    | Type                             | Default | Description                                                                                     |
| ------- | -------------------------------- | ------- | ----------------------------------------------------------------------------------------------- |
| pattern | numberAndroid***array of numbers | `400`   | Vibration duration in milliseconds.***Vibration pattern as an array of numbers in milliseconds. |
| repeat  | boolean                          | `false` | Repeat vibration pattern until `cancel()`.                                                      |


---

# View

The most fundamental component for building a UI, `View` is a container that supports layout with [flexbox](/docs/flexbox.md), [style](/docs/style.md), [some touch handling](/docs/handling-touches.md), and [accessibility](/docs/accessibility.md) controls. `View` maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a `UIView`, `<div>`, `android.view`, etc.

`View` is designed to be nested inside other views and can have 0 to many children of any type.

This example creates a `View` that wraps two boxes with color and a text component in a row with padding.

note

`View`s are designed to be used with [`StyleSheet`](/docs/style.md) for clarity and performance, although inline styles are also supported.

### Synthetic Touch Events[​](#synthetic-touch-events "Direct link to Synthetic Touch Events")

For `View` responder props (e.g., `onResponderMove`), the synthetic touch event passed to them are in form of [PressEvent](/docs/pressevent.md).

***

# Reference

## Props[​](#props "Direct link to Props")

***

### `accessibilityActions`[​](#accessibilityactions "Direct link to accessibilityactions")

Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. The `accessibilityActions` property should contain a list of action objects. Each action object should contain the field name and label.

See the [Accessibility guide](/docs/accessibility.md#accessibility-actions) for more information.

| Type  |
| ----- |
| array |

***

### `accessibilityElementsHidden`iOS[​](#accessibilityelementshidden-ios "Direct link to accessibilityelementshidden-ios")

A boolean value indicating whether the given accessibility element, and any accessibility elements it contains, are hidden. Default is `false`.

See the [Accessibility guide](/docs/accessibility.md#accessibilityelementshidden-ios) for more information.

| Type |
| ---- |
| bool |

***

### `accessibilityHint`[​](#accessibilityhint "Direct link to accessibilityhint")

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label.

| Type   |
| ------ |
| string |

***

### `accessibilityLanguage`iOS[​](#accessibilitylanguage-ios "Direct link to accessibilitylanguage-ios")

A value indicating which language should be used by the screen reader when the user interacts with the element. It should follow the [BCP 47 specification](https://www.rfc-editor.org/info/bcp47).

See the [iOS `accessibilityLanguage` doc](https://developer.apple.com/documentation/objectivec/nsobject/1615192-accessibilitylanguage) for more information.

| Type   |
| ------ |
| string |

***

### `accessibilityIgnoresInvertColors`iOS[​](#accessibilityignoresinvertcolors-ios "Direct link to accessibilityignoresinvertcolors-ios")

A value indicating this view should or should not be inverted when color inversion is turned on. A value of `true` will tell the view to not be inverted even if color inversion is turned on.

See the [Accessibility guide](/docs/accessibility.md#accessibilityignoresinvertcolors) for more information.

| Type |
| ---- |
| bool |

***

### `accessibilityLabel`[​](#accessibilitylabel "Direct link to accessibilitylabel")

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `Text` nodes separated by space.

| Type   |
| ------ |
| string |

***

### `accessibilityLiveRegion`Android[​](#accessibilityliveregion-android "Direct link to accessibilityliveregion-android")

Indicates to accessibility services whether the user should be notified when this view changes. Works for Android API >= 19 only. Possible values:

* `'none'` - Accessibility services should not announce changes to this view.
* `'polite'`- Accessibility services should announce changes to this view.
* `'assertive'` - Accessibility services should interrupt ongoing speech to immediately announce changes to this view.

See the [Android `View` docs](https://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion) for reference.

| Type                                |
| ----------------------------------- |
| enum('none', 'polite', 'assertive') |

***

### `accessibilityRole`[​](#accessibilityrole "Direct link to accessibilityrole")

`accessibilityRole` communicates the purpose of a component to the user of an assistive technology.

`accessibilityRole` can be one of the following:

* `'none'` - Used when the element has no role.
* `'button'` - Used when the element should be treated as a button.
* `'link'` - Used when the element should be treated as a link.
* `'search'` - Used when the text field element should also be treated as a search field.
* `'image'` - Used when the element should be treated as an image. Can be combined with button or link, for example.
* `'keyboardkey'` - Used when the element acts as a keyboard key.
* `'text'` - Used when the element should be treated as static text that cannot change.
* `'adjustable'` - Used when an element can be "adjusted" (e.g. a slider).
* `'imagebutton'` - Used when the element should be treated as a button and is also an image.
* `'header'` - Used when an element acts as a header for a content section (e.g. the title of a navigation bar).
* `'summary'` - Used when an element can be used to provide a quick summary of current conditions in the app when the app first launches.
* `'alert'` - Used when an element contains important text to be presented to the user.
* `'checkbox'` - Used when an element represents a checkbox which can be checked, unchecked, or have mixed checked state.
* `'combobox'` - Used when an element represents a combo box, which allows the user to select among several choices.
* `'menu'` - Used when the component is a menu of choices.
* `'menubar'` - Used when a component is a container of multiple menus.
* `'menuitem'` - Used to represent an item within a menu.
* `'progressbar'` - Used to represent a component which indicates progress of a task.
* `'radio'` - Used to represent a radio button.
* `'radiogroup'` - Used to represent a group of radio buttons.
* `'scrollbar'` - Used to represent a scroll bar.
* `'spinbutton'` - Used to represent a button which opens a list of choices.
* `'switch'` - Used to represent a switch which can be turned on and off.
* `'tab'` - Used to represent a tab.
* `'tablist'` - Used to represent a list of tabs.
* `'timer'` - Used to represent a timer.
* `'toolbar'` - Used to represent a tool bar (a container of action buttons or components).
* `'grid'` - Used with ScrollView, VirtualizedList, FlatList, or SectionList to represent a grid. Adds the in/out of grid announcements to the android GridView.

| Type   |
| ------ |
| string |

***

### `accessibilityState`[​](#accessibilitystate "Direct link to accessibilitystate")

Describes the current state of a component to the user of an assistive technology.

See the [Accessibility guide](/docs/accessibility.md#accessibilitystate-ios-android) for more information.

| Type                                                                                             |
| ------------------------------------------------------------------------------------------------ |
| object: `{disabled: bool, selected: bool, checked: bool or 'mixed', busy: bool, expanded: bool}` |

***

### `accessibilityValue`[​](#accessibilityvalue "Direct link to accessibilityvalue")

Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars, it contains range information (minimum, current, and maximum).

See the [Accessibility guide](/docs/accessibility.md#accessibilityvalue-ios-android) for more information.

| Type                                                            |
| --------------------------------------------------------------- |
| object: `{min: number, max: number, now: number, text: string}` |

***

### `accessibilityViewIsModal`iOS[​](#accessibilityviewismodal-ios "Direct link to accessibilityviewismodal-ios")

A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Default is `false`.

See the [Accessibility guide](/docs/accessibility.md#accessibilityviewismodal-ios) for more information.

| Type |
| ---- |
| bool |

***

### `accessible`[​](#accessible "Direct link to accessible")

When `true`, indicates that the view is an accessibility element and discoverable by assistive technologies such as screen readers and hardware keyboards. By default, all the touchable elements are accessible.

See the [Accessibility guide](/docs/accessibility.md#accessible) for more information.

***

### `aria-busy`[​](#aria-busy "Direct link to aria-busy")

Indicates an element is being modified and that assistive technologies may want to wait until the changes are complete before informing the user about the update.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

***

### `aria-checked`[​](#aria-checked "Direct link to aria-checked")

Indicates the state of a checkable element. This field can either take a boolean or the "mixed" string to represent mixed checkboxes.

| Type             | Default |
| ---------------- | ------- |
| boolean, 'mixed' | false   |

***

### `aria-disabled`[​](#aria-disabled "Direct link to aria-disabled")

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

***

### `aria-expanded`[​](#aria-expanded "Direct link to aria-expanded")

Indicates whether an expandable element is currently expanded or collapsed.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

***

### `aria-hidden`[​](#aria-hidden "Direct link to aria-hidden")

Indicates whether the element is hidden from assistive technologies.

For example, in a window that contains sibling views `A` and `B`, setting `aria-hidden` to `true` on view `B` causes VoiceOver to ignore the `B` element and its children.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

***

### `aria-label`[​](#aria-label "Direct link to aria-label")

Defines a string value that labels an interactive element.

| Type   |
| ------ |
| string |

***

### `aria-labelledby`Android[​](#aria-labelledby-android "Direct link to aria-labelledby-android")

Identifies the element that labels the element it is applied to. The value of `aria-labelledby` should match the [`nativeID`](/docs/view.md#nativeid) of the related element:

tsx

```

Label for Input Field

```

| Type   |
| ------ |
| string |

***

### `aria-live`Android[​](#aria-live-android "Direct link to aria-live-android")

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

* **off** Accessibility services should not announce changes to this view.
* **polite** Accessibility services should announce changes to this view.
* **assertive** Accessibility services should interrupt ongoing speech to immediately announce changes to this view.

| Type                                     | Default |
| ---------------------------------------- | ------- |
| enum(`'assertive'`, `'off'`, `'polite'`) | `'off'` |

***

### `aria-modal`iOS[​](#aria-modal-ios "Direct link to aria-modal-ios")

Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Has precedence over the [`accessibilityViewIsModal`](#accessibilityviewismodal-ios) prop.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

***

### `aria-selected`[​](#aria-selected "Direct link to aria-selected")

Indicates whether a selectable element is currently selected or not.

| Type    |
| ------- |
| boolean |

### `aria-valuemax`[​](#aria-valuemax "Direct link to aria-valuemax")

Represents the maximum value for range-based components, such as sliders and progress bars. Has precedence over the `max` value in the `accessibilityValue` prop.

| Type   |
| ------ |
| number |

***

### `aria-valuemin`[​](#aria-valuemin "Direct link to aria-valuemin")

Represents the minimum value for range-based components, such as sliders and progress bars. Has precedence over the `min` value in the `accessibilityValue` prop.

| Type   |
| ------ |
| number |

***

### `aria-valuenow`[​](#aria-valuenow "Direct link to aria-valuenow")

Represents the current value for range-based components, such as sliders and progress bars. Has precedence over the `now` value in the `accessibilityValue` prop.

| Type   |
| ------ |
| number |

***

### `aria-valuetext`[​](#aria-valuetext "Direct link to aria-valuetext")

Represents the textual description of the component. Has precedence over the `text` value in the `accessibilityValue` prop.

| Type   |
| ------ |
| string |

***

### `collapsable`[​](#collapsable "Direct link to collapsable")

Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to `false` to disable this optimization and ensure that this `View` exists in the native view hierarchy.

| Type    | Default |
| ------- | ------- |
| boolean | true    |

***

### `collapsableChildren`[​](#collapsablechildren "Direct link to collapsablechildren")

Setting to false prevents direct children of the view from being removed from the native view hierarchy, similar to the effect of setting `collapsable={false}` on each child.

| Type    | Default |
| ------- | ------- |
| boolean | true    |

***

### `experimental_accessibilityOrder`[​](#experimental_accessibilityorder "Direct link to experimental_accessibilityorder")

Experimental 🧪

**This API is experimental.** Experimental APIs may contain bugs and are likely to change in a future version of React Native. Don't use them in production.

`experimental_accessibilityOrder` indicates the order in which an assistive technology focuses descendants of this `View`. This prop takes an array of strings where each string is a [`nativeID`](/docs/view.md#nativeid) of some descendant component whose order is being defined. This prop does not enable accessibility itself, each referenced component still needs to be accessible by setting [`accessible`](/docs/view.md#accessible) to true. This prop is both **nestable** and **exhaustive** meaning

* If `experimental_accessibilityOrder` contains a reference to some non-accessible component, it will focus the descendants of that component in the default order. Additionally, it can also contain a reference to other components that also have an `experimental_accessibilityOrder`.
* If some component that is otherwise accessible is not directly referenced in `experimental_accessibilityOrder`, or nested within some container directly referenced in `experimental_accessibilityOrder`, then it will not be accessible.

See the [accessibility guide](/docs/accessibility.md#experimental_accessibilityorder) for more information.

| Type             |
| ---------------- |
| array of strings |

***

### `focusable`Android[​](#focusable-android "Direct link to focusable-android")

Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.

| Type    |
| ------- |
| boolean |

***

### `hitSlop`[​](#hitslop "Direct link to hitslop")

This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels.

For example, if a touchable view has a height of 20 the touchable height can be extended to 40 with `hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}`

note

The touch area never extends past the parent view bounds, and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.

| Type                                                                 |
| -------------------------------------------------------------------- |
| object: `{top: number, left: number, bottom: number, right: number}` |

***

### `id`[​](#id "Direct link to id")

Used to locate this view from native classes. Has precedence over `nativeID` prop.

warning

This disables the 'layout-only view removal' optimization for this view!

| Type   |
| ------ |
| string |

***

### `importantForAccessibility`Android[​](#importantforaccessibility-android "Direct link to importantforaccessibility-android")

Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only.

Possible values:

* `'auto'` - The system determines whether the view is important for accessibility - default (recommended).
* `'yes'` - The view is important for accessibility.
* `'no'` - The view is not important for accessibility.
* `'no-hide-descendants'` - The view is not important for accessibility, nor are any of its descendant views.

See the [Android `importantForAccessibility` docs](https://developer.android.com/reference/android/R.attr.html#importantForAccessibility) for reference.

| Type                                             |
| ------------------------------------------------ |
| enum('auto', 'yes', 'no', 'no-hide-descendants') |

***

### `nativeID`[​](#nativeid "Direct link to nativeid")

Used to locate this view from native classes.

warning

This disables the 'layout-only view removal' optimization for this view!

| Type   |
| ------ |
| string |

***

### `needsOffscreenAlphaCompositing`[​](#needsoffscreenalphacompositing "Direct link to needsoffscreenalphacompositing")

Whether this `View` needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior. The default (`false`) falls back to drawing the component and its children with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value. This default may be noticeable and undesired in the case where the `View` you are setting an opacity on has multiple overlapping elements (e.g. multiple overlapping `View`s, or text and a background).

Rendering offscreen to preserve correct alpha behavior is extremely expensive and hard to debug for non-native developers, which is why it is not turned on by default. If you do need to enable this property for an animation, consider combining it with renderToHardwareTextureAndroid if the view **contents** are static (i.e. it doesn't need to be redrawn each frame). If that property is enabled, this View will be rendered off-screen once, saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.

| Type |
| ---- |
| bool |

***

### `nextFocusDown`Android[​](#nextfocusdown-android "Direct link to nextfocusdown-android")

Designates the next view to receive focus when the user navigates down. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusDown).

| Type   |
| ------ |
| number |

***

### `nextFocusForward`Android[​](#nextfocusforward-android "Direct link to nextfocusforward-android")

Designates the next view to receive focus when the user navigates forward. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusForward).

| Type   |
| ------ |
| number |

***

### `nextFocusLeft`Android[​](#nextfocusleft-android "Direct link to nextfocusleft-android")

Designates the next view to receive focus when the user navigates left. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusLeft).

| Type   |
| ------ |
| number |

***

### `nextFocusRight`Android[​](#nextfocusright-android "Direct link to nextfocusright-android")

Designates the next view to receive focus when the user navigates right. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusRight).

| Type   |
| ------ |
| number |

***

### `nextFocusUp`Android[​](#nextfocusup-android "Direct link to nextfocusup-android")

Designates the next view to receive focus when the user navigates up. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusUp).

| Type   |
| ------ |
| number |

***

### `onAccessibilityAction`[​](#onaccessibilityaction "Direct link to onaccessibilityaction")

Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform.

See the [Accessibility guide](/docs/accessibility.md#accessibility-actions) for more information.

| Type     |
| -------- |
| function |

***

### `onAccessibilityEscape`iOS[​](#onaccessibilityescape-ios "Direct link to onaccessibilityescape-ios")

When `accessible` is `true`, the system will invoke this function when the user performs the escape gesture.

| Type     |
| -------- |
| function |

***

### `onAccessibilityTap`iOS[​](#onaccessibilitytap-ios "Direct link to onaccessibilitytap-ios")

When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.

| Type     |
| -------- |
| function |

***

### `onLayout`[​](#onlayout "Direct link to onlayout")

Invoked on mount and on layout changes.

This event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress.

| Type                                   |
| -------------------------------------- |
| `({nativeEvent: LayoutEvent}) => void` |

***

### `onMagicTap`iOS[​](#onmagictap-ios "Direct link to onmagictap-ios")

When `accessible` is `true`, the system will invoke this function when the user performs the magic tap gesture.

| Type     |
| -------- |
| function |

***

### `onMoveShouldSetResponder`[​](#onmoveshouldsetresponder "Direct link to onmoveshouldsetresponder")

Does this view want to "claim" touch responsiveness? This is called for every touch move on the `View` when it is not the responder.

| Type                                     |
| ---------------------------------------- |
| `({nativeEvent: PressEvent}) => boolean` |

***

### `onMoveShouldSetResponderCapture`[​](#onmoveshouldsetrespondercapture "Direct link to onmoveshouldsetrespondercapture")

If a parent `View` wants to prevent a child `View` from becoming responder on a move, it should have this handler which returns `true`.

| Type                                     |
| ---------------------------------------- |
| `({nativeEvent: PressEvent}) => boolean` |

***

### `onResponderGrant`[​](#onrespondergrant "Direct link to onrespondergrant")

The View is now responding for touch events. This is the time to highlight and show the user what is happening.

On Android, return true from this callback to prevent any other native components from becoming responder until this responder terminates.

| Type                                             |
| ------------------------------------------------ |
| `({nativeEvent: PressEvent}) => void ｜ boolean` |

***

### `onResponderMove`[​](#onrespondermove "Direct link to onrespondermove")

The user is moving their finger.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

***

### `onResponderReject`[​](#onresponderreject "Direct link to onresponderreject")

Another responder is already active and will not release it to that `View` asking to be the responder.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

***

### `onResponderRelease`[​](#onresponderrelease "Direct link to onresponderrelease")

Fired at the end of the touch.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

***

### `onResponderTerminate`[​](#onresponderterminate "Direct link to onresponderterminate")

The responder has been taken from the `View`. Might be taken by other views after a call to `onResponderTerminationRequest`, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

***

### `onResponderTerminationRequest`[​](#onresponderterminationrequest "Direct link to onresponderterminationrequest")

Some other `View` wants to become responder and is asking this `View` to release its responder. Returning `true` allows its release.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: PressEvent}) => void` |

***

### `onStartShouldSetResponder`[​](#onstartshouldsetresponder "Direct link to onstartshouldsetresponder")

Does this view want to become responder on the start of a touch?

| Type                                     |
| ---------------------------------------- |
| `({nativeEvent: PressEvent}) => boolean` |

***

### `onStartShouldSetResponderCapture`[​](#onstartshouldsetrespondercapture "Direct link to onstartshouldsetrespondercapture")

If a parent `View` wants to prevent a child `View` from becoming responder on a touch start, it should have this handler which returns `true`.

| Type                                     |
| ---------------------------------------- |
| `({nativeEvent: PressEvent}) => boolean` |

***

### `pointerEvents`[​](#pointerevents "Direct link to pointerevents")

Controls whether the `View` can be the target of touch events.

* `'auto'`: The View can be the target of touch events.
* `'none'`: The View is never the target of touch events.
* `'box-none'`: The View is never the target of touch events but its subviews can be. It behaves like if the view had the following classes in CSS:

css

```

.box-none {
pointer-events: none;
}
.box-none \* {
pointer-events: auto;
}

```

* `'box-only'`: The view can be the target of touch events but its subviews cannot be. It behaves like if the view had the following classes in CSS:

css

```

.box-only {
pointer-events: auto;
}
.box-only \* {
pointer-events: none;
}

```

| Type                                         |
| -------------------------------------------- |
| enum('box-none', 'none', 'box-only', 'auto') |

***

### `ref`[​](#ref "Direct link to ref")

A ref setter that will be assigned an [element node](/docs/element-nodes.md) when mounted.

***

### `removeClippedSubviews`[​](#removeclippedsubviews "Direct link to removeclippedsubviews")

This is a reserved performance property exposed by `RCTView` and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have `overflow: hidden`, as should the containing view (or one of its superviews).

| Type |
| ---- |
| bool |

***

### `renderToHardwareTextureAndroid`Android[​](#rendertohardwaretextureandroid-android "Direct link to rendertohardwaretextureandroid-android")

Whether this `View` should render itself (and all of its children) into a single hardware texture on the GPU.

On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale: in those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.

| Type |
| ---- |
| bool |

***

### `role`[​](#role "Direct link to role")

`role` communicates the purpose of a component to the user of an assistive technology. Has precedence over the [`accessibilityRole`](/docs/view.md#accessibilityrole) prop.

| Type                                |
| ----------------------------------- |
| [Role](/docs/accessibility.md#role) |

***

### `shouldRasterizeIOS`iOS[​](#shouldrasterizeios-ios "Direct link to shouldrasterizeios-ios")

Whether this `View` should be rendered as a bitmap before compositing.

On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view and quickly composite it during each frame.

Rasterization incurs an off-screen drawing pass and the bitmap consumes memory. Test and measure when using this property.

| Type |
| ---- |
| bool |

***

### `style`[​](#style "Direct link to style")

| Type                                    |
| --------------------------------------- |
| [View Style](/docs/view-style-props.md) |

***

### `tabIndex`Android[​](#tabindex-android "Direct link to tabindex-android")

Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard. Supports the following values:

* `0` - View is focusable
* `-1` - View is not focusable

| Type        |
| ----------- |
| enum(0, -1) |

***

### `testID`[​](#testid "Direct link to testid")

Used to locate this view in end-to-end tests.

warning

This disables the 'layout-only view removal' optimization for this view!

| Type   |
| ------ |
| string |


---

# View Style Props

### Example[​](#example "Direct link to Example")

# Reference

## Props[​](#props "Direct link to Props")

### `backfaceVisibility`[​](#backfacevisibility "Direct link to backfacevisibility")

| Type                          |
| ----------------------------- |
| enum(`'visible'`, `'hidden'`) |

***

### `backgroundColor`[​](#backgroundcolor "Direct link to backgroundcolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `borderBottomColor`[​](#borderbottomcolor "Direct link to borderbottomcolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `borderBlockColor`[​](#borderblockcolor "Direct link to borderblockcolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `borderBlockEndColor`[​](#borderblockendcolor "Direct link to borderblockendcolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `borderBlockStartColor`[​](#borderblockstartcolor "Direct link to borderblockstartcolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `borderBottomEndRadius`[​](#borderbottomendradius "Direct link to borderbottomendradius")

| Type                              |
| --------------------------------- |
| number, string (percentage value) |

***

### `borderBottomLeftRadius`[​](#borderbottomleftradius "Direct link to borderbottomleftradius")

| Type                              |
| --------------------------------- |
| number, string (percentage value) |

***

### `borderBottomRightRadius`[​](#borderbottomrightradius "Direct link to borderbottomrightradius")

| Type                              |
| --------------------------------- |
| number, string (percentage value) |

***

### `borderBottomStartRadius`[​](#borderbottomstartradius "Direct link to borderbottomstartradius")

| Type                              |
| --------------------------------- |
| number, string (percentage value) |

***

### `borderStartEndRadius`[​](#borderstartendradius "Direct link to borderstartendradius")

| Type                              |
| --------------------------------- |
| number, string (percentage value) |

***

### `borderStartStartRadius`[​](#borderstartstartradius "Direct link to borderstartstartradius")

| Type                              |
| --------------------------------- |
| number, string (percentage value) |

***

### `borderEndEndRadius`[​](#borderendendradius "Direct link to borderendendradius")

| Type                              |
| --------------------------------- |
| number, string (percentage value) |

***

### `borderEndStartRadius`[​](#borderendstartradius "Direct link to borderendstartradius")

| Type                              |
| --------------------------------- |
| number, string (percentage value) |

***

### `borderBottomWidth`[​](#borderbottomwidth "Direct link to borderbottomwidth")

| Type   |
| ------ |
| number |

***

### `borderColor`[​](#bordercolor "Direct link to bordercolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `borderCurve`iOS[​](#bordercurve-ios "Direct link to bordercurve-ios")

On iOS 13+, it is possible to change the corner curve of borders.

| Type                               |
| ---------------------------------- |
| enum(`'circular'`, `'continuous'`) |

***

### `borderEndColor`[​](#borderendcolor "Direct link to borderendcolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `borderLeftColor`[​](#borderleftcolor "Direct link to borderleftcolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `borderLeftWidth`[​](#borderleftwidth "Direct link to borderleftwidth")

| Type   |
| ------ |
| number |

***

### `borderRadius`[​](#borderradius "Direct link to borderradius")

If the rounded border is not visible, try applying `overflow: 'hidden'` as well.

| Type                              |
| --------------------------------- |
| number, string (percentage value) |

***

### `borderRightColor`[​](#borderrightcolor "Direct link to borderrightcolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `borderRightWidth`[​](#borderrightwidth "Direct link to borderrightwidth")

| Type   |
| ------ |
| number |

***

### `borderStartColor`[​](#borderstartcolor "Direct link to borderstartcolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `borderStyle`[​](#borderstyle "Direct link to borderstyle")

| Type                                    |
| --------------------------------------- |
| enum(`'solid'`, `'dotted'`, `'dashed'`) |

***

### `borderTopColor`[​](#bordertopcolor "Direct link to bordertopcolor")

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `borderTopEndRadius`[​](#bordertopendradius "Direct link to bordertopendradius")

| Type                              |
| --------------------------------- |
| number, string (percentage value) |

***

### `borderTopLeftRadius`[​](#bordertopleftradius "Direct link to bordertopleftradius")

| Type                              |
| --------------------------------- |
| number, string (percentage value) |

***

### `borderTopRightRadius`[​](#bordertoprightradius "Direct link to bordertoprightradius")

| Type                              |
| --------------------------------- |
| number, string (percentage value) |

***

### `borderTopStartRadius`[​](#bordertopstartradius "Direct link to bordertopstartradius")

| Type                              |
| --------------------------------- |
| number, string (percentage value) |

***

### `borderTopWidth`[​](#bordertopwidth "Direct link to bordertopwidth")

| Type                              |
| --------------------------------- |
| number, string (percentage value) |

***

### `borderWidth`[​](#borderwidth "Direct link to borderwidth")

| Type   |
| ------ |
| number |

### `boxShadow`[​](#boxshadow "Direct link to boxshadow")

note

`boxShadow` is only available on the [New Architecture](/architecture/landing-page.md). Outset shadows are only supported on **Android 9+**. Inset shadows are only supported on **Android 10+**.

Adds a shadow effect to an element, with the ability to control the position, color, size, and blurriness of the shadow. This shadow either appears around the outside or inside of the border box of the element, depending on whether or not the shadow is *inset*. This is a spec-compliant implementation of the [web style prop of the same name](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow). Read more about all the arguments available in the [BoxShadowValue](/docs/boxshadowvalue.md) documentation.

These shadows can be composed together so that a single `boxShadow` can be comprised of multiple different shadows.

`boxShadow` takes either a string which mimics the [web syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow#syntax) or an array of [BoxShadowValue](/docs/boxshadowvalue.md) objects.

| Type                                      |
| ----------------------------------------- |
| array of BoxShadowValue objects \| string |

### `cursor`iOS[​](#cursor-ios "Direct link to cursor-ios")

On iOS 17+, Setting to `pointer` allows hover effects when a pointer (such as a trackpad or stylus on iOS, or the users' gaze on visionOS) is over the view.

| Type                        |
| --------------------------- |
| enum(`'auto'`, `'pointer'`) |

***

### `elevation`Android[​](#elevation-android "Direct link to elevation-android")

Sets the elevation of a view, using Android's underlying [elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation). This adds a drop shadow to the item and affects z-order for overlapping views. Only supported on Android 5.0+, has no effect on earlier versions.

| Type   |
| ------ |
| number |

***

### `filter`[​](#filter "Direct link to filter")

note

`filter` is only available on the [New Architecture](/architecture/landing-page.md)

Adds a graphical filter to the `View`. This filter is comprised of any number of *filter functions*, which each represent some atomic change to the graphical composition of the `View`. The complete list of valid filter functions is defined below. `filter` will apply to descendants of the `View` as well as the `View` itself. `filter` implies `overflow: hidden`, so descendants will be clipped to fit the bounds of the `View`.

The following filter functions work across all platforms:

* `brightness`: Changes the brightness of the `View`. Takes a non-negative number or percentage.
* `opacity`: Changes the opacity, or alpha, of the `View`. Takes a non-negative number or percentage.

note

Due to issues with performance and spec compliance, these are the only two filter functions available on iOS. There are plans to explore some potential workarounds using SwiftUI instead of UIKit for this implementation.

Android

The following filter functions work on Android only:

* `blur`: Blurs the `View` with a [Gaussian blur](https://en.wikipedia.org/wiki/Gaussian_blur), where the specified length represents the radius used in the blurring algorithm. Any non-negative DIP value is valid (no percents). The larger the value, the blurrier the result.
* `contrast`: Changes the contrast of the `View`. Takes a non-negative number or percentage.
* `dropShadow`: Adds a shadow around the alpha mask of the `View` (only non-zero alpha pixels in the `View` will cast a shadow). Takes an optional color representing the shadow color, and 2 or 3 lengths. If 2 lengths are specified they are interpreted as `offsetX` and `offsetY` which will translate the shadow in the X and Y dimensions respectfully. If a 3rd length is given it is interpreted as the standard deviation of the Gaussian blur used on the shadow - so a larger value will blur the shadow more. Read more about the arguments in [DropShadowValue](/docs/dropshadowvalue.md).
* `grayscale`: Converts the `View` to [grayscale](https://en.wikipedia.org/wiki/Grayscale) by the specified amount. Takes a non-negative number or percentage, where `1` or `100%` represents complete grayscale.
* `hueRotate`: Changes the [hue](https://en.wikipedia.org/wiki/Hue) of the View. The argument of this function defines the angle of a color wheel around which the hue will be rotated, so e.g., `360deg` would have no effect. This angle can have either `deg` or `rad` units.
* `invert`: Inverts the colors in the `View`. Takes a non-negative number or percentage, where `1` or `100%` represents complete inversion.
* `sepia`: Converts the `View` to [sepia](https://en.wikipedia.org/wiki/Sepia_\(color\)). Takes a non-negative number or percentage, where `1` or `100%` represents complete sepia.
* `saturate`: Changes the [saturation](https://en.wikipedia.org/wiki/Colorfulness) of the `View`. Takes a non-negative number or percentage.

note

`blur` and `dropShadow` are only supported on **Android 12+**

`filter` takes either an array of objects comprising of the above filter functions or a string which mimics the [web syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/filter#syntax).

| Type                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| array of objects: `{brightness: number\|string}`, `{opacity: number\|string}`, `{blur: number\|string}`, `{contrast: number\|string}`, `{dropShadow: DropShadowValue\|string}`, `{grayscale: number\|string}`, `{hueRotate: number\|string}`, `{invert: number\|string}`, `{sepia: number\|string}`, `{saturate: number\|string}` or string |

***

### `mixBlendMode`[​](#mixblendmode "Direct link to mixblendmode")

note

`mixBlendMode` is only available on the [New Architecture](/architecture/landing-page.md)

Controls how the `View` blends its colors with the other elements in its **stacking context**. Check out the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) for a full overview of each blending function.

For more granular control over what should be blending together see [isolation](/docs/layout-props.md#isolation).

##### mixBlendMode Values[​](#mixblendmode-values "Direct link to mixBlendMode Values")

* `normal`: The element is drawn on top of its background without blending.
* `multiply`: The source color is multiplied by the destination color and replaces the destination.
* `screen`: Multiplies the complements of the backdrop and source color values, then complements the result.
* `overlay`: Multiplies or screens the colors, depending on the backdrop color value.
* `darken`: Selects the darker of the backdrop and source colors.
* `lighten`: Selects the lighter of the backdrop and source colors.
* `color-dodge`: Brightens the backdrop color to reflect the source color. Painting with black produces no changes.
* `color-burn`: Darkens the backdrop color to reflect the source color. Painting with white produces no change.
* `hard-light`: Multiplies or screens the colors, depending on the source color value. The effect is similar to shining a harsh spotlight on the backdrop.
* `soft-light`: Darkens or lightens the colors, depending on the source color value. The effect is similar to shining a diffused spotlight on the backdrop.
* `difference`: Subtracts the darker of the two constituent colors from the lighter color.
* `exclusion`: Produces an effect similar to that of the Difference mode but lower in contrast.
* `hue`: Creates a color with the hue of the source color and the saturation and luminosity of the backdrop color.
* `saturation`: Creates a color with the saturation of the source color and the hue and luminosity of the backdrop color.
* `color`: Creates a color with the hue and saturation of the source color and the luminosity of the backdrop color. This preserves the gray levels of the backdrop and is useful for coloring monochrome images or tinting color images.
* `luminosity`: Creates a color with the luminosity of the source color and the hue and saturation of the backdrop color. This produces an inverse effect to that of the Color mode.

| Type                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| enum(`'normal'`, `'multiply'`, `'screen'`, `'overlay'`, `'darken'`, `'lighten'`, `'color-dodge'`, `'color-burn'`, `'hard-light'`, `'soft-light'`, `'difference'`, `'exclusion'`, `'hue'`, `'saturation'`, `'color'`, `'luminosity'`) |

***

### `opacity`[​](#opacity "Direct link to opacity")

| Type   |
| ------ |
| number |

***

### `outlineColor`[​](#outlinecolor "Direct link to outlinecolor")

note

`outlineColor` is only available on the [New Architecture](/architecture/landing-page.md)

Sets the color of an element's outline. See [web documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color) for more details.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `outlineOffset`[​](#outlineoffset "Direct link to outlineoffset")

note

`outlineOffset` is only available on the [New Architecture](/architecture/landing-page.md)

Sets the amount of space between an outline and the bounds of an element. Does not affect layout. See [web documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset) for more details.

| Type   |
| ------ |
| number |

***

### `outlineStyle`[​](#outlinestyle "Direct link to outlinestyle")

note

`outlineStyle` is only available on the [New Architecture](/architecture/landing-page.md)

Sets the style of an element's outline. See [web documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style) for more details.

| Type                                    |
| --------------------------------------- |
| enum(`'solid'`, `'dotted'`, `'dashed'`) |

***

### `outlineWidth`[​](#outlinewidth "Direct link to outlinewidth")

note

`outlineWidth` is only available on the [New Architecture](/architecture/landing-page.md)

The width of an outline which is drawn around an element, outside the border. Does not affect layout. See [web documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width) for more details.

| Type   |
| ------ |
| number |

***

### `pointerEvents`[​](#pointerevents "Direct link to pointerevents")

Controls whether the `View` can be the target of touch events.

* `'auto'`: The View can be the target of touch events.
* `'none'`: The View is never the target of touch events.
* `'box-none'`: The View is never the target of touch events but its subviews can be.
* `'box-only'`: The view can be the target of touch events but its subviews cannot be.

| Type                                                  |
| ----------------------------------------------------- |
| enum(`'auto'`, `'box-none'`, `'box-only'`, `'none'` ) |


---

# ViewToken Object Type

`ViewToken` object is returned as one of the properties in the `onViewableItemsChanged` callback (for example, in the [FlatList](/docs/flatlist.md) component). It is exported by [`ViewabilityHelper.js`](https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Lists/ViewabilityHelper.js).

## Example[​](#example "Direct link to Example")

js

```

{
item: {key: "key-12"},
key: "key-12",
index: 11,
isViewable: true
}

```

## Keys and values[​](#keys-and-values "Direct link to Keys and values")

### `index`[​](#index "Direct link to index")

Unique numeric identifier assigned to the data element.

| Type   | Optional |
| ------ | -------- |
| number | Yes      |

### `isViewable`[​](#isviewable "Direct link to isviewable")

Specifies if at least some part of list element is visible in the viewport.

| Type    | Optional |
| ------- | -------- |
| boolean | No       |

### `item`[​](#item "Direct link to item")

Item data

| Type | Optional |
| ---- | -------- |
| any  | No       |

### `key`[​](#key "Direct link to key")

Key identifier assigned to the data element extracted to the top level.

| Type   | Optional |
| ------ | -------- |
| string | No       |

### `section`[​](#section "Direct link to section")

Item section data when used with `SectionList`.

| Type | Optional |
| ---- | -------- |
| any  | Yes      |

## Used by[​](#used-by "Direct link to Used by")

* [`FlatList`](/docs/flatlist.md)
* [`SectionList`](/docs/sectionlist.md)
* [`VirtualizedList`](/docs/virtualizedlist.md)


---

# VirtualizedList

Base implementation for the more convenient [`<FlatList>`](/docs/flatlist.md) and [`<SectionList>`](/docs/sectionlist.md) components, which are also better documented. In general, this should only really be used if you need more flexibility than [`FlatList`](/docs/flatlist.md) provides, e.g. for use with immutable data instead of plain arrays.

Virtualization massively improves memory consumption and performance of large lists by maintaining a finite render window of active items and replacing all items outside of the render window with appropriately sized blank space. The window adapts to scrolling behavior, and items are rendered incrementally with low-pri (after any running interactions) if they are far from the visible area, or with hi-pri otherwise to minimize the potential of seeing blank space.

## Example[​](#example "Direct link to Example")

* TypeScript
* JavaScript

***

Some caveats:

* Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.
* This is a `PureComponent` which means that it will not re-render if `props` are shallow-equal. Make sure that everything your `renderItem` function depends on is passed as a prop (e.g. `extraData`) that is not `===` after updates, otherwise your UI may not update on changes. This includes the `data` prop and parent component state.
* In order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it's possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.
* By default, the list looks for a `key` prop on each item and uses that for the React key. Alternatively, you can provide a custom `keyExtractor` prop.

***

# Reference

## Props[​](#props "Direct link to Props")

### [ScrollView Props](/docs/scrollview.md#props)[​](#scrollview-props "Direct link to scrollview-props")

Inherits [ScrollView Props](/docs/scrollview.md#props).

***

### `data`[​](#data "Direct link to data")

Opaque data type passed to `getItem` and `getItemCount` to retrieve items.

| Type |
| ---- |
| any  |

***

### Require&#x64;**`getItem`**[​](#required-getitem "Direct link to required-getitem")

tsx

```

(data: any, index: number) => any;

```

A generic accessor for extracting an item from any sort of data blob.

| Type     |
| -------- |
| function |

***

### Require&#x64;**`getItemCount`**[​](#required-getitemcount "Direct link to required-getitemcount")

tsx

```

(data: any) => number;

```

Determines how many items are in the data blob.

| Type     |
| -------- |
| function |

***

### Require&#x64;**`renderItem`**[​](#required-renderitem "Direct link to required-renderitem")

tsx

```

(info: any) => ?React.Element

```

Takes an item from `data` and renders it into the list

| Type     |
| -------- |
| function |

***

### `CellRendererComponent`[​](#cellrenderercomponent "Direct link to cellrenderercomponent")

CellRendererComponent allows customizing how cells rendered by `renderItem`/`ListItemComponent` are wrapped when placed into the underlying ScrollView. This component must accept event handlers which notify VirtualizedList of changes within the cell.

| Type                                     |
| ---------------------------------------- |
| `React.ComponentType<CellRendererProps>` |

***

### `ItemSeparatorComponent`[​](#itemseparatorcomponent "Direct link to itemseparatorcomponent")

Rendered in between each item, but not at the top or bottom. By default, `highlighted` and `leadingItem` props are provided. `renderItem` provides `separators.highlight`/`unhighlight` which will update the `highlighted` prop, but you can also add custom props with `separators.updateProps`. Can be a React Component (e.g. `SomeComponent`), or a React element (e.g. `<SomeComponent />`).

| Type                         |
| ---------------------------- |
| component, function, element |

***

### `ListEmptyComponent`[​](#listemptycomponent "Direct link to listemptycomponent")

Rendered when the list is empty. Can be a React Component (e.g. `SomeComponent`), or a React element (e.g. `<SomeComponent />`).

| Type               |
| ------------------ |
| component, element |

***

### `ListItemComponent`[​](#listitemcomponent "Direct link to listitemcomponent")

Each data item is rendered using this element. Can be a React Component Class, or a render function.

| Type                |
| ------------------- |
| component, function |

***

### `ListFooterComponent`[​](#listfootercomponent "Direct link to listfootercomponent")

Rendered at the bottom of all the items. Can be a React Component (e.g. `SomeComponent`), or a React element (e.g. `<SomeComponent />`).

| Type               |
| ------------------ |
| component, element |

***

### `ListFooterComponentStyle`[​](#listfootercomponentstyle "Direct link to listfootercomponentstyle")

Styling for internal View for `ListFooterComponent`.

| Type          | Required |
| ------------- | -------- |
| ViewStyleProp | No       |

***

### `ListHeaderComponent`[​](#listheadercomponent "Direct link to listheadercomponent")

Rendered at the top of all the items. Can be a React Component (e.g. `SomeComponent`), or a React element (e.g. `<SomeComponent />`).

| Type               |
| ------------------ |
| component, element |

***

### `ListHeaderComponentStyle`[​](#listheadercomponentstyle "Direct link to listheadercomponentstyle")

Styling for internal View for `ListHeaderComponent`.

| Type                                    |
| --------------------------------------- |
| [View Style](/docs/view-style-props.md) |

***

### `debug`[​](#debug "Direct link to debug")

`debug` will turn on extra logging and visual overlays to aid with debugging both usage and implementation, but with a significant perf hit.

| Type    |
| ------- |
| boolean |

***

### 🗑️ `disableVirtualization`[​](#️-disablevirtualization "Direct link to ️-disablevirtualization")

Deprecated

Virtualization provides significant performance and memory optimizations, but fully unmounts react instances that are outside of the render window. You should only need to disable this for debugging purposes.

| Type    |
| ------- |
| boolean |

***

### `extraData`[​](#extradata "Direct link to extradata")

A marker property for telling the list to re-render (since it implements `PureComponent`). If any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the `data` prop, stick it here and treat it immutably.

| Type |
| ---- |
| any  |

***

### `getItemLayout`[​](#getitemlayout "Direct link to getitemlayout")

tsx

```

(
data: any,
index: number,
) => {length: number, offset: number, index: number}

```

| Type     |
| -------- |
| function |

***

### `horizontal`[​](#horizontal "Direct link to horizontal")

If `true`, renders items next to each other horizontally instead of stacked vertically.

| Type    |
| ------- |
| boolean |

***

### `initialNumToRender`[​](#initialnumtorender "Direct link to initialnumtorender")

How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.

| Type   | Default |
| ------ | ------- |
| number | `10`    |

***

### `initialScrollIndex`[​](#initialscrollindex "Direct link to initialscrollindex")

Instead of starting at the top with the first item, start at `initialScrollIndex`. This disables the "scroll to top" optimization that keeps the first `initialNumToRender` items always rendered and immediately renders the items starting at this initial index. Requires `getItemLayout` to be implemented.

| Type   |
| ------ |
| number |

***

### `inverted`[​](#inverted "Direct link to inverted")

Reverses the direction of scroll. Uses scale transforms of `-1`.

| Type    |
| ------- |
| boolean |

***

### `keyExtractor`[​](#keyextractor "Direct link to keyextractor")

tsx

```

(item: any, index: number) => string;

```

Used to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks `item.key`, then `item.id`, and then falls back to using the index, like React does.

| Type     |
| -------- |
| function |

***

### `maxToRenderPerBatch`[​](#maxtorenderperbatch "Direct link to maxtorenderperbatch")

The maximum number of items to render in each incremental render batch. The more rendered at once, the better the fill rate, but responsiveness may suffer because rendering content may interfere with responding to button taps or other interactions.

| Type   |
| ------ |
| number |

***

### `onEndReached`[​](#onendreached "Direct link to onendreached")

Called once when the scroll position gets within `onEndReachedThreshold` from the logical end of the list.

| Type                                        |
| ------------------------------------------- |
| `(info: {distanceFromEnd: number}) => void` |

***

### `onEndReachedThreshold`[​](#onendreachedthreshold "Direct link to onendreachedthreshold")

How far from the end (in units of visible length of the list) the trailing edge of the list must be from the end of the content to trigger the `onEndReached` callback. Thus, a value of 0.5 will trigger `onEndReached` when the end of the content is within half the visible length of the list.

| Type   | Default |
| ------ | ------- |
| number | `2`     |

***

### `onRefresh`[​](#onrefresh "Direct link to onrefresh")

tsx

```

() => void;

```

If provided, a standard `RefreshControl` will be added for "Pull to Refresh" functionality. Make sure to also set the `refreshing` prop correctly.

| Type     |
| -------- |
| function |

***

### `onScrollToIndexFailed`[​](#onscrolltoindexfailed "Direct link to onscrolltoindexfailed")

tsx

```

(info: {
index: number,
highestMeasuredFrameIndex: number,
averageItemLength: number,
}) => void;

```

Used to handle failures when scrolling to an index that has not been measured yet. Recommended action is to either compute your own offset and `scrollTo` it, or scroll as far as possible and then try again after more items have been rendered.

| Type     |
| -------- |
| function |

***

### `onStartReached`[​](#onstartreached "Direct link to onstartreached")

Called once when the scroll position gets within `onStartReachedThreshold` from the logical start of the list.

| Type                                          |
| --------------------------------------------- |
| `(info: {distanceFromStart: number}) => void` |

***

### `onStartReachedThreshold`[​](#onstartreachedthreshold "Direct link to onstartreachedthreshold")

How far from the start (in units of visible length of the list) the leading edge of the list must be from the start of the content to trigger the `onStartReached` callback. Thus, a value of 0.5 will trigger `onStartReached` when the start of the content is within half the visible length of the list.

| Type   | Default |
| ------ | ------- |
| number | `2`     |

***

### `onViewableItemsChanged`[​](#onviewableitemschanged "Direct link to onviewableitemschanged")

Called when the viewability of rows changes, as defined by the `viewabilityConfig` prop.

| Type                                                                     |
| ------------------------------------------------------------------------ |
| `(callback: {changed: ViewToken[], viewableItems: ViewToken[]}) => void` |

***

### `persistentScrollbar`[​](#persistentscrollbar "Direct link to persistentscrollbar")

| Type |
| ---- |
| bool |

***

### `progressViewOffset`[​](#progressviewoffset "Direct link to progressviewoffset")

Set this when offset is needed for the loading indicator to show correctly.

| Type   |
| ------ |
| number |

***

### `refreshControl`[​](#refreshcontrol "Direct link to refreshcontrol")

A custom refresh control element. When set, it overrides the default `<RefreshControl>` component built internally. The onRefresh and refreshing props are also ignored. Only works for vertical VirtualizedList.

| Type    |
| ------- |
| element |

***

### `refreshing`[​](#refreshing "Direct link to refreshing")

Set this true while waiting for new data from a refresh.

| Type    |
| ------- |
| boolean |

***

### `removeClippedSubviews`[​](#removeclippedsubviews "Direct link to removeclippedsubviews")

warning

Using this property may lead to bugs (missing content) in some circumstances - use at your own risk.

When `true`, offscreen child views are removed from their native backing superview when offscreen. This may improve scroll performance for large lists. On Android the default value is `true`.

| Type    |
| ------- |
| boolean |

***

### `renderScrollComponent`[​](#renderscrollcomponent "Direct link to renderscrollcomponent")

tsx

```

(props: object) => element;

```

Render a custom scroll component, e.g. with a differently styled `RefreshControl`.

| Type     |
| -------- |
| function |

***

### `viewabilityConfig`[​](#viewabilityconfig "Direct link to viewabilityconfig")

See `ViewabilityHelper.js` for flow type and further documentation.

| Type              |
| ----------------- |
| ViewabilityConfig |

***

### `viewabilityConfigCallbackPairs`[​](#viewabilityconfigcallbackpairs "Direct link to viewabilityconfigcallbackpairs")

List of `ViewabilityConfig`/`onViewableItemsChanged` pairs. A specific `onViewableItemsChanged` will be called when its corresponding `ViewabilityConfig`'s conditions are met. See `ViewabilityHelper.js` for flow type and further documentation.

| Type                                   |
| -------------------------------------- |
| array of ViewabilityConfigCallbackPair |

***

### `updateCellsBatchingPeriod`[​](#updatecellsbatchingperiod "Direct link to updatecellsbatchingperiod")

Amount of time between low-pri item render batches, e.g. for rendering items quite a ways off screen. Similar fill rate/responsiveness tradeoff as `maxToRenderPerBatch`.

| Type   |
| ------ |
| number |

***

### `windowSize`[​](#windowsize "Direct link to windowsize")

Determines the maximum number of items rendered outside of the visible area, in units of visible lengths. So if your list fills the screen, then `windowSize={21}` (the default) will render the visible screen area plus up to 10 screens above and 10 below the viewport. Reducing this number will reduce memory consumption and may improve performance, but will increase the chance that fast scrolling may reveal momentary blank areas of unrendered content.

| Type   |
| ------ |
| number |

## Methods[​](#methods "Direct link to Methods")

### `flashScrollIndicators()`[​](#flashscrollindicators "Direct link to flashscrollindicators")

tsx

```

flashScrollIndicators();

```

***

### `getScrollableNode()`[​](#getscrollablenode "Direct link to getscrollablenode")

tsx

```

getScrollableNode(): any;

```

***

### `getScrollRef()`[​](#getscrollref "Direct link to getscrollref")

tsx

```

getScrollRef():
| React.ElementRef
| React.ElementRef
| null;

```

***

### `getScrollResponder()`[​](#getscrollresponder "Direct link to getscrollresponder")

tsx

```

getScrollResponder () => ScrollResponderMixin | null;

```

Provides a handle to the underlying scroll responder. Note that `this._scrollRef` might not be a `ScrollView`, so we need to check that it responds to `getScrollResponder` before calling it.

***

### `scrollToEnd()`[​](#scrolltoend "Direct link to scrolltoend")

tsx

```

scrollToEnd(params?: {animated?: boolean});

```

Scrolls to the end of the content. May be janky without `getItemLayout` prop.

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| params | object |

Valid `params` keys are:

* `'animated'` (boolean) - Whether the list should do an animation while scrolling. Defaults to `true`.

***

### `scrollToIndex()`[​](#scrolltoindex "Direct link to scrolltoindex")

tsx

```

scrollToIndex(params: {
index: number;
animated?: boolean;
viewOffset?: number;
viewPosition?: number;
});

```

Valid `params` consist of:

* 'index' (number). Required.
* 'animated' (boolean). Optional.
* 'viewOffset' (number). Optional.
* 'viewPosition' (number). Optional.

***

### `scrollToItem()`[​](#scrolltoitem "Direct link to scrolltoitem")

tsx

```

scrollToItem(params: {
item: ItemT;
animated?: boolean;
viewOffset?: number;
viewPosition?: number;
);

```

Valid `params` consist of:

* 'item' (Item). Required.
* 'animated' (boolean). Optional.
* 'viewOffset' (number). Optional.
* 'viewPosition' (number). Optional.

***

### `scrollToOffset()`[​](#scrolltooffset "Direct link to scrolltooffset")

tsx

```

scrollToOffset(params: {
offset: number;
animated?: boolean;
});

```

Scroll to a specific content pixel offset in the list.

Param `offset` expects the offset to scroll to. In case of `horizontal` is true, the offset is the x-value, in any other case the offset is the y-value.

Param `animated` (`true` by default) defines whether the list should do an animation while scrolling.


---

# VirtualView 🧪

Experimental 🧪

**This API is experimental.** Experimental APIs may contain bugs and are likely to change in a future version of React Native. Don't use them in production.

`VirtualView` is a core component that behaves similar to [`View`](/docs/view.md).

When it is the descendent of a [`ScrollView`](/docs/scrollview.md), it gains additional virtualization capabilities to reduce its memory footprint when obscured by the scroll viewport.

tsx

```

```
Hello world!
```

```

A `VirtualView` without an ancestor[`ScrollView`](/docs/scrollview.md) does not have any virtualization capabilities.

## Virtualization[​](#virtualization "Direct link to Virtualization")

When a `VirtualView` leaves the visible region of a [`ScrollView`](/docs/scrollview.md), it becomes hidden. When hidden, a `VirtualView` will cache its most recent layout and may unmount its children — a process called virtualization.

When a `VirtualView` returns to the visible region of a [`ScrollView`](/docs/scrollview.md), it becomes visible. When visible, its children are *guaranteed* to be rendered. This guarantee is maintained by blocking the main thread from rendering the next frame that would reveal the `VirtualView` until its children can be rendered.

![Diagram of VirtualView modes and thresholds.](/docs/assets/d_virtualview_modes.svg)

note

In future developments, a hidden `VirtualView` may instead render its children in an [`<Activity mode="hidden">`](https://react.dev/reference/react/Activity) to preserve state for as long as possible while balancing memory overhead.

### Blocking the Main Thread[​](#blocking-the-main-thread "Direct link to Blocking the Main Thread")

This is the first time in React Native’s feature set where rendering a React component can block the main thread. This is a new capability enabled by the [New Architecture](/architecture/landing-page.md)!

Blocking the main thread can provide a better user experience by preventing flashes of blank frames that sometimes occur when using components like [`FlatList`](/docs/flatlist.md). It can also enable better performance by using main thread priority, which is also typically run on higher performance cores.

However, blocking the main thread also comes with tradeoffs. If an update operation, such as mounting the children of a `VirtualView`, takes too long to finish, it can now drop frames. Dropping more than a couple frames can lead to a worse user experience by making the app feel sluggish and non-responsive. Dropping too many frames may cause the operating system to display a modal indicating the app is not responsive, or it may even terminate your app!

warning

DevTools does not currently support debugging JavaScript on the main thread. This means if you are using breakpoints to debug code called from `onModeChange`, that is executed on the main thread, your debugger may freeze.

Debugging all other parts of your JavaScript code should work as expected. We are working on closing this gap before releasing `VirtualView` to stable channels of React Native.

### Prerendering[​](#prerendering "Direct link to Prerendering")

`VirtualView` enables you to benefit from main thread rendering while mitigating the disadvantages of dropped frames by rendering earlier before it is needed. This is called “prerendering”.

By default, each `VirtualView` will prerender its children when it approaches the visible region of a [`ScrollView`](/docs/scrollview.md). When this happens, its children will be rendered on a background thread at a lower priority (using a [transition](https://react.dev/reference/react/startTransition)). This ensures that the main thread and React are available to handle other critical user interactions at a higher priority.

note

`VirtualView`'s prerender logic is not currently configurable. The algorithm for determining this is undergoing active design iteration and is likely to change in a future release.

***

## Props[​](#props "Direct link to Props")

### `children`[​](#children "Direct link to children")

Content to render inside this `VirtualView`.

| Type                              |
| --------------------------------- |
| [React Node](/docs/react-node.md) |

***

### `onModeChange`[​](#onmodechange "Direct link to onmodechange")

Invoked when the `VirtualView` changes how it renders its children.

If a callback is supplied, it may be invoked from different threads and priorities depending on the internal state change. This can be detected by checking the `mode` property on the event:

* If `mode` is [`VirtualViewMode.Visible`](#virtualviewmode), the callback is being invoked from the main thread with immediate priority.
* If `mode` is [`VirtualViewMode.Prerender`](#virtualviewmode) or [`VirtualViewMode.Hidden`](#virtualviewmode), the callback is being invoked from a background thread with transition priority.

The callback will never be invoked consecutively with the same `mode` value. However, there are few guarantees about sequencing of events. Also, the callback may never be invoked with [`VirtualViewMode.Visible`](#virtualviewmode) even if it becomes visible, if the children were successfully prerendered.

| Type                        |
| --------------------------- |
| `(ModeChangeEvent) => void` |

***

### `nativeID`[​](#nativeid "Direct link to nativeid")

An identifier for locating this view from native classes.

| Type   |
| ------ |
| string |

***

### `style`[​](#style "Direct link to style")

| Type                                    |
| --------------------------------------- |
| [View Style](/docs/view-style-props.md) |

***

## Type Definitions[​](#type-definitions "Direct link to Type Definitions")

### `ModeChangeEvent`[​](#modechangeevent "Direct link to modechangeevent")

Argument supplied to [`onModeChange`](#onmodechange).

| Type   |
| ------ |
| object |

**Properties:**

| Name          | Type                                | Description                                                                                       |
| ------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| mode          | [VirtualViewMode](#virtualviewmode) | New mode of the `VirtualView`.                                                                    |
| target        | element                             | `VirtualView` emitting this event.                                                                |
| targetRect    | [Rect](/docs/rect.md)               | Layout of `target` relative to the nearest ancestor `ScrollView`.                                 |
| thresholdRect | [Rect](/docs/rect.md)               | Layout of the threshold that triggered this event, relative to the nearest ancestor `ScrollView`. |

note

For example, if a `VirtualView` enters the visible region of a [`ScrollView`](/docs/scrollview.md)...

* `mode` would be [`VirtualViewMode.Visible`](#virtualviewmode)
* `thresholdRect` would describe the visible viewport of the nearest ancestor [`ScrollView`](/docs/scrollview.md)
* `targetRect` would be the layout of `target` that overlaps with `thresholdRect` (i.e. it is within the visible region of the [`ScrollView`](/docs/scrollview.md))

### `VirtualViewMode`[​](#virtualviewmode "Direct link to virtualviewmode")

Possible modes of a `VirtualView`.

| Name      | Value | Description                                    |
| --------- | ----- | ---------------------------------------------- |
| Visible   | `0`   | Target view is visible.                        |
| Prerender | `1`   | Target view is hidden, but can be prerendered. |
| Hidden    | `2`   | Target view is hidden.                         |

***

## Static Methods[​](#static-methods "Direct link to Static Methods")

### `createHiddenVirtualView()`[​](#createhiddenvirtualview "Direct link to createhiddenvirtualview")

tsx

```

static createHiddenVirtualView(height: number): typeof VirtualView;

```

`VirtualView` initially renders its children as visible, even if it is initially obscured by an ancestor [`ScrollView`](/docs/scrollview.md). This is because when a component is initially rendered, the presence of an ancestor [`ScrollView`](/docs/scrollview.md) — let alone its size and scroll position — are unknown.

For advanced use cases, `createHiddenVirtualView()` creates a component that renders an initially hidden `VirtualView` with the supplied estimated layout.

tsx

```

const HiddenVirtualView = createHiddenVirtualView(100);

```
Hello world!
```

;

```

**Parameters:**

| Name           | Type   | Description                                            |
| -------------- | ------ | ------------------------------------------------------ |
| heightRequired | number | Estimated height of initially rendering `VirtualView`. |


---

```
