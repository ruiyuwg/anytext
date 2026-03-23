This topic describes Auto Scaling resources and their usage to help you understand the core concepts and features of Auto Scaling.

## Usage process

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0626593671/CAEQMhiBgICe9vChoxkiIDdmYzk4MWVkYzM5MTQyZGM5YWRiNDAwMDEyOTZmNWE24020317_20230925182255.274.svg)

**Note**

If you set the **Instance Configuration Source** parameter to **Launch Templates** or **Select Existing Instance** when you create a scaling group, a scaling configuration is automatically created and becomes active. You do not need to manually recreate a scaling configuration. After the process for creating a scaling group is complete, you can directly enable the scaling group.

1.  **Create a scaling group**
    
    A scaling group consists of identical instances designed for use in similar business scenarios. When creating a scaling group, you can define attributes such as the minimum and maximum instance limits, the template for scale-out events, and the scale-in policies. For more information, see [Overview](/help/en/auto-scaling/user-guide/scaling-group-overview).
    
2.  **Create a scaling configuration**
    
    A scaling configuration is a template used by Auto Scaling to automatically launch Elastic Compute Service (ECS) instances or elastic container instances. For more information, see [Overview](/help/en/auto-scaling/user-guide/overview-9#concept-87761-zh).
    
3.  **Enable the scaling configuration**
    
    If a scaling group lacks an active scaling configuration, a prompt will appear asking you to enable a scaling configuration after the scaling group is created. A scaling group can have multiple scaling configurations, but only one can be active at any given time. For more information, see [Manage scaling configurations](/help/en/auto-scaling/user-guide/manage-scaling-configurations).
    
4.  **Enable the scaling group**
    
    Scaling events occur only in scaling groups that are in the **Enabled** state. When a scaling group has an active scaling configuration, you will be prompted to enable the group. You can also go to the **Scaling Groups** page to manually enable a scaling group. For more information, see [Enable a scaling group](/help/en/auto-scaling/scaling-group-enable-a-scaling-group#task-2118188).
    
5.  **Creates a scaling rule**
    
    A scaling rule defines the action for adjusting the number of instances in a scaling group, helping manage the addition or removal of instances. For more information, see [Overview](/help/en/auto-scaling/user-guide/overview-2).
    
6.  **Execute the scaling rule**
    
    To execute the scaling rule, you can use one of the following methods. For more information, see [Execute a scaling rule](/help/en/auto-scaling/execute-a-scaling-rule#concept-rxw-2bx-rfb).
    
    -   **Manual execution**: Manually execute a scaling rule. This method is ideal for handling temporary business needs.
        
    -   **Automatic execution based on scheduled tasks**: Configure a scheduled task to execute a scaling rule at a specified time. This method is ideal for managing workload fluctuations with predictable patterns.
        
    -   **Automatic execution based on event-triggered tasks**: Configure an event-triggered task to monitor specific metrics, report alerts, and execute a scaling rule. This approach is ideal for handling workload fluctuations without predictable patterns.
        

## Scenarios

**Scenario description and example**

**References**

For temporary business needs, the number of servers to be added and the timing for their addition are uncertain, particularly when there are no metrics available for monitoring. In such cases, manual adjustment of the server count is necessary.

For example, if a company needs additional servers for temporary testing purposes, manual oversight is required to determine the number and timing of server adjustments.

[Manually scale ECS instances with a few clicks](/help/en/auto-scaling/getting-started/manually-scale-an-ecs-instance-with-one-click)

If your workloads exhibit predictable fluctuations with identifiable peak and off-peak hours, you can configure scheduled tasks in the Auto Scaling console to adjust the number of ECS instances at specified time points.

For example, a game company observes a consistent increase in business workloads from 18:00:00 to 23:00:00 nightly, requiring additional servers during this period. Outside of this period, only a fixed number of servers are needed to support regular operations.

[Scale ECS instances as scheduled](/help/en/auto-scaling/getting-started/scheduled-automatic-scaling-of-ecs-instances)

When you manage dynamic workload fluctuations, determining the optimal number of servers and the timing for scaling can be challenging. If you want to adjust server capacity based on real-time workload changes, you can create event-triggered tasks in the Auto Scaling console.

For example, traffic on a news website is highly variable. Page views spike with breaking news and decline as the news becomes less timely.

[Scale ECS instances based on business workloads](/help/en/auto-scaling/getting-started/automatically-scale-the-capacity-of-an-ecs-instance-based-on-the-business-load)
