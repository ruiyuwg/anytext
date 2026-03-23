To improve the success rate of scale-out events, you can enable the Extend Launch Template feature when you create a scaling group. The Extend Launch Template feature allows you to specify multiple instance types for the scaling group at the same time. In this case, you can create a multi-instance type scaling group by using a launch template. This topic describes how to create a multi-instance type scaling group by using a launch template as the instance configuration source.

## **Background information**

A launch template contains the configuration information of Elastic Compute Service (ECS) instances, which allows you to efficiently create ECS instances. The launch template eliminates the need for repetitive configurations and simplifies the process of creating ECS instances. For more information, see [Overview](/help/en/ecs/user-guide/overview-30#concept-fbp-sy5-xdb).

When you create a scaling group of the ECS type, you can use a launch template as the instance configuration source. If scale-out events occur in the scaling group, Auto Scaling creates ECS instances by using the launch template. By default, a launch template contains only one instance type. When Auto Scaling creates ECS instances by using a launch template, resource insufficiency issues may occur because the launch template contains only one instance type. To improve the success rate of scale-out events, you can enable the Extend Launch Template feature for the scaling group. The Extend Launch Template feature allows you to specify multiple instance types at the same time. This way, if one of the specified instance types does not have sufficient inventory, Auto Scaling uses another instance type that has sufficient inventory during scale-out events to prevent business disruption due to scale-out failures.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7592103271/CAEQLBiBgIDTvPugiBkiIGU5MmFhZGQxMzExZTQ2Y2RhNmFkZTVkZTY5NjBhZTMy4431913_20240528135210.175.svg)

## **Preparations**

Before you create or configure a scaling group, you must create a launch template on the [Launch Templates page in the ECS console](https://ecs.console.alibabacloud.com/launch-template/region/cn-beijing). You can also select an existing launch template when you create or configure a scaling group. For information about how to create a launch template, see [Create a launch template](/help/en/ecs/user-guide/create-a-launch-template#concept-pzl-ww5-xdb).

**Important**

When you create a launch template, you can set the **Billing Method** parameter only to **Pay-as-you-go** or **Preemptible Instance**. You cannot create subscription launch templates. If you set the **Billing Method** parameter to **Subscription**, the system automatically sets the parameter to **Pay-as-you-go**.

In this topic, the following sample configurations are used:

-   Billing Method: Pay-as-you-go
    
-   Instance Type: ecs.g5.large
    

![启动模板.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5182559171/p805241.png)

## **Procedure**

In this section, two scaling groups are created to describe the effect of **Launch template + Multiple instance types**.

-   Scaling Group A: Only a launch template is used.
    
-   Scaling Group B: A launch template is used together with the Extend Launch Template feature to specify multiple instance types.
    

1.  Log on to the [Auto Scaling console](https://ess.console.aliyun.com/#/v3/group/list/cn-beijing).
    
2.  Create Scaling Group A.
    
    1.  On the **Scaling Groups** page, click **Create Scaling Group**.
        
    2.  Configure parameters to create the scaling group and click **Create**.
        
        The following table describes the parameter settings used in this example. For parameters that are not included in the table, use the default values. For more information, see [Manage scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups).
        
        **Parameter**
        
        **Example**
        
        **Description**
        
        **Scaling Group Name**
        
        test-a
        
        Enter a name for the scaling group. The name must meet the format requirements displayed on the UI.
        
        **Type**
        
        ECS
        
        Select **ECS**, which specifies that the scaling group contains ECS instances.
        
        **Instance Configuration Source**
        
        Launch Templates
        
        Select **Launch Templates**, which specifies that Auto Scaling creates ECS instances by using the specified launch template during scale-out events.
        
        **Select Launch Template**
        
        test
        
        Select the prepared launch template.
        
        **Select Template Version**
        
        Latest Version
        
        Specify the launch template version that you want to use.
        
        **Minimum Number of Instances**
        
        1
        
        Specify the lower limit for the number of instances in the scaling group. If the number of ECS instances in the scaling group is smaller than the value of this parameter, Auto Scaling adds ECS instances to the scaling group until the number of ECS instances in the scaling group reaches the lower limit.
        
        **Maximum Number of Instances**
        
        1
        
        Specify the upper limit for the number of instances in the scaling group. If the number of ECS instances in the scaling group is greater than the value of this parameter, Auto Scaling removes ECS instances from the scaling group until the number of ECS instances in the scaling group does not exceed the upper limit.
        
3.  Create Scaling Group B.
    
    Repeat the preceding steps to create Scaling Group B (test-b). In addition to using the same configurations of Scaling Group A, you must also enable the Extend Launch Template feature for Scaling Group B. You must perform the following steps:
    
    ![扩展启动模板.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5182559171/p805254.png)
    
    1.  In the **Extend Launch Template** section, select **Override Instance Type in Launch Template**.
        
    2.  Select **Use vCPUs to calculate the capacity of the scaling group** based on your business requirements.
        
        If you select **Use vCPUs to calculate the capacity of the scaling group**, you can view the value of the **Weight** parameter of the specified instance type in the **Selected Instance Types** section. If you reset the number of vCPUs, Auto Scaling recalculates the capacity of the scaling group based on the new number of vCPUs, which may trigger a scaling event. In addition, you can use other instance performance metrics, such as the memory size, to create custom methods for calculating the capacity of the scaling group. For more information, see [Use performance metrics to measure Auto Scaling](/help/en/auto-scaling/user-guide/use-performance-metrics-to-measure-auto-scaling#task-2039652).
        
    3.  In the **Available Instance Types** section, click the ![icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7891689661/p507414.png) icon next to the instance types that you want to select.
        
        By default, the instance type of the launch template is added to the **Selected Instance Types** section. You can select **Select All Instance Types**, **Recommended by Instance Type**, or **Recommended by vCPU** to specify multiple instance types.
        
        In this example, the additional instance types are ecs.g5ne.large and ecs.g6.large. To prevent insufficient resource issues, we recommend that you specify multiple instance types.
        
    4.  In the **Selected Instance Types** section, arrange the priority of the instance types based on your business requirements.
        
4.  Enable Scaling Group A and Scaling Group B and trigger scale-out events.
    
    To trigger scale-out events in the scaling groups, you can use methods such as configuring a minimum number of instances, configuring an expected number of instances, and executing scaling rules.
    
    In this example, the **Minimum Number of Instances** parameter of both scaling groups is set to 1. After you enable the scaling groups, Auto Scaling automatically creates one ECS instance in each scaling group.
    

## Compare the effects

If you click on the ID of each scaling group, you are redirected to the scaling group details page. On the **Instances** tab, you can view information about the ECS instances and compare the differences between the instance types.

-   Scaling Group A: Only a launch template is used.
    
    The ecs.g5.large instance type is specified in the launch template. In this case, the instance type of the ECS instance that is automatically created is ecs.g5.large. If the ecs.g5.large instance type does not have sufficient inventory, the ECS instance cannot be created.
    
    ![伸缩组A.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5182559171/p805260.png)
    
-   Scaling Group B: A launch template is used together with the Extend Launch Template feature to specify multiple instance types.
    
    In addition to the ecs.g5.large instance type of the launch template, the ecs.g5ne.large and ecs.g6.large instance types are available. In this example, the ecs.g6.large instance type has the highest priority. As a result, the instance type of the ECS instance that is automatically created is ecs.g6.large. If the ecs.g6.large instance type does not have sufficient inventory, Auto Scaling creates an ECS instance of the ecs.g5.large or ecs.g5ne.large instance type.
    
    ![伸缩组B.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5182559171/p805265.png)
    

Compared with Scaling Group A, Scaling Group B is more flexible and adaptive in actual business scenarios in terms of instance scaling and scale-out success. This superiority is attributed to the combination of a launch template and multiple instance types. After you specify multiple instance types, Auto Scaling automatically uses a different instance type that has sufficient inventory to create ECS instances when one of the instance types does not have sufficient inventory.
