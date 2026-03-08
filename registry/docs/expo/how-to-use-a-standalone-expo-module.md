# How to use a standalone Expo module

Learn how to use a standalone module created with create-expo-module in your project by using a monorepo or publishing the package to npm.

**The recommended way to create an Expo module** in an existing project is described in the [Expo Modules API: Get Started](/modules/get-started) guide. This tutorial explains two additional methods for using a module created with `create-expo-module` in an existing project:

- [Configure a monorepo](/modules/use-standalone-expo-module-in-your-project#use-a-monorepo)
- [Publish the module to npm](/modules/use-standalone-expo-module-in-your-project#publish-the-module-to-npm)

These methods are useful if you still want to keep the module separate from the application or share it with other developers.

## Use a monorepo

Your project should use the following structure:

- **apps**: A directory to store multiple projects, including React Native apps.
- **packages**: A directory to keep different packages used by your apps.
- **package.json**: This is the root package file that contains the Yarn workspaces configuration.

> To learn how to configure your project as a monorepo, check out the [Working with monorepos](/guides/monorepos) guide.

### Initialize a new module

Once you have set up the basic monorepo structure, create a new module using `create-expo-module` with the flag `--no-example` to skip creating the example app:

```sh
npx create-expo-module packages/expo-settings --no-example
```

### Set up a workspace dependency

Add your native module from **packages** to your apps' dependencies. Update the **package.json** file in each app inside the **apps** directory that will use your native module and add your native module to the existing entries of dependencies:

```json
{
  "dependencies": {
    ... 
    "expo-settings": "*"
    ... 
  }
}
```

### Run the module

Run one of your apps to ensure everything works. Then, start the TypeScript compiler in **packages/expo-settings** to watch for changes and rebuild the module's JavaScript:

```sh
cd packages/expo-settings
npm run build
```

Open another terminal window, select an app from the **apps** directory, and run the `prebuild` command with the `--clean` option. Repeat these steps for each app in your monorepo to use the new module.

```sh
npx expo prebuild --clean
```

Compile and run the app with the following command:

```sh
npx expo run:android
npx expo run:ios
```

You can now use the module in your app. To test it, edit the **src/app/index.tsx** file in your app and render the text message from the `expo-settings` module:

```tsx
import React from 'react';
import { Text, View } from 'react-native';
import * as Settings from 'expo-settings';

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{Settings.hello()}</Text>
    </View>
  );
}
```

After this configuration, the app displays the text "Hello world! 👋".

## Publish the module to npm

You can publish the module on npm and install it as a dependency in your project by following the steps below.

### Initialize a new module

Start by creating a new module with `create-expo-module`. Follow the prompts carefully, as you will publish this library, and choose a unique name for your npm package.

```sh
npx create-expo-module expo-settings
```

### Run the example project

Run one of your apps to ensure everything works. Then, start the TypeScript compiler in the root of your project to watch for changes and rebuild the module's JavaScript:

```sh
npm run build
```

Open another terminal window, compile and run the example app:

```sh
cd example
npx expo run:android
npx expo run:ios
```

### Publish the package to npm

To publish your package to npm, you need an npm account. If you don't have one, create an account on [the npm website](https://www.npmjs.com/signup). After creating an account, log in by running the following command:

```sh
npm login
```

Navigate to the root of your module, then run the following command to publish it:

```sh
npm publish
```

Your module will now be published to npm and can be installed in other projects using `npm install`.

Apart from publishing your module to npm, you can use it in your project in the following ways:

- **Create a tarball**: Use `npm pack` to create a tarball of your module, then install it in your project by running `npm install /path/to/tarball`. This method is helpful for testing your module locally before publishing it or sharing it with others who don't have access to the npm registry.
- **Run a local npm registry**: Use a tool such as [Verdaccio](https://verdaccio.org/) to host a local npm registry. You can install your module from this registry, which is useful for managing internal packages within a company or organization.
- **Publish a private package**: [Use a private registry with EAS Build](/build-reference/private-npm-packages) to manage private modules securely.

### Test the published module

To test the published module in a new project, create a new app and install the module as a dependency by running the following command:

```sh
npx create-expo-app@latest my-app --template default@sdk-55
cd my-app
npx expo install expo-settings
```

You can now use the module in your app! To test it, edit **src/app/index.tsx** and render the text message from **expo-settings**.

```tsx
import React from 'react';
import * as Settings from 'expo-settings';
import { Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{Settings.hello()}</Text>
    </View>
  );
}
```

Finally, prebuild your project and run the app by executing the following commands:

```sh
npx expo prebuild --clean
npx expo run:android
npx expo run:ios
```

After this configuration, you see the text "Hello world! 👋" displayed in the app.

## Next steps

[Wrap third-party native libraries](/modules/third-party-library) — Learn how to wrap third-party native libraries in an Expo module.

[Tutorial: Creating a native module](/modules/native-module-tutorial) — A tutorial on creating a native module that persists settings with Expo Modules API.

***

# Wrap third-party native libraries
