The data catalog provides a unified interface for managing StarRocks metadata. This topic describes how to create and manage data objects, such as tables and views, within the data catalog.

## **Go to the** StarRocks **data catalog page**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the navigation pane on the left, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7618107371/p840002.png) icon. In the **Data Catalog** tree, click **StarRocks** to go to the StarRocks data catalog management page.
    

## Create a StarRocks **data catalog**

On the StarRocks data catalog management page, you can add existing StarRocks data sources to the data catalog list.

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon to the right of the StarRocks data catalog to go to the add instance page.
    
2.  On the **DataWorks Data Source** tab, add the StarRocks data source to the data catalog.
    
    1.  To manage a [StarRocks data source that has already been created](/help/en/dataworks/user-guide/add-and-manage-data-sources/) in the current workspace, find the data source on the **DataWorks Data Source** tab and click **Add** in the **Actions** column.
        
    2.  Select multiple StarRocks data sources on the **DataWorks Data Source** tab and click **Batch Add** below the list to add them in a batch.
        

## Manage a StarRocks **data catalog**

In the StarRocks data catalog, you can add and manage data objects such as tables, views, and materialized views.

### **Manage tables**

**Create a table**

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon next to the StarRocks project and find the table in the database under the catalog.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon to the right of **Table** to open the **Create Table** page.
    
3.  You can generate the basic table and field information in either of the following ways.
    
    -   **Create a table using Copilot**:
        
        1.  In the toolbar at the top of the page, click **Create Table With Copilot** to go to the Copilot Chat interface.
            
        2.  Enter an instruction to create the table in natural language. For example, `Create a daily user purchase details table`.
            
        3.  Click **Generate And Replace**. The system generates a default table name and field information based on your instruction.
            
        4.  If the table name and fields meet your requirements, click **Accept**.
            
            **Note**
            
            To modify the table information, you can manually edit the system-generated information after you click Accept.
            
    -   **Create a table manually**:
        
        You can create a table based on the parameter descriptions.
        
        **Parameter**
        
        **Description**
        
        Basic information
        
        Specify a custom **Table Name**, **Table Description**, and other information.
        
        Field information
        
        Edit the field and field annotation information.
        
        -   **Manual editing**: Click **Insert** above the field information list. Specify the number of rows to insert, and then edit the field, field type, and other information.
            
        -   **Intelligent editing with Copilot:** Click **Generate Fields** or **Generate Field Descriptions** above the field information list. The system generates relevant fields and descriptions based on the table name and description you set.
            
        
4.  Configure partition information.
    
    **Partition type**
    
    **Parameter description**
    
    **Scenarios**
    
    No partition
    
    No other parameters need to be set.
    
    The storage data size is small.
    
    Expression partition
    
    Set parameters such as **Expression Type**, **Time Function**, and **Partition Field**. For more information, see [Expression Partitioning](https://docs.starrocks.io/zh/docs/table_design/data_distribution/expression_partitioning/).
    
    Expression partitioning, formerly known as automatic partition creation, is supported. It is more flexible and easier to use. It is suitable for most scenarios, such as querying and managing data by continuous date ranges or enumerated values.
    
    Range partition
    
    Set parameters such as **Range Type** and **Partition Field**. For more information, see [Data Distribution](https://docs.starrocks.io/zh/docs/table_design/data_distribution/).
    
    Suitable for simple and continuous data, such as time series data or continuous numerical data.
    
    List partition
    
    Set parameters such as **Partition Field** and **Partition Settings**. For more information, see [List Partitioning](https://docs.starrocks.io/zh/docs/table_design/data_distribution/list_partitioning/).
    
    Data is partitioned based on a list of enumerated values that you explicitly define. This is suitable for querying and managing data by enumerated values.
    
5.  **Configure advanced settings**.
    
    Configure the **Sort Key** and other related parameters. For more information, see the documentation on [primary key tables](https://docs.starrocks.io/zh/docs/table_design/table_types/primary_key_table/), [duplicate key tables](https://docs.starrocks.io/zh/docs/table_design/table_types/duplicate_key_table/), [aggregate tables](https://docs.starrocks.io/zh/docs/table_design/table_types/aggregate_table/), and [unique key tables](https://docs.starrocks.io/zh/docs/table_design/table_types/unique_key_table/).
    
6.  After the configuration is complete, click **Publish** in the top toolbar to create the table.
    

**Manage a table**

1.  View the table.
    
    After you create a table in the StarRocks instance, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the StarRocks data catalog. Click **Table** to view the table's basic information. You can also click a specific table name to view details such as **Fields** and **DDL**.
    
2.  Operate on the table.
    
    Right-click the table that you want to manage and select **Generate Query SQL**.
    
3.  Delete the table.
    
    Right-click the table that you want to delete and select **Delete**.
    
    **Important**
    
    A deleted table cannot be recovered. Proceed with caution.
    

### **Manage views**

**Create a view**

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon next to the StarRocks instance and find the view in the database under the catalog.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon to the right of **View** to open the **New View** page.
    
3.  Refer to the [CREATE VIEW](https://docs.starrocks.io/zh/docs/sql-reference/sql-statements/View/CREATE_VIEW/) command. Change `view_name` to your desired view name. After the `AS` keyword, add the search statement for the view's data source.
    
4.  Click **Publish** in the toolbar to create the view.
    

**Manage a view**

1.  View the view.
    
    After you create a view in the StarRocks instance, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the StarRocks instance. Click **View** to view the view's basic information. You can also click a specific view name to view details such as **Fields** and **DDL**.
    
2.  Delete the view.
    
    Right-click the view that you want to delete and select **Delete**.
    

### **Manage materialized views**

**Create a materialized view**

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon next to the StarRocks instance and find the **Materialized View** in the database under the catalog.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon to the right of **Materialized View** to go to the **Create Materialized View** page.
    
3.  Refer to the [CREATE MATERIALIZED VIEW](https://docs.starrocks.io/zh/docs/sql-reference/sql-statements/materialized_view/CREATE_MATERIALIZED_VIEW/) command. Change `materialized_view_name` to your desired materialized view name. After the `AS` keyword, add the search statement for the materialized view's data source.
    
4.  Click **Publish** in the toolbar to create the materialized view.
    

**Manage a materialized view**

1.  View the materialized view.
    
    After you create a materialized view in the StarRocks instance, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the StarRocks instance. Click **Materialized View** to view the materialized view's basic information. You can also click a specific materialized view name to view details such as **Fields** and **DDL**.
    
2.  Delete the materialized view.
    
    Right-click the materialized view that you want to delete and select **Delete**.
    

## **View and remove a StarRocks data catalog**

If you no longer need a StarRocks data catalog, you can view and remove it.

1.  View the data catalog.
    
    1.  After you add an instance to the StarRocks data catalog, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the data catalog to view the added instance.
        
    2.  Hover the mouse pointer over the StarRocks instance to view the name of the attached data source.
        
2.  Detach a project.
    
    If you no longer need to manage a StarRocks data catalog, right-click the data catalog and select **Remove**.
    

## **FAQ**

**Q: Why does metadata fail to load with the error "you need (at least one of) the SELECT privilege(s) on TABLE tables for this operation"?**

A: Grant the SELECT permission on the information\_schema database. For more information, see [Manage users and data authorization](/help/en/emr/emr-serverless-starrocks/manage-users-and-grant-permissions#section-ngt-mcf-rv0).
