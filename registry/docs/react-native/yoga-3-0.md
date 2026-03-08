### Yoga 3.0[​](#yoga-30 "Direct link to Yoga 3.0")

#### New Layout Behaviors[​](#new-layout-behaviors "Direct link to New Layout Behaviors")

React Native 0.74 includes [Yoga 3.0](https://yogalayout.dev/blog/announcing-yoga-3.0), the newest version of our layout engine. Yoga 3.0 improves layout by making styling more predictable, and supports rendering components written for the web.

React Native continues to intentionally preserve some incorrect layout behaviors, where fixing them was found to effect a significant number of real-world components. Layout conformance will be able to be configured more granularly in future versions of React Native.

warning

React Native [previously flipped](https://yogalayout.dev/blog/announcing-yoga-3.0#correct-handling-of-logical-edges-in-row-reverse-containers) `left`/`right` (and `start`/`end`) edges when dealing with `margin`, `padding`, or `border`, set on a `row-reverse` container. Now, behavior of these properties lines up with web. Code which previously relied on edges being inverted may need to be updated to continue rendering correctly.

| Style                                                                                                                                                                                                                                                                                                                                                                                                         | Before                                                                                                                                                                                                                     | After                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`\`\`
\<View
style={{
flexDirection: 'row',
backgroundColor: 'red',
margin: 10,
width: 200,
height: 100,
}}>
\<View
style={{
flexDirection: 'row-reverse',
backgroundColor: 'blue',
flex: 1,
marginLeft: 50,
}}>
\<View
style={{
backgroundColor: 'green',
height: '50%',
flex: 1,
marginLeft: 50,
}}
/>

````| ![Previous layout](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkAgMAAAC+6JeYAAAACVBMVEX/AAAAgAIAAP/8wXIfAAAANklEQVR42u3LoQ0AIAwAsJ2I4T8MhiuxM8v0ktY3XnJ3YUWmKIqiKIqiTCy9oyiKoiiKoowuHxexOPfpM7ojAAAAAElFTkSuQmCC) | ![New layout](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkAgMAAAC+6JeYAAAACVBMVEX/AAAAgAIAAP/8wXIfAAAAMklEQVR42u3LoQ0AMAgAsOn9x5NcicUQNEnr+7qfTUwURVEURVGU+2WnKIqiKIqinCsFTv3+UKPaRfkAAAAASUVORK5CYII=) |

#### Support for `align-content: 'space-evenly'`[​](#support-for-align-content-space-evenly "Direct link to support-for-align-content-space-evenly")

Yoga 3.0 brings support for [`alignContent: 'space-evenly'`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content#space-evenly). `space-evenly` distributes the lines in a multi-line flex container using evenly spaced gaps, placed between line and container edges.

![Visual reference for alignContent behaviors](/blog/assets/0.74-align-content.png)

Source: [World Wide Web Consortium](https://www.w3.org/TR/css-align-3/#distribution-values)

#### Support for `position: 'static'`[​](#support-for-position-static "Direct link to support-for-position-static")

info

`position: 'static'` is supported only in the New Architecture.

Elements marked as [`position: 'static'`](https://developer.mozilla.org/en-US/docs/Web/CSS/position#static) may not be offset, and are not considered when determining the [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) of an absolutely positioned element. This allows positioning an element relative to an ancestor which is not its direct parent.

|                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```
<View
  style={{
    backgroundColor: 'blue',
    width: 200,
    height: 200,
    flexDirection: 'row-reverse',
  }}>
  <View
    style={{
      backgroundColor: 'red',
      width: 100,
      height: 100,
      position: 'static',
    }}>
    <View
      style={{
        backgroundColor: 'green',
        width: 25,
        height: '25%',
        left: 25,
        top: 25,
        position: 'absolute',
      }}
    />
  </View>
</View>
``` | ![Static Example](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGOCAMAAACOvaUVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAABkKADAAQAAAABAAABjgAAAAA32yssAAAACXBIWXMAAAsTAAALEwEAmpwYAAACymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yODg8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI4NjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoqdD14AAACTFBMVEUAAP8Afz//ACgAgSoAiQAAfEIAfEH/ACAAiAAAe0L3ADLZAIAAgCb2ADIAhwDWAIQAgCH/ABcAfyUAhgDVAIMAgBsAfyAAgBoAfx8AhQD/ABAAgBkAfx4AgBgAfScAgBcAfSYAgBb/AAwAfxr/AAsAhAAAfCkAgBQAgBMAfCf+AAsAgBIAfCbOAIgAfxYAfCUAgBAAgwAAfxQAgA4AfxMAgA0AfxIAgAwAfxEAgAsAfxAAggAAgAr/AAAAgAkAbWn+AAAAgQAAgAUAanUAgAMAgAIAa24AaH0AgAEAZoYAgAD7AAAAZoUAbGYAam8Aam4AZYcAam0AZYYAZYUAZ3oAaW8AdDMAb0oAczUAczQAczMAZ28AcjUAdxoAcDcAWKkAVq4AdQ0AVLEAU7IAU7EAWosAVJ6sAImrAIerAIYAUaMAT6iuAHQAT6MATqgAS7AATKoATKgARcKMAKwAPMNnANdlANlhANkAMtJYAOAAMsJXAN8AMsEAMsBXANwAMr4AMcIAMcEAKekAMMEAKOoAL8MAJ+sAJuwAJusAJesAJOwAI+wAJ9QAIutEAOcAH/AAHu48AOgAHPAAHeUAFfMlAPokAPsjAPoAEfYADP4YAPgWAP0VAP0ACv4SAP8TAPwRAP8ACfsQAP8ACfkACP4QAP0ACfgACPwACPsAB/4ABv8ABf8ABf4ABf0IAP8ABP8HAP4AA/8GAP4AA/4AA/0EAP8AAv8AAv4AAv0CAP8AAf8CAP4AAf4BAP8AAP4AAP0AAPgAAPcAAPMAAPJvRcS8AAAD2klEQVR42u3dT2scZQDH8d8zM7ubuI0WE6uCClLx6sFXoEjFV+Hb8nVYECxGTx5EPHoQxINQFaSlrUk2+2dmPLRCwcuMMLIJn88hgTyHwO/LPLu3CQAAAAAAAAAAAAAAAAAAAABcTyWjfbVLnzFK85Ghh2oy2vmmzyhlaecpg8wXu5H/obHzdFfWvaYupc8Ipe/6Dyw90RPyxZ3Pfm7XTdoMVff1wRu5u7hj7CmCbHP5eN33bdtkoO7w4rV1LmpbTxHk68fZ/Prkx9s5y2APH366ytmRrSf6UC/Ln179vZ7vMkh1cP+976vK0NMFSTdfrl5+YViQrpr/Oa9LMfR0QfrdYU5emWWo2WYnyJRBkrZq2lmXIdrMOiOPUeW/OMtQvlyNDjKp2sf5SAYTBEEEQRBBEEQQBBEEQRBEEAQRBEEEQRBBEARBBEEQQRBEEAQRBEEQRBAEEQRBBEEQQRAEQQRBEEEQRBAEEQRBEEQQBBEEQQRBEEEQBEEEQRBBEEQQBBEEQRBEEAQRBEEEQRBBEARBBEEQQRBEEAQRBEEQRBAEuf5BasNNpclYZZEsK4/W3gRJ384ebG6sM0C1axbbNGaeMki/Ot/99eSgyyBVs0tr5kmDbN787u2ziww0P/qh3W6y29p6kiBVDm+fN7c2WWWYZdsvjo+ynNl6iiAfJifvrt4pZddkkG1pZ/MXb+b4E1tPdGWdLLbreUqfJCl59rtP8q+/lPSlz2ZxYx49uJpKRru77kpG6Kul5wMAAAAAAAAAAAAAAAAAAACA/13JNXF6uU2Vq6/JNdE9ukjxgO2L01NX1j758uPP/zh7tHVl7YvzPFjdX29LEWQ/nOXyt3tvfZOkTvvPj7ZOm6eeHdQZfdDWzx3U7XMHyYiD9unpgIPrEWSXrvvl5vtxZe2NUpp8+9LxhSB7oUqfWWav32q9HWGfbFqvq9grnfeHIIggCCIIgiCIIAgiCIIIgiCCIAiCCIIggiCIIAgiCIIgiCAIIgiCCIIggiAIggiCIIIgiCAIIgiCIIggCCIIggiCIIIgCIIIgiCCIIggCCIIgiCIIAgiCIIIgiCCIAiCCIIggiCIIAgiCIIIgiAIIgiCCIIggiCIIAiCIIIgiCAIIgiCCIIgCCIIggiCIIIgiCAIgiCCIIggCCIIggiCIAgiCIIIgiCCIIggCIIggiCIIAgiCIIIgiAIIgiCCIIggiCIIAiCIIIgiCAIIgiCCIIgCCIIggiCIIIgiCAIIgiCIIggCCIIggiCIIIgCIIIgiCCIIggCCIIgiCIIAgiCIIIgiCCIAiCCIIgV9nfQaK7IvVKYtEAAAAASUVORK5CYII=) |

Notice how the green `<View>` declares `left` and `top` and it is positioned relative to the blue `<View>`, not its parent.

React Native continues to default to `position: 'relative'` when no `position` is set.

### New Architecture: Bridgeless by Default[​](#new-architecture-bridgeless-by-default "Direct link to New Architecture: Bridgeless by Default")

In this release, we are making Bridgeless Mode the default when the New Architecture is enabled. You can learn more about our switch to Bridgeless as the default in [this post](https://github.com/reactwg/react-native-new-architecture/discussions/174). To make the transition smoother we enhanced the interop layers to cover Bridgeless and worked with several libraries to make sure they will work in Bridgeless from day one.

Bridgeless is not the only interop layer we worked on: we improved the New Renderer Interop layers too. The most exciting bit is that it is now enabled by default: you don't need to specify the components that have to go through it! You can read more about them [here](https://github.com/reactwg/react-native-new-architecture/discussions/175).

Finally, if you want to learn more about the New Architecture, you can find documentation in the [react-native-new-architecture](https://github.com/reactwg/react-native-new-architecture/tree/main/docs) repo. When the New Architecture becomes the default, this information will be incorporated into [reactnative.dev](https://reactnative.dev).

### New Architecture: Batched `onLayout` updates[​](#new-architecture-batched-onlayout-updates "Direct link to new-architecture-batched-onlayout-updates")

State updates in `onLayout` callbacks are now batched. Previously, each state update in the `onLayout` event would result in a new render commit.

````

function MyComponent(props) {
const \[state1, setState1] = useState(false);
const \[state2, setState2] = useState(false);

return ( <View>
\<View
onLayout={() => {
setState1(true);
}}>
\<View
onLayout={() => {
// When this event is executed, state1's new value is no longer observable here.
setState2(true);
}}> </View> </View>
);
}

```

In 0.74, `setState1` and `setState2` updates are batched together. This change is [expected behavior in React](https://react.dev/learn/queueing-a-series-of-state-updates#react-batches-state-updates) and allows for less re-renders.

danger

This change **may break code** that has relied on un-batched state updates. You'll need to refactor this code to use [updater functions](https://react.dev/learn/queueing-a-series-of-state-updates#updating-the-same-state-multiple-times-before-the-next-render) or equivalent.

### Yarn 3 for New Projects[​](#yarn-3-for-new-projects "Direct link to Yarn 3 for New Projects")

[Yarn 3](https://yarnpkg.com/blog/release/3.0) is now the default JavaScript package manager for new projects initialized with React Native Community CLI.

Yarn 3.x will be used with `nodeLinker: node-modules`, a mode providing compatibility with React Native libraries. This replaces Yarn Classic (1.x, deprecated) as the previous default. To upgrade Yarn version inside your existing app you can follow this [guide](https://yarnpkg.com/migration/guide).

```

$ yarn --help
━━━ Yarn Package Manager - 3.6.4 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

$ yarn <command>

```

The Community CLI also supports initializing projects with other package managers via the `--pm` flag ([read more](https://github.com/react-native-community/cli/blob/main/docs/init.md)).

## Breaking Changes[​](#breaking-changes-1 "Direct link to Breaking Changes")

### Android Minimum SDK Bump (Android 6.0)[​](#android-minimum-sdk-bump-android-60 "Direct link to Android Minimum SDK Bump (Android 6.0)")

React Native 0.74 has a minimum Android SDK version requirement of 23 (Android 6.0). Previously, this was Android 5.0 (API 21). See our context for this change [here](https://github.com/react-native-community/discussions-and-proposals/discussions/740).

#### Bonus: Android app size reduction[​](#bonus-android-app-size-reduction "Direct link to Bonus: Android app size reduction")

The minimum SDK bump, together with several improvements at our native build, allowed us to greatly reduce the app size on user devices.

For example a newly created app with React Native 0.74 occupies \~13% less space on user device, resulting in \~4MB saved on device.

![Side-by-side comparison of a new React Native app in the Android system storage view](/assets/images/0.74-android-app-size-0dc90c5494d274e5c4691287866bf518.jpg)

### Removal of Deprecated `PropTypes`[​](#removal-of-deprecated-proptypes "Direct link to removal-of-deprecated-proptypes")

Before 0.74, React Native continued to ship with `PropTypes`, an API that has been deprecated since React 15.5 in 2017! We are now removing all built-in `PropTypes` from React Native, reducing app size (26.4kB in a minified bundle) and memory overhead.

The following `PropTypes` properties are removed: `Image.propTypes`, `Text.propTypes`, `TextInput.propTypes`, `ColorPropType`, `EdgeInsetsPropType`, `PointPropType`, `ViewPropTypes` (see [commit](https://github.com/facebook/react-native/commit/228cb80af9ded20107f3c7a30ffe00e24471bfeb)).

If your app or library relies on `PropTypes`, we highly recommend migrating to a type system like TypeScript.

### API Changes to PushNotificationIOS (Deprecated)[​](#api-changes-to-pushnotificationios-deprecated "Direct link to API Changes to PushNotificationIOS (Deprecated)")

In React Native 0.74, we are making steps to remove the deprecated [PushNotificationIOS](https://reactnative.dev/docs/pushnotificationios) library. The changes in this release are focused on removing references to older iOS APIs. PushNotificationIOS has been migrated onto Apple’s [User Notifications](https://developer.apple.com/documentation/usernotifications?language=objc) framework and exposes new APIs for scheduling and handling notifications.

In the next release (0.75), we are planning to **remove this library**, relocating it out of React Native core and into the community package, [@react-native-community/push-notification-ios](https://github.com/react-native-push-notification/ios). If you are still relying on PushNotificationIOS, you’ll need to migrate over before the next release.

#### API Changes[​](#api-changes "Direct link to API Changes")

The `didRegisterUserNotificationSettings:` callback on `RCTPushNotificationManager` was a no-op and has been deleted.

The following callbacks on `RCTPushNotificationManager` have been deprecated and will be removed in 0.75:

```

- (void)didReceiveLocalNotification:(UILocalNotification \*)notification;
- (void)didReceiveRemoteNotification:(NSDictionary \*)notification;

```

In order to retrieve the notification which launched the app using `getInitialNotification()`, you’ll now need to explicitly set the `initialNotification` on `RCTPushNotificationManager`:

```

\[RCTPushNotificationManager setInitialNotification:response.notification];

```

On the JS side, properties on `Notification` have changed. `alertAction` and `repeatInterval` are now deprecated and will be removed in 0.75:

```

type Notification = {
...
// NEW: Seconds from now to display the notification.
fireIntervalSeconds?: ?number,

// CHANGED: Used only for scheduling notifications. Will be null when
// retrieving notifications using `getScheduledLocalNotifications` or
// `getDeliveredNotifications`.
soundName?: ?string,

// DEPRECATED: This was used for iOS's legacy UILocalNotification.
alertAction?: ?string,

// DEPRECATED: Use `fireDate` or `fireIntervalSeconds` instead.
repeatInterval?: ?string,
};

```

Finally, the `handler` parameter on `PushNotificationIOS.removeEventListener` is unused and has been removed.

**💡 How to Migrate**

#### iOS[​](#ios "Direct link to iOS")

Your `AppDelegate` will need to implement `UNUserNotificationCenterDelegate`. This should be done on app startup in `application:willFinishLaunchingWithOptions:` or `application:didFinishLaunchingWithOptions:` (see [Apple Docs](https://developer.apple.com/documentation/usernotifications/unusernotificationcenterdelegate?language=objc) for more details).

```

- (BOOL)application:(UIApplication \*)application didFinishLaunchingWithOptions:(NSDictionary \*)launchOptions
  {
  ...
  UNUserNotificationCenter \*center = \[UNUserNotificationCenter currentNotificationCenter];
  center.delegate = self;

  return YES;
  }

```

Implement `userNotificationCenter:willPresentNotification:withCompletionHandler:`, which is called when a notification arrives and the app is in the *foreground*. Use the `completionHandler` to determine if the notification will be shown to the user and notify `RCTPushNotificationManager` accordingly:

```

- (void)userNotificationCenter:(UNUserNotificationCenter \*)center
  willPresentNotification:(UNNotification \*)notification
  withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler
  {
  // This will trigger 'notification' and 'localNotification' events on PushNotificationIOS
  \[RCTPushNotificationManager didReceiveNotification:notification];
  // Decide if and how the notification will be shown to the user
  completionHandler(UNNotificationPresentationOptionNone);
  }

```

To handle when a notification is tapped, implement `userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:`. Note that if you set foreground notifications to be shown in `userNotificationCenter:willPresentNotification:withCompletionHandler:`, you should only notify `RCTPushNotificationManager` in one of these callbacks.

If the tapped notification resulted in app launch, call `setInitialNotification:`. If the notification was not previously handled by `userNotificationCenter:willPresentNotification:withCompletionHandler:`, call `didReceiveNotification:` as well:

```

- (void)  userNotificationCenter:(UNUserNotificationCenter \*)center
  didReceiveNotificationResponse:(UNNotificationResponse \*)response
  withCompletionHandler:(void (^)(void))completionHandler
  {
  // This condition passes if the notification was tapped to launch the app
  if (\[response.actionIdentifier isEqualToString:UNNotificationDefaultActionIdentifier]) {
  // Allow the notification to be retrieved on the JS side using getInitialNotification()
  \[RCTPushNotificationManager setInitialNotification:response.notification];
  }
  // This will trigger 'notification' and 'localNotification' events on PushNotificationIOS
  \[RCTPushNotificationManager didReceiveNotification:response.notification];
  completionHandler();
  }

```

Finally, delete the following methods and adapt the logic into the callbacks above which will be called instead:

1. `application:didReceiveLocalNotification:` \[deprecated]
2. `application:didReceiveRemoteNotification:` \[deprecated]
3. `application:didReceiveRemoteNotification:fetchCompletionHandler:` \[not deprecated, but is superseded by the `UNUserNotificationCenterDelegate` methods]

Delete any usages of `application:didRegisterUserNotificationSettings:` and `RCTPushNotificationManager`’s corresponding `didRegisterUserNotificationSettings:` as well.

**Example:** See the RNTester `AppDelegate.mm`.

#### JS[​](#js "Direct link to JS")

1. Remove any references to `alertAction`.
2. Remove the `handler` argument on any calls to `removeEventListener`.
3. Replace any usages of `repeatInterval` by firing multiple notifications using `fireDate` or `fireIntervalSeconds` instead.
4. Note that `soundName` will be null when it is accessed on a `Notification` returned from `getScheduledLocalNotifications()` and `getDeliveredNotifications()`.

### Removal of Flipper React Native Plugin[​](#removal-of-flipper-react-native-plugin "Direct link to Removal of Flipper React Native Plugin")

Use of [Flipper](https://fbflipper.com/) for inspecting React Native layouts, network requests, and [other React Native plugin features](https://fbflipper.com/docs/features/react-native/), is now unsupported. In 0.74, we have removed the native Flipper libraries and setup code from new React Native projects. This means fewer dependencies and quicker local setup (see [original RFC](https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0641-decoupling-flipper-from-react-native-core.md)).

The diff for removing Flipper in your app can be seen in the [Upgrade Helper](https://react-native-community.github.io/upgrade-helper/). If you want to preserve Flipper in an existing app, ignore the relevant diff lines.

**💡 To re-integrate Flipper**

Flipper can still be used as a standalone tool for debugging an Android or iOS app, and can be manually integrated by following the Flipper docs ([Android guide](https://fbflipper.com/docs/getting-started/android-native/), [iOS guide](https://fbflipper.com/docs/getting-started/ios-native/)).

We recommend that teams invest in switching to native debugging tooling in Android Studio and Xcode.

tip

#### Replacing Flipper[​](#replacing-flipper "Direct link to Replacing Flipper")

There are a number of dedicated debugging tools which replace Flipper features. For more information, we recommend reading the excellent [*Why you don't need Flipper in your React Native app*](https://shift.infinite.red/why-you-dont-need-flipper-in-your-react-native-app-and-how-to-get-by-without-it-3af461955109) article by Jamon Holmgren.

#### JavaScript debugging[​](#javascript-debugging "Direct link to JavaScript debugging")

Using the [Hermes Debugger](https://reactnative.dev/docs/debugging?js-debugger=hermes#opening-the-debugger) remains our recommended debugging option for 0.74. You can also try the [Experimental New Debugger](https://reactnative.dev/docs/debugging?js-debugger=new-debugger#opening-the-debugger), which is also the default in Expo. This continues to be an early preview — known issues and updates can be followed [here](https://github.com/react-native-community/discussions-and-proposals/discussions/733).

### Other Breaking Changes[​](#other-breaking-changes "Direct link to Other Breaking Changes")

**General**

* Make `start`/`end` in styles always refer to writing direction ([#42251](https://github.com/facebook/react-native/pull/42251)).

**Android**

* Remove of `JSIModule*` from `FabricUIManagerProvider` ([#42059](https://github.com/facebook/react-native/pull/42059)).
  
  * This API was unused in open source — use [TurboModules](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/turbo-modules.md) instead.
* Deprecate `UIManagerModule.showPopupMenu` and `UIManagerModule.dismissPopupMenu` ([#42441](https://github.com/facebook/react-native/pull/42441))
  
  * This API has been moved to the [`@react-native/popup-menu-android`](https://www.npmjs.com/package/@react-native/popup-menu-android) npm package and will be removed in 0.75.

**iOS**

* Delete `configFilename` and `configKey` arguments from iOS codegen CLI ([#41533](https://github.com/facebook/react-native/pull/41533)).

* Change how [`bundleURL`](https://github.com/facebook/react-native/blob/0.74-stable/packages/react-native/template/ios/HelloWorld/AppDelegate.mm#L22-L29) is handled ([#43994](https://github.com/facebook/react-native/pull/43994)).

  

  * Before, `bundleURL` was set when React Native was started in an instance variable and it was not possible to update it.
  * Now, [`bundleUrl` is a function](https://github.com/facebook/react-native/blob/0.74-stable/packages/react-native/template/ios/HelloWorld/AppDelegate.mm#L22-L29) which is re-evaluated when needed, enabling the use of a different URL across refreshes.
  * This change will affect your app only if you were changing the `bundleURL` variable after the app is started. In this case, move the logic that updates the variable to the [`bundleURL` function](https://github.com/facebook/react-native/blob/0.74-stable/packages/react-native/template/ios/HelloWorld/AppDelegate.mm#L22-L29) in `AppDelegate`.

Please see the [full changelog](https://github.com/facebook/react-native/blob/main/CHANGELOG.md) for a complete list of breaking changes.

## Known Issues[​](#known-issues "Direct link to Known Issues")

**iOS**

* Edge case when using multiple windows: When the main window is inactive and the system tries to present a dialog, the dialog is not presented in the right position on the screen. A fix is incoming in [#44167](https://github.com/facebook/react-native/pull/44167) and will ship in 0.74.1.

## Acknowledgements[​](#acknowledgements "Direct link to Acknowledgements")

React Native 0.74 contains over [1673 commits](https://github.com/facebook/react-native/compare/v0.73.6...v0.74.0) from 57 contributors. Thanks for all your hard work!

Thanks to all the additional authors that worked on documenting features in this release post:

* [Nick Gerleman](https://github.com/NickGerleman) for *Yoga 3.0*
* [Joe Vilches](https://github.com/joevilches) for *Yoga 3.0*
* [Riccardo Cipolleschi](https://twitter.com/CipolleschiR) for *New Architecture: Bridgeless by Default*
* [Samuel Susla](https://twitter.com/SamuelSusla) for *New Architecture: Batched `onLayout` updates*
* [Tim Yung](https://twitter.com/yungsters) for *Removal of Deprecated `PropTypes`*
* [Ingrid Wang](https://github.com/ingridwang) for *API Changes to PushNotificationIOS (Deprecated)*

## Upgrade to 0.74[​](#upgrade-to-074 "Direct link to Upgrade to 0.74")

Please use the [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) to view code changes between React Native versions for existing projects, in addition to the [Upgrading docs](/docs/upgrading.md).

To create a new project:

```

npx react-native@latest init MyProject

```

If you use Expo, React Native 0.74 will be supported in Expo SDK 51.

info

0.74 is now the latest stable version of React Native and **0.71.x moves to unsupported**. For more information see [React Native's support policy](https://github.com/reactwg/react-native-releases#releases-support-policy). We aim to publish a final end-of-life update of 0.71 at the beginning of May.

**Tags:**

* [announcement](/blog/tags/announcement)
* [release](/blog/tags/release)
* [yoga](/blog/tags/yoga)


---

# Use a framework to build React Native apps

June 25, 2024 ·



5 min read

![Nicola Corti](https://github.com/cortinico.png)

Nicola Corti

Software Engineer @ Meta

[](https://x.com/cortinico "X")[](https://github.com/cortinico "GitHub")[](https://bsky.app/profile/cortini.co "Bluesky")

At [React Conf](https://www.youtube.com/live/0ckOUBiuxVY?si=pU4qP4eB5iWfY0IG\&t=2320), we updated our guidance on the best tool to get started building React Native apps: a **React Native framework** - a toolbox with all the necessary APIs to let you build production-ready apps.

Using React Native frameworks, such as Expo, is now the **recommended** approach to create new apps.

In this blogpost we want to walk you through what they are in detail and what they mean for you as a React Native developer starting a new project.

## What is a React Native framework?[​](#what-is-a-react-native-framework "Direct link to What is a React Native framework?")

If you’ve been building production apps, you probably know that there is a set of common problems you will need to solve sooner or later.

When building any application on either web or native, you probably want your users to navigate through different screens, fetch data, and store the state of your user. But for native apps there is even more to deal with: you need tools to upgrade your native code between React Native versions, manage compatible versions of all of your dependencies, and deal with native build tools.

It takes a village to bring an app from idea to production without the right tools.

We want you to focus on writing beautiful applications and features for your users, and not solving those common problems over and over.

That’s why we believe that the best way for you to experience React Native is through a framework that offers a toolbox with all the necessary tools you need to build production-ready applications.

We’ve found that **you’re either using a framework or you’re building your own framework**.

There is nothing wrong with building your own framework, by crafting your own solutions for routing, navigation, deploying, and so on. Major corporations like Meta and Microsoft build their own frameworks internally to integrate deeply into their brownfield apps. But we believe that most people will be better off by using an existing framework.

If you’ve been using React on web, you’re probably familiar with a similar concept of [production-grade React frameworks](https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks).

As of today, the only recommended community framework for React Native is [Expo](https://docs.expo.dev/). Folks at Expo have been investing in the React Native ecosystem since the early days of React Native and as of today, we believe the developer experience offered by Expo is best in class.

note

Expo, the framework, is and will remain free and open source, while Expo Application Services (EAS) is an optional paid service.

If you haven’t used Expo recently, make sure you don’t miss [this talk from Kadi @ Expo](https://www.youtube.com/live/0ckOUBiuxVY?si=N-WSfmAJSMfd6wDL\&t=3888) where she’s showcasing what you can do with Expo in 2024.

We’ve also updated the [Getting Started page](https://reactnative.dev/docs/environment-setup) on the website to reflect this recommendation.

## How will frameworks affect you?[​](#how-will-frameworks-affect-you "Direct link to How will frameworks affect you?")

If you’re already using a recommended framework such as Expo, you’re already good to go!

If you'd like to migrate your existing app to Expo, you can find instructions on [the official Expo website](https://docs.expo.dev/bare/overview/). Expo offers many benefits, such as an easier way to [upgrade your React Native version](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/), a better developer experience, and much more.

However, if you can't or don't want to migrate to Expo, that's fine too. Using React Native without an official framework will continue to be supported. The tools you’ve been using such as React Native Community CLI, Template and [Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) will keep on working as usual.

The `react-native init` command has moved out of core and is now accessible via:

```

npx @react-native-community/cli@latest init

```

and on GitHub at [react-native-community/cli](https://github.com/react-native-community/cli).

If you’re a React Native library developer, we collected a list of recommendations on which APIs to use. [Read more in the RFC](https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0759-react-native-frameworks.md#what-do-we-recommend-to-react-native-library-developers).

## Further reading[​](#further-reading "Direct link to Further reading")

If you’re interested in learning more about the reasoning behind this decision, we invite you to read the [RFC0759: React Native Frameworks](https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0759-react-native-frameworks.md#what-do-we-recommend-to-react-native-library-developers). This RFC is a result of a multi-month effort involving countless discussions and brainstorming among different partners and players of the React Native ecosystem.

While Expo today is the only recommended framework, the RFC also contains [guidelines](https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0759-react-native-frameworks.md#becoming-a-react-native-framework) on how to become a recommended framework, as we hope to see more competition and innovation in this space.

Moreover, you should check out the talk [useFrameworks()](https://www.youtube.com/watch?v=lifGTznLBcw) at App.js 2024 where we presented this RFC and the necessary changes in a short format.

We believe that by clarifying the respective responsibilities of React Native Core and the Frameworks, we can foster a healthier ecosystem and drive growth & innovation for React Native.

**Tags:**

* [announcement](/blog/tags/announcement)


---

# React Native 0.75 - Support for Percentage Values in Layout, New Architecture Stabilization, Template & init Updates, and more

August 14, 2024 ·



16 min read

![Gabriel Donadel Dall'Agnol](https://github.com/gabrieldonadel.png)

Gabriel Donadel Dall'Agnol

Software Engineer @ Expo

[](https://x.com/donadeldev "X")[](https://github.com/gabrieldonadel "GitHub")

![Siddharth Kulkarni](https://github.com/siddharthkul.png)

Siddharth Kulkarni

Software Engineer @ Coinbase

[](https://github.com/siddharthkul "GitHub")

![Thibault Malbranche](https://github.com/titozzz.png)

Thibault Malbranche

Lead Mobile Engineer @ Brigad

[](https://x.com/titozzz "X")[](https://github.com/titozzz "GitHub")

![Blake Friedman](https://github.com/blakef.png)

Blake Friedman

Software Engineer @ Meta

[](https://github.com/blakef "GitHub")

![Riccardo Cipolleschi](https://github.com/cipolleschi.png)

Riccardo Cipolleschi

Software Engineer @ Meta

[](https://x.com/CipolleschiR "X")[](https://github.com/cipolleschi "GitHub")

![Nicola Corti](https://github.com/cortinico.png)

Nicola Corti

Software Engineer @ Meta

[](https://x.com/cortinico "X")[](https://github.com/cortinico "GitHub")[](https://bsky.app/profile/cortini.co "Bluesky")

Today we are excited to release React Native 0.75!

This release ships several features, such as Yoga 3.1 with support for `%` values, several stabilization fixes for the New Architecture, and the introduction of the recommendation for users to use a React Native Framework.

### Highlights[​](#highlights "Direct link to Highlights")

* [Yoga 3.1 and Layout Improvements](/blog/2024/08/12/release-0.75.md#yoga-31-and-layout-improvements)
* [New Architecture Stabilization](/blog/2024/08/12/release-0.75.md#new-architecture-stabilization)
* [Using Frameworks](/blog/2024/08/12/release-0.75.md#using-frameworks)

### Breaking Changes[​](#breaking-changes "Direct link to Breaking Changes")

* [Touchables in TypeScript can’t be used as types in Generic expressions anymore](/blog/2024/08/12/release-0.75.md#touchables-in-typescript-cant-be-used-as-types-in-generic-expressions-anymore)
* [Last version supporting minSdk 23 and minIOSVersion 13.4](/blog/2024/08/12/release-0.75.md#last-version-supporting-minsdk-23-and-miniosversion-134)
* [Android: JSIModule has been deleted](/blog/2024/08/12/release-0.75.md#android-jsimodule-has-been-deleted)
* [Android: PopUp Menu removed from core](/blog/2024/08/12/release-0.75.md#android-popup-menu-moved-to-separate-package)
* [iOS: Finalized Push Notifications deprecation work](/blog/2024/08/12/release-0.75.md#ios-finalized-pushnotificationios-deprecation-work)
* [Community CLI: Removal of ram-bundle and profile-hermes commands](/blog/2024/08/12/release-0.75.md#community-cli-removal-of-ram-bundle-and-profile-hermes-commands)

## Highlights[​](#highlights-1 "Direct link to Highlights")

### Yoga 3.1 and Layout Improvements[​](#yoga-31-and-layout-improvements "Direct link to Yoga 3.1 and Layout Improvements")

Since we last shipped Yoga [version 3.0](https://reactnative.dev/blog/2024/04/22/release-0.74#yoga-30) in React Native 0.74, we kept on pushing many improvements and new layout capabilities for your applications. React Native 0.75 ships with Yoga 3.1 and you can learn more about what’s new in the official Yoga’s [release blog post](https://www.yogalayout.dev/blog/announcing-yoga-3.1).

One notable and highly requested feature is the support for `%` values in various places, such as `gaps` and `translation`

info

These features are available only for the New Architecture. If you are keen to use them, please consider migrating to it.

#### Percentage Values in Gaps[​](#percentage-values-in-gaps "Direct link to Percentage Values in Gaps")

With 0.75, the `gap`, `columnGap` and `rowGap` props described [here](https://reactnative.dev/docs/flexbox#row-gap-column-gap-and-gap) now support a string with a `%` value.

For example:

```

function App(): React.JSX.Element {
return (
\<SafeAreaView
style={{
marginTop: 20,
alignItems: 'center',
flex: 1,
rowGap: '20%',
}}>
\<View
style={{flex: 1, flexDirection: 'row', columnGap: '10%'}}>
\<View
style={{
backgroundColor: 'purple',
width: 100,
height: 100,
}}
/>
\<View
style={{
backgroundColor: 'blue',
width: 100,
height: 100,
}}
/>
\<View
style={{
backgroundColor: 'green',
width: 100,
height: 100,
}}
/> </View>
\<View
style={{flex: 1, flexDirection: 'row', columnGap: '10%'}}>
\<View
style={{
backgroundColor: 'lime',
width: 100,
height: 100,
}}
/>
\<View
style={{
backgroundColor: 'yellow',
width: 100,
height: 100,
}}
/>
\<View
style={{
backgroundColor: 'orange',
width: 100,
height: 100,
}}
/> </View>
\<View
style={{flex: 1, flexDirection: 'row', columnGap: '10%'}}>
\<View
style={{
backgroundColor: 'red',
width: 100,
height: 100,
}}
/>
\<View
style={{
backgroundColor: 'violet',
width: 100,
height: 100,
}}
/>
\<View
style={{
backgroundColor: 'magenta',
width: 100,
height: 100,
}}
/> </View> </SafeAreaView>
);
}

```

Will be rendered as follows:

| Android                                                                                | iOS                                                                            |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| ![Android Gaps](/assets/images/0.75-android-gaps-666a10baba3b26cae0c48bb2a696a43a.png) | ![iOS Gaps](/assets/images/0.75-ios-gaps-e2e421fdbebed0fa1c724113892ff1ed.png) |

#### Percentage values in Translation[​](#percentage-values-in-translation "Direct link to Percentage values in Translation")

The [`transform` prop](https://reactnative.dev/docs/transforms) can also now accept `%` as values for the `translate` transformations.

For example, the following component would move the red square’s X coordinate by 100% of its width and the Y coordinate by 100% of its height:

```

function Translated() {
return (
\<SafeAreaView
style={{
marginTop: 20,
flex: 1,
rowGap: '20%',
}}>
\<View
style={{
backgroundColor: 'red',
width: 100,
height: 100,
transform: \[{translateY: '100%'}, {translateX: '100%'}],
}}
/> </SafeAreaView>
);
}

```

Will be rendered as follows:

| Android                                                                                               | iOS                                                                                          |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| ![Android Translation](/assets/images/0.75-android-translations-88fc4632bc683645cf686b9855356ed1.png) | ![iOS Translation](/assets/images/0.75-ios-translation-a38ecabf731f3b27ea02ba45f16f8d93.png) |

### New Architecture Stabilization[​](#new-architecture-stabilization "Direct link to New Architecture Stabilization")

Since our announcement of the [New Architecture being in Beta](https://github.com/reactwg/react-native-new-architecture/discussions/189) at React Conf, we shipped several bug fixes and improvements to its stability.

Our goal is for the New Architecture to be considered stable in the near future. Therefore, in the last few months we focused on bridging the gaps between the Old and the New Architecture. Some examples of bugs and missing features we fixed are:

* Fix `adjustsFontSizeToFit` on Android ([#44075](https://github.com/facebook/react-native/pull/44075))
* Fix `textAlign` not working with inline views on Android ([#44146](https://github.com/facebook/react-native/pull/44146))
* Fix text baseline being moved up on iOS ([#44932](https://github.com/facebook/react-native/pull/44932))

Together with the folks at Expo, we also worked on adding information about New Architecture support in the [React Native Directory](https://reactnative.directory/), so it will be immediately clear for you if a library already supports the New Architecture or not:

![React Native Directory](/assets/images/0.75-rn-directory-a5b9d610243d3824942bfff41c0a5656.png)

We also invite you to take part in the [New Architecture survey](https://t.co/ucAA58hnFu). This survey is key for us to collect precious feedback on the next steps for the New Architecture rollout.

We also want to share a post we published in the New Architecture Working Group about [Supporting UIManager in the New Architecture](https://github.com/reactwg/react-native-new-architecture/discussions/201). This post offers an API overview of the `UIManager` API on Android and how it can help the migration of more advanced apps & libraries.

This release contains also a new API which is now the blessed way to access the `jsi::Runtime`.

#### Accessing `jsi::Runtime` in TurboModules[​](#accessing-jsiruntime-in-turbomodules "Direct link to accessing-jsiruntime-in-turbomodules")

In the past, there has never been a recommended way from native modules to access the `jsi::Runtime`, and consumers would work around the framework to do so in risky ways. In 0.74, we introduced experimental APIs providing safe access to the `jsi::Runtime`, and we’re happy to announce their stability for 0.75.

Examples on how to access the jsi::Runtime

On iOS, you can make your Turbo Native Module conform to the protocol `RCTTurboModuleWithJSIBindings`. You can now implement `installJSIBindingsWithRuntime`, which will give you thread-safe access to the runtime.

```

@interface RCTSampleTurbo Module () <RCTTurboModuleWithJSIBindings>
@end

\#pragma mark - RCTTurboModuleWithJSIBindings

- (void)installJSIBindingsWithRuntime:(jsi::Runtime &)runtime {
  runtime.global().setProperty(
  runtime,
  "myGlobalFunction",
  jsi:: Function::createFromHost Function(...));
  }

```

On Android, you can make your Turbo Native Module conform to the interface `TurboModuleWithBindings`. You can now implement the JNI method `getBindingsInstaller`, which will give you thread-safe access to the runtime in C++.

```

public class SampleTurboModule extends NativeSampleTurboModuleSpec implements TurboModuleWithJSIBindings

@Override
public native BindingsInstallerHolder getBindingsInstaller();

```
```

// C++
jni::local\_ref<BindingsInstallerHolder::javaobject> SampleTurboModuleJSIBindings::getBindingsInstaller(jni::alias\_ref<jni::object> jobj) {
return BindingsInstallerHolder::newObjectCxxArgs(
\[]\(jsi::Runtime& runtime) {
runtime.global().setProperty(
runtime,
“myGlobalFunction”,
jsi::Function::createFromHostFunction(...));
}
);
}

```

If you’re on the UI thread and you need to access the runtime, we introduced a new API: `CallInvoker`. It consists of a single method, `invokeAsync`, that will jump onto the JS thread to safely execute some work using the JS runtime. These APIs are forward compatible.

On iOS, we’ve provided the protocol `RCTCallInvokerModule`. After conforming to this protocol, our infrastructure will decorate the module with access to the `CallInvoker`.

```

@interface RCTSampleTurboModule() <RCTCallInvokerModule>

\[self.callInvoker callInvoker].invokeAsync(\[&]\(jsi::Runtime& runtime) {
// do stuff on JS thread
}

```

On Android, the `CallInvoker` is accessible through the `ReactContext` in a JNI wrapper called `CallInvokerHolder`, where you can then call `invokeAsync` after crossing the JNI boundary.

```

// Java
public abstract CallInvokerHolder getJSCallInvokerHolder();

```
```

// C++
jsCallInvokerHolder->cthis()->getCallInvoker()->invokeAsync(\[&]\(jsi::Runtime& rt) {
// do stuff on JS thread
});

```

### Using Frameworks[​](#using-frameworks "Direct link to Using Frameworks")

As we shared at React Conf earlier this year, the recommended way to build a React Native app is now through a framework, such as Expo.

You can read more about this guidance on our previous blog-post: "[Use a framework to build React Native apps](https://reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps)".

We want to set up new React Native users for success. We believe that using a framework makes you as productive as possible, and offers you the best developer experience when building new apps.

To reflect those recommendations, this version includes the following changes:

* We moved the `/template` folder from the `react-native` package to a separate repository: [`react-native-community/template`](https://github.com/react-native-community/template).
* We’re sunsetting the `react-native init` command as of December 31st 2024.

If you’re already using a framework such as Expo, those changes won’t impact you at all. You’ll be able to use React Native 0.75 together with Expo SDK 51 (you can find instructions on how to do it in [this dedicated Expo post](https://expo.dev/changelog/2024/08-14-react-native-0.75)).

If you’re not using a framework or you’re building your own framework, let’s see how those changes will impact you.

#### Moving the template to react-native-community/template[​](#moving-the-template-to-react-native-communitytemplate "Direct link to Moving the template to react-native-community/template")

Historically, `react-native` used to ship a `/template` folder inside the NPM package which was used by the Community CLI to create new projects. This made updating the template quite slow as we needed a new React Native release for every template change.

With our latest recommendation to use a framework, we feel that shipping an opinionated template inside our core NPM package was not aligned with [our vision](https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0759-react-native-frameworks.md).

Therefore, we decided to move the template to the [`@react-native-community/template`](https://www.npmjs.com/package/@react-native-community/template) package.

This will make it easier for the community to maintain and evolve the template, without having to rely on a React Native release for every change. Moreover, this brings the template closer to the Community CLI and will make it easier for everyone to inspect and depend on the template as a separate package.

This change should be completely transparent to users who create new projects using the Community CLI. From now on, new issues related to the template should be reported on the [template issue tracker](https://github.com/react-native-community/template/issues?q=sort%3Aupdated-desc+is%3Aissue+is%3Aopen). All the various tools that depend on the template, such as the upgrade-helper, have also been updated accordingly and will continue working as usual.

#### Sunsetting react-native init[​](#sunsetting-react-native-init "Direct link to Sunsetting react-native init")

Similarly to the template, the `react-native init` command was also adapted to align with the new recommendation.

Historically, `react-native init` was the default command to create new React Native projects. However, in 2024, we feel this command does not provide the same onboarding experience that a framework would offer you. That is why we are not recommending it anymore, instead you should use a framework like Expo.

You can still use `react-native init` to create new projects using the Community CLI & template today, but you will see the following warning:

![Init Deprecation](/assets/images/0.75-deprecation-55d183c728154671a92452650a08275e.png)

Starting from December 31st 2024, the `init` command won’t create a project anymore. You will have to either:

* Use a framework such as Expo, with its own dedicate command to create a new project, such as `npx create-expo-app`
* Invoke the Community CLI directly with `npx @react-native-community/cli init`

Please note that `react-native config` and all the other commands than `init` will continue working as usual.

info

In order to offer a smoother migration experience, the `react-native@0.75.0` package is still depending on `@react-native-community/cli` but we’re planning on removing this dependency in the near future.

#### Auto-linking performance improvements[​](#auto-linking-performance-improvements "Direct link to Auto-linking performance improvements")

During this work in updating the `init` command, we also spent time rewriting the auto-linking logic to be more performant. This results in faster build speed for both Android and iOS.

With React Native 0.75, if you are using Expo, the auto-linking step could now run \~6.5x faster on Android and \~1.5x faster on iOS. You can read more about these improvements [here](https://github.com/react-native-community/discussions-and-proposals/discussions/814).

### Breaking changes[​](#breaking-changes-1 "Direct link to Breaking changes")

While this upcoming section seems lengthy, we expect that the breaking changes here will mostly impact a small group of users that are using React Native in more advanced ways.

We want to present them here for the sake of completeness and for reference.

#### Touchables in TypeScript can’t be used as types in Generic expressions anymore[​](#touchables-in-typescript-cant-be-used-as-types-in-generic-expressions-anymore "Direct link to Touchables in TypeScript can’t be used as types in Generic expressions anymore")

`TouchablesOpacity` and `TouchableHighlights` components have been converted to functional components. This means that they cannot be used as `value & type` anymore. So, for example, the following is not valid anymore:

```

import {TouchableHighlight} from 'react-native';
const ref = useRef<TouchableHighlight>();
//                ^^^ TS2749: TouchableHighlight refers to a value, but is being used as a type here.
//                            Did you mean typeof TouchableHighlight?

```

Instead, you should use the built-in React type `React.ElementRef` or, alternatively, the `View` type:

```

import {TouchableHighlight} from 'react-native';
const ref1 =
useRef\<React.ElementRef<typeof TouchableHighlight>>();
// or
const ref2 = useRef<View>();

```

#### Last version supporting minSdk 23 and minIOSVersion 13.4[​](#last-version-supporting-minsdk-23-and-miniosversion-134 "Direct link to Last version supporting minSdk 23 and minIOSVersion 13.4")

These are not breaking changes in 0.75 *per se*, but we want to share that React Native 0.75 will be the last version of React Native to support minSdk 23 (Android 6.0) and minIOSVersion 13.4.

Starting from React Native 0.76, the minSdk version will be 24 (Android 7.0) and the minIOSVersion will be 15.1.

You can read more about it in our official announcement [for Android](https://github.com/react-native-community/discussions-and-proposals/discussions/802) and [for iOS](https://github.com/react-native-community/discussions-and-proposals/discussions/812).

#### Android: JSIModule has been deleted[​](#android-jsimodule-has-been-deleted "Direct link to Android: JSIModule has been deleted")

The `com.facebook.react.bridge.JSIModule` ([source](https://github.com/facebook/react-native/blob/0.73-stable/packages/react-native/ReactAndroid/src/main/java/com/facebook/react/bridge/JSIModule.java)) was an API that we temporarily introduced to allow a Native Module to access JSI directly on Android. The accessors for this API [were deprecated in 0.74](https://reactnative.dev/blog/2024/04/22/release-0.74#other-breaking-changes), and we verified that there was no meaningful usage of this API in Open Source so we’re removing it in 0.75. You can use [Turbo Native Modules](https://github.com/reactwg/react-native-new-architecture/blob/main/docs/turbo-modules.md) instead as an alternative.

#### Android: PopUp Menu moved to separate package[​](#android-popup-menu-moved-to-separate-package "Direct link to Android: PopUp Menu moved to separate package")

In 0.74, [we moved the Android’s `PopUpMenu` to a separate package](https://reactnative.dev/blog/2024/04/22/release-0.74#other-breaking-changes) under the `@react-native` scope. In 0.75, we are removing the remaining methods that were still in core:

* `UIManagerModule.showPopupMenu()`
* `UIManagerModule.dismissPopupMenu()`

As an alternative, please use the please use the `<PopupMenuAndroid />` component, which lives in the [`@react-native/popup-menu-android`](https://www.npmjs.com/search?q=%40react-native%2Fpopup-menu-android) package.

#### iOS: Finalized PushNotificationIOS deprecation work[​](#ios-finalized-pushnotificationios-deprecation-work "Direct link to iOS: Finalized PushNotificationIOS deprecation work")

In 0.74, we [deprecated](https://reactnative.dev/blog/2024/04/22/release-0.74#api-changes-to-pushnotificationios-deprecated) some APIs from the `PushNotificationIOS` module.

In 0.75, we’ve deleted these APIs to migrate off legacy representations of notifications metadata.

The APIs that have been deleted are:

```

- (void)didReceiveLocalNotification:(UILocalNotification \*)notification;
- (void)didReceiveRemoteNotification:(NSDictionary \*)notification;

```

Instead, use `didReceiveNotification:(UNNotification *)notification`.

#### Community CLI: Removal of ram-bundle and profile-hermes commands[​](#community-cli-removal-of-ram-bundle-and-profile-hermes-commands "Direct link to Community CLI: Removal of ram-bundle and profile-hermes commands")

We would like to announce two significant removals coming from the Community CLI: the commands `ram-bundle` and `profile-hermes`.

The `ram-bundle` command was introduced in React Native 0.59 to let you run your bundles by loading them directly in memory. This functionality is now superseded by Hermes, our default JS engine. You should not use the `ram-bundle` command.

The `profile-hermes` command was a tool to help you profile the CPU performance of your JavaScript code. This used the old `.cpuprofile` format, which is no longer supported in recent versions of Chrome. Including this capability as a standalone command is also something we are moving away from as we work on raising the quality bar of our debugging tools. CPU profiling can now be accessed from the "Profiler" panel in the [Experimental New Debugger](https://reactnative.dev/docs/0.74/debugging?js-debugger=new-debugger#opening-the-debugger) (Note: this is not accessible if connecting to Hermes from Chrome).

## Other Breaking changes[​](#other-breaking-changes "Direct link to Other Breaking changes")

### General[​](#general "Direct link to General")

* **Codegen**

  * Changed slightly the name of pure C++ TurboModules generated classes and structs. We dropped the `Cxx` token from their names
  * Float enums are not supported anymore due to possible precision errors
  * Throw an error when passing `null` in JS to a non nullable argument in Native

* **Linting**
  * ESLint config no longer run prettier when linting

* **C++**

  * `ScrollViewShadowNode` now requires a new `bool includeTransform` parameter in the constructor
  * Removed `executeAsynchronously` and `executeSynchronously_CAN_DEADLOCK` from RuntimeExecutor
  * Renamed `JsErrorHandlingFunc` to `OnJsError` in `JsErrorHandler.h`
  * Renamed `handleJsError` to `OnJsError` in `handleFatalError.h`
  * Removed unused `import` from `ReactPrimitives.h`
  * `LongLivedObjectCollection` and `LongLivedObject` get methods now accepts a Runtime parameter
  * Renamed the `utils/jsi.h` file to `jsi-utils.h`

* **TextInput**
  * Removed deprecated `onTextInput` callback

* **Pressability**
  * Removed `onLongPressShouldCancelPress_DEPRECATED`, `onResponderTerminationRequest_DEPRECATED`, and `onStartShouldSetResponder_DEPRECATED` method

#### Android[​](#android "Direct link to Android")

* **ReactViewBackgroundDrawable**
  * Deprecated in favor of `CSSBackgroundDrawable`. This also remove some APIs from `ReactViewBackgroundDrawable` and from `ColorUtil`

* **ReactContext**

  * `ReactContext` and `ReactApplicationContext` are now abstract. Use `BridgeReactContext` and `BridgelessReactContext` instead
  * Delete `ReactContext.initializeWithInstance()`. Please use `BridgeReactInstance` instead
  * Remove `BridgelessReactContext.getJavaScriptContextHolder()` from. Please use `BridgelessCatalystInstance` instead
  * Remove `ReactContext.getRuntimeExecutor()`. Please use `BridgelessCatalystInstance`

* **Layout**

  * Support percentage flex gap values. This changes the parameters of some methods like `setGap`, `setRowGap` and `setColumnGap` from float to dynamic
  * Requires `supportsRTL` in Android Manifest

* **Runtime**

  * Removed `ReactJsExceptionHandler` from ReactHostImpl
  * Make the app responsible to return the core turbomodules when not using the default template

* **DevSupport**
  * Changed the `DevSupportManagerFactory.create()` to accept a new `PausedInDebuggerOverlayManager` parameter

* **Measurement**
  * Deleted `UIManagerModule.measureLayoutRelativeToParent()`

#### iOS[​](#ios "Direct link to iOS")

* **Runtime**

  * Remove `[RCTHost getSurfacePresenter]` and `[RCTHost getModuleRegistry]`
  * Remove `EventPriority` class and always use the default `EventPriority::AsynchronousBatched`. If build fails, please remove any use of `EventPriority`

* **Image**
  * Remove unused `RCTImageLoadingPerfInstrumentationEnabled`

* **Error Handling**
  * Remove `RCTRedBox` access through `RCTBridge`

* **CocoaPods**

  * Renamed `BUILD_FROM_SOURCE` to `RCT_BUILD_HERMES_FROM_SOURCE`
  * Renamed `React-Codegen` to `ReactCodegen` for better compatibility with `use_frameworks` and Swift

* **TextInput**
  * Remove deprecated `onTextInput` callback

### Acknowledgements[​](#acknowledgements "Direct link to Acknowledgements")

React Native 0.75 contains over **1491 commits** from **165 contributors**. Thanks for all your hard work!

Thanks to all the additional authors that worked on documenting features in this release post:

* [Nick Gerleman](https://github.com/NickGerleman) and [Joe Vilches](https://github.com/joevilches) for *Yoga 3.1 and Layout Improvements*
* [Arushi Kesarwani](https://github.com/arushikesarwani94) for Supporting UIManager in the New Architecture
* [Phillip Pan](https://github.com/philIip) for Accessing jsi::Runtime in TurboModules
* [Alan Lee](https://github.com/alanleedev) and [Soe Lynn](https://github.com/realsoelynn) for Last version supporting minSdk 23 and minIOSVersion 13.4
* [Kudo Chien](https://github.com/kudo) for Auto-linking performance improvements
* [Alex Hunt](https://github.com/huntie) for Removal of `ram-bundle` and `profile-hermes` commands

### Upgrade to 0.75[​](#upgrade-to-075 "Direct link to Upgrade to 0.75")

Please use the [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) to view code changes between React Native versions for existing projects, in addition to the Upgrading docs.

To create a new project:

```

npx @react-native-community/cli@latest init MyProject --version latest

```

If you use Expo, React Native 0.75 will be supported in Expo SDK 51 (instructions on how to updated React Native inside your Expo project to 0.75.0 are available [in this dedicated post](https://expo.dev/changelog/2024/08-14-react-native-0.75)).

info

0.75 is now the latest stable version of React Native and 0.72.x moves to unsupported. For more information see [React Native's support policy](https://github.com/reactwg/react-native-releases/blob/main/docs/support.md). We aim to publish a final end-of-life update of 0.72 in the near future.

**Tags:**

* [engineering](/blog/tags/engineering)


---

# React Native 0.76 - New Architecture by default, React Native DevTools, and more

October 23, 2024 ·



12 min read

![Blake Friedman](https://github.com/blakef.png)

Blake Friedman

Software Engineer @ Meta

[](https://github.com/blakef "GitHub")

![Riccardo Cipolleschi](https://github.com/cipolleschi.png)

Riccardo Cipolleschi

Software Engineer @ Meta

[](https://x.com/CipolleschiR "X")[](https://github.com/cipolleschi "GitHub")

![Frank Calise](https://github.com/frankcalise.png)

Frank Calise

Software Engineer @ Infinite Red

[](https://x.com/frankcalise "X")[](https://github.com/frankcalise "GitHub")

![Gabriel Donadel Dall'Agnol](https://github.com/gabrieldonadel.png)

Gabriel Donadel Dall'Agnol

Software Engineer @ Expo

[](https://x.com/donadeldev "X")[](https://github.com/gabrieldonadel "GitHub")

Today we are excited to release React Native 0.76!

This is a major milestone for React Native, as we’re enabling the New Architecture by default, and we’re introducing React Native DevTools. This has been the culmination of 6 years of hard work from our team, together with the support of our incredible community of developers.

### Highlights[​](#highlights "Direct link to Highlights")

* [React Native New Architecture by default](/blog/2024/10/23/release-0.76-new-architecture.md#react-native-new-architecture-by-default)
* [React Native DevTools](/blog/2024/10/23/release-0.76-new-architecture.md#react-native-devtools)
* [Faster Metro resolution](#faster-metro-resolution)
* [Box Shadow and Filter style props](/blog/2024/10/23/release-0.76-new-architecture.md#box-shadow-and-filter-style-props)

### Breaking Changes[​](#breaking-changes "Direct link to Breaking Changes")

* [Removed the dependency on the react-native-community/cli](/blog/2024/10/23/release-0.76-new-architecture.md#removed-the-dependency-on-the-react-native-communitycli)
* [Android Apps are \~3.8Mb smaller thanks to Native Library merging](/blog/2024/10/23/release-0.76-new-architecture.md#android-apps-are-38mb-smaller-thanks-to-native-library-merging)
* [Updates to Minimum iOS and Android SDK requirements](/blog/2024/10/23/release-0.76-new-architecture.md#updates-to-minimum-ios-and-android-sdk-requirements)

## Highlights[​](#highlights-1 "Direct link to Highlights")

### React Native New Architecture by default[​](#react-native-new-architecture-by-default "Direct link to React Native New Architecture by default")

Starting from React Native 0.76, the New Architecture is enabled by default in your projects. The New Architecture is a rewrite of the internals of React Native to enable app developers to develop high quality native applications using React.

Today, we’re excited to declare the New Architecture ready for production use.

This change is a milestone in the evolution of React Native, and we invite you to read the dedicated blogpost to understand what's included in the New Architecture and how it will shape the future of React Native: [The New Architecture is Here](/blog/2024/10/23/the-new-architecture-is-here.md).

### React Native DevTools[​](#react-native-devtools "Direct link to React Native DevTools")

![React Native DevTools front-end](/assets/images/0.76-react-native-devtools-0b22a36dd405d34834004e51a3fcce23.jpg)

We're releasing the first stable version of React Native DevTools, our new default debugging experience.

We want the tooling you use to debug React across all platforms to be reliable, familiar, simple, and cohesive. React Native DevTools delivers on these principles — browser-aligned developer tools that are deeply integrated with React Native. Key features include:

* **Familiar, web-aligned tooling** — A fully featured debugger based on Chrome DevTools with reliable breakpoints, watch values, step-through debugging, stack inspection, and a rich JavaScript console. These core features now work reliably and across reloads.
* **Improved and integrated React DevTools** — The built-in React Components Inspector and Profiler work seamlessly, with faster and more reliable component highlighting.
* **Improved UX** — See a new *Paused in Debugger* overlay, making it clear when your app is paused on a breakpoint. Warnings in LogBox are now displayed as a summary, and hidden when DevTools is attached.
* **Fixed reconnection behaviour** — JavaScript breakpoints now work reliably across reloads and when DevTools is disconnected and reattached. DevTools can even reconnect to the same app after a native rebuild.
* **Instant launch** — React Native DevTools is ready by default with zero config. Open it from the in-app Dev Menu or via `j` to debug in the CLI server, which now supports multiple emulators and devices.

React Native DevTools is fundamentally different from our previous debugging options, including being different from the Experimental Debugger experience first shipped in 0.73. It switches to a new backend debugging stack that we’ve rebuilt over the last year. This means that compatibility with previous tooling [has changed](https://github.com/react-native-community/discussions-and-proposals/discussions/819#:~:text=announcement%20talk%20%F0%9F%8E%AC.-,Compatibility,-React%20Native%20DevTools), and you should also expect a much more reliable experience end-to-end. We intend to build upon this new stack to allow us to reliably implement more features in future, such as the Performance and Network panels.

#### Phasing out logs in Metro[​](#phasing-out-logs-in-metro "Direct link to Phasing out logs in Metro")

In our next release, we're removing forwarded logs in Metro to align with modern browser tooling, and remove old debugging integrations. Instead, use React Native DevTools' fully featured Console panel for logging. See more under our [FAQs](https://github.com/react-native-community/discussions-and-proposals/discussions/819#:~:text=point%20is%20deprecated.-,FAQs,-React%20Native%20DevTools).

**Links**

* [Updated debugging docs](/docs/debugging.md)
* [Announcement talk at React Universe Conf](https://www.youtube.com/watch?v=OwivVpg6Luc)
* [Feedback thread and FAQs](https://github.com/react-native-community/discussions-and-proposals/discussions/819)

### Faster Metro resolution[​](#faster-metro-resolution "Direct link to Faster Metro resolution")

We've shipped several performance improvements to Metro's resolver, the component responsible for finding a module from an import path, making it around [15x faster](https://x.com/MetroBundler/status/1831709057670861260). This improves the overall performance of Metro, particularly for warm builds, which we've seen at around 4x faster.

### Box Shadow and Filter style props[​](#box-shadow-and-filter-style-props "Direct link to Box Shadow and Filter style props")

We’ve added two New Architecture only style props in 0.76 - `boxShadow` and `filter`. Both of these props exist on the web, and the team stick to the specs when possible so that these props are predictable, familiar, and ultimately easier to adopt (see the limitations and spec deviations sections for the exceptions). As a result, you can look up the web documentation to fully understand how these work, but there are a few important differences which are noted below.

#### `boxShadow`[​](#boxshadow "Direct link to boxshadow")

`boxShadow` adds a shadow to an element, with the ability to control the position, color, size, and blurriness of the shadow. Check out the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) for a full overview of each of these arguments, along with a fiddle to try them out for yourself. Below are a few examples of the shadows you can make.

![New boxShadow style prop](/assets/images/0.76-boxshadow-example-bcdd9211ba98197988fe526954b8b102.png)

`boxShadow` can take either a string, which mimics the CSS syntax, or JS objects which can embed variables. For example the string `‘5 5 5 0 rgba(255, 0, 0, 0.5)’` and the object `{offsetX: 5, offsetY: 5, blurRadius: 5, spreadDistance: 0, color: ‘rgba(255, 0, 0, 0.5)’}` would yield the same box shadow.

The [previous shadow functionality](https://reactnative.dev/docs/shadow-props) had some shortcomings addressed now addressed by `boxShadow`:

* Does not work on Android
* Cannot be [inset](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow#inset)
* Does not have [spread](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow#length)
* Does not work on `View`s if there is no background color
* Is a separate prop, so it cannot share the same web syntax

#### Limitations & Spec Deviations[​](#limitations--spec-deviations "Direct link to Limitations & Spec Deviations")

* The default shadow color is black, not the parent’s color
* Android normal shadows are supported on **Android 9+**
* Android inset shadows are supported on **Android 10+**

#### `filter`[​](#filter "Direct link to filter")

`filter` adds certain graphical filters to an element. There are a mix of color filters that let you modify things like brightness, saturation, and hue as well as non-color filters that let you add blurs and shadows. Check out the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) for a full overview of each individual filter function, along with a fiddle to try them out for yourself. Below is a hot dog image with various filters applied to it.

![Filters demonstration](/blog/assets/0.76-filter-example.png)

From left to right: no filter, `saturate` filter, `blur` filter, `invert` filter

Like `boxShadow`, `filter` can take either a string, which mimics the CSS syntax, or an array of JS objects which can embed variables. For example the string `‘saturate(0.5) grayscale(0.25)’` and the array `[{saturate: 0.5}, {grayscale: 0.25}]` would yield the same filter. `filter` has a `dropShadow` value which varies slightly from `boxShadow`. The biggest difference is that `dropShadow` is an alpha mask - so the shadow will only be cast by a pixel if it has a nonzero alpha component. `boxShadow`, on the other hand, will cast around the border box of the element, even if nothing is inside of it. Additionally, dropShadow does not have a spread distance parameter and cannot be inset (shadow cast inside of the element).

#### Limitations and Spec Deviations[​](#limitations-and-spec-deviations "Direct link to Limitations and Spec Deviations")

* iOS `filter` only supports brightness and opacity
* iOS `filter` will not apply to shadows, outlines, or any other graphical elements outside the bounds of the element
* Android `blur` and `drop-shadow` are only supported on **Android 12+**
* `filter` implies `overflow: hidden`, so children of an element with a `filter` will be clipped if they are positioned outside of the parents bounds.

## Breaking Changes[​](#breaking-changes-1 "Direct link to Breaking Changes")

### Removed the dependency on the @react-native-community/cli[​](#removed-the-dependency-on-the-react-native-communitycli "Direct link to Removed the dependency on the @react-native-community/cli")

As previously shared in 0.75, our vision is for React Native to be [framework agnostic](https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0759-react-native-frameworks.md). Therefore, we completed the work to remove @react-native-community/cli as a direct dependency of React Native.

Decoupling React Native from the CLI allows us to move faster through releasing these projects independently and to better separate the responsibilities of both projects.

If you are relying on the CLI in your daily workflow, make sure to explicitly [add the dependency](https://react-native-community.github.io/upgrade-helper/?from=0.75.4\&to=0.76.0#RnDiffApp-package.json) on the CLI in your `package.json`:

```

//…
“devDependencies”: {
// …

- “@react-native-community/cli”: “15.0.0”,
- "@react-native-community/cli-platform-android": “15.0.0”,
- "@react-native-community/cli-platform-ios": “15.0.0”,
  },

```

### Android Apps are \~3.8Mb smaller thanks to Native Library merging[​](#android-apps-are-38mb-smaller-thanks-to-native-library-merging "Direct link to Android Apps are ~3.8Mb smaller thanks to Native Library merging")

React Native 0.76 will ship with a reduced number of native libraries, as we merged a lot of our native code into a single library called `libreactnative.so`.

This change comes with reduction in app size, and improvement in app startup performance on Android. From our benchmarks, we found out that App size will be reduced by \~3.8MB (20% of the total) and median App startup time will be reduced by \~15ms (\~8%) ([source](https://github.com/react-native-community/discussions-and-proposals/discussions/816)).

On the other hand, this is a breaking change for both app and library developers.

App developers will have to update their Application’s `onCreate` as follows:

```

+import com.facebook.react.soloader.OpenSourceMergedSoMapping
import com.facebook.soloader.SoLoader

class MainApplication : Application(), ReactApplication {

override fun onCreate() {
super.onCreate()

- SoLoader.init(this, OpenSourceMergedSoMapping)

* SoLoader.init(this, false)
  }
  }

```

This change is necessary in order to properly load libreactnative.so and is [included in the upgrade-helper](https://react-native-community.github.io/upgrade-helper/).

Library authors won’t be affected by this change, unless you have custom C++ code.

For a technical deep dive into this change, and suggestions for library authors, you can read more about it [in the dedicated post](https://github.com/react-native-community/discussions-and-proposals/discussions/816).

### Updates to Minimum iOS and Android SDK requirements[​](#updates-to-minimum-ios-and-android-sdk-requirements "Direct link to Updates to Minimum iOS and Android SDK requirements")

We have updated our minimum platform and SDK versions:

* iOS - from 13.4 to [15.1](https://support.apple.com/en-gb/108051#151)
* Android - from SDK 23 to [SDK 24](https://developer.android.com/tools/releases/platforms#7.0) (Android 7)

This change was announced earlier in the year when 0.75 [was released](/blog/2024/08/12/release-0.75.md#last-version-supporting-minsdk-23-and-miniosversion-134). For more background, please see the dedicated posts for [Android](https://github.com/react-native-community/discussions-and-proposals/discussions/802) and [iOS](https://github.com/react-native-community/discussions-and-proposals/discussions/812).

### Other Breaking Changes[​](#other-breaking-changes "Direct link to Other Breaking Changes")

* **Animation**
  * Stop sending state updates to React in looping animation. This was causing unnecessary re-rendering with looping animations.
* **devtools:**
  * Remove Inspector Panel perf + network tabs under New Arch. ([RFC](https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0777-remove-legacy-element-inspector-features.md))
* **text engine**
  * Always use AttributedStringBox instead of AttributedString in TextLayoutManager

#### Android[​](#android "Direct link to Android")

* **rendering:**
  * View backgrounds are no longer directly `ReactViewBackgroundDrawable` or `CSSBackgroundDrawable`

#### iOS[​](#ios "Direct link to iOS")

* **turbomodule**
  * Removed the `RCT_EXPORT_CXX_MODULE_EXPERIMENTAL` Macro for autolinking pure Cxx module.

## Acknowledgements[​](#acknowledgements "Direct link to Acknowledgements")

React Native 0.76 contains over [1070 commits](https://github.com/facebook/react-native/compare/v0.75.4...v0.76.0) from 156 contributors. Thanks for all of your hard work!

Thanks to all the additional authors that worked on documenting features in this release post:

* [Joe Vilches](https://github.com/joevilches) and [Nick Gerleman](https://github.com/NickGerleman) box-shadow and filter style props.
* [Alex Hunt](https://github.com/huntie) React Native DevTools.
* [Nicola Corti](https://github.com/cortinico) Android shipping as a single library.

## Upgrade to 0.76[​](#upgrade-to-076 "Direct link to Upgrade to 0.76")

Please use the [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) to view code changes between React Native versions for existing projects, in addition to the Upgrading docs.

If you use Expo, React Native 0.76 will be supported in Expo SDK 52.

If you need to create a new project using the CLI, you can run this command:

```

npx @react-native-community/cli@latest init MyProject --version latest

```

info

0.76 is now the latest stable version of React Native and 0.73.x moves to unsupported. For more information see [React Native's support policy](https://github.com/reactwg/react-native-releases/blob/main/docs/support.md). We aim to publish a final end-of-life update of 0.73 in the near future.

**Tags:**

* [announcement](/blog/tags/announcement)
* [release](/blog/tags/release)


---

# New Architecture is here

October 23, 2024 ·



24 min read

![The React Team](https://github.com/react-native-bot.png)

The React Team

@reactjs / @reactnative

[](https://x.com/reactnative "X")

React Native 0.76 with the New Architecture by default is now available on npm!

In the [0.76 release blog post](/blog/2024/10/23/release-0.76-new-architecture.md), we shared a list of significant changes included in this version. In this post, we provide an overview of the New Architecture and how it shapes the future of React Native.

The New Architecture adds full support for modern React features, including [Suspense](https://react.dev/blog/2022/03/29/react-v18#new-suspense-features), [Transitions](https://react.dev/blog/2022/03/29/react-v18#new-feature-transitions), [automatic batching](https://react.dev/blog/2022/03/29/react-v18#new-feature-automatic-batching), and [`useLayoutEffect`](https://react.dev/reference/react/useLayoutEffect). The New Architecture also includes new [Native Module](/docs/next/turbo-native-modules-introduction) and [Native Component](/docs/next/fabric-native-components-introduction) systems that let you write type-safe code with direct access to native interfaces without a bridge.

This release is the result of a ground-up rewrite of React Native we’ve been working on since 2018, and we’ve taken extra care to make the New Architecture a gradual migration for most apps. In 2021, we created [the New Architecture Working Group](https://github.com/reactwg/react-native-new-architecture/) to collaborate with the community on ensuring a smooth upgrade experience for the entire React ecosystem.

Most apps will be able to adopt React Native 0.76 with the same level of effort as any other release. The most popular React Native libraries already support the New Architecture. The New Architecture also includes an automatic interoperability layer to enable backward compatibility with libraries targeting the old architecture.

Over the past several years of development, our team has publicly shared our vision for the New Architecture. If you missed any of these talks, check them out here:

* [React Native EU 2019 - The New React Native](https://www.youtube.com/watch?v=52El0EUI6D0)
* [React Conf 2021 - React 18 Keynote](https://www.youtube.com/watch?v=FZ0cG47msEk)
* [App.js 2022 - Bringing the New React Native Architecture to the OSS Community](https://www.youtube.com/watch?v=Q6TkkzRJfUo)
* [React Conf 2024 - Day 2 Keynote](https://www.youtube.com/watch?v=Q5SMmKb7qVI)

## What is the New Architecture[​](#what-is-the-new-architecture "Direct link to What is the New Architecture")

The New Architecture is a complete rewrite of the major systems that underpin React Native, including how components are rendered, how JavaScript abstractions communicates with native abstractions, and how work is scheduled across different threads. Although most users should not have to think about how these systems work, these changes bring improvements and new capabilities.

In the old architecture, React Native communicated with the native platform using an asynchronous bridge. To render a component or call a native function, React Native needed to serialize and enqueue native functions calls with the bridge, which would be processed asynchronously. The benefit of this architecture is that the main thread was never blocked for rendering updates or handling native module function calls, since all work was done on a background thread.

However, users expect immediate feedback to interactions to feel like a native app. This means some updates need to render synchronously in response to user input, potentially interrupting any in-progress render. Since the old architecture was only asynchronous, we needed to rewrite it to allow for both asynchronous and synchronous updates.

Additionally, in the old architecture, serializing function calls over the bridge quickly became a bottleneck, especially for frequent updates or large objects. This made it hard for apps to achieve 60+ FPS reliably. There were also synchronization issues: when the JavaScript and native layer got out of sync, it was impossible to reconcile them synchronously, resulting bugs like lists showing frames of empty space and visual UI jumps due to intermediate states rendering.

Finally, since the old architecture kept a single copy of the UI using the native hierarchy, and mutated that copy in place, layout could only be computed on a single thread. This made it impossible to process urgent updates like user inputs, and layout could not be read synchronously, such as reading in a layout effect to update the position of a tooltip.

All of these problems meant that it was not possible to properly support React’s concurrent features. To solve these problems, the New Architecture includes four main parts:

* The New Native Module System
* The New Renderer
* The Event Loop
* Removing the Bridge

The New Module system allows the React Native Renderer to have synchronous access to the native layer, which allows it to handle events, schedule updates, and read layout both asynchronously and synchronously. The new Native Modules are also lazily loaded by default, giving apps a significant performance gain.

The New Renderer can handle multiple in progress trees across multiple threads, which allows React to process multiple concurrent update priorities, either on the main thread or a background thread. It also supports reading layout from multiple threads synchronously or asynchronously, to support more responsive UIs without jank.

The new Event Loop can process tasks on the JavaScript thread in a well-defined order. This allows React to interrupt rendering to process events so urgent user events can take priority over lower priority UI transitions. The Event Loop also aligns with web specifications, so we can support for browser features like microtasks, `MutationObserver`, and `IntersectionObserver`.

Finally, removing the bridge allows for faster startup and direct communication between JavaScript and the native runtime, so that the cost of switching work is minimized. This also allows for better error reporting, debugging, and reducing crashes from undefined behavior.

The New Architecture is now ready to be used in production. It is already used at scale at Meta in the Facebook app and in other products. We successfully used React Native and the New Architecture in the Facebook and Instagram app we developed for our [Quest devices](https://engineering.fb.com/2024/10/02/android/react-at-meta-connect-2024/).

Our partners have already been using the New Architecture in production for months now: have a look at these success stories by [Expensify](https://blog.swmansion.com/sunrising-new-architecture-in-the-new-expensify-app-729d237a02f5) and [Kraken](https://blog.kraken.com/product/engineering/how-kraken-fixed-performance-issues-via-incremental-adoption-of-the-react-native-new-architecture), and give [Bluesky](https://github.com/bluesky-social/social-app/releases/tag/1.92.0-na-rc.2) a shot with their new release.

### New Native Modules[​](#new-native-modules "Direct link to New Native Modules")

The new Native Module System is a major rewrite of how JavaScript and the native platform communicate. It’s written entirely in C++, which unlocks many new capabilities:

* Synchronous access to and from the native runtime
* Type safety between JavaScript and native code
* Code sharing across platforms
* Lazy module loading by default

In the new Native Module system, JavaScript and the native layer can now synchronously communicate with each other through the JavaScript Interface (JSI), without the need to use an asynchronous bridge. This means your custom Native Modules can now synchronously call a function, return a value, and pass that value back to another Native Module function.

In the old architecture, in order to handle a response from native function calls, you needed to provide a callback, and the value returned needed to be serializable:

```

// ❌ Sync callback from Native Module
nativeModule.getValue(value => {
// ❌ value cannot reference a native object
nativeModule.doSomething(value);
});

```

In the New Architecture, you can make synchronous calls to native functions:

```

// ✅ Sync response from Native Module
const value = nativeModule.getValue();

// ✅ value can be a reference to a native object
nativeModule.doSomething(value);

```

With the New Architecture, you can finally leverage the full power of a C++ native implementation while still accessing it from JavaScript/TypeScript APIs. The New Module System supports [modules written in C++](/docs/next/the-new-architecture/pure-cxx-modules) so you can write your module once, and it works across all platforms, including Android, iOS, Windows, and macOS. Implementing modules in C++ allows for more fine-grained memory management and performance optimizations.

Additionally, with [Codegen](/docs/next/the-new-architecture/what-is-codegen), your modules can define a strongly typed contract between the JavaScript layer and the native layer. From our experience, cross-boundary type errors are one of the most common sources of crashes in cross-platform apps. Codegen lets you overcome those problems while also generating boilerplate code for you.

Finally, modules are now lazily loaded: they are loaded in memory only when they’re effectively needed rather than at startup. This reduces the app startup time and keeps it low as the application grows in complexity.

Popular libraries such as [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) have already seen benefits from migrating to the new Native Modules:

> “The new Native Modules greatly simplified setup, autolinking, and initialization for `react-native-mmkv`. Thanks to the New Architecture, `react-native-mmkv` is now a pure C++ Native Module, which allows it to work on any platform. The new Codegen allows MMKV to be fully type-safe, which fixed a long-standing `NullPointerReference` issue by enforcing null-safety, and being able to call Native Module functions synchronously allowed us to replace custom JSI access with the new Native Module API.”
>
> [Marc Rousavy](https://twitter.com/mrousavy), creator of `react-native-mmkv`

### New Renderer[​](#new-renderer "Direct link to New Renderer")

We've also completely rewritten the Native Renderer, adding several benefits:

* Updates can be rendered on different threads at different priorities.
* Layout can be read synchronously and across different threads.
* The renderer is written in C++ and shared across all platforms.

The updated Native Renderer now stores the view hierarchy in an immutable tree structure. This means that the UI is stored in a way that cannot be changed directly, allowing for thread-safe processing of updates. This allows it to handle multiple in-progress trees, each representing a different version of the user interface. As a result, updates can be rendered in the background without blocking the UI (such as during transitions) or on the main thread (in response to user input).

By supporting multiple threads, React can interrupt a low-priority update to render an urgent one, such as those generated by user inputs, and then resume the low-priority update as needed. The new renderer can also read layout information synchronously and across different threads. This enables background computation for low-priority updates and synchronous reads when needed, such as repositioning a tooltip.

Finally, rewriting the renderer in C++ allows it to be shared across all platforms. This ensures that the same code runs on iOS, Android, Windows, macOS, and any other React Native-supported platform, providing consistent rendering capabilities without needing re-implementation for each platform.

This is a significant step towards our [Many Platform Vision](/blog/2021/08/26/many-platform-vision). For example, View Flattening was an Android-only optimisation to avoid deep layout trees. The new renderer, with shared C++ core, [brings this feature to iOS](https://github.com/reactwg/react-native-new-architecture/discussions/110). This optimisation is automatic and does not require setup, it comes for free with the shared renderer.

With these changes, React Native now fully supports Concurrent React features like Suspense and Transitions, making it easier to build complex user interfaces that respond quickly to user input without jank, delays, or visual jumps. In the future, we will leverage these new capabilities to bring more improvements to built-in components such as FlatList and TextInput.

Popular libraries like [Reanimated](https://docs.swmansion.com/react-native-reanimated/) are already taking advantage of the New Renderer:

> “Reanimated 4, currently in development, introduces a new animation engine that works directly with the New Renderer, allowing it to handle animations and manage layout across different threads. The New Renderer’s design is what truly enables these features to be built without relying on numerous workarounds. Moreover, because it’s implemented in C++ and shared across platforms, large portions of Reanimated can be written once, reducing platform-specific issues, minimizing the codebase, and streamlining adoption for out-of-tree platforms.”
>
> [Krzysztof Magiera](https://x.com/kzzzf), creator of [Reanimated](https://docs.swmansion.com/react-native-reanimated/)

### The Event Loop[​](#the-event-loop "Direct link to The Event Loop")

The New Architecture allowed us to implement a well-defined event loop processing model, as described in this [RFC](https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0744-well-defined-event-loop.md). This RFC follows the specifications described in the [HTML Standard](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model), and it describes how React Native should perform tasks on the JavaScript thread.

Implementing a well-defined event loop closes gaps between React DOM and React Native: the behavior of a React Native application is now closer to the behavior of a React DOM application, making it easier to learn once, and write anywhere.

The event loop brings many benefits to React Native:

* The ability to interrupt rendering to process events and tasks
* Closer alignment with web specifications
* Foundation for more browser features

With the Event Loop, React is able to predictably order updates and events. This allows React to interrupt a low priority update with an urgent user event, and the New Renderer allows us to render those updates independently.

The Event Loops also aligns the behavior of events and task like timers with web specifications, which means React Native works more like what users are familiar with in the Web, and allows for better code sharing between React DOM and React Native.

It also allows for the implementation of more compliant browser features like microtasks, `MutationObserver`, and `IntersectionObserver`. These features are not ready to use in React Native yet, but we are working on bringing them to you in the future.

Finally, the Event Loop and the New Renderer changes to support reading layout synchronously allow React Native to add proper support for `useLayoutEffect` to read layout information synchronously and update the UI in the same frame. This allows you to position elements correctly before they are displayed to the user.

See [`useLayoutEffect`](/blog/2024/10/23/the-new-architecture-is-here.md#uselayouteffect) for more details.

### Removing the Bridge[​](#removing-the-bridge "Direct link to Removing the Bridge")

In the New Architecture, we've also fully removed React Native's dependency on the bridge, replacing it with direct, efficient communication between JavaScript and native code using JSI:

![](/assets/images/0.76-bridge-diagram-4e31abb22d5626336e548fa646c8cfc4.png)

Removing the bridge improves startup time by avoiding bridge initialization. For example, in the old architecture, in order to provide global methods to JavaScript, we would need to initialize a module in JavaScript on startup, causing a small delay in app startup time:

```

// ❌ Slow initialization
import {NativeTimingModule} from 'NativeTimingModule';
global.setTimeout = timer => {
NativeTimingModule.setTimeout(timer);
};

// App.js
setTimeout(() => {}, 100);

```

In the New Architecture, we can directly bind methods from C++:

```

// ✅ Initialize directly in C++
runtime.global().setProperty(runtime, "setTimeout", createTimer);

```
```

// App.js
setTimeout(() => {}, 100);

```

The rewrite also improves error reporting, particularly for JavaScript crashes at startup, and reduces crashes from undefined behavior. If crashes occur, the new [React Native DevTools](/docs/next/react-native-devtools) simplify debugging and support the New Architecture.

The bridge remains for backward compatibility to support gradual migration to the New Architecture. In the future, we will remove the bridge code completely.

### Gradual Migration[​](#gradual-migration "Direct link to Gradual Migration")

We expect most apps can upgrade to 0.76 with the same effort as any other release.

When you upgrade to 0.76, the New Architecture and React 18 are enabled by default. However, to use concurrent features and gain the full benefits of the New Architecture, your app and libraries will need to be gradually migrated to fully support the New Architecture.

When you first upgrade, your app will run on the New Architecture with an automatic interoperability layer with the old architecture. For most apps, this will work without any changes, but there are [known limitations](https://github.com/reactwg/react-native-new-architecture/discussions/237) with the interop layer, as it does not support accessing custom Shadow Nodes or concurrent features.

To use concurrent features, apps will also need to be updated to support [Concurrent React](https://react.dev/blog/2022/03/29/react-v18#what-is-concurrent-react) by following the [Rules of React](https://react.dev/reference/rules). To migrate your JavaScript code to React 18 and its semantics, follow the [React 18 Upgrade guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide).

The overall strategy is to get your application running on the New Architecture without breaking existing code. You can then gradually migrate your app at your own pace. For new surfaces that have migrated all modules to the New Architecture, you can start using concurrent features immediately. For existing surfaces, you may need to address some issues and migrate modules before adding concurrent features.

We've collaborated with the most popular React Native libraries to ensure support for the New Architecture. More than 850 libraries are already compatible, including all libraries with over 200K weekly downloads (\~10% of downloaded libraries). You can check library compatibility with the New Architecture on the [reactnative.directory](https://reactnative.directory) website:

![](/assets/images/0.76-directory-301eb7410932204b4c5149cdd20f604c.png)

For more details on upgrading, see [How to Upgrade](/blog/2024/10/23/the-new-architecture-is-here.md#how-to-upgrade) below.

## New Features[​](#new-features "Direct link to New Features")

The New Architecture includes full support for React 18, concurrent features, and `useLayoutEffect` in React Native. For a full list of React 18 features, please see the [React 18 blog post](https://react.dev/blog/2021/12/17/react-conf-2021-recap#react-18-and-concurrent-features).

### Transitions[​](#transitions "Direct link to Transitions")

Transitions are a new concept in React 18 to distinguish between urgent and non-urgent updates.

* **Urgent updates** reflect direct interaction, like typing and pressing.
* **Transition updates** transition the UI from one view to another.

Urgent updates need immediate response to match our intuitions about how physical objects behave. However, transitions are different because the user doesn’t expect to see every intermediate value on screen. In the New Architecture, React Native is able to support rendering urgent updates and transition updates separately.

Typically, for the best user experience, a single user input should result in both an urgent update and a non-urgent one. Similar to ReactDOM, events like `press` or `change` are handled as urgent and rendered immediately. You can use the `startTransition` API inside an input event to inform React which updates are “transitions” and can be deferred to the background:

```

import {startTransition} from 'react';

// Urgent: Show the slider value
setCount(input);

// Mark any state updates inside as transitions
startTransition(() => {
// Transition: Show the results
setNumberOfTiles(input);
});

```

Separating urgent events from transitions allows for a more responsive user interface, and a more intuitive user experience.

Here's a comparison of the old architecture without transitions and the new architecture with transitions. Imagine that each tile isn't a trivial view with a background color, but a rich component containing images and other components that are expensive to render. **After** using `useTransition` you avoid thrashing your app with updates and falling behind.

![A video demonstrating an app rendering many views (tiles) according to a slider input. The views are rendered in batches as the slider is quickly adjusted from 0 to 1000.](/img/new-architecture/without-transitions.gif)

**Before:** rendering tiles without marking it as a transition.

![A video demonstrating an app rendering many views (tiles) according to a slider input. The views are rendered in batches as the slider is quickly adjusted from 0 to 1000. There are less batch renders in comparison to the next video.](/img/new-architecture/with-transitions.gif)

**After:** rendering tiles *with transitions* to interrupt in-progress renders of stale state.

For more information, see [Support for Concurrent Renderer and Features](/architecture/landing-page.md#support-for-concurrent-renderer-and-features).

### Automatic Batching[​](#automatic-batching "Direct link to Automatic Batching")

When upgrading to the New Architecture, you will benefit from automatic batching from React 18.

Automatic batching allows React to batch together more state updates when rendering to avoid the rendering of intermediate states. This allows React Native to be faster and less susceptible to lags, without any additional code from the developer.

![A video demonstrating an app rendering many views according to a slider input. The slider value is adjusted from 0 to 1000 and the UI slowly catches up to rendering 1000 views.](/img/new-architecture/legacy-renderer.gif)

**Before:** rendering frequent state updates with legacy renderer.

![A video demonstrating an app rendering many views according to a slider input. The slider value is adjusted from 0 to 1000 and the UI resolves to 1000 views faster than the previous example, without as many intermediate states.](/img/new-architecture/react18-renderer.gif)

**After:** rendering frequent state updates with *automatic batching*.

In the old architecture, more intermediate states are rendered, and the UI keeps updating even when the slider stops moving. The New Architecture, renders fewer intermediate states and completes the rendering much sooner thanks to automatically batching the updates.

For more information, see [Support for Concurrent Renderer and Features](/architecture/landing-page.md#support-for-concurrent-renderer-and-features).

### useLayoutEffect[​](#uselayouteffect "Direct link to useLayoutEffect")

Building on the Event Loop and the ability to read layout synchronously, in the New Architecture we added proper support for `useLayoutEffect` in React Native.

In the old architecture, you needed to use the asynchronous `onLayout` event to read layout information of a view (which was also asynchronous). As a result there would be at least one frame where the layout was incorrect until the layout was read and updated, causing issues like tooltips placed in the wrong position:

```

// ❌ async onLayout after commit
const onLayout = React.useCallback(event => {
// ❌ async callback to read layout
ref.current?.measureInWindow((x, y, width, height) => {
setPosition({x, y, width, height});
});
}, \[]);

// ... <ViewWithTooltip
onLayout={onLayout}
ref={ref}
position={position}
/>;

```

The New Architecture fixes this by allowing synchronous access to layout information in `useLayoutEffect`:

```

// ✅ sync layout effect during commit
useLayoutEffect(() => {
// ✅ sync call to read layout
const rect = ref.current?.getBoundingClientRect();
setPosition(rect);
}, \[]);

// ... <ViewWithTooltip ref={ref} position={position} />;

```

This change allows you to read layout information synchronously and update the UI in the same frame, allowing you to position elements correctly before they are displayed to the user:

![A view that is moving to the corners of the viewport and center with a tooltip rendered either above or below it. The tooltip is rendered after a short delay after the view moves](/img/new-architecture/async-on-layout.gif)

In the old architecture, layout was read asynchronously in `onLayout`, causing the position of the tooltip to be delayed.

![A view that is moving to the corners of the viewport and center with a tooltip rendered either above or below it. The view and tooltip move in unison.](/img/new-architecture/sync-use-layout-effect.gif)

In the New Architecture, layout can be read in `useLayoutEffect` synchronously, updating the tooltip position before displaying.

For more information, see the docs for [Synchronous Layout and Effects](/docs/0.75/the-new-architecture/landing-page#synchronous-layout-and-effects).

### Full Support for Suspense[​](#full-support-for-suspense "Direct link to Full Support for Suspense")

Suspense lets you declaratively specify the loading state for a part of the component tree if it’s not yet ready to be displayed:

```

\<Suspense fallback={<Spinner />}> <Comments /> </Suspense>

```

We introduced a limited version of Suspense several years ago, and React 18 added full support. Until now, React Native was not able to support concurrent rendering for Suspense.

The New Architecture includes full support for Suspense introduced in React 18. This means that you can now use Suspense in React Native to handle loading states for your components, and the suspended content will render in the background while the loading state is displayed, giving higher priority to user input on visible content.

For more, see the [RFC for Suspense in React 18](https://github.com/reactjs/rfcs/blob/main/text/0213-suspense-in-react-18.md).

## How to Upgrade[​](#how-to-upgrade "Direct link to How to Upgrade")

To upgrade to 0.76, follow the steps in the [release post](/blog/2024/10/23/release-0.76-new-architecture.md#upgrade-to-076). Since this release also upgrades to React 18, you will also need to follow the [React 18 Upgrade guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide).

These steps should be enough for most apps to upgrade to the New Architecture thanks to the interop layer with the old architecture. However, to take full advantage of the New Architecture and to start using concurrent features, you will need to migrate your custom Native Modules and Native Components to support the new Native Module and Native Component APIs.

Without migrating your custom Native Modules, you will not get the benefits of shared C++, synchronous method calls, or type-safety from codegen. Without migrating your Native Components, you will not be able to use concurrent features. We recommend migrating all Native Components and Native Modules to the New Architecture as soon as possible.

note

In a future release, we will remove the interop layer and modules will need to support the New Architecture.

### Apps[​](#apps "Direct link to Apps")

If you are an app developer, to fully support the New Architecture, you will need to upgrade your libraries, custom Native Components, and custom Native Modules to fully support the New Architecture.

We've collaborated with the most popular React Native libraries to ensure support for the New Architecture. You can check library compatibility with the New Architecture on the [reactnative.directory](https://reactnative.directory) website.

If any of the libraries your app depends on are not compatible yet, you can:

* Open an issue with the library and ask the author to migrate to the New Architecture.
* If the library is not maintained, consider alternative libraries with the same features.
* [Opt-out from the New Architecture](/blog/2024/10/23/the-new-architecture-is-here.md#opt-out) while those libraries are migrated.

If your app has custom Native Modules or custom Native Components, we expect them to work fine, thanks to our [interop layer](https://github.com/reactwg/react-native-new-architecture/discussions/135). However, we recommend upgrading them to the new Native Module and Native Component APIs to fully support the New Architecture and adopt concurrent features.

Please follow these guides to migrate your modules and components to the New Architecture:

* [Native Modules](/docs/next/turbo-native-modules-introduction)
* [Native Components](/docs/next/fabric-native-components-introduction)

### Libraries[​](#libraries "Direct link to Libraries")

If you are a library maintainer, please first test that your library works with the interop layer. If it does not, please open an issue on the [New Architecture Working Group](https://github.com/reactwg/react-native-new-architecture/).

To fully support the New Architecture, we recommend migrating your library to the new Native Module and Native Component APIs as soon as possible. This will allow users of your library to take full advantage of the New Architecture and support concurrent features.

You can follow these guides to migrate your modules and components to the New Architecture:

* [Native Modules](/docs/next/turbo-native-modules-introduction)
* [Native Components](/docs/next/fabric-native-components-introduction)

### Opt-out[​](#opt-out "Direct link to Opt-out")

If, for any reason, the New Architecture is not behaving properly in your application, there is always the option to opt-out from it until you are ready to turn it on again.

To opt-out from the New Architecture:

* On Android, modify the `android/gradle.properties` file and turn off the `newArchEnabled` flag:

```

-newArchEnabled=true
+newArchEnabled=false

```

* On iOS, you can reinstall the dependencies by running the command:

```

RCT\_NEW\_ARCH\_ENABLED=0 bundle exec pod install

```

## Thanks[​](#thanks "Direct link to Thanks")

Delivering the New Architecture to the OSS community has been a huge effort that took us several years of research and development. We want to take a moment to thank all the current and past members of the React team who helped us achieve this result.

We are also extremely grateful to all the partners who collaborated with us to make this happen. Specifically, we would like to call out:

* [Expo](https://expo.dev/), for adopting the New Architecture early on, and for supporting the work on migrating the most popular libraries.
* [Software Mansion](https://swmansion.com/), for maintaining crucial libraries in the ecosystem, for migrating them to the New Architecture early and for all the help in investigating and fixing various issues.
* [Callstack](https://www.callstack.com/), for maintaining crucial libraries in the ecosystem, for migrating them to the New Architecture early and for the support with the work on the Community CLI.
* [Microsoft](https://opensource.microsoft.com/), for adding the New Architecture implementation for `react-native-windows` and `react-native-macos` as well as in several other developer tools.
* [Expensify](https://www.expensify.com/), [Kraken](https://www.kraken.com/), [Bluesky](https://bsky.app/) and [Brigad](https://www.brigad.co/) for pioneering the adoption of the New Architecture and reporting various issues so that we could fix them for everyone else.
* All the independent library maintainers and developers who contributed to the New Architecture by testing it, fixing some of the issues, and opening questions on unclear matters so that we could clear them.

**Tags:**

* [announcement](/blog/tags/announcement)


---

# React Native 0.77 - New Styling Features, Android’s 16KB page support, Swift Template

January 21, 2025 ·



16 min read

![Vojtech Novak](https://avatars.githubusercontent.com/u/1566403?v=4)

Vojtech Novak

Software Engineer @ Expo

[](https://x.com/vonovak "X")[](https://github.com/vonovak "GitHub")

![Mazen Chami](https://avatars.githubusercontent.com/u/9324607?v=4)

Mazen Chami

Software Engineer @ InfiniteRed

[](https://x.com/mazenchami "X")[](https://github.com/mazenchami "GitHub")

![Blake Friedman](https://github.com/blakef.png)

Blake Friedman

Software Engineer @ Meta

[](https://github.com/blakef "GitHub")

![Rob Hogan](https://avatars.githubusercontent.com/u/2590098?v=4)

Rob Hogan

Software Engineer @ Meta

[](https://x.com/robjhogan "X")[](https://github.com/robhogan "GitHub")

Today we are excited to release React Native 0.77!

This release ships several features: new styling capabilities such as support for `display: contents`, `boxSizing`, `mixBlendMode`, and `outline`-related properties to provide a more powerful layout options; Android 16KB page support to be compatible with the newer Android devices. We are also modernizing the community template by migrating it to Swift, while continuing to support and maintain compatibility with Objective-C for developers who prefer it.

### Highlights[​](#highlights "Direct link to Highlights")

* [New CSS Features for better layouts, sizing and blending](#new-css-features-for-better-layouts-sizing-and-blending)
* [Android version 15 support & 16KB page support](#android-version-15-support--16kb-page-support)
* [Community CLI and Template Updates](#community-cli-and-template-updates)

### Breaking Changes[​](#breaking-changes "Direct link to Breaking Changes")

* [Removal of `console.log()` streaming in Metro](#removal-of-consolelog-streaming-in-metro)

## Highlights[​](#highlights-1 "Direct link to Highlights")

### New CSS Features for better layouts, sizing and blending[​](#new-css-features-for-better-layouts-sizing-and-blending "Direct link to New CSS Features for better layouts, sizing and blending")

React Native 0.77 furthers our goal of aligning React Native with the web. We've added support for new CSS properties to give you more control over your app's layout, sizing, and blending. These changes can help simplify complex layouts, add texture, and make your app more accessible.

info

All these new features are available only for the [New Architecture](/blog/2024/10/23/the-new-architecture-is-here.md#how-to-upgrade).

#### Simpler layouts with `display: contents`[​](#simpler-layouts-with-display-contents "Direct link to simpler-layouts-with-display-contents")

The [`display: contents`](https://developer.mozilla.org/en-US/docs/Web/CSS/display#display_contents) prop allows an element to disappear from the layout structure while its children are still rendered as if they were direct children of the parent element. It can be useful for styling purposes where you want to apply styles to child elements without affecting the layout, when building wrapper components which must handle events, or if you need to interact with the ShadowTree.

Technically speaking, `display: contents` renders an element without generating a layout box, but it preserves the layout boxes of the element’s children. The element with `display: contents` is effectively flattened out of the view hierarchy.

Let’s have a look at this example where we want to display an alert when a widget is pressed. We have a red `Widget` inside of a container view:

Container.jsx

```

function Container() {
return ( <View style={styles.container}> <Widget /> </View>
);
}

```

![display contents - setup](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi4AAAIsCAIAAABa4LWDAAAAA3NCSVQICAjb4U/gAAAAknpUWHRSYXcgcHJvZmlsZSB0eXBlIEFQUDEAAHjaVYw7CsMwEER7nWKPMPvRrPY4wcjBEJLg+xcp5BR+zcBjeO053/M8Nvmen/14zSYiIlLRoqLsAWBgYYArFAYgL8W1rJEIAHr5iRsdLDo1nfpvAbU6sT4ONzfHYBkSUFs+tnsrtHt4VNTVdnoaOztnOgf3jPYDroos+BNFvGwAABIUSURBVHja7NoxDsFgGMfhxkZXLtGBI4hJnEDiIhKzYBCHwgE02kR90UN0sRq7G/oNfZ787/Ab3jdpmq+ZmVnEDRIAiEqKAJAiAKQIAKQIACkCACkCQIoAQIoAkCIAkCIApAgApAgAKQIAKQJAigBAigCQIgCQIgCkCACkCAApAgApAkCKAECKAJAiAJAiAKQIAKQIACkCACkCQIoAQIoAkCIAkCIApAgApAgAKQIAKQJAigBAigCQIgCQIgCkCACkCAApAgApAkCK/lJVrzx/mJlZrNX1p9cpKoricNjvdlszM4u1y+Ucwru/KSrL5+12NTOziLvfryEEt6JkOp2t1xszM+tyWZa5FbWWy9XxeDIzsy43ny+kqJWm6Xg8MTOzLjccjqQIAM/cACBFAEgRAEgRAFIEAFIEgBQBgBQBIEUAIEUASBEASBEAUgQAUgSAFAGAFAEgRQAgRQBIEQBIEQBSBABSBIAUAYAUASBFACBFAEgRAEgRAFIEAFIEgBQBgBQBIEUAIEUASBEASBEAUgQAUgSAFAGAFAEgRQAgRQBIEQBIEQBSBABSBIAUAYAUASBFACBFAEgRAEgRAFIEAFIEgBQBgBQBIEUAIEUASBEAUgQAUgSAFAGAFAEgRQAgRQBIEQBIEQBSBABSBIAUAYAUASBFACBFAEgRAEgRAFIEAFIEgBQBgBQBIEUAIEUASBEASBEAUgQAUgSAFAGAFAEgRQAgRQBIEQBIEQBSBABSBIAUAYAUASBFACBFAEgRAEgRAFIEAFIEgBQBgBQBIEUAIEUASBEASBEAUgQAUgSAFAGAFAEgRQAgRQBIEQBIEQBSBABSBIAUAYAUASBFACBFAEgRAEgRAFIEgBTxY6/ObQAAYSAIZqZxkAOemmnAISKa0bVwWgCkCAApAgApAkCKAECKAJAiAJAiAKQIAKQIACkCACkCQIoAQIoAkCIAkCIApAgApAgAKQIAKQJAigBAigCQIgCQIgCkCACkCAApAgApAkCKAECKAJAiAJAiAKQIAKQIACkCACkCQIoAQIoAkCIAkCIApAgApAgAKQIAKQJAigBAigCQIgCQIgCkCACkCAApAgApAkCKAECKAJAiAJAiAKQIAKQIACkCACninchhVu9MB0GK+KFlNysXezkIUgSAFAGAFAEgRQAgRQBIEQBIEQBSBABSBIAUAYAUASBFACBFAEgRAEgRAFIEwGWv7lWkPMAwDF9nkSrHNqVn4Dl8gSTEIglJmZQiIoo2I2IjWNqJNrrMqqD77e7Miu7O7FgOwsi6yPoD99U/zQsvd0pRkqQUJUlKUZIkpShJUoqSJClFSZJSlCRJKUqSlKIkSUpRkqQUJUlSipIkpShJklKUJClFSZKUouTzLNllxitWNla8YsYuq85kY80RM2bMWZ9nuGDGjAXrTplSlO/Kkn1GFpw6w4qRkTkrX+o1l5hwmX0be1xmwiXeuCjv2WfkiLVPmjNyyKnt1rxlZOTYxVpynwkTbnJ8nuFtJky4y4mNE0ZGFpz2DylF+Sae8zsD1zlwhj0GBv7jwJc65h5THrC0ccIDptzjxEV5wj8MXGVpuyV/MvA3r213xA0G/uKpi7XmJVOmPOf0PMMdpkx58fHwGb8ycJPD/iGlKN/EDlcYuMWhM+wzMPA/cz+2A64y8BvvbDfjFwau8Mh2B/zLwDX2/Hh2+IOBOyz6h5Si5Gv6mZ/AY3Zt95C3YP6BfTtmbTIAAjD8JEZdHMSKJlCoOigubg6FxiGD6KCDCB0ytaODipMu7kKxUPsD4pZZx6pTq6aUaqmKVOtmQNoSNKaQkljnfGQItLSE3vMbDl7u4Hivi23W+ADOkNN/UmRAmlSMRYgUhbCXTjPEEZos6e4VLdCgQl3SP1apgUFO6T9pMiAVKQqRohD22FEucQJUdLHOO1pkaFPlh6Q2n8AAFzim/6Q5FFtRiBSFsF8uMgBmdLFMDYyCdT5LarMABjlPKg50IVIUwr7b4huT3GKYa9znJQ22d/shqcQ4Ba5Q5BkrbNG7cxwHy/yUVKEOimT5xTwtHTaZA1mGJDX5yhRF8hQYp0SVli6WeMJTXvOXGe6Q5wabetLiO9OMMsx1HjFLM7aiECkKB8QG0xR4wAs+8oYpbnKbRdrs3B+eM8IYJd4yT5m75JlgQ6+ynOUwWNShwSx1TnKZqzRZparDF2qkyZHTYY0JCtyjzAJzlBhjhBK/Ja3wkMeUmeQ/+3YXWmUdB3D8c/ac1WqtNnJBbRlooWZqNMyEpWLaalnRLnpjtaC7wCAi0FovQlE3xVKXa/TmhEYhUYuIXkFaoBNFdL5OfAE9vgx1vuLO2dm88uLAw/Hgbob8P/zun7vny4////8iq+jmD4Zc2TnW0sBifqSHf/iEepZwSLwEUfitBCFFwbVhgI95k34m8xSv8iyzuIk/eYOdRussrbzGAaqZTyNNPMpETvIOzfQrSMRDlIH1cvSRYpgGyqlF3HHRZlDBNEoBcIplNHOCu3mMJhqZRxX7eYsvOC1Gmr9ZBaZSQw0R+aX5i/fZRjkPUM/zzGc8nXSErSgIKQqubVm+o4XreYTlrGElq+ngZYbZRDvnRveVX2ghzWQ+opOv+JJOPmU2RXxDO4MKMp1S8C9DANhKP6gjYgYVHGQ7WQB0g3HcB4Ah2mnlOmr5jO9p42t+4EMmMUAbXWSQK0OKOy7najVtlMhnhAN8zh7G8Qrf8hMd/EorjzOYZysKN+iCkKJgjOilhWV5Z4V4u1nOMBN4mwWUgoh7aGYKF1jH9tE9xuzgBCU000glQDlP8x63kWEN2xRkEjeDHRwFuMgm+qlkJgmqmMlJdnIG4Dz/gXImAmAXK0E1S1jELQCVNPEuZRxmLQfFGM9SXmcOU5lBJJ8s6+gmYiGLmU4xuJGHWco88RJhKwpCioKxlqIP8s4K8bo4TJJFzCIhx+28BI6w0dX7n11kWcgzFCHXXBoYIUWXgtzKNCIy9AKk6GOQuVSCMh5khH2kAPo4RpI7qQLAzxwnyRPMISFHgidZQJYt9CBXMTXUUaJQGX4jSzX13CVHEROYLV6CopCiIKQoGCMquJf7884UMdL8ToZi6kiKUQtO0Uva1ciwgWPgOW4Qo5gXwHl6GHBlEbUkybIZYC+X2LmbF6vKOA7gn/syc69zZxrnxVR0MWph45hOWEKYUZZGBUWL/oaIiILWRi1aRZuKghYRtIikclMLoUXaixK+wFA6muOo5VsyDs7YvN57T6u7OHDOcOeOwow8H367A4dzHn6cL+ecH88/4AnyoIV+igxyAeA4KLGNIsAUB5ilmRcpSFDiBXCZASbE5Ommlfrd4mewLuUVKk9RsmwYWwhCFAWLx2N8xv456xMJRrhKRIVjfJFUR1DbBXxCI25ylRnwkFRbyVNllOvqso0cZQ5RpcIAw5R4hBzIs55N/M0ppsCvoBS/nutcIyJLnyS1QznK/MsY4jLm5xqjoItVUoR/RUGIomDxK7GWnjlrjQRjlME0b/NqUu0FmGFKIyaZAlghVRurwQzj6rKZIlWGucwIg9xiB2vIAKyknzKnGa1NrKGFXtSMUwZZOiXL0E4XmGDKQt0kAkVKUoQPdMHtlg9LECweZSKQoUmqJlDQoApVgGakWwYiKurSytPsY4IzdDAEtTnvmk4eIFMbrrvBDbKsY23SaqBJqiyF2H0tyCxAjqwUYWwhCG9FwV2sQBaU+J3BOetjVmhEkWaAm1KVuQLylNRrF5jgJEOcosAWWlBTpI8eBjjPH1TIs4ssakrkQMS4VFOMgGUULFQbwAzT5qeJLlbSFp4sQYiiYOlaThFERKyZs7rIaUQr7eTAWakuMA5a6FCv7WCSEwxyjX7uJy+mh14mOcUAVXI8LKaTVjJUOS9ZlYtMkKGdkoXqpgjGGDU/q3iDj3ieYujmIERRsER10EuOMj8RuSNa6aMdHCCS7EdQ4D5WqNdGVjHNMU6Cfu5F3Go2kOVPjlKhhT4xHdTmIBwkkqDML+AeNtBmobrZAi4xJEFEJFkHe3iZrTSHbg5CFAVLVI6XaGKWfZxDyg7WA1Q1bidrwdecluASn4PlPEdevVp4iirD/EaRPjoQ184mOjnCcapsZSXiaqvhWy5KcJZvwEa2k7NQTTwLznGIMcSNciZ0ahCiKLi77eFRqhzlfYbFVPiBN3mHwxq3mWdo5QJ7GRJzhQ84QY6dPGl+HgfjXGQ9vRRShrB7OMcIEbvJJp1qD1WO8yGXxZznXf6ind08iNsURRsY5zsOMImaG3zJ95LNcpaDXKIaWjkIURQsXd28Rw//8RWv82ltK5r9vMZbHOYKJY0r8Qo7yPqffft5saoO4DD8OBaUqUQZSj+gRrKwEBENFwm18H+IUBNSCyEXRiVFNNQiiCCpVYiarSRcFAMlkUhgCBK0qkRDchNuQpnUKcymZZR30ehMOPQ+fJb38oVzz+WFezlG2cy7fMFhdvMse7nEEl7kdpOzCkwwwYPca7DF3MVlJsBqA8zndZZynr1sYw+HOcR7rOcTbmQN65lnCsxiKU9zM8d5hZf5iM/YzWZ2csZgJ3ierbzNT93KKUWZ0R5hH8sZ43NeZR1PspV9nGI1b/GQa3IfO1nLb3zJCBvZwA4+5RzL2M0KkzbMEjDEYu402EKWcguYw3KDPcweVnKWUV5iA0/xGl/xO2t5k/tNmbmsYxM3cJJdbGMTOxjlNjYyxz9NcJqDfMcRfu4+Ts8VZUabzaOM8iH7OAGARWzhGRYx5JoM8QAH2M/7fM1ZgCVsYDMLruqUm1jDCe5hBXMMNpuVLOQUj3GrwYZYxcd8cMXVWMEWnmA+s0yZWdzNCMt4h+NcAHPZwnN8y0EuXvGuxTzOIVazqPs4kzI2Nn79bNeuPQsW3IGRkTfGxsbbTNkE07SL/MBRjvA9v07PKZc4zTGOcpJxJq7LXeQkRznGj1ye/hMvcJwjfMO5f/H685z5+8f0x7z5fUFm0LZvfwHDw8P79x/4L88tRW1qUtTaXytFpWiS6we6JEn/FSVJSlGSJKUoSVKKkiQpRUmSUpQkSSlKkpSiJElKUZKkFCVJUoqSJKUoSZJSlCQpRUmSlKIkSSlKkqQUJUlKUZIkpShJUoqSJClFSZJSlCRJKUqSlKIkSUpRkqQUJUlSipIkpShJklKUJClFSZKUoiRJKUqSpBQlSUpR/vd+GRvvIiS5akNdgiRJKUqSP9mrAwEAAAAAIP/XRpjQiqpqRVWtqKpWVNWKqmpFVa2oqlZU1YqqakVVraiqVlTViqpqRVWtqKpWVNWKqmpFVa2oqlZU1YqqakVVraiqVlTViqpqRVWtqKpWVNWKqmpFVa2oqlZU1YqqakVVraiqVlTViqpqRVWtqKpWVNWKqmpFVa2oqlZU1YqqakVVraiqVlTViqpqRVWtqKpWVNWKqmpFVa2oqlZU1YqqakVVraiqVlTViqpqRVWtqKoVVdWKqlpRVa2oqhVV1YqqWlFVraiqFVXViqpaUVWtqKoVVdWKqlpRVa2oqhVV1YqqWlFVraiqFVXViqpaUVWtqKoVVdWKqlpRVa2oqhVV1YqqWlFVraiqFVXViqpaUVWtqKoVVdWKqlpRVa2oqhVV1YqqWlFVraiqFVXViqpaUVWtqKoVVdWKqlpRVa2oqhVV1YqqWlFVraiqFVXViqpaUVWtqKoVVdWKqlpRVa2oqhVVtaKqWlFVK6qqFVW1oqpaUVUrqqoVVbWiqlpRVSuqqhVVtaKqWlFVK6qqFVW1oqpaUVUrqqoVVbWiqlpRVSuqqhVVtaKqWlFVK6qqFVW1oqpaUVUrqqoVVbWiqlpRVSuqqhVVtaKqWlFVK6qqFVW1oqpaUVUrqqoVVbWiqlpRVSuqqhVVtaKqWlFVK6pK+3VswiAUhWHUIjsHOyEjCGktUgQnECtxBC10D0FsRRttbZ6K5+fMcD+uSZGZmUmRmZmZFJmZmRSZmZndJEVt2+T5H4CQ+r6Tom1lWcTxG4CQ6rqKztgruuTGdZ5WM7NHbBimS0nTb5J8ADhLlv0CX/4lRQCwJ0UASBEASBEAUgQAUgSAFAGAFAEgRQAgRQBIEQBIEQBSBABSBIAUAYAUASBFACBFAEgRAEgRAFIEAFIEgBQBgBQBIEUAIEUASBEASBEAUgQAUgSAFAGAFAEgRQBw0AxE4nKw8dxXowAAAABJRU5ErkJggg==)

Now, let's build a new `Alerting` wrapper component, with the goal of alerting the user when a component beneath it is pressed, using [experimental pointer events](/blog/2022/12/13/pointer-events-in-react-native). For clarity, the background of this component is made blue. That might look something like the component below:

Container.jsx

```

function Alerting({children}) {
return (
\<View
style={{backgroundColor: 'blue'}}
onPointerDown={() => alert('Hello World!')}>
{children} </View>
}

function Container() {
return ( <View style={styles.container}> <Alerting> <Widget /> </Alerting> </View>
);
}

```

This doesn’t do quite what we want it to. `Alerting` adds a new layout box, with its own bounds, separate from the child `Widget`. Depending on the styling of the element it is wrapping, this may result in significant visual and functional changes. In this example, the blue background responds to taps with an alert when we want for only the red "Hello World" box to alert when tapped.

![before display contents](/assets/images/0.77-display-contents-2-593d0e47100de84ddad130e44df8e29b.gif)

If we try this again, while setting `display: contents` on the `View` wrapper of `Alerting`, we only see alerts when the user presses within the original bounds of the `Widget`. This is because `Alerting` no longer adds its own box, but can still observe the pointer events bubbled from `Widget`.

Container.jsx

```

function Alerting({children}) {
return (
\<View
style={{display: 'contents'}}
onPointerDown={() => alert('Hello World!')}>
{children} </View>
);
}

// ... function Container ...

```

![after display contents](/assets/images/0.77-display-contents-3-84116bf7857e21e84bca5890a2d9e00c.gif)

#### Box sizing[​](#box-sizing "Direct link to Box sizing")

The `boxSizing` prop defines how the element's various sizing props (`width`, `height`, `minWidth`, `minHeight`, etc.) are computed. If `boxSizing` is `border-box`, these sizes apply to the border box of the element. If it is `content-box` they apply to the content box of the element. The default value is `border-box`, this is different from the default value on the web. The [web documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) is a good source of information if you wish to learn more about how this prop works.

warning

`border-box` has been the default forever at this point, and has been the only `boxSizing` value up until we added `content-box`. Changing the default would have been a breaking change that would suddenly break several layouts. We decided to keep `border-box` as default value to ensure backward compatibility.

To understand the difference between `border-box` and `content-box`, have a look at these example, where both `View`s have `padding: 20` and `borderWidth: 10`. When using `border-box`, we consider border and padding for the sizing; when using `content-box`, we consider only the content for the sizing.

![after display contents](/assets/images/0.77-border-box-cfc6104410ab403e0f7b4809fb2087fe.png)

#### CSS mixBlendMode[​](#css-mixblendmode "Direct link to CSS mixBlendMode")

The `mixBlendMode` prop lets you control how an element blends its colors with the other elements in its **stacking context**. Check out the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) for a full overview of each blending function.

To help have more granular control about what is blending together, we also added the `isolation` property. Setting `isolation: isolate` on a `View` will force it to form a **stacking context**. So, you can set this on some ancestor `View` to ensure that some descendent `View` with `mixBlendMode` does not blend beyond the **isolated** `View`.

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

![blend mode](/assets/images/0.77-blend-mode-434273fec000ab313596eb9c0b4c856b.png)

#### Outline props[​](#outline-props "Direct link to Outline props")

We’ve also introduced `outlineWidth`, `outlineStyle`, `outlineSpread` and `outlineColor`. These outline props work very similar to the respective `border` props, but it is rendered around the **border box** as opposed to around the **padding box**. These props allow to highlight elements by drawing their outline without affecting their layout.

Check out the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/outline) for more details.

![outline props](/assets/images/0.77-outline-props-4f2aec2904024a80275f98a9f2bb7b92.png)

### Android version 15 support & 16KB page support[​](#android-version-15-support--16kb-page-support "Direct link to Android version 15 support & 16KB page support")

#### Forced edge-to-edge on Android 15[​](#forced-edge-to-edge-on-android-15 "Direct link to Forced edge-to-edge on Android 15")

We’ve already done some work to support Android 15 on the prior release. One of the noticeable changes in Android 15 is forced edge-to-edge display when you build apps with `targetSdk` 35.

If you have not looked into this yet, please refer to our prior [recommendation](https://github.com/react-native-community/discussions-and-proposals/discussions/827) on how this should be handled as ignoring this can potentially break your UI in the app.

note

If you are using the [`react-native-safe-area-context`](https://www.npmjs.com/package/react-native-safe-area-context) in your app, the library is already handling the forced edge-to-edge for you.

#### 16 KB page size support for Android[​](#16-kb-page-size-support-for-android "Direct link to 16 KB page size support for Android")

Android 15 introduces support for 16KB memory page size enabling [performance improvements](https://developer.android.com/guide/practices/page-sizes#benefits) for apps and more, but making previous 4KB-based apps potentially incompatible on future devices; it's currently an opt-in feature for developers to test on select devices to prepare for 16 KB page size being the OS default.

With the 0.77 release, React Native is ready to fully support 16 KB page size and developers will be able to test and ship apps for 16 KB devices using it.

Please refer to [the official Android Developers site](https://developer.android.com/guide/practices/page-sizes) for further information on 16 KB support.

### Community CLI and Template Updates[​](#community-cli-and-template-updates "Direct link to Community CLI and Template Updates")

#### Community CLI: react-native init deprecation[​](#community-cli-react-native-init-deprecation "Direct link to Community CLI: react-native init deprecation")

This version fully completes the deprecation of the `react-native init` command that was [introduced in React Native 0.75](/blog/2024/08/12/release-0.75.md#sunsetting-react-native-init).

As a reminder, you won’t be able to use the `react-native init` command anymore, but you’ll have to either:

* [Use a framework](/blog/2024/06/25/use-a-framework-to-build-react-native-apps.md) such as Expo, with its own dedicated command to create a new project: `npx create-expo-app`
* Invoke the Community CLI directly with `npx @react-native-community/cli init`

#### Community CLI: Removal of "run on iOS/Android" key handlers from Metro[​](#community-cli-removal-of-run-on-iosandroid-key-handlers-from-metro "Direct link to Community CLI: Removal of \"run on iOS/Android\" key handlers from Metro")

In this version, we removed the ‘a’ and ‘i’ keyboard shortcuts from Metro. Those shortcuts were used to invoke the `run-android` & `run-ios` community CLI commands. Those keyboard shortcuts provided worse developer experience and were rarely used. Moreover, we believe that frameworks are better suited to orchestrate the terminal outputs.

You can read more about this change [in this dedicated post](https://github.com/react-native-community/discussions-and-proposals/discussions/821).

#### Community Template: Swift as programming language for iOS apps[​](#community-template-swift-as-programming-language-for-ios-apps "Direct link to Community Template: Swift as programming language for iOS apps")

info

Projects using Expo should not be affected by this change.

This change let us slim down the community template by replacing three files (`main.m`, `AppDelegate.h` and `AppDelegate.mm`) with a single, new [`AppDelegate.swift`](https://github.com/react-native-community/template/blob/main/template/ios/HelloWorld/AppDelegate.swift).

This is technically a breaking change: you’ll see the change from Objective-C to Swift in the upgrade helper like this:

![Swift Upgrade Helper](/assets/images/0.77-swift-upgrade-helper-abe4ca2c5be24c5d4f7612250042b077.png)

You don’t have to migrate to Swift: the Objective-C++ variant of the iOS community template is still supported (note that you still need to integrate the [`RCTAppDependencyProvider`](#rctappdependencyprovider)). New projects will be generated by using Swift as the iOS app language, although you can always migrate back to Objective-C if you need to.

##### Limitations[​](#limitations "Direct link to Limitations")

If your app has some local modules that are written in C++, you would not be able to register them in Swift as shown in [this guide](/docs/next/the-new-architecture/pure-cxx-modules#3-registering-the-cxx-turbo-native-module-in-your-app).

If your app falls in this category, please skip the migration of the AppDelegate to Swift, and keep using Objective-C++ for your app.

React Native core is mostly developed using C++ to encourage code sharing between iOS and Android and other platforms. The interoperability between Swift and C++ is not mature nor stable, yet. We are looking into ways to fill this gap and let you migrate to Swift too.

##### RCTAppDependencyProvider[​](#rctappdependencyprovider "Direct link to RCTAppDependencyProvider")

React Native 0.77 slightly changes how the app loads third party dependencies. This is a new line in the community template that, if missed, can cause some runtime issues. Make sure to add it to your app.

The equivalent Objective-C lines are the following:

AppDelegate.mm

```

\#import "AppDelegate.h"

\#import \<React/RCTBundleURLProvider.h>
\#import \<ReactAppDependencyProvider/RCTAppDependencyProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication \*)application didFinishLaunchingWithOptions:(NSDictionary \*)launchOptions
  {
  self.moduleName = @"<Your app Name>";
  self.dependencyProvider = \[RCTAppDependencyProvider new];
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return \[super application:application didFinishLaunchingWithOptions:launchOptions];
  }

// remaining of the AppDelegate

```

## Breaking Changes[​](#breaking-changes-1 "Direct link to Breaking Changes")

### Removal of `console.log()` streaming in Metro[​](#removal-of-consolelog-streaming-in-metro "Direct link to removal-of-consolelog-streaming-in-metro")

We want every aspect of React Native debugging to behave reliably and to match the functionality of modern browser tooling. To meet this quality bar, log forwarding via Metro, originally deprecated in 0.76, is removed in 0.77.

This integration relied on a custom approach to communicate with the debugging target on device. With this change, we are moving exclusively to the Chrome DevTools Protocol (CDP).

* To view JS logs, please use [React Native DevTools](/docs/react-native-devtools.md) and its fully featured Console panel — supporting log filtering, rich object inspection, Live Expressions, and more.
* You can also connect VS Code as a CDP debugger, via third party extensions such as [Expo Tools](https://github.com/expo/vscode-expo) and [Radon IDE](https://ide.swmansion.com/).
  
  * Please note that these integrations are not directly supported by the React team. However, we are working on first party VS Code support in 2025.
* Expo continues to offer log streaming in Expo CLI.

For more info, see [*Why are JavaScript logs leaving Metro?*](https://github.com/react-native-community/discussions-and-proposals/discussions/819#:~:text=Why%20are%20JavaScript%20logs%20leaving%20Metro%3F)

### Other Breaking Changes[​](#other-breaking-changes "Direct link to Other Breaking Changes")

#### General[​](#general "Direct link to General")

* Animation
  
  * Native looping animation do not send a React state update every time the loop ends.

* Layout

  

  * `position` of sticky headers on `ScrollView` will now be taken into account.
  * Absolute positioning is now behaving in a more compliant way

* JS Modules:
  
  * Remove `ReactFabricInternals` module
    
    * This is not going to be accessible anymore

* Native Modules
  
  * `NativeModules` object can now be used to load turbomodules in JS .
    
    * This improves compatibility between Native Modules and Turbo Native Modules

* Packages
  
  * dev-middleware: Frameworks should specify `serverBaseUrl` relative to the middleware host

* API Changes:

  

  * Removed type for `useConcurrentRoot` from `AppRegistry`, as it was already ignored
  * Removed `refs` property from `NativeMethods` TypeScript definition.

* UX Changes:
  
  * Remove "run on iOS" and "run on Android" from the dev server key commands

#### Android[​](#android "Direct link to Android")

* Kotlin
  
  * This is the first version of React Native that builds against Kotlin 2.0.21. You can read more about the changes coming with Kotlin 2.0 on the [language release notes](https://kotlinlang.org/docs/whatsnew2020.html).

* API Changes:

  

  * Nullability:

    

    * Non-primitive getters in `ReadableArray` are now correctly typed as optional
    * Make `ReactHost.createSurface()` method non nullable

  * Renamed:
    
    * `DevSupportManagerBase.getCurrentContext()` to `DevSupportManagerBase.getCurrentReactContext()`

Additionally, several APIs have been removed or restricted in visibility, so they can’t be accessed anymore. Those APIs were internal and not needed to React Native developers directly. You can find the full list below:

List of Removed Android APIs:

The following packages are now internal and can’t be accessed anymore:

* `com.facebook.react.views.progressbar`
* `com.facebook.react.views.safeareaview`
* `com.facebook.react.modules.accessibilityinfo`
* `com.facebook.react.modules.appstate`
* `com.facebook.react.modules.clipboard`
* `com.facebook.react.modules.devmodule`
* `com.facebook.react.modules.reactdevtoolssettings`
* `com.facebook.react.views.unimplementedview`

The following classes are now either internal or have been removed, so can’t be accessed anymore:

* `BackHandler.removeEventListener`
* `BaseViewManagerInterface`
* `BindingImpl`
* `CompositeReactPackage`
* `DebugOverlayTags`
* Method `create()` from `DefaultDevSupportManagerFactory`
* `DevToolsReactPerfLogger`
* `FabricComponents`
* `ImageStoreManager`
* `InteropModuleRegistry`
* `NativeModulePerfLogger`
* `NoopPrinter`
* `NotThreadSafeViewHierarchyUpdateDebugListener`
* `OkHttpCallUtil`
* `PrinterHolder`
* `Printer`
* `ReactDebugOverlayTags`
* `ReactNativeFlipper`
* `ReactViewBackgroundManager`
* `ReactViewGroup.getBackgroundColor()`
* `ReactVirtualTextShadowNode`
* `ReactVirtualTextViewManager`
* `SimpleSettableFuture`
* `SwipeRefreshLayoutManager`
* `TaskCompletionSource`
* Parameter `jsBundleLoader` from DefaultReactHost.getDefaultReactHost()

#### iOS[​](#ios "Direct link to iOS")

* API Changes

  

  * Removed

    

    * `RCTConstants.RCTGetMemoryPressureUnloadLevel`
    * `partialBatchDidFlush`
    * `RCTRuntimeExecutor`
    * `UseNativeViewConfigsInBridgelessMode`
      * Replaced by a proper feature flag
    * `UseTurboModuleInteropForAllTurboModules`
      * Interop layer is always on for TMs

  * Changed
    
    * Replace uses of `CGColorRef` with `UIColor`

* `RCTAppDelegate` now requires to use the `RCTDependencyProvider` to load third party dependencies

* CocoaPods sets C++ version for all the 3rd party dependencies to avoid compilation issues.

**React 19?**

React 19 was released the 6th of December 2024. At the time, we already cut the branch for React Native 0.77 and we already released three RCs for React Native 0.77. It was too late in the release of React Native 0.77 to introduce React 19 in this release.

React 19 will be shipped in React Native 0.78, and we already cut the branch for this version. You can try it by creating a new app with the command:

```

npx @react-native-community/cli init YourReact19App --version 0.78.0-rc.0

```

## Acknowledgements[​](#acknowledgements "Direct link to Acknowledgements")

React Native 0.77 contains over **1061** commits from **161** contributors. Thanks for all your hard work!

Thanks to all the additional authors that worked on documenting features in this release post:

* [Jakub Piasecki](https://github.com/j-piasecki) for contributing to the `display: contents` feature
* [Nick Gerleman](https://github.com/NickGerleman), [Joe Vilches](https://github.com/joevilches) and [Jorge Cabiedes Acosta](https://github.com/jorge-cab) for releasing the new styling features
* [Alan Lee](https://github.com/alanleedev) for the Android 16Kb page support content
* [Riccardo Cipolleschi](https://github.com/cipolleschi) and [Oskar Kwaśniewski](https://github.com/okwasniewski) for supporting the migration of the template to Swift
* [Nicola Corti](https://github.com/cortinico) for the `react-native init` deprecation cycle content
* [Alex Hunt](https://github.com/huntie) for the content on the removal of `console.log` from metro

### Upgrade to 0.77[​](#upgrade-to-077 "Direct link to Upgrade to 0.77")

Please use the [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) to view code changes between React Native versions for existing projects, in addition to the Upgrading docs.

To create a new project:

```

npx @react-native-community/cli@latest init MyProject --version latest

```

If you use Expo, React Native 0.77 will be supported in Expo SDK 52 (instructions on how to update React Native inside your Expo project to 0.77.0 will be available in a separate Expo blog post in the near future).

info

0.77 is now the latest stable version of React Native and 0.74.x moves to unsupported. For more information see [React Native's support policy](https://github.com/reactwg/react-native-releases/blob/main/docs/support.md#releases-support-policy). We aim to publish a final end-of-life update of 0.74 in the near future.

**Tags:**

* [engineering](/blog/tags/engineering)


---

# React Native Core Contributor Summit 2024 Recap

February 3, 2025 ·



10 min read

![Michał Pierzchała](https://github.com/thymikee.png)

Michał Pierzchała

Head of Technology @ Callstack

[](https://x.com/thymikee "X")[](https://github.com/thymikee "GitHub")

![Szymon Rybczak](https://github.com/szymonrybczak.png)

Szymon Rybczak

Software Engineer @ Callstack

[](https://x.com/szymonrybczak "X")[](https://github.com/szymonrybczak "GitHub")

![Mo Javad](https://github.com/mojavad.png)

Mo Javad

Head of Mobile (UK) @ Theodo

[](https://x.com/mo__javad "X")[](https://github.com/mojavad "GitHub")

![Steven Moyes](https://github.com/stmoy.png)

Steven Moyes

Senior Product Manager @ Microsoft

[](https://x.com/moyessa "X")[](https://github.com/stmoy "GitHub")

Every year, the core contributors in the React Native Community get together with the React Native team to collaboratively shape the direction of this project.

Last year was no different—with small exception. We usually meet a day before [React Universe Conf](https://www.reactuniverseconf.com) (formerly React Native EU) at [Callstack](https://www.callstack.com/open-source) HQ in Wrocław. In 2024, learning from past experiences, we hosted the Summit for two consecutive days, so that we can have more unstructured time together.

![all-participants](/assets/images/react-native-core-contributor-summit-2024-1-fd96c5042217025035a569cf7ceea4e5.jpeg)

This annual tradition has become a valuable opportunity for contributors to share insights and voice their concerns, and for the core team to share their plans and gather feedback from key contributors to the React Native ecosystem—including partner companies, individual library authors and friends.

We divided the Summit into two tracks covering following topics:

* [Releases](#releases)
* [What's next after the New Architecture?](#whats-next-after-the-new-architecture)
* [Web APIs spec for Native Modules](#web-apis-for-native-modules)
* [LeanCore 2.0](#leancore-20)
* [Nitro Modules - Unblocking View Components by exposing props as jsi::Values](#nitro-modules---unblocking-view-components-by-exposing-props-as-jsivalues)
* [Out Of Tree Platforms & CocoaPods](#out-of-tree-platforms--cocoapods)
* [React Native on Desktop](#react-native-on-desktop)

In this blog post, we’d like to give you a sneak peek of the results of this gathering.

## Releases[​](#releases "Direct link to Releases")

We had an extensive discussion about the release process for React Native. Core Team appreciates the value of having contributors from outside Meta involved in releases and emphasizes the importance of having nightly releases, which are particularly beneficial for Out-of-Tree platforms like React Native visionOS, library maintainers (Reanimated) and frameworks (Expo). We discussed the frequency of releases, with some folks asking for more frequent releases to ship fixes faster, while others expressed concerns about the impact on 3rd party libraries and upgrading efforts.

We also brainstormed ways to reduce unintentional breaking changes and improve communication about compatibility between React Native and 3rd party dependencies.

This session showed how complex it is to manage releases for React Native, and how delicate this topic is, given all the different parts of the ecosystem that need to be considered.

## What's next after the New Architecture?[​](#whats-next-after-the-new-architecture "Direct link to What's next after the New Architecture?")

Now that the New Architecture has shipped as stable, we discussed what we should focus on next. What could be the next big thing? The topics revolved around:

* **Web compatibility** – concluded in the discussion around direction of the React Strict DOM project, which should be treated as a temporary polyfill, while the Xplat team implements proper cross-platform functionality into the core of React Native.
* **Stabilizing the core API** – turned out we need more consensus on what this means for app developers, library authors, Out-of-Tree platforms. E.g. it may be necessary to extract platform-native logic for iOS and Android from the shared C++ codebase. Part of which was covered by the LeanCore 2.0 discussion.
* **Old architecture support** – as expected, the team confirmed that new React 19 features based on concurrent rendering, won’t work in old architecture. New features are primarily targeted for the new architecture. Due to blockers in React 19 release schedule it’s still not clear where to draw the line between functionality supported by both new and old architecture.
* **3rd party libraries for React Native** – today we library authors can use TurboModules, ExpoModules, recently NitroModules to achieve the same goal of bridging native platform functionality. We need better documentation on how to make it well.
* **Brownfield docs** – at the time of the summit, the official documentation for integrating React Native into native apps was quite dated. Since then the team has followed through with up-to-date and simpler docs for Android and iOS.
* **Tree-shaking for Metro web** – core Metro team is open to merge the work from the Expo team in this area.

## Web APIs for Native Modules[​](#web-apis-for-native-modules "Direct link to Web APIs for Native Modules")

This session was dedicated to Microsoft's RFC revolving around the idea of bringing a subset of Web APIs to React Native. It aims to enhance React Native’s scalability and attract more web developers by leveraging familiar APIs. Opening access to a wealth of existing open-source web libraries that don't have explicit React Native support.

![web-apis](/assets/images/react-native-core-contributor-summit-2024-2-139b7ce3d6c35e06c8dc1c9dd1ecaada.jpeg)

Standardizing on Web API specifications is not only beneficial but also essential for React Native growth, and aligns well with our Many Platforms vision and react-strict-dom project. The web offers a unified interface through its specifications, which React Native community modules currently lack. Microsoft has identified around 200 essential Web APIs that could be implemented first for platforms they support: iOS, Android, Windows and macOS.

We encourage library developers to align their APIs with web specifications whenever possible, as this standardization will improve code portability and developer experience across platforms.

While the proposal seems beneficial for the future of React Native, we're still brainstorming the next steps forward. One concern we noticed is governance of the APIs, and whether they’d need to live in a separate repository from the platform implementations. Another around diverging from the official specification in case a specific platform allows for behaviors not specified by the W3C. We would need to figure out how to avoid bundling unnecessary modules, e.g. with a Babel plugin. Not to mention the scope of such initiative is quite large.

The session conclusion reinforced two key points: First, there is strong alignment across the React Native community on adopting web-compatible specifications where possible. Second, we need to establish a clear technical strategy for how these Web API implementations can be maintained separately for different platforms. Microsoft together with Callstack could work on refining the original RFC and produce a proof of concept implementation for a smaller number of APIs as a community initiative. This incremental approach will help us validate the design and developer experience before expanding the scope.

## LeanCore 2.0[​](#leancore-20 "Direct link to LeanCore 2.0")

In 2019, the React Native team started the Lean Core initiative. The goal was to tackle the surface area of React Native’s core and reduce APIs and components that were outdated and legacy. Since then, the React Native components and API surfaces have been long overdue another round of clean up.

Today, there are many components that are not actively being maintained with better community alternatives. Additionally, there are components that have duplicates that should eventually be consolidated for maintainability.

On the API side, a lot of the JS layer APIs are tied to native iOS & Android implementations, rather than being truly platform agnostic. For example, with Pressable, we have props like `android_disableSound` and `android_ripple`. Ideally, React Native components should have the smallest possible API surface that is not tied to any specific platform.

As Out-of-Tree platforms are growing and being adopted more by the ecosystem, there needs to be a path to reduce the component and API surface of React Native core, reducing the load on the React Native core team, and also making it significantly easier for Out-of-Tree platform & library maintainers to stay up-to-date.

As an added bonus, this would make it easier for beginner app developers to pick up React Native, as there are less duplicated components and "gotchas" for them to learn. Where there is a better community alternative, developers can be signposted and encouraged to use the community alternatives available.

During the session, we discussed:

* The high level motivations of Lean Core and the benefits to the parties involved (developers, library maintainers, Meta)

* An aggregated view of what components are being used in some real-world production React Native apps

* The criteria of what is a candidate to be removed from core

* A clear action plan for executing Lean Core 2.0 with:

  

  * The high-level process for deprecation
  * Handling cases where Meta is using components internally that have better community alternatives,

As a next step, a group of the core contributors will look at collecting more telemetry and data, assessing community alternatives, and putting together an RFC detailing the proposed changes.

## Nitro Modules - Unblocking View Components by exposing props as jsi::Values[​](#nitro-modules---unblocking-view-components-by-exposing-props-as-jsivalues "Direct link to Nitro Modules - Unblocking View Components by exposing props as jsi::Values")

Recently, Marc Rousavy introduced Nitro Modules as an alternative approach to creating Native Modules. Nitro Modules utilize experimental C++ Swift Interop and incorporate a bunch of enhancements that can lead to improved performance in certain scenarios. However, during this session, we discussed the various trade-offs involved between Nitro Modules and existing TurboModules.

While Nitro Modules offer some performance benefits, they also have limitations and considerations that need to be addressed. For example, the use of experimental interop features might introduce complexity or compatibility issues that are not present in TurboModules. Our discussion focused on these trade-offs and the potential for upstreaming some of Nitro Modules' improvements into React Native Core, which could allow developers to benefit from more performant modules for everyone.

## Out-of-Tree Platforms & CocoaPods[​](#out-of-tree-platforms--cocoapods "Direct link to Out-of-Tree Platforms & CocoaPods")

Out-of-Tree Platforms presents the full power of React Native, where we can share one JS codebase between different platforms running on our mobile devices, desktops or even on VR/XR devices. Creating such a platform currently isn’t the easiest process, actually there are no guidelines on how things should be created, developed and maintained. Also React Native Core in a way is tied to Android and iOS platforms. In the future we could aim for a scenario where all the platforms are treated equally and integrate with a C++/JS core through the same APIs.

![oot-platforms](/assets/images/react-native-core-contributor-summit-2024-3-bc9dcff91273a72b85b10b8ec6e9d5a3.jpeg)

During this session maintainers of different platforms discussed what are the problems, what they struggle with and what should be the solution to unify the process of creating and maintaining new Out-of-Tree platforms.

Another aspect of this session was to discuss CocoaPods and future plans related to managing native dependencies. Recently the CocoaPods team announced that they’ve moved to maintenance mode and new major improvements or features won’t be shipped. There are various alternatives that could be used and during this session we discussed their pros and cons, and what migration would look like.

## React Native on Desktop[​](#react-native-on-desktop "Direct link to React Native on Desktop")

Steven and Saad from Microsoft, maintainers of react-native-windows and react-native-macos, hosted a session to listen and gather feedback from contributors related to Desktop platforms. Topics discussed included exploring how to increase adoption of React Native for Desktop (such as having a dedicated workflow in Visual Studio, or exposing desktop as part of Nx), as well as how to support Expo, which is a continual pain point for more adoption.

There’s a big discrepancy in availability of community modules between macOS and Windows, largely due to the fact that iOS code is mostly compatible with macOS, while RNW needs bespoke implementations. While working on the New Architecture for React Native for Windows, the team sees potential in C++ modules allowing for even more code sharing across platforms which will hopefully ease the burden of targeting desktop platforms. It’s worth noting that on the community side Software Mansion is working on adding desktop support for their most popular modules, such as React Native Screens, Gesture Handler and Reanimated.

***

We’re still impressed by how spending several hours together for a couple of days resulted in so much knowledge-sharing and cross-pollination of ideas. During this summit, we planted the seeds for initiatives that will help us improve and re-shape the React Native ecosystem.

If you’re interested in joining the development of React Native, make sure you join our open initiatives and read the [contribution guide](https://reactnative.dev/contributing/overview) we have on our website. We hope to meet you in person as well in the future!

**Tags:**

* [engineering](/blog/tags/engineering)


---

# React Native 0.78 - React 19 and more

February 19, 2025 ·



11 min read

![Vojtech Novak](https://avatars.githubusercontent.com/u/1566403?v=4)

Vojtech Novak

Software Engineer @ Expo

[](https://x.com/vonovak "X")[](https://github.com/vonovak "GitHub")

![Shubham Gupta](https://github.com/shubhamguptadream11.png)

Shubham Gupta

Software Engineer @ Dream11

[](https://x.com/sg43245 "X")[](https://github.com/shubhamguptadream11 "GitHub")

![Fabrizio Cucci](https://avatars.githubusercontent.com/u/8156463?v=4)

Fabrizio Cucci

Software Engineer @ Meta

[](https://x.com/fabriziocucci "X")[](https://github.com/fabriziocucci "GitHub")

![Riccardo Cipolleschi](https://github.com/cipolleschi.png)

Riccardo Cipolleschi

Software Engineer @ Meta

[](https://x.com/CipolleschiR "X")[](https://github.com/cipolleschi "GitHub")

Today we are excited to release React Native 0.78!

This release ships React 19 in React Native and some other relevant features like native support for Android Vector drawables and better brownfield integration for iOS.

### Highlights[​](#highlights "Direct link to Highlights")

* [React 19](/blog/2025/02/19/react-native-0.78.md#react-19)
* [Towards smaller and faster releases](/blog/2025/02/19/react-native-0.78.md#towards-smaller-and-faster-releases)
* [Opt-in for JavaScript logs in Metro](/blog/2025/02/19/react-native-0.78.md#opt-in-for-javascript-logs-in-metro)
* [Added support for Android XML drawables](/blog/2025/02/19/react-native-0.78.md#added-support-for-android-xml-drawables)
* [ReactNativeFactory on iOS](/blog/2025/02/19/react-native-0.78.md#reactnativefactory-on-ios)

## Highlights[​](#highlights-1 "Direct link to Highlights")

### React 19[​](#react-19 "Direct link to React 19")

React 19 is now available on React Native!

React 19 requires updating your app, as we introduced some changes from React 18. For example, we removed some APIs such as `propTypes`, and you need to adjust your app to make it compatible with the new version of React.

Follow our step-by-step [instructions to upgrade](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) your app to React 19.

After the migration, you’ll be able to leverage all the new features of React, including (non exhaustively):

* **[Actions](https://react.dev/blog/2024/12/05/react-19#actions):** these are functions that use async transitions. Async transitions automatically manage submitting data for you: they handle pending states, optimistic updates, error handling and more.
* **[useActionState](https://react.dev/reference/react/useActionState):** a utility hook built on top of Actions. It takes a function and returns a wrapped Action to call. When the action is called, it will return the last result of the Action and its `pending` state.
* **[useOptimistic](https://react.dev/reference/react/useOptimistic):** a new hook that simplifies showing the final state of an update optimistically while the async request is underway. If the request errors, React will switch back to the previous value automatically.
* **[`use`](https://react.dev/reference/react/use):** this is a new API that allows access to resources during render. You can now read a promise or a context with `use` and React will Suspend until they resolve.
* **[`ref` as `props`](https://react.dev/blog/2024/12/05/react-19#ref-as-a-prop):** you can now pass `ref` as a `prop` like you do with any other prop. Function components will no longer need `forwardRef` and you can migrate your components now.
* And many others

For a complete list of the new available features, have a look at the [React 19 release blog post](https://react.dev/blog/2024/12/05/react-19).

#### React Compiler[​](#react-compiler "Direct link to React Compiler")

React Compiler is a build-time tool designed to optimize React applications by automatically applying memoization. While developers can manually use APIs like `useMemo`, `useCallback`, and `React.memo` to prevent unnecessary recomputation of unchanged parts of an app, they could also forget or misuse these optimizations. React Compiler addresses this by leveraging its understanding of JavaScript and of the [Rules of React](https://react.dev/reference/rules) to automatically memoize values or groups of values within components and hooks.

With this release, we simplified the process to enable the React Compiler in your React Native apps. [In previous versions](https://react.dev/learn/react-compiler#using-react-compiler-with-react-17-or-18), you had to install two packages: the compiler and its runtime. After those packages were installed, you had to configure a Babel plugin to enable React Compiler through Metro.

Now, you only need to install the compiler itself and to configure the Babel plugin. To learn how to enable it, you can follow our step-by-step [guide](https://react.dev/learn/react-compiler#usage-with-babel).

To verify that the compiler is running, you can open the React Native DevTools: you should see that the components that are memoized have the `Memo ✨` tag attached to them in the Component Inspector.

If you want to learn more about React Compiler, these are useful resources:

* [React Compiler](https://react.dev/learn/react-compiler) docs
* [React Compiler Deep Dive](https://www.youtube.com/watch?v=uA_PVyZP7AI)

### Towards smaller and faster releases[​](#towards-smaller-and-faster-releases "Direct link to Towards smaller and faster releases")

We’re updating our release process to ship stable React Native releases more frequently in 2025.

It will be easier for you to update the React Native version because we’ll be reducing the number of breaking changes we ship. Faster releases also means that all the bugfixes we ship internally are reaching you earlier, and you can benefit from the latest features we develop inside React Native.

We believe this new model will benefit every developer in the React Native ecosystem, as fewer breaking changes means a more stable framework that everyone can rely on.

### Opt-in for JavaScript logs in Metro[​](#opt-in-for-javascript-logs-in-metro "Direct link to Opt-in for JavaScript logs in Metro")

We've added an opt-in to restore JavaScript log streaming via the Metro dev server, [previously removed in 0.77](/blog/2025/01/21/version-0.77.md#removal-of-consolelog-streaming-in-metro) for Community CLI users. This is in response to user feedback, as well as reviewing where we are with our replacement offerings today.

To opt in, use the new `--client-logs` flag. This can also be aliased via an npm script for convenience.

```

npx @react-native-community/cli start --client-logs

```

Log streaming in Metro will still be going away in future and remains off by default. However, we intend to give developers a longer migration period to adapt to this change.

This update will also be made available in the incoming 0.77.1 minor release.

### Added support for Android XML drawables[​](#added-support-for-android-xml-drawables "Direct link to Added support for Android XML drawables")

In React Native 0.78, we’re shipping a new way to load icons, illustrations, and other graphic elements on Android as [XML resources](https://developer.android.com/guide/topics/resources/drawable-resource). This means you can use [vector drawables](https://developer.android.com/develop/ui/views/graphics/vector-drawable-resources) for displaying vector images at any scale without losing quality, or [shape drawables](https://developer.android.com/guide/topics/resources/drawable-resource#Shape) for drawing more basic embellishments. This is all supported by the same `Image` component that you know and love. To use this feature today, you can import XML resources like any other [static resource](/docs/next/images#static-image-resources) by referencing them in the `source` prop. Furthermore, using XML resources rather than bitmaps will also help you reduce your application size and will result in better rendering across screens with different DPI.

```

// via require
\<Image
source={require('./img/my\_icon.xml')}
style={{width: 40, height: 40}}
/>;

// or via import
import MyIcon from './img/my\_icon.xml';
\<Image source={MyIcon} style={{width: 40, height: 40}} />;

```

#### Performance & Quality[​](#performance--quality "Direct link to Performance & Quality")

[Like all other image types](/docs/next/images#off-thread-decoding), Android’s XML resources are loaded and inflated off the main thread so you don’t drop any frames. This means the resource is not guaranteed to display instantly but also does not prevent user input while the resource is loading. Off-thread decoding is especially important when you need to render many icons at the same time. Internal apps realized some significant performance improvements when using Android’s vector drawables.

Utilizing resource types like vector drawables are the perfect way to display images without loss of quality, and can result in smaller APK files since you don't need to include an image type for every screen density. Furthermore, vector drawables are copied from memory once they’re loaded so if you render the same icon more than once they will all display at the same time.

#### Trade-offs[​](#trade-offs "Direct link to Trade-offs")

It’s important to note that drawable XML resources are not perfect, and there are constraints to using them:

* They must be referenced at build time of your Android application. These resources are passed into a build step with the [Android Asset Packaging Tool](https://developer.android.com/tools/aapt2) (AAPT) to convert raw XML into binary XML. Android does not support loading raw XML files, [this is a known limitation](https://issuetracker.google.com/issues/62435069).
* They cannot be loaded over the network by Metro. If you change the directory or name of an XML resource, you will need to rebuild your Android application each time.
* They have no dimensions. By default, they will display with a 0x0 size and you need to provide a width and height for them to show up.
* They are not fully customizable at runtime; you can only control dimensions or the overall tint color but you can’t customize individual element attributes *inside* the resource like stroke widths, border radius, or colors. These types of customizations require different variants of your XML resource.

info

Android’s vector drawables are not a 1:1 replacement for libraries like `react-native-svg`. They are designed specifically for Android and do not work for iOS. If you want to have the same SVGs across all platforms, you'll have to continue using `react-native-svg`. Vector drawables merely offer performance benefits at the expense of customization.

### ReactNativeFactory on iOS[​](#reactnativefactory-on-ios "Direct link to ReactNativeFactory on iOS")

With React Native 0.78 we improved the integration of React Native on iOS.

This version introduces a new class called `RCTReactNativeFactory` that allows you to create instances of React Native without the need of an AppDelegate. This should allow you to create a new version of React Native in a ViewController, for example. This simplifies dramatically the integration with Brownfield apps.

Imagine that you want to show a React Native view in a View Controller of your app. Starting from React Native 0.78, what you need to do, after installing all the dependencies as shown in [this guide](/docs/next/integration-with-existing-apps?language=apple#1-set-up-directory-structure), is to add this code:

```

+import React
+import React\_RCTAppDelegate

public class ViewController {

- var reactNativeFactory: RCTReactNativeFactory?
- var reactNativeDelegate: ReactNativeDelegate?

public func viewdidLoad() {
super.viewDidLoad()
// …

- reactNativeDelegate = ReactNativeDelegate()
- reactNativeFactory = RCTReactNativeFactory(delegate: reactNativeDelegate!)
- view = reactNativeFactory.rootViewFactory.view(withModuleName: "<your module name>")
  }

}

+class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {

- override func sourceURL(for bridge: RCTBridge) -> URL? {
- self.bundleURL()
- }
-
- override func bundleURL() -> URL? {
- \#if DEBUG
- RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
- \#else
- Bundle.main.url(forResource: "main", withExtension: "jsbundle")
- \#endif
- }
  +}

```

React Native will be loaded in the View Controller as soon as you navigate to it.

This code creates an `RCTReactNativeFactory`, assigns a delegate to it, and asks it to create a `rootView` for a React Native’s view.

The delegate is defined below, and it overrides the `sourceURL` and the `bundleURL` properties to tell React Native where it can find the JS bundle to load in the view.

## Other Breaking Changes[​](#other-breaking-changes "Direct link to Other Breaking Changes")

### General[​](#general "Direct link to General")

* React Native DevTools
  
  * Removed FuseboxClient CDP domain
* Codegen
  
  * Separate component array types and command array types

### Android[​](#android "Direct link to Android")

* Nullability changes: migrating `RootView` to Kotlin resulted in changes of parameter types from nullable to non nullable.

* The following classes have been moved from public to internal, or removed, and can’t be accessed anymore:

  

  * `com.facebook.react.bridge.GuardedResultAsyncTask`
  * `com.facebook.react.uimanager.ComponentNameResolver`
  * `com.facebook.react.uimanager.FabricViewStateManager`
  * `com.facebook.react.views.text.frescosupport.FrescoBasedReactTextInlineImageViewManager`

### iOS[​](#ios "Direct link to iOS")

* Change Image load event size info from logical size to pixel (This only affects the Old Architecture)

## Acknowledgements[​](#acknowledgements "Direct link to Acknowledgements")

React Native 0.78 contains over 509 commits from 87 contributors. Thanks for all your hard work!

Thanks to all the additional authors that worked on documenting features in this release post:

* [Dream11](https://github.com/ds-horizon) team for the thorough testing of React 19 features in React Native
* [Nicola Corti](https://github.com/cortinico) for the work on Faster Releases
* [Alex Hunt](https://github.com/huntie) for the work on the Metro logs opt-in
* [Peter Abbondanzo](https://github.com/Abbondanzo) for the work on Android XML Drawable Support
* [Oskar Kwaśniewski](https://github.com/okwasniewski) for the work on the ReactNativeFactory

## Upgrade to 0.78[​](#upgrade-to-078 "Direct link to Upgrade to 0.78")

Please use the [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) to view code changes between React Native versions for existing projects, in addition to the Upgrading docs.

To create a new project:

```

npx @react-native-community/cli@latest init MyProject --version latest

```

If you use Expo, [React Native 0.78 will be supported in a canary release of the Expo SDK](https://expo.dev/changelog/react-native-78).

info

0.78 is now the latest stable version of React Native and 0.75.x moves to unsupported. For more information see [React Native's support policy](https://github.com/reactwg/react-native-releases/blob/main/docs/support.md). We aim to publish a final end-of-life update of 0.75 in the near future.

**Tags:**

* [engineering](/blog/tags/engineering)


---

# React Native 0.79 - Faster tooling and much more

April 8, 2025 ·



11 min read

![Alan Hughes](https://github.com/alanjhughes.png)

Alan Hughes

Software Engineer @ Expo

[](https://github.com/alanjhughes "GitHub")

![Shubham Gupta](https://github.com/shubhamguptadream11.png)

Shubham Gupta

Software Engineer @ Dream11

[](https://x.com/sg43245 "X")[](https://github.com/shubhamguptadream11 "GitHub")

![Fabrizio Cucci](https://avatars.githubusercontent.com/u/8156463?v=4)

Fabrizio Cucci

Software Engineer @ Meta

[](https://x.com/fabriziocucci "X")[](https://github.com/fabriziocucci "GitHub")

![Nicola Corti](https://github.com/cortinico.png)

Nicola Corti

Software Engineer @ Meta

[](https://x.com/cortinico "X")[](https://github.com/cortinico "GitHub")[](https://bsky.app/profile/cortini.co "Bluesky")

Today we are excited to release React Native 0.79!

This release ships with performance improvements on various fronts, as well as several bugfixes. First, Metro is now faster to start thanks to deferred hashing, and has stable support for package exports. Startup time in Android will also be improved thanks to changes in the JS bundle compressions and much more.

### Highlights[​](#highlights "Direct link to Highlights")

* [New Metro Features](/blog/2025/04/08/react-native-0.79.md#metro-faster-startup-and-package-exports-support)
* [JSC moving to a Community Package](/blog/2025/04/08/react-native-0.79.md#jsc-moving-to-community-package)
* [iOS: Swift-Compatible Native Modules registration](/blog/2025/04/08/react-native-0.79.md#ios-swift-compatible-native-modules-registration)
* [Android: Faster App Startup](/blog/2025/04/08/react-native-0.79.md#android-faster-app-startup)
* [Removal of Remote JS Debugging](/blog/2025/04/08/react-native-0.79.md#removal-of-remote-js-debugging)

## Highlights[​](#highlights-1 "Direct link to Highlights")

### Metro: Faster startup and package exports support[​](#metro-faster-startup-and-package-exports-support "Direct link to Metro: Faster startup and package exports support")

This release ships with [Metro 0.82](https://github.com/facebook/metro/releases/tag/v0.82.0).This version uses deferred hashing to improve the speed of first `yarn start` typically by over 3x (more in larger projects and monorepos) making your development experience and CI builds faster on a daily basis.

![metro startup comparison](/assets/images/0.79-metro-startup-comparison-6dd153aeb4b43cb5dec1390b67bc4673.gif)

Also in Metro 0.82, we’re promoting `package.json` `"exports"` and `"imports"` field resolution to stable. `"exports"` resolution was [introduced in React Native 0.72](/blog/2023/06/21/package-exports-support.md), and `"imports"` support was added in a community contribution - both will now be enabled by default for all the projects on React Native 0.79.

This improves compatibility with modern npm dependencies, and opens up new, standards-compliant ways to organise your projects.

Breaking change

While we've been testing `package.json` `"exports"` in the community for a while, this switchover can be a breaking change for certain packages and project setups.

In particular, we're aware of user reported incompatibilities for some popular packages including Firebase and AWS Amplify, and are working to get these fixed at source.

If you're encountering issues:

* Please update to the Metro [0.81.5 hotfix](https://github.com/facebook/metro/releases/tag/v0.81.5), or set [`resolver.unstable_enablePackageExports = false`](https://metrobundler.dev/docs/configuration/#unstable_enablepackageexports-experimental) to opt out.
* See [expo/expo#36551](https://github.com/expo/expo/discussions/36551) for affected packages and future updates.

### JSC moving to Community Package[​](#jsc-moving-to-community-package "Direct link to JSC moving to Community Package")

As part of our effort to reduce the API surface of React Native, we're in the process of moving the JavaScriptCore (JSC) engine to a community-maintained package: `@react-native-community/javascriptcore`

This change will not affect users that are using Hermes.

Starting with React Native 0.79, you can use a community supported version of JSC by following the [installation instructions in the readme](https://github.com/react-native-community/javascriptcore#installation). The JSC version provided by React Native core will still be available in 0.79, but we’re planning to remove it [in the near future](https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0836-lean-core-jsc.md).

Moving JSC to a community maintained package will allow us to update the JSC version more frequently and offer you the latest features. The community maintained JSC will follow a separate release schedule from React Native.

### iOS: Swift-Compatible Native Modules registration[​](#ios-swift-compatible-native-modules-registration "Direct link to iOS: Swift-Compatible Native Modules registration")

In this release, we are revamping the way in which you can register your Native Module into the React Native runtime. The new approach follows the same approach of components, described in the [official documentation](/docs/next/the-new-architecture/using-codegen#configuring-codegen).

Starting from this version of React Native, you can register your modules by modifying the `package.json` file. We introduced a new `modulesProvider` field in the `ios` property:

```

"codegenConfig": {
"ios": {

- ```
    "modulesProvider": {
  ```
- ```
      "JS Name for the module": "ObjC Module provider for the pure C++ TM or a class conforming to RCTTurboModule"
  ```
- ```
  }
  ```
  }
  }

```

Codegen will take care to create all the relevant code starting from your `package.json` file.

If you do use a pure C++ Native Module you will have to follow this recommended configuration:

Configure pure C++Native Modules in your app

For pure C++ Native Modules, you need to add a new ObjectiveC++ class to glue together the C++ Native Module with the rest of the App:

CppNativeModuleProvider.h

```

\#import \<Foundation/Foundation.h>
\#import \<ReactCommon/RCTTurboModule.h>

NS\_ASSUME\_NONNULL\_BEGIN

@interface <YourNativeModule>Provider : NSObject <RCTModuleProvider>

@end

```

CppNativeModuleProvider.mm

```

NS\_ASSUME\_NONNULL\_END

\#import "<YourNativeModule>Provider.h"
\#import \<ReactCommon/CallInvoker.h>
\#import \<ReactCommon/TurboModule.h>
\#import "<YourNativeModule>.h"

@implementation NativeSampleModuleProvider

- (std::shared\_ptr<facebook::react::TurboModule>)getTurboModule:
  (const facebook::react::ObjCTurboModule::InitParams &)params
  {
  return std::make\_shared<facebook::react::NativeSampleModule>(params.jsInvoker);
  }

```

With this new approach, we unified the registration of Native Modules for both app developers and library maintainers. Libraries can specify the same properties in their `package.json` and Codegen will take care of the rest.

This approach solves the limitation we introduced in 0.77 that prevented the registration of a pure C++ Native Module with a Swift `AppDelegate`. As you can see, none of these changes modifies the `AppDelegate` and the generated code will work for `AppDelegate` implemented with both Swift and Objective-C.

### Android: Faster App Startup[​](#android-faster-app-startup "Direct link to Android: Faster App Startup")

We’re also shipping a change to improve your Android startup time by a significant amount.

Starting with this version, we won’t be compressing the JavaScript bundle anymore inside the APK. Previously, the Android system needed to uncompress the JavaScript bundle before your app could start. This was causing a significant slowdown during the app startup.

Starting from this release, we will be shipping the JavaScript Bundle uncompressed by default, so your Android apps will be generally faster to start.

The [Margelo](https://margelo.com) team tested this feature on the Discord app and got a significant performance boost: Discord’s time-to-interactive (TTI) was reduced by 400ms, which was a 12% speedup with a one-line change (tested on a Samsung A14).

On the other hand, storing the bundle uncompressed, will result in a higher space consumption for your application on the user device. If this is a concern to you, you can toggle this behavior using the `enableBundleCompression` property in your `app/build.gradle` file.

app/build.gradle

```

react {
// ...
// If you want to compress the JS bundle (slower startup, less
// space consumption)
enableBundleCompression = true
// If don't you want to compress the JS bundle (faster startup,
// higher space consumption)
enableBundleCompression = false

// Default is `false`
}

```

Please note that the APK size will increase in this release, but your users won’t be paying the extra cost in APK download size, as the APKs are compressed when downloaded from the network.

## Breaking Changes[​](#breaking-changes "Direct link to Breaking Changes")

### Removal of Remote JS Debugging[​](#removal-of-remote-js-debugging "Direct link to Removal of Remote JS Debugging")

As part of our ongoing efforts to improve debugging, we're removing Remote JS Debugging via Chrome. This legacy debugging method was deprecated, [and moved to a runtime opt-in, in React Native 0.73](/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks.md#remote-javascript-debugging). Please use [React Native DevTools](/docs/react-native-devtools.md) for modern and reliable debugging.

This also means that React Native is no longer compatible with the [react-native-debugger](https://github.com/jhen0409/react-native-debugger) community project. For developers that want to use third party debugging extensions, such as Redux DevTools, we recommend [Expo DevTools Plugins](https://github.com/expo/dev-plugins), or integrating the standalone versions of these tools.

Read more in [this dedicated post](https://github.com/react-native-community/discussions-and-proposals/discussions/872).

### Internal modules updated to `export` syntax[​](#internal-modules-updated-to-export-syntax "Direct link to internal-modules-updated-to-export-syntax")

As part of modernizing our JavaScript codebase, we've updated a number of implementation modules within `react-native` to consistently use `export` syntax instead of `module.exports`.

We've updated around **46 APIs** in total, which can be found in the [changelog](https://github.com/facebook/react-native/blob/main/CHANGELOG.md#v0790).

This change has a subtle impact on existing imports:

**Case 1: Default export**

```

// CHANGED - require() syntax

- const ImageBackground = require('react-native/Libraries/Image/ImageBackground');

* const ImageBackground = require('react-native/Libraries/Image/ImageBackground').default;

// Unchanged - import syntax
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

// RECOMMENDED - root import
import {ImageBackground} from 'react-native';

```

**Case 2: Secondary exports**

There are very few cases of this pattern, again unaffected when using the root `'react-native'` import.

```

// Unchanged - require() syntax
const BlobRegistry = require('react-native/Libraries/Blob/BlobRegistry');

// Unchanged - require() syntax with destructuring
const {register, unregister} = require('react-native/Libraries/Blob/BlobRegistry');

// CHANGED - import syntax as single object

- import BlobRegistry from 'react-native/Libraries/Blob/BlobRegistry';

* import \* as BlobRegistry from 'react-native/Libraries/Blob/BlobRegistry';

  // Unchanged - import syntax with destructuring
  import {register, unregister} from 'react-native/Libraries/Blob/BlobRegistry';

  // RECOMMENDED - root import
  import {BlobRegistry} from 'react-native';

```

We expect the impact of this change to be extremely limited, particularly for projects written in TypeScript and using `import` syntax. Please check for any type errors to update your code.

tip

**The root `react-native` import is strongly recommended**

As a general takeaway, we strongly recommend importing from the root `'react-native'` path, to avoid extraneous breaking changes in the future. In our next release, we will be deprecating deep imports, as part of better defining React Native's public JavaScript API ([see the RFC](https://github.com/react-native-community/discussions-and-proposals/pull/894)).

### Other Breaking Changes[​](#other-breaking-changes "Direct link to Other Breaking Changes")

This list contains a series of other breaking changes we suspect could have a minor impact to your product code and are worth noting.

* **Invalid unitless lengths in box shadows and filters**:
  
  * In order to make React Native more compliant with the CSS/Web specs, we now don’t support anymore unitless lengths in `box-shadow` and `filter`. This means that if you were using a `box-shadow` of `1 1 black` we won’t be rendering. You should instead specify units such as `1px 1px black`
* **Remove incorrect hwb() syntax support from normalize-color:**
  * In order to make React Native more compliant with the CSS/Web specs, we now restrict some invalid syntax for `hwb()`. Historically React Native used to support comma separated values (e.g. `hwb(0, 0%, 100%)`) which we now don’t support anymore (you should migrate to `hwb(0 0% 100%)`). You can read more about this change [here](https://github.com/facebook/react-native/commit/676359efd9e478d69ad430cff213acc87b273580).
* **Libraries/Core/ExceptionsManager exports update**
  * As part of our effort to modernize the React Native JS API, we updated `ExceptionsManager` to now export a default `ExceptionsManager` object, and `SyntheticError` as a secondary export.

## Acknowledgements[​](#acknowledgements "Direct link to Acknowledgements")

React Native 0.79 contains over 944 commits from 100 contributors. Thanks for all your hard work!

We want to send a thank you to those community members that shipped significant contributions in this release:

* [Marc Rousavy](https://github.com/mrousavy) for developing and documenting the “Android: Faster App Startup” feature
* [Kudo Chien](https://github.com/Kudo) and [Oskar Kwaśniewski](https://github.com/okwasniewski)for working on the `@react-native-community/javascriptcore` package and writing the “JSC moving to Community Package” section
* [James Lawson](https://github.com/facebook/metro/pull/1302) for adding support for import subpath resolution [in Metro](https://github.com/facebook/metro/pull/1302).

Moreover, we also want to thank the additional authors that worked on documenting features in this release post:

* [Rob Hogan](https://github.com/robhogan) for the “New Metro Features” section
* [Alex Hunt](https://github.com/huntie) for the “Removal of Remote JS Debugging” and “Internal modules updated to export syntax” sections
* [Riccardo Cipolleschi](https://github.com/cipolleschi) for the work on iOS Native Module registration

## Upgrade to 0.79[​](#upgrade-to-079 "Direct link to Upgrade to 0.79")

Please use the [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) to view code changes between React Native versions for existing projects, in addition to the Upgrading docs.

To create a new project:

```

npx @react-native-community/cli@latest init MyProject --version latest

```

If you use Expo, React Native 0.79 will be supported in the upcoming Expo SDK 53 as the default version of React Native.

info

0.79 is now the latest stable version of React Native and 0.76.x moves to unsupported. For more information see [React Native's support policy](https://github.com/reactwg/react-native-releases/blob/main/docs/support.md). We aim to publish a final end-of-life update of 0.76 in the near future.

**Tags:**

* [engineering](/blog/tags/engineering)


---

# Moving Towards a Stable JavaScript API (New Changes in 0.80)

June 12, 2025 ·



10 min read

![Alex Hunt](https://github.com/huntie.png)

Alex Hunt

Software Engineer @ Meta

[](https://x.com/huntie "X")[](https://github.com/huntie "GitHub")

![Iwo Plaza](https://github.com/iwoplaza.png)

Iwo Plaza

Software Engineer @ Software Mansion

[](https://x.com/iwoplaza "X")[](https://github.com/iwoplaza "GitHub")

![Jakub Piasecki](https://github.com/j-piasecki.png)

Jakub Piasecki

Software Engineer @ Software Mansion

[](https://x.com/breskin67 "X")[](https://github.com/j-piasecki "GitHub")

![Dawid Małecki](https://github.com/coado.png)

Dawid Małecki

Software Engineer @ Software Mansion

[](https://github.com/coado "GitHub")

In React Native 0.80, we're introducing two significant changes to React Native's JavaScript API — the deprecation of deep imports, and our new Strict TypeScript API. These are part of an ongoing effort to accurately define our API and offer dependable type safety to users and frameworks.

**Quick takeaways:**

* **Deep imports deprecation**: From 0.80, we're introducing deprecation warnings for deep imports from the `react-native` package.
* **Opt-in Strict TypeScript API**: We are moving to from-source TypeScript types and a new public API baseline under TypeScript. These enable stronger and more futureproof type accuracy, and will be a one-time breaking change. [Opt in](/blog/2025/06/12/moving-towards-a-stable-javascript-api.md#strict-typescript-api) via `compilerOptions` in your project's `tsconfig.json`.
* We'll work with the community over time to ensure that these changes work for everyone, before enabling the Strict TypeScript API by default in a future React Native release.

## What's changing and why[​](#whats-changing-and-why "Direct link to What's changing and why")

We are moving to improve and stabilise React Native's public JavaScript API — i.e. what you get when you import `'react-native'`.

Historically, we've approximated this. React Native is authored in [Flow](https://flow.org/), but the community has long since moved to TypeScript in open source, which is how the public API is consumed and validated for compatibility. Our types have been (lovingly) [community-contributed](https://www.npmjs.com/package/@types/react-native), and since merged and aligned in our codebase. However, these have relied on manual maintenance and no automated tooling, introducing correctness gaps.

Additionally, our public JS API has been poorly defined in terms of module boundaries — e.g. internal `'react-native/Libraries/'` deep imports were reachable by app code, but could frequently change as we updated these internals.

In 0.80, we're addressing these issues by deprecating deep imports, and introducing a user opt-in to a new, generated API baseline in TypeScript. We're calling this our **Strict TypeScript API**. Ultimately, this is the groundwork to offer a stable React Native API in the future.

## Deprecating deep imports from `react-native`[​](#deprecating-deep-imports-from-react-native "Direct link to deprecating-deep-imports-from-react-native")

The main change we're making to our API today is deprecating the use of deep imports ([RFC](https://github.com/react-native-community/discussions-and-proposals/pull/894)), with warnings in ESLint and the JS console. Deep imports of values and types should be updated to `react-native`'s root import.

```

// Before - import from subpath
import {Alert} from 'react-native/Libraries/Alert/Alert';

// After - import from `react-native`
import {Alert} from 'react-native';

```

This change reduces the total surface area of our JavaScript API into a fixed set of exports which we can control and make stable in a future release. We're targeting a removal of these import paths in 0.82.

API feedback

Some APIs are not exported at root, and will become unavailable without deep imports. We have an **[open feedback thread](https://github.com/react-native-community/discussions-and-proposals/discussions/893)** and will be working with the community to finalize the exports in our public API. Please share your feedback!

**Opting out**

Please bear in mind that we aim to remove deep imports from React Native's API in a future release, and these should instead be updated to the root import.

**Opting out of warnings**

#### ESLint[​](#eslint "Direct link to ESLint")

Disable the `no-deep-imports` rule using `overrides`.

.eslintrc.js

```

overrides: \[
{
files: \['*.js', '*.jsx', '*.ts', '*.tsx'],
rules: {
'@react-native/no-deep-imports': 0,
},
},
]

```

#### Console warnings[​](#console-warnings "Direct link to Console warnings")

Pass the `disableDeepImportWarnings` option to `@react-native/babel-preset`.

babel.config.js

```

module.exports = {
presets: \[
\['module:@react-native/babel-preset', {disableDeepImportWarnings: true}]
],
};

```

Restart your app with `--reset-cache` to clear the Metro cache.

```

npx @react-native-community/cli start --reset-cache

```

**Opting out of warnings (Expo)**

#### ESLint[​](#eslint-1 "Direct link to ESLint")

Disable the `no-deep-imports` rule using `overrides`.

.eslintrc.js

```

overrides: \[
{
files: \['*.js', '*.jsx', '*.ts', '*.tsx'],
rules: {
'@react-native/no-deep-imports': 0,
},
},
];

```

#### Console warnings[​](#console-warnings-1 "Direct link to Console warnings")

Pass the `disableDeepImportWarnings` option to `babel-preset-expo`.

babel.config.js

```

module.exports = function (api) {
api.cache(true);
return {
presets: \[\['babel-preset-expo', {disableDeepImportWarnings: true}]],
};
};

```

Restart your app with `--clear` to clear the Metro cache.

```

npx expo start --clear

```

## Strict TypeScript API (opt-in)[​](#strict-typescript-api-opt-in "Direct link to Strict TypeScript API (opt-in)")

The Strict TypeScript API is a new set of TypeScript types in the `react-native` package, which can be opted into via your `tsconfig.json`. We're shipping these alongside our existing TS types, meaning you can choose to migrate when ready.

The new types are:

1. **Generated directly from our source code** — improving coverage and correctness, so you can expect stronger compatibility guarantees.
2. **Restricted to `react-native`'s index file** — more tightly defining our public API, and meaning we won't break the API when making internal file changes.

When the community is ready, the Strict TypeScript API will become our default API in future — synchronized with deep imports removal. This means it's a **good idea** to begin opting in, as you'll be ready for React Native's future stable JS API.

tsconfig.json

```

{
"extends": "@react-native/typescript-config",
"compilerOptions": {
...
"customConditions": \["react-native-strict-api"]
}
}

```

Under the hood

This will instruct TypeScript to resolve `react-native` types from our new [`types_generated/`](https://www.npmjs.com/package/react-native?activeTab=code) dir, instead of the previous [`types/`](https://www.npmjs.com/package/react-native?activeTab=code) dir (manually maintained). No restart of TypeScript or your editor is required.

### Breaking: Deep imports are disallowed[​](#breaking-deep-imports-are-disallowed "Direct link to Breaking: Deep imports are disallowed")

As above, types under the Strict TypeScript API are now only resolvable from the main `'react-native'` import path, enforcing [package encapsulation](/blog/2023/06/21/package-exports-support.md), per our above deprecation.

```

// Before - import from subpath
import {Alert} from 'react-native/Libraries/Alert/Alert';

// After - MUST import from `react-native`
import {Alert} from 'react-native';

```

Key win

We've scoped our public API to the exports of React Native's `index.js` file, which we carefully maintain. This means that file changes elsewhere in our codebase will no longer be breaking changes.

### Breaking: Some type names / shapes have changed[​](#breaking-some-type-names--shapes-have-changed "Direct link to Breaking: Some type names / shapes have changed")

Types are now generated from source, rather than manually maintained. In doing this:

* We've aligned differences that had built up from the community contributed types — and also increased the type coverage of our source code.
* We've intentionally updated some type names and type shapes, where there was scope to simplify or reduce ambiguity.

Key win

Because types are now generated from React Native's source code, you can be confident that the typechecker is **always accurate** for a given version of `react-native`.

#### Example: Stricter exported symbols[​](#example-stricter-exported-symbols "Direct link to Example: Stricter exported symbols")

The `Linking` API is now a single `interface`, rather than two exports. This follows for a number of other APIs ([see docs](/docs/strict-typescript-api.md)).

```

// Before
import {Linking, LinkingStatic} from 'react-native';

function foo(linking: LinkingStatic) {}
foo(Linking);

// After
import {Linking} from 'react-native';

function foo(linking: Linking) {}
foo(Linking);

```

#### Example: Fixed / more complete types[​](#example-fixed--more-complete-types "Direct link to Example: Fixed / more complete types")

Previous manual type definitions left the opportunity for type gaps. Under generated Flow → TypeScript, these are no longer present (and at source, benefit from Flow's additional type validation for multi-platform code).

```

import {Dimensions} from 'react-native';

// Before - Type error
// After - number | undefined
const {densityDpi} = Dimensions.get();

```

### Other breaking changes[​](#other-breaking-changes "Direct link to Other breaking changes")

Please refer to our [dedicated guide](/docs/strict-typescript-api.md) in the docs which details all breaking types changes and how to update your code.

## Rollout[​](#rollout "Direct link to Rollout")

We appreciate that any breaking change to React Native will take time for developers to update to in their apps.

#### Now — Opt-in launch (0.80)[​](#now--opt-in-launch-080 "Direct link to Now — Opt-in launch (0.80)")

The `"react-native-strict-api"` opt-in is stable in the 0.80 release.

* This is a one-time migration. We aim for apps and libraries to opt in at their own pace over the next couple of releases.
* Under either mode, nothing will change for your app at runtime — this affects TypeScript analysis only.
* **And**, we will take feedback on missing APIs, via our [dedicated feedback thread](https://github.com/react-native-community/discussions-and-proposals/discussions/893).

Recommended

The Strict TypeScript API will become our default API in the future.

If you have time, it's worth testing the opt-in now in your `tsconfig.json`, to futureproof your app or library. This will immediately evaluate if there are any type errors introduced in your app under the Strict API. **There may be none(!)** — in which case, you're good to go.

#### Future — Strict TypeScript API by default[​](#future--strict-typescript-api-by-default "Direct link to Future — Strict TypeScript API by default")

In the future, we will require all codebases to use our Strict API, and will remove the legacy types.

The timeline for this will be based on community feedback. For at least the next two React Native releases, the Strict API will remain an opt-in.

## FAQs[​](#faqs "Direct link to FAQs")

**I'm using subpath imports today. What should I do?**

Please migrate to the root `'react-native'` import path.

* Subpath imports (e.g. `'react-native/Libraries/Alert/Alert'`) are becoming private APIs. Without preventing access to implementation files inside React Native, we can’t offer a stable JavaScript API.
* We want our deprecation warnings to motivate community feedback, which can be raised via our [centralized discussion thread](https://github.com/react-native-community/discussions-and-proposals/discussions/893), if you believe we are not exposing code paths that are crucial for your app. Where justified, we may promote APIs to the index export.

**I'm a library maintainer. How does this change impact me?**

Both apps and libraries can opt in at their own pace, since `tsconfig.json` will only affect the immediate codebase.

* Typically, `node_modules` is excluded from validation by the TypeScript server in a React Native project. Therefore, your package's exported type definitions are the source of truth.

**💡 We want feedback!** As with changed subpath imports, if you encounter any integration issues with the Strict API, please let us know [on GitHub](https://github.com/react-native-community/discussions-and-proposals/discussions/893).

**Does this guarantee a final API for React Native yet?**

Sadly, not yet. In 0.80, we've made a tooling investment so that React Native's existing JS API baseline can be accurately consumed via TypeScript — enabling future stable changes. We're formalizing the existing API you know and love.

In the future, we will take action to finalise the APIs we currently offer in core — across each language surface. API changes will be communicated via RFCs/announcements, and typically a deprecation cycle.

**Why isn't React Native written in TypeScript?**

React Native is core infrastructure at Meta. We test every merged change across our Family of Apps, before they hit general open source availability.

At this scale and sensitivity, correctness matters. The bottom line is that Flow offers us greater performance and greater strictness than TypeScript, including specific [multi-platform support for React Native](https://flow.org/en/docs/react/multiplatform/).

## Thanks[​](#thanks "Direct link to Thanks")

These changes were made possible by [Iwo Plaza](https://x.com/iwoplaza), [Jakub Piasecki](https://x.com/breskin67), [Dawid Małecki](https://github.com/coado), [Alex Hunt](https://x.com/huntie), and [Riccardo Cipolleschi](https://x.com/CipolleschiR).

Thanks also to [Pieter Vanderwerff](https://github.com/pieterv), [Rubén Norte](https://github.com/rubennorte), and [Rob Hogan](https://x.com/robjhogan) for their additional help and input.

Learn more

**Watch the talk!**&#x57;e shared a deep dive into our motivations and the work behind the Strict TypeScript API at **App.js 2025**.

**[View on YouTube](https://www.youtube.com/live/UTaJlqhTk2g?si=SDRmj80kss7hXuGG\&t=6520)**

![App.js 2025 Talk](/blog/assets/0.80-js-stable-api-appjs.jpg)

**Tags:**

* [announcement](/blog/tags/announcement)


---

# React Native 0.80 - React 19.1, JS API Changes, Freezing Legacy Arch and much more

June 12, 2025 ·



12 min read

![Jorge Cohen](https://github.com/hezi.png)

Jorge Cohen

Engineering Manager @ Meta

[](https://x.com/jorgewritescode "X")[](https://github.com/hezi "GitHub")

![Fabrizio Cucci](https://avatars.githubusercontent.com/u/8156463?v=4)

Fabrizio Cucci

Software Engineer @ Meta

[](https://x.com/fabriziocucci "X")[](https://github.com/fabriziocucci "GitHub")

![Gabriel Donadel Dall'Agnol](https://github.com/gabrieldonadel.png)

Gabriel Donadel Dall'Agnol

Software Engineer @ Expo

[](https://x.com/donadeldev "X")[](https://github.com/gabrieldonadel "GitHub")

![Christian Falch](https://github.com/chrfalch.png)

Christian Falch

Software Engineer @ Expo

[](https://x.com/chrfalch "X")[](https://github.com/chrfalch "GitHub")

Today we are excited to release React Native 0.80!

This release brings the version of React we ship inside React Native to the latest stable available: 19.1.0.

We’re also shipping a series of stability improvements to our JS API: deep imports will now fire a warning and we’re offering a new opt-in Strict TypeScript API which offers types that are more accurate and safer to use.

Moreover, the Legacy Architecture of React Native is now officially frozen, and you’ll start seeing warnings for APIs that will stop working once we fully sunset the Legacy Architecture.

### Highlights[​](#highlights "Direct link to Highlights")

* [JavaScript deep imports deprecation](/blog/2025/06/12/react-native-0.80.md#javascript-deep-imports-deprecation)
* [Legacy Architecture Freezing & Warnings](/blog/2025/06/12/react-native-0.80.md#legacy-architecture-freezing--warnings)
* [React 19.1.0](/blog/2025/06/12/react-native-0.80.md#react-1910)
* [Experimental - React Native iOS dependencies are now prebuilt](/blog/2025/06/12/react-native-0.80.md#experimental---react-native-ios-dependencies-are-now-prebuilt)

## Highlights[​](#highlights-1 "Direct link to Highlights")

### JavaScript deep imports deprecation[​](#javascript-deep-imports-deprecation "Direct link to JavaScript deep imports deprecation")

In this release, we are making moves to improve and stabilize React Native's public JavaScript API. The first step towards this is better scoping of which of our APIs are importable by apps and frameworks. In line with this, we are formally deprecating deep imports from React Native ([see RFC](https://github.com/react-native-community/discussions-and-proposals/pull/894)), and are introducing warnings via ESLint and the JS console.

These warnings are scoped to imports from within your project's source code, and can be [opted out from](/docs/strict-typescript-api.md). However, please bear in mind that we aim to remove deep imports from React Native's API in a future release, and these should instead be updated to the root import.

```

// Before - import from subpath
import {Alert} from 'react-native/Libraries/Alert/Alert';

// After - import from `react-native`
import {Alert} from 'react-native';

```

Some APIs are not exported at root, and will become unavailable without deep imports. This is intentional, in order to reduce the overall surface area of React Native's API. We have an open [feedback thread](https://github.com/react-native-community/discussions-and-proposals/discussions/893) for user issues, and will be working with the community to finalize which APIs we export over (at least) the next two React Native releases. Please share your feedback!

Learn more about this change in our dedicated post: [Moving Towards a Stable JavaScript API](/blog/2025/06/12/moving-towards-a-stable-javascript-api.md).

#### Opt-in Strict TypeScript API[​](#opt-in-strict-typescript-api "Direct link to Opt-in Strict TypeScript API")

With the above redefinition of the exports in our public API, we're also shipping a new set of TypeScript types for the `react-native` package in 0.80, which we're calling the Strict TypeScript API.

Opting into the Strict TypeScript API is a preview of our future, stable JavaScript API for React Native. These new types are:

1. **Generated directly from our source code** — improving coverage and correctness, so you can expect stronger compatibility guarantees.
2. **Restricted to React Native's index file** — more tightly defining our public API, and meaning we won't break the API when making internal file changes.

We're shipping these alongside our existing types, meaning you can choose to migrate when ready. Also, if you're using standard React Native APIs, a lot of apps should validate with **no changes**. We strongly encourage early adopters and newly created apps to opt in via your `tsconfig.json` file.

When the community is ready, the Strict TypeScript API will become our default API in future — synchronized with deep imports removal.

Learn more about this change in our dedicated post: [Moving Towards a Stable JavaScript API](/blog/2025/06/12/moving-towards-a-stable-javascript-api.md).

### Legacy Architecture Freezing & Warnings[​](#legacy-architecture-freezing--warnings "Direct link to Legacy Architecture Freezing & Warnings")

The New Architecture of React Native is the default choice [since version 0.76](/blog/2024/10/23/the-new-architecture-is-here.md) and we’ve been reading [success stories](https://blog.kraken.com/product/engineering/how-kraken-fixed-performance-issues-via-incremental-adoption-of-the-react-native-new-architecture) of projects and tools that greatly benefit from it.

[We recently shared](https://github.com/reactwg/react-native-new-architecture/discussions/290) that we now consider the Legacy Architecture as frozen. We won’t be developing new bugfixes or features in the Legacy Architecture anymore and we will stop testing the Legacy Architecture while working on a release.

In order to smooth the migration, we are still allowing users to opt-out of the New Architecture if you’re experiencing bugs or regressions.

However shipping two architectures with React Native is a huge challenge, which impacts runtime performance, app size and maintenance of our codebase.

That’s why we’ll eventually have to sunset the Legacy Architecture at some point in the future.

In 0.80, we’ve added a series of warnings that will pop-up in React Native DevTools to warn you if you’re using APIs that won’t work in the New Architecture.

We recommend you to not ignore those warnings and to consider migrating your apps & libraries to the New Architecture to be ready for the future.

![legacy architecture warnings](/assets/images/0.80-legacy-arch-warnings-53105425d61d9e426f21af3e239df0f5.png)

You can learn more about those changes in the talk "Life After Legacy: The New Architecture Future" [we recently presented at App.js](https://www.youtube.com/live/K2JTTKpptGs?si=tRkT535f0GzguVGt\&t=9011).

### React 19.1.0[​](#react-1910 "Direct link to React 19.1.0")

This release of React Native ships with the latest React stable: 19.1.0

You can read about all the new features and bugfixes introduced in React 19.1.0 in the [release description](https://github.com/facebook/react/releases/tag/v19.1.0).

warning

One notable feature of React 19.1.0 is the implementation and improvements of owner stacks. This is a development only feature that should help you identify which component is responsible for a specific error.

However, we are aware that owner stacks are not working as expected in React Native if you use the `@babel/plugin-transform-function-name` Babel plugin, which is enabled by default in the React Native Babel Preset. We will be shipping a fix for this in a future release of React Native.

### Experimental - React Native iOS dependencies are now prebuilt[​](#experimental---react-native-ios-dependencies-are-now-prebuilt "Direct link to Experimental - React Native iOS dependencies are now prebuilt")

If you’re building a React Native iOS app, you probably noticed that the first native build will take some time: a couple of minutes or even longer on older machines. That’s because we need to compile the whole React Native iOS code plus all of its dependencies.

Over the last weeks we’ve been experimenting with prebuilding some of the React Native core for iOS, similarly to what happens on Android, to reduce the build time when you’re first running a React Native app.

React Native 0.80 is the first release that can ship part of React Native for iOS as a prebuild to help reduce build times.

During the release process of React Native, we are producing an XCFramework called `ReactNativeDependencies.xcframework` that is a prebuilt version of only the 3rd party dependencies React Native depends on.

We experimented and benchmarked how much time this initial prebuild for iOS is saving and, in our benchmarks, run on an M4 machine, iOS builds are roughly 12% faster with the prebuild rather than by building from source.

From our experience, we also observed that several bug reports from users are caused by build issues related with React Native’s 3rd party dependencies (example [#39568](https://github.com/facebook/react-native/issues/39568)). Prebuilding the 3rd party dependencies allows us to build them for you, so that you won’t face these build issues anymore.

Note that we are not pre-building the whole React Native: we are only pre-building the libraries Meta does not directly control, such as Folly and GLog.

In a future release, we will also ship the rest of React Native core as a prebuild.

#### How to use them[​](#how-to-use-them "Direct link to How to use them")

This feature is still experimental, so it is not turned on by default.

If you want to use them, you can install your pods by adding the `RCT_USE_RN_DEP` env variable:

```

RCT\_USE\_RN\_DEP=1 bundle exec pod install

```

Alternatively, if you want to enable it for all the developers working on that, you can modify your Podfile like this:

```

if linkage != nil
Pod::UI.puts "Configuring Pod with #{linkage}ally linked Frameworks".green
use\_frameworks! :linkage => linkage.to\_sym
end

+ENV\['RCT\_USE\_RN\_DEP'] = '1'

target 'HelloWorld' do
config = use\_native\_modules!

```

Please, report any issue that the prebuilds might cause to you and to your app in [this discussion](https://github.com/react-native-community/discussions-and-proposals/discussions/912). We are committed to looking into them and making sure that tier usage is transparent to your app.

## Other Changes[​](#other-changes "Direct link to Other Changes")

### Android - Smaller APK size thanks to IPO[​](#android---smaller-apk-size-thanks-to-ipo "Direct link to Android - Smaller APK size thanks to IPO")

This release ships with significant size reduction for all the Android apps built with React Native. Starting in 0.80, we enabled [Interprocedural Optimization](https://en.wikipedia.org/wiki/Interprocedural_optimization) for both React Native and Hermes builds.

This resulted in a saving of \~1Mb for all the Android apps.

![android apk size comparison](/assets/images/0.80-android-apk-size-81b179f0dbf9546c8b0c9d443ba535ea.png)

You will get this size win by updating your React Native version to 0.80 and there are no further changes required to your project.

### New App Screen redesign[​](#new-app-screen-redesign "Direct link to New App Screen redesign")

If you’re not using Expo but you’re using the Community CLI & Template, in this version we've moved the New App Screen into its [own package](https://www.npmjs.com/package/@react-native/new-app-screen) and given it a fresh coat of paint. This reduces initial code boilerplate when you create a new app with the Community Template, and also provides a better experience when viewed on larger screens.

![New App Screen redesign](/assets/images/0.80-new-community-template-landing-19d75fcc472b11d97b4715e7c7339ef5.jpg)

### Notice about JSC community support[​](#notice-about-jsc-community-support "Direct link to Notice about JSC community support")

React Native 0.80 is the last version of React Native to offer first party JSC support. The support for JSC will be offered via the community maintained package `@react-native-community/javascriptcore`.

In case you missed the announcement, you can [read more about it here](/blog/2025/04/08/react-native-0.79.md#jsc-moving-to-community-package)

## Breaking Changes[​](#breaking-changes "Direct link to Breaking Changes")

### Added `"exports"` field on main package[​](#added-exports-field-on-main-package "Direct link to added-exports-field-on-main-package")

As part of our JS Stable API changes, we've introduced an [`"exports"` field](https://nodejs.org/api/packages.html#package-entry-points) on the `package.json` manifest of `react-native`.

In 0.80, this mapping continues to expose **all JavaScript subpaths** by default, and therefore should not be a major breaking change. At the same time, this may subtly affect how modules within the `react-native` package are resolved:

* Under Metro, [platform-specific extensions](https://metrobundler.dev/docs/package-exports#replacing-platform-specific-extensions) will not be automatically expanded against `"exports"` matches. We've provided a number of shim modules to accommodate this ([#50426](https://github.com/facebook/react-native/pull/50426)).
* Under Jest, the ability to mock deep imports may be altered, which may require updating tests.

### Other Breaking Changes[​](#other-breaking-changes "Direct link to Other Breaking Changes")

This list contains a series of other breaking changes we suspect could have a minor impact to your product code and are worth noting:

### JS[​](#js "Direct link to JS")

* We bumped `eslint-plugin-react-hooks` from v4.6.0 to v5.2.0 (see full [changelog here](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/CHANGELOG.md)). The `react-hooks` lint rules may produce new error signals which you will have to fix or suppress

### Android[​](#android "Direct link to Android")

* This release bumps the Kotlin version shipped with React Native to version 2.1.20. Kotlin 2.1 introduces new language features in preview that you can start using in your modules/components. You can read more about it in [the official release notes](https://kotlinlang.org/docs/whatsnew21.html).

* We deleted the `StandardCharsets` class. It has been deprecated since 0.73. You should use the `java.nio.charset.StandardCharsets` class instead.

* We made several classes internal. Those classes are not part of the public API and should not be accessed. We already notified or submitted patches to the affected libraries:

  

  * `com.facebook.react.fabric.StateWrapperImpl`
  * `com.facebook.react.modules.core.ChoreographerCompat`
  * `com.facebook.react.modules.common.ModuleDataCleaner`

* We migrated several classes from Java to Kotlin. If you’re using those classes, the nullability and types of some parameter changed so you might need to adjust your code:

  

  * All the classes inside `com.facebook.react.devsupport`
  * `com.facebook.react.bridge.ColorPropConverter`
  * `com.facebook.react.views.textinput.ReactEditText`
  * `com.facebook.react.views.textinput.ReactTextInputManager`

### iOS[​](#ios "Direct link to iOS")

* We deleted the `RCTFloorPixelValue` field from RCTUtils.h - The `RCTFloorPixelValue` method was not used in React Native and we removed it altogether.

Further smaller breaking changes are listed [in the CHANGELOG for 0.80](https://github.com/facebook/react-native/blob/main/CHANGELOG.md#v0800).

## Acknowledgements[​](#acknowledgements "Direct link to Acknowledgements")

React Native 0.80 contains over 1167 commits from 127 contributors. Thanks for all your hard work!

We want to send a special thank you to those community members that shipped significant contributions in this release:

* [Christian Falch](https://github.com/chrfalch) for the work on the iOS prebuilds for React Native Dependencies
* [Iwo Plaza](https://x.com/iwoplaza), [Jakub Piasecki](https://x.com/breskin67), and [Dawid Małecki](https://github.com/coado) for their work on the Strict TypeScript API.

Moreover, we also want to thank the additional authors that worked on documenting features in this release post:

* [Riccardo Cipolleschi](https://github.com/cipolleschi) for authoring the part related to iOS prebuilds for React Native Dependencies.
* [Alex Hunt](https://x.com/huntie) for Deep imports deprecation, Opt-in Strict TypeScript API, New App Screen redesign.
* [Nicola Corti](https://x.com/cortinico) for the Legacy Architecture Freezing & Warnings.

## Upgrade to 0.80[​](#upgrade-to-080 "Direct link to Upgrade to 0.80")

Please use the [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) to view code changes between React Native versions for existing projects, in addition to the Upgrading docs.

To create a new project:

If you use Expo, React Native 0.80 will be supported in a canary release of the Expo SDK. Instructions on how to use React Native 0.80 in Expo are also available [in a dedicated blogpost](https://expo.dev/changelog/react-native-80).

info

0.80 is now the latest stable version of React Native and 0.77.x moves to unsupported. For more information see React Native's support policy. We aim to publish a final end-of-life update of 0.77 in the near future.

**Tags:**

* [engineering](/blog/tags/engineering)


---

# React Native 0.81 - Android 16 support, faster iOS builds, and more

August 12, 2025 ·



10 min read

![Moti Zilberman](https://github.com/motiz88.png)

Moti Zilberman

Software Engineer @ Meta

[](https://github.com/motiz88 "GitHub")[](https://www.threads.net/@motizilberman "Threads")[](https://bsky.app/profile/moti.zlbr.mn "Bluesky")

![Vitali Zaidman](https://github.com/vzaidman.png)

Vitali Zaidman

Software Engineer @ Meta

[](https://x.com/vzaidman "X")[](https://github.com/vzaidman "GitHub")[](https://www.threads.net/@vzaidman "Threads")

![Gabriel Donadel Dall'Agnol](https://github.com/gabrieldonadel.png)

Gabriel Donadel Dall'Agnol

Software Engineer @ Expo

[](https://x.com/donadeldev "X")[](https://github.com/gabrieldonadel "GitHub")

![Christian Falch](https://github.com/chrfalch.png)

Christian Falch

Software Engineer @ Expo

[](https://x.com/chrfalch "X")[](https://github.com/chrfalch "GitHub")

Today we are excited to release React Native 0.81!

This ships with support for Android 16 (API level 36) and includes a variety of other stability improvements and bugfixes, as well as experimental support for faster iOS builds using precompilation.

### Highlights[​](#highlights "Direct link to Highlights")

* [Android 16 support](/blog/2025/08/12/react-native-0.81.md#android-16-support)
* [SafeAreaView deprecation](/blog/2025/08/12/react-native-0.81.md#safeareaview-deprecation)
* [Community-maintained JavaScriptCore support](/blog/2025/08/12/react-native-0.81.md#community-maintained-javascriptcore-support)
* [Experimental Precompiled iOS builds](/blog/2025/08/12/react-native-0.81.md#experimental-precompiled-ios-builds)

## Highlights[​](#highlights-1 "Direct link to Highlights")

### Android 16 support[​](#android-16-support "Direct link to Android 16 support")

Android apps built with React Native 0.81 will now default to targeting **Android 16** (API level 36).

As previously announced by Google, Android 16 requires that [apps are displayed edge-to-edge](https://developer.android.com/develop/ui/views/layout/edge-to-edge) with no support for [opting out](https://developer.android.com/about/versions/16/behavior-changes-16).

To support this, we are deprecating the `<SafeAreaView>` component [as previously announced](https://github.com/react-native-community/discussions-and-proposals/discussions/827) in favor of alternatives. [See below](#safeareaview-deprecation) which will provide better edge-to-edge support.

We are also adding a new gradle property `edgeToEdgeEnabled` to let you choose if you wish to enable edge-to-edge on all supported Android versions below 16.

[Predictive back gesture](https://developer.android.com/guide/navigation/custom-back/predictive-back-gesture) is now enabled by default for apps targeting Android 16. The [BackHandler](https://reactnative.dev/docs/backhandler) API should continue to work as before for most use cases. However, if your app relies on custom native code for back handling (such as overriding the `onBackPressed()` method), you may need to manually migrate your code or [temporarily opt-out](https://developer.android.com/guide/navigation/custom-back/predictive-back-gesture#opt-out). Please test your app’s back navigation thoroughly after upgrading.

Google now expects apps to support [adaptive layouts](https://developer.android.com/develop/ui/compose/layouts/adaptive) on large screen devices, regardless of orientation or size restrictions. While you can opt-out for now, it’s recommended to test and update your app for responsive UI on large screens before Android 17.

Starting November 1, 2025, all Google Play app submissions must meet the 16 KB page size requirement for native binaries. This applies to new apps and updates targeting Android 15+ devices. **React Native is already 16KB page size compliant**. Ensure all your native code and third-party libraries are compliant as well.

For more details on Android 16 changes and migration steps, refer to this [post in the discussions-and-proposals](https://github.com/react-native-community/discussions-and-proposals/discussions/921) repository.

### SafeAreaView deprecation[​](#safeareaview-deprecation "Direct link to SafeAreaView deprecation")

The built-in `<SafeAreaView>` component was originally designed to provide **limited, iOS-only support** for keeping content in the “safe areas” of the screen (away from camera notches, rounded corners, etc). It is not compatible with edge-to-edge rendering on Android, and does not permit customization beyond padding. As a result, many apps have opted for more portable and flexible solutions, such as `react-native-safe-area-context`.

In React Native 0.81, the legacy `<SafeAreaView>` component is deprecated, and you will see warnings in React Native DevTools if your app uses it.

It will be removed in a future version of React Native. We recommend that you migrate to `react-native-safe-area-context` or a similar library to ensure your app looks its best across all platforms.

### Community-maintained JavaScriptCore support[​](#community-maintained-javascriptcore-support "Direct link to Community-maintained JavaScriptCore support")

[As we announced last year](https://reactnative.dev/blog/2025/04/08/react-native-0.79#jsc-moving-to-community-package), support for the JavaScriptCore (JSC) engine has moved to a [community-maintained package](https://github.com/react-native-community/javascriptcore) that is released separately from React Native itself. In React Native 0.81, we're removing the built-in version of JavaScriptCore. All apps that require JavaScriptCore should now use the community package in order to upgrade to 0.81. [Read the installation instructions](https://github.com/react-native-community/javascriptcore#installation) for the details.

This change does not affect apps that are using Hermes.

### Experimental Precompiled iOS builds[​](#experimental-precompiled-ios-builds "Direct link to Experimental Precompiled iOS builds")

React Native 0.81 introduces precompiled iOS builds, cutting compile times by up to 10x in projects where React Native is the primary dependency. This is the result of a collaboration between Expo and Meta, and expands on [work we previously shipped in React Native 0.80](https://reactnative.dev/blog/2025/06/12/react-native-0.80#experimental---react-native-ios-dependencies-are-now-prebuilt).

This feature is still experimental, but we are hoping to enable it for all apps in a future release. If you’d like to try precompiled builds in your own app, you can enable them by specifying the following environment variables when you run `pod install`:

```

RCT\_USE\_RN\_DEP=1 RCT\_USE\_PREBUILT\_RNCORE=1 bundle exec pod install

```

Please provide feedback in [this GitHub discussion](https://github.com/react-native-community/discussions-and-proposals/discussions/923).

There are two limitations we are already aware of, and are working to resolve:

* In precompiled builds, you cannot debug and step into React Native's internals. You can still debug your *own* native code while using a precompiled version of React Native.
* Prebuilds are not supported in Xcode 26 Beta, because the IDE builds all targets with [Swift explicit modules](https://developer.apple.com/documentation/xcode-release-notes/xcode-26-release-notes#Resolved-Issues-in-Xcode-26-Beta:~:text=Starting%20from%20Xcode%2026%2C%20Swift%20explicit%20modules%20will%20be%20the%20default%20mode%20for%20building%20all%20Swift%20targets) enabled. To use precompiled builds with Xcode 26, set the `SWIFT_ENABLE_EXPLICIT_MODULES` flag to `NO` in your Xcode project. We will address this in an upcoming patch release.

You can read more about this feature in Expo’s full blog post, [Precompiled React Native for iOS: Faster builds are coming in 0.81](https://expo.dev/blog/precompiled-react-native-for-ios).

## Breaking Changes[​](#breaking-changes "Direct link to Breaking Changes")

### Minimum Node.js bumped to 20[​](#minimum-nodejs-bumped-to-20 "Direct link to Minimum Node.js bumped to 20")

React Native now requires [Node.js](https://nodejs.org/) version 20.19.4 (the latest [Maintenance LTS](https://nodejs.org/en/about/previous-releases) version at the time of writing) or higher. You may need to upgrade Node.js in your development or CI environment when you upgrade to React Native 0.81.

### Minimum Xcode bumped to 16.1[​](#minimum-xcode-bumped-to-161 "Direct link to Minimum Xcode bumped to 16.1")

React Native now requires [Xcode 16.1](https://developer.apple.com/documentation/xcode-release-notes/xcode-16_1-release-notes) or higher to build iOS projects. You may need to upgrade Xcode in your development or CI environment when you upgrade to React Native 0.81.

### Metro: Better support for advanced configuration in Community CLI projects[​](#metro-better-support-for-advanced-configuration-in-community-cli-projects "Direct link to Metro: Better support for advanced configuration in Community CLI projects")

Metro now respects the `resolveRequest` and `getModulesRunBeforeMainModule` options if specified in the `metro.config.js` file of a React Native Community CLI project. Previously, setting them would have no effect. If you have custom values for these options in your `metro.config.js` file, you may need to delete them in order to restore the previous behavior.

### Improved reporting of uncaught JavaScript errors[​](#improved-reporting-of-uncaught-javascript-errors "Direct link to Improved reporting of uncaught JavaScript errors")

React Native DevTools now shows the original message and stack trace of uncaught JavaScript errors, as well as the error’s [cause](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause) if any, and an [Owner Stack](https://react.dev/reference/react/captureOwnerStack#owner-stack-vs-component-stack) for errors thrown by components. This makes errors easier to debug and fix.

![Example error including a cause and Owner Stack](/assets/images/0.81-improved-uncaught-error-fa95330ee5a41739cc7604a21e03be8b.png)

If you are logging JavaScript errors to your backend or to a third-party error reporting service, this may affect the logs you see after upgrading to React Native 0.81 (for example: you might see more thrown errors that used to be reported via `console.error`), and you may need to update some backend logic accordingly.

### `RN_SERIALIZABLE_STATE` and C++ flags.[​](#rn_serializable_state-and-c-flags "Direct link to rn_serializable_state-and-c-flags")

In this version of React Native, we introduced a new macro called `RN_SERIALIZABLE_STATE` to support serializable state for the Components on New Architecture.

If you’re a library author and you have a **custom** `CMakeLists.txt` file, you will need to specify this macro in your CMakeLists.txt file or your C++ code could fail to compile.

To support this, we introduce a new CMake function called `target_compile_reactnative_options` which will take care of setting up this macro and all the necessary C++ flags for you. You can invoke it as such in your CMakeLists file:

```

target\_compile\_reactnative\_options(myLibraryName PRIVATE)

```

You can see an example of [how react-native-screens has set up this macro](https://github.com/software-mansion/react-native-screens/pull/3114/commits/b4d283c8fc65e36ec60726fd7513735ccc7e1fe9).

This change will affect only more advanced and complex libraries. If your library is using codegen and you don’t have a custom CMake file, you won’t be affected by this change.

### Other Breaking Changes[​](#other-breaking-changes "Direct link to Other Breaking Changes")

This list contains a series of other breaking changes we suspect could have a minor impact to your product code and are worth noting:

#### Android[​](#android "Direct link to Android")

* We made several classes internal. Those classes are not part of the public API and should not be accessed. We already notified or submitted patches to the affected libraries:

  

  * `com.facebook.react.fabric.mounting.MountingManager`
  * `com.facebook.react.views.text.TextLayoutManager`

* We moved the `textAlignVertical` [native prop](https://github.com/facebook/react-native/blob/841866c35401ae05fa9c6a2a3e9b42714bbd291e/packages/react-native/ReactCommon/react/renderer/attributedstring/ParagraphAttributes.h#L83) from `TextAttribute.h` to `ParagraphAttribute.h`

  * The prop `textAlignVertical` only affects the top most text view (paragraph view). Yet, it exists in text attribute props nonetheless. To better reflect this platform limitation it was moved to paragraph props.
  * This change is **not** affecting the JS API of the `<Text>` component.
  * You will be affected by this change only if you implement a Fabric component that interacts with the C++ Text API.
  * If you’re affected by this change, you can replace `TextAttributes.h` with `ParagraphAttribute.h` in your code

Read the full list of breaking changes [in the CHANGELOG for 0.81](https://github.com/facebook/react-native/blob/main/CHANGELOG.md#v0810).

## Acknowledgements[​](#acknowledgements "Direct link to Acknowledgements")

React Native 0.81 contains over 1110 commits from 110 contributors. Thanks for all your hard work!

We want to send a special thank you to those community members that shipped significant contributions in this release:

* [Christian Falch](https://github.com/chrfalch) for the amazing work on precompiled iOS builds.
* [Mathieu Acthernoene](https://github.com/zoontek) for crucial contributions to Android edge-to-edge support
* [Enrique López-Mañas](https://github.com/kikoso) and for helping test Android 16 integration and the SafeAreaView deprecation.

## Upgrade to 0.81[​](#upgrade-to-081 "Direct link to Upgrade to 0.81")

Please use the [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) to view code changes between React Native versions for existing projects, in addition to the Upgrading docs.

To create a new project:

```

npx @react-native-community/cli@latest init MyProject --version latest

```

If you use Expo, React Native 0.81 will be supported in the upcoming Expo SDK 54 as the default version of React Native.

info

0.81 is now the latest stable version of React Native and 0.78.x moves to unsupported. For more information see [React Native's support policy](https://github.com/reactwg/react-native-releases/blob/main/docs/support.md).

**Tags:**

* [engineering](/blog/tags/engineering)


---

# React Native 0.82 - A New Era

October 8, 2025 ·



13 min read

![Vitali Zaidman](https://github.com/vzaidman.png)

Vitali Zaidman

Software Engineer @ Meta

[](https://x.com/vzaidman "X")[](https://github.com/vzaidman "GitHub")[](https://www.threads.net/@vzaidman "Threads")

![Nicola Corti](https://github.com/cortinico.png)

Nicola Corti

Software Engineer @ Meta

[](https://x.com/cortinico "X")[](https://github.com/cortinico "GitHub")[](https://bsky.app/profile/cortini.co "Bluesky")

![Gabriel Donadel Dall'Agnol](https://github.com/gabrieldonadel.png)

Gabriel Donadel Dall'Agnol

Software Engineer @ Expo

[](https://x.com/donadeldev "X")[](https://github.com/gabrieldonadel "GitHub")

![Alan Hughes](https://github.com/alanjhughes.png)

Alan Hughes

Software Engineer @ Expo

[](https://github.com/alanjhughes "GitHub")

Today we're excited to release React Native 0.82: the first React Native that runs entirely on the New Architecture.

This is a milestone release for React Native and we believe it's the start of a new era. In future versions we will be removing the remaining code from the Legacy Architecture to reduce install size and streamline the codebase.

In addition, 0.82 also ships with an experimental opt-in to a newer version of Hermes called Hermes V1. We’re also enabling several React features by updating the React version to 19.1.1, and shipping support for DOM Node APIs.

### Highlights[​](#highlights "Direct link to Highlights")

* [New Architecture Only](/blog/2025/10/08/react-native-0.82.md#new-architecture-only)
* [Experimental Hermes V1](/blog/2025/10/08/react-native-0.82.md#experimental-hermes-v1)
* [React 19.1.1](/blog/2025/10/08/react-native-0.82.md#react-1911)
* [DOM Node APIs](/blog/2025/10/08/react-native-0.82.md#dom-node-apis)

## New Architecture Only[​](#new-architecture-only "Direct link to New Architecture Only")

In React Native 0.76 we announced that [The New Architecture](/blog/2024/10/23/the-new-architecture-is-here.md) became the default architecture of React Native.

Since then, the New Architecture has been tested and refined and we're confident in making it the **only** architecture for this and future versions of React Native.

This means that if you try to set `newArchEnabled=false` on Android, or if you try to install CocoaPods with `RCT_NEW_ARCH_ENABLED=0` on iOS, these will be ignored and your app will still run using the New Architecture.

### How to migrate[​](#how-to-migrate "Direct link to How to migrate")

If you haven’t migrated your project to the New Architecture, we recommend first migrating your project to React Native 0.81 or Expo SDK 54. These are the last versions that allow you to use the Legacy Architecture. They contain warnings and performance improvements specifically to help migrating to the New Architecture.Then enable the New Architecture in 0.81 and verify that your application is working fine.Once you're using the New Architecture in 0.81, you can update safely to React Native 0.82 which prevents enabling the Legacy Architecture.

If an incompatible 3rd party dependency is blocking you from migrating to the New Architecture, we recommend you reach out to the library maintainers directly.

If a bug in React Native core is blocking you from migrating, we recommend you reach out to us [through our issue tracker](https://github.com/facebook/react-native/issues/new/choose).

### Interop Layers & 3P library compatibility[​](#interop-layers--3p-library-compatibility "Direct link to Interop Layers & 3P library compatibility")

We will keep the interop layers in the codebase for the foreseeable future. All the classes and functions that are required by the interop layers won’t be removed anytime soon. We will share further updates in the future regarding the removal of Interop Layers.

We’ve also verified that the 3P libraries that offer backward compatibility with both architectures will keep on working with 0.82 where New Architecture is the only architecture.

### Removal of Legacy Architecture classes[​](#removal-of-legacy-architecture-classes "Direct link to Removal of Legacy Architecture classes")

To ensure backward compatibility and reduce breaking changes, we are not removing any APIs of the Legacy Architecture from the core of React Native in this version. Removing the Legacy Architecture will allow us to save significant size on the overall bundle size, therefore the removal is scheduled to start from the next version of React Native.

You can find more information in [RFC0929: Removal of the Legacy Architecture of React Native](https://github.com/react-native-community/discussions-and-proposals/pull/929).

## Experimental Hermes V1[​](#experimental-hermes-v1 "Direct link to Experimental Hermes V1")

React Native 0.82 adds support for opting into Hermes V1.

Hermes V1 is the next evolution of Hermes. We've been experimenting with it internally in our apps, and it is now time for the community to try it as well. It comes with improvements in the compiler and in the VM that boost Hermes performance.

From initial tests and benchmarks, Hermes V1 outperforms current Hermes in various scenarios. We have seen improvements in bundle loading and TTI. The improvements strongly depend on the details of your apps.

On the [Expensify app](https://github.com/Expensify/App), a real world and complex application, we have seen the following improvements:

| Metric           | Android (low end device) | iOS         |
| ---------------- | ------------------------ | ----------- |
| Bundle Load Time | 3.2% faster              | 9% faster   |
| Total TTI        | 7.6% faster              | 2.5% faster |
| Content TTI      | 7.2% faster              | 7.5% faster |

For Total TTI, we measured the time it takes from bundle loading to when the first screen in the app is rendered and it is interactive.

For Content TTI, we measured the time it takes for a component to be interactive, starting from the first rendering of the component itself.

Hermes V1 does not yet contain JS-to-native compilation (previously known as “Static Hermes”) or the JIT compilation that was [presented during React Native EU 2023](https://www.youtube.com/watch?v=q-xKYA0EO-c). We are still testing these features, and will share more as we make progress.

### How to enable Hermes V1[​](#how-to-enable-hermes-v1 "Direct link to How to enable Hermes V1")

info

While Hermes V1 is in the experimental phase, you’ll need to build React Native from source to try it out. Once Hermes V1 ships as default in a future React Native version, this restriction will be lifted.

To try Hermes V1 in your own project, use the following steps:

1. Force your package manager to resolve the experimental version of Hermes V1 compiler package by modifying the corresponding section of your `package.json` file (note that the current versioning convention is only for the experimental phase of Hermes V1):

* yarn
* npm

```

"resolutions": {
"hermes-compiler": "250829098.0.1"
}

```
```

"overrides": {
"hermes-compiler": "250829098.0.1"
}

```

2. Enable Hermes V1 for Android by adding `hermesV1Enabled=true` inside the `android/gradle.properties`:

android/gradle.properties

```

hermesV1Enabled=true

```

Also, configure React Native [to build from source](https://reactnative.dev/contributing/how-to-build-from-source#android) by editing `android/settings.gradle`:

android/settings.gradle

```

includeBuild('../node\_modules/react-native') {
dependencySubstitution {
substitute(module("com.facebook.react:react-android")).using(project(":packages:react-native:ReactAndroid"))
substitute(module("com.facebook.react:react-native")).using(project(":packages:react-native:ReactAndroid"))
substitute(project(":packages:react-native:ReactAndroid:hermes-engine")).using(module("com.facebook.hermes:hermes-android:250829098.0.1"))
}
}

```

3. Enable Hermes V1 for iOS by installing pods with `RCT_HERMES_V1_ENABLED=1` environment variable.

```

RCT\_HERMES\_V1\_ENABLED=1 bundle exec pod install

```

Keep in mind that Hermes V1 is not compatible with the precompiled React Native builds, so make sure you don’t use the `RCT_USE_PREBUILT_RNCORE` flag when installing pods.

4. To confirm if your app is running Hermes V1, execute the following code within your app or DevTools console. This code will return the Hermes version, which should match the version specified in step 1 (`250829098.0.1`):

```

// expecting "250829098.0.1" in Hermes V1
HermesInternal.getRuntimeProperties()\['OSS Release Version'];

```

## React 19.1.1[​](#react-1911 "Direct link to React 19.1.1")

This release of React Native ships with the latest React stable: [React 19.1.1](https://github.com/facebook/react/releases/tag/v19.1.1).

This release of React contains full support for owner stacks for React Native. Back in React Native 0.80, when we shipped support for 19.1.0, we [mentioned](/blog/2025/06/12/react-native-0.80.md#react-1910) that owner stacks were not fully supported if you were using the [`@babel/plugin-transform-function-name`](https://babeljs.io/docs/babel-plugin-transform-function-name) Babel plugin. This release lifts this restriction and enables owner stacks for all React Native users.

| BEFORE                                                                                                                     | AFTER                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![Example error thrown without Owner Stacks](/assets/images/0.82-owners-stack-before-bf24fa9bc9dd697b9200eb010ff02695.png) | ![Example error thrown with Owner Stacks](/assets/images/0.82-owners-stack-after-ed600840df30d9908efafb13dd595829.png) |

React 19.1.1 also improves the reliability of [`useDeferredValue`](https://react.dev/reference/react/useDeferredValue) and [`startTransition`](https://react.dev/reference/react/startTransition) in a Suspense boundary for React Native. These are essential React features, designed to boost app responsiveness. Previously both were wrongly showing the fallback component when used together with a Suspense boundary on React Native. With React 19.1.1, they now consistently perform as expected on React Native, aligning their behavior with Web.

## DOM Node APIs[​](#dom-node-apis "Direct link to DOM Node APIs")

Starting from React Native 0.82, native components will provide DOM-like nodes via refs.

Before, native components provided React Native-specific objects with just a handful of methods like `measure` and `setNativeProps`. After this release, they will provide [nodes implementing a subset of the DOM API](https://reactnative.dev/docs/element-nodes) to traverse the UI tree, measure layout, and more as on Web. For example:

```

function MyComponent(props) {
const ref = useRef();

useEffect(() => {
const element = ref.current;

```
// New methods
element.parentNode;
element.parentElement;
element.childNodes;
element.children;
const bounds = element.getBoundingClientRect();
const doc = element.ownerDocument;
const maybeElement = doc.getElementById('some-view');

// Legacy methods are still available
element.measure((x, y, width, height, pageX, pageY) => {
  /* ... */
});
```

}, \[]);

return <View ref={ref} />;
}

```

Additionally, this will expose access to leaf [text nodes](https://reactnative.dev/docs/text-nodes) (created by the `Text` component) and [document nodes](https://reactnative.dev/docs/document-nodes) representing React Native root nodes.

This is a backwards compatible change, as the new nodes will continue implementing the legacy methods (like `measure`).

For more information, please check our [documentation](https://reactnative.dev/docs/nodes).

## Other changes[​](#other-changes "Direct link to Other changes")

### Web Performance APIs (Canary)[​](#web-performance-apis-canary "Direct link to Web Performance APIs (Canary)")

React Native now implements a subset of the performance APIs available on Web:

* [High Resolution Time](https://www.w3.org/TR/hr-time-3/): defines `performance.now()` and `performance.timeOrigin`.
* [Performance Timeline](https://w3c.github.io/performance-timeline/): defines `PerformanceObserver` and methods to access performance entries in the performance object (`getEntries()`, `getEntriesByType()`, `getEntriesByName()`).
* [User Timing](https://w3c.github.io/user-timing/): defines `performance.mark` and `performance.measure`.
* [Event Timing API](https://w3c.github.io/event-timing/): defines `event` entry types reported to `PerformanceObserver`.
* [Long Tasks API](https://w3c.github.io/longtasks/): defines `longtask` entry types reported to `PerformanceObserver`.

They allow tracking different aspects of performance in your app at runtime (for telemetry) and they will be visible in the performance panel in React Native DevTools (available in a future version of React Native).

They are currently **available only in the [canary release level](https://reactnative.dev/docs/releases/release-levels)**, and will be released as stable in a future version of React Native.

### Optimized Debug Build Type for Android[​](#optimized-debug-build-type-for-android "Direct link to Optimized Debug Build Type for Android")

Starting with React Native 0.82, you will be able to use the `debugOptimized` build type to speed up your development experience.

Historically, Android creates two default build variants:

* `debug`, used by default when developing and that allows you to connect to the various debugger tools such as React Native DevTools, Metro, the Android JVM and C++ debugger
* `release`, used when shipping your application to production. This is fully optimized, with obfuscation and optimization that will make debugging harder.

As most React Native developers won’t need to use the C++ debugger when developing, we introduced the `debugOptimized` build type.

With `debugOptimized` your animations and re-rendering will be faster, because you’re running a React Native build with several C++ optimizations enabled. At the same time you will still be able to use React Native Dev Tools to debug your JavaScript code.

When using `debugOptimized`, you won’t be able to use the C++ native debuggers, but you will still be able to use it if you use the debug build type.

To run the `debugOptimized` variant for your app you can invoke:

* Community CLI
* Expo

```

npx react-native run-android --mode debugOptimized

```
```

npx expo run:android --variant debugOptimized

```

info

The `debugOptimized` build type has also been backported to React Native 0.81 and Expo SDK 54.

You can see the `debugOptimized` in action in these samples where we’re rendering several animations on screens.

The build running `debug` is running at \~20FPS while the `debugOptimized` one is running at \~60FPS:

| `debug`                                                                                             | `debugOptimized`                                                                                                       |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![Example build running with debug](/assets/images/0.82-debug-b85b9cfcbd8b7c2f86f8bea40be8edd1.gif) | ![Example build running with debugOptimized](/assets/images/0.82-debug-optimized-42824de1774ee3794888eb24203f56e2.gif) |

## Breaking Changes[​](#breaking-changes "Direct link to Breaking Changes")

### Uncaught promise rejections will now raise `console.error`[​](#uncaught-promise-rejections-will-now-raise-consoleerror "Direct link to uncaught-promise-rejections-will-now-raise-consoleerror")

Following the [improvement of reporting uncaught JavaScript errors](/blog/2025/08/12/react-native-0.81.md#improved-reporting-of-uncaught-javascript-errors) in the previous version, we will now be reporting uncaught promises through that mechanism as well:

![Example of a promise rejection reported to console](/assets/images/0.82-uncaught-promise-rejection-report-9b6e4e11cc1db946a1ebd377a54a21cc.png)

Due to a bug, these were completely swallowed and ignored previously, so please expect some pre-existing errors to surface after upgrading to React Native 0.81. For that reason, previously pre-existing errors might also surface in JavaScript errors reported to your backend, and create a surge in new reports.

### Other Breaking Changes[​](#other-breaking-changes "Direct link to Other Breaking Changes")

#### General[​](#general "Direct link to General")

* Move `ReactNativeFeatureFlags` to `src/private`
  * In general you should not depend on `ReactNativeFeatureFlags` at all as that is a private API.
* Type of `Appearance.setColorScheme()` has been updated to no longer accept a nullable value
  
  * Use 'unspecified' instead of null/undefined in the edge case that the color scheme needs to be reset.

#### iOS[​](#ios "Direct link to iOS")

* Migrated `RCTDisplayLink` away from legacy api `RCTModuleData` as we plan to remove it in the future.

#### Android[​](#android "Direct link to Android")

* Class `com.facebook.react.bridge.JSONArguments` is removed as was accidentally `public`
* Deprecate `MessageQueueThreadPerfStats`
  * We deprecated this API and replaced it with stub. You should not rely on stats from this API anymore as the provided stats were not reliable
* Bump Gradle from 8.x to 9.0.0
  
  * List of all the changes in the next major stable version of Gradle 9.0.0 is available [here](https://gradle.org/whats-new/gradle-9/) but we expect no impact at all to users

#### C++[​](#c "Direct link to C++")

* Delete backward compatibility headers for `CallbackWrapper.h` / `LongLivedObject.h`

  * The correct include for those headers is `#include <react/bridging/LongLivedObject.h>` and `#include <react/bridging/CallbackWrapper.h>`.
  * You should not use the old includes under `#import <ReactCommon/….h>`

Read the full list of breaking changes in the [CHANGELOG for 0.82](https://github.com/facebook/react-native/blob/main/CHANGELOG.md#v0820).

## Acknowledgements[​](#acknowledgements "Direct link to Acknowledgements")

React Native 0.82 contains over 868 commits from 93 contributors. Thanks for all your hard work!

We want to send a special thank you to those community members that shipped significant contributions in this release:

* [Dawid Małecki](https://github.com/coado) and [Jakub Piasecki](https://github.com/j-piasecki) for the help in rolling out Hermes V1.
* [Krystof Woldrich](https://github.com/krystofwoldrich) for the support with fixing the swallowing of uncaught promise rejections.
* [Riccardo Cipolleschi](https://github.com/cipolleschi) for the support with writing the React 19.1.1 and Hermes V1 paragraph above.
* [Rubén Norte](https://github.com/rubennorte) for the support with writing the DOM API and Performance API paragraphs.
* [Tomasz Zawadzki](https://github.com/tomekzaw/) for the support with the `debugOptimized` benchmarking.

## Upgrade to 0.82[​](#upgrade-to-082 "Direct link to Upgrade to 0.82")

Please use the [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) to view code changes between React Native versions for existing projects, in addition to the [upgrading to new versions docs](/docs/upgrading.md).

To create a new project:

```

npx @react-native-community/cli@latest init MyProject --version latest

```

If you use Expo, React Native 0.82 will be available as part of the expo\@canary releases.

The next SDK, SDK 55, will be shipped with the next stable release of React Native: 0.83.

info

0.82 is now the latest stable version of React Native and 0.79.x moves to unsupported. For more information see [React Native's support policy](https://github.com/reactwg/react-native-releases/blob/main/docs/support.md).

**Tags:**

* [engineering](/blog/tags/engineering)


---

# React Native 0.83 - React 19.2, New DevTools features, no breaking changes

December 10, 2025 ·



12 min read

![Alex Hunt](https://github.com/huntie.png)

Alex Hunt

Software Engineer @ Meta

[](https://x.com/huntie "X")[](https://github.com/huntie "GitHub")

![Riccardo Cipolleschi](https://github.com/cipolleschi.png)

Riccardo Cipolleschi

Software Engineer @ Meta

[](https://x.com/CipolleschiR "X")[](https://github.com/cipolleschi "GitHub")

![Gabriel Donadel Dall'Agnol](https://github.com/gabrieldonadel.png)

Gabriel Donadel Dall'Agnol

Software Engineer @ Expo

[](https://x.com/donadeldev "X")[](https://github.com/gabrieldonadel "GitHub")

![Alan Hughes](https://github.com/alanjhughes.png)

Alan Hughes

Software Engineer @ Expo

[](https://github.com/alanjhughes "GitHub")

Today we are excited to release React Native 0.83!

This release includes React 19.2, significant new features for React Native DevTools, and support for the Web Performance and Intersection Observer APIs (Canary). This is also the first React Native release with no user facing breaking changes.

### Highlights[​](#highlights "Direct link to Highlights")

* [React 19.2](/blog/2025/12/10/react-native-0.83.md#react-192)
* [New DevTools features](/blog/2025/12/10/react-native-0.83.md#new-devtools-features)
* [Intersection Observers (Canary)](/blog/2025/12/10/react-native-0.83.md#intersection-observers-canary)
* [Web Performance APIs as stable](/blog/2025/12/10/react-native-0.83.md#web-performance-apis-as-stable)

## React 19.2[​](#react-192 "Direct link to React 19.2")

This release includes React 19.2, bringing the new `<Activity>` and `useEffectEvent` APIs to React Native.

Important: [CVE-2025-55182](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components)

At time of release, `react-native@0.83.0` depends on `react@19.2.0`, and you might also have seen the recent [Critical Security Vulnerability in React Server Components](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components).

We want to stress that **React Native is NOT directly affected by this vulnerability**, as it does not depend on the impacted packages:

* `react-server-dom-webpack`
* `react-server-dom-parcel`
* `react-server-dom-turbopack`

**However**, if you are using React Native as part of a **monorepo** where these packages may be present, please check and upgrade them immediately.

We will update all React dependencies to `19.2.1` in our next patch release.

### `<Activity>`[​](#activity "Direct link to activity")

`<Activity>` lets you break your app into "activities" that can be controlled and prioritized. You can use Activity as an alternative to conditionally rendering parts of your app, and it currently supports 2 modes: `'visible'` and `'hidden'`.

* `hidden`: hides the children, unmounts effects, and defers all updates until React has nothing left to work on.
* `visible`: shows the children, mounts effects, and allows updates to be processed normally.

One interesting feature of trees hidden using `<Activity mode='hidden'>` is that they preserve their state. So, when they become visible again, they, for example, keep the search status and the selection from a previous user interaction.

| React 19.1.1                                                                         | React 19.2.1                                                                      |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| ![](/assets/images/0.83-react-19.2-no-activity-61b910cc3d32753f1432f8d365963dab.gif) | ![](/assets/images/0.83-react-19.2-activity-c374acc50fc57945dd0ef92ab6d119fe.gif) |

You can read more about `<Activity>` in the [React docs](https://react.dev/reference/react/Activity).

### `useEffectEvent`[​](#useeffectevent "Direct link to useeffectevent")

One common pattern with `useEffect` is to notify the app code about some kind of "event" from an external system. The problem with this approach is that a change to any value used inside such an event will cause the surrounding Effect to re-run.

To solve this, most users disable the lint rule and exclude the dependency. But that can lead to bugs since the linter can no longer help you keep the dependencies up to date if you need to update the Effect later.

With `useEffectEvent`, you can split the "event" part of this logic out of the Effect that emits it.

You can read more about `useEffectEvent` in the [React docs](https://react.dev/reference/react/useEffectEvent).

## New DevTools features[​](#new-devtools-features "Direct link to New DevTools features")

In 0.83 we're excited to deliver some long awaited features and quality of life improvements to React Native DevTools.

### Network and Performance panels[​](#network-and-performance-panels "Direct link to Network and Performance panels")

Network inspection and performance tracing are two powerful new capabilities in React Native DevTools, available today.

![Network panel list in React Native DevTools](/assets/images/debugging-rndt-network-462cd5e39a5525592501627bb0087747.jpg)

**Network inspection**, now available for all React Native apps, allows you to view and understand the network requests made by your app. Logged requests provide detailed metadata such as timings and headers sent/received, as well as response previews. And — for the first time — you can use the Initiator tab to see where in your code a network request originated.

**💡 Network event coverage, Expo support**

**Which network events are captured?**

Today, we record all network calls through `fetch()`, `XMLHttpRequest`, and `<Image>` — with support for custom networking libraries, such as Expo Fetch, coming later.

**Expo Network differences**

Because of this, apps using Expo will continue to see the "Expo Network" panel — a separate implementation by the Expo framework which will log these additional request sources but has slightly reduced features.

* Coverage for Expo-specific network events.
* No request initiator support.
* No Performance panel integration.

We're working with Expo to integrate Expo Fetch and third party networking libraries with our new Network inspection pipeline in future releases.

![A performance trace in React Native DevTools](/assets/images/debugging-rndt-performance-084166527768b90dbb936b240707bdcb.jpg)

**Performance tracing** allows you to record a performance session within your app to understand how your JavaScript code is running and what operations took the most time. In React Native, we show JavaScript execution, React Performance tracks, Network events, and custom [User Timings](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/User_timing), rendered in a single performance timeline.

Together with support for the Web Performance APIs in 0.83, this is a powerful feature set providing fine-grained visibility into what might be making your React Native apps slow. We encourage everyone to try out the Performance panel and make it a part of your daily workflow.

Learn more about our newest [React Native DevTools features](/docs/react-native-devtools.md) and [React Performance tracks](https://react.dev/reference/dev-tools/react-performance-tracks).

### New desktop app[​](#new-desktop-app "Direct link to New desktop app")

Previously, React Native DevTools launched in a browser window and required Chrome or Edge to be installed. Today, we're introducing a vastly improved desktop experience with our new bundled desktop app. It features:

* **The same zero-install setup as before**, now with **no web browser requirement**.
* **Faster launch** via a lightweight and notarized desktop binary. In rare cases where this cannot be downloaded (such as a corporate firewall), we fall back to the previous browser launch flow.
* **Better windowing**, with improved multitasking on macOS, auto-raise on breakpoint, auto-raise when reconnecting to the same app, and saved window arrangements on relaunch.
* **Improved reliability** by running DevTools separately from your personal browser profile. In particular, this resolves bug reports we have received about certain preinstalled Chrome extensions causing React Native DevTools to break.

![React Native DevTools icon in the macOS Dock](/assets/images/0.83-rndt-desktop-app-99c6ef69aebde93fc5775942e660518c.jpg)

## Intersection Observers (Canary)[​](#intersection-observers-canary "Direct link to Intersection Observers (Canary)")

As part of our effort to bring web APIs to React Native, we have added support for [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) in the [canary release](https://reactnative.dev/docs/next/releases/release-levels#how-to-initialize-react-native-using-canary--experimental) for 0.83.

`IntersectionObserver` allows you to asynchronously observe layout intersections between a target element and its ancestor. Please see our [API](https://reactnative.dev/docs/next/global-intersectionobserver) and [implementation docs](https://github.com/facebook/react-native/blob/main/packages/react-native/src/private/webapis/intersectionobserver/__docs__/README.md) for more details. We've also included [examples](https://github.com/facebook/react-native/tree/main/packages/rn-tester/js/examples/IntersectionObserver) in RNTester.

[](/blog/assets/0.83-intersection-observer.mp4)

## Other changes[​](#other-changes "Direct link to Other changes")

### Web Performance APIs as stable[​](#web-performance-apis-as-stable "Direct link to Web Performance APIs as stable")

As introduced in 0.82, React Native now implements a subset of the [Performance APIs](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API) available on Web — now rolled out as stable:

* [High Resolution Time](https://www.w3.org/TR/hr-time-3/): defines `performance.now()` and `performance.timeOrigin`.
* [Performance Timeline](https://w3c.github.io/performance-timeline/): defines `PerformanceObserver` and methods to access performance entries in the performance object (`getEntries()`, `getEntriesByType()`, `getEntriesByName()`).
* [User Timing](https://w3c.github.io/user-timing/): defines `performance.mark` and `performance.measure`.
* [Event Timing API](https://w3c.github.io/event-timing/): defines `event` entry types reported to `PerformanceObserver`.
* [Long Tasks API](https://w3c.github.io/longtasks/): defines `longtask` entry types reported to `PerformanceObserver`.

These APIs allow tracking different aspects of performance in your app, visible in the Performance panel in React Native DevTools, as well as at runtime via `PerformanceObserver`.

`PerformanceObserver` also works in production builds, opening new opportunities for capturing real world performance metrics in your apps.

### Experimental - Hermes V1[​](#experimental---hermes-v1 "Direct link to Experimental - Hermes V1")

![Hermes logo](/assets/images/0.83-hermes-v1-15f50ba6bcc70a8b99e4c3e13bd17ac8.jpg)

Hermes V1 is the next evolution of Hermes, with improvements in the compiler and the VM that significantly boost JavaScript performance.

In React Native 0.82, we released Hermes V1 as an experimental opt-in. And in 0.83, Hermes V1 includes further performance improvements.

**💡 Enabling Hermes V1**

**Note**: While Hermes V1 is in the experimental phase, you’ll need to build React Native from source to try it out.

To try Hermes V1 in your own project, use the following steps:

1. Force your package manager to resolve the experimental version of Hermes V1 compiler package by modifying the corresponding section of your package.json file (note that the current versioning convention is only for the experimental phase of Hermes V1):

* yarn
* npm

package.json

```

"resolutions": { "hermes-compiler": "250829098.0.4" }

```

package.json

```

"overrides": { "hermes-compiler": "250829098.0.4" }

```

2. Enable Hermes V1 for Android by adding hermesV1Enabled=true inside `android/gradle.properties`:

   android/gradle.properties

```

hermesV1Enabled=true

```

Also, configure React Native to build from source by editing android/settings.gradle:

android/settings.gradle

```

```
 includeBuild('../node_modules/react-native') {
     dependencySubstitution {
         substitute(module("com.facebook.react:react-android")).using(project(":packages:react-native:ReactAndroid"))
         substitute(module("com.facebook.react:react-native")).using(project(":packages:react-native:ReactAndroid"))
         substitute(project(":packages:react-native:ReactAndroid:hermes-engine")).using(module("com.facebook.hermes:hermes-android:250829098.0.1"))
     }
 }
```

```

3. Enable Hermes V1 for iOS by installing pods with `RCT_HERMES_V1_ENABLED=1` environment variable.

```

RCT\_HERMES\_V1\_ENABLED=1 bundle exec pod install

```

Keep in mind that Hermes V1 is not compatible with the precompiled React Native builds, so make sure you don’t use the `RCT_USE_PREBUILT_RNCORE` flag when installing pods.

4. To confirm if your app is running Hermes V1, execute the following code within your app or the DevTools console. This code will return the Hermes version, which should match the version specified in step 1 (250829098.0.1):

```

// expecting "250829098.0.1" in Hermes V1
HermesInternal.getRuntimeProperties()\['OSS Release Version'];

```

### Experimental - Compile out the Legacy Architecture on iOS[​](#experimental---compile-out-the-legacy-architecture-on-ios "Direct link to Experimental - Compile out the Legacy Architecture on iOS")

In this release, we are adding a new flag for iOS that allows you to compile out the Legacy Architecture from the codebase. If your app is already on the New Architecture, you can try to remove the legacy architecture code by installing your pods with:

```

RCT\_REMOVE\_LEGACY\_ARCH=1 bundle exec pod install

```

This should reduce both the build time and the size of your app. The improvements depend on how many third party libraries you are using: in our tests, using a new app without dependencies, the build time was reduced from 73.0 seconds to 58.2 seconds, and the app size went from 51.2 Mb to 48.2 Mb.

info

`RCT_REMOVE_LEGACY_ARCH` is not compatible with React Native precompiled binaries. If you are using precompiled binaries, you'll need to reinstall the pods and build the app from source.

### Experimental - Debug your precompiled binaries on iOS[​](#experimental---debug-your-precompiled-binaries-on-ios "Direct link to Experimental - Debug your precompiled binaries on iOS")

In this release, we've implemented the ability to debug the React Native code that is shipped with a precompiled binary. This is primarily helpful to library maintainers or if you are developing a native module or a native component.

To debug the binary code shipped with the React Native precompiled binary, follow these steps:

```

# From the ios folder of your project

bundle exec pod cache clean --all
bundle exec pod deintegrate
RCT\_USE\_RN\_DEP=1 RCT\_USE\_PREBUILT\_RNCORE=1
RCT\_SYMBOLICATE\_PREBUILT\_FRAMEWORKS=1 bundle exec pod install
open <your-project>.xcworkspace

```

The magic is done by the `RCT_SYMBOLICATE_PREBUILT_FRAMEWORKS` flag, which instructs CocoaPods to download the React Native dSYM files and expand them in the proper folder.

At this point, you can put a breakpoint in your app, for example in `AppDelegate.swift`, and build and run the app from Xcode.

When the application pauses, open the Xcode console and run the LLDB command:

```

# If you are running the app in the simulator

add-dsym <path-to-your-app>/ios/Pods/React-Core-prebuilt/React.xcframework/ios-arm64\_x86\_64-simulator/React.framework/dSYMs/React.framework.dSYM
