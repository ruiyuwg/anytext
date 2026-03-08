# Modals

Learn how to use modals in Expo Router.

[Using Modals with Expo Router](https://www.youtube.com/watch?v=gNzuJVRmyDk) — Learn about the different ways to display content over the rest of your app.

Modals are a common user interface pattern in mobile apps. They are used to present content on top of the existing screen and is used for different purposes, such as displaying confirmation alerts or standalone forms. You can create modals in your app using the following methods:

- Use React Native's [`Modal`](https://reactnative.dev/docs/modal) component.
- Use Expo Router's special file-based syntax to create a modal screen within the app's navigation system.

Each approach has its specific use case. Understanding when to use each method is important for creating a positive user experience.

## React Native's Modal component

The `Modal` component is part of React Native's core API. Common use cases include:

- Standalone interactions, such as self-contained tasks that don't need to be part of the navigation system.
- Temporary alerts or confirmation dialogs that are ideal for quick interactions.

Below is an example of a custom `Modal` component that overlays the current screen on different platforms:

For most use cases, you can use the `Modal` component and customize it according to your app's user interface requirements. For details on how to use the `Modal` component and its props, see the [React Native documentation](https://reactnative.dev/docs/modal).

## Modal screen using Expo Router

A modal screen is a file created inside the **src/app** directory and is used as a route within the existing stack. It is used for complex interactions that need to be part of the navigation system, such as multi-step forms where you can link to a specific screen after the process completes.

Below is an example of how a modal screen works on different platforms:

### Usage

To implement a modal route, create a screen called **modal.tsx** inside the **src/app** directory. Here's an example file structure:

`src`

 `app`

  `_layout.tsx`

  `index.tsx`

  `modal.tsx`

The above file structure produces a layout where the `index` is the first route in the stack. Inside the root layout file (**src/app/\_layout.tsx**), you can add the `modal` route in the stack. To present it as a modal, set the `presentation` option to `modal` on the route.

```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
```

You can use the `Link` component to navigate to the modal screen from the **index.tsx** file.

```tsx
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Link href="/modal" style={styles.link}>
        Open modal
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    paddingTop: 20,
    fontSize: 20,
  },
});
```

The **modal.tsx** presents the contents of the modal.

```tsx
import { StyleSheet, Text, View } from 'react-native';

export default function Modal() {
  return (
    <View style={styles.container}>
      <Text>Modal screen</Text>
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

### Modal presentation and dismiss behavior

A modal loses its previous context when it is the current screen in the navigator and is presented as a standalone screen. Its presentation and dismissal behavior are different on each platform:

- On Android, the modal slides on top of the current screen. To dismiss it, use the back button to navigate back to the previous screen.
- On iOS, the modal slides from the bottom of the current screen. To dismiss it, swipe it down from the top.
- On web, the modal is presented as a separate route, and the dismiss behavior has to be provided manually using [`router.canGoBack()`](/router/basics/navigation). Here's an example of how to dismiss the modal:

```tsx
import { Link, router} from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Modal() {
  const isPresented = router.canGoBack();

  return (
    <View style={styles.container}>
      <Text>Modal screen</Text>
      {isPresented && <Link href="../">Dismiss modal</Link>}
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

### Change status bar appearance on iOS

By default on iOS, the modal has a dark background which hides the status bar. To change the status bar appearance, you can use the `Platform` API to check if the current platform is iOS and then use the [`StatusBar`](/versions/latest/sdk/status-bar) component to change the appearance inside the **modal.tsx** file.

```tsx
import { StyleSheet, Text, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Modal() {
  return (
    <View style={styles.container}>
      <Text>Modal screen</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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

### Handle deep-linked modals

While working with stack or nested stack navigators, modals need to be anchored to ensure correct navigation behavior. This is essential when deep-linking to modal routes. Without anchoring, the screen behind the modal will be wiped away, leaving no navigation context.

An *anchor* serves as the base for the modal. In complex apps, when you have nested stacks, the anchor must be defined for the nested stack, and its value becomes the initial route of the stack.

You can configure an anchor by exporting `unstable_settings` from your stack's layout file:

```tsx
export const unstable_settings = {
  anchor: 'index', // Anchor to the index route
};
```

In the above example, the `anchor: 'index'` tells the Expo Router that it should maintain the specified anchor route in the background when presenting a modal.

## Form sheet presentation

Form sheet presents a modal as a bottom sheet that app users can drag between different heights (called detents). This is useful for content that needs partial screen coverage with interactive sizing.

### Basic usage

To use form sheet, set the `presentation` option to `formSheet` on your modal screen:

```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'formSheet',
        }}
      />
    </Stack>
  );
}
```

### Configuring sheet detents

Detents define the heights where the sheet can rest. Use `sheetAllowedDetents` to configure them:

- **Numeric array** (`number[]`): Specify snap positions as fractions of the screen height between 0 and 1. For example, `[0.25, 0.5, 1]` creates three snap points at 25%, 50%, and full screen height. Values must be sorted in ascending order.

- **Fit to contents** (`'fitToContents'`): The sheet automatically sizes itself based on its content. When using this option, you must provide explicit content sizing since `flex: 1` is not supported because the sheet needs to know the content's actual size to determine its height.

> Android supports a maximum of 3 detents. iOS accepts any number of detents.

```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'formSheet',
          sheetAllowedDetents: [0.25, 0.5, 1],
          sheetInitialDetentIndex: 1,
        }}
      />
    </Stack>
  );
}
```

### Additional sheet options

| Option | Type | Description |
| --- | --- | --- |
| `sheetInitialDetentIndex` | `number | 'last'` | Index of the detent where the sheet opens (default: `0`). |
| `sheetGrabberVisible` | `boolean` | Shows a grabber handle at the top of the sheet (iOS only). |
| `sheetCornerRadius` | `number` | Corner radius of the sheet in pixels. |
| `sheetLargestUndimmedDetentIndex` | `number | 'none' | 'last'` | Largest detent index that keeps the background undimmed. |

```tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'formSheet',
          sheetAllowedDetents: [0.25, 0.5, 1],
          sheetInitialDetentIndex: 0,
          sheetGrabberVisible: true,
          sheetCornerRadius: 24,
          sheetLargestUndimmedDetentIndex: 1,
        }}
      />
    </Stack>
  );
}
```

### Sheet footer (Android)

> `unstable_sheetFooter` is an Android-only experimental feature that may change in future releases.

You can add a footer to the sheet that stays visible at all detent positions using a React component:

```tsx
import { Stack } from 'expo-router';
import { View, Button } from 'react-native';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'formSheet',
          sheetAllowedDetents: [0.5, 1],
          unstable_sheetFooter: () => (
            <View style={{ padding: 16, backgroundColor: 'white' }}>
              <Button title="Confirm" onPress={() => {}} />
            </View>
          ),
        }}
      />
    </Stack>
  );
}
```

### Using `flex: 1` with custom detents

> In SDK 55 and later, `flex: 1` works correctly on iOS when using custom numeric detents. This does not work with `fitToContents` where you must provide explicit content sizing.

When using numeric detents, your modal content can use `flex: 1` to fill the available space within the sheet:

```tsx
import { StyleSheet, Text, View } from 'react-native';

export default function Modal() {
  return (
    <View style={styles.container}>
      <Text>Modal content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
```

## Additional information

### Presentation options

There are different options to present a modal screen using the `presentation` option on Android and iOS.

| Option | Description |
| --- | --- |
| `card` | The new screen will be pushed onto a stack. The default animation on Android will vary depending on the OS version and theme. On iOS, it will slide from the side. |
| `modal` | The new screen will be presented modally, allowing for a nested stack to be rendered inside the screen. |
| `transparentModal` | The new screen will be presented modally, with the previous screen remaining visible. This allows the content below to still be seen if the screen has a translucent background. |
| `containedModal` | On Android, fallbacks to `modal`. On iOS, uses [`UIModalPresentationCurrentContext`](https://developer.apple.com/documentation/uikit/uimodalpresentationstyle/uimodalpresentationcurrentcontext) modal style. |
| `containedTransparentModal` | On Android, fallbacks to `transparentModal`. On iOS, uses [`UIModalPresentationOverCurrentContext`](https://developer.apple.com/documentation/uikit/uimodalpresentationstyle/uimodalpresentationovercurrentcontext) modal style. |
| `fullScreenModal` | On Android, fallbacks to `modal`. On iOS, uses [`UIModalPresentationFullScreen`](https://developer.apple.com/documentation/uikit/uimodalpresentationstyle/uimodalpresentationfullscreen) modal style. |
| `formSheet` | Presents a bottom sheet with configurable detents. See [FormSheet presentation](/router/advanced/modals#form-sheet-presentation) for details. |

***

# Web modals
