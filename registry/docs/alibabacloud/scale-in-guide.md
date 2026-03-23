When your business workloads decrease, Auto Scaling triggers scale-in events in your scaling group. This automates the adjustment of resources and minimizes resource costs. This topic describes how to perform graceful scale-in operations.

## **Introduction to the scale-in process**

When a scale-in process is triggered in your scaling group, Auto Scaling selects instances to remove from the scaling group based on the configured scale-in policy. After the instances are removed, they are reclaimed based on the predefined instance reclaim mode. The configurations vary based on different phases in a scale-in process, as shown in the following figure.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8526787671/CAEQLBiBgIDwy5rfixkiIGRjNzRiOTA1YmUzODRhNmFiY2E4N2U0NzhlNDkzNzU54549507_20240805103516.261.svg)

## **Trigger a scale-in event**

### **Control the scale-in boundary to meet the daily business requirements**

-   **Implementation method**: Configure the **Minimum Number of Instances** parameter for the scaling group.
    
    The **Minimum Number of Instances** parameter specifies the lower limit of the number of instances in a scaling group. When a scale-in request is initiated, Auto Scaling rejects the scale-in request if the number of instances in the scaling group drops below the lower limit after the scale-in process is complete. This prevents the resources in the scaling group from being insufficient and unable to meet the daily business requirements.
    
-   **Operations**: For more information, see [Manage scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups).
    

### **Scale in instances based on the workload tiers (step scaling rule)**

-   **Implementation method**: Create a step scaling rule for the scaling group.
    
    You can create a step scaling rule to enable scale-in based on the workload tiers. This method effectively prevents system overloads or interruption caused by rapid removal of multiple instances and ensures graceful scale-in events. For example, you want to design a custom scale-in solution based on the following CPU utilization tiers in your scaling group:
    
    -   Scales in five instances if the average CPU utilization drops below 20%.
        
    -   Scales in three ECS instances if the average CPU utilization ranges between 20% and 30%.
        
    -   Scales in one ECS instance if the average CPU utilization ranges between 30% and 50%.
        

In this case, you can create a step scaling rule, as shown in the following figure. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9223574271/p826215.png)

-   **Operations**: For more information, see [Configure scaling rules](/help/en/auto-scaling/user-guide/manage-scaling-rules).
    

### **Configure a cooldown period and an event-triggered task to control the scale-in rate and frequency**

You can configure a cooldown period and an event-triggered task to prevent business instability caused by frequent scale-in operations and ensure graceful scale-in events.

**Method 1: Configure a cooldown period**

-   **Implementation method**: Configure a cooldown period for your scaling group and scaling rule.
    
    The cooldown period specifies the minimum interval of two consecutive scaling operations triggered by event-triggered tasks. The setting allows you to control the scale-in frequency.
    
-   **Operations**: For more information, see [Cooldown period](/help/en/auto-scaling/user-guide/cooldown-period).
    

**Method 2: Configure the trigger frequency of your event-triggered task**

-   **Implementation method**: Configure the following parameters for your event-triggered task: **Statistical Period**, **Condition**, and **Triggered After**.
    
    You can use these parameters to control the frequency of scale-in operations triggered by your event-triggered task.
    
-   **Operations**: For more information, see [Manage event-triggered tasks](/help/en/auto-scaling/user-guide/manage-event-triggered-tasks/).
    

**Method 3: Configure the trigger frequency of your target tracking scaling rule**

-   **Implementation method**: Configure the **Threshold for Scale-in Alerts** parameter for your target tracking scaling rule.
    
    After you create a target tracking scaling rule, an event-triggered task is automatically created. This parameter specifies the number of consecutive times that the alert condition must be met before the automatically created event-triggered task triggers a scale-in alert.
    
-   **Operations**: For more information, see [Target tracking scaling rule](/help/en/auto-scaling/user-guide/manage-scaling-rules#f4305c8d8bi64).
    

### **Specify the time when the scale-in event is triggered**

You can specify the time when the scale-in event is triggered based on your business requirements. This implements graceful scale-in events. You can use one of the following methods:

**Method 1: Manually execute a simple scaling rule**

You can manually execute a simple scaling rule to trigger a scale-in event. For more information, see [Configure scaling rules](/help/en/auto-scaling/user-guide/manage-scaling-rules).

**Note**

This method supports API operations. For more information, see [ExecuteScalingRule](/help/en/auto-scaling/developer-reference/api-ess-2022-02-22-executescalingrule) and [ScaleWithAdjustment](/help/en/auto-scaling/developer-reference/api-ess-2022-02-22-scalewithadjustment).

**Method 2: Change the number of instances in your scaling group to trigger a scale-in event**

You can modify the **Maximum Number of Instances** or **Expected Number of Instances** parameter to trigger a scale-in event. Auto Scaling adjusts the number of instances in your scaling group based on the settings of the two parameters to ensure your expected scale-in effect. For more information, see [Manage scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups).

**Note**

This method supports API operations. For more information, see [ModifyScalingGroup](/help/en/auto-scaling/developer-reference/api-ess-2022-02-22-modifyscalinggroup).

## **Select the instances that you want to scale in**

By default, Auto Scaling scales in instances based on the specified order of vSwitches of your scaling group (priority policy). You can modify the scale-in policy to select the instances that you want to scale in based on your business requirements.

**Important**

-   If you do not want a mission-critical instance to be scaled in, you can put this instance into the Protected state to prevent business interruption caused by unexpected instance scale-in. For more information, see [Manually put instances into the Protected state or move instances out of the Protected state](/help/en/auto-scaling/user-guide/manually-change-the-status-of-instances#title-l11-q7h-3n1).
    
-   Scaling groups of the Elastic Container Instance type do not support the **Scale-In Policy** and **Scaling Policy** parameters. By default, Auto Scaling preferentially removes elastic container instances created from the earliest scaling configuration from scaling groups, and then removes the earliest elastic container instances from the scaling groups.
    

### Solution 1: Balance the distribution of instances across zones after a scale-in process is complete

This solution ensures disaster recovery. If you use this solution, instances are evenly distributed across multiple zones after a scale-in process is complete to implement disaster recovery.

-   **Implementation method**: Set the **Scaling Policy** parameter to **Balanced Distribution Policy**.
    
    After you enable the balanced distribution policy, Auto Scaling preferentially scales in instances from the zone that have the largest number of instances. If you want the scale-in process to continue after the balanced distribution policy takes effect, set the **Scale-In Policy** parameter to **Created From Earliest Scaling Configuration**, **Earliest Instances**, or **Most Recent Instances**.
    
-   **Operations**: For more information, see [Scenario 2: Scaling policy (Balanced Distribution Policy) + Scale-in policy](/help/en/auto-scaling/user-guide/configure-a-combination-policy-for-removing-instances#title-j89-m26-abf).
    

### Solution 2: Prioritize the scale-in of instances that have the highest unit price (cost optimization policy)

This solution ensures cost-effectiveness. You can enable the cost optimization policy to scale in instances that have the lowest level of cost-effectiveness. This improves resource utilization.

-   **Implementation method**: Set the **Scaling Policy** policy to **Cost Optimization Policy**.
    
    After you enable the cost optimization policy, Auto Scaling preferentially scales in instances that have the highest unit price from your scaling group. If you want the scale-in process to continue after the cost optimization policy takes effect, set the **Scale-In Policy** parameter to **Instances Created From Earliest Scaling Configuration**, **Earliest Instances**, or **Most Recent Instances**.
    
-   **Operations**: For more information, see [Scenario 3: Scaling policy (Cost Optimization Policy) + Scale-in policy](/help/en/auto-scaling/user-guide/configure-a-combination-policy-for-removing-instances#title-fan-8gp-x2q).
    

**Note**

This solution helps you balance resource costs. You can configure the ratio of preemptible instances to pay-as-you-go instances in your scaling group.

### Solution 3: Create a custom combination policy

You can combine Solution 1 and Solution 2.

-   **Implementation method**: Set the **Scaling Policy** parameter for your scaling group to **Custom Combination Policy**.
    
    When you enable the custom combination policy, you can adjust the ratio of pay-as-you-go instances to preemptible instances, balance the resource capacity across multiple zones, and create capacity planning policies for pay-as-you-go and preemptible instances.
    
-   **Operations**: For more information, see [Set the instance termination policy for a scaling group](/help/en/auto-scaling/user-guide/configure-a-combination-policy-for-removing-instances).
    

### **Solution 4: Create a custom scale-in policy**

If the scale-in policies supported by Auto Scaling cannot meet your business requirements, you can use Function Compute to create a custom scale-in policy, as described in this solution.

-   **Implementation method**: Set the **Scale-In Policy** parameter to **Custom Policy**.
    
    You can create a custom scale-in policy by using programming languages in Function Compute. Each time a scale-in event is triggered, the function you created in Function Compute is invoked. You can define which instances can be scaled in and which instances cannot when you create the function based on your business requirements.
    
-   **Operations**: For more information, see [Use Function Compute to customize ECS scale-in policies](/help/en/auto-scaling/use-cases/create-a-custom-scale-in-policy-by-using-function-compute).
    

## **Gracefully scale in instances**

A scale-in process proceeds only if an instance that meets the scale-in standards has completed its ongoing task. This process, known as graceful scale-in, prevents business interruptions due to the scale-in operation.

-   **Implementation method**: Create a lifecycle hook.
    
    When a scale-in process is triggered, you can enable a lifecycle hook to put instances that have ongoing tasks into the Pending Remove state. During the effective period of the lifecycle hook, you can perform operations on the instances. If a longer period of time is required to complete the ongoing tasks, you can call an API operation to extend the effective period of the lifecycle hook.
    
-   **Operations**: For more information, see [Overview](/help/en/auto-scaling/user-guide/overview-10) and [RecordLifecycleActionHeartbeat](/help/en/auto-scaling/developer-reference/api-ess-2022-02-22-recordlifecycleactionheartbeat).
    

**Important**

If you directly remove, delete, or stop instances for a similar scale-in effect, no lifecycle hook takes effect. You cannot use this solution.

## **Reclaim instances that are scaled in**

To improve the scale-in efficiency, the default instance reclaim mode is **Force Release**. In this mode, Auto Scaling directly releases the instances that are removed from scaling groups. No resource is retained after instances are released. You can also use other instance reclaim modes. For more information, see [Manage scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups).
