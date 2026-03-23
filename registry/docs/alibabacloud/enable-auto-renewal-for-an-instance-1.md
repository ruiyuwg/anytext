If you have a Subscription Elastic Compute Service (ECS) instance with a short billing cycle (such as three months or less) that you plan to use long-term, enable the auto-renewal feature. This ensures business continuity, prevents service interruptions and data loss when an instance expires, and reduces manual overhead.

## Prerequisites

Before you can use auto-renewal, ensure the following:

-   Subscription instances are created. The instances have not expired or have expired for less than 14 days.
    
-   Auto-renewal requires a successful deduction from your account. Ensure that your account balance or available Vouchers are sufficient to cover the renewal fee.
    

## **How Auto-renewal works**

-   **Deduction time**
    
    Alibaba Cloud first attempts to deduct the renewal fee for an instance three days before the instance expires. If this deduction attempt fails due to insufficient account balance, Alibaba Cloud attempts to deduct the fee up to four times on the following days until all the allowed deduction attempts fail or until the payment is completed: the day before the instance expires (T-1), the day when the instance expires (T), the seventh day after the instance expires (T+6), and the fifteenth day after the instance expires (T+14). If the fee deduction fails, Alibaba Cloud notifies you by email. Check your mailbox and handle the failure at the earliest opportunity to prevent the instance from being unexpectedly stopped.
    
-   **Renewal cycle**
    
    The renewal is based on the Renewal duration you set. For example, if you set the duration to three months, the instance is automatically renewed for another three months before each expiration date.
    
-   **Manual renewal after enabling auto-renewal**
    
    If you perform a Manual Renewal before the scheduled auto-renewal deduction date, the system reschedules the next auto-renewal based on the new expiration date.
    

**Note**

For more information about renewal rules, see [Renewal guide for the international site (alibabacloud.com)](/help/en/user-center/renewal-guide).

## **Enable auto-renewal when you create an instance**

### **Console**

You can enable auto-renewal on the instance creation page.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1728360671/p962325.png)

When you enable auto-renewal, the system sets a default `Renewal duration` that matches the initial subscription duration. For example, if you purchase an instance with a one-month subscription, the auto-renewal duration is also set to one month. If this default duration does not meet your requirements, you can modify the `Renewal duration` after the instance is created.

### **API**

To enable auto-renewal upon creation, set the `AutoRenew` parameter to `true` when you call the [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) operation to create instances in batch.

## **Configure auto-renewal**

### **Console**

Enable, disable, or modify the auto-renewal duration for existing instances.

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the instance you want to manage and click its Instance ID to go to the **Instance Details** page. On the details page, select **All Actions** > **Fees** > **Configure Auto-renewal**.
    
4.  Configure auto-renewal settings.
    
    -   To enable auto-renewal: Turn on **Enable Auto-renewal**, set the **Renewal Duration**, and click **Confirm**. Once applied, the system automatically deducts the fee at the end of each subscription period from your account, provided your account balance is sufficient.
        
    -   To disable auto-renewal: Turn off **Enable Auto-renewal** and click **Confirm**.
        
    -   To change the auto-renewal duration: While auto-renewal is enabled, select a new **Renewal Duration** and click **Confirm**.
        

**Note**

To configure auto-renewal for multiple ECS instances in batch, see [Perform batch operations on the Instance page](/help/en/ecs/user-guide/batch-operation-of-ecs-instances-through-the-ecs-console).

### API

**Important**

Calling this API operation may incur charges.

For existing instances, call the [ModifyInstanceAutoRenewAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstanceautorenewattribute) operation. You can configure auto-renewal settings for up to 100 Subscription instances in a single batch request by passing the **`InstanceId`** of each instance.

-   **Check renewal prices**: To query the renewal price for a resource, call [DescribeRenewalPrice](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describerenewalprice) before you configure auto-renewal.
    
-   **Enable auto-renewal**: Set the `**RenewalStatus**` parameter to `AutoRenewal` and set the **`Duration`** and **`PeriodUnit`** parameters.
    
-   **Disable auto-renewal**: Set the `**RenewalStatus**` parameter to `Normal`.
    
    **Note**
    
    You can also set the `RenewalStatus` parameter to `NotRenewal` to [enable non-renewal](/help/en/ecs/manually-renew-an-instance-1) state. In this state, the system only sends a non-renewal reminder three days before the expiration date. An ECS instance set to `NotRenewal` can be changed back to `Normal` (pending renewal), after which you can perform a Manual Renewal or re-enable auto-renewal.
    
-   **Modify the auto-renewal duration**: When an instance's renewal status is `AutoRenewal`, change its auto-renewal duration by setting new values for the **`Duration`** and **`PeriodUnit`** parameters.
    

## **View auto-renewal status**

### **Console**

Check the auto-renewal status and Renewal duration of an instance on its Instance Details page in the ECS console.

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the instance you want to check and click its Instance ID to go to the **Instance Details** page. In the **Configuration Information** section, find the **Auto-renewal** setting to check the instance's status.
    
    -   If the status displays **Auto-Renewal<X>Weeks/<X>Months/<X>Years**, auto-renewal is enabled.
        
    -   If the status displays **Manual Renewal** or **Non-renewal**, auto-renewal is disabled.
        

### **API**

You can call the [DescribeInstanceAutoRenewAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstanceautorenewattribute) operation. You can query the auto-renewal properties for up to 100 Subscription instances in a single batch request by passing the **`InstanceId`** for each instance. The response includes the auto-renewal status, Renewal duration, and other details for each ECS instance.

You can also use the `**RenewalStatus**` parameter to filter the query and return a list of instances with a specific status.
