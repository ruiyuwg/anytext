A launch template is a tool used to quickly create Elastic Compute Service (ECS) instances. The template contains all configurations (excluding passwords) that are used to create instances. The configurations include the key pair, Resource Access Management (RAM) role, instance type, and network settings. Each template can have multiple versions, and different parameters can be configured in each version. You can use any version of a specific template to quickly create instances. This improves efficiency and user experience. This topic describes how to use a launch template to create an instance.

## Prerequisites

-   A launch template or a new version of an existing launch template is created. For more information, see [Create an instance launch template](/help/en/ecs/user-guide/create-a-launch-template#concept-pzl-ww5-xdb) and [Manage launch template versions](/help/en/ecs/user-guide/create-a-launch-template-version#concept-nhb-3y5-xdb).
    
-   Bind your credit card or PayPal account. For more information ,see [Introduction to AlibabaCloud Payment](/help/en/alibaba-cloud-payment-guide/latest/introduction-to-alibaba-cloud-payment).
    
-   (Optional) If you want to purchase an ECS instance within the Chinese mainland, you must complete **real-name verification**. For more information, see [When is identity verification required?](/help/en/account/support/which-users-are-required-to-undergo-account-authentication#h2--3)
    

## Procedure

### **Create an instance in the ECS console**

1.  Go to [ECS console - Launch Template](https://ecs.console.alibabacloud.com/launch-template/region).
    
2.  On the **Launch Template** page, find the template that you want to use and click **Create Instance** in the **Actions** column.
    
    You can also click the ID of the template that you want to use to go to the template details page. In the **Version Information** section, click **Create Instance** in the **Actions** column that corresponds to a template version. ![新建版本](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3943701171/p49566.png)
    
3.  On the **Custom Launch** tab, select the template and version number. Check all configurations after they are loaded.
    
    **Note**
    
    If you want to modify parameters or the selected template does not include the required parameters, click the ![编辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3943701171/p411054.png) icon to modify the configurations.
    
4.  Click **Create Order**. In the **Compare Configurations** dialog box, review the original template configuration and the current configuration. If the information is correct, click **Confirm and Create Order** to create the instance.
    
    After the instance is created, go to the **Instances** page in the ECS console to view the instance.
    

### **Create an instance by calling API operations**

To call API operations to create an ECS instance, perform the following steps:

1.  Prepare a launch template and obtain the ID and version number of the launch template. You can use one of the following methods:
    
    -   **Create a launch template.** You can call the [CreateLaunchTemplate](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createlaunchtemplate) operation to create a launch template and obtain the ID (`LaunchTemplateId`) and version number (`LaunchTemplateVersionNumber`) of the launch template from the response.
        
    -   **Query available launch templates.** You can call the [DescribeLaunchTemplates](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describelaunchtemplates) operation to query the IDs of available launch templates (`LaunchTemplateId`). Then, call the [DescribeLaunchTemplateVersions](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describelaunchtemplateversions) operation and specify the ID of a launch template in the request to query details about launch template versions. You can obtain the ID (`LaunchTemplateId`) and version number (`VersionNumber`) of the launch template that you want to use from the response.
        
    
    **Note**
    
    A launch template version includes parameters used to create an instance, such as the region ID, image ID, instance type, IDs of security groups, and public bandwidth. If a parameter, such as the `SecurityGroupId` parameter, is not included in the launch template version, you can specify the parameter when you create the instance.
    
2.  Create an instance based on the launch template.
    
    Call the [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) operation to create an instance. When you call the operation, use the `LaunchTemplateId` and `LaunchTemplateVersion` parameters to specify the launch template that you want to use.
    
    Take note that if a parameter is not included in the launch template, you can specify the parameter when you create the instance. To improve the flexibility of instance creation, you can evaluate instance parameters and determine which parameters can be configured in a launch template.
    

## References

When your business demands fluctuate, configure a scaling group to increase or decrease the number of ECS instances, which automatically adjusts the computing capacity of your business. For more information, see [Create a scaling group based on an existing ECS instance](/help/en/ecs/user-guide/create-a-scaling-group-based-on-an-existing-ecs-instance).
