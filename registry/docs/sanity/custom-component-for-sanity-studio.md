# Custom component for Sanity Studio

Sanity Studio lets you customize your editorial experience by overriding different parts of the Sanity Studio with your own components written in React. The customized components can be split into two main categories:

- Studio components- Layout

- Navbar

- Tool menu

- Form components- Fields

- Inputs

- Array items

- Preview

## Studio components

The `studio.components` configuration property accepts replacements for several parts of the studio UI, such as the `layout`, `navbar`, and `toolMenu`. Studio components can be declared in your root workspace configuration, i.e. the [defineConfig](https://reference.sanity.io/sanity/index/defineConfig/) function, or as part of a plugin config, i.e. the [definePlugin](https://reference.sanity.io/sanity/index/definePlugin/) function.

```javascript
// sanity.config.js
import {defineConfig} from 'sanity'

export default defineConfig({
  // ...rest of config
  studio: {
    components: {
      layout: MyLayout,
      navbar: MyNavbar,
      toolMenu: MyToolMenu,
    },
  },
})
```

> \[!WARNING]
> Gotcha
> **logo is deprecated**
>
> - Custom `logo` components are no longer rendered.
> - Instead, provide custom components for individual workspace icons in the [Studio configuration](https://www.sanity.io/docs/studio/configuration).

[Studio components](https://www.sanity.io/docs/studio/studio-components)

[Reference: Studio components](https://www.sanity.io/docs/studio/studio-components-reference)

## Form components

The `form.components` property deals with the rendering of form fields and inputs in the studio. The components available for customizing are `field`, `input`, `item` and `preview`. Form components can be declared in your root workspace configuration, i.e. the `defineConfig` function, as part of a plugin config, i.e. the `definePlugin` function, or individually on any field in your schemas.

```typescript
// sanity.config.js
import {defineConfig} from 'sanity'

export default defineConfig({
  // ...rest of config
  form: {
    components: {
      field: MyField,
      input: MyInput,
      item: MyItem,
      preview: MyPreview,
    },
  },
})
```

[Form components](https://www.sanity.io/docs/studio/form-components)

[Reference: Form components](https://www.sanity.io/docs/studio/form-components-reference)

## Composing components with `renderDefault`

The components available in this API are rendered using a middleware pattern. This means that plugin customizations are applied cumulatively in a chain or cascade. Each component declaration receives a callback function named `renderDefault` which, as the name implies, will defer to the default studio rendering of the component. When you call `renderDefault` you also pass along the `props` needed to render the component, with any changes you care to make.

```typescript
import { Stack, Card, Flex, Text } from '@sanity/ui'

// Adds markup and invokes renderDefault()
function MyEnhancedNavbar(props) {
  return (
    <Stack>
      <Card padding={3} tone="caution">
        <Flex justify="center">
          <Text>Important reminder! Remember this banner!</Text>
        </Flex>
      </Card>
      <>{props.renderDefault(props)}</>
    </Stack>
  )
}
```

![Shows a studio navbar customized to display a yellow background banner on top that says “Import reminder! Remember this banner”](https://cdn.sanity.io/images/3do82whm/next/6bf579c17450e7521b5cddc92a84e451457f8f47-728x421.png)

You may opt not to call `renderDefault` if you want to replace the component in question in its entirety with your own markup, but be aware that doing so in a plugin might result in unexpected behavior as it breaks the middleware chain.

## Typical use cases/problems this solves

- Hide certain tools when the studio is in development mode with a custom `toolMenu`
- Wrap your studio with multiple context providers with a custom `layout` component
- Create a custom `input` to display a range slider on a `number` field, or add a character counter on all `string` fields

## Related and further reading

- [Studio components](https://www.sanity.io/docs/studio/studio-components)
- [Reference – Studio components API](https://www.sanity.io/docs/studio/studio-components-reference)
- [Form components](https://www.sanity.io/docs/studio/form-components)
- [Reference – Form components API](https://www.sanity.io/docs/studio/form-components-reference)
