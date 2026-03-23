# Edge Middleware

> **⚠️ Warning:** Edge Middleware is deprecated in favor of [Routing
> Middleware](/docs/routing-middleware). We recommend using Routing Middleware
> for new projects. For more information, see the [Routing Middleware
> documentation](/docs/routing-middleware).

Edge Middleware is **code that executes *before* a request is processed on a site**. Based on the request, you can modify the response. Because it runs before the cache, using Middleware is an effective way of [providing personalization](/resources/edge-middleware-experiments-personalization-performance) to statically generated content. Depending on the incoming request, you can execute custom logic, rewrite, redirect, add headers and more, before returning a response.

![Image](`/docs-assets/static/docs/concepts/functions/edge-middleware-light.png`)

Middleware uses the [Edge runtime](/docs/functions/runtimes/edge), which exposes and extends a subset of Web Standard APIs such `FetchEvent`, `Response`, and `Request`. To learn more about writing Middleware, see the [Middleware API](/docs/routing-middleware/api) docs.

> **💡 Note:** You can use the Node.js runtime (as an experimental feature) to run
> middleware. For more details, see the [Node.js
> runtime](/docs/functions/runtimes/node-js#using-node.js-with-middleware)
> documentation.

## Create Edge Middleware

You can use Edge Middleware with **any framework**. To add Middleware to your app, you need to create a  file at your project's root directory.

> For \['nextjs', 'nextjs-app']:

## Logging

Edge Middleware has full support for the [`console`](https://developer.mozilla.org/docs/Web/API/Console) API, including `time`, `debug`, `timeEnd`, etc. Logs will appear inside your Vercel project by clicking **View Functions Logs** next to the deployment.

## Using a database with Edge Middleware

If your Edge Middleware depends on a database far away from one of [our regions](/docs/regions), the overall latency of API requests could be higher than expected. To avoid this issue, use a global storage solution. Vercel provides [Edge Config](/docs/edge-config) as a native global storage solution. You can also explore the storage category of the [Vercel Marketplace](/marketplace?category=storage) to learn which third-party storage options might be best for you.

title: "Edit Mode"
description: "Discover how Vercel"
last\_updated: "2026-03-23T09:40:09.398Z"
source: "https://vercel.com/docs/edit-mode"
