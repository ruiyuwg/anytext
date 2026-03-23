**Cloud Enterprise Network (CEN)** is a highly available network service that operates on Alibaba Cloud's private global backbone. CEN uses a **Transit Router (TR)** as a central hub to establish private communication channels between virtual private clouds (VPCs) across different regions and between VPCs and your on-premises data centers, creating a flexible, reliable, and large-scale enterprise-grade cloud network.

## Components

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0066762771/CAEQTxiBgIDunqGc2BkiIDNmYzQyOTY3YWRmMDRlYmI5NTRlMzg5MDliYzAwNmZk4768867_20241119120026.916.svg)

**Diagram**

**Name**

**Description**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8709093371/p877592.png)

**CEN instance**

A CEN Instance is the basic resource for creating and managing an integrated, intelligent cloud network. It serves as a container for Transit Routers. A single CEN Instance can contain one or more TRs. Multiple TRs can be attached with inter-region connections, letting you flexibly build your interconnected cloud network.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8709093371/p877596.png)

**TR**

A TR is the core network transit hub within a region. It forwards traffic within the same region or across different regions and lets you define flexible routing policies. Within a CEN Instance, you can create one TR per region.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8709093371/p877602.png)

**Network instance**

A network instance is a key component of your cloud or on-premises network architecture. Common network instances include [VPC](/help/en/vpc/what-is-vpc), [ECR](/help/en/express-connect/user-guide/ecr/), [CCN](/help/en/sag/user-guide/introduction-to-ccn), [IPsec-VPN connection](/help/en/vpn/sub-product-ipsec-vpn/user-guide/create-and-manage-ipsec-vpn-connections-dual-tunnel), [VBR](/help/en/express-connect/user-guide/what-is-a-virtual-border-router/), and [TR](/help/en/cen/product-overview/how-transit-routers-work). A TR connects to these network instances to forward traffic and enable communication between different network environments.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8709093371/p877603.png)

**Network instance connection**

Attaching a network instance to a TR creates a network instance connection. This way, you can interconnect your cloud resources, cross-region resources, and hybrid cloud environments. To connect different types of network instances, you must create the corresponding connection on the TR: [VPC connection](/help/en/cen/user-guide/connect-vpcs), [ECR connection](/help/en/cen/user-guide/connect-ecrs), [CCN connection](/help/en/cen/user-guide/associate-a-ccn-instance-with-a-transit-router), [VPN connection](/help/en/cen/user-guide/attach-an-ipsec-vpn-connection-to-a-transit-router), [VBR connection](/help/en/cen/user-guide/connect-vbrs), or [inter-region connection](/help/en/cen/user-guide/manage-inter-region-connections).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8709093371/p877609.png)

**TR route table**

After you connect a network instance to a TR, the TR uses a route table to forward traffic from the network instance. By default, a TR includes one system route table. You can also create custom route tables and define interconnection, isolation, and traffic forwarding policies through route association and learning. This flexibility supports a wide range of networking requirements.

## **Use cases**

CEN supports the following typical interconnection scenarios:

-   **Intra-region VPC connection**: [Connect multiple VPCs in the same region](/help/en/cen/getting-started/connect-vpcs-in-same-region-with-transit-router).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0066762771/CAEQTxiBgICFm5qc2BkiIDhmMTc5ZGVhNTllYzRlYjA4Y2FlY2NjYzYwNTI5NThj4729461_20241028200639.331.svg)
-   **Inter-region VPC connection**: [Connect VPCs in different regions](/help/en/cen/getting-started/inter-region-vpc-interworking).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0066762771/CAEQTxiBgMDEnZyc2BkiIDVhYzc2MDkxYWIyOTQwMmFiNmM2NjY2MTI4OGFiOGVj4729461_20241028200639.331.svg)
-   **Hybrid cloud connection:** [Connect multiple VPCs in the cloud to an on-premises data center](/help/en/cen/getting-started/connect-network-instances-in-the-same-region).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0066762771/CAEQTxiBgMCqwp2c2BkiIGY1MWM3MDc3MjhkYTRjZmJhNWQxNTRmMGE1Mzc1NzAw4729461_20241028200639.331.svg)

Other use cases:

-   **Filter traffic between VPCs**
    
    Use the TR's routing capabilities to steer traffic through a security appliance for filtering. This setup ensures that only filtered traffic can communicate between networks, enhancing network security. For more information, see [Use an Enterprise Edition transit router to filter traffic for secure communication](/help/en/cen/use-cases/use-an-enterprise-edition-transit-router-to-enable-and-secure-network-communication).
    
-   **Access shared services from isolated VPCs**
    
    Use the routing capabilities of a TR to let isolated VPCs access a shared service VPC while keeping them isolated from each other. For more information, see [Allow isolated VPCs to access a shared service](/help/en/cen/use-cases/allow-isolated-vpcs-to-access-a-shared-vpc).
    
-   **Inter-region QoS**
    
    With traffic scheduling, you can tag different types of cross-region traffic and apply bandwidth limits based on those tags. This ensures sufficient bandwidth for critical applications and improves overall network efficiency. For more information, see [Use the traffic scheduling feature to control the inter-region bandwidth for different traffic types](/help/en/cen/user-guide/use-traffic-scheduling-to-limit-bandwidth-for-inter-region-connections).
    
-   **Inter-region traffic analysis**
    
    Flow Logs capture traffic information transmitted through TRs and network instance connections, including inter-region, VPC, VPN, ECR, and VBR connections. For more information, see [Configure flow logs](/help/en/cen/user-guide/configure-a-flow-log).
    
-   **Cloud multicast**
    
    After connecting network instances to a TR, you can create and manage a multicast network. The TR acts as a multicast router to forward multicast traffic between the network instances. For more information, see [Multicast management](/help/en/cen/user-guide/multicast-overview/).
    

## Benefits

**Global-scale interconnectivity**

**Low latency, high throughput**

**High reliability, high quality**

TRs quickly connect VPCs and on-premises networks across multiple regions, enabling global resource interconnectivity. Within a single region, an Enterprise Edition TR can interconnect up to 1,000 VPCs, meeting enterprise-scale growth needs.

TRs deliver low-latency, high-throughput network performance. Intra-region interconnectivity can achieve line-rate speeds. Global interconnectivity offers significantly lower latency than Internet routing.

TRs deploy forwarding nodes across multiple zones. Traffic is routed to the nearest node under normal conditions and automatically fails over to another zone if an outage occurs, ensuring uninterrupted service. High-quality transmission paths exist between any two network nodes. If a path fails, the network converges automatically without impacting your applications.

**Secure and flexible enterprise networking**

**Pay-as-you-go, rapid provisioning**

**One-stop O&M**

TRs support custom routing policies for advanced enterprise architectures, such as isolating security domains, implementing a unified Demilitarized Zone (DMZ) egress, and building service chains.

TRs support usage-based billing. For intra-region traffic, you pay only for connected network instances and the traffic processed by the TR. Inter-region links can be provisioned and upgraded/downgraded instantly, eliminating upfront hardware or circuit costs and reducing network deployment expenses.

The console provides a visual management interface with geographical and resource-based views. You can quickly view intra-region and inter-region network topologies to monitor your global network status and improve O&M efficiency.

## Regions and zones supported by TRs

TRs are available in Enterprise Edition and Basic Edition:

-   The Basic Edition is no longer available for new purchases. All new Transit Routers are Enterprise Edition, except in [CCN](/help/en/sag/user-guide/introduction-to-ccn) regions.
    
-   The Enterprise Edition is an enhanced version of the Basic Edition. It includes all Basic Edition features and adds support for flexible routing policies. For more information, see [How transit routers work](/help/en/cen/product-overview/how-transit-routers-work#concept-1964186).
    

The following table lists the regions and zones where Enterprise Edition TRs are available.

**Area**

**Region**

**Zone**

the Chinese mainland

China (Hangzhou)

B, H, I, J, K

China (Shanghai)

B, E, F, G, L, M, N

China (Nanjing - Local Region) (decommissioning)

A

China (Fuzhou - Local Region) (decommissioning)

A

China (Shenzhen)

A (new purchases disabled for new users), C, D, E, F

China (Heyuan)

A, B

China (Guangzhou)

A, B

China (Qingdao)

B, C

China (Beijing)

C, F, G, H, I, J, K, L

China (Zhangjiakou)

A, B, C

China (Hohhot)

A, B

China (Ulanqab)

A, B, C

China (Chengdu)

A, B

Asia-Pacific

Singapore

A, B, C

China (Hong Kong)

B, C, D

Malaysia (Kuala Lumpur)

A, B, C

Indonesia (Jakarta)

A, B, C

Philippines (Manila)

A, B

Japan (Tokyo)

A, B, C, E

South Korea (Seoul)

A, B

Thailand (Bangkok)

A, B

Europe

Germany (Frankfurt)

A, B, C

UK (London)

A, B

North America

US (Virginia)

A, B

US (Silicon Valley)

A, B

US (Atlanta)

> To use this, please contact your account manager to submit a request.

A, B

Mexico

A

Middle East

UAE (Dubai)

A, B

SAU (Riyadh - Partner Region)

A, B

The following table lists the regions that support CCN. When you create a TR in a CCN region, it is a Basic Edition TR by default.

**Area**

**Region**

the Chinese mainland

Cloud Connect Network (CCN) in the Chinese mainland

Asia-Pacific

Japan Cloud Connect Network, Singapore Cloud Connect Network, China (Hong Kong) Cloud Connect Network, Malaysia Cloud Connect Network, Indonesia Cloud Connect Network

Europe

Frankfurt Cloud Connect Network

## Network transmission

Alibaba Cloud provides a high-performance, low-latency private network to meet your networking needs in a secure cloud environment. Multiple factors can cause packet loss during network transmission, including network flow collisions, data-link layer errors, and other network failures. The operational goal for Alibaba Cloud's transit network is to maintain a P99 hourly packet loss rate of less than 0.0001% for inter-region data transmission.

When using CEN, keep the following in mind:

-   The Alibaba Cloud transit network routes only traffic managed by CEN. Transmitting traffic through CEN between different regions with sufficient bandwidth helps minimize packet loss.
    
-   China Unicom provides the dedicated lines that connect the Chinese mainland with other regions. The operational goals for these lines are consistent with those of the Alibaba Cloud transit network.
    

## **Get started with CEN**

-   Use the console: See [Connect VPCs in the same region](/help/en/cen/getting-started/connect-vpcs-in-same-region-with-transit-router).
    
-   Use developer tools: [OpenAPI](/help/en/cen/developer-reference/api-cbn-2017-09-12-overview#main-107864) and [Terraform](/help/en/terraform/what-is-terraform).
