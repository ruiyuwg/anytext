# Native tabs

Learn how to use the native tabs layout in Expo Router.

[Liquid Glass Tabs with Expo Router](https://www.youtube.com/watch?v=QqNZXdGFl44) — Learn how to use native tabs to create liquid glass tabs on iOS with Expo Router.

> Native tabs is in alpha and is available in SDK 54 and later. Its API is subject to change.

Tabs are a common way to navigate between different sections of an app. In Expo Router, you can use different tab layouts, depending on your needs. This guide covers the native tabs. Unlike the [other tabs layout](/router/advanced/tabs#multiple-tab-layouts), native tabs use the native system tab bar.

For other tab layouts see:

[Custom tabs](/router/advanced/custom-tabs) — See custom tabs if your app requires a fully custom design that is not possible using system tabs.

[JavaScript tabs](/router/advanced/tabs) — See JavaScript tabs if you already use React Navigation's tabs.

## Get started

You can use file-based routing to create a tabs layout. Here's an example file structure:

`src`

 `app`

  `_layout.tsx`

  `index.tsx`

  `settings.tsx`

The above file structure produces a layout with a tab bar at the bottom of the screen. The tab bar will have two tabs: **Home** and **Settings**.

You can use the **src/app/\_layout.tsx** file to define your app's root layout using tabs. This file is the main layout file for the tab bar and each tab. Inside it, you can control how the tab bar and each tab item look and behave.

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Icon sf="gear" md="settings" />
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

Finally, you have the two tab files that make up the content of the tabs: **src/app/index.tsx** and **src/app/settings.tsx**.

```tsx
import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Tab [Home|Settings]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

The tab file named **index.tsx** is the default tab when the app loads. The second tab file **settings.tsx** shows how you can add more tabs to the tab bar.

> In contrast to the Stack navigator, tabs are not automatically added to the tab bar. You need to explicitly add them in your layout file using the `NativeTabs.Trigger`.

## Customizing tab bar items

When you want to customize the tab bar item, we recommend using the components API designed for this purpose. Currently, you can customize:

- **Icon**: The icon displayed in the tab bar item.
- **Label**: The label displayed in the tab bar item.
- **Badge**: The badge displayed in the tab bar item.

### Icon

> `NativeTabs.Trigger.Icon` is available in SDK 55 and later. For SDK 54, use `Icon` imported from `expo-router/unstable-native-tabs`.

You can use the `Icon` component to customize the icon displayed in the tab bar item. The `Icon` component accepts a `md` prop for Android material symbols, a `sf` prop for Apple's SF Symbols icons, or a `src` prop for custom images.

Alternatively, you can pass `{default: ..., selected: ...}` to either the `sf` or `src` prop to specify different icons for the default and selected states (currently not supported on Android).

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon sf={{ default: 'house', selected: 'house.fill' }} md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Icon src={require('../../../assets/setting_icon.png')} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

Liquid glass on iOS automatically changes colors based on if the background color is light or dark. There is no callback for this, so you need to use a `PlatformColor` or `DynamicColorIOS` to set the color of the icon.

```tsx
import { DynamicColorIOS } from 'react-native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs
      labelStyle={{
        // For the text color
        color: DynamicColorIOS({
          dark: 'white',
          light: 'black',
        }),
      }}
      // For the selected icon color
      tintColor={DynamicColorIOS({
        dark: 'white',
        light: 'black',
      })}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon sf={{ default: 'house', selected: 'house.fill' }} md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Icon
          src={{
            default: require('../assets/setting_icon.png'),
            selected: require('../assets/selected_setting_icon.png'),
          }}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

#### Icon rendering mode

> Icon rendering mode is available in SDK 55 and later.

When using the `src` or `xcasset` prop for custom images on iOS, you can control how the icon is rendered with the `renderingMode` prop:

- **`template` (default)**: The icon is rendered as a template image, allowing iOS to apply the tint color. This is ideal for single-color icons that should match your app's color scheme.
- **`original`**: The icon is rendered with its original colors preserved. This is useful for icons with gradients or multiple colors.

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      {/* Icon with original colors preserved (e.g., for gradient or multi-color icons) */}
      <NativeTabs.Trigger name="colorful">
        <NativeTabs.Trigger.Icon
          src={require('../../../assets/colorful_icon.png')}
          renderingMode="original"
        />
      </NativeTabs.Trigger>
      {/* Icon rendered as a template (default behavior) */}
      <NativeTabs.Trigger name="simple">
        <NativeTabs.Trigger.Icon
          src={require('../../../assets/simple_icon.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

> The `renderingMode` prop only affects iOS. On Android, all image icons are rendered with their original colors.

#### Asset catalog icons (iOS)

> This feature is available in SDK 55 and later.

On iOS, you can use images from the Xcode asset catalog as tab icons with the `xcasset` prop. This is useful when you want to manage your icons through Xcode's asset catalog instead of bundling image files.

Pass a string with the asset name to use the same icon for both default and selected states:

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon xcasset="home-icon" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

To use different icons for default and selected states, pass an object:

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon
          xcasset={{
            default: 'home-outline',
            selected: 'home-filled',
          }}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

> Asset catalog icons support the `renderingMode` prop, just like `src` icons. When `iconColor` is set, icons default to `template` rendering. Otherwise, they default to `original`.

### Label

You can use the `Label` component to customize the label displayed in the tab bar item. The `Label` component accepts a string label passed as a child. If no label is provided, the tab bar item will use the route name as the label.

If you don't want to display a label, you can use the `hidden` prop to hide the label.

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Label hidden />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

### Badge

You can use the `Badge` component to customize the badge displayed for the tab bar item. The badge is an additional mark on top of the tab and useful for showing notification or unread message counts.

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="messages">
        <NativeTabs.Trigger.Badge>9+</NativeTabs.Trigger.Badge>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Badge />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

## Customizing the tab bar

Since the native tab layout's appearance varies by platform, the customization options are also different. For all customization options, see the [API reference for `NativeTabs`](/versions/latest/sdk/router-native-tabs).

## Advanced

### Hiding the Tab bar

> `hidden` property is available in SDK 55 and later.

You can hide the tab bar using `hidden` prop on the `NativeTabs` component. To hide tab bar for specific screens, you can use context API to set the `hidden` prop dynamically.

```tsx
import { createContext } from 'react';

export const TabBarContext = createContext<{
  setIsTabBarHidden: (hidden: boolean) => void;
}>({
  setIsTabBarHidden: () => {},
});
```

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useState } from 'react';

import { TabBarContext } from '@/context/TabBarContext';

export default function TabLayout() {
  const [isTabBarHidden, setIsTabBarHidden] = useState(false);
  return (
    <TabBarContext value={{ setIsTabBarHidden }}>
      <NativeTabs hidden={isTabBarHidden}>
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="settings">
          <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </TabBarContext>
  );
}
```

```tsx
import { useFocusEffect } from 'expo-router';
import { use } from 'react';

import { TabBarContext } from '@/context/TabBarContext';

export default function HomeScreen() {
  const { setIsTabBarHidden } = use(TabBarContext);

  useFocusEffect(() => {
    setIsTabBarHidden(true);
    return () => setIsTabBarHidden(false);
  });

  return (
    // Screen content
  );
}
```

### Hiding a tab conditionally

> Dynamically hiding tabs will remount the navigator and the state will be reset. Change the visibility of the tabs only before the navigator is mounted or when it is not visible to the user.

If you want to hide a tab based on a condition, you can either remove the trigger or pass the `hidden` prop to the `NativeTabs.Trigger` component.

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  const shouldHideMessagesTab = true; // Replace with your condition
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="messages" hidden={shouldHideMessagesTab} />
    </NativeTabs>
  );
}
```

> **Note**: Marking a tab as `hidden` means it cannot be navigated to in any way.

### Dismiss behavior

> Dismiss behavior is available on Android in SDK 55 and later.

By default, tapping a tab that is already active closes all screens in that tab's stack and returns to the root screen. You can disable this by setting the `disablePopToTop` prop on the `NativeTabs.Trigger` component.

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index" disablePopToTop>
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

### Scroll to top

> Scroll to top is available on Android in SDK 55 and later.

By default, tapping a tab that is already active and showing its root screen scrolls the content back to the top. You can disable this by setting the `disableScrollToTop` prop on the `NativeTabs.Trigger` component.

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index" disableScrollToTop>
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

### iOS 26 features

> To use features described in this section, compile your app with Xcode 26 or higher.

#### Separate search tab

To add a separate search tab, assign the `role` with its value set to `search` to the native tab you want to display separately.

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search" role="search">
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

#### Tabbar search input

To add a search field to the tab bar, wrap the screen in a Stack navigator and configure `headerSearchBarOptions`.

`src`

 `app`

  `_layout.tsx`

  `index.tsx`

  `search`

   `_layout.tsx`

   `index.tsx`

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search" role="search">
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

```tsx
import { Stack } from 'expo-router';

export default function SearchLayout() {
  return <Stack />;
}
```

```tsx
import { ScrollView } from 'react-native';
import { Stack } from 'expo-router';

export default function SearchIndex() {
  return (
    <>
      <Stack.Screen.Title>Search</Stack.Screen.Title>
      <Stack.SearchBar placement="automatic" placeholder="Search" onChangeText={() => {}} />
      <ScrollView>{/* Screen content */}</ScrollView>
    </>
  );
}
```

#### Tab bar minimize behavior

To implement the minimized behavior on the tab bar, you can use [`minimizeBehavior`](/versions/latest/sdk/router-native-tabs#minimizebehavior) prop on `NativeTabs`. In the example below, the tab bar is minimized when scrolling down.

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs minimizeBehavior="onScrollDown">
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="tab-1">
        <NativeTabs.Trigger.Label>Tab 1</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

#### Bottom accessory

> This feature is available in SDK 55 and later.

A bottom accessory is a floating view that appears above the tab bar, useful for displaying persistent controls like a mini music player. See Apple's [`UITabBarController` bottomAccessory documentation](https://developer.apple.com/documentation/uikit/uitabbarcontroller/bottomaccessory) for more details.

The bottom accessory can appear in two placements: `'regular'` (standard position above the tab bar) or `'inline'` (compact mode, inline with the tab bar). Use the `usePlacement` hook to adapt your UI based on the current placement.

> You must store state outside the accessory component using props, context, or external state management. Two instances of the bottom accessory component are rendered simultaneously (one for each placement) and state is **not** shared between them.

The following example demonstrates a mini player with state lifted to the parent component:

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

function MiniPlayer({ isPlaying, onToggle }) {
  const placement = NativeTabs.BottomAccessory.usePlacement();

  if (placement === 'inline') {
    // Compact UI for inline placement
    return (
      <Pressable onPress={onToggle} style={styles.inlinePlayer}>
        <Text>{isPlaying ? '⏸' : '▶'}</Text>
      </Pressable>
    );
  }

  // Full UI for regular placement
  return (
    <View style={styles.regularPlayer}>
      <Text>Now Playing: Song Title</Text>
      <Pressable onPress={onToggle}>
        <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
      </Pressable>
    </View>
  );
}

export default function TabLayout() {
  // State must be stored outside BottomAccessory
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <NativeTabs>
      <NativeTabs.BottomAccessory>
        <MiniPlayer isPlaying={isPlaying} onToggle={() => setIsPlaying(!isPlaying)} />
      </NativeTabs.BottomAccessory>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="library">
        <NativeTabs.Trigger.Label>Library</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

const styles = StyleSheet.create({
  inlinePlayer: {
    padding: 8,
  },
  regularPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
});
```

### Disabling keyboard avoidance on Android

By default, when the keyboard is displayed on Android, the native tabs automatically adjust to avoid being obscured. You can disable this behavior by changing the [`android.softwareKeyboardLayoutMode`](/versions/latest/config/app#softwarekeyboardlayoutmode) property to `pan` in your app config file:

```json
{
  "expo": {
    "android": {
      "softwareKeyboardLayoutMode": "pan"
    }
  }
}
```

### Safe area handling

> This feature is available in SDK 55 and later.

Native tabs automatically handle safe area insets, with platform-specific behavior:

- **Android**: Screen content is automatically wrapped in a `SafeAreaView` that applies the **bottom** inset for the tab bar. Other insets (top, left, right) must be handled manually.
- **iOS**: The first `ScrollView` nested inside a native tabs screen has [automatic content inset adjustment](https://reactnative.dev/docs/scrollview#contentinsetadjustmentbehavior-ios) enabled. This ensures content scrolls correctly behind the tab bar.

#### Disabling automatic content insets

If you need full control over safe area handling, you can disable automatic content inset adjustment using the `disableAutomaticContentInsets` prop on `NativeTabs.Trigger`:

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index" disableAutomaticContentInsets>
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

When `disableAutomaticContentInsets` is set to `true`, you must manage safe area insets manually. You can use `SafeAreaView` from `react-native-screens/experimental`:

```tsx
import { SafeAreaView } from 'react-native-screens/experimental';

export default function HomeScreen() {
  return (
    <SafeAreaView edges={{ bottom: true }} style={{ flex: 1 }}>
      {/* Screen content */}
    </SafeAreaView>
  );
}
```

### Lazy loading

All tab screens in native tabs render eagerly when the navigator mounts. This behavior cannot be changed because the native tab bar needs each screen to be available for transitions. If a tab contains expensive content that you want to defer until the user actually visits the tab, you can use one of the following approaches.

#### Render content only when focused

Use `useIsFocused` to conditionally render content. The content unmounts when the user navigates away and re-renders when they come back. This means any local state (scroll position, form inputs) is lost on every tab switch.

```tsx
import { useIsFocused } from 'expo-router';
import { View, ActivityIndicator, Text } from 'react-native';

export default function SearchScreen() {
  const isFocused = useIsFocused();

  if (!isFocused) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>Expensive content that only renders when this tab is focused</Text>
    </View>
  );
}
```

#### Load once on first focus

Use `useFocusEffect` with a state flag to load content the first time the tab is focused, then keep it mounted.

```tsx
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

export default function SearchScreen() {
  const [hasActivated, setHasActivated] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setHasActivated(true);
    }, [])
  );

  if (!hasActivated) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>Content that loads once and stays mounted</Text>
    </View>
  );
}
```

### Custom web layout

Native tabs render platform-specific tab bars on Android and iOS, but there is no standard system tab bar on web. On web, native tabs fall back to a basic implementation, loosely based on iPad design. You can use headless tabs from `expo-router/ui` to provide a custom web layout while keeping native tabs on mobile. There are two ways to set this up.

#### Platform-specific layout files

Use a **\_layout.web.tsx** file alongside your **\_layout.tsx**. The web file completely replaces the layout on web, so each platform can have an entirely different layout.

`app`

 `_layout.tsx — native tabs for Android and iOS`

 `_layout.web.tsx — headless tabs for web`

```tsx
import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { StyleSheet } from 'react-native';

export default function WebLayout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList style={styles.tabList}>
        <TabTrigger name="index" href="/" style={styles.tab}>
          Home
        </TabTrigger>
        <TabTrigger name="settings" href="/settings" style={styles.tab}>
          Settings
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabList: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    padding: 16,
  },
  tab: {
    padding: 8,
  },
});
```

#### Shared component with platform extensions

Extract the tab UI into a component with platform-specific extensions. A single **\_layout.tsx** handles shared logic (providers, wrappers, analytics) and imports the tab component, which resolves to the correct platform file.

`app`

 `_layout.tsx — shared layout, imports AppTabs`

`components`

 `app-tabs.tsx — native tabs for Android and iOS`

 `app-tabs.web.tsx — headless tabs for web`

```tsx
import AppTabs from '@/components/app-tabs';

export default function Layout() {
  return (
    <ThemeProvider>
      <AppTabs />
    </ThemeProvider>
  );
}
```

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function AppTabs() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Icon sf="gear" md="settings" />
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

```tsx
import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { StyleSheet } from 'react-native';

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot />
      <TabList style={styles.tabList}>
        <TabTrigger name="index" href="/" style={styles.tab}>
          Home
        </TabTrigger>
        <TabTrigger name="settings" href="/settings" style={styles.tab}>
          Settings
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabList: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    padding: 16,
  },
  tab: {
    padding: 8,
  },
});
```

[Custom tabs](/router/advanced/custom-tabs) — Learn more about customizing headless tabs from expo-router/ui.

[Platform-specific extensions](/router/advanced/platform-specific-modules) — Learn how platform-specific file extensions like .web.tsx work in Expo Router.

## Migrating native tabs from SDK 54 to 55

SDK 55 changes how you access tab bar item components. Instead of importing `Icon`, `Label`, and `Badge` separately, use the compound component API: `NativeTabs.Trigger.Icon`, `NativeTabs.Trigger.Label`, and `NativeTabs.Trigger.Badge`. For Android icons, the `md` prop is the new recommended way to use Material Symbols.

## Migrating from JavaScript tabs

Native tabs are not designed to be a drop-in replacement for [JavaScript tabs](/router/advanced/tabs). The native tabs are constrained to the native platform behavior, whereas the JavaScript tabs can be customized more freely. If you aren't interested in the native platform behavior, you can continue using the JavaScript tabs.

### Use `Trigger` instead of `Screen`

`NativeTabs` introduces the concept of a `Trigger` for adding routes to a layout. Unlike a `Screen`, which styles routes that are added automatically, the `Trigger` system gives you better control for hiding and removing tabs from the tab bar.

### Use React components instead of props

`NativeTabs` has a React-first API that opts to use components for defining UI in favor of props objects.

### Use Stacks inside tabs

The JavaScript `<Tabs />` have a mock stack header which is not present in the native tabs. Instead, you should nest a native `<Stack />` layout inside the native tabs to support both headers and pushing screens.

## Common problems

The tab bar is transparent on iOS 18 and earlier

On iOS 18 and earlier, the native tab bar becomes transparent when scrolling to the end of a scrollable content. This means that it will become transparent when you scroll to the end of a `ScrollView` or when you render a static `View`.

You can use the [`disableTransparentOnScrollEdge`](/versions/latest/sdk/router-native-tabs#disabletransparentonscrolledge) prop to disable this behavior.

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index" disableTransparentOnScrollEdge>
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

When you are using a `ScrollView` and the tab bar is transparent from the start, ensure that the `ScrollView` is a first child of the screen component. If you wrap it with another component make sure to set `collapsable` to `false` on the wrapper component.

```tsx
import { ScrollView, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View collapsable={false} style={{ flex: 1 }}>
      <ScrollView>{/* Screen content */}</ScrollView>
    </View>
  );
}
```

White background flashes when switching tabs on iOS 26

This happens because React Navigation's default theme uses a white background color. To fix this, wrap your app in React Navigation's `ThemeProvider` with the appropriate theme.

**For apps supporting both light and dark modes:**

```tsx
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="settings">
          <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </ThemeProvider>
  );
}
```

**For dark-mode-only apps:**

```tsx
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <NativeTabs>{/* tabs */}</NativeTabs>
    </ThemeProvider>
  );
}
```

**Alternative for specific background colors:**

If you need a specific background color that doesn't match the default themes, you can use the [`contentStyle`](/versions/latest/sdk/router-native-tabs#contentstyle) prop on `NativeTabs.Trigger`:

```tsx
<NativeTabs.Trigger name="index" contentStyle={{ backgroundColor: '#1a1a2e' }}>
```

Scroll to top does not work when tapping a tab

Tapping an active tab should scroll the content to the top, but this may not work if the `ScrollView` is not the first child of the screen component.

Ensure that the `ScrollView` is a direct first child of the screen component. If you wrap it with another component, make sure to set `collapsable` to `false` on the wrapper component.

```tsx
import { ScrollView, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View collapsable={false} style={{ flex: 1 }}>
      <ScrollView>{/* Screen content */}</ScrollView>
    </View>
  );
}
```

Liquid glass header buttons flicker in dark mode on iOS 26

Header buttons with liquid glass styling may flicker or flash their background when switching tabs in dark mode on iOS 26. This happens because React Navigation's default theme doesn't match the system dark mode, causing visual artifacts in the liquid glass rendering.

The fix is the same as for the white background flash issue: wrap your layout with `<ThemeProvider>` from `@react-navigation/native` using the appropriate theme.

**For apps supporting both light and dark modes:**

```tsx
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="settings">
          <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </ThemeProvider>
  );
}
```

**For dark-mode-only apps:**

```tsx
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <NativeTabs>{/* tabs */}</NativeTabs>
    </ThemeProvider>
  );
}
```

## Known limitations

A limit of 5 tabs on Android

On Android, there is a limitation of having a maximum of 5 tabs in the tab bar. This restriction comes from the platform's Material Tabs component.

Cannot measure the tab bar height

The tabs move around, sometimes being on top of the screen when rendering on iPad, sometimes on the side of the screen when running on Apple Vision Pro, and so on. We're working on a layout function to provide more detailed layout info in the future.

No support for nested native tabs

Native tabs cannot be nested inside other native tabs. You can still nest [JavaScript tabs](/router/advanced/tabs) inside native tabs.

Limited support for FlatList

[FlatList](https://reactnative.dev/docs/flatlist) integration with native tabs has limitations. Features like scroll-to-top and minimize-on-scroll aren't supported. Additionally, detecting scroll edges may fail, causing the tab bar to appear transparent. To fix this, use the [`disableTransparentOnScrollEdge`](/versions/latest/sdk/router-native-tabs#disabletransparentonscrolledge) prop.

```tsx
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs disableTransparentOnScrollEdge>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
```

No support for dynamically adding or removing tabs

Dynamically adding or removing tabs at runtime is not supported. Tabs should be defined statically in your layout file and remain consistent throughout the app's lifecycle. This aligns with platform guidelines from [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/tab-bars#Best-practices) which recommend keeping tab bar content stable to help users build a mental model of your app's navigation structure. If you dynamically add or remove tabs, the content will be remounted and the state will be lost.

***

# Drawer

# Drawer

Learn how to use the Drawer layout in Expo Router.

A navigation drawer is a common pattern in mobile apps, it allows users to swipe open a menu from a side of their screen to expose navigation options. This menu is also typically toggleable through a button in the app's header.

## Installation

To use [drawer navigator](https://reactnavigation.org/docs/drawer-based-navigation) you'll need to install some additional dependencies if you do not have them already. On Android and iOS, the drawer navigator requires `react-native-reanimated` and `react-native-worklets` to drive its animations. On web, this is handled by CSS animations.

```sh
npx expo install @react-navigation/drawer react-native-reanimated react-native-worklets
```

## Usage

Now you can use the `Drawer` layout to create a drawer navigator.

```tsx
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return <Drawer />;
}
```

To edit the drawer navigation menu labels, titles and screen options specific screens are required as follows:

```tsx
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'overview',
        }}
      />
      <Drawer.Screen
        name="user/[id]" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'overview',
        }}
      />
    </Drawer>
  );
}
```

***

# Authentication in Expo Router
