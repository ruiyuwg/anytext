# Form Components

[Reference: Form API](https://www.sanity.io/docs/studio/form-api-reference)

The `form.components` configuration property is available in your root studio configuration, in plugins, and on individual fields. It accepts the following component customizations:

```javascript
// sanity.config.js
import {defineConfig} from 'sanity'

export default defineConfig({
  // ...rest of config
  form: {
    components: {
      input: MyInput,
  		field: MyField,
  		item: MyItem,
  		preview: MyPreview,
    }
  }
})
```

The props for each component available in the API include a callback function called `renderDefault`. As the name implies, `renderDefault` renders the default component. When you call renderDefault, you also pass along the props needed to render the default component. You can modify the props to your liking before passing them along.

```javascript
// ./custom-string.js

import {Stack, Text, Card} from '@sanity/ui'

export function CustomStringInput(props) {
  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      <Text size={1}>Characters: {props.value?.length || 0}</Text>
    </Stack>
  )
}
```

If you want to completely replace the component in question with your own markup, you can do so by neglecting to invoke `renderDefault` in your return. Be aware that doing so in a plugin setup might cause unexpected behavior because of the chainable nature of the components API (discussed in the next section).

## Composing renderDefault()

The rendering of components in this API uses a middleware pattern. This means that plugin customizations are applied in a chain. Each plugin may call `props.renderDefault(props)` to defer to default rendering. If any component in the chain fails to invoke the callback function, the chain breaks! To learn more about `renderDefault`, visit this [article on the component API](https://www.sanity.io/docs/studio/intro-to-custom-studio-components).

## Input and Field components

The `input` and `field` custom components are easiest to understand when examined together. To demonstrate the difference between these two we’ll take a closer look at the anatomy of a field widget in the studio. In the illustration below the *field* includes everything within the purple dashed border conveniently marked “field”, while the *input* includes only what’s within the green dashed border marked “input”.

![Diagram showing that only the actual text field a user enters their input into belongs to the Input component, while elements such as title and description belongs in the Field component](https://cdn.sanity.io/images/3do82whm/next/e22848b0c971f0573db5dd83adc65ae1f7e49477-891x336.png)

Often, developers are chiefly interested in customizing the input widget itself and happy to leave the rest to studio defaults. In these cases, you would opt to replace `components.input`. If you do want to control the field in its entirety, you can do so by replacing the `components.field` component.

In the following example, we assign a custom field component – adding a border and transforming the title and description visually – to *all* studio fields. In contrast, we do a check to only assign a custom input component – adding a character count – if the field has the `string` schema type.

```javascript
// sanity.config.js

import {Stack, Text, Card} from '@sanity/ui'
import {defineConfig} from 'sanity'
import schemaTypes from './schemas'

function CustomStringInput(props) {
  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      <Text size={1} style={{color: 'orange'}}>
        Characters: {props.value?.length || 0}
      </Text>
    </Stack>
  )
}

function CustomField(props) {
  const {description, title, ...restProps} = props
  return (
    <Card border padding={3}>
      <Stack space={3} marginBottom={3}>
        <Text size={1} weight="bold">
          {title?.toUpperCase()}
        </Text>
        {description && (
          <Text size={1} style={{color: 'green'}}>
            {description}
          </Text>
        )}
      </Stack>
      {props.renderDefault(restProps)}
    </Card>
  )
}

export default defineConfig({
  //...rest of config
  form: {
    components: {
      field: CustomField,
      input: (props) =>
				props.schemaType?.name === 'string' ? <CustomStringInput {...props} /> : props.renderDefault(props),
    },
  },
})
```

The result in the studio is that all fields are customized to use the `CustomField` component which transforms the title and description and adds a border around the field, while only the fields of type `string` are affected by the `CustomStringField` a component which adds a character count in bright orange.

![Three studio fields named Title, Author and Alug. All of them have a grey border. The slug and title fields have descriptions in green. The title field alone also has a word count in orange.](https://cdn.sanity.io/images/3do82whm/next/312c8a0db9eb2d8b98061e4d14046b65a0665782-652x438.png)

[Form Component Reference](https://www.sanity.io/docs/studio/form-components-reference)

## Preview components

The preview component decides how an object, image, or reference value is displayed in list views. The illustration below shows an example of an array of objects, where each object has a `string` and an `image` field defined. The default preview component tries its best to guess which fields should be displayed by introspecting the defined fields of the object.

![Studio screenshot that indeed shows the studio rendering the previews, presumedly by inferring which values to display](https://cdn.sanity.io/images/3do82whm/next/2ed2138b7f654bf3c7c1f55cef16d6d99437857f-2048x652.png)

Just like with input and field components – it is possible to configure a custom preview component. The custom preview component can be configured either in `sanity.config.js`, in a plugin, or directly in the schema definition. In the following example, we will configure a custom preview component directly in the schema definition.

To keep things simple, our custom preview component will be a `div` with a green border that wraps the default preview component rendered using `renderDefault`. However, it is possible to configure a completely custom component and not use `renderDefault`.

The following schema definition is what the illustration above represents. Since we want to configure a custom preview component for each object in the array, we add our component to the `components.preview` property for the object field definition.

```typescript
// ./custom-array.js

import {defineField} from 'sanity'

// Render a div that wraps the default preview component
function MyPreviewComponent(props) {
  return (
    <div style={{border: '1px solid green'}}>
      {props.renderDefault(props)}
    </div>
  )
}

export const arrayOfObjects = defineField({
  type: 'array',
  name: 'arrayOfObjects',
  title: 'Array of objects',
  of: [
    {
      type: 'object',
      name: 'myObject',
      title: 'My object',
      components: {
        preview: MyPreviewComponent, // Add custom preview component
      }, 
      fields: [
        {
          type: 'string',
          name: 'myString',
          title: 'My string',
        },
        {
          type: 'image',
          name: 'myImage',
          title: 'My image',
        },
      ],
    },
  ],
})

```

As you can see in the illustration below, our custom preview component is rendered.

![Shows the array of objects with previews that have a slim green border](https://cdn.sanity.io/images/3do82whm/next/5c13589455833f1a23c96ae0d1aeab71e40a393b-2970x976.png)

## Item components

The item component is the component that represents each item in an array field. The default item component contains a drag handle for sorting, a menu with actions – such as duplicate and delete – and some content. The content, that is, what is between the drag handle and the actions menu, varies based on what type of field(s) the item represents.

In an array of objects, a *preview component* is displayed as content, but in an array of primitive types (e.g boolean or string) – an *input component* is displayed as content.

![Example of items for object field. The object input is displayed in a dialog when clicking the item.](https://cdn.sanity.io/images/3do82whm/next/91ba5f304ed45332fd694a5ecd7f724d9de6e453-2402x836.png)

![Example of items for a string field. The string input is displayed inside the item (inline editing etc)](https://cdn.sanity.io/images/3do82whm/next/bf1b0854c5d4c915c1efa2daf5b6abd49c1f4a9b-2144x754.png)

## Typical use cases/problems this solves

- Decorate the default component, or modify the props passed to the default component, using `renderDefault`
- Create your own completely custom component
