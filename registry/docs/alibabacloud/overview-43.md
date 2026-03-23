Operation Center is a one-stop operations and maintenance (O&M) platform in DataWorks. It monitors real-time task status, provides O&M actions such as **Intelligent Diagnosis** and **Rerun**, and uses **Smart Baseline** to track critical task completion times across large volumes of tasks. Operation Center also covers O&M for engines, resources, and scheduling.

**Note**

Operation Center requires the desktop version of the Chrome browser (Chromium engine 69 or later).

## Prerequisites

Tasks are automatically scheduled and run only after you deploy them to the production environment. Tasks in the development environment are not automatically scheduled.

## Access Operation Center

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview).
    
2.  In the top navigation bar, select the desired region.
    
3.  In the left-side navigation pane, choose **Data Development and O&M** > **Operation Center**.
    
4.  Select the desired workspace from the drop-down list and click **Go to Operation Center**.
    

## Functional modules

After you develop, commit, and deploy tasks in DataStudio, use Operation Center to perform O&M on auto triggered nodes, manually triggered nodes, and real-time nodes. Operations include running production tasks, diagnosing execution issues, monitoring statuses, viewing O&M metrics, and checking engine task lists.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5984342771/CAEQTxiBgIC5rP3z1xkiIDUyZDUxY2U1YjkzMjRjN2FiZmU0ZDVjODFjOTExNThl4541793_20240814142635.166.svg)

### Auto triggered node O&M

**Module**

**Description**

**Availability**

**[Auto Triggered Nodes](/help/en/dataworks/user-guide/perform-basic-maintenance-operations-on-auto-triggered-nodes)**

View the DAG (Directed Acyclic Graph) for scheduled tasks. Perform actions such as **Test** and **Backfill Data**.

The Development Operation Center cannot automatically schedule and generate scheduled instances.

**[Auto Triggered Instances](/help/en/dataworks/user-guide/view-auto-triggered-node-instances)**

List instances generated after scheduled tasks are submitted to the scheduling system. View the instance DAG, use **Perform Diagnostics**, and **Rerun** the instance.

\-

**[Test Instances](/help/en/dataworks/user-guide/test-an-auto-triggered-node-and-view-test-instances-of-the-node)**

List instances generated after you test a scheduled task. Check execution status, view the instance DAG, use **Perform Diagnostics**, and **Rerun** the instance.

\-

### Real-time node O&M

**Module**

**Description**

**Availability**

**[Real-time Computing Nodes](/help/en/dataworks/user-guide/manage-real-time-compute-nodes)**

**Start**, **Terminate**, and **Undeploy** real-time tasks. Configure **Monitoring Setting** to detect and handle exceptions during task execution.

\-

**[Real-time Synchronization Nodes](/help/en/dataworks/user-guide/manage-real-time-synchronization-nodes)**

**Start**, **Stop**, **Undeploy**, and **Change Owner** for real-time synchronization tasks. Configure **Monitoring Setting** to detect and handle exceptions during task execution.

\-

### Manually triggered node O&M

**Module**

**Description**

**Availability**

**[Manually Triggered Nodes](/help/en/dataworks/user-guide/manage-and-run-manually-triggered-nodes)**

Query and view the DAG for manual tasks, manually triggered workflows, and event-triggered workflows. **Run** tasks, **View Instances**, and perform other actions.

\-

**[Manually Triggered Instances](/help/en/dataworks/user-guide/view-and-manage-manually-triggered-node-instances)**

View detailed instance information in the DAG. Perform actions such as **View Runtime Log**, **Perform Diagnostics**, **View Code**, and **View Lineage**.

\-

### O&M Dashboard

**Module**

**Description**

**Availability**

**[O&M Dashboard](/help/en/dataworks/user-guide/view-the-statistics-on-the-overview-page)**

Display O&M metrics for scheduled tasks in reports. Provides dedicated O&M pages for batch and real-time synchronization tasks in **Data Integration**.

Not available in the Development Operation Center.

### O&M Assistant

**Module**

**Description**

**Availability**

**[Data Backfill](/help/en/dataworks/user-guide/backfill-data-for-an-auto-triggered-node-and-view-data-backfill-instances-of-the-node)**

Manage data backfill tasks.

\-

**[Intelligent Diagnosis](/help/en/dataworks/user-guide/intelligent-diagnosis)**

End-to-end analysis to locate the source of a problem. View a task's **Running Details**, **Basic Information**, **Impact Baselines**, and **Historical Instance**.

Not available in the Development Operation Center.

**[Automatic](/help/en/dataworks/user-guide/automatic-operation-and-maintenance)**

Create custom O&M rules. Define monitoring metrics and rules for instances running on a target resource group. When a rule triggers, a predefined O&M action runs automatically.

\-

**Note**

For a task in a scheduled instance to run, all of the following conditions must be met:

-   All ancestor node instances are in the success state.
    
-   The scheduled execution time has been reached.
    
-   Sufficient scheduling resources are available.
    
-   The task is not in the Suspended or Frozen state.
    

### Task monitoring

Use **Smart Baseline** to detect and alert on task anomalies. Use **Rule Management**, **Alert Management**, and **Schedule** to handle O&M alerts.

**Module**

**Description**

**Availability**

**[Smart Baseline](/help/en/dataworks/user-guide/intelligent-baseline/)**

Detect and send early warnings about exceptions that could prevent tasks on a baseline from completing on time. Ensures critical data is generated within the expected timeframe. Reduces configuration costs, avoids unnecessary alerts, and automatically monitors all critical tasks.

Not available in the Development Operation Center.

**[Rule Management](/help/en/dataworks/user-guide/create-a-custom-alert-rule)**

Configure custom monitoring rules to monitor task run status or resource usage. Detect and handle exceptions.

\-

**[Alert Management](/help/en/dataworks/user-guide/view-alert-details)**

Centralize all alerts generated by the **Node Alarm** module, including baseline warning messages and event alerts from **Smart Baseline**, and alerts from custom rules and global rules.

\-

**[Schedule](/help/en/dataworks/user-guide/create-and-manage-a-shift-schedule)**

Create a roster for handling O&M alerts. After you configure an on-duty schedule, DataWorks sends **Alert Information** to the on-duty personnel.

\-

### Engine, resource, and scheduling O&M

**Module**

**Description**

**Availability**

**[Engine Maintenance](/help/en/dataworks/user-guide/use-the-engine-o-and-m-feature)**

View details of **Compute Engine (E-MapReduce)** jobs. Find and address jobs that have run with errors before they block downstream tasks and disrupt instance execution.

Not available in the Development Operation Center.

**[Resource](/help/en/dataworks/user-guide/resource-o-and-m)**

Visualize resource group usage and instance task execution. Enable intelligent monitoring and Automated O&M for resource groups and instance tasks.

\-

**[Tenant Schedule Setting](/help/en/dataworks/user-guide/scheduling-settings/)**

Create and manage **Scheduling Calendars** and **Workspace-level Parameters** to customize task scheduling.

\-

## Appendix: Instance run status and execution diagnosis

Different colors and icons in Operation Center represent task execution status. For more information about execution prerequisites, see [Intelligent Diagnosis](/help/en/dataworks/user-guide/use-the-intelligent-diagnosis-feature).

**No.**

**Status**

**Status icon**

**Run flowchart**

1

Success

![Successful](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0518004361/p309801.png)

![Run flowchart](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9439227461/p337451.png)

2

Not Running

![Not Run](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0518004361/p309802.png)

3

Failed

![Failed](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0518004361/p309803.png)

4

Running

![Running](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0518004361/p309804.png)

5

Pending

![Waiting](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0518004361/p309805.png)

6

Suspended/Frozen

![Suspended/Frozen](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0518004361/p309806.png)
