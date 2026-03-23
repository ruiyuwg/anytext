## fonts

[Section titled “fonts”](#fonts)

**Type:** `Array<FontFamily>`\
**Default:** `[]`

**Added in:** `astro@6.0.0` New

Configures fonts and allows you to specify some customization options on a per-font basis.

See our guide for more information on [using custom fonts in Astro](/en/guides/fonts/).

### font.provider

[Section titled “font.provider”](#fontprovider)

**Type:** `FontProvider`

**Added in:** `astro@6.0.0` New

The source of your font files. You can use a [built-in provider](/en/reference/font-provider-reference/#built-in-providers) or write your own [custom provider](/en/reference/font-provider-reference/#building-a-font-provider):

```js
import { defineConfig, fontProviders } from "astro/config";


export default defineConfig({
  fonts: [{
    provider: fontProviders.google(),
    name: "Roboto",
    cssVariable: "--font-roboto"
  }]
});
```

### font.name

[Section titled “font.name”](#fontname)

**Type:** `string`

**Added in:** `astro@6.0.0` New

The font family name, as identified by your font provider:

```js
name: "Roboto"
```

### font.cssVariable

[Section titled “font.cssVariable”](#fontcssvariable)

**Type:** `string`

**Added in:** `astro@6.0.0` New

A valid [ident](https://developer.mozilla.org/en-US/docs/Web/CSS/ident) of your choosing in the form of a CSS variable (i.e. starting with `--`):

```js
cssVariable: "--font-roboto"
```

### font.fallbacks

[Section titled “font.fallbacks”](#fontfallbacks)

**Type:** `Array<string>`\
**Default:** `["sans-serif"]`

**Added in:** `astro@6.0.0` New

An array of fonts to use when your chosen font is unavailable, or loading. Fallback fonts will be chosen in the order listed. The first available font will be used:

```js
fallbacks: ["CustomFont", "serif"]
```

To disable fallback fonts completely, configure an empty array:

```js
fallbacks: []
```

Specify at least a [generic family name](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#generic-name) matching the intended appearance of your font. Astro will then attempt to generate [optimized fallbacks](https://developer.chrome.com/blog/font-fallbacks) using font metrics. To disable this optimization, set `optimizedFallbacks` to false.

### font.optimizedFallbacks

[Section titled “font.optimizedFallbacks”](#fontoptimizedfallbacks)

**Type:** `boolean`\
**Default:** `true`

**Added in:** `astro@6.0.0` New

Whether or not to enable Astro’s default optimization when generating fallback fonts. You may disable this default optimization to have full control over how [`fallbacks`](#fontfallbacks) are generated:

```js
optimizedFallbacks: false
```

### font.weights

[Section titled “font.weights”](#fontweights)

**Type:** `Array<(number|string)>`\
**Default:** `[400]`

**Added in:** `astro@6.0.0` New

An array of [font weights](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight). If no value is specified in your configuration, only weight `400` is included by default to prevent unnecessary downloads. You will need to include this property to access any other font weights:

```js
weights: [200, "400", "bold"]
```

If the associated font is a [variable font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide), you can specify a range of weights:

```js
weights: ["100 900"]
```

### font.styles

[Section titled “font.styles”](#fontstyles)

**Type:** `Array<("normal"|"italic"|"oblique")>`\
**Default:** `["normal", "italic"]`

**Added in:** `astro@6.0.0` New

An array of [font styles](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style):

```js
styles: ["normal", "oblique"]
```

### font.subsets

[Section titled “font.subsets”](#fontsubsets)

**Type:** `Array<string>`\
**Default:** `["latin"]`

**Added in:** `astro@6.0.0` New

Defines a list of [font subsets](https://knaap.dev/posts/font-subsetting/) to preload.

```js
subsets: ["latin"]
```

### font.formats

[Section titled “font.formats”](#fontformats)

**Type:** `Array<("woff2"|"woff"|"otf"|"ttf"|"eot")>`\
**Default:** `["woff2"]`

**Added in:** `astro@6.0.0` New

An array of [font formats](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/src#font_formats):

```js
formats: ["woff2", "woff"]
```

### font.options

[Section titled “font.options”](#fontoptions)

**Type:** `Record<string, any>`

**Added in:** `astro@6.0.0` New

An object to pass provider specific options. It is typed automatically based on the font family [provider](#fontprovider):

```js
options: {
  experimental: {
    glyphs: ["a"]
  }
}
```

### font.display

[Section titled “font.display”](#fontdisplay)

**Type:** `"auto" | "block" | "swap" | "fallback" | "optional"`\
**Default:** `"swap"`

**Added in:** `astro@6.0.0` New

Defines [how a font displays](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) based on when it is downloaded and ready for use:

```js
display: "block"
```

### font.unicodeRange

[Section titled “font.unicodeRange”](#fontunicoderange)

**Type:** `Array<string>`\
**Default:** `undefined`

**Added in:** `astro@6.0.0` New

Determines when a font must be downloaded and used based on a specific [range of unicode characters](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range). If a character on the page matches the configured range, the browser will download the font and all characters will be available for use on the page. To configure a subset of characters preloaded for a single font, see the [subsets](#fontsubsets) property instead.

This can be useful for localization to avoid unnecessary font downloads when a specific part of your website uses a different alphabet and will be displayed with a separate font. For example, a website that offers both English and Japanese versions can prevent the browser from downloading the Japanese font on English versions of the page that do not contain any of the Japanese characters provided in `unicodeRange`.

```js
unicodeRange: ["U+26"]
```

### font.stretch

[Section titled “font.stretch”](#fontstretch)

**Type:** `string`\
**Default:** `undefined`

**Added in:** `astro@6.0.0` New

A [font stretch](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-stretch):

```js
stretch: "condensed"
```

### font.featureSettings

[Section titled “font.featureSettings”](#fontfeaturesettings)

**Type:** `string`\
**Default:** `undefined`

**Added in:** `astro@6.0.0` New

Controls the [typographic font features](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-feature-settings) (e.g. ligatures, small caps, or swashes):

```js
featureSettings: "'smcp' 2"
```

### font.variationSettings

[Section titled “font.variationSettings”](#fontvariationsettings)

**Type:** `string`\
**Default:** `undefined`

**Added in:** `astro@6.0.0` New

Font [variation settings](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-variation-settings):

```js
variationSettings: "'xhgt' 0.7"
```
