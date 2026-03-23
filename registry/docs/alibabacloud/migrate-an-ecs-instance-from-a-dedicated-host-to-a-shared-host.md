If your business no longer requires exclusive resources, you can migrate Elastic Compute Service (ECS) instances on a dedicated host to a shared host to reduce deployment costs.

## Prerequisites

The ECS instance that you want to migrate must meet the following requirements:

-   The ECS instance that you want to migrate is stopped. For more information, see [Stop an instance](/help/en/ecs/user-guide/stop-an-instance#task-1909833).
    
    **Warning**
    
    If you stop an ECS instance, the services that run on the instance are interrupted. Proceed with caution.
    
-   The billing method of the ECS instance is pay-as-you-go. To migrate subscription instances, you must change the billing method to pay-as-you-go. For more information, see [Change the billing method of an instance from subscription to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1#concept-hzg-ggr-l2b).
    

## **Limits**

ECS instances attached with local SSDs cannot be migrated to from a dedicated host to a shared host.

## **Billing**

After you migrate an ECS instance from a dedicated host to a shared host, you are charged for the vCPUs and memory. The costs of these resources are no longer included in DDH bills. Make sure that your account has sufficient balance. For more information, see [Pay-as-you-go](/help/en/ecs/pay-as-you-go-1#Pay-As-You-Go).

## Procedure

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Instances & Images** > **![icon1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6801148761/p477856.png)** > **Dedicated Hosts**.
    
3.  In the top navigation bar, select the region and resource group to which the resource belongs. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9881241071/p680076.png) 
    
4.  On the **Hosts** page, find the dedicated host on which the ECS instance resides, and then click **Details** in the **Actions** column.
    
    ![detail-info](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7397557171/p201811.png)
    
5.  Find the ECS instance that you want to migrate, and click **Change Host** in the **Actions** column.
    
    ![modify-ddh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7397557171/p201812.png)
    
6.  In the **Change Host** dialog box, set the required parameters.
    
    **Parameter**
    
    **Description**
    
    **Destination Host**
    
    Select **Shared Host**.
    
    **Target Instance Type**
    
    Enter an instance type, such as ecs.g6.large. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
    The destination instance type must meet the following requirements to ensure successful migration:
    
    -   The source instance type can be changed to the destination instance type. For more information, see [Instance families that support instance type changes](/help/en/ecs/user-guide/instance-families-that-support-instance-type-changes#concept-mdh-2rb-1fb).
        
    -   The destination instance type is available in the zone where the dedicated host resides.
        
    
    **Migration Method**
    
    Valid value: **Stop and Migrate**, which means the ECS instance that you want to migrate must be in the **Stopped** state.
    
    ![DDH迁移至共享宿主机](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8578557171/p374307.png)
    
7.  Click **OK**.
    
    After the migration is complete, the ECS instance automatically starts and enters the **Running** state.
    
8.  **Optional:**on the **Instances** page, find the dedicated host on which the ECS instance resides.
    
    1.  In the upper-right corner of the page, click the ![display-config](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3493023061/p171315.png) icon.
        
        ![config-icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9171754461/p201815.png)
        
    2.  Select **Dedicated Host**, and then click **OK**.
        
    3.  In the **Dedicated Host** column, view the host on which the ECS instance resides.
        
        -   If the ID and name of a dedicated host are displayed, the ECS instance is running on the dedicated host.
            
        -   If **\-** is displayed, the ECS instance is running on a shared host.
            
        
        ![host-column](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9171754461/p201816.png)
        

## References

-   You can migrate an ECS instance from a dedicated host to a shared host by calling [ModifyInstanceDeployment](/help/en/dedicated-host/developer-reference/api-modifyinstancedeployment#doc-api-Ecs-ModifyInstanceDeployment).
    
-   You can migrate an ECS instance from a shared host to a dedicated host. For more information, see [Migrate an ECS instance from a shared host to a dedicated host](/help/en/dedicated-host/user-guide/migrate-an-ecs-instance-from-a-shared-host-to-a-dedicated-host).
