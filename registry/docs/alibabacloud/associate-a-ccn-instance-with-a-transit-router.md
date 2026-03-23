To enable a data center connected to a Cloud Connect Network (CCN) instance to communicate with other networks attached to a transit router, such as VPCs in the same or different regions, connect the CCN instance to the transit router. After the connection is established, the transit router enables communication between the data center and the network instances.

## Prerequisites

-   A transit router instance is created in the region where the CCN instance is deployed. For more information, see [Create a transit router instance](/help/en/cen/user-guide/transit-routers#section-qmu-6ox-hcu).
    
-   You can connect a transit router to a CCN instance that belongs to the same or a different Alibaba Cloud account. If the CCN instance belongs to a different account, you must first obtain authorization from that account. For more information, see [Cross-account network instance authorization](/help/en/cen/user-guide/grant-permissions-on-a-network-instance-that-belongs-to-another-account#task-1681162).
    

## **Interconnectivity rules for transit routers in CCN regions**

-   For regions in the Chinese mainland:
    
    -   A transit router (TR) in a Chinese mainland CCN region can communicate by default with a **Basic Edition TR** in any other Chinese mainland region. No [inter-region connection](/help/en/cen/user-guide/manage-inter-region-connections) is required.
        
    -   A TR in a Chinese mainland CCN region can communicate with an **Enterprise Edition TR** in another Chinese mainland region only after you create an inter-region connection.
        
-   For regions outside the Chinese mainland, a TR must be connected to a TR in another region using an inter-region connection to enable communication. This is required regardless of the editions of the TRs.
    

## Procedure

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **Transit Router** tab, find the transit router instance in the destination region and click **Create Network Instance Connection** in the **Actions** column.
    
4.  On the **Connect Network Instance** page, set the parameters for the network instance and click **OK**.
    
    **Configuration item**
    
    **Description**
    
    **Instance Type**
    
    Select **Cloud Connect Network (CCN)**.
    
    **Region**
    
    Select the region where the network instance is located.
    
    **Transit Router**
    
    The system automatically displays the transit router instance created in the current region.
    
    **Resource Owner UID**
    
    Select the account type that owns the network instance.
    
    -   If the network instance and the transit router instance belong to the same Alibaba Cloud account, select **Current Account**.
        
    -   If they belong to different accounts, select **Different Account**, and enter the account ID (primary account) of the network instance.
        
    
    **Network Instance**
    
    Select the ID of the CCN instance to connect.
    
    After you create the CCN connection, it automatically associates with the default route table of the transit router, and the CCN instance automatically propagates its routes to the default route table.
    
    After you create the CCN connection, you can view its details on the **Intra-region Connections** tab of the details page for the transit router instance. For more information, see [View network instance connections](/help/en/cen/user-guide/view-network-instance-connections#task-1995538).
    

## **Create a CCN connection by calling an API**

You can also create a CCN connection by calling an API operation. You can use tools such as [Alibaba Cloud SDK (recommended)](/help/en/openapi/alibaba-cloud-sdks), [Alibaba Cloud CLI](/help/en/openapi/alibaba-cloud-cli), [Terraform](/help/en/openapi/terraform), and [Resource Orchestration Service](/help/en/openapi/ros). For more information about the API operation, see [AttachCenChildInstance](/help/en/cen/developer-reference/api-cbn-2017-09-12-attachcenchildinstance#main-107864).
