# Stream Player

[Skip to content](#%5Ftop)

### Tags

[ Playback ](https://developers.cloudflare.com/search/?tags=Playback)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/stream/examples/stream-player.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Stream Player

**Last reviewed:**  over 3 years ago

Example of video playback with the Cloudflare Stream Player

```

<html>

  <head> </head>

  <body>

    <div style="position: relative; padding-top: 56.25%;">

    <iframe

      src="https://customer-f33zs165nr7gyfy4.cloudflarestream.com/6b9e68b07dfee8cc2d116e4c51d6a957/iframe?poster=https%3A%2F%2Fcustomer-f33zs165nr7gyfy4.cloudflarestream.com%2F6b9e68b07dfee8cc2d116e4c51d6a957%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"

      style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"

      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"

      allowfullscreen="true"

    ></iframe>

    </div>

  </body>

</html>


```

Refer to the [Using the Stream Player](https://developers.cloudflare.com/stream/viewing-videos/using-the-stream-player/) for more information.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/stream/","name":"Stream"}},{"@type":"ListItem","position":3,"item":{"@id":"/stream/examples/","name":"Examples"}},{"@type":"ListItem","position":4,"item":{"@id":"/stream/examples/stream-player/","name":"Stream Player"}}]}
```
