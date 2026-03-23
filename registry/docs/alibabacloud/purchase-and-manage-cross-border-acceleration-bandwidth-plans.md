After you purchase a subscription Global Accelerator instance that uses the **pay-by-bandwidth** bandwidth metering method, you must associate a basic bandwidth plan with the instance. If your business involves cross-border acceleration between the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan), you must purchase a cross-border acceleration bandwidth plan. You must use cross-border acceleration bandwidth plans together with basic bandwidth plans. This topic describes how to purchase and manage cross-border acceleration bandwidth plans.

## Connected areas

You must specify the connected areas when you purchase a cross-border acceleration bandwidth plan. Only the Chinese mainland and Global can be specified as the connected areas for cross-border acceleration bandwidth plans.

## Prerequisites

-   If you want to use cross-border acceleration bandwidth plans to accelerate content delivery between regions in the Chinese mainland and regions outside the Chinese mainland, make sure that your account has completed enterprise real-name verification. For more information, see [FAQ about real-name registration on the Alibaba Cloud international site (alibabacloud.com)](/help/en/account/support/which-users-are-required-to-undergo-account-authentication).
    
-   The domain name to which you want to accelerate access has an Internet Content Provider (ICP) number. Cross-border acceleration bandwidth plans do not apply to domain names that do not have ICP numbers. For information about how to apply for an ICP number, see [ICP filing application overview](/help/en/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview#task-2038407).
    

## Purchase a cross-border acceleration bandwidth plan

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Bandwidth**.
    
3.  On the **Bandwidth** page, click **Purchase Cross-border Acceleration Bandwidth Plan**.
    
4.  In **Cross Border Bandwidth Package** buy page, set the parameters described in the following table and then click **Buy Now** to complete the payment.
    
    **Parameter**
    
    **Description**
    
    **Area A**
    
    Select the area that you want to connect. Only **Mainland China** is supported.
    
    **Area B**
    
    Select the other area that you want to connect. Only **Global** is supported.
    
    **Billing Method**
    
    Select a metering method for the cross-border acceleration bandwidth plan.
    
    Only **Pay by Bandwidth** is supported.
    
    **Bandwidth**
    
    Adjust the slider to specify the maximum bandwidth of the cross-border acceleration bandwidth plan or enter a bandwidth value.
    
    **Resource Group**
    
    Select the resource group to which the cross-border acceleration bandwidth plan belongs.
    
    The resource group must be created in Resource Management by the current Alibaba Cloud account. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    
    **Subscription Duration**
    
    Select a subscription duration.
    
    You can select **Auto-renewal** to allow the system to automatically renew the cross-border acceleration bandwidth plan.
    

## Associate a cross-border acceleration bandwidth plan

After you purchase a cross-border acceleration bandwidth plan, you must associate the cross-border acceleration bandwidth plan with a GA instance.

Before you associate a cross-border acceleration bandwidth plan, make sure that the following requirements are met:

-   A basic bandwidth plan is associated with the GA instance. For more information, see [Purchase and manage basic bandwidth plans](/help/en/ga/153205#task-2403658).
    
-   A cross-border acceleration bandwidth plan is purchased. For more information, see [Purchase cross-border acceleration bandwidth plans](#section-wme-8rk-i9x).
    
-   Make sure that the maximum bandwidth of the cross-border acceleration bandwidth plan is greater than or equal to the maximum bandwidth of the basic bandwidth plan that is associated with your GA instance.
    

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Bandwidth**.
    
3.  On the **Bandwidth** page, find the cross-border acceleration bandwidth plan that you want to manage and click **Bind Instance** in the **Bind Instance** column.
    
4.  In the **Bind Instance** dialog box, set the following parameters and click **OK**.
    
    -   **Instance Type:** the type of GA instance with which you want to associate the bandwidth plan. Valid values: **Standard Instance** and **Basic Instance**.
        
    -   **Resource Group:** the resource group to which the GA instance belongs.
        
    -   **Select Instance:** select a GA instance from the drop-down list.
        
    
    After the cross-border acceleration bandwidth plan is associated with the GA instance, the cross-border acceleration bandwidth plan changes to the **In Use** state.
    

## Modify the maximum bandwidth of a cross-border acceleration bandwidth plan

You can modify the maximum bandwidth of a cross-border acceleration bandwidth plan. The modification immediately takes effect.

Before you change the specification of a cross-border acceleration bandwidth plan, take note of the following information:

-   You can only increase the maximum bandwidth of a cross-border acceleration bandwidth plan.
    
-   If you use a basic bandwidth plan and a cross-border acceleration bandwidth plan at the same time and you want to increase the maximum bandwidth of the bandwidth plans, make sure that the maximum bandwidth of the cross-border acceleration bandwidth plan is greater than or equal to the maximum bandwidth of the basic bandwidth plan. To increase the maximum bandwidth of the bandwidth plans, perform the following steps: increase the maximum bandwidth of the cross-border acceleration bandwidth plan, increase the maximum bandwidth of the basic bandwidth plan, and then allocate bandwidth to the acceleration regions.
    
    For information about how to change the specification of a basic bandwidth plan, see [Change the specification of a basic bandwidth plan](/help/en/ga/153205#section-ip4-gmz-ya9).
    
-   When you increase the maximum bandwidth of a cross-border acceleration bandwidth plan, make sure that the increased maximum bandwidth of the cross-border acceleration bandwidth plan does not exceed the maximum bandwidth supported by the current GA instance. For more information about the specifications of GA instances, see [Overview of standard GA instances](/help/en/ga/user-guide/overview-of-standard-ga-instances/#concept-2382438).
    

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Bandwidth**.
    
3.  On the **Bandwidth** page, find the cross-border acceleration bandwidth plan that you want to manage and click **Change Configurations** in the **Bandwidth Limit** column.
    
4.  On the **Upgrade/Downgrade** page, modify the maximum bandwidth of the cross-border acceleration bandwidth plan, read and agree to the Terms of Service, and then click **Buy Now** to complete the payment.
    

## Replace a cross-border acceleration bandwidth plan

You can replace a cross-border acceleration bandwidth plan that is associated with a GA instance. This allows you to use the cross-border acceleration bandwidth plan that meets your requirements. The GA instance continues to forward network traffic when you replace the cross-border acceleration bandwidth plan.

If you use a basic bandwidth plan and a cross-border acceleration bandwidth plan at the same time, make sure that the maximum bandwidth of the new cross-border acceleration bandwidth plan is greater than or equal to the maximum bandwidth of the basic bandwidth plan that is associated with your GA instance.

After you replace the original cross-border acceleration bandwidth plan with the required bandwidth plan, the original one is disassociated from the GA instance and the required one is associated with the GA instance.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Bandwidth**.
    
3.  On the **Bandwidth** page, find the cross-border acceleration bandwidth plan that you want to manage and click **Replace** in the **Actions** column.
    
4.  In the **Replace Cross-border Acceleration Bandwidth Plan** dialog box, select the cross-border acceleration bandwidth plan that you want to use and click **OK**.
    
    -   **Resource Group:** select the resource group to which the cross-border acceleration bandwidth plan belongs.
        
    -   **Bandwidth Plan to Use:** select the cross-border acceleration bandwidth plan that you want to use from the drop-down list.
        
        Only a cross-border acceleration bandwidth plan that is in the **Idle** state can be selected.
        
    

## Disassociate a cross-border acceleration bandwidth plan

You can disassociate a cross-border acceleration bandwidth plan from a GA instance. After you disassociate the cross-border acceleration bandwidth plan from the GA instance, you can associate the GA instance with another cross-border acceleration bandwidth plan.

Before you disassociate a cross-border acceleration bandwidth plan, make sure that the GA instance and the cross-border acceleration bandwidth plan meet the following requirements:

-   If the bandwidth type of the basic bandwidth plan that is associated with the GA instance is standard or enhanced, the acceleration regions and regions where the endpoint groups are deployed must be in the Chinese mainland.
    
-   If the bandwidth type of the basic bandwidth plan that is associated with the GA instance is premium, the acceleration regions and regions where the endpoint groups are deployed must be outside the Chinese mainland.
    

If the preceding requirements are not met, delete the acceleration areas and listeners that are added to the GA instance before you disassociate the cross-border acceleration bandwidth plan. For more information, see [Delete an acceleration area](/help/en/ga/delete-an-acceleration-area#task-2382451) and [Delete a listener](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#section-jz3-7ye-1b7).

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Bandwidth**.
    
3.  On the **Bandwidth** page, find the cross-border acceleration bandwidth plan that you want to disassociate and click **Unbind** in the **Actions** column.
    
4.  In the **Unbind Bandwidth Plan** message, click **OK**.
    

## References

-   [CreateBandwidthPackage](/help/en/ga/api-createbandwidthpackage#doc-api-Ga-CreateBandwidthPackage): creates a bandwidth plan.
    
-   [BandwidthPackageAddAccelerator](/help/en/ga/api-bandwidthpackageaddaccelerator#doc-api-Ga-BandwidthPackageAddAccelerator): associates a bandwidth plan with a GA instance.
    
-   [ReplaceBandwidthPackage](/help/en/ga/api-replacebandwidthpackage#doc-api-Ga-ReplaceBandwidthPackage): replaces a bandwidth plan.
    
-   [BandwidthPackageRemoveAccelerator](/help/en/ga/api-bandwidthpackageremoveaccelerator#doc-api-Ga-BandwidthPackageRemoveAccelerator): disassociates a bandwidth plan from a GA instance.
    
-   [UpdateBandwidthPackage](/help/en/ga/api-153243#doc-api-Ga-UpdateBandwidthPackage): modifies the configurations of a bandwidth plan.
