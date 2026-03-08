# Form Components

The following components are available for customization:

```javascript
// ./sanity.config.js

export default defineConfig({
  // rest of config ...
  form: {
    components: {
      field: MyCustomField,
      input: MyCustomInput,
      item: MyCustomItem,
      preview: MyCustomPreview,
    },
  },
})
```

For a description of how these different components map to the different parts of a form field, visit the [Form Components article](https://www.sanity.io/docs/studio/form-components).

Custom form components can be declared either at the configuration level, i.e. either in `defineConfig` or `definePlugin`, or in a schema. Components added at configuration level will affect all forms in the studio while components added to a schema will only affect the field or fields specified in that schema.

```javascript
// ./schemas/myDocument.jsx

import {defineType} from 'sanity'

function MyStringInput(props) {
  return (
    <div style={{border: '4px solid magenta'}}>
      {props.renderDefault(props)}
    </div>
  )
}

const myDocument = defineType({
  name: 'myDocument',
  type: 'myDocument',
  title: 'My document',
  fields: [
    {
      name: 'myTitle',
      type: 'string',
      title: 'My title',
      components: {input: MyStringInput},
    },
  ],
})
```

## Shared Properties

#### Properties

| Property | Description |
| --- | --- |
| changed |  |
| level |  |
| path |  |
| presence |  |
| renderDefault |  |
| schemaType |  |
| validation |  |
| value |  |

All form components receive the `renderDefault` method which will defer to the default studio rendering of the component when called with the component's props.

#### Properties

| Property | Description |
| --- | --- |
| renderDefault | A callback function that renders the default layout component. The function takes the component's properties as an argument, and these properties can be modified. |

In addition, each form component receives a set of props that varies in shape depending on the type of field they are assigned to.

## Input components

In addition to the shared properties (above), input components ([InputProps](https://reference.sanity.io/sanity/index/InputProps/)) have the following:

### Properties

#### Properties

| Property | Description |
| --- | --- |
| elementProps |  |
| focused |  |
| id |  |
| onChange |  |
| path |  |
| readOnly |  |
| validationError |  |

## Array item components

In addition to the shared properties (above), array item components ([ItemProps](https://reference.sanity.io/sanity/index/ItemProps/)) have the following:

### Properties

#### Properties

| Property | Description |
| --- | --- |
| id |  |
| elementProps |  |
| focused |  |
| focusPath |  |
| members |  |
| onChange |  |
| onItemExpand |  |
| onItemCollapse |  |
| onItemClose |  |
| onItemOpen |  |
| onInsert |  |
| onItemMove |  |
| onItemRemove |  |
| onItemAppend |  |
| onItemPrepend |  |
| onPathFocus |  |
| onUpload |  |
| resolveInitialValue |  |
| resolveUploader |  |
| renderInput |  |
| renderField |  |
| renderItem |  |
| renderPreview |  |

## Field components

In addition to the shared properties (above), field components ([FieldProps](https://reference.sanity.io/sanity/index/FieldProps/)) have the following:

### Properties

#### Properties

| Property | Description |
| --- | --- |
| children |  |
| description |  |
| index |  |
| inputId |  |
| inputProps |  |
| name |  |
| presence |  |
| title |  |
| validation |  |

## List preview components

In addition to the shared properties (above), list preview components ([PreviewProps](https://reference.sanity.io/sanity/index/PreviewProps/)) have the following:

### Properties

#### Properties

| Property | Description |
| --- | --- |
| actions |  |
| error |  |
| isPlaceholder |  |
| layout |  |
| media |  |
| title |  |
| \_type |  |
