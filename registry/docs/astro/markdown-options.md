## Markdown Options

[Section titled “Markdown Options”](#markdown-options)

### markdown.shikiConfig

[Section titled “markdown.shikiConfig”](#markdownshikiconfig)

**Type:** `Partial<ShikiConfig>`

Shiki is our default syntax highlighter. You can configure all options via the `markdown.shikiConfig` object:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'dracula',
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // Disable the default colors
      // https://shiki.style/guide/dual-themes#without-default-color
      // (Added in v4.12.0)
      defaultColor: false,
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
      // Add custom aliases for languages
      // Map an alias to a Shiki language ID: https://shiki.style/languages#bundled-languages
      // https://shiki.style/guide/load-lang#custom-language-aliases
      langAlias: {
        cjs: "javascript"
      },
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
});
```

See the [code syntax highlighting guide](/en/guides/syntax-highlighting/) for usage and examples.

### markdown.syntaxHighlight

[Section titled “markdown.syntaxHighlight”](#markdownsyntaxhighlight)

**Type:** `SyntaxHighlightConfig | SyntaxHighlightConfigType | false`\
**Default:** `{ type: 'shiki', excludeLangs: ['math'] }`

Which syntax highlighter to use for Markdown code blocks (\`\`\`), if any. This determines the CSS classes that Astro will apply to your Markdown code blocks.

- `shiki` - use the [Shiki](https://shiki.style) highlighter (`github-dark` theme configured by default)
- `prism` - use the [Prism](https://prismjs.com/) highlighter and [provide your own Prism stylesheet](/en/guides/syntax-highlighting/#add-a-prism-stylesheet)
- `false` - do not apply syntax highlighting.

```js
{
  markdown: {
    // Example: Switch to use prism for syntax highlighting in Markdown
    syntaxHighlight: 'prism',
  }
}
```

For more control over syntax highlighting, you can instead specify a configuration object with the properties listed below.

#### markdown.syntaxHighlight.type

[Section titled “markdown.syntaxHighlight.type”](#markdownsyntaxhighlighttype)

**Type:** `'shiki' | 'prism'`\
**Default:** `'shiki'`

**Added in:** `astro@5.5.0`

The default CSS classes to apply to Markdown code blocks. (If no other syntax highlighting configuration is needed, you can instead set `markdown.syntaxHighlight` directly to `shiki`, `prism`, or `false`.)

#### markdown.syntaxHighlight.excludeLangs

[Section titled “markdown.syntaxHighlight.excludeLangs”](#markdownsyntaxhighlightexcludelangs)

**Type:** `Array<string>`\
**Default:** `['math']`

**Added in:** `astro@5.5.0`

An array of languages to exclude from the default syntax highlighting specified in `markdown.syntaxHighlight.type`. This can be useful when using tools that create diagrams from Markdown code blocks, such as Mermaid.js and D2.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid', 'math'],
    },
  },
});
```

### markdown.remarkPlugins

[Section titled “markdown.remarkPlugins”](#markdownremarkplugins)

**Type:** `RemarkPlugins`

Pass [remark plugins](https://github.com/remarkjs/remark) to customize how your Markdown is built. You can import and apply the plugin function (recommended), or pass the plugin name as a string.

```js
import remarkToc from 'remark-toc';
{
  markdown: {
    remarkPlugins: [ [remarkToc, { heading: "contents"} ] ]
  }
}
```

### markdown.rehypePlugins

[Section titled “markdown.rehypePlugins”](#markdownrehypeplugins)

**Type:** `RehypePlugins`

Pass [rehype plugins](https://github.com/remarkjs/remark-rehype) to customize how your Markdown’s output HTML is processed. You can import and apply the plugin function (recommended), or pass the plugin name as a string.

```js
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
{
  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis]
  }
}
```

### markdown.gfm

[Section titled “markdown.gfm”](#markdowngfm)

**Type:** `boolean`\
**Default:** `true`

**Added in:** `astro@2.0.0`

Astro uses [GitHub-flavored Markdown](https://github.com/remarkjs/remark-gfm) by default. To disable this, set the `gfm` flag to `false`:

```js
{
  markdown: {
    gfm: false,
  }
}
```

### markdown.smartypants

[Section titled “markdown.smartypants”](#markdownsmartypants)

**Type:** `boolean`\
**Default:** `true`

**Added in:** `astro@2.0.0`

Astro uses the [SmartyPants formatter](https://daringfireball.net/projects/smartypants/) by default. To disable this, set the `smartypants` flag to `false`:

```js
{
  markdown: {
    smartypants: false,
  }
}
```

### markdown.remarkRehype

[Section titled “markdown.remarkRehype”](#markdownremarkrehype)

**Type:** `RemarkRehype`

Pass options to [remark-rehype](https://github.com/remarkjs/remark-rehype#api).

```js
{
  markdown: {
    // Example: Translate the footnotes text to another language, here are the default English values
    remarkRehype: { footnoteLabel: "Footnotes", footnoteBackLabel: "Back to reference 1"},
  },
};
```
