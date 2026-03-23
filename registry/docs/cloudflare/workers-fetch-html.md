# Fetch HTML

[Skip to content](#%5Ftop)

### Tags

[ JavaScript ](https://developers.cloudflare.com/search/?tags=JavaScript)[ TypeScript ](https://developers.cloudflare.com/search/?tags=TypeScript)[ Python ](https://developers.cloudflare.com/search/?tags=Python)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/workers/examples/fetch-html.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Fetch HTML

**Last reviewed:**  about 2 years ago

Send a request to a remote server, read HTML from the response, and serve that HTML.

If you want to get started quickly, click on the button below.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/docs-examples/tree/main/workers/fetch-html)

This creates a repository in your GitHub account and deploys the application to Cloudflare Workers.

- [  JavaScript ](#tab-panel-7881)
- [  TypeScript ](#tab-panel-7882)
- [  Python ](#tab-panel-7883)
- [  Hono ](#tab-panel-7884)

JavaScript

```

export default {

  async fetch(request) {

    /**

     * Replace `remote` with the host you wish to send requests to

     */

    const remote = "https://example.com";


    return await fetch(remote, request);

  },

};


```

[Run Worker in Playground](https://workers.cloudflare.com/playground#LYVwNgLglgDghgJwgegGYHsHALQBM4RwDcABAEbogB2+CAngLzbPYZb6HbW5QDGU2AAwA2AOyiATJICsATgAcsgCwAuFizbAOcLjT4CR4qRLmKlAWABQAYXRUIAU3vYAIlADOMdO6jQ7Kkk08AmISKjhgBwYAIigaBwAPADoAK3do0lQoMCcIqNj45LToq1t7JwhsABU6GAcAuBgYMD4CKDtkFLgANzh3XgRYCABqYHRccAcrK0SvJBJcB1Q4cAgSAG9LEhI+uipeQIcIXgALAAoEBwBHEAd3CABKDa3tkmQAKneX1-eSACUHM04LwHCQAAaXMaOMEkADuvhOJAgJ1BJ28azolDhHkREHQJHcTlwJEuNzuEHcSPQ32272QNN4dnuJIcUNBDBI0ROEAgMHcKmQyESEWaDiSjOAGUsNMuEBACCoO1hcF8h2O50h6EcABoWWT7g8iC8AL7ayzGohWdTMTTaXQ8fhCMSSGQKZSlOyOZxuTzeXztKgBILaUjhSIxSKEbQZQLZXLh6JkMDoMglGyeirVWr1HZNFq8NodNJ2aaWdbRYAqqgAfTGExy0RUBUWRXSxqt1ttIXt+idRldZmYViAA)

TypeScript

```

export default {

  async fetch(request: Request): Promise<Response> {

    /**

     * Replace `remote` with the host you wish to send requests to

     */

    const remote = "https://example.com";


    return await fetch(remote, request);

  },

};


```

Python

```

from workers import WorkerEntrypoint

from js import fetch


class Default(WorkerEntrypoint):

    async def fetch(self, request):

        # Replace `remote` with the host you wish to send requests to

        remote = "https://example.com"

        return await fetch(remote, request)


```

TypeScript

```

import { Hono } from "hono";


const app = new Hono();


app.all("*", async (c) => {

  /**

   * Replace `remote` with the host you wish to send requests to

   */

  const remote = "https://example.com";


  // Forward the request to the remote server

  return await fetch(remote, c.req.raw);

});


export default app;


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/workers/","name":"Workers"}},{"@type":"ListItem","position":3,"item":{"@id":"/workers/examples/","name":"Examples"}},{"@type":"ListItem","position":4,"item":{"@id":"/workers/examples/fetch-html/","name":"Fetch HTML"}}]}
```
