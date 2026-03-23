### `astro:build:ssr`

[Section titled “astro:build:ssr”](#astrobuildssr)

**Previous hook:** [`astro:build:setup`](#astrobuildsetup)

**Next hook:** [`astro:build:generated`](#astrobuildgenerated)

**When:** After a production SSR build has completed.

**Why:** To access the SSR manifest and map of the emitted entry points. This is useful when creating custom SSR builds in plugins or integrations.

- `middlewareEntryPoint` is the file system path of the middleware file;

```js
'astro:build:ssr'?: (options: {
  manifest: SerializedSSRManifest;
  middlewareEntryPoint: URL | undefined;
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```

#### `manifest` option

[Section titled “manifest option”](#manifest-option)

**Type:** `SerializedSSRManifest`

Allows you to create a custom build by accessing a serialized version of the [`SSRManifest`](#ssrmanifest). This contains the same information as `SSRManifest`, with some properties converted to serializable formats.

The following example checks the [`i18n.strategy`](#ssrmanifesti18nstrategy) configuration stored in the `manifest`:

```js
export default {
  name: 'my-integration',
  hooks: {
    'astro:build:ssr': ({ manifest }) => {
      const { i18n } = manifest;
      if (i18n?.strategy === "domains-prefix-always") {
        // do something
      }
    },
  },
}
```

##### `manifest.rootDir`

[Section titled “manifest.rootDir”](#manifestrootdir)

**Type:** `string`

Specifies a serialized version of the [`SSRManifest.rootDir`](#ssrmanifestrootdir).

##### `manifest.srcDir`

[Section titled “manifest.srcDir”](#manifestsrcdir)

**Type:** `string`

Specifies a serialized version of the [`SSRManifest.srcDir`](#ssrmanifestsrcdir).

##### `manifest.cacheDir`

[Section titled “manifest.cacheDir”](#manifestcachedir)

**Type:** `string`

Specifies a serialized version of the [`SSRManifest.cacheDir`](#ssrmanifestcachedir).

##### `manifest.outDir`

[Section titled “manifest.outDir”](#manifestoutdir)

**Type:** `string`

Specifies a serialized version of the [`SSRManifest.outDir`](#ssrmanifestoutdir).

##### `manifest.publicDir`

[Section titled “manifest.publicDir”](#manifestpublicdir)

**Type:** `string`

Specifies a serialized version of the [`SSRManifest.publicDir`](#ssrmanifestpublicdir).

##### `manifest.buildClientDir`

[Section titled “manifest.buildClientDir”](#manifestbuildclientdir)

**Type:** `string`

Specifies a serialized version of the [`SSRManifest.buildClientDir`](#ssrmanifestbuildclientdir).

##### `manifest.buildServerDir`

[Section titled “manifest.buildServerDir”](#manifestbuildserverdir)

**Type:** `string`

Specifies a serialized version of the [`SSRManifest.buildServerDir`](#ssrmanifestbuildserverdir).

##### `manifest.routes`

[Section titled “manifest.routes”](#manifestroutes)

**Type:** `SerializedRouteInfo[]`

Defines a list of serialized route information. Each route contains the same properties as [`SSRManifest.routes`](#ssrmanifestroutes), with `routeData` converted to a JSON-serializable format.

##### `manifest.assets`

[Section titled “manifest.assets”](#manifestassets)

**Type:** `string[]`

Defines a list of serialized asset file paths.

##### `manifest.componentMetadata`

[Section titled “manifest.componentMetadata”](#manifestcomponentmetadata)

**Type:** `[string, SSRComponentMetadata][]`

**Added in:** `astro@2.1.7`

Defines an array of key-value pairs where the first element is the component identifier and the second is an object describing the build metadata.

##### `manifest.inlinedScripts`

[Section titled “manifest.inlinedScripts”](#manifestinlinedscripts)

**Type:** `[string, string][]`

Defines an array of key-value pairs where each entry is a tuple. The first element is the script identifier and the second is the script content.

##### `manifest.clientDirectives`

[Section titled “manifest.clientDirectives”](#manifestclientdirectives)

**Type:** `[string, string][]`

**Added in:** `astro@2.5.0`

Defines an array of key-value pairs where the first element is the directive name (e.g. `load`, `visible`) and the second is the directive’s implementation code.

##### `manifest.key`

[Section titled “manifest.key”](#manifestkey)

**Type:** `string`

**Added in:** `astro@4.13.4`

Specifies the cryptographic key, serialized as a string, used for encrypting server island props.

#### `middlewareEntryPoint` option

[Section titled “middlewareEntryPoint option”](#middlewareentrypoint-option)

**Type:** `URL | undefined`

**Added in:** `astro@2.8.0`

Exposes the [middleware](/en/guides/middleware/) file path.

```js
export default {
  name: 'my-integration',
  hooks: {
    'astro:build:ssr': ({ middlewareEntryPoint }) => {
      if (middlewareEntryPoint) {
        // do some operations if a middleware exist
      }
    },
  },
}
```

### `astro:build:generated`

[Section titled “astro:build:generated”](#astrobuildgenerated)

**Added in:** `astro@1.3.0`

**Previous hook:** [`astro:build:ssr`](#astrobuildssr)

**Next hook:** [`astro:build:done`](#astrobuilddone)

**When:** After a static production build has finished generating routes and assets.

**Why:** To access generated routes and assets **before** build artifacts are cleaned up. This is a very uncommon use case. We recommend using [`astro:build:done`](#astrobuilddone) unless you really need to access the generated files before cleanup.

```js
'astro:build:generated'?: (options: {
  dir: URL;
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```

#### `dir` option

[Section titled “dir option”](#dir-option)

**Type:** [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL)

A URL path to the build output directory.

The following example uses Node’s built-in [`fileURLToPath()`](https://nodejs.org/api/url.html#urlfileurltopathurl-options) utility to compute a valid absolute path string for a file provided by the integration:

```js
import { fileURLToPath } from 'node:url';


export default {
  name: 'my-integration',
  hooks: {
    'astro:build:generated': ({ dir }) => {
      const outFile = fileURLToPath(new URL('./my-integration.json', dir));
    }
  }
}
```
