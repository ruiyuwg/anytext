After you create a launch template, you cannot modify it. You can create a new version of the launch template and modify the parameters of the launch template in the new version. When you create Elastic Compute Service (ECS) instances by using a launch template, you can use any version of the launch template. If you do not specify a version, the default version is used. This topic describes how to create a new version of a launch template, set the version that is frequently used as the default version, and delete a version that is no longer needed.

## Create a launch template version

Each launch template can have multiple versions, and each version can have different parameters. You can change the parameters in the launch template by creating a new version.

### **Prerequisites**

A launch template is created. For more information, see [Create launch template](/help/en/ecs/user-guide/create-a-launch-template#concept-pzl-ww5-xdb).

### **Considerations**

-   By default, the first version number of a new launch template is 1. You can create a new version of this launch template.
    
    **Important**
    
    Version numbers are incremented in the order in which versions are created. You cannot customize version numbers.
    
-   You can create up to 30 versions for each launch template.
    
-   When you create a launch template version, all parameters are optional. However, if a launch template version does not contain the required parameters, such as the instance type or image, you must add the parameters when you use the launch template version to create instances.
    
-   You cannot modify launch template versions after you create them.
    

### **Procedure**

1.  Go to [ECS console - Launch Template](https://ecs.console.alibabacloud.com/launch-template/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the launch template that you want to manage and use one of the following methods to create a version for the launch template.
    
    -   On the **Launch Template** page, click **Create Version** in the **Actions** column that corresponds to the launch template.
        
        ![模版](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0705388371/p907716.png)
        
    -   Click the ID of the launch template that you want to manage to go to the template details page. In the **Version Information** section, click **Create Template Version**.
        
        ![模版1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0705388371/p907717.png)
        
4.  On the **Launch Template** page, configure parameters.
    
    In the **Clone Template** section, you can select an existing template and version and configure the parameters based on the selected template and version. For information about the parameters and how to configure them, see [Custom launch ECS instances](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
    
5.  In the **Confirm Configurations** step, select **Create Version** in the Save As section and select a launch template for which you want to save the new version in the Launch Template section.
    
6.  Click **Create Launch Template**.
    
7.  In the message that appears, click **View New Version** to go to the ECS console and view the created version.
    
    **Note**
    
    You can also view all created launch templates in the launch template list on the **Launch Template** page.
    

## Change the default version of a launch template

You can set a commonly used version of a launch template as the default version of the launch template. If you do not specify a version when you use a launch template to create ECS instances, the system automatically uses the default version of the launch template to create ECS instances. This section describes how to change the default version of a launch template.

1.  Go to [ECS console - Launch Template](https://ecs.console.alibabacloud.com/launch-template/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Click the ID of the launch template that you want to manage to go to the launch template details page.
    
4.  In the **Version Information** section, find the version that you want to use as the default version and click **Set as Default** in the **Actions** column.
    
    ![设置默认-zh](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0705388371/p907877.png)
    

## Delete a launch template version

You can perform the following operations to delete a non-default launch template version that is no longer needed.

**Important**

-   If the version that you want to delete is set as the default version, you cannot delete the version. In this case, you can [change the default version to a different version](#a28e44e032ubd) and then delete the original default version.
    
-   If you no longer need all versions of a launch template, you only need to [delete the launch template](/help/en/ecs/user-guide/delete-a-launch-template-and-a-template-version).
    

1.  Go to [ECS console - Launch Template](https://ecs.console.alibabacloud.com/launch-template/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  On the **Launch Template** page, click the ID of the launch template that you want to manage to go to the launch template details page.
    
4.  In the **Version Information** section, select and delete one or more versions.
    
    -   To delete a single version, find the version and click **Delete** in the **Actions** column.
        
    -   To batch delete versions, select the versions and click **Delete** in the lower part of the page.
        
5.  In the message that appears, click **OK**.
    

## **Related operations**

-   You can manage launch template versions by calling the following API operations:
    
    -   [CreateLaunchTemplateVersion](/help/en/ecs/api-createlaunchtemplateversion#doc-api-Ecs-CreateLaunchTemplateVersion): creates a version for a launch template.
        
    -   [ModifyLaunchTemplateDefaultVersion](/help/en/ecs/api-modifylaunchtemplatedefaultversion#doc-api-Ecs-ModifyLaunchTemplateDefaultVersion): specifies a version of a launch template as the default version of the launch template.
        
    -   [DeleteLaunchTemplateVersion](/help/en/ecs/api-deletelaunchtemplateversion#doc-api-Ecs-DeleteLaunchTemplateVersion): deletes a version of a launch template.
        
-   After you create a new version of a launch template, you can select a launch template version when you perform the operations that are described in the following table.
    
    **Operation**
    
    **Description**
    
    **References**
    
    Create an ECS instance
    
    Use an existing launch template to quickly create an ECS instance. This eliminates the need to repeatedly configure parameters.
    
    [Create an instance from a launch template](/help/en/ecs/user-guide/create-an-instance-by-using-a-launch-template#task-rbj-xbv-xdb)
    
    Create multiple ECS instances at a time
    
    Use a launch template together with the RunInstances operation to create multiple ECS instances.
    
    You must specify the LaunchTemplateId and LaunchTemplateVersion parameters when you call the RunInstances operation.
    
    [RunInstances](/help/en/ecs/api-runinstances#doc-api-Ecs-RunInstances)
    
    Create a scaling group
    
    Use an existing launch template to quickly create a scaling group based on ECS instances. The system uses configurations defined in the launch template to create a scaling group. If specific configurations do not fulfill business requirements, you can modify the configurations during the creation process. For example, you can modify the virtual private cloud (VPC) and vSwitch in the scaling configurations.
    
    [Create a scaling group based on an existing ECS instance](/help/en/ecs/user-guide/create-a-scaling-group-based-on-an-existing-ecs-instance#task-2463837)
    
    Create an auto provisioning group
    
    Auto provisioning groups use specific versions of launch templates as instance configuration sources. Attributes such as instance images, security groups, and logon credentials from the launch templates are used by auto provisioning groups to create ECS instances. After an auto provisioning group is created, an ECS instance cluster is started and provisioned at the specified point in time.
    
    [Create an auto provisioning group](/help/en/ecs/user-guide/create-an-auto-provisioning-group#task-405815)
