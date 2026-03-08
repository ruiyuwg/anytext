# from the ios folder

bundle exec pod install
open SampleApp.xcworkspace

```

If you now build your application from Xcode, you should be able to build successfully.

## Build and run your code on a Simulator[​](#build-and-run-your-code-on-a-simulator "Direct link to Build and run your code on a Simulator")

* npm
* Yarn

bash

```

npm run ios

```

bash

```

yarn run ios

```

[](/docs/assets/turbo-native-modules/turbo-native-modules-ios.webm)


---

# Learn the Basics

React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, `state`, and `props`. If you already know React, you still need to learn some React Native specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.

Let's do this thing.

## Hello World[​](#hello-world "Direct link to Hello World")

In accordance with the ancient traditions of our people, we must first build an app that does nothing except say "Hello, world!". Here it is:

If you are feeling curious, you can play around with sample code directly in the web simulators. You can also paste it into your `App.js` file to create a real app on your local machine.

## What's going on here?[​](#whats-going-on-here "Direct link to What's going on here?")

1. First of all, we need to import `React` to be able to use `JSX`, which will then be transformed to the native components of each platform.
2. On line 2, we import the `Text` and `View` components from `react-native`

Then we define the `HelloWorldApp` function, which is a [function component](https://react.dev/reference/react/Component) and behaves in the same way as in React for the web. This function returns a `View` component with some styles and a`Text` as its child.

The `Text` component allows us to render a text, while the `View` component renders a container. This container has several styles applied, let's analyze what each one is doing.

The first style that we find is `flex: 1`, the [`flex`](/docs/layout-props.md#flex) prop will define how your items are going to "fill" over the available space along your main axis. Since we only have one container, it will take all the available space of the parent component. In this case, it is the only component, so it will take all the available screen space.

The following style is [`justifyContent`](/docs/layout-props.md#justifycontent): "center". This aligns children of a container in the center of the container's main axis. Finally, we have [`alignItems`](/docs/layout-props.md#alignitems): "center", which aligns children of a container in the center of the container's cross axis.

Some of the things in here might not look like JavaScript to you. Don't panic. *This is the future*.

First of all, ES2015 (also known as ES6) is a set of improvements to JavaScript that is now part of the official standard, but not yet supported by all browsers, so often it isn't used yet in web development. React Native ships with ES2015 support, so you can use this stuff without worrying about compatibility. `import`, `export`, `const` and `from` in the example above are all ES2015 features. If you aren't familiar with ES2015, you can probably pick it up by reading through sample code like this tutorial has. If you want, [this page](https://babeljs.io/learn-es2015/) has a good overview of ES2015 features.

The other unusual thing in this code example is `<View><Text>Hello world!</Text></View>`. This is JSX - a syntax for embedding XML within JavaScript. Many frameworks use a specialized templating language which lets you embed code inside markup language. In React, this is reversed. JSX lets you write your markup language inside code. It looks like HTML on the web, except instead of web things like `<div>` or `<span>`, you use React components. In this case, `<Text>` is a [Core Component](/docs/intro-react-native-components.md) that displays some text and `View` is like the `<div>` or `<span>`.

## Components[​](#components "Direct link to Components")

So this code is defining `HelloWorldApp`, a new `Component`. When you're building a React Native app, you'll be making new components a lot. Anything you see on the screen is some sort of component.

## Props[​](#props "Direct link to Props")

Most components can be customized when they are created, with different parameters. These creation parameters are called props.

Your own components can also use `props`. This lets you make a single component that is used in many different places in your app, with slightly different properties in each place. Refer to `props.YOUR_PROP_NAME` in your functional components or `this.props.YOUR_PROP_NAME` in your class components. Here's an example:

* TypeScript
* JavaScript

Using `name` as a prop lets us customize the `Greeting` component, so we can reuse that component for each of our greetings. This example also uses the `Greeting` component in JSX. The power to do this is what makes React so cool.

The other new thing going on here is the [`View`](/docs/view.md) component. A [`View`](/docs/view.md) is useful as a container for other components, to help control style and layout.

With `props` and the basic [`Text`](/docs/text.md), [`Image`](/docs/image.md), and [`View`](/docs/view.md) components, you can build a wide variety of static screens. To learn how to make your app change over time, you need to [learn about State](#state).

## State[​](#state "Direct link to State")

Unlike props [that are read-only](https://react.dev/reference/react/Component#props) and should not be modified, the `state` allows React components to change their output over time in response to user actions, network responses and anything else.

#### What's the difference between state and props in React?[​](#whats-the-difference-between-state-and-props-in-react "Direct link to What's the difference between state and props in React?")

In a React component, the props are the variables that we pass from a parent component to a child component. Similarly, the state are also variables, with the difference that they are not passed as parameters, but rather that the component initializes and manages them internally.

#### Are there differences between React and React Native to handle the state?[​](#are-there-differences-between-react-and-react-native-to-handle-the-state "Direct link to Are there differences between React and React Native to handle the state?")

tsx

```

// ReactJS Counter Example using Hooks!

import React, {useState} from 'react';

const App = () => {
const \[count, setCount] = useState(0);

return (

```
  You clicked {count} times
  <button
    onClick={() => setCount(count + 1)}>
    Click me!
  
```

);
};

// CSS
.container {
display: flex;
justify-content: center;
align-items: center;
}

```

tsx

```

// React Native Counter Example using Hooks!

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const App = () => {
const \[count, setCount] = useState(0);

return (

```
  You clicked {count} times
  <Button
    onPress={() => setCount(count + 1)}
    title="Click me!"
  />
```

);
};

// React Native Styles
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
});

```

As shown above, there is no difference in handling the `state` between [React](https://react.dev/learn/state-a-components-memory) and `React Native`. You can use the state of your components both in classes and in function components using [hooks](https://react.dev/reference/react/useState)!

In the following example we will show the same above counter example using classes.


---

# Using TypeScript

[TypeScript](https://www.typescriptlang.org/) is a language which extends JavaScript by adding type definitions. New React Native projects target TypeScript by default, but also support JavaScript and Flow.

## Getting Started with TypeScript[​](#getting-started-with-typescript "Direct link to Getting Started with TypeScript")

New projects created by the [React Native CLI](/docs/getting-started-without-a-framework.md#step-1-creating-a-new-application) or popular templates like [Ignite](https://github.com/infinitered/ignite) will use TypeScript by default.

TypeScript may also be used with [Expo](https://expo.io), which maintains TypeScript templates, or will prompt you to automatically install and configure TypeScript when a `.ts` or `.tsx` file is added to your project.

shell

```

npx create-expo-app --template

```

## Adding TypeScript to an Existing Project[​](#adding-typescript-to-an-existing-project "Direct link to Adding TypeScript to an Existing Project")

1. Add TypeScript, types, and ESLint plugins to your project.

* npm
* Yarn

shell

```

npm install -D typescript @react-native/typescript-config @types/jest @types/react @types/react-test-renderer

```

shell

```

yarn add --dev typescript @react-native/typescript-config @types/jest @types/react @types/react-test-renderer

```

note

This command adds the latest version of every dependency. The versions may need to be changed to match the existing packages used by your project. You can use a tool like [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) to see the versions shipped by React Native.

2. Add a TypeScript config file. Create a `tsconfig.json` in the root of your project:

tsconfig.json

```

{
"extends": "@react-native/typescript-config"
}

```

3. Rename a JavaScript file to be `*.tsx`

warning

You should leave the `./index.js` entrypoint file as it is otherwise you may run into an issue when it comes to bundling a production build.

4. Run `tsc` to type-check your new TypeScript files.

* npm
* Yarn

shell

```

npx tsc

```

shell

```

yarn tsc

```

## Using JavaScript Instead of TypeScript[​](#using-javascript-instead-of-typescript "Direct link to Using JavaScript Instead of TypeScript")

React Native defaults new applications to TypeScript, but JavaScript may still be used. Files with a `.jsx` extension are treated as JavaScript instead of TypeScript, and will not be typechecked. JavaScript modules may still be imported by TypeScript modules, along with the reverse.

## How TypeScript and React Native works[​](#how-typescript-and-react-native-works "Direct link to How TypeScript and React Native works")

Out of the box, TypeScript sources are transformed by [Babel](/docs/javascript-environment.md#javascript-syntax-transformers) during bundling. We recommend that you use the TypeScript compiler only for type checking. This is the default behavior of `tsc` for newly created applications. If you have existing TypeScript code being ported to React Native, there are [one or two caveats](https://babeljs.io/docs/en/next/babel-plugin-transform-typescript) to using Babel instead of TypeScript.

## What does React Native + TypeScript look like[​](#what-does-react-native--typescript-look-like "Direct link to What does React Native + TypeScript look like")

You can provide an interface for a React Component's [Props](/docs/props.md) and [State](/docs/state.md) via `React.Component<Props, State>` which will provide type-checking and editor auto-completing when working with that component in JSX.

components/Hello.tsx

```

import {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export type Props = {
name: string;
baseEnthusiasmLevel?: number;
};

function Hello({name, baseEnthusiasmLevel = 0}: Props) {
const \[enthusiasmLevel, setEnthusiasmLevel] = useState(
baseEnthusiasmLevel,
);

const onIncrement = () =>
setEnthusiasmLevel(enthusiasmLevel + 1);
const onDecrement = () =>
setEnthusiasmLevel(
enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0,
);

const getExclamationMarks = (numChars: number) =>
numChars > 0 ? Array(numChars + 1).join('!') : '';

return (

```
    Hello {name}
    {getExclamationMarks(enthusiasmLevel)}
  
  
    <Button
      title="Increase enthusiasm"
      accessibilityLabel="increment"
      onPress={onIncrement}
      color="blue"
    />
    <Button
      title="Decrease enthusiasm"
      accessibilityLabel="decrement"
      onPress={onDecrement}
      color="red"
    />
  
```

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
},
greeting: {
fontSize: 20,
fontWeight: 'bold',
margin: 16,
},
});

export default Hello;

```

You can explore the syntax more in the [TypeScript playground](https://www.typescriptlang.org/play?strictNullChecks=false\&jsx=3#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wG4BYAKFEljgG8AhAVxhggDsAaOAZRgCeAGyS8AFkiQweAFSQAPaXABqwJAHcAvnGy4CRdDAC0HFDGAA3JGSpUFteILBI4ABRxgAznAC8DKnBwpiBIAFxwnjBQwBwA5hSUgQBGKJ5IAKIcMGLMnsCpIAAySFZCAPzhHMwgSUhQCZq2lGickXAAEkhCQhDhyIYAdABiAMIAPO4QXgB8vnAAFPRBKCE8KWmZ2bn5nkUlXXMADHCaAJS+s-QBcC0cbQDaSFk5eQXFpTxpMJsvO3ulAF05v0MANcqIYGYkPN1hlnts3vshKcEtdbm1OABJDhoIghLJzebnHyzL4-BG7d5deZPLavSlIuAAajgAEYUWjWvBOAARJC4pD4+B+IkXCJScn0-7U2m-RGlOCzY5lOCyinSoRwIxsuDhQ4cyicu7wWIS+RoIQrMzATgAWRQUAA1t4RVUQCMxA7PJVqrUoMTZm6PV7FXBlXAAIJQKAoATzIOeqDeFnsgYAKwgMXm+AAhPhzuF8DZDYk4EQYMwoBwFtdAmNVBoIoIRD56JFhEhPANbpCYnVNNNa4E4GM5Iomx3W+2RF3YkQpDFYgOh8OOl0evR8ARGqXV4F6MEkDu98P6KbvubLSBrXaHc6afCpVTkce92MAPRjmCD3fD+tqdQfxPOsWDYTgVz3cwYBbAAibEBVSFw1SlGCINXdA0E7PIkmAIRgEEQoUFqIQfBgmIBSFVDfxPTh3Cw1ssRxPFaVfYCbggHooFIpIhGYJAqLY98gOAsZQPYDg0OHKDYL5BC0lVR8-gEti4AwrDgBwvCCKIrpSIAE35ZismUtjaKITxPAYjhZKMmBWOAlpONIog9JMvchIgj8G0AocvIA4SDU0VFmi5CcZzmfgO3ESQYG7AwYGhK5Sx7FA+ygcIktXTARHkcJWS4IcUDw2IOExBKQG9OAYMwrI6hggrfzTXJzEwAQRk4BKsnCaraTq65NAawI5xixcMqHTAOt4YAAC8wjgAAmQ5BuHCasgAdSQYBYjEGBCySDi9PwZbAmvKBYhiPKADZloGqgzmC+xoHgAzMBQZghHgTpuggBIgA).

## Where to Find Useful Advice[​](#where-to-find-useful-advice "Direct link to Where to Find Useful Advice")

* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [React's documentation on TypeScript](https://react.dev/learn/typescript)
* [React + TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets) has a good overview on how to use React with TypeScript

## Using Custom Path Aliases with TypeScript[​](#using-custom-path-aliases-with-typescript "Direct link to Using Custom Path Aliases with TypeScript")

To use custom path aliases with TypeScript, you need to set the path aliases to work from both Babel and TypeScript. Here's how:

1. Edit your `tsconfig.json` to have your [custom path mappings](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping). Set anything in the root of `src` to be available with no preceding path reference, and allow any test file to be accessed by using `tests/File.tsx`:

diff

```

{

- "extends": "@react-native/typescript-config"

* "extends": "@react-native/typescript-config",
* "compilerOptions": {
* "baseUrl": ".",
* "paths": {
* ```
   "*": ["src/*"],
  ```
* ```
   "tests": ["tests/*"],
  ```
* ```
   "@components/*": ["src/components/*"],
  ```
* },
* }
  }

```

2. Add [`babel-plugin-module-resolver`](https://github.com/tleunen/babel-plugin-module-resolver) as a development package to your project:

* npm
* Yarn

shell

```

npm install --save-dev babel-plugin-module-resolver

```

shell

```

yarn add --dev babel-plugin-module-resolver

```

3. Finally, configure your `babel.config.js` (note that the syntax for your `babel.config.js` is different from your `tsconfig.json`):

diff

```

{
presets: \['module:metro-react-native-babel-preset'],

- plugins: \[
- \[
- ```
    'module-resolver',
  ```
- ```
    {
  ```
- ```
      root: ['./src'],
  ```
- ```
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
  ```
- ```
      alias: {
  ```
- ```
        tests: ['./tests/'],
  ```
- ```
        "@components": "./src/components",
  ```
- ```
      }
  ```
- ```
    }
  ```
- ]
- ]
  }

```


---

# Upgrading to new versions

Upgrading to new versions of React Native will give you access to more APIs, views, developer tools and other goodies. Upgrading requires a small amount of effort, but we try to make it straightforward for you.

## Expo projects[​](#expo-projects "Direct link to Expo projects")

Upgrading your Expo project to a new version of React Native requires updating the `react-native`, `react`, and `expo` package versions in your `package.json` file. Expo recommends upgrading SDK versions incrementally, one at a time. Doing so will help you pinpoint breakages and issues that arise during the upgrade process. See the [Upgrading Expo SDK Walkthrough](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/) for up-to-date information about upgrading your project.

## React Native projects[​](#react-native-projects "Direct link to React Native projects")

Because typical React Native projects are essentially made up of an Android project, an iOS project, and a JavaScript project, upgrading can be rather tricky. The [Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) is a web tool to help you out when upgrading your apps by providing the full set of changes happening between any two versions. It also shows comments on specific files to help understanding why that change is needed.

### 1. Select the versions[​](#1-select-the-versions "Direct link to 1. Select the versions")

You first need to select from and to which version you wish to upgrade, by default the latest major versions are selected. After selecting you can click the button "Show me how to upgrade".

💡 Major updates will show a "useful content" section on the top with links to help you out when upgrading.

### 2. Upgrade dependencies[​](#2-upgrade-dependencies "Direct link to 2. Upgrade dependencies")

The first file that is shown is the `package.json`, it's good to update the dependencies that are showing in there. For example, if `react-native` and `react` appears as changes then you can install it in your project by running following commands:

* npm
* Yarn

shell

```

# {{VERSION}} and {{REACT\_VERSION}} are the release versions showing in the diff

npm install react-native@{{VERSION}}
npm install react@{{REACT\_VERSION}}

```

shell

```
