# Load Zaraz manually

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/zaraz/advanced/load-zaraz-manually.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Load Zaraz manually

By default, if your domain is proxied by Cloudflare, Zaraz will automatically inject itself to HTML pages in your site. This makes it easier to get up and running quickly. However, you might want to load Zaraz manually, for example to test Zaraz on specific pages first.

After you turn off the [Auto-inject script](https://developers.cloudflare.com/zaraz/reference/settings/#auto-inject-script) option, you will have to manually include the Zaraz script in your HTML, immediately before the `</head>` tag closes. The path to your script would be `/cdn-cgi/zaraz/i.js`. Your script tag should look like this:

```

<script src="/cdn-cgi/zaraz/i.js" referrerpolicy="origin"></script>


```

With the script, your page HTML should be similar to the following:

```

<html>

  <head>

    ….

    <script src="/cdn-cgi/zaraz/i.js" referrerpolicy="origin"></script>

  </head>

  <body>

    …

  </body>

</html>


```

Note that if your site is not proxied by Cloudflare, you should refer to the section about [Using Zaraz on domains not proxied by Cloudflare](https://developers.cloudflare.com/zaraz/advanced/domains-not-proxied/).

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/zaraz/","name":"Zaraz"}},{"@type":"ListItem","position":3,"item":{"@id":"/zaraz/advanced/","name":"Advanced options"}},{"@type":"ListItem","position":4,"item":{"@id":"/zaraz/advanced/load-zaraz-manually/","name":"Load Zaraz manually"}}]}
```
