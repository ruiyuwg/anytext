The data catalog provides a unified interface to manage metadata for AnalyticDB for MySQL. This topic describes how to create and manage table objects in the data catalog.

## **Go to the** AnalyticDB for MySQL **data catalog page**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the navigation pane on the left, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7618107371/p840002.png) icon. In the **Data Catalog** tree, click **AnalyticDB for MySQL** to open the AnalyticDB for MySQL data catalog management page.
    

## **Create an** AnalyticDB for MySQL **data catalog**

On the AnalyticDB for MySQL data catalog management page, you can add existing AnalyticDB for MySQL data sources to the data catalog as datasets.

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon to the right of the AnalyticDB for MySQL entry to open the add instance page.
    
2.  On the **DataWorks Data Source** tab, add an AnalyticDB for MySQL data source to the data catalog.
    
    1.  To manage an [existing AnalyticDB for MySQL data source](/help/en/dataworks/user-guide/add-and-manage-data-sources/) in the current workspace, find the data source on the **DataWorks Data Source** tab and click **Add** in the **Actions** column.
        
    2.  You can also select multiple AnalyticDB for MySQL data sources on the **DataWorks Data Source** tab and click **Batch Add** below the list to add them in a batch.
        

## **Manage the** AnalyticDB for MySQL **data catalog**

You can add and manage table objects in the AnalyticDB for MySQL data catalog.

### **Create a table**

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the AnalyticDB for MySQL instance, and locate **Tables** under the database.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon to the right of **Tables** to open the **Create Table** page.
    
3.  Generate the basic table and field information in one of the following ways.
    
    -   **Create a table with Copilot**:
        
        1.  In the toolbar at the top of the page, click **Create Table With Copilot** to open the Copilot chat interface.
            
        2.  Enter a command in natural language to create the table. For example: `Create a table for daily user purchase details`.
            
        3.  Click **Generate And Replace**. The system generates a default table name and field information based on your command.
            
        4.  If the table name and fields meet your requirements, click **Accept**.
            
            **Note**
            
            To modify the table information, you can manually edit the system-generated information after you click Accept.
            
    -   **Create a table manually**:
        
        Configure the parameters for the table.
        
        **Parameter**
        
        **Description**
        
        Basic information
        
        Customize information such as the **Table Name** and **Table Description**.
        
        Field information
        
        Edit the fields and field descriptions.
        
        -   **Manual editing**: Click **Insert** above the field information list. Specify the number of rows to insert, and then edit the field name, field type, and other information.
            
        -   **Copilot smart editing:** Click **Generate Fields** or **Generate Field Descriptions** above the field information list. The system generates relevant fields and descriptions based on the table name and table description that you set.
            
        
4.  After you configure the parameters, click **Publish** in the top toolbar to create the table.
    

### **Manage tables**

1.  View a table.
    
    After you create a table in an AnalyticDB for MySQL instance, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon next to the AnalyticDB for MySQL data catalog entry and then click **Tables** to view the basic information about the table on the **Tables** list page. You can also click a table name to open its details page and view more information, such as its **Fields** and **DDL** statement.
    
2.  Modify a table.
    
    On the table details page, click the Edit button in the upper-right corner. On the table editing page, modify information such as the table's **Fields** and **Description**. After you make the changes, click **Publish** to apply them.
    
3.  Delete a table.
    
    On the **Tables** list page, find the table that you want to delete and click **Delete** in the **Actions** column. In the dialog box that appears, click **Confirm**.
    
    **Important**
    
    This operation cannot be undone. Proceed with caution.
    

## **View and remove an** AnalyticDB for MySQL data catalog

If you no longer need to use an AnalyticDB for MySQL data catalog instance, you can view its details or detach it.

1.  View a data catalog instance.
    
    1.  After you add an instance to the AnalyticDB for MySQL data catalog, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon next to the data catalog entry to view the added instances.
        
    2.  Hover over an AnalyticDB for MySQL instance to view its **Cluster ID** and **Cluster Type**.
        
2.  Detach a data catalog instance.
    
    If you no longer need to manage an AnalyticDB for MySQL instance, right-click the instance and select **Detach Data Catalog** from the shortcut menu.
