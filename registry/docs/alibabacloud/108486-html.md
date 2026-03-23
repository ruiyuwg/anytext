The Elastic Compute Service (ECS) console provides Synchronize Expiration Date feature that allows you to align renewal dates for multiple subscription instances to the same monthly date. This facilitates daily management and renewal. This topic describes how to use the feature.

## Prerequisites

-   All target instances must be active (non-expired). Remove or renew the expired instances before you proceed.
    
-   Ensure sufficient account balance. Renewal fees are generated when you synchronize the expiration dates of instances.
    

## Considerations

-   Synchronize Expiration Date feature cannot ensure that the expiration dates of multiple subscription instances are unified to the same month.
    
    -   Cannot align expiration months: only day-of-month in `Day <x> 00:00` format.
        
    -   Minimum renewal period: 1 month.
        
    -   Short renewals (<1 month) extend by full month. For example:
        
        **Instance**
        
        **Current expiration date**
        
        **New target date**
        
        **Actual new expiration date**
        
        A
        
        October 8, 2018
        
        12th monthly
        
        November 12, 2018
        
        B
        
        October 18, 2018
        
        12th monthly
        
        December 12, 2018
        
-   Synchronizing expiration dates does not enable auto-renewal. For information about how to enable auto-renewal for an instance, see [Auto-renewal](/help/en/ecs/enable-auto-renewal-for-an-instance-1#autoRenew-china).
    

## Procedure

To synchronize the expiration dates of subscription instances, perform the following two steps:

1.  [Specify a unified expiration date for subscription ECS instances](#694cb636c0rp6)
    
2.  [Synchronize the expiration date of a subscription instance](#title-jb7-vpx-k76)
    

### **Specify a unified expiration date for subscription ECS instances**

#### **Expenses and Costs console**

1.  Log on to the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Renewal**.
    
3.  In the upper-right corner of the page, click **Set Unified Expiration Date**. In the dialog box that appears, select a unified expiration date from the drop-down list.
    
    **Note**
    
    The unified expiration date can be set from 00:00 on the 1st day of each month to 00:00 on the 28th of each month.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2960413471/p927340.png)
    

#### **API**

You can call the [SetAllExpirationDay](/help/en/user-center/developer-reference/api-bssopenapi-2017-12-14-setallexpirationday) operation and set the `UnifyExpireDay` parameter to specify a unified expiration date for subscription ECS instances.

### Synchronize **the expiration date of a subscription instance**

#### **ECS console**

1.  Go to [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Click the ID of a subscription ECS instance to go to the instance details page, and click **All Actions** in the upper-right corner. In the pane that appears, search for and click **Synchronize Expiration Date**. On the **Synchronize Expiration Date** page, you can view information about the instance and its unified expiration date.
    
    **Note**
    
    If you want to change the **Synchronize Expiration Date** parameter, click **Set Synchronized Expiration Date** to go to the **Renewal** page of the Expenses and Costs console.
    
4.  Confirm the renewal period and price of the instance, read and select ECS Terms of Service and Product Terms of Service, confirm the total fees, and then click **Conform Order**. Then, follow the on-screen instructions to complete the payment.
    

**Note**

You can [perform a batch operation on the instance list page](/help/en/ecs/user-guide/batch-operation-of-ecs-instances-through-the-ecs-console) to unify the expiration dates of multiple subscription ECS instances in a single region. To unify the expiration dates of subscription ECS instances in multiple regions, perform the batch operation by region.

#### **API**

**Important**

Calls to the API operation may incur fees.

You can call the [RenewInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-renewinstance) operation and set the `ExpectedRenewDay` parameter to the value that you specified in the [Specify a unified expiration date for subscription ECS instances](#694cb636c0rp6) section as the expiration date of the renewal period. This way, you can renew a subscription instance to the unified expiration date. To renew multiple subscription instances to a unified expiration date, call the RenewInstance operation multiple times.
