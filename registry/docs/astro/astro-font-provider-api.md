# Astro Font Provider API

**Added in:** `astro@6.0.0` New

The [Fonts API](/en/guides/fonts/) allows you to access fonts in a unified way. Each family requires the use of an Astro Font Provider, which either downloads font files from a remote service or loads local font files from disk.

## Built-in providers

[Section titled “Built-in providers”](#built-in-providers)

Astro exports built-in font providers from `astro/config`:

```js
import { fontProviders } from 'astro/config'
```

To use a built-in font provider, set [`provider`](/en/reference/configuration-reference/#fontprovider) with the appropriate value for your chosen font provider:

- [Adobe](#adobe)
- [Bunny](#bunny)
- [Fontshare](#fontshare)
- [Fontsource](#fontsource)
- [Google](#google)
- [Google Icons](#google-icons)
- [Local](#local)
- [NPM](#npm)

### Adobe

[Section titled “Adobe”](#adobe)

Retrieves fonts from [Adobe](https://fonts.adobe.com/):

```js
provider: fontProviders.adobe({ id: "your-id" })
```

Pass the Adobe font provider an ID loaded as an [environment variable in your Astro config file](/en/guides/environment-variables/#in-the-astro-config-file).

### Bunny

[Section titled “Bunny”](#bunny)

Retrieves fonts from [Bunny](https://fonts.bunny.net/):

```js
provider: fontProviders.bunny()
```

### Fontshare

[Section titled “Fontshare”](#fontshare)

Retrieves fonts from [Fontshare](https://www.fontshare.com/):

```js
provider: fontProviders.fontshare()
```

### Fontsource

[Section titled “Fontsource”](#fontsource)

Retrieves fonts from [Fontsource](https://fontsource.org/):

```js
provider: fontProviders.fontsource()
```

### Google

[Section titled “Google”](#google)

Retrieves fonts from [Google](https://fonts.google.com/):

```js
provider: fontProviders.google()
```

The provider comes with the following family-specific options that can be added in the [`font.options` object](/en/reference/configuration-reference/#fontoptions).

#### `experimental.glyphs`

[Section titled “experimental.glyphs”](#experimentalglyphs)

**Type:** `string[]`

Allows specifying a list of glyphs to be included in the font for each font family. This can reduce the size of the font file:

```js
{
  // ...
  provider: fontProviders.google(),
  options: {
    experimental: {
      glyphs: ["a"]
    }
  }
}
```

#### `experimental.variableAxis`

[Section titled “experimental.variableAxis”](#experimentalvariableaxis)

**Type:** `Partial<Record<VariableAxis, ([string, string] | string)[]>>`

Allows setting variable axis configuration:

```js
{
  // ...
  provider: fontProviders.google(),
  options: {
    experimental: {
      variableAxis: {
        slnt: [["-15", "0"]],
        CASL: [["0", "1"]],
        CRSV: ["1"],
        MONO: [["0", "1"]],
      }
    }
  }
}
```

### Google Icons

[Section titled “Google Icons”](#google-icons)

Retrieves fonts from [Google Icons](https://fonts.google.com/icons):

```js
provider: fontProviders.googleicons()
```

The provider comes with the following family-specific options that can be added in the [`font.options` object](/en/reference/configuration-reference/#fontoptions).

#### `experimental.glyphs`

[Section titled “experimental.glyphs”](#experimentalglyphs-1)

**Type:** `string[]`

When resolving the new Material Symbols icons, allows specifying a list of glyphs to be included in the font for each font family. This can reduce the size of the font file:

```js
{
  // ...
  provider: fontProviders.googleicons(),
  options: {
    experimental: {
      glyphs: ["a"]
    }
  }
}
```

### Local

[Section titled “Local”](#local)

Retrieves fonts from disk:

```js
provider: fontProviders.local()
```

The provider requires that [`variants`](#variants) be defined in the [`font.options` object](/en/reference/configuration-reference/#fontoptions).

#### `variants`

[Section titled “variants”](#variants)

**Type:** `LocalFontFamily["variants"]`

The `options.variants` property is required. Each variant represents a [`@font-face` declaration](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/) and requires a [`src`](#src).

Additionally, [some other properties](#other-properties) may be specified within each variant.

astro.config.mjs

```js
import { defineConfig, fontProviders } from "astro/config";


export default defineConfig({
  fonts: [{
    provider: fontProviders.local(),
    name: "Custom",
    cssVariable: "--font-custom",
    options: {
      variants: [
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/custom-400.woff2"]
        },
        {
          weight: 700,
          style: "normal",
          src: ["./src/assets/fonts/custom-700.woff2"]
        }
        // ...
      ]
    }
  }]
});
```

##### `weight`

[Section titled “weight”](#weight)

**Type:** `number | string`\
**Default:** `undefined`

A [font weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight):

```js
weight: 200
```

If the associated font is a [variable font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide), you can specify a range of weights:

```js
weight: "100 900"
```

When the value is not set, by default Astro will try to infer the value based on the first [`source`](#src).

##### `style`

[Section titled “style”](#style)

**Type:** `"normal" | "italic" | "oblique"`\
**Default:** `undefined`

A [font style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style):

```js
style: "normal"
```

When the value is not set, by default Astro will try to infer the value based on the first [`source`](#src).

##### `src`

[Section titled “src”](#src)

**Type:** `(string | URL | { url: string | URL; tech?: string })[]`

Font [sources](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src). It can be a path relative to the root, a package import or a URL. URLs are particularly useful if you inject local fonts through an integration:

- Relative path

  ```js
  src: ["./src/assets/fonts/MyFont.woff2", "./src/assets/fonts/MyFont.woff"]
  ```

- URL

  ```js
  src: [new URL("./custom.ttf", import.meta.url)]
  ```

- Package import

  ```js
  src: ["my-package/SomeFont.ttf"]
  ```

Caution

We recommend not putting your font files in [the `public/` directory](/en/reference/configuration-reference/#publicdir). Since Astro will copy these files into that folder at build time, this will result in duplicated files in your build output. Instead, store them somewhere else in your project, such as in [`src/`](/en/reference/configuration-reference/#srcdir).

You can also specify a [tech](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src#tech) by providing objects:

```js
src: [{ url:"./src/assets/fonts/MyFont.woff2", tech: "color-COLRv1" }]
```

##### Other properties

[Section titled “Other properties”](#other-properties)

The following options from font families are also available for local font families within variants:

- [display](/en/reference/configuration-reference/#fontdisplay)
- [unicodeRange](/en/reference/configuration-reference/#fontunicoderange)
- [stretch](/en/reference/configuration-reference/#fontstretch)
- [featureSettings](/en/reference/configuration-reference/#fontfeaturesettings)
- [variationSettings](/en/reference/configuration-reference/#fontvariationsettings)

astro.config.mjs

```js
import { defineConfig, fontProviders } from "astro/config";


export default defineConfig({
  fonts: [{
    provider: fontProviders.local(),
    name: "Custom",
    cssVariable: "--font-custom",
    options: {
      variants: [
        {
          weight: 400,
          style: "normal",
          src: ["./src/assets/fonts/custom-400.woff2"],
          display: "block"
        }
      ]
    }
  }]
});
```

### NPM

[Section titled “NPM”](#npm)

Retrieves fonts from NPM packages, either from locally installed packages in `node_modules` or from a CDN:

```js
provider: fontProviders.npm()
```

The provider automatically detects fonts from your `package.json` dependencies and can resolve fonts from packages like `@fontsource/*`, `@fontsource-variable/*`, and other known font packages.

#### Provider options

[Section titled “Provider options”](#provider-options)

The NPM provider accepts the following configuration options:

##### `cdn`

[Section titled “cdn”](#cdn)

**Type:** `string`\
**Default:** `'https://cdn.jsdelivr.net/npm'`

CDN to use for fetching npm packages remotely:

```js
provider: fontProviders.npm({ cdn: 'https://esm.sh' })
```

##### `remote`

[Section titled “remote”](#remote)

**Type:** `boolean`\
**Default:** `true`

Whether to fall back to fetching from the CDN when local resolution fails. Set to `false` to only resolve from locally installed packages:

```js
provider: fontProviders.npm({ remote: false })
```

#### Family options

[Section titled “Family options”](#family-options)

The provider comes with the following family-specific options that can be added in the [`font.options` object](/en/reference/configuration-reference/#fontoptions).

##### `package`

[Section titled “package”](#package)

**Type:** `string`\
**Default:** Auto-detected or inferred from family name

The NPM package name. When not specified, the provider will try to find the font family in known font package patterns or infer based on Fontsource conventions:

```js
{
  // ...
  provider: fontProviders.npm(),
  options: {
    package: '@fontsource/roboto'
  }
}
```

##### `version`

[Section titled “version”](#version)

**Type:** `string`\
**Default:** `'latest'`

The version of the package (used for CDN resolution only):

```js
{
  // ...
  provider: fontProviders.npm(),
  options: {
    version: '5.0.0'
  }
}
```

##### `file`

[Section titled “file”](#file)

**Type:** `string`\
**Default:** `'index.css'`

The entry CSS file to parse from the package:

```js
{
  // ...
  provider: fontProviders.npm(),
  options: {
    file: 'latin.css'
  }
}
```

## Building a font provider

[Section titled “Building a font provider”](#building-a-font-provider)

If you do not wish to use one of the [built-in providers](#built-in-providers) (e.g. you want to use a [3rd-party unifont provider](#supporting-a-3rd-party-unifont-provider) or [build something for a private registry](#supporting-a-private-registry)), you can build your own.

The preferred method for implementing a custom font provider is to export a function that returns [the `FontProvider` object](#the-font-provider-object) and takes the [configuration](#config) as a parameter.

### The font provider object

[Section titled “The font provider object”](#the-font-provider-object)

A `FontProvider` is an object containing required [`name`](#name) and [`resolveFont()`](#resolvefont) properties. It also has optional [`config`](#config), [`init()`](#init) and [`listFonts()`](#listfonts) properties available.

The `FontProvider` type accepts a generic for family [options](/en/reference/configuration-reference/#fontoptions).

#### `name`

[Section titled “name”](#name)

**Type:** `string`

A unique name for the provider, used in logs and for identification.

#### `resolveFont()`

[Section titled “resolveFont()”](#resolvefont)

**Type:** `(options: ResolveFontOptions) => Awaitable<{ fonts: FontFaceData[] } | undefined>`

Used to retrieve and return font face data based on the given options.

#### `config`

[Section titled “config”](#config)

**Type:** `Record<string, any>`\
**Default:** `undefined`

A serializable object, used for identification.

#### `init()`

[Section titled “init()”](#init)

**Type:** `(context: FontProviderInitContext) => Awaitable<void>`\
**Default:** `undefined`

Optional callback, used to perform any initialization logic.

##### `context.storage`

[Section titled “context.storage”](#contextstorage)

**Type:** `Storage`

Useful for caching.

##### `context.root`

[Section titled “context.root”](#contextroot)

**Type:** `URL`

The project root, useful for resolving local files paths.

#### `listFonts()`

[Section titled “listFonts()”](#listfonts)

**Type:** `() => Awaitable<string[] | undefined>`\
**Default:** `undefined`

Optional callback, used to return the list of available font names.

### Supporting a private registry

[Section titled “Supporting a private registry”](#supporting-a-private-registry)

The following example defines a font provider for a private registry:

- Simple

  font-provider.ts

  ```ts
  import type { FontProvider } from "astro";
  import { retrieveFonts, type Fonts } from "./utils.js",


  export function registryFontProvider(): FontProvider {
    let data: Fonts = {}


    return {
      name: "registry",
      init: async () => {
        data = await retrieveFonts(token);
      },
      listFonts: () => {
        return Object.keys(data);
      },
      resolveFont: ({ familyName, ...rest }) => {
        const fonts = data[familyName];
        if (fonts) {
          return { fonts };
        }
        return undefined;
      },
    };
  }
  ```

- Provider options

  font-provider.ts

  ```ts
  import type { FontProvider } from "astro";
  import { retrieveFonts, type Fonts } from "./utils.js",


  interface Config {
    token: string;
  }


  export function registryFontProvider(config: Config): FontProvider {
    let data: Fonts = {}


    return {
      name: "registry",
      config,
      init: async () => {
        data = await retrieveFonts(token);
      },
      listFonts: () => {
        return Object.keys(data);
      },
      resolveFont: ({ familyName, ...rest }) => {
        const fonts = data[familyName];
        if (fonts) {
          return { fonts };
        }
        return undefined;
      },
    };
  }
  ```

- Family options

  font-provider.ts

  ```ts
  import type { FontProvider } from "astro";
  import { retrieveFonts, type Fonts } from "./utils.js",


  interface FamilyOptions {
    minimal?: boolean;
  }


  export function registryFontProvider(): FontProvider {
    let data: Fonts = {}


    return {
      name: "registry",
      init: async () => {
        data = await retrieveFonts(token);
      },
      listFonts: () => {
        return Object.keys(data);
      },
      // options is typed as FamilyOptions | undefined
      resolveFont: ({ familyName, options, ...rest }) => {
        const fonts = data[familyName];
        if (fonts) {
          return { fonts };
        }
        return undefined;
      },
    };
  }
  ```

You can then register this font provider in the Astro config:

- Simple

  astro.config.ts

  ```ts
  import { defineConfig } from "astro/config";
  import { registryFontProvider } from "./font-provider";


  export default defineConfig({
    fonts: [{
      provider: registryFontProvider(),
      name: "Custom",
      cssVariable: "--font-custom"
    }]
  });
  ```

- Provider options

  astro.config.ts

  ```ts
  import { defineConfig } from "astro/config";
  import { registryFontProvider } from "./font-provider";


  export default defineConfig({
    fonts: [{
      provider: registryFontProvider({
        token: "..."
      }),
      name: "Custom",
      cssVariable: "--font-custom"
    }]
  });
  ```

- Family options

  astro.config.ts

  ```ts
  import { defineConfig } from "astro/config";
  import { registryFontProvider } from "./font-provider";


  export default defineConfig({
    fonts: [{
      provider: registryFontProvider(),
      options: {
        minimal: true
      },
      name: "Custom",
      cssVariable: "--font-custom"
    }]
  });
  ```

### Supporting a 3rd-party unifont provider

[Section titled “Supporting a 3rd-party unifont provider”](#supporting-a-3rd-party-unifont-provider)

You can define an Astro font provider using a unifont provider under the hood:

- Simple

  font-provider.ts

  ```ts
  import type { FontProvider } from "astro";
  import type { InitializedProvider } from "unifont";
  import { acmeProvider } from "@acme/unifont-provider"


  export function acmeFontProvider(): FontProvider {
    const provider = acmeProvider();
    let initializedProvider: InitializedProvider | undefined;
    return {
      name: provider._name,
      async init(context) {
        initializedProvider = await provider(context);
      },
      async resolveFont({ familyName, ...rest }) {
        return await initializedProvider?.resolveFont(familyName, rest);
      },
      async listFonts() {
        return await initializedProvider?.listFonts?.();
      },
    };
  }
  ```

- Provider options

  font-provider.ts

  ```ts
  import type { FontProvider } from "astro";
  import type { InitializedProvider } from "unifont";
  import { acmeProvider, type AcmeOptions } from "@acme/unifont-provider"


  export function acmeFontProvider(config?: AcmeOptions): FontProvider {
    const provider = acmeProvider(config);
    let initializedProvider: InitializedProvider | undefined;
    return {
      name: provider._name,
      config,
      async init(context) {
        initializedProvider = await provider(context);
      },
      async resolveFont({ familyName, ...rest }) {
        return await initializedProvider?.resolveFont(familyName, rest);
      },
      async listFonts() {
        return await initializedProvider?.listFonts?.();
      },
    };
  }
  ```

- Family options

  font-provider.ts

  ```ts
  import type { FontProvider } from "astro";
  import type { InitializedProvider } from "unifont";
  import { acmeProvider, type AcmeFamilyOptions } from "@acme/unifont-provider"


  export function acmeFontProvider(): FontProvider {
    const provider = acmeProvider();
    let initializedProvider: InitializedProvider | undefined;
    return {
      name: provider._name,
      async init(context) {
        initializedProvider = await provider(context);
      },
      async resolveFont({ familyName, ...rest }) {
        return await initializedProvider?.resolveFont(familyName, rest);
      },
      async listFonts() {
        return await initializedProvider?.listFonts?.();
      },
    };
  }
  ```

You can then register this font provider in the Astro config:

- Simple

  astro.config.ts

  ```ts
  import { defineConfig } from "astro/config";
  import { acmeFontProvider } from "./font-provider";


  export default defineConfig({
    fonts: [{
      provider: acmeFontProvider(),
      name: "Custom",
      cssVariable: "--font-custom"
    }]
  });
  ```

- Provider options

  astro.config.ts

  ```ts
  import { defineConfig } from "astro/config";
  import { acmeFontProvider } from "./font-provider";


  export default defineConfig({
    fonts: [{
      provider: acmeFontProvider({
        token: "..."
      }),
      name: "Custom",
      cssVariable: "--font-custom"
    }]
  });
  ```

- Family options

  astro.config.ts

  ```ts
  import { defineConfig } from "astro/config";
  import { acmeFontProvider } from "./font-provider";


  export default defineConfig({
    fonts: [{
      provider: acmeFontProvider(),
      options: {
        minimal: true
      },
      name: "Custom",
      cssVariable: "--font-custom"
    }]
  });
  ```
