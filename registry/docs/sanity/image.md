# Image

When you create a field with the `image` type, the user is presented with a standard file dialog that allows normal uploads, as well as drag and drop and pasting of images. Arrays of images accept batches of files to be dropped on them. See the [ImageDefinition](https://reference.sanity.io/sanity/index/ImageDefinition/) reference for the full type definition.

When uploading an image the reference to the file itself is not stored in the image field in a given document. Instead, it adds a reference to the asset metadata document. This allows you to separate between context-specific data, like hotspot, crop, and captions – and the image asset itself, which you might want to re-use in many contexts.

Image assets also contain metadata such as Low-Quality Image Previews (LQIP), palette information, and original image dimension as well as aspect ratio.

Have a look at the articles on [presenting images](https://www.sanity.io/docs/apis-and-sdks/presenting-images) and [image URLs](https://www.sanity.io/docs/apis-and-sdks/image-urls) for how to use images in practice.

## Properties

#### Properties

| Property | Description |
| --- | --- |
| type \* | Value must be set to image. |
| name \* | The field name. This will be the key in the data record. |
| fields | An array of optional fields to add to the image record. The fields added here follow the same pattern as fields defined on objects. This is useful for adding custom properties like caption, attribution, etc., to the image record itself (see example below). |
| title | A human-readable label for the field. This is what's displayed in Studio. If omitted, the name will be used. |
| hidden | If set to true, this field will be hidden in the studio. You can also return a callback function to use it as a conditional field. (Defaults to false) |
| readOnly | If set to true, this field will not be editable in the studio. You can also return a callback function to use it as a conditional field. (Defaults to false) |
| description | A short description to help editors understand how the field is to be used. |
| initialValue | The initial value used when creating new values from this type. Can be either a literal value or a resolver function that returns either a literal value or a promise resolving to the initial value. Learn more about initial value templates. |
| deprecated | Marks a field or document type as deprecated in the studio interface and displays a user-defined message. Accepts an object with a single reason key that accepts a string with the reason.

For example: deprecated: { reason: 'no longer used' }

If you deploy a GraphQL API schema, this property will translated into the @deprecated directive. |
| options | Allows configuration through further options. See the options below. |
| validation | Allows you to specify validation rules. See the validation section below for available validation functions. |
| icon | Supply a custom icon for this field. See icons documentation for more information. |
| components | Lets you provide custom components to override the studio defaults in various contexts. |
| fieldsets | Groups fields together in the studio interface. Each fieldset has a `name`, `title`, and optional `options` for collapsing behavior. |
| preview | Configures how the document or object is previewed in lists and references. Accepts `select` and `prepare` properties. |
| renderMembers | Custom render function for the document's members (fields and fieldsets). |

## Options ([ImageOptions](https://reference.sanity.io/sanity/index/ImageOptions/))

#### Properties

| Property | Description |
| --- | --- |
| metadata | This option defines what metadata the server attempts to extract from the image. The extracted data is written into the image asset. This field must be an array of strings where accepted values are image, exif, location, lqip, blurhash and palette. Read more about image metadata. |
| hotspot | Enables the user interface in Studio for selecting what areas of an image should always be cropped, what areas should never be cropped, and the center of the area to crop around when resizing. Accepts an object with a previews array, which accepts an array of objects containing title and aspectRatio keys. See the hotspot example at the end of this page.

The hotspot data is stored on the image field. See the presenting images guide for details on reading hotspot data.

Also accepts a boolean to enable/disable the hotspot option. (Defaults to false) |
| storeOriginalFilename | This will store the original filename in the asset document. Please be aware that the name of uploaded files could reveal potentially sensitive information (e.g. top\_secret\_planned\_featureX.pdf). Default is true. |
| accept | This specifies which mime types the image input can accept. Just like the accept attribute on native DOM file inputs, you can specify any valid file type specifier: View available types. |
| sources | Lock the asset sources available to this type to a specific subset. Import the plugins by their part name, and use the import variable name as array entries.

Read more about custom asset sources. |
| mediaLibrary | Contains a single filters array that allows you to define filtered results from Media Library, using a GROQ query syntax. See the example in Configure Studio for Media Library.

For use with Media Library only. |
| disableNew | Disables uploading of new assets to the field, limiting selection to existing assets. |
| collapsible | If set to `true`, the field can be collapsed. |
| collapsed | If set to `true`, the field will be collapsed by default. |
| columns | Number of columns to use for the field layout. |
| modal | Controls how the modal (dialog for content editing) is rendered. |

## Validation ([ImageRule](https://reference.sanity.io/sanity/index/ImageRule/))

[Learn more about validation](https://www.sanity.io/docs/studio/validation).

#### Properties

| Property | Description |
| --- | --- |
| required() | Ensures that this field exists. |
| assetRequired() | Like required but more specific. Requires that an actual asset is referenced to validate. Must be used together with required, for example:
validation: (Rule) => Rule.required().assetRequired() |
| custom(fn) | Creates a custom validation rule. |
| error(message) | Sets a custom error message for the preceding validation rule. |
| warning(message) | Sets a custom warning message for the preceding validation rule. Warnings do not prevent publishing. |
| info(message) | Sets a custom info message for the preceding validation rule. Info messages are purely informational and do not prevent publishing. |
| valueOfField(path) | Gets the value of a sibling field to use in validation. Useful for creating validation rules that depend on the value of another field. |

## Custom asset sources

You can [customize what asset sources are available](https://www.sanity.io/docs/studio/custom-asset-sources) via plugins. This way, you can integrate with your preferred digital asset management system (DAM). Check out the [current list of asset sources](https://www.sanity.io/plugins?category=assetSource).

## Supported image formats

Sanity allows you to upload 256-megapixel archival originals of the image types JPG, SVG, PNG, GIF, or TIFF. These formats can be transcoded into JPG, PNG, GIF, AVIF, and [WebP](https://en.wikipedia.org/wiki/WebP). Learn how in [the chapter on image URLs](https://www.sanity.io/docs/apis-and-sdks/image-urls).

## Examples of image-related data structures

The `image` field type is similar to an object `field`, in that it can have additional fields appended to it using the `fields` configuration.

When an asset is uploaded to an image field, an asset metadata document is created, and a reference to that document is added to the `asset` field within the image field.

### Example of an image type object

Input

```javascript
defineField({
  name: 'poster',
  type: 'image',
  // 👇 Enables crop and hotspot tools
  options: {
    hotspot: true
  },
  // 👇 Optionally append additional fields to the image object
  fields: [
    defineField({
      name: 'caption',
      type: 'string',
    }),
    defineField({
      name: 'attribution',
      type: 'string',
    })
  ]
})
```

Response

```json
{
  "_type": "image",
  "asset": {
    "_type": "reference",
    "_ref": "image-S2od0Kd5mpOa4Y0Wlku8RvXE"
  },
  "caption": "This is the caption",
  "attribution": "Public domain",
  "crop": {
    "top": 0.028131868131868132,
    "bottom": 0.15003663003663004,
    "left": 0.01875,
    "right": 0.009375000000000022
  },
  "hotspot": {
    "x": 0.812500000000001,
    "y": 0.27963369963369955,
    "height": 0.3248351648351647,
    "width": 0.28124999999999994
  }
}
```

### Example of an image asset metadata document

The asset metadata document created when an asset is uploaded includes details such as location, `lqip` (low quality image placeholder), palette and dimensions.

```json
{
  "_createdAt": "2018-06-27T10:46:48Z",
  "_id": "image-223c27c1f0e75fe1ef494333738e2d16a8539e6a-1365x1364-svg",
  "_rev": "MGbYJ9NCiEIKUXQcjjXmmw",
  "_type": "sanity.imageAsset",
  "assetId": "223c27c1f0e75fe1ef494333738e2d16a8539e6a",
  "extension": "svg",
  "metadata": {
    "dimensions": {
      "aspectRatio": 1.000733137829912,
      "height": 1364,
      "width": 1365
    },
    "location": {
      "_type": "geopoint",
      "lat": 59.92399340000001,
      "lng": 10.758972200000017
    },
    "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAYHAwUI/8QAKBAAAQQCAQIEBwAAAAAAAAAAAgEDBAUABhEHExQhQVESIiMxYXGB/8QAFQEBAQAAAAAAAAAAAAAAAAAABAX/xAAgEQACAgEEAwEAAAAAAAAAAAABAgADEQQSITETUXGB/9oADAMBAAIRAxEAPwCqej0eqhVtneWMLx0mOn0GeOfP9Zv2upVFsDcmv3GkCIwoqjbgAqqK5BdFh7RHrpFpRRvEQQ57o88/b8ZJ9ZtQ3KcVZNo07pCqk4I+Q8e/tgrCysSRkfeRL+lFNlSIrbG9EZDfsqizCO3YSBhGrkVDXtkqcKo+mMz7DCCuupkRpeQacUUxjFOQCJDsUo5U9iSnpVtNpRXQxoLo+Gkrw404PxCv8y6N92GTQa45LqmIceQ6PzGLPC+eMYa0DeJU0bHwNz1OYZDzkh9x54lJxwlIiX1VcYxipIPM/9k=",
    "palette": {
      "darkMuted": {
        "background": "#482d2c",
        "foreground": "#fff",
        "population": 15,
        "title": "#fff"
      },
      "darkVibrant": {
        "background": "#68201e",
        "foreground": "#fff",
        "population": 22,
        "title": "#fff"
      },
      "dominant": {
        "background": "#f34b3c",
        "foreground": "#fff",
        "population": 1292,
        "title": "#fff"
      },
      "lightMuted": {
        "background": "#c5837e",
        "foreground": "#000",
        "population": 31,
        "title": "#fff"
      },
      "lightVibrant": {
        "background": "#f9948c",
        "foreground": "#000",
        "population": 3,
        "title": "#fff"
      },
      "muted": {
        "background": "#ac736c",
        "foreground": "#fff",
        "population": 24,
        "title": "#fff"
      },
      "vibrant": {
        "background": "#f34b3c",
        "foreground": "#fff",
        "population": 1292,
        "title": "#fff"
      }
    }
  },
  "mimeType": "image/svg+xml",
  "originalFilename": "logo-s-red-1365x1365.svg",
  "path": "images/3do82whm/production/223c27c1f0e75fe1ef494333738e2d16a8539e6a-1365x1364.svg",
  "sha1hash": "223c27c1f0e75fe1ef494333738e2d16a8539e6a",
  "size": 1378,
  "url": "https://cdn.sanity.io/images/3do82whm/production/223c27c1f0e75fe1ef494333738e2d16a8539e6a-1365x1364.svg",
  "_updatedAt": "2018-07-30T08:07:49.238Z"
}
```

## Uploading images via Drag & Drop or Paste

When you drag and drop images into the Portable Text Editor or an Array field in Sanity Studio, it will automatically pick the most suitable field to add the image to based on the `accept` option configured on the image fields. If multiple fields match the dropped image type, it will use the first matching field.

```javascript
// Field with accept option set to PNG
defineField({
  name: 'pngImage', 
  type: 'image',
  options: {
    accept: 'image/png'
  }
})
```

```javascript
// Field with accept option set to JPEG
defineField({
  name: 'jpegImage',
  type: 'image', 
  options: {
    accept: 'image/jpeg'
  }
})
```

When dropping a JPEG image, it will be added to the `jpegImage` field that accepts JPEG images.

## Hotspot previews

Use the `hotspot.previews` option to define the cropped previews shown in the Studio's hotspot tool.

```
defineField({
  type: 'image',
  name: 'poster',
  options: {
    hotspot: {
      previews: [
        {title: '2:1', aspectRatio: 2 / 1},
        {title: '4:5', aspectRatio: 4 / 5},
        {title: '9:16', aspectRatio: 9 / 16},
      ]
    }
  }
})
```
