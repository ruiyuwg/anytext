# Inline badge

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/components/inline-badge.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Inline badge

The `InlineBadge` component is used `7` times on `7` pages.

See all examples of pages that use InlineBadge

Used **7** times.

**Pages**

- [/agents/api-reference/codemode/](https://developers.cloudflare.com/agents/api-reference/codemode/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/agents/api-reference/codemode.mdx)
- [/cloudflare-one/setup/replace-vpn/network-to-network/](https://developers.cloudflare.com/cloudflare-one/setup/replace-vpn/network-to-network/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/cloudflare-one/setup/replace-vpn/network-to-network.mdx)
- [/ddos-protection/about/attack-coverage/](https://developers.cloudflare.com/ddos-protection/about/attack-coverage/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/ddos-protection/about/attack-coverage.mdx)
- [/ssl/edge-certificates/geokey-manager/setup/](https://developers.cloudflare.com/ssl/edge-certificates/geokey-manager/setup/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/ssl/edge-certificates/geokey-manager/setup.mdx)
- [/stream/stream-live/start-stream-live/](https://developers.cloudflare.com/stream/stream-live/start-stream-live/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/stream/stream-live/start-stream-live.mdx)
- [/stream/viewing-videos/using-the-stream-player/](https://developers.cloudflare.com/stream/viewing-videos/using-the-stream-player/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/stream/viewing-videos/using-the-stream-player/index.mdx)
- [/workers/wrangler/configuration/](https://developers.cloudflare.com/workers/wrangler/configuration/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/workers/wrangler/configuration.mdx)

**Partials**

Recommendation: Avoid inline badges

Our current recommendation is to avoid inline badges, since they may hurt readability.

Guidelines:

- Mention beta/alpha/early access in the feature's main documentation page (use the [](https://developers.cloudflare.com/style-guide/components/badges/) component for this purpose).
- If an additional reference is needed in the middle of the text, use "(beta)", with no special formatting, after the feature name.
- For instructions related to the feature (such as instructions on turning the feature on or off), you may mention again it's in beta, and also include "(beta)" in the side nav.

## Component

To adopt this styling in a React component, apply the `sl-badge` class to a `span` element.

### Alpha Alpha

### Beta Beta

### Deprecated Deprecated

### Early Access Early Access

### Legacy Legacy

### Default Default

```

import { InlineBadge } from '~/components';


### Alpha <InlineBadge preset="alpha" />


### Beta <InlineBadge preset="beta" />


### Deprecated <InlineBadge preset="deprecated" />


### Early Access <InlineBadge preset="early-access" />


### Legacy <InlineBadge preset="legacy" />


### Default <InlineBadge text="Default" />


```

## Inputs

Either `preset` or `text` and `variant` must be specified.

### Presets

- `alpha`
  - **Text**: `Alpha`
  - **Variant** `success`
- `beta`
  - **Text**: `Beta`
  - **Variant** `caution`
- `deprecated`
  - **Text**: `Deprecated`
  - **Variant** `danger`
- `early-access`
  - **Text**: `Early Access`
  - **Variant** `note`
- `legacy`
  - **Text**: `Legacy`
  - **Variant** `danger`

### Text

Any string.

### Variant

- `note`
  - **Color**: Blue
- `tip`
  - **Color**: Purple
- `danger`
  - **Color**: Red
- `caution`
  - **Color**: Orange
- `success`
  - **Color**: Green

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/components/","name":"Components"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/components/inline-badge/","name":"Inline badge"}}]}
```
