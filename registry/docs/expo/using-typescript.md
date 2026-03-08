# Using TypeScript

An in-depth guide on configuring an Expo project with TypeScript.

Expo has first-class support for [TypeScript](https://www.typescriptlang.org/). The JavaScript interface of Expo SDK is written in TypeScript.

This guide provides a quick way to get started for a new project and also steps to migrate your existing JavaScript based Expo project to use TypeScript.

## Quick start

To create a new project, use the default template which includes base TypeScript configuration, example code, and basic navigation structure:

```sh
npx create-expo-app@latest --template default@sdk-55
```

After you create a new project using the command above, make sure to follow instructions from:

- [Set up your environment](/get-started/set-up-your-environment) which provides required steps for setting local development environment.
- [Start developing](/get-started/start-developing) which provides information on triggering a development server, file structure, and details about other features.

## Migrating existing JavaScript project

To migrate your existing JavaScript based project to use TypeScript, follow the instructions below:

### Rename files to use .tsx or .ts extension

Rename files to convert them to TypeScript. For example, start with the root component file such as **App.js** and rename it to **App.tsx**:

```sh
mv App.js App.tsx
```

> **Tip:** Use the **.tsx** extension if the file includes React components (JSX). If the file does not include any JSX, you can use the **.ts** file extension.

### Install required development dependencies

To install required `devDependencies` such as `typescript` and `@types/react` in **package.json**:

```sh
npx expo install typescript @types/react --dev
```

> Alternatively, run `npx expo start` command to install `typescript` and `@types/react` dev dependencies.

Type checking project files with `tsc`

To type check your project's files run `tsc` command within the root of your project directory:

```sh
npm run tsc
yarn tsc
```

### Add base configuration with tsconfig.json

A project's **tsconfig.json** should extend `expo/tsconfig.base` by default. You can automatically generate a **tsconfig.json** file by running the command:

```sh
npx expo customize tsconfig.json
```

The default configuration in **tsconfig.json** is user-friendly and encourages adoption. If you prefer **strict type checking** and reduce the chances of runtime errors, enable `strict` under [`compilerOptions`](https://www.typescriptlang.org/docs/handbook/compiler-options.html):

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true
  }
}
```

### Path aliases (Optional)

Expo CLI supports [path aliases](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) in **tsconfig.json** automatically. It allows importing modules with custom aliases instead of relative paths.

For example, to import `Button` component from **src/components/Button.tsx** using the alias **@/components/Button**, add the alias `@/*` in **tsconfig.json** and set it to the **src** directory:

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

Disable path aliases

`tsconfigPaths` is enabled by default which allows you to set path aliases. You can disable it by setting `tsconfigPaths` to `false` in the project's [app config](/workflow/configuration):

```json
{
  "expo": {
    "experiments": {
      "tsconfigPaths": false
    }
  }
}
```

#### Considerations

When using path aliases, consider the following:

- Restart Expo CLI after modifying **tsconfig.json** to update path aliases. You don't need to clear the Metro cache when the aliases change.
- If not using TypeScript, **jsconfig.json** can serve as an alternative to **tsconfig.json**.
- Path aliases add additional resolution time when defined.
- Path aliases are only supported by Metro (including Metro web) and not by the deprecated `@expo/webpack-config`.
- Bare projects require additional setup for this feature. See the [Metro setup guide](/versions/latest/config/metro#bare-workflow-setup) for more information.

### Absolute imports (Optional)

To enable absolute imports from a project's root directory, define [`compilerOptions.baseUrl`](https://www.typescriptlang.org/docs/handbook/module-resolution.html#base-url) the **tsconfig.json** file:

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "baseUrl": "./"
  }
}
```

For example, setting the above configuration allows importing `Button` component from the path **src/components/Button**:

```tsx
import Button from 'src/components/Button';
```

#### Considerations

When using absolute imports, consider the following:

- `compilerOptions.paths` are resolved relative to the `compilerOptions.baseUrl` if it is defined, otherwise they're resolved against the project root directory.
- `compilerOptions.baseUrl` is resolved before node modules. This means if you have a file named `./path.ts`, it can be imported instead of a node module named `path`.
- Restarting Expo CLI is necessary to update [`compilerOptions.baseUrl`](https://www.typescriptlang.org/docs/handbook/module-resolution.html#base-url) after modifying the **tsconfig.json**.
- If you're not using TypeScript, **jsconfig.json** can serve as an alternative to **tsconfig.json**.
- Absolute imports are only supported by Metro (including Metro web) and not by `@expo/webpack-config`.
- Bare projects require additional setup for this feature. See the [versioned Metro setup guide](/versions/latest/config/metro#bare-workflow-setup) for more information.

## Type generation

Some Expo libraries provide both static types and type generation capabilities. These types are automatically generated when the project builds or by running the `npx expo customize tsconfig.json` command.

## TypeScript for project's config files

Additional setup is required to use TypeScript for configuration files such as **metro.config.js** or **app.config.js**.

Install [`tsx`](https://tsx.is/) as a dev dependency and utilize its [`tsx/cjs` require hook](https://tsx.is/dev-api/entry-point#commonjs-mode-only) to import TypeScript files within your JS configuration file. This hook allows TypeScript imports while keeping the root file as JavaScript. The command below adds `tsx` so `import 'tsx/cjs'` works in the following sub-section examples.

```sh
npx expo install tsx --dev
```

### metro.config.js

Update **metro.config.js** to require **metro.config.ts** file:

```js
require('tsx/cjs'); // Add this to import TypeScript files
module.exports = require('./metro.config.ts');
```

Update **metro.config.ts** file with your project's metro configuration:

```ts
import { getDefaultConfig } from 'expo/metro-config';

const config = getDefaultConfig(__dirname);

module.exports = config;
```

Deprecated: webpack.config.js

Install the `@expo/webpack-config` package.

```js
require('tsx/cjs'); // Add this to import TypeScript files
module.exports = require('./webpack.config.ts');
```

```ts
import createExpoWebpackConfigAsync from '@expo/webpack-config/webpack';
import { Arguments, Environment } from '@expo/webpack-config/webpack/types';

module.exports = async function (env: Environment, argv: Arguments) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  return config;
};
```

### app.config.js

**app.config.ts** is supported by default. However, it doesn't support external TypeScript modules, or **tsconfig.json** customization. You can use the following approach to get a more comprehensive TypeScript setup:

```ts
import 'tsx/cjs'; // Add this to import TypeScript files
import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'my-app',
  slug: 'my-app',
};

export default config;
```

## Other TypeScript features

Some language features may require additional configuration. For example, if you want to use decorators you'll need to add the `experimentalDecorators` option. For more information on the available properties see the [TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) documentation.

## Learn how to use TypeScript

A good place to start learning TypeScript is the official [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html).

**For TypeScript and React components,** we recommend referring to the [React TypeScript CheatSheet](https://github.com/typescript-cheatsheets/react) to learn how to type your React components in a variety of common situations.

***

# Build Expo apps for TV
