# Preview header and navigation

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

The Presentation tool also allows you to customize the preview header, giving you the flexibility to add controls, status indicators, or other UI elements that enhance the editor experience.

This is particularly useful for enabling users to:

- [Interact with specific overlays](https://www.sanity.io/docs/visual-editing/custom-overlay-components)
- Toggle features
- Access contextual tools directly from the preview interface.

## Prerequisites

Before getting started, ensure the following:

- [Visual Editing](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing) enabled with up-to-date dependencies in your front end
- Sanity Studio v3.65.0 or later (`npm install sanity@latest`)

## Define a custom preview header component

First, create a custom header component to mount in the Presentation tool. In this case, you are creating a dropdown with a single toggle for enabling and disabling highlighting.

![Interface view of a web application featuring a toggle switch labeled ‘Edit,’ a URL input field displaying ‘http://localhost:3005/,’ and a dropdown menu option to ‘Enable Highlighting.’](https://cdn.sanity.io/images/3do82whm/next/db8d45afe1574cbfe53567cf40d85132334861bc-1706x350.png)

You can use the `renderDefault` prop to keep existing functionality whilst appending a custom control. You use `@sanity/ui` to render the new elements.

> \[!TIP]
> Protip
> Remember to install Sanity UI as a dependency, if you haven't already:
> `npm install @sanity/ui`

## Share state between overlays and the preview header

If you have multiple [custom overlays](https://www.sanity.io/docs/visual-editing/custom-overlay-components), you may need to allow content editors the ability to toggle specific overlays on or off, or provide more fine grained control over which overlay UI elements to render.

To do this, you need to share state between your Presentation tool in the Studio and your front end in preview mode that is rendered in the tool's iframe.

Both the Presentation tool and `@sanity/visual-editing` package provide `useSharedState` hooks. These hooks allow you to share state defined in the Presentation tool with custom overlay components in your front end. Both accepts two parameters: a unique string identifier as the `key`, and the state `value` itself.

> \[!WARNING]
> Gotcha
> Only JSON serializable state can be passed to `useSharedState`, this is data types like `string`, `number`, `boolean`, `null`, `arrays`, or plain `objects`.

Below is an example of a custom preview header that renders the out-of-box header UI (`props.renderDefault(props)`), with an additional new menu with a toggle for highlight components using Sanity UI:

```tsx
// ./CustomPreviewHeader.tsx

import {CheckmarkIcon, CloseIcon, EllipsisVerticalIcon} from '@sanity/icons'
import {useSharedState, type PreviewHeaderProps} from '@sanity/presentation'
import {Button, Menu, MenuButton, MenuItem} from '@sanity/ui'
import {useState, type FunctionComponent} from 'react'

export const CustomPreviewHeader: FunctionComponent<PreviewHeaderProps> = (props) => {
  const [enabled, setEnabled] = useState(false)
  useSharedState('highlighting', enabled)

  // Render the default header component, and append a new control
  return (
    <>
      {props.renderDefault(props)}
      <MenuButton
        button={
          <Button fontSize={1} icon={EllipsisVerticalIcon} mode="bleed" padding={2} space={2} />
        }
        id="custom-menu"
        menu={
          <Menu style={{maxWidth: 240}}>
            <MenuItem
              fontSize={1}
              icon={enabled ? CloseIcon : CheckmarkIcon}
              onClick={() => setEnabled((enabled) => !enabled)}
              padding={3}
              tone={enabled ? 'caution' : 'positive'}
              text={enabled ? 'Disable Highlighting' : 'Enable Highlighting'}
            />
          </Menu>
        }
        popover={{
          animate: true,
          constrainSize: true,
          placement: 'bottom',
          portal: true,
        }}
      />
    </>
  )
}

```

Now, you can access this state in a custom overlay component. Find instructions for how to do this in [the custom overlay component documentation](https://www.sanity.io/docs/visual-editing/custom-overlay-components).

## Mount a custom preview header component

> \[!NOTE]
> Unstable feature
> `unstable_navigator` has the `unstable` prefix because the API is likely to change. Don’t use it in a production environment unless you are ready to change it when the API stabilizes.

Pass custom preview header component via `components.unstable_header` in the Presentation tool configuration object, as below:

```tsx
// sanity.config.ts
import {defineConfig} from "sanity"
import {presentationTool} from "sanity/presentation"
import {CustomHeader} from "./CustomHeader"

export default defineConfig({
  // ...
  plugins: [
    presentationTool({
      // ...
      components: {
        unstable_header: {
          component: CustomHeader,
        },
      },
    }),
  ],
});


```

## Mount a custom navigator component

Optionally, you can enhance the Presentation tool with a custom document navigator component to help users select different documents or views in the front-end UI.

Example:

```typescript
// Import your custom navigator component
import {NavigatorComponent} from './presentation/NavigatorComponent'

export default defineConfig({
  // Your configuration for the project
  // ...

  plugins: [
    presentationTool({
      // ...
      component: {
  			// Pass the custom component to the plugin
        unstable_navigator: NavigatorComponent
      },
    })
  ],
})
```

### Navigator properties

#### Properties

| Property | Description |
| --- | --- |
| component \* | Specifies the navigator component to use with the Presentation tool. The component specified will be rendered as the content of the navigator panel. |
| minWidth | Sets the minimum width of the navigator component when it’s rendered in the UI. For the component to render, its value must be > 0 and other than null. |
| maxWidth | Sets the maximum width of the navigator component when it’s rendered in the UI. For the component to render, its value must be > 0 and other than null. |

## Hooks reference

### useSharedState

| Method | Description |
| --- | --- |
| useSharedState(key, value): Your serializeable state | The useSharedState enables you to share state between the Presentation tool and your custom overlay components in your front end’s preview. |

## Resources

- [Visual Editing](https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing)
- [Overlays](https://www.sanity.io/docs/visual-editing/visual-editing-overlays)
- [@sanity/mutate](https://github.com/sanity-io/mutate)
- [Sanity UI](https://www.sanity.io/ui)
