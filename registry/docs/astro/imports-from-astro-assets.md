## Imports from `astro:assets`

[Section titled “Imports from astro:assets”](#imports-from-astroassets)

The following helpers are imported from the virtual assets module:

```js
import {
  Image,
  Picture,
  getImage,
  inferRemoteSize,
  getConfiguredImageService,
  imageConfig,
} from 'astro:assets';
```

### `<Image />`

[Section titled “\”](#image-)

The `<Image />` component optimizes and transforms images.

This component can also be used to create [responsive images](#responsive-image-properties) that can adjust based on the size of their container or a device screen size and resolution.

src/components/MyComponent.astro

```astro
---
// import the Image component and the image
import { Image } from 'astro:assets';
import myImage from "../assets/my_image.png"; // Image is 1600x900
---


<!-- `alt` is mandatory on the Image component -->
<Image src={myImage} alt="A description of my image." />
```

```html
<!-- Output -->
<!-- Image is optimized, proper attributes are enforced -->
<img
  src="/_astro/my_image.hash.webp"
  width="1600"
  height="900"
  decoding="async"
  loading="lazy"
  alt="A description of my image."
/>
```

The `<Image />` component accepts the following listed properties and [responsive image properties](#responsive-image-properties) in addition to all properties accepted by the HTML `<img>` tag.

#### `src` (required)

[Section titled “src (required)”](#src-required)

**Type:** `ImageMetadata | string | Promise<{ default: ImageMetadata }>`

The format of the `src` value of your image file depends on where your image file is located:

- **Local images in `src/`** - you must **also import the image** using a relative file path or configure and use an [import alias](/en/guides/imports/#aliases). Then use the import name as the `src` value:

  src/pages/index.astro

  ```astro
  ---
  import { Image } from 'astro:assets';
  import myImportedImage from '../assets/my-local-image.png';
  ---

  ```

- **Images in the `public/` folder** - use the image’s **file path relative to the public folder**:

  src/pages/index.astro

  ```astro
  ---
  import { Image } from 'astro:assets';
  ---
  <Image
    src="/images/my-public-image.png"
    alt="descriptive text"
    width="200"
    height="150"
  />
  ```

- **Remote images** - use the image’s **full URL** as the property value:

  src/pages/index.astro

  ```astro
  ---
  import { Image } from 'astro:assets';
  ---
  <Image
    src="https://example.com/remote-image.jpg"
    alt="descriptive text"
    width="200"
    height="150"
  />
  ```

#### `alt` (required)

[Section titled “alt (required)”](#alt-required)

**Type:** `string`

Use the required `alt` attribute to provide a string of [descriptive alt text](https://www.w3.org/WAI/tutorials/images/) for images.

If an image is merely decorative (i.e. doesn’t contribute to the understanding of the page), set `alt=""` so that screen readers and other assistive technologies know to ignore the image.

#### `width` and `height` (required for images in `public/`)

[Section titled “width and height (required for images in public/)”](#width-and-height-required-for-images-in-public)

**Type:** ``number | `${number}` | undefined``

These properties define the dimensions to use for the image.

When a `layout` type is set, these are automatically generated based on the image’s dimensions and in most cases should not be set manually.

When using images in their original aspect ratio, `width` and `height` are optional. These dimensions can be automatically inferred from image files located in `src/`. For remote images, add [the `inferSize` attribute set to `true`](#infersize) on the `<Image />` or `<Picture />` component or use [`inferRemoteSize()` function](#inferremotesize).

However, both of these properties are required for images stored in your `public/` folder as Astro is unable to analyze these files.

#### `densities`

[Section titled “densities”](#densities)

**Type:** ``(number | `${number}x`)[] | undefined``

**Added in:** `astro@3.3.0`

A list of pixel densities to generate for the image.

The `densities` attribute is not compatible with [responsive images](#responsive-image-properties) with a `layout` prop or `image.layout` config set, and will be ignored if set.

If provided, this value will be used to generate a `srcset` attribute on the `<img>` tag. Do not provide a value for `widths` when using this value.

Densities that are equal to widths larger than the original image will be ignored to avoid upscaling the image.

src/components/MyComponent.astro

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png';
---
<Image
  src={myImage}
  width={myImage.width / 2}
  densities={[1.5, 2]}
  alt="A description of my image."
/>
```

```html
<!-- Output -->
<img
  src="/_astro/my_image.hash.webp"
  srcset="
    /_astro/my_image.hash.webp 1.5x
    /_astro/my_image.hash.webp 2x
  "
  alt="A description of my image."
  width="800"
  height="450"
  loading="lazy"
  decoding="async"
/>
```

#### `widths`

[Section titled “widths”](#widths)

**Type:** `number[] | undefined`

**Added in:** `astro@3.3.0`

A list of widths to generate for the image.

If provided, this value will be used to generate a `srcset` attribute on the `<img>` tag. A [`sizes` property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes) must also be provided.

The `widths` and `sizes` attributes will be automatically generated for responsive images using a `layout` property. Providing these values is generally not needed, but can be used to override any automatically generated values.

Do not provide a value for `densities` when using this value. Only one of these two values can be used to generate a `srcset`.

Widths that are larger than the original image will be ignored to avoid upscaling the image.

src/components/MyComponent.astro

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png'; // Image is 1600x900
---
<Image
  src={myImage}
  widths={[240, 540, 720, myImage.width]}
  sizes={`(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px, ${myImage.width}px`}
  alt="A description of my image."
/>
```

```html
<!-- Output -->
<img
  src="/_astro/my_image.hash.webp"
  srcset="
    /_astro/my_image.hash.webp 240w,
    /_astro/my_image.hash.webp 540w,
    /_astro/my_image.hash.webp 720w,
    /_astro/my_image.hash.webp 1600w
  "
  sizes="
    (max-width: 360px) 240px,
    (max-width: 720px) 540px,
    (max-width: 1600px) 720px,
    1600px
  "
  alt="A description of my image."
  width="1600"
  height="900"
  loading="lazy"
  decoding="async"
/>
```

#### `sizes`

[Section titled “sizes”](#sizes)

**Type:** `string | undefined`

**Added in:** `astro@3.3.0`

Specifies the layout width of the image for each of a list of media conditions. Must be provided when specifying `widths`.

The `widths` and `sizes` attributes will be automatically generated for responsive images using a `layout` property. Providing these values is generally not needed, but can be used to override any automatically generated values.

The generated `sizes` attribute for `constrained` and `full-width` images is based on the assumption that the image is displayed close to the full width of the screen when the viewport is smaller than the image’s width. If it is significantly different (e.g. if it’s in a multi-column layout on small screens), you may need to adjust the `sizes` attribute manually for best results.

#### `format`

[Section titled “format”](#format)

**Type:** `ImageOutputFormat | undefined`

You can optionally state the [image file type](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#common_image_file_types) output to be used.

By default, the `<Image />` component will produce a `.webp` file.

#### `quality`

[Section titled “quality”](#quality)

**Type:** `ImageQuality | undefined`

`quality` is an optional property that can either be:

- a preset (`low`, `mid`, `high`, `max`) that is automatically normalized between formats.
- a number from `0` to `100` (interpreted differently between formats).

#### `inferSize`

[Section titled “inferSize”](#infersize)

**Type:** `boolean`\
**Default:** `false`

**Added in:** `astro@4.4.0`

Allows you to set the original `width` and `height` of a remote image automatically.

By default, this value is set to `false` and you must manually specify both dimensions for your remote image.

Add `inferSize` to the `<Image />` component (or `inferSize: true` to `getImage()`) to infer these values from the image content when fetched. This is helpful if you don’t know the dimensions of the remote image, or if they might change:

src/components/MyComponent.astro

```astro
---
import { Image } from 'astro:assets';
---
<Image src="https://example.com/cat.png" inferSize alt="A cat sleeping in the sun." />
```

As of Astro 5.17.3, `inferSize` only fetches dimensions for [authorized remote image domains](/en/guides/images/#authorizing-remote-images). Remote images outside the allowlist are not fetched.

#### `priority`

[Section titled “priority”](#priority)

**Type:** `boolean`\
**Default:** `false`

**Added in:** `astro@5.10.0`

Allows you to automatically set the `loading`, `decoding`, and `fetchpriority` attributes to their optimal values for above-the-fold images.

src/components/MyComponent.astro

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png';
---
<Image src={myImage} priority alt="A description of my image" />
```

When `priority="true"` (or the shorthand syntax `priority`) is added to the `<Image />` or `<Picture />` component, it will add the following attributes to instruct the browser to load the image immediately:

```html
loading="eager"
decoding="sync"
fetchpriority="high"
```

These individual attributes can still be set manually if you need to customize them further.

#### `background`

[Section titled “background”](#background)

**Type:** `string | undefined`

**Added in:** `astro@5.17.0`

The background color to use when flattening an image to transform it into the requested output `format`.

By default, Sharp uses a black background when flattening an image. Specifying a different background color is especially useful when transforming images with transparent backgrounds to a format that does not support transparency (e.g. `.jpeg`):

src/components/MyComponent.astro

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png';
---
<Image
  src={myImage}
  alt="A description of my image"
  format="jpeg"
  background="#ffffff"
/>
```

Values are passed directly to the image service. Sharp accepts [any value the `color-string` package can parse](https://github.com/Qix-/color-string/blob/master/README.md#parsing).

### `<Picture />`

[Section titled “\”](#picture-)

**Added in:** `astro@3.3.0`

The `<Picture />` component generates an optimized image with multiple formats and/or sizes.

This component can also be used to create [responsive images](#responsive-image-properties) that can adjust based on the size of their container or a device screen size and resolution.

src/pages/index.astro

```astro
---
import { Picture } from 'astro:assets';
import myImage from "../assets/my_image.png"; // Image is 1600x900
---


<!-- `alt` is mandatory on the Picture component -->
<Picture src={myImage} formats={['avif', 'webp']} alt="A description of my image." />
```

```html
<!-- Output -->
<picture>
  <source srcset="/_astro/my_image.hash.avif" type="image/avif" />
  <source srcset="/_astro/my_image.hash.webp" type="image/webp" />
  <img
    src="/_astro/my_image.hash.png"
    width="1600"
    height="900"
    decoding="async"
    loading="lazy"
    alt="A description of my image."
  />
</picture>
```

`<Picture />` accepts all the properties of [the `<Image />` component](#image-), including [responsive image properties](#responsive-image-properties), plus the following:

#### `formats`

[Section titled “formats”](#formats)

**Type:** `ImageOutputFormat[]`

An array of image formats to use for the `<source>` tags. Entries will be added as `<source>` elements in the order they are listed, and this order determines which format is displayed. For the best performance, list the most modern format first (e.g. `webp` or `avif`). By default, this is set to `['webp']`.

#### `fallbackFormat`

[Section titled “fallbackFormat”](#fallbackformat)

**Type:** [`ImageOutputFormat`](#imageoutputformat)

Format to use as a fallback value for the `<img>` tag. Defaults to `.png` for static images (or `.jpg` if the image is a JPG), `.gif` for animated images, and `.svg` for SVG files.

#### `pictureAttributes`

[Section titled “pictureAttributes”](#pictureattributes)

**Type:** `HTMLAttributes<'picture'>`

An object of attributes to be added to the `<picture>` tag.

Use this property to apply attributes to the outer `<picture>` element itself. Attributes applied to the `<Picture />` component directly will apply to the inner `<img>` element, except for those used for image transformation.

src/components/MyComponent.astro

```astro
---
import { Picture } from "astro:assets";
import myImage from "../my_image.png"; // Image is 1600x900
---


<Picture
  src={myImage}
  alt="A description of my image."
  pictureAttributes={{ style: "background-color: red;" }}
/>
```

```html
<!-- Output -->
<picture style="background-color: red;">
  <source srcset="/_astro/my_image.hash.webp" type="image/webp" />
  <img
    src="/_astro/my_image.hash.png"
    alt="A description of my image."
    width="1600"
    height="900"
    loading="lazy"
    decoding="async"
  />
</picture>
```

### Responsive image properties

[Section titled “Responsive image properties”](#responsive-image-properties)

Setting the [`layout`](#layout) property on an [`<Image />`](#image-) or [`<Picture />`](#picture-) component creates a responsive image and enables additional property settings.

src/components/MyComponent.astro

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png';
---
<Image src={myImage} alt="A description of my image." layout='constrained' width={800} height={600} />
```

When a layout is set, `srcset` and `sizes` attributes are automatically generated based on the image’s dimensions and the layout type. The previous `<Image />` component will generate the following HTML output:

```html
<img
  src="/_astro/my_image.hash3.webp"
  srcset="/_astro/my_image.hash1.webp 640w,
      /_astro/my_image.hash2.webp 750w,
      /_astro/my_image.hash3.webp 800w,
      /_astro/my_image.hash4.webp 828w,
      /_astro/my_image.hash5.webp 1080w,
      /_astro/my_image.hash6.webp 1280w,
      /_astro/my_image.hash7.webp 1600w"
  alt="A description of my image"
  sizes="(min-width: 800px) 800px, 100vw"
  loading="lazy"
  decoding="async"
  fetchpriority="auto"
  width="800"
  height="600"
  style="--fit: cover; --pos: center;"
  data-astro-image="constrained"
>
```

The value for `layout` also defines the default styles applied to the `<img>` tag to determine how the image should resize according to its container:

Responsive Image Styles

```css
:where([data-astro-image]) {
  object-fit: var(--fit);
  object-position: var(--pos);
}
:where([data-astro-image='full-width']) {
  width: 100%;
}
:where([data-astro-image='constrained']) {
  max-width: 100%;
}
```

You can override the default `object-fit` and `object-position` styles by setting the [`fit`](#fit) and [`position`](#position) props on the `<Image />` or `<Picture />` component.

##### `layout`

[Section titled “layout”](#layout)

**Type:** `'constrained' | 'full-width' | 'fixed' | 'none'`\
**Default:** `image.layout | 'none'`

**Added in:** `astro@5.10.0`

Defines a [responsive image](#responsive-image-properties) and determines how the image should resize when its container changes size. Can be used to override the default configured value for [`image.layout`](/en/reference/configuration-reference/#imagelayout).

- `constrained` - The image will scale down to fit the container, maintaining its aspect ratio, but will not scale up beyond the specified `width` and `height`, or the image’s original dimensions.

  Use this if you want the image to display at the requested size where possible, but shrink to fit smaller screens. This matches the default behavior for images when using Tailwind. If you’re not sure, this is probably the layout you should choose.

- `full-width` - The image will scale to fit the width of the container, maintaining its aspect ratio.

  Use this for hero images or other images that should take up the full width of the page.

- `fixed` - The image will maintain the requested dimensions and not resize. It will generate a `srcset` to support high density displays, but not for different screen sizes.

  Use this if the image will not resize, for example icons or logos smaller than any screen width, or other images in a fixed-width container.

- `none` - The image will not be responsive. No `srcset` or `sizes` will be automatically generated, and no styles will be applied.

  This is useful if you have enabled a default layout, but want to disable it for a specific image.

For example, with `constrained` set as the default layout, you can override any individual image’s `layout` property:

src/components/MyComponent.astro

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my_image.png';
---
<Image src={myImage} alt="This will use constrained layout" width={800} height={600} />
<Image src={myImage} alt="This will use full-width layout" layout="full-width" />
<Image src={myImage} alt="This will disable responsive images" layout="none" />
```

##### `fit`

[Section titled “fit”](#fit)

**Type:** `'contain' | 'cover' | 'fill' | 'none' | 'scale-down'`\
**Default:** `image.objectFit | 'cover'`

**Added in:** `astro@5.10.0`

Enabled when the [`layout`](#layout) property is set or configured. Defines how a responsive image should be cropped if its aspect ratio is changed.

Values match those of CSS `object-fit`. Defaults to `cover`, or the value of [`image.objectFit`](/en/reference/configuration-reference/#imageobjectfit) if set. Can be used to override the default `object-fit` styles.

##### `position`

[Section titled “position”](#position)

**Type:** `string`\
**Default:** `image.objectPosition | 'center'`

**Added in:** `astro@5.10.0`

Enabled when the [`layout`](#layout) property is set or configured. Defines the position of the image crop for a responsive image if the aspect ratio is changed.

Values match those of CSS `object-position`. Defaults to `center`, or the value of [`image.objectPosition`](/en/reference/configuration-reference/#imageobjectposition) if set. Can be used to override the default `object-position` styles.

### `getImage()`

[Section titled “getImage()”](#getimage)

**Type:** `(options: UnresolvedImageTransform) => Promise<GetImageResult>`

Caution

`getImage()` relies on server-only APIs and breaks the build when used on the client.

The `getImage()` function is intended for generating images destined to be used somewhere else than directly in HTML, for example in an [API Route](/en/guides/endpoints/#server-endpoints-api-routes). It also allows you to create your own custom `<Image />` component.

This takes an options object with the [same properties as the Image component](#image-) (except `alt`) and returns a [`GetImageResult` object](#getimageresult).

The following example generates an AVIF `background-image` for a `<div />`:

src/components/Background.astro

```astro
---
import { getImage } from "astro:assets";
import myBackground from "../background.png"


const optimizedBackground = await getImage({src: myBackground, format: 'avif'})
---


<div style={`background-image: url(${optimizedBackground.src});`}><slot /></div>
```

### `inferRemoteSize()`

[Section titled “inferRemoteSize()”](#inferremotesize)

**Type:** `(url: string) => Promise<Omit<ImageMetadata, ‘src’ | ‘fsPath’>>`

**Added in:** `astro@4.12.0`

A function to set the original `width` and `height` of a remote image automatically. This can be used as an alternative to passing the [`inferSize` ](#infersize)property.

```ts
import { inferRemoteSize } from 'astro:assets';
const { width, height } = await inferRemoteSize("https://example.com/cat.png");
```

### `getConfiguredImageService()`

[Section titled “getConfiguredImageService()”](#getconfiguredimageservice)

**Type:** `() => Promise<ImageService>`

**Added in:** `astro@2.1.3`

Retrieves the resolved [image service](/en/reference/configuration-reference/#imageservice).

### `imageConfig`

[Section titled “imageConfig”](#imageconfig)

**Type:** [`AstroConfig["image"]`](/en/reference/configuration-reference/#image-options)

**Added in:** `astro@3.0.9`

The [configuration options for images](/en/reference/configuration-reference/#image-options) set by the user and merged with all defaults.

## `astro:assets` types

[Section titled “astro:assets types”](#astroassets-types)

The following types are imported from the virtual assets module:

```ts
import type {
  LocalImageProps,
  RemoteImageProps,
} from "astro/assets";
```

### `LocalImageProps`

[Section titled “LocalImageProps”](#localimageprops)

**Type:** `ImageSharedProps<T> & { src: ImageMetadata | Promise<{ default: ImageMetadata; }> }`

Describes the [properties of a local image](#image-). This ensures that [`src`](#src-required) matches the shape of an imported image.

Learn more about [imported images in `src/`](/en/guides/images/#images-in-src) with an example usage.

### `RemoteImageProps`

[Section titled “RemoteImageProps”](#remoteimageprops)

**Types:**

- `ImageSharedProps<T> & { src: string; inferSize: true; }`
- `ImageSharedProps<T> & { src: string; inferSize?: false | undefined; }`

Describes the [properties of a remote image](#image-). This ensures that when [`inferSize`](#infersize) is not provided or is set to `false`, both [`width` and `height`](#width-and-height-required-for-images-in-public) are required.

## Imports from `astro/assets`

[Section titled “Imports from astro/assets”](#imports-from-astroassets-1)

The following helpers are imported from the regular assets module:

```ts
import {
  baseService,
  getConfiguredImageService,
  getImage,
  isLocalService,
} from "astro/assets";
```

### `baseService`

[Section titled “baseService”](#baseservice)

**Type:** `Omit<LocalImageService, ‘transform’>`

The built-in local image service which can be extended to [create a custom image service](/en/reference/image-service-reference/).

The following example reuses the `baseService` to create a new image service:

src/image-service.ts

```ts
import { baseService } from "astro/assets";


const newImageService = {
 getURL: baseService.getURL,
 parseURL: baseService.parseURL,
 getHTMLAttributes: baseService.getHTMLAttributes,
 async transform(inputBuffer, transformOptions) {...}
}
```

### `getConfiguredImageService()`

[Section titled “getConfiguredImageService()”](#getconfiguredimageservice-1)

See [`getConfiguredImageService()`](#getconfiguredimageservice) from `astro:assets`.

### `getImage()`

[Section titled “getImage()”](#getimage-1)

**Type:** `(options: UnresolvedImageTransform, imageConfig: AstroConfig[‘image’]) => Promise<GetImageResult>`

A function similar to [`getImage()`](#getimage) from `astro:assets` with two required arguments: an `options` object with [the same properties as the Image component](#image-) and a second object for the [image configuration](/en/reference/configuration-reference/#image-options).

### `isLocalService()`

[Section titled “isLocalService()”](#islocalservice)

**Type:** `(service: ImageService | undefined) => boolean`

Checks the type of an image service and returns `true` when this is a [local service](#localimageservice).

## `astro/assets` types

[Section titled “astro/assets types”](#astroassets-types-1)

The following types are imported from the regular assets module:

```ts
import type {
  LocalImageProps,
  RemoteImageProps,
} from "astro/assets";
```

### `LocalImageProps`

[Section titled “LocalImageProps”](#localimageprops-1)

See [`LocalImageProps`](#localimageprops) from `astro:assets`.

### `RemoteImageProps`

[Section titled “RemoteImageProps”](#remoteimageprops-1)

See [`RemoteImageProps`](#remoteimageprops) from `astro:assets`.
