A rolling upgrade is a batch operation that updates the configurations of Elastic Compute Service (ECS) instances or Elastic Container Instances (ECI) in a scaling group. You can use the rolling upgrade feature of Auto Scaling to update images, run scripts, or install CloudOps Orchestration Service (OOS) packages on instances that are in the **In Service** state within a scaling group.

## How it works

When you create and start a rolling upgrade task, Auto Scaling carries out the following process:

1.  **Pause scaling processes**. The scaling group suspends all scaling activities to keep the group composition stable during the upgrade.
    
2.  **Divide instances into batches**. The instances in the **In Service** state are divided into the number of batches you specify. Each batch contains at least one instance.
    
3.  **Process each batch in sequence**. For every batch, Auto Scaling moves the instances into the **Standby** state, applies the update (image replacement, script execution, or OOS package installation), and then restores the instances to the **In Service** state.
    
    **Important**
    
    If the scaling group is associated with a Server Load Balancer (SLB) instance, the weight of each instance in the **Standby** state is set to 0, which means the instance temporarily stops receiving service traffic.
    
4.  **Apply the suspension policy**. Depending on the suspension policy you choose, the task may pause after the first batch or after every batch so that you can verify results before the next batch proceeds.
    
5.  **Resume scaling processes**. After all batches complete successfully, the scaling group automatically resumes its scaling processes. If you manually paused scaling processes before the upgrade, they remain paused after the upgrade completes.
    

## Prerequisites

-   To update images for ECS or ECI instances in a scaling group, prepare the required images before you start.
    
-   To run scripts on ECS or ECI instances in a scaling group, prepare the required scripts before you start.
    
-   To install OOS packages on ECS or ECI instances in a scaling group, you must have already created the packages in OOS. For more information, see [Manage custom extensions in batches](/help/en/oos/getting-started/manage-custom-software-on-multiple-ecs-instances).
    

## Task types

Rolling upgrades support three task types:

**Task type**

**Description**

**Instance impact**

**Image update**

Replaces the operating system image on ECS or ECI instances. Suitable for uniformly updating the OS across all instances in the **In Service** state within a scaling group.

The instance is **restarted** during the image replacement.

**Script execution**

Runs one or more operations and maintenance (O&M) commands through Cloud Assistant. For example, you can check disk space usage, install software such as Apache, or deploy business code.

The instance is **not stopped** during script execution.

**Install OOS package**

Installs or uninstalls software in batches by using an OOS package.

Depends on the package content.

### How an image update affects the instance configuration source

When you run an image update task, the effect on the scaling group's instance configuration source depends on its type:

-   **Scaling configuration**: The image in the active scaling configuration is automatically updated to the new image. Images in other inactive scaling configurations are not updated.
    
-   **Launch template**: The image in the launch template is **not** updated. You must update the image in the launch template yourself.
    

> Based on your scenario, you can choose to update images by using a rolling upgrade or by using the automatic image update feature in scaling configurations. For more information, see [Differences between rolling upgrades and automatic image updates](#section-nb4-cx4-66l).

## Create and run a rolling upgrade task

### Constraints

Before you create and run a rolling upgrade task, note the following constraints:

-   This feature is available only for scaling groups in regions that support CloudOps Orchestration Service (OOS).
    
-   The scaling group must not have any scaling activities in progress.
    
-   Only one rolling upgrade task can run at a time.
    

### Procedure

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Scaling Groups**.
    
3.  In the top navigation bar, select a region.
    
4.  Find the desired scaling group and use one of the following methods to open the scaling group details page:
    
    -   Click the ID of the scaling group in the **Scaling Group Name/ID** column.
        
    -   Click **Details** in the **Actions** column.
        
5.  In the upper part of the details page, click the **Instance Refresh** tab, and then scroll down to the **Rolling Update** section.
    
6.  Click **Create Execution Task**.
    
7.  In the **Create Execution Task** dialog box, configure the parameters described in the following table, and then click **Create Task**.
    
    **Configuration item**
    
    **Description**
    
    **Task Description**
    
    Enter a description for the task for future reference.
    
    **Task Type**
    
    Select one of the following task types:
    
    **Update Image**: Replaces the current image of an ECS or ECI instance. You can select a public image, custom image, shared image, or Marketplace image. The instance is restarted during the replacement process. Configure the following fields:
    
    \- **Image for Update**: The image to use for the update task.
    
    \- **Image for Rollback**: The default image to use if you create a rollback task later. When you create a rollback task, this image is selected by default, but you can select a different image.
    
    **Script Execution**: Runs a script by using Cloud Assistant. The instance is not stopped during script execution. Configure the following fields:
    
    \- **Script Type**: Select one of the following script types:
    
    \- **Linux Shell**: For example, the `hostname` command to display the hostname, or the `echo hello` command to print "hello".
    
    \- **Windows Bat**: For example, the `dir c:\` command to display directory files.
    
    \- **Windows PowerShell**: For example, the `Get-Services` command to display services.
    
    \- **Script for Execution**: The script to run for the update task.
    
    \- **Script for Rollback**: The default script to use if you create a rollback task later. When you create a rollback task, this script is entered by default, but you can edit the script.
    
    **Install OOS Package**: Select the software name and version.
    
    **Execution Batch**
    
    The number of batches for the task. When the scaling group executes the task, it divides the ECS or ECI instances into the specified number of batches. Each batch must include at least one instance. For example, if a scaling group contains 10 ECS instances in the **In Service** state and you set this parameter to 2, the task is executed in two batches with five instances per batch.
    
    **Suspension Policy**
    
    Select one of the following policies:
    
    \- **Without Suspension**: The task runs through all batches without pausing.
    
    \- **Suspend First Batch**: After the first batch completes, the task pauses. You must manually resume the task. Subsequent batches are not paused.
    
    \- **Suspend Each Batch**: After each batch completes, the task pauses. You must manually resume the task each time.
    
    **Advanced Settings**
    
    Optional. Available only when **Task Type** is set to **Update Image**. Specifies the maximum number of errors allowed before the rolling upgrade task stops. If you leave this blank, the default value is 0, which means the entire task fails if a single error occurs.
    
8.  Review the impacts of the rolling upgrade task, and then click **OK**.
    

After you click **OK**, the rolling upgrade task starts automatically. The task has the following impacts:

-   The scaling group pauses its processes, including scaling activities, and does not respond to them during the rolling upgrade. After the upgrade completes, the processes are automatically resumed. If you manually paused the scaling processes before the upgrade, they remain paused to maintain the state of the scaling group.
    
-   The ECS or ECI instances are moved to the **Standby** state in batches. After each batch finishes execution, the instances in that batch are restored to the **In Service** state.
    

**Important**

If the scaling group is associated with an SLB instance, the weight of an ECS or ECI instance in the **Standby** state is set to 0. As a result, the instance stops receiving service traffic.

## Manage a rolling upgrade task

After a rolling upgrade task starts, you can manage it based on its execution status.

### Continue a paused task

If the suspension policy is **Suspend First Batch** or **Suspend Each Batch**, the task enters the **Pending (Batch Suspension)** state one or more times. After you confirm that the upgraded instances meet your expectations, continue the task:

1.  In the **Actions** column, click **Details**.
    
2.  On the task details page, click **Continue** at the bottom of the page.
    
3.  In the **Continue Execution Task** dialog box, click **OK**.
    

### Handle failed instances

If the rolling upgrade task fails on one or more instances, the task enters the **Pending (Failure Paused)** state. You can then handle each failed instance:

1.  In the **Actions** column, click **Details**.
    
2.  Find the ECS or ECI instance whose execution status is **Failed**. In the **Actions** column, click one of the following:
    
    -   **Retry**: Retries the rolling upgrade operation on the instance.
        
    -   **Skip**: Skips the failed instance and proceeds to the next one. The execution status of the skipped instance is displayed as **Success**.
        
        **Important**
        
        You must manually remove the skipped instance from the **Standby** state.
        
    -   **Cancel**: Cancels the operation on the failed instance and proceeds to the next one. The execution status of the canceled instance is displayed as **Failed**.
        

### Cancel the entire task

If the rolling upgrade task no longer meets your business requirements, you can cancel it. In the **Actions** column, choose the **More** icon > **Cancel**.

**Important**

After you cancel the task, you must manually resume the paused scaling group processes and remove the instances in the current batch that are being processed or have failed from the **Standby** state.

### Roll back the task

You can roll back a task that is in the **Pending (Batch Suspension)** or **Pending (Failure Paused)** state, or the most recently completed task. For more information, see [Roll back a completed rolling upgrade task](#section-361-yxj-08r).

## Roll back a completed rolling upgrade task

You can roll back a rolling upgrade task that is pending (batch suspension or failure paused) or the most recently completed task to restore instance configurations if an issue occurs. If a rolling upgrade task is in the **Pending** state, the task is automatically canceled before the rollback task is executed. The instances that have already been updated are then rolled back.

**Important**

You can only roll back a rolling upgrade task. You cannot roll back a rollback task.

### Procedure

1.  On the execution task list page, find the task that you want to roll back. In the **Actions** column, click **Rollback**.
    
2.  In the **Create Rollback Task** dialog box, configure the parameters described in the following table.
    
    **Configuration item**
    
    **Description**
    
    **Task Description**
    
    Enter a description for the rollback task for future reference.
    
    **Task Type**
    
    This field is the same as the task type of the original task and cannot be edited. The default values are populated from the rollback configuration you provided when you created the original task:
    
    \- If the task type is **Update Image**, the image you specified for rollback when you created the rolling upgrade task is automatically selected. You can select a different image.
    
    \- If the task type is **Script Execution**, the script you specified for rollback when you created the rolling upgrade task is automatically entered. You can edit the script.
    
    \- If the task type is **Install OOS Package**, the OOS package version you selected when you created the rolling upgrade task is automatically selected. You can select a different version, but you cannot select a different package.
    
    **Execution Batch**
    
    The number of batches for the task. When the scaling group executes the task, it divides the ECS or ECI instances into the specified number of batches. Each batch must include at least one instance. For example, if a scaling group contains 10 instances in the **In Service** state and you set this parameter to 2, the task is executed in two batches with five instances per batch.
    
    **Suspension Policy**
    
    Select one of the following policies:
    
    \- **Without Suspension**: The task runs through all batches without pausing.
    
    \- **Suspend First Batch**: After the first batch completes, the task pauses. You must manually resume the task.
    
    \- **Suspend Each Batch**: After each batch completes, the task pauses. You must manually resume the task each time.
    
    **Advanced Settings**
    
    Optional. Available only when **Task Type** is **Update Image**. Specifies the maximum number of errors allowed before the rollback task stops.
    
3.  Click **Create Task**.
    
4.  Review the impacts of the rollback task, and then click **OK**.
    

The rollback task starts automatically after you click **OK**.

## View rolling upgrade task details

You can view information about a rolling upgrade task and perform operations such as retry and skip on individual ECS or ECI instances.

1.  On the execution task list page, find the task that you want to view. In the **Actions** column, click **Details**.
    
2.  View the basic information of the task. The basic task information includes the task status and task type. If the task type is **Script Execution**, click **Script Details** to view the script content.
    
3.  View the list of executed instances. The list of executed instances shows instances in various execution states: The differences between retry, skip, and cancel are as follows:
    
    -   **Retry**: Retries the rolling upgrade operation on the instance.
        
    -   **Skip**: Proceeds to the next instance. The execution status of the current instance changes to **Success**.
        
        **Important**
        
        You must manually remove the skipped ECS or ECI instance from the **Standby** state.
        
    -   **Cancel**: Proceeds to the next instance. The execution status of the current instance changes to **Failed**.
        

## Configure monitoring and alerts for rolling upgrades

You can configure independent monitoring and alerts for rolling upgrade tasks based on the requirements of different scaling groups. This lets you promptly handle rolling upgrade issues by viewing alert details.

1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Event Center** > **System Event**.
    
3.  On the **System Event** page, set the filter conditions and click **Search** to query for rolling upgrade failure events for a specified scaling group. For example, set the event level to **Critical** and enter the following keywords:
    
    > Replace `${your_scaling_group_id}` with your actual scaling group ID, such as `asg-bp180y8dj5eku2j4****`.
    
    ```
       (ACS-ESS-RollingUpdateByConfigureOOSPackage or ACS-ESS-RollingUpdateByReplaceSystemDiskInScalingGroup or ACS-ESS-RollingUpdateByRunCommandInScalingGroup or ACS-ESS-RollingUpdateByUpdateContainerGroup) and ${your_scaling_group_id}
    ```
    
4.  Click **Save as Alert Rule**.
    
5.  In the **Create/Modify Event Alert** panel, configure the alert parameters and click **OK**.
    
6.  In the navigation pane on the left, choose **Alerting** > **Alert History**. On the alert history page, you can view the specific alert details.
    

## Differences between rolling upgrades and automatic image updates in scaling configurations

**Aspect**

**Automatic image updates in scaling configurations**

**Rolling upgrades**

**Use case**

Scenarios where applications are frequently released.

Scenarios where you need to update the configurations of ECS or ECI instances in batches.

**Supported instance types**

ECS instances only.

ECS instances and ECI instances.

**How it works**

Creates a custom image from an original ECS instance and updates the scaling configuration so that all new instances use the new image version.

Gradually upgrades existing instances that are in the **In Service** state to a new version within the scaling group.

**Region requirement**

No additional requirement.

Available only in regions that support OOS.

For more information about automatic image updates, see [Automatically update the image in a scaling configuration](/help/en/auto-scaling/user-guide/update-images-in-scaling-configurations#section-26p-tgt-wlx).

## References

-   You can use the rolling upgrade feature of Auto Scaling to update images and run scripts for ECS instances in a scaling group with a single click, which improves management efficiency. For more information, see [Update images and run scripts with one click](/help/en/auto-scaling/user-guide/update-images-and-execute-scripts#task-2472587).
    
-   Alibaba Cloud CLI is a management tool built on Alibaba Cloud OpenAPI. You can use Alibaba Cloud CLI to call OpenAPI operations to perform rolling upgrade tasks. This method is flexible and extensible. For more information, see [Use Alibaba Cloud CLI to perform a rolling upgrade task](/help/en/auto-scaling/developer-reference/use-alibaba-cloud-cli-to-execute-rolling-update-tasks#task-1944459).
    
-   You can use the Alibaba Cloud SDK for Python to call the API of CloudOps Orchestration Service (OOS) to perform rolling upgrade tasks. This lets you complete execution tasks without complex programming. For more information, see [Use the SDK for Python to perform a rolling upgrade task](/help/en/auto-scaling/developer-reference/use-alibaba-cloud-sdk-for-python-to-execute-rolling-update-tasks#task-1950319).
