# CURL

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/components/curl.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# CURL

The `CURL` component is used `9` times on `6` pages.

See all examples of pages that use CURL

Used **9** times.

**Pages**

- [/magic-transit/network-health/run-endpoint-health-checks/](https://developers.cloudflare.com/magic-transit/network-health/run-endpoint-health-checks/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/magic-transit/network-health/run-endpoint-health-checks.mdx)

**Partials**

- [src/content/partials/networking-services/cloudflare-wan/custom-ike-id-ipsec.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/networking-services/cloudflare-wan/custom-ike-id-ipsec.mdx)
- [src/content/partials/networking-services/mconn/network-options/app-aware-policies/breakout-prioritized.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/networking-services/mconn/network-options/app-aware-policies/breakout-prioritized.mdx)
- [src/content/partials/networking-services/mconn/network-options/app-aware-policies/netflow.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/networking-services/mconn/network-options/app-aware-policies/netflow.mdx)
- [src/content/partials/networking-services/routing/configure-tunnels.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/networking-services/routing/configure-tunnels.mdx)
- [src/content/partials/networking-services/tunnel-health/update-tunnel-health-checks-frequency.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/networking-services/tunnel-health/update-tunnel-health-checks-frequency.mdx)

The `CURL` component is used to display a cURL command for making HTTP requests.

## Import

```

import { CURL } from "~/components";


```

## Usage

Terminal window

```

curl "https://httpbin.org/anything?foo=bar&bar=baz&bar=qux" \

  --request POST \

  --json '{

    "key": "va'\''l'\''ue"

  }'


```

Terminal window

```

curl "https://httpbin.org/anything" \

  --request POST \

  --form "key=value"


```

```

import { CURL } from "~/components";


<CURL

  url="https://httpbin.org/anything"

  method="POST"

  json={{

    key: "va'l'ue",

  }}

  query={{

    foo: "bar",

    bar: ["baz", "qux"],

  }}

  code={{

    mark: "value",

  }}

/>


<CURL

  url="https://httpbin.org/anything"

  method="POST"

  form={{

    key: "value",

  }}

  code={{

    mark: "value",

  }}

/>


```

## `<CURL>` Props

### `url`

**required**

**type:** `string`

The URL to make the request to.

### `method`

**type:** `"GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "PATCH"`

**default:** `"GET"`

The HTTP method to use for the request.

### `headers`

**type:** `Record<string, string>`

The headers to include in the request.

### `json`

**type:** `Record<string, any> | Record<string, any>[]`

JSON data to include in the request.

### `form`

**type:** `Record<string, any>`

The FormData payload to send.

### `query`

**type:** `Record<string, string | string[]>`

URL query parameters to append to the request URL.

### `code`

**type:** `object`

An object of Expressive Code props, the following props are available:

- [Base Props ↗](https://expressive-code.com/key-features/code-component/#available-props)
- [Line Marker Props ↗](https://expressive-code.com/key-features/text-markers/#props)
- [Collapsible Sections Props ↗](https://expressive-code.com/plugins/collapsible-sections/#props)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/components/","name":"Components"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/components/curl/","name":"CURL"}}]}
```
