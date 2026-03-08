# Debugging

## Sourcemaps

Sourcemaps are enabled for your server build by default, and for the client build in dev mode, but you can enable them more specifically in your configuration.

```ts
export default defineNuxtConfig({
  // or sourcemap: true
  sourcemap: {
    server: true,
    client: true,
  },
})
```

## Debugging with Node Inspector

You can use [Node inspector](https://nodejs.org/en/learn/getting-started/debugging){rel=""nofollow""} to debug Nuxt server-side.

```bash
nuxt dev --inspect
```

This will start Nuxt in `dev` mode with debugger active. If everything is working correctly a Node.js icon will appear on your Chrome DevTools and you can attach to the debugger.

::important
Note that the Node.js and Chrome processes need to be run on the same platform. This doesn't work inside of Docker.
::

## Debugging in Your IDE

It is possible to debug your Nuxt app in your IDE while you are developing it.

### Example VS Code Debug Configuration

You may need to update the config below with a path to your web browser. For more information, visit the [VS Code documentation about debug configuration](https://code.visualstudio.com/docs/debugtest/debugging#_launch-configurations){rel=""nofollow""}.

```json5
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "client: chrome",
      "url": "http://localhost:3000",
      // this should point to your Nuxt `srcDir`, which is `app` by default
      "webRoot": "${workspaceFolder}/app"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "server: nuxt",
      "outputCapture": "std",
      "program": "${workspaceFolder}/node_modules/nuxt/bin/nuxt.mjs",
      "args": [
        "dev"
      ],
    }
  ],
  "compounds": [
    {
      "name": "fullstack: nuxt",
      "configurations": [
        "server: nuxt",
        "client: chrome"
      ]
    }
  ]
}
```

If you prefer your usual browser extensions, add this to the *chrome* configuration above:

```json5
"userDataDir": false,
```

### Example JetBrains IDEs Debug Configuration

You can also debug your Nuxt app in JetBrains IDEs such as IntelliJ IDEA, WebStorm, or PhpStorm.

1. Create a new file in your project root directory and name it `nuxt.run.xml`.
2. Open the `nuxt.run.xml` file and paste the following debug configuration:

```html
<component name="ProjectRunConfigurationManager">
  <configuration default="false" name="client: chrome" type="JavascriptDebugType" uri="http://localhost:3000" useFirstLineBreakpoints="true">
    <method v="2" />
  </configuration>

  <configuration default="false" name="server: nuxt" type="NodeJSConfigurationType" application-parameters="dev" path-to-js-file="$PROJECT_DIR$/node_modules/nuxt/bin/nuxt.mjs" working-dir="$PROJECT_DIR$">
    <method v="2" />
  </configuration>

  <configuration default="false" name="fullstack: nuxt" type="CompoundRunConfigurationType">
    <toRun name="client: chrome" type="JavascriptDebugType" />
    <toRun name="server: nuxt" type="NodeJSConfigurationType" />
    <method v="2" />
  </configuration>
</component>
```

### Other IDEs

If you have another IDE and would like to contribute sample configuration, feel free to [open a PR](https://github.com/nuxt/nuxt/edit/main/docs/2.guide/3.going-further/9.debugging.md){rel=""nofollow""}!

#

The `<ClientOnly>` component is used for purposely rendering a component only on client side.

::note
The content of the default slot will be tree-shaken out of the server build. (This does mean that any CSS used by components within it may not be inlined when rendering the initial HTML.)
::

## Props

- `placeholderTag` | `fallbackTag`: specify a tag to be rendered server-side.
- `placeholder` | `fallback`: specify a content to be rendered server-side.

```vue
<template>
  <div>
    <Sidebar />
    <!-- The <Comment> component will only be rendered on client-side -->
    <ClientOnly
      fallback-tag="span"
      fallback="Loading comments..."
    >
      <Comment />
    </ClientOnly>
  </div>
</template>
```

## Slots

- `#fallback`: specify a content to be rendered on the server and displayed until `<ClientOnly>` is mounted in the browser.

```vue [app/pages/example.vue]
<template>
  <div>
    <Sidebar />
    <!-- This renders the "span" element on the server side -->
    <ClientOnly fallback-tag="span">
      <!-- this component will only be rendered on client side -->
      <Comments />
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>
    </ClientOnly>
  </div>
</template>
```

## Examples

### Accessing HTML Elements

Components inside `<ClientOnly>` are rendered only after being mounted. To access the rendered elements in the DOM, you can watch a template ref:

```vue [app/pages/example.vue]
<script setup lang="ts">
const nuxtWelcomeRef = useTemplateRef('nuxtWelcomeRef')

// The watch will be triggered when the component is available
watch(nuxtWelcomeRef, () => {
  console.log('<NuxtWelcome /> mounted')
}, { once: true })
</script>

<template>
  <ClientOnly>
    <NuxtWelcome ref="nuxtWelcomeRef" />
  </ClientOnly>
</template>
```

#

Nuxt provides the `<DevOnly>` component to render a component only during development.

The content will not be included in production builds.

```vue [app/pages/example.vue]
<template>
  <div>
    <Sidebar />
    <DevOnly>
      <!-- this component will only be rendered during development -->
      <LazyDebugBar />

      <!-- if you ever require to have a replacement during production -->
      <!-- be sure to test these using `nuxt preview` -->
      <template #fallback>
        <div><!-- empty div for flex.justify-between --></div>
      </template>
    </DevOnly>
  </div>
</template>
```

## Slots

- `#fallback`: if you ever require to have a replacement during production.

```vue
<template>
  <div>
    <Sidebar />
    <DevOnly>
      <!-- this component will only be rendered during development -->
      <LazyDebugBar />
      <!-- be sure to test these using `nuxt preview` -->
      <template #fallback>
        <div><!-- empty div for flex.justify-between --></div>
      </template>
    </DevOnly>
  </div>
</template>
```
