# Create a Portable Text behavior plugin

You can add custom behaviors to your studio's Portable Text Editor (PTE) by creating custom React components, hooking into the editor's behavior API, registering a plugin, and adding it to your configuration or schema.

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

In this guide we'll create a behavior plugin that auto-closes bracket pairs. For example, when users type an opening bracket (`{`), the editor will automatically add a closing bracket (`}`) and move the cursor in between them. The focus of this guide is on incorporating PTE behaviors in Studio. Additional details for working with the Behaviors API can be found in the [Portable Text Editor documentation](https://portabletext.org).

Prerequisites:

- `sanity` version 3.92.0 or higher is required for Studio to apply plugins.

## Create the custom behavior component

Navigate to your studio's project directory and add the latest version of `@portabletext/editor` with the package manager of your choice. For example:

**NPM**

```sh
npm i @portabletext/editor 
```

**PNPM**

```sh
pnpm add @portabletext/editor
```

PTE Plugins are React components. This allows them to maintain their own state, handle additional logic, and render any components they need.

Create a new component file in the location of your choice. We recommend creating a `plugins/pte/` directory or similar. This example names the file `auto-close-brackets-plugin.tsx`.

Start by importing the dependencies you'll need to create the plugin.

**plugins/pte/auto-close-brackets-plugin.tsx**

```tsx
import {useEditor} from '@portabletext/editor'
import {defineBehavior, execute} from '@portabletext/editor/behaviors'
import {useEffect} from 'react'
```

### Define the behavior

Next, in the same file, define the behavior using the `defineBehavior` helper.

**plugins/pte/auto-close-brackets-plugin.tsx**

```tsx
// ... imports
const autoCloseBracketsBehavior = defineBehavior({
  on: 'insert.text',
  guard: ({event}) => {
    const bracketPairs: Record<string, string | undefined> = {
      '(': ')',
      '[': ']',
      '{': '}',
    }
    const lastInsertedChar = event.text.at(-1)
    const closingBracket =
      lastInsertedChar !== undefined ? bracketPairs[lastInsertedChar] : undefined
    if (closingBracket !== undefined) {
      return {closingBracket}
    }
    return false
  },
  actions: [
    ({event}) => [
      execute(event),
    ],
    (_, {closingBracket}) => [
      execute({
        type: 'insert.text',
        text: closingBracket,
      }),
      execute({
        type: 'move.backward',
        distance: closingBracket.length,
      }),
    ],
  ],
})
```

All behaviors follow this process:

1. **Listen for an event**. In the example, `on` listens for a `insert.text` event.
2. **Use a guard to decide if they should run or not**. In the example, guard checks if the last inserted character matches any bracket characters. If it does, it returns the closing character to pass it on to the next step.
3. **Trigger a set of actions to perform on the editor**. In the example, we first send the original action back to insert the first bracket into the editor. Then we send a pair of actions to insert the closing bracket and move the cursor over one place so it rests between the brackets.

This guide doesn't go much further into the Behaviors API. You can learn more about these concepts in the [Portable Text Editor](https://www.portabletext.org/concepts/behavior/) documentation.

### Create a React component to register the behavior

Next, in the same file, create a function component to register the new behavior with the PTE.

**plugins/pte/auto-close-brackets-plugin.tsx**

```tsx
// ... imports
const autoCloseBracketsBehavior = defineBehavior({ ... })

export function AutoCloseBracketsBehaviorPlugin() {
  const editor = useEditor()
  
  useEffect(() => {
    const unregisterBehavior = editor.registerBehavior({
      behavior: autoCloseBracketsBehavior,
    })
  
    return () => {
      unregisterBehavior()
    }
  }, [editor])
  
  return null
}
```

Aside from some React conventions, this code does one core task:  it registers the `autoCloseBracketsBehavior` from the previous step with any instance of the PTE it is attached to (we'll do this soon). Other behaviors may use this space to perform additional logic like state management.

Finally, to make adding the plugin to your schema and config files easier, create a file to export a function that wraps the plugin (or group of plugins). This is optional, but makes it easier to use them as [custom form components](https://www.sanity.io/docs/studio/form-components) without changing your file types to support TSX.

**plugins/pte/index.tsx**

```tsx
import type { PortableTextPluginsProps } from 'sanity'
import { AutoCloseBracketsBehaviorPlugin } from './auto-close-brackets-plugin'

export function PortableTextEditorPlugins(props: PortableTextPluginsProps) {
  return (
    <>
      {props.renderDefault(props)}
      <AutoCloseBracketsBehaviorPlugin />
      {/* Add any other plugins here */}
    </>
  )
}
```

Here's our completed `auto-close-brackets-plugin.tsx` and plugin `index.tsx` file:

**plugins/pte/auto-close-brackets-plugin.tsx**

```tsx
// plugins/pte/auto-close-brackets-plugin.tsx
import {useEditor} from '@portabletext/editor'
import {defineBehavior, execute} from '@portabletext/editor/behaviors'
import {useEffect} from 'react'
/**
 * This Studio Plugin shows how to:
 *
 * 1. Define a standalone and portable Behavior using `defineBehavior`
 * 2. Register the Behavior using `editor.registerBehavior` inside a React component
 * 3. Package the component as a plugin to import into a Studio config
 */

/**
 * This Behavior will auto-close brackets when the user inserts an opening
 * bracket. It will also move the cursor in between the brackets so the user
 * can start typing immediately.
 */
const autoCloseBracketsBehavior = defineBehavior({
  on: 'insert.text',
  guard: ({event}) => {
    const bracketPairs: Record<string, string | undefined> = {
      '(': ')',
      '[': ']',
      '{': '}',
    }
    const lastInsertedChar = event.text.at(-1)
    const closingBracket =
      lastInsertedChar !== undefined ? bracketPairs[lastInsertedChar] : undefined

    if (closingBracket !== undefined) {
      // Pass the closing bracket to the actions for reuse
      return {closingBracket}
    }

    return false
  },
  actions: [
    ({event}) => [
      // Execute the original event that includes the opening bracket
      execute(event),
    ],
    (_, {closingBracket}) => [
      execute({
        type: 'insert.text',
        text: closingBracket,
      }),
      execute({
        type: 'move.backward',
        distance: closingBracket.length,
      }),
    ],
  ],
})

export function AutoCloseBracketsBehaviorPlugin() {
  const editor = useEditor()

  useEffect(() => {
    const unregisterBehavior = editor.registerBehavior({
      behavior: autoCloseBracketsBehavior,
    })

    return () => {
      unregisterBehavior()
    }
  }, [editor])

  return null
}
```

**plugins/pte/index.tsx**

```tsx
import type { PortableTextPluginsProps } from 'sanity'
import { AutoCloseBracketsBehaviorPlugin } from './auto-close-brackets-plugin'

export function PortableTextEditorPlugins(props: PortableTextPluginsProps) {
  return (
    <>
      {props.renderDefault(props)}
      <AutoCloseBracketsBehaviorPlugin />
      {/* Add any other plugins here */}
    </>
  )
}
```

### Integrate the plugin with your studio schema

There are two ways to add this PTE plugin to your studio. Globally for all PTE blocks, or locally to specific blocks in your schema.

#### Globally

To apply the plugin to all PTE instances throughout your studio, you can add it globally by setting it as the `pte` form component.

In your studio config file, use the Form Components configuration to add the plugin as shown in this example.

**sanity.config.ts**

```
import { defineConfig } from "sanity"
import { PortableTextEditorPlugins } from './plugins/pte'

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

#### Locally

Sometimes you want certain plugins for certain PTE fields. In those instances, customize the component in field for the schema type.  For example:

**postSchema.ts**

```
import { defineType } from 'sanity'
import { PortableTextEditorPlugins } from './plugins/pte'

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

## Optional: Composing multiple plugins

The above examples use the `PortableTextEditorPlugins` function to prepare the behavior for inclusion in Sanity schemas and configuration files. You can also do this in-line in the schema or configuration by converting those files to `tsx|jsx` files and using the `AutoCloseBracketsBehaviorPlugin` directly instead. For example:

**sanity.config.tsx**

```tsx
import { defineConfig } from "sanity"
import { AutoCloseBracketsBehaviorPlugin } from './plugins/pte/auto-close-brackets-plugin.tsx'

export default defineConfig({
  // ...
  form: {
    components: {
      portableText: {
        plugins: (props) => {
        return (
          <>
            {props.renderDefault(props)}
            <AutoCloseBracketsBehaviorPlugin />
          </>
        )
        },
      }
    }
  },
  // ...
})
```

Include additional plugins as needed, for example:

**sanity.config.tsx**

```tsx
import { defineConfig } from "sanity"
import { AutoCloseBracketsBehaviorPlugin } from './plugins/pte/auto-close-brackets-plugin.tsx'
import { SomeOtherPlugin } from './plugins/custom/plugins.ts'

export default defineConfig({
  // ...
  form: {
    components: {
      portableText: {
        plugins: (props) => {
        return (
          <>
            {props.renderDefault(props)}
            <AutoCloseBracketsBehaviorPlugin />
            <SomeOtherPlugin />
          </>
        )
        },
      }
    }
  },
  // ...
}) 
```

Additionally, you can use this same approach with the earlier `PortableTextEditorPlugins` technique to package groups of plugins together.
