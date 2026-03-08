# Reference

## Props[​](#props "Direct link to Props")

### Require&#x64;**`onPress`**[​](#requiredonpress "Direct link to requiredonpress")

Handler to be called when the user taps the button.

| Type                          |
| ----------------------------- |
| `({nativeEvent: PressEvent})` |

***

### Require&#x64;**`title`**[​](#requiredtitle "Direct link to requiredtitle")

Text to display inside the button. On Android the given title will be converted to the uppercased form.

| Type   |
| ------ |
| string |

***

### `accessibilityLabel`[​](#accessibilitylabel "Direct link to accessibilitylabel")

Text to display for blindness accessibility features.

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

### `accessibilityActions`[​](#accessibilityactions "Direct link to accessibilityactions")

Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. The `accessibilityActions` property should contain a list of action objects. Each action object should contain the field name and label.

See the [Accessibility guide](/docs/accessibility.md#accessibility-actions) for more information.

| Type  | Required |
| ----- | -------- |
| array | No       |

***

### `onAccessibilityAction`[​](#onaccessibilityaction "Direct link to onaccessibilityaction")

Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform.

See the [Accessibility guide](/docs/accessibility.md#accessibility-actions) for more information.

| Type     | Required |
| -------- | -------- |
| function | No       |

***

### `color`[​](#color "Direct link to color")

Color of the text (iOS), or background color of the button (Android).

| Type                     | Default                             |
| ------------------------ | ----------------------------------- |
| [color](/docs/colors.md) | `'#2196F3'`Android\*\*\*`'#007AFF'`iOS |

***

### `disabled`[​](#disabled "Direct link to disabled")

If `true`, disable all interactions for this component.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `hasTVPreferredFocus`TV[​](#hastvpreferredfocus-tv "Direct link to hastvpreferredfocus-tv")

TV preferred focus.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `nextFocusDown`AndroidTV[​](#nextfocusdown-androidtv "Direct link to nextfocusdown-androidtv")

Designates the next view to receive focus when the user navigates down. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusDown).

| Type   |
| ------ |
| number |

***

### `nextFocusForward`AndroidTV[​](#nextfocusforward-androidtv "Direct link to nextfocusforward-androidtv")

Designates the next view to receive focus when the user navigates forward. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusForward).

| Type   |
| ------ |
| number |

***

### `nextFocusLeft`AndroidTV[​](#nextfocusleft-androidtv "Direct link to nextfocusleft-androidtv")

Designates the next view to receive focus when the user navigates left. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusLeft).

| Type   |
| ------ |
| number |

***

### `nextFocusRight`AndroidTV[​](#nextfocusright-androidtv "Direct link to nextfocusright-androidtv")

Designates the next view to receive focus when the user navigates right. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusRight).

| Type   |
| ------ |
| number |

***

### `nextFocusUp`AndroidTV[​](#nextfocusup-androidtv "Direct link to nextfocusup-androidtv")

Designates the next view to receive focus when the user navigates up. See the [Android documentation](https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusUp).

| Type   |
| ------ |
| number |

***

### `testID`[​](#testid "Direct link to testid")

Used to locate this view in end-to-end tests.

| Type   |
| ------ |
| string |

***

### `touchSoundDisabled`Android[​](#touchsounddisabled-android "Direct link to touchsounddisabled-android")

If `true`, doesn't play system sound on touch.

| Type    | Default |
| ------- | ------- |
| boolean | `false` |

***

# ❌ CheckBox

Removed from React Native

Use one of the [community packages](https://reactnative.directory/?search=checkbox) instead.

***

# ❌ Clipboard

Removed from React Native

Use one of the [community packages](https://reactnative.directory/?search=clipboard) instead.

***
