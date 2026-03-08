## Build Options

[Section titled “Build Options”](#build-options)

### build.format

[Section titled “build.format”](#buildformat)

**Type:** `('file' | 'directory' | 'preserve')`\
**Default:** `'directory'`

Control the output file format of each page. This value may be set by an adapter for you.

- `'file'`: Astro will generate an HTML file named for each page route. (e.g. `src/pages/about.astro` and `src/pages/about/index.astro` both build the file `/about.html`)
- `'directory'`: Astro will generate a directory with a nested `index.html` file for each page. (e.g. `src/pages/about.astro` and `src/pages/about/index.astro` both build the file `/about/index.html`)
- `'preserve'`: Astro will generate HTML files exactly as they appear in your source folder. (e.g. `src/pages/about.astro` builds `/about.html` and `src/pages/about/index.astro` builds the file `/about/index.html`)

```js
{
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file'
  }
}
```

#### Effect on Astro.url

[Section titled “Effect on Astro.url”](#effect-on-astrourl)

Setting `build.format` controls what `Astro.url` is set to during the build. When it is:

- `directory` - The `Astro.url.pathname` will include a trailing slash to mimic folder behavior. (e.g. `/foo/`)
- `file` - The `Astro.url.pathname` will include `.html`. (e.g. `/foo.html`)

This means that when you create relative URLs using `new URL('./relative', Astro.url)`, you will get consistent behavior between dev and build.

To prevent inconsistencies with trailing slash behaviour in dev, you can restrict the [`trailingSlash` option](#trailingslash) to `'always'` or `'never'` depending on your build format:

- `directory` - Set `trailingSlash: 'always'`
- `file` - Set `trailingSlash: 'never'`

### build.client

[Section titled “build.client”](#buildclient)

**Type:** `string`\
**Default:** `'./client'`

Controls the output directory of your client-side CSS and JavaScript when building a website with server-rendered pages. `outDir` controls where the code is built to.

This value is relative to the `outDir`.

```js
{
  output: 'server',
  build: {
    client: './client'
  }
}
```

### build.server

[Section titled “build.server”](#buildserver)

**Type:** `string`\
**Default:** `'./server'`

Controls the output directory of server JavaScript when building to SSR.

This value is relative to the `outDir`.

```js
{
  build: {
    server: './server'
  }
}
```

### build.assets

[Section titled “build.assets”](#buildassets)

**Type:** `string`\
**Default:** `'_astro'`

**Added in:** `astro@2.0.0`

Specifies the directory in the build output where Astro-generated assets (bundled JS and CSS for example) should live.

```js
{
  build: {
    assets: '_custom'
  }
}
```

**See Also:**

- outDir

### build.assetsPrefix

[Section titled “build.assetsPrefix”](#buildassetsprefix)

**Type:** `string | Record<string, string>`\
**Default:** `undefined`

**Added in:** `astro@2.2.0`

Specifies the prefix for Astro-generated asset links. This can be used if assets are served from a different domain than the current site.

This requires uploading the assets in your local `./dist/_astro` folder to a corresponding `/_astro/` folder on the remote domain. To rename the `_astro` path, specify a new directory in `build.assets`.

To fetch all assets uploaded to the same domain (e.g. `https://cdn.example.com/_astro/...`), set `assetsPrefix` to the root domain as a string (regardless of your `base` configuration):

```js
{
  build: {
    assetsPrefix: 'https://cdn.example.com'
  }
}
```

**Added in:** `astro@4.5.0`

You can also pass an object to `assetsPrefix` to specify a different domain for each file type. In this case, a `fallback` property is required and will be used by default for any other files.

```js
{
  build: {
    assetsPrefix: {
      'js': 'https://js.cdn.example.com',
      'mjs': 'https://js.cdn.example.com',
      'css': 'https://css.cdn.example.com',
      'fallback': 'https://cdn.example.com'
    }
  }
}
```

### build.serverEntry

[Section titled “build.serverEntry”](#buildserverentry)

**Type:** `string`\
**Default:** `'entry.mjs'`

Specifies the file name of the server entrypoint when building to SSR. This entrypoint is usually dependent on which host you are deploying to and will be set by your adapter for you.

Note that it is recommended that this file ends with `.mjs` so that the runtime detects that the file is a JavaScript module.

```js
{
  build: {
    serverEntry: 'main.mjs'
  }
}
```

### build.redirects

[Section titled “build.redirects”](#buildredirects)

**Type:** `boolean`\
**Default:** `true`

**Added in:** `astro@2.6.0`

Specifies whether redirects will be output to HTML during the build. This option only applies to `output: 'static'` mode; in SSR redirects are treated the same as all responses.

This option is mostly meant to be used by adapters that have special configuration files for redirects and do not need/want HTML based redirects.

```js
{
  build: {
    redirects: false
  }
}
```

### build.inlineStylesheets

[Section titled “build.inlineStylesheets”](#buildinlinestylesheets)

**Type:** `'always' | 'auto' | 'never'`\
**Default:** `auto`

**Added in:** `astro@2.6.0`

Control whether project styles are sent to the browser in a separate css file or inlined into `<style>` tags. Choose from the following options:

- `'always'` - project styles are inlined into `<style>` tags
- `'auto'` - only stylesheets smaller than `ViteConfig.build.assetsInlineLimit` (default: 4kb) are inlined. Otherwise, project styles are sent in external stylesheets.
- `'never'` - project styles are sent in external stylesheets

```js
{
  build: {
    inlineStylesheets: `never`,
  },
}
```

### build.concurrency

[Section titled “build.concurrency”](#buildconcurrency)

**Type:** `number`\
**Default:** `1`

**Added in:** `astro@4.16.0`

The number of pages to build in parallel.

**In most cases, you should not change the default value of `1`.**

Use this option only when other attempts to reduce the overall rendering time (e.g. batch or cache long running tasks like fetch calls or data access) are not possible or are insufficient. If the number is set too high, page rendering may slow down due to insufficient memory resources and because JS is single-threaded.

```js
{
  build: {
    concurrency: 2
  }
}
```

Breaking changes possible

This feature is stable and is not considered experimental. However, this feature is only intended to address difficult performance issues, and breaking changes may occur in a [minor release](/en/upgrade-astro/#semantic-versioning) to keep this option as performant as possible. Please check the [Astro CHANGELOG](https://github.com/withastro/astro/blob/refs/heads/next/packages/astro/CHANGELOG.md) for every minor release if you are using this feature.
