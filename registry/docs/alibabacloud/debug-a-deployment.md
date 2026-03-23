Job debugging simulates a job run to inspect output and verify the business logic of SELECT or INSERT statements without writing data to production sinks. No data reaches downstream systems during debugging, regardless of the sink table type.

Debugging supports:

-   Live upstream data or test data that you provide.
    
-   Complex jobs with multiple SELECT or INSERT statements.
    
-   UPSERT queries, including statements with update operations such as `count(*)`.
    

## Limitations

-   Requires a session cluster.
    
-   Only SQL jobs are supported.
    
-   CREATE TABLE AS SELECT (CTAS) and CREATE DATABASE AS (CDAS) statements are not supported.
    
-   Flink automatically pauses after reading a maximum of 1,000 records by default.
    
-   Each debugging session in a session cluster is limited to three minutes. This limit maintains cluster stability and manages the cluster lifecycle.
    

## Usage notes

-   Creating a session cluster consumes resources. The amount depends on the resource configuration selected during creation.
    
-   Do not use session clusters in a production environment. Session clusters are intended for development and testing only. While the JobManager (JM) reuse mechanism improves resource utilization during debugging, it can reduce job stability in production:
    
    -   A single point of failure (SPOF) in the JobManager affects all jobs in the cluster.
        
    -   A SPOF in a TaskManager affects jobs with tasks running on it.
        
    -   Within the same TaskManager, no process isolation exists between tasks. Tasks may interfere with each other.
        
-   If the session cluster uses default configurations, follow these guidelines:
    
    -   For small jobs with a single degree of parallelism, keep the total number of jobs at or below 100.
        
    -   For complex jobs, the maximum degree of parallelism for a single job should not exceed 512. Do not run more than 32 medium-sized jobs with a degree of parallelism of 64 on a single cluster. Exceeding these limits may cause heartbeat timeouts and affect cluster stability. If this occurs, increase the heartbeat interval and timeout.
        
    -   To run more tasks concurrently, increase the resource configuration of the session cluster.
        

## Procedure

### Step 1: Create a session cluster

1.  Go to the **Session Management** page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/console/cell?spm=a2c4g.11186623.2.16.1a8023a9J8TiPV).
        
    2.  In the **Actions** column of the target workspace, click **Console**.
        
    3.  In the left-side navigation pane, choose **Operation Center** > **Session Management**.
        
2.  Click **Create Session Cluster**.
    
3.  Configure the session cluster settings. The following tables describe the available parameters.
    

#### Basic configurations

**Parameter**

**Description**

**Name**

The name of the session cluster.

**Deployment target**

The target resource queue. For more information, see [Manage resource queues](/help/en/flink/realtime-flink/user-guide/manage-resource-queues).

**State**

The desired state of the cluster after creation. **RUNNING**: The cluster starts running. **STOPPED**: The cluster stops, and all jobs in the session cluster also stop.

**Scheduled session management**

Automatically shuts down the cluster if no jobs are running for a specified period. This prevents resource waste from idle session clusters.

**Tag Name**

Tags for locating jobs on the Overview page.

**Tag value**

The value of the tag.

#### Configuration

**Parameter**

**Description**

**Engine version**

The Flink engine version. Select a **Recommended** or **Stable** version. Version tags: **Recommended** -- the latest minor version of the latest major version. **Stable** -- the latest minor version of a major version still in its service period, with bug fixes from prior versions. **Normal** -- other minor versions still in their service period. **EOS** -- a version past its end-of-service date. For details, see [Engine versions](/help/en/flink/realtime-flink/product-overview/engine-version#concept-2206172) and [Lifecycle policy](/help/en/flink/realtime-flink/product-overview/lifecycle-policies#task-2206171).

**Flink restart strategy**

**Failure Rate**: Restarts based on the failure rate. Requires **Failure Rate Interval**, **Max Failures Per Interval**, and **Delay Between Restarts**. **Fixed Delay**: Restarts at a fixed interval. Requires **Restart Attempts** and **Delay Between Restarts**. **No Restarts**: The job does not restart when a task fails. If left unconfigured, the default Apache Flink restart strategy applies. When checkpointing is disabled, the JobManager process does not restart on task failure. When checkpointing is enabled, the JobManager process restarts.

**Other configurations**

Additional Flink configuration entries. For example, `taskmanager.numberOfTaskSlots: 1`.

#### Resource configurations

**Parameter**

**Description**

**Number of TaskManagers**

By default, this value equals the degree of parallelism.

**JobManager CPU cores**

Default value: 1.

**JobManager memory**

Minimum: 1 GiB. Recommended: 4 GiB. Use GiB or MiB as the unit (for example, 1024 MiB or 1.5 GiB).

**TaskManager CPU cores**

Default value: 2.

**TaskManager memory**

Minimum: 1 GiB. Recommended: 8 GiB. Use GiB or MiB as the unit (for example, 1024 MiB or 1.5 GiB).

**TaskManager slot sizing recommendations:**

-   For small jobs with a single degree of parallelism, use a CPU-to-memory ratio of 1:4 per slot with at least 1 core and 2 GiB of memory.
    
-   For complex jobs, use at least 1 core and 4 GiB of memory per slot. With the default resource configuration, two slots per TaskManager are available.
    
-   Avoid making TaskManager resources too small or too large. Use the default resource configuration with 2 slots as a starting point.
    

**Important**

-   If a single TaskManager has insufficient resources, job stability may be affected. With fewer slots, the TaskManager overhead cannot be shared effectively, which reduces resource utilization.
    
-   If a single TaskManager has excessive resources, many jobs run on it. A single point of failure in that TaskManager has a widespread impact.
    

#### Log configurations

**Parameter**

**Description**

**Root log level**

Log levels in ascending order of severity: TRACE (more fine-grained information than DEBUG), DEBUG (system running status), INFO (noteworthy information), WARN (potential system errors), ERROR (system errors and exceptions).

**Class log level**

The log name and level.

**Log template**

A system template or a custom template.

**Note**

For options related to the integration of Flink with resource orchestration frameworks such as Kubernetes and YARN, see [Resource Orchestration Frameworks](https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/deployment/config/#kubernetes-jobmanager-cpu).

1.  Click **Create Session Cluster**.
    
    After creation, select the session cluster on the job debugging page or the deployment page.
    

### Step 2: Debug the job

1.  Write the SQL code for the job. For more information, see [Job development map](/help/en/flink/realtime-flink/user-guide/develop-an-sql-draft#task-2046613).
    
2.  On the **ETL** page, click **Debug**, select a **debug cluster**, and then click **Next**.
    
3.  Configure the test data.
    
    -   To use live data, click **OK**.
        
    -   To use test data, click **Download Data Template**, fill in the template with test data, and then upload the file.
        
    
    The following table describes the options on the test data configuration page.
    
    **Parameter**
    
    **Description**
    
    **Download data template**
    
    Download the data template, which matches the data structure of the source table.
    
    **Upload test data**
    
    Download the data template, edit the data locally, upload the file, and then select **Use Test Data**. Test data file limits: only CSV format is supported; the CSV file must contain a table header (for example, `id(INT)`); the file size limit is 1 MB or 1,000 records.
    
    **Data preview**
    
    After uploading test data, click the expand icon (+) to the left of the source table name to preview and download the data.
    
    **Debug code preview**
    
    The debugging feature automatically modifies the DDL statements for the source and sink tables but does not change the actual code in the job. Preview the modified code here.
    
4.  Click **OK**.
    
    The debug results appear below the SQL editor.
    

## Related topics

-   To deploy a job after development or debugging, see [Deploy a job](/help/en/flink/realtime-flink/user-guide/create-a-deployment).
    
-   After deploying a job, see [Start a job](/help/en/flink/realtime-flink/user-guide/start-a-deployment).
    
-   For a complete walkthrough of the Flink SQL job workflow, see [Quick start for Flink SQL jobs](/help/en/flink/realtime-flink/getting-started/getting-started-for-a-flink-sql-deployment).
