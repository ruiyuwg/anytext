# Introduction

Typically, you find the studio configuration inside a `sanity.config.ts (or js)` file located at the root of your project. The development server for Sanity Studio automatically picks up what's returned from the exported [defineConfig](https://reference.sanity.io/sanity/index/defineConfig/) function. This function takes either a single workspace configuration object or [an array of configuration objects](https://www.sanity.io/docs/studio/workspaces) as its only argument. By implementing the pre-defined properties of this object you are able to customize a range of options and behaviors in the studio, as well as control how plugins and other studio extensions are configured.

> \[!TIP]
> Protip
> All these are valid file suffixes for the studio configuration file: `.js` , `.jsx` , `.ts` , `.tsx`

## Minimal studio configuration example

### Single Studio configuration

For a single Studio configuration, the `defineConfig` function takes a single configuration object. The only *required* properties are `projectId` and `dataset` but, since this won't make for a very useful studio, we've included the [structureTool()](https://reference.sanity.io/sanity/structure/structureTool/)-plugin and some schemas in our example to reflect a more typical setup.

[More about Schemas and Forms ->](https://www.sanity.io/docs/studio/schemas-and-forms)

```javascript
// Single workspace configuration

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  projectId: '<your-project-id>',
  dataset: '<your-dataset-name>',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
```

### Multiple workspace configurations

When configuring multiple workspaces you supply an array of configuration objects. Each of these must, in addition to `projectId` and `dataset`, also include a unique `basePath` and `name` for each workspace.

[More about Workspaces ->](https://www.sanity.io/docs/studio/workspaces)

```javascript
// Multiple workspace configuration
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig([
  {
    projectId: '<projectId>',
    dataset: 'production',
    name: 'production-workspace',
    basePath: '/production',
    title: 'Default Workspace',
    subtitle: 'production',
    plugins: [structureTool()],
    schema: {
      types: schemaTypes,
    },
  },
  {
    projectId: '<projectId>',
    dataset: 'staging',
    name: 'staging-workspace',
    basePath: '/staging',
    title: 'Another workspace',
    subtitle: 'staging',
    plugins: [structureTool()],
    schema: {
      types: schemaTypes,
    },
  },
])
```

### Property callback functions

Many of the properties of the config object have the option of accepting a callback function instead of a static value. These callbacks are usually invoked with the previous value and a context object.

```javascript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  projectId: '<your-project-id>',
	dataset: '<your-dataset-name>',
  plugins: [structureTool()],
	schema: {
    types: (prev, context) => {
      console.log(context);// logs { projectId, dataset }
      return [...schemaTypes, ...prev]
    },
  },
})
```

> \[!WARNING]
> Gotcha
> If you choose to use the callback function you need to make sure you return the previous value along with whatever new value you want to add. When using static values this is handled automatically by the studio.

The information included in the context object varies depending on the property in question.

```javascript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {RocketIcon} from '@sanity/icons'
import {schemaTypes} from './schemas'

export default defineConfig({
  projectId: '<your-project-id>',
	dataset: '<your-dataset-name>',
  plugins: [structureTool()],
	schema: {
    types: schemaTypes,
  },
	tools: (prev, context) => {
    console.log(context) // logs { getClient, currentUser, schema, projectId, dataset}
    return [
      {
        name: 'my-tool',
        title: 'My super-cool tool',
        icon: RocketIcon,
        component: (props) => <Card>I am a tool, albeit not a useful one</Card>,
      },
      ...prev, // remember to include previous values
    ]
  },
})
```

> \[!WARNING]
> Gotcha
> The example above includes some JSX in the inline component declaration. Vite, the default studio bundler, requires files that contain JSX to have a file extension or either `.jsx` or `.tsx`.

## Commonly used configuration properties

### Workspace properties

Every workspace configuration needs to at least include appropriate string values for `dataset` and `projectId`. If you are working with multiple workspaces in your studio, each workspace should also include a `name` and `basePath`.

```javascript
//⬇ Required
dataset: '<your-dataset-name>',
projectId: '<your-project-id>',
//⬇ Optional if only using a single workspace
name: 'cool-studio',  
basePath: '/my-default-workspace',
//⬇ Optional 
title: 'My Cool Studio',
subtitle: 'production'
icon: RocketIcon, 
```

[More about Workspaces ->](https://www.sanity.io/docs/studio/workspaces)

### Schema

The `schema` property is where you declare your schema types. You can specify a static array of schema objects or a callback function that returns such an array.

```javascript
schema: {
	types: mySchemas,
}
```

```javascript
schema: {
  types: (prev, context) => {
    console.log(context) // logs { projectId, dataset' }
    return [...mySchemas, ...prev]
  },
},
```

You may also set [initial value templates](https://www.sanity.io/docs/studio/initial-value-templates) using the aptly named `templates` property. You can specify a static array of template objects or a callback function that returns such an array.

```javascript
schema: {
    templates: (prev) => [
		  {
		    id: 'category-child',
		    title: 'Category: Child',
		    schemaType: 'category',
		    parameters: [{name: `parentId`, title: `Parent ID`, type: `string`}],
		    value: ({parentId}) => ({
		      parent: {_type: 'reference', _ref: parentId},
		    }),
		  },
		  {
		    id: 'article-with-author',
		    title: 'Article: Author',
		    schemaType: 'article',
		    parameters: [{name: `authorId`, title: `Author ID`, type: `string`}],
		    value: ({authorId}) => ({
		      author: authorId,
		    }),
		  },
		  ...prev,
		]
  },
```

[More about Schemas ->](https://www.sanity.io/docs/studio/schemas-and-forms)

### Plugins

This is where you declare plugins for your studio. It accepts a static array of plugin config objects or a callback function that returns such an array. The default studio templates come with the `structureTool` plugin included already.

```javascript
plugins: [structureTool()],
```

You’ll notice that the plugin function usually needs to be invoked, not just referred to. This is because plugins, by convention, are functions that can accept configuration options as arguments.

```javascript
plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: 'v2021-10-21',
      defaultDataset: 'production',
    }),
  ],
```

[More about Plugins ->](https://www.sanity.io/docs/studio/installing-and-configuring-plugins)

### Tools

Tools are full page-components, in that they “take over” most of the studio interface when activated, just like the structure-tool or vision plugin. Because of this behavior they also show up in your studio’s nav bar, and they can be navigated to by appending their `name` to your studio’s URL. E.g. `https://my-cool-site.com/studio/my-tool`.

Tools are declared much in the same way as plugins. The property accepts either a static array of tool configuration objects or a callback function that returns such an array.

```javascript
  tools: [
    {name: 'my-tool', title: 'My Tool', component: MyTool},
    {name: 'tool-2', title: '2nd Tool', component: MyOtherTool},
  ],

 // Example using the callback function with some conditional logic
  tools: (prev, {currentUser}) => {
    if (currentUser.roles.find((r) => r.name === 'admin')) {
      return [
				...prev,
				{name: 'admin', title: 'Admin', component: MyAdminTool},
			]
    }
		return prev
  },
```

[More about Tools ->](https://www.sanity.io/docs/studio/studio-tools)

### Form

The form config property lets you configure asset sources for files and images, as well as override the default rendering of form components.

```javascript
form: {
  file: {
  assetSources: myFileAssetSourceResolver,
  directUploads: true,
  }
  image: {
    assetSources: myImageAssetSourceResolver,
    directUploads: true,
  },
  components: {
    input: (props) => isStringInputProps(props) ? <MyCustomStringInput {...props} /> : props.renderDefault(props),
    field: MyCustomField,
	}
},
```

> \[!WARNING]
> Gotcha
> Overriding the rendering of inputs and fields in the top level studio configuration will affect all fields in your studio. If you wish to customize the rendering of only certain fields, you probably want to do so by setting the components property of the appropriate fields. More info: [Introduction to Component API](https://www.sanity.io/docs/studio/intro-to-custom-studio-components).

[More about Asset Sources ->](https://www.sanity.io/docs/studio/custom-asset-sources)

[More about Form Components ->](https://www.sanity.io/docs/studio/form-components)

### Document

This property lets you configure [document actions](https://www.sanity.io/docs/studio/document-actions) and [badges](https://www.sanity.io/docs/studio/custom-document-badges), as well as set a `productionUrl` for previews and specify [options for new documents](https://www.sanity.io/docs/studio/new-document-options).

```javascript
document: {
  actions: (prev) =>
    prev.map((previousAction) =>
      previousAction.action === 'publish' ? MyPublishAction : previousAction
    ),
  productionUrl: (prev, context) => {
    return `http://example.com/${context.document?.slug?.current || '404.html'}`
  },
},
```

[More about Actions & Badges ->](https://www.sanity.io/docs/studio/document-actions-api)

### Auth

This property lets you implement custom authentication by providing a configuration object that conforms to the [AuthConfig](https://reference.sanity.io/sanity/index/AuthConfig/) signature.

```javascript
import {defineConfig} from 'sanity'
/* ... */

auth: {
  redirectOnSingle: false,
  mode: 'append',
  providers: [
    {
      name: 'vandelay',
      title: 'Vandelay Industries',
      url: 'https://api.vandelay.industries/login',
      logo: '/static/img/vandelay.svg'
    }
  ],
  loginMethod: 'dual',
}
```

[More about Authentication ->](https://www.sanity.io/docs/studio/custom-auth)
