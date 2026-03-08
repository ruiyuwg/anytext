# Configuration

[Introduction to Studio configuration](https://www.sanity.io/docs/studio/configuration)

## Workspaces

The root configuration of your studio is created by supplying either a single workspace configuration object or an array of the same type to the [defineConfig](https://reference.sanity.io/sanity/index/defineConfig/)-function, and returning the result as the default export of the configuration file – typically found at the root of your project in a file named `sanity.config.js|ts`.

```javascript
// The absolute minimum viable studio configuration
import { defineConfig } from 'sanity'

export default defineConfig({
  projectId: '<project-id>',
  dataset: 'production',
})
```

## Properties

The following table shows all the top-level properties available for configuring and customizing a single workspace studio.

#### Properties

| Property | Description |
| --- | --- |
| projectId \* | The ID of the Sanity project to use for the studio |
| dataset \* | The name of the dataset to use for the studio |
| auth | Lets you implement custom authentication by providing a configuration object. Read more about configuring auth providers. |
| document | Accepts custom components for document actions and badges, as well as a custom productionUrl resolver and default configuration for new documents. Read more about the document API. |
| form | Extensions / customizations to the studio forms. Accepts configurations for image and file asset sources as well as custom components to override the default studio rendering. Read more about the form API. |
| plugins | Studio plugins - takes an array of plugin declarations that can be called with or without a configuration object. Read more about plugins. |
| tools | Studio tools – takes an array of tool declarations that can be called with or without a configuration object. Read more about the tool API. |
| schema | Schema definition - takes an array of types and an optional array of templates (initial value templates). While defining a schema is not required, there are few things inside the studio that works without one. Read more about the schema API. |
| studio | Accepts a components object which will let you override the default rendering of certain bits of the studio UI. Read more about studio components. |
| theme | Accepts a theme configuration object. Read more about theming. |
| i18n | Accepts a config object for localizing the studio UI. Read more about studio localization. |

## Additional properties for multiple workspace-configurations

#### Properties

| Property | Description |
| --- | --- |
| name \* | Name of the workspace - by convention in lowercase/camelCase |
| basePath \* | URL base path to use, for instance /myWorkspace |
| title \* | Title of the workspace |
| subtitle | Subtitle to show under the name of the workspace |
| icon | React component to use as icon for this workspace |

## Examples

### Minimal example

```javascript
// A more plausible minmalist configuration
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'


export default defineConfig({
  title: 'My cool project',
  projectId: '<project-id>',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
```

### Multiple workspace example

```javascript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {LaunchIcon, RobotIcon} from '@sanity/icons'
import {schemaTypes} from './schemas'

export default defineConfig([
  {
    name: 'my-prod-space',
    title: 'My production workspace',
    basePath: '/production',
    icon: LaunchIcon,
    projectId: '<project-id>',
    dataset: 'production',
    plugins: [structureTool()],
    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'my-staging-space',
    title: 'My staging workspace',
    basePath: '/staging',
    subtitle: 'The world is a stage',
    icon: RobotIcon,
    projectId: '<project-id>',
    dataset: 'staging',
    plugins: [structureTool(), visionTool({defaultApiVersion: '2022-10-21'})],
    schema: {
      types: schemaTypes,
    },
  },
])

```

# Document

## Properties

#### Properties

| Property | Description |
| --- | --- |
| actions | Accepts an array of document action components, or a callback function that resolves to the same. The callback function receives the existing actions array as its first argument and a context object as its second. Read more about document actions. |
| badges | Accepts an array of document badge components, or a callback function that resolves to the same. The callback function receives the existing badges array as its first argument and a context object as its second. Read more about document badges. |
| productionUrl | Constructs a production URL for previews or other purposes. Accepts a static string or a more helpful callback function called with the existing value as the first argument and a context object as the second.

If specified, an "Open preview" option in the document context menu of your studio. |
| newDocumentOptions | Accepts a callback function that returns an array of new document options templates. The callback is called with the array of existing templates and a context object as arguments. Read more about new document options. |
| drafts | Accepts an object of options. The only available option at this time is enabled. true by default, setting enabled to false disables draft creation for the Studio. If the dataset already contains drafts, a banner will appear on each draft document in Studio allowing users to compare, publish, or discard the draft. For example: document: { drafts: { enabled: false } } |

# Document Badges

A document badge is a small UI component that indicates the status of a document. It currently appears in the Studio next to the toolbar actions. The default set of document badges currently shows `draft` and `published` status.

[Introduction to using document badges →](https://www.sanity.io/docs/studio/custom-document-badges)

[Learn how to use document badges when building custom workflows →](https://www.sanity.io/docs/studio/document-actions)

## Document badge properties

These are the properties returned to a badge component.

#### Properties

| Property | Description |
| --- | --- |
| id | An id for the current document (e.g. the id of the published document) |
| type | The schema type of the current document. |
| draft | Returns the draft document (a document with unpublished changes) if any. Returns null if there is no draft document. |
| published | The version of the document that is currently published, if available. Returns null if the document isn't published. |

## Document badge description

These are the properties a badge description object must follow.

#### Properties

| Property | Description |
| --- | --- |
| title | Title of the badge. This will be displayed when hovering the badge. |
| label | The label that the badge will display. |
| color | The color for the badge. Can be one of the following values: primary, warning, success, danger |

## Example

```javascript
export function HelloWorldBadge(props) {
  return {
    label: 'Hello world',
		title: 'Hello I am a custom document badge',
    color: "success"
  }
} 
```

[See a complete example of implementing custom badges →](https://www.sanity.io/docs/studio/custom-document-badges)
