# Using Hermes

[![](/docs/assets/HermesLogo.svg)](https://hermesengine.dev)

[Hermes](https://hermesengine.dev) is an open-source JavaScript engine optimized for React Native. For many apps, using Hermes will result in improved start-up time, decreased memory usage, and smaller app size when compared to JavaScriptCore. Hermes is used by default by React Native and no additional configuration is required to enable it.

## Bundled Hermes[​](#bundled-hermes "Direct link to Bundled Hermes")

React Native comes with a **bundled version** of Hermes. We are building a version of Hermes for you whenever we release a new version of React Native. This will make sure you're consuming a version of Hermes which is fully compatible with the version of React Native you're using.

This change is fully transparent to users of React Native. You can still disable Hermes using the command described in this page. You can [read more about the technical implementation on this page](/architecture/bundled-hermes.md).

## Confirming Hermes is in use[​](#confirming-hermes-is-in-use "Direct link to Confirming Hermes is in use")

If you've recently created a new app from scratch, you should see if Hermes is enabled in the welcome view:

![Where to find JS engine status in the new project?](/docs/assets/HermesApp.png)

A `HermesInternal` global variable will be available in JavaScript that can be used to verify that Hermes is in use:

jsx

```
const isHermes = () => !!global.HermesInternal;
```

caution

If you are using a non-standard way of loading the JS bundle, it is possible that the `HermesInternal` variable is available but you aren't using the highly optimised pre-compiled bytecode. Confirm that you are using the `.hbc` file and also benchmark the before/after as detailed below.

To see the benefits of Hermes, try making a release build/deployment of your app to compare. For example; from the root of your project:

- Android
- iOS

* npm
* Yarn

shell

```
npm run android -- --mode="release"
```

shell

```
yarn android --mode release
```

- npm
- Yarn

shell

```
npm run ios -- --mode="Release"
```

shell

```
yarn ios --mode Release
```

This will compile JavaScript to Hermes Bytecode during build time which will improve your app's startup speed on device.

## Switching back to JavaScriptCore[​](#switching-back-to-javascriptcore "Direct link to Switching back to JavaScriptCore")

React Native also supports using JavaScriptCore as the [JavaScript engine](/docs/javascript-environment.md). Follow the instructions [from the community repository](https://github.com/react-native-community/javascriptcore) to opt-out of Hermes.

***

# I18nManager

The `I18nManager` module provides utilities for managing Right-to-Left (RTL) layout support for languages like Arabic, Hebrew, and others. It provides methods to control RTL behavior and check the current layout direction.

## Examples[​](#examples "Direct link to Examples")

### Change positions and animations based on RTL[​](#change-positions-and-animations-based-on-rtl "Direct link to Change positions and animations based on RTL")

If you absolutely position elements to align with other flexbox elements, they may not align in RTL languages. Using `isRTL` can be used to adjust alignment or animations.

### During Development[​](#during-development "Direct link to During Development")
