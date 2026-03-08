# Create a custom Studio tool

A tool is a top-level view in the Sanity Studio application that you can access through its menu bar. New to tools? Visit the [Studio Tools overview](https://www.sanity.io/docs/studio/studio-tools).

> \[!NOTE]
> Right tool for the job?
> Custom studio tools are great, but they are often used to tackle problems better solved by standalone applications.
> If this sounds like your situation, check out the [App SDK](https://www.sanity.io/docs/app-sdk)!

Tools are great for custom dashboards and user interfaces for exploring and interacting with content. At their most basic, tools are custom React components that interact with data in Sanity.

## Basic configuration

You can add a custom tool by adding its configuration object to the `tools` array in the studio configuration. A tool needs to have a `title`, `name`, `icon`, and component defined. The `title` controls what appears in the toolbar, while the `name` controls the URL segment that the tool routes to.

```tsx
// sanity.config.tsx
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {Card, Text} from '@sanity/ui'
import {DashboardIcon} from '@sanity/icons'
import {schemaTypes} from './schemas'

const myCustomTool = () => {
  return {
    title: 'My Custom Tool',
    name: 'my-custom-tool', // localhost:3333/my-custom-tool
    icon: DashboardIcon,
    component: (props) => (
      <Card padding={4}>
        <Text>My custom tool!</Text>
      </Card>
    ),
  }
}

export default defineConfig({
  name: 'default',
  title: 'Studio with custom tool',
  projectId: 'your-project-id',
  dataset: 'production',
  plugins: [structureTool()],
  tools: [myCustomTool()],
  schema: {
    types: schemaTypes,
  },
})
```

> \[!TIP]
> Protip
> If you want to use `@sanity/ui` and `@sanity/icons` for your own tools, remember to install them as dependencies in your project:
> `npm install @sanity/ui @sanity/icons`

## TypeScript

If you're building with TypeScript, then you can use the built-in `Tool` type from the studio package, as well as the `ComponentType` from the react package. You can also extend these to support custom options you might have for your tool:

```tsx
// myCustomTool.tsx
import type {ComponentType} from 'react'
import {type Tool} from 'sanity'
import {Card, Text, Stack} from '@sanity/ui'

export interface myCustomToolOptions {
   customString?: string
}

export interface myCustomToolProps<Options = any> {
  component: ComponentType<{
      tool: Tool<myCustomToolOptions>
  }>
}

export const myCustomTool = (options: myCustomToolOptions | void) => {
  return {
    title: 'My Custom Tool',
    name: 'my-custom-tool', // localhost:3333/my-custom-tool
    icon: DashboardIcon,
    component: () => (
      <Card padding={4}>
        <Stack>
          <Text>My custom tool!</Text>
          <Text>{options?.customString}</Text>
        </Stack>
      </Card>
    ),
  }
}
```

## Share custom tools with others

The best way to share a tool is to make it into a plugin. The guides below will help you package and publish your tool as a plugin.

[Developing plugins](https://www.sanity.io/docs/studio/developing-plugins)

[Publishing your plugin](https://www.sanity.io/docs/studio/publishing-plugins)

Have a tool that you've packaged as a plugin that you think the community would like? Share it on the [Sanity Exchange](https://sanity.io/exchange).
