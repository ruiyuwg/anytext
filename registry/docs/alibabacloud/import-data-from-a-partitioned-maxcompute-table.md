This topic describes how to import data from a MaxCompute partitioned table into a Hologres partitioned table.

## Prerequisites

-   You have purchased and activated a Hologres instance. For more information, see [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224).
    
-   You have activated MaxCompute and created a MaxCompute project. For more information, see [Activate MaxCompute](/help/en/maxcompute/getting-started/activate-maxcompute-and-dataworks#task-dkr-hyw-5db).
    
-   You have activated DataWorks and created a DataWorks workspace. For more information, see [Create a workspace](/help/en/dataworks/user-guide/create-a-workspace#task-861928).
    

## Background information

Using MaxCompute foreign tables in Hologres is a common method for importing data. In daily operations, you often need to import data regularly. You can use DataWorks to schedule and orchestrate jobs. This enables periodic imports with a single job that covers both scenarios. For more information, see [DataWorks job examples](#section-owa-vmj-5r4).

If the job is complex, use the DataWorks migration assistant. Import the sample job file into your project. Then adjust parameters or scripts as needed for your business. For more information, see [Import DataWorks jobs using the migration tool](#section-3g7-2zd-i55).

## Important notes

-   Use temporary tables to ensure atomicity. Bind the temporary table to the partitioned table only after the import completes. This avoids manual cleanup if the import fails.
    
-   When updating data in a child partition, delete the existing child table and attach the new temporary table in a single transaction. This ensures transactional consistency.
    
-   To import DataWorks jobs using the migration tool, meet these requirements:
    
    -   Your DataWorks edition must be Standard Edition or later. For more information, see [Feature Details by Version](/help/en/dataworks/user-guide/differences-among-dataworks-editions#concept-265336).
        
    -   Your DataWorks workspace must be attached to both MaxCompute and Hologres data sources. For more information, see [Configure a workspace](/help/en/dataworks/user-guide/create-and-manage-workspaces/#task-2481177).
        

## Detailed procedure

1.  Prepare MaxCompute data
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the destination region, choose **Data Analytics & Services** > **Data Analysis** in the navigation pane on the left. Click **Go to Data Analytics**. Then, in the navigation pane on the left, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1717386571/p1002064.png) icon to go to the **SQL Query** page.
        
    2.  On the **SQL Query** page, enter the following SQL statement to create a partitioned table. Click **Run**.
        
        ```
        DROP TABLE IF EXISTS odps_sale_detail;
        
        -- Create a partitioned table named sale_detail.
        CREATE TABLE IF NOT EXISTS odps_sale_detail 
        (
            shop_name STRING
            ,customer_id STRING
            ,total_price DOUBLE
        )
        PARTITIONED BY 
        (
            sale_date STRING
        )
        ;
        ```
        
    3.  On the **SQL Query** page, enter the following SQL statement to import data into the partitioned table. Click **Run**.
        
        ```
        -- Add partition 20210815 to the source table
        ALTER TABLE odps_sale_detail ADD IF NOT EXISTS PARTITION(sale_date='20210815')
        ;
        
        -- Insert data into the partition
        INSERT OVERWRITE TABLE odps_sale_detail PARTITION(sale_date='20210815') VALUES 
        ('s1','c1',100.1),
        ('s2','c2',100.2),
        ('s3','c3',100.3)
        ;
        
        -- Add partition 20210816 to the source table
        ALTER TABLE odps_sale_detail ADD IF NOT EXISTS PARTITION(sale_date='20210816')
        ;
        
        -- Insert data into the partition
        INSERT OVERWRITE TABLE odps_sale_detail PARTITION(sale_date='20210816') VALUES 
        ('s1','c1',100.1),
        ('s2','c2',100.2),
        ('s3','c3',100.3)
        ;
        
        -- Add partition 20210817 to the source table
        ALTER TABLE odps_sale_detail ADD IF NOT EXISTS PARTITION(sale_date='20210817')
        ;
        
        -- Insert data into the partition
        INSERT OVERWRITE TABLE odps_sale_detail PARTITION(sale_date='20210817') VALUES 
        ('s1','c1',100.1),
        ('s2','c2',100.2),
        ('s3','c3',100.3)
        ;
        
        -- Add partition 20210818 to the source table
        ALTER TABLE odps_sale_detail ADD IF NOT EXISTS PARTITION(sale_date='20210818')
        ;
        
        -- Insert data into the partition
        INSERT OVERWRITE TABLE odps_sale_detail PARTITION(sale_date='20210818') VALUES 
        ('s1','c1',100.1),
        ('s2','c2',100.2),
        ('s3','c3',100.3)
        ;
        ```
        
2.  Create tables in Hologres
    
    -   Create a foreign table
        
        1.  Log on to the database.
            
            1.  On the HoloWeb development page, click **Metadata Management**.
                
            2.  On the **Metadata Management** page, double-click the name of the database you created in the directory tree on the left, and then click **OK**.![Log in to the database](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7558722361/p302932.png)
                
        2.  Create a foreign table
            
            1.  In the **SQL Editor** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1429134271/p837747.png) icon in the upper-left corner to create a new SQL query.
                
            2.  In the new **Ad-hoc Query** page, select an existing **Instance Name** and **Database**. In the SQL editor, enter the following statement. Click **Run**.
                
                ```
                DROP FOREIGN TABLE IF EXISTS odps_sale_detail;
                
                -- Create a foreign table
                IMPORT FOREIGN SCHEMA maxcompute_project LIMIT to
                (
                    odps_sale_detail
                ) 
                FROM SERVER odps_server INTO public 
                OPTIONS(if_table_exist 'error',if_unsupported_type 'error');
                ```
                
    -   Create a partitioned table (internal table)
        
        1.  Log on to the database.
            
            1.  On the HoloWeb development page, click **Metadata Management**.
                
            2.  On the **Metadata Management** page, double-click the name of the database you created in the directory tree on the left, and then click **OK**.![Log in to the database](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7558722361/p302932.png)
                
        2.  Create a partitioned table
            
            1.  In the **SQL Editor** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1429134271/p837747.png) icon in the upper-left corner to create a new SQL query.
                
            2.  In the new **Ad-hoc Query** page, select an existing **Instance Name** and **Database**. In the SQL editor, enter the following statement. Click **Run**.
                
                ```
                DROP TABLE IF EXISTS holo_sale_detail;
                
                -- Create a Hologres partitioned table (internal table)
                BEGIN ;
                CREATE TABLE IF NOT EXISTS holo_sale_detail
                (
                    shop_name TEXT
                    ,customer_id TEXT 
                    ,total_price FLOAT8
                    ,sale_date TEXT
                )
                PARTITION BY LIST(sale_date);
                COMMIT;
                ```
                
    
3.  Import partitioned data into a Hologres temporary table
    
    In the **Ad-hoc Query** page, enter the following statement in the SQL editor. Click **Run**.
    
    This SQL statement imports the 20210816 partition from the hologres\_test project's odps\_sale\_detail partitioned table into the 20210816 partition of the holo\_sale\_detail partitioned table in Hologres.
    
    **Note**
    
    Starting from version 2.1.17, Hologres supports Serverless Computing. For large-scale offline imports, large ETL jobs, and high-volume foreign table queries, Serverless Computing uses extra serverless resources instead of your instance's resources. This improves stability and reduces out-of-memory (OOM) errors. You pay only for the tasks you run. For more information, see [Serverless Computing](/help/en/hologres/user-guide/serverless-computing-overview/). For usage instructions, see [Serverless Computing User Guide](/help/en/hologres/user-guide/serverless-computing/).
    
    ```
    -- Clean up potential temporary tables
    BEGIN ;
    
    DROP TABLE IF EXISTS holo_sale_detail_tmp_20210816;
    
    COMMIT ;
    
    -- Create a temporary table
    SET hg_experimental_enable_create_table_like_properties=on;
    
    BEGIN ;
    
    CALL HG_CREATE_TABLE_LIKE ('holo_sale_detail_tmp_20210816', 'select * from holo_sale_detail'); 
    
    COMMIT;
    
    -- (Optional) Use Serverless Computing for large offline imports and ETL jobs
    SET hg_computing_resource = 'serverless';
    
    -- Insert data into the temporary table
    INSERT INTO holo_sale_detail_tmp_20210816
    SELECT *
    FROM public.odps_sale_detail
    WHERE sale_date='20210816';
    
    -- Reset the setting so non-essential SQL statements do not use serverless resources.
    RESET hg_computing_resource;
    ```
    
4.  Attach the temporary table to the Hologres partitioned table
    
    In the **Ad-hoc Query** page, enter the following statement in the SQL editor. Click **Run**.
    
    -   If an old child table exists, delete it first. Then attach the temporary table to the Hologres partitioned table.
        
        This SQL statement deletes the child table holo\_sale\_detail\_20210816 and attaches the temporary table holo\_sale\_detail\_tmp\_20210816 to the 20210816 partition of the holo\_sale\_detail partitioned table.
        
        ```
        -- Replace an existing child table
        BEGIN ;
        
        -- Drop the old child table
        DROP TABLE IF EXISTS holo_sale_detail_20210816;
        
        -- Rename the temporary table
        ALTER TABLE holo_sale_detail_tmp_20210816 RENAME TO holo_sale_detail_20210816;
        
        -- Attach the temporary table to the specified partitioned table
        ALTER TABLE holo_sale_detail ATTACH PARTITION holo_sale_detail_20210816
        FOR VALUES IN ('20210816')
        ;
        
        COMMIT ;
        ```
        
    -   If no old child table exists, attach the temporary table directly to the Hologres partitioned table.
        
        This SQL statement attaches the temporary table holo\_sale\_detail\_tmp\_20210816 to the 20210816 partition of the holo\_sale\_detail partitioned table.
        
        ```
        BEGIN ;
        -- Rename the temporary table
        ALTER TABLE holo_sale_detail_tmp_20210816 RENAME TO holo_sale_detail_20210816;
        -- Attach the temporary table to the specified partitioned table
        ALTER TABLE holo_sale_detail ATTACH PARTITION holo_sale_detail_20210816
        FOR VALUES IN ('20210816');
        COMMIT ;
        ```
        
    
5.  ANALYZE the Hologres partitioned table
    
    In the **Ad-hoc Query** page, enter the following statement in the SQL editor. Click **Run**.
    
    This SQL statement runs ANALYZE on the holo\_sale\_detail partitioned table to verify its execution plan. When you ANALYZE a partitioned table, analyze only the parent table.
    
    ```
    -- Run ANALYZE on the parent table after importing large amounts of data
    ANALYZE holo_sale_detail;
    ```
    
6.  Clean up expired child partitions (optional)
    
    In production environments, data has a lifecycle. Clean up expired partitions as needed.
    
    In the **Ad-hoc Query** page, enter the following statement in the SQL editor. Click **Run**.
    
    This SQL statement cleans up the 20210631 partition.
    
    ```
    DROP TABLE IF EXISTS holo_sale_detail_20210631;
    ```
    

## DataWorks job examples

You often need to run the preceding SQL statements on a schedule. Use DataWorks to schedule and orchestrate jobs. A single scheduled job can cover both scenarios. Read the following content carefully. It helps you customize parameters or scripts when you [import DataWorks jobs using the migration tool](#section-3g7-2zd-i55). The overall workflow is shown below.

**Business flow module details**

-   Basic parameters
    
    Basic parameters manage all parameters used in the workflow. Key parameters include the following:
    
    **ID**
    
    **Parameter name**
    
    **Type**
    
    **Value**
    
    **Description**
    
    1
    
    datepre31
    
    Variable
    
    ${yyyymmdd-31}
    
    Controls cleanup of expired partitions. Cleans up partitions from 31 days ago.
    
    2
    
    datetime1
    
    Variable
    
    $bizdate
    
    Controls partition creation.
    
    3
    
    holo\_table\_name
    
    Constant
    
    holo\_sale\_detail
    
    Name of the Hologres partitioned table.
    
    4
    
    odps\_project
    
    Constant
    
    hologres\_test
    
    Name of the MaxCompute project.
    
    5
    
    odps\_table\_name
    
    Constant
    
    odps\_sale\_detail
    
    Name of the MaxCompute partitioned table.
    
    6
    
    partition\_key
    
    Constant
    
    sale\_date
    
    Partition field in MaxCompute.
    
    The system configuration is shown below.![基础参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9934325361/p310561.png)
    
-   Write partitioned data to a temporary table
    
    This step is a Hologres SQL module. Its SQL code is as follows.
    
    **Note**
    
    Starting from version 2.1.17, Hologres supports Serverless Computing. For large-scale offline imports, large ETL jobs, and high-volume foreign table queries, Serverless Computing uses extra serverless resources instead of your instance's resources. This improves stability and reduces out-of-memory (OOM) errors. You pay only for the tasks you run. For more information, see [Serverless Computing](/help/en/hologres/user-guide/serverless-computing-overview/). For usage instructions, see [Serverless Computing User Guide](/help/en/hologres/user-guide/serverless-computing/).
    
    ```
    -- Clean up potential temporary tables
    BEGIN ;
    
    DROP TABLE IF EXISTS ${holo_table_name}_tmp_${datetime1};
    
    COMMIT ;
    
    -- Create a temporary table
    SET hg_experimental_enable_create_table_like_properties=on;
    
    BEGIN ;
    
    CALL HG_CREATE_TABLE_LIKE ('${holo_table_name}_tmp_${datetime1}', 'select * from ${holo_table_name}'); 
    
    COMMIT;
    
    -- Insert data into the temporary table
    
    -- (Optional) Use Serverless Computing for large offline imports and ETL jobs
    SET hg_computing_resource = 'serverless';
    
    INSERT INTO ${holo_table_name}_tmp_${datetime1}
    SELECT *
    FROM public.${odps_table_name}
    WHERE ${partition_key}='${datetime1}';
    
    -- Reset the setting so non-essential SQL statements do not use serverless resources
    RESET hg_computing_resource;
    ```
    
    Bind basic parameters to this module upstream to control parameter variables. The system configuration is shown below.![写入分区数据至临时表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9934325361/p310574.png)
    
-   Replace child tables
    
    This step is a Hologres SQL module. It replaces existing child tables. Wrap the replacement process in a transaction to ensure consistency. Its SQL code is as follows.
    
    ```
    -- Replace an existing child table
    BEGIN ;
    
    -- Drop the existing child table
    DROP TABLE IF EXISTS ${holo_table_name}_${datetime1};
    
    -- Rename the temporary table
    ALTER TABLE ${holo_table_name}_tmp_${datetime1} RENAME TO ${holo_table_name}_${datetime1};
    
    -- Attach the temporary table to the specified partitioned table
    ALTER TABLE ${holo_table_name} ATTACH PARTITION ${holo_table_name}_${datetime1}
    FOR VALUES IN ('${datetime1}');
    
    COMMIT ;
    ```
    
    Bind basic parameters to this module upstream to control parameter variables. The system configuration is shown below.![替换子表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1429134271/p342109.png)
    
-   Collect statistics for the partitioned table
    
    This step is a Hologres SQL module. It collects statistics for the parent table. Its SQL code is as follows.
    
    ```
    -- Run ANALYZE on the parent table after importing large amounts of data
    ANALYZE ${holo_table_name};
    ```
    
    Bind basic parameters to this module upstream to control parameter variables. The system configuration is shown below.![收集分区表的统计信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9934325361/p310613.png)
    
-   Clean up expired child tables
    
    In production environments, data has a lifecycle. Clean up expired partitions as needed.
    
    For example, keep only the last 31 days of partitions in Hologres. Because the parameter datepre31=${yyyymmdd-31} was set earlier, the SQL code to clean up expired child tables is as follows. Before dropping a physical partition's child table, detach it from the parent table (DETACH PARTITION). Otherwise, the child table remains attached to the parent table.
    
    ```
    -- Clean up expired child tables: detach first, then drop
    
    BEGIN ;
    
    ALTER TABLE ${holo_table_name} DETACH PARTITION ${holo_table_name}_${datepre31};
    
    DROP TABLE IF EXISTS ${holo_table_name}_${datepre31};
    
    COMMIT ;
    ```
    
    So if $bizdate is 20200309, then datepre31 is 20200207. This achieves the goal of cleaning up partitions.
    
    Also bind basic parameters to this module upstream to control parameter variables. The system configuration is shown below.![清理过期子表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9934325361/p310621.png)
    

## Import DataWorks jobs using the migration tool

-   If the job is complex, use the DataWorks migration assistant. Import the following file into your project. You get the DataWorks job described above. Then adjust parameters or scripts as needed for your business.
    
-   Download the job package: [DataWorks job package](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/307131/cn_zh/1634804904752/odps2holo_20211020-995379ae-271d-4273-9479-12a0ba8f0d47.zip).
    

1.  Open the DataWorks migration assistant. For more information, see [Open the migration assistant](/help/en/dataworks/user-guide/create-and-view-export-tasks#section-5n4-cqu-io9).
    
2.  In the navigation pane on the left of the migration assistant, click **DataWorks Migration** > **DataWorks Import**.
    
3.  On the **DataWorks Import** page, click **Create Import Task** in the upper-right corner.
    
4.  In the **Create Import Task** dialog box, configure the parameters.
    
    ![新建导入任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9990149061/p144026.png)
    
    **Parameter**
    
    **Description**
    
    **Import Name**
    
    A custom name. The import name can contain only letters, digits, underscores (\_), and periods (.).
    
    **Upload Method**
    
    How to upload the file.
    
    -   **Local Upload**: Use this method if the exported package file is 30 MB or smaller.
        
    -   **OSS URL**: If the exported package file is larger than 30 MB, upload it to OSS. Copy the URL from the OSS console file details page. Paste the OSS URL into the DataWorks workspace. For OSS upload steps, see [Upload files in the console](/help/en/oss/getting-started/upload-objects-16#concept-zx1-4p4-tdb). For how to get an OSS download URL, see [Share files](/help/en/oss/user-guide/share-objects-by-url#task-2025983).![下载链接](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4904037361/p300632.png)
        
    
    **Remarks**
    
    A brief description of the import task.
    
5.  Click **OK**. Go to the **Import Task Settings** page. Configure the mapping.
    
6.  Click **Start Import** in the lower-left corner. In the **Confirm** dialog box, click **OK**.
    
    1.  After a successful import, the periodic job appears in your Data Development module.
        
    2.  Related DDL statements also appear in your manual workflow.
