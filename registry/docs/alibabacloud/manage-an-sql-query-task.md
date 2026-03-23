This topic describes how to create, edit, delete, copy, and rename SQL queries in HoloWeb. The SQL window is suitable for interactive short queries. It is not suitable for offline jobs such as importing or exporting large data volumes. It does not support SQL execution exceeding 60 minutes.

## Prerequisites

Instances are logged in. For more information, see [Log on to an instance](/help/en/hologres/user-guide/log-on-to-an-instance#section-ds8-hm8-pa5).

## **Access the feature**

1.  Log on to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance).
    
2.  In the navigation pane on the left of the top menu bar, select the desired region.
    
3.  You can click **Go to HoloWeb** to go to the HoloWeb development page.
    
4.  On the HoloWeb development page, in the top menu bar, click **SQL Editor**.
    

## Create an SQL Query

After you access the **SQL Editor** page through the [feature entry](#2d4172cdbdc82), perform the following operations:

1.  In the navigation pane on the left, right-click **My SQL Queries**, and select **Create SQL Query**.
    
    Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8570943671/p962630.png) to create a temporary SQL query window and execute SQL commands. After execution, click **Save** as needed to retain the content of the current SQL window.
    
2.  In the **Create SQL Query** dialog box, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    Job Name
    
    The name of the new SQL query.
    
    Folder
    
    The location where the new SQL query is stored.
    
    The default folder is **My SQL Queries**. You can also store it in an existing folder.
    
    New Folder
    
    The location where the new SQL query is stored. You can choose to store it in a new folder.
    
    Instance Name
    
    Select the target instance name.
    
    Database Name
    
    The database name under the current Hologres instance.
    
3.  Click **OK** to complete the creation.
    
    You can also use standard PostgreSQL language for development in the SQL editor.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6142784671/p1031907.png)
    
    **Note**
    
    SQL queries are case-insensitive for table and field names. To perform a term query for tables with exact case-sensitive names, enclose the table name in double quotation marks.
    
    **Area**
    
    **Description**
    
    ①
    
    Displays the target instance name, instance ID, database, current compute group, and current time zone for the current SQL execution.
    
    ②
    
    -   Save the content of the current SQL window.
        
    -   Refresh the SQL editor page.
        
    
    ③
    
    All table information under the current target database:
    
    -   [Internal tables](/help/en/hologres/user-guide/manage-internal-table/)
        
    -   [Foreign tables](/help/en/hologres/user-guide/manage-foreign-tables/)
        
    -   [Views](/help/en/hologres/user-guide/manage-a-view)
        
    -   [Materialized views](/help/en/hologres/user-guide/materialized-views/)
        
    -   Dynamic table ([Dynamic Table Overview](/help/en/hologres/user-guide/introduction-to-dynamic-table))
        
    -   [Stored procedures (Beta)](/help/en/hologres/developer-reference/storage)
        
    
    ④
    
    -   Run: Run SQL commands.
        
    -   [View execution plan](/help/en/hologres/user-guide/view-execution-plans#section-2pt-yyp-yir).
        
    -   [View Execution Analysis](/help/en/hologres/user-guide/view-execution-plans#section-qqn-zbf-d74).
        
    -   Stop: Stop running SQL commands.
        
    -   Format: Format SQL commands.
        
    -   Help: View data types, function references, and SQL parameter documentation.
        
    -   Document Settings: Supports editor settings, SQL parameters, and time zone settings.
        
    -   More: Supports importing or exporting SQL, or accessing DataService Studio in DataWorks for SQL development.
        
    
    ⑤
    
    -   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8570943671/p962709.png): Search operational logs.
        
    -   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8570943671/p962711.png): Close all logs, jump to the last page of logs, and display logs.
        
    -   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8570943671/p962714.png): Save logs.
        
    -   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8570943671/p962716.png): Pause log scrolling.
        
    -   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8570943671/p962721.png) and ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8570943671/p962723.png): Adjust the log display area.
        
    
    **Note**
    
    -   HoloWeb supports SQL execution for a maximum of 60 minutes. If execution exceeds 60 minutes, a timeout message appears: `cancel query due to timeout, queryTimeout setting is: 3600s`.
        
    -   If you set the \`statement\_timeout\` parameter to be greater than 60 minutes, this parameter does not take effect for SQL statements in HoloWeb. For information about how to set \`statement\_timeout\`, see [Modifying Active Query Timeout](/help/en/hologres/user-guide/manage-queries#section-8js-89g-oon).
        
    

## **Other Operations**

1.  Access the **SQL Editor** page through the [feature entry](#2d4172cdbdc82).
    
2.  In the navigation pane on the left, click **My SQL Queries**. Find the target SQL query and perform the following operations:
    
    **Note**
    
    If the target SQL query is in a folder, enter the target SQL query name in the search box below **Query**.
    
    -   Edit an SQL query: Double-click the target SQL query. Enter the SQL statement to execute in the SQL editor.
        
    -   Delete an SQL query: Right-click the target SQL query, and click **Delete SQL Query Task**.
        
    -   Copy an SQL query: Right-click the target SQL query, and click **Copy SQL Query Task**. Paste the copied SQL statement into other SQL query windows as needed.
        
    -   Rename an SQL query: Right-click the target SQL query, and click **Rename**. Rename the SQL query as needed.
