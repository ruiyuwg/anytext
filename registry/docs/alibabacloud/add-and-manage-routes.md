After you create a virtual border router (VBR), the system automatically creates a route table for the VBR. You can add routes to the route table to manage where network traffic is forwarded.

## Background information

-   After you create a VBR, you must add routes that point to the Express Connect circuit and the virtual private cloud (VPC) to route network traffic to the data center and the VPC.
    
-   When you use Cloud Enterprise Network (CEN), Express Connect, Smart Access Gateway (SAG), or Virtual Private Network (VPN) to access internal Object Storage Service (OSS) endpoints, you must add routes that point to the CIDR blocks of the regions where the endpoints are created. For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   VBRs support custom routes, Border Gateway Protocol (BGP) routes, and CEN routes.
    
    -   You can add or delete a custom route as needed. You can add at most 48 custom routes.
        
    -   You can also configure BGP routing for a VBR. For more information, see [Configure and manage BGP](/help/en/express-connect/user-guide/configure-and-manage-bgp#concept-ljj-4vx-dfb).
        
    -   After a VBR is attached to a CEN instance, the VBR and the CEN instance can automatically learn routes from each other.
        
-   VBRs do not support source address-specific policy-based routes.
    

## Add a custom route

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region and then click **Virtual Border Routers (VBRs)** in the left-side navigation pane.
    
3.  On the **Virtual Border Routers (VBRs)** page, find the VBR that you want to manage and click its ID.
    
4.  Click the **Routes** tab and then click **Add Route**.
    
5.  In the **Add Route** panel, configure the parameters described in the following table and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Network Type**
    
    Select the network type of route. Valid values:
    
    -   **IPv4 Routing**: IPv4 routes
        
    -   **IPv6 Routing**: IPv6 routes
        
    
    **Note**
    
    -   This parameter is required only when the VBR supports IPv6.
        
    -   When you set **Network Type** to **IPv6 Routing**, all IPv6 CIDR blocks can be specified as destination CIDR blocks except 2403:28c0:200::/40.
        
    
    **Next Hop Type**
    
    Select the type of next hop. Valid values:
    
    -   **VPC**: The VBR routes network traffic destined for the destination CIDR block to a VPC.
        
    -   **Physical Connection Interface**: The VBR routes network traffic destined for the destination CIDR block to an Express Connect circuit.
        
    
    **Note**
    
    If the VBR is associated with an Enterprise Edition transit router and you need to configure a static route that points to the Enterprise Edition transit router, go to the **Network Routes** tab of the transit router. On the tab, select the VBR and click **Add Route Entry** to add a static route that points to the Enterprise Edition transit router. For more information, see [Configure a route for a network instance](/help/en/cen/user-guide/configure-a-route-for-a-network-instance).
    
    **Destination CIDR Block**
    
    Enter the destination CIDR block to which network traffic is forwarded.
    
    **Next Hop**
    
    Select the next hop based on the specified type.
    
    **Description**
    
    Enter the description of the route.
    

## Delete a custom route

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region and then click **Virtual Border Routers (VBRs)** in the left-side navigation pane.
    
3.  On the **Virtual Border Routers (VBRs)** page, find the VBR that you want to manage and click its ID.
    
4.  Click the **Routes** tab, find the route that you want to delete, and then click **Delete** in the **Actions** column.
    
5.  In the message that appears, click **OK**.
    

## References

-   [CreateRouteEntry](/help/en/express-connect/developer-reference/api-createrouteentry#doc-api-Vpc-CreateRouteEntry): adds a custom route to a route table.
    
-   [ModifyRouteEntry](/help/en/express-connect/developer-reference/api-modifyrouteentry#doc-api-Vpc-ModifyRouteEntry): modifies the name and description of a custom route.
    
-   [DescribeRouteEntryList](/help/en/express-connect/developer-reference/api-describerouteentrylist#doc-api-Vpc-DescribeRouteEntryList): queries routes. Before you delete a route from a route table of a VBR, call the corresponding API operation to query the ID of the next hop, which is returned by **NextHopId**.
    
-   [DeleteRouteEntry](/help/en/express-connect/developer-reference/api-deleterouteentry#doc-api-Vpc-DeleteRouteEntry): deletes a custom route from a route table of a VBR.
