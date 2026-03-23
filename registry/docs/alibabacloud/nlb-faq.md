This topic provides answers to some frequently asked questions about Network Load Balancer (NLB).

## **Does NLB provide specific instance types?**

No. NLB does not provide specific instance types. When you create instances, you do not need to specify an instance type.

NLB supports automatic scaling. Each NLB instance supports up to 100 million concurrent connections and 100 Gbit/s of bandwidth. NLB supports higher Layer 4 load balancing performance than Classic Load Balancer (CLB). We recommend that you use NLB. For more information about the differences between NLB and CLB, see [Functions and features](/help/en/slb/network-load-balancer/product-overview/functions-and-features).

## **Why does the inbound rule configured for the security group of my NLB instance not take effect?**

If an NLB instance is added to a security group that does not contain a Deny rule, the listener port of the NLB instance allows all requests. **To allow requests only from specific IP addresses to your NLB instance, add a Deny rule to the security group of your NLB instance. Make sure that the Deny rule has a lower priority than the Allow rules.**

For more information about how to manage security groups, see the following topics:

-   [Add an NLB instance to a security group](/help/en/slb/network-load-balancer/user-guide/add-an-nlb-instance-to-a-security-group)
    
-   For more information about how to block or allow requests from specific IP addresses, see [Use security groups as blacklists or whitelists](/help/en/slb/network-load-balancer/use-cases/use-nlb-security-groups-to-implement-blacklist-and-whitelist-access-policies).
    
-   For more information about how to enable access control for NLB instances based on protocols and ports, see [Configure security groups for NLB instances](/help/en/slb/network-load-balancer/use-cases/configure-security-groups-for-nlb-instances)
    

## **Why does the virtual IP address (VIP) of my NLB instance fail to forward requests?**

Perform the following operations to troubleshoot errors:

-   Check whether **cross-zone forwarding** is disabled. After you enable cross-zone forwarding, requests that are destined for the NLB instance can be forwarded to backend servers in other zones. If you disable cross-zone forwarding and no backend servers are deployed in the zone of the NLB instance, the VIP of the zone cannot be used to forward requests destined for the NLB instance.
    
-   Check whether **the zone is removed from the DNS record**. If the zone is removed from the DNS record, the VIP of the zone is removed from the A record of the NLB instance. The VIP is no longer resolved to the domain name of the NLB instance. As a result, the VIP of the zone cannot be used to forward requests destined for the domain name of the NLB instance.
    
-   Check whether a **network access control list (ACL)** is enabled for the NLB instance and the 100.64.0.0/10 CIDR block is not on the whitelist. If you configure an ACL for the vSwitch of the VIP and do not add the 100.64.0.0/10 CIDR block to the whitelist, the VIP fails health checks because 100.64.0.0/10 is used for zone health checks. As a result, the VIP of the zone is removed from the A record of the NLB instance and cannot be used to forward requests destined for the domain name of the NLB instance.
    

## **How do I configure my NLB instance to allow an ECS instance in the server group to work as both a backend server and a client?**

Disable **Client IP Preservation** for the server group associated with your NLB instance. Then, an Elastic Compute Service (ECS) instance in the server group can work as both a backend server processing requests, and a client accessing your NLB instance. If you still want to retrieve client IP addresses in this case, enable Proxy Protocol for the associated listener. For detailed information, see the following references:

-   For information about disabling client IP preservation, see [Edit the basic information of a server group](/help/en/slb/network-load-balancer/user-guide/create-and-manage-a-server-group#entry-jxf-1aw-b2l).
    
-   For information about enabling Proxy Protocol for a TCP listener, see [Add a TCP listener](/help/en/slb/network-load-balancer/user-guide/add-a-tcp-listener).
    
-   For information about enabling Proxy Protocol for a UDP listener, see [Add a UDP listener](/help/en/slb/network-load-balancer/user-guide/add-a-udp-listener).
    

## **Can a subscription EIP be associated with an NLB instance?**

No, it cannot.

Elastic IP addresses (EIPs) that can be associated with NLB instances must meet the following requirements:

-   Billing method: pay-as-you-go
    
-   Internet metering method: pay-by-data-transfer
    
-   Whether associated with Internet Shared Bandwidth instances: no
    

## Can the service IP address of an NLB instance change?

When an NLB instance is created, the system assigns it a private IP address or an EIP to serve traffic. This service IP address does not change on its own after creation. However, the service IP address can change in the following scenarios:

-   [Zone changes](/help/en/slb/network-load-balancer/user-guide/modify-the-configurations-of-an-nlb-instance#section-c9m-d81-p0x): When you update the zones for an instance, IP addresses may be added or removed. For Internet-facing instances, EIPs will be added or removed. For internal instances, private IP addresses will be added or removed.
    
-   [Network type changes](/help/en/slb/network-load-balancer/user-guide/change-the-network-type-of-an-nlb-instance#section-xly-gbw-sga): Changing from internal to Internet-facing: A new EIP or Anycast EIP will be assigned to the instance. Changing from Internet-facing to internal: All public IP addresses will be disassociated from the instance.
    

## **Can I disable Ping for the VIP of an NLB instance?**

Yes. NLB allows you to manage inbound traffic using security groups. To disable Ping, add an inbound rule to the instance's associated security group that denies all ICMP traffic.
