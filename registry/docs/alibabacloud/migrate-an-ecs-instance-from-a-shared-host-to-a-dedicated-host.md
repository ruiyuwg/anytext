You can migrate Elastic Compute Service (ECS) instances from a shared host to a dedicated host as needed. This enables you to enjoy dedicated physical resources and flexible deployment options.

## Prerequisites

-   The ECS instance that you want to migrate must meet the following requirements:
    
    -   The ECS instance that you want to migrate is stopped. For more information, see [Stop an instance](/help/en/ecs/user-guide/stop-an-instance#task-1909833).
        
        **Warning**
        
        If you stop an ECS instance, the services that run on the instance are interrupted. Proceed with caution.
        
    -   The billing method of the ECS instance is pay-as-you-go. You cannot migrate subscription instances or preemptible instances. To migrate subscription instances, you must change the billing method to pay-as-you-go. For more information, see [Change the billing method of an instance from subscription to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1#concept-hzg-ggr-l2b).
        
-   The dedicated host must meet the following requirements:
    
    -   The dedicated host and the ECS instance belong to the same account, region, and zone.
        
    -   The available resources of the dedicated host meet the requirements of the ECS instance. For information about how to view the available resources of a dedicated host, see [View and export the information of a dedicated host](/help/en/dedicated-host/user-guide/view-and-import-the-information-of-a-dedicated-host#task-pzf-xmn-tdb).
        
    -   The dedicated host supports the instance family of the ECS instance. For more information, see [Dedicated host types](/help/en/dedicated-host/product-overview/dedicated-host-types#concept-h3g-zzm-tdb).
        
        **Note**
        
        -   ECS instances attached with local SSDs cannot be migrated to a local SSD dedicated host.
            
        -   If the dedicated host is of a custom specification, you can only migrate the instance to another dedicated host of a custom specification.
            
        

## **Billing**

After you migrate an ECS instance from a shared host to a dedicated host, the costs of the vCPUs and memory are included in DDH bills. For more information, see [Resource billing for ECS instances on a dedicated host](/help/en/dedicated-host/product-overview/resource-billing-for-ecs-instances-on-a-dedicated-host).

## Procedure

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Instances & Images** > **Instances**.
    
3.  In the top navigation bar, select the region and resource group to which the resource belongs. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9881241071/p680076.png) 
    
4.  Find the ECS instance that you want to migrate. Then, in the **Actions** column, choose  **![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6433616071/p750764.png) > Instance Settings** > **Modify Host Deployment**.
    
5.  In the **Change Host** dialog box, set the parameters as required.
    
    **Parameter**
    
    **Description**
    
    **Destination Host**
    
    Select the dedicated host to which you want to migrate the ECS instance from the Destination Host drop-down list.
    
    **Note**
    
    If no dedicated host in your Alibaba Cloud account can be used to host the ECS instance, the Destination Host drop-down list is empty.
    
    **Target Instance Type**
    
    You can change the instance type when you migrate the ECS instance. The supported instance types depend on the specifications of the dedicated host.
    
    **Associate with Host**
    
    Select whether to associate the instance with the dedicated host.
    
    -   **Yes**: The ECS instance is associated with the dedicated host. After the instance is stopped and computing resources are released, the instance is still deployed on the dedicated host when it is restarted. If the dedicated host has insufficient available resources, the instance fails to be restarted.
        
    -   **No**: The ECS instance is not associated with the dedicated host. After the instance is stopped and the computing resources are released, the instance is still deployed on the dedicated host when it is restarted. If the dedicated host has no sufficient available resources, the system selects a dedicated host from the pool of dedicated hosts that allow automatic deployment.
        
    
    **Migration Method**
    
    Select **Stop and Migrate**.
    
6.  Click **OK**.
    
    Refresh the **Instance** page to check whether the ID and name of the destination dedicated host are displayed in the **Dedicated Host** column.
    

## References

-   You can also migrate ECS instances from a shared host to a dedicated host by calling [ModifyInstanceDeployment](/help/en/dedicated-host/developer-reference/api-modifyinstancedeployment#doc-api-Ecs-ModifyInstanceDeployment).
    
-   You can migrate ECS instances between dedicated hosts by following instructions in [Migrate an ECS instance between dedicated hosts](/help/en/dedicated-host/user-guide/migrate-ecs-instances-between-different-dedicated-hosts-in-the-console).
    
-   You can migrate ECS instances from a dedicated host to a shared host by following instructions in [Migrate an ECS instance from a dedicated host to a shared host](/help/en/dedicated-host/user-guide/migrate-an-ecs-instance-from-a-dedicated-host-to-a-shared-host).
