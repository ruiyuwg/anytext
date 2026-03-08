# Configuring lifecycle listeners

Learn about the mechanism that allows the Expo Modules API to hook into the lifecycle of your app.

Some Expo libraries need to handle system events such as deep links, push notifications, and configuration changes by implementing `Activity`/`Application` or `AppDelegate` lifecycle callbacks.

The Expo Modules API provides an easy way to manage such callbacks:

- Android `ApplicationLifecycleDispatcher` and `ReactActivityHandler` forward `Application` and `Activity` lifecycle events to registered listeners. Modules can provide `ReactActivityLifecycleListener` and `ApplicationLifecycleListener` implementations through a `Package` class to register callbacks.
- iOS `ExpoAppDelegate` forwards `AppDelegate` calls to registered subscribers. Modules can provide an `ExpoAppDelegateSubscriber` implementation to register callbacks.

Using these mechanisms allows modules to register behavior without requiring you to edit native entry points repeatedly.

## Configure your native project

### Android

To integrate `Application` lifecycle listeners on Android, forward the `onCreate()` and `onConfigurationChanged()` calls from your `Application` class to `ApplicationLifecycleDispatcher`:

### iOS

To integrate `AppDelegate` subscribers on iOS, forward the relevant calls to `ExpoAppDelegateSubscriberManager` in your existing `AppDelegate` implementation so that subscribers can respond to them:

Alternatively, if your `AppDelegate` doesn't already extend another class, you can simplify the setup by inheriting from `ExpoAppDelegate`, which handles the forwarding automatically:

> **Note:** Not all `UIApplicationDelegate` methods that could cause significant side effects are supported. See the Expo source (**ExpoAppDelegate.swift**) for the full list of forwarded methods if you need to rely on a specific delegate.

## Test your integration

To test if the callbacks are working correctly, install a module that relies on them. Install `expo-linking`, which uses lifecycle listeners to handle deep links:

```sh
npx expo install expo-linking
```

Add a listener for deep links in your code and observe the console when opening a deep link:

```jsx
import * as Linking from 'expo-linking';
import { useEffect } from 'react';

useEffect(() => {
  const listener = Linking.addEventListener('url', ({ url }) => {
    console.log('Received deep link:', url);
  });

  return listener.remove;
}, []);
```

Run the following command to open a deep link to your app:

```sh
npx uri-scheme open com.example.app://somepath/details --android
npx uri-scheme open myapp://somepath/details --ios
```

***

# Work with monorepos
