[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/workers/testing/miniflare/developing/live-reload.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Live Reload

Miniflare automatically refreshes your browser when your Worker script changes when `liveReload` is set to `true`.

JavaScript

```

const mf = new Miniflare({

  liveReload: true,

});


```

Miniflare will only inject the `<script>` tag required for live-reload at the end of responses with the `Content-Type` header set to `text/html`:

JavaScript

```

export default {

  fetch() {

    const body = `

      <!DOCTYPE html>

      <html>

      <body>

        <p>Try update me!</p>

      </body>

      </html>

    `;


    return new Response(body, {

      headers: { "Content-Type": "text/html; charset=utf-8" },

    });

  },

};


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/workers/","name":"Workers"}},{"@type":"ListItem","position":3,"item":{"@id":"/workers/testing/","name":"Testing"}},{"@type":"ListItem","position":4,"item":{"@id":"/workers/testing/miniflare/","name":"Miniflare"}},{"@type":"ListItem","position":5,"item":{"@id":"/workers/testing/miniflare/developing/","name":"Developing"}},{"@type":"ListItem","position":6,"item":{"@id":"/workers/testing/miniflare/developing/live-reload/","name":"Live Reload"}}]}
```
