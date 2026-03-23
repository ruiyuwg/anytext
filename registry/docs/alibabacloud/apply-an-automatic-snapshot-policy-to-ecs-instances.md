This topic describes how to use the lifecycle hook feature together with a CloudOps Orchestration Service (OOS) template to put Elastic Compute Service (ECS) instances into a Pending state and apply an automatic snapshot policy to the instances.

## Prerequisites

-   A scaling group is created. The scaling group is in the **Enabled** state. For information about how to create a scaling group, see [Manage scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups).
    
-   An automatic snapshot policy is created. For information about how to create an automatic snapshot policy, see [Create an automatic snapshot policy](/help/en/ecs/user-guide/create-an-automatic-snapshot-policy-1).
    
-   A Resource Access Management (RAM) role is created for OOS. The trusted entity of the RAM role must be **Alibaba Cloud Service**, the trusted service must be **CloudOps Orchestration Service**, and the RAM role must have the permissions to perform operations on the OOS template. For more information, see [Use RAM to grant permissions to OOS](/help/en/oos/use-cases/grant-ram-permissions-on-oos#topic1075).
    
    **Note**
    
    In this topic, the OOSServiceRole RAM role is used as an example. You can also use other roles.
    

## Background information

You can use automatic snapshot policies to create snapshots for ECS instances on a regular basis. This enhances data security and fault tolerance. You cannot specify an automatic snapshot policy in a scaling configuration when you create the scaling configuration. However, you can use the lifecycle hook feature of Auto Scaling together with an OOS template to automatically apply an automatic snapshot policy to a group of ECS instances. This is more efficient than manually applying an automatic snapshot policy to ECS instances.

**Note**

Automatic snapshot policies enable the scheduled creation of snapshots at preconfigured points in time to safeguard data integrity of system disks and data disks. For more information, see [Automatic snapshot policy](/help/en/ecs/user-guide/automatically-create-snapshots/).

## Procedure

In this topic, the `ACS-ESS-LifeCycleApplyAutoSnapshotPolicy` public OOS template is used as an example to show how to automatically apply an automatic snapshot policy to a group of ECS instances during a scale-out event. To improve security, perform the following steps:

### **Step 1: Grant a RAM role the permissions on OOS**

You must have the permissions to execute OOS templates. The `ACS-ESS-LifeCycleApplyAutoSnapshotPolicy` public OOS template defines the ECS and Auto Scaling resources required to perform O&M operations.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  Create a policy.
    
    1.  In the left-side navigation pane, choose **Permissions** > **Policies**.
        
    2.  On the **Policies** page, click **Create Policy**.
        
    3.  On the **Create Policy** page, click the **JSON** tab, enter the policy content, and then click **OK**.
        
        Sample policy content:
        
        ```
        {
            "Version": "1",
            "Statement": [
                {
                    "Action": [
                        "ecs:DescribeDisks",
                        "ecs:ApplyAutoSnapshotPolicy",
                        "ecs:DescribeInstances"
                    ],
                    "Resource": "*",
                    "Effect": "Allow"
                },
                {
                    "Action": [
                        "ess:CompleteLifecycleAction"
                    ],
                    "Resource": "*",
                    "Effect": "Allow"
                }
            ]
        }
        ```
        
    4.  In the **Create Policy** dialog box, enter a policy name and description.
        
        In this example, set the Name parameter to `ESSHookPolicyForApplyAutoSnapshotPolicy`.
        
        **Note**
        
        If you want to modify the policy content, click **Cancel** to go back to the JSON tab.
        
    5.  Click **OK**.
        
3.  Attach the policy to the OOSServiceRole RAM role.
    
    1.  In the left-side navigation pane, choose **Identities** > **Roles**.
        
    2.  Find the OOSServiceRole RAM role and click **Grant Permission** in the **Actions** column.
        
        Add the required permissions for the OOSServiceRole RAM role that is assumed by OOS to complete the authorization.
        
    3.  In the **Grant Permission** panel, configure parameters based on your business requirements and click **Grant permissions**.
        
        The following table describes the parameter settings that are used in this example. For parameters that are not included in the following table, use the default settings.
        
        **Parameter**
        
        **Description**
        
        **Resource Scope**
        
        Set the value to **Account**.
        
        **Policy**
        
        Select the `ESSHookPolicyForApplyAutoSnapshotPolicy` policy.
        

### **Step 2: Create a lifecycle hook for scale-out purposes and trigger a scale-out event**

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Scaling Groups**.
    
3.  In the top navigation bar, select a region.
    
4.  Find the desired scaling group and use one of the following methods to open the scaling group details page.
    
    -   Click the ID of the scaling group in the **Scaling Group Name/ID** column.
        
    -   Click **Details** in the **Actions** column.
        
5.  Create a lifecycle hook.
    
    1.  In the upper part of the details page, click the **Lifecycle Hook** tab.
        
    2.  Click **Create Lifecycle Hook**.
        
    3.  Configure parameters based on your business requirements and click **OK**.
        
        The following table describes the parameters that are used in this example. For parameters that are not described in the table, use the default settings.
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        Enter **ESSHookForApplyAutoSnapshotPolicy**.
        
        **Scaling Activity**
        
        Select **Scale-out Event**.
        
        **Timeout Period**
        
        Configure the Timeout Period parameter based on your business requirements. In this example, set the Timeout Period parameter to 300.
        
        **Note**
        
        The timeout period is the period of time during which you can perform custom operations on instances. If the timeout period is shorter than the period of time that is required to perform custom operations, the operations may fail. We recommend that you estimate the period of time that is required to perform custom operations on instances and configure Timeout Period based on your estimates.
        
        **Default Execution Policy**
        
        Select **Continue**.
        
        **Send Notification When Lifecycle Hook Takes Effect**
        
        In this example, perform the following operations:
        
        -   Select **OOS Template**.
            
        -   Select **Public Templates**.
            
        -   Select `ACS-ESS-LifeCycleApplyAutoSnapshotPolicy`.
            
        
        Configure the following parameters in the `ACS-ESS-LifeCycleApplyAutoSnapshotPolicy` public template:
        
        -   **AutoSnapshotPolicyId**: Enter the ID of the automatic snapshot policy.
            
        -   **OOSAssumeRole**: Select OOSServiceRole. In [Step 1](#d9b8c6055dils), permissions on ECS and Auto Scaling resources are granted to the OOSServiceRole RAM role. OOS can obtain the permissions after it assumes the RAM role.
            
        
6.  Trigger a scale-out event.
    
    In this example, a scale-out event is manually triggered by executing a scaling rule. You can also trigger scale-out events by using scheduled or event-triggered tasks.
    
    **Note**
    
    If scaling events are triggered when you manually execute scaling rules, lifecycle hooks take effect. However, lifecycle hooks do not take effect if you manually add or remove ECS instances to or from a scaling group.
    
    1.  In the upper part of the page that appears, click the **Scaling Rules and Event-triggered Tasks** tab.
        
    2.  On the **Scaling Rules** tab, click **Create Scaling Rule**.
        
    3.  In the Create Scaling Rule dialog box, configure parameters based on your business requirements and click **OK**.
        
        The following table describes the parameter settings that are used in this example. For parameters that are not included in the following table, use the default settings.
        
        **Parameter**
        
        **Description**
        
        **Rule Name**
        
        Enter **Add1**.
        
        **Rule Type**
        
        Select **Simple Scaling Rule**.
        
        **Operation**
        
        Set the value to **Add 1 Instances**.
        
    4.  On the **Scaling Rules** tab, find the **Add1** scaling rule and click **Execute** in the **Actions** column.
        
    5.  In the **Execute Scaling Rule** message, click **OK**.
        
    
    After Add1 is executed, Auto Scaling attempts to add one ECS instance to the scaling group. The `ESSHookForApplyAutoSnapshotPolicy` lifecycle hook causes the ECS instance to enter the Pending Add state. During this period, Auto Scaling notifies OOS to execute the `ACS-ESS-LifeCycleApplyAutoSnapshotPolicy` template and complete the defined O&M operations.
    
7.  Check whether the automatically created ECS instance meets your expectations.
    
    1.  In the upper part of the details page, click the **Instances** tab.
        
    2.  Find the automatically created ECS instance and click the instance ID in the **ECS Instance ID/Name** column.
        
    3.  On the instance details page, click the **Block Storage (Disks)** tab.
        
    4.  Find the desired cloud disk and click **Configure Automatic Snapshot Policy** in the **Actions** column.
        
        -   In the following figure, **Automatic Snapshot Policy** is turned on. The applied snapshot policy is the policy specified in the `ACS-ESS-LifeCycleApplyAutoSnapshotPolicy` public template when you created the lifecycle hook. This indicates that the automatically created ECS instance meets the expectations.![SCR-20240710-lpiu](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4357830471/p819356.png)
            
        -   If the ECS instance is created but has no automatic snapshot policy, go to the OOS console to check the execution of the O&M operations defined in the public template.
            
        

### **(Optional) Step 3: View the execution status of the OOS template**

1.  Log on to the [OOS console](https://oos.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Automated Task** > **Task Execution Management**.
    
3.  Find the execution task by time and click **Details** in the **Actions** column.
    
4.  On the execution details page that appears, view the related information.
    
    For example, you can view the execution ID and status in the **Basic Information** section. You can also click a task node in the **Execution Steps and Results** section to view the execution details. For more information, see [View the details of an execution](/help/en/oos/user-guide/view-the-details-of-an-execution#topic248).
    
    **Note**
    
    If the execution fails, an error message is displayed in the **Execution Result** section.
    

## FAQ

If you fail to execute an O&M task, troubleshoot the issue based on the error message in the execution result. For more information, see [FAQ](/help/en/oos/support/faq).

The following table describes the common error message.

**Error message**

**Cause**

**Solution**

Forbidden.Unauthorized message: A required authorization for the specified action is not supplied.

You have not authorized Auto Scaling to perform the current action.

Check whether the OOSServiceRole RAM role has the required permissions.

Forbidden.RAM message: User not authorized to operate on the specified resource, or this API doesn't support RAM.

The RAM user or RAM role does not have the permissions to operate the corresponding resources.

Check whether the OOSServiceRole RAM role has the required permissions. For example, you can grant the OOS permissions to the RAM role. Before OOS can manage the resources that are declared in the OOS template, you must grant the required permissions to the RAM role.

LifecycleHookIdAndLifecycleActionToken.Invalid message: The specified lifecycleActionToken and lifecycleActionId you provided does not match any in process lifecycle action.

The ongoing lifecycle hook action has ended or been stopped.

Assess the timeout period of the lifecycle hook to make sure that the O&M tasks specified in the OOS template can be complete within the allotted time limit.

## **References**

You can also use the lifecycle hook feature of Auto Scaling together with an OOS template to enable automatic execution of scripts on ECS instances during a scale-in event. For more information, see [Automatically execute scripts on ECS instances](/help/en/auto-scaling/use-cases/executes-scripts-on-ecs-instances).
