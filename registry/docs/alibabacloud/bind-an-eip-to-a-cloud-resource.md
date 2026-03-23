After you associate an Elastic IP Address (EIP) with a cloud resource, that resource can communicate over the internet.

EIP supports associating with [Elastic Desktop Service (ECS) instances](/help/en/ecs/user-guide/overview-52), [elastic network interfaces (ENIs)](/help/en/ecs/user-guide/eni-overview), [Application Load Balancer (ALB) instances](/help/en/slb/application-load-balancer/user-guide/alb-instance-overview), [Network Load Balancer (NLB) instances](/help/en/slb/network-load-balancer/user-guide/overview-of-nlb-instances/), [Classic Load Balancer (CLB) instances](/help/en/slb/classic-load-balancer/user-guide/clb-instance/), [Internet NAT gateways](/help/en/nat-gateway/user-guide/use-internet-nat-gateway-for-public-network-access), and [high-availability virtual IP addresses (HaVips)](/help/en/vpc/highly-available-virtual-ip-address-havip).

## **Associate an EIP with an ECS instance**

Associate an EIP directly with a VPC-type ECS instance in the same region. This is the simplest way to give a single ECS instance a public IP address.

**Constraints:**

-   Each ECS instance supports only one EIP.
    
-   The ECS instance must be in the **Running** or **Stopped** state, with no fixed public IP address or other EIP already associated.
    
-   The EIP associates in NAT mode, which handles IP-layer and transport-layer address and port information only. Protocols that depend on NAT Application Layer Gateway (NAT ALG) are not supported.
    

### **Console**

#### **Associate an EIP**

1.  Go to the [Elastic IP Addresses console](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips) and select the region of the EIP.
    
2.  Find the target EIP, click **Associate with Resource** in the **Actions** column, select **ECS Instance**, then select the target instance.
    

#### **Replace the EIP**

Disassociate the current EIP first, then associate the new one.

#### **Recovery a released EIP**

An EIP address does not change during its lifecycle. If an EIP is released due to expiration or overdue payment, you can attempt to [recover it within 7 days](/help/en/eip/elastic-ip-address#13bce237a8bn9).

### **API**

Call [AssociateEipAddress](/help/en/eip/developer-reference/api-vpc-2016-04-28-associateeipaddress-eips) with `InstanceType` set to `EcsInstance`.

## **Associate EIPs with ENIs**

A single ECS instance supports only one directly associated EIP. To use multiple public IP addresses on one ECS instance—for example, to host multiple independent services—associate EIPs with the instance's ENIs instead.

### **NAT mode (multiple EIPs per ECS instance)**

In NAT mode, each EIP maps one-to-one with a private IP on the ENI. The number of EIPs you can associate depends on the number of private IPs assigned to the ENI.

> The number of secondary ENIs supported varies by [instance type](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).

> After attaching a secondary ENI to an ECS instance, some images may not automatically recognize the ENI IP address or add routes. If so, [configure the secondary ENI](/help/en/ecs/user-guide/create-and-use-an-eni#task-1563594) manually.

> In NAT mode, protocols that depend on NAT ALG are not supported. Both primary and secondary ENIs are supported.

Two approaches are available:

-   **Multiple ENIs**: Associate multiple secondary ENIs with a single ECS instance, associate one EIP with each, and associate each ENI with a different security group for fine-grained access control.
    
-   [**Multiple EIPs on a single ENI**](/help/en/eip/use-cases/associate-multiple-eips-with-a-secondary-eni-in-nat-mode): Attach one secondary ENI, assign multiple secondary private IPs, and associate an EIP with each in NAT mode.
    

#### **Console**

1.  Go to the [Elastic IP Addresses](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips) console and select the region of the EIP.
    
2.  Find the target EIP, click **Associate with Resource** in the **Actions** column, select **ENI**, choose **NAT Mode**, and select the secondary private IP to associate with.
    

#### **API**

-   Call [AssociateEipAddress](/help/en/eip/developer-reference/api-vpc-2016-04-28-associateeipaddress-eips) with `InstanceType` set to `NetworkInterface` and `Mode` set to `NAT`.
    

-   Call [AssociateEipAddressBatch](/help/en/eip/developer-reference/api-vpc-2016-04-28-associateeipaddressbatch-eips) to associate multiple EIPs with secondary ENIs in a single request.
    

### Cut-through mode

In standard NAT mode, the ECS network interface is only aware of its private IP and cannot see the EIP. EIP cut-through mode makes the EIP directly visible on the secondary ENI.

-   After associating in cut-through mode, the 100.64.0.0/10 segment (reserved for Alibaba Cloud internal services) is inaccessible through the ENI. Configure routing for 100.64.0.0/10 to point to the primary ENI or another secondary ENI not in cut-through mode.
    
-   Cut-through mode has more restrictions. We recommend using [EIPs with additional CIDR blocks](/help/en/eip/use-cases/expose-an-eip-on-an-nic-by-adding-a-secondary-cidr-block-to-a-vpc) instead: configure a public IP CIDR block as a VPC additional CIDR block, create a secondary ENI in that block, associate the EIP, and attach the ENI to the ECS instance to manage the EIP directly from the OS.
    

> After attaching a secondary ENI, some images require manual [ENI configuration](/help/en/ecs/user-guide/create-and-use-an-eni#task-1563594). The system creates a route with the secondary ENI as the outbound interface at a lower priority than the primary ENI route. [Adjust route priorities](/help/en/ecs/user-guide/configure-a-secondary-eni#78989a302b1a4) based on your requirements.

**EIP cut-through mode** (not recommended)

The EIP replaces the secondary ENI's private IP. The ENI becomes a public-only interface and the private IP is no longer usable.

-   Only secondary ENIs are supported. The EIP can only associate with the primary private IP of the secondary ENI.
    
-   Associate the EIP with the ENI first, then attach the ENI to the ECS instance.
    
-   If a subscription EIP expires and is released, detach and reattach the secondary ENI to restore private network functionality.
    
-   Supported regions: China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Shenzhen), China (Guangzhou), China (Chengdu), Singapore, Indonesia (Jakarta), Germany (Frankfurt), UK (London), US (Virginia), SAU (Riyadh - Partner Region).
    
-   All IP protocol types are supported, including NAT ALG protocols.
    
-   The VPC where the secondary ENI to attach resides cannot contain an IPv4 gateway.
    

**Multi-EIP cut-through mode** (no longer accepting new applications)

Both private and public IP addresses remain available on the secondary ENI. This mode is no longer accepting new applications. Existing authorized users can continue using it.

-   Only secondary ENIs are supported. Each supports up to 10 EIPs.
    
-   Supported regions: China (Shenzhen), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Chengdu), Singapore, Germany (Frankfurt), US (Virginia), UK (London).
    
-   Supported instance families: ecs.d1ne, ecs.ebmc4, ecs.ebmg5, ecs.ebmhfg5, ecs.f1, ecs.gn5i, ecs.gn6v, ecs.i2, ecs.r1, ecs.re4, ecs.re4e, ecs.sccg5, ecs.sccgn6, ecs.scch5, ecs.g5, ecs.c5, ecs.r5, ecs.t5, ecs.sn2ne, ecs.se1ne, ecs.sn1ne.
    
-   All IP protocol types are supported, including NAT ALG protocols.
    
-   DHCP must be enabled on the ECS instance for this mode to take effect.
    
-   After association, call [DescribeEipGatewayInfo](/help/en/vpc/api-describeeipgatewayinfo#doc-api-Vpc-DescribeEipGatewayInfo) to query the gateway and subnet mask of the EIP and complete the following configuration for the ECS instance: Change the gateway and subnet mask of the secondary private IP to those of the EIP.
    

#### **Console**

1.  Go to the [Elastic IP Addresses](https://vpc.console.alibabacloud.com/eip) page and select the region of the EIP.
    
2.  Find the target EIP, click **Associate with Resource** in the **Actions** column, select **ENI**, choose **Cut-through Mode**, and select the secondary private IP to associate with.
    

#### **API**

-   Call [AssociateEipAddress](/help/en/eip/developer-reference/api-vpc-2016-04-28-associateeipaddress-eips) with `InstanceType` set to `NetworkInterface` and `Mode` set to `BINDED` or `MULTI_BINDED`.
    
-   Call [AssociateEipAddressBatch](/help/en/eip/developer-reference/api-vpc-2016-04-28-associateeipaddressbatch-eips) to associate multiple EIPs with secondary ENIs in a single request.
    

## **Associate an EIP with a NAT gateway**

When multiple ECS instances need internet access, associating an EIP to each one increases cost. Associate EIPs with a public NAT gateway and use SNAT rules to let multiple instances share EIPs for outbound traffic. This reduces costs and improves security by hiding instance IPs and restricting inbound connections.

**Constraints:**

-   Each public NAT gateway supports up to 20 EIPs.
    
-   Since September 19, 2022, associating an EIP with a newly created public NAT gateway consumes a private IP from the vSwitch where the gateway resides. Make sure the vSwitch has enough private IPs. Existing instances are not affected.
    

### **Console**

1.  Go to the [Elastic IP Addresses](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips) page and select the region of the EIP.
    
2.  Find the target EIP, click **Associate with Resource** in the **Actions** column, select **NAT Gateway**, then select the target instance.
    

### **API**

-   Call [AssociateEipAddress](/help/en/eip/developer-reference/api-vpc-2016-04-28-associateeipaddress-eips) with `InstanceType` set to `Nat`.
    
-   Call [AssociateEipAddressBatch](/help/en/eip/developer-reference/api-vpc-2016-04-28-associateeipaddressbatch-eips) to associate multiple EIPs with a public NAT gateway in a single request.
    

## **Associate an EIP with an SLB instance**

Associate EIPs with Server Load Balancer (SLB) instances to create a unified public entry point. SLB instances distribute traffic across backend servers in multiple zones, scaling throughput and eliminating single points of failure (SPOFs).

We recommend [ALB](/help/en/slb/application-load-balancer/product-overview/what-is-alb/) and [NLB](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/) for new deployments.

### **Console**

#### **ALB or NLB**

The [Elastic IP Addresses](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips) page does not support directly associating EIPs with ALB or NLB instances. Instead:

-   **New instance**: Go to the [ALB buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=slb_ealb_public_intl&regionId=ap-southeast-1#/buy) or [NLB buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=slb_nlb_public_intl&/buy) and create a Internet-facing type instance.
    
-   **Existing instance**: Go to the [ALB instances page](https://slb.console.alibabacloud.com/alb/ap-southeast-1/albs) or [NLB instances page](https://slb.console.alibabacloud.com/nlb/ap-southeast-1/nlbs), click the target instance ID, and change **Network Type** to Internet-facing.
    

#### **CLB**

1.  Go to the [Elastic IP Addresses](https://vpc.console.alibabacloud.com/eip) page and select the region of the EIP.
    
2.  Find the target EIP, click **Associate with Resource** in the **Actions** column, select **SLB Instance**, then select the target CLB instance.
    

### **API**

**Action**

**API**

**Key parameter**

Create an Internet-facing ALB instance

[CreateLoadBalancer](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-createloadbalancer) (ALB)

`AddressType` = `Internet`

Change an ALB instance to Internet-facing

[UpdateLoadBalancerAddressTypeConfig](/help/en/slb/application-load-balancer/developer-reference/api-alb-2020-06-16-updateloadbalanceraddresstypeconfig) (ALB)

`AddressType` = `Internet`

Create an Internet-facing NLB instance

[CreateLoadBalancer](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-createloadbalancer) (NLB)

`AddressType` = `Internet`

Change an NLB instance to Internet-facing

[UpdateLoadBalancerAddressTypeConfig](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-updateloadbalanceraddresstypeconfig) (NLB)

`AddressType` = `Internet`

Associate an EIP with a CLB instance

[AssociateEipAddress](/help/en/eip/developer-reference/api-vpc-2016-04-28-associateeipaddress-eips)

`InstanceType` = `SlbInstance`

## **Associate an EIP with an HaVip**

Use [HaVips](/help/en/vpc/highly-available-virtual-ip-address-havip) to implement IP failover between primary and standby servers in the same zone. After associating an EIP with an HaVip, the HaVip can serve Internet traffic with high availability.

**Constraints:**

-   Apply for HaVip creation permission in the [Quota Center console](https://quotas.console.alibabacloud.com/products/vpc/quotas?spm=a2c4g.11186623.0.0.610ecda16wO953&query=vpc_privilege_allow_buy_havip_instance&keyword=buy_havip_instance) first. A quota of 1 means creation is enabled. Each account supports up to 50 HaVips by default.
    
-   Each HaVip supports only one EIP.
    
-   The HaVip must be in the **Available** or **Assigned** state.
    

### **Console**

1.  Go to the [Elastic IP Addresses](https://vpc.console.alibabacloud.com/eip/cn-hangzhou/eips) page and select the region of the EIP.
    
2.  Find the target EIP, click **Associate with Resource** in the **Actions** column, select **HaVip**, then select the target instance.
    

### **API**

Call [AssociateEipAddress](/help/en/eip/developer-reference/api-vpc-2016-04-28-associateeipaddress-eips) with `InstanceType` set to `HaVip`.

## Disassociate an EIP from a cloud resource

### **Console**

Find the target EIP and click **Disassociate from Resources** in the **Actions** column.

### **API**

Call [UnassociateEipAddress](/help/en/eip/developer-reference/api-vpc-2016-04-28-unassociateeipaddress-eips) to disassociate an EIP from a cloud resource.

### After disassociation

-   **Pay-as-you-go EIPs**: You still incur [EIP configuration fees (public IP retention fees)](/help/en/eip/pay-as-you-go/#section-tbh-f66-2wt) after disassociation. If the EIP is no longer needed, [release it](/help/en/eip/elastic-ip-address#1a5d5f577by23) to stop billing.
    
-   **Subscription EIPs**: [Unsubscribe](/help/en/user-center/refund-rules) if no longer needed.
