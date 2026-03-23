A script can contain the CALL command and DDL, DQL, and DML statements. You can use scripts to create and manage catalogs and tables, perform data queries, and manage Apache Paimon tables. You can use the Explain statement in a script to view execution plans and troubleshoot issues.

## **Features**

-   Verifies SQL syntax. A script cannot run if the verification fails.
    
-   Run all or selected statements in a script.
    
-   Supports the `CALL` command and DDL, DQL, and DML statements.
    
    **Important**
    
    Executing DDL or DML statements directly can impact your metadata or data. Proceed with care.
    
-   Automatically saves your script every minute. You can also manually save a temporary query to a folder.
    

## **Procedure**

1.  Log on to the [Realtime Compute for Apache Flink's Management Console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
    
2.  In the **Actions** column of your workspace, click **Console**.
    
3.  In the Development Console, navigate to **Development** > **Scripts** and click the **Scripts** tab.
    
4.  Click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3003614071/p741551.png) to create a script.
    
5.  Enter your SQL code.
    
    The code snippet below creates a MySQL catalog:
    
    -   Create a MySQL catalog. For details, see [Create a MySQL catalog](/help/en/flink/realtime-flink/user-guide/manage-mysql-catalogs#section-f64-um5-5q7).
        
        ```
        CREATE CATALOG mysql_catalog WITH(
          'type' = 'mysql',
          'hostname' = 'rm-bp1x********.mysql.rds.aliyuncs.com',
          'port' = '3306',
          'username' = 'db_user',
          'password' = '${secret_values.mysqlpw}',
          'default-database' = 'flinktest'
        );
        ```
        
    -   Query the table:
        
        -   **Batch (batch)**: Used only for bounded datasets (fixed volume) and provides higher efficiency.
            
        -   **Streaming**: Used for both bounded and unbounded datasets (unknown or infinite size). To switch to streaming mode, explicitly specify the `SET` statement.
            
            **Note**
            
            Scripts do not support [variables](/help/en/flink/realtime-flink/user-guide/manage-keys).
            
            ```
            SET 'execution.runtime-mode' = 'streaming';
            SELECT * FROM `mysql_catalog`.flinktest.orders;
            ```
            
    
6.  Select or create a session cluster.
    
    In the lower-right corner of the page, click **Environment** and select a session cluster of Ververica Runtime (VVR) 8.0.4 or later. If no session cluster exists, [create a session cluster](/help/en/flink/realtime-flink/user-guide/debug-a-deployment#54d065d1e0z6e).
    
7.  Select the target code snippet and click **Run** to the left of the snippet.
    
8.  (Optional) In the upper-right corner, click **Save**. Specify a file name and a storage location.
    

## **FAQ**

### Why do I get the error **"Querying an unbounded table 'XXX' in batch mode is not allowed. The table source is unbounded." when running a script?**

**Cause**

The source is an unbounded stream and requires streaming mode. The data stream types are defined as follows:

-   Bounded stream: The size of the dataset is fixed.
    
-   Unbounded stream: The size of the dataset is unknown or infinite.
    

**Solution**

-   Use the SET syntax to switch to streaming mode.
    
    ```
    SET 'execution.runtime-mode' = 'streaming';
    ```
    

## **References**

-   [Create a session cluster](/help/en/flink/realtime-flink/user-guide/debug-a-deployment#54d065d1e0z6e)
    
-   [Catalogs](/help/en/flink/realtime-flink/user-guide/manage-catalogs/)
    
-   [Build a streaming data lakehouse by using Realtime Compute for Apache Flink, Apache Paimon, and StarRocks](/help/en/flink/realtime-flink/use-cases/build-a-streaming-data-warehouse-based-on-flink-and-apache-paimon)
    
-   [Release notes](/help/en/flink/realtime-flink/product-overview/release-notes/)
