# hls.js

[Skip to content](#%5Ftop)

### Tags

[ Playback ](https://developers.cloudflare.com/search/?tags=Playback)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/stream/examples/hls-js.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# hls.js

**Last reviewed:**  over 3 years ago

Example of video playback with Cloudflare Stream and the HLS reference player (hls.js)

```

<html>

  <head>

    <script src="//cdn.jsdelivr.net/npm/hls.js@latest"></script>

  </head>

  <body>

    <video id="video"></video>

    <script>

      if (Hls.isSupported()) {

        const video = document.getElementById('video');

        const hls = new Hls();

        hls.attachMedia(video);

        hls.on(Hls.Events.MEDIA_ATTACHED, () => {

          hls.loadSource(

            'https://customer-f33zs165nr7gyfy4.cloudflarestream.com/6b9e68b07dfee8cc2d116e4c51d6a957/manifest/video.m3u8'

          );

        });

      }


      video.play();

    </script>

  </body>

</html>


```

Refer to the [hls.js documentation ↗](https://github.com/video-dev/hls.js/blob/master/docs/API.md) for more information.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/stream/","name":"Stream"}},{"@type":"ListItem","position":3,"item":{"@id":"/stream/examples/","name":"Examples"}},{"@type":"ListItem","position":4,"item":{"@id":"/stream/examples/hls-js/","name":"hls.js"}}]}
```
