Rendering modes

# Single page applications

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/rendering-modes/spa.mdx)

When deploying applications that use a client-side router without relying on Server-Side Rendering, it is important that redirects to the index page are handled properly. This prevents the CDN or hosting service from returning a "not found" error when accessing URLs that do not correspond to files.

Each provider has a different way of doing this. For example, Netlify provides a `_redirects` file that contains:

```
/*   /index.html   200
```

Vercel, on the other hand, requires a rewrites section in your `vercel.json`:

```
{  "rewrites": [    {      "source": "/(.*)",      "destination": "/index.html"    }  ]}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/rendering-modes/spa.mdx\&page=https://docs.solidjs.com/solid-router/rendering-modes/spa)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/rendering-modes/spa.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/rendering-modes/spa.mdx\&page=https://docs.solidjs.com/solid-router/rendering-modes/spa)
