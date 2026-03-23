DataWorks scheduling tasks allow you to set the time and frequency of data transmission. They also ensure data integrity and accuracy during transmission and import. You can import partitioned table data from MaxCompute into a partitioned table in Hologres. This process combines the strengths of both platforms to improve data processing efficiency and reliability.

## Prerequisites

-   You have purchased and activated a Hologres instance. For more information, see [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224).
    
-   You have activated MaxCompute and created a project. For more information, see [Activate MaxCompute](/help/en/maxcompute/getting-started/activate-maxcompute-and-dataworks#task-dkr-hyw-5db).
    
-   You have activated DataWorks and created a DataWorks workspace. For more information, see [Create a workspace](/help/en/dataworks/user-guide/create-a-workspace#task-861928).
    

## **Important notes**

Make sure that the Schema service is not enabled at the tenant or project level in MaxCompute. For more information about Schema, see [Schema operations](/help/en/maxcompute/user-guide/schema-related-operations).

## Data preparation

This topic uses the partitioned table dwd\_product\_movie\_basic\_info in the public\_data dataset of MaxCompute as an example. The following shows the table schema for dwd\_product\_movie\_basic\_info.

```
-- DDL for the MaxCompute partitioned table
CREATE TABLE IF NOT EXISTS public_data.dwd_product_movie_basic_info(
  movie_name STRING COMMENT 'Movie name',
  director STRING COMMENT 'Director',
  scriptwriter STRING COMMENT 'Screenwriter',
  area STRING COMMENT 'Production region or country',
  actors STRING COMMENT 'Lead actors',
  `type` STRING COMMENT 'Type',
  movie_length STRING COMMENT 'Movie length',
  movie_date STRING COMMENT 'Release date',
  movie_language STRING COMMENT 'Language',
  imdb_url STRING COMMENT 'IMDb ID'
) 
PARTITIONED BY (ds STRING) STORED AS ALIORC;
```

## Procedure

1.  Prepare MaxCompute data.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the destination region, choose **Data Analytics & Services** > **Data Analysis** in the navigation pane on the left. Click **Go to Data Analytics**. Then, in the navigation pane on the left, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1717386571/p1002064.png) icon to go to the **SQL Query** page.
        
    2.  On the **SQL Query** page, enter the following SQL statement to view data in the `20170112` partition of the partitioned table. Click **Run**.
        
        ```
        SELECT * FROM public_data.dwd_product_movie_basic_info WHERE ds = '20170112';
        ```
        
        The query result is shown in the following figure.
        
2.  Create an external table in Hologres.
    
    Create an external table in Hologres to map data from the source MaxCompute table. The field order and field types of the external table must match those of the MaxCompute table.
    
    1.  Log on to the or [HoloWeb console SQL editor](https://holoweb-cn-hongkong.data.aliyun.com/query).
        
    2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3877076571/p1001966.png) icon below the **SQL Editor** tab to open a **Ad-hoc Query** window. In the toolbar of the query window, select the **Instance Name** and **Database** for your Hologres instance.
        
    3.  In the editor of the **Ad-hoc Query** window, enter the following statement and click **Run**.
        
        The following statement uses the `IMPORT FOREIGN SCHEMA` command to create a Hologres external table named dwd\_product\_movie\_basic\_info.
        
        ```
        IMPORT FOREIGN SCHEMA public_data LIMIT TO (dwd_product_movie_basic_info) FROM SERVER odps_server INTO public OPTIONS(if_table_exist 'update');
        ```
        
3.  Create a managed table (internal table) in Hologres.
    
    Create an internal table in Hologres to receive and store data.
    
    1.  On the **HoloWeb** development page, click **Ad-hoc Query**.
        
    2.  On the new **Ad-hoc Query** page, select the **Instance Name** and **Database**. Then, enter the following statement in the SQL query editor and click **Run**.
        
        This example imports a MaxCompute partitioned table into Hologres. Therefore, the internal table that you create in Hologres must be a partitioned table.
        
        **Note**
        
        The following CREATE TABLE statement is a simple example. Create the actual Data Definition Language (DDL) statement as needed. You should also configure appropriate indexes for the table to optimize query performance.
        
        ```
        BEGIN;
        CREATE TABLE "public"."holo_dwd_product_movie_basic_info" (
         "movie_name" TEXT,
         "director" TEXT,
         "scriptwriter" TEXT,
         "area" TEXT,
         "actors" TEXT,
         "type" TEXT,
         "movie_length" TEXT,
         "movie_date" TEXT,
         "movie_language" TEXT,
         "imdb_url" TEXT,
         "ds" TEXT
        )
        PARTITION BY LIST (ds);
        CALL SET_TABLE_PROPERTY('"public"."holo_dwd_product_movie_basic_info"', 'orientation', 'column');
        COMMENT ON COLUMN "public"."holo_dwd_product_movie_basic_info"."movie_name" IS 'Movie name';
        COMMENT ON COLUMN "public"."holo_dwd_product_movie_basic_info"."director" IS 'Director';
        COMMENT ON COLUMN "public"."holo_dwd_product_movie_basic_info"."scriptwriter" IS 'Screenwriter';
        COMMENT ON COLUMN "public"."holo_dwd_product_movie_basic_info"."area" IS 'Production region or country';
        COMMENT ON COLUMN "public"."holo_dwd_product_movie_basic_info"."actors" IS 'Lead actors';
        COMMENT ON COLUMN "public"."holo_dwd_product_movie_basic_info"."type" IS 'Type';
        COMMENT ON COLUMN "public"."holo_dwd_product_movie_basic_info"."movie_length" IS 'Movie length';
        COMMENT ON COLUMN "public"."holo_dwd_product_movie_basic_info"."movie_date" IS 'Release date';
        COMMENT ON COLUMN "public"."holo_dwd_product_movie_basic_info"."movie_language" IS 'Language';
        COMMENT ON COLUMN "public"."holo_dwd_product_movie_basic_info"."imdb_url" IS 'IMDb ID';
        COMMIT;
        ```
        
4.  Develop data for partitioned child tables.
    
    This step is a Hologres SQL module that schedules partitioned tables.
    
    1.  Log on to the [DataWorks console](https://workbench.data.aliyun.com/console). Go to the DataStudio page and create a Hologres SQL node. For more information, see [Hologres SQL node](/help/en/dataworks/user-guide/create-a-hologres-sql-node#task-1955157).
        
    2.  On the node editing page, enter the following statement.
        
        Hologres does not support directly writing partitioned data to a partitioned parent table. You must create a partitioned child table in Hologres that matches the partition key value in the MaxCompute partitioned table. Then, import the partitioned data into the corresponding partitioned child table. The partition key value is controlled by the parameter ${bizdate}. The scheduling system automatically assigns this parameter to enable periodic scheduling. For more information about scheduling parameters, see [Supported formats for scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#concept-t2q-jmq-p2b).
        
        **Note**
        
        The imported partitioned data must match the partition key value. In this example, the partition key is ds. Otherwise, an error occurs.
        
        The following sections describe two scenarios for importing partitioned data. Choose the one that fits your business logic.
        
        -   Scenario 1: Import new partitioned data.
            
            ```
            -- Create a temporary partitioned child table
            BEGIN;
            CREATE TABLE IF NOT EXISTS "public".tmp_holo_dwd_product_movie_basic_info_${bizdate}  (
             "movie_name" TEXT,
             "director" TEXT,
             "scriptwriter" TEXT,
             "area" TEXT,
             "actors" TEXT,
             "type" TEXT,
             "movie_length" TEXT,
             "movie_date" TEXT,
             "movie_language" TEXT,
             "imdb_url" TEXT,
             "ds" TEXT
            );
            COMMIT;
            
            -- Update external table data
            IMPORT FOREIGN SCHEMA public_data LIMIT TO (dwd_product_movie_basic_info) FROM SERVER odps_server INTO public OPTIONS(if_table_exist 'update');
            
            -- Wait for 30 seconds before importing data into Hologres to prevent data inconsistency caused by slow cache updates of Hologres metadata
            SELECT pg_sleep(30); 
            
            -- Import MaxCompute data into the temporary partitioned child table
            INSERT INTO "public".tmp_holo_dwd_product_movie_basic_info_${bizdate} 
            SELECT 
                "movie_name",
                "director",
                "scriptwriter",
                "area",
                "actors",
                "type",
                "movie_length",
                "movie_date",
                "movie_language",
                "imdb_url",
                "ds"
            FROM "public".dwd_product_movie_basic_info
            WHERE ds='${bizdate}';
            
            -- Import new partitioned data
            BEGIN;
            
            ALTER TABLE tmp_holo_dwd_product_movie_basic_info_${bizdate} RENAME TO holo_dwd_product_movie_basic_info_${bizdate};
            
            -- Attach the temporary partitioned child table to the partitioned parent table
            ALTER TABLE holo_dwd_product_movie_basic_info ATTACH PARTITION holo_dwd_product_movie_basic_info_${bizdate} FOR VALUES IN ('${bizdate}');
            
            COMMIT;
                                                
            ```
            
        -   Scenario 2: Refresh historical partitioned data.
            
            ```
            -- Create a temporary partitioned child table
            BEGIN;
            CREATE TABLE IF NOT EXISTS "public".tmp_holo_dwd_product_movie_basic_info_${bizdate}  (
             "movie_name" TEXT,
             "director" TEXT,
             "scriptwriter" TEXT,
             "area" TEXT,
             "actors" TEXT,
             "type" TEXT,
             "movie_length" TEXT,
             "movie_date" TEXT,
             "movie_language" TEXT,
             "imdb_url" TEXT,
             "ds" TEXT
            );
            COMMIT;
            
            -- Update external table data
            IMPORT FOREIGN SCHEMA public_data LIMIT TO (dwd_product_movie_basic_info) FROM SERVER odps_server INTO public OPTIONS(if_table_exist 'update');
            
            -- Wait for 30 seconds before importing data into Hologres to prevent data inconsistency caused by slow cache updates of Hologres metadata
            SELECT pg_sleep(30); 
            
            -- Import MaxCompute data into the temporary partitioned child table
            INSERT INTO "public".tmp_holo_dwd_product_movie_basic_info_${bizdate} 
            SELECT 
                "movie_name",
                "director",
                "scriptwriter",
                "area",
                "actors",
                "type",
                "movie_length",
                "movie_date",
                "movie_language",
                "imdb_url",
                "ds"
            FROM "public".dwd_product_movie_basic_info
            WHERE ds='${bizdate}';
            
            -- Refresh historical partitioned data
            BEGIN;
            
            ALTER TABLE IF EXISTS holo_dwd_product_movie_basic_info DETACH PARTITION holo_dwd_product_movie_basic_info_${bizdate};
            
            DROP TABLE IF EXISTS holo_dwd_product_movie_basic_info_${bizdate};
            
            ALTER TABLE tmp_holo_dwd_product_movie_basic_info_${bizdate} RENAME TO holo_dwd_product_movie_basic_info_${bizdate};
            
            -- Attach the partitioned child table to the partitioned parent table
            ALTER TABLE holo_dwd_product_movie_basic_info ATTACH PARTITION holo_dwd_product_movie_basic_info_${bizdate} FOR VALUES IN ('${bizdate}');
            
            COMMIT;
            ```
            
        
5.  Configure scheduling.
    
    On the **Hologres SQL** node editing page, click **Scheduling Configuration** in the right-side pane to configure the scheduling properties for the node.
    
    **Note**
    
    Change only the following parameters. Keep all other parameters at their default values.
    
    -   Basic properties
        
        **Parameter**
        
        **Value**
        
        Parameter
        
        bizdate=${yyyymmdd}
        
    -   Time properties![时间属性](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1717386571/p334738.png)
        
        **Parameter**
        
        **Value**
        
        Instance generation method
        
        Generate immediately after publishing
        
        Re-run property
        
        Cannot re-run after successful execution. Can re-run after failed execution
        
        Scheduled time
        
        00:05
        
    -   Scheduling dependencies
        
        Set the root node as the scheduling dependency. You can also choose an existing parent node based on your business logic. First, set **Code Parsing** to Yes. Then, click **Code Parsing** to automatically parse the root node. Finally, set **Code Parsing** to No.
        
    
6.  Publish the scheduling task.
    
    1.  On the **Hologres SQL** editing page, click the ![保存](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2272191371/p113864.png) icon in the toolbar to save the node.
        
    2.  Click the ![提交](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2272191371/p98393.png) icon in the toolbar to submit the node.
        
    3.  In the **Submit New Version** dialog box, enter a description of the change in the **Change Description** field.
        
    4.  Click **OK**.
        
7.  Publish in Operation Center.
    
    1.  On the **Hologres SQL** editing page, click **O&M** on the far right of the toolbar.
        
    2.  Go to the **Operation Center** page. In the navigation pane on the left, choose **Scheduled Task O&M** > **Scheduled Tasks**.
        
    3.  On the **Scheduled Tasks** page, right-click the node and choose **Backfill Data** > **Current Node**.
        
        ![补数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1717386571/p334813.png)
        
    4.  In the navigation pane on the left, choose **O&M Assistant** > **Backfill Data** to view running tasks and their status.
        
8.  View data.
    
    After the task runs successfully, Hologres automatically creates a partitioned child table for the corresponding partitioned data.
    
    1.  Go to the DataStudio page and create a Hologres SQL node. For more information, see [Hologres SQL node](/help/en/dataworks/user-guide/create-a-hologres-sql-node#task-1955157).
        
    2.  On the node editing page, enter the following statements to query data.
        
        -   Query data in the partitioned child table.
            
            ```
            SELECT * FROM holo_dwd_product_movie_basic_info_20170112;
            ```
            
        -   Query the total number of rows in the partitioned parent table.
            
            ```
            SELECT COUNT (*) FROM holo_dwd_product_movie_basic_info;
            ```
