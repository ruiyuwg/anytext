If your subscription Elastic Compute Service (ECS) instance is overprovisioned or insufficient for your workload, you can change its instance type, which includes its vCPU and memory. You can upgrade to a higher-priced instance type or downgrade to a lower-priced one.

## **Prerequisites**

-   The current instance family supports instance type changes. For more information, see [Pre-checks on instance type change](/help/en/ecs/user-guide/instance-families-that-support-instance-type-changes#concept-mdh-2rb-1fb).
    
-   The instance is in the **Running** or **Stopped** state.
    
-   The target instance type is in stock in the current zone. You can check the inventory status at [Instance Types Available for Each Region](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion) page.
    
    **Note**
    
    -   You can [change the instance type across zones](/help/en/ecs/user-guide/change-instance-types-across-zones).
        
    -   **Important**
        
        If you want to migrate your ECS instance to another region, we recommend the following solutions:
        
        -   Utilize the server migration feature to migrate your ECS instance from one region to another. For more information, see [Migrate ECS instances between accounts or within the same account](/help/en/smc/user-guide/migrate-servers-between-ecs-instances).
            
        -   Create a custom image of your current instance, copy the custom image to the destination region, and use this custom image to create an instance there. For more information, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance), [Copy a custom image](/help/en/ecs/user-guide/copy-an-image), and [Create from custom image or shared image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image).
            
        
    

## **Limitations**

The following limitations apply:

-   You must specify a target instance type (both vCPU and memory). You cannot change only one.
    
-   You can only change the instance type for the current billing cycle. Temporary changes are not supported.
    
-   You cannot change the instance type if another configuration change, such as changing the instance type, modifying bandwidth, or a temporary bandwidth upgrade, is in progress for the instance.
    
-   If you have renewed a subscription instance to a lower-tier type for the next billing cycle, you cannot upgrade the instance until that new cycle begins.
    
-   You cannot downgrade a subscription instance if a renewal to a lower-tier type is already pending. You must wait for the renewal process to complete first.
    
-   Downgrades are subject to a monthly quota based on your historical consumption. The specific limit is shown on the page, and you cannot perform further downgrades once you exceed it. The quota is automatically reset on the first day of the next month.
    
-   You cannot downgrade a subscription instance and upgrade its attached disks in the same operation. To perform both actions, such as upgrading an ultra disk to an Enterprise SSD (ESSD), first upgrade the disk, and then downgrade the instance.
    

## **Billing**

-   You must pay an upgrade fee when upgrading the instance specifications.
    
    Upgrade fee\=(Official unit price of new specifications×Remaining duration of new order−Official unit price of old specifications×Remaining duration of original order)×Discount
    
    **Note**
    
    -   **Remaining duration of new order**: The time from when you submit the upgrade request until the service expiration time of the new order.
        
    -   **Remaining duration of original order**: The time from when you submit the upgrade request until the service expiration time of the original order.
        
    -   **Discount**: The system automatically calculates the optimal discount based on the upgraded resource configuration and remaining service duration.
        
    
    For more information, see [Calculation logic for upgrade fees](/help/en/user-center/description-of-ascenting-rules#59f215c46caf5).
    
-   Downgrading specifications may result in a refund. The refund amount equals the difference between the price of the new configuration and the remaining valid purchase price before the downgrade. For more information, see [Rules for unsubscribing from resources](/help/en/user-center/refund-rules#ad049d1b16ijp).
    

**Important**

If the instance participated in a long-term low-price promotion, changing the configuration might prevent you from enjoying discounted prices during renewal.

## Procedure

**Warning**

Changing the instance type requires you to restart the ECS instance. Perform this operation during off-peak hours to minimize business impact.

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Click the ID of the target subscription instance to go to its details page. In the upper-right corner of the page, choose **All Actions** > **Upgrade/Downgrade** > **Change Instance Type**.
    
    **Note**
    
    You can [perform batch operations on the Instance page](/help/en/ecs/user-guide/batch-operation-of-ecs-instances-through-the-ecs-console) to change the instance types of multiple instances at a time. On the **Instance** page, select multiple instances and choose **More** > **Upgrade/Downgrade** > **Change Instance Type** at the bottom of the page, and follow the on-screen instructions.
    
4.  Select a target instance type.
    
    **Note**
    
    The available instance types are subject to the information displayed on the page.
    
5.  Change the instance type.
    
    ## Upgrade the instance type
    
    The steps vary based on the current state of the instance.
    
    -   The instance is **Stopped**:
        
        1.  Confirm the estimated cost, select **Read and select ECS Terms of Service**, and then click **Confirm Change and Pay**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4189052571/p814211.png)
            
        2.  Follow the on-screen instructions to complete the payment.
            
        3.  To apply the change, start the instance.
            
            After payment is complete, the console displays the new instance type, but the change has not yet taken effect. To make the change effective, start the instance.
            
    -   The instance is **Running**:
        
        1.  Set the restart time.
            
            If you select **Scheduled Instance Restart Time** for **Instance Restart Mode** and specify a restart time, you can view or modify the specified time under **Events** > **Configuration Change Restart Events**.
            
            **Warning**
            
            -   Restarting an instance causes it to stop, which may interrupt your services. Perform this operation during off-peak hours.
                
            -   For some instance types, you may see a message like "**no timed execution. cannot scheduled downgrade**". This means the instance does not support scheduled restarts and must be stopped before its type can be changed.
                
            
        2.  After confirming the changes, select **Read and select ECS Terms of Service**, and then click **Confirm Change and Pay** or **Confirm Change and Restart Instances**.
            
        3.  Restart the instance.
            
            After you click **Confirm Change and Pay** and complete the payment, **the ECS console displays the new instance type, but the change does not take effect until you restart the instance**.
            
    
    ## Downgrade the instance type
    
    1.  The steps vary based on the current state of the instance.
        
        -   The instance is **Stopped**: Confirm the changes, select **Read and select ECS Terms of Service**, and then click **Confirm Change**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4189052571/p814201.png)
            
        -   The instance is **Running**:
            
            1.  Confirm the changes, select **Read and select ECS Terms of Service**, and then click **Stop Instances and Proceed**.
                
            2.  In the **Stop Instance** dialog box, select a stop method under **Stopped By** and click **Confirm**.
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3749694471/p814207.png)
                
    2.  To apply the instance type change, start the instance.
        
        For instructions, see [Start an instance](/help/en/ecs/user-guide/start-an-instance).
        
    

## References

-   [DescribeResourcesModification](/help/en/ecs/api-describeresourcesmodification#doc-api-Ecs-DescribeResourcesModification): Queries available resources in a zone for an instance type or system disk upgrade or downgrade.
    
-   [ModifyInstanceSpec](/help/en/ecs/api-modifyinstancespec#doc-api-Ecs-ModifyInstanceSpec): Adjusts the instance type and public bandwidth of a pay-as-you-go ECS instance.
    
-   [DescribeInstanceModificationPrice](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancemodificationprice): Queries the price of upgrading an active subscription ECS instance to a new instance type, including new data disks.
