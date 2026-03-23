This topic describes how to create, edit, or delete foreign tables in HoloWeb. It also describes how to preview foreign table data and DDL statements.

## Prerequisites

You have logged on to an instance. For more information, see [Log on to an instance](/help/en/hologres/user-guide/log-on-to-an-instance#section-ds8-hm8-pa5).

## Create a foreign table

1.  Log on to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance).
    
2.  In the navigation pane on the left of the top menu bar, select the desired region.
    
3.  You can click **Go to HoloWeb** to go to the HoloWeb development page.
    
4.  In the top navigation bar of the HoloWeb developer page, click **Metadata Management** > **MaxCompute Query Acceleration**. Then, click **Create Foreign Table**.
    
    Alternatively, on the **Metadata Management** page, you can find the target database in the **Logged On Instances** list. Click the target database, right-click the target schema under the database, and select **Create MaxCompute External Table**.
    
5.  On the **Create Foreign Table** page, configure the corresponding parameters based on the acceleration method.
    
    ## Accelerate entire database
    
    **Category**
    
    **Parameter**
    
    **Description**
    
    **Acceleration Method**
    
    **Select an acceleration method.**
    
    Hologres supports three acceleration methods:
    
    -   **Entire Project**
        
    -   **Selected Tables**
        
    -   **Single Table**
        
    
    Select **Entire Project**.
    
    **MaxCompute data source**
    
    **Project Name**
    
    The name of the MaxCompute project.
    
    **Schema Name**
    
    The schema name in MaxCompute.
    
    For MaxCompute projects where schemas are enabled, you can configure the names of all schemas for which you have permissions. You do not need to configure this parameter for projects where schemas are not enabled. For more information about schemas, see [Schema operations](/help/en/maxcompute/user-guide/schema-related-operations).
    
    **Destination Table Position**
    
    **Holo Schema**
    
    The schema name.
    
    You can select the default **public** schema, or you can select a newly created schema.
    
    **Advanced Settings**
    
    **Processing Rule for Table Name Conflicts**
    
    Three ways to resolve table name conflicts:
    
    -   **Ignore and continue to create other tables**
        
    -   **Update and modify the table with the same name**
        
    -   **Report an error and stop creation**
        
    
    **Processing Rule for Unsupported Data Types**
    
    The following two data types do not support this processing method:
    
    -   **Report an error and fail the import**
        
    -   **Ignore and Skip Table of Unsupported Fields**
        
    
    ## Partial Acceleration
    
    **Category**
    
    **Parameter**
    
    **Description**
    
    **Acceleration Method**
    
    **Select an acceleration method.**
    
    Hologres supports three acceleration methods:
    
    -   **Entire Project**
        
    -   **Selected Tables**
        
    -   **Single Table**
        
    
    Select **Selected Tables**.
    
    **MaxCompute data source**
    
    **Project Name**
    
    The name of the MaxCompute project.
    
    **Schema Name**
    
    The schema name in MaxCompute.
    
    For MaxCompute projects where schemas are enabled, you can configure the names of all schemas for which you have permissions. You do not need to configure this parameter for projects where schemas are not enabled. For more information about schemas, see [Schema operations](/help/en/maxcompute/user-guide/schema-related-operations).
    
    **Destination Table Position**
    
    **Holo Schema**
    
    Pattern name.
    
    You can select the default **public** schema, or you can select the name of a new schema.
    
    **Advanced Settings**
    
    **Processing Rule for Table Name Conflicts**
    
    Three ways to resolve table name conflicts:
    
    -   **Ignore and continue to create other tables**
        
    -   **Update and modify the table with the same name**
        
    -   **Report an error and stop creation**
        
    
    **Processing Rule for Unsupported Data Types**
    
    The following two data types do not support processing methods:
    
    -   **Report an error and fail the import**
        
    -   **Ignore and Skip Table of Unsupported Fields**
        
    
    **Search**
    
    Perform a fuzzy search by table name. A maximum of 200 tables can be displayed. If the limit is exceeded, no more tables are shown.
    
    ## Accelerate a single table
    
    **Category**
    
    **Parameter**
    
    **Description**
    
    **Acceleration Method**
    
    **Select an acceleration method.**
    
    Hologres supports three acceleration methods:
    
    -   **Entire Project**
        
    -   **Selected Tables**
        
    -   **Single Table**
        
    
    Select **Single Table**.
    
    **MaxCompute data source**
    
    **Project Name**
    
    The name of the MaxCompute project.
    
    **Schema Name**
    
    The schema name in MaxCompute.
    
    For MaxCompute projects where schemas are enabled, you can configure the names of all schemas for which you have permissions. You do not need to configure this parameter for projects where schemas are not enabled. For more information about schemas, see [Schema operations](/help/en/maxcompute/user-guide/schema-related-operations).
    
    **Table Name**
    
    The data table in the corresponding MaxCompute schema. Fuzzy search by table prefix is supported.
    
    **Destination Hologres Table**
    
    **Schema**
    
    The schema name.
    
    You can select the default **public** schema, or you can select a newly created schema name.
    
    **Table Name**
    
    The name of the single table to be accelerated in Hologres.
    
    **Destination Table Description**
    
    The description of the single table to be accelerated in Hologres.
    
    **Note**
    
    When you create a foreign table to sync data from a MaxCompute table, the comments for the table fields and columns in the database are also synced to Hologres.
    
6.  Click **Submit** to complete the creation of the foreign table. After submitting, you can refresh the newly created foreign table in the corresponding schema in the left navigation bar.
    
7.  **Optional:**You can click **Query Table** on the page of created foreign tables to enter the SQL query window and develop using the standard PostgreSQL language.
    

## Edit a foreign table

1.  In the navigation pane on the left, click **Logged-in Instances** to display all logged-in instance names.
    
2.  Click **Database** for the target instance to display all created databases.
    
3.  Click the **Schema** of the target database, and then click the **Foreign Tables** to display all created foreign tables.
    
4.  Right-click the target foreign table and select **Open Table**.
    
5.  In the upper-right corner of the target table tab, click **Edit Table**.
    
6.  You can change the **Fields** or **Partitions** of the external source table that you need to map, as needed.![Edit a foreign table](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7799393261/p273800.png)
    
7.  Click **Submit** to complete editing the current foreign table.
    

## Rename a foreign table

1.  In the navigation pane on the left, query the target foreign table in the **Logged-in Instances** interface.
    
2.  Click **Database** under the target instance to display all created databases.
    
3.  Click **Foreign Tables** under the **Schema** of the target database to display all created foreign tables.
    
4.  Right-click the target foreign table and select **Rename**.
    
5.  Click **OK**.
    

## Delete a foreign table

1.  In the navigation pane on the left, query the target foreign table on the **Logged-in Instances** page.
    
2.  Click the **Database** section under the target instance to display all created databases.
    
3.  Click **Foreign Tables** under the **Schema** of the target database to display all created foreign tables.
    
4.  Right-click the target foreign table, select **Delete Table**.
    
5.  Click **OK**.
    

## Preview data

1.  In the navigation pane on the left, on the **Logged On Instances** page, query the target foreign table.
    
2.  Click the **Database** under the target instance to display all created databases.
    
3.  Click the **Schema** of the target database, and then click the **Foreign Tables** to display all foreign tables.
    
4.  Double-click the target foreign table and click **Data Preview** on the foreign table tab.
    

## **References**

You can also use SQL statements to create, modify, and delete foreign tables. For more information, see:

-   [CREATE FOREIGN TABLE](/help/en/hologres/developer-reference/create-foreign-table#DAS)
    
-   [IMPORT FOREIGN SCHEMA](/help/en/hologres/developer-reference/import-foreign-schema#DAS)
    
-   [ALTER FOREIGN TABLE](/help/en/hologres/developer-reference/alter-foreign-table)
    
-   [DROP FOREIGN TABLE](/help/en/hologres/developer-reference/drop-foreign-table)
