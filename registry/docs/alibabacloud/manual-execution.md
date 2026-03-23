You can execute a public template provided by Operation Orchestration Service (OOS) or a custom template that you create.

If you want to manually execute a specified task in the template, you can select the manual execution mode when executing the template. This topic describes how to execute a template in the manual execution mode in the console.

1.  Log on to the [Elastic Compute Service (ECS) console](https://ecs.console.alibabacloud.com/#/automation/region). Choose Maintenance & Monitoring > Operation Orchestration Service in the left-side navigation pane.
    
2.  Click the **Public Templates** tab, find the public template that you want to execute, and then click **Create Execution**.
    
3.  Set Execution Mode to **Manual.**
    
4.  Click **Next Step: Parameter Settings**.
    
5.  Set the parameters required for the template. To ensure that the template can be successfully executed, follow these steps to check the authorization policies of the Resource Access Management (RAM) role that OOS will use:
    
    Click **View Authorization Policies**. Then, log on to the [RAM console](https://ram.console.alibabacloud.com/roles). Verify that the RAM role to be used by OOS exists and that this RAM role has the permissions required for template execution. That is, the permissions of this role are not fewer than the result of **View Authorization Policies**. If the RAM role to be used by OOS is not created, or this role is created but is not granted the permissions required for template execution, click **Automatic Authorization**. You can also click **Manual Authorization**, and grant the required permissions to the role. For more information, see [Configure RAM permissions for OOS](/help/en/oos/use-cases/grant-ram-permissions-on-oos#topic-1869888).**\*\***
    
6.  Click **Next Step: Preview**.
7.  Click **Create Execution**.
    
8.  Return to the Executions tab, find the execution you just created, and then click **Details** in the Actions column to view the execution result.
    
9.  Click **Configure Next Step**.
    
10.  Click **OK.**
     
11.  Click **Execution Logs**.
     
     View the execution logs of the task being debugged.
