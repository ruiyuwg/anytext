# Gatsby on Vercel

Gatsby is an open-source static-site generator. It enables developers to build fast and secure websites that integrate different content, APIs, and services.

Gatsby also has a large ecosystem of plugins and tools that improve the development experience. Vercel supports many Gatsby features, including [Server-Side Rendering](#server-side-rendering), [Deferred Static Generation](#deferred-static-generation), [API Routes](#api-routes), and more.

## Get started with Gatsby on Vercel

## Using the Gatsby Vercel Plugin

[Gatsby v4+](https://www.gatsbyjs.com/gatsby-4/) sites deployed to Vercel will **automatically detect Gatsby usage** and install the `@vercel/gatsby-plugin-vercel-builder` plugin.

To deploy your Gatsby site to Vercel, **do not** install the `@vercel/gatsby-plugin-vercel-builder` plugin yourself, or add it to your `gatsby-config.js` file.

[Gatsby v5](https://www.gatsbyjs.com/gatsby-5/) sites require Node.js 20 or higher.

Vercel persists your Gatsby project's `.cache` directory across builds.

## Server-Side Rendering

Server-Side Rendering (SSR) allows you to render pages dynamically on the server. This is useful for pages where the rendered data needs to be unique on every request. For example, verifying authentication or checking the geolocation of an incoming request.

Vercel offers SSR that scales down resource consumption when traffic is low, and scales up with traffic surges. This protects your site from accruing costs during periods of no traffic or losing business during high-traffic periods.

### Using Gatsby's SSR API with Vercel

You can server-render pages in your Gatsby application on Vercel [using Gatsby's native Server-Side Rendering API](https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/). These pages will be deployed to Vercel as [Vercel functions](/docs/functions).

To server-render a Gatsby page, you must export an `async` function called `getServerData`. The function can return an object with several optional keys, [as listed in the Gatsby docs](https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/#creating-server-rendered-pages). The `props` key will be available in your page's props in the `serverData` property.

The following example demonstrates a server-rendered Gatsby page using `getServerData`:

```js filename="pages/example.jsx" framework=all
const Page = ({ serverData }) => {
  const { name } = serverData;
  return <div>Hello, {name}</div>;
};

export async function getServerData(props) {
  try {
    const res = await fetch(`https://example-data-source.com/api/some-data`);
    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}

export default Page;
```

```ts filename="pages/example.tsx" framework=all
import type { GetServerDataProps, GetServerDataReturn } from 'gatsby';

type ServerDataProps = {
  hello: string;
};

const Page = (props: PageProps) => {
  const { name } = props.serverData;
  return <div>Hello, {name}</div>;
};

export async function getServerData(
  props: GetServerDataProps,
): GetServerDataReturn<ServerDataProps> {
  try {
    const res = await fetch(`https://example-data-source.com/api/some-data`);
    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}

export default Page;
```

**To summarize, SSR with Gatsby on Vercel:**

- Scales to zero when not in use
- Scales automatically with traffic increases
- Has zero-configuration support for [`Cache-Control` headers](/docs/cdn-cache), including `stale-while-revalidate`
- Framework-aware infrastructure enables switching rendering between Edge/Node.js runtimes

[Learn more about SSR](https://www.gatsbyjs.com/docs/how-to/rendering-options/using-server-side-rendering/)

## Deferred Static Generation

Deferred Static Generation (DSG) allows you to defer the generation of static pages until they are requested for the first time.

To use DSG, you must set the `defer` option to `true` in the `createPages()` function in your `gatsby-node` file.

```js filename="pages/index.jsx" framework=all
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    defer: true,
    path: '/using-dsg',
    component: require.resolve('./src/templates/using-dsg.js'),
    context: {},
  });
};
```

```ts filename="pages/index.tsx" framework=all
import type { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    defer: true,
    path: '/using-dsg',
    component: require.resolve('./src/templates/using-dsg.js'),
    context: {},
  });
};
```

[See the Gatsby docs on DSG to learn more](https://www.gatsbyjs.com/docs/how-to/rendering-options/using-deferred-static-generation/#introduction).

**To summarize, DSG with Gatsby on Vercel:**

- Allows you to defer non-critical page generation to user request, speeding up build times
- Works out of the box when you deploy on Vercel
- Can yield dramatic speed increases for large sites with content that is infrequently visited

[Learn more about DSG](https://www.gatsbyjs.com/docs/how-to/rendering-options/using-deferred-static-generation/)

## Incremental Static Regeneration

Gatsby supports [Deferred Static Generation](#deferred-static-generation).

The static rendered fallback pages are not generated at build time. This differentiates it from incremental static regeneration (ISR). Instead, a Vercel Function gets invoked upon page request. And the resulting response gets cached for 10 minutes. This is hard-coded and currently not configurable.

See the documentation for [Deferred Static Generation](#deferred-static-generation).

## API routes

You can add API Routes to your Gatsby site using the framework's native support for the `src/api` directory. Doing so will deploy your routes as [Vercel functions](/docs/functions). These Vercel functions can be used to fetch data from external sources, or to add custom endpoints to your application.

The following example demonstrates a basic API Route using Vercel functions:

```js filename="src/api/handler.js" framework=all
export default function handler(request, response) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
```

```ts filename="src/api/handler.ts" framework=all
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
```

To view your route locally, run the following command in your terminal:

```bash filename="terminal"
gatsby develop
```

Then navigate to `http://localhost:8000/api/handler` in your web browser.

### Dynamic API routes

**Vercel does not currently have first-class support for dynamic API routes in Gatsby. For now, using them requires the workaround described in this section.**

To use Gatsby's Dynamic API routes on Vercel, you must:

1. Define your dynamic routes in a `vercel.json` file at the root directory of your project, as shown below:

   ```json filename="vercel.json"
   {
     "$schema": "https://openapi.vercel.sh/vercel.json",
     "rewrites": [
       {
         "source": "/api/blog/:id",
         "destination": "/api/blog/[id]"
       }
     ]
   }
   ```

2. Read your dynamic parameters from `req.query`, as shown below:

   ```js filename="api/blog/[id].js" framework=all
   export default function handler(request, response) {
     console.log(`/api/blog/${request.query.id}`);
     response.status(200).json({
       body: request.body,
       query: request.query,
       cookies: request.cookies,
     });
   }
   ```

   ```ts filename="api/blog/[id].ts" framework=all
   import type { VercelRequest, VercelResponse } from '@vercel/node';

   export default function handler(
     request: VercelRequest & { params: { id: string } },
     response: VercelResponse,
   ) {
     console.log(`/api/blog/${request.query.id}`);
     response.status(200).json({
       body: request.body,
       query: request.query,
       cookies: request.cookies,
     });
   }
   ```

> **💡 Note:** Although typically you'd access the dynamic parameter with `request.param`
> when using Gatsby, you must use `request.query` on Vercel.

### Splat API routes

Splat API routes are dynamic wildcard routes that will match anything after the splat (`[...]`). **Vercel does not currently have first-class support for splat API routes in Gatsby. For now, using them requires the workaround described in this section.**

To use Gatsby's splat API routes on Vercel, you must:

1. Define your splat routes in a `vercel.json` file at the root directory of your project, as shown below:

   ```json filename="vercel.json"
   {
     "$schema": "https://openapi.vercel.sh/vercel.json",
     "rewrites": [
       {
         "source": "/api/products/:path*",
         "destination": "/api/products/[...]"
       }
     ]
   }
   ```

2. Read your dynamic parameters from `req.query.path`, as shown below:

   ```js filename="api/products/[...].js" framework=all
   export default function handler(request, response) {
     console.log(`/api/products/${request.query.path}`);
     response.status(200).json({
       body: request.body,
       query: request.query,
       cookies: request.cookies,
     });
   }
   ```

   ```ts filename="api/products/[...].ts" framework=all
   import type { VercelRequest, VercelResponse } from '@vercel/node';

   export default function handler(
     request: VercelRequest & { params: { path: string } },
     response: VercelResponse,
   ) {
     console.log(`/api/products/${request.query.path}`);
     response.status(200).json({
       body: request.body,
       query: request.query,
       cookies: request.cookies,
     });
   }
   ```

**To summarize, API Routes with Gatsby on Vercel:**

- Scale to zero when not in use
- Scale automatically with traffic increases
- Can be tested as Vercel Functions in your local environment

[Learn more about Gatsby API Routes](https://www.gatsbyjs.com/docs/reference/routing/creating-routes/)

## Routing Middleware

Gatsby does not have native framework support for using [Routing Middleware](/docs/routing-middleware).

However, you can still use Routing Middleware with your Gatsby site by creating a `middeware.js` or `middeware.ts` file in your project's root directory.

The following example demonstrates middleware that adds security headers to responses sent to users who visit the `/example` route in your Gatsby application:

```js filename="middleware.js" framework=all
import { next } from '@vercel/functions';

export const config = {
  // Only run the middleware on the example route
  matcher: '/example',
};

export default function middleware(request) {
  return next({
    headers: {
      'Referrer-Policy': 'origin-when-cross-origin',
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-DNS-Prefetch-Control': 'on',
      'Strict-Transport-Security':
        'max-age=31536000; includeSubDomains; preload',
    },
  });
}
```

```ts filename="middleware.ts" framework=all
import { next } from '@vercel/functions';

export const config = {
  // Only run the middleware on the example route
  matcher: '/example',
};

export default function middleware(request: Request): Response {
  return next({
    headers: {
      'Referrer-Policy': 'origin-when-cross-origin',
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-DNS-Prefetch-Control': 'on',
      'Strict-Transport-Security':
        'max-age=31536000; includeSubDomains; preload',
    },
  });
}
```

**To summarize, Routing Middleware with Gatsby on Vercel:**

- Executes before a request is processed on a site, allowing you to modify responses to user requests
- Runs on *all* requests, but can be scoped to specific paths [through a `matcher` config](/docs/routing-middleware/api#match-paths-based-on-custom-matcher-config)
- Uses our lightweight Edge Runtime to keep costs low and responses fast

[Learn more about Routing Middleware](/docs/routing-middleware)

## Speed Insights

[Core Web Vitals](/docs/speed-insights) are supported for Gatsby v4+ projects with no initial configuration necessary.

When you deploy a Gatsby v4+ site on Vercel, we automatically install the `@vercel/gatsby-plugin-vercel-analytics` package and add it to the `plugins` array in your `gatsby-config.js` file.

**We do not recommend installing the Gatsby analytics plugin yourself**.

To access your Core Web Vitals data, you must enable Vercel analytics in your project's dashboard. [See our quickstart guide to do so now](/docs/analytics/quickstart).

**To summarize, using Speed Insights with Gatsby on Vercel:**

- Enables you to track traffic performance metrics, such as [First Contentful Paint](/docs/speed-insights/metrics#first-contentful-paint-fcp), or [First Input Delay](/docs/speed-insights/metrics#first-input-delay-fid)
- Enables you to view performance analytics by page name and URL for more granular analysis
- Shows you [a score for your app's performance](/docs/speed-insights/metrics#how-the-scores-are-determined) on each recorded metric, which you can use to track improvements or regressions

[Learn more about Speed Insights](/docs/speed-insights)

## Image Optimization

While Gatsby [does provide an Image plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-image), it is not currently compatible with Vercel Image Optimization.

If this is something your team is interested in, [please contact our sales team](/contact/sales).

[Learn more about Image Optimization](/docs/image-optimization)

## More benefits

See [our Frameworks documentation page](/docs/frameworks) to learn about the benefits available to **all** frameworks when you deploy on Vercel.

## More resources

- [Build Output API](/docs/build-output-api/v3)

title: "Frontends on Vercel"
description: "Vercel supports a wide range of the most popular frontend frameworks, optimizing how your application builds and runs no matter what tooling you use."
last\_updated: "2026-03-08T05:03:14.876Z"
source: "https://vercel.com/docs/frameworks/frontend"
