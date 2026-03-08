# International Image Interoperability Framework (IIIF) API reference

The Sanity asset pipeline supports the [International Image Interoperability Framework API (IIIF)](https://iiif.io/). The URL schema for IIIF supported APIs looks like this: `{scheme}://{server}{/prefix}/{identifier}`

For the Sanity asset pipeline, that translates to:

`https://cdn.sanity.io/image/{projectId}/{dataset}/iiif/{identifier}`

You can go to [the official IIIF API reference](https://iiif.io/api/image/3.0/) to find all the identifiers and different ways of querying images in your dataset.

## Examples

### General image info

If you go to <https://cdn.sanity.io/images/zp7mbokg/production/iiif/0078ltwW67gQ_k61DhalsnpQPP0RXS14878ui-500x750.jpg/info.json> it will return this JSON structure:

```json
{
  "@context": "http://iiif.io/api/image/2/context.json",
  "@id": "https://cdn.sanity.io/images/zp7mbokg/production/iiif/0078ltwW67gQ_k61DhalsnpQPP0RXS14878ui-500x750.jpg",
  "protocol": "http://iiif.io/api/image",
  "profile": ["http://iiif.io/api/image/2/level2.json"],
  "width": 500,
  "height": 750,
  "sizes": [
    { "width": 50, "height": 75 },
    { "width": 200, "height": 300 },
    { "width": 600, "height": 900 },
    { "width": 1200, "height": 1800 },
    { "width": 2000, "height": 3000 }
  ],
  "tiles": [{ "width": 512, "scaleFactors": [1, 2, 4, 8, 16] }]
}

```

### Default, full-size

Identifier: `/full/full/0/default.jpg`

<https://cdn.sanity.io/images/zp7mbokg/production/iiif/0078ltwW67gQ_k61DhalsnpQPP0RXS14878ui-500x750.jpg/full/full/0/default.jpg>

![The late, great actor Alan Rickman smiling awkwardly at the camera](https://cdn.sanity.io/images/3do82whm/next/d798944dd22b8ecf96704607b8e7d7d09ea828fd-500x750.png)

### Square crop, 75% size, gray color, png format

Identifier: `square/pct:25/0/gray.png`

<https://cdn.sanity.io/images/zp7mbokg/production/iiif/0078ltwW67gQ_k61DhalsnpQPP0RXS14878ui-500x750.jpg/square/pct:75/0/gray.png>

![Alan Rickman in a square crop and grey color](https://cdn.sanity.io/images/3do82whm/next/e995baaa8b4536f9bccec63a9f1ec842caa30be2-375x375.png)

# Asset CDN

Sanity offers a global content delivery network (CDN) for serving assets, at cdn.sanity.io. This is based on [Google's global CDN](https://cloud.google.com/cdn/). Note that this is a different system from our [API CDN](https://www.sanity.io/docs/content-lake/api-cdn).

Assets are uploaded content such as images, videos, and other files - see [separate article](https://www.sanity.io/docs/content-lake/assets) for details. These assets can only be accessed by clients via our asset CDN, optionally with processing by our [image pipeline](https://www.sanity.io/docs/apis-and-sdks/image-urls). When an asset is first requested, it is processed by our backend systems and then cached by the CDN on servers located near end-users. Subsequent requests are then served from the cache, ensuring fast response times and a better user experience.

Assets are cached indefinitely. The asset URL includes a SHA-1 hash of the asset contents, so any content changes will generate a new URL, thus avoiding the need to invalidate the cached entries. We only invalidate caches when a dataset/project is deleted.

Image responses larger than 10 MB currently cannot be cached in the CDN, and are instead returned from the backend servers. However, for all other file types (including videos) we support caching of responses up to 5 TB.

Clients can use standard cache headers such as `Cache-Control`, `If-Modified-Since`, `If-None-Match`, and `Accept-Encoding` to control cache behavior - for details, see the [Google Cloud CDN documentation](https://cloud.google.com/cdn/docs/caching).
