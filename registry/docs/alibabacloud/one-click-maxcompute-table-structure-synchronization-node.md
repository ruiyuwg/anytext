DataWorks offers a one-click feature to create Hologres foreign tables in batches, mirroring the schemas of your MaxCompute tables. This topic describes how to configure a One-Click MaxCompute Schema Sync node to synchronize table schemas from MaxCompute to a Hologres database.

## Background information

The DataWorks visual interface lets you synchronize MaxCompute table schemas to Hologres in one click using the corresponding statement.

[Hologres](/help/en/hologres/product-overview/what-is-hologres#concept-1681168) is a one-stop real-time data warehouse engine developed by Alibaba Cloud. It seamlessly integrates with MaxCompute and lets you create foreign tables to accelerate queries on MaxCompute data.

## Limitations

This feature accelerates queries on MaxCompute internal tables only, not on external tables or views.

## **Procedure**

1.  On the edit page of the one-click MaxCompute schema sync node, perform the following development operations.
    
    ### **Configure the node**
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Target connection**
    
    The target Hologres Instance.
    
    **Note**
    
    From the Target Management pane on the right, you can access the **HoloWeb console (Instance Monitoring)**, **Slow Queries**, **Active Connections**, **DB Authorization**, and **User Management** pages.
    
    **Target database**
    
    The database within the selected Hologres Instance.
    
    **Schema**
    
    The name of the schema in the Hologres database. The default value is `public`.
    
    **Type**
    
    Currently, you can only create Hologres foreign tables from MaxCompute source tables.
    
    **Server list**
    
    The server that contains the source tables.
    
    You can directly use the **odps\_server** foreign server, which is already created in the Hologres backend. For more information about the underlying principles, see [postgres\_fdw](https://www.postgresql.org/docs/11/postgres-fdw.html).
    
    **Source project**
    
    The project that contains the source tables.
    
    **Select tables to be accelerated**
    
    Select the source tables from which to create foreign tables.
    
    -   **Accelerate all tables**: Create foreign tables for all tables in the selected source project.
        
    -   **Accelerate some tables**: Create foreign tables for a subset of tables in the selected source project. You can search for the tables you want to create.
        
        **Note**
        
        The search supports fuzzy matching. You can enter a keyword to find all tables whose names contain that keyword.
        
    
    **Table name conflict**
    
    Specifies the action to take if a table with the same name as the new foreign table already exists in Hologres.
    
    -   **Ignore the table and continue to create other tables**.
        
    -   **Update the existing table**.
        
    -   **Report an error and stop**.
        
    
    **Unsupported data type**
    
    How to handle source data types that Hologres does not support.
    
    -   **Report an error and fail the import**: The table creation fails.
        
    -   **Ignore the unsupported fields**: The table is created, but fields with unsupported data types are ignored.
        
    
    ### **Run the sync task**
    
    1.  In the **Run Configuration** pane, select and configure a **resource group**.
        
        **Note**
        
        -   You can also **calculate the CUs** based on the resources required for the task. The default value is `0.25` CU.
            
        -   To access data sources over a public network or in a VPC, you must use a Resource Group for Scheduling that can connect to the data source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
            
        
    2.  On the toolbar, click **Save** and then click **Run** to execute the task.
        
    
2.  To run the task periodically, configure its scheduling properties. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).
    
3.  After you configure the node task, you must deploy it. For more information, see [Node and workflow deployment](/help/en/dataworks/user-guide/task-release/).
    
4.  Once deployed, you can view the status of the periodic task in the Operation Center. For more information, see [Getting started](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    

## Next steps

After the foreign tables are created, you can query MaxCompute data directly. Queries on these Hologres tables will then be accelerated. For more information, see [Accelerate queries on MaxCompute data using foreign tables](/help/en/hologres/user-guide/accelerate-maxcompute-data-querying-based-on-foreign-table#task-1950070).
