# Tree shaking and code removal

Learn about how Expo CLI optimizes production JavaScript bundles.
Android, iOS, tvOS, Web

Tree shaking (also referred to as *dead code removal*) is a technique to remove unused code from the production bundle. Expo CLI employs different techniques, including [minification](/guides/minify), to improve startup time by removing unused code.

## Platform shaking

Expo CLI employs a process known as **platform shaking** for app bundling, where it creates separate bundles for each platform (Android, iOS, web). It ensures that the code is only used on one platform and is removed from other platforms.

Any code that is used conditionally based on the `Platform` module from `react-native` is removed from the other platforms. However, this exclusion specifically applies to instances where `Platform.select` and `Platform.OS` are directly imported from react-native in each file. If these are re-exported through a different module, they will not be removed during the bundling process for different platforms.

For example, consider the following transformation input:

```js
import { Platform } from 'react-native';

if (Platform.OS === 'ios') {
  console.log('Hello on iOS');
}
```

The production bundle will remove the conditional based on the platform:

```js
Empty on Android
```

```js
console.log('Hello on iOS');
```

This optimization is production only and runs on a per-file basis. If you re-export `Platform.OS` from a different module, it will not be removed from the production bundle.

The `process.env.EXPO_OS` can be used to detect the platform that the JavaScript was bundled for (cannot change at runtime). This value does not support platform shaking imports due to how Metro minifies code after dependency resolution.

## Remove development-only code

In your project, there might be code designed to help with the development process. It should be excluded from the production bundle. To handle these scenarios, use the `process.env.NODE_ENV` environment variable or the non-standard `__DEV__` global boolean.

For example, the following code snippet will be removed from the production bundle:

```js
if (process.env.NODE_ENV === 'development') {
  console.log('Hello in development');
}

if (__DEV__) {
  console.log('Another development-only conditional...');
}
```

After *constants folding* takes place, the conditions can be evaluated statically:

```js
if ('production' === 'development') {
  console.log('Hello in development');
}

if (false) {
  console.log('Another development-only conditional...');
}
```

The unreachable conditions are removed during [minification](/guides/minify):

```js
Empty file
```

To improve speed, Expo CLI only performs code elimination in production builds. Conditionals from the above code snippet are kept in development builds.

## Custom code removal

`EXPO_PUBLIC_` environment variables are inlined before the minification process. This means they can be used to remove code from the production bundle. For example:

```js
EXPO_PUBLIC_DISABLE_FEATURE=true;
```

```js
if (!process.env.EXPO_PUBLIC_DISABLE_FEATURE) {
  console.log('Hello from the feature!');
}
```

The above input code snippet is transformed to the following after `babel-preset-expo`:

```js
if (!'true') {
  console.log('Hello from the feature!');
}
```

The above code snippet is then minified, which removes the unused conditional:

```js
// Empty file
```

- This system does not apply to server code as environment variables are not inlined in server bundles.
- Library authors should not use `EXPO_PUBLIC_` environment variables as they only run in application code for security reasons.

## Removing server code

It's common to use `typeof window === 'undefined'` to conditionally enable or disable code for server and client environments.

`babel-preset-expo` will transform `typeof window === 'undefined'` to `true` when bundling for server environments. By default, this check remains unchanged when bundling for web client environments. This transform runs in both development and production but only removes conditional requires in production.

You can configure `babel-preset-expo` to enable this transform by passing `{ minifyTypeofWindow: true }`. By default, this transform remains disabled even for web environments since web workers won't have a `window` global.

```js
if (typeof window === 'undefined') {
  console.log('Hello on the server!');
}
```

The input code from the previous step is transformed to the following code snippet after `babel-preset-expo` when bundling for server environments (API routes, server rendering):

```js
if (true) {
  console.log('Hello on the server!');
}
```

Bundling client code for web or native apps will not replace `typeof window` unless `minifyTypeOfWindow: true` is set:

```js
if (typeof window === 'undefined') {
  console.log('Hello on the server!');
}
```

For server environments, the above code snippet is then minified which removes the unused conditional:

```js
console.log('Hello on the server!');
```

```js
if (typeof window === 'undefined') {
  console.log('Hello on the server!');
}
// Empty file
```

## React Native web imports

`babel-preset-expo` provides a built-in optimization for the `react-native-web` barrel file. If you import `react-native` directly using ESM, then the barrel file will be removed from the production bundle.

If you import `react-native` using the static `import` syntax, the barrel file will be removed.

```js
import { View, Image } from 'react-native';
```

```js
import View from 'react-native-web/dist/exports/View';
import Image from 'react-native-web/dist/exports/Image';
```

## Remove unused imports and exports

> Experimentally available in SDK 52 and later.

You can experimentally enable support for automatically removing unused imports and exports across modules. This is useful for speeding up native OTA downloads and optimizing web performance where JavaScript must be parsed and executed using a standard JavaScript engine.

Consider the following example code:

```js
import { ArrowUp } from './icons';

export default function Home() {
  return <ArrowUp />;
}
```

```js
export function ArrowUp() {
  /* ... */
}

export function ArrowDown() {
  /* ... */
}

export function ArrowRight() {
  /* ... */
}

export function ArrowLeft() {
  /* ... */
}
```

Since only `ArrowUp` is used in `index.js`, the production bundle will remove all other components from `icons.js`.

```js
export function ArrowUp() {
  /* ... */
}
```

This system scales up to automatically optimize all `import` and `export` syntax in your app, across all platforms. While this results in smaller bundles, processing JS still requires time and computer memory so avoid importing millions of modules.

- Tree-shaking only runs in production bundles and can only run on modules that use `import` and `export` syntax. Files that use `module.exports` and `require` will not be tree-shaken.
- Avoid adding Babel plugins such as `@babel/plugin-transform-modules-commonjs` which convert `import`/`export` syntax to CJS. This will break tree-shaking across your project.
- Modules that are marked as side-effects will not be removed from the graph.
- `export * from "..."` will be expanded and optimized unless the export uses `module.exports` or `exports`.
- All modules in the Expo SDK are shipped as ESM and can be exhaustively tree-shaken.

## Enabling tree shaking

> Experimentally available in SDK 52 and later.

Ensure `experimentalImportSupport` and ensure your app builds and runs as expected.

> **Note**: Enabled by default in SDK 54 and later.

How to enable import support in older SDK versions?

```js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: true,
  },
});

module.exports = config;
```

Experimental import support uses a custom version of the `@babel/plugin-transform-modules-commonjs` plugin. This drastically reduces the number of resolutions and simplifies your output bundle. This feature can be used with `inlineRequires` to further optimize your bundle experimentally.

Toggle on the environment variable `EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1` to keep modules around until the entire graph is created. Ensure your app builds and runs as expected in production with this feature enabled before continuing.

```sh
EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1
```

This will only be used in production mode.

Toggle on the environment variable `EXPO_UNSTABLE_TREE_SHAKING=1` to enable the feature.

```sh
EXPO_UNSTABLE_TREE_SHAKING=1
```

This will only be used in production mode.

Bundle your app in production mode to see the effects of tree shaking.

```sh
npx expo export
```

This feature is very experimental because it changes the fundamental structure of how Metro bundles code. By default, Metro bundles everything on-demand and lazily to ensure the fastest possible development times. In contrast, tree shaking requires some transformation to be delayed until after the entire bundle has been created. This means less code can be cached, which is generally fine because tree shaking is a production-only feature and production bundles often don't use transform caches.

## Barrel files

> Experimentally available in SDK 52 and later.

With Expo tree shaking, star exports will automatically be expanded and shaken based on usage. For example, consider the following code snippet:

```js
export * from './icons';
```

The optimization pass will crawl `./icons` and add the exports to the current module. If the exports are unused, they will be removed from the production bundle.

```js
export { ArrowRight, ArrowLeft } from './icons';
```

This will be shaken according to standard tree shaking rules. If you only import `ArrowRight`, then `ArrowLeft` will be removed from the production bundle.

If the star export pulls in ambiguous exports such as `module.exports.ArrowUp` or `exports.ArrowDown`, then the optimization pass will not expand the star export and no exports will be removed from the barrel file. You can use [Expo Atlas](/guides/analyzing-bundles#analyzing-bundle-size-with-atlas) to inspect the expanded exports.

You can use this strategy with libraries like `lucide-react` to remove all icons that are not used in your app.

## Recursive optimizations

> Experimentally available in SDK 52 and later.

Expo optimizes a module by recursing through the graph exhaustively to find unused imports. Consider the following code snippet:

```js
export function foo() {
  // Because bar is used here, it cannot be removed.
  bar();
}

export function bar() {}
```

In this case, `bar` is used in `foo`, so it cannot be removed. However, if `foo` is not used anywhere in the app, then `foo` will be removed and the module will be scanned again to see if `bar` can be removed. This process recurses 5 times for a given module before bailing out due to performance reasons.

## Side-effects

Expo CLI respects module side-effects according to the [Webpack system](https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free). Side-effects are generally used for defining global variables (`console.log`) or modifying prototypes (avoid doing this).

You can mark if your module has side-effects in the **package.json**:

```json
{
  "name": "library",
  "sideEffects": ["./src/*.js"]
}
```

Side-effects will prevent the removal of unused modules and disable module inlining to ensure JS code runs in the expected order. Side-effects will be removed if they're empty or contain only comments and directives (`"use strict"`, `"use client"`, and so on).

When Expo tree shaking is enabled, you can safely enable `inlineRequires` in your **metro.config.js** for production bundles. This will lazily load modules when they're evaluated, leading to faster startup time. Avoid using this feature without Expo tree shaking as it will move modules around in ways that can change the execution order of side-effects.

```js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: true,
    inlineRequires: true,
  },
});

module.exports = config;
```

## Optimizing for tree shaking

Before Expo tree shaking, React Native libraries would remove imports by wrapping them in conditional blocks such as:

```js
if (process.env.NODE_ENV === 'development') {
  require('./dev-only').doSomething();
}
```

This is problematic because you don't have accurate TypeScript support and it makes the graph ambiguous since you cannot statically analyze the code. With Expo tree shaking enabled, you can restructure this code to use ESM imports:

```js
import { doSomething } from './dev-only';

if (process.env.NODE_ENV === 'development') {
  doSomething();
}
```

In both cases, the entire module will be empty in production bundles.

***

# Minifying JavaScript
