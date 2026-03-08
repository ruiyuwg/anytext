# Add Portable Text Editor plugins to Studio

Studio uses the standalone Portable Text Editor to power the block content editing experience. This makes the editor aware of your schema, and also lets you modify the editor from your existing Sanity config and schema.

Because the Portable Text Editor itself doesn't require Studio, there can be times where you need to include a Portable Text Editor plugin that isn't set up to work with Studio.

This guide shows you how to use an existing Portable Text Editor plugin with your studio.

Prerequisites:

- `sanity` version 3.92.0 or higher is required for Studio to apply plugins.

## Add the plugin to your project

The first step is to add the Portable Text Editor plugin to your project. For the examples in this guide, we'll use the `CharacterPairDecoratorPlugin` from the [official plugins repository](https://github.com/portabletext/plugins). It lets you define a markdown-style shortcut and link it to a decorator.

**NPM**

```sh
npm install @portabletext/plugin-character-pair-decorator
```

**PNPM**

```sh
pnpm add @portabletext/plugin-character-pair-decorator
```

We'll configure the plugin to make any text wrapped in `#` bold. For example, `#example#` will receive the "strong" decorator.

## Option 1: Add the plugin directly

The most straightforward approach is to import the plugin and add it directly to your Studio config for global use, or your schema for specific component use.

> \[!NOTE]
> Note the change to TSX
> This approach requires that you change your files to TSX to accommodate JSX syntax. It means fewer files, but may not be your preferred technique. See the other approaches below for alternatives.

### Global

This causes all block content in your studio to only use the single plugin.

**sanity.config.tsx**

```tsx
import { defineConfig } from 'sanity'
import { CharacterPairDecoratorPlugin } from '@portabletext/plugin-character-pair-decorator'

export default defineConfig({
  // ... omitted for brevity
  form: {
    components: {
      portableText: {
        plugins: (props)=>{
          return (
            <>
              {props.renderDefault(props)}
              <CharacterPairDecoratorPlugin 
                decorator={({schema}) =>
                  schema.decorators.find((d) => d.name === 'strong')?.name
                }
                pair={{char: '#', amount: 1}}
              />
            </>
          )
        },
      }
    },
  }
})
```

### Local

**postSchema.tsx**

```tsx
import { defineType } from 'sanity'
import { CharacterPairDecoratorPlugin } from '@portabletext/plugin-character-pair-decorator'

export const post = defineType({
  title: 'Blog post',
  name: 'post',
  type: 'document',
  fields: [
    // ...
    {
      type: 'array',
      name: 'content',
      title: 'Post Body',
      of: [
        {
          type: 'block',
        }
      ],
      components: {
        portableText: {
          plugins: (props)=>{
            return (
              <>
              {props.renderDefault(props)}
              <CharacterPairDecoratorPlugin 
                decorator={({schema}) =>
                  schema.decorators.find((d) => d.name === 'strong')?.name
                }
                pair={{char: '#', amount: 1}}
              />
            </>
            )
          }
        }
      }
    },
    // ...
  ],
})
```

## Option 2: Create a container for plugins

If you don't want to change your schema and configuration files to TSX, you can wrap all editor plugins in a single container component, then use that when needed. For example, in the guide on [creating your own Portable Text Editor plugin](https://www.sanity.io/docs/studio/pte-plugins), we export a `PortableTextEditorPlugins` function.

**plugins/portable-text/index.tsx**

```tsx
import type { PortableTextPluginsProps } from 'sanity'
import { CharacterPairDecoratorPlugin } from '@portabletext/plugin-character-pair-decorator'

export function PortableTextEditorPlugins(props: PortableTextPluginsProps) {
  return (
    <>
      {props.renderDefault(props)}
      <CharacterPairDecoratorPlugin 
        decorator={({schema}) =>
          schema.decorators.find((d) => d.name === 'strong')?.name
        }
        pair={{char: '#', amount: 1}}
      />
      {/* Add more plugins here  */}
    </>
  )
}
```

Then use that container globally, in the `sanity.config.ts` or locally in your schema.

**sanity.config.ts (global usage)**

```
import { defineConfig } from "sanity"
import { PortableTextEditorPlugins } from './plugins/portable-text'

export default defineConfig({
  // ...
  form: {
    components: {
      portableText: {
        plugins: PortableTextEditorPlugins,
      },
    },
  },
  // ...
})
```

**postSchema.ts (local usage)**

```
import { defineType } from 'sanity'
import { PortableTextEditorPlugins } from './plugins/portable-text'

export const post = defineType({
  title: 'Blog post',
  name: 'post',
  type: 'document',
  fields: [
    // ...
    {
      type: 'array',
      name: 'content',
      title: 'Post Body',
      of: [
        {
          type: 'block',
        }
      ],
      components: {
        portableText: {
          plugins: PortableTextEditorPlugins,
        }
      }
    },
    // ...
  ],
})
```

## Option 3: Wrap in a Studio plugin

One approach is to wrap the Portable Text Editor plugin in a Sanity Studio plugin using `definePlugin`, then add it to your config file as a plugin.

**plugins/characterPair.tsx**

```tsx
import { definePlugin } from 'sanity'
import { CharacterPairDecoratorPlugin } from '@portabletext/plugin-character-pair-decorator'

export const characterPair = definePlugin({
  name: 'characterPair',
  form: {
    components: {
      portableText: {
        plugins: (props)=>{
          return (
            <>
              {props.renderDefault(props)}
              <CharacterPairDecoratorPlugin 
                decorator={({schema}) =>
                  schema.decorators.find((d) => d.name === 'strong')?.name
                }
                pair={{char: '#', amount: 1}}
              />
            </>
          )
        },
      }
    },
  }
})
```

**sanity.config.ts**

```
import { defineConfig } from 'sanity'
import { characterPair } from './plugins/characterPair'
export default defineConfig({
  // ... omitted for brevity
  plugins: [
    //...
    characterPair()
  ]
})
```

If you're packaging a plugin this way for distribution, you should also expose the configuration so it's available from the `sanity.config.ts`.
