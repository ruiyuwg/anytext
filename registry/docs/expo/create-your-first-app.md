# Create your first app

In this chapter, learn how to create a new Expo project.

In this chapter, let's learn how to create a new Expo project and how to get it running.

[Watch: Creating your first universal Expo app](https://www.youtube.com/watch?v=m1-bc53EGh8) — Create a new Expo project from scratch and get it running on Android, iOS, and web.

## Prerequisites

We'll need the following to get started:

- [Expo Go](https://expo.dev/go) installed on a physical device
- [Node.js (LTS version)](https://nodejs.org/en) installed
- [VS Code](https://code.visualstudio.com/) or any other preferred code editor or IDE installed
- A macOS, Linux, or Windows (PowerShell and [WSL2](https://expo.fyi/wsl)) with a terminal window open

The tutorial assumes that you are familiar with TypeScript and React. If you are not familiar with them, check out the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) and [React's official tutorial](https://react.dev/learn).

## Initialize a new Expo app

We'll use [`create-expo-app`](/more/create-expo) to initialize a new Expo app. It is a command line tool to create a new React Native project. Run the following command in your terminal:

```sh
npx create-expo-app@latest StickerSmash
cd StickerSmash
```

This command will create a new project directory named StickerSmash, using the [default](/more/create-expo#--template) template. This template has essential boilerplate code and libraries needed to build our app, including Expo Router. We'll continue to add more libraries throughout this tutorial as needed.

> `create-expo-app@latest` currently creates an SDK 54 project. This tutorial is designed for SDK 54, so no `--template` flag is needed.

Benefits of using the default template

- Creates a new React Native project with `expo` package installed
- Includes recommended tools such as Expo CLI
- Includes a tab navigator from Expo Router to provide a basic navigation system
- Automatically configured to run a project on multiple platforms: Android, iOS, and web
- TypeScript configured by default

## Download assets

[Download assets archive](/static/images/tutorial/sticker-smash-assets.zip) — We'll be using these assets throughout this tutorial.

After downloading the archive:

1. Unzip the archive and replace the default assets in the **your-project-name/assets/images** directory.
2. Open the project directory in a code editor or IDE.

## Run reset-project script

In this tutorial, we'll build our app from scratch and understand the fundamentals of adding a file-based navigation. Let's run the `reset-project` script to remove the boilerplate code:

```sh
npm run reset-project
```

After running the above command, there are two files (**index.tsx** and **\_layout.tsx**) left inside the **app** directory. The previous files from **app** and other directories (**components**, **constants**, and **hooks** — containing boilerplate code) are moved inside the **app-example** directory by the script. We'll create our own directories and component files as we go along.

What does the `reset-project` script do?

`reset-project` script resets the **app** directory structure in a project and copies the previous boilerplate files from the project's root directory to another sub-directory called **app-example**. We can delete it since it is not part of our main app's structure.

## Run the app on mobile and web

In the project directory, run the following command to start the [development server](/more/glossary-of-terms#development-server) from the terminal:

```sh
npx expo start
```

After running the above command:

1. The development server will start, and you'll see a QR code inside the terminal window.
2. Scan that QR code to open the app on the device. On Android, use the Expo Go > **Scan QR code** option. On iOS, use the default camera app.
3. To run the web app, press w in the terminal. It will open the web app in the default web browser.

Once it is running on all platforms, the app should look like this:

## Edit the index screen

The **app/index.tsx** file defines the text displayed on the app's screen. It is the entry point of our app and executes when the development server starts. It uses core React Native components such as `<View>` and `<Text>` to display background and text.

Styles applied to these components use JavaScript objects rather than CSS, which is used on web. However, a lot of the properties will look familiar if you've previously used CSS on web. Most React Native components accept a `style` prop that accepts a JavaScript object as its value. For more details, see [Styling in React Native](https://reactnative.dev/docs/style).

Let's modify **app/index.tsx** screen:

1. Import `StyleSheet` from `react-native` and create a `styles` object to define our custom styles.
2. Add a `styles.container.backgroundColor` property to `<View>` with the value of `#25292e`. This changes the background color.
3. Replace the default value of `<Text>` with "Home screen".
4. Add a `styles.text.color` property to `<Text>` with the value of `#fff` (white) to change the text color.

```tsx
import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
```

> React Native uses the same color format as the web. It supports hex triplets (this is what `#fff` is), `rgba`, `hsl`, and named colors, such as `red`, `green`, `blue`, `peru`, and `papayawhip`. For more information, see [Colors in React Native](https://reactnative.dev/docs/colors).

Once you save your changes, they're sent and applied to the running apps connected to the development server:

## Summary

Chapter 1: Create your first app

We've successfully created a new Expo project, used React Native core components, and are ready to develop our StickerSmash app.

In the next chapter, we will learn how to add a stack and a tab navigator to our app.

[Next: Add navigation](/tutorial/add-navigation)

***

# Add navigation
