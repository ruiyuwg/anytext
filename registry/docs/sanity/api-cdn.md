# API CDN

Sanity Content Lake provides two APIs for content delivery:

1. `api.sanity.io`: the uncached API. This is the default and will always give you the freshest data, but requests will be slower because they need to reach our back end on every request. Requests are also more costly because they will trigger more computation on our servers.
2. `apicdn.sanity.io`: the CDN-distributed, cached API, an opt-in feature that will give you very fast responses to requests that have been cached. We encourage most users to use this API for their front ends if you expose your API to end users. You are better off using the live uncached API for static builds to get the latest version.

To use the API CDN, simply use `apicdn.sanity.io` instead of `api.sanity.io`. Most clients provide a `useCdn` option that makes this switch seamless.

> \[!WARNING]
> Gotcha
> The API CDN supports `/<version>/data/query` for [GROQ queries](https://www.sanity.io/docs/http-reference/query) and `/<version>/graphql` for [GraphQL queries](https://www.sanity.io/docs/content-lake/graphql).

> \[!TIP]
> Protip
> Make sure to pick the right tool for your workload.
> If you are going to fetch content from a browser, we recommend the API CDN so your requests can scale.
> When building integrations with Sanity or responding to webhooks, we recommend using the API to capture the latest saved content.

## Cache Policy

The API CDN is primarily meant to cache query results for end users:

- We cache GET, HEAD, and OPTION requests.
- We cache POST for `/graphql` and `/data/query` as these endpoints are read-only.
- Maximum HTTP POST size is 300 KB.
- We reject all other POST requests since they can contain mutations.
- Responses larger than 10 MB are not cached.
- Non-200 responses are not cached.
- Cookies are ignored when identifying cache hits.
- We cache authenticated requests. Caching is segmented for each unique authentication token.
- Listeners, including the Live Content API, are redirected to the API and do not query cached content.

During periods of high content traffic (mutations or requests), we prioritize the cache invalidation queue to ensure consistent caching windows for customers with our High Frequency CDN.

If Sanity's Content Lake is unavailable, the API CDN will return the last cached content for up to two hours.

All official clients will automatically fall back to using the live API where appropriate.

> \[!TIP]
> Protip
> Caches are based on the URLs, including query parameters and other URL fragments, of your requests. Optimize your performance by ensuring that your request URLs will be shared across your traffic and will benefit from caching.

## Locations

Sanity currently has CDNs for the API in these locations:

- Asia- Mumbai, India

- Oceania- Sydney, Australia

- Europe- Saint-Ghislain, Belgium

- South America- São Paulo, Brazil

- North America- Oregon, United States

- Iowa, United States

- Northern Virginia, United States

In addition, we utilize a short-lived global CDN in front of our own CDN. This extra CDN has points of presence in multiple locations on all continents. The short-lived global CDN does not cache private datasets or queries using the POST method. Note that we still recommend using the CDN when requesting data from both public and private datasets.

## IP addresses in use

We maintain a unified list of all IPs that may be useful to permit in instances where you have egress filtering enabled. See the [IP addresses used by Sanity document](https://www.sanity.io/docs/content-lake/ip-addresses) for details.

#### Related articles

[Add live content to your application](https://www.sanity.io/docs/developer-guides/live-content-guide)

[Technical limits](https://www.sanity.io/docs/content-lake/technical-limits)

[Getting started with @sanity/client](https://www.sanity.io/docs/apis-and-sdks/js-client-getting-started)
