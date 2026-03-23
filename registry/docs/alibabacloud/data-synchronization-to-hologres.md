Use a DataWorks data synchronization node to synchronize data from a single MaxCompute table to Hologres for efficient big data analytics and real-time queries. This topic explains how to configure the node, migrate your data, and leverage the high-performance query capabilities of Hologres.

## **Background**

When you use this feature to synchronize data from a MaxCompute Internal Table to a Hologres Internal Table, the data is first imported into a Hologres External Table and then synchronized to the Internal Table. The synchronization of data from MaxCompute to the Hologres External Table is performed using the [IMPORT FOREIGN SCHEMA](/help/en/hologres/developer-reference/import-foreign-schema) command.

## **Prerequisites**

-   You have [Create a MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project) and a [Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance).
    
-   Your MaxCompute project and Hologres instance are [bound to DataWorks as compute resources](/help/en/dataworks/create-and-manage-compute-resources-new-data-development) and have passed the Connectivity Test.
    

## **Limitations**

You can create and read data from an External Table only if the MaxCompute Source Table exists.

## **Create a synchronization node**

Before configuring the data synchronization node, [create a synchronization node for Hologres](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc) and navigate to its configuration page.

## **Manage the destination data source**

On the configuration page for the data synchronization node, you can manage the destination data source.

1.  In the dropdown list next to **Data Source**, select the destination Hologres data source that you have bound.
    
2.  Click **Destination Management** and select an operation in the dialog box that appears:
    
    -   [HoloWeb (Instance Monitoring)](/help/en/hologres/user-guide/hologres-management-console/#title-99g-jvc-w6d): Use this to manage the destination Hologres instance in the HoloWeb console.
        
    -   [Slow Query](/help/en/hologres/user-guide/query-and-analyze-slow-query-logs-1#title-cq5-g96-nv3): Use this to view and analyze historical slow queries for the destination Hologres instance visually.
        
    -   [Active Connection Management](/help/en/hologres/user-guide/manage-connections): Use this to diagnose and manage connections to the destination Hologres instance.
        
    -   [Database Authorization](/help/en/hologres/user-guide/manage-databases#title-a92-e7f-318): Use this to add a new database to the destination Hologres instance or grant permissions on a database.
        
    -   [User management](/help/en/hologres/user-guide/manage-users#title-4oe-8a0-huh): Use this to add or remove users for the destination Hologres instance and grant permissions through the User Management module in HoloWeb.
        

## **Configure the synchronization node**

After you select a destination data source, follow these steps to configure the synchronization task on the node configuration page.

### **Select the MaxCompute source table**

Use the following parameter descriptions to select and configure the MaxCompute Source Table.

**Parameter**

**Description**

**Source Object Type**

The default value is `MaxCompute Table`.

**Project**

Select the MaxCompute project that contains the data you want to synchronize.

**Schema**

Select the name of the schema to use.

**Table**

Select the name of the table to synchronize.

**Filter Condition**

The system automatically generates a filter condition based on the selected Partitioned Table. You can also modify it as needed. Only data that meets this condition is synchronized.

**Note**

The filter condition is the content that follows the `WHERE` clause in a SQL statement.

### **Configure the Hologres destination table**

Use the following parameter descriptions to configure the Hologres destination table.

**Parameter**

**Description**

**Instance**

The system automatically populates this field based on the data source selected in the "Manage the destination data source" step.

**Database**

The system automatically populates this field based on the data source selected in the "Manage the destination data source" step.

**Schema**

Specify the schema to which the Hologres Internal Table belongs.

**Table**

Specify a name for the Hologres Internal Table. If a table with the same name already exists, the system's action depends on the table type:

-   **If the new table is not a Partitioned Table**: Hologres deletes the existing Internal Table and its data, then creates a new table.
    
-   **If the new table is a Partitioned Table**: Hologres does not delete the existing table or its data. It creates a new partition sub-table based on the partition value and imports the data.
    

**Note**

An error occurs if the schema of the new table is different from the existing table.

**Field**

**Synchronization Field**

Select the fields to synchronize and set the data type for each field in the Hologres destination table.

**Partition Configuration**

Select the partition key fields for the new table.

**Index Configuration**

Create an index on the Hologres Internal Table to enable faster queries. For more information about creating an index, see [CREATE TABLE](/help/en/hologres/developer-reference/create-tables#section-l9q-k83-z01).

-   [Storage Mode](/help/en/hologres/user-guide/storage-models-of-tables#title-1xz-nef-7l9): Hologres supports three table storage formats: Row Store, Column Store, and hybrid row-column store. Set the storage format based on your use case.
    
-   **Time to Live (Seconds)**: The TTL starts from the time the data is first written. When the TTL expires, Hologres clears the table data after a short period. The default TTL is **Permanent**.
    
-   **Binlog**: Specifies whether to enable Binlog for the table. For more information, see [Subscribe to Hologres binlogs](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs#concept-2037122).
    
-   [Binlog Time to Live](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs#concept-2037122): The default TTL is **Permanent**.
    
-   [Set Field Properties](/help/en/hologres/developer-reference/create-tables#title-zoj-fb2-dau): Search for specific fields and set their properties.
    

### **Configure advanced settings**

In the **Advanced** section, you can configure GUC parameters and the external server.

**Parameter**

**Description**

**GUC Parameter**

You must set certain GUC parameters before importing data from MaxCompute. For a list of supported GUC parameters, see [GUC parameters](/help/en/hologres/developer-reference/guc-parameters). Other SQL statements are not supported.

**External Server**

The default value is `odps_server`.

## **Run and debug the synchronization node**

To run and debug the synchronization task, configure its properties.

1.  Configure the node properties.
    
    In the **Run Configuration** tab, configure the **Compute Engine Instance** and **Resource Group**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Compute Engine Instance**
    
    Select the Hologres compute resource that you have bound.
    
    **Resource Group**
    
    Select the resource group that passed the Connectivity Test when you bound the Hologres compute resource.
    
    **Compute CU**
    
    Set the number of compute units (CUs) required to run the task. The default value is `0.25`.
    
    **Parameter**
    
    If you define variables in the format `${ParameterName}` in the filter condition, you must configure the **Parameter Name** and **Parameter Value** in the **Parameters** section. When the task runs, it dynamically replaces the variables with their actual values. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).
    
2.  To run the node task, click **Save** and then click **Run**.
    

## Next steps

-   [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/): If the node needs to be run periodically, configure scheduling by setting the **Scheduling Policy** in the **Schedule** tab on the right side of the page.
    
-   [Deploy a node](/help/en/dataworks/user-guide/task-release/): To run the task in the Production Environment, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2728034471/p932965.png) icon to open the deployment dialog box. After deployment, the node runs periodically according to its scheduling configuration.
    

## **FAQ**

-   **Field data type mismatch**: If a field [data type](/help/en/hologres/developer-reference/data-types#section-w14-cec-th7) mismatch occurs during configuration, the synchronization task will fail. Verify that the field data types in the Hologres table are configured correctly.
    
-   **Inconsistent data after synchronizing a single partition**: Verify that the source filter condition is correct.
