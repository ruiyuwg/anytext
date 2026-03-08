# Start developing

Make your first change to an Expo project and see it live on your device.

## Start a development server

To start the development server, run the following command:

```sh
npx expo start
```

## Open the app on your device

After running the command above, you will see a QR code in your terminal. Scan this QR code to open the app on your device.

If you're using an Android Emulator or iOS Simulator, you can press a or i respectively to open the app.

Having problems?

Make sure you are on the same Wi-Fi network on your computer and your device.

If it still doesn't work, it may be due to the router configuration — this is common for public networks. You can work around this by choosing the **Tunnel** connection type when starting the development server, then scanning the QR code again.

```sh
npx expo start --tunnel
```

> Using the **Tunnel** connection type will make the app reloads considerably slower than on **LAN** or **Local**, so it's best to avoid tunnel when possible. You may want to install and use an emulator or simulator to speed up development if **Tunnel** is required to access your machine from another device on your network.

## Make your first change

Open the **src/app/index.tsx** file in your code editor and make a change.

```diff
- Welcome to Expo
+ Hello World!
```

Changes not showing up on your device?

Expo Go is configured by default to automatically reload the app whenever a file is changed, but let's make sure to go over the steps to enable it in case somehow things aren't working.

- Make sure you have the [development mode enabled in Expo CLI](/workflow/development-mode#development-mode).

- Close the Expo app and reopen it.

- Once the app is open again, shake your device to reveal the developer menu. Press Cmd ⌘ + D.

- If you see **Fast Refresh** enabled, toggle it. If you see **Disable Fast Refresh**, dismiss the developer menu. Now try making another change.

## File structure

Below, you can get familiar with the default project's file structure:

Files

### app

Contains the app's navigation, which is file-based. The file structure of the **src/app** directory determines the app's navigation.

The app has two routes defined by two files: **src/app/index.tsx** and **src/app/explore.tsx**. The layout file in **src/app/\_layout.tsx** sets up the tab navigator using the platform-specific **AppTabs** component.

## Features

The default project template has the following features:

Default project

### File-based routing

The app has two screens: **src/app/index.tsx** and **src/app/explore.tsx**. The layout file in **src/app/\_layout.tsx** sets up navigation using a platform-specific **AppTabs** component that uses native tabs on Android and iOS, and Expo Router UI tabs on web.

***

# Next steps

# Next steps

Develop, review, and submit your project.

Here are next steps to continue building your app:

### Reset your project

You can remove the boilerplate code and start fresh with a new project. Run the following command to reset your project:

```sh
npm run reset-project
```

This command will move the existing files in **app** to **app-example**, then create a new **app** directory with a new **index.tsx** file.

### Develop, review, and deploy

Learn how to develop by reading the docs in the Develop section. You'll learn how to create [UI elements](/develop/user-interface/splash-screen-and-app-icon), add [unit tests](/develop/unit-testing), include [native modules](/config-plugins/introduction), and more.

Once you've developed your app, you can share it with your teammates for [review](/review/overview).

Finally, you can [build](/deploy/build-project) and [submit](/deploy/submit-to-app-stores) your project to the app stores.

### Step-by-step guide

For a guided, step-by-step walkthrough of building an app with Expo from start to finish, check out the [tutorial](/tutorial/introduction).

***

# Expo Skills for AI agents
