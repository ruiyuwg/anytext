# Image Metadata

The `metadata` option for image fields warrants a closer look. It takes an array of strings describing which types of metadata Sanity should attempt to extract or generate from uploaded images and save alongside the asset. An example of an image field with every metadata option specified looks as follows:

```javascript

  {
      name: 'metaImage',
      title: 'Image with metadata',
      type: 'image',
      options: {
        metadata: [
          'blurhash',   // Default: included
          'lqip',       // Default: included
          'palette',    // Default: included
          'image',      // Default: not included
          'exif',       // Default: not included
          'location',   // Default: not included
        ],
      },
    },

```

There are three additional metadata options that are always included and cannot be disabled: `dimensions`, `hasAlpha`, and `isOpaque`. Specifying an invalid option in the metadata array—including any of those three terms—will throw an error.

The metadata fields fall into one of three "default behaviors": **Always included**, **included by default**, and **not included by default**. We'll look at each default setting and the metadata fields that adhere to it.

> \[!WARNING]
> Gotcha
> Metadata is added to your assets \*asynchronously \*after uploading! If your query for image metadata returns unexpectedly empty, wait a moment and try again!

> \[!WARNING]
> Gotcha
> Metadata is applied to an image asset when the image is uploaded and based on the schema settings at that time. If a `metadata` array is set to include exif or location data, **changing the schema later will not remove those details**. If removing those details is desired, you can do so with a script or using the [Media browser plugin](https://www.sanity.io/plugins/sanity-plugin-media), among other options. Likewise, adding options to the metadata array will not add those details to images previously uploaded.

## Dimensions, Alpha Channel, and Opaqueness

> \[!NOTE]
> Always included
> These values are *always available* and you do not need to ask for them. In fact, they are not [valid options](https://www.sanity.io/docs/studio/image-type) in the `options.metadata` array so including them will throw an error.

### `hasAlpha`

`hasAlpha` will return `true` if the image has an alpha channel, even if unused.

### `isOpaque`

`isOpaque` returns `true` if the image is fully opaque (i.e., has no transparency).

### `dimensions`

The `dimensions` object contains the numeric values: **aspectRatio**, **height,** and **width,** which together describe the physical features of the image. A photo taken in portrait mode might yield the following payload:

```json
{
  "dimensions" : {
    "_type": "sanity.imageDimensions",
    "aspectRatio": 0.75,
    "height": 4032,
    "width": 3024
  }
}
```

## Placeholders and Colors

> \[!NOTE]
> Included by default
> These values are *available by default.* If you don't ask for any metadata at all (that is, if you don't specify a `metadata` array), you will get these values. **Beware though:** If you *do* specify a `metadata` array and explicitly leave these out, they will not be returned.

### `lqip` and `blurHash`

Sanity will generate low-fidelity representations of your images automatically. These are useful for creating placeholders for loading images in your front end. These downsampled previews come in two different flavors: LQIP and blurhash.

**LQIP** (Low-Quality Image Preview) is a 20-pixel wide version of your image (height is set according to aspect ratio) in the form of a base64-encoded string and can be used as-is in your front end, as shown below. A typical value for lqip might look like this:

```json

"lqip": "data:image/png;base64,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"

```

And can be used like this:

```html

		<!-- 
			The LQIP value is actual image data
			encoded into a base64-string which can be 
			used directly as the src property of an img tag!
			Remember to set the height and width 
			properties, though, or it'll be very small
		-->
		<img
      height="100"
      width="100"
      src="data:image/png;base64,iVBORw0KGgo[...50 lines of this stuff omitted for brevity...]Jggg=="
    />

```

**BlurHash** is a more [advanced method](https://blurha.sh/) of creating a lightweight image preview that can give a superior result and comes in a more concise format. The trade-off is that you'll need to decode the value using a [helper library](https://github.com/woltapp/blurhash) before use. A blurHash value might look something like this:

```json

"blurHash" : "d79Z$I-o4:IoxaofR*WC00Io?GxtM{Rkt7s:~VxaNGRk"

```

Example of use in a JavaScript project:

```javascript
import { decode } from "blurhash";

const pixels = decode("LEHV6nWB2yk8pyo0adR*.7kCMdnj", 32, 32);

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const imageData = ctx.createImageData(width, height);
imageData.data.set(pixels);
ctx.putImageData(imageData, 0, 0);
document.body.append(canvas);
```

### `palette`

Sanity will generate a color palette by analyzing your image. Along with the dominant swatches, a collection of suggestions for colors that contrast nicely with them is returned, as well as a numeral indication of how prominently each color is represented in the image. A palette object might look like:

```json
{
  "_type": "sanity.imagePalette",
  "darkMuted": {
    "_type": "sanity.imagePaletteSwatch",
    "background": "#653a2d",
    "foreground": "#fff",
    "population": 3.8,
    "title": "#fff"
  },
  "darkVibrant": {
    "_type": "sanity.imagePaletteSwatch",
    "background": "#c4850b",
    "foreground": "#fff",
    "population": 0.08,
    "title": "#fff"
  },
  "dominant": {
    "_type": "sanity.imagePaletteSwatch",
    "background": "#d5c3ba",
    "foreground": "#000",
    "population": 7.17,
    "title": "#fff"
  },
  "lightMuted": {
		// [...] truncated for brevity
  },
  "lightVibrant": {
		// [...] truncated for brevity
  },
  "muted": {
		// [...] truncated for brevity
  },
  "vibrant": {
		// [...] truncated for brevity
  }
}
```

> \[!TIP]
> Protip
> If `lqip`, `blurHash`, or `palette` values are absent from your image asset, it's likely that at the time the image was uploaded, a `metadata` array was specified and the value in question was not included in the array.

## Camera and Location

> \[!NOTE]
> Excluded by default
> These values are *not included* in your image metadata unless a `metadata` array is specified and these values are specifically requested. This is because camera and location data generally contain private or identifying information.

### `image`

This field contains basic information about the image such as camera make and model, resolution, and orientation. For more detailed information, use the `exif` field. The following is an example readout:

```json
{
  "_type": "sanity.imageExifTags",
  "Make": "Apple",
  "Model": "iPhone 6",
  "Orientation": 1,
  "XResolution": 72,
  "YResolution": 72,
  "ResolutionUnit": 2,
  "Software": "Photos 1.0",
  "ModifyDate": Sat Feb 28 2015 17:13:57 GMT-0800 (PST),
  "ExifOffset": 198,
  "GPSInfo": 1008
}
```

### `exif`

Short for [Exchangeable Image File](https://en.wikipedia.org/wiki/Exif) format, this field contains information about the image file itself and the conditions under which it was produced – typically camera settings. Exactly what data is contained here depends on the origins of the file. Below is an example readout of the Exif object for a photo taken with an iPhone camera:

```json
{
  "_type": "sanity.imageExifMetadata",
  "ApertureValue": 1.6959938128383605,
  "BrightnessValue": 1.7619172145845785,
  "DateTimeDigitized": "2020-03-19T12:25:17.000Z",
  "DateTimeOriginal": "2020-03-19T12:25:17.000Z",
  "ExposureBiasValue": 0,
  "ExposureMode": 0,
  "ExposureProgram": 2,
  "ExposureTime": 0.020833333333333332,
  "FNumber": 1.8,
  "Flash": 16,
  "FocalLength": 4.25,
  "FocalLengthIn35mmFormat": 26,
  "ISO": 250,
  "LensMake": "Apple",
  "LensModel": "iPhone 11 Pro back triple camera 4.25mm f/1.8",
  "LensSpecification": [
    1.5399999618512084,
    6,
    1.8,
    2.4
  ],
  "MeteringMode": 5,
  "PixelXDimension": 4032,
  "PixelYDimension": 3024,
  "SceneCaptureType": 0,
  "SensingMethod": 2,
  "ShutterSpeedValue": 5.586024712398807,
  "SubSecTimeDigitized": "900",
  "SubSecTimeOriginal": "900",
  "SubjectArea": [
    2323,
    710,
    1410,
    1412
  ],
  "WhiteBalance": 0
}
```

### `location`

This field, as you might expect, returns geographical data, usually representing the coordinates where the photo was taken. It conforms to the specification of the [geopoint](https://www.sanity.io/docs/studio/geopoint-type) schema type, and might look like this:

```json
{
  "_type": "geopoint",
  "alt": 168.32554596241746,
  "lat": 59.948811111111105,
  "lng": 10.867780555555557
}
```

## In conclusion

Image assets in your Sanity Content Lake may include a range of helpful metadata.

- **Always included:** Essential facts about your image: height, width, aspect ratio, and information about transparency.
- **Included by default:** Useful information generated from the image on upload: minified placeholders and palette values.
- \*\*Excluded by default: \*\*Potentially private information about the place and circumstances under which the image was created: exif and location values.
