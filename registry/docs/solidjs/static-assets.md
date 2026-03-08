Building your application

# Static assets

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/static-assets.mdx)

Within SolidStart there are two ways to import static assets into your project: using the public directory and using imports.

***

## [Public directory](/solid-start/building-your-application/static-assets#public-directory)

Rich web applications use assets to create visuals. In SolidStart, the `/public` directory can be used to store static assets. These assets are served at the exact path they are in, relative to the public directory:

```
|-- public|   favicon.ico                   ->  /favicon.ico|   |-- images|   |   |-- logo.png              ->  /images/logo.png|   |   |-- background.png        ->  /images/background.png|   |-- models|   |   |-- player.gltf           ->  /models/player.gltf|   |-- documents|   |   |-- report.pdf            ->  /documents/report.pdf
```

If you would like to reference an asset in the public directory, you can use the absolute path to the asset:

```
export default function About() {  return (    <>      <h1>About</h1>      <img src="/images/logo.png" alt="Solid logo" />    </>  );}
```

This is ideal when you want to have human-readable, stable references to static assets. This can be useful for assets such as:

- documents
- service workers
- images, audio, and video
- manifest files
- metadata files (e.g., `robots.txt`, sitemaps)
- favicon

***

## [Importing assets](/solid-start/building-your-application/static-assets#importing-assets)

Vite provides a way to import assets directly into your Solid components:

```
import logo from "./solid.png";
export default function About() {  return (    <>      <h1>About</h1>      <img src={logo} alt="Solid logo" />      // Renders      <img src="/assets/solid.2d8efhg.png" alt="Solid logo" />    </>  );}
```

When you use imports, Vite will create a hashed filename. For example, `solid.png` will become `solid.2d8efhg.png`.

***

## [Public directory versus imports](/solid-start/building-your-application/static-assets#public-directory-versus-imports)

The public directory and imports are both valid ways to include static assets in your project. The driver to use one over the other is based on your use case.

For dynamic updates to your assets, using the public directory is the best choice. It allows you to maintain full control over the asset URL paths, ensuring that the links remain consistent even when the assets are updated.

When using imports, the filename is hashed and therefore will not be predictable over time. This can be beneficial for cache busting but detrimental if you want to send someone a link to the asset.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/building-your-application/static-assets.mdx\&page=https://docs.solidjs.com/solid-start/building-your-application/static-assets)

On this page

1. [Overview](#_top)
2. [Public directory](#public-directory)
3. [Importing assets](#importing-assets)
4. [Public directory versus imports](#public-directory-versus-imports)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/static-assets.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/building-your-application/static-assets.mdx\&page=https://docs.solidjs.com/solid-start/building-your-application/static-assets)
