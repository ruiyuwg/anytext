Flink SQL Batch nodes allow you to define and run data processing tasks by using standard SQL statements. Flink SQL Batch nodes are suitable for the analysis and transformation of large datasets, including data cleansing and aggregation. This type of node can be configured in a visualized manner to provide efficient and flexible batch processing solutions for large-scale data. In Flink SQL Batch nodes, you can use SQL-like statements to complete large-scale data batch processing. This topic describes how to configure Flink SQL Batch nodes and use SQL statements in Flink SQL Batch nodes to process data in batches.

## Prerequisites

-   A DataWorks workspace is created and Realtime Compute for Apache Flink computing resources are associated with the DataWorks workspace in Management Center. For more information, see [Associate a computing resource](/help/en/dataworks/create-and-manage-compute-resources-new-data-development).
    
-   A Flink SQL Batch node is created. For more information, see [Node development](/help/en/dataworks/user-guide/node-development-of-data-studio/).
    

## Step 1: Develop a task based on the Flink SQL Batch node

On the configuration tab of the Flink SQL Batch node, you can perform the following operations to develop a task based on the node:

### **Develop SQL code**

In the SQL editor, develop task code. You can define variables in the **${Variable name}** format in the task code, and configure scheduling parameters in the **Scheduling Parameters** section of the **Properties** tab to assign the scheduling parameters to the variables as values. When the Flink SQL Batch task is scheduled to run, the values of the scheduling parameters are dynamically replaced in the task code. For more information about how to use scheduling parameters, see [Sources and expressions of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters). Sample code:

```
-- Create a source table named datagen_source. 
CREATE TEMPORARY TABLE datagen_source_${var}(
  name VARCHAR
) WITH (
  'connector' = 'datagen',
  'number-of-rows' = '1000' 
);

-- Create a result table named blackhole_sink. 
CREATE TEMPORARY TABLE blackhole_sink_${var}(
  name  VARCHAR
) WITH (
  'connector' = 'blackhole'
);

-- Insert data from the source table datagen_source into the result table blackhole_sink. 
INSERT INTO blackhole_sink_${var}
SELECT
  name
FROM datagen_source_${var};
```

**Note**

In this example, the value of the parameter `bizdate` is `$[yyyymmdd]`. You can configure this parameter to synchronize daily incremental data in batches.

## Step 2: Configure the Flink SQL Batch task

Refer to the parameter descriptions in the following table to configure the Flink SQL batch task based on your business requirements.

### Configure the parameters in the Flink Resource Information section

Configure the following parameters in the **Flink Resource Information** section of the **Properties** tab. For more information, see [Configure job deployment information](/help/en/flink/realtime-flink/user-guide/configure-a-deployment).

**Parameter**

**Description**

**Flink Cluster**

The name of the Realtime Compute for Apache Flink workspace that is associated with the DataWorks workspace in Management Center.

**Flink Engine Version**

Select an engine version based on your business requirements.

**Resource Group For Scheduling**

Select the [serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) that is connected to the Realtime Compute for Apache Flink workspace.

**Job Manager CPU**

The best practices of Realtime Compute for Apache Flink show that the JobManager requires at least 0.5 CPU cores and 2 GiB of memory to ensure the stable running of the deployment. We recommend that you configure 1 CPU core and 4 GiB of memory for the JobManager. You can configure a maximum of 16 CPU cores. You must configure this parameter based on the size of the Realtime Compute for Apache Flink workspace and deployment complexity.

**Job Manager Memory**

The memory configuration of the JobManager affects the task scheduling and management capabilities of the JobManager. We recommend that you specify a value from 2 to 64 for this parameter to ensure the stable and efficient running of the system. Unit: GiB. You must configure this parameter based on the size of the Realtime Compute for Apache Flink workspace and deployment requirements.

**Task Manager CPU**

The CPU resource configuration of a TaskManager affects the ability of the TaskManager to process data in tasks. The best practices of Realtime Compute for Apache Flink show that a TaskManager requires at least 0.5 CPU cores and 2 GiB of memory to ensure the stable running of the deployment. We recommend that you configure 1 CPU core and 4 GiB of memory for each TaskManager. You can configure a maximum of 16 CPU cores. You must configure this parameter based on your business requirements.

**Task Manager Memory**

The memory configuration of a TaskManager determines the data volume and performance of the TaskManager to process data in tasks. To ensure task stability and efficiency, we recommend that you specify a value from 2 to 64 for this parameter. Unit: GiB.

**Parallelism**

The number of tasks that can be run in parallel in a deployment. Higher concurrency can improve the processing speed and resource utilization. You must configure this parameter based on workspace resources and deployment characteristics.

**Maximum Number Of Slots**

The maximum number of slots that can be allocated to tasks in TaskManagers. Each slot can run a task or an operator. You can adjust the maximum number of slots based on your business requirements.

**Slots For Each TaskManager**

The number of slots in each TaskManager. This parameter specifies the number of tasks that can be run in parallel. You can adjust the slot configuration to optimize resource utilization and deployment parallel processing.

### **(Optional) Configure scheduling parameters**

In the right-side navigation pane of the configuration tab of the Flink SQL batch node, click **Properties**. In the **Scheduling Parameter** section of the Properties tab, click **Add Parameter** and configure the **Parameter Name** and **Parameter Value** parameters to configure scheduling parameters for the Flink SQL batch node for dynamical use in code.

### **(Optional) Configure parameters in the Flink Runtime Parameters section**

In the right-side navigation pane of the configuration tab of the Flink SQL batch node, click **Properties**. In the **Flink Runtime Parameters** section of the Properties tab, configure the runtime parameters. For more information, see [Configure job deployment information](/help/en/flink/realtime-flink/user-guide/configure-a-deployment).

When you configure parameters in the **Flink Runtime Parameters** section, the parameter configurations must be compatible with parameter configurations in Ververica Platform (VVP). You can configure the parameters in the YAML syntax format without the need to add special characters, such as semicolons (;), as line breaks.

**Note**

If you want to run the task on the Flink SQL Batch node on a regular basis, you must configure the parameters in the **Scheduling Policies**, **Scheduling Time**, **Scheduling Dependencies**, and **Node Output Parameters** sections based on your business requirments. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).

After the configuration is complete, click **Save** to save the task.

## Step 3: Deploy the Flink SQL Batch node and perform O&M operations

1.  After the task on the Flink SQL Batch node is configured, commit and deploy the task. For more information, see [Node and workflow deployment](/help/en/dataworks/user-guide/task-release/).
    
2.  After the task is deployed, you can click **Perform O&M** below **Prod Online** to view the running status of the task in Operation Center. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    

## **References**

-   [Getting started with batch processing of Realtime Compute for Apache Flink](/help/en/flink/realtime-flink/getting-started/create-a-batch-processing-workflow)
