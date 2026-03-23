Data Asset Governance offers a managed process for undeploying unused tasks and tables. It handles the entire undeployment lifecycle, including risk assessment, notifications, and process management. It prevents common errors, such as mistaken undeployments or affecting assets with active downstream dependencies. This feature also supports batch undeployment, which centralizes management and improves efficiency.

## Background

Compared to a direct undeployment, graceful undeployment adds impact analysis and process management. At each stage of the process, you can notify relevant users through multiple channels.

**Actions**

**Undeployment method**

**Comparison**

**Description**

[Select objects to undeploy](#section-aua-8u1-98f)

Direct undeployment

On the Operation Center page, find the target task, freeze it, and then undeploy it.

You cannot assess the impact or risks, increasing the chance of undeploying the wrong task.

Graceful undeployment

You can select objects for undeployment while assessing their impact and risks. You can add objects manually or have the system add them automatically.

You can select objects by node ID, data lineage, or table. The system provides an impact assessment and explanation for each object.

[Configure the process](#section-bdy-sfq-9w2)

Direct undeployment

Not available.

You cannot notify relevant users.

Graceful undeployment

You can notify specified users at each stage of the process through **System Prompt**, **Email**, **DingTalk Chatbot**, and **Webhook**.

The undeployment process can have multiple stages, and you can send notifications at each step.

[Define the plan execution mode](#0fec3f717e2ou)

Direct undeployment

Not available.

Once you click **Undeploy**, the object is undeployed immediately and the action cannot be undone.

Graceful undeployment

-   **Manually Trigger Execution**
    
-   **Automatic Execution**
    

You can choose an execution mode based on your scenario, providing a time window to cancel the undeployment if needed.

[View and manage the undeployment plan](#section-gr3-fay-vdc)

Direct undeployment

Not available.

Direct undeployment provides no buffer, which can lead to accidental undeployments and business workflow errors.

Graceful undeployment

You can view the details of created undeployment plans and perform actions such as viewing execution details, canceling, or rolling back for each subtask in the plan.

It provides a buffer for undeployment, allowing you to cancel or roll back the operation immediately if an error occurs.

## Limitations

-   An undeployment plan can only include objects from a single workspace.
    
-   You can add a maximum of 200 objects to an undeployment plan.
    
-   You can roll back task-related operations before the **Undeploy Task** step and roll back table-related operations before the **Undeploy Completed** step.
    

## **Permissions**

-   To create an undeployment plan, you must have one of the following roles:
    
    -   Alibaba Cloud account
        
    -   A RAM user with the `AliyunDataWorksFullAccess` permission
        
    -   Workspace administrator
        
    -   Tenant-level data governance administrator
        
    -   Workspace-level data governance administrator
        
    -   O&M engineer
        
-   Only an Alibaba Cloud account, a RAM user with the `AliyunDataWorksFullAccess` permission, or a workspace administrator can perform all operations on an undeployment plan.
    
-   O&M engineers can only manage the undeployment plans they create. They have read-only permissions for other undeployment plans.
    
-   Tenant-level and workspace-level data governance administrators can only create, configure, and delete plans. They cannot start or execute plans containing tasks for which they lack permissions.
    

## Notes

-   You cannot select an object that is already part of an active undeployment plan. An object can only belong to one undeployment plan at a time.
    
-   Certain types of objects, such as the root node of a workspace or a virtual node created by an undeployment plan, cannot be selected for undeployment.
    
-   If an object slated for undeployment has downstream dependencies, and the scheduling dependency of the affected downstream tasks is not removed in time, the system creates a virtual node and attaches the downstream tasks to this node.
    
-   The supported steps for each node type may vary. Refer to the product UI for details.
    
-   Graceful undeployment only allows you to roll back operations performed before the actual undeployment begins.
    

## **Procedure**

### **Step 1: Create an undeployment plan**

1.  Go to the Data Asset Governance page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Asset Governance**. On the page that appears, click **Go to Data Asset Governance**.
    
2.  In the left-side navigation pane, click **Governance** > **Automation** > **Shutdown** to go to the **Shutdown** page.
    
3.  From the **Workspace** drop-down list at the top of the page, select the workspace that contains the objects you want to undeploy. The drop-down list shows only the workspaces that you have joined.
    
    If you need to join a workspace, contact the workspace administrator to add you. For more information, see [Add workspace members and manage their roles and permissions](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    
4.  On the **Shutdown** page, click **Create Plan**.
    
    Alternatively, on the [Process Governance Items](/help/en/dataworks/user-guide/processing-governance-work-items) page, find the task or table that you want to undeploy and click **Create Plan** in the **Actions** column to go to the page for creating an undeployment plan.
    

### **Step 2: Select objects to undeploy**

#### **1\. Configure basic plan information**

You can specify the **Workspace** where the objects are located and enter a custom **Plan Name**.

#### **2\. Configure the objects to undeploy**

In the **To-Be-Undeployed Object** section, select the objects you want to undeploy. These can be published **Task** or **Table**.

-   Undeploy tasks: You can add tasks by using **Add To-Be-Undeployed Object** or **Import Based on Lineage**.
    
    -   **Add To-Be-Undeployed Object**: Add a task by its node ID.
        
    -   **Import Based on Lineage**: Select a task and then select related tasks based on their data lineage hierarchy.
        
        **Note**
        
        -   You can find the node ID on the task configuration page, in the **Basic Properties** section of the **Scheduling** tab.
            
        -   You can also find the node ID on the **Auto Triggered Node O&M** > **Auto Triggered Nodes** page in the Operation Center.
            
        
-   Undeploy tables: Add tables by using **Add To-Be-Undeployed Object**.
    

**Note**

-   You cannot select an object that is already part of an active undeployment plan. An object can only belong to one undeployment plan at a time.
    
-   Certain types of objects, such as the root node of a workspace or a virtual node created by an undeployment plan, cannot be selected for undeployment.
    

**Item**

**Description**

**Undeployment Impact Assessment**

-   **Low**: The output tables of the table or task have not been consumed in the last month.
    
-   **High**: The output tables of the table or task have been consumed in the last month.
    

**Impact Item Description**

Provides a description of the undeployment impact assessment.

**The output table is consumed.**

Describes the consumption status of the output table for the task object.

**Task that generates table**

Identifies the task that generates the table object. Click to view task information.

**Number of affected baselines/highest baseline level**

-   The number of affected baselines and the highest baseline level for the task that generates the table object.
    
-   The number of affected baselines and the highest baseline level for the task object.
    

**Note**

For more information about task baseline monitoring, see [Baseline management](/help/en/dataworks/user-guide/manage-baselines).

### **Step 3: Configure the process**

After you add the objects to be undeployed, you can configure the undeployment process in detail. The process includes eight stages: **Start Undeployment**, **Delayed Scheduling**, **Suspend Scheduling**, **Undeploy Task**, **Rename Output Table**, **Reset Table Lifecycle**, **Delete Output Table**, and **Undeploy Completed**.

**Stage**

**Description**

**Recommended use case**

**Start Undeployment**

Starts the graceful undeployment task. This stage is selected by default and cannot be deselected.

\-

**Delayed Scheduling**

Extends the scheduled run time for the object to be undeployed. This delays data generation for the object and its downstream dependencies.

Use this when data from an upstream platform has not been generated, to ensure the task runs correctly.

**Suspend Scheduling**

Freezes the object, which sets its status to frozen on the **Operation Center** > **Auto Triggered Nodes** page. The object and its downstream objects will no longer generate table data.

Use this when a business process is paused but the workflow needs to be retained.

**Undeploy Task**

Undeploys the selected object. No new instances will be generated starting from the next day. The system sets existing instances to zero load, preventing their execution. This stage is selected by default but can be deselected.

Use this when a node or a workflow is no longer needed.

**Rename Output Table**

Renames the output table of the task or table object.

Use this when you need to identify that the output table belongs to an object that has been undeployed.

**Reset Table Lifecycle**

Resets the lifecycle of the output table for the task or table object.

Use this when you need to retain the output table for a period of time after the object is undeployed.

**Note**

Only MaxCompute tables are supported.

**Delete Output Table**

Deletes the output table of the task or table object.

Use this when the output table is no longer needed after the object is undeployed.

**Undeploy Completed**

Ends the graceful undeployment task. This stage is selected by default and cannot be deselected.

\-

**Note**

-   The undeployment plan executes stages sequentially. You can choose whether to execute each stage. Any unselected stage is skipped.
    
-   The undeployment plan supports sending notifications to specified users via **System Prompt**, **Email**, and **DingTalk Chatbot**. For information on configuring DingTalk chatbots, see [Scenario practice: Send alert notifications to a DingTalk group](/help/en/dataworks/user-guide/create-a-custom-alert-rule#section-u55-nxf-x4l). To view internal messages, go to **Data Asset Governance** > **Overview** > **Reminder** and view the **Governance Reminder** page.
    

### **Step 4: Define the plan execution mode**

Set the execution mode for each stage of the undeployment plan. You can choose either **Manually Trigger Execution** or **Automatic Execution**.

-   **Manually Trigger Execution**
    
    -   **Description**: Each step in the undeployment process requires manual confirmation from the plan creator before proceeding to the next step.
        
    -   **Recommended use case**: Use this mode when the task or data table is **critical** to your business workflow.
        
-   **Automatic Execution**
    
    -   **Description**: Each step in the undeployment process proceeds to the next step automatically after a configured waiting period.
        
    -   **Recommended use case**: Use this mode for batch undeployment of business workflows that are of low importance.
        

### **Step 5: Manage the undeployment plan**

On the **Shutdown** page, you can view the list of undeployment plans and **execute**, **cancel**, or **delete** all objects within a plan.

**Note**

-   Canceling an undeployment plan only affects tasks that are currently in progress. Tasks that have already been undeployed are not affected.
    
-   When you delete an undeployment plan, the system first cancels any tasks that are in progress. Tasks that have already been undeployed are not affected. After the cancellation is successful, the undeployment plan is deleted. This action cannot be undone.
    

You can also click **Actions** > **Details** to view the configuration details of an undeployment plan. You can perform the following operations on individual objects within the plan:

**Function**

**Description**

**View execution details**

View the undeployment details for a single task, including progress, status, and details for each stage. You can also cancel or roll back the undeployment process for the current task.

-   Cancel task: You can cancel the incomplete steps in the current task's undeployment process.
    
-   Rollback task: You can revert all undeployment steps for the current task. Individual step rollback is not supported.
    
    **Note**
    
    -   Rollback is not supported if the undeployment plan has been canceled.
        
    -   Rollback is not supported if a substep is in progress.
        
    -   You cannot roll back a task after the **Undeploy Task** step has been completed. Rollback is not available after the undeployment plan is complete.
        
    

**Go to O&M**

Navigates to the [Operation Center](/help/en/dataworks/user-guide/overview-43#concept-jf4-mzc-r2b) to view the operational details of the task.

**Edit**

Navigates to the [DataStudio](/help/en/dataworks/user-guide/overview-26/#task-2117519) page, where you can edit the task.
