Operation Center is a one-stop platform for big data operations and maintenance (O&M). It allows you to view the real-time status of your tasks and provides O&M actions such as Intelligent Diagnosis and Rerun to resolve issues with tasks. It features Smart Baseline to help you address challenges like unpredictable completion times for critical tasks and the difficulty of monitoring a massive number of tasks, ensuring timely data output. The center also provides comprehensive O&M capabilities for engines, resources, and scheduling.

## Functional modules of Operation Center

After you develop, commit, and deploy tasks in Data Studio, you can use Operation Center to perform O&M on auto triggered nodes, manually triggered nodes, and real-time nodes. These actions include running production tasks, diagnosing task execution issues, monitoring task statuses, viewing key O&M metrics, and checking engine task lists.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4677815671/CAEQTxiBgIC5rP3z1xkiIDUyZDUxY2U1YjkzMjRjN2FiZmU0ZDVjODFjOTExNThl4541793_20240814142635.166.svg)

**Note**

Operation Center requires the desktop version of the Chrome browser (Chromium engine 69 or later).

## **Important considerations**

Tasks are automatically scheduled and run only after they are deployed to the production environment. Tasks in the development environment are not automatically scheduled.

## **Access Operation Center**

Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Operation Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Operation Center**.

## **Task O&M**

The task O&M module provides O&M capabilities for three task types: auto triggered node O&M, real-time node O&M, and manually triggered node O&M. You can use the O&M Dashboard to view key metrics for task execution and use features in the O&M Assistant, such as Data Backfill, Intelligent Diagnosis, and Automated O&M, for a wide range of O&M actions.

**Module**

**Description**

**Environment availability**

**[O&M Dashboard](/help/en/dataworks/user-guide/view-the-statistics-on-the-overview-page)**

Displays key O&M metrics for **scheduled tasks** in reports and provides dedicated O&M pages for batch and real-time synchronization tasks in **Data Integration**.

This module is not available in the Development Operation Center.

**Auto Triggered Node O&M**

**[Auto Triggered Nodes](/help/en/dataworks/user-guide/perform-basic-maintenance-operations-on-auto-triggered-nodes)**

Allows you to view the **DAG** for scheduled tasks and perform actions such as **Test** and **Backfill Data**.

The Development Operation Center cannot automatically schedule and generate scheduled instances.

**[Auto Triggered Instances](/help/en/dataworks/user-guide/view-auto-triggered-node-instances)**

Lists instances generated after scheduled tasks are submitted to the scheduling system. On this page, you can view the instance **DAG**, use **Perform Diagnostics**, and **Rerun** the instance.

**[Test Instances](/help/en/dataworks/user-guide/test-an-auto-triggered-node-and-view-test-instances-of-the-node)**

Lists instances generated after you test a scheduled task. You can check the execution status of test instances, view the instance **DAG**, use **Perform Diagnostics**, and **Rerun** the instance.

**Real-time Node O&M**

**[Real-time Computing Nodes](/help/en/dataworks/user-guide/manage-real-time-compute-nodes)**

Allows you to **Start**, **Terminate**, and **Undeploy** real-time tasks, and configure **Monitoring Setting**. This helps you promptly detect and handle exceptions during task execution.

\-

**[Real-time Synchronization Nodes](/help/en/dataworks/user-guide/manage-real-time-synchronization-nodes)**

Allows you to **Start**, **Stop**, **Undeploy**, and **Change Owner** for real-time synchronization tasks, and configure **Monitoring Setting**. This helps you promptly detect and handle exceptions during task execution.

\-

**Manually Triggered Node O&M**

**[Manual Triggered Nodes](/help/en/dataworks/user-guide/manage-and-run-manually-triggered-nodes)**

You can query and view the **DAG** for manual tasks, manually triggered workflows, and event-triggered workflows. You can also manually **Run** tasks, **View Instances**, and perform other actions.

\-

**[Manual Triggered Instances](/help/en/dataworks/user-guide/view-and-manage-manually-triggered-node-instances)**

You can use the DAG to quickly view detailed instance information and perform actions such as **View Runtime Log**, **Perform Diagnostics**, **View Code**, and **View Lineage**.

\-

**O&M Assistant**

**[Data Backfill](/help/en/dataworks/user-guide/backfill-data-for-an-auto-triggered-node-and-view-data-backfill-instances-of-the-node)**

Allows you to manage data backfill tasks.

\-

**[Intelligent Diagnosis](/help/en/dataworks/user-guide/intelligent-diagnosis)**

Provides end-to-end analysis capabilities for your tasks, helping you quickly locate the source of a problem. You can view a task's **Running Details**, **Basic Information**, **Impact Baselines**, and **Historical Instance**.

This module is not available in the Development Operation Center.

**[Automatic](/help/en/dataworks/user-guide/automatic-operation-and-maintenance)**

Allows you to create **custom O&M rules**. You can define monitoring metrics and rules for instances running on a target resource group. When a rule is triggered, a predefined O&M action is automatically performed.

\-

**Note**

For a task in a scheduled instance to run, the following conditions must be met:

-   All of the task's ancestor node instances are in the success state.
    
-   The task's scheduled execution time has been reached.
    
-   Sufficient scheduling resources are available.
    
-   The task is not in the Suspended or Frozen state.
    

In Operation Center, different colors indicate different instance statuses. For details, see: [Appendix: Instance run status and execution diagnosis](/help/en/dataworks/user-guide/overview-43#title-rpr-zhm-bll).

## **Task monitoring**

The task monitoring module includes **Smart Baseline** and **Alarm**. You can configure Smart Baseline to detect and send alerts for task anomalies. You can also use the **Rule Management**, **Alert Management**, and **Schedule** features to ensure timely handling of O&M alerts.

**Module**

**Description**

**Environment availability**

**[Smart Baseline](/help/en/dataworks/user-guide/intelligent-baseline/)**

Detects and sends early warnings about exceptions that could prevent tasks on a baseline from completing on time. This ensures that critical data is generated within the expected timeframe, helping you **reduce configuration costs**, **avoid unnecessary alerts**, and **automatically monitor all critical tasks**.

This module is not available in the Development Operation Center.

**Alarm**

**[Rule Management](/help/en/dataworks/user-guide/create-a-custom-alert-rule)**

Allows you to configure custom monitoring rules. You can use these rules to monitor task run status or resource usage, helping you promptly detect and handle exceptions.

**[Alert Management](/help/en/dataworks/user-guide/view-alert-details)**

Centralizes all alerts generated by the **Node Alarm** module. This includes **baseline warning messages** and **event alerts** from **Smart Baseline**, and alerts from **custom rules** and **global rules**.

**[Schedule](/help/en/dataworks/user-guide/create-and-manage-a-shift-schedule)**

Provides a roster for handling O&M alerts, ensuring a timely response when an alert occurs or an instance requires maintenance. After you configure an on-duty schedule, DataWorks sends **Alert Information** to the on-duty personnel, allowing them to identify and resolve issues promptly.

## **Other O&M features**

In addition to task O&M and intelligent monitoring, Operation Center allows you to view details of **Compute Engine (E-MapReduce)** jobs, monitor the usage of resource groups, and customize scheduling parameters. These features offer convenient and comprehensive O&M capabilities.

**Module**

**Description**

**Environment availability**

**[Engine Maintenance](/help/en/dataworks/user-guide/use-the-engine-o-and-m-feature)**

Allows you to view the details of **Compute Engine (E-MapReduce)** jobs. This helps you promptly find and address jobs that have run with errors, preventing them from blocking downstream tasks and disrupting normal instance execution.

This module is not available in the Development Operation Center.

**[Resource](/help/en/dataworks/user-guide/resource-o-and-m)**

Visualizes resource group usage and instance task execution. It enables intelligent monitoring and Automated O&M for resource groups and instance tasks, reducing manual effort and improving management efficiency.

\-

**[Tenant Schedule Setting](/help/en/dataworks/user-guide/scheduling-settings/)**

Provides a platform where you can create and manage the **Scheduling Calendars** and **Workspace-level Parameters**, making it easier to customize task scheduling.

\-

## Appendix: Instance run status and execution diagnosis

In Operation Center, different colors and icons represent the status of a task during its execution. The following table describes each status and its corresponding icon. For more information about the prerequisites for task execution, see [Intelligent Diagnosis](/help/en/dataworks/user-guide/use-the-intelligent-diagnosis-feature).

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
