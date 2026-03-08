# Stack

Learn how to use the Stack navigator in Expo Router.

[Using a Stack Navigator with Expo Router](https://www.youtube.com/watch?v=izZv6a99Roo) — Navigate between screens, pass params between screens, create dynamic routes, and configure the screen titles and animations.

A stack navigator is the foundational way of navigating between routes in an app. On Android, a stacked route animates on top of the current screen. On iOS, a stacked route animates from the right. Expo Router provides a `Stack` navigation component that creates a navigation stack and allows you to add new routes in your app.

This guide provides information on how you can create a `Stack` navigator in your project and customize an individual route's options and header.

## Get started

You can use file-based routing to create a stack navigator. Here's an example file structure:

`src`

 `app`

  `_layout.tsx`

  `index.tsx`

  `details.tsx`

This file structure produces a layout where the `index` route is the first route in the stack, and the `details` route is pushed on top of the `index` route when navigated.

You can use the **src/app/\_layout.tsx** file to define your app's `Stack` navigator with these two routes:

```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack />;
}
```

## Screen options and header configuration

Starting in SDK 55, you can configure screen options and the header using either the options-based API or the new composition components API. Both APIs can be used interchangeably in your project.

### Statically configure route options

You can use the `<Stack.Screen name={routeName} />` component in the layout component route to statically configure a route's options.

```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="home" options={{}} />
    </Stack>
  );
}
```

### Configure header bar

You can configure the header bar for all routes in a `Stack` navigator by using the `screenOptions` prop. This is useful for setting a common header style across all routes.

```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  );
}
```

### Set screen options dynamically

To configure a route's options dynamically, you can use either the composition components or the options-based API.

```tsx
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Details() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: params.name,
          headerStyle: { backgroundColor: 'lightblue' },
        }}
      />
      <Text
        onPress={() => {
          router.setParams({ name: 'Updated' });
        }}>
        Update the title
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

### Available header options

The `Stack` navigator supports comprehensive header configuration options. Below are all the header-related options available:

Header options

| Option | Platform | Description |
| --- | --- | --- |
| `header` | Android, iOS | Custom header to use instead of the default header. This accepts a function that returns a React Element to display as a header. The function receives an object containing the following properties as the argument:

- `navigation` - The navigation object for the current screen.
- `route` - The route object for the current screen.
- `options` - The options for the current screen
- `back` - Options for the back button, contains an object with a `title` property to use for back button label.

. To set a custom header for all the screens in the navigator, you can specify this option in the `screenOptions` prop of the navigator. Note that if you specify a custom header, the native functionality such as large title, search bar etc. won't work. |
| `headerBackButtonDisplayMode` | iOS | How the back button displays icon and title. Supported values:

- "default" - Displays one of the following depending on the available space: previous screen's title, generic title (e.g. 'Back') or no title (only icon).
- "generic" – Displays one of the following depending on the available space: generic title (e.g. 'Back') or no title (only icon).
- "minimal" – Always displays only the icon without a title.

. The space-aware behavior is disabled when:

- The iOS version is 13 or lower
- Custom font family or size is set (e.g. with `headerBackTitleStyle`)
- Back button menu is disabled (e.g. with `headerBackButtonMenuEnabled`)

. In such cases, a static title and icon are always displayed. |
| `headerBackButtonMenuEnabled` | iOS | Boolean indicating whether to show the menu on longPress of iOS >= 14 back button. Defaults to `true`. |
| `headerBackground` | Android, iOS | Function which returns a React Element to render as the background of the header. This is useful for using backgrounds such as an image or a gradient. |
| `headerBackImageSource` | Android, iOS | Image to display in the header as the icon in the back button. Defaults to back icon image for the platform

- A chevron on iOS
- An arrow on Android

|
| `headerBackTitle` | iOS | Title string used by the back button on iOS. Defaults to the previous scene's title, "Back" or arrow icon depending on the available space. See `headerBackButtonDisplayMode` to read about limitations and customize the behavior. Use `headerBackButtonDisplayMode: "minimal"` to hide it. |
| `headerBackTitleStyle` | iOS | Style object for header back title. Supported properties:

- `fontFamily`
- `fontSize`

|
| `headerBackVisible` | Android, iOS | Whether the back button is visible in the header. You can use it to show a back button alongside `headerLeft` if you have specified it. This will have no effect on the first screen in the stack. |
| `headerBlurEffect` | iOS | Blur effect for the translucent header. The `headerTransparent` option needs to be set to `true` for this to work. Supported values: `extraLight`, `light`, `dark`, `regular`, `prominent`, `systemUltraThinMaterial`, `systemThinMaterial`, `systemMaterial`, `systemThickMaterial`, `systemChromeMaterial`, `systemUltraThinMaterialLight`, `systemThinMaterialLight`, `systemMaterialLight`, `systemThickMaterialLight`, `systemChromeMaterialLight`, `systemUltraThinMaterialDark`, `systemThinMaterialDark`, `systemMaterialDark`, `systemThickMaterialDark`, `systemChromeMaterialDark` |
| `headerLargeStyle` | iOS | Style of the header when a large title is shown. The large title is shown if `headerLargeTitle` is `true` and the edge of any scrollable content reaches the matching edge of the header. Supported properties:

- backgroundColor

|
| `headerLargeTitle` | iOS | Whether to enable header with large title which collapses to regular header on scroll. Defaults to `false`. For large title to collapse on scroll, the content of the screen should be wrapped in a scrollable view such as `ScrollView` or `FlatList`. If the scrollable area doesn't fill the screen, the large title won't collapse on scroll. You also need to specify `contentInsetAdjustmentBehavior="automatic"` in your `ScrollView`, `FlatList` etc. |
| `headerLargeTitleShadowVisible` | Android, iOS | Whether drop shadow of header is visible when a large title is shown. |
| `headerLargeTitleStyle` | iOS | Style object for large title in header. Supported properties:

- `fontFamily`
- `fontSize`
- `fontWeight`
- `color`

|
| `headerLeft` | Android, iOS | Function which returns a React Element to display on the left side of the header. This replaces the back button. See `headerBackVisible` to show the back button along side left element. It receives the following properties in the arguments:

- `tintColor` - The tint color to apply. Defaults to the theme's primary color.
- `canGoBack` - Boolean indicating whether there is a screen to go back to.
- `label` - Label text for the button. Usually the title of the previous screen.
- `href` - The `href` to use for the anchor tag on web

|
| `headerRight` | Android, iOS | Function which returns a React Element to display on the right side of the header. It receives the following properties in the arguments:

- `tintColor` - The tint color to apply. Defaults to the theme's primary color.
- `canGoBack` - Boolean indicating whether there is a screen to go back to.

|
| `headerSearchBarOptions` | iOS | Options to render a native search bar on iOS. Search bars are rarely static so normally it is controlled by passing an object to `headerSearchBarOptions` navigation option in the component's body. You also need to specify `contentInsetAdjustmentBehavior="automatic"` in your `ScrollView`, `FlatList` etc. If you don't have a `ScrollView`, specify `headerTransparent: false`. Supported properties are: . **ref** . Ref to manipulate the search input imperatively. It contains the following methods:

- `focus` - focuses the search bar
- `blur` - removes focus from the search bar
- `setText` - sets the search bar's content to given value
- `clearText` - removes any text present in the search bar input field
- `cancelSearch` - cancel the search and close the search bar

. **autoCapitalize** . Controls whether the text is automatically auto-capitalized as it is entered by the user. Possible values:

- `none`
- `words`
- `sentences`
- `characters`

. Defaults to `sentences`. **autoFocus** . Whether to automatically focus search bar when it's shown. Defaults to `false`. **barTintColor** . The search field background color. By default bar tint color is translucent. **tintColor** . The color for the cursor caret and cancel button text. **cancelButtonText** . The text to be used instead of default `Cancel` button text. **disableBackButtonOverride** . Whether the back button should close search bar's text input or not. Defaults to `false`. **hideNavigationBar** . Boolean indicating whether to hide the navigation bar during searching. Defaults to `true`. **hideWhenScrolling** . Boolean indicating whether to hide the search bar when scrolling. Defaults to `true`. **inputType** . The type of the input. Defaults to `"text"`. Supported values: `"text"`, `"phone"`, `"number"`, `"email"` . **obscureBackground** . Boolean indicating whether to obscure the underlying content with semi-transparent overlay. Defaults to `true`. **placeholder** . Text displayed when search field is empty. **textColor** . The color of the text in the search field. **hintTextColor** . The color of the hint text in the search field. **headerIconColor** . The color of the search and close icons shown in the header . **shouldShowHintSearchIcon** . Whether to show the search hint icon when search bar is focused. Defaults to `true`. **onBlur** . A callback that gets called when search bar has lost focus. **onCancelButtonPress** . A callback that gets called when the cancel button is pressed. **onChangeText** . A callback that gets called when the text changes. It receives the current text value of the search bar. |
| `headerShadowVisible` | Android, iOS | Whether to hide the elevation shadow (Android) or the bottom border (iOS) on the header. |
| `headerShown` | Android, iOS | Whether to show the header. The header is shown by default. Setting this to `false` hides the header. |
| `headerStyle` | Android, iOS | Style object for header. Supported properties:

- `backgroundColor`

|
| `headerTintColor` | Android, iOS | Tint color for the header. Changes the color of back button and title. |
| `headerTitle` | Android, iOS | String or a function that returns a React Element to be used by the header. Defaults to `title` or name of the screen. When a function is passed, it receives `tintColor` and`children` in the options object as an argument. The title string is passed in `children`. Note that if you render a custom element by passing a function, animations for the title won't work. |
| `headerTitleAlign` | Android, iOS | How to align the header title. Possible values:

- . `left`
- . `center`

. Defaults to `left` on platforms other than iOS. Not supported on iOS. It's always `center` on iOS and cannot be changed. |
| `headerTitleStyle` | Android, iOS | Style object for header title. Supported properties:

- `fontFamily`
- `fontSize`
- `fontWeight`
- `color`

|
| `headerTransparent` | Android, iOS | Boolean indicating whether the navigation bar is translucent. Defaults to `false`. Setting this to `true` makes the header absolutely positioned - so that the header floats over the screen so that it overlaps the content underneath, and changes the background color to `transparent` unless specified in `headerStyle`. This is useful if you want to render a semi-transparent header or a blurred background. Note that if you don't want your content to appear under the header, you need to manually add a top margin to your content. React Navigation won't do it automatically. To get the height of the header, you can use `HeaderHeightContext` with React's Context API or `useHeaderHeight`. |
| `title` | Android, iOS | String that can be used as a fallback for `headerTitle`. |
| `unstable_headerLeftItems` | iOS | This option is experimental and may change in a minor release. Function which returns an array of items to display as on the left side of the header. This will override `headerLeft` if both are specified. It receives the following properties in the arguments:

- `tintColor` - The tint color to apply. Defaults to the theme's primary color.
- `canGoBack` - Boolean indicating whether there is a screen to go back to.

. See Header items for more information. |
| `unstable_headerRightItems` | iOS | This option is experimental and may change in a minor release. Function which returns an array of items to display as on the right side of the header. This will override `headerRight` if both are specified. It receives the following properties in the arguments:

- `tintColor` - The tint color to apply. Defaults to the theme's primary color.
- `canGoBack` - Boolean indicating whether there is a screen to go back to.

. See Header items for more information. |

For additional details and navigator-specific examples, see [React Navigation's Native Stack Navigator documentation](https://reactnavigation.org/docs/native-stack-navigator).

### Header buttons

You can add buttons to the header by using the `headerLeft` and `headerRight` options or `<Stack.Toolbar>` component. These options accept a React component that renders in the header.

[Stack Toolbar](/router/advanced/stack-toolbar) — Configure iOS header toolbar with support for Liquid Glass.

```tsx
import { Stack } from 'expo-router';
import { Button, Text, Image, StyleSheet } from 'react-native';
import { useState } from 'react';

function LogoTitle() {
  return (
    <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  );
}

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
        }}
      />
      <Text>Count: {count}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
```

### Other screen options

For a complete list of all available other screen options including animations, gestures, and other configurations:

Screen options

| Option | Platform | Description |
| --- | --- | --- |
| `animation` | Android | How the screen should animate when pushed or popped. Supported values: `default`, `fade`, `fade_from_bottom`, `flip`, `simple_push`, `slide_from_bottom`, `slide_from_right`, `slide_from_left`, `none` |
| `animationDuration` | iOS | Changes the duration (in milliseconds) of `slide_from_bottom`, `fade_from_bottom`, `fade` and `simple_push` transitions on iOS. Defaults to `350`. The duration of `default` and `flip` transitions isn't customizable. |
| `animationMatchesGesture` | iOS | Whether the gesture to dismiss should use animation provided to `animation` prop. Defaults to `false`. Doesn't affect the behavior of screens presented modally. |
| `animationTypeForReplace` | Android, iOS | The type of animation to use when this screen replaces another screen. Defaults to `push`. Supported values: `push`, `pop` |
| `autoHideHomeIndicator` | iOS | Boolean indicating whether the home indicator should prefer to stay hidden. Defaults to `false`. |
| `contentStyle` | Android, iOS | Style object for the scene content. |
| `freezeOnBlur` | iOS | Boolean indicating whether to prevent inactive screens from re-rendering. Defaults to `false`. Defaults to `true` when `enableFreeze()` from `react-native-screens` package is run at the top of the application. Only supported on iOS and Android. |
| `fullScreenGestureEnabled` | iOS | Whether the gesture to dismiss should work on the whole screen. Using gesture to dismiss with this option results in the same transition animation as `simple_push`. This behavior can be changed by setting `customAnimationOnGesture` prop. Achieving the default iOS animation isn't possible due to platform limitations. Defaults to `false`. Doesn't affect the behavior of screens presented modally. |
| `fullScreenGestureShadowEnabled` | Android, iOS | Whether the full screen dismiss gesture has shadow under view during transition. Defaults to `true`. This does not affect the behavior of transitions that don't use gestures enabled by `fullScreenGestureEnabled` prop. |
| `gestureDirection` | iOS | Sets the direction in which you should swipe to dismiss the screen. Supported values: `vertical`, `horizontal` . When using `vertical` option, options `fullScreenGestureEnabled: true`, `customAnimationOnGesture: true` and `animation: 'slide_from_bottom'` are set by default. |
| `gestureEnabled` | iOS | Whether you can use gestures to dismiss this screen. Defaults to `true`. |
| `navigationBarColor` | Android | This option is deprecated and will be removed in a future release (for apps targeting Android SDK 35 or above edge-to-edge mode is enabled by default and it is expected that the edge-to-edge will be enforced in future SDKs, see here for more information). Sets the navigation bar color. Defaults to initial status bar color. |
| `navigationBarHidden` | Android | Boolean indicating whether the navigation bar should be hidden. Defaults to `false`. |
| `orientation` | Android | The display orientation to use for the screen. Supported values: `default`, `all`, `portrait`, `portrait_up`, `portrait_down`, `landscape`, `landscape_left`, `landscape_right` |
| `presentation` | Android | How should the screen be presented. Supported values: `card`, `modal`, `transparentModal`, `containedModal`, `containedTransparentModal`, `fullScreenModal`, `formSheet` |
| `sheetAllowedDetents` | Android | Works only when `presentation` is set to `formSheet`. Describes heights where a sheet can rest. Supported values: `fitToContents` . Defaults to `[1.0]`. |
| `sheetCornerRadius` | Android | Works only when `presentation` is set to `formSheet`. The corner radius that the sheet will try to render with. If set to non-negative value it will try to render sheet with provided radius, else it will apply system default. If left unset, system default is used. |
| `sheetElevation` | Android | Works only when `presentation` is set to `formSheet`. Integer value describing elevation of the sheet, impacting shadow on the top edge of the sheet. Not dynamic - changing it after the component is rendered won't have an effect. Defaults to `24`. |
| `sheetExpandsWhenScrolledToEdge` | iOS | Works only when `presentation` is set to `formSheet`. Whether the sheet should expand to larger detent when scrolling. Defaults to `true`. Please note that for this interaction to work, the ScrollView must be "first-subview-chain" descendant of the Screen component. This restriction is due to platform requirements. |
| `sheetGrabberVisible` | iOS | Works only when `presentation` is set to `formSheet`. Boolean indicating whether the sheet shows a grabber at the top. Defaults to `false`. |
| `sheetInitialDetentIndex` | Android | Works only when `presentation` is set to `formSheet`. **Index** of the detent the sheet should expand to after being opened. If the specified index is out of bounds of `sheetAllowedDetents` array, in dev environment more errors will be thrown, in production the value will be reset to default value. Additionaly there is `last` value available, when set the sheet will expand initially to last (largest) detent. Defaults to `0` - which represents first detent in the detents array. |
| `sheetLargestUndimmedDetentIndex` | Android | Works only when `presentation` is set to `formSheet`. The largest sheet detent for which a view underneath won't be dimmed. This prop can be set to an number, which indicates index of detent in `sheetAllowedDetents` array for which there won't be a dimming view beneath the sheet. Additionaly there are following options available:

- `none` - there will be dimming view for all detents levels,
- `last` - there won't be a dimming view for any detent level.

. Defaults to `none`, indicating that the dimming view should be always present. |
| `statusBarAnimation` | Android | Sets the status bar animation (similar to the `StatusBar` component). Defaults to `fade` on iOS and `none` on Android. Supported values: `"fade"`, `"none"`, `"slide"` . On Android, setting either `fade` or `slide` will set the transition of status bar color. On iOS, this option applies to appereance animation of the status bar. Requires setting `View controller-based status bar appearance -> YES` (or removing the config) in your `Info.plist` file. |
| `statusBarBackgroundColor` | Android | This option is deprecated and will be removed in a future release (for apps targeting Android SDK 35 or above edge-to-edge mode is enabled by default and it is expected that the edge-to-edge will be enforced in future SDKs, see here for more information). Sets the background color of the status bar (similar to the `StatusBar` component). |
| `statusBarHidden` | Android | Whether the status bar should be hidden on this screen. Requires setting `View controller-based status bar appearance -> YES` (or removing the config) in your `Info.plist` file. |
| `statusBarStyle` | Android | Sets the status bar color (similar to the `StatusBar` component). Supported values: `"auto"`, `"inverted"`, `"dark"`, `"light"` . Defaults to `auto` on iOS and `light` on Android. Requires setting `View controller-based status bar appearance -> YES` (or removing the config) in your `Info.plist` file. |
| `statusBarTranslucent` | Android | This option is deprecated and will be removed in a future release (for apps targeting Android SDK 35 or above edge-to-edge mode is enabled by default and it is expected that the edge-to-edge will be enforced in future SDKs, see here for more information). Sets the translucency of the status bar (similar to the `StatusBar` component). Defaults to `false`. |
| `tabBarAccessibilityLabel` | Android, iOS | Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab. |
| `tabBarActiveBackgroundColor` | Android, iOS | Background color for the active tab. |
| `tabBarActiveTintColor` | Android, iOS | Color for the icon and label in the active tab. |
| `tabBarBackground` | Android, iOS | Function which returns a React Element to use as background for the tab bar. You could render an image, a gradient, blur view etc.:

```js
import { BlurView } from 'expo-blur';

// . .

<Tab.Navigator
  screenOptions={{
    tabBarStyle: { position: 'absolute' },
    tabBarBackground: () => (
      <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
    ),
  }}
>
```

. When using `BlurView`, make sure to set `position: 'absolute'` in `tabBarStyle` as well. You'd also need to use `useBottomTabBarHeight` to add bottom padding to your content. |
| `tabBarBadge` | Android, iOS | Text to show in a badge on the tab icon. Accepts a `string` or a `number`. |
| `tabBarBadgeStyle` | Android, iOS | Style for the badge on the tab icon. You can specify a background color or text color here. |
| `tabBarButton` | Android, iOS | Function which returns a React element to render as the tab bar button. It wraps the icon and label. Renders `Pressable` by default. You can specify a custom implementation here:

```js
tabBarButton: (props) => <TouchableOpacity {. .props} />;
```

|
| `tabBarButtonTestID` | Android, iOS | ID to locate this tab button in tests. |
| `tabBarHideOnKeyboard` | Android, iOS | Whether the tab bar is hidden when the keyboard opens. Defaults to `false`. |
| `tabBarIcon` | Android, iOS | Function that given `{ focused: boolean, color: string, size: number }` returns a React.Node, to display in the tab bar. |
| `tabBarIconStyle` | Android, iOS | Style object for the tab icon. |
| `tabBarInactiveBackgroundColor` | Android, iOS | Background color for the inactive tabs. |
| `tabBarInactiveTintColor` | Android, iOS | Color for the icon and label in the inactive tabs. |
| `tabBarItemStyle` | Android, iOS | Style object for the tab item container. |
| `tabBarLabel` | Android, iOS | Title string of a tab displayed in the tab bar or a function that given `{ focused: boolean, color: string }` returns a React.Node, to display in tab bar. When undefined, scene `title` is used. To hide, see `tabBarShowLabel`. |
| `tabBarLabelPosition` | Android, iOS | Whether the label is shown below the icon or beside the icon. By default, the position is chosen automatically based on device width.

- . `below-icon`: the label is shown below the icon (typical for iPhones)
- . `beside-icon` the label is shown next to the icon (typical for iPad)

|
| `tabBarLabelStyle` | Android, iOS | Style object for the tab label. |
| `tabBarPosition` | Android, iOS | Position of the tab bar. Available values are:

- `bottom` (Default)
- `top`
- `left`
- `right`

. When the tab bar is positioned on the `left` or `right`, it is styled as a sidebar. This can be useful when you want to show a sidebar on larger screens and a bottom tab bar on smaller screens:

```js
<Tab.Navigator
  screenOptions={{
    tabBarPosition: dimensions.width < 600 ? 'bottom' : 'left',
    tabBarLabelPosition: 'below-icon',
  }}
>
```

|
| `tabBarShowLabel` | Android, iOS | Whether the tab label should be visible. Defaults to `true`. |
| `tabBarStyle` | Android, iOS | Style object for the tab bar. You can configure styles such as background color here. To show your screen under the tab bar, you can set the `position` style to absolute:

```js
<Tab.Navigator
  screenOptions={{
    tabBarStyle: { position: 'absolute' },
  }}
>
```

. You also might need to add a bottom margin to your content if you have an absolutely positioned tab bar. React Navigation won't do it automatically. See `useBottomTabBarHeight` for more details. |
| `tabBarVariant` | Android, iOS | Variant of the tab bar. Available values are:

- `uikit` (Default) - The tab bar will be styled according to the iOS UIKit guidelines.
- `material` - The tab bar will be styled according to the Material Design guidelines.

. The `material` variant is currently only supported when the `tabBarPosition` is set to `left` or `right`. |

For additional details and navigator-specific examples, see [React Navigation's Native Stack Navigator documentation](https://reactnavigation.org/docs/native-stack-navigator).

## Custom push behavior

By default, the `Stack` navigator removes duplicate screens when pushing a route that is already in the stack. For example, if you push the same screen twice, the second push will be ignored. You can change this push behavior by providing a custom `getId()` function to the `<Stack.Screen>`.

For example, the `index` route in the following layout structure shows a list of different user profiles in the app. Let's make the `[details]` route a [dynamic route](/router/basics/notation#square-brackets) so that the app user can navigate to see a profile's details.

`src`

 `app`

  `_layout.tsx`

  `index.tsx`

  `[details].tsx``matches dynamic paths like '/details1'`

The `Stack` navigator will push a new screen every time the app user navigates to a different profile but will fail. If you provide a `getId()` function that returns a new ID every time, the `Stack` will push a new screen every time the app user navigates to a profile.

You can use the `<Stack.Screen name="[profile]" getId={}>` component in the layout component route to modify the push behavior:

```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="[profile]"
        getId={
          ({ params }) => String(Date.now())
        }
      />
    </Stack>
  );
}
```

## Removing stack screens

There are different actions you can use to dismiss and remove one or many routes from a stack.

### `dismiss` action

Dismisses the last screen in the closest stack. If the current screen is the only route in the stack, it will dismiss the entire stack.

You can optionally pass a positive number to dismiss up to that specified number of screens.

Dismiss is different from `back` as it targets the closest stack and not the current navigator. If you have nested navigators, calling `dismiss` will take you back multiple screens.

```tsx
import { Button, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Settings() {
  const router = useRouter();

  const handleDismiss = (count: number) => {
    router.dismiss(count)
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go to first screen" onPress={() => handleDismiss(3)} />
    </View>
  );
}
```

### `dismissTo` action

> `dismissTo` was added in Expo Router `4.0.8`. It operates similarly to the `navigation` function in Expo Router v3.

Dismisses screens in the current `<Stack />` until the specified `Href` is reached. If the `Href` is absent in the history, a `push` action will be performed instead.

For example, consider the history of `/one`, `/two`, `/three` routes, where `/three` is the current route. The action `router.dismissTo('/one')` will cause the history to go back twice, while `router.dismissTo('/four')` will `push` the history forward to the `/four` route.

```tsx
import { Button, View, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function Settings() {
  const router = useRouter();

  const handleDismissAll = () => {
    router.dismissTo('/')
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go to first screen" onPress={handleDismissAll} />
    </View>
  );
}
```

### `dismissAll` action

To return to the first screen in the closest stack. This is similar to [`popToTop`](https://reactnavigation.org/docs/stack-actions/#poptotop) stack action.

For example, the `home` route is the first screen, and the `settings` is the last. To go from `settings` to `home` route you'll have to go back to `details`. However, using the `dismissAll` action, you can go from `settings` to `home` and dismiss any screen in between.

```tsx
import { Button, View, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function Settings() {
  const router = useRouter();

  const handleDismissAll = () => {
    router.dismissAll()
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go to first screen" onPress={handleDismissAll} />
    </View>
  );
}
```

### `canDismiss` action

To check if it is possible to dismiss the current screen. Returns `true` if the router is within a stack with more than one screen in the stack's history.

```tsx
import { Button, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Settings() {
  const router = useRouter();

  const handleDismiss = (count: number) => {
    if (router.canDismiss()) {
      router.dismiss(count)
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Maybe dismiss" onPress={() => handleDismiss()} />
    </View>
  );
}
```

## Relation with Native Stack Navigator

The `Stack` navigator in Expo Router wraps the [Native Stack Navigator](https://reactnavigation.org/docs/native-stack-navigator) from React Navigation. Options available in the Native Stack Navigator are all available in the `Stack` navigator in Expo Router.

### JavaScript stack with @react-navigation/stack

You can also use the JavaScript-powered `@react-navigation/stack` library to create a custom layout component by wrapping this library with the `withLayoutContext`.

In the following example, `JsStack` component is defined using `@react-navigation/stack` library:

```tsx
import { ParamListBase, StackNavigationState } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationEventMap,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createStackNavigator();

export const JsStack = withLayoutContext<
  StackNavigationOptions,
  typeof Navigator,
  StackNavigationState<ParamListBase>,
  StackNavigationEventMap
>(Navigator);
```

After defining the `JsStack` component, you can use it in your app:

```tsx
import { JsStack } from '../layouts/js-stack';

export default function Layout() {
  return (
    <JsStack
      screenOptions={
        {
          ... 
        }
      }
    />
  );
}
```

For more information on available options, see [`@react-navigation/stack` documentation](https://reactnavigation.org/docs/stack-navigator).

## iOS 26 Liquid Glass headers

Starting from iOS 26, navigation headers adopt the system's "Liquid Glass" effect by default. It cannot be disabled per screen, so you need to opt out using a global configuration.

### Method 1: Use `UIDesignRequiresCompatibility`

> **Note**: Not supported in Expo Go.This method is a temporary workaround. From iOS 27, this option will be removed by Apple and you cannot opt out of the Liquid Glass effect.

Create a [development build](/develop/development-builds/create-a-build#prerequisites) and set the [`UIDesignRequiresCompatibility`](https://developer.apple.com/documentation/BundleResources/Information-Property-List/UIDesignRequiresCompatibility) property to `true` in [app config](/workflow/configuration):

```json
{
  "ios": {
    "infoPlist": {
      "UIDesignRequiresCompatibility": true
    }
  }
}
```

### Method 2: Use JavaScript-based navigation stack

Switch from native navigation library ([`@react-navigation/native`](https://reactnavigation.org/docs/native-stack-navigator/)) to a JavaScript-based stack navigator library such as [`@react-navigation/stack`](https://reactnavigation.org/docs/stack-navigator/), which gives you full control over the header UI but at the cost of performance benefits of using the highly optimized iOS navigation views/controllers.

For more information, see [JavaScript stack with `@react-navigation/stack`](/router/advanced/stack#javascript-stack-with-react-navigationstack).

## Common problems

Large title does not collapse when scrolling

When using `headerLargeTitle: true` (or `<Stack.Screen.Title large>`) with a `ScrollView` or `FlatList`, the large title may not collapse on scroll. This happens when the scrollable view is not the direct first child of the screen component.

To fix this, ensure `ScrollView` or `FlatList` is the first child rendered by your screen component. If you need a wrapper, set `collapsable={false}` on it:

```tsx
import { Stack } from 'expo-router';
import { ScrollView, View, Text } from 'react-native';

export default function Home() {
  return (
    <ScrollView>
      <Stack.Screen.Title large>Home</Stack.Screen.Title>
      <Text>Content here</Text>
    </ScrollView>
  );
}
```

If you need to wrap the `ScrollView`, set `collapsable={false}` on the wrapper:

```tsx
import { Stack } from 'expo-router';
import { ScrollView, View, Text } from 'react-native';

export default function Home() {
  return (
    <View collapsable={false}>
      <ScrollView>
        <Stack.Screen.Title large>Home</Stack.Screen.Title>
        <Text>Content here</Text>
      </ScrollView>
    </View>
  );
}
```

White background flashes when navigating between screens

A white flash between screen transitions usually means the navigation stack is using a light background while your app uses a dark theme.

To fix this, wrap your root layout with React Navigation's `<ThemeProvider>` and pass the appropriate theme:

```tsx
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack />
    </ThemeProvider>
  );
}
```

For apps that are always dark-themed:

```tsx
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack />
    </ThemeProvider>
  );
}
```

***

# JavaScript tabs
