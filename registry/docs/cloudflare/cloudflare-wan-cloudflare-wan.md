# Cloudflare WAN

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-wan/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Cloudflare WAN

Improve security and performance for your entire corporate network, reducing cost and operational complexity.

Enterprise-only

Cloudflare WAN (formerly Magic WAN) provides secure, performant connectivity and [routing ↗](https://www.cloudflare.com/learning/network-layer/what-is-routing/) for your entire corporate network, reducing cost and operational complexity. [Cloudflare Network Firewall](https://developers.cloudflare.com/cloudflare-network-firewall/) integrates smoothly with Cloudflare WAN, enabling you to enforce network firewall policies at Cloudflare's global network, across traffic from any entity within your network.

With Cloudflare WAN, you can securely connect any traffic source - data centers, offices, devices, cloud resources - to Cloudflare's network and configure routing policies to direct traffic where it needs to go, all within one SaaS solution.

Cloudflare WAN supports a variety of on-ramps including any device that supports anycast GRE or IPsec tunnels. To make it easier to onboard your cloud resources, you can use [Multi-Cloud Networking](https://developers.cloudflare.com/cloudflare-wan/configuration/multi-cloud-networking/), which automates creating on-ramps from your cloud networks.

Refer to [On-ramps](https://developers.cloudflare.com/cloudflare-wan/on-ramps/) for a full list of supported on-ramps.

Traditional WANs backhaul traffic through central data centers and require dedicated MPLS circuits at every site. Cloudflare WAN eliminates both — security applies inline at the nearest Cloudflare data center, and any site connects over standard Internet.

Refer to [WAN transformation](https://developers.cloudflare.com/cloudflare-wan/wan-transformation/) to compare approaches and plan your migration, or go straight to [get started](https://developers.cloudflare.com/cloudflare-wan/get-started/).

## Cloudflare WAN and Cloudflare One

Cloudflare WAN is a standalone WAN-as-a-Service (WANaaS) product. It provides site-to-site connectivity over Cloudflare's global network, with packet-level security through [Cloudflare Network Firewall](https://developers.cloudflare.com/cloudflare-network-firewall/). Cloudflare WAN supports IPsec tunnels, GRE tunnels, [Cloudflare Network Interconnect](https://developers.cloudflare.com/network-interconnect/), and the [Cloudflare One Appliance](https://developers.cloudflare.com/cloudflare-wan/configuration/appliance/) for connecting your sites.

[Cloudflare One](https://developers.cloudflare.com/cloudflare-one/) is the full SASE (Secure Access Service Edge) platform. It extends Cloudflare WAN with identity-aware security services:

- **[Cloudflare One Client (WARP)](https://developers.cloudflare.com/cloudflare-one/team-and-resources/devices/cloudflare-one-client/)** — deploys on user devices to route traffic through Cloudflare with identity context.
- **[Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/)** — creates outbound-only connections from your infrastructure to Cloudflare, with no inbound ports required.
- **[Cloudflare Gateway](https://developers.cloudflare.com/cloudflare-one/traffic-policies/)** — applies secure web gateway (SWG) policies to filter and inspect Internet-bound traffic.
- **[Cloudflare Access](https://developers.cloudflare.com/cloudflare-one/access-controls/)** — enforces Zero Trust Network Access (ZTNA) policies based on user identity, device posture, and context.

If your requirements are limited to site-to-site connectivity and network-layer security, Cloudflare WAN provides what you need. When you need user-level security policies, identity-based access controls, or secure Internet egress, you can add Cloudflare One capabilities to your existing deployment.

Cloudflare One builds on the same network infrastructure as Cloudflare WAN, so there is no migration required.

For more information about Cloudflare One, refer to the [Cloudflare One documentation](https://developers.cloudflare.com/cloudflare-one/).

***

## Features

### Connect your network automatically

Use Cloudflare One Appliance to automatically connect, steer, and shape any IP traffic.

[ Use Cloudflare One Appliance ](https://developers.cloudflare.com/cloudflare-wan/configuration/appliance/)

### Connect your network manually

Cloudflare WAN is compatible with a host of third-party devices. If you do not have Cloudflare One Appliance, start here to learn how to set up Cloudflare WAN manually.

[ Use a third-party device ](https://developers.cloudflare.com/cloudflare-wan/configuration/manually/third-party/)

### Automatic cloud on-ramps

Automate resource discovery, and reduce management burden when connecting to your public cloud.

[ Automate your cloud on-ramps ](https://developers.cloudflare.com/cloudflare-wan/configuration/multi-cloud-networking/)

### Zero Trust integration

Learn how you can use Cloudflare WAN with other Cloudflare Zero Trust products.

[ Integrate with other Zero Trust products ](https://developers.cloudflare.com/cloudflare-wan/zero-trust/)

### BGP peering (beta)

Use BGP (Border Gateway Protocol) peering between your networks and Cloudflare to automate adding or removing networks and subnets, and take advantage of failure detection and session recovery features.

[ Use BGP peering (beta) ](https://developers.cloudflare.com/cloudflare-wan/configuration/manually/how-to/configure-routes/#configure-bgp-routes)

### WAN transformation

Replace MPLS circuits and hub-and-spoke routing with cloud-native networking. Compare WAN approaches and plan an incremental migration.

[ Plan your migration ](https://developers.cloudflare.com/cloudflare-wan/wan-transformation/)

***

## Related products

**[Cloudflare One](https://developers.cloudflare.com/cloudflare-one/)**  Cloudflare One, our SASE platform, replaces legacy security perimeters with our global edge, making the Internet faster and safer for teams around the world.

**[Cloudflare Network Firewall](https://developers.cloudflare.com/cloudflare-network-firewall/)**

Cloudflare Network Firewall is a firewall-as-a-service (FWaaS) delivered from the Cloudflare global network to protect office networks and cloud infrastructure with advanced, and scalable protection.

**[Multi-Cloud Networking](https://developers.cloudflare.com/multi-cloud-networking/)**  Simplify and automate cloud resource discovery, and reduce your management burden when connecting to your public cloud.

**[Cloudflare Network Interconnect](https://developers.cloudflare.com/network-interconnect/)**

Cloudflare Network Interconnect (CNI) allows you to connect your network infrastructure directly with Cloudflare - rather than using the public Internet - for a more reliable and secure experience.

**[Load Balancing](https://developers.cloudflare.com/load-balancing/)**

Cloudflare Load Balancing distributes traffic across your endpoints, which reduces endpoint strain and latency and improves the experience for end users.

***

## More resources

[Reference Architecture](https://developers.cloudflare.com/reference-architecture/architectures/sase/)

Deep dive into key architecture and functionalities aspects of Cloudflare One, and learn more about Cloudflare WAN and its structure.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-wan/","name":"Cloudflare WAN"}}]}
```
