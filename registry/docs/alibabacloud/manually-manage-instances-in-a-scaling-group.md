You can manually add existing Elastic Compute Service (ECS) instances, Elastic Container Instances (ECI), or managed instances to a scaling group. You can also manually remove or delete instances that are no longer required from the scaling group. This lets you adjust resources based on your business needs and use computing resources at a low cost. This topic describes how to add, view, remove, and delete instances in a scaling group.

## Prerequisites

Before you manually add instances, make sure that the following conditions are met.

**Item**

**Prerequisites**

ECS instances or ECI instances to be added

-   The instances must be in the same region as the scaling group.
    
-   A resource cannot be a member of another scaling group.
    
-   The instances must be in the **Running** state.
    
-   The network type of the instances can be classic network or virtual private cloud (VPC). The following limits apply:
    
    -   If the network type of the scaling group is classic network, you can add only ECS instances or ECI instances of the classic network type.
        
    -   If the network type of the scaling group is VPC, you can add only ECS instances or ECI instances in the same VPC.
        

Managed instances to be added

-   The instances are non-Alibaba Cloud servers that can access the public network.
    
-   The managed region must be the same as the region of the ECS-type scaling group.
    
-   The instances can be manually added only to ECS-type scaling groups.
    
-   The instance cannot belong to another scaling group.
    

Scaling group

-   The scaling group must be in the **Enabled** state.
    
-   The scaling group cannot have ongoing scaling activities.
    

## Manually add instances to a scaling group

The procedure for adding instances varies based on the instance type.

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Scaling Groups**.
    
3.  Find the scaling group that you want to manage and use one of the following methods to open the details page of the scaling group:
    
    -   In the **Scaling Group Name/ID** column, click the scaling group ID.
        
    -   In the **Actions** column, click **Details**.
        
4.  In the upper part of the details page, click the **Instances** tab.
    
5.  Based on the instance type, select a method to manually add instances to the scaling group.
    
    ## Add ECS instances or ECI instances
    
    #### **Notes**
    
    Before you manually add ECS instances or ECI instances, take note of the following:
    
    -   You can add ECI instances only to ECI-type scaling groups and ECS instances only to ECS-type scaling groups.
        
    -   The configurations, such as the instance type and image, of manually added ECS or ECI instances are independent of the current scaling configuration. The image and security group of a manually added instance do not need to match those specified in the scaling configuration.
        
    -   When you manually add ECS or ECI instances to a scaling group, a scaling activity is triggered and executed immediately, without a cooldown period. For more information, see [Cooldown period](/help/en/auto-scaling/user-guide/cooldown-period#concept-d3h-51n-qfb).
        
    -   Manually adding instances affects the number of existing instances in the scaling group. The rules are as follows:
        
        -   The minimum and maximum number of instances in the scaling group remain unchanged.
            
        -   Expected number of instances (after adding instances) = Expected number of instances (before adding instances) + Number of manually added instances
            
        -   Number of instances in the group (before adding instances) + Number of manually added instances ≤ Maximum number of instances
            
            **Important**
            
            If the number of instances in the group + the number of manually added instances > the maximum number of instances, or the expected number of instances (before adding instances) + the number of manually added instances > the maximum number of instances, the instances cannot be added.
            
            For example:
            
            **Before adding instances**
            
            **After adding instances**
            
            Current scenario of the scaling group:
            
            -   Minimum number of instances: 1
                
            -   Maximum number of instances: 6
                
            -   Expected number of instances: 3
                
            -   Number of instances in the group: 2
                
            
            When you manually add instances, you can add a maximum of four instances. The changes are as follows:
            
            -   Minimum number of instances: 1
                
            -   Maximum number of instances: 6
                
            -   Expected number of instances: 7
                
            -   Number of instances in the group: 6
                
            
    
    #### **Procedure**
    
    The following steps describe how to manually add an ECS instance. The procedure for adding an ECI instance is similar.
    
    1.  Navigate to the **Manually Added** list.
        
    2.  Click **Add Existing Instances**.
        
    3.  In the **Add Existing Instance** dialog box, select the ECS instances that you want to add and click **Add**.
        
        If you select **Enable the scaling group to manage the instance lifecycle**, the ECS instance is also released when it is removed from the scaling group during a scale-in. You can manually add subscription instances to a scaling group, but you cannot entrust their lifecycle to the scaling group.
        
        **Warning**
        
        Make sure that you have sufficient balance within your Alibaba Cloud account. Overdue payments in your Alibaba Cloud account will result in the suspension or release of pay-as-you-go and preemptible instances. For information about how the status of an ECS instance changes in the event of overdue payments, see [Overdue payments](/help/en/auto-scaling/overdue-payments#concept-2525423).
        
        ![instance](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3492973961/p21750.png)
        
        After the instances are added, you can view information about the new ECS instances, such as their progress and health status, in the **Instances** > **Manually Added** list.
        
    
    ## Add managed instances
    
    You can use Cloud Assistant to register servers that are not hosted on Alibaba Cloud as Alibaba Cloud managed instances. After registration, the servers can use various online services provided by Alibaba Cloud, such as Cloud Assistant, Auto Scaling, CloudOps Orchestration Service, and Apsara DevOps. For more information, see [Alibaba Cloud managed instances](/help/en/ecs/user-guide/manage-servers-that-are-not-provided-by-alibaba-cloud).
    
    1.  Go to the **Managed Instance** tab.
        
    2.  Click **Add Instance**.
        
    3.  In the Add Managed Instances dialog box, select the instances to manage and click **Add**.![Managed instances.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3492973961/p700609.png)
        
        After the instances are added, you can view details about the managed instances, such as the managed instance ID, managed instance name, instance status, and join time, in the **Managed Instance** list.
        
    

## View the instances in a scaling group

After you add instances, you can view the added ECS instances, ECI instances, or managed instances in the scaling group.

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Scaling Groups**.
    
3.  In the top navigation bar, select a region.
    
4.  Find the scaling group that you want to manage and click **Details** in the **Actions** column.
    
5.  In the upper part of the details page, click the **Instances** tab.
    
6.  View the ECS instances, ECI instances, or managed instances in the scaling group.
    
    The path to view instances varies based on how the instances were created.
    
    ## Automatically created instances
    
    The **Auto Created** list displays the ECS or ECI instances that are automatically created by the scaling group. If an instance becomes unhealthy, it is automatically removed from the scaling group and released.
    
    You can manually change the status of an existing ECS or ECI instance. For example, you can put an instance into the standby state, put an instance into the protection state, or remove an instance from the protection state. You can also manually remove an instance from the scaling group or release the instance. For more information, see [Manually adjust the instance status](/help/en/auto-scaling/user-guide/manually-change-the-status-of-instances#concept-ovc-1d2-sfb) and [Manually remove or delete instances](#section-h4y-ful-knr).
    
    ## Manually create an instance
    
    In the **Manually Added** list, you can add manually created ECS or ECI instances to the scaling group. If a manually added ECS or ECI instance is not in the **Running** state, it is considered unhealthy and is automatically removed from the scaling group. The lifecycle management state of an ECS or ECI instance determines whether it is released when it is removed from the scaling group:
    
    -   Lifecycle not entrusted to the scaling group: The manually created ECS or ECI instance is removed from the scaling group but not released.
        
    -   Lifecycle entrusted to the scaling group: The manually created ECS or ECI instance is removed from the scaling group and released.
        
    
    You can manually change the status of an existing ECS or ECI instance. For example, you can put an instance into the standby state, put an instance into the protection state, or remove an instance from the protection state. You can also manually remove an instance from the scaling group or release the instance. For more information, see [Manually adjust the instance status](/help/en/auto-scaling/user-guide/manually-change-the-status-of-instances#concept-ovc-1d2-sfb) and [Manually remove or delete instances](#section-h4y-ful-knr).
    
    ## Managed instances
    
    The **Managed Instance** list displays the managed instances that are added to an ECS scaling group. The IDs of managed instances start with `mi-`. Unlike Alibaba Cloud instances, managed instances do not support lifecycle hooks, association with load balancers, or the health check feature.
    
    After a managed instance is added to an ECS-type scaling group, the scaling group does not manage the lifecycle of the managed instance. You can only manually remove the managed instance from the scaling group. The removed instance is not released.
    
    **Note**
    
    For more information about how to use Auto Scaling to manage managed instances, see [Use Auto Scaling to monitor and automatically scale ECS instances and non-Alibaba Cloud instances](/help/en/auto-scaling/use-cases/unified-monitoring-and-auto-scaling-for-ecs-and-non-alibaba-cloud-instances).
    

## Manually remove or delete instances

#### **Notes**

If the scaling group is in the **Enabled** state and has no ongoing scaling activities, you can manually remove or delete unnecessary instances from the group. Before you perform these operations, note the following:

-   When you manually remove or delete ECS or ECI instances, a scale-in activity is triggered. This activity can be immediately executed without a cooldown period. For more information, see [Cooldown period](/help/en/auto-scaling/user-guide/cooldown-period#concept-d3h-51n-qfb).
    
-   If the number of instances in the scaling group becomes smaller than the minimum number of instances after you manually remove or delete ECS or ECI instances, the operation fails.
    
-   Managed instances can only be manually removed from a scaling group. The removed instances are not released.
    
-   A successfully triggered scaling activity does not mean that the scaling activity can be successfully executed. View the details of the scaling activity to check the execution result. For more information, see [View the details of a scaling activity](/help/en/auto-scaling/user-guide/view-scaling-activity-details#concept-tn5-4c2-sfb).
    

#### **Procedure**

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Scaling Groups**.
    
3.  In the top navigation bar, select a region.
    
4.  Find the scaling group that you want to manage and click **Details** in the **Actions** column.
    
5.  In the upper part of the details page, click the **Instances** tab.
    
6.  Select the source of the instances.
    
    -   You can select automatically created ECS or ECI instances from the **Auto Created** list.
        
    -   You can select manually added ECS or ECI instances from the **Manually Added** list.
        
    -   You can select manually added managed instances from the **Managed Instance** list.
        
7.  Manually remove or delete instances.
    
    **Action**
    
    **Procedure**
    
    Manually remove ECS or ECI instances
    
    -   Single instance: Find the ECS or ECI instance to remove. In the **Actions** column, click ![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3826400061/p130487.png) **\>** **Remove from Scaling Group**.
        
    -   Multiple instances: Select the ECS or ECI instances that you want to remove and click **Remove from Scaling Group** at the bottom of the instance list.
        
    
    Manually remove managed instances
    
    -   To remove a single instance, find the managed instance and click **Remove from Scaling Group** in the **Actions** column.
        
    -   To remove multiple instances, select the managed instances that you want to remove and click **Remove from Scaling Group** at the bottom of the instance list.
        
    
    Manually delete ECS or ECI instances
    
    -   Single instance: Find the ECS or ECI instance to delete, and in the **Actions** column, click ![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3826400061/p130487.png) > **Delete Instance**.
        
    -   Multiple instances: Select the ECS or ECI instances that you want to delete and click **Delete Instance** at the bottom of the instance list.
        
    
    **Note**
    
    When you delete an instance, the ECS or ECI instance is removed from the scaling group and released. Whether you can delete a manually added ECS or ECI instance is determined by its lifecycle management state. For more information, see [Manually added instances](#5f27d10230nnr).
    
8.  Select or clear **Modify Expected Number of Instances** (selected by default) and click **OK**.
    
    -   If you select **Modify Expected Number of Instances**, the expected number of instances decreases by the number of instances that you remove.
        
    -   If you clear **Modify Expected Number of Instances**, the expected number of instances remains unchanged after you remove the instances.
        
    
    **Note**
    
    When you manually remove or delete an ECS or ECI instance, consider whether to select the Automatically Disassociate The Instance From CLB (formerly SLB) And RDS Instances option. If you select this option, the instance is automatically removed from the vServer groups or default server groups associated with the scaling group, and from the RDS access whitelist.
    

## **References**

-   You can manually change the status of an instance in a scaling group. For example, you can manually put an ECS instance into the **Stopped** state. During a scale-out, Auto Scaling prioritizes starting ECS instances that are in the Stopped state. For more information, see [Manually change the status of instances](/help/en/auto-scaling/user-guide/manually-change-the-status-of-instances).
    
-   You can attach load balancers to your scaling group to distribute incoming traffic across the instances in the scaling group. This improves the performance of your scaling group. For more information, see [Attach SLB instances to or detach SLB instances from scaling groups](/help/en/auto-scaling/user-guide/associate-slb-instances-with-or-disassociate-slb-instances-from-a-scaling-group).
    
-   After you associate ApsaraDB RDS instances with a scaling group, the private IP addresses of the ECS instances that are added to the scaling group are automatically added to the whitelists of the RDS instances. This allows internal network communication between the ECS instances and the RDS instances. For more information, see [Add RDS instances to or remove RDS instances from a scaling group](/help/en/auto-scaling/associate-apsaradb-rds-instances-with-a-scaling-group-or-disassociate-apsaradb-rds-instances-from-a-scaling-group).
