If you want to establish network communication among network instances across regions, such as virtual private clouds (VPCs), virtual border routers (VBRs), Cloud Connect Network (CCN) instances, and IPsec-VPN connections, you need to create inter-region connections between the transit routers and allocate bandwidth resources to the inter-region connections.

## **Background information**

![跨地域连接](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2441268861/p571088.png)

### Bandwidth allocation modes

Inter-region connections support multiple bandwidth allocation modes. The bandwidth allocation modes supported by Basic Edition transit routers and Enterprise Edition transit routers are different. The following table describes the bandwidth allocation modes supported by each edition of transit routers.

**Note**

In the following table, "![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1572878461/p396095.png)" indicates that the bandwidth allocation mode is supported by the transit router. "![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1572878461/p396103.png)" indicates that the bandwidth allocation mode is not supported by the transit router.

**Bandwidth allocation mode**

**Basic Edition transit router**

**Enterprise Edition transit router**

**Description**

**Use scenario**

**Supported** [line type](#dc524a607dzyq)

Allocate from bandwidth plans

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1572878461/p396095.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1572878461/p396095.png)

You must purchase a bandwidth plan and associate it with your Cloud Enterprise Network (CEN) instance if you want to allocate bandwidth from a bandwidth plan to inter-region connections. Then, bandwidth is allocated from the bandwidth plan to inter-region connections.

This allocation mode generates bandwidth plan fees. For more information, see [Billing rules](/help/en/cen/product-overview/billing-rules#section-a95-wfi-w1u).

Ideal for long-term services with small traffic fluctuations, such as file transfer, data migration, and data synchronization.

Gold

Pay-by-data-transfer

![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1572878461/p396103.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1572878461/p396095.png)

You are charged for data transfer. You can set a bandwidth cap for each inter-region connection to limit the amount of bandwidth that the inter-region connections can consume.

This allocation mode generates data transfer fees, which are managed by Cloud Data Transfer (CDT). For more information, see [Inter-region data transfers](/help/en/cdt/inter-region-data-transfers).

**Note**

After you create a pay-by-data-transfer inter-region connection, you can run the `ping` command to test network connectivity. If the `ping` packet sent to the destination per second is smaller than 100 bytes, the data transfer fee is not charged because it is less than CNY 0.01.

Ideal for services with large traffic fluctuations and unpredictable bandwidth usage, such as temporary scale-outs, testing, video conferencing, and real-time gaming.

-   Platinum
    
-   Gold
    

Existing **pay-by-data-transfer** inter-region connections use the **Gold** line type by default. You can change the line type of existing inter-region connections. For more information, see [Change the line type of an inter-region connection](#e693be207dr0g).

Use testing bandwidth

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1572878461/p396095.png)

![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1572878461/p396103.png)

CEN provides a testing bandwidth value of 1 Kbit/s that is free of charge for you to test the network connectivity of inter-region connections. The testing bandwidth is limited to 1 Kbit/s, and you can use it only for connectivity tests. It does not support service traffic.

After you connect a network instance to a Basic Edition transit router, you can test the connectivity of inter-region IPv4 networks without creating inter-region connections. By default, the testing bandwidth is used.

The testing bandwidth can be used only for connectivity tests. It does not support service traffic.

Gold

### **Line types**

Inter-region connections support multiple line types. The network performance varies based on the line type.

**Service level**

**Service availability**

**Applicable scenario**

Gold

99.95%

Services with moderate network quality requirements, such as data synchronization and file transfer.

Platinum

99.995%

Services that require high network quality and low latency, such as securities transactions, online voice chat, video conferencing, and real-time gaming.

## Prerequisites

-   When you allocate bandwidth from a bandwidth plan, make sure that the sum of maximum bandwidth values specified for inter-region connections does not exceed the maximum bandwidth value of the bandwidth plan.
    
    For example, a CEN instance is associated with a 20 Mbit/s bandwidth plan that connects the Chinese mainland to North America. You can allocate bandwidth from the bandwidth plan to inter-region connections between US (Silicon Valley) and China (Hangzhou), between US (Silicon Valley) and China (Shanghai), and between US (Silicon Valley) and China (Shenzhen). In this case, the sum of the maximum bandwidth values of the inter-region connections cannot exceed 20 Mbit/s.
    
-   Upper bandwidth limits for inter-region connections that use the **pay-by-data-transfer** allocation mode:
    
    -   Within the Chinese mainland: 1,000 Mbit/s.
        
    -   Between the Chinese mainland and regions outside the Chinese mainland: 100 Mbit/s.
        
    
    If you require a higher bandwidth value, go to the [Quotas](https://cen.console.alibabacloud.com/cen/quota) page in the CEN console or to the [Quota Center](https://quotas.console.alibabacloud.com) console to request a quota increase. For more information, see [Manage CEN quotas](/help/en/cen/user-guide/manage-cen-quotas#task-2273720).
    

## **Prerequisites**

-   A transit router is deployed in each of the regions to be connected. For more information, see [Create a transit router](/help/en/cen/user-guide/transit-routers#section-qmu-6ox-hcu).
    
-   A bandwidth plan is purchased if you want to use the **Allocate from Bandwidth Plan** bandwidth allocation mode for the inter-region connection. For more information, see [Work with a bandwidth plan](/help/en/cen/user-guide/work-with-a-bandwidth-plan).
    

## **Create an inter-region connection**

### **Use an Enterprise Edition transit router to create an inter-region connection**

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, find the transit router in one of the regions to be connected, and click **Create Connection** in the **Actions** column.
    
4.  On the **Connection with Peer Network Instance** page, set the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Network Type**
    
    In this example, **Inter-region Connection** is selected.
    
    **Region**
    
    Select one of the regions to be connected.
    
    **Transit Router**
    
    The ID of the transit router in the selected region is automatically displayed.
    
    **Attachment Name**
    
    Enter a name for the inter-region connection.
    
    **Peer Region**
    
    Select the other region to be connected.
    
    **Important**
    
    To create an cross-border connection, you must comply with the cross-border network communication requirements and follow the console prompts to proceed.
    
    **Transit Router**
    
    The ID of the transit router in the selected region is automatically displayed.
    
    **Tag**
    
    Add tags to the inter-region connection.
    
    -   **Tag Key**: The tag key can be up to 64 characters in length. It cannot be an empty string or start with `acs:` or `aliyun` or contain `http://` or `https://`.
        
    -   **Tag Value**: The tag value can be an empty string with a maximum length of 128 characters. It cannot start with `acs:` or `aliyun` or contain `http://` or `https://`.
        
    
    You can add one or more tags to an inter-region connection. For more information about tags, see [Manage tags](/help/en/cen/user-guide/manage-tags-2).
    
    **Bandwidth allocation mode**
    
    Select the method that is used to allocate bandwidth to the inter-region connection. Transit routers support the following bandwidth allocation modes:
    
    -   **Allocate from Bandwidth Plan**: The bandwidth is allocated from a bandwidth plan.
        
    -   **Pay-By-Data-Transfer**: You are charged for data transfer over the inter-region connection. Inter-region connection fees in this billing mode are managed by [Cloud Data Transfer (CDT)](/help/en/cdt/product-overview/what-is-cdt).
        
    
    **Bandwidth Plan**
    
    Select a bandwidth plan that is associated with the CEN instance.
    
    This parameter is required if **Allocate from Bandwidth Plan** is selected.
    
    **Bandwidth**
    
    Specify a maximum bandwidth value for the inter-region connection. Unit: Mbit/s.
    
    -   If you select **Allocate from Bandwidth Plan**, the specified bandwidth value is used as the maximum bandwidth value of the inter-region connection.
        
    -   If you select **Pay-By-Data-Transfer**, the specified bandwidth value is used as the bandwidth cap of the inter-region connection. If the bandwidth cap is reached, bandwidth throttling is triggered.
        
        -   The default maximum bandwidth for connections within the Chinese mainland is 1,000 Mbit/s.
            
        -   The default bandwidth for connections between the Chinese mainland and regions outside the Chinese mainland is 100 Mbit/s.
            
    
    **Default Line Type**
    
    Select a line type for the inter-region connection.
    
    -   If **Allocate From Bandwidth Plan** is selected, only the **Gold** line type is supported.
        
    -   If **Pay-By-Data-Transfer** is selected, both the **Platinum** and **Gold** line types are supported. For more information, see [Line types](#dc524a607dzyq).
        
    
    **Advanced Settings**
    
    When you create an inter-region connection, the system automatically selects the following features in the advanced settings:
    
    -   **Associate with Default Route Table of Transit Router**
        
        After this feature is enabled, the inter-region connection is automatically associated with the default route table of the transit router. The transit router uses the default route table to forward network traffic across regions.
        
    -   **Propagate System Routes to Default Route Table of Transit Router**
        
        After this feature is enabled, the inter-region connection is associated with the default route tables of the transit routers in the connected regions.
        
    -   **Automatically Advertise Routes to Peer Region**
        
        After this feature is enabled, the routes in the route table of the transit router in the current region are automatically advertised to the route table of the peer transit router for cross-region communication. The route tables of the transit routers refer to the route tables that are associated with the inter-region connection.
        
    
    You can disable the preceding advanced features by clearing the check boxes. If you want to establish network communication between network instances, you can configure associated forwarding and route learning on the transit router. For more information, see [Manage routes](/help/en/cen/user-guide/manage-routes-1/).
    
    After you create the inter-region connection, you can view and manage the inter-region connection on the **Cross-region Connections** tab of the transit router details page.![跨地域连接管理.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7896323071/p739085.png)
    
    If networks in the regions cannot communicate with each other, you can use the reachability analyzer and the instance diagnostics features of transit routers to troubleshoot errors. For more information, see [Work with the reachability analyzer](/help/en/cen/user-guide/work-with-the-reachability-analyzer) and [Diagnose a transfer router](/help/en/cen/user-guide/diagnose-a-transit-router).
    

### **Use a Basic Edition transit router to create an inter-region connection**

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, find the transit router in one of the regions to be connected, and click **Create Connection** in the **Actions** column.
    
4.  On the **Connection with Peer Network Instance** page, set the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Network Type**
    
    In this example, **Inter-region Connection** is selected.
    
    **Region**
    
    Select one of the regions to be connected.
    
    **Transit Router**
    
    The ID of the transit router in the selected region is automatically displayed.
    
    **Peer Region**
    
    Select the other region to be connected.
    
    **Transit Router**
    
    The ID of the transit router in the selected region is automatically displayed.
    
    **Tag**
    
    Add tags to the inter-region connection.
    
    -   **Tag Key**: The tag key cannot be an empty string. The tag key can be up to 64 characters in length. The key cannot start with `acs:` or `aliyun` or contain `http://` or `https://`.
        
    -   **Tag Value**: The tag value can be an empty string. The tag value can be up to 128 characters in length. The tag value cannot start with `acs:` or `aliyun` or contain `http://` or `https://`.
        
    
    You can add one or more tags to an inter-region connection. For more information about tags, see [Manage tags](/help/en/cen/user-guide/manage-tags-2).
    
    **Bandwidth Plan**
    
    Select a bandwidth plan that is associated with the CEN instance.
    
    **Bandwidth**
    
    Specify a maximum bandwidth value for the inter-region connection. Unit: Mbit/s.
    
    After you create the inter-region connection, you can view and manage the inter-region connection on the **Cross-region Connections** tab of the transit router details page.
    
    ![跨地域连接-基础版.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7896323071/p739268.png)
    
    If networks in the regions cannot communicate with each other, you can use the reachability analyzer to troubleshoot errors. For more information, see [Work with the reachability analyzer](/help/en/cen/user-guide/work-with-the-reachability-analyzer).
    

## What to do next

### **Monitor inter-region connections**

-   You can create threshold-triggered alert rules to monitor the bandwidth usage of inter-region connections to prevent resource overages that may affect your services. For more information, see [Monitor inter-region connections](/help/en/cen/user-guide/monitor-inter-region-connections).
    
-   If an inter-region connection is created on an Enterprise Edition transit router and uses the Gold or Platinum line type, you can view the network latency of the inter-region connection in the [Network Intelligence Service (NIS) console](https://nis.console.alibabacloud.com/performance/netana?type=cross_region&tab=instance). You can choose a suitable line type based on the network latency.
    
    -   For more information about how to view the network latency of connections that use different line types, see [View network performance between regions](/help/en/nis/user-guide/cloud-network-mutual-access-performance-observation#1ade732013ppi).
        
    -   For more information about how to change the line type of a connection, see [Change the line type of an inter-region connection](#e693be217dm70).
        

### **Modify the bandwidth allocation mode of an inter-region connection**

-   You can modify the bandwidth allocation mode only of inter-region connections that are created on Enterprise Edition transit routers. If both the local and peer transit routers are of Basic Edition, you cannot modify the bandwidth allocation mode of the inter-region connection.
    
-   If you want to switch the bandwidth allocation mode from pay-by-data-transfer to a bandwidth plan, you must associate the CEN instance with a bandwidth plan. For more information, see [Work with a bandwidth plan](/help/en/cen/user-guide/work-with-a-bandwidth-plan#section-1od-o7d-eye).
    
-   If you want to switch the bandwidth allocation mode from a bandwidth plan to pay-by-data-transfer, the default maximum bandwidth value supported by the pay-by-data-transfer allocation mode must not be smaller than the current maximum bandwidth value. You can increase the default maximum bandwidth of pay-by-data-transfer inter-region connections in the CEN or Quota Center console. For more information, see [Manage CEN quotas](/help/en/cen/user-guide/manage-cen-quotas#task-2273720).
    
    Assume that the maximum bandwidth value of the inter-region connection between the US (Silicon Valley) and US (Virginia) regions is 101 Mbit/s, and the bandwidth is allocated from a bandwidth plan. Before you switch the bandwidth allocation mode to pay-by-data-transfer, you must first increase the default maximum bandwidth value supported by the pay-by-data-transfer mode to a value that is equal to or greater than 101 Mbit/s. For inter-region connections between regions inside the Chinese mainland, or between the Chinese mainland and regions outside the Chinese mainland, the default maximum bandwidth value supported by the pay-by-data-transfer mode is 100 Mbit/s.
    

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router to which the inter-region connection belongs.
    
4.  On the details page of the transit router, click the **Cross-region Connections** tab.
    
5.  On the **Cross-region Connections** tan, find the inter-region connection that you want to manage and click **Modify** in the **Bandwidth Allocation Mode** column.
    
6.  Modify the bandwidth allocation mode based on the following scenarios:
    
    -   Switch from pay-as-you-go to a bandwidth plan
        
        In the **Change Bandwidth Allocation Mode** dialog box, select **Switch to Allocate from Bandwidth Plan**, select a bandwidth plan, specify a maximum bandwidth value, and then click **OK**.
        
    -   Switch from a bandwidth plan to pay-as-you-go
        
        In the **Change Bandwidth Allocation Mode** dialog box, select **Switch to Pay-By-Data-Transfer** and click **OK**.
        

### **Modify the maximum bandwidth value of an inter-region connection**

After you create an inter-region connection, you can modify the bandwidth value of the inter-region connection based on your business requirements.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router to which the inter-region connection belongs.
    
4.  On the details page of the transit router, click the **Cross-region Connections** tab.
    
5.  On the **Cross-region Connections** tab, find the inter-region connection that you want to manage and click **Modify** in the **Maximum Bandwidth** column.
    
6.  In the **Set Region Connection** dialog box, set a bandwidth value and click **OK**.
    
    -   If the bandwidth is allocated from a bandwidth plan, the bandwidth value cannot exceed the maximum bandwidth of the bandwidth plan. You can increase the maximum bandwidth of a bandwidth plan. For more information, see [Resize a bandwidth plan](/help/en/cen/product-overview/resize-a-bandwidth-plan).
        
    -   If the inter-region connection uses the pay-by-data-transfer bandwidth allocation mode, the peak bandwidth of the inter-region connection cannot exceed the default maximum bandwidth. You can increase the default maximum bandwidth of an inter-region connection. For more information, see [Manage CEN quotas](/help/en/cen/user-guide/manage-cen-quotas#task-2273720).
        
    
7.  If you want to reduce the maximum bandwidth value, confirm the note in the **Set Bandwidth for Inter-region Connection** message and click **OK**.
    

### **Change the line type of an inter-region connection**

You can change the line type of **pay-by-data-transfer** inter-region connections.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router to which the inter-region connection belongs.
    
4.  On the details page of the transit router, click the **Cross-region Connections** tab.
    
5.  On the **Cross-region Connections** tab, find the inter-region connection that you want to manage and click **Modify** in the **Default Line Type** column.
    
6.  In the **Modify Default Line Type** dialog box, select a line type and click **OK**.
    
    Before you change the line type, we recommend that you view the network latency of connections that use different line types in the [NIS console](https://nis.console.alibabacloud.com/performance/netana?type=cross_region&tab=instance). For more information, see [View network performance between regions](/help/en/nis/user-guide/cloud-network-mutual-access-performance-observation#1ade732013ppi).
    

### **Associate an inter-region connection with a different transit router route table**

After you create an inter-region connection, you can change the transit router route table that is associated with the inter-region connection.

**Warning**

-   This method is supported only by Enterprise Edition transit routers.
    
-   If the inter-region connection has route synchronization enabled, the routes advertised to the peer transit router are withdrawn after the inter-region connection is associated with a different transit router route table. The routes in the new route table are synchronized to the route table of the peer transit router. The route table of the peer transit router refers to the route table that is in route learning relationship with the inter-region connection. For more information, see [Route synchronization](/help/en/cen/user-guide/route-synchronization#task-2263165).
    

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router that you want to manage.
    
4.  On the **Cross-region Connections** tab, click the ID of the inter-region connection that you want to manage.
    
5.  In the **Attachment Details** panel, find the **Basic Information** section and click **Modify** next to **Associated Route Table**.
    
6.  In the **Modify Route Table** dialog box, select a route table and click **OK**.
    

### **Delete an inter-region connection**

If your service no longer requires inter-region network communication, you can delete the inter-region connections.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, click the ID of the transit router to which the inter-region connection belongs.
    
    #### **Delete an inter-region connection from an Enterprise Edition transit router**
    
    If the inter-region connection that you want to delete is on an Enterprise Edition transit router, perform the following steps to delete the inter-region connection:
    
    **Warning**
    
    -   You can delete the inter-region connections and all relevant configurations at the same time. To prevent adverse impacts on your workloads, we recommend that you check and confirm every configuration item before you delete the configurations.
        
    -   If the inter-region connection is created between a Basic Edition transit router and an Enterprise Edition transit router, delete the inter-region connection from the Enterprise Edition transit router.
        
    
    1.  On the details page of the transit router, click the **Cross-region Connections** tab.
        
    2.  On the **Cross-region Connections** tab, find the inter-region connection that you want to delete and click **Delete** in the **Actions** column.
        
    3.  In the dialog box that appears, check and confirm every configuration item, select **Confirm that the deletion of the configurations does not compromise your service stability and can be deleted at the same time**, and then click **OK**.
        
    4.  In the **Are you sure that you want to delete the instance?** message, check the information and click **OK**.
        
    
    #### **Delete an inter-region connection from a Basic Edition transit router**
    
    If the inter-region connection that you want to delete is on a Basic Edition transit router, perform the following steps to delete the inter-region connection:
    
    1.  On the details page of the transit router, click the **Cross-region Connections** tab.
        
    2.  On the **Cross-region Connections** tab, find the inter-region connection that you want to delete and click **Delete** in the **Actions** column.
        
    3.  In the **Delete Region Connection** message, click **OK**.
        
    

## **Call API operations to create and manage inter-region connections**

You can use tools such as [Alibaba Cloud SDKs (recommended)](/help/en/openapi/alibaba-cloud-sdks), [Alibaba Cloud CLI](/help/en/openapi/alibaba-cloud-cli), [Terraform](/help/en/openapi/terraform), and [Resource Orchestration Service (ROS)](/help/en/openapi/ros) to create and manage inter-region connections by calling API operations. For more information, see the following API references:

-   [CreateTransitRouterPeerAttachment](/help/en/cen/developer-reference/api-cbn-2017-09-12-createtransitrouterpeerattachment#main-107864): creates an inter-region connection on an Enterprise Edition transit router.
    
-   [UpdateTransitRouterPeerAttachmentAttribute](/help/en/cen/developer-reference/api-cbn-2017-09-12-updatetransitrouterpeerattachmentattribute#main-107864): modifies the configurations of an inter-region connection on an Enterprise Edition transit router.
    
-   [ListTransitRouterPeerAttachments](/help/en/cen/developer-reference/api-cbn-2017-09-12-listtransitrouterpeerattachments#main-107864): queries the inter-region connections on an Enterprise Edition transit router.
    
-   [DeleteTransitRouterPeerAttachment](/help/en/cen/developer-reference/api-cbn-2017-09-12-deletetransitrouterpeerattachment#main-107864): deletes an inter-region connection from an Enterprise Edition transit router.
    
-   [SetCenInterRegionBandwidthLimit](/help/en/cen/developer-reference/api-cbn-2017-09-12-setceninterregionbandwidthlimit#main-107864): configures, modifies, or deletes an inter-region bandwidth on a Basic Edition transit router.
    
-   [DescribeCenInterRegionBandwidthLimits](/help/en/cen/developer-reference/api-cbn-2017-09-12-describeceninterregionbandwidthlimits#main-107864): queries the bandwidth values of inter-region connections.
    

## References

For more information about how to use inter-region connections to establish communication across VPCs, see the following topics:

-   [Use Enterprise Edition transit routers to connect VPCs across regions and accounts](/help/en/cen/getting-started/use-enterprise-edition-transit-routers-to-connect-vpcs-across-regions-and-accounts)
    
-   [Use CEN and Basic Edition transit routers to connect VPCs in different regions and Alibaba Cloud accounts](/help/en/cen/use-basic-edition-transit-routers-to-connect-vpcs-across-regions)
