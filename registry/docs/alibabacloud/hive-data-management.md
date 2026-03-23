The data catalog provides a unified interface to manage Hive metadata. This topic describes how to create and manage table objects in the data catalog.

## **Go to the** Hive **data catalog page**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the navigation pane on the left, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7618107371/p840002.png) icon. In the **Data Catalog** tree, click **Hive** to open the Hive data catalog management page.
    

## **Create a** Hive **data catalog**

On the Hive data catalog management page, you can add existing Hive data sources to the data catalog as datasets.

1.  To the right of the Hive data catalog, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon to open the Add Instance page.
    
2.  On the **DataWorks Data Source** tab, add a Hive data source to the data catalog.
    
    1.  To manage the [EMR computing resources attached for the new Data Studio](/help/en/dataworks/user-guide/bind-emr-computing-resources) in the current workspace, find the corresponding EMR cluster data source on the **DataWorks Data Source** tab and click **Add** in the **Actions** column.
        
    2.  Alternatively, on the **DataWorks Data Source** tab, you can select multiple Hive data sources and click **Batch Add** below the list.
        

## **Manage a** Hive **data catalog**

You can add and manage Hive tables in the Hive data catalog.

### **Create a table**

1.  You can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon next to the Hive data catalog to find **Tables** under the database.
    
2.  To the right of **Tables**, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon to open the **Create Table** page.
    
3.  You can generate the basic table and field information in either of the following ways.
    
    -   **Create a table using Copilot**:
        
        1.  In the toolbar at the top of the page, click **Create Table With Copilot** to open the Copilot chat interface.
            
        2.  Enter an instruction to create a table in natural language. For example, `Create a user table`.
            
        3.  Click **Generate And Replace**. The system generates a default table name and field information based on your instruction.
            
        4.  If the table name and fields meet your expectations, click **Accept**.
            
            **Note**
            
            To modify the table information, you can manually edit the system-generated information after you click Accept.
            
    -   **Create a table manually**:
        
        You can create a table based on the parameter descriptions.
        
        **Parameter**
        
        **Description**
        
        Basic Information
        
        Specify a custom **Table Name**, **Table Description**, and other information.
        
        Field Information
        
        Edit the fields and field annotations.
        
        -   **Edit manually**: Above the field information list, click **Insert**. Specify the number of rows to insert, and then edit the **Field Name**, **Field Type**, and other information.
            
        -   **Edit with Copilot:** Above the field information list, click **Generate Fields** or **Generate Field Descriptions**. The system generates relevant fields and descriptions based on the table name and description you set.
            
        
4.  (Optional) Configure partition information.
    
    To create a partitioned table, in the **Partition Fields** section, specify the number of partition fields for **Rows** and click **Insert**. Multiple partitions are supported. In the partition field list, configure the **Field Name**, **Field Type**, and other parameters as needed.
    
5.  (Optional) Configure advanced settings.
    
    **Parameter**
    
    **Description**
    
    Table Type
    
    Only **Internal Table** is supported.
    
    Storage Location
    
    You can specify a custom storage folder for the table. Example: `/user/hive/warehouse/hive_work`.
    
    Storage Format
    
    You can set the storage format to CSV, PARQUET, ORC, AVRO, JSON, or SELF\_DEFINE. The system automatically defines the data input format, output format, and serialization and deserialization methods based on the selected storage format.
    
    -   **CSV**: A comma-separated text file, suitable for simple data structures.
        
    -   **PARQUET**: A columnar storage format with a high compression ratio, suitable for big data analysis.
        
    -   **ORC**: An optimized columnar storage format with excellent performance that supports complex data types.
        
    -   **AVRO**: A binary format that supports schema evolution, suitable for dynamic data structures.
        
    -   **JSON**: Supports nested structures, suitable for semi-structured data.
        
    -   **SELF\_DEFINE**: Lets you define custom serialization and deserialization logic.
        
    
6.  After you complete the configuration, click **Publish** in the top toolbar to create the table.
    

### **Manage tables**

After you create a table in the Hive data catalog, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the Hive data catalog and then click **Tables** to open the **Tables** page.

1.  View tables.
    
    On the **Tables** page, you can view the basic information for all tables. You can also click a specific table name to view its **Details**, **Basic Information**, and **DDL** information.
    
2.  Delete a table.
    
    On the **Tables** page, find the table you want to delete and click **Delete** in the **Actions** column.
    
    **Important**
    
    This operation cannot be undone. Proceed with caution.
    

## **View and remove a** Hive data catalog

If you no longer need a Hive data catalog, you can view and remove it.

1.  View the data catalog.
    
    1.  After you add a Hive data source to the Hive data catalog, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the Hive data catalog to view the added Hive data source.
        
    2.  Click a Hive data source to view all the **Databases** in that Hive instance.
        
2.  You can detach a project.
    
    If you no longer need to manage a Hive data catalog, right-click the catalog and select **Detach Data Catalog** from the menu that appears.
