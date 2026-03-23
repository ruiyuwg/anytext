# Rendering images in Next.js

The `next-sanity` library exports an `Image` component and `imageLoader` function that integrate [Sanity's image CDN](https://www.sanity.io/docs/apis-and-sdks/presenting-images) with the Next.js `next/image` component. Pass a Sanity CDN URL as the `src` prop and the component handles format negotiation, responsive sizing, and aspect ratio preservation automatically.

> \[!NOTE]
> This API is currently in alpha and may change in future releases.

## Installation

If you don’t already have them, install `next-sanity` and `@sanity/image-url`.

```sh
npx install next-sanity @sanity/image-url
```

## Basic usage

The `Image` component accepts a Sanity CDN URL string as its `src` prop. Use `@sanity/image-url` to build the URL, [as shown below](https://www.sanity.io/docs/nextjs/next-sanity-image-component), from your image data, then pass it to `Image`:

```typescript
import { Image } from 'next-sanity/image'
import { urlFor } from '@/sanity/lib/image'

export function AuthorPhoto({ image }) {
  return (
    <Image
      src={urlFor(image).url()}
      alt="Author photo"
      width={400}
      height={300}
    />
  )
}
```

The component wraps `next/image` with a Sanity-aware loader, so you get all the performance benefits of `next/image` (lazy loading, `srcSet` generation, priority hints) with URLs that point to Sanity's CDN.

## How this differs from next/image

The `Image` component from `next-sanity/image` wraps `next/image`, so you get the same developer-facing features: lazy loading, `srcSet` generation, priority hints, and layout stability. The difference is in where and how image optimization happens.

With the `next-sanity/image` component, the built-in loader bypasses the Next.js optimization proxy entirely. Instead, it constructs a URL that points directly to Sanity's image CDN with the right [transformation parameters](https://www.sanity.io/docs/apis-and-sdks/image-urls). Sanity's CDN handles resizing, format conversion, and caching at the edge. This means:

- No `remotePatterns` configuration is needed in `next.config.js` for Sanity images.
- Format negotiation (WebP, AVIF) happens at the CDN level through the `auto=format` parameter, based on the browser's `Accept` header.
- Your Next.js server doesn't process the images, reducing its CPU and memory load.
- The loader automatically maintains aspect ratio across `srcSet` breakpoints by recalculating the `h` parameter proportionally for each width.
- The loader sets sensible defaults for the `fit` parameter: `fit=max` when only width is specified (prevents upscaling), `fit=min` when both width and height are present.

There are a couple of tradeoffs. The `Image` component restricts `src` to a string (it must be a valid Sanity CDN URL), while `next/image` also accepts static imports. It also disallows the `loader` prop since it ships with its own. If you need a custom loader or want to use the default Next.js optimization proxy, use `next/image` directly.

## How the loader works

The built-in `imageLoader` transforms the Sanity CDN URL for each entry in the generated `srcSet`. For every width that `next/image` requests, the loader:

1. Sets `auto=format` so the CDN returns the best format the browser supports (WebP, AVIF). See [Image transformations](https://www.sanity.io/docs/apis-and-sdks/image-urls) for the full list of URL parameters.
2. Sets `fit=max` when only width is specified, or `fit=min` when both width and height are present. If the URL already contains a `fit` parameter, the loader respects it.
3. Recalculates `h` proportionally when both `w` and `h` are present, preserving the original aspect ratio at each breakpoint.
4. Passes the `quality` prop through as the `q` URL parameter.

This means your images are served in the optimal format and size without additional configuration.

## Props

`ImageProps` extends all `next/image` props except `loader` and changes `src` to accept only a string.

##### Image component props

| Prop | Type | Description |
| --- | --- | --- |
| src | string (required) | A valid Sanity image CDN URL. Build this with @sanity/image-url or construct it manually. |
| width | number | Width in pixels. Appended as w to the URL and used by the loader for aspect ratio calculations. |
| height | number | Height in pixels. Appended as h to the URL and used by the loader for aspect ratio calculations. |
| quality | number | Image quality (0-100). Passed through as q to the Sanity CDN. |
| loader | never | Not supported. The component throws a TypeError if you pass a custom loader. Use next/image directly if you need a custom loader. |

All other `next/image` props (`alt`, `priority`, `fill`, `sizes`, `placeholder`, `className`, etc.) are passed through to the underlying `next/image` component.

## Using imageLoader standalone

If you need more control over the `next/image` component but still want Sanity CDN URL handling, you can use the exported `imageLoader` directly with `next/image`:

```typescript
import NextImage from 'next/image'
import { imageLoader } from 'next-sanity/image'
import { urlFor } from '@/sanity/lib/image'

export function CustomImage({ image }) {
  return (
    <NextImage
      loader={imageLoader}
      src={urlFor(image).width(800).url()}
      alt="Product photo"
      width={800}
      height={600}
      sizes="(max-width: 768px) 100vw, 800px"
    />
  )
}
```

This gives you the same CDN-aware format negotiation and responsive sizing while letting you use other `next/image` features like custom `loader` chaining in a wrapper component.

## Building the source URL

The `Image` component expects a Sanity CDN URL string, not a Sanity image reference object. Use `@sanity/image-url` to build it. See [Presenting Images](https://www.sanity.io/docs/apis-and-sdks/presenting-images) for full setup instructions:

**sanity/lib/image.ts**

```typescript
// sanity/lib/image.ts
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
import { client } from './client'

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
```

The URL builder respects [crop and hotspot](https://www.sanity.io/docs/apis-and-sdks/presenting-images) settings when you pass the full image object (not just the asset reference). You can chain additional transformations before calling `.url()`:

```typescript
// Crop and hotspot are applied automatically
<Image
  src={urlFor(post.mainImage).width(1200).url()}
  alt={post.mainImage.alt || ''}
  width={1200}
  height={675}
  priority
/>
```

## Relationship to `@sanity/image-url`

These two tools serve different purposes and work together:

- `@sanity/image-url` builds a Sanity CDN URL string from image data. It handles crop, hotspot, and transformation parameters.
- `next-sanity/image` takes that URL string and integrates it with `next/image` so you get automatic `srcSet` generation, format negotiation, and responsive loading from the Sanity CDN.

You can use `@sanity/image-url` without `next-sanity/image` (for example, with a plain `<img>` tag or a different framework's image component). But when using Next.js, the `Image` component from `next-sanity/image` gives you the best of both: Sanity CDN transformations with `next/image` optimizations.

## Related resources

- [Presenting Images](https://www.sanity.io/docs/apis-and-sdks/presenting-images): configuring `@sanity/image-url`, crop and hotspot, responsive images, and performance tips.
- [Image transformations](https://www.sanity.io/docs/apis-and-sdks/image-urls): full reference for Sanity CDN URL parameters (`w`, `h`, `fit`, `auto`, `q`, and more).
- [Image Metadata](https://www.sanity.io/docs/apis-and-sdks/image-metadata): LQIP placeholders, dimensions, palette, and other metadata available for Sanity images.
- [Image schema type](https://www.sanity.io/docs/studio/image-type): schema configuration for image fields, including crop and hotspot options.
