Enterprise Edition transit routers support custom route tables. After you create a custom route table for a transit router, you can associate the custom route table with network instances to establish network communication. The transit router forwards network traffic from network instances by querying the custom route table. You can add custom routes to custom route tables and associate custom route tables with prefix lists to control traffic forwarding.

## Background information

Each Enterprise Edition transit router has a default system route table. Enterprise Edition transit routers also support custom route tables. Each Basic Edition transit router has a default system route table. Basic Edition transit routers do not support custom route tables. For more information about transit router editions, see [View the edition of a transit router](/help/en/cen/user-guide/transit-routers#section-3qx-d5r-25n).

The system route table of a transit router is isolated from the custom route tables. The following content describes the system route table and custom route tables:

-   System route tables are automatically created by the system. When you create an Enterprise Edition transit router, the system automatically creates a system route table.
    
-   You can manually create custom route tables. Custom route tables are similar to virtual routing and forwarding (VRF) used by traditional routers. A custom route table is isolated from the system route table and other custom route tables.
    
    After you connect a network instance to a transit router, you can configure associated forwarding to associate the network instance connection with a custom route table. The transit router forwards network traffic from the network instance by querying the custom route table. You can add custom routes to the custom route table and associate the custom route table with a prefix list to manage network communication.
    

## Create a custom route table

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click **Create Route Table**. In the **Create Route Table** dialog box, set the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Transit Router**
    
    Select the transit router for which you want to create a route table.
    
    The ID of the selected transit router is automatically displayed.
    
    **Route Table Name**
    
    Enter a name for the route table.
    
    **Description**
    
    Enter a description for the route table.
    
    **Tag**
    
    Add tags to the route table.
    
    -   **Tag Key**: The tag key can be up to 64 characters in length. It cannot be an empty string or start with `acs:` or `aliyun` or contain `http://` or `https://`.
        
    -   **Tag Value**: The tag value can be an empty string with a maximum length of 128 characters. It cannot start with `acs:` or `aliyun` or contain `http://` or `https://`.
        
    
    You can add one or more tags to a custom route table. For more information about tags, see [Manage tags](/help/en/cen/user-guide/manage-tags-2).
    
    **Multi-region ECMP Routing**
    
    Enable multi-region ECMP routing based on your business requirements. Multi-region ECMP routing is disabled by default.
    
    An Enterprise Edition transit router may learn routes from multiple virtual border routers (VBRs). If the routes have the same attributes other than region IDs, network traffic is forwarded based on the region IDs in alphabetical order. If multi-region ECMP routing is enabled for VBRs and the routes have the same attributes other than region IDs, the routes are considered equal-cost routes. For more information, see [Multi-region ECMP routing for VBRs in different regions](/help/en/cen/user-guide/ecmp-routing-for-vbrs-in-different-regions#task-2306194).
    
    To enable multi-region ECMP routing, turn on Multi-region ECMP Routing, read the information in the message that appears, and then click **OK**.
    

## View the route tables of an Enterprise Edition transit router

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click the route table ID.
    
6.  On the route table details page, you can view the following information:
    
    -   Routes of the transit router. For more information, see [View routes of an Enterprise Edition transit router](/help/en/cen/user-guide/manage-custom-routes-of-a-transit-router#section-umm-rus-rq5).
        
    -   Associated forwarding correlations. For more information, see [Associated forwarding](/help/en/cen/user-guide/associated-forwarding#task-1964718).
        
    -   Route learning correlations. For more information, see [Route learning](/help/en/cen/user-guide/route-learning#task-1964718).
        
    -   Routing policies. For more information, see [Routing policy overview](/help/en/cen/user-guide/routing-policy-overview/#concept-994907).
        
    -   Routes generated based on a prefix list. For more information, see [Prefix lists](/help/en/cen/user-guide/prefix-lists).
        
    -   Aggregate routes. For more information, see [Aggregate routes](/help/en/cen/user-guide/aggregate-routes).
        
    

## View the route tables of a Basic Edition transit router

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab to view the following information:
    
    -   Routes of the transit router. For more information, see [View routes of a Basic Edition transit router](/help/en/cen/user-guide/manage-custom-routes-of-a-transit-router#section-97c-pwp-8be).
        
    -   Routing policies. For more information, see [Routing policy overview](/help/en/cen/user-guide/routing-policy-overview/#concept-994907).
        
    

## Delete a custom route table

You can delete custom route tables that you no longer use. The system route table of a transit router cannot be deleted. Before you delete a custom route table, make sure that the following requirements are met:

-   The route table is not associated with an associated forwarding correlation. For more information, see [Delete an associated forwarding correlation](/help/en/cen/user-guide/associated-forwarding#section-weh-a0n-buh).
    
-   The route table is not associated with a route learning policy. For more information, see [Delete a route learning policy](/help/en/cen/user-guide/route-learning#section-23q-ox2-uxp).
    
-   The route table does not contain a custom route. For more information, see [Delete a custom route from a route table of an Enterprise Edition transit router](/help/en/cen/user-guide/manage-custom-routes-of-a-transit-router#section-u98-1e3-a5p).
    
-   The route table is not associated with a prefix list. For more information, see [Disassociate a prefix list from a transit router route table](/help/en/cen/user-guide/prefix-lists#section-nxs-gem-w4k).
    
-   The route table does not contain an aggregate route. For more information, see [Delete an aggregated route](/help/en/cen/user-guide/aggregate-routes#section-zk1-i6y-yiu).
    

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click the route table ID.
    
6.  In the **Route Table Details** section, click **Delete**.
    
7.  In the **Delete Route Table** message, click **OK**.
    

## References

-   [CreateTransitRouterRouteTable](/help/en/cen/developer-reference/api-createtransitrouterroutetable#doc-api-Cbn-CreateTransitRouterRouteTable): creates a custom route table for an Enterprise Edition transit router.
    
-   [UpdateTransitRouterRouteTable](/help/en/cen/developer-reference/api-updatetransitrouterroutetable#doc-api-Cbn-UpdateTransitRouterRouteTable): Modifies the name and description of an Enterprise Edition transit router route table.
    
-   [ListTransitRouterRouteTables](/help/en/cen/developer-reference/api-listtransitrouterroutetables#doc-api-Cbn-ListTransitRouterRouteTables): queries the route tables of an Enterprise Edition transit router.
    
-   [DeleteTransitRouterRouteTable](/help/en/cen/developer-reference/api-deletetransitrouterroutetable#doc-api-Cbn-DeleteTransitRouterRouteTable): deletes a custom route table from an Enterprise Edition transit router.
