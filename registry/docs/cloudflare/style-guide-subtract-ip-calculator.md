# Subtract IP calculator

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/components/subtract-ip-calculator.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Subtract IP calculator

The `SubtractIPCalculator` component is used `6` times on `5` pages.

See all examples of pages that use SubtractIPCalculator

Used **6** times.

**Pages**

- [/cloudflare-one/networks/routes/reserved-ips/](https://developers.cloudflare.com/cloudflare-one/networks/routes/reserved-ips/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/cloudflare-one/networks/routes/reserved-ips.mdx)
- [/style-guide/components/subtract-ip-calculator/](https://developers.cloudflare.com/style-guide/components/subtract-ip-calculator/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/style-guide/components/subtract-ip-calculator.mdx)

**Partials**

- [src/content/partials/cloudflare-one/tunnel/deployment-guides/cloud-private-ip.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/cloudflare-one/tunnel/deployment-guides/cloud-private-ip.mdx)
- [src/content/partials/cloudflare-one/tunnel/warp-to-tunnel-route-ips.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/cloudflare-one/tunnel/warp-to-tunnel-route-ips.mdx)
- [src/content/partials/cloudflare-one/warp/add-split-tunnels-route.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/cloudflare-one/warp/add-split-tunnels-route.mdx)

## Import

```

import SubtractIPCalculator from "~/components/SubtractIPCalculator.tsx";


```

## Usage

**Base CIDR:** **Subtracted CIDRs:**

Calculate

```

import SubtractIPCalculator from "~/components/SubtractIPCalculator.tsx";


<SubtractIPCalculator client:load />


```

## `<SubtractIPCalculator>` Props

### `defaults`

**type:** `object`

An optional object containing `base` (`string`) and `subtract` (`string[]`) properties, to set default inputs.

**example:**

**Base CIDR:** **Subtracted CIDRs:**

Calculate

```

import SubtractIPCalculator from "~/components/SubtractIPCalculator.tsx";


<SubtractIPCalculator

  client:load

  defaults={{

    base: "10.0.0.0/8",

    subtract: ["10.0.0.0/24", "10.32.0.0/11"]

  }}

/>


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/components/","name":"Components"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/components/subtract-ip-calculator/","name":"Subtract IP calculator"}}]}
```
