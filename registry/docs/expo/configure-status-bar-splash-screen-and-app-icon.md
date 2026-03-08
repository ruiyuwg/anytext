# Configure status bar, splash screen and app icon

In this tutorial, learn the basics of how to configure a status bar, app icon, and splash screen.

In this chapter, we'll address some app details before deploying our app to an app store, such as theming the status bar, customizing the app icon, and splash screen.

[Watch: Adding the finishing touches to your universal Expo app](https://www.youtube.com/watch?v=OgGCYdElcZo)

## Configure the status bar

[`expo-status-bar`](/versions/latest/sdk/status-bar) library comes pre-installed in every project created using `create-expo-app`. This library provides a `StatusBar` component to configure the app's status bar style.

Inside **app/\_layout.tsx**:

1. Import `StatusBar` from `expo-status-bar`.
2. Group the `StatusBar` and existing `Stack` components with [React's Fragment component](https://react.dev/reference/react/Fragment).

```tsx
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
```

Let's take a look at our app now on Android, and iOS:

## App icon

Inside the project, there's an **icon.png** file inside the **assets/images** directory. This is our app icon. It's a 1024px by 1024px image and looks as shown below:

Like the splash screen image, the `"icon"` property in the **app.json** file configures the app icon's path. By default, a new Expo project defines the correct path to `"./assets/images/icon.png"`. We don't have to change anything.

> Eventually, when you'll build your app for the app stores, [Expo Application Services (EAS)](/eas) will take this image and create optimized icon for every device.

You can see the icon in various places in Expo Go. Here is an example of the app icon displayed in the developer menu of Expo Go:

## Splash screen

A splash screen is visible before the app's content is loaded. It uses a smaller image, such as an app's icon, which is centered. It hides once the app's content is ready to be displayed.

The [`expo-splash-screen`](/versions/latest/sdk/splash-screen) plugin already comes pre-installed in every project created using `create-expo-app`. This library provides a config plugin to configure the splash screen.

In **app.json**, the `expo-splash-screen` plugin is already configured to use the app's icon as the splash screen image (provided in the [downloadable assets](/tutorial/create-your-first-app#download-assets)) with the following snippet so we don't have to change anything:

```json
{
  "plugins": [
    ... 
    [
      "expo-splash-screen",
      {
        "image": "./assets/images/splash-icon.png"
        ... 
      }
    ]
  ]
}
```

However, **to test the splash screen, we cannot use Expo Go or a [development build](/develop/development-builds/introduction)**. To test it, we need to create a preview or a production build of our app. We recommend going through the following resources to learn more about the splash screen configuration and how to test it:

- [Create a splash screen icon](/develop/user-interface/splash-screen-and-app-icon#splash-screen) guide to learn how splash screen icon is configured.
- To learn how to create a preview build, see [Internal distribution](/tutorial/eas/internal-distribution-builds) guide in EAS Tutorial, or to create production builds see guides for [Android](/tutorial/eas/android-production-build) and [iOS](/tutorial/eas/ios-production-build).

## Summary

Chapter 9: Configure status bar, splash screen and app icon

Well done! We built an app that runs on Android, iOS, and the web from the same codebase.

The next section of the tutorial will guide you toward resources to learn more about concepts we've covered here and others we have mentioned briefly.

[Next: Learning resources](/tutorial/follow-up)

***

# Learning resources
