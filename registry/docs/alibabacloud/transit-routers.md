A transit router is a core network forwarding element in a region. It forwards traffic within the same region or across regions. Before connecting network instances using a transit router, you must create a transit router. For each Cloud Enterprise Network (CEN) instance, you can create one transit router per region.

## Background information

You can create a transit router in one of the following ways:

-   Automatic creation
    
    The system automatically creates a transit router in a region when you connect the first network instance in that region, such as a Virtual Private Cloud (VPC), Express Connect Router (ECR), Virtual Border Router (VBR), or Cloud Connect Network (CCN) instance. For more information about how to connect these network instances, see the following topics:
    
    -   [Create a VPC connection](/help/en/cen/user-guide/connect-vpcs#task-1989141)
        
    -   [Create an ECR connection](/help/en/cen/user-guide/connect-ecrs)
        
    -   [Create a VBR connection](/help/en/cen/user-guide/connect-vbrs#task-1989155)
        
    -   [Create a CCN connection](/help/en/cen/user-guide/associate-a-ccn-instance-with-a-transit-router#task-1930825)
        
-   Manual creation (recommended)
    
    To manually create a transit router, follow the procedure described in this topic. For more information, see [Create a](#section-qmu-6ox-hcu) transit router.
    
    **Note**
    
    Before you create a VPN attachment, you must create a transit router.
    

## Create a transit router

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab and click **Create Transit Router**.
    
4.  In the **Create Transit Router** dialog box, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Region**
    
    The region where the transit router will be created.
    
    **Edition**
    
    The edition of the transit router is displayed.
    
    The system automatically displays the available edition in the current region. For more information about the regions that support Basic and Enterprise Edition transit routers, see [Regions and zones supported by transit routers](/help/en/cen/product-overview/what-is-cen/#section-4vf-t15-cco).
    
    **Enable Multicast**
    
    Select whether you want to enable the multicast feature. Multicast is disabled by default.
    
    **Note**
    
    Only Enterprise Edition transit routers in certain regions support multicast. For more information, see [Multicast overview](/help/en/cen/user-guide/multicast-overview/#task-2209043).
    
    **Name**
    
    The name for the transit router.
    
    **Description**
    
    The description for the transit router.
    
    **Tag**
    
    Add tags to the Enterprise Edition transit router.
    
    -   **Tag Key**: The tag key can be up to 64 characters in length. It cannot be an empty string or start with `acs:` or `aliyun` or contain `http://` or `https://`.
        
    -   **Tag Value**: The tag value can be an empty string with a maximum length of 128 characters. It cannot start with `acs:` or `aliyun` or contain `http://` or `https://`.
        
    
    You can add one or more tags to an Enterprise Edition transit router. For more information about tags, see [Manage tags](/help/en/cen/user-guide/manage-tags-2).
    
    **transit router CIDR**
    
    Specify CIDR blocks for the transit router.
    
    This custom CIDR block is assigned to the transit router and functions like a loopback interface on a physical router. It is used to assign IP addresses for IPsec-VPN connections. For more information, see transit router [CIDR blocks](/help/en/cen/user-guide/transit-router-cidr-blocks#task-2266948).
    

## View the edition of a transit router

This section describes how to view the edition of an existing transit router in the console.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  To view the edition of a transit router, use the following methods:
    
    -   Go to the **Basic Information** > **Transit Router** tab, find the target transit router, and then check the **Edition** column.![查看转发路由器版本](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8571293361/p297228.png)
        
    -   On the **Basic Information** > **transit router** tab, click the ID of the target transit router. On the details page of the transit router, click the **Basic Information** tab and check the **Edition** of the transit router.![查看TR版本](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0316940171/p768435.png)
        

## Delete a transit router

You can delete transit routers that you no longer need. Before you delete a transit router, make sure that the following requirements are met:

-   The transit router has no connections. For more information, see the following topics:
    
    -   [Delete a network instance connection](/help/en/cen/user-guide/delete-a-network-instance-connection#task-1930862)
        
    -   [Delete an inter-region connection](/help/en/cen/user-guide/manage-inter-region-connections#section-bdu-pkd-tct)
        
-   The transit router has no custom route tables. For more information, see [Delete a custom route table](/help/en/cen/user-guide/custom-route-tables#section-n7x-5e4-6uf).
    
-   The default route table contains no custom route entries, prefix lists, or aggregate routes. For more information, see the following topics:
    
    -   [Delete a custom route from an Enterprise Edition](/help/en/cen/user-guide/manage-custom-routes-of-a-transit-router#section-u98-1e3-a5p) transit router
        
    -   [Disassociate a prefix list from a transit router route table](/help/en/cen/user-guide/prefix-lists#section-nxs-gem-w4k)
        
    -   [Delete an aggregate route](/help/en/cen/user-guide/aggregate-routes#section-zk1-i6y-yiu)
        
-   No multicast domains exist on the transit router. For more information, see [Delete a multicast domain](/help/en/cen/user-guide/create-and-manage-a-multicast-network#section-j6e-4il-a9g).
    
-   No traffic marking policies exist on the transit router. For more information, see [Delete a traffic marking policy](/help/en/cen/user-guide/use-traffic-scheduling-to-limit-bandwidth-for-inter-region-connections#p-3m5-lp3-xcy).
    

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  Go to the **Basic Information** > **Transit Router** tab, find the transit router to delete, and then click **Delete** in the **Actions** column.
    
4.  In the **Delete Transit Router** message, check the ID of the transit router and click **OK**.
    

## Related operations

-   [CreateTransitRouter](/help/en/cen/developer-reference/api-createtransitrouter#doc-api-Cbn-CreateTransitRouter): creates an Enterprise Edition transit router.
    
-   [ListTransitRouters](/help/en/cen/developer-reference/api-listtransitrouters#doc-api-Cbn-ListTransitRouters): queries the information about a transit router.
    
-   [DeleteTransitRouter](/help/en/cen/developer-reference/api-deletetransitrouter#doc-api-Cbn-DeleteTransitRouter): deletes a transit router.
