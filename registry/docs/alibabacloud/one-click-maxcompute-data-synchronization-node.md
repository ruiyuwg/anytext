DataWorks provides a one-click MaxCompute Data Synchronization Node. You can use this node to quickly synchronize data from MaxCompute to a Hologres Database to enable high-performance queries on your MaxCompute table data. This topic describes how to create and configure a one-click MaxCompute Data Synchronization Node.

## Background information

You can import data from MaxCompute directly into a Hologres Database using SQL statements. This method typically provides better performance. For more information, see [Import data from MaxCompute using SQL](/help/en/hologres/user-guide/import-data-from-maxcompute-to-hologres-by-executing-sql-statements#task-2560752).

## Prerequisites

-   You have activated [Create a MaxCompute Project](/help/en/maxcompute/getting-started/create-a-maxcompute-project) and created a [Hologres Instance](/help/en/hologres/getting-started/purchase-a-hologres-instance).
    
-   You have [bound the MaxCompute project and Hologres Instance as DataWorks Computing Resources](/help/en/dataworks/create-and-manage-compute-resources-new-data-development) and passed the connectivity test.
    

## Create a one-click MaxCompute data synchronization node

[Create a one-click MaxCompute Data Synchronization Node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).

## Configure the synchronization node

Configure the parameters on the one-click MaxCompute Data Synchronization Node configuration page.

### Select a MaxCompute source table

Configure the following parameters based on the Source Table you want to synchronize.

**Parameter**

**Description**

**Project**

The name of your MaxCompute project.

**Schema**

The Schema of your MaxCompute project.

**Table name**

The name of the MaxCompute Source Table to synchronize.

**Filter**

The system automatically generates a Filter Condition based on the Partitioned Table you are using. You can also modify the condition based on your business requirements. Only data that meets the Filter Condition is synchronized.

**Note**

The Filter Condition corresponds to the clause that follows the `WHERE` keyword in an SQL Statement.

### Set the Hologres destination table

Configure the following parameters for the Destination Table.

**Parameter**

**Description**

**Instance**

The destination Hologres Instance. In the **Select Data Source** section, specify your bound Hologres data source. The system automatically identifies the specific Instance.

**Note**

After you select a data source, you can click **Destination Management** to navigate to the **HoloWeb Console (Instance Monitoring)**, **Slow Queries**, **Active Connection Management**, **Database Authorization**, and **User Management** pages.

**Database**

The database of the destination Hologres Instance.

**Schema**

The `Schema` of the destination Hologres Instance.

**Table name**

The name of the internal table in Hologres. If a table with the specified name already exists when an internal table is created, the system handles it based on the table type:

-   **If the new table is not a Partitioned Table**: DataWorks deletes the original table and its data, then re-creates the table.
    
-   **If the new table is a Partitioned Table**: The original table and its data are preserved. DataWorks creates a new Partitioned Subtable based on the partition value, and the data is inserted into the subtable.
    
    **Note**
    
    If the new table's Schema differs from the original, the system reports an error.
    

**Fields to synchronize**

Select the table fields that you want to synchronize.

**Partition settings**

Select the partitions of the MaxCompute table to synchronize.

**Note**

Hologres supports only single-level partitioning for data synchronization. If a MaxCompute table has multiple partition levels, DataWorks converts them into a single partition level and maps the extra partition keys to regular fields in the Hologres table.

**Index settings**

Create an Index for the Hologres internal table that stores the MaxCompute data. You can then use the Index to quickly query the data. For more information about how to create an Index, see [CREATE TABLE](/help/en/hologres/developer-reference/create-tables#section-l9q-k83-z01).

### Configure more parameters

**Parameter**

**Description**

**GUC parameters**

The Grand Unified Configuration (GUC) parameters to set before you import data from MaxCompute. For a list of supported GUC parameters, see [GUC parameters](/help/en/hologres/developer-reference/guc-parameters). Other SQL statements are not supported.

**Foreign server**

Default value: `odps_server`.

**SQL script**

-   The generated SQL script is not editable. If you update the synchronization task configuration, refresh the script to generate a new SQL Statement.
    
-   DataWorks automatically generates the SQL Statement required to run the synchronization task based on your configuration. You can copy this statement and run it on the SQL editor page in Hologres to perform the task.
    
    **Note**
    
    For more information about how to run a synchronization task by using SQL, see [Import data from MaxCompute using SQL](/help/en/hologres/user-guide/import-data-from-maxcompute-to-hologres-by-executing-sql-statements#task-2560752).
    

## Debug the synchronization node

To debug and run the synchronization Node, configure the required settings based on your business needs.

1.  Configure the Node properties for debugging.
    
    On the right side of the Node configuration page, configure the **Run Configuration** and **Resource group**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Compute resource**
    
    Select your bound Hologres Computing Resource.
    
    **Resource group**
    
    Select the Resource Group that passed the connectivity test when you bound the Hologres Computing Resource.
    
    **CUs for calculation**
    
    This node uses the default number of CUs. You do not need to change this value.
    
    **Script parameter**
    
    If you define variables in the format `${ParameterName}` in the Filter settings, you must specify the **Parameter Name** and **Parameter Value** in the **Script Parameter** section. At runtime, the system dynamically replaces the variables with their actual values. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).
    
2.  To debug and run the Node, click **Save** and then click **Run**.
    

## Next steps

-   [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/): If the Node needs to run periodically, configure its **Scheduling Policy** and other scheduling properties in the **Scheduling** panel on the right.
    
-   [Deploy the node](/help/en/dataworks/user-guide/task-release/): If the task needs to run in the Production Environment, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2728034471/p932965.png) icon to start the deployment process. After you deploy nodes to the Production Environment, they run on a schedule.
    
-   After the data is synchronized from MaxCompute, you can use HoloWeb to query the data in the Hologres table. For more information, see [HoloWeb](/help/en/hologres/user-guide/overview-12/#task-2128678).
    

## **FAQ**

-   Error message: `get table columns occurs Invalid name:xxx`.
    
-   Solution: Ensure the project name that you configured for the source is correct. Make sure it does not contain spaces or other invalid characters.
