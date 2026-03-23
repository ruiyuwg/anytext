# Cloudflare WAN

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-one/networks/connectors/cloudflare-wan/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Cloudflare WAN

Improve security and performance for your entire corporate network, reducing cost and operational complexity.

Enterprise-only

Cloudflare WAN (formerly Magic WAN) provides secure, performant connectivity and [routing ↗](https://www.cloudflare.com/learning/network-layer/what-is-routing/) for your entire corporate network, reducing cost and operational complexity. [Cloudflare Network Firewall](https://developers.cloudflare.com/cloudflare-network-firewall/) integrates smoothly with Cloudflare WAN, enabling you to enforce network firewall policies at Cloudflare's global network, across traffic from any entity within your network.

With Cloudflare WAN, you can securely connect any traffic source - data centers, offices, devices, cloud resources - to Cloudflare's network and configure routing policies to direct traffic where it needs to go, all within one SaaS solution.

Cloudflare WAN supports a variety of on-ramps including any device that supports anycast GRE or IPsec tunnels.

Refer to [On-ramps](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-wan/on-ramps/) for a full list of supported on-ramps.

Traditional WANs backhaul traffic through central data centers and require dedicated MPLS circuits at every site. Cloudflare WAN eliminates both — security applies inline at the nearest Cloudflare data center, and any site connects over standard Internet.

Refer to [WAN transformation](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-wan/wan-transformation/) to compare approaches and plan your migration, or go straight to [get started](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-wan/get-started/).

***

## Features

### Connect your network automatically

Use Cloudflare One Appliance to automatically connect, steer, and shape any IP traffic.

[ Use Cloudflare One Appliance ](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-wan/configuration/appliance/)

### Connect your network manually

Cloudflare WAN is compatible with a host of third-party devices. If you do not have Cloudflare One Appliance, start here to learn how to set up Cloudflare WAN manually.

[ Use a third-party device ](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-wan/configuration/manually/third-party/)

### Zero Trust integration

Learn how you can use Cloudflare WAN with other Cloudflare Zero Trust products.

[ Integrate with other Zero Trust products ](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-wan/zero-trust/)

### BGP peering (beta)

Use BGP (Border Gateway Protocol) peering between your networks and Cloudflare to automate adding or removing networks and subnets, and take advantage of failure detection and session recovery features.

[ Use BGP peering (beta) ](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-wan/configuration/manually/how-to/configure-routes/#configure-bgp-routes)

### WAN transformation

Replace MPLS circuits and hub-and-spoke routing with cloud-native networking. Compare WAN approaches and plan an incremental migration.

[ Plan your migration ](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-wan/wan-transformation/)

***

## Related products

**[Cloudflare Network Firewall](https://developers.cloudflare.com/cloudflare-network-firewall/)**

Cloudflare Network Firewall is a firewall-as-a-service (FWaaS) delivered from the Cloudflare global network to protect office networks and cloud infrastructure with advanced, and scalable protection.

**[Cloudflare Network Interconnect](https://developers.cloudflare.com/network-interconnect/)**

Cloudflare Network Interconnect (CNI) allows you to connect your network infrastructure directly with Cloudflare - rather than using the public Internet - for a more reliable and secure experience.

**[Load Balancing](https://developers.cloudflare.com/load-balancing/)**

Cloudflare Load Balancing distributes traffic across your endpoints, which reduces endpoint strain and latency and improves the experience for end users.

***

## More resources

[Reference Architecture](https://developers.cloudflare.com/reference-architecture/architectures/sase/)

Deep dive into key architecture and functionalities aspects of Cloudflare One, and learn more about Cloudflare WAN and its structure.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-one/","name":"Cloudflare One"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-one/networks/","name":"Networks"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-one/networks/connectors/","name":"Connectors"}},{"@type":"ListItem","position":5,"item":{"@id":"/cloudflare-one/networks/connectors/cloudflare-wan/","name":"Cloudflare WAN"}}]}
```
