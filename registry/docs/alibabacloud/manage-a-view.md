A view is a virtual table derived from one or more tables. It has the structure of a standard table but does not store data. Its content is defined by a query statement. Views fall into two categories: single-table views and multi-table views. Single-table views support queries and modifications that can change underlying table data. Multi-table views support queries only and do not modify table data. This topic describes how to create, rename, and delete views.

## Prerequisites

Instances are logged in. For more information, see [Log on to an instance](/help/en/hologres/user-guide/log-on-to-an-instance#section-ds8-hm8-pa5).

## Create a View

1.  Log on to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance).
    
2.  In the navigation pane on the left of the top menu bar, select the desired region.
    
3.  You can click **Go to HoloWeb** to go to the HoloWeb development page.
    
4.  On the HoloWeb development page, click to enter the **Metadata Management** page. In the **Logged-on Instances** list, click the target database and then the target schema created under it. Right-click **Views**, and select **Create View**.
    
5.  On the **Create View** page, configure the parameters.![新建视图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8165044261/p279037.png)
    
    **Parameter**
    
    **Description**
    
    Schema
    
    The schema name.
    
    Select the default **public** schema or a new schema name.
    
    View Name
    
    The name of the new Hologres view table.
    
    Description
    
    The description of the new Hologres view table.
    
    Query Statement
    
    In the editor box below Query Statement, enter the query statement. This can be a multi-table data query or a single-table data query.
    
    -   Single-table views are typically used for queries and modifications, which can change table data. If the view data comes from a single table, modifying the view data updates the table data. Modifying table data also updates the corresponding view.
        
    -   Multi-table views are generally used for queries and do not change table data. If the view data comes from multiple tables, modifying the view data is not supported.
        
    
    **Note**
    
    When using single-table views, modify view data carefully to avoid affecting business operations due to changes in the corresponding table data.
    
6.  Click **Submit** in the upper-right corner of the page. The operational log below shows that the creation was successful. The created view appears in the corresponding directory on the left.
    
    After creating the view, you can view its corresponding query statement and DDL statement, and preview the data on the view page.
    

## Manage Views

1.  Go to the HoloWeb development page. In the **Logged-on Instances** list on the **Metadata Management** interface, all logged-on instance names appear.
    
2.  Search for views in the navigation pane on the left or find them in the Logged-on Instances list.
    
    ![8888](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0715427271/p839371.png)
    
    Perform the following operations:
    
    -   **Open View**
        
        To view and manage a view, right-click **Open View** to go to the view page.
        
        ![1234](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0715427271/p839348.png)
        
        **Query View**
        
        Click **Query View** in the upper-right corner of the page. The page redirects to the **Temporary Query** page. In the editing area, enter the SQL statement and click **Run** to query the view. For more information about query operations, see [SQL Window](/help/en/hologres/user-guide/manage-an-sql-query-task#task-2565839).
        
        ![555](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0715427271/p839363.png)
        
        **Edit View**
        
        To modify a view, click **Edit View** in the upper-right corner of the page. In the **Query Statement** area, edit the statement. Then click **Submit** in the upper-right corner of the page.
        
        **Refresh**
        
        After modifying the view content, click **Refresh** in the upper-right corner of the page to sync the information.
        
    -   **Delete View**
        
        Delete the current view. Right-click the target view and select **Delete View**. After confirming the information, click **OK** to complete the deletion.
        
    

## Create and Delete Views Using SQL

Hologres also supports creating, viewing, and deleting views using SQL statements. For more information about SQL statements for views, see [VIEW](/help/en/hologres/developer-reference/view#task-1961650).
