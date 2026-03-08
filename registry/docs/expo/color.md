# Color

Access platform-specific colors with type safety in Expo Router.

The `Color` API provides type-safe access to platform-specific colors on Android and iOS. It wraps React Native's `PlatformColor` with full TypeScript support, enabling autocomplete and compile-time type checking for system colors.

## Usage

```tsx
import { Color } from 'expo-router';
```

The `Color` object has two platform-specific namespaces:

- `Color.android.*` - Android colors including base colors, attributes, and Material Design 3 colors
- `Color.ios.*` - iOS system colors from UIKit

## Android colors

Android provides four categories of colors through the `Color.android` namespace.

### Base colors

Access Android system colors through `Color.android.*`. These map to `@android:color/` resources.

```tsx
import { Color } from 'expo-router';

// Basic colors
Color.android.black;
Color.android.white;
Color.android.transparent;

// Background colors
Color.android.background_dark;
Color.android.background_light;
```

See the [Android R.color documentation](https://developer.android.com/reference/android/R.color) for the full list of available colors.

### Attribute colors

Access Android theme attributes through `Color.android.attr.*`. These resolve colors from the current theme using `?attr/` syntax.

```tsx
import { Color } from 'expo-router';

// Theme colors
Color.android.attr.colorPrimary;
Color.android.attr.colorSecondary;
Color.android.attr.colorAccent;
Color.android.attr.colorBackground;
```

See the [Android R.attr documentation](https://developer.android.com/reference/android/R.attr) for more information.

### Material Design 3 static colors

Access Material Design 3 static colors through `Color.android.material.*`. These use the standard Material 3 Light/Dark theme colors.

```tsx
import { Color } from 'expo-router';

// Primary colors
Color.android.material.primary;
Color.android.material.onPrimary;
Color.android.material.primaryContainer;
Color.android.material.onPrimaryContainer;

// Surface colors
Color.android.material.surface;
Color.android.material.onSurface;
```

See the [Material Design 3 color roles documentation](https://m3.material.io/styles/color/roles) for more information about each color role.

### Material Design 3 dynamic colors

Access Material Design 3 dynamic colors through `Color.android.dynamic.*`. Dynamic colors adapt to the user's wallpaper using Android's [Dynamic Color feature](https://m3.material.io/styles/color/dynamic/user-generated-source), available on Android 12+ (API 31+).

```tsx
import { Color } from 'expo-router';

// Dynamic colors adapt to user's wallpaper
Color.android.dynamic.primary;
Color.android.dynamic.onPrimary;
Color.android.dynamic.surface;
Color.android.dynamic.onSurface;
```

The available colors are the same as [Material 3 static colors](/router/reference/color#material-design-3-static-colors).

### Responding to theme changes on Android

Android Material colors (both static and dynamic) respond to the system's light/dark mode. To ensure your component re-renders when the theme changes, use the `useColorScheme()` hook from React Native.

```tsx
import { Color } from 'expo-router';
import { View, Text, useColorScheme } from 'react-native';

function MyComponent() {
  // Triggers re-render when system theme changes
  useColorScheme();

  return (
    <View style={{ backgroundColor: Color.android.dynamic.surface }}>
      <Text style={{ color: Color.android.dynamic.onSurface }}>Hello, World!</Text>
    </View>
  );
}
```

Without using `useColorScheme()`, the colors may not update when the user switches between light and dark mode.

> This is especially important when using React Compiler, which can memoize components and skip re-renders unless `useColorScheme()` is called.

## iOS colors

Access iOS system colors through `Color.ios.*`. These map directly to UIKit's [standard colors](https://developer.apple.com/documentation/uikit/standard-colors) and [UI element colors](https://developer.apple.com/documentation/uikit/ui-element-colors).

```tsx
import { Color } from 'expo-router';
import { View, Text } from 'react-native';

function MyComponent() {
  return (
    <View style={{ backgroundColor: Color.ios.systemBackground }}>
      <Text style={{ color: Color.ios.label }}>Hello, World!</Text>
    </View>
  );
}
```

iOS colors automatically adapt to the system appearance (light/dark mode) and accessibility settings.

## Cross-platform usage

The `Color` API is platform-specific. Use `useMemo` to select the appropriate color for each platform:

```tsx
import { Platform, View, Text } from 'react-native';
import { Color } from 'expo-router';

function MyComponent() {
  const backgroundColor = Platform.select({
    ios: Color.ios.systemBackground,
    android: Color.android.dynamic.surface,
    default: '#000000',
  });

  const textColor = Platform.select({
    ios: Color.ios.label,
    android: Color.android.dynamic.onSurface,
    default: '#FFFFFF',
  });

  return (
    <View style={{ backgroundColor }}>
      <Text style={{ color: textColor }}>Hello, World!</Text>
    </View>
  );
}
```

## API reference

[Color API reference](/versions/latest/sdk/router#color) — For the full list of available types and colors, see Expo Router's Color API reference.

***

# Sitemap

# Sitemap

Learn how to use the sitemap to debug your app with Expo Router.

On native, you can use the [`uri-scheme`](https://www.npmjs.com/package/uri-scheme) CLI to test opening native links on a device.

For example, if you want to launch the Expo Go app on iOS to the `/form-sheet` route, run:

```sh
npx uri-scheme open exp://192.168.87.39:19000/--/form-sheet --ios
```

> Replace `192.168.87.39:19000` with the IP address shown when running `npx expo start`.

You can also search for links directly in a browser like Safari or Chrome to test deep linking on physical devices. Learn more about [testing deep links](https://reactnavigation.org/docs/deep-linking).

## Sitemap

Expo Router currently injects a **/\_sitemap** automatically that provides a list of all routes in the app. This is useful for debugging.

The sitemap can be removed by adding `sitemap: false` to the `expo-router` config plugin in the app config:

```json
{
  "plugins": [
    [
      "expo-router",
      {
        "sitemap": false
      }
    ]
  ]
}
```

***

# Redirects

# Redirects

Learn how to redirect URLs in Expo Router.

You can redirect a request to a different URL based on some in-app criteria. Expo Router supports a number of different redirection patterns.

## Using `Redirect` component

You can immediately redirect from a particular screen by using the `Redirect` component:

```tsx
import { View, Text } from 'react-native';
import { Redirect } from 'expo-router';

export default function Page() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <View>
      <Text>Welcome Back!</Text>
    </View>
  );
}
```

## Using `useRouter` hook

You can also redirect imperatively with the `useRouter` hook:

```tsx
import { Text } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';

function MyScreen() {
  const router = useRouter();

  useFocusEffect(() => {
    // Call the replace method to redirect to a new route without adding to the history.
    // We do this in a useFocusEffect to ensure the redirect happens every time the screen
    // is focused.
    router.replace('/profile/settings');
  });

  return <Text>My Screen</Text>;
}
```

***

# Link preview
