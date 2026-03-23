# System requirements

## System requirements

Sanity Studio is a web application that runs in the browser. This page covers the network, browser, and infrastructure requirements for running Studio in managed environments.

Share this page with your IT or network security team if they manage firewalls, proxies, or endpoint policies.

### Network requirements

Studio communicates with Sanity services over HTTPS (port 443) with TLS 1.2 or later. All connections require **HTTP/2 or later**. HTTP/1.1 causes degraded performance or complete failure.

#### Domains to allowlist

For most deployments, allowlisting `*.sanity.io` and `*.sanity-cdn.com` covers all required domains. If your network policy requires specific entries:

| Domain | Purpose |
| --- | --- |
| \*.api.sanity.io | Content Lake API, authentication, AI features, telemetry |
| \*.apicdn.sanity.io | API CDN (cached reads) |
| cdn.sanity.io | Image and file asset CDN |
| sanity-cdn.com | Module CDN for auto-updating Studios |
| core.sanity-cdn.com | Core UI bridge script |
| m.sanity-cdn.com | Video streaming CDN |
| media.sanity.io | Media Library UI |
| manage.sanity.io | Project management |

**Optional:**

| Domain | Purpose |
| --- | --- |
| sentry.sanity.io | Error reporting. No functional impact if blocked. |
| maps.googleapis.com | Google Maps Static API. Only required if your schema uses the geopoint input type. Requires a separate Google API key. |

Real-time features use Server-Sent Events (SSE) over the same API domains on port 443. No additional ports or protocols are required.

Studio does not load resources from third-party domains. The geopoint input is an exception: it requires Google Maps. AI features route through api.sanity.io.

#### Webhook egress IPs

If your infrastructure receives [webhooks](https://www.sanity.io/docs/webhooks) from Sanity, allowlist the IP addresses published at [sanity.io/files/webhooks-egress-ips.txt](https://www.sanity.io/files/webhooks-egress-ips.txt).

### Browser requirements

Studio works with all recent versions of Chrome, Edge, Firefox, and Safari, on both desktop and mobile.

### Common blockers

These network configurations are known to cause issues with Studio:

| Configuration | Problem |
| --- | --- |
| VPN with HTTP downgrade | Some VPNs downgrade connections from HTTP/2 to HTTP/1.1. |
| TLS-inspecting proxy | Proxies that terminate and re-establish HTTPS connections (such as Zscaler) can break HTTP/2. |
| DNS filtering | Blocking \*.sanity.io prevents Studio from reaching Sanity services. |

#### Diagnosing HTTP/1.1 issues

Open your browser's DevTools, go to the **Network** tab, and check the **Protocol** column. If connections show `h1` or `http/1.1`, Studio is running over HTTP/1.1 and may not function correctly.

For more detail, see [HTTP/1.1 performance issues](https://www.sanity.io/docs/help/http1-performance-issues).

### Development requirements

Setting up and building Studio locally requires:

| Requirement | Details |
| --- | --- |
| Node.js | See the engines field in Sanity Studio's package.json file for the current supported versions. |
| Package manager | npm, yarn, pnpm, and should work in any Node.js compatible package manager. |

Check the `engines` field in [Sanity Studio's package.json](https://github.com/sanity-io/sanity/blob/main/packages/sanity/package.json) for the currently supported Node.js versions.
