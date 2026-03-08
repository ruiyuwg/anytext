## Imports from `astro/assets/utils`

[Section titled “Imports from astro/assets/utils”](#imports-from-astroassetsutils)

The following helpers are imported from the `utils` directory in the regular assets module and can be used to [build an image service](/en/reference/image-service-reference/):

```ts
import {
  isRemoteAllowed,
  matchHostname,
  matchPathname,
  matchPattern,
  matchPort,
  matchProtocol,
  isESMImportedImage,
  isRemoteImage,
  resolveSrc,
  imageMetadata,
  emitImageMetadata,
  getOrigQueryParams,
  inferRemoteSize,
  propsToFilename,
  hashTransform,
  /* The following are deprecated: */
  emitESMImage,
} from "astro/assets/utils";
```

### `isRemoteAllowed()`

[Section titled “isRemoteAllowed()”](#isremoteallowed)

**Type:** `(src: string, { domains, remotePatterns }: { domains: string[], remotePatterns: RemotePattern[] }) => boolean`

**Added in:** `astro@4.0.0`

Determines whether a given remote resource, identified by its source URL, is allowed based on specified domains and remote patterns.

```ts
import { isRemoteAllowed } from 'astro/assets/utils';


const url = new URL('https://example.com/images/test.jpg');
const domains = ['example.com', 'anotherdomain.com'];
const remotePatterns = [
  {
    protocol: 'https',
    hostname: 'images.example.com',
    pathname: '/**', // Allow any path under this hostname
  }
];


isRemoteAllowed(url.href, { domains, remotePatterns }); // Output: `true`
```

### `matchHostname()`

[Section titled “matchHostname()”](#matchhostname)

**Type:** `(url: URL, hostname?: string, allowWildcard = false) => boolean`

**Added in:** `astro@4.0.0`

Matches a given URL’s hostname against a specified hostname, with optional support for wildcard patterns.

```ts
import { matchHostname } from 'astro/assets/utils';


const url = new URL('https://sub.example.com/path/to/resource');


matchHostname(url, 'example.com'); // Output: `false`
matchHostname(url, 'example.com', true); // Output: `true`
```

### `matchPathname()`

[Section titled “matchPathname()”](#matchpathname)

**Type:** `(url: URL, pathname?: string, allowWildcard = false) => boolean`

**Added in:** `astro@4.0.0`

Matches a given URL’s pathname against a specified pattern, with optional support for wildcards.

```ts
import { matchPathname } from 'astro/assets/utils';


const testURL = new URL('https://example.com/images/photo.jpg');


matchPathname(testURL, '/images/photo.jpg'); // Output: `true`
matchPathname(testURL, '/images/'); // Output: `false`
matchPathname(testURL, '/images/*', true); // Output: `true`
```

### `matchPattern()`

[Section titled “matchPattern()”](#matchpattern)

**Type:** `(url: URL, remotePattern: RemotePattern) => boolean`

**Added in:** `astro@4.0.0`

Evaluates whether a given URL matches the specified remote pattern based on protocol, hostname, port, and pathname.

```ts
import { matchPattern } from 'astro/assets/utils';


const url = new URL('https://images.example.com/photos/test.jpg');
const remotePattern = {
  protocol: 'https',
  hostname: 'images.example.com',
  pathname: '/photos/**', // Allow all files under /photos/
};


matchPattern(url, remotePattern); // Output: `true`
```

### `matchPort()`

[Section titled “matchPort()”](#matchport)

**Type:** `(url: URL, port?: string) => boolean`\
**Default:** `true`

**Added in:** `astro@4.0.0`

Checks if the given URL’s port matches the specified port. If no port is provided, it returns `true`.

```ts
import { matchPort } from 'astro/assets/utils';


const urlWithPort = new URL('https://example.com:8080/resource');
const urlWithoutPort = new URL('https://example.com/resource');


matchPort(urlWithPort, '8080'); // Output: `true`
matchPort(urlWithoutPort, '8080'); // Output: `false`
```

### `matchProtocol()`

[Section titled “matchProtocol()”](#matchprotocol)

**Type:** `(url: URL, protocol?: string) => boolean`\
**Default:** `true`

**Added in:** `astro@4.0.0`

Compares the protocol of the provided URL with a specified protocol. This returns `true` if the protocol matches or if no protocol is provided.

```ts
import { matchProtocol } from 'astro/assets/utils';


const secureUrl = new URL('https://example.com/resource');
const regularUrl = new URL('http://example.com/resource');


matchProtocol(secureUrl, 'https'); // Output: `true`
matchProtocol(regularUrl, 'https'); // Output: `false`
```

### `isESMImportedImage()`

[Section titled “isESMImportedImage()”](#isesmimportedimage)

**Type:** `(src: ImageMetadata | string) => boolean`

**Added in:** `astro@4.0.0`

Determines if the given source is an ECMAScript Module (ESM) imported image.

```ts
import { isESMImportedImage } from 'astro/assets/utils';


const imageMetadata = {
  src: '/images/photo.jpg',
  width: 800,
  height: 600,
  format: 'jpg',
};
const filePath = '/images/photo.jpg';


isESMImportedImage(imageMetadata); // Output: `true`
isESMImportedImage(filePath); // Output: `false`
```

### `isRemoteImage()`

[Section titled “isRemoteImage()”](#isremoteimage)

**Type:** `(src: ImageMetadata | string) => boolean`

**Added in:** `astro@4.0.0`

Determines if the provided source is a remote image URL in the form of a string.

```ts
import { isRemoteImage } from 'astro/assets/utils';


const imageUrl = 'https://example.com/images/photo.jpg';
const localImage = {
  src: '/images/photo.jpg',
  width: 800,
  height: 600,
  format: 'jpg',
};


isRemoteImage(imageUrl); // Output: `true`
isRemoteImage(localImage); // Output: `false`
```

### `resolveSrc()`

[Section titled “resolveSrc()”](#resolvesrc)

**Type:** `(src: UnresolvedImageTransform[‘src’]) => Promise<string | ImageMetadata>`

**Added in:** `astro@4.0.0`

Returns the image source. This function ensures that if `src` is a Promise (e.g., a dynamic `import()`), it is awaited and the correct `src` is extracted. If `src` is already a resolved value, it is returned as-is.

```ts
import { resolveSrc } from 'astro/assets/utils';
import localImage from "./images/photo.jpg";


const resolvedLocal = await resolveSrc(localImage);
// Example value: `{ src: '/@fs/home/username/dev/astro-project/src/images/photo.jpg', width: 800, height: 600, format: 'jpg' }`


const resolvedRemote = await resolveSrc("https://example.com/remote-img.jpg");
// Value: `"https://example.com/remote-img.jpg"`


const resolvedDynamic = await resolveSrc(import("./images/dynamic-image.jpg"))
// Example value: `{ src: '/@fs/home/username/dev/astro-project/src/images/dynamic-image.jpg', width: 800, height: 600, format: 'jpg' }`
```

### `imageMetadata()`

[Section titled “imageMetadata()”](#imagemetadata)

**Type:** `(data: Uint8Array, src?: string) => Promise<Omit<ImageMetadata, ‘src’ | ‘fsPath’>>`

**Added in:** `astro@4.0.0`

Extracts image metadata such as dimensions, format, and orientation from the provided image data.

```ts
import { imageMetadata } from 'astro/assets/utils';


const binaryImage = new Uint8Array([/* ...binary image data... */]);
const sourcePath = '/images/photo.jpg';


const metadata = await imageMetadata(binaryImage, sourcePath);
// Example value:
// {
//    width: 800,
//    height: 600,
//    format: 'jpg',
//    orientation: undefined
// }
```

### `emitImageMetadata()`

[Section titled “emitImageMetadata()”](#emitimagemetadata)

**Type:** `(id: string | undefined, fileEmitter?: Rollup.EmitFile) => Promise<(ImageMetadata & { contents?: Buffer }) | undefined>`

**Added in:** `astro@5.7.0`

Processes an image file and emits its metadata and optionally its contents. In build mode, the function uses `fileEmitter` to generate an asset reference. In development mode, it resolves to a local file URL with query parameters for metadata.

```ts
import { emitImageMetadata } from 'astro/assets/utils';


const imageId = '/images/photo.jpg';
const metadata = await emitImageMetadata(imageId);
// Example value:
// {
//    src: '/@fs/home/username/dev/astro-project/src/images/photo.jpg?origWidth=800&origHeight=600&origFormat=jpg',
//    width: 800,
//    height: 600,
//    format: 'jpg',
//    contents: Uint8Array([...])
// }
```

### `getOrigQueryParams()`

[Section titled “getOrigQueryParams()”](#getorigqueryparams)

**Type:** `(params: URLSearchParams) => Pick<ImageMetadata, ‘width’ | ‘height’ | ‘format’> | undefined`

**Added in:** `astro@4.0.0`

Retrieves the `width`, `height`, and `format` of an image from a [`URLSearchParams` object](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams). If any of these parameters are missing or invalid, the function returns `undefined`.

```ts
import { getOrigQueryParams } from 'astro/assets/utils';


const url = new URL('https://example.com/image.jpg?width=800&height=600&format=jpg');
const origParams = getOrigQueryParams(url.searchParams);
// Example value:
// {
//    width: 800,
//    height: 600,
//    format: 'jpg'
// }
```

### `inferRemoteSize()`

[Section titled “inferRemoteSize()”](#inferremotesize-1)

**Type:** `(url: string) => Promise<Omit<ImageMetadata, ‘src’ | ‘fsPath’>>`

**Added in:** `astro@4.0.0`

Infers the dimensions of a remote image by streaming its data and analyzing it progressively until sufficient metadata is available.

```ts
import { inferRemoteSize } from 'astro/assets/utils';


const remoteImageUrl = 'https://example.com/image.jpg';
const imageSize = await inferRemoteSize(remoteImageUrl);
// Example value:
// {
//    width: 1920,
//    height: 1080,
//    format: 'jpg'
// }
```

### `propsToFilename()`

[Section titled “propsToFilename()”](#propstofilename)

**Type:** `(filePath: string, transform: ImageTransform, hash: string) => string`

**Added in:** `astro@4.0.0`

Generates a formatted filename for an image based on its source path, transformation properties, and a unique hash.

The formatted filename follows this structure:

`<prefixDirname>/<baseFilename>_<hash><outputExtension>`

- `prefixDirname`: If the image is an ESM imported image, this is the directory name of the original file path; otherwise, it will be an empty string.
- `baseFilename`: The base name of the file or a hashed short name if the file is a `data:` URI.
- `hash`: A unique hash string generated to distinguish the transformed file.
- `outputExtension`: The desired output file extension derived from the `transform.format` or the original file extension.

```ts
import { propsToFilename } from 'astro/assets/utils';


const filePath = '/images/photo.jpg';
const transform = { format: 'png', src: filePath };
const hash = 'abcd1234';


const filename = propsToFilename(filePath, transform, hash);
// Example value: '/images/photo_abcd1234.png'
```

### `hashTransform()`

[Section titled “hashTransform()”](#hashtransform)

**Type:** `(transform: ImageTransform, imageService: string, propertiesToHash: string[]) => string`

**Added in:** `astro@4.0.0`

Transforms the provided `transform` object into a hash string based on selected properties and the specified `imageService`.

```ts
import { hashTransform } from 'astro/assets/utils';


const transform = {
  src: '/images/photo.jpg',
  width: 800,
  height: 600,
  format: 'jpg',
};
const imageService = 'astro/assets/services/sharp';
const propertiesToHash = ['width', 'height', 'format'];


const hash = hashTransform(transform, imageService, propertiesToHash);
// Example value: 'd41d8cd98f00b204e9800998ecf8427e'
```

### `emitESMImage()`

[Section titled “emitESMImage()”](#emitesmimage)

Deprecated

Use the [`emitImageMetadata`](#emitimagemetadata) function instead.

**Type:** `(id: string | undefined, _watchMode: boolean, experimentalSvgEnabled: boolean, fileEmitter?: Rollup.EmitFile) => Promise<(ImageMetadata & { contents?: Buffer }) | undefined>`

**Added in:** `astro@4.0.0`

Processes an image file and emits its metadata and optionally its contents. In build mode, the function uses `fileEmitter` to generate an asset reference. In development mode, it resolves to a local file URL with query parameters for metadata.

```ts
import { emitESMImage } from 'astro/assets/utils';


const imageId = '/images/photo.jpg';
const unusedWatchMode = false; // Deprecated, unused
const unusedExperimentalSvgEnabled = false; // Set to `true` only if you are using SVG and want the file data to be embedded
const image = await emitESMImage(imageId, unusedWatchMode, unusedExperimentalSvgEnabled);
// Example value:
// {
//    src: '/@fs/home/username/dev/astro-project/src/images/photo.jpg?origWidth=800&origHeight=600&origFormat=jpg',
//    width: 800,
//    height: 600,
//    format: 'jpg',
//    contents: Uint8Array([...])
// }
```
