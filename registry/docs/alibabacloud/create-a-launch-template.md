You can specify the configuration information that can be used to create Elastic Compute Service (ECS) instances in a launch template based on your needs, and then use the launch template as the basis for creating ECS instances, scaling groups and auto provisioning groups. This topic describes the notes for creating launch templates, how to create a launch template, and operations that you can perform by using launch templates.

## Considerations

-   You can create up to 30 launch templates in each region within an account.
    
-   When you create a launch template, some parameters such as the instance type and image are required and other parameters are optional. If a launch template does not contain the required parameters, you must add the parameters when you use the template to create instances.
    
-   You cannot modify launch templates after you create them. However, you can create new versions for launch templates.
    

## Procedure

## Use the ECS console

1.  Go to [ECS console - Launch Template](https://ecs.console.alibabacloud.com/launch-template/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  On the Launch Templates page, click **Create Template**.
    
4.  On the **Launch Template** page, specify parameters in the Basic Configurations (Optional) and Advanced Configurations (Optional) steps.
    
    You can define parameters to create a launch template, or select an existing launch template as a basis to create a new one. For information about the parameter configurations and descriptions, see [Custom launch ECS instances](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
    
    **Note**
    
    The first time you create a launch template, the **Clone Template** section is unavailable. If you have already created launch templates, you can select an existing template and a specific version and then modify the configurations.
    
    When you configure the **Instance Type**, you can use **Scenario-based Selection** to quickly filter the instance types that meets your business requirements.
    
5.  In the **Confirm Configurations** step, enter a template name and a template version description. Then, click **Create Launch Template**.
    
    -   **Configurations**: You can click the ![修改](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2396902561/p410963.png) icon in the **Basic Configurations** and **Advanced Configurations** sections to modify the parameters.
        
        **Note**
        
        The parameters in the **Basic Configurations** and **Advanced Configurations** sections are required to create instances and simplify subsequent instance creation. These parameters are optional and can be configured as needed.
        
    -   **Save As**: You can specify how to save the current configurations based on your needs.
        
        -   **Create Template**: If you select Create Template in the Save As section, the current configurations are saved as the default version of a new launch template.
            
        -   **Create Version**: You can select an existing template and save the current configurations as the latest version of the launch template.
            
    -   **Template Name** and **Version Description**: You can enter a name for the launch template and a description for the template version for future management.
        
    -   **Template Resource Group**: You can select an existing resource group to assign the launch template to the resource group.
        
        If you want to create a new resource group, click **here** to go to the Resource Group page and create a resource group. For more information, see [Resource groups](/help/en/ecs/user-guide/resource-groups#concept-fdn-wtm-cgb).
        
    
    ![实例模板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7935208961/p481124.png)
    
6.  In the **Success** message, click **View Template** to go to the ECS console and view the launch template that you created.
    

## Call an API operation

-   Call the [CreateLaunchTemplate](/help/en/ecs/api-createlaunchtemplate#doc-api-Ecs-CreateLaunchTemplate) operation to create a launch template.
    
-   Call the [DescribeLaunchTemplates](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describelaunchtemplates) operation to query the information of one or more launch templates.
    

## Related operations

After you create a launch template, you can perform the operations that are described in the following table based on your business requirements.

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
