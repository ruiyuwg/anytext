# Configuration file

[Overview](https://www.sanity.io/docs/blueprints/blueprints-introduction)

The Blueprints configuration file (`sanity.blueprint.ts`) defines resources, like Functions, for deployment to Sanity's infrastructure.

Interact with Blueprints by using the `npx sanity blueprints` [CLI command](https://www.sanity.io/docs/cli-reference/cli-blueprints).

The top-level of the blueprint configuration file contains the following properties:

#### Properties

| Property | Description |
| --- | --- |
| blueprintVersion \* | Defines the version of the Blueprints specification to use when parsing the configuration. Uses the YYYY-MM-DD format. |
| resources \* | An array of Sanity resources. Right now this is limited to Function resources, but will expand in the future. |

Some configuration properties, like `blueprintVersion`, are handled automatically when using the `defineBlueprint` helper.

## Resources

The following properties are shared across all resources. Additional resource-specific properties follow in the sections below.

#### Properties

| Property | Description |
| --- | --- |
| name \* | A unique function name. Must be an alphanumeric string that can contain dashes or underscores. |
| type \* | A resource type. For Sanity resources, this is made up of the sanity namespace, category, subcategory, and resource types separated by single periods. For example: sanity.function.document or sanity.function.media-library.asset. |

### Functions

In addition to the [required common resource properties](https://www.sanity.io/docs/blueprints/blueprint-config) above, functions also contain the following properties.

#### Properties

| Property | Description |
| --- | --- |
| src | The path, relative to the blueprint configuration file, of the individual function directory. Will be inferred from the name if omitted. For example, functions/myFunction. |
| type | Specifies the Function type. Supported Function types are:

sanity.function.document: this Function will react to changes in your dataset documents, like when a document is created, updated or deleted.

sanity.function.media-library.asset: this Function will react to changes in your Media Library, like when an asset is uploaded, updated or deleted. Note that your plan must have access to the Media Library to use this Function type. |
| event | Configuration options for the triggering event. See the event properties section below for details. |
| timeout | The max invocation time, in seconds, of the function.

Default: 10

Minimum: 1

Maximum: 900 |
| memory | Sets the max memory allocation, in GBs.

Default: 1

Min: 1

Max: 10 |
| env | Set environment variables for the function. The env object accepts custom keys with string values. This is an alternative approach to using the sanity functions env CLI command. Note: Setting environment variables in this manner is only additive. It can create/update variables, but in order to remove an environment variable you must use the sanity functions env remove command. |
| transpile | If false, you will need to transpile any TypeScript code yourself and output the results to the individual function's .build directory. Defaults to true. |
| autoResolveDeps | If false, disables the automatic dependency resolution. Defaults to true. |

A complete list of available properties can be found in the [defineDocumentFunction reference documentation](https://reference.sanity.io/_sanity/blueprints/defineDocumentFunction/).

#### `event` properties

#### Properties

| Property | Description |
| --- | --- |
| on | Defines the types of events that trigger your Function. You can include more than one, but you cannot combine publish with other events. The options are:

create: Activates when a document is created. Defaults to includeDrafts: false and includeAllVersions: false.

delete: Activates when a document is deleted. Defaults to includeDrafts: false and includeAllVersions: false.

update: Activates when a document is updated. Defaults to includeDrafts: false and includeAllVersions: false.

publish (deprecated): Activates when a document is published. Essentially a shorthand for: create + update with includeAllVersions: true. Use explicit create/update events instead.

These actions trigger on individual documents with unique \_id values. |
| filter | A valid GROQ filter. Learn more about GROQ Filters.

Only include the contents of the filter, not any other surrounding syntax.

✅ Do this: \_type == "article"

❌ Not this: \[\_type == "article"] |
| projection | A valid GROQ projection. Example: {title, \_id, slug} |
| includeDrafts | Determines whether events on draft documents (drafts.\*\*) trigger the function. Defaults to false. When false: draft edits are ignored; only published document changes trigger. When true: every draft edit triggers the function. Please note that turning this on can quickly have your Function hit rate limits.

Only applies to the following Function types:

sanity.function.document

sanity.function.media-library.asset |
| includeAllVersions | Determines whether events on version documents (versions.\*\*) trigger the function. This includes documents in Content Releases and Scheduled Drafts. Defaults to false. When false: version edits are ignored; the function only triggers when versions are published. When true: every version edit triggers the function. Please note that turning this on can quickly have your Function hit rate limits.

Only applies to the following Function types:

sanity.function.document |
| resource | Defines the resource from which changes will trigger your function. If defined, you must specify a type and id. If not set, the resource will default to all datasets for the Blueprint's linked project.

Accepted values depend on what type of Function you are defining:

Optional if your Function type is sanity.function.document.

If defined, the resource.type must be dataset and resource.id is specified in the form ..

You can set  to \* to signify "all datasets in the project with ID ."

Required if your Function type is sanity.function.media-library.\*. The resource.type must be media-library and resource.id should equal your Media Library ID. |

#### Example

**sanity.blueprint.ts (TypeScript / JavaScript)**

```
import {defineBlueprint, defineDocumentFunction, defineMediaLibraryAssetFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: "log-event",
      event: {
        on: ["update"],
        filter: "_type == 'post'",
        projection: "{title, _id, _type}",
        resource: {
          type: 'dataset',
          id: 'myProject.myDataset'
        }
      },
      env: {
        example: 'value'
      }
    }),
    // Helper introduced in @sanity/blueprints v0.4.0
    defineMediaLibraryAssetFunction({
      name: "image-title-updated",
      event: {
        on: ["update"],
        filter: "delta::changedAny(title)",
        projection: "{title, _id, versions}",
        resource: {
          type: 'media-library',
          id: 'mlAbcd1234'
        }
      }
    })
  ]
})

```

**sanity.blueprint.json (JSON)**

```json
{
  "blueprintVersion": "2024-10-01",
  "resources": [
    {
      "name": "log-event",
      "src": "functions/log-event",
      "type": "sanity.function.document",
      "event": {
        "on": [
          "update"
        ],
        "filter": "_type == 'post'",
        "projection": "{title, _id, _type}",
        "resource": {
          "type": "dataset",
          "id": "myProject.myDataset"
        }
      },
      "env": {
        "example": "value"
      }
    },
    {
      "name": "image-created",
      "src": "functions/image-created",
      "type": "sanity.function.media-library.asset",
      "event": {
        "on": [
          "create"
        ],
        "filter": "assetType == 'sanity.imageAsset'",
        "projection": "{title, _id, versions}",
        "resource": {
          "type": "media-library",
          "id": "mlAbcd1234"
        }
      }
    }
  ]
}
```

### Additional resources

Reference documentation for additional Blueprint resources is available in the `@sanity/blueprints` documentation.

- [CORS reference](https://reference.sanity.io/_sanity/blueprints/defineCorsOrigin/)
- [Webhooks reference](https://reference.sanity.io/_sanity/blueprints/defineDocumentWebhook/)
- [Media Library Asset Function reference](https://reference.sanity.io/_sanity/blueprints/defineMediaLibraryAssetFunction/)
- [Robot token reference](https://reference.sanity.io/_sanity/blueprints/defineRobotToken/)
- [Role reference](https://reference.sanity.io/_sanity/blueprints/defineRole/)

## TypeScript / JavaScript helpers

You can configure Blueprints with TypeScript and JavaScript. If you select either during `sanity blueprints init`, the CLI prompts you to install the [@sanity/blueprints](https://github.com/sanity-io/blueprints-node) package. You can also add it to an existing project by adding it to your Blueprints-level project directory.

**NPM**

```sh
npm i @sanity/blueprints
```

**PNPM**

```sh
pnpm add @sanity/blueprints
```

The helpers provide defaults and allow you to omit some configuration options. You can always override these defaults by explicitly setting the values as you would with the JSON format.
