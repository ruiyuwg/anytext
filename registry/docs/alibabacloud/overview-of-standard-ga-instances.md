Standard Global Accelerator instances connect users in different acceleration regions to origin servers that are deployed in different regions and accelerate content delivery at Layer 4 (TCP and UDP) and Layer 7 (HTTP and HTTPS).

## Overview of standard GA instances

Standard Global Accelerator instances support multiple access modes and provide end-to-end acceleration services to improve the performance of applications that are used by a global audience.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8432123371/CAEQLBiBgIDx1uXnixkiIDgzYzFhMWRkNWZlNDQxYTJiZjEwMzdmMDRjYzNiMGU03963382_20230830144006.372.svg)

**Access modes**

Standard Global Accelerator instances allow you to accelerate access through an accelerated IP address or a CNAME. When a client connects to an accelerated IP address or CNAME, traffic is routed to the nearest access point of the Alibaba Cloud global transmission network.

-   Accelerated IP address
    
    -   Elastic IP address (EIP): Global Accelerator provides separate EIP based on acceleration regions. Users in each acceleration region can connect to GA through region-specific EIPs.
        
    -   Anycast EIP: Users in multiple regions can connect to GA through a static IP address.
        
-   CNAME
    
    Map the domain name that you want to accelerate to the CNAME that is allocated by GA to accelerate access to the backend service. For more information, see What is DNS?
    

**Acceleration network**

Standard Global Accelerator instances connect users in different acceleration regions to origin servers that are deployed in different regions and accelerate content delivery at Layer 4 (TCP and UDP) and Layer 7 (HTTP and HTTPS). In addition, standard Global Accelerator instances support nearby termination of TCP connections and nearby SSL offloading, further improving the acceleration performance of content delivery.

After GA receives client requests, GA forwards the requests to the backend services based on the routing type of the listener to avoid network congestion and reduce latency and network jitters.

**Origin server connection**

The following network connections are supported when GA forwards client requests to endpoints:

-   Private network connection: This type of network connection is used for endpoints that are deployed on Alibaba Cloud. You can specify Elastic Compute Service (ECS) instances, elastic network interfaces (ENIs), Classic Load Balancer (CLB) instances, Application Load Balancer (ALB) instances, Network Load Balancer (NLB) instances, Object Storage Service (OSS) buckets, and vSwitches as endpoints. This prevents endpoints from being exposed to the Internet and ensures the security of network connections.
    
-   Internet connection: This type of network connection is used for endpoints that are deployed outside Alibaba Cloud, including endpoints that are deployed in data centers and endpoints that are not supported by Alibaba Cloud. You can specify custom IP addresses and custom domain names as endpoints. For example, you can specify the CNAME of Web Application Firewall (WAF) as the custom domain name. WAF detects and filters malicious requests based on the protection policies that you configure and forwards trusted requests to the origin server. This ensures the security of your services.
    

## **Billling method**

Global Accelerator instances support the subscription and pay-as-you-go billing methods. Different billing methods support different bandwidth metering methods. Each metering method is ideal for different scenarios. You can select a metering method based on your business requirements.

**Instance billing method**

**Bandwidth metering method**

**Scenario**

[Pay-as-you-go](/help/en/ga/product-overview/billing-of-pay-as-you-go-ga-instances)

[Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer-1/) (managed by CDT)

You do not need to select the instance specification required by your business. You are charged based on the actual usage of each billable item.

This billing method is suitable for scenarios where resource usage frequently changes. If you cannot estimate the resource usage and the amount of data transfer, we recommend that you select a pay-as-you-go Global Accelerator instance.

[Billing of subscription GA instances](/help/en/ga/product-overview/billing-of-ga-instances)

[Pay-by-bandwidth](/help/en/ga/product-overview/billing-of-bandwidth-plans/) (bandwidth plan)

You must select an instance specification that meets your business requirements, associate a bandwidth plan with the instance, and then complete other configurations.

This billing method is suitable for scenarios where resource usage is stable and resources are required for a long period of time.

**Important**

-   The first time you use a pay-as-you-go Global Accelerator instance, go to the [pay-as-you-go GA activation page](https://common-buy-intl.alibabacloud.com/?commodityCode=ga_afterpay_public_intl) and activate Global Accelerator as prompted.
    
-   You can purchase GA resource plans to offset the Capacity Unit (CU) fees and instance fees of pay-as-you-go Global Accelerator instances. Resource plans are more cost-effective than the pay-as-you-go billing method. For more information, see [GA resource plans](/help/en/ga/product-overview/resource-package).
    
-   You can select the billing method only when you purchase a Global Accelerator instance. The billing method cannot be changed after a GA instance is created.
    

## Acceleration configurations

### Acceleration configuration (pay-as-you-go)

#### **ISP line type**

You can select the ISP line type. Clients use ISP lines to connect to acceleration regions of GA.

-   **BGP (Multi-ISP)**: provides premium BGP lines across the globe. This is the default line type. BGP lines from different ISPs can be used. The optimal BGP line is automatically selected to ensure network stability.
    
    All acceleration regions support BGP (Multi-ISP).
    
-   **BGP Pro**: BGP (Multi-ISP) Pro lines optimize data transmission to the Chinese mainland and improve connection quality for international services. Cross-border connections are established by using Chinese mainland ISP services when BGP (Multi-ISP) Pro lines provide services to users in the Chinese mainland (except data centers). This reduces network latency.
    
    BGP (Multi-ISP) Pro is available only in the China (Hong Kong) and Japan (Tokyo) regions.
    

#### **Transmission network type**

The transmission network is used to accelerate content delivery between acceleration regions and endpoint groups across borders.

-   **BGP (Multi-ISP) Pro**: BGP (Multi-ISP) Pro lines are used for network acceleration between regions in the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan).
    
    You do not need to perform enterprise real-name verification.
    
-   **Cross-border Express Connect**: Cross-border Express Connect circuits are used for network acceleration between regions in the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan).
    
    Cross-border Express Connect circuits provide better acceleration performance but require enterprise real-name verification.
    

For more information, see [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer) and [Billing rules for cross-border data transfer](/help/en/ga/product-overview/billing-rules-for-cross-border-data-transfer).

### Accelerated configuration (subscription)

The acceleration configurations of a subscription standard Global Accelerator instance include the instance specification, accelerated IP address type, and bandwidth plan type.

#### **Instance Specification**

**Subscription** **standard** Global Accelerator instances support multiple specifications. Different specifications provide different acceleration capabilities. The following table describes the specifications.

**Specifications**

**Number of acceleration regions**

**Maximum bandwidth**

**Maximum Concurrent Connections**

Small Ⅰ

1

20 Mbps

5,000

Small2

2

40 Mbps

10,000

Small Ⅲ

3

60 Mbps

15,000

Medium Ⅰ

5

100 Mbps

25,000

Medium Ⅱ

8

160 Mbps

40,000

Medium Ⅲ

10

200 Mbps

50,000

Large Ⅰ

All regions

For more information about the supported acceleration areas and regions, see [Overview of acceleration areas](/help/en/ga/user-guide/overview-1/#section-99j-n10-9c3).

400 Mbps

100,000

Large Ⅱ

600 Mbps

150,000

Large Ⅲ

800 Mbps

200,000

Large Ⅳ

1 Gbps

250,000

Large Ⅴ

1.2 Gbps

300,000

Large Ⅵ

1.4 Gbps

350,000

Large Ⅶ

1.6 Gbps

400,000

Large Ⅷ

1.8 Gbps

450,000

Super Large Ⅰ

2 Gbps

500,000

Super Large Ⅱ

4 Gbps

1,000,000

**Note**

By default, GA instances whose specifications are Large III or higher are unavailable. To use GA instances whose specifications are Large III or higher, contact your account manager.

#### **Accelerated IP address type**

**Subscription** **standard** Global Accelerator instances support the following types of accelerated IP addresses: Elastic IP Address (EIP) and Anycast EIP.

**Item**

**Elastic IP Address (EIP)**

**Anycast EIP**

**Access mode**

**The custom access mode is used. You must specify an acceleration area.**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8432123371/CAEQLxiBgMCzw9K3mhkiIDIxYTA1MGE2YWY0NTRhZWFhNGJmM2U3YmQ1MjNmY2Iw3963382_20230830144006.372.svg)

You can select acceleration areas and acceleration regions based on your business requirements. Global Accelerator allocates a separate EIP to each acceleration region.

**The automatic access mode is used. You do not need to specify an acceleration area.**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8432123371/CAEQLxiBgMDKwtK3mhkiIDQ1MzU0MTNhZmNlYTQ5OThhYTNlNWRhYzVhNmM1Zjlh3963382_20230830144006.372.svg)

Global Accelerator allocates an Anycast EIP to multiple regions across the globe. Users can connect to the nearest access point of the Alibaba Cloud global transmission network by sending requests to the Anycast EIP.

**Supported access points**

For more information about the acceleration areas and regions supported by Global Accelerator, see [Acceleration areas and regions](/help/en/ga/user-guide/overview-1/#05cc333029x1g).

The acceleration service depends on the access points that are supported by Anycast EIP. You can use Anycast EIPs to accelerate content delivery for clients outside the Chinese mainland. To accelerate content delivery for clients in the Chinese mainland by using Anycast EIPs, you must specify China (Hong Kong) as the acceleration region. For more information, see the "Access point locations" section of the [What is Anycast EIP?](/help/en/anycast-eip/product-overview/what-is-anycast-eip#section-24l-kft-zbq) topic.

**Characteristics**

-   Advantages: Different accelerated IP addresses are provided for clients based on network latency after the client requests are resolved by using Alibaba Cloud DNS. This ensures that the optimal routes are used.
    
-   Disadvantages: The configuration and maintenance are complex. You must specify acceleration areas and allocate bandwidth based on your business requirements. You cannot use static IP addresses to provide services.
    

-   Advantages: You do not need to specify acceleration areas and regions. Clients can automatically connect to the nearest access point, which greatly reduces O&M workloads.
    
-   Disadvantages: Clients can connect only to the access points that are supported by Anycast EIPs. The acceleration performance varies based on the Internet Service Provider (ISP).
    

**Note**

-   For pay-as-you-go standard Global Accelerator instances, two accelerated IP addresses of the **EIP** type are allocated to each acceleration region. Both accelerated IP addresses can receive client traffic at the same time to ensure high availability of the acceleration area.
    
-   By default, you cannot use **Anycast EIPs** as accelerated IP addresses. To use Anycast EIPs as accelerated IP addresses, go to the Quota Center console, find the quota named **GA supports anycast**, and then click Apply in the Actions column. For more information, see the "Adjust quotas" section of the [Manage GA quotas](/help/en/ga/user-guide/manage-ga-quotas#section-yqx-xul-73a) topic.
    
-   To use **Anycast EIPs**, the Global Accelerator instances and basic bandwidth plans must meet the following requirements:
    
    -   Global Accelerator instances: Select subscription standard Global Accelerator instances whose specifications are Large Ⅰ or higher and whose bandwidth metering method is **pay-by-bandwidth**.
        
    -   Basic bandwidth plans: You must select the premium bandwidth type and the pay-by-data-transfer metering method. By default, basic bandwidth plans that use the pay-by-data-transfer metering method are not available. To use these plans, contact your account manager.
        

### **Bandwidth plan type**

After you purchase a **subscription** Global Accelerator instance, you must associate a basic bandwidth plan with the Global Accelerator instance.

The following types of bandwidth are supported by basic bandwidth plans: basic, enhanced, and premium. The acceleration type, accelerated endpoint, and acceleration scope of a basic bandwidth plan vary based on the bandwidth type, as described in the following table.

**Bandwidth type**

**Acceleration type**

**Accelerated endpoint**

**Acceleration scope**

Basic

Applications deployed on Alibaba Cloud

-   Public IP addresses provided by Alibaba Cloud
    
-   Elastic Compute Service (ECS) instances
    
-   Elastic network interfaces (ENIs)
    
-   Classic Load Balancer (CLB) (formerly known as SLB) instances
    
-   Application Load Balancer (ALB) instances
    
-   Network Load Balancer (NLB) instances
    
-   Object Storage Service (OSS) buckets
    
-   vSwitches
    

By default, the acceleration area and the area where the endpoint is deployed are located in the Chinese mainland.

Enhanced

-   Applications deployed on Alibaba Cloud
    
-   Applications deployed outside Alibaba Cloud
    

-   Public IP addresses provided by Alibaba Cloud
    
-   ECS instances
    
-   ENIs
    
-   CLB instances
    
-   ALB instances
    
-   NLB instances
    
-   OSS buckets
    
-   vSwitches
    
-   Custom IP addresses
    
-   Custom domain names
    

By default, the acceleration area and the area where the endpoint is deployed are located in the Chinese mainland.

Premium

-   Applications deployed on Alibaba Cloud
    
-   Applications deployed outside Alibaba Cloud
    

-   Public IP addresses provided by Alibaba Cloud
    
-   ECS instances
    
-   ENIs
    
-   CLB instances
    
-   ALB instances
    
-   NLB instances
    
-   OSS buckets
    
-   vSwitches
    
-   Custom IP addresses
    
-   Custom domain names
    

By default, the acceleration area and the area where the endpoint is deployed are located outside the Chinese mainland. If you want to accelerate data transfer between the Chinese mainland and other areas, you must select China (Hong Kong) as the acceleration region.

**Note**

For more information about backend service types, see [Overview of endpoint groups and endpoints](/help/en/ga/user-guide/overview-4/).

You can select different bandwidth types based on the deployment of your services and the region that requires acceleration.

**Note**

If the accelerated service is deployed in the Chinese mainland or the acceleration region is in the Chinese mainland, you must apply for an Internet Content Provider (ICP) number before you can provide services. For more information, see [What is an ICP filing?](/help/en/icp-filing/basic-icp-service/product-overview/what-is-an-icp-filing#concept-nx4-hql-zdb)

**Acceleration area**

**Service region**

**Server deployment**

**ICP number for web service**

**Bandwidth type**

Chinese mainland

Chinese mainland

On Alibaba Cloud

Yes

Standard bandwidth

Outside Alibaba Cloud

Yes

Enhanced bandwidth plans

Outside the Chinese mainland

On Alibaba Cloud

Not required

Premium bandwidth plans

You must specify China (Hong Kong) as the acceleration region.

Outside Alibaba Cloud

Not required

Premium bandwidth plans

You must specify China (Hong Kong) as the acceleration region.

Outside the Chinese mainland

Outside the Chinese mainland

On Alibaba Cloud or outside Alibaba Cloud

Not required

Premium bandwidth plans

Chinese mainland

On Alibaba Cloud

Yes

Premium bandwidth plans

You must specify China (Hong Kong) as the acceleration region.

Outside Alibaba Cloud

Yes

Premium bandwidth plans

You must specify China (Hong Kong) as the acceleration region.

## References

-   For information about how to use standard GA instances, see [Get started with GA](/help/en/ga/getting-started/get-started).
    
-   For information about how to manage GA instances, see the following topics:
    
    -   [Create and manage standard GA instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#task-2381612)
        
    -   [Add and manage acceleration areas](/help/en/ga/user-guide/add-and-manage-acceleration-areas#task-2382321)
        
    -   [Add and manage intelligent routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#task-2382120)
        
    -   [Add and manage custom routing listeners](/help/en/ga/user-guide/add-and-manage-custom-routing-listeners#task-2241137)
        
    -   [Create and manage the endpoint groups of intelligent routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#task-2039654)
        
    -   [Create and manage the endpoint groups of custom routing listeners](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-custom-routing-listeners#task-2243309)
        
-   For information about how to accelerate access to a backend service by specifying the domain name, see the following topics:
    
    -   To accelerate access to a backend service, you need to map the domain name that you want to accelerate to the CNAME that is allocated by Global Accelerator. For more information, see [Add a CNAME record for a domain name](/help/en/ga/user-guide/add-a-cname-record-for-a-domain-name).
        
    -   Global Accelerator provides a ICP filing-free service for accelerated domain names. After you associate an accelerated domain name that has an Internet Content Provider (ICP) number with a Global Accelerator instance, you do not need to complete further ICP filing for the domain name or its subdomains on Alibaba Cloud. For more information, see [Manage domain names](/help/en/ga/user-guide/manage-domain-names).
        
-   Application Load Balancer (ALB) is integrated with GA. You can purchase a pay-as-you-go standard GA instance when you create an ALB instance. For more information, see [Integrate ALB with GA to enable application acceleration](/help/en/slb/application-load-balancer/use-cases/alb-realizes-application-acceleration-through-ga).
    
-   Basic GA instances provide one-to-one acceleration services between acceleration regions and origin server regions. Basic GA instances provide acceleration services only at Layer 3 (IP protocols). For more information about basic GA instances, see [Use a Basic GA Instance](/help/en/ga/user-guide/basic-ga-instances/).
