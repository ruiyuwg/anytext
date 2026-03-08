# Get Started Without a Framework

**Platform support**

Android

iOS

macOS

TV

watchOS

Web

Windows

visionOS

If you have constraints that are not served well by a [Framework](/architecture/glossary.md#react-native-framework), or you prefer to write your own Framework, you can create a React Native app without using a Framework.

To do so, you'll first need to [set up your environment](/docs/set-up-your-environment.md). Once you're set up, continue with the steps below to create an application and start developing.

### Step 1: Creating a new application[​](#step-1-creating-a-new-application "Direct link to Step 1: Creating a new application")

warning

If you previously installed a global `react-native-cli` package, please remove it as it may cause unexpected issues:

shell

```
npm uninstall -g react-native-cli @react-native-community/cli
```

You can use [React Native Community CLI](https://github.com/react-native-community/cli) to generate a new project. Let's create a new React Native project called "AwesomeProject":

shell

```
npx @react-native-community/cli@latest init AwesomeProject
```

This is not necessary if you are integrating React Native into an existing application, or if you've installed [Expo](https://docs.expo.dev/bare/installing-expo-modules/) in your project, or if you're adding Android support to an existing React Native project (see [Integration with Existing Apps](/docs/integration-with-existing-apps.md)). You can also use a third-party CLI to set up your React Native app, such as [Ignite CLI](https://github.com/infinitered/ignite).

info

If you are having trouble with iOS, try to reinstall the dependencies by running:

1. `cd ios` to navigate to the `ios` folder.
2. `bundle install` to install [Bundler](https://bundler.io/)
3. `bundle exec pod install` to install the iOS dependencies managed by CocoaPods.

#### \[Optional] Using a specific version or template[​](#optional-using-a-specific-version-or-template "Direct link to [Optional] Using a specific version or template")

If you want to start a new project with a specific React Native version, you can use the `--version` argument:

shell

```
npx @react-native-community/cli@X.XX.X init AwesomeProject --version X.XX.X
```

You can also start a project with a custom React Native template with the `--template` argument, read more [here](https://github.com/react-native-community/cli/blob/main/docs/init.md#initializing-project-with-custom-template).

### Step 2: Start Metro[​](#step-2-start-metro "Direct link to Step 2: Start Metro")

[**Metro**](https://metrobundler.dev/) is the JavaScript build tool for React Native. To start the Metro development server, run the following from your project folder:

- npm
- Yarn

shell

```
npm start
```

shell

```
yarn start
```

note

If you're familiar with web development, Metro is similar to bundlers such as Vite and webpack, but is designed end-to-end for React Native. For instance, Metro uses [Babel](https://babel.dev/) to transform syntax such as JSX into executable JavaScript.

### Step 3: Start your application[​](#step-3-start-your-application "Direct link to Step 3: Start your application")

Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

- npm
- Yarn

shell

```
npm run android
```

shell

```
yarn android
```

If everything is set up correctly, you should see your new app running in your Android emulator shortly.

This is one way to run your app - you can also run it directly from within Android Studio.

tip

If you can't get this to work, see the [Troubleshooting](/docs/troubleshooting.md) page.

### Step 4: Modifying your app[​](#step-4-modifying-your-app "Direct link to Step 4: Modifying your app")

Now that you have successfully run the app, let's modify it.

- Open `App.tsx` in your text editor of choice and edit some lines.
- Press the `R` key twice or select `Reload` from the Dev Menu (`Ctrl` + `M`) to see your changes!

### That's it\![​](#thats-it "Direct link to That's it!")

Congratulations! You've successfully run and modified your first barebone React Native app.

![](/docs/assets/GettingStartedCongratulations.png)

### Now what?[​](#now-what "Direct link to Now what?")

- If you want to add this new React Native code to an existing application, check out the [Integration guide](/docs/integration-with-existing-apps.md).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](/docs/getting-started.md).

***

# ✨ \_\_DEV\_\_

You can use the `__DEV__` pseudo-global variable in the codebase to guard development-only blocks of code.

It is inlined during compilation and gets completely stripped out with the `if` blocks it guards in the minified build.

***

# AbortController

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) for more information.

The global `AbortController` class, as defined in Web specifications.

***

# AbortSignal

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) for more information.

The global `AbortSignal` class, as defined in Web specifications.

***

# alert

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) for more information.

The global `alert` function, as defined in Web specifications.

***

# Blob

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob) for more information.

The global `Blob` class, as defined in Web specifications.

***

# cancelAnimationFrame

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame) for more information.

The global `cancelAnimationFrame` function, as defined in Web specifications.

***

# cancelIdleCallback

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelIdleCallback) for more information.

The global `cancelIdleCallback` function, as defined in Web specifications.

***

# clearInterval

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval) for more information.

The global `clearInterval` function, as defined in Web specifications.

***

# clearTimeout

warning

🚧 This page is work in progress, so please refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout) for more information.

The global `clearTimeout` function, as defined in Web specifications.

***
