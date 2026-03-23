This topic describes how to associate a route table of an Enterprise Edition transit router with the prefix list of a virtual private cloud (VPC). After a route table of an Enterprise Edition transit router is associated with the prefix list of a VPC, the system automatically adds routes that point to the CIDR blocks in the prefix list to the route table of the transit router.

## Background information

After you create a VPC connection on an Enterprise Edition transit router, you can add route entries to define the routes that you want the Enterprise Edition transit router to learn. This helps you customize network communication. In scenarios that require a large number of VPC routes, manual configuration greatly increases the workload. To simplify the configuration process and reduce the O&M workload, you can associate route tables of Enterprise Edition transit routers with VPC prefix lists. This way, you no longer need to add routes one by one.

After you add the CIDR blocks of a VPC to a prefix list and associate the prefix list with a route table of an Enterprise Edition transit router, the VPC routes are automatically added to the route table of the transit router.

![路由前缀](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5560342661/p460435.png)

This topic describes how to associate a route table of an Enterprise Edition transit router with a prefix list. For more information about how to create prefix lists and add CIDR blocks to prefix lists in the VPC console, see [Create and manage a prefix list](/help/en/vpc/user-guide/create-and-manage-prefix-lists#task-2225658).

## Limits

-   Only the route tables of Enterprise Edition transit routers can be associated with prefix lists.
    
-   When you associate a route table of an Enterprise Edition transit router with a prefix list, you can specify the CIDR blocks in the prefix list as blackhole routes or set the next hop of the CIDR blocks in the prefix list to a VPC connection, a virtual border router (VBR) connection, an Express Connect Router (ECR) connection, or an inter-region connection.
    
-   When you associate a route table of an Enterprise Edition transit router with a prefix list or modify the prefix list associated with an Enterprise Edition transit router, the route table fails to be associated with the prefix list or the modifications do not take effect if the number of route entries exceeds the upper limit.
    
    For example, the route table of an Enterprise Edition transit router can contain at most 2,000 routes, and 1,960 routes are in the route table. In this case, the prefix list that you want to associate with the route table can contain at most 40 CIDR blocks. Otherwise, the prefix list fails to be associated with the route table. This limit also applies when you modify the prefix list.
    
-   When you modify the prefix list that is associated with a route table of an Enterprise Edition transit router, the route generated based on the prefix list does not take effect if the route conflicts with an existing route in the route table. In addition, CIDR blocks that are added to or removed from the prefix list are not synchronized to the route table of the Enterprise Edition transit router. The system records the modifications, but does not apply them until the conflicting routes are fixed.
    
    You can use the following methods to fix conflicting routes:
    
    -   In the prefix list, remove the CIDR blocks that conflict with the routes in the route table of the Enterprise Edition transit router.
        
    -   In the route table of the Enterprise Edition transit router, remove the routes that conflict with the CIDR blocks in the prefix list.
        
        After you remove the routes, you must log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc), go to the **Association** tab of the prefix list that you want to manage, and then click **Retry** in the Actions column. The system re-applies ineffective CIDR blocks in the prefix list. For more information about how to open the **Association** tab, see [View a prefix list](/help/en/vpc/user-guide/create-and-manage-prefix-lists#section-2xn-wyk-35b).
        
    
    For more information about conflicting routes, see [Conflicting routes](#section-fwk-6w4-wks).
    

## Conflicting routes

When you associate a route table of an Enterprise Edition transit router with a prefix list or modify the prefix list associated with an Enterprise Edition transit router, the route table fails to be associated with the prefix list or the modifications do not take effect if a route generated based on the prefix list conflicts with an existing route in the route table. The following tables describe how to avoid route conflicts.

### Avoid conflicts between static routes

The requirements for prefix lists vary based on the next hop type of the static routes. The following table describes the requirements.

**Next hop type**

**Requirement**

**Example**

**Impact of conflicting routes**

VPC connection

The CIDR blocks in the prefix list cannot be the same as the destination CIDR blocks of routes in the route table of the Enterprise Edition transit router.

If the route table of the Enterprise Edition transit router contains a static route whose destination CIDR block is 10.10.10.0/24, the prefix list cannot contain the CIDR block 10.10.10.0/24.

The prefix list fails to be associated with the transit router, or the modifications to the prefix list do not take effect.

Blackhole route

VBR connection

If a CIDR block in the prefix list is the same as the destination CIDR block of a route in the route table of the Enterprise Edition transit router, the next hop of the CIDR blocks in the prefix list must be a VBR connection, an ECR connection, or an inter-region connection.

If the route table of the Enterprise Edition transit router contains a static route whose destination CIDR block is 10.10.10.0/24 and the prefix list contains the CIDR block 10.10.10.0/24, the next hop of the CIDR blocks in the prefix list must be a VBR connection, an ECR connection, or an inter-region connection.

ECR connection

Inter-region connection

### Avoid conflicts between dynamically generated routes

The requirements for prefix lists vary based on the original next hop type of the dynamically generated routes. The following table describes the requirements.

**Important**

When you associate a route table of an Enterprise Edition transit router with a prefix list or modify the prefix list associated with an Enterprise Edition transit router, the routes that are generated based on the prefix list have a higher priority than dynamically generated routes if the prefix list already meets the requirements. In addition, the route table of the Enterprise Edition transit router automatically rejects routes that are advertised from VBR connections, ECR connections, VPN attachments, or Cloud Connect Network (CCN) instances.

**Original next hop type**

**Requirement**

**Example**

**Impact of conflicting routes**

VBR connection

If a CIDR block in the prefix list is the same as the destination CIDR block of a route in the route table of the Enterprise Edition transit router, the next hop of the CIDR blocks in the prefix list must be a VBR connection, an ECR connection, or an inter-region connection.

If the Enterprise Edition transit router dynamically learned a route whose destination CIDR block is 10.10.10.0/24, and the prefix list contains the CIDR block 10.10.10.0/24, the next hop of the CIDR blocks in the prefix list must be a VBR connection, an ECR connection, or an inter-region connection.

The prefix list fails to be associated with the transit router, or the modifications to the prefix list do not take effect.

ECR connection

VPN attachment

CCN connection

-   If the dynamically generated route is not aggregated by the CCN instance and a CIDR block in the prefix list is the same as the destination CIDR block of a route in the route table of the Enterprise Edition transit router, the next hop of the CIDR blocks in the prefix list must be a VBR connection or an inter-region connection.
    
-   If the dynamically generated route is aggregated by the CCN instance, the CIDR blocks in the prefix list cannot be the same as the destination CIDR blocks of routes in the route table of the Enterprise Edition transit router.
    

For example, the Enterprise Edition transit router dynamically learned a route whose destination CIDR block is 10.10.10.0/24:

-   If the dynamic route is not aggregated by the CCN instance and the prefix list contains the CIDR block 10.10.10.0/24, the next hop of the CIDR blocks in the prefix list must be a VBR connection or an inter-region connection.
    
-   If the dynamically generated route is aggregated by the CCN instance, the prefix list cannot contain the CIDR block 10.10.10.0/24.
    

Other types of connection

The CIDR blocks in the prefix list cannot be the same as the destination CIDR blocks of routes in the route table of the Enterprise Edition transit router.

If the Enterprise Edition transit router dynamically learned a route whose destination CIDR block is 10.10.10.0/24, the prefix list cannot contain the CIDR block 10.10.10.0/24.

## Route advertisement scope

After you associate an Enterprise Edition transit router with a prefix list, the routes that are generated based on the prefix list are advertised to the following scopes:

-   If the next hop of the CIDR blocks in the prefix list is an inter-region connection, the generated routes are advertised only within the current region.
    
-   If the next hop of the CIDR blocks in the prefix list is an ECR connection, the generated routes are advertised only within the current region.
    
-   If the next hop of the CIDR blocks in the prefix list is a VPC connection or a VBR connection, the generated routes are advertised within the CEN instance.
    
    **Warning**
    
    If the next hop of the CIDR blocks in the prefix list is a VBR connection, the generated routes are advertised to other VBRs in the current region. This may cause routing loops. Proceed with caution.
    

## Prerequisites

-   A prefix list is created in the VPC console. For more information, see [Create and manage a prefix list](/help/en/vpc/user-guide/create-and-manage-prefix-lists#task-2225658).
    
-   If the prefix list and the Enterprise Edition transit router belong to different Alibaba Cloud accounts, the prefix list is shared with the Alibaba Cloud account that owns the Enterprise Edition transit router. For more information about how to share a resource, see [What is Resource Sharing?](/help/en/resource-management/resource-sharing/product-overview/resource-sharing-overview#concept-2436329).
    

## Associate a prefix list with a transit router route table

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click ID of the route table that you want to manage. On the details page of the route table, click the **Route Prefix** tab and then click **Associate With Route Prefix**.
    
6.  In the **Associate With Route Prefix** dialog box, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Route Prefix ID**
    
    Select a prefix list.
    
    **Blackhole Route?**
    
    Select a next hop for the CIDR blocks in the prefix list. Valid values:
    
    -   **Yes**: specifies that all CIDR blocks in the prefix list are blackhole routes. Packets that are sent to the CIDR blocks in the prefix list are dropped.
        
    -   **No**: specifies that the CIDR blocks in the prefix list are not blackhole routes. If you select this option, you must select a next hop.
        
        All CIDR blocks in a prefix list share the same next hop.
        
    
    **Next Hop**
    
    Select a next hop.
    
    After you associate a route table of an Enterprise Edition transit router with a prefix list, the system automatically adds routes that point to the CIDR blocks in the prefix list to the route table of the Enterprise Edition transit router. You can view the routes on the **Route Entry** tab of the route table details page.
    

**Note**

If you need to change the next hop of the CIDR blocks in a prefix list, disassociate the prefix list from the Enterprise Edition transit router and then re-associate the prefix list with the Enterprise Edition transit router. When you re-associate the prefix list, select a different next hop.

## Disassociate a prefix list from a transit router route table

**Warning**

After you disassociate a route table of an Enterprise Edition transit router from a prefix list, the system automatically withdraws all routes that point to the CIDR blocks in the prefix list from the route table of the Enterprise Edition transit router. Before you disassociate a route table of an Enterprise Edition transit router from a prefix list, you must migrate workloads that use the routes to prevent service interruptions.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click the ID of the transit router that you want to manage.
    
4.  On the details page of the transit router, click the **Route Table** tab.
    
5.  In the left-side section, click the ID of the route table that you want to manage.
    
6.  On the details page of the route table, click the **Route Prefix** tab and find the prefix list that you want to manage. Click **Delete** in the **Actions** column.
    
7.  In the **Delete** message, review the information and click **OK**.
    

## References

-   [CreateTransitRouterPrefixListAssociation](/help/en/cen/developer-reference/api-cbn-2017-09-12-createtransitrouterprefixlistassociation): associates a route table of an Enterprise Edition transit router with a prefix list.
    
-   [DeleteTransitRouterPrefixListAssociation](/help/en/cen/developer-reference/api-cbn-2017-09-12-deletetransitrouterprefixlistassociation): disassociates a route table of an Enterprise Edition transit router from a prefix list.
    
-   [ListTransitRouterPrefixListAssociation](/help/en/cen/developer-reference/api-cbn-2017-09-12-listtransitrouterprefixlistassociation): queries the prefix list that is associated with an Enterprise Edition transit router.
