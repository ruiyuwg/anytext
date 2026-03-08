# Android lifecycle listeners

Learn about the mechanism that allows your library to hook into Android Activity and Application functions using Expo modules API.

To respond to certain Android system events relevant to an app, such as inbound links and configuration changes, it is necessary to override the corresponding lifecycle callbacks in **MainActivity.java** and/or **MainApplication.java**.

The React Native module API does not provide any mechanism to hook into these, and so setup instructions for React Native libraries often include steps to copy code into these files. To simplify and automate setup and maintenance, the Expo Modules API provides a mechanism that allows your library to hook into `Activity` or `Application` functions.

## Get started

First, you need to have created an Expo module or integrated the Expo modules API in the library using the React Native module API. [Learn more](/modules/overview#setup).

Inside your module, create a concrete class that implements the [`Package`](https://github.com/expo/expo/tree/main/packages/expo-modules-core/android/src/main/java/expo/modules/core/interfaces/Package.java) interface. For most cases, you only need to implement the `createReactActivityLifecycleListeners` or `createApplicationLifecycleListeners` methods.

## `Activity` lifecycle listeners

You can hook into the `Activity` lifecycle using `ReactActivityLifecycleListener`. `ReactActivityLifecycleListener` hooks into React Native's `ReactActivity` lifecycle using its `ReactActivityDelegate` and provides a similar experience to the Android `Activity` lifecycle.

The following `Activity` lifecycle callbacks are currently supported:

- `onCreate`
- `onResume`
- `onPause`
- `onDestroy`
- `onNewIntent`
- `onBackPressed`

To create a `ReactActivityLifecycleListener`, you should implement `createReactActivityLifecycleListeners` in your derived `Package` class. For example, `MyLibPackage`.

```kotlin
// android/src/main/java/expo/modules/mylib/MyLibPackage.kt
package expo.modules.mylib

import android.content.Context
import expo.modules.core.interfaces.Package
import expo.modules.core.interfaces.ReactActivityLifecycleListener

class MyLibPackage : Package {
  override fun createReactActivityLifecycleListeners(activityContext: Context): List<ReactActivityLifecycleListener> {
    return listOf(MyLibReactActivityLifecycleListener())
  }
}
```

`MyLibReactActivityLifecycleListener` is a `ReactActivityLifecycleListener` derived class that you can hook into the lifecycles. You can only override the methods you need.

```kotlin
// android/src/main/java/expo/modules/mylib/MyLibReactActivityLifecycleListener.kt
package expo.modules.mylib

import android.app.Activity
import android.os.Bundle
import expo.modules.core.interfaces.ReactActivityLifecycleListener

class MyLibReactActivityLifecycleListener : ReactActivityLifecycleListener {
  override fun onCreate(activity: Activity, savedInstanceState: Bundle?) {
    // Your setup code in `Activity.onCreate`.
    doSomeSetupInActivityOnCreate(activity)
  }
}
```

You can also override other lifecycle methods. The example below shows how to override multiple lifecycle methods in a single listener class. It is based on `expo-linking` module, which uses different lifecycle methods to handle deep links. You can implement only the methods you need for your use case:

```kotlin
// android/src/main/java/expo/modules/mylib/MyLibReactActivityLifecycleListener.kt
package expo.modules.mylib

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import expo.modules.core.interfaces.ReactActivityLifecycleListener

class MyLibReactActivityLifecycleListener : ReactActivityLifecycleListener {
  override fun onCreate(activity: Activity?, savedInstanceState: Bundle?) {
    // Called when the activity is first created
    // Initialize your setup here, for example handling deep links
    val deepLinkUrl = activity?.intent?.data
    if (deepLinkUrl != null) {
      handleDeepLink(deepLinkUrl.toString())
    }
  }

  override fun onResume(activity: Activity) {
    // Called when the activity comes to the foreground
    // For example, track when user returns to the app
    trackAppStateChange("active")
  }

  override fun onPause(activity: Activity) {
    // Called when the activity goes to the background
    // For example, pause ongoing operations such as track analytics
    trackAppStateChange("inactive")
  }

  override fun onDestroy(activity: Activity) {
    // Called when the activity is being destroyed
    // Clean up resources here
    cleanup()
  }

  override fun onNewIntent(intent: Intent?): Boolean {
    // Called when app receives a new intent while already running
    // For example, handle new deep links while app is open
    val newUrl = intent?.data
    if (newUrl != null) {
      handleDeepLink(newUrl.toString())
      return true
    }
    return false
  }

  override fun onBackPressed(): Boolean {
    // Called when user presses the back button
    // Return true to prevent default back behavior
    return handleCustomBackNavigation()
  }

  // Now, you can add private functions to handle
  // your logic for deep links, app state tracking, clean up, and so on.
}
```

## Lifecycle listeners to JavaScript event flow

Lifecycle listeners are singleton classes that exist independently of your Expo module instances. To communicate between a lifecycle listener and your module (for example, to send events to your app's JavaScript code), you need to observe events from your module and notify the lifecycle listener when events occur. A typical flow may consist of the following steps:

- **System integration**: Lifecycle listeners capture Android intents with URL data
- **Observer pattern**: Singleton lifecycle listeners communicate with module instances
- **Event bridging**: Module sends structured events to JavaScript
- **Memory management**: Weak references prevent memory leaks
- **Type safety and React integration**: TypeScript support with proper event types and a custom hook provides easy access to deep link events

Your custom module implementation might not need all of the above from the event flow. However, you can adapt this pattern for other system events like app state changes, configuration changes, or custom business logic that needs to bridge Android lifecycle events to your React Native app.

The following example demonstrates how to use lifecycle listeners to bridge Android system events to your React Native app. It is based on [`expo-linking`](https://github.com/expo/expo/tree/main/packages/expo-linking), which uses lifecycle listeners to create a deep link handler that captures URLs when an app is opened or receives new intents.

### Module registration

Start by creating a module class that registers your lifecycle listener:

```kotlin
// android/src/main/java/expo/modules/deeplinkhandler/DeepLinkHandlerPackage.kt
package expo.modules.deeplinkhandler

import android.content.Context
import expo.modules.core.interfaces.Package
import expo.modules.core.interfaces.ReactActivityLifecycleListener

class DeepLinkHandlerPackage : Package {
  override fun createReactActivityLifecycleListeners(activityContext: Context?): List<ReactActivityLifecycleListener> {
    return listOf(DeepLinkHandlerActivityLifecycleListener())
  }
}
```

### Activity lifecycle listener with observer notifications

Create a lifecycle listener that captures deep links and notifies the module observers:

```kotlin
// android/src/main/java/expo/modules/deeplinkhandler/DeepLinkHandlerActivityLifecycleListener.kt
package expo.modules.deeplinkhandler

import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import expo.modules.core.interfaces.ReactActivityLifecycleListener

class DeepLinkHandlerActivityLifecycleListener : ReactActivityLifecycleListener {
  override fun onCreate(activity: Activity?, savedInstanceState: Bundle?) {
    handleIntent(activity?.intent)
  }

  override fun onNewIntent(intent: Intent?): Boolean {
    handleIntent(intent)
    return true
  }

  private fun handleIntent(intent: Intent?) {
    val url = intent?.data
    if (url != null) {
      // Store the initial URL for later retrieval
      DeepLinkHandlerModule.initialUrl = url

      // Notify all observers about the new deep link
      DeepLinkHandlerModule.urlReceivedObservers.forEach { observer ->
        observer(url)
      }
    }
  }
}
```

### Expo module with event sending

Create a module that maintains observers and sends events to JavaScript:

```kotlin
// android/src/main/java/expo/modules/deeplinkhandler/DeepLinkHandlerModule.kt
package expo.modules.deeplinkhandler

import android.net.Uri
import androidx.core.os.bundleOf
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.lang.ref.WeakReference

class DeepLinkHandlerModule : Module() {
  companion object {
    var initialUrl: Uri? = null
    var urlReceivedObservers: MutableSet<((Uri) -> Unit)> = mutableSetOf()
  }

  private var urlReceivedObserver: ((Uri) -> Unit)? = null

  override fun definition() = ModuleDefinition {
    Name("DeepLinkHandler")

    Events("onUrlReceived")

    Function("getInitialUrl") {
      initialUrl?.toString()
    }

    OnStartObserving("onUrlReceived") {
      val weakModule = WeakReference(this@DeepLinkHandlerModule)
      val observer: (Uri) -> Unit = { uri ->
        weakModule.get()?.sendEvent(
          "onUrlReceived",
          bundleOf(
            "url" to uri.toString(),
            "scheme" to uri.scheme,
            "host" to uri.host,
            "path" to uri.path
          )
        )
      }
      urlReceivedObservers.add(observer)
      urlReceivedObserver = observer
    }

    OnStopObserving("onUrlReceived") {
      urlReceivedObservers.remove(urlReceivedObserver)
    }
  }
}
```

### TypeScript interface and React usage

Define a TypeScript interface for your module to bridge the Android lifecycle events to JavaScript:

```ts
import { requireNativeModule, NativeModule } from 'expo-modules-core';

export type DeepLinkEvent = {
  url: string;
  scheme?: string;
  host?: string;
  path?: string;
};

type DeepLinkHandlerModuleEvents = {
  onUrlReceived(event: DeepLinkEvent): void;
};

declare class DeepLinkHandlerNativeModule extends NativeModule<DeepLinkHandlerModuleEvents> {
  getInitialUrl(): string | null;
}

const DeepLinkHandler = requireNativeModule<DeepLinkHandlerNativeModule>('DeepLinkHandler');
export default DeepLinkHandler;
```

Create a React hook for an easy access to the deep link events:

```tsx
import { useEffect, useState } from 'react';
import DeepLinkHandler, { DeepLinkEvent } from './DeepLinkHandler';

export function useDeepLinkHandler(): {
  initialUrl: string | null;
  url: string | null;
  event: DeepLinkEvent | null;
} {
  const [initialUrl] = useState<string | null>(DeepLinkHandler.getInitialUrl());
  const [event, setEvent] = useState<DeepLinkEvent | null>(null);

  useEffect(() => {
    const subscription = DeepLinkHandler.addListener('onUrlReceived', event => {
      setEvent(event);
    });

    return () => subscription.remove();
  }, []);

  return {
    initialUrl,
    url: event?.url ?? initialUrl,
    event,
  };
}
```

Use it in your React component:

```tsx
import { Text, View, StyleSheet } from 'react-native';
import { useDeepLinkHandler } from './useDeepLinkHandler';

export function App() {
  const { initialUrl, url, event } = useDeepLinkHandler();

  return (
    <View style={styles.container}>
      <Text>Initial URL: {initialUrl || 'None'}</Text>
      <Text>Current URL: {url || 'None'}</Text>
      {event && (
        <View style={styles.textContainer}>
          <Text>Latest Deep Link:</Text>
          <Text>Scheme: {event.scheme}</Text>
          <Text>Host: {event.host}</Text>
          <Text>Path: {event.path}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 20,
  },
});
```

### Module configuration

Finally, configure your module in **expo-module.config.json** to connect the module to the lifecycle listener:

```json
{
  "platforms": ["android"],
  "android": {
    "modules": ["expo.modules.deeplinkhandler.DeepLinkHandlerModule"]
  }
}
```

## `Application` lifecycle listeners

You can hook into the `Application` lifecycle using `ApplicationLifecycleListener`.

The following `Application` lifecycle callbacks are currently supported:

- `onCreate`
- `onConfigurationChanged`

To create an `ApplicationLifecycleListener`, you should implement `createApplicationLifecycleListeners` in your derived `Package` class. For example, `MyLibPackage`.

```kotlin
// android/src/main/java/expo/modules/mylib/MyLibPackage.kt
package expo.modules.mylib

import android.content.Context
import expo.modules.core.interfaces.ApplicationLifecycleListener
import expo.modules.core.interfaces.Package

class MyLibPackage : Package {
  override fun createApplicationLifecycleListeners(context: Context): List<ApplicationLifecycleListener> {
    return listOf(MyLibApplicationLifecycleListener())
  }
}
```

`MyLibApplicationLifecycleListener` is an `ApplicationLifecycleListener` derived class that can hook into the `Application` lifecycle callbacks. You should only override the methods you need ([due to possible maintenance costs](/modules/android-lifecycle-listeners#interface-stability)).

```kotlin
// android/src/main/java/expo/modules/mylib/MyLibApplicationLifecycleListener.kt
package expo.modules.mylib

import android.app.Application
import expo.modules.core.interfaces.ApplicationLifecycleListener

class MyLibApplicationLifecycleListener : ApplicationLifecycleListener {
  override fun onCreate(application: Application) {
    // Your setup code in `Application.onCreate`.
    doSomeSetupInApplicationOnCreate(application)
  }
}
```

## Known issues

### Why there are no `onStart` and `onStop` Activity listeners

In the current implementation, we do not set up the hooks from `MainActivity` but from [`ReactActivityDelegate`](https://github.com/facebook/react-native/blob/400902093aa3ccfc05712a996c592a86f342253a/ReactAndroid/src/main/java/com/facebook/react/ReactActivityDelegate.java). There are some slight differences between `MainActivity` and `ReactActivityDelegate`. Since `ReactActivityDelegate` does not have `onStart` and `onStop`, we don't yet support them here.

### Interface stability

The listener interfaces may change from time to time between Expo SDK releases. Our strategy for backward compatibility is always to add new interfaces and add `@Deprecated` annotation for interfaces we plan to remove. Our interfaces are all based on Java 8 interface default method; you don't have to and should not implement all methods. Doing this will benefit your module's maintenance cost between Expo SDKs.

***

# iOS AppDelegate subscribers
