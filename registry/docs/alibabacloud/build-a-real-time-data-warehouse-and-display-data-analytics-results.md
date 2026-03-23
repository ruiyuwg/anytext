This topic describes best practices for connecting Hologres to Realtime Compute for Apache Flink to quickly build a real-time data warehouse analysis dashboard.

## Prerequisites

-   Activate Hologres and connect a development tool. For more information, see [Connect to HoloWeb and execute queries](/help/en/hologres/getting-started/connect-to-holoweb#task-2523359).
    
-   Activate Realtime Compute for Apache Flink. For more information, see [Activate Realtime Compute for Apache Flink](/help/en/flink/realtime-flink/getting-started/activate-fully-managed-flink).
    
    **Note**
    
    Make sure that Realtime Compute for Apache Flink and Hologres are in the same region and use the same vSwitch and VPC.
    
-   Activate DataV. For more information, see [Activate DataV Service](/help/en/datav/datav-6-0/getting-started/activate-datav#task-2323429).
    

## Background information

Hologres is a real-time interactive analysis product from Alibaba Cloud. It connects to Realtime Compute for Apache Flink through a built-in real-time data API supports high-concurrency, real-time data writes and queries in seconds.

Hologres is compatible with PostgreSQL. You can connect it directly to business intelligence (BI) analysis tools to quickly analyze and visualize queried data.

This topic uses an example of building a real-time operations dashboard for an e-commerce store. The dashboard displays total store traffic, visits per store, regional sales volume, and best-selling products.

The following event chain diagram shows the complete process of building a real-time operations dashboard with Hologres.![a](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2929670061/p120681.png)

-   Collect source data and write it to Realtime Compute for Apache Flink in real time. Use Realtime Compute for Apache Flink to scrub and aggregate the data.
    
-   Write the processed data to Hologres in real time. Use Hologres for interactive search.
    
-   Connect Hologres to a DataV data dashboard to display the real-time operations dashboard.
    

## Procedure

1.  Obtain the source data.
    
    Obtain the source data from DataHub or other business logs.
    
    For convenience, this tutorial generates data directly from Realtime Compute for Apache Flink. For more information, see Step 3.
    
2.  Create a data receiving table in Hologres.
    
    Use HoloWeb to create a table with the same fields and data types as the source table. This table will accept the real-time data. For specific instructions, see [Connect to HoloWeb and execute queries](/help/en/hologres/getting-started/connect-to-holoweb). The following example shows the SQL statement.
    
    ```
    BEGIN;
    CREATE TABLE public.order_details (
    "user_id" int8,
    "user_name" text,
    "item_id" int8,
    "item_name" text,
    "price" numeric(38,2),
    "province" text,
    "city" text,
    "ip" text,
    "longitude" text,
    "latitude" text,
    "sale_timestamp" timestamptz NOT NULL
    );
    CALL SET_TABLE_PROPERTY('public.order_details','orientation', 'column');
    CALL SET_TABLE_PROPERTY('public.order_details','clustering_key', 'sale_timestamp:asc');
    CALL SET_TABLE_PROPERTY('public.order_details','segment_key', 'sale_timestamp');
    CALL SET_TABLE_PROPERTY('public.order_details','bitmap_columns', 'user_name,item_name,province,city,ip,longitude,latitude');
    CALL SET_TABLE_PROPERTY('public.order_details','dictionary_encoding_columns','user_name:auto,item_name:auto,province:auto,city:auto,ip:auto,longitude:auto,latitude:auto');
    CALL SET_TABLE_PROPERTY('public.order_details','time_to_live_in_seconds', '3153600000');
    CALL SET_TABLE_PROPERTY('public.order_details','distribution_key', 'user_id');
    CALL SET_TABLE_PROPERTY('public.order_details','storage_format', 'orc');
    COMMIT;
    ```
    
3.  In the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai), upload the custom connector JAR resource [ordergen](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20241128/mclrwm/hologres-connector-flink-ordergen-1.0-SNAPSHOT-jar-with-dependencies.jar). For specific instructions, see [Upload and use a custom connector](/help/en/flink/realtime-flink/user-guide/manage-custom-connectors#section-oou-9va-2ie).
    
4.  Data is cleansed in real time.
    
    Go to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai). Use Realtime Compute for Apache Flink to scrub and aggregate the source data. Then, write the data to Hologres in real time using the real-time data API. For specific instructions, see [Job development map](/help/en/flink/realtime-flink/user-guide/develop-an-sql-draft). The following example shows the SQL statement.
    
    ```
    CREATE TEMPORARY TABLE source_table (
    user_id BIGINT,
    user_name VARCHAR,
    item_id BIGINT,
    item_name VARCHAR,
    price numeric (38, 2),
    province VARCHAR,
    city VARCHAR,
    longitude VARCHAR,
    latitude VARCHAR,
    ip VARCHAR,
    sale_timestamp TIMESTAMP
     )
    WITH ('connector' = 'ordergen');
    
    CREATE TEMPORARY TABLE hologres_sink (
    user_id BIGINT,
    user_name VARCHAR,
    item_id BIGINT,
    item_name VARCHAR,
    price numeric (38, 2),
    province VARCHAR,
    city VARCHAR,
    longitude VARCHAR,
    latitude VARCHAR,
    ip VARCHAR,
    sale_timestamp TIMESTAMP
     )
    WITH (
    'connector' = 'hologres',
    'dbname' = '<holo_db>',
    'tablename' = '<receive_table>',
    'username' = '<uid>',
    'password' = '<pid>',
    'endpoint' = '<host>'
     );
    
    INSERT INTO hologres_sink
    SELECT user_id,
     user_name,
     item_id,
     item_name,
     price,
     province,
     city,
     longitude,
     latitude,
     ip,
     sale_timestamp
    FROM
    source_table;
    ```
    
    The following table describes the parameters.
    
    **Parameter name**
    
    **Description**
    
    holo\_db
    
    The name of the Hologres database.
    
    receive\_table
    
    The name of the table in Hologres that accepts the data. In this topic, the table is `public.order_details`.
    
    uid
    
    The AccessKey ID of your Alibaba Cloud account.
    
    pid
    
    The AccessKey secret of your Alibaba Cloud account.
    
    host
    
    The domain name of the Hologres instance in the specified VPC network. Go to the instance details page in the [Hologres console](https://hologram.console.alibabacloud.com/#/instance) to get the domain name from the **Network Information** section.
    
5.  Go to the **Job O&M** page in the Realtime Compute for Apache Flink console and start the job until it is running. For more information, see [Start a job](/help/en/flink/realtime-flink/user-guide/start-a-deployment).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4957872371/p865932.png)
    
6.  Query data in real time in Hologres.
    
    In Hologres, query the real-time data from different dimensions as needed. The following examples show some queries.
    
    ```
    SELECT SUM(price) AS "GMV" FROM order_details ;
    
    SELECT COUNT(DISTINCT user_id) AS "UV" FROM order_details ;
    
    SELECT city AS "city", COUNT(DISTINCT user_id) AS "user_count" FROM order_details GROUP BY "city" ORDER BY "user_count" DESC limit 100;
    
    SELECT item_name AS "product", SUM(price) AS "sales_amount" FROM order_details GROUP BY "product" ORDER BY "sales_amount" DESC limit 100;
    
    SELECT to_char(sale_timestamp, 'MM-DD') AS "date", SUM(price) AS "GMV" FROM order_details GROUP BY "date" ORDER BY "GMV" DESC limit 100;                
    ```
    
7.  Display the real-time DataV dashboard.
    
    Connect the data queried from Hologres directly to DataV to create a real-time dashboard. The procedure is as follows:
    
    1.  Add a data source.
        
        1.  Go to the [DataV console](https://datav.alibabacloud.com/). In the navigation pane on the left, choose **Data Preparation** > **Data Source**. On the **Data Source** page, click **Add Data Source**.
            
        2.  In the **Add Data Source** panel, configure the parameters for the Hologres data source.
            
        3.  Click **OK**.
            
        
    2.  Create a real-time dashboard.
        
        Select the required widgets and configure the data source based on the content you want to display on the dashboard. For more information, see [Overview](/help/en/datav/datav-6-0/user-guide/components-overview#concept-r3t-w4m-q2b).
        
        This tutorial uses a basic bar chart, carousel, basic flat map, and ticker board. The following example shows how to configure a ticker board.
        
        1.  Configure the data source.
            
        2.  Configure the border, font, and color of the ticker board.
            
        
    3.  Display the real-time dashboard.
        
        After you configure the dashboard's plugin parameters and data source, you can add decorative elements to enhance the plugin as needed.
        
        -   The left side shows real-time product visits and city sales.
            
        -   The map in the middle shows the location of each transaction, total sales, and total visits in real time.
            
        -   The right side shows the sales proportion and sales ranking of products in real time.
