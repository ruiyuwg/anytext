As your business grows and changes, resource allocation on your dedicated hosts may become imbalanced. To address this issue, you can migrate Elastic Compute Service (ECS) instances between dedicated hosts to balance the distribution of resources. This enhances resource utilization and ensures high availability of your workloads. This topic describes how to migrate ECS instances between different dedicated hosts.

## Prerequisites

-   The ECS instance that you want to migrate is stopped. For more information, see [Stop an instance](/help/en/ecs/user-guide/stop-an-instance#task-1909833).
    
    **Important**
    
    If you stop an ECS instance, the services that run on the instance are interrupted. Proceed with caution.
    
-   The destination dedicated host must meet the following requirements:
    
    -   The dedicated host and the ECS instance belong to the same account, region, and zone.
        
    -   The available resources of the dedicated host meet the requirements of the ECS instance. For information about how to view the available resources of a dedicated host, see [View and export the information of a dedicated host](/help/en/dedicated-host/user-guide/view-and-import-the-information-of-a-dedicated-host#task-pzf-xmn-tdb).
        
    -   The dedicated host supports the instance family of the ECS instance. For more information, see [Dedicated host types](/help/en/dedicated-host/product-overview/dedicated-host-types#concept-h3g-zzm-tdb).
        
        **Note**
        
        -   ECS instances attached with local SSDs cannot be migrated to a local SSD dedicated host.
            
        -   If the dedicated host is of a custom specification, you can only migrate the instance to another dedicated host of a custom specification.
            
        
    -   The dedicated host uses the same billing method as the ECS instance.
        
        You can run subscription or pay-as-you-go ECS instances on a subscription dedicated host. If the dedicated host and ECS instance use the subscription billing method, the instance must expire earlier than the dedicated host.
        

## **Impacts**

After all the ECS instances on the dedicated host are migrated to another dedicated host, the host ID and the metadata of the ECS instances remain unchanged. This metadata includes the instance ID, private IP address, and public IP address of each ECS instance. However, the machine ID of the dedicated host is changed.

## Procedure

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region and resource group to which the resource belongs. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9881241071/p680076.png) 
    
3.  Migrate ECS instances to another dedicated host on the ECS **Instance** page or the **Dedicated Hosts** page based on your usage habits.
    
    ## On the ECS Instance page
    
    1.  In the left-side navigation pane, choose **Instances & Images** > **Instances**.
        
    2.  Find the ECS instance that you want to migrate. Then, in the **Actions** column, choose  **![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6433616071/p750764.png) > Instance Settings** > **Modify Host Deployment**.
        
    3.  In the **Change Host** dialog box, set the parameters as required.
        
        **Parameter**
        
        **Description**
        
        **Destination Host**
        
        Select the dedicated host to which you want to migrate the ECS instance from the Destination Host drop-down list.
        
        **Note**
        
        If no dedicated host in your Alibaba Cloud account can be used to host the ECS instance, the Destination Host drop-down list is empty.
        
        **Target Instance Type**
        
        You can change the instance type when you migrate the ECS instance. The supported instance types depend on the specifications of the destination dedicated host.
        
        -   If you want to migrate the ECS instance to a custom dedicated host, you can adjust the slider to specify the number of vCPUs and the memory size. The minimum scaling step size of vCPUs is 1. If more than 1 vCPU is required, you must set this parameter to an even number, such as 2 or 4. The minimum scaling step size of the memory is 1 GiB.
            
        -   If you want to migrate the ECS instance to a dedicated host other than g6s, c6s, and r6s, available instance types are listed in the Target Instance Type drop-down list.
            
        
        **Associate with Host**
        
        Select whether to associate the instance with the destination dedicated host.
        
        -   **Yes**: The ECS instance is associated with the destination dedicated host. After the instance is stopped and computing resources are released, the instance is still deployed on the dedicated host when it is restarted. If the dedicated host has insufficient available resources, the instance fails to be restarted.
            
        -   **No:** The ECS instance is not associated with the dedicated host. After the instance is stopped and computing resources are released, the instance is still deployed on the dedicated host when it is restarted. If the dedicated host has insufficient available resources, the system selects a dedicated host from the pool of dedicated hosts that allow automatic deployment.
            
        
        **Migration Method**
        
        Valid value: **Stop and Migrate**, which means the ECS instance that you want to migrate must be in the **Stopped** state.
        
    4.  Click **OK**.
        
        Refresh the **Instance** page to check whether the ID and name of the destination dedicated host are displayed in the **Dedicated Host** column.
        
    
    ## On the Dedicated Hosts page
    
    1.  In the left-side navigation pane, choose **Instances & Images** > **![icon1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6801148761/p477856.png)** > **Dedicated Hosts**.
        
    2.  On the **Hosts** page, find the dedicated host on which the ECS instance resides, and then click **Details** in the **Actions** column.
        
        ![detail-info](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7397557171/p201811.png)
        
    3.  Find the ECS instance that you want to migrate, and click **Change Host** in the **Actions** column.
        
        ![modify-ddh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7397557171/p201812.png)
        
    4.  In the **Change Host** dialog box, set the parameters as needed.
        
        **Parameter**
        
        **Description**
        
        **Destination Host**
        
        Select the dedicated host to which you want to migrate the ECS instance from the Destination Host drop-down list.
        
        **Note**
        
        If no dedicated host in your Alibaba Cloud account can be used to host the ECS instance, the Destination Host drop-down list is empty.
        
        **Target Instance Type**
        
        You can change the instance type when you migrate the ECS instance. The supported instance types depend on the specifications of the destination dedicated host.
        
        -   If you want to migrate the ECS instance to a custom dedicated host, you can adjust the slider to specify the number of vCPUs and the memory size. The minimum scaling step size of vCPUs is 1. If more than 1 vCPU is required, you must set this parameter to an even number, such as 2 or 4. The minimum scaling step size of the memory is 1 GiB.
            
        -   If you want to migrate the ECS instance to a dedicated host other than g6s, c6s, and r6s, available instance types are listed in the Target Instance Type drop-down list.
            
        
        **Associate with Host**
        
        Select whether to associate the instance with the destination dedicated host.
        
        -   **Yes**: The ECS instance is associated with the destination dedicated host. After the instance is stopped and computing resources are released, the instance is still deployed on the dedicated host when it is restarted. If the dedicated host has insufficient available resources, the instance fails to be restarted.
            
        -   **No:** The ECS instance is not associated with the dedicated host. After the instance is stopped and computing resources are released, the instance is still deployed on the dedicated host when it is restarted. If the dedicated host has insufficient available resources, the system selects a dedicated host from the pool of dedicated hosts that allow automatic deployment.
            
        
        **Migration Method**
        
        Valid value: **Stop and Migrate**, which means the ECS instance that you want to migrate must be in the **Stopped** state.
        
    5.  Click **OK**.
        
        After the migration is complete, the ECS instance automatically starts and enters the **Running** state. You can check whether the ECS instance is running on the destination dedicated host on the details page of the host.
        
    

## References

You can also migrate ECS instances between dedicated hosts by calling [ModifyInstanceDeployment](/help/en/dedicated-host/developer-reference/api-modifyinstancedeployment#doc-api-Ecs-ModifyInstanceDeployment).
