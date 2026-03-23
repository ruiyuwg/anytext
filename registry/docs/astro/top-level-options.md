## Top-Level Options

[Section titled “Top-Level Options”](#top-level-options)

### site

[Section titled “site”](#site)

**Type:** `string`

Your final, deployed URL. Astro uses this full URL to generate your sitemap and canonical URLs in your final build. It is strongly recommended that you set this configuration to get the most out of Astro.

```js
{
  site: 'https://www.my-site.dev'
}
```

### base

[Section titled “base”](#base)

**Type:** `string`

The base path to deploy to. Astro will use this path as the root for your pages and assets both in development and in production build.

In the example below, `astro dev` will start your server at `/docs`.

```js
{
  base: '/docs'
}
```

When using this option, all of your static asset imports and URLs should add the base as a prefix. You can access this value via `import.meta.env.BASE_URL`.

The value of `import.meta.env.BASE_URL` will be determined by your `trailingSlash` config, no matter what value you have set for `base`.

A trailing slash is always included if `trailingSlash: "always"` is set. If `trailingSlash: "never"` is set, `BASE_URL` will not include a trailing slash, even if `base` includes one.

Additionally, Astro will internally manipulate the configured value of `config.base` before making it available to integrations. The value of `config.base` as read by integrations will also be determined by your `trailingSlash` configuration in the same way.

In the example below, the values of `import.meta.env.BASE_URL` and `config.base` when processed will both be `/docs`:

```js
{
   base: '/docs/',
   trailingSlash: "never"
}
```

In the example below, the values of `import.meta.env.BASE_URL` and `config.base` when processed will both be `/docs/`:

```js
{
   base: '/docs',
   trailingSlash: "always"
}
```

### trailingSlash

[Section titled “trailingSlash”](#trailingslash)

**Type:** `'always' | 'never' | 'ignore'`\
**Default:** `'ignore'`

Set the route matching behavior for trailing slashes in the dev server and on-demand rendered pages. Choose from the following options:

- `'ignore'` - Match URLs regardless of whether a trailing ”/” exists. Requests for “/about” and “/about/” will both match the same route.
- `'always'` - Only match URLs that include a trailing slash (e.g: “/about/”). In production, requests for on-demand rendered URLs without a trailing slash will be redirected to the correct URL for your convenience. However, in development, they will display a warning page reminding you that you have `always` configured.
- `'never'` - Only match URLs that do not include a trailing slash (e.g: “/about”). In production, requests for on-demand rendered URLs with a trailing slash will be redirected to the correct URL for your convenience. However, in development, they will display a warning page reminding you that you have `never` configured.

When redirects occur in production for GET requests, the redirect will be a 301 (permanent) redirect. For all other request methods, it will be a 308 (permanent, and preserve the request method) redirect.

Trailing slashes on prerendered pages are handled by the hosting platform, and may not respect your chosen configuration. See your hosting platform’s documentation for more information. You cannot use Astro [redirects](#redirects) for this use case at this point.

```js
{
  // Example: Require a trailing slash during development
  trailingSlash: 'always'
}
```

**See Also:**

- build.format

### redirects

[Section titled “redirects”](#redirects)

**Type:** `Record<string, RedirectConfig>`\
**Default:** `{}`

**Added in:** `astro@2.9.0`

Specify a mapping of redirects where the key is the route to match and the value is the path to redirect to.

You can redirect both static and dynamic routes, but only to the same kind of route. For example, you cannot have a `'/article': '/blog/[...slug]'` redirect.

```js
export default defineConfig({
  redirects: {
   '/old': '/new',
   '/blog/[...slug]': '/articles/[...slug]',
   '/about': 'https://example.com/about',
   '/news': {
     status: 302,
     destination: 'https://example.com/news'
   },
   // '/product1/', '/product1' // Note, this is not supported
  }
})
```

For statically-generated sites with no adapter installed, this will produce a client redirect using a [`<meta http-equiv="refresh">` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#http-equiv) and does not support status codes.

When using SSR or with a static adapter in `output: static` mode, status codes are supported. Astro will serve redirected GET requests with a status of `301` and use a status of `308` for any other request method.

You can customize the [redirection status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages) using an object in the redirect config:

```js
export default defineConfig({
  redirects: {
    '/other': {
      status: 302,
      destination: '/place',
    },
  }
})
```

### output

[Section titled “output”](#output)

**Type:** `'static' | 'server'`\
**Default:** `'static'`

Specifies the output target for builds.

- `'static'` - Prerender all your pages by default, outputting a completely static site if none of your pages opt out of prerendering.
- `'server'` - Use server-side rendering (SSR) for all pages by default, always outputting a server-rendered site.

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  output: 'static'
})
```

**See Also:**

- adapter

### adapter

[Section titled “adapter”](#adapter)

**Type:** `AstroIntegration`

Deploy to your favorite server, serverless, or edge host with build adapters. Import one of our first-party adapters ([Cloudflare](/en/guides/integrations-guide/cloudflare/), [Netlify](/en/guides/integrations-guide/netlify/), [Node.js](/en/guides/integrations-guide/node/), [Vercel](/en/guides/integrations-guide/vercel/)) or explore [community adapters](https://astro.build/integrations/2/?search=\&categories%5B%5D=adapters) to enable on-demand rendering in your Astro project.

See our [on-demand rendering guide](/en/guides/on-demand-rendering/) for more on Astro’s server rendering options.

```js
import netlify from '@astrojs/netlify';
{
  // Example: Build for Netlify serverless deployment
  adapter: netlify(),
}
```

**See Also:**

- output

### integrations

[Section titled “integrations”](#integrations)

**Type:** `AstroIntegration[]`

Extend Astro with custom integrations. Integrations are your one-stop-shop for adding framework support (like Solid.js), new features (like sitemaps), and new libraries (like Partytown).

Read our [Integrations Guide](/en/guides/integrations-guide/) for help getting started with Astro Integrations.

```js
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
{
  // Example: Add React + MDX support to Astro
  integrations: [react(), mdx()]
}
```

### root

[Section titled “root”](#root)

**Type:** `string`\
**CLI:** `--root`\
**Default:** `"."` (current working directory)

You should only provide this option if you run the `astro` CLI commands in a directory other than the project root directory. Usually, this option is provided via the CLI instead of the Astro config file, since Astro needs to know your project root before it can locate your config file.

If you provide a relative path (ex: `--root: './my-project'`) Astro will resolve it against your current working directory.

#### Examples

[Section titled “Examples”](#examples)

```js
{
  root: './my-project-directory'
}
```

```bash
$ astro build --root ./my-project-directory
```

### srcDir

[Section titled “srcDir”](#srcdir)

**Type:** `string`\
**Default:** `"./src"`

Set the directory that Astro will read your site from.

The value can be either an absolute file system path or a path relative to the project root.

```js
{
  srcDir: './www'
}
```

### publicDir

[Section titled “publicDir”](#publicdir)

**Type:** `string`\
**Default:** `"./public"`

Set the directory for your static assets. Files in this directory are served at `/` during dev and copied to your build directory during build. These files are always served or copied as-is, without transform or bundling.

The value can be either an absolute file system path or a path relative to the project root.

```js
{
  publicDir: './my-custom-publicDir-directory'
}
```

### outDir

[Section titled “outDir”](#outdir)

**Type:** `string`\
**Default:** `"./dist"`

Set the directory that `astro build` writes your final build to.

The value can be either an absolute file system path or a path relative to the project root.

```js
{
  outDir: './my-custom-build-directory'
}
```

**See Also:**

- build.server

### cacheDir

[Section titled “cacheDir”](#cachedir)

**Type:** `string`\
**Default:** `"./node_modules/.astro"`

Set the directory for caching build artifacts. Files in this directory will be used in subsequent builds to speed up the build time.

The value can be either an absolute file system path or a path relative to the project root.

```js
{
  cacheDir: './my-custom-cache-directory'
}
```

### compressHTML

[Section titled “compressHTML”](#compresshtml)

**Type:** `boolean`\
**Default:** `true`

This is an option to minify your HTML output and reduce the size of your HTML files.

By default, Astro removes whitespace from your HTML, including line breaks, from `.astro` components in a lossless manner. Some whitespace may be kept as needed to preserve the visual rendering of your HTML. This occurs both in development mode and in the final build.

To disable HTML compression, set `compressHTML` to false.

```js
{
  compressHTML: false
}
```

### scopedStyleStrategy

[Section titled “scopedStyleStrategy”](#scopedstylestrategy)

**Type:** `'where' | 'class' | 'attribute'`\
**Default:** `'attribute'`

**Added in:** `astro@2.4`

Specify the strategy used for scoping styles within Astro components. Choose from:

- `'where'` - Use `:where` selectors, causing no specificity increase.
- `'class'` - Use class-based selectors, causing a +1 specificity increase.
- `'attribute'` - Use `data-` attributes, causing a +1 specificity increase.

Using `'class'` is helpful when you want to ensure that element selectors within an Astro component override global style defaults (e.g. from a global stylesheet). Using `'where'` gives you more control over specificity, but requires that you use higher-specificity selectors, layers, and other tools to control which selectors are applied. Using `'attribute'` is useful when you are manipulating the `class` attribute of elements and need to avoid conflicts between your own styling logic and Astro’s application of styles.

### prerenderConflictBehavior

[Section titled “prerenderConflictBehavior”](#prerenderconflictbehavior)

**Type:** `'error' | 'warn' | 'ignore'`\
**Default:** `'warn'`

**Added in:** `astro@6.0` New

Determines the default behavior when two routes generate the same prerendered URL:

- `error`: fail the build and display an error, forcing you to resolve the conflict
- `warn` (default): log a warning when conflicts occur, but build using the highest-priority route
- `ignore`: silently build using the highest-priority route when conflicts occur

```js
{
  prerenderConflictBehavior: 'error'
}
```

### vite

[Section titled “vite”](#vite)

**Type:** `ViteUserConfig`

Pass additional configuration options to Vite. Useful when Astro doesn’t support some advanced configuration that you may need.

View the full `vite` configuration object documentation on [vite.dev](https://vite.dev/config/).

#### Examples

[Section titled “Examples”](#examples-1)

```js
{
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      external: ['broken-npm-package'],
    }
  }
}
```

```js
{
  vite: {
    // Example: Add custom vite plugins directly to your Astro project
    plugins: [myPlugin()],
  }
}
```

### security

[Section titled “security”](#security)

**Type:** `Record<"checkOrigin", boolean> | undefined`\
**Default:** `{checkOrigin: true}`

**Added in:** `astro@4.9.0`

Enables security measures for an Astro website.

These features only exist for pages rendered on demand (SSR) using `server` mode or pages that opt out of prerendering in `static` mode.

By default, Astro will automatically check that the “origin” header matches the URL sent by each request in on-demand rendered pages. You can disable this behavior by setting `checkOrigin` to `false`:

astro.config.mjs

```js
export default defineConfig({
  output: "server",
  security: {
    checkOrigin: false
  }
})
```

#### security.checkOrigin

[Section titled “security.checkOrigin”](#securitycheckorigin)

**Type:** `boolean`\
**Default:** `true`

**Added in:** `astro@4.9.0`

Performs a check that the “origin” header, automatically passed by all modern browsers, matches the URL sent by each `Request`. This is used to provide Cross-Site Request Forgery (CSRF) protection.

The “origin” check is executed only for pages rendered on demand, and only for the requests `POST`, `PATCH`, `DELETE` and `PUT` with one of the following `content-type` headers: `'application/x-www-form-urlencoded'`, `'multipart/form-data'`, `'text/plain'`.

If the “origin” header doesn’t match the `pathname` of the request, Astro will return a 403 status code and will not render the page.

#### security.allowedDomains

[Section titled “security.allowedDomains”](#securityalloweddomains)

**Type:** `Array<RemotePattern>`\
**Default:** `[]`

**Added in:** `astro@5.14.2`

Defines a list of permitted host patterns for incoming requests when using SSR. When configured, Astro will validate the `X-Forwarded-Host` header against these patterns for security. If the header doesn’t match any allowed pattern, the header is ignored and the request’s original host is used instead.

This prevents host header injection attacks where malicious actors can manipulate the `Astro.url` value by sending crafted `X-Forwarded-Host` headers.

Each pattern can specify `protocol`, `hostname`, and `port`. All three are validated if provided. The patterns support wildcards for flexible hostname matching:

- `*.example.com` - matches exactly one subdomain level (e.g., `sub.example.com` but not `deep.sub.example.com`)
- `**.example.com` - matches any subdomain depth (e.g., both `sub.example.com` and `deep.sub.example.com`)

```js
{
  security: {
    // Example: Allow any subdomain of example.com on https
    allowedDomains: [
      {
        hostname: '**.example.com',
        protocol: 'https'
      },
      {
        hostname: 'staging.myapp.com',
        protocol: 'https',
        port: '443'
      }
    ]
  }
}
```

In some specific contexts (e.g., applications behind trusted reverse proxies with dynamic domains), you may need to allow all domains. To do this, use an empty object:

```js
{
  security: {
    // Allow any domain - use this only when necessary
    allowedDomains: [{}]
  }
}
```

When not configured, `X-Forwarded-Host` headers are not trusted and will be ignored.

#### security.actionBodySizeLimit

[Section titled “security.actionBodySizeLimit”](#securityactionbodysizelimit)

**Type:** `number`\
**Default:** `1048576` (1 MB)

**Added in:** `astro@5.18.0`

Sets the maximum size in bytes allowed for action request bodies.

By default, action request bodies are limited to 1 MB (1048576 bytes) to prevent abuse. You can increase this limit if your actions need to accept larger payloads, for example when handling file uploads.

astro.config.mjs

```js
export default defineConfig({
  security: {
    actionBodySizeLimit: 10 * 1024 * 1024 // 10 MB
  }
})
```

#### security.serverIslandBodySizeLimit

[Section titled “security.serverIslandBodySizeLimit”](#securityserverislandbodysizelimit)

**Type:** `number`\
**Default:** `1048576` (1 MB)

**Added in:** `astro@6.0.0` New

Sets the maximum size in bytes allowed for server island request bodies, which contain the encrypted props and slot HTML passed to the island component.

By default, server island request bodies are limited to 1 MB (1048576 bytes) to prevent abuse. You can increase this limit if your server islands need to accept larger payloads.

astro.config.mjs

```js
export default defineConfig({
  security: {
    serverIslandBodySizeLimit: 10 * 1024 * 1024 // 10 MB
  }
})
```

#### security.csp

[Section titled “security.csp”](#securitycsp)

**Type:** `boolean | object`\
**Default:** `false`

**Added in:** `astro@6.0.0` New

Enables support for [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) to help minimize certain types of security threats by controlling which resources a document is allowed to load. This provides additional protection against [cross-site scripting (XSS)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) attacks.

Enabling this feature adds additional security to Astro’s handling of processed and bundled scripts and styles by default, and allows you to further configure these, and additional, content types.

This feature comes with some limitations:

- External scripts and external styles are not supported out of the box, but you can [provide your own hashes](#securitycspscriptdirectivehashes).
- [Astro’s view transitions](/en/guides/view-transitions/) using the `<ClientRouter />` are not supported, but you can [consider migrating to the browser native View Transition API](https://events-3bg.pages.dev/jotter/astro-view-transitions/) instead if you are not using Astro’s enhancements to the native View Transitions and Navigation APIs.
- Shiki isn’t currently supported. By design, Shiki functions use inline styles that cannot work with Astro CSP implementation. Consider [using `<Prism />`](/en/guides/syntax-highlighting/#prism-) when your project requires both CSP and syntax highlighting.
- `unsafe-inline` directives are incompatible with Astro’s CSP implementation. By default, Astro will emit hashes for all its bundled scripts (e.g. client islands) and all modern browsers will automatically reject `unsafe-inline` when it occurs in a directive with a hash or nonce.

Note

Due to the nature of the Vite dev server, this feature isn’t supported while working in `dev` mode. Instead, you can test this in your Astro project using `build` and `preview`.

When enabled, Astro will add a `<meta>` element inside the `<head>` element of each page. This element will have the `http-equiv="content-security-policy"` attribute, and the `content` attribute will provide values for the `script-src` and `style-src` [directives](#securitycspdirectives) based on the script and styles used in the page.

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

You can further customize the `<meta>` element by enabling this feature with a configuration object that includes additional options.

##### security.csp.algorithm

[Section titled “security.csp.algorithm”](#securitycspalgorithm)

**Type:** `"SHA-256" | "SHA-384" | "SHA-512"`\
**Default:** `'SHA-256'`

**Added in:** `astro@6.0.0` New

The [hash function](https://developer.mozilla.org/en-US/docs/Glossary/Hash_function) to use when generating the hashes of the styles and scripts emitted by Astro.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  security: {
    csp: {
     algorithm: 'SHA-512'
    }
  }
});
```

##### security.csp.directives

[Section titled “security.csp.directives”](#securitycspdirectives)

**Type:** `Array<string>`\
**Default:** `[]`

**Added in:** `astro@6.0.0` New

A list of [CSP directives](https://content-security-policy.com/#directive) (beyond `script-src` and `style-src` which are included by default) that defines valid sources for specific content types. These directives are added to all pages.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  security: {
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

##### security.csp.styleDirective

[Section titled “security.csp.styleDirective”](#securitycspstyledirective)

**Type:** `CspStyleDirective`\
**Default:** `undefined`

**Added in:** `astro@6.0.0` New

A configuration object that allows you to override the default sources for the `style-src` directive with the [`resources`](#securitycspstyledirectiveresources) property, or to provide additional [hashes](#securitycspstyledirectivehashes) to be rendered.

###### security.csp.styleDirective.hashes

[Section titled “security.csp.styleDirective.hashes”](#securitycspstyledirectivehashes)

**Type:** `Array<CspHash>`\
**Default:** `[]`

**Added in:** `astro@6.0.0` New

A list of additional hashes to be rendered.

You must provide hashes that start with `sha384-`, `sha512-` or `sha256-`. Other values will cause a validation error. These hashes are added to all pages.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  security: {
    csp: {
      styleDirective: {
        hashes: [
          "sha384-styleHash",
          "sha512-styleHash",
          "sha256-styleHash"
        ]
      }
    }
  }
});
```

After the build, the `<meta>` element will include your additional hashes in the `style-src` directives:

```html
<meta
  http-equiv="content-security-policy"
  content="
    style-src 'self' 'sha384-styleHash' 'sha512-styleHash' 'sha256-styleHash' 'sha256-generatedByAstro';
  "
>
```

###### security.csp.styleDirective.resources

[Section titled “security.csp.styleDirective.resources”](#securitycspstyledirectiveresources)

**Type:** `Array<string>`\
**Default:** `[]`

**Added in:** `astro@6.0.0` New

A list of valid sources for `style-src` directives to override Astro’s default sources. This will not include `'self'` by default, and must be included in this list if you wish to keep it. These resources are added to all pages.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  security: {
    csp: {
      styleDirective: {
        resources: [
          "'self'",
          "https://styles.cdn.example.com"
        ]
      }
    }
  }
});
```

After the build, the `<meta>` element will instead apply your sources to the `style-src` directives:

```html
<head>
  <meta
    http-equiv="content-security-policy"
    content="
     style-src 'self' https://styles.cdn.example.com 'sha256-somehash';
    "
  >
</head>
```

When resources are inserted multiple times or from multiple sources (e.g. defined in your `csp` config and added using [the CSP runtime API](/en/reference/api-reference/#csp)), Astro will merge and deduplicate all resources to create your `<meta>` element.

##### security.csp.scriptDirective

[Section titled “security.csp.scriptDirective”](#securitycspscriptdirective)

**Type:** `CspScriptDirective`\
**Default:** `undefined`

**Added in:** `astro@6.0.0` New

A configuration object that allows you to override the default sources for the `script-src` directive with the [`resources`](#securitycspscriptdirectiveresources) property, or to provide additional [hashes](#securitycspscriptdirectivehashes) to be rendered.

###### security.csp.scriptDirective.hashes

[Section titled “security.csp.scriptDirective.hashes”](#securitycspscriptdirectivehashes)

**Type:** `Array<CspHash>`\
**Default:** `[]`

**Added in:** `astro@6.0.0` New

A list of additional hashes to be rendered.

You must provide hashes that start with `sha384-`, `sha512-` or `sha256-`. Other values will cause a validation error. These hashes are added to all pages.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  security: {
    csp: {
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

After the build, the `<meta>` element will include your additional hashes in the `script-src` directives:

```html
<meta
  http-equiv="content-security-policy"
  content="
    script-src 'self' 'sha384-scriptHash' 'sha512-scriptHash' 'sha256-scriptHash' 'sha256-generatedByAstro';
  "
>
```

###### security.csp.scriptDirective.resources

[Section titled “security.csp.scriptDirective.resources”](#securitycspscriptdirectiveresources)

**Type:** `Array<string>`\
**Default:** `[]`

**Added in:** `astro@6.0.0` New

A list of valid sources for the `script-src` directives to override Astro’s default sources. This will not include `'self'` by default, and must be included in this list if you wish to keep it. These resources are added to all pages.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  security: {
    csp: {
      scriptDirective: {
        resources: [
          "'self'", "https://cdn.example.com"
        ]
      }
    }
  }
});
```

After the build, the `<meta>` element will instead apply your sources to the `script-src` directives:

```html
<head>
  <meta
    http-equiv="content-security-policy"
    content="
     script-src 'self' https://cdn.example.com 'sha256-somehash';
    "
  >
</head>
```

When resources are inserted multiple times or from multiple sources (e.g. defined in your `csp` config and added using [the CSP runtime API](/en/reference/api-reference/#csp)), Astro will merge and deduplicate all resources to create your `<meta>` element.

###### security.csp.scriptDirective.strictDynamic

[Section titled “security.csp.scriptDirective.strictDynamic”](#securitycspscriptdirectivestrictdynamic)

**Type:** `boolean`\
**Default:** `false`

**Added in:** `astro@6.0.0` New

Enables [the `strict-dynamic` keyword](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) to support the dynamic injection of scripts.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';


export default defineConfig({
  security: {
    csp: {
      scriptDirective: {
        strictDynamic: true
      }
    }
  }
});
```
