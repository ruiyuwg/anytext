The Check node in DataWorks is designed to verify the availability of external data or system states before downstream nodes are triggered. It serves as a bridge for cross-system dependency management.

When a Check node runs, it polls the target object (such as a MaxCompute partition, OSS file, or FTP file) based on a defined policy.

-   **Success**: If the condition is met (e.g., the file exists), the node succeeds, triggering downstream nodes.
    
-   **Failure**: If the condition is not met within the specified timeout period, the node fails, blocking downstream nodes to prevent them from reading incomplete or missing data.
    

## Supported objects and use case

-   **Supported objects**: MaxCompute partitioned tables, FTP/OSS/HDFS/OSS\_HDFS files, DLF (Paimon) tables, and real-time synchronization tasks.
    
-   **Typical use case**: An external database exports a data file to OSS every morning around 02:00. Your DataWorks ETL workflow needs to process this file immediately after it is generated. Since the export time varies, you configure a Check node to monitor the OSS path. The ETL node will only start once the Check node confirms the file exists.
    

## Limitations

-   **Edition**: Available in DataWorks **Professional Edition** and higher.
    
-   **Runtime limit**: The maximum runtime (waiting time) for a Check node is **24 hours**. If the condition is not met within 24 hours, the node fails.
    

## Prerequisites

Before using a Check node, ensure the following preparations are complete:

1.  **Permissions**: The RAM user developing the node must have the **Development** or **Workspace Administrator** role in the workspace.
    
2.  **Resources**: The workspace is associated with a [serverless resource group](/help/en/dataworks/user-guide/using-serverless-resource-groups).
    
3.  **Data sources**: Create the data source for the object you intend to check.
    
    -   [MaxCompute](/help/en/dataworks/user-guide/create-a-maxcompute-data-source): Must be associated with Data Studio.
        
    -   [OSS](/help/en/dataworks/user-guide/oss-data-source): Must be created using AccessKey ID and secret. The RAM role mode is not supported.
        
    -   [FTP](/help/en/dataworks/user-guide/ftp-data-source)**/**[HDFS](/help/en/dataworks/user-guide/hdfs-data-source)**/**[OSS-HDFS](/help/en/dataworks/user-guide/oss-hdfs)**/**[DLF](/help/en/dataworks/user-guide/data-lake-formation-data-source): Create the corresponding data sources in DataWorks.
        
4.  **Real-time tasks**: If checking a real-time task, it must be a [Kafka-to-MaxCompute sync task](/help/en/dataworks/user-guide/configure-a-real-time-synchronization-node-in-datastudio/).
    

## Step 1: Develop the Check node

Double-click the Check node to enter the configuration interface. Depending on your needs, choose one of the following configuration scenarios.

## **Check data source**

Use this to wait for a specific file to be generated or a table partition to be created.

**Item**

**Description**

**Check Object**

Select **Data Source**.

**Data Source Type/Name**

Select the type (e.g., OSS, MaxCompute) and the specific data source name.

**Table Name/File Path**

**Crucial Configuration**:  
1\. **MaxCompute/DLF**: Select the target table.

**Note**

Only partitioned tables are supported.

2\. **OSS/FTP/HDFS/OSS\_HDFS**: Enter the absolute path of the file or directory.

**Condition for Check Passing**

1\. **For tables:** Check if a partition exists or if the last modified time has remained unchanged for a specific duration.  
2\. **For files**: The node checks if the file exists.

**Policy for Stopping Check**

Define the timeout logic:  
1\. **Time for Stopping Check**: Keep checking until a specific absolute time.  
2\. **Checks Allowed Before Check Node Stops**: `Max Wait Time = Interval × Total Checks`.

## Check real-time sync task

Use this to ensure a real-time stream (Kafka to MaxCompute) has no significant delay before triggering a batch node.

**Item**

**Description**

**Check Object**

Select **Real-time Synchronization Task**.

**Real-time Synchronization Task**

Select an existing Kafka-to-MaxCompute task from the dropdown list.

**Policy for Stopping Check**

Define the timeout logic:  
1\. **Time for Stopping Check**: Keep checking until a specific absolute time.  
2\. **Checks Allowed Before Check Node Stops**: `Max Wait Time = Interval × Total Checks`.

## Step 2: Schedule and deploy

1.  **Configure dependencies**:
    
    -   Set the upstream of the Check node to the root node or a logical start node.
        
    -   Set the downstream of the Check node to the node that requires the data.
        
    -   For details, see [Configure node scheduling](/help/en/dataworks/user-guide/node-scheduling/).
        
2.  **Deploy**:
    
    -   Save and [deploy](/help/en/dataworks/user-guide/task-release/) the node to the production environment.
        
    -   Once deployed, the task will run periodically according to its schedule. You can monitor its status in the Operation Center.
        

**Important**

Delayed start: If the Check node starts late due to an upstream delay, and the current time is already past the configured "Stop Time," the Check node will run once. If the condition is met, it succeeds; otherwise, it fails immediately.
