Before you start a job, you must configure its deployment. This topic describes how to configure a job deployment.

## Prerequisites

-   Grant the required permissions to the Alibaba Cloud account or Resource Access Management (RAM) user that you use to access the project and configure job resources. For more information, see [Grant permissions in the development console](/help/en/flink/realtime-flink/user-guide/grant-permissions-for-the-development-console).
    
-   A job is deployed. For more information, see [Deploy a job](/help/en/flink/realtime-flink/user-guide/create-a-deployment).
    

## Procedure

1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
    
2.  Find the target workspace and click **Console** in the **Actions** column.
    
3.  On the **Operation Center** > **Job O&M** page, click the name of the job.
    
4.  On the **Deployment Details** tab, click **Edit** to the right of the target section.
    
    **Note**
    
    To edit the basic configuration of an SQL job, you must return to the **Data Studio** > **ETL** page to edit the job draft and redeploy it. After you click **Edit** to the right of the **Basic Configuration** section, click **OK** in the dialog box that appears.
    
5.  Modify the job deployment information.
    
    You can modify the deployment information in the following sections:
    
    -   [Basic configuration](#section-2ux-l0i-r5y)
        
    -   [Resource configuration](/help/en/flink/realtime-flink/user-guide/configure-deployment-resources)
        
    -   [Runtime parameter configuration](#section-o8m-6ee-10k)
        
    -   [Log configuration](#section-lyl-b53-ebg)
        
    
6.  Click **Save**.
    

## Basic configuration

**Job type**

**Description**

SQL job

Includes SQL code and information for **Engine Version**, **Additional Dependencies**, **Description**, and **Job Tags**. For more information about the parameters, see [Job development map](/help/en/flink/realtime-flink/user-guide/develop-an-sql-draft#task-2046613).

**Note**

After you click **Edit** to the right of the **Basic Configuration** section, you must return to the SQL development page to edit the job draft and redeploy it. To continue editing, click **OK**.

JAR job

Includes **Engine Version**, **JAR Uri**, **Entry Point Class**, **Entry Point Main Arguments**, **Additional Dependencies**, **Description**, **Kerberos Cluster**, and **Job Tags**. For more information about the parameters, see [Deploy a job](/help/en/flink/realtime-flink/user-guide/create-a-deployment).

Python job

Includes **Engine Version**, **Python Uri**, **Entry Module**, **Entry Point Main Arguments**, **Python Libraries**, **Python Archives**, **Additional Dependencies**, **Description**, **Kerberos Cluster**, and **Job Tags**. For more information about the parameters, see [Deploy a job](/help/en/flink/realtime-flink/user-guide/create-a-deployment).

## Runtime parameter configuration

**Parameter**

**Description**

**System checkpoint interval**

The interval at which system checkpoints are periodically performed. If you leave this parameter empty, system checkpoints are disabled.

**System checkpoint timeout**

The default value is 10 minutes. If a system checkpoint is not generated within the specified timeout period, the checkpoint fails.

**Minimum interval between system checkpoints**

The minimum interval between two system checkpoints. If the maximum degree of parallelism for system checkpoints is 1, this setting ensures a minimum time gap between two consecutive checkpoints.

**State data TTL**

The time-to-live (TTL) of state information, in hours. The default value is **36 hours**. This means the job's state information automatically expires and is purged after 36 hours.

**Important**

This default value is based on Alibaba Cloud best practices and differs from the open source default. The open source default is 0, which means the state information never expires.

When data first enters the system and is processed, it is stored in state memory. When new data with the same primary key arrives, the system uses the stored state data for computation and updates its access time. This process is central to real-time computing because it relies on a continuous flow of data. If data is not accessed again within the configured TTL time window, the system considers it expired and purges it from state storage.

Setting a proper TTL value maintains computational accuracy and promptly cleans up old data. This reduces state memory usage, lessens the system's memory load, and improves both computational efficiency and system stability.

**Flink restart policy**

The restart behavior of a Flink job is determined by two policies: a job-level restart policy and a task-level fault recovery policy.

**Job-level restart policy**

Flink decides whether to restart a job based on whether checkpointing is enabled only when a job-level restart policy is not configured.

-   If checkpointing is enabled, Flink restarts the job using the Fixed Delay policy.
    
-   If checkpointing is disabled, Flink does not restart the job.
    

**Explicitly configure a job-level restart policy**

-   **No Restarts**: The job does not restart after a failure.
    
-   **Fixed Delay (default)**: After a failure, the job attempts to restart at a fixed interval. You must set the maximum number of restart attempts and the delay between attempts.
    
-   **Failure Rate**: Restarts the job based on a failure rate. You must set the failure rate interval, the maximum number of failures within the interval, and the delay between restart attempts.
    

**Task-level fault recovery policy**

This policy controls how to restart a task after it fails. Configure this using the `jobmanager.execution.failover-strategy` parameter. The options are as follows:

-   **full**: Restarts the entire job. If any task fails, all tasks are restarted.
    
-   **region (default)**: Restarts only the minimum set of tasks required. These tasks form a pipelined region.
    

For more information, see [Restart Strategies](https://nightlies.apache.org/flink/flink-docs-release-2.1/docs/ops/state/task_failure_recovery/#:~:text=recover%20the%20job.-,Restart%20Strategies,-%23).

**Note**

A job contains two source-to-sink pipelines that are not connected. If a task in one pipeline fails and the region fault recovery policy is used, Flink restarts only the failed task's pipeline. The other pipeline continues to run without being affected. This can cause the start times of the two pipelines to be different, which is normal.

**Other configurations**

Set other Flink configurations here. For example, `akka.ask.timeout: 10` or `jobmanager.execution.failover-strategy: full`.

**Note**

You cannot use parameters related to `env.java.opts`, such as `-XX:+UseG1GC`, to change the garbage collection (GC) type. If you have special requirements, submit a ticket for technical support.

## Log configuration

**Parameter**

**Description**

**Log archiving**

Log archiving is enabled by default. After you enable log archiving, you can view the logs of historical job instances on the job logs page. For more information, see [View logs of historical job instances](/help/en/flink/realtime-flink/user-guide/view-the-logs-of-a-historical-job#task-1940395).

**Note**

-   In VVR 3.x versions, only VVR 3.0.7 and later support the log archiving feature.
    
-   In VVR 4.x versions, only VVR 4.0.11 and later support the log archiving feature.
    

**Archived log validity period**

The default validity period for archived logs is 7 days.

**Root log level**

The log levels are listed below in ascending order of severity:

1.  TRACE: Finer-grained information than DEBUG.
    
2.  DEBUG: Information about the system's running status.
    
3.  INFO: Important or interesting information.
    
4.  WARN: Information about potential system errors.
    
5.  ERROR: Information about system errors and exceptions.
    

**Class log level**

Enter the logger name and log level.

**Log template**

You can select the default system template or a custom template. If you select a custom template, you can output logs to other storage services. For more information, see [Configure log output](/help/en/flink/realtime-flink/user-guide/configure-parameters-to-export-logs-of-a-deployment).

## **References**

-   You can set the TTL for an operator to more precisely control the state size of each operator and save resources for jobs with large states. For more information, see [Operator state lifecycle (State TTL) hints](/help/en/flink/realtime-flink/developer-reference/hints#9b6eced0efdgw).
    
-   This topic describes how to configure logs for a single job. To configure logs for all jobs in a project, see [Configure log output channels for all jobs in a project](/help/en/flink/realtime-flink/user-guide/configure-parameters-to-export-logs-of-a-deployment#section-na9-lsd-wqg).
