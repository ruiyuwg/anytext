After you create an AnalyticDB for MySQL catalog, you can directly access the tables in the AnalyticDB for MySQL catalog in the console of fully managed Flink. This topic describes how to create, view, use, and drop an AnalyticDB for MySQL catalog in the console of fully managed Flink.

## Background information

After you create an AnalyticDB for MySQL catalog, the following features are supported:

-   You can directly access the tables in the AnalyticDB for MySQL catalog without the need to manually register the tables by using DDL statements. This improves development efficiency and correctness.
    
-   You can directly use the tables in the AnalyticDB for MySQL catalog as AnalyticDB for MySQL V3.0 dimension tables and AnalyticDB for MySQL V3.0 result tables in Flink SQL deployments.
    

This topic describes the following operations that you can perform to manage AnalyticDB for MySQL catalogs:

-   [Create an AnalyticDB for MySQL catalog](#section-zkj-b28-5qc)
    
-   [View the metadata in an AnalyticDB for MySQL catalog](#section-915-ng8-qiu)
    
-   [Use an AnalyticDB for MySQL catalog](#section-wvt-5w8-x8g)
    
-   [Drop an AnalyticDB for MySQL catalog](#section-2kd-6lb-nk9)
    

## Limits

-   Only Realtime Compute for Apache Flink that uses Ververica Runtime (VVR) 6.0.2 or later allows you to configure AnalyticDB for MySQL catalogs.
    
-   You cannot modify the DDL statements that are related to catalogs.
    
-   You can only query data tables by using AnalyticDB for MySQL catalogs. You cannot create, modify, or drop databases and tables by using AnalyticDB for MySQL catalogs.
    
-   You can use the tables in AnalyticDB for MySQL catalogs only as dimension tables and result tables. You cannot use the tables as source tables.
    

## Create an AnalyticDB for MySQL catalog

1.  In the code editor of the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) tab on the SQL Editor page, enter the following statement to create an AnalyticDB for MySQL catalog:
    
    ```
    CREATE CATALOG <catalogName> WITH (
      'type' = 'adb3.0',
      'hostName' = '<hostname>',
      'port' = '<port>',
      'userName' = '<username>',
      'password' = '<password>',
      'defaultDatabase' = '<dbname>'
    );
    ```
    
    **Parameter**
    
    **Data type**
    
    **Description**
    
    **Required**
    
    catalogName
    
    STRING
    
    The name of the AnalyticDB for MySQL catalog.
    
    Yes
    
    type
    
    STRING
    
    The type of the catalog. Set the value to adb3.0.
    
    Yes
    
    hostName
    
    STRING
    
    The IP address or hostname of the AnalyticDB for MySQL database.
    
    Yes
    
    port
    
    INTEGER
    
    The port number that is used to access the AnalyticDB for MySQL database. Default value: 3306.
    
    No
    
    userName
    
    STRING
    
    The username that is used to access the AnalyticDB for MySQL database.
    
    Yes
    
    password
    
    STRING
    
    The password that is used to access the AnalyticDB for MySQL database.
    
    Yes
    
    defaultDatabase
    
    STRING
    
    The name of the default AnalyticDB for MySQL database.
    
    Yes
    
2.  Select the code that is used to create a catalog and click **Run** that appears on the left side of the code.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8969124861/p669794.png)
    

## View the metadata in an AnalyticDB for MySQL catalog

After you create an AnalyticDB for MySQL catalog, you can perform the following steps to view the metadata of AnalyticDB for MySQL.

1.  Go to the Catalogs page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
        
    2.  Find the target workspace and click **Console** in the **Actions** column.
        
    3.  In the left-side navigation pane, click **Catalogs**.
        
2.  On the **Catalog List** page, find the desired catalog and view the **Catalog Name** and **Type** columns of the catalog.
    
    **Note**
    
    To view the databases and tables in the catalog, click **View** in the Actions column.
    

## Use an AnalyticDB for MySQL catalog

-   Use a table in the AnalyticDB for MySQL catalog as a dimension table.
    
    ```
    INSERT INTO ${other_sink_table}
    SELECT ...
    FROM ${other_source_table} AS e
    JOIN `${adb_mysql_catalog}`.`${db_name}`.`${table_name}` FOR SYSTEM_TIME AS OF e.proctime AS w
    ON e.id = w.id;
    ```
    
-   Use a table in the AnalyticDB for MySQL catalog as a result table.
    
    ```
    INSERT INTO `${adb_mysql_catalog}`.`${db_name}`.`${table_name}`
    SELECT ...
    FROM ${other_source_table}
    ```
    
    If you need to specify other parameters in the WITH clause when you use a table in the AnalyticDB for MySQL catalog, we recommend that you use [SQL hints](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/table/sql/queries/hints/) to add the parameters. For more information about other parameters, see [AnalyticDB for MySQL V3.0 connector](/help/en/flink/realtime-flink/developer-reference/analyticdb-for-mysql-v3-0-connector#section-hjq-h6j-vub). The following sample code provides an example on how to add the replaceMode parameter to an AnalyticDB for MySQL V3.0 result table:
    
    ```
    INSERT INTO `${adb_mysql_catalog}`.`${db_name}`.`${table_name}` /*+ OPTIONS('replaceMode'='true') */
    SELECT ...
    FROM ${other_source_table}
    ```
    

## Drop an AnalyticDB for MySQL catalog

**Warning**

After you drop an AnalyticDB for MySQL catalog, the running deployments are not affected. However, the drafts that use the tables in the catalog can no longer find the tables if the drafts are published or the deployments that are converted from the drafts are restarted. Proceed with caution.

You can drop an AnalyticDB for MySQL catalog on the UI or by using an SQL statement. We recommend that you drop an AnalyticDB for MySQL catalog on the UI.

### Drop an AnalyticDB for MySQL catalog on the UI

1.  Go to the Catalogs page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
        
    2.  On the **Fully Managed Flink** tab, find the workspace that you want to manage and click **Console** in the **Actions** column.
        
    3.  In the left-side navigation pane, click **Catalogs**.
        
2.  On the **Catalog List** page, find the desired catalog and click **Delete** in the **Actions** column.
    
3.  In the message that appears, click **Delete**.
    
4.  View the **Catalogs** pane on the left side of the Catalog List page to check whether the catalog is dropped.
    

### Drop an AnalyticDB for MySQL catalog by using an SQL statement

1.  In the code editor of the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) tab on the SQL Editor page, enter the following statement:
    
    ```
    DROP CATALOG <catalogName>;
    ```
    
    In the preceding statement, replace catalogName with the name of the AnalyticDB for MySQL catalog that you want to drop.
    
2.  Right-click the statement that is used to drop the catalog and select **Run**.
    
3.  View the **Catalogs** pane on the left side of the Catalog List page to check whether the catalog is dropped.
