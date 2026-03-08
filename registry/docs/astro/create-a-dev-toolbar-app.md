# Create a dev toolbar app

> Learn how to create a dev toolbar app for your site.

Astro includes a [development toolbar](/en/guides/dev-toolbar/) that you can use to inspect your site, check for accessibility and performance issues, and more. This toolbar can be extended with custom apps.

## Build a motivational dev toolbar app

[Section titled “Build a motivational dev toolbar app”](#build-a-motivational-dev-toolbar-app)

In this recipe, you’ll learn how to create a dev toolbar app that helps you stay motivated while working on your site. This app will display a motivational message every time you toggle it on.

Tip

Just want to get started quickly? Jump start your app by creating a new Astro project with the `toolbar-app` template.

- npm

  ```shell
  npm create astro@latest -- --template toolbar-app
  ```

- pnpm

  ```shell
  pnpm create astro -- --template toolbar-app
  ```

- Yarn

  ```shell
  yarn create astro -- --template toolbar-app
  ```

Or, keep reading to learn how to build an app from scratch.

### Creating the Astro integration

[Section titled “Creating the Astro integration”](#creating-the-astro-integration)

Dev toolbar apps can only be added by [Astro Integrations](/en/guides/integrations-guide/) using [the `astro:config:setup` hook](/en/reference/integrations-reference/#astroconfigsetup). You will need to create both a toolbar app and the integration that will add it to the toolbar of your existing Astro project.

1. In the root of your existing Astro project, create a new folder named `my-toolbar-app/` for your app and integration files. Create two new files in this folder: `app.ts` and `my-integration.ts`.

   - **my-toolbar-app/**

     - **app.ts**
     - **my-integration.ts**

   - src/

     - pages/

       - …

     - …

   - astro.config.mjs

   - package.json

   - tsconfig.json

2. In `my-integration.ts`, add the following code to provide both the name of your integration and the [`addDevToolbarApp()` function](/en/reference/dev-toolbar-app-reference/#toolbar-app-integration-setup) needed to add your dev toolbar app with the `astro:config:setup` hook:

   my-toolbar-app/my-integration.ts

   ```ts
   import { fileURLToPath } from 'node:url';
   import type { AstroIntegration } from 'astro';


   export default {
     name: 'my-astro-integration',
     hooks: {
       'astro:config:setup': ({ addDevToolbarApp }) => {
         addDevToolbarApp({
           id: "my-toolbar-app",
           name: "My Toolbar App",
           icon: "🚀",
           entrypoint: fileURLToPath(new URL('./app.ts', import.meta.url))
         });
       },
     },
   } satisfies AstroIntegration;
   ```

   Using relative paths to the entrypoint

   The `entrypoint` is the path to your dev toolbar app file **relative to the root of your existing Astro project**, not to the integration folder (`my-toolbar-app`) itself.

   To use relative paths for entrypoints, get the path to the current file using `import.meta.url` and resolve the path to the entrypoint from there.

3. To use this integration in your project, add it to the `integrations` array in your `astro.config.mjs` file.

   astro.config.mjs

   ```diff
   import { defineConfig } from 'astro/config';
   +import myIntegration from './my-toolbar-app/my-integration.ts';


   export default defineConfig({
   +  integrations: [myIntegration],
   })
   ```

4. If not already running, start the dev server. If your integration has been successfully added to your project, you should see a new “undefined” app in the dev toolbar.

   But, you will also see an error message that your dev toolbar app has failed to load. This is because you have not yet built the app itself. You will do that in the next section.

See the [Astro Integration API documentation](/en/reference/integrations-reference/) for more about building Astro integrations.

### Creating the app

[Section titled “Creating the app”](#creating-the-app)

Dev toolbar apps are defined using the `defineToolbarApp()` function from the `astro/toolbar` module. This function takes an object with an `init()` function that will be called when the dev toolbar app is loaded.

This `init()` function contains your app logic to render elements to the screen, send and receive client-side events from the dev toolbar, and communicate with the server.

app.ts

```ts
import { defineToolbarApp } from "astro/toolbar";


export default defineToolbarApp({
    init(canvas, app, server) {
      // ...
    },
});
```

To display motivational messages on the screen, you will use the `canvas` property to access a standard [ShadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot). Elements can be created and added to the ShadowRoot using the standard DOM APIs.

1. Copy the following code into `my-toolbar-app/app.ts`. This provides a list of motivational messages, and the logic to create a new `<h1>` element with a random message:

   my-toolbar-app/app.ts

   ```ts
   import { defineToolbarApp } from "astro/toolbar";


   const motivationalMessages = [
     "You're doing great!",
     "Keep up the good work!",
     "You're awesome!",
     "You're a star!",
   ];


   export default defineToolbarApp({
       init(canvas) {
         const h1 = document.createElement('h1');
         h1.textContent = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];


         canvas.append(h1);
       },
   });
   ```

2. Start the dev server if it is not already running and toggle the app on in the dev toolbar. If your app is working successfully, you will see a motivational message displayed in the top-left corner of the screen. (And, it’s true!)

   However, this message will not change when the app is toggled on and off, as the `init()` function is only called once when the app is loaded.

3. To add client-side interactivity to your app, add the `app` argument and use `onAppToggled()` to select a new random message each time your toolbar app is toggled on:

   app.ts

   ```diff
   import { defineToolbarApp } from "astro/toolbar";


   const motivationalMessages = [
     "You're doing great!",
     "Keep up the good work!",
     "You're awesome!",
     "You're a star!",
   ];


   export default defineToolbarApp({
       init(canvas, app) {
         const h1 = document.createElement('h1');
         h1.textContent = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];


         canvas.append(h1);


         +// Display a random message when the app is toggled
   +      app.onToggled(({ state }) => {
           +const newMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
   +        h1.textContent = newMessage;
   +      });
       },
   });
   ```

4. In your browser preview, toggle your app on and off several times. With this change, a new random message will be selected every time you toggle the app on, providing you with an infinite source of motivation!

See the [Astro Dev Toolbar API documentation](/en/reference/dev-toolbar-app-reference/) for more about building dev toolbar apps.

## Building apps with a UI framework

[Section titled “Building apps with a UI framework”](#building-apps-with-a-ui-framework)

UI frameworks like React, Vue, or Svelte can also be used to create dev toolbar apps. These frameworks provide a more declarative way to create UIs and can make your code more maintainable and easier to read.

The same motivational dev toolbar app built into your existing Astro project earlier on this page with JavaScript can be built using a UI framework (e.g. Preact) instead. Depending on your chosen framework, you may or may not require a build step.

Note

However you choose to build your dev toolbar app, using JavaScript or a UI framework, you will still need to [create the integration](#creating-the-astro-integration) that adds your app to the dev toolbar.

### Without a build step

[Section titled “Without a build step”](#without-a-build-step)

If your framework supports it, you can create a dev toolbar app without a build step. For example, you can use Preact’s `h` function to create elements and render them directly to the ShadowRoot:

app.ts

```ts
import { defineToolbarApp } from "astro/toolbar";
import { render, h } from "preact";


const motivationalMessages = [
  "You're doing great!",
  "Keep up the good work!",
  "You're awesome!",
  "You're a star!",
];


export default defineToolbarApp({
    init(canvas) {
      const message = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      render(h('h1', null, message), canvas);
    },
});
```

Alternatively, the [`htm` package](https://github.com/developit/htm) is a good choice for creating dev toolbar apps without a build step, offering native integration for React and Preact and support for other frameworks:

app.ts

```diff
import { defineToolbarApp } from "astro/toolbar";
import { render } from "preact";
+import { html } from 'htm/preact';


const motivationalMessages = [
  "You're doing great!",
  "Keep up the good work!",
  "You're awesome!",
  "You're a star!",
];


export default defineToolbarApp({
    init(canvas) {
      const message = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      +render(html`<h1>${message}</h1>`, canvas);
    },
});
```

In both cases, you can now start your project and see the motivational message displayed in the top-left corner of the screen when you toggle the app on.

### With a build step

[Section titled “With a build step”](#with-a-build-step)

Astro does not preprocess JSX code in dev toolbar apps, so a build step is required in order to use JSX components in your dev toolbar app.

The following steps will use TypeScript to do this, but any other tools that compile JSX code will also work (e.g. Babel, Rollup, ESBuild).

1. Install TypeScript inside your project:

   - npm

     ```shell
     npm install --save-dev typescript
     ```

   - pnpm

     ```shell
     pnpm install --save-dev typescript
     ```

   - Yarn

     ```shell
     yarn add --dev typescript
     ```

2. Create a `tsconfig.json` file in the root of your toolbar app’s folder with the appropriate settings to build and for the framework you’re using ([React](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup), [Preact](https://preactjs.com/guide/v10/typescript), [Solid](https://www.solidjs.com/guides/typescript)). For example, for Preact:

   my-toolbar-app/tsconfig.json

   ```json
   {
     "compilerOptions": {
       "skipLibCheck": true,
       "module": "NodeNext",
       "jsx": "react-jsx",
       "jsxImportSource": "preact",
     }
   }
   ```

3. Adjust the `entrypoint` in your integration to point to the compiled file, remembering that this file is relative to the root of your Astro project:

   my-integration.ts

   ```ts
   addDevToolbarApp({
     id: "my-toolbar-app",
     name: "My Toolbar App",
     icon: "🚀",
     entrypoint: join(__dirname, "./app.js"),
   });
   ```

4. Run `tsc` to build your toolbar app, or `tsc --watch` to automatically rebuild your app when you make changes.

   With these changes, you can now rename your `app.ts` file to `app.tsx` (or `.jsx`) and use JSX syntax to create your dev toolbar app:

   app.tsx

   ```tsx
   import { defineToolbarApp } from "astro/toolbar";
   import { render } from "preact";


   const motivationalMessages = [
     "You're doing great!",
     "Keep up the good work!",
     "You're awesome!",
     "You're a star!",
   ];


   export default defineToolbarApp({
       init(canvas) {
         const message = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
         render({message}, canvas);
       },
   });
   ```

You should now have all the tools you need to create a dev toolbar app using a UI framework of your choice!
