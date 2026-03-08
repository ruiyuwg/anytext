# Tailwind CSS

Learn how to configure and use Tailwind CSS in your Expo project.

> Standard Tailwind CSS supports only web platform. For universal support, use a library such as [NativeWind](https://www.nativewind.dev/), which allows creating styled React Native components with Tailwind CSS.

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework and can be used with Metro for web projects. This guide explains how to configure your Expo project to use the framework.

## Prerequisites

The following files will be modified to set the Tailwind CSS configuration:

`app.json`

`package.json`

`global.css`

`index.js`

Ensure that your project is using Metro for web. You can verify this by checking the `web.bundler` field which is set to `metro` in the **app.json** file.

```json
{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}
```

## Configuration

Configure Tailwind CSS in your Expo project according to the [Tailwind PostCSS documentation](https://tailwindcss.com/docs/installation/using-postcss).

Install `tailwindcss` and its required peer dependencies. Then, run the initialization command to create **tailwind.config.js** and **post.config.js** files in the root of your project.

```sh
npx expo install tailwindcss@3 postcss autoprefixer --dev
npx tailwindcss init -p
```

Add paths to all of your template files inside **tailwind.config.js**.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure this points to your source code
    './src/app/**/*.{js,tsx,ts,jsx}',
    // If you use a `src` directory, add: './src/**/*.{js,tsx,ts,jsx}'
    // Do the same with `components`, `hooks`, `styles`, or any other top-level directories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

> If you are using Expo Router, consider using a root **src** directory to simplify this step. Learn more about [top-level src directory](/router/reference/src-directory).

Create a **global.css** file in the root of your project and directives for each of Tailwind's layers:

```css
/* This file adds the requisite utility classes for Tailwind to work. */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import the **global.css** file in your **src/app/\_layout.tsx** (if using Expo Router) or **index.js** file:

```tsx
import '../../global.css';
```

```tsx
// Import the global.css file in the index.js file:
import './global.css';
```

> If you are using [DOM components](/guides/dom-components), add this file import to each module using the `"use dom"` directive since they don't share globals.

You now start your project and use Tailwind CSS classes in your components.

```sh
npx expo start
```

## Usage

You can use Tailwind with React DOM elements as-is:

```tsx
export default function Index() {
  return (
    <div className="bg-slate-100 rounded-xl">
      <p className="text-lg font-medium">Welcome to Tailwind</p>
    </div>
  );
}
```

You can use the `{ $$css: true }` syntax to use Tailwind with React Native web elements:

```tsx
import { View, Text } from 'react-native';

export default function Index() {
  return (
    <View style={{ $$css: true, _: 'bg-slate-100 rounded-xl' }}>
      <Text style={{ $$css: true, _: 'text-lg font-medium' }}>Welcome to Tailwind</Text>
    </View>
  );
}
```

## Tailwind for Android and iOS

Tailwind does not support Android and iOS platforms. You can use a compatibility library such as [NativeWind](https://www.nativewind.dev/) for universal support.

## Alternative for Android and iOS

Alternatively, you can use [DOM components](/guides/dom-components) to render your Tailwind web code in a `WebView` on native.

```tsx
'use dom';

// Remember to import the global.css file in each DOM component.
import '../../global.css';

export default function Page() {
  return (
    <div className="bg-slate-100 rounded-xl">
      <p className="text-lg font-medium">Welcome to Tailwind</p>
    </div>
  );
}
```

## Troubleshooting

If you have a custom `config.cacheStores` in your **metro.config.js**, you need to extend the Expo superclass of `FileStore`:

```js
// Import the Expo superclass which has support for PostCSS.
const { FileStore } = require('@expo/metro-config/file-store');

config.cacheStores = [
  new FileStore({
    root: '/path/to/custom/cache',
  }),
];

module.exports = config;
```

Ensure you don't have CSS disabled in your **metro.config.js**:

```js
/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // Do not disable CSS support when using Tailwind.
  isCSSEnabled: true,
});
```

***

# Using local HTTPS development
