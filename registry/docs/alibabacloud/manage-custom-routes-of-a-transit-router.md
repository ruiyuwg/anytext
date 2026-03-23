You can add custom route entries, such as a static route or a blackhole route, to the route table of an Enterprise Edition transit router to flexibly control network traffic.

## Add a custom route to an Enterprise Edition transit router

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left pane, click the ID of the target route table. On the **Route Entries** tab, click **Create Route Entry**.
    
6.  In the **Add Route Entry** dialog box, configure the route entry and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Route Table**
    
    The current route table is selected by default.
    
    **Transit Router**
    
    The current transit router is selected by default.
    
    **Route Entry Name**
    
    Enter a name for the route entry.
    
    **Destination CIDR**
    
    Enter the destination CIDR block of the route. You can enter an IPv4 CIDR block or an IPv6 CIDR block. Examples: 192.168.10.0/24 and 240b:\*\*\*\*:14::/64.
    
    **Blackhole Route**
    
    -   **Yes**: The route is a blackhole route. All traffic destined for this route is discarded.
        
    -   **No**: The route is not a blackhole route. You must set a next hop for the route.
        
    
    **Next Hop**
    
    Select a next hop for the route.
    
    **Description**
    
    Enter a description for the route entry.
    

## View the route entries of an Enterprise Edition transit router

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the navigation pane on the left, click the ID of the target route table.
    
6.  On the **Route Entry** tab of the route table details page, you can view the route entries.
    
    By default, the console displays only some properties of the route entries. To view all properties, click the ![列表顶部-操作按钮-自定义列表项](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6075973271/p795368.png) icon in the upper-right corner of the route entry list and select the columns to display.
    
    **Parameter**
    
    **Description**
    
    **Route ID/Name**
    
    The ID and name of the route entry.
    
    You can click the ![编辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9057964361/p179756.png) icon below the route entry ID to add or modify the name of a custom route entry.
    
    **Destination CIDR Block**
    
    The destination CIDR block of the route entry.
    
    **Next Hop**
    
    The network instance connection associated with the next hop of the route entry.
    
    **Type**
    
    The type of the next hop.
    
    -   **Connection Instance**: The next hop of the route is a network instance connection.
        
    -   **Blackhole**: Indicates that the current route entry is a blackhole route.
        
        All traffic destined for the blackhole route is dropped.
        
    
    **Next Hop Resource ID/Name**
    
    The ID and name of the network instance resource associated with the next hop.
    
    **Next Hop Resource Type**
    
    The type of the network instance resource associated with the next hop.
    
    -   **VPC**
        
    -   **ECR**
        
    -   **VPN**
        
    -   **VBR**
        
    -   **TR**
        
        A transit router instance.
        
    
    **Route Type**
    
    The type of the route entry.
    
    -   **Propagated Routes**: Routes learned through the TransitRouter.
        
    -   **Static Routes**: A custom route that you configure.
        
    
    **Route Status**
    
    The status of the route entry.
    
    -   **Active**: The route entry is active.
        
    -   **Rejected**: The route entry is inactive due to a route conflict. For more information about route conflicts, see [Route Priority](/help/en/cen/product-overview/how-transit-routers-work#c8aa9b6c1awgs).
        
    -   **Forbidden**: A [routing policy](/help/en/cen/user-guide/routing-policy-overview/) in the current route table prevents this route entry from taking effect.
        
    -   **Backup** or **Candidate**: Indicates that the current route is a backup route. When the primary route is unreachable, traffic can be routed through the backup route.
        
    -   **Suppressed**: The route is a specific route that is suppressed because it is overwritten by an [aggregate route](/help/en/cen/user-guide/aggregate-routes) configured on the peer of the inter-region connection. Only the aggregate route takes effect, and this specific route does not.
        
    
    **Route Attribute**
    
    The properties of the route entry.
    
    You can click **View Details** to view the properties of the route, such as AS Path, Community, and priority.
    
    **Description**
    
    The description of the route entry.
    
    You can click the ![编辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9057964361/p179756.png) icon to add or modify the description of a custom route entry.
    
    **Creation Time**
    
    The time when the custom route entry was created.
    
    **Route Source Resource ID/Name**
    
    The ID and name of the source resource from which the route is generated.
    
    **Route Source Resource Type**
    
    The type of the source resource from which the route is generated.
    
    -   **VPC**
        
    -   **ECR**
        
    -   **VPN**
        
    -   **VBR**
        
    -   **TR**
        
        A transit router instance.
        
    
    **Prefix List**
    
    If a prefix list ID is displayed in this column, the route entry is generated from a prefix list.
    
    If the route table contains many route entries, you can use the search bar to find a route entry by its destination CIDR block.![2024-04-26_14-21-28](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6075973271/p795373.png)
    

## View the route entries of a Basic Edition transit router

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  On the **Route Entries** tab, you can view the route entry information in the current region.
    
    **Parameter**
    
    **Description**
    
    **Destination CIDR Block**
    
    The destination CIDR block of the route entry.
    
    **Next Hop**
    
    The network instance associated with the next hop of the route entry.
    
    **Type**
    
    The type of the network instance associated with the next hop.
    
    -   **CCN**: Indicates a Cloud Connect Network instance.
        
    -   **VPC**: Indicates a virtual private cloud instance.
        
    -   **VBR**: Indicates a virtual border router instance.
        
    -   **BR**: Indicates a transit router instance.
        
    -   **local\_service**: Indicates a system route.
        
    
    **Route Type**
    
    The type of the route entry.
    
    -   **Cloud Enterprise Network**: Routes learned from the TransitRouter.
        
    -   **Custom**: A user-defined route.
        
    -   **System**: Routes that are automatically added by the system.
        
    
    **Status**
    
    The status of the route entry.
    
    -   **Active**: The route entry is active.
        
    -   **Deny**: A [routing policy](/help/en/cen/user-guide/routing-policy-overview/) in the current route table prevents the route from taking effect.
        
        For a Basic Edition transit router, IPv6 route entries are also in the Rejected state by default.
        
    -   **Conflict**: The current route entry conflicts with other route entries and is not in effect.
        
    -   **Backup**: Indicates that the current route is a backup route. When the primary route is unreachable, traffic can be transmitted through the backup route.
        
    -   **Suppression**: This route is a specific route that is suppressed because it is overwritten by an [aggregate route](/help/en/cen/user-guide/aggregate-routes) configured on the peer of the inter-region connection. Only the aggregate route takes effect. This specific route does not.
        
    
    **Matching Policy**
    
    The routing policy that the route entry matches.
    
    If the route matches a routing policy, you can click **View Details** to view the matched routing policy.
    
    **Route Properties**
    
    The properties of the route entry.
    
    To view the attributes of the route, such as the AS Path, Community, and priority, click **View Details**.
    
    **Policy to Other Regions**
    
    The policy that the route entry matches to be advertised to other regions.
    
    **Status to Other Regions**
    
    The status of the route entry in other regions.
    
    -   **Active**: This route entry can be propagated to other regions.
        
    -   **Prohibited**: The route entry cannot be propagated to other regions.
        
    

## Delete a custom route from an Enterprise Edition transit router

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the navigation pane on the left, click the ID of the target route table.
    
6.  On the **Route Entries** tab of the route table details page, find the route entry to delete and click **Delete** in the **Actions** column.
    
7.  In the **Delete Route Entry** dialog box, confirm the route entry information and click **OK**.
    

## References

-   [CreateTransitRouterRouteEntry](/help/en/cen/developer-reference/api-cbn-2017-09-12-createtransitrouterrouteentry): Creates a route in a route table of an Enterprise Edition transit router.
    
-   [UpdateTransitRouterRouteEntry](/help/en/cen/developer-reference/api-cbn-2017-09-12-updatetransitrouterrouteentry): Modifies the name and description of a route in a route table of an Enterprise Edition transit router.
    
-   [DeleteTransitRouterRouteEntry](/help/en/cen/developer-reference/api-cbn-2017-09-12-deletetransitrouterrouteentry): Deletes a static route from a route table of an Enterprise Edition transit router.
    
-   [ListTransitRouterRouteEntries](/help/en/cen/developer-reference/api-cbn-2017-09-12-listtransitrouterrouteentries): Queries the routes in a route table of an Enterprise Edition transit router.
    
-   [DescribeCenRegionDomainRouteEntries](/help/en/cen/developer-reference/api-cbn-2017-09-12-describecenregiondomainrouteentries): Queries the details of routes in a specific region of a CEN instance.
