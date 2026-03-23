After you create an IPsec-VPN connection, you must configure routes for the data center in the VPN gateway that is associated with the IPsec-VPN connection. After the traffic destined for the data center from the associated virtual private cloud (VPC) is transferred to the VPN gateway, the VPN gateway forwards the traffic to the data center by querying the routing information.

## **Background information**

When you connect your data center to a VPC by using an IPsec-VPN connection, you must add routes for the VPC, VPN gateway, and data center to enable data transmission between the data center and the VPC.

When you configure routes, you can configure static routes or enable automatic route learning by using Border Gateway Protocol (BGP) dynamic routing.

Click to view route configurations based on different routing methods

**Routing method**

**Traffic direction**

**VPC**

**VPN gateway**

**Data center**

Static route

Destined for the data center

You need to specify routes in the data center.

Both manual configuration and automatic advertising are supported.

-   Manual configuration
    
    Add routes destined for the data center whose next hop points to the VPN gateway to the VPC route table. For more information, see [Create and manage a route table](/help/en/vpc/user-guide/create-and-manage-route-table#section-p9h-bmf-xyz).
    
-   Automatic advertising
    
    Add routes destined for the data center to the VPN gateway. Then, the VPN gateway automatically advertises these routes to the VPC. For more information, see [Destination-based routes](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-destination-based-routes) or [Manage policy-based routing](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-policy-based-routes).
    

You need to add routes destined for the data center.

The following management methods are supported:

-   Management of destination-based routes
    
-   Management of policy-based routes
    

N/A

Destined for the VPC

N/A

N/A

The VPN gateway automatically learns the routes destined for the associated VPC. No additional operation is required.

You need to add routes whose next hop points to the IPsec-VPN connection from the VPC.

BGP dynamic routing

Destined for the data center

N/A

After you enable automatic route advertising for the VPN gateway, the VPN gateway automatically advertises routes from the data center to the VPC.

-   You must enable automatic route propagation for the VPN gateway.
    
    After this feature is enabled, the VPN gateway automatically learns system routes from the system route table of the VPC and propagates routes from the data center to the system route table of the VPC.
    
-   You must configure BGP dynamic routing.
    
    After BGP dynamic routing is configured, the VPN gateway automatically learns the routes destined for the data center. It also automatically advertises the routes from the VPC to the data center.
    

For more information, see [BGP dynamic routing](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-bgp-dynamic-routing#ae9d4b4e578h6).

You must configure BGP dynamic routing.

After BGP dynamic routing is configured, the data center can advertise the routes in the data center to the VPN gateway and also automatically learn the routes destined for the VPC.

Destined for the VPC

N/A

## **Configure VPN gateway routing**

**Important**

This topic focuses on the routing configuration for VPN gateways and does not describe the routing configuration for VPCs or data centers.

### **Static routing**

-   Destination-based routes
    
    When you configure a destination-based route, you must specify the destination CIDR block and the next hop. The VPN gateway identifies the destination-based route that matches the destination IP address of the traffic, and then forwards the traffic based on the next hop of the matched destination-based route. For more information, see [Destination-based routes](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-destination-based-routes).
    
-   Policy-based routes
    
    When you configure a policy-based route, you must specify the source CIDR block, destination CIDR block, and next hop. The VPN gateway identifies the policy-based route that matches the source IP address and destination IP address of the traffic, and then forwards the traffic based on the next hop of the matched policy-based route. For more information, see [Policy-based routes](/help/en/vpn/sub-product-ipsec-vpn/user-guide/manage-policy-based-routes).
    

### BGP dynamic routing

BGP is a dynamic routing protocol based on Transmission Control Protocol (TCP). BGP is used to exchange routing and network accessibility information across autonomous systems (AS). You need to add BGP configurations to the VPN gateway and data center to specify the VPN gateway and data center as BGP peers. Then, they can learn the configured routes from each other, which reduces network maintenance costs and network configuration errors. For more information, see [BGP dynamic routing](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-bgp-dynamic-routing).

## **Select** a routing method

1.  Check whether the VPN gateway supports BGP dynamic routing. If not, you must select static routing.
    
    VPN Gateway instances that support dual-tunnel mode IPsec-VPN connections support the BGP dynamic routing feature by default. Some existing VPN Gateway instances may not support BGP dynamic routing because of regional restrictions or an outdated instance version. You can call the [DescribeVpnGateway](/help/en/vpn/sub-product-ipsec-vpn/developer-reference/api-vpc-2016-04-28-describevpngateway-vpns) or [DescribeVpnGateways](/help/en/vpn/sub-product-ipsec-vpn/developer-reference/api-vpc-2016-04-28-describevpngateways-vpns) operation to query whether an existing VPN Gateway instance supports BGP dynamic routing. If the return value of the **VpnEnableBgp** parameter in the **Tag** field is **true**, the VPN Gateway instance supports BGP dynamic routing.
    
    If a query shows that the VPN Gateway instance does not support BGP dynamic routing, you can upgrade the instance to resolve the issue:
    
    -   For existing VPN Gateway instances that support dual-tunnel mode IPsec-VPN connections, [upgrade the VPN Gateway](/help/en/vpn/sub-product-ipsec-vpn/user-guide/upgrade-a-vpn-gateway-1).
        
    -   For existing VPN Gateway instances that support single-tunnel mode IPsec-VPN connections, [upgrade the IPsec-VPN connection to dual-tunnel mode](/help/en/vpn/sub-product-ipsec-vpn/user-guide/upgrade-ipsec-vpn-connection-to-dual-tunnel-mode).
        
2.  Check whether the gateway devices in the data center support BGP dynamic routing. If yes, you can select BGP dynamic routing. If no, you must select static routing.
    
3.  If both static routing and BGP dynamic routing are supported in your scenario, you can select a routing method based on the information in the following table.
    
    **Routing method**
    
    **Supported scenario**
    
    **Configuration complexity**
    
    **Route maintenance cost**
    
    **High availability mode**
    
    Static route
    
    The number of routes in the data center is small, and route changes are infrequent.
    
    Low
    
    Medium
    
    You must complete routing configuration for the VPC, data center, and VPN gateway. If routes in the data center are changed, you must manually change the routing configuration for the VPN gateway.
    
    If multiple IPsec-VPN connections are established between the data center and Alibaba Cloud by using one VPN gateway, these connections can be in active/standby mode through static routing. This ensures high availability.
    
    BGP dynamic routing
    
    The number of routes in the data center is great, and route changes are frequent.
    
    Low
    
    Low
    
    You must add BGP configurations to the VPN gateway and data center. If routes in the data center are changed, no operation needs to be performed on the VPN gateway. Automatic route advertising and learning are enabled by using BGP dynamic routing based on the [advertising principles of BGP dynamic routing](/help/en/vpn/sub-product-ipsec-vpn/user-guide/configure-bgp-dynamic-routing#section-il5-yz1-5ry).
    
    If multiple IPsec-VPN connections are established between the data center and Alibaba Cloud by using one VPN gateway, you can use these connections to configure equal-cost multi-path (ECMP) routing through BGP dynamic routing. If one of the IPsec-VPN connections fails, route switching is automatically implemented by using BGP dynamic routing. This ensures high availability.
    

## **Recommendations on routing configuration**

If multiple IPsec-VPN connections are created in a VPN gateway, we recommend that you use the same routing method for all these connections. Mixed use of destination-based routing, policy-based routing, and BGP dynamic routing at the same time is not recommended.

## Route priority

The following table lists the route priority if route conflicts occur in the VPN gateway route table or the VPC route table.

**Note**

The route priority in descending order is as follows: P0 > P1 > P2 > P3.

**Route type**

**Route priority on the VPN gateway**

**Route priority within the VPC**

Specific routes

P0

P0

System routes

P1

P1

Static routes

P2

**Note**

A policy-based route takes precedence over a destination-based route.

P2

Dynamic route

P3

P3
