# URL normalization examples

[Skip to content](#%5Ftop)

Copy page

# URL normalization examples

The following table shows how different [URL normalization settings](https://developers.cloudflare.com/rules/normalization/settings/) affect request URLs before they pass to other Cloudflare features and to the origin server:

| Incoming URL                | Normalization type | Normalize incoming URLs | Normalize URLs to origin | URL at Cloudflare's network  | URL passed to origin server  |
| --------------------------- | ------------------ | ----------------------- | ------------------------ | ---------------------------- | ---------------------------- |
| www.example.com/hello       | (any)              | *Off*                   | *Off*                    | www.example.com/hello        | www.example.com/hello        |
| www.example.com/hello       | (any)              | *On*                    | *Off*                    | www.example.com/hello        | www.example.com/hello        |
| www.example.com/hello       | (any)              | *On*                    | *On*                     | www.example.com/hello        | www.example.com/hello        |
| example.com/%68ello         | (any)              | *Off*                   | *Off*                    | example.com/%68ello          | example.com/%68ello          |
| example.com/%68ello         | (any)              | *On*                    | *Off*                    | example.com/hello            | example.com/%68ello          |
| example.com/%68ello         | (any)              | *On*                    | *On*                     | example.com/hello            | example.com/hello            |
| example.com/%68ello//pa\th | *RFC-3986*         | *Off*                   | *Off*                    | example.com/%68ello//pa\th  | example.com/%68ello//pa\th  |
| example.com/%68ello//pa\th | *RFC-3986*         | *On*                    | *Off*                    | example.com/hello//pa%5Cth   | example.com/%68ello//pa\th  |
| example.com/%68ello//pa\th | *RFC-3986*         | *On*                    | *On*                     | example.com/hello//pa%5Cth   | example.com/hello//pa%5Cth   |
| example.com/%68ello//pa\th | *Cloudflare*       | *Off*                   | *Off*                    | example.com/%68ello//pa\th  | example.com/%68ello//pa\th  |
| example.com/%68ello//pa\th | *Cloudflare*       | *On*                    | *Off*                    | example.com/hello/pa/th      | example.com/%68ello//pa\th  |
| example.com/%68ello//pa\th | *Cloudflare*       | *On*                    | *On*                     | example.com/hello/pa/th      | example.com/hello/pa/th      |
| example.com/hello//../path  | *RFC-3986*         | *On*                    | *On*                     | example.com/hello/path       | example.com/hello/path       |
| example.com/hello//../path  | *Cloudflare*       | *On*                    | *On*                     | example.com/path             | example.com/path             |
| example.com/hello/\\../path | *RFC-3986*         | *On*                    | *On*                     | example.com/hello/%5C../path | example.com/hello/%5C../path |
| example.com/hello/\\../path | *Cloudflare*       | *On*                    | *On*                     | example.com/path             | example.com/path             |

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/rules/","name":"Rules"}},{"@type":"ListItem","position":3,"item":{"@id":"/rules/normalization/","name":"URL normalization"}},{"@type":"ListItem","position":4,"item":{"@id":"/rules/normalization/examples/","name":"URL normalization examples"}}]}
```
