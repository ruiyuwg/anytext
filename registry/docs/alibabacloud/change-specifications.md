This topic describes the rules and procedures for changing the specifications of Global Accelerator (GA) instances and basic bandwidth plans.

## Change the specification of a standard GA instance

You can upgrade or downgrade the specification of a subscription standard GA instance.

Before you upgrade or downgrade a subscription standard GA instance, take note of the information in the following table.

**Limit**

**Effective time**

**Impact on billing**

**Scenario**

-   By default, you can only upgrade the specification of a GA instance. The feature for downgrading the specification of a GA instance is unavailable. To use this feature, go to the Quota Center console, find the **Console Downgrade** quota, and click **Apply** in the **Actions** column. For more information, see the "Adjust quota" section of the [Manage GA quotas](/help/en/ga/user-guide/manage-ga-quotas#section-yqx-xul-73a) topic.
    
-   After you upgrade a GA instance, endpoint group IP addresses may be added to the GA instance. The number of new IP addresses varies based on the specification of the GA instance. You can view the IP addresses in the GA console. You must confirm the IP addresses before they can change to the Available state.
    
    You can confirm the endpoint group IP addresses in the GA console or by calling the [UpdateAcceleratorConfirm](/help/en/ga/api-updateacceleratorconfirm#doc-api-Ga-UpdateAcceleratorConfirm) operation.
    
-   If you downgrade a GA instance, the number of endpoint group IP addresses may be reduced.
    

After you change the specification of a standard GA instance, the new specification takes effect immediately. You may need to wait a few minutes for the specification to take effect due to network latency.

-   After you upgrade an instance, you are charged the price difference between the original specification and new specification for the remainder of the current billing cycle.
    
-   After you downgrade an instance, you may receive a refund that is equal to the price difference between the original specification and the new specification for the remainder of the current billing cycle. The actual refund amount may vary based on the discount at the time of purchase and whether coupons are used. You can view the actual refund amount on the buy page. For more information, see [Rules for unsubscribing from resources](/help/en/user-center/refund-rules#main-2277885).
    

If the specification of a standard GA instance is no longer suitable for your use case, you can upgrade or downgrade the GA instance.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, perform the following operations to change the specification of a standard GA instance.
    
    For more information about the specifications of GA instances, see [Overview of standard GA instances](/help/en/ga/user-guide/overview-of-standard-ga-instances/#section-vab-yht-jm5).
    
    -   **Upgrade a GA instance**
        
        1.  Find the GA instance that you want to upgrade and choose **![更多2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1713183961/p696651.png)** > **Instance Management** > **Change Specifications** in the **Actions** column.
            
        2.  In the **Upgrade Notes** message, confirm the information and click **OK**.
            
            **Note**
            
            If you click **Upgrade**, only upgrades are supported. For information about how to downgrade a GA instance, see the "**Downgrade a GA instance**" section in this topic.
            
        3.  On the Upgrade/Downgrade page, specify the specification that you want to use, agree to the Terms of Service, and then click **Buy Now** to complete the payment.
            
        4.  Check the status of the GA instance in the **Status** column. If **Unconfirmed Endpoint Group IPs** appears, click **OK**. In the **Confirm Endpoint Group IPs** message, click **OK**.
            
    -   **Downgrade a GA instance**
        
        1.  Find the GA instance that you want to downgrade and choose **![更多2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1713183961/p696651.png)** > **Instance Management** > **Downgrade** in the **Actions** column.
            
        2.  In the **Downgrade** message, confirm the information and click **OK**.
            
        3.  On the Downgrade page, specify the specification that you want to use, agree to the Terms of Service, and then click **Buy Now** to complete the payment.
            

## Upgrade or downgrade a basic bandwidth plan

You can change the maximum bandwidth and bandwidth type of a basic bandwidth plan.

Before you upgrade or downgrade a basic bandwidth plan, take note of the information in the following table.

**Limit**

**Effective time**

**Impact on billing**

**Scenario**

-   By default, you can only upgrade a basic bandwidth plan. By default, the feature for downgrading basic bandwidth plans is unavailable. To use this feature, go to the Quota Center console, find the **Console Downgrade** quota, and click Apply in the Actions column. For more information, see the "Adjust quotas" section of the [Manage GA quotas](/help/en/ga/user-guide/manage-ga-quotas#section-yqx-xul-73a) topic.
    
-   Before you downgrade a basic bandwidth plan, make sure that the total allocated bandwidth across all acceleration regions does not exceed the new maximum bandwidth.
    
-   When you upgrade a basic bandwidth plan, make sure that the new maximum bandwidth does not exceed the maximum bandwidth that is supported by the associated GA instance. For information about the specifications of GA instances, see [Standard GA instances](/help/en/ga/user-guide/overview-of-standard-ga-instances/#concept-2382438).
    
-   You can use one of the following methods to change the bandwidth type of a basic bandwidth plan:
    
    -   Upgrade the bandwidth type from basic to enhanced.
        
    -   Downgrade the bandwidth type from enhanced to basic.
        

After you change the maximum bandwidth or bandwidth type of a basic bandwidth plan, the new basic bandwidth plan takes effect immediately. You may need to wait a few minutes for the changes to take effect due to network latency.

-   After you upgrade an instance, you are charged the price difference between the original specification and new specification for the remainder of the current billing cycle.
    
-   After you downgrade an instance, you may receive a refund that is equal to the price difference between the original specification and the new specification for the remainder of the current billing cycle. The actual refund amount may vary based on the discount at the time of purchase and whether coupons are used. You can view the actual refund amount on the buy page. For more information, see [Rules for unsubscribing from resources](/help/en/user-center/refund-rules#main-2277885).
    

If the maximum bandwidth or bandwidth type of a basic bandwidth plan is no longer suitable for your use case, you can upgrade or downgrade the basic bandwidth plan.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Bandwidth**.
    
3.  On the **Bandwidth** page, perform the following operations to upgrade or downgrade the basic bandwidth plan:
    
    -   **Upgrade a basic bandwidth plan**
        
        You can click **Change Configurations** to increase the maximum bandwidth of a basic bandwidth plan or change the bandwidth type from basic to enhanced.
        
        **Note**
        
        If you click **Change Configurations**, only upgrades are supported. For information about how to downgrade a basic bandwidth plan, see the "**Downgrade a basic bandwidth plan**" section in this topic.
        
        1.  Find the basic bandwidth plan that you want to upgrade and click **Change Configurations** in the **Bandwidth Limit** column.
            
        2.  On the Upgrade/Downgrade page, modify the **Peak Bandwidth** and **Bandwidth Type** parameters, agree to the Terms of Service, and then click **Buy Now** to complete the payment.
            
    -   **Downgrade a basic bandwidth plan**
        
        You can click **Downgrade** to decrease the maximum bandwidth of a basic bandwidth plan or change the bandwidth type from enhanced to basic.
        
        1.  Find the basic bandwidth plan that you want to downgrade and click **Downgrade** in the **Bandwidth Limit** column.
            
        2.  In the **Downgrade Basic Bandwidth Plan** message, confirm the information and click **OK**.
            
        3.  On the Downgrade page, specify the specification that you want to use, agree to the Terms of Service, and then click **Buy Now** to complete the payment.
            

## References

-   [UpdateAccelerator](/help/en/ga/api-updateaccelerator#doc-api-Ga-UpdateAccelerator): modifies a standard GA instance.
    
-   [UpdateAcceleratorConfirm](/help/en/ga/api-updateacceleratorconfirm#doc-api-Ga-UpdateAcceleratorConfirm): confirms the modified specification of a GA instance.
    
-   [UpdateBandwidthPackage](/help/en/ga/api-153243#doc-api-Ga-UpdateBandwidthPackage): modifies a bandwidth plan.
