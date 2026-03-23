Nodes and workflows in your project often need to run on a recurring schedule. To run them on a schedule, you must configure scheduling properties such as the scheduling period, scheduling dependencies, and scheduling parameters in the scheduling configuration panel for each node or workflow. This topic describes how to configure these scheduling properties.

## **Prerequisites**

-   You have created a node. In DataWorks, you create nodes to define tasks. Different engine tasks are represented by different node types. You can choose the appropriate node type for your business needs. For more information, see [Develop nodes](/help/en/dataworks/user-guide/node-development-of-data-studio/).
    
-   The scheduling switch for the workspace is enabled. Tasks in a DataWorks workspace can run automatically based on their configurations only after you turn on the **Enable Periodic Scheduling** switch for the workspace. To do so, go to the **Scheduling Settings** page of the workspace. For more information, see [System settings](/help/en/dataworks/user-guide/system-settings-of-data-studio).
    

## **Important**

-   These configurations take effect only after the task is published to the production environment.
    
-   The scheduling time only defines the **expected** execution time of a task. The actual execution time also depends on the status of its ancestor nodes. For more information about task execution conditions, see [Diagnose task runs](/help/en/dataworks/user-guide/use-the-intelligent-diagnosis-feature#task-2286474).
    
-   DataWorks supports dependencies between various types of tasks. Before you configure dependencies, we recommend that you read [Principles and examples for configuring scheduling in complex dependency scenarios](/help/en/dataworks/user-guide/principles-and-examples-for-scheduling-configuration-in-complex-dependency-scenarios) to understand the default dependency behaviors in DataWorks for complex scenarios.
    
-   In DataWorks, a scheduled task generates corresponding [recurring instances](/help/en/dataworks/user-guide/view-auto-triggered-node-instances#concept-nlb-nxh-r2b) based on its scheduling type and period. For example, an hourly task generates a specific number of hourly instances each day. These instances then run the task automatically.
    
-   When you use [scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters), the scheduled time of each run and your parameter expressions determine the parameter values passed to the code. For more information about how scheduling parameters are configured and replaced, see [Sources and expressions of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters).
    
-   A **workflow** includes the workflow node itself and its internal nodes, creating complex dependencies. This topic describes only the scheduling and dependency configuration for individual nodes. For detailed information about workflow scheduling dependencies, see [Orchestrate recurring workflows](/help/en/dataworks/user-guide/workflow).
    

## **Go to the scheduling configuration page**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  Go to the scheduling configuration page.
    
    1.  In the DataStudio interface, find the target node and open its editor page.
        
    2.  Click **Scheduling Configuration** in the right-side navigation pane of the node editor page.
        

## **Configure node scheduling properties**

On the scheduling configuration page of the node, you need to configure the node's **Scheduling Parameters**, **Scheduling Policy**, **Scheduling Time**, **Scheduling Dependencies**, and **Node Output Parameters**.

### **Scheduling parameters (optional)**

If you have defined variables in the node's code, you must assign values to them here.

Scheduling parameters are automatically replaced with specific values based on the business date of the scheduled task and the format of the parameter expressions. This enables dynamic parameter replacement at runtime.

#### **Configure scheduling parameters**

You can define scheduling parameters in the following two ways.

**Method**

**Description**

**Example**

Add Parameter

You can configure multiple scheduling parameters for a single task. To add more parameters, click **Add Parameter**.

-   You can manually assign a value to a scheduling parameter. For more information, see [Sources and expressions of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters).
    
-   You can also click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6802061471/p844438.png) icon in the Actions column for a parameter to bind it to an output parameter of an ancestor node.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6802061471/p844443.png)

Load parameters from code

This feature automatically identifies variable names defined in the task's code and adds them as scheduling parameters for use in scheduled runs.

**Note**

Typically, variables are defined in the code using the `${variable_name}` format.

The variable definition format for PyODPS nodes and general Shell nodes is different from other node types. For details on the scheduling parameter formats for different node types, see [Examples of scheduling parameter configuration for different node types](/help/en/dataworks/user-guide/example-for-configuring-scheduling-parameters-for-each-type-of-node).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6802061471/p844445.png)

#### **Supported formats for scheduling parameters**

For more information, see [Sources and expressions of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters).

#### **Verify scheduling parameters in production**

To prevent task failures from incorrect scheduling parameters, we recommend going to the **Auto Triggered Task** page in Operation Center to check the scheduling parameter configuration of the task in the production environment after publishing it. For more information about how to view Auto Triggered Tasks, see [Manage Auto Triggered Tasks](/help/en/dataworks/user-guide/view-and-manage-auto-triggered-nodes#task-2056582).

### **Scheduling policy**

The scheduling policy defines the instance generation mode, scheduling type, computing resources, and resource group for an Auto Triggered Task.

**Parameter**

**Description**

**Instance generation mode**

After a node is published to the production scheduling system, the platform generates automated **recurring instances** based on the configured **Instance generation mode**.

-   **Generate on T+1 (next day)**: After a node is published to the production environment, it is automatically scheduled on the next day. You can view the execution status of the task on the [recurring instance](/help/en/dataworks/user-guide/view-auto-triggered-node-instances#concept-nlb-nxh-r2b) page. If you need to run the task on the same day, you can perform a [data backfill](/help/en/dataworks/user-guide/backfill-data-for-an-auto-triggered-node-and-view-data-backfill-instances-of-the-node#task-2105702) operation for the task. A data backfill for the business date `yesterday` runs in the same way as the recurring instance for `today`.
    
-   **Generate Immediately After Publishing**: The node is automatically scheduled on the same day it is published to the production environment. You can view the task execution status on the [Recurring Instances](/help/en/dataworks/user-guide/view-auto-triggered-node-instances#concept-nlb-nxh-r2b) page. When you create a new task with this mode, whether the task actually processes data or performs a dry run on the first day depends on its scheduled time and publish time. If you modify the scheduling period of a published production task, DataWorks replaces the future instances based on the new schedule but does not delete past instances.
    

**Scheduling type**

-   **Normal**
    
    -   Use case: For recurring tasks that should run normally, generating instances that also run normally.
        
    -   Effect: The task starts at the configured scheduling time and executes normally, meaning it processes real data.
        
        After the current node runs successfully, it triggers the normal scheduling of its descendant nodes. This is the default scheduling type for most tasks.
        
-   **Skip Execution**
    
    -   Use case: For recurring tasks that are in a frozen state, which generate frozen instances. The current node cannot run and blocks the execution of its descendant nodes.
        
        You can use this scheduling type to freeze the root node of a business process that does not need to run for a period. When the process needs to run again, you can unfreeze the root node. For more information about unfreezing tasks, see [Freeze and unfreeze tasks](/help/en/dataworks/node-freezing-and-unfreezing#concept-2098652).
        
    -   Effect: The task is triggered at the configured scheduling time, but its state is set to paused, meaning it does not process real data.
        
        When the scheduler reaches this task, it immediately returns a failure status and blocks the execution of any descendant nodes that depend on it.
        
-   **Dry-run**
    
    -   Use case: When a node does not need to run for a period but should not block its descendant nodes, you can select this scheduling type.
        
    -   Effect: The task is triggered at the configured scheduling time, but it performs a dry-run, meaning it does not process real data.
        
        When this task is scheduled, the system immediately returns a success status with an execution time of `0` seconds. The task is not actually executed, which means the execution log is empty. It does not block the execution of descendant nodes that depend on the current node, so they can run normally. The task also does not consume any resources.
        

**Timeout period**

If you set a timeout period, the task automatically terminates if its runtime exceeds this duration. The following rules apply:

-   The timeout period applies to recurring instances, data backfill instances, and test instances.
    
-   The default timeout period is between 3 to 7 days. The system dynamically adjusts the default timeout based on the actual system load.
    
-   When you manually set a timeout, the maximum value is 168 hours (7 days).
    

**Rerun property**

Specifies whether and when the node can be rerun.

You must specify a rerun property. The supported types and their use cases are as follows:

-   **The Node Can Be Rerun Regardless Of Whether It Succeeds Or Fails**: Use this type if rerunning the node multiple times does not affect the result.
    
-   **The Node Cannot Be Rerun If It Succeeds But Can Be Rerun If It Fails**: Use this type if rerunning the node after a successful run would affect the result, but rerunning it after a failure would not.
    
-   **The Node Cannot Be Rerun Regardless Of Whether It Succeeds Or Fails**: Use this type if rerunning the node affects the result regardless of whether the previous run succeeded or failed (for example, certain data synchronization nodes).
    
    **Note**
    
    -   If you select this type, the system does not automatically rerun the corresponding nodes after a system failure is resolved.
        
    -   You cannot configure **Automatic Rerun Upon Failure**.
        
    

**Automatic Rerun Upon Failure**

When enabled, if a task fails (excluding manual termination), the scheduling system automatically triggers a rerun based on the number of retries and retry interval.

-   **Number Of Retries**: The number of times an Auto Triggered Task is automatically rerun if it fails.
    
    The minimum is 1 retry, and the maximum is 10. You can change this value based on your business needs.
    
-   **Retry Interval**: The default interval between retries is 30 minutes. The minimum is 1 minute, and the maximum is 30 minutes.
    

**Note**

-   You can set the default number of retries and retry interval at the workspace level on the **Scheduling Settings** page. For more information, see [System settings](/help/en/dataworks/user-guide/system-settings-of-data-studio).
    
-   The automatic rerun configuration does not take effect if a node fails due to a timeout.
    

**Computing resource**

Configure the engine resources required to run the task. To create new resources, you can go to [manage computing resources](/help/en/dataworks/user-guide/create-and-manage-compute-resources/).

**Computing quota**

You can configure the computing quota required to run the task in [MaxCompute SQL nodes](/help/en/dataworks/user-guide/maxcompute-sql-node) and [MaxCompute Script nodes](/help/en/dataworks/user-guide/maxcompute-script-node). Quotas provide computing resources (CPU and memory) for computing jobs.

**Schedule resource group**

Configure the schedule resource group used to run the task. Select a resource group as needed.

-   To change the default resource group for new tasks, go to the **Scheduling Settings** page. For more information, see [System settings](/help/en/dataworks/user-guide/system-settings-of-data-studio).
    
-   To change the resource group for an existing task, see [General reference: Switch resource groups](/help/en/dataworks/user-guide/change-the-resource-group-used-by-nodes).
    

**Maximum parallel instances**

Limits the maximum number of parallel instances for a single task to provide concurrency control and resource protection. By default, the number of parallel instances is not limited. When this limit is enabled, you can set the number of parallel instances. The default value is `1`, and the value range is `1–10000`.

-   Scope of parallel instance configuration:
    
    -   Recurring workflow: recurring instances, data backfill instances, and test instances.
        
    -   Triggered workflow: triggered instances.
        
        **Note**
        
        You can set the maximum number of parallel instances for tasks within a triggered workflow to limit the concurrent execution of all internal node instances generated by that workflow. If this is configured along with the maximum parallel instances for a single node, both limits must be met.
        
-   This limit does not affect existing instances and applies only to those generated after it is enabled.
    
-   When multiple types of instances are queued, only the priority of data backfill instances for non-current days is lowered.
    

**Dataset**

Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6255561671/p979707.png) to add an [existing dataset](/help/en/dataworks/user-guide/manage-datasets) to the node. Datasets can be added during development only for [Shell nodes](/help/en/dataworks/user-guide/shell-node), [Python nodes](/help/en/dataworks/user-guide/python-for-new-diea), and [basic Notebook development](/help/en/dataworks/user-guide/basic-notebook-development) nodes.

-   **Dataset**: Select a dataset from the drop-down list of all datasets created in the current workspace.
    
    -   When you select a dataset of the **Object Storage Service (OSS)** type, you must grant the resource group access to the bucket for the first time. A bucket only needs to be authorized once.
        
    -   When you select a dataset of the **file storage (NAS)** type, if the network of the current DataWorks resource group is not connected to the NAS mount point, you must adjust the VPC network to ensure connectivity.
        
        **Note**
        
        The network is connected if the VPC bound to the DataWorks resource group is the same as the VPC bound to the NAS mount point.
        
-   **Mount path:** The default mount path configured for the dataset is automatically read, but you can modify it manually.
    
-   **Advanced Configuration:** When developing nodes that read from OSS or NAS datasets, you can configure different [datasets](/help/en/dataworks/user-guide/manage-datasets#1971834f80hkk) to adjust settings like the **read method** and **mount protocol**.
    
-   **Read-only:** If enabled, the data development task can only read data and cannot write data to OSS or NAS during its run.
    

### **Scheduling time**

Use scheduling time to configure the period, time, and other information for the automated execution of a scheduled task.

**Note**

For nodes in a workflow, the **Scheduling Time** and related parameters are set in the **Scheduling Configuration** of the workflow page. For nodes that are not in a workflow, the **Scheduling Time** is set in the **Scheduling Configuration** of each individual node.

#### **Important**

-   **Task scheduling frequency is independent of ancestor task periods**
    
    The frequency at which a task is scheduled depends on its own defined scheduling period, not that of its ancestor tasks.
    
-   **DataWorks supports dependencies between tasks with different scheduling periods**
    
    In DataWorks, a scheduled task generates corresponding recurring instances based on its scheduling type and period (for example, an hourly task generates a number of hourly instances each day) and runs through these instances. The dependencies set between recurring tasks are essentially dependencies between the instances they generate. The number of recurring instances and their dependency relationships vary for ancestor and descendant tasks with different scheduling types. For more information on dependencies between tasks with different scheduling periods, see [Choose a scheduling dependency method (cross-cycle dependencies)](/help/en/dataworks/user-guide/scheduling-dependency-mode-selection-cross-cycle-dependency).
    
-   **Tasks perform dry runs outside their scheduled time**
    
    Non-daily tasks (such as weekly or monthly) perform a [dry-run](/help/en/dataworks/user-guide/task-empty-running) and return a success status on non-scheduled days. This allows any daily descendant tasks to run normally on their own schedule.
    
-   **Task execution time**
    
    This section only configures the expected scheduling time for a task. The actual execution time depends on multiple factors, such as the completion time of ancestor tasks, resource availability, and the actual run conditions of the task. For more information, see [Task run conditions](/help/en/dataworks/nodes-that-are-not-run#section-rq2-hyd-efk).
    

#### **Configure scheduling time**

**Parameter**

**Description**

Scheduling period

The scheduling period defines how often a task runs automatically. It determines how frequently the code logic within a node is executed in the production environment. A scheduled task generates corresponding recurring instances based on its scheduling type and period (for example, an hourly task generates a number of hourly instances each day) and runs automatically through these recurring instances.

-   Minute-level scheduling: A scheduled task runs at an interval of `N * a specified minute interval` within a specified time period each day. The minimum granularity for the **Time Interval** is 1 minute.
    
-   Hourly scheduling: Within a specified time range each day, the scheduled task runs once per `interval of N * 1 hour`.
    
-   Day: The node runs once at a specified time each day. When you create a new recurring task, the default daily schedule is to run at 00:00 every day. You can specify a different time as needed.
    
-   Week: The task runs once at a specified time on specific days of the week.
    
-   Month: The task runs once at a specified time on specific days of the month.
    
-   Year: The task runs once at a specified time on specific days of the year.
    

**Important**

Weekly, monthly, and yearly tasks still generate instances daily outside of their scheduled run times. These instances show a success status but actually perform a [dry-run](/help/en/dataworks/user-guide/task-empty-running) and do not execute the task.

Effective date

A scheduled node is effective and runs automatically within its effective date range. Tasks that are past their effective date are no longer scheduled automatically. These are considered expired tasks. You can view the number of expired tasks on the [O&M dashboard](/help/en/dataworks/user-guide/view-the-statistics-on-the-overview-page#task-1954994) and take actions such as decommissioning them.

Cron expression

This expression is automatically generated based on the time property settings and does not need to be configured.

### **Scheduling dependencies**

In DataWorks, scheduling dependencies define the ancestor-descendant relationships between nodes. A descendant node runs only after all its ancestor nodes have run successfully. This structure prevents a descendant node from accessing data before its ancestor nodes have finished generating it, thus avoiding data consistency issues.

#### **Important**

-   After node dependencies are configured, by default, one of the conditions for a descendant node to run is that all of its ancestor nodes have run successfully. Otherwise, data quality issues may occur when the current task retrieves data.
    
-   The actual run time of a task depends not only on its own scheduled time (the expected execution time in a scheduling scenario) but also on the completion time of its ancestor tasks. A descendant task does not run even if its scheduled time is earlier than that of an ancestor task if the ancestor task has not completed its run. For more information about task run conditions, see [Diagnose task runs](/help/en/dataworks/user-guide/use-the-intelligent-diagnosis-feature#task-2286474).
    

#### **Configure scheduling dependencies**

Task dependencies in DataWorks are ultimately designed to ensure that descendant nodes retrieve data correctly, which in practice means they rely on the data lineage between ancestor and descendant tables. You can choose whether to configure scheduling dependencies based on table lineage according to your business needs. The process for configuring node scheduling dependencies is as follows.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9009372771/CAEQVBiBgICqodL95RkiIDNiOWQyMWRmMGE1OTQwYTViMjMxYTlhMWE0ZGI0YzIx4638100_20240904161303.490.svg)

A dependency implies a strong data lineage relationship, meaning the descendant node's output relies on the ancestor node's output. Before configuring a dependency, confirm that this relationship is required. Ask: "Will the task fail or produce incorrect results if its ancestor's data is not ready?" If yes, a strong dependency exists.

**Step**

**Description**

①

To avoid unexpected execution times for the current task, first assess whether a strong dependency exists between tables to determine if you need to configure scheduling dependencies based on data lineage.

②

Confirm whether the data is from a table produced by an Auto Triggered Task. DataWorks cannot monitor data production through task run status for tables not produced by its recurring scheduler. Therefore, scheduling dependencies cannot be configured for some tables.

Tables not produced by DataWorks recurring schedules include, but are not limited to, the following types:

-   Tables produced by real-time synchronization.
    
-   Tables uploaded to DataWorks from a local source.
    
-   Dimension tables.
    
-   Tables produced by manually triggered tasks.
    
-   Periodically changing tables produced by nodes not scheduled on DataWorks.
    

③④

Depending on whether you need to depend on yesterday's or today's data from the ancestor, or whether an hourly or minute task needs to depend on its own previous instance, choose to depend on the **same cycle** or the **previous cycle** of the ancestor.

-   Same-cycle dependency: The descendant depends on the table data produced by the ancestor on the same day.
    
-   Previous-cycle dependency (cross-cycle dependency):
    
    -   The descendant depends on the table data produced by the ancestor on the previous day.
        
    -   Special dependency scenarios for hourly and minute tasks:
        
        -   To depend on the data from its own previous hourly or minute recurring instance, you can set a cross-cycle dependency.
            
        -   For an hourly task depending on another hourly task, if their scheduled times are identical, setting a cross-cycle dependency allows the 02:00 instance of the descendant to depend on the 01:00 instance of the ancestor. The same principle applies to minute tasks.
            

**Note**

For details on configuring dependency scenarios based on data lineage, see [Choose a scheduling dependency method (same-cycle dependencies)](/help/en/dataworks/user-guide/scenario-selection-based-on-consanguinity-configuration-scheduling-dependency).

⑤⑥⑦

After configuring the dependencies and publishing to the production environment, you can check the task's dependency relationships in **Auto Triggered Task** in Operation Center to verify that they are correct.

#### **Configure custom node dependencies**

If there is no strong data lineage dependency between tasks on DataWorks (for example, the task does not strongly depend on a specific partition of an ancestor but only retrieves the latest partition at the current time), or if the dependent data is not from a table produced by an Auto Triggered Task (for example, locally uploaded table data), you can customize the node's dependencies. The custom dependency configurations are as follows:

-   **Depend on the root node of the workspace**
    
    For scenarios such as a synchronization task where the source data comes from another business database, or an SQL task processing table data produced by a real-time synchronization task, you can directly choose to mount the dependency on the workspace root node.
    
-   **Depend on a zero load node**
    
    When a workspace contains many or complex business processes, you can use a [zero load node](/help/en/dataworks/user-guide/virtual-node) to manage them. By mounting dependencies of nodes that require unified control onto a specific zero load node, you can make the data flow path within the workspace clearer. For example, you can control the overall scheduling time or enable/disable scheduling (freeze) for an entire business process.
    

### **Node output parameters**

You can pass a value from an ancestor node to a descendant node. To do this, define an output parameter in the ancestor node, then create an input parameter in the descendant node that references it.

#### **Important**

-   A node's **output parameter** can only be used as an input parameter for a descendant node (you add a parameter in the descendant node's scheduling parameters section and bind it to the ancestor's parameter by clicking the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6802061471/p844438.png) icon). Some nodes cannot directly pass query results to descendant nodes. If you need to pass query results from an ancestor node to a descendant node, you can use an assignment node. For more information, see [Assignment nodes](/help/en/dataworks/user-guide/assignment-node).
    
-   Nodes that support output parameters are: `EMR Hive`, `EMR Spark SQL`, `ODPS Script`, `Hologres SQL`, `AnalyticDB for PostgreSQL`, and `MySQL` nodes.
    

#### **Configure node output parameters**

The value of a **Node Output Parameter** can be a **Constant** or a **Variable**.

After defining the output parameters and submitting the current node, you can **Bind The Output Parameter Of The Ancestor Node** as an input parameter for the descendant node when configuring its scheduling parameters.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6802061471/p844696.png)

-   Parameter name: The name of the defined output parameter.
    
-   Parameter value: The value of the output parameter. Value types include constants and variables:
    
    -   A constant is a fixed string.
        
    -   Variables include system-supported global variables, built-in scheduling parameters, and custom parameters.
        

## **Configure a linked role for a node**

DataWorks **linked roles** let you assign a preset RAM role to a specific task node. When the task runs, it dynamically obtains temporary access credentials for the role through Alibaba Cloud Security Token Service (STS). This allows your code to access other cloud resources without needing to include a permanent AccessKey (AK) in plain text.

**Important**

-   **Resource group restrictions**: Only nodes that run on a **Serverless resource group** are supported.
    
-   **Node type restrictions**: Only Python, Shell, Notebook, PyODPS 2, and PyODPS 3 nodes are supported.
    

#### **1\. Configure a linked role in a DataWorks node**

1.  On the right side of the node editing page, find and click **Run Configuration**.
    
2.  In the scheduling settings panel, switch to the **Linked Role** tab.
    
3.  From the **RAM Role** drop-down list, select the RAM role that you prepared.
    
    **Important**
    
    If the drop-down list is empty or you cannot find the required role, see [Configure a linked role to access other cloud services by using STS](/help/en/dataworks/user-guide/configure-an-associated-role-using-sts-to-access-other-cloud-products) to complete the RAM role configuration.
    
4.  After the configuration is complete, submit the node. This configuration takes effect only for **debug runs**.
    

#### **2\. Obtain and use temporary credentials in your code**

After you configure the linked role, DataWorks injects the obtained temporary credentials into the runtime environment when the task runs. You can obtain them in your code in the following two ways.

##### **Method 1: Read environment variables (recommended for Shell and Python)**

The system automatically sets the following three environment variables. You can read them directly in your code.

-   `LINKED_ROLE_ACCESS_KEY_ID`: The temporary AccessKey ID.
    
-   `LINKED_ROLE_ACCESS_KEY_SECRET`: The temporary AccessKey secret.
    
-   `LINKED_ROLE_SECURITY_TOKEN`: The temporary security token.
    

**Code sample (Python):**

**Important**

For this case, you must select a custom Python image with oss2 installed for the runtime environment. For more information, see [Custom images](/help/en/dataworks/user-guide/custom-image).

```
import os
import oss2

# 1. Obtain temporary credentials from environment variables.
access_key_id = os.environ.get('LINKED_ROLE_ACCESS_KEY_ID')
access_key_secret = os.environ.get('LINKED_ROLE_ACCESS_KEY_SECRET')
security_token = os.environ.get('LINKED_ROLE_SECURITY_TOKEN')

# Check if the credentials were obtained.
if not all([access_key_id, access_key_secret, security_token]):
    raise Exception("Failed to get linked role credentials from environment variables.")

# 2. Use the temporary credentials to initialize the OSS client.
# Assume that you have granted the role permissions to access 'your-bucket-name'.
auth = oss2.StsAuth(access_key_id, access_key_secret, security_token)
bucket = oss2.Bucket(auth, 'http://oss-<regionID>-internal.aliyuncs.com', 'your-bucket-name')

# 3. Use the client to access OSS resources.
try:
    # List objects in the bucket.
    for obj in oss2.ObjectIterator(bucket):
        print('object name: ' + obj.key)
    print("Successfully accessed OSS with linked role.")
except oss2.exceptions.OssError as e:
    print(f"Error accessing OSS: {e}")
```

**Code sample (Shell):**

```
#!/bin/bash
access_key_id=${LINKED_ROLE_ACCESS_KEY_ID}
access_key_secret=${LINKED_ROLE_ACCESS_KEY_SECRET}
security_token=${LINKED_ROLE_SECURITY_TOKEN}

# To access OSS, replace regionID, bucket_name, and file_name with your actual information.
echo "ID: "$access_key_id
echo "token: "$security_token
ls -al /home/admin/usertools/tools/

# This example shows how to use ossutil to download a file from a specified OSS path to the local test_dw.py file and then print the file content.
/home/admin/usertools/tools/ossutil64 cp --access-key-id $access_key_id --access-key-secret $access_key_secret --sts-token $security_token --endpoint http://oss-<regionID>-internal.aliyuncs.com oss://<bucket_name>/<file_name> test_dw.py
echo "************************ Success ************************, printing result"
cat test_dw.py
```

##### **Method 2: Use Credentials Client (recommended for Python)**

**Code sample (Python):**

**Important**

For this case, you must select a custom Python image with **oss2** and **alibabacloud\_credentials** installed for the runtime environment. For more information, see [Custom images](/help/en/dataworks/user-guide/custom-image).

```
from alibabacloud_credentials.client import Client as CredentialClient
import oss2

# 1. Use the SDK to automatically obtain credentials.
# It automatically searches for credential information such as LINKED_ROLE_* in environment variables.
cred_client = CredentialClient()
credential = cred_client.get_credential()

access_key_id = credential.get_access_key_id()
access_key_secret = credential.get_access_key_secret()
security_token = credential.get_security_token()

if not all([access_key_id, access_key_secret, security_token]):
    raise Exception("Failed to get linked role credentials via SDK.")

# 2. Use the credentials to initialize the OSS client.
auth = oss2.StsAuth(access_key_id, access_key_secret, security_token)
bucket = oss2.Bucket(auth, 'http://oss-cn-hangzhou.aliyuncs.com', 'your-bucket-name')

# 3. Access OSS.
print("Listing objects in bucket...")
for obj in oss2.ObjectIterator(bucket):
    print(' - ' + obj.key)
print("Successfully accessed OSS with linked role via SDK.")
```

#### **3\. Run and verify the task**

**Important**

-   **Shell and Python**: When the task runs, it uses the specified RAM role to access other cloud services.
    
-   **PyODPS**: When accessing other cloud services such as OSS, the task uses the identity of the RAM role that you set. However, when accessing MaxCompute data, it still automatically uses the access identity configured for the computing resources at the project level.
    

**Configure scheduling properties**

After you finish debugging the node, you must synchronize the **Run Configuration** in the **Run Configurations** to the **Associated Role** > **RAM Role** setting in the **Scheduling Configurations**. After publishing, the task will run as this role.

> If you configure a custom image in the **Run Configuration**, you must also synchronize this setting to the scheduling settings.

**View the execution role in Operation Center**

After the task runs, view the details of the task instance in **Operation Center** to confirm that the specified role was used.

1.  Go to **Operation Center** > **Auto Triggered Task O&M** > **Recurring Instance**.
    
2.  Find the instance of the node that you ran and click it to go to the details page.
    
3.  In the **Properties** section of the instance details page, view the **Execution Identity** field. This field displays the Alibaba Cloud Resource Name (ARN) of the linked role that was actually used for this run.
    
    > An ARN is a unique resource identifier. For more information, see [Basic elements of a policy](/help/en/ram/policy-elements#section-gc4-ivx-2k9).
    

## **References**

-   Scheduling parameters: [Scheduling parameter format reference](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters).
    
-   Scheduling policies:
    
    -   [On-demand instance generation reference](/help/en/dataworks/user-guide/instance-generation-method-instantly-generate-an-instance-after-publishing).
        
    -   [Task dry-run reference](/help/en/dataworks/user-guide/task-empty-running).
        
-   Scheduling time: [Scheduling time reference](/help/en/dataworks/user-guide/detailed-description-of-scheduling-cycle-of-data-studio).
    
-   Scheduling dependencies:
    
    -   [Cross-cycle dependency reference](/help/en/dataworks/user-guide/scheduling-dependency-mode-selection-cross-cycle-dependency).
        
    -   [Same-cycle dependency reference](/help/en/dataworks/user-guide/scenario-selection-based-on-consanguinity-configuration-scheduling-dependency).
        
    -   [Complex scenario dependency reference](/help/en/dataworks/user-guide/principles-and-examples-for-scheduling-configuration-in-complex-dependency-scenarios).
        
    -   [Special scenario dependency reference](/help/en/dataworks/user-guide/special-scenarios-in-periodic-scheduling).
        
-   Node output parameters: [Configure and use node context parameters](/help/en/dataworks/user-guide/configure-and-use-node-context-parameters).
    
-   Other references: [Impact of daylight saving time changes on scheduled task execution](/help/en/dataworks/user-guide/effect-of-daylight-saving-time-switching-on-scheduling-task-running).
