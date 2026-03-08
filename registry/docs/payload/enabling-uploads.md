## Enabling Uploads

Every Payload Collection can opt-in to supporting Uploads by specifying the `upload` property on the Collection's config to either `true` or to an object containing `upload` options.

**Tip:**

A common pattern is to create a **"media"** collection and enable **upload** on that collection.

```ts
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        // By specifying `undefined` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}
```

### Collection Upload Options

*An asterisk denotes that an option is required.*

| Option                         | Description                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`adminThumbnail`**           | Set the way that the [Admin Panel](../admin/overview) will display thumbnails for this Collection. [More](#admin-thumbnails)                                                                                                                                                                                                                                     |
| **`bulkUpload`**               | Allow users to upload in bulk from the list view, default is true                                                                                                                                                                                                                                                                                                |
| **`cacheTags`**                | Set to `false` to disable the cache tag set in the UI for the admin thumbnail component. Useful for when CDNs don't allow certain cache queries.                                                                                                                                                                                                                 |
| **`constructorOptions`**       | An object passed to the Sharp image library that accepts any Constructor options and applies them to the upload file. [More](https://sharp.pixelplumbing.com/api-constructor/)                                                                                                                                                                                   |
| **`crop`**                     | Set to `false` to disable the cropping tool in the [Admin Panel](../admin/overview). Crop is enabled by default. [More](#crop-and-focal-point-selector)                                                                                                                                                                                                          |
| **`disableLocalStorage`**      | Completely disable uploading files to disk locally. [More](#disabling-local-upload-storage)                                                                                                                                                                                                                                                                      |
| **`displayPreview`**           | Enable displaying preview of the uploaded file in Upload fields related to this Collection. Can be locally overridden by `displayPreview` option in Upload field. [More](../fields/upload#config-options).                                                                                                                                                    |
| **`externalFileHeaderFilter`** | Accepts existing headers and returns the headers after filtering or modifying. If using this option, you should handle the removal of any sensitive cookies (like payload-prefixed cookies) to prevent leaking session information to external services. By default, Payload automatically filters out payload-prefixed cookies when this option is not defined. |
| **`filesRequiredOnCreate`**    | Mandate file data on creation, default is true.                                                                                                                                                                                                                                                                                                                  |
| **`filenameCompoundIndex`**    | Field slugs to use for a compound index instead of the default filename index.                                                                                                                                                                                                                                                                                   |
| **`focalPoint`**               | Set to `false` to disable the focal point selection tool in the [Admin Panel](../admin/overview). The focal point selector is only available when `imageSizes` or `resizeOptions` are defined. [More](#crop-and-focal-point-selector)                                                                                                                            |
| **`formatOptions`**            | An object with `format` and `options` that are used with the Sharp image library to format the upload file. [More](https://sharp.pixelplumbing.com/api-output#toformat)                                                                                                                                                                                          |
| **`handlers`**                 | Array of Request handlers to execute when fetching a file, if a handler returns a Response it will be sent to the client. Otherwise Payload will retrieve and send back the file.                                                                                                                                                                                |
| **`imageSizes`**               | If specified, image uploads will be automatically resized in accordance to these image sizes. [More](#image-sizes)                                                                                                                                                                                                                                               |
| **`mimeTypes`**                | Restrict mimeTypes in the file picker. Array of valid mimetypes or mimetype wildcards [More](#mimetypes)                                                                                                                                                                                                                                                         |
| **`pasteURL`**                 | Controls whether files can be uploaded from remote URLs by pasting them into the Upload field. **Enabled by default.** Accepts `false` to disable or an object with an `allowList` of valid remote URLs. [More](#uploading-files-from-remote-urls)                                                                                                               |
| **`resizeOptions`**            | An object passed to the Sharp image library to resize the uploaded file. [More](https://sharp.pixelplumbing.com/api-resize)                                                                                                                                                                                                                                      |
| **`skipSafeFetch`**            | Set to an `allowList` to skip the safe fetch check when fetching external files. Set to `true` to skip the safe fetch for all documents in this collection. Defaults to `false`.                                                                                                                                                                                 |
| **`allowRestrictedFileTypes`** | Set to `true` to allow restricted file types. If your Collection has defined [mimeTypes](#mimetypes), restricted file verification will be skipped. Defaults to `false`. [More](#restricted-file-types)                                                                                                                                                          |
| **`staticDir`**                | The folder directory to use to store media in. Can be either an absolute path or relative to the directory that contains your config. Defaults to your collection slug                                                                                                                                                                                           |
| **`trimOptions`**              | An object passed to the Sharp image library to trim the uploaded file. [More](https://sharp.pixelplumbing.com/api-resize#trim)                                                                                                                                                                                                                                   |
| **`withMetadata`**             | If specified, appends metadata to the output image file. Accepts a boolean or a function that receives `metadata` and `req`, returning a boolean.                                                                                                                                                                                                                |
| **`hideFileInputOnCreate`**    | Set to `true` to prevent the admin UI from showing file inputs during document creation, useful for programmatic file generation.                                                                                                                                                                                                                                |
| **`hideRemoveFile`**           | Set to `true` to prevent the admin UI having a way to remove an existing file while editing.                                                                                                                                                                                                                                                                     |
| **`modifyResponseHeaders`**    | Accepts an object with existing `headers` and allows you to manipulate the response headers for media files. [More](#modifying-response-headers)                                                                                                                                                                                                                 |

### Payload-wide Upload Options

Upload options are specifiable on a Collection by Collection basis, you can also control app wide options by passing your base Payload Config an `upload` property containing an object supportive of all `Busboy` configuration options.

| Option                   | Description                                                                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`abortOnLimit`**       | A boolean that, if `true`, returns HTTP 413 if a file exceeds the file size limit. If `false`, the file is truncated. Defaults to `false`.                                         |
| **`createParentPath`**   | Set to `true` to automatically create a directory path when moving files from a temporary directory or buffer. Defaults to `false`.                                                |
| **`debug`**              | A boolean that turns upload process logging on if `true`, or off if `false`. Useful for troubleshooting. Defaults to `false`.                                                      |
| **`limitHandler`**       | A function which is invoked if the file is greater than configured limits.                                                                                                         |
| **`parseNested`**        | Set to `true` to turn `req.body` and `req.files` into nested structures. By default `req.body` and `req.files` are flat objects. Defaults to `false`.                              |
| **`preserveExtension`**  | Preserves file extensions with the `safeFileNames` option. Limits file names to 3 characters if `true` or a custom length if a `number`, trimming from the start of the extension. |
| **`responseOnLimit`**    | A `string` that is sent in the Response to a client if the file size limit is exceeded when used with `abortOnLimit`.                                                              |
| **`safeFileNames`**      | Set to `true` to strip non-alphanumeric characters except dashes and underscores. Can also be set to a regex to determine what to strip. Defaults to `false`.                      |
| **`tempFileDir`**        | A `string` path to store temporary files used when the `useTempFiles` option is set to `true`. Defaults to `'tmp'` in the current working directory. Supports absolute paths.      |
| **`uploadTimeout`**      | A `number` that defines how long to wait for data before aborting, specified in milliseconds. Set to `0` to disable timeout checks. Defaults to `60000`.                           |
| **`uriDecodeFileNames`** | Set to `true` to apply uri decoding to file names. Defaults to `false`.                                                                                                            |
| **`useTempFiles`**       | Set to `true` to store files to a temporary directory instead of in RAM, reducing memory usage for large files or many files.                                                      |

[Click here](https://github.com/mscdex/busboy#api) for more documentation about what you can control with `Busboy`.

A common example of what you might want to customize within Payload-wide Upload options would be to increase the allowed `fileSize` of uploads sent to Payload:

```ts
import { buildConfig } from 'payload'

export default buildConfig({
  collections: [
    {
      slug: 'media',
      fields: [
        {
          name: 'alt',
          type: 'text',
        },
      ],
      upload: true,
    },
  ],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB, written in bytes
    },
  },
})
```

### Custom filename via hooks

You can customize the filename before it's uploaded to the server by using a `beforeOperation` hook.

```ts
beforeOperation: [
  ({ req, operation }) => {
    if ((operation === 'create' || operation === 'update') && req.file) {
      req.file.name = 'test.jpg'
    }
  },
],
```

The `req.file` object will have additional information about the file, such as mimeType and extension, and you also have full access to the file data itself.
The filename from here will also be threaded to image sizes if they're enabled.
