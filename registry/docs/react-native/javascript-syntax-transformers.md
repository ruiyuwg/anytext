## JavaScript Syntax Transformers[​](#javascript-syntax-transformers "Direct link to JavaScript Syntax Transformers")

Syntax transformers make writing code more enjoyable by allowing you to use new JavaScript syntax without having to wait for support on all interpreters.

React Native ships with the [Babel JavaScript compiler](https://babeljs.io). Check [Babel documentation](https://babeljs.io/docs/plugins/#transform-plugins) on its supported transformations for more details.

A full list of React Native's enabled transformations can be found in [@react-native/babel-preset](https://github.com/facebook/react-native/tree/main/packages/react-native-babel-preset).

| Transformation                                                                                              | Code                                                                             |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ECMAScript 5                                                                                                |                                                                                  |
| Reserved Words                                                                                              | \`\`\`
promise.catch(function() {...});

````|
| ECMAScript 2015 (ES6)                                                                                       |                                                                                  |
| [Arrow functions](https://babeljs.io/docs/learn-es2015/#arrows)                                             | ```
<C onPress={() => this.setState({pressed: true})} />
```                       |
| [Block scoping](https://babeljs.io/docs/learn-es2015/#let-const)                                            | ```
let greeting = 'hi';
```                                                       |
| [Call spread](https://babeljs.io/docs/learn-es2015/#default-rest-spread)                                    | ```
Math.max(...array);
```                                                        |
| [Classes](https://babeljs.io/docs/learn-es2015/#classes)                                                    | ```
class C extends React.Component {render() { return ; }}
```            |
| [Computed Properties](https://babeljs.io/docs/learn-es2015/#enhanced-object-literals)                       | ```
const key = 'abc'; const obj = {[key]: 10};
```                                |
| [Constants](https://babeljs.io/docs/learn-es2015/#let-const)                                                | ```
const answer = 42;
```                                                         |
| [Destructuring](https://babeljs.io/docs/learn-es2015/#destructuring)                                        | ```
const {isActive, style} = this.props;
```                                      |
| [for…of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)             | ```
for (var num of [1, 2, 3]) {...};
```                                          |
| [Function Name](https://babeljs.io/docs/en/babel-plugin-transform-function-name)                            | ```
let number = x => x;
```                                                       |
| [Literals](https://babeljs.io/docs/en/babel-plugin-transform-literals)                                      | ```
const b = 0b11; const o = 0o7; const u = 'Hello\u{000A}\u{0009}!';
```         |
| [Modules](https://babeljs.io/docs/learn-es2015/#modules)                                                    | ```
import React, {Component} from 'react';
```                                    |
| [Object Concise Method](https://babeljs.io/docs/learn-es2015/#enhanced-object-literals)                     | ```
const obj = {method() { return 10; }};
```                                     |
| [Object Short Notation](https://babeljs.io/docs/learn-es2015/#enhanced-object-literals)                     | ```
const name = 'vjeux'; const obj = {name};
```                                  |
| [Parameters](https://babeljs.io/docs/en/babel-plugin-transform-parameters)                                  | ```
function test(x = 'hello', {a, b}, ...args) {}
```                             |
| [Rest Params](https://github.com/sebmarkbage/ecmascript-rest-spread)                                        | ```
function(type, ...args) {};
```                                                |
| [Shorthand Properties](https://babeljs.io/docs/en/babel-plugin-transform-shorthand-properties)              | ```
const o = {a, b, c};
```                                                       |
| [Sticky Regex](https://babeljs.io/docs/en/babel-plugin-transform-sticky-regex)                              | ```
const a = /o+/y;
```                                                           |
| [Template Literals](https://babeljs.io/docs/learn-es2015/#template-strings)                                 | ```
const who = 'world'; const str = `Hello ${who}`;
```                           |
| [Unicode Regex](https://babeljs.io/docs/en/babel-plugin-transform-unicode-regex)                            | ```
const string = 'foo💩bar'; const match = string.match(/foo(.)bar/u);
```       |
| ECMAScript 2016 (ES7)                                                                                       |                                                                                  |
| [Exponentiation Operator](https://babeljs.io/docs/en/babel-plugin-transform-exponentiation-operator)        | ```
let x = 10 ** 2;
```                                                           |
| ECMAScript 2017 (ES8)                                                                                       |                                                                                  |
| [Async Functions](https://github.com/tc39/ecmascript-asyncawait)                                            | ```
async function doStuffAsync() {const foo = await doOtherStuffAsync();};
```    |
| [Function Trailing Comma](https://github.com/jeffmo/es-trailing-function-commas)                            | ```
function f(a, b, c,) {};
```                                                   |
| ECMAScript 2018 (ES9)                                                                                       |                                                                                  |
| [Object Spread](https://github.com/tc39/proposal-object-rest-spread)                                        | ```
const extended = {...obj, a: 10};
```                                          |
| ECMAScript 2019 (ES10)                                                                                      |                                                                                  |
| [Optional Catch Binding](https://babeljs.io/docs/en/babel-plugin-proposal-optional-catch-binding)           | ```
try {throw 0; } catch { doSomethingWhichDoesNotCareAboutTheValueThrown();}
``` |
| ECMAScript 2020 (ES11)                                                                                      |                                                                                  |
| [Dynamic Imports](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)                            | ```
const package = await import('package'); package.function()
```                |
| [Nullish Coalescing Operator](https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator) | ```
const foo = object.foo ?? 'default';
```                                       |
| [Optional Chaining](https://github.com/tc39/proposal-optional-chaining)                                     | ```
const name = obj.user?.name;
```                                               |
| ECMAScript 2022 (ES13)                                                                                      |                                                                                  |
| [Class Fields](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)                           | ```
class Bork {static a = 'foo'; static b; x = 'bar'; y;}
```                     |
| Stage 1 Proposal                                                                                            |                                                                                  |
| [Export Default From](https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from)                 | ```
export v from 'mod';
```                                                       |
| Miscellaneous                                                                                               |                                                                                  |
| [Babel Template](https://babeljs.io/docs/en/babel-template)                                                 | ```
template(`const %%importName%% = require(%%source%%);`);
```                   |
| [Flow](https://flowtype.org/)                                                                               | ```
function foo(x: ?number): string {};
```                                       |
| [ESM to CJS](https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs)                            | ```
export default 42;
```                                                         |
| [JSX](https://react.dev/learn/writing-markup-with-jsx)                                                      | ```
<View style={{color: 'red'}} />
```                                            |
| [Object Assign](https://babeljs.io/docs/en/babel-plugin-transform-object-assign)                            | ```
Object.assign(a, b);
```                                                       |
| [React Display Name](https://babeljs.io/docs/en/babel-plugin-transform-react-display-name)                  | ```
const bar = createReactClass({});
```                                          |
| [TypeScript](https://www.typescriptlang.org/)                                                               | ```
function foo(x: {hello: true, target: 'react native!'}): string {};
```        |

## Polyfills[​](#polyfills "Direct link to Polyfills")

Many standard functions are also available on all the supported JavaScript runtimes.

#### Browser[​](#browser "Direct link to Browser")

* [CommonJS `require`](https://nodejs.org/docs/latest/api/modules.html)
* `console.{log, warn, error, info, debug, trace, table, group, groupCollapsed, groupEnd}`
* [`XMLHttpRequest`, `fetch`](/docs/network.md#content)
* [`{set, clear}{Timeout, Interval, Immediate}, {request, cancel}AnimationFrame`](/docs/timers.md#content)

#### ECMAScript 2015 (ES6)[​](#ecmascript-2015-es6 "Direct link to ECMAScript 2015 (ES6)")

* [`Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
* `Array.prototype.{find, findIndex}`
* [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
* `String.prototype.{startsWith, endsWith, repeat, includes}`

#### ECMAScript 2016 (ES7)[​](#ecmascript-2016-es7 "Direct link to ECMAScript 2016 (ES7)")

* `Array.prototype.includes`

#### ECMAScript 2017 (ES8)[​](#ecmascript-2017-es8 "Direct link to ECMAScript 2017 (ES8)")

* `Object.{entries, values}`

#### Specific[​](#specific "Direct link to Specific")

* `__DEV__`


---

# Keyboard

`Keyboard` module to control keyboard events.

### Usage[​](#usage "Direct link to Usage")

The Keyboard module allows you to listen for native events and react to them, as well as make changes to the keyboard, like dismissing it.

***

# Reference

## Methods[​](#methods "Direct link to Methods")

### `addListener()`[​](#addlistener "Direct link to addlistener")

tsx

````

static addListener: (
eventType: KeyboardEventName,
listener: KeyboardEventListener,
) => EmitterSubscription;

```

The `addListener` function connects a JavaScript function to an identified native keyboard notification event.

This function then returns the reference to the listener.

**Parameters:**

| Name              | Type     | Description                                                                    |
| ----------------- | -------- | ------------------------------------------------------------------------------ |
| eventNameRequired | string   | The string that identifies the event you're listening for. See the list below. |
| callbackRequired  | function | The function to be called when the event fires                                 |

**`eventName`**

This can be any of the following:

* `keyboardWillShow`
* `keyboardDidShow`
* `keyboardWillHide`
* `keyboardDidHide`
* `keyboardWillChangeFrame`
* `keyboardDidChangeFrame`

note

Only `keyboardDidShow` and `keyboardDidHide` events are available on Android. The events will not be fired when using Android 10 or below if your activity has `android:windowSoftInputMode` set to `adjustResize` or `adjustNothing`.

***

### `dismiss()`[​](#dismiss "Direct link to dismiss")

tsx

```

static dismiss();

```

Dismisses the active keyboard and removes focus.

***

### `scheduleLayoutAnimation`[​](#schedulelayoutanimation "Direct link to schedulelayoutanimation")

tsx

```

static scheduleLayoutAnimation(event: KeyboardEvent);

```

Useful for syncing TextInput (or other keyboard accessory view) size of position changes with keyboard movements.

***

### `isVisible()`[​](#isvisible "Direct link to isvisible")

tsx

```

static isVisible(): boolean;

```

Whether the keyboard is last known to be visible.

***

### `metrics()`[​](#metrics "Direct link to metrics")

tsx

```

static metrics(): KeyboardMetrics | undefined;

```

Return the metrics of the soft-keyboard if visible.


---

# KeyboardAvoidingView

This component will automatically adjust its height, position, or bottom padding based on the keyboard height to remain visible while the virtual keyboard is displayed.

## Example[​](#example "Direct link to Example")

***

# Reference

## Props[​](#props "Direct link to Props")

### [View Props](/docs/view.md#props)[​](#view-props "Direct link to view-props")

Inherits [View Props](/docs/view.md#props).

***

### `behavior`[​](#behavior "Direct link to behavior")

Specify how to react to the presence of the keyboard.

note

Android and iOS both interact with this prop differently. On both iOS and Android, setting `behavior` is recommended.

| Type                                        |
| ------------------------------------------- |
| enum(`'height'`, `'position'`, `'padding'`) |

***

### `contentContainerStyle`[​](#contentcontainerstyle "Direct link to contentcontainerstyle")

The style of the content container (View) when behavior is `'position'`.

| Type                                    |
| --------------------------------------- |
| [View Style](/docs/view-style-props.md) |

***

### `enabled`[​](#enabled "Direct link to enabled")

Enabled or disabled KeyboardAvoidingView.

| Type    | Default |
| ------- | ------- |
| boolean | `true`  |

***

### `keyboardVerticalOffset`[​](#keyboardverticaloffset "Direct link to keyboardverticaloffset")

This is the distance between the top of the user screen and the react native view, may be non-zero in some use cases.

| Type   | Default |
| ------ | ------- |
| number | `0`     |


---

# Layout Props

info

More detailed examples about those properties can be found on the [Layout with Flexbox](/docs/flexbox.md) page.

### Example[​](#example "Direct link to Example")

The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property `flexWrap`.

* TypeScript
* JavaScript

***

# Reference

## Props[​](#props "Direct link to Props")

### `alignContent`[​](#aligncontent "Direct link to aligncontent")

`alignContent` controls how rows align in the cross direction, overriding the `alignContent` of the parent.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) for more details.

| Type                                                                                                 | Required |
| ---------------------------------------------------------------------------------------------------- | -------- |
| enum('flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly') | No       |

***

### `alignItems`[​](#alignitems "Direct link to alignitems")

`alignItems` aligns children in the cross direction. For example, if children are flowing vertically, `alignItems` controls how they align horizontally. It works like `align-items` in CSS (default: stretch).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) for more details.

| Type                                                            | Required |
| --------------------------------------------------------------- | -------- |
| enum('flex-start', 'flex-end', 'center', 'stretch', 'baseline') | No       |

***

### `alignSelf`[​](#alignself "Direct link to alignself")

`alignSelf` controls how a child aligns in the cross direction, overriding the `alignItems` of the parent. It works like `align-self` in CSS (default: auto).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) for more details.

| Type                                                                    | Required |
| ----------------------------------------------------------------------- | -------- |
| enum('auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline') | No       |

***

### `aspectRatio`[​](#aspectratio "Direct link to aspectratio")

Aspect ratio controls the size of the undefined dimension of a node.

* On a node with a set width/height, aspect ratio controls the size of the unset dimension
* On a node with a set flex basis, aspect ratio controls the size of the node in the cross axis if unset
* On a node with a measure function, aspect ratio works as though the measure function measures the flex basis
* On a node with flex grow/shrink, aspect ratio controls the size of the node in the cross axis if unset
* Aspect ratio takes min/max dimensions into account

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `borderBottomWidth`[​](#borderbottomwidth "Direct link to borderbottomwidth")

`borderBottomWidth` works like `border-bottom-width` in CSS.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width) for more details.

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `borderEndWidth`[​](#borderendwidth "Direct link to borderendwidth")

When direction is `ltr`, `borderEndWidth` is equivalent to `borderRightWidth`. When direction is `rtl`, `borderEndWidth` is equivalent to `borderLeftWidth`.

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `borderLeftWidth`[​](#borderleftwidth "Direct link to borderleftwidth")

`borderLeftWidth` works like `border-left-width` in CSS.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width) for more details.

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `borderRightWidth`[​](#borderrightwidth "Direct link to borderrightwidth")

`borderRightWidth` works like `border-right-width` in CSS.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width) for more details.

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `borderStartWidth`[​](#borderstartwidth "Direct link to borderstartwidth")

When direction is `ltr`, `borderStartWidth` is equivalent to `borderLeftWidth`. When direction is `rtl`, `borderStartWidth` is equivalent to `borderRightWidth`.

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `borderTopWidth`[​](#bordertopwidth "Direct link to bordertopwidth")

`borderTopWidth` works like `border-top-width` in CSS.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width) for more details.

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `borderWidth`[​](#borderwidth "Direct link to borderwidth")

`borderWidth` works like `border-width` in CSS.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width) for more details.

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `bottom`[​](#bottom "Direct link to bottom")

`bottom` is the number of logical pixels to offset the bottom edge of this component.

It works similarly to `bottom` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom) for more details of how `bottom` affects layout.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `boxSizing`[​](#boxsizing "Direct link to boxsizing")

`boxSizing` defines how the element's various sizing props (`width`, `height`, `minWidth`, `minHeight`, etc.) are computed. If `boxSizing` is `border-box`, these sizes apply to the border box of the element. If it is `content-box`, they apply to the content box of the element. The default value is `border-box`. The [web documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) is a good source of information if you wish to learn more about how this prop works.

| Type                              | Required |
| --------------------------------- | -------- |
| enum('border-box', 'content-box') | No       |

***

### `columnGap`[​](#columngap "Direct link to columngap")

`columnGap` works like `column-gap` in CSS. Only pixel units are supported in React Native.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap) for more details.

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `direction`[​](#direction "Direct link to direction")

`direction` specifies the directional flow of the user interface. The default is `inherit`, except for root node which will have value based on the current locale.

See [MDN CSS Reference](https://www.yogalayout.dev/docs/styling/layout-direction) for more details.

| Type                          | Required |
| ----------------------------- | -------- |
| enum('inherit', 'ltr', 'rtl') | No       |

***

### `display`[​](#display "Direct link to display")

`display` sets the display type of this component.

It works similarly to `display` in CSS but only supports the values 'flex', 'none', and 'contents'. The default is `flex`.

| Type                             | Required |
| -------------------------------- | -------- |
| enum('none', 'flex', 'contents') | No       |

***

### `end`[​](#end "Direct link to end")

When the direction is `ltr`, `end` is equivalent to `right`. When the direction is `rtl`, `end` is equivalent to `left`.

This style takes precedence over the `left` and `right` styles.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `flex`[​](#flex "Direct link to flex")

In React Native `flex` does not work the same way that it does in CSS. `flex` is a number rather than a string, and it works according to the [Yoga](https://github.com/facebook/yoga) layout engine.

When `flex` is a positive number, it makes the component flexible, and it will be sized proportional to its flex value. So a component with `flex` set to `2` will take twice the space as a component with `flex` set to 1. `flex: <positive number>` equates to `flexGrow: <positive number>, flexShrink: 1, flexBasis: 0`.

When `flex` is `0`, the component is sized according to `width` and `height`, and it is inflexible.

When `flex` is `-1`, the component is normally sized according to `width` and `height`. However, if there's not enough space, the component will shrink to its `minWidth` and `minHeight`.

`flexGrow`, `flexShrink`, and `flexBasis` work the same as in CSS.

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `flexBasis`[​](#flexbasis "Direct link to flexbasis")

`flexBasis` is an axis-independent way of providing the default size of an item along the main axis. Setting the `flexBasis` of a child is similar to setting the `width` of that child if its parent is a container with `flexDirection: row` or setting the `height` of a child if its parent is a container with `flexDirection: column`. The `flexBasis` of an item is the default size of that item, the size of the item before any `flexGrow` and `flexShrink` calculations are performed.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `flexDirection`[​](#flexdirection "Direct link to flexdirection")

`flexDirection` controls which directions children of a container go. `row` goes left to right, `column` goes top to bottom, and you may be able to guess what the other two do. It works like `flex-direction` in CSS, except the default is `column`.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) for more details.

| Type                                                   | Required |
| ------------------------------------------------------ | -------- |
| enum('row', 'row-reverse', 'column', 'column-reverse') | No       |

***

### `flexGrow`[​](#flexgrow "Direct link to flexgrow")

`flexGrow` describes how any space within a container should be distributed among its children along the main axis. After laying out its children, a container will distribute any remaining space according to the flex grow values specified by its children.

`flexGrow` accepts any floating point value >= 0, with 0 being the default value. A container will distribute any remaining space among its children weighted by the children’s `flexGrow` values.

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `flexShrink`[​](#flexshrink "Direct link to flexshrink")

[`flexShrink`](/docs/layout-props.md#flexshrink) describes how to shrink children along the main axis in the case in which the total size of the children overflows the size of the container on the main axis. `flexShrink` is very similar to `flexGrow` and can be thought of in the same way if any overflowing size is considered to be negative remaining space. These two properties also work well together by allowing children to grow and shrink as needed.

`flexShrink` accepts any floating point value >= 0, with 0 being the default value. A container will shrink its children weighted by the children’s `flexShrink` values.

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `flexWrap`[​](#flexwrap "Direct link to flexwrap")

`flexWrap` controls whether children can wrap around after they hit the end of a flex container. It works like `flex-wrap` in CSS (default: nowrap).

Note it does not work anymore with `alignItems: stretch` (the default), so you may want to use `alignItems: flex-start` for example (breaking change details: <https://github.com/facebook/react-native/releases/tag/v0.28.0>).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) for more details.

| Type                                   | Required |
| -------------------------------------- | -------- |
| enum('wrap', 'nowrap', 'wrap-reverse') | No       |

***

### `gap`[​](#gap "Direct link to gap")

`gap` works like `gap` in CSS. Only pixel units are supported in React Native.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) for more details.

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `height`[​](#height "Direct link to height")

`height` sets the height of this component.

It works similarly to `height` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/height) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `inset`[​](#inset "Direct link to inset")

note

`inset` is only available on the [New Architecture](/architecture/landing-page.md)

Setting `inset` has the same effect as setting each of `top`, `bottom`, `right` and `left` props.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/inset) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `insetBlock`[​](#insetblock "Direct link to insetblock")

note

`insetBlock` is only available on the [New Architecture](/architecture/landing-page.md)

Equivalent to [`top`](/docs/layout-props.md#top) and [`bottom`](/docs/layout-props.md#bottom).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `insetBlockEnd`[​](#insetblockend "Direct link to insetblockend")

note

`insetBlockEnd` is only available on the [New Architecture](/architecture/landing-page.md)

Equivalent to [`bottom`](/docs/layout-props.md#bottom).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-end) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `insetBlockStart`[​](#insetblockstart "Direct link to insetblockstart")

note

`insetBlockStart` is only available on the [New Architecture](/architecture/landing-page.md)

Equivalent to [`top`](/docs/layout-props.md#top).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-start) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `insetInline`[​](#insetinline "Direct link to insetinline")

note

`insetInline` is only available on the [New Architecture](/architecture/landing-page.md)

Equivalent to [`right`](/docs/layout-props.md#right) and [`left`](/docs/layout-props.md#left).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `insetInlineEnd`[​](#insetinlineend "Direct link to insetinlineend")

note

`insetInlineEnd` is only available on the [New Architecture](/architecture/landing-page.md)

When direction is `ltr`, `insetInlineEnd` is equivalent to [`right`](/docs/layout-props.md#right). When direction is `rtl`, `insetInlineEnd` is equivalent to [`left`](/docs/layout-props.md#left).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `insetInlineStart`[​](#insetinlinestart "Direct link to insetinlinestart")

note

`insetInlineStart` is only available on the [New Architecture](/architecture/landing-page.md)

When direction is `ltr`, `insetInlineStart` is equivalent to [`left`](/docs/layout-props.md#left). When direction is `rtl`, `insetInlineStart` is equivalent to [`right`](/docs/layout-props.md#right).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `isolation`[​](#isolation "Direct link to isolation")

note

`isolation` is only available on the [New Architecture](/architecture/landing-page.md)

`isolation` lets you form a [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

There are two values:

* `auto` (default): Does nothing.
* `isolate`: Forms a stacking context.

| Type                    | Required |
| ----------------------- | -------- |
| enum('auto', 'isolate') | No       |

***

### `justifyContent`[​](#justifycontent "Direct link to justifycontent")

`justifyContent` aligns children in the main direction. For example, if children are flowing vertically, `justifyContent` controls how they align vertically. It works like `justify-content` in CSS (default: flex-start).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) for more details.

| Type                                                                                      | Required |
| ----------------------------------------------------------------------------------------- | -------- |
| enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly') | No       |

***

### `left`[​](#left "Direct link to left")

`left` is the number of logical pixels to offset the left edge of this component.

It works similarly to `left` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/left) for more details of how `left` affects layout.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `margin`[​](#margin "Direct link to margin")

Setting `margin` has the same effect as setting each of `marginTop`, `marginLeft`, `marginBottom`, and `marginRight`.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `marginBottom`[​](#marginbottom "Direct link to marginbottom")

`marginBottom` works like `margin-bottom` in CSS. See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `marginBlock`[​](#marginblock "Direct link to marginblock")

Equivalent to [`marginVertical`](/docs/layout-props.md#marginvertical).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-block) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `marginBlockEnd`[​](#marginblockend "Direct link to marginblockend")

Equivalent to [`marginBottom`](/docs/layout-props.md#marginbottom).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-block-end) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `marginBlockStart`[​](#marginblockstart "Direct link to marginblockstart")

Equivalent to [`marginTop`](/docs/layout-props.md#margintop).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-block-start) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `marginEnd`[​](#marginend "Direct link to marginend")

When direction is `ltr`, `marginEnd` is equivalent to `marginRight`. When direction is `rtl`, `marginEnd` is equivalent to `marginLeft`.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `marginHorizontal`[​](#marginhorizontal "Direct link to marginhorizontal")

Setting `marginHorizontal` has the same effect as setting both `marginLeft` and `marginRight`.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `marginInline`[​](#margininline "Direct link to margininline")

Equivalent to [`marginHorizontal`](/docs/layout-props.md#marginhorizontal).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-inline) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `marginInlineEnd`[​](#margininlineend "Direct link to margininlineend")

When direction is `ltr`, `marginInlineEnd` is equivalent to [`marginEnd`](/docs/layout-props.md#marginend) (i.e. `marginRight`). When direction is `rtl`, `marginInlineEnd` is equivalent to [`marginEnd`](/docs/layout-props.md#marginend) (i.e. `marginLeft`).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-inline-end) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `marginInlineStart`[​](#margininlinestart "Direct link to margininlinestart")

When direction is `ltr`, `marginInlineStart` is equivalent to [`marginStart`](/docs/layout-props.md#marginstart) (i.e. `marginLeft`). When direction is `rtl`, `marginInlineStart` is equivalent to [`marginStart`](/docs/layout-props.md#marginstart) (i.e. `marginRight`).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-inline-start) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `marginLeft`[​](#marginleft "Direct link to marginleft")

`marginLeft` works like `margin-left` in CSS. See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `marginRight`[​](#marginright "Direct link to marginright")

`marginRight` works like `margin-right` in CSS.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `marginStart`[​](#marginstart "Direct link to marginstart")

When direction is `ltr`, `marginStart` is equivalent to `marginLeft`. When direction is `rtl`, `marginStart` is equivalent to `marginRight`.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `marginTop`[​](#margintop "Direct link to margintop")

`marginTop` works like `margin-top` in CSS.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `marginVertical`[​](#marginvertical "Direct link to marginvertical")

Setting `marginVertical` has the same effect as setting both `marginTop` and `marginBottom`.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `maxHeight`[​](#maxheight "Direct link to maxheight")

`maxHeight` is the maximum height for this component, in logical pixels.

It works similarly to `max-height` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `maxWidth`[​](#maxwidth "Direct link to maxwidth")

`maxWidth` is the maximum width for this component, in logical pixels.

It works similarly to `max-width` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `minHeight`[​](#minheight "Direct link to minheight")

`minHeight` is the minimum height for this component, in logical pixels.

It works similarly to `min-height` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `minWidth`[​](#minwidth "Direct link to minwidth")

`minWidth` is the minimum width for this component, in logical pixels.

It works similarly to `min-width` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `overflow`[​](#overflow "Direct link to overflow")

`overflow` controls how children are measured and displayed. `overflow: hidden` causes views to be clipped while `overflow: scroll` causes views to be measured independently of their parents' main axis. It works like `overflow` in CSS (default: visible).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) for more details.

| Type                                | Required |
| ----------------------------------- | -------- |
| enum('visible', 'hidden', 'scroll') | No       |

***

### `padding`[​](#padding "Direct link to padding")

Setting `padding` has the same effect as setting each of `paddingTop`, `paddingBottom`, `paddingLeft`, and `paddingRight`.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `paddingBottom`[​](#paddingbottom "Direct link to paddingbottom")

`paddingBottom` works like `padding-bottom` in CSS.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `paddingBlock`[​](#paddingblock "Direct link to paddingblock")

Equivalent to [`paddingVertical`](/docs/layout-props.md#paddingvertical).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding-block) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `paddingBlockEnd`[​](#paddingblockend "Direct link to paddingblockend")

Equivalent to [`paddingBottom`](/docs/layout-props.md#paddingbottom).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding-block-end) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `paddingBlockStart`[​](#paddingblockstart "Direct link to paddingblockstart")

Equivalent to [`paddingTop`](/docs/layout-props.md#paddingtop).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding-block-start) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `paddingEnd`[​](#paddingend "Direct link to paddingend")

When direction is `ltr`, `paddingEnd` is equivalent to `paddingRight`. When direction is `rtl`, `paddingEnd` is equivalent to `paddingLeft`.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `paddingHorizontal`[​](#paddinghorizontal "Direct link to paddinghorizontal")

Setting `paddingHorizontal` is like setting both of `paddingLeft` and `paddingRight`.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `paddingInline`[​](#paddinginline "Direct link to paddinginline")

Equivalent to [`paddingHorizontal`](/docs/layout-props.md#paddinghorizontal).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding-inline) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `paddingInlineEnd`[​](#paddinginlineend "Direct link to paddinginlineend")

When direction is `ltr`, `paddingInlineEnd` is equivalent to [`paddingEnd`](/docs/layout-props.md#paddingend) (i.e. `paddingRight`). When direction is `rtl`, `paddingInlineEnd` is equivalent to [`paddingEnd`](/docs/layout-props.md#paddingend) (i.e. `paddingLeft`).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding-inline-end) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `paddingInlineStart`[​](#paddinginlinestart "Direct link to paddinginlinestart")

When direction is `ltr`, `paddingInlineStart` is equivalent to [`paddingStart`](/docs/layout-props.md#paddingstart) (i.e. `paddingLeft`). When direction is `rtl`, `paddingInlineStart` is equivalent to [`paddingStart`](/docs/layout-props.md#paddingstart) (i.e. `paddingRight`).

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding-inline-start) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `paddingLeft`[​](#paddingleft "Direct link to paddingleft")

`paddingLeft` works like `padding-left` in CSS.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `paddingRight`[​](#paddingright "Direct link to paddingright")

`paddingRight` works like `padding-right` in CSS.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `paddingStart`[​](#paddingstart "Direct link to paddingstart")

When direction is `ltr`, `paddingStart` is equivalent to `paddingLeft`. When direction is `rtl`, `paddingStart` is equivalent to `paddingRight`.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `paddingTop`[​](#paddingtop "Direct link to paddingtop")

`paddingTop` works like `padding-top` in CSS.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `paddingVertical`[​](#paddingvertical "Direct link to paddingvertical")

Setting `paddingVertical` is like setting both of `paddingTop` and `paddingBottom`.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `position`[​](#position "Direct link to position")

`position` in React Native is similar to [regular CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/position), but everything is set to `relative` by default.

`relative` will position an element according to the normal flow of the layout. Insets (`top`, `bottom`, `left`, `right`) will offset relative to this layout.

`absolute` takes the element out of the normal flow of the layout. Insets will offset relative to its [containing block](/docs/flexbox.md#the-containing-block).

`static` will position an element according to the normal flow of the layout. Insets will have no effect. `static` elements do not form a containing block for absolute descendants.

For more information, see the [Layout with Flexbox docs](/docs/flexbox.md#position). Also, [the Yoga documentation](https://www.yogalayout.dev/docs/styling/position) has more details on how `position` differs between React Native and CSS.

| Type                                   | Required |
| -------------------------------------- | -------- |
| enum('absolute', 'relative', 'static') | No       |

***

### `right`[​](#right "Direct link to right")

`right` is the number of logical pixels to offset the right edge of this component.

It works similarly to `right` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/right) for more details of how `right` affects layout.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `rowGap`[​](#rowgap "Direct link to rowgap")

`rowGap` works like `row-gap` in CSS. Only pixel units are supported in React Native.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap) for more details.

| Type   | Required |
| ------ | -------- |
| number | No       |

***

### `start`[​](#start "Direct link to start")

When the direction is `ltr`, `start` is equivalent to `left`. When the direction is `rtl`, `start` is equivalent to `right`.

This style takes precedence over the `left`, `right`, and `end` styles.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `top`[​](#top "Direct link to top")

`top` is the number of logical pixels to offset the top edge of this component.

It works similarly to `top` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top) for more details of how `top` affects layout.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `width`[​](#width "Direct link to width")

`width` sets the width of this component.

It works similarly to `width` in CSS, but in React Native you must use points or percentages. Ems and other units are not supported.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/width) for more details.

| Type           | Required |
| -------------- | -------- |
| number, string | No       |

***

### `zIndex`[​](#zindex "Direct link to zindex")

`zIndex` controls which components display on top of others. Normally, you don't use `zIndex`. Components render according to their order in the document tree, so later components draw over earlier ones. `zIndex` may be useful if you have animations or custom modal interfaces where you don't want this behavior.

It works like the CSS `z-index` property - components with a larger `zIndex` will render on top. Think of the z-direction like it's pointing from the phone into your eyeball.

On iOS, `zIndex` may require `View`s to be siblings of each other for it to work as expected.

See [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) for more details.

| Type   | Required |
| ------ | -------- |
| number | No       |


---

# LayoutAnimation

Automatically animates views to their new positions when the next layout happens.

A common way to use this API is to call it before updating the state hook in functional components and calling `setState` in class components.

Note that in order to get this to work on **Android** you need to set the following flags via `UIManager`:

js

```

if (Platform.OS === 'android') {
if (UIManager.setLayoutAnimationEnabledExperimental) {
UIManager.setLayoutAnimationEnabledExperimental(true);
}
}

```

## Example[​](#example "Direct link to Example")

***

# Reference

## Methods[​](#methods "Direct link to Methods")

### `configureNext()`[​](#configurenext "Direct link to configurenext")

tsx

```

static configureNext(
config: LayoutAnimationConfig,
onAnimationDidEnd?: () => void,
onAnimationDidFail?: () => void,
);

```

Schedules an animation to happen on the next layout.

#### Parameters:[​](#parameters "Direct link to Parameters:")

| Name               | Type     | Required | Description                         |
| ------------------ | -------- | -------- | ----------------------------------- |
| config             | object   | Yes      | See config description below.       |
| onAnimationDidEnd  | function | No       | Called when the animation finished. |
| onAnimationDidFail | function | No       | Called when the animation failed.   |

The `config` parameter is an object with the keys below. [`create`](/docs/layoutanimation.md#create) returns a valid object for `config`, and the [`Presets`](/docs/layoutanimation.md#presets) objects can also all be passed as the `config`.

* `duration` in milliseconds
* `create`, optional config for animating in new views
* `update`, optional config for animating views that have been updated
* `delete`, optional config for animating views as they are removed

The config that's passed to `create`, `update`, or `delete` has the following keys:

* `type`, the [animation type](/docs/layoutanimation.md#types) to use
* `property`, the [layout property](/docs/layoutanimation.md#properties) to animate (optional, but recommended for `create` and `delete`)
* `springDamping` (number, optional and only for use with `type: Type.spring`)
* `initialVelocity` (number, optional)
* `delay` (number, optional)
* `duration` (number, optional)

***

### `create()`[​](#create "Direct link to create")

tsx

```

static create(duration, type, creationProp)

```

Helper that creates an object (with `create`, `update`, and `delete` fields) to pass into [`configureNext`](/docs/layoutanimation.md#configurenext). The `type` parameter is an [animation type](/docs/layoutanimation.md#types), and the `creationProp` parameter is a [layout property](/docs/layoutanimation.md#properties).

**Example:**

## Properties[​](#properties "Direct link to Properties")

### Types[​](#types "Direct link to Types")

An enumeration of animation types to be used in the [`create`](/docs/layoutanimation.md#create) method, or in the `create`/`update`/`delete` configs for [`configureNext`](/docs/layoutanimation.md#configurenext). (example usage: `LayoutAnimation.Types.easeIn`)

| Types         |
| ------------- |
| spring        |
| linear        |
| easeInEaseOut |
| easeIn        |
| easeOut       |
| keyboard      |

***

### Properties[​](#properties-1 "Direct link to Properties")

An enumeration of layout properties to be animated to be used in the [`create`](/docs/layoutanimation.md#create) method, or in the `create`/`update`/`delete` configs for [`configureNext`](/docs/layoutanimation.md#configurenext). (example usage: `LayoutAnimation.Properties.opacity`)

| Properties |
| ---------- |
| opacity    |
| scaleX     |
| scaleY     |
| scaleXY    |

***

### Presets[​](#presets "Direct link to Presets")

A set of predefined animation configs to pass into [`configureNext`](/docs/layoutanimation.md#configurenext).

| Presets       | Value                                                                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| easeInEaseOut | `create(300, 'easeInEaseOut', 'opacity')`                                                                                                                      |
| linear        | `create(500, 'linear', 'opacity')`                                                                                                                             |
| spring        | `{duration: 700, create: {type: 'linear', property: 'opacity'}, update: {type: 'spring', springDamping: 0.4}, delete: {type: 'linear', property: 'opacity'} }` |

***

### `easeInEaseOut`[​](#easeineaseout "Direct link to easeineaseout")

Calls `configureNext()` with `Presets.easeInEaseOut`.

***

### `linear`[​](#linear "Direct link to linear")

Calls `configureNext()` with `Presets.linear`.

***

### `spring`[​](#spring "Direct link to spring")

Calls `configureNext()` with `Presets.spring`.

**Example:**


---

# LayoutEvent Object Type

`LayoutEvent` object is returned in the callback as a result of component layout change, for example `onLayout` in [View](/docs/view.md) component.

## Example[​](#example "Direct link to Example")

js

```

{
layout: {
width: 520,
height: 70.5,
x: 0,
y: 42.5
},
target: 1127
}

```

## Keys and values[​](#keys-and-values "Direct link to Keys and values")

### `height`[​](#height "Direct link to height")

Height of the component after the layout changes.

| Type   | Optional |
| ------ | -------- |
| number | No       |

### `width`[​](#width "Direct link to width")

Width of the component after the layout changes.

| Type   | Optional |
| ------ | -------- |
| number | No       |

### `x`[​](#x "Direct link to x")

Component X coordinate inside the parent component.

| Type   | Optional |
| ------ | -------- |
| number | No       |

### `y`[​](#y "Direct link to y")

Component Y coordinate inside the parent component.

| Type   | Optional |
| ------ | -------- |
| number | No       |

### `target`[​](#target "Direct link to target")

The node id of the element receiving the LayoutEvent.

| Type                        | Optional |
| --------------------------- | -------- |
| number, `null`, `undefined` | No       |

## Used by[​](#used-by "Direct link to Used by")

* [`Image`](/docs/image.md)
* [`Pressable`](/docs/pressable.md)
* [`ScrollView`](/docs/scrollview.md)
* [`Text`](/docs/text.md)
* [`TextInput`](/docs/textinput.md)
* [`TouchableWithoutFeedback`](/docs/touchablewithoutfeedback.md)
* [`View`](/docs/view.md)


---

# Direct Manipulation

It is sometimes necessary to make changes directly to a component without using state/props to trigger a re-render of the entire subtree. When using React in the browser for example, you sometimes need to directly modify a DOM node, and the same is true for views in mobile apps. `setNativeProps` is the React Native equivalent to setting properties directly on a DOM node.

caution

Use `setNativeProps` when frequent re-rendering creates a performance bottleneck!

Direct manipulation will not be a tool that you reach for frequently. You will typically only be using it for creating continuous animations to avoid the overhead of rendering the component hierarchy and reconciling many views. `setNativeProps` is imperative and stores state in the native layer (DOM, UIView, etc.) and not within your React components, which makes your code more difficult to reason about.

Before you use it, try to solve your problem with `setState` and [`shouldComponentUpdate`](https://react.dev/reference/react/Component#shouldcomponentupdate).

## setNativeProps with TouchableOpacity[​](#setnativeprops-with-touchableopacity "Direct link to setNativeProps with TouchableOpacity")

[TouchableOpacity](https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Components/Touchable/TouchableOpacity.js) uses `setNativeProps` internally to update the opacity of its child component:

tsx

```

const viewRef = useRef();
const setOpacityTo = useCallback(value => {
// Redacted: animation related code
viewRef.current.setNativeProps({
opacity: value,
});
}, \[]);

```

This allows us to write the following code and know that the child will have its opacity updated in response to taps, without the child having any knowledge of that fact or requiring any changes to its implementation:

tsx

```

```
Press me!
```

```

Let's imagine that `setNativeProps` was not available. One way that we might implement it with that constraint is to store the opacity value in the state, then update that value whenever `onPress` is fired:

tsx

```

const \[buttonOpacity, setButtonOpacity] = useState(1);
return (
\<TouchableOpacity
onPressIn={() => setButtonOpacity(0.5)}
onPressOut={() => setButtonOpacity(1)}>

```
  Press me!
```

);

```

This is computationally intensive compared to the original example - React needs to re-render the component hierarchy each time the opacity changes, even though other properties of the view and its children haven't changed. Usually this overhead isn't a concern but when performing continuous animations and responding to gestures, judiciously optimizing your components can improve your animations' fidelity.

If you look at the implementation of `setNativeProps` in [NativeMethodsMixin](https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js) you will notice that it is a wrapper around `RCTUIManager.updateView` - this is the exact same function call that results from re-rendering - see [receiveComponent in ReactNativeBaseComponent](https://github.com/facebook/react-native/blob/fb2ec1ea47c53c2e7b873acb1cb46192ac74274e/Libraries/Renderer/oss/ReactNativeRenderer-prod.js#L5793-L5813).

## Composite components and setNativeProps[​](#composite-components-and-setnativeprops "Direct link to Composite components and setNativeProps")

Composite components are not backed by a native view, so you cannot call `setNativeProps` on them. Consider this example:

* TypeScript
* JavaScript

If you run this you will immediately see this error: `Touchable child must either be native or forward setNativeProps to a native component`. This occurs because `MyButton` isn't directly backed by a native view whose opacity should be set. You can think about it like this: if you define a component with `createReactClass` you would not expect to be able to set a style prop on it and have that work - you would need to pass the style prop down to a child, unless you are wrapping a native component. Similarly, we are going to forward `setNativeProps` to a native-backed child component.

#### Forward setNativeProps to a child[​](#forward-setnativeprops-to-a-child "Direct link to Forward setNativeProps to a child")

Since the `setNativeProps` method exists on any ref to a `View` component, it is enough to forward a ref on your custom component to one of the `<View />` components that it renders. This means that a call to `setNativeProps` on the custom component will have the same effect as if you called `setNativeProps` on the wrapped `View` component itself.

* TypeScript
* JavaScript

You can now use `MyButton` inside of `TouchableOpacity`!

You may have noticed that we passed all of the props down to the child view using `{...props}`. The reason for this is that `TouchableOpacity` is actually a composite component, and so in addition to depending on `setNativeProps` on its child, it also requires that the child perform touch handling. To do this, it passes on [various props](/docs/view.md#onmoveshouldsetresponder) that call back to the `TouchableOpacity` component. `TouchableHighlight`, in contrast, is backed by a native view and only requires that we implement `setNativeProps`.

## setNativeProps to edit TextInput value[​](#setnativeprops-to-edit-textinput-value "Direct link to setNativeProps to edit TextInput value")

Another very common use case of `setNativeProps` is to edit the value of the TextInput. The `controlled` prop of TextInput can sometimes drop characters when the `bufferDelay` is low and the user types very quickly. Some developers prefer to skip this prop entirely and instead use `setNativeProps` to directly manipulate the TextInput value when necessary. For example, the following code demonstrates editing the input when you tap a button:

* TypeScript
* JavaScript

You can use the [`clear`](/docs/textinput.md#clear) method to clear the `TextInput` which clears the current input text using the same approach.

## Avoiding conflicts with the render function[​](#avoiding-conflicts-with-the-render-function "Direct link to Avoiding conflicts with the render function")

If you update a property that is also managed by the render function, you might end up with some unpredictable and confusing bugs because anytime the component re-renders and that property changes, whatever value was previously set from `setNativeProps` will be completely ignored and overridden.

## setNativeProps & shouldComponentUpdate[​](#setnativeprops--shouldcomponentupdate "Direct link to setNativeProps & shouldComponentUpdate")

By [intelligently applying `shouldComponentUpdate`](https://react.dev/reference/react/Component#shouldcomponentupdate) you can avoid the unnecessary overhead involved in reconciling unchanged component subtrees, to the point where it may be performant enough to use `setState` instead of `setNativeProps`.

## Other native methods[​](#other-native-methods "Direct link to Other native methods")

The methods described here are available on most of the default components provided by React Native. Note, however, that they are *not* available on composite components that aren't directly backed by a native view. This will generally include most components that you define in your own app.

### measure(callback)[​](#measurecallback "Direct link to measure(callback)")

Determines the location on screen, width, and height in the viewport of the given view and returns the values via an async callback. If successful, the callback will be called with the following arguments:

* x
* y
* width
* height
* pageX
* pageY

Note that these measurements are not available until after the rendering has been completed in native. If you need the measurements as soon as possible and you don't need `pageX` and `pageY`, consider using the [`onLayout`](/docs/view.md#onlayout) property instead.

Also the width and height returned by `measure()` are the width and height of the component in the viewport. If you need the actual size of the component, consider using the [`onLayout`](/docs/view.md#onlayout) property instead.

### measureInWindow(callback)[​](#measureinwindowcallback "Direct link to measureInWindow(callback)")

Determines the location of the given view in the window and returns the values via an async callback. If the React root view is embedded in another native view, this will give you the absolute coordinates. If successful, the callback will be called with the following arguments:

* x
* y
* width
* height

### measureLayout(relativeToNativeComponentRef, onSuccess, onFail)[​](#measurelayoutrelativetonativecomponentref-onsuccess-onfail "Direct link to measureLayout(relativeToNativeComponentRef, onSuccess, onFail)")

Like `measure()`, but measures the view relative to an ancestor, specified with `relativeToNativeComponentRef` reference. This means that the returned coordinates are relative to the origin `x`, `y` of the ancestor view.

note

This method can also be called with a `relativeToNativeNode` handler (instead of reference), but this variant is obsolete with the new architecture.

* TypeScript
* JavaScript

### focus()[​](#focus "Direct link to focus()")

Requests focus for the given input or view. The exact behavior triggered will depend on the platform and type of view.

### blur()[​](#blur "Direct link to blur()")

Removes focus from an input or view. This is the opposite of `focus()`.


---

# Local libraries setup

A local library is a library containing views or modules that's local to your app and not published to a registry. This is different from the traditional setup for view and modules in the sense that a local library is decoupled from your app's native code.

The local library is created outside of the `android/` and `ios/` folders and makes use of autolinking to integrate with your app. The structure with a local library may look like this:

plaintext

```

MyApp
├── node\_modules
├── modules <-- folder for your local libraries
│ └── awesome-module <-- your local library
├── android
├── ios
├── src
├── index.js
└── package.json

```

Since a local library's code exists outside of `android/` and `ios/` folders, it makes it easier to upgrade React Native versions in the future, copy to other projects etc.

To create local library we will use [create-react-native-library](https://callstack.github.io/react-native-builder-bob/create). This tool contains all the necessary templates.

### Getting Started[​](#getting-started "Direct link to Getting Started")

Inside your React Native application's root folder, run the following command:

shell

```

npx create-react-native-library@latest awesome-module

```

Where `awesome-module` is the name you would like for the new module. After going through the prompts, you will have a new folder called `modules` in your project's root directory which contains the new module.

### Linking[​](#linking "Direct link to Linking")

By default, the generated library is automatically linked to the project using `link:` protocol when using Yarn and `file:` when using npm:

* npm
* Yarn

json

```

"dependencies": {
"awesome-module": "file:./modules/awesome-module"
}

```

json

```

"dependencies": {
"awesome-module": "link:./modules/awesome-module"
}

```

This creates a symlink to the library under `node_modules` which makes autolinking work.

### Installing dependencies[​](#installing-dependencies "Direct link to Installing dependencies")

To link the module you need to install dependencies:

* npm
* Yarn

shell

```

npm install

```

shell

```

yarn install

```

### Using module inside your app[​](#using-module-inside-your-app "Direct link to Using module inside your app")

To use the module inside your app, you can import it by its name:

js

```

import {multiply} from 'awesome-module';

```


---

# Android Native UI Components

info

Native Module and Native Components are our stable technologies used by the legacy architecture. They will be deprecated in the future when the New Architecture will be stable. The New Architecture uses [Turbo Native Module](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/turbo-modules.md) and [Fabric Native Components](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/fabric-native-components.md) to achieve similar results.

There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like `ScrollView` and `TextInput`, but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application.

Like the native module guide, this too is a more advanced guide that assumes you are somewhat familiar with Android SDK programming. This guide will show you how to build a native UI component, walking you through the implementation of a subset of the existing `ImageView` component available in the core React Native library.

info

You can also setup local library containing native component with one command. Read the guide to [Local libraries setup](/docs/legacy/local-library-setup.md) for more details.

## ImageView example[​](#imageview-example "Direct link to ImageView example")

For this example we are going to walk through the implementation requirements to allow the use of ImageViews in JavaScript.

Native views are created and manipulated by extending `ViewManager` or more commonly `SimpleViewManager` . A `SimpleViewManager` is convenient in this case because it applies common properties such as background color, opacity, and Flexbox layout.

These subclasses are essentially singletons - only one instance of each is created by the bridge. They send native views to the `NativeViewHierarchyManager`, which delegates back to them to set and update the properties of the views as necessary. The `ViewManagers` are also typically the delegates for the views, sending events back to JavaScript via the bridge.

To send a view:

1. Create the ViewManager subclass.
2. Implement the `createViewInstance` method
3. Expose view property setters using `@ReactProp` (or `@ReactPropGroup`) annotation
4. Register the manager in `createViewManagers` of the applications package.
5. Implement the JavaScript module

### 1. Create the `ViewManager` subclass[​](#1-create-the-viewmanager-subclass "Direct link to 1-create-the-viewmanager-subclass")

In this example we create view manager class `ReactImageManager` that extends `SimpleViewManager` of type `ReactImageView`. `ReactImageView` is the type of object managed by the manager, this will be the custom native view. Name returned by `getName` is used to reference the native view type from JavaScript.

* Java
* Kotlin

kotlin

```

class ReactImageManager(
private val callerContext: ReactApplicationContext
) : SimpleViewManager() {

override fun getName() = REACT\_CLASS

companion object {
const val REACT\_CLASS = "RCTImageView"
}
}

```

java

```

public class ReactImageManager extends SimpleViewManager {

public static final String REACT\_CLASS = "RCTImageView";
ReactApplicationContext mCallerContext;

public ReactImageManager(ReactApplicationContext reactContext) {
mCallerContext = reactContext;
}

@Override
public String getName() {
return REACT\_CLASS;
}
}

```

### 2. Implement method `createViewInstance`[​](#2-implement-method-createviewinstance "Direct link to 2-implement-method-createviewinstance")

Views are created in the `createViewInstance` method, the view should initialize itself in its default state, any properties will be set via a follow up call to `updateView.`

* Java
* Kotlin

kotlin

```

override fun createViewInstance(context: ThemedReactContext) =
ReactImageView(context, Fresco.newDraweeControllerBuilder(), null, callerContext)

```

java

```

@Override
public ReactImageView createViewInstance(ThemedReactContext context) {
return new ReactImageView(context, Fresco.newDraweeControllerBuilder(), null, mCallerContext);
}

```

### 3. Expose view property setters using `@ReactProp` (or `@ReactPropGroup`) annotation[​](#3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation "Direct link to 3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation")

Properties that are to be reflected in JavaScript needs to be exposed as setter method annotated with `@ReactProp` (or `@ReactPropGroup`). Setter method should take view to be updated (of the current view type) as a first argument and property value as a second argument. Setter should be public and not return a value (i.e. return type should be `void` in Java or `Unit` in Kotlin). Property type sent to JS is determined automatically based on the type of value argument of the setter. The following type of values are currently supported (in Java): `boolean`, `int`, `float`, `double`, `String`, `Boolean`, `Integer`, `ReadableArray`, `ReadableMap`. The corresponding types in Kotlin are `Boolean`, `Int`, `Float`, `Double`, `String`, `ReadableArray`, `ReadableMap`.

Annotation `@ReactProp` has one obligatory argument `name` of type `String`. Name assigned to the `@ReactProp` annotation linked to the setter method is used to reference the property on JS side.

Except from `name`, `@ReactProp` annotation may take following optional arguments: `defaultBoolean`, `defaultInt`, `defaultFloat`. Those arguments should be of the corresponding type (accordingly `boolean`, `int`, `float` in Java and `Boolean`, `Int`, `Float` in Kotlin) and the value provided will be passed to the setter method in case when the property that the setter is referencing has been removed from the component. Note that "default" values are only provided for primitive types, in case when setter is of some complex type, `null` will be provided as a default value in case when corresponding property gets removed.

Setter declaration requirements for methods annotated with `@ReactPropGroup` are different than for `@ReactProp`, please refer to the `@ReactPropGroup` annotation class docs for more information about it. **IMPORTANT!** in ReactJS updating the property value will result in setter method call. Note that one of the ways we can update component is by removing properties that have been set before. In that case setter method will be called as well to notify view manager that property has changed. In that case "default" value will be provided (for primitive types "default" value can be specified using `defaultBoolean`, `defaultFloat`, etc. arguments of `@ReactProp` annotation, for complex types setter will be called with value set to `null`).

* Java
* Kotlin

kotlin

```

@ReactProp(name = "src")
fun setSrc(view: ReactImageView, sources: ReadableArray?) {
view.setSource(sources)
}

@ReactProp(name = "borderRadius", defaultFloat = 0f)
override fun setBorderRadius(view: ReactImageView, borderRadius: Float) {
view.setBorderRadius(borderRadius)
}

@ReactProp(name = ViewProps.RESIZE\_MODE)
fun setResizeMode(view: ReactImageView, resizeMode: String?) {
view.setScaleType(ImageResizeMode.toScaleType(resizeMode))
}

```

java

```

@ReactProp(name = "src")
public void setSrc(ReactImageView view, @Nullable ReadableArray sources) {
view.setSource(sources);
}

@ReactProp(name = "borderRadius", defaultFloat = 0f)
public void setBorderRadius(ReactImageView view, float borderRadius) {
view.setBorderRadius(borderRadius);
}

@ReactProp(name = ViewProps.RESIZE\_MODE)
public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {
view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
}

```

### 4. Register the `ViewManager`[​](#4-register-the-viewmanager "Direct link to 4-register-the-viewmanager")

The final step is to register the ViewManager to the application, this happens in a similar way to [Native Modules](/docs/legacy/native-modules-android.md), via the applications package member function `createViewManagers`.

* Java
* Kotlin

kotlin

```

override fun createViewManagers(
reactContext: ReactApplicationContext
) = listOf(ReactImageManager(reactContext))

```

java

```

@Override
public List createViewManagers(
ReactApplicationContext reactContext) {
return Arrays.asList(
new ReactImageManager(reactContext)
);
}

```

### 5. Implement the JavaScript module[​](#5-implement-the-javascript-module "Direct link to 5. Implement the JavaScript module")

The very final step is to create the JavaScript module that defines the interface layer between Java/Kotlin and JavaScript for the users of your new view. It is recommended for you to document the component interface in this module (e.g. using TypeScript, Flow, or plain old comments).

ImageView\.tsx

```

import {requireNativeComponent} from 'react-native';

/\*\*

- Composes `View`.
-
- - src: Array<{url: string}>
- - borderRadius: number
- - resizeMode: 'cover' | 'contain' | 'stretch'
    \*/
    export default requireNativeComponent('RCTImageView');

```

The `requireNativeComponent` function takes the name of the native view. Note that if your component needs to do anything more sophisticated (e.g. custom event handling), you should wrap the native component in another React component. This is illustrated in the `MyCustomView` example below.

## Events[​](#events "Direct link to Events")

So now we know how to expose native view components that we can control freely from JS, but how do we deal with events from the user, like pinch-zooms or panning? When a native event occurs the native code should issue an event to the JavaScript representation of the View, and the two views are linked with the value returned from the `getId()` method.

* Java
* Kotlin

kotlin

```

class MyCustomView(context: Context) : View(context) {
...
fun onReceiveNativeEvent() {
val event = Arguments.createMap().apply {
putString("message", "MyMessage")
}
val reactContext = context as ReactContext
reactContext
.getJSModule(RCTEventEmitter::class.java)
.receiveEvent(id, "topChange", event)
}
}

```

java

```

class MyCustomView extends View {
...
public void onReceiveNativeEvent() {
WritableMap event = Arguments.createMap();
event.putString("message", "MyMessage");
ReactContext reactContext = (ReactContext)getContext();
reactContext
.getJSModule(RCTEventEmitter.class)
.receiveEvent(getId(), "topChange", event);
}
}

```

To map the `topChange` event name to the `onChange` callback prop in JavaScript, register it by overriding the `getExportedCustomBubblingEventTypeConstants` method in your `ViewManager`:

* Java
* Kotlin

kotlin

```

class ReactImageManager : SimpleViewManager() {
...
override fun getExportedCustomBubblingEventTypeConstants(): Map\<String, Any> {
return mapOf(
"topChange" to mapOf(
"phasedRegistrationNames" to mapOf(
"bubbled" to "onChange"
)
)
)
}
}

```

java

```

public class ReactImageManager extends SimpleViewManager {
...
public Map getExportedCustomBubblingEventTypeConstants() {
return MapBuilder.builder().put(
"topChange",
MapBuilder.of(
"phasedRegistrationNames",
MapBuilder.of("bubbled", "onChange")
)
).build();
}
}

```

This callback is invoked with the raw event, which we typically process in the wrapper component to make a simpler API:

MyCustomView\.tsx

```

import {useCallback} from 'react';
import {requireNativeComponent} from 'react-native';

const RCTMyCustomView = requireNativeComponent('RCTMyCustomView');

export default function MyCustomView(props: {
// ...
/\*\*

- Callback that is called continuously when the user is dragging the map.
  \*/
  onChangeMessage: (message: string) => unknown;
  }) {
  const onChange = useCallback(
  event => {
  props.onChangeMessage?.(event.nativeEvent.message);
  },
  \[props.onChangeMessage],
  );

return ;
}

```

## Integration with an Android Fragment example[​](#integration-with-an-android-fragment-example "Direct link to Integration with an Android Fragment example")

In order to integrate existing Native UI elements to your React Native app, you might need to use Android Fragments to give you a more granular control over your native component than returning a `View` from your `ViewManager`. You will need this if you want to add custom logic that is tied to your view with the help of [lifecycle methods](https://developer.android.com/guide/fragments/lifecycle), such as `onViewCreated`, `onPause`, `onResume`. The following steps will show you how to do it:

### 1. Create an example custom view[​](#1-create-an-example-custom-view "Direct link to 1. Create an example custom view")

First, let's create a `CustomView` class which extends `FrameLayout` (the content of this view can be any view that you'd like to render)

* Java
* Kotlin

CustomView\.kt

```

// replace with your package
package com.mypackage

import android.content.Context
import android.graphics.Color
import android.widget.FrameLayout
import android.widget.TextView

class CustomView(context: Context) : FrameLayout(context) {
init {
// set padding and background color
setPadding(16,16,16,16)
setBackgroundColor(Color.parseColor("#5FD3F3"))

```
// add default text view
addView(TextView(context).apply {
  text = "Welcome to Android Fragments with React Native."
})
```

}
}

```

CustomView\.java

```

// replace with your package
package com.mypackage;

import android.content.Context;
import android.graphics.Color;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;

public class CustomView extends FrameLayout {
public CustomView(@NonNull Context context) {
super(context);
// set padding and background color
this.setPadding(16,16,16,16);
this.setBackgroundColor(Color.parseColor("#5FD3F3"));

```
// add default text view
TextView text = new TextView(context);
text.setText("Welcome to Android Fragments with React Native.");
this.addView(text);
```

}
}

```

### 2. Create a `Fragment`[​](#2-create-a-fragment "Direct link to 2-create-a-fragment")

* Java
* Kotlin

MyFragment.kt

```

// replace with your package
package com.mypackage

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment

// replace with your view's import
import com.mypackage.CustomView

class MyFragment : Fragment() {
private lateinit var customView: CustomView

override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View {
super.onCreateView(inflater, container, savedInstanceState)
customView = CustomView(requireNotNull(context))
return customView // this CustomView could be any view that you want to render
}

override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
super.onViewCreated(view, savedInstanceState)
// do any logic that should happen in an `onCreate` method, e.g:
// customView.onCreate(savedInstanceState);
}

override fun onPause() {
super.onPause()
// do any logic that should happen in an `onPause` method
// e.g.: customView.onPause();
}

override fun onResume() {
super.onResume()
// do any logic that should happen in an `onResume` method
// e.g.: customView.onResume();
}

override fun onDestroy() {
super.onDestroy()
// do any logic that should happen in an `onDestroy` method
// e.g.: customView.onDestroy();
}
}

```

MyFragment.java

```

// replace with your package
package com.mypackage;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;

// replace with your view's import
import com.mypackage.CustomView;

public class MyFragment extends Fragment {
CustomView customView;

```
@Override
public View onCreateView(LayoutInflater inflater, ViewGroup parent, Bundle savedInstanceState) {
    super.onCreateView(inflater, parent, savedInstanceState);
    customView = new CustomView(this.getContext());
    return customView; // this CustomView could be any view that you want to render
}

@Override
public void onViewCreated(View view, Bundle savedInstanceState) {
    super.onViewCreated(view, savedInstanceState);
    // do any logic that should happen in an `onCreate` method, e.g:
    // customView.onCreate(savedInstanceState);
}

@Override
public void onPause() {
    super.onPause();
    // do any logic that should happen in an `onPause` method
    // e.g.: customView.onPause();
}

@Override
public void onResume() {
    super.onResume();
   // do any logic that should happen in an `onResume` method
   // e.g.: customView.onResume();
}

@Override
public void onDestroy() {
    super.onDestroy();
    // do any logic that should happen in an `onDestroy` method
    // e.g.: customView.onDestroy();
}
```

}

```

### 3. Create the `ViewManager` subclass[​](#3-create-the-viewmanager-subclass "Direct link to 3-create-the-viewmanager-subclass")

* Java
* Kotlin

MyViewManager.kt

```

// replace with your package
package com.mypackage

import android.view.Choreographer
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import androidx.fragment.app.FragmentActivity
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactPropGroup

class MyViewManager(
private val reactContext: ReactApplicationContext
) : ViewGroupManager() {
private var propWidth: Int? = null
private var propHeight: Int? = null

override fun getName() = REACT\_CLASS

/\*\*

- Return a FrameLayout which will later hold the Fragment
  \*/
  override fun createViewInstance(reactContext: ThemedReactContext) =
  FrameLayout(reactContext)

/\*\*

- Map the "create" command to an integer
  \*/
  override fun getCommandsMap() = mapOf("create" to COMMAND\_CREATE)

/\*\*

- Handle "create" command (called from JS) and call createFragment method
  \*/
  override fun receiveCommand(
  root: FrameLayout,
  commandId: String,
  args: ReadableArray?
  ) {
  super.receiveCommand(root, commandId, args)
  val reactNativeViewId = requireNotNull(args).getInt(0)

```
when (commandId.toInt()) {
```

```
  COMMAND_CREATE -> createFragment(root, reactNativeViewId)
}
```

}

@ReactPropGroup(names = \["width", "height"], customType = "Style")
fun setStyle(view: FrameLayout, index: Int, value: Int) {
if (index == 0) propWidth = value
if (index == 1) propHeight = value
}

/\*\*

- Replace your React Native view with a custom fragment
  \*/
  fun createFragment(root: FrameLayout, reactNativeViewId: Int) {
  val parentView = root.findViewById(reactNativeViewId)
  setupLayout(parentView)

```
val myFragment = MyFragment()
```

```
val activity = reactContext.currentActivity as FragmentActivity
activity.supportFragmentManager
    .beginTransaction()
    .replace(reactNativeViewId, myFragment, reactNativeViewId.toString())
    .commit()
```

}

fun setupLayout(view: View) {
Choreographer.getInstance().postFrameCallback(object: Choreographer.FrameCallback {
override fun doFrame(frameTimeNanos: Long) {
manuallyLayoutChildren(view)
view.viewTreeObserver.dispatchOnGlobalLayout()
Choreographer.getInstance().postFrameCallback(this)
}
})
}

/\*\*

- Layout all children properly
  \*/
  private fun manuallyLayoutChildren(view: View) {
  // propWidth and propHeight coming from react-native props
  val width = requireNotNull(propWidth)
  val height = requireNotNull(propHeight)

```
view.measure(
```

```
    View.MeasureSpec.makeMeasureSpec(width, View.MeasureSpec.EXACTLY),
    View.MeasureSpec.makeMeasureSpec(height, View.MeasureSpec.EXACTLY))

view.layout(0, 0, width, height)
```

}

companion object {
private const val REACT\_CLASS = "MyViewManager"
private const val COMMAND\_CREATE = 1
}
}

```

MyViewManager.java

```

// replace with your package
package com.mypackage;

import android.view.Choreographer;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.FragmentActivity;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ThemedReactContext;

import java.util.Map;

public class MyViewManager extends ViewGroupManager {

public static final String REACT\_CLASS = "MyViewManager";
public final int COMMAND\_CREATE = 1;
private int propWidth;
private int propHeight;

ReactApplicationContext reactContext;

public MyViewManager(ReactApplicationContext reactContext) {
this.reactContext = reactContext;
}

@Override
public String getName() {
return REACT\_CLASS;
}

/\*\*

- Return a FrameLayout which will later hold the Fragment
  \*/
  @Override
  public FrameLayout createViewInstance(ThemedReactContext reactContext) {
  return new FrameLayout(reactContext);
  }

/\*\*

- Map the "create" command to an integer
  \*/
  @Nullable
  @Override
  public Map\<String, Integer> getCommandsMap() {
  return MapBuilder.of("create", COMMAND\_CREATE);
  }

/\*\*

- Handle "create" command (called from JS) and call createFragment method
  \*/
  @Override
  public void receiveCommand(
  @NonNull FrameLayout root,
  String commandId,
  @Nullable ReadableArray args
  ) {
  super.receiveCommand(root, commandId, args);
  int reactNativeViewId = args.getInt(0);
  int commandIdInt = Integer.parseInt(commandId);

```
switch (commandIdInt) {
```

```
  case COMMAND_CREATE:
    createFragment(root, reactNativeViewId);
    break;
  default: {}
}
```

}

@ReactPropGroup(names = {"width", "height"}, customType = "Style")
public void setStyle(FrameLayout view, int index, Integer value) {
if (index == 0) {
propWidth = value;
}

```
if (index == 1) {
  propHeight = value;
}
```

}

/\*\*

- Replace your React Native view with a custom fragment
  \*/
  public void createFragment(FrameLayout root, int reactNativeViewId) {
  ViewGroup parentView = (ViewGroup) root.findViewById(reactNativeViewId);
  setupLayout(parentView);

```
final MyFragment myFragment = new MyFragment();
```

```
FragmentActivity activity = (FragmentActivity) reactContext.getCurrentActivity();
activity.getSupportFragmentManager()
        .beginTransaction()
        .replace(reactNativeViewId, myFragment, String.valueOf(reactNativeViewId))
        .commit();
```

}

public void setupLayout(View view) {
Choreographer.getInstance().postFrameCallback(new Choreographer.FrameCallback() {
@Override
public void doFrame(long frameTimeNanos) {
manuallyLayoutChildren(view);
view.getViewTreeObserver().dispatchOnGlobalLayout();
Choreographer.getInstance().postFrameCallback(this);
}
});
}

/\*\*

- Layout all children properly
  \*/
  public void manuallyLayoutChildren(View view) {
  // propWidth and propHeight coming from react-native props
  int width = propWidth;
  int height = propHeight;

  view.measure(
  View.MeasureSpec.makeMeasureSpec(width, View.MeasureSpec.EXACTLY),
  View.MeasureSpec.makeMeasureSpec(height, View.MeasureSpec.EXACTLY));

  view.layout(0, 0, width, height);
  }
  }

```

### 4. Register the `ViewManager`[​](#4-register-the-viewmanager-1 "Direct link to 4-register-the-viewmanager-1")

* Java
* Kotlin

MyPackage.kt

```

// replace with your package
package com.mypackage

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

class MyPackage : ReactPackage {
...
override fun createViewManagers(
reactContext: ReactApplicationContext
) = listOf(MyViewManager(reactContext))
}

```

MyPackage.java

```

// replace with your package
package com.mypackage;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.List;

public class MyPackage implements ReactPackage {

@Override
public List createViewManagers(ReactApplicationContext reactContext) {
return Arrays.asList(
new MyViewManager(reactContext)
);
}

}

```

### 5. Register the `Package`[​](#5-register-the-package "Direct link to 5-register-the-package")

* Java
* Kotlin

MainApplication.kt

```

override fun getPackages(): List =
PackageList(this).packages.apply {
// Packages that cannot be autolinked yet can be added manually here, for example:
// add(MyReactNativePackage())
add(MyAppPackage())
}

```

MainApplication.java

```

@Override
protected List getPackages() {
List packages = new PackageList(this).getPackages();
// Packages that cannot be autolinked yet can be added manually here, for example:
// packages.add(new MyReactNativePackage());
packages.add(new MyAppPackage());
return packages;
}

```

### 6. Implement the JavaScript module[​](#6-implement-the-javascript-module "Direct link to 6. Implement the JavaScript module")

I. Start with custom View manager:

MyViewManager.tsx

```

import {requireNativeComponent} from 'react-native';

export const MyViewManager =
requireNativeComponent('MyViewManager');

```

II. Then implement custom View calling the `create` method:

MyView\.tsx

```

import React, {useEffect, useRef} from 'react';
import {
PixelRatio,
UIManager,
findNodeHandle,
} from 'react-native';

import {MyViewManager} from './my-view-manager';

const createFragment = viewId =>
UIManager.dispatchViewManagerCommand(
viewId,
// we are calling the 'create' command
UIManager.MyViewManager.Commands.create.toString(),
\[viewId],
);

export const MyView = () => {
const ref = useRef(null);

useEffect(() => {
const viewId = findNodeHandle(ref.current);
createFragment(viewId);
}, \[]);

return (
\<MyViewManager
style={{
// converts dpi to px, provide desired height
height: PixelRatio.getPixelSizeForLayoutSize(200),
// converts dpi to px, provide desired width
width: PixelRatio.getPixelSizeForLayoutSize(200),
}}
ref={ref}
/>
);
};

```

If you want to expose property setters using `@ReactProp` (or `@ReactPropGroup`) annotation see the [ImageView example](#imageview-example) above.


---

# iOS Native UI Components

info

Native Module and Native Components are our stable technologies used by the legacy architecture. They will be deprecated in the future when the New Architecture will be stable. The New Architecture uses [Turbo Native Module](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/turbo-modules.md) and [Fabric Native Components](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/fabric-native-components.md) to achieve similar results.

There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like `ScrollView` and `TextInput`, but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application.

Like the native module guide, this too is a more advanced guide that assumes you are somewhat familiar with iOS programming. This guide will show you how to build a native UI component, walking you through the implementation of a subset of the existing `MapView` component available in the core React Native library.

## iOS MapView example[​](#ios-mapview-example "Direct link to iOS MapView example")

Let's say we want to add an interactive Map to our app - might as well use [`MKMapView`](https://developer.apple.com/library/prerelease/mac/documentation/MapKit/Reference/MKMapView_Class/index.html), we only need to make it usable from JavaScript.

Native views are created and manipulated by subclasses of `RCTViewManager`. These subclasses are similar in function to view controllers, but are essentially singletons - only one instance of each is created by the bridge. They expose native views to the `RCTUIManager`, which delegates back to them to set and update the properties of the views as necessary. The `RCTViewManager`s are also typically the delegates for the views, sending events back to JavaScript via the bridge.

To expose a view you can:

* Subclass `RCTViewManager` to create a manager for your component.
* Add the `RCT_EXPORT_MODULE()` marker macro.
* Implement the `-(UIView *)view` method.

RNTMapManager.m

```

\#import \<MapKit/MapKit.h>

\#import \<React/RCTViewManager.h>

@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager

RCT\_EXPORT\_MODULE(RNTMap)

- (UIView \*)view
  {
  return \[\[MKMapView alloc] init];
  }

@end

```

note

Do not attempt to set the `frame` or `backgroundColor` properties on the `UIView` instance that you expose through the `-view` method. React Native will overwrite the values set by your custom class in order to match your JavaScript component's layout props. If you need this granularity of control it might be better to wrap the `UIView` instance you want to style in another `UIView` and return the wrapper `UIView` instead. See [Issue 2948](https://github.com/facebook/react-native/issues/2948) for more context.

info

In the example above, we prefixed our class name with `RNT`. Prefixes are used to avoid name collisions with other frameworks. Apple frameworks use two-letter prefixes, and React Native uses `RCT` as a prefix. In order to avoid name collisions, we recommend using a three-letter prefix other than `RCT` in your own classes.

Then you need a little bit of JavaScript to make this a usable React component:

MapView\.tsx

```

import {requireNativeComponent} from 'react-native';

export default requireNativeComponent('RNTMap');

```

The `requireNativeComponent` function automatically resolves `RNTMap` to `RNTMapManager` and exports our native view for use in JavaScript.

MyApp.tsx

```

import MapView from './MapView.tsx';

export default function MyApp() {
return ;
}

```

note

When rendering, don't forget to stretch the view, otherwise you'll be staring at a blank screen.

This is now a fully-functioning native map view component in JavaScript, complete with pinch-zoom and other native gesture support. We can't really control it from JavaScript yet, though.

## Properties[​](#properties "Direct link to Properties")

The first thing we can do to make this component more usable is to bridge over some native properties. Let's say we want to be able to disable zooming and specify the visible region. Disabling zoom is a boolean, so we add this one line:

RNTMapManager.m

```

RCT\_EXPORT\_VIEW\_PROPERTY(zoomEnabled, BOOL)

```

Note that we explicitly specify the type as `BOOL` - React Native uses `RCTConvert` under the hood to convert all sorts of different data types when talking over the bridge, and bad values will show convenient "RedBox" errors to let you know there is an issue ASAP. When things are straightforward like this, the whole implementation is taken care of for you by this macro.

Now to actually disable zooming, we set the property in JavaScript:

MyApp.tsx

```

import MapView from './MapView.tsx';

export default function MyApp() {
return ;
}

```

To document the properties (and which values they accept) of our MapView component we'll add a wrapper component and document the interface with TypeScript:

MapView\.tsx

```

import {requireNativeComponent} from 'react-native';

const RNTMap = requireNativeComponent('RNTMap');

export default function MapView(props: {
/\*\*

- Whether the user may use pinch gestures to zoom in and out.
  \*/
  zoomEnabled?: boolean;
  }) {
  return ;
  }

```

Now we have a nicely documented wrapper component to work with.

Next, let's add the more complex `region` prop. We start by adding the native code:

RNTMapManager.m

```

RCT\_CUSTOM\_VIEW\_PROPERTY(region, MKCoordinateRegion, MKMapView)
{
\[view setRegion:json ? \[RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

```

Ok, this is more complicated than the `BOOL` case we had before. Now we have a `MKCoordinateRegion` type that needs a conversion function, and we have custom code so that the view will animate when we set the region from JS. Within the function body that we provide, `json` refers to the raw value that has been passed from JS. There is also a `view` variable which gives us access to the manager's view instance, and a `defaultView` that we use to reset the property back to the default value if JS sends us a null sentinel.

You could write any conversion function you want for your view - here is the implementation for `MKCoordinateRegion` via a category on `RCTConvert`. It uses an already existing category of ReactNative `RCTConvert+CoreLocation`:

RNTMapManager.m

```

\#import "RCTConvert+Mapkit.h"

```

RCTConvert+Mapkit.h

```

\#import \<MapKit/MapKit.h>
\#import \<React/RCTConvert.h>
\#import \<CoreLocation/CoreLocation.h>
\#import \<React/RCTConvert+CoreLocation.h>

@interface RCTConvert (Mapkit)

- (MKCoordinateSpan)MKCoordinateSpan:(id)json;
- (MKCoordinateRegion)MKCoordinateRegion:(id)json;

@end

@implementation RCTConvert(MapKit)

- (MKCoordinateSpan)MKCoordinateSpan:(id)json
  {
  json = \[self NSDictionary:json];
  return (MKCoordinateSpan){
  \[self CLLocationDegrees:json\[@"latitudeDelta"]],
  \[self CLLocationDegrees:json\[@"longitudeDelta"]]
  };
  }

- (MKCoordinateRegion)MKCoordinateRegion:(id)json
  {
  return (MKCoordinateRegion){
  \[self CLLocationCoordinate2D:json],
  \[self MKCoordinateSpan:json]
  };
  }

@end

```

These conversion functions are designed to safely process any JSON that the JS might throw at them by displaying "RedBox" errors and returning standard initialization values when missing keys or other developer errors are encountered.

To finish up support for the `region` prop, we can document it with TypeScript:

MapView\.tsx

```

import {requireNativeComponent} from 'react-native';

const RNTMap = requireNativeComponent('RNTMap');

export default function MapView(props: {
/\*\*

- The region to be displayed by the map.
-
- The region is defined by the center coordinates and the span of
- coordinates to display.
  */
  region?: {
  /*\*
  - Coordinates for the center of the map.
    \*/
    latitude: number;
    longitude: number;

```
/**
```

```
 * Distance between the minimum and the maximum latitude/longitude
 * to be displayed.
 */
latitudeDelta: number;
longitudeDelta: number;
```

};
/\*\*

- Whether the user may use pinch gestures to zoom in and out.
  \*/
  zoomEnabled?: boolean;
  }) {
  return ;
  }

```

We can now supply the `region` prop to `MapView`:

MyApp.tsx

```

import MapView from './MapView.tsx';

export default function MyApp() {
const region = {
latitude: 37.48,
longitude: -122.16,
latitudeDelta: 0.1,
longitudeDelta: 0.1,
};
return (
\<MapView
region={region}
zoomEnabled={false}
style={{flex: 1}}
/>
);
}

```

## Events[​](#events "Direct link to Events")

So now we have a native map component that we can control freely from JS, but how do we deal with events from the user, like pinch-zooms or panning to change the visible region?

Until now we've only returned a `MKMapView` instance from our manager's `-(UIView *)view` method. We can't add new properties to `MKMapView` so we have to create a new subclass from `MKMapView` which we use for our View. We can then add a `onRegionChange` callback on this subclass:

RNTMapView\.h

```

\#import \<MapKit/MapKit.h>

\#import \<React/RCTComponent.h>

@interface RNTMapView: MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end

```

RNTMapView\.m

```

\#import "RNTMapView.h"

@implementation RNTMapView

@end

```

Note that all `RCTBubblingEventBlock` must be prefixed with `on`. Next, declare an event handler property on `RNTMapManager`, make it a delegate for all the views it exposes, and forward events to JS by calling the event handler block from the native view.

RNTMapManager.m

```

\#import \<MapKit/MapKit.h>
\#import \<React/RCTViewManager.h>

\#import "RNTMapView.h"
\#import "RCTConvert+Mapkit.h"

@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager

RCT\_EXPORT\_MODULE()

RCT\_EXPORT\_VIEW\_PROPERTY(zoomEnabled, BOOL)
RCT\_EXPORT\_VIEW\_PROPERTY(onRegionChange, RCTBubblingEventBlock)

RCT\_CUSTOM\_VIEW\_PROPERTY(region, MKCoordinateRegion, MKMapView)
{
\[view setRegion:json ? \[RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

- (UIView \*)view
  {
  RNTMapView \*map = \[RNTMapView new];
  map.delegate = self;
  return map;
  }

\#pragma mark MKMapViewDelegate

- (void)mapView:(RNTMapView \*)mapView regionDidChangeAnimated:(BOOL)animated
  {
  if (!mapView.onRegionChange) {
  return;
  }

  MKCoordinateRegion region = mapView.region;
  mapView.onRegionChange(@{
  @"region": @{
  @"latitude": @(region.center.latitude),
  @"longitude": @(region.center.longitude),
  @"latitudeDelta": @(region.span.latitudeDelta),
  @"longitudeDelta": @(region.span.longitudeDelta),
  }
  });
  }
  @end

```

In the delegate method `-mapView:regionDidChangeAnimated:` the event handler block is called on the corresponding view with the region data. Calling the `onRegionChange` event handler block results in calling the same callback prop in JavaScript. This callback is invoked with the raw event, which we typically process in the wrapper component to simplify the API:

MapView\.tsx

```

// ...

type RegionChangeEvent = {
nativeEvent: {
latitude: number;
longitude: number;
latitudeDelta: number;
longitudeDelta: number;
};
};

export default function MapView(props: {
// ...
/\*\*

- Callback that is called continuously when the user is dragging the map.
  \*/
  onRegionChange: (event: RegionChangeEvent) => unknown;
  }) {
  return ;
  }

```

MyApp.tsx

```

import MapView from './MapView.tsx';

export default function MyApp() {
// ...

const onRegionChange = useCallback(event => {
const {region} = event.nativeEvent;
// Do something with `region.latitude`, etc.
});

return (
\<MapView
// ...
onRegionChange={onRegionChange}
/>
);
}

```

## Handling multiple native views[​](#handling-multiple-native-views "Direct link to Handling multiple native views")

A React Native view can have more than one child view in the view tree eg.

tsx

```

```

In this example, the class `MyNativeView` is a wrapper for a `NativeComponent` and exposes methods, which will be called on the iOS platform. `MyNativeView` is defined in `MyNativeView.ios.js` and contains proxy methods of `NativeComponent`.

When the user interacts with the component, like clicking the button, the `backgroundColor` of `MyNativeView` changes. In this case `UIManager` would not know which `MyNativeView` should be handled and which one should change `backgroundColor`. Below you will find a solution to this problem:

tsx

```

\<Button
onPress={() => {
this.myNativeReference.callNativeMethod();
}}
/>

```

Now the above component has a reference to a particular `MyNativeView` which allows us to use a specific instance of `MyNativeView`. Now the button can control which `MyNativeView` should change its `backgroundColor`. In this example let's assume that `callNativeMethod` changes `backgroundColor`.

MyNativeView\.ios.tsx

```

class MyNativeView extends React.Component {
callNativeMethod = () => {
UIManager.dispatchViewManagerCommand(
ReactNative.findNodeHandle(this),
UIManager.getViewManagerConfig('RNCMyNativeView').Commands
.callNativeMethod,
\[],
);
};

render() {
return ;
}
}

```

`callNativeMethod` is our custom iOS method which for example changes the `backgroundColor` which is exposed through `MyNativeView`. This method uses `UIManager.dispatchViewManagerCommand` which needs 3 parameters:

* `(nonnull NSNumber \*)reactTag`  -  id of react view.
* `commandID:(NSInteger)commandID`  -  Id of the native method that should be called
* `commandArgs:(NSArray<id> \*)commandArgs`  -  Args of the native method that we can pass from JS to native.

RNCMyNativeViewManager.m

```

\#import \<React/RCTViewManager.h>
\#import \<React/RCTUIManager.h>
\#import \<React/RCTLog.h>

RCT\_EXPORT\_METHOD(callNativeMethod:(nonnull NSNumber\*) reactTag) {
\[self.bridge.uiManager addUIBlock:^(RCTUIManager \*uiManager, NSDictionary \*viewRegistry) {
NativeView \*view = viewRegistry\[reactTag];
if (!view || !\[view isKindOfClass:\[NativeView class]]) {
RCTLogError(@"Cannot find NativeView with tag #%@", reactTag);
return;
}
\[view callNativeMethod];
}];

}

```

Here the `callNativeMethod` is defined in the `RNCMyNativeViewManager.m` file and contains only one parameter which is `(nonnull NSNumber*) reactTag`. This exported function will find a particular view using `addUIBlock` which contains the `viewRegistry` parameter and returns the component based on `reactTag` allowing it to call the method on the correct component.

## Styles[​](#styles "Direct link to Styles")

Since all our native react views are subclasses of `UIView`, most style attributes will work like you would expect out of the box. Some components will want a default style, however, for example `UIDatePicker` which is a fixed size. This default style is important for the layout algorithm to work as expected, but we also want to be able to override the default style when using the component. `DatePickerIOS` does this by wrapping the native component in an extra view, which has flexible styling, and using a fixed style (which is generated with constants passed in from native) on the inner native component:

DatePickerIOS.ios.tsx

```

import {UIManager} from 'react-native';
const RCTDatePickerIOSConsts = UIManager.RCTDatePicker.Constants;
...
render: function() {
return (

```
    <RCTDatePickerIOS
      ref={DATEPICKER}
      style={styles.rkDatePickerIOS}
      ...
    />
  
);
```

}
});

const styles = StyleSheet.create({
rkDatePickerIOS: {
height: RCTDatePickerIOSConsts.ComponentHeight,
width: RCTDatePickerIOSConsts.ComponentWidth,
},
});

```

The `RCTDatePickerIOSConsts` constants are exported from native by grabbing the actual frame of the native component like so:

RCTDatePickerManager.m

```

- (NSDictionary \*)constantsToExport
  {
  UIDatePicker \*dp = \[\[UIDatePicker alloc] init];
  \[dp layoutIfNeeded];

  return @{
  @"ComponentHeight": @(CGRectGetHeight(dp.frame)),
  @"ComponentWidth": @(CGRectGetWidth(dp.frame)),
  @"DatePickerModes": @{
  @"time": @(UIDatePickerModeTime),
  @"date": @(UIDatePickerModeDate),
  @"datetime": @(UIDatePickerModeDateAndTime),
  }
  };
  }

```

This guide covered many of the aspects of bridging over custom native components, but there is even more you might need to consider, such as custom hooks for inserting and laying out subviews. If you want to go even deeper, check out the [source code](https://github.com/facebook/react-native/tree/main/packages/react-native/React/Views) of some of the implemented components.


---

# Android Native Modules

info

Native Module and Native Components are our stable technologies used by the legacy architecture. They will be deprecated in the future when the New Architecture will be stable. The New Architecture uses [Turbo Native Module](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/turbo-modules.md) and [Fabric Native Components](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/fabric-native-components.md) to achieve similar results.

Welcome to Native Modules for Android. Please start by reading the [Native Modules Intro](/docs/legacy/native-modules-intro.md) for an intro to what native modules are.

## Create a Calendar Native Module[​](#create-a-calendar-native-module "Direct link to Create a Calendar Native Module")

In the following guide you will create a native module, `CalendarModule`, that will allow you to access Android’s calendar APIs from JavaScript. By the end, you will be able to call `CalendarModule.createCalendarEvent('Dinner Party', 'My House');` from JavaScript, invoking a Java/Kotlin method that creates a calendar event.

### Setup[​](#setup "Direct link to Setup")

To get started, open up the Android project within your React Native application in Android Studio. You can find your Android project here within a React Native app:

![Image of opening up an Android project within a React Native app inside of Android Studio.](/docs/assets/native-modules-android-open-project.png)

Image of where you can find your Android project

We recommend using Android Studio to write your native code. Android Studio is an IDE built for Android development and using it will help you resolve minor issues like code syntax errors quickly.

We also recommend enabling [Gradle Daemon](https://docs.gradle.org/2.9/userguide/gradle_daemon.html) to speed up builds as you iterate on Java/Kotlin code.

### Create A Custom Native Module File[​](#create-a-custom-native-module-file "Direct link to Create A Custom Native Module File")

The first step is to create the (`CalendarModule.java` or `CalendarModule.kt`) Java/Kotlin file inside `android/app/src/main/java/com/your-app-name/` folder (the folder is the same for both Kotlin and Java). This Java/Kotlin file will contain your native module Java/Kotlin class.

![Image of adding a class called CalendarModule.java within the Android Studio.](/docs/assets/native-modules-android-add-class.png)

Image of how to add the CalendarModuleClass

Then add the following content:

* Java
* Kotlin

java

```

package com.your-apps-package-name; // replace your-apps-package-name with your app’s package name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CalendarModule extends ReactContextBaseJavaModule {
CalendarModule(ReactApplicationContext context) {
super(context);
}
}

```

kotlin

```

package com.your-apps-package-name; // replace your-apps-package-name with your app’s package name
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {...}

```

As you can see, your `CalendarModule` class extends the `ReactContextBaseJavaModule` class. For Android, Java/Kotlin native modules are written as classes that extend `ReactContextBaseJavaModule` and implement the functionality required by JavaScript.

note

It is worth noting that technically Java/Kotlin classes only need to extend the `BaseJavaModule` class or implement the `NativeModule` interface to be considered a Native Module by React Native.

However we recommend that you use `ReactContextBaseJavaModule`, as shown above. `ReactContextBaseJavaModule` gives access to the `ReactApplicationContext` (RAC), which is useful for Native Modules that need to hook into activity lifecycle methods. Using `ReactContextBaseJavaModule` will also make it easier to make your native module type-safe in the future. For native module type-safety, which is coming in future releases, React Native looks at each native module's JavaScript spec and generates an abstract base class that extends `ReactContextBaseJavaModule`.

### Module Name[​](#module-name "Direct link to Module Name")

All Java/Kotlin native modules in Android need to implement the `getName()` method. This method returns a string, which represents the name of the native module. The native module can then be accessed in JavaScript using its name. For example, in the below code snippet, `getName()` returns `"CalendarModule"`.

* Java
* Kotlin

java

```

// add to CalendarModule.java
@Override
public String getName() {
return "CalendarModule";
}

```

kotlin

```

// add to CalendarModule.kt
override fun getName() = "CalendarModule"

```

The native module can then be accessed in JS like this:

tsx

```

const {CalendarModule} = ReactNative.NativeModules;

```

### Export a Native Method to JavaScript[​](#export-a-native-method-to-javascript "Direct link to Export a Native Method to JavaScript")

Next you will need to add a method to your native module that will create calendar events and can be invoked in JavaScript. All native module methods meant to be invoked from JavaScript must be annotated with `@ReactMethod`.

Set up a method `createCalendarEvent()` for `CalendarModule` that can be invoked in JS through `CalendarModule.createCalendarEvent()`. For now, the method will take in a name and location as strings. Argument type options will be covered shortly.

* Java
* Kotlin

java

```

@ReactMethod
public void createCalendarEvent(String name, String location) {
}

```

kotlin

```

@ReactMethod fun createCalendarEvent(name: String, location: String) {}

```

Add a debug log in the method to confirm it has been invoked when you call it from your application. Below is an example of how you can import and use the [Log](https://developer.android.com/reference/android/util/Log) class from the Android util package:

* Java
* Kotlin

java

```

import android.util.Log;

@ReactMethod
public void createCalendarEvent(String name, String location) {
Log.d("CalendarModule", "Create event called with name: " + name

- " and location: " + location);
  }

```

kotlin

```

import android.util.Log

@ReactMethod
fun createCalendarEvent(name: String, location: String) {
Log.d("CalendarModule", "Create event called with name: $name and location: $location")
}

```

Once you finish implementing the native module and hook it up in JavaScript, you can follow [these steps](https://developer.android.com/studio/debug/am-logcat.html) to view the logs from your app.

### Synchronous Methods[​](#synchronous-methods "Direct link to Synchronous Methods")

You can pass `isBlockingSynchronousMethod = true` to a native method to mark it as a synchronous method.

* Java
* Kotlin

java

```

@ReactMethod(isBlockingSynchronousMethod = true)

```

kotlin

```

@ReactMethod(isBlockingSynchronousMethod = true)

```

At the moment, we do not recommend this, since calling methods synchronously can have strong performance penalties and introduce threading-related bugs to your native modules. Additionally, please note that if you choose to enable `isBlockingSynchronousMethod`, your app can no longer use the Google Chrome debugger. This is because synchronous methods require the JS VM to share memory with the app. For the Google Chrome debugger, React Native runs inside the JS VM in Google Chrome, and communicates asynchronously with the mobile devices via WebSockets.

### Register the Module (Android Specific)[​](#register-the-module-android-specific "Direct link to Register the Module (Android Specific)")

Once a native module is written, it needs to be registered with React Native. In order to do so, you need to add your native module to a `ReactPackage` and register the `ReactPackage` with React Native. During initialization, React Native will loop over all packages, and for each `ReactPackage`, register each native module within.

React Native invokes the method `createNativeModules()` on a `ReactPackage` in order to get the list of native modules to register. For Android, if a module is not instantiated and returned in createNativeModules it will not be available from JavaScript.

To add your Native Module to `ReactPackage`, first create a new Java/Kotlin Class named (`MyAppPackage.java` or `MyAppPackage.kt`) that implements `ReactPackage` inside the `android/app/src/main/java/com/your-app-name/` folder:

Then add the following content:

* Java
* Kotlin

java

```

package com.your-app-name; // replace your-app-name with your app’s name
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyAppPackage implements ReactPackage {

@Override
public List createViewManagers(ReactApplicationContext reactContext) {
return Collections.emptyList();
}

@Override
public List createNativeModules(
ReactApplicationContext reactContext) {
List modules = new ArrayList<>();

```
   modules.add(new CalendarModule(reactContext));

   return modules;
```

}

}

```

kotlin

```

package com.your-app-name // replace your-app-name with your app’s name

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager

class MyAppPackage : ReactPackage {

```
override fun createViewManagers(
    reactContext: ReactApplicationContext
): MutableList<ViewManager<View, ReactShadowNode<*>>> = mutableListOf()

override fun createNativeModules(
    reactContext: ReactApplicationContext
): MutableList = listOf(CalendarModule(reactContext)).toMutableList()
```

}

```

This file imports the native module you created, `CalendarModule`. It then instantiates `CalendarModule` within the `createNativeModules()` function and returns it as a list of `NativeModules` to register. If you add more native modules down the line, you can also instantiate them and add them to the list returned here.

note

It is worth noting that this way of registering native modules eagerly initializes all native modules when the application starts, which adds to the startup time of an application. You can use [TurboReactPackage](https://github.com/facebook/react-native/blob/main/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/TurboReactPackage.kt) as an alternative. Instead of `createNativeModules`, which return a list of instantiated native module objects, TurboReactPackage implements a `getModule(String name, ReactApplicationContext rac)` method that creates the native module object, when required. TurboReactPackage is a bit more complicated to implement at the moment. In addition to implementing a `getModule()` method, you have to implement a `getReactModuleInfoProvider()` method, which returns a list of all the native modules the package can instantiate along with a function that instantiates them, example [here](https://github.com/facebook/react-native/blob/8ac467c51b94c82d81930b4802b2978c85539925/ReactAndroid/src/main/java/com/facebook/react/CoreModulesPackage.java#L86-L165). Again, using TurboReactPackage will allow your application to have a faster startup time, but it is currently a bit cumbersome to write. So proceed with caution if you choose to use TurboReactPackages.

To register the `CalendarModule` package, you must add `MyAppPackage` to the list of packages returned in ReactNativeHost's `getPackages()` method. Open up your `MainApplication.java` or `MainApplication.kt` file, which can be found in the following path: `android/app/src/main/java/com/your-app-name/`.

Locate ReactNativeHost’s `getPackages()` method and add your package to the packages list `getPackages()` returns:

* Java
* Kotlin

java

```

@Override
protected List getPackages() {
List packages = new PackageList(this).getPackages();
// Packages that cannot be autolinked yet can be added manually here, for example:
// packages.add(new MyReactNativePackage());
packages.add(new MyAppPackage());
return packages;
}

```

kotlin

```

override fun getPackages(): List =
PackageList(this).packages.apply {
// Packages that cannot be autolinked yet can be added manually here, for example:
// add(MyReactNativePackage())
add(MyAppPackage())
}

```

You have now successfully registered your native module for Android!

### Test What You Have Built[​](#test-what-you-have-built "Direct link to Test What You Have Built")

At this point, you have set up the basic scaffolding for your native module in Android. Test that out by accessing the native module and invoking its exported method in JavaScript.

Find a place in your application where you would like to add a call to the native module’s `createCalendarEvent()` method. Below is an example of a component, `NewModuleButton` you can add in your app. You can invoke the native module inside `NewModuleButton`'s `onPress()` function.

tsx

```

import React from 'react';
import {NativeModules, Button} from 'react-native';

const NewModuleButton = () => {
const onPress = () => {
console.log('We will invoke the native module here!');
};

return ( <Button
   title="Click to invoke your native module!"
   color="#841584"
   onPress={onPress}
 />
);
};

export default NewModuleButton;

```

In order to access your native module from JavaScript you need to first import `NativeModules` from React Native:

tsx

```

import {NativeModules} from 'react-native';

```

You can then access the `CalendarModule` native module off of `NativeModules`.

tsx

```

const {CalendarModule} = NativeModules;

```

Now that you have the CalendarModule native module available, you can invoke your native method `createCalendarEvent()`. Below it is added to the `onPress()` method in `NewModuleButton`:

tsx

```

const onPress = () => {
CalendarModule.createCalendarEvent('testName', 'testLocation');
};

```

The final step is to rebuild the React Native app so that you can have the latest native code (with your new native module!) available. In your command line, where the react native application is located, run the following:

* npm
* Yarn

shell

```

npm run android

```

shell

```

yarn android

```

### Building as You Iterate[​](#building-as-you-iterate "Direct link to Building as You Iterate")

As you work through these guides and iterate on your native module, you will need to do a native rebuild of your application to access your most recent changes from JavaScript. This is because the code that you are writing sits within the native part of your application. While React Native’s metro bundler can watch for changes in JavaScript and rebuild on the fly for you, it will not do so for native code. So if you want to test your latest native changes you need to rebuild by using the above command.

### Recap✨[​](#recap "Direct link to Recap✨")

You should now be able to invoke your `createCalendarEvent()` method on your native module in the app. In our example this occurs by pressing the `NewModuleButton`. You can confirm this by viewing the log you set up in your `createCalendarEvent()` method. You can follow [these steps](https://developer.android.com/studio/debug/am-logcat.html) to view ADB logs in your app. You should then be able to search for your `Log.d` message (in our example “Create event called with name: testName and location: testLocation”) and see your message logged each time you invoke your native module method.

![Image of logs.](/docs/assets/native-modules-android-logs.png)

Image of ADB logs in Android Studio

At this point you have created an Android native module and invoked its native method from JavaScript in your React Native application. You can read on to learn more about things like argument types available to a native module method and how to setup callbacks and promises.

## Beyond a Calendar Native Module[​](#beyond-a-calendar-native-module "Direct link to Beyond a Calendar Native Module")

### Better Native Module Export[​](#better-native-module-export "Direct link to Better Native Module Export")

Importing your native module by pulling it off of `NativeModules` like above is a bit clunky.

To save consumers of your native module from needing to do that each time they want to access your native module, you can create a JavaScript wrapper for the module. Create a new JavaScript file named `CalendarModule.js` with the following content:

tsx

```

/\*\*

- This exposes the native CalendarModule module as a JS module. This has a

- function 'createCalendarEvent' which takes the following parameters:

- 1. String name: A string representing the name of the event

- 2. String location: A string representing the location of the event
     \*/
     import {NativeModules} from 'react-native';
     const {CalendarModule} = NativeModules;
     export default CalendarModule;

```

This JavaScript file also becomes a good location for you to add any JavaScript side functionality. For example, if you use a type system like TypeScript you can add type annotations for your native module here. While React Native does not yet support Native to JS type safety, all your JS code will be type safe. Doing so will also make it easier for you to switch to type-safe native modules down the line. Below is an example of adding type safety to the CalendarModule:

tsx

```

/\*\*

- This exposes the native CalendarModule module as a JS module. This has a
- function 'createCalendarEvent' which takes the following parameters:
-
- 1. String name: A string representing the name of the event
- 2. String location: A string representing the location of the event
     \*/
     import {NativeModules} from 'react-native';
     const {CalendarModule} = NativeModules;
     interface CalendarInterface {
     createCalendarEvent(name: string, location: string): void;
     }
     export default CalendarModule as CalendarInterface;

```

In your other JavaScript files you can access the native module and invoke its method like this:

tsx

```

import CalendarModule from './CalendarModule';
CalendarModule.createCalendarEvent('foo', 'bar');

```

note

This assumes that the place you are importing `CalendarModule` is in the same hierarchy as `CalendarModule.js`. Please update the relative import as necessary.

### Argument Types[​](#argument-types "Direct link to Argument Types")

When a native module method is invoked in JavaScript, React Native converts the arguments from JS objects to their Java/Kotlin object analogues. So for example, if your Java Native Module method accepts a double, in JS you need to call the method with a number. React Native will handle the conversion for you. Below is a list of the argument types supported for native module methods and the JavaScript equivalents they map to.

| Java          | Kotlin        | JavaScript |
| ------------- | ------------- | ---------- |
| Boolean       | Boolean       | ?boolean   |
| boolean       |               | boolean    |
| Double        | Double        | ?number    |
| double        |               | number     |
| String        | String        | string     |
| Callback      | Callback      | Function   |
| Promise       | Promise       | Promise    |
| ReadableMap   | ReadableMap   | Object     |
| ReadableArray | ReadableArray | Array      |

info

The following types are currently supported but will not be supported in TurboModules. Please avoid using them:

* Integer Java/Kotlin -> ?number
* Float Java/Kotlin -> ?number
* int Java -> number
* float Java -> number

For argument types not listed above, you will need to handle the conversion yourself. For example, in Android, `Date` conversion is not supported out of the box. You can handle the conversion to the `Date` type within the native method yourself like so:

* Java
* Kotlin

java

```

```
String dateFormat = "yyyy-MM-dd";
SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);
Calendar eStartDate = Calendar.getInstance();
try {
    eStartDate.setTime(sdf.parse(startDate));
}
```

```

kotlin

```

```
val dateFormat = "yyyy-MM-dd"
val sdf = SimpleDateFormat(dateFormat, Locale.US)
val eStartDate = Calendar.getInstance()
try {
    sdf.parse(startDate)?.let {
        eStartDate.time = it
    }
}
```

```

### Exporting Constants[​](#exporting-constants "Direct link to Exporting Constants")

A native module can export constants by implementing the native method `getConstants()`, which is available in JS. Below you will implement `getConstants()` and return a Map that contains a `DEFAULT_EVENT_NAME` constant you can access in JavaScript:

* Java
* Kotlin

java

```

@Override
public Map\<String, Object> getConstants() {
final Map\<String, Object> constants = new HashMap<>();
constants.put("DEFAULT\_EVENT\_NAME", "New Event");
return constants;
}

```

kotlin

```

override fun getConstants(): MutableMap\<String, Any> =
hashMapOf("DEFAULT\_EVENT\_NAME" to "New Event")

```

The constant can then be accessed by invoking `getConstants` on the native module in JS:

tsx

```

const {DEFAULT\_EVENT\_NAME} = CalendarModule.getConstants();
console.log(DEFAULT\_EVENT\_NAME);

```

Technically it is possible to access constants exported in `getConstants()` directly off the native module object. This will no longer be supported with TurboModules, so we encourage the community to switch to the above approach to avoid necessary migration down the line.

note

That currently constants are exported only at initialization time, so if you change getConstants values at runtime it won't affect the JavaScript environment. This will change with Turbomodules. With Turbomodules, `getConstants()` will become a regular native module method, and each invocation will hit the native side.

### Callbacks[​](#callbacks "Direct link to Callbacks")

Native modules also support a unique kind of argument: a callback. Callbacks are used to pass data from Java/Kotlin to JavaScript for asynchronous methods. They can also be used to asynchronously execute JavaScript from the native side.

In order to create a native module method with a callback, first import the `Callback` interface, and then add a new parameter to your native module method of type `Callback`. There are a couple of nuances with callback arguments that will soon be lifted with TurboModules. First off, you can only have two callbacks in your function arguments- a successCallback and a failureCallback. In addition, the last argument to a native module method call, if it's a function, is treated as the successCallback, and the second to last argument to a native module method call, if it's a function, is treated as the failure callback.

* Java
* Kotlin

java

```

import com.facebook.react.bridge.Callback;

@ReactMethod
public void createCalendarEvent(String name, String location, Callback callBack) {
}

```

kotlin

```

import com.facebook.react.bridge.Callback

@ReactMethod fun createCalendarEvent(name: String, location: String, callback: Callback) {}

```

You can invoke the callback in your Java/Kotlin method, providing whatever data you want to pass to JavaScript. Please note that you can only pass serializable data from native code to JavaScript. If you need to pass back a native object you can use `WriteableMaps`, if you need to use a collection use `WritableArrays`. It is also important to highlight that the callback is not invoked immediately after the native function completes. Below the ID of an event created in an earlier call is passed to the callback.

* Java
* Kotlin

java

```

@ReactMethod
public void createCalendarEvent(String name, String location, Callback callBack) {
Integer eventId = ...
callBack.invoke(eventId);
}

```

kotlin

```

@ReactMethod
fun createCalendarEvent(name: String, location: String, callback: Callback) {
val eventId = ...
callback.invoke(eventId)
}

```

This method could then be accessed in JavaScript using:

tsx

```

const onPress = () => {
CalendarModule.createCalendarEvent(
'Party',
'My House',
eventId => {
console.log(`Created a new event with id ${eventId}`);
},
);
};

```

Another important detail to note is that a native module method can only invoke one callback, one time. This means that you can either call a success callback or a failure callback, but not both, and each callback can only be invoked at most one time. A native module can, however, store the callback and invoke it later.

There are two approaches to error handling with callbacks. The first is to follow Node’s convention and treat the first argument passed to the callback as an error object.

* Java
* Kotlin

java

```

@ReactMethod
public void createCalendarEvent(String name, String location, Callback callBack) {
Integer eventId = ...
callBack.invoke(null, eventId);
}

```

kotlin

```

@ReactMethod
fun createCalendarEvent(name: String, location: String, callback: Callback) {
val eventId = ...
callback.invoke(null, eventId)
}

```

In JavaScript, you can then check the first argument to see if an error was passed through:

tsx

```

const onPress = () => {
CalendarModule.createCalendarEvent(
'testName',
'testLocation',
(error, eventId) => {
if (error) {
console.error(`Error found! ${error}`);
}
console.log(`event id ${eventId} returned`);
},
);
};

```

Another option is to use an onSuccess and onFailure callback:

* Java
* Kotlin

java

```

@ReactMethod
public void createCalendarEvent(String name, String location, Callback myFailureCallback, Callback mySuccessCallback) {
}

```

kotlin

```

@ReactMethod
fun createCalendarEvent(
name: String,
location: String,
myFailureCallback: Callback,
mySuccessCallback: Callback
) {}

```

Then in JavaScript you can add a separate callback for error and success responses:

tsx

```

const onPress = () => {
CalendarModule.createCalendarEvent(
'testName',
'testLocation',
error => {
console.error(`Error found! ${error}`);
},
eventId => {
console.log(`event id ${eventId} returned`);
},
);
};

```

### Promises[​](#promises "Direct link to Promises")

Native modules can also fulfill a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), which can simplify your JavaScript, especially when using ES2016's [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) syntax. When the last parameter of a native module Java/Kotlin method is a Promise, its corresponding JS method will return a JS Promise object.

Refactoring the above code to use a promise instead of callbacks looks like this:

* Java
* Kotlin

java

```

import com.facebook.react.bridge.Promise;

@ReactMethod
public void createCalendarEvent(String name, String location, Promise promise) {
try {
Integer eventId = ...
promise.resolve(eventId);
} catch(Exception e) {
promise.reject("Create Event Error", e);
}
}

```

kotlin

```

import com.facebook.react.bridge.Promise

@ReactMethod
fun createCalendarEvent(name: String, location: String, promise: Promise) {
try {
val eventId = ...
promise.resolve(eventId)
} catch (e: Throwable) {
promise.reject("Create Event Error", e)
}
}

```

note

Similar to callbacks, a native module method can either reject or resolve a promise (but not both) and can do so at most once. This means that you can either call a success callback or a failure callback, but not both, and each callback can only be invoked at most one time. A native module can, however, store the callback and invoke it later.

The JavaScript counterpart of this method returns a Promise. This means you can use the `await` keyword within an async function to call it and wait for its result:

tsx

```

const onSubmit = async () => {
try {
const eventId = await CalendarModule.createCalendarEvent(
'Party',
'My House',
);
console.log(`Created a new event with id ${eventId}`);
} catch (e) {
console.error(e);
}
};

```

The reject method takes different combinations of the following arguments:

* Java
* Kotlin

java

```

String code, String message, WritableMap userInfo, Throwable throwable

```

kotlin

```

code: String, message: String, userInfo: WritableMap, throwable: Throwable

```

For more detail, you can find the `Promise.java` interface [here](https://github.com/facebook/react-native/blob/main/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/bridge/Promise.kt). If `userInfo` is not provided, ReactNative will set it to null. For the rest of the parameters React Native will use a default value. The `message` argument provides the error `message` shown at the top of an error call stack. Below is an example of the error message shown in JavaScript from the following reject call in Java/Kotlin.

Java/Kotlin reject call:

* Java
* Kotlin

java

```

promise.reject("Create Event error", "Error parsing date", e);

```

kotlin

```

promise.reject("Create Event error", "Error parsing date", e)

```

Error message in React Native App when promise is rejected:

![Image of error message in React Native app.](/docs/assets/native-modules-android-errorscreen.png)

Image of error message

### Sending Events to JavaScript[​](#sending-events-to-javascript "Direct link to Sending Events to JavaScript")

Native modules can signal events to JavaScript without being invoked directly. For example, you might want to signal to JavaScript a reminder that a calendar event from the native Android calendar app will occur soon. The easiest way to do this is to use the `RCTDeviceEventEmitter` which can be obtained from the `ReactContext` as in the code snippet below.

* Java
* Kotlin

java

```

...
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
...
private void sendEvent(ReactContext reactContext,
String eventName,
@Nullable WritableMap params) {
reactContext
.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
.emit(eventName, params);
}

private int listenerCount = 0;

@ReactMethod
public void addListener(String eventName) {
if (listenerCount == 0) {
// Set up any upstream listeners or background tasks as necessary
}

listenerCount += 1;
}

@ReactMethod
public void removeListeners(Integer count) {
listenerCount -= count;
if (listenerCount == 0) {
// Remove upstream listeners, stop unnecessary background tasks
}
}
...
WritableMap params = Arguments.createMap();
params.putString("eventProperty", "someValue");
...
sendEvent(reactContext, "EventReminder", params);

```

kotlin

```

...
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.Arguments
import com.facebook.react.modules.core.DeviceEventManagerModule
...

private fun sendEvent(reactContext: ReactContext, eventName: String, params: WritableMap?) {
reactContext
.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
.emit(eventName, params)
}

private var listenerCount = 0

@ReactMethod
fun addListener(eventName: String) {
if (listenerCount == 0) {
// Set up any upstream listeners or background tasks as necessary
}

listenerCount += 1
}

@ReactMethod
fun removeListeners(count: Int) {
listenerCount -= count
if (listenerCount == 0) {
// Remove upstream listeners, stop unnecessary background tasks
}
}
...
val params = Arguments.createMap().apply {
putString("eventProperty", "someValue")
}
...
sendEvent(reactContext, "EventReminder", params)

```

JavaScript modules can then register to receive events by `addListener` on the [NativeEventEmitter](https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/EventEmitter/NativeEventEmitter.js) class.

tsx

```

import {NativeEventEmitter, NativeModules} from 'react-native';
...
useEffect(() => {
const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);
let eventListener = eventEmitter.addListener('EventReminder', event => {
console.log(event.eventProperty) // "someValue"
});

```
// Removes the listener once unmounted
return () => {
  eventListener.remove();
};
```

}, \[]);

```

### Getting Activity Result from startActivityForResult[​](#getting-activity-result-from-startactivityforresult "Direct link to Getting Activity Result from startActivityForResult")

You'll need to listen to `onActivityResult` if you want to get results from an activity you started with `startActivityForResult`. To do this, you must extend `BaseActivityEventListener` or implement `ActivityEventListener`. The former is preferred as it is more resilient to API changes. Then, you need to register the listener in the module's constructor like so:

* Java
* Kotlin

java

```

reactContext.addActivityEventListener(mActivityResultListener);

```

kotlin

```

reactContext.addActivityEventListener(mActivityResultListener);

```

Now you can listen to `onActivityResult` by implementing the following method:

* Java
* Kotlin

java

```

@Override
public void onActivityResult(
final Activity activity,
final int requestCode,
final int resultCode,
final Intent intent) {
// Your logic here
}

```

kotlin

```

override fun onActivityResult(
activity: Activity?,
requestCode: Int,
resultCode: Int,
intent: Intent?
) {
// Your logic here
}

```

Let's implement a basic image picker to demonstrate this. The image picker will expose the method `pickImage` to JavaScript, which will return the path of the image when called.

* Java
* Kotlin

kotlin

```

public class ImagePickerModule extends ReactContextBaseJavaModule {

private static final int IMAGE\_PICKER\_REQUEST = 1;
private static final String E\_ACTIVITY\_DOES\_NOT\_EXIST = "E\_ACTIVITY\_DOES\_NOT\_EXIST";
private static final String E\_PICKER\_CANCELLED = "E\_PICKER\_CANCELLED";
private static final String E\_FAILED\_TO\_SHOW\_PICKER = "E\_FAILED\_TO\_SHOW\_PICKER";
private static final String E\_NO\_IMAGE\_DATA\_FOUND = "E\_NO\_IMAGE\_DATA\_FOUND";

private Promise mPickerPromise;

private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

```
@Override
public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
  if (requestCode == IMAGE_PICKER_REQUEST) {
    if (mPickerPromise != null) {
      if (resultCode == Activity.RESULT_CANCELED) {
        mPickerPromise.reject(E_PICKER_CANCELLED, "Image picker was cancelled");
      } else if (resultCode == Activity.RESULT_OK) {
        Uri uri = intent.getData();

        if (uri == null) {
          mPickerPromise.reject(E_NO_IMAGE_DATA_FOUND, "No image data found");
        } else {
          mPickerPromise.resolve(uri.toString());
        }
      }

      mPickerPromise = null;
    }
  }
}
```

};

ImagePickerModule(ReactApplicationContext reactContext) {
super(reactContext);

```
// Add the listener for `onActivityResult`
reactContext.addActivityEventListener(mActivityEventListener);
```

}

@Override
public String getName() {
return "ImagePickerModule";
}

@ReactMethod
public void pickImage(final Promise promise) {
Activity currentActivity = getCurrentActivity();

```
if (currentActivity == null) {
  promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist");
  return;
}

// Store the promise to resolve/reject when picker returns data
mPickerPromise = promise;

try {
  final Intent galleryIntent = new Intent(Intent.ACTION_PICK);

  galleryIntent.setType("image/*");

  final Intent chooserIntent = Intent.createChooser(galleryIntent, "Pick an image");

  currentActivity.startActivityForResult(chooserIntent, IMAGE_PICKER_REQUEST);
} catch (Exception e) {
  mPickerPromise.reject(E_FAILED_TO_SHOW_PICKER, e);
  mPickerPromise = null;
}
```

}
}

```

kotlin

```

class ImagePickerModule(reactContext: ReactApplicationContext) :
ReactContextBaseJavaModule(reactContext) {

```
private var pickerPromise: Promise? = null

private val activityEventListener =
    object : BaseActivityEventListener() {
        override fun onActivityResult(
            activity: Activity?,
            requestCode: Int,
            resultCode: Int,
            intent: Intent?
        ) {
            if (requestCode == IMAGE_PICKER_REQUEST) {
                pickerPromise?.let { promise ->
                    when (resultCode) {
                        Activity.RESULT_CANCELED ->
                            promise.reject(E_PICKER_CANCELLED, "Image picker was cancelled")
                        Activity.RESULT_OK -> {
                            val uri = intent?.data

                            uri?.let { promise.resolve(uri.toString())}
                                ?: promise.reject(E_NO_IMAGE_DATA_FOUND, "No image data found")
                        }
                    }

                    pickerPromise = null
                }
            }
        }
    }

init {
    reactContext.addActivityEventListener(activityEventListener)
}

override fun getName() = "ImagePickerModule"

@ReactMethod
fun pickImage(promise: Promise) {
    val activity = currentActivity

    if (activity == null) {
        promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist")
        return
    }

    pickerPromise = promise

    try {
        val galleryIntent = Intent(Intent.ACTION_PICK).apply { type = "image\/*" }

        val chooserIntent = Intent.createChooser(galleryIntent, "Pick an image")

        activity.startActivityForResult(chooserIntent, IMAGE_PICKER_REQUEST)
    } catch (t: Throwable) {
        pickerPromise?.reject(E_FAILED_TO_SHOW_PICKER, t)
        pickerPromise = null
    }
}

companion object {
    const val IMAGE_PICKER_REQUEST = 1
    const val E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST"
    const val E_PICKER_CANCELLED = "E_PICKER_CANCELLED"
    const val E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER"
    const val E_NO_IMAGE_DATA_FOUND = "E_NO_IMAGE_DATA_FOUND"
}
```

}

```

### Listening to Lifecycle Events[​](#listening-to-lifecycle-events "Direct link to Listening to Lifecycle Events")

Listening to the activity's LifeCycle events such as `onResume`, `onPause` etc. is very similar to how `ActivityEventListener` was implemented. The module must implement `LifecycleEventListener`. Then, you need to register a listener in the module's constructor like so:

* Java
* Kotlin

java

```

reactContext.addLifecycleEventListener(this);

```

kotlin

```

reactContext.addLifecycleEventListener(this)

```

Now you can listen to the activity's LifeCycle events by implementing the following methods:

* Java
* Kotlin

java

```

@Override
public void onHostResume() {
// Activity `onResume`
}
@Override
public void onHostPause() {
// Activity `onPause`
}
@Override
public void onHostDestroy() {
// Activity `onDestroy`
}

```

kotlin

```

override fun onHostResume() {
// Activity `onResume`
}

override fun onHostPause() {
// Activity `onPause`
}

override fun onHostDestroy() {
// Activity `onDestroy`
}

```

### Threading[​](#threading "Direct link to Threading")

To date, on Android, all native module async methods execute on one thread. Native modules should not have any assumptions about what thread they are being called on, as the current assignment is subject to change in the future. If a blocking call is required, the heavy work should be dispatched to an internally managed worker thread, and any callbacks distributed from there.


---

# Native Modules Intro

info

Native Module and Native Components are our stable technologies used by the legacy architecture. They will be deprecated in the future when the New Architecture will be stable. The New Architecture uses [Turbo Native Module](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/turbo-modules.md) and [Fabric Native Components](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/fabric-native-components.md) to achieve similar results.

Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Google Pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing.

The NativeModule system exposes instances of Java/Objective-C/C++ (native) classes to JavaScript (JS) as JS objects, thereby allowing you to execute arbitrary native code from within JS. While we don't expect this feature to be part of the usual development process, it is essential that it exists. If React Native doesn't export a native API that your JS app needs you should be able to export it yourself!

## Native Module Setup[​](#native-module-setup "Direct link to Native Module Setup")

There are different ways to write a native module for your React Native application:

1. Creating a local library that can be imported in your React Native application. Read [Creating local libraries](/docs/legacy/local-library-setup.md) guide to learn more.
2. Directly within your React Native application's iOS/Android projects
3. As an NPM package that can be installed as a dependency by your/other React Native applications.

This guide will first walk you through implementing a native module directly within a React Native application. However the native module you build in the following guide can be distributed as an NPM package. Check out the [Setting Up a Native Module as an NPM Package](/docs/legacy/native-modules-setup.md) guide if you are interested in doing so.

## Getting Started[​](#getting-started "Direct link to Getting Started")

In the following sections we will walk you through guides on how to build a native module directly within a React Native application. As a prerequisite, you will need a React Native application to work within. You can follow the steps [here](/docs/getting-started.md) to setup a React Native application if you do not already have one.

Imagine that you want to access the iOS/Android native calendar APIs from JavaScript within a React Native application in order to create calendar events. React Native does not expose a JavaScript API to communicate with the native calendar libraries. However, through native modules, you can write native code that communicates with native calendar APIs. Then you can invoke that native code through JavaScript in your React Native application.

In the following sections you will create such a Calendar native module for both [Android](/docs/legacy/native-modules-android.md) and [iOS](/docs/legacy/native-modules-ios.md).


---

# iOS Native Modules

info

Native Module and Native Components are our stable technologies used by the legacy architecture. They will be deprecated in the future when the New Architecture will be stable. The New Architecture uses [Turbo Native Module](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/turbo-modules.md) and [Fabric Native Components](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/fabric-native-components.md) to achieve similar results.

Welcome to Native Modules for iOS. Please start by reading the [Native Modules Intro](/docs/legacy/native-modules-intro.md) for an intro to what native modules are.

## Create a Calendar Native Module[​](#create-a-calendar-native-module "Direct link to Create a Calendar Native Module")

In the following guide you will create a native module, `CalendarModule`, that will allow you to access Apple's calendar APIs from JavaScript. By the end you will be able to call `CalendarModule.createCalendarEvent('Dinner Party', 'My House');` from JavaScript, invoking a native method that creates a calendar event.

### Setup[​](#setup "Direct link to Setup")

To get started, open up the iOS project within your React Native application in Xcode. You can find your iOS project here within a React Native app:

![Image of opening up an iOS project within a React Native app inside of Xcode.](/docs/assets/native-modules-ios-open-project.png)

Image of where you can find your iOS project

We recommend using Xcode to write your native code. Xcode is built for iOS development, and using it will help you to quickly resolve smaller errors like code syntax.

### Create Custom Native Module Files[​](#create-custom-native-module-files "Direct link to Create Custom Native Module Files")

The first step is to create our main custom native module header and implementation files. Create a new file called `RCTCalendarModule.h`

![Image of creating a class called  RCTCalendarModule.h.](/docs/assets/native-modules-ios-add-class.png)

Image of creating a custom native module file within the same folder as AppDelegate

and add the following to it:

objectivec

```

//  RCTCalendarModule.h
\#import \<React/RCTBridgeModule.h>
@interface RCTCalendarModule : NSObject
@end

```

You can use any name that fits the native module you are building. Name the class `RCTCalendarModule` since you are creating a calendar native module. Since ObjC does not have language-level support for namespaces like Java or C++, convention is to prepend the class name with a substring. This could be an abbreviation of your application name or your infra name. RCT, in this example, refers to React.

As you can see below, the CalendarModule class implements the `RCTBridgeModule` protocol. A native module is an Objective-C class that implements the `RCTBridgeModule` protocol.

Next up, let’s start implementing the native module. Create the corresponding implementation file using cocoa touch class in xcode, `RCTCalendarModule.m`, in the same folder and include the following content:

objectivec

```

// RCTCalendarModule.m
\#import "RCTCalendarModule.h"

@implementation RCTCalendarModule

// To export a module named RCTCalendarModule
RCT\_EXPORT\_MODULE();

@end

```

### Module Name[​](#module-name "Direct link to Module Name")

For now, your `RCTCalendarModule.m` native module only includes a `RCT_EXPORT_MODULE` macro, which exports and registers the native module class with React Native. The `RCT_EXPORT_MODULE` macro also takes an optional argument that specifies the name that the module will be accessible as in your JavaScript code.

This argument is not a string literal. In the example below `RCT_EXPORT_MODULE(CalendarModuleFoo)` is passed, not `RCT_EXPORT_MODULE("CalendarModuleFoo")`.

objectivec

```

// To export a module named CalendarModuleFoo
RCT\_EXPORT\_MODULE(CalendarModuleFoo);

```

The native module can then be accessed in JS like this:

tsx

```

const {CalendarModuleFoo} = ReactNative.NativeModules;

```

If you do not specify a name, the JavaScript module name will match the Objective-C class name, with any "RCT" or "RK" prefixes removed.

Let's follow the example below and call `RCT_EXPORT_MODULE` without any arguments. As a result, the module will be exposed to React Native using the name `CalendarModule`, since that is the Objective-C class name, with RCT removed.

objectivec

```

// Without passing in a name this will export the native module name as the Objective-C class name with “RCT” removed
RCT\_EXPORT\_MODULE();

```

The native module can then be accessed in JS like this:

tsx

```

const {CalendarModule} = ReactNative.NativeModules;

```

### Export a Native Method to JavaScript[​](#export-a-native-method-to-javascript "Direct link to Export a Native Method to JavaScript")

React Native will not expose any methods in a native module to JavaScript unless explicitly told to. This can be done using the `RCT_EXPORT_METHOD` macro. Methods written in the `RCT_EXPORT_METHOD` macro are asynchronous and the return type is therefore always void. In order to pass a result from a `RCT_EXPORT_METHOD` method to JavaScript you can use callbacks or emit events (covered below). Let’s go ahead and set up a native method for our `CalendarModule` native module using the `RCT_EXPORT_METHOD` macro. Call it `createCalendarEvent()` and for now have it take in name and location arguments as strings. Argument type options will be covered shortly.

objectivec

```

RCT\_EXPORT\_METHOD(createCalendarEvent:(NSString \*)name location:(NSString \*)location)
{
}

```

note

Please note that the `RCT_EXPORT_METHOD` macro will not be necessary with TurboModules unless your method relies on RCT argument conversion (see argument types below). Ultimately, React Native will remove `RCT_EXPORT_MACRO,` so we discourage people from using `RCTConvert`. Instead, you can do the argument conversion within the method body.

Before you build out the `createCalendarEvent()` method’s functionality, add a console log in the method so you can confirm it has been invoked from JavaScript in your React Native application. Use the `RCTLog` APIs from React. Let’s import that header at the top of your file and then add the log call.

objectivec

```

\#import \<React/RCTLog.h>
RCT\_EXPORT\_METHOD(createCalendarEvent:(NSString \*)name location:(NSString \*)location)
{
RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

```

### Synchronous Methods[​](#synchronous-methods "Direct link to Synchronous Methods")

You can use the `RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD` to create a synchronous native method.

objectivec

```

RCT\_EXPORT\_BLOCKING\_SYNCHRONOUS\_METHOD(getName)
{
return \[\[UIDevice currentDevice] name];
}

```

The return type of this method must be of object type (id) and should be serializable to JSON. This means that the hook can only return nil or JSON values (e.g. NSNumber, NSString, NSArray, NSDictionary).

At the moment, we do not recommend using synchronous methods, since calling methods synchronously can have strong performance penalties and introduce threading-related bugs to your native modules. Additionally, please note that if you choose to use `RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD`, your app can no longer use the Google Chrome debugger. This is because synchronous methods require the JS VM to share memory with the app. For the Google Chrome debugger, React Native runs inside the JS VM in Google Chrome, and communicates asynchronously with the mobile devices via WebSockets.

### Test What You Have Built[​](#test-what-you-have-built "Direct link to Test What You Have Built")

At this point you have set up the basic scaffolding for your native module in iOS. Test that out by accessing the native module and invoking it’s exported method in JavaScript.

Find a place in your application where you would like to add a call to the native module’s `createCalendarEvent()` method. Below is an example of a component, `NewModuleButton` you can add in your app. You can invoke the native module inside `NewModuleButton`'s `onPress()` function.

tsx

```

import React from 'react';
import {Button} from 'react-native';

const NewModuleButton = () => {
const onPress = () => {
console.log('We will invoke the native module here!');
};

return ( <Button
   title="Click to invoke your native module!"
   color="#841584"
   onPress={onPress}
 />
);
};

export default NewModuleButton;

```

In order to access your native module from JavaScript you need to first import `NativeModules` from React Native:

tsx

```

import {NativeModules} from 'react-native';

```

You can then access the `CalendarModule` native module off of `NativeModules`.

tsx

```

const {CalendarModule} = NativeModules;

```

Now that you have the CalendarModule native module available, you can invoke your native method `createCalendarEvent()`. Below it is added to the `onPress()` method in `NewModuleButton`:

tsx

```

const onPress = () => {
CalendarModule.createCalendarEvent('testName', 'testLocation');
};

```

The final step is to rebuild the React Native app so that you can have the latest native code (with your new native module!) available. In your command line, where the react native application is located, run the following :

* npm
* Yarn

shell

```

npm run ios

```

shell

```

yarn ios

```

### Building as You Iterate[​](#building-as-you-iterate "Direct link to Building as You Iterate")

As you work through these guides and iterate on your native module, you will need to do a native rebuild of your application to access your most recent changes from JavaScript. This is because the code that you are writing sits within the native part of your application. While React Native’s metro bundler can watch for changes in JavaScript and rebuild JS bundle on the fly for you, it will not do so for native code. So if you want to test your latest native changes you need to rebuild by using the above command.

### Recap✨[​](#recap "Direct link to Recap✨")

You should now be able to invoke your `createCalendarEvent()` method on your native module in JavaScript. Since you are using `RCTLog` in the function, you can confirm your native method is being invoked by [enabling debug mode in your app](https://reactnative.dev/docs/debugging#chrome-developer-tools) and looking at the JS console in Chrome or the mobile app debugger Flipper. You should see your `RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);` message each time you invoke the native module method.

![Image of logs.](/docs/assets/native-modules-ios-logs.png)

Image of iOS logs in Flipper

At this point you have created an iOS native module and invoked a method on it from JavaScript in your React Native application. You can read on to learn more about things like what argument types your native module method takes and how to setup callbacks and promises within your native module.

## Beyond a Calendar Native Module[​](#beyond-a-calendar-native-module "Direct link to Beyond a Calendar Native Module")

### Better Native Module Export[​](#better-native-module-export "Direct link to Better Native Module Export")

Importing your native module by pulling it off of `NativeModules` like above is a bit clunky.

To save consumers of your native module from needing to do that each time they want to access your native module, you can create a JavaScript wrapper for the module. Create a new JavaScript file named NativeCalendarModule.js with the following content:

tsx

```

/\*\*

- This exposes the native CalendarModule module as a JS module. This has a

- function 'createCalendarEvent' which takes the following parameters:

- 1. String name: A string representing the name of the event

- 2. String location: A string representing the location of the event
     \*/
     import {NativeModules} from 'react-native';
     const {CalendarModule} = NativeModules;
     export default CalendarModule;

```

This JavaScript file also becomes a good location for you to add any JavaScript side functionality. For example, if you use a type system like TypeScript you can add type annotations for your native module here. While React Native does not yet support Native to JS type safety, with these type annotations, all your JS code will be type safe. These annotations will also make it easier for you to switch to type-safe native modules down the line. Below is an example of adding type safety to the Calendar Module:

tsx

```

/\*\*

- This exposes the native CalendarModule module as a JS module. This has a
- function 'createCalendarEvent' which takes the following parameters:
-
- 1. String name: A string representing the name of the event
- 2. String location: A string representing the location of the event
     \*/
     import {NativeModules} from 'react-native';
     const {CalendarModule} = NativeModules;
     interface CalendarInterface {
     createCalendarEvent(name: string, location: string): void;
     }
     export default CalendarModule as CalendarInterface;

```

In your other JavaScript files you can access the native module and invoke its method like this:

tsx

```

import NativeCalendarModule from './NativeCalendarModule';
NativeCalendarModule.createCalendarEvent('foo', 'bar');

```

note

This assumes that the place you are importing `CalendarModule` is in the same hierarchy as `NativeCalendarModule.js`. Please update the relative import as necessary.

### Argument Types[​](#argument-types "Direct link to Argument Types")

When a native module method is invoked in JavaScript, React Native converts the arguments from JS objects to their Objective-C/Swift object analogues. So for example, if your Objective-C Native Module method accepts a NSNumber, in JS you need to call the method with a number. React Native will handle the conversion for you. Below is a list of the argument types supported for native module methods and the JavaScript equivalents they map to.

| Objective-C                                   | JavaScript         |
| --------------------------------------------- | ------------------ |
| NSString                                      | string, ?string    |
| BOOL                                          | boolean            |
| double                                        | number             |
| NSNumber                                      | ?number            |
| NSArray                                       | Array, ?Array      |
| NSDictionary                                  | Object, ?Object    |
| RCTResponseSenderBlock                        | Function (success) |
| RCTResponseSenderBlock, RCTResponseErrorBlock | Function (failure) |
| RCTPromiseResolveBlock, RCTPromiseRejectBlock | Promise            |

info

The following types are currently supported but will not be supported in TurboModules. Please avoid using them.

* Function (failure) -> RCTResponseErrorBlock
* Number -> NSInteger
* Number -> CGFloat
* Number -> float

For iOS, you can also write native module methods with any argument type that is supported by the `RCTConvert` class (see [RCTConvert](https://github.com/facebook/react-native/blob/main/packages/react-native/React/Base/RCTConvert.h) for details about what is supported). The RCTConvert helper functions all accept a JSON value as input and map it to a native Objective-C type or class.

### Exporting Constants[​](#exporting-constants "Direct link to Exporting Constants")

A native module can export constants by overriding the native method `constantsToExport()`. Below `constantsToExport()` is overridden, and returns a Dictionary that contains a default event name property you can access in JavaScript like so:

objectivec

```

- (NSDictionary \*)constantsToExport
  {
  return @{ @"DEFAULT\_EVENT\_NAME": @"New Event" };
  }

```

The constant can then be accessed by invoking `getConstants()` on the native module in JS like so:

tsx

```

const {DEFAULT\_EVENT\_NAME} = CalendarModule.getConstants();
console.log(DEFAULT\_EVENT\_NAME);

```

Technically, it is possible to access constants exported in `constantsToExport()` directly off the `NativeModule` object. This will no longer be supported with TurboModules, so we encourage the community to switch to the above approach to avoid necessary migration down the line.

note

The constants are exported only at initialization time, so if you change `constantsToExport()` values at runtime it won't affect the JavaScript environment.

For iOS, if you override `constantsToExport()` then you should also implement `+ requiresMainQueueSetup` to let React Native know if your module needs to be initialized on the main thread, before any JavaScript code executes. Otherwise you will see a warning that in the future your module may be initialized on a background thread unless you explicitly opt out with `+ requiresMainQueueSetup:`. If your module does not require access to UIKit, then you should respond to `+ requiresMainQueueSetup` with NO.

### Callbacks[​](#callbacks "Direct link to Callbacks")

Native modules also support a unique kind of argument - a callback. Callbacks are used to pass data from Objective-C to JavaScript for asynchronous methods. They can also be used to asynchronously execute JS from the native side.

For iOS, callbacks are implemented using the type `RCTResponseSenderBlock`. Below the callback parameter `myCallBack` is added to the `createCalendarEventMethod()`:

objectivec

```

RCT\_EXPORT\_METHOD(createCalendarEvent:(NSString \*)title
location:(NSString \*)location
myCallback:(RCTResponseSenderBlock)callback)

```

You can then invoke the callback in your native function, providing whatever result you want to pass to JavaScript in an array. Note that `RCTResponseSenderBlock` accepts only one argument - an array of parameters to pass to the JavaScript callback. Below you will pass back the ID of an event created in an earlier call.

info

It is important to highlight that the callback is not invoked immediately after the native function completes—remember the communication is asynchronous.

objectivec

```

RCT\_EXPORT\_METHOD(createCalendarEvent:(NSString \*)title location:(NSString \*)location callback: (RCTResponseSenderBlock)callback)
{
NSInteger eventId = ...
callback(@\[@(eventId)]);

RCTLogInfo(@"Pretending to create an event %@ at %@", title, location);
}

```

This method could then be accessed in JavaScript using the following:

tsx

```

const onSubmit = () => {
CalendarModule.createCalendarEvent(
'Party',
'04-12-2020',
eventId => {
console.log(`Created a new event with id ${eventId}`);
},
);
};

```

A native module is supposed to invoke its callback only once. It can, however, store the callback and invoke it later. This pattern is often used to wrap iOS APIs that require delegates— see [`RCTAlertManager`](https://github.com/facebook/react-native/blob/main/packages/react-native/React/CoreModules/RCTAlertManager.mm) for an example. If the callback is never invoked, some memory is leaked.

There are two approaches to error handling with callbacks. The first is to follow Node’s convention and treat the first argument passed to the callback array as an error object.

objectivec

```

RCT\_EXPORT\_METHOD(createCalendarEventCallback:(NSString \*)title location:(NSString \*)location callback: (RCTResponseSenderBlock)callback)
{
NSNumber \*eventId = \[NSNumber numberWithInt:123];
callback(@\[\[NSNull null], eventId]);
}

```

In JavaScript, you can then check the first argument to see if an error was passed through:

tsx

```

const onPress = () => {
CalendarModule.createCalendarEventCallback(
'testName',
'testLocation',
(error, eventId) => {
if (error) {
console.error(`Error found! ${error}`);
}
console.log(`event id ${eventId} returned`);
},
);
};

```

Another option is to use two separate callbacks: onFailure and onSuccess.

objectivec

```

RCT\_EXPORT\_METHOD(createCalendarEventCallback:(NSString \*)title
location:(NSString \*)location
errorCallback: (RCTResponseSenderBlock)errorCallback
successCallback: (RCTResponseSenderBlock)successCallback)
{
@try {
NSNumber \*eventId = \[NSNumber numberWithInt:123];
successCallback(@\[eventId]);
}

@catch ( NSException \*e ) {
errorCallback(@\[e]);
}
}

```

Then in JavaScript you can add a separate callback for error and success responses:

tsx

```

const onPress = () => {
CalendarModule.createCalendarEventCallback(
'testName',
'testLocation',
error => {
console.error(`Error found! ${error}`);
},
eventId => {
console.log(`event id ${eventId} returned`);
},
);
};

```

If you want to pass error-like objects to JavaScript, use `RCTMakeError` from [`RCTUtils.h.`](https://github.com/facebook/react-native/blob/main/packages/react-native/React/Base/RCTUtils.h) Right now this only passes an Error-shaped dictionary to JavaScript, but React Native aims to automatically generate real JavaScript Error objects in the future. You can also provide a `RCTResponseErrorBlock` argument, which is used for error callbacks and accepts an `NSError \* object`. Please note that this argument type will not be supported with TurboModules.

### Promises[​](#promises "Direct link to Promises")

Native modules can also fulfill a promise, which can simplify your JavaScript, especially when using ES2016's `async/await` syntax. When the last parameter of a native module method is a `RCTPromiseResolveBlock` and `RCTPromiseRejectBlock`, its corresponding JS method will return a JS Promise object.

Refactoring the above code to use a promise instead of callbacks looks like this:

objectivec

```

RCT\_EXPORT\_METHOD(createCalendarEvent:(NSString \*)title
location:(NSString \*)location
resolver:(RCTPromiseResolveBlock)resolve
rejecter:(RCTPromiseRejectBlock)reject)
{
NSInteger eventId = createCalendarEvent();
if (eventId) {
resolve(@(eventId));
} else {
reject(@"event\_failure", @"no event id returned", nil);
}
}

```

The JavaScript counterpart of this method returns a Promise. This means you can use the `await` keyword within an async function to call it and wait for its result:

tsx

```

const onSubmit = async () => {
try {
const eventId = await CalendarModule.createCalendarEvent(
'Party',
'my house',
);
console.log(`Created a new event with id ${eventId}`);
} catch (e) {
console.error(e);
}
};

```

### Sending Events to JavaScript[​](#sending-events-to-javascript "Direct link to Sending Events to JavaScript")

Native modules can signal events to JavaScript without being invoked directly. For example, you might want to signal to JavaScript a reminder that a calendar event from the native iOS calendar app will occur soon. The preferred way to do this is to subclass `RCTEventEmitter`, implement `supportedEvents` and call self `sendEventWithName`:

Update your header class to import `RCTEventEmitter` and subclass `RCTEventEmitter`:

objectivec

```

//  CalendarModule.h

\#import \<React/RCTBridgeModule.h>
\#import \<React/RCTEventEmitter.h>

@interface CalendarModule : RCTEventEmitter
@end

```

JavaScript code can subscribe to these events by creating a new `NativeEventEmitter` instance around your module.

You will receive a warning if you expend resources unnecessarily by emitting an event while there are no listeners. To avoid this, and to optimize your module's workload (e.g. by unsubscribing from upstream notifications or pausing background tasks), you can override `startObserving` and `stopObserving` in your `RCTEventEmitter` subclass.

objectivec

```

@implementation CalendarModule
{
bool hasListeners;
}

// Will be called when this module's first listener is added.
-(void)startObserving {
hasListeners = YES;
// Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
hasListeners = NO;
// Remove upstream listeners, stop unnecessary background tasks
}

- (void)calendarEventReminderReceived:(NSNotification \*)notification
  {
  NSString \*eventName = notification.userInfo\[@"name"];
  if (hasListeners) {// Only send events if anyone is listening
  \[self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
  }
  }

```

### Threading[​](#threading "Direct link to Threading")

Unless the native module provides its own method queue, it shouldn't make any assumptions about what thread it's being called on. Currently, if a native module doesn't provide a method queue, React Native will create a separate GCD queue for it and invoke its methods there. Please note that this is an implementation detail and might change. If you want to explicitly provide a method queue for a native module, override the `(dispatch_queue_t) methodQueue` method in the native module. For example, if it needs to use a main-thread-only iOS API, it should specify this via:

objectivec

```

- (dispatch\_queue\_t)methodQueue
  {
  return dispatch\_get\_main\_queue();
  }

```

Similarly, if an operation may take a long time to complete, the native module can specify its own queue to run operations on. Again, currently React Native will provide a separate method queue for your native module, but this is an implementation detail you should not rely on. If you don't provide your own method queue, in the future, your native module's long running operations may end up blocking async calls being executed on other unrelated native modules. The `RCTAsyncLocalStorage` module here, for example, creates its own queue so the React queue isn't blocked waiting on potentially slow disk access.

objectivec

```

- (dispatch\_queue\_t)methodQueue
  {
  return dispatch\_queue\_create("com.facebook.React.AsyncLocalStorageQueue", DISPATCH\_QUEUE\_SERIAL);
  }

```

The specified `methodQueue` will be shared by all of the methods in your module. If only one of your methods is long-running (or needs to be run on a different queue than the others for some reason), you can use `dispatch_async` inside the method to perform that particular method's code on another queue, without affecting the others:

objectivec

```

RCT\_EXPORT\_METHOD(doSomethingExpensive:(NSString \*)param callback:(RCTResponseSenderBlock)callback)
{
dispatch\_async(dispatch\_get\_global\_queue(DISPATCH\_QUEUE\_PRIORITY\_DEFAULT, 0), ^{
// Call long-running code on background thread
...
// You can invoke callback from any thread/queue
callback(@\[...]);
});
}

```

Sharing dispatch queues between modules

The `methodQueue` method will be called once when the module is initialized, and then retained by React Native, so there is no need to keep a reference to the queue yourself, unless you wish to make use of it within your module. However, if you wish to share the same queue between multiple modules then you will need to ensure that you retain and return the same queue instance for each of them.

### Dependency Injection[​](#dependency-injection "Direct link to Dependency Injection")

React Native will create and initialize any registered native modules automatically. However, you may wish to create and initialize your own module instances to, for example, inject dependencies.

You can do this by creating a class that implements the `RCTBridgeDelegate` Protocol, initializing an `RCTBridge` with the delegate as an argument and initialising a `RCTRootView` with the initialized bridge.

objectivec

```

id moduleInitialiser = \[\[classThatImplementsRCTBridgeDelegate alloc] init];

RCTBridge \*bridge = \[\[RCTBridge alloc] initWithDelegate:moduleInitialiser launchOptions:nil];

RCTRootView \*rootView = \[\[RCTRootView alloc]
initWithBridge:bridge
moduleName:kModuleName
initialProperties:nil];

```

### Exporting Swift[​](#exporting-swift "Direct link to Exporting Swift")

Swift doesn't have support for macros, so exposing native modules and their methods to JavaScript inside React Native requires a bit more setup. However, it works relatively the same. Let's say you have the same `CalendarModule` but as a Swift class:

swift

```

// CalendarModule.swift

@objc(CalendarModule)
class CalendarModule: NSObject {

@objc(addEvent:location:date:)
func addEvent(\_ name: String, location: String, date: NSNumber) -> Void {
// Date is ready to use!
}

@objc
func constantsToExport() -> \[String: Any]! {
return \["someKey": "someValue"]
}

}

```

note

It is important to use the `@objc` modifiers to ensure the class and functions are exported properly to the Objective-C runtime.

Then create a private implementation file that will register the required information with React Native:

objectivec

```

// CalendarModuleBridge.m
\#import \<React/RCTBridgeModule.h>

@interface RCT\_EXTERN\_MODULE(CalendarModule, NSObject)

RCT\_EXTERN\_METHOD(addEvent:(NSString \*)name location:(NSString \*)location date:(nonnull NSNumber \*)date)

@end

```

For those of you new to Swift and Objective-C, whenever you [mix the two languages in an iOS project](https://developer.apple.com/library/prerelease/ios/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html), you will also need an additional bridging file, known as a bridging header, to expose the Objective-C files to Swift. Xcode will offer to create this header file for you if you add your Swift file to your app through the Xcode `File>New File` menu option. You will need to import `RCTBridgeModule.h` in this header file.

objectivec

```

// CalendarModule-Bridging-Header.h
\#import \<React/RCTBridgeModule.h>

```

You can also use `RCT_EXTERN_REMAP_MODULE` and `_RCT_EXTERN_REMAP_METHOD` to alter the JavaScript name of the module or methods you are exporting. For more information see [`RCTBridgeModule`](https://github.com/facebook/react-native/blob/main/packages/react-native/React/Base/RCTBridgeModule.h).

note

Important when making third party modules: Static libraries with Swift are only supported in Xcode 9 and later. In order for the Xcode project to build when you use Swift in the iOS static library you include in the module, your main app project must contain Swift code and a bridging header itself. If your app project does not contain any Swift code, a workaround can be a single empty .swift file and an empty bridging header.

### Reserved Method Names[​](#reserved-method-names "Direct link to Reserved Method Names")

#### invalidate()[​](#invalidate "Direct link to invalidate()")

Native modules can conform to the [RCTInvalidating](https://github.com/facebook/react-native/blob/main/packages/react-native/React/Base/RCTInvalidating.h) protocol on iOS by implementing the `invalidate()` method. This method [can be invoked](https://github.com/facebook/react-native/blob/0.62-stable/ReactCommon/turbomodule/core/platform/ios/RCTTurboModuleManager.mm#L456) when the native bridge is invalidated (i.e.: on devmode reload). Please use this mechanism as necessary to do the required cleanup for your native module.


---

# Native Modules NPM Package Setup

info

Native Module and Native Components are our stable technologies used by the legacy architecture. They will be deprecated in the future when the New Architecture will be stable. The New Architecture uses [Turbo Native Module](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/turbo-modules.md) and [Fabric Native Components](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/fabric-native-components.md) to achieve similar results.

Native modules are usually distributed as npm packages, except that on top of the usual JavaScript they will include some native code per platform. To understand more about npm packages you may find [this guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) useful.

To get set up with the basic project structure for a native module we will use the community tool called [create-react-native-library](https://callstack.github.io/react-native-builder-bob/create). You can go ahead further and dive deep into how that library works, but for our needs we will only execute the basic script:

shell

```

npx create-react-native-library@latest react-native-awesome-module

```

Where `react-native-awesome-module` is the name you would like for the new module. After doing this you will navigate into `react-native-awesome-module` folder and bootstrap the example project by running:

shell

```

yarn

```

When the bootstrap is done, you will be able to start the example app by executing one of the following commands:

shell

```

# Android app

yarn example android
