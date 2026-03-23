# 103 Early Hints

[Skip to content](#%5Ftop)

### Tags

[ Middleware ](https://developers.cloudflare.com/search/?tags=Middleware)[ Headers ](https://developers.cloudflare.com/search/?tags=Headers)[ JavaScript ](https://developers.cloudflare.com/search/?tags=JavaScript)[ TypeScript ](https://developers.cloudflare.com/search/?tags=TypeScript)[ Python ](https://developers.cloudflare.com/search/?tags=Python)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/workers/examples/103-early-hints.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# 103 Early Hints

**Last reviewed:**  over 3 years ago

Allow a client to request static assets while waiting for the HTML response.

If you want to get started quickly, click on the button below.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/docs-examples/tree/main/workers/103-early-hints)

This creates a repository in your GitHub account and deploys the application to Cloudflare Workers.

`103` Early Hints is an HTTP status code designed to speed up content delivery. When enabled, Cloudflare can cache the `Link` headers marked with preload and/or preconnect from HTML pages and serve them in a `103` Early Hints response before reaching the origin server. Browsers can use these hints to fetch linked assets while waiting for the origin’s final response, dramatically improving page load speeds.

To ensure Early Hints are enabled on your zone:

1. In the Cloudflare dashboard, go to the **Speed settings** page.\
   [ Go to **Settings** ](https://dash.cloudflare.com/?to=/:account/:zone/speed/optimization)
2. Go to **Content Optimization**.
3. Enable the **Early Hints** toggle to on.

You can return `Link` headers from a Worker running on your zone to speed up your page load times.

- [  JavaScript ](#tab-panel-7782)
- [  TypeScript ](#tab-panel-7783)
- [  Python ](#tab-panel-7784)
- [  Hono ](#tab-panel-7785)

JavaScript

```

const CSS = "body { color: red; }";

const HTML = `

<!doctype html>

<html lang="en">

<head>

    <meta charset="utf-8">

    <title>Early Hints test</title>

    <link rel="stylesheet" href="https://developers.cloudflare.com/test.css">

</head>

<body>

    <h1>Early Hints test page</h1>

</body>

</html>

`;


export default {

  async fetch(req) {

    // If request is for test.css, serve the raw CSS

    if (/test\.css$/.test(req.url)) {

      return new Response(CSS, {

        headers: {

          "content-type": "text/css",

        },

      });

    } else {

      // Serve raw HTML using Early Hints for the CSS file

      return new Response(HTML, {

        headers: {

          "content-type": "text/html",

          link: "</test.css>; rel=preload; as=style",

        },

      });

    }

  },

};


```

JavaScript

```

const CSS = "body { color: red; }";

const HTML = `

<!doctype html>

<html lang="en">

<head>

    <meta charset="utf-8">

    <title>Early Hints test</title>

    <link rel="stylesheet" href="https://developers.cloudflare.com/test.css">

</head>

<body>

    <h1>Early Hints test page</h1>

</body>

</html>

`;


export default {

  async fetch(req): Promise<Response> {

    // If request is for test.css, serve the raw CSS

    if (/test\.css$/.test(req.url)) {

      return new Response(CSS, {

        headers: {

          "content-type": "text/css",

        },

      });

    } else {

      // Serve raw HTML using Early Hints for the CSS file

      return new Response(HTML, {

        headers: {

          "content-type": "text/html",

          link: "</test.css>; rel=preload; as=style",

        },

      });

    }

  },

} satisfies ExportedHandler;


```

Python

```

import re

from workers import Response, WorkerEntrypoint


CSS = "body { color: red; }"

HTML = """

<!doctype html>

<html lang="en">

<head>

    <meta charset="utf-8">

    <title>Early Hints test</title>

    <link rel="stylesheet" href="https://developers.cloudflare.com/test.css">

</head>

<body>

    <h1>Early Hints test page</h1>

</body>

</html>

"""


class Default(WorkerEntrypoint):

    async def fetch(self, request):

        if re.search("test.css", request.url):

            headers = {"content-type": "text/css"}

            return Response(CSS, headers=headers)

        else:

            headers = {"content-type": "text/html","link": "</test.css>; rel=preload; as=style"}

        return Response(HTML, headers=headers)


```

TypeScript

```

import { Hono } from "hono";


const app = new Hono();


const CSS = "body { color: red; }";

const HTML = `

<!doctype html>

<html lang="en">

<head>

    <meta charset="utf-8">

    <title>Early Hints test</title>

    <link rel="stylesheet" href="https://developers.cloudflare.com/test.css">

</head>

<body>

    <h1>Early Hints test page</h1>

</body>

</html>

`;


// Serve CSS file

app.get("/test.css", (c) => {

  return c.body(CSS, {

    headers: {

      "content-type": "text/css",

    },

  });

});


// Serve HTML with early hints

app.get("*", (c) => {

  return c.html(HTML, {

    headers: {

      link: "</test.css>; rel=preload; as=style",

    },

  });

});


export default app;


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/workers/","name":"Workers"}},{"@type":"ListItem","position":3,"item":{"@id":"/workers/examples/","name":"Examples"}},{"@type":"ListItem","position":4,"item":{"@id":"/workers/examples/103-early-hints/","name":"103 Early Hints"}}]}
```
