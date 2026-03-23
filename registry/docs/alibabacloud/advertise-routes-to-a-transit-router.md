After a Network Instance establishes a route learning relationship with the route table of a transit router, it automatically propagates its routes to that table. However, some routes in a virtual private cloud (VPC) are not propagated to the transit router by default. You can manually propagate these routes to the transit router to establish network connectivity.

## Background

The following table describes the default propagation status for different types of route entries from a VPC and specifies whether you can manually propagate or withdraw them.

-   Route entries in custom route tables of a VPC cannot be propagated to a transit router.
    
-   Route entries that use a prefix list cannot be propagated to a transit router.
    

**Route type**

**Network instance**

**Propagated to transit router by default**

**Supports propagate and withdraw**

Routes whose next hop is an Elastic Compute Service (ECS) instance

VPC

No

Yes

Routes whose next hop is a VPN gateway

VPC

No

Yes

Routes whose next hop is a high-availability virtual IP address (HAVIP)

VPC

No

Yes

Routes whose next hop is an IPv4 gateway

VPC

No

Yes

Routes whose next hop is an elastic network interface (ENI)

VPC

No

Yes

Routes whose next hop is an IPv6 gateway

VPC

No

Yes

Routes whose next hop is a NAT gateway

VPC

No

Yes

Route entry whose next hop is a transit router

VPC

No

No

Routes whose next hop is a router interface (towards a VBR)

VPC

No

No

Routes whose next hop is a VPC peering connection

VPC

No

No

Routes whose next hop is an Express Connect Router (ECR)

VPC

No

No

Routes whose next hop is a Gateway Load Balancer (GWLB) endpoint

VPC

No

No

System route of VPC

VPC

Yes

Yes

By default, Cloud Connect Network (CCN) instances and VBRs propagate routes to the transit router to which they are connected. You cannot propagate or withdraw the routes of a CCN instance or a VBR.

**Note**

-   `100.64.0.0/10` in the system route table is used by Alibaba Cloud services and cannot be propagated to a transit router.
    
-   For a Basic Edition transit router, routes from Cloud Connect Network (CCN) instances and VBRs (where the next hop is an Express Connect circuit) are propagated to it by default. You cannot manually propagate or withdraw these routes. It also does not forward IPv6 traffic by default. For a VPC attached to a Basic Edition transit router, the propagation and withdrawal rules for all route entry types, except IPv6 route entries, are the same as those in the table above.
    

## Propagate routes to a transit router

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the transit router details page, click the **Network Routes** tab.
    
5.  On the **Network Routes** tab, select the target network instance and route table, find the route that you want to propagate, and then click **Advertise** in the **Advertisement Status** column.
    
6.  In the **Advertise Route** message, confirm the information and click **OK**.
    

## Withdraw routes from a transit router

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the transit router details page, click the **Network Routes** tab.
    
5.  On the **Network Routes** tab, select the target network instance and route table, find the route that you want to withdraw, and then click **Withdraw** in the **Advertisement Status** column.
    
6.  In the **Withdraw Route** message, confirm the information and click **OK**.
    

## **References**

[Route learning](/help/en/cen/user-guide/route-learning): Check routes that are automatically propagated by network instances to the Enterprise Edition transit router after a route learning relationship is established.
