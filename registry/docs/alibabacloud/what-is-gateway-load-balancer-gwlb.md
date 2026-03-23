Gateway Load Balancer (GWLB) is a load balancing service that functions at the network layer, listening for traffic directed to all ports of a specific IP address and distributing the traffic to network virtual appliances (NVAs) within backend server groups. This ensures the high availability for the NVAs. GWLB supports various NVAs, including firewalls, intrusion detection systems, traffic mirroring, and deep packet inspection appliances.

## GWLB **components**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5610695671/CAEQUBiBgICzhtmt2RkiIDQwZDE1OGU5MjBjMjRlZTRiZDllNDEzYzliY2YzZTlm4720399_20241018144434.391.svg)

**Component**

**Description**

**Instance**

GWLB is a load balancer that functions at the third layer (network layer) of the Open Systems Interconnection (OSI) model, enhancing the security and availability of application systems by transparently distributing traffic to different backend servers.

**Listener**

GWLB listens for traffic directed to all ports of a specific IP address and forwards the traffic to backend server groups via the Geneve protocol. A GWLB instance supports only one listener.

**Server Group**

Backend servers that support the Geneve protocol can be organized into logical groups. Each server group contains one or more backend servers that process requests distributed by GWLB.

Server groups are independent of GWLB instances. You can associate a server group with different GWLB instances. You can configure [Elastic Compute Service (ECS)](/help/en/ecs/user-guide/what-is-ecs#topic-9543) instances, [elastic container instances](/help/en/eci/product-overview/what-is-elastic-container-instance#topic-1860079), [elastic network interfaces (ENIs)](/help/en/ecs/user-guide/eni-overview#concept-xzg-mgt-xdb), and [IP addresses](/help/en/slb/gateway-based-load-balancing-gwlb/user-guide/overview-of-gwlb-server-groups/) as backend services.

GWLB performs health checks to determine the availability of backend servers. It detects unhealthy servers in server groups and stops forwarding requests to them. GWLB supports flexible health check configurations. For example, you can specify the protocol, port, and thresholds for health checks.

## **How** GWLB **works**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5610695671/CAEQUBiBgMDO5tqt2RkiIDk1ZTAzNWY4YTNhZDQ4OTM4YzI4Zjc1ZTllNzYzN2Ew4449165_20240618150213.698.svg)

GWLB instances must work with the GWLB endpoint (GWLBe) provided by the PrivateLink service. The GWLBe is a specific type of Virtual Private Cloud (VPC) endpoint, that can be used to establish a private connection between a business VPC and a security VPC. Through the private connection, the GWLBe routes traffic to the GWLB instance within the security VPC for distribution.

The GWLBe controls inbound and outbound traffic using route tables. Incoming traffic is routed to the GWLB instance by the GWLBe, inspected and filtered by backend NVAs, routed back to the GWLBe by the GWLB instance, and finally forwarded to the application.

GWLB listens for all IP packets across all ports and transparently distributes traffic to backend server groups associated with IP listeners. GWLB supports scheduling algorithms, including a five-tuple (source IP address, destination IP address, IP protocol, source port, and destination port) hash, a three-tuple (source IP address, destination IP address, and IP protocol) hash, and a two-tuple (source IP address and destination IP address) hash, to route packets with the same hash value to the same backend NVA.

## **NVA providers**

GWLB supports the integration of third-party NVAs into backend server groups to monitor and filter incoming traffic.

## Use scenarios

**Deploying Internet firewalls with** GWLB

Enterprises nowadays are facing with complex network attacks. It is crucial to deploy firewall clusters of high availability to defend against the network attacks. With GWLB, enterprises can manage traffic in a centralized way, directing both inbound and outbound traffic to the firewall cluster for deep inspection and filtering. Besides, GWLB ensures the availability of the firewall cluster across multiple zones, eliminating single points of failure.

**Deploying NAT firewalls with** GWLB

A Network Access Translation (NAT) gateway is typically the egress for cloud resources accessing the Internet. To address complex network security challenges, enterprises can use GWLB to forward all traffic passing through the NAT gateway to a unified management layer. This ensures that all requests entering and exiting the Internet are monitored and filtered by firewalls, achieving overall control over traffic.

**Deploying VPC firewalls with** GWLB

In scenarios where cloud resources across multiple VPCs in a region need to connect with each other, you can use transit routers to direct the traffic to GWLB, which is responsible for distributing the traffic to backend security appliances for filtering. By allowing only the filtered traffic to communicate, network security is greatly enhanced.

## Create GWLB instances

To create GWLB instances, go to the [buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=slb_gwlb_public_intl).

## Deploy and manage GWLB instances

After you create an Alibaba Cloud account, you can deploy and manage GWLB instances in the following ways:

-   [GWLB console](https://slb.console.alibabacloud.com/gwlb/cn-hangzhou/gwlbs): a web interface that you can use to manage your GWLB service. You can create, use, or release GWLB instances in the console. For more information, see [Create and manage a GWLB instance](/help/en/slb/gateway-based-load-balancing-gwlb/user-guide/create-and-manage-gwlb-instances).
    
-   [Alibaba Cloud SDKs](https://next.api.alibabacloud.com/api-tools/sdk/Gwlb?version=2024-04-15&language=java-async-tea): SDKs for Java, Go, Python, and other programming languages.
    
-   [OpenAPI Portal](https://next.api.alibabacloud.com/api/Gwlb/2024-04-15/DescribeRegions): allows you to retrieve and call API operations, and dynamically generate SDK sample code.
    

## **References**

-   [GWLB features](/help/en/slb/gateway-based-load-balancing-gwlb/product-overview/functional-characteristics)
    
-   [GWLB billing rules](/help/en/slb/gateway-based-load-balancing-gwlb/product-overview/billing-products-template-simple-version)
    
-   [Use a GWLB instance to create a security check system for IPv4 traffic](/help/en/slb/gateway-based-load-balancing-gwlb/getting-started/gwlb-quickly-implements-load-balancing-for-ipv4-services)
