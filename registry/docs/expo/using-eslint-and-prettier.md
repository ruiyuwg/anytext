# Using ESLint and Prettier

A guide on configuring ESLint and Prettier to format Expo apps.

[ESLint](https://eslint.org/) is a JavaScript linter that helps you find and fix errors in your code. It's a great tool to help you write better code and catch mistakes before they make it to production. In conjunction, you can use [Prettier](https://prettier.io/docs/en/), a code formatter that ensures all the code files follow a consistent styling.

This guide provides steps to set up and configure ESLint and Prettier.

## ESLint

### Setup

> **From SDK 53 onwards**, the default ESLint config file uses the [Flat config](https://eslint.org/blog/2022/08/new-config-system-part-2/) format. It also supports legacy config. **For SDK 52 and earlier**, the default ESLint config file uses legacy config and does not support Flat config.

To set up ESLint in your Expo project, you can use the Expo CLI to install the necessary dependencies. Running this command also creates a **eslint.config.js** file at the root of your project which extends configuration from [`eslint-config-expo`](https://github.com/expo/expo/tree/main/packages/eslint-config-expo).

```sh
npx expo lint
```

### Usage

> **Recommended:** If you're using VS Code, install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to lint your code as you type.

You can lint your code manually from the command line with the `npx expo lint` script:

```sh
npx expo lint
```

Running the above command will run the `lint` script from **package.json**.

```sh
/src/components/hello-wave.tsx
22:6 warning React Hook useEffect has a missing dependency: "rotateAnimation".
Either include it or remove the dependency array react-hooks/exhaustive-deps
✖ 1 problem (0 errors, 1 warning)
```

### Environment configuration

ESLint is generally configured for a single environment. However, the source code is written in JavaScript in an Expo app that runs in multiple different environments. For example, the **app.config.js**, **metro.config.js**, **babel.config.js**, and **src/app/+html.tsx** files are run in a Node.js environment. It means they have access to the global `__dirname` variable and can use Node.js modules such as `path`. Standard Expo project files like **src/app/index.js** can be run in Hermes, Node.js, or the web browser.

The approach to configure environment-specific globals differs between Flat config and legacy config:

For Flat config, **metro.config.js** files already work with Node.js globals because of the built-in support in `eslint-config-expo`. For other configuration files that might need Node.js globals, use [`languageOptions.globals`](https://eslint.org/docs/latest/use/configure/language-options#predefined-global-variables) in your **eslint.config.js**:

```js
const { defineConfig, globalIgnores } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  globalIgnores(['dist/*']),
  expoConfig,
  {
    files: ['babel.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
```

For example, with this setup, you can now use Node.js globals in **babel.config.js**:

```js
import path from 'path';
const __dirname = path.dirname(__filename);

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

## Prettier

### Installation

To install Prettier in your project:

```sh
npx expo install prettier eslint-config-prettier eslint-plugin-prettier --dev
```

### Setup

To integrate Prettier with ESLint, update your **eslint.config.js**:

```js
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*'],
  },
]);
```

Now, when you run `npx expo lint`, anything that is not aligned with Prettier formatting will be caught as an error.

To customize Prettier settings, create a **.prettierrc** file at the root of your project and add your configuration.

[Custom Prettier configuration](https://github.com/expo/expo/tree/main/packages/eslint-config-universe#customizing-prettier) — Learn more about customizing Prettier configuration.

## Troubleshooting

### ESLint is not updating in VS Code

If you're using VS Code, install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to lint your code as you type. You can try restarting the ESLint server by running the command `ESLint: Restart ESLint Server` from the [command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette).

### ESLint is slow

ESLint can be slow to run on large projects. The easiest way to speed up the process is to lint fewer files. Add a **.eslintignore** file to your project root to ignore certain files and directories such as:

```sh
/.expo
node_modules
```

## Migration to Flat config

> **Note:** Flat config is supported in Expo SDK 53 and later.

Upgrade ESLint and `eslint-config-expo`:

```sh
npx expo install eslint eslint-config-expo  --dev
```

If you haven't customized your ESLint config at all, delete your **.eslintrc.js** and generate the new config with:

```sh
npx expo lint
```

Alternatively, migrate your config based on the [ESLint's migration guide](https://eslint.org/docs/latest/use/configure/migration-guide). `npx expo lint` supports both legacy and flat config, so the new config will automatically be picked up by the CLI.

***

# Using TypeScript
