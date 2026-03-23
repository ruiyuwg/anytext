Building your application

# Route Pre-rendering

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/route-prerendering.mdx)

Route pre-rendering powers Static Site Generation (SSG) by producing static HTML pages during the build process. This results in faster load times and better SEO, making it especially useful for content-rich sites such as documentation, blogs, and marketing pages. Static files are served without server-side processing at runtime.

Configure prerendering for specific routes using the `routes` option

```
import { defineConfig } from "@solidjs/start/config";
export default defineConfig({  server: {    prerender: {      routes: ["/", "/about"],    },  },});
```

Or to pre-render all routes, you can pass `true` to the `crawlLinks` option

```
import { defineConfig } from "@solidjs/start/config";
export default defineConfig({  server: {    prerender: {      crawlLinks: true,    },  },});
```

For advanced pre-rendering options, refer to [Nitro's documentation](https://nitro.build/config#prerender).

[SolidBase](https://solidbase.dev) simplifies SSG development with built-in support for fast, pre-rendered Markdown and MDX pages.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/building-your-application/route-prerendering.mdx\&page=https://docs.solidjs.com/solid-start/building-your-application/route-prerendering)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/route-prerendering.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/building-your-application/route-prerendering.mdx\&page=https://docs.solidjs.com/solid-start/building-your-application/route-prerendering)
