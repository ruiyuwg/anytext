If you have idle dedicated connections over Express Connect circuits, you can unsubscribe and release resources based on your business requirements. This topic describes how to request a refund for the resource occupation fee charged by Express Connect.

## **Prerequisites**

Before you request a refund, make sure that the following requirements are met and data migration is completed:

-   No virtual border routers (VBRs) or shared ports are created for the Express Connect circuit. For more information about how to delete a VBR and a shared port, see the "Delete a VBR" section of the [Create and manage a VBR](/help/en/express-connect/user-guide/create-and-manage-a-vbr#section-9z0-ubw-s5h) topic and the "Delete a shared port" section of the [Operation guide for Express Connect partners](/help/en/express-connect/user-guide/manage-connections-for-tenants#section-t69-a46-zx7) topic.
    
-   If VBRs are created for the dedicated connection and BGP groups, BGP peers, and routes are created for the VBRs, you need to delete all these resources. For more information, see the prerequisites in the "Delete a VBR" section of the [Create and manage a VBR](/help/en/express-connect/user-guide/create-and-manage-a-vbr#section-9z0-ubw-s5h) topic.
    
-   The dedicated connection is in the **terminated** state.
    

## Unsubscription method

You can apply for a refund for the resource occupation fee charged by the Express Connect in the Expenses and Costs console or by calling API operations.

## Unsubscribe in the Expenses and Costs console

1.  Log on to the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview).
    
2.  In the left-side navigation pane, click **Unsubscribe**.
    
3.  On the **Unsubscribe** page, perform the following operations based on your business requirements.
    
    -   Unsubscribe from resources that are being used
        
        1.  On the **Unsubscribe from resources that are being used** tab, select **Express Connect-Resource occupation fee** from the **Name** drop-down list, select **Partial Refund** as **Type**, and then click **Search**.
            
            **Note**
            
            To view the reasons why the resource occupation fees of specific dedicated connections cannot be refunded, select **Nonrefundable** as **Type**, find the Express Connect circuit that you want to view, and then view the reason in the **Reason** column.
            
        2.  Find the ID of the dedicated connection and click **Unsubscribe Resource** in the **Actions** column.
            
        3.  On the **Unsubscribe Resource** page, select the check boxes in the lower part of the page, click **Unsubscribe**, and then complete the operations as prompted.
            
    -   Cancel a pending renewal order
        
        1.  On the **Unsubscribe Renewal Period** tab, select **Express Connect-Resource occupation fee** from the **Name** drop-down list and click **Search**.
            
        2.  Find the dedicated connection from which you want to unsubscribe and click **Cancel Renewal** in the **Actions** column.
            
        3.  On the **Cancel Renewal** page, configure the **Updated Expiration Time** parameter, select the check box in the lower part of the page, click **Unsubscribe**, and then complete the operations as prompted.
            

## Unsubscribe by calling API operations

1.  Call the [DescribePhysicalConnections](https://next.api.alibabacloud.com/api/Vpc/2016-04-28/DescribePhysicalConnections) operation to view the ID of the dedicated connection that you want to unsubscribe from and check whether the instance is in the `Terminated` state.
    
    If the dedicated connection is not in the `Terminated` state, you can call the [TerminatePhysicalConnection](https://next.api.alibabacloud.com/api/Vpc/2016-04-28/TerminatePhysicalConnection) operation to terminate the dedicated connection first.
    
2.  If the dedicated connection is in the `Terminated` state, call the [RefundInstance](https://next.api.alibabacloud.com/api/BssOpenApi/2017-12-14/RefundInstance) operation to complete the unsubscription.
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    ImmediatelyRelease
    
    Set the parameter to `1` to release the resource immediately after you unsubscribe from the resource.
    
    ProductCode
    
    Set the parameter to `pconn` to specify the dedicated connection over an Express Connect circuit as the resource from which you want to unsubscribe.
    
    InstanceId
    
    Set the parameter to the ID of the dedicated connection from which you want to unsubscribe.
    
    Example: `pc-t4nnrteq8kh9fr9xc****`.
    

## Refund flow

For more information about the refund flow after you unsubscribe from a dedicated connection, see [Refund flow](/help/en/user-center/refund-destinations-1#main-2277948).

## References

-   [Methods for unsubscribing resources](/help/en/user-center/refund-methods#main-2277947)
    
-   [FAQ about unsubscribing from cloud resources on the international site](/help/en/user-center/faq-about-refunds#main-2277949)
