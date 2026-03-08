# Limits and usage

This article describes limits in the media library and discusses techniques for leveraging your project bandwidth when rendering media library assets.

## Media Library limits

The Media Library APIs share the same [technical limits defined here](https://www.sanity.io/docs/content-lake/technical-limits) for rate limiting, HTTP requests, and asset details.

## Library and project usage

When using the Media Library, you'll interact with a few different types of APIs. Some APIs are specific to the library, others apply globally across your organization, and others are specific to a project where you're running your studio.

Storing assets in the library will count against the asset limits defined by your plan. However, using the media library does not count against any document limits you have in your projects.

When you use an image or file asset within a studio, the asset becomes available through the standard project APIs for [presenting the media](https://www.sanity.io/docs/apis-and-sdks/presenting-images). When you present the media this way, your bandwidth usage is accounted for through your project. This means that rendering image and file assets that you've attached to a dataset/studio apply to that project's bandwidth, not the bandwidth of the media library.

> \[!TIP]
> When is library bandwidth used?
> The library has a "Copy Media URL" option to generate a URL to render the selected asset. This URL isn't linked to any particular dataset or studio. If you render an image or file through this URL, then the usage will count against your media library bandwidth. You might want to do this if you're using the asset in a social media post or an email—locations outside your studio-driven applications.

## Video usage

Video assets count against your Media Library quota, but are handled differently from images and files. Videos are served through Mux rather than the standard Sanity CDN.

Presenting video differs from presenting other media types like images and files. See [Working with video](https://www.sanity.io/docs/media-library/working-with-video) for details.

Note that original video files are not retained after upload. Videos are transcoded for streaming, and the source file cannot be downloaded later.
