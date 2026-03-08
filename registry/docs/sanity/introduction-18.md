# Introduction

Studio plugins provide a way to reuse pieces of Studio configurations across multiple studios and workspaces, while also helping you organize your studio features and reduce clutter in your configuration.

You can even use plugins from the community to add new schema types, input components, tools, and other features to enhance your content editing experience without having to build everything from scratch.

Here are some ways you can use Studio plugins:

- Add specialized input components like color pickers, map interfaces, multi-select arrays, and more.
- Create custom tools that appear in the Studio navigation.
- Add internationalization support for multiple languages.
- Share complex schema types.

You can find a collection of official and community plugins on the [Sanity Exchange](https://www.sanity.io/plugins)., and in the [official plugins repo](https://github.com/sanity-io/plugins).

## Requirements

- Most plugins require Sanity Studio v3 or later. We suggest updating to v4+.

## Core concepts

Understanding how plugins work in Sanity Studio will help you both use existing plugins and develop your own. If you're using any official plugins like Vision or Presentation, you may have already seen these concepts in action.

### Installation and configuration

Plugins for Sanity Studio are installed like any other dependency using your package manager. After installation, import the plugin and add it to the `plugins` array in your studio configuration.

**sanity.config.ts**

```typescript
import {defineConfig} from 'sanity'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  // ...
  plugins: [colorInput()],
})
```

Many plugins accept configuration options that can be passed when initializing the plugin:

**sanity.config.ts**

```typescript
export default defineConfig({
  // ...
  plugins: [
    customPlugin({ 
      customOption: true
    }
  ]
})
```

#### Learn more

[Installing and configuring plugins](https://www.sanity.io/docs/studio/installing-and-configuring-plugins)

[Explore available plugins](https://www.sanity.io/plugins)

### Plugin development

Plugins are created using the `definePlugin` function, which accepts most of the same properties as the `defineConfig` API. This allows you to encapsulate specific functionality and configuration in a portable way.

**myPlugin.ts**

```typescript
import { definePlugin } from 'sanity'

export const myPlugin = definePlugin({
  name: 'my-custom-plugin',
  // Add schema types, tools, components, etc.
})
```

Plugins can also include other plugins, allowing you to build features on top of each other in a modular way.

#### Learn more

[Developing plugins](https://www.sanity.io/docs/studio/developing-plugins)

[Plugins API](https://www.sanity.io/docs/studio/plugins-api-reference)

### Publishing plugins

When you've developed a plugin that you want to share with others, you can publish it as an npm package. The recommended approach is to use [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit), which handles bundling and other package preparation tasks.

#### Learn more

[Publishing plugins](https://www.sanity.io/docs/studio/publishing-plugins)

### Internationalization

Plugins can support multiple languages through Sanity's internationalization API. This allows plugin UI elements to be displayed in the user's preferred language, enhancing the user experience for international teams.

#### Learn more

[Internationalizing plugins](https://www.sanity.io/docs/studio/internationalizing-plugins-ui)

## Limitations

- Some areas of the Studio UI may not fully support plugin customization.
- Plugins must be compatible with the version of Sanity Studio you're using.
- Plugins with complex dependencies may increase your Studio bundle size.
