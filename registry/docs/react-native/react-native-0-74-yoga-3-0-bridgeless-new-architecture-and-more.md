# React Native 0.74 - Yoga 3.0, Bridgeless New Architecture, and more

April 22, 2024 ·

15 min read

![Hur Ali](https://github.com/hurali97.png)

Hur Ali

Software Engineer @ Callstack

[](https://x.com/hurali97 "X")[](https://github.com/hurali97 "GitHub")

![Alan Hughes](https://github.com/alanjhughes.png)

Alan Hughes

Software Engineer @ Expo

[](https://github.com/alanjhughes "GitHub")

![Alfonso Curbelo](https://github.com/alfonsocj.png)

Alfonso Curbelo

Software Engineer @ Coinbase

[](https://github.com/alfonsocj "GitHub")

![Alex Hunt](https://github.com/huntie.png)

Alex Hunt

Software Engineer @ Meta

[](https://x.com/huntie "X")[](https://github.com/huntie "GitHub")

![Nicola Corti](https://github.com/cortinico.png)

Nicola Corti

Software Engineer @ Meta

[](https://x.com/cortinico "X")[](https://github.com/cortinico "GitHub")[](https://bsky.app/profile/cortini.co "Bluesky")

Today we're releasing React Native 0.74! This release adds Yoga 3.0, Bridgeless by default under the New Architecture, batched `onLayout` updates (New Architecture), and Yarn 3 as the default package manager for new projects.

We are also removing deprecated APIs, with the removal of `PropTypes` and breaking changes to `PushNotificationIOS`. On Android, SDK 23 (Android 6.0) is now the minimum supported version.

### Highlights[​](#highlights "Direct link to Highlights")

- [Yoga 3.0](/blog/2024/04/22/release-0.74.md#yoga-30)
- [New Architecture: Bridgeless by Default](/blog/2024/04/22/release-0.74.md#new-architecture-bridgeless-by-default)
- [New Architecture: Batched `onLayout` Updates](/blog/2024/04/22/release-0.74.md#new-architecture-batched-onlayout-updates)
- [Yarn 3 for New Projects](/blog/2024/04/22/release-0.74.md#yarn-3-for-new-projects)

### Breaking Changes[​](#breaking-changes "Direct link to Breaking Changes")

- [Android Minimum SDK Bump (Android 6.0)](/blog/2024/04/22/release-0.74.md#android-minimum-sdk-bump-android-60)
- [API Changes to PushNotificationIOS (Deprecated)](/blog/2024/04/22/release-0.74.md#api-changes-to-pushnotificationios-deprecated)
- [Removal of Deprecated `PropTypes`](/blog/2024/04/22/release-0.74.md#removal-of-deprecated-proptypes)
- [Removal of Flipper React Native Plugin](/blog/2024/04/22/release-0.74.md#removal-of-flipper-react-native-plugin)
- [Other Breaking Changes](/blog/2024/04/22/release-0.74.md#other-breaking-changes)

## Highlights[​](#highlights-1 "Direct link to Highlights")
