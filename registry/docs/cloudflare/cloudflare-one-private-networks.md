# Private networks

[Skip to content](#%5Ftop)

### Tags

[ Private networks ](https://developers.cloudflare.com/search/?tags=Private%20networks)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-one/networks/connectors/cloudflare-tunnel/private-net/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Private networks

With Cloudflare Zero Trust, you can connect private networks and the services running in those networks to Cloudflare's global network. This involves installing a [connector](#connectors) on the private network, and then [setting up routes](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/get-started/create-remote-tunnel/#2b-connect-a-network) which define the IP addresses available in that environment. Unlike [published applications](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/routing-to-tunnel/), private network routes can expose both HTTP and non-HTTP resources.

To reach private network IPs, end users must connect their device to Cloudflare and enroll in your Zero Trust organization. The most common method is to install the [Cloudflare One Client](https://developers.cloudflare.com/cloudflare-one/team-and-resources/devices/cloudflare-one-client/) on their device, or you can onboard their network traffic to Cloudflare using our [WARP Connector](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/private-net/warp-connector/) or [Cloudflare WAN](https://developers.cloudflare.com/cloudflare-wan/zero-trust/cloudflare-tunnel/).

Administrators can optionally set [Gateway network policies](https://developers.cloudflare.com/cloudflare-one/traffic-policies/network-policies/) to control access to services based on user identity and device posture.

## Connectors

Here are the different ways you can connect your private network to Cloudflare:

- [**cloudflared**](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/private-net/cloudflared/) installs on a server in your private network to create a secure, outbound tunnel to Cloudflare. Cloudflare Tunnel using `cloudflared` only proxies traffic initiated from a user to a server. Any service or application running behind the tunnel will use the server's default routing table for server-initiated connectivity.
- [**Peer-to-peer**](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/private-net/peer-to-peer/) uses the [Cloudflare One Client](https://developers.cloudflare.com/cloudflare-one/team-and-resources/devices/cloudflare-one-client/) to establish peer-to-peer connectivity between two or more devices. Each device running the Cloudflare One Client can access services on any other device running the Cloudflare One Client via an assigned virtual IP address.
- [**WARP Connector**](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/private-net/warp-connector/) installs on a Linux server in your private network to establish site-to-site, bidirectional, and mesh networking connectivity. The WARP Connector acts as a subnet router to relay client-initiated and server-initiated traffic between all devices on a private network and Cloudflare.
- [**Cloudflare WAN**](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-wan/) relies on configuring legacy networking equipment to establish anycast GRE or IPsec tunnels between an entire network location and Cloudflare.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-one/","name":"Cloudflare One"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-one/networks/","name":"Networks"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-one/networks/connectors/","name":"Connectors"}},{"@type":"ListItem","position":5,"item":{"@id":"/cloudflare-one/networks/connectors/cloudflare-tunnel/","name":"Cloudflare Tunnel"}},{"@type":"ListItem","position":6,"item":{"@id":"/cloudflare-one/networks/connectors/cloudflare-tunnel/private-net/","name":"Private networks"}}]}
```
