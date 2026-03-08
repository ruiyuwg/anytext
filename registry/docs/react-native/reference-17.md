# Reference

## Props[​](#props "Direct link to Props")

### [View Props](/docs/view.md#props)[​](#view-props "Direct link to view-props")

Inherits [View Props](/docs/view.md#props).

***

### `accessible`[​](#accessible "Direct link to accessible")

When true, indicates the image is an accessibility element.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `accessibilityLabel`[​](#accessibilitylabel "Direct link to accessibilitylabel")

The text that's read by the screen reader when the user interacts with the image.

| Type   |
| ------ |
| string |

***

### `alt`[​](#alt "Direct link to alt")

A string that defines an alternative text description of the image, which will be read by the screen reader when the user interacts with it. Using this will automatically mark this element as accessible.

| Type   |
| ------ |
| string |

***

### `blurRadius`[​](#blurradius "Direct link to blurradius")

blurRadius: the blur radius of the blur filter added to the image.

| Type   |
| ------ |
| number |

tip

On IOS, you will need to increase `blurRadius` by more than `5`.

***

### `capInsets`iOS[​](#capinsets-ios "Direct link to capinsets-ios")

When the image is resized, the corners of the size specified by `capInsets` will stay a fixed size, but the center content and borders of the image will be stretched. This is useful for creating resizable rounded buttons, shadows, and other resizable assets. More info in the [official Apple documentation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImage_Class/index.html#//apple_ref/occ/instm/UIImage/resizableImageWithCapInsets).

| Type                  |
| --------------------- |
| [Rect](/docs/rect.md) |

***

### `crossOrigin`[​](#crossorigin "Direct link to crossorigin")

A string of a keyword specifying the CORS mode to use when fetching the image resource. It works similar to crossorigin attribute in HTML.

- `anonymous`: No exchange of user credentials in the image request.
- `use-credentials`: Sets `Access-Control-Allow-Credentials` header value to `true` in the image request.

| Type                                     | Default       |
| ---------------------------------------- | ------------- |
| enum(`'anonymous'`, `'use-credentials'`) | `'anonymous'` |

***

### `defaultSource`[​](#defaultsource "Direct link to defaultsource")

A static image to display while loading the image source.

| Type                                      |
| ----------------------------------------- |
| [ImageSource](/docs/image.md#imagesource) |

note

On Android, the default source prop is ignored on debug builds.

***

### `fadeDuration`Android[​](#fadeduration-android "Direct link to fadeduration-android")

Fade animation duration in milliseconds.

| Type   | Default |
| ------ | ------- |
| number | `300`   |

***

### `height`[​](#height "Direct link to height")

Height of the image component.

| Type   |
| ------ |
| number |

***

### `loadingIndicatorSource`[​](#loadingindicatorsource "Direct link to loadingindicatorsource")

Similarly to `source`, this property represents the resource used to render the loading indicator for the image. The loading indicator is displayed until image is ready to be displayed, typically after the image is downloaded.

| Type                                                           |
| -------------------------------------------------------------- |
| [ImageSource](/docs/image.md#imagesource) (`uri` only), number |

***

### `onError`[​](#onerror "Direct link to onerror")

Invoked on load error.

| Type                                |
| ----------------------------------- |
| (`{nativeEvent: {error} }`) => void |

***

### `onLayout`[​](#onlayout "Direct link to onlayout")

Invoked on mount and on layout changes.

| Type                                  |
| ------------------------------------- |
| `({nativeEvent: LayoutEvent} => void` |

***

### `onLoad`[​](#onload "Direct link to onload")

Invoked when load completes successfully.

**Example:** `onLoad={({nativeEvent: {source: {width, height}}}) => setImageRealSize({width, height})}`

| Type                                     |
| ---------------------------------------- |
| `({nativeEvent: ImageLoadEvent} => void` |

***

### `onLoadEnd`[​](#onloadend "Direct link to onloadend")

Invoked when load either succeeds or fails.

| Type       |
| ---------- |
| () => void |

***

### `onLoadStart`[​](#onloadstart "Direct link to onloadstart")

Invoked on load start.

**Example:** `onLoadStart={() => this.setState({loading: true})}`

| Type       |
| ---------- |
| () => void |

***

### `onPartialLoad`iOS[​](#onpartialload-ios "Direct link to onpartialload-ios")

Invoked when a partial load of the image is complete. The definition of what constitutes a "partial load" is loader specific though this is meant for progressive JPEG loads.

| Type       |
| ---------- |
| () => void |

***

### `onProgress`[​](#onprogress "Direct link to onprogress")

Invoked on download progress.

| Type                                        |
| ------------------------------------------- |
| (`{nativeEvent: {loaded, total} }`) => void |

***

### `progressiveRenderingEnabled`Android[​](#progressiverenderingenabled-android "Direct link to progressiverenderingenabled-android")

When `true`, enables progressive jpeg streaming - <https://frescolib.org/docs/progressive-jpegs>.

| Type | Default |
| ---- | ------- |
| bool | `false` |

***

### `referrerPolicy`[​](#referrerpolicy "Direct link to referrerpolicy")

A string indicating which referrer to use when fetching the resource. Sets the value for `Referrer-Policy` header in the image request. Works similar to `referrerpolicy` attribute in HTML.

| Type                                                                                                                                                                                     | Default                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| enum(`'no-referrer'`, `'no-referrer-when-downgrade'`, `'origin'`, `'origin-when-cross-origin'`, `'same-origin'`, `'strict-origin'`, `'strict-origin-when-cross-origin'`, `'unsafe-url'`) | `'strict-origin-when-cross-origin'` |

***

### `ref`[​](#ref "Direct link to ref")

A ref setter that will be assigned an [element node](/docs/element-nodes.md) when mounted.

***

### `resizeMethod`Android[​](#resizemethod-android "Direct link to resizemethod-android")

The mechanism that should be used to resize the image when the image's dimensions differ from the image view's dimensions. Defaults to `auto`.

- `auto`: Use heuristics to pick between `resize` and `scale`.

- `resize`: A software operation which changes the encoded image in memory before it gets decoded. This should be used instead of `scale` when the image is much larger than the view.

- `scale`: The image gets drawn downscaled or upscaled. Compared to `resize`, `scale` is faster (usually hardware accelerated) and produces higher quality images. This should be used if the image is smaller than the view. It should also be used if the image is slightly bigger than the view.

- `none`: No sampling is performed and the image is displayed in its full resolution. This should only be used in rare circumstances because it is considered unsafe as Android will throw a runtime exception when trying to render images that consume too much memory.

More details about `resize` and `scale` can be found at <https://frescolib.org/docs/resizing>.

| Type                                            | Default  |
| ----------------------------------------------- | -------- |
| enum(`'auto'`, `'resize'`, `'scale'`, `'none'`) | `'auto'` |

***

### `resizeMode`[​](#resizemode "Direct link to resizemode")

Determines how to resize the image when the frame doesn't match the raw image dimensions. Defaults to `cover`.

- `cover`: Scale the image uniformly (maintain the image's aspect ratio) so that

  - both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding)
  - at least one dimension of the scaled image will be equal to the corresponding dimension of the view (minus padding)

- `contain`: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).

- `stretch`: Scale width and height independently, This may change the aspect ratio of the src.

- `repeat`: Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio, unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view.

- `center`: Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.

| Type                                                              | Default   |
| ----------------------------------------------------------------- | --------- |
| enum(`'cover'`, `'contain'`, `'stretch'`, `'repeat'`, `'center'`) | `'cover'` |

***

### `resizeMultiplier`Android[​](#resizemultiplier-android "Direct link to resizemultiplier-android")

When the `resizeMethod` is set to `resize`, the destination dimensions are multiplied by this value. The `scale` method is used to perform the remainder of the resize. A default of `1.0` means the bitmap size is designed to fit the destination dimensions. A multiplier greater than `1.0` will set the resize options larger than that of the destination dimensions, and the resulting bitmap will be scaled down from the hardware size. Defaults to `1.0`.

This prop is most useful in cases where the destination dimensions are quite small and the source image is significantly larger. The `resize` resize method performs downsampling and significant image quality is lost between the source and destination image sizes, often resulting in a blurry image. By using a multiplier, the decoded image is slightly larger than the target size but smaller than the source image (if the source image is large enough). This allows aliasing artifacts to produce faux quality through scaling operations on the multiplied image.

If you have a source image with dimensions 200x200 and destination dimensions of 24x24, a resizeMultiplier of `2.0` will tell Fresco to downsample the image to 48x48. Fresco picks the closest power of 2 (so, 50x50) and decodes the image into a bitmap of that size. Without the multiplier, the closest power of 2 would be 25x25. The resultant image is scaled down by the system.

| Type   | Default |
| ------ | ------- |
| number | `1.0`   |

***

### `source`[​](#source "Direct link to source")

The image source (either a remote URL or a local file resource).

This prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments. The native side will then choose the best `uri` to display based on the measured size of the image container. A `cache` property can be added to control how networked request interacts with the local cache. (For more information see [Cache Control for Images](/docs/images.md#cache-control)).

The currently supported formats are `png`, `jpg`, `jpeg`, `bmp`, `gif`, `webp`, `psd` (iOS only). In addition, iOS supports several RAW image formats. Refer to Apple's documentation for the current list of supported camera models (for iOS 12, see <https://support.apple.com/en-ca/HT208967>).

Please note that the `webp` format is supported on iOS **only** when bundled with the JavaScript code.

| Type                                      |
| ----------------------------------------- |
| [ImageSource](/docs/image.md#imagesource) |

***

### `src`[​](#src "Direct link to src")

A string representing the remote URL of the image. This prop has precedence over `source` prop.

**Example:** `src={'https://reactnative.dev/img/tiny_logo.png'}`

| Type   |
| ------ |
| string |

***

### `srcSet`[​](#srcset "Direct link to srcset")

A string representing comma separated list of possible candidate image source. Each image source contains a URL of an image and a pixel density descriptor. If no descriptor is specified, it defaults to descriptor of `1x`.

If `srcSet` does not contain a `1x` descriptor, the value in `src` is used as image source with `1x` descriptor (if provided).

This prop has precedence over both the `src` and `source` props.

**Example:** `srcSet={'https://reactnative.dev/img/tiny_logo.png 1x, https://reactnative.dev/img/header_logo.svg 2x'}`

| Type   |
| ------ |
| string |

***

### `style`[​](#style "Direct link to style")

| Type                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Image Style Props](/docs/image-style-props.md#props), [Layout Props](/docs/layout-props.md#props), [Shadow Props](/docs/shadow-props.md#props), [Transforms](/docs/transforms.md#props) |

***

### `testID`[​](#testid "Direct link to testid")

A unique identifier for this element to be used in UI Automation testing scripts.

| Type   |
| ------ |
| string |

***

### `tintColor`[​](#tintcolor "Direct link to tintcolor")

Changes the color of all non-transparent pixels to the `tintColor`.

| Type                     |
| ------------------------ |
| [color](/docs/colors.md) |

***

### `width`[​](#width "Direct link to width")

Width of the image component.

| Type   |
| ------ |
| number |

## Methods[​](#methods "Direct link to Methods")

### `abortPrefetch()`Android[​](#abortprefetch-android "Direct link to abortprefetch-android")

tsx

```
static abortPrefetch(requestId: number);
```

Abort prefetch request.

**Parameters:**

| Name              | Type   | Description                             |
| ----------------- | ------ | --------------------------------------- |
| requestIdRequired | number | Request id as returned by `prefetch()`. |

***

### `getSize()`[​](#getsize "Direct link to getsize")

tsx

```
static getSize(uri: string): Promise<{width: number, height: number}>;
```

Retrieve the width and height (in pixels) of an image prior to displaying it. This method can fail if the image cannot be found, or fails to download.

In order to retrieve the image dimensions, the image may first need to be loaded or downloaded, after which it will be cached. This means that in principle you could use this method to preload images, however it is not optimized for that purpose, and may in future be implemented in a way that does not fully load/download the image data. A proper, supported way to preload images will be provided as a separate API.

**Parameters:**

| Name        | Type   | Description                |
| ----------- | ------ | -------------------------- |
| uriRequired | string | The location of the image. |

***

### `getSizeWithHeaders()`[​](#getsizewithheaders "Direct link to getsizewithheaders")

tsx

```
static getSizeWithHeaders(
  uri: string,
  headers: {[index: string]: string}
): Promise<{width: number, height: number}>;
```

Retrieve the width and height (in pixels) of an image prior to displaying it with the ability to provide the headers for the request. This method can fail if the image cannot be found, or fails to download. It also does not work for static image resources.

In order to retrieve the image dimensions, the image may first need to be loaded or downloaded, after which it will be cached. This means that in principle you could use this method to preload images, however it is not optimized for that purpose, and may in future be implemented in a way that does not fully load/download the image data. A proper, supported way to preload images will be provided as a separate API.

**Parameters:**

| Name            | Type   | Description                  |
| --------------- | ------ | ---------------------------- |
| uriRequired     | string | The location of the image.   |
| headersRequired | object | The headers for the request. |

***

### `prefetch()`[​](#prefetch "Direct link to prefetch")

tsx

```
await Image.prefetch(url);
```

Prefetches a remote image for later use by downloading it to the disk cache. Returns a promise which resolves to a boolean.

**Parameters:**

| Name        | Type            | Description                                            |
| ----------- | --------------- | ------------------------------------------------------ |
| urlRequired | string          | The remote location of the image.                      |
| callback    | functionAndroid | The function that will be called with the `requestId`. |

***

### `queryCache()`[​](#querycache "Direct link to querycache")

tsx

```
static queryCache(
  urls: string[],
): Promise<Record<string, 'memory' | 'disk' | 'disk/memory'>>;
```

Perform cache interrogation. Returns a promise which resolves to a mapping from URL to cache status, such as "disk", "memory" or "disk/memory". If a requested URL is not in the mapping, it means it's not in the cache.

**Parameters:**

| Name         | Type  | Description                                |
| ------------ | ----- | ------------------------------------------ |
| urlsRequired | array | List of image URLs to check the cache for. |

***

### `resolveAssetSource()`[​](#resolveassetsource "Direct link to resolveassetsource")

tsx

```
static resolveAssetSource(source: ImageSourcePropType): {
  height: number;
  width: number;
  scale: number;
  uri: string;
};
```

Resolves an asset reference into an object which has the properties `uri`, `scale`, `width`, and `height`.

**Parameters:**

| Name           | Type                                              | Description                                                                  |
| -------------- | ------------------------------------------------- | ---------------------------------------------------------------------------- |
| sourceRequired | [ImageSource](/docs/image.md#imagesource), number | A number (opaque type returned by `require('./foo.png')`) or an ImageSource. |

## Type Definitions[​](#type-definitions "Direct link to Type Definitions")

### ImageCacheEnumiOS[​](#imagecacheenum-ios "Direct link to imagecacheenum-ios")

Enum which can be used to set the cache handling or strategy for the potentially cached responses.

| Type                                                               | Default     |
| ------------------------------------------------------------------ | ----------- |
| enum(`'default'`, `'reload'`, `'force-cache'`, `'only-if-cached'`) | `'default'` |

- `default`: Use the native platforms default strategy.
- `reload`: The data for the URL will be loaded from the originating source. No existing cache data should be used to satisfy a URL load request.
- `force-cache`: The existing cached data will be used to satisfy the request, regardless of its age or expiration date. If there is no existing data in the cache corresponding the request, the data is loaded from the originating source.
- `only-if-cached`: The existing cache data will be used to satisfy a request, regardless of its age or expiration date. If there is no existing data in the cache corresponding to a URL load request, no attempt is made to load the data from the originating source, and the load is considered to have failed.

### ImageLoadEvent[​](#imageloadevent "Direct link to ImageLoadEvent")

Object returned in the `onLoad` callback.

| Type   |
| ------ |
| object |

**Properties:**

| Name   | Type   | Description                         |
| ------ | ------ | ----------------------------------- |
| source | object | The [source object](#source-object) |

#### Source Object[​](#source-object "Direct link to Source Object")

**Properties:**

| Name   | Type   | Description                                                  |
| ------ | ------ | ------------------------------------------------------------ |
| width  | number | The width of loaded image.                                   |
| height | number | The height of loaded image.                                  |
| uri    | string | A string representing the resource identifier for the image. |

### ImageSource[​](#imagesource "Direct link to ImageSource")

| Type                             |
| -------------------------------- |
| object, array of objects, number |

**Properties (if passing as object or array of objects):**

| Name      | Type                                                | Description                                                                                                                                                                          |
| --------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| uri       | string                                              | A string representing the resource identifier for the image, which could be an http address, a local file path, or the name of a static image resource.                              |
| width     | number                                              | Can be specified if known at build time, in which case the value will be used to set the default `<Image/>` component dimension.                                                     |
| height    | number                                              | Can be specified if known at build time, in which case the value will be used to set the default `<Image/>` component dimension.                                                     |
| scale     | number                                              | Used to indicate the scale factor of the image. Defaults to `1.0` if unspecified, meaning that one image pixel equates to one display point / DIP.                                   |
| bundleiOS | string                                              | The iOS asset bundle which the image is included in. This will default to `[NSBundle mainBundle]` if not set.                                                                        |
| method    | string                                              | The HTTP Method to use. Defaults to `'GET'` if not specified.                                                                                                                        |
| headers   | object                                              | An object representing the HTTP headers to send along with the request for a remote image.                                                                                           |
| body      | string                                              | The HTTP body to send with the request. This must be a valid UTF-8 string, and will be sent exactly as specified, with no additional encoding (e.g. URL-escaping or base64) applied. |
| cacheiOS  | [ImageCacheEnum](/docs/image.md#imagecacheenum-ios) | Determines how the requests handles potentially cached responses.                                                                                                                    |

**If passing a number:**

- `number` - opaque type returned by something like `require('./image.jpg')`.

***

# Image Style Props

## Examples[​](#examples "Direct link to Examples")

### Image Resize Mode[​](#image-resize-mode "Direct link to Image Resize Mode")

### Image Border[​](#image-border "Direct link to Image Border")

### Image Border Radius[​](#image-border-radius "Direct link to Image Border Radius")

### Image Tint[​](#image-tint "Direct link to Image Tint")
