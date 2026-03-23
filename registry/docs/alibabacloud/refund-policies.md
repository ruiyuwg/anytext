This topic describes the refund policies for Global Accelerator (GA) resources.

## Refund policies

### Refund policies for GA resources

GA instances and basic bandwidth plans support partial refunds. The following table describes the refund policies.

**Billing method**

**Refund policy**

**Refund method**

Subscription

When you purchase a subscription GA instance or a subscription basic bandwidth plan, you must pay a subscription fee based on the subscription duration and instance specification or bandwidth. Standard GA instances provide different specifications. If you no longer need to use a subscription GA instance or basic bandwidth plan, you can unsubscribe from the GA instance or basic bandwidth plan and apply for a refund.

**Conditions**

-   GA instance: The GA instance is not associated with a bandwidth plan. No acceleration areas, listeners, or endpoint groups are configured for the GA instance.
    
-   Basic bandwidth plan: The basic bandwidth plan is not associated with a GA instance.
    

**Refund types**

You can request a partial and conditional refund after five days of purchase. You can also cancel pending renewal orders. Before you request a refund, make sure that you understand the refund policies. For more information, see [Rules for unsubscribing from resources](/help/en/user-center/refund-rules#main-2277885).

Apply for a refund in the GA console after you understand the refund policies. For more information, see [Refund methods](#section-kji-d59-nrd).

### Refund policies for other scenarios

**Scenario**

**Refund policy**

**References**

Downgrade

If the specification of a standard GA instance or the maximum bandwidth of a basic bandwidth plan exceeds your business requirements, and you obtained the privilege to downgrade resources, you can downgrade the standard GA instance or reduce the maximum bandwidth of the basic bandwidth plan.

A configuration downgrade may result in a refund. The following formula is used to calculate the refund amount: Refund amount = Remaining amount of the configuration price before the downgrade - Price of the new configuration. For more information, see [Rules for unsubscribing from resources](/help/en/user-center/refund-rules#main-2277885).

-   [Create and manage standard GA instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#section-q54-htx-1ik)
    
-   [Upgrade or downgrade a basic bandwidth plan](/help/en/ga/product-overview/purchase-and-manage-basic-bandwidth-plans#section-vum-bls-ght)
    

## Refund methods

You can unsubscribe from subscription GA instances and basic bandwidth plans in the GA console or in the Expenses and Costs console.

Before you unsubscribe from a resource, check whether you meet the following conditions and make sure that data is migrated.

-   Conditions for unsubscribing from a GA instance:
    
    -   Make sure that no acceleration area is configured for the GA instance from which you want to unsubscribe. If acceleration areas are configured, delete the acceleration areas. For more information, see [Delete an acceleration area of a standard GA instance](/help/en/ga/user-guide/add-and-manage-acceleration-areas#section-zr4-jiz-a85) or [Delete an acceleration area of a basic GA instance](/help/en/ga/user-guide/add-and-manage-acceleration-areas-1#section-yjc-sqp-sn2).
        
    -   Make sure that no listeners or endpoint groups are configured for the GA instance from which you want to unsubscribe. If listeners are configured for a standard GA instance or endpoint groups are configured for a basic GA instance, delete the listeners or endpoint groups. For more information, see [Delete a listener for a standard GA instance](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#section-jz3-7ye-1b7) and [Delete an endpoint for a basic GA instance](/help/en/ga/user-guide/add-and-manage-endpoint-groups-and-endpoints-for-a-basic-ga-instance#section-s9l-1hz-hqc).
        
    -   Make sure that no bandwidth plan is associated with the GA instance from which you want to unsubscribe. If a bandwidth plan is associated with the GA instance, disassociate the bandwidth plan from the GA instance. For more information, see [Disassociate a basic bandwidth plan](/help/en/ga/product-overview/purchase-and-manage-basic-bandwidth-plans#section-sz7-zt8-ud0).
        
-   Conditions for unsubscribing from a basic bandwidth plan:
    
    Make sure that the basic bandwidth plan from which you want to unsubscribe is not associated with a GA instance. If the basic bandwidth plan is associated with a GA instance, disassociate the basic bandwidth plan from the GA instance. For more information, see [Disassociate a basic bandwidth plan](/help/en/ga/product-overview/purchase-and-manage-basic-bandwidth-plans#section-sz7-zt8-ud0).
    

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  Use one of the following methods to go to the **Unsubscribe** page:
    
    -   Method 1: Go to the Expenses and Costs console from the Instances page
        
        On the Instances page, find the GA instance or basic bandwidth plan that you want to manage, and click **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1024768761/p554514.png)** > **Unsubscribe** in the Actions column. Alternatively, click **Unsubscribe** in the Actions column.
        
        **Note**
        
        If you want to unsubscribe from a basic GA instance, log on to the GA console and click **Basic Instance** in the left-side navigation pane to go to the Instances page of basic GA instances.
        
    -   Method 2: Go to the Expenses and Costs console from the top navigation bar
        
        1.  In the top navigation bar, choose **Expenses** > **Expenses and Costs**.
            
        2.  In the left-side navigation pane of the **Expenses and Costs** page, click **Unsubscriptions**.
            
3.  On the **Unsubscriptions** page, unsubscribe from GA resources based on your business requirements.
    
    -   Unsubscribe from GA resources that are being used
        
        1.  On the **Unsubscribe Resource** tab, select **global accelerator** or **Global Accelerator Bandwidth Plan** from the **Commodity Name** drop-down list and click **Search**.
            
        2.  Find the GA instance or basic bandwidth plan that you want to manage and click **Unsubscribe Resource** in the **Actions** column.
            
        3.  On the **Unsubscribe Resource** page, click **Unsubscribe** on the bottom of the page, and select or enter a reason for unsubscription. Complete the unsubscription as prompted.
            
    -   Cancel a pending renewal order
        
        **Note**
        
        For more information about how to cancel a renewal order that is in effect, see **Unsubscribe from GA resources that are being used**.
        
        1.  Click the **Unsubscribe Renewal Period** tab, select **global accelerator** or **Global Accelerator Bandwidth Plan** from the ****Name**** drop-down list, and then click **Search**.
            
        2.  Find the GA instance or basic bandwidth plan that you want to manage and click **Cancle Renewal** in the **Actions** column.
            
        3.  On the **Cancle Renewal** page, set the **Updated Expiration Time** parameter, select the confirmation information in the lower part of the page, click **Unsubscribe**, and then complete the unsubscription as prompted.
            

## Refund collection

For more information about how the refund is collected, see [Refund flow](/help/en/user-center/refund-destinations-1#main-2277948).

## References

-   [Unsubscribe from resources](/help/en/user-center/refund-methods#main-2277947)
    
-   [FAQ about unsubscribing from resources](/help/en/user-center/faq-about-refunds#main-2277949)
