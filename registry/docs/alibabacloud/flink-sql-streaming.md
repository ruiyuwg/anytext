The Flink SQL Streaming node in Data Studio lets you define the processing logic for real-time tasks using standard SQL statements. Flink SQL Streaming is easy to use, supports rich SQL, and provides powerful state management and robust fault tolerance. It is compatible with both event time and processing time and offers flexible extension capabilities. The node easily integrates with systems such as Kafka and Hadoop Distributed File System (HDFS). It also provides detailed logs and performance monitoring tools. To start real-time data processing, you can add a Flink SQL Streaming task to your DataWorks project and write your SQL statements. This topic describes how to develop a Flink SQL Streaming node task in DataWorks and use DataWorks to perform real-time data processing with Flink.

## Prerequisites

-   You have attached a Realtime Compute for Apache Flink computing resource in the Management Center. For more information, see [Attach a computing resource](/help/en/dataworks/create-and-manage-compute-resources-new-data-development).
    
-   You have created a Flink SQL Streaming node. For more information, see [Create a node for a scheduled workflow](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).
    

## Step 1: Develop the Flink SQL Streaming node

On the Flink SQL Streaming node editing page, you can develop the node task.

### **Develop the SQL code**

In the SQL editing area, you can develop task code and use the **${variable\_name}** format to define variables. You can then assign values to these variables in the **Script Parameters** section under **Real-time Configuration** on the right side of the node editing page. This lets you dynamically pass parameters to your code in scheduling scenarios, as shown in the following example.

```
--Create the source table datagen_source.
CREATE TEMPORARY TABLE datagen_source(
  name VARCHAR
) WITH (
  'connector' = 'datagen'
);

--Create the sink table blackhole_sink.
CREATE TEMPORARY TABLE blackhole_sink(
  name  VARCHAR
) WITH (
  'connector' = 'blackhole'
);

--Insert data from the source table into the sink table.
INSERT INTO blackhole_sink
SELECT
  name
FROM datagen_source WHERE LENGTH(name) > ${name_length};
```

**Note**

In this example, the value of the `name_length` parameter is `5`. Setting this parameter filters out data for names with a length of 5 or less.

## Step 2: Configure the Flink SQL Streaming node

You can configure the Flink SQL Streaming node task as required based on the following parameter descriptions.

### **Configure Flink resources**

On the right side of the edit page, you can configure the following parameters in the **Flink Resource Information** section of the **Real-time Configuration** pane based on the **Resource Allocation**. For more information, see [Configure job resources](/help/en/flink/realtime-flink/user-guide/configure-deployment-resources).

**Parameter**

**Description**

**Flink Cluster**

The name of the fully managed Flink computing resource that you attached in the Management Center.

**Flink Engine Version**

Select an engine version as needed.

**Resource Group**

Select a [Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) that can connect to the Flink network.

**Resource Mode** supports the following two modes. For more information, see [Configure Job Resources](/help/en/flink/realtime-flink/user-guide/configure-deployment-resources).

-   **Basic Mode** (default): This mode is suitable for beginners and simple application scenarios. It uses default configurations and simplified settings to quickly launch and run Flink jobs.
    
-   **Expert Mode**: Provides advanced configuration options for experienced users, allowing you to perform fine-grained tuning on performance and resources to meet complex or high-performance requirements.
    

Configure the relevant parameters based on your selected resource allocation mode. A deeper understanding of the Flink architecture can help you configure parameters more effectively. For more information about the Flink architecture, see [Flink Architecture | Apache Flink](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/concepts/flink-architecture/).

**Basic Mode**

**JobManager CPU**

Flink best practices suggest that a JobManager requires at least 0.5 CPU cores and 2 GiB of memory to run stably. A configuration of 1 CPU core and 4 GiB of memory is recommended. The maximum is 16 CPU cores. Adjust the configuration based on the cluster size and job complexity.

**JobManager memory**

The memory configuration of the JobManager affects its ability to handle scheduling and manage tasks. A configuration of 2 GiB to 64 GiB is recommended to ensure stable and efficient operation. Adjust the size based on the cluster size and job requirements.

**TaskManager CPU**

The CPU resource configuration of a TaskManager affects its task processing capability. Flink best practices suggest a minimum configuration of 0.5 CPU cores and 2 GiB of memory. A configuration of 1 CPU core and 4 GiB of memory is recommended. The maximum is 16 CPU cores. Adjust the configuration based on your actual needs.

**TaskManager Memory**

The memory configuration of a TaskManager determines the data volume it can process and its performance. To ensure stable job execution and efficient processing, the memory size should be at least 2 GiB. The maximum is 64 GiB.

**Concurrency**

This determines the number of tasks that can be executed in parallel in a Flink job. A higher concurrency can improve processing speed and resource utilization. Set this parameter appropriately based on your cluster resources and job characteristics.

**Slots per TaskManager**

The number of slots per TaskManager determines how many tasks it can execute in parallel. You can adjust the slot configuration to optimize resource utilization and the parallel processing capability of the job.

**Expert Mode**

**JobManager CPU**

Flink best practices suggest that a JobManager requires at least 0.25 CPU cores and 1 GiB of memory to run stably. The maximum is 16 CPU cores. Adjust the configuration based on the cluster size and job complexity.

**JobManager Memory**

The memory configuration of the JobManager affects its ability to handle scheduling and manage tasks. A configuration of 1 GiB to 64 GiB is recommended to ensure stable and efficient operation. Adjust the size based on the cluster size and job requirements.

**Slots per TaskManager**

The number of slots per TaskManager determines how many tasks it can execute in parallel. You can adjust the slot configuration to optimize resource utilization and the parallel processing capability of the job.

**Multi-SSG Mode**

By default, all operators are placed in one SSG. You cannot separately modify the resource configuration of each operator. To configure resources for individual operators, enable **Multi-SSG Mode**. This gives each operator an independent Slot, allowing you to directly configure its resources on the corresponding Slot.

### **(Optional) Configure script parameters**

To use parameters dynamically in your code, click **Add Parameter** in the **Script Parameters** section of the **Real-time Configuration** pane in the navigation bar on the right, and then edit the **Parameter Name** and **Parameter Value**.

### **(Optional) Configure Flink runtime parameters**

On the right navigation bar, in the **Real-time Configuration** pane, you can configure the following parameters in the **Flink Running Parameters** section. For more information, see [Configure job deployment information](/help/en/flink/realtime-flink/user-guide/configure-a-deployment#section-o8m-6ee-10k).

**Parameter**

**Description**

**System Checkpoint Interval**

This parameter determines the time interval at which the Flink job periodically performs system checkpoints. A shorter interval can reduce fault recovery time but increases system overhead. If you do not fill in this parameter, system checkpoints are disabled.

**Minimum Interval Between System Checkpoints**

This parameter defines the minimum time that Flink must wait between consecutive checkpoints. This prevents overly frequent checkpoints from affecting system performance. This ensures that there is a minimum time interval between two checkpoints when the maximum concurrency of system checkpoints is 1.

**State Data TTL**

This parameter determines the maximum time that state data in a Flink job can be retained without being accessed or updated. The default value is 36 hours. This means the job state information will automatically expire and be purged after 36 hours. This optimizes state storage and resource usage.

**Important**

The default value here is based on cloud best practices and differs from the open source default. The open source default is 0, which means the state information never expires.

**Other Configurations**

Supports other Flink runtime parameter configurations. You can configure other Flink runtime parameters here, such as `taskmanager.network.memory.max:4g`.

**Note**

For more information about parameter settings, see [Configure job deployment information](/help/en/flink/realtime-flink/user-guide/configure-a-deployment#section-o8m-6ee-10k).

After you configure the task, click **Save**.

## Step 3: Start the Flink SQL Streaming node

1.  Publish the Flink SQL Streaming node.
    
    You must publish the task to the Operation Center before it can be executed. Follow the on-screen instructions to publish the Flink SQL Streaming node. For more information, see [Publish a node or workflow](/help/en/dataworks/user-guide/task-release/).
    
    **Note**
    
    The publish operation also syncs the task to the Flink vvp space. You can view tasks published from DataWorks in the Flink vvp Operation Center under Job O&M.
    
2.  Start the Flink SQL Streaming node.
    
    After the task is published, you can click **Go To O&M** under **Publish To Production Environment**. In the Operation Center, go to **Task O&M** > **Real-time Task O&M** > **Real-time Computing Task**, find the task that you want to start, and click the **Start** button in the **Actions** column. You can then view its running status.
