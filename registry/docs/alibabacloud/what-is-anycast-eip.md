Anycast elastic IP addresses (Anycast EIPs) serve as fixed ingresses on applications hosted on Alibaba Cloud. You can use Anycast EIPs in combination with high-bandwidth BGP lines and the global network of Alibaba Cloud. This allows users across the globe to access services through the nearest access point with a low network latency.

## **Overview**

![Anycast EIP架构图4](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3223504561/p141015.png)

An Anycast EIP is a public IP address that you can purchase and use as an independent resource. Each Anycast EIP is assigned a public IP address that can access the Internet. This IP address can be assigned throughout an access area and is not to subject to regions. After you associate the Anycast EIP with a cloud resource, user traffic can be routed from the nearest access point to Alibaba Cloud. After traffic is routed to Alibaba Cloud, the Anycast EIP selects an optimal route and forwards user requests to endpoints. This improves Internet access experience.

**Note**

We recommend that you use Anycast EIPs only to provide services. Third parties may use Anycast or similar features to provide services. If you use Anycast EIPs to access third-party services, errors may occur.

## Components

The following table describes the components of an Anycast EIP.

**Component**

**Description**

**Access area**

The access point locations where users can access Alibaba Cloud.

Anycast EIPs can be anycast from all access point locations outside the Chinese mainland.

**IP address**

The public IP address that is used to access the endpoints on Alibaba Cloud.

After you create an Anycast EIP, the system automatically allocates a public IP address to the Anycast EIP. Users can use the Anycast EIP to access the associated endpoint on Alibaba Cloud through the nearest access point.

**Access point**

An access point serves as an ingress through which network traffic is routed to Alibaba Cloud. Each access point is a point of presence (PoP) or a region of Alibaba Cloud. For more information, see [Access points](#section-24l-kft-zbq).

**Origin server region**

The region where the endpoint is deployed.

-   Supported regions: China (Hong Kong), Singapore, US (Silicon Valley), US (Virginia), Germany (Frankfurt), and Japan (Tokyo).
    
-   Supported origin resource types:
    
    -   Elastic network interface (ENI)
        
    -   Classic Load Balancer (CLB) instance in a virtual private cloud (VPC)
        
    -   Application Load Balancer (ALB) instance (operations supported only on the ALB side)
        
    -   Network Load Balancer (NLB) instance (operations supported only on the NLB side)
        

**Note**

-   For more information about how to associate an Anycast EIP with an ALB instance, see [Associate Anycast EIPs with an ALB instance to enable access through the nearest access point](/help/en/slb/application-load-balancer/use-cases/associate-an-anycast-eip-with-an-alb-instance#task-2258131).
    
-   For more information about how to associate an Anycast EIP with an NLB instance, see [Associate Anycast EIPs with an NLB instance to enable access through the nearest access point](/help/en/slb/network-load-balancer/use-cases/associate-anycast-eips-with-an-nlb-instance-to-enable-access-through-the-nearest-access-point#main-2345430).
    

## Access point locations

The following table describes the access point locations from which an Anycast EIP can be announced.

**Area**

**Region**

Asia Pacific

China (Hong Kong), Singapore (Singapore), Thailand (Bangkok), Philippines (Manila), Vietnam (Ho Chi Minh), South Korea (Seoul), Japan (Tokyo), Malaysia (Kuala Lumpur), and Indonesia (Jakarta)

North America

US (Silicon Valley) and US (Virginia)

South America

Brazil (Sao Paulo)

Europe

UK (London), Germany (Frankfurt), and France (Paris)

**Note**

-   Anycast EIPs can be used only in regions outside the Chinese mainland. You cannot use Anycast EIPs in the Chinese mainland.
    
-   The information in the preceding table is for reference only. Alibaba Cloud may update the access point information in the table without sending notifications to you. Alibaba Cloud may update the access point list when a specific event occurs. For example, Alibaba Cloud updates the list when an access device is down for maintenance, an access device fails, a new access point is added, or an existing access point is removed.
    

## Benefits

-   **Ease of use**
    
    Anycast EIPs allow Internet access, which is similar to EIPs. Therefore, after you associate an Anycast EIP with a CLB instance, the CLB instance can use the Anycast EIP to provide services over the Internet. No further configurations are required. This improves the efficiency of workload deployment.
    
-   **High security**
    
    Anycast EIPs work with cloud-native security services to effectively protect Internet services from attacks and secure access to backend services.
    
-   **High stability and reliability**
    
    Each Anycast EIP supports connections from multiple PoPs. When one of the access points is down, network traffic is routed to another access point. This ensures high reliability.
    
-   **Low network jitter**
    
    Anycast EIPs allow you to connect to Alibaba Cloud through the nearest PoP. You can use the high-quality BGP bandwidth and global network provided by Alibaba Cloud to access the backend server with which the Anycast EIP is associated. This reduces network jitter for Internet connections.
