# Global Document Reference

Global document references (GDR) expand the concept of the reference type to support referencing documents in other datasets. See the [GlobalDocumentReferenceDefinition](https://reference.sanity.io/sanity/index/GlobalDocumentReferenceDefinition/) reference for the full type definition.

> \[!NOTE]
> Global document references are limited to Media Library
> Global document references are a new schema type. At this time, only [Media Library's](https://www.sanity.io/docs/media-library/introduction)  aspects feature supports use of global document references.

Like standard [references](https://www.sanity.io/docs/studio/reference-type), global document references can be either *strong* (default) or *weak*. A strong reference will ensure that the document it points to actually exists and will not allow the deletion of a document that any other document refers to. A weak reference allows pointing to documents that may not exist (yet) or have been deleted.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Value must be set to globalDocumentReference. |
| name \* | Required. The field name. This will be the key in the data record. |
| resourceType \* | The resource type containing the connected documents. At the moment, Media Library can reference the dataset resource type. |
| resourceId \* | The ID of the target resource. A resourceId is made up of the projectId and the dataset name, connected by a .. For example:

projectId.datasetName.

w3dbef.production

wm2efj.staging |
| to \* | Must contain an array naming all the types which may be referenced. For example: \[{type: 'person'}]. See more examples below. |
| weak | If set to true the reference will be made weak. This allows references to point at documents that may or may not exist, such as a document that has not yet been published or a document that has been deleted (or indeed an entirely imagined document). |
| title | Human-readable label for the field. |
| options | Further configure the schema type. See details in the "options" section below. |

### Options

#### Properties

| Property | Description |
| --- | --- |
| filter | A GROQ filter string (the contents between the square brackets), such as language == "en-US". |
| filterParams | Object of parameters for the GROQ-filter specified in filter. |

## Example

This example defines a GDR as a media library aspect. The document example shows a simplified `sanity.asset` document from Media Library containing this GDR aspect.

**aspect.ts**

```
import { defineAssetAspect } from 'sanity'

export default defineAssetAspect({
  name: 'photographer',
  title: 'Photographer',
  type: 'globalDocumentReference',
  description: 'Select the photographer.',
  resourceType: 'dataset',
  resourceId: '3do82whm.example',
  weak: true,
  to: [
    {
      type: 'photographer',
      preview: {
        select: {
          title: 'name'
        }
      }
    }
  ]
})
```

**Asset document example**

```
{
  _createdAt: '2025-10-27T21:21:41Z',
  _id: '34fMJaofTI5ptNBZFOYoBNfy6NM',
  _rev: 'eefe4de2-7ec8-4307-aecc-1b0e890fa4e6',
  _system: { createdBy: 'gvRshKueQ' },
  _type: 'sanity.asset',
  _updatedAt: '2025-11-05T19:19:24Z',
  aspects: {
    photographer: {
      _ref: 'dataset:3do82whm.example:200e44f2-14a9-4c7a-a621-a4ca4d9b559c',
      _type: 'globalDocumentReference',
      _weak: true
    }
  },
  assetType: 'sanity.imageAsset',
  cdnAccessPolicy: 'public',
  currentVersion: {...},
  title: 'example-image.png',
  versions: [...]
}
```

> \[!NOTE]
> When referenced, note that GDRs use a more complex `_ref` than traditional reference types. As shown in the example output above, they align to this structure: `resourceType.projectId.datasetName:documentId`

For more details on creating aspects that use GDRs and querying ML assets, see the [Media Library documentation](https://www.sanity.io/docs/media-library).
