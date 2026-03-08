# Experimental Content Security Policy (CSP)

**Type:** `boolean | object`\
**Default:** `false`

**Added in:** `astro@5.9.0`

Enables support for [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) to help minimize certain types of security threats by controlling which resources a document is allowed to load. This provides additional protection against [cross-site scripting (XSS)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) attacks.

Enabling this feature adds additional security to **Astro’s handling of processed and bundled scripts and styles** by default, and allows you to further configure these, and additional, content types.

This experimental CSP feature has some limitations. Inline scripts are not supported out of the box, but you can [provide your own hashes](#hashes) for external and inline scripts. [Astro’s view transitions](/en/guides/view-transitions/) using the `<ClientRouter />` are not supported, but you can [consider migrating to the browser native View Transition API](https://events-3bg.pages.dev/jotter/astro-view-transitions/) instead if you are not using Astro’s enhancements to the native View Transitions and Navigation APIs.

Note

Due to the nature of the Vite dev server, this feature isn’t supported while working in `dev` mode. Instead, you can test this in your Astro project using `build` and `preview`.

To enable this feature, add the experimental flag in your Astro config:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';


export default defineConfig({
+  experimental: {
+    csp: true
+  }
});
```

When enabled, Astro will add a `<meta>` element inside the `<head>` element of each page.

This element will have the `http-equiv="content-security-policy"` attribute, and the `content` attribute will provide values for the `script-src` and `style-src` [directives](#directives) based on the script and styles used in the page.

```html
<head>
  <meta
    http-equiv="content-security-policy"
    content="
      script-src 'self' 'sha256-somehash';
      style-src 'self' 'sha256-somehash';
    "
  >
</head>
```

## Configuration

[Section titled “Configuration”](#configuration)

You can further customize the `<meta>` element by enabling this feature with a configuration object that includes additional options.

### `algorithm`

[Section titled “algorithm”](#algorithm)

**Type:** `'SHA-256' | 'SHA-512' | 'SHA-384'`\
**Default:** `'SHA-256'`

**Added in:** `astro@5.9.0`

The [hash function](https://developer.mozilla.org/en-US/docs/Glossary/Hash_function) to use when generating the hashes of the styles and scripts emitted by Astro.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  experimental: {
    csp: {
      algorithm: 'SHA-512'
    }
  }
});
```

### `directives`

[Section titled “directives”](#directives)

**Type:** `CspDirective[]`\
**Default:** `[]`

**Added in:** `astro@5.9.0`

A list of [CSP directives](https://content-security-policy.com/#directive) that defines valid sources for specific content types.

While Astro needs to control the `script-src` and `style-src` directives, it is possible to control other CSP directives using the `csp.directives` field. These directives are added to all pages. It accepts a list of type-safe directives:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  experimental: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' https://images.cdn.example.com"
      ]
    }
  }
});
```

After the build, the `<meta>` element will add your directives into the `content` value alongside Astro’s default directives:

```html
<meta
  http-equiv="content-security-policy"
  content="
    default-src 'self';
    img-src 'self' 'https://images.cdn.example.com';
    script-src 'self' 'sha256-somehash';
    style-src 'self' 'sha256-somehash';
  "
>
```

### `styleDirective` and `scriptDirective`

[Section titled “styleDirective and scriptDirective”](#styledirective-and-scriptdirective)

**Type:** `object`\
**Default:** `{}`

**Added in:** `astro@5.9.0`

Configuration objects that allow you to override the default sources for the `style-src` and `script-src` directives with the [`resources`](#resources) property, or to provide additional [hashes](#hashes) to be rendered.

These properties are added to all pages and **completely override Astro’s default resources**, not add to them. Therefore, you must explicitly specify any default values that you want to be included.

#### `resources`

[Section titled “resources”](#resources)

**Type:** `string[]`\
**Default:** `[]`

**Added in:** `astro@5.9.0`

A list of valid sources for the `script-src` and `style-src` directives, including [values for subclasses](#adding-values-for-subclasses).

The `script-src` and `style-src` directives are handled by Astro by default, and use the `'self'` resource. This means that scripts and styles can only be downloaded by the current host (usually the current website).

To override the default source, you can provide a list of resources instead. This will not include `'self'` by default, and must be included in this list if you wish to keep it. These resources are added to all pages.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  experimental: {
    csp: {
      styleDirective: {
        resources: [
          "'self'",
          "https://styles.cdn.example.com"
        ]
      },
      scriptDirective: {
        resources: [
          "https://cdn.example.com"
        ]
      }
    }
  }
});
```

After the build, the `<meta>` element will instead apply your sources to the `style-src` and `script-src` directives:

```html
<head>
  <meta
    http-equiv="content-security-policy"
    content="
      script-src https://cdn.example.com 'sha256-somehash';
      style-src 'self' https://styles.cdn.example.com 'sha256-somehash';
    "
  >
</head>
```

##### Adding values for subclasses

[Section titled “Adding values for subclasses”](#adding-values-for-subclasses)

You can also use this field to add valid values that belong to [`script-src-attr`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-attr), [`script-src-elem`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src-elem), [`style-src-attr`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-attr) and [`style-src-elem`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src-elem), such as `unsafe-hashes` and `unsafe-inline`.

For example, if you have an external library that adds scripts or inline styles to some HTML elements of the page, you can add `unsafe-inline` to tell the browser that they are safe to render.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  experimental: {
    csp: {
      styleDirective: {
        resources: [
          "'unsafe-inline'"
        ]
      },
      scriptDirective: {
        resources: [
          "'unsafe-inline'"
        ]
      }
    }
  }
});
```

After the build, `style-src` and `script-src` directives will contain the `'unsafe-line'` resource:

```html
<head>
  <meta
    http-equiv="content-security-policy"
    content="
      script-src 'unsafe-line';
      style-src 'unsafe-line';
    "
  >
</head>
```

##### Multiple resources

[Section titled “Multiple resources”](#multiple-resources)

When resources are inserted multiple times or from multiple sources (e.g. defined in your `csp` config and added using [the CSP runtime API](#runtime-apis)), Astro will remove any duplicates, and merge the new ones.

In the following example, the directives `img-src https://global.cdn.example.org` and `default-src https://global.cdn.example.org` are set in `csp` configuration and will be applied to all pages.

astro.config.mjs

```js
export default defineConfig({
  experimental: {
    csp: {
      directives: [
        "img-src https://global.cdn.example.org",
        "default-src https://global.cdn.example.org"
      ]
    }
  }
})
```

Additionally, on an individual page, the resources `img-src https://vendor.cdn.example.org/` and `default-src https://global.cdn.example.org/ https://vendor.cdn.example.org/` are added using the [Astro.csp.insertDirective](#cspinsertdirective).

src/pages/index.astro

```astro
---
Astro.csp.insertDirective("img-src https://vendor.cdn.example.org")
Astro.csp.insertDirective("default-src https://global.cdn.example.org https://vendor.cdn.example.org")
---
```

During the build, the resources of the directives `img-src` and `default-src` for the `index.html` page are merged and deduplicated to create the appropriate headers.

```html
<head>
  <meta
    http-equiv="content-security-policy"
    content="
        img-src https://global.cdn.example.org https://vendor.cdn.example.org;
        default-src https://global.cdn.example.org https://vendor.cdn.example.org;
    "
  >
</head>
```

#### `hashes`

[Section titled “hashes”](#hashes)

**Type:** `CspHash[]`\
**Default:** `[]`

**Added in:** `astro@5.9.0`

A list of additional hashes to be rendered.

If you have external scripts or styles that aren’t generated by Astro, or inline scripts, this configuration option allows you to provide additional hashes to be rendered.

You must provide hashes that start with `sha384-`, `sha512-` or `sha256-`. Other values will cause a validation error. These hashes are added to all pages.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  experimental: {
    csp: {
      styleDirective: {
        hashes: [
          "sha384-styleHash",
          "sha512-styleHash",
          "sha256-styleHash"
        ]
      },
      scriptDirective: {
        hashes: [
          "sha384-scriptHash",
          "sha512-scriptHash",
          "sha256-scriptHash"
        ]
      }
    }
  }
});
```

After the build, the `<meta>` element will include your additional hashes in the `script-src` and `style-src` directives:

```html
<meta
  http-equiv="content-security-policy"
  content="
    script-src 'self' 'sha384-scriptHash' 'sha512-scriptHash' 'sha256-scriptHash' 'sha256-generatedByAstro';
    style-src 'self' 'sha384-styleHash' 'sha512-styleHash' 'sha256-styleHash' 'sha256-generatedByAstro';
  "
>
```

#### `strictDynamic`

[Section titled “strictDynamic”](#strictdynamic)

**Type:** `boolean`\
**Default:** `false`

**Added in:** `astro@5.9.0`

Enables [the `strict-dynamic` keyword](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) to support the dynamic injection of scripts.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  experimental: {
    csp: {
      scriptDirective: {
        strictDynamic: true
      }
    }
  }
});
```

## Runtime APIs

[Section titled “Runtime APIs”](#runtime-apis)

You can customize the `<meta>` element per page via runtime APIs available from the `Astro` global inside `.astro` components, or the `APIContext` type in endpoints and middleware.

### `csp.insertDirective`

[Section titled “csp.insertDirective”](#cspinsertdirective)

**Type:** `(directive: CspDirective) => void`

**Added in:** `astro@5.9.0`

Adds a single directive to the current page. You can call this method multiple times to add additional directives.

```astro
---
Astro.csp.insertDirective("default-src 'self'");
Astro.csp.insertDirective("img-src 'self' https://images.cdn.example.com");
---
```

After the build, the `<meta>` element for this individual page will incorporate your additional directives alongside the existing `script-src` and `style-src` directives:

```html
<meta
  http-equiv="content-security-policy"
  content="
    default-src 'self';
    img-src 'self' https://images.cdn.example.com;
    script-src 'self' 'sha256-somehash';
    style-src 'self' 'sha256-somehash';
  "
>
```

### `csp.insertStyleResource`

[Section titled “csp.insertStyleResource”](#cspinsertstyleresource)

**Type:** `(resource: string) => void`

**Added in:** `astro@5.9.0`

Inserts a new resource to be used for the `style-src` directive.

```astro
---
Astro.csp.insertStyleResource("https://styles.cdn.example.com");
---
```

After the build, the `<meta>` element for this individual page will add your source to the default `style-src` directive:

```html
<meta
  http-equiv="content-security-policy"
  content="
    script-src 'self' 'sha256-somehash';
    style-src https://styles.cdn.example.com 'sha256-somehash';
  "
>
```

### `csp.insertStyleHash`

[Section titled “csp.insertStyleHash”](#cspinsertstylehash)

**Type:** `(hash: CspHash) => void`

**Added in:** `astro@5.9.0`

Adds a new hash to the `style-src` directive.

```astro
---
Astro.csp.insertStyleHash("sha512-styleHash");
---
```

After the build, the `<meta>` element for this individual page will add your hash to the default `style-src` directive:

```html
<meta
  http-equiv="content-security-policy"
  content="
    script-src 'self' 'sha256-somehash';
    style-src 'self' 'sha256-somehash' 'sha512-styleHash';
  "
>
```

### `csp.insertScriptResource`

[Section titled “csp.insertScriptResource”](#cspinsertscriptresource)

**Type:** `(resource: string) => void`

**Added in:** `astro@5.9.0`

Inserts a new valid source to be used for the `script-src` directive.

```astro
---
Astro.csp.insertScriptResource("https://scripts.cdn.example.com");
---
```

After the build, the `<meta>` element for this individual page will add your source to the default `script-src` directive:

```html
<meta
  http-equiv="content-security-policy"
  content="
    script-src https://scripts.cdn.example.com 'sha256-somehash';
    style-src 'self' 'sha256-somehash';
  "
>
```

### `csp.insertScriptHash`

[Section titled “csp.insertScriptHash”](#cspinsertscripthash)

**Type:** `(hash: CspHash) => void`

**Added in:** `astro@5.9.0`

Adds a new hash to the `script-src` directive.

```astro
---
Astro.csp.insertScriptHash("sha512-scriptHash");
---
```

After the build, the `<meta>` element for this individual page will add your hash to the default `script-src` directive:

```html
<meta
  http-equiv="content-security-policy"
  content="
    script-src 'self' 'sha256-somehash' 'sha512-styleHash';
    style-src 'self' 'sha256-somehash';
  "
>
```

# Experimental prerender conflict error

**Type:** `boolean`\
**Default:** `false`

**Added in:** `astro@5.14.0`

Turns prerender conflict warnings into errors during the build process.

Astro currently warns you during the build about any conflicts between multiple dynamic routes that can result in the same output path. For example `/blog/[slug]` and `/blog/[...all]` both could try to prerender the `/blog/post-1` path. In such cases, Astro renders only the [highest priority route](/en/guides/routing/#route-priority-order) for the conflicting path. This allows your site to build successfully, although you may discover that some pages are rendered by unexpected routes.

With this experimental flag set, the build will instead fail immediately with an error. This will require you to resolve any routing conflicts immediately, and will ensure that Astro is building your routes as you intend.

To enable this behavior, add the `experimental.failOnPrerenderConflict` feature flag to your Astro config:

astro.config.mjs

```diff
import { defineConfig } from "astro/config"


defineConfig({
+  experimental: {
+    failOnPrerenderConflict: true,
+  },
});
```

## Usage

[Section titled “Usage”](#usage)

After enabling this flag, you may encounter errors about conflicting prerendered routes when you attempt to build your project. If this happens, you will need to update one or more of your [dynamic routes](/en/guides/routing/#dynamic-routes) to avoid ambiguous routing.
