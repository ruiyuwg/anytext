A virtual private cloud (VPC) is a secure, isolated, and scalable network environment in the cloud. By default, VPCs are not connected to the Internet, but you can use products such as Elastic IP Address (EIP), Server Load Balancer (SLB), and NAT Gateway to enable resources in a VPC to communicate with the Internet.

## **Choose a public IP address type**

## IPv4

Resources in a VPC need public IPs for Internet access. Public IPv4 addresses include static IPs and EIPs.

Static IPs are assigned to cloud resources such as Elastic Compute Service (ECS) instances or Classic Load Balancer (CLB) instances when you create the resources. Unable to be reassigned or detached, static IPs remain unchanged until the associated resources are deleted. In contrast, an [EIP](/help/en/eip/product-overview/what-is-eip) is independent. It can be created separately and attached or detached as needed. **We recommend using EIPs for greater flexibility.**

> Application Load Balancer (ALB), Network Load Balancer (NLB), and NAT gateway use attached EIPs to support Internet access.

> The static public IPs of ECS instances and CLB instances can be converted to EIPs.

There are three types of EIPs:

-   BGP (Multi-ISP) EIP: The system automatically routes traffic over the optimal ISP line from multiple available options, ensuring a fast and stable Internet connection.
    
-   [BGP (Multi-ISP) Pro EIP](/help/en/eip/use-cases/use-boutique-eip-to-optimize-access-to-international-business-in-mainland-china): When your users from within the Chinese mainland access your service deployed outside the Chinese mainland, the system sends the responses through direct connections over premium ISP lines. This allows for lower latency and higher stability. Note that this works only for individual end users in the Chinese mainland; data centers are not supported.
    
-   [Anycast EIP](/help/en/anycast-eip/product-overview/what-is-anycast-eip): With an Anycast EIP, user traffic enters Alibaba Cloud's network immediately through their nearest access point. Then, it gets transmitted to your servers much faster than over public ISP networks. Anycast EIP is an ideal option if your business is deployed outside the Chinese mainland and provides services to a global user base.
    

**Item**

**BGP (Multi-ISP) EIP**

**BGP (Multi-ISP) Pro EIP**

**Anycast EIP**

Use case

General-purpose low-cost Internet connection

Transmitting responses from outside the Chinese mainland to within it

Using the same IP across multiple global regions

Limitations

-   Your business can be deployed in any region
    
-   Users access your service from anywhere using the Internet
    

-   Must be deployed in [the supported regions outside the Chinese mainland](/help/en/eip/use-cases/use-boutique-eip-to-optimize-access-to-international-business-in-mainland-china#96f3f30084n42)
    
-   Users access your service from within the Chinese mainland
    

-   Must be deployed in [the supported regions outside the Chinese mainland](/help/en/anycast-eip/product-overview/what-is-anycast-eip#title-8ea-s1r-s8b)
    
-   Users access your service from the nearest [Anycast EIP access points](/help/en/anycast-eip/product-overview/what-is-anycast-eip#title-f48-q88-8mz) outside the Chinese mainland
    

Quality

Standard. User traffic is routed through standard ISP lines.

High. User traffic is routed through dedicated ISP lines.

High. User traffic enters Alibaba Cloud's high-quality global backbone network immediately after being transmitted over standard ISP lines to an access point.

Cost

Low

Medium

High

## IPv6

After enabling IPv6 for your VPC and vSwitches, the system automatically creates an [IPv6 gateway](/help/en/ipv6-gateway/product-overview/what-is-an-ipv6-gateway/) and assigns it an IPv6 CIDR block, which by default only supports private network communication.

You can connect your cloud resources with the Internet by [activating IPv6 Internet bandwidth](/help/en/ipv6-gateway/user-guide/enable-and-manage-ipv6-internet-bandwidth#section-dvo-wjp-zcb) for the IPv6 address of the IPv6 gateway.

> IPv6 addresses are globally unique. You don't need additional public IPs for Internet connection.

## **Use load balancing for inbound Internet traffic**

Running your business on a single server makes your system prone to single points of failure (SPOFs).

**We recommend that you deploy multiple backend servers in different zones and associate them with a load balancer,** so that inbound Internet traffic is distributed across these servers. This improves the scalability and availability of your system and eliminates SPOFs.

We recommend using the next-generation load balancing products, such as [Application Load Balancer (ALB)](/help/en/slb/application-load-balancer/product-overview/what-is-alb/) and [Network Load Balancer (NLB)](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/) .

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0490875671/CAEQTxiBgMDUgurP0hkiIDhlMjM2ZDBiMWVmNzQzYWNhYjVhNWRkYzg4ODA3NzQ13963382_20230830144006.372.svg)

**Item**

**ALB**

**NLB**

Capabilities

-   Powerful Layer 7 processing capabilities and advanced routing features
    
-   Intended for HTTP, HTTPS, and QUIC protocols
    

-   Powerful Layer 4 processing capabilities and large-scale SSL over TCP certificate offloading
    
-   Intended for TCP, UDP, and SSL over TCP protocols
    

Performance

Up to 1 million QPS per instance

Up to 100 million concurrent connections per instance

Backend resource

-   ECS instances
    
-   ENIs
    
-   ECIs
    
-   IP addresses
    
-   Function Compute
    

-   ECS instances
    
-   ENIs
    
-   ECIs
    
-   IP addresses
    

O&M

Both support fast and elastic scaling. Their capacity can automatically scale as business load changes, without human intervention.

Use cases

-   Web applications that require high-performance automatic scaling at Layer 7
    
-   Applications that require low latency and large throughput, such as audio and video applications
    
-   Canary releases and blue-green deployments for cloud-native applications
    

-   Business that involves high concurrency and large throughput at Layer 4
    
-   Internet of Things (IoT) and Internet of Vehicles (IoV) services
    
-   Systems with multi-active disaster recovery designs or connecting on-premises data centers and cloud environments
    

## **Use a NAT gateway as a unified Internet egress**

A single server can access the Internet using its public IP address.

Though a server can access the Internet using its public IP, letting many servers do so individually consumes IP resources, increases costs, and complicates network management.

You can use an [Internet NAT gateway](/help/en/nat-gateway/user-guide/public-network-nat-gateway) and configure SNAT entries to let multiple ECS instances in a VPC access the Internet through shared EIPs. This saves public IP resources and costs and simplifies network management. In addition, the Internet NAT gateway masks the originating IPs of ECS instances through address translation, avoiding external exposure and improving security.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0490875671/CAEQTxiBgMCf186X0xkiIGMyMzJjNzZmNTM4ZTQyYWRiZDBiZjg3ZGRhYTk4NWEx3963382_20230830144006.372.svg)

**Item**

**Using an EIP**

**With an Internet NAT gateway**

Cloud resources sharing an EIP

Not supported

Supported

Scope of resources that can use the same EIP

An ECS instance or an ENI

-   A VPC
    
-   A vSwitch
    
-   An ECS instance or an ENI
    
-   A custom CIDR block
    

Overall resource cost with many servers

High

Low

Security

Standard

High

## **Use an Internet gateway to centrally manage Internet traffic**

## IPv4 gateway

By default, resources in a VPC communicate with the Internet through their public IPs. In some cases, you may want to centrally manage Internet access from your cloud resources for security purposes, but this fails if, for example, another team in your organization assigns public IPs to ECS instances.

In this case, you can use an [IPv4 gateway](/help/en/vpc/ipv4-gateway-overview) combined with proper route table configurations to control Internet access traffic through the IPv4 gateway. This helps reduce security risks caused by scattered access.

> Public vSwitch: The route table associated with this vSwitch has a route with **Destination CIDR Block** set to `0.0.0.0/0` and **Next Hop** set to the IPv4 gateway. Resources in this vSwitch can access the Internet with their public IPs.

> Private vSwitch: The route table associated with this vSwitch does not have routes pointing to the IPv4 gateway. Resources cannot access the Internet even with public IPs. However, you can configure routes pointing to a NAT gateway in a public vSwitch to route Internet traffic using the public IP of the NAT gateway. Configure routes before activating the IPv4 gateway to prevent resources in private vSwitches from losing Internet access.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0490875671/CAEQUBiBgIChgfyC2RkiIDA5MmFhNjI4OWMwNjRkMDY4ODFjM2E1ZWNkZGI1ZGU53963382_20230830144006.372.svg)

**Important**

The IPv4 gateway manages Internet traffic for the VPC. After activation, it changes the default Internet access mode of the VPC. If not configured properly, this may disconnect all resources in the VPC from the Internet. Proceed with caution. For details, see [IPv4 gateway](/help/en/vpc/ipv4-gateway-overview#567c03c080ytu).

The IPv4 gateway can also be used to implement [privately used public CIDR blocks and route traffic to third-party security devices](/help/en/vpc/ipv4-gateway-overview#b5973a5e11s0l).

## IPv6 gateway

By default, the IPv6 addresses assigned to cloud resources only support private network connection. You can use an [IPv6 gateway](/help/en/ipv6-gateway/product-overview/what-is-an-ipv6-gateway/) for your VPC and [activate IPv6 Internet bandwidth](/help/en/ipv6-gateway/user-guide/enable-and-manage-ipv6-internet-bandwidth) for the IPv6 addresses to enable Internet connection.

The IPv6 gateway manages Internet traffic for a VPC. You can configure [egress-only rules](/help/en/ipv6-gateway/user-guide/create-and-manage-an-egress-only-rule) to let your cloud resources access the Internet, while preventing inbound access from the Internet.

> Internet-facing CLB instances are not part of VPCs. The traffic they handle is not controlled by IPv6 gateways.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0490875671/CAEQTxiBgID.nPLP0hkiIGQ3NDU0ZjVkMzkyODRjYTE5MjIxZTgxMTY0YzExODRj3963382_20230830144006.372.svg)

## **Accelerate global Internet access**

Internationally used applications, such as AI agents, video games, and web applications, are prone to issues like high latency, frequent jitters, and slow response caused by substandard Internet connection, which can significantly undermine user experience.

You can use [Global Accelerator](/help/en/ga/product-overview/what-is-global-accelerator/) to allow requests from end users to enter Alibaba Cloud's network from their nearest access point. These requests are then transmitted to your servers through Alibaba Cloud's high-quality global backbone network. This greatly shortens the Internet transmission path and reduces problems such as latency, jitter, and low speed, thereby improving the overall user experience.

## **Reduce Internet costs**

The fees charged for Internet connectivity can strain your budget in addition to the costs of cloud resources.

We recommend the following methods to reduce Internet costs:

1.  Cost for public IP use: Use a load balancer to centrally control inbound Internet traffic and a NAT gateway to centrally control outbound Internet traffic. This way, your system functions with fewer public IPs, thereby reducing [public IP retention fees (formerly EIP configuration fees)](/help/en/eip/pay-as-you-go/#title-dcu-yw2-38q).
    
2.  Cost for Internet traffic: Use [Cloud Data Transfer (CDT)](/help/en/cdt/product-overview/what-is-cdt). It provides a free traffic quota and implements a billing method which adds up the IPv4 and IPv6 traffic from multiple cloud products, and applies cumulative tiered pricing to the total amount. CDT can effectively reduce your Internet traffic costs.
