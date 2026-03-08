# Asset Source

The form API includes options for working with assets. The `file` and `image` properties will both let you add to or override the list of available asset sources for their respective form inputs, as well as enable or disable direct uploads.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| assetSources | Accepts either a static array of asset source definitions or a callback function that returns the same. The callback is called with the current list of active asset sources as its first argument and a context object as the second. |
| directUploads | Whether or not to allow direct uploading of images/files. Defaults to true. |

## Example

```javascript
import {defineConfig} from 'sanity'
import {unsplashAssetSource} from 'sanity-plugin-asset-source-unsplash'
import {customSource} from './src/custom-asset-source'

export default defineConfig({
  // ...rest of config
  form: {
    image: {
      assetSources: (prev) => [...prev, unsplashAssetSource],
    },
    file: {
      assetSources: [customSource],
      directUploads: false,
    },
  },
})
```

## Context properties

These are the properties provided in the context object when defining asset sources using the callback function.

#### Properties

| Property | Description |
| --- | --- |
| dataset | Name of the current dataset |
| projectId | Unique ID for the project |
| schema | The schema registry of your project. Use \`schema.get("schemaTypeName") to retrieve any schema by name. |
| currentUser | An object with info about the currently logged in user. |
| getClient |  |

[Read more about asset source plugins](https://www.sanity.io/docs/studio/custom-asset-sources)

## Asset source properties

#### Properties

| Property | Description |
| --- | --- |
| name \* | Unique identifier for the asset source |
| title \* | Human-readable name for the asset source |
| component \* | A component that will let users browse and select images or files |
| icon | An icon for the asset source |

## Asset source selection component props

#### Properties

| Property | Description |
| --- | --- |
| selectionType \* | If the opening interface selection type is 'single' or 'multiple'. |
| selectedAssets \* | An array of Sanity assets if they are selected in the opening interface. These are Sanity asset documents. |
| onSelect(Asset\[]) \* | When assets are selected and returned to props.onSelect, the Studio will make sure to upload the asset(s). If the selected asset is uploaded previously, the existing asset document and file will be used instead. |
| onClose \* | The component must call props.onClose if the select action is canceled or closed somehow. |
| dialogHeaderTitle | A component that serves as the header element for the dialog window. |
| assetType | Either file or image |
