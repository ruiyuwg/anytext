This topic describes how to add an Elastic Compute Service (ECS) instance to a resource group and grant a Resource Access Management (RAM) user the permissions to view and manage the ECS instance in the resource group.

## Procedure

In this example, a RAM user named Alice has the permissions to view and manage only the ECS instance i-001. You can add the ECS instance to a resource group and grant the permissions on the resource group to Alice.

**Note**

During the authorization process, the ECS instance can work as expected.

You must use an account administrator to perform the following operations:

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) and create a RAM user named Alice.
    
    For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
    
2.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) and create a resource group named ECS-Admin.
    
    For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    
3.  In the [Resource Management console](https://resourcemanager.console.alibabacloud.com/), add the ECS instance i-001 to the resource group ECS-Admin.
    
    You can use one of the following methods to add the ECS instance to the resource group:
    
    -   Add the ECS instance to the resource group when you create the instance. For more information about how to create an instance, see [Create an instance by using the wizard](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
        
    -   Move the existing ECS instance to the resource group. For more information, see [Transfer resources across resource groups](/help/en/resource-management/resource-group/user-guide/resource-manual-transfer-group#task-py1-sjm-4fb).
        
    
4.  In the [RAM console](https://ram.console.alibabacloud.com/), grant the required permissions to Alice.
    
    In this step, select Specific Resource Group in the Authorized Scope section, enter ECS-Admin in the field below Specific Resource Group, enter Alice in the Principal field, and then select the system policy AliyunECSFullAccess. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).![资源组授权](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3581600571/p499435.jpg)
    
    **Note**
    
    In an actual business environment, we recommend that you create a custom policy to grant only the required permissions to the RAM user based on the principle of least privilege. This prevents security risks caused by excessive user permissions.
    

## **Verify the result**

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com) as the RAM user Alice.
    
    For more information, see [Log on to the Alibaba Cloud Management Console as a RAM user](/help/en/ram/user-guide/log-on-to-the-alibaba-cloud-management-console-as-a-ram-user).
    
2.  In the left-side navigation pane, choose **Instances & Images** > **Instances**.
    
3.  In the top navigation bar, select the region in which the ECS instance resides.
    
4.  In the top navigation bar, select ECS-Admin from the resource group drop-down list.
    
    ![选择资源组-zh.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7930790961/p701554.jpg)
    
    **Important**
    
    The RAM user can view the ECS instances in the resource group only after the RAM user selects the related resource group. Otherwise, the RAM user cannot view ECS instances.
    
5.  On the Instances page, view the information about the instance and manage the instance.
    

## **References**

-   You can manually transfer the associated resources of an ECS instance to the related resource group. You can also use the Transfer Associated Resources feature provided by Resource Management to automatically transfer the associated resources to the related resource group. For an ECS instance, the following associated resources support this feature: cloud disks, elastic network interfaces (ENIs), and elastic IP addresses (EIPs). For more information, see [Use the Transfer Associated Resources feature](/help/en/resource-management/resource-group/user-guide/use-the-transfer-associated-resources-feature).
    
-   If you want to use Terraform for access control, you can use Terraform Explorer and run the code from Terraform Explorer. For more information, visit [Terraform Explorer](https://api.alibabacloud.com/terraform?resource=alicloud_ram_user&exampleId=201-use-case-use-resource-group-to-manage-ecs-instance&activeTab=example).
