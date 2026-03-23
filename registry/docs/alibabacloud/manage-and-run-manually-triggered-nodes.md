After manually triggered tasks, manually triggered workflows, or event-driven workflows are deployed to the production environment, you can view and manage them through lists or DAGs.

**Note**

-   [Create a manually triggered task](/help/en/dataworks/user-guide/create-a-manual-task#task-1935388), [Create a manually triggered workflow](/help/en/dataworks/user-guide/manual-workflow/), or [Create an event-driven workflow](/help/en/dataworks/user-guide/trigger-based-workflow#c5c6f9352fngm) submitted to Operation Center will not run automatically. You can run them manually.
    
-   [Data Development (Data Studio) (New Version)](/help/en/dataworks/user-guide/overview-new-data-studio/) supports creating manually triggered tasks, manually triggered workflows, and event-driven workflows, while [Data Development (DataStudio) (Old Version)](/help/en/dataworks/user-guide/overview-26/) users can only create manually triggered workflows.
    

## **Prerequisites**

Manually triggered tasks, manually triggered workflows, or event-driven workflows have been deployed to the production environment.

## Go to the Manual Task page

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Operation Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Operation Center**.
    
2.  In the left-side navigation pane, click **Manually Triggered Node O&M** > **Manual Triggered Nodes** to go to the Manual Task page.
    

## **Manage tasks**

You can view and manage manually triggered tasks, event-driven workflows, and manually triggered workflows.

### **Manage manually triggered tasks**

Go to the **Manually Triggered Tasks** tab, where you can filter and view manually triggered task information by **Task Name**, **Task Type**, **Scheduling Resource Group**, and other conditions. You can manage manually triggered tasks through the following operations.

**Operation**

**Description**

**DAG**

Click **DAG** in the Actions column to open the DAG of the current manually triggered task. You can view information such as code and lineage of the manually triggered task in [Manage task DAG](#title-8j6-jvy-jao).

**Run**

Click **Run** in the Actions column, configure parameters in the dialog box that appears, and click **OK** to run the manually triggered task according to the specified range, generating a **Manually Triggered Instance**.

-   **Data Timestamp**: You can select multiple data timestamp ranges, including running tasks for past or future dates.
    
    **Note**
    
    If you select multiple data timestamps, the system will execute them sequentially in the order of data timestamps.
    
-   **Order**: You can run tasks in chronological or reverse chronological order of data timestamps.
    

**View Instances**

Click **View Instances** in the Actions column to go to the **Manual Instance** page's **Manual Instance** tab to view the execution results of the manually triggered task.

**More**

Click **More** in the Actions column to perform additional operations such as **Change Owner**, **Modify Scheduling Resource Group**, and **Unpublish Node**.

**Batch Operations**

You can select multiple manually triggered tasks to perform batch operations such as **Modify Scheduling Resource Group** and **Unpublish Node**.

### **Manage event-driven workflows**

Go to the **Event-Driven Workflow** tab, where you can filter and view event-driven workflow information by **Task Name**, **[Trigger](/help/en/dataworks/user-guide/manage-triggers)**, and other conditions. You can manage event-driven workflows through the following operations.

**Operation**

**Description**

**DAG**

Click **DAG** in the Actions column to open the DAG of the current event-driven workflow. You can view information such as code and lineage of the event-driven workflow in [Manage task DAG](#title-8j6-jvy-jao).

**Run**

Click **Run** in the Actions column, configure parameters in the dialog box that appears, and click **Run** to run the event-driven workflow according to the specified range, generating an **Event-driven Workflow Instance**.

-   **Data Timestamp**: You can select multiple data timestamp ranges, including running tasks for past or future dates.
    
    **Note**
    
    If you select multiple data timestamps, the system will execute them sequentially in the order of data timestamps.
    
-   **Run Policy**: You can configure alert information for the event-driven workflow execution.
    
-   **Order**: You can run tasks in chronological or reverse chronological order of data timestamps.
    

**View Instances**

Click **View Instances** in the Actions column to go to the **Manual Instance** page's **Event-Driven Workflow Instance** tab to view the execution results of the event-driven workflow.

**More**

Click **More** in the Actions column to perform operations such as **Change Owner** and **Unpublish**.

**Batch Operations**

You can select multiple event-driven workflows to perform batch operations such as **Modify Scheduling Resource Group** and **Unpublish**.

### **Manage manually triggered workflows**

Go to the **Manually Triggered Workflow** tab, where you can filter and view manually triggered workflow information by **Task Name**, **Tag**, **My Nodes**, and **Modified Today**, and other conditions. You can manage manually triggered workflows through the following operations.

**Operation**

**Description**

**DAG**

Click **DAG** in the Actions column to open the DAG of the current workflow. You can view information such as code and lineage of the workflow in [Manage task DAG](#title-8j6-jvy-jao).

**Run**

Click **Run** in the Actions column, configure parameters in the dialog box that appears, and click **Run** to run the manually triggered workflow according to the specified range, generating a **Manually Triggered Workflow Instance**.

-   **Range**: You can choose to run the entire workflow or specified nodes.
    
-   **Data Timestamp**: You can select multiple data timestamp ranges, including running tasks for past or future dates.
    
    **Note**
    
    If you select multiple data timestamps, the system will execute them sequentially in the order of data timestamps.
    
-   **Workflow Parameters**: If you used workflow parameters when developing the manually triggered workflow, you need to assign values to these parameters when running the workflow. For more information, see [Use workflow parameters](/help/en/dataworks/user-guide/use-workflow-parameters#task-2551957).
    
-   **Order**: You can run tasks in chronological or reverse chronological order of data timestamps.
    

**Note**

In list mode, the entire manually triggered workflow will be run (nodes with dependencies will run from top to bottom according to their dependencies, while nodes without dependencies will run simultaneously).

**View Instances**

Click **View Instances** in the Actions column to go to the **Manual Instance** page's **Manually Triggered Workflow Instance** tab to view the execution results of the manually triggered workflow.

**More**

Click **More** in the Actions column to perform additional operations such as **Change Owner**, **Modify Scheduling Resource Group**, and **Unpublish Manually Triggered Workflow**.

**Batch Operations**

You can select multiple manually triggered workflows to perform batch operations such as **Modify Scheduling Resource Group** and **Unpublish Manually Triggered Workflow**.

## Manage task DAG

Click the workflow name or **DAG** in the Actions column to open the DAG of the current workflow. In the DAG, you can right-click a node to perform related operations.

**Operation**

**Description**

**View Code**

View the code of the current node.

**Edit Node**

Click to go to the **Data Development** page to modify the workflow content.

**View Instances**

View the generated instance information on the **Manual Instance** page.

**View Lineage**

View the task lineage diagram.

**Modify Scheduling Resource Group**

Modify the resource group used by the current manually triggered task.

**Note**

Only manually triggered tasks and manually triggered workflows support modifying the scheduling resource group.
