Properly configuring scaling groups is essential for automated management of Elastic Compute Service (ECS) clusters. By creating a scaling group based on an existing ECS instance, you can quickly build a cluster of instances with uniform specifications and configurations, improving business availability and elastic scaling capabilities.

## **Common scenarios for scaling groups**

A [scaling group](/help/en/auto-scaling/user-guide/scaling-group-overview) is a collection of ECS instances with the same application scenario and instance type. With scaling groups, you can automatically adjust the number of instances based on actual business load, create instances as needed, and improve resource utilization. Examples:

-   #### **When b****usiness cluster resource usage fluctuates according to time patterns****,** [automatically scale ECS instances on a schedule](/help/en/auto-scaling/getting-started/scheduled-automatic-scaling-of-ecs-instances)
    
    Automatically scale out before peak resource usage periods and scale in after resource usage drops to a low point.
    
-   #### **For s****udden business fluctuations****,** [**automatically scale ECS instances based on monitoring metrics**](/help/en/auto-scaling/getting-started/automatically-scale-the-capacity-of-an-ecs-instance-based-on-the-business-load)
    
    Respond to sudden, unpredictable load changes based on real-time monitoring metrics (such as CPU and memory usage), automatically scaling out when resources reach thresholds and scaling in when load decreases.
    
-   #### **To meet h****igh availability requirements****,** [maintain a fixed number of available instances based on expected instance count](/help/en/auto-scaling/user-guide/expected-number-of-instances)
    
    Combine the **expected number of instances** feature and **health check mechanism** of scaling groups to automatically create new instances to **replace** unavailable instances.
    

## **Create a scaling group based on an existing instance**

The following steps describe how to create a scaling group based on an existing ECS instance. You can also [create a scaling group](/help/en/auto-scaling/user-guide/create-an-ecs-scaling-group) using other methods.

1.  Open the **Create Scaling Group** page.
    
    1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, click **Scaling Groups**.
        
    3.  In the top navigation bar, select the region where Auto Scaling is activated.
        
    4.  On the **Scaling Groups** page, click **Create** to go to the **Create Scaling Group** page.
        
    
2.  Click the **Create by Form** tab at the top and configure the scaling group according to the interface prompts.
    
    The following table describes the required parameters for creating an ECS scaling group based on an existing instance. For more information, see [Parameter description](/help/en/auto-scaling/user-guide/create-an-ecs-scaling-group#795a344a10dko).
    
    **Required parameters**
    
    **Parameter**
    
    **Description**
    
    **Scaling Group Name**
    
    Enter a name for the scaling group. The name must meet the requirements displayed on the console.
    
    **Type**
    
    Select the type of instances in the scaling group. Select **ECS**.
    
    **Instance Configuration Source**
    
    Select **Select Existing Instance**. The scaling group will use this instance's configuration to create a scaling configuration, which will be used to create new instances later.
    
    **Select Existing Instance**
    
    Select an existing ECS instance as prompted. Auto Scaling extracts the basic configurations of the ECS instance to create a default scaling configuration.
    
    **Important**
    
    The extracted basic configurations include the following: **Instance Type**, **Network Type**, **Security Group ID**, **Image ID**, and other basic configurations, but do not include **logon password** or **tags**.
    
    **Minimum Number of Instances**
    
    Specify the lower limit for the number of ECS instances in the scaling group. When the actual number of ECS instances drops below the lower limit, Auto Scaling triggers a scale-out event to add ECS instances to the scaling group.
    
    **Maximum Number of Instances**
    
    Specify the upper limit for the number of ECS instances in the scaling group. When the actual number of ECS instances exceeds the upper limit, Auto Scaling automatically removes instances from the scaling group.
    
    **Default Cooldown Time (Seconds)**
    
    The default [cooldown time](/help/en/auto-scaling/user-guide/cooldown-period) after a scaling activity occurs in the scaling group, in seconds. You can use the default setting of 300 seconds.
    
    **VPC**
    
    After you select a VPC, all instances in the scaling group will be created in this VPC.
    
    **Important**
    
    After the scaling group is created, the **VPC** cannot be changed.
    
    **vSwitch**
    
    After you select a **VPC**, you can select vSwitches in your VPC. All ECS instances in the scaling group communicate with each other by using the vSwitches that you select.
    
    **Important**
    
    We recommend that you select vSwitches in multiple zones. If a single zone has insufficient inventory, instance creation may fail. You can switch **[Scaling Policy](/help/en/auto-scaling/user-guide/scaling-policy)** to choose how instances are distributed across different zones in the scaling group.
    
3.  Click **Create** to complete the creation of the scaling group.
    

## **What to do next**

-   **Update images in scaling configurations:** When you create a scaling group using an existing instance, the scaling configuration uses the base image of that instance by default. If you want new instances to include the configurations and environment of the original instance, you need to [create a custom image](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance) based on the original instance and [update the image in the scaling configuration](/help/en/auto-scaling/user-guide/update-images-in-scaling-configurations) to use this custom image.
    
-   **Configure automatic scaling policies**: After the scaling group is created, combine it with your actual business requirements to set up automatic [scaling solutions](/help/en/auto-scaling/user-guide/scaling-group-overview#24bd683e9ffo8) for the scaling group.
    
-   **Add instances to the scaling group for unified management**: After the scaling group is created, you can [manually add the original instance to the scaling group](/help/en/auto-scaling/user-guide/manually-manage-instances-in-a-scaling-group#title-91n-m6z-7aj) for unified management.
