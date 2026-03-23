This topic describes how to use the one-click table schema sync feature in DataStudio to create MaxCompute foreign tables in a batch.

## Prerequisites

-   You have activated DataWorks and created a DataWorks workspace. For more information, see [Create a workspace](/help/en/dataworks/user-guide/create-a-workspace#task-861928).
    
-   You have activated Hologres and attached it to the DataWorks workspace. For more information, see [Attach a Hologres instance](/help/en/hologres/user-guide/associate-a-hologres-instance-with-a-workspace#task-2373651).
    

## Background information

Hologres connects seamlessly with MaxCompute. You can create foreign tables to speed up queries on MaxCompute data. For more information, see [MaxCompute foreign tables](/help/en/hologres/user-guide/accelerate-maxcompute-data-querying-based-on-foreign-table#task-1950070).

DataStudio provides the **One-click MaxCompute Table Schema Sync** feature. This feature lets you create foreign tables in a batch through a visual interface.

## Procedure

1.  Create a **One-click MaxCompute Table Schema Sync** node.
    
    1.  Go to the DataStudio page.
        
        Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
        
    2.  In the navigation pane on the left of the **DataStudio** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6620334371/p877146.png) icon to open the **Data Development** page.
        
    3.  In the top menu bar, click **Create** and choose **New Node** > **Hologres** > **One-click MaxCompute Table Schema Sync**.
        
    4.  In the **New Node** dialog box, select an **Engine Instance** and a **Path**, enter a **Name**, and click **OK**.
        
2.  On the node configuration tab, configure the parameters.
    
    ![参数配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5333920661/p369272.png)
    
    **Parameter**
    
    **Description**
    
    Destination Connection
    
    The instance name of Hologres.
    
    Destination Database
    
    The name of the database in the Hologres instance.
    
    Schema
    
    The name of the schema in the Hologres database. The default value is public. If you have created a new schema, you can select it.
    
    Type
    
    Currently, only MaxCompute is supported.
    
    Server List
    
    The server name. A server named odps\_server is automatically created when the Hologres instance is created. You can call this server directly. For more information about the underlying principles, see [postgres\_fdw](https://www.postgresql.org/docs/11/postgres-fdw.html).
    
    Source Project
    
    The name of the MaxCompute project.
    
    Select tables to accelerate
    
    You can choose to accelerate the entire database or only some tables, as needed.
    
    Table name conflict
    
    The policy to apply if a table name conflict occurs during table creation. The following policies are available:
    
    -   Ignore: Continues to create other tables.
        
    -   Update: Modifies the table with the same name.
        
    -   Report error: Stops the creation process.
        
    
    Unsupported data type
    
    The following policies apply to unsupported data types when you create a table:
    
    -   Report error: The import fails.
        
    -   Ignore: Skips the unsupported fields.
        
    
3.  On the configuration tab of the **One-click MaxCompute Table Schema Sync** node, click the ![保存](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4259623061/p134275.png) icon to save the configuration.
    
4.  On the configuration tab of the **One-click MaxCompute Table Schema Sync** node, click the ![运行](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4259623061/p134276.png) icon to create the foreign table schemas in a batch.
    
5.  View the batch-created foreign tables.
    
    1.  In the navigation pane on the left, click the ![PG管理](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5770096061/p171904.png) icon to open the table management page.
        
    2.  Double-click the foreign table that you want to view. The configuration tab for the table opens.
