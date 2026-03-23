The data catalog provides a unified interface to manage instance metadata for the cloud-native data warehouse AnalyticDB for PostgreSQL. This topic describes how to create and manage tables in the data catalog.

## **Go to the AnalyticDB PostgreSQL data catalog page**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7618107371/p840002.png) icon in the left navigation pane, and in the **Data Catalog** directory tree, click **AnalyticDB PostgreSQL**.
    

## Create an AnalyticDB PostgreSQL data catalog

You can add existing AnalyticDB PostgreSQL data sources as datasets to the data catalog list.

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon next to the AnalyticDB PostgreSQL data catalog to open the Add Instance page.
    
2.  On the **DataWorks Data Source** tab, add the AnalyticDB PostgreSQL data source to the data catalog.
    
    1.  To manage an [existing AnalyticDB PostgreSQL data source](/help/en/dataworks/user-guide/add-and-manage-data-sources/) in the current workspace, locate the data source on the **DataWorks Data Source** tab and click the **Add** button in the **Actions** column.
        
    2.  On the **DataWorks Data Sources** tab, you can also select multiple AnalyticDB PostgreSQL data sources and click the **Batch Add** button.
        

## Manage an AnalyticDB PostgreSQL data catalog

You can add and manage tables in an AnalyticDB PostgreSQL data catalog.

### **Create a table**

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the AnalyticDB for PostgreSQL instance and locate **Table** in the database.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon to the right of **Table** to open the **Create Table** page.
    
3.  Generate the basic table and field information in one of the following ways.
    
    -   **Create a table using Copilot**:
        
        1.  Click **Copilot Create Table** in the toolbar at the top of the page to open the Copilot Chat interface.
            
        2.  Enter an instruction in natural language to create a table. For example, `Create a table for daily user purchase details`.
            
        3.  Click **Generate And Replace**, and the system generates the default table name and field information according to your instruction.
            
        4.  If the table name and fields are correct, click **Accept**.
            
            **Note**
            
            To modify parts of the table information, you can manually edit the system-generated information after you click Accept.
            
    -   **Create a table manually**:
        
        Create a table based on the parameter descriptions.
        
        **Parameter**
        
        **Description**
        
        Basic Information
        
        Customize information such as **Table Name** and **Table Description**.
        
        Field Information
        
        Edit the fields and field annotations.
        
        -   **Manual editing**: Click the **Insert** button above the field information list and manually specify the number of rows to insert. You can then edit information such as the field and field type.
            
        -   **Copilot Intelligent Editing:** Click **Generate Fields** or **Generate Field Descriptions** above the field information list. The system can generate related fields and their descriptions based on the table name and table description that you set.
            
        
4.  After you complete the configuration, click **Publish** in the top toolbar to create the table.
    

### **Manage tables**

1.  View a table.
    
    After you create a table in an AnalyticDB for PostgreSQL instance, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the AnalyticDB for PostgreSQL data catalog and then click **Table** to view basic table information on the **Table** list page. You can also click a table name to open the table details page and view details such as **fields** and **DDL**.
    
2.  Modify a table.
    
    On the table details page, click the Edit button in the upper-right corner to modify information such as the **Fields** and **Description**. You must **Publish** the changes to apply them.
    
3.  Delete a table.
    
    On the **Tables** page, find the table you want to delete and click **Delete** in the **Actions** column. In the dialog box that appears, click **Confirm**.
    
    **Important**
    
    This action cannot be undone. Proceed with caution.
    

## **View and detach an AnalyticDB PostgreSQL data catalog**

If you no longer need to use a registered AnalyticDB PostgreSQL data source, you can view its details or detach it from the data catalog.

1.  View a data source.
    
    1.  After you add an instance to the AnalyticDB PostgreSQL data catalog, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the data catalog to view the instances.
        
    2.  Hover your mouse over the corresponding AnalyticDB for PostgreSQL instance to view the **Cluster ID** and **Cluster Type**.
        
2.  Detach the project.
    
    If you no longer need an AnalyticDB PostgreSQL data catalog, right-click the data catalog and select **Detach Data Catalog**.
