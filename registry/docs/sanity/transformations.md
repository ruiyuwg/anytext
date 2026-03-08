# Transformations

## The anatomy of the image URL

This article provides a detailed rundown of all the options for transforming images with Sanity. A general introduction to our image pipeline and tools can be found [here](https://www.sanity.io/docs/apis-and-sdks/presenting-images).

Let's start by dissecting this Sanity image URL:

```
https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg
```

- `https://cdn.sanity.io/images/` is the common base for all Sanity image URLs.
- `zp7mbokg` is the project ID
- `production` is the dataset name
- `G3i4emG6B8JnTmGoN0UjgAp8` is the asset ID and the asset metadata document `_id`
- `300x450` is the width and height of the original image
- `jpg` is the file format of the *original* asset file

The image URLs can always be found in the asset metadata document referred to in an asset reference. Still, you don't have to fetch this document as the asset document ID contains all the information and represents a stable, documented interface you can trust.

The asset ID corresponding to the URLs above looks like this: `"image-G3i4emG6B8JnTmGoN0UjgAp8-300x450-jpg"`.  It provides the name, dimensions, and format. Given the project ID and dataset name, you have every piece you need to assemble the URLs without fetching the asset document:

```text
https://cdn.sanity.io/images/<project id>/<dataset name>/<asset name>-<original width>x<original height>.<original file format>
```

> \[!TIP]
> Prettier image file names
> While the naming format described above contains lots of info about the original asset, it does leave something to be desired for readability and memorability when read with human eyes. If you'd like to specify a more legible file name you can do this by appending `/vanity_name.png` after the actual file name provided by Sanity. (Substituting both name and extension to fit your actual case, of course.)

This represents the base URL. If you fetch this, you will be served the original asset. This potentially uses a lot of bandwidth as content managers are advised to upload full-resolution assets. With the Sanity image pipeline, you can scale, crop, and process images on the fly based on URL parameters. E.g. by appending `?h=200` to the base URL, you instruct Sanity to scale the image to be 200 pixels tall:

```text
https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg?h=200
```

You can specify any number of parameters. This will extract a rectangle from the image starting at 70 pixels from the left and 20 pixels from the top at a width of 120 pixels and a height of 150 pixels, scale it to 200 pixels tall, and blur it:

```text
https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg?rect=70,20,120,150&h=200&blur=10
```

Even though the Sanity image backend is fast, you get a tremendous performance boost if your front end limits the number of sizes and crops you ask for. Sanity will cache the result in the global CDN, and if we see the same URLs again, we serve the same data directly from the edge cache closest to the user.

> \[!WARNING]
> Gotcha
> Non-integer values for parameters expecting integers may cause performance issues or timeouts. It is recommended that you always use integer values when the parameter calls for it (e.g., `w` and `h`), including when returning calculated values.
> `&h=200` - Correct
> `&h=200.0` - May be problematic

## Supported image types

While the [Image schema type](https://www.sanity.io/docs/image-type) supports a wide range of [image formats](https://www.sanity.io/docs/content-lake/assets), transformations are limited to JPEG, PNG, WebP, PJPG, TIFF, AVIF, and GIF. For all other formats, you should convert the image to one of the supported file types before performing additional transformations.

> \[!TIP]
> Protip
> The image pipeline now supports transforming animated GIFs.

## The URL parameters

> \[!WARNING]
> Gotcha
> Small images get scaled up to the width or height you specify. To avoid this use `&fit=max`.

#### Properties

| Property | Description |
| --- | --- |
| auto | Set auto=format to automatically return an image in in the most optimized format supported by the browser as determined by its Accept header. To achieve the same result in a non-browser context, use the fm parameter instead to specify the desired format, for example fm=webp. |
| bg | Fill in any transparent areas in the image with a color. The string must be resolve to a valid hexadecimal color (RGB, ARGB, RRGGBB, or AARRGGBB). E.g. bg=ff00 for red background with no transparency. |
| blur | Blur 1-2000. |
| crop | Use with fit=crop to specify how cropping is performed:

top, bottom, left and right: The crop starts from the edge specified. crop=top,left will crop the image starting in the top left corner.

center: Will crop around the center of the image

focalpoint: Will crop around the focal point specified using the fp-x and fp-y parameters.

entropy: Attempts to preserve the "most important" part of the image by selecting the crop that preserves the most complex part of the image. |
| dl | Configures the headers so that opening this link causes the browser to download the image rather than showing it. The browser will suggest to use the file name you provided. |
| dlRaw | As dl but requests the original file/image asset. Requires authentication. |
| dpr | Specifies device pixel ratio scaling factor. From 1 to 3. |
| fit | Affects how the image is handled when you specify target dimensions.

clip: The image is resized to fit within the bounds you specified without cropping or distorting the image.

crop: Crops the image to fill the size you specified when you specify both w and h

fill: Like clip, but any free area not covered by your image is filled with the color specified in the bg parameter.

fillmax: Places the image within box you specify, never scaling the image up. If there is excess room in the image, it is filled with the color specified in the bg parameter.

max: Fit the image within the box you specify, but never scaling the image up.

scale: Scales the image to fit the constraining dimensions exactly. The resulting image will fill the dimensions, and will not maintain the aspect ratio of the input image.

min: Resizes and crops the image to match the aspect ratio of the requested width and height. Will not exceed the original width and height of the image. |
| flip | Flipping. Flip image horizontally, vertically or both. Possible values: h, v, hv |
| fm | Convert image to jpg, pjpg, png, or webp.

Note that avif is not a valid option for this parameter as AVIF transformations are generated asynchronously. See the AVIF format details below.

This property also accepts a value of json, which does not convert the image but returns information about the image including width, height, frame count, content length, and content type. |
| fp-x | Focal Point X. Specify a center point to focus on when cropping the image. Values from 0.0 to 1.0 in fractions of the image dimensions. (See crop) |
| fp-y | Focal Point Y. Specify a center point to focus on when cropping the image. Values from 0.0 to 1.0 in fractions of the image dimensions. (See crop) |
| frame | The frame of an animated image. The only valid value is 1, which is the first frame. |
| h | Height of the image in pixels. Scales the image to be that tall. |
| invert | Invert the image. |
| max-h | Maximum height. Specifies size limits giving the backend some freedom in picking a size according to the source image aspect ratio. This parameter only works when also specifying fit=crop. |
| max-w | Maximum width in the context of image cropping. Specifies size limits giving the backend some freedom in picking a size according to the source image aspect ratio. This parameter only works when also specifying fit=crop. |
| min-h | Minimum height. Specifies size limits giving the backend some freedom in picking a size according to the source image aspect ratio. This parameter only works when also specifying fit=crop. |
| min-w | Minimum width. Specifies size limits giving the backend some freedom in picking a size according to the source image aspect ratio. This parameter only works when also specifying fit=crop. |
| or | Orientation. Possible values: 0, 90, 180 or 270.Rotate the image in 90 degree increments. |
| pad | The number of pixels to pad the image.  Applies to both width and height. |
| q | Quality 0-100. Specify the compression quality (where applicable). Defaults are 75 for JPG and WebP. |
| rect | Crop the image according to the provided coordinate values (left, top, width, height).

left: Number of pixels from the left of the image

top: Number of pixels from the top of the image

width: Width, in pixels, of the crop from the left value

height: Height, in pixels, of the crop from the top value |
| sat | Saturation. Currently the asset pipeline only supports sat=-100, which renders the image with grayscale colors. Support for more levels of saturation is planned for later. |
| sharp | Sharpen 0-100. |
| w | Width of the image in pixels. Scales the image to be that wide. |
| cs | Output the image in a specifying color space.

Supported color spaces:

origin: render the image in the original color space

srgb: The default, output the image in web-friendly sRGB.

cmyk: Output the image in the CMYK color space

b-w: Output will be black and white. |

## Vanity filenames

In addition to the query parameters, you can also append a `/my-filename.jpg` style vanity filename to the end of the URL. This will set the filename if users save the image. For example:

```text
https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg/easier-to-read-name.jpg
```

## AVIF transformations

Images that have the query parameter `auto` set to `format` and are requested from a browser that supports the AVIF format will potentially get an AVIF returned.

There are a few exceptions/quirks:

The first few requests for an AVIF may get the "second best option" (WebP if supported, otherwise PNG/JPG depending on the source image). Subsequent requests will eventually get an AVIF back. This is done to ensure a speedy response, since encoding AVIFs is a slow process.

Image requests made prior to the AVIF rollout may already be cached in our CDN and will not return an AVIF response until they expire/fall out of the cache. In other words: if you are not seeing AVIF images being returned, don't worry — they should eventually return AVIF.

You can use `curl` to verify the behavior:

```sh
# Replace the URL with an actual URL from your project.
# Remember to include `?auto=format`!
curl -sS -I \
  -H 'accept: image/avif,image/webp,image/*' \
  'https://cdn.sanity.io/images/:projectId/:dataset/:filename?auto=format' \
  | grep 'content-type:'
```

On the first request, you will likely see `image/webp` returned. After waiting 30 seconds, run the same command again, and you should see `image/avif`. If you don't, wait a little longer and retry. If you still do not see AVIF, ensure that the accept header includes `image/avif` (before other formats) and that the query parameters includes `auto=format`.

> \[!WARNING]
> Gotcha
> Because AVIF transformations are generated asynchronously, you cannot explicitly request AVIF transformations using the `fm` query parameter. Instead, use the `accept` header as described above.

## Read more

[Client library for generating urls](https://github.com/sanity-io/image-url)
