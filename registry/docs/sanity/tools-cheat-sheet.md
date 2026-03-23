# Tools cheat sheet

Tools are a powerful way to add additional functionality to Sanity Studio. Here are some ways of customizing how tools work within Studio.

## Ordering of tools

Tools are ordered as they are added in the `tools` array, followed by tools that are added via plugins in the `plugins` array. A tool within a plugin can override the default ordering via the `studio.components.toolMenu.tools` property in the plugin config. And likewise, you can edit this order by accessing this property yourself in the config. **This does not affect which tool opens by default when the Studio loads.**

In the example below, the Structure tool always comes first in the menu. Without this update, the two custom tools would come before the Structure tool in the navigation bar.

```typescript
// sanity.config.ts
export default defineConfig({
  name: 'default',
  title: 'example',
  projectId: '<project-id>',
  dataset: '<your-dataset>',
  studio: {
    components: {
      toolMenu: (props) => {
        const {tools, renderDefault} = props
        const structureTool = tools.find(({name}) => name == 'structure')
        const otherTools = tools.filter(({name}) => name != 'structure')

        if (!structureTool) {
          return renderDefault(props)
        }

        return props.renderDefault({
          ...props,
          tools: [structureTool, ...otherTools],
        })
      },
    },
  },
  plugins: [structureTool()],
  tools: [myCustomTool, myOtherCustomTool],
  schema: {
    types: schemaTypes,
  },
})
```

## Configure the default tool

Sometimes you need to order the tools in the navigation bar, like in the ordering example above, but you want a specific tool to open when the Studio loads. In this case, use the `tools` property in the configuration to sort the tools array.

In this example, the `(prev, context)` callback pattern [sorts the array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) and places the vision tool in the front.

```typescript
// sanity.config.ts
export default defineConfig({
  name: 'default',
  title: 'example',
  projectId: '<project-id>',
  dataset: '<your-dataset>',
  //... other config
  tools: (prev, context) => {
    return prev.sort((a, b) => {
      if (a.name === 'vision') {
        return -1 // Moves 'vision' tool to the top of the list
      }
      return 1
    })
  }
})
```

This won't change the visual order in the navigation bar, but now the Vision tool opens by default when you visit the Studio. Combine this approach with the tool ordering approach to fully configure the navigation order and default tool.

## Display only in development environments

Sometimes you need to display a tool only in development environments. You can import and use the `isDev` boolean helper to check the state of the environment. In this example, the Studio displays the Vision and Structure tools in development, but just the Structure tool in other environments.

```typescript
import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  // ...
  plugins: isDev
    ? [structureTool(), visionTool()]
    : [structureTool()],
})
```

## Conditionally render tools based on role

Sometimes you want to display tools for specific user roles. There are a few ways to do this. In this example, administrators have access to all tools while all other users can only use the Structure tool.

```typescript
// sanity.config.ts

// define an array of tools 
const userTools = ['structure']

export default defineConfig({
  name: 'default',
  title: 'example',
  projectId: '<project-id>',
  dataset: '<your-dataset>',

  // This studio includes structure, vision, and any plan-specific tools
  plugins: [structureTool(), visionTool()],
  tools: (prev, context)=>{
    // Retrieve the current user from the context
    const { currentUser } = context
    // Check if the current user is not an admin
    if (currentUser?.roles.find((role)=>role.name != 'administrator')){
      // return an array that only includes tools in the userTools array
      return prev.filter((tool)=>userTools.includes(tool.name))
    }

    // Otherwise, return all tools
    return [...prev]
  },
  //... rest of config
})
```

Alternatively, if you only need to adjust a single tool, this example limits the vision tool to only administrators.

```typescript
export default defineConfig({
  name: 'default',
  title: 'example',
  projectId: '<project-id>',
  dataset: '<your-dataset>',

  plugins: [structureTool(), visionTool()],
  tools: (prev, context)=>{
    // Retrieve the current user from the context
    const { currentUser } = context
    
    const isAdmin = currentUser?.roles.some((role) => role.name === 'administrator')

    // If the user has the administrator role, return all tools.
    // If the user does not have the administrator role, filter out the vision tool.
    return isAdmin ? prev : prev.filter((tool) => tool.name !== 'vision')
  },
  // ... rest of config
})
```

## Additional resources

[Studio Tools](https://www.sanity.io/docs/studio/studio-tools)

[Tool API reference](https://www.sanity.io/docs/studio/tool-api-reference)
