## blog

Blog

- [Blog · React Native](/blog.md): Blog

### 2023

#### 01

- [First-class Support for TypeScript](/blog/2023/01/03/typescript-first.md): With the release of 0.71, React Native is investing in the TypeScript experience with the following changes:
- [React Native 0.71: TypeScript by Default, Flexbox Gap, and more...](/blog/2023/01/12/version-071.md): Today we’re releasing React Native version 0.71! This is a feature-packed release including:
- [React Native 0.71-RC0 Android outage postmortem](/blog/2023/01/27/71rc1-android-outage-postmortem.md): Now that 0.71 is available, we want to share some key information about the incident that broke Android builds for all React Native versions while releasing the first 0.71 release candidate for React Native & Expo Android builds on November 4th, 2022.

#### 06

- [React Native 0.72 - Symlink Support, Better Errors, and more](/blog/2023/06/21/0.72-metro-package-exports-symlinks.md): Today we’re releasing 0.72!
- [Package Exports Support in React Native](/blog/2023/06/21/package-exports-support.md): With the release of React Native 0.72, Metro — our JavaScript build tool — now includes beta support for the package.json "exports" field. When enabled, it adds the following functionality:

#### 12

- [React Native 0.73 - Debugging Improvements, Stable Symlink Support, and more](/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks.md): Today we're releasing React Native 0.73! This release adds improvements to debugging with Hermes, stable symlink support, Android 14 support, and new experimental features. We are also deprecating legacy debugging features, and are releasing the next pillar of the New Architecture: Bridgeless Mode!

### 2024

#### 04

- [React Native 0.74 - Yoga 3.0, Bridgeless New Architecture, and more](/blog/2024/04/22/release-0.74.md): Today we're releasing React Native 0.74! This release adds Yoga 3.0, Bridgeless by default under the New Architecture, batched onLayout updates (New Architecture), and Yarn 3 as the default package manager for new projects.

#### 06

- [Use a framework to build React Native apps](/blog/2024/06/25/use-a-framework-to-build-react-native-apps.md): At React Conf, we updated our guidance on the best tool to get started building React Native apps: a React Native framework - a toolbox with all the necessary APIs to let you build production-ready apps.

#### 08

- [React Native 0.75 - Support for Percentage Values in Layout, New Architecture Stabilization, Template & init Updates, and more](/blog/2024/08/12/release-0.75.md): Today we are excited to release React Native 0.75!

#### 10

- [React Native 0.76 - New Architecture by default, React Native DevTools, and more](/blog/2024/10/23/release-0.76-new-architecture.md): Today we are excited to release React Native 0.76!
- [New Architecture is here](/blog/2024/10/23/the-new-architecture-is-here.md): React Native 0.76 with the New Architecture by default is now available on npm!

### 2025

#### 01

- [React Native 0.77 - New Styling Features, Android’s 16KB page support, Swift Template](/blog/2025/01/21/version-0.77.md): Today we are excited to release React Native 0.77!

#### 02

- [React Native Core Contributor Summit 2024 Recap](/blog/2025/02/03/react-native-core-contributor-summit-2024.md): Every year, the core contributors in the React Native Community get together with the React Native team to collaboratively shape the direction of this project.
- [React Native 0.78 - React 19 and more](/blog/2025/02/19/react-native-0.78.md): Today we are excited to release React Native 0.78!

#### 04

- [React Native 0.79 - Faster tooling and much more](/blog/2025/04/08/react-native-0.79.md): Today we are excited to release React Native 0.79!

#### 06

- [Moving Towards a Stable JavaScript API (New Changes in 0.80)](/blog/2025/06/12/moving-towards-a-stable-javascript-api.md): In React Native 0.80, we're introducing two significant changes to React Native's JavaScript API — the deprecation of deep imports, and our new Strict TypeScript API. These are part of an ongoing effort to accurately define our API and offer dependable type safety to users and frameworks.
- [React Native 0.80 - React 19.1, JS API Changes, Freezing Legacy Arch and much more](/blog/2025/06/12/react-native-0.80.md): Today we are excited to release React Native 0.80!

#### 08

- [React Native 0.81 - Android 16 support, faster iOS builds, and more](/blog/2025/08/12/react-native-0.81.md): Today we are excited to release React Native 0.81!

#### 10

- [React Native 0.82 - A New Era](/blog/2025/10/08/react-native-0.82.md): Today we're excited to release React Native 0.82: the first React Native that runs entirely on the New Architecture.

#### 12

- [React Native 0.83 - React 19.2, New DevTools features, no breaking changes](/blog/2025/12/10/react-native-0.83.md): Today we are excited to release React Native 0.83!

### 2026

#### 02

- [React Native 0.84 - Hermes V1 by Default](/blog/2026/02/11/react-native-0.84.md): Today we're excited to release React Native 0.84!
- [React Native Comes to Meta Quest](/blog/2026/02/24/react-native-comes-to-meta-quest.md): React Native has always focused on helping developers reuse knowledge across platforms. What started with Android and iOS has steadily expanded to Apple TV, Windows, macOS, and even the web with react-strict-dom. In 2021, the Many Platform Vision post outlined a future where React Native could adapt to new devices and form factors without fragmenting the ecosystem.

***

# Full Documentation Content

## [React Native Comes to Meta Quest](/blog/2026/02/24/react-native-comes-to-meta-quest.md)

February 24, 2026 ·

9 min read

![Łukasz Chludziński](https://github.com/lukasz-app.png)

Łukasz Chludziński

Engineering Manager @ Callstack

[](https://x.com/lukasz_app "X")[](https://github.com/lukasz-app "GitHub")

![Jan Jaworski](https://github.com/jaworek.png)

Jan Jaworski

Software Engineer @ Callstack

[](https://x.com/jaworek3211 "X")[](https://github.com/jaworek "GitHub")

![Markus Leyendecker](https://github.com/mliond.png)

Markus Leyendecker

Product Manager @ Meta

[](https://github.com/mliond "GitHub")

React Native has always focused on helping developers reuse knowledge across platforms. What started with Android and iOS has steadily expanded to Apple TV, Windows, macOS, and even the web with react-strict-dom. In 2021, the [Many Platform Vision post](/blog/2021/08/26/many-platform-vision) outlined a future where React Native could adapt to new devices and form factors without fragmenting the ecosystem.

At React Conf 2025, we took another step toward that vision by [announcing official React Native support for Meta Quest devices](https://youtu.be/NiYwlvXsBKw?si=IGl4MiF6QtywVFGL\&t=1075). This post focuses on how to get started with React Native on Meta Quest, what works today, and how developers can build and ship VR apps using familiar tools and patterns.

**Tags:**

- [announcement](/blog/tags/announcement)

[**Read more**](/blog/2026/02/24/react-native-comes-to-meta-quest.md)

***
