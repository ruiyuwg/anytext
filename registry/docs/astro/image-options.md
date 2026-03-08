## Image Options

[Section titled “Image Options”](#image-options)

### image.endpoint

[Section titled “image.endpoint”](#imageendpoint)

**Type:** `Object`\
**Default:** `{route: '/_image', entrypoint: undefined}`

**Added in:** `astro@3.1.0`

Set the endpoint to use for image optimization in dev and SSR. The `entrypoint` property can be set to `undefined` to use the default image endpoint.

```js
{
  image: {
    // Example: Use a custom image endpoint at `/custom_endpoint`
    endpoint: {
       route: '/custom_endpoint',
       entrypoint: 'src/my_endpoint.ts',
    },
  },
}
```

### image.service

[Section titled “image.service”](#imageservice)

**Type:** `Object`\
**Default:** `{entrypoint: 'astro/assets/services/sharp', config?: {}}`

**Added in:** `astro@2.1.0`

Set which image service is used for Astro’s assets support.

The value should be an object with an entrypoint for the image service to use and optionally, a config object to pass to the service.

The service entrypoint can be either one of the included services, or a third-party package.

```js
{
  image: {
    // Example: Enable the Sharp-based image service with a custom config
    service: {
       entrypoint: 'astro/assets/services/sharp',
       config: {
         limitInputPixels: false,
      },
     },
  },
}
```

#### image.service.config.limitInputPixels

[Section titled “image.service.config.limitInputPixels”](#imageserviceconfiglimitinputpixels)

**Type:** `number | boolean`\
**Default:** `true`

**Added in:** `astro@4.1.0`

Whether or not to limit the size of images that the Sharp image service will process.

Set `false` to bypass the default image size limit for the Sharp image service and process large images.

#### image.service.config.kernel

[Section titled “image.service.config.kernel”](#imageserviceconfigkernel)

**Type:** `string | undefined`\
**Default:** `undefined`

**Added in:** `astro@5.17.0`

The default [kernel used for resizing images](https://sharp.pixelplumbing.com/api-resize/#resize) in the Sharp image service.

By default this is `undefined`, which maps to Sharp’s default kernel of `lanczos3`.

### image.domains

[Section titled “image.domains”](#imagedomains)

**Type:** `Array<string>`\
**Default:** `[]`

**Added in:** `astro@2.10.10`

Defines a list of permitted image source domains for remote image optimization. No other remote images will be optimized by Astro.

This option requires an array of individual domain names as strings. Wildcards are not permitted. Instead, use [`image.remotePatterns`](#imageremotepatterns) to define a list of allowed source URL patterns.

astro.config.mjs

```js
{
  image: {
    // Example: Allow remote image optimization from a single domain
    domains: ['astro.build'],
  },
}
```

### image.remotePatterns

[Section titled “image.remotePatterns”](#imageremotepatterns)

**Type:** `Array<RemotePattern>`\
**Default:** `[]`

**Added in:** `astro@2.10.10`

Defines a list of permitted image source URL patterns for remote image optimization.

`remotePatterns` can be configured with four properties:

1. protocol
2. hostname
3. port
4. pathname

```js
{
  image: {
    // Example: allow processing all images from your aws s3 bucket
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.amazonaws.com',
    }],
  },
}
```

You can use wildcards to define the permitted `hostname` and `pathname` values as described below. Otherwise, only the exact values provided will be configured: `hostname`:

- Start with ’\*\*.’ to allow all subdomains (‘endsWith’).
- Start with ’\*.’ to allow only one level of subdomain.

`pathname`:

- End with ’/\*\*’ to allow all sub-routes (‘startsWith’).
- End with ’/\*’ to allow only one level of sub-route.

### image.responsiveStyles

[Section titled “image.responsiveStyles”](#imageresponsivestyles)

**Type:** `boolean`\
**Default:** `false`

**Added in:** `astro@5.10.0`

Whether to automatically add global styles for responsive images. You should enable this option unless you are styling the images yourself.

This option is only used when `layout` is set to `constrained`, `full-width`, or `fixed` using the configuration or the `layout` prop on the image component.

See [the images docs](/en/guides/images/#responsive-image-styles) for more information.

### image.layout

[Section titled “image.layout”](#imagelayout)

**Type:** `ImageLayout`\
**Default:** `undefined`

**Added in:** `astro@5.10.0`

The default layout type for responsive images. Can be overridden by the `layout` prop on the image component.

- `constrained` - The image will scale to fit the container, maintaining its aspect ratio, but will not exceed the specified dimensions.
- `fixed` - The image will maintain its original dimensions.
- `full-width` - The image will scale to fit the container, maintaining its aspect ratio.

See [the `layout` component property](/en/reference/modules/astro-assets/#layout) for more details.

### image.objectFit

[Section titled “image.objectFit”](#imageobjectfit)

**Type:** `ImageFit`\
**Default:** `"cover"`

**Added in:** `astro@5.10.0`

The [`object-fit` CSS property value](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) for responsive images. Can be overridden by the `fit` prop on the image component. Requires a value for `layout` to be set.

See [the `fit` component property](/en/reference/modules/astro-assets/#fit) for more details.

### image.objectPosition

[Section titled “image.objectPosition”](#imageobjectposition)

**Type:** `string`\
**Default:** `"center"`

**Added in:** `astro@5.10.0`

The default [`object-position` CSS property value](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) for responsive images. Can be overridden by the `position` prop on the image component. Requires a value for `layout` to be set.

See [the `position` component property](/en/reference/modules/astro-assets/#position) for more details.

### image.breakpoints

[Section titled “image.breakpoints”](#imagebreakpoints)

**Type:** `Array<number>`\
**Default:** `[640, 750, 828, 1080, 1280, 1668, 2048, 2560] | [640, 750, 828, 960, 1080, 1280, 1668, 1920, 2048, 2560, 3200, 3840, 4480, 5120, 6016]`

**Added in:** `astro@5.10.0`

The breakpoints used to generate responsive images. Requires a value for `layout` to be set. The full list is not normally used, but is filtered according to the source and output size. The defaults used depend on whether a local or remote image service is used. For remote services the more comprehensive list is used, because only the required sizes are generated. For local services, the list is shorter to reduce the number of images generated.
