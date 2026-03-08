# URL Format

Take this generic document query URL:

```
https://zp7mbokg.api.sanity.io/v2021-06-07/data/query/production?query=*[0]
```

Each project has its own private hostname, which is always `<projectId>.api.sanity.io` for requests and `<projectId>.apicdn.sanity.io` for the [API CDN (cache) endpoint](https://www.sanity.io/docs/content-lake/api-cdn). The path (what comes after the hostname) is always preceded by the [API version](https://www.sanity.io/docs/content-lake/api-versioning) (you can set the present ISO date, `YYYY-MM-DD`, for the latest version) then the path to the API endpoint. So, to sum it up, these are the URL prefixes:

- API: `https://<projectId>.api.sanity.io/v<YYYY-MM-DD>/<path>`
- API CDN: `https://<projectId>.apicdn.sanity.io/v<YYYY-MM-DD>/<path>`

In the rest of this document we will generally only refer to the `<path>` part of the URL.

> \[!NOTE]
> Note about the API CDN
> The API CDN only supports the `/data/query` path—its purpose being to cache query results across the globe for the benefit of your end users.

## How do I find my project ID?

In a configured studio, you find the project ID in the `sanity.json` file at the root of your project. Otherwise, you can always find it by locating your project on <https://manage.sanity.io> or running `sanity debug` in the terminal in your studio folder.

## URL encoding

For clarity, we have opted to write URLs with their component in cleartext. In actual use they will all have to be encoded (using [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) or equivalent) so that this:

```text
https://zp7mbokg.api.sanity.io/v2021-06-07/data/query/production?query=*[_id == $id]&$id="myId"
```

Becomes this:

```text
https://zp7mbokg.api.sanity.io/v2021-06-07/data/query/production?query=*%5B_id%20%3D%3D%20%24id%5D&%24id=%22myId%22
```

> \[!WARNING]
> Gotcha
> If you encode a URL that contains more than just a `query` string (i.e., it includes params as well), [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) will encode the `&` between `query` and your params, which is probably not what you want. Consider encoding the query and parameter strings separately or using [encodeURI()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) instead.
