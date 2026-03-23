# Width

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/components/width.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Width

The `Width` component is used `5` times on `3` pages.

See all examples of pages that use Width

Used **5** times.

**Pages**

- [/cloudflare-one/team-and-resources/devices/cloudflare-one-client/configure/modes/device-information-only/](https://developers.cloudflare.com/cloudflare-one/team-and-resources/devices/cloudflare-one-client/configure/modes/device-information-only/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/cloudflare-one/team-and-resources/devices/cloudflare-one-client/configure/modes/device-information-only.mdx)

**Partials**

- [src/content/partials/networking-services/mnm-magic-transit-integration.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/networking-services/mnm-magic-transit-integration.mdx)
- [src/content/partials/style-guide/llms-txt.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/style-guide/llms-txt.mdx)

This component can be used to constrain the width of content, such as text or images.

## Import

```

import { Width } from "~/components";


```

## Usage

This content will take up 75% of the container width

This content will take up 50% of the container width

This content will take up 25% of the container width

This content will take up 25% of the container width and be centered

```

import { Width } from "~/components";


<Width size="large">This content will take up 75% of the container width</Width>


<Width size="medium">

  This content will take up 50% of the container width

</Width>


<Width size="small">This content will take up 25% of the container width</Width>


<Width size="small" center>

  This content will take up 25% of the container width and be centered

</Width>


```

## `<Width>` Props

### `size`

**required**

**type:** `"large" | "medium" | "small"`

Controls the width of the container:

- `large`: 75% of container width
- `medium`: 50% of container width
- `small`: 25% of container width

### `center`

**type:** `boolean`

Whether to horizontally center the content.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/components/","name":"Components"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/components/width/","name":"Width"}}]}
```
