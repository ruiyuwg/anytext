This topic describes the feature updates for Global Accelerator (GA).

## July 2025

**Feature**

**Update type**

**Description**

**References**

Pay-as-you-go standard GA instances support multiple endpoint groups for Layer 7 (HTTP/HTTPS) listeners

Update

Pay-as-you-go standard GA instances now support configuring multiple default endpoint groups in different regions for a single HTTP or HTTPS listener. You can set traffic dial values for the endpoint groups to control the traffic ratio forwarded to each group.

Pay-as-you-go standard GA instances also provide the following features:

-   You can configure traffic dialing for virtual endpoint groups associated with HTTP and HTTPS listeners.
    
-   Custom forwarding rules support associating multiple default or virtual endpoint groups. You can select only one endpoint group in each region. You can also write request IDs to headers.
    
-   You can specify a domain name for health checks.
    

-   [Endpoint groups and endpoints](/help/en/ga/user-guide/overview-4/)
    
-   [Add and manage endpoint groups for smart routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners)
    
-   [Add and manage forwarding rules](/help/en/ga/user-guide/create-and-manage-forwarding-rules)
    
-   [Enable and manage health checks](/help/en/ga/user-guide/enable-and-manage-health-checks)
    

Pay-as-you-go standard GA instances support Anti-DDoS Pro and Anti-DDoS Premium

New

Pay-as-you-go standard GA instances can connect to Anti-DDoS Pro and Anti-DDoS Premium. This feature uses Alibaba Cloud's global scrubbing centers to provide DDoS mitigation capabilities of up to terabits per second for the secure CNAME (secure accelerated IP address) of a GA instance.

[Use GA with Anti-DDoS for secure global acceleration](/help/en/ga/use-cases/ga-links-ddos-native-protection-to-accelerate-global-service-security)

## June 2025

**Feature**

**Update type**

**Description**

**References**

New region available

Update

Mexico is added as an acceleration area for pay-as-you-go standard GA instances.

[Acceleration areas and regions](/help/en/ga/user-guide/overview-1/#05cc333029x1g)

Pay-as-you-go standard GA instances support Anycast EIPs as accelerated IP addresses

New

Pay-as-you-go standard GA instances now support **Anycast Elastic IP Address** as a type of accelerated IP address.

If you use an **Anycast Elastic IP Address**, GA provides a unified IP entry point across multiple regions worldwide. You do not need to select an acceleration area or region. Users in different regions can automatically access the Alibaba Cloud acceleration network from a nearby location through the Anycast EIP or a CNAME record.

-   [Accelerated IP addresses](/help/en/ga/user-guide/overview-1/#section-vxi-r6e-pcc)
    
-   [Create and manage standard Global Accelerator instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances)
    

## May 2025

**Feature**

**Update type**

**Description**

**References**

Pay-as-you-go standard GA instances support configuration of backend IP address protocols

New

Pay-as-you-go standard GA instances support setting the backend IP address protocol to IPv4-only, IPv6-only, or IPv4/IPv6 protocol affinity. This lets you flexibly choose the IP protocol for communication between GA and backend services to ensure end-to-end accelerated access across different network protocol environments.

-   [Backend IP address protocol](/help/en/ga/user-guide/overview-4/#21f96d0779tp8)
    
-   [Add and manage endpoint groups for smart routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners)
    
-   [Create and manage standard Global Accelerator instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances)
    

## February 2025

**Feature**

**Update type**

**Description**

**References**

TCP and UDP listeners support port mapping

New

Standard GA instances now support port mapping for TCP and UDP listeners.

Port mapping lets you customize the mapping between listener ports and backend application ports. This improves the flexibility and security of your application deployment.

-   [Add and manage endpoint groups for smart routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners)
    
-   [Use GA port mapping to improve application flexibility and security](/help/en/ga/use-cases/use-ga-port-mapping-to-improve-application-flexibility-and-security)
    

UDP listeners support preserving client source IP addresses

New

You can enable **Preserve Client IP** for UDP listeners of standard GA instances to obtain the originating IP addresses of clients.

[Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses)

TCP and UDP listeners support multiple port ranges

Update

For pay-as-you-go standard GA instances, the port configuration for TCP and UDP listeners is enhanced. You can configure multiple consecutive port ranges for a single listener. The port range is 1 to 65499.

[Ports for smart routing listeners](/help/en/ga/user-guide/overview-2/#2c13383d757v0)

New backend service types for standard GA instances

New

The **Custom Private IP** backend service type is added for endpoints of standard GA instances.

If you want to use GA to accelerate Alibaba Cloud backend services that are not yet supported or on-premises services in data centers over private connections, you can use endpoints of the **Custom Private IP** type.

-   [Endpoint groups and endpoints](/help/en/ga/user-guide/overview-4/)
    
-   [Add and manage endpoint groups for smart routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners)
    

## December 2024

**Feature**

**Update type**

**Description**

**References**

Listener-granularity monitoring

New

Pay-as-you-go standard GA instances support listener-granularity monitoring metrics.

[Monitoring and alerts](/help/en/ga/user-guide/monitoring-and-alerting)

## July 2024

**Feature**

**Update type**

**Description**

**References**

Connect to backend services over HTTP/2

New

Standard GA instances support connecting to backend services over HTTP/2. This configuration allows backend services to take full advantage of the protocol, which significantly improves service performance, reduces latency and network overhead, and enhances the overall access experience.

-   [Add and manage endpoint groups for smart routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners)
    
-   [Use GA to connect to backend services over HTTP/2](/help/en/ga/use-cases/configure-http-2-protocol-back-to-origin-in-global-acceleration)
    

## May 2024

**Feature**

**Update type**

**Description**

**References**

Instance monitoring

Update

The **CU Usage** and **Processed Traffic** metrics are added for pay-as-you-go standard GA instances.

[Monitoring and alerts](/help/en/ga/user-guide/monitoring-and-alerting)

## March 2024

**Feature**

**Update type**

**Description**

**References**

HTTP/3 support

New

Standard GA instances support HTTP/3 to improve the stability, security, and efficiency of data transmission.

-   [Add and manage smart routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners)
    
-   [Use GA with HTTP/3 to improve application access experience](/help/en/ga/use-cases/ga-uses-http-3-protocol-to-improve-application-system-access-experience)
    

## February 2024

**Feature**

**Update type**

**Description**

**References**

CU calculator

New

You can use the CU calculator to estimate the instance fees and CU fees for pay-as-you-go standard GA instances.

[Billing for pay-as-you-go Global Accelerator instances](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances)

CNAME

Update

You can view the regions where the CNAME records of a standard GA instance take effect by checking the DNS records.

[Configure a CNAME record](/help/en/ga/user-guide/add-a-cname-record-for-a-domain-name)

## December 2023

**Feature**

**Update type**

**Description**

**References**

Connection timeout

Update

Smart routing listeners support specifying the **Idle Connection Timeout** and ****Connection Request Timeout****.

[Add and manage smart routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners)

## October 2023

**Feature**

**Update type**

**Description**

**References**

Forwarding rules

Update

Forwarding conditions of the domain name and path types in forwarding rules support regular expression matching.

-   [Add and manage forwarding rules](/help/en/ga/user-guide/create-and-manage-forwarding-rules)
    
-   [Configure forwarding rules based on domain names and paths](/help/en/ga/user-guide/configure-forwarding-policies-for-domain-names-and-paths)
    

Accelerated IP protocol version

Update

Pay-as-you-go standard GA instances support **dual-stack** accelerated IP addresses. You can allocate both IPv4 and IPv6 accelerated IP addresses to an acceleration area. This allows IPv4 and IPv6 clients to access IPv4 services.

-   [Accelerated IP protocol version](/help/en/ga/user-guide/overview-1/#p-ndw-7gf-6gc)
    
-   [Add and manage acceleration areas](/help/en/ga/user-guide/add-and-manage-acceleration-areas)
    

New backend service types for standard GA instances

Update

Endpoints of standard GA instances support Network Load Balancer (NLB) and elastic network interfaces (ENIs) as backend service types.

-   [Endpoint groups and endpoints](/help/en/ga/user-guide/overview-4/)
    
-   [Add and manage endpoint groups for smart routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners)
    

## August 2023

**Feature**

**Update type**

**Description**

**References**

GA resource plans

New

GA resource plans are subscription packages for pay-as-you-go GA instances. After a resource plan is purchased and takes effect, it can be used to deduct CU fees and instance fees at a specific ratio. Resource plans are more cost-effective than the pay-as-you-go billing method.

[GA resource plans](/help/en/ga/product-overview/resource-package)

Basic GA instances support multiple accelerated IP addresses and endpoints

Update

Basic GA instances support adding multiple accelerated IP addresses and endpoints in the same region. You can map accelerated IP addresses to endpoint groups to distribute traffic to backend services.

-   [Add and manage acceleration areas](/help/en/ga/user-guide/add-and-manage-acceleration-areas-1#task-2253905)
    
-   [Add and manage endpoint groups and endpoints](/help/en/ga/user-guide/add-and-manage-endpoint-groups-and-endpoints-for-a-basic-ga-instance#task-2253915)
    

New backend service type for basic GA instances

Update

Endpoints of basic GA instances support Network Load Balancer (NLB) as a backend service type.

[Add and manage endpoint groups and endpoints](/help/en/ga/user-guide/add-and-manage-endpoint-groups-and-endpoints-for-a-basic-ga-instance#task-2253915)

## July 2023

**Feature**

**Update type**

**Description**

**References**

Basic DDoS protection

New

Basic DDoS protection is enabled by default for accelerated IP addresses of GA instances and public IP addresses of endpoints. It provides up to 5 Gbps of DDoS mitigation capability. The maximum amount of free mitigation traffic varies by region.

[Basic DDoS protection](/help/en/ga/user-guide/anti-ddos-origin-basic)

Bandwidth billing method

New

GA adds a pay-by-traffic bandwidth billing method. Traffic fees generated from accessing the GA network are settled and billed by CDT.

GA instances support selecting the public network quality type for accessing GA, including **BGP (Multi-ISP)** and **BGP (Multi-ISP) Pro**.

Standard GA instances support two types of transmission network quality: Premium Bandwidth For Cross-domain Acceleration and Leased Line For Cross-domain Acceleration.

-   [Pay-by-traffic](/help/en/ga/product-overview/pay-by-data-transfer)
    
-   [Cross-border traffic billing](/help/en/ga/product-overview/billing-rules-for-cross-border-data-transfer)
    

Instance billing method

New

GA now supports the pay-as-you-go billing method for instances.

-   [Billing for pay-as-you-go Global Accelerator instances](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances)
    
-   [Create and manage standard Global Accelerator instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances)
    
-   [Create and manage basic Global Accelerator instances](/help/en/ga/user-guide/create-and-manage-basic-ga-instances)
    

## March 2023

**Feature**

**Update type**

**Description**

**References**

Domain name management

New

GA provides an ICP filing-free service for accelerated domain names. You only need to associate an accelerated domain name that has an ICP filing with a GA instance. GA then provides the ICP filing-free service for the accelerated domain name and all its subdomains.

[Domain name management](/help/en/ga/user-guide/manage-domain-names#task-2258788)

Self-service unsubscription for basic bandwidth plans

Update

You can request to unsubscribe from subscription basic bandwidth plans in the GA console or the Expenses and Costs console.

[Refund policy](/help/en/ga/product-overview/refund-policies#task-2292765)

Instance purchase page optimization

Update

The GA instance purchase page is optimized. You can follow the on-screen instructions to purchase a GA configuration that suits your business needs.

-   [Create and manage standard Global Accelerator instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#task-2381612)
    
-   [Create and manage basic Global Accelerator instances](/help/en/ga/user-guide/create-and-manage-basic-ga-instances#task-2253326)
    

Business configuration wizard

New

GA provides configuration prompts and a configuration wizard page to optimize your deployment experience.

[Get started with Global Accelerator](/help/en/ga/getting-started/get-started#section-eyv-vwq-zhk)

## February 2023

**Feature**

**Update type**

**Description**

**References**

Basic bandwidth plans

Update

You can downgrade basic bandwidth plans.

[Upgrade or downgrade a basic bandwidth plan](/help/en/ga/product-overview/purchase-and-manage-basic-bandwidth-plans#section-vum-bls-ght)

Downgrade support for standard GA instances

Update

You can downgrade the instance types of standard GA instances.

[Create and manage standard Global Accelerator instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#section-q54-htx-1ik)

Self-service unsubscription for subscription GA instances

Update

You can request to unsubscribe from subscription GA instances in the GA console or the Expenses and Costs console.

[Refund policy](/help/en/ga/product-overview/refund-policies#task-2292765)

## January 2023

**Feature**

**Update type**

**Description**

**References**

Configuration-free 7-day free trial

Discontinued

The Alibaba Cloud GA configuration-free 7-day free trial has ended.

To try the GA service, we recommend that you participate in the limited-time first-month free trial. For more information, see [\[Trial\] Limited-time first-month free trial](/help/en/ga/product-overview/time-limited-one-month-free-trials-of-ga#concept-2471776).

None

## December 2022

**Feature**

**Update type**

**Description**

**References**

Tags

New

GA supports tags. You can add tags to standard GA instances, basic GA instances, bandwidth plans, and access control policies to mark and classify resources. This facilitates resource search and aggregation.

[Tag management](/help/en/ga/user-guide/manage-tags#task-2276082)

Resource groups

New

Resource groups help you manage resources and user permissions for multiple projects or applications within a single Alibaba Cloud account.

GA supports resource group management for the following resources: standard GA instances, basic GA instances, bandwidth plans, and access control policies.

-   [Create a standard GA instance](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#section-wme-8rk-i9x)
    
-   [Create a subscription basic instance](/help/en/ga/user-guide/create-and-manage-basic-ga-instances#section-wme-8rk-i9x)
    
-   [Purchase a basic bandwidth plan](/help/en/ga/product-overview/purchase-and-manage-basic-bandwidth-plans#section-lrh-d9o-4y8)
    
-   [Create an access control policy](/help/en/ga/user-guide/access-control#section-zx9-cd4-em3)
    

New backend service type for basic GA instances

Update

Endpoints of basic GA instances support Elastic Compute Service (ECS) as a backend service type.

[Add and manage endpoint groups and endpoints](/help/en/ga/user-guide/add-and-manage-endpoint-groups-and-endpoints-for-a-basic-ga-instance#task-2253915)

## November 2022

**Feature**

**Update type**

**Description**

**References**

Instance diagnosis

New

You can use the instance diagnosis feature to check the configuration and running status of a standard GA instance. The system provides quick fixes for detected issues.

[Instance diagnosis](/help/en/ga/user-guide/instance-diagnostics#task-2270633)

Certificate management

Update

You can replace additional certificates. This operation is suitable for scenarios where an additional certificate has expired and needs to be replaced with a new one, while the associated domain name remains unchanged.

[Replace an additional server certificate](/help/en/ga/user-guide/associate-and-manage-certificates#section-sa6-wqu-xr1)

## October 2022

**Feature**

**Update type**

**Description**

**References**

Origin probing

New

You can use the origin probing feature to monitor the end-to-end network quality from detection points to the origin server in real time. This helps you quickly locate network faults and perform targeted network optimization.

[Origin probing](/help/en/ga/user-guide/origin-probing#task-2196342)

## September 2022

**Feature**

**Update type**

**Description**

**References**

Custom routing listeners

New

After you configure a custom routing listener for a GA instance, the instance generates a port mapping table based on the listener port range, port ranges of the associated endpoint groups, and IP addresses of endpoints (vSwitches). The custom routing listener forwards client requests to specific IP addresses and ports in the vSwitches based on the port mapping table.

-   [Routing listeners](/help/en/ga/user-guide/overview-2/#section-u5b-97q-0zv)
    
-   [How custom routing listeners work](/help/en/ga/user-guide/how-custom-routing-listeners-work#concept-2246231)
    
-   [Add and manage custom routing listeners](/help/en/ga/user-guide/add-and-manage-custom-routing-listeners#task-2241137)
    

## June 2022

**Feature**

**Update type**

**Description**

**References**

Configuration-free 7-day free trial

New

Alibaba Cloud GA provides a configuration-free 7-day free trial. You only need to enter your business information. The system automatically configures the GA instance without requiring complex configuration steps.

None

Accelerated IP address type

New

Standard GA instances support the following two types of accelerated IP addresses:

-   Elastic IP Address: uses a custom nearby access mode. You can select a nearby access point based on your business needs. Each access point provides an independent EIP.
    
-   Anycast EIP: uses an automatic nearby access mode. You do not need to configure an acceleration area. Global Accelerator provides one Anycast EIP across multiple regions worldwide.
    

[Accelerated IP addresses](/help/en/ga/user-guide/overview-1/#section-vxi-r6e-pcc)

Basic GA instances

New

GA supports basic GA instances. Basic GA instances can be used for Layer 3 (IP) network acceleration.

-   [Basic Global Accelerator instances](/help/en/ga/user-guide/basic-ga-instances/)
    
-   [Comparison between standard and basic instances](/help/en/ga/product-overview/comparison-between-standard-and-basic-ga-instances#concept-2224361)
    
-   [Create and manage basic Global Accelerator instances](/help/en/ga/user-guide/create-and-manage-basic-ga-instances)
    
-   [Use a basic Global Accelerator instance to accelerate access](/help/en/ga/getting-started/use-basic-ga-instances-to-accelerate-content-delivery)
    

## March 2022

**Feature**

**Update type**

**Description**

**References**

Endpoint groups

Update

GA supports configuring multiple endpoint groups in different regions for a single TCP or UDP listener. You can set traffic dial values for the endpoint groups to control the traffic ratio forwarded to each group.

-   [How traffic dialing for multiple endpoint groups works and its scenarios](/help/en/ga/user-guide/distribute-traffic-across-endpoint-groups-in-different-scenarios#concept-2194393)
    
-   [Use GA traffic dialing to achieve smooth traffic shifting across regions](/help/en/ga/use-cases/examples-on-how-to-configure-the-traffic-distribution-feature-for-multiple-endpoint-groups#task-2187331)
    
-   [Use GA to accelerate cross-region applications for high-availability disaster recovery](/help/en/ga/use-cases/configure-disaster-recovery-to-ensure-the-high-availability-of-applications-that-are-deployed-across-regions#task-2097625)
    

## February 2022

**Feature**

**Update type**

**Description**

**References**

Additional HTTP header fields

New

You can add HTTP header fields when you configure an HTTP or HTTPS listener for a GA instance.

[Add an HTTP or HTTPS listener](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#section-p8q-jbh-5bm)

TLS security policies

New

You can select a TLS security policy when you configure an HTTPS listener for a GA instance.

-   [TLS security policies](/help/en/ga/user-guide/tls-security-policies#concept-2130168)
    
-   [Add an HTTP or HTTPS listener](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#section-p8q-jbh-5bm)
    

New backend service types for standard GA instances

New

GA supports adding Application Load Balancer (ALB) instances and Object Storage Service (OSS) buckets as backend service types.

[Endpoints](/help/en/ga/user-guide/overview-4/#section-kcj-zv4-t4j)

## January 2022

**Feature**

**Update type**

**Description**

**References**

Health checks

New

You can enable health checks for endpoint groups of a GA instance. After health checks are enabled, when an endpoint fails a health check, GA automatically distributes new requests to other endpoints that pass health checks. When the abnormal endpoint returns to normal, GA automatically restores the endpoint to service.

[Enable and manage health checks](/help/en/ga/user-guide/enable-and-manage-health-checks#task-2382619)

Large-scale port listeners

Update

For TCP or UDP listeners, you can configure more than 300 consecutive ports for a single listener. A listener with more than 300 consecutive ports is called a large-scale port listener.

[Large-scale listener ports](/help/en/ga/user-guide/overview-2/#section-kzi-zyz-jbb)

## September 2021

**Feature**

**Update type**

**Description**

**References**

Preserve client IP

Update

The **Proxy Protocol** method is supported.

This method is recommended when IPv6 clients access backend services. The backend server must support parsing the Proxy Protocol to obtain the source IP address information of the client.

[Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses#task-2416386)

## August 2021

**Feature**

**Update type**

**Description**

**References**

Access control

New

You can configure different access control methods and access control policies for different listeners.

[Enable access control for GA listeners](/help/en/ga/user-guide/access-control#task-2087382)

Access logs

New

The access log feature can record traffic information for all requests to endpoints. This helps you check access control rules and troubleshoot network issues.

[Use access logs](/help/en/ga/user-guide/using-access-logs#task-2089949)
