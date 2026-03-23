The data catalog provides a unified interface to manage Hologres metadata. This topic describes how to create and manage data objects, such as tables and views, in the data catalog.

## **Go to the** Hologres **data catalog page**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7618107371/p840002.png) icon in the navigation pane on the left. In the **Data Catalog** tree, click **Hologres** to open the Hologres data catalog management page.
    

## **Create a** Hologres **data catalog**

On the Hologres data catalog management page, you can add existing Hologres instances to the data catalog as datasets.

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon to the right of the Hologres data catalog to open the Add Instance page.
    
2.  Add a Hologres instance in one of the following ways.
    
    -   **Using a DataWorks data source**:
        
        -   To add a [Hologres data source created](/help/en/dataworks/user-guide/add-and-manage-data-sources/) in the current workspace, find the data source on the **DataWorks Data Source** tab and click **Add To Data Catalog** in the **Actions** column.
            
        -   You can also select multiple Hologres data sources on the **DataWorks Data Source** tab and click **Batch Add** below the list.
            
    -   **Using a Hologres instance**:
        
        -   To add a [Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance) that you purchased in the [Hologres console](https://hologram.console.alibabacloud.com/#/instance), find the instance on the Hologres-Instance tab and click **Add** in the **Actions** column.
            
        -   You can also select multiple Hologres instances on the **Hologres-Instance** tab and click **Batch Add** below the list.
            

## **Manage a** Hologres **data catalog**

You can add and manage data objects such as schemas, tables, and views in a Hologres data catalog.

### **Manage schemas**

**Create a schema**

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the Hologres data catalog and locate the database where you want to create a schema.
    
2.  To the right of the database, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png)** > **Create Schema**.
    
3.  In the **Create Schema** dialog box, enter a name and press Enter.
    

**Manage a schema**

1.  View a schema.
    
    After you add a schema to a Hologres database, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon next to the database to view the schema.
    
2.  Delete a schema.
    
    If you no longer need to manage a schema, right-click the schema and select **Delete**.
    
    **Important**
    
    -   This operation cannot be undone. Proceed with caution.
        
    -   Before you delete a schema, you must delete all data objects, such as tables and views, within that schema.
        
    

### **Manage tables**

**Create a table**

1.  To the right of the target schema, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png)** > **New Table** to open the **Create Table** page.
    
2.  Generate basic table information and field information in one of the following ways.
    
    -   **Create a table using Copilot**:
        
        1.  In the toolbar, click **Create Table With Copilot** to open the Copilot chat interface.
            
        2.  Enter an instruction to create a table. Example: `Create a table for daily user purchase details`.
            
        3.  Click **Generate And Replace**. The system generates a default table name and field information based on your instruction.
            
        4.  If the table name and fields meet your requirements, click **Accept**.
            
            **Note**
            
            To modify the table information, you can manually edit the system-generated information after you click Accept.
            
    -   **Create a table manually**:
        
        Configure the parameters to create a table.
        
        **Parameter**
        
        **Description**
        
        Basic information
        
        Specify the **Table Name**, **Table Description**, and other information.
        
        Field information
        
        Edit the fields and field annotations.
        
        -   **Manual editing**: Click **Insert** above the field information list and specify the number of rows to insert. Then, you can edit the fields, field types, and other information.
            
        -   **Copilot intelligent editing:** Click **Generate Fields** or **Generate Field Descriptions** above the field information list. The system can generate relevant fields and descriptions based on the table name and description that you set.
            
        
3.  (Optional) Configure partition information.
    
    This step is not required for standard tables. To create a partitioned table, select a partition key from the **Partition Field** drop-down list and configure other [dynamic partition parameters](/help/en/hologres/developer-reference/dynamic-partition-management) as needed.
    
4.  (Optional) Configure advanced settings**.**
    
    **Parameter**
    
    **Description**
    
    Storage Mode
    
    Hologres supports three storage modes: **[column-oriented](/help/en/hologres/user-guide/storage-models-of-tables)**[, **Row-oriented**, and](/help/en/hologres/user-guide/storage-models-of-tables) **[row-column hybrid](/help/en/hologres/user-guide/storage-models-of-tables)**. The default mode is **Column-oriented**.
    
    -   Column-oriented storage is suitable for complex queries in various Online Analytical Processing (OLAP) scenarios.
        
    -   Row-oriented storage is suitable for key-value (KV) query scenarios based on primary keys (PKs).
        
    -   Row-column hybrid storage is suitable for scenarios where both column-oriented and row-oriented storage are applicable.
        
    
    Table Group
    
    Select the name of a [table group](/help/en/hologres/user-guide/table-group-management) that is generated when you create an internal table in the Hologres data source.
    
    Storage Policy
    
    Hologres provides two [tiered storage](/help/en/hologres/user-guide/tiered-storage-of-hot-data-and-cold-data) types: Standard storage (**Hot Storage**) and Infrequent Access storage (**Cold Storage**).
    
    **Note**
    
    Hologres has supported tiered storage since V1.3.37.
    
    -   Hot storage uses solid-state drives (SSDs) and is the default storage type of Hologres. It meets the requirements for low-latency and high-performance data access. For most scenarios, Standard storage is the most effective and cost-efficient option.
        
    -   Cold storage uses hard disk drives (HDDs) and meets the requirements for low-cost storage of infrequently accessed data. It is suitable for extra-large datasets that are not latency-sensitive or frequently accessed.
        
    
    Table data lifecycle
    
    You can specify a custom maximum time to live (TTL) for the dynamic table.
    
    Binary logging
    
    You can enable (**replica**) or disable (**none**) the [subscription to Hologres binary logs](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs). By default, this feature is disabled.
    
    **Note**
    
    Hologres V0.9 and later support the binary logging feature for single tables.
    
    Binary log lifecycle
    
    After you enable (**replica**) the [subscription to Hologres binary logs](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs), you can set the maximum TTL for the binary logs.
    
    Field properties
    
    For information about how to set field properties, such as **Distribution Key**, **Segment Key**, and **Clustering Key** for a **Field Name**, see [Manage internal tables](/help/en/hologres/user-guide/manage-an-internal-table).
    
5.  After you complete the configuration, click **Publish** in the toolbar to create the table.
    

**Manage a table**

1.  View a table.
    
    After you create a table in a Hologres instance, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon in the left pane of the Hologres data catalog and then click **Tables** to view the table's basic information. You can also click a specific table name to view details such as **Fields** and **DDL**.
    
    **Note**
    
    For partitioned tables, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the table name to view partition information.
    
2.  Perform operations on a table.
    
    Right-click the target internal table and select [Map Metadata to MaxCompute](/help/en/dataworks/user-guide/mapping-hologres-metadata-to-maxcompute) or [Synchronize Data to MaxCompute](/help/en/dataworks/user-guide/synchronizing-hologres-data-to-maxcompute).
    
3.  Delete a table.
    
    Right-click the internal table that you want to delete and select **Delete**.
    
    **Important**
    
    This operation cannot be undone. Proceed with caution.
    

### **Managing External Tables**

After you create a Hologres [foreign table](/help/en/hologres/user-guide/manage-foreign-tables/) in a [Hologres SQL node](/help/en/dataworks/user-guide/hologres-sql-node) or the [SQL window for Hologres](/help/en/hologres/user-guide/manage-an-sql-query-task) in DataWorks, you can view its basic information by clicking the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon on the left side of the Hologres data catalog and then clicking **Foreign Tables**. You can also click a specific table name to view details such as **Fields** and **DDL**.

### **Manage views**

**Create a view**

1.  On the right side of the schema, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png)** > **New View** to open the **Create View** page.
    
2.  Modify the `view_name` to the name of the view that you want to create. Then, modify `column1` and `table_name` to the source field and source table of the view. For more information, see the [VIEW](/help/en/hologres/developer-reference/view#task-1961650) command.
    
3.  Click **Publish** in the toolbar to create the view.
    

**Manage a view**

1.  View a view.
    
    After you create a view in Hologres, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon on the left of the Hologres data catalog and then click **Views** to view its basic information. You can also click a specific view name to view details such as **Fields** and **DDL**.
    
2.  Delete a view.
    
    Right-click the view that you want to delete and select **Delete**.
    

### **Manage materialized views**

After you create a Hologres [materialized view](/help/en/hologres/developer-reference/materialized-view) in a [Hologres SQL node](/help/en/dataworks/user-guide/hologres-sql-node) or the [SQL window for Hologres](/help/en/hologres/user-guide/manage-an-sql-query-task) in DataWorks, you can view its basic information by clicking the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon on the left side of the Hologres data catalog and then clicking **Materialized Views**. You can also click a specific materialized view name to view more details, such as **Fields** and **DDL**.

### **Manage dynamic tables**

After you [create a Hologres dynamic table](/help/en/dataworks/user-guide/hologres-dynamic-table#005b725fb8u48), you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the Hologres data catalog, right-click the target dynamic table under **Dynamic Tables**, and then [view](/help/en/dataworks/user-guide/hologres-dynamic-table#9f970358dcgid) or [delete the dynamic table](/help/en/dataworks/user-guide/hologres-dynamic-table#ab463cb06347c).

## View and remove a Hologres **data catalog**

If you no longer need to use a Hologres data catalog, you can remove it from the catalog list.

1.  View the data catalog.
    
    1.  After you add an instance to the Hologres data catalog, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon on the left side of the catalog to view the instance.
        
    2.  Hover the mouse pointer over the Hologres instance to view information such as the **Instance Version** and **Instance Type**.
        
2.  You can detach a project.
    
    If you no longer need to manage a Hologres data catalog, right-click the data catalog and select **Detach Data Catalog**.
