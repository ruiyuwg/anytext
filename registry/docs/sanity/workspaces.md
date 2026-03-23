# Workspaces

Sanity Studio can accommodate multiple workspaces, each with its very own configuration. To set up a studio with more than one workspace, simply supply an array of configurations to [defineConfig](https://reference.sanity.io/sanity/index/defineConfig/) instead of a single config object.

**sanity.config.ts**

```typescript
// Multiple workspace configuration
import {defineConfig} from 'sanity'
import {EarthAmericasIcon, EarthGlobeIcon} from '@sanity/icons'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig([
  {
    projectId: '<projectId>',
    dataset: '<your-dataset>',
    name: 'us-workspace',
    basePath: '/us',
    title: 'USA',
    subtitle: 'All US content',
    icon: EarthAmericasIcon,
    plugins: [structureTool()],
    schema: {
      types: schemaTypes,
    },
  },
  {
    projectId: '<projectId>',
    dataset: '<your-dataset>',
    name: 'eu-workspace',
    basePath: '/eu',
    title: 'Europe',
    subtitle: 'All EU content',
    icon: EarthGlobeIcon,
    plugins: [structureTool()],
    schema: {
      types: schemaTypes,
    },
  },
])
```

The studio will pick up your new workspace and display a dropdown next to the studio title in the navbar to let you quickly switch between workspaces.

![Shows an active popover menu next to the studio title in the navbar. The dialog lists two workspaces, whereof the first is indicated to be currently active](https://cdn.sanity.io/images/3do82whm/next/1a5330749ab0b1793ab7bdb1fbd4d55d6dfbe33f-2144x1388.png)

## Workspace configuration properties

[Studio configurations](https://www.sanity.io/docs/studio/configuration) and workspace configurations are the same thing. We refer to them as *studio configs* when there's only one configuration, and as *workspace configs* when there are multiple configurations.

In practice, all configuration properties are workspace configuration properties. There are a few properties that, while legal and valid also for single workspaces, don't have actual value outside the context of a multi-workspace setup. For more information, see [this reference article](https://www.sanity.io/docs/studio/config-api-reference).
