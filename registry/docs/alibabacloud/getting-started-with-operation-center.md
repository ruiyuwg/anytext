In Operation Center, you can view tasks that are published to the production environment and perform related operations and maintenance (O&M), such as testing and data backfill. This topic uses an auto triggered node as an example to demonstrate the basic operations in Operation Center. You will learn how to confirm task configurations, backfill data for historical periods, and configure intelligent monitoring rules to ensure that your tasks are scheduled correctly.

## Prerequisites

An auto triggered node named `result_table` is created and published. For more information, see [Data Studio](/help/en/dataworks/user-guide/perform-data-development-as-developers#task-2245573).

**Note**

This topic uses the `result_table` node to demonstrate O&M operations. You can perform these operations on your own tasks as needed.

## Background information

The DataWorks Operation Center supports operations management for various task types, such as auto triggered nodes, one-time tasks, and real-time sync tasks. It also provides multiple monitoring methods for objects such as the tasks and the resources they use. This helps you promptly identify and handle exceptions based on alerts to ensure efficient and stable data production.

This topic describes only the [basic workflow](#section-ecw-ntv-o4h) for task execution in Operation Center. You can perform more advanced O&M operations as needed, such as the following:

-   Publish, unpublish, or freeze tasks. For more information, see [Basic O&M operations for auto triggered nodes](/help/en/dataworks/user-guide/perform-basic-maintenance-operations-on-auto-triggered-nodes#concept-2175789).
    
-   Manage and control O&M operations on tasks. For more information, see [Manage and control O&M operations (advanced)](#section-wwo-g35-lz7).
    

For more information about Operation Center, see [Overview of Operation Center](/help/en/dataworks/user-guide/overview-43#concept-jf4-mzc-r2b).

## Go to Operation Center

Log on to the [Operation Center console](https://dataworks.console.aliyun.com/product/workbench_menu). Switch to the destination region, select your workspace from the drop-down list, and then click **Enter Operation Center**.

## Procedure

### Phase 1: Test and verify the scheduling task

1.  [Step 1: View the configuration of the](#section-rhb-2iv-jj6) auto triggered node
    
    To prevent an auto triggered node from being scheduled unexpectedly, you must check its configuration after you publish it. Make sure that parameters, such as scheduling parameters and the exclusive resource group for scheduling, are correct. If they are not, modify the configuration and publish the task again.
    
2.  [Step 2: Test the](#section-ib5-q3v-0wa) auto triggered node
    
    Use the smoke testing feature to verify that the auto triggered node runs correctly in the production environment. If an error occurs, you must fix it promptly to ensure that the task can run as expected.
    
3.  [Step 3: Backfill historical data for the](#section-ysc-z4a-gjp) auto triggered node
    
    Use the data backfill feature to recalculate data for a historical period.
    
4.  [Step 4: View recurring instances](#section-yy5-sre-cxf)
    
    After an auto triggered node is published, recurring instances are generated based on its schedule. If **Instance Generation Mode** is set to **Generate On The Next Day (T+1)** in DataStudio, the task starts scheduling on the next day. If it is set to **Generate Immediately After Publishing**, the task schedules on the same day. You can view the generation and running status of the instances to check whether the task is scheduled as expected.
    
5.  [Step 5: View the execution results](#section-rw5-qrp-mfl)
    
    After you test a node or backfill data, you can check the status of the data write operation.
    

### Phase 2: Monitor the auto triggered node

1.  [Step 6: Create a custom monitoring rule](#section-3my-vva-7q9)
    
    You can configure intelligent monitoring rules for the auto triggered node as needed. This lets you monitor the scheduling and running status of the task to ensure that it is scheduled correctly in the future.
    
2.  [Step 7: Create an intelligent baseline (Advanced)](#section-952-qiy-2cg)
    
    To ensure that high-priority tasks generate data by a specific time, you can set up intelligent baseline monitoring. If the system predicts that a task cannot be complete by the specified time, the baseline sends an alert about the task exception. This helps you quickly retrieve information about and handle the exception.
    
3.  [Step 8: Create an automatic O&M rule for a resource group](#section-ls5-jw4-zv5)
    
    You can create custom monitoring rules for an exclusive resource group. You can set monitoring alerts for the resource group's usage and the number of instances waiting on it, and then perform related O&M operations.
    

## Step 1: View the configuration of the auto triggered node

To prevent an auto triggered node from being scheduled unexpectedly, you must check its configuration after you publish it. Make sure that parameters, such as scheduling parameters and node dependencies, are correct.

1.  [Go to Operation Center](#section-x95-fys-y37).
    
2.  Find the destination node.
    
    1.  In the navigation pane on the left, choose **auto triggered node O&M** > **Auto Triggered Node**.
        
    2.  On the **Auto Triggered Node** page, search for the destination node.
        
3.  View the node details.
    
    1.  Click the destination node to go to its Directed Acyclic Graph (DAG).
        
    2.  Click **Expand Details** to view the detailed information about the node.
        

**Note**

-   For more information about operations on auto triggered nodes, see [Manage auto triggered nodes](/help/en/dataworks/user-guide/view-and-manage-auto-triggered-nodes#task-2056582).
    
-   If the node configuration does not meet your expectations, go to [Data Studio](/help/en/dataworks/user-guide/perform-data-development-as-developers#section-qmk-pnj-l6d) to find the node, modify its configuration on the node editing page, and publish it again. For more information, see [Node-related operations](/help/en/dataworks/user-guide/perform-data-development-as-developers#section-toq-uc7-f8k).
    

This example shows how to find the published `result_table` node in the auto triggered node list and check whether its **Scheduling Parameter** and **Schedule Resource Group** are correctly configured.![View the configuration of a recurring task](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4518586271/p487840.png)

## Step 2: Test the auto triggered node

You can use the smoke testing feature for an auto triggered node to verify that its scheduling and execution in the production environment meet your expectations. This operation executes the actual code logic.

1.  Go to the smoke testing page.
    
    You can go to the smoke testing page using one of the following methods:
    
    -   Method 1: In the auto triggered node list, find the destination task and click **Test** in the **Operation** column.
        
    -   Method 2: In the DAG of the destination task, right-click the task and select **Test**.
        
2.  Configure the data timestamp and runtime for the test, and then click **OK**.
    
    When the task is tested, a test instance is generated. You can go to the **Auto Triggered Node O&M** > **Test Instance** page to view the instance details and check its running status.
    
    **Note**
    
    -   For more information about smoke testing, see [Perform smoke testing](/help/en/dataworks/user-guide/smoke-test-not-available).
        
    -   To view test instances, see [Run a test and view test instances](/help/en/dataworks/user-guide/test-an-auto-triggered-node-and-view-test-instances-of-the-node#concept-azp-qxh-r2b).
        
    

This example shows how to test the `result_table` node and view the execution status of the generated test instance.![Test a recurring task](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4518586271/p487900.png)

## Step 3: Backfill historical data for the auto triggered node

After an auto triggered node is developed, submitted, and published, it runs at the scheduled time. If you want to recalculate data for a historical period, you can use the data backfill feature.

1.  Go to the data backfill page.
    
    You can go to the data backfill page using one of the following methods:
    
    -   Method 1: In the auto triggered node list, find the destination task and click **Backfill Data** in the **Operation** column.
        
    -   Method 2: In the DAG of the destination task, right-click the task and select **Backfill Data**.
        
2.  Select a data backfill mode.
    
    Select a data backfill mode as needed:
    
    **Data backfill mode**
    
    **Description**
    
    **Scenarios**
    
    [Manual Selection](/help/en/dataworks/user-guide/backfill-data-for-an-auto-triggered-node-and-view-data-backfill-instances-of-the-node#22fd5b28b8jdf)
    
    You can select one or more tasks as root tasks and then manually select their descendant nodes as the scope for the data backfill. You can also specify a subset of descendant nodes.
    
    **Note**
    
    -   This mode is compatible with previous data backfill plans, such as **Current Node**, **Current Node and Descendant Nodes**, and **Advanced Mode**.
        
    -   A maximum of 500 root tasks and 2,000 total tasks, including root tasks and their descendant nodes, are supported.
        
    
    -   This mode is used for batch data backfill for the current node and its descendant nodes.
        
    -   This mode is used to flexibly select a batch of nodes for data backfill. The nodes do not need to have dependencies.
        
    
    [Select by link](/help/en/dataworks/user-guide/backfill-data-for-an-auto-triggered-node-and-view-data-backfill-instances-of-the-node#994a51072dzqm)
    
    You can select a start task as the root task and one or more end tasks. The platform automatically analyzes and includes all tasks between the start and end tasks, inclusive, in the data backfill scope.
    
    This mode is used for end-to-end data backfill for tasks that have complex dependencies.
    
    [Select by Workspace](/help/en/dataworks/user-guide/backfill-data-for-an-auto-triggered-node-and-view-data-backfill-instances-of-the-node#7cbed1a8d7t9f)
    
    You can select a task as the root task and determine the data backfill scope based on the workspaces of its descendant nodes.
    
    **Note**
    
    -   This mode is compatible with the previous **Massive Nodes Mode** data backfill plan. A maximum of `20,000` tasks are supported.
        
    -   You cannot configure a task blacklist.
        
    
    This mode is used if the descendant nodes of the current node are in multiple workspaces and you need to backfill data for nodes in those workspaces.
    
    [Specify Task and All Descendants](/help/en/dataworks/user-guide/backfill-data-for-an-auto-triggered-node-and-view-data-backfill-instances-of-the-node#fbafb53b87uvz)
    
    After you select a root task, the system automatically includes the task and all its descendant nodes in the data backfill scope.
    
    **Important**
    
    You can view which tasks are triggered only when the data backfill task is running. Use this mode with caution.
    
    This mode is used for data backfill for a root task and all of its descendant nodes.
    
3.  Configure data backfill parameters.
    
    Configure the data timestamp, the nodes for which you want to backfill data, and other parameters as needed. The required parameters vary based on the selected mode. For more information, see [Backfill data and view data backfill instances (New)](/help/en/dataworks/user-guide/backfill-data-for-an-auto-triggered-node-and-view-data-backfill-instances-of-the-node#task-2105702).
    

In this example, the data backfill mode **Backfill Data For Current Node** is selected. Data generated in the time period from `00:00` to `01:00` every day from `2024-09-17 to 2024-09-19` is backfilled for the `result_table` node. You can backfill data for the node by performing the operations shown in the following figure.

**Note**

After you configure data backfill, the variables in the node code are replaced with specific values based on the scheduling parameters and data timestamp that you configured.

![Backfill data](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4518586271/p487938.png)

## Step 4: View recurring instances

After an auto triggered node is published, recurring instances are generated based on its schedule. If **Instance Generation Mode** is set to **Generate On The Next Day (T+1)** in DataStudio, the task starts scheduling on the next day. If it is set to **Generate Immediately After Publishing**, the task schedules on the same day. You can view the generated recurring instances to check whether the task is scheduled and running as expected.

1.  Go to the recurring instances page.
    
    In the navigation pane on the left of **Operation Center**, choose **Auto Triggered Node O&M** > **Recurring Instance**.
    
2.  View recurring instances.
    
    Check whether the corresponding recurring instances are generated and running as expected based on the schedule configuration of the task. For more information about recurring instances, see [View recurring instances](/help/en/dataworks/user-guide/view-auto-triggered-node-instances#concept-nlb-nxh-r2b).
    
    If an instance is not running, perform the following steps:
    
    1.  Use the **Upstream Analysis** feature in the DAG panel to quickly locate the key upstream tasks that are blocking the current task.
        
    2.  Use the **Runtime Diagnosis** feature to diagnose the reasons why the key upstream task is not running or to identify existing issues. If a task has deep dependency layers, you can use the runtime diagnosis feature to quickly locate issues and improve O&M efficiency.![Runtime diagnosis example](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0788237271/p501631.png)
        

This example shows the recurring instances of the hourly scheduled node `result_table` generated on `2024-09-19`.![查看周期实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4518586271/p501643.png)

## Step 5: View the execution results

After you test an auto triggered node or backfill data, you can check the status of the data write operation in the following ways:

-   Go to **Data Map** to view the results.
    
    Query the destination table in Data Map and view the table details to confirm that the data is written correctly. For more information about how to find and view tables, see [Find a table](/help/en/dataworks/search-for-tables#task-2115391) and [View table details](/help/en/dataworks/view-the-details-of-a-table-1#task-2486882).
    
-   Use an **Ad Hoc Query** to view the results.
    
    To query data and related SQL code only in Data Studio to check whether the actual runtime results match your expectations or to verify the correctness of the code without publishing the code to the production environment, you can [create an ad hoc query file](/help/en/dataworks/user-guide/create-an-ad-hoc-query#task-2495718).
    

**Note**

-   By default, a Resource Access Management (RAM) user does not have the permissions to query production tables in the MaxCompute DPI engine. You can go to Data Map and request permissions for the table on its product page. For more information, see [Request table permissions](/help/en/dataworks/request-permissions-on-tables#task-2487385).
    
-   When a node is executed in the developer environment, data is written to the developer DPI engine project. When the node is executed in the production environment, data is written to the production DPI engine project. Before you run a query, confirm the DPI engine project where the data is located. You can go to the **Computing Resource** page to view the DPI engine project information for the corresponding environment.
    
-   MaxCompute supports cross-project table access, such as accessing tables that are created in other data sources or accessing production project tables from a developer project. However, some DPI engines do not support this feature. Whether a DPI engine type supports cross-project table access depends on its actual features.
    

In this example, the DPI engine project for the `result_table` node in the production environment is `mc_test_project`. You can use an ad hoc query to create an ODPS SQL node and run an SQL statement to query the partition data of the `mc_test_project.result_table` table.![查看表数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4518586271/p502318.png)

## Step 6: Create a custom monitoring rule

After the node is tested and verified, you can create a custom monitoring rule for the node to monitor its running status. If the node fails to run, DataWorks sends an alert based on your configuration. This helps you promptly identify and handle exceptions and ensures that the node can be scheduled as expected in the future.

1.  [Go to Operation Center](#section-x95-fys-y37).
    
2.  In the navigation pane on the left, choose **Monitoring** > **Rule Management**.
    
3.  Create a custom rule.
    
    1.  Click **Create Custom Rule**.
        
    2.  Configure the rule information.
        
        You can customize the rule as needed. For more information about the configuration, see [Custom monitoring rules](/help/en/dataworks/user-guide/create-a-custom-alert-rule#task-2364475).
        
        This example shows how to configure a monitoring alert for the `result_table` node for when the node fails to run. The specific configuration is shown in the following figure.![Custom rule](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4518586271/p502440.png)If the `result_table` node fails to run, the `Test rules` rule is triggered, and an alert is sent to the node owner by text message. The alert is sent a maximum of 3 times at an interval of 30 minutes.
        
        **Note**
        
        You must configure the alert contact information in advance. For more information, see [View and set alert contacts](/help/en/dataworks/user-guide/configure-and-view-alert-contacts#task-2520742).
        

## Step 7: Create an intelligent baseline (Advanced)

To ensure that a task can generate data within a specified time, you can set up baseline monitoring for the task. You can add the task to a baseline and set its priority and committed time. DataWorks calculates the estimated completion time of the baseline task based on its running history and provides high-priority tasks with preferential access to schedule resources. If DataWorks predicts that the baseline task may not be complete before the committed time, it sends an alert. You can handle the exception promptly based on the alert.

1.  [Go to Operation Center](#section-x95-fys-y37).
    
2.  In the navigation pane on the left, click **Intelligent Baseline**.
    
3.  Create an intelligent baseline.
    
    1.  On the **Baseline Management** tab, click **Create Baseline**.
        
    2.  Configure the baseline information.
        
        You can configure the baseline information as needed. For more information about the configuration, see [Create a baseline](/help/en/dataworks/user-guide/manage-baselines#concept-uwf-rzn-42b).
        
        This example configures an hourly baseline for the `result_table` node to monitor its hourly data output. The specific configuration is shown in the following figure.![Configure an intelligent baseline](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4518586271/p502514.png)The following list describes some of the parameters:
        
        -   **Priority**: The larger the value, the higher the priority. High-priority tasks are provided with preferential access to schedule resources when resources are scarce.
            
        -   **Estimated Finish Time**: The estimated completion time is calculated based on the node's completion history over a period of time.
            
        -   **Committed Time**: The latest time by which the node must generate data. You can set this based on your business needs and the node's actual completion history.
            
        -   **Alert Margin**: You can set an alert margin based on the **Committed Time** to allow time for handling task exceptions. This helps ensure that the task can be complete by the committed time.
            
            **Note**
            
            The interval between the alert margin and the committed time must be at least 5 minutes.
            
        
        If the hourly instance of the `result_table` node cannot be complete within 30 minutes of each hour, the `Test Baselines` baseline is triggered. An alert is sent to the node owner by text message. The alert is sent a maximum of 3 times at an interval of 30 minutes.
        

## Step 8: Create an automatic O&M rule for a resource group

If you use an exclusive resource group to run tasks, you can create automatic O&M rules for the exclusive resource group as needed. This lets you set monitoring alerts for the usage of the resource group and the number of instances waiting on it, and then perform related O&M operations.

The automatic O&M feature works by associating a monitoring rule with an exclusive resource group. You can customize monitoring metrics for instances that run on the destination resource group and define O&M rules based on your business logic. If an instance meets the filter conditions, the O&M action is automatically triggered and executed to achieve automatic O&M.

**Note**

-   Currently, **automatic O&M is supported only for exclusive resource groups for scheduling**.
    
-   To prevent slow task execution that is caused by resource shortages, you can move the task to an exclusive resource group for scheduling. For more information about how to change the resource group that is used by a task, see [General reference: Switch resource groups](/help/en/dataworks/user-guide/change-the-resource-group-used-by-nodes#section-rda-72b-rsa).
    

1.  [Go to Operation Center](#section-x95-fys-y37).
    
2.  Create a monitoring rule for the resource group.
    
    1.  In the navigation pane on the left, choose **Monitoring** > **Rule Management**.
        
    2.  Create and configure a monitoring rule for the resource group.
        
        The configuration of a monitoring rule for a resource group is similar to the configuration of a monitoring rule for a node. You need to only set **Object Type** to **Exclusive Resource Group For Scheduling**. For more information about the configuration, see [Custom monitoring rules](/help/en/dataworks/user-guide/create-a-custom-alert-rule#task-2364475).
        
        This example monitors the resource group utilization of the `Exclusive_Scheduling_Resource` resource group. The configuration is shown in the following figure.
        
        **Note**
        
        This topic demonstrates only the configuration operation. When you configure the rule, make sure that you configure it for the resource group that you use.
        
        ![Resource group monitoring rule](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0939917271/p502548.png)If the resource group utilization of the `Exclusive_Scheduling_Resource` resource group is greater than 90% for 10 minutes, the `Resource group monitoring rules` rule is triggered. An alert is sent to the recipient by text message. This alert is sent a maximum of 3 times.
        
3.  Configure an automatic O&M rule based on the resource group monitoring rule.
    
    1.  In the navigation pane on the left, choose **O&M Assistant** > **Automatic O&M**.
        
    2.  On the **Rule Management** tab, click **Add Rule**.
        
    3.  Configure the rule information.
        
        You can configure the rule information as needed. For more information about the configuration, see [Create an automatic O&M rule for a resource group](/help/en/dataworks/user-guide/automatic-operation-and-maintenance#task-2086541).
        
        This example creates a resource group named `Automatic_test` and associates it with `Resource group monitoring rules`, which is a monitoring rule that uses an exclusive resource group for scheduling. When the `Resource group monitoring rules` rule is triggered, DataWorks automatically performs O&M operations on instances in `Automatic_test` that meet the filter conditions. The following figure shows the configuration.![自动运维](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0939917271/p502712.png)The following section describes some of the parameters:
        
        -   **Associated Monitoring Rule**: Currently, you can associate a rule only with a monitoring rule for an exclusive resource for scheduling. You must create the required resource group monitoring rule in advance.
            
        -   **O&M Action**: Currently, you can select only **Stop Running Instance**. This means that after the O&M rule is triggered, instances that meet the conditions are stopped.
            
        
        If the utilization of the `Exclusive_Scheduling_Resource` exclusive resource group for scheduling exceeds 90% for 10 minutes, DataWorks stops the priority-1 hourly and minute tasks that belong to recurring instances, test instances, and data backfill instances running on the `Exclusive_Scheduling_Resource` resource group in the specified workspace.
        

## Manage and control O&M operations (advanced)

Operation Center supports extension points, such as node freezing, node restoring, data backfill, and node unpublishing. You can use these extension points with extension programs to customize the logic processing and O&M operations for tasks. For more information, see [Overview of extensions](/help/en/dataworks/overview-9#task-2118742) and [Application example: Check for triggering events in Operation Center](/help/en/dataworks/user-guide/application-example-operation-and-maintenance-center-trigger-event-check#task-2209463).

## What to do next

You can configure Data Quality monitoring rules for the table data that is generated by the node to ensure that the data output meets your expectations. For more information, see [Data Quality](/help/en/dataworks/user-guide/data-quality/).
