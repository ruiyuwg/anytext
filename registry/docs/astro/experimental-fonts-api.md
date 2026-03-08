# Experimental fonts API

**Type:** `FontFamily[]`

**Added in:** `astro@5.7.0`

This experimental feature allows you to use fonts from your filesystem and various font providers (eg. Google, Fontsource, Bunny) through a unified, fully customizable, and type-safe API.

Web fonts can impact page performance at both load time and rendering time. This API helps you keep your site performant with automatic [web font optimizations](https://web.dev/learn/performance/optimize-web-fonts) including preload links, optimized fallbacks, and opinionated defaults. [See common usage examples](#usage-examples).

The Fonts API focuses on performance and privacy by downloading and caching fonts so they’re served from your site. This can avoid sending user data to third-party sites, and also ensures that a consistent set of fonts is available to all your visitors.

To enable this feature, configure an `experimental.fonts` object with at least one font:

astro.config.mjs

```diff
import { defineConfig, fontProviders } from "astro/config";


export default defineConfig({
    experimental: {
+        fonts: [{
+            provider: fontProviders.google(),
+            name: "Roboto",
+            cssVariable: "--font-roboto"
+        }]
    }
});
```

Then, add the `<Font />` component and site-wide styling in your `<head>`:

src/components/Head.astro

```diff
---
+import { Font } from "astro:assets";
---


+<Font cssVariable="--font-roboto" preload />


<style>
+body {
    +font-family: var(--font-roboto);
+}
</style>
```

## Usage

[Section titled “Usage”](#usage)

1. `experimental.fonts` accepts an array of font objects. For each font, you must specify a `provider`, the family `name`, and define a `cssVariable` to refer to your font.

   - [`provider`](#provider): You can choose from the list of [built-in providers](#available-font-providers) or build your own [custom font provider](#build-your-own-font-provider).
   - [`name`](#name): Choose a font family supported by your provider.
   - [`cssVariable`](#cssvariable-1): Must be a valid [ident](https://developer.mozilla.org/en-US/docs/Web/CSS/ident) in the form of a CSS variable.

   The following example configures the [“Roboto” family from Google Fonts](https://fonts.google.com/specimen/Roboto):

   astro.config.mjs

   ```diff
   import { defineConfig, fontProviders } from "astro/config";


   export default defineConfig({
   +  experimental: {
   +    fonts: [{
   +      provider: fontProviders.google(),
   +      name: "Roboto",
   +      cssVariable: "--font-roboto"
   +    }]
   +  }
   });
   ```

   More configuration options, such as defining [fallback font families](#fallbacks) and which [`weights`](#weights), [`styles`](#styles), [`subsets`](#subsets) and [`formats`](#formats) to download, are available and some will depend on your chosen provider.

   See the full [configuration reference](#font-configuration-reference) to learn more.

2. Apply styles using the `<Font />` component. It must be imported and added to your page `<head>`. Providing the font’s [`cssVariable`](#cssvariable) is required, and you can optionally [output preload links](#preload):

   src/components/Head.astro

   ```diff
   ---
   +import { Font } from "astro:assets";
   ---


   +
   ```

   This is commonly done in a component such as `Head.astro` that is used in a common site layout.

   See the full [`<Font>` component reference](#font--component-reference) for more information.

   Since the `<Font />` component generates CSS with font declarations, you can reference the font family using the `cssVariable`:

   - CSS

     ```diff

     body {
         +font-family: var(--font-roboto);
     }

     ```

   - Tailwind CSS 4.0

     src/styles/global.css

     ```diff
     @import "tailwindcss";


     @theme inline {
         +--font-sans: var(--font-roboto);
     }
     ```

   - Tailwind CSS 3.0

     tailwind.config.mjs

     ```diff
     /** @type {import("tailwindcss").Config} */
     export default {
     content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
     theme: {
         extend: {},
     +    fontFamily: {
     +        sans: ["var(--font-roboto)"]
     +    }
     },
     plugins: []
     };
     ```

## Available font providers

[Section titled “Available font providers”](#available-font-providers)

Fonts are loaded using a provider, which either downloads font files from a remote service or loads local font files from disk. Astro exports built-in providers for common services. You can also [make a custom Astro font provider](#build-your-own-font-provider).

To use a built-in font provider, import `fontProviders` and configure [`provider`](#provider) with the appropriate value for your chosen font provider:

astro.config.mjs

```js
import { fontProviders } from "astro/config";
```

- [Adobe](#adobe)
- [Bunny](#bunny)
- [Fontshare](#fontshare)
- [Fontsource](#fontsource)
- [Google](#google)
- [Google Icons](#google-icons)
- [Local](#local)

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

The provider comes with family specific [options](#options).

#### experimental.glyphs

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

#### experimental.variableAxis

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

**Added in:** `astro@5.16.9`

Retrieves fonts from [Google Icons](https://fonts.google.com/icons):

```js
provider: fontProviders.googleicons()
```

The provider comes with family specific [options](#options).

#### experimental.glyphs

[Section titled “experimental.glyphs”](#experimentalglyphs-1)

**Type:** `string[]`

when resolving the new Material Symbols icons, allows specifying a list of glyphs to be included in the font for each font family. This can reduce the size of the font file:

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

**Added in:** `astro@5.16.13`

Retrieves fonts from disk:

```js
provider: fontProviders.local()
```

The provider comes with required family specific [options](#options).

#### variants

[Section titled “variants”](#variants)

**Type:** `LocalFontFamily["variants"]`

The `options.variants` property is required. Each variant represents a [`@font-face` declaration](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/) and requires a [`src`](#src).

Additionally, [some other properties](#other-properties) may be specified within each variant.

astro.config.mjs

```js
import { defineConfig, fontProviders } from "astro/config";


export default defineConfig({
    experimental: {
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
    }
});
```

##### weight

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

##### style

[Section titled “style”](#style)

**Type:** `"normal" | "italic" | "oblique"`\
**Default:** `undefined`

A [font style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style):

```js
style: "normal"
```

When the value is not set, by default Astro will try to infer the value based on the first [`source`](#src).

##### src

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

- [display](#display)
- [unicodeRange](#unicoderange)
- [stretch](#stretch)
- [featureSettings](#featuresettings)
- [variationSettings](#variationsettings)

astro.config.mjs

```js
import { defineConfig, fontProviders } from "astro/config";


export default defineConfig({
    experimental: {
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
    }
});
```

## Usage examples

[Section titled “Usage examples”](#usage-examples)

astro.config.mjs

```js
import { defineConfig, fontProviders } from "astro/config";


export default defineConfig({
  experimental: {
    fonts: [
      {
        name: "Roboto",
        cssVariable: "--font-roboto",
        provider: fontProviders.google(),
        // Default included:
        // weights: [400] ,
        // styles: ["normal", "italics"],
        // subsets: ["latin"],
        // fallbacks: ["sans-serif"],
        // formats: ["woff2"],
      },
      {
        name: "Inter",
        cssVariable: "--font-inter",
        provider: fontProviders.fontsource(),
        // Specify weights that are actually used
        weights: [400, 500, 600, 700],
        // Specify styles that are actually used
        styles: ["normal"],
        // Download only font files for characters used on the page
        subsets: ["latin", "cyrillic"],
        // Download more font formats
        formats: ["woff2", "woff"],
      },
      {
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono",
        provider: fontProviders.fontsource(),
        // Download only font files for characters used on the page
        subsets: ["latin", "latin-ext"],
        // Use a fallback font family matching the intended appearance
        fallbacks: ["monospace"],
      },
      {
        name: "Poppins",
        cssVariable: "--font-poppins",
        provider: fontProviders.local(),
        options: {
          // Weight and style are not specified so Astro
          // will try to infer them for each variant
          variants: [
            {
              src: [
                "./src/assets/fonts/Poppins-regular.woff2",
                "./src/assets/fonts/Poppins-regular.woff",
              ]
            },
            {
              src: [
                "./src/assets/fonts/Poppins-bold.woff2",
                "./src/assets/fonts/Poppins-bold.woff",
              ]
            },
          ]
        }
      }
    ],
  }
});
```

## `<Font />` component reference

[Section titled “\ component reference”](#font--component-reference)

This component outputs style tags and can optionally output preload links for a given font family.

It must be imported and added to your page `<head>`. This is commonly done in a component such as `Head.astro` that is used in a common site layout for global use but may be added to individual pages as needed.

With this component, you have control over which font family is used on which page, and which fonts are preloaded.

### cssVariable

[Section titled “cssVariable”](#cssvariable)

**Example type:** `"--font-roboto" | "--font-comic-sans" | ...`

The [`cssVariable`](#cssvariable-1) registered in your Astro configuration:

src/components/Head.astro

```astro
---
import { Font } from "astro:assets";
---


<Font cssVariable="--font-roboto" />
```

### preload

[Section titled “preload”](#preload)

**Type:** `boolean | { weight?: string | number; style?: string; subset?: string }[]`\
**Default:** `false`

Whether to output [preload links](https://web.dev/learn/performance/optimize-web-fonts#preload) or not:

src/components/Head.astro

```astro
---
import { Font } from "astro:assets";
---


<Font cssVariable="--font-roboto" preload />
```

With the `preload` directive, the browser will immediately begin downloading all possible font links during page load.

#### Granular preloads

[Section titled “Granular preloads”](#granular-preloads)

**Added in:** `astro@5.15.0`

You may not always want to preload every font link, as this can block loading other important resources or may download fonts that are not needed for the current page.

To selectively control which font files are preloaded, you can provide an array of objects describing any combination of font `weight`, `style`, or `subset` to preload.

The following example will only preload font files with a `400` weight or a `normal` style in the `latin` subset:

src/components/Head.astro

```astro
---
import { Font } from "astro:assets";
---


<Font
  cssVariable="--font-roboto"
  preload={[
    { subset: "latin", style: "normal" },
    { weight: "400" },
  ]}
/>
```

Variable weight font files will be preloaded if any weight within its range is requested. For example, a font file for font weight `100 900` will be included when `400` is specified in a `preload` object.

## Accessing font data programmatically

[Section titled “Accessing font data programmatically”](#accessing-font-data-programmatically)

The [`fontData`](#fontdata) object allows you to retrieve lower-level font family data programmatically. For example, you can use it in an [API Route](/en/guides/endpoints/#server-endpoints-api-routes) to generate OpenGraph images using [satori](https://github.com/vercel/satori), combined with proper [formats](#formats) configuration:

src/pages/og.png.tsx

```tsx
import type{ APIRoute } from "astro"
import { fontData } from "astro:assets"
import satori from "satori"


export const GET: APIRoute = (context) => {
  const data = fontData["--font-roboto"]


  const svg = await satori(
    <div style={{ color: "black" }}>hello, world</div>,
    {
      width: 600,
      height: 400,
      fonts: [
        {
          name: "Roboto",
          data: await fetch(new URL(data[0].src[0].url, context.url.origin)).then(res => res.arrayBuffer()),
          weight: 400,
          style: "normal",
        },
      ],
    },
  )


  // ...
}
```

### `fontData`

[Section titled “fontData”](#fontdata)

**Type:** `Record<CssVariable, Array<FontData>>`

**Added in:** `astro@5.16.12`

An object where each key is a [`cssVariable`](#cssvariable-1) and the value is an array describing the associated fonts. Each font is an object containing an array of `src` available for that font and the following optional properties: `weight` and `style`.

## Font configuration reference

[Section titled “Font configuration reference”](#font-configuration-reference)

All properties of your fonts must be configured in the Astro config. Set these to customize the data loaded from your [font provider](#available-font-providers), for example, to only download certain font weights or styles. For more control, more [granular configuration](#granular-font-configuration) is available.

Each provider is responsible for handling these options, so availability and support for the following properties may vary.

[`provider`](#provider), [`name`](#name), and [`cssVariable`](#cssvariable-1) are required.

### provider

[Section titled “provider”](#provider)

**Type:** `FontProvider`

The source of your font files. You can use a [built-in provider](#available-font-providers) or write your own [custom provider](#build-your-own-font-provider):

astro.config.mjs

```js
import { defineConfig, fontProviders } from "astro/config";


export default defineConfig({
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Roboto",
      cssVariable: "--font-roboto"
    }]
  }
});
```

### name

[Section titled “name”](#name)

**Type:** `string`

The font family name, as identified by your font provider:

```js
name: "Roboto"
```

### cssVariable

[Section titled “cssVariable”](#cssvariable-1)

**Type:** `string`

A valid [ident](https://developer.mozilla.org/en-US/docs/Web/CSS/ident) of your choosing in the form of a CSS variable (i.e. starting with `--`):

```js
cssVariable: "--font-roboto"
```

### fallbacks

[Section titled “fallbacks”](#fallbacks)

**Type:** `string[]`\
**Default:** `["sans-serif"]`

An array of fonts to use when your chosen font is unavailable, or loading. Fallback fonts will be chosen in the order listed. The first available font will be used:

```js
fallbacks: ["CustomFont", "serif"]
```

To disable fallback fonts completely, configure an empty array:

```js
fallbacks: []
```

Specify at least a [generic family name](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#generic-name) matching the intended appearance of your font. Astro will then attempt to generate [optimized fallbacks](https://developer.chrome.com/blog/font-fallbacks) using font metrics. To disable this optimization, set `optimizedFallbacks` to false.

### optimizedFallbacks

[Section titled “optimizedFallbacks”](#optimizedfallbacks)

**Type:** `boolean`\
**Default:** `true`

Whether or not to enable Astro’s default optimization when generating fallback fonts. You may disable this default optimization to have full control over how [`fallbacks`](#fallbacks) are generated:

```js
optimizedFallbacks: false
```

### weights

[Section titled “weights”](#weights)

**Type:** `(number | string)[]`\
**Default:** `[400]`

An array of [font weights](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight). If no value is specified in your configuration, only weight `400` is included by default to prevent unnecessary downloads. You will need to include this property to access any other font weights:

```js
weights: [200, "400", "bold"]
```

If the associated font is a [variable font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide), you can specify a range of weights:

```js
weights: ["100 900"]
```

### styles

[Section titled “styles”](#styles)

**Type:** `("normal" | "italic" | "oblique")[]`\
**Default:** `["normal", "italic"]`

An array of [font styles](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style):

```js
styles: ["normal", "oblique"]
```

### subsets

[Section titled “subsets”](#subsets)

**Type:** `string[]`\
**Default:** `["latin"]`

Defines a list of [font subsets](https://knaap.dev/posts/font-subsetting/) to preload.

```js
subsets: ["latin"]
```

### formats

[Section titled “formats”](#formats)

**Type:** `("woff2" | "woff" | "otf" | "ttf" | "eot")[]`\
**Default:** `["woff2"]`

**Added in:** `astro@5.16.7`

An array of [font formats](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/src#font_formats):

```js
formats: ["woff2", "woff"]
```

### options

[Section titled “options”](#options)

**Type:** `Record<string, any>`

**Added in:** `astro@5.16.12`

An object to pass provider specific options. It is typed automatically based on the font family [provider](#provider):

```js
options: {
  experimental: {
    glyphs: ["a"]
  }
}
```

### display

[Section titled “display”](#display)

**Type:** `"auto" | "block" | "swap" | "fallback" | "optional"`\
**Default:** `"swap"`

Defines [how a font displays](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) based on when it is downloaded and ready for use:

```js
display: "block"
```

### unicodeRange

[Section titled “unicodeRange”](#unicoderange)

**Type:** `string[]`\
**Default:** `undefined`

Determines when a font must be downloaded and used based on a specific [range of unicode characters](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range). If a character on the page matches the configured range, the browser will download the font and all characters will be available for use on the page. To configure a subset of characters preloaded for a single font, see the [subsets](#subsets) property instead.

This can be useful for localization to avoid unnecessary font downloads when a specific part of your website uses a different alphabet and will be displayed with a separate font. For example, a website that offers both English and Japanese versions can prevent the browser from downloading the Japanese font on English versions of the page that do not contain any of the Japanese characters provided in `unicodeRange`.

```js
unicodeRange: ["U+26"]
```

### stretch

[Section titled “stretch”](#stretch)

**Type:** `string`\
**Default:** `undefined`

A [font stretch](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-stretch):

```js
stretch: "condensed"
```

### featureSettings

[Section titled “featureSettings”](#featuresettings)

**Type:** `string`\
**Default:** `undefined`

Controls the [typographic font features](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-feature-settings) (e.g. ligatures, small caps, or swashes):

```js
featureSettings: "'smcp' 2"
```

### variationSettings

[Section titled “variationSettings”](#variationsettings)

**Type:** `string`\
**Default:** `undefined`

Font [variation settings](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-variation-settings):

```js
variationSettings: "'xhgt' 0.7"
```

## Granular font configuration

[Section titled “Granular font configuration”](#granular-font-configuration)

**Added in:** `astro@5.15.6`

A font family is defined by a combination of properties such as weights and styles (e.g. `weights: [500, 600]` and `styles: ["normal", "bold"]`), but you may want to download only certain combinations of these.

For greater control over which font files are downloaded, you can specify the same font (ie. with the same `cssVariable`, `name`, and `provider` properties) multiple times with different combinations. Astro will merge the results and download only the required files. For example, it is possible to download normal `500` and `600` while downloading only italic `500`:

astro.config.mjs

```js
import { defineConfig, fontProviders } from "astro/config"


export default defineConfig({
  experimental: {
    fonts: [
      {
        name: "Roboto",
        cssVariable: "--roboto",
        provider: fontProviders.google(),
        weights: [500, 600],
        styles: ["normal"]
      },
      {
        name: "Roboto",
        cssVariable: "--roboto",
        provider: fontProviders.google(),
        weights: [500],
        styles: ["italic"]
      }
    ]
  }
})
```

## Build your own font provider

[Section titled “Build your own font provider”](#build-your-own-font-provider)

If you do not wish to use one of the [built-in providers](#available-font-providers) (e.g. you want to use a [3rd-party unifont provider](#supporting-a-3rd-party-unifont-provider) or [build something for a private registry](#supporting-a-private-registry)), you can build your own.

The preferred method for implementing a custom font provider is to export a function that returns [the `FontProvider` object](#the-font-provider-object) and takes the [configuration](#config) as a parameter.

### The font provider object

[Section titled “The font provider object”](#the-font-provider-object)

The experimental Fonts API allows you to access fonts in a unified way. Each family requires the use of an Astro Font Provider to retrieve font faces.

A `FontProvider` is an object containing required [`name`](#name-1) and [`resolveFont()`](#resolvefont) properties. It also has optional [`config`](#config), [`init()`](#init) and [`listFonts()`](#listfonts) properties available.

The `FontProvider` type accepts a generic for family [options](#options).

#### `name`

[Section titled “name”](#name-1)

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

Useful for caching

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
      experimental: {
          fonts: [{
              provider: registryFontProvider(),
              name: "Custom",
              cssVariable: "--font-custom"
          }]
      }
  });
  ```

- Provider options

  astro.config.ts

  ```ts
  import { defineConfig } from "astro/config";
  import { registryFontProvider } from "./font-provider";


  export default defineConfig({
      experimental: {
          fonts: [{
              provider: registryFontProvider({
                token: "..."
              }),
              name: "Custom",
              cssVariable: "--font-custom"
          }]
      }
  });
  ```

- Family options

  astro.config.ts

  ```ts
  import { defineConfig } from "astro/config";
  import { registryFontProvider } from "./font-provider";


  export default defineConfig({
      experimental: {
          fonts: [{
              provider: registryFontProvider(),
              options: {
                minimal: true
              },
              name: "Custom",
              cssVariable: "--font-custom"
          }]
      }
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
      experimental: {
          fonts: [{
              provider: acmeFontProvider(),
              name: "Custom",
              cssVariable: "--font-custom"
          }]
      }
  });
  ```

- Provider options

  astro.config.ts

  ```ts
  import { defineConfig } from "astro/config";
  import { acmeFontProvider } from "./font-provider";


  export default defineConfig({
      experimental: {
          fonts: [{
              provider: acmeFontProvider({
                token: "..."
              }),
              name: "Custom",
              cssVariable: "--font-custom"
          }]
      }
  });
  ```

- Family options

  astro.config.ts

  ```ts
  import { defineConfig } from "astro/config";
  import { acmeFontProvider } from "./font-provider";


  export default defineConfig({
      experimental: {
          fonts: [{
              provider: acmeFontProvider(),
              options: {
                minimal: true
              },
              name: "Custom",
              cssVariable: "--font-custom"
          }]
      }
  });
  ```

## Caching

[Section titled “Caching”](#caching)

The Fonts API caching implementation was designed to be practical in development and efficient in production. During builds, font files are copied to the `_astro/fonts` output directory, so they can benefit from HTTP caching of static assets (usually a year).

To clear the cache in development, remove the `.astro/fonts` directory. To clear the build cache, remove the `node_modules/.astro/fonts` directory

## Further reading

[Section titled “Further reading”](#further-reading)

For full details and to give feedback on this experimental API, see [the Fonts RFC](https://github.com/withastro/roadmap/blob/rfc/fonts/proposals/0055-fonts.md).
