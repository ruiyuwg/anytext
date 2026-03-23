Virtual Private Cloud (VPC) NAT gateways provide the private NAT feature to allow communication among conflicting addresses or access to specified addresses.

## Background information

You can use VPC NAT gateways to address private network communication issues:

-   To enable private communication between two VPCs with conflicting addresses, you can configure a VPC NAT gateway with a unique private address for each VPC.
    
-   To enable private communication between a VPC and a data center, you can configure a NAT gateway and specify private IP addresses.
    

## Why VPC NAT Gateway?

VPC NAT Gateway provides the following benefits:

-   **Security**
    
    VPC NAT Gateway can avoid exposing addresses, uses SNAT entries to control inbound traffic, and supports fine-grained outbound rules.
    
-   **High elasticity**
    
    VPC NAT Gateway supports automatic scaling and high performance to meet requirements in scenarios such as traffic spikes.
    
-   **High availability**
    
    VPC NAT Gateway supports cross-zone disaster recovery. This ensures that services can run as expected if one zone fails.
    
-   **Flexible billing**
    
    VPC NAT Gateway supports the pay-as-you-go billing method to reduce costs.
    
-   **Monitoring**
    
    VPC NAT Gateway supports multiple monitoring metrics in various dimensions, and supports session logs and VPC flow logs to meet different monitoring requirements.
    

## Features

VPC NAT gateways provide the SNAT and DNAT features. The following table describes the features.

**Feature**

**Description**

SNAT

VPC NAT Gateway uses NAT IP addresses to allow instances in a VPC to access external private networks.

DNAT

VPC NAT Gateway maps NAT IP addresses and ports to IP addresses and ports of instances in a VPC to allow the instances to provide private services to external networks.

Auto scaling

NAT Gateway supports auto scaling to automatically adjust the performance metrics based on service traffic.

Primary/secondary zone disaster recovery

NAT Gateway supports primary/secondary zones for disaster recovery. The secondary zone is specified by Alibaba Cloud. If the primary zone is down, the secondary zone automatically takes over and the whole process does not take more than 10 minutes. You can deploy multiple NAT gateways to improve the service reliability.

Session log

NAT Gateway supports the session log feature. After you create an SNAT entry and traffic flows through a NAT gateway, SNAT sessions are recorded as logs to facilitate traffic monitoring and tracking.

Various monitoring metrics

VPC NAT Gateway supports multiple monitoring metrics. You can monitor VPC NAT gateways in real time.

## Scenarios

-   Allow networks in a hybrid cloud to access each other by using static IP addresses
    
    As finance and securities industries expand their business in the cloud, these industries often create multiple private networks that can communicate with each other. In some cases, regulators may demand that the networks access each other by using static private IP addresses. You can use the SNAT and DNAT features of VPC NAT gateways to allow multiple private networks to access each other by using static private IP addresses.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0345351571/CAEQQRiBgMDqnam9vhkiIGJlMjExNzJmNmJkYzQ1ZDk5YjczZmIyZDY4ZjgyZGJk5286340_20250618134928.042.svg)
    
-   Allow VPCs that have conflicting CIDR blocks to access each other
    
    Due to improper network planning or business consolidation, two VPCs that need to communicate with each other may have conflicting addresses. You can create a VPC NAT gateway and configure a NAT IP address for each VPC. Make sure that the two NAT IP addresses do not conflict with each other. One VPC uses SNAT to translate source IP address to the configured NAT IP address, which allows the VPC to access the other VPC. The other VPC uses the NAT IP address configured in the DNAT entry to provide external services. This way, the two VPCs can access each other.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0345351571/CAEQQRiBgIC0nda9vhkiIDRhZWQzMzM0MTY4ZTRkMDA4MGJiMDVlZjc0ODkzMmY25286340_20250618141037.980.svg)
    

## Usage notes

-   When you create a VPC NAT gateway, you must select a VPC and a vSwitch in the VPC. To facilitate route configuration, we recommend that you use a vSwitch that is exclusive to the VPC NAT gateway.
    
-   NAT IP addresses are IP addresses specified in SNAT or DNAT entries. After you create a VPC NAT gateway, the CIDR block of the vSwitch that you specify for the VPC NAT gateway is used as the default NAT CIDR block. An IP address from the default NAT CIDR block is used as the default NAT IP address. You can add IP addresses to the default CIDR block or create a NAT CIDR block. For more information about how to use NAT CIDR blocks to configure routes, see [Configure routes](/help/en/nat-gateway/user-guide/create-and-manage-a-vpc-nat-gateway#section-0bz-pib-rs0).
    
-   Newly created NAT CIDR blocks must meet the following requirements:
    
    -   The NAT CIDR block must fall within 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, or their subnets.
        
    -   The subnet mask must be 16 to 32 bits in length.
        
    -   The NAT CIDR block cannot overlap with the private CIDR block of the VPC to which the NAT gateway belongs. If you want to use other IP addresses from the VPC to provide NAT services, create a vSwitch and attach it to another VPC NAT gateway.
        
    -   You can specify the user CIDR block of a VPC as the NAT CIDR block of a VPC NAT gateway that belongs to the VPC. For more information, see [What is a user CIDR block?](/help/en/vpc/frequently-asked-questions#section-0md-o6f-qo3)
        
-   By default, a VPC NAT gateway can process traffic at 5 Gbit/s and scale up to 15 Gbit/s as traffic increases. To increase the traffic processing capacity, new connection rate, and concurrent connection rate, contact your account manager.
    
    **Metrics**
    
    **New connections per second**
    
    **Concurrent connections**
    
    **Throughput (including inbound and outbound traffic)**
    
    Default
    
    20,000
    
    500,000
    
    5 Gbit/s
    
    Maximum (auto scaling supported)
    
    100,000
    
    2,000,000
    
    15 Gbit/s
    
    **Note**
    
    If the maximum metric is exceeded, packet loss may occur, which may affect your services.
    

## Limits

### **Instance limits**

**Item**

**Limit**

**Adjustable**

Maximum number of VPC NAT gateways that you can create for a VPC

5

You can request a quota increase by using one of the following methods:

-   Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page and request a quota increase. For more information, see [Manage NAT Gateway quotas](/help/en/nat-gateway/user-guide/manage-nat-gateway-quotas#task-acp-xmk-wgb).
    
-   Go to the [Quota Center](https://quotas.console.alibabacloud.com) page and request a quota increase. For more information, see [Request a quota increase](/help/en/quota-center/user-guide/submit-an-application-to-increase-a-quota#task-2035549).
    

Number of NAT IP addresses that you can create for a VPC NAT gateway

15

You can request a quota increase by using one of the following methods:

-   Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page and request a quota increase. For more information, see [Manage NAT Gateway quotas](/help/en/nat-gateway/user-guide/manage-nat-gateway-quotas#task-acp-xmk-wgb).
    
-   Go to the [Quota Center](https://quotas.console.alibabacloud.com) page and request a quota increase. For more information, see [Request a quota increase](/help/en/quota-center/user-guide/submit-an-application-to-increase-a-quota#task-2035549).
    

### **SNAT limits**

**Item**

**Limit**

**Adjustable**

Maximum number of SNAT entries that you can create on a VPC NAT gateway

40

You can request a quota increase by using one of the following methods:

-   Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page and request a quota increase. For more information, see [Manage NAT Gateway quotas](/help/en/nat-gateway/user-guide/manage-nat-gateway-quotas#task-acp-xmk-wgb).
    
-   Go to the [Quota Center](https://quotas.console.alibabacloud.com) page and request a quota increase. For more information, see [Request a quota increase](/help/en/quota-center/user-guide/submit-an-application-to-increase-a-quota#task-2035549).
    

Maximum number of concurrent connections limited by the number of IP addresses in an SNAT entry

If ECS instances in a VPC access one destination IP address and one port through a VPC NAT gateway, the maximum number of concurrent connections supported by the VPC NAT gateway is N×55000, in which N refers to the number of NAT IP addresses specified in an SNAT entry.

N/A

### **DNAT limits**

**Item**

**Limit**

**Adjustable**

Maximum number of DNAT entries that you can create on a VPC NAT gateway

100

You can request a quota increase by using one of the following methods:

-   Go to the [Quota Management](https://vpc.console.alibabacloud.com/quota) page and request a quota increase. For more information, see [Manage NAT Gateway quotas](/help/en/nat-gateway/user-guide/manage-nat-gateway-quotas#task-acp-xmk-wgb).
    
-   Go to the [Quota Center](https://quotas.console.alibabacloud.com) page and request a quota increase. For more information, see [Request a quota increase](/help/en/quota-center/user-guide/submit-an-application-to-increase-a-quota#task-2035549).
    

## Related services

-   [What is VPC?](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb)
    
-   [What is CEN?](/help/en/cen/product-overview/what-is-cen/#concept-2090845)
