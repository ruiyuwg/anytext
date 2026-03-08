## `astro` types

[Section titled “astro types”](#astro-types)

```ts
import type {
  GetImageResult,
  ImageTransform,
  UnresolvedImageTransform,
  ImageMetadata,
  ImageInputFormat,
  ImageOutputFormat,
  ImageQuality,
  ImageQualityPreset,
  RemotePattern,
  ImageService,
  ExternalImageService,
  LocalImageService,
  ImageServiceConfig,
} from "astro";
```

### `GetImageResult`

[Section titled “GetImageResult”](#getimageresult)

**Type:** `object`

**Added in:** `astro@2.2.0`

Describes the result of the transformation after the call to [`getImage()`](/en/reference/modules/astro-assets/#getimage).

#### `attributes`

[Section titled “attributes”](#attributes)

**Type:** `Record<string, any>`

Defines the additional HTML attributes needed to render the image (e.g. width, height, style).

#### `options`

[Section titled “options”](#options)

**Type:** [`ImageTransform`](#imagetransform)

Describes the transformation settings after validation.

#### `rawOptions`

[Section titled “rawOptions”](#rawoptions)

**Type:** [`ImageTransform`](#imagetransform)

Describes the original transformation settings.

#### `src`

[Section titled “src”](#src)

**Type:** `string`

The path to the generated image.

#### `srcSet`

[Section titled “srcSet”](#srcset)

**Type:** `{ values: { transform: ImageTransform; descriptor?: string; attributes?: Record<string, any>; url: string; }[]; attribute: string; }`

**Added in:** `astro@3.3.0`

An object describing how to render the [`srcset` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#srcset).

##### `values`

[Section titled “values”](#values)

**Type:** `{ transform: ImageTransform; descriptor?: string; attributes?: Record<string, any>; url: string; }[]`

An array of generated values where each entry includes a URL and a size descriptor. This can be used to manually generate the value of the `srcset` attribute.

##### `attribute`

[Section titled “attribute”](#attribute)

**Type:** `string`

A value ready to use in the `srcset` attribute.

### `ImageTransform`

[Section titled “ImageTransform”](#imagetransform)

**Type:** `object`

Defines the options accepted by the image transformation service. This contains a required `src` property, optional predefined properties, and any additional properties required by the image service:

#### `src`

[Section titled “src”](#src-1)

**Type:** `ImageMetadata | string`

Defines the path to a local image in the `public` directory, the URL of a remote image, or the data from an imported image.

#### `width`

[Section titled “width”](#width)

**Type:** `number | undefined`

The width of the image.

#### `height`

[Section titled “height”](#height)

**Type:** `number | undefined`

The height of the image.

#### `widths`

[Section titled “widths”](#widths-1)

**Type:** `number[] | undefined`

**Added in:** `astro@3.3.0`

A list of widths to generate for the image.

#### `densities`

[Section titled “densities”](#densities-1)

**Type:** ``(number | `${number}x`)[] | undefined``

**Added in:** `astro@3.3.0`

A list of pixel densities to generate for the image.

#### `quality`

[Section titled “quality”](#quality-1)

**Type:** `ImageQuality | undefined`

The desired quality for the output image.

#### `format`

[Section titled “format”](#format-1)

**Type:** `ImageOutputFormat | undefined`

The desired format for the output image.

#### `fit`

[Section titled “fit”](#fit-1)

**Type:** `'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | string | undefined`

**Added in:** `astro@5.0.0`

Defines a list of allowed values for the `object-fit` CSS property, extensible with any string.

#### `position`

[Section titled “position”](#position-1)

**Type:** `string | undefined`

**Added in:** `astro@5.0.0`

Controls the value for the `object-position` CSS property.

### `UnresolvedImageTransform`

[Section titled “UnresolvedImageTransform”](#unresolvedimagetransform)

**Type:** `Omit<ImageTransform, “src”> & { src: ImageMetadata | string | Promise<{ default: ImageMetadata }>; inferSize?: boolean; }`

Represents an image with transformation options. This contains the same properties as the [`ImageTransform` type](#imagetransform) with a different `src` type and an additional `inferSize` property.

#### `src`

[Section titled “src”](#src-2)

**Type:** `ImageMetadata | string | Promise<{ default: ImageMetadata }>`

The path to an image imported or located in the `public` directory, or the URL of a remote image.

#### `inferSize`

[Section titled “inferSize”](#infersize-1)

**Type:** `boolean`

Determines whether the width and height of the image should be inferred.

See also the [`inferSize` attribute](/en/reference/modules/astro-assets/#infersize) available on `<Image />`.

### `ImageMetadata`

[Section titled “ImageMetadata”](#imagemetadata-1)

**Type:** `{ src: string; width: number; height: number; format: ImageInputFormat; orientation?: number; }`

**Added in:** `astro@2.1.3`

Describes the data collected during image import. This contains the following properties:

#### `src`

[Section titled “src”](#src-3)

**Type:** `string`

The absolute path of the image on the filesystem.

#### `width`

[Section titled “width”](#width-1)

**Type:** `number`

The width of the image.

#### `height`

[Section titled “height”](#height-1)

**Type:** `number`

The height of the image.

#### `format`

[Section titled “format”](#format-2)

**Type:** [`ImageInputFormat`](#imageinputformat)

The format of the image.

#### `orientation`

[Section titled “orientation”](#orientation)

**Type:** `number`

**Added in:** `astro@2.8.3`

The image orientation when its metadata contains this information.

### `ImageInputFormat`

[Section titled “ImageInputFormat”](#imageinputformat)

**Type:** `"jpeg" | "jpg" | "png" | "tiff" | "webp" | "gif" | "svg" | "avif"`

**Added in:** `astro@2.2.0`

Describes a union of supported formats for imported images.

### `ImageOutputFormat`

[Section titled “ImageOutputFormat”](#imageoutputformat)

**Type:** `string | "jpeg" | "jpg" | "png" | "webp" | "svg" | "avif"`

**Added in:** `astro@2.2.0`

Specifies the format for output images. This can be a predefined literal or any string.

### `ImageQuality`

[Section titled “ImageQuality”](#imagequality)

**Type:** `ImageQualityPreset | number`

**Added in:** `astro@2.2.0`

Represents the perceptual quality of the output image as a union of predefined literals, a string, or a number.

### `ImageQualityPreset`

[Section titled “ImageQualityPreset”](#imagequalitypreset)

**Type:** `string | "low" | "mid" | "high" | "max"`

**Added in:** `astro@2.2.0`

Defines the available presets to control image quality, extensible with any string.

### `RemotePattern`

[Section titled “RemotePattern”](#remotepattern)

**Type:** `{ hostname?: string; pathname?: string; protocol?: string; port?: string; }`

**Added in:** `astro@5.14.2`

Describes a remote host through four optional properties: `hostname`, `pathname`, `protocol`, and `port`.

### `ImageService`

[Section titled “ImageService”](#imageservice)

**Type:** `ExternalImageService | LocalImageService`

Defines the hooks that a local or external image service must provide.

### `ExternalImageService`

[Section titled “ExternalImageService”](#externalimageservice)

**Type:** `object`

Defines the hooks that an external image transformation service must provide. This requires a [`getUrl()` hook](/en/reference/image-service-reference/#geturl) and supports [three additional hooks](/en/reference/image-service-reference/#hooks).

Learn how to build [external services](/en/reference/image-service-reference/#external-services) in the Image Service API reference with example usage.

### `LocalImageService`

[Section titled “LocalImageService”](#localimageservice)

**Type:** `object`

Defines the hooks that a local image transformation service must provide. This requires [`getUrl()`](/en/reference/image-service-reference/#geturl), [`parseUrl()`](/en/reference/image-service-reference/#parseurl), and [`transform()`](/en/reference/image-service-reference/#transform) hooks, and supports [additional hooks](/en/reference/image-service-reference/#hooks).

Learn how to build [local services](/en/reference/image-service-reference/#local-services) in the Image Service API reference with example usage.

### `ImageServiceConfig`

[Section titled “ImageServiceConfig”](#imageserviceconfig)

**Type:** `{ entrypoint: 'astro/assets/services/sharp' | string; config?: T; }`

**Added in:** `astro@2.3.3`

Describes the configuration object for an image service. This contains the following properties:

#### `entrypoint`

[Section titled “entrypoint”](#entrypoint)

**Type:** `'astro/assets/services/sharp' | string`

A package or path to the image service module. This can be Astro’s built-in Sharp service or a third-party service.

#### `config`

[Section titled “config”](#config)

**Type:** `Record<string, any>`

A configuration object passed to the image service. The shape depends on the specific service being used.
