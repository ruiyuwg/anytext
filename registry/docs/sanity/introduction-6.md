# Introduction

Assets are files, such as images, PDFs, and other media, that exist alongside your structured content in Sanity. [Studio](https://www.sanity.io/docs/studio) and [Media Library](https://www.sanity.io/docs/media-library) provide intuitive interfaces for uploading assets, while the image pipeline offers powerful tools for manipulation.

With Sanity's asset management, you can:

- **Upload, store, and manage** various file types, including images, documents, audio files, and more.
- **Transform images** on the fly with parameters for resizing, cropping, and format conversion.
- **Extract metadata** from images, including color palettes, camera information, and location data.
- **Deliver content globally** through Sanity's high-performance CDN.

For details on how to display images, see [Presenting images](https://www.sanity.io/docs/apis-and-sdks/presenting-images).

## Core concepts

Sanity's asset system is built around several key concepts that work together to provide a complete solution for managing digital assets.

### Asset types

Sanity currently supports two primary asset types:

- **Image assets**: For many kinds of images including JPG, PNG, WebP, SVG, TIFF, GIF, HEIF, AVIF (8-bit), [and more](https://www.sanity.io/docs/content-lake/technical-limits).
- **File assets**: For all other file types such as PDFs, audio files, videos, documents, and archives.

#### Video assets

Content Lake treats video assets as files. If you'd like additional options, like streaming, for your video assets you have a few choices:

- Third party plugins: Sanity supports third-party options for managing video, including an [official Mux integration](https://www.mux.com/docs/integrations/sanity). You can find additional integrations in the [Sanity Exchange](https://www.sanity.io/exchange).
- Media Library (Enterprise only): Media Library customers can manage their [video assets in Media Library](https://www.sanity.io/docs/media-library/working-with-video).

### Image pipeline and asset CDN

The image pipeline allows you to transform images on-the-fly by appending query parameters to image URLs. This enables resizing, cropping, format conversion, and other manipulations without creating multiple versions of the same asset.

All assets in Sanity are served through a global content delivery network (CDN). This ensures fast loading times for users worldwide. Assets are cached indefinitely based on content hashes, meaning any content changes generate new URLs automatically. Combined with the image pipeline, it can cache specific transformations of your images.

[Image transformations](https://www.sanity.io/docs/apis-and-sdks/image-urls)

[Asset CDN](https://www.sanity.io/docs/apis-and-sdks/asset-cdn)

### Asset metadata

Images in Sanity can include rich metadata that's generated from the file during upload:

- **Always included**: Dimensions, transparency information (hasAlpha, isOpaque).
- **Included by default**: Placeholders (lqip, blurHash) and color palette information.
- **Optional**: Camera data (exif) and location information.

This metadata can be used to enhance your application with features like color-based search, loading placeholders, or location-based filtering. Your schema defines which metadata is included in the asset document.

[Image Metadata](https://www.sanity.io/docs/apis-and-sdks/image-metadata)

[Image](https://www.sanity.io/docs/studio/image-type)

### Managing assets

Depending on your team's needs, you can manage assets in multiple ways.

For single project, smaller teams that just only need the occasional image or file linked in a document, you can upload straight from Studio. The [Media Plugin](https://www.sanity.io/plugins/sanity-plugin-media) is also available for further control.

For organizations requiring centralized asset management across multiple projects, [Media Library](https://www.sanity.io/docs/media-library) enables teams to create custom groupings, filter and sort, and maintain a single source of truth for all assets.

For programmatic control, you can query asset documents directly using GROQ. All assets are represented as documents in your dataset (or Media Library's dataset) with types like `sanity.imageAsset` or `sanity.fileAsset.` You can search, filter, and manipulate them through the Query API just as you would with other document types. Learn more in the [Upload, query, and delete assets](https://www.sanity.io/docs/content-lake/manage-assets) guide.
