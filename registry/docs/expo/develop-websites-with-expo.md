# Develop websites with Expo

Learn how to develop your app for the web so you can build a universal app.

Expo has first-class support for building full-stack websites with React. Expo websites can be [statically rendered](/router/web/static-rendering) for SEO and performance, or client-rendered for a more app-like experience in the browser.

Render text on any platform with the `<Text>` component from [React Native for web](https://github.com/necolas/react-native-web).

```jsx
import { Text } from 'react-native';

export default function Page() {
  return <Text>Home page</Text>;
}
```

React Native for web (RNW) is a set of component libraries such as `<View>`, and `<Text>`, that wrap `react-dom` primitives such as `<div>`, `<p>`, and `<img>`. RNW is optional when developing for web since you can use React DOM directly, but we often recommended it when building across platforms as it maximizes code reuse.

> React Native for web is used to power the entire [X](https://x.com/) website.

All of the libraries in the Expo SDK are built to support both browser and server rendering environments (when applicable). Libraries are also optimized for the individual platforms they target.

Development features like Fast Refresh, debugging, environment variables, and [bundling](/guides/customizing-metro) are also fully universal, enabling a unified developer experience. Expo CLI **automatically optimizes code** for individual platforms when you build for production, using techniques like [platform shaking](/guides/tree-shaking#platform-shaking).

## Getting started

### Install web dependencies

```sh
npx expo install react-dom react-native-web @expo/metro-runtime
```

Not using the `expo` package in your app yet?

If you haven't added Expo to your React Native app yet, you can either [install Expo modules](/bare/installing-expo-modules) (recommended) or just install the `expo` package and configure the app entry file. This will allow you to target web, but it will not include support for the Expo SDK.

1. Install [Expo CLI](/more/expo-cli) in your project:

```sh
npm install expo
```

2. Modify the entry file to use [`registerRootComponent`](/versions/latest/sdk/expo#registerrootcomponentcomponent) instead of `AppRegistry.registerComponent`:

```diff
- import {AppRegistry} from 'react-native';
- import {name as appName} from './app.json';
+ import {registerRootComponent} from 'expo';
  import App from './App';
- AppRegistry.registerComponent(appName, () => App);
+ registerRootComponent(App);
```

### Start the dev server

You can now start the dev server and develop in the browser with:

```sh
npx expo start --web
```

The app can be exported as a production website with:

```sh
npx expo export --platform web
```

## Next

[File-based routing](/router/introduction) — Build routes and navigation with Expo Router.

[Static rendering and SEO](/router/web/static-rendering) — Render your website as static HTML with Expo Router to improve SEO and performance.

[Deploy instantly with EAS Hosting](/eas/hosting/get-started) — EAS Hosting is the best way to deploy your Expo Router and React Native web apps with support for custom domains, SSL, and more.

[Customizing the JavaScript bundler](/guides/customizing-metro) — Customize Metro bundler for your project.

***

# Publish websites
