# Aspect patterns

In the [Create an aspect guide](https://www.sanity.io/docs/media-library/create-aspect) you learned to define and deploy an aspect. This guide explores common patterns for defining aspects.

Prerequisites:

- `sanity` CLI v3.88.0 or newer.

> \[!NOTE]
> Code-based features not supported
> Aspects cannot include executable code such as custom validation functions, custom components, callbacks (e.g., hidden, readOnly), or image/file types. Use static configuration only.

## Single string field

**copyright.ts**

```
import { defineAssetAspect } from 'sanity'

export default defineAssetAspect({
    name: 'copyright',
    title: 'Copyright',
    type: 'string',
    description: 'Enter the copyright value for this asset.',
  }),
})
```

## Single boolean field

**placeholder.ts**

```
import {defineAssetAspect} from 'sanity'

export default defineAssetAspect({
  name: 'placeholder',
  title: 'Placeholder',
  type: 'boolean',
  initialValue: false,
  description: 'Set to true for temporary placeholder assets.',
})

```

## Multiple fields

**copyright.ts**

```
import {defineAssetAspect, defineField} from 'sanity'

export default defineAssetAspect({
  name: 'copyright',
  title: 'copyright',
  type: 'object',
  fields: [
    defineField({
      name: 'copyrightHolder',
      title: 'Copyright Holder',
      type: 'string',
    }),
    defineField({
      name: 'copyrightDate',
      title: 'Date',
      type: 'date',
    }),
  ],
})

```

## Global references

You can combine aspects with global document references. Use the `globalDocumentReference` type to target documents in another project and dataset. This example targets a `photographer` type in the `example` dataset of the `3do82whm` project.

**photographer.ts**

```
import { defineAssetAspect } from 'sanity'

export default defineAssetAspect({
  name: 'photographer',
  title: 'Photographer',
  type: 'globalDocumentReference',
  description: 'Select the photographer.',
  resourceType: 'dataset',
  resourceId: '[project_id].example',
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

The `resourceId` value is the `projectId.datasetName`. As with normal references in Studio, you can use the `preview` property to select fields to display. In this case, it sets the preview `title` to the `photographer.name` field.

Learn more about [Global Document References](https://www.sanity.io/docs/studio/global-document-reference-type).

## Public aspects

If you want to query an aspect value from a dataset the easiest way is to mark the aspect definition as public.

**aspect.ts**

```
import {defineAssetAspect, defineField} from 'sanity'
export default defineAssetAspect({
  name: 'copyright',
  title: 'copyright',
  type: 'object',
  fields: [
    defineField({
      name: 'copyrightHolder',
      title: 'Copyright Holder',
      type: 'string',
    }),
    defineField({
      name: 'copyrightDate',
      title: 'Date',
      type: 'date',
    }),
  ],
  public: true
})


```

This allows a dataset to resolve the aspect value by using `media::aspect(MEDIA_REF, "NAME")`
