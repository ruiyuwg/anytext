After configuring data sources, networks, and resources, you can create a real-time synchronization task to synchronize single-table or whole-database data. This topic describes how to create a real-time synchronization task for single-table or whole-database incremental data and view the task status after creation.

## Prerequisites

-   Completed [Data source configuration](/help/en/dataworks/user-guide/create-a-data-integration-data-source/). You must configure source and destination databases before creating a task. This ensures you can select the required data sources for reading and writing during task configuration. For details on supported data sources and configurations for real-time synchronization, see [Data sources and synchronization](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations).
    
-   Purchase a resource group with a suitable specification and attach it to the workspace. For more information, see [Use a Serverless resource group for Data Integration](/help/en/dataworks/user-guide/using-serverless-resource-groups) and [Use exclusive resource groups for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration).
    
-   Establish a network connection between the resource group and the data source. For more information, see [Configure network connections](/help/en/dataworks/user-guide/network-connectivity-1/).
    

## **Limitations**

This version of real-time synchronization is supported only in [DataStudio (legacy version)](/help/en/dataworks/user-guide/overview-26/).

## Go to Data Studio

**Note**

For some channels, you must create single-table real-time synchronization tasks in Data Studio. For details on channel support, see [Supported data sources](/help/en/dataworks/user-guide/real-time-synchronization-in-datastudio/#ca18a91affhkl).

Log on to the [DataWorks Console](https://dataworks.console.aliyun.com/overview). Select the desired region, and click **Data Development and** > **DataStudio** in the left navigation pane. Select the desired workspace from the drop-down list and click **Go to Data Studio**.

## Step 1: Create task

## Data Studio (new version)

1.  Create a workflow. For details, see [Workflow](/help/en/dataworks/user-guide/workflow-orchestration/).
    
2.  Create a real-time synchronization node. You can use one of the following methods:
    
    -   Method 1: Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4741340671/p1014585.png) icon in the upper-right corner of the workflow list and select **Create Node** > **Data Integration** > **Real-time Synchronization**.
        
    -   Method 2: Double-click the workflow name, expand the **Data Integration** directory in the node list on the left, and drag the **Real-time Synchronization** node to the canvas on the right.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3608950671/p1015689.png)
        
3.  In the **Create Node** dialog box, configure the node parameters and click **OK**.
    

## Data Studio (legacy version)

1.  Create a business flow. For details, see [Create a workflow](/help/en/dataworks/user-guide/create-a-workflow#task-2510738).
    
2.  Create a real-time synchronization task.You can use one of the following methods:
    
    -   Method 1: Expand the business flow, right-click **Data Integration** > **Create Node** > **Real-time Synchronization**.
        
        Method 2: Double-click the business flow name, click **Create Node**, and then drag the **Real-time Synchronization** node from the **Data Integration** directory to the business flow editing panel on the right.![Real-time Synchronization](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2794418661/p464608.png)
        
3.  In the **Create Node** dialog box, configure the parameters.
    

**Parameter**

**Description**

**Type**

The default is **Real-time Synchronization**.

**Synchronization Method**

-   For single-table incremental data, select **ETL Between Single Table (Topic) and Single Table (Topic)**. This synchronizes data from one or more tables to a single destination table.
    
    **Note**
    
    Single-table real-time synchronization supports synchronizing data only to a single destination table. If you need to synchronize data to multiple tables, consider the following solutions:
    
    -   If you need to filter data, replace strings, or mask data during synchronization, create separate single-table real-time synchronization tasks for each requirement.
        
    -   If you need to synchronize full data first and then perform real-time incremental synchronization to the destination, use the whole-database real-time synchronization task in Data Integration. For details, see [Configure a real-time full-database synchronization task](/help/en/dataworks/user-guide/configure-a-data-synchronization-solution-in-data-integration#task-2234369).
        
    
-   For real-time synchronization of whole-database incremental data, select the synchronization solution that corresponds to your destination, such as **Synchronization of Data Changes from Database to MaxCompute**.
    

**Path**

The directory where the real-time synchronization task is stored.

**Name**

The node name can contain letters, Chinese characters, digits, underscores (\_), and periods (.). It cannot exceed 128 characters.

## Step 2: Configure resource group

Real-time synchronization tasks can only use Serverless resource groups or exclusive resource groups for Data Integration. You can click **Basic Configuration** in the right navigation bar of the real-time synchronization task editing page. In the **Resource Group** drop-down list, select a resource group that has network connectivity to the database.

**Note**

-   If you created a resource group but it is not displayed, check whether the resource group is attached to the workspace. For more information, see [Use a Serverless resource group for Data Integration](/help/en/dataworks/user-guide/using-serverless-resource-groups) and [Use exclusive resource groups for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration).
    
-   We recommend running real-time and offline synchronization tasks on different resource groups to prevent resource contention. Resource contention for CPU, memory, and network resources can cause offline tasks to slow down, real-time tasks to be delayed, or tasks to be terminated by the OOM (Out of Memory) killer in extreme cases.
    
-   Serverless resource groups support specifying a CU limit for synchronization tasks. If your synchronization task experiences OOM issues due to insufficient resources, adjust the CU usage value of the resource group appropriately.
    

## Step 3: Configure task

### Configure single-table synchronization

1.  Configure the input data source.
    
    Currently, the supported input data source types and configurations for single-table data synchronization are as follows:
    
    -   [Configure MySQL Reader](/help/en/dataworks/user-guide/configure-mysql-reader#task-2045392)
        
    -   [Configure a DataHub source](/help/en/dataworks/user-guide/configure-datahub-reader#task-2438402)
        
    -   [Configure LogHub Reader](/help/en/dataworks/user-guide/configure-loghub-reader#task-2438430)
        
    -   [Configure Kafka input](/help/en/dataworks/user-guide/configure-kafka-reader#task-2438443)
        
    -   [Configure PolarDB Reader](/help/en/dataworks/user-guide/configure-polardb-reader#task-2483032)
        
    
    1.  Drag the input data source component from the **Input** list on the left to the canvas on the right.
        
        ![PixPin_2025-11-05_16-57-22](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8237432671/p1023616.gif)
        
    2.  Click the input component and configure the relevant information in the **Node Configuration** dialog box on the right.
        
2.  **Optional:**Configure data transformation.
    
    You can configure data transformations to modify input data.
    
    Currently, the supported transformation methods for single-table data synchronization are as follows:
    
    -   [Configure a data filtering transform](/help/en/dataworks/user-guide/configure-data-filtering): Filters data based on rules. Only matching data is retained.
        
    -   [Configure String Replace](/help/en/dataworks/user-guide/configure-string-replace): Allows replacement of string-type fields.
        
    -   [Configure data masking](/help/en/dataworks/user-guide/configure-data-de-identification): Allows masking of sensitive data during single-table real-time synchronization and storage in a specified database location.
        
    
    1.  In the **Conversion** area on the left side of the real-time synchronization task editing page, drag the required data transformation component to the panel on the right. Hover over the input component to reveal its connection points. Connect the bottom connection point of the input component to the top connection point of the transformation component. After connecting, you can perform **Node Configuration** for the transformation component.
        
        ![PixPin_2025-11-05_16-59-38](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8237432671/p1023618.gif)
        
    2.  Click the transformation component and configure the relevant information in the **Node Configuration** dialog box on the right.
        
3.  Configure the output data source.
    
    Currently, the supported output data source types and configurations for single-table data synchronization are as follows:
    
    -   [Configure MaxCompute Writer](/help/en/dataworks/user-guide/configure-maxcompute-writer#task-2479569)
        
    -   [Configure Hologres Writer](/help/en/dataworks/user-guide/configure-hologres-writer#task-2479441)
        
    -   [Configure DataHub Writer](/help/en/dataworks/user-guide/configure-datahub-writer#task-2438459)
        
    -   [Configure Kafka Writer](/help/en/dataworks/user-guide/configure-kafka-writer#task-2438657)
        
    -   [Configure Elasticsearch Writer](/help/en/dataworks/user-guide/configure-elasticsearch-writer#task-2077678)
        
    
    1.  In the **Output** area on the left side of the real-time synchronization task editing page, drag the destination output data source component to the panel on the right and connect it to the upstream component. Configure the destination data source, table, and field mapping relationships. If the destination table does not exist, click **Create Table** to quickly create the table.
        
        ![PixPin_2025-11-05_17-09-10](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8237432671/p1023619.gif)
        
    2.  Click the output component and configure the relevant information in the **Node Configuration** dialog box on the right.
        
4.  Click **Save** in the toolbar above the canvas to complete the task configuration.
    

### Configure whole-database synchronization

**Note**

DataWorks recommends using [Real-time database synchronization](/help/en/dataworks/user-guide/database-wide-real-time-synchronization-task/) in Data Integration.

1.  Set the synchronization source and rules.
    
    1.  In the **Data Source** area, select the **Type** and **Data Source** name to be synchronized.
        
    2.  Select the tables to synchronize.
        
        In the **Select Source Table for Synchronization** section, select the tables to synchronize from the **Source Table** list and click the ![Icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6779730471/p202947.png) icon to move them to the **Selected Table** list.
        
        **Important**
        
        Real-time synchronization cannot be performed if the selected table does not have a primary key.
        
    3.  Set mapping rules for table names.
        
        In this step, you can select the databases and tables to be synchronized from the source data source. By default, the synchronization solution writes source database and table data to a schema or table with the same name in the destination. If the schema or table does not exist in the destination, it will be automatically created. You can also define the final schema or table name written to the destination by using **Mapping Rules for Table Names**. This allows you to write data from multiple tables into a single table or uniformly update a fixed prefix of source database or table names when writing to the destination database or table.
        
        -   **Source table name and destination table name conversion rules**: Supports converting source table names to final destination table names using regular expressions.
            
            -   Example 1: Write data from tables with the "doc\_" prefix at the source to tables with the "pre\_" prefix at the destination.![Rename](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6877830471/p475456.png)
                
            -   Example 2: Write data from multiple tables to a single destination table.
                
                Synchronize tables named "table\_01", "table\_02", and "table\_03" at the source to a table named "my\_table". Configure the regex table name conversion rule as: **Source**: table.\*, **Destination**: my\_table.![Example](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6877830471/p474608.png)
                
        -   **Rule for Destination Table Name**: Supports generating destination table names using a combination of built-in variables. You can also add prefixes and suffixes to the converted destination table name. The available built-in variables are:
            
            -   ${db\_table\_name\_src\_transed}: The table name after conversion in **Source table name and destination table name conversion rules**.
                
            -   ${db\_name\_src\_transed}: The destination schema name after conversion in "Source Database and destination Schema Name Conversion Rules".
                
            -   ${ds\_name\_src}: The source data source name.
                
            
            Example: Further process the table name converted in the previous step by string concatenation. Use ${db\_table\_name\_src\_transed} to represent the result "my\_table" from the previous step, and add a prefix and suffix to this built-in variable, for example, pre\_${db\_table\_name\_src\_transed}\_post. This maps to the destination table named "pre\_my\_table\_post".
            
        -   **Rule for Conversion Between Source Database Name and Destination Schema Name**: Supports converting source schema names to final destination schema names using regular expressions.
            
            Example: Replace the "doc\_" prefix of the source database name with the "pre\_" prefix.![schema](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3271856661/p475448.png)
            
        
2.  Select the destination data source and configure the destination table or topic.
    
    1.  On the **Configure Destination Table** page, configure the basic information of the destination. For example, write mode and partition settings. The specific configuration depends on the real-time synchronization interface of each data source.
        
    2.  Click **Refresh Source and Destination Table Mapping** to create mapping relationships between the source tables and destination tables to be synchronized.
        
        You can customize the destination schema and destination table name, and add constants or variables to the destination table via **Edit Additional Fields**. The specific configuration depends on the real-time synchronization interface of each data source.
        
        **Note**
        
        If there are many tables to synchronize, the process may be slow. Please wait patiently.
        
3.  **Optional:**Set table granularity synchronization rules.
    
    Some synchronization solutions support custom table-level DML processing policies. You can define processing policies for insert, update, and delete operations on the source table.
    
    **Note**
    
    Supported DML operations may vary by data source. Refer to the product interface to see if a specific synchronization solution supports DML processing policies. For current DML support by data source, see [Supported DML and DDL operations](/help/en/dataworks/user-guide/supported-dml-and-ddl-operations#concept-2221302).
    
4.  Set DDL message processing rules.
    
    You can configure policies to handle DDL operations during synchronization. Supported DDL operations may vary by data source. For details, see [Supported DML and DDL operations](/help/en/dataworks/user-guide/supported-dml-and-ddl-operations#concept-2221302). You can configure DDL processing policies for each destination database type on the **Data Integration** > **Configuration Options** > **Processing Policy for DDL Messages in Real-time Sync** page. Different DDL message processing policies are shown in the following table.
    
    **DDL Message Type**
    
    **Processing Policy**
    
    **Create Table**
    
    When DataWorks receives a DDL message of the corresponding type, the processing policy is as follows:
    
    -   **Normal Processing**: Forwards the message to the destination data source.
        
    -   **Ignore**: Discards the message directly and does not send it to the destination data source.
        
    -   **Alert**: Discards the message directly and records an alert in the real-time synchronization log, indicating that the message was discarded due to an execution error.
        
    -   **Error**: The real-time synchronization task directly displays an error status and terminates execution.
        
    
    **Drop Table**
    
    **Add Column**
    
    **Drop Column**
    
    **Rename Table**
    
    **Rename Column**
    
    **Modify Column Type**
    
    **Truncate Table**
    
5.  Configure run resources.
    
    -   Provides concurrency control to limit the maximum number of concurrent reads and writes for Data Integration.
        
    -   Supports controlling whether the synchronization task tolerates dirty data.
        
        -   When dirty data is not allowed: If dirty data is generated during task execution, the task will fail and exit.
            
        -   When dirty data is allowed: The synchronization task will ignore dirty data (it will not be written to the destination) and continue execution normally.
            
    
6.  Click **Complete Configuration**.
    

## Step 4: Submit and deploy nodes

1.  Click the ![Submit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2272191371/p98393.png) icon in the toolbar to submit the node.
    
2.  In the **Submit** dialog box, enter the **Change Description**.
    
3.  Click **OK**.
    
    If you are using a workspace in standard mode, you need to deploy the task to the production environment after successful submission. Click **Deploy** on the left side of the top menu bar. For details, see [Publish tasks](/help/en/dataworks/user-guide/deploy-nodes#task-2470114).
    

## Step 5: Run task

**Note**

Real-time synchronization tasks cannot run in Data Studio. Publish the task to the Operation Center to start and view it.

After the task configuration is complete, you can start and manage the task in the **Operation Center** > **Real-time Node O&M** > **Real-time Synchronization Nodes** panel. For details, see [O&M for real-time sync tasks](/help/en/dataworks/user-guide/maintenance-for-real-time-synchronization-nodes#task-2473945).

## Next steps

After the task starts, you can click the task name to view the running details and perform [Task O&M and tuning](/help/en/dataworks/user-guide/node-maintenance-and-tuning/).

## FAQ

For common questions about real-time synchronization tasks, see [Real-time synchronization](/help/en/dataworks/real-time-synchronization-1#concept-2092670).

## **Appendix: Task migration**

You can migrate single-table real-time integration tasks from Data Studio to the **Data Integration** page by clicking **Migrate to Data Integration**.

**Note**

Currently supported real-time integration tasks:

-   Kafka to MaxCompute single-table real-time integration tasks.
    
-   Kafka to Hologres single-table real-time integration tasks.
    

1.  Double-click the single-table real-time integration task to be migrated to enter the task editing page, and click **Migrate to Data Integration** to migrate the task.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2052168271/p847025.png)
    
2.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2052168271/p847027.png) in the upper-left corner and select **All Products** > **Data Integration**. Go to the **Synchronization Task** page to view the successfully migrated single-table real-time integration tasks in the task list.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2052168271/p847033.png)
    

**Note**

-   Migrated tasks can be maintained directly on the Data Integration main site without jumping to the Operation Center. Migration does not affect saved task configurations or running tasks.
    
-   After migration, the original task will be moved to the Data Studio Recycle Bin. Subsequent editing and maintenance operations can only be performed on the Data Integration main site task list page.
