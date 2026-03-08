# Overlay and control components

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be fully complete.

Custom overlay components allow you to extend the functionality of [visual editing overlays](https://www.sanity.io/docs/visual-editing/visual-editing-overlays) with custom React components. Such components can greatly enhance the editing experience by enabling direct, in-app, content editing and displaying rich metadata or controls to content editors.

With custom overlays, you can:

- Add interactive controls such as color pickers or sliders to configure complex objects (e.g., 3D models).
- Display additional context, such as related product data from external systems.

You can also [customize the Presentation tool's preview header](https://www.sanity.io/docs/visual-editing/customizing-preview-header-and-navigation), giving you the flexibility to toggle custom overlays, or add controls, status indicators, or other UI elements that enhance the editor experience.

[Visual Editing – Introduction](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing)

[The Presentation tool](https://www.sanity.io/docs/visual-editing/configuring-the-presentation-tool)

[Fetching content for Visual Editing](https://www.sanity.io/docs/visual-editing/fetching-content-for-visual-editing)

[Visual Editing - Overlays](https://www.sanity.io/docs/visual-editing/visual-editing-overlays)

## Prerequisites

Before getting started, ensure the following:

- [Visual Editing](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing) enabled with up-to-date dependencies in your front end
- Sanity Studio v3.65.0 or later (`npm install sanity@latest`)

> \[!WARNING]
> Gotcha
> Custom overlay components currently only support React.

## Custom overlay plugins

Overlay plugins will let you mount custom React components in the visual editing overlay, enabling complex views and controls for interacting with your content:

**my-first-plugin.tsx**

```tsx
'use client'

import {defineOverlayPlugin} from '@sanity/visual-editing/unstable_overlay-components'

export const MyFirstPlugin = defineOverlayPlugin(() => ({
  type: 'hud',
  name: 'my-first-plugin',
  title: 'My First Plugin!',
  component: function MyFirstPluginComponent() {
    return <div>Hello World</div>
  },
}))

```

All the available configuration properties can be found in the [reference section](https://www.sanity.io#fb4e8c4bc4bd) at the end of this article.

> \[!TIP]
> Gotcha
> Custom overlay plugins, components, and resolvers should be rendered client-side, commonly done with [the "use client" directive for React](https://react.dev/reference/rsc/use-client).

### Using custom overlay plugins

Depending on your framework and implementation, an array of instantiated plugins should be passed via the `plugins` property of the object passed to the [enableVisualEditing](https://reference.sanity.io/_sanity/visual-editing/index/enableVisualEditing/) function, or the `plugins` prop of the `<VisualEditing>` component. For example:

**app/(website)/layout.tsx**

```tsx
import {VisualEditing} from 'next-sanity'
import {draftMode} from 'next/headers'
import {plugins} from './overlay-plugins.tsx'

// minimal Next.js-like example
export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <body>
        <main>{children}</main>
        {(await draftMode()).isEnabled && (
          <VisualEditing plugins={plugins} />
        )}
      </body>
    </html>
  )
}

```

**overlay-plugins.ts**

```
'use client'

import {OverlayPluginDefinition} from '@sanity/visual-editing/react'
import {MyFirstPlugin} from './my-first-plugin'

export const plugins: OverlayPluginDefinition[] = [
  MyFirstPlugin()
]

```

### Overlay plugin types

There are two different types of overlay plugins which define how the plugin behaves in the visual editing overlay:

#### HUD

Plugins with the `hud` type can be used to mount a component under the overlay element when hovered.

#### Exclusive

Plugins with the `exclusive` type can be used to take exclusive control of the overlay experience. The type of plugin is listed in an overlay element menu. When selected by the user, the component is rendered inside the overlay element and all other overlay UI is hidden until closed.

### User-configurable options

Plugins support user-configurable options enabling them to be used multiple times per project with different configurations or shared between multiple projects:

**my-configurable-plugin.tsx**

```tsx
'use client'

import {defineOverlayPlugin} from '@sanity/visual-editing/unstable_overlay-components'

type MyConfigurablePluginOptions = {
  displayText?: string
}

export const MyConfigurablePlugin = defineOverlayPlugin<MyConfigurablePluginOptions>(
  ({displayText = 'Default Text'}) => ({
    type: 'hud',
    name: 'my-configurable-plugin',
    title: 'My Configurable Plugin!',
    component: function MyConfigurablePluginComponent() {
      return <div>{displayText}</div>
    },
  }),
)

```

**overlay-plugins.ts**

```
'use client'

import {OverlayPluginDefinition} from '@sanity/visual-editing/react'
import {MyConfigurablePlugin} from './my-configurable-plugin'

export const plugins: OverlayPluginDefinition[] = [
  MyConfigurablePlugin({
    options: {
      displayText: 'Hello World!'
    }
  })
]

```

### Guarded overlay plugins

The `guard` conditional function can be used to filter which overlay element the plugin should be displayed on.

When using `defineOverlayPlugin`, guards can be configured at both the plugin level and the user level. Both must return `true` for the plugin to be shown, and if no guard function is provided it will pass (as if `true`):

**my-guarded-plugin.tsx**

```tsx
'use client'

import {defineOverlayPlugin} from '@sanity/visual-editing/unstable_overlay-components'

export const MyGuardedPlugin = defineOverlayPlugin(() => ({
  type: 'hud',
  name: 'my-guarded-plugin',
  title: 'My Guarded Plugin!',
  component: function MyGuardedPluginComponent() {
    return <div>Hello World</div>
  },
  guard: ({type}) => {
    // This plugin only supports string fields.
    return type === 'string'
  },
}))

```

**overlay-plugins.ts**

```
'use client'

import {OverlayPluginDefinition} from '@sanity/visual-editing/react'
import {MyGuardedPlugin} from './my-guarded-plugin'

export const plugins: OverlayPluginDefinition[] = [
  MyGuardedPlugin({
    // This plugin instance should only show on title nodes
    guard: ({node}) => node.path.endsWith('title'),
  })
]

```

### Updating document data

Custom overlay plugins enable powerful editing capabilities directly in your application, from basic string manipulation to advanced controls for complex content types.

> \[!TIP]
> Protip
> Custom overlay plugins will automatically use the logged-in user's authentication to update content. This means that any permissions that the user has will still be respected.

Install the `@sanity/mutate` package in your front-end project to create the necessary patches for updating data. Refer to that package’s [documentation](https://github.com/sanity-io/mutate) for available methods.

```bash
npm install @sanity/mutate
```

The example below illustrates how to mount a button in an overlay which appends an exclamation mark at the end of a `string` value when clicked:

**exciting-string-control-plugin.tsx**

```tsx
import {at, set} from '@sanity/mutate'
import {get} from '@sanity/util/paths'
import {useDocuments} from '@sanity/visual-editing/react'
import {defineOverlayPlugin} from '@sanity/visual-editing/unstable_overlay-components'

export const ExcitingStringControlPlugin = defineOverlayPlugin(() => ({
  type: 'hud',
  name: 'exciting-string-control',
  title: 'Exciting String Control',
  component: function ExcitingStringControlComponent(props) {
    const {node} = props

    // Get the document ID and field path from the Sanity node.
    const {id, path} = node

    const {getDocument} = useDocuments()
    // Get the optimistic document using the document ID.
    const doc = getDocument(id)

    const onChange = () => {
      doc.patch(async ({getSnapshot}) => {
        const snapshot = await getSnapshot()
        // Get the current value using the document snapshot and the field path.
        const currentValue = get<string>(snapshot, path)
        // Append "!" to the string.
        const newValue = `${currentValue}!`
        // Use `@sanity/mutate` functions to create the document patches.
        return [at(path, set(newValue))]
      })
    }

    return (
      <button
        // Tailwind CSS classes
        className="rounded bg-blue-500 px-2 py-1 text-sm text-white"
        onClick={onChange}
      >
        Click Me 🎉
      </button>
    )
  },
  guard: (context) => {
    // This plugin only supports string fields.
    return context.type === 'string'
  },
}))

```

### Custom preview header state

The visual editing package exports an named [useSharedState](https://reference.sanity.io/_sanity/visual-editing/index/useSharedState/) hook which given the unique key defined in [a custom preview header](https://www.sanity.io/docs/visual-editing/customizing-preview-header-and-navigation), will return the value shared by the corresponding `useSharedState` Presentation tool hook.

Below, we have a HUD plugin that will only be displayed if the `showMyPlugin` shared state value is set to `true` from a custom preview header:

**my-toggle-plugin.tsx**

```tsx
'use client'

import {useSharedState} from '@sanity/visual-editing'
import {defineOverlayPlugin} from '@sanity/visual-editing/unstable_overlay-components'

export const MyTogglePlugin = defineOverlayPlugin(() => ({
  type: 'hud',
  name: 'my-toggle-plugin',
  title: 'My Toggle Plugin!',
  component: function MyTogglePluginComponent() {
    const showMyPlugin = useSharedState<boolean>('showMyPlugin')

    if (!showMyPlugin) {
      return null
    }

    return <div>Hello World</div>
  },
}))

```

### Closing exclusive plugins

By default, exclusive plugins can be closed by clicking outside of the overlay element area. However, the `closeExclusiveView` function can be used to programmatically close the plugin:

**closeable-exclusive-plugin.tsx**

```tsx
'use client'

import {defineOverlayPlugin} from '@sanity/visual-editing/unstable_overlay-components'

export const CloseableExclusivePlugin = defineOverlayPlugin(() => ({
  type: 'exclusive',
  name: 'closeable-exclusive',
  title: 'Closeable Exclusive',
  component: function CloseableExclusiveComponent({closeExclusiveView}) {
    return (
      <button
        // Tailwind CSS classes
        className="absolute right-0 top-0 rounded bg-blue-500 px-2 py-1 text-sm text-white"
        onClick={() => closeExclusiveView()}
      >
        Close Me
      </button>
    )
  },
}))

```

## Custom component resolver

While the plugin system is helpful at managing the position and visibility of components, the custom component resolver can be used for cases where more control over rendering is required.

Resolvers determine which custom components to mount for specific overlays. Use the `defineOverlayComponents` helper to conditionally resolve components based on overlay context.

This function runs each time an overlay renders, and the context object it receives can be used to determine which components to return.

Resolver functions can return:

- JSX elements.
- React component(s), single or array.
- Object(s) with `component` and `props` values. Use the `defineOverlayComponent` for convenience and type safety, single or array.
- `undefined` or `void` when no custom components should be mounted.

When using the custom component resolver, the `PointerEvents` component must be used if interaction is required, this is available through the overlay component props:

**overlay-components.tsx**

```tsx
'use client'

import {type OverlayComponent} from '@sanity/visual-editing'

export const FieldNameOverlay: OverlayComponent = ({field, PointerEvents}) => (
  <PointerEvents>
    <div
      // Tailwind CSS classes
      className="absolute bottom-0 left-0 m-1 rounded bg-black bg-opacity-50 px-2 py-1 text-xs text-white"
    >
      {field?.name}
    </div>
  </PointerEvents>
)

```

Below is an example for how to resolve different custom overlay components conditionally:

**component-resolver.tsx**

```tsx
'use client'

import {
  defineOverlayComponent,
  defineOverlayComponents,
} from '@sanity/visual-editing/unstable_overlay-components'
import {
  HighlightOverlay,
  TitleControl,
  UnionControl,
  UnionTypeMarker,
} from './overlay-components.tsx'

export const components = defineOverlayComponents((context) => {
  const {document, element, field, type, parent} = context

  // Mount a component in overlays attached to string
  // fields named 'title'
  if (type === 'string' && field?.name === 'title') {
    return TitleControl
  }

  // Return JSX directly
  if (type === 'string' && field?.name === 'subtitle') {
    return <div>Subtitle</div>
  }

  // Mount a component in overlays attached to any element
  // corresponding to a 'product' document
  if (document.name === 'product') {
    const color = element.dataset.highlightColor || 'red'
    return defineOverlayComponent(HighlightOverlay, {color})
  }

  // Mount multiple components in overlays attached to any
  // member element of a union type
  if (parent?.type === 'union') {
    return [UnionTypeMarker, defineOverlayComponent(UnionControl, {direction: 'vertical'})]
  }

  return undefined
})

```

Depending on your framework and implementation, the resolver function should be passed via the `components` property of the object passed to the `enableVisualEditing` function, or the `components` prop of the `<VisualEditing>` component. For example:

**app/(website)/layout.tsx**

```tsx
import {VisualEditing} from 'next-sanity'
import {draftMode} from 'next/headers'
import {components} from './component-resolver.tsx'

// minimal Next.js-like example
export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <body>
        <main>{children}</main>
        {(await draftMode()).isEnabled && (
          <VisualEditing components={components} />
        )}
      </body>
    </html>
  )
}

```

## Reference

### defineOverlayPlugin

| Method | Description |
| --- | --- |
| defineOverlayPlugin(pluginDefinitionFn): OverlayPluginUserFn | This utility types a plugin definition function with optional user-configurable options. It also adds an additional user-configurable guard function.

Returns a function that can be used to create a plugin instance. |

### OverlayPluginDefinition

#### Properties

| Property | Description |
| --- | --- |
| type \* |  |
| name \* | Unique identifier for the plugin. |
| component \* | A custom React component to render on the overlay. OverlayComponentResolverContext properties are available as props. Exclusive-type plugins also get the closeExclusiveView function prop. |
| title | Human readable title for the plugin. Shown in the overlay element menu. |
| icon | Icon for the plugin. Shown in the overlay element menu. |
| guard | A guard function which determines whether the plugin should be shown given a resolver context. |

### OverlayComponentResolverContext

This context object is provided as props to the React overlay components. It is also available on plugin guards and custom component resolvers.

#### Properties

| Property | Description |
| --- | --- |
| document | The resolved field's document schema type. |
| element | The DOM element node that the overlay is visually attached to. |
| targetElement | The DOM element node that the Sanity node data was detected on (data attribute or stega-encoded content). |
| field | The resolved field schema type. |
| focused | Whether the overlay is focused or not. |
| node | The sanity node data that triggered the overlay (data attribute or stega-encoded content). |
| parent | The resolved field's parent schema type. |
| type | A convenience property, equal to field.value.type. |

### useDocument

| Method | Description |
| --- | --- |
| useDocuments(): { getDocument, mutateDocument } | The useDocuments hook can be used in overlay components to access and update the documents currently in use on a page. |
| getDocument(documentId): { id, get, patch, commit } | Returns an optimistic document interface with the following methods:

id: string - The document ID.

get: (path?: string): SanityDocument | PathValue - Returns the document snapshot or the specific value at the given path.

patch: (patches: OptimisticDocumentPatches, options?: {commit?: boolean | {debounce: number}}) => void - Applies patches to the document, will commit patches by default.

commit: () => void - Commits pending changes. |
| mutateDocument(documentID, mutations, options): void |  |

### useSharedState

| Method | Description |
| --- | --- |
| useSharedState(key, value): Your serializeable state | The useSharedState enables you to share state between the Presentation tool and your custom overlay components in your front end’s preview. |

## Resources

- [Visual Editing](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing)
- [Overlays](https://www.sanity.io/docs/visual-editing/visual-editing-overlays)
- [@sanity/mutate](https://github.com/sanity-io/mutate)
- [Sanity UI](https://www.sanity.io/ui)
