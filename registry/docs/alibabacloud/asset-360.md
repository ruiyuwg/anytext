The asset 360 feature provides a panoramic view of tasks and tables from the following dimensions: the basic information, the status of each governance issue, the baselines and the execution status of each baseline, the status of the instances, and the records of governance operations.

## **Required permissions**

-   To select a workspace, you must have one of the following permissions:
    
    -   An Alibaba Cloud account
        
    -   A Resource Access Management (RAM) user who has the `AliyunDataWorksfullAccess` policy
        
    -   A tenant administrator
        
    -   A tenant-level data governance administrator
        
-   Other users can select only workspaces of which they are administrators.
    

## **Limits**

You can view the tables only of MaxCompute, E-MapReduce (EMR), and Hologres data sources.

To view the tables of a Hologres data source, you must first collect Hologres metadata in Data Map. For more information, see [Metadata collection](/help/en/dataworks/user-guide/metadata-collection/).

**Note**

Hologres data sources are supported by Data Asset Governance only in the following regions: China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen).

### **Go to the Task 360 or Table 360 page**

1.  Go to the Data Asset Governance page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Asset Governance**. On the page that appears, click **Go to Data Asset Governance**.
    
2.  In the left-side navigation pane, choose **Assets** > **Business Asset**. On the Business Asset page, find the asset that you want to view and click **Asset 360** in the **Actions** column. The Task 360 or Table 360 page appears.
    

## **View asset 360 information**

If you click Asset 360 in the Actions column of a table, you are redirected to the Table 360 page. If you click Asset 360 in the Actions column of a task, you are redirected to the Task 360 page

## Table 360

You can view the following information about a table on the Table 360 page.

**Section**

**Description**

**Basic Information**

Displays the key information about a table, including the **time**, **specifications**, **partition information**, and **task information**.

**Governance Issue**

Displays the status of each governance issue that occurs on the table and the penalty points taken from the health score due to governance issues. You can perform the following operations to handle governance issues:

-   To handle a governance issue, click the issue name in the **Governance Issue** column or click **Handle** in the **Actions** column to go to the **Work Items** page.
    
    **Note**
    
    For more information about governance issues, see [Handle governance issues](/help/en/dataworks/user-guide/processing-governance-work-items).
    
-   To view governance issue details from different dimensions, click the issue number in the **Issues** column to go to the details page of the governance item on the Issues tab of the **Knowledge** page. Then, you can view the information in the **Associated governance item**, **Rule judgment**, **Processing Guide**, and **Usage notes** sections.
    

**Task Associated Baseline**

Displays all baselines to which the current table belongs and the execution details about each baseline on the current day. The details about a baseline include the **baseline name**, **priority**, **status**, **committed completion time**, and **alert time**. You can click the name of a baseline to go to the **Smart Baseline** page to view the execution details about the baseline.

**Note**

For more information about the intelligent baseline feature, see [Overview](/help/en/dataworks/overview-37#concept-2084394).

**Task Execution Information**

Displays the execution information about the instances generated within the last 30 days. You can configure the **Instance ID**, **Execution Status**, and **Instance Type** conditions to filter instances. You can also sort the instances by **Data Timestamp**, **Scheduling Time**, **Start Time**, **End Time**, and **Running Duration**.

-   To switch to a different task, select the task from the **Task** drop-down list.
    
-   To view the details about a specific instance, find the instance ID and click **View Details** in the **Actions** column to go to the **Operation Center** page.
    

**Metric Trend**

Displays the trend of a data synchronization task over a specific period of time in various dimensions, such as **running duration**, **start time**, **completion time**, and **scheduling waiting time**. To view the consumption details about DataWorks task resources and computing and storage resources in a specified workspace during a specified period, click **View Details** to go to the **Overview** > **Workbench** page.

**Event Records**

Displays the operation records of the table and the details about **governance issues** that occur on the table, including the date when each governance issue is detected, the issue owner, and the penalty points taken from the health score due to the governance issue.

## Task 360

On the Task 360 page, you can view the following information about the task.

**Operation**

**Description**

**Basic Information**

Displays the key information of the task, including the **attribute information**, task **scheduling information**, and the input and output tables of the task.

**Note**

-   For information about the scheduling properties of a task, see [Configure time properties](/help/en/dataworks/user-guide/configure-time-properties-1#task-2119752).
    
-   To learn more about the lineage of a table, click the name of the table in the **Table Information** section to go to the table details page in **Data Map**.
    

**Governance Items for Node**

Displays the governance issues that you must handle. You can search for governance issues by configuring the **Governance Issue** and **Status** filter conditions. You can also sort governance issues by the **Deduction**, **Identified At**, and **Duration** conditions. To handle a governance issue, click the name of the governance issue or click **Handle** in the **Actions** column to go to the **Workbench** page.

**Note**

For more information about governance issues, see [Handle governance issues](/help/en/dataworks/user-guide/processing-governance-work-items).

**Task Associated Baseline**

If one or more tasks in a baseline depend on the current task, the task status affects the data generation of the baseline. This section displays all baselines to which the current task belongs and the execution details about each baseline on the current day. The details about a baseline include the **baseline name**, **committed completion time**, and **alert time**. To view the execution details about a baseline, click the name of the baseline to go to the **Smart Baseline** page.

**Note**

For information about the intelligent baseline feature, see [Overview](/help/en/dataworks/overview-29#concept-2213084).

**Task Execution Information**

Displays the execution information about the instances generated for the task within the last 30 days. You can configure the **Instance ID**, **Execution Status**, and **Instance Type** conditions to filter instances. To view instance details, find the **instance ID** and click **View Details** in the **Actions** column to go to the **Operation Center** page.

**Metric Trend**

Displays the trend of the current task over a specific period of time in various dimensions, such as **running duration**, **start time**, **completion time**, **scheduling waiting time**, **consumed CPUs**, and **consumed memory**.

**Event Records**

Displays the operation records of the current task and the governance progress of governance issues.
