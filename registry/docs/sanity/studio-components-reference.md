# Studio Components Reference

The top-level configuration property `studio` enables customization of several parts of the studio's user interface. Its sole `components` key accepts an object with overrides for the layout, navigation bar, and tool menu:

```javascript
// ./sanity.config.tsx|jsx

import {defineConfig} from 'sanity'
import {MyActiveToolLayout, MyLayout, MyNavbar, MyToolMenu} from './components/studio'

export default defineConfig({
  // rest of config ...
  studio: {
    components: {
      activeToolLayout: MyActiveToolLayout,
      layout: MyLayout,
      navbar: MyNavbar,
      toolMenu: MyToolMenu,
    },
  },
})
```

## Layout

The layout is the root UI component for the studio ([LayoutProps](https://reference.sanity.io/sanity/index/LayoutProps/)). You probably never want to replace this component entirely with a custom layout component, but you might want to render the default layout component inside, say, a React context provider. This would allow all components inside the studio to retrieve the values from your provider.

### Properties

#### Properties

| Property | Description |
| --- | --- |
| renderDefault | A callback function that renders the default layout component. The function takes the component's properties as an argument, and these properties can be modified. |

### Example

```typescript
// ./sanity.config.tsx|jsx

import {defineConfig, LayoutProps} from 'sanity'
import {MyProvider} from '../path/to/my-provider'

function CustomLayout(props: LayoutProps) {
  return (
    <MyProvider>
      {props.renderDefault(props)}
    </MyProvider>
  )
}

export default defineConfig({
  // rest of config ...

  studio: {
    components: {
      layout: CustomLayout,
    }
  }
})
```

## Active Tool Layout

Similar to `layout`, but wraps only the currently active tool. You probably never want to replace this component entirely with a custom layout component, but you might want to render the default layout component inside, say, a React context provider. This would allow all components inside the currently active tool to retrieve the values from your provider.
Properties

#### Properties

| Property | Description |
| --- | --- |
| renderDefault | A callback function that renders the default layout component. The function takes the component's properties as an argument, and these properties can be modified. |
| activeTool | The currently active studio tool. |

### Example

```typescript
// ./sanity.config.tsx|jsx

import {defineConfig, LayoutProps} from 'sanity'
import {MyProvider} from '../path/to/my-provider'

function CustomActiveToolLayout(props: ActiveToolLayoutProps) {
  return (
    <MyProvider>
      {props.renderDefault(props)}
    </MyProvider>
  )
}

export default defineConfig({
  // rest of config ...

  studio: {
    components: {
      activeToolLayout: CustomActiveToolLayout,
    }
  }
})
```

## Navbar

You can override and insert extra components in the Studio's navbar ([NavbarProps](https://reference.sanity.io/sanity/index/NavbarProps/)). This can be useful if you want to customize the navbar to be visually distinct in certain environments (e.g. development vs. production). Or control what's displayed based on user roles or other contextual factors.

### Properties

#### Properties

| Property | Description |
| --- | --- |
| renderDefault | A callback function that renders the default navbar component. The function takes the component's properties as an argument, and these properties can be modified. |

### Example

```typescript
// ./sanity.config.tsx|jsx

import {defineConfig, NavbarProps, useWorkspace} from 'sanity'
import {Card, Stack, Text} from '@sanity/ui'

function CustomNavbar(props: NavbarProps) {
  const {dataset} = useWorkspace()

  return (
    <Stack>
      <Card padding={3} tone="primary">
        <Text size={1}>
          Using the <b>{dataset}</b> dataset
        </Text>
      </Card>

			
      {props.renderDefault(props)} {/* Render the default navbar */}
    </Stack>
  )
}

export default defineConfig({
  // rest of config ...
	
  studio: {
    components: {
      navbar: CustomNavbar,
    }
  }
})
```

## Tool menu

The tool menu ([ToolMenuProps](https://reference.sanity.io/sanity/index/ToolMenuProps/)) appears in the navbar and lists all your Studio tools. The tool menu is displayed in two places depending on the width of the screen size. On wide screens, it appears in the top bar, while on narrow screens, it appears inside the sidebar.

### Properties

#### Properties

| Property | Description |
| --- | --- |
| activeToolName | The active tool name |
| closeSidebar | A function that closes the sidebar |
| context | A string that informs about the "context" in which the tool menu is rendered. This value is useful when you want to make two different customizations depending on whether the tool menu is in the top bar or in the side bar. |
| tools | An array of the tools in the studio |
| renderDefault | A callback function that renders the default tool menu component. The function takes the component's properties as an argument, and these properties can be modified. |

### Example

```typescript
// ./components/custom-toolmenu.tsx|jsx

import {defineConfig, ToolMenuProps, ToolLink} from 'sanity'
import {Button, Flex} from '@sanity/ui'

function CustomToolMenu(props: ToolMenuProps) {
  const {activeToolName, context, tools} = props
  const isSidebar = context === 'sidebar'

	// Change flex direction depending on context
	const direction = isSidebar ? 'column' : 'row'

  return (
    <Flex gap={1} direction={direction}>
      {tools.map((tool) => (
        <Button
          as={ToolLink}
          icon={tool.icon || PlugIcon}
          key={tool.name}
          name={tool.name}
          padding={3}
          selected={tool.name === activeToolName}
          text={tool.title || tool.name}
          tone="primary"
        />
      ))}
    </Flex>
  )
}
```
