# Structure tool

The Structure Tool is a top-level view within Sanity Studio where editors can drill down to specific documents to edit them. You can configure your studio's Structure tool(s) with the Structure Tool API.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| name | The name you want this structure to have (among other places, this name is used in routing, if name is set to “structure”, it is shown on /structure). Usually lowercase or camelcase by convention. Defaults to structure. |
| title | The title that will be displayed for the tool. Defaults to Structure |
| icon | React icon component for the tool, used in navigation bar. Defaults to MasterDetailIcon from @sanity/icons |
| structure | A structure resolver function. Receives two arguments:

S - an instance of the structure builder, that can be used to build the lists/items/panes for the structure tool

context - an object holding various context that may be used to customize the structure, for instance the current user.

Defaults to (S) => S.defaults() |
| defaultDocumentNode | A resolver function used to return the default document node used when editing documents. Receives two arguments:

S - an instance of the structure builder, that can be used to build the document node (S.document())

context - an object holding various context that may be used to customize the document node |

## Minimal Example

The `sanity/structure` package exports a `structureTool`, which is a plugin that installs a structure tool. You can add it to your studio by passing it as part of the `plugins` array.

```typescript
// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig((
	// ...
  plugins: [
    structureTool() // use defaults
  ]
})
```

To customize your `structure` tool, pass an object in with the settings you want to customize. For instance, if you want a custom structure tool called “cars” that shows in the toolbar as “Cars” and has an icon from `react-icons` and tweaks both the `structure` and `defaultDocumentNode`:

```typescript
// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { FaCar } from 'react-icons'

export default defineConfig((
	// ...
  plugins: [
    structureTool({
      name: 'cars',
      title: 'Cars',
      icon: FaCar,
      structure: (S) => S.documentTypeList('car'),
      defaultDocumentNode: (S) =>
        S.document().views([
          S.view.form(),
          S.view.component(Preview).title('Preview')
        ])
    })
  ]
})
```
