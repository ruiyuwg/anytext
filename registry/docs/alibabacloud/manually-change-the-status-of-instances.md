This topic describes how to manually put instances into or move instances out of the Standby, Protected, or Stopped state.

## Instance status description

An instance in a scaling group may be in one of the following states: **Adding**, **Pending Add**, **In Service**, **Standby**, **Protected**, **Removing**, **Pending Remove**, and **Stopped**. For more information, see [Lifecycle states of instances in a scaling group](/help/en/auto-scaling/user-guide/instance-lifecycles#section-h25-qzm-qfb).

The following table describes the instance states.

**Instance category**

**Before**

**Operation**

**After**

**User guide**

**API reference**

Elastic Compute Service (ECS) instances or elastic container instances

Protected

Move instances out of the Protected state.

In Service

[Manually put instances into the Protected state or move instances out of the Protected state](#section-34r-vgj-78t)

[SetInstancesProtection](/help/en/auto-scaling/developer-reference/api-setinstancesprotection#doc-api-Ess-SetInstancesProtection)

ECS instances or elastic container instances

In Service

Put instances into the Protected state.

Protected

ECS instances

In Service, Standby, and Protected

Put instances into the Stopped state.

Stopped

**Note**

The status of an instance that is being put into the Standby state is temporarily set to **Removing**.

[Manually put instances into the Stopped state.](#section-umm-ejn-p8m)

None

ECS instances or elastic container instances

In Service, Standby, and Protected

Delete instances or remove instances from scaling groups.

Stateless

**Note**

An instance is in the **Removing** state when it is being deleted or removed from a scaling group.

[Manually remove or delete instances](/help/en/auto-scaling/user-guide/manually-manage-instances-in-a-scaling-group#section-h4y-ful-knr)

-   [RemoveInstances](/help/en/auto-scaling/developer-reference/api-removeinstances#doc-api-Ess-RemoveInstances)
    
-   [DetachInstances](/help/en/auto-scaling/developer-reference/api-detachinstances#doc-api-Ess-DetachInstances)
    

ECS instances or elastic container instances

In Service

Put instances into the Standby state.

Standby

[Manually put instances into the Standby state or move instances out of the Standby state](#section-r75-lcd-lrs)

[EnterStandby](/help/en/auto-scaling/developer-reference/api-enterstandby#doc-api-Ess-EnterStandby)

ECS instances or elastic container instances

Standby

Move instances out of the Standby state.

In Service

[ExitStandby](/help/en/auto-scaling/developer-reference/api-exitstandby#doc-api-Ess-ExitStandby)

ECS instances or elastic container instances

In Service, Standby, and Protected

Remove instances from scaling groups.

Instances that are removed from scaling groups are not stopped or released and are independent of scaling groups.

[Manually remove or delete instances](/help/en/auto-scaling/user-guide/manually-manage-instances-in-a-scaling-group#section-h4y-ful-knr)

[DetachInstances](/help/en/auto-scaling/developer-reference/api-detachinstances#doc-api-Ess-DetachInstances)

Managed instances

In Service

Remove instances from scaling groups.

Managed instances that are removed from scaling groups are not stopped or released and are independent of scaling groups.

[Manually remove managed instances from scaling groups](#b4e78d707224b)

None

## Usage notes

Before you put ECS instances or elastic container instances into the Standby or Protected state or move ECS instances or elastic container instances out of the Standby or Protected state, take note of the following table:

**Phase**

**Description**

Into the Standby state

-   If a Server Load Balancer (SLB) instance is associated with the scaling group to which the ECS instances or elastic container instances that you put into the Standby state belong, the weights of the instances as backend servers are reset to zero.
    
-   After you put ECS instances or elastic container instances into the Standby state, the instances stay in the Standby state until you manually move the instances out of the Standby state.
    
-   Auto Scaling does not manage the lifecycles of ECS instances or elastic container instances that are in the Standby state. You must manually manage the lifecycles of the instances.
    
-   During scale-ins, Auto Scaling does not remove ECS instances or elastic container instances that are in the Standby state from scaling groups.
    
-   When ECS instances or elastic container instances that are in the Standby state are stopped or restarted, Auto Scaling does not update the health check status of the instances.
    
-   You must manually remove ECS instances or elastic container instances that are in the Standby state from the scaling group before you can release the instances.
    
-   If you delete scaling groups to which ECS instances or elastic container instances that are in the Standby state belong, the instances are automatically removed from the scaling groups and exit the Standby state.
    
    **Note**
    
    If the scaling groups that you deleted manage the lifecycles of the ECS instances or elastic container instances, the instances are released after they are removed from the scaling groups. If the scaling groups that you deleted do not manage the lifecycles of the ECS instances or elastic container instances, the instances run independently. For more information about how to manage the lifecycles of ECS instances or elastic instances, see [Instance lifecycles](/help/en/auto-scaling/user-guide/instance-lifecycles#concept-kbm-xym-qfb).
    
-   You can perform custom operations on the ECS instances or elastic container instances that are in the Standby state, such as [stopping instances](/help/en/ecs/user-guide/stop-an-instance#task-1909833), [restarting instances](/help/en/ecs/user-guide/restart-instances#concept-yxw-dwm-xdb), [changing ECS instance types](/help/en/ecs/user-guide/overview-of-instance-configuration-changes#concept-anb-bbf-5db), [changing the OS (system disk)](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance#concept-e12-vfd-xdb), [initializing cloud disks](/help/en/ecs/user-guide/re-initialize-a-system-disk#concept-stg-xd3-ydb), and [changing the network type from classic network to VPC](/help/en/vpc/migrate-a-classic-network-to-a-vpc/#concept-wjl-hv5-sdb).
    

Out of the Standby state

-   ECS instances or elastic container instances that exit the Standby state enter the In-Service state.
    
-   If an SLB instance is associated with the scaling groups to which the ECS instances or elastic container instances that exit the Standby state belong, the weights of the instances as backend servers are reset to 50.
    
-   When ECS instances or elastic container instances that exit the Standby state are stopped or restarted, Auto Scaling updates the health check status of the instances.
    
-   During scale-ins, Auto Scaling may remove ECS instances or elastic container instances that exit the Standby state from scaling groups.
    
    **Note**
    
    If the scaling groups manage the lifecycles of the ECS instances or elastic container instances that exit the Standby state, Auto Scaling releases the instances after they are removed from the scaling groups. If the scaling groups do not manage the lifecycles of the ECS instances or elastic container instances that exit the Standby state, the instances run independently after they are removed from the scaling groups. For more information about how to manage the lifecycles of ECS instances or elastic instances, see [Instance lifecycles](/help/en/auto-scaling/user-guide/instance-lifecycles#concept-kbm-xym-qfb).
    

Into the Protected state

-   If an SLB instance is associated with the scaling groups to which the ECS instances or elastic container instances that are in the Protected state belong, the weights of the ECS instances or elastic container instances as backend servers remain unchanged
    
-   After you put ECS instances or elastic container instances into the Protected state, the instances stay in the Protected state until you manually move the instances out of the Protected state.
    
-   During scale-ins, Auto Scaling does not remove ECS instances or elastic container instances in the Protected state from scaling groups. You must manually remove the ECS instances or elastic container instances that are in the Protected state from scaling groups before you can release the instances.
    
-   When ECS instances or elastic container instances in the Protected state are stopped or restarted, Auto Scaling does not update the health check status of the instances.
    

Into the Stopped state

After you put ECS instances into the Stopped state, the ECS instances no longer provide services. You are not charged for specific resources. For example, after you put a pay-as-you-go ECS instance into the Stopped state, you do not need to manually enable the economical mode for the instance in the ECS console. You are not charged for released resources, such as the vCPUs, memory size, and public IP addresses. However, you are charged for retained resources, such as cloud disks and elastic IP addresses (EIPs).

## Manually put instances into the Standby state or move instances out of the Standby state

You can put ECS instances or elastic container instances that you no longer require into the Standby state. You can also move ECS instances or elastic container instances out of the Standby state.

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Scaling Groups**.
    
3.  In the top navigation bar, select a region.
    
4.  Find the scaling group whose instances you want to operate and click **Details** in the **Actions** column.
    
5.  In the upper part of the details page, click the **Instance Management** tab.
    
6.  Select the source of ECS or ECI instances.
    
    -   If you want to put ECS or ECI instances that are automatically created into the Standby state, find the **Auto Created** list.
        
    -   If you want to put ECS or ECI instances that are manually added into the Standby state, find the **Manually Added** list.
        
7.  Manually put instances into the Standby state or move instances out of the Standby state.
    
    ### Manually put instances into the Standby state
    
    1.  Use one of the following methods to put ECS instances or elastic container instances into the Standby state:
        
        -   To put a single instance into the Standby state, find the ECS instance or elastic container instance and click **Switch to Standby** in the **Actions** column.
            
        -   To put multiple instances into the Standby state at the same time, find the ECS instances or elastic container instances and click **Switch to Standby** in the lower part of the page.
            
    2.  In the **Switch to Standby** dialog box, specify whether to asynchronously put instances into the Standby state.
        
        **Option**
        
        **Description**
        
        **Procedure**
        
        Synchronously put instances into the Standby state.
        
        After you click **OK** in the **Switch to Standby** dialog box, the Auto Scaling backend processes the request to put the selected instances into the Standby state. If the number of instances that you want to put into the **Standby** state is large, the Auto Scaling backend may take a long period of time to process the request. In this case, we recommend that you select the asynchronous mode.
        
        In the **Switch to Standby** dialog box, click **OK**.
        
        Asynchronously put instances into the Standby state.
        
        If you select the **Asynchronously Switch to Standby** option in the **Switch to Standby** dialog box, the Auto Scaling console immediately displays the operation result. You can check whether the status of instances changes to the **Standby** state in the Auto Scaling console. Compared with the synchronous mode, the asynchronous mode provides better interactive experience for users.
        
        In the **Switch to Standby** dialog box, select the **Asynchronously Switch to Standby** option and click **OK**.
        
        On the **Scaling Rules and Activities** tab, click the **Scaling Activities** tab. You can check the execution result of the scaling activity during which instances are put into the Standby state.
        
    
    ### Manually move instances out of the Standby state
    
    1.  Use one of the following methods to move ECS instances or elastic container instances out of the **Standby** state:
        
        -   If you want to move a single instance out of the **Standby** state, find the ECS instance or elastic container instance and click **Remove from Standby** in the **Actions** column.
            
        -   If you want to move multiple instances out of the **Standby** state at the same time, select the ECS instances or elastic container instances and click **Remove from Standby** in the lower part of the page.
            
    2.  In the **Remove from Standby** dialog box, specify whether to asynchronously move instances out of the **Standby** state.
        
        **Option**
        
        **Description**
        
        **Procedure**
        
        Synchronously move instances out of the Standby state.
        
        After you click **OK** in the **Remove from Standby** dialog box, the Auto Scaling backend processes the request to move instances out of the **Standby** state. If the number of instances that you want to move out of the **Standby** state is large, the Auto Scaling backend may take a long period of time to process the request. In this case, we recommend that you select the asynchronous mode.
        
        In the **Remove from Standby** dialog box, click **OK**.
        
        Asynchronously move instances out of the Standby state.
        
        If you select the **Asynchronously Remove from Standby** option in the **Remove from Standby** dialog box, the Auto Scaling console immediately displays the operation result. You can check whether the instances are moved out of the **Standby** state in the Auto Scaling console. Compared with the synchronous mode, the asynchronous mode provides better interactive experience for users.
        
        In the **Remove from Standby** dialog box, select the **Asynchronously Remove from Standby** option and click OK.
        
        On the **Scaling Rules and Activities** tab, click the **Scaling Activities** tab. You can check the execution result of the scaling activity during which the instances are moved out of the Standby state.
        
    

## Manually put instances into the Protected state or move instances out of the Protected state

You can put ECS instances or elastic container instances that you do not want to remove from scaling groups into the **Protected** state. You can also move ECS instances or elastic container instances out of the **Protected** state.

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Scaling Groups**.
    
3.  In the top navigation bar, select a region.
    
4.  Find the scaling group whose instances you want to operate and click **Details** in the **Actions** column.
    
5.  In the upper part of the details page, click the **Instance Management** tab.
    
6.  Select the source of ECS or ECI instances.
    
    -   If you want to put ECS instances or elastic container instances that are automatically created into the **Protected** state, find the **Auto Created** list.
        
    -   If you want to put ECS instances or elastic container instances that are manually added into the **Protected** state, find the **Manually Added** list.
        
7.  Manually put instances into the **Protected** state or move instances out of the **Protected** state.
    
    ## Manually put instances into the Protected state
    
    1.  Use one of the following methods to put ECS instances or elastic container instances into the **Protected** state:
        
        -   If you want to put a single ECS instance or elastic container instance into the Protected state, find the ECS instance or elastic container instance and click **Switch to Protected** in the **Actions** column.
            
        -   If you want to put multiple ECS instances or elastic container instances into the **Protected** state at the same time, select the ECS instances or elastic container instances and click **Switch to Protected** in the lower part of the page.
            
    2.  Click **OK**.
        
    
    ## Manually move instances out of the Protected state
    
    1.  Use one of the following methods to move ECS instances or elastic container instances out of the **Protected** state:
        
        -   If you want to move a single ECS instance or elastic container instance out of the **Protected** state, find the ECS instance or elastic container instance and click **Remove from Protected** in the **Actions** column.
            
        -   If you want to move multiple ECS instances or elastic container instances out of the P**rotected** state at the same time, select the ECS instances or elastic container instances and click **Remove from Protected** in the lower part of the page.
            
    2.  Click **OK**.
        
    

## Manually put instances into the Stopped state.

You can put only ECS instances that reside in virtual private clouds (VPCs) into the Stopped state. If the **Instance Reclaim Mode** parameter of your scaling group is set to **Economical Mode** and the ECS instances in your scaling group are created by Auto Scaling, you can manually put the ECS instances into the **Stopped** state. During scale-outs, Auto Scaling preferentially starts the ECS instances that are in the **Stopped** state.

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Scaling Groups**.
    
3.  In the top navigation bar, select a region.
    
4.  Find the scaling group whose instances you want to operate and click **Details** in the **Actions** column.
    
5.  In the upper part of the details page, click the **Instance Management** tab.
    
6.  Find the **Auto Created** list.
    
7.  Find the ECS instance that you want to put into the **Stopped** state and choose ![more](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2245962161/p168903.png) > **Switch to Stopped** in the **Actions** column.
    
8.  In the **Delete Scaling Group** message, click OK.
    

## **Manually remove managed instances from scaling groups**

You can manually remove managed instances from only scaling groups of the ECS type. If you do not use scaling groups to manage the lifecycles of managed instances, you must manually remove managed instances from scaling groups. Managed instances are not released after you remove them from scaling groups.

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Scaling Groups**.
    
3.  In the top navigation bar, select a region.
    
4.  Find the scaling group whose instances you want to operate and click **Details** in the **Actions** column.
    
5.  In the upper part of the details page, click the **Instance Management** tab.
    
6.  Find the **Managed Instance** list.
    
7.  Use one of the following methods to remove managed instances from the scaling group:
    
    -   If you want to remove a single instance, find the managed instance that you want to remove, and click **Remove from Scaling Group** in the **Actions** column.
        
    -   If you want to remove multiple managed instances from the scaling group at the same time, select the managed instances and click **Remove from Scaling Group** in the lower part of the managed instance list.
        
8.  In the dialog box that appears, select **Modify Expected Number of Instances** and click **OK**. By default, **Modify Expected Number of Instances** is selected.
    
    -   If you select **Modify Expected Number of Instances**, the expected number of instances decreases after you remove a specific number of instances from the scaling group.
        
    -   If you do not select **Modify Expected Number of Instances**, the expected number of instances does not decrease after you remove a specific number of instances from the scaling group.
