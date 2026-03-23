# dash.js

[Skip to content](#%5Ftop)

### Tags

[ Playback ](https://developers.cloudflare.com/search/?tags=Playback)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/stream/examples/dash-js.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# dash.js

**Last reviewed:**  over 3 years ago

Example of video playback with Cloudflare Stream and the DASH reference player (dash.js)

```

<html>

  <head>

    <script src="https://cdn.dashjs.org/latest/dash.all.min.js"></script>

  </head>

  <body>

    <div>

      <div class="code">

        <video

          data-dashjs-player=""

          autoplay=""

          src="https://customer-f33zs165nr7gyfy4.cloudflarestream.com/6b9e68b07dfee8cc2d116e4c51d6a957/manifest/video.mpd"

          controls="true"

        ></video>

      </div>

    </div>

  </body>

</html>


```

Refer to the [dash.js documentation ↗](https://github.com/Dash-Industry-Forum/dash.js/) for more information.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/stream/","name":"Stream"}},{"@type":"ListItem","position":3,"item":{"@id":"/stream/examples/","name":"Examples"}},{"@type":"ListItem","position":4,"item":{"@id":"/stream/examples/dash-js/","name":"dash.js"}}]}
```
