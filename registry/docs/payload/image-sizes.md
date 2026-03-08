## Image Sizes

If you specify an array of `imageSizes` to your `upload` config, Payload will automatically crop and resize your uploads to fit each of the sizes specified by your config.

The [Admin Panel](../admin/overview) will also automatically display all available files, including width, height, and file size, for each of your uploaded files.

Behind the scenes, Payload relies on [`sharp`](https://sharp.pixelplumbing.com/api-resize#resize) to perform its image resizing. You can specify additional options for `sharp` to use while resizing your images.

Note that for image resizing to work, `sharp` must be specified in your [Payload Config](../configuration/overview). This is configured by default if you created your Payload project with `create-payload-app`. See `sharp` in [Config Options](../configuration/overview#config-options).

#### Admin List View Options

Each image size also supports `admin` options to control whether it appears in the [Admin Panel](../admin/overview) list view.

```ts
{
  name: 'thumbnail',
  width: 400,
  height: 300,
  admin: {
    disableGroupBy: true, // hide from list view groupBy options
    disableListColumn: true, // hide from list view columns
    disableListFilter: true, // hide from list view filters
  },
}
```

| Option                  | Description                                                                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **`disableGroupBy`**    | If set to `true`, this image size will not be available as a selectable groupBy option in the collection list view. Defaults to `false`. |
| **`disableListColumn`** | If set to `true`, this image size will not be available as a selectable column in the collection list view. Defaults to `false`.         |
| **`disableListFilter`** | If set to `true`, this image size will not be available as a filter option in the collection list view. Defaults to `false`.             |

This is useful for hiding large or rarely used image sizes from the list view UI while still keeping them available in the API.

#### Accessing the resized images in hooks

All auto-resized images are exposed to be reused in hooks and similar via an object that is bound to `req.payloadUploadSizes`.

The object will have keys for each size generated, and each key will be set equal to a buffer containing the file data.

#### Handling Image Enlargement

When an uploaded image is smaller than the defined image size, we have 3 options:

`withoutEnlargement: undefined | false | true`

1. `undefined` \[default]: uploading images with smaller width AND height than the image size will return null
2. `false`: always enlarge images to the image size
3. `true`: if the image is smaller than the image size, return the original image

**Note:**

By default, the image size will return NULL when the uploaded image is smaller than the defined
image size. Use the `withoutEnlargement` prop to change this.

#### Custom file name per size

Each image size supports a `generateImageName` function that can be used to generate a custom file name for the resized image.
This function receives the original file name, the resize name, the extension, height and width as arguments.

```ts
{
  name: 'thumbnail',
  width: 400,
  height: 300,
  generateImageName: ({ height, sizeName, extension, width }) => {
    return `custom-${sizeName}-${height}-${width}.${extension}`
  },
}
```

## Crop and Focal Point Selector

This feature is only available for image file types.

Setting `crop: false` and `focalPoint: false` in your Upload config will be disable the respective selector in the [Admin Panel](../admin/overview).

Image cropping occurs before any resizing, the resized images will therefore be generated from the cropped image (**not** the original image).

If no resizing options are specified (`imageSizes` or `resizeOptions`), the focal point selector will not be displayed.

## Disabling Local Upload Storage

If you are using a plugin to send your files off to a third-party file storage host or CDN, like Amazon S3 or similar, you may not want to store your files locally at all. You can prevent Payload from writing files to disk by specifying `disableLocalStorage: true` on your collection's upload config.

**Note:**

This is a fairly advanced feature. If you do disable local file storage, by default, your admin
panel's thumbnails will be broken as you will not have stored a file. It will be totally up to you
to use either a plugin or your own hooks to store your files in a permanent manner, as well as
provide your own admin thumbnail using **upload.adminThumbnail**.

## Admin Thumbnails

You can specify how Payload retrieves admin thumbnails for your upload-enabled Collections with one of the following:

1. `adminThumbnail` as a **string**, equal to one of your provided image size names.

```ts
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    // highlight-start
    adminThumbnail: 'small',
    // highlight-end
    imageSizes: [
      {
        name: 'small',
        fit: 'cover',
        height: 300,
        width: 900,
      },
      {
        name: 'large',
        fit: 'cover',
        height: 600,
        width: 1800,
      },
    ],
  },
}
```

2. `adminThumbnail` as a **function** that takes the document's data and sends back a full URL to load the thumbnail.

```ts
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    // highlight-start
    adminThumbnail: ({ doc }) =>
      `https://google.com/custom-path-to-file/${doc.filename}`,
    // highlight-end
  },
}
```
