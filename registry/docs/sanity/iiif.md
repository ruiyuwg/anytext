# IIIF

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
