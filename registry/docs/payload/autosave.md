# Autosave

Source: https://payloadcms.com/docs/versions/autosave

Extending on Payload's [Draft](../versions/drafts) functionality, you can configure your collections and globals to autosave changes as drafts, and publish only you're ready. The Admin UI will automatically adapt to autosaving progress at an interval that you define, and will store all autosaved changes as a new Draft version. Never lose your work - and publish changes to the live document only when you're ready.

Autosave relies on Versions and Drafts being enabled in order to function.

![Autosave Enabled](/images/docs/autosave-v3.jpg)
*If Autosave is enabled, drafts will be created automatically as the document is modified and the Admin UI adds an indicator describing when the document was last saved to the top right of the sidebar.*

## Options

Collections and Globals both support the same options for configuring autosave. You can either set `versions.drafts.autosave` to `true`, or pass an object to configure autosave properties.

| Drafts Autosave Options | Description                                                                                                                                                           |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `interval`              | Define an `interval` in milliseconds to automatically save progress while documents are edited. Document updates are "debounced" at this interval. Defaults to `800`. |
| `showSaveDraftButton`   | Set this to `true` to show the "Save as draft" button even while autosave is enabled. Defaults to `false`.                                                            |

**Example config with versions, drafts, and autosave enabled:**

```ts
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: ({ req }) => {
      // If there is a user logged in,
      // let them retrieve all documents
      if (req.user) return true

      // If there is no user,
      // restrict the documents that are returned
      // to only those where `_status` is equal to `published`
      return {
        _status: {
          equals: 'published',
        },
      }
    },
  },
  versions: {
    drafts: {
      autosave: true,

      // Alternatively, you can specify an object to customize autosave:
      // autosave: {
      // Define how often the document should be autosaved (in milliseconds)
      //   interval: 1500,
      //
      // Show the "Save as draft" button even while autosave is enabled
      //   showSaveDraftButton: true,
      // },
    },
  },
  //.. the rest of the Pages config here
}
```

## Autosave API

When `autosave` is enabled, all `update` operations within Payload expose a new argument called `autosave`. When set to `true`, Payload will treat the incoming draft update as an `autosave`. This is primarily used by the Admin UI, but there may be some cases where you are building an app for your users and wish to implement `autosave` in your own app. To do so, use the `autosave` argument in your `update` operations.

### How autosaves are stored

If we created a new version for each autosave, you'd quickly find a ton of autosaves that clutter up your `_versions` collection within the database. That would be messy quick because `autosave` is typically set to save a document at ~800ms intervals.

Instead of creating a new version each time a document is autosaved, Payload
smartly only creates **one** autosave version, and then updates that specific
version with each autosave performed. This makes sure that your versions
remain nice and tidy.

# Uploads

Source: https://payloadcms.com/docs/upload/overview

Payload provides everything you need to enable file upload, storage, and
management directly on your server—including extremely powerful file [access
control](#access-control).

<LightDarkImage
srcLight="https://payloadcms.com/images/docs/uploads-overview.jpg"
srcDark="https://payloadcms.com/images/docs/uploads-overview.jpg"
alt="Shows an Upload enabled collection in the Payload Admin Panel"
caption="Admin Panel screenshot depicting a Media Collection with Upload enabled"
/>

**Here are some common use cases of Uploads:**

- Creating a "Media Library" that contains images for use throughout your site or app
- Building a Gated Content library where users need to sign up to gain access to downloadable assets like ebook PDFs, whitepapers, etc.
- Storing publicly available, downloadable assets like software, ZIP files, MP4s, etc.

**By simply enabling Upload functionality on a Collection, Payload will automatically transform your Collection into a robust file management / storage solution. The following modifications will be made:**

1. `filename`, `mimeType`, and `filesize` fields will be automatically added to your Collection. Optionally, if you pass `imageSizes` to your Collection's Upload config, a [`sizes`](#image-sizes) array will also be added containing auto-resized image sizes and filenames.
2. The Admin Panel will modify its built-in `List` component to show a thumbnail for each upload within the List View
3. The Admin Panel will modify its `Edit` view(s) to add a new set of corresponding Upload UI which will allow for file upload
4. The `create`, `update`, and `delete` Collection operations will be modified to support file upload, re-upload, and deletion
