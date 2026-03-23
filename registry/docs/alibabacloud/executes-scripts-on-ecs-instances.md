This topic describes how to combine the lifecycle hook feature of Auto Scaling and a CloudOps Orchestration Service (OOS) template to automate the execution of scripts on Elastic Compute Service (ECS) instances during scaling events.

## Prerequisites

-   A scaling group is created and is in the **Enabled** state.
    
-   A script is prepared. In this example, a script is executed to automatically install Apache on a Linux ECS instance (CentOS 7.6).
    
-   A RAM role is created for CloudOps Orchestration Service (OOS). The trusted entity of the RAM role must be **Alibaba Cloud Service**, the trusted service must be **CloudOps Orchestration Service**, and the RAM role must have the permissions to perform operations on the OOS template. For more information, see [Use RAM to grant permissions to OOS](/help/en/oos/use-cases/grant-ram-permissions-on-oos#topic1075).
    
    **Note**
    
    In this topic, the OOSServiceRole RAM role is used as an example. You can also use other roles.
    

## Procedure

In this example, a public OOS template named ACS-ESS-LifeCycleRunCommand is used to show how to automate the execution of the prepared script on an ECS instance during a scale-out event. Perform the following steps:

### **Step 1: Grant a RAM role the permissions on OOS**

You must have the permissions to execute OOS templates. The ACS-ESS-LifeCycleRunCommand template includes ECS and Auto Scaling resources that are required to perform O&M tasks.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  Create a policy.
    
    1.  In the left-side navigation pane, choose **Permissions** > **Policies**.
        
    2.  Click **Create Policy**.
        
    3.  On the **Create Policy** page, click the **JSON** tab, configure parameters based on your business requirements, and then click **OK**.
        
        The following table describes the settings that are used in this example. Any parameters not covered in the following table default to their predefined settings.
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        Enter ESSHookPolicyForRunCommand.
        
        **Policy document**
        
        Enter the following content:
        
        ```
        {
            "Version": "1",
            "Statement": [
                {
                    "Action": [
                        "ecs:DescribeInvocationResults",
                        "ecs:DescribeInvocations",
                        "ecs:RunCommand"
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
        
3.  Attach the policy to the OOSServiceRole RAM role.
    
    1.  In the left-side navigation pane, choose **Identities** > **Roles**.
        
    2.  Find **OOSServiceRole** and click **Grant Permission** in the **Actions** column.
        
        Add the required permissions for the **OOSServiceRole** RAM role that is assumed by OOS to complete the authorization.
        
    3.  In the **Grant Permission** panel, configure **Resource Scope** and **Policy**. After you complete the configuration, click **Grant permissions**.
        
        The following table describes the settings that are used in this example. Any parameters not covered in the following table default to their predefined settings.
        
        **Parameter**
        
        **Description**
        
        **Resource Scope**
        
        Set the value to **Account**.
        
        **Policy**
        
        Select the following custom policy: ESSHookPolicyForRunCommand policy.
        

### **Step 2: Create a lifecycle hook for scale-out purposes and trigger a scale-out event**

When you create a lifecycle hook for scale-out purposes, you must set **Send Notification When Lifecycle Hook Takes Effect** to **OOS Template**. This way, the automatic execution of the prepared script can be triggered on the desired ECS instance during the scale-out event.

1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Scaling Groups**.
    
3.  In the top navigation bar, select the region where Auto Scaling is activated.
    
4.  Find a scaling group and use one of the following methods to go to the scaling group details page:
    
    -   Click the ID of the scaling group in the **Scaling Group Name/ID** column.
        
    -   Click **Details** in the **Actions** column.
        
5.  Create a lifecycle hook.
    
    1.  In the upper part of the scaling group details page, click the **Lifecycle Hook** tab.
        
    2.  Click **Create Lifecycle Hook**.
        
    3.  Configure parameters based on your business requirements and click **OK**.
        
        The following table describes the settings that are used in this example. Any parameters not covered in the following table default to their predefined settings.
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        Enter ESSHookForRunCommand.
        
        **Scaling Activity**
        
        Select **Scale-out Event**.
        
        **Timeout Period**
        
        Configure Timeout Period based on your business requirements. In this example, set the value to 300. Unit: seconds.
        
        **Note**
        
        The timeout period is the period of time during which you can perform custom operations on instances. If the timeout period is shorter than the period of time that is required to perform custom operations, the operations may fail. We recommend that you estimate the period of time that is required to perform custom operations on instances and configure Timeout Period based on your estimations.
        
        **Default Execution Policy**
        
        Select **Continue**.
        
        **Send Notification When Lifecycle Hook Takes Effect**
        
        Configure the following parameters for the template:
        
        -   Select **OOS Template**.
            
        -   Select **Public Templates**.
            
        -   Select **ACS-ESS-LifeCycleRunCommand**.
            
        
        In the ACS-ESS-LifeCycleRunCommand public template, you must also configure the following parameters:
        
        -   **commandType**: Select RunShellScript.
            
        -   **commandContent**: Enter the script that you want to execute on the desired ECS instance. In this example, a script is executed to automatically install Apache on the ECS instance.
            
            ```
            yum install -y httpd
            systemctl start httpd
            systemctl enable httpd
            ```
            
        -   **OOSAssumeRole**: Select OOSServiceRole. In [Step 1](#section-dxj-plb-y47), OOSServiceRole is granted the permissions on the ECS and Auto Scaling resources. OOS obtains the preceding permissions after it assumes the RAM role.
            
        
6.  Trigger a scale-out event.
    
    In this example, a scale-out event is manually triggered by executing a scaling rule. You can also trigger scale-out events by using scheduled or event-triggered tasks.
    
    **Note**
    
    If scaling events are triggered when you manually execute scaling rules, lifecycle hooks take effect. However, lifecycle hooks do not take effect when you manually add or remove ECS instances to or from a scaling group.
    
    1.  In the upper part of the page that appears, click the **Scaling Rules and Event-triggered Tasks** tab.
        
    2.  On the **Scaling Rules** tab, click **Create Scaling Rule**.
        
    3.  In the **Create Scaling Rule dialog** box, configure parameters based on your business requirements and click **OK**.
        
        The following table describes the settings that are used in this example. Any parameters not covered in the following table default to their predefined settings.
        
        **Parameter**
        
        **Description**
        
        **Rule Name**
        
        Enter Add1.
        
        **Rule Type**
        
        Select **Simple Scaling Rule**.
        
        **Operation**
        
        Set the value to Add 1 Instances.
        
    4.  On the **Scaling Rules** tab, find the Add1 scaling rule and click **Execute** in the **Actions** column.
        
    5.  In the **Execute Scaling Rule** message, click **OK**.
        
    
    After the scaling rule is executed, Auto Scaling adds one ECS instance to the scaling group. However, the ECS instance enters the Pending Add state because of the ESSHookForRunCommand lifecycle hook that is in effect. During the timeout period of the lifecycle hook, Auto Scaling notifies OOS to execute the O&M tasks that are defined in the ACS-ESS-LifeCycleRunCommand public template.
    
7.  Check whether the automatically created ECS instance meets your expectations.
    
    1.  In the upper part of the scaling group details page, click the **Instances** tab.
        
    2.  Find the automatically created ECS instance and click its ID in the **ECS Instance ID/Name** column.
        
    3.  In the left-side navigation pane, click **Cloud Assistant**.
        
    4.  In the upper-right corner, click **Create/Run Command**.
        
    5.  Run the following command to view the Apache installation result:
        
        For more information, see [Create and run a command](/help/en/ecs/user-guide/use-the-immediate-execution-feature#task-2406329). Command content:
        
        ```
        systemctl status httpd
        ```
        
        -   On the **Command Execution Result** tab, you can check the command execution result. If Apache is installed on the ECS instance and enters the **Active** state, the **ACS-ESS-LifeCycleRunCommand** public template takes effect.
            
        -   If the ECS instance is created but Apache is not installed on the ECS instance, you can go to the OOS console to check the execution of the O&M tasks. For more information, see [Step 3: (Optional) View the OOS execution](#section-zs9-v0i-sor).
            
        

### **Step 3: (Optional) View the OOS execution**

1.  Log on to the OOS console.
    
2.  In the left-side navigation pane, choose **Automated Tasks** > **Task Execution Management**.
    
3.  Find the execution task by time and click **Details** in the **Actions** column.
    
4.  On the execution details page that appears, view the related information.
    
    For example, in the **Basic Information** section, you can view the execution ID and status. In the **Execution Steps and Results** section, you can click a task node to view the execution details. For more information, see [View the details of an execution](/help/en/oos/user-guide/view-the-details-of-an-execution#topic248).
    
    **Note**
    
    If the execution fails, an error message is displayed on the execution details page.
    

## Common errors and troubleshooting

If you fail to execute an O&M task, troubleshoot the issue based on the error message in the execution result. The following section describes the common error messages and solutions:

-   Error message: Forbidden.Unauthorized message: A required authorization for the specified action is not supplied.
    
    Solution: Check whether the required permissions, such as the sample permissions in Step 1, are granted to the OOSServiceRole RAM role. Before OOS can manage the resources that are declared in the OOS template, you must grant the required permissions to the RAM role.
    
-   Error message: Forbidden.RAM message: User not authorized to operate on the specified resource, or this API doesn't support RAM.
    
    Solution: Check whether the required permissions, such as the sample permissions in Step 1, are granted to the OOSServiceRole RAM role. Before OOS can manage the resources that are declared in the OOS template, you must grant the required permissions to the RAM role.
    
-   Error message: LifecycleHookIdAndLifecycleActionToken.Invalid message: The specified lifecycleActionToken and lifecycleActionId you provided does not match any in process lifecycle action.
    
    Solution: Check whether the timeout period of the lifecycle hook is sufficient for the O&M task specified in the OOS template to complete.
    

## References

If you want to execute scripts on ECS instances that are already added to a scaling group, you can use the rolling update feature. For more information, see the following topics:

-   [Rolling update](/help/en/auto-scaling/user-guide/rolling-update#task-2472587)
    
-   [Update images and execute scripts](/help/en/auto-scaling/user-guide/update-images-and-execute-scripts#task-2472587)
