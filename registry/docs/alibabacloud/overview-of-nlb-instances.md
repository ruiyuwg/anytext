A Network Load Balancer (NLB) instance is the core resource for the NLB service. To use an NLB instance, you must create it and add at least one listener and one server group.

## **Instance status**

**Status**

**Description**

**Can be deleted**

**Can be modified**

Active

The NLB instance is running as expected.

Depends on deletion protection

Depends on configuration read-only mode

Creating

The NLB instance is being created.

No

No

Modifying

The NLB instance configuration is being updated.

No

No

Creation Failed

The NLB instance failed to be created.

Yes

No

Inactive

The NLB instance is stopped and locked. See [Lock reasons](#h3-cd681f3746d7).

Depends on lock reason

No

### **Lock reasons**

When an NLB instance enters the **Inactive** status, it is locked for one of the following reasons:

**Lock reason**

**Description**

**Can be deleted**

Overdue payment

The NLB instance is locked due to overdue payments. Renew the instance to resume service.

No

Associated resource locked

The elastic IP addresses (EIPs) or Internet Shared Bandwidth instances associated with the NLB instance are locked due to overdue payments. Renew the associated resources to resume service.

No

Residual locked

The EIPs or Internet Shared Bandwidth instances associated with the NLB instance are released due to overdue payments. The NLB instance is unavailable. We recommend that you release the NLB instance.

Yes

Security reason

The NLB instance is locked due to security risks. Go to the [Cloud resource events](https://yundun.console.aliyun.com/?spm=a2c4g.11186623.0.0.2ac513aaJV2zxB&p=sc#/sc/punishList) page in the Security Management console to apply to unlock the instance.

No

When an NLB instance is in the **Active** status, whether it can be deleted depends on the deletion protection setting, and whether it can be modified depends on the configuration read-only mode setting.

## **Network types**

NLB supports Internet-facing and internal instances. You can switch the network type of an NLB instance. For more information, see [Change the network type of an NLB instance](/help/en/slb/network-load-balancer/user-guide/change-the-network-type-of-an-nlb-instance#task-2260468).

### **Internet-facing NLB instances**

An Internet-facing NLB instance is assigned both a public IP address and a private IP address.

-   The NLB instance uses elastic IP addresses (EIPs) to receive requests from the Internet and forward them to backend servers based on forwarding rules.
    
    > You can use an [Anycast EIP](/help/en/slb/network-load-balancer/use-cases/associate-anycast-eips-with-an-nlb-instance-to-enable-access-through-the-nearest-access-point) for your NLB instance to implement nearby access for a cross-region service.
    
-   The private IP address enables the NLB instance to access Elastic Compute Service (ECS) instances in virtual private clouds (VPCs).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4355872771/CAEQVBiBgID4gueI5hkiIDE5ZGExOGYwZTIwNTRmODE5YTU1MTVhNjc2MTg3MDE34803985_20241203140448.790.svg)

Using an Internet-facing NLB instance, you are charged instance fees, Load Balancer Capacity Unit (LCU) fees, and Internet data transfer fees (charged by EIP).

### **Internal NLB instances**

An internal NLB instance is assigned only a private IP address.

-   The NLB instance receives requests only from the VPC in which it is deployed, and forwards them to backend servers based on forwarding rules.
    
-   Internal NLB instances do not support Internet access.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4355872771/CAEQVBiBgICf0emI5hkiIDJhYWE1ODcwYWM2MDQxZDQ5YzQ2NTljMDAzOTU5ZmQz4803985_20241203140448.790.svg)

Using an internal NLB instance, you are charged only instance fees and LCU fees.

## **IP versions**

NLB supports IPv4 and dual-stack.

IP version

Addresses assigned per zone

Client access

IPv4

Internet-facing: one public IPv4 and one private IPv4. Internal-facing: one private IPv4.

IPv4 addresses only (for example, 192.168.0.1)

Dual-stack

Internet-facing: one public IPv4, one private IPv4, and one IPv6. Internal-facing: one private IPv4 and one IPv6.

IPv4 addresses (for example, 192.168.0.1) or IPv6 addresses (for example, 2001:db8:1:1:1:1:1:1)

The network type of a dual-stack NLB instance is determined by the IPv4 address type. If the IPv4 address is private, the NLB instance is internal. If the IPv4 address is public, the NLB instance is Internet-facing.

### **Regions that support dual-stack**

**Area**

**Regions**

China

China (Hangzhou), China (Beijing), China (Shenzhen), China (Shanghai), China (Qingdao), China (Zhangjiakou), China (Chengdu), China (Guangzhou), China (Hong Kong), China (Heyuan), China (Ulanqab)

Asia Pacific

Thailand (Bangkok), Philippines (Manila), Singapore, Japan (Tokyo), South Korea (Seoul), Malaysia (Kuala Lumpur), Indonesia (Jakarta)

Europe and Americas

Germany (Frankfurt), UK (London), US (Virginia), US (Silicon Valley), Mexico

Middle East

SAU (Riyadh - Partner Region)

You cannot upgrade existing IPv4 NLB instances to dual-stack. To use dual-stack, create a new NLB instance with dual-stack enabled.

## **Cross-zone load balancing**

Cross-zone load balancing controls whether a virtual IP address (VIP) of an NLB instance distributes traffic across all enabled zones or only within its own zone.

-   **Enabled**: The VIP of the NLB instance distributes requests to backend servers across all enabled zones in the region.
    
-   **Disabled**: The VIP of the NLB instance distributes requests only to backend servers in its own zone.
    

### **Example**

The following example uses the round-robin algorithm. An NLB instance is deployed in two zones: Zone A has 2 ECS instances and Zone B has 8 ECS instances.

**Setting**

**Zone A (2 instances)**

**Zone B (8 instances)**

**Diagram**

Cross-zone load balancing enabled

Each instance receives 10% of traffic

Each instance receives 10% of traffic

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4355872771/CAEQVBiBgIC3ieGI5hkiIDViNjZiZWJlNjQxYzQwZDViMTc4ZThiNTVkNTE4Yjc34707277_20241016113743.852.svg)

Cross-zone load balancing disabled

Each instance receives 25% of traffic

Each instance receives 6.25% of traffic

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4355872771/CAEQVBiBgICz7.GI5hkiIGUwMTU0ZjRlZDgyNTRhOTk4YzdkNGUwODBkOGZjYmY34707277_20241016113743.852.svg)

When cross-zone load balancing is enabled, each zone receives 50% of requests, which are then evenly distributed across all 10 backend servers. When cross-zone load balancing is disabled, each zone receives 50% of requests, which are distributed only among the backend servers in that zone.

## **Domain names**

Each NLB instance is assigned a domain name for service access. You can use a CNAME record to map a custom domain name to the NLB instance domain name. When a client accesses the custom domain name, it resolves to the NLB instance domain name.

> Following the [domain name upgrade](/help/en/slb/product-overview/alb-and-nlb-domain-name-upgrade-announcement), newly created NLB instances are not directly accessible via their domain names.
