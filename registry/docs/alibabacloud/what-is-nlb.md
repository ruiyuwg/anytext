Network Load Balancer (NLB) is a Layer 4 load balancing service intended for the Internet of Everything (IoE) era. NLB offers ultra-high performance and can automatically scale on demand. An NLB instance supports up to 100 million concurrent connections, which is ideal for services that require high concurrency. [NLB performance and usage limits](/help/en/slb/network-load-balancer/product-overview/restrictions-on-use#f4cdece005os4)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2452093771/CAEQLxiBgICepIHKmhkiIDZmMmRmMmE0MTU2MDQwYmI4OTc4NjRlZjBlYjlkMjEz4052370_20231025141545.309.svg)

## Benefits

**High Performance:** A single NLB instance supports extremely high concurrency and massive bandwidth, enabling it to effortlessly handle the sudden traffic bursts and demanding concurrency requirements of modern industries such as digital-native businesses, AI, and Embodied Intelligence.

**Auto Scaling:** You do not need to select a specification for an NLB instance or manually upgrade or downgrade an NLB instance when workloads change. NLB instances can automatically scale on demand.

**High Availability:** NLB supports disaster recovery at multiple levels. Network traffic is distributed across groups of backend servers to enable disaster recovery. NLB also supports session persistence and cross-zone deployment to ensure service availability.

**SSL Offloading for TCP Traffic:** NLB supports large-scale SSL offloading for TCP traffic. You can use NLB to manage SSL certificates and offload SSL processing. This improves the performance of backend servers.

**Multiple Load Balancing Scenarios:** You can specify backend servers by IP address. You can also integrate NLB with Cloud Enterprise Network (CEN) to route network traffic across VPCs or regions, or to on-premises servers.

**Various Advanced Features:** NLB supports multiple advanced features to meet diverse needs. For example, NLB supports dual-stack networking (IPv4 and IPv6), listening by port range, limiting the number of new connections per second, and connection draining.

## Use scenarios

-   **Ingress for IoT services**
    
    You can use NLB for smart home, smart parking, video surveillance, and Internet of Vehicles (IoV) services. NLB serves as an ingress and can process a large number of concurrent connections. NLB also supports SSL offloading for TCP traffic and can limit the number of new connections per second to ensure the security and stability of your IoT services.
    
-   **Ingress for Internet-facing services**
    
    NLB serves as an ingress over the Internet. An NLB instance provides ultra-high load balancing capabilities and can automatically scale on demand. You do not need to configure your NLB instance when workloads change. This reduces O&M costs.
    
-   **Ingress for on-premises services**
    
    NLB simplifies network communication between data centers and cloud services. You can specify on-premises servers as the backend servers of NLB and use cloud services such as CEN to route requests from the cloud to the on-premise servers.
    

## NLB components

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2452093771/CAEQLxiBgID.zILKmhkiIDQzNDAyOTE5NzEyODRiZjRiYThiN2Y0MTg2NWY3YTUy4052370_20231025141545.309.svg)

**Term**

**Description**

**Instance**

NLB provides ultra-high Layer-4 processing capabilities and can increase the service capacity of your applications by distributing network traffic across different backend servers. An NLB instance supports up to 100 million concurrent connections.

**Listener**

Listeners are the smallest configurable unit of NLB. You must specify a protocol and a port for each listener to process different requests. For example, you can set the protocol of an NLB listener to TCP and the port to 80. NLB supports TCP, UDP, and SSL over TCP. You must add at least one listener to an NLB instance to distribute network traffic. For the maximum number of listeners that can be configured for each NLB instance, see [NLB quotas](/help/en/slb/network-load-balancer/user-guide/nlb-quotas).

**Server group**

Backend servers can be organized into logical groups (also known as server groups). Each server group contains one or more backend servers to process requests distributed by NLB. Server groups of NLB are independent of NLB. You can associate a server group with different NLB instances. For the maximum number of backend servers that you can add to each server group for NLB, see [NLB quotas](/help/en/slb/network-load-balancer/user-guide/nlb-quotas).

You can specify Elastic Compute Service (ECS) instances, elastic container instances, and elastic network interfaces (ENIs) as the backend servers of NLB. You can also add backend servers by IP address. For more information, see the following topics:

-   [What is ECS?](/help/en/ecs/user-guide/what-is-ecs#topic-9543)
    
-   [What is Elastic Container Instance?](/help/en/eci/product-overview/what-is-elastic-container-instance#topic-1860079)
    
-   [ENI overview](/help/en/ecs/user-guide/eni-overview#concept-xzg-mgt-xdb)
    
-   [Backend servers of the IP type](/help/en/slb/network-load-balancer/user-guide/overview-of-nlb-server-groups#concept-2223838)
    

**Health check**

NLB checks the availability of backend servers by performing health checks. If a backend server in a server group is declared unhealthy, NLB does not forward requests to the backend server. NLB supports flexible health check configurations. For example, you can specify the protocol, port, and thresholds for health checks based on your business requirements.

## NLB instance types

This section describes the network types and protocol versions of NLB. The following figure describes dual-stack Internet-facing NLB instances and dual-stack internal-facing NLB instances.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2452093771/CAEQLxiBgMD96obKmhkiIDBjNTNmYTNlOWI2NzQ0MTA5ZDYwNTgyNTQ1OTE3NWM54052370_20231025141545.309.svg)

### Network types

Alibaba Cloud provides Internet-facing and internal-facing NLB instances. You can specify the type of NLB instance based on your business requirements. Whether EIPs and Internet Shared Bandwidth instances are used is based on the specified type of NLB instance. The preceding figure describes the components of an Internet-facing NLB instance and the components of an internal-facing NLB instance.

**Term**

**Description**

**Domain name**

A domain name that can be accessed over the Internet or a private network. The domain name is resolved to the virtual IP address of NLB. You can also configure Canonical Name (CNAME) records to map readable domain names to the domain name of NLB.

**Note**

Alibaba Cloud has upgraded the domain names for ALB instances. For ALB instances created at or after 00:00:00 on November 15, 2024 (UTC+8), you must use the new domain names. Default domain names provided by Alibaba Cloud DNS can no longer be used to access the ALB instances. ALB instances created before 00:00:00 on November 15, 2024 (UTC+8) are not affected by this upgrade. For more information, see [ALB and NLB domain name upgrade](/help/en/slb/product-overview/alb-and-nlb-domain-name-upgrade-announcement).

**Internet Shared Bandwidth instance**

Only Internet-facing NLB instances require Internet Shared Bandwidth instances. Internet Shared Bandwidth instances allow you to share and transfer bandwidth resources within the same region. Internet Shared Bandwidth instances support multiple metering methods such as pay-by-bandwidth and pay-by-enhanced-95th-percentile. You can use Internet Shared Bandwidth instances to reduce Internet bandwidth costs. Internet-facing NLB instances use Internet Shared Bandwidth instances that support the pay-by-bandwidth and pay-by-enhanced-95th-percentile metering methods to provide Internet-facing services.

**EIP**

Only Internet-facing NLB instances require EIPs. You do not need to associate EIPs with internal-facing NLB instances. An EIP is an IP address that NLB uses to provide services over the Internet. An Internet-facing NLB instance can use multiple EIPs. To ensure high availability, an Internet-facing NLB instance must use at least two EIPs in different zones to provide services.

**Virtual IP address (VIP)**

VIPs of NLB are used to distribute requests. A virtual IP address is a private IP address that belongs to a virtual private cloud (VPC).

### IP versions

NLB supports IPv4 and dual-stack networking.

**Term**

**Description**

**IPv4**

IPv4 NLB instances use only IPv4 addresses to provide services.

**Dual-stack**

Dual-stack NLB instances use both IPv4 and IPv6 addresses to provide services. The domain name of an NLB instance remains unchanged.

## Activate NLB

To activate NLB, go to the [buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=slb_nlb_public_intl).

## Deploy and manage NLB instances

After you create an Alibaba Cloud account, you can deploy and manage NLB instances in the following ways:

-   [NLB console](https://slb.console.alibabacloud.com/nlb): a web interface that you can use to manage your NLB service. You can create, use, or release NLB instances in the console. For more information, see [Create and manage an NLB instance](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance#task-2223922).
    
-   [Alibaba Cloud SDKs](https://next.api.alibabacloud.com/api-tools/sdk/Nlb?version=2022-04-30&language=java-tea): SDKs for Java, Go, Python, and other programming languages.
    
-   [OpenAPI Explorer](https://next.api.alibabacloud.com/api/Nlb/2022-04-30/DescribeRegions?lang=JAVA): allows you to retrieve and call API operations, and dynamically generate SDK sample code.
    
-   [Terraform](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs/resources/nlb_listener): helps you implement version control for cloud and on-premises resources. You can use Terraform configuration files to orchestrate resources on Alibaba Cloud and other cloud service platforms that support Terraform.
    

## References

-   [Functions and features](/help/en/slb/network-load-balancer/product-overview/functions-and-features#concept-2223474)
    
-   [Use NLB to balance loads for IPv4 services](/help/en/slb/network-load-balancer/getting-started/nlb-quickly-implements-load-balancing-for-ipv4-services#task-2223529)
    
-   [NLB billing rules](/help/en/slb/network-load-balancer/product-overview/nlb-billable-items#concept-2226387)
