# Studio Components

## Introduction

The `studio.components` config property enables configuration-level customization of your studio. The following components can be overridden:

```typescript
// sanity.config.js

export default defineConfig({
  // rest of config ...
  studio: {
    components: {
      activeToolLayout: MyActiveToolLayout,
      layout: MyLayout,
      navbar: MyNavbar,
      toolMenu: MyToolMenu,
    }
  }
})
```

> \[!TIP]
> Protip
> Looking to change the Studio logo? You can customize with [the icon property in the workspace configuration](https://www.sanity.io/docs/studio/workspaces).

The props for each component available in the API include a callback function named `renderDefault`. As the name implies, `renderDefault` will render the default component. When you call `renderDefault`, you also pass along the props needed to render the default component. You can modify the props to your liking before passing them along. If you want to completely replace the component in question with your own markup, simply do not invoke `renderDefault` in your return statement.

```jsx
// MyEnhancedNavbar.jsx
import { Stack, Card, Flex, Text } from '@sanity/ui'

// Adds markup and invokes renderDefault()
function MyEnhancedNavbar(props) {
  return (
    <Stack>
      <Card padding={3} tone="caution">
        <Flex justify="center">
          <Text>Important Message: Please Read!</Text>
        </Flex>
      </Card>
      <>{props.renderDefault(props)}</>
    </Stack>
  )
}

// Completely replaces default navbar
function MySuperiorNavbar() {
  return (
    <Stack>
      <Card padding={3} tone="caution">
        <Flex justify="center">
          {/* Custom navbar stuff goes here */}
        </Flex>
      </Card>
    </Stack>
  )
}
```

For some components, like navbar and layout, the `renderDefault()` method is the only prop passed along, while other components receive additional props.

```typescript
function MyTools(props) {
	// MyTools includes the tool titles from project config by default
  const { renderDefault, title } = props;
	// Overwrite the value of `title` after spreading the props object
  return renderDefault({...props, title: title.toUpperCase() });
}
```

```typescript
import { isDev } from 'sanity'

function MyToolMenu(props) {
	// ToolMenuProps includes list of installed tools, and more
  const { tools, renderDefault } = props;
	// Only show the dev-tool if the isDev variable resolves to true
  const availableTools = isDev ? tools : tools.filter(tool => tool.name !== 'dev-tool')
  return renderDefault({ ...props, tools: availableTools })
}
```

## Composing renderDefault()

The rendering of components in this API uses a middleware pattern. This means that plugin customizations are applied in a chain. Each plugin may call `props.renderDefault(props)` to defer to default rendering. If any component in the chain fails to call the callback function, the chain breaks.
