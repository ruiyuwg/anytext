IPsec-VPN creates an encrypted tunnel between your on-premises network, such as a data center or office, and an Alibaba Cloud Virtual Private Cloud (VPC). This allows both networks to securely communicate as if they were on the same private network.

> The Alibaba Cloud VPN Gateway service complies with relevant Chinese national policies and regulations and supports only [non-cross-border connections](/help/en/vpn/sub-product-ipsec-vpn/support/faq-about-vpn-gateways#8ea8b9807d3r5). For cross-border connectivity, use the [Transit Router](/help/en/vpn/sub-product-ipsec-vpn/support/faq-about-vpn-gateways#6748a80d15wse) instead.

## **Two association modes**

IPsec-VPN provides two connection methods. You can choose a method based on the number of VPCs that you need to connect:

### **Attach to a VPN gateway (connect to a single VPC)**

Attach an IPsec-VPN connection to a VPN gateway instance. Best for connecting an **on-premises data center to a single VPC**.

**How it works**: On-premises gateway device ↔ IPsec-VPN tunnel ↔ VPN gateway ↔ VPC

**Use cases**:

-   Connect to a single VPC
    
-   Use SSL-VPN for remote access at the same time (supported only by standard VPN gateways)
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8942993771/CAEQThiBgMCR4trB0BkiIGY2YTc4ZTQzZTNhYzQ0NzI5NzhjYTg3ZjlkOWEzMTlm4146783_20240109141140.646.svg)

### **Attach to a Transit Router (connect to multiple VPCs)**

Attach an IPsec-VPN connection directly to a Transit Router in Cloud Enterprise Network (CEN). Best for connecting an **on-premises data center to multiple VPCs**.

**How it works**: On-premises gateway device ↔ IPsec-VPN tunnel ↔ Transit Router ↔ Multiple VPCs

**Use cases**:

-   Connect to multiple VPCs in the same or different regions
    
-   Use equal-cost multi-path (ECMP) load balancing for high availability
    
-   Require more than 1 Gbps bandwidth per connection (up to 2 Gbps)
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8942993771/CAEQThiBgMCjlt_B0BkiIGQxYjE2OGE4N2QyNTQ5YzI4MTI4YjdjNTcwOWE2YWZk4146783_20240109141140.646.svg)

## **Core components**

**Component**

**Description**

[VPN Gateway instance](/help/en/vpn/sub-product-ipsec-vpn/user-guide/vpn-gateway-instance/)

A gateway device deployed on Alibaba Cloud. It serves as the cloud-side endpoint of the encrypted tunnel. VPN gateways are available in [two types](/help/en/vpn/sub-product-ipsec-vpn/user-guide/vpn-gateway-instance/#4e5e43addenpp): **enhanced** and **standard**.

[Transit router](/help/en/cen/product-overview/how-transit-routers-work)

A core component of Cloud Enterprise Network (CEN) that forwards traffic across VPCs and regions. In multi-VPC scenarios, it replaces a VPN gateway as the cloud-side endpoint.

[Customer gateway](/help/en/vpn/sub-product-ipsec-vpn/user-guide/customer-gateway)

A logical object in Alibaba Cloud that records the public IP address of an on-premises gateway device. This object is required to create an IPsec-VPN connection.

[IPsec-VPN connection](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-an-ipsec-vpn-connection-in-dual-tunnel-mode)

Defines the parameters for the encrypted tunnel from the cloud to the on-premises gateway device. These parameters include the encryption algorithm, authentication algorithm, and pre-shared key (PSK).

[On-premises gateway device](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-local-gateways/)

A physical device or software in the on-premises data center that supports IPsec VPN. Examples include strongSwan, Cisco, and H3C. This device negotiates with the cloud-side endpoint to establish a tunnel.

> For simplicity, this document uses **on-premises data center** to refer to any on-premises network that needs to establish an IPsec-VPN connection with Alibaba Cloud, such as a corporate data center or office network.

## **Dual-tunnel mode**

By default, each IPsec-VPN connection includes **two encrypted tunnels**. In regions that support multiple zones, the two tunnels are deployed in different zones to provide zone-level disaster recovery. In regions that support only a single zone, such as China (Wuhan - Local Region), both tunnels are deployed in the same zone. This deployment does not provide zone-level disaster recovery but still provides link redundancy.

### **Attach to a VPN gateway: Active-passive mode**

The two tunnels work as **active/standby links**:

-   Under normal conditions, traffic is transmitted only through the active tunnel.
    
-   If the active tunnel fails, traffic automatically switches to the standby tunnel.
    
-   When the active tunnel recovers, traffic automatically switches back.
    

For more information, see [Attach to a VPN gateway](/help/en/vpn/sub-product-ipsec-vpn/user-guide/ipsec-vpn-connections-support-the-dual-tunnel-mode/#concept-2349267).

### **Attach to a Transit Router: ECMP mode**

The two tunnels form an **ECMP link**:

-   Both tunnels transmit traffic at the same time for load balancing.
    
-   If either tunnel fails, traffic automatically converges to the other tunnel.
    
-   When the failed tunnel recovers, it automatically resumes sharing traffic.
    

For more information, see [Attach to a Transit Router](/help/en/vpn/sub-product-ipsec-vpn/user-guide/ipsec-vpn-connections-support-the-dual-tunnel-mode-when-binding-transit-router/).

**Important**

When you create an IPsec-VPN connection, make sure that **both tunnels are configured and active**. If you configure or use only one tunnel, you cannot benefit from link redundancy and zone-level disaster recovery, and the [SLA](/help/en/legal/latest/vpn-gateway-service-level-agreement) for VPN Gateway does not apply.

## **Scenarios**

### **Scenarios for attaching to a VPN gateway**

-   [**VPC to data center**](/help/en/vpn/sub-product-ipsec-vpn/product-overview/establish-a-connection-between-the-vpc-and-the-on-premises-data): The most common scenario. You can use IPsec-VPN to connect an on-premises data center to an Alibaba Cloud VPC to build a hybrid cloud.
    
-   [**VPC to VPC**](/help/en/vpn/sub-product-ipsec-vpn/use-cases/enable-communication-between-two-vpcs-by-using-an-ipsec-vpn-connection-in-dual-tunnel-mode): You can use IPsec-VPN to quickly connect two VPCs for resource sharing across VPCs.
    
-   [**Multicloud connection**](/help/en/vpn/sub-product-ipsec-vpn/use-cases/through-ipsec-vpn-alibaba-cloud-vpc-and-aws-vpc-can-communicate): You can use IPsec-VPN to connect an Alibaba Cloud VPC to a VPC on another cloud platform, such as AWS or Azure.
    
-   [**Multi-site connection**](/help/en/vpn/sub-product-ipsec-vpn/use-cases/connect-multiple-offices-to-each-other-and-to-a-vpc): You can connect multiple office networks to a VPN gateway at the same time and use the hub-and-spoke feature to enable private communication among sites.
    

### **Scenarios for attaching to a Transit Router**

-   [**VPC to data center**](/help/en/vpn/sub-product-ipsec-vpn/product-overview/establish-ipsec-vpn-connection-for-idc-and-multi-region-vpc-interworking): You can connect an on-premises data center to any VPC through an IPsec-VPN connection and a Transit Router. This is suitable for scenarios where you need to connect to multiple VPCs.
    
-   [**High-availability ECMP connection**](/help/en/vpn/sub-product-ipsec-vpn/use-cases/create-multiple-ipsec-vpn-connections-over-the-internet-for-load-balancing): You can attach multiple IPsec-VPN connections to the same Transit Router to form an ECMP link. Multiple links carry traffic at the same time.
    
-   [**Express Connect circuit encryption**](/help/en/vpn/sub-product-ipsec-vpn/use-cases/encrypt-a-private-connection/): You can encrypt traffic over an Express Connect circuit that is already established for a private connection and use a Transit Router to connect to multiple VPCs.
    
-   [**Global multi-site full-mesh connection**](/help/en/vpn/sub-product-ipsec-vpn/use-cases/use-ipsec-vpn-and-cen-to-build-a-high-quality-global-network): You can connect multiple on-premises sites to the nearest Transit Routers using IPsec-VPN and use CEN to achieve a full-mesh topology.
    

### **Which mode to choose**

For a detailed comparison of the two modes, including encryption algorithms and performance specifications, see [Choose an association mode](/help/en/vpn/sub-product-ipsec-vpn/product-overview/functions-and-features).

## **Billing**

For more information, see [Billing of IPsec-VPN](/help/en/vpn/sub-product-ipsec-vpn/billing-for-ipsec-vpn).

## **Quick Start**

-   [Quick Start: Attach to a VPN gateway](/help/en/vpn/sub-product-ipsec-vpn/product-overview/establish-a-connection-between-the-vpc-and-the-on-premises-data)
    
-   [Quick Start: Attach to a Transit Router](/help/en/vpn/sub-product-ipsec-vpn/product-overview/establish-ipsec-vpn-connection-for-idc-and-multi-region-vpc-interworking)
